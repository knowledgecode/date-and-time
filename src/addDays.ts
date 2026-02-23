import { toParts, fromParts, isUTC } from './datetime.ts';
import { isTimeZone, createTimezoneDate } from './zone.ts';
import type { TimeZone } from './zone.ts';

/**
 * Adds the specified number of days to a Date object.
 * @param dateObj - The Date object to modify
 * @param days - The number of days to add
 * @param [timeZone] - Optional time zone object, an IANA timezone name or 'UTC' to use Coordinated Universal Time.
 * @returns A new Date object with the specified number of days added
 */
export function addDays(dateObj: Date, days: number, timeZone?: TimeZone | string) {
  const zoneName = isTimeZone(timeZone) ? timeZone.zone_name : timeZone ?? undefined;

  if (!zoneName || isUTC(zoneName)) {
    const d = new Date(dateObj.getTime());

    // Handle UTC calculation
    if (isUTC(timeZone)) {
      d.setUTCDate(d.getUTCDate() + days);
      return d;
    }
    // Handle local time calculation
    d.setDate(d.getDate() + days);
    return d;
  }
  // Handle timezone-specific calculation
  const parts = toParts(dateObj, zoneName);

  parts.day += days;
  parts.timezoneOffset = 0;

  return createTimezoneDate(fromParts(parts), zoneName);
}
