import { FormatterPlugin } from '@/plugin.ts';
import { getISOWeekYear, getISOWeek } from '@/utils.ts';
import type { DateLike } from '@/plugin.ts';

const _getISOWeekYear = (d: DateLike) => getISOWeekYear(d.getFullYear(), d.getMonth() + 1, d.getDate());

const _getISOWeek = (d: DateLike) => getISOWeek(d.getFullYear(), d.getMonth() + 1, d.getDate());

class Formatter extends FormatterPlugin {
  W (d: DateLike) {
    return String(_getISOWeek(d));
  }

  WW (d: DateLike) {
    return `0${String(_getISOWeek(d))}`.slice(-2);
  }

  GGGG (d: DateLike) {
    return `000${String(_getISOWeekYear(d))}`.slice(-4);
  }

  GG (d: DateLike) {
    return `0${String(_getISOWeekYear(d))}`.slice(-2);
  }

  G (d: DateLike) {
    return String(_getISOWeekYear(d));
  }
}

export const formatter = new Formatter();
