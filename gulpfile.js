
var gulp = require ('gulp');
var imageMin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
// top level functions
// gulp.task - define tasks
// gulp.src - point to files to user
// gulp.dest - point to folder to output
// gulp.watch - watch files and folders for
// In order to run gulp, type 'npm run gulp + taskname' 
// Type 'npm run gulp' will run minify and lint tasks and create public directory


// logs message
gulp.task('message', function(){
  return console.log ('gulp is running');
});

// copy all html files
gulp.task('copyHtml', function(){
  gulp.src('app/src/*html')
    .pipe(gulp.dest('public'));
});

//optimise images
gulp.task('imageMin', () =>
    gulp.src('src/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('public/images'))
);

// minify js
gulp.task('minifyModels', function() {
  gulp.src('app/models/*.js')
    .pipe(uglify())
      .pipe(gulp.dest('app/public/models'));
  });
gulp.task('minifyRoutes', function () {
  gulp.src('app/routes/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('app/public/routes'));
});

// compile sass
gulp.task('sass', function(){
  gulp.src('src/sass/*scss')
    .pipe(sass().on ('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

// Lint Task
gulp.task('lintModels', function () {
  return gulp.src('app/models/*js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
gulp.task('lintRoutes', function () {
  return gulp.src('app/routes/*js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


//scripts
gulp.task('script', function(){
  gulp.src('src/js/*.js')
  .pipe(concat('main.js'))
  // .pipe(uglify())
  .pipe(gulp.dest('public/js'))
});
gulp.task('default', ['lintModels', 'lintRoutes','minifyModels', 'minifyRoutes']);

gulp.task('watch', function(){
  gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/js/*.js', ['imageMin']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/*.html', ['copyHtml']);
});
