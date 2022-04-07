/**
 * @license
 * Copyright (C) 2011 Zimin A.V.
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
 * Registers a language handler for the Nemerle language.
 * http://nemerle.org
 * @author Zimin A.V.
 */
(function () {
  // http://nemerle.org/wiki/index.php?title=Base_keywords
  var keywords = 'abstract|and|as|base|catch|class|def|delegate|enum|event|extern|false|finally|'
         + 'fun|implements|interface|internal|is|macro|match|matches|module|mutable|namespace|new|'
         + 'null|out|override|params|partial|private|protected|public|ref|sealed|static|struct|'
         + 'syntax|this|throw|true|try|type|typeof|using|variant|virtual|volatile|when|where|with|'
         + 'assert|assert2|async|break|checked|continue|do|else|ensures|for|foreach|if|late|lock|new|nolate|'
         + 'otherwise|regexp|repeat|requires|return|surroundwith|unchecked|unless|using|while|yield';

  registerLangHandler(createSimpleLexer(
      // shortcutStylePatterns
      [
        [PR_STRING, RegExpProxy( "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*\\'|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))" ), null, '"'],
        [PR_COMMENT, RegExpProxy( "^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\\b|[^\\r\\n]*)" ), null, '#'],
        [PR_PLAIN, RegExpProxy( "^\\s+" ), null, ' \r\n\t\xA0']
      ],
      // fallthroughStylePatterns
      [
        [PR_STRING, RegExpProxy( "^@\\\"(?:[^\\\"]|\\\"\\\")*(?:\\\"|$)" ), null],
        [PR_STRING, RegExpProxy( "^<#(?:[^#>])*(?:#>|$)" ), null],
        [PR_STRING, RegExpProxy( "^<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h|[a-z]\\w*)>" ), null],
        [PR_COMMENT, RegExpProxy( "^\\/\\/[^\\r\\n]*" ), null],
        [PR_COMMENT, RegExpProxy( "^\\/\\*[\\s\\S]*?(?:\\*\\/|$)" ), null],
        [PR_KEYWORD, RegExpProxy('^(?:' + keywords + ')\\b'), null],
        [PR_TYPE, RegExpProxy( "^(?:array|bool|byte|char|decimal|double|float|int|list|long|object|sbyte|short|string|ulong|uint|ufloat|ulong|ushort|void)\\b" ), null],
        [PR_LITERAL, RegExpProxy( "^@[a-z_$][a-z_$@0-9]*", 'i' ), null],
        [PR_TYPE, RegExpProxy( "^@[A-Z]+[a-z][A-Za-z_$@0-9]*" ), null],
        [PR_PLAIN, RegExpProxy( "^'?[A-Za-z_$][a-z_$@0-9]*", 'i' ), null],
        [PR_LITERAL, RegExpProxy(
             '^(?:'
  // A hex number
             + '0x[a-f0-9]+'
  // or an octal or decimal number,
             + '|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)'
  // possibly in scientific notation
             + '(?:e[+\\-]?\\d+)?'
             + ')'
  // with an optional modifier like UL for unsigned long
             + '[a-z]*', 'i'), null, '0123456789'],

        [PR_PUNCTUATION, RegExpProxy( "^.[^\\s\\w\\.$@\\'\\\"\\`\\/\\#]*" ), null]
      ]),
      ['n', 'nemerle']);
})();
