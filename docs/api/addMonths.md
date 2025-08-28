# addMonths()

Adds or subtracts months from a Date object. Handles month boundaries, leap years, and varying month lengths appropriately.

## Syntax

```typescript
addMonths(dateObj, months[, timeZone])
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dateObj` | `Date` | Yes | The base Date object |
| `months` | `number` | Yes | Number of months to add (positive) or subtract (negative) |
| `timeZone` | `TimeZone \| 'UTC'` | No | Timezone for the calculation |

### Returns

`Date` - A new Date object with the specified number of months added or subtracted

## Basic Examples

### Adding and Subtracting Months

```typescript
import { addMonths } from 'date-and-time';

const date = new Date(2024, 0, 15); // January 15, 2024

// Add months
const future = addMonths(date, 6);
console.log(future);  // July 15, 2024

// Subtract months
const past = addMonths(date, -3);
console.log(past);  // October 15, 2023
```

### Daylight Saving Time Aware Calculations

```typescript
import { addMonths } from 'date-and-time';
import New_York from 'date-and-time/timezones/America/New_York';

// Working with specific timezones
const nyDate = new Date('2024-03-10T05:00:00Z'); // March 10, 2024 05:00 UTC (DST transition day)

// Add 6 months in New York timezone
const futureNY = addMonths(nyDate, 6, New_York);
console.log(futureNY); // September 10, 2024 04:00 UTC (EDT, DST adjusted)

// UTC calculation for comparison
const futureUTC = addMonths(nyDate, 6, 'UTC');
console.log(futureUTC); // September 10, 2024 05:00 UTC (same time, no DST adjustment)
```

## Use Cases

### Payment Due Dates

```typescript
function calculatePaymentSchedule(startDate: Date, months: number): Date[] {
  const schedule: Date[] = [];
  
  for (let i = 1; i <= months; i++) {
    schedule.push(addMonths(startDate, i));
  }
  
  return schedule;
}

const loanStart = new Date(2024, 0, 15); // January 15, 2024
const payments = calculatePaymentSchedule(loanStart, 12);
console.log(payments);
// [February 15, March 15, April 15, ..., January 15]
```

### Quarterly Reports

```typescript
function getQuarterlyDates(year: number): Date[] {
  const q1 = new Date(year, 0, 1);  // January 1
  return [
    q1,               // Q1
    addMonths(q1, 3), // Q2 - April 1
    addMonths(q1, 6), // Q3 - July 1
    addMonths(q1, 9)  // Q4 - October 1
  ];
}

const quarters2024 = getQuarterlyDates(2024);
console.log(quarters2024);
```

## Edge Cases and Behavior

### End-of-Month Dates

```typescript
const endOfMonth = new Date(2024, 0, 31); // January 31, 2024

console.log(addMonths(endOfMonth, 1));  // February 29, 2024 (Feb has 29 days)
console.log(addMonths(endOfMonth, 2));  // March 31, 2024 (back to 31st)
console.log(addMonths(endOfMonth, 3));  // April 30, 2024 (April has 30 days)
```

### February Edge Cases

```typescript
// February 28 in non-leap year
const feb28 = new Date(2025, 1, 28);  // February 28, 2025
console.log(addMonths(feb28, 12));    // February 28, 2026
console.log(addMonths(feb28, -12));   // February 28, 2024 (leap year, but stays at 28)

// February 29 in leap year
const feb29 = new Date(2024, 1, 29);  // February 29, 2024
console.log(addMonths(feb29, 1));     // March 29, 2024
console.log(addMonths(feb29, -1));    // January 29, 2024
```

## Immutability

`addMonths()` does not modify the original Date object:

```typescript
const originalDate = new Date(2024, 0, 15);
const modifiedDate = addMonths(originalDate, 6);

console.log(originalDate);  // January 15, 2024 (unchanged)
console.log(modifiedDate);  // July 15, 2024 (new object)
```

## See Also

- [`addYears()`](./addYears) - Add/subtract years
- [`addDays()`](./addDays) - Add/subtract days
- [`addHours()`](./addHours) - Add/subtract hours
- [`addMinutes()`](./addMinutes) - Add/subtract minutes
- [`addSeconds()`](./addSeconds) - Add/subtract seconds
- [`addMilliseconds()`](./addMilliseconds) - Add/subtract milliseconds
- [`subtract()`](./subtract) - Calculate differences with Duration objects
