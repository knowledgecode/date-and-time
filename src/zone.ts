import { dtfToParts, fromParts } from './datetime.ts';
import { getDateTimeFormat } from './dtf.ts';

export interface TimeZone {
  zone_name: string;
  gmt_offset: number[];
}

export const isTimeZone = (timeZone: unknown): timeZone is TimeZone => {
  return !!timeZone && typeof timeZone === 'object' && 'zone_name' in timeZone && 'gmt_offset' in timeZone;
};

const getTimezoneOffset = (naiveUTC: number, zoneName: string): number => {
  const dtf = getDateTimeFormat(zoneName);
  const set = new Set<number>();

  // formatToParts throws on an invalid time value, so a NaN input skips the search.
  if (dtf && !Number.isNaN(naiveUTC)) {
    // Try to find the correct offset by checking the current and previous days.
    for (let d = 0; d < 2; d++) {
      const time = naiveUTC - d * 86400 * 1000;
      // Starting from the largest eastward IANA offset (Metlakatla LMT: UTC+15:13:42)
      // ensures DST is preferred over standard time for ambiguous fall-back timestamps.
      let offset = 54822 * 1000;

      do {
        const diff = fromParts(dtfToParts(dtf, time - offset)) - time;

        if (diff === 0) {
          return offset;
        }
        set.add(offset);
        offset += diff;
      } while (!set.has(offset));

      set.clear();
    }
  }
  return NaN;
};

export const createTimezoneDate = (naiveUTC: number, timeZone: TimeZone | string) => {
  const zoneName = isTimeZone(timeZone) ? timeZone.zone_name : timeZone;
  return new Date(naiveUTC - getTimezoneOffset(naiveUTC, zoneName));
};
