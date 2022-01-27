/*

 Copyright (C) 2011 Zimin A.V.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
PR.registerLangHandler(PR.createSimpleLexer([["str",new RegExpCompat("^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*\\'|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))"),null,'"'],["com",new RegExpCompat("^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\\b|[^\\r\\n]*)"),null,"#"],["pln",new RegExpCompat("^\\s+"),null," \r\n\t\u00a0"]],[["str",new RegExpCompat('^@\\"(?:[^\\"]|\\"\\")*(?:\\"|$)'),null],["str",new RegExpCompat("^<#(?:[^#>])*(?:#>|$)"),
null],["str",new RegExpCompat("^<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h|[a-z]\\w*)>"),null],["com",new RegExpCompat("^\\/\\/[^\\r\\n]*"),null],["com",new RegExpCompat("^\\/\\*[\\s\\S]*?(?:\\*\\/|$)"),null],["kwd",new RegExpCompat("^(?:abstract|and|as|base|catch|class|def|delegate|enum|event|extern|false|finally|fun|implements|interface|internal|is|macro|match|matches|module|mutable|namespace|new|null|out|override|params|partial|private|protected|public|ref|sealed|static|struct|syntax|this|throw|true|try|type|typeof|using|variant|virtual|volatile|when|where|with|assert|assert2|async|break|checked|continue|do|else|ensures|for|foreach|if|late|lock|new|nolate|otherwise|regexp|repeat|requires|return|surroundwith|unchecked|unless|using|while|yield)\\b"),
null],["typ",new RegExpCompat("^(?:array|bool|byte|char|decimal|double|float|int|list|long|object|sbyte|short|string|ulong|uint|ufloat|ulong|ushort|void)\\b"),null],["lit",new RegExpCompat("^@[a-z_$][a-z_$@0-9]*","i"),null],["typ",new RegExpCompat("^@[A-Z]+[a-z][A-Za-z_$@0-9]*"),null],["pln",new RegExpCompat("^'?[A-Za-z_$][a-z_$@0-9]*","i"),null],["lit",new RegExpCompat("^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*","i"),null,
"0123456789"],["pun",new RegExpCompat("^.[^\\s\\w\\.$@\\'\\\"\\`\\/\\#]*"),null]]),["n","nemerle"]);
