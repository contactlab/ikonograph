'use strict';

/*
 * > Svg
 */

import gulp from 'gulp';
import filesToJson from 'gulp-files-to-json';

gulp.task('svg', () =>
  gulp.src('./src/svgs/**/*.svg')
    .pipe(gulp.dest('./dist/svgs'))
    .pipe(filesToJson('icons.json'))
    .pipe(gulp.dest('./dist/'))
);
