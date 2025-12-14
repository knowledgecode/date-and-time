import { ParserPlugin, ParserPluginOptions, CompiledObject, find } from '@/plugin.ts';

class Parser extends ParserPlugin {
  dddd (str: string, options: ParserPluginOptions, compiledObj: CompiledObject) {
    const array = options.locale.getDayOfWeekList({ style: 'long', compiledObj });
    const locale = options.locale.getLocale();

    return options.ignoreCase
      ? find(array.map(s => s.toLocaleLowerCase(locale)), str.toLocaleLowerCase(locale))
      : find(array, str);
  }

  ddd (str: string, options: ParserPluginOptions, compiledObj: CompiledObject) {
    const array = options.locale.getDayOfWeekList({ style: 'short', compiledObj });
    const locale = options.locale.getLocale();

    return options.ignoreCase
      ? find(array.map(s => s.toLocaleLowerCase(locale)), str.toLocaleLowerCase(locale))
      : find(array, str);
  }

  dd (str: string, options: ParserPluginOptions, compiledObj: CompiledObject) {
    const array = options.locale.getDayOfWeekList({ style: 'narrow', compiledObj });
    const locale = options.locale.getLocale();

    return options.ignoreCase
      ? find(array.map(s => s.toLocaleLowerCase(locale)), str.toLocaleLowerCase(locale))
      : find(array, str);
  }
}

export const parser = new Parser();
