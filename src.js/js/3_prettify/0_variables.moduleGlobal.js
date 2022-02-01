 /**
  * Split {@code prettyPrint} into multiple timeouts so as not to interfere with
  * UI events.
  * If set to {@code false}, {@code prettyPrint()} is synchronous.
  */
var PR_SHOULD_USE_CONTINUATION = true;
 
/** @type {Object.<string,JobT>} Maps language-specific file extensions to handlers. */
var langHandlerRegistry = {};

/**
  * Pretty print a chunk of code.
  * @param {string} sourceCodeHtml The HTML to pretty print.
  * @param {string} opt_langExtension The language name to use.
  *     Typically, a filename extension like 'cpp' or 'java'.
  * @param {number|boolean} opt_numberLines True to number lines,
  *     or the 1-indexed number of the first line in sourceCodeHtml.
  * @return {string} code as html, but prettier
  */
var prettyPrintOne;

/**
  * Find all the {@code <pre>} and {@code <code>} tags in the DOM with
  * {@code class=prettyprint} and prettify them.
  *
  * @param {Function} opt_whenDone called when prettifying is done.
  * @param {HTMLElement|HTMLDocument} opt_root an element or document
  *   containing all the elements to pretty print.
  *   Defaults to {@code document.body}.
  */
var prettyPrint;

var combinePrefixPatterns;

/**
 * @param {*} test
 * @return {boolean}
 */
function m_isString( test ){
    return test === '' + test;
};