import type { CompiledObject } from './compile.ts';
import type { Locale } from './locale.ts';
import type { Numeral } from './numeral.ts';
import type { TimeZone } from './timezone.ts';

type ParserToken = 'Y' | 'M' | 'D' | 'H' | 'A' | 'h' | 'm' | 's' | 'S' | 'Z';

export interface ParserPluginOptions {
  /**
   * The hour format to use for parsing.
   * This is used when the hour is in 12-hour format.
   * It can be 'h11' for 11-hour format or 'h12' for 12-hour format.
   */
  hour12: 'h11' | 'h12';

  /**
   * The hour format to use for parsing.
   * This is used when the hour is in 24-hour format.
   * It can be 'h23' for 23-hour format or 'h24' for 24-hour format.
   */
  hour24: 'h23' | 'h24';

  /**
   * The numeral system to use for parsing numbers.
   * This is an object that provides methods to encode and decode numbers in the specified numeral system.
   */
  numeral: Numeral;

  /**
   * The calendar system to use for parsing dates.
   * This can be 'buddhist' for Buddhist calendar or 'gregory' for Gregorian calendar.
   */
  calendar: 'buddhist' | 'gregory';

  /**
   * Whether to ignore case when matching strings.
   * This is useful for matching month names, day names, and meridiems in a case-insensitive manner.
   * If true, the parser will convert both the input string and the strings in the locale to lowercase before matching.
   */
  ignoreCase: boolean;

  /**
   * The time zone to use for parsing dates and times.
   * This can be a specific time zone object or 'UTC' to use Coordinated Universal Time.
   * If not specified, it defaults to undefined, which means the local time zone will be used.
   */
  timeZone: TimeZone | 'UTC' | undefined;

  /**
   * The locale to use for parsing dates and times.
   * This is an object that provides methods to get localized month names, day names, and meridiems.
   */
  locale: Locale;
}

export interface ParseResult {
  value: number;
  length: number;
  token?: ParserToken;
}

export abstract class ParserPlugin {
  [key: string]: (str: string, options: ParserPluginOptions, compiledObj: CompiledObject) => ParseResult;
}

export interface ParserOptions extends Partial<ParserPluginOptions> {
  plugins?: ParserPlugin[];
}

/**
 * Executes a regular expression against a string and returns parsed result.
 * @param re - The regular expression to execute
 * @param str - The string to execute the regex against
 * @param [token] - Optional parser token to associate with the result
 * @returns ParseResult containing the numeric value, length, and token
 */
export const exec = (re: RegExp, str: string, token?: ParserToken) => {
  const result = re.exec(str)?.[0] || '';
  return { value: +result, length: result.length, token };
};

/**
 * Finds the best matching string from an array based on length and string position.
 * @param array - Array of strings to search through
 * @param str - The string to match against
 * @param [token] - Optional parser token to associate with the result
 * @returns ParseResult with the index of the longest matching string at the start position
 */
export const find = (array: string[], str: string, token?: ParserToken): ParseResult => {
  return array.reduce((result, item, value) => item.length > result.length && !str.indexOf(item)
    ? { value, length: item.length, token }
    : result
  , { value: -1, length: 0, token });
};

class DefaultParser extends ParserPlugin {
  YYYY (str: string) {
    return exec(/^\d{4}/, str, 'Y');
  }

  Y (str: string) {
    return exec(/^\d{1,4}/, str, 'Y');
  }

  MMMM (str: string, options: ParserPluginOptions, compiledObj: CompiledObject) {
    const array = options.locale.getMonthList({ style: 'long', compiledObj });
    const locale = options.locale.getLocale();
    const result = options.ignoreCase
      ? find(array.map(s => s.toLocaleLowerCase(locale)), str.toLocaleLowerCase(locale), 'M')
      : find(array, str, 'M');

    result.value++;
    return result;
  }

