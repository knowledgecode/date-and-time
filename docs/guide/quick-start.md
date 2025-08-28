# Quick Start

This guide will get you up and running with date-and-time in just a few minutes.

## Basic Example

```typescript
import { format, parse } from 'date-and-time';

const now = new Date();

// Format a date
const formatted = format(now, 'YYYY/MM/DD HH:mm:ss');
console.log(formatted);
// => 2025/08/23 14:30:45

// Parse a date string
const parsed = parse('2025/08/23 14:30:45', 'YYYY/MM/DD HH:mm:ss');
console.log(parsed);
// => Fri Aug 23 2025 14:30:45 GMT+0900
```

## Common Format Patterns

### Date Formats

```typescript
import { format } from 'date-and-time';

const date = new Date();

format(date, 'YYYY-MM-DD');         // => 2025-08-23
format(date, 'MM/DD/YYYY');         // => 08/23/2025  
format(date, 'DD.MM.YYYY');         // => 23.08.2025
format(date, 'MMMM D, YYYY');       // => August 23, 2025
format(date, 'ddd, MMM DD YYYY');   // => Sat, Aug 23 2025
```

### Time Formats

```typescript
format(date, 'HH:mm:ss');          // => 14:30:45 (24-hour)
format(date, 'hh:mm:ss A');        // => 02:30:45 PM (12-hour)
format(date, 'h:mm A');            // => 2:30 PM (12-hour, no leading zero)
```

### Combined DateTime Formats

```typescript
format(date, 'YYYY-MM-DD HH:mm:ss');  // => 2025-08-23 14:30:45
format(date, 'ddd, MMM D, YYYY [at] h:mm A');
// => Sat, Aug 23, 2025 at 2:30 PM

format(date, '[Today is] dddd');      // => Today is Saturday
```

## Working with Locales

```typescript
import { format } from 'date-and-time';
import ja from 'date-and-time/locales/ja';
import es from 'date-and-time/locales/es';
import fr from 'date-and-time/locales/fr';

const date = new Date();

// Japanese
format(date, 'YYYY年M月D日(ddd)', { locale: ja });
// => 2025年8月23日(土)

// Spanish
format(date, 'dddd, D [de] MMMM [de] YYYY', { locale: es });
// => sábado, 23 de agosto de 2025

// French
format(date, 'dddd D MMMM YYYY', { locale: fr });
// => samedi 23 août 2025
```

For a complete list of all supported locales with import examples, see [Supported Locales](../locales).

## Timezone Operations

```typescript
import { format, parse } from 'date-and-time';
import Tokyo from 'date-and-time/timezones/Asia/Tokyo';
import New_York from 'date-and-time/timezones/America/New_York';

const date = new Date();

// Format in different timezones
format(date, 'YYYY-MM-DD HH:mm:ss [JST]', { timeZone: Tokyo });
// => 2025-08-23 23:30:45 JST

format(date, 'YYYY-MM-DD HH:mm:ss [EST]', { timeZone: New_York });
// => 2025-08-23 09:30:45 EST

// UTC formatting
format(date, 'YYYY-MM-DD HH:mm:ss [UTC]', { timeZone: 'UTC' });
// => 2025-08-23 14:30:45 UTC
```

For a complete list of all supported timezones with import examples, see [Supported Timezones](../timezones).

## Date Arithmetic

```typescript
import { addDays, addHours, addMonths, subtract } from 'date-and-time';

const date = new Date(2025, 7, 23);     // Aug 23, 2025

// Add time
const nextWeek = addDays(date, 7);      // Aug 30, 2025
const nextMonth = addMonths(date, 1);   // Sep 23, 2025
const inFiveHours = addHours(date, 5);  // Aug 23, 2025 05:00:00

// Subtract time (use negative values)
const lastWeek = addDays(date, -7);     // Aug 16, 2025

// Calculate differences
const start = new Date(2025, 7, 23, 10, 0, 0);
const end = new Date(2025, 7, 23, 14, 30, 0);
const duration = subtract(start, end);

console.log(duration.toHours().value);    // => 4.5
console.log(duration.toMinutes().value);  // => 270
```

## Validation

```typescript
import { isValid, parse } from 'date-and-time';

// Check if a date string is valid
isValid('2025/08/23', 'YYYY/MM/DD');      // => true
isValid('2025/02/30', 'YYYY/MM/DD');      // => false (no Feb 30th)
isValid('invalid-date', 'YYYY/MM/DD');    // => false

// Safe parsing with validation
if (isValid('2025/08/23', 'YYYY/MM/DD')) {
  const date = parse('2025/08/23', 'YYYY/MM/DD');
  console.log('Parsed successfully:', date);
} else {
  console.log('Invalid date format');
}
```

## Performance Optimization

For repeated operations with the same format pattern, use `compile()`:

```typescript
import { compile, format, parse } from 'date-and-time';

// Compile the pattern once
const pattern = compile('YYYY/MM/DD HH:mm:ss');

// Reuse for multiple operations (faster)
const dates = [new Date(), new Date(), new Date()];
dates.forEach(date => {
  console.log(format(date, pattern));
});
```

## Error Handling

```typescript
import { parse } from 'date-and-time';

// parse() returns Invalid Date on failure
const result = parse('invalid-date', 'YYYY/MM/DD');

// Check for parsing errors
if (isNaN(result.getTime())) {
  console.error('Failed to parse date');
} else {
  console.log('Successfully parsed:', result);
}
```

## Next Steps

Now that you're familiar with the basics:

1. **[API Reference](/api/)** - Explore all available functions
2. **[Plugins](../plugins)** - Extend functionality with microsecond precision, ordinals, and more
3. **[Migration Guide](../migration)** - If upgrading from v3.x
