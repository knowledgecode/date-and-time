import { compile } from './compile.ts';
import { isTimeZone, isUTC } from './timezone.ts';
import { parser as defaultParser } from './parser.ts';
import en from './locales/en.ts';
import latn from './numerals/latn.ts';
import type { CompiledObject } from './compile.ts';
import type { ParserOptions } from './parser.ts';

export interface PreparseResult {
  /**
   * Year component
   */
  Y?: number;

  /**
   * Month component (1-12)
   */
  M?: number;

  /**
   * Day component
   */
  D?: number;

  /**
   * Hour in 24-hour format
   */
  H?: number;

  /**
   * Meridiem indicator (0:AM/1:PM)
   */
  A?: number;

  /**
   * Hour in 12-hour format
   */
  h?: number;

  /**
   * Minute component
   */
  m?: number;

  /**
   * Second component
   */
  s?: number;

  /**
   * Millisecond component
   */
  S?: number;

  /**
   * Timezone offset in minutes
   */
  Z?: number;

  /**
   * Current parsing position
   */
  _index: number;

  /**
   * Total length of date string
   */
  _length: number;

  /**
   * Number of matched tokens
   */
  _match: number;
}

const wildcard = ' ';
const comment = /^\[(.*)\]$/;
const ellipsis = '...';

/**
 * Preparses a date string according to the specified pattern.
 * @param dateString - The date string to preparse
 * @param arg - The pattern string or compiled object to match against the date string
 * @param [options] - Optional parser options
 * @returns PreparseResult containing parsed date components and metadata
 */
export function preparse(dateString: string, arg: string | CompiledObject, options?: ParserOptions) {
  const pattern = (typeof arg === 'string' ? compile(arg) : arg).slice(1);
  const parserOptions = {
    hour12: options?.hour12 || 'h12',
    hour24: options?.hour24 || 'h23',
    numeral: options?.numeral || latn,
    calendar: options?.calendar || 'gregory',
    ignoreCase: options?.ignoreCase || false,
    timeZone: isTimeZone(options?.timeZone) || isUTC(options?.timeZone) ? options.timeZone : undefined,
    locale: options?.locale || en
  };
  const pr: PreparseResult = {
    _index: 0,
    _length: 0,
    _match: 0
  };
  const parsers = [...options?.plugins || [], defaultParser];
  const resolveToken = (token: string, str: string) => {
    for (const parser of parsers) {
      if (parser[token]) {
        return parser[token](str, parserOptions, pattern);
      }
    }
    return undefined;
  };

  dateString = parserOptions.numeral.decode(dateString);

  for (const token of pattern) {
    const str = dateString.substring(pr._index);
    const result = resolveToken(token, str);

    if (result) {
      if (!result.length) {
        break;
      }
      if (result.token) {
        pr[result.token] = result.value + 0;
      }
      pr._index += result.length;
      pr._match++;
    } else if (token === str[0] || token === wildcard) {
      pr._index++;
    } else if (comment.test(token) && !str.indexOf(token.replace(comment, '$1'))) {
      pr._index += token.length - 2;
    } else if (token === ellipsis) {
      pr._index = dateString.length;
      break;
    } else {
      break;
    }
  }
  pr._length = dateString.length;
  // Breaking change: 12-hour to 24-hour conversion is no longer performed here; values are preserved as read.
  return pr;
}
