import { describe, expect, test, beforeAll } from 'vitest';
import { parse } from '@/index.ts';
import { parser } from '@/plugins/day-of-week.ts';
import Los_Angeles from '@/timezones/America/Los_Angeles.ts';
import Tokyo from '@/timezones/Asia/Tokyo.ts';
import Adelaide from '@/timezones/Australia/Adelaide.ts';
import Apia from '@/timezones/Pacific/Apia.ts';

test('YYYY', () => {
  expect(Number.isNaN(parse('0000', 'YYYY').getTime())).toBe(true);
});

test('YYYY', () => {
  const now = new Date(0, -1899 * 12, 1);
  expect(parse('0001', 'YYYY')).toEqual(now);
});

test('YYYY', () => {
  const now = new Date(0, -1801 * 12, 1);
  expect(parse('0099', 'YYYY')).toEqual(now);
});

test('YYYY', () => {
  const now = new Date(100, 0, 1);
  expect(parse('0100', 'YYYY')).toEqual(now);
});

test('YYYY', () => {
  const now = new Date(1899, 0, 1);
  expect(parse('1899', 'YYYY')).toEqual(now);
});

test('YYYY', () => {
  const now = new Date(1900, 0, 1);
  expect(parse('1900', 'YYYY')).toEqual(now);
});

test('YYYY', () => {
  const now = new Date(1969, 0, 1);
  expect(parse('1969', 'YYYY')).toEqual(now);
});

test('YYYY', () => {
  const now = new Date(1970, 0, 1);
  expect(parse('1970', 'YYYY')).toEqual(now);
});

test('YYYY', () => {
  const now = new Date(1999, 0, 1);
  expect(parse('1999', 'YYYY')).toEqual(now);
});

test('YYYY', () => {
  const now = new Date(2000, 0, 1);
  expect(parse('2000', 'YYYY')).toEqual(now);
});

test('YYYY', () => {
  const now = new Date(9999, 0, 1);
  expect(parse('9999', 'YYYY')).toEqual(now);
});

test('Y', () => {
  expect(Number.isNaN(parse('0', 'Y').getTime())).toBe(true);
});

test('Y', () => {
  const now = new Date(0, -1899 * 12, 1);
  expect(parse('1', 'Y')).toEqual(now);
});

test('Y', () => {
  const now = new Date(0, -1801 * 12, 1);
  expect(parse('99', 'Y')).toEqual(now);
});

test('Y', () => {
  const now = new Date(100, 0, 1);
  expect(parse('100', 'Y')).toEqual(now);
});

test('YYYY MMMM', () => {
  const now = new Date(2015, 0, 1);
  expect(parse('2015 January', 'YYYY MMMM')).toEqual(now);
});

test('YYYY MMMM', () => {
  const now = new Date(2015, 11, 1);
  expect(parse('2015 December', 'YYYY MMMM')).toEqual(now);
});

test('YYYY MMMM', () => {
  expect(Number.isNaN(parse('2015 Zero', 'YYYY MMMM').getTime())).toBe(true);
});

test('YYYY MMM', () => {
  const now = new Date(2015, 0, 1);
  expect(parse('2015 Jan', 'YYYY MMM')).toEqual(now);
});

test('YYYY MMM', () => {
  const now = new Date(2015, 11, 1);
  expect(parse('2015 Dec', 'YYYY MMM')).toEqual(now);
});

test('YYYY MMM', () => {
  expect(Number.isNaN(parse('2015 Zero', 'YYYY MMM').getTime())).toBe(true);
});

test('YYYY-MM', () => {
  const now = new Date(2015, 0, 1);
  expect(parse('2015-01', 'YYYY-MM')).toEqual(now);
});

test('YYYY-MM', () => {
  const now = new Date(2015, 11, 1);
  expect(parse('2015-12', 'YYYY-MM')).toEqual(now);
});

test('YYYY-MM', () => {
  expect(Number.isNaN(parse('2015-00', 'YYYY-MM').getTime())).toBe(true);
});

