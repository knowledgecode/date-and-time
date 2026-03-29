/**
 * Determines if the specified year is a leap year.
 * @param year - The gregorian year to check for leap year status (1-9999)
 * @returns True if the year is a leap year, false otherwise
 */
export const isLeapYear = (year: number) => {
  return (!(year % 4) && !!(year % 100)) || !(year % 400);
};

/**
 * Determines if two dates represent the same calendar day.
 * @param date1 - The first date to compare
 * @param date2 - The second date to compare
 * @returns True if both dates are on the same day, false otherwise
 */
export const isSameDay = (date1: Date, date2: Date) => {
  return date1.toDateString() === date2.toDateString();
};

// The toUTC function converts a given year, month, and day into a UTC timestamp.
const toUTC = (y: number, m: number, d: number) => Date.UTC(y, m - (y < 100 ? 1900 * 12 : 0), d);

/**
 * Returns the number of days in a given month of a specific year.
 * @param date - The date to get the number of days for
 * @returns The number of days in the month of the provided date
 */
export function getDaysInMonth (date: Date): number;

/**
 * Returns the number of days in a given month of a specific year.
 * @param year - The gregorian year (1-9999) to get the number of days for
 * @param month - The month (1-12) to get the number of days for
 * @returns The number of days in the month of the provided date
 */
export function getDaysInMonth (year: number, month: number): number;

export function getDaysInMonth (...args: [date: Date] | [year: number, month: number]) {
  const [year, month] = (
    () => args.length === 1
      ? [args[0].getFullYear(), args[0].getMonth() + 1]
      : args
  )();
  return new Date(toUTC(year, month, 0)).getUTCDate();
}

// The getThursdayOfWeek function calculates the Thursday of the week for a given time.
// This is used as an anchor point to determine the ISO week number and ISO week year,
// since the ISO week starts on Monday and ends on Sunday,
// and Thursday is always in the same ISO week as the given date.
const getThursdayOfWeek = (time: number) => {
  const target = new Date(time);
  // getUTCDay() returns 0 for Sunday, so we use (day || 7) to treat Sunday as the 7th day of the week
  target.setUTCDate(target.getUTCDate() + (4 - (target.getUTCDay() || 7)));
  return target;
};

/**
 * Calculates the ISO week year for a given date.
 * @param date - The date to calculate the ISO week year for
 * @returns The ISO week year corresponding to the provided date
 */
export function getISOWeekYear (date: Date): number;

/**
 * Calculates the ISO week year for a given year, month, and day.
 * @param year - The gregorian year (1-9999) to calculate the ISO week year for
 * @param month - The month (1-12) to calculate the ISO week year for
 * @param day - The day (1-31) to calculate the ISO week year for
 * @returns The ISO week year corresponding to the provided date
 */
export function getISOWeekYear (year: number, month: number, day: number): number;

export function getISOWeekYear (...args: [date: Date] | [year: number, month: number, day: number]) {
  const [year, month, day] = (
    () => args.length === 1
      ? [args[0].getFullYear(), args[0].getMonth() + 1, args[0].getDate()]
      : args
  )();
  // The ISO week year is the year that contains the Thursday of the week
  return getThursdayOfWeek(toUTC(year, month - 1, day)).getUTCFullYear();
}

/**
 * Calculates the ISO week number for a given date.
 * @param date - The date to calculate the ISO week number for
 * @returns The ISO week number corresponding to the provided date
 */
export function getISOWeek (date: Date): number;

/**
 * Calculates the ISO week number for a given year, month, and day.
 * @param year - The gregorian year (1-9999) to calculate the ISO week number for
 * @param month - The month (1-12) to calculate the ISO week number for
 * @param day - The day (1-31) to calculate the ISO week number for
 * @returns The ISO week number corresponding to the provided date
 */
export function getISOWeek (year: number, month: number, day: number): number;

export function getISOWeek (...args: [date: Date] | [year: number, month: number, day: number]) {
  const [year, month, day] = (
    () => args.length === 1
      ? [args[0].getFullYear(), args[0].getMonth() + 1, args[0].getDate()]
      : args
  )();
  const target = getThursdayOfWeek(toUTC(year, month - 1, day));
  // Calculate the ISO week number by finding the difference in weeks between the target date
  // and the Thursday of the first week of the year (January 4th)
  return (target.getTime() - getThursdayOfWeek(toUTC(target.getUTCFullYear(), 0, 4)).getTime()) / 86400000 / 7 + 1;
}
