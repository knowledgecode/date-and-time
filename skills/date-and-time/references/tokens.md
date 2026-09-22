# Token reference

Patterns for `format`, `parse`, `isValid`, `preparse`, and `transform` are built from the tokens below. Text in square brackets is literal. Any other character that is not a token is copied as-is when formatting, and must match exactly when parsing.

## Core tokens

Available without a plugin. "Parse" says whether the token can be used when reading a string.

| Token | Meaning | Examples | Parse |
|-------|---------|----------|-------|
| `YYYY` | 4-digit year | 0999, 2015 | yes |
| `YY` | 2-digit year | 99, 01, 15 | no (needs `two-digit-year`) |
| `Y` | year without padding | 2, 44, 2015 | yes |
| `MMMM` | full month name | January | yes |
| `MMM` | short month name | Jan | yes |
| `MM` | month 01-12 | 01, 12 | yes |
| `M` | month 1-12 | 1, 12 | yes |
| `DD` | day 01-31 | 02, 31 | yes |
| `D` | day 1-31 | 2, 31 | yes |
| `dddd` | full weekday name | Friday | no (needs `day-of-week`) |
| `ddd` | short weekday name | Fri | no (needs `day-of-week`) |
| `dd` | very short weekday name | Fr | no (needs `day-of-week`) |
| `HH` | hour, 24-hour, padded | 23, 08 | yes |
| `H` | hour, 24-hour | 23, 8 | yes |
| `hh` | hour, 12-hour, padded | 11, 08 | yes |
| `h` | hour, 12-hour | 11, 8 | yes |
| `mm` | minute, padded | 14, 07 | yes |
| `m` | minute | 14, 7 | yes |
| `ss` | second, padded | 05, 10 | yes |
| `s` | second | 5, 10 | yes |
| `SSS` | milliseconds, 3 digits | 753, 022 | yes |
| `SS` | milliseconds, 2 digits | 75, 02 | yes |
| `S` | milliseconds, 1 digit | 7, 0 | yes |
| `A` | AM/PM | AM, PM | yes |
| `AA` | A.M./P.M. | A.M., P.M. | yes |
| `a` | am/pm | am, pm | yes |
| `aa` | a.m./p.m. | a.m., p.m. | yes |
| `Z` | UTC offset | +0100, -0800 | yes |
| `ZZ` | UTC offset with colon | +01:00, -08:00 | yes |

Month names, weekday names, and AM/PM text come from the `locale` option (English by default), so `MMMM`, `MMM`, `dddd`, `ddd`, `dd`, `A`, `AA`, `a`, and `aa` change with it.

## Plugin tokens

Each token works only when its plugin is passed in `plugins` (see [plugins.md](plugins.md)). Without the plugin, format prints the token as literal text, and parse fails.

| Token | Meaning | Examples | Plugin | Side |
|-------|---------|----------|--------|------|
| `DDD` | day with ordinal suffix | 1st, 2nd, 3rd | `ordinal` | format and parse |
| `Q` | quarter of the year | 1, 2, 3, 4 | `quarter` | format |
| `t` | Unix timestamp, seconds | 0, 1000000000 | `timestamp` | format |
| `T` | Unix timestamp, milliseconds | 0, 1000000000000 | `timestamp` | format |
| `W` | ISO week number | 1, 27, 53 | `week` | format |
| `WW` | ISO week number, padded | 01, 27, 53 | `week` | format |
| `G` | ISO week year | 2024, 2025 | `week` | format |
| `GG` | ISO week year, 2 digits | 24, 25 | `week` | format |
| `GGGG` | ISO week year, 4 digits | 2024, 2025 | `week` | format |
| `z` | short timezone name | PST, EST | `zonename` | format |
| `zz` | long timezone name | Pacific Standard Time | `zonename` | format |
| `YY` | 2-digit year | 90, 00, 19 | `two-digit-year` | parse |
| `dddd`, `ddd`, `dd` | weekday name (read and skipped) | Friday, Fri, Fr | `day-of-week` | parse |
| `SSSSSS`, `SSSSS`, `SSSS`, `fff`, `ff`, `f` | sub-millisecond digits (read and skipped) | 123456, 753 | `microsecond` | parse |
| `SSSSSSSSS`, `SSSSSSSS`, `SSSSSSS`, `FFF`, `FF`, `F` | nanosecond digits (read and skipped) | 123456789, 753 | `nanosecond` | parse |

## Pattern syntax

- `[text]` is literal in both directions: `'YYYY-MM-DD[T]HH:mm:ss'`.
- To match or print real square brackets, escape them with a backslash: `'\\[YYYY-MM-DD\\]'` in a JavaScript string.
- When parsing, each space in the pattern matches exactly one arbitrary character of the input, and the pattern must consume the whole input.
- When parsing, `...` at the end of the pattern ignores the rest of the input: `parse('2025-08-23 14:30 extra', 'YYYY-MM-DD HH:mm...')`.
- When parsing, `h` and `hh` need `A` or `a`; without it the hour is read as AM.
