/**
 * 对工程进行gulp自动化操作。
 * @type {[type]}
 */
//获得gulp模块。
import gulp from 'gulp';
import less from 'gulp-less';
import notify from 'gulp-notify';
import cssmin from 'gulp-minify-css';
import plumber from 'gulp-plumber';
import babel from 'gulp-babel';
import es2015 from 'babel-preset-es2015';
import webpack from 'gulp-webpack';
gulp.task('less',() => {
  gulp.src('less/**/*.less')
      .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
      .pipe(less())
      .pipe(cssmin())
      .pipe(gulp.dest('public/stylesheets/'));
});
gulp.task('less:watch',() => {
    gulp.watch('less/**/*.less', ['less']); //当less中有文件发生改变时，调用less:watch
});
//编译es6
gulp.task('babel',() => {
gulp.src('./js/es6/*.js')
  .pipe(babel({presets:[es2015]}))
  .pipe(gulp.dest('./public/donejs'))
  .pipe(webpack({
    output:{
      filename:'all.js'
    },
    stats:{
      colors:true
    }
  }))
  .pipe(gulp.dest("./public/js"))
});