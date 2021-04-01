(function (global) {
    'use strict';

    var expect = global.expect || require('expect.js'),
        date = global.date || require('../../date-and-time');

    var plugin = 'timespan';

    if (typeof require === 'function') {
        plugin = require('../../plugin/timespan');
    }

    describe('timespan', function () {
        before(function () {
            date.plugin(plugin);
        });

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
    });

}(this));

