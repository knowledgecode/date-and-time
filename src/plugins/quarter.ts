import { FormatterPlugin } from '@/plugin.ts';
import type { DateLike } from '@/plugin.ts';

class Formatter extends FormatterPlugin {
  Q (d: DateLike) {
    return String((d.getMonth() / 3 | 0) + 1);
  }
}

export const formatter = new Formatter();
