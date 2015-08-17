var gulp        = require('gulp'),
    watch       = require('gulp-watch'),
    plumber     = require('gulp-plumber'),
    inject      = require('gulp-inject'),
    webserver   = require('gulp-webserver'),
    opn         = require('opn'),
    angularFilesort = require('gulp-angular-filesort'),
    bowerFiles  = require('main-bower-files'),
    uglify      = require('gulp-uglify'),
    sass        = require('gulp-sass'),
    debug       = require('gulp-debug'),
    nodemon     = require('gulp-nodemon');

/////

var client = './src/client/'
var server = './src/server/'

var app = client + 'app/';
var dist = './build/';
var test = client + 'test/';

var index = client + 'index.html';
var spec = client + 'specs.html';

var sourcePaths = {
  bower: bowerFiles({debugging:true}),
  views: [
    app + '**/*.html'
  ],
  angular: [
    app + '**/*.module.js', 
    app + '**/*.controller.js',
    app + '**/*.service.js',
    app + '**/*.factory.js',
    app + '**/*.directive.js'
  ],
  scripts: [app + 'scripts/**/*.js'],
  styles: app + 'style/**/*.scss',
  specs: [test + '**/*.spec.js']
};

var destPaths = {
  bower: dist + 'bower/',
  views: dist + 'views/',
  angular: dist + 'ng/',
  scripts: dist + 'js/',
  styles: app + 'css/',
  specs: test
};

var destFiles = {
  bower: [destPaths.bower + 'angular.js', destPaths.bower + '**/*.js', destPaths.bower + '**/*.css'],
  views: destPaths.views + '**/*.html',
  angular: destPaths.angular + '**/*.js',
  scripts: destPaths.scripts + '**/*.js',
  styles: destPaths.styles + '**/*.css',
  specs: destPaths + '**/*.js'
};

/////

gulp.task('watch-views', function(){
  return gulp.src(sourcePaths.views)
      .pipe(watch(sourcePaths.views))
      .pipe(plumber())
      .pipe(gulp.dest(destPaths.views));
});

gulp.task('angular', function(){
  return gulp.src(sourcePaths.angular)
    .pipe(plumber())
    .pipe(gulp.dest(destPaths.angular));
})
gulp.task('watch-angular', function(){
  return gulp.src(sourcePaths.angular)
    .pipe(angularFilesort())
    .pipe(watch(sourcePaths.angular))
    .pipe(plumber())
    .pipe(gulp.dest(destPaths.angular));
});

gulp.task('styles', function () {
  return gulp.src(sourcePaths.styles)
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(destPaths.styles));
});
gulp.task('watch-styles', function(){
  return gulp.src(sourcePaths.styles)
      .pipe(watch(sourcePaths.styles))
      .pipe(plumber())
      .pipe(sass())
      .pipe(gulp.dest(destPaths.styles));
});

gulp.task('watch-specs', function(){
  return gulp.src(sourcePaths.specs)
    .pipe(watch(sourcePaths.specs))
});

gulp.task('specs', function(){
  return gulp.src(spec)
      .pipe(inject(
        gulp.src(sourcePaths.bower,
          {read: false}),
          {name: 'bower'}))
      .pipe(inject(
        gulp.src(sourcePaths.angular,
          {read: false}),
          {name: 'angular'}))
      .pipe(inject(
        gulp.src(sourcePaths.specs,
          {read: false}),
          {name: 'specs'}))
      .pipe(gulp.dest(dist));
});

gulp.task('index', function(){
  return gulp.src(index)
      .pipe(inject(
        gulp.src(sourcePaths.bower,
          {read: false}),
          {name: 'bower'}))
      .pipe(inject(
        gulp.src(sourcePaths.angular,
          {read: false}),
          {name: 'angular'}))
      .pipe(inject(
        gulp.src(destFiles.styles),
          {addRootSlash: false}))
      .pipe(gulp.dest(dist));
});

gulp.task('start', ['build', 'test'], function () {
  return nodemon({
    script: server + 'app.js',
    ext: 'js html scss css',
    env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('test', ['specs']);

gulp.task('build', ['styles', 'index']);
gulp.task('watch', ['watch-angular', 'watch-views', 'watch-styles', 'watch-specs']);
gulp.task('default', ['start']);