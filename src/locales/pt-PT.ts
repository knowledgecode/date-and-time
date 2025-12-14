/**
 * @file European Portuguese (pt-PT)
 */

import type { Locale, LocaleOptions } from '@/locale.ts';

const list = {
  MMMM: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  MMM: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  dddd: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
  ddd: ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'],
  dd: ['Do', '2ª', '3ª', '4ª', '5ª', '6ª', 'Sa'],
  A: ['da manhã', 'da tarde'],
  AA: ['da manhã', 'da tarde'],
  a: ['da manhã', 'da tarde'],
  aa: ['da manhã', 'da tarde']
};

export default new class implements Locale {
  getLocale () {
    return 'pt-PT';
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
