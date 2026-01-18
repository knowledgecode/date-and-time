import timeZoneNames from '@/zonenames.ts';
import { FormatterPlugin } from '@/plugin.ts';
import { isTimeZone } from '@/zone.ts';
import type { FormatterPluginOptions, DateLike } from '@/plugin.ts';

const getLongTimezoneName = (time: number, zoneName?: string) => {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: zoneName ?? undefined, timeZoneName: 'long'
  }).formatToParts(time);

  return parts.find(part => part.type === 'timeZoneName')?.value.replace(/^GMT[+-].+$/, '') ?? '';
};

const getShortTimezoneName = (time: number, zoneName?: string) => {
  return timeZoneNames[getLongTimezoneName(time, zoneName) as keyof typeof timeZoneNames] || '';
};

class Formatter extends FormatterPlugin {
  z (d: DateLike, options: FormatterPluginOptions) {
    const zoneName = isTimeZone(options.timeZone) ? options.timeZone.zone_name : options.timeZone;
    return getShortTimezoneName(d.getTime(), zoneName);
  }

  zz (d: DateLike, options: FormatterPluginOptions) {
    const zoneName = isTimeZone(options.timeZone) ? options.timeZone.zone_name : options.timeZone;
    return getLongTimezoneName(d.getTime(), zoneName);
  }
}

export const formatter = new Formatter();
