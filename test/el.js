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
        MMMM = {
            nominative: ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
            genitive: ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου']
        },
        MMM = ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαϊ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'],
        dddd = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
        ddd = ['Κυρ', 'Δευ', 'Τρι', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ'],
        dd = ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πε', 'Πα', 'Σα'],
        A = ['πμ', 'πμ', 'πμ', 'πμ', 'πμ', 'πμ', 'πμ', 'πμ', 'πμ', 'πμ', 'πμ', 'πμ',
            'μμ', 'μμ', 'μμ', 'μμ', 'μμ', 'μμ', 'μμ', 'μμ', 'μμ', 'μμ', 'μμ', 'μμ'];

    describe('format with "el"', function () {
        before(function () {
            date.locale('el');
        });

        forEach(MMMM.nominative, function (m, i) {
            it('"MMMM" equals to "' + m + '"', function () {
                var now = new Date(2015, i, 1, 12, 34, 56, 789);
                expect(date.format(now, 'MMMM')).to.equal(m);
            });
        });
        forEach(MMMM.genitive, function (m, i) {
            it('"MMMM" equals to "' + m + '"', function () {
                var now = new Date(2015, i, 1, 12, 34, 56, 789);
                expect(date.format(now, 'DD MMMM')).to.equal('01 ' + m);
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
        it('"hh" equals to "00"', function () {
            var now = new Date(2015, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'hh')).to.equal('00');
        });
        it('"hh" equals to "00"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'hh')).to.equal('00');
        });
        it('"hh" equals to "11"', function () {
            var now = new Date(2015, 0, 1, 23, 34, 56, 789);
            expect(date.format(now, 'hh')).to.equal('11');
        });
        it('"h" equals to "0"', function () {
            var now = new Date(2015, 0, 1, 0, 34, 56, 789);
            expect(date.format(now, 'h')).to.equal('0');
        });
        it('"h" equals to "0"', function () {
            var now = new Date(2015, 0, 1, 12, 34, 56, 789);
            expect(date.format(now, 'h')).to.equal('0');
        });
        it('"h" equals to "11"', function () {
            var now = new Date(2015, 0, 1, 23, 34, 56, 789);
            expect(date.format(now, 'h')).to.equal('11');
        });

        after(function () {
            date.locale('en');
        });
    });

    describe('parse with "el"', function () {
        before(function () {
            date.locale('el');
        });

        forEach(MMMM.nominative, function (m, i) {
            it('"MMMM"', function () {
                var now = new Date(1970, i, 1);
                expect(date.parse(m, 'MMMM')).to.eql(now);
            });
        });
        forEach(MMMM.genitive, function (m, i) {
            it('"MMMM"', function () {
                var now = new Date(1970, i, 1);
                expect(date.parse('01 ' + m, 'DD MMMM')).to.eql(now);
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
            date.locale('en');
        });
    });

}(this));
