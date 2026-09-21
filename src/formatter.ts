import type { CompiledObject } from './compile.ts';
import type { DateLike } from './datetime.ts';
import type { Locale } from './locale.ts';
import type { Numeral } from './numeral.ts';
import type { TimeZone } from './zone.ts';

export interface FormatterPluginOptions {
  /**
   * The hour format to use for formatting.
   * This is used when the hour is in 12-hour format.
   * It can be 'h11' for 11-hour format or 'h12' for 12-hour format.
   */
  hour12: 'h11' | 'h12';

  /**
   * The hour format to use for formatting.
   * This is used when the hour is in 24-hour format.
   * It can be 'h23' for 23-hour format or 'h24' for 24-hour format.
   */
  hour24: 'h23' | 'h24';

  /**
   * The numeral system to use for formatting numbers.
   * This is an object that provides methods to encode and decode numbers in the specified numeral system.
   */
  numeral: Numeral;

  /**
   * The calendar system to use for formatting dates.
   * This can be 'buddhist' for Buddhist calendar or 'gregory' for Gregorian calendar.
   */
  calendar: 'buddhist' | 'gregory';

/**
  * The time zone to use for formatting dates and times.
  * This can be a specific time zone object, an IANA time zone name, or 'UTC' to use Coordinated Universal Time.
  * If not specified, it defaults to undefined, which means the local time zone will be used.
  */
  timeZone: TimeZone | string | undefined;

  /**
   * The locale to use for formatting dates and times.
   * This is an object that provides methods to get localized month names, day names, and meridiems.
   */
  locale: Locale;
}

type FormatterFunction = (d: DateLike, options: FormatterPluginOptions, compiledObj: CompiledObject) => string;

/**
 * Base class for authoring formatter plugins by extending it with token methods.
 * @deprecated Prefer a plain object literal typed as `FormatterPluginObject`, which statically
 * rejects keys that collide with built-in tokens. This class is kept only to avoid a breaking
 * change for existing class-based plugins and will be removed in the next major version.
 */
export abstract class FormatterPlugin {
  [key: string]: FormatterFunction | undefined;
}

export interface FormatterOptions extends Partial<FormatterPluginOptions> {
  // eslint-disable-next-line @typescript-eslint/no-deprecated
  plugins?: (FormatterPluginObject | FormatterPlugin)[];
}

const getFullYear = (d: DateLike, calendar: 'buddhist' | 'gregory') => {
  return d.getFullYear() + (calendar === 'buddhist' ? 543 : 0);
};

type ReservedFormatterToken =
  | 'YYYY' | 'YY' | 'Y' | 'MMMM' | 'MMM' | 'MM' | 'M' | 'DD' | 'D' | 'HH' | 'H'
  | 'AA' | 'A' | 'aa' | 'a' | 'hh' | 'h' | 'mm' | 'm' | 'ss' | 's' | 'SSS' | 'SS' | 'S'
  | 'dddd' | 'ddd' | 'dd' | 'Z' | 'ZZ';

