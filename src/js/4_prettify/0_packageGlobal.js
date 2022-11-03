var USE_REGEXPCOMPAT = DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT === 1 ||
    !RegExp ||
    DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT === -1 && ( p_Gecko < 0.9 || p_Presto < 8 || p_Trident < 5.5 );

/**
 * @type {!Array.<!Function>|undefined}
 */
var p_onRegExpCompatReadyCallbacks;

var p_loadRegExpCompat;