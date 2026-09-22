# v3 to v4 API mapping

For each v3 function: the v4 replacement, and what else changes. All v4 code uses named imports. "UTC flag" means the v3 boolean argument `true`.

## format

```javascript
// v3
date.format(now, 'hh:mm A [GMT]Z', true);
date.formatTZ(now, 'YYYY-MM-DD HH:mm:ss [EST]', 'America/New_York');
```

```typescript
// v4
import { format } from 'date-and-time';

format(now, 'hh:mm A [GMT]Z', { timeZone: 'UTC' });
format(now, 'YYYY-MM-DD HH:mm:ss [EST]', { timeZone: 'America/New_York' });
```

The third argument is now `FormatterOptions` (`locale`, `timeZone`, `numeral`, `calendar`, `hour12`, `hour24`, `plugins`). A leftover `true` there is silently ignored and gives local time.

## parse

```javascript
// v3
date.parse('11:14:05 PM', 'h:mm:ss A', true);
date.parseTZ('2015-01-02 23:14', 'YYYY-MM-DD HH:mm', 'Europe/Paris');
```

```typescript
// v4
import { parse } from 'date-and-time';

parse('11:14:05 PM', 'h:mm:ss A', { timeZone: 'UTC' });
parse('2015-01-02 23:14', 'YYYY-MM-DD HH:mm', { timeZone: 'Europe/Paris' });
```

A leftover `true` is silently ignored and the input is read as local time. `parse` still returns `Invalid Date` on failure.

## preparse

```typescript
// v4
import { preparse } from 'date-and-time';

preparse('11:14:05 PM', 'h:mm:ss A');
// { _index: 11, _length: 11, _match: 4, h: 11, m: 14, s: 5, A: 1 }
```

Changes from v3: properties for tokens that were not read are absent (no `Y`, `M`, `D` here), and read values are returned as-is (a 12-hour `h` is not converted to 24-hour). The third argument is `ParserOptions`.

## isValid

```javascript
// v3
date.isValid('2015-02-30', 'YYYY-MM-DD');
date.isValid(date.preparse('11:14:05 PM', 'h:mm:ss A'));   // a preparse result as the argument
```

```typescript
// v4
import { isValid } from 'date-and-time';

isValid('2015-02-30', 'YYYY-MM-DD');            // false
isValid('11:14:05 PM', 'h:mm:ss A');            // pass the string and the pattern
```

Passing a `preparse` result is no longer supported. The third argument is `ParserOptions`.

## transform

```javascript
// v3: the string is parsed as local time; the UTC flag applies to the output only
date.transform('2015-01-02 23:14', 'YYYY-MM-DD HH:mm', 'HH:mm Z', true);
date.transformTZ('3/8/2020 1:05 PM -0400', 'D/M/YYYY h:mm A Z', 'D/M/YYYY h:mm A', 'America/Los_Angeles');
```

```typescript
// v4: fourth argument is ParserOptions, fifth is FormatterOptions
import { transform } from 'date-and-time';

transform('2015-01-02 23:14', 'YYYY-MM-DD HH:mm', 'HH:mm Z', undefined, { timeZone: 'UTC' });
transform('3/8/2020 1:05 PM -0400', 'D/M/YYYY h:mm A Z', 'D/M/YYYY h:mm A', undefined, { timeZone: 'America/Los_Angeles' });
```

Both v4 lines keep the v3 meaning: the input is read as local time unless it carries an offset, and only the output is converted. Use `{ timeZone: ... }` in the fourth argument only when the input itself is in that zone.

## addYears, addMonths, addDays

```javascript
// v3
date.addYears(now, 1, true);
date.addYearsTZ(now, 1, 'America/Los_Angeles');
```

```typescript
// v4
import { addYears } from 'date-and-time';

addYears(now, 1, 'UTC');
addYears(now, 1, 'America/Los_Angeles');
```

The same applies to `addMonths` and `addDays`, including `addMonthsTZ` and `addDaysTZ`. The third argument is now a timezone string, so a leftover `true` throws `RangeError: Invalid time zone specified: true`.

`addHours`, `addMinutes`, `addSeconds`, and `addMilliseconds` behave the same. Since v3.5 their third `utc` argument was deprecated and ignored; v4 removes it, so delete a leftover `true` (TypeScript reports it as an extra argument; JavaScript ignores it).

## subtract and timeSpan

```javascript
// v3: date1 - date2, and each method returns a number
date.subtract(today, yesterday).toDays();                        // 1
date.timeSpan(now, newYearsDay).toDays('D HH:mm:ss.SSS');        // '64 01:02:03.004'
```

```typescript
// v4: to - from, and each method returns an object { value, format, toParts }
import { subtract } from 'date-and-time';

subtract(yesterday, today).toDays().value;                                       // 1
subtract(newYearsDay, now).toDays().format('D HH:mm:ss.SSS');                    // 64 01:02:03.004
subtract(newYearsDay, now).toHours().format('H [hours] m [minutes] s [seconds]'); // 1537 hours 2 minutes 3 seconds
```

The first argument is now the earlier date. The `timespan` plugin no longer exists; its formatting is `.format()` on the result of `subtract`. `toMicroseconds()` and `toNanoseconds()` are new.

## Tokens

- `AA`, `a`, and `aa` (formerly the `meridiem` plugin) are core tokens. Remove `date.plugin('meridiem')`.
- `z` and `zz` (formerly provided by the `timezone` plugin) need the `zonename` plugin: `import { formatter as zonename } from 'date-and-time/plugins/zonename'` and `{ plugins: [zonename] }`.
- `DDD`, `YY`, the weekday tokens when parsing, and the microsecond tokens still need their plugins; the import path and shape changed (see [locales-and-plugins.md](locales-and-plugins.md)).
- New in v4: `Q` (quarter), `t` and `T` (timestamps), `W` `WW` `G` `GG` `GGGG` (ISO week), and the nanosecond parse tokens, each from a plugin.

## compile

`date.compile(pattern)` becomes `compile(pattern)`. Treat the result as opaque and pass it wherever a pattern is accepted. Do not store it or inspect its contents; recompile instead.

## New helpers

`getDaysInMonth`, `getISOWeek`, and `getISOWeekYear` are new. `isLeapYear` and `isSameDay` are unchanged.
