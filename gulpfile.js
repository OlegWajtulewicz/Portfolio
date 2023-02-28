const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const gcmq = require('gulp-group-css-media-queries');

const htmlmin = require('gulp-htmlmin');

gulp.task('server', function () {

    browserSync.init({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/scss/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function () {
    return gulp.src("src/sass/scss/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("src/css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/js/**/*.js").on('change', gulp.parallel('scripts'));
    gulp.watch("src/fonts/**/*").on('all', gulp.parallel('fonts'));
    gulp.watch("src/icons/**/*").on('all', gulp.parallel('icons'));
    gulp.watch("src/img/**/*").on('all', gulp.parallel('images'));
});

gulp.task('html', function () {
    return gulp.src("src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("dist/"));
});

gulp.task('scripts', function () {
    return gulp.src("src/js/**/*.js")
        .pipe(gulp.dest("dist/js"))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"))
        .pipe(browserSync.stream());
});

gulp.task('icons', function () {
    return gulp.src("src/icons/**/*")
        .pipe(gulp.dest("dist/icons"))
        .pipe(browserSync.stream());
});

gulp.task('mailer', function () {
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest("dist/mailer"))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'mailer', 'images', 'html'));


//'_media-mixin.scss'

gulp.task('css:build', function () {
	return gulp.src(['!src/_*.scss','src/*.scss']) // Взяли файлы с расширением .scss, исключили из выборки файлы, которые начинаются с символа _
		.pipe(sass()) // компилируем scss в css
		.pipe(gcmq()) // в полученном css группируем множество медиа-выражений в общие.
		.pipe(gulp.dest('src/')) // кладем наш css файл в ту же папку
});