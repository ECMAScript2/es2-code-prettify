const gulp            = require('gulp'),
      gulpDPZ         = require('gulp-diamond-princess-zoning'),
      ClosureCompiler = require('google-closure-compiler').gulp(),
      fs              = require('fs'),
      tempDir         = require('os').tmpdir() + '/google-code-prettify',
      globalVariables = 'document,parseFloat,Function,isFinite,setTimeout,clearTimeout',
      gulpCreateSimpleRexerRegistry = require('./js-buildtools/gulp-createSimpleLexerRegistry.js');

const numericKeyName = '-num';
const simpleLexerRegistryFileName = '2__zippedSimpleLexerRegistry.generated.js';
const regExpCompatFileName = 'regexpcompat.js';

var isDebug, languageUsed;

gulp.task( '__generate_simple_lexer_registry', gulp.series(
    function(){
        return gulp.src(
            [
            // Google Code Prettify
                './src/js/1_common/*.js',
                './src/js/2_SimpleLexerRegistry/*.js',
                './src/js/3_langs/*.js'
            ]

        ).pipe(
            ClosureCompiler(
                {
                    define            : [
                        'DEFINE_CODE_PRETTIFY__USE_DEFAULT_MARKUP=' + true || isDebug,
                        'DEFINE_CODE_PRETTIFY__USE_DEFAULT_CODE=' + isDebug,
                        'DEFINE_CODE_PRETTIFY__LANGUAGES_USED="' + languageUsed + '"',
                        'DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT=0'
                    ],
                    // compilation_level : 'ADVANCED',
                    // compilation_level : 'WHITESPACE_ONLY', // Snow Daifuku の変数が未定義エラーになるので ADVANCED は使えない...!
                    // formatting        : 'PRETTY_PRINT',
                    warning_level     : 'VERBOSE',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    js_output_file    : '__generate_simple_lexer_registry.js'
                }
            )
        ).pipe(
            gulpCreateSimpleRexerRegistry( simpleLexerRegistryFileName, numericKeyName )
        ).pipe( gulp.dest( 'src/js/4_prettify' ) );
    }
) );

