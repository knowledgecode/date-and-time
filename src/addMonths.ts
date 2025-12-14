import { toParts, fromParts } from './datetime.ts';
import { isTimeZone, isUTC, createTimezoneDate } from './timezone.ts';
import type { TimeZone } from './timezone.ts';

/**
 * Adds the specified number of months to a Date object.
 * @param dateObj - The Date object to modify
 * @param months - The number of months to add
 * @param [timeZone] - Optional time zone object or 'UTC'
 * @returns A new Date object with the specified number of months added
 */
export function addMonths(dateObj: Date, months: number, timeZone?: TimeZone | 'UTC') {
  // Handle timezone-specific calculation
  if (isTimeZone(timeZone)) {
    const parts = toParts(dateObj, timeZone.zone_name);

    parts.month += months;
    parts.timezoneOffset = 0;

    const d = new Date(fromParts(parts));

    if (d.getUTCDate() < parts.day) {
      d.setUTCDate(0);
    }

    return createTimezoneDate(
      fromParts({
        ...parts,
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate()
      }),
      timeZone
    );
  }

  const d = new Date(dateObj.getTime());

  // Handle UTC calculation
  if (isUTC(timeZone)) {
    d.setUTCMonth(d.getUTCMonth() + months);
    // Adjust to last day of month if new month has fewer days
    if (d.getUTCDate() < dateObj.getUTCDate()) {
      d.setUTCDate(0);
      return d;
    }
    return d;
  }
  d.setMonth(d.getMonth() + months);
  // Adjust to last day of month if new month has fewer days
  if (d.getDate() < dateObj.getDate()) {
    d.setDate(0);
    return d;
  }
  return d;
}
