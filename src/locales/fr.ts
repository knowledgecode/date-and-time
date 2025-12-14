/**
 * @file French (fr)
 */

import type { Locale, LocaleOptions } from '@/locale.ts';

const list = {
  MMMM: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  MMM: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
  dddd: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
  ddd: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
  dd: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
  A: ['AM', 'PM'],
  AA: ['A.M.', 'P.M.'],
  a: ['am', 'pm'],
  aa: ['a.m.', 'p.m.']
};

export default new class implements Locale {
  getLocale () {
    return 'fr';
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