// The `satisfies` clause below requires exactly the keys listed in `ReservedFormatterToken`.
const defaultFormatter = {
  YYYY (d: DateLike, options: FormatterPluginOptions) {
    return `000${String(getFullYear(d, options.calendar))}`.slice(-4);
  },

  YY (d: DateLike, options: FormatterPluginOptions) {
    return `0${String(getFullYear(d, options.calendar))}`.slice(-2);
  },

  Y (d: DateLike, options: FormatterPluginOptions) {
    return String(getFullYear(d, options.calendar));
  },

  MMMM (d: DateLike, options: FormatterPluginOptions, compiledObj: CompiledObject) {
    const list = options.locale.getMonthList({ style: 'long', compiledObj });
    return list[d.getMonth()] ?? '';
  },

  MMM (d: DateLike, options: FormatterPluginOptions, compiledObj: CompiledObject) {
    const list = options.locale.getMonthList({ style: 'short', compiledObj });
    return list[d.getMonth()] ?? '';
  },

  MM (d: DateLike) {
    return `0${String(d.getMonth() + 1)}`.slice(-2);
  },

  M (d: DateLike) {
    return String(d.getMonth() + 1);
  },

  DD (d: DateLike) {
    return `0${String(d.getDate())}`.slice(-2);
  },

  D (d: DateLike) {
    return String(d.getDate());
  },

  HH (d: DateLike, options: FormatterPluginOptions) {
    return `0${String(d.getHours() || (options.hour24 === 'h24' ? 24 : 0))}`.slice(-2);
  },

  H (d: DateLike, options: FormatterPluginOptions) {
    return String(d.getHours() || (options.hour24 === 'h24' ? 24 : 0));
  },

  AA (d: DateLike, options: FormatterPluginOptions, compiledObj: CompiledObject) {
    const list = options.locale.getMeridiemList({ style: 'long', compiledObj, case: 'uppercase' });
    return list[+(d.getHours() > 11)] ?? '';
  },

  A (d: DateLike, options: FormatterPluginOptions, compiledObj: CompiledObject) {
    const list = options.locale.getMeridiemList({ style: 'short', compiledObj, case: 'uppercase' });
    return list[+(d.getHours() > 11)] ?? '';
  },

  aa (d: DateLike, options: FormatterPluginOptions, compiledObj: CompiledObject) {
    const list = options.locale.getMeridiemList({ style: 'long', compiledObj, case: 'lowercase' });
    return list[+(d.getHours() > 11)] ?? '';
  },

  a (d: DateLike, options: FormatterPluginOptions, compiledObj: CompiledObject) {
    const list = options.locale.getMeridiemList({ style: 'short', compiledObj, case: 'lowercase' });
    return list[+(d.getHours() > 11)] ?? '';
  },

  hh (d: DateLike, options: FormatterPluginOptions) {
    return `0${String(d.getHours() % 12 || (options.hour12 === 'h12' ? 12 : 0))}`.slice(-2);
  },

  h (d: DateLike, options: FormatterPluginOptions) {
    return String(d.getHours() % 12 || (options.hour12 === 'h12' ? 12 : 0));
  },

  mm (d: DateLike) {
    return `0${String(d.getMinutes())}`.slice(-2);
  },

  m (d: DateLike) {
    return String(d.getMinutes());
  },

  ss (d: DateLike) {
    return `0${String(d.getSeconds())}`.slice(-2);
  },

  s (d: DateLike) {
    return String(d.getSeconds());
  },

  SSS (d: DateLike) {
    return `00${String(d.getMilliseconds())}`.slice(-3);
  },

  SS (d: DateLike) {
    return `00${String(d.getMilliseconds())}`.slice(-3, -1);
  },

  S (d: DateLike) {
    return `00${String(d.getMilliseconds())}`.slice(-3, -2);
  },

  dddd (d: DateLike, options: FormatterPluginOptions, compiledObj: CompiledObject) {
    const list = options.locale.getDayOfWeekList({ style: 'long', compiledObj });
    return list[d.getDay()] ?? '';
  },

  ddd (d: DateLike, options: FormatterPluginOptions, compiledObj: CompiledObject) {
    const list = options.locale.getDayOfWeekList({ style: 'short', compiledObj });
    return list[d.getDay()] ?? '';
  },

  dd (d: DateLike, options: FormatterPluginOptions, compiledObj: CompiledObject) {
    const list = options.locale.getDayOfWeekList({ style: 'narrow', compiledObj });
    return list[d.getDay()] ?? '';
  },

  Z (d: DateLike) {
    const offset = d.getTimezoneOffset();
    const absOffset = Math.abs(offset);
    return `${offset > 0 ? '-' : '+'}${`0${String(absOffset / 60 | 0)}`.slice(-2)}${`0${String(absOffset % 60)}`.slice(-2)}`;
  },

  ZZ (d: DateLike) {
    const offset = d.getTimezoneOffset();
    const absOffset = Math.abs(offset);
    return `${offset > 0 ? '-' : '+'}${`0${String(absOffset / 60 | 0)}`.slice(-2)}:${`0${String(absOffset % 60)}`.slice(-2)}`;
  }
} satisfies Record<ReservedFormatterToken, FormatterFunction>;

/**
 * Type for authoring a formatter plugin as a plain object literal. Keys matching a token
 * already implemented by the built-in formatter are statically rejected, which prevents
 * accidentally shadowing a built-in token.
 */
export type FormatterPluginObject =
  Partial<Record<ReservedFormatterToken, never>> &
  Record<string, FormatterFunction | undefined>;

// Widened to a string-indexed record so a token can be looked up by an arbitrary string.
export const formatter: Record<string, FormatterFunction | undefined> = defaultFormatter;
