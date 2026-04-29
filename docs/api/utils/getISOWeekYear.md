---
title: getISOWeekYear()
---

Returns the ISO 8601 week year for a given date. The ISO week year may differ from the calendar year near the start and end of the year, because ISO weeks always start on Monday and the first week of the year is the one containing the first Thursday of the year.

## Syntax

```typescript
getISOWeekYear(date)
getISOWeekYear(year, month, day)
```

### Parameters

| Parameter | Type     | Required         | Description                 |
|-----------|----------|------------------|-----------------------------|
| `date`    | `Date`   | Yes (overload 1) | The date object to examine  |
| `year`    | `number` | Yes (overload 2) | The Gregorian year (1–9999) |
| `month`   | `number` | Yes (overload 2) | The month (1–12)            |
| `day`     | `number` | Yes (overload 2) | The day (1–31)              |

### Returns

`number` - The ISO week year corresponding to the given date

## Basic Examples

### Using a Date Object

```typescript
import { getISOWeekYear } from 'date-and-time';

getISOWeekYear(new Date(2025, 5, 15)); // => 2025 (mid-year, same as calendar year)
```

### Year Boundary Cases

Near year boundaries, the ISO week year can differ from the calendar year:

```typescript
import { getISOWeekYear } from 'date-and-time';

// Dec 30, 2024 is in ISO week 1 of 2025
getISOWeekYear(new Date(2024, 11, 30)); // => 2025
getISOWeekYear(2024, 12, 30);          // => 2025

// Jan 1, 2016 is in ISO week 53 of 2015
getISOWeekYear(new Date(2016, 0, 1));  // => 2015
getISOWeekYear(2016, 1, 1);           // => 2015
```

## See Also

- [`getISOWeek()`](./getISOWeek) - Get the ISO week number for a date
- [week plugin](../../plugins#week) - Format ISO week dates with `format()`
