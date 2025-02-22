/**
 * @license
 * Copyright (C) 2009 Google Inc.
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
 * Registers a language handler for Wiki pages.
 *
 * Based on WikiSyntax at http://code.google.com/p/support/wiki/WikiSyntax
 *
 * @author mikesamuel@gmail.com
 */

registerLangHandler(
    createSimpleLexer(
        [
         // Whitespace
         [PR_PLAIN,       RegExpProxy( "^[\\t \\xA0a-gi-z0-9]+" ), null,
          '\t \xA0abcdefgijklmnopqrstuvwxyz0123456789'],
         // Wiki formatting
         [PR_PUNCTUATION, RegExpProxy( "^[=*~\\^\\[\\]]+" ), null, '=*~^[]']
        ],
        [
         // Meta-info like #summary, #labels, etc.
         ['lang-wiki.meta',  RegExpProxy( "(?:^^|\\r\\n?|\\n)(#[a-z]+)\\b" )],
         // A WikiWord
         [PR_LITERAL,     RegExpProxy( "^(?:[A-Z][a-z][a-z0-9]+[A-Z][a-z][a-zA-Z0-9]+)\\b" )
          ],
         // A preformatted block in an unknown language
         ['lang-',           RegExpProxy( "^\\{\\{\\{([\\s\\S]+?)\\}\\}\\}" )],
         // A block of source code in an unknown language
         ['lang-',           RegExpProxy( "^`([^\\r\\n`]+)`" )],
         // An inline URL.
         [PR_STRING,
          RegExpProxy( "^https?:\\/\\/[^\\/?#\\s]*(?:\\/[^?#\\s]*)?(?:\\?[^#\\s]*)?(?:#\\S*)?", 'i' )],
         [PR_PLAIN,       RegExpProxy( "^(?:\\r\\n|[\\s\\S])[^#=*~^A-Zh\\{`\\[\\r\\n]*" )]
        ]),
    ['wiki']);

registerLangHandler(
    createSimpleLexer([[PR_KEYWORD, RegExpProxy( "^#[a-z]+", 'i' ), null, '#']], []),
    ['wiki.meta']);
