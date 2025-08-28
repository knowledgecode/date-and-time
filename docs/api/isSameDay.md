# isSameDay()

Check if two Date objects represent the same calendar day, regardless of time.

## Syntax

```typescript
isSameDay(date1, date2)
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `date1` | `Date` | Yes | The first Date object to compare |
| `date2` | `Date` | Yes | The second Date object to compare |

### Returns

`boolean` - Returns `true` if both dates are on the same calendar day, `false` otherwise

## Basic Examples

### Comparing Calendar Days

```typescript
import { isSameDay } from 'date-and-time';

const morning = new Date(2024, 7, 15, 9, 30, 0);   // August 15, 2024 09:30:00
const evening = new Date(2024, 7, 15, 18, 45, 30);  // August 15, 2024 18:45:30
const nextDay = new Date(2024, 7, 16, 9, 30, 0);    // August 16, 2024 09:30:00

console.log(isSameDay(morning, evening)); // true (same day, different times)
console.log(isSameDay(morning, nextDay)); // false (different days)
```

### Ignoring Time Components

```typescript
const startOfDay = new Date(2024, 7, 15, 0, 0, 0, 0);     // August 15, 2024 00:00:00.000
const endOfDay = new Date(2024, 7, 15, 23, 59, 59, 999);  // August 15, 2024 23:59:59.999

console.log(isSameDay(startOfDay, endOfDay)); // true

// Even milliseconds don't matter for day comparison
const precise1 = new Date(2024, 7, 15, 12, 30, 45, 123);
const precise2 = new Date(2024, 7, 15, 12, 30, 45, 456);

console.log(isSameDay(precise1, precise2)); // true
```
