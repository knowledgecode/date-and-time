/**
 * @preserve date-and-time.js locale configuration
 * @preserve Serbian (sr)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('sr', {
            MMMM: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
            MMM: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun', 'jul', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
            dddd: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
            ddd: ['ned.', 'pon.', 'uto.', 'sre.', 'čet.', 'pet.', 'sub.'],
            dd: ['ne', 'po', 'ut', 'sr', 'če', 'pe', 'su']
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
