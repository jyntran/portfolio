// include gulp
var gulp = require('gulp'); 

// include plug-ins
var changed = require('gulp-changed');
var minifyHTML = require('gulp-minify-html');
var sass = require('gulp-sass');

// minify new or changed HTML pages
gulp.task('minify-html', function() {
 var opts = {empty:true, quotes:true};
 var htmlPath = {htmlSrc:'./app/views/*.html', htmlDest:'./appbuild/views'};

  return gulp.src(htmlPath.htmlSrc)
    .pipe(changed(htmlPath.htmlDest))
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(htmlPath.htmlDest));
});

// compile sass
gulp.task('sass', function () {
  gulp.src('./app/style/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./app/style/**/*.scss', ['sass']);
});