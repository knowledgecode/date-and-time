(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        date = global.date || require('../../date-and-time'),
        A = ['AM', 'PM'],
        AA = ['A.M.', 'P.M.'],
        a = ['am', 'pm'],
        aa = ['a.m.', 'p.m.'];

    var plugin = 'meridiem';

    if (typeof require === 'function') {
        plugin = require('../../plugin/meridiem');
    }

    describe('meridiem', function () {
        before(function () {
            date.plugin(plugin);
        });

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
    });

}(this));
