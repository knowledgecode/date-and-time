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
mocha-phantomjs test/ar.html
mocha-phantomjs test/bn.html
mocha-phantomjs test/de.html
mocha-phantomjs test/es.html
mocha-phantomjs test/fr.html
mocha-phantomjs test/hi.html
mocha-phantomjs test/it.html
mocha-phantomjs test/ja.html
mocha-phantomjs test/ko.html
mocha-phantomjs test/pt.html
mocha-phantomjs test/ru.html
mocha-phantomjs test/zh-cn.html
mocha-phantomjs test/zh-tw.html

