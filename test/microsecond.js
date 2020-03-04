(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        date = global.date || require('../date-and-time');

    if (typeof require === 'function') {
        require('../plugin/microsecond');
    }

    describe('microsecond', function () {
        before(function () {
            date.plugin('microsecond');
        });

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
    });

}(this));
