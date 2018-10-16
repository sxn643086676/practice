// var gulp = require('gulp');
// var server = require('gulp-webserver');
// var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer');
// var url = require('url');
// var path = require('path');
// var listjson = require('./mock/list.json');
// console.log(listjson);
// var fs = require('fs');
// gulp.task('server', function() {
//     return gulp.src('src')
//         .pipe(server({
//             port: 9090,
//             middleware: function(req, res, next) {
//                 var pathname = url.parse(req.url).pathname;
//                 if (pathname === '/favicon.ico') {
//                     res.end('');
//                     return false;
//                 }
//                 if (pathname === '/api/list') {
//                     res.end(JSON.stringify({ code: 1, data: listjson }));
//                 } else if (pathname === '/api/add') {

//                 } else {
//                     pathname = pathname === '/' ? 'index.html' : pathname;
//                     res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
//                 }
//             }
//         }))
// })

// gulp.task('devCss', function() {
//     return gulp.src('src/sass/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('./src/css'));

// })

// gulp.task('watch', function() {
//     return gulp.watch('src/sass/*.scss', gulp.series('devCss'))
// })

// gulp.task('dev', gulp.series('devCss', 'server', 'watch'))


var gulp = require('gulp');
var server = require('gulp-webserver');
var sass = require('gulp-sass');
var fs = require('fs');
var url = require('url');
var listjson = require('./mock/list.json');
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 9090,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    res.end('');
                    return false;
                }
                if (pathname === '/api/list') {
                    res.end(JSON.stringify({ code: 1, data: listjson }))
                } else if (pathname === '/api/add') {

                } else {
                    pathname = pathname === '/' ? '/index.html' : pathname;
                }
            }
        }))
})