gulp.task( '__snowSaifuku', gulp.series(
    '__generate_simple_lexer_registry',
    function(){
        return gulp.src(
                [
                    './.submodules/web-doc-base/.submodules/what-browser-am-i/src/js/**/*.js',
                    '!./.submodules/web-doc-base/.submodules/what-browser-am-i/src/js/4_brand.js'
                ]
            ).pipe(
                gulpDPZ(
                    {
                        labelPackageGlobal : '*',
                        packageGlobalArgs  : [ 'ua,window,document,navigator,screen,parseFloat,Number,undefined', 'ua,window,document,navigator,screen,parseFloat,Number,void 0' ],
                        basePath           : './.submodules/web-doc-base/.submodules/what-browser-am-i/src/js',
                        fileName           : 'ua.js'
                    }
                )
            ).pipe(
                ClosureCompiler(
                    {
                        externs           : [
                            './.submodules/web-doc-base/.submodules/what-browser-am-i/src/js-externs/externs.js'
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
                        formatting        : 'PRETTY_PRINT',
                        warning_level     : 'VERBOSE',
                        language_in       : 'ECMASCRIPT3',
                        language_out      : 'ECMASCRIPT3',
                        output_wrapper    : 'ua=[];%output%',
                        js_output_file    : 'global.what-browser-am-i.js'
                    }
                )
            ).pipe(gulp.dest( tempDir ));
    },
    function(){
        return gulp.src(
            [
            // what-browser-am-i
                tempDir + '/global.what-browser-am-i.js',
            // Snow daifuku
                './.submodules/web-doc-base/.submodules/what-browser-am-i/src/js/0_global/*.js',
               '!./.submodules/web-doc-base/.submodules/what-browser-am-i/src/js/0_global/7_conpare.js',
                './.submodules/web-doc-base/src/js/**/*.js',
               '!./.submodules/web-doc-base/src/js/3_DOM/nodeCleaner.js',
               '!./.submodules/web-doc-base/src/js/4_EventModule/imageReady.js',
               '!./.submodules/web-doc-base/src/js/4_EventModule/forcedColors.js',
               '!./.submodules/web-doc-base/src/js/4_EventModule/prefersColorScheme.js',
               '!./.submodules/web-doc-base/src/js/4_EventModule/print.js',
               '!./.submodules/web-doc-base/src/js/4_EventModule/resize.js',
               '!./.submodules/web-doc-base/src/js/4_EventModule/scroll.js',
               '!./.submodules/web-doc-base/src/js/5_CSSOM/**/*.js',
               '!./.submodules/web-doc-base/src/js/6_CanUse/**/*.js',
               '!./.submodules/web-doc-base/src/js/7_Patch/**/*.js',
               '!./.submodules/web-doc-base/src/js/8_Library/**/*.js',
            // Google Code Prettify
                './src/js/1_common/*.js',
                './src/js/4_prettify/*.js'
            ]
        ).pipe(
            gulpDPZ(
                {
                    labelPackageGlobal : '*', // for Gecko 0.7- ! https://twitter.com/itozyun/status/1488924003070742535
                    packageGlobalArgs : [ 'ua,window,emptyFunction,RegExp,Date,' + globalVariables + ',undefined', 'ua,this,function(){},this.RegExp,Date,' + globalVariables + ',void 0' ],
                    basePath          : [
                        tempDir + '/',
                        './.submodules/web-doc-base/.submodules/what-browser-am-i/src/js/',
                        './.submodules/web-doc-base/src/js/',
                        './src/js/'
                    ]
                }
            )
        ).pipe(
            ClosureCompiler(
                {
                    externs           : [
                        // Snow daifuku
                        './.submodules/web-doc-base/.submodules/what-browser-am-i/src/js-externs/externs.js',
                        './.submodules/web-doc-base/.submodules/regexp-free-js-base64/src/js-externs/externs.js',
                        './.submodules/web-doc-base/src/js-externs/externs.js',
                        // Google Code Prettify
                        './src/js-externs/externs.js'
                    ],
                    define            : [
                        // Snow daifuku
                        'DEFINE_WHAT_BROWSER_AM_I__MINIFY=true',
                        'DEFINE_WEB_DOC_BASE__DEBUG=' + ( isDebug ? 1 : 0 ),
                        'DEFINE_WEB_DOC_BASE__LOGGER_ELEMENT_ID="logger"',
                        // Google Code Prettify
                        'DEFINE_CODE_PRETTIFY__DEBUG=' + isDebug,
                        'DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT=' + isDebug,
                        'DEFINE_CODE_PRETTIFY__NUMERIC_STYLE_PATTERN_OBJECT_KEY="' + numericKeyName + '"',
                        'DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT=' + ( isDebug ? 1 : -1 ),
                        'DEFINE_CODE_PRETTIFY__REGEXPCOMPAT_FILENAME=' + regExpCompatFileName
                    ],
                    compilation_level : 'ADVANCED',
                    // compilation_level : 'WHITESPACE_ONLY',
                    // formatting        : isDebug ? 'PRETTY_PRINT' : 'SINGLE_QUOTES',
                    warning_level     : 'VERBOSE',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    js_output_file    : 'prettify.snow.withoutPolyfill.js'
                }
            )
        ).pipe( gulp.dest( tempDir ) );
    },
    function(){
        return gulp.src(
            [
                '.submodules/rerejs/src.js/0_global/2_polyfill.js',
                tempDir + '/prettify.snow.withoutPolyfill.js'
            ]
        ).pipe(
            ClosureCompiler(
                {
                    compilation_level : 'WHITESPACE_ONLY',
                    formatting        : 'PRETTY_PRINT', // : 'SINGLE_QUOTES',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    output_wrapper    : '/** Code Preffity for ES2 [lang-' + ( languageUsed || 'all' ) + ( isDebug ? ' | Debug build' : '') + '](github.com/ECMAScript2/es2-code-prettify) */\n%output%',
                    js_output_file    : 'prettify.lang-' + ( languageUsed || 'all' ) + '.js'
                }
            )
        ).pipe( gulp.dest( 'docs/js' ) );
    },
    function(){
        return gulp.src(
            [
            // ReRe.js
                '.submodules/rerejs/src.js/**/*.js',
               '!.submodules/rerejs/src.js/0_global/2_polyfill.js'
            ]
        ).pipe(
            gulpDPZ(
                {
                    labelPackageGlobal : '*', // for Gecko 0.7- ! https://twitter.com/itozyun/status/1488924003070742535
                    packageGlobalArgs : [ 'global,RegExp,String,Math,Infinity,undefined', 'this,this.RegExp,String,Math,1/0,void 0' ],
                    basePath          : [
                        '.submodules/rerejs/src.js/'
                    ]
                }
            )
        ).pipe(
            ClosureCompiler(
                {
                    externs           : [
                        // ReRe.js
                        '.submodules/rerejs/src.externs/externs.generated.js'
                    ],
                    define            : [
                        // ReRE.js
                        'DEFINE_REGEXP_COMPAT__DEBUG=false',
                        'DEFINE_REGEXP_COMPAT__MINIFY=true',
                        'DEFINE_REGEXP_COMPAT__NODEJS=false',
                        'DEFINE_REGEXP_COMPAT__CLIENT_MIN_ES_VERSION=2',
                        'DEFINE_REGEXP_COMPAT__ES_FEATURE_VERSION=3',
                        'DEFINE_REGEXP_COMPAT__EXPORT_BY_CALL_REGEXPCOMPAT=true'
                    ],
                    // env               : isDebug ? 'BROWSER' : 'CUSTOM',
                    compilation_level : 'ADVANCED',
                    // compilation_level : 'WHITESPACE_ONLY',
                    formatting        : 'PRETTY_PRINT',
                    warning_level     : 'VERBOSE',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    js_output_file    : regExpCompatFileName
                }
            )
        ).pipe(
            require('es2-postprocessor').gulp({minIEVersion : isDebug ? 5.5 : 5, minOperaVersion : 7})
        ).pipe( gulp.dest( 'docs/js' ) );
    },
    function( cb ){
        fs.unlink( 'src/js/4_prettify/' + simpleLexerRegistryFileName, cb );
    }
) );

gulp.task( 'all',
    gulp.series(
        function( cb ){ isDebug = true; languageUsed = ''; cb() },
        '__snowSaifuku'
    )
);
gulp.task( 'web',
    gulp.series(
        function( cb ){ isDebug = false; languageUsed = 'web'; cb() },
        '__snowSaifuku'
    )
);
