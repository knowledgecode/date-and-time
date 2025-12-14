import { isTimeZone, isUTC, createTimezoneDate } from './timezone.ts';
import { validatePreparseResult } from './isValid.ts';
import { preparse } from './preparse.ts';
import type { CompiledObject } from './compile.ts';
import type { ParserOptions } from './parser.ts';

/**
 * Parses a date string according to the specified format.
 * @param dateString - The date string to parse
 * @param arg - The format string or compiled object to match against the date string
 * @param [options] - Optional parser options for customization
 * @returns The parsed Date object, or an invalid date if parsing fails
 */
export function parse(dateString: string, arg: string | CompiledObject, options?: ParserOptions) {
  const pr = preparse(dateString, arg, options);

  if (!validatePreparseResult(pr, options)) {
    return new Date(NaN);
  }
  // Normalize date components (year, month, day, hour, minute, second, millisecond)
  pr.Y = pr.Y ? pr.Y - (options?.calendar === 'buddhist' ? 543 : 0) : 1970;
  pr.M = (pr.M ?? 1) - (pr.Y < 100 ? 1900 * 12 + 1 : 1);
  pr.D ??= 1;
  pr.H = ((pr.H ?? 0) % 24) || ((pr.A ?? 0) * 12 + (pr.h ?? 0) % 12);
  pr.m ??= 0;
  pr.s ??= 0;
  pr.S ??= 0;

  if (isTimeZone(options?.timeZone)) {
    // Handle timezone-specific calculation
    return createTimezoneDate(Date.UTC(pr.Y, pr.M, pr.D, pr.H, pr.m, pr.s, pr.S), options.timeZone);
  }
  if (isUTC(options?.timeZone) || 'Z' in pr) {
    // Handle UTC calculation or when 'Z' token is present
    return new Date(Date.UTC(pr.Y, pr.M, pr.D, pr.H, pr.m + (pr.Z ?? 0), pr.s, pr.S));
  }
  // Handle local timezone calculation
  return new Date(pr.Y, pr.M, pr.D, pr.H, pr.m, pr.s, pr.S);
}
