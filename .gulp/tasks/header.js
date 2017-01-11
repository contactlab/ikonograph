'use strict';

/*
 * > Header
 */

import gulp from 'gulp';
import paths from '../paths';
import header from 'gulp-header';

gulp.task('header', function bannerify() {
  return gulp.src(`${paths.dist}/**/*.css`)
    .pipe(header(paths.banner))
    .pipe(gulp.dest(paths.dist))
});
