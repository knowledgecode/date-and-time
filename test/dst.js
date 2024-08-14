/*global describe, it */
process.env.TZ = 'America/Los_Angeles';

(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        date = global.date || require('date-and-time');

    describe('format', function () {
        it('before DST in America/Los_Angeles', function () {
            var dateObj = new Date(2021, 2, 14, 1, 59, 59, 999);
            var dateString = '2021-03-14 01:59:59.999 UTC-0800';
            var utc = false;
            expect(date.format(dateObj, 'YYYY-MM-DD HH:mm:ss.SSS [UTC]Z', utc)).to.eql(dateString);
        });
        it('start of DST in America/Los_Angeles', function () {
            var dateObj = new Date(2021, 2, 14, 2, 0, 0, 0);
            var dateString = '2021-03-14 03:00:00.000 UTC-0700';
            var utc = false;
            expect(date.format(dateObj, 'YYYY-MM-DD HH:mm:ss.SSS [UTC]Z', utc)).to.eql(dateString);
        });
        it('before of PST in America/Los_Angeles', function () {
            var dateObj = new Date(2021, 10, 7, 1, 59, 59, 999);
            var dateString = '2021-11-07 01:59:59.999 UTC-0700';
            var utc = false;
            expect(date.format(dateObj, 'YYYY-MM-DD HH:mm:ss.SSS [UTC]Z', utc)).to.eql(dateString);
        });
        it('end of DST in America/Los_Angeles', function () {
            var dateObj = new Date(2021, 10, 7, 2, 0, 0, 0);
            var dateString = '2021-11-07 02:00:00.000 UTC-0800';
            var utc = false;
            expect(date.format(dateObj, 'YYYY-MM-DD HH:mm:ss.SSS [UTC]Z', utc)).to.eql(dateString);
        });
        it('after of DST in America/Los_Angeles', function () {
            var dateObj = new Date(2021, 10, 7, 3, 0, 0, 0);
            var dateString = '2021-11-07 03:00:00.000 UTC-0800';
            var utc = false;
            expect(date.format(dateObj, 'YYYY-MM-DD HH:mm:ss.SSS [UTC]Z', utc)).to.eql(dateString);
        });
    });

    describe('format UTC', function () {
        it('before DST in America/Los_Angeles', function () {
            var dateObj = new Date(Date.UTC(2021, 2, 14, 1, 59, 59, 999));
            var dateString = '2021-03-14 01:59:59.999 UTC+0000';
            var utc = true;
            expect(date.format(dateObj, 'YYYY-MM-DD HH:mm:ss.SSS [UTC]Z', utc)).to.eql(dateString);
        });
        it('start of DST in America/Los_Angeles', function () {
            var dateObj = new Date(Date.UTC(2021, 2, 14, 2, 0, 0, 0));
            var dateString = '2021-03-14 02:00:00.000 UTC+0000';
            var utc = true;
            expect(date.format(dateObj, 'YYYY-MM-DD HH:mm:ss.SSS [UTC]Z', utc)).to.eql(dateString);
        });
        it('before of PST in America/Los_Angeles', function () {
            var dateObj = new Date(Date.UTC(2021, 10, 7, 1, 59, 59, 999));
            var dateString = '2021-11-07 01:59:59.999 UTC+0000';
            var utc = true;
            expect(date.format(dateObj, 'YYYY-MM-DD HH:mm:ss.SSS [UTC]Z', utc)).to.eql(dateString);
        });
        it('end of DST in America/Los_Angeles', function () {
            var dateObj = new Date(Date.UTC(2021, 10, 7, 2, 0, 0, 0));
            var dateString = '2021-11-07 02:00:00.000 UTC+0000';
            var utc = true;
            expect(date.format(dateObj, 'YYYY-MM-DD HH:mm:ss.SSS [UTC]Z', utc)).to.eql(dateString);
        });
        it('after of DST in America/Los_Angeles', function () {
            var dateObj = new Date(Date.UTC(2021, 10, 7, 3, 0, 0, 0));
            var dateString = '2021-11-07 03:00:00.000 UTC+0000';
            var utc = true;
            expect(date.format(dateObj, 'YYYY-MM-DD HH:mm:ss.SSS [UTC]Z', utc)).to.eql(dateString);
        });
    });

    describe('addition', function () {
        it('add a year', function () {
            var date1 = new Date(2021, 2, 14, 3);
            var date2 = new Date(2022, 2, 14, 3);
            var utc = false;
            expect(date.addYears(date1, 1, utc)).to.eql(date2);
        });
        it('add a year at the end of the month', function () {
            var date1 = new Date(2020, 1, 29, 3);
            var date2 = new Date(2021, 1, 28, 3);
            var utc = false;
            expect(date.addYears(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a year', function () {
            var date1 = new Date(2021, 2, 14, 3);
            var date2 = new Date(2020, 2, 14, 3);
            var utc = false;
            expect(date.addYears(date1, -1, utc)).to.eql(date2);
        });
        it('subtract a year at the end of the month', function () {
            var date1 = new Date(2024, 1, 29, 3);
            var date2 = new Date(2023, 1, 28, 3);
            var utc = false;
            expect(date.addYears(date1, -1, utc)).to.eql(date2);
        });
        it('add a month', function () {
            var date1 = new Date(2021, 2, 14, 3);
            var date2 = new Date(2021, 3, 14, 3);
            var utc = false;
            expect(date.addMonths(date1, 1, utc)).to.eql(date2);
        });
        it('add a month at the end of the month', function () {
            var date1 = new Date(2023, 0, 31, 3);
            var date2 = new Date(2023, 1, 28, 3);
            var utc = false;
            expect(date.addMonths(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a month', function () {
            var date1 = new Date(2021, 2, 14, 3);
            var date2 = new Date(2021, 1, 14, 3);
            var utc = false;
            expect(date.addMonths(date1, -1, utc)).to.eql(date2);
        });
        it('subtract a month at the end of the month', function () {
            var date1 = new Date(2023, 2, 31, 3);
            var date2 = new Date(2023, 1, 28, 3);
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
            var date2 = new Date(2021, 2, 14, 1);
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
            var date2 = new Date(2021, 2, 14, 1, 59);
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
            var date2 = new Date(2021, 2, 14, 1, 59, 59);
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
            var date2 = new Date(2021, 2, 14, 1, 59, 59, 999);
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
        it('add a year at the end of the month', function () {
            var date1 = new Date(Date.UTC(2020, 1, 29, 9));
            var date2 = new Date(Date.UTC(2021, 1, 28, 9));
            var utc = true;
            expect(date.addYears(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a year', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10));
            var date2 = new Date(Date.UTC(2020, 2, 14, 10));
            var utc = true;
            expect(date.addYears(date1, -1, utc)).to.eql(date2);
        });
        it('subtract a year at the end of the month', function () {
            var date1 = new Date(Date.UTC(2024, 1, 29, 9));
            var date2 = new Date(Date.UTC(2023, 1, 28, 9));
            var utc = true;
            expect(date.addYears(date1, -1, utc)).to.eql(date2);
        });
        it('add a month', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10));
            var date2 = new Date(Date.UTC(2021, 3, 14, 10));
            var utc = true;
            expect(date.addMonths(date1, 1, utc)).to.eql(date2);
        });
        it('add a month at the end of the month', function () {
            var date1 = new Date(Date.UTC(2023, 0, 31, 9));
            var date2 = new Date(Date.UTC(2023, 1, 28, 9));
            var utc = true;
            expect(date.addMonths(date1, 1, utc)).to.eql(date2);
        });
        it('subtract a month', function () {
            var date1 = new Date(Date.UTC(2021, 2, 14, 10));
            var date2 = new Date(Date.UTC(2021, 1, 14, 10));
            var utc = true;
            expect(date.addMonths(date1, -1, utc)).to.eql(date2);
        });
        it('subtract a month at the end of the month', function () {
            var date1 = new Date(Date.UTC(2023, 2, 31, 10));
            var date2 = new Date(Date.UTC(2023, 1, 28, 10));
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
    });

}(this));
