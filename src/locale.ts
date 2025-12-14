import type { CompiledObject } from './compile.ts';

export interface LocaleOptions {
  compiledObj: CompiledObject;
  style: 'long' | 'short' | 'narrow';
  case?: 'uppercase' | 'lowercase';
}

export interface Locale {
  getLocale: () => string;
  getMonthList: (options: LocaleOptions) => string[];
  getDayOfWeekList: (options: LocaleOptions) => string[];
  getMeridiemList: (options: LocaleOptions) => string[];
}
