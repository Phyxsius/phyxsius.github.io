var gulp           = require('gulp');
var sass           = require('gulp-sass'),
	sourcemaps     = require('gulp-sourcemaps'),
	concat         = require('gulp-concat-css'),
    minifyCSS      = require('gulp-minify-css'),
	autoprefixer   = require('gulp-autoprefixer');
var imagemin       = require('gulp-imagemin');
//var pngquant       = require('imagemin-pngquant');
var htmlmin        = require('gulp-htmlmin');

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
        .pipe(minifyCSS())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css'));
});


// Optimize tasks
gulp.task('optimize:images', function() {
	gulp.src('images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('images'));
});

gulp.task('optimize:html', function() {
	return gulp.src('./_site/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            conservativeCollapse: true,
            collapseBooleanAttributes: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true,
            removeEmptyElements: true,
            lint: false,
            minifyJS: true,
            minifyCSS: true,
        }))
        .pipe(gulp.dest('./_site/'));
});

// Watch task
gulp.task('default', function() {
	gulp.watch('sass/**/*.scss', ['styles']);
});
