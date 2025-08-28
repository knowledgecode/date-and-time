# Plugins

`date-and-time` adopts a plugin system. Special tokens that are considered to be used relatively infrequently are provided as plugins outside the main library. By adding plugins as needed, you can use those tokens in `Formatter` and `Parser`. Here, `Formatter` refers to the output engine used by the `format` function, and `Parser` refers to the parsing engine used by the `parse`, `preparse`, and `isValid` functions. These engines are extended by adding plugins as arguments to these functions.

## Install

- ESModules:

```typescript
import { format } from 'date-and-time';
import foobar from 'date-and-time/plugins/foobar';

format(new Date(), 'ddd, MMM DD YYYY', { plugins: [foobar] });
```

- CommonJS:

```typescript
const { format } = require('date-and-time');
const foobar = require('date-and-time/plugins/foobar');

format(new Date(), 'ddd, MMM DD YYYY', { plugins: [foobar] });
```

## Plugin List

<details open>
<summary><strong>day-of-week</strong></summary>

You can add tokens to the `Parser` to read day of the week. Since day of the week is not information that can identify a specific date, it is actually a meaningless token, but it can be used to skip that portion when the string you want to read contains a day of the week.

`Parser`:

| Token    | Meaning                            | Input Examples |
|:---------|:-----------------------------------|:---------------|
| dddd     | Full day name                      | Friday, Sunday |
| ddd      | Short day name                     | Fri, Sun       |
| dd       | Very short day name                | Fr, Su         |

```typescript
import { parse } from 'date-and-time';
import day_of_week from 'date-and-time/plugins/day_of_week';

parse(
  'Thursday, March 05, 2020', 'dddd, MMMM, D YYYY',
  { plugins: [day_of_week] }
);
```

</details>

<details open>
<summary><strong>microsecond</strong></summary>

You can add tokens to the `Parser` to read microseconds. Since the precision of JavaScript's Date type is milliseconds, these tokens are actually meaningless, but they can be used to skip that portion when the string you want to read contains microseconds.

`Parser`:

| Token     | Meaning                          | Input Examples |
|:----------|:---------------------------------|:---------------|
| SSSSSS    | 6-digit milliseconds             | 123456, 000001 |
| SSSSS     | 5-digit milliseconds             | 12345, 00001   |
| SSSS      | 4-digit milliseconds             | 1234, 0001     |
| fff       | 3-digit microseconds             | 753, 022       |
| ff        | 2-digit microseconds             | 75, 02         |
| f         | 1-digit microseconds             | 7, 0           |

```typescript
import { parse } from 'date-and-time';
import microsecond from 'date-and-time/plugins/microsecond';

parse('12:34:56.123456', 'HH:mm:ss.SSSSSS', { plugins: [microsecond] });
parse('12:34:56 123.456', 'HH:mm:ss SSS.fff', { plugins: [microsecond] });
```

</details>

<details open>
<summary><strong>nanosecond</strong></summary>

You can add tokens to the `Parser` to read nanoseconds. Since the precision of JavaScript's Date type is milliseconds, these tokens are actually meaningless, but they can be used to skip that portion when the string you want to read contains nanoseconds.

`Parser`:

| Token     | Meaning                          | Input Examples       |
|:----------|:---------------------------------|:---------------------|
| SSSSSSSSS | 9-digit milliseconds             | 123456789, 000000001 |
| SSSSSSSS  | 8-digit milliseconds             | 12345678, 00000001   |
| SSSSSSS   | 7-digit milliseconds             | 1234567, 0000001     |
| FFF       | 3-digit nanoseconds              | 753, 022             |
| FF        | 2-digit nanoseconds              | 75, 02               |
| F         | 1-digit nanoseconds              | 7, 0                 |

```typescript
import { parse } from 'date-and-time';
import microsecond from 'date-and-time/plugins/microsecond';
import nanosecond from 'date-and-time/plugins/nanosecond';

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

</details>

<details open>
<summary><strong>ordinal</strong></summary>

You can add tokens to the `Formatter` and `Parser` to output or read ordinal representations of days. This ordinal representation is limited to English and is not supported for locales other than English.

`Formatter`:

| Token     | Meaning                          | Output Examples      |
|:----------|:---------------------------------|:---------------------|
| DDD       | Ordinal representation of day    | 1st, 2nd, 3rd        |

```typescript
import { format } from 'date-and-time';
import ordinal from 'date-and-time/plugins/ordinal';

format(new Date(), 'MMM DDD YYYY', { plugins: [ordinal] });
// => Jan 1st 2019
```

`Parser`:

| Token     | Meaning                          | Input Examples       |
|:----------|:---------------------------------|:---------------------|
| DDD       | Ordinal representation of day    | 1st, 2nd, 3rd        |

```typescript
import { parse } from 'date-and-time';
import ordinal from 'date-and-time/plugins/ordinal';

parse('Jan 1st 2019', 'MMM DDD YYYY', { plugins: [ordinal] });
```

</details>

<details open>
<summary><strong>two-digit-year</strong></summary>

You can add tokens to the `Parser` to read 2-digit years. This token identifies years based on the following rules:

- Values of 70 or above are interpreted as 1900s
- Values of 69 or below are interpreted as 2000s

`Parser`:

| Token     | Meaning                          | Input Examples       |
|:----------|:---------------------------------|:---------------------|
| YY        | 2-digit year                     | 90, 00, 08, 19       |

```typescript
import { parse } from 'date-and-time';
import two_digit_year from 'date-and-time/plugins/two-digit-year';

parse('Dec 25 69', 'MMM DD YY', { plugins: [two_digit_year] });
// => Dec 25 2069
parse('Dec 25 70', 'MMM DD YY', { plugins: [two_digit_year] });
// => Dec 25 1970
```

</details>

<details open>
<summary><strong>zonename</strong></summary>

You can add tokens to the `Formatter` to output timezone names. These timezone names are limited to English and are not supported for locales other than English.

`Formatter`:

| Token    | Meaning                          | Output Examples       |
|:---------|:---------------------------------|:----------------------|
| z        | Short timezone name             | PST, EST              |
| zz       | Long timezone name              | Pacific Standard Time |

```typescript
import { parse } from 'date-and-time';
import zonename from 'date-and-time/plugins/zonename';
import Tokyo from 'date-and-time/timezones/Asia/Tokyo';

format(
  new Date(),
  'MMMM DD YYYY H:mm zz',
  { plugins: [zonename] }
);
// March 14 2021 1:59 Pacific Standard Time

format(
  new Date(),
  'MMMM DD YYYY H:mm z',
  { plugins: [zonename], timeZone: Tokyo }
);
// March 14 2021 18:59 JST
```

</details>
