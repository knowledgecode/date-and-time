# addMinutes()

Adds or subtracts minutes from a Date object.

## Syntax

```typescript
addMinutes(dateObj, minutes)
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dateObj` | `Date` | Yes | The base Date object |
| `minutes` | `number` | Yes | Number of minutes to add (positive) or subtract (negative) |

### Returns

`Date` - A new Date object with the specified number of minutes added or subtracted

## Basic Examples

### Adding and Subtracting Minutes

```typescript
import { addMinutes } from 'date-and-time';

const date = new Date(2024, 7, 15, 14, 30, 45); // August 15, 2024 14:30:45

// Add minutes
const future = addMinutes(date, 25);
console.log(future);  // August 15, 2024 14:55:45

// Subtract minutes
const past = addMinutes(date, -15);
console.log(past);  // August 15, 2024 14:15:45
```

## Use Cases

### Appointment Scheduling

```typescript
function scheduleAppointments(startTime: Date, appointmentLength: number, count: number): Date[] {
  const appointments: Date[] = [];
  let currentTime = new Date(startTime);  

  for (let i = 0; i < count; i++) {
    appointments.push(new Date(currentTime));
    currentTime = addMinutes(currentTime, appointmentLength);
  }
  
  return appointments;
}

const firstAppointment = new Date(2024, 7, 15, 9, 0); // August 15, 2024 09:00
const schedule = scheduleAppointments(firstAppointment, 30, 6); // 6 appointments, 30 min each
console.log(schedule);
// [
//   August 15, 2024 09:00,
//   August 15, 2024 09:30,
//   August 15, 2024 10:00,
//   August 15, 2024 10:30,
//   August 15, 2024 11:00,
//   August 15, 2024 11:30
// ]
```

### Pomodoro Timer

```typescript
class PomodoroTimer {
  private workMinutes = 25;
  private shortBreakMinutes = 5;
  private longBreakMinutes = 15;
  
  createSession(startTime: Date, cycles: number = 4) {
    const schedule: { type: string, start: Date, end: Date }[] = [];
    let currentTime = new Date(startTime);    

    for (let i = 0; i < cycles; i++) {
      // Work session
      const workEnd = addMinutes(currentTime, this.workMinutes);

      schedule.push({
        type: 'work',
        start: new Date(currentTime),
        end: workEnd
      });
      currentTime = workEnd;
      
      // Break session
      const breakMinutes = (i === cycles - 1) ? this.longBreakMinutes : this.shortBreakMinutes;
      const breakEnd = addMinutes(currentTime, breakMinutes);

      schedule.push({
        type: i === cycles - 1 ? 'long-break' : 'short-break',
        start: new Date(currentTime),
        end: breakEnd
      });
      currentTime = breakEnd;
    }
    
    return schedule;
  }
}

const pomodoro = new PomodoroTimer();
const session = pomodoro.createSession(new Date(2024, 7, 15, 9, 0));
console.log(session);
```

## Immutability

`addMinutes()` does not modify the original Date object:

```typescript
const originalDate = new Date(2024, 7, 15, 14, 30);
const modifiedDate = addMinutes(originalDate, 45);

console.log(originalDate);  // August 15, 2024 14:30:00 (unchanged)
console.log(modifiedDate);  // August 15, 2024 15:15:00 (new object)
```

## See Also

- [`addYears()`](./addYears) - Add/subtract years
- [`addMonths()`](./addMonths) - Add/subtract months
- [`addDays()`](./addDays) - Add/subtract days
- [`addHours()`](./addHours) - Add/subtract hours
- [`addSeconds()`](./addSeconds) - Add/subtract seconds
- [`addMilliseconds()`](./addMilliseconds) - Add/subtract milliseconds
- [`subtract()`](./subtract) - Calculate differences with Duration objects
