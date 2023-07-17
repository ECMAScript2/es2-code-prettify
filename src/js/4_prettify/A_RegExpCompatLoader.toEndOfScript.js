if( USE_REGEXPCOMPAT ){
    if( !p_canUseDynamicExternalScript ){
        window[ 'RegExpCompat' ] = function( RegExpCompat ){
            var callback;

            while( callback = p_onRegExpCompatReadyCallbacks.shift() ){
                callback( RegExpCompat );
            };
            p_onRegExpCompatReadyCallbacks = undefined;

            p_setExternalScriptIsLoaded( p_assetUrl + COMMON_ASSET_DIR_TO_JS_DIR + '/' + DEFINE_CODE_PRETTIFY__REGEXPCOMPAT_FILENAME );
        };
        p_loadExternalScript( p_assetUrl + COMMON_ASSET_DIR_TO_JS_DIR + '/' + DEFINE_CODE_PRETTIFY__REGEXPCOMPAT_FILENAME );
    } else {
        p_loadRegExpCompat = function( applyPrettifyElementOne ){
            window[ 'RegExpCompat' ] = function( RegExpCompat ){
                var callback;

                while( callback = p_onRegExpCompatReadyCallbacks.shift() ){
                    callback( RegExpCompat );
                };
                p_onRegExpCompatReadyCallbacks = undefined;

                p_setTimer( applyPrettifyElementOne );

                p_setExternalScriptIsLoaded( p_assetUrl + COMMON_ASSET_DIR_TO_JS_DIR + '/' + DEFINE_CODE_PRETTIFY__REGEXPCOMPAT_FILENAME );
            };

            p_loadRegExpCompat = undefined;

            p_loadExternalScript( p_assetUrl + COMMON_ASSET_DIR_TO_JS_DIR + '/' + DEFINE_CODE_PRETTIFY__REGEXPCOMPAT_FILENAME );
        };
    };
};