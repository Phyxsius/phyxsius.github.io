var gulp           = require('gulp');
var sass           = require('gulp-sass'),
	sourcemaps     = require('gulp-sourcemaps'),
	concat         = require('gulp-concat-css'),
	autoprefixer   = require('gulp-autoprefixer');
var imagemin       = require('gulp-imagemin');
var pngquant       = require('imagemin-pngquant');

gulp.task('styles', function() {
	gulp.src('sass/**/*.scss')
		.pipe(sourcemaps.init())
			.pipe(sass({outputStyle: 'nested'})
			      	  .on('error', sass.logError)
			      )
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('main.css'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css'));
});

gulp.task('optimize:images', function() {
	gulp.src('images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('images'));
});

// Watch task
gulp.task('default', function() {
	gulp.watch('sass/**/*.scss', ['styles']);
});
