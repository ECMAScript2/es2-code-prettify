/**
 * @param {string} source 
 * @param {string=} flags
 * @return {RegExp|RegExpCompat}
 */
function RegExpProxy( source, flags ){
    return USE_REGEXPCOMPAT ? /** @type {RegExpCompat} */ (new RegExpCompat( source, flags )) :
                              /** @type {RegExp} */ (new RegExp( source, flags ));
};
