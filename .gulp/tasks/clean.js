'use strict';

/*
 * > Clean
 */

import gulp from 'gulp';
import del from 'del';
import paths from '../paths';


gulp.task('cleanDist', () => {
  return del([
    `${paths.dist}`,
  ]);
});
