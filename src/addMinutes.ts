/**
 * Adds the specified number of minutes to a Date object.
 * @param dateObj - The Date object to modify
 * @param minutes - The number of minutes to add
 * @returns A new Date object with the specified number of minutes added
 */
export function addMinutes(dateObj: Date, minutes: number) {
  return new Date(dateObj.getTime() + minutes * 60000);
}
