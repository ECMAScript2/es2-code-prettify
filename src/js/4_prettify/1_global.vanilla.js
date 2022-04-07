var p_Gecko   = NaN,
    p_Presto  = NaN,
    p_Trident = NaN;

var p_setTimer = 
   /**
     * @param {!Function} func 
     * @param {*=} param 
     */
    function( func, param ){
        setTimeout( function(){ func( param ); }, 16 );
    };