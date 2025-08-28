# addMilliseconds()

Adds or subtracts milliseconds from a Date object.

## Syntax

```typescript
addMilliseconds(dateObj, milliseconds)
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dateObj` | `Date` | Yes | The base Date object |
| `milliseconds` | `number` | Yes | Number of milliseconds to add (positive) or subtract (negative) |

### Returns

`Date` - A new Date object with the specified number of milliseconds added or subtracted

## Basic Examples

### Adding and Subtracting Milliseconds

```typescript
import { addMilliseconds } from 'date-and-time';

const date = new Date(2024, 7, 15, 14, 30, 45, 123);  // August 15, 2024 14:30:45.123

// Add milliseconds
const future = addMilliseconds(date, 500);
console.log(future);  // August 15, 2024 14:30:45.623

// Subtract milliseconds
const past = addMilliseconds(date, -200);
console.log(past);  // August 15, 2024 14:30:44.923
```

## Use Cases

### High-Precision Timing

```typescript
class PrecisionTimer {
  private startTime: Date
  
  start(): void {
    this.startTime = new Date();
  }
  
  elapsedMs(): number {
    if (!this.startTime) {
      return 0;
    }
    return Date.now() - this.startTime.getTime();
  }
  
  addPreciseDelay(baseTime: Date, delayMs: number): Date {
    return addMilliseconds(baseTime, delayMs);
  }
  
  scheduleNextExecution(intervalMs: number): Date {
    return addMilliseconds(new Date(), intervalMs);
  }
}

const timer = new PrecisionTimer();

timer.start();
// ... perform operations ...
console.log(`Operation took: ${timer.elapsedMs()}ms`);

const nextRun = timer.scheduleNextExecution(150); // Schedule 150ms from now
console.log(`Next execution at: ${nextRun.toISOString()}`);
```

### Animation Frame Scheduling

```typescript
function createAnimationSchedule(startTime: Date, frameRate: number, duration: number) {
  const frameInterval = 1000 / frameRate; // ms per frame
  const totalFrames = Math.floor((duration * 1000) / frameInterval);
  const schedule: { frame: number, time: Date }[] = [];  

  for (let frame = 0; frame < totalFrames; frame++) {
    const frameTime = addMilliseconds(startTime, frame * frameInterval);
    schedule.push({ frame, time: frameTime });
  }
  
  return schedule;
}

const animationStart = new Date();  // Animation starts now
const frames = createAnimationSchedule(animationStart, 60, 2);  // 60 FPS for 2 seconds

console.log(`Animation has ${frames.length} frames`);
console.log('First 5 frames:');
frames.slice(0, 5).forEach(f => {
  console.log(`Frame ${f.frame}: ${f.time.toISOString()}`);
});
```

## Immutability

`addMilliseconds()` does not modify the original Date object:

```typescript
const originalDate = new Date(2024, 7, 15, 14, 30, 45, 123);
const modifiedDate = addMilliseconds(originalDate, 500);

console.log(originalDate);  // August 15, 2024 14:30:45.123 (unchanged)
console.log(modifiedDate);  // August 15, 2024 14:30:45.623 (new object)
```

## See Also

- [`addYears()`](./addYears) - Add/subtract years
- [`addMonths()`](./addMonths) - Add/subtract months
- [`addDays()`](./addDays) - Add/subtract days
- [`addHours()`](./addHours) - Add/subtract hours
- [`addMinutes()`](./addMinutes) - Add/subtract minutes
- [`addSeconds()`](./addSeconds) - Add/subtract seconds
- [`subtract()`](./subtract) - Calculate differences with Duration objects
