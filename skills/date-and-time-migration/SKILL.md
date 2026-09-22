---
name: date-and-time-migration
description: Migrate a JavaScript or TypeScript project from date-and-time v3 to v4 (npm package date-and-time). Use when a codebase uses v3 APIs such as the default export, date.locale, date.plugin, date.extend, formatTZ, parseTZ, timeSpan, or a boolean UTC argument, or when the user asks to upgrade date-and-time to v4. For writing new v4 code, use the date-and-time skill instead.
---

# Migrating date-and-time from v3 to v4

v4 is a TypeScript rewrite, not a drop-in upgrade. There is no default export and no global state: locale, plugins, and timezone are passed per call. Targets 4.x. Official guide: https://github.com/knowledgecode/date-and-time/blob/master/docs/migration.md

How to migrate is the user's choice, so confirm it before editing (see "Decisions to confirm" in step 1). Unless the user says otherwise, keep the project's language and module system: a JavaScript project stays JavaScript and a CommonJS project stays CommonJS, because v4 works with both `require` and `import`.

## Workflow

Copy this checklist and tick each item as you finish it:

```
- [ ] 1. Inventory v3 usage, tell the user its scope, and confirm the approach
- [ ] 2. Upgrade the package
- [ ] 3. Rewrite imports
- [ ] 4. Rewrite calls (references/api-mapping.md)
- [ ] 5. Replace locale, plugin, and extend usage (references/locales-and-plugins.md)
- [ ] 6. Run the tests and the checks for your language until they are clean
- [ ] 7. Re-scan for leftovers and for silent behavior changes
```

### 1. Inventory

Use `git grep` from the project root (it skips `node_modules` and ignored files). Outside a git repository, use `grep -rnE ... --exclude-dir=node_modules` with the same patterns. Keep the single quotes.

```shell
# A. Every file that uses the library
git grep -nE 'date-and-time' -- '*.js' '*.jsx' '*.mjs' '*.cjs' '*.ts' '*.tsx' '*.vue'

# B. v3 import paths and builds (locale/ and plugin/ are now locales/ and plugins/; the UMD and esm/ builds are gone)
git grep -nE 'date-and-time/(locale|plugin)/|date-and-time(\.es)?(\.min)?\.js|esm/date-and-time' -- '*.js' '*.jsx' '*.mjs' '*.cjs' '*.ts' '*.tsx' '*.vue' '*.html'

# C. v3-only APIs (only hits in files from A count, because other libraries also have .plugin() and .locale() calls)
git grep -nE '(formatTZ|parseTZ|transformTZ|addYearsTZ|addMonthsTZ|addDaysTZ|timeSpan)|\.(locale|extend|plugin)\(' -- '*.js' '*.jsx' '*.mjs' '*.cjs' '*.ts' '*.tsx' '*.vue'

# D. Boolean UTC argument (a heuristic: calls split over several lines are missed)
git grep -nE '(format|parse|preparse|isValid|transform|addYears|addMonths|addDays)\(.*true\)' -- '*.js' '*.jsx' '*.mjs' '*.cjs' '*.ts' '*.tsx' '*.vue'

# E. subtract calls, whose meaning changed
git grep -nE 'subtract\(' -- '*.js' '*.jsx' '*.mjs' '*.cjs' '*.ts' '*.tsx' '*.vue'
```

Before editing, tell the user how many files and call sites each category found, then confirm the decisions below. Ask them together, and state the default you will use for anything the user leaves open. Use a question tool if your environment has one; otherwise ask in plain text.

**Decisions to confirm**

| Decision | Default if the user has no preference |
|----------|---------------------------------------|
| Language and module system: stay as they are, or convert (JavaScript to TypeScript, CommonJS to ES modules) | Stay as they are |
| Import style: named imports, or `import * as date from 'date-and-time'` for a minimal diff | Named imports |
| Locale: pass `{ locale }` at every call, or one wrapper module that binds it (only when the code called `date.locale(...)` at startup) | One wrapper module |
| Verification: run the one-off TypeScript checker on JavaScript files (step 6; it may download TypeScript) | Ask before running it; always run the project's tests |
| Locale codes without a one-to-one replacement (`pt`, `jv`, `pa-in`; see [references/locales-and-plugins.md](references/locales-and-plugins.md)) | Ask; never substitute silently |

### 2. Upgrade

```shell
npm install date-and-time@4
```

Use the project's package manager if it is not npm. Compare the project's Node.js version with the package's `engines` field, and remember that v4 targets ES2021: it does not support older browsers.

