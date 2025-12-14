import { getDateTimeFormat } from './dtf.ts';

export interface DateTimeParts {
  weekday: number;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  fractionalSecond: number;
  timezoneOffset: number;
}

export const toParts = (dateObj: Date, zoneName: string): DateTimeParts => {
  if (zoneName.toUpperCase() === 'UTC') {
    return {
      weekday: dateObj.getUTCDay(),
      year: dateObj.getUTCFullYear(),
      month: dateObj.getUTCMonth() + 1,
      day: dateObj.getUTCDate(),
      hour: dateObj.getUTCHours(),
      minute: dateObj.getUTCMinutes(),
      second: dateObj.getUTCSeconds(),
      fractionalSecond: dateObj.getUTCMilliseconds(),
      timezoneOffset: 0
    };
  }

  const values = getDateTimeFormat(zoneName)
    .formatToParts(dateObj)
    .reduce((parts, { type, value }) => {
      switch (type) {
      case 'weekday':
        parts[type] = 'SunMonTueWedThuFriSat'.indexOf(value) / 3;
        break;
      case 'hour':
        parts[type] = +value % 24;
        break;
      case 'year':
      case 'month':
      case 'day':
      case 'minute':
      case 'second':
      case 'fractionalSecond':
        parts[type] = +value;
      }
      return parts;
    }, {
      weekday: 4, year: 1970, month: 1, day: 1,
      hour: 0, minute: 0, second: 0, fractionalSecond: 0,
      timezoneOffset: 0
    });

  values.timezoneOffset = (dateObj.getTime() - Date.UTC(
    values.year,
    values.month - (values.year < 100 ? 1900 * 12 + 1 : 1),
    values.day,
    values.hour,
    values.minute,
    values.second,
    values.fractionalSecond
  )) / 60000;

  return values;
};

export const fromParts = (parts: DateTimeParts) => {
  return Date.UTC(
    parts.year, parts.month - (parts.year < 100 ? 1900 * 12 + 1 : 1), parts.day,
    parts.hour, parts.minute, parts.second, parts.fractionalSecond + parts.timezoneOffset * 60000
  );
};

export interface DateLike {
  /**
   * Returns the year of the date.
   */
  getFullYear(): number;
  /**
   * Returns the month of the date (0-11).
   */
  getMonth(): number;
  /**
   * Returns the day of the month (1-31).
   */
  getDate(): number;
  /**
   * Returns the hours of the date (0-23).
   */
  getHours(): number;
  /**
   * Returns the minutes of the date (0-59).
   */
  getMinutes(): number;
  /**
   * Returns the seconds of the date (0-59).
   */
  getSeconds(): number;
  /**
   * Returns the milliseconds of the date (0-999).
   */
  getMilliseconds(): number;
  /**
   * Returns the day of the week (0-6; where 0 is Sunday).
   */
  getDay(): number;
  /**
   * Returns the time value in milliseconds since the Unix epoch (January 1; 1970).
   */
  getTime(): number;
  /**
   * Returns the timezone offset in minutes from UTC.
   */
  getTimezoneOffset(): number;
}

export class DateTime implements DateLike {
  private readonly parts: DateTimeParts;

  private readonly time: number;

  constructor (dateObj: Date, zoneName: string) {
    this.parts = toParts(dateObj, zoneName);
    this.time = dateObj.getTime();
  }

  getFullYear () {
    return this.parts.year;
  }

  getMonth () {
    return this.parts.month - 1;
  }

  getDate () {
    return this.parts.day;
  }

  getHours () {
    return this.parts.hour;
  }

  getMinutes () {
    return this.parts.minute;
  }

  getSeconds () {
    return this.parts.second;
  }

  getMilliseconds () {
    return this.parts.fractionalSecond;
  }

  getDay () {
    return this.parts.weekday;
  }

  getTime () {
    return this.time;
  }

  getTimezoneOffset () {
    return this.parts.timezoneOffset;
  }
}
