/**
 * @file Finnish (fi)
 */

import type { Locale, LocaleOptions } from '../locale.ts';

const list = {
  MMMM: [
    ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'],
    ['tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta', 'toukokuuta', 'kesäkuuta', 'heinäkuuta', 'elokuuta', 'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta']
  ],
  MMM: [
    ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
  ],
  dddd: ['sunnuntai', 'maanantaina', 'tiistaina', 'keskiviikkona', 'torstaina', 'perjantaina', 'lauantaina'],
  ddd: ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
  dd: ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
  A: ['ap.', 'ip.'],
  AA: ['ap.', 'ip.'],
  a: ['ap.', 'ip.'],
  aa: ['ap.', 'ip.']
};

export default new class implements Locale {
  getLocale () {
    return 'fi';
  }

  getMonthList (options: LocaleOptions) {
    return (options.style === 'long'
      ? list.MMMM
      : list.MMM)[options.compiledObj.findIndex(token => /^D+$/.test(token)) < 0 ? 0 : 1];
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
