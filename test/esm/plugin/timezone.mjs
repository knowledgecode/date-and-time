/*global describe, before, it */
import date from 'date-and-time';
import timezone from 'date-and-time/plugin/timezone';

import expect from 'expect.js';

describe('timezone', () => {
    before(() => date.plugin(timezone));

    it('formatTZ UTC-8', () => {
        // 2021-03-14T09:59:59.999Z => March 14 2021 1:59:59.999
        const dateObj = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));
        const formatString = 'MMMM DD YYYY H:mm:ss.SSS [UTC]Z';
        const tz = 'America/Los_Angeles';     // UTC-8

        expect(date.formatTZ(dateObj, formatString, tz)).to.equal('March 14 2021 1:59:59.999 UTC-0800');
    });

    it('formatTZ UTC-7 (Start of DST)', () => {
        // 2021-03-14T10:00:00.000Z => March 14 2021 3:00:00.000
        const dateObj = new Date(Date.UTC(2021, 2, 14, 10, 0, 0, 0));
        const formatString = 'MMMM D YYYY H:mm:ss.SSS [UTC]Z';
        const tz = 'America/Los_Angeles';     // UTC-7 DST

        expect(date.formatTZ(dateObj, formatString, tz)).to.equal('March 14 2021 3:00:00.000 UTC-0700');
    });

    it('formatTZ UTC-7 (End of DST)', () => {
        // 2021-11-07T08:59:59.999Z => November 7 2021 1:59:59.999
        const dateObj = new Date(Date.UTC(2021, 10, 7, 8, 59, 59, 999));
        const formatString = 'MMMM D YYYY H:mm:ss.SSS [UTC]Z';
        const tz = 'America/Los_Angeles';     // UTC-7 DST

        expect(date.formatTZ(dateObj, formatString, tz)).to.equal('November 7 2021 1:59:59.999 UTC-0700');
    });

    it('formatTZ UTC-8', () => {
        // 2021-11-07T09:00:00.000Z => November 7 2021 1:00:00.000
        const dateObj = new Date(Date.UTC(2021, 10, 7, 9, 0, 0, 0));
        const formatString = 'MMMM D YYYY H:mm:ss.SSS [UTC]Z';
        const tz = 'America/Los_Angeles';     // UTC-8

        expect(date.formatTZ(dateObj, formatString, tz)).to.equal('November 7 2021 1:00:00.000 UTC-0800');
    });

    it('formatTZ UTC+9', () => {
        // 2021-03-14T09:59:59.999Z => March 14 2021 18:59:59.999
        const dateObj = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));
        const formatString = 'MMMM DD YYYY H:mm:ss.SSS [UTC]Z';
        const tz = 'Asia/Tokyo';              // UTC+9

        expect(date.formatTZ(dateObj, formatString, tz)).to.equal('March 14 2021 18:59:59.999 UTC+0900');
    });

    it('parseTZ UTC', () => {
        // Mar 14 2021 1:59:59.999 => 2021-03-14T01:59:59.999Z
        const dateString = 'Mar 14 2021 1:59:59.999';
        const formatString = 'MMM D YYYY H:mm:ss.SSS';
        const tz = 'UTC';
        const dateObj = new Date(Date.UTC(2021, 2, 14, 1, 59, 59, 999));

        expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
    });

    it('parseTZ UTC-8', () => {
        // Mar 14 2021 1:59:59.999 => 2021-03-14T09:59:59.999Z
        const dateString = 'Mar 14 2021 1:59:59.999';
        const formatString = 'MMM D YYYY H:mm:ss.SSS';
        const tz = 'America/Los_Angeles';     // UTC-8
        const dateObj = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));

        expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
    });

    it('parseTZ Failure1', () => {
        // Mar 14 2021 2:00:00.000 => NaN
        const dateString = 'Mar 14 2021 2:00:00.000';
        const formatString = 'MMM D YYYY H:mm:ss.SSS';
        const tz = 'America/Los_Angeles';

        expect(date.parseTZ(dateString, formatString, tz)).not.to.equal(NaN);
    });

    it('parseTZ Failure2', () => {
        // Mar 14 2021 2:59:59.999 => NaN
        const dateString = 'Mar 14 2021 2:59:59.999';
        const formatString = 'MMM D YYYY H:mm:ss.SSS';
        const tz = 'America/Los_Angeles';

        expect(date.parseTZ(dateString, formatString, tz)).not.to.equal(NaN);
    });

    it('parseTZ UTC-7 (Start of DST)', () => {
        // Mar 14 2021 3:00:00.000 => 2021-03-14T10:00:00.000Z
        const dateString = 'Mar 14 2021 3:00:00.000';
        const formatString = 'MMM D YYYY H:mm:ss.SSS';
        const tz = 'America/Los_Angeles';     // UTC-7 DST
        const dateObj = new Date(Date.UTC(2021, 2, 14, 10, 0, 0, 0));

        expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
    });

    it('parseTZ UTC-7 (End of DST)', () => {
        // Nov 7 2021 1:59:59.999 => 2021-11-07T08:59:59.999Z
        const dateString = 'Nov 7 2021 1:59:59.999';
        const formatString = 'MMM D YYYY H:mm:ss.SSS';
        const tz = 'America/Los_Angeles';     // UTC-7 DST
        const dateObj = new Date(Date.UTC(2021, 10, 7, 8, 59, 59, 999));

        expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
    });

    it('parseTZ UTC-8 with Z', () => {
        // Nov 7 2021 1:59:59.999 => 2021-11-07T09:59:59.999Z
        const dateString = 'Nov 7 2021 1:59:59.999 -0800';
        const formatString = 'MMM D YYYY H:mm:ss.SSS Z';
        const tz = 'America/Los_Angeles';     // UTC-8
        const dateObj = new Date(Date.UTC(2021, 10, 7, 9, 59, 59, 999));

        expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
    });

    it('parseTZ UTC-8', () => {
        // Nov 7 2021 2:00:00.000 => 2021-11-07T10:00:00.000Z
        const dateString = 'Nov 7 2021 2:00:00.000';
        const formatString = 'MMM D YYYY H:mm:ss.SSS';
        const tz = 'America/Los_Angeles';     // UTC-8
        const dateObj = new Date(Date.UTC(2021, 10, 7, 10, 0, 0, 0));

        expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
    });

    it('parseTZ UTC+9.5', () => {
        // Oct 3 2021 1:59:59.999 => 2021-10-02T16:29:59.999Z
        const dateString = 'Oct 3 2021 1:59:59.999';
        const formatString = 'MMM D YYYY H:mm:ss.SSS';
        const tz = 'Australia/Adelaide';      // UTC+9.5
        const dateObj = new Date(Date.UTC(2021, 9, 2, 16, 29, 59, 999));

        expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
    });

    it('parseTZ Failure1', () => {
        // Oct 3 2021 2:00:00.000 => NaN
        const dateString = 'Oct 3 2021 2:00:00.000';
        const formatString = 'MMM D YYYY H:mm:ss.SSS';
        const tz = 'Australia/Adelaide';

        expect(date.parseTZ(dateString, formatString, tz)).not.to.equal(NaN);
    });

    it('parseTZ Failure2', () => {
        // Oct 3 2021 2:59:59.999 => NaN
        const dateString = 'Oct 3 2021 2:59:59.999';
        const formatString = 'MMM D YYYY H:mm:ss.SSS';
        const tz = 'Australia/Adelaide';

        expect(date.parseTZ(dateString, formatString, tz)).not.to.equal(NaN);
    });

    it('parseTZ UTC+10.5 (Start of DST)', () => {
        // Oct 3 2021 3:00:00.000 => 2021-10-02T16:30:00.000Z
        const dateString = 'Oct 3 2021 3:00:00.000';
        const formatString = 'MMM D YYYY H:mm:ss.SSS';
        const tz = 'Australia/Adelaide';      // UTC+10.5 DST
        const dateObj = new Date(Date.UTC(2021, 9, 2, 16, 30, 0, 0));

        expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
    });

    it('parseTZ UTC+10.5 (End of DST)', () => {
        // Apr 4 2021 2:59:59.999 => 2021-04-03T16:29:59.999Z
        const dateString = 'Apr 4 2021 2:59:59.999';
        const formatString = 'MMM D YYYY H:mm:ss.SSS';
        const tz = 'Australia/Adelaide';      // UTC+10.5 DST
        const dateObj = new Date(Date.UTC(2021, 3, 3, 16, 29, 59, 999));

        expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
    });

    it('parseTZ UTC+9.5 with Z', () => {
        // Apr 4 2021 2:59:59.999 => 2021-04-03T17:29:59.999Z
        const dateString = 'Apr 4 2021 2:59:59.999 +0930';
        const formatString = 'MMM D YYYY H:mm:ss.SSS Z';
        const tz = 'Australia/Adelaide';      // UTC+9.5
        const dateObj = new Date(Date.UTC(2021, 3, 3, 17, 29, 59, 999));

        expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
    });

    it('parseTZ UTC+9.5', () => {
        // Apr 4 2021 3:00:00.000 => 2021-04-03T17:30:00.000Z
        const dateString = 'Apr 4 2021 3:00:00.000';
        const formatString = 'MMM D YYYY H:mm:ss.SSS';
        const tz = 'Australia/Adelaide';      // UTC+9.5
        const dateObj = new Date(Date.UTC(2021, 3, 3, 17, 30, 0, 0));

        expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
    });

    it('transformTZ EST to PST', () => {
        const dateString1 = '2021-11-07T04:00:00.000 UTC-0500';
        const formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
        const formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
        const tz = 'America/Los_Angeles';     // UTC-8

        const dateString2 = 'November 7 2021 1:00:00.000';

        // 2021-11-07T04:00:00.000 UTC-0500 => November 7 2021 1:00:00.000
        expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
    });

    it('transformTZ EST to PDT (End of DST)', () => {
        const dateString1 = '2021-11-07T03:59:59.999 UTC-0500';
        const formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
        const formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
        const tz = 'America/Los_Angeles';     // UTC-7 DST

        const dateString2 = 'November 7 2021 1:59:59.999';

        // 2021-11-07T03:59:59.999 UTC-0500 => November 7 2021 1:59:59.999
        expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
    });

    it('transformTZ EDT to PST', () => {
        const dateString1 = '2021-03-14T05:59:59.999 UTC-0400';
        const formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
        const formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
        const tz = 'America/Los_Angeles';     // UTC-8

        const dateString2 = 'March 14 2021 1:59:59.999';

        // 2021-03-14T05:59:59.999 UTC-0400 => March 14 2021 1:59:59.999
        expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
    });

    it('transformTZ EDT to PDT (Start of DST)', () => {
        const dateString1 = '2021-03-14T06:00:00.000 UTC-0400';
        const formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
        const formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
        const tz = 'America/Los_Angeles';     // UTC-7 DST

        const dateString2 = 'March 14 2021 3:00:00.000';

        // 2021-03-14T06:00:00.000 UTC-0400 => March 14 2021 3:00:00.000
        expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
    });

    it('transformTZ PST to JST', () => {
        const dateString1 = '2021-03-14T01:59:59.999 UTC-0800';
        const formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
        const formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
        const tz = 'Asia/Tokyo';              // UTC+9

        const dateString2 = 'March 14 2021 18:59:59.999';

        // 2021-03-14T01:59:59.999 UTC-0800 => March 14 2021 18:59:59.999
        expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
    });

    it('transformTZ PDT to JST', () => {
        const dateString1 = '2021-03-14T03:00:00.000 UTC-0700';
        const formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
        const formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
        const tz = 'Asia/Tokyo';              // UTC+9

        const dateString2 = 'March 14 2021 19:00:00.000';

        // 2021-03-14T03:00:00.000 UTC-0700 => March 14 2021 19:00:00.000
        expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
    });

    it('transformTZ UTC to JST', () => {
        const dateString1 = '2021-03-14T03:00:00.000 UTC+0000';
        const formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
        const formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
        const tz = 'Asia/Tokyo';              // UTC+9

        const dateString2 = 'March 14 2021 12:00:00.000';

        // 2021-03-14T03:00:00.000 UTC+0000 => March 14 2021 12:00:00.000
        expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
    });
});
