/*global describe, before, it, after */
(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        date = global.date || require('date-and-time'),
        en = typeof require === 'function' ? require('date-and-time/locale/en') : 'en',
        es = typeof require === 'function' ? require('date-and-time/locale/es') : 'es',
        ja = typeof require === 'function' ? require('date-and-time/locale/ja') : 'ja';

    describe('Change locale and revert, then format', function () {
        before(function () {
            date.locale(ja);
            date.locale(en);
        });

        it('"YYYY" equals to "0001"', function () {
            var now = new Date(0, -1899 * 12, 1);
            expect(date.format(now, 'YYYY')).to.equal('0001');
        });
        it('"YYYY" equals to "0099"', function () {
            var now = new Date(0, -1801 * 12, 1);
            expect(date.format(now, 'YYYY')).to.equal('0099');
        });
        it('"YYYY" equals to "0100"', function () {
            var now = new Date(100, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('0100');
        });
        it('"YYYY" equals to "1800"', function () {
            var now = new Date(1800, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('1800');
        });
        it('"YYYY" equals to "1899"', function () {
            var now = new Date(1899, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('1899');
        });
        it('"YYYY" equals to "1900"', function () {
            var now = new Date(1900, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('1900');
        });
        it('"YYYY" equals to "1901"', function () {
            var now = new Date(1901, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('1901');
        });
        it('"YYYY" equals to "1970"', function () {
            var now = new Date(1970, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('1970');
        });
        it('"YYYY" equals to "1999"', function () {
            var now = new Date(1999, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('1999');
        });
        it('"YYYY" equals to "2000"', function () {
            var now = new Date(2000, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('2000');
        });
        it('"YYYY" equals to "2001"', function () {
            var now = new Date(2001, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('2001');
        });
        it('"YYYY" equals to "9999"', function () {
            var now = new Date(9999, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('9999');
        });
        it('"YYYY" as UTC equals to "XXXX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'YYYY', utc)).to.equal('' + now.getUTCFullYear());
        });
        it('"YY" equals to "00"', function () {
            var now = new Date(0, 0, 1);
            expect(date.format(now, 'YY')).to.equal('00');
        });
        it('"YY" equals to "01"', function () {
            var now = new Date(0, -1899 * 12, 1);
            expect(date.format(now, 'YY')).to.equal('01');
        });
        it('"YY" equals to "99"', function () {
            var now = new Date(0, -1801 * 12, 1);
            expect(date.format(now, 'YY')).to.equal('99');
        });
        it('"YY" equals to "00"', function () {
            var now = new Date(100, 0, 1);
            expect(date.format(now, 'YY')).to.equal('00');
        });
        it('"YY" equals to "01"', function () {
            var now = new Date(101, 0, 1);
            expect(date.format(now, 'YY')).to.equal('01');
        });
        it('"YY" equals to "99"', function () {
            var now = new Date(199, 0, 1);
            expect(date.format(now, 'YY')).to.equal('99');
        });
        it('"YY" equals to "00"', function () {
            var now = new Date(1900, 0, 1);
            expect(date.format(now, 'YY')).to.equal('00');
        });
        it('"YY" equals to "01"', function () {
            var now = new Date(1901, 0, 1);
            expect(date.format(now, 'YY')).to.equal('01');
        });
        it('"YY" equals to "99"', function () {
            var now = new Date(1999, 0, 1);
            expect(date.format(now, 'YY')).to.equal('99');
        });
        it('"YY" equals to "00"', function () {
            var now = new Date(2000, 0, 1);
            expect(date.format(now, 'YY')).to.equal('00');
        });
        it('"YY" equals to "01"', function () {
            var now = new Date(2001, 0, 1);
            expect(date.format(now, 'YY')).to.equal('01');
        });
        it('"YY" equals to "99"', function () {
            var now = new Date(2099, 0, 1);
            expect(date.format(now, 'YY')).to.equal('99');
        });
        it('"YY" equals to "00"', function () {
            var now = new Date(9900, 0, 1);
            expect(date.format(now, 'YY')).to.equal('00');
        });
        it('"YY" equals to "01"', function () {
            var now = new Date(9901, 0, 1);
            expect(date.format(now, 'YY')).to.equal('01');
        });
        it('"YY" equals to "99"', function () {
            var now = new Date(9999, 0, 1);
            expect(date.format(now, 'YY')).to.equal('99');
        });
        it('"YY" as UTC equals to "XX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'YY')).to.equal('' + (now.getUTCFullYear() - 2000));
        });
        it('"Y" equals to "1"', function () {
            var now = new Date(0, -1899 * 12, 1);
            expect(date.format(now, 'Y')).to.equal('1');
        });
        it('"Y" equals to "10"', function () {
            var now = new Date(0, -1890 * 12, 1);
            expect(date.format(now, 'Y')).to.equal('10');
        });
        it('"Y" equals to "100"', function () {
            var now = new Date(100, 0, 1);
            expect(date.format(now, 'Y')).to.equal('100');
        });
        it('"Y" equals to "1000"', function () {
            var now = new Date(1000, 0, 1);
            expect(date.format(now, 'Y')).to.equal('1000');
        });
        it('"Y" equals to "10000"', function () {
            var now = new Date(10000, 0, 1);
            expect(date.format(now, 'Y')).to.equal('10000');
        });
        it('"Y" as UTC equals to "X"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'Y')).to.equal('' + (now.getUTCFullYear()));
        });
        it('"MMMM" equals to "January"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MMMM')).to.equal('January');
        });
        it('"MMMM" equals to "December"', function () {
            var now = new Date(2015, 11, 1);
            expect(date.format(now, 'MMMM')).to.equal('December');
        });
        it('"MMM" equals to "Jan"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MMM')).to.equal('Jan');
        });
        it('"MMM" equals to "Dec"', function () {
            var now = new Date(2015, 11, 1);
            expect(date.format(now, 'MMM')).to.equal('Dec');
        });
        it('"MM" equals to "01"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MM')).to.equal('01');
        });
        it('"MM" equals to "12"', function () {
            var now = new Date(2015, 11, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MM')).to.equal('12');
        });
        it('"MM" as UTC equals to "XX"', function () {
            var now = new Date(2015, 10, 1, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'MM', utc)).to.equal('' + (now.getUTCMonth() + 1));
        });
        it('"M" equals to "1"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'M')).to.equal('1');
        });
        it('"M" equals to "12"', function () {
            var now = new Date(2015, 11, 1, 12, 34, 56, 789);
            expect(date.format(now, 'M')).to.equal('12');
        });
        it('"M" as UTC equals to "XX"', function () {
            var now = new Date(2015, 10, 1, 12, 34, 56, 789);
            expect(date.format(now, 'M')).to.equal('' + (now.getUTCMonth() + 1));
        });
        it('"DD" equals to "01"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'DD')).to.equal('01');
        });
        it('"DD" equals to "31"', function () {
            var now = new Date(2015, 0, 31, 12, 34, 56, 789);
            expect(date.format(now, 'DD')).to.equal('31');
        });
        it('"DD" equals to "XX"', function () {
            var now = new Date(2015, 0, 15, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'DD', utc)).to.equal('' + now.getUTCDate());
        });
        it('"D" equals to "1"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'D')).to.equal('1');
        });
        it('"D" equals to "31"', function () {
            var now = new Date(2015, 0, 31, 12, 34, 56, 789);
            expect(date.format(now, 'D')).to.equal('31');
        });
        it('"D" as UTC equals to "XX"', function () {
            var now = new Date(2015, 0, 15, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'D', utc)).to.equal('' + now.getUTCDate());
        });
        it('"dddd" equals to "Tuesday"', function () {
            var now = new Date(2015, 0, 6, 12, 34, 56, 789);
            expect(date.format(now, 'dddd')).to.equal('Tuesday');
        });
        it('"dddd" equals to "Thursday"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'dddd')).to.equal('Thursday');
        });
        it('"ddd" equals to "Sun"', function () {
            var now = new Date(2015, 0, 4, 12, 34, 56, 789);
            expect(date.format(now, 'ddd')).to.equal('Sun');
        });
        it('"ddd" equals to "Wed"', function () {
            var now = new Date(2015, 0, 7, 12, 34, 56, 789);
            expect(date.format(now, 'ddd')).to.equal('Wed');
        });
        it('"dd" equals to "Fr"', function () {
            var now = new Date(2015, 0, 2, 12, 34, 56, 789);
            expect(date.format(now, 'dd')).to.equal('Fr');
        });
        it('"dd" equals to "Sa"', function () {
            var now = new Date(2015, 0, 3, 12, 34, 56, 789);
            expect(date.format(now, 'dd')).to.equal('Sa');
        });
        it('"HH" equals to "12"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'HH')).to.equal('12');
        });
        it('"HH" equals to "00"', function () {
            var now = new Date(2015, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'HH')).to.equal('00');
        });
        it('"HH" equals to "23"', function () {
            var now = new Date(2015, 0, 1, 23, 34, 56, 789);
            expect(date.format(now, 'HH')).to.equal('23');
        });
        it('"HH" as UTC equals to "XX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'HH', utc)).to.equal(('0' + now.getUTCHours()).slice(-2));
        });
        it('"H" equals to "12"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'H')).to.equal('12');
        });
        it('"H" equals to "0"', function () {
            var now = new Date(2015, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'H')).to.equal('0');
        });
        it('"H" equals to "23"', function () {
            var now = new Date(2015, 0, 1, 23, 34, 56, 789);
            expect(date.format(now, 'H')).to.equal('23');
        });
        it('"H" as UTC equals to "XX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'H', utc)).to.equal('' + now.getUTCHours());
        });
        it('"hh A" equals to "12 PM"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'hh A')).to.equal('12 PM');
        });
        it('"hh A" equals to "12 AM"', function () {
            var now = new Date(2015, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'hh A')).to.equal('12 AM');
        });
        it('"hh A" equals to "11 PM"', function () {
            var now = new Date(2015, 0, 1, 23, 34, 56, 789);
            expect(date.format(now, 'hh A')).to.equal('11 PM');
        });
        it('"hh A" equals to "01 AM"', function () {
            var now = new Date(2015, 0, 1, 1, 34, 56, 789);
            expect(date.format(now, 'hh A')).to.equal('01 AM');
        });
        it('"hh A" equals to "01 PM"', function () {
            var now = new Date(2015, 0, 1, 13, 34, 56, 789);
            expect(date.format(now, 'hh A')).to.equal('01 PM');
        });
        it('"h A" equals to "12 PM"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'h A')).to.equal('12 PM');
        });
        it('"h A" equals to "12 AM"', function () {
            var now = new Date(2015, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'h A')).to.equal('12 AM');
        });
        it('"h A" equals to "11 PM"', function () {
            var now = new Date(2015, 0, 1, 23, 34, 56, 789);
            expect(date.format(now, 'h A')).to.equal('11 PM');
        });
        it('"h A" equals to "1 AM"', function () {
            var now = new Date(2015, 0, 1, 1, 34, 56, 789);
            expect(date.format(now, 'h A')).to.equal('1 AM');
        });
        it('"h A" equals to "1 PM"', function () {
            var now = new Date(2015, 0, 1, 13, 34, 56, 789);
            expect(date.format(now, 'h A')).to.equal('1 PM');
        });
        it('"mm" equals to "34"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'mm')).to.equal('34');
        });
        it('"mm" equals to "00"', function () {
            var now = new Date(2015, 0, 1, 12, 0, 56, 789);
            expect(date.format(now, 'mm')).to.equal('00');
        });
        it('"mm" equals to "59"', function () {
            var now = new Date(2015, 0, 1, 12, 59, 56, 789);
            expect(date.format(now, 'mm')).to.equal('59');
        });
        it('"mm" as UTC equals to "XX"', function () {
            var now = new Date(2015, 0, 1, 12, 59, 56, 789),
                utc = true;
            expect(date.format(now, 'mm', utc)).to.equal(('0' + now.getUTCMinutes()).slice(-2));
        });
        it('"m" equals to "34"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'm')).to.equal('34');
        });
        it('"m" equals to "0"', function () {
            var now = new Date(2015, 0, 1, 12, 0, 56, 789);
            expect(date.format(now, 'm')).to.equal('0');
        });
        it('"m" equals to "59"', function () {
            var now = new Date(2015, 0, 1, 12, 59, 56, 789);
            expect(date.format(now, 'm')).to.equal('59');
        });
        it('"m" as UTC equals to "XX"', function () {
            var now = new Date(2015, 0, 1, 12, 59, 56, 789),
                utc = true;
            expect(date.format(now, 'm', utc)).to.equal('' + now.getUTCMinutes());
        });
        it('"ss" equals to "56"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'ss')).to.equal('56');
        });
        it('"ss" equals to "00"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 0, 789);
            expect(date.format(now, 'ss')).to.equal('00');
        });
        it('"ss" equals to "59"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 59, 789);
            expect(date.format(now, 'ss')).to.equal('59');
        });
        it('"ss" as UTC equals to "59"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 59, 789),
                utc = true;
            expect(date.format(now, 'ss', utc)).to.equal(('0' + now.getUTCSeconds()).slice(-2));
        });
        it('"s" equals to "56"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 's')).to.equal('56');
        });
        it('"s" equals to "0"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 0, 789);
            expect(date.format(now, 's')).to.equal('0');
        });
        it('"s" equals to "59"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 59, 789);
            expect(date.format(now, 's')).to.equal('59');
        });
        it('"s" as UTC equals to "59"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 59, 789),
                utc = true;
            expect(date.format(now, 's', utc)).to.equal('' + now.getUTCSeconds());
        });
        it('"SSS" equals to "789"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'SSS')).to.equal('789');
        });
        it('"SSS" equals to "000"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 0);
            expect(date.format(now, 'SSS')).to.equal('000');
        });
        it('"SSS" equals to "001"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 1);
            expect(date.format(now, 'SSS')).to.equal('001');
        });
        it('"SSS" as UTC equals to "XXX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 10),
                utc = true;
            expect(date.format(now, 'SSS', utc)).to.equal(('00' + now.getUTCMilliseconds()).slice(-3));
        });
        it('"SS" equals to "78"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'SS')).to.equal('78');
        });
        it('"SS" equals to "00"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 0);
            expect(date.format(now, 'SS')).to.equal('00');
        });
        it('"SS" equals to "00"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 1);
            expect(date.format(now, 'SS')).to.equal('00');
        });
        it('"SS" as UTC equals to "XX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 9),
                utc = true;
            expect(date.format(now, 'SS', utc)).to.equal(('00' + now.getUTCMilliseconds()).slice(-3).slice(0, 2));
        });
        it('"S" equals to "7"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'S')).to.equal('7');
        });
        it('"S" equals to "0"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 0);
            expect(date.format(now, 'S')).to.equal('0');
        });
        it('"S" equals to "0"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 1);
            expect(date.format(now, 'S')).to.equal('0');
        });
        it('"S" equals to "X"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'S', utc)).to.equal(('00' + now.getUTCMilliseconds()).slice(-3).slice(0, 1));
        });
        it('"Z" matches "+XXXX/-XXXX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'Z')).to.match(/^[+-]\d{4}$/);
        });
        it('"Z" as UTC equals to "+0000"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'Z', utc)).to.equal('+0000');
        });
        it('"ZZ" matches "+XX:XX/-XX:XX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'ZZ')).to.match(/^[+-]\d{2}:\d{2}$/);
        });
        it('"ZZ" as UTC equals to "+00:00"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'ZZ', utc)).to.equal('+00:00');
        });
        it('"ddd MMM DD YYYY HH:mm:ss" equals to "Thu Jan 01 2015 12:34:56"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'ddd MMM DD YYYY HH:mm:ss')).to.equal('Thu Jan 01 2015 12:34:56');
        });
        it('"YYYY/MM/DD HH:mm:ss.SSS" equals to "1900/01/01 00:00:00.000"', function () {
            var now = new Date(0, 0, 1);
            expect(date.format(now, 'YYYY/MM/DD HH:mm:ss.SSS')).to.equal('1900/01/01 00:00:00.000');
        });
        it('"YY/MM/DD HH:mm:ss.SSS" equals to "00/01/01 00:00:00.000"', function () {
            var now = new Date(0, 0, 1);
            expect(date.format(now, 'YY/MM/DD HH:mm:ss.SSS')).to.equal('00/01/01 00:00:00.000');
        });
        it('"Y/M/D H:m:s.SSS" equals to "999/1/1 0:0:0.000"', function () {
            var now = new Date(999, 0, 1);
            expect(date.format(now, 'Y/M/D H:m:s.SSS')).to.equal('999/1/1 0:0:0.000');
        });
        it('"dddd, MMMM D, YYYY h A" equals to "Saturday, January 1, 2000 10 AM"', function () {
            var now = new Date(2000, 0, 1, 10, 0, 0);
            expect(date.format(now, 'dddd, MMMM D, YYYY h A')).to.equal('Saturday, January 1, 2000 10 AM');
        });
        it('"[dddd, MMMM D, YYYY h A]" equals to "dddd, MMMM D, YYYY h A"', function () {
            var now = new Date(2000, 0, 1, 10, 0, 0);
            expect(date.format(now, '[dddd, MMMM D, YYYY h A]')).to.equal('dddd, MMMM D, YYYY h A');
        });
        it('"[dddd], MMMM [D], YYYY [h] A" equals to "dddd, January D, 2000 h AM"', function () {
            var now = new Date(2000, 0, 1, 10, 0, 0);
            expect(date.format(now, '[dddd], MMMM [D], YYYY [h] A')).to.equal('dddd, January D, 2000 h AM');
        });
        it('"[[dddd], MMMM [D], YYYY [h] A]" equals to "[dddd], MMMM [D], YYYY [h] A"', function () {
            var now = new Date(2000, 0, 1, 10, 0, 0);
            expect(date.format(now, '[[dddd], MMMM [D], YYYY [h] A]')).to.equal('[dddd], MMMM [D], YYYY [h] A');
        });
        it('"[dddd], MMMM [[D], YYYY] [h] A" equals to "dddd, January [D], YYYY h AM"', function () {
            var now = new Date(2000, 0, 1, 10, 0, 0);
            expect(date.format(now, '[dddd], MMMM [[D], YYYY] [h] A')).to.equal('dddd, January [D], YYYY h AM');
        });

        after(function () {
            date.locale(en);
        });
    });

    describe('Change locale and revert, then parse', function () {
        before(function () {
            date.locale(ja);
            date.locale(en);
        });

        it('YYYY', function () {
            expect(isNaN(date.parse('0000', 'YYYY'))).to.be(true);
        });
        it('YYYY', function () {
            var now = new Date(0, -1899 * 12, 1);
            expect(date.parse('0001', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(0, -1801 * 12, 1);
            expect(date.parse('0099', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(100, 0, 1);
            expect(date.parse('0100', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(1899, 0, 1);
            expect(date.parse('1899', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(1900, 0, 1);
            expect(date.parse('1900', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(1969, 0, 1);
            expect(date.parse('1969', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(1970, 0, 1);
            expect(date.parse('1970', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(1999, 0, 1);
            expect(date.parse('1999', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(2000, 0, 1);
            expect(date.parse('2000', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(9999, 0, 1);
            expect(date.parse('9999', 'YYYY')).to.eql(now);
        });
        it('Y', function () {
            expect(isNaN(date.parse('0', 'Y'))).to.be(true);
        });
        it('Y', function () {
            var now = new Date(0, -1899 * 12, 1);
            expect(date.parse('1', 'Y')).to.eql(now);
        });
        it('Y', function () {
            var now = new Date(0, -1801 * 12, 1);
            expect(date.parse('99', 'Y')).to.eql(now);
        });
        it('Y', function () {
            var now = new Date(100, 0, 1);
            expect(date.parse('100', 'Y')).to.eql(now);
        });
        it('YYYY MMMM', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015 January', 'YYYY MMMM')).to.eql(now);
        });
        it('YYYY MMMM', function () {
            var now = new Date(2015, 11, 1);
            expect(date.parse('2015 December', 'YYYY MMMM')).to.eql(now);
        });
        it('YYYY MMMM', function () {
            expect(isNaN(date.parse('2015 Zero', 'YYYY MMMM'))).to.be(true);
        });
        it('YYYY MMM', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015 Jan', 'YYYY MMM')).to.eql(now);
        });
        it('YYYY MMM', function () {
            var now = new Date(2015, 11, 1);
            expect(date.parse('2015 Dec', 'YYYY MMM')).to.eql(now);
        });
        it('YYYY MMM', function () {
            expect(isNaN(date.parse('2015 Zero', 'YYYY MMM'))).to.be(true);
        });
        it('YYYY-MM', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015-01', 'YYYY-MM')).to.eql(now);
        });
        it('YYYY-MM', function () {
            var now = new Date(2015, 11, 1);
            expect(date.parse('2015-12', 'YYYY-MM')).to.eql(now);
        });
        it('YYYY-MM', function () {
            expect(isNaN(date.parse('2015-00', 'YYYY-MM'))).to.be(true);
        });
        it('YYYY-M', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015-1', 'YYYY-M')).to.eql(now);
        });
        it('YYYY-M', function () {
            var now = new Date(2015, 11, 1);
            expect(date.parse('2015-12', 'YYYY-M')).to.eql(now);
        });
        it('YYYY-M', function () {
            expect(isNaN(date.parse('2015-0', 'YYYY-M'))).to.be(true);
        });
        it('YYYY-MM-DD', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015-01-01', 'YYYY-MM-DD')).to.eql(now);
        });
        it('YYYY-MM-DD', function () {
            var now = new Date(2015, 11, 31);
            expect(date.parse('2015-12-31', 'YYYY-MM-DD')).to.eql(now);
        });
        it('YYYY-MM-DD', function () {
            expect(isNaN(date.parse('2015-00-00', 'YYYY-MM-DD'))).to.be(true);
        });
        it('YYYY-M-D', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015-1-1', 'YYYY-M-D')).to.eql(now);
        });
        it('YYYY-M-D', function () {
            var now = new Date(2015, 11, 31);
            expect(date.parse('2015-12-31', 'YYYY-M-D')).to.eql(now);
        });
        it('YYYY-M-D', function () {
            expect(isNaN(date.parse('2015-0-0', 'YYYY-M-D'))).to.be(true);
        });
        it('YYYY-MM-DD HH', function () {
            var now = new Date(2015, 0, 1, 0);
            expect(date.parse('2015-01-01 00', 'YYYY-MM-DD HH')).to.eql(now);
        });
        it('YYYY-MM-DD HH', function () {
            var now = new Date(2015, 11, 31, 23);
            expect(date.parse('2015-12-31 23', 'YYYY-MM-DD HH')).to.eql(now);
        });
        it('YYYY-MM-DD HH', function () {
            expect(isNaN(date.parse('2015-00-00 24', 'YYYY-MM-DD HH'))).to.be(true);
        });
        it('YYYY-M-D H', function () {
            var now = new Date(2015, 0, 1, 0);
            expect(date.parse('2015-1-1 0', 'YYYY-M-D H')).to.eql(now);
        });
        it('YYYY-M-D H', function () {
            var now = new Date(2015, 11, 31, 23);
            expect(date.parse('2015-12-31 23', 'YYYY-M-D H')).to.eql(now);
        });
        it('YYYY-M-D H', function () {
            expect(isNaN(date.parse('2015-0-0 24', 'YYYY-M-D H'))).to.be(true);
        });
        it('YYYY-M-D hh A', function () {
            var now = new Date(2015, 0, 1, 0);
            expect(date.parse('2015-1-1 12 AM', 'YYYY-M-D hh A')).to.eql(now);
        });
        it('YYYY-M-D hh A', function () {
            var now = new Date(2015, 11, 31, 23);
            expect(date.parse('2015-12-31 11 PM', 'YYYY-M-D hh A')).to.eql(now);
        });
        it('YYYY-M-D hh A', function () {
            expect(isNaN(date.parse('2015-0-0 12 AM', 'YYYY-M-D hh A'))).to.be(true);
        });
        it('YYYY-M-D h A', function () {
            var now = new Date(2015, 0, 1, 0);
            expect(date.parse('2015-1-1 12 AM', 'YYYY-M-D h A')).to.eql(now);
        });
        it('YYYY-M-D h A', function () {
            var now = new Date(2015, 11, 31, 23);
            expect(date.parse('2015-12-31 11 PM', 'YYYY-M-D h A')).to.eql(now);
        });
        it('YYYY-M-D h A', function () {
            expect(isNaN(date.parse('2015-0-0 12 AM', 'YYYY-M-D h A'))).to.be(true);
        });
        it('YYYY-MM-DD HH:mm', function () {
            var now = new Date(2015, 0, 1, 0, 0);
            expect(date.parse('2015-01-01 00:00', 'YYYY-MM-DD HH:mm')).to.eql(now);
        });
        it('YYYY-MM-DD HH:mm', function () {
            var now = new Date(2015, 11, 31, 23, 59);
            expect(date.parse('2015-12-31 23:59', 'YYYY-MM-DD HH:mm')).to.eql(now);
        });
        it('YYYY-MM-DD HH:mm', function () {
            expect(isNaN(date.parse('2015-00-00 24:60', 'YYYY-MM-DD HH:mm'))).to.be(true);
        });
        it('YYYY-M-D H:m', function () {
            var now = new Date(2015, 0, 1, 0, 0);
            expect(date.parse('2015-1-1 0:0', 'YYYY-M-D H:m')).to.eql(now);
        });
        it('YYYY-M-D H:m', function () {
            var now = new Date(2015, 11, 31, 23, 59);
            expect(date.parse('2015-12-31 23:59', 'YYYY-M-D H:m')).to.eql(now);
        });
        it('YYYY-M-D H:m', function () {
            expect(isNaN(date.parse('2015-0-0 24:60', 'YYYY-M-D H:m'))).to.be(true);
        });
        it('YYYY-MM-DD HH:mm:ss', function () {
            var now = new Date(2015, 0, 1, 0, 0, 0);
            expect(date.parse('2015-01-01 00:00:00', 'YYYY-MM-DD HH:mm:ss')).to.eql(now);
        });
        it('YYYY-MM-DD HH:mm:ss', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59);
            expect(date.parse('2015-12-31 23:59:59', 'YYYY-MM-DD HH:mm:ss')).to.eql(now);
        });
        it('YYYY-MM-DD HH:mm:ss', function () {
            expect(isNaN(date.parse('2015-00-00 24:60:60', 'YYYY-MM-DD HH:mm:ss'))).to.be(true);
        });
        it('YYYY-M-D H:m:s', function () {
            var now = new Date(2015, 0, 1, 0, 0);
            expect(date.parse('2015-1-1 0:0:0', 'YYYY-M-D H:m:s')).to.eql(now);
        });
        it('YYYY-M-D H:m:s', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59);
            expect(date.parse('2015-12-31 23:59:59', 'YYYY-M-D H:m:s')).to.eql(now);
        });
        it('YYYY-M-D H:m:s', function () {
            expect(isNaN(date.parse('2015-0-0 24:60:60', 'YYYY-M-D H:m:s'))).to.be(true);
        });
        it('YYYY-M-D H:m:s.SSS', function () {
            var now = new Date(2015, 0, 1, 0, 0, 0);
            expect(date.parse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.SSS')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59, 999);
            expect(date.parse('2015-12-31 23:59:59.999', 'YYYY-M-D H:m:s.SSS')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS', function () {
            expect(isNaN(date.parse('2015-0-0 24:60:61.000', 'YYYY-M-D H:m:s.SSS'))).to.be(true);
        });
        it('YYYY-M-D H:m:s.SS', function () {
            var now = new Date(2015, 0, 1, 0, 0, 0);
            expect(date.parse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.SS')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SS', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59, 990);
            expect(date.parse('2015-12-31 23:59:59.99', 'YYYY-M-D H:m:s.SS')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SS', function () {
            expect(isNaN(date.parse('2015-0-0 24:60:61.00', 'YYYY-M-D H:m:s.SS'))).to.be(true);
        });
        it('YYYY-M-D H:m:s.S', function () {
            var now = new Date(2015, 0, 1, 0, 0, 0);
            expect(date.parse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.S')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.S', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59, 900);
            expect(date.parse('2015-12-31 23:59:59.9', 'YYYY-M-D H:m:s.S')).to.eql(now);
        });
        it('YYYY M D H m s S', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59, 900);
            expect(date.parse('2015-12-31 23:59:59.9', 'YYYY M D H m s S')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.S', function () {
            expect(isNaN(date.parse('2015-0-0 24:60:61.0', 'YYYY-M-D H:m:s.S'))).to.be(true);
        });
        it('YYYY-M-D H:m:s.SSS Z', function () {
            var now = new Date(Date.UTC(2015, 0, 1, 0, 0, 0));
            expect(date.parse('2015-1-1 0:0:0.0 +0000', 'YYYY-M-D H:m:s.SSS Z')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS Z', function () {
            var now = new Date(Date.UTC(2015, 11, 31, 23, 59, 59, 999));
            expect(date.parse('2015-12-31 23:00:59.999 -0059', 'YYYY-M-D H:m:s.SSS Z')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS Z', function () {
            var now = new Date(Date.UTC(2015, 11, 31, 21, 59, 59, 999));
            expect(date.parse('2015-12-31 09:59:59.999 -1200', 'YYYY-M-D H:m:s.SSS Z')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS Z', function () {
            expect(isNaN(date.parse('2015-12-31 09:58:59.999 -1201', 'YYYY-M-D H:m:s.SSS Z'))).to.be(true);
        });
        it('YYYY-M-D H:m:s.SSS Z', function () {
            var now = new Date(Date.UTC(2015, 11, 30, 22, 0, 59, 999));
            expect(date.parse('2015-12-31 12:00:59.999 +1400', 'YYYY-M-D H:m:s.SSS Z')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS Z', function () {
            expect(isNaN(date.parse('2015-12-31 12:01:59.999 +1401', 'YYYY-M-D H:m:s.SSS Z'))).to.be(true);
        });
        it('YYYY-M-D H:m:s.SSS ZZ', function () {
            var now = new Date(Date.UTC(2015, 0, 1, 0, 0, 0));
            expect(date.parse('2015-1-1 0:0:0.0 +00:00', 'YYYY-M-D H:m:s.SSS ZZ')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS ZZ', function () {
            var now = new Date(Date.UTC(2015, 11, 31, 23, 59, 59, 999));
            expect(date.parse('2015-12-31 23:00:59.999 -00:59', 'YYYY-M-D H:m:s.SSS ZZ')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS ZZ', function () {
            var now = new Date(Date.UTC(2015, 11, 31, 21, 59, 59, 999));
            expect(date.parse('2015-12-31 09:59:59.999 -12:00', 'YYYY-M-D H:m:s.SSS ZZ')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS ZZ', function () {
            expect(isNaN(date.parse('2015-12-31 09:58:59.999 -12:01', 'YYYY-M-D H:m:s.SSS ZZ'))).to.be(true);
        });
        it('YYYY-M-D H:m:s.SSS ZZ', function () {
            var now = new Date(Date.UTC(2015, 11, 30, 22, 0, 59, 999));
            expect(date.parse('2015-12-31 12:00:59.999 +14:00', 'YYYY-M-D H:m:s.SSS ZZ')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS ZZ', function () {
            expect(isNaN(date.parse('2015-12-31 12:01:59.999 +14:01', 'YYYY-M-D H:m:s.SSS ZZ'))).to.be(true);
        });
        it('MMDDHHmmssSSS', function () {
            var now = new Date(1970, 11, 31, 23, 59, 59, 999);
            expect(date.parse('1231235959999', 'MMDDHHmmssSSS')).to.eql(now);
        });
        it('DDHHmmssSSS', function () {
            var now = new Date(1970, 0, 31, 23, 59, 59, 999);
            expect(date.parse('31235959999', 'DDHHmmssSSS')).to.eql(now);
        });
        it('HHmmssSSS', function () {
            var now = new Date(1970, 0, 1, 23, 59, 59, 999);
            expect(date.parse('235959999', 'HHmmssSSS')).to.eql(now);
        });
        it('mmssSSS', function () {
            var now = new Date(1970, 0, 1, 0, 59, 59, 999);
            expect(date.parse('5959999', 'mmssSSS')).to.eql(now);
        });
        it('ssSSS', function () {
            var now = new Date(1970, 0, 1, 0, 0, 59, 999);
            expect(date.parse('59999', 'ssSSS')).to.eql(now);
        });
        it('SSS', function () {
            var now = new Date(1970, 0, 1, 0, 0, 0, 999);
            expect(date.parse('999', 'SSS')).to.eql(now);
        });
        it('Z', function () {
            expect(isNaN(date.parse('+000', 'Z'))).to.be(true);
        });
        it('Z', function () {
            expect(isNaN(date.parse('+00', 'Z'))).to.be(true);
        });
        it('Z', function () {
            expect(isNaN(date.parse('+0', 'Z'))).to.be(true);
        });
        it('Z', function () {
            expect(isNaN(date.parse('0', 'Z'))).to.be(true);
        });
        it('Z', function () {
            expect(isNaN(date.parse('0000', 'Z'))).to.be(true);
        });
        it('Z', function () {
            expect(isNaN(date.parse('00000', 'Z'))).to.be(true);
        });
        it('ZZ', function () {
            expect(isNaN(date.parse('+00:0', 'ZZ'))).to.be(true);
        });
        it('ZZ', function () {
            expect(isNaN(date.parse('+00:', 'ZZ'))).to.be(true);
        });
        it('ZZ', function () {
            expect(isNaN(date.parse('+0:', 'ZZ'))).to.be(true);
        });
        it('ZZ', function () {
            expect(isNaN(date.parse('0:', 'ZZ'))).to.be(true);
        });
        it('ZZ', function () {
            expect(isNaN(date.parse('00:00', 'ZZ'))).to.be(true);
        });
        it('ZZ', function () {
            expect(isNaN(date.parse('00:000', 'ZZ'))).to.be(true);
        });
        it('foo', function () {
            expect(isNaN(date.parse('20150101235959', 'foo'))).to.be(true);
        });
        it('bar', function () {
            expect(isNaN(date.parse('20150101235959', 'bar'))).to.be(true);
        });
        it('YYYYMMDD', function () {
            expect(isNaN(date.parse('20150101235959', 'YYYYMMDD'))).to.be(true);
        });
        it('20150101235959', function () {
            expect(isNaN(date.parse('20150101235959', '20150101235959'))).to.be(true);
        });
        it('YYYY?M?D H?m?s?S', function () {
            expect(isNaN(date.parse('2015-12-31 23:59:59.9', 'YYYY?M?D H?m?s?S'))).to.be(true);
        });
        it('[Y]YYYY[M]M[D]D[H]H[m]m[s]s[S]S', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59, 900);
            expect(date.parse('Y2015M12D31H23m59s59S9', '[Y]YYYY[M]M[D]D[H]H[m]m[s]s[S]S')).to.eql(now);
        });
        it('[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]', function () {
            expect(isNaN(date.parse('[Y]2015[M]12[D]31[H]23[m]59[s]59[S]9', '[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]'))).to.be(true);
        });
        it('                 ', function () {
            expect(isNaN(date.parse('20151231235959900', '                 '))).to.be(true);
        });

        after(function () {
            date.locale(en);
        });
    });

    describe('Change locale and revert, then extend', function () {
        before(function () {
            date.locale(ja);
            date.locale(en);
        });

        it('getting current locale', function () {
            expect(date.locale()).to.equal('en');
        });
        it('changing default meridiem', function () {
            date.extend({ res: { A: ['am', 'pm'] } });
            expect(date.format(new Date(2012, 0, 1, 12), 'h A')).to.not.equal('12 pm');
        });
        it('extending default meridiem', function () {
            date.extend({
                res: {
                    a: ['am', 'pm']
                },
                formatter: {
                    a: function (d) {
                        return this.res.a[d.getHours() > 11 | 0];
                    }
                }
            });
            expect(date.format(new Date(2012, 0, 1, 12), 'h a')).to.equal('12 pm');
        });

        after(function () {
            date.locale(en);
        });
    });

    var forEach = function (array, fn) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (fn(array[i], i) === 0) {
                    break;
                }
            }
        },
        MMMM = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        MMM = ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.'],
        dddd = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        ddd = ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'],
        dd = ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sá'],
        A = ['de la mañana', 'de la mañana', 'de la mañana', 'de la mañana', 'de la mañana', 'de la mañana', 'de la mañana', 'de la mañana', 'de la mañana', 'de la mañana', 'de la mañana', 'de la mañana',    // 0 - 11
            'de la tarde', 'de la tarde', 'de la tarde', 'de la tarde', 'de la tarde', 'de la tarde', 'de la tarde',    // 12 - 18
            'de la noche', 'de la noche', 'de la noche', 'de la noche', 'de la noche'];     // 19 - 23

    describe('Change the local to ja, then es, then format', function () {
        before(function () {
            date.locale(ja);
            date.locale(es);
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
            date.locale(en);
        });
    });

    describe('Change the locale to ja, then es, then parse', function () {
        before(function () {
            date.locale(ja);
            date.locale(es);
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
            date.locale(en);
        });
    });

    var day_of_week = 'day-of-week';
    var meridiem = 'meridiem';
    var microsecond = 'microsecond';
    var ordinal = 'ordinal';
    var timespan = 'timespan';
    var timezone = 'timezone';
    var two_digit_year = 'two-digit-year';

    if (typeof require === 'function') {
        day_of_week = require('date-and-time/plugin/day-of-week');
        meridiem = require('date-and-time/plugin/meridiem');
        microsecond = require('date-and-time/plugin/microsecond');
        ordinal = require('date-and-time/plugin/ordinal');
        timespan = require('date-and-time/plugin/timespan');
        timezone = require('date-and-time/plugin/timezone');
        two_digit_year = require('date-and-time/plugin/two-digit-year');
    }

    describe('Install multiple plugins, then format', function () {
        before(function () {
            date.plugin(day_of_week);
            date.plugin(meridiem);
            date.plugin(microsecond);
            date.plugin(ordinal);
            date.plugin(timespan);
            date.plugin(timezone);
            date.plugin(two_digit_year);
        });

        it('"YYYY" equals to "0001"', function () {
            var now = new Date(0, -1899 * 12, 1);
            expect(date.format(now, 'YYYY')).to.equal('0001');
        });
        it('"YYYY" equals to "0099"', function () {
            var now = new Date(0, -1801 * 12, 1);
            expect(date.format(now, 'YYYY')).to.equal('0099');
        });
        it('"YYYY" equals to "0100"', function () {
            var now = new Date(100, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('0100');
        });
        it('"YYYY" equals to "1800"', function () {
            var now = new Date(1800, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('1800');
        });
        it('"YYYY" equals to "1899"', function () {
            var now = new Date(1899, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('1899');
        });
        it('"YYYY" equals to "1900"', function () {
            var now = new Date(1900, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('1900');
        });
        it('"YYYY" equals to "1901"', function () {
            var now = new Date(1901, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('1901');
        });
        it('"YYYY" equals to "1970"', function () {
            var now = new Date(1970, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('1970');
        });
        it('"YYYY" equals to "1999"', function () {
            var now = new Date(1999, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('1999');
        });
        it('"YYYY" equals to "2000"', function () {
            var now = new Date(2000, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('2000');
        });
        it('"YYYY" equals to "2001"', function () {
            var now = new Date(2001, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('2001');
        });
        it('"YYYY" equals to "9999"', function () {
            var now = new Date(9999, 0, 1);
            expect(date.format(now, 'YYYY')).to.equal('9999');
        });
        it('"YYYY" as UTC equals to "XXXX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'YYYY', utc)).to.equal('' + now.getUTCFullYear());
        });
        it('"YY" equals to "00"', function () {
            var now = new Date(0, 0, 1);
            expect(date.format(now, 'YY')).to.equal('00');
        });
        it('"YY" equals to "01"', function () {
            var now = new Date(0, -1899 * 12, 1);
            expect(date.format(now, 'YY')).to.equal('01');
        });
        it('"YY" equals to "99"', function () {
            var now = new Date(0, -1801 * 12, 1);
            expect(date.format(now, 'YY')).to.equal('99');
        });
        it('"YY" equals to "00"', function () {
            var now = new Date(100, 0, 1);
            expect(date.format(now, 'YY')).to.equal('00');
        });
        it('"YY" equals to "01"', function () {
            var now = new Date(101, 0, 1);
            expect(date.format(now, 'YY')).to.equal('01');
        });
        it('"YY" equals to "99"', function () {
            var now = new Date(199, 0, 1);
            expect(date.format(now, 'YY')).to.equal('99');
        });
        it('"YY" equals to "00"', function () {
            var now = new Date(1900, 0, 1);
            expect(date.format(now, 'YY')).to.equal('00');
        });
        it('"YY" equals to "01"', function () {
            var now = new Date(1901, 0, 1);
            expect(date.format(now, 'YY')).to.equal('01');
        });
        it('"YY" equals to "99"', function () {
            var now = new Date(1999, 0, 1);
            expect(date.format(now, 'YY')).to.equal('99');
        });
        it('"YY" equals to "00"', function () {
            var now = new Date(2000, 0, 1);
            expect(date.format(now, 'YY')).to.equal('00');
        });
        it('"YY" equals to "01"', function () {
            var now = new Date(2001, 0, 1);
            expect(date.format(now, 'YY')).to.equal('01');
        });
        it('"YY" equals to "99"', function () {
            var now = new Date(2099, 0, 1);
            expect(date.format(now, 'YY')).to.equal('99');
        });
        it('"YY" equals to "00"', function () {
            var now = new Date(9900, 0, 1);
            expect(date.format(now, 'YY')).to.equal('00');
        });
        it('"YY" equals to "01"', function () {
            var now = new Date(9901, 0, 1);
            expect(date.format(now, 'YY')).to.equal('01');
        });
        it('"YY" equals to "99"', function () {
            var now = new Date(9999, 0, 1);
            expect(date.format(now, 'YY')).to.equal('99');
        });
        it('"YY" as UTC equals to "XX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'YY')).to.equal('' + (now.getUTCFullYear() - 2000));
        });
        it('"Y" equals to "1"', function () {
            var now = new Date(0, -1899 * 12, 1);
            expect(date.format(now, 'Y')).to.equal('1');
        });
        it('"Y" equals to "10"', function () {
            var now = new Date(0, -1890 * 12, 1);
            expect(date.format(now, 'Y')).to.equal('10');
        });
        it('"Y" equals to "100"', function () {
            var now = new Date(100, 0, 1);
            expect(date.format(now, 'Y')).to.equal('100');
        });
        it('"Y" equals to "1000"', function () {
            var now = new Date(1000, 0, 1);
            expect(date.format(now, 'Y')).to.equal('1000');
        });
        it('"Y" equals to "10000"', function () {
            var now = new Date(10000, 0, 1);
            expect(date.format(now, 'Y')).to.equal('10000');
        });
        it('"Y" as UTC equals to "X"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'Y')).to.equal('' + (now.getUTCFullYear()));
        });
        it('"MMMM" equals to "January"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MMMM')).to.equal('January');
        });
        it('"MMMM" equals to "December"', function () {
            var now = new Date(2015, 11, 1);
            expect(date.format(now, 'MMMM')).to.equal('December');
        });
        it('"MMM" equals to "Jan"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MMM')).to.equal('Jan');
        });
        it('"MMM" equals to "Dec"', function () {
            var now = new Date(2015, 11, 1);
            expect(date.format(now, 'MMM')).to.equal('Dec');
        });
        it('"MM" equals to "01"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MM')).to.equal('01');
        });
        it('"MM" equals to "12"', function () {
            var now = new Date(2015, 11, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MM')).to.equal('12');
        });
        it('"MM" as UTC equals to "XX"', function () {
            var now = new Date(2015, 10, 1, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'MM', utc)).to.equal('' + (now.getUTCMonth() + 1));
        });
        it('"M" equals to "1"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'M')).to.equal('1');
        });
        it('"M" equals to "12"', function () {
            var now = new Date(2015, 11, 1, 12, 34, 56, 789);
            expect(date.format(now, 'M')).to.equal('12');
        });
        it('"M" as UTC equals to "XX"', function () {
            var now = new Date(2015, 10, 1, 12, 34, 56, 789);
            expect(date.format(now, 'M')).to.equal('' + (now.getUTCMonth() + 1));
        });
        it('"DD" equals to "01"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'DD')).to.equal('01');
        });
        it('"DD" equals to "31"', function () {
            var now = new Date(2015, 0, 31, 12, 34, 56, 789);
            expect(date.format(now, 'DD')).to.equal('31');
        });
        it('"DD" equals to "XX"', function () {
            var now = new Date(2015, 0, 15, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'DD', utc)).to.equal('' + now.getUTCDate());
        });
        it('"D" equals to "1"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'D')).to.equal('1');
        });
        it('"D" equals to "31"', function () {
            var now = new Date(2015, 0, 31, 12, 34, 56, 789);
            expect(date.format(now, 'D')).to.equal('31');
        });
        it('"D" as UTC equals to "XX"', function () {
            var now = new Date(2015, 0, 15, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'D', utc)).to.equal('' + now.getUTCDate());
        });
        it('"dddd" equals to "Tuesday"', function () {
            var now = new Date(2015, 0, 6, 12, 34, 56, 789);
            expect(date.format(now, 'dddd')).to.equal('Tuesday');
        });
        it('"dddd" equals to "Thursday"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'dddd')).to.equal('Thursday');
        });
        it('"ddd" equals to "Sun"', function () {
            var now = new Date(2015, 0, 4, 12, 34, 56, 789);
            expect(date.format(now, 'ddd')).to.equal('Sun');
        });
        it('"ddd" equals to "Wed"', function () {
            var now = new Date(2015, 0, 7, 12, 34, 56, 789);
            expect(date.format(now, 'ddd')).to.equal('Wed');
        });
        it('"dd" equals to "Fr"', function () {
            var now = new Date(2015, 0, 2, 12, 34, 56, 789);
            expect(date.format(now, 'dd')).to.equal('Fr');
        });
        it('"dd" equals to "Sa"', function () {
            var now = new Date(2015, 0, 3, 12, 34, 56, 789);
            expect(date.format(now, 'dd')).to.equal('Sa');
        });
        it('"HH" equals to "12"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'HH')).to.equal('12');
        });
        it('"HH" equals to "00"', function () {
            var now = new Date(2015, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'HH')).to.equal('00');
        });
        it('"HH" equals to "23"', function () {
            var now = new Date(2015, 0, 1, 23, 34, 56, 789);
            expect(date.format(now, 'HH')).to.equal('23');
        });
        it('"HH" as UTC equals to "XX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'HH', utc)).to.equal(('0' + now.getUTCHours()).slice(-2));
        });
        it('"H" equals to "12"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'H')).to.equal('12');
        });
        it('"H" equals to "0"', function () {
            var now = new Date(2015, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'H')).to.equal('0');
        });
        it('"H" equals to "23"', function () {
            var now = new Date(2015, 0, 1, 23, 34, 56, 789);
            expect(date.format(now, 'H')).to.equal('23');
        });
        it('"H" as UTC equals to "XX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'H', utc)).to.equal('' + now.getUTCHours());
        });
        it('"hh A" equals to "12 PM"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'hh A')).to.equal('12 PM');
        });
        it('"hh A" equals to "12 AM"', function () {
            var now = new Date(2015, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'hh A')).to.equal('12 AM');
        });
        it('"hh A" equals to "11 PM"', function () {
            var now = new Date(2015, 0, 1, 23, 34, 56, 789);
            expect(date.format(now, 'hh A')).to.equal('11 PM');
        });
        it('"hh A" equals to "01 AM"', function () {
            var now = new Date(2015, 0, 1, 1, 34, 56, 789);
            expect(date.format(now, 'hh A')).to.equal('01 AM');
        });
        it('"hh A" equals to "01 PM"', function () {
            var now = new Date(2015, 0, 1, 13, 34, 56, 789);
            expect(date.format(now, 'hh A')).to.equal('01 PM');
        });
        it('"h A" equals to "12 PM"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'h A')).to.equal('12 PM');
        });
        it('"h A" equals to "12 AM"', function () {
            var now = new Date(2015, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'h A')).to.equal('12 AM');
        });
        it('"h A" equals to "11 PM"', function () {
            var now = new Date(2015, 0, 1, 23, 34, 56, 789);
            expect(date.format(now, 'h A')).to.equal('11 PM');
        });
        it('"h A" equals to "1 AM"', function () {
            var now = new Date(2015, 0, 1, 1, 34, 56, 789);
            expect(date.format(now, 'h A')).to.equal('1 AM');
        });
        it('"h A" equals to "1 PM"', function () {
            var now = new Date(2015, 0, 1, 13, 34, 56, 789);
            expect(date.format(now, 'h A')).to.equal('1 PM');
        });
        it('"mm" equals to "34"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'mm')).to.equal('34');
        });
        it('"mm" equals to "00"', function () {
            var now = new Date(2015, 0, 1, 12, 0, 56, 789);
            expect(date.format(now, 'mm')).to.equal('00');
        });
        it('"mm" equals to "59"', function () {
            var now = new Date(2015, 0, 1, 12, 59, 56, 789);
            expect(date.format(now, 'mm')).to.equal('59');
        });
        it('"mm" as UTC equals to "XX"', function () {
            var now = new Date(2015, 0, 1, 12, 59, 56, 789),
                utc = true;
            expect(date.format(now, 'mm', utc)).to.equal(('0' + now.getUTCMinutes()).slice(-2));
        });
        it('"m" equals to "34"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'm')).to.equal('34');
        });
        it('"m" equals to "0"', function () {
            var now = new Date(2015, 0, 1, 12, 0, 56, 789);
            expect(date.format(now, 'm')).to.equal('0');
        });
        it('"m" equals to "59"', function () {
            var now = new Date(2015, 0, 1, 12, 59, 56, 789);
            expect(date.format(now, 'm')).to.equal('59');
        });
        it('"m" as UTC equals to "XX"', function () {
            var now = new Date(2015, 0, 1, 12, 59, 56, 789),
                utc = true;
            expect(date.format(now, 'm', utc)).to.equal('' + now.getUTCMinutes());
        });
        it('"ss" equals to "56"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'ss')).to.equal('56');
        });
        it('"ss" equals to "00"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 0, 789);
            expect(date.format(now, 'ss')).to.equal('00');
        });
        it('"ss" equals to "59"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 59, 789);
            expect(date.format(now, 'ss')).to.equal('59');
        });
        it('"ss" as UTC equals to "59"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 59, 789),
                utc = true;
            expect(date.format(now, 'ss', utc)).to.equal(('0' + now.getUTCSeconds()).slice(-2));
        });
        it('"s" equals to "56"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 's')).to.equal('56');
        });
        it('"s" equals to "0"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 0, 789);
            expect(date.format(now, 's')).to.equal('0');
        });
        it('"s" equals to "59"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 59, 789);
            expect(date.format(now, 's')).to.equal('59');
        });
        it('"s" as UTC equals to "59"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 59, 789),
                utc = true;
            expect(date.format(now, 's', utc)).to.equal('' + now.getUTCSeconds());
        });
        it('"SSS" equals to "789"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'SSS')).to.equal('789');
        });
        it('"SSS" equals to "000"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 0);
            expect(date.format(now, 'SSS')).to.equal('000');
        });
        it('"SSS" equals to "001"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 1);
            expect(date.format(now, 'SSS')).to.equal('001');
        });
        it('"SSS" as UTC equals to "XXX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 10),
                utc = true;
            expect(date.format(now, 'SSS', utc)).to.equal(('00' + now.getUTCMilliseconds()).slice(-3));
        });
        it('"SS" equals to "78"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'SS')).to.equal('78');
        });
        it('"SS" equals to "00"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 0);
            expect(date.format(now, 'SS')).to.equal('00');
        });
        it('"SS" equals to "00"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 1);
            expect(date.format(now, 'SS')).to.equal('00');
        });
        it('"SS" as UTC equals to "XX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 9),
                utc = true;
            expect(date.format(now, 'SS', utc)).to.equal(('00' + now.getUTCMilliseconds()).slice(-3).slice(0, 2));
        });
        it('"S" equals to "7"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'S')).to.equal('7');
        });
        it('"S" equals to "0"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 0);
            expect(date.format(now, 'S')).to.equal('0');
        });
        it('"S" equals to "0"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 1);
            expect(date.format(now, 'S')).to.equal('0');
        });
        it('"S" equals to "X"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'S', utc)).to.equal(('00' + now.getUTCMilliseconds()).slice(-3).slice(0, 1));
        });
        it('"Z" matches "+XXXX/-XXXX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'Z')).to.match(/^[+-]\d{4}$/);
        });
        it('"Z" as UTC equals to "+0000"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'Z', utc)).to.equal('+0000');
        });
        it('"ZZ" matches "+XX:XX/-XX:XX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'ZZ')).to.match(/^[+-]\d{2}:\d{2}$/);
        });
        it('"ZZ" as UTC equals to "+00:00"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'ZZ', utc)).to.equal('+00:00');
        });
        it('"ddd MMM DD YYYY HH:mm:ss" equals to "Thu Jan 01 2015 12:34:56"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'ddd MMM DD YYYY HH:mm:ss')).to.equal('Thu Jan 01 2015 12:34:56');
        });
        it('"YYYY/MM/DD HH:mm:ss.SSS" equals to "1900/01/01 00:00:00.000"', function () {
            var now = new Date(0, 0, 1);
            expect(date.format(now, 'YYYY/MM/DD HH:mm:ss.SSS')).to.equal('1900/01/01 00:00:00.000');
        });
        it('"YY/MM/DD HH:mm:ss.SSS" equals to "00/01/01 00:00:00.000"', function () {
            var now = new Date(0, 0, 1);
            expect(date.format(now, 'YY/MM/DD HH:mm:ss.SSS')).to.equal('00/01/01 00:00:00.000');
        });
        it('"Y/M/D H:m:s.SSS" equals to "999/1/1 0:0:0.000"', function () {
            var now = new Date(999, 0, 1);
            expect(date.format(now, 'Y/M/D H:m:s.SSS')).to.equal('999/1/1 0:0:0.000');
        });
        it('"dddd, MMMM D, YYYY h A" equals to "Saturday, January 1, 2000 10 AM"', function () {
            var now = new Date(2000, 0, 1, 10, 0, 0);
            expect(date.format(now, 'dddd, MMMM D, YYYY h A')).to.equal('Saturday, January 1, 2000 10 AM');
        });
        it('"[dddd, MMMM D, YYYY h A]" equals to "dddd, MMMM D, YYYY h A"', function () {
            var now = new Date(2000, 0, 1, 10, 0, 0);
            expect(date.format(now, '[dddd, MMMM D, YYYY h A]')).to.equal('dddd, MMMM D, YYYY h A');
        });
        it('"[dddd], MMMM [D], YYYY [h] A" equals to "dddd, January D, 2000 h AM"', function () {
            var now = new Date(2000, 0, 1, 10, 0, 0);
            expect(date.format(now, '[dddd], MMMM [D], YYYY [h] A')).to.equal('dddd, January D, 2000 h AM');
        });
        it('"[[dddd], MMMM [D], YYYY [h] A]" equals to "[dddd], MMMM [D], YYYY [h] A"', function () {
            var now = new Date(2000, 0, 1, 10, 0, 0);
            expect(date.format(now, '[[dddd], MMMM [D], YYYY [h] A]')).to.equal('[dddd], MMMM [D], YYYY [h] A');
        });
        it('"[dddd], MMMM [[D], YYYY] [h] A" equals to "dddd, January [D], YYYY h AM"', function () {
            var now = new Date(2000, 0, 1, 10, 0, 0);
            expect(date.format(now, '[dddd], MMMM [[D], YYYY] [h] A')).to.equal('dddd, January [D], YYYY h AM');
        });
    });

    describe('Install multiple plugins, then parse', function () {
        before(function () {
            date.plugin(day_of_week);
            date.plugin(meridiem);
            date.plugin(microsecond);
            date.plugin(ordinal);
            date.plugin(timespan);
            date.plugin(timezone);
            date.plugin(two_digit_year);
        });

        it('YYYY', function () {
            expect(isNaN(date.parse('0000', 'YYYY'))).to.be(true);
        });
        it('YYYY', function () {
            var now = new Date(0, -1899 * 12, 1);
            expect(date.parse('0001', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(0, -1801 * 12, 1);
            expect(date.parse('0099', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(100, 0, 1);
            expect(date.parse('0100', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(1899, 0, 1);
            expect(date.parse('1899', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(1900, 0, 1);
            expect(date.parse('1900', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(1969, 0, 1);
            expect(date.parse('1969', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(1970, 0, 1);
            expect(date.parse('1970', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(1999, 0, 1);
            expect(date.parse('1999', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(2000, 0, 1);
            expect(date.parse('2000', 'YYYY')).to.eql(now);
        });
        it('YYYY', function () {
            var now = new Date(9999, 0, 1);
            expect(date.parse('9999', 'YYYY')).to.eql(now);
        });
        it('Y', function () {
            expect(isNaN(date.parse('0', 'Y'))).to.be(true);
        });
        it('Y', function () {
            var now = new Date(0, -1899 * 12, 1);
            expect(date.parse('1', 'Y')).to.eql(now);
        });
        it('Y', function () {
            var now = new Date(0, -1801 * 12, 1);
            expect(date.parse('99', 'Y')).to.eql(now);
        });
        it('Y', function () {
            var now = new Date(100, 0, 1);
            expect(date.parse('100', 'Y')).to.eql(now);
        });
        it('YYYY MMMM', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015 January', 'YYYY MMMM')).to.eql(now);
        });
        it('YYYY MMMM', function () {
            var now = new Date(2015, 11, 1);
            expect(date.parse('2015 December', 'YYYY MMMM')).to.eql(now);
        });
        it('YYYY MMMM', function () {
            expect(isNaN(date.parse('2015 Zero', 'YYYY MMMM'))).to.be(true);
        });
        it('YYYY MMM', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015 Jan', 'YYYY MMM')).to.eql(now);
        });
        it('YYYY MMM', function () {
            var now = new Date(2015, 11, 1);
            expect(date.parse('2015 Dec', 'YYYY MMM')).to.eql(now);
        });
        it('YYYY MMM', function () {
            expect(isNaN(date.parse('2015 Zero', 'YYYY MMM'))).to.be(true);
        });
        it('YYYY-MM', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015-01', 'YYYY-MM')).to.eql(now);
        });
        it('YYYY-MM', function () {
            var now = new Date(2015, 11, 1);
            expect(date.parse('2015-12', 'YYYY-MM')).to.eql(now);
        });
        it('YYYY-MM', function () {
            expect(isNaN(date.parse('2015-00', 'YYYY-MM'))).to.be(true);
        });
        it('YYYY-M', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015-1', 'YYYY-M')).to.eql(now);
        });
        it('YYYY-M', function () {
            var now = new Date(2015, 11, 1);
            expect(date.parse('2015-12', 'YYYY-M')).to.eql(now);
        });
        it('YYYY-M', function () {
            expect(isNaN(date.parse('2015-0', 'YYYY-M'))).to.be(true);
        });
        it('YYYY-MM-DD', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015-01-01', 'YYYY-MM-DD')).to.eql(now);
        });
        it('YYYY-MM-DD', function () {
            var now = new Date(2015, 11, 31);
            expect(date.parse('2015-12-31', 'YYYY-MM-DD')).to.eql(now);
        });
        it('YYYY-MM-DD', function () {
            expect(isNaN(date.parse('2015-00-00', 'YYYY-MM-DD'))).to.be(true);
        });
        it('YYYY-M-D', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015-1-1', 'YYYY-M-D')).to.eql(now);
        });
        it('YYYY-M-D', function () {
            var now = new Date(2015, 11, 31);
            expect(date.parse('2015-12-31', 'YYYY-M-D')).to.eql(now);
        });
        it('YYYY-M-D', function () {
            expect(isNaN(date.parse('2015-0-0', 'YYYY-M-D'))).to.be(true);
        });
        it('YYYY-MM-DD HH', function () {
            var now = new Date(2015, 0, 1, 0);
            expect(date.parse('2015-01-01 00', 'YYYY-MM-DD HH')).to.eql(now);
        });
        it('YYYY-MM-DD HH', function () {
            var now = new Date(2015, 11, 31, 23);
            expect(date.parse('2015-12-31 23', 'YYYY-MM-DD HH')).to.eql(now);
        });
        it('YYYY-MM-DD HH', function () {
            expect(isNaN(date.parse('2015-00-00 24', 'YYYY-MM-DD HH'))).to.be(true);
        });
        it('YYYY-M-D H', function () {
            var now = new Date(2015, 0, 1, 0);
            expect(date.parse('2015-1-1 0', 'YYYY-M-D H')).to.eql(now);
        });
        it('YYYY-M-D H', function () {
            var now = new Date(2015, 11, 31, 23);
            expect(date.parse('2015-12-31 23', 'YYYY-M-D H')).to.eql(now);
        });
        it('YYYY-M-D H', function () {
            expect(isNaN(date.parse('2015-0-0 24', 'YYYY-M-D H'))).to.be(true);
        });
        it('YYYY-M-D hh A', function () {
            var now = new Date(2015, 0, 1, 0);
            expect(date.parse('2015-1-1 12 AM', 'YYYY-M-D hh A')).to.eql(now);
        });
        it('YYYY-M-D hh A', function () {
            var now = new Date(2015, 11, 31, 23);
            expect(date.parse('2015-12-31 11 PM', 'YYYY-M-D hh A')).to.eql(now);
        });
        it('YYYY-M-D hh A', function () {
            expect(isNaN(date.parse('2015-0-0 12 AM', 'YYYY-M-D hh A'))).to.be(true);
        });
        it('YYYY-M-D h A', function () {
            var now = new Date(2015, 0, 1, 0);
            expect(date.parse('2015-1-1 12 AM', 'YYYY-M-D h A')).to.eql(now);
        });
        it('YYYY-M-D h A', function () {
            var now = new Date(2015, 11, 31, 23);
            expect(date.parse('2015-12-31 11 PM', 'YYYY-M-D h A')).to.eql(now);
        });
        it('YYYY-M-D h A', function () {
            expect(isNaN(date.parse('2015-0-0 12 AM', 'YYYY-M-D h A'))).to.be(true);
        });
        it('YYYY-MM-DD HH:mm', function () {
            var now = new Date(2015, 0, 1, 0, 0);
            expect(date.parse('2015-01-01 00:00', 'YYYY-MM-DD HH:mm')).to.eql(now);
        });
        it('YYYY-MM-DD HH:mm', function () {
            var now = new Date(2015, 11, 31, 23, 59);
            expect(date.parse('2015-12-31 23:59', 'YYYY-MM-DD HH:mm')).to.eql(now);
        });
        it('YYYY-MM-DD HH:mm', function () {
            expect(isNaN(date.parse('2015-00-00 24:60', 'YYYY-MM-DD HH:mm'))).to.be(true);
        });
        it('YYYY-M-D H:m', function () {
            var now = new Date(2015, 0, 1, 0, 0);
            expect(date.parse('2015-1-1 0:0', 'YYYY-M-D H:m')).to.eql(now);
        });
        it('YYYY-M-D H:m', function () {
            var now = new Date(2015, 11, 31, 23, 59);
            expect(date.parse('2015-12-31 23:59', 'YYYY-M-D H:m')).to.eql(now);
        });
        it('YYYY-M-D H:m', function () {
            expect(isNaN(date.parse('2015-0-0 24:60', 'YYYY-M-D H:m'))).to.be(true);
        });
        it('YYYY-MM-DD HH:mm:ss', function () {
            var now = new Date(2015, 0, 1, 0, 0, 0);
            expect(date.parse('2015-01-01 00:00:00', 'YYYY-MM-DD HH:mm:ss')).to.eql(now);
        });
        it('YYYY-MM-DD HH:mm:ss', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59);
            expect(date.parse('2015-12-31 23:59:59', 'YYYY-MM-DD HH:mm:ss')).to.eql(now);
        });
        it('YYYY-MM-DD HH:mm:ss', function () {
            expect(isNaN(date.parse('2015-00-00 24:60:60', 'YYYY-MM-DD HH:mm:ss'))).to.be(true);
        });
        it('YYYY-M-D H:m:s', function () {
            var now = new Date(2015, 0, 1, 0, 0);
            expect(date.parse('2015-1-1 0:0:0', 'YYYY-M-D H:m:s')).to.eql(now);
        });
        it('YYYY-M-D H:m:s', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59);
            expect(date.parse('2015-12-31 23:59:59', 'YYYY-M-D H:m:s')).to.eql(now);
        });
        it('YYYY-M-D H:m:s', function () {
            expect(isNaN(date.parse('2015-0-0 24:60:60', 'YYYY-M-D H:m:s'))).to.be(true);
        });
        it('YYYY-M-D H:m:s.SSS', function () {
            var now = new Date(2015, 0, 1, 0, 0, 0);
            expect(date.parse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.SSS')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59, 999);
            expect(date.parse('2015-12-31 23:59:59.999', 'YYYY-M-D H:m:s.SSS')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS', function () {
            expect(isNaN(date.parse('2015-0-0 24:60:61.000', 'YYYY-M-D H:m:s.SSS'))).to.be(true);
        });
        it('YYYY-M-D H:m:s.SS', function () {
            var now = new Date(2015, 0, 1, 0, 0, 0);
            expect(date.parse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.SS')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SS', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59, 990);
            expect(date.parse('2015-12-31 23:59:59.99', 'YYYY-M-D H:m:s.SS')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SS', function () {
            expect(isNaN(date.parse('2015-0-0 24:60:61.00', 'YYYY-M-D H:m:s.SS'))).to.be(true);
        });
        it('YYYY-M-D H:m:s.S', function () {
            var now = new Date(2015, 0, 1, 0, 0, 0);
            expect(date.parse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.S')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.S', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59, 900);
            expect(date.parse('2015-12-31 23:59:59.9', 'YYYY-M-D H:m:s.S')).to.eql(now);
        });
        it('YYYY M D H m s S', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59, 900);
            expect(date.parse('2015-12-31 23:59:59.9', 'YYYY M D H m s S')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.S', function () {
            expect(isNaN(date.parse('2015-0-0 24:60:61.0', 'YYYY-M-D H:m:s.S'))).to.be(true);
        });
        it('YYYY-M-D H:m:s.SSS Z', function () {
            var now = new Date(Date.UTC(2015, 0, 1, 0, 0, 0));
            expect(date.parse('2015-1-1 0:0:0.0 +0000', 'YYYY-M-D H:m:s.SSS Z')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS Z', function () {
            var now = new Date(Date.UTC(2015, 11, 31, 23, 59, 59, 999));
            expect(date.parse('2015-12-31 23:00:59.999 -0059', 'YYYY-M-D H:m:s.SSS Z')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS Z', function () {
            var now = new Date(Date.UTC(2015, 11, 31, 21, 59, 59, 999));
            expect(date.parse('2015-12-31 09:59:59.999 -1200', 'YYYY-M-D H:m:s.SSS Z')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS Z', function () {
            expect(isNaN(date.parse('2015-12-31 09:58:59.999 -1201', 'YYYY-M-D H:m:s.SSS Z'))).to.be(true);
        });
        it('YYYY-M-D H:m:s.SSS Z', function () {
            var now = new Date(Date.UTC(2015, 11, 30, 22, 0, 59, 999));
            expect(date.parse('2015-12-31 12:00:59.999 +1400', 'YYYY-M-D H:m:s.SSS Z')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS Z', function () {
            expect(isNaN(date.parse('2015-12-31 12:01:59.999 +1401', 'YYYY-M-D H:m:s.SSS Z'))).to.be(true);
        });
        it('YYYY-M-D H:m:s.SSS ZZ', function () {
            var now = new Date(Date.UTC(2015, 0, 1, 0, 0, 0));
            expect(date.parse('2015-1-1 0:0:0.0 +00:00', 'YYYY-M-D H:m:s.SSS ZZ')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS ZZ', function () {
            var now = new Date(Date.UTC(2015, 11, 31, 23, 59, 59, 999));
            expect(date.parse('2015-12-31 23:00:59.999 -00:59', 'YYYY-M-D H:m:s.SSS ZZ')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS ZZ', function () {
            var now = new Date(Date.UTC(2015, 11, 31, 21, 59, 59, 999));
            expect(date.parse('2015-12-31 09:59:59.999 -12:00', 'YYYY-M-D H:m:s.SSS ZZ')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS ZZ', function () {
            expect(isNaN(date.parse('2015-12-31 09:58:59.999 -12:01', 'YYYY-M-D H:m:s.SSS ZZ'))).to.be(true);
        });
        it('YYYY-M-D H:m:s.SSS ZZ', function () {
            var now = new Date(Date.UTC(2015, 11, 30, 22, 0, 59, 999));
            expect(date.parse('2015-12-31 12:00:59.999 +14:00', 'YYYY-M-D H:m:s.SSS ZZ')).to.eql(now);
        });
        it('YYYY-M-D H:m:s.SSS ZZ', function () {
            expect(isNaN(date.parse('2015-12-31 12:01:59.999 +14:01', 'YYYY-M-D H:m:s.SSS ZZ'))).to.be(true);
        });
        it('MMDDHHmmssSSS', function () {
            var now = new Date(1970, 11, 31, 23, 59, 59, 999);
            expect(date.parse('1231235959999', 'MMDDHHmmssSSS')).to.eql(now);
        });
        it('DDHHmmssSSS', function () {
            var now = new Date(1970, 0, 31, 23, 59, 59, 999);
            expect(date.parse('31235959999', 'DDHHmmssSSS')).to.eql(now);
        });
        it('HHmmssSSS', function () {
            var now = new Date(1970, 0, 1, 23, 59, 59, 999);
            expect(date.parse('235959999', 'HHmmssSSS')).to.eql(now);
        });
        it('mmssSSS', function () {
            var now = new Date(1970, 0, 1, 0, 59, 59, 999);
            expect(date.parse('5959999', 'mmssSSS')).to.eql(now);
        });
        it('ssSSS', function () {
            var now = new Date(1970, 0, 1, 0, 0, 59, 999);
            expect(date.parse('59999', 'ssSSS')).to.eql(now);
        });
        it('SSS', function () {
            var now = new Date(1970, 0, 1, 0, 0, 0, 999);
            expect(date.parse('999', 'SSS')).to.eql(now);
        });
        it('Z', function () {
            expect(isNaN(date.parse('+000', 'Z'))).to.be(true);
        });
        it('Z', function () {
            expect(isNaN(date.parse('+00', 'Z'))).to.be(true);
        });
        it('Z', function () {
            expect(isNaN(date.parse('+0', 'Z'))).to.be(true);
        });
        it('Z', function () {
            expect(isNaN(date.parse('0', 'Z'))).to.be(true);
        });
        it('Z', function () {
            expect(isNaN(date.parse('0000', 'Z'))).to.be(true);
        });
        it('Z', function () {
            expect(isNaN(date.parse('00000', 'Z'))).to.be(true);
        });
        it('ZZ', function () {
            expect(isNaN(date.parse('+00:0', 'ZZ'))).to.be(true);
        });
        it('ZZ', function () {
            expect(isNaN(date.parse('+00:', 'ZZ'))).to.be(true);
        });
        it('ZZ', function () {
            expect(isNaN(date.parse('+0:', 'ZZ'))).to.be(true);
        });
        it('ZZ', function () {
            expect(isNaN(date.parse('0:', 'ZZ'))).to.be(true);
        });
        it('ZZ', function () {
            expect(isNaN(date.parse('00:00', 'ZZ'))).to.be(true);
        });
        it('ZZ', function () {
            expect(isNaN(date.parse('00:000', 'ZZ'))).to.be(true);
        });
        it('foo', function () {
            expect(isNaN(date.parse('20150101235959', 'foo'))).to.be(true);
        });
        it('bar', function () {
            expect(isNaN(date.parse('20150101235959', 'bar'))).to.be(true);
        });
        it('YYYYMMDD', function () {
            expect(isNaN(date.parse('20150101235959', 'YYYYMMDD'))).to.be(true);
        });
        it('20150101235959', function () {
            expect(isNaN(date.parse('20150101235959', '20150101235959'))).to.be(true);
        });
        it('YYYY?M?D H?m?s?S', function () {
            expect(isNaN(date.parse('2015-12-31 23:59:59.9', 'YYYY?M?D H?m?s?S'))).to.be(true);
        });
        it('[Y]YYYY[M]M[D]D[H]H[m]m[s]s[S]S', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59, 900);
            expect(date.parse('Y2015M12D31H23m59s59S9', '[Y]YYYY[M]M[D]D[H]H[m]m[s]s[S]S')).to.eql(now);
        });
        it('[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]', function () {
            expect(isNaN(date.parse('[Y]2015[M]12[D]31[H]23[m]59[s]59[S]9', '[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]'))).to.be(true);
        });
        it('                 ', function () {
            expect(isNaN(date.parse('20151231235959900', '                 '))).to.be(true);
        });
    });

    describe('Install multiple plugins, then extend', function () {
        before(function () {
            date.plugin(day_of_week);
            date.plugin(meridiem);
            date.plugin(microsecond);
            date.plugin(ordinal);
            date.plugin(timespan);
            date.plugin(timezone);
            date.plugin(two_digit_year);
        });

        it('getting current locale', function () {
            expect(date.locale()).to.equal('en');
        });
        it('changing default meridiem', function () {
            date.extend({ res: { A: ['am', 'pm'] } });
            expect(date.format(new Date(2012, 0, 1, 12), 'h A')).to.not.equal('12 pm');
        });
        it('extending default meridiem', function () {
            date.extend({
                res: {
                    a: ['am', 'pm']
                },
                formatter: {
                    a: function (d) {
                        return this.res.a[d.getHours() > 11 | 0];
                    }
                }
            });
            expect(date.format(new Date(2012, 0, 1, 12), 'h a')).to.equal('12 pm');
        });
    });

    var AA = ['A.M.', 'P.M.'],
        a = ['am', 'pm'],
        aa = ['a.m.', 'p.m.'];

    A = ['AM', 'PM'];

    describe('Multiple locale changes and multiple plugin installations', function () {
        before(function () {
            date.locale(es);
            date.plugin(day_of_week);
            date.plugin(meridiem);
            date.plugin(microsecond);
            date.plugin(ordinal);
            date.plugin(timespan);
            date.plugin(timezone);
            date.plugin(two_digit_year);
            date.locale(en);
        });

        // day of week

        it('dd', function () {
            var now = new Date(1970, 0, 1, 0, 0, 0, 0);
            expect(date.parse('Fr', 'dd')).to.eql(now);
        });
        it('ddd', function () {
            var now = new Date(1970, 0, 1, 0, 0, 0, 0);
            expect(date.parse('Fri', 'ddd')).to.eql(now);
        });
        it('dddd', function () {
            var now = new Date(1970, 0, 1, 0, 0, 0, 0);
            expect(date.parse('Friday', 'dddd')).to.eql(now);
        });

        // meridiem

        it('A, ante meridiem', function () {
            var now = new Date(2019, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'A')).to.equal(A[0]);
        });
        it('A, post meridiem', function () {
            var now = new Date(2019, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'A')).to.equal(A[1]);
        });
        it('a, ante meridiem', function () {
            var now = new Date(2019, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'a')).to.equal(a[0]);
        });
        it('a, post meridiem', function () {
            var now = new Date(2019, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'a')).to.equal(a[1]);
        });
        it('AA, ante meridiem', function () {
            var now = new Date(2019, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'AA')).to.equal(AA[0]);
        });
        it('AA, post meridiem', function () {
            var now = new Date(2019, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'AA')).to.equal(AA[1]);
        });
        it('aa, ante meridiem', function () {
            var now = new Date(2019, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'aa')).to.equal(aa[0]);
        });
        it('aa, post meridiem', function () {
            var now = new Date(2019, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'aa')).to.equal(aa[1]);
        });
        it('parse a.m.', function () {
            var now = new Date(1970, 0, 1, 0, 34);
            expect(date.parse('00:34 a.m.', 'hh:mm aa')).to.eql(now);
        });
        it('parse p.m.', function () {
            var now = new Date(1970, 0, 1, 12, 34);
            expect(date.parse('00:34 p.m.', 'hh:mm aa')).to.eql(now);
        });
        it('parse A.M.', function () {
            var now = new Date(1970, 0, 1, 0, 34);
            expect(date.parse('00:34 A.M.', 'hh:mm AA')).to.eql(now);
        });
        it('parse P.M.', function () {
            var now = new Date(1970, 0, 1, 12, 34);
            expect(date.parse('00:34 P.M.', 'hh:mm AA')).to.eql(now);
        });
        it('parse AM', function () {
            var now = new Date(1970, 0, 1, 0, 34);
            expect(date.parse('00:34 AM', 'hh:mm A')).to.eql(now);
        });
        it('parse PM', function () {
            var now = new Date(1970, 0, 1, 12, 34);
            expect(date.parse('00:34 PM', 'hh:mm A')).to.eql(now);
        });
        it('parse am', function () {
            var now = new Date(1970, 0, 1, 0, 34);
            expect(date.parse('00:34 am', 'hh:mm a')).to.eql(now);
        });
        it('parse pm', function () {
            var now = new Date(1970, 0, 1, 12, 34);
            expect(date.parse('00:34 pm', 'hh:mm a')).to.eql(now);
        });

        // microsecond

        it('SSSS', function () {
            var now = new Date(1970, 0, 1, 0, 0, 0, 123);
            expect(date.parse('0.1234', '0.SSSS')).to.eql(now);
        });
        it('SSSSS', function () {
            var now = new Date(1970, 0, 1, 0, 0, 0, 12);
            expect(date.parse('0.01234', '0.SSSSS')).to.eql(now);
        });
        it('SSSSSS', function () {
            var now = new Date(1970, 0, 1, 0, 0, 0, 1);
            expect(date.parse('0.001234', '0.SSSSSS')).to.eql(now);
        });

        // ordinal number

        it('Jan. XX, 2019', function () {
            for (var i = 1, d, now; i <= 31; i++) {
                now = new Date(2019, 0, i, 12, 34, 56, 789);
                switch (i) {
                case 1:
                case 21:
                case 31:
                    d = i + 'st';
                    break;
                case 2:
                case 22:
                    d = i + 'nd';
                    break;
                case 3:
                case 23:
                    d = i + 'rd';
                    break;
                default:
                    d = i + 'th';
                    break;
                }
                expect(date.format(now, 'MMM. DDD, YYYY')).to.equal('Jan. ' + d + ', 2019');
            }
        });

        // timespan

        it('toMilliseconds, S', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 790);
            expect(date.timeSpan(to, from).toMilliseconds('S')).to.equal('1');
        });
        it('toMilliseconds, SS', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 790);
            expect(date.timeSpan(to, from).toMilliseconds('SS')).to.equal('01');
        });
        it('toMilliseconds, SSS', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 790);
            expect(date.timeSpan(to, from).toMilliseconds('SSS')).to.equal('001');
        });
        it('toMilliseconds, over SSS', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 1, 1, 0, 34, 56, 789);
            expect(date.timeSpan(to, from).toMilliseconds('SSS')).to.equal('' + 31 * 24 * 60 * 60 * 1000);
        });
        it('toMilliseconds, over SSS, negative', function () {
            var from = new Date(2019, 1, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 789);
            expect(date.timeSpan(to, from).toMilliseconds('SSS')).to.equal('-' + 31 * 24 * 60 * 60 * 1000);
        });
        it('toSeconds, s', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 790);
            expect(date.timeSpan(to, from).toSeconds('s')).to.equal('0');
        });
        it('toSeconds, ss', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 790);
            expect(date.timeSpan(to, from).toSeconds('ss')).to.equal('00');
        });
        it('toSeconds, over ss', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 1, 1, 0, 34, 56, 789);
            expect(date.timeSpan(to, from).toSeconds('ss')).to.equal('' + 31 * 24 * 60 * 60);
        });
        it('toSeconds, over ss, negative', function () {
            var from = new Date(2019, 1, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 789);
            expect(date.timeSpan(to, from).toSeconds('ss')).to.equal('-' + 31 * 24 * 60 * 60);
        });
        it('toSeconds, over ss.SSS', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 57, 790);
            expect(date.timeSpan(to, from).toSeconds('ss.SSS')).to.equal('01.001');
        });
        it('toSeconds, over ss.SSS, negative', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 790);
            var to = new Date(2019, 0, 1, 0, 34, 55, 789);
            expect(date.timeSpan(to, from).toSeconds('ss.SSS')).to.equal('-01.001');
        });
        it('toMinutes, m', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 790);
            expect(date.timeSpan(to, from).toMinutes('m')).to.equal('0');
        });
        it('toMinutes, mm', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 790);
            expect(date.timeSpan(to, from).toMinutes('mm')).to.equal('00');
        });
        it('toMinutes, over mm', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 1, 1, 0, 34, 56, 789);
            expect(date.timeSpan(to, from).toMinutes('mm')).to.equal('' + 31 * 24 * 60);
        });
        it('toMinutes, over mm, negative', function () {
            var from = new Date(2019, 1, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 789);
            expect(date.timeSpan(to, from).toMinutes('mm')).to.equal('-' + 31 * 24 * 60);
        });
        it('toMinutes, over mm:ss.SSS', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 35, 57, 790);
            expect(date.timeSpan(to, from).toMinutes('mm:ss.SSS')).to.equal('01:01.001');
        });
        it('toMinutes, over mm:ss.SSS, negative', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 790);
            var to = new Date(2019, 0, 1, 0, 33, 55, 789);
            expect(date.timeSpan(to, from).toMinutes('mm:ss.SSS')).to.equal('-01:01.001');
        });
        it('toHours, H', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 790);
            expect(date.timeSpan(to, from).toHours('H')).to.equal('0');
        });
        it('toHours, HH', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 790);
            expect(date.timeSpan(to, from).toHours('HH')).to.equal('00');
        });
        it('toHours, over HH', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 1, 1, 0, 34, 56, 789);
            expect(date.timeSpan(to, from).toHours('HH')).to.equal('' + 31 * 24);
        });
        it('toHours, over HH, negative', function () {
            var from = new Date(2019, 1, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 789);
            expect(date.timeSpan(to, from).toHours('HH')).to.equal('-' + 31 * 24);
        });
        it('toHours, over HH:mm:ss.SSS', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 1, 35, 57, 790);
            expect(date.timeSpan(to, from).toHours('HH:mm:ss.SSS')).to.equal('01:01:01.001');
        });
        it('toHours, over HH:mm:ss.SSS, negative', function () {
            var from = new Date(2019, 0, 1, 1, 34, 56, 790);
            var to = new Date(2019, 0, 1, 0, 33, 55, 789);
            expect(date.timeSpan(to, from).toHours('HH:mm:ss.SSS')).to.equal('-01:01:01.001');
        });
        it('toDays, D', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 790);
            expect(date.timeSpan(to, from).toDays('D')).to.equal('0');
        });
        it('toDays, DD', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 790);
            expect(date.timeSpan(to, from).toDays('DD')).to.equal('00');
        });
        it('toDays, over DD', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 1, 1, 0, 34, 56, 789);
            expect(date.timeSpan(to, from).toDays('DD')).to.equal('' + 31);
        });
        it('toDays, over DD, negative', function () {
            var from = new Date(2019, 1, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 1, 0, 34, 56, 789);
            expect(date.timeSpan(to, from).toDays('DD')).to.equal('-' + 31);
        });
        it('toDays, over DD HH:mm:ss.SSS', function () {
            var from = new Date(2019, 0, 1, 0, 34, 56, 789);
            var to = new Date(2019, 0, 2, 1, 35, 57, 790);
            expect(date.timeSpan(to, from).toDays('DD HH:mm:ss.SSS')).to.equal('01 01:01:01.001');
        });
        it('toDays, over DD HH:mm:ss.SSS, negative', function () {
            var from = new Date(2019, 0, 1, 1, 34, 56, 790);
            var to = new Date(2019, 0, 0, 0, 33, 55, 789);
            expect(date.timeSpan(to, from).toDays('DD HH:mm:ss.SSS')).to.equal('-01 01:01:01.001');
        });
        it('comments', function () {
            var from = new Date(2019, 0, 1, 1, 34, 56, 790);
            var to = new Date(2019, 0, 0, 0, 33, 55, 789);
            expect(date.timeSpan(to, from).toDays('[DD HH:mm:ss.SSS]')).to.equal('DD HH:mm:ss.SSS');
        });

        // timezone

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

        // two-digit-year

        it('YY', function () {
            var obj = ['YY', 'YY'];
            expect(date.compile('YY')).to.eql(obj);
        });

        it('YY-1', function () {
            var dt = { Y: 2000, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
            expect(date.preparse('00', 'YY')).to.eql(dt);
        });
        it('YY-2', function () {
            var dt = { Y: 2001, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
            expect(date.preparse('01', 'YY')).to.eql(dt);
        });
        it('YY-3', function () {
            var dt = { Y: 2010, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
            expect(date.preparse('10', 'YY')).to.eql(dt);
        });
        it('YY-4', function () {
            var dt = { Y: 2069, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
            expect(date.preparse('69', 'YY')).to.eql(dt);
        });
        it('YY-5', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
            expect(date.preparse('70', 'YY')).to.eql(dt);
        });
        it('YY-6', function () {
            var dt = { Y: 1999, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
            expect(date.preparse('99', 'YY')).to.eql(dt);
        });

        it('YY-1', function () {
            var now = new Date(2000, 0, 1);
            expect(date.parse('00', 'YY')).to.eql(now);
        });
        it('YY-2', function () {
            var now = new Date(2001, 0, 1);
            expect(date.parse('01', 'YY')).to.eql(now);
        });
        it('YY-3', function () {
            var now = new Date(2010, 0, 1);
            expect(date.parse('10', 'YY')).to.eql(now);
        });
        it('YY-4', function () {
            var now = new Date(2069, 0, 1);
            expect(date.parse('69', 'YY')).to.eql(now);
        });
        it('YY-5', function () {
            var now = new Date(1970, 0, 1);
            expect(date.parse('70', 'YY')).to.eql(now);
        });
        it('YY-6', function () {
            var now = new Date(1999, 0, 1);
            expect(date.parse('99', 'YY')).to.eql(now);
        });
    });

    describe('Applying locale changes to plugins', function () {
        before(function () {
            date.locale(es);
            date.plugin(day_of_week);
            date.plugin(timezone);
        });

        // day of week

        it('dd', function () {
            var now = new Date(1970, 0, 1, 0, 0, 0, 0);
            expect(date.parse('ju', 'dd')).to.eql(now);
        });
        it('ddd', function () {
            var now = new Date(1970, 0, 1, 0, 0, 0, 0);
            expect(date.parse('jue.', 'ddd')).to.eql(now);
        });
        it('dddd', function () {
            var now = new Date(1970, 0, 1, 0, 0, 0, 0);
            expect(date.parse('jueves', 'dddd')).to.eql(now);
        });

        // timezone

        it('formatTZ UTC-8', function () {
            // 2021-03-14T09:59:59.999Z => March 14 2021 1:59:59.999
            var dateObj = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));
            var formatString = 'MMMM DD YYYY H:mm:ss.SSS [UTC]Z';
            var tz = 'America/Los_Angeles';     // UTC-8

            expect(date.formatTZ(dateObj, formatString, tz)).to.equal('marzo 14 2021 1:59:59.999 UTC-0800');
        });
        it('formatTZ UTC-7 (Start of DST)', function () {
            // 2021-03-14T10:00:00.000Z => March 14 2021 3:00:00.000
            var dateObj = new Date(Date.UTC(2021, 2, 14, 10, 0, 0, 0));
            var formatString = 'MMMM D YYYY H:mm:ss.SSS [UTC]Z';
            var tz = 'America/Los_Angeles';     // UTC-7 DST

            expect(date.formatTZ(dateObj, formatString, tz)).to.equal('marzo 14 2021 3:00:00.000 UTC-0700');
        });
        it('formatTZ UTC-7 (End of DST)', function () {
            // 2021-11-07T08:59:59.999Z => November 7 2021 1:59:59.999
            var dateObj = new Date(Date.UTC(2021, 10, 7, 8, 59, 59, 999));
            var formatString = 'MMMM D YYYY H:mm:ss.SSS [UTC]Z';
            var tz = 'America/Los_Angeles';     // UTC-7 DST

            expect(date.formatTZ(dateObj, formatString, tz)).to.equal('noviembre 7 2021 1:59:59.999 UTC-0700');
        });
        it('formatTZ UTC-8', function () {
            // 2021-11-07T09:00:00.000Z => November 7 2021 1:00:00.000
            var dateObj = new Date(Date.UTC(2021, 10, 7, 9, 0, 0, 0));
            var formatString = 'MMMM D YYYY H:mm:ss.SSS [UTC]Z';
            var tz = 'America/Los_Angeles';     // UTC-8

            expect(date.formatTZ(dateObj, formatString, tz)).to.equal('noviembre 7 2021 1:00:00.000 UTC-0800');
        });
        it('formatTZ UTC+9', function () {
            // 2021-03-14T09:59:59.999Z => March 14 2021 18:59:59.999
            var dateObj = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));
            var formatString = 'MMMM DD YYYY H:mm:ss.SSS [UTC]Z';
            var tz = 'Asia/Tokyo';              // UTC+9

            expect(date.formatTZ(dateObj, formatString, tz)).to.equal('marzo 14 2021 18:59:59.999 UTC+0900');
        });

        it('parseTZ UTC-8', function () {
            // Mar 14 2021 1:59:59.999 => 2021-03-14T09:59:59.999Z
            var dateString = 'mar. 14 2021 1:59:59.999';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'America/Los_Angeles';     // UTC-8
            var dateObj = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));

            expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
        });
        it('parseTZ Edge case1', function () {
            // Mar 14 2021 2:00:00.000 => 2021-03-14T10:00:00.000Z
            var dateString = 'mar. 14 2021 2:00:00.000';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'America/Los_Angeles';
            var dateObj = new Date(Date.UTC(2021, 2, 14, 10, 0, 0, 0));

            expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
        });
        it('parseTZ Edge case2', function () {
            // Mar 14 2021 2:59:59.999 => 2021-03-14T10:59:59.999Z
            var dateString = 'mar. 14 2021 2:59:59.999';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'America/Los_Angeles';
            var dateObj = new Date(Date.UTC(2021, 2, 14, 10, 59, 59, 999));

            expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
        });
        it('parseTZ UTC-7 (Start of DST)', function () {
            // Mar 14 2021 3:00:00.000 => 2021-03-14T10:00:00.000Z
            var dateString = 'mar. 14 2021 3:00:00.000';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'America/Los_Angeles';     // UTC-7 DST
            var dateObj = new Date(Date.UTC(2021, 2, 14, 10, 0, 0, 0));

            expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
        });
        it('parseTZ UTC-7 (End of DST)', function () {
            // Nov 7 2021 1:59:59.999 => 2021-11-07T08:59:59.999Z
            var dateString = 'nov. 7 2021 1:59:59.999';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'America/Los_Angeles';     // UTC-7 DST
            var dateObj = new Date(Date.UTC(2021, 10, 7, 8, 59, 59, 999));

            expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
        });
        it('parseTZ UTC-8 with Z', function () {
            // Nov 7 2021 1:59:59.999 => 2021-11-07T09:59:59.999Z
            var dateString = 'nov. 7 2021 1:59:59.999 -0800';
            var formatString = 'MMM D YYYY H:mm:ss.SSS Z';
            var tz = 'America/Los_Angeles';     // UTC-8
            var dateObj = new Date(Date.UTC(2021, 10, 7, 9, 59, 59, 999));

            expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
        });
        it('parseTZ UTC-8', function () {
            // Nov 7 2021 2:00:00.000 => 2021-11-07T10:00:00.000Z
            var dateString = 'nov. 7 2021 2:00:00.000';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'America/Los_Angeles';     // UTC-8
            var dateObj = new Date(Date.UTC(2021, 10, 7, 10, 0, 0, 0));

            expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
        });
        it('parseTZ UTC+9.5', function () {
            // Oct 3 2021 1:59:59.999 => 2021-10-02T16:29:59.999Z
            var dateString = 'oct. 3 2021 1:59:59.999';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'Australia/Adelaide';      // UTC+9.5
            var dateObj = new Date(Date.UTC(2021, 9, 2, 16, 29, 59, 999));

            expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
        });
        it('parseTZ Edge case1', function () {
            // Oct 3 2021 2:00:00.000 => 2021-10-02T16:30:00.000Z
            var dateString = 'oct. 3 2021 2:00:00.000';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'Australia/Adelaide';
            var dateObj = new Date(Date.UTC(2021, 9, 2, 16, 30, 0, 0));

            expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
        });
        it('parseTZ Edge case2', function () {
            // Oct 3 2021 2:59:59.999 => 2021-10-02T17:29:59.999Z
            var dateString = 'oct. 3 2021 2:59:59.999';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'Australia/Adelaide';
            var dateObj = new Date(Date.UTC(2021, 9, 2, 17, 29, 59, 999));

            expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
        });
        it('parseTZ UTC+10.5 (Start of DST)', function () {
            // Oct 3 2021 3:00:00.000 => 2021-10-02T16:30:00.000Z
            var dateString = 'oct. 3 2021 3:00:00.000';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'Australia/Adelaide';      // UTC+10.5 DST
            var dateObj = new Date(Date.UTC(2021, 9, 2, 16, 30, 0, 0));

            expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
        });
        it('parseTZ UTC+10.5 (End of DST)', function () {
            // Apr 4 2021 2:59:59.999 => 2021-04-03T16:29:59.999Z
            var dateString = 'abr. 4 2021 2:59:59.999';
            var formatString = 'MMM D YYYY H:mm:ss.SSS';
            var tz = 'Australia/Adelaide';      // UTC+10.5 DST
            var dateObj = new Date(Date.UTC(2021, 3, 3, 16, 29, 59, 999));

            expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
        });
        it('parseTZ UTC+9.5 with Z', function () {
            // Apr 4 2021 2:59:59.999 => 2021-04-03T17:29:59.999Z
            var dateString = 'abr. 4 2021 2:59:59.999 +0930';
            var formatString = 'MMM D YYYY H:mm:ss.SSS Z';
            var tz = 'Australia/Adelaide';      // UTC+9.5
            var dateObj = new Date(Date.UTC(2021, 3, 3, 17, 29, 59, 999));

            expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
        });
        it('parseTZ UTC+9.5', function () {
            // Apr 4 2021 3:00:00.000 => 2021-04-03T17:30:00.000Z
            var dateString = 'abr. 4 2021 3:00:00.000';
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

            var dateString2 = 'noviembre 7 2021 1:00:00.000';

            // 2021-11-07T04:00:00.000 UTC-0500 => November 7 2021 1:00:00.000
            expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
        });
        it('transformTZ EST to PDT (End of DST)', function () {
            var dateString1 = '2021-11-07T03:59:59.999 UTC-0500';
            var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
            var formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
            var tz = 'America/Los_Angeles';     // UTC-7 DST

            var dateString2 = 'noviembre 7 2021 1:59:59.999';

            // 2021-11-07T03:59:59.999 UTC-0500 => November 7 2021 1:59:59.999
            expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
        });
        it('transformTZ EDT to PST', function () {
            var dateString1 = '2021-03-14T05:59:59.999 UTC-0400';
            var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
            var formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
            var tz = 'America/Los_Angeles';     // UTC-8

            var dateString2 = 'marzo 14 2021 1:59:59.999';

            // 2021-03-14T05:59:59.999 UTC-0400 => March 14 2021 1:59:59.999
            expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
        });
        it('transformTZ EDT to PDT (Start of DST)', function () {
            var dateString1 = '2021-03-14T06:00:00.000 UTC-0400';
            var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
            var formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
            var tz = 'America/Los_Angeles';     // UTC-7 DST

            var dateString2 = 'marzo 14 2021 3:00:00.000';

            // 2021-03-14T06:00:00.000 UTC-0400 => March 14 2021 3:00:00.000
            expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
        });
        it('transformTZ PST to JST', function () {
            var dateString1 = '2021-03-14T01:59:59.999 UTC-0800';
            var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
            var formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
            var tz = 'Asia/Tokyo';              // UTC+9

            var dateString2 = 'marzo 14 2021 18:59:59.999';

            // 2021-03-14T01:59:59.999 UTC-0800 => March 14 2021 18:59:59.999
            expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
        });
        it('transformTZ PDT to JST', function () {
            var dateString1 = '2021-03-14T03:00:00.000 UTC-0700';
            var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
            var formatString2 = 'MMMM D YYYY H:mm:ss.SSS';
            var tz = 'Asia/Tokyo';              // UTC+9

            var dateString2 = 'marzo 14 2021 19:00:00.000';

            // 2021-03-14T03:00:00.000 UTC-0700 => March 14 2021 19:00:00.000
            expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
        });

        after(function () {
            date.locale(en);
        });
    });

    describe('Applying other plugins to formatTZ, parseTZ and transformTZ', function () {
        before(function () {
            date.plugin(meridiem);
            date.plugin(timezone);
        });

        it('formatTZ UTC-8', function () {
            // 2021-03-14T09:59:59.999Z => March 14 2021 1:59:59.999
            var dateObj = new Date(Date.UTC(2021, 2, 14, 9, 59, 59, 999));
            var formatString = 'MMMM DD YYYY h:mm:ss.SSS AA [UTC]Z';
            var tz = 'America/Los_Angeles';     // UTC-8

            expect(date.formatTZ(dateObj, formatString, tz)).to.equal('March 14 2021 1:59:59.999 A.M. UTC-0800');
        });

        it('parseTZ UTC+10.5 (Start of DST)', function () {
            // Oct 3 2021 3:00:00.000 => 2021-10-02T16:30:00.000Z
            var dateString = 'Oct 3 2021 3:00:00.000 A.M.';
            var formatString = 'MMM D YYYY h:mm:ss.SSS AA';
            var tz = 'Australia/Adelaide';      // UTC+10.5 DST
            var dateObj = new Date(Date.UTC(2021, 9, 2, 16, 30, 0, 0));

            expect(date.parseTZ(dateString, formatString, tz).getTime()).to.equal(dateObj.getTime());
        });

        it('transformTZ PDT to JST', function () {
            var dateString1 = '2021-03-14T03:00:00.000 UTC-0700';
            var formatString1 = 'YYYY-MM-DD[T]HH:mm:ss.SSS [UTC]Z';
            var formatString2 = 'MMMM D YYYY h:mm:ss.SSS AA';
            var tz = 'Asia/Tokyo';              // UTC+9

            var dateString2 = 'March 14 2021 7:00:00.000 P.M.';

            // 2021-03-14T03:00:00.000 UTC-0700 => March 14 2021 19:00:00.000
            expect(date.transformTZ(dateString1, formatString1, formatString2, tz)).to.equal(dateString2);
        });
    });

}(this));
