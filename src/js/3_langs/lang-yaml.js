/**
 * @license
 * Copyright (C) 2015 ribrdb @ code.google.com
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


// Contributed by ribrdb @ code.google.com

/**
 * @fileoverview
 * Registers a language handler for YAML.
 *
 * @author ribrdb
 */

registerLangHandler(
  createSimpleLexer(
    [
      [PR_PUNCTUATION, RegExpProxy( "^[:|>?]+" ), null, ':|>?'],
      [PR_DECLARATION,  RegExpProxy( "^%(?:YAML|TAG)[^#\\r\\n]+" ), null, '%'],
      [PR_TYPE, RegExpProxy( "^[&]\\S+" ), null, '&'],
      [PR_TYPE, RegExpProxy( "^!\\S*" ), null, '!'],
      [PR_STRING, RegExpProxy( "^\"(?:[^\\\\\"]|\\\\.)*(?:\"|$)" ), null, '"'],
      [PR_STRING, RegExpProxy( "^'(?:[^']|'')*(?:'|$)" ), null, "'"],
      [PR_COMMENT, RegExpProxy( "^#[^\\r\\n]*" ), null, '#'],
      [PR_PLAIN, RegExpProxy( "^\\s+" ), null, ' \t\r\n']
    ],
    [
      [PR_DECLARATION, RegExpProxy( "^(?:---|\\.\\.\\.)(?:[\\r\\n]|$)" )],
      [PR_PUNCTUATION, RegExpProxy( "^-" )],
      [PR_KEYWORD, RegExpProxy( "^[\\w-]+:[ \\r\\n]" )],
      [PR_PLAIN, RegExpProxy( "^\\w+" )]
    ]), ['yaml', 'yml']);
