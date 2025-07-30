/**
 * @file Uzbek (uz-Cyrl)
 */

import type { Locale, LocaleOptions } from '../locale.ts';

const list = {
  MMMM: ['январ', 'феврал', 'март', 'апрел', 'май', 'июн', 'июл', 'август', 'сентябр', 'октябр', 'ноябр', 'декабр'],
  MMM: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
  dddd: ['якшанба', 'душанба', 'сешанба', 'чоршанба', 'пайшанба', 'жума', 'шанба'],
  ddd: ['якш', 'душ', 'сеш', 'чор', 'пай', 'жум', 'шан'],
  dd: ['Як', 'Ду', 'Се', 'Чо', 'Па', 'Жу', 'Ша'],
  A: ['ТО', 'ТК'],
  AA: ['ТО', 'ТК'],
  a: ['ТО', 'ТК'],
  aa: ['ТО', 'ТК']
};

export default new class implements Locale {
  getLocale () {
    return 'uz-Cyrl';
  }

  getMonthList (options: LocaleOptions) {
    return options.style === 'long'
      ? list.MMMM
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
