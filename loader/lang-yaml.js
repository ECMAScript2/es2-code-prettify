/*

 Copyright (C) 2015 ribrdb @ code.google.com

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
PR.registerLangHandler(PR.createSimpleLexer([["pun",new RegExpCompat("^[:|>?]+"),null,":|>?"],["dec",new RegExpCompat("^%(?:YAML|TAG)[^#\\r\\n]+"),null,"%"],["typ",new RegExpCompat("^[&]\\S+"),null,"&"],["typ",new RegExpCompat("^!\\S*"),null,"!"],["str",new RegExpCompat('^"(?:[^\\\\"]|\\\\.)*(?:"|$)'),null,'"'],["str",new RegExpCompat("^'(?:[^']|'')*(?:'|$)"),null,"'"],["com",new RegExpCompat("^#[^\\r\\n]*"),null,"#"],["pln",new RegExpCompat("^\\s+"),
null," \t\r\n"]],[["dec",new RegExpCompat("^(?:---|\\.\\.\\.)(?:[\\r\\n]|$)")],["pun",new RegExpCompat("^-")],["kwd",new RegExpCompat("^[\\w-]+:[ \\r\\n]")],["pln",new RegExpCompat("^\\w+")]]),["yaml","yml"]);
