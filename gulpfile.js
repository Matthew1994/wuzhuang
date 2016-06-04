var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var browserify = require("browserify");
var babel = require('gulp-babel');
var source = require('vinyl-source-stream'); 

gulp.task('jade', [], function() {
    gulp.src('./src/jade/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./build/template'));
    gulp.src('./src/page/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./build/page'));
});

gulp.task('less', [], function() {
    gulp.src('./src/less/*.less')
        .pipe(less({
            pretty: true
        }))
        .pipe(gulp.dest('./build/css'));
});

gulp.task('babel', [], function() {
    gulp.src('./src/js/*.js')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('browserify', function() {
    browserify({
            //先处理依赖，入口文件
            entries: ['./build/js/issueMessage.js'],
            //进行转化
            transform: []
        })
        .bundle() // 多个文件打包成一个文件
        .pipe(source('issueMessageFinal.js')) // browserify的输出不能直接用做gulp输入，所以需要source进行处理 
        .pipe(gulp.dest('./build/js'));
    browserify({
            //先处理依赖，入口文件
            entries: ['./build/js/sendMessage.js'],
            //进行转化
            transform: []
        })
        .bundle() // 多个文件打包成一个文件
        .pipe(source('sendMessageFinal.js')) // browserify的输出不能直接用做gulp输入，所以需要source进行处理 
        .pipe(gulp.dest('./build/js'));
})


gulp.task('watch', ['jade', 'less', 'babel'], function() {
    gulp.watch('./src/jade/*.jade', ['jade']);
    gulp.watch('./src/page/*.jade', ['jade']);
    gulp.watch('./src/less/*.less', ['less']);
    gulp.watch('./src/js/*.js', ['babel']);
    gulp.watch('./build/js/*.js', ['browserify']);
});

gulp.task('default', ['watch'], function() {});
