import { describe, expect, test } from 'vitest';
import { format } from '@/format.ts';
import { parse } from '@/parse.ts';
import { FormatterPlugin, ParserPlugin } from '@/plugin.ts';
import type { FormatterOptions } from '@/formatter.ts';
import type { ParserOptions } from '@/parser.ts';
import type { FormatterPluginObject, ParserPluginObject } from '@/plugin.ts';

describe('FormatterPluginObject', () => {
  test('accepts a non-reserved token as a plain object literal', () => {
    const custom: FormatterPluginObject = { Q: () => '1' };
    expect(typeof custom.Q).toBe('function');
  });

  test('rejects a reserved token as a key', () => {
    // @ts-expect-error - YYYY is a reserved formatter token
    const bad: FormatterPluginObject = { YYYY: () => '' };
    expect(bad).toBeDefined();
  });
});

describe('ParserPluginObject', () => {
  test('accepts a non-reserved token as a plain object literal', () => {
    const custom: ParserPluginObject = { YY: () => ({ value: 0, length: 0 }) };
    expect(typeof custom.YY).toBe('function');
  });

  test('rejects a reserved token as a key', () => {
    // @ts-expect-error - YYYY is a reserved parser token
    const bad: ParserPluginObject = { YYYY: () => ({ value: 0, length: 0 }) };
    expect(bad).toBeDefined();
  });
});

describe('FormatterOptions.plugins', () => {
  test('accepts a FormatterPluginObject', () => {
    const custom: FormatterPluginObject = { Q: () => '1' };
    const options: FormatterOptions = { plugins: [custom] };

    expect(format(new Date(2025, 0, 1), '[Q]Q', options)).toBe('Q1');
  });

  test('accepts a plugin that redefines a built-in token', () => {
    const options: FormatterOptions = { plugins: [{ YYYY: () => 'custom' }] };

    expect(format(new Date(2025, 0, 1), 'YYYY', options)).toBe('custom');
  });

  test('accepts an instance of a class extending FormatterPlugin', () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    class Legacy extends FormatterPlugin {
      YYYY () {
        return 'legacy';
      }
    }
    const options: FormatterOptions = { plugins: [new Legacy()] };

    expect(format(new Date(2025, 0, 1), 'YYYY', options)).toBe('legacy');
  });

  test('rejects a token that is not a function', () => {
    // @ts-expect-error - a token must be a function
    const options: FormatterOptions = { plugins: [{ Q: 1 }] };
    expect(options).toBeDefined();
  });
});

describe('ParserOptions.plugins', () => {
  test('accepts a ParserPluginObject', () => {
    const custom: ParserPluginObject = { YY: (str: string) => ({ value: 2025, length: str.length, token: 'Y' }) };
    const options: ParserOptions = { plugins: [custom] };

    expect(parse('25', 'YY', options).getFullYear()).toBe(2025);
  });

  test('accepts a plugin that redefines a built-in token', () => {
    const options: ParserOptions = { plugins: [{ YYYY: (str: string) => ({ value: 1999, length: str.length, token: 'Y' }) }] };

    expect(parse('2025', 'YYYY', options).getFullYear()).toBe(1999);
  });

  test('accepts an instance of a class extending ParserPlugin', () => {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    class Legacy extends ParserPlugin {
      YYYY (str: string) {
        return { value: 1999, length: str.length, token: 'Y' } as const;
      }
    }
    const options: ParserOptions = { plugins: [new Legacy()] };

    expect(parse('2025', 'YYYY', options).getFullYear()).toBe(1999);
  });

  test('rejects a token that is not a function', () => {
    // @ts-expect-error - a token must be a function
    const options: ParserOptions = { plugins: [{ YY: 1 }] };
    expect(options).toBeDefined();
  });
});
