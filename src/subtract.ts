import { Duration } from './duration.ts';

/**
 * Calculates the difference between two dates.
 * @param from - The first Date object
 * @param to - The second Date object
 * @returns A Duration instance with methods to get the difference in various units
 */
export const subtract = (from: Date, to: Date) => {
  return new Duration(to.getTime() - from.getTime());
};
