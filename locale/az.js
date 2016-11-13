/**
 * @preserve date-and-time.js locale configuration
 * @preserve Azerbaijani (az)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('az', {
            MMMM: ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avqust', 'sentyabr', 'oktyabr', 'noyabr', 'dekabr'],
            MMM: ['yan', 'fev', 'mar', 'apr', 'may', 'iyn', 'iyl', 'avq', 'sen', 'okt', 'noy', 'dek'],
            dddd: ['Bazar', 'Bazar ertəsi', 'Çərşənbə axşamı', 'Çərşənbə', 'Cümə axşamı', 'Cümə', 'Şənbə'],
            ddd: ['Baz', 'BzE', 'ÇAx', 'Çər', 'CAx', 'Cüm', 'Şən'],
            dd: ['Bz', 'BE', 'ÇA', 'Çə', 'CA', 'Cü', 'Şə'],
            A: ['gecə', 'səhər', 'gündüz', 'axşam'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 4) {
                        return this.A[0];   // gecə
                    } else if (h < 12) {
                        return this.A[1];   // səhər
                    } else if (h < 17) {
                        return this.A[2];   // gündüz
                    }
                    return this.A[3];       // axşam
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 2) {
                        return h;               // gecə, səhər
                    }
                    return h > 11 ? h : h + 12; // gündüz, axşam
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
