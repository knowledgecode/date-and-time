/**
 * @file Serbian (sr-Cyrl)
 */

import type { Locale, LocaleOptions } from '@/locale.ts';

const list = {
  MMMM: ['јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул', 'август', 'септембар', 'октобар', 'новембар', 'децембар'],
  MMM: ['јан', 'феб', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'сеп', 'окт', 'нов', 'дец'],
  dddd: ['недеља', 'понедељак', 'уторак', 'среда', 'четвртак', 'петак', 'субота'],
  ddd: ['нед', 'пон', 'уто', 'сре', 'чет', 'пет', 'суб'],
  dd: ['нед', 'пон', 'уто', 'сре', 'чет', 'пет', 'суб'],
  A: ['AM', 'PM'],
  AA: ['A.M.', 'P.M.'],
  a: ['am', 'pm'],
  aa: ['a.m.', 'p.m.']
};

export default new class implements Locale {
  getLocale () {
    return 'sr-Cyrl';
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
