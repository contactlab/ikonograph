'use strict';

/*
 * > Svg
 */

import gulp from 'gulp';
import filesToJson from 'gulp-files-to-json';
import svgo from 'gulp-svgo';
import path from 'path';
import paths from '../paths';

gulp.task('svg', () =>
  gulp.src('./src/svgs/**/*.svg')
    .pipe(svgo((file) => {
      var prefix = path.basename(file.relative, path.extname(file.relative));
      return {
        plugins: [{
          js2svg: {
            pretty: true
          },
          cleanupIDs: {
            prefix: prefix + '-',
            minify: true
          },
          cleanupNumericValues: {
            floatPrecision: 2
          },
          convertColors: {
            names2hex: true,
            rgb2hex: true
          },
          removeMetadata: false,
          removeStyleElement: true,
          removeTitle: true,
          removeUselessStrokeAndFill: true
        }]
      }
    }))
    .pipe(gulp.dest('./dist/svgs'))
    .pipe(filesToJson('icons.json'))
    .pipe(gulp.dest('./dist/'))
);
