import { describe, expect, test, beforeAll } from 'vitest';
import { format } from '../../src/index.ts';
import { formatter as zonename } from '../../src/plugins/zonename.ts';
import Los_Angeles from '../../src/timezones/America/Los_Angeles.ts';
import Tokyo from '../../src/timezones/Asia/Tokyo.ts';

beforeAll(() => (process.env.TZ = 'UTC'));

describe('plugins', () => {
  test('z', () => {
    const now = new Date(2025, 1 - 1, 1, 0);

    expect(format(now, 'z', { plugins: [zonename] })).toBe('UTC');
    expect(format(now, 'z', { plugins: [zonename], timeZone: 'UTC' })).toBe('UTC');
    expect(format(now, 'z', { plugins: [zonename], timeZone: Los_Angeles })).toBe('PST');
    expect(format(now, 'z', { plugins: [zonename], timeZone: Tokyo })).toBe('JST');
  });

  test('zz', () => {
    const now = new Date(2025, 1 - 1, 1, 0);

    expect(format(now, 'zz', { plugins: [zonename] })).toBe('Coordinated Universal Time');
    expect(format(now, 'zz', { plugins: [zonename], timeZone: 'UTC' })).toBe('Coordinated Universal Time');
    expect(format(now, 'zz', { plugins: [zonename], timeZone: Los_Angeles })).toBe('Pacific Standard Time');
    expect(format(now, 'zz', { plugins: [zonename], timeZone: Tokyo })).toBe('Japan Standard Time');
  });
});
