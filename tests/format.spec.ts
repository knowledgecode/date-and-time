import { describe, expect, test, beforeAll } from 'vitest';
import { format, compile } from '../src/index.ts';
import Los_Angeles from '../src/timezones/America/Los_Angeles.ts';
import Tokyo from '../src/timezones/Asia/Tokyo.ts';

describe('YYYY', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('0001', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'YYYY')).toBe('0001');
  });

  test('9999', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'YYYY')).toBe('9999');
  });
});

describe('YY', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('01', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'YY')).toBe('01');
  });

  test('99', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'YY')).toBe('99');
  });
});

describe('Y', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('1', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'Y')).toBe('1');
  });

  test('9999', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'Y')).toBe('9999');
  });
});

describe('MMMM', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('January', () => {
    const now = new Date(0, 1 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMMM')).toBe('January');
  });

  test('February', () => {
    const now = new Date(0, 2 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMMM')).toBe('February');
  });

  test('March', () => {
    const now = new Date(0, 3 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMMM')).toBe('March');
  });

  test('April', () => {
    const now = new Date(0, 4 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMMM')).toBe('April');
  });

  test('May', () => {
    const now = new Date(0, 5 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMMM')).toBe('May');
  });

  test('June', () => {
    const now = new Date(0, 6 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMMM')).toBe('June');
  });

  test('July', () => {
    const now = new Date(0, 7 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMMM')).toBe('July');
  });

  test('August', () => {
    const now = new Date(0, 8 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMMM')).toBe('August');
  });

  test('September', () => {
    const now = new Date(0, 9 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMMM')).toBe('September');
  });

  test('October', () => {
    const now = new Date(0, 10 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMMM')).toBe('October');
  });

  test('November', () => {
    const now = new Date(0, 11 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMMM')).toBe('November');
  });

  test('December', () => {
    const now = new Date(0, 12 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMMM')).toBe('December');
  });
});

describe('MMM', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('Jan', () => {
    const now = new Date(0, 1 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMM')).toBe('Jan');
  });

  test('Feb', () => {
    const now = new Date(0, 2 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMM')).toBe('Feb');
  });

  test('Mar', () => {
    const now = new Date(0, 3 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMM')).toBe('Mar');
  });

  test('Apr', () => {
    const now = new Date(0, 4 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMM')).toBe('Apr');
  });

  test('May', () => {
    const now = new Date(0, 5 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMM')).toBe('May');
  });

  test('Jun', () => {
    const now = new Date(0, 6 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMM')).toBe('Jun');
  });

  test('Jul', () => {
    const now = new Date(0, 7 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMM')).toBe('Jul');
  });

  test('Aug', () => {
    const now = new Date(0, 8 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMM')).toBe('Aug');
  });

  test('Sep', () => {
    const now = new Date(0, 9 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMM')).toBe('Sep');
  });

  test('Oct', () => {
    const now = new Date(0, 10 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMM')).toBe('Oct');
  });

  test('Nov', () => {
    const now = new Date(0, 11 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMM')).toBe('Nov');
  });

  test('Dec', () => {
    const now = new Date(0, 12 - 1, 1, 0, 0, 0, 0);
    expect(format(now, 'MMM')).toBe('Dec');
  });
});

describe('MM', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('01', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'MM')).toBe('01');
  });

  test('12', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'MM')).toBe('12');
  });
});

describe('M', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('1', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'M')).toBe('1');
  });

  test('12', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'M')).toBe('12');
  });
});

describe('DD', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('01', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'DD')).toBe('01');
  });

  test('31', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'DD')).toBe('31');
  });
});

describe('D', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('1', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'D')).toBe('1');
  });

  test('31', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'D')).toBe('31');
  });
});

describe('dddd', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('Sunday', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 0, 0, 0, 0, 0);
    expect(format(now, 'dddd')).toBe('Sunday');
  });

  test('Monday', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'dddd')).toBe('Monday');
  });

  test('Tuesday', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 2, 0, 0, 0, 0);
    expect(format(now, 'dddd')).toBe('Tuesday');
  });

  test('Wednesday', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 3, 0, 0, 0, 0);
    expect(format(now, 'dddd')).toBe('Wednesday');
  });

  test('Thursday', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 4, 0, 0, 0, 0);
    expect(format(now, 'dddd')).toBe('Thursday');
  });

  test('Friday', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 5, 0, 0, 0, 0);
    expect(format(now, 'dddd')).toBe('Friday');
  });

  test('Saturday', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 6, 0, 0, 0, 0);
    expect(format(now, 'dddd')).toBe('Saturday');
  });
});

