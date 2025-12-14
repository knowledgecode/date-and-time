# parse()

Parses a formatted date string into a Date object according to the specified format pattern.

## Syntax

```typescript
parse(dateString, formatString[, options])
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dateString` | `string` | Yes | The date string to parse |
| `formatString` | `string \| CompiledObject` | Yes | The format pattern or compiled object |
| `options` | `ParserOptions` | No | Parser options for customization |

### Returns

`Date` - The parsed Date object, or Invalid Date if parsing fails

## Basic Examples

```typescript
import { parse } from 'date-and-time';

// Basic date parsing
parse('2025-08-23', 'YYYY-MM-DD');
// => Fri Aug 23 2025 00:00:00 GMT-0700

parse('08/23/2025', 'MM/DD/YYYY');
// => Fri Aug 23 2025 00:00:00 GMT-0700

parse('23.08.2025', 'DD.MM.YYYY');
// => Fri Aug 23 2025 00:00:00 GMT-0700

// Time parsing
parse('14:30:45', 'HH:mm:ss');
// => Thu Jan 01 1970 14:30:45 GMT-0800

parse('2:30:45 PM', 'h:mm:ss A');
// => Thu Jan 01 1970 14:30:45 GMT-0800

// Combined date and time
parse('2025-08-23 14:30:45', 'YYYY-MM-DD HH:mm:ss');
// => Fri Aug 23 2025 14:30:45 GMT-0700
```

## Format Tokens

### Date Tokens

| Token | Description | Input Examples |
|-------|-------------|----------------|
| `YYYY` | 4-digit year | 0999, 2015 |
| `Y` | Year without zero padding | 2, 44, 888, 2015 |
| `MMMM` | Full month name | January, December |
| `MMM` | Short month name | Jan, Dec |
| `MM` | Month (01-12) | 01, 12 |
| `M` | Month without zero padding | 1, 12 |
| `DD` | Day (01-31) | 02, 31 |
| `D` | Day without zero padding | 2, 31 |

### Time Tokens

| Token | Description | Input Examples |
|-------|-------------|----------------|
| `HH` | Hour in 24-hour format | 23, 08 |
| `H` | Hour in 24-hour format (no padding) | 23, 8 |
| `hh` | Hour in 12-hour format | 11, 08 |
| `h` | Hour in 12-hour format (no padding) | 11, 8 |
| `mm` | Minutes | 14, 07 |
| `m` | Minutes without zero padding | 14, 7 |
| `ss` | Seconds | 05, 10 |
| `s` | Seconds without zero padding | 5, 10 |
| `SSS` | 3-digit milliseconds | 753, 022 |
| `SS` | 2-digit milliseconds | 75, 02 |
| `S` | 1-digit milliseconds | 7, 0 |

### AM/PM Tokens

| Token | Description | Input Examples |
|-------|-------------|----------------|
| `A` | Uppercase AM/PM | AM, PM |
| `AA` | Uppercase AM/PM (with periods) | A.M., P.M. |
| `a` | Lowercase AM/PM | am, pm |
| `aa` | Lowercase AM/PM (with periods) | a.m., p.m. |

### Timezone Tokens

| Token | Description | Input Examples |
|-------|-------------|----------------|
| `Z` | Timezone offset | +0100, -0800 |
| `ZZ` | Timezone offset with colon | +01:00, -08:00 |

### Plugin Tokens

Additional tokens available with plugins:

| Token | Description | Input Examples | Plugin Required |
|-------|-------------|----------------|-----------------|
| `YY` | 2-digit year | 90, 00, 08, 19 | two-digit-year |
| `DDD` | Ordinal representation | 1st, 2nd, 3rd | ordinal |
| `dddd` | Full day name | Friday, Sunday | day-of-week |
| `ddd` | Short day name | Fri, Sun | day-of-week |
| `dd` | Very short day name | Fr, Su | day-of-week |
| `SSSSSS` | 6-digit milliseconds | 123456, 000001 | microsecond |
| `SSSSS` | 5-digit milliseconds | 12345, 00001 | microsecond |
| `SSSS` | 4-digit milliseconds | 1234, 0001 | microsecond |
| `fff` | 3-digit microseconds | 753, 022 | microsecond |
| `ff` | 2-digit microseconds | 75, 02 | microsecond |
| `f` | 1-digit microseconds | 7, 0 | microsecond |
| `SSSSSSSSS` | 9-digit milliseconds | 123456789, 000000001 | nanosecond |
| `SSSSSSSS` | 8-digit milliseconds | 12345678, 00000001 | nanosecond |
| `SSSSSSS` | 7-digit milliseconds | 1234567, 0000001 | nanosecond |
| `FFF` | 3-digit nanoseconds | 753, 022 | nanosecond |
| `FF` | 2-digit nanoseconds | 75, 02 | nanosecond |
| `F` | 1-digit nanoseconds | 7, 0 | nanosecond |

