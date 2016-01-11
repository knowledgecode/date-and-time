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
        MMMM = ['জানুয়ারী', 'ফেবুয়ারী', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'অগাস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'],
        MMM = ['জানু', 'ফেব', 'মার্চ', 'এপর', 'মে', 'জুন', 'জুল', 'অগ', 'সেপ্ট', 'অক্টো', 'নভ', 'ডিসেম্'],
        dddd = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পত্তিবার', 'শুক্রবার', 'শনিবার'],
        ddd = ['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পত্তি', 'শুক্র', 'শনি'],
        dd = ['রব', 'সম', 'মঙ্গ', 'বু', 'ব্রিহ', 'শু', 'শনি'],
        A = ['রাত', 'রাত', 'রাত', 'রাত',    // 0 - 3
             'সকাল', 'সকাল', 'সকাল', 'সকাল', 'সকাল', 'সকাল',  // 4 - 9
             'দুপুর', 'দুপুর', 'দুপুর', 'দুপুর', 'দুপুর', 'দুপুর', 'দুপুর',   // 10 - 16
             'বিকাল', 'বিকাল', 'বিকাল',   // 17 - 19
             'রাত', 'রাত', 'রাত', 'রাত'];   // 20 - 23

    date.locale('bn');

    describe('format', function () {
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
    });

    describe('parse', function () {
        forEach(MMMM, function (m, i) {
            it('"MMMM"', function () {
                var now = new Date(0, i, 1);
                expect(date.parse(m, 'MMMM')).to.eql(now);
            });
        });
        forEach(MMM, function (m, i) {
            it('"MMM"', function () {
                var now = new Date(0, i, 1);
                expect(date.parse(m, 'MMM')).to.eql(now);
            });
        });
        forEach(A, function (a, i) {
            it('h A', function () {
                var now = new Date(0, 0, 1, i);
                expect(date.parse((i > 11 ? i - 12 : i) + ' ' + a, 'h A')).to.eql(now);
            });
        });
    });

}(this));

