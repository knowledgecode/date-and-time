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
                formatter: {
                    YYYY: function (d/*, formatString*/) { return ('000' + d.getFullYear()).slice(-4); },
                    YY: function (d/*, formatString*/) { return ('0' + d.getFullYear()).slice(-2); },
                    Y: function (d/*, formatString*/) { return '' + d.getFullYear(); },
                    MMMM: function (d/*, formatString*/) { return this.MMMM[d.getMonth()]; },
                    MMM: function (d/*, formatString*/) { return this.MMM[d.getMonth()]; },
                    MM: function (d/*, formatString*/) { return ('0' + (d.getMonth() + 1)).slice(-2); },
                    M: function (d/*, formatString*/) { return '' + (d.getMonth() + 1); },
                    DD: function (d/*, formatString*/) { return ('0' + d.getDate()).slice(-2); },
                    D: function (d/*, formatString*/) { return '' + d.getDate(); },
                    HH: function (d/*, formatString*/) { return ('0' + d.getHours()).slice(-2); },
                    H: function (d/*, formatString*/) { return '' + d.getHours(); },
                    A: function (d/*, formatString*/) { return this.A[d.getHours() > 11 | 0]; },
                    hh: function (d/*, formatString*/) { return ('0' + (d.getHours() % 12 || 12)).slice(-2); },
                    h: function (d/*, formatString*/) { return '' + (d.getHours() % 12 || 12); },
                    mm: function (d/*, formatString*/) { return ('0' + d.getMinutes()).slice(-2); },
                    m: function (d/*, formatString*/) { return '' + d.getMinutes(); },
                    ss: function (d/*, formatString*/) { return ('0' + d.getSeconds()).slice(-2); },
                    s: function (d/*, formatString*/) { return '' + d.getSeconds(); },
                    SSS: function (d/*, formatString*/) { return ('00' + d.getMilliseconds()).slice(-3); },
                    SS: function (d/*, formatString*/) { return ('0' + (d.getMilliseconds() / 10 | 0)).slice(-2); },
                    S: function (d/*, formatString*/) { return '' + (d.getMilliseconds() / 100 | 0); },
                    dddd: function (d/*, formatString*/) { return this.dddd[d.getDay()]; },
                    ddd: function (d/*, formatString*/) { return this.ddd[d.getDay()]; },
                    dd: function (d/*, formatString*/) { return this.dd[d.getDay()]; },
                    Z: function (d/*, formatString*/) {
                        var offset = d.utc ? 0 : d.getTimezoneOffset() / 0.6;
                        return (offset > 0 ? '-' : '+') + ('000' + Math.abs(offset - offset % 100 * 0.4)).slice(-4);
                    },
                    post: function (str) { return str; }
                },
                parser: {
                    YYYY: function (str/*, formatString */) { return this.parser.exec(/^\d{1,4}/, str); },
                    YY: function (str/*, formatString */) {
                        var result = this.parser.exec(/^\d\d?/, str);
                        result.value += result.value < 70 ? 2000 : result.value < 100 ? 1900 : 0;
                        return result;
                    },
                    MMMM: function (str/*, formatString */) {
                        var result = this.parser.find(this.MMMM, str);
                        result.value++;
                        return result;
                    },
                    MMM: function (str/*, formatString */) {
                        var result = this.parser.find(this.MMM, str);
                        result.value++;
                        return result;
                    },
                    MM: function (str/*, formatString */) { return this.parser.exec(/^\d\d/, str); },
                    M: function (str/*, formatString */) { return this.parser.exec(/^\d\d?/, str); },
                    DD: function (str/*, formatString */) { return this.parser.exec(/^\d\d/, str); },
                    D: function (str/*, formatString */) { return this.parser.exec(/^\d\d?/, str); },
                    HH: function (str/*, formatString */) { return this.parser.exec(/^\d\d/, str); },
                    H: function (str/*, formatString */) { return this.parser.exec(/^\d\d?/, str); },
                    A: function (str/*, formatString */) { return this.parser.find(this.A, str); },
                    hh: function (str/*, formatString */) { return this.parser.exec(/^\d\d/, str); },
                    h: function (str/*, formatString */) { return this.parser.exec(/^\d\d?/, str); },
                    mm: function (str/*, formatString */) { return this.parser.exec(/^\d\d/, str); },
                    m: function (str/*, formatString */) { return this.parser.exec(/^\d\d?/, str); },
                    ss: function (str/*, formatString */) { return this.parser.exec(/^\d\d/, str); },
                    s: function (str/*, formatString */) { return this.parser.exec(/^\d\d?/, str); },
                    SSS: function (str/*, formatString */) { return this.parser.exec(/^\d{1,3}/, str); },
                    SS: function (str/*, formatString */) {
                        var result = this.parser.exec(/^\d\d?/, str);
                        result.value *= 10;
                        return result;
                    },
                    S: function (str/*, formatString */) {
                        var result = this.parser.exec(/^\d/, str);
                        result.value *= 100;
                        return result;
                    },
                    h12: function (h, a) { return (h === 12 ? 0 : h) + a * 12; },
                    exec: function (re, str) {
                        var result = (re.exec(str) || [''])[0];
                        return { value: result | 0, length: result.length };
                    },
                    find: function (array, str) {
                        var index = -1, length = 0;

                        for (var i = 0, len = array.length, item; i < len; i++) {
                            item = array[i];
                            if (!str.indexOf(item) && item.length > length) {
                                index = i;
                                length = item.length;
                            }
                        }
                        return { value: index, length: length };
                    },
                    pre: function (str) { return str; }
                }
            }
        };

    /**
     * formatting a date
     * @param {Date} dateObj - a Date object
     * @param {string} formatString - a format string
     * @param {boolean} [utc] - output as UTC
     * @returns {string} a formatted string
     */
    date.format = function (dateObj, formatString, utc) {
        var d = date.addMinutes(dateObj, utc ? dateObj.getTimezoneOffset() : 0),
            locale = locales[lang], formatter = locale.formatter;

        d.utc = utc;
        return formatString.replace(/(\[[^\[\]]*]|\[.*\][^\[]*\]|YYYY|YY|MMM?M?|DD|HH|hh|mm|ss|SSS?|ddd?d?|.)/g, function (token) {
            var format = formatter[token];
            return format ? formatter.post(format.call(locale, d, formatString)) : token.replace(/\[(.*)]/, '$1');
        });
    };

    /**
     * pre-parsing a date string
     * @param {string} dateString - a date string
     * @param {string} formatString - a format string
     * @returns {Object} a date structure
     */
    date.preparse = function (dateString, formatString) {
        var locale = locales[lang], parser = locale.parser,
            re = /YYYY|YY|MMMM?|MM?|DD?|HH?|A|hh?|mm?|ss?|SS?S?|./g,
            keys, token, result, offset = 0,
            dt = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, _index: 0, _length: 0, _match: 0 };

        dateString = parser.pre(dateString);
        formatString = formatString.replace(/\[[^\[\]]*]|\[.*\][^\[]*\]/g, function (str) {
            return new Array(str.length - 1).join(' ');
        });
        while ((keys = re.exec(formatString))) {
            token = keys[0];
            if (parser[token]) {
                result = parser[token].call(locale, dateString.slice(offset), formatString);
                if (!result.length) {
                    break;
                }
                offset += result.length;
                dt[token.charAt(0)] = result.value;
                dt._match++;
            } else if (token === dateString.charAt(offset) || token === ' ') {
                offset++;
            } else {
                break;
            }
        }
        dt.H = dt.H || parser.h12(dt.h, dt.A);
        dt._index = offset;
        dt._length = dateString.length;
        return dt;
    };

    /**
     * validation
     * @param {Object|string} arg - a date structure or a date string
     * @param {string} [formatString] - a format string
     * @returns {boolean} whether the date string is a valid date
     */
    date.isValid = function (arg, formatString) {
        var dt = typeof arg === 'string' ? date.preparse(arg, formatString) : arg,
            last = [31, 28 + date.isLeapYear(dt.Y) | 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][dt.M - 1];

        return !(
            dt._index < 1 || dt._length < 1 || dt._index - dt._length || dt._match < 1 ||
            dt.Y < 1 || dt.Y > 9999 || dt.M < 1 || dt.M > 12 || dt.D < 1 || dt.D > last ||
            dt.H > 23 || dt.H < 0 || dt.m > 59 || dt.m < 0 || dt.s > 59 || dt.s < 0 || dt.S > 999 || dt.S < 0
        );
    };

    /**
     * parsing a date string
     * @param {string} dateString - a date string
     * @param {string} formatString - a format string
     * @param {boolean} [utc] - input as UTC
     * @returns {Date} a constructed date
     */
    date.parse = function (dateString, formatString, utc) {
        var dt = date.preparse(dateString, formatString), dateObj;

        if (date.isValid(dt)) {
            dt.M -= dt.Y < 100 ? 22801 : 1; // 22801 = 1900 * 12 + 1
            if (utc) {
                dateObj = new Date(Date.UTC(dt.Y, dt.M, dt.D, dt.H, dt.m, dt.s, dt.S));
            } else {
                dateObj = new Date(dt.Y, dt.M, dt.D, dt.H, dt.m, dt.s, dt.S);
            }
            return dateObj;
        }
        return new Date(NaN);
    };

    /**
     * adding years
     * @param {Date} dateObj - a date object
     * @param {number} years - number of years to add
     * @returns {Date} a date after adding the value
     */
    date.addYears = function (dateObj, years) {
        return date.addMonths(dateObj, years * 12);
    };

    /**
     * adding months
     * @param {Date} dateObj - a date object
     * @param {number} months - number of months to add
     * @returns {Date} a date after adding the value
     */
    date.addMonths = function (dateObj, months) {
        var d = new Date(dateObj.getTime());

        d.setMonth(d.getMonth() + months);
        return d;
    };

    /**
     * adding days
     * @param {Date} dateObj - a date object
     * @param {number} days - number of days to add
     * @returns {Date} a date after adding the value
     */
    date.addDays = function (dateObj, days) {
        var d = new Date(dateObj.getTime());

        d.setDate(d.getDate() + days);
        return d;
    };

    /**
     * adding hours
     * @param {Date} dateObj - a date object
     * @param {number} hours - number of hours to add
     * @returns {Date} a date after adding the value
     */
    date.addHours = function (dateObj, hours) {
        return date.addMilliseconds(dateObj, hours * 3600000);
    };

    /**
     * adding minutes
     * @param {Date} dateObj - a date object
     * @param {number} minutes - number of minutes to add
     * @returns {Date} a date after adding the value
     */
    date.addMinutes = function (dateObj, minutes) {
        return date.addMilliseconds(dateObj, minutes * 60000);
    };

    /**
     * adding seconds
     * @param {Date} dateObj - a date object
     * @param {number} seconds - number of seconds to add
     * @returns {Date} a date after adding the value
     */
    date.addSeconds = function (dateObj, seconds) {
        return date.addMilliseconds(dateObj, seconds * 1000);
    };

    /**
     * adding milliseconds
     * @param {Date} dateObj - a date object
     * @param {number} milliseconds - number of milliseconds to add
     * @returns {Date} a date after adding the value
     */
    date.addMilliseconds = function (dateObj, milliseconds) {
        return new Date(dateObj.getTime() + milliseconds);
    };

    /**
     * subtracting
     * @param {Date} date1 - a Date object
     * @param {Date} date2 - a Date object
     * @returns {Object} a result object subtracting date2 from date1
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
     * @param {number} y - year
     * @returns {boolean} whether the year is a leap year
     */
    date.isLeapYear = function (y) {
        return (!(y % 4) && !!(y % 100)) || !(y % 400);
    };

    /**
     * comparison of two dates
     * @param {Date} date1 - a Date object
     * @param {Date} date2 - a Date object
     * @returns {boolean} whether the dates are the same day (times are ignored)
     */
    date.isSameDay = function (date1, date2) {
        return date.format(date1, 'YYYYMMDD') === date.format(date2, 'YYYYMMDD');
    };

    /**
     * setting a locale
     * @param {string} [code] - language code
     * @returns {string} current language code
     */
    date.locale = function (code) {
        if (code) {
            if (!locales[code] && typeof require === 'function' && global) {
                require('./locale/' + code);
            }
            lang = code;
        }
        return lang;
    };

    /**
     * getting a definition of locale
     * @param {string} [code] - language code
     * @returns {Object} definition of locale
     */
    date.getLocales = function (code) {
        return locales[code || lang];
    };

    /**
     * adding a new definition of locale
     * @param {string} code - language code
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

        if (options.formatter) {
            locale.formatter = copy(options.formatter, base.formatter);
        }
        if (options.parser) {
            locale.parser = copy(options.parser, base.parser);
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
