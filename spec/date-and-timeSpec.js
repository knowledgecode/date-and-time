/*global describe, it, expect */
(function (global) {
    'use strict';

    var date;

    try {
        date = require('../src/date-and-time');
    } catch (e) {
        date = global.date;
    }

    describe('format', function () {
        it('YYYY equals to 2015.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'YYYY')).toEqual('2015');
        });
        it('YYYY equals to 1900.', function () {
            var now = new Date(0, 0, 1);
            expect(date.format(now, 'YYYY')).toEqual('1900');
        });
        it('YYYY equals to 9999.', function () {
            var now = new Date(9999, 0, 1);
            expect(date.format(now, 'YYYY')).toEqual('9999');
        });
        it('YYYY equals to 0101.', function () {
            var now = new Date(101, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'YYYY')).toEqual('0101');
        });
        it('YY equals to 15.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'YY')).toEqual('15');
        });
        it('YY equals to 00.', function () {
            var now = new Date(0, 0, 1);
            expect(date.format(now, 'YY')).toEqual('00');
        });
        it('YY equals to 99.', function () {
            var now = new Date(9999, 0, 1);
            expect(date.format(now, 'YY')).toEqual('99');
        });
        it('YY equals to 01.', function () {
            var now = new Date(101, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'YY')).toEqual('01');
        });
        it('MMM equals to Jan.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MMM')).toEqual('Jan');
        });
        it('MMM equals to Dec.', function () {
            var now = new Date(2015, 11, 1);
            expect(date.format(now, 'MMM')).toEqual('Dec');
        });
        it('MM equals to 01.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MM')).toEqual('01');
        });
        it('MM equals to 12.', function () {
            var now = new Date(2015, 11, 1, 12, 34, 56, 789);
            expect(date.format(now, 'MM')).toEqual('12');
        });
        it('M equals to 1.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'M')).toEqual('1');
        });
        it('M equals to 12.', function () {
            var now = new Date(2015, 11, 1, 12, 34, 56, 789);
            expect(date.format(now, 'M')).toEqual('12');
        });
        it('DD equals to 01.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'DD')).toEqual('01');
        });
        it('DD equals to 31.', function () {
            var now = new Date(2015, 0, 31, 12, 34, 56, 789);
            expect(date.format(now, 'DD')).toEqual('31');
        });
        it('D equals to 1.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'D')).toEqual('1');
        });
        it('D equals to 31.', function () {
            var now = new Date(2015, 0, 31, 12, 34, 56, 789);
            expect(date.format(now, 'D')).toEqual('31');
        });
        it('HH equals to 12.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'HH')).toEqual('12');
        });
        it('HH equals to 00.', function () {
            var now = new Date(2015, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'HH')).toEqual('00');
        });
        it('HH equals to 23.', function () {
            var now = new Date(2015, 0, 1, 23, 34, 56, 789);
            expect(date.format(now, 'HH')).toEqual('23');
        });
        it('H equals to 12.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'H')).toEqual('12');
        });
        it('H equals to 0.', function () {
            var now = new Date(2015, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'H')).toEqual('0');
        });
        it('H equals to 23.', function () {
            var now = new Date(2015, 0, 1, 23, 34, 56, 789);
            expect(date.format(now, 'H')).toEqual('23');
        });
        it('hh equals to 12 p.m..', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'hh A')).toEqual('12 p.m.');
        });
        it('hh equals to 12 a.m..', function () {
            var now = new Date(2015, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'hh A')).toEqual('12 a.m.');
        });
        it('hh equals to 11 p.m..', function () {
            var now = new Date(2015, 0, 1, 23, 34, 56, 789);
            expect(date.format(now, 'hh A')).toEqual('11 p.m.');
        });
        it('h equals to 12 p.m..', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'h A')).toEqual('12 p.m.');
        });
        it('h equals to 12 a.m..', function () {
            var now = new Date(2015, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'h A')).toEqual('12 a.m.');
        });
        it('h equals to 11 p.m..', function () {
            var now = new Date(2015, 0, 1, 23, 34, 56, 789);
            expect(date.format(now, 'h A')).toEqual('11 p.m.');
        });
        it('mm equals to 34.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'mm')).toEqual('34');
        });
        it('mm equals to 00.', function () {
            var now = new Date(2015, 0, 1, 12, 0, 56, 789);
            expect(date.format(now, 'mm')).toEqual('00');
        });
        it('mm equals to 59.', function () {
            var now = new Date(2015, 0, 1, 12, 59, 56, 789);
            expect(date.format(now, 'mm')).toEqual('59');
        });
        it('m equals to 34.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'm')).toEqual('34');
        });
        it('m equals to 0.', function () {
            var now = new Date(2015, 0, 1, 12, 0, 56, 789);
            expect(date.format(now, 'm')).toEqual('0');
        });
        it('m equals to 59.', function () {
            var now = new Date(2015, 0, 1, 12, 59, 56, 789);
            expect(date.format(now, 'm')).toEqual('59');
        });
        it('ss equals to 56.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'ss')).toEqual('56');
        });
        it('ss equals to 00.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 0, 789);
            expect(date.format(now, 'ss')).toEqual('00');
        });
        it('ss equals to 59.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 59, 789);
            expect(date.format(now, 'ss')).toEqual('59');
        });
        it('s equals to 56.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 's')).toEqual('56');
        });
        it('s equals to 0.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 0, 789);
            expect(date.format(now, 's')).toEqual('0');
        });
        it('s equals to 59.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 59, 789);
            expect(date.format(now, 's')).toEqual('59');
        });
        it('SSS equals to 789.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'SSS')).toEqual('789');
        });
        it('SSS equals to 000.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 0);
            expect(date.format(now, 'SSS')).toEqual('000');
        });
        it('SSS equals to 001.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 1);
            expect(date.format(now, 'SSS')).toEqual('001');
        });
        it('SS equals to 78.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'SS')).toEqual('78');
        });
        it('SS equals to 00.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 0);
            expect(date.format(now, 'SS')).toEqual('00');
        });
        it('SS equals to 00.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 1);
            expect(date.format(now, 'SS')).toEqual('00');
        });
        it('S equals to 7.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'S')).toEqual('7');
        });
        it('S equals to 0.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 0);
            expect(date.format(now, 'S')).toEqual('0');
        });
        it('S equals to 0.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 1);
            expect(date.format(now, 'S')).toEqual('0');
        });
        it('E equals to Thu.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'E')).toEqual('Thu');
        });
        it('E equals to Sun.', function () {
            var now = new Date(2015, 0, 4, 12, 34, 56, 789);
            expect(date.format(now, 'E')).toEqual('Sun');
        });
        it('E equals to Sat.', function () {
            var now = new Date(2015, 0, 3, 12, 34, 56, 789);
            expect(date.format(now, 'E')).toEqual('Sat');
        });
        it('E MMM DD YYYY HH:mm:ss equals to Thu Jan 01 2015 12:34:56.', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'E MMM DD YYYY HH:mm:ss')).toEqual('Thu Jan 01 2015 12:34:56');
        });
        it('YYYY/MM/DD HH:mm:ss.SSS equals to 1900/01/01 00:00:00.000.', function () {
            var now = new Date(0, 0, 1);
            expect(date.format(now, 'YYYY/MM/DD HH:mm:ss.SSS')).toEqual('1900/01/01 00:00:00.000');
        });
    });

    describe('parse', function () {
        it('YYYY', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015', 'YYYY')).toEqual(now);
        });
        it('YYYY', function () {
            var now = new Date(1899, 0, 1);
            expect(date.parse('1899', 'YYYY')).toEqual(now);
        });
        it('YYYY', function () {
            var now = new Date(9999, 0, 1);
            expect(date.parse('9999', 'YYYY')).toEqual(now);
        });
        it('YY', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('15', 'YY')).toEqual(now);
        });
        it('YY', function () {
            var now = new Date(1970, 0, 1);
            expect(date.parse('70', 'YY')).toEqual(now);
        });
        it('YY', function () {
            var now = new Date(2069, 0, 1);
            expect(date.parse('69', 'YY')).toEqual(now);
        });
        it('YYYY-MM', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015-01', 'YYYY-MM')).toEqual(now);
        });
        it('YYYY-MM', function () {
            var now = new Date(2015, 11, 1);
            expect(date.parse('2015-12', 'YYYY-MM')).toEqual(now);
        });
        it('YYYY-MM', function () {
            var now = new Date(2014, 10, 31);
            expect(date.parse('2015-00', 'YYYY-MM')).toEqual(now);
        });
        it('YYYY-M', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015-1', 'YYYY-M')).toEqual(now);
        });
        it('YYYY-M', function () {
            var now = new Date(2015, 11, 1);
            expect(date.parse('2015-12', 'YYYY-M')).toEqual(now);
        });
        it('YYYY-M', function () {
            var now = new Date(2014, 10, 31);
            expect(date.parse('2015-0', 'YYYY-M')).toEqual(now);
        });
        it('YYYY-MM-DD', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015-01-01', 'YYYY-MM-DD')).toEqual(now);
        });
        it('YYYY-MM-DD', function () {
            var now = new Date(2015, 11, 31);
            expect(date.parse('2015-12-31', 'YYYY-MM-DD')).toEqual(now);
        });
        it('YYYY-MM-DD', function () {
            var now = new Date(2014, 10, 30);
            expect(date.parse('2015-00-00', 'YYYY-MM-DD')).toEqual(now);
        });
        it('YYYY-M-D', function () {
            var now = new Date(2015, 0, 1);
            expect(date.parse('2015-1-1', 'YYYY-M-D')).toEqual(now);
        });
        it('YYYY-M-D', function () {
            var now = new Date(2015, 11, 31);
            expect(date.parse('2015-12-31', 'YYYY-M-D')).toEqual(now);
        });
        it('YYYY-M-D', function () {
            var now = new Date(2014, 10, 30);
            expect(date.parse('2015-0-0', 'YYYY-M-D')).toEqual(now);
        });
        it('YYYY-MM-DD HH', function () {
            var now = new Date(2015, 0, 1, 0);
            expect(date.parse('2015-01-01 00', 'YYYY-MM-DD HH')).toEqual(now);
        });
        it('YYYY-MM-DD HH', function () {
            var now = new Date(2015, 11, 31, 23);
            expect(date.parse('2015-12-31 23', 'YYYY-MM-DD HH')).toEqual(now);
        });
        it('YYYY-MM-DD HH', function () {
            var now = new Date(2014, 10, 30, 24);
            expect(date.parse('2015-00-00 24', 'YYYY-MM-DD HH')).toEqual(now);
        });
        it('YYYY-M-D H', function () {
            var now = new Date(2015, 0, 1, 0);
            expect(date.parse('2015-1-1 0', 'YYYY-M-D H')).toEqual(now);
        });
        it('YYYY-M-D H', function () {
            var now = new Date(2015, 11, 31, 23);
            expect(date.parse('2015-12-31 23', 'YYYY-M-D H')).toEqual(now);
        });
        it('YYYY-M-D H', function () {
            var now = new Date(2014, 10, 30, 24);
            expect(date.parse('2015-0-0 24', 'YYYY-M-D H')).toEqual(now);
        });
        it('YYYY-MM-DD HH:mm', function () {
            var now = new Date(2015, 0, 1, 0, 0);
            expect(date.parse('2015-01-01 00:00', 'YYYY-MM-DD HH:mm')).toEqual(now);
        });
        it('YYYY-MM-DD HH:mm', function () {
            var now = new Date(2015, 11, 31, 23, 59);
            expect(date.parse('2015-12-31 23:59', 'YYYY-MM-DD HH:mm')).toEqual(now);
        });
        it('YYYY-MM-DD HH:mm', function () {
            var now = new Date(2014, 10, 30, 24, 60);
            expect(date.parse('2015-00-00 24:60', 'YYYY-MM-DD HH:mm')).toEqual(now);
        });
        it('YYYY-M-D H:m', function () {
            var now = new Date(2015, 0, 1, 0, 0);
            expect(date.parse('2015-1-1 0:0', 'YYYY-M-D H:m')).toEqual(now);
        });
        it('YYYY-M-D H:m', function () {
            var now = new Date(2015, 11, 31, 23, 59);
            expect(date.parse('2015-12-31 23:59', 'YYYY-M-D H:m')).toEqual(now);
        });
        it('YYYY-M-D H:m', function () {
            var now = new Date(2014, 10, 30, 24, 60);
            expect(date.parse('2015-0-0 24:60', 'YYYY-M-D H:m')).toEqual(now);
        });
        it('YYYY-MM-DD HH:mm:ss', function () {
            var now = new Date(2015, 0, 1, 0, 0, 0);
            expect(date.parse('2015-01-01 00:00:00', 'YYYY-MM-DD HH:mm:ss')).toEqual(now);
        });
        it('YYYY-MM-DD HH:mm:ss', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59);
            expect(date.parse('2015-12-31 23:59:59', 'YYYY-MM-DD HH:mm:ss')).toEqual(now);
        });
        it('YYYY-MM-DD HH:mm:ss', function () {
            var now = new Date(2014, 10, 30, 24, 60, 60);
            expect(date.parse('2015-00-00 24:60:60', 'YYYY-MM-DD HH:mm:ss')).toEqual(now);
        });
        it('YYYY-M-D H:m:s', function () {
            var now = new Date(2015, 0, 1, 0, 0);
            expect(date.parse('2015-1-1 0:0:0', 'YYYY-M-D H:m:s')).toEqual(now);
        });
        it('YYYY-M-D H:m:s', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59);
            expect(date.parse('2015-12-31 23:59:59', 'YYYY-M-D H:m:s')).toEqual(now);
        });
        it('YYYY-M-D H:m:s', function () {
            var now = new Date(2014, 10, 30, 24, 60, 60);
            expect(date.parse('2015-0-0 24:60:60', 'YYYY-M-D H:m:s')).toEqual(now);
        });
        it('YYYY-M-D H:m:s.SSS', function () {
            var now = new Date(2015, 0, 1, 0, 0, 0);
            expect(date.parse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.SSS')).toEqual(now);
        });
        it('YYYY-M-D H:m:s.SSS', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59, 999);
            expect(date.parse('2015-12-31 23:59:59.999', 'YYYY-M-D H:m:s.SSS')).toEqual(now);
        });
        it('YYYY-M-D H:m:s.SSS', function () {
            var now = new Date(2014, 10, 30, 24, 60, 60, 1000);
            expect(date.parse('2015-0-0 24:60:61.000', 'YYYY-M-D H:m:s.SSS')).toEqual(now);
        });
        it('YYYY-M-D H:m:s.SS', function () {
            var now = new Date(2015, 0, 1, 0, 0, 0);
            expect(date.parse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.SS')).toEqual(now);
        });
        it('YYYY-M-D H:m:s.SS', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59, 99);
            expect(date.parse('2015-12-31 23:59:59.99', 'YYYY-M-D H:m:s.SS')).toEqual(now);
        });
        it('YYYY-M-D H:m:s.SS', function () {
            var now = new Date(2014, 10, 30, 24, 60, 60, 1000);
            expect(date.parse('2015-0-0 24:60:61.00', 'YYYY-M-D H:m:s.SS')).toEqual(now);
        });
        it('YYYY-M-D H:m:s.S', function () {
            var now = new Date(2015, 0, 1, 0, 0, 0);
            expect(date.parse('2015-1-1 0:0:0.0', 'YYYY-M-D H:m:s.S')).toEqual(now);
        });
        it('YYYY-M-D H:m:s.S', function () {
            var now = new Date(2015, 11, 31, 23, 59, 59, 9);
            expect(date.parse('2015-12-31 23:59:59.9', 'YYYY-M-D H:m:s.S')).toEqual(now);
        });
        it('YYYY-M-D H:m:s.S', function () {
            var now = new Date(2014, 10, 30, 24, 60, 60, 1000);
            expect(date.parse('2015-0-0 24:60:61.0', 'YYYY-M-D H:m:s.S')).toEqual(now);
        });
    });

    describe('addition', function () {
        it('add a year', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2015, 11, 31, 23, 59, 59, 999);
            expect(date.addYears(date1, 1)).toEqual(date2);
        });
        it('subtract a year', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2013, 11, 31, 23, 59, 59, 999);
            expect(date.addYears(date1, -1)).toEqual(date2);
        });
        it('add a month', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 12, 31, 23, 59, 59, 999);
            expect(date.addMonths(date1, 1)).toEqual(date2);
        });
        it('subtract a month', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 10, 31, 23, 59, 59, 999);
            expect(date.addMonths(date1, -1)).toEqual(date2);
        });
        it('add a day', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 32, 23, 59, 59, 999);
            expect(date.addDays(date1, 1)).toEqual(date2);
        });
        it('subtract a day', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 30, 23, 59, 59, 999);
            expect(date.addDays(date1, -1)).toEqual(date2);
        });
        it('add an hour', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 24, 59, 59, 999);
            expect(date.addHours(date1, 1)).toEqual(date2);
        });
        it('subtract an hour', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 22, 59, 59, 999);
            expect(date.addHours(date1, -1)).toEqual(date2);
        });
        it('add a minute', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 60, 59, 999);
            expect(date.addMinutes(date1, 1)).toEqual(date2);
        });
        it('subtract a minute', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 58, 59, 999);
            expect(date.addMinutes(date1, -1)).toEqual(date2);
        });
        it('add a second', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 60, 999);
            expect(date.addSeconds(date1, 1)).toEqual(date2);
        });
        it('subtract a second', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 58, 999);
            expect(date.addSeconds(date1, -1)).toEqual(date2);
        });
        it('add a millisecond', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 1000);
            expect(date.addMilliseconds(date1, 1)).toEqual(date2);
        });
        it('subtract a millisecond', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 998);
            expect(date.addMilliseconds(date1, -1)).toEqual(date2);
        });
    });

    describe('subtraction', function () {
        it('A year is 365 days.', function () {
            var date1 = new Date(2015, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date1, date2).toDays()).toEqual(365);
            expect(date.subtract(date1, date2).toHours()).toEqual(365 * 24);
            expect(date.subtract(date1, date2).toMinutes()).toEqual(365 * 24 * 60);
            expect(date.subtract(date1, date2).toSeconds()).toEqual(365 * 24 * 60 * 60);
            expect(date.subtract(date1, date2).toMilliseconds()).toEqual(365 * 24 * 60 * 60 * 1000);
        });
        it('A year is 365 days. (reverse)', function () {
            var date1 = new Date(2015, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date2, date1).toDays()).toEqual(-365);
            expect(date.subtract(date2, date1).toHours()).toEqual(-365 * 24);
            expect(date.subtract(date2, date1).toMinutes()).toEqual(-365 * 24 * 60);
            expect(date.subtract(date2, date1).toSeconds()).toEqual(-365 * 24 * 60 * 60);
            expect(date.subtract(date2, date1).toMilliseconds()).toEqual(-365 * 24 * 60 * 60 * 1000);
        });
        it('A month is 31 days.', function () {
            var date1 = new Date(2014, 12, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date1, date2).toDays()).toEqual(31);
            expect(date.subtract(date1, date2).toHours()).toEqual(31 * 24);
            expect(date.subtract(date1, date2).toMinutes()).toEqual(31 * 24 * 60);
            expect(date.subtract(date1, date2).toSeconds()).toEqual(31 * 24 * 60 * 60);
            expect(date.subtract(date1, date2).toMilliseconds()).toEqual(31 * 24 * 60 * 60 * 1000);
        });
        it('A month is 31 days. (reverse)', function () {
            var date1 = new Date(2014, 12, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date2, date1).toDays()).toEqual(-31);
            expect(date.subtract(date2, date1).toHours()).toEqual(-31 * 24);
            expect(date.subtract(date2, date1).toMinutes()).toEqual(-31 * 24 * 60);
            expect(date.subtract(date2, date1).toSeconds()).toEqual(-31 * 24 * 60 * 60);
            expect(date.subtract(date2, date1).toMilliseconds()).toEqual(-31 * 24 * 60 * 60 * 1000);
        });
        it('A day.', function () {
            var date1 = new Date(2014, 11, 32, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date1, date2).toDays()).toEqual(1);
            expect(date.subtract(date1, date2).toHours()).toEqual(24);
            expect(date.subtract(date1, date2).toMinutes()).toEqual(24 * 60);
            expect(date.subtract(date1, date2).toSeconds()).toEqual(24 * 60 * 60);
            expect(date.subtract(date1, date2).toMilliseconds()).toEqual(24 * 60 * 60 * 1000);
        });
        it('A day. (reverse)', function () {
            var date1 = new Date(2014, 11, 32, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date2, date1).toDays()).toEqual(-1);
            expect(date.subtract(date2, date1).toHours()).toEqual(-1 * 24);
            expect(date.subtract(date2, date1).toMinutes()).toEqual(-1 * 24 * 60);
            expect(date.subtract(date2, date1).toSeconds()).toEqual(-1 * 24 * 60 * 60);
            expect(date.subtract(date2, date1).toMilliseconds()).toEqual(-1 * 24 * 60 * 60 * 1000);
        });
        it('An hour.', function () {
            var date1 = new Date(2014, 11, 31, 24, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date1, date2).toDays()).toEqual(0);
            expect(date.subtract(date1, date2).toHours()).toEqual(1);
            expect(date.subtract(date1, date2).toMinutes()).toEqual(60);
            expect(date.subtract(date1, date2).toSeconds()).toEqual(60 * 60);
            expect(date.subtract(date1, date2).toMilliseconds()).toEqual(60 * 60 * 1000);
        });
        it('An hour. (reverse)', function () {
            var date1 = new Date(2014, 11, 31, 24, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date2, date1).toDays()).toEqual(0);
            expect(date.subtract(date2, date1).toHours()).toEqual(-1);
            expect(date.subtract(date2, date1).toMinutes()).toEqual(-1 * 60);
            expect(date.subtract(date2, date1).toSeconds()).toEqual(-1 * 60 * 60);
            expect(date.subtract(date2, date1).toMilliseconds()).toEqual(-1 * 60 * 60 * 1000);
        });
        it('A minute.', function () {
            var date1 = new Date(2014, 11, 31, 23, 60, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date1, date2).toDays()).toEqual(0);
            expect(date.subtract(date1, date2).toHours()).toEqual(0);
            expect(date.subtract(date1, date2).toMinutes()).toEqual(1);
            expect(date.subtract(date1, date2).toSeconds()).toEqual(60);
            expect(date.subtract(date1, date2).toMilliseconds()).toEqual(60 * 1000);
        });
        it('A minute. (reverse)', function () {
            var date1 = new Date(2014, 11, 31, 23, 60, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date2, date1).toDays()).toEqual(0);
            expect(date.subtract(date2, date1).toHours()).toEqual(0);
            expect(date.subtract(date2, date1).toMinutes()).toEqual(-1);
            expect(date.subtract(date2, date1).toSeconds()).toEqual(-1 * 60);
            expect(date.subtract(date2, date1).toMilliseconds()).toEqual(-1 * 60 * 1000);
        });
        it('A second.', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 60, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date1, date2).toDays()).toEqual(0);
            expect(date.subtract(date1, date2).toHours()).toEqual(0);
            expect(date.subtract(date1, date2).toMinutes()).toEqual(0);
            expect(date.subtract(date1, date2).toSeconds()).toEqual(1);
            expect(date.subtract(date1, date2).toMilliseconds()).toEqual(1000);
        });
        it('A second. (reverse)', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 60, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 999);
            expect(date.subtract(date2, date1).toDays()).toEqual(0);
            expect(date.subtract(date2, date1).toHours()).toEqual(0);
            expect(date.subtract(date2, date1).toMinutes()).toEqual(0);
            expect(date.subtract(date2, date1).toSeconds()).toEqual(-1);
            expect(date.subtract(date2, date1).toMilliseconds()).toEqual(-1 * 1000);
        });
        it('A millisecond.', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 998);
            expect(date.subtract(date1, date2).toDays()).toEqual(0);
            expect(date.subtract(date1, date2).toHours()).toEqual(0);
            expect(date.subtract(date1, date2).toMinutes()).toEqual(0);
            expect(date.subtract(date1, date2).toSeconds()).toEqual(0);
            expect(date.subtract(date1, date2).toMilliseconds()).toEqual(1);
        });
        it('A millisecond. (reverse)', function () {
            var date1 = new Date(2014, 11, 31, 23, 59, 59, 999);
            var date2 = new Date(2014, 11, 31, 23, 59, 59, 998);
            expect(date.subtract(date2, date1).toDays()).toEqual(0);
            expect(date.subtract(date2, date1).toHours()).toEqual(0);
            expect(date.subtract(date2, date1).toMinutes()).toEqual(0);
            expect(date.subtract(date2, date1).toSeconds()).toEqual(0);
            expect(date.subtract(date2, date1).toMilliseconds()).toEqual(-1);
        });
    });

    describe('validation', function () {
        it('2014-12-31 12:34:56.789 It is valid.', function () {
            expect(date.isValid('20141231123456789', 'YYYYMMDDHHmmssSSS')).toBe(true);
        });
        it('2012-2-29 It is valid.', function () {
            expect(date.isValid('2012-2-29', 'YYYY-M-D')).toBe(true);
        });
        it('2100-2-29 It is invalid.', function () {
            expect(date.isValid('2100-2-29', 'YYYY-M-D')).toBe(false);
        });
        it('2000-2-29 It is valid.', function () {
            expect(date.isValid('2000-2-29', 'YYYY-M-D')).toBe(true);
        });
        it('2014-2-29 It is invalid.', function () {
            expect(date.isValid('2014-2-29', 'YYYY-M-D')).toBe(false);
        });
        it('2014-2-28 It is valid.', function () {
            expect(date.isValid('2014-2-28', 'YYYY-M-D')).toBe(true);
        });
        it('2014-4-31 It is invalid.', function () {
            expect(date.isValid('2014-4-31', 'YYYY-M-D')).toBe(false);
        });
        it('24:00 It is invalid.', function () {
            expect(date.isValid('2014-4-30 24:00', 'YYYY-M-D H:m')).toBe(false);
        });
        it('23:60 It is invalid.', function () {
            expect(date.isValid('2014-4-30 23:60', 'YYYY-M-D H:m')).toBe(false);
        });
        it('23:59:60 It is invalid.', function () {
            expect(date.isValid('2014-4-30 23:59:60', 'YYYY-M-D H:m:s')).toBe(false);
        });
        it('All zero. It is invalid.', function () {
            expect(date.isValid('00000000000000000', 'YYYYMMDDHHmmssSSS')).toBe(false);
        });
        it('All nine. It is invalid.', function () {
            expect(date.isValid('99999999999999999', 'YYYYMMDDHHmmssSSS')).toBe(false);
        });
    });

    describe('leap year', function () {
        it('2012-2-29 It is valid.', function () {
            expect(date.isLeapYear(new Date(2012, 0, 1))).toBe(true);
        });
        it('2100-2-29 It is invalid.', function () {
            expect(date.isLeapYear(new Date(2100, 0, 1))).toBe(false);
        });
        it('2000-2-29 It is valid.', function () {
            expect(date.isLeapYear(new Date(2000, 0, 1))).toBe(true);
        });
        it('2014-2-29 It is invalid.', function () {
            expect(date.isLeapYear(new Date(2014, 0, 1))).toBe(false);
        });
    });

}(this));
