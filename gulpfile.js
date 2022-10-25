// list dependences 
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const { pipeline } = require('stream');

// create functions


// scss
function compilecss(){
    return src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(minify())
    .pipe(dest('main.css'))
}


// create watchask
function watchTask(){
    watch('./scss/**/*.scss', compilecss)
}


// default gulp
exports.default = series(
    compilecss,
    watchTask
);