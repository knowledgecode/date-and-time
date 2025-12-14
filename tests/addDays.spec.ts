import { expect, test, describe, beforeAll } from 'vitest';
import { addDays } from '@/index.ts';
import Los_Angeles from '@/timezones/America/Los_Angeles.ts';

describe('Local Time', () => {
  beforeAll(() => (process.env.TZ = 'America/Los_Angeles'));

  test('One day after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 1, 1, 10));

    expect(addDays(date1, 1)).toEqual(date2);
  });

  test('Two days after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 1, 2, 10));

    expect(addDays(date1, 2)).toEqual(date2);
  });

  test('Three days after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 1, 3, 10));

    expect(addDays(date1, 3)).toEqual(date2);
  });

  test('One day after 1:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 9));
    const date2 = new Date(Date.UTC(2024, 1, 11, 9));

    expect(addDays(date1, 1)).toEqual(date2);
  });

  test('One day after 2:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 10));
    const date2 = new Date(Date.UTC(2024, 1, 11, 10));

    expect(addDays(date1, 1)).toEqual(date2);
  });

  test('One day after 3:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 11));
    const date2 = new Date(Date.UTC(2024, 1, 11, 11));

    expect(addDays(date1, 1)).toEqual(date2);
  });

  test('One day before 1:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 8));
    const date2 = new Date(Date.UTC(2024, 11, 2, 8));

    expect(addDays(date1, -1)).toEqual(date2);
  });

  test('One day before 2:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 9));
    const date2 = new Date(Date.UTC(2024, 11, 2, 9));

    expect(addDays(date1, -1)).toEqual(date2);
  });

  test('One day before 3:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 10));
    const date2 = new Date(Date.UTC(2024, 11, 2, 10));

    expect(addDays(date1, -1)).toEqual(date2);
  });

  test('One day after 1:00 AM on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 8));
    const date2 = new Date(Date.UTC(2024, 10, 4, 9));

    expect(addDays(date1, 1)).toEqual(date2);
  });

  test('One day after 1:00 AM PST on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 9));
    const date2 = new Date(Date.UTC(2024, 10, 4, 9));

    expect(addDays(date1, 1)).toEqual(date2);
  });

  test('One day after 2:00 AM on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 10));
    const date2 = new Date(Date.UTC(2024, 10, 4, 10));

    expect(addDays(date1, 1)).toEqual(date2);
  });

  test('One day after 1:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 8));
    const date2 = new Date(Date.UTC(2024, 9, 4, 8));

    expect(addDays(date1, 1)).toEqual(date2);
  });

  test('One day after 2:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 9));
    const date2 = new Date(Date.UTC(2024, 9, 4, 9));

    expect(addDays(date1, 1)).toEqual(date2);
  });

  test('One day after 3:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 10));
    const date2 = new Date(Date.UTC(2024, 9, 4, 10));

    expect(addDays(date1, 1)).toEqual(date2);
  });
});

describe('UTC Time', () => {
  beforeAll(() => (process.env.TZ = 'Asia/Tokyo'));

  test('One day after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 1, 1, 10));

    expect(addDays(date1, 1, 'UTC')).toEqual(date2);
  });

  test('Two days after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 1, 2, 10));

    expect(addDays(date1, 2, 'UTC')).toEqual(date2);
  });

  test('Three days after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 1, 3, 10));

    expect(addDays(date1, 3, 'UTC')).toEqual(date2);
  });

  test('One day after 1:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 9));
    const date2 = new Date(Date.UTC(2024, 1, 11, 9));

    expect(addDays(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One day after 2:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 10));
    const date2 = new Date(Date.UTC(2024, 1, 11, 10));

    expect(addDays(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One day after 3:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 11));
    const date2 = new Date(Date.UTC(2024, 1, 11, 11));

    expect(addDays(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One day before 1:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 8));
    const date2 = new Date(Date.UTC(2024, 11, 2, 8));

    expect(addDays(date1, -1, 'UTC')).toEqual(date2);
  });

  test('One day before 2:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 9));
    const date2 = new Date(Date.UTC(2024, 11, 2, 9));

    expect(addDays(date1, -1, 'UTC')).toEqual(date2);
  });

  test('One day before 3:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 10));
    const date2 = new Date(Date.UTC(2024, 11, 2, 10));

    expect(addDays(date1, -1, 'UTC')).toEqual(date2);
  });

  test('One day after 1:00 AM on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 8));
    const date2 = new Date(Date.UTC(2024, 10, 4, 8));

    expect(addDays(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One day after 1:00 AM PST on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 9));
    const date2 = new Date(Date.UTC(2024, 10, 4, 9));

    expect(addDays(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One day after 2:00 AM on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 10));
    const date2 = new Date(Date.UTC(2024, 10, 4, 10));

    expect(addDays(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One day after 1:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 8));
    const date2 = new Date(Date.UTC(2024, 9, 4, 8));

    expect(addDays(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One day after 2:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 9));
    const date2 = new Date(Date.UTC(2024, 9, 4, 9));

    expect(addDays(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One day after 3:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 10));
    const date2 = new Date(Date.UTC(2024, 9, 4, 10));

    expect(addDays(date1, 1, 'UTC')).toEqual(date2);
  });
});

describe('America/Los_Angeles', () => {
  beforeAll(() => (process.env.TZ = 'Australia/Sydney'));

  test('One day after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 1, 1, 10));

    expect(addDays(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('Two days after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 1, 2, 10));

    expect(addDays(date1, 2, Los_Angeles)).toEqual(date2);
  });

  test('Three days after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 1, 3, 10));

    expect(addDays(date1, 3, Los_Angeles)).toEqual(date2);
  });

  test('One day after 1:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 9));
    const date2 = new Date(Date.UTC(2024, 1, 11, 9));

    expect(addDays(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One day after 2:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 10));
    const date2 = new Date(Date.UTC(2024, 1, 11, 10));

    expect(addDays(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One day after 3:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 11));
    const date2 = new Date(Date.UTC(2024, 1, 11, 11));

    expect(addDays(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One day before 1:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 8));
    const date2 = new Date(Date.UTC(2024, 11, 2, 8));

    expect(addDays(date1, -1, Los_Angeles)).toEqual(date2);
  });

  test('One day before 2:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 9));
    const date2 = new Date(Date.UTC(2024, 11, 2, 9));

    expect(addDays(date1, -1, Los_Angeles)).toEqual(date2);
  });

  test('One day before 3:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 10));
    const date2 = new Date(Date.UTC(2024, 11, 2, 10));

    expect(addDays(date1, -1, Los_Angeles)).toEqual(date2);
  });

  test('One day after 1:00 AM on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 8));
    const date2 = new Date(Date.UTC(2024, 10, 4, 9));

    expect(addDays(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One day after 1:00 AM PST on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 9));
    const date2 = new Date(Date.UTC(2024, 10, 4, 9));

    expect(addDays(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One day after 2:00 AM on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 10));
    const date2 = new Date(Date.UTC(2024, 10, 4, 10));

    expect(addDays(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One day after 1:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 8));
    const date2 = new Date(Date.UTC(2024, 9, 4, 8));

    expect(addDays(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One day after 2:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 9));
    const date2 = new Date(Date.UTC(2024, 9, 4, 9));

    expect(addDays(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One day after 3:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 10));
    const date2 = new Date(Date.UTC(2024, 9, 4, 10));

    expect(addDays(date1, 1, Los_Angeles)).toEqual(date2);
  });
});