  MMM (str: string, options: ParserPluginOptions, compiledObj: CompiledObject) {
    const array = options.locale.getMonthList({ style: 'short', compiledObj });
    const locale = options.locale.getLocale();
    const result = options.ignoreCase
      ? find(array.map(s => s.toLocaleLowerCase(locale)), str.toLocaleLowerCase(locale), 'M')
      : find(array, str, 'M');

    result.value++;
    return result;
  }

  MM (str: string) {
    return exec(/^\d\d/, str, 'M');
  }

  M (str: string) {
    return exec(/^\d\d?/, str, 'M');
  }

  DD (str: string) {
    return exec(/^\d\d/, str, 'D');
  }

  D (str: string) {
    return exec(/^\d\d?/, str, 'D');
  }

  HH (str: string) {
    return exec(/^\d\d/, str, 'H');
  }

  H (str: string) {
    return exec(/^\d\d?/, str, 'H');
  }

  AA (str: string, options: ParserPluginOptions, compiledObj: CompiledObject) {
    const array = options.locale.getMeridiemList({ style: 'long', compiledObj, case: 'uppercase' });
    const locale = options.locale.getLocale();

    return options.ignoreCase
      ? find(array.map(s => s.toLocaleLowerCase(locale)), str.toLocaleLowerCase(locale), 'A')
      : find(array, str, 'A');
  }

  A (str: string, options: ParserPluginOptions, compiledObj: CompiledObject) {
    const array = options.locale.getMeridiemList({ style: 'short', compiledObj, case: 'uppercase' });
    const locale = options.locale.getLocale();

    return options.ignoreCase
      ? find(array.map(s => s.toLocaleLowerCase(locale)), str.toLocaleLowerCase(locale), 'A')
      : find(array, str, 'A');
  }

  aa (str: string, options: ParserPluginOptions, compiledObj: CompiledObject) {
    const array = options.locale.getMeridiemList({ style: 'long', compiledObj, case: 'lowercase' });
    const locale = options.locale.getLocale();

    return options.ignoreCase
      ? find(array.map(s => s.toLocaleLowerCase(locale)), str.toLocaleLowerCase(locale), 'A')
      : find(array, str, 'A');
  }

  a (str: string, options: ParserPluginOptions, compiledObj: CompiledObject) {
    const array = options.locale.getMeridiemList({ style: 'short', compiledObj, case: 'lowercase' });
    const locale = options.locale.getLocale();

    return options.ignoreCase
      ? find(array.map(s => s.toLocaleLowerCase(locale)), str.toLocaleLowerCase(locale), 'A')
      : find(array, str, 'A');
  }

  hh (str: string) {
    return exec(/^\d\d/, str, 'h');
  }

  h (str: string) {
    return exec(/^\d\d?/, str, 'h');
  }

  mm (str: string) {
    return exec(/^\d\d/, str, 'm');
  }

  m (str: string) {
    return exec(/^\d\d?/, str, 'm');
  }

  ss (str: string) {
    return exec(/^\d\d/, str, 's');
  }

  s (str: string) {
    return exec(/^\d\d?/, str, 's');
  }

  SSS (str: string) {
    return exec(/^\d{1,3}/, str, 'S');
  }

  SS (str: string) {
    const result = exec(/^\d\d?/, str, 'S');
    result.value *= 10;
    return result;
  }

  S (str: string) {
    const result = exec(/^\d/, str, 'S');
    result.value *= 100;
    return result;
  }

  Z (str: string) {
    const result = exec(/^[+-][01]\d[0-5]\d/, str, 'Z');
    result.value = (result.value / 100 | 0) * -60 - result.value % 100;
    return result;
  }

  ZZ (str: string) {
    const results = /^([+-][01]\d):([0-5]\d)/.exec(str) || ['', '', ''];
    const value = +(results[1] + results[2]);
    return { value: (value / 100 | 0) * -60 - value % 100, length: results[0].length, token: 'Z' as ParserToken };
  }
}

export const parser = new DefaultParser();
