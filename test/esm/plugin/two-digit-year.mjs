import date from '../../../esm/date-and-time.mjs';
import two_digit_year from '../../../esm/plugin/two-digit-year.mjs';

import expect from 'expect.js';

describe('compile (two-digit-year)', () => {
    before(() => date.plugin(two_digit_year));

    it('YY', () => {
        const obj = ['YY', 'YY'];
        expect(date.compile('YY')).to.eql(obj);
    });
    it('Y', () => {
        const obj = ['Y', 'Y'];
        expect(date.compile('Y')).to.eql(obj);
    });
});

describe('preparse (two-digit-year)', () => {
    before(() => date.plugin(two_digit_year));

    it('YY-1', () => {
        const dt = { Y: 2000, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
        expect(date.preparse('00', 'YY')).to.eql(dt);
    });
    it('YY-2', () => {
        const dt = { Y: 2001, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
        expect(date.preparse('01', 'YY')).to.eql(dt);
    });
    it('YY-3', () => {
        const dt = { Y: 2010, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
        expect(date.preparse('10', 'YY')).to.eql(dt);
    });
    it('YY-4', () => {
        const dt = { Y: 2069, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
        expect(date.preparse('69', 'YY')).to.eql(dt);
    });
    it('YY-5', () => {
        const dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
        expect(date.preparse('70', 'YY')).to.eql(dt);
    });
    it('YY-6', () => {
        const dt = { Y: 1999, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
        expect(date.preparse('99', 'YY')).to.eql(dt);
    });
    it('Y-1', () => {
        const dt = { Y: 2000, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
        expect(date.preparse('00', 'Y')).to.eql(dt);
    });
    it('Y-2', () => {
        const dt = { Y: 2001, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
        expect(date.preparse('01', 'Y')).to.eql(dt);
    });
    it('Y-3', () => {
        const dt = { Y: 2010, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
        expect(date.preparse('10', 'Y')).to.eql(dt);
    });
    it('Y-4', () => {
        const dt = { Y: 2069, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
        expect(date.preparse('69', 'Y')).to.eql(dt);
    });
    it('Y-5', () => {
        const dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
        expect(date.preparse('70', 'Y')).to.eql(dt);
    });
    it('Y-6', () => {
        const dt = { Y: 1999, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
        expect(date.preparse('99', 'Y')).to.eql(dt);
    });
    it('Y-7', () => {
        const dt = { Y: 2000, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
        expect(date.preparse('0', 'Y')).to.eql(dt);
    });
    it('Y-8', () => {
        const dt = { Y: 2001, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
        expect(date.preparse('1', 'Y')).to.eql(dt);
    });
});

describe('parse (two-digit-year)', () => {
    before(() => date.plugin(two_digit_year));

    it('YY-1', () => {
        const now = new Date(2000, 0, 1);
        expect(date.parse('00', 'YY')).to.eql(now);
    });
    it('YY-2', () => {
        const now = new Date(2001, 0, 1);
        expect(date.parse('01', 'YY')).to.eql(now);
    });
    it('YY-3', () => {
        const now = new Date(2010, 0, 1);
        expect(date.parse('10', 'YY')).to.eql(now);
    });
    it('YY-4', () => {
        const now = new Date(2069, 0, 1);
        expect(date.parse('69', 'YY')).to.eql(now);
    });
    it('YY-5', () => {
        const now = new Date(1970, 0, 1);
        expect(date.parse('70', 'YY')).to.eql(now);
    });
    it('YY-6', () => {
        const now = new Date(1999, 0, 1);
        expect(date.parse('99', 'YY')).to.eql(now);
    });
    it('Y-1', () => {
        const now = new Date(2000, 0, 1);
        expect(date.parse('00', 'Y')).to.eql(now);
    });
    it('Y-2', () => {
        const now = new Date(2001, 0, 1);
        expect(date.parse('01', 'Y')).to.eql(now);
    });
    it('Y-3', () => {
        const now = new Date(2010, 0, 1);
        expect(date.parse('10', 'Y')).to.eql(now);
    });
    it('Y-4', () => {
        const now = new Date(2069, 0, 1);
        expect(date.parse('69', 'Y')).to.eql(now);
    });
    it('Y-5', () => {
        const now = new Date(1970, 0, 1);
        expect(date.parse('70', 'Y')).to.eql(now);
    });
    it('Y-6', () => {
        const now = new Date(1999, 0, 1);
        expect(date.parse('99', 'Y')).to.eql(now);
    });
    it('Y-7', () => {
        const now = new Date(2000, 0, 1);
        expect(date.parse('0', 'Y')).to.eql(now);
    });
    it('Y-8', () => {
        const now = new Date(2001, 0, 1);
        expect(date.parse('1', 'Y')).to.eql(now);
    });
});
