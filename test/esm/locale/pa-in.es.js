/*global expect */
import date from '../../../../esm/date-and-time.es.js';
import en from '../../../../esm/locale/en.es.js';
import pa_in from '../../../../esm/locale/pa-in.es.js';

const MMMM = ['ਜਨਵਰੀ', 'ਫ਼ਰਵਰੀ', 'ਮਾਰਚ', 'ਅਪ੍ਰੈਲ', 'ਮਈ', 'ਜੂਨ', 'ਜੁਲਾਈ', 'ਅਗਸਤ', 'ਸਤੰਬਰ', 'ਅਕਤੂਬਰ', 'ਨਵੰਬਰ', 'ਦਸੰਬਰ'];
const MMM = ['ਜਨਵਰੀ', 'ਫ਼ਰਵਰੀ', 'ਮਾਰਚ', 'ਅਪ੍ਰੈਲ', 'ਮਈ', 'ਜੂਨ', 'ਜੁਲਾਈ', 'ਅਗਸਤ', 'ਸਤੰਬਰ', 'ਅਕਤੂਬਰ', 'ਨਵੰਬਰ', 'ਦਸੰਬਰ'];
const dddd = ['ਐਤਵਾਰ', 'ਸੋਮਵਾਰ', 'ਮੰਗਲਵਾਰ', 'ਬੁਧਵਾਰ', 'ਵੀਰਵਾਰ', 'ਸ਼ੁੱਕਰਵਾਰ', 'ਸ਼ਨੀਚਰਵਾਰ'];
const ddd = ['ਐਤ', 'ਸੋਮ', 'ਮੰਗਲ', 'ਬੁਧ', 'ਵੀਰ', 'ਸ਼ੁਕਰ', 'ਸ਼ਨੀ'];
const dd = ['ਐਤ', 'ਸੋਮ', 'ਮੰਗਲ', 'ਬੁਧ', 'ਵੀਰ', 'ਸ਼ੁਕਰ', 'ਸ਼ਨੀ'];
const A = [
    'ਰਾਤ', 'ਰਾਤ', 'ਰਾਤ', 'ਰਾਤ',                                 // 0 - 3
    'ਸਵੇਰ', 'ਸਵੇਰ', 'ਸਵੇਰ', 'ਸਵੇਰ', 'ਸਵੇਰ', 'ਸਵੇਰ',               // 4 - 9
    'ਦੁਪਹਿਰ', 'ਦੁਪਹਿਰ', 'ਦੁਪਹਿਰ', 'ਦੁਪਹਿਰ', 'ਦੁਪਹਿਰ', 'ਦੁਪਹਿਰ', 'ਦੁਪਹਿਰ', // 10 - 16
    'ਸ਼ਾਮ', 'ਸ਼ਾਮ', 'ਸ਼ਾਮ',                                       // 17 - 19
    'ਰਾਤ', 'ਰਾਤ', 'ਰਾਤ', 'ਰਾਤ'                                  // 20 - 23
];

describe('format with "pa-in"', function () {
    before(() => date.locale(pa_in));

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
    it('numeric expression', function () {
        var now = new Date(2016, 0, 1, 2, 34, 56, 789),
            str = '੨੦੧੬੦੧੦੧੦੨੩੪੫੬੭੮੯';
        expect(date.format(now, 'YYYYMMDDHHmmssSSS')).to.equal(str);
    });

    after(() => date.locale(en));
});

describe('parse with "pa-in"', function () {
    before(() => date.locale(pa_in));

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
    it('numeric expression', function () {
        var now = new Date(2016, 0, 1, 2, 34, 56, 789),
            str = '੨੦੧੬੦੧੦੧੦੨੩੪੫੬੭੮੯';
        expect(date.parse(str, 'YYYYMMDDHHmmssSSS')).to.eql(now);
    });

    after(() => date.locale(en));
});
