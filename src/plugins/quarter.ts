import type { DateLike, FormatterPluginObject } from '@/plugin.ts';

export const formatter = {
  Q (d: DateLike) {
    return String((d.getMonth() / 3 | 0) + 1);
  }
} satisfies FormatterPluginObject;
