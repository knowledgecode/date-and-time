/**
 * @preserve date-and-time.js locale configuration
 * @preserve Czech (cs)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('cs', {
            MMMM: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
            MMM: ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'],
            dddd: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
            ddd: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'],
            dd: ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so']
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
