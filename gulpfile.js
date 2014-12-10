var gulp = require('gulp'),jshint = require('gulp-jshint'),watch = require('gulp-watch');

gulp.task('jshint', function() {
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function () { 
  gulp.watch(['src/*.js'], ['jshint']);
});

gulp.task('default', ['jshint','watch']);

