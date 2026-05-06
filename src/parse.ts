import { createTimezoneDate, TimeZone } from './zone.ts';
import { isUTC } from './datetime.ts';
import { preparse } from './preparse.ts';
import { toGregorianYear, getDefaultDate, validatePreparseResult } from './isValid.ts';
import type { CompiledObject } from './compile.ts';
import type { ParserOptions } from './parser.ts';

const convert = (Y: number, M: number, D: number, H: number, m: number, s: number, S: number, timeZone?: string | TimeZone) => {
  // If a specific time zone is provided in the options, use it to create the date.
  if (timeZone) {
    const naiveUTC = Date.UTC(Y, M - 1, D, H, m, s, S);
    // If the specified time zone is UTC, create the date directly in UTC. Otherwise, create the date using the specified time zone.
    return isUTC(timeZone) ? new Date(naiveUTC) : createTimezoneDate(naiveUTC, timeZone);
  }
  // If no time zone is provided, create the date in the local time zone.
  return new Date(Y, M - 1, D, H, m, s, S);
};

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

  const base = getDefaultDate(options?.defaultDate);
  const year = toGregorianYear(pr.Y, options) ?? base.Y;
  // When a Z offset exists (from the parsed string or defaultDate.Z), it takes precedence over options.timeZone.
  const offset = pr.Z ?? base.Z;

  return convert(
    year,
    (pr.M ?? base.M) - (year < 100 ? 1900 * 12 : 0),
    pr.D ?? base.D,
    ((pr.H ?? base.H ?? 0) % 24) || ((pr.A ?? base.A ?? 0) * 12 + (pr.h ?? base.h ?? 0) % 12),
    (pr.m ?? base.m) + (offset ?? 0),
    pr.s ?? base.s,
    pr.S ?? base.S,
    typeof offset === 'number' ? 'UTC' : options?.timeZone
  );
}
