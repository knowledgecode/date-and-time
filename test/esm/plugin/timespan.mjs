/*global describe, before, it */
import date from 'date-and-time';
import timespan from 'date-and-time/plugin/timespan';

import expect from 'expect.js';

describe('timespan', () => {
    before(() => date.plugin(timespan));

    it('toMilliseconds, S', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 790);
        expect(date.timeSpan(to, from).toMilliseconds('S')).to.equal('1');
    });
    it('toMilliseconds, SS', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 790);
        expect(date.timeSpan(to, from).toMilliseconds('SS')).to.equal('01');
    });
    it('toMilliseconds, SSS', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 790);
        expect(date.timeSpan(to, from).toMilliseconds('SSS')).to.equal('001');
    });
    it('toMilliseconds, over SSS', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 1, 1, 0, 34, 56, 789);
        expect(date.timeSpan(to, from).toMilliseconds('SSS')).to.equal('' + 31 * 24 * 60 * 60 * 1000);
    });
    it('toMilliseconds, over SSS, negative', () => {
        const from = new Date(2019, 1, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 789);
        expect(date.timeSpan(to, from).toMilliseconds('SSS')).to.equal('-' + 31 * 24 * 60 * 60 * 1000);
    });
    it('toSeconds, s', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 790);
        expect(date.timeSpan(to, from).toSeconds('s')).to.equal('0');
    });
    it('toSeconds, ss', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 790);
        expect(date.timeSpan(to, from).toSeconds('ss')).to.equal('00');
    });
    it('toSeconds, over ss', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 1, 1, 0, 34, 56, 789);
        expect(date.timeSpan(to, from).toSeconds('ss')).to.equal('' + 31 * 24 * 60 * 60);
    });
    it('toSeconds, over ss, negative', () => {
        const from = new Date(2019, 1, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 789);
        expect(date.timeSpan(to, from).toSeconds('ss')).to.equal('-' + 31 * 24 * 60 * 60);
    });
    it('toSeconds, over ss.SSS', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 57, 790);
        expect(date.timeSpan(to, from).toSeconds('ss.SSS')).to.equal('01.001');
    });
    it('toSeconds, over ss.SSS, negative', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 790);
        const to = new Date(2019, 0, 1, 0, 34, 55, 789);
        expect(date.timeSpan(to, from).toSeconds('ss.SSS')).to.equal('-01.001');
    });
    it('toMinutes, m', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 790);
        expect(date.timeSpan(to, from).toMinutes('m')).to.equal('0');
    });
    it('toMinutes, mm', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 790);
        expect(date.timeSpan(to, from).toMinutes('mm')).to.equal('00');
    });
    it('toMinutes, over mm', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 1, 1, 0, 34, 56, 789);
        expect(date.timeSpan(to, from).toMinutes('mm')).to.equal('' + 31 * 24 * 60);
    });
    it('toMinutes, over mm, negative', () => {
        const from = new Date(2019, 1, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 789);
        expect(date.timeSpan(to, from).toMinutes('mm')).to.equal('-' + 31 * 24 * 60);
    });
    it('toMinutes, over mm:ss.SSS', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 35, 57, 790);
        expect(date.timeSpan(to, from).toMinutes('mm:ss.SSS')).to.equal('01:01.001');
    });
    it('toMinutes, over mm:ss.SSS, negative', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 790);
        const to = new Date(2019, 0, 1, 0, 33, 55, 789);
        expect(date.timeSpan(to, from).toMinutes('mm:ss.SSS')).to.equal('-01:01.001');
    });
    it('toHours, H', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 790);
        expect(date.timeSpan(to, from).toHours('H')).to.equal('0');
    });
    it('toHours, HH', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 790);
        expect(date.timeSpan(to, from).toHours('HH')).to.equal('00');
    });
    it('toHours, over HH', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 1, 1, 0, 34, 56, 789);
        expect(date.timeSpan(to, from).toHours('HH')).to.equal('' + 31 * 24);
    });
    it('toHours, over HH, negative', () => {
        const from = new Date(2019, 1, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 789);
        expect(date.timeSpan(to, from).toHours('HH')).to.equal('-' + 31 * 24);
    });
    it('toHours, over HH:mm:ss.SSS', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 1, 35, 57, 790);
        expect(date.timeSpan(to, from).toHours('HH:mm:ss.SSS')).to.equal('01:01:01.001');
    });
    it('toHours, over HH:mm:ss.SSS, negative', () => {
        const from = new Date(2019, 0, 1, 1, 34, 56, 790);
        const to = new Date(2019, 0, 1, 0, 33, 55, 789);
        expect(date.timeSpan(to, from).toHours('HH:mm:ss.SSS')).to.equal('-01:01:01.001');
    });
    it('toDays, D', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 790);
        expect(date.timeSpan(to, from).toDays('D')).to.equal('0');
    });
    it('toDays, DD', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 790);
        expect(date.timeSpan(to, from).toDays('DD')).to.equal('00');
    });
    it('toDays, over DD', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 1, 1, 0, 34, 56, 789);
        expect(date.timeSpan(to, from).toDays('DD')).to.equal('' + 31);
    });
    it('toDays, over DD, negative', () => {
        const from = new Date(2019, 1, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 1, 0, 34, 56, 789);
        expect(date.timeSpan(to, from).toDays('DD')).to.equal('-' + 31);
    });
    it('toDays, over DD HH:mm:ss.SSS', () => {
        const from = new Date(2019, 0, 1, 0, 34, 56, 789);
        const to = new Date(2019, 0, 2, 1, 35, 57, 790);
        expect(date.timeSpan(to, from).toDays('DD HH:mm:ss.SSS')).to.equal('01 01:01:01.001');
    });
    it('toDays, over DD HH:mm:ss.SSS, negative', () => {
        const from = new Date(2019, 0, 1, 1, 34, 56, 790);
        const to = new Date(2019, 0, 0, 0, 33, 55, 789);
        expect(date.timeSpan(to, from).toDays('DD HH:mm:ss.SSS')).to.equal('-01 01:01:01.001');
    });
    it('comments', () => {
        const from = new Date(2019, 0, 1, 1, 34, 56, 790);
        const to = new Date(2019, 0, 0, 0, 33, 55, 789);
        expect(date.timeSpan(to, from).toDays('[DD HH:mm:ss.SSS]')).to.equal('DD HH:mm:ss.SSS');
    });
});
