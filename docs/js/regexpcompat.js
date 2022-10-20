(function(ka,U,u,M,aa,v){function V(a,b){var c=a.length;if(0>b||b>=c)return v;var d=a.charCodeAt(b);return 55296<=d&&56319>=d&&c>b+1&&(c=a.charCodeAt(b+1),56320<=c&&57343>=c)?1024*(d-55296)+c-56320+65536:d}function N(a,b){return b<=a.length?a:("0000"+a).substr(4-b+a.length)}function C(a,b,c){return a.substr(c,b.length)===b}function O(a){for(var b=a.length,c=[];b;)c[--b]=a[b];return c
}function P(a,b){for(var c=a.length,d=[];c;)d[--c]=b(a[c],c);return d}function Ba(a,b){for(var c=(a.length>>>0)-1,d=a[c--];0<=c;--c)d=b(d,a[c]);return d}function Ca(a,b){var c=b||a+1;var d=a;for(var e=-1,f=this.length/2;1<f-e;){var g=e+W((f-e)/2);d<=this[2*g+1]?f=g:e=g}d=f;e=la(this,c);e=this.splice(2*d,2*(e-d+1));0<e.length&&(a=M.min(a,e[0]),c=M.max(c,e[e.length-1]));this.splice(2*d,0,a,c)
}function Da(a){for(var b,c,d=-1,e=a.length-1;d<e;)b=a[++d],c=a[++d],this.add(b,c)}function Ea(){if(0===this.length)return this.push(0,1114112),this;if(0===this[0]&&1114112===this[this.length-1])return this.shift(),this.pop(),this;this.unshift(0);this.push(1114112);return this}function Fa(){return G(O(this))}function Ga(a){var b=la(this,a);if(0>b||this.length<=2*b)return!1;var c=this[2*b+1];
return this[2*b]<=a&&a<c}function Ha(a){a=a?"[^":"[";for(var b=-1,c=this.length-1;b<c;){var d=this[++b],e=this[++b];a+=ba(d,!0);d!==e-1&&(a+="-"+ba(e-1,!0))}return a+"]"}function Ia(){return"CharSet"+this.R()}function la(a,b){for(var c=-1,d=a.length/2;1<d-c;){var e=c+W((d-c)/2);a[2*e]<=b?c=e:d=e}return c}function X(a){switch(a){case"\n":return"\\n";case"\r":return"\\r";case"\u2028":
return"\\u2028";case"\u2029":return"\\u2029"}return a}function ma(a){switch(a.type){case 15:return X(a.raw);case 18:return X(a.children[0].raw)+"-"+X(a.children[1].raw);case 16:switch(a.kind){case 1:return a.m?"\\D":"\\d";case 2:return a.m?"\\W":"\\w";case 3:return a.m?"\\S":"\\s"}}}function Ja(a){return"|"===a||")"===a||""===a}function ca(a){return"0"<=a&&"9">=a}function Q(a){
for(var b=a.g,c=[na(a)];"|"===l(a);)++a.g,c.push(na(a));return 1===c.length?c[0]:{type:1,children:c,i:[b,a.g]}}function na(a){for(var b=a.g,c=[];!Ja(l(a));)c.push(Ka(a));return 1===c.length?c[0]:{type:2,children:c,i:[b,a.g]}}function Ka(a){var b=a.g,c=La(a);if(10<=c.type&&13>=c.type&&(!a.j||13!==c.type))return c;switch(l(a)){case"*":return da(a,6,b,c);case"+":return da(a,7,b,c);
case"?":return da(a,8,b,c);case"{":a:{var d=a.g,e=oa(a);if(!e){if(a.j){a.g=d;a=c;break a}throw new m("incomplete quantifier")}d=e.min;e=e.max;if(d>(null!==e?e:d))throw new m("numbers out of order in quantifier");var f=!1;"?"===l(a)&&(++a.g,f=!0);a={type:9,min:d,max:e,s:f,l:c,i:[b,a.g]}}return a}return c}function da(a,b,c,d){++a.g;var e=!1;"?"===l(a)&&(++a.g,e=!0);
return{type:b,s:e,l:d,i:[c,a.g]}}function oa(a){var b=a.g;++a.g;var c=ea(a);if(0>c)a.g=b;else{var d=null;if(","===l(a))if(++a.g,"}"===l(a))d=aa;else if(d=ea(a),0>d){a.g=b;return}if("}"!==l(a))a.g=b;else return++a.g,{min:c,max:d}}}function La(a){var b=a.g,c=l(a);switch(c){case".":return++a.g,{type:19,i:[b,a.g]};case"^":return++a.g,{type:11,i:[b,a.g]
};case"$":return++a.g,{type:12,i:[b,a.g]};case"[":b=a.g;++a.g;c=!1;"^"===l(a)&&(++a.g,c=!0);for(var d=[];"]"!==l(a);)d.push(Ma(a));++a.g;return{type:17,m:c,children:d,i:[b,a.g]};case"\\":return Na(a);case"(":return Oa(a);case"*":case"+":case"?":throw new m("nothing to repeat");case"{":if(a.j){if(oa(a))throw new m("nothing to repeat");break}throw new m("lone quantifier brackets");
case"}":if(a.j)break;throw new m("lone quantifier brackets");case"]":if(a.j)break;throw new m("lone character class brackets");case")":case"|":case"":throw Error("BUG: invalid character")}a.g+=c.length;d=V(c,0);if(d===v)throw Error("BUG: invalid character");return{type:15,value:d,raw:c,i:[b,a.g]}}function Ma(a){var b=a.g,c=pa(a);if("-"!==l(a)||C(a.source,"-]",a.g))return c;
if(16===c.type){if(a.j)return c;throw new m("invalid character class")}var d=a.g;++a.g;var e=pa(a);if(16===e.type){if(a.j)return a.g=d,c;throw new m("invalid character class")}if(c.value>e.value)throw new m("range out of order in character class");return{type:18,children:[c,e],i:[b,a.g]}}function pa(a){var b=a.g,c=l(a);if(""===c)throw new m("unterminated character class");
if("\\"!==c){a.g+=c.length;var d=V(c,0);if(d===v)throw Error("BUG: invalid character");return{type:15,value:d,raw:c,i:[b,a.g]}}if(C(a.source,"\\-",a.g))return a.g+=2,{type:15,value:45,raw:"\\-",i:[b,a.g]};if(C(a.source,"\\b",a.g))return a.g+=2,{type:15,value:8,raw:"\\b",i:[b,a.g]};if(b=qa(a))return b;if(a=ra(a))return a;throw new m("invalid escape")}function Na(a){
var b=a.g;C(a.source,"\\b",a.g)?(a.g+=2,b={type:10,m:!1,i:[b,a.g]}):C(a.source,"\\B",a.g)?(a.g+=2,b={type:10,m:!0,i:[b,a.g]}):b=void 0;if(b)return b;a:{b=a.g;++a.g;if("0"!==l(a)){var c=ea(a);if(1<=c&&(!a.j||c<=a.B)){b={type:20,index:c,i:[b,a.g]};break a}}a.g=b;b=void 0}if(b)return b;if(b=qa(a))return b;if(a=ra(a))return a;throw new m("invalid escape")}function ra(a){
var b=a.g;a:{var c=a.g;++a.g;if("u"!==l(a))a.g=c,c="";else{++a.g;var d=sa(a,4);if(0>d){if(a.j){a.g=c;c="";break a}throw new m("invalid Unicode escape")}c=H(d)}}if(""!==c){c=V(c,0);if(c===v)throw Error("BUG: invalid character");return{type:15,value:c,raw:a.source.slice(b,a.g),i:[b,a.g]}}++a.g;switch(l(a)){case"t":return++a.g,{type:15,value:9,raw:"\\t",i:[b,
a.g]};case"n":return++a.g,{type:15,value:10,raw:"\\n",i:[b,a.g]};case"v":return++a.g,{type:15,value:11,raw:"\\v",i:[b,a.g]};case"f":return++a.g,{type:15,value:12,raw:"\\f",i:[b,a.g]};case"r":return++a.g,{type:15,value:13,raw:"\\r",i:[b,a.g]};case"c":++a.g;d=l(a);if("a"<=d&&"z">=d||"A"<=d&&"Z">=d)++a.g,c=d.charCodeAt(0)%32;else{if(a.j){--a.g;break}
throw new m("invalid control escape")}return{type:15,value:c,raw:a.source.slice(b,a.g),i:[b,a.g]};case"x":++a.g;c=sa(a,2);if(0>c){--a.g;break}return{type:15,value:c,raw:a.source.slice(b,a.g),i:[b,a.g]};case"0":++a.g;if(ca(l(a))){--a.g;break}return{type:15,value:0,raw:"\\0",i:[b,a.g]};case"":throw new m("\\ at end of pattern")}if(a.j&&(c=a.g,d=l(a),"0"<=d&&"3">=d?(++a.g,d=l(a),"0"<=d&&"7">=d&&(++a.g,d=l(a),"0"<=d&&"7">=d&&++a.g)):"4"<=d&&"7">=d&&(++a.g,d=l(a),"0"<=d&&"7">=d&&++a.g),c!==a.g))
return c=parseInt(a.source.slice(c,a.g),8),{type:15,value:c,raw:a.source.slice(b,a.g),i:[b,a.g]};d=l(a);c=V(d,0);if(c===v)throw Error("BUG: invalid character");if(a.j){if("c"===d)return{type:15,value:92,raw:"\\",i:[b,a.g]};if("k"!==d)return a.g+=d.length,{type:15,value:c,raw:"\\"+d,i:[b,a.g]}}else if(!Pa.has(c))return a.g+=d.length,{type:15,value:c,raw:"\\"+d,
i:[b,a.g]};a.g=b}function qa(a){var b=a.g;++a.g;var c=l(a);switch(c){case"d":case"D":return++a.g,{type:16,kind:1,m:"D"===c,i:[b,a.g]};case"w":case"W":return++a.g,{type:16,kind:2,m:"W"===c,i:[b,a.g]};case"s":case"S":return++a.g,{type:16,kind:3,m:"S"===c,i:[b,a.g]}}a.g=b}function Oa(a){var b=a.g;if(!C(a.source,"(?",a.g)){++a.g;var c=++a.G;var d=Q(a);
if(")"!==l(a))throw new m("unterminated capture");++a.g;return{type:3,index:c,l:d,i:[b,a.g]}}if(C(a.source,"(?:",a.g)){a.g+=3;d=Q(a);if(")"!==l(a))throw new m("unterminated group");++a.g;return{type:5,l:d,i:[b,a.g]}}if(C(a.source,"(?=",a.g)){a.g+=3;d=Q(a);if(")"!==l(a))throw new m("unterminated look-ahead");++a.g;return{type:13,H:!1,l:d,i:[b,a.g]}}if(C(a.source,"(?!",a.g)){
a.g+=3;d=Q(a);if(")"!==l(a))throw new m("unterminated look-ahead");++a.g;return{type:13,H:!0,l:d,i:[b,a.g]}}throw new m("invalid group")}function ea(a){for(var b="",c;ca(c=l(a));)b+=c,++a.g;return""===b?-1:parseInt(b,10)}function sa(a,b){for(var c=a.g,d="";0<b--;){var e=l(a),f=e;if(!(ca(f)||"a"<=f&&"f">=f||"A"<=f&&"F">=f))return a.g=c,-1;d+=e;a.g+=e.length}return parseInt(d,16)
}function l(a){a=a.source.charCodeAt(a.g);return a!==a?"":H(a)}function ta(a,b){var c=a.j[2*b],d=a.j[2*b+1];return[c!==v?c:-1,d!==v?d:-1]}function D(a,b){switch(b.type){case 1:return Qa(a,b);case 2:var c=O(b.children);if(2===a.direction)for(var d=1,e,f=c.length;d<f;++d)e=c.pop(),c.unshift(e);f=[];var g=!1;for(d=-1;e=c[++d];)e=D(a,e),r(f,e),g=g||a.j;a.j=g;return f;case 3:
c=a.G++;d=D(a,b.l);if(b.index!==c)throw Error("BUG: invalid pattern");return r([],{h:2===a.direction?3:2,index:c},d,{h:2===a.direction?2:3,index:c});case 5:return D(a,b.l);case 6:return c=a.G,d=Y(a,D(a,b.l)),c=R(a,c,d),a.j=!1,r([],{h:b.s?12:11,next:c.length+1},c,{h:13,F:-1-c.length-1});case 7:return d=a.G,c=D(a,b.l),d=R(a,d,Y(a,c)),r([],c,{h:b.s?12:11,next:d.length+1},d,{h:13,
F:-1-d.length-1});case 8:return c=D(a,b.l),a.j=!1,r([],{h:b.s?12:11,next:c.length},c);case 9:return c=a.G,f=b.min,d=D(a,b.l),e=[],1===f?r(e,d):1<f?(g=R(a,c,d),r(e,{h:19,value:f},g,{h:8},{h:16,F:-1-g.length-1},{h:18})):a.j=!1,g=null!=b.max?b.max:f,g===aa?(g=R(a,c,Y(a,d)),r(e,{h:b.s?12:11,next:g.length+1},g,{h:13,F:-1-g.length-1})):g>f&&(f=g-f,g=R(a,c,Y(a,d)),1===f?r(e,{h:b.s?12:11,
next:g.length},g):r(e,{h:19,value:f+1},{h:b.s?12:11,next:g.length+4},g,{h:8},{h:16,F:-1-g.length-2},{h:10},{h:18})),e;case 10:return a.j=!1,[{h:b.m?27:26}];case 11:return a.j=!1,[{h:14}];case 12:return a.j=!1,[{h:15}];case 13:return c=a.direction,a.direction=1,d=D(a,b.l),a.j=!1,d=b.H?r([],{h:20},{h:21},{h:11,next:d.length+2},d,{h:25},{h:10},{h:18},{h:24}):r([],{h:20},{h:21},d,{h:25},{h:24}),a.direction=c,d;
case 15:return c=b.value,a.ignoreCase&&(c=I(c)),a.j=!0,Z(a,[{h:5,value:c}]);case 16:return c=ua(a,b),a.j=!0,Z(a,[{h:6,set:c}]);case 17:c=G([]);d=b.children;for(f=-1;e=d[++f];)switch(e.type){case 15:c.add(e.value,e.value+1);break;case 16:c.W(ua(a,e));break;case 18:c.add(e.children[0].value,e.children[1].value+1)}a.j=!0;return Z(a,[{h:b.m?7:6,set:c}]);case 19:return a.j=!0,Z(a,[{h:0}]);
case 20:if(1>b.index||a.B<b.index)throw Error("invalid back reference");a.j=!1;return[{h:2===a.direction?23:22,index:b.index}]}}function Qa(a,b){var c=b.children,d=c.length;if(0===d)throw Error("BUG: invalid pattern");for(var e=[],f=!0,g=0;g<d;++g)e.push(D(a,c[g])),f=f&&a.j;a.j=f;return Ba(e,function(k,h){return r([],{h:11,next:h.length+1},h,{h:13,F:k.length},k)})}function Y(a,b){
return a.j?b:r([],{h:20},b,{h:9})}function R(a,b,c){return b===a.G?c:r([],{h:4,from:b,K:a.G},c)}function ua(a,b){switch(b.kind){case 1:return b.m?Ra:va;case 2:return b.m?Sa:fa;case 3:return b.m?Ta:wa}}function Z(a,b){return 1===a.direction?b:r([],{h:1},b,{h:1})}function r(a,b){for(var c=arguments,d=c.length,e=1,f=a.length-1,g;e<d;++e)if((g=c[e])&&g.pop)for(var k=0,h=g.length;k<h;++k)
a[++f]=g[k];else a[++f]=g;return a}function w(a,b){var c=a.charCodeAt(b);return c!==c?-1:c}function E(a){return 65536<=a?2:1}function ha(a){return 10===a||13===a||8232===a||8233===a}function ia(a,b,c,d,e){this.g=a;this.u=b;this.stack=c;this.D=d;this.A=e}function S(a){return a?U&&a.exec===U.prototype.exec?!0:a.exec===z.prototype.exec:!1}function J(a){return x&&a.v&&0<K}function L(a,b,c,d,e){
if(!A&&(!!a.lastIndex!==!!a.v.lastIndex&&a.lastIndex!==a.v.lastIndex&&(x.log('regExpCompat.lastIndex missmatch! RegExpCompat("'+a.source+'", "'+a.flags+'").'+b+'("'+e.join(",")+'") '+a.lastIndex+"/"+a.v.lastIndex),--K),c||d))if(!c&&d||c&&!d)x.log('[0]Invalid Result! RegExpCompat("'+a.source+'", "'+a.flags+'").'+b+'("'+e.join(",")+'")'),x.dir(c),x.dir(d),--K;else if(c.pop&&d.pop)if(d.length!==c.length||d.input!==c.input||d.index!==c.index||!!d.groups!==!!c.groups)
x.log('[1]Invalid Result! RegExpCompat("'+a.source+'", "'+a.flags+'").'+b+'("'+e.join(",")+'")'),x.dir(c),x.dir(d),--K;else for(var f=0,g=d.length;f<g;++f)if(d[f]!==c[f]&&(""!==d[f]||c[f]!==v)){x.log('[2]Invalid Result! RegExpCompat("'+a.source+'", "'+a.flags+'").'+b+'("'+e.join(",")+'")');x.dir(c);x.dir(d);--K;break}}function xa(a,b,c){A=!0;var d="function"===typeof c,e=[],f=a.global;
f&&(a.lastIndex=0);for(var g;g=a.exec(b);){e.push(g);if(!f)break;""===g[0]&&(a.lastIndex=a.lastIndex+1)}f=0;for(var k=[],h=-1,q=e.length,y=0;y<q;++y)if(g=e[y],k[++h]=b.slice(f,g.index),f=g.index+g[0].length,d){var t=O(g);t.push(g.index,b);k[++h]=""+c.apply(null,t)}else for(var p=0;;){t=c.indexOf("$",p);if(-1===t){k[++h]=c.slice(p);break}k[++h]=c.slice(p,t);var F=c.charAt(t+1);switch(F){
case"$":p=t+2;k[++h]="$";break;case"&":p=t+2;k[++h]=g[0];break;case"`":p=t+2;k[++h]=b.slice(0,g.index);break;case"'":p=t+2;k[++h]=b.slice(f);break;case"<":break;default:if("0"<=F&&"9">=F){p=c.charAt(t+2);F="0"<=p&&"9">=p?F+p:F;p=F-0;if(0<p&&p<g.length){k[++h]=g[p]||"";p=t+1+F.length;break}p=W(p/10);if(0<p&&p<g.length){k[++h]=g[p]||"";p=t+F.length;break}}k[++h]="$";
p=t+1}}k[++h]=b.slice(f);k=k.join("");if(!J(a))return k;A=!0;L(a,"replace",k,b.replace(a.v,c),[b,c]);return k}function Ua(a,b,c){A=!0;var d=new z(a.source,a.sticky?a.flags:a.flags+"y");c=(c!==v?c:4294967295)>>>0;var e=[],f;if(0===c)return e;if(""===b)(f=d.exec(b))||e.push(b);else{for(var g=b.length,k=0,h=k,q;h<g;)if(d.lastIndex=h,f=d.exec(b))if(q=M.min(d.lastIndex,g),q===k)
h+=1;else{e.push(b.slice(k,h));if(c===e.length)return e;k=q;h=1;for(q=f.length;h<q;++h)if(e.push(f[h]),c===e.length)return e;h=k}else h+=1;e.push(b.slice(k))}if(!J(a))return e;A=!1;L(a,"split",e,a.v.split(b,c),[b,c]);return e}var H=u.fromCharCode,W=M.floor,n=[];n[924]=[181,956];n[452]=[453,454];n[455]=[456,457];n[458]=[459,460];n[497]=[498,499];n[921]=[
837,953,8126];n[914]=[946,976];n[917]=[949,1013];n[920]=[952,977];n[922]=[954,1008];n[928]=[960,982];n[929]=[961,1009];n[931]=[962,963];n[934]=[966,981];n[1042]=[1074,7296];n[1044]=[1076,7297];n[1054]=[1086,7298];n[1057]=[1089,7299];n[1058]=[1090,7300,7301];n[1066]=[1098,7302];n[1122]=[1123,7303];n[42570]=[7304,42571];n[7776]=[7777,
7835];var ba=function(a,b){switch(a){case 9:return"\\t";case 10:return"\\n";case 11:return"\\v";case 12:return"\\f";case 13:return"\\r";case 92:return"\\\\";case 94:return"\\^";case 93:return"\\]"}if(b){if(8===a)return"\\b";if(45===a)return"\\-"}else switch(a){case 36:return"\\$";case 40:return"\\(";case 41:return"\\)";case 42:return"\\*";case 43:return"\\+";case 46:
return"\\.";case 47:return"\\/";case 63:return"\\?";case 91:return"\\[";case 123:return"\\{";case 124:return"\\|";case 125:return"\\}"}if(31>=a||127<=a&&255>=a)var c="\\x"+N(a.toString(16),2);else if(128>=a){c=a;if(!isFinite(c)||0>c||1114111<c||W(c)!=c)throw RangeError("Invalid code point: "+c);if(65535>=c)c=H(c);else{c-=65536;var d=c%1024+56320;c=H((c>>10)+55296)+H(d)}}else
c=65535>=a?"\\u"+N(a.toString(16),4):"\\u{"+a.toString(16)+"}";return c};var G=function(a){a.add=Ca;a.W=Da;a.m=Ea;a.clone=Fa;a.has=Ga;a.R=Ha;a.toString=Ia;return a};var va=G([48,58]);var Ra=va.clone().m();var fa=G([48,58,65,91,95,96,97,123]);var Sa=fa.clone().m();var wa=G([9,14,32,33,160,161,5760,5761,8192,8203,8239,8240,8287,8288,12288,12289,65279,65280
]);var Ta=wa.clone().m();var B=function(a){switch(a.type){case 1:return P(a.children,B).join("|");case 2:return P(a.children,B).join("");case 3:return"("+B(a.l)+")";case 5:return"(?:"+B(a.l)+")";case 6:return B(a.l)+"*"+(a.s?"?":"");case 7:return B(a.l)+"+"+(a.s?"?":"");case 8:return B(a.l)+"?"+(a.s?"?":"");case 9:var b=B(a.l);b+="{"+a.min;a.max===aa?b+=",":(null!==a.max?a.max:a.min)!=a.min&&(b+=","+a.max);
return b+="}"+(a.s?"?":"");case 10:return a.m?"\\B":"\\b";case 11:return"^";case 12:return"$";case 13:return"(?"+(a.H?"!":"=")+B(a.l)+")";case 15:return a=X(a.raw),"/"===a?"\\/":a;case 16:return ma(a);case 17:return"["+(a.m?"^":"")+P(a.children,ma).join("")+"]";case 19:return".";case 20:return"\\"+a.index}};var ya=function(a){var b="";a.global&&(b+="g");a.ignoreCase&&(b+="i");
a.multiline&&(b+="m");a.sticky&&(b+="y");return b};var Va=function(a){var b="/",c=B(a.l);return b=b+(""===c?"(?:)":c)+"/"+ya(a.o)};G([65,91,97,123,170,171,181,182,186,187,192,215,216,247,248,706,710,722,736,741,748,749,750,751,880,885,886,888,890,894,895,896,902,903,904,907,908,909,910,930,931,1014,1015,1154,1162,1328,1329,1367,1369,1370,1376,
1417,1488,1515,1519,1523,1568,1611,1646,1648,1649,1748,1749,1750,1765,1767,1774,1776,1786,1789,1791,1792,1808,1809,1810,1840,1869,1958,1969,1970,1994,2027,2036,2038,2042,2043,2048,2070,2074,2075,2084,2085,2088,2089,2112,2137,2144,2155,2208,2229,2230,2238,2308,2362,2365,2366,2384,2385,2392,2402,2417,2433,2437,2445,2447,2449,2451,2473,
2474,2481,2482,2483,2486,2490,2493,2494,2510,2511,2524,2526,2527,2530,2544,2546,2556,2557,2565,2571,2575,2577,2579,2601,2602,2609,2610,2612,2613,2615,2616,2618,2649,2653,2654,2655,2674,2677,2693,2702,2703,2706,2707,2729,2730,2737,2738,2740,2741,2746,2749,2750,2768,2769,2784,2786,2809,2810,2821,2829,2831,2833,2835,2857,2858,2865,2866,
2868,2869,2874,2877,2878,2908,2910,2911,2914,2929,2930,2947,2948,2949,2955,2958,2961,2962,2966,2969,2971,2972,2973,2974,2976,2979,2981,2984,2987,2990,3002,3024,3025,3077,3085,3086,3089,3090,3113,3114,3130,3133,3134,3160,3163,3168,3170,3200,3201,3205,3213,3214,3217,3218,3241,3242,3252,3253,3258,3261,3262,3294,3295,3296,3298,3313,3315,
3333,3341,3342,3345,3346,3387,3389,3390,3406,3407,3412,3415,3423,3426,3450,3456,3461,3479,3482,3506,3507,3516,3517,3518,3520,3527,3585,3633,3634,3636,3648,3655,3713,3715,3716,3717,3718,3723,3724,3748,3749,3750,3751,3761,3762,3764,3773,3774,3776,3781,3782,3783,3804,3808,3840,3841,3904,3912,3913,3949,3976,3981,4096,4139,4159,4160,4176,
4182,4186,4190,4193,4194,4197,4199,4206,4209,4213,4226,4238,4239,4256,4294,4295,4296,4301,4302,4304,4347,4348,4681,4682,4686,4688,4695,4696,4697,4698,4702,4704,4745,4746,4750,4752,4785,4786,4790,4792,4799,4800,4801,4802,4806,4808,4823,4824,4881,4882,4886,4888,4955,4992,5008,5024,5110,5112,5118,5121,5741,5743,5760,5761,5787,5792,5867,
5870,5881,5888,5901,5902,5906,5920,5938,5952,5970,5984,5997,5998,6001,6016,6068,6103,6104,6108,6109,6176,6265,6272,6313,6314,6315,6320,6390,6400,6431,6480,6510,6512,6517,6528,6572,6576,6602,6656,6679,6688,6741,6823,6824,6917,6964,6981,6988,7043,7073,7086,7088,7098,7142,7168,7204,7245,7248,7258,7294,7296,7305,7312,7355,7357,7360,7401,
7405,7406,7412,7413,7415,7418,7419,7424,7616,7680,7958,7960,7966,7968,8006,8008,8014,8016,8024,8025,8026,8027,8028,8029,8030,8031,8062,8064,8117,8118,8125,8126,8127,8130,8133,8134,8141,8144,8148,8150,8156,8160,8173,8178,8181,8182,8189,8305,8306,8319,8320,8336,8349,8450,8451,8455,8456,8458,8468,8469,8470,8472,8478,8484,8485,8486,8487,
8488,8489,8490,8506,8508,8512,8517,8522,8526,8527,8544,8585,11264,11311,11312,11359,11360,11493,11499,11503,11506,11508,11520,11558,11559,11560,11565,11566,11568,11624,11631,11632,11648,11671,11680,11687,11688,11695,11696,11703,11704,11711,11712,11719,11720,11727,11728,11735,11736,11743,12293,12296,12321,12330,12337,12342,12344,12349,12353,
12439,12443,12448,12449,12539,12540,12544,12549,12592,12593,12687,12704,12731,12784,12800,13312,19894,19968,40944,40960,42125,42192,42238,42240,42509,42512,42528,42538,42540,42560,42607,42623,42654,42656,42736,42775,42784,42786,42889,42891,42944,42946,42951,42999,43010,43011,43014,43015,43019,43020,43043,43072,43124,43138,43188,43250,43256,43259,
43260,43261,43263,43274,43302,43312,43335,43360,43389,43396,43443,43471,43472,43488,43493,43494,43504,43514,43519,43520,43561,43584,43587,43588,43596,43616,43639,43642,43643,43646,43696,43697,43698,43701,43703,43705,43710,43712,43713,43714,43715,43739,43742,43744,43755,43762,43765,43777,43783,43785,43791,43793,43799,43808,43815,43816,43823,43824,
43867,43868,43880,43888,44003,44032,55204,55216,55239,55243,55292,63744,64110,64112,64218,64256,64263,64275,64280,64285,64286,64287,64297,64298,64311,64312,64317,64318,64319,64320,64322,64323,64325,64326,64434,64467,64830,64848,64912,64914,64968,65008,65020,65136,65141,65142,65277,65313,65339,65345,65371,65382,65471,65474,65480,65482,65488,65490,
65496,65498,65501,65536,65548,65549,65575,65576,65595,65596,65598,65599,65614,65616,65630,65664,65787,65856,65909,66176,66205,66208,66257,66304,66336,66349,66379,66384,66422,66432,66462,66464,66500,66504,66512,66513,66518,66560,66718,66736,66772,66776,66812,66816,66856,66864,66916,67072,67383,67392,67414,67424,67432,67584,67590,67592,67593,67594,
67638,67639,67641,67644,67645,67647,67670,67680,67703,67712,67743,67808,67827,67828,67830,67840,67862,67872,67898,67968,68024,68030,68032,68096,68097,68112,68116,68117,68120,68121,68150,68192,68221,68224,68253,68288,68296,68297,68325,68352,68406,68416,68438,68448,68467,68480,68498,68608,68681,68736,68787,68800,68851,68864,68900,69376,69405,69415,
69416,69424,69446,69600,69623,69635,69688,69763,69808,69840,69865,69891,69927,69956,69957,69968,70003,70006,70007,70019,70067,70081,70085,70106,70107,70108,70109,70144,70162,70163,70188,70272,70279,70280,70281,70282,70286,70287,70302,70303,70313,70320,70367,70405,70413,70415,70417,70419,70441,70442,70449,70450,70452,70453,70458,70461,70462,70480,
70481,70493,70498,70656,70709,70727,70731,70751,70752,70784,70832,70852,70854,70855,70856,71040,71087,71128,71132,71168,71216,71236,71237,71296,71339,71352,71353,71424,71451,71680,71724,71840,71904,71935,71936,72096,72104,72106,72145,72161,72162,72163,72164,72192,72193,72203,72243,72250,72251,72272,72273,72284,72330,72349,72350,72384,72441,72704,
72713,72714,72751,72768,72769,72818,72848,72960,72967,72968,72970,72971,73009,73030,73031,73056,73062,73063,73065,73066,73098,73112,73113,73440,73459,73728,74650,74752,74863,74880,75076,77824,78895,82944,83527,92160,92729,92736,92767,92880,92910,92928,92976,92992,92996,93027,93048,93053,93072,93760,93824,93952,94027,94032,94033,94099,94112,94176,
94178,94179,94180,94208,100344,100352,101107,110592,110879,110928,110931,110948,110952,110960,111356,113664,113771,113776,113789,113792,113801,113808,113818,119808,119893,119894,119965,119966,119968,119970,119971,119973,119975,119977,119981,119982,119994,119995,119996,119997,120004,120005,120070,120071,120075,120077,120085,120086,120093,120094,120122,
120123,120127,120128,120133,120134,120135,120138,120145,120146,120486,120488,120513,120514,120539,120540,120571,120572,120597,120598,120629,120630,120655,120656,120687,120688,120713,120714,120745,120746,120771,120772,120780,123136,123181,123191,123198,123214,123215,123584,123628,124928,125125,125184,125252,125259,125260,126464,126468,126469,126496,126497,
126499,126500,126501,126503,126504,126505,126515,126516,126520,126521,126522,126523,126524,126530,126531,126535,126536,126537,126538,126539,126540,126541,126544,126545,126547,126548,126549,126551,126552,126553,126554,126555,126556,126557,126558,126559,126560,126561,126563,126564,126565,126567,126571,126572,126579,126580,126584,126585,126589,126590,126591,
126592,126602,126603,126620,126625,126628,126629,126634,126635,126652,131072,173783,173824,177973,177984,178206,178208,183970,183984,191457,194560,195102]);var Pa=G([48,58,65,91,95,96,97,123,170,171,181,182,183,184,186,187,192,215,216,247,248,706,710,722,736,741,748,749,750,751,768,885,886,888,890,894,895,896,902,907,908,909,910,930,
931,1014,1015,1154,1155,1160,1162,1328,1329,1367,1369,1370,1376,1417,1425,1470,1471,1472,1473,1475,1476,1478,1479,1480,1488,1515,1519,1523,1552,1563,1568,1642,1646,1748,1749,1757,1759,1769,1770,1789,1791,1792,1808,1867,1869,1970,1984,2038,2042,2043,2045,2046,2048,2094,2112,2140,2144,2155,2208,2229,2230,2238,2259,2274,2275,2404,2406,
2416,2417,2436,2437,2445,2447,2449,2451,2473,2474,2481,2482,2483,2486,2490,2492,2501,2503,2505,2507,2511,2519,2520,2524,2526,2527,2532,2534,2546,2556,2557,2558,2559,2561,2564,2565,2571,2575,2577,2579,2601,2602,2609,2610,2612,2613,2615,2616,2618,2620,2621,2622,2627,2631,2633,2635,2638,2641,2642,2649,2653,2654,2655,2662,2678,2689,2692,
2693,2702,2703,2706,2707,2729,2730,2737,2738,2740,2741,2746,2748,2758,2759,2762,2763,2766,2768,2769,2784,2788,2790,2800,2809,2816,2817,2820,2821,2829,2831,2833,2835,2857,2858,2865,2866,2868,2869,2874,2876,2885,2887,2889,2891,2894,2902,2904,2908,2910,2911,2916,2918,2928,2929,2930,2946,2948,2949,2955,2958,2961,2962,2966,2969,2971,2972,
2973,2974,2976,2979,2981,2984,2987,2990,3002,3006,3011,3014,3017,3018,3022,3024,3025,3031,3032,3046,3056,3072,3085,3086,3089,3090,3113,3114,3130,3133,3141,3142,3145,3146,3150,3157,3159,3160,3163,3168,3172,3174,3184,3200,3204,3205,3213,3214,3217,3218,3241,3242,3252,3253,3258,3260,3269,3270,3273,3274,3278,3285,3287,3294,3295,3296,3300,
3302,3312,3313,3315,3328,3332,3333,3341,3342,3345,3346,3397,3398,3401,3402,3407,3412,3416,3423,3428,3430,3440,3450,3456,3458,3460,3461,3479,3482,3506,3507,3516,3517,3518,3520,3527,3530,3531,3535,3541,3542,3543,3544,3552,3558,3568,3570,3572,3585,3643,3648,3663,3664,3674,3713,3715,3716,3717,3718,3723,3724,3748,3749,3750,3751,3774,3776,
3781,3782,3783,3784,3790,3792,3802,3804,3808,3840,3841,3864,3866,3872,3882,3893,3894,3895,3896,3897,3898,3902,3912,3913,3949,3953,3973,3974,3992,3993,4029,4038,4039,4096,4170,4176,4254,4256,4294,4295,4296,4301,4302,4304,4347,4348,4681,4682,4686,4688,4695,4696,4697,4698,4702,4704,4745,4746,4750,4752,4785,4786,4790,4792,4799,4800,4801,
4802,4806,4808,4823,4824,4881,4882,4886,4888,4955,4957,4960,4969,4978,4992,5008,5024,5110,5112,5118,5121,5741,5743,5760,5761,5787,5792,5867,5870,5881,5888,5901,5902,5909,5920,5941,5952,5972,5984,5997,5998,6001,6002,6004,6016,6100,6103,6104,6108,6110,6112,6122,6155,6158,6160,6170,6176,6265,6272,6315,6320,6390,6400,6431,6432,6444,6448,
6460,6470,6510,6512,6517,6528,6572,6576,6602,6608,6619,6656,6684,6688,6751,6752,6781,6783,6794,6800,6810,6823,6824,6832,6846,6912,6988,6992,7002,7019,7028,7040,7156,7168,7224,7232,7242,7245,7294,7296,7305,7312,7355,7357,7360,7376,7379,7380,7419,7424,7674,7675,7958,7960,7966,7968,8006,8008,8014,8016,8024,8025,8026,8027,8028,8029,8030,
8031,8062,8064,8117,8118,8125,8126,8127,8130,8133,8134,8141,8144,8148,8150,8156,8160,8173,8178,8181,8182,8189,8255,8257,8276,8277,8305,8306,8319,8320,8336,8349,8400,8413,8417,8418,8421,8433,8450,8451,8455,8456,8458,8468,8469,8470,8472,8478,8484,8485,8486,8487,8488,8489,8490,8506,8508,8512,8517,8522,8526,8527,8544,8585,11264,11311,11312,
11359,11360,11493,11499,11508,11520,11558,11559,11560,11565,11566,11568,11624,11631,11632,11647,11671,11680,11687,11688,11695,11696,11703,11704,11711,11712,11719,11720,11727,11728,11735,11736,11743,11744,11776,12293,12296,12321,12336,12337,12342,12344,12349,12353,12439,12441,12448,12449,12539,12540,12544,12549,12592,12593,12687,12704,12731,12784,
12800,13312,19894,19968,40944,40960,42125,42192,42238,42240,42509,42512,42540,42560,42608,42612,42622,42623,42738,42775,42784,42786,42889,42891,42944,42946,42951,42999,43048,43072,43124,43136,43206,43216,43226,43232,43256,43259,43260,43261,43310,43312,43348,43360,43389,43392,43457,43471,43482,43488,43519,43520,43575,43584,43598,43600,43610,43616,
43639,43642,43715,43739,43742,43744,43760,43762,43767,43777,43783,43785,43791,43793,43799,43808,43815,43816,43823,43824,43867,43868,43880,43888,44011,44012,44014,44016,44026,44032,55204,55216,55239,55243,55292,63744,64110,64112,64218,64256,64263,64275,64280,64285,64297,64298,64311,64312,64317,64318,64319,64320,64322,64323,64325,64326,64434,64467,
64830,64848,64912,64914,64968,65008,65020,65024,65040,65056,65072,65075,65077,65101,65104,65136,65141,65142,65277,65296,65306,65313,65339,65343,65344,65345,65371,65382,65471,65474,65480,65482,65488,65490,65496,65498,65501,65536,65548,65549,65575,65576,65595,65596,65598,65599,65614,65616,65630,65664,65787,65856,65909,66045,66046,66176,66205,66208,
66257,66272,66273,66304,66336,66349,66379,66384,66427,66432,66462,66464,66500,66504,66512,66513,66518,66560,66718,66720,66730,66736,66772,66776,66812,66816,66856,66864,66916,67072,67383,67392,67414,67424,67432,67584,67590,67592,67593,67594,67638,67639,67641,67644,67645,67647,67670,67680,67703,67712,67743,67808,67827,67828,67830,67840,67862,67872,
67898,67968,68024,68030,68032,68096,68100,68101,68103,68108,68116,68117,68120,68121,68150,68152,68155,68159,68160,68192,68221,68224,68253,68288,68296,68297,68327,68352,68406,68416,68438,68448,68467,68480,68498,68608,68681,68736,68787,68800,68851,68864,68904,68912,68922,69376,69405,69415,69416,69424,69457,69600,69623,69632,69703,69734,69744,69759,
69819,69840,69865,69872,69882,69888,69941,69942,69952,69956,69959,69968,70004,70006,70007,70016,70085,70089,70093,70096,70107,70108,70109,70144,70162,70163,70200,70206,70207,70272,70279,70280,70281,70282,70286,70287,70302,70303,70313,70320,70379,70384,70394,70400,70404,70405,70413,70415,70417,70419,70441,70442,70449,70450,70452,70453,70458,70459,
70469,70471,70473,70475,70478,70480,70481,70487,70488,70493,70500,70502,70509,70512,70517,70656,70731,70736,70746,70750,70752,70784,70854,70855,70856,70864,70874,71040,71094,71096,71105,71128,71134,71168,71233,71236,71237,71248,71258,71296,71353,71360,71370,71424,71451,71453,71468,71472,71482,71680,71739,71840,71914,71935,71936,72096,72104,72106,
72152,72154,72162,72163,72165,72192,72255,72263,72264,72272,72346,72349,72350,72384,72441,72704,72713,72714,72759,72760,72769,72784,72794,72818,72848,72850,72872,72873,72887,72960,72967,72968,72970,72971,73015,73018,73019,73020,73022,73023,73032,73040,73050,73056,73062,73063,73065,73066,73103,73104,73106,73107,73113,73120,73130,73440,73463,73728,
74650,74752,74863,74880,75076,77824,78895,82944,83527,92160,92729,92736,92767,92768,92778,92880,92910,92912,92917,92928,92983,92992,92996,93008,93018,93027,93048,93053,93072,93760,93824,93952,94027,94031,94088,94095,94112,94176,94178,94179,94180,94208,100344,100352,101107,110592,110879,110928,110931,110948,110952,110960,111356,113664,113771,113776,
113789,113792,113801,113808,113818,113821,113823,119141,119146,119149,119155,119163,119171,119173,119180,119210,119214,119362,119365,119808,119893,119894,119965,119966,119968,119970,119971,119973,119975,119977,119981,119982,119994,119995,119996,119997,120004,120005,120070,120071,120075,120077,120085,120086,120093,120094,120122,120123,120127,120128,120133,
120134,120135,120138,120145,120146,120486,120488,120513,120514,120539,120540,120571,120572,120597,120598,120629,120630,120655,120656,120687,120688,120713,120714,120745,120746,120771,120772,120780,120782,120832,121344,121399,121403,121453,121461,121462,121476,121477,121499,121504,121505,121520,122880,122887,122888,122905,122907,122914,122915,122917,122918,
122923,123136,123181,123184,123198,123200,123210,123214,123215,123584,123642,124928,125125,125136,125143,125184,125260,125264,125274,126464,126468,126469,126496,126497,126499,126500,126501,126503,126504,126505,126515,126516,126520,126521,126522,126523,126524,126530,126531,126535,126536,126537,126538,126539,126540,126541,126544,126545,126547,126548,126549,
126551,126552,126553,126554,126555,126556,126557,126558,126559,126560,126561,126563,126564,126565,126567,126571,126572,126579,126580,126584,126585,126589,126590,126591,126592,126602,126603,126620,126625,126628,126629,126634,126635,126652,131072,173783,173824,177973,177984,178206,178208,183970,183984,191457,194560,195102,917760,918E3]);var za=function(a,b,c){
this.G=this.g=this.B=0;this.source=a;this.flags=b||"";this.j=!1!==c};za.prototype.parse=function(){var a=this.flags;var b={global:!1,ignoreCase:!1,multiline:!1,sticky:!1};for(var c=a.length;c;)switch(a.charAt(--c)){case"g":if(b.global)throw new m("duplicated 'g' flag");b.global=!0;break;case"i":if(b.ignoreCase)throw new m("duplicated 'i' flag");b.ignoreCase=!0;break;case"m":
if(b.multiline)throw new m("duplicated 'm' flag");b.multiline=!0;break;case"y":if(b.sticky)throw new m("duplicated 'y' flag");b.sticky=!0;break;case"s":break;case"u":break;default:throw new m("unknown flag")}this.o=b;for(a=this.source.length;this.g<a;)switch(b=l(this),b){case"(":C(this.source,"(?",this.g)||++this.B;++this.g;break;case"\\":++this.g;this.g+=l(this).length;break;
case"[":a:for(++this.g;this.g<this.source.length;)switch(b=l(this),b){case"]":++this.g;break a;case"\\":++this.g;this.g+=l(this).length;break;default:this.g+=b.length}break;default:this.g+=b.length}this.g=0;a=Q(this);if(""!==l(this))throw new m("too many ')'");return{type:0,o:this.o,B:this.B,l:a,i:[0,this.g]}};var m=function(){};var T=function(a,b){this.input=a;
this.j=b;this.index=b[0];this.lastIndex=b[1];this.length=b.length/2};T.prototype.get=function(a){var b=ta(this,a);a=b[0];b=b[1];return 0>a||0>b?v:this.input.slice(a,b)};T.prototype.end=function(a){a=ta(this,a)[1];return 0>a?v:a};T.prototype.O=function(){var a=this.length,b=[];b.index=this.index;b.input=this.input;for(var c=0;c<a;++c)b[c]=this.get(c);return b};T.prototype.toString=function(){
var a=this.O();return"Match["+P(a,function(b){return b===v?"undefined":JSON.stringify(b)}).join(", ")+"]"};var Wa=function(a){return P(a,function(b,c){var d=N(c+"",3)+": ",e=b.h;d+=13<=e.length?e:(e+"             ").substr(0,13);switch(b.h){case 2:case 3:d+=b.index;break;case 4:d+=b.from+" "+b.K;break;case 5:d+="'"+ba(b.value)+"'";break;case 6:case 7:d+=b.set.R(7===b.h);break;
case 11:case 12:d+=N(c+1+b.next+"",3);break;case 13:case 16:d+=N(c+1+b.F+"",3);break;case 19:d+=b.value;break;case 22:case 23:d+=b.index}return d}).join("\n")};var I=function(a){var b=H(a).toUpperCase();if(2<=b.length)return a;b=b.charCodeAt(0);return 128<=a&&128>b?a:b};var Xa=function(a){var b=n[a];return b?b:[H(a).toLowerCase().charCodeAt(0)]};var Aa=function(a){this.j=!1;
this.direction=this.G=1;this.pattern=a;this.ignoreCase=a.o.ignoreCase;this.B=a.B};Aa.prototype.compile=function(){var a=D(this,this.pattern.l);a=r([],{h:2,index:0},a,{h:3,index:0},{h:17});return new ja(this.pattern,a)};ia.prototype.clone=function(){return new ia(this.g,this.u,O(this.stack),this.D,O(this.A))};var ja=function(a,b){this.pattern=a;this.J=b;for(var c=-1,d,e=0,f=0;d=b[++c];){
switch(d.h){case 19:case 20:case 21:++e;break;case 9:case 18:case 24:case 25:--e}f=M.max(e,f)}this.X=f;this.ignoreCase=a.o.ignoreCase;this.multiline=a.o.multiline;this.sticky=a.o.sticky;this.B=a.B};ja.prototype.toString=function(){var a=Wa(this.J).split("\n").join("\n    ");return"Program {\n  pattern: "+Va(this.pattern)+",\n  codes:\n    "+a+"\n}"};ja.prototype.exec=function(a,b){
for(;b<=a.length;){for(var c=b,d=this.X,e=[],f=2*(this.B+1),g=0;g<f;++g)e.push(-1);f=[];for(g=0;g<d;++g)f.push(0);for(c=[new ia(c,0,f,0,e)];0<c.length;){e=c[c.length-1];g=this.J[e.u];d=!1;++e.u;var k;switch(g.h){case 0:f=w(a,e.g);0<=f&&!ha(f)?e.g+=E(f):d=!0;break;case 1:f=w(a,e.g-1);0<=f?e.g-=E(f):d=!0;break;case 2:e.A[2*g.index]=e.g;break;case 3:e.A[2*g.index+1]=e.g;break;
case 4:for(var h=g.from;h<g.K;++h)e.A[2*h]=e.A[2*h+1]=-1;break;case 5:f=w(a,e.g);0>f&&(d=!0);var q=this.ignoreCase?I(f):f;q===g.value?e.g+=E(f):d=!0;break;case 6:case 7:f=w(a,e.g);if(0>f){d=!0;break}q=this.ignoreCase?I(f):f;h=g.set.has(q);var y=6===g.h;if(this.ignoreCase){q=Xa(q);var t=q.length;for(k=0;k<t;++k)h=h||g.set.has(q[k])}h===y?e.g+=E(f):d=!0;break;case 8:--e.stack[e.D-1];
break;case 9:e.stack[--e.D]===e.g&&(d=!0);break;case 10:d=!0;break;case 11:case 12:f=e.clone();c.push(f);11===g.h?e.u+=g.next:f.u+=g.next;break;case 13:e.u+=g.F;break;case 14:f=w(a,e.g-1);0===e.g||this.multiline&&ha(f)||(d=!0);break;case 15:f=w(a,e.g);e.g===a.length||this.multiline&&ha(f)||(d=!0);break;case 16:0<e.stack[e.D-1]&&(e.u+=g.F);break;case 17:return new T(a,e.A);
case 18:--e.D;break;case 19:e.stack[e.D++]=g.value;break;case 20:e.stack[e.D++]=e.g;break;case 21:e.stack[e.D++]=c.length;break;case 22:f=e.A[2*g.index];g=e.A[2*g.index+1];y=0>f||0>g?"":a.slice(f,g);for(h=0;h<y.length;){f=w(a,e.g);k=w(y,h);q=this.ignoreCase?I(f):f;g=this.ignoreCase?I(k):k;if(q!==g){d=!0;break}e.g+=E(f);h+=E(k)}break;case 23:f=e.A[2*g.index];g=e.A[2*g.index+1];
y=0>f||0>g?"":a.slice(f,g);for(h=y.length;0<h;){f=w(a,e.g-1);k=w(y,h-1);q=this.ignoreCase?I(f):f;g=this.ignoreCase?I(k):k;if(q!==g){d=!0;break}e.g-=E(f);h-=E(k)}break;case 24:e.g=e.stack[--e.D];break;case 25:c.length=e.stack[--e.D];c[c.length-1]=e;break;case 26:case 27:f=w(a,e.g-1),k=w(a,e.g),e=fa,h=e.has(f)!==e.has(k),y=26===g.h,h!==y&&(d=!0)}d&&c.pop()}if(this.sticky)break;
b+=E(w(a,b))}return null};var z=function(a,b){if(!this||this.constructor!==z)return S(a)&&b===v&&a.constructor===z?a:new z(a,b);var c=new za(a,b,!0).parse();this.pattern=c;this.Y=new Aa(c).compile();var d=B(c.l);this.source=""===d?"(?:)":d;this.flags=ya(c.o);this.global=c.o.global;this.ignoreCase=c.o.ignoreCase;this.multiline=c.o.multiline;this.sticky=c.o.sticky;this.v=new U(a,this.flags);
J(this)&&this.v.source!==this.source&&(x.log('RegExpCompat.source missmatch! RegExpCompat("'+a+'", "'+(b||"")+'")'),--K);this.lastIndex=0};z.__defineGetter__&&"$1 $2 $3 $4 $5 $6 $7 $8 $9 lastMatch".split(" ").forEach(function(a){z.__defineGetter__(a,function(){throw Error("RegExpCompat does not support old RegExp."+a+" method")})});z.prototype.compile=function(){};var x=ka.console;z.prototype.toString=function(){
return"/"+this.source+"/"+this.flags};var K=10,A=!0;z.prototype.exec=function(a){var b=this.global||this.sticky,c=0;b&&(c=this.lastIndex);c=this.Y.exec(a,c);b&&(this.lastIndex=c?c.lastIndex:0);b=c?c.O():null;if(!J(this))return b;L(this,"exec",b,this.v.exec(a),[a]);return b};z.prototype.test=function(a){A=!0;var b=!!this.exec(a);if(!J(this))return b;A=!1;L(this,"test",b,this.v.test(a),[a]);
return b};u.prototype.T=u.prototype.match;u.prototype.match=function(a){if(S(a)){A=!0;if(a.global){a.lastIndex=0;var b=[];for(var c;c=a.exec(this);)b.push(c[0]),""===c[0]&&(a.lastIndex+=1);b=0===b.length?null:b}else b=a.exec(this);J(a)&&(A=!1,L(a,"match",b,this.match(a.v),[this]));a=b}else a=this.T(a);return a};u.prototype.I=u.prototype.replace;u.prototype.replace=function(a,b){
if(a.constructor===U){A=!0;var c=this.I(a,b),d=a.lastIndex;xa(a,""+this,b)!==c&&x.log(">>> ","replace(",a.source,"\n-\n",b,") => ",d,a.lastIndex)}return S(a)?xa(a,this,b):this.I(a,b)};u.prototype.U=u.prototype.search;u.prototype.search=function(a){if(S(a)){A=!0;var b=a.lastIndex;a.lastIndex=0;var c=a.exec(this);a.lastIndex=b;b=c?c.index:-1;J(a)&&(A=!1,L(a,"search",b,a.v.search(this),[this]));
a=b}else a=this.U(a);return a};u.prototype.V=u.prototype.split;u.prototype.split=function(a,b){return S(a)?Ua(a,this,b):this.V(a,b)};ka.RegExpCompat(z)}(this,this.RegExp,String,Math,1/0,void 0))