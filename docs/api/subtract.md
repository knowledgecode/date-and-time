# subtract()

Calculates the difference between two Date objects and return a rich Duration object with multiple time units and formatting options.

## Syntax

```typescript
subtract(date1, date2)
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `date1` | `Date` | Yes | The earlier/start date |
| `date2` | `Date` | Yes | The later/end date |

### Returns

`Duration` - Rich duration object containing the time difference with properties for years, months, days, hours, minutes, seconds, and milliseconds

## Basic Examples

### Calculating Time Differences

```typescript
import { subtract } from 'date-and-time';

const start = new Date(2024, 0, 1, 10, 30, 0);  // January 1, 2024 10:30:00
const end = new Date(2024, 0, 1, 14, 45, 30);   // January 1, 2024 14:45:30

const duration = subtract(start, end);

console.log(duration.toHours().value);    // 4.258333...
console.log(duration.toMinutes().value);  // 255.5
console.log(duration.toSeconds().value);  // 15330

const hoursParts = duration.toHours().toParts();

console.log(hoursParts.hours);    // 4
console.log(hoursParts.minutes);  // 15
console.log(hoursParts.seconds);  // 30
```

### Cross-Day Calculation

```typescript
const start = new Date(2024, 6, 15, 22, 30); // July 15, 2024 22:30
const end = new Date(2024, 6, 18, 8, 15);     // July 18, 2024 08:15

const duration = subtract(start, end);
const daysParts = duration.toDays().toParts();

console.log(daysParts.days);     // 2
console.log(daysParts.hours);    // 9
console.log(daysParts.minutes);  // 45
console.log(duration.toHours().value); // 57.75 (total hours as decimal)
```

### Age Calculation

```typescript
const birthDate = new Date(1990, 5, 15); // June 15, 1990
const today = new Date(); // Current date

const age = subtract(birthDate, today);
const ageParts = age.toDays().toParts();

// Note: Simple age calculation (not accounting for leap years)
console.log(`Age: ${Math.floor(ageParts.days / 365)} years`);

// Get total days lived
console.log(`Total days lived: ${ageParts.days}`);
```

## Duration Object Methods

The returned Duration object provides methods to convert and format durations. The Duration can also be directly instantiated with a millisecond value:

```typescript
class Duration {
  constructor(milliseconds: number)  // Create Duration instance directly
  
  // Convert to different time units with value and formatting capabilities
  toNanoseconds(): DurationDescriptor<NanosecondsParts>
  toMicroseconds(): DurationDescriptor<MicrosecondsParts>
  toMilliseconds(): DurationDescriptor<MillisecondsParts>
  toSeconds(): DurationDescriptor<SecondsParts>
  toMinutes(): DurationDescriptor<MinutesParts>
  toHours(): DurationDescriptor<HoursParts>
  toDays(): DurationDescriptor<DaysParts>
}

interface DurationDescriptor<T> {
  value: number                                        // Total duration in the specified unit
  format: (formatString: string, numeral?: Numeral) => string  // Format duration with custom pattern
  toParts: () => T                                     // Get duration broken down into parts
}

// Example part interfaces
interface HoursParts {
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
  microseconds: number
  nanoseconds: number
}
```

### Creating Duration Instances Directly

```typescript
import { Duration } from 'date-and-time';

// Create a Duration for 2 hours (7200000 milliseconds)
const duration = new Duration(7200000);
console.log(duration.toHours().value);     // 2
console.log(duration.toMinutes().value);   // 120

// Format the duration
console.log(duration.toHours().format('H[h] m[m]'));  // "2h 0m"
```

### Advanced Duration Formatting

```typescript
const start = new Date(2024, 7, 15, 9, 30, 45);
const end = new Date(2024, 7, 18, 16, 15, 20);
const duration = subtract(start, end);

// Various formatting options
console.log(duration.toDays().format('D[d] H[h] m[m]'));          // "3d 6h 44m"
console.log(duration.toHours().format('H:mm:ss'));                // "78:44:35"
console.log(duration.toMinutes().format('[Total minutes:] m'));   // "Total minutes: 4724"
console.log(duration.toDays().format('D[day], H:mm:ss.SSS'));     // "3day, 6:44:35.000"
```

## Use Cases

### Work Session Tracking

```typescript
const clockIn = new Date(2024, 7, 15, 9, 0);   // August 15, 2024 09:00
const clockOut = new Date(2024, 7, 15, 17, 45); // August 15, 2024 17:45

const duration = subtract(clockIn, clockOut);
console.log(duration.toHours().value);           // 8.75
console.log(duration.toHours().format('H:mm'));  // "8:45"
console.log(duration.toHours().format('H[h] m[m]'));  // "8h 45m"
```

### Performance Monitoring

```typescript
const start = performance.now();
// ... some operation ...
const end = performance.now();

// Create Duration directly from millisecond difference
const duration = new Duration(end - start);

console.log(duration.toMilliseconds().format('SSS[ms]'));  // "234ms"
```

## Edge Cases and Behavior

### Negative Durations

When the first argument is later than the second argument, `subtract()` returns negative duration values. This behavior allows for flexible date comparison in either direction.

```typescript
// Comparing dates in reverse chronological order
const later = new Date(2024, 7, 15, 14, 30);    // 2:30 PM
const earlier = new Date(2024, 7, 15, 10, 15);  // 10:15 AM

const negativeDuration = subtract(later, earlier);
console.log(negativeDuration.toHours().value);    // -4.25 (negative value)
console.log(negativeDuration.toMinutes().value);  // -255 (all values are negative)

// Format methods handle negative values appropriately
console.log(negativeDuration.toHours().format('H[h] m[m]'));  // "-4h 15m"
```

### Negative Zero

An edge case of negative durations occurs when the difference is negative but the integer part of certain units is zero. This affects both `toParts()` and `format()` output differently.

```typescript
// Short negative duration (less than 1 day but more than 1 hour)
const date1 = new Date(2024, 7, 15, 14, 30);  // 2:30 PM
const date2 = new Date(2024, 7, 15, 12, 15);  // 12:15 PM

const duration = subtract(date1, date2);
console.log(duration.toDays().value);   // -0.09375 (negative but less than 1 day)

// toParts() shows negative signs on all non-zero unit values
const parts = duration.toDays().toParts();
console.log(parts);  // { days: 0, hours: -2, minutes: -15, seconds: 0, ... }

// format() places a single negative sign at the beginning, potentially creating "-0"
console.log(duration.toDays().format('D[day], H:mm:ss'));  // "-0day, 2:15:00"
```

## Immutability

Both input Date objects remain unchanged:

```typescript
const date1 = new Date(2024, 7, 15, 14, 30);
const date2 = new Date(2024, 7, 15, 12, 15);
const duration = subtract(date2, date1);

console.log(date1); // Unchanged
console.log(date2); // Unchanged
console.log(duration.toHours().value);  // 2.25 (new Duration object)
```

## See Also

- [`addYears()`](./addYears) - Add/subtract years
- [`addMonths()`](./addMonths) - Add/subtract months
- [`addDays()`](./addDays) - Add/subtract days
- [`addHours()`](./addHours) - Add/subtract hours
- [`addMinutes()`](./addMinutes) - Add/subtract minutes
- [`addSeconds()`](./addSeconds) - Add/subtract seconds
- [`addMilliseconds()`](./addMilliseconds) - Add/subtract milliseconds
