import { describe, expect, test } from 'vitest';
import { Duration } from '@/index.ts';

// 0.109375 ms (7 / 64) is exact in binary, so its nanoseconds survive at 365 days, where a double's spacing is about 3.8 ns.
describe('Duration', () => {
  test('toDays', () => {
    const duration = 365 * 24 * 60 * 60 * 1000 + 0.109375;
    expect(new Duration(duration).toDays().value).toBe(365 + 0.109375 / 24 / 60 / 60 / 1000);
    expect(new Duration(duration).toDays().toParts()).toEqual({ nanoseconds: 375, microseconds: 109, milliseconds: 0, seconds: 0, minutes: 0, hours: 0, days: 365 });
  });

  test('toHours', () => {
    const duration = 365 * 24 * 60 * 60 * 1000 + 0.109375;
    expect(new Duration(duration).toHours().value).toBe(365 * 24 + 0.109375 / 60 / 60 / 1000);
    expect(new Duration(duration).toHours().toParts()).toEqual({ nanoseconds: 375, microseconds: 109, milliseconds: 0, seconds: 0, minutes: 0, hours: 365 * 24 });
  });

  test('toMinutes', () => {
    const duration = 365 * 24 * 60 * 60 * 1000 + 0.109375;
    expect(new Duration(duration).toMinutes().value).toBe(365 * 24 * 60 + 0.109375 / 60 / 1000);
    expect(new Duration(duration).toMinutes().toParts()).toEqual({ nanoseconds: 375, microseconds: 109, milliseconds: 0, seconds: 0, minutes: 365 * 24 * 60 });
  });

  test('toSeconds', () => {
    const duration = 365 * 24 * 60 * 60 * 1000 + 0.109375;
    expect(new Duration(duration).toSeconds().value).toBe(365 * 24 * 60 * 60 + 0.109375 / 1000);
    expect(new Duration(duration).toSeconds().toParts()).toEqual({ nanoseconds: 375, microseconds: 109, milliseconds: 0, seconds: 365 * 24 * 60 * 60 });
  });

  test('toMilliseconds', () => {
    const duration = 365 * 24 * 60 * 60 * 1000 + 0.109375;
    expect(new Duration(duration).toMilliseconds().value).toBe(365 * 24 * 60 * 60 * 1000 + 0.109375);
    expect(new Duration(duration).toMilliseconds().toParts()).toEqual({ nanoseconds: 375, microseconds: 109, milliseconds: 365 * 24 * 60 * 60 * 1000 });
  });

  test('toMicroseconds', () => {
    const duration = 365 * 24 * 60 * 60 * 1000 + 0.109375;
    expect(new Duration(duration).toMicroseconds().value).toBe((365 * 24 * 60 * 60 * 1000 + 0.109375) * 1000);
    expect(new Duration(duration).toMicroseconds().toParts()).toEqual({ nanoseconds: 375, microseconds: 365 * 24 * 60 * 60 * 1000 * 1000 + 109 });
  });

  test('toNanoseconds', () => {
    const duration = 365 * 24 * 60 * 60 * 1000 + 0.109375;
    expect(new Duration(duration).toNanoseconds().value).toBe((365 * 24 * 60 * 60 * 1000 + 0.109375) * 1000000);
    expect(new Duration(duration).toNanoseconds().toParts()).toEqual({ nanoseconds: 365 * 24 * 60 * 60 * 1000 * 1000 * 1000 + 109 * 1000 + 375 });
  });
});

