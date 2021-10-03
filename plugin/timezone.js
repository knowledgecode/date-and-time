(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.date = global.date || {}, global.date.plugin = global.date.plugin || {}, global.date.plugin.timezone = factory()));
})(this, (function () { 'use strict';

    /**
     * @preserve date-and-time.js plugin
     * @preserve timezone
     */

    var plugin = function (date, localized_date) {
        var options = {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric'
        };
        var pattern = date.compile('M/D/Y, h:mm:ss A');
        var formatTZ = function (dateObj, arg, timeZone) {
            options.timeZone = 'UTC';
            var utcObj = date.parse(new Intl.DateTimeFormat('en-US', options).format(dateObj), pattern);

            options.timeZone = timeZone;
            var dateObj2 = date.parse(new Intl.DateTimeFormat('en-US', options).format(dateObj), pattern);

            var dateObj3 = date.addMilliseconds(dateObj2, dateObj.getMilliseconds());

            dateObj3.getTimezoneOffset = function () { return (utcObj.getTime() - dateObj2.getTime()) / 60000 | 0; };
            return localized_date.format(dateObj3, arg);
        };
        var adjustments = [
            -60, -30, -20,
            0,
            60, 30, 20
        ];
        var parseTZ = function (dateString, arg, timeZone) {
            var pattern2 = typeof arg === 'string' ? date.compile(arg) : arg;
            var dateObj = localized_date.parse(dateString, pattern2, true);

            for (var i = 1, len = pattern2.length; i < len; i++) {
                if (pattern2[i].indexOf('Z') === 0) {
                    return dateObj;
                }
            }

            options.timeZone = timeZone;
            var dateTimeFormat = new Intl.DateTimeFormat('en-US', options);
            var dateObj2 = date.addMilliseconds(
                date.parse(dateTimeFormat.format(dateObj), pattern, true),
                dateObj.getMilliseconds()
            );
            var offset = dateObj.getTime() - dateObj2.getTime();
            var dateString2 = date.format(localized_date.parse(dateString, pattern2), pattern);

            var comparer = function (d) {
                return dateString2 === dateTimeFormat.format(d);
            };

            // Trying to adjust for daylight saving time.
            for (var j = 0, len2 = adjustments.length; j < len2; j++) {
                var d = date.addMilliseconds(dateObj, offset + adjustments[j] * 60000);
                if (comparer(d)) {
                    return d;
                }
            }
            return NaN;
        };

        var name = 'timezone';

        date.plugin(name, {
            extender: {
                formatTZ: formatTZ,
                parseTZ: parseTZ
            }
        });
        return name;
    };

    return plugin;

}));
