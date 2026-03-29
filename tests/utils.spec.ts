import { describe, expect, test } from 'vitest';
import { isLeapYear, isSameDay, getDaysInMonth, getISOWeekYear, getISOWeek } from '@/index.ts';

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

describe('getDaysInMonth', () => {
  test('Date overload', () => {
    expect(getDaysInMonth(new Date(2024, 0, 15))).toBe(31);   // Jan
    expect(getDaysInMonth(new Date(2024, 1, 15))).toBe(29);   // Feb (leap year)
    expect(getDaysInMonth(new Date(2025, 1, 15))).toBe(28);   // Feb (non-leap year)
    expect(getDaysInMonth(new Date(2024, 3, 15))).toBe(30);   // Apr
    expect(getDaysInMonth(new Date(2024, 11, 15))).toBe(31);  // Dec
  });

  test('(year, month) overload', () => {
    expect(getDaysInMonth(2024, 1)).toBe(31);   // Jan
    expect(getDaysInMonth(2024, 2)).toBe(29);   // Feb (leap year)
    expect(getDaysInMonth(2025, 2)).toBe(28);   // Feb (non-leap year)
    expect(getDaysInMonth(2024, 4)).toBe(30);   // Apr
    expect(getDaysInMonth(2024, 12)).toBe(31);  // Dec
  });

  test('leap year rules', () => {
    expect(getDaysInMonth(2000, 2)).toBe(29); // divisible by 400 → leap
    expect(getDaysInMonth(2100, 2)).toBe(28); // divisible by 100, not 400 → non-leap
    expect(getDaysInMonth(2400, 2)).toBe(29); // divisible by 400 → leap
    expect(getDaysInMonth(2024, 2)).toBe(29); // divisible by 4, not 100 → leap
    expect(getDaysInMonth(2023, 2)).toBe(28); // not divisible by 4 → non-leap
  });

  test('Date overload for year < 100', () => {
    // year 4 is a leap year
    const date = new Date(4, 1 - 1900 * 12, 15);

    expect(getDaysInMonth(date)).toBe(29);
  });
});

describe('getISOWeekYear', () => {
  test('Date overload', () => {
    expect(getISOWeekYear(new Date(2024, 0, 1))).toBe(2024);    // Mon Jan 1 → week 1 of 2024
    expect(getISOWeekYear(new Date(2024, 11, 29))).toBe(2024);  // Sun Dec 29 → week 52 of 2024
    expect(getISOWeekYear(new Date(2024, 11, 30))).toBe(2025);  // Mon Dec 30 → week 1 of 2025
    expect(getISOWeekYear(new Date(2021, 0, 1))).toBe(2020);    // Fri Jan 1 → week 53 of 2020
  });

  test('(year, month, day) overload', () => {
    expect(getISOWeekYear(2024, 1, 1)).toBe(2024);    // Jan 1
    expect(getISOWeekYear(2024, 12, 30)).toBe(2025);  // Dec 30
    expect(getISOWeekYear(2021, 1, 1)).toBe(2020);    // Jan 1
  });
});

describe('getISOWeek', () => {
  test('Date overload', () => {
    expect(getISOWeek(new Date(2024, 0, 1))).toBe(1);     // Mon Jan 1 → week 1
    expect(getISOWeek(new Date(2024, 0, 7))).toBe(1);     // Sun Jan 7 → still week 1
    expect(getISOWeek(new Date(2024, 0, 8))).toBe(2);     // Mon Jan 8 → week 2
    expect(getISOWeek(new Date(2024, 6, 4))).toBe(27);    // Thu Jul 4 → week 27
    expect(getISOWeek(new Date(2024, 11, 23))).toBe(52);  // Mon Dec 23 → week 52
    expect(getISOWeek(new Date(2024, 11, 30))).toBe(1);   // Mon Dec 30 → week 1 of 2025
    expect(getISOWeek(new Date(2021, 0, 1))).toBe(53);    // Fri Jan 1 → week 53 of 2020
    expect(getISOWeek(new Date(2015, 11, 31))).toBe(53);  // Thu Dec 31 → week 53 of 2015
  });

  test('(year, month, day) overload', () => {
    expect(getISOWeek(2024, 1, 1)).toBe(1);   // Jan 1
    expect(getISOWeek(2024, 1, 8)).toBe(2);   // Jan 8
    expect(getISOWeek(2024, 7, 4)).toBe(27);  // Jul 4
    expect(getISOWeek(2021, 1, 1)).toBe(53);  // Jan 1
  });
});
