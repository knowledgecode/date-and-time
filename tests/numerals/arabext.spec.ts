import { describe, expect, test } from 'vitest';
import numeral from '../../src/numerals/arabext.ts';

describe('arabext', () => {
  test('encode', () => {
    expect(numeral.encode('0 1 2 3 4 5 6 7 8 9')).toBe('۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹');
  });

  test('decode', () => {
    expect(numeral.decode('۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹')).toBe('0 1 2 3 4 5 6 7 8 9');
  });
});
