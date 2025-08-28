# addYears()

Adds or subtracts years from a Date object. Handles leap years and edge cases appropriately.

## Syntax

```typescript
addYears(dateObj, years[, timeZone])
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dateObj` | `Date` | Yes | The base Date object |
| `years` | `number` | Yes | Number of years to add (positive) or subtract (negative) |
| `timeZone` | `TimeZone \| 'UTC'` | No | Timezone for the calculation |

### Returns

`Date` - A new Date object with the specified number of years added or subtracted

## Basic Examples

### Adding and Subtracting Years

```typescript
import { addYears } from 'date-and-time';

const date = new Date(2024, 0, 15); // January 15, 2024

// Add years
const future = addYears(date, 3);
console.log(future);  // January 15, 2027

// Subtract years
const past = addYears(date, -2);
console.log(past);  // January 15, 2022
```

### Daylight Saving Time Aware Calculations

```typescript
import { addYears } from 'date-and-time';
import New_York from 'date-and-time/timezones/America/New_York';

// Working with specific timezones
const nyDate = new Date('2024-03-10T05:00:00Z'); // March 10, 2024 05:00 UTC (DST transition day)

// Add years in New York timezone
const futureNY = addYears(nyDate, 1, New_York);
console.log(futureNY); // March 10, 2025 04:00 UTC (EST, DST adjusted)

// UTC calculation for comparison
const futureUTC = addYears(nyDate, 1, 'UTC');
console.log(futureUTC); // March 10, 2025 05:00 UTC (same time, no DST adjustment)
```

## Use Cases

### Age Calculation

```typescript
function calculateAge(birthDate: Date): number {
  const now = new Date();
  const thisYear = addYears(birthDate, now.getFullYear() - birthDate.getFullYear());  

  if (thisYear > now) {
    return now.getFullYear() - birthDate.getFullYear() - 1;
  }
  return now.getFullYear() - birthDate.getFullYear();
}

const birthDate = new Date(1990, 6, 15);  // July 15, 1990;
console.log(calculateAge(birthDate)); // Current age
```

### Financial Year Calculations

```typescript
function getFinancialYearEnd(date: Date): Date {
  const currentYear = date.getFullYear();
  const financialYearEnd = new Date(currentYear, 2, 31);  // March 31

  if (date <= financialYearEnd) {
    return financialYearEnd;
  } else {
    return addYears(financialYearEnd, 1); // Next year's March 31
  }
}

const someDate = new Date(2024, 5, 15); // June 15, 2024
console.log(getFinancialYearEnd(someDate)); // March 31, 2025
```

## Edge Cases and Behavior

### February 29 Handling

```typescript
// Starting from February 29 (leap year)
const feb29 = new Date(2024, 1, 29);  // February 29, 2024

// Adding to non-leap years
console.log(addYears(feb29, 1));  // February 28, 2025
console.log(addYears(feb29, 2));  // February 28, 2026
console.log(addYears(feb29, 3));  // February 28, 2027
console.log(addYears(feb29, 4));  // February 29, 2028 (leap year)
```

### Negative Years

```typescript
const date = new Date(2024, 6, 15); // July 15, 2024

// Go back in time
console.log(addYears(date, -10));   // July 15, 2014
console.log(addYears(date, -100));  // July 15, 1924
```

## Immutability

`addYears()` does not modify the original Date object:

```typescript
const originalDate = new Date(2024, 0, 15);
const modifiedDate = addYears(originalDate, 5);

console.log(originalDate);  // January 15, 2024 (unchanged)
console.log(modifiedDate);  // January 15, 2029 (new object)
```

## See Also

- [`addMonths()`](./addMonths) - Add/subtract months
- [`addDays()`](./addDays) - Add/subtract days
- [`addHours()`](./addHours) - Add/subtract hours
- [`addMinutes()`](./addMinutes) - Add/subtract minutes
- [`addSeconds()`](./addSeconds) - Add/subtract seconds
- [`addMilliseconds()`](./addMilliseconds) - Add/subtract milliseconds
- [`subtract()`](./subtract) - Calculate differences with Duration objects
