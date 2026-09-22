---
name: date-and-time
description: Write and review code that uses the date-and-time v4 library (npm package date-and-time). Covers formatting dates, parsing and validating date strings, timezone and locale handling, date arithmetic, durations, and plugins. Use when a project depends on date-and-time or the user asks about its format tokens, options, or plugins. For upgrading a v3 project to v4, use the date-and-time-migration skill instead.
---

# date-and-time v4

Targets date-and-time 4.x. The code targets ES2021; the supported Node.js versions are in the package's `engines` field. Full documentation: https://knowledgecode.github.io/date-and-time/

## Start here

1. Confirm the major version with `npm ls date-and-time`. On 3.x, stop and use the `date-and-time-migration` skill: v3 exposes a default `date` object with global locale and plugin registration, and v4 has neither.
2. Use named imports. There is no default export.

```typescript
import { format, parse } from 'date-and-time';       // ESM and TypeScript
const { format, parse } = require('date-and-time');   // CommonJS
```

   In CommonJS, `require` a locale or numeral module and pass it as-is (`const ja = require('date-and-time/locales/ja')`); a plugin module is an object with `formatter` and/or `parser`.

3. Nothing is global. Locales, numerals, plugins, and timezones are passed per call in the options object, so import only what the call needs.

## Functions

| Function | Signature | Returns |
|----------|-----------|---------|
| `format` | `(date, pattern, options?)` | `string` |
| `parse` | `(string, pattern, options?)` | `Date`, or `Invalid Date` on failure |
| `isValid` | `(string, pattern, options?)` | `boolean` |
| `preparse` | `(string, pattern, options?)` | components read from the string (low-level) |
| `transform` | `(string, fromPattern, toPattern, parserOptions?, formatterOptions?)` | `string` |
| `compile` | `(pattern)` | compiled pattern, accepted wherever `pattern` is |
| `addYears`, `addMonths`, `addDays` | `(date, n, timeZone?)` | new `Date` |
| `addHours`, `addMinutes`, `addSeconds`, `addMilliseconds` | `(date, n)` | new `Date` |
| `subtract` | `(from, to)` | `Duration` holding `to - from` |
| `isLeapYear`, `isSameDay` | `(year)`, `(date1, date2)` | `boolean` |
| `getDaysInMonth` | `(date)` or `(year, month)` with month 1-12 | `number` |
| `getISOWeek`, `getISOWeekYear` | `(date)` or `(year, month, day)` with month 1-12 | `number` |

`Duration` is also exported: `new Duration(milliseconds)`. Its `toDays()`, `toHours()`, `toMinutes()`, `toSeconds()`, `toMilliseconds()`, `toMicroseconds()`, and `toNanoseconds()` each return `{ value, format(pattern), toParts() }`.

## Quick examples

Every output below was produced by running the code, and is the same under any machine timezone.

```typescript
import { format, parse, isValid, transform, addMonths, subtract } from 'date-and-time';
import ja from 'date-and-time/locales/ja';
import { formatter as ordinal } from 'date-and-time/plugins/ordinal';

const date = new Date(2025, 7, 23, 14, 30, 45);              // local time

format(date, 'YYYY-MM-DD HH:mm:ss');                          // 2025-08-23 14:30:45
format(date, 'ddd, MMM D YYYY [at] h:mm A');                  // Sat, Aug 23 2025 at 2:30 PM
format(new Date(Date.UTC(2025, 7, 23, 14, 30)), 'YYYY-MM-DD HH:mm', { timeZone: 'Asia/Tokyo' });   // 2025-08-23 23:30
format(date, 'YYYY年M月D日(ddd)', { locale: ja });            // 2025年8月23日(土)
format(date, 'MMMM DDD, YYYY', { plugins: [ordinal] });       // August 23rd, 2025

parse('23/08/2025 14:30', 'DD/MM/YYYY HH:mm');                // Date, local time
parse('2025-08-23 14:30', 'YYYY-MM-DD HH:mm', { timeZone: 'Asia/Tokyo' }).toISOString();   // 2025-08-23T05:30:00.000Z
isValid('2025-02-30', 'YYYY-MM-DD');                          // false
transform('2025-08-23 14:30', 'YYYY-MM-DD HH:mm', 'MMM D, YYYY h:mm A');   // Aug 23, 2025 2:30 PM

format(addMonths(new Date(2025, 0, 31), 1), 'YYYY-MM-DD');    // 2025-02-28 (clamped to the end of the month)

const worked = subtract(new Date(2025, 7, 23, 9, 0), new Date(2025, 7, 23, 17, 45));
worked.toHours().value;                                       // 8.75
worked.toHours().format('H[h] m[m]');                         // 8h 45m
```

