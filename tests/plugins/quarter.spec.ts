import { describe, expect, test } from 'vitest';
import { format } from '@/index.ts';
import { formatter } from '@/plugins/quarter.ts';

describe('plugins', () => {
  describe('formatter', () => {
    test('Q — first month of each quarter', () => {
      expect(format(new Date(2025, 0, 1), 'Q', { plugins: [formatter] })).toBe('1'); // Jan → Q1
      expect(format(new Date(2025, 3, 1), 'Q', { plugins: [formatter] })).toBe('2'); // Apr → Q2
      expect(format(new Date(2025, 6, 1), 'Q', { plugins: [formatter] })).toBe('3'); // Jul → Q3
      expect(format(new Date(2025, 9, 1), 'Q', { plugins: [formatter] })).toBe('4'); // Oct → Q4
    });

    test('Q — last month of each quarter', () => {
      expect(format(new Date(2025, 2, 31), 'Q', { plugins: [formatter] })).toBe('1'); // Mar → Q1
      expect(format(new Date(2025, 5, 30), 'Q', { plugins: [formatter] })).toBe('2'); // Jun → Q2
      expect(format(new Date(2025, 8, 30), 'Q', { plugins: [formatter] })).toBe('3'); // Sep → Q3
      expect(format(new Date(2025, 11, 31), 'Q', { plugins: [formatter] })).toBe('4'); // Dec → Q4
    });

    test('Q — middle month of each quarter', () => {
      expect(format(new Date(2025, 1, 14), 'Q', { plugins: [formatter] })).toBe('1'); // Feb → Q1
      expect(format(new Date(2025, 4, 15), 'Q', { plugins: [formatter] })).toBe('2'); // May → Q2
      expect(format(new Date(2025, 7, 16), 'Q', { plugins: [formatter] })).toBe('3'); // Aug → Q3
      expect(format(new Date(2025, 10, 11), 'Q', { plugins: [formatter] })).toBe('4'); // Nov → Q4
    });
  });
});
