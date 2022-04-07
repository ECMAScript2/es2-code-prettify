var storeStylePatternObject, storeStylePattern, storeRegExp;

/**
 * @param {*} test
 * @return {boolean}
 */
function m_isString( test ){
    return test === '' + test;
};

/** @type {!function():number} */
var m_getCurrentTime = Date.now ? Date.now : function (){
    return + new Date;
};

/**
 * @typedef {{
 *   readyTime       : (number|undefined),
 *   useRegExpCompat : boolean,
 *   initRegExpCount : number,
 *   initRegExpTime  : number,
 *   codeBlocks      : !Array.<!{elm:Node, lang:string, readyTime:number, decorateCount:number, decorateTime:number, updateDOMTime:number}>
 * }}
 */
var Benchmark;

/** @type {!Benchmark} */
var benchmark = { useRegExpCompat : USE_REGEXPCOMPAT, initRegExpTime : 0, initRegExpCount : 0, codeBlocks : [] };

/** @type {!number|undefined} */
var m_startTime;

if( DEFINE_CODE_PRETTIFY__DEBUG ){
    m_startTime = m_getCurrentTime();
};

/** @type {!JobT|undefined} */
var currentJob;

/** @type {!Function|undefined} */
var completeHandler;

/** @type {!Function|undefined} */
var completeOneHandler;

var TASK_IS_INIT_REGEXP = 1;
var TASK_IS_DECORATE    = 2;
var TASK_IS_UPDATE_DOM  = 3;

var lastTask = 0;

var CONTINUOUS_TIME_MS = p_Trident < 5 ? 60 : USE_REGEXPCOMPAT ? 20 : 10;

/**
 * @param {!Function} lazyFunction 
 * @param {string=} opt_param 
 * @param {number=} opt_task
 * @param {boolean=} opt_forceLazy
 */
function m_graduallyPrettify( lazyFunction, opt_param, opt_task, opt_forceLazy ){
    var codeBlock = benchmark.codeBlocks[ benchmark.codeBlocks.length - 1 ];

    var currentTime = m_getCurrentTime(),
        task = opt_task || 0;

    if( DEFINE_CODE_PRETTIFY__DEBUG ){
        switch( lastTask ){
            case TASK_IS_INIT_REGEXP :
                benchmark.initRegExpCount++;
                break;
            case TASK_IS_DECORATE :
                codeBlock.decorateCount++;
                break;
        };
    };

    if( DEFINE_CODE_PRETTIFY__DEBUG && lastTask !== task ){
        switch( lastTask ){
            case TASK_IS_INIT_REGEXP :
                benchmark.initRegExpTime += ( currentTime - m_startTime );
                break;
            case TASK_IS_DECORATE :
                codeBlock.decorateTime += ( currentTime - m_startTime );
                break;
            case TASK_IS_UPDATE_DOM :
                codeBlock.updateDOMTime += ( currentTime - m_startTime );
                break;
        };
        lastTask = task;
        m_startTime = currentTime;
    };

    if( currentTime - m_startTime < CONTINUOUS_TIME_MS && !opt_forceLazy ){
        return lazyFunction( opt_param );
    };
    p_setTimer( graduallyPrettify, { func : lazyFunction, param : opt_param } );
};

function graduallyPrettify( callback ){
    m_startTime = m_getCurrentTime();
    callback.func( callback.param );
};