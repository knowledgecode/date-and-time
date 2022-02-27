(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        date = global.date || require('../date-and-time');

    describe('format', function () {
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
            expect(date.format(now, 'Z')).to.match(/^[\+-]\d{4}$/);
        });
        it('"Z" as UTC equals to "+0000"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789),
                utc = true;
            expect(date.format(now, 'Z', utc)).to.equal('+0000');
        });
        it('"ZZ" matches "+XX:XX/-XX:XX"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'ZZ')).to.match(/^[\+-]\d{2}:\d{2}$/);
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

    describe('compile', function () {
        it('YYYY', function () {
            var obj = ['YYYY', 'YYYY'];
            expect(date.compile('YYYY')).to.eql(obj);
        });
        it('Y', function () {
            var obj = ['Y', 'Y'];
            expect(date.compile('Y')).to.eql(obj);
        });
        it('YYYY MMMM', function () {
            var obj = ['YYYY MMMM', 'YYYY', ' ', 'MMMM'];
            expect(date.compile('YYYY MMMM')).to.eql(obj);
        });
        it('YYYY MMM', function () {
            var obj = ['YYYY MMM', 'YYYY', ' ', 'MMM'];
            expect(date.compile('YYYY MMM')).to.eql(obj);
        });
        it('YYYY-MM', function () {
            var obj = ['YYYY-MM', 'YYYY', '-', 'MM'];
            expect(date.compile('YYYY-MM')).to.eql(obj);
        });
        it('YYYY-M', function () {
            var obj = ['YYYY-M', 'YYYY', '-', 'M'];
            expect(date.compile('YYYY-M')).to.eql(obj);
        });
        it('YYYY-MM-DD', function () {
            var obj = ['YYYY-MM-DD', 'YYYY', '-', 'MM', '-', 'DD'];
            expect(date.compile('YYYY-MM-DD')).to.eql(obj);
        });
        it('YYYY-M-D', function () {
            var obj = ['YYYY-M-D', 'YYYY', '-', 'M', '-', 'D'];
            expect(date.compile('YYYY-M-D')).to.eql(obj);
        });
        it('YYYY-MM-DD HH', function () {
            var obj = ['YYYY-MM-DD HH', 'YYYY', '-', 'MM', '-', 'DD', ' ', 'HH'];
            expect(date.compile('YYYY-MM-DD HH')).to.eql(obj);
        });
        it('YYYY-M-D H', function () {
            var obj = ['YYYY-M-D H', 'YYYY', '-', 'M', '-', 'D', ' ', 'H'];
            expect(date.compile('YYYY-M-D H')).to.eql(obj);
        });
        it('YYYY-M-D hh A', function () {
            var obj = ['YYYY-M-D hh A', 'YYYY', '-', 'M', '-', 'D', ' ', 'hh', ' ', 'A'];
            expect(date.compile('YYYY-M-D hh A')).to.eql(obj);
        });
        it('YYYY-M-D h A', function () {
            var obj = ['YYYY-M-D h A', 'YYYY', '-', 'M', '-', 'D', ' ', 'h', ' ', 'A'];
            expect(date.compile('YYYY-M-D h A')).to.eql(obj);
        });
        it('YYYY-MM-DD HH:mm', function () {
            var obj = ['YYYY-MM-DD HH:mm', 'YYYY', '-', 'MM', '-', 'DD', ' ', 'HH', ':', 'mm'];
            expect(date.compile('YYYY-MM-DD HH:mm')).to.eql(obj);
        });
        it('YYYY-M-D H:m', function () {
            var obj = ['YYYY-M-D H:m', 'YYYY', '-', 'M', '-', 'D', ' ', 'H', ':', 'm'];
            expect(date.compile('YYYY-M-D H:m')).to.eql(obj);
        });
        it('YYYY-MM-DD HH:mm:ss', function () {
            var obj = ['YYYY-MM-DD HH:mm:ss', 'YYYY', '-', 'MM', '-', 'DD', ' ', 'HH', ':', 'mm', ':', 'ss'];
            expect(date.compile('YYYY-MM-DD HH:mm:ss')).to.eql(obj);
        });
        it('YYYY-M-D H:m:s', function () {
            var obj = ['YYYY-M-D H:m:s', 'YYYY', '-', 'M', '-', 'D', ' ', 'H', ':', 'm', ':', 's'];
            expect(date.compile('YYYY-M-D H:m:s')).to.eql(obj);
        });
        it('YYYY-M-D H:m:s.SSS', function () {
            var obj = ['YYYY-M-D H:m:s.SSS', 'YYYY', '-', 'M', '-', 'D', ' ', 'H', ':', 'm', ':', 's', '.', 'SSS'];
            expect(date.compile('YYYY-M-D H:m:s.SSS')).to.eql(obj);
        });
        it('YYYY-M-D H:m:s.SS', function () {
            var obj = ['YYYY-M-D H:m:s.SS', 'YYYY', '-', 'M', '-', 'D', ' ', 'H', ':', 'm', ':', 's', '.', 'SS'];
            expect(date.compile('YYYY-M-D H:m:s.SS')).to.eql(obj);
        });
        it('YYYY-M-D H:m:s.S', function () {
            var obj = ['YYYY-M-D H:m:s.S', 'YYYY', '-', 'M', '-', 'D', ' ', 'H', ':', 'm', ':', 's', '.', 'S'];
            expect(date.compile('YYYY-M-D H:m:s.S')).to.eql(obj);
        });
        it('MMDDHHmmssSSS', function () {
            var obj = ['MMDDHHmmssSSS', 'MM', 'DD', 'HH', 'mm', 'ss', 'SSS'];
            expect(date.compile('MMDDHHmmssSSS')).to.eql(obj);
        });
        it('DDHHmmssSSS', function () {
            var obj = ['DDHHmmssSSS', 'DD', 'HH', 'mm', 'ss', 'SSS'];
            expect(date.compile('DDHHmmssSSS')).to.eql(obj);
        });
        it('HHmmssSSS', function () {
            var obj = ['HHmmssSSS', 'HH', 'mm', 'ss', 'SSS'];
            expect(date.compile('HHmmssSSS')).to.eql(obj);
        });
        it('mmssSSS', function () {
            var obj = ['mmssSSS', 'mm', 'ss', 'SSS'];
            expect(date.compile('mmssSSS')).to.eql(obj);
        });
        it('ssSSS', function () {
            var obj = ['ssSSS', 'ss', 'SSS'];
            expect(date.compile('ssSSS')).to.eql(obj);
        });
        it('SSS', function () {
            var obj = ['SSS', 'SSS'];
            expect(date.compile('SSS')).to.eql(obj);
        });
        it('foo', function () {
            var obj = ['foo', 'f', 'oo'];
            expect(date.compile('foo')).to.eql(obj);
        });
        it('bar', function () {
            var obj = ['bar', 'b', 'a', 'r'];
            expect(date.compile('bar')).to.eql(obj);
        });
        it('YYYYMMDD', function () {
            var obj = ['YYYYMMDD', 'YYYY', 'MM', 'DD'];
            expect(date.compile('YYYYMMDD')).to.eql(obj);
        });
        it('20150101235959', function () {
            var obj = ['20150101235959', '2', '0', '1', '5', '0', '1', '0', '1', '2', '3', '5', '9', '5', '9'];
            expect(date.compile('20150101235959')).to.eql(obj);
        });
        it('YYYY?M?D H?m?s?S', function () {
            var obj = ['YYYY?M?D H?m?s?S', 'YYYY', '?', 'M', '?', 'D', ' ', 'H', '?', 'm', '?', 's', '?', 'S'];
            expect(date.compile('YYYY?M?D H?m?s?S')).to.eql(obj);
        });
        it('[Y]YYYY[M]M[D]D[H]H[m]m[s]s[S]S', function () {
            var obj = ['[Y]YYYY[M]M[D]D[H]H[m]m[s]s[S]S', '[Y]', 'YYYY', '[M]', 'M', '[D]', 'D', '[H]', 'H', '[m]', 'm', '[s]', 's', '[S]', 'S'];
            expect(date.compile('[Y]YYYY[M]M[D]D[H]H[m]m[s]s[S]S')).to.eql(obj);
        });
        it('[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]', function () {
            var obj = ['[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]', '[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]'];
            expect(date.compile('[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]')).to.eql(obj);
        });
        it('                 ', function () {
            var obj = ['                 ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
            expect(date.compile('                 ')).to.eql(obj);
        });
    });

    describe('preparse', function () {
        it('YYYY', function () {
            var dt = { Y: 0, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 4, _length: 4, _match: 1 };
            expect(date.preparse('0000', 'YYYY')).to.eql(dt);
        });
        it('YYYY', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 4, _length: 4, _match: 1 };
            expect(date.preparse('0001', 'YYYY')).to.eql(dt);
        });
        it('YYYY', function () {
            var dt = { Y: 99, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 4, _length: 4, _match: 1 };
            expect(date.preparse('0099', 'YYYY')).to.eql(dt);
        });
        it('YYYY', function () {
            var dt = { Y: 100, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 4, _length: 4, _match: 1 };
            expect(date.preparse('0100', 'YYYY')).to.eql(dt);
        });
        it('YYYY', function () {
            var dt = { Y: 1899, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 4, _length: 4, _match: 1 };
            expect(date.preparse('1899', 'YYYY')).to.eql(dt);
        });
        it('YYYY', function () {
            var dt = { Y: 1900, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 4, _length: 4, _match: 1 };
            expect(date.preparse('1900', 'YYYY')).to.eql(dt);
        });
        it('YYYY', function () {
            var dt = { Y: 1969, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 4, _length: 4, _match: 1 };
            expect(date.preparse('1969', 'YYYY')).to.eql(dt);
        });
        it('YYYY', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 4, _length: 4, _match: 1 };
            expect(date.preparse('1970', 'YYYY')).to.eql(dt);
        });
        it('YYYY', function () {
            var dt = { Y: 1999, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 4, _length: 4, _match: 1 };
            expect(date.preparse('1999', 'YYYY')).to.eql(dt);
        });
        it('YYYY', function () {
            var dt = { Y: 2000, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 4, _length: 4, _match: 1 };
            expect(date.preparse('2000', 'YYYY')).to.eql(dt);
        });
        it('YYYY', function () {
            var dt = { Y: 9999, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 4, _length: 4, _match: 1 };
            expect(date.preparse('9999', 'YYYY')).to.eql(dt);
        });
        it('Y', function () {
            var dt = { Y: 0, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.preparse('0', 'Y')).to.eql(dt);
        });
        it('Y', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.preparse('1', 'Y')).to.eql(dt);
        });
        it('Y', function () {
            var dt = { Y: 99, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 2, _length: 2, _match: 1 };
            expect(date.preparse('99', 'Y')).to.eql(dt);
        });
        it('Y', function () {
            var dt = { Y: 100, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 3, _length: 3, _match: 1 };
            expect(date.preparse('100', 'Y')).to.eql(dt);
        });
        it('YYYY MMMM', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 12, _length: 12, _match: 2 };
            expect(date.preparse('2015 January', 'YYYY MMMM')).to.eql(dt);
        });
        it('YYYY MMMM', function () {
            var dt = { Y: 2015, M: 12, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 13, _length: 13, _match: 2 };
            expect(date.preparse('2015 December', 'YYYY MMMM')).to.eql(dt);
        });
        it('YYYY MMMM', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 5, _length: 9, _match: 1 };
            expect(date.preparse('2015 Zero', 'YYYY MMMM')).to.eql(dt);
        });
        it('YYYY MMM', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 8, _length: 8, _match: 2 };
            expect(date.preparse('2015 Jan', 'YYYY MMM')).to.eql(dt);
        });
        it('YYYY MMM', function () {
            var dt = { Y: 2015, M: 12, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 8, _length: 8, _match: 2 };
            expect(date.preparse('2015 Dec', 'YYYY MMM')).to.eql(dt);
        });
        it('YYYY MMM', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 5, _length: 9, _match: 1 };
            expect(date.preparse('2015 Zero', 'YYYY MMM')).to.eql(dt);
        });
        it('YYYY-MM', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 7, _length: 7, _match: 2 };
            expect(date.preparse('2015-01', 'YYYY-MM')).to.eql(dt);
        });
        it('YYYY-MM', function () {
            var dt = { Y: 2015, M: 12, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 7, _length: 7, _match: 2 };
            expect(date.preparse('2015-12', 'YYYY-MM')).to.eql(dt);
        });
        it('YYYY-MM', function () {
            var dt = { Y: 2015, M: 0, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 7, _length: 7, _match: 2 };
            expect(date.preparse('2015-00', 'YYYY-MM')).to.eql(dt);
        });
        it('YYYY-M', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 6, _length: 6, _match: 2 };
            expect(date.preparse('2015-1', 'YYYY-M')).to.eql(dt);
        });
        it('YYYY-M', function () {
            var dt = { Y: 2015, M: 12, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 7, _length: 7, _match: 2 };
            expect(date.preparse('2015-12', 'YYYY-M')).to.eql(dt);
        });
        it('YYYY-M', function () {
            var dt = { Y: 2015, M: 0, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 6, _length: 6, _match: 2 };
            expect(date.preparse('2015-0', 'YYYY-M')).to.eql(dt);
        });
        it('YYYY-MM-DD', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 10, _length: 10, _match: 3 };
            expect(date.preparse('2015-01-01', 'YYYY-MM-DD')).to.eql(dt);
        });
        it('YYYY-MM-DD', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 10, _length: 10, _match: 3 };
            expect(date.preparse('2015-12-31', 'YYYY-MM-DD')).to.eql(dt);
        });
        it('YYYY-MM-DD', function () {
            var dt = { Y: 2015, M: 0, D: 0, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 10, _length: 10, _match: 3 };
            expect(date.preparse('2015-00-00', 'YYYY-MM-DD')).to.eql(dt);
        });
        it('YYYY-M-D', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 8, _length: 8, _match: 3 };
            expect(date.preparse('2015-1-1', 'YYYY-M-D')).to.eql(dt);
        });
        it('YYYY-M-D', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 10, _length: 10, _match: 3 };
            expect(date.preparse('2015-12-31', 'YYYY-M-D')).to.eql(dt);
        });
        it('YYYY-M-D', function () {
            var dt = { Y: 2015, M: 0, D: 0, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 8, _length: 8, _match: 3 };
            expect(date.preparse('2015-0-0', 'YYYY-M-D')).to.eql(dt);
        });
        it('YYYY-MM-DD HH', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 13, _length: 13, _match: 4 };
            expect(date.preparse('2015-01-01 00', 'YYYY-MM-DD HH')).to.eql(dt);
        });
        it('YYYY-MM-DD HH', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 23, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 13, _length: 13, _match: 4 };
            expect(date.preparse('2015-12-31 23', 'YYYY-MM-DD HH')).to.eql(dt);
        });
        it('YYYY-MM-DD HH', function () {
            var dt = { Y: 2015, M: 0, D: 0, H: 24, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 13, _length: 13, _match: 4 };
            expect(date.preparse('2015-00-00 24', 'YYYY-MM-DD HH')).to.eql(dt);
        });
        it('YYYY-M-D H', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 10, _length: 10, _match: 4 };
            expect(date.preparse('2015-1-1 0', 'YYYY-M-D H')).to.eql(dt);
        });
        it('YYYY-M-D H', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 23, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 13, _length: 13, _match: 4 };
            expect(date.preparse('2015-12-31 23', 'YYYY-M-D H')).to.eql(dt);
        });
        it('YYYY-M-D H', function () {
            var dt = { Y: 2015, M: 0, D: 0, H: 24, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 11, _length: 11, _match: 4 };
            expect(date.preparse('2015-0-0 24', 'YYYY-M-D H')).to.eql(dt);
        });
        it('YYYY-M-D hh A', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 12, m: 0, s: 0, S: 0, Z: 0, _index: 14, _length: 14, _match: 5 };
            expect(date.preparse('2015-1-1 12 AM', 'YYYY-M-D hh A')).to.eql(dt);
        });
        it('YYYY-M-D hh A', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 23, A: 1, h: 11, m: 0, s: 0, S: 0, Z: 0, _index: 16, _length: 16, _match: 5 };
            expect(date.preparse('2015-12-31 11 PM', 'YYYY-M-D hh A')).to.eql(dt);
        });
        it('YYYY-M-D hh A', function () {
            var dt = { Y: 2015, M: 0, D: 0, H: 0, A: 0, h: 12, m: 0, s: 0, S: 0, Z: 0, _index: 14, _length: 14, _match: 5 };
            expect(date.preparse('2015-0-0 12 AM', 'YYYY-M-D hh A')).to.eql(dt);
        });
        it('YYYY-M-D h A', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 12, m: 0, s: 0, S: 0, Z: 0, _index: 14, _length: 14, _match: 5 };
            expect(date.preparse('2015-1-1 12 AM', 'YYYY-M-D h A')).to.eql(dt);
        });
        it('YYYY-M-D h A', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 23, A: 1, h: 11, m: 0, s: 0, S: 0, Z: 0, _index: 16, _length: 16, _match: 5 };
            expect(date.preparse('2015-12-31 11 PM', 'YYYY-M-D h A')).to.eql(dt);
        });
        it('YYYY-M-D h A', function () {
            var dt = { Y: 2015, M: 0, D: 0, H: 0, A: 0, h: 12, m: 0, s: 0, S: 0, Z: 0, _index: 14, _length: 14, _match: 5 };
            expect(date.preparse('2015-0-0 12 AM', 'YYYY-M-D h A')).to.eql(dt);
        });
        it('YYYY-MM-DD HH:mm', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 16, _length: 16, _match: 5 };
            expect(date.preparse('2015-01-01 00:00', 'YYYY-MM-DD HH:mm')).to.eql(dt);
        });
        it('YYYY-MM-DD HH:mm', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 23, A: 0, h: 0, m: 59, s: 0, S: 0, Z: 0, _index: 16, _length: 16, _match: 5 };
            expect(date.preparse('2015-12-31 23:59', 'YYYY-MM-DD HH:mm')).to.eql(dt);
        });
        it('YYYY-MM-DD HH:mm', function () {
            var dt = { Y: 2015, M: 0, D: 0, H: 24, A: 0, h: 0, m: 60, s: 0, S: 0, Z: 0, _index: 16, _length: 16, _match: 5 };
            expect(date.preparse('2015-00-00 24:60', 'YYYY-MM-DD HH:mm')).to.eql(dt);
        });
        it('YYYY-M-D H:m', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 12, _length: 12, _match: 5 };
            expect(date.preparse('2015-1-1 0:0', 'YYYY-M-D H:m')).to.eql(dt);
        });
        it('YYYY-M-D H:m', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 23, A: 0, h: 0, m: 59, s: 0, S: 0, Z: 0, _index: 16, _length: 16, _match: 5 };
            expect(date.preparse('2015-12-31 23:59', 'YYYY-M-D H:m')).to.eql(dt);
        });
        it('YYYY-M-D H:m', function () {
            var dt = { Y: 2015, M: 0, D: 0, H: 24, A: 0, h: 0, m: 60, s: 0, S: 0, Z: 0, _index: 14, _length: 14, _match: 5 };
            expect(date.preparse('2015-0-0 24:60', 'YYYY-M-D H:m')).to.eql(dt);
        });
        it('YYYY-MM-DD HH:mm:ss', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 19, _length: 19, _match: 6 };
            expect(date.preparse('2015-01-01 00:00:00', 'YYYY-MM-DD HH:mm:ss')).to.eql(dt);
        });
        it('YYYY-MM-DD HH:mm:ss', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 23, A: 0, h: 0, m: 59, s: 59, S: 0, Z: 0, _index: 19, _length: 19, _match: 6 };
            expect(date.preparse('2015-12-31 23:59:59', 'YYYY-MM-DD HH:mm:ss')).to.eql(dt);
        });
        it('YYYY-MM-DD HH:mm:ss', function () {
            var dt = { Y: 2015, M: 0, D: 0, H: 24, A: 0, h: 0, m: 60, s: 60, S: 0, Z: 0, _index: 19, _length: 19, _match: 6 };
            expect(date.preparse('2015-00-00 24:60:60', 'YYYY-MM-DD HH:mm:ss')).to.eql(dt);
        });
        it('YYYY-M-D H:m:s', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 14, _length: 14, _match: 6 };
            expect(date.preparse('2015-1-1 0:0:0', 'YYYY-M-D H:m:s')).to.eql(dt);
        });
        it('YYYY-M-D H:m:s', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 23, A: 0, h: 0, m: 59, s: 59, S: 0, Z: 0, _index: 19, _length: 19, _match: 6 };
            expect(date.preparse('2015-12-31 23:59:59', 'YYYY-M-D H:m:s')).to.eql(dt);
        });
        it('YYYY-M-D H:m:s', function () {
            var dt = { Y: 2015, M: 0, D: 0, H: 24, A: 0, h: 0, m: 60, s: 60, S: 0, Z: 0, _index: 17, _length: 17, _match: 6 };
            expect(date.preparse('2015-0-0 24:60:60', 'YYYY-M-D H:m:s')).to.eql(dt);
        });
        it('YYYY-M-D H:m:s.SSS', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 16, _length: 16, _match: 7 };
            expect(date.preparse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.SSS')).to.eql(dt);
        });
        it('YYYY-M-D H:m:s.SSS', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 23, A: 0, h: 0, m: 59, s: 59, S: 999, Z: 0, _index: 23, _length: 23, _match: 7 };
            expect(date.preparse('2015-12-31 23:59:59.999', 'YYYY-M-D H:m:s.SSS')).to.eql(dt);
        });
        it('YYYY-M-D H:m:s.SSS', function () {
            var dt = { Y: 2015, M: 0, D: 0, H: 24, A: 0, h: 0, m: 60, s: 61, S: 0, Z: 0, _index: 21, _length: 21, _match: 7 };
            expect(date.preparse('2015-0-0 24:60:61.000', 'YYYY-M-D H:m:s.SSS')).to.eql(dt);
        });
        it('YYYY-M-D H:m:s.SS', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 16, _length: 16, _match: 7 };
            expect(date.preparse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.SS')).to.eql(dt);
        });
        it('YYYY-M-D H:m:s.SS', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 23, A: 0, h: 0, m: 59, s: 59, S: 990, Z: 0, _index: 22, _length: 22, _match: 7 };
            expect(date.preparse('2015-12-31 23:59:59.99', 'YYYY-M-D H:m:s.SS')).to.eql(dt);
        });
        it('YYYY-M-D H:m:s.SS', function () {
            var dt = { Y: 2015, M: 0, D: 0, H: 24, A: 0, h: 0, m: 60, s: 61, S: 0, Z: 0, _index: 20, _length: 20, _match: 7 };
            expect(date.preparse('2015-0-0 24:60:61.00', 'YYYY-M-D H:m:s.SS')).to.eql(dt);
        });
        it('YYYY-M-D H:m:s.S', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 16, _length: 16, _match: 7 };
            expect(date.preparse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.S')).to.eql(dt);
        });
        it('YYYY-M-D H:m:s.S', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 23, A: 0, h: 0, m: 59, s: 59, S: 900, Z: 0, _index: 21, _length: 21, _match: 7 };
            expect(date.preparse('2015-12-31 23:59:59.9', 'YYYY-M-D H:m:s.S')).to.eql(dt);
        });
        it('YYYY M D H m s S', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 23, A: 0, h: 0, m: 59, s: 59, S: 900, Z: 0, _index: 21, _length: 21, _match: 7 };
            expect(date.preparse('2015-12-31 23:59:59.9', 'YYYY M D H m s S')).to.eql(dt);
        });
        it('YYYY-M-D H:m:s.S', function () {
            var dt = { Y: 2015, M: 0, D: 0, H: 24, A: 0, h: 0, m: 60, s: 61, S: 0, Z: 0, _index: 19, _length: 19, _match: 7 };
            expect(date.preparse('2015-0-0 24:60:61.0', 'YYYY-M-D H:m:s.S')).to.eql(dt);
        });
        it('YYYY-M-D H:m:s.SSS Z', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 22, _length: 22, _match: 8 };
            expect(date.preparse('2015-1-1 0:0:0.0 +0000', 'YYYY-M-D H:m:s.SSS Z')).to.eql(dt);
        });
        it('YYYY-M-D H:m:s.SSS Z', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 23, A: 0, h: 0, m: 59, s: 59, S: 999, Z: 840, _index: 29, _length: 29, _match: 8 };
            expect(date.preparse('2015-12-31 23:59:59.999 -1400', 'YYYY-M-D H:m:s.SSS Z')).to.eql(dt);
        });
        it('YYYY-M-D H:m:s.SSS Z', function () {
            var dt = { Y: 2015, M: 0, D: 0, H: 24, A: 0, h: 0, m: 60, s: 61, S: 0, Z: -720, _index: 27, _length: 27, _match: 8 };
            expect(date.preparse('2015-0-0 24:60:61.000 +1200', 'YYYY-M-D H:m:s.SSS Z')).to.eql(dt);
        });
        it('MMDDHHmmssSSS', function () {
            var dt = { Y: 1970, M: 12, D: 31, H: 23, A: 0, h: 0, m: 59, s: 59, S: 999, Z: 0, _index: 13, _length: 13, _match: 6 };
            expect(date.preparse('1231235959999', 'MMDDHHmmssSSS')).to.eql(dt);
        });
        it('DDHHmmssSSS', function () {
            var dt = { Y: 1970, M: 1, D: 31, H: 23, A: 0, h: 0, m: 59, s: 59, S: 999, Z: 0, _index: 11, _length: 11, _match: 5 };
            expect(date.preparse('31235959999', 'DDHHmmssSSS')).to.eql(dt);
        });
        it('HHmmssSSS', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 23, A: 0, h: 0, m: 59, s: 59, S: 999, Z: 0, _index: 9, _length: 9, _match: 4 };
            expect(date.preparse('235959999', 'HHmmssSSS')).to.eql(dt);
        });
        it('mmssSSS', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 59, s: 59, S: 999, Z: 0, _index: 7, _length: 7, _match: 3 };
            expect(date.preparse('5959999', 'mmssSSS')).to.eql(dt);
        });
        it('ssSSS', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 59, S: 999, Z: 0, _index: 5, _length: 5, _match: 2 };
            expect(date.preparse('59999', 'ssSSS')).to.eql(dt);
        });
        it('SSS', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 999, Z: 0, _index: 3, _length: 3, _match: 1 };
            expect(date.preparse('999', 'SSS')).to.eql(dt);
        });
        it('Z', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: -355, _index: 5, _length: 5, _match: 1 };
            expect(date.preparse('+0555', 'Z')).to.eql(dt);
        });
        it('Z', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 5, _match: 0 };
            expect(date.preparse('+9999', 'Z')).to.eql(dt);
        });
        it('ZZ', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: -355, _index: 6, _length: 6, _match: 1 };
            expect(date.preparse('+05:55', 'ZZ')).to.eql(dt);
        });
        it('ZZ', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 6, _match: 0 };
            expect(date.preparse('+99:99', 'Z')).to.eql(dt);
        });
        it('foo', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 14, _match: 0 };
            expect(date.preparse('20150101235959', 'foo')).to.eql(dt);
        });
        it('bar', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 14, _match: 0 };
            expect(date.preparse('20150101235959', 'bar')).to.eql(dt);
        });
        it('YYYYMMDD', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 8, _length: 14, _match: 3 };
            expect(date.preparse('20150101235959', 'YYYYMMDD')).to.eql(dt);
        });
        it('20150101235959', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 14, _length: 14, _match: 0 };
            expect(date.preparse('20150101235959', '20150101235959')).to.eql(dt);
        });
        it('YYYY?M?D H?m?s?S', function () {
            var dt = { Y: 2015, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 4, _length: 21, _match: 1 };
            expect(date.preparse('2015-12-31 23:59:59.9', 'YYYY?M?D H?m?s?S')).to.eql(dt);
        });
        it('YYYY-MM-DD HH:mm:ssZ', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 23, A: 0, h: 0, m: 59, s: 59, S: 0, Z: 0, _index: 19, _length: 20, _match: 6 };
            expect(date.preparse('2015-12-31 23:59:59K', 'YYYY-MM-DD HH:mm:ss[Z]')).to.eql(dt);
        });
        it('[Y]YYYY[M]M[D]D[H]H[m]m[s]s[S]S', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 23, A: 0, h: 0, m: 59, s: 59, S: 900, Z: 0, _index: 22, _length: 22, _match: 7 };
            expect(date.preparse('Y2015M12D31H23m59s59S9', '[Y]YYYY[M]M[D]D[H]H[m]m[s]s[S]S')).to.eql(dt);
        });
        it('[Y]YYYY[M]M[D]D[H]H[m]m[s]s[S]S', function () {
            var dt = { Y: 2015, M: 12, D: 31, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 22, _length: 22, _match: 3 };
            expect(date.preparse('Y2015M12D31H23m59s59S9', '[Y]YYYY[M]M[D]D...')).to.eql(dt);
        });
        it('[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 36, _length: 36, _match: 0 };
            expect(date.preparse('[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S', '[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]')).to.eql(dt);
        });
        it('[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 36, _match: 0 };
            expect(date.preparse('[Y]2015[M]12[D]31[H]23[m]59[s]59[S]9', '[[Y]YYYY[M]MM[D]DD[H]HH[m]mm[s]ss[S]S]')).to.eql(dt);
        });
        it('                 ', function () {
            var dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 17, _length: 17, _match: 0 };
            expect(date.preparse('20151231235959900', '                 ')).to.eql(dt);
        });
    });

    describe('parse', function () {
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

    describe('transform', function () {
        it('D/M/YYYY => M/D/YYYY', function () {
            expect(date.transform('3/8/2020', 'D/M/YYYY', 'M/D/YYYY')).to.eql('8/3/2020');
        });
        it('HH:mm => hh:mm A', function () {
            expect(date.transform('13:05', 'HH:mm', 'hh:mm A')).to.eql('01:05 PM');
        });
        it('HH:mm => hh:mm A, output as UTC', function () {
            // This test may fail if you run it in a time zone with daylight saving time.
            var utc = date.format(new Date(2020, 3, 1, 13, 5), 'hh:mm A', true);
            expect(date.transform('13:05', 'HH:mm', 'hh:mm A', true)).to.eql(utc);
        });
        it('D/M/YYYY => M/D/YYYY, with compile', function () {
            var arg1 = date.compile('D/M/YYYY');
            var arg2 = date.compile('M/D/YYYY');
            expect(date.transform('3/8/2020', arg1, arg2)).to.eql('8/3/2020');
        });
    });

    describe('addition', function () {
        it('add a year', function () {
            var date1 = new Date(1969, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(1970, 11, 31, 23, 59, 59, 999);
            expect(date.addYears(date1, 1)).to.eql(date2);
        });
        it('subtract a year', function () {
            var date1 = new Date(1970, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(1969, 11, 31, 23, 59, 59, 999);
            expect(date.addYears(date1, -1)).to.eql(date2);
        });
        it('add a month', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 12, 31, 23, 59, 59, 999);
            expect(date.addMonths(date1, 1)).to.eql(date2);
        });
        it('subtract a month', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 10, 31, 23, 59, 59, 999);
            expect(date.addMonths(date1, -1)).to.eql(date2);
        });
        it('add a day', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 32, 23, 59, 59, 999);
            expect(date.addDays(date1, 1)).to.eql(date2);
        });
        it('subtract a day', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 30, 23, 59, 59, 999);
            expect(date.addDays(date1, -1)).to.eql(date2);
        });
        it('add an hour', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 24, 59, 59, 999);
            expect(date.addHours(date1, 1)).to.eql(date2);
        });
        it('subtract an hour', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 22, 59, 59, 999);
            expect(date.addHours(date1, -1)).to.eql(date2);
        });
        it('add a minute', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 60, 59, 999);
            expect(date.addMinutes(date1, 1)).to.eql(date2);
        });
        it('subtract a minute', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 58, 59, 999);
            expect(date.addMinutes(date1, -1)).to.eql(date2);
        });
        it('add a second', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 60, 999);
            expect(date.addSeconds(date1, 1)).to.eql(date2);
        });
        it('subtract a second', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 58, 999);
            expect(date.addSeconds(date1, -1)).to.eql(date2);
        });
        it('add a millisecond', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 1000);
            expect(date.addMilliseconds(date1, 1)).to.eql(date2);
        });
        it('subtract a millisecond', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 998);
            expect(date.addMilliseconds(date1, -1)).to.eql(date2);
        });
    });

    describe('subtraction', function () {
        it('A year is 365 days', function () {
            var date1 = new Date(2015, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date1, date2).toDays()).to.equal(365);
            expect(date.subtract(date1, date2).toHours()).to.equal(365 * 24);
            expect(date.subtract(date1, date2).toMinutes()).to.equal(365 * 24 * 60);
            expect(date.subtract(date1, date2).toSeconds()).to.equal(365 * 24 * 60 * 60);
            expect(date.subtract(date1, date2).toMilliseconds()).to.equal(365 * 24 * 60 * 60 * 1000);
        });
        it('A year is 365 days (reverse)', function () {
            var date1 = new Date(2015, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date2, date1).toDays()).to.equal(-365);
            expect(date.subtract(date2, date1).toHours()).to.equal(-365 * 24);
            expect(date.subtract(date2, date1).toMinutes()).to.equal(-365 * 24 * 60);
            expect(date.subtract(date2, date1).toSeconds()).to.equal(-365 * 24 * 60 * 60);
            expect(date.subtract(date2, date1).toMilliseconds()).to.equal(-365 * 24 * 60 * 60 * 1000);
        });
        it('A month is 31 days', function () {
            var date1 = new Date(2014, 12, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date1, date2).toDays()).to.equal(31);
            expect(date.subtract(date1, date2).toHours()).to.equal(31 * 24);
            expect(date.subtract(date1, date2).toMinutes()).to.equal(31 * 24 * 60);
            expect(date.subtract(date1, date2).toSeconds()).to.equal(31 * 24 * 60 * 60);
            expect(date.subtract(date1, date2).toMilliseconds()).to.equal(31 * 24 * 60 * 60 * 1000);
        });
        it('A month is 31 days (reverse)', function () {
            var date1 = new Date(2014, 12, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date2, date1).toDays()).to.equal(-31);
            expect(date.subtract(date2, date1).toHours()).to.equal(-31 * 24);
            expect(date.subtract(date2, date1).toMinutes()).to.equal(-31 * 24 * 60);
            expect(date.subtract(date2, date1).toSeconds()).to.equal(-31 * 24 * 60 * 60);
            expect(date.subtract(date2, date1).toMilliseconds()).to.equal(-31 * 24 * 60 * 60 * 1000);
        });
        it('A day', function () {
            var date1 = new Date(2014, 11, 32, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date1, date2).toDays()).to.equal(1);
            expect(date.subtract(date1, date2).toHours()).to.equal(24);
            expect(date.subtract(date1, date2).toMinutes()).to.equal(24 * 60);
            expect(date.subtract(date1, date2).toSeconds()).to.equal(24 * 60 * 60);
            expect(date.subtract(date1, date2).toMilliseconds()).to.equal(24 * 60 * 60 * 1000);
        });
        it('A day (reverse)', function () {
            var date1 = new Date(2014, 11, 32, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date2, date1).toDays()).to.equal(-1);
            expect(date.subtract(date2, date1).toHours()).to.equal(-1 * 24);
            expect(date.subtract(date2, date1).toMinutes()).to.equal(-1 * 24 * 60);
            expect(date.subtract(date2, date1).toSeconds()).to.equal(-1 * 24 * 60 * 60);
            expect(date.subtract(date2, date1).toMilliseconds()).to.equal(-1 * 24 * 60 * 60 * 1000);
        });
        it('An hour', function () {
            var date1 = new Date(2014, 11, 31, 24, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date1, date2).toDays()).to.equal(1 / 24);
            expect(date.subtract(date1, date2).toHours()).to.equal(1);
            expect(date.subtract(date1, date2).toMinutes()).to.equal(60);
            expect(date.subtract(date1, date2).toSeconds()).to.equal(60 * 60);
            expect(date.subtract(date1, date2).toMilliseconds()).to.equal(60 * 60 * 1000);
        });
        it('An hour (reverse)', function () {
            var date1 = new Date(2014, 11, 31, 24, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date2, date1).toDays()).to.equal(-1 / 24);
            expect(date.subtract(date2, date1).toHours()).to.equal(-1);
            expect(date.subtract(date2, date1).toMinutes()).to.equal(-1 * 60);
            expect(date.subtract(date2, date1).toSeconds()).to.equal(-1 * 60 * 60);
            expect(date.subtract(date2, date1).toMilliseconds()).to.equal(-1 * 60 * 60 * 1000);
        });
        it('A minute', function () {
            var date1 = new Date(2014, 11, 31, 23, 60, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date1, date2).toDays()).to.equal(1 / (24 * 60));
            expect(date.subtract(date1, date2).toHours()).to.equal(1 / 60);
            expect(date.subtract(date1, date2).toMinutes()).to.equal(1);
            expect(date.subtract(date1, date2).toSeconds()).to.equal(60);
            expect(date.subtract(date1, date2).toMilliseconds()).to.equal(60 * 1000);
        });
        it('A minute (reverse)', function () {
            var date1 = new Date(2014, 11, 31, 23, 60, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date2, date1).toDays()).to.equal(-1 / (24 * 60));
            expect(date.subtract(date2, date1).toHours()).to.equal(-1 / 60);
            expect(date.subtract(date2, date1).toMinutes()).to.equal(-1);
            expect(date.subtract(date2, date1).toSeconds()).to.equal(-1 * 60);
            expect(date.subtract(date2, date1).toMilliseconds()).to.equal(-1 * 60 * 1000);
        });
        it('A second', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 60, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date1, date2).toDays()).to.equal(1 / (24 * 60 * 60));
            expect(date.subtract(date1, date2).toHours()).to.equal(1 / (60 * 60));
            expect(date.subtract(date1, date2).toMinutes()).to.equal(1 / 60);
            expect(date.subtract(date1, date2).toSeconds()).to.equal(1);
            expect(date.subtract(date1, date2).toMilliseconds()).to.equal(1000);
        });
        it('A second (reverse)', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 60, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date2, date1).toDays()).to.equal(-1 / (24 * 60 * 60));
            expect(date.subtract(date2, date1).toHours()).to.equal(-1 / (60 * 60));
            expect(date.subtract(date2, date1).toMinutes()).to.equal(-1 / 60);
            expect(date.subtract(date2, date1).toSeconds()).to.equal(-1);
            expect(date.subtract(date2, date1).toMilliseconds()).to.equal(-1 * 1000);
        });
        it('A millisecond', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 998);
            expect(date.subtract(date1, date2).toDays()).to.equal(1 / (24 * 60 * 60 * 1000));
            expect(date.subtract(date1, date2).toHours()).to.equal(1 / (60 * 60 * 1000));
            expect(date.subtract(date1, date2).toMinutes()).to.equal(1 / (60 * 1000));
            expect(date.subtract(date1, date2).toSeconds()).to.equal(1 / 1000);
            expect(date.subtract(date1, date2).toMilliseconds()).to.equal(1);
        });
        it('A millisecond (reverse)', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 998);
            expect(date.subtract(date2, date1).toDays()).to.equal(-1 / (24 * 60 * 60 * 1000));
            expect(date.subtract(date2, date1).toHours()).to.equal(-1 / (60 * 60 * 1000));
            expect(date.subtract(date2, date1).toMinutes()).to.equal(-1 / (60 * 1000));
            expect(date.subtract(date2, date1).toSeconds()).to.equal(-1 / 1000);
            expect(date.subtract(date2, date1).toMilliseconds()).to.equal(-1);
        });
    });

    describe('validation', function () {
        it('2014-12-31 12:34:56.789 is valid', function () {
            expect(date.isValid('20141231123456789', 'YYYYMMDDHHmmssSSS')).to.be(true);
        });
        it('2012-2-29 is valid', function () {
            expect(date.isValid('2012-2-29', 'YYYY-M-D')).to.be(true);
        });
        it('2100-2-29 is invalid', function () {
            expect(date.isValid('2100-2-29', 'YYYY-M-D')).to.be(false);
        });
        it('2000-2-29 is valid', function () {
            expect(date.isValid('2000-2-29', 'YYYY-M-D')).to.be(true);
        });
        it('2014-2-29 is invalid', function () {
            expect(date.isValid('2014-2-29', 'YYYY-M-D')).to.be(false);
        });
        it('2014-2-28 is valid', function () {
            expect(date.isValid('2014-2-28', 'YYYY-M-D')).to.be(true);
        });
        it('2014-4-31 is invalid', function () {
            expect(date.isValid('2014-4-31', 'YYYY-M-D')).to.be(false);
        });
        it('24:00 is invalid', function () {
            expect(date.isValid('2014-4-30 24:00', 'YYYY-M-D H:m')).to.be(false);
        });
        it('13:00 PM is invalid', function () {
            expect(date.isValid('2014-4-30 13:00 PM', 'YYYY-M-D h:m A')).to.be(false);
        });
        it('23:60 is invalid', function () {
            expect(date.isValid('2014-4-30 23:60', 'YYYY-M-D H:m')).to.be(false);
        });
        it('23:59:60 is invalid', function () {
            expect(date.isValid('2014-4-30 23:59:60', 'YYYY-M-D H:m:s')).to.be(false);
        });
        it('All zero is invalid', function () {
            expect(date.isValid('00000000000000000', 'YYYYMMDDHHmmssSSS')).to.be(false);
        });
        it('All nine is invalid', function () {
            expect(date.isValid('99999999999999999', 'YYYYMMDDHHmmssSSS')).to.be(false);
        });
        it('foo is invalid', function () {
            expect(date.isValid('20150101235959', 'foo')).to.be(false);
        });
        it('bar is invalid', function () {
            expect(date.isValid('20150101235959', 'bar')).to.be(false);
        });
        it('YYYYMMDD is invalid', function () {
            expect(date.isValid('20150101235959', 'YYYYMMDD')).to.be(false);
        });
        it('20150101235959 is invalid', function () {
            expect(date.isValid('20150101235959', '20150101235959')).to.be(false);
        });
        it('Y == 0', function () {
            var dt = { Y: 0, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('Y > 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('Y < 0', function () {
            var dt = { Y: -1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('Y > 9999', function () {
            var dt = { Y: 100000, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('M == 0', function () {
            var dt = { Y: 1, M: 0, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('M > 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('M < 0', function () {
            var dt = { Y: 1, M: -1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('M > 12', function () {
            var dt = { Y: 1, M: 13, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('M < 13', function () {
            var dt = { Y: 1, M: 12, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('D == 0', function () {
            var dt = { Y: 1, M: 1, D: 0, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('D > 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('D < 0', function () {
            var dt = { Y: 1, M: 1, D: -1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('D == 28', function () {
            var dt = { Y: 1, M: 2, D: 28, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('D == 29', function () {
            var dt = { Y: 2000, M: 2, D: 29, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('D == 30', function () {
            var dt = { Y: 2000, M: 2, D: 30, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('D == 31', function () {
            var dt = { Y: 1, M: 4, D: 31, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('D == 31', function () {
            var dt = { Y: 1, M: 3, D: 31, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('D > 31', function () {
            var dt = { Y: 1, M: 1, D: 32, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('H == 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('H > 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 1, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('H < 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: -1, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('H > 23', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 24, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('H < 24', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 23, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('m == 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('m > 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 1, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('m < 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: -1, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('m > 59', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 60, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('m < 60', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 59, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('s == 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('s > 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 1, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('s < 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: -1, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('s > 59', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 60, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('s < 60', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 59, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('S == 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('S > 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 1, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('S < 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: -1, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('S > 999', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 1000, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('S < 1000', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 999, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('Z < -840', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: -841, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('Z > -841', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: -840, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('Z > 720', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 721, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('Z < 721', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 720, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('index == 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 0, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('index > 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('length < 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: -1, _length: -1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('length == 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 0, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('length > 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('length < 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: -1, _match: 1 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('match == 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 0 };
            expect(date.isValid(dt)).to.be(false);
        });
        it('match > 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: 1 };
            expect(date.isValid(dt)).to.be(true);
        });
        it('match < 0', function () {
            var dt = { Y: 1, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 1, _length: 1, _match: -1 };
            expect(date.isValid(dt)).to.be(false);
        });
    });

    describe('leap year', function () {
        it('2012-2-29 It is valid.', function () {
            expect(date.isLeapYear(new Date(2012, 0, 1).getFullYear())).to.be(true);
        });
        it('2100-2-29 It is invalid.', function () {
            expect(date.isLeapYear(new Date(2100, 0, 1).getFullYear())).to.be(false);
        });
        it('2000-2-29 It is valid.', function () {
            expect(date.isLeapYear(new Date(2000, 0, 1).getFullYear())).to.be(true);
        });
        it('2014-2-29 It is invalid.', function () {
            expect(date.isLeapYear(new Date(2014, 0, 1).getFullYear())).to.be(false);
        });
    });

    describe('the same day', function () {
        it('the same', function () {
            var date1 = new Date(2016, 0, 1, 2, 34, 56, 789);
            var date2 = new Date(2016, 0, 1, 23, 4, 56, 789);
            expect(date.isSameDay(date1, date2)).to.be(true);
        });
        it('the same', function () {
            var date1 = new Date(1916, 0, 1, 2, 34, 56, 789);
            var date2 = new Date(1916, 0, 1, 23, 4, 56, 789);
            expect(date.isSameDay(date1, date2)).to.be(true);
        });
        it('not the same', function () {
            var date1 = new Date(2016, 0, 1, 23, 59, 59, 999);
            var date2 = new Date(2016, 0, 2, 0, 0, 0, 0);
            expect(date.isSameDay(date1, date2)).to.be(false);
        });
        it('not the same', function () {
            var date1 = new Date(1916, 0, 1, 23, 59, 59, 999);
            var date2 = new Date(1916, 0, 2, 0, 0, 0, 0);
            expect(date.isSameDay(date1, date2)).to.be(false);
        });
    });

    describe('customize', function () {
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

}(this));
