import { FormatterPlugin } from '@/plugin.ts';
import type { DateLike } from '@/plugin.ts';

class Formatter extends FormatterPlugin {
  t (d: DateLike) {
    return String(d.getTime() / 1000 | 0);
  }

  T (d: DateLike) {
    return String(d.getTime());
  }
}

export const formatter = new Formatter();
