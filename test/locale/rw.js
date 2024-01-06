/*global describe, before, it, after */
(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        date = global.date || require('date-and-time'),
        forEach = function (array, fn) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (fn(array[i], i) === 0) {
                    break;
                }
            }
        },
        MMMM = ['Mutarama', 'Gashyantare', 'Werurwe', 'Mata', 'Gicurasi', 'Kamena', 'Nyakanga', 'Kanama', 'Nzeri', 'Ukwakira', 'Ugushyingo', 'Ukuboza'],
        MMM = ['Mtr', 'Gas', 'Wer', 'Mta', 'Gic', 'Kmn', 'Nyk', 'Knm', 'Nze', 'Ukw', 'Ugu', 'Uku'],
        dddd = ['Ku cyumweru', 'Ku wambere', 'Ku wakabiri', 'Ku wagatatu', 'Ku wakane', 'Ku wagatanu', 'Ku wagatandatu'],
        ddd = ['Cyu', 'Mbe', 'Kbr', 'Gtt', 'Kne', 'Gtn', 'Gtd'],
        dd = ['Cy', 'Mb', 'Kb', 'Gt', 'Kn', 'Gn', 'Gd'];

    var locale = typeof require === 'function' ? require('date-and-time/locale/rw') : 'rw';

    describe('format with "rw"', function () {
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

        after(function () {
            date.locale(typeof require === 'function' ? require('../../locale/en') : 'en');
        });
    });

    describe('parse with "rw"', function () {
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

        after(function () {
            date.locale(typeof require === 'function' ? require('../../locale/en') : 'en');
        });
    });

}(this));
