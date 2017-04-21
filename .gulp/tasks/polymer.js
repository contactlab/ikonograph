'use strict';

/*
 * > Fonts
 */

import gulp from 'gulp';
import paths from '../paths';


gulp.task('polymer', function () {
  gulp.src(`${paths.src}/ikonograph.html`)
    .pipe(gulp.dest(paths.dist));
});