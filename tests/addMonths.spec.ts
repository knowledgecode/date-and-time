import { expect, test, describe, beforeAll } from 'vitest';
import { addMonths } from '@/index.ts';
import Los_Angeles from '@/timezones/America/Los_Angeles.ts';

describe('Local Time', () => {
  beforeAll(() => (process.env.TZ = 'America/Los_Angeles'));

  test('One month after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 1, 29, 10));

    expect(addMonths(date1, 1)).toEqual(date2);
  });

  test('Two months after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 2, 31, 9));

    expect(addMonths(date1, 2)).toEqual(date2);
  });

  test('Three months after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 3, 30, 9));

    expect(addMonths(date1, 3)).toEqual(date2);
  });

  test('One month after 1:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 9));
    const date2 = new Date(Date.UTC(2024, 2, 10, 9));

    expect(addMonths(date1, 1)).toEqual(date2);
  });

  test('One month after 2:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 10));
    const date2 = new Date(Date.UTC(2024, 2, 10, 10));

    expect(addMonths(date1, 1)).toEqual(date2);
  });

  test('One month after 3:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 11));
    const date2 = new Date(Date.UTC(2024, 2, 10, 10));

    expect(addMonths(date1, 1)).toEqual(date2);
  });

  test('One month before 1:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 8));
    const date2 = new Date(Date.UTC(2024, 10, 3, 7));

    expect(addMonths(date1, -1)).toEqual(date2);
  });

  test('One month before 2:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 9));
    const date2 = new Date(Date.UTC(2024, 10, 3, 8));

    expect(addMonths(date1, -1)).toEqual(date2);
  });

  test('One month before 3:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 10));
    const date2 = new Date(Date.UTC(2024, 10, 3, 10));

    expect(addMonths(date1, -1)).toEqual(date2);
  });

  test('One month after 1:00 AM on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 8));
    const date2 = new Date(Date.UTC(2024, 11, 3, 9));

    expect(addMonths(date1, 1)).toEqual(date2);
  });

  test('One month after 1:00 AM PST on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 9));
    const date2 = new Date(Date.UTC(2024, 11, 3, 9));

    expect(addMonths(date1, 1)).toEqual(date2);
  });

  test('One month after 2:00 AM on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 10));
    const date2 = new Date(Date.UTC(2024, 11, 3, 10));

    expect(addMonths(date1, 1)).toEqual(date2);
  });

  test('One month after 1:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 8));
    const date2 = new Date(Date.UTC(2024, 10, 3, 8));

    expect(addMonths(date1, 1)).toEqual(date2);
  });

  test('One month after 2:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 9));
    const date2 = new Date(Date.UTC(2024, 10, 3, 10));

    expect(addMonths(date1, 1)).toEqual(date2);
  });

  test('One month after 3:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 10));
    const date2 = new Date(Date.UTC(2024, 10, 3, 11));

    expect(addMonths(date1, 1)).toEqual(date2);
  });
});

