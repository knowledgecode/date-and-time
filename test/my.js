(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        date = global.date || require('../date-and-time'),
        forEach = function (array, fn) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (fn(array[i], i) === 0) {
                    break;
                }
            }
        },
        MMMM = ['ဇန်နဝါရီ', 'ဖေဖော်ဝါရီ', 'မတ်', 'ဧပြီ', 'မေ', 'ဇွန်', 'ဇူလိုင်', 'သြဂုတ်', 'စက်တင်ဘာ', 'အောက်တိုဘာ', 'နိုဝင်ဘာ', 'ဒီဇင်ဘာ'],
        MMM = ['ဇန်', 'ဖေ', 'မတ်', 'ပြီ', 'မေ', 'ဇွန်', 'လိုင်', 'သြ', 'စက်', 'အောက်', 'နို', 'ဒီ'],
        dddd = ['တနင်္ဂနွေ', 'တနင်္လာ', 'အင်္ဂါ', 'ဗုဒ္ဓဟူး', 'ကြာသပတေး', 'သောကြာ', 'စနေ'],
        ddd = ['နွေ', 'လာ', 'ဂါ', 'ဟူး', 'ကြာ', 'သော', 'နေ'],
        dd = ['နွေ', 'လာ', 'ဂါ', 'ဟူး', 'ကြာ', 'သော', 'နေ'];

    var locale = typeof require === 'function' ? require('../locale/my') : 'my';

    describe('format with "my"', function () {
        before(function () {
            date.locale(locale);
        });

        forEach(MMMM, function (m, i) {
            it('"MMMM" equals to "' + m + '"', function () {
                var now = new Date(2015, i, 1, 12, 34, 56, 789);
                expect(date.format(now, 'MMMM')).to.equal(m);
            });
        });
        forEach(MMM, function (m, i) {
            it('"MMM" equals to "' + m + '"', function () {
                var now = new Date(2015, i, 1, 12, 34, 56, 789);
                expect(date.format(now, 'MMM')).to.equal(m);
            });
        });
        forEach(dddd, function (d, i) {
            it('"dddd" equals to "' + d + '"', function () {
                var now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
                expect(date.format(now, 'dddd')).to.equal(d);
            });
        });
        forEach(ddd, function (d, i) {
            it('"ddd" equals to "' + d + '"', function () {
                var now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
                expect(date.format(now, 'ddd')).to.equal(d);
            });
        });
        forEach(dd, function (d, i) {
            it('"dd" equals to "' + d + '"', function () {
                var now = new Date(2016, 0, i + 3, 12, 34, 56, 789);
                expect(date.format(now, 'dd')).to.equal(d);
            });
        });
        it('numeric expression', function () {
            var now = new Date(2016, 0, 1, 2, 34, 56, 789),
                str = '၂၀၁၆၀၁၀၁၀၂၃၄၅၆၇၈၉';
            expect(date.format(now, 'YYYYMMDDHHmmssSSS')).to.equal(str);
        });

        after(function () {
            date.locale(typeof require === 'function' ? require('../locale/en') : 'en');
        });
    });

    describe('parse with "my"', function () {
        before(function () {
            date.locale(locale);
        });

        forEach(MMMM, function (m, i) {
            it('"MMMM"', function () {
                var now = new Date(1970, i, 1);
                expect(date.parse(m, 'MMMM')).to.eql(now);
            });
        });
        forEach(MMM, function (m, i) {
            it('"MMM"', function () {
                var now = new Date(1970, i, 1);
                expect(date.parse(m, 'MMM')).to.eql(now);
            });
        });
        it('numeric expression', function () {
            var now = new Date(2016, 0, 1, 2, 34, 56, 789),
                str = '၂၀၁၆၀၁၀၁၀၂၃၄၅၆၇၈၉';
            expect(date.parse(str, 'YYYYMMDDHHmmssSSS')).to.eql(now);
        });

        after(function () {
            date.locale(typeof require === 'function' ? require('../locale/en') : 'en');
        });
    });

}(this));
