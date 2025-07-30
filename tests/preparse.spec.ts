import { describe, expect, test, beforeAll } from 'vitest';
import { preparse } from '../src/index.ts';
import { parser } from '../src/plugins/day-of-week.ts';

beforeAll(() => (process.env.TZ = 'UTC'));

describe('YYYY', () => {
  test('0000', () => {
    const dt = { Y: 0, _index: 4, _length: 4, _match: 1 };
    expect(preparse('0000', 'YYYY')).toEqual(dt);
  });

  test('0001', () => {
    const dt = { Y: 1, _index: 4, _length: 4, _match: 1 };
    expect(preparse('0001', 'YYYY')).toEqual(dt);
  });

  test('0099', () => {
    const dt = { Y: 99, _index: 4, _length: 4, _match: 1 };
    expect(preparse('0099', 'YYYY')).toEqual(dt);
  });

  test('0100', () => {
    const dt = { Y: 100, _index: 4, _length: 4, _match: 1 };
    expect(preparse('0100', 'YYYY')).toEqual(dt);
  });

  test('1899', () => {
    const dt = { Y: 1899, _index: 4, _length: 4, _match: 1 };
    expect(preparse('1899', 'YYYY')).toEqual(dt);
  });

  test('1900', () => {
    const dt = { Y: 1900, _index: 4, _length: 4, _match: 1 };
    expect(preparse('1900', 'YYYY')).toEqual(dt);
  });

  test('1969', () => {
    const dt = { Y: 1969, _index: 4, _length: 4, _match: 1 };
    expect(preparse('1969', 'YYYY')).toEqual(dt);
  });

  test('1970', () => {
    const dt = { Y: 1970, _index: 4, _length: 4, _match: 1 };
    expect(preparse('1970', 'YYYY')).toEqual(dt);
  });

  test('1999', () => {
    const dt = { Y: 1999, _index: 4, _length: 4, _match: 1 };
    expect(preparse('1999', 'YYYY')).toEqual(dt);
  });

  test('2000', () => {
    const dt = { Y: 2000, _index: 4, _length: 4, _match: 1 };
    expect(preparse('2000', 'YYYY')).toEqual(dt);
  });

  test('9999', () => {
    const dt = { Y: 9999, _index: 4, _length: 4, _match: 1 };
    expect(preparse('9999', 'YYYY')).toEqual(dt);
  });
});

describe('Y', () => {
  test('0', () => {
    const dt = { Y: 0, _index: 1, _length: 1, _match: 1 };
    expect(preparse('0', 'Y')).toEqual(dt);
  });

  test('1', () => {
    const dt = { Y: 1, _index: 1, _length: 1, _match: 1 };
    expect(preparse('1', 'Y')).toEqual(dt);
  });

  test('99', () => {
    const dt = { Y: 99, _index: 2, _length: 2, _match: 1 };
    expect(preparse('99', 'Y')).toEqual(dt);
  });

  test('100', () => {
    const dt = { Y: 100, _index: 3, _length: 3, _match: 1 };
    expect(preparse('100', 'Y')).toEqual(dt);
  });

  test('1899', () => {
    const dt = { Y: 1899, _index: 4, _length: 4, _match: 1 };
    expect(preparse('1899', 'Y')).toEqual(dt);
  });

  test('1900', () => {
    const dt = { Y: 1900, _index: 4, _length: 4, _match: 1 };
    expect(preparse('1900', 'Y')).toEqual(dt);
  });

  test('1969', () => {
    const dt = { Y: 1969, _index: 4, _length: 4, _match: 1 };
    expect(preparse('1969', 'Y')).toEqual(dt);
  });

  test('1970', () => {
    const dt = { Y: 1970, _index: 4, _length: 4, _match: 1 };
    expect(preparse('1970', 'Y')).toEqual(dt);
  });

  test('1999', () => {
    const dt = { Y: 1999, _index: 4, _length: 4, _match: 1 };
    expect(preparse('1999', 'Y')).toEqual(dt);
  });

  test('2000', () => {
    const dt = { Y: 2000, _index: 4, _length: 4, _match: 1 };
    expect(preparse('2000', 'Y')).toEqual(dt);
  });

  test('9999', () => {
    const dt = { Y: 9999, _index: 4, _length: 4, _match: 1 };
    expect(preparse('9999', 'Y')).toEqual(dt);
  });
});

