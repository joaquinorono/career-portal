'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./build').filter(function (file) {
    return (/\.(js)$/i).test(file);
}).map(function (file) {
    require('./build/' + file);
});

/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('build-test', ['test'], function () {
    gulp.start('build');
});

gulp.task('jenkins-build', ['clean'], function () {
    gulp.start('build-test');
});
