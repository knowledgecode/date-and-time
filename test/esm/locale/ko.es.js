/*global expect */
import date from '../../../../esm/date-and-time.es.js';
import en from '../../../../esm/locale/en.es.js';
import ko from '../../../../esm/locale/ko.es.js';

const MMMM = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
const MMM = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
const dddd = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
const ddd = ['일', '월', '화', '수', '목', '금', '토'];
const dd = ['일', '월', '화', '수', '목', '금', '토'];
const A = [
    '오전', '오전', '오전', '오전', '오전', '오전', '오전', '오전', '오전', '오전', '오전', '오전',
    '오후', '오후', '오후', '오후', '오후', '오후', '오후', '오후', '오후', '오후', '오후', '오후'
];

describe('format with "ko"', function () {
    before(() => date.locale(ko));

    MMMM.forEach((m, i) => {
        it('"MMMM" equals to "' + m + '"', function () {
            var now = new Date(2015, i, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MMMM')).to.equal(m);
        });
    });
    MMM.forEach((m, i) => {
        it('"MMM" equals to "' + m + '"', function () {
            var now = new Date(2015, i, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MMM')).to.equal(m);
        });
    });
    dddd.forEach((d, i) => {
        it('"dddd" equals to "' + d + '"', function () {
            var now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
            expect(date.format(now, 'dddd')).to.equal(d);
        });
    });
    ddd.forEach((d, i) => {
        it('"ddd" equals to "' + d + '"', function () {
            var now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
            expect(date.format(now, 'ddd')).to.equal(d);
        });
    });
    dd.forEach((d, i) => {
        it('"dd" equals to "' + d + '"', function () {
            var now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
            expect(date.format(now, 'dd')).to.equal(d);
        });
    });
    A.forEach((a, i) => {
        it('"A" equals to "' + a + '"', function () {
            var now = new Date(2016, 0, 1, i, 34, 56, 789);
            expect(date.format(now, 'A')).to.equal(a);
        });
    });

    after(() => date.locale(en));
});

describe('parse with "ko"', function () {
    before(() => date.locale(ko));

    MMMM.forEach((m, i) => {
        it('"MMMM"', function () {
            var now = new Date(1970, i, 1);
            expect(date.parse(m, 'MMMM')).to.eql(now);
        });
    });
    MMM.forEach((m, i) => {
        it('"MMM"', function () {
            var now = new Date(1970, i, 1);
            expect(date.parse(m, 'MMM')).to.eql(now);
        });
    });
    A.forEach((a, i) => {
        it('h A', function () {
            var now = new Date(1970, 0, 1, i);
            expect(date.parse((i > 11 ? i - 12 : i) + ' ' + a, 'h A')).to.eql(now);
        });
    });

    after(() => date.locale(en));
});
