# Migration Guide

Version `4.x` has been completely rewritten in TypeScript and some features from `3.x` are no longer compatible. This section explains the changes to each feature and the migration methods.

## Install

Version `4.x` adopts a modern development style and no longer supports older browsers. Module imports are only supported in `ESModules` or `CommonJS` style. Additionally, since functions can now be imported directly, there is a higher possibility of reducing the final module size through bundler tree shaking.

- ESModules:

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

## API

### format

The third argument has been changed from `boolean` to `FormatterOptions`. With `FormatterOptions`, you can now specify timezone and locale settings. If you previously set the third argument to `true` to output in UTC timezone, you can achieve the same output as follows:

```typescript
import { format } from 'date-and-time';

format(new Date(), 'ddd, MMM DD YYYY hh:mm A [GMT]Z', { timeZone: 'UTC' });
// => Fri, Jan 02 2015 07:14 AM GMT+0000
```

Additionally, since the `timezone` plugin has been integrated into the main library, the `formatTZ` function is now obsolete. Timezones are now imported as modules rather than using `IANA time zone names` (except for UTC timezone).

```typescript
import { format } from 'date-and-time';
import New_York from 'date-and-time/timezones/America/New_York';

format(now, 'dddd, MMMM D, YYYY [at] H:mm:ss.SSS [GMT]ZZ', { timeZone: New_York });
// => Wednesday, July 23, 2025 at 3:28:27.443 GMT-04:00
```

### parse

The third argument has been changed from `boolean` to `ParserOptions`. With `ParserOptions`, you can now specify timezone and locale settings. If you previously set the third argument to `true` to parse input in UTC timezone, you can achieve the same output as follows:

```typescript
import { parse } from 'date-and-time';

parse('11:14:05 PM', 'h:mm:ss A', { timeZone: 'UTC' });
// => Jan 02 1970 23:14:05 GMT+0000
```

Additionally, since the `timezone` plugin has been integrated into the main library, the `parseTZ` function is now obsolete. Timezones are now imported as modules rather than using `IANA time zone names` (except for UTC timezone).

```typescript
import { parse } from 'date-and-time';
import Paris from 'date-and-time/timezones/Europe/Paris';
import fr from 'date-and-time/locales/fr';

parse(
  '02 janv. 2015, 11:14:05 PM', 'DD MMM YYYY, h:mm:ss A',
  { timeZone: Paris, locale: fr }
);
// => Jan 02 2015 23:14:05 GMT+0100
```

### preparse

The third argument has been changed from `boolean` to `ParserOptions`. With `ParserOptions`, you can now specify timezone and locale settings. If you previously set the third argument to `true` to parse input in UTC timezone, you can achieve the same output as follows:

```typescript
import { preparse } from 'date-and-time';

preparse('11:14:05 PM', 'h:mm:ss A', { timeZone: 'UTC' });

{
  A: 1,
  h: 11,
  m: 14,
  s: 5,
  _index: 11,
  _length: 11,
  _match: 4
}
```

Additionally, the `PreparseResult` object returned by the `preparse` function has the following changes:

- Properties for tokens that were not read are not included. For example, in the code example above, since the string does not contain a date part, properties representing dates such as `Y`, `M`, and `D` are not included.
- Read values are returned as-is. For example, previously, time read in 12-hour format was converted to 24-hour format, but this is no longer done.

### isValid

The following usage that takes `PreparseResult` as an argument is now obsolete.

```typescript
import { isValid, preparse } from 'date-and-time';

const pr = preparse('11:14:05 PM', 'h:mm:ss A');

// This usage is no longer supported
isValid(pr);
```

Other changes are the same as for the `parse` function.

### transform

The fourth argument has been changed from `boolean` to `FormatterOptions`. With `FormatterOptions`, you can now specify timezone and locale settings. Additionally, `ParserOptions` has been added as a parameter before `FormatterOptions`. Since the `timezone` plugin has been integrated into the main library, the `transformTZ` function is now obsolete.

