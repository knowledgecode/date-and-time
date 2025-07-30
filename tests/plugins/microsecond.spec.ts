import { describe, expect, test, beforeAll } from 'vitest';
import { parse } from '../../src/index.ts';
import { parser as microsecond } from '../../src/plugins/microsecond.ts';

beforeAll(() => (process.env.TZ = 'UTC'));

describe('plugins', () => {
  test('SSSS', () => {
    expect(parse('12:34:56 0000', 'HH:mm:ss SSSS', { plugins: [microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 0));
    expect(parse('12:34:56 9999', 'HH:mm:ss SSSS', { plugins: [microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 999));
  });

  test('SSSSS', () => {
    expect(parse('12:34:56 00000', 'HH:mm:ss SSSSS', { plugins: [microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 0));
    expect(parse('12:34:56 99999', 'HH:mm:ss SSSSS', { plugins: [microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 999));
  });

  test('SSSSSS', () => {
    expect(parse('12:34:56 000000', 'HH:mm:ss SSSSSS', { plugins: [microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 0));
    expect(parse('12:34:56 999999', 'HH:mm:ss SSSSSS', { plugins: [microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 999));
  });

  test('f', () => {
    expect(parse('12:34:56 000.0', 'HH:mm:ss SSS.f', { plugins: [microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 0));
    expect(parse('12:34:56 999.9', 'HH:mm:ss SSS.f', { plugins: [microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 999));
  });

  test('ff', () => {
    expect(parse('12:34:56 000.00', 'HH:mm:ss SSS.ff', { plugins: [microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 0));
    expect(parse('12:34:56 999.99', 'HH:mm:ss SSS.ff', { plugins: [microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 999));
  });

  test('fff', () => {
    expect(parse('12:34:56 000.000', 'HH:mm:ss SSS.fff', { plugins: [microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 0));
    expect(parse('12:34:56 999.999', 'HH:mm:ss SSS.fff', { plugins: [microsecond] })).toEqual(new Date(1970, 1 - 1, 1, 12, 34, 56, 999));
  });
});