## Core tokens

| Token | Meaning | Example |
|-------|---------|---------|
| `YYYY` | 4-digit year | 2025 |
| `MMMM`, `MMM`, `MM`, `M` | month: full name, short name, 2-digit, plain | August, Aug, 08, 8 |
| `DD`, `D` | day: 2-digit, plain | 05, 5 |
| `HH`, `H` | 24-hour: 2-digit, plain | 09, 9 |
| `hh`, `h` | 12-hour: 2-digit, plain (pair with `A`) | 02, 2 |
| `mm`, `ss`, `SSS` | minute, second, millisecond | 07, 05, 123 |
| `A` | AM/PM | PM |
| `Z`, `ZZ` | UTC offset | +0900, +09:00 |
| `[text]` | literal text | `[at]` |

Anything else (weekday names, `AA`/`a`/`aa`, `Y`, `YY`, `SS`/`S`, plugin tokens, and which tokens parse accepts) is in [references/tokens.md](references/tokens.md).

## Gotchas

- `parse` never throws and never returns `null`. A failure gives an `Invalid Date`; test it with `Number.isNaN(result.getTime())`, or call `isValid` first. Impossible dates such as `2025-02-30` fail.
- Components missing from the pattern default to 1970-01-01 00:00:00.000. Supply your own with `defaultDate`, for example `{ defaultDate: { Y: 2024, M: 3, D: 15 } }`. Years outside 0001-9999 fail.
- Input without an offset is read as local time. Pass `{ timeZone: 'UTC' }` (or an IANA name) to read it in another zone; an offset in the input (`Z`, `ZZ`) takes precedence.
- Wrap literal text in square brackets: `[at]`, `[T]`, `[GMT]`. A bare letter that is a token is replaced, so `'h:mm at'` prints `2:30 pmt`. To print real brackets, escape them: `'\\[YYYY\\]'` in a JavaScript string.
- When parsing with `h` or `hh`, include `A` or `a`; without it the time is read as AM.
- In a parse pattern, each space matches exactly one arbitrary character, and the pattern must consume the whole input. Append `...` to ignore the rest of the input.
- Timezones are IANA strings in `timeZone` (`'Asia/Tokyo'`); `'UTC'` is the fast path. The `date-and-time/timezone` and `date-and-time/timezones/*` imports and the `FormatterPlugin` / `ParserPlugin` types still work but are deprecated and will be removed in the next major version. Do not generate them.
- A token outside the core set needs a plugin. Without one, format prints it literally instead of failing: `format(date, 'HH:mm z')` gives `23:30 z`. See [references/plugins.md](references/plugins.md).
- `subtract(from, to)` is `to - from`, so `subtract(monday, friday)` is positive. Values may be fractional or negative.
- `addYears`, `addMonths`, and `addDays` take an optional timeZone so that day boundaries follow that zone. The hour, minute, second, and millisecond adders add absolute time and take none. Every add function returns a new `Date` and leaves its input untouched.
- For a pattern used many times, call `compile(pattern)` once and pass the result in place of the string.
- `FormatterOptions` and `ParserOptions` are not exported. Derive them with `Parameters<typeof format>[2]` and `Parameters<typeof parse>[2]`.

## Verifying your code

Run the code instead of predicting its output. Anything that touches local time or timezones must give the same result on every machine, so run it under two zones and compare:

```shell
TZ=UTC node --input-type=module -e "import { format } from 'date-and-time'; console.log(format(new Date(2025, 7, 23, 14, 30), 'YYYY-MM-DD HH:mm'))"
TZ=Asia/Tokyo node --input-type=module -e "import { format } from 'date-and-time'; console.log(format(new Date(2025, 7, 23, 14, 30), 'YYYY-MM-DD HH:mm'))"
```

If the two outputs differ, the code depends on the machine timezone: pass `timeZone` explicitly.

## References

- [references/tokens.md](references/tokens.md): full format and parse token tables, including plugin tokens. Read it when a pattern needs more than the core tokens, or when a token seems to print literally.
- [references/options.md](references/options.md): every field of `FormatterOptions` and `ParserOptions`, the locale codes, and the numeral systems. Read it for locale, numeral, calendar, `hour12`/`hour24`, `ignoreCase`, or `defaultDate`.
- [references/plugins.md](references/plugins.md): the nine bundled plugins and how to write a custom token. Read it when you need a token that is not in the core set.