describe('MMMM', () => {
  test('January', () => {
    const dt = { M: 1, _index: 7, _length: 7, _match: 1 };
    expect(preparse('January', 'MMMM')).toEqual(dt);
  });

  test('December', () => {
    const dt = { M: 12, _index: 8, _length: 8, _match: 1 };
    expect(preparse('December', 'MMMM')).toEqual(dt);
  });

  test('Zero', () => {
    const dt = { _index: 0, _length: 4, _match: 0 };
    expect(preparse('Zero', 'MMMM')).toEqual(dt);
  });
});

describe('MMM', () => {
  test('January', () => {
    const dt = { M: 1, _index: 3, _length: 3, _match: 1 };
    expect(preparse('Jan', 'MMM')).toEqual(dt);
  });

  test('December', () => {
    const dt = { M: 12, _index: 3, _length: 3, _match: 1 };
    expect(preparse('Dec', 'MMM')).toEqual(dt);
  });

  test('Zero', () => {
    const dt = { _index: 0, _length: 4, _match: 0 };
    expect(preparse('Zero', 'MMM')).toEqual(dt);
  });
});

describe('MM', () => {
  test('01', () => {
    const dt = { M: 1, _index: 2, _length: 2, _match: 1 };
    expect(preparse('01', 'MM')).toEqual(dt);
  });

  test('12', () => {
    const dt = { M: 12, _index: 2, _length: 2, _match: 1 };
    expect(preparse('12', 'MM')).toEqual(dt);
  });

  test('00', () => {
    const dt = { M: 0, _index: 2, _length: 2, _match: 1 };
    expect(preparse('00', 'MM')).toEqual(dt);
  });
});

describe('M', () => {
  test('1', () => {
    const dt = { M: 1, _index: 1, _length: 1, _match: 1 };
    expect(preparse('1', 'M')).toEqual(dt);
  });

  test('12', () => {
    const dt = { M: 12, _index: 2, _length: 2, _match: 1 };
    expect(preparse('12', 'M')).toEqual(dt);
  });

  test('0', () => {
    const dt = { M: 0, _index: 1, _length: 1, _match: 1 };
    expect(preparse('0', 'M')).toEqual(dt);
  });
});

describe('DD', () => {
  test('01', () => {
    const dt = { D: 1, _index: 2, _length: 2, _match: 1 };
    expect(preparse('01', 'DD')).toEqual(dt);
  });

  test('31', () => {
    const dt = { D: 31, _index: 2, _length: 2, _match: 1 };
    expect(preparse('31', 'DD')).toEqual(dt);
  });

  test('00', () => {
    const dt = { D: 0, _index: 2, _length: 2, _match: 1 };
    expect(preparse('00', 'DD')).toEqual(dt);
  });
});

describe('D', () => {
  test('1', () => {
    const dt = { D: 1, _index: 1, _length: 1, _match: 1 };
    expect(preparse('1', 'D')).toEqual(dt);
  });

  test('31', () => {
    const dt = { D: 31, _index: 2, _length: 2, _match: 1 };
    expect(preparse('31', 'D')).toEqual(dt);
  });

  test('0', () => {
    const dt = { D: 0, _index: 1, _length: 1, _match: 1 };
    expect(preparse('0', 'D')).toEqual(dt);
  });
});

