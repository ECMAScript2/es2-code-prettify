/**
 * @license
 * Copyright (C) 2009 Onno Hommes.
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
 * Registers a language handler for the AGC/AEA Assembly Language as described
 * at http://virtualagc.googlecode.com
 * <p>
 * This file could be used by goodle code to allow syntax highlight for
 * Virtual AGC SVN repository or if you don't want to commonize
 * the header for the agc/aea html assembly listing.
 *
 * @author ohommes@alumni.cmu.edu
 */

registerLangHandler(
    createSimpleLexer(
        [
         // A line comment that starts with ;
         [PR_COMMENT,     RegExpProxy( "^#[^\\r\\n]*" ), null, '#'],
         // Whitespace
         [PR_PLAIN,       RegExpProxy( "^[\\t\\n\\r \\xA0]+" ), null, '\t\n\r \xA0'],
         // A double quoted, possibly multi-line, string.
         [PR_STRING,      RegExpProxy( "^\\\"(?:[^\\\"\\\\]|\\\\[\\s\\S])*(?:\\\"|$)" ), null, '"']
        ],
        [
         [PR_KEYWORD, RegExpProxy( "^(?:ADS|AD|AUG|BZF|BZMF|CAE|CAF|CA|CCS|COM|CS|DAS|DCA|DCOM|DCS|DDOUBL|DIM|DOUBLE|DTCB|DTCF|DV|DXCH|EDRUPT|EXTEND|INCR|INDEX|NDX|INHINT|LXCH|MASK|MSK|MP|MSU|NOOP|OVSK|QXCH|RAND|READ|RELINT|RESUME|RETURN|ROR|RXOR|SQUARE|SU|TCR|TCAA|OVSK|TCF|TC|TS|WAND|WOR|WRITE|XCH|XLQ|XXALQ|ZL|ZQ|ADD|ADZ|SUB|SUZ|MPY|MPR|MPZ|DVP|COM|ABS|CLA|CLZ|LDQ|STO|STQ|ALS|LLS|LRS|TRA|TSQ|TMI|TOV|AXT|TIX|DLY|INP|OUT)\\s" ),null],
         [PR_TYPE, RegExpProxy( "^(?:-?GENADR|=MINUS|2BCADR|VN|BOF|MM|-?2CADR|-?[1-6]DNADR|ADRES|BBCON|[SE]?BANK\\=?|BLOCK|BNKSUM|E?CADR|COUNT\\*?|2?DEC\\*?|-?DNCHAN|-?DNPTR|EQUALS|ERASE|MEMORY|2?OCT|REMADR|SETLOC|SUBRO|ORG|BSS|BES|SYN|EQU|DEFINE|END)\\s" ),null],
         // A single quote possibly followed by a word that optionally ends with
         // = ! or ?.
         [PR_LITERAL,
          RegExpProxy( "^\\'(?:-*(?:\\w|\\\\[\\x21-\\x7e])(?:[\\w-]*|\\\\[\\x21-\\x7e])[=!?]?)?" )],
         // Any word including labels that optionally ends with = ! or ?.
         [PR_PLAIN,
          RegExpProxy( "^-*(?:[!-z_]|\\\\[\\x21-\\x7e])(?:[\\w-]*|\\\\[\\x21-\\x7e])[=!?]?", 'i' )],
         // A printable non-space non-special character
         [PR_PUNCTUATION, RegExpProxy( "^[^\\w\\t\\n\\r \\xA0()\\\"\\\\\\';]+" )]
        ]),
    ['apollo', 'agc', 'aea']);
