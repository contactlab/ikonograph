'use strict';

/*
 * > Demo
 */

import gulp from 'gulp';
import paths from '../paths';
import runSequence from 'run-sequence';
import clean from 'gulp-clean';


gulp.task('cleanDemo', function () {
  return gulp.src(['./demo/bower_components/ikonograph'], { read: false })
    .pipe(clean());
});


gulp.task('copySvg', function () {
  gulp.src(`${paths.dist}/ikonograph.svg`)
    .pipe(gulp.dest('./demo/bower_components/ikonograph/dist'));
});

gulp.task('copyCSS', function () {
  gulp.src(`${paths.dist}/ikonograph.css`)
    .pipe(gulp.dest('./demo/bower_components/ikonograph/dist'));
});


gulp.task('copyFonts', function () {
  gulp.src(`${paths.src}/fonts/*`)
    .pipe(gulp.dest('./demo/bower_components/ikonograph/dist/fonts'));
});

gulp.task('copyPolymerFile', function () {
  gulp.src(`${paths.dist}/ikonograph.html`)
    .pipe(gulp.dest('./demo/bower_components/ikonograph/dist'));
});

gulp.task('copyBower', function () {
  gulp.src('bower_components/**/*')
    .pipe(gulp.dest('./demo/bower_components'));
});


gulp.task('demo', () => {
  runSequence(
    'cleanDemo',
    'copyBower',
    'copySvg',
    'copyCSS',
    'copyFonts',
    'copyPolymerFile'
  );
});