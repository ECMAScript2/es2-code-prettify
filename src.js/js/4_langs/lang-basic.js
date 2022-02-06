/**
 * @license
 * Copyright (C) 2013 Peter Kofler
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

// Contributed by peter dot kofler at code minus cop dot org

/**
 * @fileoverview
 * Registers a language handler for Basic.
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-basic">(my BASIC code)</pre>
 *
 * @author peter dot kofler at code minus cop dot org
 */

registerLangHandler(
    createSimpleLexer(
        [ // shortcutStylePatterns
          // "single-line-string"
          [PR_STRING,        RegExpProxy( "^(?:\"(?:[^\\\\\"\\r\\n]|\\\\.)*(?:\"|$))" ), null, '"'],
          // Whitespace
          [PR_PLAIN,         RegExpProxy( "^\\s+" ), null, ' \r\n\t\xA0']
        ],
        [ // fallthroughStylePatterns
          // A line comment that starts with REM
          [PR_COMMENT,       RegExpProxy( "^REM[^\\r\\n]*" ), null],
          [PR_KEYWORD,       RegExpProxy( "^\\b(?:AND|CLOSE|CLR|CMD|CONT|DATA|DEF ?FN|DIM|END|FOR|GET|GOSUB|GOTO|IF|INPUT|LET|LIST|LOAD|NEW|NEXT|NOT|ON|OPEN|OR|POKE|PRINT|READ|RESTORE|RETURN|RUN|SAVE|STEP|STOP|SYS|THEN|TO|VERIFY|WAIT)\\b" ), null],
          [PR_PLAIN,         RegExpProxy( "^[A-Z][A-Z0-9]?(?:\\$|%)?", 'i' ), null],
          // Literals .0, 0, 0.0 0E13
          [PR_LITERAL,       RegExpProxy(  "^(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+\\-]?\\d+)?", 'i' ),  null, '0123456789'],
          [PR_PUNCTUATION,   RegExpProxy( "^.[^\\s\\w\\.$%\"]*" ), null]
          // [PR_PUNCTUATION,   /^[-,:;!<>=\+^\/\*]+/]
        ]),
    ['basic','cbm']);
