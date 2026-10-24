import timeZoneNames from '@/zonenames.ts';
import { isTimeZone } from '@/zone.ts';
import type { FormatterPluginOptions, DateLike, FormatterPluginObject } from '@/plugin.ts';

const cache = new Map<string, Intl.DateTimeFormat>();

const getLongTimezoneName = (time: number, zoneName = '') => {
  const dtf = cache.get(zoneName) ?? (() => {
    // An empty zone name means the local zone, which is resolved when the formatter is created, so it is never cached.
    const formatter = new Intl.DateTimeFormat('en-US', { timeZone: zoneName || undefined, timeZoneName: 'long' });

    if (zoneName) {
      cache.set(zoneName, formatter);
    }
    return formatter;
  })();
  const parts = dtf.formatToParts(time);

  return parts.find(part => part.type === 'timeZoneName')?.value.replace(/^GMT[+-].+$/, '') ?? '';
};

const getShortTimezoneName = (time: number, zoneName?: string) => {
  return timeZoneNames[getLongTimezoneName(time, zoneName) as keyof typeof timeZoneNames] || '';
};

export const formatter = {
  z (d: DateLike, options: FormatterPluginOptions) {
    const zoneName = isTimeZone(options.timeZone) ? options.timeZone.zone_name : options.timeZone;
    return getShortTimezoneName(d.getTime(), zoneName);
  },

  zz (d: DateLike, options: FormatterPluginOptions) {
    const zoneName = isTimeZone(options.timeZone) ? options.timeZone.zone_name : options.timeZone;
    return getLongTimezoneName(d.getTime(), zoneName);
  }
} satisfies FormatterPluginObject;
