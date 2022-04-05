var p_Gecko   = false,
    p_Presto  = false,
    p_Trident = false;

var p_setTimer = 
   /**
     * @param {!Function} func 
     * @param {string|!JobT=} param 
     */
    function( func, param ){
        setTimeout( function(){ func( param ); }, 16 );
    };