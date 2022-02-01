/** Given triples of [style, pattern, context] returns a lexing function,
  * The lexing function interprets the patterns to find token boundaries and
  * returns a decoration list of the form
  * [index_0, style_0, index_1, style_1, ..., index_n, style_n]
  * where index_n is an index into the sourceCode, and style_n is a style
  * constant like PR_PLAIN.  index_n-1 <= index_n, and style_n-1 applies to
  * all characters in sourceCode[index_n-1:index_n].
  *
  *   与えられた [style, pattern, context] のトリプルは、レキシング関数を返します。
  *   レキシング関数は、パターンを解釈してトークンの境界を見つけて
  *   [index_0, style_0, index_1, style_1, ..., index_n, style_n]
  *   形式の装飾リストを返します。
  *   ここで index_n は sourceCode へのインデックスであり、style_n は PR_PLAIN のようなスタイル定数です。
  *   index_n-1 <= index_n で、style_n-1 は sourceCode[index_n-1:index_n] のすべての文字に適用されます。
  *
  * The stylePatterns is a list whose elements have the form
  * [style : string, pattern : RegExp, DEPRECATED, shortcut : string].
  * 
  *   stylePatterns は、次のような形式の要素を持つリストです。
  *   [style : string, pattern : RegExp, DEPRECATED, shortcut : string]
  *
  * Style is a style constant like PR_PLAIN, or can be a string of the
  * form 'lang-FOO', where FOO is a language extension describing the
  * language of the portion of the token in $1 after pattern executes.
  * E.g., if style is 'lang-lisp', and group 1 contains the text
  * '(hello (world))', then that portion of the token will be passed to the
  * registered lisp handler for formatting.
  * 
  *   スタイルは PR_PLAIN のようなスタイル定数、または 'lang-FOO' 形式の文字列で、
  *   FOO は pattern が実行された後の $1 内のトークンの部分の言語を記述する言語拡張です。
  *   例えば、style が 'lang-lisp' で、group 1 にテキスト '(hello (world))' が含まれている場合、
  *   トークンのその部分はフォーマットのために登録された lisp ハンドラに渡されます。
  * 
  * The text before and after group 1 will be restyled using this decorator
  * so decorators should take care that this doesn't result in infinite
  * recursion.  For example, the HTML lexer rule for SCRIPT elements looks
  * something like ['lang-js', /<[s]cript>(.+?)<\/script>/].  This may match
  * '<script>foo()<\/script>', which would cause the current decorator to
  * be called with '<script>' which would not match the same rule since
  * group 1 must not be empty, so it would be instead styled as PR_TAG by
  * the generic tag rule.  The handler registered for the 'js' extension would
  * then be called with 'foo()', and finally, the current decorator would
  * be called with '<\/script>' which would not match the original rule and
  * so the generic tag rule would identify it as a tag.
  *
  *   グループ1の前後のテキストは、このデコレーターを使って再スタイリングされますので、
  *   デコレーターは無限再帰にならないように注意する必要があります。 
  *   例えば、SCRIPT 要素の HTML レキサー・ルールは、['lang-js', /<[s]cript>(.+?)<\/script>/] のようになります。 
  *   これは、'<script>foo()<\/script>' にマッチする可能性がありますが、この場合、現在のデコレータは '<script>' で呼び出されます。
  *   この場合、グループ1は空であってはならないので、同じルールにはマッチせず、代わりにジェネリック・タグ・ルールによって
  *   PR_TAG としてスタイリングされることになります。 その後、拡張子 'js' で登録されたハンドラが 'foo()' で呼び出され、
  *   最後に現在のデコレータが '<\/script>' で呼び出されます。これは元のルールとは一致しないので、一般的なタグルールではタグとして認識されます。
  *
  * Pattern must only match prefixes, and if it matches a prefix, then that
  * match is considered a token with the same style.
  * 
  *   パターンは接頭辞にのみマッチしなければならず、接頭辞にマッチした場合、そのマッチは同じスタイルのトークンとみなされます。
  *
  * Context is applied to the last non-whitespace, non-comment token
  * recognized.
  * 
  * コンテキストは、最後に認識された非ホワイトスペース、非コメントのトークンに適用されます。
  *
  * Shortcut is an optional string of characters, any of which, if the first
  * character, gurantee that this pattern and only this pattern matches.
  *
  *   ショートカットはオプションの文字列で、そのうちのどれかが最初の文字であれば、
  *   このパターンだけにマッチすることを保証します。
  *
  * @param {Array.<StylePattern>} shortcutStylePatterns patterns that always start with
  *   a known character.  Must have a shortcut string.
  *
  *     常に既知の文字で始まるパターン。 ショートカット文字列があること。
  *
  * @param {Array.<StylePattern>} fallthroughStylePatterns patterns that will be tried in
  *   order if the shortcut ones fail.  May have shortcuts.
  *
  *   ショートカットのものが失敗した場合に、順に試していくパターン。 ショートカットがある場合もあります。
  *
  * @return {SimpleLexer} a function that takes an undecorated job and
  *   attaches a list of decorations.
  */
