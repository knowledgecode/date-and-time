import { expect, test } from 'vitest';
import { isLeapYear, isSameDay } from '../src/index.ts';

test('isLeapYear', () => {
  expect(isLeapYear(4)).toBe(true);
  expect(isLeapYear(100)).toBe(false);
  expect(isLeapYear(400)).toBe(true);
  expect(isLeapYear(2024)).toBe(true);
  expect(isLeapYear(2025)).toBe(false);
});

test('isSameDay', () => {
  const date1 = new Date(2025, 6, 18, 0, 0, 0, 0);
  const date2 = new Date(2025, 6, 18, 23, 59, 59, 999);

  expect(isSameDay(date1, date2)).toBe(true);

  const date3 = new Date(2025, 6, 18, 23, 59, 59, 999);
  const date4 = new Date(2025, 6, 19, 0, 0, 0, 0);

  expect(isSameDay(date3, date4)).toBe(false);
});