## ParserOptions

### locale

**Type**: `Locale`  
**Default**: `en` (English)

Specifies the locale for parsing localized month names, day names, and meridiem indicators.

```typescript
import { parse } from 'date-and-time';
import es from 'date-and-time/locales/es';

// Spanish parsing
parse('23 de agosto de 2025', 'D [de] MMMM [de] YYYY', { locale: es });
// => Fri Aug 23 2025 00:00:00 GMT-0700
```

For a complete list of all supported locales with import examples, see [Supported Locales](../locales).

### timeZone

**Type**: `TimeZone | "UTC"`  
**Default**: `undefined` (local timezone)

Interprets the parsed date in the specified timezone. **Note**: If the input string contains a timezone offset (e.g., `Z` or `ZZ` tokens), that offset takes precedence and the `timeZone` option is ignored.

```typescript
import { parse } from 'date-and-time';
import Tokyo from 'date-and-time/timezones/Asia/Tokyo';
import New_York from 'date-and-time/timezones/America/New_York';

// Parse in Tokyo timezone
parse('2025-08-23 14:30:00', 'YYYY-MM-DD HH:mm:ss', { timeZone: Tokyo });
// => Fri Aug 23 2025 14:30:00 GMT+0900

// Parse in New York timezone
parse('2025-08-23 14:30:00', 'YYYY-MM-DD HH:mm:ss', { timeZone: New_York });
// => Fri Aug 23 2025 14:30:00 GMT-0400

// Parse in UTC
parse('2025-08-23 14:30:00', 'YYYY-MM-DD HH:mm:ss', { timeZone: 'UTC' });
// => Fri Aug 23 2025 14:30:00 GMT+0000

// Timezone offset in input takes precedence over timeZone option
parse('2025-08-23 14:30:00 +0300', 'YYYY-MM-DD HH:mm:ss Z', { timeZone: Tokyo });
// => Fri Aug 23 2025 14:30:00 GMT+0300 (Tokyo timeZone is ignored)

parse('2025-08-23T14:30:00 +05:00', 'YYYY-MM-DD[T]HH:mm:ss ZZ', { timeZone: New_York });
// => Fri Aug 23 2025 14:30:00 GMT+0500 (New_York timeZone is ignored)
```

For a complete list of all supported timezones with import examples, see [Supported Timezones](../timezones).

### numeral

**Type**: `Numeral`  
**Default**: `latn` (Latin numerals)

Specifies the numeral system for parsing numbers.

```typescript
import { parse } from 'date-and-time';
import arab from 'date-and-time/numerals/arab';
import beng from 'date-and-time/numerals/beng';

// Arabic-Indic numerals
parse('٠٨/٠٧/٢٠٢٥', 'DD/MM/YYYY', { numeral: arab });
// => Fri Aug 08 2025 00:00:00 GMT-0700

// Bengali numerals
parse('০৮/০৭/২০২৫', 'DD/MM/YYYY', { numeral: beng });
// => Fri Aug 08 2025 00:00:00 GMT-0700
```

**Available numeral systems:**

- `latn` - Latin numerals (0-9) - default
- `arab` - Arabic-Indic numerals (٠-٩)
- `arabext` - Extended Arabic-Indic numerals (۰-۹)
- `beng` - Bengali numerals (০-৯)
- `mymr` - Myanmar numerals (၀-၉)

### calendar

**Type**: `"gregory" | "buddhist"`  
**Default**: `"gregory"`

Specifies the calendar system for date calculations.

