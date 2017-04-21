'use strict';

/*
 * > Bower
 */

import gulp from 'gulp';
import paths from '../paths';


gulp.task('bower', function () {
  gulp.src('bower_components/**/*')
    .pipe(gulp.dest(`${paths.dist}/bower_components`));
});