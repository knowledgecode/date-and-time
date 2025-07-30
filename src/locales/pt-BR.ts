/**
 * @file Brazilian Portuguese (pt-BR)
 */

import type { Locale, LocaleOptions } from '../locale.ts';

const list = {
  MMMM: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  MMM: ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'],
  dddd: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
  ddd: ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.'],
  dd: ['1ª', '2ª', '3ª', '4ª', '5ª', '6ª', '7ª'],
  A: ['AM', 'PM'],
  AA: ['A.M.', 'P.M.'],
  a: ['am', 'pm'],
  aa: ['a.m.', 'p.m.']
};

export default new class implements Locale {
  getLocale () {
    return 'pt-BR';
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
