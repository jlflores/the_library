var gulp        = require('gulp');
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

// Sass Compile
gulp.task('sass', function () {
  return gulp.src('./src/scss/main.scss')
      .pipe(autoprefixer())
      .pipe(sass())
      .pipe(gulp.dest('./src/css'))
      .pipe(browserSync.stream());
});

// Server
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });

  gulp.watch("./src/scss/*.scss", ['sass']);
  gulp.watch("./src/js/**/*.js").on('change', browserSync.reload);
  gulp.watch("./src/index.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