describe('ddd', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('Sun', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 0, 0, 0, 0, 0);
    expect(format(now, 'ddd')).toBe('Sun');
  });

  test('Mon', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'ddd')).toBe('Mon');
  });

  test('Tue', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 2, 0, 0, 0, 0);
    expect(format(now, 'ddd')).toBe('Tue');
  });

  test('Wed', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 3, 0, 0, 0, 0);
    expect(format(now, 'ddd')).toBe('Wed');
  });

  test('Thu', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 4, 0, 0, 0, 0);
    expect(format(now, 'ddd')).toBe('Thu');
  });

  test('Fri', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 5, 0, 0, 0, 0);
    expect(format(now, 'ddd')).toBe('Fri');
  });

  test('Sat', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 6, 0, 0, 0, 0);
    expect(format(now, 'ddd')).toBe('Sat');
  });
});

describe('dd', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('Su', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 0, 0, 0, 0, 0);
    expect(format(now, 'dd')).toBe('Su');
  });

  test('Mo', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'dd')).toBe('Mo');
  });

  test('Tu', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 2, 0, 0, 0, 0);
    expect(format(now, 'dd')).toBe('Tu');
  });

  test('We', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 3, 0, 0, 0, 0);
    expect(format(now, 'dd')).toBe('We');
  });

  test('Th', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 4, 0, 0, 0, 0);
    expect(format(now, 'dd')).toBe('Th');
  });

  test('Fr', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 5, 0, 0, 0, 0);
    expect(format(now, 'dd')).toBe('Fr');
  });

  test('Sa', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 6, 0, 0, 0, 0);
    expect(format(now, 'dd')).toBe('Sa');
  });
});

describe('HH', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('00', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'HH', { hour24: 'h23' })).toBe('00');
  });

  test('23', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 23, 0, 0, 0);
    expect(format(now, 'HH', { hour24: 'h23' })).toBe('23');
  });

  test('24', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'HH', { hour24: 'h24' })).toBe('24');
  });
});

describe('H', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('0', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'H', { hour24: 'h23' })).toBe('0');
  });

  test('23', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 23, 0, 0, 0);
    expect(format(now, 'H', { hour24: 'h23' })).toBe('23');
  });

  test('24', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'H', { hour24: 'h24' })).toBe('24');
  });
});

describe('hh', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('00', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'hh', { hour12: 'h11' })).toBe('00');
  });

  test('11', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'hh', { hour12: 'h12' })).toBe('11');
  });

  test('12', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'hh', { hour12: 'h12' })).toBe('12');
  });
});

describe('h', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('0', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'h', { hour12: 'h11' })).toBe('0');
  });

  test('11', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'h', { hour12: 'h12' })).toBe('11');
  });

  test('12', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'h', { hour12: 'h12' })).toBe('12');
  });
});

describe('AA', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('A.M.', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'AA')).toBe('A.M.');
  });

  test('P.M.', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'AA')).toBe('P.M.');
  });
});

describe('A', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('AM', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'A')).toBe('AM');
  });

  test('PM', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'A')).toBe('PM');
  });
});

describe('aa', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('a.m.', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'aa')).toBe('a.m.');
  });

  test('p.m.', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'aa')).toBe('p.m.');
  });
});

describe('a', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('am', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'a')).toBe('am');
  });

  test('pm', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'a')).toBe('pm');
  });
});

describe('mm', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('00', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'mm')).toBe('00');
  });

  test('59', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'mm')).toBe('59');
  });
});

describe('m', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('0', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'm')).toBe('0');
  });

  test('59', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'm')).toBe('59');
  });
});

describe('ss', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('00', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'ss')).toBe('00');
  });

  test('59', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'ss')).toBe('59');
  });
});