test('YYYY-M', () => {
  const now = new Date(2015, 0, 1);
  expect(parse('2015-1', 'YYYY-M')).toEqual(now);
});

test('YYYY-M', () => {
  const now = new Date(2015, 11, 1);
  expect(parse('2015-12', 'YYYY-M')).toEqual(now);
});

test('YYYY-M', () => {
  expect(Number.isNaN(parse('2015-0', 'YYYY-M').getTime())).toBe(true);
});

test('YYYY-MM-DD', () => {
  const now = new Date(2015, 0, 1);
  expect(parse('2015-01-01', 'YYYY-MM-DD')).toEqual(now);
});

test('YYYY-MM-DD', () => {
  const now = new Date(2015, 11, 31);
  expect(parse('2015-12-31', 'YYYY-MM-DD')).toEqual(now);
});

test('YYYY-MM-DD', () => {
  expect(Number.isNaN(parse('2015-00-00', 'YYYY-MM-DD').getTime())).toBe(true);
});

test('YYYY-M-D', () => {
  const now = new Date(2015, 0, 1);
  expect(parse('2015-1-1', 'YYYY-M-D')).toEqual(now);
});

test('YYYY-M-D', () => {
  const now = new Date(2015, 11, 31);
  expect(parse('2015-12-31', 'YYYY-M-D')).toEqual(now);
});

test('YYYY-M-D', () => {
  expect(Number.isNaN(parse('2015-0-0', 'YYYY-M-D').getTime())).toBe(true);
});

test('YYYY-MM-DD HH', () => {
  const now = new Date(2015, 0, 1, 0);
  expect(parse('2015-01-01 00', 'YYYY-MM-DD HH')).toEqual(now);
});

test('YYYY-MM-DD HH', () => {
  const now = new Date(2015, 11, 31, 23);
  expect(parse('2015-12-31 23', 'YYYY-MM-DD HH')).toEqual(now);
});

test('YYYY-MM-DD HH', () => {
  expect(Number.isNaN(parse('2015-00-00 24', 'YYYY-MM-DD HH').getTime())).toBe(true);
});

test('YYYY-M-D H', () => {
  const now = new Date(2015, 0, 1, 0);
  expect(parse('2015-1-1 0', 'YYYY-M-D H')).toEqual(now);
});

test('YYYY-M-D H', () => {
  const now = new Date(2015, 11, 31, 23);
  expect(parse('2015-12-31 23', 'YYYY-M-D H')).toEqual(now);
});

test('YYYY-M-D H', () => {
  expect(Number.isNaN(parse('2015-0-0 24', 'YYYY-M-D H').getTime())).toBe(true);
});

test('YYYY-M-D hh A', () => {
  const now = new Date(2015, 0, 1, 0);
  expect(parse('2015-1-1 12 AM', 'YYYY-M-D hh A')).toEqual(now);
});

test('YYYY-M-D hh A', () => {
  const now = new Date(2015, 11, 31, 23);
  expect(parse('2015-12-31 11 PM', 'YYYY-M-D hh A')).toEqual(now);
});

test('YYYY-M-D hh A', () => {
  expect(Number.isNaN(parse('2015-0-0 12 AM', 'YYYY-M-D hh A').getTime())).toBe(true);
});

test('YYYY-M-D h A', () => {
  const now = new Date(2015, 0, 1, 0);
  expect(parse('2015-1-1 12 AM', 'YYYY-M-D h A')).toEqual(now);
});

test('YYYY-M-D h A', () => {
  const now = new Date(2015, 11, 31, 23);
  expect(parse('2015-12-31 11 PM', 'YYYY-M-D h A')).toEqual(now);
});

test('YYYY-M-D h A', () => {
  expect(Number.isNaN(parse('2015-0-0 12 AM', 'YYYY-M-D h A').getTime())).toBe(true);
});

