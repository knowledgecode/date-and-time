#!/bin/sh -eu

url="http://closure-compiler.appspot.com/compile"
dir=`dirname $0`
input="${dir}/date-and-time.js"
output="${dir}/date-and-time.min.js"
js_code=`cat $input`

curl --silent \
    --data-urlencode "js_code=$js_code" \
    --data-urlencode "output_info=compiled_code" \
    $url > $output

