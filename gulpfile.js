const gulp            = require('gulp'),
      gulpDPZ         = require('gulp-diamond-princess-zoning'),
      closureCompiler = require('google-closure-compiler').gulp(),
      fs              = require('fs'),
      tempDir         = require('os').tmpdir() + '/google-code-prettify',
      globalVariables = 'document,parseFloat,Function,isFinite,setTimeout,clearTimeout',
      gulpCreateSimpleRexerRegistry = require('./js-buildtools/gulp-createSimpleLexerRegistry.js');

const numericKeyName = '-num';
const simpleLexerRegistryFileName = '2__zippedSimpleLexerRegistry.generated.js';
var isDebug, languageUsed;

gulp.task( '__generate_simple_lexer_registry', gulp.series(
    function(){
        return gulp.src(
            [
            // ReRe.js
                // '.submodules/rerejs/dist/develop/ReRE.es2.3.develop.js',
            // Google Code Prettify
                './src/js/1_common/*.js',
                './src/js/2_SimpleLexerRegistry/*.js',
                './src/js/3_langs/*.js'
            ]

        ).pipe(
            closureCompiler(
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
            gulpCreateSimpleRexerRegistry( '__simple_lexer_registry.js', numericKeyName )
        ).pipe(
            closureCompiler(
                {
                    compilation_level : 'WHITESPACE_ONLY',
                    formatting        : 'PRETTY_PRINT',
                    warning_level     : 'VERBOSE',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    js_output_file    : simpleLexerRegistryFileName
                }
            )
        ).pipe( gulp.dest( 'src/js/4_prettify' ) );
    }
) );

gulp.task( '__vanilla', gulp.series(
    '__generate_simple_lexer_registry',
    function(){
        return gulp.src(
            [
            // ReRe.js
                '.submodules/rerejs/src.js/**/*.js',
               '!.submodules/rerejs/src.js/0_global/2_polyfill.js',
            // Google Code Prettify
                './src/js/1_common/*.js',
                './src/js/4_prettify/*.js',
               '!./src/js/4_prettify/*.snowDaifuku.js'
            ]
        ).pipe(
            gulpDPZ(
                {
                    labelPackageGlobal : '*',
                    packageGlobalArgs : [ 'window,' + globalVariables + ',undefined', 'this,' + globalVariables + ',void 0' ],
                    basePath          : [ './.submodules/web-doc-base/src/js/', './.submodules/web-doc-base/.submodules/what-browser-am-i/src/js/', './src/', '.submodules/rerejs/' ]
                }
            )
        ).pipe(
            closureCompiler(
                {
                    externs           : [
                        // ReRe.js
                        '.submodules/rerejs/src.externs/externs.generated.js',
                        // Google Code Prettify
                        './src/externs/externs_rere.js',
                        './src/externs/externs.js'
                    ],
                    define            : [
                        'DEFINE_REGEXP_COMPAT__DEBUG=false',
                        'DEFINE_REGEXP_COMPAT__MINIFY=true',
                        'DEFINE_REGEXP_COMPAT__NODEJS=false',
                        'DEFINE_REGEXP_COMPAT__ES2018=false',
                        'DEFINE_CODE_PRETTIFY__DEBUG=' + isDebug,
                        'DEFINE_CODE_PRETTIFY__NUMERIC_STYLE_PATTERN_OBJECT_KEY="' + numericKeyName + '"',
                        'DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT=' + ( isDebug ? 1 : -1 )
                    ],
                    compilation_level : 'ADVANCED',
                    // compilation_level : 'WHITESPACE_ONLY',
                    formatting        : isDebug ? 'PRETTY_PRINT' : 'SINGLE_QUOTES',
                    warning_level     : 'VERBOSE',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    output_wrapper    : '/** Code Preffity for ES2 [lang-' + ( isDebug ? 'all, Debug build' : languageUsed ) + '](https://githug.com/itozyun/regexp-free-code-prettify) */\n%output%',
                    js_output_file    : 'prettify.lang-' + ( isDebug ? 'all' : 'web' ) + '.js'
                }
            )
        ).pipe( gulp.dest( 'docs/js' ) );
    },
    function( cb ){
        fs.unlink( 'src/js/4_prettify/' + simpleLexerRegistryFileName, cb );
    }
) );

gulp.task( 'js',
    gulp.series(
        function( cb ){ isDebug = true; languageUsed = ''; cb() },
        '__vanilla'
    )
);
gulp.task( 'js-web',
    gulp.series(
        function( cb ){ isDebug = false; languageUsed = 'web'; cb() },
        '__vanilla'
    )
);

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
                closureCompiler(
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
            // ReRe.js
                '.submodules/rerejs/src.js/**/*.js',
               '!.submodules/rerejs/src.js/0_global/2_polyfill.js',
            // Google Code Prettify
                './src/js/1_common/*.js',
                './src/js/4_prettify/*.js',
               '!./src/js/**/*.vanilla.js'
            ]
        ).pipe(
            gulpDPZ(
                {
                    labelPackageGlobal : '*', // for Gecko 0.7- ! https://twitter.com/itozyun/status/1488924003070742535
                    packageGlobalArgs : [ 'ua,window,emptyFunction,' + globalVariables + ',undefined', 'ua,this,function(){},' + globalVariables + ',void 0' ],
                    basePath          : [
                        tempDir + '/', './.submodules/web-doc-base/.submodules/what-browser-am-i/src/js/',
                        './.submodules/web-doc-base/src/js/',
                        '.submodules/rerejs/src.js/',
                        './src/'
                    ]
                }
            )
        ).pipe(
            closureCompiler(
                {
                    externs           : [
                        // Snow daifuku
                        './.submodules/web-doc-base/.submodules/what-browser-am-i/src/js-externs/externs.js',
                        './.submodules/web-doc-base/.submodules/regexp-free-js-base64/src/js-externs/externs.js',
                        './node_modules/google-closure-compiler/contrib/externs/svg.js',
                        './.submodules/web-doc-base/src/js-externs/externs.js',
                        // ReRe.js
                        '.submodules/rerejs/src.externs/externs.generated.js',
                        // Google Code Prettify
                        './src/externs/externs_rere.js',
                        './src/externs/externs.js'
                    ],
                    define            : [
                        // ReRE.js
                        'DEFINE_REGEXP_COMPAT__DEBUG=false',
                        'DEFINE_REGEXP_COMPAT__MINIFY=true',
                        'DEFINE_REGEXP_COMPAT__NODEJS=false',
                        'DEFINE_REGEXP_COMPAT__ES2018=false',
                        // Snow daifuku
                        'DEFINE_WHAT_BROWSER_AM_I__MINIFY=true',
                        'DEFINE_WEB_DOC_BASE__DEBUG=' + ( isDebug ? 1 : 0 ),
                        'DEFINE_WEB_DOC_BASE__LOGGER_ELEMENT_ID="logger"',
                        // Google Code Prettify
                        'DEFINE_CODE_PRETTIFY__DEBUG=' + isDebug,
                        'DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT=' + isDebug,
                        'DEFINE_CODE_PRETTIFY__NUMERIC_STYLE_PATTERN_OBJECT_KEY="' + numericKeyName + '"',
                        'DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT=' + ( isDebug ? 1 : -1 )
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
            closureCompiler(
                {
                    compilation_level : 'WHITESPACE_ONLY',
                    formatting        : isDebug ? 'PRETTY_PRINT' : 'SINGLE_QUOTES',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    output_wrapper    : '/** Code Preffity for ES2 [lang-' + ( isDebug ? 'all, Debug build' : languageUsed ) + '](https://githug.com/itozyun/regexp-free-code-prettify) */\n%output%',
                    js_output_file    : 'prettify.lang-' + ( isDebug ? 'all' : 'web' ) + '.js'
                }
            )
        ).pipe( gulp.dest( 'docs/js' ) );
    },
    function( cb ){
        // fs.unlink( 'src/js/4_prettify/' + simpleLexerRegistryFileName, cb );
        cb();
    },
    function( cb ){
        return cb();
        // https://kitak.hatenablog.jp/entry/2014/11/15/233649
        //   JSのASTを扱うライブラリをつかって、不要なeval呼び出しを除くコードを書いてみた
        var esprima = require('esprima');
        var estraverse = require('estraverse');
        var escodegen = require('escodegen');

        fs.readFile( './docs/prettify.snow.js',
            function( err, source ){
                if( err !== null ){
                    return;
                };
                var ast = esprima.parse( source.toString() );

                estraverse.traverse(
                    ast,
                    {
                        enter : function( node, parent ){
                            if( parent && parent.type === 'ObjectExpression' ){
                                var prop = node;
                                if( typeof prop.key.value === 'number' ){
                                    console.log( '#', prop.key.raw )
                                    prop.key.value = '' + prop.key.value;
                                    prop.key.raw   = '"a' + prop.key.value + '"';
                                };
                            };
                        }
                    }
                );
                // console.log( escodegen.generate( ast ) );
                var lastIndex = 0;
                fs.writeFile( './docs/prettify.snow.js',
                    escodegen.generate( ast,
                        {
                            // https://github.com/estools/escodegen/issues/1
                            format: {
                                renumber: true,
                                hexadecimal: true,
                                quotes: "auto",
                                escapeless: false,
                                // compact: true,
                                space: '',
                                indent: {
                                    style: '',
                                    base: 0,
                                    adjustMultilineComment: false
                                },
                                parentheses: false,
                                semicolons: false
                            },
                            // https://github.com/estools/escodegen/issues/231#issuecomment-96850400
                            // If you really want to avoid Unicode escapes, use {format: {escapeless: true}} as your escodegen options.
                            // But the only way to use the same escapes that you used in your original code is to use the {verbatim: "raw"} option.
                            verbatim: "raw"
                        }
                    ).replace(
                        /\n/g,
                        function( newline, index, all ){
                            if( 400 < index - lastIndex ){
                                lastIndex = index;
                                return newline;
                            };
                            return 0 <= '();,:?{}[]"\''.indexOf( all.charAt( index - 1 ) ) ||
                                   0 <= '();,:?{}[]"\''.indexOf( all.charAt( index + 1 ) ) ? '' : ' ';
                        }
                    ), null, cb );
            }
        );
    }
) );

gulp.task( 'sd',
    gulp.series(
        function( cb ){ isDebug = true; languageUsed = ''; cb() },
        '__snowSaifuku'
    )
);
gulp.task( 'sd-web',
    gulp.series(
        function( cb ){ isDebug = false; languageUsed = 'web'; cb() },
        '__snowSaifuku'
    )
);