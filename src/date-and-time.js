/**
 * @preserve date-and-time.js (c) 2015 KNOWLEDGECODE | MIT
 */
/*jslint node: true, bitwise: true, plusplus: true, regexp: true */
/*global define */
(function (global) {
    'use strict';

    var date = {
            month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            dayOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            hour12: {
                meridian: ['a.m.', 'p.m.'],
                h: function (d) {
                    var h = d.getHours() || 12;

                    return h > 12 ? h - 12 : h;
                },
                A: function (d) {
                    return this.meridian[d.getHours() > 11 | 0];
                }
            }
        },
        formats = {
            YYYY: function (d) {
                return ('000' + d.getFullYear()).slice(-4);
            },
            YY: function (d) {
                return formats.YYYY(d).slice(2);
            },
            MMM: function (d) {
                return date.month[d.getMonth()];
            },
            M: function (d) {
                return String(d.getMonth() + 1);
            },
            MM: function (d) {
                return ('0' + formats.M(d)).slice(-2);
            },
            D: function (d) {
                return String(d.getDate());
            },
            DD: function (d) {
                return ('0' + formats.D(d)).slice(-2);
            },
            H: function (d) {
                return String(d.getHours());
            },
            HH: function (d) {
                return ('0' + formats.H(d)).slice(-2);
            },
            h: function (d) {
                return date.hour12.h(d);
            },
            hh: function (d) {
                return ('0' + formats.h(d)).slice(-2);
            },
            A: function (d) {
                return date.hour12.A(d);
            },
            m: function (d) {
                return String(d.getMinutes());
            },
            mm: function (d) {
                return ('0' + formats.m(d)).slice(-2);
            },
            s: function (d) {
                return String(d.getSeconds());
            },
            ss: function (d) {
                return ('0' + formats.s(d)).slice(-2);
            },
            SSS: function (d) {
                return ('00' + d.getMilliseconds()).slice(-3);
            },
            SS: function (d) {
                return formats.SSS(d).slice(0, 2);
            },
            S: function (d) {
                return formats.SSS(d).slice(0, 1);
            },
            E: function (d) {
                return date.dayOfWeek[d.getDay()];
            }
        },
        parse = function (dateString, formatString) {
            var i, j, tokens, token, len, len2, index,
                vals = dateString.split(/[^\d+]/g),
                keys = formatString.split(/[^YYYY|YY|MM?|DD?|HH?|mm?|ss?|SS?S?]/g),
                dt = { Y: 0, M: 1, D: 1, H: 0, m: 0, s: 0, S: 0 };

            for (i = 0, len = keys.length; i < len; i++) {
                tokens = keys[i].match(/YYYY|YY|MM?|DD?|HH?|mm?|ss?|SS?S?/g) || [];
                for (j = 0, len2 = tokens.length; j < len2; j++) {
                    token = tokens[j];
                    index = keys[i].indexOf(token);
                    if (index >= 0) {
                        token = token.replace(/^(M|D|H|m|s)$/, '$1$1');
                        dt[token.charAt(0)] = (vals[i] || '').slice(index, index + token.length) | 0;
                        if (token === 'YY') {
                            dt[token.charAt(0)] += (dt[token.charAt(0)] < 70) ? 2000 : 1900;
                        }
                    }
                }
            }
            return dt;
        };

    /**
     * formatting strings
     * @param {Object} date - the target
     * @param {String} formatString - the format string
     */
    date.format = function (date, formatString) {
        var i, len,
            tokens = formatString.match(/(YYYY|YY|MMM|MM?|DD?|HH?|hh?|A|mm?|ss?|SS?S?|E|.)/g) || [],
            noop = function () {
                return null;
            };

        for (i = 0, len = tokens.length; i < len; i++) {
            tokens[i] = (formats[tokens[i]] || noop)(date) || tokens[i];
        }
        return tokens.join('');
    };

    /**
     * parsing date strings
     * @param {String} dateString - the date string
     * @param {String} formatString - the format string
     * @returns {Object} the parsed date
     */
    date.parse = function (dateString, formatString) {
        var dt = parse(dateString, formatString);
        return new Date(dt.Y, dt.M - 1, dt.D, dt.H, dt.m, dt.s, dt.S);
    };

    /**
     * addition ( years )
     * @param {Object} date - the augend
     * @param {Number} years - the addend
     * @returns {Object} the date after addition
     */
    date.addYears = function (date, years) {
        var d = new Date(date.getTime());

        d.setFullYear(d.getFullYear() + years);
        return d;
    };

    /**
     * addition ( months )
     * @param {Object} date - the augend
     * @param {Number} months - the addend
     * @returns {Object} the date after addition
     */
    date.addMonths = function (date, months) {
        var d = new Date(date.getTime());

        d.setMonth(d.getMonth() + months);
        return d;
    };

    /**
     * addition ( days )
     * @param {Object} date - the augend
     * @param {Number} days - the addend
     * @returns {Object} the date after addition
     */
    date.addDays = function (date, days) {
        var d = new Date(date.getTime());

        d.setDate(d.getDate() + days);
        return d;
    };

    /**
     * addition ( hours )
     * @param {Object} date - the augend
     * @param {Number} hours - the addend
     * @returns {Object} the date after addition
     */
    date.addHours = function (date, hours) {
        var d = new Date(date.getTime());

        d.setHours(d.getHours() + hours);
        return d;
    };

    /**
     * addition ( minutes )
     * @param {Object} date - the augend
     * @param {Number} minutes - the addend
     * @returns {Object} the date after addition
     */
    date.addMinutes = function (date, minutes) {
        var d = new Date(date.getTime());

        d.setMinutes(d.getMinutes() + minutes);
        return d;
    };

    /**
     * addition ( seconds )
     * @param {Object} date - the augend
     * @param {Number} seconds - the addend
     * @returns {Object} the date after addition
     */
    date.addSeconds = function (date, seconds) {
        var d = new Date(date.getTime());

        d.setSeconds(d.getSeconds() + seconds);
        return d;
    };

    /**
     * addition ( milliseconds )
     * @param {Object} date - the augend
     * @param {Number} milliseconds - the addend
     * @returns {Object} the date after addition
     */
    date.addMilliseconds = function (date, milliseconds) {
        var d = new Date(date.getTime());

        d.setMilliseconds(d.getMilliseconds() + milliseconds);
        return d;
    };

    /**
     * subtraction
     * @param {Object} date1 - the minuend
     * @param {Object} date2 - the subtrahend
     * @returns {Object} the date after subtraction
     */
    date.subtract = function (date1, date2) {
        var delta = date1.getTime() - date2.getTime();

        return {
            toMilliseconds: function () {
                return delta;
            },
            toSeconds: function () {
                return delta / 1000 | 0;
            },
            toMinutes: function () {
                return delta / 60000 | 0;
            },
            toHours: function () {
                return delta / 3600000 | 0;
            },
            toDays: function () {
                return delta / 86400000 | 0;
            }
        };
    };

    /**
     * validation
     * @param {String} dateString - the date string
     * @param {String} formatString - the format string
     * @returns {Boolean} whether valid date
     */
    date.isValid = function (dateString, formatString) {
        var dt = parse(dateString, formatString),
            d = new Date(dt.Y, dt.M - 1, dt.D, dt.H, dt.m, dt.s, dt.S);

        return dt.Y === d.getFullYear() && dt.M - 1 === d.getMonth() && dt.D === d.getDate()
            && dt.H === d.getHours() && dt.m === d.getMinutes() && dt.s === d.getSeconds()
            && dt.S === d.getMilliseconds();
    };

    /**
     * leap year
     * @param {Object} date - the target
     * @returns {Boolean} whether leap year
     */
    date.isLeapYear = function (date) {
        var y = date.getFullYear();
        return (!(y % 4) && !!(y % 100)) || !(y % 400);
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = date;
    } else if (typeof define === 'function' && define.amd) {
        define([], function () {
            return date;
        });
    } else {
        global.date = date;
    }

}(this));
