import { expect, test } from 'vitest';
import { compile } from '../src/index.ts';

test('YYYY', () => {
  const obj = ['YYYY', 'YYYY'];
  expect(compile('YYYY')).toEqual(obj);
});

test('Y', () => {
  const obj = ['Y', 'Y'];
  expect(compile('Y')).toEqual(obj);
});

test('YYYY MMMM', () => {
  const obj = ['YYYY MMMM', 'YYYY', ' ', 'MMMM'];
  expect(compile('YYYY MMMM')).toEqual(obj);
});

test('YYYY MMM', () => {
  const obj = ['YYYY MMM', 'YYYY', ' ', 'MMM'];
  expect(compile('YYYY MMM')).toEqual(obj);
});

test('YYYY-MM', () => {
  const obj = ['YYYY-MM', 'YYYY', '-', 'MM'];
  expect(compile('YYYY-MM')).toEqual(obj);
});

test('YYYY-M', () => {
  const obj = ['YYYY-M', 'YYYY', '-', 'M'];
  expect(compile('YYYY-M')).toEqual(obj);
});

test('YYYY-MM-DD', () => {
  const obj = ['YYYY-MM-DD', 'YYYY', '-', 'MM', '-', 'DD'];
  expect(compile('YYYY-MM-DD')).toEqual(obj);
});

test('YYYY-M-D', () => {
  const obj = ['YYYY-M-D', 'YYYY', '-', 'M', '-', 'D'];
  expect(compile('YYYY-M-D')).toEqual(obj);
});

test('YYYY-MM-DD HH', () => {
  const obj = ['YYYY-MM-DD HH', 'YYYY', '-', 'MM', '-', 'DD', ' ', 'HH'];
  expect(compile('YYYY-MM-DD HH')).toEqual(obj);
});

test('YYYY-M-D H', () => {
  const obj = ['YYYY-M-D H', 'YYYY', '-', 'M', '-', 'D', ' ', 'H'];
  expect(compile('YYYY-M-D H')).toEqual(obj);
});

test('YYYY-M-D hh A', () => {
  const obj = ['YYYY-M-D hh A', 'YYYY', '-', 'M', '-', 'D', ' ', 'hh', ' ', 'A'];
  expect(compile('YYYY-M-D hh A')).toEqual(obj);
});

test('YYYY-M-D h A', () => {
  const obj = ['YYYY-M-D h A', 'YYYY', '-', 'M', '-', 'D', ' ', 'h', ' ', 'A'];
  expect(compile('YYYY-M-D h A')).toEqual(obj);
});

test('YYYY-MM-DD HH:mm', () => {
  const obj = ['YYYY-MM-DD HH:mm', 'YYYY', '-', 'MM', '-', 'DD', ' ', 'HH', ':', 'mm'];
  expect(compile('YYYY-MM-DD HH:mm')).toEqual(obj);
});

test('YYYY-M-D H:m', () => {
  const obj = ['YYYY-M-D H:m', 'YYYY', '-', 'M', '-', 'D', ' ', 'H', ':', 'm'];
  expect(compile('YYYY-M-D H:m')).toEqual(obj);
});

test('YYYY-MM-DD HH:mm:ss', () => {
  const obj = ['YYYY-MM-DD HH:mm:ss', 'YYYY', '-', 'MM', '-', 'DD', ' ', 'HH', ':', 'mm', ':', 'ss'];
  expect(compile('YYYY-MM-DD HH:mm:ss')).toEqual(obj);
});

test('YYYY-M-D H:m:s', () => {
  const obj = ['YYYY-M-D H:m:s', 'YYYY', '-', 'M', '-', 'D', ' ', 'H', ':', 'm', ':', 's'];
  expect(compile('YYYY-M-D H:m:s')).toEqual(obj);
});

test('YYYY-M-D H:m:s.SSS', () => {
  const obj = ['YYYY-M-D H:m:s.SSS', 'YYYY', '-', 'M', '-', 'D', ' ', 'H', ':', 'm', ':', 's', '.', 'SSS'];
  expect(compile('YYYY-M-D H:m:s.SSS')).toEqual(obj);
});

