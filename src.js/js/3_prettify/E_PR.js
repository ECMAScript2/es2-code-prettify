if( DEFINE_CODE_PRETTIFY__EXPORT_PR_OBJECT || DEFINE_CODE_PRETTIFY__DEBUG ){
/** Contains functions for creating and registering new language handlers.
 * @type {{
 *   registerCompleteHandler : function (function())
 * }}
 * @const
 */
    window[ 'PR' ] = PR;

    PR[ 'registerCompleteHandler' ] = function registerCompleteHandler( _completeHandler ){
        completeHandler = _completeHandler;
    };
};