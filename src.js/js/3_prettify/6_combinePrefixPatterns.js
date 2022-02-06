/** @type {RegExpCompat} */
var reSmallAlphabet = new RegExpCompat( '[a-z]', 'i' );
/** @type {RegExpCompat} */
var reUnicode = new RegExpCompat( '\\\\u[0-9a-f]{4}|\\\\x[0-9a-f]{2}|\\\\[^ux]', 'gi' );
/** @type {RegExpCompat} */
var reCharsetParts = new RegExpCompat(
        '\\\\u[0-9A-Fa-f]{4}'
        + '|\\\\x[0-9A-Fa-f]{2}'
        + '|\\\\[0-3][0-7]{0,2}'
        + '|\\\\[0-7]{1,2}'
        + '|\\\\[\\s\\S]'
        + '|-'
        + '|[^-\\\\]', 'g' );
/** @type {RegExpCompat} */
var reNoMatchNamedGroup = new RegExpCompat( '\\\\[bdsw]', 'i' );
/** @type {RegExpCompat} */
var reParts = new RegExpCompat(
        '(?:'
        + '\\[(?:[^\\x5C\\x5D]|\\\\[\\s\\S])*\\]'  // a character set
        + '|\\\\u[A-Fa-f0-9]{4}'  // a unicode escape
        + '|\\\\x[A-Fa-f0-9]{2}'  // a hex escape
        + '|\\\\[0-9]+'  // a back-reference or octal escape
        + '|\\\\[^ux0-9]'  // other escape sequence
        + '|\\(\\?[:!=]'  // start of a non-capturing group
        + '|[\\(\\)\\^]'  // start/end of a group, or line start
        + '|[^\\x5B\\x5C\\(\\)\\^]+'  // run of other characters
        + ')', 'g');
/** @type {RegExpCompat} */
var reAlphabet = new RegExpCompat( '[a-zA-Z]', 'g' );

/**
 * Given a group of {@link RegExp}s, returns a {@code RegExp} that globally
 * matches the union of the sets of strings matched by the input RegExp.
 * Since it matches globally, if the input strings have a start-of-input
 * anchor (/^.../), it is ignored for the purposes of unioning.
 * 
 * {@link RegExp} 配列が与えられると、入力された RegExp で一致する
 * 文字列のセットの組合わせにグローバルに一致する {@code RegExp} を返します。
 * グローバルにマッチするので、入力文字列に入力開始アンカー（/^.../）があっても、
 * 結合の目的では無視されます。
 * 
 * @param {Array.<RegExp|RegExpCompat>} regexs non multiline, non-global regexs.
 * @return {RegExp|RegExpCompat} a global regex.
 */
