/**
 * @constructor
 * @extends RegExp
 * @param {string|RegExp|RegExpCompat} source 
 * @param {string=} flags
 */
function RegExpCompat( source, flags ){};

/**
 * @param {string} string 
 * @return {RegExpResult|Array<string>|null}
 */
RegExpCompat.prototype.match = function( string ){};

/**
 * @param {string} string 
 * @param {Function|string} replacer 
 * @return {string}
 */
RegExpCompat.prototype.replace = function( string, replacer ){};