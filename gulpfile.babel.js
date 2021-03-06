import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import pug from 'gulp-pug';
import babel from 'gulp-babel';
import imagemin from 'gulp-imagemin';
import browserSync from 'browser-sync';


let server = browserSync.create();


gulp.task('default',['serve','watch','image'])

gulp.task('serve', () => {

    server.init({
      server:{
        baseDir:"./"
      }
    })
})

gulp.task('watch',() => {

  gulp.watch('./dev/scss/style.scss',['sass'])
  gulp.watch('./dev/js/main.js',['babel'])
  gulp.watch('./dev/index.pug',['pug'])

})


gulp.task('image',() => {
  gulp.src('./dev/img/*')
    .pipe(imagemin([
        imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest('./public/img/'))
})




gulp.task('sass', () => {
  gulp.src('./dev/scss/style.scss')
  .pipe(sass())
  .pipe(autoprefixer({
    browsers:['last 2 versions']
  }))
  .pipe(gulp.dest('./public/css/'))
  .pipe(server.stream())
})

gulp.task('pug', () => {
  gulp.src('./dev/index.pug')
    .pipe(pug({
      pretty:true
    }))
    .pipe(gulp.dest('./'))
    .pipe(server.stream())
})

gulp.task('babel',() => {
  gulp.src('./dev/js/main.js')
    .pipe(babel())
    .pipe(gulp.dest('./public/js/'))
    .pipe(server.stream())
})