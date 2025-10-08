# format()

Formats a Date object according to the specified format string.

## Syntax

```typescript
format(dateObj, formatString[, options])
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dateObj` | `Date` | Yes | The Date object to format |
| `formatString` | `string \| CompiledObject` | Yes | The format string or compiled object |
| `options` | `FormatterOptions` | No | Formatter options for customization |

### Returns

`string` - The formatted date string

## Basic Examples

```typescript
import { format } from 'date-and-time';

const now = new Date();

format(now, 'YYYY/MM/DD HH:mm:ss');
// => 2025/08/23 14:30:45

format(now, 'ddd, MMM DD YYYY');
// => Sat, Aug 23 2025

format(now, 'hh:mm A [GMT]Z');
// => 02:30 PM GMT+0900
```

## Format Tokens

### Date Tokens

| Token | Description | Output Examples |
|-------|-------------|-----------------|
| `YYYY` | 4-digit year | 0999, 2015 |
| `YY` | 2-digit year | 99, 01, 15 |
| `Y` | Year without zero padding | 2, 44, 888, 2015 |
| `MMMM` | Full month name | January, December |
| `MMM` | Short month name | Jan, Dec |
| `MM` | Month (01-12) | 01, 12 |
| `M` | Month without zero padding | 1, 12 |
| `DD` | Day (01-31) | 02, 31 |
| `D` | Day without zero padding | 2, 31 |

### Day of Week Tokens

| Token | Description | Output Examples |
|-------|-------------|-----------------|
| `dddd` | Full day name | Friday, Sunday |
| `ddd` | Short day name | Fri, Sun |
| `dd` | Very short day name | Fr, Su |

### Time Tokens

| Token | Description | Output Examples |
|-------|-------------|-----------------|
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

| Token | Description | Output Examples |
|-------|-------------|-----------------|
| `A` | Uppercase AM/PM | AM, PM |
| `AA` | Uppercase AM/PM (with periods) | A.M., P.M. |
| `a` | Lowercase AM/PM | am, pm |
| `aa` | Lowercase AM/PM (with periods) | a.m., p.m. |

### Timezone Tokens

| Token | Description | Output Examples |
|-------|-------------|-----------------|
| `Z` | Timezone offset | +0100, -0800 |
| `ZZ` | Timezone offset with colon | +01:00, -08:00 |

### Plugin Tokens

Additional tokens available with plugins:

| Token | Description | Output Examples | Plugin Required |
|-------|-------------|-----------------|-----------------|
| `DDD` | Ordinal representation | 1st, 2nd, 3rd | ordinal |
| `z` | Short timezone name | PST, EST | zonename |
| `zz` | Long timezone name | Pacific Standard Time | zonename |

## FormatterOptions

The `FormatterOptions` object allows you to customize the formatting behavior:

### locale

**Type**: `Locale`  
**Default**: `en` (English)

Specifies the locale for localized formatting of month names, day names, and meridiem indicators.

```typescript
import { format } from 'date-and-time';
import ja from 'date-and-time/locales/ja';
import es from 'date-and-time/locales/es';

const date = new Date();

// Japanese formatting
format(date, 'YYYY年M月D日(ddd)', { locale: ja });
// => 2025年8月23日(土)

// Spanish formatting  
format(date, 'dddd, D [de] MMMM [de] YYYY', { locale: es });
// => sábado, 23 de agosto de 2025
```

For a complete list of all supported locales with import examples, see [Supported Locales](../locales).

### timeZone

**Type**: `TimeZone | "UTC"`  
**Default**: `undefined` (local timezone)

Converts the date to the specified timezone before formatting.

```typescript
import { format } from 'date-and-time';
import Tokyo from 'date-and-time/timezones/Asia/Tokyo';
import New_York from 'date-and-time/timezones/America/New_York';

const date = new Date();

// Format in Tokyo timezone
format(date, 'YYYY-MM-DD HH:mm:ss [JST]', { timeZone: Tokyo });
// => 2025-08-23 23:30:45 JST

// Format in New York timezone  
format(date, 'YYYY-MM-DD HH:mm:ss [EST]', { timeZone: New_York });
// => 2025-08-23 09:30:45 EST

// Format in UTC
format(date, 'YYYY-MM-DD HH:mm:ss [UTC]', { timeZone: 'UTC' });
// => 2025-08-23 14:30:45 UTC
```

For a complete list of all supported timezones with import examples, see [Supported Timezones](../timezones).

