var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean-css');

var sassFiles = 'sass/';
var paths = {
  sass: [sassFiles + '*.scss'],
  css: ['css/']
};

gulp.task('sass', () => {
  return gulp.src(paths.sass)
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
    .pipe(clean({compatibility: 'ie8'}))
    .pipe(gulp.dest(paths.css[0]));
});

gulp.task('watch', () => {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['watch']);
