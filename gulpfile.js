/**
 * 对工程进行gulp自动化操作。
 * @type {[type]}
 */
//获得gulp模块。
var gulp = require('gulp');
var less = require('gulp-less');
var cssmin = require('gulp-minify-css');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
gulp.task('less',function(){
  gulp.src('less/**/*.less')
      .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
      .pipe(less())
      .pipe(cssmin())
      .pipe(gulp.dest('public/stylesheets/'));
});
gulp.task('less:watch', function () {
    gulp.watch('less/**/*.less', ['less']); //当less中有文件发生改变时，调用less:watch
});