describe('s', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('0', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 's')).toBe('0');
  });

  test('59', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 's')).toBe('59');
  });
});

describe('SSS', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('000', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'SSS')).toBe('000');
  });

  test('456', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 456);
    expect(format(now, 'SSS')).toBe('456');
  });

  test('999', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'SSS')).toBe('999');
  });
});

describe('SS', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('00', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'SS')).toBe('00');
  });

  test('45', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 456);
    expect(format(now, 'SS')).toBe('45');
  });

  test('99', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'SS')).toBe('99');
  });
});

describe('S', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('0', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 0);
    expect(format(now, 'S')).toBe('0');
  });

  test('4', () => {
    const now = new Date(0, 0 - (1900 - 1) * 12, 1, 0, 0, 0, 456);
    expect(format(now, 'S')).toBe('4');
  });

  test('9', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'S')).toBe('9');
  });
});

describe('ZZ', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('-08:00', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'ZZ', { timeZone: Los_Angeles })).toBe('-08:00');
  });

  test('+00:00', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'ZZ', { timeZone: 'UTC' })).toBe('+00:00');
  });

  test('+09:00', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'ZZ', { timeZone: Tokyo })).toBe('+09:00');
  });
});

describe('Z', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('-0800', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'Z', { timeZone: Los_Angeles })).toBe('-0800');
  });

  test('+0000', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'Z', { timeZone: 'UTC' })).toBe('+0000');
  });

  test('+0900', () => {
    const now = new Date(9999, 12 - 1, 31, 23, 59, 59, 999);
    expect(format(now, 'Z', { timeZone: Tokyo })).toBe('+0900');
  });
});

describe('comments', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('dddd, MMMM D, YYYY h A', () => {
    const now = new Date(2000, 1 - 1, 1, 0, 0, 0);
    expect(format(now, '[dddd, MMMM D, YYYY h A]')).toBe('dddd, MMMM D, YYYY h A');
  });

  test('dddd, January D, 2000 h AM', () => {
    const now = new Date(2000, 1 - 1, 1, 0, 0, 0);
    expect(format(now, '[dddd], MMMM [D], YYYY [h] A')).toBe('dddd, January D, 2000 h AM');
  });

  test('[dddd], MMMM [D], YYYY [h] A', () => {
    const now = new Date(2000, 1 - 1, 1, 0, 0, 0);
    expect(format(now, '[[dddd], MMMM [D], YYYY [h] A]')).toBe('[dddd], MMMM [D], YYYY [h] A');
  });

  test('dddd, January [D], YYYY 12 A', () => {
    const now = new Date(2000, 1 - 1, 1, 0, 0, 0);
    expect(format(now, '[dddd], MMMM [[D], YYYY] h [A]')).toBe('dddd, January [D], YYYY 12 A');
  });
});

