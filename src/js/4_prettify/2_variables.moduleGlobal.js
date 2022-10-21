// var storeStylePatternObject, storeStylePattern, storeRegExp, storeClasses;
// var STYLE_PLAIN, STYLE_SOURCE;

/**
 * @param {*} test
 * @return {boolean}
 */
function m_isString( test ){
    return test === '' + test;
};

/** @type {!function():number} */
var m_getCurrentTime = Date.now ? Date.now : function(){
    return + new Date;
};

var USE_REGEXPCOMPAT = DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT === 1 ||
    !RegExp ||
    DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT === -1 && ( p_Gecko < 0.9 || p_Presto < 8 || p_Trident < 5.5 );

/**
 * @constructor
 * @extends RegExp
 */
var m_RegExpCompat;

/**
 * @param {string} source 
 * @param {string=} flags
 * @return {RegExp|RegExpCompat}
 */
function RegExpProxy( source, flags ){
    return USE_REGEXPCOMPAT ? /** @type {RegExpCompat} */ (new m_RegExpCompat( source, flags )) :
                              /** @type {RegExp} */ (new RegExp( source, flags ));
};

/** @type {!Benchmark} */
var m_benchmark = { useRegExpCompat : USE_REGEXPCOMPAT, initRegExpTotal : 0, initRegExpMax : 0, initRegExpSource : '', initRegExpCount : 0, codeBlocks : [] };

/** @type {!number|undefined} */
var m_startTime;

if( DEFINE_CODE_PRETTIFY__DEBUG ){
    m_startTime = m_getCurrentTime();
};

/** @type {!number|undefined} */
var m_currentTaskStartTime;

/** @type {!JobT|undefined} */
var currentJob;

/** @type {!Function|undefined} */
var m_prettifyElement;

/** @type {!Function|undefined} */
var m_completeAllHandler;

/** @type {!Function|undefined} */
var m_completeOneHandler;

var TASK_IS_INIT_REGEXP = 1;
var TASK_IS_DECORATE    = 2;
var TASK_IS_UPDATE_DOM  = 3;

var CONTINUOUS_TIME_MS = p_Trident < 5    ? 60 :
                         p_Trident < 5.5  ?  0 :
                         USE_REGEXPCOMPAT ? 20 : 10;

var m_loadRegExpCompat,
    m_reIsMarkup,
    m_reNotWhiteSpace,
    m_reCommentLike,
    m_reCorrectCommentAttrValue;

var m_onReadyRegExp = function(){
    if( DEFINE_CODE_PRETTIFY__USE_DEFAULT_MARKUP || DEFINE_CODE_PRETTIFY__USE_DEFAULT_CODE ){
        m_reIsMarkup = RegExpProxy( "^\\s*<" );
    };

    m_reNotWhiteSpace = RegExpProxy( '\\S' );

    if( DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT ){
        m_reCommentLike = RegExpProxy(  "^\\??prettify\\b" );
        m_reCorrectCommentAttrValue = RegExpProxy( "\\b(\\w+)=([\\w:.%+-]+)", 'g' );
    };
};

if( USE_REGEXPCOMPAT ){
    m_loadRegExpCompat = function(){
        window[ 'RegExpCompat' ] = function( RegExpCompat ){
            window[ 'RegExpCompat' ] = m_RegExpCompat = RegExpCompat;

            m_onReadyRegExp();
            m_onReadyRegExp = m_loadRegExpCompat = undefined;
            p_setTimer( applyPrettifyElementOne );
        };

        p_DOM_insertElement( p_body, 'script', { src : p_assetUrl + DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_JS_DIR + '/' + DEFINE_CODE_PRETTIFY__REGEXPCOMPAT_FILENAME } );
    };
} else {
    m_onReadyRegExp();
    m_onReadyRegExp = undefined;
};

/**
 * @param {!Function} lazyFunction 
 * @param {string=} opt_param 
 * @param {number=} opt_task
 * @param {boolean=} opt_forceLazy
 * @param {!RegExp|!RegExpCompat=} opt_regExp
 */
function m_graduallyPrettify( lazyFunction, opt_param, opt_task, opt_forceLazy, opt_regExp ){
    var codeBlock = m_benchmark.codeBlocks[ m_benchmark.codeBlocks.length - 1 ];

    var currentTime = m_getCurrentTime(),
        task = opt_task || 0,
        initTime = currentTime - m_currentTaskStartTime;

    if( DEFINE_CODE_PRETTIFY__DEBUG ){
        switch( task ){
            case TASK_IS_INIT_REGEXP :
                m_benchmark.initRegExpCount++;
                m_benchmark.initRegExpTotal += initTime;
                if( m_benchmark.initRegExpMax < initTime ){
                    m_benchmark.initRegExpMax      = initTime;
                    m_benchmark.initRegExpSource   = opt_regExp.toString();
                    m_benchmark.initRegExpInstance = opt_regExp;
                };
                break;
            case TASK_IS_DECORATE :
                codeBlock.decorateCount++;
                codeBlock.decorateTime += initTime;
                break;
            case TASK_IS_UPDATE_DOM :
                codeBlock.updateDOMTime += initTime;
                break;
        };
    };

    if( currentTime - m_startTime < CONTINUOUS_TIME_MS && !opt_forceLazy ){
        m_currentTaskStartTime = currentTime;
        return lazyFunction( opt_param );
    };
    p_setTimer( graduallyPrettify, { func : lazyFunction, param : opt_param } );
};

function graduallyPrettify( callback ){
    m_startTime = m_currentTaskStartTime = m_getCurrentTime();
    callback.func( callback.param );
};