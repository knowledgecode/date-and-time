/**
 * @preserve date-and-time.js (c) KNOWLEDGECODE | MIT
 */
(function (global) {
    'use strict';

    var date = {},
        lang = 'en',
        locales = {
            en: {
                MMMM: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                dddd: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                ddd: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                dd: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                A: ['a.m.', 'p.m.'],
                formats: {
                    YYYY: function (d) { return ('000' + d.getFullYear()).slice(-4); },
                    YY: function (d) { return this.formats.YYYY(d).slice(2); },
                    MMMM: function (d) { return this.MMMM[d.getMonth()]; },
                    MMM: function (d) { return this.MMM[d.getMonth()]; },
                    M: function (d) { return '' + (d.getMonth() + 1); },
                    MM: function (d) { return ('0' + this.formats.M(d)).slice(-2); },
                    D: function (d) { return '' + d.getDate(); },
                    DD: function (d) { return ('0' + this.formats.D(d)).slice(-2); },
                    H: function (d) { return '' + d.getHours(); },
                    HH: function (d) { return ('0' + this.formats.H(d)).slice(-2); },
                    h: function (d) {
                        var h = d.getHours() || 12;
                        return '' + (h > 12 ? h - 12 : h);
                    },
                    hh: function (d) { return ('0' + this.formats.h(d)).slice(-2); },
                    A: function (d) { return this.A[d.getHours() > 11 | 0]; },
                    m: function (d) { return '' + d.getMinutes(); },
                    mm: function (d) { return ('0' + this.formats.m(d)).slice(-2); },
                    s: function (d) { return '' + d.getSeconds(); },
                    ss: function (d) { return ('0' + this.formats.s(d)).slice(-2); },
                    SSS: function (d) { return ('00' + d.getMilliseconds()).slice(-3); },
                    SS: function (d) { return this.formats.SSS(d).slice(0, 2); },
                    S: function (d) { return this.formats.SSS(d).slice(0, 1); },
                    dddd: function (d) { return this.dddd[d.getDay()]; },
                    ddd: function (d) { return this.ddd[d.getDay()]; },
                    dd: function (d) { return this.dd[d.getDay()]; },
                    Z: function (d) {
                        var offset = d.utc ? 0 : d.getTimezoneOffset(), sign = '-';
                        if (offset <= 0) {
                            sign = '+';
                            offset = -offset;
                        }
                        return sign + ('000' + ((offset / 60 | 0) * 100 + offset % 60)).slice(-4);
                    }
                },
                parsers: {
                    h: function (h, a) { return (h === 12 ? 0 : h) + a * 12; }
                }
            }
        },
        forEach = function (array, fn) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (fn(array[i], i) === 0) {
                    break;
                }
            }
        },
        parse = function (dateString, formatString) {
            var offset = 0, k, length, str,
                keys = formatString.match(/YYYY|YY|MMM?M?|DD|HH|hh|mm|ss|SSS?|./g),
                dt = { Y: 0, M: 1, D: 1, A: 0, H: 0, h: 0, m: 0, s: 0, S: 0 };

            forEach(keys, function (key) {
                k = key.charAt(0);
                length = key.length;
                str = dateString.slice(offset);
                if (/^(YYYY|YY|MM|DD|HH|hh|mm|ss|SS?S?)$/.test(key)) {
                    dt[k] = str.slice(0, length) | 0;
                    if (key === 'YY') {
                        dt.Y += dt.Y < 70 ? 2000 : 1900;
                    }
                } else if (/^(M|D|H|h|m|s)$/.test(key)) {
                    str = (str.match(/^\d\d?/) || [''])[0];
                    length = str.length;
                    dt[k] = str | 0;
                } else if (/^(MMMM?|A)$/.test(key)) {
                    forEach(locales[lang][key], function (val, i) {
                        if (!str.indexOf(val)) {
                            dt[k] = k === 'M' ? i + 1 : i;
                            length = val.length;
                            return 0;
                        }
                    });
                }
                offset += length;
            });
            return dt;
        },
        toH = function (h, a) {
            return locales[lang].parsers.h(h, a);
        };

    /**
     * formatting a date
     * @param {Object} dateObj - target date
     * @param {String} formatString - format string
     * @param {Boolean} [utc] - output as UTC
     * @returns {String} the formatted string
     */
    date.format = function (dateObj, formatString, utc) {
        var tokens = formatString.match(/(\[[^\[\]]*]|\[.*\][^\[]*\]|YYYY|YY|MMM?M?|DD|HH|hh|mm|ss|SSS?|ddd?d?|.)/g) || [],
            d = new Date(dateObj.getTime() + (utc ? dateObj.getTimezoneOffset() * 60000 : 0)),
            locale = locales[lang];

        d.utc = utc;
        forEach(tokens, function (token, i) {
            tokens[i] = (locale.formats[token] || function () {}).call(locale, d) || token.replace(/\[(.*)]/, '$1');
        });
        return tokens.join('');
    };

    /**
     * parsing a date string
     * @param {String} dateString - date string
     * @param {String} formatString - format string
     * @param {Boolean} [utc] - input as UTC
     * @returns {Object} the constructed date
     */
    date.parse = function (dateString, formatString, utc) {
        var dt = parse(dateString, formatString),
            dateObj = new Date(dt.Y, dt.M - 1, dt.D, dt.H || toH(dt.h, dt.A), dt.m, dt.s, dt.S);

        return utc ? new Date(dateObj.getTime() - dateObj.getTimezoneOffset() * 60000) : dateObj;
    };

    /**
     * validation
     * @param {String} dateString - date string
     * @param {String} formatString - format string
     * @returns {Boolean} whether the date string is a valid date
     */
    date.isValid = function (dateString, formatString) {
        var dt = parse(dateString, formatString),
            H = dt.H || toH(dt.h, dt.A),
            d = new Date(dt.Y, dt.M - 1, dt.D, H, dt.m, dt.s, dt.S);

        return dt.Y === d.getFullYear() && dt.M - 1 === d.getMonth() && dt.D === d.getDate()
            && H === d.getHours() && dt.m === d.getMinutes() && dt.s === d.getSeconds()
            && dt.S === d.getMilliseconds();
    };

    /**
     * adding years
     * @param {Object} dateObj - the augend
     * @param {Number} years - the addend
     * @returns {Object} the date after addition
     */
    date.addYears = function (dateObj, years) {
        var d = new Date(dateObj.getTime());

        d.setFullYear(d.getFullYear() + years);
        return d;
    };

    /**
     * adding months
     * @param {Object} dateObj - the augend
     * @param {Number} months - the addend
     * @returns {Object} the date after addition
     */
    date.addMonths = function (dateObj, months) {
        var d = new Date(dateObj.getTime());

        d.setMonth(d.getMonth() + months);
        return d;
    };

    /**
     * adding days
     * @param {Object} dateObj - the augend
     * @param {Number} days - the addend
     * @returns {Object} the date after addition
     */
    date.addDays = function (dateObj, days) {
        return new Date(dateObj.getTime() + days * 86400000);
    };

    /**
     * adding hours
     * @param {Object} dateObj - the augend
     * @param {Number} hours - the addend
     * @returns {Object} the date after addition
     */
    date.addHours = function (dateObj, hours) {
        return new Date(dateObj.getTime() + hours * 3600000);
    };

    /**
     * adding minutes
     * @param {Object} dateObj - the augend
     * @param {Number} minutes - the addend
     * @returns {Object} the date after addition
     */
    date.addMinutes = function (dateObj, minutes) {
        return new Date(dateObj.getTime() + minutes * 60000);
    };

    /**
     * adding seconds
     * @param {Object} dateObj - the augend
     * @param {Number} seconds - the addend
     * @returns {Object} the date after addition
     */
    date.addSeconds = function (dateObj, seconds) {
        return new Date(dateObj.getTime() + seconds * 1000);
    };

    /**
     * adding milliseconds
     * @param {Object} dateObj - the augend
     * @param {Number} milliseconds - the addend
     * @returns {Object} the date after addition
     */
    date.addMilliseconds = function (dateObj, milliseconds) {
        return new Date(dateObj.getTime() + milliseconds);
    };

    /**
     * subtracting
     * @param {Object} date1 - the minuend
     * @param {Object} date2 - the subtrahend
     * @returns {Object} the result object after subtraction
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
     * leap year
     * @param {Object} dateObj - target date
     * @returns {Boolean} whether the year is a leap year
     */
    date.isLeapYear = function (dateObj) {
        var y = dateObj.getFullYear();
        return (!(y % 4) && !!(y % 100)) || !(y % 400);
    };

    /**
     * setting a locale
     * @param {String} [code] - language code
     * @returns {String} current language code
     */
    date.locale = function (code) {
        if (code) {
            if (typeof module === 'object' && typeof module.exports === 'object') {
                require('./locale/' + code);
            }
            lang = code;
        }
        return lang;
    };

    /**
     * adding a new definition of locale
     * @param {String} code - language code
     * @param {Object} options - definition of locale
     * @returns {void}
     */
    date.setLocales = function (code, options) {
        var copy = function (src, proto) {
                var Locale = function () {}, dst, key;

                Locale.prototype = proto;
                dst = new Locale();
                for (key in src) {
                    if (src.hasOwnProperty(key)) {
                        dst[key] = src[key];
                    }
                }
                return dst;
            },
            base = locales[code] || locales.en,
            locale = copy(options, base);

        if (options.formats) {
            locale.formats = copy(options.formats, base.formats);
        }
        if (options.parsers) {
            locale.parsers = copy(options.parsers, base.parsers);
        }
        locales[code] = locale;
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

