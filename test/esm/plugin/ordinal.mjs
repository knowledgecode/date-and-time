/*global describe, before, it */
import date from 'date-and-time';
import ordinal from 'date-and-time/plugin/ordinal';

import expect from 'expect.js';

describe('ordinal number', () => {
    before(() => date.plugin(ordinal));

    it('Jan. XX, 2019', () => {
        for (let i = 1, d, now; i <= 31; i++) {
            now = new Date(2019, 0, i, 12, 34, 56, 789);
            switch (i) {
            case 1:
            case 21:
            case 31:
                d = i + 'st';
                break;
            case 2:
            case 22:
                d = i + 'nd';
                break;
            case 3:
            case 23:
                d = i + 'rd';
                break;
            default:
                d = i + 'th';
                break;
            }
            expect(date.format(now, 'MMM. DDD, YYYY')).to.equal('Jan. ' + d + ', 2019');
        }
    });
});
