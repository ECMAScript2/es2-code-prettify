
function applyDecorator(){
    var job = /** @type {!JobT} */ (currentJob);
    var opt_langExtension = job.langExtension;
    
    // TODO ie4dom

    // Extract tags, and convert the source code to plain text.
    var sourceAndSpans = extractSourceSpans( job.sourceNode, job.pre );
    /** Plain text. @type {string} */
    var source = job.sourceCode = sourceAndSpans.sourceCode;
                 job.spans      = sourceAndSpans.spans;
    // job.basePos = 0;
    if( !unzipSimpleLexer( /** @type {string} */ (opt_langExtension), source ) ){
        currentJob = undefined;
        // finish up in a continuation
        m_graduallyPrettify( applyPrettifyElementOne );
    };
};

var reIsMarkup = RegExpProxy( "^\\s*<" );

/**
 * @param {string|undefined} extension
 * @param {string} source
 * @returns {boolean}
 */
function unzipSimpleLexer( extension, source ){
    if( !extension || !simpleLexerRegistry[ extension ] ){
      // Treat it as markup if the first non whitespace character is a < and
      // the last non-whitespace character is a >.
      extension = RegExpProxy_test( reIsMarkup, source )
          ? 'default-markup'
          : 'default-code';
    };
    var existSimpleLexer = !!simpleLexerRegistry[ extension ];

    if( existSimpleLexer ){
        m_graduallyPrettify( unzipOptimaizedSimpleLexer, extension, 0, true );
    };
    return existSimpleLexer;
};

function tokenize(){
    var job         = currentJob;
    var simpleLexer = job.simpleLexer;
    var tokenizer   = /** @type {RegExp|RegExpCompat} */ (simpleLexer[ 1 ]);
    var sourceCode  = /** @type {string} */ (job.sourceCode);

    job.tokens = RegExpProxy_match( tokenizer, sourceCode ) || [];

    job.decorations.push( job.basePos, PR_PLAIN );

    m_graduallyPrettify( decorate, undefined, TASK_IS_DECORATE );
};

function decorate(){
    var job         = currentJob;
    var simpleLexer = /** @type {!SimpleLexer} */ (job.simpleLexer);
    var shortcuts   = /** @type {!Object<string,StylePattern>} */ (simpleLexer[ 0 ]);
    var fallthroughStylePatterns = /** @type {!Array.<!StylePattern>} */ (simpleLexer[ 2 ]);
    var basePos     = job.basePos;
    /** Even entries are positions in source in ascending order.  Odd enties
      * are style markers (e.g., PR_COMMENT) that run from that position until
      * the end.
      */
    var decorations = /** @type {!DecorationsT} */ (job.decorations);
    var token       = job.tokens.shift();
    var styleCache  = job.styleCache;

    if( token ){
        var style = styleCache[ token ];
        var match;

        var isEmbedded;
        if( m_isString( style ) ){
            // isEmbedded = false;
        } else {
            var stylePattern = shortcuts[ token.charAt( 0 ) ];
            if( stylePattern ){
                match = RegExpProxy_match( /** @type {RegExp|RegExpCompat} */ (stylePattern[ 1 ]), token );
                style = /** @type {string} */ (stylePattern[ 0 ]);
            } else {
                style = PR_PLAIN; // make sure that we make progress

                for( var i = -1; stylePattern = fallthroughStylePatterns[ ++i ]; ){
                    match = RegExpProxy_match( /** @type {RegExp|RegExpCompat} */ (stylePattern[ 1 ]), token );
                    if( match ){
                        style = /** @type {string} */ (stylePattern[ 0 ]);
                        break;
                    };
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


        var tokenStart  = job.pos; // index into sourceCode;
        var tokenLength = token.length;
        job.pos += tokenLength;

        if( !isEmbedded ){
            decorations.push( basePos + tokenStart, style );
            m_graduallyPrettify( decorate, undefined, TASK_IS_DECORATE );
        } else {  // Treat group 1 as an embedded block of source code.
            var embeddedSource       = match[ 1 ];
            var embeddedSourceStart  = token.indexOf( embeddedSource );
            var embeddedSourceLength = embeddedSource.length;
            var embeddedSourceEnd    = embeddedSourceStart + embeddedSourceLength;
            var nextTaskIsUnzipSimpleLexer;

            if( match[ 2 ] ){
                // If embeddedSource can be blank, then it would match at the
                // beginning which would cause us to infinitely recurse on the
                // entire token, so we catch the right context in match[2].
                embeddedSourceEnd   = tokenLength - match[ 2 ].length;
                embeddedSourceStart = embeddedSourceEnd - embeddedSourceLength;
            };
            var lang = style.substr( 5 );
            // Decorate the left of the embedded source
            appendChildJob(
                basePos + tokenStart,
                token.substr( 0, embeddedSourceStart ),
                simpleLexer
            );
            if( embeddedSourceLength && unzipSimpleLexer( lang, embeddedSource ) ){
                // Decorate the embedded source
                appendChildJob(
                    basePos + tokenStart + embeddedSourceStart,
                    embeddedSource
                );
                nextTaskIsUnzipSimpleLexer = true;
            };
            // Decorate the right of the embedded section
            appendChildJob(
                basePos + tokenStart + embeddedSourceEnd,
                token.substr( embeddedSourceEnd ),
                simpleLexer
            );

            if( job.childJobs ){
                currentJob = job.childJobs.shift();
            };
            if( !nextTaskIsUnzipSimpleLexer ){
                if( currentJob !== job ){
                    m_graduallyPrettify( tokenize, undefined, TASK_IS_DECORATE );
                } else {
                    m_graduallyPrettify( decorate, undefined, TASK_IS_DECORATE );
                };
            };
        };
    } else {
        if( !job.parentJob ){
            m_graduallyPrettify( recombineTagsAndDecorations, job, TASK_IS_DECORATE );
        } else {
            currentJob = job.parentJob.childJobs.shift();
            if( currentJob ){
                m_graduallyPrettify( tokenize, undefined, TASK_IS_DECORATE );
            } else {
                currentJob = job.parentJob;
                m_graduallyPrettify( decorate, undefined, TASK_IS_DECORATE );
            };
        };
    };
    /**
     * Apply the given language handler to sourceCode and add the resulting
     * decorations to out.
     * @param {number} basePos the index of sourceCode within the chunk of source
     *    whose decorations are already present on out.
     * @param {string} sourceCode
     * @param {SimpleLexer=} simpleLexer
     */
    function appendChildJob( basePos, sourceCode, simpleLexer ){
        if( sourceCode ){
            job.childJobs = job.childJobs || [];
            job.childJobs.push(
                /** @type {JobT} */
                ({

                    parentJob   : job,
                    sourceNode  : job.sourceNode,
                    pre         : 1,
                    decorations : decorations,
                    basePos     : basePos,
                    sourceCode  : sourceCode,
                    simpleLexer : simpleLexer,
                    styleCache  : {},
                    pos         : 0
                })
            );
        };
    };
};