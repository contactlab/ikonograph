'use strict';

/*
 * > Sass
 */

import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import paths from '../paths';


gulp.task('sass', () => {
  return gulp.src(`${paths.scss}/icons.scss`)
  .pipe(gulpSass().on('error', gulpSass.logError))
  .pipe(postcss([ autoprefixer ]))
  .pipe(gulp.dest( paths.dist ));
});
