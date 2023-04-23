/*global describe, it */
process.env.TZ = 'America/Los_Angeles';

(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        date = global.date || require('../date-and-time');

    describe('addition', function () {
        it('add a year', function () {
            var date1 = new Date(2021, 2, 14, 3);
            var date2 = new Date(2022, 2, 14, 3);
            var utc = false;
            expect(date.addYears(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a year', function () {
            var date1 = new Date(2021, 2, 14, 3);
            var date2 = new Date(2020, 2, 14, 3);
            var utc = false;
            expect(date.addYears(date1, -1, utc)).to.eql(date2);
        });
        it('add a month', function () {
            var date1 = new Date(2021, 2, 14, 3);
            var date2 = new Date(2021, 3, 14, 3);
            var utc = false;
            expect(date.addMonths(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a month', function () {
            var date1 = new Date(2021, 2, 14, 3);
            var date2 = new Date(2021, 1, 14, 3);
            var utc = false;
            expect(date.addMonths(date1, -1, utc)).to.eql(date2);
        });
        it('add a day', function () {
            var date1 = new Date(2021, 2, 14, 3);
            var date2 = new Date(2021, 2, 15, 3);
            var utc = false;
            expect(date.addDays(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a day', function () {
            var date1 = new Date(2021, 2, 14, 3);
            var date2 = new Date(2021, 2, 13, 3);
            var utc = false;
            expect(date.addDays(date1, -1, utc)).to.eql(date2);
        });
        it('add an hour', function () {
            var date1 = new Date(2021, 2, 14, 3);
            var date2 = new Date(2021, 2, 14, 4);
            var utc = false;
            expect(date.addHours(date1, 1, utc)).to.eql(date2);
        });
        it('subtract an hour', function () {
            var date1 = new Date(2021, 2, 14, 3);
            var date2 = new Date(2021, 2, 14, 2);
            var utc = false;
            expect(date.addHours(date1, -1, utc)).to.eql(date2);
        });
        it('add a minute', function () {
            var date1 = new Date(2021, 2, 14, 3, 0);
            var date2 = new Date(2021, 2, 14, 3, 1);
            var utc = false;
            expect(date.addMinutes(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a minute', function () {
            var date1 = new Date(2021, 2, 14, 3, 0);
            var date2 = new Date(2021, 2, 14, 2, 59);
            var utc = false;
            expect(date.addMinutes(date1, -1, utc)).to.eql(date2);
        });
        it('add a second', function () {
            var date1 = new Date(2021, 2, 14, 3, 0, 0);
            var date2 = new Date(2021, 2, 14, 3, 0, 1);
            var utc = false;
            expect(date.addSeconds(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a second', function () {
            var date1 = new Date(2021, 2, 14, 3, 0, 0);
            var date2 = new Date(2021, 2, 14, 2, 59, 59);
            var utc = false;
            expect(date.addSeconds(date1, -1, utc)).to.eql(date2);
        });
        it('add a millisecond', function () {
            var date1 = new Date(2021, 2, 14, 3, 0, 0, 0);
            var date2 = new Date(2021, 2, 14, 3, 0, 0, 1);
            var utc = false;
            expect(date.addMilliseconds(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a millisecond', function () {
            var date1 = new Date(2021, 2, 14, 3, 0, 0, 0);
            var date2 = new Date(2021, 2, 14, 2, 59, 59, 999);
            var utc = false;
            expect(date.addMilliseconds(date1, -1, utc)).to.eql(date2);
        });
    });

    describe('addition UTC', function () {
        it('add a year', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10));
            var date2 = new Date(Date.UTC(2022, 2, 14, 10));
            var utc = true;
            expect(date.addYears(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a year', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10));
            var date2 = new Date(Date.UTC(2020, 2, 14, 10));
            var utc = true;
            expect(date.addYears(date1, -1, utc)).to.eql(date2);
        });
        it('add a month', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10));
            var date2 = new Date(Date.UTC(2021, 3, 14, 10));
            var utc = true;
            expect(date.addMonths(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a month', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10));
            var date2 = new Date(Date.UTC(2021, 1, 14, 10));
            var utc = true;
            expect(date.addMonths(date1, -1, utc)).to.eql(date2);
        });
        it('add a day', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10));
            var date2 = new Date(Date.UTC(2021, 2, 15, 10));
            var utc = true;
            expect(date.addDays(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a day', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10));
            var date2 = new Date(Date.UTC(2021, 2, 13, 10));
            var utc = true;
            expect(date.addDays(date1, -1, utc)).to.eql(date2);
        });
        it('add an hour', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10));
            var date2 = new Date(Date.UTC(2021, 2, 14, 11));
            var utc = true;
            expect(date.addHours(date1, 1, utc)).to.eql(date2);
        });
        it('subtract an hour', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10));
            var date2 = new Date(Date.UTC(2021, 2, 14, 9));
            var utc = true;
            expect(date.addHours(date1, -1, utc)).to.eql(date2);
        });
        it('add a minute', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10, 0));
            var date2 = new Date(Date.UTC(2021, 2, 14, 10, 1));
            var utc = true;
            expect(date.addMinutes(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a minute', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10, 0));
            var date2 = new Date(Date.UTC(2021, 2, 14, 9, 59));
            var utc = true;
            expect(date.addMinutes(date1, -1, utc)).to.eql(date2);
        });
        it('add a second', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10, 0, 0));
            var date2 = new Date(Date.UTC(2021, 2, 14, 10, 0, 1));
            var utc = true;
            expect(date.addSeconds(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a second', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10, 0, 0));
            var date2 = new Date(Date.UTC(2021, 2, 14, 9, 59, 59));
            var utc = true;
            expect(date.addSeconds(date1, -1, utc)).to.eql(date2);
        });
        it('add a millisecond', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10, 0, 0, 0));
            var date2 = new Date(Date.UTC(2021, 2, 14, 10, 0, 0, 1));
            var utc = true;
            expect(date.addMilliseconds(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a millisecond', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10, 0, 0, 0));
            var date2 = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));
            var utc = true;
            expect(date.addMilliseconds(date1, -1, utc)).to.eql(date2);
        });
    });

}(this));
