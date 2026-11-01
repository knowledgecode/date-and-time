import { describe, expect, test } from 'vitest';
import { Duration } from '@/index.ts';

describe('Duration', () => {
  test('toDays', () => {
    const duration = 365 * 24 * 60 * 60 * 1000 + 0.123456;
    expect(new Duration(duration).toDays().value).toBe(365 + 0.123456 / 24 / 60 / 60 / 1000);
    expect(new Duration(duration).toDays().toParts()).toEqual({ nanoseconds: 456, microseconds: 123, milliseconds: 0, seconds: 0, minutes: 0, hours: 0, days: 365 });
  });

  test('toHours', () => {
    const duration = 365 * 24 * 60 * 60 * 1000 + 0.123456;
    expect(new Duration(duration).toHours().value).toBe(365 * 24 + 0.123456 / 60 / 60 / 1000);
    expect(new Duration(duration).toHours().toParts()).toEqual({ nanoseconds: 456, microseconds: 123, milliseconds: 0, seconds: 0, minutes: 0, hours: 365 * 24 });
  });

  test('toMinutes', () => {
    const duration = 365 * 24 * 60 * 60 * 1000 + 0.123456;
    expect(new Duration(duration).toMinutes().value).toBe(365 * 24 * 60 + 0.123456 / 60 / 1000);
    expect(new Duration(duration).toMinutes().toParts()).toEqual({ nanoseconds: 456, microseconds: 123, milliseconds: 0, seconds: 0, minutes: 365 * 24 * 60 });
  });

  test('toSeconds', () => {
    const duration = 365 * 24 * 60 * 60 * 1000 + 0.123456;
    expect(new Duration(duration).toSeconds().value).toBe(365 * 24 * 60 * 60 + 0.123456 / 1000);
    expect(new Duration(duration).toSeconds().toParts()).toEqual({ nanoseconds: 456, microseconds: 123, milliseconds: 0, seconds: 365 * 24 * 60 * 60 });
  });

  test('toMilliseconds', () => {
    const duration = 365 * 24 * 60 * 60 * 1000 + 0.123456;
    expect(new Duration(duration).toMilliseconds().value).toBe(365 * 24 * 60 * 60 * 1000 + 0.123456);
    expect(new Duration(duration).toMilliseconds().toParts()).toEqual({ nanoseconds: 456, microseconds: 123, milliseconds: 365 * 24 * 60 * 60 * 1000 });
  });

  test('toMicroseconds', () => {
    const duration = 365 * 24 * 60 * 60 * 1000 + 0.123456;
    expect(new Duration(duration).toMicroseconds().value).toBe((365 * 24 * 60 * 60 * 1000 + 0.123456) * 1000);
    expect(new Duration(duration).toMicroseconds().toParts()).toEqual({ nanoseconds: 456, microseconds: 365 * 24 * 60 * 60 * 1000 * 1000 + 123 });
  });

  test('toNanoseconds', () => {
    const duration = 365 * 24 * 60 * 60 * 1000 + 0.123456;
    expect(new Duration(duration).toNanoseconds().value).toBe((365 * 24 * 60 * 60 * 1000 + 0.123456) * 1000000);
    expect(new Duration(duration).toNanoseconds().toParts()).toEqual({ nanoseconds: 365 * 24 * 60 * 60 * 1000 * 1000 * 1000 + 123 * 1000 + 456 });
  });
});

describe('Duration (minus)', () => {
  test('toDays', () => {
    const duration = -1 * (365 * 24 * 60 * 60 * 1000 + 0.123456);
    expect(new Duration(duration).toDays().value).toBe(-1 * (365 + 0.123456 / 24 / 60 / 60 / 1000));
    expect(new Duration(duration).toDays().toParts()).toEqual({ nanoseconds: -456, microseconds: -123, milliseconds: 0, seconds: 0, minutes: 0, hours: 0, days: -365 });
  });

  test('toHours', () => {
    const duration = -1 * (365 * 24 * 60 * 60 * 1000 + 0.123456);
    expect(new Duration(duration).toHours().value).toBe(-1 * (365 * 24 + 0.123456 / 60 / 60 / 1000));
    expect(new Duration(duration).toHours().toParts()).toEqual({ nanoseconds: -456, microseconds: -123, milliseconds: 0, seconds: 0, minutes: 0, hours: -365 * 24 });
  });

  test('toMinutes', () => {
    const duration = -1 * (365 * 24 * 60 * 60 * 1000 + 0.123456);
    expect(new Duration(duration).toMinutes().value).toBe(-1 * (365 * 24 * 60 + 0.123456 / 60 / 1000));
    expect(new Duration(duration).toMinutes().toParts()).toEqual({ nanoseconds: -456, microseconds: -123, milliseconds: 0, seconds: 0, minutes: -365 * 24 * 60 });
  });

  test('toSeconds', () => {
    const duration = -1 * (365 * 24 * 60 * 60 * 1000 + 0.123456);
    expect(new Duration(duration).toSeconds().value).toBe(-1 * (365 * 24 * 60 * 60 + 0.123456 / 1000));
    expect(new Duration(duration).toSeconds().toParts()).toEqual({ nanoseconds: -456, microseconds: -123, milliseconds: 0, seconds: -365 * 24 * 60 * 60 });
  });

  test('toMilliseconds', () => {
    const duration = -1 * (365 * 24 * 60 * 60 * 1000 + 0.123456);
    expect(new Duration(duration).toMilliseconds().value).toBe(-1 * (365 * 24 * 60 * 60 * 1000 + 0.123456));
    expect(new Duration(duration).toMilliseconds().toParts()).toEqual({ nanoseconds: -456, microseconds: -123, milliseconds: -365 * 24 * 60 * 60 * 1000 });
  });

  test('toMicroseconds', () => {
    const duration = -1 * (365 * 24 * 60 * 60 * 1000 + 0.123456);
    expect(new Duration(duration).toMicroseconds().value).toBe((-1 * (365 * 24 * 60 * 60 * 1000 + 0.123456) * 1000));
    expect(new Duration(duration).toMicroseconds().toParts()).toEqual({ nanoseconds: -456, microseconds: -365 * 24 * 60 * 60 * 1000 * 1000 - 123 });
  });

  test('toNanoseconds', () => {
    const duration = -1 * (365 * 24 * 60 * 60 * 1000 + 0.123456);
    expect(new Duration(duration).toNanoseconds().value).toBe((-1 * (365 * 24 * 60 * 60 * 1000 + 0.123456) * 1000000));
    expect(new Duration(duration).toNanoseconds().toParts()).toEqual({ nanoseconds: -365 * 24 * 60 * 60 * 1000 * 1000 * 1000 - 123 * 1000 - 456 });
  });
});

