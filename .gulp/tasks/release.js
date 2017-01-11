'use strict';

/*
 * > Release
 */

import gulp from 'gulp';
import colors from 'colors';
import runSequence from 'run-sequence';


gulp.task('release', (cb) => {
  console.log('\n[build]'.bold.magenta + ' ⚙  Start bulding \n'.bold.blue);
  runSequence(
    'bump',
    'changelog',
    (error) => {
      if (error) {
        console.log('\n[build]'.bold.magenta + ' There was an issue building Material Theme:\n'.bold.red + error.message + '\n');
      } else {
        console.log('\n[build]'.bold.magenta + ' ✔  Build finished successfully \n'.bold.green);
      }
      cb(error);
    }
  );
});
