import { ParserPlugin, ParserPluginOptions, CompiledObject, find } from '@/plugin.ts';

class Parser extends ParserPlugin {
  dddd (str: string, options: ParserPluginOptions, compiledObj: CompiledObject) {
    const array = options.locale.getDayOfWeekList({ style: 'long', compiledObj });
    return find(array, str, options);
  }

  ddd (str: string, options: ParserPluginOptions, compiledObj: CompiledObject) {
    const array = options.locale.getDayOfWeekList({ style: 'short', compiledObj });
    return find(array, str, options);
  }

  dd (str: string, options: ParserPluginOptions, compiledObj: CompiledObject) {
    const array = options.locale.getDayOfWeekList({ style: 'narrow', compiledObj });
    return find(array, str, options);
  }
}

export const parser = new Parser();
