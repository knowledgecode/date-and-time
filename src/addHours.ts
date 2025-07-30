/**
 * Adds the specified number of hours to a Date object.
 * @param dateObj - The Date object to modify
 * @param hours - The number of hours to add
 * @returns A new Date object with the specified number of hours added
 */
export function addHours(dateObj: Date, hours: number) {
  return new Date(dateObj.getTime() + hours * 3600000);
}
