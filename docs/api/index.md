# API Reference

Welcome to the comprehensive API reference for date-and-time v4.x. This section provides detailed documentation for all available functions, types, and options.

## Core Functions

### Formatting and Parsing

| Function | Description |
|----------|-------------|
| [`format()`](./format) | Convert Date objects to formatted strings |
| [`parse()`](./parse) | Parse date strings into Date objects |
| [`compile()`](./compile) | Precompile format patterns for performance |
| [`preparse()`](./preparse) | Parse and return intermediate parsing results |
| [`isValid()`](./isValid) | Validate date string formats |
| [`transform()`](./transform) | Transform date strings between formats |

### Date Arithmetic

| Function | Description |
|----------|-------------|
| [`addYears()`](./add-functions#addyears) | Add/subtract years from dates |
| [`addMonths()`](./add-functions#addmonths) | Add/subtract months from dates |
| [`addDays()`](./add-functions#adddays) | Add/subtract days from dates |
| [`addHours()`](./add-functions#addhours) | Add/subtract hours from dates |
| [`addMinutes()`](./add-functions#addminutes) | Add/subtract minutes from dates |
| [`addSeconds()`](./add-functions#addseconds) | Add/subtract seconds from dates |
| [`addMilliseconds()`](./add-functions#addmilliseconds) | Add/subtract milliseconds from dates |
| [`subtract()`](./subtract) | Calculate time differences with Duration objects |

### Utility Functions

| Function | Description |
|----------|-------------|
| [`isLeapYear()`](./utilities#isleapyear) | Check if a year is a leap year |
| [`isSameDay()`](./utilities#issameday) | Check if two dates are on the same day |

## Quick Examples

### Basic Usage

```typescript
import { format, parse, isValid } from 'date-and-time'

// Formatting
const date = new Date()
format(date, 'YYYY-MM-DD HH:mm:ss');
// => 2025-08-23 14:30:45

// Parsing
const parsed = parse('2025-08-23 14:30:45', 'YYYY-MM-DD HH:mm:ss');
// => Date object

// Validation
isValid('2025-02-29', 'YYYY-MM-DD'); // => false (not a leap year)
```

### With Options

```typescript
import { format } from 'date-and-time';
import ja from 'date-and-time/locales/ja';
import Tokyo from 'date-and-time/timezones/Asia/Tokyo';

format(new Date(), 'YYYY年M月D日(ddd) HH:mm', {
  locale: ja,
  timeZone: Tokyo
});
// => 2025年8月23日(土) 23:30
```

## Types and Interfaces

### Option Types

#### FormatterOptions

```typescript
interface FormatterOptions {
  locale?: Locale;                    // Locale object for localized formatting
  timeZone?: TimeZone | 'UTC';        // Timezone object or UTC string
  numeral?: Numeral;                  // Numeral system for number formatting
  calendar?: 'gregory' | 'buddhist';  // Calendar system
  hour12?: 'h11' | 'h12';             // 12-hour format type
  hour24?: 'h23' | 'h24';             // 24-hour format type
}
```

#### ParserOptions

```typescript
interface ParserOptions {
  locale?: Locale;                    // Locale object for localized parsing
  timeZone?: TimeZone | 'UTC';        // Timezone object or UTC string
  numeral?: Numeral;                  // Numeral system for number parsing
  calendar?: 'gregory' | 'buddhist';  // Calendar system
  hour12?: 'h11' | 'h12';             // 12-hour format type
  hour24?: 'h23' | 'h24';             // 24-hour format type
  ignoreCase?: boolean;               // Case-insensitive parsing
}
```

## Format Tokens

### Date Tokens

| Token | Meaning | Output Examples |
|-------|---------|-----------------|
| `YYYY` | 4-digit year | 0999, 2015 |
| `YY` | 2-digit year | 99, 01, 15 |
| `Y` | Year without zero padding | 2, 44, 888, 2015 |
| `MMMM` | Full month name | January, December |
| `MMM` | Short month name | Jan, Dec |
| `MM` | Month | 01, 12 |
| `M` | Month without zero padding | 1, 12 |
| `DD` | Day | 02, 31 |
| `D` | Day without zero padding | 2, 31 |

### Time Tokens

| Token | Meaning | Output Examples |
|-------|---------|-----------------|
| `HH` | Hour in 24-hour format | 23, 08 |
| `H` | Hour in 24-hour format without zero padding | 23, 8 |
| `hh` | Hour in 12-hour format | 11, 08 |
| `h` | Hour in 12-hour format without zero padding | 11, 8 |
| `mm` | Minutes | 14, 07 |
| `m` | Minutes without zero padding | 14, 7 |
| `ss` | Seconds | 05, 10 |
| `s` | Seconds without zero padding | 5, 10 |
| `SSS` | 3-digit milliseconds | 753, 022 |
| `SS` | 2-digit milliseconds | 75, 02 |
| `S` | 1-digit milliseconds | 7, 0 |

### Day of Week Tokens

| Token | Meaning | Output Examples |
|-------|---------|-----------------|
| `dddd` | Full day name | Friday, Sunday |
| `ddd` | Short day name | Fri, Sun |
| `dd` | Very short day name | Fr, Su |

### AM/PM and Timezone Tokens

| Token | Meaning | Output Examples |
|-------|---------|-----------------|
| `A` | Uppercase AM/PM | AM, PM |
| `AA` | Uppercase AM/PM (with periods) | A.M., P.M. |
| `a` | Lowercase AM/PM | am, pm |
| `aa` | Lowercase AM/PM (with periods) | a.m., p.m. |
| `Z` | Timezone offset | +0100, -0800 |
| `ZZ` | Timezone offset with colon | +01:00, -08:00 |

## Supported Locales

date-and-time supports 40+ locales. Import only the ones you need:

```typescript
// Examples
import ar from 'date-and-time/locales/ar';          // Arabic
import ja from 'date-and-time/locales/ja';          // Japanese
import es from 'date-and-time/locales/es';          // Spanish
import fr from 'date-and-time/locales/fr';          // French
import de from 'date-and-time/locales/de';          // German
import ru from 'date-and-time/locales/ru';          // Russian
import zhHans from 'date-and-time/locales/zh-Hans'; // Simplified Chinese
```

For a complete list of all supported locales with import examples, see [Supported Locales](../locales).

## Supported Timezones

Complete IANA timezone database support. Import specific timezones:

```typescript
// Examples
import Tokyo from 'date-and-time/timezones/Asia/Tokyo';
import New_York from 'date-and-time/timezones/America/New_York';
import London from 'date-and-time/timezones/Europe/London';
import Sydney from 'date-and-time/timezones/Australia/Sydney';
```

For a complete list of all supported timezones with import examples, see [Supported Timezones](../timezones).

## Numeral Systems

Support for different numeral systems:

```typescript
import arab from 'date-and-time/numerals/arab';   // Arabic-Indic
import beng from 'date-and-time/numerals/beng';   // Bengali
import mymr from 'date-and-time/numerals/mymr';   // Myanmar
import latn from 'date-and-time/numerals/latn';   // Latin (default)

format(new Date(), 'DD/MM/YYYY', { numeral: arab });
// => ٠٨/٠٧/٢٠٢٥
```

## Error Handling

### Parse Failures

```typescript
import { parse, isValid } from 'date-and-time';

// Always check validity first
if (!isValid('invalid-date', 'YYYY-MM-DD')) {
  throw new Error('Invalid date format');
}

// Or check parse results
const result = parse('invalid-date', 'YYYY-MM-DD');
if (isNaN(result.getTime())) {
  throw new Error('Parse failed');
}
```

### Type Safety

```typescript
import { format, FormatterOptions } from 'date-and-time';

// TypeScript will catch type errors
const options: FormatterOptions = {
  locale: 'invalid',  // ❌ TypeScript error
  timeZone: 123       // ❌ TypeScript error
};
```

## Performance Tips

1. **Use `compile()`** for repeated operations:

   ```typescript
   const pattern = compile('YYYY-MM-DD HH:mm:ss');
   // Reuse pattern for better performance
   ```

2. **Import only what you need**:

   ```typescript
   import { format } from 'date-and-time';  // ✅ Tree-shakable
   import * as date from 'date-and-time';  // ❌ Imports everything
   ```

## Migration from v3.x

If you're migrating from version 3.x, see the [Migration Guide](../migration) for detailed upgrade instructions and breaking changes.
