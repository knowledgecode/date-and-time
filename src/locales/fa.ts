/**
 * @file Persian (fa)
 */

import type { Locale, LocaleOptions } from '../locale.ts';

const list = {
  MMMM: ['دی', 'بهمن', 'اسفند', 'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر'],
  MMM: ['دی', 'بهمن', 'اسفند', 'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر'],
  dddd: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
  ddd: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
  dd: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'],
  A: ['قبل‌ازظهر', 'بعدازظهر'],
  AA: ['قبل‌ازظهر', 'بعدازظهر'],
  a: ['قبل‌ازظهر', 'بعدازظهر'],
  aa: ['قبل‌ازظهر', 'بعدازظهر']
};

export default new class implements Locale {
  getLocale () {
    return 'fa';
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
