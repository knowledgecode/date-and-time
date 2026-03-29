# getISOWeek()

Returns the ISO 8601 week number (1–53) for a given date. ISO weeks start on Monday, and week 1 is the week containing the first Thursday of the year.

## Syntax

```typescript
getISOWeek(date)
getISOWeek(year, month, day)
```

### Parameters

| Parameter | Type     | Required         | Description                 |
|-----------|----------|------------------|-----------------------------|
| `date`    | `Date`   | Yes (overload 1) | The date object to examine  |
| `year`    | `number` | Yes (overload 2) | The Gregorian year (1–9999) |
| `month`   | `number` | Yes (overload 2) | The month (1–12)            |
| `day`     | `number` | Yes (overload 2) | The day (1–31)              |

### Returns

`number` - The ISO week number (1–53) for the given date

## Basic Examples

### Using a Date Object

```typescript
import { getISOWeek } from 'date-and-time';

getISOWeek(new Date(2025, 0, 1));  // => 1  (Jan 1, 2025 is in week 1)
getISOWeek(new Date(2025, 5, 15)); // => 24 (Jun 15, 2025 is in week 24)
```

### Using Year and Month Numbers

```typescript
import { getISOWeek } from 'date-and-time';

getISOWeek(2025, 1, 1);  // => 1
getISOWeek(2025, 6, 15); // => 24
```

### Years with Week 53

Some years have 53 ISO weeks (when January 1 is a Thursday, or a Wednesday in a leap year):

```typescript
import { getISOWeek } from 'date-and-time';

getISOWeek(new Date(2020, 11, 31)); // => 53 (Dec 31, 2020)
getISOWeek(2020, 12, 31);          // => 53
```

## See Also

- [`getISOWeekYear()`](./getISOWeekYear) - Get the ISO week year for a date
- [week plugin](../../plugins#week) - Format ISO week dates with `format()`
