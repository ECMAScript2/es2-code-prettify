/**
 * @license
 * Copyright (C) 2017 Jacek Królikowski
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview
 * Registers a language handler for Elixir.
 *
 * @author nietaki@gmail.com
 */

registerLangHandler(
    createSimpleLexer(
        [
         [PR_PLAIN, RegExpProxy( "^[\\t\\n\\r \\xA0]+" ), null, '\t\n\r \xA0'],
         // # comments
         [PR_COMMENT, RegExpProxy( "^#.*" ), null, '#'],
         // a (possibly multiline) charlist
         [PR_LITERAL, RegExpProxy( "^'(?:[^'\\\\]|\\\\(?:.|\\n|\\r))*'?" ), null, '\''],
         // @attributes
         [PR_ATTRIB_NAME, RegExpProxy( "^@\\w+" ), null, '@'],
         [PR_PUNCTUATION, RegExpProxy( "^[!%&()*+,\\-;<=>?\\[\\\\\\]^{|}]+" ), null,
          '!%&()*+,-;<=>?[\\]^{|}'],
         // Borrowed from lang-erlang.js:
         [PR_LITERAL,
          RegExpProxy( "^(?:0o[0-7](?:[0-7]|_[0-7])*|0x[\\da-fA-F](?:[\\da-fA-F]|_[\\da-fA-F])*|\\d(?:\\d|_\\d)*(?:\\.\\d(?:\\d|_\\d)*)?(?:[eE][+\\-]?\\d(?:\\d|_\\d)*)?)" ),
          null, '0123456789']
        ],
        [
         // the iex> prompt for interactive examples
         [PR_ATTRIB_NAME, RegExpProxy( "^iex(?:\\(\\d+\\))?> " )],
         // special case for binaries, so that they don't get presented like atoms
         [PR_PUNCTUATION, RegExpProxy( "^::" )],
         // atoms - :__a_word or :"colon followed by a string"
         [PR_LITERAL, RegExpProxy( "^:(?:\\w+[\\!\\?\\@]?|\"(?:[^\"\\\\]|\\\\.)*\"?)" )],
         // compile-time information
         [PR_ATTRIB_NAME, RegExpProxy( "^(?:__(?:CALLER|ENV|MODULE|DIR)__)" )],
         // keywords
         [PR_KEYWORD,
          RegExpProxy( "^(?:alias|case|catch|def(?:delegate|exception|impl|macrop?|module|overridable|p?|protocol|struct)|do|else|end|fn|for|if|in|import|quote|raise|require|rescue|super|throw|try|unless|unquote(?:_splicing)?|use|when|with|yield)\\b" )],
         [PR_LITERAL, RegExpProxy( "^(?:true|false|nil)\\b" )],
         // atoms as keyword list keys
         // NOTE: this does also handle the %{"I'm an atom": :foo} case
         //
         // Contains negative lookahead to handle <<foo::binary>>
         [PR_LITERAL, RegExpProxy( "^(?:\\w+[\\!\\?\\@]?|\"(?:[^\"\\\\]|\\\\.)*\"):(?!:)" )],
         // heredoc: triple double-quoted multi-line string.
         //
         // NOTE: the opening """ needs to be followed by a newline
         [PR_STRING,
          RegExpProxy( "^\"\"\"\\s*(\\r|\\n)+(?:\"\"?(?!\")|[^\\\\\"]|\\\\(?:.|\\n|\\r))*\"{0,3}" )],
         // A double-quoted multi-line string
         [PR_STRING,
          RegExpProxy( "^\"(?:[^\"\\\\]|\\\\(?:.|\\n|\\r))*\"?(?!\")" )],
         // types
         [PR_TYPE, RegExpProxy( "^[A-Z]\\w*" )],
         // variables not meant to be used or private functions
         [PR_COMMENT, RegExpProxy( "^_\\w*" )],
         // plain: variables, functions, ...
         [PR_PLAIN, RegExpProxy( "^[$a-z]\\w*[\\!\\?]?" )],
         // sigils with the same starting and ending character.
         // Key part: X(?:[^X\r\n\\]|\\.)+X where X is the sigil character
         [PR_ATTRIB_VALUE, RegExpProxy( "^~[A-Z](?:\\/(?:[^\\/\\r\\n\\\\]|\\\\.)+\\/|\\|(?:[^\\|\\r\\n\\\\]|\\\\.)+\\||\"(?:[^\"\\r\\n\\\\]|\\\\.)+\"|'(?:[^'\\r\\n\\\\]|\\\\.)+')[A-Z]*", 'i' )],
         // sigils with a different starting and ending character.
         // Key part: X(?:[^Y\r\n\\]|\\.)+Y where X and Y are the starting and ending characters
         [PR_ATTRIB_VALUE, RegExpProxy( "^~[A-Z](?:\\((?:[^\\)\\r\\n\\\\]|\\\\.)+\\)|\\[(?:[^\\]\\r\\n\\\\]|\\\\.)+\\]|\\{(?:[^\\}\\r\\n\\\\]|\\\\.)+\\}|\\<(?:[^\\>\\r\\n\\\\]|\\\\.)+\\>)[A-Z]*", 'i' )],
         [PR_PUNCTUATION, RegExpProxy( "^(?:\\.+|\\/|[:~])" )]
        ]),
    ['ex','exs']);
