import { expect, test, beforeAll } from 'vitest';
import { addMinutes } from '@/index.ts';

beforeAll(() => (process.env.TZ = 'America/Los_Angeles'));

test('One minute after 2:00 AM on January 31, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 0, 31, 10, 0));
  const date2 = new Date(Date.UTC(2024, 0, 31, 10, 1));

  expect(addMinutes(date1, 1)).toEqual(date2);
});

test('Two minutes after 2:00 AM on January 31, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 0, 31, 10, 0));
  const date2 = new Date(Date.UTC(2024, 0, 31, 10, 2));

  expect(addMinutes(date1, 2)).toEqual(date2);
});

test('Three minutes after 2:00 AM on January 31, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 0, 31, 10, 0));
  const date2 = new Date(Date.UTC(2024, 0, 31, 10, 3));

  expect(addMinutes(date1, 3)).toEqual(date2);
});

test('One minute after 1:00 AM on February 10, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 1, 10, 9, 0));
  const date2 = new Date(Date.UTC(2024, 1, 10, 9, 1));

  expect(addMinutes(date1, 1)).toEqual(date2);
});

test('One minute after 2:00 AM on February 10, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 1, 10, 10, 0));
  const date2 = new Date(Date.UTC(2024, 1, 10, 10, 1));

  expect(addMinutes(date1, 1)).toEqual(date2);
});

test('One minute after 3:00 AM on February 10, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 1, 10, 10, 0));
  const date2 = new Date(Date.UTC(2024, 1, 10, 10, 1));

  expect(addMinutes(date1, 1)).toEqual(date2);
});

test('One minute before 1:00 AM on December 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 11, 3, 8, 0));
  const date2 = new Date(Date.UTC(2024, 11, 3, 7, 59));

  expect(addMinutes(date1, -1)).toEqual(date2);
});

test('One minute before 2:00 AM on December 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 11, 3, 9, 0));
  const date2 = new Date(Date.UTC(2024, 11, 3, 8, 59));

  expect(addMinutes(date1, -1)).toEqual(date2);
});

test('One minute before 3:00 AM on December 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 11, 3, 10, 0));
  const date2 = new Date(Date.UTC(2024, 11, 3, 9, 59));

  expect(addMinutes(date1, -1)).toEqual(date2);
});

test('One minute after 1:00 AM on November 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 10, 3, 8, 0));
  const date2 = new Date(Date.UTC(2024, 10, 3, 8, 1));

  expect(addMinutes(date1, 1)).toEqual(date2);
});

test('One minute after 1:00 AM PST on November 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 10, 3, 9, 0));
  const date2 = new Date(Date.UTC(2024, 10, 3, 9, 1));

  expect(addMinutes(date1, 1)).toEqual(date2);
});

test('One minute after 2:00 AM on November 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 10, 3, 10, 0));
  const date2 = new Date(Date.UTC(2024, 10, 3, 10, 1));

  expect(addMinutes(date1, 1)).toEqual(date2);
});

test('One minute after 1:00 AM on October 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 9, 3, 8, 0));
  const date2 = new Date(Date.UTC(2024, 9, 3, 8, 1));

  expect(addMinutes(date1, 1)).toEqual(date2);
});

test('One minute after 2:00 AM on October 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 9, 3, 9, 0));
  const date2 = new Date(Date.UTC(2024, 9, 3, 9, 1));

  expect(addMinutes(date1, 1)).toEqual(date2);
});

test('One minute after 3:00 AM on October 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 9, 3, 10, 0));
  const date2 = new Date(Date.UTC(2024, 9, 3, 10, 1));

  expect(addMinutes(date1, 1)).toEqual(date2);
});
