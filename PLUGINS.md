# Plugins

As this library is oriented toward minimalism, it may seem like a lack of functionality. We think plugin is the most realistic solution for solving such dissatisfaction. By importing the plugins, you could extend the functionality of this library, mainly the formatter and the parser.


## Usage

- Node.js:

```javascript
const date = require('date-and-time');
// Import a plugin "foobar".
require('date-and-time/plugin/foobar');

// Apply the plugin to "date-and-time".
date.plugin('foobar');
```

- With a transpiler:

```javascript
import date from 'date-and-time';
// Import a plugin "foobar".
import 'date-and-time/plugin/foobar';

// Apply the plugin to "date-and-time".
date.plugin('foobar');
```

- The browser:

```html
<script src="/path/to/date-and-time.min.js"></script>
<!-- Import a plugin "foobar". -->
<script src="/path/to/plugin/foobar.js"></script>

<script>
// Apply the plugin to "date-and-time".
date.plugin('foobar');
</script>
```

## Plugin List

- meridiem
  - It extends `A` token.

- ordinal
  - It adds ordinal notation of date to the formatter.

- two-digit-year
  - It adds two-digit year notation to the parser.

## Plugin Details

### meridiem

It adds `AA`, `a` and `aa` token to the formatter. These meanings are as follows:

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
require('date-and-time/plugin/meridiem');

// Apply "medidiem" plugin to `date-and-time`.
date.plugin('meridiem');

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

### ordinal

It adds `DDD` token to the formatter. This meaning is as follows:

| token | meaning                  | examples of output  | added or modified |
|:------|:-------------------------|:--------------------|:------------------|
| D     | date                     | 1, 2, 3, 31         |                   |
| DD    | date with zero-padding   | 01, 02, 03, 31      |                   |
| DDD   | ordinal notation of date | 1st, 2nd, 3rd, 31th | ✔                 |

```javascript
const date = require('date-and-time');
// Import "ordinal" plugin.
require('date-and-time/plugin/ordinal');

// Apply "ordinal" plugin to `date-and-time`.
date.plugin('ordinal');

// These are default behavior of the formatter.
date.format(new Date(), 'MMM D YYYY');    // => Jan 1 2019
date.format(new Date(), 'MMM DD YYYY');   // => Jan 01 2019

// `DDD` token outputs ordinal number of date.
date.format(new Date(), 'MMM DDD YYYY');  // => Jan 1st 2019
```

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
// Import "two-digit-year" plugin.
require('date-and-time/plugin/two-digit-year');

// These are default behavior of the parser.
date.parse('Dec 25 69', 'MMM D YY');      // => Invalid Date
date.parse('Dec 25 70', 'MMM D Y');       // => 70 AD (ancient times)

// Apply "two-digit-year" plugin to `date-and-time`.
date.plugin('two-digit-year');

// These convert the year 69 or earlier to 2000s, the year 70 or later to 1900s.
date.parse('Dec 25 69', 'MMM D YY');      // => Dec 25 2069
date.parse('Dec 25 70', 'MMM D Y');       // => Dec 25 1970

// `Y` token will no longer acceptable the year 100 or later.
date.parse('Dec 25 2019', 'MMM D Y');     // => Invalid Date
// Use `YYYY` token instead if necessary.
date.parse('Dec 25 2019', 'MMM D YYYY');  // => Dec 25 2019
```
