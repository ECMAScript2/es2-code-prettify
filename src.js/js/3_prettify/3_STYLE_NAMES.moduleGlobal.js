// token style names.  correspond to css classes
/**
 * token style for a string literal
 * @const
 */
var PR_STRING = 'str';
/**
* token style for a keyword
* @const
*/
var PR_KEYWORD = 'kwd';
/**
* token style for a comment
* @const
*/
var PR_COMMENT = 'com';
/**
* token style for a type
* @const
*/
var PR_TYPE = 'typ';
/**
* token style for a literal value.  e.g. 1, null, true.
* @const
*/
var PR_LITERAL = 'lit';
/**
* token style for a punctuation string.
* @const
*/
var PR_PUNCTUATION = 'pun';
/**
* token style for plain text.
* @const
*/
var PR_PLAIN = 'pln';

/**
* token style for an sgml tag.
* @const
*/
var PR_TAG = 'tag';
/**
* token style for a markup declaration such as a DOCTYPE.
* @const
*/
var PR_DECLARATION = 'dec';
/**
* token style for embedded source.
* @const
*/
var PR_SOURCE = 'src';
/**
* token style for an sgml attribute name.
* @const
*/
var PR_ATTRIB_NAME = 'atn';
/**
* token style for an sgml attribute value.
* @const
*/
var PR_ATTRIB_VALUE = 'atv';

/**
* A class that indicates a section of markup that is not code, e.g. to allow
* embedding of line numbers within code listings.
* @const
*/
var PR_NOCODE = 'nocode';