combinePrefixPatterns = function( regexs ){
    var capturedGroupIndex = 0;

    var needToFoldCase = false;
    var ignoreCase = false;

    for( var i = 0, n = regexs.length; i < n; ++i ){
        var regex = regexs[ i ];
        if( regex.ignoreCase ){
            ignoreCase = true;
        } else if( reSmallAlphabet.test( reUnicode.replace( regex.source, '' ) ) ){
            needToFoldCase = true;
            ignoreCase = false;
            break;
        };
    };

    var escapeCharToCodeUnit = {
        'b': 8,
        't': 9,
        'n': 0xa,
        'v': 0xb,
        'f': 0xc,
        'r': 0xd
    };

    function decodeEscape( charsetPart ){
        var cc0 = charsetPart.charCodeAt( 0 );

        if( cc0 !== 92 /* \\ */){
            return cc0;
        };
        var c1 = charsetPart.charAt( 1 );
        cc0 = escapeCharToCodeUnit[ c1 ];
        if( cc0 ){
            return cc0;
        } else if( '0' <= c1 && c1 <= '7' ){
            return parseInt( charsetPart.substr( 1 ), 8 );
        } else if( c1 === 'u' || c1 === 'x' ){
            return parseInt( charsetPart.substr( 2 ), 16 );
        } else {
            return charsetPart.charCodeAt( 1 );
        };
    };

    function encodeEscape( charCode ){
        if( charCode < 0x20 ){
            return ( charCode < 0x10 ? '\\x0' : '\\x' ) + charCode.toString( 16 );
        };
        var ch = String.fromCharCode( charCode );

        return ( ch === '\\' || ch === '-' || ch === ']' || ch === '^' ) ? "\\" + ch : ch;
    };

    function caseFoldCharset( charSet ){
        var charsetParts = reCharsetParts.match( charSet.substring( 1, charSet.length - 1 ) );
        var ranges = [];
        var inverse = charsetParts[ 0 ] === '^';

        var out = [ '[' ];
        if( inverse ){ out[ 1 ] = '^'; };

        for( var i = inverse ? 1 : 0, n = charsetParts.length; i < n; ++i ){
            var p = charsetParts[ i ];

            if( reNoMatchNamedGroup.test( p ) ){ // Don't muck with named groups.
                out.push( p );
            } else {
                var start = decodeEscape( p );
                var end;
                if( i + 2 < n && '-' === charsetParts[ i + 1 ] ){
                    end = decodeEscape( charsetParts[ i + 2 ] );
                    i += 2;
                } else {
                    end = start;
                };
                ranges.push( [ start, end ] );
                // If the range might intersect letters, then expand it.
                // This case handling is too simplistic.
                // It does not deal with non-latin case folding.
                // It works for latin source code identifiers though.
                if( !( end < 65 || start > 122 ) ){
                    if( !( end < 65 || start > 90 ) ){
                        ranges.push( [ Math.max( 65, start ) | 32, Math.min( end, 90 ) | 32 ] );
                    };
                    if( !( end < 97 || start > 122 ) ){
                        ranges.push( [ Math.max( 97, start ) & ~32, Math.min( end, 122 ) & ~32 ] );
                    };
                };
            };
        };

        // [[1, 10], [3, 4], [8, 12], [14, 14], [16, 16], [17, 17]]
        // -> [[1, 12], [14, 14], [16, 17]]
        ranges.sort(
            function( a, b ){
                return ( a[ 0 ] - b[ 0 ] ) || ( b[ 1 ]  - a[ 1 ] );
            }
        );
        var consolidatedRanges = [];
        var lastRange = [];
        for( var i = 0; i < ranges.length; ++i ){
            var range = ranges[ i ];
            if( range[ 0 ] <= lastRange[ 1 ] + 1 ){
                lastRange[ 1 ] = Math.max( lastRange[ 1 ], range[ 1 ] );
            } else {
                consolidatedRanges.push( lastRange = range );
            };
        };

        for( var i = 0; i < consolidatedRanges.length; ++i ){
            var range = consolidatedRanges[ i ];
            out.push( encodeEscape( range[ 0 ] ) );
            if( range[ 1 ] > range[ 0 ] ){
                if( range[ 1 ] + 1 > range[ 0 ] ){
                    out.push('-');
                };
                out.push( encodeEscape( range[ 1 ] ) );
            };
        };
        out.push( ']' );
        return out.join( '' );
    };

    function allowAnywhereFoldCaseAndRenumberGroups( regex ){
        // Split into character sets, escape sequences, punctuation strings
        // like ('(', '(?:', ')', '^'), and runs of characters that do not
        // include any of the above.
        var parts = reParts.match( regex.source );
        var n = parts.length;

        // Maps captured group numbers to the number they will occupy in
        // the output or to -1 if that has not been determined, or to
        // undefined if they need not be capturing in the output.
        var capturedGroups = [];

        // Walk over and identify back references to build the capturedGroups
        // mapping.
        for( var i = 0, groupIndex = 0; i < n; ++i ){
            var p = parts[ i ];
            if( p === '(' ){
                // groups are 1-indexed, so max group index is count of '('
                ++groupIndex;
            } else if( '\\' === p.charAt( 0 ) ){
                var decimalValue = +p.substr( 1 );
                if( decimalValue ){
                    if( decimalValue <= groupIndex ){
                        capturedGroups[ decimalValue ] = -1;
                    } else {
                        // Replace with an unambiguous escape sequence so that
                        // an octal escape sequence does not turn into a backreference
                        // to a capturing group from an earlier regex.
                        parts[ i ] = encodeEscape( decimalValue );
                    };
                };
            };
        };

        // Renumber groups and reduce capturing groups to non-capturing groups
        // where possible.
        for( var i = 1; i < capturedGroups.length; ++i ){
            if( -1 === capturedGroups[ i ] ){
                capturedGroups[ i ] = ++capturedGroupIndex;
            };
        };
        for( var i = 0, groupIndex = 0; i < n; ++i ){
            var p = parts[ i ];
            if( p === '(' ){
                ++groupIndex;
                if( !capturedGroups[ groupIndex ] ){
                    parts[ i ] = '(?:';
                };
            } else if( '\\' === p.charAt( 0 ) ){
                var decimalValue = +p.substr( 1 );
                if( decimalValue && decimalValue <= groupIndex ){
                    parts[ i ] = '\\' + capturedGroups[ decimalValue ];
                };
            };
        };

        // Remove any prefix anchors so that the output will match anywhere.
        // ^^ really does mean an anchored match though.
        for( var i = 0; i < n; ++i ){
            if( '^' === parts[ i ] && '^' !== parts[ i + 1 ] ){
                parts[ i ] = '';
            };
        };

        // Expand letters to groups to handle mixing of case-sensitive and
        // case-insensitive patterns if necessary.
        if( regex.ignoreCase && needToFoldCase ){
            for( var i = 0; i < n; ++i ){
                var p = parts[ i ];
                var ch0 = p.charAt( 0 );
                if( p.length >= 2 && ch0 === '[' ){
                    parts[ i ] = caseFoldCharset( p );
                } else if( ch0 !== '\\' ){
                    // TODO: handle letters in numeric escapes.
                    parts[ i ] = reAlphabet.replace(
                            p,
                            function( ch ){
                                var cc = ch.charCodeAt( 0 );
                                return '[' + String.fromCharCode( cc & ~32, cc | 32 ) + ']';
                            }
                        );
                };
            };
        };
        return parts.join( '' );
    };

    var rewritten = [];
    for( var i = 0, n = regexs.length; i < n; ++i ){
        var regex = regexs[ i ];
        if( !DEFINE_CODE_PRETTIFY__ECMASCRIPT2 ){
            if( regex.global || regex.multiline ){
                throw new Error( '' + regex );
            };
        };
        rewritten.push( '(?:' + allowAnywhereFoldCaseAndRenumberGroups( regex ) + ')' );
    };
    return new RegExpCompat( rewritten.join( '|' ), ignoreCase ? 'gi' : 'g' );
};