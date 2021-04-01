/*global expect */
import date from '../../../../esm/date-and-time.es.js';
import microsecond from '../../../../esm/plugin/microsecond.es.js';

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
