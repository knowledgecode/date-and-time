/*global describe, before, it, after */
import date from 'date-and-time';
import en from 'date-and-time/locale/en';
import fa from 'date-and-time/locale/fa';

import expect from 'expect.js';

const MMMM = ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'];
const MMM = ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'];
const dddd = ['یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
const ddd = ['یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
const dd = ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'];
const A = [
    'قبل از ظهر', 'قبل از ظهر', 'قبل از ظهر', 'قبل از ظهر', 'قبل از ظهر', 'قبل از ظهر', 'قبل از ظهر', 'قبل از ظهر', 'قبل از ظهر', 'قبل از ظهر', 'قبل از ظهر', 'قبل از ظهر',
    'بعد از ظهر', 'بعد از ظهر', 'بعد از ظهر', 'بعد از ظهر', 'بعد از ظهر', 'بعد از ظهر', 'بعد از ظهر', 'بعد از ظهر', 'بعد از ظهر', 'بعد از ظهر', 'بعد از ظهر', 'بعد از ظهر'
];

describe('format with "fa"', () => {
    before(() => date.locale(fa));

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
    it('numeric expression', () => {
        const now = new Date(2016, 0, 1, 2, 34, 56, 789),
            str = '۲۰۱۶۰۱۰۱۰۲۳۴۵۶۷۸۹';
        expect(date.format(now, 'YYYYMMDDHHmmssSSS')).to.equal(str);
    });

    after(() => date.locale(en));
});

describe('parse with "fa"', () => {
    before(() => date.locale(fa));

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
    it('numeric expression', () => {
        const now = new Date(2016, 0, 1, 2, 34, 56, 789),
            str = '۲۰۱۶۰۱۰۱۰۲۳۴۵۶۷۸۹';
        expect(date.parse(str, 'YYYYMMDDHHmmssSSS')).to.eql(now);
    });

    after(() => date.locale(en));
});
