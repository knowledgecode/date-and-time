/**
 * @preserve date-and-time.js locale configuration
 * @preserve Spanish (es)
 * @preserve It is using moment.js locale configuration as a reference.
 */
(function (global) {
    'use strict';

    var locale = function (date) {
        date.setLocales('es', {
            MMMM: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            MMM: ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sep.', 'Oct.', 'Nov.', 'Dic.'],
            dddd: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
            ddd: ['Dom.', 'Lun.', 'Mar.', 'Mié.', 'Jue.', 'Vie.', 'Sáb.'],
            dd: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
            A: ['de la mañana', 'de la tarde', 'de la noche'],
            formatter: {
                A: function (d) {
                    var h = d.getHours();
                    if (h < 12) {
                        return this.A[0];   // de la mañana
                    } else if (h < 19) {
                        return this.A[1];   // de la tarde
                    }
                    return this.A[2];       // de la noche
                }
            },
            parser: {
                h: function (h, a) {
                    if (a < 1) {
                        return h;   // de la mañana
                    }
                    return h > 11 ? h : h + 12; // de la tarde, de la noche
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
