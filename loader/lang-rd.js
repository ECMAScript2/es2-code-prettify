/*

 Copyright (C) 2012 Jeffrey Arnold

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
PR.registerLangHandler(PR.createSimpleLexer([["pln",new RegExpCompat("^[\\t\\n\\r \\xA0]+"),null,"\t\n\r \u00a0"],["com",new RegExpCompat("^%[^\\r\\n]*"),null,"%"]],[["lit",new RegExpCompat("^\\\\(?:cr|l?dots|R|tab)\\b")],["kwd",new RegExpCompat("^\\\\[a-zA-Z@]+")],["kwd",new RegExpCompat("^#(?:ifn?def|endif)")],["pln",new RegExpCompat("^\\\\[{}]")],["pun",new RegExpCompat("^[{}()\\[\\]]+")]]),["Rd","rd"]);
