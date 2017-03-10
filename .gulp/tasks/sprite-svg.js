'use strict';

/*
 * > Sprite SVG
 */

import gulp from 'gulp';
import svgMin from 'gulp-svgmin';
import svgStore from 'gulp-svgstore';
import runSequence from 'run-sequence';
import rename from 'gulp-rename';
import inject from 'gulp-inject';
import path from 'path';
import paths from '../paths';


gulp.task('spriteSVG', () => {
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


gulp.task('copySVG', function() {
  gulp.src(`${paths.dist}/ikonograph.svg`)
  .pipe(gulp.dest( './test' ));
});


gulp.task('testSVG', () => {
  gulp.src('./test/index.html')
    .pipe(inject(gulp.src([`${paths.dist}/ikonograph.svg`]), {
      starttag: '<!-- inject:svg -->',
      transform: function (filePath, file) {
        // return file contents as string
        return file.contents.toString('utf8')
      }
    }))
    .pipe(gulp.dest('./test'));
});


gulp.task('svgs', () => {
  runSequence(
    'spriteSVG',
    'copySVG',
    'testSVG'
  );
});
