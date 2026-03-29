import { describe, expect, test } from 'vitest';
import { format } from '@/index.ts';
import { formatter } from '@/plugins/week.ts';

describe('plugins', () => {
  describe('formatter', () => {
    test('W', () => {
      // 2024-01-01 is Monday - ISO week year equals calendar year, no offset bug
      expect(format(new Date(2024, 0, 1), 'W', { plugins: [formatter] })).toBe('1');
      // last day of ISO week 1 (Sunday)
      expect(format(new Date(2024, 0, 7), 'W', { plugins: [formatter] })).toBe('1');
      // first day of ISO week 2 (Monday)
      expect(format(new Date(2024, 0, 8), 'W', { plugins: [formatter] })).toBe('2');
      // mid-year (Thursday is the anchor day of its own ISO week)
      expect(format(new Date(2024, 6, 4), 'W', { plugins: [formatter] })).toBe('27');
      // late December still in ISO week year 2024
      expect(format(new Date(2024, 11, 23), 'W', { plugins: [formatter] })).toBe('52');
      // Dec 30, 2024 (Monday) belongs to ISO week 1 of 2025
      expect(format(new Date(2024, 11, 30), 'W', { plugins: [formatter] })).toBe('1');
      // Jan 1, 2021 (Friday) belongs to ISO week 53 of 2020
      expect(format(new Date(2021, 0, 1), 'W', { plugins: [formatter] })).toBe('53');
      // Dec 31, 2015 (Thursday) belongs to ISO week 53 of 2015
      expect(format(new Date(2015, 11, 31), 'W', { plugins: [formatter] })).toBe('53');
      // Jan 6, 2025 (Monday) is ISO week 2 of 2025
      expect(format(new Date(2025, 0, 6), 'W', { plugins: [formatter] })).toBe('2');
    });

    test('WW', () => {
      expect(format(new Date(2024, 0, 1), 'WW', { plugins: [formatter] })).toBe('01');
      expect(format(new Date(2024, 0, 8), 'WW', { plugins: [formatter] })).toBe('02');
      expect(format(new Date(2024, 6, 4), 'WW', { plugins: [formatter] })).toBe('27');
      expect(format(new Date(2024, 11, 23), 'WW', { plugins: [formatter] })).toBe('52');
      expect(format(new Date(2021, 0, 1), 'WW', { plugins: [formatter] })).toBe('53');
    });

    test('GGGG', () => {
      // ISO week year equals calendar year
      expect(format(new Date(2024, 0, 1), 'GGGG', { plugins: [formatter] })).toBe('2024');
      // Dec 30, 2024 crosses into ISO week year 2025
      expect(format(new Date(2024, 11, 30), 'GGGG', { plugins: [formatter] })).toBe('2025');
      // Jan 1, 2021 crosses back into ISO week year 2020
      expect(format(new Date(2021, 0, 1), 'GGGG', { plugins: [formatter] })).toBe('2020');
    });

    test('GG', () => {
      expect(format(new Date(2024, 0, 1), 'GG', { plugins: [formatter] })).toBe('24');
      expect(format(new Date(2024, 11, 30), 'GG', { plugins: [formatter] })).toBe('25');
      expect(format(new Date(2021, 0, 1), 'GG', { plugins: [formatter] })).toBe('20');
    });

    test('GGGG and YYYY differ at year boundaries', () => {
      // Dec 30, 2024: calendar year = 2024, ISO week year = 2025
      expect(format(new Date(2024, 11, 30), 'YYYY GGGG', { plugins: [formatter] })).toBe('2024 2025');
    });

    test('edge cases - min date', () => {
      const minDate = new Date(1, 0 - 1900 * 12, 1);

      // Jan 1, year 1 (Monday): Thursday of that week is Jan 4, year 1
      // → ISO week year = 1, first week of year 1
      expect(format(minDate, 'GGGG', { plugins: [formatter] })).toBe('0001');
      expect(format(minDate, 'GG', { plugins: [formatter] })).toBe('01');
      expect(format(minDate, 'G', { plugins: [formatter] })).toBe('1');
      expect(format(minDate, 'W', { plugins: [formatter] })).toBe('1');
      expect(format(minDate, 'WW', { plugins: [formatter] })).toBe('01');
    });

    test('edge cases - year 9999', () => {
      const maxDate = new Date(9999, 11, 31);

      // Dec 31, 9999 (Friday): Thursday of that week is Dec 30, 9999
      // → ISO week year = 9999 (does NOT cross into 10000)
      expect(format(maxDate, 'GGGG', { plugins: [formatter] })).toBe('9999');
      expect(format(maxDate, 'GG', { plugins: [formatter] })).toBe('99');
      expect(format(maxDate, 'G', { plugins: [formatter] })).toBe('9999');
      expect(format(maxDate, 'W', { plugins: [formatter] })).toBe('52');
      expect(format(maxDate, 'WW', { plugins: [formatter] })).toBe('52');
    });
  });
});
