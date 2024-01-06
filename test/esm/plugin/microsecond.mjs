/*global describe, before, it */
import date from 'date-and-time';
import microsecond from 'date-and-time/plugin/microsecond';

import expect from 'expect.js';

describe('microsecond', () => {
    before(() => date.plugin(microsecond));

    it('SSSS', () => {
        const now = new Date(1970, 0, 1, 0, 0, 0, 123);
        expect(date.parse('0.1234', '0.SSSS')).to.eql(now);
    });
    it('SSSSS', () => {
        const now = new Date(1970, 0, 1, 0, 0, 0, 12);
        expect(date.parse('0.01234', '0.SSSSS')).to.eql(now);
    });
    it('SSSSSS', () => {
        const now = new Date(1970, 0, 1, 0, 0, 0, 1);
        expect(date.parse('0.001234', '0.SSSSSS')).to.eql(now);
    });
});
