# Plugins

This library is oriented towards minimalism, so it may appear to be lacking in features. Plugin is the most realistic solution to such dissatisfaction. By importing plugins, you can extend the functionality of this library, mainly formatter and parser.

## Usage

- ES Modules:

```javascript
import date from 'date-and-time';
// Import the plugin named "foobar".
import foobar from 'date-and-time/plugin/foobar';

// Apply the "foobar" to the library.
date.plugin(foobar);
```

- CommonJS:

```javascript
const date = require('date-and-time');
// Import the plugin named "foobar".
const foobar = require('date-and-time/plugin/foobar');

// Apply the "foobar" to the library.
date.plugin(foobar);
```

- ES Modules for the browser:

```html
<script type="module">
import date from '/path/to/date-and-time.es.min.js';
// Import the plugin named "foobar".
import foobar from '/path/to/date-and-time/plugin/foobar.es.js';

// Apply the "foobar" to the library.
date.plugin(foobar);
</script>
```

- Older browser:

```html
<script src="/path/to/date-and-time.min.js"></script>
<!-- Import the plugin named "foobar". -->
<script src="/path/to/plugin/foobar.js"></script>

<script>
// Apply the "foobar" to the library.
date.plugin('foobar');
</script>
```

### NOTE

- If you want to use ES Modules in Node.js without a transpiler, you need to add `"type": "module"` in your `package.json` or change your file extension from `.js` to `.mjs`.

## Plugin List

