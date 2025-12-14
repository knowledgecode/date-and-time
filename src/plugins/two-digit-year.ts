import { ParserPlugin, exec } from '@/plugin.ts';
import type { ParserPluginOptions } from '@/plugin.ts';

class Parser extends ParserPlugin {
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
}

export const parser = new Parser();
