/**
 * Adds the specified number of seconds to a Date object.
 * @param dateObj - The Date object to modify
 * @param seconds - The number of seconds to add
 * @returns A new Date object with the specified number of seconds added
 */
export function addSeconds(dateObj: Date, seconds: number) {
  return new Date(dateObj.getTime() + seconds * 1000);
}
