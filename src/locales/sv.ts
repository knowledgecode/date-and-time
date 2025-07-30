/**
 * @file Swedish (sv)
 */

import type { Locale, LocaleOptions } from '../locale.ts';

const list = {
  MMMM: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
  MMM: ['jan.', 'feb.', 'mars', 'apr.', 'maj', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'],
  dddd: ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'],
  ddd: ['sön', 'mån', 'tis', 'ons', 'tors', 'fre', 'lör'],
  dd: ['sö', 'må', 'ti', 'on', 'to', 'fr', 'lö'],
  A: ['fm', 'em'],
  AA: ['fm', 'em'],
  a: ['fm', 'em'],
  aa: ['fm', 'em']
};

export default new class implements Locale {
  getLocale () {
    return 'sv';
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
