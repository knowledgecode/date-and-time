# Plugins

As this library is oriented towards minimalism, it might be lacking in functionality for some developers. Plugin is the most realistic solution for solving such dissatisfaction.

## Usage

In this section it describes how to use official plugins.

- Node.js:

```javascript
const date = require('date-and-time');
require('date-and-time/plugin/foobar');

date.plugin('foobar');
```

- With a transpiler:

```javascript
import date from 'date-and-time';
import 'date-and-time/plugin/foobar';

date.plugin('foobar');
```

- With an older browser:

```html
<script src="/path/to/date-and-time.min.js"></script>
<script src="/path/to/plugin/foobar.js"></script>

<script>
date.plugin('foobar');
</script>
```

---

## Official Plugins

### 1. Meridiem

This plugin extends meridiem notation (`AA`, `a` and `aa`).

```javascript
// Import "medidiem" plugin.
date.plugin('meridiem');

// This is a default A token.
date.format(new Date(), 'hh:mm A');     // => '12:34 p.m.'

// These are extended tokens.
date.format(new Date(), 'hh:mm AA');    // => '12:34 PM'
date.format(new Date(), 'hh:mm a');     // => '12:34 P.M.'
date.format(new Date(), 'hh:mm aa');    // => '12:34 pm'

// The parse() comes to interpret all these meridiem notation with only A token.
date.parse('12:34 p.m.', 'hh:mm A');    // => Jan. 1 1970 12:34:00
date.parse('12:34 PM', 'hh:mm A');      // => Jan. 1 1970 12:34:00
date.parse('12:34 P.M.', 'hh:mm A');    // => Jan. 1 1970 12:34:00
date.parse('12:34 pm', 'hh:mm A');      // => Jan. 1 1970 12:34:00

// The new tokens cannot be used unlike the format().
date.parse('12:34 PM', 'hh:mm AA');     // => Invalid Date
```

### 2. Ordinal

This plugin adds ordinal notation (`DDD`).

```javascript
// Import "ordinal" plugin.
date.plugin('ordinal');

// These are default D/DD tokens.
date.format(new Date(), 'MMM. D YYYY');     // => Jan. 1 2019
date.format(new Date(), 'MMM. DD YYYY');    // => Jan. 01 2019

// The DDD token outputs ordinal number of day.
date.format(new Date(), 'MMM. DDD YYYY');   // => Jan. 1st 2019
```

---

## Writing a Plugin

You could not only use official plugins, but define your own tokens or modify the behavior of existing tokens. Hereafter, it describes about how to write your own plugin.

Tokens in this library have the following rules:

- All of the characters must be the same alphabet (`A-Z, a-z`).

```javascript
'E'             // Good
'EE'            // Good
'EEEEEEEEEE'    // Good, but why so long!?
'EES'           // Not good
'???'           // Not good
```

- It is case sensitive.

```javascript
'eee'           // Good
'Eee'           // Not good
```

- To the parser, it is not able to add new alphabet's token.  

```javascript
'EEE'           // This is not able to add.
'YYY'           // This is OK because a `Y` token is existing in the parser.
'SSS'           // This is modifying, not adding. Because the same token is existing.
```

### Example 1

This is a plugin named `AMPM`. It replaces the meridiem words from `a.m./p.m.` to `AM/PM`.

```javascript
(global => {

  const exec = date => {
    // This is the body of the plugin.
    date.plugin('AMPM', {
      res: {
        A: ['AM', 'PM']
      }
    });
  };

  if (typeof module === 'object' && typeof module.exports === 'object') {
    (module.paths || []).push('./');
    exec(require('date-and-time'));
  } else if (typeof define === 'function' && define.amd) {
    define(['date-and-time'], exec);
  } else {
    exec(global.date);
  }

})(this);
```

### Example 2

This is the above `ordinal` plugin. This plugin adds `DDD` token to return ordinal number of day.

```javascript
(global => {

  const exec = date => {
    // This is the body of the plugin.
    date.plugin('ordinal', {
      formatter: {
        DDD: function (d) {
          var day = d.getDate();

          switch (day) {
          case 1:
          case 21:
          case 31:
              return day + 'st';
          case 2:
          case 22:
              return day + 'nd';
          case 3:
          case 23:
              return day + 'rd';
          default:
              return day + 'th';
          }
        }
      }
    });
  };

  if (typeof module === 'object' && typeof module.exports === 'object') {
    (module.paths || []).push('./');
    exec(require('date-and-time'));
  } else if (typeof define === 'function' && define.amd) {
    define(['date-and-time'], exec);
  } else {
    exec(global.date);
  }

})(this);
```

---

## Direct Replacement

All you are enough to change a bit the default behavior of this library? You are not going to write a plugin? Of course, you could replace the default behavior directly like this:

```javascript
date.format(new Date(), 'hh:mm A'); // => 11:20 p.m.

// Replace the words that a.m./p.m. to AM/PM.
date.extend({ res: { A: ['AM', 'PM'] } });

date.format(new Date(), 'hh:mm A'); // => 11:20 PM
```

### Hint

The `extend()` can be regarded as an unnamed `plugin()`.
