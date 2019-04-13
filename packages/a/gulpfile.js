var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require('gulp-concat');
var browserify = require('browserify')
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
// gulp.task("default", function () {
//   return gulp.src("src/index.js")
//     .pipe(browserify)
//     .pipe(concat('bundle.js'))

// });

gulp.task('default', () => {
  return browserify({
    entries: 'src/index.js',
  })
    .transform(babelify, {
      global: true,
      ignore: [/node_modules\/(?!jm)/],
      "presets": ["@babel/preset-env"],
      "plugins": ["@babel/plugin-external-helpers"],
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest("dist"));
    // .pipe(fs.createWriteStream('./dist/bundle.js'));
});