function createSimpleLexer( shortcutStylePatterns, fallthroughStylePatterns ){
    var shortcuts = {};
    var allPatterns = shortcutStylePatterns.concat( fallthroughStylePatterns );
    var allRegexs = [];
    var regexKeys = {};
    for( var i = 0, n = allPatterns.length; i < n; ++i ){
        var patternParts = allPatterns[ i ];
        var shortcutChars = patternParts[ 3 ];
        if( shortcutChars ){
            for( var c = shortcutChars.length; --c >= 0; ){
                shortcuts[ shortcutChars.charAt( c ) ] = patternParts;
            };
        };
        var regex = patternParts[ 1 ];
        var k = '' + regex;
        if( !regexKeys[ k ] ){
            allRegexs.push( regex );
            regexKeys[ k ] = true;
        };
    };
    allRegexs.push( reAllChars );

    return [ shortcuts, combinePrefixPatterns( allRegexs ), fallthroughStylePatterns ];
};

var reAllChars = new RegExpCompat( '[\0-\uffff]' );

/**
 * Lexes job.sourceCode and attaches an output array job.decorations of
 * style classes preceded by the position at which they start in
 * job.sourceCode in order.
 */

/** @type {StylePattern} */
var stylePatternTripleQuotedStrings =
    [
        PR_STRING, 
        new RegExpCompat( "^(?:\\'\\'\\'(?:[^\\'\\\\]|\\\\[\\s\\S]|\\'{1,2}(?=[^\\']))*(?:\\'\\'\\'|$)|\\\"\\\"\\\"(?:[^\\\"\\\\]|\\\\[\\s\\S]|\\\"{1,2}(?=[^\\\"]))*(?:\\\"\\\"\\\"|$)|\\'(?:[^\\\\\\']|\\\\[\\s\\S])*(?:\\'|$)|\\\"(?:[^\\\\\\\"]|\\\\[\\s\\S])*(?:\\\"|$))" ),
        null,
        '\'"'
    ];
/** @type {StylePattern} */
var stylePatternMultiLineStrings =
    [
        PR_STRING, 
        new RegExpCompat( "^(?:\\'(?:[^\\\\\\']|\\\\[\\s\\S])*(?:\\'|$)|\\\"(?:[^\\\\\\\"]|\\\\[\\s\\S])*(?:\\\"|$)|\\`(?:[^\\\\\\`]|\\\\[\\s\\S])*(?:\\`|$))" ),
        null,
        '\'"`'
    ];
/** @type {StylePattern} */
var stylePatternSingleLineStrings =
    [
        PR_STRING,
        new RegExpCompat( "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))" ),
        null,
        '"\''
    ];
/** @type {StylePattern} */
var stylePatternVerbatimStrings =
    [
        PR_STRING,
        new RegExpCompat(  "^@\\\"(?:[^\\\"]|\\\"\\\")*(?:\\\"|$)" ),
        null // TODO delete?
    ];
/** @type {StylePattern} */
var stylePatternMultiLineCStyleComments =
    [
        PR_COMMENT,
        new RegExpCompat( "^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)" ),
        null,
        '#'
    ];
/** @type {StylePattern} */
var stylePatternSingleLineCStyleComments =
    [
        PR_COMMENT,
        new RegExpCompat( "^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\\b|[^\\r\\n]*)" ),
        null,
        '#'
    ];
/** @type {StylePattern} */
var stylePatternCStyleHeaderFile =
    [
        PR_STRING,
        new RegExpCompat(  "^<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h(?:h|pp|\\+\\+)?|[a-z]\\w*)>" ),
        null
    ];
/** @type {StylePattern} */
var stylePatternNotCStyleComments =
    [
        PR_COMMENT,
        new RegExpCompat(  "^#[^\\r\\n]*" ),
        null,
        '#'
    ];
