# addSeconds()

Adds or subtracts seconds from a Date object.

## Syntax

```typescript
addSeconds(dateObj, seconds)
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dateObj` | `Date` | Yes | The base Date object |
| `seconds` | `number` | Yes | Number of seconds to add (positive) or subtract (negative) |

### Returns

`Date` - A new Date object with the specified number of seconds added or subtracted

## Basic Examples

### Adding and Subtracting Seconds

```typescript
import { addSeconds } from 'date-and-time';

const date = new Date(2024, 7, 15, 14, 30, 45, 123);  // August 15, 2024 14:30:45.123

// Add seconds
const future = addSeconds(date, 30);
console.log(future);  // August 15, 2024 14:31:15.123

// Subtract seconds
const past = addSeconds(date, -20);
console.log(past);  // August 15, 2024 14:30:25.123
```

## Use Cases

### Countdown Timers

```typescript
function createCountdown(duration: number): { start: Date, end: Date, remaining: () => number } {
  const start = new Date();
  const end = addSeconds(start, duration);
  
  return {
    start,
    end,
    remaining: () => Math.max(0, Math.floor((end.getTime() - Date.now()) / 1000))
  };
}

const countdown = createCountdown(300); // 5 minute countdown
console.log(`Countdown ends at: ${countdown.end.toLocaleTimeString()}`);
console.log(`Time remaining: ${countdown.remaining()} seconds`);

// Use in a timer
const updateCountdown = () => {
  const remaining = countdown.remaining();
  if (remaining > 0) {
    console.log(`${remaining} seconds left`);
    setTimeout(updateCountdown, 1000);
  } else {
    console.log('Time up!');
  }
};

updateCountdown();
```

### Precise Time Intervals

```typescript
function generateTimeIntervals(startTime: Date, intervalSeconds: number, count: number): Date[] {
  const intervals: Date[] = [];
  let currentTime = new Date(startTime);  

  for (let i = 0; i < count; i++) {
    intervals.push(new Date(currentTime));
    currentTime = addSeconds(currentTime, intervalSeconds);
  }
  
  return intervals;
}

const start = new Date(2024, 7, 15, 12, 0, 0);  // August 15, 2024 12:00:00
const intervals = generateTimeIntervals(start, 15, 8);  // Every 15 seconds, 8 times

console.log(intervals);
// [12:00:00, 12:00:15, 12:00:30, 12:00:45, 12:01:00, 12:01:15, 12:01:30, 12:01:45]
```

## Immutability

`addSeconds()` does not modify the original Date object:

```typescript
const originalDate = new Date(2024, 7, 15, 14, 30, 45);
const modifiedDate = addSeconds(originalDate, 120);

console.log(originalDate);  // August 15, 2024 14:30:45 (unchanged)
console.log(modifiedDate);  // August 15, 2024 14:32:45 (new object);
```

## See Also

- [`addYears()`](./addYears) - Add/subtract years
- [`addMonths()`](./addMonths) - Add/subtract months
- [`addDays()`](./addDays) - Add/subtract days
- [`addHours()`](./addHours) - Add/subtract hours
- [`addMinutes()`](./addMinutes) - Add/subtract minutes
- [`addMilliseconds()`](./addMilliseconds) - Add/subtract milliseconds
- [`subtract()`](./subtract) - Calculate differences with Duration objects
