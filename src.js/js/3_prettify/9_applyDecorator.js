/** @param {JobT} job */
function applyDecorator( job ){
    var opt_langExtension = job.langExtension;

    //try {
        // Extract tags, and convert the source code to plain text.
        var sourceAndSpans = extractSourceSpans( job.sourceNode, job.pre );
        /** Plain text. @type {string} */
        var source = sourceAndSpans.sourceCode;
        job.sourceCode = source;
        job.spans = sourceAndSpans.spans;
        job.basePos = 0;

        // Apply the appropriate language handler
        var simpleLexer = getSimpleLexer( opt_langExtension, source );
        decorate( job, simpleLexer );

        // Integrate the decorations and tags back into the source code,
        // modifying the sourceNode in place.
        recombineTagsAndDecorations( job );
    /* } catch( e ){
        if( window[ 'console' ] ){
            console['log'](e && e['stack'] || e);
        };
    }; */
};

var reIsMarkup = RegExpProxy( "^\\s*<" );

/**
 * @param {string|null} extension
 * @param {string} source 
 * @returns {SimpleLexer}
 */
function getSimpleLexer( extension, source ){
    if( !( extension && simpleLexerRegistry[ extension ] ) ){
      // Treat it as markup if the first non whitespace character is a < and
      // the last non-whitespace character is a >.
      extension = reIsMarkup.test( source )
          ? 'default-markup'
          : 'default-code';
    };
    return simpleLexerRegistry[ extension ];
};

/**
 * @param {JobT} job
 * @param {SimpleLexer} simpleLexer
 */
function decorate( job, simpleLexer ){
    var shortcuts = /** @type {Object<string,StylePattern>} */ (simpleLexer[ 0 ]);
    var tokenizer = /** @type {RegExp|RegExpCompat} */ (simpleLexer[ 1 ]);
    var fallthroughStylePatterns = /** @type {Array.<StylePattern>} */ (simpleLexer[ 2 ]);
    var sourceCode = job.sourceCode, basePos = job.basePos;
    var sourceNode = job.sourceNode;
    /** Even entries are positions in source in ascending order.  Odd enties
      * are style markers (e.g., PR_COMMENT) that run from that position until
      * the end.
      * @type {DecorationsT}
      */
    var decorations = [ basePos, PR_PLAIN ];
    var pos = 0;  // index into sourceCode
    var tokens = RegExpProxy_match( tokenizer, sourceCode ) || [];
    var styleCache = {};

    for( var ti = 0, nTokens = tokens.length; ti < nTokens; ++ti ){
        var token = tokens[ ti ];
        var style = styleCache[ token ];
        var match = undefined;

        var isEmbedded;
        if( m_isString( style ) ){
            isEmbedded = false;
        } else {
            var patternParts = shortcuts[ token.charAt( 0 ) ];
            if( patternParts ){
                match = RegExpProxy_match( /** @type {RegExp|RegExpCompat} */ (patternParts[ 1 ]), token );
                style = patternParts[ 0 ];
            } else {
                for( var i = 0, l = fallthroughStylePatterns.length; i < l; ++i ){
                    patternParts = fallthroughStylePatterns[ i ];
                    match = RegExpProxy_match( /** @type {RegExp|RegExpCompat} */ (patternParts[ 1 ]), token );
                    if( match ){
                        style = patternParts[ 0 ];
                        break;
                    };
                };

                if( !match ){ // make sure that we make progress
                    style = PR_PLAIN;
                };
            };

            isEmbedded = 5 <= style.length && 'lang-' === style.substr( 0, 5 );
            if( isEmbedded && !( match && m_isString( match[ 1 ] ) ) ){
                isEmbedded = false;
                style = PR_SOURCE;
            };

            if( !isEmbedded ){
                styleCache[ token ] = style;
            };
        };

        var tokenStart = pos;
        pos += token.length;

        if( !isEmbedded ){
            decorations.push( basePos + tokenStart, style );
        } else {  // Treat group 1 as an embedded block of source code.
            var embeddedSource = match[ 1 ];
            var embeddedSourceStart = token.indexOf( embeddedSource );
            var embeddedSourceEnd = embeddedSourceStart + embeddedSource.length;
            if( match[ 2 ] ){
                // If embeddedSource can be blank, then it would match at the
                // beginning which would cause us to infinitely recurse on the
                // entire token, so we catch the right context in match[2].
                embeddedSourceEnd = token.length - match[ 2 ].length;
                embeddedSourceStart = embeddedSourceEnd - embeddedSource.length;
            };
            var lang = style.substr( 5 );
            // Decorate the left of the embedded source
            appendDecorations(
                sourceNode,
                basePos + tokenStart,
                token.substr( 0, embeddedSourceStart ),
                simpleLexer, decorations
            );
            // Decorate the embedded source
            appendDecorations(
                sourceNode,
                basePos + tokenStart + embeddedSourceStart,
                embeddedSource,
                getSimpleLexer( lang, embeddedSource ), decorations
            );
            // Decorate the right of the embedded section
            appendDecorations(
                sourceNode,
                basePos + tokenStart + embeddedSourceEnd,
                token.substr( embeddedSourceEnd ),
                simpleLexer, decorations
            );
        };
    };
    job.decorations = decorations;
};

/**
 * Apply the given language handler to sourceCode and add the resulting
 * decorations to out.
 * @param {!Element} sourceNode
 * @param {number} basePos the index of sourceCode within the chunk of source
 *    whose decorations are already present on out.
 * @param {string} sourceCode
 * @param {SimpleLexer} simpleLexer
 * @param {DecorationsT} out
 */
function appendDecorations( sourceNode, basePos, sourceCode, simpleLexer, out ){
    if( sourceCode ){
        /** @type {JobT} */
        var job = {
                sourceNode    : sourceNode,
                pre           : 1,
                langExtension : null,
                numberLines   : null,
                sourceCode    : sourceCode,
                spans         : null,
                basePos       : basePos,
                decorations   : null
            };
        decorate( job, simpleLexer );

        var decorations = job.decorations;

        if( decorations ){
            for( var i = 0, l = decorations.length; i < l; ++i ){
                out.push( decorations[ i ] );
            };
        };
    };
};