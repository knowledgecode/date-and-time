const compare = (array1: string[], array2: string[]) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0, len = array1.length; i < len; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const getMonths = (locale: string, style: 'long' | 'short' | 'narrow') => {
  const options1: Intl.DateTimeFormatOptions = { hour12: true, weekday: 'long', year: 'numeric', month: style, hour: 'numeric' };
  const options2: Intl.DateTimeFormatOptions = { ...options1, day: 'numeric' };
  const dtf1 = new Intl.DateTimeFormat(locale, options1);
  const dtf2 = new Intl.DateTimeFormat(locale, options2);
  const months1 = [];
  const months2 = [];

  for (let i = 0; i < 12; i++) {
    months1.push(dtf1.formatToParts(new Date(2024, i, 1, 0)).find(p => p.type === 'month')?.value || '');
  }
  for (let i = 0; i < 12; i++) {
    months2.push(dtf2.formatToParts(new Date(2024, i, 1, 0)).find(p => p.type === 'month')?.value || '');
  }
  return compare(months1, months2) ? months1 : [months1, months2];
};

const getWeekdays = (locale: string, style: 'long' | 'short' | 'narrow') => {
  const options1: Intl.DateTimeFormatOptions = { hour12: true, weekday: style, year: 'numeric', month: 'long', hour: 'numeric' };
  const options2: Intl.DateTimeFormatOptions = { ...options1, day: 'numeric' };
  const dtf1 = new Intl.DateTimeFormat(locale, options1);
  const dtf2 = new Intl.DateTimeFormat(locale, options2);
  const weekdays1 = [];
  const weekdays2 = [];

  for (let i = 1; i <= 7; i++) {
    weekdays1.push(dtf1.formatToParts(new Date(2024, 11, i, 0)).find(p => p.type === 'weekday')?.value || '');
  }
  for (let i = 1; i <= 7; i++) {
    weekdays2.push(dtf2.formatToParts(new Date(2024, 11, i, 0)).find(p => p.type === 'weekday')?.value || '');
  }
  return compare(weekdays1, weekdays2) ? weekdays1 : [weekdays1, weekdays2];
};

const getDayPeriod = (locale: string) => {
  const options1: Intl.DateTimeFormatOptions = { hour12: true, hour: 'numeric' };
  const options2: Intl.DateTimeFormatOptions = { ...options1, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dtf1 = new Intl.DateTimeFormat(locale, options1);
  const dtf2 = new Intl.DateTimeFormat(locale, options2);
  const dayperiod1 = [];
  const dayperiod2 = [];

  for (let i = 0; i < 24; i++) {
    const value = dtf1.formatToParts(new Date(2024, 11, 1, i)).find(p => p.type === 'dayPeriod')?.value || '';
    if (dayperiod1.indexOf(value) < 0) {
      dayperiod1.push(value);
    }
  }
  for (let i = 0; i < 24; i++) {
    const value = dtf2.formatToParts(new Date(2024, 11, 1, i)).find(p => p.type === 'dayPeriod')?.value || '';
    if (dayperiod2.indexOf(value) < 0) {
      dayperiod2.push(value);
    }
  }
  return compare(dayperiod1, dayperiod2) ? dayperiod1 : [dayperiod1, dayperiod2];
};

const getParts = (locale: string) => {
  const options: Intl.DateTimeFormatOptions = {
    hour12: false, weekday: 'long',
    year: 'numeric', month: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric', fractionalSecondDigits: 3,
    timeZone: 'UTC', timeZoneName: 'longOffset'
  };
  const parts = new Intl.DateTimeFormat(locale, options).formatToParts(new Date());

  return parts.filter(part => part.type !== 'literal');
};

const getDate = (locale: string) => {
  const options: Intl.DateTimeFormatOptions = {
    hour12: true, weekday: 'short',
//    year: 'numeric', month: 'long', day: 'numeric',
    year: 'numeric', month: 'short', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric', fractionalSecondDigits: 3,
    timeZone: 'Europe/Paris', timeZoneName: 'longOffset'
  };
  return new Intl.DateTimeFormat(locale, options).format(new Date());
};

const locale = process.argv[2];

if (!locale) {
  process.exit();
}

const list = {
  MMMM: getMonths(locale, 'long'),
  MMM: getMonths(locale, 'short'),
  dddd: getWeekdays(locale, 'long'),
  ddd: getWeekdays(locale, 'short'),
  dd: getWeekdays(locale, 'narrow'),
  A: getDayPeriod(locale)
};

console.log(JSON.stringify(list, undefined, 2));
console.log(JSON.stringify(getParts(locale), undefined, 2));
console.log(getDate(locale));
