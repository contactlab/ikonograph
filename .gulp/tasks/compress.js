'use strict';

/*
 * > Replace
 */

import gulp from 'gulp'
import uglify from 'gulp-uglify';
import pump from 'pump';
import uglifyjs from 'uglify-es';
import composer from 'gulp-uglify/composer';

const minify = composer(uglifyjs, console);

gulp.task('compress', cb => {
  const options = {};

  pump(
    [
      gulp.src('dist/*.js'),
      minify(options),
      gulp.dest('dist')
    ],
    cb
  );
});
