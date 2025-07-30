/**
 * @file Japanese (ja)
 */

import type { Locale, LocaleOptions } from '../locale.ts';

const list = {
  MMMM: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  MMM: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  dddd: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
  ddd: ['日', '月', '火', '水', '木', '金', '土'],
  dd: ['日', '月', '火', '水', '木', '金', '土'],
  A: ['午前', '午後'],
  AA: ['午前', '午後'],
  a: ['午前', '午後'],
  aa: ['午前', '午後']
};

export default new class implements Locale {
  getLocale () {
    return 'ja';
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
