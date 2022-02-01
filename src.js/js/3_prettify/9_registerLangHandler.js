/** Register a language handler for the given file extensions.
  * @param {SimpleLexer} simpleLexer a function from source code to a list
  *      of decorations.  Takes a single argument job which describes the
  *      state of the computation and attaches the decorations to it.
  * @param {Array.<string>} fileExtensions
  */
function registerLangHandler( simpleLexer, fileExtensions ){
    console.log( fileExtensions + '' );
    for( var i = fileExtensions.length; --i >= 0; ){
        var ext = fileExtensions[ i ];
        if( !langHandlerRegistry[ ext ] ){
            langHandlerRegistry[ ext ] = simpleLexer;
        } else if( !DEFINE_CODE_PRETTIFY__ECMASCRIPT2 && window[ 'console' ] ){
            console['warn']('cannot override language handler %s', ext);
        };
    };
};

registerLangHandler(
    createLangHandlerFromOptionalParameters(
        {
            'keywords'         : ALL_KEYWORDS,
            'hashComments'     : true,
            'cStyleComments'   : true,
            'multiLineStrings' : true,
            'regexLiterals'    : true
        }
    ), [ 'default-code' ]
);

registerLangHandler(
    createLangHandler(
        [],
        [
          [ PR_PLAIN,       new RegExpCompat( '^[^<?]+' ) ],
          [ PR_DECLARATION, new RegExpCompat( "^<!\\w[^>]*(?:>|$)" ) ],
          [ PR_COMMENT,     new RegExpCompat( "^<\\!--[\\s\\S]*?(?:-\\->|$)" ) ],
          // Unescaped content in an unknown language
          [ 'lang-',        new RegExpCompat( "^<\\?([\\s\\S]+?)(?:\\?>|$)" ) ],
          [ 'lang-',        new RegExpCompat( "^<%([\\s\\S]+?)(?:%>|$)" ) ],
          [ PR_PUNCTUATION, new RegExpCompat( "^(?:<[%?]|[%?]>)" ) ],
          [ 'lang-',        new RegExpCompat( "^<xmp\\b[^>]*>([\\s\\S]+?)<\\/xmp\\b[^>]*>", 'i' ) ],
          // Unescaped content in javascript.  (Or possibly vbscript).
          [ 'lang-js',      new RegExpCompat(  "^<script\\b[^>]*>([\\s\\S]*?)(<\\/script\\b[^>]*>)", 'i' ) ],
          // Contains unescaped stylesheet content
          [ 'lang-css',     new RegExpCompat( "^<style\\b[^>]*>([\\s\\S]*?)(<\\/style\\b[^>]*>)", 'i' ) ],
          [ 'lang-in.tag',  new RegExpCompat( "^(<\\/?[a-z][^<>]*>)", 'i' )]
        ]
    ), [ 'default-markup', 'htm', 'html', 'mxml', 'xhtml', 'xml', 'xsl' ]
);

registerLangHandler(
    createLangHandler(
        [
            [ PR_PLAIN,        new RegExpCompat( "^[\\s]+" ), null, ' \t\r\n' ],
            [ PR_ATTRIB_VALUE, new RegExpCompat(  "^(?:\\\"[^\\\"]*\\\"?|\\'[^\\']*\\'?)" ), null, '\"\'' ]
        ],
        [
            [ PR_TAG,          new RegExpCompat( "^^<\\/?[a-z](?:[\\w.:-]*\\w)?|\\/?>$", 'i' ) ],
            [ PR_ATTRIB_NAME,  new RegExpCompat( "^(?!style[\\s=]|on)[a-z](?:[\\w:-]*\\w)?", 'i' ) ],
            [ 'lang-uq.val',   new RegExpCompat( "^=\\s*([^>\\'\\\"\\s]*(?:[^>\\'\\\"\\s\\/]|\\/(?=\\s)))" ) ],
            [ PR_PUNCTUATION,  new RegExpCompat( "^[=<>\\/]+" ) ],
            [ 'lang-js',       new RegExpCompat( "^on\\w+\\s*=\\s*\\\"([^\\\"]+)\\\"", 'i' ) ],
            [ 'lang-js',       new RegExpCompat( "^on\\w+\\s*=\\s*\\'([^\\']+)\\'", 'i' ) ],
            [ 'lang-js',       new RegExpCompat( "^on\\w+\\s*=\\s*([^\\\"\\'>\\s]+)", 'i' ) ],
            [ 'lang-css',      new RegExpCompat( "^style\\s*=\\s*\\\"([^\\\"]+)\\\"", 'i' ) ],
            [ 'lang-css',      new RegExpCompat( "^style\\s*=\\s*\\'([^\\']+)\\'", 'i' ) ],
            [ 'lang-css',      new RegExpCompat( "^style\\s*=\\s*([^\\\"\\'>\\s]+)", 'i' ) ]
        ]
    ), [ 'in.tag' ]
);

