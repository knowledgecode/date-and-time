import { expect, test, beforeAll } from 'vitest';
import { addMilliseconds } from '@/index.ts';

beforeAll(() => (process.env.TZ = 'America/Los_Angeles'));

test('One millisecond after 2:00 AM on January 31, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 0, 31, 10, 0, 0, 0));
  const date2 = new Date(Date.UTC(2024, 0, 31, 10, 0, 0, 1));

  expect(addMilliseconds(date1, 1)).toEqual(date2);
});

test('Two milliseconds after 2:00 AM on January 31, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 0, 31, 10, 0, 0, 0));
  const date2 = new Date(Date.UTC(2024, 0, 31, 10, 0, 0, 2));

  expect(addMilliseconds(date1, 2)).toEqual(date2);
});

test('Three milliseconds after 2:00 AM on January 31, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 0, 31, 10, 0, 0, 0));
  const date2 = new Date(Date.UTC(2024, 0, 31, 10, 0, 0, 3));

  expect(addMilliseconds(date1, 3)).toEqual(date2);
});

test('One millisecond after 1:00 AM on February 10, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 1, 10, 9, 0, 0, 0));
  const date2 = new Date(Date.UTC(2024, 1, 10, 9, 0, 0, 1));

  expect(addMilliseconds(date1, 1)).toEqual(date2);
});

test('One millisecond after 2:00 AM on February 10, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 1, 10, 10, 0, 0, 0));
  const date2 = new Date(Date.UTC(2024, 1, 10, 10, 0, 0, 1));

  expect(addMilliseconds(date1, 1)).toEqual(date2);
});

test('One millisecond after 3:00 AM on February 10, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 1, 10, 10, 0, 0, 0));
  const date2 = new Date(Date.UTC(2024, 1, 10, 10, 0, 0, 1));

  expect(addMilliseconds(date1, 1)).toEqual(date2);
});

test('One millisecond before 1:00 AM on December 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 11, 3, 8, 0, 0, 0));
  const date2 = new Date(Date.UTC(2024, 11, 3, 7, 59, 59, 999));

  expect(addMilliseconds(date1, -1)).toEqual(date2);
});

test('One millisecond before 2:00 AM on December 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 11, 3, 9, 0, 0, 0));
  const date2 = new Date(Date.UTC(2024, 11, 3, 8, 59, 59, 999));

  expect(addMilliseconds(date1, -1)).toEqual(date2);
});

test('One millisecond before 3:00 AM on December 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 11, 3, 10, 0, 0, 0));
  const date2 = new Date(Date.UTC(2024, 11, 3, 9, 59, 59, 999));

  expect(addMilliseconds(date1, -1)).toEqual(date2);
});

test('One millisecond after 1:00 AM on November 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 10, 3, 8, 0, 0, 0));
  const date2 = new Date(Date.UTC(2024, 10, 3, 8, 0, 0, 1));

  expect(addMilliseconds(date1, 1)).toEqual(date2);
});

test('One millisecond after 1:00 AM PST on November 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 10, 3, 9, 0, 0, 0));
  const date2 = new Date(Date.UTC(2024, 10, 3, 9, 0, 0, 1));

  expect(addMilliseconds(date1, 1)).toEqual(date2);
});

test('One millisecond after 2:00 AM on November 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 10, 3, 10, 0, 0, 0));
  const date2 = new Date(Date.UTC(2024, 10, 3, 10, 0, 0, 1));

  expect(addMilliseconds(date1, 1)).toEqual(date2);
});

test('One millisecond after 1:00 AM on October 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 9, 3, 8, 0, 0, 0));
  const date2 = new Date(Date.UTC(2024, 9, 3, 8, 0, 0, 1));

  expect(addMilliseconds(date1, 1)).toEqual(date2);
});

test('One millisecond after 2:00 AM on October 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 9, 3, 9, 0, 0, 0));
  const date2 = new Date(Date.UTC(2024, 9, 3, 9, 0, 0, 1));

  expect(addMilliseconds(date1, 1)).toEqual(date2);
});

test('One millisecond after 3:00 AM on October 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 9, 3, 10, 0, 0, 0));
  const date2 = new Date(Date.UTC(2024, 9, 3, 10, 0, 0, 1));

  expect(addMilliseconds(date1, 1)).toEqual(date2);
});
