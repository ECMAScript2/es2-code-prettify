const PluginError = require('plugin-error'),
      Transform   = require('stream').Transform,
      Vinyl       = require('vinyl'),
      stream      = new Transform( { objectMode : true } ),
      vm          = require('vm');

stream._transform = function( file, encoding, cb ){
    if( file.isNull() ) return cb( null, file );

    if( file.isStream() ) return cb( new PluginError( 'gulp-createSimpleLexerRegistory', 'Streaming not supported' ) );

    if( file.isBuffer() ){
        var js = file.contents.toString( encoding );

        // collect registered language extensions
        var sandbox = {
            window : { RegExp : RegExp },
            RegExpCompat : {}
        };

        // execute source code in an isolated sandbox with a mock PR object
        vm.runInNewContext(
            js + ';window.simpleLexerRegistry = simpleLexerRegistry;',
            sandbox
        );
        console.dir( sandbox );

        // this.push( file );
        cb();
    };
};
module.exports = stream;