```typescript
import { transform } from 'date-and-time';
import New_York from 'date-and-time/timezones/America/New_York';
import Los_Angeles from 'date-and-time/timezones/America/Los_Angeles';

// Convert 24-hour format to 12-hour format
transform('13:05', 'HH:mm', 'hh:mm A', { timeZone: 'UTC' }, { timeZone: 'UTC' });
// => 01:05 PM

// Convert East Coast time to West Coast time
transform(
  '3/8/2020 1:05 PM', 'D/M/YYYY h:mm A', 'D/M/YYYY h:mm A',
  { timeZone: New_York }, { timeZone: Los_Angeles }
);
// => 3/8/2020 10:05 AM
```

### addYears

The third argument has been changed from `boolean` to `TimeZone | UTC`. If you previously set the third argument to `true` to calculate in UTC timezone, you can achieve the same output as follows:

```typescript
import { addYears } from 'date-and-time';

const now = new Date(Date.UTC(2024, 2, 11, 1));
// => Mar 11 2024 01:00:00 GMT+0000

addYears(now, 1, 'UTC');
// => Mar 11 2025 01:00:00 GMT+0000
```

Additionally, since the `timezone` plugin has been integrated into the main library, the `addYearsTZ` function is now obsolete. Timezones are now imported as modules rather than using `IANA time zone names` (except for UTC timezone).

```typescript
import Los_Angeles from 'date-and-time/timezones/America/Los_Angeles';

const now = new Date(2024, 2, 11, 1);
// => Mar 11 2024 01:00:00 GMT-07:00

addYears(now, 1, Los_Angeles);
// => Mar 11 2025 01:00:00 GMT-07:00
```

### addMonths

The changes are the same as for the `addYears` function.

### addDays

The changes are the same as for the `addYears` function.

### subtract

The calculation order has been reversed. Previously, the second argument was subtracted from the first argument, but now the first argument is subtracted from the second argument.
Additionally, the return value object has been changed to `Duration`. You can achieve the same output as before as follows:

```typescript
import { subtract } from 'date-and-time';

const yesterday = new Date(2015, 0, 1);
const today = new Date(2015, 0, 2);

subtract(yesterday, today).toDays().value;         // => 1
subtract(yesterday, today).toHours().value;        // => 24
subtract(yesterday, today).toMinutes().value;      // => 1440
subtract(yesterday, today).toSeconds().value;      // => 86400
subtract(yesterday, today).toMilliseconds().value; // => 86400000
```

### timeSpan

The `timespan` plugin is now obsolete as it has been integrated into the main library's `subtract` function. Please note that the argument order of the `subtract` function has changed. You can achieve the same output as before as follows:

```typescript
import { subtract } from 'date-and-time';

const new_years_day = new Date(2020, 0, 1);
const now = new Date(2020, 2, 5, 1, 2, 3, 4);

subtract(new_years_day, now).toDays().format('D HH:mm:ss.SSS');
// => 64 01:02:03.004

subtract(new_years_day, now).toHours().format('H [hours] m [minutes] s [seconds]');
// => 1537 hours 2 minutes 3 seconds

subtract(new_years_day, now).toMinutes().format('mmmmmmmmmm [minutes]');
// => 0000092222 minutes
```

## Locale

The method for switching locales has changed. Previously, the locale used throughout the library was switched, but now it is specified as a function argument. Below is a code example for the `format` function.

```typescript
import { format } from 'date-and-time';
import es from 'date-and-time/locales/es';

format(new Date(), 'dddd, D [de] MMMM [de] YYYY, h:mm aa [GMT]ZZ', { locale: es });
// => miércoles, 23 de julio de 2025, 12:38 a.m. GMT-07:00
```

## Plugins

The following plugins are now obsolete as they have been integrated into the main library:

- `meridiem`
- `timespan`
- `timezone`
