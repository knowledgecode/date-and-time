/**
 * @file Norwegian (no)
 */

import type { Locale, LocaleOptions } from '../locale.ts';

const list = {
  MMMM: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'],
  MMM: ['jan.', 'feb.', 'mars', 'apr.', 'mai', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'des.'],
  dddd: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
  ddd: ['søn.', 'man.', 'tir.', 'ons.', 'tor.', 'fre.', 'lør.'],
  dd: ['søn.', 'man.', 'tir.', 'ons.', 'tor.', 'fre.', 'lør.'],
  A: ['AM', 'PM'],
  AA: ['A.M.', 'P.M.'],
  a: ['am', 'pm'],
  aa: ['a.m.', 'p.m.']
};

export default new class implements Locale {
  getLocale () {
    return 'no';
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
