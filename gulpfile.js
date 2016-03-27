var gulp = require("gulp");
var stylus = require("gulp-stylus");

gulp.task("compileStylus", function() {
    return gulp.src("./assets/themes/the-program/css/material.styl").pipe(stylus()).pipe(gulp.dest("./assets/themes/the-program/css/"));
});