```typescript
import { parse } from 'date-and-time';

// Gregorian calendar (default)
parse('August 23, 2025', 'MMMM D, YYYY');
// => Fri Aug 23 2025 00:00:00 GMT-0700

// Buddhist calendar (543 years behind)
parse('August 23, 2568', 'MMMM D, YYYY', { calendar: 'buddhist' });
// => Fri Aug 23 2025 00:00:00 GMT-0700
```

### ignoreCase

**Type**: `boolean`  
**Default**: `false`

Enables case-insensitive parsing for text elements.

```typescript
import { parse } from 'date-and-time';

// Case-sensitive (default)
parse('august 23, 2025', 'MMMM D, YYYY');
// => Invalid Date

// Case-insensitive
parse('AUGUST 23, 2025', 'MMMM D, YYYY', { ignoreCase: true });
// => Fri Aug 23 2025 00:00:00 GMT-0700

parse('fri aug 23 2025', 'ddd MMM DD YYYY', { ignoreCase: true });
// => Fri Aug 23 2025 00:00:00 GMT-0700
```

### hour12

**Type**: `"h11" | "h12"`  
**Default**: `"h12"`

Controls the 12-hour format interpretation. Use `h11` for 11-hour format (0-11) or `h12` for 12-hour format (1-12).

```typescript
import { parse } from 'date-and-time';

// h12 format - midnight is 12 AM
parse('12:30 AM', 'h:mm A', { hour12: 'h12' });
// => Thu Jan 01 1970 00:30:00 GMT-0800

// h11 format - midnight is 0 AM
parse('0:30 AM', 'h:mm A', { hour12: 'h11' });
// => Thu Jan 01 1970 00:30:00 GMT-0800
```

### hour24

**Type**: `"h23" | "h24"`  
**Default**: `"h23"`

Controls the 24-hour format interpretation. Use `h23` for 23-hour format (0-23) or `h24` for 24-hour format (1-24).

```typescript
import { parse } from 'date-and-time';

// h23 format - midnight is 0
parse('0:30', 'H:mm', { hour24: 'h23' });
// => Thu Jan 01 1970 00:30:00 GMT-0800

// h24 format - midnight is 24 (of previous day)
parse('24:30', 'H:mm', { hour24: 'h24' });
// => Thu Jan 01 1970 00:30:00 GMT-0800
```

### plugins

**Type**: `ParserPlugin[]`  
**Default**: `undefined`

Enables additional parse tokens provided by plugins. Plugins extend the parser with special tokens that are not included in the core library.

```typescript
import { parse } from 'date-and-time';
import { parser as ordinal } from 'date-and-time/plugins/ordinal';
import { parser as two_digit_year } from 'date-and-time/plugins/two-digit-year';
import { parser as microsecond } from 'date-and-time/plugins/microsecond';

// Use ordinal plugin
parse('January 1st, 2025', 'MMMM DDD, YYYY', { plugins: [ordinal] });
// => Wed Jan 01 2025 00:00:00 GMT-0800

// Use two-digit-year plugin
parse('12/25/99', 'MM/DD/YY', { plugins: [two_digit_year] });
// => Sat Dec 25 1999 00:00:00 GMT-0800

// Use microsecond plugin
parse('14:30:45.123456', 'HH:mm:ss.SSSSSS', { plugins: [microsecond] });
// => Thu Jan 01 1970 14:30:45 GMT-0800

// Use multiple plugins together
parse('January 1st, 99 14:30:45.123456', 'MMMM DDD, YY HH:mm:ss.SSSSSS', {
  plugins: [ordinal, two_digit_year, microsecond]
});
// => Fri Jan 01 1999 14:30:45 GMT-0800
```

For a complete list of available plugins, see [Plugins](../plugins).

## Parsing Behavior and Limitations

### Default Date and Time Values

When parsing partial dates or times, missing components are filled with default values. The default date is `January 1, 1970`, and the default time is `00:00:00.000`.

```typescript
import { parse } from 'date-and-time';

// Only time - defaults to Jan 1, 1970
parse('14:30:45', 'HH:mm:ss');
// => Thu Jan 01 1970 14:30:45 GMT-0800

// Only date - defaults to 00:00:00
parse('2025-08-23', 'YYYY-MM-DD');
// => Fri Aug 23 2025 00:00:00 GMT-0700

// Year and month - defaults to 1st day
parse('2025-08', 'YYYY-MM');
// => Fri Aug 01 2025 00:00:00 GMT-0700

// Just year - defaults to Jan 1st, 00:00:00
parse('2025', 'YYYY');
// => Wed Jan 01 2025 00:00:00 GMT-0800
```

