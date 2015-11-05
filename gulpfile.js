var gulp = require('gulp'),
	webpack = require('webpack-stream'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	webpackConfig = require('./webpack.config.js'),
	browserSync = require('browser-sync').create(),
	gulpUtil = require('gulp-util'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('webpack', function() {
	webpackConfig.refreshEntry();
	return gulp.src('./jsx/**/*.js')
		.pipe(webpack(webpackConfig))
		.pipe(gulp.dest('./build/js/app/'))
		.pipe(sourcemaps.init())
		.pipe(uglify()) //压缩
		.pipe(sourcemaps.write('./mpas/'))
		.pipe(rename(function(path) {
			if (path.extname == ".js") { //判断是否是js文件。添加min标记
				path.basename += ".min";
			}
		}))
		.pipe(gulp.dest('./build/js/app/')); //输出
});

gulp.task('browser-sync', ['webpack'], function() {
	browserSync.init({
		files: "**",
		proxy: "127.0.0.1:8888"
	});
	gulp.watch('./jsx/**/*.js', ['webpack']);
	gulp.watch('./dist/css/**/*.css', ['webpack']);
});
gulp.task('watch', function() {
	gulp.watch('./jsx/**/*.js', ['webpack']);
});

gulp.task('default', ['webpack']);

