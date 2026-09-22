# Plugins reference

Plugins add tokens that the core does not have. A plugin module exports `formatter` (for `format`), `parser` (for `parse`, `preparse`, `isValid`), or both. Pass it in the `plugins` option of the matching call, and import only the plugins you use.

```typescript
import { format, parse } from 'date-and-time';
import { formatter as ordinalFormatter, parser as ordinalParser } from 'date-and-time/plugins/ordinal';

format(date, 'MMMM DDD, YYYY', { plugins: [ordinalFormatter] });   // August 23rd, 2025
parse('August 23rd, 2025', 'MMMM DDD, YYYY', { plugins: [ordinalParser] });
```

CommonJS exposes the same names as properties:

```javascript
const { format } = require('date-and-time');
const ordinal = require('date-and-time/plugins/ordinal');

format(date, 'MMMM DDD, YYYY', { plugins: [ordinal.formatter] });
```

## Bundled plugins

Bundled plugins: day-of-week microsecond nanosecond ordinal quarter timestamp two-digit-year week zonename

| Plugin | Exports | Tokens | Notes |
|--------|---------|--------|-------|
| `day-of-week` | `parser` | `dddd` `ddd` `dd` | Reads a weekday name and discards it |
| `microsecond` | `parser` | `SSSSSS` `SSSSS` `SSSS` `fff` `ff` `f` | Reads the digits and discards them (`Date` has millisecond precision) |
| `nanosecond` | `parser` | `SSSSSSSSS` `SSSSSSSS` `SSSSSSS` `FFF` `FF` `F` | Reads the digits and discards them |
| `ordinal` | `formatter`, `parser` | `DDD` | 1st, 2nd, 3rd |
| `quarter` | `formatter` | `Q` | 1-4 |
| `timestamp` | `formatter` | `t` `T` | Unix seconds / milliseconds |
| `two-digit-year` | `parser` | `YY` | Reads a 2-digit year |
| `week` | `formatter` | `W` `WW` `G` `GG` `GGGG` | ISO week number and ISO week year |
| `zonename` | `formatter` | `z` `zz` | Short and long timezone names (English) |

Several plugins can be combined: `{ plugins: [ordinal, zonename] }`.

## A one-off token

For a single custom token, pass an object literal instead of a module. Annotate it with `FormatterPluginObject` (for `format`) or `ParserPluginObject` (for `parse`, `preparse`, `isValid`) from `date-and-time/plugin`; a key that collides with a built-in token such as `YYYY` is then a compile-time error.

```typescript
import { format } from 'date-and-time';
import type { DateLike, FormatterPluginObject } from 'date-and-time/plugin';

const quarter: FormatterPluginObject = {
  Q: (d: DateLike) => String((d.getMonth() / 3 | 0) + 1)
};

format(new Date(2025, 3, 1), 'YYYY [Q]Q', { plugins: [quarter] });   // 2025 Q2
```

A parser token can only fill a date component the built-in parser already reads: `Y`, `M`, `D`, `H`, `A`, `h`, `m`, `s`, `S`, or `Z`. It receives the remaining input and returns the value, the length it consumed, and the component. The `exec` helper builds that result from a regular expression:

```typescript
import { parse } from 'date-and-time';
import { exec } from 'date-and-time/plugin';
import type { ParserPluginObject } from 'date-and-time/plugin';

const ordinal: ParserPluginObject = {
  DDD: (str: string) => {
    const result = exec(/^\d\d?(?=st|nd|rd|th)/, str, 'D');

    if (result.length > 0) {
      result.length += 2;   // consume the two-letter suffix as well
    }
    return result;
  }
};

parse('August 23rd, 2025', 'MMMM DDD, YYYY', { plugins: [ordinal] });
```

A result with `length` 0 means "no match" and parsing stops. A result without a component only consumes text (this is how `day-of-week` skips a weekday name).

Custom plugins are searched before the built-in tokens. An object that is not annotated with `FormatterPluginObject` or `ParserPluginObject` is not checked, so reusing a key such as `YYYY` there silently overrides the built-in token. Always annotate.
