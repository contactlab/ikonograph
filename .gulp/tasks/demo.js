'use strict';

/*
 * > Demo
 */

import gulp from 'gulp';
import paths from '../paths';
import runSequence from 'run-sequence';
import clean from 'gulp-clean';


gulp.task('cleanDemo', function () {
  return gulp.src(['./demo/ikonograph', './demo/fonts'], { read: false })
    .pipe(clean());
});


gulp.task('copySvg', function () {
  gulp.src(`${paths.dist}/ikonograph.svg`)
    .pipe(gulp.dest('./demo/ikonograph'));
});

gulp.task('copyCSS', function () {
  gulp.src(`${paths.dist}/ikonograph.css`)
    .pipe(gulp.dest('./demo/ikonograph'));
});


gulp.task('copyFonts', function () {
  gulp.src(`${paths.src}/fonts/*`)
    .pipe(gulp.dest('./demo/ikonograph/fonts'));
});


gulp.task('demo', () => {
  runSequence(
    'cleanDemo',
    'copySvg',
    'copyCSS',
    'copyFonts'
  );
});