The v3 type declarations are replaced by the v4 ones. A TypeScript project therefore starts reporting removed APIs, but a plain JavaScript project gets no errors at all, so it relies on the grep inventory (step 1), the checker in step 6, and the tests.

### 3. Imports

| v3 | v4 |
|----|----|
| `import date from 'date-and-time'`, then `date.format(...)` | `import { format } from 'date-and-time'`, then `format(...)`. For a minimal diff, `import * as date from 'date-and-time'` keeps `date.format(...)` working. |
| `const date = require('date-and-time')` | `const { format } = require('date-and-time')`. The v4 CommonJS module has the same named exports, so `date.format(...)` keeps working for functions that still exist. |
| `import ja from 'date-and-time/locale/ja'` | `import ja from 'date-and-time/locales/ja'` (plural), passed per call as `{ locale: ja }`. Some codes were renamed; see [references/locales-and-plugins.md](references/locales-and-plugins.md). |
| `require('date-and-time/locale/ja')` | `const ja = require('date-and-time/locales/ja')`, passed directly. |
| `import ordinal from 'date-and-time/plugin/ordinal'` | `import { formatter, parser } from 'date-and-time/plugins/ordinal'` (plural), passed per call in `plugins` |
| `require('date-and-time/plugin/ordinal')` | `const ordinal = require('date-and-time/plugins/ordinal')`, then `{ plugins: [ordinal.formatter] }` or `[ordinal.parser]` |
| `date-and-time.min.js` with the global `date`, or `esm/date-and-time.es.js` | There is no global or UMD build. Use ES modules: `import { format } from 'https://cdn.jsdelivr.net/npm/date-and-time/dist/index.js'` inside `<script type="module">` |

`esModuleInterop` and `allowSyntheticDefaultImports`, which the v3 README asked TypeScript users to enable, are no longer needed for this library.

### 4. Calls

The common cases are below. Read [references/api-mapping.md](references/api-mapping.md) for every function, with before and after code.

| v3 | v4 |
|----|----|
| `date.format(d, fmt, true)` | `format(d, fmt, { timeZone: 'UTC' })` |
| `date.parse(s, fmt, true)` | `parse(s, fmt, { timeZone: 'UTC' })` |
| `date.formatTZ(d, fmt, 'Asia/Tokyo')` | `format(d, fmt, { timeZone: 'Asia/Tokyo' })` |
| `date.parseTZ(s, fmt, 'Asia/Tokyo')` | `parse(s, fmt, { timeZone: 'Asia/Tokyo' })` |
| `date.transform(s, f1, f2, true)` | `transform(s, f1, f2, undefined, { timeZone: 'UTC' })` |
| `date.addYears(d, n, true)` and `date.addDaysTZ(d, n, tz)` | `addYears(d, n, 'UTC')` and `addDays(d, n, tz)` |
| `date.subtract(a, b).toDays()` | `subtract(b, a).toDays().value` (arguments reversed, result is an object) |
| `date.timeSpan(a, b).toDays(fmt)` | `subtract(b, a).toDays().format(fmt)` |
| `date.isValid(date.preparse(s, fmt))` | `isValid(s, fmt)` |
| `date.addHours` `addMinutes` `addSeconds` `addMilliseconds`, `isLeapYear`, `isSameDay`, `compile` | unchanged apart from the import |

### 5. Locale, plugin, extend

Read [references/locales-and-plugins.md](references/locales-and-plugins.md). It has the locale rename table, the plugin table, how to replace `date.extend`, and a wrapper that restores an application-wide default locale.

### 6. Check your work

Run the project's tests (`npm test` or its equivalent), then the checks for your language. Fix, and repeat until everything is clean.

If a snapshot or string-comparison test now fails on locale-formatted text, do not blindly update it: locale text changed between v3 and v4. Show the user the old and new strings and ask before accepting them.

**TypeScript projects**

```shell
npx tsc --noEmit
```

**JavaScript projects.** Tests only cover the code that runs, and a removed v3 function fails only when its line executes, so a code path the tests never reach stays broken. With the user's agreement (it may download TypeScript), use the TypeScript compiler as a one-off checker. It reads the type declarations that ship with date-and-time and reports v3 leftovers in `.js` files without changing the project. Write a throwaway config that lists the files from inventory A, run it, and delete it (TypeScript 5 or later; `npx -p typescript` fetches one if the project has none). A config file, rather than files on the command line, keeps this working in projects that already have their own `tsconfig.json`, which newer TypeScript versions refuse to combine with command-line files:

