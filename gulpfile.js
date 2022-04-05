const gulp   = require('gulp'),
      gulpDPZ = require('gulp-diamond-princess-zoning'),
      gulpCreateSimpleRexerRegistry = require('./js-buildtools/gulp-createSimpleLexerRegistry.js'),
      globalVariables = 'document,parseFloat,Function,isFinite,setTimeout,clearTimeout',
      closureCompiler = require('google-closure-compiler').gulp(),
      fs = require('fs'),
      tempDir   = require('os').tmpdir() + '/google-code-prettify';

const numericKeyName = '-num';

gulp.task( 'js', gulp.series(
    function(){
        return gulp.src(
            [
            // ReRe.js
                '.submodules/rerejs/src.js/**/*.js',
               '!.submodules/rerejs/src.js/0_global/2_polyfill.js',
            // Google Code Prettify
                './src.js/js/**/*.js',
               '!./src.js/js/**/*.snowDaifuku.js',
               '!./src.js/js/4_langs/*.js',
               '!./src.js/js/5_run/*.js',
               '!./src.js/js/node_prettify.js'
            ]
        ).pipe(
            gulpDPZ(
                {
                    labelPackageGlobal : '*',
                    packageGlobalArgs : [ 'ua,window,emptyFunction,' + globalVariables + ',undefined', '{},this,function(){},' + globalVariables + ',void 0' ],
                    basePath          : [ './.submodules/web-doc-base/src/js/', './.submodules/web-doc-base/.submodules/what-browser-am-i/src/js/', './src.js/', '.submodules/rerejs/' ]
                }
            )
        ).pipe(
            closureCompiler(
                {
                    externs           : [
                        // ReRe.js
                        '.submodules/rerejs/src.externs/externs.generated.js',
                        // './src.js/externs/externs_rere.js'
                    ],
                    define            : [
                        'DEFINE_REGEXP_COMPAT__DEBUG=false',
                        'DEFINE_REGEXP_COMPAT__MINIFY=true',
                        'DEFINE_REGEXP_COMPAT__NODEJS=false',
                        'DEFINE_REGEXP_COMPAT__ES2018=false',
                        'DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT=0',
                        'DEFINE_CODE_PRETTIFY__DEBUG=true'
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

gulp.task( '__generate_simple_lexer_registry', gulp.series(
    function(){
        return gulp.src(
            [
            // ReRe.js
                // '.submodules/rerejs/dist/develop/ReRE.es2.3.develop.js',
            // Google Code Prettify
                './src.js/js/1_global/*.js',
                // './src.js/js/2_packageGlobal/*.js',
                './src.js/js/3_prettify/*.moduleGlobal.js',
                './src.js/js/3_prettify/6_combinePrefixPatterns.js',
                './src.js/js/3_prettify/7_createSimpleLexer.js',
                './src.js/js/3_prettify/8_registerLangHandler.js',
                './src.js/js/4_langs/*.js'
            ]
        ).pipe(
            closureCompiler(
                {
                    define            : [
                        'DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT=0'
                    ],
                    // compilation_level : 'ADVANCED',
                    compilation_level : 'WHITESPACE_ONLY',
                    // formatting        : 'PRETTY_PRINT',
                    warning_level     : 'VERBOSE',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    js_output_file    : '__generate_simple_lexer_registry.js'
                }
            )
        ).pipe(
            gulpCreateSimpleRexerRegistry( '__zippedSimpleLexerRegistry.js', numericKeyName )
        ).pipe( gulp.dest( 'src.js/js/3_prettify' ) );
    }
) );

gulp.task( 'sl', gulp.series(
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
                './src.js/js/**/*.js',
               '!./src.js/js/2_packageGlobal/toEndOfScriipt.js',
               '!./src.js/js/**/*.vanilla.js',
               '!./src.js/js/3_prettify/6_combinePrefixPatterns.js',
               '!./src.js/js/3_prettify/7_createSimpleLexer.js',
               '!./src.js/js/3_prettify/8_registerLangHandler.js',
               // '!./src.js/js/3_prettify/E_PR.js',
               '!./src.js/js/4_langs/*.js',
               '!./src.js/js/5_run/*.js',
               '!./src.js/js/node_prettify.js'
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
                        './src.js/'
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
                        // './src.js/externs/externs_rere.js'
                    ],
                    define            : [
                        // ReRE.js
                        'DEFINE_REGEXP_COMPAT__DEBUG=false',
                        'DEFINE_REGEXP_COMPAT__MINIFY=true',
                        'DEFINE_REGEXP_COMPAT__NODEJS=false',
                        'DEFINE_REGEXP_COMPAT__ES2018=false',
                        // Snow daifuku
                        'DEFINE_WHAT_BROWSER_AM_I__MINIFY=true',
                        'DEFINE_WEB_DOC_BASE__DEBUG=1',
                        'DEFINE_WEB_DOC_BASE__LOGGER_ELEMENT_ID="logger"',
                        // Google Code Prettify
                        'DEFINE_CODE_PRETTIFY__DEBUG=true',
                        'DEFINE_CODE_PRETTIFY__USE_STATIC_LEXER=true',
                        'DEFINE_CODE_PRETTIFY__NUMERIC_STYLE_PATTERN_OBJECT_KEY="' + numericKeyName + '"',
                        'DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT=0'
                    ],
                    // compilation_level : 'ADVANCED',
                    // compilation_level : 'WHITESPACE_ONLY',
                    // formatting        : 'PRETTY_PRINT',
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
                    formatting        : 'PRETTY_PRINT',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    output_wrapper    : '// Google Code Prettify for ES2, (https://githug.com/itozyun/regexp-free-code-prettify)\n%output%',
                    js_output_file    : 'prettify.snow.js'
                }
            )
        ).pipe( gulp.dest( 'tests' ) );
    },
    /* function( cb ){
        fs.unlink( 'src.js/js/3_prettify/__zippedSimpleLexerRegistry.js', cb );
    }, */
    function( cb ){
        return cb();
        // https://kitak.hatenablog.jp/entry/2014/11/15/233649
        //   JSのASTを扱うライブラリをつかって、不要なeval呼び出しを除くコードを書いてみた
        var esprima = require('esprima');
        var estraverse = require('estraverse');
        var escodegen = require('escodegen');

        fs.readFile( './tests/prettify.snow.js',
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
                fs.writeFile( './tests/prettify.snow.js',
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

gulp.task( 'snow', gulp.series(
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
               '!./.submodules/web-doc-base/src/js/5_CSSOM/**/*.js',
               '!./.submodules/web-doc-base/src/js/6_CanUse/**/*.js',
               '!./.submodules/web-doc-base/src/js/7_Patch/**/*.js',
               '!./.submodules/web-doc-base/src/js/8_Library/**/*.js',
            // ReRe.js
                '.submodules/rerejs/src.js/**/*.js',
               '!.submodules/rerejs/src.js/0_global/2_polyfill.js',
            // Google Code Prettify
                './src.js/js/**/*.js',
               '!./src.js/js/2_packageGlobal/toEndOfScriipt.js',
               '!./src.js/js/**/*.vanilla.js',
               '!./src.js/js/3_prettify/E_PR.js',
               '!./src.js/js/4_langs/*.js',
               '!./src.js/js/5_run/*.js',
               '!./src.js/js/node_prettify.js'
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
                        './src.js/'
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
                        // './src.js/externs/externs_rere.js'
                    ],
                    define            : [
                        // ReRE.js
                        'DEFINE_REGEXP_COMPAT__DEBUG=false',
                        'DEFINE_REGEXP_COMPAT__MINIFY=true',
                        'DEFINE_REGEXP_COMPAT__NODEJS=false',
                        'DEFINE_REGEXP_COMPAT__ES2018=false',
                        // Snow daifuku
                        'DEFINE_WHAT_BROWSER_AM_I__MINIFY=true',
                        'DEFINE_WEB_DOC_BASE__DEBUG=1',
                        'DEFINE_WEB_DOC_BASE__LOGGER_ELEMENT_ID="logger"',
                        // Google Code Prettify
                        'DEFINE_CODE_PRETTIFY__DEBUG=false',
                        'DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT=1'
                    ],
                    compilation_level : 'ADVANCED',
                    // compilation_level : 'WHITESPACE_ONLY',
                    // formatting        : 'PRETTY_PRINT',
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
                    // formatting        : 'PRETTY_PRINT',
                    language_in       : 'ECMASCRIPT3',
                    language_out      : 'ECMASCRIPT3',
                    output_wrapper    : '// Google Code Prettify for ES2, (https://githug.com/itozyun/regexp-free-code-prettify)\n%output%',
                    js_output_file    : 'prettify.snow.js'
                }
            )
        ).pipe( gulp.dest( 'tests' ) );
    }
) );