test('YYYY-M-D H:m:s.SS', () => {
  const obj = ['YYYY-M-D H:m:s.SS', 'YYYY', '-', 'M', '-', 'D', ' ', 'H', ':', 'm', ':', 's', '.', 'SS'];
  expect(compile('YYYY-M-D H:m:s.SS')).toEqual(obj);
});

test('YYYY-M-D H:m:s.S', () => {
  const obj = ['YYYY-M-D H:m:s.S', 'YYYY', '-', 'M', '-', 'D', ' ', 'H', ':', 'm', ':', 's', '.', 'S'];
  expect(compile('YYYY-M-D H:m:s.S')).toEqual(obj);
});

test('MMDDHHmmssSSS', () => {
  const obj = ['MMDDHHmmssSSS', 'MM', 'DD', 'HH', 'mm', 'ss', 'SSS'];
  expect(compile('MMDDHHmmssSSS')).toEqual(obj);
});

test('DDHHmmssSSS', () => {
  const obj = ['DDHHmmssSSS', 'DD', 'HH', 'mm', 'ss', 'SSS'];
  expect(compile('DDHHmmssSSS')).toEqual(obj);
});

test('HHmmssSSS', () => {
  const obj = ['HHmmssSSS', 'HH', 'mm', 'ss', 'SSS'];
  expect(compile('HHmmssSSS')).toEqual(obj);
});

test('mmssSSS', () => {
  const obj = ['mmssSSS', 'mm', 'ss', 'SSS'];
  expect(compile('mmssSSS')).toEqual(obj);
});

test('ssSSS', () => {
  const obj = ['ssSSS', 'ss', 'SSS'];
  expect(compile('ssSSS')).toEqual(obj);
});

test('SSS', () => {
  const obj = ['SSS', 'SSS'];
  expect(compile('SSS')).toEqual(obj);
});

test('foo', () => {
  const obj = ['foo', 'f', 'oo'];
  expect(compile('foo')).toEqual(obj);
});

test('bar', () => {
  const obj = ['bar', 'b', 'a', 'r'];
  expect(compile('bar')).toEqual(obj);
});

test('YYYYMMDD', () => {
  const obj = ['YYYYMMDD', 'YYYY', 'MM', 'DD'];
  expect(compile('YYYYMMDD')).toEqual(obj);
});

test('20150101235959', () => {
  const obj = ['20150101235959', '2', '0', '1', '5', '0', '1', '0', '1', '2', '3', '5', '9', '5', '9'];
  expect(compile('20150101235959')).toEqual(obj);
});

test('YYYY?M?D H?m?s?S', () => {
  const obj = ['YYYY?M?D H?m?s?S', 'YYYY', '?', 'M', '?', 'D', ' ', 'H', '?', 'm', '?', 's', '?', 'S'];
  expect(compile('YYYY?M?D H?m?s?S')).toEqual(obj);
});

test('[Y]YYYY[M]M[D]D[H]H[m]m[s]s[S]S', () => {
  const obj = ['[Y]YYYY[M]M[D]D[H]H[m]m[s]s[S]S', '[Y]', 'YYYY', '[M]', 'M', '[D]', 'D', '[H]', 'H', '[m]', 'm', '[s]', 's', '[S]', 'S'];
  expect(compile('[Y]YYYY[M]M[D]D[H]H[m]m[s]s[S]S')).toEqual(obj);
});

test('[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]', () => {
  const obj = ['[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]', '[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]'];
  expect(compile('[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]')).toEqual(obj);
});

test('                 ', () => {
  const obj = ['                 ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
  expect(compile('                 ')).toEqual(obj);
});

test('[empty]', () => {
  const obj = [''] as string[];
  expect(compile('')).toEqual(obj);
});

test('\\[YYYY-MM-DD\\]', () => {
  const obj = ['\\[YYYY-MM-DD\\]', '[', 'YYYY', '-', 'MM', '-', 'DD', ']'];
  expect(compile('\\[YYYY-MM-DD\\]')).toEqual(obj);
});