describe('compiledObj', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('"ddd MMM DD YYYY HH:mm:ss" equals to "Thu Jan 01 2015 12:34:56"', () => {
    const now = new Date(2015, 0, 1, 12, 34, 56, 789);
    expect(format(now, compile('ddd MMM DD YYYY HH:mm:ss'))).toBe('Thu Jan 01 2015 12:34:56');
  });

  test('"YYYY/MM/DD HH:mm:ss.SSS" equals to "1900/01/01 00:00:00.000"', () => {
    const now = new Date(0, 0, 1);
    expect(format(now, compile('YYYY/MM/DD HH:mm:ss.SSS'))).toBe('1900/01/01 00:00:00.000');
  });

  test('"YY/MM/DD HH:mm:ss.SSS" equals to "00/01/01 00:00:00.000"', () => {
    const now = new Date(0, 0, 1);
    expect(format(now, compile('YY/MM/DD HH:mm:ss.SSS'))).toBe('00/01/01 00:00:00.000');
  });

  test('"Y/M/D H:m:s.SSS" equals to "999/1/1 0:0:0.000"', () => {
    const now = new Date(999, 0, 1);
    expect(format(now, compile('Y/M/D H:m:s.SSS'))).toBe('999/1/1 0:0:0.000');
  });

  test('"dddd, MMMM D, YYYY h A" equals to "Saturday, January 1, 2000 10 AM"', () => {
    const now = new Date(2000, 0, 1, 10, 0, 0);
    expect(format(now, compile('dddd, MMMM D, YYYY h A'))).toBe('Saturday, January 1, 2000 10 AM');
  });

  test('"[dddd, MMMM D, YYYY h A]" equals to "dddd, MMMM D, YYYY h A"', () => {
    const now = new Date(2000, 0, 1, 10, 0, 0);
    expect(format(now, compile('[dddd, MMMM D, YYYY h A]'))).toBe('dddd, MMMM D, YYYY h A');
  });

  test('"[dddd], MMMM [D], YYYY [h] A" equals to "dddd, January D, 2000 h AM"', () => {
    const now = new Date(2000, 0, 1, 10, 0, 0);
    expect(format(now, compile('[dddd], MMMM [D], YYYY [h] A'))).toBe('dddd, January D, 2000 h AM');
  });

  test('"[[dddd], MMMM [D], YYYY [h] A]" equals to "[dddd], MMMM [D], YYYY [h] A"', () => {
    const now = new Date(2000, 0, 1, 10, 0, 0);
    expect(format(now, compile('[[dddd], MMMM [D], YYYY [h] A]'))).toBe('[dddd], MMMM [D], YYYY [h] A');
  });

  test('"[dddd], MMMM [[D], YYYY] [h] A" equals to "dddd, January [D], YYYY h AM"', () => {
    const now = new Date(2000, 0, 1, 10, 0, 0);
    expect(format(now, compile('[dddd], MMMM [[D], YYYY] [h] A'))).toBe('dddd, January [D], YYYY h AM');
  });
});

describe('options', () => {
  beforeAll(() => (process.env.TZ = 'UTC'));

  test('hour12: h11', () => {
    expect(format(new Date(2000, 1 - 1, 1, 0, 0, 0), 'h A', { hour12: 'h11' })).toBe('0 AM');
    expect(format(new Date(2000, 1 - 1, 1, 11, 0, 0), 'h A', { hour12: 'h11' })).toBe('11 AM');
    expect(format(new Date(2000, 1 - 1, 1, 12, 0, 0), 'h A', { hour12: 'h11' })).toBe('0 PM');
    expect(format(new Date(2000, 1 - 1, 1, 23, 0, 0), 'h A', { hour12: 'h11' })).toBe('11 PM');
  });

  test('hour12: h12', () => {
    expect(format(new Date(2000, 1 - 1, 1, 0, 0, 0), 'h A', { hour12: 'h12' })).toBe('12 AM');
    expect(format(new Date(2000, 1 - 1, 1, 11, 0, 0), 'h A', { hour12: 'h12' })).toBe('11 AM');
    expect(format(new Date(2000, 1 - 1, 1, 12, 0, 0), 'h A', { hour12: 'h12' })).toBe('12 PM');
    expect(format(new Date(2000, 1 - 1, 1, 23, 0, 0), 'h A', { hour12: 'h12' })).toBe('11 PM');
  });

  test('hour24: h23', () => {
    expect(format(new Date(2000, 1 - 1, 1, 0, 0, 0), 'H', { hour24: 'h23' })).toBe('0');
    expect(format(new Date(2000, 1 - 1, 1, 11, 0, 0), 'H', { hour24: 'h23' })).toBe('11');
    expect(format(new Date(2000, 1 - 1, 1, 12, 0, 0), 'H', { hour24: 'h23' })).toBe('12');
    expect(format(new Date(2000, 1 - 1, 1, 23, 0, 0), 'H', { hour24: 'h23' })).toBe('23');
  });

  test('hour24: h24', () => {
    expect(format(new Date(2000, 1 - 1, 1, 0, 0, 0), 'H', { hour24: 'h24' })).toBe('24');
    expect(format(new Date(2000, 1 - 1, 1, 11, 0, 0), 'H', { hour24: 'h24' })).toBe('11');
    expect(format(new Date(2000, 1 - 1, 1, 12, 0, 0), 'H', { hour24: 'h24' })).toBe('12');
    expect(format(new Date(2000, 1 - 1, 1, 23, 0, 0), 'H', { hour24: 'h24' })).toBe('23');
  });

  test('calendar: buddhist', () => {
    expect(format(new Date(1, 0 - (1900 + 543) * 12, 1, 0, 0, 0), 'YYYY-MM-DD HH', { calendar: 'buddhist' })).toBe('0001-01-01 00');
    expect(format(new Date(1, 0 - 1900 * 12, 1, 0, 0, 0), 'YYYY-MM-DD HH', { calendar: 'buddhist' })).toBe('0544-01-01 00');
    expect(format(new Date(9456, 1 - 1, 1, 0, 0, 0), 'YYYY-MM-DD HH', { calendar: 'buddhist' })).toBe('9999-01-01 00');

    expect(format(new Date(1, 0 - (1900 + 543) * 12, 1, 0, 0, 0), 'YY-MM-DD HH', { calendar: 'buddhist' })).toBe('01-01-01 00');
    expect(format(new Date(1, 0 - 1900 * 12, 1, 0, 0, 0), 'YY-MM-DD HH', { calendar: 'buddhist' })).toBe('44-01-01 00');
    expect(format(new Date(9456, 1 - 1, 1, 0, 0, 0), 'YY-MM-DD HH', { calendar: 'buddhist' })).toBe('99-01-01 00');

    expect(format(new Date(1, 0 - (1900 + 543) * 12, 1, 0, 0, 0), 'Y-MM-DD HH', { calendar: 'buddhist' })).toBe('1-01-01 00');
    expect(format(new Date(1, 0 - 1900 * 12, 1, 0, 0, 0), 'Y-MM-DD HH', { calendar: 'buddhist' })).toBe('544-01-01 00');
    expect(format(new Date(9456, 1 - 1, 1, 0, 0, 0), 'Y-MM-DD HH', { calendar: 'buddhist' })).toBe('9999-01-01 00');
  });

  test('timeZone', () => {
    const now = new Date(2025, 1 - 1, 1, 0);
    expect(format(now, 'YYYY-MM-DD HH:mm:ss.SSS Z dd', { timeZone: Los_Angeles })).toBe('2024-12-31 16:00:00.000 -0800 Tu');
    expect(format(now, 'YYYY-MM-DD HH:mm:ss.SSS Z dd', { timeZone: Tokyo })).toBe('2025-01-01 09:00:00.000 +0900 We');
    expect(format(now, 'YYYY-MM-DD HH:mm:ss.SSS Z dd', { timeZone: 'UTC' })).toBe('2025-01-01 00:00:00.000 +0000 We');
  });
});

