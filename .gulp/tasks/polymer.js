'use strict';

/*
 * > Fonts
 */

import gulp from 'gulp';
import path from 'path';
import paths from '../paths';
import polymerIconset from 'gulp-polymer-iconset';

gulp.task('polymer-iconset', function () {
  return gulp.src(`${paths.src}/svgs/**/*`)
    .pipe(polymerIconset({
      iconSetName: 'ikonograph',
      iconSize: 24,
      iconId: function (file) {
        return path.basename(file.path, '.svg');
      },
    }))
    .pipe(gulp.dest(paths.dist));
});