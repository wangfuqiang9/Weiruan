
const gulp = require("gulp");

gulp.task("copy-html",function(){
    return gulp
    .src("*.html")
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
});

//拷贝图片
gulp.task("images",function(){
    return gulp
    .src("images/**/*")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
});


//引入scss
const sass = require("gulp-sass");
sass.commpiler = require("node-sass");
const rename = require("gulp-rename");
const minifyCSS = require("gulp-minify-css");
const { dest, src } = require("gulp");

gulp.task("data",function(){
    return gulp
    .src(["*.json", "!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload())
})

gulp.task("sass",function(){
    return gulp
    .src("./scss/*.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
});



const uglify = require("gulp-uglify")
gulp.task("scripts", function(){
    return gulp
    .src(["*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})




//监听，只要数据福安生变化，自动去执行对应的任务，完成更新
gulp.task("watch", function () {
    gulp.watch("*.html", ["copy-html"]);
    gulp.watch("images/**/*", ["images"]);
    gulp.watch("./scss/*.scss", ["sass"]);
    gulp.watch(["*.js","!gulpfile.js"], ["scripts"]);
    gulp.watch(["*.json", "!package.json"], ['data']);
  });


//启动一个服务器
const connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:9999,
        livereload:true,
    });
});

gulp.task("default",["watch","server"]);