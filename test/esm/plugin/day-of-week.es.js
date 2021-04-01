/*global expect */
import date from '../../../../esm/date-and-time.es.js';
import day_of_week from '../../../../esm/plugin/day-of-week.es.js';

describe('day of week', () => {
    before(() => date.plugin(day_of_week));

    it('dd', () => {
        const now = new Date(1970, 0, 1, 0, 0, 0, 0);
        expect(date.parse('Fr', 'dd')).to.eql(now);
    });
    it('ddd', () => {
        const now = new Date(1970, 0, 1, 0, 0, 0, 0);
        expect(date.parse('Fri', 'ddd')).to.eql(now);
    });
    it('dddd', () => {
        const now = new Date(1970, 0, 1, 0, 0, 0, 0);
        expect(date.parse('Friday', 'dddd')).to.eql(now);
    });
});
