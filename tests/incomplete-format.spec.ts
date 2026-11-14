import { describe, expect, test } from 'vitest';
import { compile, isValid, parse, preparse } from '@/index.ts';
import { parser } from '@/plugins/day-of-week.ts';

describe('incomplete format matching', () => {
  test.each([
    ['2025', 'YYYY-MM-DD'],
    ['2025-', 'YYYY-MM-DD'],
    ['2025-01', 'YYYY-MM-DD'],
    ['2025-01-', 'YYYY-MM-DD'],
    ['2025-01-01', 'YYYY-MM-DD HH:mm'],
    ['2025', 'YYYY[ required]'],
    ['2025', 'YYYY '],
    ['2025', 'YYYY ...'],
    ['2025', 'YYYY  ...'],
    ['2025 ', 'YYYY  ...']
  ])('rejects %s when %s still requires input', (input, format) => {
    for (const pattern of [format, compile(format)]) {
      expect(isValid(input, pattern)).toBe(false);
      expect(Number.isNaN(parse(input, pattern).getTime())).toBe(true);
    }
  });

  test('rejects an absent plugin token', () => {
    const options = { plugins: [parser] };
    expect(isValid('2025-01-01 ', 'YYYY-MM-DD dddd', options)).toBe(false);
    expect(Number.isNaN(parse('2025-01-01 ', 'YYYY-MM-DD dddd', options).getTime())).toBe(true);
  });

  test('preserves parsed components when matching fails', () => {
    expect(preparse('2025-01', 'YYYY-MM-DD')).toMatchObject({
      Y: 2025, M: 1, _error: true, _index: 7, _length: 7, _match: 2
    });
  });

  test.each([
    ['2025', 'YYYY'],
    ['2025-01', 'YYYY-MM'],
    ['2025-01-01', 'YYYY-MM-DD'],
    ['2025', 'YYYY...'],
    ['2025 additional text', 'YYYY...'],
    ['2025 ', 'YYYY '],
    ['2025 ', 'YYYY ...'],
    ['2025  ', 'YYYY  ...']
  ])('accepts %s when %s is fully matched', (input, pattern) => {
    expect(isValid(input, pattern)).toBe(true);
    expect(Number.isNaN(parse(input, pattern).getTime())).toBe(false);
  });
});