test('YYYY-MM-DD HH:mm', () => {
  const now = new Date(2015, 0, 1, 0, 0);
  expect(parse('2015-01-01 00:00', 'YYYY-MM-DD HH:mm')).toEqual(now);
});

test('YYYY-MM-DD HH:mm', () => {
  const now = new Date(2015, 11, 31, 23, 59);
  expect(parse('2015-12-31 23:59', 'YYYY-MM-DD HH:mm')).toEqual(now);
});

test('YYYY-MM-DD HH:mm', () => {
  expect(Number.isNaN(parse('2015-00-00 24:60', 'YYYY-MM-DD HH:mm').getTime())).toBe(true);
});

test('YYYY-M-D H:m', () => {
  const now = new Date(2015, 0, 1, 0, 0);
  expect(parse('2015-1-1 0:0', 'YYYY-M-D H:m')).toEqual(now);
});

test('YYYY-M-D H:m', () => {
  const now = new Date(2015, 11, 31, 23, 59);
  expect(parse('2015-12-31 23:59', 'YYYY-M-D H:m')).toEqual(now);
});

test('YYYY-M-D H:m', () => {
  expect(Number.isNaN(parse('2015-0-0 24:60', 'YYYY-M-D H:m').getTime())).toBe(true);
});

test('YYYY-MM-DD HH:mm:ss', () => {
  const now = new Date(2015, 0, 1, 0, 0, 0);
  expect(parse('2015-01-01 00:00:00', 'YYYY-MM-DD HH:mm:ss')).toEqual(now);
});

test('YYYY-MM-DD HH:mm:ss', () => {
  const now = new Date(2015, 11, 31, 23, 59, 59);
  expect(parse('2015-12-31 23:59:59', 'YYYY-MM-DD HH:mm:ss')).toEqual(now);
});

test('YYYY-MM-DD HH:mm:ss', () => {
  expect(Number.isNaN(parse('2015-00-00 24:60:60', 'YYYY-MM-DD HH:mm:ss').getTime())).toBe(true);
});

test('YYYY-M-D H:m:s', () => {
  const now = new Date(2015, 0, 1, 0, 0);
  expect(parse('2015-1-1 0:0:0', 'YYYY-M-D H:m:s')).toEqual(now);
});

test('YYYY-M-D H:m:s', () => {
  const now = new Date(2015, 11, 31, 23, 59, 59);
  expect(parse('2015-12-31 23:59:59', 'YYYY-M-D H:m:s')).toEqual(now);
});

test('YYYY-M-D H:m:s', () => {
  expect(Number.isNaN(parse('2015-0-0 24:60:60', 'YYYY-M-D H:m:s').getTime())).toBe(true);
});

