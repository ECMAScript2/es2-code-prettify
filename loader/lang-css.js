/*

 Copyright (C) 2009 Google Inc.

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
PR.registerLangHandler(PR.createSimpleLexer([["pln",new RegExpCompat("^[ \\t\\r\\n\\f]+"),null," \t\r\n\f"]],[["str",new RegExpCompat('^\\"(?:[^\\n\\r\\f\\\\\\"]|\\\\(?:\\r\\n?|\\n|\\f)|\\\\[\\s\\S])*\\"'),null],["str",new RegExpCompat("^\\'(?:[^\\n\\r\\f\\\\\\']|\\\\(?:\\r\\n?|\\n|\\f)|\\\\[\\s\\S])*\\'"),null],["lang-css-str",new RegExpCompat("^url\\(([^\\)\\\"\\']+)\\)","i")],["kwd",new RegExpCompat("^(?:url|rgb|\\!important|@import|@page|@media|@charset|inherit)(?=[^\\-\\w]|$)",
"i"),null],["lang-css-kw",new RegExpCompat("^(-?(?:[_a-z]|(?:\\\\[0-9a-f]+ ?))(?:[_a-z0-9\\-]|\\\\(?:\\\\[0-9a-f]+ ?))*)\\s*:","i")],["com",new RegExpCompat("^\\/\\*[^*]*\\*+(?:[^\\/*][^*]*\\*+)*\\/")],["com",new RegExpCompat("^(?:\x3c!--|--\x3e)")],["lit",new RegExpCompat("^(?:\\d+|\\d*\\.\\d+)(?:%|[a-z]+)?","i")],["lit",new RegExpCompat("^#(?:[0-9a-f]{3}){1,2}\\b","i")],["pln",new RegExpCompat("^-?(?:[_a-z]|(?:\\\\[\\da-f]+ ?))(?:[_a-z\\d\\-]|\\\\(?:\\\\[\\da-f]+ ?))*",
"i")],["pun",new RegExpCompat("^[^\\s\\w\\'\\\"]+")]]),["css"]);PR.registerLangHandler(PR.createSimpleLexer([],[["kwd",new RegExpCompat("^-?(?:[_a-z]|(?:\\\\[\\da-f]+ ?))(?:[_a-z\\d\\-]|\\\\(?:\\\\[\\da-f]+ ?))*","i")]]),["css-kw"]);PR.registerLangHandler(PR.createSimpleLexer([],[["str",new RegExpCompat("^[^\\)\\\"\\']+")]]),["css-str"]);
