# Locales, plugins, and extend

## Locale

In v3 the locale was global: `date.locale(ja)` switched it for every later call. In v4 it is an option on each call.

```javascript
// v3
import date from 'date-and-time';
import ja from 'date-and-time/locale/ja';

date.locale(ja);
date.format(now, 'YYYY年M月D日(ddd)');
```

```typescript
// v4
import { format } from 'date-and-time';
import ja from 'date-and-time/locales/ja';

format(now, 'YYYY年M月D日(ddd)', { locale: ja });
```

```javascript
// v4, CommonJS: require it and pass it directly
const { format } = require('date-and-time');
const ja = require('date-and-time/locales/ja');

format(now, 'YYYY年M月D日(ddd)', { locale: ja });
```

`date.locale()` with no argument (the getter) has no v4 equivalent.

### Keeping an application-wide default

If the application set a locale once at startup, do not edit every call site. Add one module that binds the locale and import `format` and `parse` from it:

```typescript
// src/lib/date.ts
import { format as baseFormat, parse as baseParse } from 'date-and-time';
import ja from 'date-and-time/locales/ja';

type FormatOptions = Parameters<typeof baseFormat>[2];
type ParseOptions = Parameters<typeof baseParse>[2];

export const format = (date: Date, pattern: string, options?: FormatOptions) =>
  baseFormat(date, pattern, { locale: ja, ...options });

export const parse = (text: string, pattern: string, options?: ParseOptions) =>
  baseParse(text, pattern, { locale: ja, ...options });
```

The same wrapper in plain CommonJS JavaScript:

```javascript
// lib/date.js
const { format: baseFormat, parse: baseParse } = require('date-and-time');
const ja = require('date-and-time/locales/ja');

const format = (date, pattern, options) => baseFormat(date, pattern, { locale: ja, ...options });
const parse = (text, pattern, options) => baseParse(text, pattern, { locale: ja, ...options });

module.exports = { format, parse };
```

Wrap `isValid`, `preparse`, and `transform` the same way if the project uses them with a locale.

### Renamed and removed locale codes

Code names that are not listed here are unchanged. Text still changed; see "Output differences".

| v3 import | v4 import | Note |
|-----------|-----------|------|
| `date-and-time/locale/dk` | `date-and-time/locales/da` | Danish |
| `date-and-time/locale/pt` | `date-and-time/locales/pt-BR` or `date-and-time/locales/pt-PT` | Ask the user which one; neither reproduces the v3 text |
| `date-and-time/locale/sr` | `date-and-time/locales/sr-Latn` | v3 `sr` was Latin script; `sr-Cyrl` is the Cyrillic one |
| `date-and-time/locale/uz` | `date-and-time/locales/uz-Cyrl` | v3 `uz` was Cyrillic script; `uz-Latn` is the Latin one |
| `date-and-time/locale/zh-cn` | `date-and-time/locales/zh-Hans` | Simplified Chinese |
| `date-and-time/locale/zh-tw` | `date-and-time/locales/zh-Hant` | Traditional Chinese |
| `date-and-time/locale/jv` | none | Javanese has no 4.x locale. Tell the user; do not substitute another language. |
| `date-and-time/locale/pa-in` | none | Punjabi has no 4.x locale. Tell the user; do not substitute another language. |

v4 also added `fi`, `he`, `ms`, `no`, and `ta`.

The v3 string form `date.locale('zh-cn')` used in browser-global builds does not exist either; import the module.

### Output differences

Locale data was regenerated for v4, so text changed even where the code name did not. Compared with the final v3 release:

| Locale | Token | v3 | v4 |
|--------|-------|----|----|
| `ja` | `MMMM`, `MMM` | `8月` | `8` |
| `fr` | `A` | `matin`, `l'après-midi` | `AM`, `PM` |
| `de` | `MMM` | `Mrz.` | `März` |
| `pt` to `pt-BR` | `MMMM` | `Janeiro` | `janeiro` |
| `pt` to `pt-BR` | `A` | `da madrugada`, `da manhã`, `da tarde`, `da noite` | `AM`, `PM` |

