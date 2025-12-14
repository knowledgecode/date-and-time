/**
 * @file Ukrainian (uk)
 */

import type { Locale, LocaleOptions } from '@/locale.ts';

const list = {
  MMMM: [
    ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'],
    ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня']
  ],
  MMM: ['січ.', 'лют.', 'бер.', 'квіт.', 'трав.', 'черв.', 'лип.', 'серп.', 'вер.', 'жовт.', 'лист.', 'груд.'],
  dddd: ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота'],
  ddd: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  dd: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  A: ['дп', 'пп'],
  AA: ['дп', 'пп'],
  a: ['дп', 'пп'],
  aa: ['дп', 'пп']
};

export default new class implements Locale {
  getLocale () {
    return 'uk';
  }

  getMonthList (options: LocaleOptions) {
    return options.style === 'long'
      ? list.MMMM[options.compiledObj.findIndex(token => /^D+$/.test(token)) < 0 ? 0 : 1]
      : list.MMM;
  }

  getDayOfWeekList (options: LocaleOptions) {
    return options.style === 'long'
      ? list.dddd
      : options.style === 'short'
        ? list.ddd
        : list.dd;
  }

  getMeridiemList (options: LocaleOptions) {
    return options.style === 'long'
      ? options.case === 'lowercase'
        ? list.aa
        : list.AA
      : options.case === 'lowercase'
        ? list.a
        : list.A;
  }
}();
