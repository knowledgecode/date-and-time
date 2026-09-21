import { exec } from '@/plugin.ts';
import type { ParserPluginOptions, ParserPluginObject } from '@/plugin.ts';

export const parser = {
  YY (str: string, options: ParserPluginOptions) {
    const result = exec(/^\d\d/, str, 'Y');

    switch (options.calendar) {
    case 'buddhist':
      result.value += result.value < 13 ? 2600 : 2500;
      break;
    default:
      result.value += result.value < 70 ? 2000 : 1900;
    }
    return result;
  }
} satisfies ParserPluginObject;