### numeral

**Type**: `Numeral`  
**Default**: `latn` (Latin numerals)

Specifies the numeral system for formatting numbers.

```typescript
import { format } from 'date-and-time';
import arab from 'date-and-time/numerals/arab';
import beng from 'date-and-time/numerals/beng';

const date = new Date();

// Arabic-Indic numerals
format(date, 'DD/MM/YYYY', { numeral: arab });
// => ٠٨/٠٧/٢٠٢٥

// Bengali numerals
format(date, 'DD/MM/YYYY', { numeral: beng });
// => ০৮/০৭/২০২৫
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
import { format } from 'date-and-time';

const date = new Date();

// Gregorian calendar (default)
format(date, 'MMMM D, YYYY');
// => August 23, 2025

// Buddhist calendar (543 years ahead)
format(date, 'MMMM D, YYYY', { calendar: 'buddhist' });
// => August 23, 2568
```

### hour12

**Type**: `"h11" | "h12"`  
**Default**: `"h12"`

Controls the 12-hour format interpretation. Use h11 for 11-hour format (0-11) or h12 for 12-hour format (1-12).

```typescript
import { format } from 'date-and-time';

const midnight = new Date(2025, 7, 23, 0, 30, 0); // 12:30 AM

// h12 format (1-12)
format(midnight, 'h:mm A', { hour12: 'h12' });
// => 12:30 AM

// h11 format (0-11) 
format(midnight, 'h:mm A', { hour12: 'h11' });
// => 0:30 AM
```

### hour24

**Type**: `"h23" | "h24"`  
**Default**: `"h23"`

Controls the 24-hour format interpretation. Use h23 for 23-hour format (0-23) or h24 for 24-hour format (1-24).

```typescript
import { format } from 'date-and-time';

const midnight = new Date(2025, 7, 23, 0, 30, 0);

// h23 format (0-23)
format(midnight, 'H:mm', { hour24: 'h23' });
// => 0:30

// h24 format (1-24)
format(midnight, 'H:mm', { hour24: 'h24' });
// => 24:30
```

## Advanced Usage

### Comments in Format Strings

Parts of the format string enclosed in square brackets are output literally:

```typescript
import { format } from 'date-and-time';

const date = new Date();

format(date, '[Today is] dddd, MMMM D, YYYY');
// => Today is Saturday, August 23, 2025

format(date, 'YYYY-MM-DD[T]HH:mm:ss[Z]');
// => 2025-08-23T14:30:45Z

format(date, '[Report generated on] YYYY/MM/DD [at] HH:mm');
// => Report generated on 2025/08/23 at 14:30

// Escape square brackets to output them literally
format(date, '\\[YYYY-MM-DD HH:mm:ss\\]');
// => [2025-08-23 14:30:45]
```

### Complex Localized Formatting

```typescript
import { format } from 'date-and-time';
import ja from 'date-and-time/locales/ja';
import Tokyo from 'date-and-time/timezones/Asia/Tokyo';

const date = new Date();

// Japanese with timezone
format(date, 'YYYY年MMMM月D日dddd Ah:mm:ss [GMT]Z', { 
  timeZone: Tokyo, 
  locale: ja 
});
// => 2025年8月23日土曜日 午後11:30:45 GMT+0900
```

### Business and Technical Formats

```typescript
import { format } from 'date-and-time';

const date = new Date();

// ISO 8601 format
format(date, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]', { timeZone: 'UTC' });
// => 2025-08-23T14:30:45.123Z

// RFC 2822 format
format(date, 'ddd, DD MMM YYYY HH:mm:ss ZZ');
// => Sat, 23 Aug 2025 14:30:45 +09:00

// Log timestamp
format(date, '[YYYY-MM-DD HH:mm:ss.SSS]');
// => [2025-08-23 14:30:45.123]

// File naming
format(date, 'YYYYMMDD_HHmmss');
// => 20250823_143045
```

## Performance Considerations

For repeated formatting with the same pattern, use [`compile()`](./compile) to precompile the format string:

```typescript
import { format, compile } from 'date-and-time';

// Compile once
const pattern = compile('YYYY-MM-DD HH:mm:ss');

// Reuse for better performance
const dates = [new Date(), new Date(), new Date()];
dates.forEach(date => {
  console.log(format(date, pattern));
});
```

## See Also

- [`compile()`](./compile) - Precompile format patterns for performance
- [`transform()`](./transform) - Transform date strings between formats
