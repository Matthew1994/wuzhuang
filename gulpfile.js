var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var babel = require('gulp-babel');

gulp.task('jade',[], function() {
    gulp.src('./src/jade/*.jade')
      .pipe(jade({
        pretty:true
      }))
      .pipe(gulp.dest('./build/template'));
});

gulp.task('less',[], function() {
    gulp.src('./src/less/*.less')
      .pipe(less({
        pretty:true
      }))
      .pipe(gulp.dest('./build/css'));
});

gulp.task('babel',[], function() {
    gulp.src('./src/js/*.js')
      .pipe(babel())
      .pipe(gulp.dest('./build/js'));
});

gulp.task('watch',['jade', 'less', 'babel'], function() {
    gulp.watch('./src/jade/*.jade', ['jade']);
    gulp.watch('./src/less/*.less', ['less']);
    gulp.watch('./src/js/*.js', ['babel']);
});

gulp.task('default',['watch'], function() {
});