describe('UTC Time', () => {
  beforeAll(() => (process.env.TZ = 'Asia/Tokyo'));

  test('One month after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 1, 29, 10));

    expect(addMonths(date1, 1, 'UTC')).toEqual(date2);
  });

  test('Two months after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 2, 31, 10));

    expect(addMonths(date1, 2, 'UTC')).toEqual(date2);
  });

  test('Three months after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 3, 30, 10));

    expect(addMonths(date1, 3, 'UTC')).toEqual(date2);
  });

  test('One month after 1:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 9));
    const date2 = new Date(Date.UTC(2024, 2, 10, 9));

    expect(addMonths(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One month after 2:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 10));
    const date2 = new Date(Date.UTC(2024, 2, 10, 10));

    expect(addMonths(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One month after 3:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 11));
    const date2 = new Date(Date.UTC(2024, 2, 10, 11));

    expect(addMonths(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One month before 1:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 8));
    const date2 = new Date(Date.UTC(2024, 10, 3, 8));

    expect(addMonths(date1, -1, 'UTC')).toEqual(date2);
  });

  test('One month before 2:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 9));
    const date2 = new Date(Date.UTC(2024, 10, 3, 9));

    expect(addMonths(date1, -1, 'UTC')).toEqual(date2);
  });

  test('One month before 3:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 10));
    const date2 = new Date(Date.UTC(2024, 10, 3, 10));

    expect(addMonths(date1, -1, 'UTC')).toEqual(date2);
  });

  test('One month after 1:00 AM on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 8));
    const date2 = new Date(Date.UTC(2024, 11, 3, 8));

    expect(addMonths(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One month after 1:00 AM PST on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 9));
    const date2 = new Date(Date.UTC(2024, 11, 3, 9));

    expect(addMonths(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One month after 2:00 AM on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 10));
    const date2 = new Date(Date.UTC(2024, 11, 3, 10));

    expect(addMonths(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One month after 1:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 8));
    const date2 = new Date(Date.UTC(2024, 10, 3, 8));

    expect(addMonths(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One month after 2:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 9));
    const date2 = new Date(Date.UTC(2024, 10, 3, 9));

    expect(addMonths(date1, 1, 'UTC')).toEqual(date2);
  });

  test('One month after 3:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 10));
    const date2 = new Date(Date.UTC(2024, 10, 3, 10));

    expect(addMonths(date1, 1, 'UTC')).toEqual(date2);
  });
});

describe('America/Los_Angeles', () => {
  beforeAll(() => (process.env.TZ = 'Australia/Sydney'));

  test('One month after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 1, 29, 10));

    expect(addMonths(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('Two months after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 2, 31, 9));

    expect(addMonths(date1, 2, Los_Angeles)).toEqual(date2);
  });

  test('Three months after 2:00 AM on January 31, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 0, 31, 10));
    const date2 = new Date(Date.UTC(2024, 3, 30, 9));

    expect(addMonths(date1, 3, Los_Angeles)).toEqual(date2);
  });

  test('One month after 1:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 9));
    const date2 = new Date(Date.UTC(2024, 2, 10, 9));

    expect(addMonths(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One month after 2:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 10));
    const date2 = new Date(Date.UTC(2024, 2, 10, 10));

    expect(addMonths(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One month after 3:00 AM on February 10, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 1, 10, 11));
    const date2 = new Date(Date.UTC(2024, 2, 10, 10));

    expect(addMonths(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One month before 1:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 8));
    const date2 = new Date(Date.UTC(2024, 10, 3, 7));

    expect(addMonths(date1, -1, Los_Angeles)).toEqual(date2);
  });

  test('One month before 2:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 9));
    const date2 = new Date(Date.UTC(2024, 10, 3, 8));

    expect(addMonths(date1, -1, Los_Angeles)).toEqual(date2);
  });

  test('One month before 3:00 AM on December 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 11, 3, 10));
    const date2 = new Date(Date.UTC(2024, 10, 3, 10));

    expect(addMonths(date1, -1, Los_Angeles)).toEqual(date2);
  });

  test('One month after 1:00 AM on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 8));
    const date2 = new Date(Date.UTC(2024, 11, 3, 9));

    expect(addMonths(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One month after 1:00 AM PST on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 9));
    const date2 = new Date(Date.UTC(2024, 11, 3, 9));

    expect(addMonths(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One month after 2:00 AM on November 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 10, 3, 10));
    const date2 = new Date(Date.UTC(2024, 11, 3, 10));

    expect(addMonths(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One month after 1:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 8));
    const date2 = new Date(Date.UTC(2024, 10, 3, 8));

    expect(addMonths(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One month after 2:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 9));
    const date2 = new Date(Date.UTC(2024, 10, 3, 10));

    expect(addMonths(date1, 1, Los_Angeles)).toEqual(date2);
  });

  test('One month after 3:00 AM on October 3, 2024', () => {
    const date1 = new Date(Date.UTC(2024, 9, 3, 10));
    const date2 = new Date(Date.UTC(2024, 10, 3, 11));

    expect(addMonths(date1, 1, Los_Angeles)).toEqual(date2);
  });
});