In a field-by-field comparison of `MMMM`, `MMM`, `dddd`, `ddd`, `dd`, and `A` against the final v3 release, nearly every locale whose code did not change still differed (only `ko` matched; `en` was not compared). Assume any locale-formatted string can change, and check each one.

## Plugins

In v3, `date.plugin(x)` changed the library globally. In v4 each call receives the plugins it needs, and a plugin module exports `formatter`, `parser`, or both.

| v3 plugin | v4 |
|-----------|----|
| `day-of-week` | `import { parser } from 'date-and-time/plugins/day-of-week'` |
| `meridiem` | Integrated: `AA`, `a`, `aa` are core tokens. Delete the plugin call. |
| `microsecond` | `import { parser } from 'date-and-time/plugins/microsecond'` |
| `ordinal` | `import { formatter, parser } from 'date-and-time/plugins/ordinal'` |
| `timespan` | Integrated into `subtract` (see [api-mapping.md](api-mapping.md)) |
| `timezone` | Integrated as the `timeZone` option. Its `z` and `zz` tokens are now `import { formatter } from 'date-and-time/plugins/zonename'` |
| `two-digit-year` | `import { parser } from 'date-and-time/plugins/two-digit-year'` |

```javascript
// v3: one call, affects both format and parse
date.plugin(require('date-and-time/plugin/ordinal'));
```

```typescript
// v4: pick the side per call
import { format, parse } from 'date-and-time';
import { formatter as ordinalFormatter, parser as ordinalParser } from 'date-and-time/plugins/ordinal';

format(now, 'MMMM DDD, YYYY', { plugins: [ordinalFormatter] });
parse('August 23rd, 2025', 'MMMM DDD, YYYY', { plugins: [ordinalParser] });
```

The `timezone` plugin's other functions map as shown in [api-mapping.md](api-mapping.md): `formatTZ`, `parseTZ`, `transformTZ`, `addYearsTZ`, `addMonthsTZ`, and `addDaysTZ` are all replaced by the `timeZone` option or argument.

Plugins that a v3 project registered once and used everywhere can be gathered into a shared array (`const plugins = [ordinalFormatter, zonename]`) or into the wrapper module above.

## extend

`date.extend({ formatter: { ... } })` becomes a plain object passed in `plugins`. Annotate it with `FormatterPluginObject` so a key that collides with a built-in token is a compile-time error.

```javascript
// v3
date.extend({
  formatter: {
    Q: function (d) { return String(Math.floor(d.getMonth() / 3) + 1); }
  }
});
date.format(new Date(), 'YYYY [Q]Q');
```

```typescript
// v4
import { format } from 'date-and-time';
import type { DateLike, FormatterPluginObject } from 'date-and-time/plugin';

const quarter: FormatterPluginObject = {
  Q: (d: DateLike) => String((d.getMonth() / 3 | 0) + 1)
};

format(new Date(), 'YYYY [Q]Q', { plugins: [quarter] });
```

v3's `extend` silently ignored a key that collided with a built-in token. In v4, custom plugins are searched before the built-in tokens, so an object that is not annotated with `FormatterPluginObject` (or `ParserPluginObject`) and reuses a key such as `YYYY` silently overrides the built-in token. Always annotate.

Only `extend({ formatter })` has a mechanical replacement. For `extend({ parser })`, `extend({ res })`, and `extend({ extender })`: a v4 parser token can only fill a date component the built-in parser already reads (`Y`, `M`, `D`, `H`, `A`, `h`, `m`, `s`, `S`, `Z`), and there is no `res` or `extender`. Do not guess; show the user the v3 code and the plugin guide (https://knowledgecode.github.io/date-and-time/plugins/) and decide together.
