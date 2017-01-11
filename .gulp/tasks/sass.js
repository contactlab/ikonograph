'use strict';

/*
 * > Sass
 */

import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import runSequence from 'run-sequence';
import paths from '../paths';


gulp.task('convertSass', () => {
  return gulp.src(`${paths.src}/ikonograph.scss`)
  .pipe(gulpSass().on('error', gulpSass.logError))
  .pipe(postcss([ autoprefixer ]))
  .pipe(gulp.dest( paths.dist ));
});

gulp.task('copySass', function() {
  gulp.src(`${paths.src}/ikonograph.scss`)
  .pipe(gulp.dest( paths.dist ));
});


gulp.task('sass', () => {
  runSequence(
    'convertSass',
    'copySass',
    'minify',
    'header'
  );
});