describe('HH', () => {
  test('00', () => {
    const dt = { H: 0, _index: 2, _length: 2, _match: 1 };
    expect(preparse('00', 'HH')).toEqual(dt);
  });

  test('23', () => {
    const dt = { H: 23, _index: 2, _length: 2, _match: 1 };
    expect(preparse('23', 'HH')).toEqual(dt);
  });

  test('24', () => {
    const dt = { H: 24, _index: 2, _length: 2, _match: 1 };
    expect(preparse('24', 'HH')).toEqual(dt);
  });
});

describe('H', () => {
  test('0', () => {
    const dt = { H: 0, _index: 1, _length: 1, _match: 1 };
    expect(preparse('0', 'H')).toEqual(dt);
  });

  test('23', () => {
    const dt = { H: 23, _index: 2, _length: 2, _match: 1 };
    expect(preparse('23', 'H')).toEqual(dt);
  });

  test('24', () => {
    const dt = { H: 24, _index: 2, _length: 2, _match: 1 };
    expect(preparse('24', 'H')).toEqual(dt);
  });
});

describe('hh', () => {
  test('00', () => {
    const dt = { h: 0, _index: 2, _length: 2, _match: 1 };
    expect(preparse('00', 'hh')).toEqual(dt);
  });

  test('11', () => {
    const dt = { h: 11, _index: 2, _length: 2, _match: 1 };
    expect(preparse('11', 'hh')).toEqual(dt);
  });

  test('12', () => {
    const dt = { h: 12, _index: 2, _length: 2, _match: 1 };
    expect(preparse('12', 'hh')).toEqual(dt);
  });
});

describe('h', () => {
  test('0', () => {
    const dt = { h: 0, _index: 1, _length: 1, _match: 1 };
    expect(preparse('0', 'h')).toEqual(dt);
  });

  test('11', () => {
    const dt = { h: 11, _index: 2, _length: 2, _match: 1 };
    expect(preparse('11', 'h')).toEqual(dt);
  });

  test('12', () => {
    const dt = { h: 12, _index: 2, _length: 2, _match: 1 };
    expect(preparse('12', 'h')).toEqual(dt);
  });
});

describe('AA', () => {
  test('A.M.', () => {
    const dt = { A: 0, _index: 4, _length: 4, _match: 1 };
    expect(preparse('A.M.', 'AA')).toEqual(dt);
  });

  test('P.M.', () => {
    const dt = { A: 1, _index: 4, _length: 4, _match: 1 };
    expect(preparse('P.M.', 'AA')).toEqual(dt);
  });

  test('M.M.', () => {
    const dt = { _index: 0, _length: 4, _match: 0 };
    expect(preparse('M.M.', 'AA')).toEqual(dt);
  });
});

describe('A', () => {
  test('AM', () => {
    const dt = { A: 0, _index: 2, _length: 2, _match: 1 };
    expect(preparse('AM', 'A')).toEqual(dt);
  });

  test('PM', () => {
    const dt = { A: 1, _index: 2, _length: 2, _match: 1 };
    expect(preparse('PM', 'A')).toEqual(dt);
  });

  test('MM', () => {
    const dt = { _index: 0, _length: 2, _match: 0 };
    expect(preparse('MM', 'A')).toEqual(dt);
  });
});

describe('aa', () => {
  test('a.m.', () => {
    const dt = { A: 0, _index: 4, _length: 4, _match: 1 };
    expect(preparse('a.m.', 'aa')).toEqual(dt);
  });

  test('p.m.', () => {
    const dt = { A: 1, _index: 4, _length: 4, _match: 1 };
    expect(preparse('p.m.', 'aa')).toEqual(dt);
  });

  test('m.m.', () => {
    const dt = { _index: 0, _length: 4, _match: 0 };
    expect(preparse('m.m.', 'aa')).toEqual(dt);
  });
});

describe('a', () => {
  test('am', () => {
    const dt = { A: 0, _index: 2, _length: 2, _match: 1 };
    expect(preparse('am', 'a')).toEqual(dt);
  });

  test('pm', () => {
    const dt = { A: 1, _index: 2, _length: 2, _match: 1 };
    expect(preparse('pm', 'a')).toEqual(dt);
  });

  test('mm', () => {
    const dt = { _index: 0, _length: 2, _match: 0 };
    expect(preparse('mm', 'a')).toEqual(dt);
  });
});

