'use strict';

/*
 * > Svg
 */

import gulp from 'gulp';
import filesToJson from 'gulp-files-to-json';
import svgmin from 'gulp-svgmin';
import path from 'path';
import svgConfig from '../svg-config';


gulp.task('svg', () =>
  gulp.src('./src/svgs/**/*.svg')
    .pipe(svgmin((file) => {
      var prefix = path.basename(file.relative, path.extname(file.relative));
      return svgConfig(prefix);
    }))
    .pipe(gulp.dest('./dist/svgs'))
    .pipe(filesToJson('icons.json'))
    .pipe(gulp.dest('./dist/'))
);
