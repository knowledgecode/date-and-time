/**
 * @file Malay (ms)
 */

import type { Locale, LocaleOptions } from '@/locale.ts';

const list = {
  MMMM: ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September', 'Oktober', 'November', 'Disember'],
  MMM: ['Jan', 'Feb', 'Mac', 'Apr', 'Mei', 'Jun', 'Jul', 'Ogo', 'Sep', 'Okt', 'Nov', 'Dis'],
  dddd: ['Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'],
  ddd: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'],
  dd: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'],
  A: ['PG', 'PTG'],
  AA: ['PG', 'PTG'],
  a: ['PG', 'PTG'],
  aa: ['PG', 'PTG']
};

export default new class implements Locale {
  getLocale () {
    return 'ms';
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
