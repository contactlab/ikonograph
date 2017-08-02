'use strict';

/*
 * > Replace
 */

import path from 'path';
import fs from 'fs';

import gulp from 'gulp';
import replace from 'gulp-replace';
import filesToJson from 'gulp-files-to-json';


gulp.task('replace', (cb) => {
  const srcPath = path.resolve(path.join('src', 'ikonograph.js'));
  const jsonSVG = path.resolve(path.join('dist', 'icons.json'));
  fs.readFile(jsonSVG, (err, content) => {
    if (err) {
      return cb(err);
    }
    gulp.src(['src/ikonograph.js'])
      .pipe(replace(/ICONS_SVG = \{(.|\n)*?\}/g, `ICONS_SVG = ${content}`))
      .pipe(replace('<!-- Generated by IcoMoon.io -->', ''))
      .pipe(gulp.dest('dist/'))
      .on('end', cb);
  });
});
