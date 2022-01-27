/*

 Copyright (C) 2013 Google Inc.

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
PR.registerLangHandler(PR.createSimpleLexer([["pln",new RegExpCompat("^[\\t\\n\\r \\xA0]+"),null,"\t\n\r \u00a0"]],[["com",new RegExpCompat("^#!(?:.*)")],["kwd",new RegExpCompat("^\\b(?:import|library|part of|part|as|show|hide)\\b","i")],["com",new RegExpCompat("^\\/\\/(?:.*)")],["com",new RegExpCompat("^\\/\\*[^*]*\\*+(?:[^\\/*][^*]*\\*+)*\\/")],["kwd",new RegExpCompat("^\\b(?:class|interface)\\b","i")],["kwd",new RegExpCompat("^\\b(?:assert|async|await|break|case|catch|continue|default|do|else|finally|for|if|in|is|new|return|super|switch|sync|this|throw|try|while)\\b",
"i")],["kwd",new RegExpCompat("^\\b(?:abstract|const|extends|factory|final|get|implements|native|operator|set|static|typedef|var)\\b","i")],["typ",new RegExpCompat("^\\b(?:bool|double|Dynamic|int|num|Object|String|void)\\b","i")],["kwd",new RegExpCompat("^\\b(?:false|null|true)\\b","i")],["str",new RegExpCompat("^r?[\\']{3}[\\s|\\S]*?[^\\\\][\\']{3}")],["str",new RegExpCompat('^r?[\\"]{3}[\\s|\\S]*?[^\\\\][\\"]{3}')],["str",new RegExpCompat("^r?\\'(\\'|(?:[^\\n\\r\\f])*?[^\\\\]\\')")],
["str",new RegExpCompat('^r?\\"(\\"|(?:[^\\n\\r\\f])*?[^\\\\]\\")')],["typ",new RegExpCompat("^[A-Z]\\w*")],["pln",new RegExpCompat("^[a-z_$][a-z0-9_]*","i")],["pun",new RegExpCompat("^[~!%^&*+=|?:<>/-]")],["lit",new RegExpCompat("^\\b0x[0-9a-f]+","i")],["lit",new RegExpCompat("^\\b\\d+(?:\\.\\d*)?(?:e[+-]?\\d+)?","i")],["lit",new RegExpCompat("^\\b\\.\\d+(?:e[+-]?\\d+)?","i")],["pun",new RegExpCompat("^[(){}\\[\\],.;]")]]),["dart"]);
