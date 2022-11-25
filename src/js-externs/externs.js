var Benchmark = {
    readyTime          : 0,
    useRegExpCompat    : true,
    initRegExpCount    : 0,
    initRegExpTotal    : 0,
    initRegExpMax      : 0,
    initRegExpSource   : '',
    initRegExpInstance : null,
    codeBlocks         : []
};

var CodeBlock = {
    elm           : null,
    lang          : 'js',
    readyTime     : 0,
    decorateCount : 0,
    decorateTime  : 0,
    updateDOMTime : 0
};

/**
 * @constructor
 * @extends RegExp
 * @param {string} source 
 * @param {string=} flags
 */
function RegExpCompat( source, flags ){};