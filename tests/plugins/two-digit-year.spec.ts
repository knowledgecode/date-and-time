import { describe, expect, test, beforeAll } from 'vitest';
import { parse } from '../../src/index.ts';
import { parser as year } from '../../src/plugins/two-digit-year.ts';

beforeAll(() => (process.env.TZ = 'UTC'));

describe('plugins', () => {
  test('YY gregory', () => {
    expect(parse('00-05-05', 'YY-MM-DD', { plugins: [year] })).toEqual(new Date(2000, 5 - 1, 5));
    expect(parse('69-05-05', 'YY-MM-DD', { plugins: [year] })).toEqual(new Date(2069, 5 - 1, 5));
    expect(parse('70-05-05', 'YY-MM-DD', { plugins: [year] })).toEqual(new Date(1970, 5 - 1, 5));
    expect(parse('99-05-05', 'YY-MM-DD', { plugins: [year] })).toEqual(new Date(1999, 5 - 1, 5));
  });

  test('YY buddhist', () => {
    expect(parse('00-05-05', 'YY-MM-DD', { plugins: [year], calendar: 'buddhist' })).toEqual(new Date(2600 - 543, 5 - 1, 5));
    expect(parse('12-05-05', 'YY-MM-DD', { plugins: [year], calendar: 'buddhist' })).toEqual(new Date(2612 - 543, 5 - 1, 5));
    expect(parse('13-05-05', 'YY-MM-DD', { plugins: [year], calendar: 'buddhist' })).toEqual(new Date(2513 - 543, 5 - 1, 5));
    expect(parse('99-05-05', 'YY-MM-DD', { plugins: [year], calendar: 'buddhist' })).toEqual(new Date(2599 - 543, 5 - 1, 5));
  });
});
