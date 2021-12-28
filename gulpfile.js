const gulp   = require('gulp'),
      closureCompiler = require('google-closure-compiler').gulp();

gulp.task( 'rerejs', gulp.series(
  function(){
      return gulp.src(
          [
                '.submodules/rerejs/src.js/**/*.js'
          ]
      ).pipe(
          closureCompiler(
              {
                  // externs           : externs,
                  // define            : [],
                  // compilation_level : 'ADVANCED',
                  // compilation_level : 'WHITESPACE_ONLY',
                  // env               : 'CUSTOM',
                  formatting        : 'PRETTY_PRINT',
                  warning_level     : 'VERBOSE',
                  language_in       : 'ECMASCRIPT_2020',
                  language_out      : 'ECMASCRIPT5',
                  output_wrapper    : '(function(){\n%output%\n})()',
                  js_output_file    : 'ReRE.es5.js'
              }
          )
      ).pipe( gulp.dest( 'tests' ) );
  }
) );