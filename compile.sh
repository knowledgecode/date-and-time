#!/bin/sh -eu

url="https://closure-compiler.appspot.com/compile"
dir=`dirname $0`
input=${dir}/$1
output=${dir}/$2
js_code=`cat $input`

curl --silent \
    --data-urlencode "js_code=$js_code" \
    --data-urlencode "output_info=compiled_code" \
    $url > $output
