const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const minifyCSS = require("gulp-csso");
const minifyImg = require("gulp-imagemin");
const minifyJS = require("gulp-uglify");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const fileinclude = require("gulp-file-include");

gulp.task("css", () => {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(autoprefixer())
    .pipe(concat("app.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(browserSync.stream());
});

gulp.task("js", () => {
  return gulp
    .src("src/js/**/*.js")
    .pipe(concat("app.min.js"))
    .pipe(minifyJS())
    .pipe(gulp.dest("build/js"))
    .pipe(browserSync.stream());
});

gulp.task("html", () => {
  return gulp
    .src("src/**/*.html")
    .pipe(
      fileinclude({
        prefix: "@",
        basepath: "@file"
      })
    )
    .pipe(gulp.dest("build"))
    .pipe(browserSync.stream());
});


gulp.task("img", () => {
  return gulp
    .src("src/img/**/*")
    .pipe(minifyImg())
    .pipe(gulp.dest("build/img"));
});

gulp.task("watch", () => {
  browserSync.init({
    server: {
      baseDir: "build"
    }
  });

  gulp.watch("src/sass/**/*.scss", gulp.series("css"));
  gulp.watch("src/js/**/*.js", gulp.series("js"));
  gulp.watch("src/img/**/*", gulp.series("img"));
  gulp.watch("src/**/*.html", gulp.series("html"));
});