test('YYYY-M-D H:m:s.SSS', () => {
  const now = new Date(2015, 0, 1, 0, 0, 0);
  expect(parse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.SSS')).toEqual(now);
});

test('YYYY-M-D H:m:s.SSS', () => {
  const now = new Date(2015, 11, 31, 23, 59, 59, 999);
  expect(parse('2015-12-31 23:59:59.999', 'YYYY-M-D H:m:s.SSS')).toEqual(now);
});

test('YYYY-M-D H:m:s.SSS', () => {
  expect(Number.isNaN(parse('2015-0-0 24:60:61.000', 'YYYY-M-D H:m:s.SSS').getTime())).toBe(true);
});

test('YYYY-M-D H:m:s.SS', () => {
  const now = new Date(2015, 0, 1, 0, 0, 0);
  expect(parse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.SS')).toEqual(now);
});

test('YYYY-M-D H:m:s.SS', () => {
  const now = new Date(2015, 11, 31, 23, 59, 59, 990);
  expect(parse('2015-12-31 23:59:59.99', 'YYYY-M-D H:m:s.SS')).toEqual(now);
});

test('YYYY-M-D H:m:s.SS', () => {
  expect(Number.isNaN(parse('2015-0-0 24:60:61.00', 'YYYY-M-D H:m:s.SS').getTime())).toBe(true);
});

test('YYYY-M-D H:m:s.S', () => {
  const now = new Date(2015, 0, 1, 0, 0, 0);
  expect(parse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.S')).toEqual(now);
});

test('YYYY-M-D H:m:s.S', () => {
  const now = new Date(2015, 11, 31, 23, 59, 59, 900);
  expect(parse('2015-12-31 23:59:59.9', 'YYYY-M-D H:m:s.S')).toEqual(now);
});

test('YYYY M D H m s S', () => {
  const now = new Date(2015, 11, 31, 23, 59, 59, 900);
  expect(parse('2015-12-31 23:59:59.9', 'YYYY M D H m s S')).toEqual(now);
});

test('YYYY-M-D H:m:s.S', () => {
  expect(Number.isNaN(parse('2015-0-0 24:60:61.0', 'YYYY-M-D H:m:s.S').getTime())).toBe(true);
});

test('YYYY-M-D H:m:s.SSS Z', () => {
  const now = new Date(Date.UTC(2015, 0, 1, 0, 0, 0));
  expect(parse('2015-1-1 0:0:0.0 +0000', 'YYYY-M-D H:m:s.SSS Z')).toEqual(now);
});

test('YYYY-M-D H:m:s.SSS Z', () => {
  const now = new Date(Date.UTC(2015, 11, 31, 23, 59, 59, 999));
  expect(parse('2015-12-31 23:00:59.999 -0059', 'YYYY-M-D H:m:s.SSS Z')).toEqual(now);
});

test('YYYY-M-D H:m:s.SSS Z', () => {
  const now = new Date(Date.UTC(2015, 11, 31, 21, 59, 59, 999));
  expect(parse('2015-12-31 09:59:59.999 -1200', 'YYYY-M-D H:m:s.SSS Z')).toEqual(now);
});

test('YYYY-M-D H:m:s.SSS Z', () => {
  expect(Number.isNaN(parse('2015-12-31 09:58:59.999 -1201', 'YYYY-M-D H:m:s.SSS Z').getTime())).toBe(true);
});

test('YYYY-M-D H:m:s.SSS Z', () => {
  const now = new Date(Date.UTC(2015, 11, 30, 22, 0, 59, 999));
  expect(parse('2015-12-31 12:00:59.999 +1400', 'YYYY-M-D H:m:s.SSS Z')).toEqual(now);
});

test('YYYY-M-D H:m:s.SSS Z', () => {
  expect(Number.isNaN(parse('2015-12-31 12:01:59.999 +1401', 'YYYY-M-D H:m:s.SSS Z').getTime())).toBe(true);
});

test('YYYY-M-D H:m:s.SSS ZZ', () => {
  const now = new Date(Date.UTC(2015, 0, 1, 0, 0, 0));
  expect(parse('2015-1-1 0:0:0.0 +00:00', 'YYYY-M-D H:m:s.SSS ZZ')).toEqual(now);
});

test('YYYY-M-D H:m:s.SSS ZZ', () => {
  const now = new Date(Date.UTC(2015, 11, 31, 23, 59, 59, 999));
  expect(parse('2015-12-31 23:00:59.999 -00:59', 'YYYY-M-D H:m:s.SSS ZZ')).toEqual(now);
});

test('YYYY-M-D H:m:s.SSS ZZ', () => {
  const now = new Date(Date.UTC(2015, 11, 31, 21, 59, 59, 999));
  expect(parse('2015-12-31 09:59:59.999 -12:00', 'YYYY-M-D H:m:s.SSS ZZ')).toEqual(now);
});

test('YYYY-M-D H:m:s.SSS ZZ', () => {
  expect(Number.isNaN(parse('2015-12-31 09:58:59.999 -12:01', 'YYYY-M-D H:m:s.SSS ZZ').getTime())).toBe(true);
});

test('YYYY-M-D H:m:s.SSS ZZ', () => {
  const now = new Date(Date.UTC(2015, 11, 30, 22, 0, 59, 999));
  expect(parse('2015-12-31 12:00:59.999 +14:00', 'YYYY-M-D H:m:s.SSS ZZ')).toEqual(now);
});

test('YYYY-M-D H:m:s.SSS ZZ', () => {
  expect(Number.isNaN(parse('2015-12-31 12:01:59.999 +14:01', 'YYYY-M-D H:m:s.SSS ZZ').getTime())).toBe(true);
});

test('MMDDHHmmssSSS', () => {
  const now = new Date(1970, 11, 31, 23, 59, 59, 999);
  expect(parse('1231235959999', 'MMDDHHmmssSSS')).toEqual(now);
});

test('DDHHmmssSSS', () => {
  const now = new Date(1970, 0, 31, 23, 59, 59, 999);
  expect(parse('31235959999', 'DDHHmmssSSS')).toEqual(now);
});

test('HHmmssSSS', () => {
  const now = new Date(1970, 0, 1, 23, 59, 59, 999);
  expect(parse('235959999', 'HHmmssSSS')).toEqual(now);
});

test('mmssSSS', () => {
  const now = new Date(1970, 0, 1, 0, 59, 59, 999);
  expect(parse('5959999', 'mmssSSS')).toEqual(now);
});

test('ssSSS', () => {
  const now = new Date(1970, 0, 1, 0, 0, 59, 999);
  expect(parse('59999', 'ssSSS')).toEqual(now);
});

test('SSS', () => {
  const now = new Date(1970, 0, 1, 0, 0, 0, 999);
  expect(parse('999', 'SSS')).toEqual(now);
});

test('Z', () => {
  expect(Number.isNaN(parse('+000', 'Z').getTime())).toBe(true);
});

test('Z', () => {
  expect(Number.isNaN(parse('+00', 'Z').getTime())).toBe(true);
});

test('Z', () => {
  expect(Number.isNaN(parse('+0', 'Z').getTime())).toBe(true);
});

test('Z', () => {
  expect(Number.isNaN(parse('0', 'Z').getTime())).toBe(true);
});

test('Z', () => {
  expect(Number.isNaN(parse('0000', 'Z').getTime())).toBe(true);
});

test('Z', () => {
  expect(Number.isNaN(parse('00000', 'Z').getTime())).toBe(true);
});

test('ZZ', () => {
  expect(Number.isNaN(parse('+00:0', 'ZZ').getTime())).toBe(true);
});

test('ZZ', () => {
  expect(Number.isNaN(parse('+00:', 'ZZ').getTime())).toBe(true);
});

test('ZZ', () => {
  expect(Number.isNaN(parse('+0:', 'ZZ').getTime())).toBe(true);
});

test('ZZ', () => {
  expect(Number.isNaN(parse('0:', 'ZZ').getTime())).toBe(true);
});

test('ZZ', () => {
  expect(Number.isNaN(parse('00:00', 'ZZ').getTime())).toBe(true);
});

test('ZZ', () => {
  expect(Number.isNaN(parse('00:000', 'ZZ').getTime())).toBe(true);
});

test('foo', () => {
  expect(Number.isNaN(parse('20150101235959', 'foo').getTime())).toBe(true);
});

test('bar', () => {
  expect(Number.isNaN(parse('20150101235959', 'bar').getTime())).toBe(true);
});

test('YYYYMMDD', () => {
  expect(Number.isNaN(parse('20150101235959', 'YYYYMMDD').getTime())).toBe(true);
});

test('20150101235959', () => {
  expect(Number.isNaN(parse('20150101235959', '20150101235959').getTime())).toBe(true);
});

test('YYYY?M?D H?m?s?S', () => {
  expect(Number.isNaN(parse('2015-12-31 23:59:59.9', 'YYYY?M?D H?m?s?S').getTime())).toBe(true);
});

test('[Y]YYYY[M]M[D]D[H]H[m]m[s]s[S]S', () => {
  const now = new Date(2015, 11, 31, 23, 59, 59, 900);
  expect(parse('Y2015M12D31H23m59s59S9', '[Y]YYYY[M]M[D]D[H]H[m]m[s]s[S]S')).toEqual(now);
});

test('[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]', () => {
  expect(Number.isNaN(parse('[Y]2015[M]12[D]31[H]23[m]59[s]59[S]9', '[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]').getTime())).toBe(true);
});

test('                 ', () => {
  expect(Number.isNaN(parse('20151231235959900', '                 ').getTime())).toBe(true);
});

test('\\[YYYY-MM-DD HH:mm:ss\\]', () => {
  const now = new Date(2025, 7, 23, 14, 30, 45);
  expect(parse('[2025-08-23 14:30:45]', '\\[YYYY-MM-DD HH:mm:ss\\]')).toEqual(now);
});

describe('options', () => {
  test('hour12: h11', () => {
    expect(parse('2000-01-01 00:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' })).toEqual(new Date(2000, 0, 1, 0, 0));
    expect(parse('2000-01-01 11:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' })).toEqual(new Date(2000, 0, 1, 11, 0));
    expect(parse('2000-01-01 00:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' })).toEqual(new Date(2000, 0, 1, 12, 0));
    expect(parse('2000-01-01 11:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' })).toEqual(new Date(2000, 0, 1, 23, 0));

    expect(Number.isNaN(parse('2000-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' }).getTime())).toBe(true);
    expect(Number.isNaN(parse('2000-01-01 12:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' }).getTime())).toBe(true);
  });

  test('hour12: h12', () => {
    expect(parse('2000-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' })).toEqual(new Date(2000, 0, 1, 0, 0));
    expect(parse('2000-01-01 11:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' })).toEqual(new Date(2000, 0, 1, 11, 0));
    expect(parse('2000-01-01 12:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' })).toEqual(new Date(2000, 0, 1, 12, 0));
    expect(parse('2000-01-01 11:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' })).toEqual(new Date(2000, 0, 1, 23, 0));

    expect(Number.isNaN(parse('2000-01-01 00:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' }).getTime())).toBe(true);
    expect(Number.isNaN(parse('2000-01-01 00:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' }).getTime())).toBe(true);
  });

  test('ignoreCase: true', () => {
    expect(parse('2025 May 4 Sunday 11 AM', 'YYYY MMMM D dddd h A', { ignoreCase: true, plugins: [parser] })).toEqual(new Date(2025, 4, 4, 11, 0));
    expect(parse('2025 may 4 sunday 11 am', 'YYYY MMMM D dddd h A', { ignoreCase: true, plugins: [parser] })).toEqual(new Date(2025, 4, 4, 11, 0));
    expect(parse('2025 MAY 4 SUNDAY 11 AM', 'YYYY MMMM D dddd h A', { ignoreCase: true, plugins: [parser] })).toEqual(new Date(2025, 4, 4, 11, 0));
  });

  test('calendar: buddhist', () => {
    expect(parse('2000-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { calendar: 'buddhist' })).toEqual(new Date(2000 - 543, 0, 1, 0, 0));
    expect(parse('9999-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { calendar: 'buddhist' })).toEqual(new Date(9999 - 543, 0, 1, 0, 0));
    expect(parse('0544-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { calendar: 'buddhist' })).toEqual(new Date(544 - 543, -1900 * 12, 1, 0, 0));

    expect(Number.isNaN(parse('0543-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { calendar: 'buddhist' }).getTime())).toBe(true);
  });

  test('timeZone', () => {
    const now = new Date(Date.UTC(2025, 1 - 1, 1, 0));
    expect(parse('2024-12-31 16:00:00', 'YYYY-MM-DD HH:mm:ss', { timeZone: Los_Angeles })).toEqual(now);
    expect(parse('2025-01-01 09:00:00', 'YYYY-MM-DD HH:mm:ss', { timeZone: Tokyo })).toEqual(now);
    expect(parse('2025-01-01 00:00:00', 'YYYY-MM-DD HH:mm:ss', { timeZone: 'UTC' })).toEqual(now);

    const dummyTimeZone = {
      zone_name: Los_Angeles.zone_name,
      gmt_offset: [0]
    };

    expect(Number.isNaN(parse('2025-01-01 00:00:00', 'YYYY-MM-DD HH:mm:ss', { timeZone: dummyTimeZone }).getTime())).toBe(true);
  });
});

describe('timeZone Los_Angeles', () => {
  test('before DST', () => {
    const now = new Date('2021-03-14T09:59:59.999Z');
    expect(parse('2021-03-14 01:59:59.999', 'YYYY-MM-DD HH:mm:ss.SSS', { timeZone: Los_Angeles })).toEqual(now);
  });

  test('start DST 1', () => {
    const now = new Date('2021-03-14T10:00:00.000Z');
    expect(parse('2021-03-14 02:00:00.000', 'YYYY-MM-DD HH:mm:ss.SSS', { timeZone: Los_Angeles })).toEqual(now);
  });

  test('start DST 2', () => {
    const now = new Date('2021-03-14T10:00:00.000Z');
    expect(parse('2021-03-14 03:00:00.000', 'YYYY-MM-DD HH:mm:ss.SSS', { timeZone: Los_Angeles })).toEqual(now);
  });

  test('before of PST', () => {
    const now = new Date('2021-11-07T08:59:59.999Z');
    expect(parse('2021-11-07 01:59:59.999', 'YYYY-MM-DD HH:mm:ss.SSS', { timeZone: Los_Angeles })).toEqual(now);
  });

  test('end of DST', () => {
    const now = new Date('2021-11-07T10:00:00.000Z');
    expect(parse('2021-11-07 02:00:00.000', 'YYYY-MM-DD HH:mm:ss.SSS', { timeZone: Los_Angeles })).toEqual(now);
  });

  test('after of DST', () => {
    const now = new Date('2021-11-07T11:00:00.000Z');
    expect(parse('2021-11-07 03:00:00.000', 'YYYY-MM-DD HH:mm:ss.SSS', { timeZone: Los_Angeles })).toEqual(now);
  });
});

describe('timeZone Adelaide', () => {
  test('before of DST', () => {
    // Oct 3 2021 1:59:59.999 => 2021-10-02T16:29:59.999Z
    const dateString = 'Oct 3 2021 1:59:59.999';
    const formatString = 'MMM D YYYY H:mm:ss.SSS';
    const dateObj = new Date(Date.UTC(2021, 9, 2, 16, 29, 59, 999));

    expect(parse(dateString, formatString, { timeZone: Adelaide }).getTime()).toBe(dateObj.getTime());
  });

  test('start of DST 1', () => {
    // Oct 3 2021 2:00:00.000 => 2021-10-02T16:30:00.000Z
    const dateString = 'Oct 3 2021 2:00:00.000';
    const formatString = 'MMM D YYYY H:mm:ss.SSS';
    const dateObj = new Date(Date.UTC(2021, 9, 2, 16, 30, 0, 0));

    expect(parse(dateString, formatString, { timeZone: Adelaide }).getTime()).toBe(dateObj.getTime());
  });

  test('start of DST 2', () => {
    // Oct 3 2021 2:59:59.999 => 2021-10-02T17:29:59.999Z
    const dateString = 'Oct 3 2021 2:59:59.999';
    const formatString = 'MMM D YYYY H:mm:ss.SSS';
    const dateObj = new Date(Date.UTC(2021, 9, 2, 17, 29, 59, 999));

    expect(parse(dateString, formatString, { timeZone: Adelaide }).getTime()).toBe(dateObj.getTime());
  });

  test('start of DST 3', () => {
    // Oct 3 2021 3:00:00.000 => 2021-10-02T16:30:00.000Z
    const dateString = 'Oct 3 2021 3:00:00.000';
    const formatString = 'MMM D YYYY H:mm:ss.SSS';
    const dateObj = new Date(Date.UTC(2021, 9, 2, 16, 30, 0, 0));

    expect(parse(dateString, formatString, { timeZone: Adelaide }).getTime()).toBe(dateObj.getTime());
  });

  test('end of DST', () => {
    // Apr 4 2021 2:59:59.999 => 2021-04-03T16:29:59.999Z
    const dateString = 'Apr 4 2021 2:59:59.999';
    const formatString = 'MMM D YYYY H:mm:ss.SSS';
    const dateObj = new Date(Date.UTC(2021, 3, 3, 16, 29, 59, 999));

    expect(parse(dateString, formatString, { timeZone: Adelaide }).getTime()).toBe(dateObj.getTime());
  });

  test('after DST', () => {
    // Apr 4 2021 3:00:00.000 => 2021-04-03T17:30:00.000Z
    const dateString = 'Apr 4 2021 3:00:00.000';
    const formatString = 'MMM D YYYY H:mm:ss.SSS';
    const dateObj = new Date(Date.UTC(2021, 3, 3, 17, 30, 0, 0));

    expect(parse(dateString, formatString, { timeZone: Adelaide }).getTime()).toBe(dateObj.getTime());
  });
});

describe('timeZone Apia', () => {
  beforeAll(() => (process.env.TZ = 'Pacific/Apia'));

  test('1.1', () => {
    const dateString = '04 July, 1892 11:59:59 PM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(1892, 7 - 1, 4, 23, 59, 59);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });

  test('1.2', () => {
    const dateString = '04 July, 1892 12:00:00 AM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(1892, 7 - 1, 4, 0, 0, 0);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });

  test('2.1', () => {
    const dateString = '31 December, 1910 11:59:59 PM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(1910, 12 - 1, 31, 23, 59, 59);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });

  test('2.2', () => {
    const dateString = '31 December, 1910 11:56:56 PM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(1910, 12 - 1, 31, 23, 56, 56);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });

  test('3.1', () => {
    const dateString = '31 December, 1949 11:59:59 PM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(1949, 12 - 1, 31, 23, 59, 59);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });

  test('3.2', () => {
    const dateString = '01 January, 1950 12:30:00 AM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(1950, 1 - 1, 1, 0, 30, 0);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });

  test('4.1', () => {
    const dateString = '25 September, 2010 11:59:59 PM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(2010, 9 - 1, 25, 23, 59, 59);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });

  test('4.2', () => {
    const dateString = '26 September, 2010 01:00:00 AM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(2010, 9 - 1, 26, 1, 0, 0);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });

  test('5.1', () => {
    const dateString = '02 April, 2011 03:59:59 AM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(2011, 4 - 1, 2, 3, 59, 59);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });

  test('5.2', () => {
    const dateString = '02 April, 2011 03:00:00 AM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(2011, 4 - 1, 2, 3, 0, 0);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });

  test('6.1', () => {
    const dateString = '24 September, 2011 02:59:59 AM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(2011, 9 - 1, 24, 2, 59, 59);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });

  test('6.2', () => {
    const dateString = '24 September, 2011 04:00:00 AM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(2011, 9 - 1, 24, 4, 0, 0);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });

  test('7.1', () => {
    const dateString = '29 December, 2011 11:59:59 PM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(2011, 12 - 1, 29, 23, 59, 59);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });

  test('7.2', () => {
    const dateString = '31 December, 2011 12:00:00 AM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(2011, 12 - 1, 31, 0, 0, 0);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });

  test('8.1', () => {
    const dateString = '01 April, 2012 03:59:59 AM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(2012, 4 - 1, 1, 3, 59, 59);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });

  test('8.2', () => {
    const dateString = '01 April, 2012 03:00:00 AM';
    const formatString = 'DD MMMM, YYYY hh:mm:ss A';
    const dateObj = new Date(2012, 4 - 1, 1, 3, 0, 0);

    expect(parse(dateString, formatString, { timeZone: Apia }).getTime()).toBe(dateObj.getTime());
  });
});
