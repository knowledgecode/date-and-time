# date-and-time

<div align="center">
  <img src="https://raw.githubusercontent.com/knowledgecode/date-and-time/refs/heads/master/logo.png" alt="date-and-time" width="256">
</div>

<div align="center">

[![CI](https://github.com/knowledgecode/date-and-time/actions/workflows/test.yml/badge.svg)](https://github.com/knowledgecode/date-and-time/actions/workflows/test.yml)
[![Coverage](https://raw.githubusercontent.com/knowledgecode/date-and-time/refs/heads/master/.github/badges/coverage.svg)](https://github.com/knowledgecode/date-and-time/actions/workflows/test.yml)
[![npm](https://img.shields.io/npm/v/date-and-time)](https://www.npmjs.com/package/date-and-time)

</div>

The simplest, most intuitive date and time library.

## Installation

```shell
npm install date-and-time
```

### ES Modules (Recommended)

```typescript
import { format } from 'date-and-time';

format(new Date(), 'ddd, MMM DD YYYY');
// => Wed, Jul 09 2025
```

### CommonJS

```typescript
const { format } = require('date-and-time');

format(new Date(), 'ddd, MMM DD YYYY');
// => Wed, Jul 09 2025
```

## CDN Usage

### Via jsDelivr

```html
<script type="module">
  import { format } from 'https://cdn.jsdelivr.net/npm/date-and-time/dist/index.js';

  console.log(format(new Date(), 'YYYY/MM/DD'));
</script>
```

### Via unpkg

```html
<script type="module">
  import { format } from 'https://unpkg.com/date-and-time/dist/index.js';

  console.log(format(new Date(), 'YYYY/MM/DD'));
</script>
```

## Migration

Version `4.x` has been completely rewritten in TypeScript and some features from `3.x` are no longer compatible. The main changes are as follows:

- The `timezone` and `timespan` plugins have been integrated into the main library
- Tree shaking is now supported
- Supports `ES2021` and no longer supports older browsers

For details, please refer to [migration.md](https://github.com/knowledgecode/date-and-time/blob/master/docs/migration.md).

## API

For comprehensive documentation and examples, visit: **[GitHub Pages](https://knowledgecode.github.io/date-and-time/)**

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
