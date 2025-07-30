import { describe, expect, test } from 'vitest';
import { subtract } from '../src/index.ts';

describe('subtraction', () => {
  test('One year is 365 days', () => {
    const date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
    const date2 = new Date(2015, 11, 31, 23, 59, 59, 999);

    expect(subtract(date1, date2).toDays().value).toBe(365);
    expect(subtract(date1, date2).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: 0, days: 365 });

    expect(subtract(date1, date2).toHours().value).toBe(365 * 24);
    expect(subtract(date1, date2).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: 365 * 24 });

    expect(subtract(date1, date2).toMinutes().value).toBe(365 * 24 * 60);
    expect(subtract(date1, date2).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 365 * 24 * 60 });

    expect(subtract(date1, date2).toSeconds().value).toBe(365 * 24 * 60 * 60);
    expect(subtract(date1, date2).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 365 * 24 * 60 * 60 });

    expect(subtract(date1, date2).toMilliseconds().value).toBe(365 * 24 * 60 * 60 * 1000);
    expect(subtract(date1, date2).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 365 * 24 * 60 * 60 * 1000 });

    expect(subtract(date1, date2).toMicroseconds().value).toBe(365 * 24 * 60 * 60 * 1000 * 1000);
    expect(subtract(date1, date2).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 365 * 24 * 60 * 60 * 1000 * 1000 });

    expect(subtract(date1, date2).toNanoseconds().value).toBe(365 * 24 * 60 * 60 * 1000 * 1000 * 1000);
    expect(subtract(date1, date2).toNanoseconds().toParts()).toEqual({ nanoseconds: 365 * 24 * 60 * 60 * 1000 * 1000 * 1000 });
  });

  test('One year is 365 days (reverse)', () => {
    const date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
    const date2 = new Date(2015, 11, 31, 23, 59, 59, 999);

    expect(subtract(date2, date1).toDays().value).toBe(-365);
    expect(subtract(date2, date1).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: 0, days: -365 });

    expect(subtract(date2, date1).toHours().value).toBe(-365 * 24);
    expect(subtract(date2, date1).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: -365 * 24 });

    expect(subtract(date2, date1).toMinutes().value).toBe(-365 * 24 * 60);
    expect(subtract(date2, date1).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: -365 * 24 * 60 });

    expect(subtract(date2, date1).toSeconds().value).toBe(-365 * 24 * 60 * 60);
    expect(subtract(date2, date1).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: -365 * 24 * 60 * 60 });

    expect(subtract(date2, date1).toMilliseconds().value).toBe(-365 * 24 * 60 * 60 * 1000);
    expect(subtract(date2, date1).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -365 * 24 * 60 * 60 * 1000 });

    expect(subtract(date2, date1).toMicroseconds().value).toBe(-365 * 24 * 60 * 60 * 1000 * 1000);
    expect(subtract(date2, date1).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: -365 * 24 * 60 * 60 * 1000 * 1000 });

    expect(subtract(date2, date1).toNanoseconds().value).toBe(-365 * 24 * 60 * 60 * 1000 * 1000 * 1000);
    expect(subtract(date2, date1).toNanoseconds().toParts()).toEqual({ nanoseconds: -365 * 24 * 60 * 60 * 1000 * 1000 * 1000 });
  });

  test('One month is 31 days', () => {
    const date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
    const date2 = new Date(2014, 12, 31, 23, 59, 59, 999);

    expect(subtract(date1, date2).toDays().value).toBe(31);
    expect(subtract(date1, date2).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: 0, days: 31 });

    expect(subtract(date1, date2).toHours().value).toBe(31 * 24);
    expect(subtract(date1, date2).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: 31 * 24 });

    expect(subtract(date1, date2).toMinutes().value).toBe(31 * 24 * 60);
    expect(subtract(date1, date2).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 31 * 24 * 60 });

    expect(subtract(date1, date2).toSeconds().value).toBe(31 * 24 * 60 * 60);
    expect(subtract(date1, date2).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 31 * 24 * 60 * 60 });

    expect(subtract(date1, date2).toMilliseconds().value).toBe(31 * 24 * 60 * 60 * 1000);
    expect(subtract(date1, date2).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 31 * 24 * 60 * 60 * 1000 });

    expect(subtract(date1, date2).toMicroseconds().value).toBe(31 * 24 * 60 * 60 * 1000 * 1000);
    expect(subtract(date1, date2).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 31 * 24 * 60 * 60 * 1000 * 1000 });

    expect(subtract(date1, date2).toNanoseconds().value).toBe(31 * 24 * 60 * 60 * 1000 * 1000 * 1000);
    expect(subtract(date1, date2).toNanoseconds().toParts()).toEqual({ nanoseconds: 31 * 24 * 60 * 60 * 1000 * 1000 * 1000 });
  });

  test('One month is 31 days (reverse)', () => {
    const date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
    const date2 = new Date(2014, 12, 31, 23, 59, 59, 999);

    expect(subtract(date2, date1).toDays().value).toBe(-31);
    expect(subtract(date2, date1).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: 0, days: -31 });

    expect(subtract(date2, date1).toHours().value).toBe(-31 * 24);
    expect(subtract(date2, date1).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: -31 * 24 });

    expect(subtract(date2, date1).toMinutes().value).toBe(-31 * 24 * 60);
    expect(subtract(date2, date1).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: -31 * 24 * 60 });

    expect(subtract(date2, date1).toSeconds().value).toBe(-31 * 24 * 60 * 60);
    expect(subtract(date2, date1).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: -31 * 24 * 60 * 60 });

    expect(subtract(date2, date1).toMilliseconds().value).toBe(-31 * 24 * 60 * 60 * 1000);
    expect(subtract(date2, date1).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -31 * 24 * 60 * 60 * 1000 });

    expect(subtract(date2, date1).toMicroseconds().value).toBe(-31 * 24 * 60 * 60 * 1000 * 1000);
    expect(subtract(date2, date1).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: -31 * 24 * 60 * 60 * 1000 * 1000 });

    expect(subtract(date2, date1).toNanoseconds().value).toBe(-31 * 24 * 60 * 60 * 1000 * 1000 * 1000);
    expect(subtract(date2, date1).toNanoseconds().toParts()).toEqual({ nanoseconds: -31 * 24 * 60 * 60 * 1000 * 1000 * 1000 });
  });

  test('One day', () => {
    const date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
    const date2 = new Date(2014, 11, 32, 23, 59, 59, 999);

    expect(subtract(date1, date2).toDays().value).toBe(1);
    expect(subtract(date1, date2).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: 0, days: 1 });

    expect(subtract(date1, date2).toHours().value).toBe(24);
    expect(subtract(date1, date2).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: 24 });

    expect(subtract(date1, date2).toMinutes().value).toBe(24 * 60);
    expect(subtract(date1, date2).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 24 * 60 });

    expect(subtract(date1, date2).toSeconds().value).toBe(24 * 60 * 60);
    expect(subtract(date1, date2).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 24 * 60 * 60 });

    expect(subtract(date1, date2).toMilliseconds().value).toBe(24 * 60 * 60 * 1000);
    expect(subtract(date1, date2).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 24 * 60 * 60 * 1000 });

    expect(subtract(date1, date2).toMicroseconds().value).toBe(24 * 60 * 60 * 1000 * 1000);
    expect(subtract(date1, date2).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 24 * 60 * 60 * 1000 * 1000 });

    expect(subtract(date1, date2).toNanoseconds().value).toBe(24 * 60 * 60 * 1000 * 1000 * 1000);
    expect(subtract(date1, date2).toNanoseconds().toParts()).toEqual({ nanoseconds: 24 * 60 * 60 * 1000 * 1000 * 1000 });
  });

  test('One day (reverse)', () => {
    const date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
    const date2 = new Date(2014, 11, 32, 23, 59, 59, 999);

    expect(subtract(date2, date1).toDays().value).toBe(-1);
    expect(subtract(date2, date1).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: 0, days: -1 });

    expect(subtract(date2, date1).toHours().value).toBe(-1 * 24);
    expect(subtract(date2, date1).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: -1 * 24 });

    expect(subtract(date2, date1).toMinutes().value).toBe(-1 * 24 * 60);
    expect(subtract(date2, date1).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: -1 * 24 * 60 });

    expect(subtract(date2, date1).toSeconds().value).toBe(-1 * 24 * 60 * 60);
    expect(subtract(date2, date1).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: -1 * 24 * 60 * 60 });

    expect(subtract(date2, date1).toMilliseconds().value).toBe(-1 * 24 * 60 * 60 * 1000);
    expect(subtract(date2, date1).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -1 * 24 * 60 * 60 * 1000 });

    expect(subtract(date2, date1).toMicroseconds().value).toBe(-1 * 24 * 60 * 60 * 1000 * 1000);
    expect(subtract(date2, date1).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: -1 * 24 * 60 * 60 * 1000 * 1000 });

    expect(subtract(date2, date1).toNanoseconds().value).toBe(-1 * 24 * 60 * 60 * 1000 * 1000 * 1000);
    expect(subtract(date2, date1).toNanoseconds().toParts()).toEqual({ nanoseconds: -1 * 24 * 60 * 60 * 1000 * 1000 * 1000 });
  });

  test('One hour', () => {
    const date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
    const date2 = new Date(2014, 11, 31, 24, 59, 59, 999);

    expect(subtract(date1, date2).toDays().value).toBe(1 / 24);
    expect(subtract(date1, date2).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: 1, days: 0 });

    expect(subtract(date1, date2).toHours().value).toBe(1);
    expect(subtract(date1, date2).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: 1 });

    expect(subtract(date1, date2).toMinutes().value).toBe(60);
    expect(subtract(date1, date2).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 60 });

    expect(subtract(date1, date2).toSeconds().value).toBe(60 * 60);
    expect(subtract(date1, date2).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 60 * 60 });

    expect(subtract(date1, date2).toMilliseconds().value).toBe(60 * 60 * 1000);
    expect(subtract(date1, date2).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 60 * 60 * 1000 });

    expect(subtract(date1, date2).toMicroseconds().value).toBe(60 * 60 * 1000 * 1000);
    expect(subtract(date1, date2).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 60 * 60 * 1000 * 1000 });

    expect(subtract(date1, date2).toNanoseconds().value).toBe(60 * 60 * 1000 * 1000 * 1000);
    expect(subtract(date1, date2).toNanoseconds().toParts()).toEqual({ nanoseconds: 60 * 60 * 1000 * 1000 * 1000 });
  });

  test('One hour (reverse)', () => {
    const date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
    const date2 = new Date(2014, 11, 31, 24, 59, 59, 999);

    expect(subtract(date2, date1).toDays().value).toBe(-1 / 24);
    expect(subtract(date2, date1).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: -1, days: 0 });

    expect(subtract(date2, date1).toHours().value).toBe(-1);
    expect(subtract(date2, date1).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: -1 });

    expect(subtract(date2, date1).toMinutes().value).toBe(-1 * 60);
    expect(subtract(date2, date1).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: -1 * 60 });

    expect(subtract(date2, date1).toSeconds().value).toBe(-1 * 60 * 60);
    expect(subtract(date2, date1).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: -1 * 60 * 60 });

    expect(subtract(date2, date1).toMilliseconds().value).toBe(-1 * 60 * 60 * 1000);
    expect(subtract(date2, date1).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -1 * 60 * 60 * 1000 });

    expect(subtract(date2, date1).toMicroseconds().value).toBe(-1 * 60 * 60 * 1000 * 1000);
    expect(subtract(date2, date1).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: -1 * 60 * 60 * 1000 * 1000 });

    expect(subtract(date2, date1).toNanoseconds().value).toBe(-1 * 60 * 60 * 1000 * 1000 * 1000);
    expect(subtract(date2, date1).toNanoseconds().toParts()).toEqual({ nanoseconds: -1 * 60 * 60 * 1000 * 1000 * 1000 });
  });

  test('One minute', () => {
    const date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
    const date2 = new Date(2014, 11, 31, 23, 60, 59, 999);

    expect(subtract(date1, date2).toDays().value).toBe(1 / (24 * 60));
    expect(subtract(date1, date2).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 1, hours: 0, days: 0 });

    expect(subtract(date1, date2).toHours().value).toBe(1 / 60);
    expect(subtract(date1, date2).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 1, hours: 0 });

    expect(subtract(date1, date2).toMinutes().value).toBe(1);
    expect(subtract(date1, date2).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 1 });

    expect(subtract(date1, date2).toSeconds().value).toBe(60);
    expect(subtract(date1, date2).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 60 });

    expect(subtract(date1, date2).toMilliseconds().value).toBe(60 * 1000);
    expect(subtract(date1, date2).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 60 * 1000 });

    expect(subtract(date1, date2).toMicroseconds().value).toBe(60 * 1000 * 1000);
    expect(subtract(date1, date2).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 60 * 1000 * 1000 });

    expect(subtract(date1, date2).toNanoseconds().value).toBe(60 * 1000 * 1000 * 1000);
    expect(subtract(date1, date2).toNanoseconds().toParts()).toEqual({ nanoseconds: 60 * 1000 * 1000 * 1000 });
  });

  test('One minute (reverse)', () => {
    const date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
    const date2 = new Date(2014, 11, 31, 23, 60, 59, 999);

    expect(subtract(date2, date1).toDays().value).toBe(-1 / (24 * 60));
    expect(subtract(date2, date1).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: -1, hours: 0, days: 0 });

    expect(subtract(date2, date1).toHours().value).toBe(-1 / 60);
    expect(subtract(date2, date1).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: -1, hours: 0 });

    expect(subtract(date2, date1).toMinutes().value).toBe(-1);
    expect(subtract(date2, date1).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: -1 });

    expect(subtract(date2, date1).toSeconds().value).toBe(-1 * 60);
    expect(subtract(date2, date1).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: -1 * 60 });

    expect(subtract(date2, date1).toMilliseconds().value).toBe(-1 * 60 * 1000);
    expect(subtract(date2, date1).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -1 * 60 * 1000 });

    expect(subtract(date2, date1).toMicroseconds().value).toBe(-1 * 60 * 1000 * 1000);
    expect(subtract(date2, date1).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: -1 * 60 * 1000 * 1000 });

    expect(subtract(date2, date1).toNanoseconds().value).toBe(-1 * 60 * 1000 * 1000 * 1000);
    expect(subtract(date2, date1).toNanoseconds().toParts()).toEqual({ nanoseconds: -1 * 60 * 1000 * 1000 * 1000 });
  });

  test('One second', () => {
    const date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
    const date2 = new Date(2014, 11, 31, 23, 59, 60, 999);

    expect(subtract(date1, date2).toDays().value).toBe(1 / (24 * 60 * 60));
    expect(subtract(date1, date2).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 1, minutes: 0, hours: 0, days: 0 });

    expect(subtract(date1, date2).toHours().value).toBe(1 / (60 * 60));
    expect(subtract(date1, date2).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 1, minutes: 0, hours: 0 });

    expect(subtract(date1, date2).toMinutes().value).toBe(1 / 60);
    expect(subtract(date1, date2).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 1, minutes: 0 });

    expect(subtract(date1, date2).toSeconds().value).toBe(1);
    expect(subtract(date1, date2).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 1 });

    expect(subtract(date1, date2).toMilliseconds().value).toBe(1000);
    expect(subtract(date1, date2).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 1000 });

    expect(subtract(date1, date2).toMicroseconds().value).toBe(1000 * 1000);
    expect(subtract(date1, date2).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 1000 * 1000 });

    expect(subtract(date1, date2).toNanoseconds().value).toBe(1000 * 1000 * 1000);
    expect(subtract(date1, date2).toNanoseconds().toParts()).toEqual({ nanoseconds: 1000 * 1000 * 1000 });
  });

  test('One second (reverse)', () => {
    const date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
    const date2 = new Date(2014, 11, 31, 23, 59, 60, 999);

    expect(subtract(date2, date1).toDays().value).toBe(-1 / (24 * 60 * 60));
    expect(subtract(date2, date1).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: -1, minutes: 0, hours: 0, days: 0 });

    expect(subtract(date2, date1).toHours().value).toBe(-1 / (60 * 60));
    expect(subtract(date2, date1).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: -1, minutes: 0, hours: 0 });

    expect(subtract(date2, date1).toMinutes().value).toBe(-1 / 60);
    expect(subtract(date2, date1).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: -1, minutes: 0 });

    expect(subtract(date2, date1).toSeconds().value).toBe(-1);
    expect(subtract(date2, date1).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: -1 });

    expect(subtract(date2, date1).toMilliseconds().value).toBe(-1 * 1000);
    expect(subtract(date2, date1).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -1 * 1000 });

    expect(subtract(date2, date1).toMicroseconds().value).toBe(-1 * 1000 * 1000);
    expect(subtract(date2, date1).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: -1 * 1000 * 1000 });

    expect(subtract(date2, date1).toNanoseconds().value).toBe(-1 * 1000 * 1000 * 1000);
    expect(subtract(date2, date1).toNanoseconds().toParts()).toEqual({ nanoseconds: -1 * 1000 * 1000 * 1000 });
  });

  test('One millisecond', () => {
    const date1 = new Date(2014, 11, 31, 23, 59, 59, 998);
    const date2 = new Date(2014, 11, 31, 23, 59, 59, 999);

    expect(subtract(date1, date2).toDays().value).toBe(1 / (24 * 60 * 60 * 1000));
    expect(subtract(date1, date2).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 1, seconds: 0, minutes: 0, hours: 0, days: 0 });

    expect(subtract(date1, date2).toHours().value).toBe(1 / (60 * 60 * 1000));
    expect(subtract(date1, date2).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 1, seconds: 0, minutes: 0, hours: 0 });

    expect(subtract(date1, date2).toMinutes().value).toBe(1 / (60 * 1000));
    expect(subtract(date1, date2).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 1, seconds: 0, minutes: 0 });

    expect(subtract(date1, date2).toSeconds().value).toBe(1 / 1000);
    expect(subtract(date1, date2).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 1, seconds: 0 });

    expect(subtract(date1, date2).toMilliseconds().value).toBe(1);
    expect(subtract(date1, date2).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 1 });

    expect(subtract(date1, date2).toMicroseconds().value).toBe(1000);
    expect(subtract(date1, date2).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 1000 });

    expect(subtract(date1, date2).toNanoseconds().value).toBe(1000 * 1000);
    expect(subtract(date1, date2).toNanoseconds().toParts()).toEqual({ nanoseconds: 1000 * 1000 });
  });

  test('One millisecond (reverse)', () => {
    const date1 = new Date(2014, 11, 31, 23, 59, 59, 998);
    const date2 = new Date(2014, 11, 31, 23, 59, 59, 999);

    expect(subtract(date2, date1).toDays().value).toBe(-1 / (24 * 60 * 60 * 1000));
    expect(subtract(date2, date1).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -1, seconds: 0, minutes: 0, hours: 0, days: 0 });

    expect(subtract(date2, date1).toHours().value).toBe(-1 / (60 * 60 * 1000));
    expect(subtract(date2, date1).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -1, seconds: 0, minutes: 0, hours: 0 });

    expect(subtract(date2, date1).toMinutes().value).toBe(-1 / (60 * 1000));
    expect(subtract(date2, date1).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -1, seconds: 0, minutes: 0 });

    expect(subtract(date2, date1).toSeconds().value).toBe(-1 / 1000);
    expect(subtract(date2, date1).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -1, seconds: 0 });

    expect(subtract(date2, date1).toMilliseconds().value).toBe(-1);
    expect(subtract(date2, date1).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -1 });

    expect(subtract(date2, date1).toMicroseconds().value).toBe(-1 * 1000);
    expect(subtract(date2, date1).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: -1 * 1000 });

    expect(subtract(date2, date1).toNanoseconds().value).toBe(-1 * 1000 * 1000);
    expect(subtract(date2, date1).toNanoseconds().toParts()).toEqual({ nanoseconds: -1 * 1000 * 1000 });
  });

  test('format', () => {
    const date1 = new Date(2025, 6, 13, 8, 42, 53, 998);
    const date2 = new Date(2025, 6, 14, 9, 43, 54, 999);

    expect(subtract(date1, date2).toDays().format('D[days] H[hours] m[minites] s[seconds] S.fffFFF')).toBe('1days 1hours 1minites 1seconds 1.000000');
    expect(subtract(date1, date2).toHours().format('H[hours] m[minites] s[seconds] S.fffFFF')).toBe('25hours 1minites 1seconds 1.000000');
    expect(subtract(date1, date2).toMinutes().format('m[minites] s[seconds] S.fffFFF')).toBe('1501minites 1seconds 1.000000');
    expect(subtract(date1, date2).toSeconds().format('s[seconds] S.fffFFF')).toBe('90061seconds 1.000000');
    expect(subtract(date1, date2).toMilliseconds().format('S.fffFFF')).toBe('90061001.000000');
    expect(subtract(date1, date2).toMicroseconds().format('f.FFF')).toBe('90061001000.000');
    expect(subtract(date1, date2).toNanoseconds().format('F')).toBe('90061001000000');
  });

  test('format (reverse)', () => {
    const date1 = new Date(2025, 6, 13, 8, 42, 53, 998);
    const date2 = new Date(2025, 6, 14, 9, 43, 54, 999);

    expect(subtract(date2, date1).toDays().format('D[days] H[hours] m[minites] s[seconds] S.fffFFF')).toBe('-1days 1hours 1minites 1seconds 1.000000');
    expect(subtract(date2, date1).toHours().format('H[hours] m[minites] s[seconds] S.fffFFF')).toBe('-25hours 1minites 1seconds 1.000000');
    expect(subtract(date2, date1).toMinutes().format('m[minites] s[seconds] S.fffFFF')).toBe('-1501minites 1seconds 1.000000');
    expect(subtract(date2, date1).toSeconds().format('s[seconds] S.fffFFF')).toBe('-90061seconds 1.000000');
    expect(subtract(date2, date1).toMilliseconds().format('S.fffFFF')).toBe('-90061001.000000');
    expect(subtract(date2, date1).toMicroseconds().format('f.FFF')).toBe('-90061001000.000');
    expect(subtract(date2, date1).toNanoseconds().format('F')).toBe('-90061001000000');
  });
});
