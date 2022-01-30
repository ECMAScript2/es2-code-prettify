const gulp   = require('gulp'),
      gulpDPZ = require('gulp-diamond-princess-zoning'),
      globalVariables = 'document,parseFloat,Function,isFinite,setTimeout,clearTimeout',
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
                    env               : 'CUSTOM', // DEFINE_REGEXP_COMPAT__DEBUG=true の場合はコメントアウト, console を使うのでブラウザモードにする
                    formatting        : 'PRETTY_PRINT',
                    warning_level     : 'VERBOSE',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    output_wrapper    : '(function(){\n%output%\n})()',
                    js_output_file    : 'ReRE.es3.js'
                }
            )
        ).pipe( gulp.dest( 'tests' ) );
    }
) );

gulp.task( 'js', gulp.series(
    function(){
        return gulp.src(
            [
                // Snow daifuku
            //    '../web-doc-base/.submodules/what-browser-am-i/src/js/0_global/*.js',
            //    '../web-doc-base/src/js/**/*.js',
            //   '!../web-doc-base/src/js/3_EventModule/prefersColor.js',
            //   '!../web-doc-base/src/js/3_EventModule/print.js',
            //   '!../web-doc-base/src/js/6_CanUse/cssGeneratedContent.js',
            //   '!../web-doc-base/src/js/6_CanUse/dataUriTest.js',
            //   '!../web-doc-base/src/js/6_CanUse/webfontTest.js',
            //   '!../web-doc-base/src/js/7_Library/**/*.js',
            //   '!../web-doc-base/src/js/7_Patch/**/*.js',
            //   '!../web-doc-base/src/js/graph/**/*.js',
                // ReRe.js
                '.submodules/rerejs/src.js/**/*.js',
                // Google Code Prettify
                './src.js/js/**/*.js',
               '!./src.js/js/5_run/*.js',
               '!./src.js/js/node_prettify.js'
            ]
        ).pipe(
            gulpDPZ(
                {
                    packageGlobalArgs : [ 'ua,window,emptyFunction,' + globalVariables + ',undefined', '{},this,function(){},' + globalVariables + ',void 0' ],
                    basePath          : [ '../web-doc-base/src/js/', '../web-doc-base/.submodules/what-browser-am-i/src/js/', './src.js/', '.submodules/rerejs/' ]
                }
            )
        ).pipe(
            closureCompiler(
                {
                    externs           : [
                        // Snow daifuku
                        '../web-doc-base/.submodules/what-browser-am-i/src/js-externs/externs.js',
                        '../web-doc-base/.submodules/regexp-free-js-base64/src/js-externs/externs.js',
                        '../web-doc-base/node_modules/google-closure-compiler/contrib/externs/svg.js',
                        '../web-doc-base/src/js-externs/externs.js',
                        // ReRe.js
                        '.submodules/rerejs/src.externs/externs.generated.js'
                    ],
                    define            : [
                        // Snow daifuku
                        'DEFINE_WHAT_BROWSER_AM_I__MINIFY=true',
                        // ReRe.js
                        'DEFINE_REGEXP_COMPAT__DEBUG=false',
                        'DEFINE_REGEXP_COMPAT__MINIFY=true',
                        'DEFINE_REGEXP_COMPAT__NODEJS=false',
                        'DEFINE_REGEXP_COMPAT__ES2018=false'
                    ],
                    compilation_level : 'ADVANCED',
                    // compilation_level : 'WHITESPACE_ONLY',
                    // formatting        : 'PRETTY_PRINT',
                    warning_level     : 'VERBOSE',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    js_output_file    : 'prettify.es2.js'
                }
            )
        ).pipe( gulp.dest( 'tests' ) );
    }
) );