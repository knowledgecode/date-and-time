# compile()

Precompiles a format string into a reusable compiled object for improved performance when the same format pattern is used repeatedly.

## Syntax

```typescript
compile(formatString)
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `formatString` | `string` | Yes | The format pattern to compile |

### Returns

`CompiledObject` - A compiled format object that can be reused with `format()` and `parse()`

## Basic Usage

```typescript
import { compile, format, parse } from 'date-and-time';

// Compile once
const pattern = compile('YYYY-MM-DD HH:mm:ss');

// Use multiple times - much faster than parsing the format string each time
const date1 = new Date(2025, 7, 23, 14, 30, 45);
const date2 = new Date(2025, 7, 24, 9, 15, 30);

const formatted1 = format(date1, pattern);  // => 2025-08-23 14:30:45
const formatted2 = format(date2, pattern);  // => 2025-08-24 09:15:30

// Also works with parse()
const parsed = parse('2025-08-25 16:20:10', pattern);
```

## Performance Benefits

The `compile()` function provides significant performance improvements for repeated operations:

### Without Compilation (Slower)

```typescript
import { format } from 'date-and-time';

const dates = Array.from({ length: 1000 }, () => new Date());

// Format string is parsed 1000 times
dates.forEach(date => {
  format(date, 'YYYY-MM-DD HH:mm:ss.SSS [GMT]ZZ');
});
```

### With Compilation (Faster)

```typescript
import { format, compile } from 'date-and-time';

const dates = Array.from({ length: 1000 }, () => new Date());
const pattern = compile('YYYY-MM-DD HH:mm:ss.SSS [GMT]ZZ');

// Format string is compiled once, reused 1000 times
dates.forEach(date => {
  format(date, pattern);  // Much faster!
});
```

## Real-world Examples

### Logging System

```typescript
import { compile, format } from 'date-and-time';

class Logger {
  private timestampPattern = compile('\\[YYYY-MM-DD HH:mm:ss.SSS\\]');

  log(level: string, message: string) {
    const timestamp = format(new Date(), this.timestampPattern);
    console.log(`${timestamp} ${level.toUpperCase()}: ${message}`);
  }
}

const logger = new Logger();
logger.log('info', 'Application started');
logger.log('error', 'Database connection failed');
// [2025-08-23 14:30:45.123] INFO: Application started
// [2025-08-23 14:30:45.124] ERROR: Database connection failed
```

### Template Engine Integration

```typescript
import { compile, format } from 'date-and-time';

class EmailTemplateEngine {
  private patterns = {
    timestamp: compile('YYYY-MM-DD HH:mm:ss'),
    friendly: compile('MMMM D, YYYY [at] h:mm A'),
    fileDate: compile('YYYY-MM-DD')
  };
  
  generateEmail(user: string, data: any): string {
    const now = new Date();
    
    return `
      Dear ${user},
      
      This report was generated on ${format(now, this.patterns.friendly)}.
      
      System timestamp: ${format(now, this.patterns.timestamp)}
      Report date: ${format(data.reportDate, this.patterns.fileDate)}
      
      Best regards,
      System
    `.trim();
  }
}

const engine = new EmailTemplateEngine();
const email = engine.generateEmail('John', { 
  reportDate: new Date(2025, 7, 23) 
});
```

### API Response Formatting

```typescript
import { compile, format } from 'date-and-time';

