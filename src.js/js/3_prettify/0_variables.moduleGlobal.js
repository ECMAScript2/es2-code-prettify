/** @type {Object.<string,(SimpleLexer|ZippedSimpleLexer)>} Maps language-specific file extensions to handlers. */
var simpleLexerRegistry;

if( !DEFINE_CODE_PRETTIFY__USE_STATIC_LEXER ){
    simpleLexerRegistry = {};
};

var storeStylePatternObject, storeStylePattern, storeRegExp;

var combinePrefixPatterns;

/**
 * @param {*} test
 * @return {boolean}
 */
function m_isString( test ){
    return test === '' + test;
};

/** @type {!JobT|undefined} */
var currentJob;

var USE_REGEXPCOMPAT = DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT === 1 ||
    !window.RegExp ||
    DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT === -1 && ( p_Gecko < 0.9 || p_Presto < 8 || p_Trident < 5.5 );

/** @type {!Function|undefiend} */
var completeHandler;

/**
 * @typedef {{
 *   initTime        : (number|undefined),
 *   _startTime      : (number|undefined),
 *   useRegExpCompat : boolean,
 *   initRegExpCount : number,
 *   initRegExpTime  : number,
 *   codeBlocks      : !Array.<!{elm:Node, lang:string, readyTime:number, decorateTime:number, updateDOMTime:number}>
 * }}
 */
var Benchmark;

/** @type {Benchmark} */
var benchmark = { useRegExpCompat : USE_REGEXPCOMPAT, initRegExpTime : 0, initRegExpCount : 0, codeBlocks : [] };

if( DEFINE_CODE_PRETTIFY__DEBUG ){
    benchmark.initTime = + new Date;
};

var TASK_IS_INIT_REGEXP = 1;
var TASK_IS_DECORATE    = 2;
var TASK_IS_UPDATE_DOM  = 3;

/**
 * @param {!Function} lazyFunction 
 * @param {string|!JobT=} param 
 * @param {number=} task
 */
function m_graduallyPrettify( lazyFunction, param, task ){
    if( DEFINE_CODE_PRETTIFY__DEBUG ){
        if( new Date - benchmark._startTime < 9 ){
            // return lazyFunction( param );
        };
        var codeBlock = benchmark.codeBlocks[ benchmark.codeBlocks.length - 1 ];

        switch( task ){
            case TASK_IS_INIT_REGEXP :
                benchmark.initRegExpCount++;
                benchmark.initRegExpTime += ( new Date - benchmark._startTime );
                break;
            case TASK_IS_DECORATE :
                codeBlock.decorateTime += ( new Date - benchmark._startTime );
                break;
            case TASK_IS_UPDATE_DOM :
                codeBlock.updateDOMTime += ( new Date - benchmark._startTime );
                break;
        };

        if( USE_REGEXPCOMPAT ){
            p_setTimer(
                function(){
                    if( 0 <= task ){
                        benchmark._startTime = + new Date;
                    };
                    lazyFunction( param );
                }
            );
        } else {
            requestAnimationFrame(
                function(){
                    if( 0 <= task ){
                        benchmark._startTime = + new Date;
                    };
                    lazyFunction( param );
                }
            )
        };
    } else {
        p_setTimer( lazyFunction, param );
    };
};
