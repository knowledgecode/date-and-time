---
layout: home

hero:
  name: "date-and-time"
  text: "The simplest, most intuitive date and time library"
  tagline: "Modern TypeScript library for date manipulation with full ES Modules support"
  image:
    src: /logo.png
    alt: date-and-time
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: API Reference
      link: /api/
    - theme: alt
      text: View on GitHub
      link: https://github.com/knowledgecode/date-and-time

features:
  - icon: ⚡
    title: Modern & Fast
    details: Written in TypeScript with ES2021 target. Tree-shakable modules for optimal bundle size.

  - icon: 🌍
    title: Internationalization
    details: Support for 40+ locales and multiple calendar systems. Arabic, Bengali, Myanmar numerals.

  - icon: 🕐
    title: Timezone Support
    details: Complete timezone handling with IANA timezone database built-in.

  - icon: 🎯
    title: Type Safe
    details: Full TypeScript support with comprehensive type definitions and IntelliSense.

  - icon: 📦
    title: Tree Shakable
    details: Import only what you need. Optimized for modern bundlers with sideEffects false.

  - icon: 🧩
    title: Plugin System
    details: Extensible plugin system allows you to extend formatters and parsers.
---

## Quick Example

```typescript
import { format, parse, addDays } from 'date-and-time';
import ja from 'date-and-time/locales/ja';
import Tokyo from 'date-and-time/timezones/Asia/Tokyo';

const now = new Date();

// Basic formatting
format(now, 'YYYY/MM/DD HH:mm:ss');
// => 2025/08/23 14:30:45

// Localized formatting
format(now, 'YYYY年M月D日(ddd)', { locale: ja });
// => 2025年8月23日(金)

// Timezone-aware formatting
format(now, 'YYYY-MM-DD HH:mm:ss [JST]', { timeZone: Tokyo });
// => 2025-08-23 23:30:45 JST

// Parsing
const date = parse('2025/08/23 14:30:45', 'YYYY/MM/DD HH:mm:ss');
console.log(date)

// Date arithmetic
const futureDate = addDays(now, 7);
console.log(format(futureDate, 'YYYY/MM/DD'));
```

## Key Features in v4.x

- **🔄 Complete TypeScript rewrite** with enhanced type safety
- **📦 Tree-shaking support** for better bundle optimization  
- **🌍 Integrated timezone and timespan plugins** into the core library
- **🎯 Modern JavaScript** targeting ES2021 (Node.js ≥18 required)
- **🔧 Enhanced API** with options objects instead of boolean flags
- **📚 Improved locale handling** with per-function locale specification

## Browser & Environment Support

- **Node.js**: 18+
- **Browsers**: Chrome 85+, Firefox 78+, Safari 14+, Edge 85+
- **Module Systems**: ES Modules, CommonJS
- **TypeScript**: 4.5+

## Installation

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

## Community

- [GitHub Repository](https://github.com/knowledgecode/date-and-time)
- [npm Package](https://www.npmjs.com/package/date-and-time)
- [Issue Tracker](https://github.com/knowledgecode/date-and-time/issues)
