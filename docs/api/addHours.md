# addHours()

Adds or subtracts hours from a Date object.

## Syntax

```typescript
addHours(dateObj, hours)
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dateObj` | `Date` | Yes | The base Date object |
| `hours` | `number` | Yes | Number of hours to add (positive) or subtract (negative) |

### Returns

`Date` - A new Date object with the specified number of hours added or subtracted

## Basic Examples

### Adding and Subtracting Hours

```typescript
import { addHours } from 'date-and-time';

const date = new Date(2024, 7, 15, 14, 30, 45); // August 15, 2024 14:30:45

// Add hours
const future = addHours(date, 6);
console.log(future);  // August 15, 2024 20:30:45

// Subtract hours
const past = addHours(date, -3);
console.log(past);  // August 15, 2024 11:30:45
```

## Use Cases

### Work Hours Calculation

```typescript
function addWorkingHours(startDate: Date, workHours: number): Date {
  // Assuming 8-hour work days, 5 days a week
  const hoursPerDay = 8;
  const result = new Date(startDate);
  let remainingHours = workHours;
  
  while (remainingHours > 0) {
    const dayOfWeek = result.getDay();
    
    // Skip weekends
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      result.setDate(result.getDate() + 1);
      continue;
    }
    
    const hoursToAdd = Math.min(remainingHours, hoursPerDay);
    const newTime = addHours(result, hoursToAdd);
    result.setTime(newTime.getTime());
    remainingHours -= hoursToAdd;
    
    if (remainingHours > 0) {
      // Move to next day, reset to start of work day
      result.setDate(result.getDate() + 1);
      result.setHours(9, 0, 0, 0); // 9 AM start
    }
  }
  
  return result;
}

const projectStart = new Date(2024, 7, 15, 9, 0); // August 15, 2024 09:00
const completion = addWorkingHours(projectStart, 24); // 24 working hours
console.log(completion);
```

### Shift Scheduling

```typescript
function generateShiftSchedule(startDate: Date, shiftHours: number, numberOfShifts: number): Date[] {
  const shifts: Date[] = [];
  let currentStart = new Date(startDate);  

  for (let i = 0; i < numberOfShifts; i++) {
    shifts.push(new Date(currentStart));
    currentStart = addHours(currentStart, shiftHours);
  }
  
  return shifts;
}

const firstShift = new Date(2024, 7, 15, 6, 0); // August 15, 2024 06:00
const schedule = generateShiftSchedule(firstShift, 8, 5); // 5 shifts of 8 hours each
console.log(schedule);
// [
//   August 15, 2024 06:00,  // Shift 1
//   August 15, 2024 14:00,  // Shift 2  
//   August 15, 2024 22:00,  // Shift 3
//   August 16, 2024 06:00,  // Shift 4
//   August 16, 2024 14:00   // Shift 5
// ]
```

## Immutability

`addHours()` does not modify the original Date object:

```typescript
const originalDate = new Date(2024, 7, 15, 14, 30);
const modifiedDate = addHours(originalDate, 5);

console.log(originalDate); // August 15, 2024 14:30:00 (unchanged)
console.log(modifiedDate); // August 15, 2024 19:30:00 (new object)
```

## See Also

- [`addYears()`](./addYears) - Add/subtract years
- [`addMonths()`](./addMonths) - Add/subtract months
- [`addDays()`](./addDays) - Add/subtract days
- [`addMinutes()`](./addMinutes) - Add/subtract minutes
- [`addSeconds()`](./addSeconds) - Add/subtract seconds
- [`addMilliseconds()`](./addMilliseconds) - Add/subtract milliseconds
- [`subtract()`](./subtract) - Calculate differences with Duration objects
