# addDays()

Adds or subtracts days from a Date object. Handles month boundaries, leap years, and daylight saving time transitions properly.

## Syntax

```typescript
addDays(dateObj, days[, timeZone])
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dateObj` | `Date` | Yes | The base Date object |
| `days` | `number` | Yes | Number of days to add (positive) or subtract (negative) |
| `timeZone` | `TimeZone \| 'UTC'` | No | Timezone for the calculation |

### Returns

`Date` - A new Date object with the specified number of days added or subtracted

## Basic Examples

### Adding and Subtracting Days

```typescript
import { addDays } from 'date-and-time';

const date = new Date(2024, 7, 15); // August 15, 2024

// Add days
const future = addDays(date, 10);
console.log(future); // August 25, 2024

// Subtract days
const past = addDays(date, -5);
console.log(past); // August 10, 2024
```

### Daylight Saving Time Aware Calculations

```typescript
import { addDays } from 'date-and-time';
import New_York from 'date-and-time/timezones/America/New_York';

// Working with specific timezones
const nyDate = new Date('2024-03-10T05:00:00Z'); // March 10, 2024 05:00 UTC (DST transition day)

// Add 30 days in New York timezone
const futureNY = addDays(nyDate, 30, New_York);
console.log(futureNY); // April 9, 2024 04:00 UTC (EDT, DST adjusted)

// UTC calculation for comparison
const futureUTC = addDays(nyDate, 30, 'UTC');
console.log(futureUTC); // April 9, 2024 05:00 UTC (same time, no DST adjustment)
```

## Use Cases

### Work Day Calculations

```typescript
function addBusinessDays(date: Date, businessDays: number): Date {
  let result = new Date(date);
  let daysToAdd = businessDays;
  
  while (daysToAdd > 0) {
    result = addDays(result, 1);
    const dayOfWeek = result.getDay();
    
    // Skip weekends (0 = Sunday, 6 = Saturday)
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      daysToAdd--;
    }
  }
  
  return result;
}

const friday = new Date(2024, 7, 23); // August 23, 2024 (Friday)
const nextBusinessDay = addBusinessDays(friday, 1);
console.log(nextBusinessDay); // August 26, 2024 (Monday)
```

### Date Range Generation

```typescript
function generateDateRange(startDate: Date, endDate: Date): Date[] {
  const dates: Date[] = [];
  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate = addDays(currentDate, 1);
  }
  
  return dates;
}

const start = new Date(2024, 7, 28); // August 28, 2024
const end = new Date(2024, 8, 3);   // September 3, 2024
const dateRange = generateDateRange(start, end);
console.log(dateRange);
// [Aug 28, Aug 29, Aug 30, Aug 31, Sep 1, Sep 2, Sep 3]
```

## Immutability

`addDays()` does not modify the original Date object:

```typescript
const originalDate = new Date(2024, 7, 15);
const modifiedDate = addDays(originalDate, 10);

console.log(originalDate); // August 15, 2024 (unchanged)
console.log(modifiedDate); // August 25, 2024 (new object)
```

## See Also

- [`addYears()`](./addYears) - Add/subtract years
- [`addMonths()`](./addMonths) - Add/subtract months  
- [`addHours()`](./addHours) - Add/subtract hours
- [`addMinutes()`](./addMinutes) - Add/subtract minutes
- [`addSeconds()`](./addSeconds) - Add/subtract seconds
- [`addMilliseconds()`](./addMilliseconds) - Add/subtract milliseconds
- [`subtract()`](./subtract) - Calculate differences with Duration objects