- [day-of-week](#day-of-week)
  - It adds day of week notation to the parser.

- [meridiem](#meridiem)
  - It extends `A` token.

- [microsecond](#microsecond)
  - It adds microsecond notation to the parser.

- [ordinal](#ordinal)
  - It adds ordinal notation of date to the formatter.

- [timespan](#timespan)
  - It adds `timeSpan()` function to the library.

- [two-digit-year](#two-digit-year)
  - It adds two-digit year notation to the parser.

## Plugin Details

### day-of-week

It adds `dddd`, `ddd` and `dd` tokens to the parser. While these meanings are as follows, in fact they don't make sense because day of week doesn't include information to determine a date:

| token | meaning                  | examples of acceptable form | added or modified |
|:------|:-------------------------|:----------------------------|:------------------|
| dddd  | day of week (long)       | Friday, Sunday              | ✔                 |
| ddd   | day of week (short)      | Fri, Sun                    | ✔                 |
| dd    | day of week (very short) | Fr, Su                      | ✔                 |

```javascript
const date = require('date-and-time');
// Import "day-of-week" plugin as a named "day_of_week".
const day_of_week = require('date-and-time/plugin/day-of-week');

// Apply the "day_of_week" plugin to the library.
date.plugin(day_of_week);

// You can write like this.
date.parse('Thursday, March 05, 2020', 'dddd, MMMM, D YYYY');
// You can also write like this, but it is not versatile because length of day of week are variant.
date.parse('Thursday, March 05, 2020', '        , MMMM, D YYYY');
date.parse('Friday, March 06, 2020', '      , MMMM, D YYYY');
```

### meridiem

It adds `AA`, `a` and `aa` tokens to the formatter. These meanings are as follows:

| token | meaning                            | examples of output | added or modified |
|:------|:-----------------------------------|:-------------------|:------------------|
| A     | meridiem (uppercase)               | AM, PM             |                   |
| AA    | meridiem (uppercase with ellipsis) | A.M., P.M.         | ✔                 |
| a     | meridiem (lowercase)               | am, pm             | ✔                 |
| aa    | meridiem (lowercase with ellipsis) | a.m., p.m.         | ✔                 |

It also extends `A` token of the parser as follows:

| token | meaning                          | examples of acceptable form            | added or modified |
|:------|:---------------------------------|:---------------------------------------|:------------------|
| A     | all the above notations          | AM, PM, A.M., P.M., am, pm, a.m., p.m. | ✔                 |

```javascript
const date = require('date-and-time');
// Import "meridiem" plugin.
const meridiem = require('date-and-time/plugin/meridiem');

// Apply "medidiem" plugin to the library.
date.plugin(meridiem);

// This is default behavior of the formatter.
date.format(new Date(), 'hh:mm A');     // => '12:34 PM'

// These are added tokens to the formatter.
date.format(new Date(), 'hh:mm AA');    // => '12:34 P.M.'
date.format(new Date(), 'hh:mm a');     // => '12:34 pm'
date.format(new Date(), 'hh:mm aa');    // => '12:34 p.m.'

// The parser will be acceptable all the above notations with only `A` token.
date.parse('12:34 PM', 'hh:mm A');      // => Jan 1 1970 12:34:00
date.parse('12:34 P.M.', 'hh:mm A');    // => Jan 1 1970 12:34:00
date.parse('12:34 pm', 'hh:mm A');      // => Jan 1 1970 12:34:00
date.parse('12:34 p.m.', 'hh:mm A');    // => Jan 1 1970 12:34:00
```

### microsecond

It adds `SSSSSS`, `SSSSS` and `SSSS` tokens to the parser. Thease meanings are as follows:

| token  | meaning                       | examples of output | added or modified |
|:-------|:------------------------------|:-------------------|:------------------|
| SSSSSS | microsecond (high accuracy)   | 753123, 022113     | ✔                 |
| SSSSS  | microsecond (middle accuracy) | 75312, 02211       | ✔                 |
| SSSS   | microsecond (low accuracy)    | 7531, 0221         | ✔                 |
| SSS    | millisecond (high accuracy)   | 753, 022           |                   |
| SS     | millisecond (middle accuracy) | 75, 02             |                   |
| S      | millisecond (low accuracy)    | 7, 0               |                   |

```javascript
const date = require('date-and-time');
// Import "microsecond" plugin.
const microsecond = require('date-and-time/plugin/microsecond');

// Apply "microsecond" plugin to the library.
date.plugin(microsecond);

// A date object in JavaScript supports `millisecond` (ms):
date.parse('12:34:56.123', 'HH:mm:ss.SSS');

// 4 or more digits number sometimes seen is not `millisecond`, probably `microsecond` (μs):
date.parse('12:34:56.123456', 'HH:mm:ss.SSSSSS');

// 123456µs will be rounded to 123ms.
```

### ordinal

It adds `DDD` token to the formatter. This meaning is as follows:

| token | meaning                  | examples of output  | added or modified |
|:------|:-------------------------|:--------------------|:------------------|
| DDD   | ordinal notation of date | 1st, 2nd, 3rd, 31th | ✔                 |
| DD    | date with zero-padding   | 01, 02, 03, 31      |                   |
| D     | date                     | 1, 2, 3, 31         |                   |

```javascript
const date = require('date-and-time');
// Import "ordinal" plugin.
const ordinal = require('date-and-time/plugin/ordinal');

// Apply "ordinal" plugin to the library.
date.plugin(ordinal);

// These are default behavior of the formatter.
date.format(new Date(), 'MMM D YYYY');    // => Jan 1 2019
date.format(new Date(), 'MMM DD YYYY');   // => Jan 01 2019

// `DDD` token outputs ordinal number of date.
date.format(new Date(), 'MMM DDD YYYY');  // => Jan 1st 2019
```

### timespan

It adds `timeSpan()` function to the library. This function is similar to the `subtract()`, but this can display a formatted elapsed time between two date objects:

```javascript
const date = require('date-and-time');
// Import "timespan" plugin.
const timespan = require('date-and-time/plugin/timespan');

// Apply "timespan" plugin to the library.
date.plugin(timespan);

const now = new Date(2020, 2, 5, 1, 2, 3, 4);
const new_years_day = new Date(2020, 0, 1);

date.timeSpan(now, new_years_day).toDays('D HH:mm:ss.SSS'); // => '64 01:02:03.004'
date.timeSpan(now, new_years_day).toHours('H [hours] m [minutes] s [seconds]');  // => '1537 hours 2 minutes 3 seconds'
date.timeSpan(now, new_years_day).toMinutes('mmmmmmmmmm [minutes]');  // => '0000092222 minutes'
```

The `timeSpan()` returns an object that has some functions as with the `subtract()`:

| function       | description             |
|:---------------|:------------------------|
| toDays         | Outputs as dates        |
| toHours        | Outputs as hours        |
| toMinutes      | Outputs as minutes      |
| toSeconds      | Outputs as seconds      |
| toMilliseconds | Outputs as milliseconds |

Available tokens in those functions and their meanings are as follows:

| function       | available tokens |
|:---------------|:-----------------|
| toDays         | D, H, m, s, S    |
| toHours        | H, m, s, S       |
| toMinutes      | m, s, S          |
| toSeconds      | s, S             |
| toMilliseconds | S                |

| token | meaning     |
|:------|:------------|
| D     | date        |
| H     | 24-hour     |
| m     | minute      |
| s     | second      |
| S     | millisecond |

### two-digit-year

It adds `YY` token to the parser and also changes behavior of `Y` token. These meanings are as follows:

| token | meaning                             | examples of acceptable form | added or modified |
|:------|:------------------------------------|:----------------------------|:------------------|
| YYYY  | four-digit year                     | 2019, 0123, 0001            |                   |
| YY    | two-digit year                      | 90, 00, 08, 19              | ✔                 |
| Y     | two-digit year without zero-padding | 90, 0, 8, 19                | ✔                 |

`YY` and `Y` token will convert the year 69 or earlier to 2000s, the year 70 or later to 1900s. By this change, `Y` token will no longer acceptable the year 100 or later, so use `YYYY` token instead if necessary.

```javascript
const date = require('date-and-time');
// Import "two-digit-year" plugin as a named "two_digit_year".
const two_digit_year = require('date-and-time/plugin/two-digit-year');

// These are default behavior of the parser.
date.parse('Dec 25 69', 'MMM D YY');      // => Invalid Date
date.parse('Dec 25 70', 'MMM D Y');       // => 70 AD (ancient times)

// Apply the "two_digit_year" plugin to the library.
date.plugin(two_digit_year);

// These convert the year 69 or earlier to 2000s, the year 70 or later to 1900s.
date.parse('Dec 25 69', 'MMM D YY');      // => Dec 25 2069
date.parse('Dec 25 70', 'MMM D Y');       // => Dec 25 1970

// `Y` token will no longer acceptable the year 100 or later.
date.parse('Dec 25 2019', 'MMM D Y');     // => Invalid Date
// Use `YYYY` token instead if necessary.
date.parse('Dec 25 2019', 'MMM D YYYY');  // => Dec 25 2019
```
