---
title: Plugins
---

`date-and-time` adopts a plugin system. Special tokens used relatively infrequently are provided as plugins outside the main library. By adding plugins as needed, you can use those tokens in `Formatter` and `Parser`. Here, `Formatter` refers to the output engine used by the `format` function, and `Parser` refers to the parsing engine used by the `parse`, `preparse`, and `isValid` functions. These engines are extended by adding plugins as arguments to these functions.

## Installation

### ESModules (Recommended)

```typescript
import { format } from 'date-and-time';
import { formatter as foobar } from 'date-and-time/plugins/foobar';

format(new Date(), 'ddd, MMM DD YYYY', { plugins: [foobar] });
```

### CommonJS

```typescript
const { format } = require('date-and-time');
const foobar = require('date-and-time/plugins/foobar');

format(new Date(), 'ddd, MMM DD YYYY', { plugins: [foobar.formatter] });
```

## day-of-week

This plugin adds tokens to the `Parser` for reading the day of the week. Since the day of the week does not provide information that identifies a specific date, it is a meaningless token, but it can be used to skip that portion when the string you want to read contains a day of the week.

### Parser

| Token | Meaning             | Input Examples |
|-------|---------------------|----------------|
| dddd  | Full day name       | Friday, Sunday |
| ddd   | Short day name      | Fri, Sun       |
| dd    | Very short day name | Fr, Su         |

```typescript
import { parse } from 'date-and-time';
import { parser as day_of_week } from 'date-and-time/plugins/day-of-week';

parse(
  'Thursday, March 05, 2020', 'dddd, MMMM, D YYYY',
  { plugins: [day_of_week] }
);
```

## microsecond

This plugin adds tokens to the `Parser` for reading microseconds. Since the precision of JavaScript's Date type is milliseconds, these tokens are meaningless, but they can be used to skip that portion when the string you want to read contains microseconds.

### Parser

| Token  | Meaning              | Input Examples |
|--------|----------------------|----------------|
| SSSSSS | 6-digit milliseconds | 123456, 000001 |
| SSSSS  | 5-digit milliseconds | 12345, 00001   |
| SSSS   | 4-digit milliseconds | 1234, 0001     |
| fff    | 3-digit microseconds | 753, 022       |
| ff     | 2-digit microseconds | 75, 02         |
| f      | 1-digit microseconds | 7, 0           |

```typescript
import { parse } from 'date-and-time';
import { parser as microsecond } from 'date-and-time/plugins/microsecond';

parse('12:34:56.123456', 'HH:mm:ss.SSSSSS', { plugins: [microsecond] });
parse('12:34:56 123.456', 'HH:mm:ss SSS.fff', { plugins: [microsecond] });
```

## nanosecond

This plugin adds tokens to the `Parser` for reading nanoseconds. Since the precision of JavaScript's Date type is milliseconds, these tokens are meaningless, but they can be used to skip that portion when the string you want to read contains nanoseconds.

### Parser

| Token     | Meaning              | Input Examples       |
|-----------|----------------------|----------------------|
| SSSSSSSSS | 9-digit milliseconds | 123456789, 000000001 |
| SSSSSSSS  | 8-digit milliseconds | 12345678, 00000001   |
| SSSSSSS   | 7-digit milliseconds | 1234567, 0000001     |
| FFF       | 3-digit nanoseconds  | 753, 022             |
| FF        | 2-digit nanoseconds  | 75, 02               |
| F         | 1-digit nanoseconds  | 7, 0                 |

```typescript
import { parse } from 'date-and-time';
import { parser as microsecond } from 'date-and-time/plugins/microsecond';
import { parser as nanosecond } from 'date-and-time/plugins/nanosecond';

parse(
  '12:34:56.123456789',
  'HH:mm:ss.SSSSSSSSS',
  { plugins: [microsecond, nanosecond] }
);

parse(
  '12:34:56 123456.789',
  'HH:mm:ss SSSSSS.FFF',
  { plugins: [microsecond, nanosecond] }
);
```

## ordinal

This plugin adds tokens to the `Formatter` and `Parser` for outputting or reading ordinal representations of days. This ordinal representation is limited to English and is not supported for locales other than English.

### Formatter

| Token | Meaning                       | Output Examples |
|-------|-------------------------------|-----------------|
| DDD   | Ordinal representation of day | 1st, 2nd, 3rd   |

```typescript
import { format } from 'date-and-time';
import { formatter as ordinal } from 'date-and-time/plugins/ordinal';

format(new Date(), 'MMM DDD YYYY', { plugins: [ordinal] });
// => Jan 1st 2019
```

