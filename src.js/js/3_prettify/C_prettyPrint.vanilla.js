var notWs = new RegExpCompat( '\\S' );

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
            ? ( notWs.test( c.nodeValue ) ? element : wrapper )
            : wrapper;
    };
    return wrapper === element ? undefined : wrapper;
};

/**
 * Pretty print a chunk of code.
 * @param sourceCodeHtml {string} The HTML to pretty print.
 * @param opt_langExtension {string} The language name to use.
 *     Typically, a filename extension like 'cpp' or 'java'.
 * @param opt_numberLines {number|boolean} True to number lines,
 *     or the 1-indexed number of the first line in sourceCodeHtml.
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

    /** @type{JobT} */
    var job = {
        langExtension : langExtension,
        numberLines   : nl,
        sourceNode    : container,
        pre           : 1,
        sourceCode    : '',
        basePos       : null,
        spans         : null,
        decorations   : null
    };
    applyDecorator( job );
    return container.innerHTML;
};

var reCommentLike = new RegExpCompat(  "^\\??prettify\\b" );
var reCorrectCommentAttrValue = new RegExpCompat( "\\b(\\w+)=([\\w:.%+-]+)", 'g' );

/**
  * Find all the {@code <pre>} and {@code <code>} tags in the DOM with
  * {@code class=prettyprint} and prettify them.
  *
  * @param {Function} opt_whenDone called when prettifying is done.
  * @param {HTMLElement|HTMLDocument} opt_root an element or document
  *   containing all the elements to pretty print.
  *   Defaults to {@code document.body}.
  */
function $prettyPrint( opt_whenDone, opt_root ){
    var root = opt_root || document.body;
    var doc = root.ownerDocument || document;
    function byTagName( tn ){
        return root.getElementsByTagName( tn );
    };
    // fetch a list of nodes to rewrite
    var codeSegments = [ byTagName( 'pre' ), byTagName( 'code' ), byTagName( 'xmp' ) ];
    var elements = [];

    for( var i = 0; i < codeSegments.length; ++i ){
        for( var j = 0, n = codeSegments[ i ].length; j < n; ++j ){
            elements.push( codeSegments[ i ][ j ] );
        };
    };
    codeSegments = null;

    var clock = Date;
    if( !clock.now ){
        clock = { 'now': function(){ return new Date - 0; } };
    };

    // The loop is broken into a series of continuations to make sure that we
    // don't make the browser unresponsive when rewriting a large page.
    var k = 0;

    var EMPTY = {};

    function doWork(){
        var endTime = window[ 'PR_SHOULD_USE_CONTINUATION' ] ? clock.now() + 250 /* ms */ : Infinity;

        function getAttributeValueFromClassName( className, attr ){
            return ( className.split( attr )[ 1 ] || ''  ).split( ' ' )[ 0 ];
        };

        for( ; k < elements.length && clock.now() < endTime; ++k ){
            var codeSegment = elements[ k ];

            // Look for a preceding comment like
            // <?prettify lang="..." linenums="..."?>
            var attrs = EMPTY;

            for( var preceder = codeSegment; preceder = preceder.previousSibling; ){
                var nt = preceder.nodeType;
                // <?foo?> is parsed by HTML 5 to a comment node (8)
                // like <!--?foo?-->, but in XML is a processing instruction
                var value = ( nt === 7 || nt === 8 ) && preceder.nodeValue;
                if( value
                    ? !reCommentLike.test( value )
                    : ( nt !== 3 || notWs.test( preceder.nodeValue ) ) ){
                    // Skip over white-space text nodes but not others.
                    break;
                };
                if( value ){
                    attrs = {};
                    reCorrectCommentAttrValue.replace(
                        value,
                        function( _, name, value ){
                            attrs[ name ] = value;
                        }
                    );
                    break;
                };
            };

            var className = codeSegment.className;
            if( ( attrs !== EMPTY || 0 <= ( ' ' + className + ' ' ).indexOf( ' prettyprint ' ) )
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
                    var langExtension = attrs[ 'lang' ];
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
                        var defaultView = doc.defaultView;
                        var whitespace = (
                                currentStyle
                                ? currentStyle[ 'whiteSpace' ]
                                : ( defaultView && defaultView.getComputedStyle )
                                ? defaultView.getComputedStyle( codeSegment, null ).getPropertyValue( 'white-space' )
                                : 0
                            );
                        preformatted = whitespace && 'pre' === whitespace.substr( 0, 3 );
                    };

                    // Look for a class like linenums or linenums:<n> where <n> is the
                    // 1-indexed number of the first line.
                    var lineNums = attrs[ 'linenums' ];
                    if( !( lineNums = lineNums === 'true' || +lineNums ) ){
                        lineNums = getAttributeValueFromClassName( className, 'linenums:' ) || !!( ' ' + className + ' ' ).match( ' linenums ' );
                        lineNums = lineNums.length ? +lineNums : lineNums;
                    };
                    if( lineNums ){
                        numberLines( codeSegment, lineNums, preformatted );
                    };

                    // do the pretty printing
                    var prettyPrintingJob = {
                        langExtension : langExtension,
                        sourceNode    : codeSegment,
                        numberLines   : lineNums,
                        pre           : preformatted,
                        sourceCode    : '',
                        basePos       : null,
                        spans         : null,
                        decorations   : null
                    };
                    applyDecorator( prettyPrintingJob );
                };
            };
        };
        if( k < elements.length ){
            // finish up in a continuation
            setTimeout( doWork, 250 );
        } else if( 'function' === typeof opt_whenDone ){
            opt_whenDone();
        };
    };

    doWork();
};
