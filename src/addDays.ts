import { toParts, fromParts } from './datetime.ts';
import { isTimeZone, isUTC, getTimezoneOffset } from './timezone.ts';
import type { TimeZone } from './timezone.ts';

/**
 * Adds the specified number of days to a Date object.
 * @param dateObj - The Date object to modify
 * @param days - The number of days to add
 * @param [timeZone] - Optional time zone object or 'UTC'
 * @returns A new Date object with the specified number of days added
 */
export function addDays(dateObj: Date, days: number, timeZone?: TimeZone | 'UTC') {
  // Handle timezone-specific calculation
  if (isTimeZone(timeZone)) {
    const parts = toParts(dateObj, timeZone.zone_name);

    parts.day += days;
    parts.timezoneOffset = 0;

    const utcTime = fromParts(parts);
    const offset = getTimezoneOffset(utcTime, timeZone);

    return new Date(utcTime - offset * 1000);
  }

  const d = new Date(dateObj.getTime());

  // Handle UTC calculation
  if (isUTC(timeZone)) {
    d.setUTCDate(d.getUTCDate() + days);
    return d;
  }
  d.setDate(d.getDate() + days);
  return d;
}
