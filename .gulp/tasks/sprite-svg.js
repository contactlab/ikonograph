'use strict';

/*
 * > Sprite SVG
 */

import gulp from 'gulp';
import svgMin from 'gulp-svgmin';
import svgStore from 'gulp-svgstore';
import rename from 'gulp-rename';
import path from 'path';
import paths from '../paths';


gulp.task('sprite', () => {
  return gulp.src(`${paths.src}/svgs/*.svg`)
    .pipe(svgMin((file) => {
      var prefix = path.basename(file.relative, path.extname(file.relative));
      return {
        plugins: [{
          js2svg: {
            pretty: true
          },
          removeStyleElement: true,
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
          removeMetadata: false
        }]
      }
    }))
    .pipe(svgStore({ inlineSvg: true }))
    .pipe(rename({
      basename: "ikonograph"
    }))
    .pipe(gulp.dest(paths.dist));
});
