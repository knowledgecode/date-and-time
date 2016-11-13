/**
 * @preserve date-and-time.js locale configuration
 * @preserve Javanese (jv)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('jv', {
            MMMM: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'Nopember', 'Desember'],
            MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nop', 'Des'],
            dddd: ['Minggu', 'Senen', 'Seloso', 'Rebu', 'Kemis', 'Jemuwah', 'Septu'],
            ddd: ['Min', 'Sen', 'Sel', 'Reb', 'Kem', 'Jem', 'Sep'],
            dd: ['Mg', 'Sn', 'Sl', 'Rb', 'Km', 'Jm', 'Sp'],
            A: ['enjing', 'siyang', 'sonten', 'ndalu'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 11) {
                        return this.A[0];   // enjing
                    } else if (h < 15) {
                        return this.A[1];   // siyang
                    } else if (h < 19) {
                        return this.A[2];   // sonten
                    }
                    return this.A[3];       // ndalu
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 1) {
                        return h;                       // enjing
                    } else if (a < 2) {
                        return h >= 11 ? h : h + 12;    // siyang
                    }
                    return h + 12;                      // sonten, ndalu
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
