// include gulp
var gulp = require('gulp'); 

// include plug-ins
var browserSync = require('browser-sync').create();
var changed = require('gulp-changed');
var minifyHTML = require('gulp-minify-html');
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("./app/style/**/*.scss", ['sass']);
    gulp.watch("./app/**/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./app/style/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);

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
// gulp.task('sass', function () {
//   gulp.src('./app/style/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./app/css'))
// });
