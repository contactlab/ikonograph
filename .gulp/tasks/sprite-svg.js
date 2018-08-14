'use strict';

/*
 * > Sprite SVG
 */

import gulp from 'gulp';
import svgmin from 'gulp-svgmin';
import rename from 'gulp-rename';
import path from 'path';
import paths from '../paths';
import svgConfig from '../svg-config';


gulp.task('sprite', () => {
  return gulp.src(`${paths.src}/svgs/*.svg`)
    .pipe(svgmin((file) => {
      var prefix = path.basename(file.relative, path.extname(file.relative));
      return svgConfig(prefix);
    }))
    .pipe(svgmin({ inlineSvg: true }))
    .pipe(rename({
      basename: "ikonograph"
    }))
    .pipe(gulp.dest(paths.dist));
});
