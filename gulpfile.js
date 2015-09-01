var gulp           = require('gulp');
var sass           = require('gulp-ruby-sass'),
	sourcemaps     = require('gulp-sourcemaps'),
	nodeSASS       = require('node-sass'),
	autoprefixer   = require('gulp-autoprefixer');

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
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css'));
});

// Watch task
gulp.task('default', function() {
	gulp.watch('sass/**/*.scss', ['styles']);
});
