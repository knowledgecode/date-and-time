/**
 * @preserve date-and-time.js locale configuration
 * @preserve Ukrainian (uk)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('uk', {
            MMMM: ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'],
            MMM: ['січ', 'лют', 'бер', 'квіт', 'трав', 'черв', 'лип', 'серп', 'вер', 'жовт', 'лист', 'груд'],
            dddd: {
                nominative: ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'],
                accusative: ['неділю', 'понеділок', 'вівторок', 'середу', 'четвер', 'п’ятницю', 'суботу'],
                genitive: ['неділі', 'понеділка', 'вівторка', 'середи', 'четверга', 'п’ятниці', 'суботи']
            },
            ddd: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
            dd: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
            A: ['ночі', 'ранку', 'дня', 'вечора'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 4) {
                        return this.A[0];   // ночі
                    } else if (h < 12) {
                        return this.A[1];   // ранку
                    } else if (h < 17) {
                        return this.A[2];   // дня
                    }
                    return this.A[3];       // вечора
                },
                dddd: function (d, formatString) {
                    var type = 'nominative';
                    if (/(\[[ВвУу]\]) ?dddd/.test(formatString)) {
                        type = 'accusative';
                    } else if (/\[?(?:минулої|наступної)? ?\] ?dddd/.test(formatString)) {
                        type = 'genitive';
                    }
                    return this.dddd[type][d.getDay()];
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 2) {
                        return h;   // ночі, ранку
                    }
                    return h > 11 ? h : h + 12; // дня, вечора
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
