/*

 Copyright (C) 2010 Google Inc.

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
PR.registerLangHandler(PR.createSimpleLexer([["pln",new RegExpCompat("^[\\t\\n\\r \\xA0]+"),null,"\t\n\r \u00a0"],["str",new RegExpCompat('^(?:"(?:(?:""(?:""?(?!")|[^\\\\"]|\\\\.)*"{0,3})|(?:[^"\\r\\n\\\\]|\\\\.)*"?))'),null,'"'],["lit",new RegExpCompat("^`(?:[^\\r\\n\\\\`]|\\\\.)*`?"),null,"`"],["pun",new RegExpCompat("^[!#%&()*+,\\-:;<=>?@\\[\\\\\\]^{|}~]+"),null,"!#%&()*+,-:;<=>?@[\\]^{|}~"]],[["str",new RegExpCompat("^'(?:[^\\r\\n\\\\']|\\\\(?:'|[^\\r\\n']+))'")],
["lit",new RegExpCompat("^'[a-zA-Z_$][\\w$]*(?!['$\\w])")],["kwd",new RegExpCompat("^(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|object|override|package|private|protected|requires|return|sealed|super|throw|trait|try|type|val|var|while|with|yield)\\b")],["lit",new RegExpCompat("^(?:true|false|null|this)\\b")],["lit",new RegExpCompat("^(?:(?:0(?:[0-7]+|X[0-9A-F]+))L?|(?:(?:0|[1-9][0-9]*)(?:(?:\\.[0-9]+)?(?:E[+\\-]?[0-9]+)?F?|L?))|\\\\.[0-9]+(?:E[+\\-]?[0-9]+)?F?)",
"i")],["typ",new RegExpCompat("^[$_]*[A-Z][_$A-Z0-9]*[a-z][\\w$]*")],["pln",new RegExpCompat("^[$a-zA-Z_][\\w$]*")],["com",new RegExpCompat("^\\/(?:\\/.*|\\*(?:\\/|\\**[^*/])*(?:\\*+\\/?)?)")],["pun",new RegExpCompat("^(?:\\.+|\\/)")]]),["scala"]);
