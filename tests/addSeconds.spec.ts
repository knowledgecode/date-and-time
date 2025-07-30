import { expect, test, beforeAll } from 'vitest';
import { addSeconds } from '../src/index.ts';

beforeAll(() => (process.env.TZ = 'America/Los_Angeles'));

test('One second after 2:00 AM on January 31, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 0, 31, 10, 0, 0));
  const date2 = new Date(Date.UTC(2024, 0, 31, 10, 0, 1));

  expect(addSeconds(date1, 1)).toEqual(date2);
});

test('Two seconds after 2:00 AM on January 31, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 0, 31, 10, 0, 0));
  const date2 = new Date(Date.UTC(2024, 0, 31, 10, 0, 2));

  expect(addSeconds(date1, 2)).toEqual(date2);
});

test('Three seconds after 2:00 AM on January 31, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 0, 31, 10, 0, 0));
  const date2 = new Date(Date.UTC(2024, 0, 31, 10, 0, 3));

  expect(addSeconds(date1, 3)).toEqual(date2);
});

test('One second after 1:00 AM on February 10, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 1, 10, 9, 0, 0));
  const date2 = new Date(Date.UTC(2024, 1, 10, 9, 0, 1));

  expect(addSeconds(date1, 1)).toEqual(date2);
});

test('One second after 2:00 AM on February 10, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 1, 10, 10, 0, 0));
  const date2 = new Date(Date.UTC(2024, 1, 10, 10, 0, 1));

  expect(addSeconds(date1, 1)).toEqual(date2);
});

test('One second after 3:00 AM on February 10, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 1, 10, 10, 0, 0));
  const date2 = new Date(Date.UTC(2024, 1, 10, 10, 0, 1));

  expect(addSeconds(date1, 1)).toEqual(date2);
});

test('One second before 1:00 AM on December 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 11, 3, 8, 0, 0));
  const date2 = new Date(Date.UTC(2024, 11, 3, 7, 59, 59));

  expect(addSeconds(date1, -1)).toEqual(date2);
});

test('One second before 2:00 AM on December 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 11, 3, 9, 0, 0));
  const date2 = new Date(Date.UTC(2024, 11, 3, 8, 59, 59));

  expect(addSeconds(date1, -1)).toEqual(date2);
});

test('One second before 3:00 AM on December 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 11, 3, 10, 0, 0));
  const date2 = new Date(Date.UTC(2024, 11, 3, 9, 59, 59));

  expect(addSeconds(date1, -1)).toEqual(date2);
});

test('One second after 1:00 AM on November 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 10, 3, 8, 0, 0));
  const date2 = new Date(Date.UTC(2024, 10, 3, 8, 0, 1));

  expect(addSeconds(date1, 1)).toEqual(date2);
});

test('One second after 1:00 AM PST on November 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 10, 3, 9, 0, 0));
  const date2 = new Date(Date.UTC(2024, 10, 3, 9, 0, 1));

  expect(addSeconds(date1, 1)).toEqual(date2);
});

test('One second after 2:00 AM on November 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 10, 3, 10, 0, 0));
  const date2 = new Date(Date.UTC(2024, 10, 3, 10, 0, 1));

  expect(addSeconds(date1, 1)).toEqual(date2);
});

test('One second after 1:00 AM on October 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 9, 3, 8, 0, 0));
  const date2 = new Date(Date.UTC(2024, 9, 3, 8, 0, 1));

  expect(addSeconds(date1, 1)).toEqual(date2);
});

test('One second after 2:00 AM on October 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 9, 3, 9, 0, 0));
  const date2 = new Date(Date.UTC(2024, 9, 3, 9, 0, 1));

  expect(addSeconds(date1, 1)).toEqual(date2);
});

test('One second after 3:00 AM on October 3, 2024', () => {
  const date1 = new Date(Date.UTC(2024, 9, 3, 10, 0, 0));
  const date2 = new Date(Date.UTC(2024, 9, 3, 10, 0, 1));

  expect(addSeconds(date1, 1)).toEqual(date2);
});