describe('timeZone DST', () => {
  beforeAll(() => (process.env.TZ = 'America/Los_Angeles'));

  test('before DST', () => {
    const dateObj = new Date(2021, 2, 14, 1, 59, 59, 999);
    const dateString = '2021-03-14 01:59:59.999 UTC-0800';
    expect(format(dateObj, 'YYYY-MM-DD HH:mm:ss.SSS [UTC]Z')).toBe(dateString);
  });

  test('start of DST', () => {
    const dateObj = new Date(2021, 2, 14, 2, 0, 0, 0);
    const dateString = '2021-03-14 03:00:00.000 UTC-0700';
    expect(format(dateObj, 'YYYY-MM-DD HH:mm:ss.SSS [UTC]Z')).toBe(dateString);
  });

  test('before of PST', () => {
    const dateObj = new Date(2021, 10, 7, 1, 59, 59, 999);
    const dateString = '2021-11-07 01:59:59.999 UTC-0700';
    expect(format(dateObj, 'YYYY-MM-DD HH:mm:ss.SSS [UTC]Z')).toBe(dateString);
  });

  test('end of DST', () => {
    const dateObj = new Date(2021, 10, 7, 2, 0, 0, 0);
    const dateString = '2021-11-07 02:00:00.000 UTC-0800';
    expect(format(dateObj, 'YYYY-MM-DD HH:mm:ss.SSS [UTC]Z')).toBe(dateString);
  });

  test('after of DST', () => {
    const dateObj = new Date(2021, 10, 7, 3, 0, 0, 0);
    const dateString = '2021-11-07 03:00:00.000 UTC-0800';
    expect(format(dateObj, 'YYYY-MM-DD HH:mm:ss.SSS [UTC]Z')).toBe(dateString);
  });
});
