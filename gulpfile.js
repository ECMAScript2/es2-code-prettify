const gulp   = require('gulp'),
      gulpDPZ = require('gulp-diamond-princess-zoning'),
      globalVariables = 'document,parseFloat,Function,isFinite,setTimeout,clearTimeout',
      closureCompiler = require('google-closure-compiler').gulp(),
      tempDir   = require('os').tmpdir() + '/google-code-prettify';

gulp.task( 'rerejs', gulp.series(
    function(){
        return gulp.src(
            [
                '.submodules/rerejs/src.js/**/*.js',
               '!.submodules/rerejs/src.js/0_global/2_polyfill.js',
               '!.submodules/rerejs/src.js/1_packageGlobal/1_variable.js',
               //'!.submodules/rerejs/src.js/7_ponyfill/return.js'
            ]
        ).pipe(
            gulpDPZ(
                {
                    labelPackageGlobal : '*',
                    packageGlobalArgs : [ 'Math,Infinity,undefined', 'Math,1/0,void 0' ],
                    basePath          : '.submodules/rerejs/src.js'
                }
            )
        ).pipe(
            closureCompiler(
                {
                    externs           : [
                        '.submodules/rerejs/src.externs/externs.generated.js',
                        './src.js/externs/externs_rere.js'
                    ],
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
                    output_wrapper    : 'if( DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT ){var RegExpCompat = %output%;};',
                    js_output_file    : 'rerejs.es2.generated.js'
                }
            )
        ).pipe( gulp.dest( 'src.js/js/2_packageGlobal' ) );
    }
) );

gulp.task( 'js', gulp.series(
    function(){
        return gulp.src(
            [
            // ReRe.js
                '.submodules/rerejs/src.js/0_global/2_polyfill.js',
            // Google Code Prettify
                './src.js/js/**/*.js',
               '!./src.js/js/**/*.snowDaifuku.js',
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
                        // ReRe.js
                        '.submodules/rerejs/src.externs/externs.generated.js',
                        './src.js/externs/externs_rere.js'
                    ],
                    define            : [
                    ],
                    // compilation_level : 'ADVANCED',
                    compilation_level : 'WHITESPACE_ONLY',
                    formatting        : 'PRETTY_PRINT',
                    warning_level     : 'VERBOSE',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    js_output_file    : 'prettify.es2.js'
                }
            )
        ).pipe( gulp.dest( 'tests' ) );
    }
) );

gulp.task( 'snow', gulp.series(
    function(){
        return gulp.src(
                [
                    '../web-doc-base/.submodules/what-browser-am-i/src/js/**/*.js',
                    '!../web-doc-base/.submodules/what-browser-am-i/src/js/4_brand.js'
                ]
            ).pipe(
                gulpDPZ(
                    {
                        labelPackageGlobal : '*',
                        packageGlobalArgs  : [ 'ua,window,document,navigator,screen,parseFloat,Number,undefined', 'ua,window,document,navigator,screen,parseFloat,Number,void 0' ],
                        basePath           : '../web-doc-base/.submodules/what-browser-am-i/src/js',
                        fileName           : 'ua.js'
                    }
                )
            ).pipe(
                closureCompiler(
                    {
                        externs           : [
                            '../web-doc-base/.submodules/what-browser-am-i/src/js-externs/externs.js'
                        ],
                        define            : [
                            'DEFINE_WHAT_BROWSER_AM_I__MINIFY=true',
                            'DEFINE_WHAT_BROWSER_AM_I__BRAND_ENABLED=false',
                            'DEFINE_WHAT_BROWSER_AM_I__PCSITE_REQUESTED_ENABLED=false',
                            'DEFINE_WHAT_BROWSER_AM_I__IOS_DEVICE_ENABLED=false',
                            'DEFINE_WHAT_BROWSER_AM_I__DEVICE_TYPE_ENABLED=false'
                        ],
                        compilation_level : 'ADVANCED',
                        //compilation_level : 'WHITESPACE_ONLY',
                        //formatting        : 'PRETTY_PRINT',
                        warning_level     : 'VERBOSE',
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        output_wrapper    : 'ua=[];%output%',
                        js_output_file    : 'global.js'
                    }
                )
            ).pipe(gulp.dest( tempDir ));
    },
    function(){
        return gulp.src(
            [
            // what-browser-am-i
                tempDir + '/global.js',
            // Snow daifuku
                '../web-doc-base/.submodules/what-browser-am-i/src/js/0_global/*.js',
                '../web-doc-base/src/js/**/*.js',
               '!../web-doc-base/src/js/3_EventModule/imageReady.js',
               '!../web-doc-base/src/js/3_EventModule/prefersColor.js',
               '!../web-doc-base/src/js/3_EventModule/print.js',
               '!../web-doc-base/src/js/3_EventModule/resize.js',
               // '!../web-doc-base/src/js/4_DOM/nodeCleaner.js',
               '!../web-doc-base/src/js/5_CSSOM/**/*.js',
               '!../web-doc-base/src/js/6_CanUse/cssGeneratedContent.js',
               '!../web-doc-base/src/js/6_CanUse/dataUriTest.js',
               '!../web-doc-base/src/js/6_CanUse/webfontTest.js',
               '!../web-doc-base/src/js/7_Library/**/*.js',
               '!../web-doc-base/src/js/7_Patch/**/*.js',
               '!../web-doc-base/src/js/graph/**/*.js',
            // ReRe.js
                '.submodules/rerejs/src.js/0_global/2_polyfill.js',
            // Google Code Prettify
                './src.js/js/**/*.js',
               '!./src.js/js/**/*.vanilla.js',
               '!./src.js/js/3_prettify/D_PR.js',
               '!./src.js/js/5_run/*.js',
               '!./src.js/js/node_prettify.js'
            ]
        ).pipe(
            gulpDPZ(
                {
                    labelPackageGlobal : '*', // for Gecko 0.7- ! https://twitter.com/itozyun/status/1488924003070742535
                    packageGlobalArgs : [ 'ua,window,emptyFunction,' + globalVariables + ',undefined', 'ua,this,function(){},' + globalVariables + ',void 0' ],
                    basePath          : [
                        tempDir + '/', '../web-doc-base/.submodules/what-browser-am-i/src/js/',
                        '../web-doc-base/src/js/',
                        '.submodules/rerejs/src.js/',
                        './src.js/'
                    ]
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
                        '.submodules/rerejs/src.externs/externs.generated.js',
                        './src.js/externs/externs_rere.js'
                    ],
                    define            : [
                        // Snow daifuku
                        'DEFINE_WHAT_BROWSER_AM_I__MINIFY=true',
                    ],
                    compilation_level : 'ADVANCED',
                    // compilation_level : 'WHITESPACE_ONLY',
                    // formatting        : 'PRETTY_PRINT',
                    warning_level     : 'VERBOSE',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    js_output_file    : 'prettify.snow.js'
                }
            )
        ).pipe( gulp.dest( 'tests' ) );
    }
) );