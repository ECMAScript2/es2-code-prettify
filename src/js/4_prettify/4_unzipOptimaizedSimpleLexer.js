/** @const {!Array.<number>} */
var lazyCreateRegExpList = [];

m_unzipOptimaizedSimpleLexer = function( extension ){
    var job       = currentJob;
    var simpleLexer = /** @type {!SimpleLexer|string} */ (simpleLexerRegistry[ extension ]);

    if( m_isString( simpleLexer ) ){
        simpleLexer = simpleLexerRegistry[ extension ] = simpleLexerRegistry[ /** @type {string} */ (simpleLexer) ];
    };

    var stylePatternObject = simpleLexer[ 0 ];

    if( 0 <= stylePatternObject ){
        stylePatternObject = storeStylePatternObject[ stylePatternObject ];
        if( 0 <= stylePatternObject[ DEFINE_CODE_PRETTIFY__NUMERIC_STYLE_PATTERN_OBJECT_KEY ] ){
            var stylePattern = stylePatternObject[ DEFINE_CODE_PRETTIFY__NUMERIC_STYLE_PATTERN_OBJECT_KEY ];
            delete stylePatternObject[ DEFINE_CODE_PRETTIFY__NUMERIC_STYLE_PATTERN_OBJECT_KEY ];
            for( var i = -1; i < 9; ){
                stylePatternObject[ '' + ( ++i ) ] = stylePattern; // 旧い Opera の問題を回避するために key を文字化する
            };
        };
        simpleLexer[ 0 ] = stylePatternObject;
    };
    for( var keyword in stylePatternObject ){
        stylePatternObject[ keyword ] = unzipStylePattern( stylePatternObject[ keyword ] );
    };

    simpleLexer[ 1 ] = unzipRegExp( simpleLexer[ 1 ] );

    var stylePatternArray = simpleLexer[ 2 ];
    for( var i = 0, l = stylePatternArray.length; i < l; ++i ){
        stylePatternArray[ i ] = unzipStylePattern( stylePatternArray[ i ] );
    };

    if( lazyCreateRegExpList.length ){
        m_graduallyPrettify( createRegExp, extension, TASK_IS_DECORATE );
    } else {
        if( !job.simpleLexer ){
            job.simpleLexer = simpleLexer;
        } else if( job.parentJob ){
            // childJobs の最大は 3. この時は2番目に lang-* が入っている(decorate appendChildJob 参照)
            // m_unzipOptimaizedSimpleLexer に入る時には currentJpb = job.childJobs.shift() している.
            // lang-* が childJobs[0] だった時は、上で simpleLexer を接続する
            // lang-* が childJobs[1] だった時は、次で simpleLexer を接続する
            job.parentJob.childJobs[ 0 ].simpleLexer = simpleLexer;
        };

        // Apply the appropriate language handler
        m_graduallyPrettify( m_tokenize, undefined, TASK_IS_INIT_REGEXP );
    };

    function unzipStylePattern( stylePatternOrIndex ){
        var stylePattern = stylePatternOrIndex;

        if( 0 <= stylePatternOrIndex ){
            stylePattern = storeStylePattern[ stylePatternOrIndex ];
        };
        if( 0 <= stylePattern[ 1 ] ){
            stylePattern[ 1 ] = unzipRegExp( stylePattern[ 1 ] );
        };
        return stylePattern;
    };

    function unzipRegExp( regExpOrRegExpIndex ){
        var regExp = regExpOrRegExpIndex;

        if( 0 <= regExpOrRegExpIndex ){
            regExp = storeRegExp[ regExpOrRegExpIndex ];
            if( !regExp.exec ){ // not RegExp
                lazyCreateRegExpList.push( regExpOrRegExpIndex );
                return regExpOrRegExpIndex;
            };
        };
        return regExp;
    };
};

function createRegExp( extension ){
    if( lazyCreateRegExpList.length ){
        var regExpIndex = lazyCreateRegExpList.shift();
        var regExp = storeRegExp[ regExpIndex ];
        if( regExp.pop ){ // isArray
            storeRegExp[ regExpIndex ] = regExp = RegExpProxy( regExp[ 0 ], regExp[ 1 ] );
        } else if( m_isString( regExp ) ){
            storeRegExp[ regExpIndex ] = regExp = RegExpProxy( regExp );
        } else {
            return createRegExp( extension );
        };
        if( DEFINE_CODE_PRETTIFY__DEBUG ){
            m_graduallyPrettify( createRegExp, extension, TASK_IS_INIT_REGEXP, false, regExp );
        } else {
            m_graduallyPrettify( createRegExp, extension, TASK_IS_INIT_REGEXP );
        };
    } else {
        m_graduallyPrettify( m_unzipOptimaizedSimpleLexer, extension );
    };
};