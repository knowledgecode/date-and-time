import expect from 'expect.js';
import date from '../date-and-time';
import '../locale/ja';

let forEach = (array, fn) => {
        for (let i = 0, len = array.length; i < len; i++) {
            if (fn(array[i], i) === 0) {
                break;
            }
        }
    },
    MMMM = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    MMM = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dddd = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    ddd = ['日', '月', '火', '水', '木', '金', '土'],
    dd = ['日', '月', '火', '水', '木', '金', '土'],
    A = ['午前', '午前', '午前', '午前', '午前', '午前', '午前', '午前', '午前', '午前', '午前', '午前',    // 0 - 11
        '午後', '午後', '午後', '午後', '午後', '午後', '午後', '午後', '午後', '午後', '午後', '午後'];    // 12 - 23

describe('format with "ja"', () => {
    before(() => {
        date.locale('ja');
    });

    forEach(MMMM, (m, i) => {
        it('"MMMM" equals to "' + m + '"', () => {
            let now = new Date(2015, i, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MMMM')).to.equal(m);
        });
    });
    forEach(MMM, (m, i) => {
        it('"MMM" equals to "' + m + '"', () => {
            let now = new Date(2015, i, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MMM')).to.equal(m);
        });
    });
    forEach(dddd, (d, i) => {
        it('"dddd" equals to "' + d + '"', () => {
            let now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
            expect(date.format(now, 'dddd')).to.equal(d);
        });
    });
    forEach(ddd, (d, i) => {
        it('"ddd" equals to "' + d + '"', () => {
            let now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
            expect(date.format(now, 'ddd')).to.equal(d);
        });
    });
    forEach(dd, (d, i) => {
        it('"dd" equals to "' + d + '"', () => {
            let now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
            expect(date.format(now, 'dd')).to.equal(d);
        });
    });
    forEach(A, (a, i) => {
        it('"A" equals to "' + a + '"', () => {
            let now = new Date(2016, 0, 1, i, 34, 56, 789);
            expect(date.format(now, 'A')).to.equal(a);
        });
    });
    it('"hh" equals to "00"', () => {
        let now = new Date(2015, 0, 1, 0, 34, 56, 789);
        expect(date.format(now, 'hh')).to.equal('00');
    });
    it('"hh" equals to "00"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'hh')).to.equal('00');
    });
    it('"hh" equals to "11"', () => {
        let now = new Date(2015, 0, 1, 23, 34, 56, 789);
        expect(date.format(now, 'hh')).to.equal('11');
    });
    it('"h" equals to "0"', () => {
        let now = new Date(2015, 0, 1, 0, 34, 56, 789);
        expect(date.format(now, 'h')).to.equal('0');
    });
    it('"h" equals to "0"', () => {
        let now = new Date(2015, 0, 1, 12, 34, 56, 789);
        expect(date.format(now, 'h')).to.equal('0');
    });
    it('"h" equals to "11"', () => {
        let now = new Date(2015, 0, 1, 23, 34, 56, 789);
        expect(date.format(now, 'h')).to.equal('11');
    });

    after(() => {
        date.locale('en');
    });
});

describe('parse with "ja"', () => {
    before(() => {
        date.locale('ja');
    });

    forEach(MMMM, (m, i) => {
        it('"MMMM"', () => {
            let now = new Date(1970, i, 1);
            expect(date.parse(m, 'MMMM')).to.eql(now);
        });
    });
    forEach(MMM, (m, i) => {
        it('"MMM"', () => {
            let now = new Date(1970, i, 1);
            expect(date.parse(m, 'MMM')).to.eql(now);
        });
    });
    forEach(A, (a, i) => {
        it('h A', () => {
            let now = new Date(1970, 0, 1, i);
            expect(date.parse((i > 11 ? i - 12 : i) + ' ' + a, 'h A')).to.eql(now);
        });
    });

    after(() => {
        date.locale('en');
    });
});
