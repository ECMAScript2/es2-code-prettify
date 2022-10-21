if( DEFINE_CODE_PRETTIFY__EXPORT_PR_OBJECT || DEFINE_CODE_PRETTIFY__DEBUG ){
/** Contains functions for creating and registering new language handlers.
 * @type {{
 *   registerCompleteHandler : function (function())
 * }}
 * @const
 */
    window[ 'PR' ] = {
        'RegExpProxy'             : RegExpProxy,
        'prettifyElement'         : m_prettifyElement,
        'registerCompleteHandler' : function( completeAllHandler, completeOneHandler ){
            m_completeAllHandler = completeAllHandler;
            m_completeOneHandler = completeOneHandler;
        }
    };
};

