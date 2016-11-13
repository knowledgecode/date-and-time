#!/bin/sh -eu

mocha test/test.js
mocha test/ar.js
mocha test/az.js
mocha test/bn.js
mocha test/cs.js
mocha test/de.js
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

mocha-phantomjs test/test.html

