/*global expect */
import date from '../../../../esm/date-and-time.es.js';
import en from '../../../../esm/locale/en.es.js';
import ja from '../../../../esm/locale/ja.es.js';

const MMMM = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
const MMM = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
const dddd = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
const ddd = ['日', '月', '火', '水', '木', '金', '土'];
const dd = ['日', '月', '火', '水', '木', '金', '土'];
const A = [
    '午前', '午前', '午前', '午前', '午前', '午前', '午前', '午前', '午前', '午前', '午前', '午前',
    '午後', '午後', '午後', '午後', '午後', '午後', '午後', '午後', '午後', '午後', '午後', '午後'
];

describe('format with "ja"', () => {
    before(() => date.locale(ja));

    MMMM.forEach((m, i) => {
        it('"MMMM" equals to "' + m + '"', () => {
            const now = new Date(2015, i, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MMMM')).to.equal(m);
        });
    });
    MMM.forEach((m, i) => {
        it('"MMM" equals to "' + m + '"', () => {
            const now = new Date(2015, i, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MMM')).to.equal(m);
        });
    });
    dddd.forEach((d, i) => {
        it('"dddd" equals to "' + d + '"', () => {
            const now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
            expect(date.format(now, 'dddd')).to.equal(d);
        });
    });
    ddd.forEach((d, i) => {
        it('"ddd" equals to "' + d + '"', () => {
            const now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
            expect(date.format(now, 'ddd')).to.equal(d);
        });
    });
    dd.forEach((d, i) => {
        it('"dd" equals to "' + d + '"', () => {
            const now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
            expect(date.format(now, 'dd')).to.equal(d);
        });
    });
    A.forEach((a, i) => {
        it('"A" equals to "' + a + '"', () => {
            const now = new Date(2016, 0, 1, i, 34, 56, 789);
            expect(date.format(now, 'A')).to.equal(a);
        });
    });
    it('"hh" equals to "00"', () => {
        const now = new Date(2015, 0, 1, 0, 34, 56, 789);
        expect(date.format(now, 'hh')).to.equal('00');
    });
    it('"hh" equals to "00"', () => {
        const now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'hh')).to.equal('00');
    });
    it('"hh" equals to "11"', () => {
        const now = new Date(2015, 0, 1, 23, 34, 56, 789);
        expect(date.format(now, 'hh')).to.equal('11');
    });
    it('"h" equals to "0"', () => {
        const now = new Date(2015, 0, 1, 0, 34, 56, 789);
        expect(date.format(now, 'h')).to.equal('0');
    });
    it('"h" equals to "0"', () => {
        const now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'h')).to.equal('0');
    });
    it('"h" equals to "11"', () => {
        const now = new Date(2015, 0, 1, 23, 34, 56, 789);
        expect(date.format(now, 'h')).to.equal('11');
    });

    after(() => date.locale(en));
});

describe('parse with "ja"', () => {
    before(() => date.locale(ja));

    MMMM.forEach((m, i) => {
        it('"MMMM"', () => {
            const now = new Date(1970, i, 1);
            expect(date.parse(m, 'MMMM')).to.eql(now);
        });
    });
    MMM.forEach((m, i) => {
        it('"MMM"', () => {
            const now = new Date(1970, i, 1);
            expect(date.parse(m, 'MMM')).to.eql(now);
        });
    });
    A.forEach((a, i) => {
        it('h A', () => {
            const now = new Date(1970, 0, 1, i);
            expect(date.parse((i > 11 ? i - 12 : i) + ' ' + a, 'h A')).to.eql(now);
        });
    });

    after(() => date.locale(en));
});
