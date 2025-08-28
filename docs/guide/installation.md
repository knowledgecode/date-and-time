# Installation

Get started with date-and-time in your project using your preferred package manager.

## Package Manager Installation

::: code-group

```bash [npm]
npm install date-and-time
```

```bash [yarn]
yarn add date-and-time
```

```bash [pnpm]
pnpm add date-and-time
```

:::

## Requirements

### Runtime Requirements

- **Node.js**: Version 18.0.0 or higher
- **Browsers**: ES2021 support required

### Development Requirements (optional)

- **TypeScript**: Version 4.5 or higher for full type support
- **Modern bundler**: For optimal tree-shaking (Webpack 5+, Rollup, Vite, etc.)

## Import Methods

date-and-time supports both ES Modules and CommonJS, allowing you to use the import style that best fits your project.

### ES Modules (Recommended)

```typescript
import { format, parse } from 'date-and-time';

format(new Date(), 'YYYY/MM/DD');
// => 2025/08/23
```

### CommonJS

```typescript
const { format, parse } = require('date-and-time');

format(new Date(), 'YYYY/MM/DD');
// => 2025/08/23
```

## Importing Locales and Timezones

Locales and timezones are distributed as separate modules to support tree shaking:

### Locale Imports

```typescript
// Import specific locales
import ja from 'date-and-time/locales/ja';
import es from 'date-and-time/locales/es';
import fr from 'date-and-time/locales/fr';

// Use in formatting
format(new Date(), 'YYYY年M月D日', { locale: ja });
format(new Date(), 'D [de] MMMM [de] YYYY', { locale: es });
format(new Date(), 'D MMMM YYYY', { locale: fr });
```

For a complete list of all supported locales with import examples, see [Supported Locales](../locales).

### Timezone Imports

```typescript
// Import specific timezones
import Tokyo from 'date-and-time/timezones/Asia/Tokyo';
import New_York from 'date-and-time/timezones/America/New_York';
import London from 'date-and-time/timezones/Europe/London';

// Use in operations
format(new Date(), 'YYYY-MM-DD HH:mm:ss', { timeZone: Tokyo });
format(new Date(), 'YYYY-MM-DD HH:mm:ss', { timeZone: New_York });
```

For a complete list of all supported timezones with import examples, see [Supported Timezones](../timezones).

### Numeral Systems

```typescript
// Import numeral systems
import arab from 'date-and-time/numerals/arab';
import beng from 'date-and-time/numerals/beng';

format(new Date(), 'DD/MM/YYYY', { numeral: arab });
// => ٠٨/٠٧/٢٠٢٥
```

## Plugin Imports

Some advanced features are available as plugins:

```typescript
import { format } from 'date-and-time';
// Import specific plugins
import microsecond from 'date-and-time/plugins/microsecond';
import ordinal from 'date-and-time/plugins/ordinal';
import zonename from 'date-and-time/plugins/zonename';

// Use plugin-specific tokens with plugins specified in options
format(new Date(), 'MMMM DDD, YYYY', { plugins: [ordinal] }); // with ordinal plugin
format(new Date(), 'HH:mm:ss.SSSSSS', { plugins: [microsecond] }); // with microsecond plugin
```

## CDN Usage

For browser-only projects, you can use date-and-time directly from a CDN:

### ES Modules via CDN

```html
<script type="module">
  import { format } from 'https://cdn.skypack.dev/date-and-time';
  
  console.log(format(new Date(), 'YYYY/MM/DD'));
</script>
```

### Via unpkg

```html
<script type="module">
  import { format } from 'https://unpkg.com/date-and-time@4/dist/index.js';
  
  console.log(format(new Date(), 'YYYY/MM/DD'));
</script>
```

## Bundle Size

::: tip Tree Shaking Benefits
date-and-time is built with tree-shaking in mind. You only bundle the functions and locales you actually use, resulting in optimal bundle sizes. Modern bundlers like Webpack 5, Rollup, and Vite automatically eliminate unused code, ensuring your application stays lightweight.
:::

## Verification

After installation, verify that the library works correctly:

```typescript
import { format } from 'date-and-time';

console.log(format(new Date(), 'YYYY/MM/DD HH:mm:ss'));
// Should output current date in YYYY/MM/DD HH:mm:ss format
```

## Next Steps

Now that you have date-and-time installed, you can:

1. **[Quick Start](./quick-start)** - Learn the basics with simple examples
2. **[API Reference](/api/)** - Dive deep into all available functions

## Troubleshooting

### TypeScript Issues

If you encounter TypeScript errors, ensure you're using TypeScript 4.5+ and have the latest version of date-and-time:

```bash
npm install typescript@latest date-and-time@latest
```

### Module Resolution Issues

For Node.js projects using ES Modules, ensure your `package.json` includes:

```json
{
  "type": "module"
}
```

For CommonJS projects, this field should be omitted or set to `"commonjs"`.
