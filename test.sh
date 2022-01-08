#!/bin/sh -eu

# Core (Node)
mocha test/test.js

# Locales (Node CJS)
mocha test/locale/ar.js
mocha test/locale/az.js
mocha test/locale/bn.js
mocha test/locale/cs.js
mocha test/locale/de.js
mocha test/locale/dk.js
mocha test/locale/el.js
mocha test/locale/es.js
mocha test/locale/fa.js
mocha test/locale/fr.js
mocha test/locale/hi.js
mocha test/locale/hu.js
mocha test/locale/id.js
mocha test/locale/it.js
mocha test/locale/ja.js
mocha test/locale/jv.js
mocha test/locale/ko.js
mocha test/locale/my.js
mocha test/locale/nl.js
mocha test/locale/pa-in.js
mocha test/locale/pl.js
mocha test/locale/pt.js
mocha test/locale/ro.js
mocha test/locale/ru.js
mocha test/locale/rw.js
mocha test/locale/sr.js
mocha test/locale/sv.js
mocha test/locale/th.js
mocha test/locale/tr.js
mocha test/locale/uk.js
mocha test/locale/uz.js
mocha test/locale/vi.js
mocha test/locale/zh-cn.js
mocha test/locale/zh-tw.js

# Plugins (Node CJS)
mocha test/plugin/day-of-week.js
mocha test/plugin/meridiem.js
mocha test/plugin/microsecond.js
mocha test/plugin/ordinal.js
mocha test/plugin/timespan.js
mocha test/plugin/two-digit-year.js
mocha test/plugin/timezone.js

# Combination (Node CJS)
mocha test/combination.js

# Locales (Node ESM)
mocha test/esm/locale/ar.mjs
mocha test/esm/locale/az.mjs
mocha test/esm/locale/bn.mjs
mocha test/esm/locale/cs.mjs
mocha test/esm/locale/de.mjs
mocha test/esm/locale/dk.mjs
mocha test/esm/locale/el.mjs
mocha test/esm/locale/es.mjs
mocha test/esm/locale/fa.mjs
mocha test/esm/locale/fr.mjs
mocha test/esm/locale/hi.mjs
mocha test/esm/locale/hu.mjs
mocha test/esm/locale/id.mjs
mocha test/esm/locale/it.mjs
mocha test/esm/locale/ja.mjs
mocha test/esm/locale/jv.mjs
mocha test/esm/locale/ko.mjs
mocha test/esm/locale/my.mjs
mocha test/esm/locale/nl.mjs
mocha test/esm/locale/pa-in.mjs
mocha test/esm/locale/pl.mjs
mocha test/esm/locale/pt.mjs
mocha test/esm/locale/ro.mjs
mocha test/esm/locale/ru.mjs
mocha test/esm/locale/rw.mjs
mocha test/esm/locale/sr.mjs
mocha test/esm/locale/sv.mjs
mocha test/esm/locale/th.mjs
mocha test/esm/locale/tr.mjs
mocha test/esm/locale/uk.mjs
mocha test/esm/locale/uz.mjs
mocha test/esm/locale/vi.mjs
mocha test/esm/locale/zh-cn.mjs
mocha test/esm/locale/zh-tw.mjs

# Plugins (Node ESM)
mocha test/esm/plugin/day-of-week.mjs
mocha test/esm/plugin/meridiem.mjs
mocha test/esm/plugin/microsecond.mjs
mocha test/esm/plugin/ordinal.mjs
mocha test/esm/plugin/timespan.mjs
mocha test/esm/plugin/two-digit-year.mjs
mocha test/esm/plugin/timezone.mjs

# Combination (Node ESM)
mocha test/esm/combination.mjs

# Core (browser)
mocha-headless-chrome -f test/test.html

# Locales (browser IIFE)
mocha-headless-chrome -f test/locale.html

# Plugins (browser IIFE)
mocha-headless-chrome -f test/plugin.html

# Combination (browser IIFE)
mocha-headless-chrome -f test/combination.html

# Locales (browser ESM)
# mocha-headless-chrome -f http://localhost:8080/test/esm/locale.html
# ES modules only work with the http(s) protocol, so you need a local http server to test it.

# Plugins (browser ESM)
# mocha-headless-chrome -f http://localhost:8080/test/esm/plugin.html
# ES modules only work with the http(s) protocol, so you need a local http server to test it.

# Combination (browser ESM)
# mocha-headless-chrome -f http://localhost:8080/test/esm/combination.html
# ES modules only work with the http(s) protocol, so you need a local http server to test it.
