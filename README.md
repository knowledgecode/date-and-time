# date-and-time

[![Circle CI](https://circleci.com/gh/knowledgecode/date-and-time.svg?style=shield)](https://circleci.com/gh/knowledgecode/date-and-time)  

This JS library is just a collection of functions for manipulating date and time. It's small, simple, and easy to learn.

## Why

Nowadays, JS modules have become huge, complex, and have many dependencies. We think it makes sense to try to keep each module simple and small. Especially for modules that are at the bottom of the dependency chain, such as those dealing with date and time.

## Features

- Minimalist. Approximately 2k. (minified and gzipped)
- Extensible. Plugin system support.
- Multi language support.
- Universal / Isomorphic. Works wherever.
- Older browser support. Even works on IE6. :)

## Install

```shell
npm i date-and-time
```

## Recent Changes

- 2.1.2
  - Fixed an issue that the lib's validation logic would condider an error when a timezone offset value of a datetime string was greater then +12 hours.

- 2.1.1
  - Updated dev dependencies to resolve vulnerability.

- 2.1.0
  - Fixed an issue that the lib's functions assigned to variables using ES6 destructuring assignment cause an error.

  ```javascript
  // Destructuring assignment
  const { format, parse } = require('date-and-time');

  // These used to be errors in 2.0.x.
  format(new Date(), 'MMM DD YYYY');
  parse('Jan 11 2022', 'MMM DD YYYY');
  ```

  - Added Swedish support.

## Usage

- ES Modules:

```javascript
import date from 'date-and-time';
```

- CommonJS:

```javascript
const date = require('date-and-time');
```

- ES Modules for the browser:

```html
<script type="module">
import date from '/path/to/date-and-time.es.min.js';
</script>
```

- Older browser:

```html
<script src="/path/to/date-and-time.min.js"></script>
```

### Note

- If you want to use ES Modules in Node.js without a transpiler, you need to add `"type": "module"` in your `package.json` or change your file extension from `.js` to `.mjs`.

## API

- [format](#formatdateobj-arg-utc)
  - Formatting a Date and Time (Date -> String)

- [parse](#parsedatestring-arg-utc)
  - Parsing a Date and Time string (String -> Date)

- [compile](#compileformatstring)
  - Compiling a format string

- [preparse](#preparsedatestring-arg)
  - Pre-parsing a Date and Time string

- [isValid](#isvalidarg1-arg2)
  - Validation

- [transform](#transformdatestring-arg1-arg2-utc)
  - Transforming a Date and Time string (String -> String)

- [addYears](#addyearsdateobj-years)
  - Adding years

- [addMonths](#addmonthsdateobj-months)
  - Adding months

- [addDays](#adddaysdateobj-days)
  - Adding days

- [addHours](#addhoursdateobj-hours)
  - Adding hours

- [addMinutes](#addminutesdateobj-minutes)
  - Adding minutes

- [addSeconds](#addsecondsdateobj-seconds)
  - Adding seconds

- [addMilliseconds](#addmillisecondsdateobj-milliseconds)
  - Adding milliseconds

- [subtract](#subtractdate1-date2)
  - Subtracting two dates

- [isLeapYear](#isleapyeary)
  - Whether year is leap year

- [isSameDay](#issamedaydate1-date2)
  - Comparison of two dates

- [locale](#localecode-locale)
  - Changing the locale or defining new locales

- [extend](#extendextension)
  - Feature extension

- [plugin](#pluginname-plugin)
  - Importing or defining plugins

### format(dateObj, arg[, utc])

- @param {**Date**} dateObj - a Date object
- @param {**string|Array.\<string\>**} arg - a format string or its compiled object
- @param {**boolean**} [utc] - output as UTC
- @returns {**string**} a formatted string

```javascript
const now = new Date();
date.format(now, 'YYYY/MM/DD HH:mm:ss');    // => '2015/01/02 23:14:05'
date.format(now, 'ddd, MMM DD YYYY');       // => 'Fri, Jan 02 2015'
date.format(now, 'hh:mm A [GMT]Z');         // => '11:14 PM GMT-0800'
date.format(now, 'hh:mm A [GMT]Z', true);   // => '07:14 AM GMT+0000'

const pattern = date.compile('ddd, MMM DD YYYY');
date.format(now, pattern);                  // => 'Fri, Jan 02 2015'
```

Available tokens and their meanings are as follows:

| token | meaning                              | examples of output |
|:------|:-------------------------------------|:-------------------|
| YYYY  | four-digit year                      | 0999, 2015         |
| YY    | two-digit year                       | 99, 01, 15         |
| Y     | four-digit year without zero-padding | 2, 44, 888, 2015   |
| MMMM  | month name (long)                    | January, December  |
| MMM   | month name (short)                   | Jan, Dec           |
| MM    | month with zero-padding              | 01, 12             |
| M     | month                                | 1, 12              |
| DD    | date with zero-padding               | 02, 31             |
| D     | date                                 | 2, 31              |
| dddd  | day of week (long)                   | Friday, Sunday     |
| ddd   | day of week (short)                  | Fri, Sun           |
| dd    | day of week (very short)             | Fr, Su             |
| HH    | 24-hour with zero-padding            | 23, 08             |
| H     | 24-hour                              | 23, 8              |
| hh    | 12-hour with zero-padding            | 11, 08             |
| h     | 12-hour                              | 11, 8              |
| A     | meridiem (uppercase)                 | AM, PM             |
| mm    | minute with zero-padding             | 14, 07             |
| m     | minute                               | 14, 7              |
| ss    | second with zero-padding             | 05, 10             |
| s     | second                               | 5, 10              |
| SSS   | millisecond (high accuracy)          | 753, 022           |
| SS    | millisecond (middle accuracy)        | 75, 02             |
| S     | millisecond (low accuracy)           | 7, 0               |
| Z     | timezone offset                      | +0100, -0800       |

You can also use the following tokens by importing plugins. See [PLUGINS.md](./PLUGINS.md) for details.

| token | meaning                              | examples of output |
|:------|:-------------------------------------|:-------------------|
| DDD   | ordinal notation of date             | 1st, 2nd, 3rd      |
| AA    | meridiem (uppercase with ellipsis)   | A.M., P.M.         |
| a     | meridiem (lowercase)                 | am, pm             |
| aa    | meridiem (lowercase with ellipsis)   | a.m., p.m.         |

#### Note 1. Comments

String in parenthese `[...]` in the `formatString` will be ignored as comments:

```javascript
date.format(new Date(), 'DD-[MM]-YYYY');    // => '02-MM-2015'
date.format(new Date(), '[DD-[MM]-YYYY]');  // => 'DD-[MM]-YYYY'
```

#### Note 2. Output as UTC

This function usually outputs a local date-time string. Set to true the `utc` option (the 3rd parameter) if you would like to get a UTC date-time string.

```javascript
date.format(new Date(), 'hh:mm A [GMT]Z');          // => '11:14 PM GMT-0800'
date.format(new Date(), 'hh:mm A [GMT]Z', true);    // => '07:14 AM GMT+0000'
```

#### Note 3. More Tokens

You can also define your own tokens. See [EXTEND.md](./EXTEND.md) for details.

### parse(dateString, arg[, utc])

- @param {**string**} dateString - a date string
- @param {**string|Array.\<string\>**} arg - a format string or its compiled object
- @param {**boolean**} [utc] - input as UTC
- @returns {**Date**} a constructed date

```javascript
date.parse('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss');   // => Jan 2 2015 23:14:05 GMT-0800
date.parse('02-01-2015', 'DD-MM-YYYY');                     // => Jan 2 2015 00:00:00 GMT-0800
date.parse('11:14:05 PM', 'hh:mm:ss A');                    // => Jan 1 1970 23:14:05 GMT-0800
date.parse('11:14:05 PM', 'hh:mm:ss A', true);              // => Jan 1 1970 23:14:05 GMT+0000 (Jan 1 1970 15:14:05 GMT-0800)
date.parse('23:14:05 GMT+0900', 'HH:mm:ss [GMT]Z');         // => Jan 1 1970 23:14:05 GMT+0900 (Jan 1 1970 06:14:05 GMT-0800)
date.parse('Jam 1 2017', 'MMM D YYYY');                     // => Invalid Date
date.parse('Feb 29 2017', 'MMM D YYYY');                    // => Invalid Date
```

Available tokens and their meanings are as follows:

| token  | meaning                              | examples of acceptable form |
|:-------|:-------------------------------------|:----------------------------|
| YYYY   | four-digit year                      | 0999, 2015                  |
| Y      | four-digit year without zero-padding | 2, 44, 88, 2015             |
| MMMM   | month name (long)                    | January, December           |
| MMM    | month name (short)                   | Jan, Dec                    |
| MM     | month with zero-padding              | 01, 12                      |
| M      | month                                | 1, 12                       |
| DD     | date with zero-padding               | 02, 31                      |
| D      | date                                 | 2, 31                       |
| HH     | 24-hour with zero-padding            | 23, 08                      |
| H      | 24-hour                              | 23, 8                       |
| hh     | 12-hour with zero-padding            | 11, 08                      |
| h      | 12-hour                              | 11, 8                       |
| A      | meridiem (uppercase)                 | AM, PM                      |
| mm     | minute with zero-padding             | 14, 07                      |
| m      | minute                               | 14, 7                       |
| ss     | second with zero-padding             | 05, 10                      |
| s      | second                               | 5, 10                       |
| SSS    | millisecond (high accuracy)          | 753, 022                    |
| SS     | millisecond (middle accuracy)        | 75, 02                      |
| S      | millisecond (low accuracy)           | 7, 0                        |
| Z      | timezone offset                      | +0100, -0800                |

You can also use the following tokens by importing plugins. See [PLUGINS.md](./PLUGINS.md) for details.

| token  | meaning                              | examples of acceptable form |
|:-------|:-------------------------------------|:----------------------------|
| YY     | two-digit year                       | 90, 00, 08, 19              |
| AA     | meridiem (uppercase with ellipsis)   | A.M., P.M.                  |
| a      | meridiem (lowercase)                 | am, pm                      |
| aa     | meridiem (lowercase with ellipsis)   | a.m., p.m.                  |
| dddd   | day of week (long)                   | Friday, Sunday              |
| ddd    | day of week (short)                  | Fri, Sun                    |
| dd     | day of week (very short)             | Fr, Su                      |
| SSSSSS | microsecond (high accuracy)          | 123456, 000001              |
| SSSSS  | microsecond (middle accuracy)        | 12345, 00001                |
| SSSS   | microsecond (low accuracy)           | 1234, 0001                  |

#### Note 1. Invalid Date

If the function fails to parse, it will return `Invalid Date`. Notice that the `Invalid Date` is a Date object, not `NaN` or `null`. You can tell whether the Date object is invalid as follows:

```javascript
const today = date.parse('Jam 1 2017', 'MMM D YYYY');

if (isNaN(today)) {
    // Failure
}
```

#### Note 2. Input as UTC

This function usually assumes the `dateString` is a local date-time. Set to true the `utc` option (the 3rd parameter) if it is a UTC date-time.

```javascript
date.parse('11:14:05 PM', 'hh:mm:ss A');          // => Jan 1 1970 23:14:05 GMT-0800
date.parse('11:14:05 PM', 'hh:mm:ss A', true);    // => Jan 1 1970 23:14:05 GMT+0000 (Jan 1 1970 15:14:05 GMT-0800)
```

#### Note 3. Default Date Time

Default date is `January 1, 1970`, time is `00:00:00.000`. Values not passed will be complemented with them:

```javascript
date.parse('11:14:05 PM', 'hh:mm:ss A');    // => Jan 1 1970 23:14:05 GMT-0800
date.parse('Feb 2000', 'MMM YYYY');         // => Feb 1 2000 00:00:00 GMT-0800
```

#### Note 4. Max Date / Min Date

Parsable maximum date is `December 31, 9999`, minimum date is `January 1, 0001`.

```javascript
date.parse('Dec 31 9999', 'MMM D YYYY');    // => Dec 31 9999 00:00:00 GMT-0800
date.parse('Dec 31 10000', 'MMM D YYYY');   // => Invalid Date

date.parse('Jan 1 0001', 'MMM D YYYY');     // => Jan 1 0001 00:00:00 GMT-0800
date.parse('Jan 1 0000', 'MMM D YYYY');     // => Invalid Date
```

#### Note 5. 12-hour notation and Meridiem

If use `hh` or `h` (12-hour) token, use together `A` (meridiem) token to get the right value.

```javascript
date.parse('11:14:05', 'hh:mm:ss');         // => Jan 1 1970 11:14:05 GMT-0800
date.parse('11:14:05 PM', 'hh:mm:ss A');    // => Jan 1 1970 23:14:05 GMT-0800
```

#### Note 6. Token disablement

Use square brackets `[]` if a date-time string includes some token characters. Tokens inside square brackets in the `formatString` will be interpreted as normal characters:

```javascript
date.parse('12 hours 34 minutes', 'HH hours mm minutes');       // => Invalid Date
date.parse('12 hours 34 minutes', 'HH [hours] mm [minutes]');   // => Jan 1 1970 12:34:00 GMT-0800
```

#### Note 7. Wildcard

A white space works as a wildcard token. This token is not interpreted into anything. This means it can be ignored a specific variable string. For example, when you would like to ignore a time part from a date string, you can write as follows:

```javascript
// This will be an error.
date.parse('2015/01/02 11:14:05', 'YYYY/MM/DD');            // => Invalid Date
// Adjust the length of the format string by appending white spaces of the same length as a part to ignore to the end of it.
date.parse('2015/01/02 11:14:05', 'YYYY/MM/DD         ');   // => Jan 2 2015 00:00:00 GMT-0800
```

#### Note 8. Ellipsis

The parser supports `...` (ellipsis) token. The above example can be also written like this:

```javascript
date.parse('2015/01/02 11:14:05', 'YYYY/MM/DD...');   // => Jan 2 2015 00:00:00 GMT-0800
```

### compile(formatString)

- @param {**string**} formatString - a format string
- @returns {**Array.\<string\>**} a compiled object

If you are going to execute the `format()`, the `parse()` or the `isValid()` so many times with one string format, recommended to precompile and reuse it for performance.

```javascript
  const pattern = date.compile('MMM D YYYY h:m:s A');

  date.parse('Mar 22 2019 2:54:21 PM', pattern);
  date.parse('Jul 27 2019 4:15:24 AM', pattern);
  date.parse('Dec 25 2019 3:51:11 AM', pattern);

  date.format(new Date(), pattern); // => Mar 16 2020 6:24:56 PM
```

### preparse(dateString, arg)

- @param {**string**} dateString - a date string
- @param {**string|Array.\<string\>**} arg - a format string or its compiled object
- @returns {**Object**} a date structure

This function takes exactly the same parameters with the `parse()`, but returns a date structure as follows unlike that:

```javascript
date.preparse('Fri Jan 2015 02 23:14:05 GMT-0800', '    MMM YYYY DD HH:mm:ss [GMT]Z');

{
    Y: 2015,        // Year
    M: 1,           // Month
    D: 2,           // Day
    H: 23,          // 24-hour
    A: 0,           // Meridiem
    h: 0,           // 12-hour
    m: 14,          // Minute
    s: 5,           // Second
    S: 0,           // Millisecond
    Z: 480,         // Timsezone offset
    _index: 33,     // Pointer offset
    _length: 33,    // Length of the date string
    _match: 7       // Token matching count
}
```

This date structure provides a parsing result. You will be able to tell from it how the date string was parsed(, or why the parsing was failed).

### isValid(arg1[, arg2])

- @param {**Object|string**} arg1 - a date structure or a date string
- @param {**string|Array.\<string\>**} [arg2] - a format string or its compiled object
- @returns {**boolean**} whether the date string is a valid date

This function takes either exactly the same parameters with the `parse()` or a date structure which the `preparse()` returns, evaluates the validity of them.

```javascript
date.isValid('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss'); // => true
date.isValid('29-02-2015', 'DD-MM-YYYY');                   // => false
```

```javascript
const result = date.preparse('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss');
date.isValid(result);   // => true
```

### transform(dateString, arg1, arg2[, utc])

- @param {**string**} dateString - a date string
- @param {**string|Array.\<string\>**} arg1 - a format string or its compiled object
- @param {**string|Array.\<string\>**} arg2 - a transformed format string or its compiled object
- @param {**boolean**} [utc] - output as UTC
- @returns {**string**} a formatted string

This function transforms the format of a date string. The 2nd parameter, `arg1`, is the format string of it. Available token list is equal to the `parse()`'s. The 3rd parameter, `arg2`, is the transformed format string. Available token list is equal to the `format()`'s.

```javascript
// 3/8/2020 => 8/3/2020
date.transform('3/8/2020', 'D/M/YYYY', 'M/D/YYYY');

// 13:05 => 01:05 PM
date.transform('13:05', 'HH:mm', 'hh:mm A');
```

### addYears(dateObj, years)

- @param {**Date**} dateObj - a Date object
- @param {**number**} years - number of years to add
- @returns {**Date**} a date after adding the value

```javascript
const now = new Date();
const next_year = date.addYears(now, 1);
```

### addMonths(dateObj, months)

- @param {**Date**} dateObj - a Date object
- @param {**number**} months - number of months to add
- @returns {**Date**} a date after adding the value

```javascript
const now = new Date();
const next_month = date.addMonths(now, 1);
```

### addDays(dateObj, days)

- @param {**Date**} dateObj - a Date object
- @param {**number**} days - number of days to add
- @returns {**Date**} a date after adding the value

```javascript
const now = new Date();
const yesterday = date.addDays(now, -1);
```

### addHours(dateObj, hours)

- @param {**Date**} dateObj - a Date object
- @param {**number**} hours - number of hours to add
- @returns {**Date**} a date after adding the value

```javascript
const now = new Date();
const an_hour_ago = date.addHours(now, -1);
```

### addMinutes(dateObj, minutes)

- @param {**Date**} dateObj - a Date object
- @param {**number**} minutes - number of minutes to add
- @returns {**Date**} a date after adding the value

```javascript
const now = new Date();
const two_minutes_later = date.addMinutes(now, 2);
```

### addSeconds(dateObj, seconds)

- @param {**Date**} dateObj - a Date object
- @param {**number**} seconds - number of seconds to add
- @returns {**Date**} a date after adding the value

```javascript
const now = new Date();
const three_seconds_ago = date.addSeconds(now, -3);
```

### addMilliseconds(dateObj, milliseconds)

- @param {**Date**} dateObj - a Date object
- @param {**number**} milliseconds - number of milliseconds to add
- @returns {**Date**} a date after adding the value

```javascript
const now = new Date();
const a_millisecond_later = date.addMilliseconds(now, 1);
```

### subtract(date1, date2)

- @param {**Date**} date1 - a Date object
- @param {**Date**} date2 - a Date object
- @returns {**Object**} a result object subtracting date2 from date1

```javascript
const today = new Date(2015, 0, 2);
const yesterday = new Date(2015, 0, 1);

date.subtract(today, yesterday).toDays();           // => 1 = today - yesterday
date.subtract(today, yesterday).toHours();          // => 24
date.subtract(today, yesterday).toMinutes();        // => 1440
date.subtract(today, yesterday).toSeconds();        // => 86400
date.subtract(today, yesterday).toMilliseconds();   // => 86400000
```

### isLeapYear(y)

- @param {**number**} y - year
- @returns {**boolean**} whether year is leap year

```javascript
date.isLeapYear(2015);  // => false
date.isLeapYear(2012);  // => true
```

### isSameDay(date1, date2)

- @param {**Date**} date1 - a Date object
- @param {**Date**} date2 - a Date object
- @returns {**boolean**} whether the two dates are the same day (time is ignored)

```javascript
const date1 = new Date(2017, 0, 2, 0);          // Jan 2 2017 00:00:00
const date2 = new Date(2017, 0, 2, 23, 59);     // Jan 2 2017 23:59:00
const date3 = new Date(2017, 0, 1, 23, 59);     // Jan 1 2017 23:59:00
date.isSameDay(date1, date2);   // => true
date.isSameDay(date1, date3);   // => false
```

### locale([code[, locale]])

- @param {**Function|string**} [code] - locale installer | language code
- @param {**Object**} [locale] - locale definition
- @returns {**string**} current language code

It returns the current language code if called without any parameters.

```javascript
date.locale();  // => "en"
```

To switch to any other language, call it with a locale installer or a language code.

```javascript
import es from 'date-and-time/locale/es';

date.locale(es);  // Switch to Spanish
```

See [LOCALE.md](./LOCALE.md) for details.

### extend(extension)

- @param {**Object**} extension - extension object
- @returns {**void**}

It extends this library. See [EXTEND.md](./EXTEND.md) for details.

### plugin(name[, plugin])

- @param {**Function|string**} name - plugin installer | plugin name
- @param {**Object**} [plugin] - plugin object
- @returns {**void**}

Plugin is a named extension object. By installing predefined plugins, you can easily extend this library. See [PLUGINS.md](./PLUGINS.md) for details.

## Browser Support

Chrome, Firefox, Safari, Edge, and Internet Explorer 6+.

## License

MIT