/** @type {StylePattern} */
var stylePatternCStyleComments1 =
    [
        PR_COMMENT,
        new RegExpCompat(  "^\\/\\/[^\\r\\n]*" ),
        null
    ];
/** @type {StylePattern} */
var stylePatternCStyleComments2 =
    [
        PR_COMMENT,
        new RegExpCompat( "^\\/\\*[\\s\\S]*?(?:\\*\\/|$)" ),
        null
    ];
/** @type {StylePattern} */
var stylePatternRegexLiteralsMultiLine =
    [
        'lang-regex',
        new RegExpCompat( '^' + REGEXP_PRECEDER_PATTERN + '(' +
            // A regular expression literal starts with a slash that is
            // not followed by * or / so that it is not confused with
            // comments.
            '/(?=[^/*' + '' + '])'
            // and then contains any number of raw characters,
            + '(?:[^/\\x5B\\x5C' + '' + ']'
            // escape sequences (\x5C),
            +    '|\\x5C' + '.'
            // or non-nesting character sets (\x5B\x5D);
            +    '|\\x5B(?:[^\\x5C\\x5D' + '' + ']'
            +             '|\\x5C' + '.' + ')*(?:\\x5D|$))+'
            // finally closed by a /.
            + '/' + ')'
        )
    ];
/** @type {StylePattern} */
var stylePatternRegexLiteralsSingleLine =
    [
        'lang-regex',
        new RegExpCompat( '^' + REGEXP_PRECEDER_PATTERN + '(' +
            // A regular expression literal starts with a slash that is
            // not followed by * or / so that it is not confused with
            // comments.
            '/(?=[^/*' + '\n\r' + '])'
            // and then contains any number of raw characters,
            + '(?:[^/\\x5B\\x5C' + '\n\r' + ']'
            // escape sequences (\x5C),
            +    '|\\x5C' + '[\\S\\s]'
            // or non-nesting character sets (\x5B\x5D);
            +    '|\\x5B(?:[^\\x5C\\x5D' + '\n\r' + ']'
            +             '|\\x5C' + '[\\S\\s]' + ')*(?:\\x5D|$))+'
            // finally closed by a /.
            + '/' + ')'
        )
    ];

var reFormatKeywords1 = new RegExpCompat( '^ | $', 'g' );
var reFormatKeywords2 = new RegExpCompat( '[\\s,]+', 'g' );

/** @type {StylePattern} */
var stylePatternWhiteSpace =
    [
        PR_PLAIN,
        new RegExpCompat( '^\\s+' ),
        null,
        ' \r\n\t\xA0'
    ];

/** @type {StylePattern} */
var stylePatternFallthrough1 =
    // TODO(mikesamuel): recognize non-latin letters and numerals in idents
    [
        PR_LITERAL,
        new RegExpCompat( '^@[a-z_$][a-z_$@0-9]*', 'i' ),
        null
    ];
/** @type {StylePattern} */
var stylePatternFallthrough2 =
    [
        PR_TYPE,
        new RegExpCompat(  "^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b)" ),
        null
    ];
/** @type {StylePattern} */
var stylePatternFallthrough3 =
    [
        PR_PLAIN,
        new RegExpCompat( '^[a-z_$][a-z_$@0-9]*', 'i' ),
        null
    ];
/** @type {StylePattern} */
var stylePatternFallthrough4 =
    [
        PR_LITERAL,
        new RegExpCompat(
            '^(?:'
            // A hex number
            + '0x[a-f0-9]+'
            // or an octal or decimal number,
            + '|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)'
            // possibly in scientific notation
            + '(?:e[+\\-]?\\d+)?'
            + ')'
            // with an optional modifier like UL for unsigned long
            + '[a-z]*', 'i'),
        null,
        '0123456789'
    ];
// Don't treat escaped quotes in bash as starting strings.
// See issue 144.
/** @type {StylePattern} */
var stylePatternFallthrough5 =
    [
        PR_PLAIN,
        new RegExpCompat( "^\\\\[\\s\\S]?" ),
        null
    ];

