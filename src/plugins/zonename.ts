import timeZoneNames from '@/zonenames.ts';
import { FormatterPlugin } from '@/plugin.ts';
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
    const zoneName = options.timeZone === 'UTC' ? 'UTC' : options.timeZone?.zone_name;
    return getShortTimezoneName(d.getTime(), zoneName);
  }

  zz (d: DateLike, options: FormatterPluginOptions) {
    const zoneName = options.timeZone === 'UTC' ? 'UTC' : options.timeZone?.zone_name;
    return getLongTimezoneName(d.getTime(), zoneName);
  }
}

export const formatter = new Formatter();
