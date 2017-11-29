# date-and-time
[![Circle CI](https://circleci.com/gh/knowledgecode/date-and-time.svg?style=shield)](https://circleci.com/gh/knowledgecode/date-and-time)  

## WHY
Since JS modules are usually used in combination, we think trying to keep the size of each module small is important. This date time utility is one of the modules aiming for minimal and efficient.

## Features
- Minimalist. Only has **1.9k** (minified and gzipped)
- Universal (Isomorphic)
- Multi language support
- Not extending built-in Date object
- Browserify support
- Legacy IE support. IE6+

## Installation
via npm:
```shell
$ npm install date-and-time --save
```
via Bower (DEPRECATED):
```shell
$ bower install date-and-time
```
directly:
```html
<script src="date-and-time.min.js"></script>
```

## Changes
- `parse()`
    - Parsing a string stricter
    - Added white space as a wildcard character
    - Fixed a daylight saving time issue

## Usage
Node.js:
```javascript
let date = require('date-and-time');
```
babelify:
```javascript
import date from './date-and-time';
```
AMD:
```javascript
require(['date-and-time'], function (date) {
});
```
the browser:
```javascript
window.date;    // global object
```

## API

### format(dateObj, formatString[, utc])
- {object} **dateObj** - date object
- {string} **formatString** - format string
- {boolean} [**utc**] - output as UTC *(optional)*

```javascript
let now = new Date();
date.format(now, 'YYYY/MM/DD HH:mm:ss');    // => '2015/01/02 23:14:05'
date.format(now, 'ddd MMM DD YYYY');        // => 'Fri Jan 02 2015'
date.format(now, 'hh:mm A [GMT]Z');         // => '11:14 p.m. GMT-0800'
date.format(now, 'hh:mm A [GMT]Z', true);   // => '07:14 a.m. GMT+0000'
```

| token        | meaning     | example           |
|:-------------|:------------|:------------------|
| YYYY         | year        | 0999, 2015        |
| YY           | year        | 15, 99            |
| Y            | year        | 999, 2015         |
| MMMM         | month       | January, December |
| MMM          | month       | Jan, Dec          |
| MM           | month       | 01, 12            |
| M            | month       | 1, 12             |
| DD           | day         | 02, 31            |
| D            | day         | 2, 31             |
| dddd         | day of week | Friday, Sunday    |
| ddd          | day of week | Fri, Sun          |
| dd           | day of week | Fr, Su            |
| HH           | hour-24     | 23, 08            |
| H            | hour-24     | 23, 8             |
| A            | meridiem    | a.m., p.m.        |
| hh           | hour-12     | 11, 08            |
| h            | hour-12     | 11, 8             |
| mm           | minute      | 14, 07            |
| m            | minute      | 14, 7             |
| ss           | second      | 05, 10            |
| s            | second      | 5, 10             |
| SSS          | millisecond | 753, 022          |
| SS           | millisecond | 75, 02            |
| S            | millisecond | 7, 0              |
| Z            | timezone    | +0100, -0800      |

#### NOTE
`[...]` in the `formatString` will be a comment:
```javascript
date.format(new Date(), 'DD-[MM]-YYYY');    // => '02-MM-2015'
date.format(new Date(), '[DD-[MM]-YYYY]');  // => 'DD-[MM]-YYYY'
```

### parse(dateString, formatString[, utc])
- {string} **dateString** - date string
- {string} **formatString** - format string
- {boolean} [**utc**] - input as UTC *(optional)*

```javascript
date.parse('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss');   // => date object
date.parse('02-01-2015', 'DD-MM-YYYY');                     // => date object
date.parse('11:14:05 p.m.', 'hh:mm:ss A');                  // => (Jan 1 1970 23:14:05 GMT-0800)
date.parse('11:14:05 p.m.', 'hh:mm:ss A', true);            // => (Jan 1 1970 15:14:05 GMT-0800)
date.parse('Jam 1 2017', 'MMM D YYYY');                     // => NaN
date.parse('Feb 29 2016', 'MMM D YYYY');                    // => date object
date.parse('Feb 29 2017', 'MMM D YYYY');                    // => NaN
```

| token        | meaning     | example           |
|:-------------|:------------|:------------------|
| YYYY         | year        | 2015, 1999        |
| YY           | year        | 15, 99            |
| MMMM         | month       | January, December |
| MMM          | month       | Jan, Dec          |
| MM           | month       | 01, 12            |
| M            | month       | 1, 12             |
| DD           | day         | 02, 31            |
| D            | day         | 2, 31             |
| HH           | hour-24     | 23, 08            |
| H            | hour-24     | 23, 8             |
| hh           | hour-12     | 11, 08            |
| h            | hour-12     | 11, 8             |
| A            | meridiem    | a.m., p.m.        |
| mm           | minute      | 14, 07            |
| m            | minute      | 14, 7             |
| ss           | second      | 05, 10            |
| s            | second      | 5, 10             |
| SSS          | millisecond | 753, 022          |
| SS           | millisecond | 75, 02            |
| S            | millisecond | 7, 0              |

#### NOTE 1
The minimum year that can be parsed is year 100, the maximum year is year 9999. Year 69 or less are translated into 2000s, year 70 or more and year 99 or less are translated into 1900s.
```javascript
date.parse('Dec 31 100', 'MMM d YYYY');     // => (Dec 31 100)
date.parse('Dec 31 9999', 'MMM d YYYY');    // => (Dec 31 9999)
date.parse('Dec 31 0', 'MMM d YYYY');       // => (Dec 31 2000)
date.parse('Dec 31 69', 'MMM d YYYY');      // => (Dec 31 2069)
date.parse('Dec 31 70', 'MMM d YYYY');      // => (Dec 31 1970)
date.parse('Dec 31 99', 'MMM d YYYY');      // => (Dec 31 1999)
```

#### NOTE 2
When using `hh` or `h` (hour-12), need to use together `A` (meridiem).

### isValid(dateString, formatString)
- {string} **dateString** - date string
- {string} **formatString** - format string
```javascript
date.isValid('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss'); // => true
date.isValid('29-02-2015', 'DD-MM-YYYY');                   // => false
```
The `formatString` you can set is the same as the `parse` function's.

### addYears(dateObj, years)
- {object} **dateObj** - date object
- {number} **years** - adding year
```javascript
let now = new Date();
let next_year = date.addYears(now, 1);  // => Date object
```

### addMonths(dateObj, months)
- {object} **dateObj** - date object
- {number} **months** - adding month
```javascript
let now = new Date();
let next_month = date.addMonths(now, 1); // => Date object
```

### addDays(dateObj, days)
- {object} **dateObj** - date object
- {number} **days** - adding day
```javascript
let now = new Date();
let yesterday = date.addDays(now, -1);  // => Date object
```

### addHours(dateObj, hours)
- {object} **dateObj** - date object
- {number} **hours** - adding hour
```javascript
let now = new Date();
let an_hour_ago = date.addHours(now, -1); // => Date object
```

### addMinutes(dateObj, minutes)
- {object} **dateObj** - date object
- {number} **minutes** -  adding minute
```javascript
let now = new Date();
let two_minutes_later = date.addMinutes(now, 2);    // => Date object
```

### addSeconds(dateObj, seconds)
- {object} **dateObj** - date object
- {number} **seconds** - adding second
```javascript
let now = new Date();
let three_seconds_ago = date.addSeconds(now, -3);   // => Date object
```

### addMilliseconds(dateObj, milliseconds)
- {object} **dateObj** - date object
- {number} **milliseconds** - adding millisecond
```javascript
let now = new Date();
let a_millisecond_later = date.addMilliseconds(now, 1); // => Date object
```

### subtract(dateObj1, dateObj2)
- {object} **date1** - date object
- {object} **date2** - date object
```javascript
let today = new Date(2015, 0, 2);
let yesterday = new Date(2015, 0, 1);

date.subtract(today, yesterday).toDays();           // => 1 = today - yesterday
date.subtract(today, yesterday).toHours();          // => 24
date.subtract(today, yesterday).toMinutes();        // => 1440
date.subtract(today, yesterday).toSeconds();        // => 86400
date.subtract(today, yesterday).toMilliseconds();   // => 86400000
```

### isLeapYear(dateObj)
- {object} **dateObj** - date object
```javascript
let date1 = new Date(2015, 0, 2);
let date2 = new Date(2012, 0, 2);
date.isLeapYear(date1); // => false
date.isLeapYear(date2); // => true
```

### isSameDay(dateObj)
- {object} **date1** - date object
- {object} **date2** - date object
```javascript
let date1 = new Date(2017, 0, 2, 0);        // Jan 2 2017 00:00:00
let date2 = new Date(2017, 0, 2, 23, 59);   // Jan 2 2017 23:59:00
let date3 = new Date(2017, 0, 1, 23, 59);   // Jan 1 2017 23:59:00
date.isSameDay(date1, date2);   // => true
date.isSameDay(date1, date3);   // => false
```

## Locale
It supports the following languages for now:  
- Arabic (ar)
- Azerbaijani (az)
- Bengali (bn)
- Burmese (my)
- Chinese (zh-cn)
- Chinese (zh-tw)
- Czech (cs)
- Dutch (nl)
- English (en)
- French (fr)
- German (de)
- Greek (el)
- Hindi (hi)
- Hungarian (hu)
- Indonesian (id)
- Italian (it)
- Japanese (ja)
- Javanese (jv)
- Korean (ko)
- Persian (fa)
- Polish (pl)
- Portuguese (pt)
- Punjabi (pa-in)
- Romanian (ro)
- Russian (ru)
- Serbian (sr)
- Spanish (es)
- Thai (th)
- Turkish (tr)
- Ukrainian (uk)
- Uzbek (uz)
- Vietnamese (vi)

Month, day of week, and meridiem are displayed in English by default. If you want to use other languages, can switch to them as follows:  
Node.js:
```javascript
let date = require('date-and-time');
date.locale('fr');  // French
date.format(new Date(), 'dddd D MMMM'); // => 'lundi 11 janvier'
```
babelify:
```javascript
import date from './date-and-time';
import './locale/it';

date.locale('it');  // Italian
date.format(new Date(), 'dddd D MMMM'); // => 'Lunedì 11 gennaio'
```
AMD:
```javascript
require(['date-and-time', 'locale/de'], function (date) {
    date.locale('de');  // German
    date.format(new Date(), 'dddd, D. MMMM');   // => 'Montag, 11. Januar'
});
```
the browser:
```html
<script src="date-and-time.min.js"></script>
<script src="locale/zh-cn.js"></script>
<script>
date.locale('zh-cn');  // Chinese
date.format(new Date(), 'MMMD日dddd');  // => '1月11日星期一'
</script>
```

## Customizing
You can not only switch to other languages, but can customize them as you want:  
```javascript
let now = new Date();
date.format(now, 'h:m A');  // => '12:34 p.m.'

date.setLocales('en', {
    A: ['AM', 'PM']
});

date.format(now, 'h:m A');  // => '12:34 PM'
```

## Browser Support
Chrome, Firefox, Safari, Opera, and Internet Explorer 6+.

## License
MIT

