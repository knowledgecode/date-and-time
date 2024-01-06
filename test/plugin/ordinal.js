/*global describe, before, it */
(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        date = global.date || require('date-and-time');

    var plugin = 'ordinal';

    if (typeof require === 'function') {
        plugin = require('date-and-time/plugin/ordinal');
    }

    describe('ordinal number', function () {
        before(function () {
            date.plugin(plugin);
        });

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
    });

}(this));
