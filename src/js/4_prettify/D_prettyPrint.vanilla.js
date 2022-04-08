var notWs = RegExpProxy( '\\S' );

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
    var wrapper = undefined;

    for( var c = element.firstChild; c; c = c.nextSibling ){
        var type = c.nodeType;
        wrapper = ( type === 1 )  // Element Node
            ? ( wrapper ? element : c )
            : ( type === 3 )  // Text Node
            ? ( RegExpProxy_test( notWs, c.nodeValue ) ? element : wrapper )
            : wrapper;
    };
    return wrapper === element ? undefined : wrapper;
};

/**
 * Pretty print a chunk of code.
 * @param {string} sourceCodeHtml The HTML to pretty print.
 * @param {string=} opt_langExtension The language name to use.
 *     Typically, a filename extension like 'cpp' or 'java'.
 * @param {number|boolean=} opt_numberLines True to number lines,
 *     or the 1-indexed number of the first line in sourceCodeHtml.
 * @return {string}
 */
function $prettyPrintOne( sourceCodeHtml, opt_langExtension, opt_numberLines ){
    /** @type{number|boolean} */
    var nl = opt_numberLines || false;
    /** @type{string|null} */
    var langExtension = opt_langExtension || null;
    /** @type{!Element} */
    var container = document.createElement( 'div' );
    // This could cause images to load and onload listeners to fire.
    // E.g. <img onerror="alert(1337)" src="nosuchimage.png">.
    // We assume that the inner HTML is from a trusted source.
    // The pre-tag is required for IE8 which strips newlines from innerHTML
    // when it is injected into a <pre> tag.
    // http://stackoverflow.com/questions/451486/pre-tag-loses-line-breaks-when-setting-innerhtml-in-ie
    // http://stackoverflow.com/questions/195363/inserting-a-newline-into-a-pre-tag-ie-javascript
    container.innerHTML = '<pre>' + sourceCodeHtml + '</pre>';
    container = /** @type{!Element} */( container.firstChild );
    if( nl ){
        numberLines( container, nl, true );
    };

    currentJob = {
        langExtension : /** @type {string} */ (langExtension),
        sourceNode    : container,
        numberLines   : nl,
        pre           : 1,
        basePos       : 0,
        pos           : 0,
        styleCache    : {},
        decorations   : []
    };
    applyDecorator();
    return container.innerHTML;
};

if( DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT ){
    /** @type {RegExp|RegExpCompat} */
    var reCommentLike = RegExpProxy(  "^\\??prettify\\b" );
    /** @type {RegExp|RegExpCompat} */
    var reCorrectCommentAttrValue = RegExpProxy( "\\b(\\w+)=([\\w:.%+-]+)", 'g' );
};

var prettifyElements = [];

var prettifyElementTotal;

if( DEFINE_CODE_PRETTIFY__DEBUG ){
    benchmark.readyTime = m_getCurrentTime() - m_startTime;
};

/**
  * Find all the {@code <pre>} and {@code <code>} tags in the DOM with
  * {@code class=prettyprint} and prettify them.
  *
  *   containing all the elements to pretty print.
  *   Defaults to {@code document.body}.
  */
function prettyPrint(){
    var root = document.body;

    function byTagName( tn ){
        return root.getElementsByTagName( tn );
    };
    // fetch a list of nodes to rewrite
    var codeSegments = [ byTagName( 'pre' ), byTagName( 'code' ), byTagName( 'xmp' ) ];

    for( var i = 0; i < codeSegments.length; ++i ){
        for( var j = 0, n = codeSegments[ i ].length; j < n; ++j ){
            prettifyElements.push( codeSegments[ i ][ j ] );
        };
    };
    prettifyElementTotal = prettifyElements.length;
    p_setTimer( applyPrettifyElementOne );
};

    // The loop is broken into a series of continuations to make sure that we
    // don't make the browser unresponsive when rewriting a large page.
    function applyPrettifyElementOne(){
        if( currentJob ) return;

        function getAttributeValueFromClassName( className, attr ){
            return ( className.split( attr )[ 1 ] || ''  ).split( ' ' )[ 0 ];
        };

        if( DEFINE_CODE_PRETTIFY__DEBUG && prettifyElementTotal !== prettifyElements.length ){
            completeOneHandler && completeOneHandler( prettifyElementTotal - prettifyElements.length, prettifyElementTotal );
        };

        var codeSegment = prettifyElements.shift();

        if( !codeSegment ){
            if( DEFINE_CODE_PRETTIFY__DEBUG ){
                completeHandler && completeHandler( benchmark );
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
                    ? !RegExpProxy_test( reCommentLike, value )
                    : ( nt !== 3 || RegExpProxy_test( notWs, preceder.nodeValue ) ) ){
                    // Skip over white-space text nodes but not others.
                    break;
                };
                if( value ){
                    attrs = {};
                    RegExpProxy_replace(
                        reCorrectCommentAttrValue,
                        value,
                        function( _, name, value ){
                            attrs[ name ] = value;
                        }
                    );
                    break;
                };
            };
        };

        var className = codeSegment.className;
        if( ( DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT && attrs !== EMPTY )
            || 0 <= ( ' ' + className + ' ' ).indexOf( ' prettyprint ' )
            // Don't redo this if we've already done it.
            // This allows recalling pretty print to just prettyprint elements
            // that have been added to the page since last call.
            && ( ' ' + className + ' ' ).indexOf( ' prettyprinted ' ) === -1
        ){

            // make sure this is not nested in an already prettified element
            var nested = false;
            for( var p = codeSegment.parentNode; p; p = p.parentNode ){
                var tn = p.tagName;
                if( tn // <!DOCTYPE> で undefined -> RegExpCompat でエラー
                    && ( tn.toLowerCase() === 'pre' || tn.toLowerCase() === 'xmp' || tn.toLowerCase() === 'code' )
                    && p.className && 0 <= ( ' ' + p.className + ' ' ).indexOf( ' prettyprint ' )
                ){
                    nested = true;
                    break;
                };
            };
            if( !nested ){
                // Mark done.  If we fail to prettyprint for whatever reason,
                // we shouldn't try again.
                codeSegment.className += ' prettyprinted';

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
                        && wrapper.tagName.toLowerCase() === 'code'
                    ){
                        langExtension = getAttributeValueFromClassName( wrapper.className, 'lang-' ) || getAttributeValueFromClassName( wrapper.className, 'language-' );
                    };
                };

                var preformatted;
                if( codeSegment.tagName.toLowerCase() === 'pre' || codeSegment.tagName.toLowerCase() === 'xmp' ){
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
                        lineNums = getAttributeValueFromClassName( className, 'linenums:' ) || !!( ' ' + className + ' ' ).match( ' linenums ' );
                        lineNums = lineNums.length ? +lineNums : lineNums;
                    };
                    if( lineNums ){
                        numberLines( codeSegment, lineNums, preformatted );
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
                    benchmark.codeBlocks.push(
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
                m_graduallyPrettify( applyDecorator );
            };
        };
        // finish up in a continuation
        m_graduallyPrettify( applyPrettifyElementOne, undefined, 0, true );
    };
