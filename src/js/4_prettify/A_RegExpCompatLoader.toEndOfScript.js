if( USE_REGEXPCOMPAT ){
    if( !DYNAMIC_SCRIPT_LOADING ){
        window[ 'RegExpCompat' ] = function( RegExpCompat ){
            var callback;

            while( callback = p_onRegExpCompatReadyCallbacks.shift() ){
                callback( RegExpCompat );
            };
            p_onRegExpCompatReadyCallbacks = undefined;
        };

        document.write( '<script src="' + p_assetUrl + DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_JS_DIR + '/' + DEFINE_CODE_PRETTIFY__REGEXPCOMPAT_FILENAME + '"></script>' );
    } else {
        p_loadRegExpCompat = function( applyPrettifyElementOne ){
            window[ 'RegExpCompat' ] = function( RegExpCompat ){
                var callback;

                while( callback = p_onRegExpCompatReadyCallbacks.shift() ){
                    callback( RegExpCompat );
                };
                p_onRegExpCompatReadyCallbacks = undefined;

                p_setTimer( applyPrettifyElementOne );
            };

            p_loadRegExpCompat = undefined;

            p_DOM_insertElement( p_head, 'script', { src : p_assetUrl + DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_JS_DIR + '/' + DEFINE_CODE_PRETTIFY__REGEXPCOMPAT_FILENAME } );
        };
    };
};