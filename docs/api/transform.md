# transform()

Transforms date strings from one format to another. This is a convenience function that combines parse() and format() operations.

## Syntax

```typescript
transform(dateString, sourceFormat, targetFormat[, parserOptions, formatterOptions])
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `dateString` | `string` | Yes | The input date string to transform |
| `sourceFormat` | `string \| CompiledObject` | Yes | Source format pattern or compiled pattern |
| `targetFormat` | `string \| CompiledObject` | Yes | Target format pattern or compiled pattern |
| `parserOptions` | `ParserOptions` | No | Options for parsing the source string |
| `formatterOptions` | `FormatterOptions` | No | Options for formatting the target string |

### Returns

`string` - The transformed date string in the target format

## Basic Examples

### Format Transformation

```typescript
import { transform } from 'date-and-time';

// ISO to US format
const result = transform('2025-08-23', 'YYYY-MM-DD', 'MM/DD/YYYY');
console.log(result); // '08/23/2025'

// Add time components
const withTime = transform('2025-08-23', 'YYYY-MM-DD', 'DD/MM/YYYY HH:mm:ss');
console.log(withTime); // '23/08/2025 00:00:00'
```

### Time Format Conversion

```typescript
// 24-hour to 12-hour format
const time12 = transform('14:30:45', 'HH:mm:ss', 'h:mm:ss A');
console.log(time12); // '2:30:45 PM'

// 12-hour to 24-hour format
const time24 = transform('2:30:45 PM', 'h:mm:ss A', 'H:mm:ss');
console.log(time24); // '14:30:45'
```

### With Localized Formats

```typescript
import es from 'date-and-time/locales/es';

// Transform Spanish to English UTC
const localized = transform(
  'viernes, 23 ago 2025 14:30:45 GMT+0200',
  'dddd, DD MMM YYYY HH:mm:ss [GMT]Z',
  'ddd, DD MMM YYYY HH:mm:ss [GMT]',
  { locale: es }
);
console.log(localized); // 'Fri, 23 Aug 2025 12:30:45 GMT'
```

### Using Compiled Patterns

```typescript
import { compile, transform } from 'date-and-time';

// Precompile for better performance
const sourcePattern = compile('YYYY-MM-DD HH:mm:ss');
const targetPattern = compile('DD/MM/YYYY h:mm:ss A');

const result = transform(
  '2025-08-23 14:30:45',
  sourcePattern,
  targetPattern
);
console.log(result); // '23/08/2025 2:30:45 PM'
```

## Use Cases

### API Response Transformation

```typescript
function normalizeApiDates(apiResponse: any) {
  // Transform API dates to display format
  if (apiResponse.created_at) {
    apiResponse.created_at = transform(
      apiResponse.created_at,
      'YYYY-MM-DD[T]HH:mm:ss[Z]',
      'MMM DD, YYYY [at] h:mm A'
    );
  }
  return apiResponse;
}

const data = { created_at: '2025-08-23T14:30:45Z' };
console.log(normalizeApiDates(data));
// { created_at: 'Aug 23, 2025 at 2:30 PM' }
```

### Batch Format Conversion

```typescript
function convertDateFormats(dates: string[], sourceFormat: string, targetFormat: string) {
  return dates.map(date => transform(date, sourceFormat, targetFormat));
}

const dates = ['2025-08-23', '2025-08-24', '2025-08-25'];
const converted = convertDateFormats(dates, 'YYYY-MM-DD', 'DD/MM/YYYY');
console.log(converted);
// ['23/08/2025', '24/08/2025', '25/08/2025']
```

### Form Input Standardization

```typescript
function standardizeUserInput(userDate: string, userFormat: string) {
  // Always convert user input to ISO format for storage
  return transform(userDate, userFormat, 'YYYY-MM-DD');
}

const userInput = '23/08/2025';
const standardized = standardizeUserInput(userInput, 'DD/MM/YYYY');
console.log(standardized); // '2025-08-23'
```

## Implementation Details

The `transform()` function is a convenience wrapper that internally:

1. Parses the input string using the source format
2. Formats the resulting Date object using the target format

```typescript
// transform() is equivalent to:
const date = parse(dateString, sourceFormat);
const result = format(date, targetFormat);

// But provides a cleaner API:
const result = transform(dateString, sourceFormat, targetFormat);
```

## See Also

- [`format()`](./format) - Format Date objects using compiled patterns
- [`compile()`](./compile) - Precompile format patterns for performance
