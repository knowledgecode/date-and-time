/*global describe, before, it */
(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        date = global.date || require('date-and-time');

    var plugin = 'timezone';

    if (typeof require === 'function') {
        plugin = require('date-and-time/plugin/timezone');
    }

    describe('timezone', function () {
        before(function () {
            date.plugin(plugin);
        });

        describe('formatTZ', function () {
            it('formatTZ UTC-8', function () {
                // 2021-03-14T09:59:59.999Z => March 14 2021 1:59:59.999
                var dateObj = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));
                var formatString = 'MMMM DD YYYY H:mm:ss.SSS [UTC]Z';
                var tz = 'America/Los_Angeles';     // UTC-8

                expect(date.formatTZ(dateObj, formatString, tz)).to.equal('March 14 2021 1:59:59.999 UTC-0800');
            });

            it('formatTZ UTC-7 (Start of DST)', function () {
                // 2021-03-14T10:00:00.000Z => March 14 2021 3:00:00.000
                var dateObj = new Date(Date.UTC(2021, 2, 14, 10, 0, 0, 0));
                var formatString = 'MMMM D YYYY H:mm:ss.SSS [UTC]Z';
                var tz = 'America/Los_Angeles';     // UTC-7 DST

                expect(date.formatTZ(dateObj, formatString, tz)).to.equal('March 14 2021 3:00:00.000 UTC-0700');
            });

            it('formatTZ UTC-7 (End of DST)', function () {
                // 2021-11-07T08:59:59.999Z => November 7 2021 1:59:59.999
                var dateObj = new Date(Date.UTC(2021, 10, 7, 8, 59, 59, 999));
                var formatString = 'MMMM D YYYY H:mm:ss.SSS [UTC]Z';
                var tz = 'America/Los_Angeles';     // UTC-7 DST

                expect(date.formatTZ(dateObj, formatString, tz)).to.equal('November 7 2021 1:59:59.999 UTC-0700');
            });

            it('formatTZ UTC-8', function () {
                // 2021-11-07T09:00:00.000Z => November 7 2021 1:00:00.000
                var dateObj = new Date(Date.UTC(2021, 10, 7, 9, 0, 0, 0));
                var formatString = 'MMMM D YYYY H:mm:ss.SSS [UTC]Z';
                var tz = 'America/Los_Angeles';     // UTC-8

                expect(date.formatTZ(dateObj, formatString, tz)).to.equal('November 7 2021 1:00:00.000 UTC-0800');
            });

            it('formatTZ UTC+9', function () {
                // 2021-03-14T09:59:59.999Z => March 14 2021 18:59:59.999
                var dateObj = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));
                var formatString = 'MMMM DD YYYY H:mm:ss.SSS [UTC]Z';
                var tz = 'Asia/Tokyo';              // UTC+9

                expect(date.formatTZ(dateObj, formatString, tz)).to.equal('March 14 2021 18:59:59.999 UTC+0900');
            });
        });

        describe('parseTZ', function () {
            it('parseTZ UTC', function () {
                // Mar 14 2021 1:59:59.999 => 2021-03-14T01:59:59.999Z
                var dateString = 'Mar 14 2021 1:59:59.999';
                var formatString = 'MMM D YYYY H:mm:ss.SSS';
                var tz = 'UTC';
                var dateObj = new Date(Date.UTC(2021, 2, 14, 1, 59, 59, 999));

                expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
            });

            it('parseTZ UTC-8', function () {
                // Mar 14 2021 1:59:59.999 => 2021-03-14T09:59:59.999Z
                var dateString = 'Mar 14 2021 1:59:59.999';
                var formatString = 'MMM D YYYY H:mm:ss.SSS';
                var tz = 'America/Los_Angeles';     // UTC-8
                var dateObj = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));

                expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
            });

            it('parseTZ Edge case1', function () {
                // Mar 14 2021 2:00:00.000 => 2021-03-14T10:00:00.000Z
                var dateString = 'Mar 14 2021 2:00:00.000';
                var formatString = 'MMM D YYYY H:mm:ss.SSS';
                var tz = 'America/Los_Angeles';
                var dateObj = new Date(Date.UTC(2021, 2, 14, 10, 0, 0, 0));

                expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
            });

            it('parseTZ Edge case2', function () {
                // Mar 14 2021 2:59:59.999 => 2021-03-14T10:59:59.999Z
                var dateString = 'Mar 14 2021 2:59:59.999';
                var formatString = 'MMM D YYYY H:mm:ss.SSS';
                var tz = 'America/Los_Angeles';
                var dateObj = new Date(Date.UTC(2021, 2, 14, 10, 59, 59, 999));

                expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
            });

            it('parseTZ UTC-7 (Start of DST)', function () {
                // Mar 14 2021 3:00:00.000 => 2021-03-14T10:00:00.000Z
                var dateString = 'Mar 14 2021 3:00:00.000';
                var formatString = 'MMM D YYYY H:mm:ss.SSS';
                var tz = 'America/Los_Angeles';     // UTC-7 DST
                var dateObj = new Date(Date.UTC(2021, 2, 14, 10, 0, 0, 0));

                expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
            });

            it('parseTZ UTC-7 (End of DST)', function () {
                // Nov 7 2021 1:59:59.999 => 2021-11-07T08:59:59.999Z
                var dateString = 'Nov 7 2021 1:59:59.999';
                var formatString = 'MMM D YYYY H:mm:ss.SSS';
                var tz = 'America/Los_Angeles';     // UTC-7 DST
                var dateObj = new Date(Date.UTC(2021, 10, 7, 8, 59, 59, 999));

                expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
            });

            it('parseTZ UTC-8 with Z', function () {
                // Nov 7 2021 1:59:59.999 => 2021-11-07T09:59:59.999Z
                var dateString = 'Nov 7 2021 1:59:59.999 -0800';
                var formatString = 'MMM D YYYY H:mm:ss.SSS Z';
                var tz = 'America/Los_Angeles';     // UTC-8
                var dateObj = new Date(Date.UTC(2021, 10, 7, 9, 59, 59, 999));

                expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
            });

            it('parseTZ UTC-8', function () {
                // Nov 7 2021 2:00:00.000 => 2021-11-07T10:00:00.000Z
                var dateString = 'Nov 7 2021 2:00:00.000';
                var formatString = 'MMM D YYYY H:mm:ss.SSS';
                var tz = 'America/Los_Angeles';     // UTC-8
                var dateObj = new Date(Date.UTC(2021, 10, 7, 10, 0, 0, 0));

                expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
            });

            it('parseTZ UTC+9.5', function () {
                // Oct 3 2021 1:59:59.999 => 2021-10-02T16:29:59.999Z
                var dateString = 'Oct 3 2021 1:59:59.999';
                var formatString = 'MMM D YYYY H:mm:ss.SSS';
                var tz = 'Australia/Adelaide';      // UTC+9.5
                var dateObj = new Date(Date.UTC(2021, 9, 2, 16, 29, 59, 999));

                expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
            });

            it('parseTZ Edge case1', function () {
                // Oct 3 2021 2:00:00.000 => 2021-10-02T16:30:00.000Z
                var dateString = 'Oct 3 2021 2:00:00.000';
                var formatString = 'MMM D YYYY H:mm:ss.SSS';
                var tz = 'Australia/Adelaide';
                var dateObj = new Date(Date.UTC(2021, 9, 2, 16, 30, 0, 0));

                expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
            });

            it('parseTZ Edge case2', function () {
                // Oct 3 2021 2:59:59.999 => 2021-10-02T17:29:59.999Z
                var dateString = 'Oct 3 2021 2:59:59.999';
                var formatString = 'MMM D YYYY H:mm:ss.SSS';
                var tz = 'Australia/Adelaide';
                var dateObj = new Date(Date.UTC(2021, 9, 2, 17, 29, 59, 999));

                expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
            });

            it('parseTZ UTC+10.5 (Start of DST)', function () {
                // Oct 3 2021 3:00:00.000 => 2021-10-02T16:30:00.000Z
                var dateString = 'Oct 3 2021 3:00:00.000';
                var formatString = 'MMM D YYYY H:mm:ss.SSS';
                var tz = 'Australia/Adelaide';      // UTC+10.5 DST
                var dateObj = new Date(Date.UTC(2021, 9, 2, 16, 30, 0, 0));

                expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
            });

            it('parseTZ UTC+10.5 (End of DST)', function () {
                // Apr 4 2021 2:59:59.999 => 2021-04-03T16:29:59.999Z
                var dateString = 'Apr 4 2021 2:59:59.999';
                var formatString = 'MMM D YYYY H:mm:ss.SSS';
                var tz = 'Australia/Adelaide';      // UTC+10.5 DST
                var dateObj = new Date(Date.UTC(2021, 3, 3, 16, 29, 59, 999));

                expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
            });

            it('parseTZ UTC+9.5 with Z', function () {
                // Apr 4 2021 2:59:59.999 => 2021-04-03T17:29:59.999Z
                var dateString = 'Apr 4 2021 2:59:59.999 +0930';
                var formatString = 'MMM D YYYY H:mm:ss.SSS Z';
                var tz = 'Australia/Adelaide';      // UTC+9.5
                var dateObj = new Date(Date.UTC(2021, 3, 3, 17, 29, 59, 999));

                expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
            });

            it('parseTZ UTC+9.5', function () {
                // Apr 4 2021 3:00:00.000 => 2021-04-03T17:30:00.000Z
                var dateString = 'Apr 4 2021 3:00:00.000';
                var formatString = 'MMM D YYYY H:mm:ss.SSS';
                var tz = 'Australia/Adelaide';      // UTC+9.5
                var dateObj = new Date(Date.UTC(2021, 3, 3, 17, 30, 0, 0));

                expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
            });
        });

        describe('transformTZ', function () {
            it('transformTZ EST to PST', function () {
                var dateString1 = '2021-11-07T04:00:00.000 UTC-0500';
                var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                var formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
                var tz = 'America/Los_Angeles';     // UTC-8

                var dateString2 = 'November 7 2021 1:00:00.000';

                // 2021-11-07T04:00:00.000 UTC-0500 => November 7 2021 1:00:00.000
                expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
            });

            it('transformTZ EST to PDT (End of DST)', function () {
                var dateString1 = '2021-11-07T03:59:59.999 UTC-0500';
                var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                var formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
                var tz = 'America/Los_Angeles';     // UTC-7 DST

                var dateString2 = 'November 7 2021 1:59:59.999';

                // 2021-11-07T03:59:59.999 UTC-0500 => November 7 2021 1:59:59.999
                expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
            });

            it('transformTZ EDT to PST', function () {
                var dateString1 = '2021-03-14T05:59:59.999 UTC-0400';
                var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                var formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
                var tz = 'America/Los_Angeles';     // UTC-8

                var dateString2 = 'March 14 2021 1:59:59.999';

                // 2021-03-14T05:59:59.999 UTC-0400 => March 14 2021 1:59:59.999
                expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
            });

            it('transformTZ EDT to PDT (Start of DST)', function () {
                var dateString1 = '2021-03-14T06:00:00.000 UTC-0400';
                var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                var formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
                var tz = 'America/Los_Angeles';     // UTC-7 DST

                var dateString2 = 'March 14 2021 3:00:00.000';

                // 2021-03-14T06:00:00.000 UTC-0400 => March 14 2021 3:00:00.000
                expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
            });

            it('transformTZ PST to JST', function () {
                var dateString1 = '2021-03-14T01:59:59.999 UTC-0800';
                var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                var formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
                var tz = 'Asia/Tokyo';              // UTC+9

                var dateString2 = 'March 14 2021 18:59:59.999';

                // 2021-03-14T01:59:59.999 UTC-0800 => March 14 2021 18:59:59.999
                expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
            });

            it('transformTZ PDT to JST', function () {
                var dateString1 = '2021-03-14T03:00:00.000 UTC-0700';
                var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                var formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
                var tz = 'Asia/Tokyo';              // UTC+9

                var dateString2 = 'March 14 2021 19:00:00.000';

                // 2021-03-14T03:00:00.000 UTC-0700 => March 14 2021 19:00:00.000
                expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
            });

            it('transformTZ UTC to JST', function () {
                var dateString1 = '2021-03-14T03:00:00.000 UTC+0000';
                var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                var formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
                var tz = 'Asia/Tokyo';              // UTC+9

                var dateString2 = 'March 14 2021 12:00:00.000';

                // 2021-03-14T03:00:00.000 UTC+0000 => March 14 2021 12:00:00.000
                expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
            });
        });

        describe('addYearsTZ', function () {
            it('One year after 2024', function () {
                var date1 = new Date(Date.UTC(2024, 1, 29, 10));
                var date2 = new Date(Date.UTC(2025, 1, 28, 10));

                expect(date.addYearsTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One year before 2024', function () {
                var date1 = new Date(Date.UTC(2024, 1, 29, 10));
                var date2 = new Date(Date.UTC(2023, 1, 28, 10));

                expect(date.addYearsTZ(date1, -1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('Four years after 2024', function () {
                var date1 = new Date(Date.UTC(2024, 1, 29, 10));
                var date2 = new Date(Date.UTC(2028, 1, 29, 10));

                expect(date.addYearsTZ(date1, 4, 'America/Los_Angeles')).to.eql(date2);
            });

            it('Four years before 2024', function () {
                var date1 = new Date(Date.UTC(2024, 1, 29, 10));
                var date2 = new Date(Date.UTC(2020, 1, 29, 10));

                expect(date.addYearsTZ(date1, -4, 'America/Los_Angeles')).to.eql(date2);
            });
        });

        describe('addMonthsTZ', function () {
            it('One month after 2:00 AM on January 31, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 0, 31, 10));
                var date2 = new Date(Date.UTC(2024, 1, 29, 10));

                expect(date.addMonthsTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('Two months after 2:00 AM on January 31, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 0, 31, 10));
                var date2 = new Date(Date.UTC(2024, 2, 31, 9));

                expect(date.addMonthsTZ(date1, 2, 'America/Los_Angeles')).to.eql(date2);
            });

            it('Three months after 2:00 AM on January 31, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 0, 31, 10));
                var date2 = new Date(Date.UTC(2024, 3, 30, 9));

                expect(date.addMonthsTZ(date1, 3, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One month after 1:00 AM on February 10, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 1, 10, 9));
                var date2 = new Date(Date.UTC(2024, 2, 10, 9));

                expect(date.addMonthsTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One month after 2:00 AM on February 10, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 1, 10, 10));
                var date2 = new Date(Date.UTC(2024, 2, 10, 10));

                expect(date.addMonthsTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One month after 3:00 AM on February 10, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 1, 10, 11));
                var date2 = new Date(Date.UTC(2024, 2, 10, 10));

                expect(date.addMonthsTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One month before 1:00 AM on December 3, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 11, 3, 8));
                var date2 = new Date(Date.UTC(2024, 10, 3, 7));

                expect(date.addMonthsTZ(date1, -1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One month before 2:00 AM on December 3, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 11, 3, 9));
                var date2 = new Date(Date.UTC(2024, 10, 3, 8));

                expect(date.addMonthsTZ(date1, -1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One month before 3:00 AM on December 3, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 11, 3, 10));
                var date2 = new Date(Date.UTC(2024, 10, 3, 10));

                expect(date.addMonthsTZ(date1, -1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One month after 1:00 AM on November 3, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 10, 3, 8));
                var date2 = new Date(Date.UTC(2024, 11, 3, 9));

                expect(date.addMonthsTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One month after 1:00 AM PST on November 3, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 10, 3, 9));
                var date2 = new Date(Date.UTC(2024, 11, 3, 9));

                expect(date.addMonthsTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One month after 2:00 AM on November 3, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 10, 3, 10));
                var date2 = new Date(Date.UTC(2024, 11, 3, 10));

                expect(date.addMonthsTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One month after 1:00 AM on October 3, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 9, 3, 8));
                var date2 = new Date(Date.UTC(2024, 10, 3, 8));

                expect(date.addMonthsTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One month after 2:00 AM on October 3, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 9, 3, 9));
                var date2 = new Date(Date.UTC(2024, 10, 3, 10));

                expect(date.addMonthsTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One month after 3:00 AM on October 3, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 9, 3, 10));
                var date2 = new Date(Date.UTC(2024, 10, 3, 11));

                expect(date.addMonthsTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });
        });

        describe('addDaysTZ', function () {
            it('One day after 1:00 AM on March 9, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 2, 9, 9));
                var date2 = new Date(Date.UTC(2024, 2, 10, 9));

                expect(date.addDaysTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One day after 2:00 AM on March 9, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 2, 9, 10));
                var date2 = new Date(Date.UTC(2024, 2, 10, 10));

                expect(date.addDaysTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One day after 3:00 AM on March 9, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 2, 9, 11));
                var date2 = new Date(Date.UTC(2024, 2, 10, 10));

                expect(date.addDaysTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One day before 1:00 AM on March 10, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 2, 10, 9));
                var date2 = new Date(Date.UTC(2024, 2, 9, 9));

                expect(date.addDaysTZ(date1, -1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One day before 3:00 AM on March 10, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 2, 10, 10));
                var date2 = new Date(Date.UTC(2024, 2, 9, 11));

                expect(date.addDaysTZ(date1, -1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One day before 4:00 AM on March 10, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 2, 10, 11));
                var date2 = new Date(Date.UTC(2024, 2, 9, 12));

                expect(date.addDaysTZ(date1, -1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One day before 1:00 AM on November 3, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 10, 3, 8));
                var date2 = new Date(Date.UTC(2024, 10, 2, 8));

                expect(date.addDaysTZ(date1, -1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One day before 1:00 AM PST on November 3, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 10, 3, 9));
                var date2 = new Date(Date.UTC(2024, 10, 2, 8));

                expect(date.addDaysTZ(date1, -1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One day before 2:00 AM on November 3, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 10, 3, 10));
                var date2 = new Date(Date.UTC(2024, 10, 2, 9));

                expect(date.addDaysTZ(date1, -1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One day after 1:00 AM on November 2, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 10, 2, 8));
                var date2 = new Date(Date.UTC(2024, 10, 3, 8));

                expect(date.addDaysTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One day after 2:00 AM on November 2, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 10, 2, 9));
                var date2 = new Date(Date.UTC(2024, 10, 3, 10));

                expect(date.addDaysTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One day after 3:00 AM on November 2, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 10, 2, 10));
                var date2 = new Date(Date.UTC(2024, 10, 3, 11));

                expect(date.addDaysTZ(date1, 1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One day before 1:00 AM on November 4, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 10, 4, 9));
                var date2 = new Date(Date.UTC(2024, 10, 3, 8));

                expect(date.addDaysTZ(date1, -1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One day before 2:00 AM on November 4, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 10, 4, 10));
                var date2 = new Date(Date.UTC(2024, 10, 3, 10));

                expect(date.addDaysTZ(date1, -1, 'America/Los_Angeles')).to.eql(date2);
            });

            it('One day before 3:00 AM on November 4, 2024', function () {
                var date1 = new Date(Date.UTC(2024, 10, 4, 10));
                var date2 = new Date(Date.UTC(2024, 10, 3, 10));

                expect(date.addDaysTZ(date1, -1, 'America/Los_Angeles')).to.eql(date2);
            });
        });

        describe('additional tokens', function () {
            describe('formatTZ', function () {
                it('formatTZ PST', function () {
                    // 2021-03-14T09:59:59.999Z => March 14 2021 1:59:59.999
                    var dateObj = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));
                    var formatString = 'MMMM DD YYYY H:mm:ss.SSS z';
                    var tz = 'America/Los_Angeles';

                    expect(date.formatTZ(dateObj, formatString, tz)).to.equal('March 14 2021 1:59:59.999 PST');
                });

                it('formatTZ PDT (Start of DST)', function () {
                    // 2021-03-14T10:00:00.000Z => March 14 2021 3:00:00.000
                    var dateObj = new Date(Date.UTC(2021, 2, 14, 10, 0, 0, 0));
                    var formatString = 'MMMM D YYYY H:mm:ss.SSS z';
                    var tz = 'America/Los_Angeles';

                    expect(date.formatTZ(dateObj, formatString, tz)).to.equal('March 14 2021 3:00:00.000 PDT');
                });

                it('formatTZ PDT (End of DST)', function () {
                    // 2021-11-07T08:59:59.999Z => November 7 2021 1:59:59.999
                    var dateObj = new Date(Date.UTC(2021, 10, 7, 8, 59, 59, 999));
                    var formatString = 'MMMM D YYYY H:mm:ss.SSS z';
                    var tz = 'America/Los_Angeles';

                    expect(date.formatTZ(dateObj, formatString, tz)).to.equal('November 7 2021 1:59:59.999 PDT');
                });

                it('formatTZ PST', function () {
                    // 2021-11-07T09:00:00.000Z => November 7 2021 1:00:00.000
                    var dateObj = new Date(Date.UTC(2021, 10, 7, 9, 0, 0, 0));
                    var formatString = 'MMMM D YYYY H:mm:ss.SSS z';
                    var tz = 'America/Los_Angeles';

                    expect(date.formatTZ(dateObj, formatString, tz)).to.equal('November 7 2021 1:00:00.000 PST');
                });

                it('formatTZ JST', function () {
                    // 2021-03-14T09:59:59.999Z => March 14 2021 18:59:59.999
                    var dateObj = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));
                    var formatString = 'MMMM DD YYYY H:mm:ss.SSS z';
                    var tz = 'Asia/Tokyo';

                    expect(date.formatTZ(dateObj, formatString, tz)).to.equal('March 14 2021 18:59:59.999 JST');
                });

                it('formatTZ Pacific Standard Time', function () {
                    // 2021-03-14T09:59:59.999Z => March 14 2021 1:59:59.999
                    var dateObj = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));
                    var formatString = 'MMMM DD YYYY H:mm:ss.SSS zz';
                    var tz = 'America/Los_Angeles';

                    expect(date.formatTZ(dateObj, formatString, tz)).to.equal('March 14 2021 1:59:59.999 Pacific Standard Time');
                });

                it('formatTZ Pacific Daylight Time (Start of DST)', function () {
                    // 2021-03-14T10:00:00.000Z => March 14 2021 3:00:00.000
                    var dateObj = new Date(Date.UTC(2021, 2, 14, 10, 0, 0, 0));
                    var formatString = 'MMMM D YYYY H:mm:ss.SSS zz';
                    var tz = 'America/Los_Angeles';

                    expect(date.formatTZ(dateObj, formatString, tz)).to.equal('March 14 2021 3:00:00.000 Pacific Daylight Time');
                });

                it('formatTZ Pacific Daylight Time (End of DST)', function () {
                    // 2021-11-07T08:59:59.999Z => November 7 2021 1:59:59.999
                    var dateObj = new Date(Date.UTC(2021, 10, 7, 8, 59, 59, 999));
                    var formatString = 'MMMM D YYYY H:mm:ss.SSS zz';
                    var tz = 'America/Los_Angeles';

                    expect(date.formatTZ(dateObj, formatString, tz)).to.equal('November 7 2021 1:59:59.999 Pacific Daylight Time');
                });

                it('formatTZ Pacific Standard Time', function () {
                    // 2021-11-07T09:00:00.000Z => November 7 2021 1:00:00.000
                    var dateObj = new Date(Date.UTC(2021, 10, 7, 9, 0, 0, 0));
                    var formatString = 'MMMM D YYYY H:mm:ss.SSS zz';
                    var tz = 'America/Los_Angeles';

                    expect(date.formatTZ(dateObj, formatString, tz)).to.equal('November 7 2021 1:00:00.000 Pacific Standard Time');
                });

                it('formatTZ Japan Standard Time', function () {
                    // 2021-03-14T09:59:59.999Z => March 14 2021 18:59:59.999
                    var dateObj = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));
                    var formatString = 'MMMM DD YYYY H:mm:ss.SSS zz';
                    var tz = 'Asia/Tokyo';

                    expect(date.formatTZ(dateObj, formatString, tz)).to.equal('March 14 2021 18:59:59.999 Japan Standard Time');
                });
            });

            describe('transformTZ', function () {
                it('transformTZ EST to PST', function () {
                    var dateString1 = '2021-11-07T04:00:00.000 UTC-0500';
                    var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                    var formatString2 = 'MMMM D YYYY H:mm:ss.SSS z';
                    var tz = 'America/Los_Angeles';     // UTC-8

                    var dateString2 = 'November 7 2021 1:00:00.000 PST';

                    // 2021-11-07T04:00:00.000 UTC-0500 => November 7 2021 1:00:00.000 PST
                    expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
                });

                it('transformTZ EST to PDT (End of DST)', function () {
                    var dateString1 = '2021-11-07T03:59:59.999 UTC-0500';
                    var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                    var formatString2 = 'MMMM D YYYY H:mm:ss.SSS z';
                    var tz = 'America/Los_Angeles';     // UTC-7 DST

                    var dateString2 = 'November 7 2021 1:59:59.999 PDT';

                    // 2021-11-07T03:59:59.999 UTC-0500 => November 7 2021 1:59:59.999
                    expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
                });

                it('transformTZ EDT to PST', function () {
                    var dateString1 = '2021-03-14T05:59:59.999 UTC-0400';
                    var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                    var formatString2 = 'MMMM D YYYY H:mm:ss.SSS z';
                    var tz = 'America/Los_Angeles';     // UTC-8

                    var dateString2 = 'March 14 2021 1:59:59.999 PST';

                    // 2021-03-14T05:59:59.999 UTC-0400 => March 14 2021 1:59:59.999
                    expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
                });

                it('transformTZ EDT to PDT (Start of DST)', function () {
                    var dateString1 = '2021-03-14T06:00:00.000 UTC-0400';
                    var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                    var formatString2 = 'MMMM D YYYY H:mm:ss.SSS z';
                    var tz = 'America/Los_Angeles';     // UTC-7 DST

                    var dateString2 = 'March 14 2021 3:00:00.000 PDT';

                    // 2021-03-14T06:00:00.000 UTC-0400 => March 14 2021 3:00:00.000
                    expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
                });

                it('transformTZ PST to JST', function () {
                    var dateString1 = '2021-03-14T01:59:59.999 UTC-0800';
                    var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                    var formatString2 = 'MMMM D YYYY H:mm:ss.SSS z';
                    var tz = 'Asia/Tokyo';              // UTC+9

                    var dateString2 = 'March 14 2021 18:59:59.999 JST';

                    // 2021-03-14T01:59:59.999 UTC-0800 => March 14 2021 18:59:59.999
                    expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
                });

                it('transformTZ PDT to JST', function () {
                    var dateString1 = '2021-03-14T03:00:00.000 UTC-0700';
                    var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                    var formatString2 = 'MMMM D YYYY H:mm:ss.SSS z';
                    var tz = 'Asia/Tokyo';              // UTC+9

                    var dateString2 = 'March 14 2021 19:00:00.000 JST';

                    // 2021-03-14T03:00:00.000 UTC-0700 => March 14 2021 19:00:00.000
                    expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
                });

                it('transformTZ UTC to JST', function () {
                    var dateString1 = '2021-03-14T03:00:00.000 UTC+0000';
                    var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                    var formatString2 = 'MMMM D YYYY H:mm:ss.SSS z';
                    var tz = 'Asia/Tokyo';              // UTC+9

                    var dateString2 = 'March 14 2021 12:00:00.000 JST';

                    // 2021-03-14T03:00:00.000 UTC+0000 => March 14 2021 12:00:00.000
                    expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
                });

                it('transformTZ EST to Pacific Standard Time', function () {
                    var dateString1 = '2021-11-07T04:00:00.000 UTC-0500';
                    var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                    var formatString2 = 'MMMM D YYYY H:mm:ss.SSS zz';
                    var tz = 'America/Los_Angeles';     // UTC-8

                    var dateString2 = 'November 7 2021 1:00:00.000 Pacific Standard Time';

                    // 2021-11-07T04:00:00.000 UTC-0500 => November 7 2021 1:00:00.000 PST
                    expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
                });

                it('transformTZ EST to Pacific Daylight Time (End of DST)', function () {
                    var dateString1 = '2021-11-07T03:59:59.999 UTC-0500';
                    var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                    var formatString2 = 'MMMM D YYYY H:mm:ss.SSS zz';
                    var tz = 'America/Los_Angeles';     // UTC-7 DST

                    var dateString2 = 'November 7 2021 1:59:59.999 Pacific Daylight Time';

                    // 2021-11-07T03:59:59.999 UTC-0500 => November 7 2021 1:59:59.999
                    expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
                });

                it('transformTZ EDT to Pacific Standard Time', function () {
                    var dateString1 = '2021-03-14T05:59:59.999 UTC-0400';
                    var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                    var formatString2 = 'MMMM D YYYY H:mm:ss.SSS zz';
                    var tz = 'America/Los_Angeles';     // UTC-8

                    var dateString2 = 'March 14 2021 1:59:59.999 Pacific Standard Time';

                    // 2021-03-14T05:59:59.999 UTC-0400 => March 14 2021 1:59:59.999
                    expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
                });

                it('transformTZ EDT to Pacific Daylight Time (Start of DST)', function () {
                    var dateString1 = '2021-03-14T06:00:00.000 UTC-0400';
                    var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                    var formatString2 = 'MMMM D YYYY H:mm:ss.SSS zz';
                    var tz = 'America/Los_Angeles';     // UTC-7 DST

                    var dateString2 = 'March 14 2021 3:00:00.000 Pacific Daylight Time';

                    // 2021-03-14T06:00:00.000 UTC-0400 => March 14 2021 3:00:00.000
                    expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
                });

                it('transformTZ PST to Japan Standard Time', function () {
                    var dateString1 = '2021-03-14T01:59:59.999 UTC-0800';
                    var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                    var formatString2 = 'MMMM D YYYY H:mm:ss.SSS zz';
                    var tz = 'Asia/Tokyo';              // UTC+9

                    var dateString2 = 'March 14 2021 18:59:59.999 Japan Standard Time';

                    // 2021-03-14T01:59:59.999 UTC-0800 => March 14 2021 18:59:59.999
                    expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
                });

                it('transformTZ PDT to Japan Standard Time', function () {
                    var dateString1 = '2021-03-14T03:00:00.000 UTC-0700';
                    var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                    var formatString2 = 'MMMM D YYYY H:mm:ss.SSS zz';
                    var tz = 'Asia/Tokyo';              // UTC+9

                    var dateString2 = 'March 14 2021 19:00:00.000 Japan Standard Time';

                    // 2021-03-14T03:00:00.000 UTC-0700 => March 14 2021 19:00:00.000
                    expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
                });

                it('transformTZ UTC to Japan Standard Time', function () {
                    var dateString1 = '2021-03-14T03:00:00.000 UTC+0000';
                    var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
                    var formatString2 = 'MMMM D YYYY H:mm:ss.SSS zz';
                    var tz = 'Asia/Tokyo';              // UTC+9

                    var dateString2 = 'March 14 2021 12:00:00.000 Japan Standard Time';

                    // 2021-03-14T03:00:00.000 UTC+0000 => March 14 2021 12:00:00.000
                    expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
                });
            });
        });

        describe('format', function () {
            before(function () {
                process.env.TZ = 'America/Los_Angeles';
            });

            it('"z" equals to "PST"', function () {
                // Before the start of daylight saving time
                var now = new Date(2024, 2, 10, 1, 59, 59, 999);
                expect(date.format(now, 'z')).to.equal('PST');
            });

            it('"z" equals to "PDT"', function () {
                // Daylight saving time started
                var now = new Date(2024, 2, 10, 2, 0, 0, 0);
                expect(date.format(now, 'z')).to.equal('PDT');
            });

            it('"z" equals to "PDT"', function () {
                // Before the end of daylight saving time
                var now = new Date(2024, 10, 3, 1, 0, 0, 0);
                expect(date.format(now, 'z')).to.equal('PDT');
            });

            it('"z" equals to "PST"', function () {
                // Daylight saving time ends
                var now = new Date(2024, 10, 3, 2, 0, 0, 0);
                expect(date.format(now, 'z')).to.equal('PST');
            });

            it('"zz" equals to "Pacific Standard Time"', function () {
                // Before the start of daylight saving time
                var now = new Date(2024, 2, 10, 1, 59, 59, 999);
                expect(date.format(now, 'zz')).to.equal('Pacific Standard Time');
            });

            it('"zz" equals to "Pacific Daylight Time"', function () {
                // Daylight saving time started
                var now = new Date(2024, 2, 10, 2, 0, 0, 0);
                expect(date.format(now, 'zz')).to.equal('Pacific Daylight Time');
            });

            it('"zz" equals to "Pacific Daylight Time"', function () {
                // Before the end of daylight saving time
                var now = new Date(2024, 10, 3, 1, 0, 0, 0);
                expect(date.format(now, 'zz')).to.equal('Pacific Daylight Time');
            });

            it('"zz" equals to "Pacific Standard Time"', function () {
                // Daylight saving time ends
                var now = new Date(2024, 10, 3, 2, 0, 0, 0);
                expect(date.format(now, 'zz')).to.equal('Pacific Standard Time');
            });
        });

        describe('transform', function () {
            before(function () {
                process.env.TZ = 'America/Los_Angeles';
            });

            it('"z" equals to "PST"', function () {
                // Before the start of daylight saving time
                expect(date.transform('10 March 2024, 01:59:59.999', 'D MMMM YYYY, HH:mm:ss.SSS', 'z')).to.equal('PST');
            });

            it('"z" equals to "PDT"', function () {
                // Daylight saving time started
                expect(date.transform('10 March 2024, 02:00:00.000', 'D MMMM YYYY, HH:mm:ss.SSS', 'z')).to.equal('PDT');
            });

            it('"z" equals to "PDT"', function () {
                // Before the end of daylight saving time
                expect(date.transform('3 November 2024, 01:00:00.000', 'D MMMM YYYY, HH:mm:ss.SSS', 'z')).to.equal('PDT');
            });

            it('"z" equals to "PST"', function () {
                // Daylight saving time ends
                expect(date.transform('3 November 2024, 02:00:00.000', 'D MMMM YYYY, HH:mm:ss.SSS', 'z')).to.equal('PST');
            });

            it('"zz" equals to "Pacific Standard Time"', function () {
                // Before the start of daylight saving time
                expect(date.transform('10 March 2024, 01:59:59.999', 'D MMMM YYYY, HH:mm:ss.SSS', 'zz')).to.equal('Pacific Standard Time');
            });

            it('"zz" equals to "Pacific Daylight Time"', function () {
                // Daylight saving time started
                expect(date.transform('10 March 2024, 02:00:00.000', 'D MMMM YYYY, HH:mm:ss.SSS', 'zz')).to.equal('Pacific Daylight Time');
            });

            it('"zz" equals to "Pacific Daylight Time"', function () {
                // Before the end of daylight saving time
                expect(date.transform('3 November 2024, 01:00:00.000', 'D MMMM YYYY, HH:mm:ss.SSS', 'zz')).to.equal('Pacific Daylight Time');
            });

            it('"zz" equals to "Pacific Standard Time"', function () {
                // Daylight saving time ends
                expect(date.transform('3 November 2024, 02:00:00.000', 'D MMMM YYYY, HH:mm:ss.SSS', 'zz')).to.equal('Pacific Standard Time');
            });
        });
    });

}(this));
