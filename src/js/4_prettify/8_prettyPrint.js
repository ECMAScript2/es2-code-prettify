/**
 * Given an element, if it contains only one child element and any text nodes
 * it contains contain only space characters, return the sole child element.
 * Otherwise returns undefined.
 * <p>
 * This is meant to return the CODE element in {@code <pre><code ...>} when
 * there is a single child element that contains all the non-space textual
 * content, but not to return anything where there are multiple child elements
 * as in {@code <pre><code>...</code><code>...</code></pre>} or when there
 * is textual content.
 */
function childContentWrapper( element ){
    var wrapper;

    for( var c = element.firstChild; c; c = c.nextSibling ){
        var type = c.nodeType;
        wrapper = ( type === 1 )  // Element Node
            ? ( wrapper ? element : c )
            : ( type === 3 )  // Text Node
            ? ( m_reNotWhiteSpace.test( c.nodeValue ) ? element : wrapper )
            : wrapper;
    };
    return wrapper === element ? undefined : wrapper;
};

var prettifyElements = [];

var prettifyElementTotal;

if( DEFINE_CODE_PRETTIFY__DEBUG ){
    m_benchmark.readyTime = m_getCurrentTime() - m_startTime;
};

p_listenCssAvailabilityChange( function( cssAvailability ){
    if( !cssAvailability ) return;

    // fetch a list of nodes to rewrite
    var codeSegments = [
                            p_DOM_getElementsByTagNameFromDocument( 'pre' ),
                            p_DOM_getElementsByTagNameFromDocument( 'code' ),
                            p_DOM_getElementsByTagNameFromDocument( 'xmp' )
                       ];

    for( var i = 0; i < codeSegments.length; ++i ){
        for( var j = 0, n = codeSegments[ i ].length; j < n; ++j ){
            m_prettifyElement( codeSegments[ i ][ j ] );
        };
    };
    return true;
} );

