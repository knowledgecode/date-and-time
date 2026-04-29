---
title: getDaysInMonth()
---

Returns the number of days in a given month of a specific year. Correctly handles leap years when calculating February.

## Syntax

```typescript
getDaysInMonth(date)
getDaysInMonth(year, month)
```

### Parameters

| Parameter | Type     | Required         | Description                            |
|-----------|----------|------------------|----------------------------------------|
| `date`    | `Date`   | Yes (overload 1) | The date object whose month to examine |
| `year`    | `number` | Yes (overload 2) | The Gregorian year (1–9999)            |
| `month`   | `number` | Yes (overload 2) | The month (1–12)                       |

### Returns

`number` - The number of days in the specified month

## Basic Examples

### Using a Date Object

```typescript
import { getDaysInMonth } from 'date-and-time';

getDaysInMonth(new Date(2024, 1, 1)); // => 29 (Feb 2024, leap year)
getDaysInMonth(new Date(2023, 1, 1)); // => 28 (Feb 2023, not a leap year)
getDaysInMonth(new Date(2025, 0, 1)); // => 31 (January 2025)
```

### Using Year and Month Numbers

```typescript
import { getDaysInMonth } from 'date-and-time';

getDaysInMonth(2024, 2); // => 29 (Feb 2024, leap year)
getDaysInMonth(2023, 2); // => 28 (Feb 2023, not a leap year)
getDaysInMonth(2025, 4); // => 30 (April 2025)
getDaysInMonth(2025, 12); // => 31 (December 2025)
```

## See Also

- [`isLeapYear()`](./isLeapYear) - Check if a year is a leap year
- [`addMonths()`](../addMonths) - Add months to a date