### Date Range Limitations

The parsable maximum date is `December 31, 9999`, and the minimum date is `January 1, 0001`.

```typescript
import { parse } from 'date-and-time';

// Valid maximum date
parse('Dec 31 9999', 'MMM D YYYY');
// => Fri Dec 31 9999 00:00:00 GMT-0800

// Invalid - exceeds maximum
parse('Dec 31 10000', 'MMM D YYYY');
// => Invalid Date

// Valid minimum date
parse('Jan 1 0001', 'MMM D YYYY');
// => Mon Jan 1 0001 00:00:00 GMT-0800

// Invalid - below minimum
parse('Jan 1 0000', 'MMM D YYYY');
// => Invalid Date
```

### UTC Input Parsing

If the input string doesn't contain a timezone offset and no `timeZone` option is specified, the function treats the input as local timezone. To parse input as UTC, set `timeZone: 'UTC'` in the options.

```typescript
import { parse } from 'date-and-time';

// Parsed as local timezone
parse('14:30:45', 'HH:mm:ss');
// => Thu Jan 01 1970 14:30:45 GMT-0800

// Timezone offset in input takes precedence
parse('14:30:45 +0000', 'HH:mm:ss Z');
// => Thu Jan 01 1970 14:30:45 GMT+0000

// Force UTC parsing
parse('14:30:45', 'HH:mm:ss', { timeZone: 'UTC' });
// => Thu Jan 01 1970 14:30:45 GMT+0000
```

### 12-hour Format and Meridiem

When using 12-hour format tokens (`h` or `hh`), always include the meridiem token (`A` or `a`) for correct parsing.

```typescript
import { parse } from 'date-and-time';

// Without meridiem - ambiguous time
parse('11:30:45', 'h:mm:ss');
// => Thu Jan 01 1970 11:30:45 GMT-0800 (assumes AM)

// With meridiem - unambiguous time
parse('11:30:45 PM', 'h:mm:ss A');
// => Thu Jan 01 1970 23:30:45 GMT-0800
```

## Advanced Usage

### Comments in Format Strings

Parts of the format string enclosed in square brackets are treated as literal text:

```typescript
import { parse } from 'date-and-time';

parse('Today is Saturday, August 23, 2025', '[Today is] dddd, MMMM D, YYYY');
// => Sat Aug 23 2025 00:00:00 GMT-0700

parse('2025-08-23T14:30:45Z', 'YYYY-MM-DD[T]HH:mm:ss[Z]');
// => Sat Aug 23 2025 14:30:45 GMT-0700

parse('Report generated on 2025/08/23 at 14:30', '[Report generated on] YYYY/MM/DD [at] HH:mm');
// => Sat Aug 23 2025 14:30:00 GMT-0700

// Escape square brackets to parse them from input string
parse('[2025-08-23 14:30:45]', '\\[YYYY-MM-DD HH:mm:ss\\]');
// => Sat Aug 23 2025 14:30:45 GMT-0700
```

### Wildcard Parsing

Whitespace in the format string acts as a wildcard token, allowing you to skip corresponding parts of the input string. The character count must match between the format string and input string.

```typescript
import { parse } from 'date-and-time';

// This will fail - extra content not accounted for
parse('2025/08/23 14:30:45', 'YYYY/MM/DD');
// => Invalid Date

// Use whitespace as wildcard (9 spaces to match ' 14:30:45')
parse('2025/08/23 14:30:45', 'YYYY/MM/DD           ');
// => Sat Aug 23 2025 00:00:00 GMT-0700
```

### Ellipsis Token

The `...` token ignores all subsequent content in the input string. Use this token only at the end of a format string.

```typescript
import { parse } from 'date-and-time';

// Ignore everything after the date
parse('2025/08/23 14:30:45', 'YYYY/MM/DD...');
// => Sat Aug 23 2025 00:00:00 GMT-0700

// More complex example
parse('Log entry: 2025-08-23 some extra data here', '[Log entry: ]YYYY-MM-DD...');
// => Sat Aug 23 2025 00:00:00 GMT-0700
```

