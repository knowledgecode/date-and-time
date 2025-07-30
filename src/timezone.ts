import { getDateTimeFormat } from './dtf.ts';

export interface TimeZone {
  zone_name: string,
  gmt_offset: number[]
}

export const isTimeZone = (timeZone?: TimeZone | 'UTC'): timeZone is TimeZone => {
  return typeof timeZone === 'object' && 'zone_name' in timeZone && 'gmt_offset' in timeZone;
};

export const isUTC = (timeZone?: TimeZone | 'UTC'): timeZone is 'UTC' => {
  return timeZone === 'UTC';
};

export const getTimezoneOffset = (utcTime: number, timeZone: TimeZone): number => {
  const utc = getDateTimeFormat('UTC');
  const tz = getDateTimeFormat(timeZone.zone_name);
  const offset = timeZone.gmt_offset;

  for (let i = 0; i < 2; i++) {
    const targetString = utc.format(utcTime - i * 86400 * 1000);

    for (let j = 0, len = offset.length; j < len; j++) {
      if (tz.format(utcTime - (offset[j] + i * 86400) * 1000) === targetString) {
        return offset[j];
      }
    }
  }
  return NaN;
};
