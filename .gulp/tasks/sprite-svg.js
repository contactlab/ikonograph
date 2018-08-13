'use strict';

/*
 * > Sprite SVG
 */

import gulp from 'gulp';
import svgo from 'gulp-svgo';
import svgStore from 'gulp-svgstore';
import rename from 'gulp-rename';
import path from 'path';
import paths from '../paths';


gulp.task('sprite', () => {
  return gulp.src(`${paths.src}/svgs/*.svg`)
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
    .pipe(svgStore({ inlineSvg: true }))
    .pipe(rename({
      basename: "ikonograph"
    }))
    .pipe(gulp.dest(paths.dist));
});