### Parser

| Token | Meaning                       | Input Examples |
|-------|-------------------------------|----------------|
| DDD   | Ordinal representation of day | 1st, 2nd, 3rd  |

```typescript
import { parse } from 'date-and-time';
import { parser as ordinal } from 'date-and-time/plugins/ordinal';

parse('Jan 1st 2019', 'MMM DDD YYYY', { plugins: [ordinal] });
```

## quarter

This plugin adds a token to the `Formatter` for outputting the quarter of the year.

### Formatter

| Token | Meaning         | Output Examples |
|-------|-----------------|-----------------|
| Q     | Quarter of year | 1, 2, 3, 4      |

```typescript
import { format } from 'date-and-time';
import { formatter as quarter } from 'date-and-time/plugins/quarter';

format(new Date(2025, 0, 1), 'YYYY [Q]Q', { plugins: [quarter] });
// => 2025 Q1
format(new Date(2025, 9, 1), 'YYYY [Q]Q', { plugins: [quarter] });
// => 2025 Q4
```

## timestamp

This plugin adds tokens to the `Formatter` for outputting Unix timestamps.

### Formatter

| Token | Meaning                       | Output Examples  |
|-------|-------------------------------|------------------|
| t     | Unix timestamp (seconds)      | 0, 1000000000    |
| T     | Unix timestamp (milliseconds) | 0, 1000000000000 |

```typescript
import { format } from 'date-and-time';
import { formatter as timestamp } from 'date-and-time/plugins/timestamp';

format(new Date(1000000000000), 't', { plugins: [timestamp] });
// => 1000000000
format(new Date(1000000000000), 'T', { plugins: [timestamp] });
// => 1000000000000
```

## two-digit-year

This plugin adds tokens to the `Parser` for reading 2-digit years. This token identifies years based on the following rules:

- Values of 70 or above are interpreted as 1900s
- Values of 69 or below are interpreted as 2000s

### Parser

| Token | Meaning      | Input Examples |
|-------|--------------|----------------|
| YY    | 2-digit year | 90, 00, 08, 19 |

```typescript
import { parse } from 'date-and-time';
import { parser as two_digit_year } from 'date-and-time/plugins/two-digit-year';

parse('Dec 25 69', 'MMM DD YY', { plugins: [two_digit_year] });
// => Dec 25 2069
parse('Dec 25 70', 'MMM DD YY', { plugins: [two_digit_year] });
// => Dec 25 1970
```

## week

This plugin adds tokens to the `Formatter` for outputting ISO week dates. These tokens follow
the ISO 8601 week date system, where weeks start on Monday and the first week of
the year is the one that contains the first Thursday.

### Formatter

| Token | Meaning                             | Output Examples |
|-------|-------------------------------------|-----------------|
| W     | ISO week number                     | 1, 27, 53       |
| WW    | ISO week number (zero-padded)       | 01, 27, 53      |
| G     | ISO week year                       | 2024, 2025      |
| GG    | ISO week year (2-digit zero-padded) | 24, 25          |
| GGGG  | ISO week year (4-digit zero-padded) | 2024, 2025      |

```typescript
import { format } from 'date-and-time';
import { formatter as week } from 'date-and-time/plugins/week';

format(new Date(2024, 0, 1), 'GGGG-[W]WW', { plugins: [week] });
// => 2024-W01

// Note: Dec 30, 2024 belongs to ISO week year 2025
format(new Date(2024, 11, 30), 'YYYY vs GGGG [W]W', { plugins: [week] });
// => 2024 vs 2025 W1
```

## zonename

This plugin adds tokens to the `Formatter` for outputting timezone names. These timezone names are limited to English and are not supported for locales other than English.

### Formatter

| Token | Meaning             | Output Examples       |
|-------|---------------------|-----------------------|
| z     | Short timezone name | PST, EST              |
| zz    | Long timezone name  | Pacific Standard Time |

```typescript
import { format } from 'date-and-time';
import { formatter as zonename } from 'date-and-time/plugins/zonename';

format(
  new Date(),
  'MMMM DD YYYY H:mm zz',
  { plugins: [zonename] }
);
// March 14 2021 1:59 Pacific Standard Time

format(
  new Date(),
  'MMMM DD YYYY H:mm z',
  { plugins: [zonename], timeZone: 'Asia/Tokyo' }
);
// March 14 2021 18:59 JST
```
