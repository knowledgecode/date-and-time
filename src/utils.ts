/**
 * Determines if the specified year is a leap year.
 * @param year - The year to check
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
