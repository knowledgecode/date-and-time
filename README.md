# date-and-time
[![Circle CI](https://circleci.com/gh/knowledgecode/date-and-time.svg?style=shield)](https://circleci.com/gh/knowledgecode/date-and-time)  

## WHY
Probably the most famous DateTime library is [Moment.js](http://momentjs.com/), that is so great but has been bloated (13.8k gz). This will be a good solution if you require a small one.  

## Features
- Minimalist. only has 1.8k gz
- multi language support
- not extending built-in date object
- legacy IE support. IE6+

## Installation
via npm:
```shell
$ npm install date-and-time --save
```
via Bower:
```shell
$ bower install date-and-time
```
the browser (directly):
```html
<script src="date-and-time.min.js"></script>
```

## Usage
Node.js:
```javascript
var date = require('date-and-time');
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
- {object} dateObj - target date
- {string} formatString - format string
- {boolean} [utc] - output as UTC

```javascript
var now = new Date();
date.format(now, 'YYYY/MM/DD HH:mm:ss');    // => '2015/01/02 23:14:05'
date.format(now, 'ddd MMM DD YYYY');        // => 'Fri Jan 02 2015'
date.format(now, 'hh:mm A [GMT]Z');         // => '11:14 p.m. GMT-0800'
date.format(now, 'hh:mm A [GMT]Z', true);   // => '07:14 a.m. GMT+0000'
```

| formatString | meaning     | example           |
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
- {string} dateString - date string
- {string} formatString - format string
- {boolean} [utc] - input as UTC

```javascript
date.parse('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss');   // => date object
date.parse('02-01-2015', 'DD-MM-YYYY');                     // => date object
date.parse('11:14:05 p.m.', 'hh:mm:ss A');                  // => (23:14:05 GMT-0800)
date.parse('11:14:05 p.m.', 'hh:mm:ss A', true);            // => (15:14:05 GMT-0800)
```

| formatString | meaning     | example           |
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
- {string} dateString - date string
- {string} formatString - format string
```javascript
date.isValid('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss'); // => true
date.isValid('02-29-2015', 'DD-MM-YYYY');                   // => false
```
`formatString` is the same as one of `parse`.

### addYears(dateObj, years)
- {object} dateObj - the augend
- {number} years - the addend
```javascript
var now = new Date();
var next_year = date.addYears(now, 1);  // => Date object
```

### addMonths(dateObj, months)
- {object} dateObj - the augend
- {number} months - the addend
```javascript
var now = new Date();
var next_month = date.addMonths(now, 1); // => Date object
```

### addDays(dateObj, days)
- {object} dateObj - the augend
- {number} days - the addend
```javascript
var now = new Date();
var yesterday = date.addDays(now, -1);  // => Date object
```

### addHours(dateObj, hours)
- {object} dateObj - the augend
- {number} hours - the addend
```javascript
var now = new Date();
var an_hour_ago = date.addHours(now, -1); // => Date object
```

### addMinutes(dateObj, minutes)
- {object} dateObj - the augend
- {number} minutes - the addend
```javascript
var now = new Date();
var two_minutes_later = date.addMinutes(now, 2);    // => Date object
```

### addSeconds(dateObj, seconds)
- {object} dateObj - the augend
- {number} seconds - the addend
```javascript
var now = new Date();
var three_seconds_ago = date.addSeconds(now, -3);   // => Date object
```

### addMilliseconds(dateObj, milliseconds)
- {object} dateObj - the augend
- {number} milliseconds -the addend
```javascript
var now = new Date();
var a_millisecond_later = date.addMilliseconds(now, 1); // => Date object
```

### subtract(dateObj1, dateObj2)
- {object} date1 - the minuend
- {object} date2 - the subtrahend
```javascript
var today = new Date(2015, 0, 2);
var yesterday = new Date(2015, 0, 1);
date.subtract(today, yesterday).toDays();           // => 1
date.subtract(today, yesterday).toHours();          // => 24
date.subtract(today, yesterday).toMinutes();        // => 1440
date.subtract(today, yesterday).toSeconds();        // => 86400
date.subtract(today, yesterday).toMilliseconds();   // => 86400000
```

### isLeapYear(dateObj)
- {object} dateObj - target date
```javascript
var date1 = new Date(2015, 0, 2);
var date2 = new Date(2012, 0, 2);
date.isLeapYear(date1); // => false
date.isLeapYear(date2); // => true
```

## Locale
It supports the following languages for now:  
- Arabic (ar)
- Bengali (bn)
- Chinese (zh-cn)
- Chinese (zh-tw)
- English (en)
- French (fr)
- German (de)
- Hindi (hi)
- Italian (it)
- Japanese (ja)
- Korean (ko)
- Portuguese (pt)
- Russian (ru)
- Spanish (es)

Month, day of week, and meridiem are used English by default. If you want to use other languages, can switch to them as follows:  
Node.js:
```javascript
var date = require('date-and-time');
date.locale('fr');  // French
date.format(new Date(), 'dddd D MMMM'); // => 'lundi 11 janvier'
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
var now = new Date();
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