var punctuation =
    // The Bash man page says

    // A word is a sequence of characters considered as a single
    // unit by GRUB. Words are separated by metacharacters,
    // which are the following plus space, tab, and newline: { }
    // | & $ ; < >
    // ...

    // A word beginning with # causes that word and all remaining
    // characters on that line to be ignored.

    // which means that only a '#' after /(?:^|[{}|&$;<>\s])/ starts a
    // comment but empirically
    // $ echo {#}
    // {#}
    // $ echo \$#
    // $#
    // $ echo }#
    // }#

    // so /(?:^|[|&;<>\s])/ is more appropriate.

    // http://gcc.gnu.org/onlinedocs/gcc-2.95.3/cpp_1.html#SEC3
    // suggests that this definition is compatible with a
    // default mode that tries to use a single token definition
    // to recognize both bash/python style comments and C
    // preprocessor directives.

    // This definition of punctuation does not include # in the list of
    // follow-on exclusions, so # will not be broken before if preceeded
    // by a punctuation character.  We could try to exclude # after
    // [|&;<>] but that doesn't seem to cause many major problems.
    // If that does turn out to be a problem, we should change the below
    // when hc is truthy to include # in the run of punctuation characters
    // only when not followint [|&;<>].
    '^.[^\\s\\w.$@\'"`/\\\\]*';

var rePunctuation = new RegExpCompat( punctuation );

var rePunctuationMulti = new RegExpCompat( punctuation + '(?!\s*\/)' );

/** returns a function that produces a list of decorations from source text.
  *
  * This code treats ", ', and ` as string delimiters, and \ as a string
  * escape.  It does not recognize perl's qq() style strings.
  * It has no special handling for double delimiter escapes as in basic, or
  * the tripled delimiters used in python, but should work on those regardless
  * although in those cases a single string literal may be broken up into
  * multiple adjacent string literals.
  *
  * It recognizes C, C++, and shell style comments.
  *
  * @param {Object} options a set of optional parameters.
  * @return {SimpleLexer} a function that examines the source code
  *     in the input job and builds a decoration list which it attaches to
  *     the job.
  */
function createSimpleLexerFromOptionalParameters( options ){
    var shortcutStylePatterns = [],
        fallthroughStylePatterns = [];

    if( options[ 'tripleQuotedStrings' ] ){
        // '''multi-line-string''', 'single-line-string', and double-quoted
        shortcutStylePatterns.push( stylePatternTripleQuotedStrings );
    } else if( options[ 'multiLineStrings' ] ){
        // 'multi-line-string', "multi-line-string"
        shortcutStylePatterns.push( stylePatternMultiLineStrings );
    } else {
        // 'single-line-string', "single-line-string"
        shortcutStylePatterns.push( stylePatternSingleLineStrings );
    };

    if( options[ 'verbatimStrings' ] ){
        // verbatim-string-literal production from the C# grammar.  See issue 93.
        fallthroughStylePatterns.push( stylePatternVerbatimStrings );
    };

    var hc = options[ 'hashComments' ];
    if( hc ){
        if( options[ 'cStyleComments' ] ){
            if( hc > 1 ){ // multiline hash comments
                shortcutStylePatterns.push( stylePatternMultiLineCStyleComments );
            } else {
                // Stop C preprocessor declarations at an unclosed open comment
                shortcutStylePatterns.push( stylePatternSingleLineCStyleComments );
            };
            // #include <stdio.h>
            fallthroughStylePatterns.push( stylePatternCStyleHeaderFile );
        } else {
            shortcutStylePatterns.push( stylePatternNotCStyleComments );
        };
    };

    if( options[ 'cStyleComments' ] ){
        fallthroughStylePatterns.push( stylePatternCStyleComments1 );
        fallthroughStylePatterns.push( stylePatternCStyleComments2 );
    };

    var regexLiterals = options[ 'regexLiterals' ];
    if( regexLiterals ){
        fallthroughStylePatterns.push( regexLiterals > 1 ? stylePatternRegexLiteralsMultiLine : stylePatternRegexLiteralsSingleLine );
    };

    var types = options[ 'types' ];
    if( types ){
        fallthroughStylePatterns.push( [ PR_TYPE, types ] );
    };

    var keywords = reFormatKeywords1.replace( '' + options[ 'keywords' ], '' );
    if( keywords ){
        fallthroughStylePatterns.push(
            [
                PR_KEYWORD,
                new RegExpCompat( '^(?:' + reFormatKeywords2.replace( keywords, '|' ) + ')\\b' ),
                null
            ]
        );
    };

    shortcutStylePatterns.push( stylePatternWhiteSpace );

    fallthroughStylePatterns.push(
        stylePatternFallthrough1,
        stylePatternFallthrough2,
        stylePatternFallthrough3,
        stylePatternFallthrough4,
        stylePatternFallthrough5,
        [ PR_PUNCTUATION, regexLiterals ? rePunctuationMulti : rePunctuation, null ]
    );

    return createSimpleLexer( shortcutStylePatterns, fallthroughStylePatterns );
};