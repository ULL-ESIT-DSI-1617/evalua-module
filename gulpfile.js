var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task("default", ["test"]);

gulp.task('debug', shell.task('node --inspect --debug-brk shapesarea.js'));

gulp.task('run', shell.task('node shapesarea.js'));

gulp.task("test", shell.task("./node_modules/mocha/bin/mocha --require should"));
