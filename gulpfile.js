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
                  externs           : [ '.submodules/rerejs/src.externs/externs.generated.js' ],
                  define            : [
                      'DEFINE_REGEXP_COMPAT__DEBUG=false',
                      'DEFINE_REGEXP_COMPAT__MINIFY=true',
                      'DEFINE_REGEXP_COMPAT__NODEJS=false',
                      'DEFINE_REGEXP_COMPAT__ES2018=false'
                  ],
                  compilation_level : 'ADVANCED',
                  // compilation_level : 'WHITESPACE_ONLY',
                  env               : 'CUSTOM',
                  // formatting        : 'PRETTY_PRINT',
                  warning_level     : 'VERBOSE',
                  language_in       : 'ECMASCRIPT3',
                  language_out      : 'ECMASCRIPT3',
                  output_wrapper    : '(function(){\n%output%\n})()',
                  js_output_file    : 'ReRE.es5.js'
              }
          )
      ).pipe( gulp.dest( 'tests' ) );
  }
) );