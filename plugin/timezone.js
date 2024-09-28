(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.date = global.date || {}, global.date.plugin = global.date.plugin || {}, global.date.plugin.timezone = factory()));
})(this, (function () { 'use strict';

    /**
     * @preserve date-and-time.js plugin
     * @preserve timezone
     */

    var plugin = function (proto, date) {
        var timeZones = {
            africa: {
                abidjan: [0, -968],
                accra: [0, -968],
                addis_ababa: [10800, 9900, 9000, 8836],
                algiers: [7200, 3600, 732, 561, 0],
                asmara: [10800, 9900, 9000, 8836],
                bamako: [0, -968],
                bangui: [3600, 1800, 815, 0],
                banjul: [0, -968],
                bissau: [0, -3600, -3740],
                blantyre: [7820, 7200],
                brazzaville: [3600, 1800, 815, 0],
                bujumbura: [7820, 7200],
                cairo: [10800, 7509, 7200],
                casablanca: [3600, 0, -1820],
                ceuta: [7200, 3600, 0, -1276],
                conakry: [0, -968],
                dakar: [0, -968],
                dar_es_salaam: [10800, 9900, 9000, 8836],
                djibouti: [10800, 9900, 9000, 8836],
                douala: [3600, 1800, 815, 0],
                el_aaiun: [3600, 0, -3168, -3600],
                freetown: [0, -968],
                gaborone: [7820, 7200],
                harare: [7820, 7200],
                johannesburg: [10800, 7200, 6720, 5400],
                juba: [10800, 7588, 7200],
                kampala: [10800, 9900, 9000, 8836],
                khartoum: [10800, 7808, 7200],
                kigali: [7820, 7200],
                kinshasa: [3600, 1800, 815, 0],
                lagos: [3600, 1800, 815, 0],
                libreville: [3600, 1800, 815, 0],
                lome: [0, -968],
                luanda: [3600, 1800, 815, 0],
                lubumbashi: [7820, 7200],
                lusaka: [7820, 7200],
                malabo: [3600, 1800, 815, 0],
                maputo: [7820, 7200],
                maseru: [10800, 7200, 6720, 5400],
                mbabane: [10800, 7200, 6720, 5400],
                mogadishu: [10800, 9900, 9000, 8836],
                monrovia: [0, -2588, -2670],
                nairobi: [10800, 9900, 9000, 8836],
                ndjamena: [7200, 3612, 3600],
                niamey: [3600, 1800, 815, 0],
                nouakchott: [0, -968],
                ouagadougou: [0, -968],
                'porto-novo': [3600, 1800, 815, 0],
                sao_tome: [3600, 1616, 0, -2205],
                tripoli: [7200, 3600, 3164],
                tunis: [7200, 3600, 2444, 561],
                windhoek: [10800, 7200, 5400, 4104, 3600]
            },
            america: {
                adak: [44002, -32400, -36000, -39600, -42398],
                anchorage: [50424, -28800, -32400, -35976, -36000],
                anguilla: [-10800, -14400, -15865],
                antigua: [-10800, -14400, -15865],
                araguaina: [-7200, -10800, -11568],
                argentina: {
                    buenos_aires: [-7200, -10800, -14028, -14400, -15408],
                    catamarca: [-7200, -10800, -14400, -15408, -15788],
                    cordoba: [-7200, -10800, -14400, -15408],
                    jujuy: [-7200, -10800, -14400, -15408, -15672],
                    la_rioja: [-7200, -10800, -14400, -15408, -16044],
                    mendoza: [-7200, -10800, -14400, -15408, -16516],
                    rio_gallegos: [-7200, -10800, -14400, -15408, -16612],
                    salta: [-7200, -10800, -14400, -15408, -15700],
                    san_juan: [-7200, -10800, -14400, -15408, -16444],
                    san_luis: [-7200, -10800, -14400, -15408, -15924],
                    tucuman: [-7200, -10800, -14400, -15408, -15652],
                    ushuaia: [-7200, -10800, -14400, -15408, -16392]
                },
                aruba: [-10800, -14400, -15865],
                asuncion: [-10800, -13840, -14400],
                atikokan: [-18000, -19088, -19176],
                bahia_banderas: [-18000, -21600, -25200, -25260, -28800],
                bahia: [-7200, -9244, -10800],
                barbados: [-10800, -12600, -14309, -14400],
                belem: [-7200, -10800, -11636],
                belize: [-18000, -19800, -21168, -21600],
                'blanc-sablon': [-10800, -14400, -15865],
                boa_vista: [-10800, -14400, -14560],
                bogota: [-14400, -17776, -18000],
                boise: [-21600, -25200, -27889, -28800],
                cambridge_bay: [0, -18000, -21600, -25200],
                campo_grande: [-10800, -13108, -14400],
                cancun: [-14400, -18000, -20824, -21600],
                caracas: [-14400, -16060, -16064, -16200],
                cayenne: [-10800, -12560, -14400],
                cayman: [-18000, -19088, -19176],
                chicago: [-18000, -21036, -21600],
                chihuahua: [-18000, -21600, -25200, -25460],
                ciudad_juarez: [-18000, -21600, -25200, -25556],
                costa_rica: [-18000, -20173, -21600],
                creston: [-21600, -25200, -26898],
                cuiaba: [-10800, -13460, -14400],
                curacao: [-10800, -14400, -15865],
                danmarkshavn: [0, -4480, -7200, -10800],
                dawson: [-25200, -28800, -32400, -33460],
                dawson_creek: [-25200, -28800, -28856],
                denver: [-21600, -25196, -25200],
                detroit: [-14400, -18000, -19931, -21600],
                dominica: [-10800, -14400, -15865],
                edmonton: [-21600, -25200, -27232],
                eirunepe: [-14400, -16768, -18000],
                el_salvador: [-18000, -21408, -21600],
                fortaleza: [-7200, -9240, -10800],
                fort_nelson: [-25200, -28800, -29447],
                glace_bay: [-10800, -14388, -14400],
                goose_bay: [-7200, -9000, -9052, -10800, -12600, -12652, -14400, -14500],
                grand_turk: [-14400, -17072, -18000, -18430],
                grenada: [-10800, -14400, -15865],
                guadeloupe: [-10800, -14400, -15865],
                guatemala: [-18000, -21600, -21724],
                guayaquil: [-14400, -18000, -18840, -19160],
                guyana: [-10800, -13500, -13959, -14400],
                halifax: [-10800, -14400, -15264],
                havana: [-14400, -18000, -19768, -19776],
                hermosillo: [-21600, -25200, -26632, -28800],
                indiana: {
                    indianapolis: [-14400, -18000, -20678, -21600],
                    knox: [-18000, -20790, -21600],
                    marengo: [-14400, -18000, -20723, -21600],
                    petersburg: [-14400, -18000, -20947, -21600],
                    tell_city: [-14400, -18000, -20823, -21600],
                    vevay: [-14400, -18000, -20416, -21600],
                    vincennes: [-14400, -18000, -21007, -21600],
                    winamac: [-14400, -18000, -20785, -21600]
                },
                inuvik: [0, -21600, -25200, -28800],
                iqaluit: [0, -14400, -18000, -21600],
                jamaica: [-14400, -18000, -18430],
                juneau: [54139, -25200, -28800, -32261, -32400],
                kentucky: {
                    louisville: [-14400, -18000, -20582, -21600],
                    monticello: [-14400, -18000, -20364, -21600]
                },
                kralendijk: [-10800, -14400, -15865],
                la_paz: [-12756, -14400, -16356],
                lima: [-14400, -18000, -18492, -18516],
                los_angeles: [-25200, -28378, -28800],
                lower_princes: [-10800, -14400, -15865],
                maceio: [-7200, -8572, -10800],
                managua: [-18000, -20708, -20712, -21600],
                manaus: [-10800, -14400, -14404],
                marigot: [-10800, -14400, -15865],
                martinique: [-10800, -14400, -14660],
                matamoros: [-18000, -21600, -23400],
                mazatlan: [-21600, -25200, -25540, -28800],
                menominee: [-18000, -21027, -21600],
                merida: [-18000, -21508, -21600],
                metlakatla: [54822, -25200, -28800, -31578, -32400],
                mexico_city: [-18000, -21600, -23796, -25200],
                miquelon: [-7200, -10800, -13480, -14400],
                moncton: [-10800, -14400, -15548, -18000],
                monterrey: [-18000, -21600, -24076],
                montevideo: [-5400, -7200, -9000, -10800, -12600, -13491, -14400],
                montserrat: [-10800, -14400, -15865],
                nassau: [-14400, -18000, -19052],
                new_york: [-14400, -17762, -18000],
                nome: [46702, -28800, -32400, -36000, -39600, -39698],
                noronha: [-3600, -7200, -7780],
                north_dakota: {
                    beulah: [-18000, -21600, -24427, -25200],
                    center: [-18000, -21600, -24312, -25200],
                    new_salem: [-18000, -21600, -24339, -25200]
                },
                nuuk: [-3600, -7200, -10800, -12416],
                ojinaga: [-18000, -21600, -25060, -25200],
                panama: [-18000, -19088, -19176],
                paramaribo: [-10800, -12600, -13236, -13240, -13252],
                phoenix: [-21600, -25200, -26898],
                'port-au-prince': [-14400, -17340, -17360, -18000],
                port_of_spain: [-10800, -14400, -15865],
                porto_velho: [-10800, -14400, -15336],
                puerto_rico: [-10800, -14400, -15865],
                punta_arenas: [-10800, -14400, -16965, -17020, -18000],
                rankin_inlet: [0, -18000, -21600],
                recife: [-7200, -8376, -10800],
                regina: [-21600, -25116, -25200],
                resolute: [0, -18000, -21600],
                rio_branco: [-14400, -16272, -18000],
                santarem: [-10800, -13128, -14400],
                santiago: [-10800, -14400, -16965, -18000],
                santo_domingo: [-14400, -16200, -16776, -16800, -18000],
                sao_paulo: [-7200, -10800, -11188],
                scoresbysund: [0, -3600, -5272, -7200],
                sitka: [53927, -25200, -28800, -32400, -32473],
                st_barthelemy: [-10800, -14400, -15865],
                st_johns: [-5400, -9000, -9052, -12600, -12652],
                st_kitts: [-10800, -14400, -15865],
                st_lucia: [-10800, -14400, -15865],
                st_thomas: [-10800, -14400, -15865],
                st_vincent: [-10800, -14400, -15865],
                swift_current: [-21600, -25200, -25880],
                tegucigalpa: [-18000, -20932, -21600],
                thule: [-10800, -14400, -16508],
                tijuana: [-25200, -28084, -28800],
                toronto: [-14400, -18000, -19052],
                tortola: [-10800, -14400, -15865],
                vancouver: [-25200, -28800, -29548],
                whitehorse: [-25200, -28800, -32400, -32412],
                winnipeg: [-18000, -21600, -23316],
                yakutat: [52865, -28800, -32400, -33535]
            },
            antarctica: {
                casey: [39600, 28800, 0],
                davis: [25200, 18000, 0],
                dumontdurville: [36000, 35320, 35312],
                macquarie: [39600, 36000, 0],
                mawson: [21600, 18000, 0],
                mcmurdo: [46800, 45000, 43200, 41944, 41400],
                palmer: [0, -7200, -10800, -14400],
                rothera: [0, -10800],
                syowa: [11212, 10800],
                troll: [7200, 0],
                vostok: [25200, 18000, 0]
            },
            arctic: { longyearbyen: [10800, 7200, 3600, 3208] },
            asia: {
                aden: [11212, 10800],
                almaty: [25200, 21600, 18468, 18000],
                amman: [10800, 8624, 7200],
                anadyr: [50400, 46800, 43200, 42596, 39600],
                aqtau: [21600, 18000, 14400, 12064],
                aqtobe: [21600, 18000, 14400, 13720],
                ashgabat: [21600, 18000, 14400, 14012],
                atyrau: [21600, 18000, 14400, 12464, 10800],
                baghdad: [14400, 10800, 10660, 10656],
                bahrain: [14400, 12368, 10800],
                baku: [18000, 14400, 11964, 10800],
                bangkok: [25200, 24124],
                barnaul: [28800, 25200, 21600, 20100],
                beirut: [10800, 8520, 7200],
                bishkek: [25200, 21600, 18000, 17904],
                brunei: [32400, 30000, 28800, 27000, 26480],
                chita: [36000, 32400, 28800, 27232],
                choibalsan: [36000, 32400, 28800, 27480, 25200],
                colombo: [23400, 21600, 19800, 19172, 19164],
                damascus: [10800, 8712, 7200],
                dhaka: [25200, 23400, 21700, 21600, 21200, 19800],
                dili: [32400, 30140, 28800],
                dubai: [14400, 13272],
                dushanbe: [25200, 21600, 18000, 16512],
                famagusta: [10800, 8148, 7200],
                gaza: [10800, 8272, 7200],
                hebron: [10800, 8423, 7200],
                ho_chi_minh: [32400, 28800, 25590, 25200],
                hong_kong: [32400, 30600, 28800, 27402],
                hovd: [28800, 25200, 21996, 21600],
                irkutsk: [32400, 28800, 25200, 25025],
                jakarta: [32400, 28800, 27000, 26400, 25632, 25200],
                jayapura: [34200, 33768, 32400],
                jerusalem: [14400, 10800, 8454, 8440, 7200],
                kabul: [16608, 16200, 14400],
                kamchatka: [46800, 43200, 39600, 38076],
                karachi: [23400, 21600, 19800, 18000, 16092],
                kathmandu: [20700, 20476, 19800],
                khandyga: [39600, 36000, 32533, 32400, 28800],
                kolkata: [23400, 21208, 21200, 19800, 19270],
                krasnoyarsk: [28800, 25200, 22286, 21600],
                kuala_lumpur: [32400, 28800, 27000, 26400, 25200, 24925],
                kuching: [32400, 30000, 28800, 27000, 26480],
                kuwait: [11212, 10800],
                macau: [36000, 32400, 28800, 27250],
                magadan: [43200, 39600, 36192, 36000],
                makassar: [32400, 28800, 28656],
                manila: [32400, 29040, 28800, -57360],
                muscat: [14400, 13272],
                nicosia: [10800, 8008, 7200],
                novokuznetsk: [28800, 25200, 21600, 20928],
                novosibirsk: [28800, 25200, 21600, 19900],
                omsk: [25200, 21600, 18000, 17610],
                oral: [21600, 18000, 14400, 12324, 10800],
                phnom_penh: [25200, 24124],
                pontianak: [32400, 28800, 27000, 26240, 25200],
                pyongyang: [32400, 30600, 30180],
                qatar: [14400, 12368, 10800],
                qostanay: [21600, 18000, 15268, 14400],
                qyzylorda: [21600, 18000, 15712, 14400],
                riyadh: [11212, 10800],
                sakhalin: [43200, 39600, 36000, 34248, 32400],
                samarkand: [21600, 18000, 16073, 14400],
                seoul: [36000, 34200, 32400, 30600, 30472],
                shanghai: [32400, 29143, 28800],
                singapore: [32400, 28800, 27000, 26400, 25200, 24925],
                srednekolymsk: [43200, 39600, 36892, 36000],
                taipei: [32400, 29160, 28800],
                tashkent: [25200, 21600, 18000, 16631],
                tbilisi: [18000, 14400, 10800, 10751],
                tehran: [18000, 16200, 14400, 12600, 12344],
                thimphu: [21600, 21516, 19800],
                tokyo: [36000, 33539, 32400],
                tomsk: [28800, 25200, 21600, 20391],
                ulaanbaatar: [32400, 28800, 25652, 25200],
                urumqi: [21600, 21020],
                'ust-nera': [43200, 39600, 36000, 34374, 32400, 28800],
                vientiane: [25200, 24124],
                vladivostok: [39600, 36000, 32400, 31651],
                yakutsk: [36000, 32400, 31138, 28800],
                yangon: [32400, 23400, 23087],
                yekaterinburg: [21600, 18000, 14553, 14400, 13505],
                yerevan: [18000, 14400, 10800, 10680]
            },
            atlantic: {
                azores: [0, -3600, -6160, -6872, -7200],
                bermuda: [-10800, -11958, -14400, -15558],
                canary: [3600, 0, -3600, -3696],
                cape_verde: [-3600, -5644, -7200],
                faroe: [3600, 0, -1624],
                madeira: [3600, 0, -3600, -4056],
                reykjavik: [0, -968],
                south_georgia: [-7200, -8768],
                stanley: [-7200, -10800, -13884, -14400],
                st_helena: [0, -968]
            },
            australia: {
                adelaide: [37800, 34200, 33260, 32400],
                brisbane: [39600, 36728, 36000],
                broken_hill: [37800, 36000, 34200, 33948, 32400],
                darwin: [37800, 34200, 32400, 31400],
                eucla: [35100, 31500, 30928],
                hobart: [39600, 36000, 35356],
                lindeman: [39600, 36000, 35756],
                lord_howe: [41400, 39600, 38180, 37800, 36000],
                melbourne: [39600, 36000, 34792],
                perth: [32400, 28800, 27804],
                sydney: [39600, 36292, 36000]
            },
            europe: {
                amsterdam: [7200, 3600, 1050, 0],
                andorra: [7200, 3600, 364, 0],
                astrakhan: [18000, 14400, 11532, 10800],
                athens: [10800, 7200, 5692, 3600],
                belgrade: [7200, 4920, 3600],
                berlin: [10800, 7200, 3600, 3208],
                bratislava: [7200, 3600, 3464, 0],
                brussels: [7200, 3600, 1050, 0],
                bucharest: [10800, 7200, 6264],
                budapest: [7200, 4580, 3600],
                busingen: [7200, 3600, 2048, 1786],
                chisinau: [14400, 10800, 7200, 6920, 6900, 6264, 3600],
                copenhagen: [10800, 7200, 3600, 3208],
                dublin: [3600, 2079, 0, -1521],
                gibraltar: [7200, 3600, 0, -1284],
                guernsey: [7200, 3600, 0, -75],
                helsinki: [10800, 7200, 5989],
                isle_of_man: [7200, 3600, 0, -75],
                istanbul: [14400, 10800, 7200, 7016, 6952],
                jersey: [7200, 3600, 0, -75],
                kaliningrad: [14400, 10800, 7200, 4920, 3600],
                kirov: [18000, 14400, 11928, 10800],
                kyiv: [14400, 10800, 7324, 7200, 3600],
                lisbon: [7200, 3600, 0, -2205],
                ljubljana: [7200, 4920, 3600],
                london: [7200, 3600, 0, -75],
                luxembourg: [7200, 3600, 1050, 0],
                madrid: [7200, 3600, 0, -884],
                malta: [7200, 3600, 3484],
                mariehamn: [10800, 7200, 5989],
                minsk: [14400, 10800, 7200, 6616, 6600, 3600],
                monaco: [7200, 3600, 561, 0],
                moscow: [18000, 16279, 14400, 12679, 10800, 9079, 9017, 7200],
                oslo: [10800, 7200, 3600, 3208],
                paris: [7200, 3600, 561, 0],
                podgorica: [7200, 4920, 3600],
                prague: [7200, 3600, 3464, 0],
                riga: [14400, 10800, 9394, 7200, 5794, 3600],
                rome: [7200, 3600, 2996],
                samara: [18000, 14400, 12020, 10800],
                san_marino: [7200, 3600, 2996],
                sarajevo: [7200, 4920, 3600],
                saratov: [18000, 14400, 11058, 10800],
                simferopol: [14400, 10800, 8184, 8160, 7200, 3600],
                skopje: [7200, 4920, 3600],
                sofia: [10800, 7200, 7016, 5596, 3600],
                stockholm: [10800, 7200, 3600, 3208],
                tallinn: [14400, 10800, 7200, 5940, 3600],
                tirane: [7200, 4760, 3600],
                ulyanovsk: [18000, 14400, 11616, 10800, 7200],
                vaduz: [7200, 3600, 2048, 1786],
                vatican: [7200, 3600, 2996],
                vienna: [7200, 3921, 3600],
                vilnius: [14400, 10800, 7200, 6076, 5736, 5040, 3600],
                volgograd: [18000, 14400, 10800, 10660],
                warsaw: [10800, 7200, 5040, 3600],
                zagreb: [7200, 4920, 3600],
                zurich: [7200, 3600, 2048, 1786]
            },
            indian: {
                antananarivo: [10800, 9900, 9000, 8836],
                chagos: [21600, 18000, 17380],
                christmas: [25200, 24124],
                cocos: [32400, 23400, 23087],
                comoro: [10800, 9900, 9000, 8836],
                kerguelen: [18000, 17640],
                mahe: [14400, 13272],
                maldives: [18000, 17640],
                mauritius: [18000, 14400, 13800],
                mayotte: [10800, 9900, 9000, 8836],
                reunion: [14400, 13272]
            },
            pacific: {
                apia: [50400, 46800, 45184, -36000, -39600, -41216, -41400],
                auckland: [46800, 45000, 43200, 41944, 41400],
                bougainville: [39600, 37336, 36000, 35312, 32400],
                chatham: [49500, 45900, 44100, 44028],
                chuuk: [36000, 35320, 35312],
                easter: [-18000, -21600, -25200, -26248],
                efate: [43200, 40396, 39600],
                fakaofo: [46800, -39600, -41096],
                fiji: [46800, 43200, 42944],
                funafuti: [43200, 41524],
                galapagos: [-18000, -21504, -21600],
                gambier: [-32388, -32400],
                guadalcanal: [39600, 38388],
                guam: [39600, 36000, 34740, 32400, -51660],
                honolulu: [-34200, -36000, -37800, -37886],
                kanton: [46800, 0, -39600, -43200],
                kiritimati: [50400, -36000, -37760, -38400],
                kosrae: [43200, 39600, 39116, 36000, 32400, -47284],
                kwajalein: [43200, 40160, 39600, 36000, 32400, -43200],
                majuro: [43200, 41524],
                marquesas: [-33480, -34200],
                midway: [45432, -39600, -40968],
                nauru: [43200, 41400, 40060, 32400],
                niue: [-39600, -40780, -40800],
                norfolk: [45000, 43200, 41400, 40320, 40312, 39600],
                noumea: [43200, 39948, 39600],
                pago_pago: [45432, -39600, -40968],
                palau: [32400, 32276, -54124],
                pitcairn: [-28800, -30600, -31220],
                pohnpei: [39600, 38388],
                port_moresby: [36000, 35320, 35312],
                rarotonga: [48056, -34200, -36000, -37800, -38344],
                saipan: [39600, 36000, 34740, 32400, -51660],
                tahiti: [-35896, -36000],
                tarawa: [43200, 41524],
                tongatapu: [50400, 46800, 44400, 44352],
                wake: [43200, 41524],
                wallis: [43200, 41524]
            }
        };
        var timeZoneNames = {
            'Acre Standard Time': 'ACT', 'Acre Summer Time': 'ACST', 'Afghanistan Time': 'AFT',
            'Alaska Daylight Time': 'AKDT', 'Alaska Standard Time': 'AKST', 'Almaty Standard Time': 'ALMT',
            'Almaty Summer Time': 'ALMST', 'Amazon Standard Time': 'AMT', 'Amazon Summer Time': 'AMST',
            'Anadyr Standard Time': 'ANAT', 'Anadyr Summer Time': 'ANAST', 'Apia Daylight Time': 'WSDT',
            'Apia Standard Time': 'WSST', 'Aqtau Standard Time': 'AQTT', 'Aqtau Summer Time': 'AQTST',
            'Aqtobe Standard Time': 'AQTT', 'Aqtobe Summer Time': 'AQST', 'Arabian Daylight Time': 'ADT',
            'Arabian Standard Time': 'AST', 'Argentina Standard Time': 'ART', 'Argentina Summer Time': 'ARST',
            'Armenia Standard Time': 'AMT', 'Armenia Summer Time': 'AMST', 'Atlantic Daylight Time': 'ADT',
            'Atlantic Standard Time': 'AST', 'Australian Central Daylight Time': 'ACDT', 'Australian Central Standard Time': 'ACST',
            'Australian Central Western Daylight Time': 'ACWDT', 'Australian Central Western Standard Time': 'ACWST', 'Australian Eastern Daylight Time': 'AEDT',
            'Australian Eastern Standard Time': 'AEST', 'Australian Western Daylight Time': 'AWDT', 'Australian Western Standard Time': 'AWST',
            'Azerbaijan Standard Time': 'AZT', 'Azerbaijan Summer Time': 'AZST', 'Azores Standard Time': 'AZOT',
            'Azores Summer Time': 'AZOST', 'Bangladesh Standard Time': 'BST', 'Bangladesh Summer Time': 'BDST',
            'Bhutan Time': 'BTT', 'Bolivia Time': 'BOT', 'Brasilia Standard Time': 'BRT',
            'Brasilia Summer Time': 'BRST', 'British Summer Time': 'BST', 'Brunei Darussalam Time': 'BNT',
            'Cape Verde Standard Time': 'CVT', 'Casey Time': 'CAST', 'Central Africa Time': 'CAT',
            'Central Daylight Time': 'CDT', 'Central European Standard Time': 'CET', 'Central European Summer Time': 'CEST',
            'Central Indonesia Time': 'WITA', 'Central Standard Time': 'CST', 'Chamorro Standard Time': 'ChST',
            'Chatham Daylight Time': 'CHADT', 'Chatham Standard Time': 'CHAST', 'Chile Standard Time': 'CLT',
            'Chile Summer Time': 'CLST', 'China Daylight Time': 'CDT', 'China Standard Time': 'CST',
            'Christmas Island Time': 'CXT', 'Chuuk Time': 'CHUT', 'Cocos Islands Time': 'CCT',
            'Colombia Standard Time': 'COT', 'Colombia Summer Time': 'COST', 'Cook Islands Half Summer Time': 'CKHST',
            'Cook Islands Standard Time': 'CKT', 'Coordinated Universal Time': 'UTC', 'Cuba Daylight Time': 'CDT',
            'Cuba Standard Time': 'CST', 'Davis Time': 'DAVT', 'Dumont-d’Urville Time': 'DDUT',
            'East Africa Time': 'EAT', 'East Greenland Standard Time': 'EGT', 'East Greenland Summer Time': 'EGST',
            'East Kazakhstan Time': 'ALMT', 'East Timor Time': 'TLT', 'Easter Island Standard Time': 'EAST',
            'Easter Island Summer Time': 'EASST', 'Eastern Daylight Time': 'EDT', 'Eastern European Standard Time': 'EET',
            'Eastern European Summer Time': 'EEST', 'Eastern Indonesia Time': 'WIT', 'Eastern Standard Time': 'EST',
            'Ecuador Time': 'ECT', 'Falkland Islands Standard Time': 'FKST', 'Falkland Islands Summer Time': 'FKDT',
            'Fernando de Noronha Standard Time': 'FNT', 'Fernando de Noronha Summer Time': 'FNST', 'Fiji Standard Time': 'FJT',
            'Fiji Summer Time': 'FJST', 'French Guiana Time': 'GFT', 'French Southern & Antarctic Time': 'TFT',
            'Further-eastern European Time': 'FET', 'Galapagos Time': 'GALT', 'Gambier Time': 'GAMT',
            'Georgia Standard Time': 'GET', 'Georgia Summer Time': 'GEST', 'Gilbert Islands Time': 'GILT',
            'Greenwich Mean Time': 'GMT', 'Guam Standard Time': 'ChST', 'Gulf Standard Time': 'GST',
            'Guyana Time': 'GYT', 'Hawaii-Aleutian Daylight Time': 'HADT', 'Hawaii-Aleutian Standard Time': 'HAST',
            'Hong Kong Standard Time': 'HKT', 'Hong Kong Summer Time': 'HKST', 'Hovd Standard Time': 'HOVT',
            'Hovd Summer Time': 'HOVST', 'India Standard Time': 'IST', 'Indian Ocean Time': 'IOT',
            'Indochina Time': 'ICT', 'Iran Daylight Time': 'IRDT', 'Iran Standard Time': 'IRST',
            'Irish Standard Time': 'IST', 'Irkutsk Standard Time': 'IRKT', 'Irkutsk Summer Time': 'IRKST',
            'Israel Daylight Time': 'IDT', 'Israel Standard Time': 'IST', 'Japan Standard Time': 'JST',
            'Korean Daylight Time': 'KDT', 'Korean Standard Time': 'KST', 'Kosrae Time': 'KOST',
            'Krasnoyarsk Standard Time': 'KRAT', 'Krasnoyarsk Summer Time': 'KRAST', 'Kyrgyzstan Time': 'KGT',
            'Lanka Time': 'LKT', 'Line Islands Time': 'LINT', 'Lord Howe Daylight Time': 'LHDT',
            'Lord Howe Standard Time': 'LHST', 'Macao Standard Time': 'CST', 'Macao Summer Time': 'CDT',
            'Magadan Standard Time': 'MAGT', 'Magadan Summer Time': 'MAGST', 'Malaysia Time': 'MYT',
            'Maldives Time': 'MVT', 'Marquesas Time': 'MART', 'Marshall Islands Time': 'MHT',
            'Mauritius Standard Time': 'MUT', 'Mauritius Summer Time': 'MUST', 'Mawson Time': 'MAWT',
            'Mexican Pacific Daylight Time': 'PDT', 'Mexican Pacific Standard Time': 'PST', 'Moscow Standard Time': 'MSK',
            'Moscow Summer Time': 'MSD', 'Mountain Daylight Time': 'MDT', 'Mountain Standard Time': 'MST',
            'Myanmar Time': 'MMT', 'Nauru Time': 'NRT', 'Nepal Time': 'NPT',
            'New Caledonia Standard Time': 'NCT', 'New Caledonia Summer Time': 'NCST', 'New Zealand Daylight Time': 'NZDT',
            'New Zealand Standard Time': 'NZST', 'Newfoundland Daylight Time': 'NDT', 'Newfoundland Standard Time': 'NST',
            'Niue Time': 'NUT', 'Norfolk Island Daylight Time': 'NFDT', 'Norfolk Island Standard Time': 'NFT',
            'North Mariana Islands Time': 'ChST', 'Novosibirsk Standard Time': 'NOVT', 'Novosibirsk Summer Time': 'NOVST',
            'Omsk Standard Time': 'OMST', 'Omsk Summer Time': 'OMSST', 'Pacific Daylight Time': 'PDT',
            'Pacific Standard Time': 'PST', 'Pakistan Standard Time': 'PKT', 'Pakistan Summer Time': 'PKST',
            'Palau Time': 'PWT', 'Papua New Guinea Time': 'PGT', 'Paraguay Standard Time': 'PYT',
            'Paraguay Summer Time': 'PYST', 'Peru Standard Time': 'PET', 'Peru Summer Time': 'PEST',
            'Petropavlovsk-Kamchatski Standard Time': 'PETT', 'Petropavlovsk-Kamchatski Summer Time': 'PETST', 'Philippine Standard Time': 'PST',
            'Philippine Summer Time': 'PHST', 'Phoenix Islands Time': 'PHOT', 'Pitcairn Time': 'PIT',
            'Ponape Time': 'PONT', 'Pyongyang Time': 'KST', 'Qyzylorda Standard Time': 'QYZT',
            'Qyzylorda Summer Time': 'QYZST', 'Rothera Time': 'ROOTT', 'Réunion Time': 'RET',
            'Sakhalin Standard Time': 'SAKT', 'Sakhalin Summer Time': 'SAKST', 'Samara Standard Time': 'SAMT',
            'Samara Summer Time': 'SAMST', 'Samoa Standard Time': 'SST', 'Seychelles Time': 'SCT',
            'Singapore Standard Time': 'SGT', 'Solomon Islands Time': 'SBT', 'South Africa Standard Time': 'SAST',
            'South Georgia Time': 'GST', 'St. Pierre & Miquelon Daylight Time': 'PMDT', 'St. Pierre & Miquelon Standard Time': 'PMST',
            'Suriname Time': 'SRT', 'Syowa Time': 'SYOT', 'Tahiti Time': 'TAHT',
            'Taipei Daylight Time': 'CDT', 'Taipei Standard Time': 'CST', 'Tajikistan Time': 'TJT',
            'Tokelau Time': 'TKT', 'Tonga Standard Time': 'TOT', 'Tonga Summer Time': 'TOST',
            'Turkmenistan Standard Time': 'TMT', 'Tuvalu Time': 'TVT', 'Ulaanbaatar Standard Time': 'ULAT',
            'Ulaanbaatar Summer Time': 'ULAST', 'Uruguay Standard Time': 'UYT', 'Uruguay Summer Time': 'UYST',
            'Uzbekistan Standard Time': 'UZT', 'Uzbekistan Summer Time': 'UZST', 'Vanuatu Standard Time': 'VUT',
            'Vanuatu Summer Time': 'VUST', 'Venezuela Time': 'VET', 'Vladivostok Standard Time': 'VLAT',
            'Vladivostok Summer Time': 'VLAST', 'Volgograd Standard Time': 'VOLT', 'Volgograd Summer Time': 'VOLST',
            'Vostok Time': 'VOST', 'Wake Island Time': 'WAKT', 'Wallis & Futuna Time': 'WFT',
            'West Africa Standard Time': 'WAT', 'West Africa Summer Time': 'WAST', 'West Greenland Standard Time': 'WGST',
            'West Greenland Summer Time': 'WGST', 'West Kazakhstan Time': 'AQTT', 'Western Argentina Standard Time': 'ART',
            'Western Argentina Summer Time': 'ARST', 'Western European Standard Time': 'WET', 'Western European Summer Time': 'WEST',
            'Western Indonesia Time': 'WIB', 'Yakutsk Standard Time': 'YAKT', 'Yakutsk Summer Time': 'YAKST',
            'Yekaterinburg Standard Time': 'YEKT', 'Yekaterinburg Summer Time': 'YEKST', 'Yukon Time': 'YT'
        };
        var options = {
            hour12: false, weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric', second: 'numeric', fractionalSecondDigits: 3,
            timeZone: 'UTC'
        };
        var cache = {
            utc: new Intl.DateTimeFormat('en-US', options)
        };
        var getDateTimeFormat = function (timeZone) {
            if (timeZone) {
                var tz = timeZone.toLowerCase();

                if (!cache[tz]) {
                    options.timeZone = timeZone;
                    cache[tz] = new Intl.DateTimeFormat('en-US', options);
                }
                return cache[tz];
            }
            options.timeZone = undefined;
            return new Intl.DateTimeFormat('en-US', options);
        };
        var formatToParts = function (dateTimeFormat, dateObjOrTime) {
            var array = dateTimeFormat.formatToParts(dateObjOrTime),
                values = {};

            for (var i = 0, len = array.length; i < len; i++) {
                var type = array[i].type,
                    value = array[i].value;

                switch (type) {
                case 'weekday':
                    values[type] = 'SunMonTueWedThuFriSat'.indexOf(value) / 3;
                    break;
                case 'hour':
                    values[type] = value % 24;
                    break;
                case 'year':
                case 'month':
                case 'day':
                case 'minute':
                case 'second':
                case 'fractionalSecond':
                    values[type] = value | 0;
                }
            }
            return values;
        };
        var getTimeFromParts = function (parts) {
            return Date.UTC(
                parts.year, parts.month - (parts.year < 100 ? 1900 * 12 + 1 : 1), parts.day,
                parts.hour, parts.minute, parts.second, parts.fractionalSecond
            );
        };
        var formatTZ = function (dateObj, arg, timeZone) {
            var parts = formatToParts(getDateTimeFormat(timeZone), dateObj);

            return date.format({
                getFullYear: function () { return parts.year; },
                getMonth: function () { return parts.month - 1; },
                getDate: function () { return parts.day; },
                getHours: function () { return parts.hour; },
                getMinutes: function () { return parts.minute; },
                getSeconds: function () { return parts.second; },
                getMilliseconds: function () { return parts.fractionalSecond; },
                getDay: function () { return parts.weekday; },
                getTime: function () { return dateObj.getTime(); },
                getTimezoneOffset: function () {
                    return (dateObj.getTime() - getTimeFromParts(parts)) / 60000 | 0;
                },
                getTimezoneName: function () { return timeZone || undefined; }
            }, arg);
        };
        var parseTZ = function (arg1, arg2, timeZone) {
            var pattern = typeof arg2 === 'string' ? date.compile(arg2) : arg2;
            var time = typeof arg1 === 'string' ? date.parse(arg1, pattern, !!timeZone).getTime() : arg1;
            var hasZ = function (array) {
                for (var i = 1, len = array.length; i < len; i++) {
                    if (!array[i].indexOf('Z')) {
                        return true;
                    }
                }
                return false;
            };

            if (!timeZone || hasZ(pattern) || timeZone.toUpperCase() === 'UTC' || isNaN(time)) {
                return new Date(time);
            }

            var getOffset = function (timeZoneName) {
                var keys = (timeZoneName || '').toLowerCase().split('/');
                var value = timeZones[keys[0]] || {};

                for (var i = 1, len = keys.length; i < len; i++) {
                    value = value[keys[i]] || {};
                }
                return Array.isArray(value) ? value : [];
            };

            var utc = getDateTimeFormat('UTC');
            var tz = getDateTimeFormat(timeZone);
            var offset = getOffset(timeZone);

            for (var i = 0; i < 2; i++) {
                var targetString = utc.format(time - i * 24 * 60 * 60 * 1000);

                for (var j = 0, len = offset.length; j < len; j++) {
                    if (tz.format(time - (offset[j] + i * 24 * 60 * 60) * 1000) === targetString) {
                        return new Date(time - offset[j] * 1000);
                    }
                }
            }
            return new Date(NaN);
        };
        var transformTZ = function (dateString, arg1, arg2, timeZone) {
            return formatTZ(date.parse(dateString, arg1), arg2, timeZone);
        };
        var normalizeDateParts = function (parts, adjustEOM) {
            var d = new Date(Date.UTC(
                parts.year, parts.month - (parts.year < 100 ? 1900 * 12 + 1 : 1), parts.day
            ));

            if (adjustEOM && d.getUTCDate() < parts.day) {
                d.setUTCDate(0);
            }
            parts.year = d.getUTCFullYear();
            parts.month = d.getUTCMonth() + 1;
            parts.day = d.getUTCDate();

            return parts;
        };
        var addYearsTZ = function (dateObj, years, timeZone) {
            return addMonthsTZ(dateObj, years * 12, timeZone);
        };
        var addMonthsTZ = function (dateObj, months, timeZone) {
            var parts = formatToParts(getDateTimeFormat(timeZone), dateObj);

            parts.month += months;
            var dateObj2 = parseTZ(getTimeFromParts(normalizeDateParts(parts, true)), [], timeZone);

            return isNaN(dateObj2.getTime()) ? date.addMonths(dateObj, months, true) : dateObj2;
        };
        var addDaysTZ = function (dateObj, days, timeZone) {
            var parts = formatToParts(getDateTimeFormat(timeZone), dateObj);

            parts.day += days;
            var dateObj2 = parseTZ(getTimeFromParts(normalizeDateParts(parts, false)), [], timeZone);

            return isNaN(dateObj2.getTime()) ? date.addDays(dateObj, days, true) : dateObj2;
        };

        var name = 'timezone';

        var getName = function (d) {
            var parts = new Intl.DateTimeFormat('en-US', {
                timeZone: typeof d.getTimezoneName === 'function' ? d.getTimezoneName() : undefined,
                timeZoneName: 'long'
            }).formatToParts(d.getTime());

            for (var i = 0, len = parts.length; i < len; i++) {
                if (parts[i].type === 'timeZoneName') {
                    return parts[i].value;
                }
            }
            return '';
        };

        proto.plugin(name, {
            formatter: {
                z: function (d) {
                    var name = getName(d);
                    return timeZoneNames[name] || '';
                },
                zz: function (d) {
                    var name = getName(d);
                    return /^GMT[+-].+$/.test(name) ? '' : name;
                }
            },
            extender: {
                formatTZ: formatTZ,
                parseTZ: parseTZ,
                transformTZ: transformTZ,
                addYearsTZ: addYearsTZ,
                addMonthsTZ: addMonthsTZ,
                addDaysTZ: addDaysTZ
            }
        });
        return name;
    };

    return plugin;

}));
