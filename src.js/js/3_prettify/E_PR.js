/** Contains functions for creating and registering new language handlers.
 * @type {{
 *   createSimpleLexer: function (Array, Array): SimpleLexer,
 *   registerLangHandler: function (SimpleLexer, Array.<string>),
 *   sourceDecorator: function (Object): SimpleLexer,
 *   PR_ATTRIB_NAME: string,
 *   PR_ATTRIB_VALUE: string,
 *   PR_COMMENT: string,
 *   PR_DECLARATION: string,
 *   PR_KEYWORD: string,
 *   PR_LITERAL: string,
 *   PR_NOCODE: string,
 *   PR_PLAIN: string,
 *   PR_PUNCTUATION: string,
 *   PR_SOURCE: string,
 *   PR_STRING: string,
 *   PR_TAG: string,
 *   PR_TYPE: string,
 *   prettyPrintOne: function(string,string=,*=):string,
 *   prettyPrint: function(Function,*=)
 * }}
 * @const
 */
window[ 'PR' ] = {
    'createSimpleLexer'   : createSimpleLexer,
    'registerLangHandler' : registerLangHandler,
    'sourceDecorator'     : createSimpleLexerFromOptionalParameters,
    'PR_ATTRIB_NAME'      : PR_ATTRIB_NAME,
    'PR_ATTRIB_VALUE'     : PR_ATTRIB_VALUE,
    'PR_COMMENT'          : PR_COMMENT,
    'PR_DECLARATION'      : PR_DECLARATION,
    'PR_KEYWORD'          : PR_KEYWORD,
    'PR_LITERAL'          : PR_LITERAL,
    'PR_NOCODE'           : PR_NOCODE,
    'PR_PLAIN'            : PR_PLAIN,
    'PR_PUNCTUATION'      : PR_PUNCTUATION,
    'PR_SOURCE'           : PR_SOURCE,
    'PR_STRING'           : PR_STRING,
    'PR_TAG'              : PR_TAG,
    'PR_TYPE'             : PR_TYPE,
    'prettyPrintOne'      : $prettyPrintOne,
    'prettyPrint'         : $prettyPrint
};