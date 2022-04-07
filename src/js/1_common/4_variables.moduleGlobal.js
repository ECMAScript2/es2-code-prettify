/** @type {!Object.<string,(!SimpleLexer|!ZippedSimpleLexer)|undefined>} Maps language-specific file extensions to handlers. */
var simpleLexerRegistry;

var USE_REGEXPCOMPAT = DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT === 1 ||
    !window.RegExp ||
    DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT === -1 && ( p_Gecko < 0.9 || p_Presto < 8 || p_Trident < 5.5 );