describe('mm', () => {
  test('00', () => {
    const dt = { m: 0, _index: 2, _length: 2, _match: 1 };
    expect(preparse('00', 'mm')).toEqual(dt);
  });

  test('59', () => {
    const dt = { m: 59, _index: 2, _length: 2, _match: 1 };
    expect(preparse('59', 'mm')).toEqual(dt);
  });

  test('60', () => {
    const dt = { m: 60, _index: 2, _length: 2, _match: 1 };
    expect(preparse('60', 'mm')).toEqual(dt);
  });
});

describe('m', () => {
  test('0', () => {
    const dt = { m: 0, _index: 1, _length: 1, _match: 1 };
    expect(preparse('0', 'm')).toEqual(dt);
  });

  test('59', () => {
    const dt = { m: 59, _index: 2, _length: 2, _match: 1 };
    expect(preparse('59', 'm')).toEqual(dt);
  });

  test('60', () => {
    const dt = { m: 60, _index: 2, _length: 2, _match: 1 };
    expect(preparse('60', 'm')).toEqual(dt);
  });
});

describe('ss', () => {
  test('00', () => {
    const dt = { s: 0, _index: 2, _length: 2, _match: 1 };
    expect(preparse('00', 'ss')).toEqual(dt);
  });

  test('59', () => {
    const dt = { s: 59, _index: 2, _length: 2, _match: 1 };
    expect(preparse('59', 'ss')).toEqual(dt);
  });

  test('60', () => {
    const dt = { s: 60, _index: 2, _length: 2, _match: 1 };
    expect(preparse('60', 'ss')).toEqual(dt);
  });
});

describe('s', () => {
  test('0', () => {
    const dt = { s: 0, _index: 1, _length: 1, _match: 1 };
    expect(preparse('0', 's')).toEqual(dt);
  });

  test('59', () => {
    const dt = { s: 59, _index: 2, _length: 2, _match: 1 };
    expect(preparse('59', 's')).toEqual(dt);
  });

  test('60', () => {
    const dt = { s: 60, _index: 2, _length: 2, _match: 1 };
    expect(preparse('60', 's')).toEqual(dt);
  });
});

describe('SSS', () => {
  test('000', () => {
    const dt = { S: 0, _index: 3, _length: 3, _match: 1 };
    expect(preparse('000', 'SSS')).toEqual(dt);
  });

  test('456', () => {
    const dt = { S: 456, _index: 3, _length: 3, _match: 1 };
    expect(preparse('456', 'SSS')).toEqual(dt);
  });

  test('999', () => {
    const dt = { S: 999, _index: 3, _length: 3, _match: 1 };
    expect(preparse('999', 'SSS')).toEqual(dt);
  });
});

describe('SS', () => {
  test('000', () => {
    const dt = { S: 0, _index: 2, _length: 3, _match: 1 };
    expect(preparse('000', 'SS')).toEqual(dt);
  });

  test('456', () => {
    const dt = { S: 450, _index: 2, _length: 3, _match: 1 };
    expect(preparse('456', 'SS')).toEqual(dt);
  });

  test('999', () => {
    const dt = { S: 990, _index: 2, _length: 3, _match: 1 };
    expect(preparse('999', 'SS')).toEqual(dt);
  });
});

describe('S', () => {
  test('000', () => {
    const dt = { S: 0, _index: 1, _length: 3, _match: 1 };
    expect(preparse('000', 'S')).toEqual(dt);
  });

  test('456', () => {
    const dt = { S: 400, _index: 1, _length: 3, _match: 1 };
    expect(preparse('456', 'S')).toEqual(dt);
  });

  test('999', () => {
    const dt = { S: 900, _index: 1, _length: 3, _match: 1 };
    expect(preparse('999', 'S')).toEqual(dt);
  });
});

