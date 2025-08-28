# Introduction

**date-and-time** is the simplest, most intuitive date and time library for JavaScript and TypeScript. Built from the ground up with modern development practices, it provides a comprehensive set of tools for date manipulation, formatting, parsing, and timezone handling.

## Why date-and-time?

### 🚀 Modern & Performant

- Written entirely in **TypeScript** with ES2021 target
- **Tree-shakable** modules for optimal bundle size
- **Zero dependencies** for core functionality
- Full **ES Modules** and **CommonJS** support

### 🌍 Internationalization Ready

- Support for **40+ locales** with native month/day names
- Multiple **calendar systems** (Gregorian, Buddhist)
- **Numeral systems** (Latin, Arabic, Bengali, Myanmar)
- **Timezone-aware** formatting and parsing

### 🎯 Developer Experience

- **Full TypeScript** support with comprehensive type definitions
- **IntelliSense** support in modern editors
- **Consistent API** design across all functions
- **Extensive documentation** and examples

### 📦 Production Ready

- **Node.js 18+** support
- **Modern browser** compatibility (Chrome 85+, Firefox 78+, Safari 14+)
- **Comprehensive test suite** with high coverage
- **Battle-tested** in production environments

## Key Features

### Formatting and Parsing

- **`format()`** - Convert Date objects to formatted strings
- **`parse()`** - Parse date strings into Date objects
- **`compile()`** - Precompile format strings for performance
- **`preparse()`** - Parse date strings and return intermediate results
- **`isValid()`** - Validate date string formats
- **`transform()`** - Transform date strings between different formats

### Date Arithmetic

- **`addYears()`, `addMonths()`, `addDays()`** - Date addition
- **`addHours()`, `addMinutes()`, `addSeconds()`, `addMilliseconds()`** - Time addition
- **`subtract()`** - Calculate time differences with Duration objects

### Utility Functions

- **`isLeapYear()`** - Check if a year is a leap year
- **`isSameDay()`** - Check if two dates are on the same day

### Advanced Features

- **Timezone Support** - Comprehensive timezone data from timezonedb
- **Locale Support** - 40+ languages with native formatting
- **Plugin System** - Extensible with microsecond/nanosecond precision
- **Duration Objects** - Rich time difference calculations

## Version 4.x Highlights

Version 4.x represents a complete rewrite with significant improvements:

### 🔄 Breaking Changes

- **TypeScript-first** development approach
- **Integrated plugins** - timezone and timespan functionality built-in
- **New API signatures** - options objects replace boolean parameters
- **Modern JavaScript** - ES2021 features throughout

### 📈 Performance Improvements

- **Reduced bundle size** with tree-shaking

### 🛠 Developer Improvements

- **Expanded language support** - Now supporting 40+ locales
- **Improved TypeScript** inference and completion
- **Comprehensive documentation** with live examples

## Architecture

```typescript
import { format, parse } from 'date-and-time';
import ja from 'date-and-time/locales/ja';
import Tokyo from 'date-and-time/timezones/Asia/Tokyo';

// Core functionality
const date = new Date();
const formatted = format(date, 'YYYY/MM/DD');

// Localized formatting
const localized = format(date, 'YYYY年M月D日', { locale: ja });

// Timezone-aware operations
const tokyoTime = format(date, 'YYYY-MM-DD HH:mm:ss', { timeZone: Tokyo });
```

## Browser and Environment Support

### Node.js

- **Node.js 18.0.0+** (LTS recommended)
- Full ES Modules support
- CommonJS compatibility

### Browsers

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 85+ |
| Firefox | 78+ |
| Safari | 14+ |
| Edge | 85+ |

### Module Systems

- **ES Modules** (`.mjs`, `type: "module"`)
- **CommonJS** (`.cjs`, traditional Node.js)
- **TypeScript** (4.5+)
- **Bundlers** (Webpack, Rollup, Vite, etc.)

## Getting Started

Ready to start using date-and-time? Continue to the [Installation Guide](./installation) to set up the library in your project.
