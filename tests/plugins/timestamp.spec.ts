import { describe, expect, test, beforeAll } from 'vitest';
import { format } from '@/index.ts';
import { formatter } from '@/plugins/timestamp.ts';

beforeAll(() => (process.env.TZ = 'UTC'));

describe('plugins', () => {
  describe('formatter', () => {
    test('t — Unix timestamp in seconds (floor)', () => {
      expect(format(new Date(0), 't', { plugins: [formatter] })).toBe('0');          // epoch
      expect(format(new Date(1000), 't', { plugins: [formatter] })).toBe('1');       // exactly 1 second
      expect(format(new Date(999), 't', { plugins: [formatter] })).toBe('0');        // just under 1 second → floor
      expect(format(new Date(1999), 't', { plugins: [formatter] })).toBe('1');       // 1.999 s → floor to 1
      expect(format(new Date(1000000000000), 't', { plugins: [formatter] })).toBe('1000000000'); // Sep 9, 2001
    });

    test('T — Unix timestamp in milliseconds', () => {
      expect(format(new Date(0), 'T', { plugins: [formatter] })).toBe('0');          // epoch
      expect(format(new Date(1000), 'T', { plugins: [formatter] })).toBe('1000');    // 1 second
      expect(format(new Date(999), 'T', { plugins: [formatter] })).toBe('999');      // 999 ms
      expect(format(new Date(1000000000000), 'T', { plugins: [formatter] })).toBe('1000000000000');
    });
  });
});
