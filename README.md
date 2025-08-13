# date-and-time

<div align="center">
  <img src="https://raw.githubusercontent.com/knowledgecode/date-and-time/refs/heads/master/logo.png" alt="date-and-time" width="256">
</div>

<div align="center">

[![CI](https://github.com/knowledgecode/date-and-time/actions/workflows/test.yml/badge.svg)](https://github.com/knowledgecode/date-and-time/actions/workflows/test.yml)
[![Coverage](https://raw.githubusercontent.com/knowledgecode/date-and-time/refs/heads/master/.github/badges/coverage.svg)](https://github.com/knowledgecode/date-and-time/actions/workflows/test.yml)
[![npm](https://img.shields.io/npm/v/date-and-time)](https://www.npmjs.com/package/date-and-time)

</div>

The simplest, most intuitive date and time library.

## Installation

```shell
npm i date-and-time
```

- ES Modules:

```typescript
import { format } from 'date-and-time';

format(new Date(), 'ddd, MMM DD YYYY');
// => Wed, Jul 09 2025
```

- CommonJS:

```typescript
const { format } = require('date-and-time');

format(new Date(), 'ddd, MMM DD YYYY');
// => Wed, Jul 09 2025
```

## Migration

Version `4.x` has been completely rewritten in TypeScript and some features from `3.x` are no longer compatible. The main changes are as follows:

- The `timezone` and `timespan` plugins have been integrated into the main library
- Tree shaking is now supported
- Supports `ES2021` and no longer supports older browsers

For details, please refer to [MIGRATION.md](https://github.com/knowledgecode/date-and-time/blob/master/docs/MIGRATION.md).

## API

### format(dateObj, arg[, options])

<details>
<summary>Formats a Date object according to the specified format string.</summary>

- dateObj
  - type: `Date`
  - The Date object to format
- arg
  - type: `string | CompiledObject`
  - The format string or compiled object to match against the Date object
- [options]
  - type: `FormatterOptions`
  - Optional formatter options for customization

```typescript
import { format } from 'date-and-time';
import Tokyo from 'date-and-time/timezones/Asia/Tokyo';
import ja from 'date-and-time/locales/ja';

const now = new Date();

format(now, 'YYYY/MM/DD HH:mm:ss');
// => 2015/01/01 23:14:05

format(now, 'ddd, MMM DD YYYY');
// => Thu, Jan 01 2015

format(now, 'ddd, MMM DD YYYY hh:mm A [GMT]Z', { timeZone: 'UTC' });
// => Fri, Jan 02 2015 07:14 AM GMT+0000

format(now, 'YYYY年MMMM月D日dddd Ah:mm:ss [GMT]Z', { timeZone: Tokyo, locale: ja });
// => 2015年1月2日金曜日 午後4:14:05 GMT+0900
```

The tokens available for use in the format string specified as the second argument and their meanings are as follows:

| Token    | Meaning                                     | Output Examples       |
|:---------|:--------------------------------------------|:----------------------|
| YYYY     | 4-digit year                                | 0999, 2015            |
| YY       | 2-digit year                                | 99, 01, 15            |
| Y        | Year without zero padding                   | 2, 44, 888, 2015      |
| MMMM     | Full month name                             | January, December     |
| MMM      | Short month name                            | Jan, Dec              |
| MM       | Month                                       | 01, 12                |
| M        | Month without zero padding                  | 1, 12                 |
| DD       | Day                                         | 02, 31                |
| D        | Day without zero padding                    | 2, 31                 |
| dddd     | Full day name                               | Friday, Sunday        |
| ddd      | Short day name                              | Fri, Sun              |
| dd       | Very short day name                         | Fr, Su                |
| HH       | Hour in 24-hour format                      | 23, 08                |
| H        | Hour in 24-hour format without zero padding | 23, 8                 |
| hh       | Hour in 12-hour format                      | 11, 08                |
| h        | Hour in 12-hour format without zero padding | 11, 8                 |
| A        | Uppercase AM/PM                             | AM, PM                |
| AA       | Uppercase AM/PM (with periods)              | A.M., P.M.            |
| a        | Lowercase AM/PM                             | am, pm                |
| aa       | Lowercase AM/PM (with periods)              | a.m., p.m.            |
| mm       | Minutes                                     | 14, 07                |
| m        | Minutes without zero padding                | 14, 7                 |
| ss       | Seconds                                     | 05, 10                |
| s        | Seconds without zero padding                | 5, 10                 |
| SSS      | 3-digit milliseconds                        | 753, 022              |
| SS       | 2-digit milliseconds                        | 75, 02                |
| S        | 1-digit milliseconds                        | 7, 0                  |
| Z        | Timezone offset                             | +0100, -0800          |
| ZZ       | Timezone offset with colon                  | +01:00, -08:00        |

Additionally, by importing plugins, you can use the following tokens. For details, please refer to [PLUGINS.md](https://github.com/knowledgecode/date-and-time/blob/master/docs/PLUGINS.md).

| Token    | Meaning                                     | Output Examples       |
|:---------|:--------------------------------------------|:----------------------|
| DDD      | Ordinal representation of day               | 1st, 2nd, 3rd         |
| z        | Short timezone name                         | PST, EST              |
| zz       | Long timezone name                          | Pacific Standard Time |

The breakdown of `FormatterOptions` that can be specified as the third argument is as follows:

<details>
<summary><strong>hour12</strong></summary>

- type: `h11 | h12`
- default: `h12`
- The hour format to use for formatting. This is used when the hour is in 12-hour format. It can be `h11` for 11-hour format or `h12` for 12-hour format.

```typescript
format(now, 'dddd, MMMM D, YYYY [at] h:mm:ss.SSS A [GMT]ZZ', { hour12: 'h11' });
// Wednesday, July 23, 2025 at 0:12:54.814 AM GMT-07:00
```

</details>

<details>
<summary><strong>hour24</strong></summary>

- type: `h23 | h24`
- default: `h23`
- The hour format to use for formatting. This is used when the hour is in 24-hour format. It can be `h23` for 23-hour format or `h24` for 24-hour format.

```typescript
format(now, 'dddd, MMMM D, YYYY [at] H:mm:ss.SSS [GMT]ZZ', { hour24: 'h24' });
// => Wednesday, July 23, 2025 at 24:12:54.814 GMT-07:00
```

</details>

<details>
<summary><strong>numeral</strong></summary>

- type: `Numeral`
- default: `latn`
- The numeral system to use for formatting numbers. This is an object that provides methods to encode and decode numbers in the specified numeral system.

```typescript
import arab from 'date-and-time/numerals/arab';

format(now, 'DD/MM/YYYY', { numeral: arab });
// => ٠٨/٠٧/٢٠٢٥
```

Currently, the following numeral systems are supported:

- `arab`
- `arabext`
- `beng`
- `latn`
- `mymr`

</details>

<details>
<summary><strong>calendar</strong></summary>

- type: `buddhist | gregory`
- default: `gregory`
- The calendar system to use for formatting dates. This can be `buddhist` for Buddhist calendar or `gregory` for Gregorian calendar.

```typescript
format(now, 'dddd, MMMM D, YYYY', { calendar: 'buddhist' });
// => Wednesday, July 23, 2568
```

</details>

<details>
<summary><strong>timeZone</strong></summary>

- type: `TimeZone | UTC`
- default: `undefined`
- The time zone to use for formatting dates and times. This can be a specific time zone object or `UTC` to use Coordinated Universal Time. If not specified, it defaults to undefined, which means the local time zone will be used.

```typescript
import New_York from 'date-and-time/timezones/America/New_York';

format(now, 'dddd, MMMM D, YYYY [at] H:mm:ss.SSS [GMT]ZZ', { timeZone: New_York });
// => Wednesday, July 23, 2025 at 3:28:27.443 GMT-04:00
```

</details>

<details>
<summary><strong>locale</strong></summary>

- type: `Locale`
- default: `en`
- The locale to use for formatting dates and times. This is an object that provides methods to get localized month names, day names, and meridiems.

```typescript
import es from 'date-and-time/locales/es';

format(now, 'dddd, D [de] MMMM [de] YYYY, h:mm:ss.SSS aa [GMT]ZZ', { locale: es });
// => miércoles, 23 de julio de 2025, 12:38:08,533 a.m. GMT-07:00
```

<details>
<summary>Currently, the following locales are supported:</summary>

- `ar` (Arabic)
- `az` (Azerbaijani)
- `bn` (Bengali)
- `cs` (Czech)
- `da` (Danish)
- `de` (German)
- `el` (Greek)
- `en` (English)
- `es` (Spanish)
- `fa` (Persian)
- `fi` (Finnish)
- `fr` (French)
- `he` (Hebrew)
- `hi` (Hindi)
- `hu` (Hungarian)
- `id` (Indonesian)
- `it` (Italian)
- `ja` (Japanese)
- `ko` (Korean)
- `ms` (Malay)
- `my` (Burmese)
- `nl` (Dutch)
- `no` (Norwegian)
- `pl` (Polish)
- `pt-BR` (Brazilian Portuguese)
- `pt-PT` (European Portuguese)
- `ro` (Romanian)
- `ru` (Russian)
- `rw` (Kinyarwanda)
- `sr-Cyrl` (Serbian Cyrillic)
- `sr-Latn` (Serbian Latin)
- `sv` (Swedish)
- `ta` (Tamil)
- `th` (Thai)
- `tr` (Turkish)
- `uk` (Ukrainian)
- `uz-Cyrl` (Uzbek Cyrillic)
- `uz-Latn` (Uzbek Latin)
- `vi` (Vietnamese)
- `zh-Hans` (Simplified Chinese)
- `zh-Hant` (Traditional Chinese)

</details>
</details>

#### Notes

<details open>
<summary><strong>Comments</strong></summary>

Parts of the format string enclosed in brackets are output as-is, regardless of whether they are valid tokens.

```typescript
format(new Date(), 'DD-[MM]-YYYY');     // => '02-MM-2015'
format(new Date(), '[DD-[MM]-YYYY]');   // => 'DD-[MM]-YYYY'
```

</details>

<details open>
<summary><strong>Output as UTC timezone</strong></summary>

To output date and time as UTC timezone, specify the string `UTC` in the `timeZone` property of `FormatterOptions`.

```typescript
format(new Date(), 'hh:mm A [GMT]Z');
// => '12:14 PM GMT-0700'

format(new Date(), 'hh:mm A [GMT]Z', { timeZone: 'UTC' });
// => '07:14 AM GMT+0000'
```

</details>
</details>

### parse(dateString, arg[, options])

<details>
<summary>Parses a date string according to the specified format.</summary>

- dateString
  - type: `string`
  - The date string to parse
- arg
  - type: `string | CompiledObject`
  - The format string or compiled object to match against the date string
- [options]
  - type: `ParserOptions`
  - Optional parser options for customization

```typescript
import { parse } from 'date-and-time';
import Paris from 'date-and-time/timezones/Europe/Paris';
import fr from 'date-and-time/locales/fr';

parse('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss');
// => Jan 02 2015 23:14:05 GMT-0800

parse('02-01-2015', 'DD-MM-YYYY');
// => Jan 02 2015 00:00:00 GMT-0800

parse('11:14:05 PM', 'h:mm:ss A', { timeZone: 'UTC' });
// => Jan 02 1970 23:14:05 GMT+0000

parse(
  '02 janv. 2015, 11:14:05 PM', 'DD MMM YYYY, h:mm:ss A',
  { timeZone: Paris, locale: fr }
);
// => Jan 02 2015 23:14:05 GMT+0100

parse('Jam 1 2017', 'MMM D YYYY');
// => Invalid Date
```

The tokens available for use in the format string specified as the second argument and their meanings are as follows:

| Token     | Meaning                                     | Input Examples      |
|:----------|:--------------------------------------------|:--------------------|
| YYYY      | 4-digit year                                | 0999, 2015          |
| Y         | Year without zero padding                   | 2, 44, 88, 2015     |
| MMMM      | Full month name                             | January, December   |
| MMM       | Short month name                            | Jan, Dec            |
| MM        | Month                                       | 01, 12              |
| M         | Month without zero padding                  | 1, 12               |
| DD        | Day                                         | 02, 31              |
| D         | Day without zero padding                    | 2, 31               |
| HH        | Hour in 24-hour format                      | 23, 08              |
| H         | Hour in 24-hour format without zero padding | 23, 8               |
| hh        | Hour in 12-hour format                      | 11, 08              |
| h         | Hour in 12-hour format without zero padding | 11, 8               |
| A         | Uppercase AM/PM                             | AM, PM              |
| AA        | Uppercase AM/PM (with periods)              | A.M., P.M.          |
| a         | Lowercase AM/PM                             | am, pm              |
| aa        | Lowercase AM/PM (with periods)              | a.m., p.m.          |
| mm        | Minutes                                     | 14, 07              |
| m         | Minutes without zero padding                | 14, 7               |
| ss        | Seconds                                     | 05, 10              |
| s         | Seconds without zero padding                | 5, 10               |
| SSS       | 3-digit milliseconds                        | 753, 022            |
| SS        | 2-digit milliseconds                        | 75, 02              |
| S         | 1-digit milliseconds                        | 7, 0                |
| Z         | Timezone offset                             | +0100, -0800        |
| ZZ        | Timezone offset with colon                  | +01:00, -08:00      |

Additionally, by importing plugins, you can use the following tokens. For details, please refer to [PLUGINS.md](https://github.com/knowledgecode/date-and-time/blob/master/docs/PLUGINS.md).

| Token     | Meaning                                    | Input Examples       |
|:----------|:-------------------------------------------|:---------------------|
| YY        | 2-digit year                               | 90, 00, 08, 19       |
| DDD       | Ordinal representation of day              | 1st, 2nd, 3rd        |
| dddd      | Full day name                              | Friday, Sunday       |
| ddd       | Short day name                             | Fri, Sun             |
| dd        | Very short day name                        | Fr, Su               |
| SSSSSS    | 6-digit milliseconds                       | 123456, 000001       |
| SSSSS     | 5-digit milliseconds                       | 12345, 00001         |
| SSSS      | 4-digit milliseconds                       | 1234, 0001           |
| fff       | 3-digit microseconds                       | 753, 022             |
| ff        | 2-digit microseconds                       | 75, 02               |
| f         | 1-digit microseconds                       | 7, 0                 |
| SSSSSSSSS | 9-digit milliseconds                       | 123456789, 000000001 |
| SSSSSSSS  | 8-digit milliseconds                       | 12345678, 00000001   |
| SSSSSSS   | 7-digit milliseconds                       | 1234567, 0000001     |
| FFF       | 3-digit nanoseconds                        | 753, 022             |
| FF        | 2-digit nanoseconds                        | 75, 02               |
| F         | 1-digit nanoseconds                        | 7, 0                 |

The breakdown of `ParserOptions` that can be specified as the third argument is as follows:

<details>
<summary><strong>hour12</strong></summary>

- type: `h11 | h12`
- default: `h12`
- The hour format to use for parsing. This is used when the hour is in 12-hour format. It can be `h11` for 11-hour format (0 - 11) or `h12` for 12-hour format (1 - 12).

```typescript
parse('0:12:54 PM', 'h:mm:ss A', { hour12: 'h11' });
// => Jan 01 1970 12:12:54 GMT-0800
```

</details>

<details>
<summary><strong>hour24</strong></summary>

- type: `h23 | h24`
- default: `h23`
- The hour format to use for parsing. This is used when the hour is in 24-hour format. It can be `h23` for 23-hour format (0 - 23) or `h24` for 24-hour format (1 - 24).

```typescript
parse('24:12:54', 'h:mm:ss', { hour24: 'h24' });
// => Jan 01 1970 00:12:54 GMT-0800
```

</details>

<details>
<summary><strong>numeral</strong></summary>

- type: `Numeral`
- default: `latn`
- The numeral system to use for parsing numbers. This is an object that provides methods to encode and decode numbers in the specified numeral system.

```typescript
import arab from 'date-and-time/numerals/arab';

parse('٠٨/٠٧/٢٠٢٥', 'DD/MM/YYYY', { numeral: arab });
// => July 09 2025 00:00:00 GMT-0700
```

Currently, the following numeral systems are supported:

- `arab`
- `arabext`
- `beng`
- `latn`
- `mymr`

</details>

<details>
<summary><strong>calendar</strong></summary>

- type: `buddhist | gregory`
- default: `gregory`
- The calendar system to use for parsing dates. This can be `buddhist` for Buddhist calendar or `gregory` for Gregorian calendar.

```typescript
parse('July 09 2025', 'MMMM DD YYYY', { calendar: 'buddhist' });
// => July 09 1482 00:00:00 GMT-0752
// Note: Buddhist calendar is 543 years ahead of Gregorian calendar,
// so 2025 BE (Buddhist Era) equals 1482 CE (Common Era)
```

</details>

<details>
<summary><strong>ignoreCase</strong></summary>

- type: `boolean`
- default: `false`
- Whether to ignore case when matching strings. This is useful for matching month names, day names, and meridiems in a case-insensitive manner. If true, the parser will convert both the input string and the strings in the locale to lowercase before matching.

```typescript
parse('july 09 2025', 'MMMM DD YYYY', { ignoreCase: true });
// => July 09 2025 00:00:00 GMT-0700
```

</details>

<details>
<summary><strong>timeZone</strong></summary>

- type: `TimeZone | UTC`
- default: `undefined`
- The time zone to use for parsing dates and times. This can be a specific time zone object or `UTC` to use Coordinated Universal Time. If not specified, it defaults to undefined, which means the local time zone will be used.

```typescript
import New_York from 'date-and-time/timezones/America/New_York';

parse('July 09 2025, 12:34:56', 'MMMM D YYYY, H:mm:ss', { timeZone: New_York });
// => July 09 2025 09:34:56 GMT-0700 (July 09 2025 12:34:56 GMT-0400)

parse('July 09 2025, 12:34:56', 'MMMM D YYYY, H:mm:ss', { timeZone: 'UTC' });
// => July 09 2025 05:34:56 GMT-0700 (July 09 2025 12:34:56 GMT+0000)
```

</details>

<details>
<summary><strong>locale</strong></summary>

- type: `Locale`
- default: `en`
- The locale to use for parsing dates and times. This is an object that provides methods to get localized month names, day names, and meridiems.

```typescript
import es from 'date-and-time/locales/es';

parse(
  '23 de julio de 2025, 12:38:08,533 a.m. GMT-07:00',
  'D [de] MMMM [de] YYYY, h:mm:ss,SSS aa [GMT]ZZ',
  { locale: es }
);
// => July 23 2025 12:38:08.533 GMT-0700
```

<details>
<summary>Currently, the following locales are supported:</summary>

- `ar` (Arabic)
- `az` (Azerbaijani)
- `bn` (Bengali)
- `cs` (Czech)
- `da` (Danish)
- `de` (German)
- `el` (Greek)
- `en` (English)
- `es` (Spanish)
- `fa` (Persian)
- `fi` (Finnish)
- `fr` (French)
- `he` (Hebrew)
- `hi` (Hindi)
- `hu` (Hungarian)
- `id` (Indonesian)
- `it` (Italian)
- `ja` (Japanese)
- `ko` (Korean)
- `ms` (Malay)
- `my` (Burmese)
- `nl` (Dutch)
- `no` (Norwegian)
- `pl` (Polish)
- `pt-BR` (Brazilian Portuguese)
- `pt-PT` (European Portuguese)
- `ro` (Romanian)
- `ru` (Russian)
- `rw` (Kinyarwanda)
- `sr-Cyrl` (Serbian Cyrillic)
- `sr-Latn` (Serbian Latin)
- `sv` (Swedish)
- `ta` (Tamil)
- `th` (Thai)
- `tr` (Turkish)
- `uk` (Ukrainian)
- `uz-Cyrl` (Uzbek Cyrillic)
- `uz-Latn` (Uzbek Latin)
- `vi` (Vietnamese)
- `zh-Hans` (Simplified Chinese)
- `zh-Hant` (Traditional Chinese)

</details>
</details>

#### Notes

<details open>
<summary><strong>When parsing fails</strong></summary>

If this function fails to parse, it will return `Invalid Date`. Notice that the `Invalid Date` is a Date object, not `NaN` or `null`. You can tell whether the Date object is invalid as follows:

```typescript
const today = parse('Jam 1 2017', 'MMM D YYYY');

if (isNaN(today.getTime())) {
  console.error('Parsing failed');
}
```

</details>

<details open>
<summary><strong>Input as UTC timezone</strong></summary>

If the `dateString` does not contain a timezone offset and the `timeZone` property of the third argument is not specified, this function considers the `dateString` to be in the local timezone. If you want to process a `dateString` without a timezone offset as UTC timezone, set the string `UTC` to the `timeZone` property in the third argument. Note that the timezone offset contained in the `dateString` takes precedence over the `timeZone` property of the third argument.

```typescript
parse('11:14:05 PM', 'hh:mm:ss A');
// => Jan 1 1970 23:14:05 GMT-0800

parse('11:14:05 PM GMT+0000', 'hh:mm:ss A [GMT]Z');
// => Jan 1 1970 23:14:05 GMT+0000

parse('11:14:05 PM', 'hh:mm:ss A', { timeZone: 'UTC' });
// => Jan 1 1970 23:14:05 GMT+0000
```

</details>

<details open>
<summary><strong>Default Date Time</strong></summary>

Default date is `January 1, 1970`, time is `00:00:00.000`. Any date/time components not specified in the input string will be filled with these default values.

```typescript
parse('11:14:05 PM', 'hh:mm:ss A');
// => Jan 1 1970 23:14:05 GMT-0800

parse('Feb 2000', 'MMM YYYY');
// => Feb 1 2000 00:00:00 GMT-0800
```

</details>

<details open>
<summary><strong>Max Date / Min Date</strong></summary>

The parsable maximum date is `December 31, 9999`, and the minimum date is `January 1, 0001`.

```typescript
parse('Dec 31 9999', 'MMM D YYYY');
// => Dec 31 9999 00:00:00 GMT-0800

parse('Dec 31 10000', 'MMM D YYYY');
// => Invalid Date

parse('Jan 1 0001', 'MMM D YYYY');
// => Jan 1 0001 00:00:00 GMT-0800

parse('Jan 1 0000', 'MMM D YYYY');
// => Invalid Date
```

</details>

<details open>
<summary><strong>12-hour notation and Meridiem</strong></summary>

If you use the `hh` or `h` (12-hour) token, use it together with the `A` (meridiem) token to get the correct value.

```typescript
parse('11:14:05', 'hh:mm:ss');
// => Jan 1 1970 11:14:05 GMT-0800

parse('11:14:05 PM', 'hh:mm:ss A');
// => Jan 1 1970 23:14:05 GMT-0800
```

</details>

<details open>
<summary><strong>Token invalidation</strong></summary>

Any part of the given format string that you do not want to be recognized as a token should be enclosed in square brackets. They are considered comments and will not be parsed.

```typescript
parse('12 hours 34 minutes', 'HH hours mm minutes');
// => Invalid Date

parse('12 hours 34 minutes', 'HH [hours] mm [minutes]');
// => Jan 1 1970 12:34:00 GMT-0800
```

</details>

<details open>
<summary><strong>Wildcard</strong></summary>

Whitespace acts as a wildcard token. This token will skip parsing the corresponding parts of the date and time strings. This behavior is similar to enclosing part of a format string in square brackets (Token invalidation), but with the flexibility that the contents do not have to match exactly - only the character count needs to match between the format string and input string.

```typescript
// This will be an error.
parse('2015/01/02 11:14:05', 'YYYY/MM/DD');
// => Invalid Date

parse('2015/01/02 11:14:05', 'YYYY/MM/DD         ');
// => Jan 2 2015 00:00:00 GMT-0800
```

</details>

<details open>
<summary><strong>Ellipsis</strong></summary>

`...` token ignores subsequent corresponding date and time strings. Use this token only at the end of a format string. The above example can also be written like this:

```typescript
parse('2015/01/02 11:14:05', 'YYYY/MM/DD...');
// => Jan 2 2015 00:00:00 GMT-0800
```

</details>
</details>

### compile(formatString)

<details>
<summary>Compiles a format string into a tokenized array for efficient parsing and formatting.</summary>

- formatString
  - type: `string`
  - The format string to compile

If you are going to execute the `format`, `parse`, or `isValid` functions many times with one string format, it is recommended to precompile and reuse it for performance.

```typescript
import { compile, parse, format } from 'date-and-time';

const pattern = compile('MMM D YYYY h:m:s A');

parse('Mar 22 2019 2:54:21 PM', pattern);
parse('Jul 27 2019 4:15:24 AM', pattern);
parse('Dec 25 2019 3:51:11 AM', pattern);

format(new Date(), pattern);
// => Mar 16 2020 6:24:56 PM
```

</details>

### preparse(dateString, arg[, options])

<details>
<summary>Preparses a date string according to the specified pattern.</summary>

- dateString
  - type: `string`
  - The date string to preparse
- arg
  - type: `string | CompiledObject`
  - The pattern string or compiled object to match against the date string
- [options]
  - type: `ParserOptions`
  - Optional parser options

```typescript
import { preparse } from 'date-and-time';

preparse('Jan 2015 02 23:14:05 GMT-0800', 'MMM YYYY DD HH:mm:ss [GMT]Z');

{
  Y: 2015,      // Year
  M: 1,         // Month
  D: 2,         // Day
  H: 23,        // Hour (24-hour)
  m: 14,        // Minute
  s: 5,         // Second
  Z: 480,       // Timezone offset in minutes
  _index: 29,   // Current parsing position
  _length: 29,  // Total length of date string
  _match: 7     // Number of matched tokens
}
```

This date structure provides a parsing result. You will be able to tell from it how the date string was parsed (or why the parsing failed).

</details>

### isValid(dateString, arg[, options])

<details>
<summary>Validates whether a date string is valid according to the specified format.</summary>

- dateString
  - type: `string`
  - The date string to validate
- arg
  - type: `string | CompiledObject`
  - The format string or compiled object
- [options]
  - type: `ParserOptions`
  - Optional parser options

```typescript
isValid('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss');  // => true
isValid('29-02-2015', 'DD-MM-YYYY');                    // => false
```

For details about `ParserOptions`, refer to the `parse` function section.

</details>

### transform(dateString, arg1, arg2[, options1[, options2]])

<details>
<summary>Transforms a date string from one format to another.</summary>

- dateString
  - type: `string`
  - The date string to transform
- arg1
  - type: `string | CompiledObject`
  - The format string or compiled object for parsing
- arg2
  - type: `string | CompiledObject`
  - The format string or compiled object for formatting
- [options1]
  - type: `ParserOptions`
  - Optional parser options
- [options2]
  - type: `FormatterOptions`
  - Optional formatter options

This is a syntactic sugar for combining `parse` and `format` processing to convert date formats in a single function. It converts `dateString` to `arg2` format. Actually, it parses the `dateString` in `arg1` format and then formats it in `arg2` format.

```typescript
import { transform } from 'date-and-time';
import New_York from 'date-and-time/timezones/America/New_York';
import Los_Angeles from 'date-and-time/timezones/America/Los_Angeles';

// Swap the order of month and day
transform('3/8/2020', 'D/M/YYYY', 'M/D/YYYY');
// => 8/3/2020

// Convert 24-hour format to 12-hour format
transform('13:05', 'HH:mm', 'hh:mm A');
// => 01:05 PM

// Convert EST to PST
transform(
  '3/8/2020 1:05 PM', 'D/M/YYYY h:mm A', 'D/M/YYYY h:mm A',
  { timeZone: New_York }, { timeZone: Los_Angeles }
);
// => 3/8/2020 10:05 AM
```

For details about `ParserOptions`, refer to the `parse` function section. For details about `FormatterOptions`, refer to the `format` function section.

</details>

### addYears(dateObj, years[, timeZone])

<details>
<summary>Adds the specified number of years to a Date object.</summary>

- dateObj
  - type: `Date`
  - The Date object to modify
- years
  - type: `number`
  - The number of years to add
- [timeZone]
  - type: `TimeZone | UTC`
  - Optional time zone object or `UTC`

```typescript
import { addYears } from 'date-and-time';
import Los_Angeles from 'date-and-time/timezones/America/Los_Angeles';

const now = new Date(2024, 2, 11, 1);   // => Mar 11 2024 01:00:00 GMT-07:00

addYears(now, 1, Los_Angeles);          // => Mar 11 2025 01:00:00 GMT-07:00
addYears(now, -1, Los_Angeles);         // => Mar 11 2023 01:00:00 GMT-08:00
```

Exceptional behavior of the calculation for the last day of the month:

```typescript
const now = new Date(Date.UTC(2020, 1, 29));    // => Feb 29 2020
const next = addYears(now, 1, 'UTC');           // => Feb 28 2021
const back = addYears(next, -1, 'UTC');         // => Feb 28 2020 (not the original date)
```

</details>

### addMonths(dateObj, months[, timeZone])

<details>
<summary>Adds the specified number of months to a Date object.</summary>

- dateObj
  - type: `Date`
  - The Date object to modify
- months
  - type: `number`
  - The number of months to add
- [timeZone]
  - type: `TimeZone | UTC`
  - Optional time zone object or `UTC`

```typescript
import { addMonths } from 'date-and-time';
import Los_Angeles from 'date-and-time/timezones/America/Los_Angeles';

const now = new Date(2024, 2, 11, 1);   // => Mar 11 2024 01:00:00 GMT-07:00

addMonths(now, 1, Los_Angeles);         // => Apr 11 2024 01:00:00 GMT-07:00
addMonths(now, -1, Los_Angeles);        // => Feb 11 2024 01:00:00 GMT-08:00
```

Exceptional behavior of the calculation for the last day of the month:

```typescript
const now = new Date(Date.UTC(2023, 0, 31));    // => Jan 31 2023
const apr = addMonths(now, 3, 'UTC');           // => Apr 30 2023
const feb = addMonths(apr, -2, 'UTC');          // => Feb 28 2023
```

</details>

### addDays(dateObj, days[, timeZone])

<details>
<summary>Adds the specified number of days to a Date object.</summary>

- dateObj
  - type: `Date`
  - The Date object to modify
- days
  - type: `number`
  - The number of days to add
- [timeZone]
  - type: `TimeZone | UTC`
  - Optional time zone object or `UTC`

```typescript
import { addDays } from 'date-and-time';
import Los_Angeles from 'date-and-time/timezones/America/Los_Angeles';

const now = new Date(2024, 2, 11, 1);   // => Mar 11 2024 01:00:00 GMT-07:00

addDays(now, 1, Los_Angeles);           // => Mar 12 2024 01:00:00 GMT-07:00
addDays(now, -1, Los_Angeles);          // => Mar 10 2024 01:00:00 GMT-08:00
```

</details>

### addHours(dateObj, hours)

<details>
<summary>Adds the specified number of hours to a Date object.</summary>

- dateObj
  - type: `Date`
  - The Date object to modify
- hours
  - type: `number`
  - The number of hours to add

```typescript
import { addHours } from 'date-and-time';

const now = new Date(2025, 6, 24);  // => Jul 24 2025 00:00:00

addHours(now, -1);                  // => Jul 23 2025 23:00:00
```

</details>

### addMinutes(dateObj, minutes)

<details>
<summary>Adds the specified number of minutes to a Date object.</summary>

- dateObj
  - type: `Date`
  - The Date object to modify
- minutes
  - type: `number`
  - The number of minutes to add

```typescript
import { addMinutes } from 'date-and-time';

const now = new Date(2025, 6, 24);  // => Jul 24 2025 00:00:00

addMinutes(now, 2);                 // => Jul 24 2025 00:02:00
```

</details>

### addSeconds(dateObj, seconds)

<details>
<summary>Adds the specified number of seconds to a Date object.</summary>

- dateObj
  - type: `Date`
  - The Date object to modify
- seconds
  - type: `number`
  - The number of seconds to add

```typescript
import { addSeconds } from 'date-and-time';

const now = new Date(2025, 6, 24);  // => Jul 24 2025 00:00:00

addSeconds(now, -3);                // => Jul 23 2025 23:59:57
```

</details>

### addMilliseconds(dateObj, milliseconds)

<details>
<summary>Adds the specified number of milliseconds to a Date object.</summary>

- dateObj
  - type: `Date`
  - The Date object to modify
- milliseconds
  - type: `number`
  - The number of milliseconds to add

```typescript
import { addMilliseconds } from 'date-and-time';

const now = new Date(2025, 6, 24);  // => Jul 24 2025 00:00:00.000

addMilliseconds(now, 123);          // => Jul 24 2025 00:00:00.123
```

</details>

### subtract(from, to)

<details>
<summary>Calculates the difference between two dates.</summary>

- from
  - type: `Date`
  - The first Date object
- to
  - type: `Date`
  - The second Date object

Returns a `Duration` instance with methods to get the difference in various units.

```typescript
import { subtract } from 'date-and-time';

const yesterday = new Date(2015, 0, 1);
const today = new Date(2015, 0, 2, 3, 4, 5, 6);

const duration = subtract(yesterday, today);

duration.toDays().value;            // => 1.127835...
duration.toHours().value;           // => 27.068057...
duration.toMinutes().value;         // => 1624.083433...
duration.toSeconds().value;         // => 97445.006
duration.toMilliseconds().value;    // => 97445006
duration.toMicroseconds().value;    // => 97445006000
duration.toNanoseconds().value;     // => 97445006000000
```

#### Duration

The `Duration` object can be directly created not only as a return value of the `subtract` function, but also by passing any numeric value (milliseconds) as a constructor argument.

```typescript
import { Duration } from 'date-and-time';

const duration = new Duration(123);

duration.toSeconds().value; // => 0.123
```

<details>
<summary><strong>toDays()</strong></summary>

This method calculates the number of days in the duration and returns a descriptor that includes the value in days, a format method for custom formatting, and a toParts method that returns an object with the parts of the duration.

```typescript
duration.toDays().value;
// => 1.127835...

duration.toDays().format('D[day], H:mm:ss.SSSfffFFF');
// => 1day, 3:04:05.006000000

duration.toDays().toParts();
// => { days: 1, hours: 3, minutes: 4, seconds: 5, ... }
```

</details>

<details>
<summary><strong>toHours()</strong></summary>

This method calculates the number of hours in the duration and returns a descriptor that includes the value in hours, a format method for custom formatting, and a toParts method that returns an object with the parts of the duration.

```typescript
duration.toHours().value;
// => 27.068057...

duration.toHours().format('H:mm:ss.SSSfffFFF');
// => 27:04:05.006000000

duration.toHours().toParts();
// => { hours: 27, minutes: 4, seconds: 5, ... }
```

</details>

<details>
<summary><strong>toMinutes()</strong></summary>

This method calculates the number of minutes in the duration and returns a descriptor that includes the value in minutes, a format method for custom formatting, and a toParts method that returns an object with the parts of the duration.

```typescript
duration.toMinutes().value;
// => 1624.083433...

duration.toMinutes().format('m[min] ss.SSSfffFFF');
// => 1624min 05.006000000

duration.toMinutes().toParts();
// => { minutes: 1624, seconds: 5, milliseconds: 6, ... }
```

</details>

<details>
<summary><strong>toSeconds()</strong></summary>

This method calculates the number of seconds in the duration and returns a descriptor that includes the value in seconds, a format method for custom formatting, and a toParts method that returns an object with the parts of the duration.

```typescript
duration.toSeconds().value;
// => 97445.006

duration.toSeconds().format('s[sec] SSSfffFFF');
// => 97445sec 006000000

duration.toSeconds().toParts();
// => { seconds: 97445, milliseconds: 6, microseconds: 0, ... }
```

</details>

<details>
<summary><strong>toMilliseconds()</strong></summary>

This method calculates the number of milliseconds in the duration and returns a descriptor that includes the value in milliseconds, a format method for custom formatting, and a toParts method that returns an object with the parts of the duration.

```typescript
duration.toMilliseconds().value;
// => 97445006

duration.toMilliseconds().format('S.fffFFF');
// => 97445006.000000

duration.toMilliseconds().toParts();
// => { milliseconds: 97445006, microseconds: 0, nanoseconds: 0 }
```

</details>

<details>
<summary><strong>toMicroseconds()</strong></summary>

This method calculates the number of microseconds in the duration and returns a descriptor that includes the value in microseconds, a format method for custom formatting, and a toParts method that returns an object with the microseconds and nanoseconds parts.

```typescript
duration.toMicroseconds().value;
// => 97445006000

duration.toMicroseconds().format('f.FFF');
// => 97445006000.000

duration.toMicroseconds().toParts();
// => { microseconds: 97445006000, nanoseconds: 0 }
```

</details>

<details>
<summary><strong>toNanoseconds()</strong></summary>

This method calculates the number of nanoseconds in the duration and returns a descriptor that includes the value in nanoseconds, a format method for custom formatting, and a toParts method that returns an object with the nanoseconds part.

```typescript
duration.toNanoseconds().value;
// => 97445006000000

duration.toNanoseconds().format('F[ns]');
// => 97445006000000ns

duration.toNanoseconds().toParts();
// => { nanoseconds: 97445006000000 }
```

</details>

#### DurationDescriptor

##### value

The value of the duration in the respective unit.

##### format(formatString[, numeral])

<details>
<summary>Formats the duration according to the provided format string.</summary>

- formatString
  - type: `string`
  - The format string to use for formatting
- [numeral]
  - type: `Numeral`
  - default: `latn`
  - Optional numeral object for number formatting

The tokens available for use in the format string specified as the first argument and their meanings are as follows. However, tokens for units larger than the `DurationDescriptor` cannot be used. For example, in the case of a `DurationDescriptor` obtained by the `toHours` method, the `D` token representing days cannot be used. For a `DurationDescriptor` obtained by the `toNanoseconds` method, only the `F` token representing nanoseconds can be used.

| Token    | Meaning                            |
|:---------|:-----------------------------------|
| D        | Days                               |
| H        | Hours                              |
| m        | Minutes                            |
| s        | Seconds                            |
| S        | Milliseconds                       |
| f        | Microseconds                       |
| F        | Nanoseconds                        |

What makes the format string in `DurationDescriptor` different from others is that repeating the same token produces a zero-padding effect. For example, formatting `1 day` with `DDDD` results in an output of `0001`.

</details>

##### toParts()

<details>
<summary>Converts the duration to an object containing the parts of the duration in the respective unit.</summary>

```typescript
{
  days: 1,
  hours: 3,
  minutes: 4,
  seconds: 5,
  milliseconds: 6,
  microseconds: 0,
  nanoseconds: 0
}
```

</details>

#### Notes

<details open>
<summary><strong>Negative Duration</strong></summary>

When the `value` becomes negative, there are slight differences in the output results of the `format` method and the `toParts` method. In the `format` method, only the largest unit in the `DurationDescriptor`, for example, only the `D` token in the case of a `DurationDescriptor` obtained by the `toDays` method, gets a minus sign, while in the `toParts` method, all units get a minus sign.

```typescript
duration.toDays().value;
// => -1.127835...

duration.toDays().format('D[day], H:mm:ss.SSSfffFFF');
// => -1day, 3:04:05.006000000

duration.toDays().toParts();
// => { days: -1, hours: -3, minutes: -4, seconds: -5, ... }
```

</details>

<details open>
<summary><strong>Negative Zero</strong></summary>

The `format` method may output `-0`. For example, when the value of a `DurationDescriptor` obtained by the `toDays` method is a negative decimal less than 1, using the `D` token in the `format` method outputs `-0`.

```typescript
duration.toDays().value;
// => -0.127835...

duration.toDays().format('D[day], H:mm:ss.SSSfffFFF');
// => -0day, 3:04:05.006000000

duration.toDays().toParts();
// => { days: 0, hours: -3, minutes: -4, seconds: -5, ... }
```

</details>
</details>

### isLeapYear(year)

<details>
<summary>Determines if the specified year is a leap year.</summary>

- year
  - type: `number`
  - The year to check

```typescript
import { isLeapYear } from 'date-and-time';

isLeapYear(2015);   // => false
isLeapYear(2012);   // => true
```

</details>

### isSameDay(date1, date2)

<details>
<summary>Determines if two dates represent the same calendar day.</summary>

- date1
  - type: `Date`
  - The first date to compare
- date2
  - type: `Date`
  - The second date to compare

```typescript
import { isSameDay } from 'date-and-time';

const date1 = new Date(2017, 0, 2, 0);          // Jan 2 2017 00:00:00
const date2 = new Date(2017, 0, 2, 23, 59);     // Jan 2 2017 23:59:00
const date3 = new Date(2017, 0, 1, 23, 59);     // Jan 1 2017 23:59:00

isSameDay(date1, date2);    // => true
isSameDay(date1, date3);    // => false
```

</details>

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
