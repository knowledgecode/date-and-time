/**
 * @file Hungarian (hu)
 */

import type { Locale, LocaleOptions } from '@/locale.ts';

const list = {
  MMMM: ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'],
  MMM: ['jan.', 'febr.', 'márc.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'],
  dddd: ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'],
  ddd: ['vas', 'hét', 'kedd', 'sze', 'csüt', 'pén', 'szo'],
  dd: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
  A: ['DE', 'DU'],
  AA: ['DE.', 'DU.'],
  a: ['de', 'du'],
  aa: ['de.', 'du.']
};

export default new class implements Locale {
  getLocale () {
    return 'hu';
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
