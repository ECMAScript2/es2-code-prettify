/**
 * @param {string} extension
 * @returns {SimpleLexer|undefined}
 */
function unzipOptimaizedSimpleLexer( extension ){
    var simpleLexer = simpleLexerRegistry[ extension ];

    if( m_isString( simpleLexer ) ){
        simpleLexer = simpleLexerRegistry[ extension ] = simpleLexerRegistry[ /** @type {string} */ (simpleLexer) ];
    };

    if( simpleLexer ){ // isArray
        var stylePatternObject = simpleLexer[ 0 ];
        if( 0 <= stylePatternObject ){
            stylePatternObject = storeStylePatternObject[ stylePatternObject ];
            for( var keyword in stylePatternObject ){
                stylePatternObject[ keyword ] = unzipStylePattern( stylePatternObject[ keyword ] );
            };
        };

        simpleLexer[ 1 ] = unzipRegExp( simpleLexer[ 1 ] );

        var stylePatternArray = simpleLexer[ 2 ];
        for( var i = 0, l = stylePatternArray.length; i < l; ++i ){
            stylePatternArray[ i ] = unzipStylePattern( stylePatternArray[ i ] );
        };

        return simpleLexer;
    };

    function unzipStylePattern( stylePatternOrIndex ){
        var stylePattern = stylePatternOrIndex;

        if( 0 <= stylePatternOrIndex ){
            stylePattern = storeStylePattern[ stylePatternOrIndex ];
            stylePattern[ 1 ] = unzipRegExp( stylePattern[ 1 ] );
        };
        return stylePattern;
    };

    function unzipRegExp( regExpOrRegExpIndex ){
        var regExp = regExpOrRegExpIndex;

        if( 0 <= regExpOrRegExpIndex ){
            regExp = storeRegExp[ regExpOrRegExpIndex ];
            if( regExp.pop ){ // isArray
                regExp = storeRegExp[ regExpOrRegExpIndex ] = RegExpProxy( regExp[ 0 ], regExp[ 1 ] );
            } else if( !regExp.exec ){ // not RegExp
                regExp = storeRegExp[ regExpOrRegExpIndex ] = RegExpProxy( regExp );
            };
        };
        return regExp;
    };
};