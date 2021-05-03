var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
let rimraf = require("rimraf");
let nodemon = require("gulp-nodemon");

gulp.task("clean_build", function (callback) {
  rimraf("./build", callback);
});

gulp.task("copy_static", function () {
  return gulp
    .src(["./src/**/*.json", "./src/**/*.js"])
    .pipe(gulp.dest("build"));
});

gulp.task("compile_proj", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("build"));
});

gulp.task(
  "build_proj",
  gulp.series("clean_build", "compile_proj", "copy_static"),
);

gulp.task(
  "watch",
  gulp.series("build_proj", function () {
    return nodemon({
      ext: "ts json",
      script: "build/server.js",
      watch: ["src/**/*.ts"],
      legacyWatch: true,
      tasks: ["build_proj"],
    });
  }),
);
