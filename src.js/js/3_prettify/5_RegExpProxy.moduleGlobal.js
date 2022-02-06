var USE_REGEXPCOMPAT = DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT === 1 ||
                       !window.RegExp;
                       // DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT === -1 && ( p_Gecko < n || p_Presto < n || p_Trident < n ...)

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
    return USE_REGEXPCOMPAT ? /** @type {RegExpCompat} */ (regexp).match( string ) :
                              string.match( /** @type {RegExp} */ (regexp) );
};

/**
 * @param {RegExp|RegExpCompat} regexp 
 * @param {string} string
 * @param {string|Function} replacer
 */
function RegExpProxy_replace( regexp, string, replacer ){
    return USE_REGEXPCOMPAT ? /** @type {RegExpCompat} */ (regexp).replace( string, replacer ) :
                              string.replace( /** @type {RegExp} */ (regexp), replacer );
};