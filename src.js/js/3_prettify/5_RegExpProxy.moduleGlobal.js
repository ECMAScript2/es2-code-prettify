/**
 * @param {string} source 
 * @param {string=} flags
 * @return {RegExp|RegExpCompat}
 */
function RegExpProxy( source, flags ){
    return USE_REGEXPCOMPAT ? /** @type {RegExpCompat} */ (new RegExpCompat( source, flags )) :
                              /** @type {RegExp} */ (new RegExp( source, flags ));
};

/**
 * @param {RegExp|RegExpCompat} regexp 
 * @param {string} string
 */
function RegExpProxy_match( regexp, string ){
    //regexp.lastIndex = 0;
    return USE_REGEXPCOMPAT ? /** @type {RegExpCompat} */ (regexp).match( string ) :
                              string.match( /** @type {RegExp} */ (regexp) );
};

/**
 * @param {RegExp|RegExpCompat} regexp 
 * @param {string} string
 * @param {string|Function} replacer
 */
function RegExpProxy_replace( regexp, string, replacer ){
    //regexp.lastIndex = 0;
    return USE_REGEXPCOMPAT ? /** @type {RegExpCompat} */ (regexp).replace( string, replacer ) :
                              string.replace( /** @type {RegExp} */ (regexp), replacer );
};

/**
 * @param {RegExp|RegExpCompat} regexp 
 * @param {string} string
 * @return {boolean}
 */
 function RegExpProxy_test( regexp, string ){
    //regexp.lastIndex = 0;
    return /** @type {RegExp|RegExpCompat} */ (regexp).test( string );
};