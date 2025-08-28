# isValid()

Validates whether a date string conforms to the specified format pattern and represents a valid date.

## Syntax

```typescript
isValid(dateString, formatString[, options])
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dateString` | `string` | Yes | The date string to validate |
| `formatString` | `string \| CompiledObject` | Yes | The format pattern or compiled object |
| `options` | `ParserOptions` | No | Parser options for validation (see [`parse()`](./parse#parseroptions) for details) |

### Returns

`boolean` - `true` if the date string is valid and matches the format, `false` otherwise

## Basic Examples

```typescript
import { isValid } from 'date-and-time';

// Valid dates
isValid('2025-08-23', 'YYYY-MM-DD');           // => true
isValid('08/23/2025', 'MM/DD/YYYY');           // => true  
isValid('14:30:45', 'HH:mm:ss');               // => true
isValid('2:30 PM', 'h:mm A');                  // => true

// Invalid dates
isValid('2025-02-30', 'YYYY-MM-DD');           // => false (Feb 30th doesn't exist)
isValid('2025-13-01', 'YYYY-MM-DD');           // => false (month 13 doesn't exist)
isValid('25:30:00', 'HH:mm:ss');               // => false (hour 25 doesn't exist)
isValid('invalid-date', 'YYYY-MM-DD');         // => false (doesn't match format)

// Format mismatch
isValid('2025-08-23', 'MM/DD/YYYY');           // => false (wrong format)
isValid('08/23/2025', 'YYYY-MM-DD');           // => false (wrong format)
```

## Validation with Options

### Locale Validation

```typescript
import { isValid } from 'date-and-time';
import es from 'date-and-time/locales/es';

// Spanish month names
isValid('23 de agosto de 2025', 'D [de] MMMM [de] YYYY', { locale: es });  // => true
isValid('23 de invalid de 2025', 'D [de] MMMM [de] YYYY', { locale: es }); // => false
```

### Case-Insensitive Validation

```typescript
import { isValid } from 'date-and-time';

// Case-sensitive (default)
isValid('AUGUST 23, 2025', 'MMMM D, YYYY');                    // => false
isValid('august 23, 2025', 'MMMM D, YYYY');                    // => false

// Case-insensitive
isValid('AUGUST 23, 2025', 'MMMM D, YYYY', { ignoreCase: true });  // => true
isValid('august 23, 2025', 'MMMM D, YYYY', { ignoreCase: true });  // => true
isValid('August 23, 2025', 'MMMM D, YYYY');                        // => true (correct case)
```

## Advanced Validation Patterns

### Multiple Format Validation

```typescript
import { isValid } from 'date-and-time';

function isValidDate(dateString: string): boolean {
  const formats = [
    'YYYY-MM-DD',
    'MM/DD/YYYY',
    'DD.MM.YYYY',
    'MMMM D, YYYY',
    'MMM D, YYYY'
  ];
  
  return formats.some(format => isValid(dateString, format));
}

// Usage
console.log(isValidDate('2025-08-23'));      // => true
console.log(isValidDate('08/23/2025'));      // => true
console.log(isValidDate('23.08.2025'));      // => true
console.log(isValidDate('August 23, 2025')); // => true
console.log(isValidDate('invalid-date'));    // => false
```

### Business Rule Validation

```typescript
import { isValid, parse } from 'date-and-time';

function isBusinessDay(dateString: string, format: string): boolean {
  // First check if it's a valid date
  if (!isValid(dateString, format)) {
    return false;
  }
  
  // Parse and check if it's a weekday
  const date = parse(dateString, format);
  const dayOfWeek = date.getDay();
  
  // 0 = Sunday, 6 = Saturday
  return dayOfWeek >= 1 && dayOfWeek <= 5;
}

// Usage
console.log(isBusinessDay('2025-08-23', 'YYYY-MM-DD'));  // => false (Saturday)
console.log(isBusinessDay('2025-08-25', 'YYYY-MM-DD'));  // => true (Monday)
```

### Range Validation

```typescript
import { isValid, parse } from 'date-and-time';

function isValidInRange(
  dateString: string, 
  format: string, 
  minDate: Date, 
  maxDate: Date
): boolean {
  if (!isValid(dateString, format)) {
    return false;
  }
  
  const date = parse(dateString, format);
  return date >= minDate && date <= maxDate;
}

// Usage
const min = new Date(2025, 0, 1);  // Jan 1, 2025
const max = new Date(2025, 11, 31); // Dec 31, 2025

console.log(isValidInRange('2025-08-23', 'YYYY-MM-DD', min, max));  // => true
console.log(isValidInRange('2024-08-23', 'YYYY-MM-DD', min, max));  // => false
```

## Performance with Compiled Patterns

For repeated validation, use `compile()` for better performance:

```typescript
import { isValid, compile } from 'date-and-time';

// Compile once
const pattern = compile('YYYY-MM-DD HH:mm:ss');

// Validate multiple times (faster)
const dateStrings = [
  '2025-08-23 14:30:45',
  '2025-08-24 09:15:30',
  '2025-02-30 12:00:00',  // Invalid
  '2025-08-25 16:45:20'
];

const validDates = dateStrings.filter(dateString => 
  isValid(dateString, pattern)
);

console.log('Valid dates:', validDates);
// => ['2025-08-23 14:30:45', '2025-08-24 09:15:30', '2025-08-25 16:45:20']
```

## Common Use Cases

### Form Input Validation

```typescript
import { isValid, parse } from 'date-and-time';

class DateInputValidator {
  static validateBirthDate(dateString: string): boolean {
    if (!isValid(dateString, 'YYYY-MM-DD')) {
      return false;
    }
    
    const date = parse(dateString, 'YYYY-MM-DD');
    const now = new Date();
    
    // Must be in the past and reasonable range
    return date < now && date > new Date(1900, 0, 1);
  }
  
  static validateAppointment(dateString: string): boolean {
    if (!isValid(dateString, 'YYYY-MM-DD HH:mm')) {
      return false;
    }
    
    const date = parse(dateString, 'YYYY-MM-DD HH:mm');
    const now = new Date();
    
    // Must be in the future
    return date > now;
  }
}
```

### API Input Validation

```typescript
import { isValid, parse } from 'date-and-time';

function validateApiDateRange(startDate: string, endDate: string) {
  const format = 'YYYY-MM-DD';
  
  // Check both dates are valid
  if (!isValid(startDate, format) || !isValid(endDate, format)) {
    throw new Error('Invalid date format. Expected YYYY-MM-DD');
  }
  
  const start = parse(startDate, format);
  const end = parse(endDate, format);
  
  // Check logical order
  if (start >= end) {
    throw new Error('Start date must be before end date');
  }
  
  return { start, end };
}
```

## See Also

- [`parse()`](./parse) - Parse validated date strings into Date objects
- [`compile()`](./compile) - Precompile format patterns for performance
- [`preparse()`](./preparse) - Parse and return intermediate parsing results
