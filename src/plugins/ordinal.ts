import { ParserPluginOptions, exec } from '@/plugin.ts';
import type { DateLike, FormatterPluginObject, ParserPluginObject } from '@/plugin.ts';

export const formatter = {
  DDD (d: DateLike) {
    const day = String(d.getDate());

    switch (day) {
    case '1':
    case '21':
    case '31':
      return `${day}st`;
    case '2':
    case '22':
      return `${day}nd`;
    case '3':
    case '23':
      return `${day}rd`;
    default:
      return `${day}th`;
    }
  }
} satisfies FormatterPluginObject;

export const parser = {
  DDD (str: string, options: ParserPluginOptions) {
    const result = exec(/^\d\d?(?=st|nd|rd|th)/, options.ignoreCase ? str.toLowerCase() : str, 'D');

    if (result.length > 0) {
      result.length += 2;
    }
    return result;
  }
} satisfies ParserPluginObject;
