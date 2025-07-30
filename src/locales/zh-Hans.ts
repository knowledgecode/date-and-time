/**
 * @file Chinese (zh-Hans)
 */

import type { Locale, LocaleOptions } from '../locale.ts';

const list = {
  MMMM: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  MMM: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  dddd: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  ddd: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  dd: ['日', '一', '二', '三', '四', '五', '六'],
  A: ['上午', '下午'],
  AA: ['上午', '下午'],
  a: ['上午', '下午'],
  aa: ['上午', '下午']
};

export default new class implements Locale {
  getLocale () {
    return 'zh-Hans';
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