```shell
cat > tsconfig.date-and-time-check.json <<'EOF'
{
  "compilerOptions": {
    "noEmit": true,
    "allowJs": true,
    "checkJs": true,
    "skipLibCheck": true,
    "target": "es2021",
    "module": "esnext",
    "moduleResolution": "bundler"
  },
  "files": ["src/example-a.js", "src/example-b.js"]
}
EOF
npx -p typescript tsc -p tsconfig.date-and-time-check.json
rm tsconfig.date-and-time-check.json
```

Replace the two example paths in `files` with the files from inventory A.

Each error on a line that calls date-and-time is a worklist item: a removed API (`Property 'locale' does not exist`), an old module path (`Cannot find module`), a boolean UTC flag (`Type 'true' has no properties in common with type 'FormatterOptions'`, or `Argument of type 'true' is not assignable`), or a `subtract` result used as a number (`The left-hand side of an arithmetic operation must be of type 'any', 'number', ...`). Ignore errors on unrelated lines. If the project has many, run the same command before step 2 and compare.

One thing the checker misses: a leftover `import date from 'date-and-time'` is not reported, yet fails at runtime under native ESM with `does not provide an export named 'default'`. Inventory pattern A finds it.

If the compiler cannot be run, or the user declines it, rely on inventory patterns B to E and the tests, and tell the user that removed-API calls on paths the tests do not execute were not checked.

### 7. Re-scan

Run inventory patterns B, C, and D again. B and C must return nothing in files that use date-and-time. D must return nothing, or only calls you checked by hand. Then go through "Silent breakages" below once more, call site by call site: several of them raise no error in any language.

## Silent breakages

What raises an error, and where. "Checker" means `tsc` on a TypeScript project, or the `--checkJs` command from step 6 on a JavaScript project.

| Breakage | Checker | Plain JavaScript at runtime |
|----------|---------|-----------------------------|
| Boolean UTC flag on `format`, `parse`, `preparse`, `isValid`, `transform` | error | no error: the result is in local time |
| Boolean UTC flag on `addYears`, `addMonths`, `addDays` | error | `RangeError: Invalid time zone specified: true` |
| Removed APIs (`date.locale`, `date.plugin`, `date.extend`, `formatTZ`, ...) | error | `TypeError`, only when that line runs |
| Old module paths (`locale/`, `plugin/`) | error | throws when the module loads |
| `subtract` result used as a number | error | `NaN`, or `[object Object]` inside a string |
| `subtract` arguments not swapped | not caught | the sign of the result flips |
| `import date from 'date-and-time'` | often not caught | `SyntaxError` under native ESM |
| `z` / `zz` without the `zonename` plugin | not caught | printed literally (`23:30 z`) |
| Locale no longer passed per call after `date.locale(...)` is removed | not caught | output falls back to English |
| Locale text changed, `preparse` result shape changed | not caught | different text or fields |

Details:

- **Boolean UTC flag.** In v4, passing `true` as the last argument of `format`, `parse`, `preparse`, `isValid`, or `transform` is read as "no options": the result is in local time. Verified: `format(d, 'HH:mm', true)` under `TZ=Asia/Tokyo` returns `23:30`, not the UTC `14:30`. The `addYears`, `addMonths`, and `addDays` functions throw `RangeError: Invalid time zone specified: true` instead. TypeScript rejects all of them; JavaScript accepts all but the adders. Search pattern D exists for this.
- **`subtract` reversed.** v3 `subtract(a, b)` was `a - b`; v4 `subtract(from, to)` is `to - from`. The result is now an object, so `subtract(a, b).toDays() * 2` is `NaN` in JavaScript and a template literal prints `[object Object]`.
- **`z` and `zz` print literally.** The v3 `timezone` plugin provided them. In v4 they need the `zonename` plugin; without it `format(d, 'HH:mm z')` returns `23:30 z`.
- **The global locale is gone.** A v3 startup call such as `date.locale(ja)` no longer exists, so every call formats in English until `{ locale }` is passed. Use the wrapper in [references/locales-and-plugins.md](references/locales-and-plugins.md) rather than editing every call.
- **Locale text differs.** Even for locale codes that kept their name, month names, weekday names, and AM/PM text changed: `ja` `MMMM` was `8月` and is `8`; `fr` `A` was `matin` / `l'après-midi` and is `AM` / `PM`. Check every format string that uses a locale.
- **`preparse` returns a different shape.** Only the tokens that were read are present, and values are no longer normalized (a 12-hour `h` stays 12-hour). Any code that reads its fields needs review.
- **Removed:** `date.locale`, `date.plugin`, `date.extend`, the `meridiem`, `timespan`, and `timezone` plugins, `isValid(preparseResult)`, and the browser-global build.
