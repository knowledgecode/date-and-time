#!/bin/sh -eu

mocha test/test.js
mocha test/ar.js
mocha test/bn.js
mocha test/de.js
mocha test/es.js
mocha test/fr.js
mocha test/hi.js
mocha test/it.js
mocha test/ja.js
mocha test/ko.js
mocha test/pt.js
mocha test/ru.js
mocha test/zh-cn.js
mocha test/zh-tw.js

mocha-phantomjs test/test.html

