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
        MMMM = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        MMM = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        dddd = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        ddd = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dd = ['日', '一', '二', '三', '四', '五', '六'],
        A = ['凌晨', '凌晨', '凌晨', '凌晨', '凌晨', '凌晨',    // 0 - 5
             '早上', '早上', '早上',    // 6 - 8
             '上午', '上午',    // 9 - 11:29
             '中午',    // 11:30 - 12:29
             '下午', '下午', '下午', '下午', '下午', '下午',    // 12:30 - 17
             '晚上', '晚上', '晚上', '晚上', '晚上', '晚上'];   // 18 - 23

    date.locale('zh-cn');

    describe('format', function () {
        forEach(MMMM, function (m, i) {
            it('"MMMM" equals to "' + m + '"', function () {
                var now = new Date(2015, i, 1, 12, 34, 56, 789);
                expect(date.format(now, 'MMMM')).to.equal(m);
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
    });

    describe('parse', function () {
        forEach(MMMM, function (m, i) {
            it('"MMMM"', function () {
                var now = new Date(0, i, 1);
                expect(date.parse(m, 'MMMM')).to.eql(now);
            });
        });
        forEach(MMM, function (m, i) {
            it('"MMM"', function () {
                var now = new Date(0, i, 1);
                expect(date.parse(m, 'MMM')).to.eql(now);
            });
        });
        forEach(A, function (a, i) {
            it('h:m A', function () {
                var now = new Date(0, 0, 1, i, 30);
                expect(date.parse((i > 11 ? i - 12 : i) + ':30 ' + a, 'h:m A')).to.eql(now);
            });
        });
    });

}(this));

