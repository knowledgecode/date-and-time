# Options reference

`FormatterOptions` is the third argument of `format` and the fifth of `transform`. `ParserOptions` is the third argument of `parse`, `isValid`, and `preparse`, and the fourth of `transform`. Every field is optional.

```typescript
interface FormatterOptions {
  locale?: Locale;
  timeZone?: TimeZone | string;
  numeral?: Numeral;
  calendar?: 'gregory' | 'buddhist';
  hour12?: 'h11' | 'h12';
  hour24?: 'h23' | 'h24';
  plugins?: (FormatterPluginObject | FormatterPlugin)[];
}

interface ParserOptions {
  locale?: Locale;
  timeZone?: TimeZone | string;
  numeral?: Numeral;
  calendar?: 'gregory' | 'buddhist';
  hour12?: 'h11' | 'h12';
  hour24?: 'h23' | 'h24';
  ignoreCase?: boolean;
  defaultDate?: ParsedComponents;
  plugins?: (ParserPluginObject | ParserPlugin)[];
}
```

`FormatterPlugin` and `ParserPlugin` are deprecated; write new code with `FormatterPluginObject` and `ParserPluginObject`.

| Option | Applies to | Default | Effect |
|--------|------------|---------|--------|
| `locale` | both | English (built in) | Month names, weekday names, and AM/PM text |
| `timeZone` | both | local timezone | `format` converts the date to this zone first; `parse` reads the input as this zone |
| `numeral` | both | `latn` | Digit system for output and input |
| `calendar` | both | `'gregory'` | `'buddhist'` adds 543 to the year (2025 becomes 2568) |
| `hour12` | both | `'h12'` | `'h11'` shows the first hour after midnight as `0:30 AM`; `'h12'` as `12:30 AM` |
| `hour24` | both | `'h23'` | `'h24'` shows the first hour after midnight as `24:30`; `'h23'` as `0:30` |
| `ignoreCase` | parse | `false` | Case-insensitive month, weekday, and AM/PM names |
| `defaultDate` | parse | `{ Y: 1970, M: 1, D: 1, m: 0, s: 0, S: 0 }` | Values for components the pattern does not read |
| `plugins` | both | none | Extra tokens; see [plugins.md](plugins.md) |

## timeZone

Pass an IANA name (`'Asia/Tokyo'`, `'America/New_York'`) or `'UTC'`. No import is needed. `'UTC'` is processed faster than any other string, so prefer it for UTC. The same value is accepted as the third argument of `addYears`, `addMonths`, and `addDays`.

```typescript
format(date, 'YYYY-MM-DD HH:mm', { timeZone: 'Asia/Tokyo' });
parse('2025-08-23 14:30', 'YYYY-MM-DD HH:mm', { timeZone: 'Asia/Tokyo' });
addDays(date, 1, 'America/Los_Angeles');
```

## defaultDate

```typescript
interface ParsedComponents {
  Y?: number;  // year
  M?: number;  // month, 1-12
  D?: number;  // day
  H?: number;  // hour, 24-hour
  A?: number;  // meridiem, 0 = AM, 1 = PM
  h?: number;  // hour, 12-hour
  m?: number;  // minute
  s?: number;  // second
  S?: number;  // millisecond
  Z?: number;  // UTC offset in minutes with the sign of the Z token (UTC+9 is -540)
}
```

`defaultDate.Z` takes precedence over `timeZone`.

```typescript
parse('12:30', 'HH:mm', { defaultDate: { Y: 2024, M: 3, D: 15 } });   // 2024-03-15 12:30 local
```

## Locales

English is built in. Any other locale is a separate module whose default export goes in the `locale` option:

```typescript
import ja from 'date-and-time/locales/ja';

format(date, 'YYYY年M月D日(ddd)', { locale: ja });   // 2025年8月23日(土)
```

In CommonJS, `require` returns the same locale, so pass it directly:

```javascript
const { format } = require('date-and-time');
const ja = require('date-and-time/locales/ja');

format(date, 'YYYY年M月D日(ddd)', { locale: ja });   // 2025年8月23日(土)
```

Locale codes: ar az bn cs da de el en es fa fi fr he hi hu id it ja ko ms my nl no pl pt-BR pt-PT ro ru rw sr-Cyrl sr-Latn sv ta th tr uk uz-Cyrl uz-Latn vi zh-Hans zh-Hant

- Portuguese, Serbian, Uzbek, and Chinese are split by region or script: there is no bare `pt`, `sr`, `uz`, `zh-cn`, or `zh-tw`.
- Month names are locale data. In `ja`, `MMMM` and `MMM` give the bare number (`8`, not `8月`), so add the unit yourself: `'M月'`.

## Numerals

`latn` (0-9) is the default and needs no import. The others are modules whose default export goes in the `numeral` option:

```typescript
import arab from 'date-and-time/numerals/arab';

format(date, 'DD/MM/YYYY', { numeral: arab });   // ٢٣/٠٨/٢٠٢٥
```

Numerals: latn arab arabext beng mymr

`Duration` formatting accepts the same module as the second argument: `duration.toHours().format('H:mm', arab)`.
