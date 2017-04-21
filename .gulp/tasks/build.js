'use strict';

/*
 * > Build
 */

import gulp from 'gulp';
import colors from 'colors';
import runSequence from 'run-sequence';
import paths from '../paths';


gulp.task('build', (cb) => {
  console.log('\n[build]'.bold.magenta + ' ⚙  Start bulding \n'.bold.blue);
  runSequence(
    'cleanDist',
    'cleanTest',
    'sass',
    'fonts',
    'svgs',
    'bower',
    'demo',
    (error) => {
      if (error) {
        console.log('\n[build]'.bold.magenta + ' There was an issue building ikonograph:\n'.bold.red + error.message + '\n');
      } else {
        console.log('\n[build]'.bold.magenta + ' ✔  Build finished successfully \n'.bold.green);
      }
      cb(error);
    }
  );
});