describe('Duration (minus)', () => {
  test('toDays', () => {
    const duration = -1 * (365 * 24 * 60 * 60 * 1000 + 0.109375);
    expect(new Duration(duration).toDays().value).toBe(-1 * (365 + 0.109375 / 24 / 60 / 60 / 1000));
    expect(new Duration(duration).toDays().toParts()).toEqual({ nanoseconds: -375, microseconds: -109, milliseconds: 0, seconds: 0, minutes: 0, hours: 0, days: -365 });
  });

  test('toHours', () => {
    const duration = -1 * (365 * 24 * 60 * 60 * 1000 + 0.109375);
    expect(new Duration(duration).toHours().value).toBe(-1 * (365 * 24 + 0.109375 / 60 / 60 / 1000));
    expect(new Duration(duration).toHours().toParts()).toEqual({ nanoseconds: -375, microseconds: -109, milliseconds: 0, seconds: 0, minutes: 0, hours: -365 * 24 });
  });

  test('toMinutes', () => {
    const duration = -1 * (365 * 24 * 60 * 60 * 1000 + 0.109375);
    expect(new Duration(duration).toMinutes().value).toBe(-1 * (365 * 24 * 60 + 0.109375 / 60 / 1000));
    expect(new Duration(duration).toMinutes().toParts()).toEqual({ nanoseconds: -375, microseconds: -109, milliseconds: 0, seconds: 0, minutes: -365 * 24 * 60 });
  });

  test('toSeconds', () => {
    const duration = -1 * (365 * 24 * 60 * 60 * 1000 + 0.109375);
    expect(new Duration(duration).toSeconds().value).toBe(-1 * (365 * 24 * 60 * 60 + 0.109375 / 1000));
    expect(new Duration(duration).toSeconds().toParts()).toEqual({ nanoseconds: -375, microseconds: -109, milliseconds: 0, seconds: -365 * 24 * 60 * 60 });
  });

  test('toMilliseconds', () => {
    const duration = -1 * (365 * 24 * 60 * 60 * 1000 + 0.109375);
    expect(new Duration(duration).toMilliseconds().value).toBe(-1 * (365 * 24 * 60 * 60 * 1000 + 0.109375));
    expect(new Duration(duration).toMilliseconds().toParts()).toEqual({ nanoseconds: -375, microseconds: -109, milliseconds: -365 * 24 * 60 * 60 * 1000 });
  });

  test('toMicroseconds', () => {
    const duration = -1 * (365 * 24 * 60 * 60 * 1000 + 0.109375);
    expect(new Duration(duration).toMicroseconds().value).toBe((-1 * (365 * 24 * 60 * 60 * 1000 + 0.109375) * 1000));
    expect(new Duration(duration).toMicroseconds().toParts()).toEqual({ nanoseconds: -375, microseconds: -365 * 24 * 60 * 60 * 1000 * 1000 - 109 });
  });

  test('toNanoseconds', () => {
    const duration = -1 * (365 * 24 * 60 * 60 * 1000 + 0.109375);
    expect(new Duration(duration).toNanoseconds().value).toBe((-1 * (365 * 24 * 60 * 60 * 1000 + 0.109375) * 1000000));
    expect(new Duration(duration).toNanoseconds().toParts()).toEqual({ nanoseconds: -365 * 24 * 60 * 60 * 1000 * 1000 * 1000 - 109 * 1000 - 375 });
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
    // 0.0078125 ms (1 / 128) is exactly 7812.5 ns, a true tie in binary.
    expect(new Duration(12.0078125).toMilliseconds().toParts()).toEqual({ nanoseconds: 813, microseconds: 7, milliseconds: 12 });
    expect(new Duration(-12.0078125).toMilliseconds().toParts()).toEqual({ nanoseconds: -813, microseconds: -7, milliseconds: -12 });
    expect(new Duration(-12.0078125).toMilliseconds().format('S.fff.FFF')).toBe('-12.007.813');
  });

  test('toMilliseconds (carry)', () => {
    const duration = 0.9999999996;
    expect(new Duration(duration).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 1 });
    expect(new Duration(duration).toMilliseconds().format('SSS.fff.FFF')).toBe('001.000.000');
  });
});

// Each duration exceeds Number.MAX_SAFE_INTEGER nanoseconds, while every expected part is a safe integer.
describe('Duration (beyond safe-integer nanoseconds)', () => {
  // 2000-01-01T00:00:00.123Z in epoch milliseconds: an integer with no sub-millisecond part.
  const epoch = 946684800123;
  // 2 ** 34 + 1 / 64 milliseconds, stored exactly as a double; 1 / 64 ms is 15.625 microseconds.
  const fraction = 17179869184.015625;

  test('toDays', () => {
    expect(new Duration(epoch).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 123, seconds: 0, minutes: 0, hours: 0, days: 10957 });
    expect(new Duration(-epoch).toDays().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -123, seconds: 0, minutes: 0, hours: 0, days: -10957 });
    expect(new Duration(fraction).toDays().toParts()).toEqual({ nanoseconds: 625, microseconds: 15, milliseconds: 184, seconds: 9, minutes: 11, hours: 20, days: 198 });
    expect(new Duration(epoch).toDays().format('D HH:mm:ss.SSS.fff.FFF')).toBe('10957 00:00:00.123.000.000');
  });

  test('toHours', () => {
    expect(new Duration(epoch).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 123, seconds: 0, minutes: 0, hours: 262968 });
    expect(new Duration(-epoch).toHours().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -123, seconds: 0, minutes: 0, hours: -262968 });
    expect(new Duration(fraction).toHours().toParts()).toEqual({ nanoseconds: 625, microseconds: 15, milliseconds: 184, seconds: 9, minutes: 11, hours: 4772 });
  });

  test('toMinutes', () => {
    expect(new Duration(epoch).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 123, seconds: 0, minutes: 15778080 });
    expect(new Duration(-epoch).toMinutes().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -123, seconds: 0, minutes: -15778080 });
    expect(new Duration(fraction).toMinutes().toParts()).toEqual({ nanoseconds: 625, microseconds: 15, milliseconds: 184, seconds: 9, minutes: 286331 });
  });

  test('toSeconds', () => {
    expect(new Duration(epoch).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 123, seconds: 946684800 });
    expect(new Duration(-epoch).toSeconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -123, seconds: -946684800 });
    expect(new Duration(fraction).toSeconds().toParts()).toEqual({ nanoseconds: 625, microseconds: 15, milliseconds: 184, seconds: 17179869 });
  });

  test('toMilliseconds', () => {
    expect(new Duration(epoch).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: 946684800123 });
    expect(new Duration(-epoch).toMilliseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 0, milliseconds: -946684800123 });
    expect(new Duration(fraction).toMilliseconds().toParts()).toEqual({ nanoseconds: 625, microseconds: 15, milliseconds: 17179869184 });
    expect(new Duration(-fraction).toMilliseconds().format('S.fff.FFF')).toBe('-17179869184.015.625');
  });

  test('toMicroseconds', () => {
    expect(new Duration(epoch).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: 946684800123000 });
    expect(new Duration(-epoch).toMicroseconds().toParts()).toEqual({ nanoseconds: 0, microseconds: -946684800123000 });
    expect(new Duration(fraction).toMicroseconds().toParts()).toEqual({ nanoseconds: 625, microseconds: 17179869184015 });
  });
});

describe('Duration comments spanning line breaks', () => {
  test('[D\nH] D H', () => {
    expect(new Duration(90061001).toDays().format('[D\nH] D H')).toBe('D\nH 1 1');
  });
});