m_prettifyElement = function( codeSegment ){
    prettifyElements.push( codeSegment );
    prettifyElementTotal = prettifyElements.length;

    if( prettifyElementTotal === 1 ){
        if( USE_REGEXPCOMPAT ){
            p_setTimer( m_loadRegExpCompat );
        } else {
            p_setTimer( m_applyPrettifyElementOne );
        };
    };
};

    // The loop is broken into a series of continuations to make sure that we
    // don't make the browser unresponsive when rewriting a large page.
    m_applyPrettifyElementOne = function(){
        if( currentJob ) return;

        function getAttributeValueFromClassName( className, attr ){
            return ( className.split( attr )[ 1 ] || ''  ).split( ' ' )[ 0 ];
        };

        if( prettifyElementTotal !== prettifyElements.length ){
            if( DEFINE_CODE_PRETTIFY__DEBUG || DEFINE_CODE_PRETTIFY__EXPORT_PR_OBJECT ){
                m_completeOneHandler && m_completeOneHandler( prettifyElementTotal - prettifyElements.length, prettifyElementTotal );
            };
        };

        var codeSegment = prettifyElements.shift();

        if( !codeSegment ){
            if( DEFINE_CODE_PRETTIFY__DEBUG ){
                m_completeAllHandler && m_completeAllHandler( m_benchmark );
            } else if( DEFINE_CODE_PRETTIFY__EXPORT_PR_OBJECT ){
                m_completeAllHandler && m_completeAllHandler();
            };
            return;
        };

        if( DEFINE_CODE_PRETTIFY__DEBUG ){
            m_startTime = m_getCurrentTime();
        };

        var EMPTY = {};

        // Look for a preceding comment like
        // <?prettify lang="..." linenums="..."?>
        if( DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT ){
            var attrs = EMPTY;

            for( var preceder = codeSegment; preceder = preceder.previousSibling; ){
                var nt = preceder.nodeType;
                // <?foo?> is parsed by HTML 5 to a comment node (8)
                // like <!--?foo?-->, but in XML is a processing instruction
                var value = ( nt === 7 || nt === 8 ) && preceder.nodeValue;
                if( value
                    ? !m_reCommentLike.test( value )
                    : ( nt !== 3 || m_reNotWhiteSpace.test( preceder.nodeValue ) ) ){
                    // Skip over white-space text nodes but not others.
                    break;
                };
                if( value ){
                    attrs = {};
                    value.replace(
                        m_reCorrectCommentAttrValue,
                        function( _, name, value ){
                            attrs[ name ] = value;
                        }
                    );
                    break;
                };
            };
        };

        if( ( DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT && attrs !== EMPTY )
            || p_DOM_hasClassName( codeSegment, 'prettyprint' )
            // Don't redo this if we've already done it.
            // This allows recalling pretty print to just prettyprint elements
            // that have been added to the page since last call.
            && !p_DOM_hasClassName( codeSegment, 'prettyprinted' )
        ){
            // make sure this is not nested in an already prettified element
            var nested = false;
            for( var p = codeSegment.parentNode; p !== p_body; p = p.parentNode ){
                var tn = p_DOM_getTagName( p );
                if( ( tn === 'PRE' || tn === 'XMP' || tn === 'CODE' ) && p_DOM_hasClassName( p, 'prettyprint' ) ){
                    nested = true;
                    break;
                };
            };
            if( !nested ){
                var className = codeSegment.className;
                // Mark done.  If we fail to prettyprint for whatever reason,
                // we shouldn't try again.
                p_DOM_addClassName( codeSegment, 'prettyprinted' );

                // If the classes includes a language extensions, use it.
                // Language extensions can be specified like
                //     <pre class="prettyprint lang-cpp">
                // the language extension "cpp" is used to find a language handler
                // as passed to PR.registerLangHandler.
                // HTML5 recommends that a language be specified using "language-"
                // as the prefix instead.  Google Code Prettify supports both.
                // http://dev.w3.org/html5/spec-author-view/the-code-element.html
                var langExtension = DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT ? attrs[ 'lang' ] : false;

                if( !langExtension ){
                    langExtension = getAttributeValueFromClassName( className, 'lang-' ) || getAttributeValueFromClassName( className, 'language-' );
                    // Support <pre class="prettyprint"><code class="language-c">
                    var wrapper;
                    if( !langExtension && ( wrapper = childContentWrapper( codeSegment ) )
                        && p_DOM_getTagName( wrapper ) === 'CODE'
                    ){
                        langExtension = getAttributeValueFromClassName( wrapper.className, 'lang-' ) || getAttributeValueFromClassName( wrapper.className, 'language-' );
                    };
                };

                var preformatted;
                var tn = p_DOM_getTagName( codeSegment );
                if( tn === 'PRE' || tn === 'XMP' ){
                    preformatted = 1;
                } else {
                    var currentStyle = codeSegment[ 'currentStyle' ];
                    var defaultView = document.defaultView;
                    var whitespace = (
                            currentStyle
                            ? currentStyle[ 'whiteSpace' ]
                            : ( defaultView && defaultView.getComputedStyle )
                            ? defaultView.getComputedStyle( codeSegment, null ).getPropertyValue( 'white-space' )
                            : 0
                        );
                    preformatted = whitespace && 'pre' === whitespace.substr( 0, 3 );
                };

                if( DEFINE_CODE_PRETTIFY__NUMBER_LINE_SUPPORT ){
                    // Look for a class like linenums or linenums:<n> where <n> is the
                    // 1-indexed number of the first line.
                    var lineNums = DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT ? attrs[ 'linenums' ] : false;
                    if( !( lineNums = lineNums === 'true' || +lineNums ) ){
                        lineNums = getAttributeValueFromClassName( className, 'linenums:' ) || p_DOM_hasClassName( codeSegment, 'linenums' );
                        lineNums = lineNums.length ? +lineNums : lineNums;
                    };
                    if( lineNums ){
                        m_numberLines( codeSegment, lineNums, preformatted );
                    };
                };

                currentJob = {
                    langExtension : /** @type {string} */ (langExtension),
                    sourceNode    : codeSegment,
                    numberLines   : lineNums,
                    pre           : preformatted,
                    basePos       : 0,
                    pos           : 0,
                    styleCache    : {},
                    decorations   : []
                };

                if( DEFINE_CODE_PRETTIFY__DEBUG ){
                    m_benchmark.codeBlocks.push(
                        {
                            elm           : codeSegment,
                            lang          : langExtension,
                            readyTime     : ( m_getCurrentTime() - m_startTime ),
                            decorateTime  : 0,
                            decorateCount : 0,
                            updateDOMTime : 0
                        }
                    );
                };
                m_graduallyPrettify( m_applyDecorator );
                return;
            };
        };
        // finish up in a continuation
        m_graduallyPrettify( m_applyPrettifyElementOne, undefined, 0, true );
    };