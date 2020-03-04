(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        date = global.date || require('../date-and-time');

    if (typeof require === 'function') {
        require('../plugin/day-of-week');
    }

    describe('day of week', function () {
        before(function () {
            date.plugin('day-of-week');
        });

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
    });

}(this));
