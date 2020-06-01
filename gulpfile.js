const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

// Static server
function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
    watch("src/*.html").on('change', browserSync.reload);
    watch("src/sass/**/*.sass", serveSass);
    watch("src/sass/**/*.scss", serveSass);
    watch("src/js/*.js").on('change', browserSync.reload);
};

function serveSass() {
    return src("src/sass/**/*.sass", "src/sass/**/*.scss")
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 16 versions'],
            cascade: false
        }))
        .pipe(dest("src/css"))
        .pipe(browserSync.stream());
};

function buildCSS(done) {
    src(["src/css/**/**.css", "!src/css/**/**.min.css"])
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest("dist/css/"));
    src("src/css/**/**.min.css").pipe(dest("dist/css/"));
    done();
};

function buildJS(done) {
    src(["src/js/**.js", "!src/js/**/**.min.js"])
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true,
        }))
        .pipe(dest("dist/js/"));
    src("src/js/**.min.js").pipe(dest("dist/js/"));
    done();
};

function buildHTML(done) {
    src("src/**.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest("dist/"));
    done();
};

function php(done) {
    src("src/**.php")
        .pipe(dest("dist/"));
    src("src/phpmailer/**.**")
        .pipe(dest("dist/phpmailer/"));
    done();
};

function fonts(done) {
    src("src/fonts/**/**.**")
        .pipe(dest("dist/fonts/"));
    done();
};

function imagemin(done) {
    src(["src/img/**/*.png", "src/img/**/*.jpg"])
        .pipe(tinypng({key: 'QgTGKsjhgRj5GWmGmSg5rr88WmV5HRdC'}))
        .pipe(dest("dist/img/"));
    src("src/img/**/*.svg")
        .pipe(dest("dist/img/"));
    done();
}

exports.serv = bs;
exports.build = series(buildCSS, buildJS, buildHTML, php, fonts, imagemin);