describe('Duration (Negative Zero)', () => {
  test('toDays', () => {
    const duration = -0;
    expect(new Duration(duration).toDays().format('DDD HH mm ss SSS fff FFF')).toBe('-000 00 00 00 000 000 000');
    expect(new Duration(duration).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: 0, days: 0 });
  });

  test('toHours', () => {
    const duration = -0;
    expect(new Duration(duration).toHours().format('DDD HH mm ss SSS fff FFF')).toBe('DDD -00 00 00 000 000 000');
    expect(new Duration(duration).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0, hours: 0 });
  });

  test('toMinutes', () => {
    const duration = -0;
    expect(new Duration(duration).toMinutes().format('DDD HH mm ss SSS fff FFF')).toBe('DDD HH -00 00 000 000 000');
    expect(new Duration(duration).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0, minutes: 0 });
  });

  test('toSeconds', () => {
    const duration = -0;
    expect(new Duration(duration).toSeconds().format('DDD HH mm ss SSS fff FFF')).toBe('DDD HH mm -00 000 000 000');
    expect(new Duration(duration).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0, seconds: 0 });
  });

  test('toMilliseconds', () => {
    const duration = -0;
    expect(new Duration(duration).toMilliseconds().format('DDD HH mm ss SSS fff FFF')).toBe('DDD HH mm ss -000 000 000');
    expect(new Duration(duration).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 0 });
  });

  test('toMicroseconds', () => {
    const duration = -0;
    expect(new Duration(duration).toMicroseconds().format('DDD HH mm ss SSS fff FFF')).toBe('DDD HH mm ss SSS -000 000');
    expect(new Duration(duration).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0 });
  });

  test('toNanoseconds', () => {
    const duration = -0;
    expect(new Duration(duration).toNanoseconds().format('DDD HH mm ss SSS fff FFF')).toBe('DDD HH mm ss SSS fff -000');
    expect(new Duration(duration).toNanoseconds().toParts()).toEqual({ nanoseconds: 0 });
  });
});

// Each value is stored slightly below its decimal form (1.001 is 1.000999...), so truncation drops a unit.
describe('Duration (floating-point fractions)', () => {
  test('toSeconds', () => {
    const duration = 1001.001;
    expect(new Duration(duration).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 1, milliseconds: 1, seconds: 1 });
    expect(new Duration(duration).toSeconds().format('s.SSS.fff.FFF')).toBe('1.001.001.000');
  });

  test('toMilliseconds', () => {
    const duration = 1.001;
    expect(new Duration(duration).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 1, milliseconds: 1 });
    expect(new Duration(duration).toMilliseconds().format('S.fff')).toBe('1.001');
  });

  test('toMilliseconds (nanoseconds)', () => {
    const duration = 1.000001;
    expect(new Duration(duration).toMilliseconds().toParts()).toEqual({ nanoseconds: 1, microseconds: 0, milliseconds: 1 });
  });

  test('toMilliseconds (format only)', () => {
    const duration = 4.35;
    expect(new Duration(duration).toMilliseconds().format('SSS.fff.FFF')).toBe('004.350.000');
  });

  test('toMilliseconds (minus)', () => {
    const duration = -1.001;
    expect(new Duration(duration).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: -1, milliseconds: -1 });
  });

  test('toMicroseconds', () => {
    const duration = 1.001;
    expect(new Duration(duration).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 1001 });
  });

  test('toNanoseconds', () => {
    const duration = 1.001;
    expect(new Duration(duration).toNanoseconds().toParts()).toEqual({ nanoseconds: 1001000 });
  });
});

// Fractions are rounded to the nearest nanosecond on the magnitude, so a tie rounds away from zero for either sign.
describe('Duration (nanosecond rounding)', () => {
  test('toMilliseconds (half nanosecond)', () => {
    expect(new Duration(12.2277645).toMilliseconds().toParts()).toEqual({ nanoseconds: 765, microseconds: 227, milliseconds: 12 });
    expect(new Duration(-12.2277645).toMilliseconds().toParts()).toEqual({ nanoseconds: -765, microseconds: -227, milliseconds: -12 });
    expect(new Duration(-12.2277645).toMilliseconds().format('S.fff.FFF')).toBe('-12.227.765');
  });

  test('toMilliseconds (carry)', () => {
    const duration = 0.9999999996;
    expect(new Duration(duration).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 1 });
    expect(new Duration(duration).toMilliseconds().format('SSS.fff.FFF')).toBe('001.000.000');
  });
});

describe('Duration comments spanning line breaks', () => {
  test('[D\nH] D H', () => {
    expect(new Duration(90061001).toDays().format('[D\nH] D H')).toBe('D\nH 1 1');
  });
});