class ApiService {
  private isoPattern = compile('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
  private friendlyPattern = compile('MMMM D, YYYY [at] h:mm A');
  
  formatResponse(data: any[]) {
    return data.map(item => ({
      ...item,
      createdAt: format(item.createdAt, this.isoPattern, { timeZone: 'UTC' }),
      createdAtFriendly: format(item.createdAt, this.friendlyPattern)
    }));
  }
}
```

### Batch File Operations

```typescript
import { compile, format } from 'date-and-time';
import { writeFileSync } from 'fs';

const filenamePattern = compile('YYYY-MM-DD_HH-mm-ss');

function generateReports(data: any[]) {
  const timestamp = format(new Date(), filenamePattern);
  
  data.forEach((report, index) => {
    const filename = `report_${index}_${timestamp}.json`;
    writeFileSync(filename, JSON.stringify(report));
  });
}
```

## Advanced Usage

### Multiple Compiled Patterns

```typescript
import { compile, format } from 'date-and-time';
import en from 'date-and-time/locales/en';
import ja from 'date-and-time/locales/ja';

class MultiFormatHandler {
  private patterns = {
    iso: compile('YYYY-MM-DD[T]HH:mm:ss[Z]'),
    friendly: compile('MMMM D, YYYY [at] h:mm A'),
    japanese: compile('YYYY年M月D日(ddd) HH:mm'),
    filename: compile('YYYYMMDD_HHmmss')
  };
  
  format(date: Date, type: keyof typeof this.patterns) {
    const pattern = this.patterns[type];
    
    switch (type) {
      case 'iso':
        return format(date, pattern, { timeZone: 'UTC' });
      case 'japanese':
        return format(date, pattern, { locale: ja });
      default:
        return format(date, pattern);
    }
  }
}

const handler = new MultiFormatHandler();
const date = new Date();

console.log(handler.format(date, 'iso'));       // => 2025-08-23T14:30:45Z
console.log(handler.format(date, 'friendly'));  // => August 23, 2025 at 2:30 PM
console.log(handler.format(date, 'japanese'));  // => 2025年8月23日(土) 14:30
console.log(handler.format(date, 'filename'));  // => 20250823_143045
```

### Conditional Compilation

```typescript
import { compile, format } from 'date-and-time';

class SmartFormatter {
  private cache = new Map<string, any>();
  
  private getCompiledPattern(formatString: string) {
    if (!this.cache.has(formatString)) {
      this.cache.set(formatString, compile(formatString));
    }
    return this.cache.get(formatString);
  }
  
  format(date: Date, formatString: string, options?: any) {
    const pattern = this.getCompiledPattern(formatString);
    return format(date, pattern, options);
  }
}

const formatter = new SmartFormatter();

// First call compiles the pattern
formatter.format(new Date(), 'YYYY-MM-DD');

// Subsequent calls reuse the compiled pattern
formatter.format(new Date(), 'YYYY-MM-DD');  // Faster!
```

## Best Practices

### 1. Compile Once, Use Many Times

```typescript
// ✅ Good - compile once
const pattern = compile('YYYY-MM-DD HH:mm:ss');
for (const date of dates) {
  format(date, pattern);
}

// ❌ Bad - compiles every time
for (const date of dates) {
  format(date, 'YYYY-MM-DD HH:mm:ss');
}
```

### 2. Cache Compiled Patterns

```typescript
// ✅ Good - cached patterns
class DateFormatter {
  private static patterns = {
    iso: compile('YYYY-MM-DD[T]HH:mm:ss[Z]'),
    short: compile('MM/DD/YYYY'),
    long: compile('MMMM D, YYYY')
  };
  
  static format(date: Date, type: keyof typeof DateFormatter.patterns) {
    return format(date, DateFormatter.patterns[type]);
  }
}
```

### 3. Lazy Compilation

```typescript
// ✅ Good - lazy compilation for dynamic patterns
class DynamicFormatter {
  private cache = new Map<string, CompiledObject>();
  
  format(date: Date, pattern: string) {
    if (!this.cache.has(pattern)) {
      this.cache.set(pattern, compile(pattern));
    }
    return format(date, this.cache.get(pattern)!);
  }
}
```

## See Also

- [`format()`](./format) - Format Date objects using compiled patterns
- [`parse()`](./parse) - Parse date strings using compiled patterns
- [`preparse()`](./preparse) - Parse and return intermediate parsing results
- [`transform()`](./transform) - Transform date strings between formats
