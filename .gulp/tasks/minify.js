'use strict';

/*
 * > Minify
 */

import gulp from 'gulp';
import cssnano from 'gulp-cssnano';
import rename from 'gulp-rename';
import paths from '../paths';


gulp.task('minify', () => {
  return gulp.src(`${paths.dist}/ikonograph.css`)
  .pipe(cssnano())
  .pipe(rename({
    suffix: ".min"
  }))
  .pipe(gulp.dest( paths.dist ));
});