describe('ZZ', () => {
  test('-08:00', () => {
    const dt = { Z: 480, _index: 6, _length: 6, _match: 1 };
    expect(preparse('-08:00', 'ZZ')).toEqual(dt);
  });

  test('+00:00', () => {
    const dt = { Z: 0, _index: 6, _length: 6, _match: 1 };
    expect(preparse('+00:00', 'ZZ')).toEqual(dt);
  });

  test('+09:00', () => {
    const dt = { Z: -540, _index: 6, _length: 6, _match: 1 };
    expect(preparse('+09:00', 'ZZ')).toEqual(dt);
  });
});

describe('Z', () => {
  test('-0800', () => {
    const dt = { Z: 480, _index: 5, _length: 5, _match: 1 };
    expect(preparse('-0800', 'Z')).toEqual(dt);
  });

  test('+0000', () => {
    const dt = { Z: 0, _index: 5, _length: 5, _match: 1 };
    expect(preparse('+0000', 'Z')).toEqual(dt);
  });

  test('+0900', () => {
    const dt = { Z: -540, _index: 5, _length: 5, _match: 1 };
    expect(preparse('+0900', 'Z')).toEqual(dt);
  });
});

describe('special tokens', () => {
  test('ellipsis', () => {
    const dt1 = { Y: 2000, M: 1, D: 1, h: 0, m: 0, _index: 19, _length: 19, _match: 5 };
    expect(preparse('2000-01-01 00:00 xx', 'YYYY-MM-DD hh:mm...')).toEqual(dt1);
  });
});

