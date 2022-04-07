/**
 * @license
 * Copyright (C) 2017 Michał Bączkowski
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
 * Registers a language handler for Kotlin.
 *
 * Limitations:
 * - doesn't support string interpolation ("$var")
 * - doesn't support labels if there is no space between the keyword (break@loop, loop@for)
 *
 * @author mibac138@gmail.com
 */

registerLangHandler(
    createSimpleLexer(
        [
            [PR_PLAIN, RegExpProxy( "^[\\t\\n\\r \\xA0]+" ), null, '\t\n\r \xA0'],
            [PR_PUNCTUATION, RegExpProxy( "^[.!%&()*+,\\-;<=>?\\[\\\\\\]^{|}:]+" ), null, '.!%&()*+,-;<=>?[\\]^{|}:']
        ],
        [
            // keywords
            [PR_KEYWORD,
                RegExpProxy( "^\\b(package|public|protected|private|open|abstract|constructor|final|override|import|for|while|as|typealias|get|set|((data|enum|annotation|sealed) )?class|this|super|val|var|fun|is|in|throw|return|break|continue|(companion )?object|if|try|else|do|when|init|interface|typeof)\\b" )],
            [PR_LITERAL, RegExpProxy( "^(?:true|false|null)\\b" )],
            // number literals
            [PR_LITERAL, RegExpProxy( "^(0[xX][0-9a-fA-F_]+L?|0[bB][0-1]+L?|[0-9_.]+([eE]-?[0-9]+)?[fFL]?)" )],
            [PR_TYPE, RegExpProxy( "^(\\b[A-Z]+[a-z][a-zA-Z0-9_$@]*|`.*`)" ), null],
            //double slash comments
            [PR_COMMENT, RegExpProxy( "^\\/\\/.*" )],
            //slash star comments and documentation
            [PR_COMMENT, RegExpProxy( "^\\/\\*[\\s\\S]*?(?:\\*\\/|$)" )],
            // char
            [PR_STRING, RegExpProxy( "'.'" )],
            // string
            [PR_STRING, RegExpProxy( "^\"([^\"\\\\]|\\\\[\\s\\S])*\"" )],
            // multiline string
            [PR_STRING, RegExpProxy( "^\"{3}[\\s\\S]*?[^\\\\]\"{3}" )],
            // annotation (and label)
            [PR_LITERAL, RegExpProxy( "^@([a-zA-Z0-9_$@]*|`.*`)" )],
            // label definition
            [PR_LITERAL, RegExpProxy( "^[a-zA-Z0-9_]+@" )]
        ]),
    ['kotlin']);
