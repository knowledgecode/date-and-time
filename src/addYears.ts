import { addMonths } from './addMonths.ts';
import type { TimeZone } from './timezone.ts';

/**
 * Adds the specified number of years to a Date object.
 * @param dateObj - The Date object to modify
 * @param years - The number of years to add
 * @param [timeZone] - Optional time zone object or 'UTC'
 * @returns A new Date object with the specified number of years added
 */
export function addYears(dateObj: Date, years: number, timeZone?: TimeZone | 'UTC') {
  return addMonths(dateObj, years * 12, timeZone);
}
