/**
 * @file Kinyarwanda (rw)
 */

import type { Locale, LocaleOptions } from '@/locale.ts';

const list = {
  MMMM: ['Mutarama', 'Gashyantare', 'Werurwe', 'Mata', 'Gicurasi', 'Kamena', 'Nyakanga', 'Kanama', 'Nzeri', 'Ukwakira', 'Ugushyingo', 'Ukuboza'],
  MMM: ['mut.', 'gas.', 'wer.', 'mat.', 'gic.', 'kam.', 'nya.', 'kan.', 'nze.', 'ukw.', 'ugu.', 'uku.'],
  dddd: ['Ku cyumweru', 'Kuwa mbere', 'Kuwa kabiri', 'Kuwa gatatu', 'Kuwa kane', 'Kuwa gatanu', 'Kuwa gatandatu'],
  ddd: ['cyu.', 'mbe.', 'kab.', 'gtu.', 'kan.', 'gnu.', 'gnd.'],
  dd: ['cyu.', 'mbe.', 'kab.', 'gtu.', 'kan.', 'gnu.', 'gnd.'],
  A: ['AM', 'PM'],
  AA: ['A.M.', 'P.M.'],
  a: ['am', 'pm'],
  aa: ['a.m.', 'p.m.']
};

export default new class implements Locale {
  getLocale () {
    return 'rw';
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
