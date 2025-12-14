import { describe, expect, test } from 'vitest';
import { format, parse } from '@/index.ts';
import { parser } from '@/plugins/day-of-week.ts';

import lo from '@/locales/ta.ts';

const locale = {
  MMMM: ['ஜனவரி', 'பிப்ரவரி', 'மார்ச்', 'ஏப்ரல்', 'மே', 'ஜூன்', 'ஜூலை', 'ஆகஸ்ட்', 'செப்டம்பர்', 'அக்டோபர்', 'நவம்பர்', 'டிசம்பர்'],
  MMM: ['ஜன.', 'பிப்.', 'மார்.', 'ஏப்.', 'மே', 'ஜூன்', 'ஜூலை', 'ஆக.', 'செப்.', 'அக்.', 'நவ.', 'டிச.'],
  dddd: ['ஞாயிறு', 'திங்கள்', 'செவ்வாய்', 'புதன்', 'வியாழன்', 'வெள்ளி', 'சனி'],
  ddd: ['ஞாயி.', 'திங்.', 'செவ்.', 'புத.', 'வியா.', 'வெள்.', 'சனி'],
  dd: ['ஞா', 'தி', 'செ', 'பு', 'வி', 'வெ', 'ச'],
  A: ['AM', 'PM'],
  AA: ['A.M.', 'P.M.'],
  a: ['am', 'pm'],
  aa: ['a.m.', 'p.m.']
};

describe('formatter', () => {
  test('MMMM', () => {
    locale.MMMM.forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(format(d, 'MMMM', { locale: lo })).toBe(v);
    });
  });

  test('MMM', () => {
    locale.MMM.forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(format(d, 'MMM', { locale: lo })).toBe(v);
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
    locale.MMMM.forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(parse(v, 'MMMM', { locale: lo })).toEqual(d);
    });
  });

  test('MMMM ignoreCase', () => {
    locale.MMMM.forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(parse(v, 'MMMM', { locale: lo, ignoreCase: true })).toEqual(d);
    });
  });

  test('MMM', () => {
    locale.MMM.forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(parse(v, 'MMM', { locale: lo })).toEqual(d);
    });
  });

  test('MMM ignoreCase', () => {
    locale.MMM.forEach((v, i) => {
      const d = new Date(1970, i, 1);
      expect(parse(v, 'MMM', { locale: lo, ignoreCase: true })).toEqual(d);
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
