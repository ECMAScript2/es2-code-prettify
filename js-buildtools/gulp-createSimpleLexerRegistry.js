const PluginError = require('plugin-error'),
      Transform   = require('stream').Transform,
      Vinyl       = require('vinyl'),
      stream      = new Transform( { objectMode : true } ),
      vm          = require('vm');

var fileName, numericKeyName;

module.exports = function( _fileName, _numericKeyName ){
    fileName = _fileName;
    numericKeyName = _numericKeyName || '';
    return stream;
};

stream._transform = function( file, encoding, cb ){
    if( file.isNull() ) return cb( null, file );

    if( file.isStream() ) return cb( new PluginError( 'gulp-createSimpleLexerRegistry', 'Streaming not supported' ) );

    if( file.isBuffer() ){
        var js = file.contents.toString( encoding );

        var sandbox = {
            window : {},
            RegExpCompat : function( a, b ){
                var r = new RegExp( a, b );
                r.match = function( a ){ return a.match( r ) }
                r.replace = function( a, b ){ return a.replace( r, b ) }
                return r;
            }
        };

        // execute source code in an isolated sandbox
        vm.runInNewContext(
            js + ';window.simpleLexerRegistry = simpleLexerRegistry;',
            sandbox
        );
        var originalSimpleLexerRegistry  = sandbox.window.simpleLexerRegistry;
        var optimizedSimpleLexerRegistry = {};
        var storeStylePatternObject      = [];
        var storeStylePatternArray       = [];
        var storeStylePattern            = [];
        var storeRegExp                  = [];
        var storeClasses                 = [];

        var numReuseStylePatternObject = 0;
        var numReuseStylePatternArray  = 0;
        var numReuseStylePattern       = 0;
        var numReuseRegExp             = 0;

        var langs = Object.keys( originalSimpleLexerRegistry ).sort( function( a, b ){ return a.length - b.length; } );
        var lang;

        while( lang = langs.shift() ){
            var originalSimpleLexer = originalSimpleLexerRegistry[ lang ];

            for( var _lang in optimizedSimpleLexerRegistry ){
                if( optimizedSimpleLexerRegistry[ _lang ] && equalSimpleLexer( optimizedSimpleLexerRegistry[ _lang ], originalSimpleLexer ) ){
                    optimizedSimpleLexerRegistry[ lang ] = _lang;
                    break;
                };
            };

            if( !optimizedSimpleLexerRegistry[ lang ] ){
                optimizedSimpleLexerRegistry[ lang ] = [
                    // SimpleLexer[0] : Object.<SylePattern>
                    getIndexOfStoredStylePatternObject( originalSimpleLexer[ 0 ] ),
                    // SimpleLexer[1] : RegExp
                    getIndexOfStoredRegExp( originalSimpleLexer[ 1 ] ),
                    // SimpleLexer[2] : Array.<SylePattern>
                    getIndexOfStoredStylePatternArray( originalSimpleLexer[ 2 ] )
                ];
            };
        };

        for( var i = 0, l = storeStylePattern.length, tempClasses = {}; i < l; ++i ){
            var className = storeStylePattern[ i ][ 0 ];
            if( className.indexOf( 'lang-' ) !== 0 ){
                if( 0 < tempClasses[ className ] ){
                    tempClasses[ className ]++;
                } else {
                    tempClasses[ className ] = 1;
                    storeClasses.push( className );
                };
            } else {
                storeStylePattern[ i ][ 0 ] = className === 'lang-' ? '' : className.substr( 5 );
            };
        };
        storeClasses.sort(
            function( a, b ){
                if( typeof tempClasses[ a ] === 'string' && typeof tempClasses[ b ] === 'string' ) return 0;
                if( typeof tempClasses[ a ] === 'string' ) return 1;
                if( typeof tempClasses[ b ] === 'string' ) return -1;
                return tempClasses[ a ] === tempClasses[ b ] ? 0 : tempClasses[ a ] < tempClasses[ b ] ? 1 : -1;
            }
        );
        for( i = 0; i < l; ++i ){
            var className = storeStylePattern[ i ][ 0 ];
            var index = storeClasses.indexOf( className );
            if( 0 <= index ){
                storeStylePattern[ i ][ 0 ] = index;
            };
        };

        if( storeClasses.indexOf( sandbox.window.PR.PR_PLAIN ) === -1 ){
            storeClasses.push( sandbox.window.PR.PR_PLAIN );
        };
        if( storeClasses.indexOf( sandbox.window.PR.PR_SOURCE ) === -1 ){
            storeClasses.push( sandbox.window.PR.PR_SOURCE );
        };

        this.push(
            new Vinyl(
                {
                    path     : fileName,
                    contents : Buffer.from(
                            'var simpleLexerRegistry = ' +
                                JSON.stringify( optimizedSimpleLexerRegistry, null, '    ' ) + ';\n' +
                            'var storeStylePatternObject = ' +
                                JSON.stringify( storeStylePatternObject, null, '    ' ) + ';\n' +
                            'var storeStylePattern = ' +
                                JSON.stringify( storeStylePattern, null, '    ' ) + ';\n' +
                            'var storeRegExp = ' +
                                JSON.stringify( storeRegExp, null, '    ' ) + ';\n' +
                            'var storeClasses = ' +
                                JSON.stringify( storeClasses, null, '    ' ) + ';\n' +
                            'var STYLE_PLAIN = '  + storeClasses.indexOf( sandbox.window.PR.PR_PLAIN  ) + ';\n' +
                            'var STYLE_SOURCE = ' + storeClasses.indexOf( sandbox.window.PR.PR_SOURCE ) + ';'
                        )
                }
            )
        );

        console.dir( optimizedSimpleLexerRegistry );
        // console.dir( storeStylePatternArray );
        console.log( numReuseStylePatternObject + '/' + storeStylePatternObject.length,
                     numReuseStylePatternArray + '/' + storeStylePatternArray.length,
                     numReuseStylePattern + '/' + storeStylePattern.length,
                     numReuseRegExp + '/' + storeRegExp.length );
    };

        function equalSimpleLexer( simpleLexer0, simpleLexer1 ){
            if( typeof simpleLexer0 === 'string' ){
                simpleLexer0 = optimizedSimpleLexerRegistry[ simpleLexer0 ];
            };

            return equalStylePatternObject( simpleLexer0[ 0 ], simpleLexer1[ 0 ] ) &&
                   equalRegExp(             simpleLexer0[ 1 ], simpleLexer1[ 1 ] ) &&
                   equalStylePatternArray(  simpleLexer0[ 2 ], simpleLexer1[ 2 ] );
        };

    function getIndexOfStoredStylePatternObject( stylePatternObject ){
        for( var i = -1; storeStylePatternObject[ ++i ]; ){
            if( equalStylePatternObject( storeStylePatternObject[ i ], stylePatternObject ) ){
                ++numReuseStylePatternObject;
                return i;
            };
        };
        var optimizedStylePatternObject = {};
        storeStylePatternObject.push( optimizedStylePatternObject );
        var numericKey = 0, numericKeyValue;
        for( var keyword in stylePatternObject ){
            if( '0' <= keyword && keyword <= '9' ){
                if( 0 < numericKey ){
                    if( numericKeyValue !== getIndexOfStoredStylePattern( stylePatternObject[ keyword ] ) ){
                        throw "UNEXPECTED about numericKey! " + numericKeyValue + ', ' + getIndexOfStoredStylePattern( stylePatternObject[ keyword ] ) + ' [' + keyword + ']';
                    };
                } else {
                    numericKeyValue = getIndexOfStoredStylePattern( stylePatternObject[ keyword ] );
                };
                ++numericKey;
            } else {
                optimizedStylePatternObject[ keyword ] = getIndexOfStoredStylePattern( stylePatternObject[ keyword ] );
            };
        };
        if( 0 < numericKey ){
            if( numericKey === 10 ){
                optimizedStylePatternObject[ numericKeyName ] = numericKeyValue;
            } else {
                throw "UNEXPECTED about numericKey!";
            };
        };
        return i;
    };
        function equalStylePatternObject( stylePatternObject0, stylePatternObject1 ){
            if( Number.isInteger( stylePatternObject0 ) ){
                stylePatternObject0 = storeStylePatternObject[ stylePatternObject0 ];
            };

            var memory = {};

            for( var keyword in stylePatternObject0 ){
                if( keyword === numericKeyName ) continue;

                if( !( keyword in stylePatternObject1 ) || !equalStylePattern( stylePatternObject0[ keyword ], stylePatternObject1[ keyword ] ) ){
                    return false;
                };
                memory[ keyword ] = true;
            };
            for( var keyword in stylePatternObject1 ){
                if( '0' <= keyword && keyword <= '9' ) continue;

                if( !memory[ keyword ] ){
                    return false;
                };
            };
            return true;
        };

    function getIndexOfStoredStylePatternArray( stylePatternArray ){
        /* for( var i = -1; storeStylePatternArray[ ++i ]; ){
            if( equalStylePatternArray( storeStylePatternArray[ i ], stylePatternArray ) ){
                ++numReuseStylePatternArray;
                return i;
            };
        }; */
        var optimizedStylePatternArray = [];
        storeStylePatternArray.push( optimizedStylePatternArray );
        for( var j = -1, originalStylePattern; originalStylePattern = stylePatternArray[ ++j ]; ){
            optimizedStylePatternArray[ j ] = getIndexOfStoredStylePattern( originalStylePattern );
        };
        return optimizedStylePatternArray; // i;
    };
        function equalStylePatternArray( stylePatternArray0, stylePatternArray1 ){
            if( Number.isInteger( stylePatternArray0 ) ){
                stylePatternArray0 = storeStylePatternArray[ stylePatternArray0 ];
            };

            if( stylePatternArray0.length === stylePatternArray1.length ){
                for( var i = 0; i < stylePatternArray0.length; ++i ){
                    if( !equalStylePattern( stylePatternArray0[ i ], stylePatternArray1[ i ] ) ){
                        return false;
                    };
                };
                return true;
            };
            return false;
        };

    function getIndexOfStoredStylePattern( originalStylePattern ){
        for( var i = -1; storeStylePattern[ ++i ]; ){
            if( equalStylePattern( storeStylePattern[ i ], originalStylePattern ) ){
                ++numReuseStylePattern;
                return i;
            };
        };
        storeStylePattern.push(
            [ originalStylePattern[ 0 ], getIndexOfStoredRegExp( originalStylePattern[ 1 ] ) ]
        );
        return i;
    };
        function equalStylePattern( stylePattern0, stylePattern1 ){
            if( Number.isInteger( stylePattern0 ) ){
                stylePattern0 = storeStylePattern[ stylePattern0 ];
            };

            return stylePattern0[ 0 ] === stylePattern1[ 0 ] && equalRegExp( stylePattern0[ 1 ], stylePattern1[ 1 ] );
        };

    function getIndexOfStoredRegExp( originalRegExp ){
        for( var i = -1; storeRegExp[ ++i ]; ){
            if( equalRegExp( storeRegExp[ i ], originalRegExp ) ){
                ++numReuseRegExp;
                return i;
            };
        };
        storeRegExp.push( originalRegExp.flags ? [ originalRegExp.source, originalRegExp.flags ] : originalRegExp.source );
        return i;
    };
        function equalRegExp( regExp0, regExp1 ){
            if( Number.isInteger( regExp0 ) ){
                regExp0 = storeRegExp[ regExp0 ];
            };
            return ( Array.isArray( regExp0 )    && regExp0[ 0 ] === regExp1.source   && regExp0[ 1 ] === regExp1.flags  ) ||
                   ( typeof regExp0 === 'string' && regExp0 === regExp1.source        && !regExp1.flags                  ) ||
                   (                                regExp0.source === regExp1.source && regExp0.flags === regExp1.flags );
        };

    // this.push( file );
    cb();
};
