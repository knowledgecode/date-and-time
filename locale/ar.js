/**
 * @preserve date-and-time.js locale configuration
 * @preserve Arabic (ar)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        var num = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'],
            map = { '٠': 0, '١': 1, '٢': 2, '٣': 3, '٤': 4, '٥': 5, '٦': 6, '٧': 7, '٨': 8, '٩': 9 };

        date.setLocales('ar', {
            MMMM: ['كانون الثاني يناير', 'شباط فبراير', 'آذار مارس', 'نيسان أبريل', 'أيار مايو', 'حزيران يونيو', 'تموز يوليو', 'آب أغسطس', 'أيلول سبتمبر', 'تشرين الأول أكتوبر', 'تشرين الثاني نوفمبر', 'كانون الأول ديسمبر'],
            MMM: ['كانون الثاني يناير', 'شباط فبراير', 'آذار مارس', 'نيسان أبريل', 'أيار مايو', 'حزيران يونيو', 'تموز يوليو', 'آب أغسطس', 'أيلول سبتمبر', 'تشرين الأول أكتوبر', 'تشرين الثاني نوفمبر', 'كانون الأول ديسمبر'],
            dddd: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
            ddd: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
            dd: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
            A: ['ص', 'م'],
            formats: {
                post: function (str) {
                    return str.replace(/\d/g, function (i) {
                        return num[i | 0];
                    });
                }
            },
            parsers: {
                pre: function (str) {
                    return str.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function (i) {
                        return '' + map[i];
                    });
                }
            }
        });
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        locale(require('../date-and-time'));
    } else if (typeof define === 'function' && define.amd) {
        define(['date-and-time'], locale);
    } else {
        locale(global.date);
    }

}(this));

