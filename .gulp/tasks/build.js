'use strict';

/*
 * > Build
 */

import gulp from 'gulp';
import colors from 'colors';
import runSequence from 'run-sequence';


gulp.task('build', (cb) => {
  console.log('\n[build]'.bold.magenta + ' ⚙  Start bulding \n'.bold.blue);
  runSequence(
    'clean',
    'sass',
    'minify',
    'header',
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
