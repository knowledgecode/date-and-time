import { describe, expect, test } from 'vitest';
import numeral from '../../src/numerals/mymr.ts';

describe('mymr', () => {
  test('encode', () => {
    expect(numeral.encode('0 1 2 3 4 5 6 7 8 9')).toBe('၀ ၁ ၂ ၃ ၄ ၅ ၆ ၇ ၈ ၉');
  });

  test('decode', () => {
    expect(numeral.decode('၀ ၁ ၂ ၃ ၄ ၅ ၆ ၇ ၈ ၉')).toBe('0 1 2 3 4 5 6 7 8 9');
  });
});
