# Supported Timezones

## Import Methods

There are three ways to import and use timezones with the date-and-time library:

### Method 1: IANA Timezone Name String (Recommended)

Pass an IANA timezone name string directly to any function that accepts a timezone option. No imports are required — just use the timezone name as a string.

```typescript
import { format } from 'date-and-time';

const date = new Date();

format(date, 'YYYY-MM-DD HH:mm:ss', { timeZone: 'Asia/Tokyo' });
// => 2025-08-23 23:30:45

format(date, 'YYYY-MM-DD HH:mm:ss', { timeZone: 'America/New_York' });
// => 2025-08-23 09:30:45

format(date, 'YYYY-MM-DD HH:mm:ss', { timeZone: 'Europe/London' });
// => 2025-08-23 14:30:45
```

The string `"UTC"` is treated specially by this library and is processed faster than other timezone strings. While other strings that represent UTC (e.g., `"Etc/UTC"`) are also recognized, using `"UTC"` is always recommended.

### Method 2: Consolidated Import (Deprecated)

**This approach is deprecated and will be removed in the next major version. Use IANA timezone name strings instead.**

Import multiple timezones from a single module using named imports.

```typescript
import { format } from 'date-and-time';
import { Tokyo, New_York, London, Sydney } from 'date-and-time/timezone';

const date = new Date();

format(date, 'YYYY-MM-DD HH:mm:ss', { timeZone: Tokyo });    // JST
format(date, 'YYYY-MM-DD HH:mm:ss', { timeZone: New_York }); // EST/EDT
format(date, 'YYYY-MM-DD HH:mm:ss', { timeZone: London });   // GMT/BST
format(date, 'YYYY-MM-DD HH:mm:ss', { timeZone: Sydney });   // AEDT/AEST
```

### Method 3: Individual Import (Deprecated)

**This approach is deprecated and will be removed in the next major version. Use IANA timezone name strings instead.**

Import each timezone you need directly from its module path.

```typescript
import { format } from 'date-and-time';
import Tokyo from 'date-and-time/timezones/Asia/Tokyo';
import New_York from 'date-and-time/timezones/America/New_York';

const date = new Date();

format(date, 'YYYY-MM-DD HH:mm:ss', { timeZone: Tokyo });
// => 2025-08-23 23:30:45

format(date, 'YYYY-MM-DD HH:mm:ss', { timeZone: New_York });
// => 2025-08-23 09:30:45
```

## Regions

