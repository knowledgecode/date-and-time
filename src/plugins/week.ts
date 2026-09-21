import { getISOWeekYear, getISOWeek } from '@/utils.ts';
import type { DateLike, FormatterPluginObject } from '@/plugin.ts';

const _getISOWeekYear = (d: DateLike) => getISOWeekYear(d.getFullYear(), d.getMonth() + 1, d.getDate());

const _getISOWeek = (d: DateLike) => getISOWeek(d.getFullYear(), d.getMonth() + 1, d.getDate());

export const formatter = {
  W (d: DateLike) {
    return String(_getISOWeek(d));
  },

  WW (d: DateLike) {
    return `0${String(_getISOWeek(d))}`.slice(-2);
  },

  GGGG (d: DateLike) {
    return `000${String(_getISOWeekYear(d))}`.slice(-4);
  },

  GG (d: DateLike) {
    return `0${String(_getISOWeekYear(d))}`.slice(-2);
  },

  G (d: DateLike) {
    return String(_getISOWeekYear(d));
  }
} satisfies FormatterPluginObject;
