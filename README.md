# date-and-time

[![Circle CI](https://circleci.com/gh/knowledgecode/date-and-time.svg?style=shield)](https://circleci.com/gh/knowledgecode/date-and-time)  

This library is just a function collection for manipulating JS date and time. It's tiny, simple, easy to learn.

## Why

JS modules nowadays are getting more huge and complex, and there are also many dependencies. Trying to keep each module simple and small is meaningful.

## Features

- Minimalist. Less than 2k. (minified and gzipped)
- Universal / Isomorphic. Wherever JS runtime works.
- Multi language support.
- Not extending built-in Date object.
- Older browser support. Even works on IE6. :)

## Install

- via npm:

```shell
npm install date-and-time --save
```

- local:

```html
<script src="/path/to/date-and-time.min.js"></script>
```

## Recent Changes

- 0.10.0
  - The `YYYY` token has come to require 4 digits in the `parse()`, the `preparse()` and the `isValid()` (**Breaking Change**).

  ```javascript
  date.parse('31-12-0123', 'DD-MM-YYYY');   // Good
  date.parse('31-12-123', 'DD-MM-YYYY');    // Not good
  ```

  - The `YY` token has come to require 2 digits in the above functions (**Breaking Change**).

  ```javascript
  date.parse('31-12-03', 'DD-MM-YY');   // Good, but It's interpreted the year is 2003.
  date.parse('31-12-3', 'DD-MM-YY');    // Not good
  ```

  - Added a `Y` token to support year, 4 or less digits in the above functions. This new token, `Y` is equivalent to the previous `YYYY` token.

  ```javascript
  date.parse('31-12-123', 'DD-MM-Y');   // good
  date.parse('31-12-3', 'DD-MM-Y');     // good
  ```

- 0.9.0 (Locale Update)
  - Renewal of the locale system. Some functions were merged (**Breaking Change**).
  - Added a plugin system. You could extend a formatter and a parser by using this mechanism.
  - With the addition of the plugin system, the `format()` has come to accept a user original token.

- 0.8.0 (Parser Update)
  - The `parse()` has come to return `Invalid Date` instead of `NaN` when parsing is failure (**Breaking Change**).
  - Added `preparse()`. It returns a Date Structure.
  - The `isValid()` has come to take a Date Structure in addition to a date string.
  - The `isLeapYear()` has come to take a year (number type) instead of a Date object (**Breaking Change**).

## Usage

- Node.js:

```javascript
const date = require('date-and-time');
```

- With a transpiler:

```javascript
import date from 'date-and-time';
```

- With an older browser:

```javascript
window.date;    // global object
```

## API

### format(dateObj, formatString[, utc])

- Formatting a date.
  - @param {**Date**} dateObj - a Date object
  - @param {**string**} formatString - a format string
  - @param {**boolean**} [utc] - output as UTC
  - @returns {**string**} a formatted string

```javascript
const now = new Date();
date.format(now, 'YYYY/MM/DD HH:mm:ss');    // => '2015/01/02 23:14:05'
date.format(now, 'ddd., MMM. DD YYYY');     // => 'Fri., Jan. 02 2015'
date.format(now, 'hh:mm A [GMT]Z');         // => '11:14 p.m. GMT-0800'
date.format(now, 'hh:mm A [GMT]Z', true);   // => '07:14 a.m. GMT+0000'
```

Available tokens and their meanings are as follows:

| token        | meaning     | example           |
|:-------------|:------------|:------------------|
| YYYY         | year        | 0999, 2015        |
| YY           | year        | 05, 99            |
| Y            | year        | 2, 44, 888, 2015  |
| MMMM         | month       | January, December |
| MMM          | month       | Jan, Dec          |
| MM           | month       | 01, 12            |
| M            | month       | 1, 12             |
| DDD (*)      | day         | 1st, 2nd, 3rd     |
| DD           | day         | 02, 31            |
| D            | day         | 2, 31             |
| dddd         | day of week | Friday, Sunday    |
| ddd          | day of week | Fri, Sun          |
| dd           | day of week | Fr, Su            |
| HH           | 24-hour     | 23, 08            |
| H            | 24-hour     | 23, 8             |
| A            | meridiem    | a.m., p.m.        |
| a (*)        | meridiem    | A.M., P.M.        |
| AA (*)       | meridiem    | AM, PM            |
| aa (*)       | meridiem    | am, pm            |
| hh           | 12-hour     | 11, 08            |
| h            | 12-hour     | 11, 8             |
| mm           | minute      | 14, 07            |
| m            | minute      | 14, 7             |
| ss           | second      | 05, 10            |
| s            | second      | 5, 10             |
| SSS          | millisecond | 753, 022          |
| SS           | millisecond | 75, 02            |
| S            | millisecond | 7, 0              |
| Z            | timezone    | +0100, -0800      |

(*) Not available by default. See [PLUGINS.md](./PLUGINS.md) for details.

#### NOTE 1. Comments

Strings in parenthese `[...]` in the `formatString` will be ignored as comments:

```javascript
date.format(new Date(), 'DD-[MM]-YYYY');    // => '02-MM-2015'
date.format(new Date(), '[DD-[MM]-YYYY]');  // => 'DD-[MM]-YYYY'
```

#### NOTE 2. Output as UTC

This function usually outputs a local date-time string. Set to true a `utc` option (the 3rd parameter) if you would like to get a UTC date/time string.

```javascript
date.format(new Date(), 'hh:mm A [GMT]Z');          // => '11:14 p.m. GMT-0800'
date.format(new Date(), 'hh:mm A [GMT]Z', true);    // => '07:14 a.m. GMT+0000'
```

#### NOTE 3. More Tokens

You could also define your own tokens. See [PLUGINS.md](./PLUGINS.md) for details.

---

### parse(dateString, formatString[, utc])

- Parsing a date string.
  - @param {**string**} dateString - a date string
  - @param {**string**} formatString - a format string
  - @param {**boolean**} [utc] - input as UTC
  - @returns {**Date**} a constructed date

```javascript
date.parse('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss');   // => Jan. 2 2015 23:14:05 GMT-0800
date.parse('02-01-2015', 'DD-MM-YYYY');                     // => Jan. 2 2015 00:00:00 GMT-0800
date.parse('11:14:05 p.m.', 'hh:mm:ss A');                  // => Jan. 1 1970 23:14:05 GMT-0800
date.parse('11:14:05 p.m.', 'hh:mm:ss A', true);            // => Jan. 1 1970 15:14:05 GMT-0800
date.parse('Jam. 1 2017', 'MMM. D YYYY');                   // => Invalid Date
date.parse('Feb. 29 2016', 'MMM. D YYYY');                  // => Feb. 29 2016 00:00:00 GMT-0800
date.parse('Feb. 29 2017', 'MMM. D YYYY');                  // => Invalid Date
```

Available tokens and their meanings are as follows:

| token        | meaning     | example           |
|:-------------|:------------|:------------------|
| YYYY         | year        | 0999, 2015        |
| YY           | year        | 05, 99            |
| Y            | year        | 2, 44, 88, 2015   |
| MMMM         | month       | January, December |
| MMM          | month       | Jan, Dec          |
| MM           | month       | 01, 12            |
| M            | month       | 1, 12             |
| DD           | day         | 02, 31            |
| D            | day         | 2, 31             |
| HH           | 24-hour     | 23, 08            |
| H            | 24-hour     | 23, 8             |
| hh           | 12-hour     | 11, 08            |
| h            | 12-hour     | 11, 8             |
| A            | meridiem    | a.m., p.m.        |
| A (*)        | meridiem    | A.M., P.M.        |
| A (*)        | meridiem    | AM, PM            |
| A (*)        | meridiem    | am, pm            |
| mm           | minute      | 14, 07            |
| m            | minute      | 14, 7             |
| ss           | second      | 05, 10            |
| s            | second      | 5, 10             |
| SSS          | millisecond | 753, 022          |
| SS           | millisecond | 75, 02            |
| S            | millisecond | 7, 0              |

(*) Not available by default. See [PLUGINS.md](./PLUGINS.md) for details.

#### NOTE 1. Invalid Date

If the function fails to parse, it will return `Invalid Date`. Notice that the `Invalid Date` is a Date object, not `NaN` or `null`. You could tell whether the Date object is invalid as follows:

```javascript
const today = date.parse('Jam. 1 2017', 'MMM. D YYYY');

if (isNaN(today)) {
    // Failure
}
```

#### NOTE 2. Input as UTC

This function usually assumes the `dateString` is local date-time. Set to true a `utc` option (the 3rd parameter) if it is UTC.

```javascript
date.parse('11:14:05 p.m.', 'hh:mm:ss A');          // => Jan. 1 1970 23:14:05 GMT-0800
date.parse('11:14:05 p.m.', 'hh:mm:ss A', true);    // => Jan. 1 1970 15:14:05 GMT-0800
```

#### NOTE 3. Default Date Time

Default date is `January 1, 1970`, time is `00:00:00.000`. Values not passed will be complemented with them:

```javascript
date.parse('11:14:05 p.m.', 'hh:mm:ss A');  // => Jan. 1 1970 23:14:05 GMT-0800
date.parse('Feb. 2000', 'MMM. YYYY');       // => Feb. 1 2000 00:00:00 GMT-0800
```

#### NOTE 4. Max Date / Min Date

Parsable maximum date is `December 31, 9999`, minimum date is `January 1, 0001`.

```javascript
date.parse('Dec. 31 9999', 'MMM. D YYYY');  // => Dec. 31 9999 00:00:00 GMT-0800
date.parse('Dec. 31 10000', 'MMM. D YYYY'); // => Invalid Date

date.parse('Jan. 1 0001', 'MMM. D YYYY');   // => Jan. 1 0001 00:00:00 GMT-0800
date.parse('Jan. 1 0000', 'MMM. D YYYY');   // => Invalid Date
```

#### NOTE 5. Auto Mapping

The `YY` token maps the year 69 or less to the 2000s, the year 70 or more to the 1900s. Using it is not recommended.

```javascript
date.parse('Dec. 31 00', 'MMM. D YY');  // => Dec. 31 2000 00:00:00 GMT-0800
date.parse('Dec. 31 69', 'MMM. D YY');  // => Dec. 31 2069 00:00:00 GMT-0800
date.parse('Dec. 31 70', 'MMM. D YY');  // => Dec. 31 1970 00:00:00 GMT-0800
date.parse('Dec. 31 99', 'MMM. D YY');  // => Dec. 31 1999 00:00:00 GMT-0800
```

#### NOTE 6. 12-hour notation and Meridiem

If use the `hh` or `h` (12-hour) token, use together the `A` (meridiem) token to get the right value.

```javascript
date.parse('11:14:05', 'hh:mm:ss');         // => Jan. 1 1970 11:14:05 GMT-0800
date.parse('11:14:05 p.m.', 'hh:mm:ss A');  // => Jan. 1 1970 23:14:05 GMT-0800
```

#### NOTE 7. Comments

Strings in parenthese `[...]` in the formatString will be ignored as comments:

```javascript
date.parse('12 hours 34 minutes', 'HH hours mm minutes');       // => Invalid Date
date.parse('12 hours 34 minutes', 'HH [hours] mm [minutes]');   // => Jan. 1 1970 12:34:00 GMT-0800
```

As a white space works as a wild card, you could also write as follows:

```javascript
date.parse('12 hours 34 minutes', 'HH       mm        ');   // => Jan. 1 1970 12:34:00 GMT-0800
```

---

### preparse(dateString, formatString)

- Pre-parsing a date string.
  - @param {**string**} dateString - a date string
  - @param {**string**} formatString - a format string
  - @returns {**Object**} a date structure

This function takes exactly the same parameters with the `parse()`, but returns a date structure as follows unlike it:

```javascript
date.preparse('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss');

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
    _index: 19,     // Pointer offset
    _length: 19,    // Length of the date string
    _match: 6       // Token matching count
}
```

This object shows a parsing result. You will be able to tell from it how the date string was parsed(, or why the parsing was failed).

---

### isValid(arg[, formatString])

- Validation.
  - @param {**Object**|**string**} arg - a date structure or a date string
  - @param {**string**} [formatString] - a format string
  - @returns {**boolean**} whether the date string is a valid date

This function takes either exactly the same parameters with the `parse()` or a date structure which the `preparse()` returns, evaluates the validity of them.

```javascript
date.isValid('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss'); // => true
date.isValid('29-02-2015', 'DD-MM-YYYY');                   // => false

const result = date.preparse('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss');
date.isValid(result);   // => true
```

---

### addYears(dateObj, years)

- Adding years.
  - @param {**Date**} dateObj - a Date object
  - @param {**number**} years - number of years to add
  - @returns {**Date**} a date after adding the value

```javascript
const now = new Date();
const next_year = date.addYears(now, 1);
```

---

### addMonths(dateObj, months)

- Adding months.
  - @param {**Date**} dateObj - a Date object
  - @param {**number**} months - number of months to add
  - @returns {**Date**} a date after adding the value

```javascript
const now = new Date();
const next_month = date.addMonths(now, 1);
```

---

### addDays(dateObj, days)

- Adding days.
  - @param {**Date**} dateObj - a Date object
  - @param {**number**} days - number of days to add
  - @returns {**Date**} a date after adding the value

```javascript
const now = new Date();
const yesterday = date.addDays(now, -1);
```

---

### addHours(dateObj, hours)

- Adding hours.
  - @param {**Date**} dateObj - a Date object
  - @param {**number**} hours - number of hours to add
  - @returns {**Date**} a date after adding the value

```javascript
const now = new Date();
const an_hour_ago = date.addHours(now, -1);
```

---

### addMinutes(dateObj, minutes)

- Adding minutes.
  - @param {**Date**} dateObj - a Date object
  - @param {**number**} minutes - number of minutes to add
  - @returns {**Date**} a date after adding the value

```javascript
const now = new Date();
const two_minutes_later = date.addMinutes(now, 2);
```

---

### addSeconds(dateObj, seconds)

- Adding seconds.
  - @param {**Date**} dateObj - a Date object
  - @param {**number**} seconds - number of seconds to add
  - @returns {**Date**} a date after adding the value

```javascript
const now = new Date();
const three_seconds_ago = date.addSeconds(now, -3);
```

---

### addMilliseconds(dateObj, milliseconds)

- Adding milliseconds.
  - @param {**Date**} dateObj - a Date object
  - @param {**number**} milliseconds - number of milliseconds to add
  - @returns {**Date**} a date after adding the value

```javascript
const now = new Date();
const a_millisecond_later = date.addMilliseconds(now, 1);
```

---

### subtract(date1, date2)

- Subtracting.
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

---

### isLeapYear(y)

- Leap year.
  - @param {**number**} y - year
  - @returns {**boolean**} whether the year is a leap year

```javascript
date.isLeapYear(2015);  // => false
date.isLeapYear(2012);  // => true
```

---

### isSameDay(date1, date2)

- Comparison of two dates.
  - @param {**Date**} date1 - a Date object
  - @param {**Date**} date2 - a Date object
  - @returns {**boolean**} whether the dates are the same day (times are ignored)

```javascript
const date1 = new Date(2017, 0, 2, 0);          // Jan. 2 2017 00:00:00
const date2 = new Date(2017, 0, 2, 23, 59);     // Jan. 2 2017 23:59:00
const date3 = new Date(2017, 0, 1, 23, 59);     // Jan. 1 2017 23:59:00
date.isSameDay(date1, date2);   // => true
date.isSameDay(date1, date3);   // => false
```

---

### locale([code[, locale]])

- Change locale or setting a new locale definition.
  - @param {**string**} [code] - language code
  - @param {**Object**} [locale] - locale definition
  - @returns {**string**} current language code

Returns current language code if called without any parameters.

```javascript
date.locale();  // "en"
```

To switch to any other language, call it with a language code.

```javascript
date.locale('es');  // Switch to Spanish
```

To define a new locale, call it with new language code and a locale definition. See [LOCALE.md](./LOCALE.md) for details.

---

### extend(extension)

- Locale extension.
  - @param {**Object**} extension - locale definition
  - @returns {**void**}

Extends a current locale (formatter and parser). See [PLUGINS.md](./PLUGINS.md) for details.

---

### plugin(name[, extension])

- Plugin import or definition.
  - @param {**string**} name - plugin name
  - @param {**Object**} [extension] - locale definition
  - @returns {**void**}

Plugin is a named locale definition defined with the `extend()`. See [PLUGINS.md](./PLUGINS.md) for details.

---

## Browser Support

Chrome, Firefox, Safari, Edge, and Internet Explorer 6+.

## License

MIT
