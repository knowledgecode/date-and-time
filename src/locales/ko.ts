/**
 * @file Korean (ko)
 */

import type { Locale, LocaleOptions } from '../locale.ts';

const list = {
  MMMM: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  MMM: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dddd: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  ddd: ['일', '월', '화', '수', '목', '금', '토'],
  dd: ['일', '월', '화', '수', '목', '금', '토'],
  A: ['오전', '오후'],
  AA: ['오전', '오후'],
  a: ['오전', '오후'],
  aa: ['오전', '오후']
};

export default new class implements Locale {
  getLocale () {
    return 'ko';
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
