'use strict';

/*
 * > Fonts
 */

import gulp from 'gulp';
import paths from '../paths';


gulp.task('fonts', function () {
  gulp.src(`${paths.src}/fonts/*`)
    .pipe(gulp.dest(`${paths.dist}/fonts`));
});