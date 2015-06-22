# date-and-time [![Circle CI](https://circleci.com/gh/knowledgecode/date-and-time.svg?style=shield)](https://circleci.com/gh/knowledgecode/date-and-time)
This is a date and time utility for Node.js and browser.

## WHY
Probably the most famous date library is [Moment.js](http://momentjs.com/). That is so great but has been bloated (12k gz). This will be good solution if you are good enough the most basic function and require a small tool.  

## Features
- simple and slim. only 1.2k gz
- not extending built-in objects
- legacy IE support. IE6+

## Installation
Node.js:
```shell
$ npm install date-and-time --save
```
Bower:
```shell
$ bower install date-and-time
```
browser:
```html
<script src="./src/date-and-time.min.js"></script>
```

## Usage
Node.js:
```javascript
var date = require('date-and-time');
```
browser:
```javascript
var date = window.date;
```

## API

### format(date, formatString)
```javascript
var now = new Date();
date.format(now, 'YYYY/MM/DD HH:mm:ss');    // => '2015/01/02 23:14:05'
date.format(now, 'E MMM DD YYYY');    // => 'Fri Jan 02 2015'
```
| formatString | meaning     | examples   |
|:-------------|:------------|:-----------|
| YYYY         | year        | 2015, 1999 |
| YY           | year        | 15, 99     |
| MMM          | month       | Jan, Dec   |
| MM           | month       | 01, 12     |
| M            | month       | 1, 12      |
| DD           | day         | 02, 31     |
| D            | day         | 2, 31      |
| E            | day of week | Fri, Sun   |
| HH           | hour-24     | 23, 08     |
| H            | hour-24     | 23, 8      |
| A            | meridian    | a.m., p.m. |
| hh           | hour-12     | 11, 08     |
| h            | hour-12     | 11, 8      |
| mm           | minute      | 14, 07     |
| m            | minute      | 14, 7      |
| ss           | second      | 05, 10     |
| s            | second      | 5, 10      |
| SSS          | millisecond | 753, 022   |
| SS           | millisecond | 75, 02     |
| S            | millisecond | 7, 0       |

### parse(dateString, formatString)
```javascript
date.parse('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss');   // => Date object
date.parse('02-01-2015', 'DD-MM-YYYY'); // => Date object
```
| formatString | meaning     | examples   |
|:-------------|:------------|:-----------|
| YYYY         | year        | 2015, 1999 |
| YY           | year        | 15, 99     |
| MM           | month       | 01, 12     |
| M            | month       | 1, 12      |
| DD           | day         | 02, 31     |
| D            | day         | 2, 31      |
| HH           | hour-24     | 23, 08     |
| H            | hour-24     | 23, 8      |
| mm           | minute      | 14, 07     |
| m            | minute      | 14, 7      |
| ss           | second      | 05, 10     |
| s            | second      | 5, 10      |
| SSS          | millisecond | 753, 022   |
| SS           | millisecond | 75, 02     |
| S            | millisecond | 7, 0       |

### addYears(date, years)
```javascript
var now = new Date();
var next_year = date.addYears(now, 1);  // => Date object
```

### addMonths(date, months)
```javascript
var now = new Date();
var next_month = date.addMonths(now, 1); // => Date object
```

### addDays(date, days)
```javascript
var now = new Date();
var yesterday = date.addDays(now, -1);  // => Date object
```

### addHours(date, hours)
```javascript
var now = new Date();
var an_hour_ago = date.addHours(now, -1); // => Date object
```

### addMinutes(date, minutes)
```javascript
var now = new Date();
var two_minutes_later = date.addMinutes(now, 2);    // => Date object
```

### addSeconds(date, seconds)
```javascript
var now = new Date();
var three_seconds_ago = date.addSeconds(now, -3);   // => Date object
```

### addMilliseconds(date, milliseconds)
```javascript
var now = new Date();
var a_millisecond_later = date.addMilliseconds(now, 1); // => Date object
```

### subtract(date1, date2)
```javascript
var today = new Date(2015, 0, 2);
var yesterday = new Date(2015, 0, 1);
date.subtract(today, yesterday).toDays();   // => 1
date.subtract(today, yesterday).toHours();   // => 24
date.subtract(today, yesterday).toMinutes();    // => 1440
date.subtract(today, yesterday).toSeconds();    // => 86400
date.subtract(today, yesterday).toMilliseconds();   // => 86400000
```

### isValid(dateString, formatString)
```javascript
date.isValid('2015/01/02 23:14:05', 'YYYY/MM/DD HH:mm:ss'); // => true
date.isValid('02-29-2015', 'DD-MM-YYYY');   // => false
```
`formatString` is the same as one of `parse`.

### isLeapYear(date)
```javascript
var date1 = new Date(2015, 0, 2);
var date2 = new Date(2012, 0, 2);
date.isLeapYear(date1); // => false
date.isLeapYear(date2); // => true
```

## Locale
Months, day of week, and meridian are written in English. If you want to change language, rewrite them.
```javascript
var date = require('date-and-time');

// French
date.month = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
date.dayOfWeek = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];

date.format(new Date(), 'E MMM DD YYYY');   // => ven. janv. 02 2015

// Japanese
date.dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
date.hour12.meridian = ['午前', '午後'];

date.format(new Date(), 'YYYY年MM月DD日(E) Ahh時');   // => 2015年01月02日(金) 午前10時
```

## For developers in Japan (about [12-hour clock](http://en.wikipedia.org/wiki/12-hour_clock))
日本では時刻を午前と午後に分ける12時間制の表現が英米式と異なるばかりでなく、それ自体に曖昧さがあり、しばしば混乱が生じます。  
そのため日本のシステム開発の現場では多くの場合24時間制が用いられるかと思いますが、念のため12時間制を用いる必要が生じた場合の対策方法について説明します。  
まず、日本での12時間制についてはWikipediaの[こちらのページ](http://ja.wikipedia.org/wiki/%E5%8D%88%E5%89%8D%E3%81%A8%E5%8D%88%E5%BE%8C)で詳しく解説されています。  
`date-and-time`では英米式の12時間制をデフォルト実装しているため、日本向けにロジックのカスタマイズが必要です。以下に例をご紹介します。  

```javascript
var date = require('date-and-time');

// 時刻を12時間制に変換するロジックの書き換え
date.hour12.h = function (d) {
    var h = d.getHours();
    return h > 11 ? h - 12 : h;
};

// 午前/午後を返すロジックの書き換え
date.hour12.A = function (d) {
    return this.meridian[d.getHours() > 11 | 0];
};
```

上記の例はWikipediaで説明されている「日本時計協会」方式です。「日本式」はロジックがより複雑になるため割愛させていただきます。

## Browser Support
Chrome, Firefox, Safari, Opera, and Internet Explorer 6+.

## License
MIT