1. [Africa](#africa)
2. [America](#america)
3. [Antarctica](#antarctica)
4. [Arctic](#arctic)
5. [Asia](#asia)
6. [Atlantic](#atlantic)
7. [Australia](#australia)
8. [Europe](#europe)
9. [Indian](#indian)
10. [Pacific](#pacific)

## Africa

- Africa/Abidjan
- Africa/Accra
- Africa/Addis_Ababa
- Africa/Algiers
- Africa/Asmara
- Africa/Bamako
- Africa/Bangui
- Africa/Banjul
- Africa/Bissau
- Africa/Blantyre
- Africa/Brazzaville
- Africa/Bujumbura
- Africa/Cairo
- Africa/Casablanca
- Africa/Ceuta
- Africa/Conakry
- Africa/Dakar
- Africa/Dar_es_Salaam
- Africa/Djibouti
- Africa/Douala
- Africa/El_Aaiun
- Africa/Freetown
- Africa/Gaborone
- Africa/Harare
- Africa/Johannesburg
- Africa/Juba
- Africa/Kampala
- Africa/Khartoum
- Africa/Kigali
- Africa/Kinshasa
- Africa/Lagos
- Africa/Libreville
- Africa/Lome
- Africa/Luanda
- Africa/Lubumbashi
- Africa/Lusaka
- Africa/Malabo
- Africa/Maputo
- Africa/Maseru
- Africa/Mbabane
- Africa/Mogadishu
- Africa/Monrovia
- Africa/Nairobi
- Africa/Ndjamena
- Africa/Niamey
- Africa/Nouakchott
- Africa/Ouagadougou
- Africa/Porto-Novo
- Africa/Sao_Tome
- Africa/Tripoli
- Africa/Tunis
- Africa/Windhoek

## America

- America/Adak
- America/Anchorage
- America/Anguilla
- America/Antigua
- America/Araguaina
- America/Argentina/Buenos_Aires
- America/Argentina/Catamarca
- America/Argentina/Cordoba
- America/Argentina/Jujuy
- America/Argentina/La_Rioja
- America/Argentina/Mendoza
- America/Argentina/Rio_Gallegos
- America/Argentina/Salta
- America/Argentina/San_Juan
- America/Argentina/San_Luis
- America/Argentina/Tucuman
- America/Argentina/Ushuaia
- America/Aruba
- America/Asuncion
- America/Atikokan
- America/Bahia_Banderas
- America/Bahia
- America/Barbados
- America/Belem
- America/Belize
- America/Blanc-Sablon
- America/Boa_Vista
- America/Bogota
- America/Boise
- America/Cambridge_Bay
- America/Campo_Grande
- America/Cancun
- America/Caracas
- America/Cayenne
- America/Cayman
- America/Chicago
- America/Chihuahua
- America/Ciudad_Juarez
- America/Costa_Rica
- America/Coyhaique
- America/Creston
- America/Cuiaba
- America/Curacao
- America/Danmarkshavn
- America/Dawson_Creek
- America/Dawson
- America/Denver
- America/Detroit
- America/Dominica
- America/Edmonton
- America/Eirunepe
- America/El_Salvador
- America/Fort_Nelson
- America/Fortaleza
- America/Glace_Bay
- America/Goose_Bay
- America/Grand_Turk
- America/Grenada
- America/Guadeloupe
- America/Guatemala
- America/Guayaquil
- America/Guyana
- America/Halifax
- America/Havana
- America/Hermosillo
- America/Indiana/Indianapolis
- America/Indiana/Knox
- America/Indiana/Marengo
- America/Indiana/Petersburg
- America/Indiana/Tell_City
- America/Indiana/Vevay
- America/Indiana/Vincennes
- America/Indiana/Winamac
- America/Inuvik
- America/Iqaluit
- America/Jamaica
- America/Juneau
- America/Kentucky/Louisville
- America/Kentucky/Monticello
- America/Kralendijk
- America/La_Paz
- America/Lima
- America/Los_Angeles
- America/Lower_Princes
- America/Maceio
- America/Managua
- America/Manaus
- America/Marigot
- America/Martinique
- America/Matamoros
- America/Mazatlan
- America/Menominee
- America/Merida
- America/Metlakatla
- America/Mexico_City
- America/Miquelon
- America/Moncton
- America/Monterrey
- America/Montevideo
- America/Montserrat
- America/Nassau
- America/New_York
- America/Nome
- America/Noronha
- America/North_Dakota/Beulah
- America/North_Dakota/Center
- America/North_Dakota/New_Salem
- America/Nuuk
- America/Ojinaga
- America/Panama
- America/Paramaribo
- America/Phoenix
- America/Port_of_Spain
- America/Port-au-Prince
- America/Porto_Velho
- America/Puerto_Rico
- America/Punta_Arenas
- America/Rankin_Inlet
- America/Recife
- America/Regina
- America/Resolute
- America/Rio_Branco
- America/Santarem
- America/Santiago
- America/Santo_Domingo
- America/Sao_Paulo
- America/Scoresbysund
- America/Sitka
- America/St_Barthelemy
- America/St_Johns
- America/St_Kitts
- America/St_Lucia
- America/St_Thomas
- America/St_Vincent
- America/Swift_Current
- America/Tegucigalpa
- America/Thule
- America/Tijuana
- America/Toronto
- America/Tortola
- America/Vancouver
- America/Whitehorse
- America/Winnipeg
- America/Yakutat

## Antarctica

- Antarctica/Casey
- Antarctica/Davis
- Antarctica/DumontDUrville
- Antarctica/Macquarie
- Antarctica/Mawson
- Antarctica/McMurdo
- Antarctica/Palmer
- Antarctica/Rothera
- Antarctica/Syowa
- Antarctica/Troll
- Antarctica/Vostok

## Arctic

- Arctic/Longyearbyen

## Asia

- Asia/Aden
- Asia/Almaty
- Asia/Amman
- Asia/Anadyr
- Asia/Aqtau
- Asia/Aqtobe
- Asia/Ashgabat
- Asia/Atyrau
- Asia/Baghdad
- Asia/Bahrain
- Asia/Baku
- Asia/Bangkok
- Asia/Barnaul
- Asia/Beirut
- Asia/Bishkek
- Asia/Brunei
- Asia/Chita
- Asia/Colombo
- Asia/Damascus
- Asia/Dhaka
- Asia/Dili
- Asia/Dubai
- Asia/Dushanbe
- Asia/Famagusta
- Asia/Gaza
- Asia/Hebron
- Asia/Ho_Chi_Minh
- Asia/Hong_Kong
- Asia/Hovd
- Asia/Irkutsk
- Asia/Jakarta
- Asia/Jayapura
- Asia/Jerusalem
- Asia/Kabul
- Asia/Kamchatka
- Asia/Karachi
- Asia/Kathmandu
- Asia/Khandyga
- Asia/Kolkata
- Asia/Krasnoyarsk
- Asia/Kuala_Lumpur
- Asia/Kuching
- Asia/Kuwait
- Asia/Macau
- Asia/Magadan
- Asia/Makassar
- Asia/Manila
- Asia/Muscat
- Asia/Nicosia
- Asia/Novokuznetsk
- Asia/Novosibirsk
- Asia/Omsk
- Asia/Oral
- Asia/Phnom_Penh
- Asia/Pontianak
- Asia/Pyongyang
- Asia/Qatar
- Asia/Qostanay
- Asia/Qyzylorda
- Asia/Riyadh
- Asia/Sakhalin
- Asia/Samarkand
- Asia/Seoul
- Asia/Shanghai
- Asia/Singapore
- Asia/Srednekolymsk
- Asia/Taipei
- Asia/Tashkent
- Asia/Tbilisi
- Asia/Tehran
- Asia/Thimphu
- Asia/Tokyo
- Asia/Tomsk
- Asia/Ulaanbaatar
- Asia/Urumqi
- Asia/Ust-Nera
- Asia/Vientiane
- Asia/Vladivostok
- Asia/Yakutsk
- Asia/Yangon
- Asia/Yekaterinburg
- Asia/Yerevan

## Atlantic

- Atlantic/Azores
- Atlantic/Bermuda
- Atlantic/Canary
- Atlantic/Cape_Verde
- Atlantic/Faroe
- Atlantic/Madeira
- Atlantic/Reykjavik
- Atlantic/South_Georgia
- Atlantic/St_Helena
- Atlantic/Stanley

## Australia

- Australia/Adelaide
- Australia/Brisbane
- Australia/Broken_Hill
- Australia/Darwin
- Australia/Eucla
- Australia/Hobart
- Australia/Lindeman
- Australia/Lord_Howe
- Australia/Melbourne
- Australia/Perth
- Australia/Sydney

## Europe

- Europe/Amsterdam
- Europe/Andorra
- Europe/Astrakhan
- Europe/Athens
- Europe/Belgrade
- Europe/Berlin
- Europe/Bratislava
- Europe/Brussels
- Europe/Bucharest
- Europe/Budapest
- Europe/Busingen
- Europe/Chisinau
- Europe/Copenhagen
- Europe/Dublin
- Europe/Gibraltar
- Europe/Guernsey
- Europe/Helsinki
- Europe/Isle_of_Man
- Europe/Istanbul
- Europe/Jersey
- Europe/Kaliningrad
- Europe/Kirov
- Europe/Kyiv
- Europe/Lisbon
- Europe/Ljubljana
- Europe/London
- Europe/Luxembourg
- Europe/Madrid
- Europe/Malta
- Europe/Mariehamn
- Europe/Minsk
- Europe/Monaco
- Europe/Moscow
- Europe/Oslo
- Europe/Paris
- Europe/Podgorica
- Europe/Prague
- Europe/Riga
- Europe/Rome
- Europe/Samara
- Europe/San_Marino
- Europe/Sarajevo
- Europe/Saratov
- Europe/Simferopol
- Europe/Skopje
- Europe/Sofia
- Europe/Stockholm
- Europe/Tallinn
- Europe/Tirane
- Europe/Ulyanovsk
- Europe/Vaduz
- Europe/Vatican
- Europe/Vienna
- Europe/Vilnius
- Europe/Volgograd
- Europe/Warsaw
- Europe/Zagreb
- Europe/Zurich

## Indian

- Indian/Antananarivo
- Indian/Chagos
- Indian/Christmas
- Indian/Cocos
- Indian/Comoro
- Indian/Kerguelen
- Indian/Mahe
- Indian/Maldives
- Indian/Mauritius
- Indian/Mayotte
- Indian/Reunion

## Pacific

- Pacific/Apia
- Pacific/Auckland
- Pacific/Bougainville
- Pacific/Chatham
- Pacific/Chuuk
- Pacific/Easter
- Pacific/Efate
- Pacific/Fakaofo
- Pacific/Fiji
- Pacific/Funafuti
- Pacific/Galapagos
- Pacific/Gambier
- Pacific/Guadalcanal
- Pacific/Guam
- Pacific/Honolulu
- Pacific/Kanton
- Pacific/Kiritimati
- Pacific/Kosrae
- Pacific/Kwajalein
- Pacific/Majuro
- Pacific/Marquesas
- Pacific/Midway
- Pacific/Nauru
- Pacific/Niue
- Pacific/Norfolk
- Pacific/Noumea
- Pacific/Pago_Pago
- Pacific/Palau
- Pacific/Pitcairn
- Pacific/Pohnpei
- Pacific/Port_Moresby
- Pacific/Rarotonga
- Pacific/Saipan
- Pacific/Tahiti
- Pacific/Tarawa
- Pacific/Tongatapu
- Pacific/Wake
- Pacific/Wallis