### Complex Localized Parsing

```typescript
import { parse } from 'date-and-time';
import fr from 'date-and-time/locales/fr';
import Paris from 'date-and-time/timezones/Europe/Paris';

// French with timezone
parse('samedi, 23 août 2025 à 14:30:45', 'dddd, D MMMM YYYY [à] HH:mm:ss', {
  locale: fr,
  timeZone: Paris
});
// => Fri Aug 23 2025 14:30:45 GMT+0200
```

### Business and Technical Formats

```typescript
import { parse } from 'date-and-time';

// ISO 8601 format
parse('2025-08-23T14:30:45.123Z', 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]', { timeZone: 'UTC' });
// => Fri Aug 23 2025 14:30:45 GMT+0000

// RFC 2822 format
parse('Sat, 23 Aug 2025 14:30:45 +0900', 'ddd, DD MMM YYYY HH:mm:ss ZZ');
// => Sat Aug 23 2025 14:30:45 GMT+0900

// File naming format
parse('20250823_143045', 'YYYYMMDD_HHmmss');
// => Sat Aug 23 2025 14:30:45 GMT-0700
```

## Error Handling

### When Parsing Fails

If the `parse()` function fails to parse the input, it returns an `Invalid Date` object. Note that `Invalid Date` is still a Date object, not `NaN` or `null`.

```typescript
import { parse } from 'date-and-time';

// Example of parsing failure
const result = parse('invalid-date', 'YYYY-MM-DD');

// Check if parsing failed
if (isNaN(result.getTime())) {
  console.error('Parse failed - invalid date');
} else {
  console.log('Successfully parsed:', result);
}

// Common parsing failures
parse('Jam 1 2017', 'MMM D YYYY');     // Invalid - 'Jam' is not a valid month
parse('2025-02-30', 'YYYY-MM-DD');     // Invalid - Feb 30th doesn't exist
parse('2025-13-01', 'YYYY-MM-DD');     // Invalid - month 13 doesn't exist
parse('25:30:00', 'HH:mm:ss');         // Invalid - hour 25 doesn't exist
parse('12 hours 34', 'HH hours mm');   // Invalid - format mismatch
```

## Performance Considerations

For repeated parsing with the same pattern, use [`compile()`](./compile):

```typescript
import { parse, compile } from 'date-and-time';

// Compile once
const pattern = compile('YYYY-MM-DD HH:mm:ss');

// Reuse for better performance
const dateStrings = ['2025-08-23 14:30:45', '2025-08-24 09:15:30'];
dateStrings.forEach(dateString => {
  const parsed = parse(dateString, pattern);
  console.log(parsed);
});
```

## Common Parsing Patterns

### Log Timestamps

```typescript
import { parse } from 'date-and-time';

const logLine = '[2025-08-23 14:30:45.123] Application started';
const timestamp = parse(logLine, ' YYYY-MM-DD HH:mm:ss.SSS ...');
// => Sat Aug 23 2025 14:30:45 GMT-0700

// For different log formats
const syslogLine = 'Aug 23 14:30:45 server: Process started';
const syslogTimestamp = parse(syslogLine, 'MMM DD HH:mm:ss...');
// => Sat Aug 23 1970 14:30:45 GMT-0700
```

### API Responses

```typescript
import { parse } from 'date-and-time';

const apiTimestamp = '2025-08-23T14:30:45Z';
const date = parse(apiTimestamp, 'YYYY-MM-DD[T]HH:mm:ss[Z]', { timeZone: 'UTC' });
```

### User Input

```typescript
import { parse } from 'date-and-time';

function parseUserDate(input: string) {
  const formats = [
    'YYYY-MM-DD',
    'MM/DD/YYYY',
    'DD.MM.YYYY',
    'MMMM D, YYYY'
  ];
  
  for (const format of formats) {
    const result = parse(input, format);
    if (!isNaN(result.getTime())) {
      return result;
    }
  }
  
  throw new Error('Unable to parse date');
}
```

## See Also

- [`compile()`](./compile) - Precompile format patterns for performance
- [`preparse()`](./preparse) - Parse and return intermediate parsing results
- [`isValid()`](./isValid) - Validate date string formats
