import { describe, expect, test } from 'vitest';
import { format, parse } from '../../src/index.ts';
import { parser } from '../../src/plugins/day-of-week.ts';

import lo from '../../src/locales/ru.ts';

const locale = {
  MMMM: [
    ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
    ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  ],
  MMM: [
    ['янв.', 'февр.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'],
    ['янв.', 'февр.', 'мар.', 'апр.', 'мая', 'июн.', 'июл.', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.']
  ],
  dddd: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
  ddd: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
  dd: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  A: ['AM', 'PM'],
  AA: ['A.M.', 'P.M.'],
  a: ['am', 'pm'],
  aa: ['a.m.', 'p.m.']
};

describe('formatter', () => {
  test('MMMM', () => {
    locale.MMMM[0].forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(format(d, 'MMMM', { locale: lo })).toBe(v);
    });
  });

  test('MMMM D', () => {
    locale.MMMM[1].forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(format(d, 'MMMM D', { locale: lo })).toBe(`${v} 1`);
    });
  });

  test('MMM', () => {
    locale.MMM[0].forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(format(d, 'MMM', { locale: lo })).toBe(v);
    });
  });

  test('MMM D', () => {
    locale.MMM[1].forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(format(d, 'MMM D', { locale: lo })).toBe(`${v} 1`);
    });
  });

  test('dddd', () => {
    locale.dddd.forEach((v, i) => {
      const d = new Date(1970, 0, i + 4);
      expect(format(d, 'dddd', { locale: lo })).toBe(v);
    });
  });

  test('ddd', () => {
    locale.ddd.forEach((v, i) => {
      const d = new Date(1970, 0, i + 4);
      expect(format(d, 'ddd', { locale: lo })).toBe(v);
    });
  });

  test('dd', () => {
    locale.dd.forEach((v, i) => {
      const d = new Date(1970, 0, i + 4);
      expect(format(d, 'dd', { locale: lo })).toBe(v);
    });
  });

  test('A', () => {
    locale.A.forEach((v, i) => {
      const d = new Date(1970, 0, 1, i * 12);
      expect(format(d, 'A', { locale: lo })).toBe(v);
    });
  });

  test('AA', () => {
    locale.AA.forEach((v, i) => {
      const d = new Date(1970, 0, 1, i * 12);
      expect(format(d, 'AA', { locale: lo })).toBe(v);
    });
  });

  test('a', () => {
    locale.a.forEach((v, i) => {
      const d = new Date(1970, 0, 1, i * 12);
      expect(format(d, 'a', { locale: lo })).toBe(v);
    });
  });

  test('aa', () => {
    locale.aa.forEach((v, i) => {
      const d = new Date(1970, 0, 1, i * 12);
      expect(format(d, 'aa', { locale: lo })).toBe(v);
    });
  });
});

describe('parser', () => {
  test('MMMM', () => {
    locale.MMMM[0].forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(parse(v, 'MMMM', { locale: lo })).toEqual(d);
    });
  });

  test('MMMM ignoreCase', () => {
    locale.MMMM[0].forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(parse(v, 'MMMM', { locale: lo, ignoreCase: true })).toEqual(d);
    });
  });

  test('MMMM D', () => {
    locale.MMMM[1].forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(parse(`${v} 1`, 'MMMM D', { locale: lo })).toEqual(d);
    });
  });

  test('MMMM D ignoreCase', () => {
    locale.MMMM[1].forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(parse(`${v} 1`, 'MMMM D', { locale: lo, ignoreCase: true })).toEqual(d);
    });
  });

  test('MMM', () => {
    locale.MMM[0].forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(parse(v, 'MMM', { locale: lo })).toEqual(d);
    });
  });

  test('MMM ignoreCase', () => {
    locale.MMM[0].forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(parse(v, 'MMM', { locale: lo, ignoreCase: true })).toEqual(d);
    });
  });

  test('MMM D', () => {
    locale.MMM[1].forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(parse(`${v} 1`, 'MMM D', { locale: lo })).toEqual(d);
    });
  });

  test('MMM D ignoreCase', () => {
    locale.MMM[1].forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(parse(`${v} 1`, 'MMM D', { locale: lo, ignoreCase: true })).toEqual(d);
    });
  });

  test('dddd', () => {
    locale.dddd.forEach(v => {
      const d = new Date(1970, 0, 1);
      expect(parse(v, 'dddd', { locale: lo, plugins: [parser] })).toEqual(d);
    });
  });

  test('dddd ignoreCase', () => {
    locale.dddd.forEach(v => {
      const d = new Date(1970, 0, 1);
      expect(parse(v, 'dddd', { locale: lo, plugins: [parser], ignoreCase: true })).toEqual(d);
    });
  });

  test('ddd', () => {
    locale.ddd.forEach(v => {
      const d = new Date(1970, 0, 1);
      expect(parse(v, 'ddd', { locale: lo, plugins: [parser] })).toEqual(d);
    });
  });

  test('ddd ignoreCase', () => {
    locale.ddd.forEach(v => {
      const d = new Date(1970, 0, 1);
      expect(parse(v, 'ddd', { locale: lo, plugins: [parser], ignoreCase: true })).toEqual(d);
    });
  });

  test('dd', () => {
    locale.dd.forEach(v => {
      const d = new Date(1970, 0, 1);
      expect(parse(v, 'dd', { locale: lo, plugins: [parser] })).toEqual(d);
    });
  });

  test('dd ignoreCase', () => {
    locale.dd.forEach(v => {
      const d = new Date(1970, 0, 1);
      expect(parse(v, 'dd', { locale: lo, plugins: [parser], ignoreCase: true })).toEqual(d);
    });
  });

  test('A', () => {
    locale.A.forEach((v, i) => {
      const d = new Date(1970, 0, 1, i * 12);
      expect(parse(v, 'A', { locale: lo })).toEqual(d);
    });
  });

  test('A ignoreCase', () => {
    locale.A.forEach((v, i) => {
      const d = new Date(1970, 0, 1, i * 12);
      expect(parse(v, 'A', { locale: lo, ignoreCase: true })).toEqual(d);
    });
  });

  test('AA', () => {
    locale.AA.forEach((v, i) => {
      const d = new Date(1970, 0, 1, i * 12);
      expect(parse(v, 'AA', { locale: lo })).toEqual(d);
    });
  });

  test('AA ignoreCase', () => {
    locale.AA.forEach((v, i) => {
      const d = new Date(1970, 0, 1, i * 12);
      expect(parse(v, 'AA', { locale: lo, ignoreCase: true })).toEqual(d);
    });
  });

  test('a', () => {
    locale.a.forEach((v, i) => {
      const d = new Date(1970, 0, 1, i * 12);
      expect(parse(v, 'a', { locale: lo })).toEqual(d);
    });
  });

  test('a ignoreCase', () => {
    locale.a.forEach((v, i) => {
      const d = new Date(1970, 0, 1, i * 12);
      expect(parse(v, 'a', { locale: lo, ignoreCase: true })).toEqual(d);
    });
  });

  test('aa', () => {
    locale.aa.forEach((v, i) => {
      const d = new Date(1970, 0, 1, i * 12);
      expect(parse(v, 'aa', { locale: lo })).toEqual(d);
    });
  });

  test('aa ignoreCase', () => {
    locale.aa.forEach((v, i) => {
      const d = new Date(1970, 0, 1, i * 12);
      expect(parse(v, 'aa', { locale: lo, ignoreCase: true })).toEqual(d);
    });
  });
});
