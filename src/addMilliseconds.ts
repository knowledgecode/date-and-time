/**
 * Adds the specified number of milliseconds to a Date object.
 * @param dateObj - The Date object to modify
 * @param milliseconds - The number of milliseconds to add
 * @returns A new Date object with the specified number of milliseconds added
 */
export function addMilliseconds(dateObj: Date, milliseconds: number) {
  return new Date(dateObj.getTime() + milliseconds);
}
