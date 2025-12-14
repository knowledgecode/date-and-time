import { describe, expect, test, beforeAll } from 'vitest';
import { compile, format, transform } from '@/index.ts';
import Los_Angeles from '@/timezones/America/Los_Angeles.ts';
import New_York from '@/timezones/America/New_York.ts';
import Tokyo from '@/timezones/Asia/Tokyo.ts';

beforeAll(() => (process.env.TZ = 'UTC'));

describe('transform', () => {
  test('D/M/YYYY => M/D/YYYY', () => {
    expect(transform('3/8/2020', 'D/M/YYYY', 'M/D/YYYY')).toBe('8/3/2020');
  });

  test('HH:mm => hh:mm A', () => {
    expect(transform('13:05', 'HH:mm', 'hh:mm A')).toBe('01:05 PM');
  });

  test('HH:mm => hh:mm A, output as UTC', () => {
    const utc = format(new Date(2020, 3, 1, 13, 5), 'hh:mm A');
    expect(transform('13:05', 'HH:mm', 'hh:mm A')).toBe(utc);
  });

  test('D/M/YYYY => M/D/YYYY, with compile', () => {
    const arg1 = compile('D/M/YYYY');
    const arg2 = compile('M/D/YYYY');
    expect(transform('3/8/2020', arg1, arg2)).toBe('8/3/2020');
  });

  test('transform EST to PST', () => {
    const string1 = '2021-11-07T04:00:00.000';  // UTC-5
    const formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS';
    const formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
    const string2 = 'November 7 2021 1:00:00.000';  // UTC-8

    // 2021-11-07T04:00:00.000 => November 7 2021 1:00:00.000
    expect(transform(string1, formatString1, formatString2, { timeZone: New_York }, { timeZone: Los_Angeles })).toBe(string2);
  });

  test('transform EST to PDT (End of DST)', () => {
    const string1 = '2021-11-07T03:59:59.999';  // UTC-5
    const formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS';
    const formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
    const string2 = 'November 7 2021 1:59:59.999';  // UTC-7

    // 2021-11-07T03:59:59.999 => November 7 2021 1:59:59.999
    expect(transform(string1, formatString1, formatString2, { timeZone: New_York }, { timeZone: Los_Angeles })).toBe(string2);
  });

  test('transform EDT to PST', () => {
    const string1 = '2021-03-14T05:59:59.999';  // UTC-4
    const formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS';
    const formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
    const string2 = 'March 14 2021 1:59:59.999';  // UTC-8

    // 2021-03-14T05:59:59.999 => March 14 2021 1:59:59.999
    expect(transform(string1, formatString1, formatString2, { timeZone: New_York }, { timeZone: Los_Angeles })).toBe(string2);
  });

  test('transform EDT to PDT (Start of DST)', () => {
    const string1 = '2021-03-14T06:00:00.000';  // UTC-4
    const formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS';
    const formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
    const string2 = 'March 14 2021 3:00:00.000';  // UTC-7

    // 2021-03-14T06:00:00.000 => March 14 2021 3:00:00.000
    expect(transform(string1, formatString1, formatString2, { timeZone: New_York }, { timeZone: Los_Angeles })).toBe(string2);
  });

  test('transform PST to JST', () => {
    const string1 = '2021-03-14T01:59:59.999';  // UTC-8
    const formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS';
    const formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
    const string2 = 'March 14 2021 18:59:59.999'; // UTC+9

    // 2021-03-14T01:59:59.999 => March 14 2021 18:59:59.999
    expect(transform(string1, formatString1, formatString2, { timeZone: Los_Angeles }, { timeZone: Tokyo })).toBe(string2);
  });

  test('transform PDT to JST', () => {
    const string1 = '2021-03-14T03:00:00.000';  // UTC-7
    const formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS';
    const formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
    const string2 = 'March 14 2021 19:00:00.000'; // UTC+9

    // 2021-03-14T03:00:00.000 => March 14 2021 19:00:00.000
    expect(transform(string1, formatString1, formatString2, { timeZone: Los_Angeles }, { timeZone: Tokyo })).toBe(string2);
  });

  test('transform UTC to JST', () => {
    const string1 = '2021-03-14T03:00:00.000';  // UTC+0
    const formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS';
    const formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
    const string2 = 'March 14 2021 12:00:00.000'; // UTC+9

    // 2021-03-14T03:00:00.000 => March 14 2021 12:00:00.000
    expect(transform(string1, formatString1, formatString2, { timeZone: 'UTC' }, { timeZone: Tokyo })).toBe(string2);
  });
});
