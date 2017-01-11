'use strict';

/*
 * > Clean
 */

import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import paths from '../paths';


gulp.task('cleanDist', () => {
  return del([
    `${paths.dist}`,
  ]);
});


gulp.task('cleanTest', () => {
  return del([
    './test/svgs.svg',
  ]);
});
