var gulp     = require('gulp');
var sass     = require('gulp-sass');
var htmlmin  = require('gulp-htmlmin');
var notify   = require('gulp-notify');

var srcDirectoryScss = './src/scss/style.scss';
var distDirectoryCss = './dist/css';

var srcDirectoryHtml = './src/*.html';
var distDirectoryHtml = './dist';

var watchDirectoryScss = './src/scss/**/*.scss';
var watchDirectoryHtml = srcDirectoryHtml;

gulp.task('scss', function () {
  return gulp.src(srcDirectoryScss)
    .pipe(sass({outputStyle:'compressed'}))
    //.pipe(sass())
    .on('error', notify.onError({title: "Compilação e compressão do SCSS", 
                                 message:" <%= error.message%>"}))
    .pipe(gulp.dest(distDirectoryCss));
});

gulp.task('html',function(){
    return gulp.src(srcDirectoryHtml)
    .pipe(htmlmin({collapseWhitespace: true}))
    .on('error', notify.onError({title: "Compilação e compressão do html", 
                                 message:" <%= error.message%>"}))
    .pipe(gulp.dest(distDirectoryHtml));
});

gulp.task('project',function(){
    gulp.watch(watchDirectoryScss,['scss']);
    gulp.watch(watchDirectoryHtml,['html']);
});


gulp.task('default',['scss','html']);
