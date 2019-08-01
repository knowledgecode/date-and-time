# Plugins
As this library is oriented towards minimalism, it might be lacking in functionality for some people. Plugin is the most realistic solution for solving such dissatisfaction.

## Usage
In this section it describes how to use official plugins.

- Node.js:
```javascript
const date = require('date-and-time');
require('date-and-time/plugin/foobar');

date.plugin('foobar');
```

- ES6 transpiler:
```javascript
import date from 'date-and-time';
import 'date-and-time/plugin/foobar';

date.plugin('foobar');
```

- Browser:
```html
<script src="/path/to/date-and-time.min.js"></script>
<script src="/path/to/plugin/foobar.js"></script>

<script>
date.plugin('foobar');
</script>
```

---

## Official Plugins

### Meridiem
Extends meridiem notation (`AA`, `a` and `aa`).

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

### Ordinal
Adds ordinal notation (`DDD`).

```javascript
// Import "ordinal" plugin.
date.plugin('ordinal');

// These are default D/DD tokens.
date.format(new Date(), 'MMM. D YYYY');     // => Jan. 1 2019
date.format(new Date(), 'MMM. DD YYYY');    // => Jan. 01 2019

// DDD token outputs ordinal number of day.
date.format(new Date(), 'MMM. DDD YYYY');   // => Jan. 1st 2019
```

## Extension
You could not only use existing plugins, but define your own tokens or modify existing tokens behavior.

### WIP