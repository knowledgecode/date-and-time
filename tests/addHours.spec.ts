import { expect, test, beforeAll } from 'vitest';
import { addHours } from '@/index.ts';

beforeAll(() => (process.env.TZ = 'America/Los_Angeles'));

test('One hour after 2:00 AM on January 31, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 0, 31, 10));
  const date2 = new Date(Date.UTC(2024, 0, 31, 11));

  expect(addHours(date1, 1)).toEqual(date2);
});

test('Two hours after 2:00 AM on January 31, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 0, 31, 10));
  const date2 = new Date(Date.UTC(2024, 0, 31, 12));

  expect(addHours(date1, 2)).toEqual(date2);
});

test('Three hours after 2:00 AM on January 31, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 0, 31, 10));
  const date2 = new Date(Date.UTC(2024, 0, 31, 13));

  expect(addHours(date1, 3)).toEqual(date2);
});

test('One hour after 1:00 AM on February 10, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 1, 10, 9));
  const date2 = new Date(Date.UTC(2024, 1, 10, 10));

  expect(addHours(date1, 1)).toEqual(date2);
});

test('One hour after 2:00 AM on February 10, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 1, 10, 10));
  const date2 = new Date(Date.UTC(2024, 1, 10, 11));

  expect(addHours(date1, 1)).toEqual(date2);
});

test('One hour after 3:00 AM on February 10, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 1, 10, 11));
  const date2 = new Date(Date.UTC(2024, 1, 10, 12));

  expect(addHours(date1, 1)).toEqual(date2);
});

test('One hour before 1:00 AM on December 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 11, 3, 8));
  const date2 = new Date(Date.UTC(2024, 11, 3, 7));

  expect(addHours(date1, -1)).toEqual(date2);
});

test('One hour before 2:00 AM on December 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 11, 3, 9));
  const date2 = new Date(Date.UTC(2024, 11, 3, 8));

  expect(addHours(date1, -1)).toEqual(date2);
});

test('One hour before 3:00 AM on December 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 11, 3, 10));
  const date2 = new Date(Date.UTC(2024, 11, 3, 9));

  expect(addHours(date1, -1)).toEqual(date2);
});

test('One hour after 1:00 AM on November 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 10, 3, 8));
  const date2 = new Date(Date.UTC(2024, 10, 3, 9));

  expect(addHours(date1, 1)).toEqual(date2);
});

test('One hour after 1:00 AM PST on November 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 10, 3, 9));
  const date2 = new Date(Date.UTC(2024, 10, 3, 10));

  expect(addHours(date1, 1)).toEqual(date2);
});

test('One hour after 2:00 AM on November 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 10, 3, 10));
  const date2 = new Date(Date.UTC(2024, 10, 3, 11));

  expect(addHours(date1, 1)).toEqual(date2);
});

test('One hour after 1:00 AM on October 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 9, 3, 8));
  const date2 = new Date(Date.UTC(2024, 9, 3, 9));

  expect(addHours(date1, 1)).toEqual(date2);
});

test('One hour after 2:00 AM on October 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 9, 3, 9));
  const date2 = new Date(Date.UTC(2024, 9, 3, 10));

  expect(addHours(date1, 1)).toEqual(date2);
});

test('One hour after 3:00 AM on October 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 9, 3, 10));
  const date2 = new Date(Date.UTC(2024, 9, 3, 11));

  expect(addHours(date1, 1)).toEqual(date2);
});
