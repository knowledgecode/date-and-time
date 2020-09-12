/**
 * @preserve date-and-time.js locale configuration
 * @preserve Hebrew (HE)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var exec = function (date) {
        var code = 'he';

        date.locale('he', {
            res: {
                MMMM: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
                MMM: ['ינו׳', 'פבר׳', 'מרץ', 'אפר׳', 'מאי', 'יוני', 'יולי', 'אוג׳', 'ספט׳', 'אוק׳', 'נוב׳', 'דצמ׳'],
                dddd: ['יום ראשון', 'יום שני', 'יום שלישי', 'יום רביעי', 'יום חמישי', 'יום שישי', 'יום שבת'],
                ddd: ['יום א׳', 'יום ב׳', 'יום ג׳', 'יום ד׳', 'יום ה׳', 'יום ו׳', 'שבת'],
                dd: ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש']
            },
            parser: {
                YYYY: function (str/*, formatString */) { return this.exec(/^\d{4}/, str); },
                Y: function (str/*, formatString */) { return this.exec(/^\d{1,4}/, str); },
                MMMM: function (str/*, formatString */) {
                    var result = this.find(this.res.MMMM, str);
                    result.value++;
                    return result;
                },
                MMM: function (str/*, formatString */) {
                    var result = this.find(this.res.MMM, str);
                    result.value++;
                    return result;
                },
                MM: function (str/*, formatString */) { return this.exec(/^\d\d/, str); },
                M: function (str/*, formatString */) { return this.exec(/^\d\d?/, str); },
                DD: function (str/*, formatString */) { return this.exec(/^\d\d/, str); },
                D: function (str/*, formatString */) { return this.exec(/^\d\d?/, str); },
                HH: function (str/*, formatString */) { return this.exec(/^\d\d/, str); },
                H: function (str/*, formatString */) { return this.exec(/^\d\d?/, str); },
                A: function (str/*, formatString */) { return this.find(this.res.A, str); },
                hh: function (str/*, formatString */) { return this.exec(/^\d\d/, str); },
                h: function (str/*, formatString */) { return this.exec(/^\d\d?/, str); },
                mm: function (str/*, formatString */) { return this.exec(/^\d\d/, str); },
                m: function (str/*, formatString */) { return this.exec(/^\d\d?/, str); },
                ss: function (str/*, formatString */) { return this.exec(/^\d\d/, str); },
                s: function (str/*, formatString */) { return this.exec(/^\d\d?/, str); },
                SSS: function (str/*, formatString */) { return this.exec(/^\d{1,3}/, str); },
                SS: function (str/*, formatString */) {
                    var result = this.exec(/^\d\d?/, str);
                    result.value *= 10;
                    return result;
                },
                S: function (str/*, formatString */) {
                    var result = this.exec(/^\d/, str);
                    result.value *= 100;
                    return result;
                },
                Z: function (str/*, formatString */) {
                    var result = this.exec(/^[\+-]\d{2}[0-5]\d/, str);
                    result.value = (result.value / 100 | 0) * -60 - result.value % 100;
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
            },
        });
        return code;
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        (module.paths || []).push('./');
        module.exports = exec;
        // This line will be removed in the next version.
        exec(require('date-and-time'));
    } else if (typeof define === 'function' && define.amd) {
        define(['date-and-time'], exec);
    } else {
        exec(global.date);
    }

}(this));
