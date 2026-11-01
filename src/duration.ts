import { compile, COMMENT } from './compile.ts';
import latn from './numerals/latn.ts';
import type { Numeral } from './numeral.ts';

interface DurationFormatter {
  D?: number;
  H?: number;
  m?: number;
  s?: number;
  S?: number;
  f?: number;
  F?: number;
}

const nanosecondsPart = (parts: DurationFormatter, nanoseconds: number) => {
  parts.F = nanoseconds;
  return parts;
};

const microsecondsPart = (parts: DurationFormatter, nanoseconds: number) => {
  parts.f = Math.trunc(nanoseconds / 1000);
  return nanosecondsPart(parts, Math.abs(nanoseconds % 1000));
};

const millisecondsPart = (parts: DurationFormatter, nanoseconds: number) => {
  parts.S = Math.trunc(nanoseconds / 1000000);
  return microsecondsPart(parts, Math.abs(nanoseconds % 1000000));
};

const secondsPart = (parts: DurationFormatter, nanoseconds: number) => {
  parts.s = Math.trunc(nanoseconds / 1000000000);
  return millisecondsPart(parts, Math.abs(nanoseconds % 1000000000));
};

const minutesPart = (parts: DurationFormatter, nanoseconds: number) => {
  parts.m = Math.trunc(nanoseconds / 60000000000);
  return secondsPart(parts, Math.abs(nanoseconds % 60000000000));
};

const hoursPart = (parts: DurationFormatter, nanoseconds: number) => {
  parts.H = Math.trunc(nanoseconds / 3600000000000);
  return minutesPart(parts, Math.abs(nanoseconds % 3600000000000));
};

const daysPart = (parts: DurationFormatter, nanoseconds: number) => {
  parts.D = Math.trunc(nanoseconds / 86400000000000);
  return hoursPart(parts, Math.abs(nanoseconds % 86400000000000));
};

const toIntegerNanoseconds = (time: number) => {
  return Math.sign(time) * Math.round(Math.abs(time) * 1000000);
};

const sign = (time: number) => {
  return time < 0 || time === 0 && (1 / time) === -Infinity ? '-' : '';
};

const format = (times: DurationFormatter, formatString: string, numeral: Numeral = latn) => {
  const pattern = compile(formatString).slice(1);
  const resolveToken = (token: string) => {
    if (token[0] in times) {
      const time = times[token[0] as keyof DurationFormatter] ?? 0;
      return numeral.encode(`${sign(time)}${String(Math.abs(time)).padStart(token.length, '0')}`);
    }
    return COMMENT.test(token) ? token.replace(COMMENT, '$1') : token;
  };

  return pattern.reduce((result, token) => result + resolveToken(token), '');
};

export interface NanosecondsParts {
  nanoseconds: number;
}

export interface MicrosecondsParts extends NanosecondsParts {
  microseconds: number;
}

export interface MillisecondsParts extends MicrosecondsParts {
  milliseconds: number;
}

export interface SecondsParts extends MillisecondsParts {
  seconds: number;
}

export interface MinutesParts extends SecondsParts {
  minutes: number;
}

export interface HoursParts extends MinutesParts {
  hours: number;
}

export interface DaysParts extends HoursParts {
  days: number;
}

export interface DurationDescriptor<T> {
  /**
   * The value of the duration in the respective unit.
   */
  value: number;

  /**
   * Formats the duration according to the provided format string.
   * @param formatString - The format string to use for formatting
   * @param numeral - Optional numeral object for number formatting
   * @returns Formatted string representation of the duration
   */
  format: (formatString: string, numeral?: Numeral) => string;

  /**
   * Converts the duration to an object containing the parts of the duration in the respective unit.
   * @returns An object containing the parts of the duration in the respective unit.
   */
  toParts: () => T;
}

