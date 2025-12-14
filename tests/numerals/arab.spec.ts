import { describe, expect, test } from 'vitest';
import numeral from '@/numerals/arab.ts';

describe('arab', () => {
  test('encode', () => {
    expect(numeral.encode('0 1 2 3 4 5 6 7 8 9')).toBe('٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩');
  });

  test('decode', () => {
    expect(numeral.decode('٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩')).toBe('0 1 2 3 4 5 6 7 8 9');
  });
});
