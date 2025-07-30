import { describe, expect, test } from 'vitest';
import numeral from '../../src/numerals/beng.ts';

describe('beng', () => {
  test('encode', () => {
    expect(numeral.encode('0 1 2 3 4 5 6 7 8 9')).toBe('০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯');
  });

  test('decode', () => {
    expect(numeral.decode('০ ১ ২ ৩ ৪ ৫ ৬ ৭ ৮ ৯')).toBe('0 1 2 3 4 5 6 7 8 9');
  });
});