const PART_NAMES = {
  D: 'days',
  H: 'hours',
  m: 'minutes',
  s: 'seconds',
  S: 'milliseconds',
  f: 'microseconds',
  F: 'nanoseconds'
} as const;

const createDescriptor = <T>(
  time: number,
  value: number,
  decompose: (parts: DurationFormatter, nanoseconds: number) => DurationFormatter
): DurationDescriptor<T> => {
  return {
    value,
    format: (formatString: string, numeral?: Numeral) => {
      return format(decompose({}, toIntegerNanoseconds(time)), formatString, numeral);
    },
    toParts: () => {
      const timeSign = Math.sign(time);
      const parts = decompose({}, toIntegerNanoseconds(time));
      const keys = Object.keys(parts) as (keyof DurationFormatter)[];
      const result: Record<string, number> = {};

      // decompose() inserts the leading unit first and signs only that one; the smaller units are magnitudes.
      keys.forEach((key, i) => {
        result[PART_NAMES[key]] = (i ? timeSign : 1) * (parts[key] ?? 0) + 0;
      });
      return result as T;
    }
  };
};

export class Duration {
  private readonly time: number;

  /**
   * @param time - The duration in milliseconds. A fractional part carries sub-millisecond
   * precision, such as the difference between two `performance.now()` values.
   */
  constructor (time: number) {
    this.time = time;
  }

  /**
   * Converts the duration to nanoseconds.
   * @returns DurationDescriptor with the value in nanoseconds and methods to format and get
   * the parts of the duration in nanoseconds.
   */
  toNanoseconds (): DurationDescriptor<NanosecondsParts> {
    return createDescriptor<NanosecondsParts>(this.time, this.time * 1000000, nanosecondsPart);
  }

  /**
   * Converts the duration to microseconds.
   * @returns DurationDescriptor with the value in microseconds and methods to format and get
   * the parts of the duration in microseconds and nanoseconds.
   */
  toMicroseconds (): DurationDescriptor<MicrosecondsParts> {
    return createDescriptor<MicrosecondsParts>(this.time, this.time * 1000, microsecondsPart);
  }

  /**
   * Converts the duration to milliseconds.
   * @returns DurationDescriptor with the value in milliseconds and methods to format and get
   * the parts of the duration in milliseconds, microseconds, and nanoseconds.
   */
  toMilliseconds (): DurationDescriptor<MillisecondsParts> {
    return createDescriptor<MillisecondsParts>(this.time, this.time, millisecondsPart);
  }

  /**
   * Converts the duration to seconds.
   * @returns DurationDescriptor with the value in seconds and methods to format and get
   * the parts of the duration in seconds, milliseconds, microseconds, and nanoseconds.
   */
  toSeconds (): DurationDescriptor<SecondsParts> {
    return createDescriptor<SecondsParts>(this.time, this.time / 1000, secondsPart);
  }

  /**
   * Converts the duration to minutes.
   * @returns DurationDescriptor with the value in minutes and methods to format and get
   * the parts of the duration in minutes, seconds, milliseconds, microseconds, and nanoseconds.
   */
  toMinutes (): DurationDescriptor<MinutesParts> {
    return createDescriptor<MinutesParts>(this.time, this.time / 60000, minutesPart);
  }

  /**
   * Converts the duration to hours.
   * @returns DurationDescriptor with the value in hours and methods to format and get
   * the parts of the duration in hours, minutes, seconds, milliseconds, microseconds, and nanoseconds.
   */
  toHours (): DurationDescriptor<HoursParts> {
    return createDescriptor<HoursParts>(this.time, this.time / 3600000, hoursPart);
  }

  /**
   * Converts the duration to days.
   * @returns DurationDescriptor with the value in days and methods to format and get
   * the parts of the duration in days, hours, minutes, seconds, milliseconds, microseconds, and nanoseconds.
   */
  toDays (): DurationDescriptor<DaysParts> {
    return createDescriptor<DaysParts>(this.time, this.time / 86400000, daysPart);
  }
}
