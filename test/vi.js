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
        MMMM = ['tháng 1', 'tháng 2', 'tháng 3', 'tháng 4', 'tháng 5', 'tháng 6', 'tháng 7', 'tháng 8', 'tháng 9', 'tháng 10', 'tháng 11', 'tháng 12'],
        MMM = ['Th01', 'Th02', 'Th03', 'Th04', 'Th05', 'Th06', 'Th07', 'Th08', 'Th09', 'Th10', 'Th11', 'Th12'],
        dddd = ['chủ nhật', 'thứ hai', 'thứ ba', 'thứ tư', 'thứ năm', 'thứ sáu', 'thứ bảy'],
        ddd = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        dd = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        A = ['sa', 'sa', 'sa', 'sa', 'sa', 'sa', 'sa', 'sa', 'sa', 'sa', 'sa', 'sa',    // 0 - 11
            'ch', 'ch', 'ch', 'ch', 'ch', 'ch', 'ch', 'ch', 'ch', 'ch', 'ch', 'ch'];    // 12 - 23

    var locale = typeof require === 'function' ? require('../locale/vi') : 'vi';

    describe('format with "vi"', function () {
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
        forEach(A, function (a, i) {
            it('"A" equals to "' + a + '"', function () {
                var now = new Date(2016, 0, 1, i, 34, 56, 789);
                expect(date.format(now, 'A')).to.equal(a);
            });
        });

        after(function () {
            date.locale(typeof require === 'function' ? require('../locale/en') : 'en');
        });
    });

    describe('parse with "vi"', function () {
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
        forEach(A, function (a, i) {
            it('h A', function () {
                var now = new Date(1970, 0, 1, i);
                expect(date.parse((i > 11 ? i - 12 : i) + ' ' + a, 'h A')).to.eql(now);
            });
        });

        after(function () {
            date.locale(typeof require === 'function' ? require('../locale/en') : 'en');
        });
    });

}(this));
