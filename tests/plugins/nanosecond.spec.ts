import { describe, expect, test, beforeAll } from 'vitest';
import { parse } from '../../src/index.ts';
import { parser as nanosecond } from '../../src/plugins/nanosecond.ts';
import { parser as microsecond } from '../../src/plugins/microsecond.ts';

beforeAll(() => (process.env.TZ = 'UTC'));

describe('plugins', () => {
  test('SSSSSSS', () => {
    expect(parse('12:34:56 0000000', 'HH:mm:ss SSSSSSS', { plugins: [nanosecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 0));
    expect(parse('12:34:56 9999999', 'HH:mm:ss SSSSSSS', { plugins: [nanosecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 999));
  });

  test('SSSSSSSS', () => {
    expect(parse('12:34:56 00000000', 'HH:mm:ss SSSSSSSS', { plugins: [nanosecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 0));
    expect(parse('12:34:56 99999999', 'HH:mm:ss SSSSSSSS', { plugins: [nanosecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 999));
  });

  test('SSSSSSSSS', () => {
    expect(parse('12:34:56 000000000', 'HH:mm:ss SSSSSSSSS', { plugins: [nanosecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 0));
    expect(parse('12:34:56 999999999', 'HH:mm:ss SSSSSSSSS', { plugins: [nanosecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 999));
  });

  test('F', () => {
    expect(parse('12:34:56 000000.0', 'HH:mm:ss SSSSSS.F', { plugins: [nanosecond, microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 0));
    expect(parse('12:34:56 999999.9', 'HH:mm:ss SSSSSS.F', { plugins: [nanosecond, microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 999));
  });

  test('FF', () => {
    expect(parse('12:34:56 000000.00', 'HH:mm:ss SSSSSS.FF', { plugins: [nanosecond, microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 0));
    expect(parse('12:34:56 999999.99', 'HH:mm:ss SSSSSS.FF', { plugins: [nanosecond, microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 999));
  });

  test('FFF', () => {
    expect(parse('12:34:56 000000.000', 'HH:mm:ss SSSSSS.FFF', { plugins: [nanosecond, microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 0));
    expect(parse('12:34:56 999999.999', 'HH:mm:ss SSSSSS.FFF', { plugins: [nanosecond, microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 999));
  });
});
