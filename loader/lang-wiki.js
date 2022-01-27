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
PR.registerLangHandler(PR.createSimpleLexer([["pln",new RegExpCompat("^[\\t \\xA0a-gi-z0-9]+"),null,"\t \u00a0abcdefgijklmnopqrstuvwxyz0123456789"],["pun",new RegExpCompat("^[=*~\\^\\[\\]]+"),null,"=*~^[]"]],[["lang-wiki.meta",new RegExpCompat("(?:^^|\\r\\n?|\\n)(#[a-z]+)\\b")],["lit",new RegExpCompat("^(?:[A-Z][a-z][a-z0-9]+[A-Z][a-z][a-zA-Z0-9]+)\\b")],["lang-",new RegExpCompat("^\\{\\{\\{([\\s\\S]+?)\\}\\}\\}")],["lang-",new RegExpCompat("^`([^\\r\\n`]+)`")],["str",
new RegExpCompat("^https?:\\/\\/[^\\/?#\\s]*(?:\\/[^?#\\s]*)?(?:\\?[^#\\s]*)?(?:#\\S*)?","i")],["pln",new RegExpCompat("^(?:\\r\\n|[\\s\\S])[^#=*~^A-Zh\\{`\\[\\r\\n]*")]]),["wiki"]);PR.registerLangHandler(PR.createSimpleLexer([["kwd",new RegExpCompat("^#[a-z]+","i"),null,"#"]],[]),["wiki.meta"]);
