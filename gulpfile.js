'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var closure = require('gulp-closure-compiler-service');

gulp.task('compile', function () {
    return gulp.src('src/date-and-time.js')
        .pipe(closure({
            compilation_level: 'SIMPLE_OPTIMIZATIONS',
            language: 'ECMASCRIPT5_STRICT'
        }))
        .pipe(rename('date-and-time.min.js'))
        .pipe(gulp.dest('src'));
});
