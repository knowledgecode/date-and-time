import { describe, expect, test, beforeAll } from 'vitest';
import { isValid, compile } from '@/index.ts';
import { parser } from '@/plugins/day-of-week.ts';

beforeAll(() => (process.env.TZ = 'UTC'));

test('2014-12-31 12:34:56.789 is valid', () => {
  expect(isValid('20141231123456789', 'YYYYMMDDHHmmssSSS')).toBe(true);
  expect(isValid('20141231123456789', compile('YYYYMMDDHHmmssSSS'))).toBe(true);
});

test('2012-2-29 is valid', () => {
  expect(isValid('2012-2-29', 'YYYY-M-D')).toBe(true);
  expect(isValid('2012-2-29', compile('YYYY-M-D'))).toBe(true);
});

test('2100-2-29 is invalid', () => {
  expect(isValid('2100-2-29', 'YYYY-M-D')).toBe(false);
  expect(isValid('2100-2-29', compile('YYYY-M-D'))).toBe(false);
});

test('2000-2-29 is valid', () => {
  expect(isValid('2000-2-29', 'YYYY-M-D')).toBe(true);
  expect(isValid('2000-2-29', compile('YYYY-M-D'))).toBe(true);
});

test('2014-2-29 is invalid', () => {
  expect(isValid('2014-2-29', 'YYYY-M-D')).toBe(false);
  expect(isValid('2014-2-29', compile('YYYY-M-D'))).toBe(false);
});

test('2014-2-28 is valid', () => {
  expect(isValid('2014-2-28', 'YYYY-M-D')).toBe(true);
  expect(isValid('2014-2-28', compile('YYYY-M-D'))).toBe(true);
});

test('2014-4-31 is invalid', () => {
  expect(isValid('2014-4-31', 'YYYY-M-D')).toBe(false);
  expect(isValid('2014-4-31', compile('YYYY-M-D'))).toBe(false);
});

test('24:00 is invalid', () => {
  expect(isValid('2014-4-30 24:00', 'YYYY-M-D H:m')).toBe(false);
  expect(isValid('2014-4-30 24:00', compile('YYYY-M-D H:m'))).toBe(false);
});

test('13:00 PM is invalid', () => {
  expect(isValid('2014-4-30 13:00 PM', 'YYYY-M-D h:m A')).toBe(false);
  expect(isValid('2014-4-30 13:00 PM', compile('YYYY-M-D h:m A'))).toBe(false);
});

test('23:60 is invalid', () => {
  expect(isValid('2014-4-30 23:60', 'YYYY-M-D H:m')).toBe(false);
  expect(isValid('2014-4-30 23:60', compile('YYYY-M-D H:m'))).toBe(false);
});

test('23:59:60 is invalid', () => {
  expect(isValid('2014-4-30 23:59:60', 'YYYY-M-D H:m:s')).toBe(false);
  expect(isValid('2014-4-30 23:59:60', compile('YYYY-M-D H:m:s'))).toBe(false);
});

test('All zero is invalid', () => {
  expect(isValid('00000000000000000', 'YYYYMMDDHHmmssSSS')).toBe(false);
  expect(isValid('00000000000000000', compile('YYYYMMDDHHmmssSSS'))).toBe(false);
});

test('All nine is invalid', () => {
  expect(isValid('99999999999999999', 'YYYYMMDDHHmmssSSS')).toBe(false);
  expect(isValid('99999999999999999', compile('YYYYMMDDHHmmssSSS'))).toBe(false);
});

test('foo is invalid', () => {
  expect(isValid('20150101235959', 'foo')).toBe(false);
  expect(isValid('20150101235959', compile('foo'))).toBe(false);
});

test('bar is invalid', () => {
  expect(isValid('20150101235959', 'bar')).toBe(false);
  expect(isValid('20150101235959', compile('bar'))).toBe(false);
});

test('YYYYMMDD is invalid', () => {
  expect(isValid('20150101235959', 'YYYYMMDD')).toBe(false);
  expect(isValid('20150101235959', compile('YYYYMMDD'))).toBe(false);
});

test('20150101235959 is invalid', () => {
  expect(isValid('20150101235959', '20150101235959')).toBe(false);
  expect(isValid('20150101235959', compile('20150101235959'))).toBe(false);
});

describe('options', () => {
  test('hour12: h11', () => {
    expect(isValid('2000-01-01 00:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' })).toBe(true);
    expect(isValid('2000-01-01 11:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' })).toBe(true);
    expect(isValid('2000-01-01 00:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' })).toBe(true);
    expect(isValid('2000-01-01 11:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' })).toBe(true);

    expect(isValid('2000-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' })).toBe(false);
    expect(isValid('2000-01-01 12:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' })).toBe(false);
  });

  test('hour12: h12', () => {
    expect(isValid('2000-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' })).toBe(true);
    expect(isValid('2000-01-01 11:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' })).toBe(true);
    expect(isValid('2000-01-01 12:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' })).toBe(true);
    expect(isValid('2000-01-01 11:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' })).toBe(true);

    expect(isValid('2000-01-01 00:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' })).toBe(false);
    expect(isValid('2000-01-01 00:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' })).toBe(false);
  });

  test('hour24: h23', () => {
    expect(isValid('2000-01-01 00:00', 'YYYY-MM-DD HH:mm', { hour24: 'h23' })).toBe(true);
    expect(isValid('2000-01-01 01:00', 'YYYY-MM-DD HH:mm', { hour24: 'h23' })).toBe(true);
    expect(isValid('2000-01-01 23:00', 'YYYY-MM-DD HH:mm', { hour24: 'h23' })).toBe(true);

    expect(isValid('2000-01-01 24:00', 'YYYY-MM-DD HH:mm', { hour24: 'h23' })).toBe(false);
  });

  test('hour24: h24', () => {
    expect(isValid('2000-01-01 00:00', 'YYYY-MM-DD HH:mm', { hour24: 'h24' })).toBe(false);

    expect(isValid('2000-01-01 01:00', 'YYYY-MM-DD HH:mm', { hour24: 'h24' })).toBe(true);
    expect(isValid('2000-01-01 23:00', 'YYYY-MM-DD HH:mm', { hour24: 'h24' })).toBe(true);
    expect(isValid('2000-01-01 24:00', 'YYYY-MM-DD HH:mm', { hour24: 'h24' })).toBe(true);
  });

  test('ignoreCase: true', () => {
    expect(isValid('2025 May 4 Sunday 11 AM', 'YYYY MMMM D dddd h A', { ignoreCase: true, plugins: [parser] })).toBe(true);
    expect(isValid('2025 may 4 sunday 11 am', 'YYYY MMMM D dddd h A', { ignoreCase: true, plugins: [parser] })).toBe(true);
    expect(isValid('2025 MAY 4 SUNDAY 11 AM', 'YYYY MMMM D dddd h A', { ignoreCase: true, plugins: [parser] })).toBe(true);
  });

  test('calendar: buddhist', () => {
    expect(isValid('9999-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { calendar: 'buddhist' })).toBe(true);
    expect(isValid('0544-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { calendar: 'buddhist' })).toBe(true);
    expect(isValid('0543-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { calendar: 'buddhist' })).toBe(false);
  });
});
