import { preparse } from './preparse.ts';
import { CompiledObject } from './compile.ts';
import type { ParserOptions } from './parser.ts';
import type { PreparseResult } from './preparse.ts';

const getLastDayOfMonth = (year: number, month: number) => {
  return new Date(year, month - (year < 100 ? 1900 * 12 : 0), 0).getDate();
};

/**
 * Validates whether a preparse result object is valid.
 * @param pr - The preparse result object to validate
 * @param [options] - Optional parser options
 * @returns True if the preparse result is valid, false otherwise
 */
export function validatePreparseResult(pr: PreparseResult, options?: ParserOptions) {
  const y = pr.Y === undefined ? 1970 : pr.Y - (options?.calendar === 'buddhist' ? 543 : 0);
  const [min12, max12] = options?.hour12 === 'h11' ? [0, 11] : [1, 12];
  const [min24, max24] = options?.hour24 === 'h24' ? [1, 24] : [0, 23];
  const range = (value: number | undefined, min: number, max: number) => value === undefined || value >= min && value <= max;

  return pr._index > 0
    && pr._length > 0
    && pr._index === pr._length
    && pr._match > 0
    && range(y, 1, 9999)
    && range(pr.M, 1, 12)
    && range(pr.D, 1, getLastDayOfMonth(y, pr.M || 1))
    && range(pr.H, min24, max24)
    && range(pr.A, 0, 1)
    && range(pr.h, min12, max12)
    && range(pr.m, 0, 59)
    && range(pr.s, 0, 59)
    && range(pr.S, 0, 999)
    && range(pr.Z, -840, 720);
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
