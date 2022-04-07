/** Register a language handler for the given file extensions.
  * @param {SimpleLexer} simpleLexer a function from source code to a list
  *      of decorations.  Takes a single argument job which describes the
  *      state of the computation and attaches the decorations to it.
  * @param {Array.<string>} fileExtensions
  */
 registerLangHandler = function( simpleLexer, fileExtensions ){
    for( var i = fileExtensions.length; --i >= 0; ){
        var ext = fileExtensions[ i ];
        if( !simpleLexerRegistry[ ext ] ){
            simpleLexerRegistry[ ext ] = simpleLexer;
        } else if( DEFINE_CODE_PRETTIFY__DEBUG && window.console && console.warn ){
            console.warn( 'cannot override language handler %s', ext );
        };
    };
};

registerLangHandler(
    createSimpleLexerFromOptionalParameters(
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
    createSimpleLexer(
        [],
        [
          [ PR_PLAIN,       RegExpProxy( '^[^<?]+' ) ],
          [ PR_DECLARATION, RegExpProxy( "^<!\\w[^>]*(?:>|$)" ) ],
          [ PR_COMMENT,     RegExpProxy( "^<\\!--[\\s\\S]*?(?:-\\->|$)" ) ],
          // Unescaped content in an unknown language
          [ 'lang-',        RegExpProxy( "^<\\?([\\s\\S]+?)(?:\\?>|$)" ) ],
          [ 'lang-',        RegExpProxy( "^<%([\\s\\S]+?)(?:%>|$)" ) ],
          [ PR_PUNCTUATION, RegExpProxy( "^(?:<[%?]|[%?]>)" ) ],
          [ 'lang-',        RegExpProxy( "^<xmp\\b[^>]*>([\\s\\S]+?)<\\/xmp\\b[^>]*>", 'i' ) ],
          // Unescaped content in javascript.  (Or possibly vbscript).
          [ 'lang-js',      RegExpProxy(  "^<script\\b[^>]*>([\\s\\S]*?)(<\\/script\\b[^>]*>)", 'i' ) ],
          // Contains unescaped stylesheet content
          [ 'lang-css',     RegExpProxy( "^<style\\b[^>]*>([\\s\\S]*?)(<\\/style\\b[^>]*>)", 'i' ) ],
          [ 'lang-in.tag',  RegExpProxy( "^(<\\/?[a-z][^<>]*>)", 'i' )]
        ]
    ), [ 'default-markup', 'htm', 'html', 'mxml', 'xhtml', 'xml', 'xsl' ]
);

registerLangHandler(
    createSimpleLexer(
        [
            [ PR_PLAIN,        RegExpProxy( "^[\\s]+" ), null, ' \t\r\n' ],
            [ PR_ATTRIB_VALUE, RegExpProxy(  "^(?:\\\"[^\\\"]*\\\"?|\\'[^\\']*\\'?)" ), null, '\"\'' ]
        ],
        [
            [ PR_TAG,          RegExpProxy( "^^<\\/?[a-z](?:[\\w.:-]*\\w)?|\\/?>$", 'i' ) ],
            [ PR_ATTRIB_NAME,  RegExpProxy( "^(?!style[\\s=]|on)[a-z](?:[\\w:-]*\\w)?", 'i' ) ],
            [ 'lang-uq.val',   RegExpProxy( "^=\\s*([^>\\'\\\"\\s]*(?:[^>\\'\\\"\\s\\/]|\\/(?=\\s)))" ) ],
            [ PR_PUNCTUATION,  RegExpProxy( "^[=<>\\/]+" ) ],
            [ 'lang-js',       RegExpProxy( "^on\\w+\\s*=\\s*\\\"([^\\\"]+)\\\"", 'i' ) ],
            [ 'lang-js',       RegExpProxy( "^on\\w+\\s*=\\s*\\'([^\\']+)\\'", 'i' ) ],
            [ 'lang-js',       RegExpProxy( "^on\\w+\\s*=\\s*([^\\\"\\'>\\s]+)", 'i' ) ],
            [ 'lang-css',      RegExpProxy( "^style\\s*=\\s*\\\"([^\\\"]+)\\\"", 'i' ) ],
            [ 'lang-css',      RegExpProxy( "^style\\s*=\\s*\\'([^\\']+)\\'", 'i' ) ],
            [ 'lang-css',      RegExpProxy( "^style\\s*=\\s*([^\\\"\\'>\\s]+)", 'i' ) ]
        ]
    ), [ 'in.tag' ]
);

registerLangHandler(
    createSimpleLexer(
        [], 
        [ [ PR_ATTRIB_VALUE, RegExpProxy(  "^[\\s\\S]+" ) ] ]
    ), [ 'uq.val' ]
);

var C_TYPES = RegExpProxy( '^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\\d*)\\b' );

registerLangHandler(
    createSimpleLexerFromOptionalParameters( {
        'keywords'       : CPP_KEYWORDS,
        'hashComments'   : true,
        'cStyleComments' : true,
        'types'          : C_TYPES
    } ), [ 'c', 'cc', 'cpp', 'cxx', 'cyc', 'm' ]
);

registerLangHandler(
    createSimpleLexerFromOptionalParameters( {
        'keywords' : 'null,true,false'
    } ), [ 'json' ]
);

registerLangHandler(
    createSimpleLexerFromOptionalParameters( {
        'keywords'        : CSHARP_KEYWORDS,
        'hashComments'    : true,
        'cStyleComments'  : true,
        'verbatimStrings' : true,
        'types'           : C_TYPES
    } ), [ 'cs' ]
);

registerLangHandler(
    createSimpleLexerFromOptionalParameters( {
        'keywords'       : JAVA_KEYWORDS,
        'cStyleComments' : true
    } ), [ 'java' ]
);

registerLangHandler(
    createSimpleLexerFromOptionalParameters( {
        'keywords'         : SH_KEYWORDS,
        'hashComments'     : true,
        'multiLineStrings' : true
    } ), [ 'bash', 'bsh', 'csh', 'sh' ]
);

registerLangHandler(
    createSimpleLexerFromOptionalParameters( {
        'keywords'            : PYTHON_KEYWORDS,
        'hashComments'        : true,
        'multiLineStrings'    : true,
        'tripleQuotedStrings' : true
    } ), [ 'cv', 'py', 'python' ]
);

registerLangHandler(
    createSimpleLexerFromOptionalParameters( {
        'keywords'         : PERL_KEYWORDS,
        'hashComments'     : true,
        'multiLineStrings' : true,
        'regexLiterals'    : 2  // multiline regex literals
      } ), [ 'perl', 'pl', 'pm' ]
);

registerLangHandler(
    createSimpleLexerFromOptionalParameters( {
        'keywords'         : RUBY_KEYWORDS,
        'hashComments'     : true,
        'multiLineStrings' : true,
        'regexLiterals'    : true
      } ), [ 'rb', 'ruby' ]
);

registerLangHandler(
    createSimpleLexerFromOptionalParameters( {
        'keywords'       : JSCRIPT_KEYWORDS,
        'cStyleComments' : true,
        'regexLiterals'  : true
    } ), [ 'javascript', 'js', 'ts', 'typescript' ]
);

registerLangHandler(
    createSimpleLexerFromOptionalParameters( {
        'keywords'            : COFFEE_KEYWORDS,
        'hashComments'        : 3,  // ### style block comments
        'cStyleComments'      : true,
        'multilineStrings'    : true,
        'tripleQuotedStrings' : true,
        'regexLiterals'       : true
    } ), [ 'coffee' ]
);

registerLangHandler(
    createSimpleLexer(
        [],
        [ [ PR_STRING, RegExpProxy(  "^[\\s\\S]+" ) ] ]
    ), [ 'regex' ]
);

if( DEFINE_CODE_PRETTIFY__EXPORT_PR_OBJECT ){
    PR = {
        'createSimpleLexer'   : createSimpleLexer,
        'registerLangHandler' : registerLangHandler,
        'sourceDecorator'     : createSimpleLexerFromOptionalParameters,
        'PR_ATTRIB_NAME'      : PR_ATTRIB_NAME,
        'PR_ATTRIB_VALUE'     : PR_ATTRIB_VALUE,
        'PR_COMMENT'          : PR_COMMENT,
        'PR_DECLARATION'      : PR_DECLARATION,
        'PR_KEYWORD'          : PR_KEYWORD,
        'PR_LITERAL'          : PR_LITERAL,
        'PR_NOCODE'           : PR_NOCODE,
        'PR_PLAIN'            : PR_PLAIN,
        'PR_PUNCTUATION'      : PR_PUNCTUATION,
        'PR_SOURCE'           : PR_SOURCE,
        'PR_STRING'           : PR_STRING,
        'PR_TAG'              : PR_TAG,
        'PR_TYPE'             : PR_TYPE
    };
};