describe('options', () => {
  test('hour12: h11', () => {
    const dt1 = { Y: 2000, M: 1, D: 1, A: 0, h: 0, m: 0, _index: 19, _length: 19, _match: 6 };
    expect(preparse('2000-01-01 00:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' })).toEqual(dt1);

    const dt2 = { Y: 2000, M: 1, D: 1, A: 0, h: 11, m: 0, _index: 19, _length: 19, _match: 6 };
    expect(preparse('2000-01-01 11:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' })).toEqual(dt2);

    const dt3 = { Y: 2000, M: 1, D: 1, A: 1, h: 12, m: 0, _index: 19, _length: 19, _match: 6 };
    expect(preparse('2000-01-01 12:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' })).toEqual(dt3);

    const dt4 = { Y: 2000, M: 1, D: 1, A: 1, h: 11, m: 0, _index: 19, _length: 19, _match: 6 };
    expect(preparse('2000-01-01 11:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h11' })).toEqual(dt4);
  });

  test('hour12: h12', () => {
    const dt1 = { Y: 2000, M: 1, D: 1, A: 0, h: 12, m: 0, _index: 19, _length: 19, _match: 6 };
    expect(preparse('2000-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' })).toEqual(dt1);

    const dt2 = { Y: 2000, M: 1, D: 1, A: 0, h: 11, m: 0, _index: 19, _length: 19, _match: 6 };
    expect(preparse('2000-01-01 11:00 AM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' })).toEqual(dt2);

    const dt3 = { Y: 2000, M: 1, D: 1, A: 1, h: 12, m: 0, _index: 19, _length: 19, _match: 6 };
    expect(preparse('2000-01-01 12:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' })).toEqual(dt3);

    const dt4 = { Y: 2000, M: 1, D: 1, A: 1, h: 11, m: 0, _index: 19, _length: 19, _match: 6 };
    expect(preparse('2000-01-01 11:00 PM', 'YYYY-MM-DD hh:mm A', { hour12: 'h12' })).toEqual(dt4);
  });

  test('hour24: h23', () => {
    const dt1 = { Y: 2000, M: 1, D: 1, H: 0, m: 0, _index: 16, _length: 16, _match: 5 };
    expect(preparse('2000-01-01 00:00', 'YYYY-MM-DD HH:mm', { hour24: 'h23' })).toEqual(dt1);

    const dt2 = { Y: 2000, M: 1, D: 1, H: 1, m: 0, _index: 16, _length: 16, _match: 5 };
    expect(preparse('2000-01-01 01:00', 'YYYY-MM-DD HH:mm', { hour24: 'h23' })).toEqual(dt2);

    const dt3 = { Y: 2000, M: 1, D: 1, H: 23, m: 0, _index: 16, _length: 16, _match: 5 };
    expect(preparse('2000-01-01 23:00', 'YYYY-MM-DD HH:mm', { hour24: 'h23' })).toEqual(dt3);

    const dt4 = { Y: 2000, M: 1, D: 1, H: 24, m: 0, _index: 16, _length: 16, _match: 5 };
    expect(preparse('2000-01-01 24:00', 'YYYY-MM-DD HH:mm', { hour24: 'h23' })).toEqual(dt4);
  });

  test('hour24: h24', () => {
    const dt1 = { Y: 2000, M: 1, D: 1, H: 0, m: 0, _index: 16, _length: 16, _match: 5 };
    expect(preparse('2000-01-01 00:00', 'YYYY-MM-DD HH:mm', { hour24: 'h24' })).toEqual(dt1);

    const dt2 = { Y: 2000, M: 1, D: 1, H: 1, m: 0, _index: 16, _length: 16, _match: 5 };
    expect(preparse('2000-01-01 01:00', 'YYYY-MM-DD HH:mm', { hour24: 'h24' })).toEqual(dt2);

    const dt3 = { Y: 2000, M: 1, D: 1, H: 23, m: 0, _index: 16, _length: 16, _match: 5 };
    expect(preparse('2000-01-01 23:00', 'YYYY-MM-DD HH:mm', { hour24: 'h24' })).toEqual(dt3);

    const dt4 = { Y: 2000, M: 1, D: 1, H: 24, m: 0, _index: 16, _length: 16, _match: 5 };
    expect(preparse('2000-01-01 24:00', 'YYYY-MM-DD HH:mm', { hour24: 'h24' })).toEqual(dt4);
  });

  test('ignoreCase: true', () => {
    const dt = { Y: 2025, M: 5, D: 4, h: 11, A: 0, _index: 23, _length: 23, _match: 6 };

    expect(preparse('2025 May 4 Sunday 11 AM', 'YYYY MMMM D dddd h A', { ignoreCase: true, plugins: [parser] })).toEqual(dt);
    expect(preparse('2025 may 4 sunday 11 am', 'YYYY MMMM D dddd h A', { ignoreCase: true, plugins: [parser] })).toEqual(dt);
    expect(preparse('2025 MAY 4 SUNDAY 11 AM', 'YYYY MMMM D dddd h A', { ignoreCase: true, plugins: [parser] })).toEqual(dt);
  });

  test('calendar: buddhist', () => {
    const dt1 = { Y: 2000, M: 1, D: 1, h: 12, m: 0, A: 0, _index: 19, _length: 19, _match: 6 };
    expect(preparse('2000-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { calendar: 'buddhist' })).toEqual(dt1);

    const dt2 = { Y: 9999, M: 1, D: 1, h: 12, m: 0, A: 0, _index: 19, _length: 19, _match: 6 };
    expect(preparse('9999-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { calendar: 'buddhist' })).toEqual(dt2);

    const dt3 = { Y: 544, M: 1, D: 1, h: 12, m: 0, A: 0, _index: 19, _length: 19, _match: 6 };
    expect(preparse('0544-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { calendar: 'buddhist' })).toEqual(dt3);

    const dt4 = { Y: 543, M: 1, D: 1, h: 12, m: 0, A: 0, _index: 19, _length: 19, _match: 6 };
    expect(preparse('0543-01-01 12:00 AM', 'YYYY-MM-DD hh:mm A', { calendar: 'buddhist' })).toEqual(dt4);
  });
});
