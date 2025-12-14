/**
 * @file Czech (cs)
 */

import type { Locale, LocaleOptions } from '@/locale.ts';

const list = {
  MMMM: [
    ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
    ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince']
  ],
  MMM: [
    ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
    ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro']
  ],
  dddd: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
  ddd: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
  dd: ['N', 'P', 'Ú', 'S', 'Č', 'P', 'S'],
  A: ['dop.', 'odp.'],
  AA: ['dop.', 'odp.'],
  a: ['dop.', 'odp.'],
  aa: ['dop.', 'odp.']
};

export default new class implements Locale {
  getLocale () {
    return 'cs';
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
