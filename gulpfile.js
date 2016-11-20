"use strict";
var gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    sass = require('gulp-sass');

const tscConfig = require('./tsconfig.json');

var paths = {
    src: ['./src/**/*.ts'],
    index: ['./www/index.html'],
    dest: 'www/'
};
gulp.task('compile', function () {
    gulp.src(paths.src)
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest(paths.dest));
});