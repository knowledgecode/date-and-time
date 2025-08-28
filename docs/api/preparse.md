# preparse()

Pre-parses date strings and returns intermediate parsing results. This function is useful when you need to examine parsing details before creating a final Date object.

## Syntax

```typescript
preparse(dateString, formatString[, options])
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dateString` | `string` | Yes | The date string to parse |
| `formatString` | `string \| CompiledObject` | Yes | Format pattern string or compiled object |
| `options` | `ParserOptions` | No | Parsing options for customization (see [`parse()`](./parse) for details) |

### Returns

`ParseResult` - Object containing parsed date components

```typescript
interface ParseResult {
  Y?: number        // Year
  M?: number        // Month (1-12)
  D?: number        // Day
  H?: number        // Hours (24-hour format, 0-23)
  A?: number        // AM/PM (0 = AM, 1 = PM)
  h?: number        // Hours (12-hour format, 1-12)
  m?: number        // Minutes (0-59)
  s?: number        // Seconds (0-59)
  S?: number        // Milliseconds (0-999)
  SS?: number       // 2-digit milliseconds (0-99)
  SSS?: number      // 3-digit milliseconds (0-999)
  Z?: number        // Timezone offset in minutes
  _index?: number   // Current parsing position
  _length?: number  // Total length of input string
  _match?: number   // Number of matched tokens
}
```

## Basic Examples

### Simple Date Parsing

```typescript
import { preparse } from 'date-and-time';

const result = preparse('2025-08-23 14:30:45', 'YYYY-MM-DD HH:mm:ss');
console.log(result);
// {
//   Y: 2025,
//   M: 8,
//   D: 23,
//   H: 14,
//   m: 30,
//   s: 45
// }
```

### With 12-hour Format

```typescript
const result = preparse('2025-08-23 2:30:45 PM', 'YYYY-MM-DD h:mm:ss A');
console.log(result);
// {
//   Y: 2025,
//   M: 8,
//   D: 23,
//   A: 1,    // PM
//   h: 2,
//   m: 30,
//   s: 45
// }
```

### With Localized Content

```typescript
import { preparse } from 'date-and-time';
import ja from 'date-and-time/locales/ja';

const result = preparse('2025年8月23日', 'YYYY年M月D日', { locale: ja });
console.log(result);
// {
//   Y: 2025,
//   M: 8,
//   D: 23
// }
```

## ParserOptions

The `options` parameter accepts the same `ParserOptions` as the [`parse()`](./parse#parseroptions) function. This includes locale, timezone, numeral system, calendar, case sensitivity, and hour format settings. Refer to the parse documentation for complete details on all available options.

## Use Cases

### Validation Before Parsing

```typescript
import { preparse, parse, isValid } from 'date-and-time';

function safeParse(dateString: string, format: string) {
  const result = preparse(dateString, format);
  
  // Check if required components are present
  if (result.Y && result.M && result.D) {
    return parse(dateString, format);
  }
  
  throw new Error('Missing required date components');
}
```

### Custom Date Validation

```typescript
function validateBusinessDay(dateString: string, format: string) {
  const result = preparse(dateString, format);
  
  if (result.Y && result.M && result.D) {
    const date = new Date(result.Y, result.M - 1, result.D);
    const dayOfWeek = date.getDay();
    
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      throw new Error('Business days only (Monday-Friday)');
    }
    
    return date;
  }
  
  throw new Error('Invalid date format');
}
```

## Error Handling

If parsing fails, `preparse()` returns an object with parsing metadata but without the main date components (Y, M, D, H, etc.).

```typescript
const result = preparse('invalid-date', 'YYYY-MM-DD');
console.log(result);
// {
//   _index: 0,
//   _length: 12,
//   _match: 0
// }

// Check for successful parsing by looking for date components
if (!result.Y && !result.M && !result.D) {
  console.log('Parsing failed - no date components found');
}

// Alternative: check the _match property
if (result._match === 0) {
  console.log('Parsing failed - no tokens matched');
}
```

## See Also

- [`parse()`](./parse) - Parse formatted date strings into Date objects
- [`compile()`](./compile) - Precompile format patterns for performance
- [`isValid()`](./isValid) - Validate date string formats