registerLangHandler(
    createLangHandler(
        [], 
        [ [ PR_ATTRIB_VALUE, new RegExpCompat(  "^[\\s\\S]+" ) ] ]
    ), [ 'uq.val' ]
);

var C_TYPES = new RegExpCompat( '^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\\d*)\\b' );

registerLangHandler(
    createLangHandlerFromOptionalParameters( {
        'keywords'       : CPP_KEYWORDS,
        'hashComments'   : true,
        'cStyleComments' : true,
        'types'          : C_TYPES
    } ), [ 'c', 'cc', 'cpp', 'cxx', 'cyc', 'm' ]
);

registerLangHandler(
    createLangHandlerFromOptionalParameters( {
        'keywords' : 'null,true,false'
    } ), [ 'json' ]
);

registerLangHandler(
    createLangHandlerFromOptionalParameters( {
        'keywords'        : CSHARP_KEYWORDS,
        'hashComments'    : true,
        'cStyleComments'  : true,
        'verbatimStrings' : true,
        'types'           : C_TYPES
    } ), [ 'cs' ]
);

registerLangHandler(
    createLangHandlerFromOptionalParameters( {
        'keywords'       : JAVA_KEYWORDS,
        'cStyleComments' : true
    } ), [ 'java' ]
);

registerLangHandler(
    createLangHandlerFromOptionalParameters( {
        'keywords'         : SH_KEYWORDS,
        'hashComments'     : true,
        'multiLineStrings' : true
    } ), [ 'bash', 'bsh', 'csh', 'sh' ]
);

registerLangHandler(
    createLangHandlerFromOptionalParameters( {
        'keywords'            : PYTHON_KEYWORDS,
        'hashComments'        : true,
        'multiLineStrings'    : true,
        'tripleQuotedStrings' : true
    } ), [ 'cv', 'py', 'python' ]
);

registerLangHandler(
    createLangHandlerFromOptionalParameters( {
        'keywords'         : PERL_KEYWORDS,
        'hashComments'     : true,
        'multiLineStrings' : true,
        'regexLiterals'    : 2  // multiline regex literals
      } ), [ 'perl', 'pl', 'pm' ]
);

registerLangHandler(
    createLangHandlerFromOptionalParameters( {
        'keywords'         : RUBY_KEYWORDS,
        'hashComments'     : true,
        'multiLineStrings' : true,
        'regexLiterals'    : true
      } ), [ 'rb', 'ruby' ]
);

registerLangHandler(
    createLangHandlerFromOptionalParameters( {
        'keywords'       : JSCRIPT_KEYWORDS,
        'cStyleComments' : true,
        'regexLiterals'  : true
    } ), [ 'javascript', 'js', 'ts', 'typescript' ]
);

registerLangHandler(
    createLangHandlerFromOptionalParameters( {
        'keywords'            : COFFEE_KEYWORDS,
        'hashComments'        : 3,  // ### style block comments
        'cStyleComments'      : true,
        'multilineStrings'    : true,
        'tripleQuotedStrings' : true,
        'regexLiterals'       : true
    } ), [ 'coffee' ]
);

registerLangHandler(
    createLangHandler(
        [],
        [ [ PR_STRING, new RegExpCompat(  "^[\\s\\S]+" ) ] ]
    ), [ 'regex' ]
);
