import { addMonths } from './addMonths.ts';
import type { TimeZone } from './zone.ts';

/**
 * Adds the specified number of years to a Date object.
 * @param dateObj - The Date object to modify
 * @param years - The number of years to add
 * @param [timeZone] - Optional time zone object, an IANA timezone name or 'UTC' to use Coordinated Universal Time.
 * @returns A new Date object with the specified number of years added
 */
export function addYears(dateObj: Date, years: number, timeZone?: TimeZone | string) {
  return addMonths(dateObj, years * 12, timeZone);
}
