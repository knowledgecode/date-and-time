import { describe, expect, test } from 'vitest';
import numeral from '@/numerals/latn.ts';

describe('latn', () => {
  test('encode', () => {
    expect(numeral.encode('0 1 2 3 4 5 6 7 8 9')).toBe('0 1 2 3 4 5 6 7 8 9');
  });

  test('decode', () => {
    expect(numeral.decode('0 1 2 3 4 5 6 7 8 9')).toBe('0 1 2 3 4 5 6 7 8 9');
  });
});
