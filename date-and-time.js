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
                    find: function (array, str) {
                        var index = -1, length = 0;

                        for (var i = 0, len = array.length, item; i < len; i++) {
                            item = array[i];
                            if (!str.indexOf(item) && item.length > length) {
                                index = i;
                                length = item.length;
                            }
                        }
                        return { index: index, length: length };
                    },
                    MMMM: function (str/*, formatString*/) {
                        return this.parser.find(this.MMMM, str);
                    },
                    MMM: function (str/*, formatString*/) {
                        return this.parser.find(this.MMM, str);
                    },
                    A: function (str/*, formatString*/) {
                        return this.parser.find(this.A, str);
                    },
                    h: function (h, a) { return (h === 12 ? 0 : h) + a * 12; },
                    pre: function (str) { return str; }
                }
            }
        },
        isCommonJS = function () {
            return typeof module === 'object' && typeof module.exports === 'object';
        };

    /**
     * formatting a date
     * @param {Object} dateObj - date object
     * @param {String} formatString - format string
     * @param {Boolean} [utc] - output as UTC
     * @returns {String} the formatted string
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
     * parsing a date string
     * @param {String} dateString - date string
     * @param {String} formatString - format string
     * @param {Boolean} [utc] - input as UTC
     * @returns {Object} the constructed date
     */
    date.parse = function (dateString, formatString, utc) {
        var locale = locales[lang], dString = locale.parser.pre(dateString),
            offset = 0, keys, i, token, length, p, str, result, dateObj,
            re = /(MMMM?|A)|(YYYY)|(SSS)|(MM|DD|HH|hh|mm|ss)|(YY|M|D|H|h|m|s|SS)|(S)|(.)/g,
            exp = { 2: /^\d{1,4}/, 3: /^\d{1,3}/, 4: /^\d\d/, 5: /^\d\d?/, 6: /^\d/ },
            dt = { Y: 1970, M: 1, D: 1, H: 0, m: 0, s: 0, S: 0 };

        while ((keys = re.exec(formatString))) {
            for (i = 0, length = 1, token = ''; !token;) {
                token = keys[++i];
            }
            p = token.charAt(0);
            str = dString.slice(offset);
            if (i < 2) {
                result = locale.parser[token].call(locale, str, formatString);
                dt[p] = result.index;
                if (p === 'M') {
                    dt[p]++;
                }
                length = result.length;
                if (!length) {
                    return NaN;
                }
            } else if (i < 7) {
                str = (str.match(exp[i]) || [''])[0];
                if (!str) {
                    return NaN;
                }
                dt[p] = (p === 'S' ? (str + '000').slice(0, -token.length) : str) | 0;
                length = str.length;
            }
            offset += length;
        }
        dt.Y += dt.Y < 70 ? 2000 : dt.Y < 100 ? 1900 : 0;
        dt.H = dt.H || locale.parser.h(dt.h || 0, dt.A || 0);

        dateObj = new Date(dt.Y, dt.M - 1, dt.D, dt.H, dt.m, dt.s, dt.S);
        if (dt.Y !== dateObj.getFullYear() || dt.M - 1 !== dateObj.getMonth() || dt.D !== dateObj.getDate()
            || dt.H !== dateObj.getHours() || dt.m !== dateObj.getMinutes() || dt.s !== dateObj.getSeconds()
            || dt.S !== dateObj.getMilliseconds()) {
            return NaN;
        }
        return utc ? date.addMinutes(dateObj, -dateObj.getTimezoneOffset()) : dateObj;
    };

    /**
     * validation
     * @param {String} dateString - date string
     * @param {String} formatString - format string
     * @returns {Boolean} whether the date string is a valid date
     */
    date.isValid = function (dateString, formatString) {
        return !!date.parse(dateString, formatString);
    };

    /**
     * adding years
     * @param {Object} dateObj - date object
     * @param {Number} years - adding year
     * @returns {Object} the date after adding the value
     */
    date.addYears = function (dateObj, years) {
        return date.addMonths(dateObj, years * 12);
    };

    /**
     * adding months
     * @param {Object} dateObj - date object
     * @param {Number} months - adding month
     * @returns {Object} the date after adding the value
     */
    date.addMonths = function (dateObj, months) {
        var d = new Date(dateObj.getTime());

        d.setMonth(d.getMonth() + months);
        return d;
    };

    /**
     * adding days
     * @param {Object} dateObj - date object
     * @param {Number} days - adding day
     * @returns {Object} the date after adding the value
     */
    date.addDays = function (dateObj, days) {
        return date.addMilliseconds(dateObj, days * 86400000);
    };

    /**
     * adding hours
     * @param {Object} dateObj - date object
     * @param {Number} hours - adding hour
     * @returns {Object} the date after adding the value
     */
    date.addHours = function (dateObj, hours) {
        return date.addMilliseconds(dateObj, hours * 3600000);
    };

    /**
     * adding minutes
     * @param {Object} dateObj - date object
     * @param {Number} minutes - adding minute
     * @returns {Object} the date after adding the value
     */
    date.addMinutes = function (dateObj, minutes) {
        return date.addMilliseconds(dateObj, minutes * 60000);
    };

    /**
     * adding seconds
     * @param {Object} dateObj - date object
     * @param {Number} seconds - adding second
     * @returns {Object} the date after adding the value
     */
    date.addSeconds = function (dateObj, seconds) {
        return date.addMilliseconds(dateObj, seconds * 1000);
    };

    /**
     * adding milliseconds
     * @param {Object} dateObj - date object
     * @param {Number} milliseconds - adding millisecond
     * @returns {Object} the date after adding the value
     */
    date.addMilliseconds = function (dateObj, milliseconds) {
        return new Date(dateObj.getTime() + milliseconds);
    };

    /**
     * subtracting
     * @param {Object} date1 - date object
     * @param {Object} date2 - date object
     * @returns {Object} the result object after subtracting the date
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
     * @param {Object} dateObj - date object
     * @returns {Boolean} whether the year is a leap year
     */
    date.isLeapYear = function (dateObj) {
        var y = dateObj.getFullYear();
        return (!(y % 4) && !!(y % 100)) || !(y % 400);
    };

    /**
     * comparison of dates
     * @param {Object} date1 - target for comparison
     * @param {Object} date2 - target for comparison
     * @returns {Boolean} whether the dates are the same day (times are ignored)
     */
    date.isSameDay = function (date1, date2) {
        return date.format(date1, 'YYYYMMDD') === date.format(date2, 'YYYYMMDD');
    };

    /**
     * setting a locale
     * @param {String} [code] - language code
     * @returns {String} current language code
     */
    date.locale = function (code) {
        if (code) {
            if (code !== 'en' && isCommonJS()) {
                require('./locale/' + code);
            }
            lang = code;
        }
        return lang;
    };

    /**
     * getting a definition of locale
     * @param {String} code - language code
     * @returns {Object} definition of locale
     */
    date.getLocales = function (code) {
        return locales[code || lang];
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

        if (options.formatter) {
            locale.formatter = copy(options.formatter, base.formatter);
        }
        if (options.parser) {
            locale.parser = copy(options.parser, base.parser);
        }
        locales[code] = locale;
    };

    if (isCommonJS()) {
        module.exports = date;
    } else if (typeof define === 'function' && define.amd) {
        define([], function () {
            return date;
        });
    } else {
        global.date = date;
    }

}(this));
