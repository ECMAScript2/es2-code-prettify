if( DEFINE_CODE_PRETTIFY__EXPORT_PR_OBJECT || DEFINE_CODE_PRETTIFY__DEBUG ){
/** Contains functions for creating and registering new language handlers.
 * @type {{
 *   registerCompleteHandler : function (function())
 * }}
 * @const
 */
    window[ 'PR' ] = {
        'prettyPrint' : prettyPrint,
        'registerCompleteHandler' : registerCompleteHandler
    };
};

function registerCompleteHandler( _completeHandler, _completeOneHandler ){
    completeHandler = _completeHandler;
    completeOneHandler = _completeOneHandler;
}