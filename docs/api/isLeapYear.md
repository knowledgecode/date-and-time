# isLeapYear()

Determine if a given year is a leap year according to the Gregorian calendar rules.

## Syntax

```typescript
isLeapYear(year)
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `year` | `number` | Yes | The year to check |

### Returns

`boolean` - Returns `true` if the year is a leap year, `false` otherwise

## Basic Examples

### Checking Leap Years

```typescript
import { isLeapYear } from 'date-and-time';

console.log(isLeapYear(2024)); // true (divisible by 4)
console.log(isLeapYear(2023)); // false (not divisible by 4)
console.log(isLeapYear(2000)); // true (divisible by 400)
console.log(isLeapYear(1900)); // false (divisible by 100 but not by 400)
```

### Working with Date Objects

```typescript
function checkDateLeapYear(date: Date): boolean {
  return isLeapYear(date.getFullYear());
}

const dates = [
  new Date(2024, 1, 29), // February 29, 2024
  new Date(2023, 1, 28), // February 28, 2023
  new Date(2000, 1, 29)  // February 29, 2000
];

dates.forEach(date => {
  const year = date.getFullYear();
  console.log(`${year}: ${isLeapYear(year) ? 'Leap year' : 'Not a leap year'}`);
});
```

## Edge Cases

### Historical Context

```typescript
// Note: Gregorian calendar was adopted in 1582
// Before that, different leap year rules applied
function isHistoricalAccurate(year: number): boolean {
  if (year < 1582) {
    console.warn('Year is before Gregorian calendar adoption (1582)');
    // Julian calendar had simpler rule: every 4 years
    return year % 4 === 0;
  }
  return isLeapYear(year);
}

console.log(isHistoricalAccurate(1500));  // true (Julian calendar rule)
console.log(isHistoricalAccurate(1700));  // false (Gregorian calendar rule)
```
