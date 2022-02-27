(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        date = global.date || require('../../date-and-time');

    var plugin = 'timezone';

    if (typeof require === 'function') {
        plugin = require('../../plugin/timezone');
    }

    describe('timezone', function () {
        before(function () {
            date.plugin(plugin);
        });

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

        it('parseTZ UTC-8', function () {
            // Mar 14 2021 1:59:59.999 => 2021-03-14T09:59:59.999Z
            var dateString = 'Mar 14 2021 1:59:59.999';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'America/Los_Angeles';     // UTC-8
            var dateObj = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));

            expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
        });

        it('parseTZ Failure1', function () {
            // Mar 14 2021 2:00:00.000 => NaN
            var dateString = 'Mar 14 2021 2:00:00.000';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'America/Los_Angeles';

            expect(date.parseTZ(dateString, formatString, tz)).not.to.equal(NaN);
        });

        it('parseTZ Failure2', function () {
            // Mar 14 2021 2:59:59.999 => NaN
            var dateString = 'Mar 14 2021 2:59:59.999';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'America/Los_Angeles';

            expect(date.parseTZ(dateString, formatString, tz)).not.to.equal(NaN);
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

        it('parseTZ Failure1', function () {
            // Oct 3 2021 2:00:00.000 => NaN
            var dateString = 'Oct 3 2021 2:00:00.000';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'Australia/Adelaide';

            expect(date.parseTZ(dateString, formatString, tz)).not.to.equal(NaN);
        });

        it('parseTZ Failure2', function () {
            // Oct 3 2021 2:59:59.999 => NaN
            var dateString = 'Oct 3 2021 2:59:59.999';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'Australia/Adelaide';

            expect(date.parseTZ(dateString, formatString, tz)).not.to.equal(NaN);
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

}(this));
