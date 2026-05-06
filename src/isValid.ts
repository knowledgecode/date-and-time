import { preparse } from './preparse.ts';
import { getDaysInMonth } from './utils.ts';
import type { CompiledObject } from './compile.ts';
import type { ParsedComponents, ParserOptions } from './parser.ts';
import type { PreparseResult } from './preparse.ts';

/**
 * Converts a year to the Gregorian calendar year based on the specified calendar system in the parser options.
 * @param year - The year to convert, which may be in a non-Gregorian calendar system (e.g., Buddhist calendar)
 * @param [options] - Optional parser options that may specify the calendar system to use for conversion
 * @returns The corresponding Gregorian calendar year, or undefined if the input year is undefined
 */
export const toGregorianYear = (year: number | undefined, options?: ParserOptions) => {
  return year === undefined ? year : year - (options?.calendar === 'buddhist' ? 543 : 0);
};

/**
 * Gets the default date components to use when certain components are missing from the input string.
 * @param [defaultDate] - An object containing default date components (year, month, day, hour, minute, second, millisecond, timezone offset)
 * @returns An object with all date components filled in, using the provided default values or fallback defaults (e.g., year defaults to 1970)
 */
export const getDefaultDate = (defaultDate: ParsedComponents = {}) => {
  return {
    Y: defaultDate.Y ?? 1970,
    M: defaultDate.M ?? 1,
    D: defaultDate.D ?? 1,
    H: defaultDate.H,
    A: defaultDate.A,
    h: defaultDate.h,
    m: defaultDate.m ?? 0,
    s: defaultDate.s ?? 0,
    S: defaultDate.S ?? 0,
    Z: defaultDate.Z
  };
};

/**
 * Validates whether a preparse result object is valid.
 * @param pr - The preparse result object to validate
 * @param [options] - Optional parser options
 * @returns True if the preparse result is valid, false otherwise
 */
export function validatePreparseResult(pr: PreparseResult, options?: ParserOptions) {
  const [min12, max12] = options?.hour12 === 'h11' ? [0, 11] : [1, 12];
  const [min24, max24] = options?.hour24 === 'h24' ? [1, 24] : [0, 23];
  const range = (value: number | undefined, min: number, max: number) => value === undefined || value >= min && value <= max;
  const base = getDefaultDate(options?.defaultDate);
  const year = toGregorianYear(pr.Y, options) ?? base.Y;
  const month = pr.M ?? base.M;

  return pr._index > 0
    && pr._length > 0
    && pr._index === pr._length
    && pr._match > 0
    && range(year, 1, 9999)
    && range(month, 1, 12)
    && range(pr.D ?? base.D, 1, getDaysInMonth(year, month))
    && range(pr.H ?? base.H, min24, max24)
    && range(pr.A ?? base.A, 0, 1)
    && range(pr.h ?? base.h, min12, max12)
    && range(pr.m ?? base.m, 0, 59)
    && range(pr.s ?? base.s, 0, 59)
    && range(pr.S ?? base.S, 0, 999)
    && range(pr.Z ?? base.Z, -913, 956);
}

/**
 * Validates whether a date string is valid according to the specified format.
 * @param dateString - The date string to validate
 * @param arg - The format string or compiled object
 * @param [options] - Optional parser options
 * @returns True if the date string is valid, false otherwise
 */
export function isValid(dateString: string, arg: string | CompiledObject, options?: ParserOptions) {
  return validatePreparseResult(preparse(dateString, arg, options), options);
}
