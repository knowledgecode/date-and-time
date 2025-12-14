import { describe, expect, test, beforeAll } from 'vitest';
import { format, parse } from '@/index.ts';
import { formatter, parser } from '@/plugins/ordinal.ts';

beforeAll(() => (process.env.TZ = 'UTC'));

describe('plugins', () => {
  describe('formatter', () => {
    test('DDD', () => {
      expect(format(new Date(2025, 1 - 1, 1, 0), 'MMMM DDD, YYYY', { plugins: [formatter] })).toBe('January 1st, 2025');
      expect(format(new Date(2025, 1 - 1, 2, 0), 'MMMM DDD, YYYY', { plugins: [formatter] })).toBe('January 2nd, 2025');
      expect(format(new Date(2025, 1 - 1, 3, 0), 'MMMM DDD, YYYY', { plugins: [formatter] })).toBe('January 3rd, 2025');

      expect(format(new Date(2025, 1 - 1, 11, 0), 'MMMM DDD, YYYY', { plugins: [formatter] })).toBe('January 11th, 2025');
      expect(format(new Date(2025, 1 - 1, 12, 0), 'MMMM DDD, YYYY', { plugins: [formatter] })).toBe('January 12th, 2025');
      expect(format(new Date(2025, 1 - 1, 13, 0), 'MMMM DDD, YYYY', { plugins: [formatter] })).toBe('January 13th, 2025');

      expect(format(new Date(2025, 1 - 1, 21, 0), 'MMMM DDD, YYYY', { plugins: [formatter] })).toBe('January 21st, 2025');
      expect(format(new Date(2025, 1 - 1, 22, 0), 'MMMM DDD, YYYY', { plugins: [formatter] })).toBe('January 22nd, 2025');
      expect(format(new Date(2025, 1 - 1, 23, 0), 'MMMM DDD, YYYY', { plugins: [formatter] })).toBe('January 23rd, 2025');

      expect(format(new Date(2025, 1 - 1, 31, 0), 'MMMM DDD, YYYY', { plugins: [formatter] })).toBe('January 31st, 2025');
    });
  });

  describe('parser', () => {
    test('DDD', () => {
      expect(parse('January 1st, 2025', 'MMMM DDD, YYYY', { plugins: [parser] })).toEqual(new Date(2025, 0, 1));
      expect(parse('January 2nd, 2025', 'MMMM DDD, YYYY', { plugins: [parser] })).toEqual(new Date(2025, 0, 2));
      expect(parse('January 3rd, 2025', 'MMMM DDD, YYYY', { plugins: [parser] })).toEqual(new Date(2025, 0, 3));

      expect(parse('January 11th, 2025', 'MMMM DDD, YYYY', { plugins: [parser] })).toEqual(new Date(2025, 0, 11));
      expect(parse('January 12th, 2025', 'MMMM DDD, YYYY', { plugins: [parser] })).toEqual(new Date(2025, 0, 12));
      expect(parse('January 13th, 2025', 'MMMM DDD, YYYY', { plugins: [parser] })).toEqual(new Date(2025, 0, 13));

      expect(parse('January 21st, 2025', 'MMMM DDD, YYYY', { plugins: [parser] })).toEqual(new Date(2025, 0, 21));
      expect(parse('January 22nd, 2025', 'MMMM DDD, YYYY', { plugins: [parser] })).toEqual(new Date(2025, 0, 22));
      expect(parse('January 23rd, 2025', 'MMMM DDD, YYYY', { plugins: [parser] })).toEqual(new Date(2025, 0, 23));

      expect(parse('January 31st, 2025', 'MMMM DDD, YYYY', { plugins: [parser] })).toEqual(new Date(2025, 0, 31));
    });

    test('DDD ignoreCase', () => {
      expect(parse('JANUARY 1ST, 2025', 'MMMM DDD, YYYY', { plugins: [parser], ignoreCase: true })).toEqual(new Date(2025, 0, 1));
      expect(parse('JANUARY 2ND, 2025', 'MMMM DDD, YYYY', { plugins: [parser], ignoreCase: true })).toEqual(new Date(2025, 0, 2));
      expect(parse('JANUARY 3RD, 2025', 'MMMM DDD, YYYY', { plugins: [parser], ignoreCase: true })).toEqual(new Date(2025, 0, 3));

      expect(parse('JANUARY 11TH, 2025', 'MMMM DDD, YYYY', { plugins: [parser], ignoreCase: true })).toEqual(new Date(2025, 0, 11));
      expect(parse('JANUARY 12TH, 2025', 'MMMM DDD, YYYY', { plugins: [parser], ignoreCase: true })).toEqual(new Date(2025, 0, 12));
      expect(parse('JANUARY 13TH, 2025', 'MMMM DDD, YYYY', { plugins: [parser], ignoreCase: true })).toEqual(new Date(2025, 0, 13));

      expect(parse('JANUARY 21ST, 2025', 'MMMM DDD, YYYY', { plugins: [parser], ignoreCase: true })).toEqual(new Date(2025, 0, 21));
      expect(parse('JANUARY 22ND, 2025', 'MMMM DDD, YYYY', { plugins: [parser], ignoreCase: true })).toEqual(new Date(2025, 0, 22));
      expect(parse('JANUARY 23RD, 2025', 'MMMM DDD, YYYY', { plugins: [parser], ignoreCase: true })).toEqual(new Date(2025, 0, 23));

      expect(parse('JANUARY 31ST, 2025', 'MMMM DDD, YYYY', { plugins: [parser], ignoreCase: true })).toEqual(new Date(2025, 0, 31));
    });
  });
});
