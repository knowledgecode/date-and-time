import type { DateLike, FormatterPluginObject } from '@/plugin.ts';

export const formatter = {
  t (d: DateLike) {
    return String(Math.floor(d.getTime() / 1000));
  },

  T (d: DateLike) {
    return String(d.getTime());
  }
} satisfies FormatterPluginObject;
