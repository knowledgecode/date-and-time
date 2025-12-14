import { compile } from './compile.ts';
import latn from './numerals/latn.ts';
import type { Numeral } from './numeral.ts';

const comment = /^\[(.*)\]$/;

interface DurationFormatter {
  D?: number;
  H?: number;
  m?: number;
  s?: number;
  S?: number;
  f?: number;
  F?: number;
}

const nanosecondsPart = (parts: DurationFormatter, time: DOMHighResTimeStamp) => {
  parts.F = Math.trunc(time * 1000000);
  return parts;
};

const microsecondsPart = (parts: DurationFormatter, time: DOMHighResTimeStamp) => {
  parts.f = Math.trunc(time * 1000);
  return nanosecondsPart(parts, Math.abs(time) * 1000 % 1 / 1000);
};

const millisecondsPart = (parts: DurationFormatter, time: DOMHighResTimeStamp) => {
  parts.S = Math.trunc(time);
  return microsecondsPart(parts, Math.abs(time) % 1);
};

const secondsPart = (parts: DurationFormatter, time: number) => {
  parts.s = Math.trunc(time / 1000);
  return millisecondsPart(parts, Math.abs(time) % 1000);
};

const minutesPart = (parts: DurationFormatter, time: number) => {
  parts.m = Math.trunc(time / 60000);
  return secondsPart(parts, Math.abs(time) % 60000);
};

const hoursPart = (parts: DurationFormatter, time: number) => {
  parts.H = Math.trunc(time / 3600000);
  return minutesPart(parts, Math.abs(time) % 3600000);
};

