#!/bin/sh -eu

# Core
mocha test/test.js

# Locales
mocha test/ar.js
mocha test/az.js
mocha test/bn.js
mocha test/cs.js
mocha test/de.js
mocha test/dk.js
mocha test/el.js
mocha test/es.js
mocha test/fa.js
mocha test/fr.js
mocha test/hi.js
mocha test/hu.js
mocha test/id.js
mocha test/it.js
mocha test/ja.js
mocha test/jv.js
mocha test/ko.js
mocha test/my.js
mocha test/nl.js
mocha test/pa-in.js
mocha test/pl.js
mocha test/pt.js
mocha test/ro.js
mocha test/ru.js
mocha test/sr.js
mocha test/th.js
mocha test/tr.js
mocha test/uk.js
mocha test/uz.js
mocha test/vi.js
mocha test/zh-cn.js
mocha test/zh-tw.js

# Plugins
mocha test/meridiem.js
mocha test/ordinal.js
mocha test/two-digit-year.js

# Core (browser)
mocha-headless-chrome -f test/test.html

# Core (es6 -> es5 browser)
browserify -t [ babelify --presets [ env ] ] test/test.es6.js --outfile test/test.es5.js
mocha-headless-chrome -f test/test-es5.html

# Locale (es6 -> es5 browser)
browserify -t [ babelify --presets [ env ] ] test/ja.es6.js --outfile test/ja.es5.js
mocha-headless-chrome -f test/ja-es5.html

# Plugin (es6 -> es5 browser)
browserify -t [ babelify --presets [ env ] ] test/meridiem.es6.js --outfile test/meridiem.es5.js
mocha-headless-chrome -f test/meridiem-es5.html
