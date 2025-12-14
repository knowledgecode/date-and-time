import { compile } from './compile.ts';
import { DateTime } from './datetime.ts';
import { formatter as defaultFormatter } from './formatter.ts';
import en from './locales/en.ts';
import latn from './numerals/latn.ts';
import { isTimeZone, isUTC } from './timezone.ts';
import type { CompiledObject } from './compile.ts';
import type { FormatterOptions } from './formatter.ts';

const comment = /^\[(.*)\]$/;

/**
 * Formats a Date object according to the specified format string.
 * @param dateObj - The Date object to format
 * @param arg - The format string or compiled object to match against the Date object
 * @param [options] - Optional formatter options for customization
 * @returns The formatted date string representation
 */
export function format(dateObj: Date, arg: string | CompiledObject, options?: FormatterOptions) {
  const pattern = (typeof arg === 'string' ? compile(arg) : arg).slice(1);
  const timeZone = isTimeZone(options?.timeZone) || isUTC(options?.timeZone) ? options.timeZone : undefined;
  const zoneName = typeof timeZone === 'string' ? timeZone : timeZone?.zone_name ?? '';
  const dateTime = zoneName ? new DateTime(dateObj, zoneName) : dateObj;
  const formatterOptions = {
    hour12: options?.hour12 ?? 'h12',
    hour24: options?.hour24 ?? 'h23',
    numeral: options?.numeral ?? latn,
    calendar: options?.calendar ?? 'gregory',
    timeZone,
    locale: options?.locale ?? en
  };
  const formatters = [...options?.plugins ?? [], defaultFormatter];
  const encode = formatterOptions.numeral.encode;
  const resolveToken = (token: string, compiledObj: CompiledObject) => {
    for (const formatter of formatters) {
      if (formatter[token]) {
        return encode(formatter[token](dateTime, formatterOptions, compiledObj));
      }
    }
    return comment.test(token) ? token.replace(comment, '$1') : token;
  };

  return pattern.reduce((result, token) => result + resolveToken(token, pattern), '');
}