const daysPart = (parts: DurationFormatter, time: number) => {
  parts.D = Math.trunc(time / 86400000);
  return hoursPart(parts, Math.abs(time) % 86400000);
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
    return comment.test(token) ? token.replace(comment, '$1') : token;
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

export class Duration {
  private readonly time: DOMHighResTimeStamp;

  constructor (time: DOMHighResTimeStamp) {
    this.time = time;
  }

  /**
   * Converts the duration to nanoseconds.
   * @returns DurationDescriptor with the value in nanoseconds and methods to format and get
   * the parts of the duration in nanoseconds.
   */
  toNanoseconds (): DurationDescriptor<NanosecondsParts> {
    return {
      value: this.time * 1000000,
      format: (formatString: string, numeral?: Numeral) => {
        return format(nanosecondsPart({}, this.time), formatString, numeral);
      },
      toParts: () => {
        return {
          nanoseconds: Math.trunc(this.time * 1000000) + 0
        };
      }
    };
  }

  /**
   * Converts the duration to microseconds.
   * @returns DurationDescriptor with the value in microseconds and methods to format and get
   * the parts of the duration in microseconds and nanoseconds.
   */
  toMicroseconds (): DurationDescriptor<MicrosecondsParts> {
    return {
      value: this.time * 1000,
      format: (formatString: string, numeral?: Numeral) => {
        return format(microsecondsPart({}, this.time), formatString, numeral);
      },
      toParts: () => {
        return {
          microseconds: Math.trunc(this.time * 1000) + 0,
          nanoseconds: Math.trunc(this.time * 1000000 % 1000) + 0
        };
      }
    };
  }

  /**
   * Converts the duration to milliseconds.
   * @returns DurationDescriptor with the value in milliseconds and methods to format and get
   * the parts of the duration in milliseconds, microseconds, and nanoseconds.
   */
  toMilliseconds (): DurationDescriptor<MillisecondsParts> {
    return {
      value: this.time,
      format: (formatString: string, numeral?: Numeral) => {
        return format(millisecondsPart({}, this.time), formatString, numeral);
      },
      toParts: () => {
        return {
          milliseconds: Math.trunc(this.time) + 0,
          microseconds: Math.trunc(this.time * 1000 % 1000) + 0,
          nanoseconds: Math.trunc(this.time * 1000000 % 1000) + 0
        };
      }
    };
  }

  /**
   * Converts the duration to seconds.
   * @returns DurationDescriptor with the value in seconds and methods to format and get
   * the parts of the duration in seconds, milliseconds, microseconds, and nanoseconds.
   */
  toSeconds (): DurationDescriptor<SecondsParts> {
    return {
      value: this.time / 1000,
      format: (formatString: string, numeral?: Numeral) => {
        return format(secondsPart({}, this.time), formatString, numeral);
      },
      toParts: () => {
        return {
          seconds: Math.trunc(this.time / 1000) + 0,
          milliseconds: Math.trunc(this.time % 1000) + 0,
          microseconds: Math.trunc(this.time * 1000 % 1000) + 0,
          nanoseconds: Math.trunc(this.time * 1000000 % 1000) + 0
        };
      }
    };
  }

  /**
   * Converts the duration to minutes.
   * @returns DurationDescriptor with the value in minutes and methods to format and get
   * the parts of the duration in minutes, seconds, milliseconds, microseconds, and nanoseconds.
   */
  toMinutes (): DurationDescriptor<MinutesParts> {
    return {
      value: this.time / 60000,
      format: (formatString: string, numeral?: Numeral) => {
        return format(minutesPart({}, this.time), formatString, numeral);
      },
      toParts: () => {
        return {
          minutes: Math.trunc(this.time / 60000) + 0,
          seconds: Math.trunc(this.time % 86400000 % 3600000 % 60000 / 1000) + 0,
          milliseconds: Math.trunc(this.time % 1000) + 0,
          microseconds: Math.trunc(this.time * 1000 % 1000) + 0,
          nanoseconds: Math.trunc(this.time * 1000000 % 1000) + 0
        };
      }
    };
  }

  /**
   * Converts the duration to hours.
   * @returns DurationDescriptor with the value in hours and methods to format and get
   * the parts of the duration in hours, minutes, seconds, milliseconds, microseconds, and nanoseconds.
   */
  toHours (): DurationDescriptor<HoursParts> {
    return {
      value: this.time / 3600000,
      format: (formatString: string, numeral?: Numeral) => {
        return format(hoursPart({}, this.time), formatString, numeral);
      },
      toParts: () => {
        return {
          hours: Math.trunc(this.time / 3600000) + 0,
          minutes: Math.trunc(this.time % 86400000 % 3600000 / 60000) + 0,
          seconds: Math.trunc(this.time % 86400000 % 3600000 % 60000 / 1000) + 0,
          milliseconds: Math.trunc(this.time % 1000) + 0,
          microseconds: Math.trunc(this.time * 1000 % 1000) + 0,
          nanoseconds: Math.trunc(this.time * 1000000 % 1000) + 0
        };
      }
    };
  }

  /**
   * Converts the duration to days.
   * @returns DurationDescriptor with the value in days and methods to format and get
   * the parts of the duration in days, hours, minutes, seconds, milliseconds, microseconds, and nanoseconds.
   */
  toDays (): DurationDescriptor<DaysParts> {
    return {
      value: this.time / 86400000,
      format: (formatString: string, numeral?: Numeral) => {
        return format(daysPart({}, this.time), formatString, numeral);
      },
      toParts: () => {
        return {
          days: Math.trunc(this.time / 86400000) + 0,
          hours: Math.trunc(this.time % 86400000 / 3600000) + 0,
          minutes: Math.trunc(this.time % 86400000 % 3600000 / 60000) + 0,
          seconds: Math.trunc(this.time % 86400000 % 3600000 % 60000 / 1000) + 0,
          milliseconds: Math.trunc(this.time % 1000) + 0,
          microseconds: Math.trunc(this.time * 1000 % 1000) + 0,
          nanoseconds: Math.trunc(this.time * 1000000 % 1000) + 0
        };
      }
    };
  }
}
