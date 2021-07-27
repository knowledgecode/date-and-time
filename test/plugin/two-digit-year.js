(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        date = global.date || require('../../date-and-time');

    var plugin = 'two-digit-year';

    if (typeof require === 'function') {
        plugin = require('../../plugin/two-digit-year');
    }

    date.plugin(plugin);

    describe('compile (two-digit-year)', function () {
        it('YY', function () {
            var obj = ['YY', 'YY'];
            expect(date.compile('YY')).to.eql(obj);
        });
    });

    describe('preparse (two-digit-year)', function () {
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
    });

    describe('parse (two-digit-year)', function () {
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

}(this));
