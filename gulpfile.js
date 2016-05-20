// grab our gulp packages
var gulp    = require('gulp');
var gutil   = require('gulp-util');
var sass    = require('gulp-sass');
var cssmin  = require('gulp-cssmin');
var rename  = require('gulp-rename');
var plumber = require('gulp-plumber');
var webpack = require('webpack-stream');

var paths = {
  sass: 'sass/**/*.scss',
  webpack: 'app/**/*.js',
  css: 'public/css/app.css'
}

gulp.task('sass', function () {
  return gulp.src(paths.sass)
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
});

gulp.task('webpack', function () {
  return gulp.src(paths.webpack)
    .pipe(plumber())
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('public/scripts'));
});

gulp.task('mincss', function () {
  return gulp.src(paths.css)
    .pipe(plumber())
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', ['sass', 'mincss', 'webpack'], function() {
  return gutil.log('gulped')
});

gulp.task('watch', ['default'],function () {
  gulp.watch(paths.webpack, ['webpack']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.css, ['mincss'])
});
