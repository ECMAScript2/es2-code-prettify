/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.pop||(Array.prototype.pop=function(){var a=this.length,b=this[a-1];a&&--this.length;return b});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
/** Code Preffity for ES2 [lang-all | Debug build](github.com/ECMAScript2/es2-code-prettify) */
var oa;
ua = [];
ua.conpare = function(W, p) {
  var V = 0, Q, X, A = (W + "").split("."), la = (p + "").split("."), aa = A.length;
  for (Q = la.length; "0" === A[aa - 1];) {
    --aa;
  }
  for (; "0" === la[Q - 1];) {
    --Q;
  }
  for (X = aa < Q ? aa : Q; V < X; ++V) {
    var ya = A[V] - 0, l = la[V] - 0;
    if (ya !== l) {
      return ya > l ? 1 : -1;
    }
  }
  return aa > Q ? 1 : aa === Q ? 0 : -1;
};
(function(W, p, V, Q, X, A, la, aa) {
  function ya(u, O, G) {
    G = A(u.split(O)[1]);
    return 0 <= G ? G : 0;
  }
  function l(u, O) {
    return 0 <= u.indexOf(O);
  }
  function lb(u) {
    return l(u, "Linux armv") || l(u, "Linux aarch") || l(u, "Linux i686") || l(u, "Linux x86_64");
  }
  function y(u, O) {
    for (var G in O) {
      if (G === u) {
        return !0;
      }
    }
  }
  function m(u, O) {
    var G = "", ba = -1, ta;
    if (u = u.split(O)[1]) {
      for (; ta = u.charCodeAt(++ba);) {
        if (48 <= ta && 57 >= ta || 46 === ta) {
          G += u.charAt(ba);
        } else {
          break;
        }
      }
      for (ba = G.length; ba;) {
        if (46 === G.charCodeAt(--ba)) {
          G = G.substr(0, ba);
        } else {
          break;
        }
      }
    }
    return G;
  }
  function za(u) {
    for (var O = arguments, G = 1, ba = O[0], ta; G < O.length; ++G) {
      0 > E(ba, ta = O[G]) && (ba = ta);
    }
    return ba;
  }
  function Ea(u) {
    return u === u + "" ? u : u === u - 0 ? "" + u : u.min && u.max ? u.min + "~" + u.max : u.min ? u.min + "~" : "~" + u.max;
  }
  var E = W.conpare, d = Q.userAgent, I = Q.appVersion, Na = A(I) || 0, B = Q.platform, pa = V.documentElement, Fa = pa && pa.style, L = V.documentMode, Oa = X.width;
  X = X.height;
  var Ga = p.HTMLAudioElement, Ha = p.performance, $a = p.Int8Array, ma = p.ontouchstart !== aa, na = m(I, "Version/") || m(d, "Version/"), ab = p.operamini, Y = !ab && p.opera, mb = Y && (Y.version && "function" === typeof Y.version ? Y.version() : za(m(d, "Opera "), na, Na)), Ia = p.opr, ca = !Y && (V.all || L);
  L = ca && (L ? L : p.XMLHttpRequest ? V.getElementsByTagName ? 7 : 4 : V.compatMode ? 6 : (0).toFixed ? 5.5 : p.attachEvent ? 5 : 4);
  pa = !ca && pa.msContentZoomFactor;
  var J = !pa && (p.chrome || p.chromium), Aa = !ca && function() {
    for (var u in Fa) {
      if (0 === u.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Pa = l(d, "UCWEB"), Qa = Pa && m(d, " U2/"), bb = Pa && m(d, "; wds "), cb = m(d.split("_").join("."), "; iPh OS "), H = m(d, "; Adr "), Ba = l(I, "YJApp-ANDROID"), M = l(B, "Android") || Aa && l(I, "Android") || Ba;
  H = m(B, "Android ") || m(I, "Android ") || m(d, "Android ") || H;
  var D = l(B, "Linux"), Ja = "MacIntel" === B && Q.standalone !== aa, R = Aa && m(d, "Goanna/"), S = !R && Aa && (m(d, "rv:") || m(d.substr(d.indexOf(") Gecko/") - 11), "; ")), Db = m(d, "Firefox/"), z = m(d, "Opera/"), db = p.FNRBrowser, qa = ya(d, "AppleWebKit/"), Ka = m(d, "Chrome/"), nb = m(I, "Iron/"), ob = m(d, "OPR/"), ra = m(I, "KHTML/"), pb = m(d.toLowerCase(), "iris");
  m(d, "FxiOS/");
  m(d, "CriOS/");
  m(d, "EdgiOS/");
  var Ra = m(d, "Silk/"), sa = ya(d, "SamsungBrowser/"), eb = !sa && function() {
    for (var u = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    O, G = u.length; O = u[--G];) {
      if (l(d, O)) {
        return 2 > A(na) ? na : .9;
      }
    }
    u = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (G = u.length; O = u[--G];) {
      if (l(d, O)) {
        return na;
      }
    }
  }(), qb = J && 534.3 >= qa, Sa = lb(B), da = Sa && !l(d, B) && lb(d);
  ma = ma && (qa || Aa) && da || !H && Ba;
  Ba = !!p.ReactNativeWebView;
  Sa = Sa && function() {
    for (var u in p) {
      if (0 === u.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var ia = (da = p.puffinDevice) && da.clientInfo;
  ia = (da = ia && "iOS" === ia.os && ia.osVersion) && ia.model;
  var Ta = !L && V.registerElement, Ca = !L && V.execCommand, ea = p.webkitCancelAnimationFrame, Eb = D && Ta && "11.0.696.34" === Ka, Da = p._firefoxTV_playbackStateObserverJava, La = ya(d, "diordnA ");
  if ("Nitro" === B) {
    var r = 1;
  } else if ("Nintendo DSi" === B) {
    r = 2;
    var n = z;
  } else if ("New Nintendo 3DS" === B || l(d, "iPhone OS 6_0") && 320 === Oa && 240 === X) {
    r = 4, n = m(d, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === B) {
    r = 3, n = m(d, "Version/"), qa = 535;
  } else if ("Nintendo Swicth" === B) {
    r = 7, n = m(I, "NintendoBrowser/");
  } else if (p.wiiu) {
    r = 6;
    n = m(I, "NintendoBrowser/");
    var w = 15, C = m(I, "AppleWebKit/") || (ea ? 536 : 534);
    n || (n = ea ? 4 : 2, l(I, "Macintosh;") || l(I, "Windows NT") && l(I, "Touch"));
  } else if (Y && Y.wiiremote) {
    r = 5, n = m(d, "Wii; U; ; ");
  } else if (z = m(d, "PlayStation Vita ")) {
    r = 10, n = z;
  } else if (z = m(d, "(PlayStation Portable); ")) {
    r = 8;
    n = z;
    var rb = 3.3;
  } else if (z = m(d, "PLAYSTATION 3; ") || m(d, "PLAYSTATION 3 ")) {
    r = 11, n = z, 0 > E("4.10", z) && (w = 26, C = z);
  } else if (l(d, "Xbox One")) {
    r = 15, n = 1;
  } else if (l(d, "Xbox")) {
    r = 14, n = 1;
  } else if (2 === Na && l(d, "Sony/COM2/")) {
    r = 17;
    n = 2;
    rb = 3.4;
    var Ua = !0;
  } else if (0 === B.indexOf("iP") || cb || da || Ja) {
    if (da) {
      switch(n = da, ia.substr(0, 4)) {
        case "iPho":
          var P = 0;
          m(ia, P);
          var T = !0;
          break;
        case "iPad":
          P = 1;
          m(ia, P);
          var K = !0;
          break;
        case "iPod":
          P = 2;
          m(ia, P);
          var sb = !0;
      }
    } else {
      cb ? n = cb : (n = m(I.split("_").join("."), "OS "), y("isSecureContext", p), y("enableWebGL", p), y("sameOrigin", p));
      if (!n || db) {
        n = p.PointerEvent ? 13 : p.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : Q.sendBeacon ? 11.3 : p.WebAssembly ? 11.2 : p.HTMLMeterElement ? 10.3 : p.Proxy ? 10.2 : p.HTMLPictureElement ? 9.3 : la.isNaN ? 9.2 : p.SharedWorker ? Ha && Ha.now ? 8 : 8.4 : Ca ? 7.1 : p.webkitURL ? 6.1 : p.Worker ? 5.1 : $a ? 4.3 : Ga ? 4.1 : 3.2;
      }
      var Z = Oa === 1.5 * X || 1.5 * Oa === X;
      0 === B.indexOf("iPhone") ? (P = 0, T = !0) : 0 === B.indexOf("iPad") || Ja ? (P = 1, K = !0) : 0 === B.indexOf("iPod") && (P = 2, sb = !0);
    }
    w = !da && (Q.standalone || (K || 12 > n) && y("webkitFullscreenEnabled", V) || 11 <= n && 13 > n && Q.mediaDevices) ? 16 : 17;
    r = 24;
    C = n;
  } else if (l(d, "Kobo")) {
    r = 18, w = 21, C = 2.2, M = !0;
  } else if (l(d, "EBRD")) {
    r = 19, w = 21, C = 2.2;
  } else if (z = m(d, "CrOS x86_64 ") || m(d, "CrOS aarch64 ") || m(d, "CrOS i686 ") || m(d, "CrOS armv7l ")) {
    r = 28, n = z;
  } else if (p.onmoztimechange !== aa) {
    r = 29, n = 18.1 > S ? "1.0.1" : 19 > S ? 1.1 : 27 > S ? 1.2 : 29 > S ? 1.3 : 31 > S ? 1.4 : 33 > S ? 2 : 35 > S ? 2.1 : 38 > S ? 2.2 : 45 > S ? 2.5 : 2.6, l(d, "Mobile") ? T = !0 : l(d, "Tablet") ? K = !0 : l(d, "TV");
  } else if (p.palmGetResource) {
    r = 30, n = m(d, "webOS/") || m(d, "WEBOS") || m(d, "hpwOS/"), l(d, "webOS.TV") || l(d, "/SmartTV") || (T = !0);
  } else if (z = m(d, "Tizen ")) {
    r = 31, n = z, w = 24, C = sa, T = !0;
  } else if (z = m(d, "Windows Phone ") || m(I, "Windows Phone OS ") || bb) {
    r = 23, n = z, T = !0;
  } else if (pa && "ARM" === B) {
    r = 23, n = 10, T = !0;
  } else if (ca && l(I, "ZuneWP")) {
    r = 23, n = 11 === L ? 8.1 : 10 === L ? 8 : 9 === L ? 7.5 : 7 === L ? 7 : "?", T = !0;
  } else if (l(d, "FOMA;")) {
    r = 16, T = !0;
  } else if (l(d, "SoftBank;")) {
    r = 16, T = !0;
  } else if (l(d, "KFMUWI")) {
    var fa = !0;
    n = 6.3;
    var N = K = !0;
  } else if (l(d, "KFKAWI")) {
    fa = !0, n = 6, N = K = !0;
  } else if (l(d, "KFSUWI") || l(d, "KFAUWI") || l(d, "KFDOWI")) {
    fa = !0, n = 5, N = K = !0;
  } else if (l(d, "KFGIWI")) {
    fa = !0, n = 5, N = K = !0;
  } else if (l(d, "KFARWI") || l(d, "KFSAWA") || l(d, "KFSAWI")) {
    fa = !0, n = 5 <= A(H) ? 5 : 4, N = K = !0;
  } else if (l(d, "KFSOWI") || l(d, "KFTHWA") || l(d, "KFTHWI") || l(d, "KFAPWA") || l(d, "KFAPWI")) {
    fa = !0, n = 3, N = K = !0;
  } else if (l(d, "KFOT") || l(d, "KFTT") || l(d, "KFJWA") || l(d, "KFJWI")) {
    fa = !0, n = 2, N = K = !0;
  } else if (l(d, "Kindle Fire")) {
    fa = !0, n = 1, N = K = !0;
  } else if (z = m(d, "Kindle/")) {
    r = 20, n = z, w = 21, C = 2.2;
  } else if (Da) {
    fa = !0, n = H || La, N = !0;
  } else if (l(d, "AmazonWebAppPlatform") || l(d, "; AFT")) {
    fa = !0, n = H, N = !0;
  } else if (l(d, "MeeGo")) {
    r = 32;
  } else if (l(d, "Maemo")) {
    r = 33;
  } else if (0 === d.indexOf("Windows Mobile;") || pb) {
    r = 22, Ua = !0;
  } else if ("WinCE" === B) {
    r = 21, Ua = !0;
  } else if (0 === B.indexOf("Win")) {
    r = "Win16" === B ? 35 : "Win32" === B ? 36 : "Win64" === B ? 37 : 0, n = m(d, "Windows NT ") || m(d, "Windows ");
  } else if (0 === B.indexOf("Mac")) {
    r = "Mac68K" === B ? 39 : "MacPowerPC" === B || "MacPPC" === B ? 38 : "MacIntel" === B ? 40 : 0;
    if (z = m(d.split("_").join("."), "Mac OS X ")) {
      n = z;
    }
    var tb = !0;
  } else if (l(d, "BlackBerry") || l(d, "BB10")) {
    r = 34, n = na, T = !0;
  } else if (l(d, "SunOS") || l(d, "Sun Solaris")) {
    r = 42;
  } else if (l(d, "FreeBSD")) {
    r = 43;
  } else if (l(d, "OpenBSD")) {
    r = 44;
  } else if (l(d, "NetBSD")) {
    r = 45;
  } else if (M && Aa) {
    l(d, "Android 4.4;") ? Z = {min:2.3} : 4 <= A(H) ? Z = H : Z = {min:2.2}, n = Z;
  } else if (M && Y) {
    H ? Z = H : Z = {min:1.6}, n = Z, l(d, "Tablet") ? K = !0 : T = !0;
  } else if (H) {
    n = H, M = !0;
  } else if (D && ma || Ba || Sa) {
    var Ma = !0;
    sa ? Z = {min:4.4} : J && !qb || Ia || ob ? Z = {min:4} : (Z = H = Fa.touchAction !== aa ? {min:5} : Ta ? 4.4 : $a ? Q.connection ? p.searchBoxJavaBridge_ || J ? la.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= qa ? 3 : 533 <= qa ? Ga ? 2.3 : 2.2 : 530 <= qa ? 2 : 1.5, eb && (w = 24, C = eb));
    n = Z;
    M = !0;
  } else {
    Eb ? (n = {min:5}, Ma = M = !0) : D && (l(d, "Ubuntu") ? r = 46 : (z = m(d, "Mint/")) ? (r = 47, n = z) : (z = m(d, "Fedora/")) ? (r = 48, n = z) : r = l(d, "Gentoo") ? 49 : 50);
  }
  fa || M && Ma && Ra ? r = 27 : M && (r = r || 26);
  w || (N = N || M, Y ? (w = N || Ua || T || K ? 9 : 8, C = mb) : ca ? (Z = ya(I, "Trident/") + 4, w = Ua || T || K || sb ? 3 : tb && 5 <= L ? 7 : 2, C = L) : pa ? (w = 23 === r ? 6 : 5, C = m(I, "Edge/")) : R ? (w = 13, C = R) : Aa ? (w = N ? 12 : 11, C = S || Db) : sa ? (w = 24, C = sa) : (z = rb || m(d, "NetFront/")) ? (w = 18, C = z) : (z = m(d, "iCab")) ? (w = 19, C = z) : (z = za(m(d, "Opera Mini/"), m(d, "Opera Mobi/")) || ab && na) ? (w = 10, C = z, r || (l(d, "iPhone") ? P = 0 : l(d, "iPad") ? 
  P = 1 : l(d, "iPod") && (P = 2), P && (r = 24))) : Pa ? (w = 25, C = Qa) : ra ? (w = 14, C = Na) : M && qb ? (w = 21, C = H) : J || Ia || ob ? (w = N ? 22 : 20, C = Ka || nb) : M && Ta ? (w = 23, C = 5 > A(H) ? H : Ka) : M && (na || Ma) ? (w = 21, C = H) : Ka ? (w = N ? 22 : 20, C = Ka) : qa && (w = 15, C = qa));
  r && (W[2] = r, n && (W[3] = Ea(n)));
  w && (W[0] = w, C && (W[1] = Ea(C)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var va;
(function(W, p, V, Q, X, A, la, aa, ya, l, lb, y) {
  function m(a) {
    dc(p, "load", m);
    m = y;
    na(ra, a, !0);
    ra = y;
  }
  function za() {
    for (var a, b = 0, c = eb(); b < Da.length;) {
      c < Da[0].t ? ++b : (a = Da.splice(b, 1)[0], a.f(a.p));
    }
    n = Da.length ? l(za, La) : 0;
  }
  function Ea() {
    for (var a, b = 0; b < da.length; ++b) {
      a = da[b], a.f();
    }
  }
  function E(a) {
    if (W[0] === a) {
      return M === M + "" ? la(M) : M;
    }
  }
  function d(a) {
    var b = W[3];
    if (W[2] === a) {
      return b === b + "" ? la(b) : b;
    }
  }
  function I() {
    Ca && (Ca = clearInterval(Ca));
  }
  function Na() {
    n && (n = lb(n));
  }
  function B(a, b, c) {
    var e = ["<", a], h = 1, f, t;
    if (b) {
      for (f in b) {
        var g = b[f];
        if (null != g && "" !== g) {
          if ("style" === f) {
            e[++h] = ' style="';
            for (t in g) {
              for (var x = ++h, k, q = [], v = t.split(""), F = v.length; F;) {
                k = v[--F], "A" <= k && "Z" >= k && (k = "-" + k.toLowerCase()), q[F] = k;
              }
              e[x] = q.join("") + ":" + g[t] + ";";
            }
            e[++h] = '"';
          } else {
            "className" === f && (f = "class"), e[++h] = " " + f + '="' + g + '"';
          }
        }
      }
    }
    e[++h] = ">";
    null != c && (w && "font" !== a ? e[++h] = "<font>" + pa(c) + "</font>" : e[++h] = pa(c));
    e[++h] = "</" + a + ">";
    return e.join("");
  }
  function pa(a) {
    return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
  }
  function Fa(a) {
    var b = a.split("-"), c = b.length;
    if (2 > c) {
      return a;
    }
    for (; 1 < c;) {
      a = b[--c], b[c] = a.charAt(0).toUpperCase() + a.substr(1);
    }
    return b.join("");
  }
  function L(a, b) {
    var c = "*" === b;
    c = w ? c ? a.all : a.all.tags(b.toUpperCase()) : 6 > D && c ? a.all : a.getElementsByTagName(b);
    for (var e = [], h = 0, f = c.length; h < f; ++h) {
      e[h] = c[h];
    }
    return e;
  }
  function Oa(a) {
    return w ? a.parentElement : a.parentNode;
  }
  function Ga(a, b, c, e, h, f) {
    if (w) {
      var t = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
      var g = T(2 > a ? P(b) : b);
      g = 2 > a ? g.indexOf(b) + a : g.length;
      b.insertAdjacentHTML(t, B(c, e, h));
      b = T(b)[g];
      null != h && ("font" === c ? b.nodeType = 3 : b.children[0].nodeType = 3);
    } else if (tb) {
      b = A.createElement(B(c, e));
    } else {
      b = f ? A.createElementNS("http://www.w3.org/2000/svg", c) : A.createElement(c);
      if (e) {
        for (t in e) {
          if ((a = e[t]) || 0 === a) {
            switch(t) {
              case "class":
              case "className":
                ba(b, a);
                break;
              case "style":
                f = b.style;
                for (g in a) {
                  f[g] = a[g];
                }
                break;
              default:
                G(b, t, a);
            }
          }
        }
        !R || "a" !== c && "A" !== c || !e.href || e["tag-index"] || e.tagIndex || G(b, "tagIndex", "-0");
      }
      Ma || null != h && Ha(b, h);
    }
    return b;
  }
  function Ha(a, b) {
    if (w) {
      return Ga(2, a, "font", y, b);
    }
    var c = A.createTextNode("" + b);
    a.appendChild(c);
    return c;
  }
  function $a(a, b) {
    9 > D ? a.className = b : a.setAttribute("class", b);
  }
  function ma(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function na(a, b, c) {
    for (var e = 0; e < a.length; ++e) {
      !0 === a[e](b) && (a.splice(e, 1), --e);
    }
    c && (a.length = 0);
  }
  function ab() {
    var a = fb, b;
    for (fb = []; b = a.shift();) {
      na(b, a.shift(), a.shift());
    }
  }
  function Y(a) {
    var b = a || event;
    a = gb[b.type];
    var c = -1, e, h;
    5 > D ? b = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
      event.cancelBubble = !0;
    }} : D ? (b.target = b.srcElement, b.preventDefault = function() {
      b.returnValue = !1;
    }, b.stopPropagation = function() {
      b.cancelBubble = !0;
    }) : ub && (b.M = b.stopPropagation, b.stopPropagation = function() {
      h = !0;
    });
    for (; e = a[++c];) {
      e.C === this ? (this.h = e.B, D && (b.currentTarget = this), this.h(b), D ? (this.h = H, this.h = y) : delete this.h) : 7.2 > R && this === A && e.C === p && (p.h = e.B, p.h(b), delete p.h);
    }
    if (D) {
      return b.preventDefault = b.stopPropagation = H, b.preventDefault = b.stopPropagation = y, b.returnValue;
    }
    ub && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (vb = !0), h && !vb && b.M(), b.M = b.stopPropagation = y);
    function bz() {
      event.returnValue = !1;
    }
    bz = !1;
  }
  function mb() {
    var a = 9 === Sb.offsetWidth;
    Fb !== a && (a = Fb = a, ra || fb.length || ea(ab), fb.push(pb, a, void 0), oa("p_cssAvailability:" + Fb));
  }
  function Ia(a) {
    return a === "" + a;
  }
  function ca(a, b) {
    return new Tb(a, b);
  }
  function J(a, b, c, e, h) {
    var f = ja.codeBlocks[ja.codeBlocks.length - 1], t = Va(), g = t - Gb;
    switch(c || 0) {
      case 1:
        ja.initRegExpCount++;
        ja.initRegExpTotal += g;
        ja.initRegExpMax < g && (ja.initRegExpMax = g, ja.initRegExpSource = h.toString(), ja.initRegExpInstance = h);
        break;
      case 2:
        f.decorateCount++;
        f.decorateTime += g;
        break;
      case 3:
        f.updateDOMTime += g;
    }
    if (t - hb < ec && !e) {
      return Gb = t, a(b);
    }
    ea(Aa, {T:a, V:b});
  }
  function Aa(a) {
    hb = Gb = Va();
    a.T(a.V);
  }
  function Pa(a, b) {
    a && ib[a] || (a = Ub.test(b) ? "default-markup" : "default-code");
    var c = !!ib[a];
    c && J(Vb, a, 0, !0);
    return c;
  }
  function Qa() {
    function a(wa, Wa, Xa) {
      Wa && (b.A = b.A || [], b.A.push({D:b, J:b.J, N:1, H:t, K:wa, G:Wa, F:Xa, O:{}, I:0}));
    }
    var b = ha, c = b.F, e = c[0], h = c[2], f = b.K, t = b.H, g = b.W.shift(), x = b.O;
    if (g) {
      var k = x[g], q;
      if (!(0 <= k)) {
        if (q = e[g.charAt(0)]) {
          var v = g.match(q[1]);
          k = q[0];
        } else {
          for (k = 3, e = -1; q = h[++e];) {
            if (v = g.match(q[1])) {
              k = q[0];
              break;
            }
          }
        }
        !(q = Ia(k)) || v && Ia(v[1]) || (q = !1, k = 25);
        q || (x[g] = k);
      }
      h = b.I;
      x = g.length;
      b.I += x;
      if (q) {
        q = v[1];
        e = g.indexOf(q);
        var F = q.length, U = e + F;
        v[2] && (U = x - v[2].length, e = U - F);
        a(f + h, g.substr(0, e), c);
        if (F && Pa(k, q)) {
          a(f + h + e, q);
          var xa = !0;
        }
        a(f + h + U, g.substr(U), c);
        b.A && b.A.length && (ha = b.A.shift());
        xa || (ha !== b ? J(Hb, y, 2) : J(Qa, y, 2));
      } else {
        t.push(f + h, k), J(Qa, y, 2);
      }
    } else {
      b.D ? (ha = b.D.A.shift()) ? J(Hb, y, 2) : (ha = b.D, J(Qa, y, 2)) : J(fc, y, 2);
    }
  }
  function bb(a) {
    if (wb.length) {
      var b = wb.shift(), c = xb[b];
      if (c.pop) {
        xb[b] = c = ca(c[0], c[1]);
      } else if (Ia(c)) {
        xb[b] = c = ca(c);
      } else {
        return bb(a);
      }
      J(bb, a, 1, !1, c);
    } else {
      J(Vb, a);
    }
  }
  function cb(a) {
    for (var b, c = a.firstChild; c; c = c.nextSibling) {
      var e = c.nodeType;
      b = 1 === e ? b ? a : c : 3 === e ? Ib.test(c.nodeValue) ? a : b : b;
    }
    return b === a ? y : b;
  }
  var H = V, Ba = A.body, M = W[1], D = E(2) || E(3), Ja = E(7);
  E(5) || E(6);
  var R = E(8) || E(9), S = E(11) || E(12), Db = S && 0 <= W.conpare(M, "1.9.1");
  E(13);
  var z = E(15), db = E(16) || E(17);
  E(10) || E(25);
  var qa = E(20) || E(22);
  E(23);
  var Ka = E(21);
  E(24);
  qa && la(navigator.userAgent.split("Edg/")[1]);
  la(navigator.appVersion.split("Trident/")[1]);
  d(35) || d(36) || d(37);
  var nb = .9 > S, ob = d(1) || d(2) || d(3) || d(4) || d(8) || d(9) || d(10), ra = [], pb = [];
  525 > z || 3.2 > db || 2.2 > Ka || 10 > R || S && !Db || E(25) || 10 > E(3) || d(32) || d(30) || d(3);
  var Ra = [], sa = [], eb = X.now || function() {
    return +new X();
  };
  oa = function(a) {
    Ra.push(a);
  };
  va = function(a) {
    sa.push(a);
  };
  var qb = function(a) {
    da.length || (Ca = setInterval(Ea, ia));
    da.push({f:a, P:++Ta});
    return Ta;
  };
  var Sa = function() {
    Ca && (I(), Ca = setInterval(Ea, ia));
  };
  var da = [], ia = 500, Ta = 0, Ca;
  if (5 > D || Ja) {
    p._wdb_onlooptimer = Ea, Ea = "_wdb_onlooptimer()";
  }
  var ea = function(a, b, c) {
    Da.length || (n = l(za, La));
    Da.push({f:a, p:b, P:++r, t:eb() + (La < c ? c : La)});
    return r;
  };
  var Eb = function() {
    n && (Na(), n = l(za, La));
  };
  var Da = [], La = 16, r = 0, n;
  if (5 > D || Ja) {
    p._wdb_ontimer = za, za = "_wdb_ontimer()";
  }
  var w = 5 > D;
  var C = L(A, "html")[0];
  var rb = L(A, "head")[0];
  var Ua = function(a) {
    return p[a] || A[a] || A.getElementById(a);
  };
  var P = Oa;
  var T = function(a) {
    a = w ? a.children : a.childNodes;
    for (var b = [], c = a.length; c;) {
      b[--c] = a[c];
    }
    return b;
  };
  var K = function(a, b, c, e, h) {
    b = Ga(2, a, b, c, e, h);
    w || (a.appendChild(b), Ma && null != e && Ha(b, e));
    return b;
  };
  var sb = function(a, b, c, e, h) {
    b = Ga(0, a, b, c, e, h);
    w || (Oa(a).insertBefore(b, a), Ma && null != e && Ha(b, e));
    return b;
  };
  var Z = Ha;
  var fa = function(a, b) {
    var c;
    if (w) {
      return Ga(1, a, "font", y, b);
    }
    var e = A.createTextNode("" + b);
    (c = a.nextSibling) ? P(a).insertBefore(e, c) : P(a).appendChild(e);
    return e;
  };
  var N = function(a) {
    P(a) ? w ? a.outerHTML = "" : (5.5 > D && (a.style.filter = ""), P(a).removeChild(a)) : oa("[DOM] p_DOM_remove(), No parentNode!");
  };
  var tb = 9 > D, Ma = tb;
  var u = function(a) {
    return a.tagName.toUpperCase();
  };
  var O = function(a, b) {
    if (8 > R || 5.5 > D) {
      b = Fa(b);
    }
    var c = a.getAttribute(b);
    return R && "tabIndex" === b ? "-0" === c ? "" : "" === c ? "-1" : c : c || "";
  };
  var G = function(a, b, c) {
    if (R && "tab-index" === b) {
      "-1" === c ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", c);
    } else {
      if (8 > R || 5.5 > D) {
        b = Fa(b);
      }
      a.setAttribute(b, c);
    }
  };
  var ba = $a;
  var ta = function(a, b) {
    var c;
    if (!ma(a, b)) {
      if (c = a.className) {
        c += " ";
      }
      $a(a, c + b);
    }
  };
  var Fb, Sb, fb = [];
  ra.push(function() {
    Sb = K(Ba, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
    yb(function() {
      fb.length && ea(ab);
    });
  });
  var zb = function(a, b, c, e) {
    if (Wb) {
      a.addEventListener(b, c, e ? Xb ? e : e.capture || !0 === e : !1);
    } else {
      var h = {C:a, B:c};
      e = gb[b];
      var f = "on" + b, t, g;
      if (e) {
        for (t = e.length; g = e[--t];) {
          if (g.C === a && g.B === c) {
            return;
          }
        }
        gb[b].push(h);
      } else {
        gb[b] = e = [h], Jb || (b = a[f], "function" === typeof b && b !== Y && e.unshift({C:a, B:b}));
      }
      Jb ? a.attachEvent(f, Y) : a[f] = Y;
    }
  };
  var dc = function(a, b, c, e) {
    if (Wb) {
      a.removeEventListener(b, c, e ? Xb ? e : e.capture || !0 === e : !1);
    } else {
      e = gb[b];
      b = "on" + b;
      var h, f, t;
      if (e) {
        for (h = e.length; f = e[--h];) {
          f.C === a && (f.B === c ? e.splice(h, 1) : t = !0);
        }
        t || (Jb ? a.detachEvent(b, Y) : D ? (a[b] = H, a[b] = null) : delete a[b]);
      }
    }
  };
  var Xb = !D && !Ja && (new aa('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), gb = {}, Jb = !1, ub = 525.13 > z, Wb = !ub && !Ja && p.addEventListener, vb;
  ub && C.addEventListener("click", function(a) {
    if (vb) {
      return vb = !1, a.preventDefault(), !1;
    }
  });
  var yb = function(a) {
    ra ? ra.push(a) : alert("Load event has already been dispatched!");
  };
  var Yb = function(a) {
    Ab && Ab.push(a);
  };
  var Ab = [];
  if (419.3 >= z) {
    var Bb = function() {
      if (Bb) {
        var a = A.readyState;
        "loaded" === a || "complete" === a ? (Bb = y, m()) : ea(Bb);
      }
    };
    ea(Bb);
  } else {
    zb(p, "load", m), nb && ea(function() {
      m && m();
    }, 999);
  }
  D || !nb && 1.8 > S ? zb(p, "unload", function(a) {
    na(Ab, a, !0);
  }) : Ab = y;
  yb(function() {
    mb();
    qb(mb);
  });
  var gc = S && 0 >= W.conpare(M, "0.9");
  var Kb = !(7.2 > R || gc);
  var Zb = function(a) {
    Lb ? ra ? A.write('<script src="' + a + '">\x3c/script>') : va("[DynamicScvriptLoader] Document already loaded! " + a) : ra || Cb.length ? Cb.push(a) : Mb(a);
  };
  var $b = function(a) {
    Lb ? oa("[DynamicScvriptLoader] " + a + " loaded.") : a === Nb ? Mb(Cb.shift()) : va(a + " <> " + Nb);
  };
  var Lb = !Kb, hc = Kb && 7.5 > R, Nb;
  if (!Lb) {
    var Cb = [];
    yb(function() {
      Mb(Cb.shift());
    });
    var Mb = function(a) {
      if (Nb = a) {
        hc ? Ob[0].src = a : K(rb, "script", {src:a});
      }
    };
  }
  var ib = {m:[0, 4, [4, 5, 6, 7, 8, 9, 10, 11, 0, 12, 13]], c:"m", n:[1, 17, [16, 17, 18, 5, 6, 19, 20, 9, 21, 22, 0, 23]], S:[2, 29, [27, 28, 29, 30, 31, 32, 33, 34]], R:"S", s:"S", r:"S", cc:"m", cs:[0, 38, [16, 4, 5, 6, 7, 35, 9, 10, 11, 0, 12, 13]], sh:[3, 42, [38, 9, 10, 11, 0, 12, 13]], py:[4, 45, [40, 9, 10, 11, 0, 12, 13]], cv:"py", pm:[3, 47, [41, 42, 9, 10, 11, 0, 12, 43]], pl:"pm", rb:[3, 51, [44, 45, 9, 10, 11, 0, 12, 43]], ts:[5, 54, [5, 6, 44, 46, 9, 10, 11, 0, 12, 43]], js:"ts", ex:[6, 
  60, [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65]], go:[7, 77, [67, 68]], hs:[8, 84, [73, 74, 75, 76]], ls:[9, 94, [82, 83, 84, 85, 86, 87, 88, 89, 90, 91]], ss:[10, 108, [95, 96, 97, 98, 99]], el:"ss", cl:"ss", ll:[11, 115, [101, 102, 103, 104, 105]], ml:[12, 123, [108, 109, 110, 111, 112]], fs:"ml", rd:[13, 130, [114, 115, 116, 117, 118]], Rd:"rd", vb:[14, 139, [122, 123, 124, 125, 126, 127]], xq:[15, 148, [130, 131, 132, 133, 134, 129, 135, 136, 137, 138, 24]], xsl:[16, 158, [139, 
  140, 141, 142, 143, 144, 145, 146, 147, 148]], xml:"xsl", htm:"xsl", cyc:"m", cxx:"m", cpp:"m", csh:"sh", bsh:"sh", aea:[17, 169, [149, 150, 97, 151, 99]], agc:"aea", cbm:[18, 175, [154, 155, 156, 152, 157]], clj:[19, 182, [160, 161]], css:[20, 186, [163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173]], erl:[21, 200, [176, 177, 178, 179, 180]], exs:"ex", rkt:"ss", scm:"ss", lsp:"ss", lgt:[22, 207, [113, 182, 183, 184, 179, 185]], lua:[23, 213, [187, 188, 189, 190, 191, 192]], sql:[24, 221, [194, 
  195, 190, 196, 197]], tcl:[25, 228, [200, 96, 97, 98, 99]], tex:[13, 230, [115, 201, 202, 203, 204]], vbs:"vb", vhd:[26, 235, [205, 206, 207, 208, 209, 210, 211, 212]], yml:[27, 250, [219, 220, 221, 222]], mxml:"xsl", html:"xsl", json:[5, 255, [223, 9, 10, 11, 0, 12, 13]], java:[5, 257, [5, 6, 224, 9, 10, 11, 0, 12, 13]], bash:"sh", perl:"pm", ruby:"rb", dart:[26, 259, [225, 226, 227, 168, 228, 229, 230, 231, 232, 233, 234, 235, 236, 60, 237, 238, 239, 240, 241, 242]], lisp:"ss", llvm:"ll", rust:[16, 
  278, [24, 243, 6, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 191, 264, 265, 266]], vhdl:"vhd", wiki:[28, 305, [269, 270, 271, 272, 273, 274]], yaml:"yml", xhtml:"xsl", regex:[16, 312, [275]], basic:"cbm", lasso:"ls", mumps:[29, 315, [94, 277, 278, 279, 280, 281]], proto:[5, 321, [5, 6, 282, 283, 9, 10, 11, 0, 12, 13]], Splus:"S", scala:[30, 327, [287, 288, 289, 290, 291, 292, 293, 294, 295]], swift:[31, 339, [298, 299, 300, 301, 302, 6, 303, 
  304]], latex:"tex", "in.tag":[32, 349, [307, 308, 309, 310, 311, 312, 313, 314, 315, 316]], "uq.val":[16, 312, [317]], python:"py", coffee:[33, 361, [4, 5, 6, 44, 319, 9, 10, 11, 0, 12, 43]], apollo:"aea", "css-kw":[16, 363, [320]], erlang:"erl", kotlin:[34, 365, [322, 323, 324, 325, 243, 6, 326, 327, 328, 329, 330]], matlab:[35, 377, [333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343]], pascal:[36, 391, [346, 347, 348, 349, 344, 350]], xquery:"xq", "css-str":[16, 397, [351]], logtalk:"lgt", 
  nemerle:"n", "wiki.meta":[37, 400, []], typescript:"ts", javascript:"ts", lassoscript:"ls", "default-code":[38, 401, [4, 5, 6, 44, 353, 9, 10, 11, 0, 12, 43]], "default-markup":"xsl", "matlab-operators":[16, 403, [354, 342, 343, 355]], "matlab-identifiers":[16, 406, [356, 357, 358, 359, 360, 361, 362, 363]]};
  var ic = [{"'":1, '"':1, "#":2, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {'"':14, "#":15, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':25, "'":26}, {"`":36, '"':36, "'":36, "#":37, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {'"':39, "'":39, "#":37, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {"'":1, '"':1, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, 
  "#":27, "'":48, "@":49, "}":50, "|":50, "{":50, "^":50, "]":50, "\\":50, "[":50, "?":50, ">":50, "=":50, "<":50, ";":50, "-":50, ",":50, "+":50, "*":50, ")":50, "(":50, "&":50, "%":50, "!":50, "-num":47}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "'":66, '"':66}, {" ":70, "\r":70, "\f":70, "\v":70, "\n":70, "\t":70, '"':71, "'":72, "-num":69}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "'":78, '"':79, "`":80, $:81, "#":81, "-num":77}, {"(":92, ")":93, ";":94, "\u00a0":24, " ":24, "\r":24, 
  "\n":24, "\t":24, '"':25}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':100, ";":94}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "#":106, "'":107, '"':107}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "%":113}, {"\u2029":119, "\u2028":119, "\u00a0":119, " ":119, "\r":119, "\n":119, "\t":119, "\u201d":120, "\u201c":120, '"':120, "\u2019":121, "\u2018":121, "'":121}, {$:128, "'":129, '"':129}, {}, {"#":37, "\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':25}, {'"':153, "\u00a0":3, 
  "\t":3, "\n":3, "\r":3, " ":3, "-num":152}, {"{":158, "[":158, "(":158, "}":159, "]":159, ")":159, ";":94, "\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':25}, {"\f":162, "\n":162, "\r":162, "\t":162, " ":162}, {" ":70, "\r":70, "\f":70, "\v":70, "\n":70, "\t":70, '"':71, "'":174, "?":175, "-num":69}, {'"':71, "'":174, "%":113, "-num":181}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "'":186, '"':186}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "'":193, '"':193}, {"{":198, "}":199, 
  "#":37, "\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':25}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24}, {"?":213, ">":213, "|":213, ":":213, "%":214, "&":215, "!":216, '"':217, "'":218, "#":37, "\n":3, "\r":3, "\t":3, " ":3}, {z:267, y:267, x:267, w:267, v:267, u:267, t:267, s:267, r:267, q:267, p:267, o:267, n:267, m:267, l:267, k:267, j:267, i:267, g:267, f:267, e:267, d:267, c:267, b:267, a:267, "\u00a0":267, " ":267, "\t":267, "]":268, "[":268, "^":268, "~":268, "*":268, "=":268, 
  "-num":267}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':276, ";":94}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':284, "`":285, "~":286, "}":286, "|":286, "{":286, "^":286, "]":286, "\\":286, "[":286, "@":286, "?":286, ">":286, "=":286, "<":286, ";":286, ":":286, "-":286, ",":286, "+":286, "*":286, ")":286, "(":286, "&":286, "%":286, "#":286, "!":286}, {"\x00":296, "\f":296, "\v":296, "\t":296, "\r":296, "\n":296, " ":296, '"':297}, {"\n":305, "\r":305, "\t":305, " ":305, "'":306, 
  '"':306}, {'"':39, "'":39, "#":318, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, ":":321, "}":321, "|":321, "{":321, "^":321, "]":321, "\\":321, "[":321, "?":321, ">":321, "=":321, "<":321, ";":321, "-":321, ",":321, "+":321, "*":321, ")":321, "(":321, "&":321, "%":321, "!":321, ".":321}, {"\u00a0":331, "\f":331, "\v":331, "\n":331, "\r":331, "\t":331, " ":331, "%":113, "!":332}, {"'":345, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":344}, 
  {"#":352}, {"`":36, '"':36, "'":36, "#":2, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}], jc = [[0, 0], [2, 1], [5, 2], [3, 3], [2, 5], [5, 6], [5, 7], [6, 8], [1, 9], [0, 10], [6, 11], [3, 12], [3, 13], [4, 14], [2, 15], [5, 16], [2, 18], [2, 19], [2, 20], [1, 21], [6, 22], [6, 23], [3, 24], [4, 25], [3, 26], [2, 27], [2, 28], [5, 30], [1, 31], [0, 32], [0, 33], [0, 34], [4, 35], [3, 36], [2, 37], [1, 39], [2, 40], [5, 41], [1, 43], [2, 44], [1, 46], ["regex", 48], [1, 49], [4, 50], ["regex", 
  52], [1, 53], [1, 55], [0, 56], [0, 57], [7, 58], [4, 59], [7, 61], [4, 62], [0, 63], [7, 64], [1, 65], [0, 66], [0, 67], [2, 68], [2, 69], [6, 70], [5, 71], [3, 72], [8, 73], [8, 74], [4, 75], [3, 76], [5, 78], [3, 79], [0, 80], [3, 81], [2, 82], [2, 83], [5, 85], [1, 86], [3, 87], [4, 88], [0, 89], [2, 90], [2, 91], [2, 92], [7, 93], [9, 95], [5, 96], [7, 97], [0, 98], [8, 99], [0, 100], [6, 101], [1, 102], [3, 103], [4, 104], [11, 105], [12, 106], [5, 107], [1, 109], [0, 110], [0, 111], [3, 
  112], [4, 113], [2, 114], [3, 116], [1, 117], [0, 118], [0, 119], [4, 120], [5, 121], [2, 122], [5, 124], [1, 125], [0, 126], [3, 127], [4, 128], [5, 129], [0, 131], [1, 132], [1, 133], [3, 134], [4, 135], [3, 136], [2, 137], [5, 138], [1, 140], [5, 141], [0, 142], [3, 143], [4, 144], [4, 145], [15, 146], [2, 147], [3, 149], [0, 150], [9, 151], [5, 152], [3, 153], [1, 154], [6, 155], [16, 156], [3, 157], [3, 159], [10, 160], [5, 161], ["", 162], ["", 163], [4, 164], ["", 165], ["js", 166], ["css", 
  167], ["in.tag", 168], [1, 170], [6, 171], [3, 172], [0, 173], [2, 174], [5, 176], [1, 177], [3, 178], [4, 179], [11, 180], [12, 181], [1, 183], [6, 184], [3, 185], [2, 187], [2, 188], ["css-str", 189], [1, 190], ["css-kw", 191], [5, 192], [5, 193], [0, 194], [0, 195], [3, 196], [4, 197], [0, 198], [0, 199], [5, 201], [1, 202], [1, 203], [6, 204], [4, 205], [0, 206], [5, 208], [1, 209], [1, 210], [4, 211], [2, 212], [5, 214], [2, 215], [1, 216], [0, 217], [3, 218], [4, 219], [2, 220], [5, 222], 
  [1, 223], [3, 224], [4, 225], [11, 226], [12, 227], [1, 229], [1, 231], [6, 232], [0, 233], [4, 234], [2, 236], [5, 237], [1, 238], [6, 239], [6, 240], [0, 241], [3, 242], [4, 243], [4, 244], [10, 245], [6, 246], [6, 247], [2, 248], [2, 249], [10, 251], [4, 252], [1, 253], [3, 254], [1, 256], [1, 258], [5, 260], [1, 261], [5, 262], [1, 263], [1, 264], [1, 265], [6, 266], [1, 267], [2, 268], [2, 269], [2, 270], [2, 271], [3, 272], [4, 273], [0, 274], [0, 275], [0, 276], [4, 277], [5, 279], [2, 280], 
  [2, 281], [2, 282], [2, 283], [2, 284], [9, 285], [1, 286], [1, 287], [6, 288], [6, 289], [0, 290], [0, 291], [0, 292], [0, 293], [0, 294], [0, 295], [0, 296], [0, 297], [0, 298], [7, 299], [8, 300], [4, 301], [3, 302], [3, 303], [4, 304], ["wiki.meta", 306], [0, 307], ["", 308], ["", 309], [2, 310], [3, 311], [2, 313], [2, 314], [10, 316], [1, 317], [0, 318], [3, 319], [4, 320], [6, 322], [1, 323], [2, 324], [0, 325], [4, 326], [2, 328], [0, 329], [1, 330], [0, 331], [0, 332], [6, 333], [3, 334], 
  [5, 335], [4, 336], [3, 337], [2, 338], [0, 340], [0, 341], [0, 342], [1, 343], [5, 344], [4, 345], [6, 346], [3, 347], [8, 348], [9, 350], [7, 351], ["uq.val", 352], [4, 353], ["js", 354], ["js", 355], ["js", 356], ["css", 357], ["css", 358], ["css", 359], [8, 313], [5, 360], [1, 362], [1, 196], [4, 364], [1, 366], [0, 367], [0, 368], [6, 369], [2, 370], [2, 371], [2, 372], [0, 373], [0, 374], [3, 375], [17, 376], [18, 378], [19, 379], [20, 380], [14, 381], [14, 382], ["matlab-operators", 383], 
  ["matlab-identifiers", 384], [2, 385], [0, 386], [9, 387], [4, 388], [0, 389], [2, 390], [5, 392], [1, 393], [0, 394], [3, 395], [4, 396], [2, 398], [1, 399], [1, 402], ["matlab-identifiers", 404], [21, 405], [1, 407], [22, 408], [6, 409], [23, 410], [13, 411], [13, 412], [13, 413], [24, 414]], xb = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", "^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\\b|[^\\r\\n]*)", 
  "^\\s+", ["(?:(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$)))|(?:#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\\b|[^\\r\\n]*))|(?:\\s+)|(?:<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h(?:h|pp|\\+\\+)?|[a-z]\\w*)>)|(?:\\/\\/[^\\r\\n]*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:(?:DIR|FILE|array|vector|(?:de|priority_)?queue|(?:forward_)?list|stack|(?:const_)?(?:reverse_)?iterator|(?:unordered_)?(?:multi)?(?:set|map)|bitset|u?(?:int|float)\\d*)\\b)|(?:(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|alignas|alignof|align_union|asm|axiom|bool|concept|concept_map|const_cast|constexpr|decltype|delegate|dynamic_cast|explicit|export|friend|generic|late_check|mutable|namespace|noexcept|noreturn|nullptr|property|reinterpret_cast|static_assert|static_cast|template|typeid|typename|using|virtual|where)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*)|(?:[\x00-\uffff])", 
  "g"], "^<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h(?:h|pp|\\+\\+)?|[a-z]\\w*)>", "^\\/\\/[^\\r\\n]*", "^\\/\\*[\\s\\S]*?(?:\\*\\/|$)", "^(DIR|FILE|array|vector|(de|priority_)?queue|(forward_)?list|stack|(const_)?(reverse_)?iterator|(unordered_)?(multi)?(set|map)|bitset|u?(int|float)\\d*)\\b", "^(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|alignas|alignof|align_union|asm|axiom|bool|concept|concept_map|const_cast|constexpr|decltype|delegate|dynamic_cast|explicit|export|friend|generic|late_check|mutable|namespace|noexcept|noreturn|nullptr|property|reinterpret_cast|static_assert|static_cast|template|typeid|typename|using|virtual|where)\\b", 
  ["^@[a-z_$][a-z_$@0-9]*", "i"], "^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b)", ["^[a-z_$][a-z_$@0-9]*", "i"], "^\\\\[\\s\\S]?", "^.[^\\s\\w.$@'\"`/\\\\]*", "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*\\'|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", "^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\\b|[^\\r\\n]*)", ['(?:(?:\\\'(?:[^\\\\\\\'\\r\\n]|\\\\.)*\\\'|\\"(?:[^\\\\\\"\\r\\n]|\\\\.)*(?:\\"|$)))|(?:#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\\b|[^\\r\\n]*))|(?:\\s+)|(?:@\\"(?:[^\\"]|\\"\\")*(?:\\"|$))|(?:<#(?:[^#>])*(?:#>|$))|(?:<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h|[a-z]\\w*)>)|(?:\\/\\/[^\\r\\n]*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:(?:abstract|and|as|base|catch|class|def|delegate|enum|event|extern|false|finally|fun|implements|interface|internal|is|macro|match|matches|module|mutable|namespace|new|null|out|override|params|partial|private|protected|public|ref|sealed|static|struct|syntax|this|throw|true|try|type|typeof|using|variant|virtual|volatile|when|where|with|assert|assert2|async|break|checked|continue|do|else|ensures|for|foreach|if|late|lock|new|nolate|otherwise|regexp|repeat|requires|return|surroundwith|unchecked|unless|using|while|yield)\\b)|(?:(?:array|bool|byte|char|decimal|double|float|int|list|long|object|sbyte|short|string|ulong|uint|ufloat|ulong|ushort|void)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:@[A-Z]+[a-z][A-Za-z_$@0-9]*)|(?:\'?[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:.[^\\s\\w\\.$@\\\'\\"\\`\\/\\#]*)|(?:[\x00-\uffff])', 
  "g"], '^@\\"(?:[^\\"]|\\"\\")*(?:\\"|$)', "^<#(?:[^#>])*(?:#>|$)", "^<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h|[a-z]\\w*)>", "^(?:abstract|and|as|base|catch|class|def|delegate|enum|event|extern|false|finally|fun|implements|interface|internal|is|macro|match|matches|module|mutable|namespace|new|null|out|override|params|partial|private|protected|public|ref|sealed|static|struct|syntax|this|throw|true|try|type|typeof|using|variant|virtual|volatile|when|where|with|assert|assert2|async|break|checked|continue|do|else|ensures|for|foreach|if|late|lock|new|nolate|otherwise|regexp|repeat|requires|return|surroundwith|unchecked|unless|using|while|yield)\\b", 
  "^(?:array|bool|byte|char|decimal|double|float|int|list|long|object|sbyte|short|string|ulong|uint|ufloat|ulong|ushort|void)\\b", "^@[A-Z]+[a-z][A-Za-z_$@0-9]*", ["^'?[A-Za-z_$][a-z_$@0-9]*", "i"], "^.[^\\s\\w\\.$@\\'\\\"\\`\\/\\#]*", "^[\\t\\n\\r \\xA0]+", '^\\"(?:[^\\"\\\\]|\\\\[\\s\\S])*(?:\\"|$)', "^\\'(?:[^\\'\\\\]|\\\\[\\s\\S])*(?:\\'|$)", ["(?:[\\t\\n\\r \\xA0]+)|(?:\\\"(?:[^\\\"\\\\]|\\\\[\\s\\S])*(?:\\\"|$))|(?:\\'(?:[^\\'\\\\]|\\\\[\\s\\S])*(?:\\'|$))|(?:#.*)|(?:(?:if|else|for|while|repeat|in|next|break|return|switch|function)(?![A-Za-z0-9_.]))|(?:0[xX][a-fA-F0-9]+(?:[pP][0-9]+)?[Li]?)|(?:[+-]?(?:[0-9]+(?:\\.[0-9]+)?|\\.[0-9]+)(?:[eE][+-]?[0-9]+)?[Li]?)|(?:(?:NULL|NA(?:_(?:integer|real|complex|character)_)?|Inf|TRUE|FALSE|NaN|\\.\\.(?:\\.|[0-9]+))(?![A-Za-z0-9_.]))|(?:(?:<<?-|->>?|-|==|<=|>=|<|>|&&?|!=|\\|\\|?|\\*|\\+|\\^|\\/|!|%.*?%|=|~|\\$|@|:{1,3}|[\\[\\](){};,?]))|(?:(?:[A-Za-z]+[A-Za-z0-9_.]*|\\.[a-zA-Z_][0-9a-zA-Z\\._]*)(?![A-Za-z0-9_.]))|(?:`.+`)|(?:[\x00-\uffff])", 
  "g"], "^#.*", "^(?:if|else|for|while|repeat|in|next|break|return|switch|function)(?![A-Za-z0-9_.])", "^0[xX][a-fA-F0-9]+([pP][0-9]+)?[Li]?", "^[+-]?([0-9]+(\\.[0-9]+)?|\\.[0-9]+)([eE][+-]?[0-9]+)?[Li]?", "^(?:NULL|NA(?:_(?:integer|real|complex|character)_)?|Inf|TRUE|FALSE|NaN|\\.\\.(?:\\.|[0-9]+))(?![A-Za-z0-9_.])", "^(?:<<?-|->>?|-|==|<=|>=|<|>|&&?|!=|\\|\\|?|\\*|\\+|\\^|\\/|!|%.*?%|=|~|\\$|@|:{1,3}|[\\[\\](){};,?])", "^(?:[A-Za-z]+[A-Za-z0-9_.]*|\\.[a-zA-Z_][0-9a-zA-Z\\._]*)(?![A-Za-z0-9_.])", 
  "^`.+`", ['(?:(?:\\\'(?:[^\\\\\\\'\\r\\n]|\\\\.)*(?:\\\'|$)|\\"(?:[^\\\\\\"\\r\\n]|\\\\.)*(?:\\"|$)))|(?:#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\\b|[^\\r\\n]*))|(?:\\s+)|(?:@\\"(?:[^\\"]|\\"\\")*(?:\\"|$))|(?:<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h(?:h|pp|\\+\\+)?|[a-z]\\w*)>)|(?:\\/\\/[^\\r\\n]*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:(?:DIR|FILE|array|vector|(?:de|priority_)?queue|(?:forward_)?list|stack|(?:const_)?(?:reverse_)?iterator|(?:unordered_)?(?:multi)?(?:set|map)|bitset|u?(?:int|float)\\d*)\\b)|(?:(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|add|alias|as|ascending|async|await|base|bool|by|byte|checked|decimal|delegate|descending|dynamic|event|finally|fixed|foreach|from|get|global|group|implicit|in|interface|internal|into|is|join|let|lock|null|object|out|override|orderby|params|partial|readonly|ref|remove|sbyte|sealed|select|set|stackalloc|string|select|uint|ulong|unchecked|unsafe|ushort|value|var|virtual|where|yield)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@\'"`/\\\\]*)|(?:[\x00-\uffff])', 
  "g"], "^(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|add|alias|as|ascending|async|await|base|bool|by|byte|checked|decimal|delegate|descending|dynamic|event|finally|fixed|foreach|from|get|global|group|implicit|in|interface|internal|into|is|join|let|lock|null|object|out|override|orderby|params|partial|readonly|ref|remove|sbyte|sealed|select|set|stackalloc|string|select|uint|ulong|unchecked|unsafe|ushort|value|var|virtual|where|yield)\\b", 
  "^(?:\\'(?:[^\\\\\\']|\\\\[\\s\\S])*(?:\\'|$)|\\\"(?:[^\\\\\\\"]|\\\\[\\s\\S])*(?:\\\"|$)|\\`(?:[^\\\\\\`]|\\\\[\\s\\S])*(?:\\`|$))", "^#[^\\r\\n]*", ["(?:(?:\\'(?:[^\\\\\\']|\\\\[\\s\\S])*(?:\\'|$)|\\\"(?:[^\\\\\\\"]|\\\\[\\s\\S])*(?:\\\"|$)|\\`(?:[^\\\\\\`]|\\\\[\\s\\S])*(?:\\`|$)))|(?:#[^\\r\\n]*)|(?:\\s+)|(?:(?:break|continue|do|else|for|if|return|while|case|done|elif|esac|eval|fi|function|in|local|set|then|until)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*)|(?:[\x00-\uffff])", 
  "g"], "^(?:break|continue|do|else|for|if|return|while|case|done|elif|esac|eval|fi|function|in|local|set|then|until)\\b", "^(?:\\'\\'\\'(?:[^\\'\\\\]|\\\\[\\s\\S]|\\'{1,2}(?=[^\\']))*(?:\\'\\'\\'|$)|\\\"\\\"\\\"(?:[^\\\"\\\\]|\\\\[\\s\\S]|\\\"{1,2}(?=[^\\\"]))*(?:\\\"\\\"\\\"|$)|\\'(?:[^\\\\\\']|\\\\[\\s\\S])*(?:\\'|$)|\\\"(?:[^\\\\\\\"]|\\\\[\\s\\S])*(?:\\\"|$))", ["(?:(?:\\'\\'\\'(?:[^\\'\\\\]|\\\\[\\s\\S]|\\'{1,2}(?=[^\\']))*(?:\\'\\'\\'|$)|\\\"\\\"\\\"(?:[^\\\"\\\\]|\\\\[\\s\\S]|\\\"{1,2}(?=[^\\\"]))*(?:\\\"\\\"\\\"|$)|\\'(?:[^\\\\\\']|\\\\[\\s\\S])*(?:\\'|$)|\\\"(?:[^\\\\\\\"]|\\\\[\\s\\S])*(?:\\\"|$)))|(?:#[^\\r\\n]*)|(?:\\s+)|(?:(?:break|continue|do|else|for|if|return|while|and|as|assert|class|def|del|elif|except|exec|finally|from|global|import|in|is|lambda|nonlocal|not|or|pass|print|raise|try|with|yield|False|True|None)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*)|(?:[\x00-\uffff])", 
  "g"], "^(?:break|continue|do|else|for|if|return|while|and|as|assert|class|def|del|elif|except|exec|finally|from|global|import|in|is|lambda|nonlocal|not|or|pass|print|raise|try|with|yield|False|True|None)\\b", ["(?:(?:\\'(?:[^\\\\\\']|\\\\[\\s\\S])*(?:\\'|$)|\\\"(?:[^\\\\\\\"]|\\\\[\\s\\S])*(?:\\\"|$)|\\`(?:[^\\\\\\`]|\\\\[\\s\\S])*(?:\\`|$)))|(?:#[^\\r\\n]*)|(?:\\s+)|(?:(?:^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(?:\\/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C.|\\x5B(?:[^\\x5C\\x5D]|\\x5C.)*(?:\\x5D|$))+\\/))|(?:(?:caller|delete|die|do|dump|elsif|eval|exit|foreach|for|goto|if|import|last|local|my|next|no|our|print|package|redo|require|sub|undef|unless|until|use|wantarray|while|BEGIN|END)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*(?!s*\\/))|(?:[\x00-\uffff])", 
  "g"], "^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(\\/(?=[^/*])(?:[^/\\x5B\\x5C]|\\x5C.|\\x5B(?:[^\\x5C\\x5D]|\\x5C.)*(?:\\x5D|$))+\\/)", "^(?:caller|delete|die|do|dump|elsif|eval|exit|foreach|for|goto|if|import|last|local|my|next|no|our|print|package|redo|require|sub|undef|unless|until|use|wantarray|while|BEGIN|END)\\b", "^.[^\\s\\w.$@'\"`/\\\\]*(?!s*\\/)", 
  ["(?:(?:\\'(?:[^\\\\\\']|\\\\[\\s\\S])*(?:\\'|$)|\\\"(?:[^\\\\\\\"]|\\\\[\\s\\S])*(?:\\\"|$)|\\`(?:[^\\\\\\`]|\\\\[\\s\\S])*(?:\\`|$)))|(?:#[^\\r\\n]*)|(?:\\s+)|(?:(?:^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(?:\\/(?=[^/*\\n\\r])(?:[^/\\x5B\\x5C\\n\\r]|\\x5C[\\S\\s]|\\x5B(?:[^\\x5C\\x5D\\n\\r]|\\x5C[\\S\\s])*(?:\\x5D|$))+\\/))|(?:(?:break|continue|do|else|for|if|return|while|alias|and|begin|case|class|def|defined|elsif|end|ensure|false|in|module|next|nil|not|or|redo|rescue|retry|self|super|then|true|undef|unless|until|when|yield|BEGIN|END)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*(?!s*\\/))|(?:[\x00-\uffff])", 
  "g"], "^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(\\/(?=[^/*\\n\\r])(?:[^/\\x5B\\x5C\\n\\r]|\\x5C[\\S\\s]|\\x5B(?:[^\\x5C\\x5D\\n\\r]|\\x5C[\\S\\s])*(?:\\x5D|$))+\\/)", "^(?:break|continue|do|else|for|if|return|while|alias|and|begin|case|class|def|defined|elsif|end|ensure|false|in|module|next|nil|not|or|redo|rescue|retry|self|super|then|true|undef|unless|until|when|yield|BEGIN|END)\\b", 
  ["(?:(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$)))|(?:\\s+)|(?:\\/\\/[^\\r\\n]*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:(?:^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(?:\\/(?=[^/*\\n\\r])(?:[^/\\x5B\\x5C\\n\\r]|\\x5C[\\S\\s]|\\x5B(?:[^\\x5C\\x5D\\n\\r]|\\x5C[\\S\\s])*(?:\\x5D|$))+\\/))|(?:(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|async|await|constructor|debugger|enum|eval|export|from|function|get|import|implements|instanceof|interface|let|null|of|set|undefined|var|with|yield|Infinity|NaN)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*(?!s*\\/))|(?:[\x00-\uffff])", 
  "g"], "^(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|async|await|constructor|debugger|enum|eval|export|from|function|get|import|implements|instanceof|interface|let|null|of|set|undefined|var|with|yield|Infinity|NaN)\\b", "^(?:0o[0-7](?:[0-7]|_[0-7])*|0x[\\da-fA-F](?:[\\da-fA-F]|_[\\da-fA-F])*|\\d(?:\\d|_\\d)*(?:\\.\\d(?:\\d|_\\d)*)?(?:[eE][+\\-]?\\d(?:\\d|_\\d)*)?)", 
  "^'(?:[^'\\\\]|\\\\(?:.|\\n|\\r))*'?", "^@\\w+", "^[!%&()*+,\\-;<=>?\\[\\\\\\]^{|}]+", ['(?:[\\t\\n\\r \\xA0]+)|(?:#.*)|(?:\'(?:[^\'\\\\]|\\\\(?:.|\\n|\\r))*\'?)|(?:@\\w+)|(?:[!%&()*+,\\-;<=>?\\[\\\\\\]^{|}]+)|(?:(?:0o[0-7](?:[0-7]|_[0-7])*|0x[\\da-fA-F](?:[\\da-fA-F]|_[\\da-fA-F])*|\\d(?:\\d|_\\d)*(?:\\.\\d(?:\\d|_\\d)*)?(?:[eE][+\\-]?\\d(?:\\d|_\\d)*)?))|(?:iex(?:\\(\\d+\\))?> )|(?:::)|(?::(?:\\w+[\\!\\?\\@]?|"(?:[^"\\\\]|\\\\.)*"?))|(?:(?:__(?:CALLER|ENV|MODULE|DIR)__))|(?:(?:alias|case|catch|def(?:delegate|exception|impl|macrop?|module|overridable|p?|protocol|struct)|do|else|end|fn|for|if|in|import|quote|raise|require|rescue|super|throw|try|unless|unquote(?:_splicing)?|use|when|with|yield)\\b)|(?:(?:true|false|nil)\\b)|(?:(?:\\w+[\\!\\?\\@]?|"(?:[^"\\\\]|\\\\.)*"):(?!:))|(?:"""\\s*(?:\\r|\\n)+(?:""?(?!")|[^\\\\"]|\\\\(?:.|\\n|\\r))*"{0,3})|(?:"(?:[^"\\\\]|\\\\(?:.|\\n|\\r))*"?(?!"))|(?:[A-Z]\\w*)|(?:_\\w*)|(?:[$a-z]\\w*[\\!\\?]?)|(?:~[A-Za-z](?:\\/(?:[^\\x0a\\x0d/\\\\]|\\\\.)+\\/|\\|(?:[^\\x0a\\x0d\\\\|]|\\\\.)+\\||"(?:[^\\x0a\\x0d"\\\\]|\\\\.)+"|\'(?:[^\\x0a\\x0d\'\\\\]|\\\\.)+\')[A-Za-z]*)|(?:~[A-Za-z](?:\\((?:[^\\x0a\\x0d)\\\\]|\\\\.)+\\)|\\[(?:[^\\x0a\\x0d\\\\-\\]]|\\\\.)+\\]|\\{(?:[^\\x0a\\x0d\\\\}]|\\\\.)+\\}|\\<(?:[^\\x0a\\x0d>\\\\]|\\\\.)+\\>)[A-Za-z]*)|(?:(?:\\.+|\\/|[:~]))|(?:[\x00-\uffff])', 
  "g"], "^iex(?:\\(\\d+\\))?> ", "^::", '^:(?:\\w+[\\!\\?\\@]?|"(?:[^"\\\\]|\\\\.)*"?)', "^(?:__(?:CALLER|ENV|MODULE|DIR)__)", "^(?:alias|case|catch|def(?:delegate|exception|impl|macrop?|module|overridable|p?|protocol|struct)|do|else|end|fn|for|if|in|import|quote|raise|require|rescue|super|throw|try|unless|unquote(?:_splicing)?|use|when|with|yield)\\b", "^(?:true|false|nil)\\b", '^(?:\\w+[\\!\\?\\@]?|"(?:[^"\\\\]|\\\\.)*"):(?!:)', '^"""\\s*(\\r|\\n)+(?:""?(?!")|[^\\\\"]|\\\\(?:.|\\n|\\r))*"{0,3}', 
  '^"(?:[^"\\\\]|\\\\(?:.|\\n|\\r))*"?(?!")', "^[A-Z]\\w*", "^_\\w*", "^[$a-z]\\w*[\\!\\?]?", ["^~[A-Z](?:\\/(?:[^\\/\\r\\n\\\\]|\\\\.)+\\/|\\|(?:[^\\|\\r\\n\\\\]|\\\\.)+\\||\"(?:[^\"\\r\\n\\\\]|\\\\.)+\"|'(?:[^'\\r\\n\\\\]|\\\\.)+')[A-Z]*", "i"], ["^~[A-Z](?:\\((?:[^\\)\\r\\n\\\\]|\\\\.)+\\)|\\[(?:[^\\]\\r\\n\\\\]|\\\\.)+\\]|\\{(?:[^\\}\\r\\n\\\\]|\\\\.)+\\}|\\<(?:[^\\>\\r\\n\\\\]|\\\\.)+\\>)[A-Z]*", "i"], "^(?:\\.+|\\/|[:~])", "^(?:\\\"(?:[^\\\"\\\\]|\\\\[\\s\\S])*(?:\\\"|$)|\\'(?:[^\\'\\\\]|\\\\[\\s\\S])+(?:\\'|$)|`[^`]*(?:`|$))", 
  ["(?:[\\t\\n\\r \\xA0]+)|(?:(?:\\\"(?:[^\\\"\\\\]|\\\\[\\s\\S])*(?:\\\"|$)|\\'(?:[^\\'\\\\]|\\\\[\\s\\S])+(?:\\'|$)|`[^`]*(?:`|$)))|(?:(?:\\/\\/[^\\r\\n]*|\\/\\*[\\s\\S]*?\\*\\/))|(?:(?:[^\\/\\\"\\'`]|\\/(?![\\/\\*]))+)|(?:[\x00-\uffff])", "gi"], "^(?:\\/\\/[^\\r\\n]*|\\/\\*[\\s\\S]*?\\*\\/)", ["^(?:[^\\/\\\"\\'`]|\\/(?![\\/\\*]))+", "i"], ["^(?:0o[0-7]+|0x[\\da-f]+|\\d+(?:\\.\\d+)?(?:e[+\\-]?\\d+)?)", "i"], "^[\\t\\n\\x0B\\x0C\\r ]+", '^\\"(?:[^\\"\\\\\\n\\x0C\\r]|\\\\[\\s\\S])*(?:\\"|$)', "^\\'(?:[^\\'\\\\\\n\\x0C\\r]|\\\\[^&])\\'?", 
  ["(?:[\\t\\n\\x0B\\x0C\\r ]+)|(?:\\\"(?:[^\\\"\\\\\\n\\x0C\\r]|\\\\[\\s\\S])*(?:\\\"|$))|(?:\\'(?:[^\\'\\\\\\n\\x0C\\r]|\\\\[^&])\\'?)|(?:(?:0[Oo][0-7]+|0[Xx][\\dA-Fa-f]+|\\d+(?:\\.\\d+)?(?:[Ee][+\\-]?\\d+)?))|(?:(?:(?:--+(?:[^\\r\\n\\x0C]*)?)|(?:\\{-(?:[^-]|-+[^-\\}])*-\\})))|(?:(?:case|class|data|default|deriving|do|else|if|import|in|infix|infixl|infixr|instance|let|module|newtype|of|then|type|where|_)(?=[^a-zA-Z0-9\\']|$))|(?:(?:[A-Z][\\w\\']*\\.)*[a-zA-Z][\\w\\']*)|(?:[^\\t\\n\\x0B\\x0C\\r a-zA-Z0-9\\'\\\"]+)|(?:[\x00-\uffff])", 
  "g"], "^(?:(?:--+(?:[^\\r\\n\\x0C]*)?)|(?:\\{-(?:[^-]|-+[^-\\}])*-\\}))", "^(?:case|class|data|default|deriving|do|else|if|import|in|infix|infixl|infixr|instance|let|module|newtype|of|then|type|where|_)(?=[^a-zA-Z0-9\\']|$)", "^(?:[A-Z][\\w\\']*\\.)*[a-zA-Z][\\w\\']*", "^[^\\t\\n\\x0B\\x0C\\r a-zA-Z0-9\\'\\\"]+", ["^0x[\\da-f]+|\\d+", "i"], "^\\'[^\\'\\\\]*(?:\\\\[\\s\\S][^\\'\\\\]*)*(?:\\'|$)", '^\\"[^\\"\\\\]*(?:\\\\[\\s\\S][^\\"\\\\]*)*(?:\\"|$)', "^\\`[^\\`]*(?:\\`|$)", ["^[#$][a-z_][\\w.]*|#\\d+\\b|#![ \\S]+lasso9\\b", 
  "i"], ["(?:[\\t\\n\\r \\xA0]+)|(?:\\'[^\\'\\\\]*(?:\\\\[\\s\\S][^\\'\\\\]*)*(?:\\'|$))|(?:\\\"[^\\\"\\\\]*(?:\\\\[\\s\\S][^\\\"\\\\]*)*(?:\\\"|$))|(?:\\`[^\\`]*(?:\\`|$))|(?:0x[\\da-f]+|\\d+)|(?:[#$][a-z_][\\w.]*|#\\d+\\b|#![ \\S]+lasso9\\b)|(?:[[\\]]|<\\?(?:lasso(?:script)?|=)|\\?>|(?:no_square_brackets|noprocess)\\b)|(?:\\/\\/[^\\r\\n]*|\\/\\*[\\s\\S]*?\\*\\/)|(?:-(?!infinity)[a-z_][\\w.]*|\\.\\s*'[a-z_][\\w.]*'|\\.{3})|(?:\\d*\\.\\d+(?:e[-+]?\\d+)?|(?:infinity|NaN)\\b)|(?:::\\s*[a-z_][\\w.]*)|(?:(?:true|false|none|minimal|full|all|void|and|or|not|bw|nbw|ew|new|cn|ncn|lt|lte|gt|gte|eq|neq|rx|nrx|ft)\\b)|(?:(?:array|date|decimal|duration|integer|map|pair|string|tag|xml|null|boolean|bytes|keyword|list|locale|queue|set|stack|staticarray|local|var|variable|global|data|self|inherited|currentcapture|givenblock)\\b|\\.\\.?)|(?:(?:cache|database_names|database_schemanames|database_tablenames|define_tag|define_type|email_batch|encode_set|html_comment|handle|handle_error|header|if|inline|iterate|ljax_target|link|link_currentaction|link_currentgroup|link_currentrecord|link_detail|link_firstgroup|link_firstrecord|link_lastgroup|link_lastrecord|link_nextgroup|link_nextrecord|link_prevgroup|link_prevrecord|log|loop|namespace_using|output_none|portal|private|protect|records|referer|referrer|repeating|resultset|rows|search_args|search_arguments|select|sort_args|sort_arguments|thread_atomic|value_list|while|abort|case|else|fail_if|fail_ifnot|fail|if_empty|if_false|if_null|if_true|loop_abort|loop_continue|loop_count|params|params_up|return|return_value|run_children|soap_definetag|soap_lastrequest|soap_lastresponse|tag_name|ascending|average|by|define|descending|do|equals|frozen|group|handle_failure|import|in|into|join|let|match|max|min|on|order|parent|protected|provide|public|require|returnhome|skip|split_thread|sum|take|thread|to|trait|type|where|with|yield|yieldhome)\\b)|(?:[a-z_][\\w.]*(?:=\\s*(?=\\())?)|(?::=|[-+*\\/%=<>&|!?\\\\]+)|(?:[\x00-\uffff])", 
  "gi"], ["^[[\\]]|<\\?(?:lasso(?:script)?|=)|\\?>|(no_square_brackets|noprocess)\\b", "i"], "^\\/\\/[^\\r\\n]*|\\/\\*[\\s\\S]*?\\*\\/", ["^-(?!infinity)[a-z_][\\w.]*|\\.\\s*'[a-z_][\\w.]*'|\\.{3}", "i"], ["^\\d*\\.\\d+(?:e[-+]?\\d+)?|(infinity|NaN)\\b", "i"], ["^::\\s*[a-z_][\\w.]*", "i"], ["^(?:true|false|none|minimal|full|all|void|and|or|not|bw|nbw|ew|new|cn|ncn|lt|lte|gt|gte|eq|neq|rx|nrx|ft)\\b", "i"], ["^(?:array|date|decimal|duration|integer|map|pair|string|tag|xml|null|boolean|bytes|keyword|list|locale|queue|set|stack|staticarray|local|var|variable|global|data|self|inherited|currentcapture|givenblock)\\b|^\\.\\.?", 
  "i"], ["^(?:cache|database_names|database_schemanames|database_tablenames|define_tag|define_type|email_batch|encode_set|html_comment|handle|handle_error|header|if|inline|iterate|ljax_target|link|link_currentaction|link_currentgroup|link_currentrecord|link_detail|link_firstgroup|link_firstrecord|link_lastgroup|link_lastrecord|link_nextgroup|link_nextrecord|link_prevgroup|link_prevrecord|log|loop|namespace_using|output_none|portal|private|protect|records|referer|referrer|repeating|resultset|rows|search_args|search_arguments|select|sort_args|sort_arguments|thread_atomic|value_list|while|abort|case|else|fail_if|fail_ifnot|fail|if_empty|if_false|if_null|if_true|loop_abort|loop_continue|loop_count|params|params_up|return|return_value|run_children|soap_definetag|soap_lastrequest|soap_lastresponse|tag_name|ascending|average|by|define|descending|do|equals|frozen|group|handle_failure|import|in|into|join|let|match|max|min|on|order|parent|protected|provide|public|require|returnhome|skip|split_thread|sum|take|thread|to|trait|type|where|with|yield|yieldhome)\\b", 
  "i"], ["^[a-z_][\\w.]*(?:=\\s*(?=\\())?", "i"], "^:=|[-+*\\/%=<>&|!?\\\\]+", "^\\(+", "^\\)+", "^;[^\\r\\n]*", ['(?:\\(+)|(?:\\)+)|(?:;[^\\r\\n]*)|(?:[\\t\\n\\r \\xA0]+)|(?:\\"(?:[^\\"\\\\]|\\\\[\\s\\S])*(?:\\"|$))|(?:(?:block|c[ad]+r|catch|con[ds]|def(?:ine|un)|do|eq|eql|equal|equalp|eval-when|flet|format|go|if|labels|lambda|let|load-time-value|locally|macrolet|multiple-value-call|nil|progn|progv|quote|require|return-from|setq|symbol-macrolet|t|tagbody|the|throw|unwind)\\b)|(?:[+\\-]?(?:[#0][Xx][0-9A-Fa-f]+|\\d+\\/\\d+|(?:\\.\\d+|\\d+(?:\\.\\d*)?)(?:[D-Ed-e][+\\-]?\\d+)?))|(?:\\\'(?:-*(?:\\w|\\\\[\\x21-\\x7e])(?:[\\w-]*|\\\\[\\x21-\\x7e])[=!?]?)?)|(?:-*(?:[A-Z_a-z]|\\\\[!-~])(?:[\\w\\-]*|\\\\[!-~])[!=?]?)|(?:[^\\w\\t\\n\\r \\xA0()\\"\\\\\\\';]+)|(?:[\x00-\uffff])', 
  "g"], "^(?:block|c[ad]+r|catch|con[ds]|def(?:ine|un)|do|eq|eql|equal|equalp|eval-when|flet|format|go|if|labels|lambda|let|load-time-value|locally|macrolet|multiple-value-call|nil|progn|progv|quote|require|return-from|setq|symbol-macrolet|t|tagbody|the|throw|unwind)\\b", ["^[+\\-]?(?:[0#]x[0-9a-f]+|\\d+\\/\\d+|(?:\\.\\d+|\\d+(?:\\.\\d*)?)(?:[ed][+\\-]?\\d+)?)", "i"], "^\\'(?:-*(?:\\w|\\\\[\\x21-\\x7e])(?:[\\w-]*|\\\\[\\x21-\\x7e])[=!?]?)?", ["^-*(?:[a-z_]|\\\\[\\x21-\\x7e])(?:[\\w-]*|\\\\[\\x21-\\x7e])[=!?]?", 
  "i"], "^[^\\w\\t\\n\\r \\xA0()\\\"\\\\\\';]+", '^!?\\"(?:[^\\"\\\\]|\\\\[\\s\\S])*(?:\\"|$)', ['(?:[\\t\\n\\r \\xA0]+)|(?:!?\\"(?:[^\\"\\\\]|\\\\[\\s\\S])*(?:\\"|$))|(?:;[^\\r\\n]*)|(?:[%@!](?:[-a-zA-Z$._][-a-zA-Z$._0-9]*|\\d+))|(?:[A-Za-z_][0-9A-Za-z_]*)|(?:\\d+\\.\\d+)|(?:(?:\\d+|0[xX][a-fA-F0-9]+))|(?:[()\\[\\]{},=*<>:]|\\.\\.\\.$)|(?:[\x00-\uffff])', "g"], "^[%@!](?:[-a-zA-Z$._][-a-zA-Z$._0-9]*|\\d+)", "^[A-Za-z_][0-9A-Za-z_]*", "^\\d+\\.\\d+", "^(?:\\d+|0[xX][a-fA-F0-9]+)", "^[()\\[\\]{},=*<>:]|\\.\\.\\.$", 
  ["^#(?:if[\\t\\n\\r \\xA0]+(?:[a-z_$][\\w\\']*|``[^\\r\\n\\t`]*(?:``|$))|else|endif|light)", "i"], "^(?:\\\"(?:[^\\\"\\\\]|\\\\[\\s\\S])*(?:\\\"|$)|\\'(?:[^\\'\\\\]|\\\\[\\s\\S])(?:\\'|$))", ["(?:[\\t\\n\\r \\xA0]+)|(?:#(?:[Ii][Ff][\\x09-\\x0a\\x0d \u00a0]+(?:[$A-Z_a-z][\\w']*|``[^\\x09-\\x0a\\x0d`]*(?:``|$))|[Ee][Ll][Ss][Ee]|[Ee][Nn][Dd][Ii][Ff]|[Ll][Ii][Gg][Hh][Tt]))|(?:(?:\\\"(?:[^\\\"\\\\]|\\\\[\\s\\S])*(?:\\\"|$)|\\'(?:[^\\'\\\\]|\\\\[\\s\\S])(?:\\'|$)))|(?:(?:\\/\\/[^\\r\\n]*|\\(\\*[\\s\\S]*?\\*\\)))|(?:(?:abstract|and|as|assert|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|if|in|inherit|inline|interface|internal|lazy|let|match|member|module|mutable|namespace|new|null|of|open|or|override|private|public|rec|return|static|struct|then|to|true|try|type|upcast|use|val|void|when|while|with|yield|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|global|include|method|mixin|object|parallel|process|protected|pure|sealed|trait|virtual|volatile)\\b)|(?:[+\\-]?(?:0[Xx][\\dA-Fa-f]+|(?:(?:\\.\\d+|\\d+(?:\\.\\d*)?)(?:[Ee][+\\-]?\\d+)?)))|(?:(?:[A-Z_a-z][\\w']*[!#?]?|``[^\\x09-\\x0a\\x0d`]*(?:``|$)))|(?:[^\\t\\n\\r \\xA0\\\"\\'\\w]+)|(?:[\x00-\uffff])", 
  "g"], "^(?:\\/\\/[^\\r\\n]*|\\(\\*[\\s\\S]*?\\*\\))", "^(?:abstract|and|as|assert|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|if|in|inherit|inline|interface|internal|lazy|let|match|member|module|mutable|namespace|new|null|of|open|or|override|private|public|rec|return|static|struct|then|to|true|try|type|upcast|use|val|void|when|while|with|yield|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|global|include|method|mixin|object|parallel|process|protected|pure|sealed|trait|virtual|volatile)\\b", 
  ["^[+\\-]?(?:0x[\\da-f]+|(?:(?:\\.\\d+|\\d+(?:\\.\\d*)?)(?:e[+\\-]?\\d+)?))", "i"], ["^(?:[a-z_][\\w']*[!?#]?|``[^\\r\\n\\t`]*(?:``|$))", "i"], "^[^\\t\\n\\r \\xA0\\\"\\'\\w]+", "^%[^\\r\\n]*", ["(?:[\\t\\n\\r \\xA0]+)|(?:%[^\\r\\n]*)|(?:\\\\(?:cr|l?dots|R|tab)\\b)|(?:\\\\[a-zA-Z@]+)|(?:#(?:ifn?def|endif))|(?:\\\\[{}])|(?:[{}()\\[\\]]+)|(?:[\x00-\uffff])", "g"], "^\\\\(?:cr|l?dots|R|tab)\\b", "^\\\\[a-zA-Z@]+", "^#(?:ifn?def|endif)", "^\\\\[{}]", "^[{}()\\[\\]]+", "^[\\t\\n\\r \\xA0\\u2028\\u2029]+", 
  ['^(?:[\\"\\u201C\\u201D](?:[^\\"\\u201C\\u201D]|[\\"\\u201C\\u201D]{2})(?:[\\"\\u201C\\u201D]c|$)|[\\"\\u201C\\u201D](?:[^\\"\\u201C\\u201D]|[\\"\\u201C\\u201D]{2})*(?:[\\"\\u201C\\u201D]|$))', "i"], "^[\\'\\u2018\\u2019](?:_(?:\\r\\n?|[^\\r]?)|[^\\r\\n_\\u2028\\u2029])*", ['(?:[\\t\\n\\r \\xA0\\u2028\\u2029]+)|(?:(?:[\\"\\u201C\\u201D](?:[^\\"\\u201C\\u201D]|[\\"\\u201C\\u201D]{2})(?:[\\"\\u201C\\u201D]c|$)|[\\"\\u201C\\u201D](?:[^\\"\\u201C\\u201D]|[\\"\\u201C\\u201D]{2})*(?:[\\"\\u201C\\u201D]|$)))|(?:[\\\'\\u2018\\u2019](?:_(?:\\r\\n?|[^\\r]?)|[^\\r\\n_\\u2028\\u2029])*)|(?:(?:AddHandler|AddressOf|Alias|And|AndAlso|Ansi|As|Assembly|Auto|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|CBool|CByte|CChar|CDate|CDbl|CDec|Char|CInt|Class|CLng|CObj|Const|CShort|CSng|CStr|CType|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else|ElseIf|End|EndIf|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get|GetType|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|Let|Lib|Like|Long|Loop|Me|Mod|Module|MustInherit|MustOverride|MyBase|MyClass|Namespace|New|Next|Not|NotInheritable|NotOverridable|Object|On|Option|Optional|Or|OrElse|Overloads|Overridable|Overrides|ParamArray|Preserve|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|Select|Set|Shadows|Shared|Short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TypeOf|Unicode|Until|Variant|Wend|When|While|With|WithEvents|WriteOnly|Xor|EndIf|GoSub|Let|Variant|Wend)\\b)|(?:REM\\b[^\\r\\n\\u2028\\u2029]*)|(?:(?:True\\b|False\\b|Nothing\\b|\\d+(?:E[+\\-]?\\d+[FRD]?|[FRDSIL])?|(?:&H[0-9A-F]+|&O[0-7]+)[SIL]?|\\d*\\.\\d+(?:E[+\\-]?\\d+)?[FRD]?|#\\s+(?:\\d+[\\-\\/]\\d+[\\-\\/]\\d+(?:\\s+\\d+:\\d+(?::\\d+)?(?:\\s*(?:AM|PM))?)?|\\d+:\\d+(?::\\d+)?(?:\\s*(?:AM|PM))?)\\s+#))|(?:(?:(?:[a-z]|_\\w)\\w*(?:\\[[%&@!#]+\\])?|\\[(?:[a-z]|_\\w)\\w*\\]))|(?:[^\\w\\t\\n\\r \\"\\\'\\[\\]\\xA0\\u2018\\u2019\\u201C\\u201D\\u2028\\u2029]+)|(?:(?:\\[|\\]))|(?:[\x00-\uffff])', 
  "gi"], ["^(?:AddHandler|AddressOf|Alias|And|AndAlso|Ansi|As|Assembly|Auto|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|CBool|CByte|CChar|CDate|CDbl|CDec|Char|CInt|Class|CLng|CObj|Const|CShort|CSng|CStr|CType|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else|ElseIf|End|EndIf|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get|GetType|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|Let|Lib|Like|Long|Loop|Me|Mod|Module|MustInherit|MustOverride|MyBase|MyClass|Namespace|New|Next|Not|NotInheritable|NotOverridable|Object|On|Option|Optional|Or|OrElse|Overloads|Overridable|Overrides|ParamArray|Preserve|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|Select|Set|Shadows|Shared|Short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TypeOf|Unicode|Until|Variant|Wend|When|While|With|WithEvents|WriteOnly|Xor|EndIf|GoSub|Let|Variant|Wend)\\b", 
  "i"], ["^REM\\b[^\\r\\n\\u2028\\u2029]*", "i"], ["^(?:True\\b|False\\b|Nothing\\b|\\d+(?:E[+\\-]?\\d+[FRD]?|[FRDSIL])?|(?:&H[0-9A-F]+|&O[0-7]+)[SIL]?|\\d*\\.\\d+(?:E[+\\-]?\\d+)?[FRD]?|#\\s+(?:\\d+[\\-\\/]\\d+[\\-\\/]\\d+(?:\\s+\\d+:\\d+(?::\\d+)?(\\s*(?:AM|PM))?)?|\\d+:\\d+(?::\\d+)?(\\s*(?:AM|PM))?)\\s+#)", "i"], ["^(?:(?:[a-z]|_\\w)\\w*(?:\\[[%&@!#]+\\])?|\\[(?:[a-z]|_\\w)\\w*\\])", "i"], "^[^\\w\\t\\n\\r \\\"\\'\\[\\]\\xA0\\u2018\\u2019\\u201C\\u201D\\u2028\\u2029]+", "^(?:\\[|\\])", "^\\$[A-Za-z0-9_\\-]+", 
  "^(?:\\\"(?:[^\\\"\\\\\\{]|\\\\[\\s\\S])*(?:\\\"|$)|\\'(?:[^\\'\\\\\\{]|\\\\[\\s\\S])*(?:\\'|$))", ["(?:\\$[A-Za-z0-9_\\-]+)|(?:[\\s=][<>][\\s=])|(?:\\@[\\w-]+)|(?:<\\/?[A-Za-z](?:[\\w\\--.:]*\\w)?|\\/?>$)|(?:\\(:[\\s\\S]*?:\\))|(?:[\\/\\{\\};,\\[\\]\\(\\)]$)|(?:(?:\\\"(?:[^\\\"\\\\\\{]|\\\\[\\s\\S])*(?:\\\"|$)|\\'(?:[^\\'\\\\\\{]|\\\\[\\s\\S])*(?:\\'|$)))|(?:(?:xquery|where|version|variable|union|typeswitch|treat|to|then|text|stable|sortby|some|self|schema|satisfies|returns|return|ref|processing-instruction|preceding-sibling|preceding|precedes|parent|only|of|node|namespace|module|let|item|intersect|instance|in|import|if|function|for|follows|following-sibling|following|external|except|every|else|element|descending|descendant-or-self|descendant|define|default|declare|comment|child|cast|case|before|attribute|assert|ascending|as|ancestor-or-self|ancestor|after|eq|order|by|or|and|schema-element|document-node|node|at)\\b)|(?:(?:xs:yearMonthDuration|xs:unsignedLong|xs:time|xs:string|xs:short|xs:QName|xs:Name|xs:long|xs:integer|xs:int|xs:gYearMonth|xs:gYear|xs:gMonthDay|xs:gDay|xs:float|xs:duration|xs:double|xs:decimal|xs:dayTimeDuration|xs:dateTime|xs:date|xs:byte|xs:boolean|xs:anyURI|xf:yearMonthDuration)\\b)|(?:(?:xp:dereference|xinc:node-expand|xinc:link-references|xinc:link-expand|xhtml:restructure|xhtml:clean|xhtml:add-lists|xdmp:zip-manifest|xdmp:zip-get|xdmp:zip-create|xdmp:xquery-version|xdmp:word-convert|xdmp:with-namespaces|xdmp:version|xdmp:value|xdmp:user-roles|xdmp:user-last-login|xdmp:user|xdmp:url-encode|xdmp:url-decode|xdmp:uri-is-file|xdmp:uri-format|xdmp:uri-content-type|xdmp:unquote|xdmp:unpath|xdmp:triggers-database|xdmp:trace|xdmp:to-json|xdmp:tidy|xdmp:subbinary|xdmp:strftime|xdmp:spawn-in|xdmp:spawn|xdmp:sleep|xdmp:shutdown|xdmp:set-session-field|xdmp:set-response-encoding|xdmp:set-response-content-type|xdmp:set-response-code|xdmp:set-request-time-limit|xdmp:set|xdmp:servers|xdmp:server-status|xdmp:server-name|xdmp:server|xdmp:security-database|xdmp:security-assert|xdmp:schema-database|xdmp:save|xdmp:role-roles|xdmp:role|xdmp:rethrow|xdmp:restart|xdmp:request-timestamp|xdmp:request-status|xdmp:request-cancel|xdmp:request|xdmp:redirect-response|xdmp:random|xdmp:quote|xdmp:query-trace|xdmp:query-meters|xdmp:product-edition|xdmp:privilege-roles|xdmp:privilege|xdmp:pretty-print|xdmp:powerpoint-convert|xdmp:platform|xdmp:permission|xdmp:pdf-convert|xdmp:path|xdmp:octal-to-integer|xdmp:node-uri|xdmp:node-replace|xdmp:node-kind|xdmp:node-insert-child|xdmp:node-insert-before|xdmp:node-insert-after|xdmp:node-delete|xdmp:node-database|xdmp:mul64|xdmp:modules-root|xdmp:modules-database|xdmp:merging|xdmp:merge-cancel|xdmp:merge|xdmp:md5|xdmp:logout|xdmp:login|xdmp:log-level|xdmp:log|xdmp:lock-release|xdmp:lock-acquire|xdmp:load|xdmp:invoke-in|xdmp:invoke|xdmp:integer-to-octal|xdmp:integer-to-hex|xdmp:http-put|xdmp:http-post|xdmp:http-options|xdmp:http-head|xdmp:http-get|xdmp:http-delete|xdmp:hosts|xdmp:host-status|xdmp:host-name|xdmp:host|xdmp:hex-to-integer|xdmp:hash64|xdmp:hash32|xdmp:has-privilege|xdmp:groups|xdmp:group-serves|xdmp:group-servers|xdmp:group-name|xdmp:group-hosts|xdmp:group|xdmp:get-session-field-names|xdmp:get-session-field|xdmp:get-response-encoding|xdmp:get-response-code|xdmp:get-request-username|xdmp:get-request-user|xdmp:get-request-url|xdmp:get-request-protocol|xdmp:get-request-path|xdmp:get-request-method|xdmp:get-request-header-names|xdmp:get-request-header|xdmp:get-request-field-names|xdmp:get-request-field-filename|xdmp:get-request-field-content-type|xdmp:get-request-field|xdmp:get-request-client-certificate|xdmp:get-request-client-address|xdmp:get-request-body|xdmp:get-current-user|xdmp:get-current-roles|xdmp:get|xdmp:function-name|xdmp:function-module|xdmp:function|xdmp:from-json|xdmp:forests|xdmp:forest-status|xdmp:forest-restore|xdmp:forest-restart|xdmp:forest-name|xdmp:forest-delete|xdmp:forest-databases|xdmp:forest-counts|xdmp:forest-clear|xdmp:forest-backup|xdmp:forest|xdmp:filesystem-file|xdmp:filesystem-directory|xdmp:exists|xdmp:excel-convert|xdmp:eval-in|xdmp:eval|xdmp:estimate|xdmp:email|xdmp:element-content-type|xdmp:elapsed-time|xdmp:document-set-quality|xdmp:document-set-property|xdmp:document-set-properties|xdmp:document-set-permissions|xdmp:document-set-collections|xdmp:document-remove-properties|xdmp:document-remove-permissions|xdmp:document-remove-collections|xdmp:document-properties|xdmp:document-locks|xdmp:document-load|xdmp:document-insert|xdmp:document-get-quality|xdmp:document-get-properties|xdmp:document-get-permissions|xdmp:document-get-collections|xdmp:document-get|xdmp:document-forest|xdmp:document-delete|xdmp:document-add-properties|xdmp:document-add-permissions|xdmp:document-add-collections|xdmp:directory-properties|xdmp:directory-locks|xdmp:directory-delete|xdmp:directory-create|xdmp:directory|xdmp:diacritic-less|xdmp:describe|xdmp:default-permissions|xdmp:default-collections|xdmp:databases|xdmp:database-restore-validate|xdmp:database-restore-status|xdmp:database-restore-cancel|xdmp:database-restore|xdmp:database-name|xdmp:database-forests|xdmp:database-backup-validate|xdmp:database-backup-status|xdmp:database-backup-purge|xdmp:database-backup-cancel|xdmp:database-backup|xdmp:database|xdmp:collection-properties|xdmp:collection-locks|xdmp:collection-delete|xdmp:collation-canonical-uri|xdmp:castable-as|xdmp:can-grant-roles|xdmp:base64-encode|xdmp:base64-decode|xdmp:architecture|xdmp:apply|xdmp:amp-roles|xdmp:amp|xdmp:add64|xdmp:add-response-header|xdmp:access|trgr:trigger-set-recursive|trgr:trigger-set-permissions|trgr:trigger-set-name|trgr:trigger-set-module|trgr:trigger-set-event|trgr:trigger-set-description|trgr:trigger-remove-permissions|trgr:trigger-module|trgr:trigger-get-permissions|trgr:trigger-enable|trgr:trigger-disable|trgr:trigger-database-online-event|trgr:trigger-data-event|trgr:trigger-add-permissions|trgr:remove-trigger|trgr:property-content|trgr:pre-commit|trgr:post-commit|trgr:get-trigger-by-id|trgr:get-trigger|trgr:document-scope|trgr:document-content|trgr:directory-scope|trgr:create-trigger|trgr:collection-scope|trgr:any-property-content|thsr:set-entry|thsr:remove-term|thsr:remove-synonym|thsr:remove-entry|thsr:query-lookup|thsr:lookup|thsr:load|thsr:insert|thsr:expand|thsr:add-synonym|spell:suggest-detailed|spell:suggest|spell:remove-word|spell:make-dictionary|spell:load|spell:levenshtein-distance|spell:is-correct|spell:insert|spell:double-metaphone|spell:add-word|sec:users-collection|sec:user-set-roles|sec:user-set-password|sec:user-set-name|sec:user-set-description|sec:user-set-default-permissions|sec:user-set-default-collections|sec:user-remove-roles|sec:user-privileges|sec:user-get-roles|sec:user-get-description|sec:user-get-default-permissions|sec:user-get-default-collections|sec:user-doc-permissions|sec:user-doc-collections|sec:user-add-roles|sec:unprotect-collection|sec:uid-for-name|sec:set-realm|sec:security-version|sec:security-namespace|sec:security-installed|sec:security-collection|sec:roles-collection|sec:role-set-roles|sec:role-set-name|sec:role-set-description|sec:role-set-default-permissions|sec:role-set-default-collections|sec:role-remove-roles|sec:role-privileges|sec:role-get-roles|sec:role-get-description|sec:role-get-default-permissions|sec:role-get-default-collections|sec:role-doc-permissions|sec:role-doc-collections|sec:role-add-roles|sec:remove-user|sec:remove-role-from-users|sec:remove-role-from-role|sec:remove-role-from-privileges|sec:remove-role-from-amps|sec:remove-role|sec:remove-privilege|sec:remove-amp|sec:protect-collection|sec:privileges-collection|sec:privilege-set-roles|sec:privilege-set-name|sec:privilege-remove-roles|sec:privilege-get-roles|sec:privilege-add-roles|sec:priv-doc-permissions|sec:priv-doc-collections|sec:get-user-names|sec:get-unique-elem-id|sec:get-role-names|sec:get-role-ids|sec:get-privilege|sec:get-distinct-permissions|sec:get-collection|sec:get-amp|sec:create-user-with-role|sec:create-user|sec:create-role|sec:create-privilege|sec:create-amp|sec:collections-collection|sec:collection-set-permissions|sec:collection-remove-permissions|sec:collection-get-permissions|sec:collection-add-permissions|sec:check-admin|sec:amps-collection|sec:amp-set-roles|sec:amp-remove-roles|sec:amp-get-roles|sec:amp-doc-permissions|sec:amp-doc-collections|sec:amp-add-roles|search:unparse|search:suggest|search:snippet|search:search|search:resolve-nodes|search:resolve|search:remove-constraint|search:parse|search:get-default-options|search:estimate|search:check-options|prof:value|prof:reset|prof:report|prof:invoke|prof:eval|prof:enable|prof:disable|prof:allowed|ppt:clean|pki:template-set-request|pki:template-set-name|pki:template-set-key-type|pki:template-set-key-options|pki:template-set-description|pki:template-in-use|pki:template-get-version|pki:template-get-request|pki:template-get-name|pki:template-get-key-type|pki:template-get-key-options|pki:template-get-id|pki:template-get-description|pki:need-certificate|pki:is-temporary|pki:insert-trusted-certificates|pki:insert-template|pki:insert-signed-certificates|pki:insert-certificate-revocation-list|pki:get-trusted-certificate-ids|pki:get-template-ids|pki:get-template-certificate-authority|pki:get-template-by-name|pki:get-template|pki:get-pending-certificate-requests-xml|pki:get-pending-certificate-requests-pem|pki:get-pending-certificate-request|pki:get-certificates-for-template-xml|pki:get-certificates-for-template|pki:get-certificates|pki:get-certificate-xml|pki:get-certificate-pem|pki:get-certificate|pki:generate-temporary-certificate-if-necessary|pki:generate-temporary-certificate|pki:generate-template-certificate-authority|pki:generate-certificate-request|pki:delete-template|pki:delete-certificate|pki:create-template|pdf:make-toc|pdf:insert-toc-headers|pdf:get-toc|pdf:clean|p:status-transition|p:state-transition|p:remove|p:pipelines|p:insert|p:get-by-id|p:get|p:execute|p:create|p:condition|p:collection|p:action|ooxml:runs-merge|ooxml:package-uris|ooxml:package-parts-insert|ooxml:package-parts|msword:clean|mcgm:polygon|mcgm:point|mcgm:geospatial-query-from-elements|mcgm:geospatial-query|mcgm:circle|math:tanh|math:tan|math:sqrt|math:sinh|math:sin|math:pow|math:modf|math:log10|math:log|math:ldexp|math:frexp|math:fmod|math:floor|math:fabs|math:exp|math:cosh|math:cos|math:ceil|math:atan2|math:atan|math:asin|math:acos|map:put|map:map|map:keys|map:get|map:delete|map:count|map:clear|lnk:to|lnk:remove|lnk:insert|lnk:get|lnk:from|lnk:create|kml:polygon|kml:point|kml:interior-polygon|kml:geospatial-query-from-elements|kml:geospatial-query|kml:circle|kml:box|gml:polygon|gml:point|gml:interior-polygon|gml:geospatial-query-from-elements|gml:geospatial-query|gml:circle|gml:box|georss:point|georss:geospatial-query|georss:circle|geo:polygon|geo:point|geo:interior-polygon|geo:geospatial-query-from-elements|geo:geospatial-query|geo:circle|geo:box|fn:zero-or-one|fn:years-from-duration|fn:year-from-dateTime|fn:year-from-date|fn:upper-case|fn:unordered|fn:true|fn:translate|fn:trace|fn:tokenize|fn:timezone-from-time|fn:timezone-from-dateTime|fn:timezone-from-date|fn:sum|fn:subtract-dateTimes-yielding-yearMonthDuration|fn:subtract-dateTimes-yielding-dayTimeDuration|fn:substring-before|fn:substring-after|fn:substring|fn:subsequence|fn:string-to-codepoints|fn:string-pad|fn:string-length|fn:string-join|fn:string|fn:static-base-uri|fn:starts-with|fn:seconds-from-time|fn:seconds-from-duration|fn:seconds-from-dateTime|fn:round-half-to-even|fn:round|fn:root|fn:reverse|fn:resolve-uri|fn:resolve-QName|fn:replace|fn:remove|fn:QName|fn:prefix-from-QName|fn:position|fn:one-or-more|fn:number|fn:not|fn:normalize-unicode|fn:normalize-space|fn:node-name|fn:node-kind|fn:nilled|fn:namespace-uri-from-QName|fn:namespace-uri-for-prefix|fn:namespace-uri|fn:name|fn:months-from-duration|fn:month-from-dateTime|fn:month-from-date|fn:minutes-from-time|fn:minutes-from-duration|fn:minutes-from-dateTime|fn:min|fn:max|fn:matches|fn:lower-case|fn:local-name-from-QName|fn:local-name|fn:last|fn:lang|fn:iri-to-uri|fn:insert-before|fn:index-of|fn:in-scope-prefixes|fn:implicit-timezone|fn:idref|fn:id|fn:hours-from-time|fn:hours-from-duration|fn:hours-from-dateTime|fn:floor|fn:false|fn:expanded-QName|fn:exists|fn:exactly-one|fn:escape-uri|fn:escape-html-uri|fn:error|fn:ends-with|fn:encode-for-uri|fn:empty|fn:document-uri|fn:doc-available|fn:doc|fn:distinct-values|fn:distinct-nodes|fn:default-collation|fn:deep-equal|fn:days-from-duration|fn:day-from-dateTime|fn:day-from-date|fn:data|fn:current-time|fn:current-dateTime|fn:current-date|fn:count|fn:contains|fn:concat|fn:compare|fn:collection|fn:codepoints-to-string|fn:codepoint-equal|fn:ceiling|fn:boolean|fn:base-uri|fn:avg|fn:adjust-time-to-timezone|fn:adjust-dateTime-to-timezone|fn:adjust-date-to-timezone|fn:abs|feed:unsubscribe|feed:subscription|feed:subscribe|feed:request|feed:item|feed:description|excel:clean|entity:enrich|dom:set-pipelines|dom:set-permissions|dom:set-name|dom:set-evaluation-context|dom:set-domain-scope|dom:set-description|dom:remove-pipeline|dom:remove-permissions|dom:remove|dom:get|dom:evaluation-context|dom:domains|dom:domain-scope|dom:create|dom:configuration-set-restart-user|dom:configuration-set-permissions|dom:configuration-set-evaluation-context|dom:configuration-set-default-domain|dom:configuration-get|dom:configuration-create|dom:collection|dom:add-pipeline|dom:add-permissions|dls:retention-rules|dls:retention-rule-remove|dls:retention-rule-insert|dls:retention-rule|dls:purge|dls:node-expand|dls:link-references|dls:link-expand|dls:documents-query|dls:document-versions-query|dls:document-version-uri|dls:document-version-query|dls:document-version-delete|dls:document-version-as-of|dls:document-version|dls:document-update|dls:document-unmanage|dls:document-set-quality|dls:document-set-property|dls:document-set-properties|dls:document-set-permissions|dls:document-set-collections|dls:document-retention-rules|dls:document-remove-properties|dls:document-remove-permissions|dls:document-remove-collections|dls:document-purge|dls:document-manage|dls:document-is-managed|dls:document-insert-and-manage|dls:document-include-query|dls:document-history|dls:document-get-permissions|dls:document-extract-part|dls:document-delete|dls:document-checkout-status|dls:document-checkout|dls:document-checkin|dls:document-add-properties|dls:document-add-permissions|dls:document-add-collections|dls:break-checkout|dls:author-query|dls:as-of-query|dbk:convert|dbg:wait|dbg:value|dbg:stopped|dbg:stop|dbg:step|dbg:status|dbg:stack|dbg:out|dbg:next|dbg:line|dbg:invoke|dbg:function|dbg:finish|dbg:expr|dbg:eval|dbg:disconnect|dbg:detach|dbg:continue|dbg:connect|dbg:clear|dbg:breakpoints|dbg:break|dbg:attached|dbg:attach|cvt:save-converted-documents|cvt:part-uri|cvt:destination-uri|cvt:basepath|cvt:basename|cts:words|cts:word-query-weight|cts:word-query-text|cts:word-query-options|cts:word-query|cts:word-match|cts:walk|cts:uris|cts:uri-match|cts:train|cts:tokenize|cts:thresholds|cts:stem|cts:similar-query-weight|cts:similar-query-nodes|cts:similar-query|cts:shortest-distance|cts:search|cts:score|cts:reverse-query-weight|cts:reverse-query-nodes|cts:reverse-query|cts:remainder|cts:registered-query-weight|cts:registered-query-options|cts:registered-query-ids|cts:registered-query|cts:register|cts:query|cts:quality|cts:properties-query-query|cts:properties-query|cts:polygon-vertices|cts:polygon|cts:point-longitude|cts:point-latitude|cts:point|cts:or-query-queries|cts:or-query|cts:not-query-weight|cts:not-query-query|cts:not-query|cts:near-query-weight|cts:near-query-queries|cts:near-query-options|cts:near-query-distance|cts:near-query|cts:highlight|cts:geospatial-co-occurrences|cts:frequency|cts:fitness|cts:field-words|cts:field-word-query-weight|cts:field-word-query-text|cts:field-word-query-options|cts:field-word-query-field-name|cts:field-word-query|cts:field-word-match|cts:entity-highlight|cts:element-words|cts:element-word-query-weight|cts:element-word-query-text|cts:element-word-query-options|cts:element-word-query-element-name|cts:element-word-query|cts:element-word-match|cts:element-values|cts:element-value-ranges|cts:element-value-query-weight|cts:element-value-query-text|cts:element-value-query-options|cts:element-value-query-element-name|cts:element-value-query|cts:element-value-match|cts:element-value-geospatial-co-occurrences|cts:element-value-co-occurrences|cts:element-range-query-weight|cts:element-range-query-value|cts:element-range-query-options|cts:element-range-query-operator|cts:element-range-query-element-name|cts:element-range-query|cts:element-query-query|cts:element-query-element-name|cts:element-query|cts:element-pair-geospatial-values|cts:element-pair-geospatial-value-match|cts:element-pair-geospatial-query-weight|cts:element-pair-geospatial-query-region|cts:element-pair-geospatial-query-options|cts:element-pair-geospatial-query-longitude-name|cts:element-pair-geospatial-query-latitude-name|cts:element-pair-geospatial-query-element-name|cts:element-pair-geospatial-query|cts:element-pair-geospatial-boxes|cts:element-geospatial-values|cts:element-geospatial-value-match|cts:element-geospatial-query-weight|cts:element-geospatial-query-region|cts:element-geospatial-query-options|cts:element-geospatial-query-element-name|cts:element-geospatial-query|cts:element-geospatial-boxes|cts:element-child-geospatial-values|cts:element-child-geospatial-value-match|cts:element-child-geospatial-query-weight|cts:element-child-geospatial-query-region|cts:element-child-geospatial-query-options|cts:element-child-geospatial-query-element-name|cts:element-child-geospatial-query-child-name|cts:element-child-geospatial-query|cts:element-child-geospatial-boxes|cts:element-attribute-words|cts:element-attribute-word-query-weight|cts:element-attribute-word-query-text|cts:element-attribute-word-query-options|cts:element-attribute-word-query-element-name|cts:element-attribute-word-query-attribute-name|cts:element-attribute-word-query|cts:element-attribute-word-match|cts:element-attribute-values|cts:element-attribute-value-ranges|cts:element-attribute-value-query-weight|cts:element-attribute-value-query-text|cts:element-attribute-value-query-options|cts:element-attribute-value-query-element-name|cts:element-attribute-value-query-attribute-name|cts:element-attribute-value-query|cts:element-attribute-value-match|cts:element-attribute-value-geospatial-co-occurrences|cts:element-attribute-value-co-occurrences|cts:element-attribute-range-query-weight|cts:element-attribute-range-query-value|cts:element-attribute-range-query-options|cts:element-attribute-range-query-operator|cts:element-attribute-range-query-element-name|cts:element-attribute-range-query-attribute-name|cts:element-attribute-range-query|cts:element-attribute-pair-geospatial-values|cts:element-attribute-pair-geospatial-value-match|cts:element-attribute-pair-geospatial-query-weight|cts:element-attribute-pair-geospatial-query-region|cts:element-attribute-pair-geospatial-query-options|cts:element-attribute-pair-geospatial-query-longitude-name|cts:element-attribute-pair-geospatial-query-latitude-name|cts:element-attribute-pair-geospatial-query-element-name|cts:element-attribute-pair-geospatial-query|cts:element-attribute-pair-geospatial-boxes|cts:document-query-uris|cts:document-query|cts:distance|cts:directory-query-uris|cts:directory-query-depth|cts:directory-query|cts:destination|cts:deregister|cts:contains|cts:confidence|cts:collections|cts:collection-query-uris|cts:collection-query|cts:collection-match|cts:classify|cts:circle-radius|cts:circle-center|cts:circle|cts:box-west|cts:box-south|cts:box-north|cts:box-east|cts:box|cts:bearing|cts:arc-intersection|cts:and-query-queries|cts:and-query-options|cts:and-query|cts:and-not-query-positive-query|cts:and-not-query-negative-query|cts:and-not-query|css:get|css:convert|cpf:success|cpf:failure|cpf:document-set-state|cpf:document-set-processing-status|cpf:document-set-last-updated|cpf:document-set-error|cpf:document-get-state|cpf:document-get-processing-status|cpf:document-get-last-updated|cpf:document-get-error|cpf:check-transition|alert:spawn-matching-actions|alert:rule-user-id-query|alert:rule-set-user-id|alert:rule-set-query|alert:rule-set-options|alert:rule-set-name|alert:rule-set-description|alert:rule-set-action|alert:rule-remove|alert:rule-name-query|alert:rule-insert|alert:rule-id-query|alert:rule-get-user-id|alert:rule-get-query|alert:rule-get-options|alert:rule-get-name|alert:rule-get-id|alert:rule-get-description|alert:rule-get-action|alert:rule-action-query|alert:remove-triggers|alert:make-rule|alert:make-log-action|alert:make-config|alert:make-action|alert:invoke-matching-actions|alert:get-my-rules|alert:get-all-rules|alert:get-actions|alert:find-matching-rules|alert:create-triggers|alert:config-set-uri|alert:config-set-trigger-ids|alert:config-set-options|alert:config-set-name|alert:config-set-description|alert:config-set-cpf-domain-names|alert:config-set-cpf-domain-ids|alert:config-insert|alert:config-get-uri|alert:config-get-trigger-ids|alert:config-get-options|alert:config-get-name|alert:config-get-id|alert:config-get-description|alert:config-get-cpf-domain-names|alert:config-get-cpf-domain-ids|alert:config-get|alert:config-delete|alert:action-set-options|alert:action-set-name|alert:action-set-module-root|alert:action-set-module-db|alert:action-set-module|alert:action-set-description|alert:action-remove|alert:action-insert|alert:action-get-options|alert:action-get-name|alert:action-get-module-root|alert:action-get-module-db|alert:action-get-module|alert:action-get-description|zero-or-one|years-from-duration|year-from-dateTime|year-from-date|upper-case|unordered|true|translate|trace|tokenize|timezone-from-time|timezone-from-dateTime|timezone-from-date|sum|subtract-dateTimes-yielding-yearMonthDuration|subtract-dateTimes-yielding-dayTimeDuration|substring-before|substring-after|substring|subsequence|string-to-codepoints|string-pad|string-length|string-join|string|static-base-uri|starts-with|seconds-from-time|seconds-from-duration|seconds-from-dateTime|round-half-to-even|round|root|reverse|resolve-uri|resolve-QName|replace|remove|QName|prefix-from-QName|position|one-or-more|number|not|normalize-unicode|normalize-space|node-name|node-kind|nilled|namespace-uri-from-QName|namespace-uri-for-prefix|namespace-uri|name|months-from-duration|month-from-dateTime|month-from-date|minutes-from-time|minutes-from-duration|minutes-from-dateTime|min|max|matches|lower-case|local-name-from-QName|local-name|last|lang|iri-to-uri|insert-before|index-of|in-scope-prefixes|implicit-timezone|idref|id|hours-from-time|hours-from-duration|hours-from-dateTime|floor|false|expanded-QName|exists|exactly-one|escape-uri|escape-html-uri|error|ends-with|encode-for-uri|empty|document-uri|doc-available|doc|distinct-values|distinct-nodes|default-collation|deep-equal|days-from-duration|day-from-dateTime|day-from-date|data|current-time|current-dateTime|current-date|count|contains|concat|compare|collection|codepoints-to-string|codepoint-equal|ceiling|boolean|base-uri|avg|adjust-time-to-timezone|adjust-dateTime-to-timezone|adjust-date-to-timezone|abs)\\b)|(?:[A-Za-z0-9_\\-\\:]+)|(?:[\\t\\n\\r \\xA0]+)|(?:[\x00-\uffff])", 
  "g"], "^[\\s=][<>][\\s=]", "^\\@[\\w-]+", ["^<\\/?[a-z](?:[\\w.:-]*\\w)?|\\/?>$", "i"], "^\\(:[\\s\\S]*?:\\)", "^[\\/\\{\\};,\\[\\]\\(\\)]$", "^(?:xquery|where|version|variable|union|typeswitch|treat|to|then|text|stable|sortby|some|self|schema|satisfies|returns|return|ref|processing-instruction|preceding-sibling|preceding|precedes|parent|only|of|node|namespace|module|let|item|intersect|instance|in|import|if|function|for|follows|following-sibling|following|external|except|every|else|element|descending|descendant-or-self|descendant|define|default|declare|comment|child|cast|case|before|attribute|assert|ascending|as|ancestor-or-self|ancestor|after|eq|order|by|or|and|schema-element|document-node|node|at)\\b", 
  "^(?:xs:yearMonthDuration|xs:unsignedLong|xs:time|xs:string|xs:short|xs:QName|xs:Name|xs:long|xs:integer|xs:int|xs:gYearMonth|xs:gYear|xs:gMonthDay|xs:gDay|xs:float|xs:duration|xs:double|xs:decimal|xs:dayTimeDuration|xs:dateTime|xs:date|xs:byte|xs:boolean|xs:anyURI|xf:yearMonthDuration)\\b", "^(?:xp:dereference|xinc:node-expand|xinc:link-references|xinc:link-expand|xhtml:restructure|xhtml:clean|xhtml:add-lists|xdmp:zip-manifest|xdmp:zip-get|xdmp:zip-create|xdmp:xquery-version|xdmp:word-convert|xdmp:with-namespaces|xdmp:version|xdmp:value|xdmp:user-roles|xdmp:user-last-login|xdmp:user|xdmp:url-encode|xdmp:url-decode|xdmp:uri-is-file|xdmp:uri-format|xdmp:uri-content-type|xdmp:unquote|xdmp:unpath|xdmp:triggers-database|xdmp:trace|xdmp:to-json|xdmp:tidy|xdmp:subbinary|xdmp:strftime|xdmp:spawn-in|xdmp:spawn|xdmp:sleep|xdmp:shutdown|xdmp:set-session-field|xdmp:set-response-encoding|xdmp:set-response-content-type|xdmp:set-response-code|xdmp:set-request-time-limit|xdmp:set|xdmp:servers|xdmp:server-status|xdmp:server-name|xdmp:server|xdmp:security-database|xdmp:security-assert|xdmp:schema-database|xdmp:save|xdmp:role-roles|xdmp:role|xdmp:rethrow|xdmp:restart|xdmp:request-timestamp|xdmp:request-status|xdmp:request-cancel|xdmp:request|xdmp:redirect-response|xdmp:random|xdmp:quote|xdmp:query-trace|xdmp:query-meters|xdmp:product-edition|xdmp:privilege-roles|xdmp:privilege|xdmp:pretty-print|xdmp:powerpoint-convert|xdmp:platform|xdmp:permission|xdmp:pdf-convert|xdmp:path|xdmp:octal-to-integer|xdmp:node-uri|xdmp:node-replace|xdmp:node-kind|xdmp:node-insert-child|xdmp:node-insert-before|xdmp:node-insert-after|xdmp:node-delete|xdmp:node-database|xdmp:mul64|xdmp:modules-root|xdmp:modules-database|xdmp:merging|xdmp:merge-cancel|xdmp:merge|xdmp:md5|xdmp:logout|xdmp:login|xdmp:log-level|xdmp:log|xdmp:lock-release|xdmp:lock-acquire|xdmp:load|xdmp:invoke-in|xdmp:invoke|xdmp:integer-to-octal|xdmp:integer-to-hex|xdmp:http-put|xdmp:http-post|xdmp:http-options|xdmp:http-head|xdmp:http-get|xdmp:http-delete|xdmp:hosts|xdmp:host-status|xdmp:host-name|xdmp:host|xdmp:hex-to-integer|xdmp:hash64|xdmp:hash32|xdmp:has-privilege|xdmp:groups|xdmp:group-serves|xdmp:group-servers|xdmp:group-name|xdmp:group-hosts|xdmp:group|xdmp:get-session-field-names|xdmp:get-session-field|xdmp:get-response-encoding|xdmp:get-response-code|xdmp:get-request-username|xdmp:get-request-user|xdmp:get-request-url|xdmp:get-request-protocol|xdmp:get-request-path|xdmp:get-request-method|xdmp:get-request-header-names|xdmp:get-request-header|xdmp:get-request-field-names|xdmp:get-request-field-filename|xdmp:get-request-field-content-type|xdmp:get-request-field|xdmp:get-request-client-certificate|xdmp:get-request-client-address|xdmp:get-request-body|xdmp:get-current-user|xdmp:get-current-roles|xdmp:get|xdmp:function-name|xdmp:function-module|xdmp:function|xdmp:from-json|xdmp:forests|xdmp:forest-status|xdmp:forest-restore|xdmp:forest-restart|xdmp:forest-name|xdmp:forest-delete|xdmp:forest-databases|xdmp:forest-counts|xdmp:forest-clear|xdmp:forest-backup|xdmp:forest|xdmp:filesystem-file|xdmp:filesystem-directory|xdmp:exists|xdmp:excel-convert|xdmp:eval-in|xdmp:eval|xdmp:estimate|xdmp:email|xdmp:element-content-type|xdmp:elapsed-time|xdmp:document-set-quality|xdmp:document-set-property|xdmp:document-set-properties|xdmp:document-set-permissions|xdmp:document-set-collections|xdmp:document-remove-properties|xdmp:document-remove-permissions|xdmp:document-remove-collections|xdmp:document-properties|xdmp:document-locks|xdmp:document-load|xdmp:document-insert|xdmp:document-get-quality|xdmp:document-get-properties|xdmp:document-get-permissions|xdmp:document-get-collections|xdmp:document-get|xdmp:document-forest|xdmp:document-delete|xdmp:document-add-properties|xdmp:document-add-permissions|xdmp:document-add-collections|xdmp:directory-properties|xdmp:directory-locks|xdmp:directory-delete|xdmp:directory-create|xdmp:directory|xdmp:diacritic-less|xdmp:describe|xdmp:default-permissions|xdmp:default-collections|xdmp:databases|xdmp:database-restore-validate|xdmp:database-restore-status|xdmp:database-restore-cancel|xdmp:database-restore|xdmp:database-name|xdmp:database-forests|xdmp:database-backup-validate|xdmp:database-backup-status|xdmp:database-backup-purge|xdmp:database-backup-cancel|xdmp:database-backup|xdmp:database|xdmp:collection-properties|xdmp:collection-locks|xdmp:collection-delete|xdmp:collation-canonical-uri|xdmp:castable-as|xdmp:can-grant-roles|xdmp:base64-encode|xdmp:base64-decode|xdmp:architecture|xdmp:apply|xdmp:amp-roles|xdmp:amp|xdmp:add64|xdmp:add-response-header|xdmp:access|trgr:trigger-set-recursive|trgr:trigger-set-permissions|trgr:trigger-set-name|trgr:trigger-set-module|trgr:trigger-set-event|trgr:trigger-set-description|trgr:trigger-remove-permissions|trgr:trigger-module|trgr:trigger-get-permissions|trgr:trigger-enable|trgr:trigger-disable|trgr:trigger-database-online-event|trgr:trigger-data-event|trgr:trigger-add-permissions|trgr:remove-trigger|trgr:property-content|trgr:pre-commit|trgr:post-commit|trgr:get-trigger-by-id|trgr:get-trigger|trgr:document-scope|trgr:document-content|trgr:directory-scope|trgr:create-trigger|trgr:collection-scope|trgr:any-property-content|thsr:set-entry|thsr:remove-term|thsr:remove-synonym|thsr:remove-entry|thsr:query-lookup|thsr:lookup|thsr:load|thsr:insert|thsr:expand|thsr:add-synonym|spell:suggest-detailed|spell:suggest|spell:remove-word|spell:make-dictionary|spell:load|spell:levenshtein-distance|spell:is-correct|spell:insert|spell:double-metaphone|spell:add-word|sec:users-collection|sec:user-set-roles|sec:user-set-password|sec:user-set-name|sec:user-set-description|sec:user-set-default-permissions|sec:user-set-default-collections|sec:user-remove-roles|sec:user-privileges|sec:user-get-roles|sec:user-get-description|sec:user-get-default-permissions|sec:user-get-default-collections|sec:user-doc-permissions|sec:user-doc-collections|sec:user-add-roles|sec:unprotect-collection|sec:uid-for-name|sec:set-realm|sec:security-version|sec:security-namespace|sec:security-installed|sec:security-collection|sec:roles-collection|sec:role-set-roles|sec:role-set-name|sec:role-set-description|sec:role-set-default-permissions|sec:role-set-default-collections|sec:role-remove-roles|sec:role-privileges|sec:role-get-roles|sec:role-get-description|sec:role-get-default-permissions|sec:role-get-default-collections|sec:role-doc-permissions|sec:role-doc-collections|sec:role-add-roles|sec:remove-user|sec:remove-role-from-users|sec:remove-role-from-role|sec:remove-role-from-privileges|sec:remove-role-from-amps|sec:remove-role|sec:remove-privilege|sec:remove-amp|sec:protect-collection|sec:privileges-collection|sec:privilege-set-roles|sec:privilege-set-name|sec:privilege-remove-roles|sec:privilege-get-roles|sec:privilege-add-roles|sec:priv-doc-permissions|sec:priv-doc-collections|sec:get-user-names|sec:get-unique-elem-id|sec:get-role-names|sec:get-role-ids|sec:get-privilege|sec:get-distinct-permissions|sec:get-collection|sec:get-amp|sec:create-user-with-role|sec:create-user|sec:create-role|sec:create-privilege|sec:create-amp|sec:collections-collection|sec:collection-set-permissions|sec:collection-remove-permissions|sec:collection-get-permissions|sec:collection-add-permissions|sec:check-admin|sec:amps-collection|sec:amp-set-roles|sec:amp-remove-roles|sec:amp-get-roles|sec:amp-doc-permissions|sec:amp-doc-collections|sec:amp-add-roles|search:unparse|search:suggest|search:snippet|search:search|search:resolve-nodes|search:resolve|search:remove-constraint|search:parse|search:get-default-options|search:estimate|search:check-options|prof:value|prof:reset|prof:report|prof:invoke|prof:eval|prof:enable|prof:disable|prof:allowed|ppt:clean|pki:template-set-request|pki:template-set-name|pki:template-set-key-type|pki:template-set-key-options|pki:template-set-description|pki:template-in-use|pki:template-get-version|pki:template-get-request|pki:template-get-name|pki:template-get-key-type|pki:template-get-key-options|pki:template-get-id|pki:template-get-description|pki:need-certificate|pki:is-temporary|pki:insert-trusted-certificates|pki:insert-template|pki:insert-signed-certificates|pki:insert-certificate-revocation-list|pki:get-trusted-certificate-ids|pki:get-template-ids|pki:get-template-certificate-authority|pki:get-template-by-name|pki:get-template|pki:get-pending-certificate-requests-xml|pki:get-pending-certificate-requests-pem|pki:get-pending-certificate-request|pki:get-certificates-for-template-xml|pki:get-certificates-for-template|pki:get-certificates|pki:get-certificate-xml|pki:get-certificate-pem|pki:get-certificate|pki:generate-temporary-certificate-if-necessary|pki:generate-temporary-certificate|pki:generate-template-certificate-authority|pki:generate-certificate-request|pki:delete-template|pki:delete-certificate|pki:create-template|pdf:make-toc|pdf:insert-toc-headers|pdf:get-toc|pdf:clean|p:status-transition|p:state-transition|p:remove|p:pipelines|p:insert|p:get-by-id|p:get|p:execute|p:create|p:condition|p:collection|p:action|ooxml:runs-merge|ooxml:package-uris|ooxml:package-parts-insert|ooxml:package-parts|msword:clean|mcgm:polygon|mcgm:point|mcgm:geospatial-query-from-elements|mcgm:geospatial-query|mcgm:circle|math:tanh|math:tan|math:sqrt|math:sinh|math:sin|math:pow|math:modf|math:log10|math:log|math:ldexp|math:frexp|math:fmod|math:floor|math:fabs|math:exp|math:cosh|math:cos|math:ceil|math:atan2|math:atan|math:asin|math:acos|map:put|map:map|map:keys|map:get|map:delete|map:count|map:clear|lnk:to|lnk:remove|lnk:insert|lnk:get|lnk:from|lnk:create|kml:polygon|kml:point|kml:interior-polygon|kml:geospatial-query-from-elements|kml:geospatial-query|kml:circle|kml:box|gml:polygon|gml:point|gml:interior-polygon|gml:geospatial-query-from-elements|gml:geospatial-query|gml:circle|gml:box|georss:point|georss:geospatial-query|georss:circle|geo:polygon|geo:point|geo:interior-polygon|geo:geospatial-query-from-elements|geo:geospatial-query|geo:circle|geo:box|fn:zero-or-one|fn:years-from-duration|fn:year-from-dateTime|fn:year-from-date|fn:upper-case|fn:unordered|fn:true|fn:translate|fn:trace|fn:tokenize|fn:timezone-from-time|fn:timezone-from-dateTime|fn:timezone-from-date|fn:sum|fn:subtract-dateTimes-yielding-yearMonthDuration|fn:subtract-dateTimes-yielding-dayTimeDuration|fn:substring-before|fn:substring-after|fn:substring|fn:subsequence|fn:string-to-codepoints|fn:string-pad|fn:string-length|fn:string-join|fn:string|fn:static-base-uri|fn:starts-with|fn:seconds-from-time|fn:seconds-from-duration|fn:seconds-from-dateTime|fn:round-half-to-even|fn:round|fn:root|fn:reverse|fn:resolve-uri|fn:resolve-QName|fn:replace|fn:remove|fn:QName|fn:prefix-from-QName|fn:position|fn:one-or-more|fn:number|fn:not|fn:normalize-unicode|fn:normalize-space|fn:node-name|fn:node-kind|fn:nilled|fn:namespace-uri-from-QName|fn:namespace-uri-for-prefix|fn:namespace-uri|fn:name|fn:months-from-duration|fn:month-from-dateTime|fn:month-from-date|fn:minutes-from-time|fn:minutes-from-duration|fn:minutes-from-dateTime|fn:min|fn:max|fn:matches|fn:lower-case|fn:local-name-from-QName|fn:local-name|fn:last|fn:lang|fn:iri-to-uri|fn:insert-before|fn:index-of|fn:in-scope-prefixes|fn:implicit-timezone|fn:idref|fn:id|fn:hours-from-time|fn:hours-from-duration|fn:hours-from-dateTime|fn:floor|fn:false|fn:expanded-QName|fn:exists|fn:exactly-one|fn:escape-uri|fn:escape-html-uri|fn:error|fn:ends-with|fn:encode-for-uri|fn:empty|fn:document-uri|fn:doc-available|fn:doc|fn:distinct-values|fn:distinct-nodes|fn:default-collation|fn:deep-equal|fn:days-from-duration|fn:day-from-dateTime|fn:day-from-date|fn:data|fn:current-time|fn:current-dateTime|fn:current-date|fn:count|fn:contains|fn:concat|fn:compare|fn:collection|fn:codepoints-to-string|fn:codepoint-equal|fn:ceiling|fn:boolean|fn:base-uri|fn:avg|fn:adjust-time-to-timezone|fn:adjust-dateTime-to-timezone|fn:adjust-date-to-timezone|fn:abs|feed:unsubscribe|feed:subscription|feed:subscribe|feed:request|feed:item|feed:description|excel:clean|entity:enrich|dom:set-pipelines|dom:set-permissions|dom:set-name|dom:set-evaluation-context|dom:set-domain-scope|dom:set-description|dom:remove-pipeline|dom:remove-permissions|dom:remove|dom:get|dom:evaluation-context|dom:domains|dom:domain-scope|dom:create|dom:configuration-set-restart-user|dom:configuration-set-permissions|dom:configuration-set-evaluation-context|dom:configuration-set-default-domain|dom:configuration-get|dom:configuration-create|dom:collection|dom:add-pipeline|dom:add-permissions|dls:retention-rules|dls:retention-rule-remove|dls:retention-rule-insert|dls:retention-rule|dls:purge|dls:node-expand|dls:link-references|dls:link-expand|dls:documents-query|dls:document-versions-query|dls:document-version-uri|dls:document-version-query|dls:document-version-delete|dls:document-version-as-of|dls:document-version|dls:document-update|dls:document-unmanage|dls:document-set-quality|dls:document-set-property|dls:document-set-properties|dls:document-set-permissions|dls:document-set-collections|dls:document-retention-rules|dls:document-remove-properties|dls:document-remove-permissions|dls:document-remove-collections|dls:document-purge|dls:document-manage|dls:document-is-managed|dls:document-insert-and-manage|dls:document-include-query|dls:document-history|dls:document-get-permissions|dls:document-extract-part|dls:document-delete|dls:document-checkout-status|dls:document-checkout|dls:document-checkin|dls:document-add-properties|dls:document-add-permissions|dls:document-add-collections|dls:break-checkout|dls:author-query|dls:as-of-query|dbk:convert|dbg:wait|dbg:value|dbg:stopped|dbg:stop|dbg:step|dbg:status|dbg:stack|dbg:out|dbg:next|dbg:line|dbg:invoke|dbg:function|dbg:finish|dbg:expr|dbg:eval|dbg:disconnect|dbg:detach|dbg:continue|dbg:connect|dbg:clear|dbg:breakpoints|dbg:break|dbg:attached|dbg:attach|cvt:save-converted-documents|cvt:part-uri|cvt:destination-uri|cvt:basepath|cvt:basename|cts:words|cts:word-query-weight|cts:word-query-text|cts:word-query-options|cts:word-query|cts:word-match|cts:walk|cts:uris|cts:uri-match|cts:train|cts:tokenize|cts:thresholds|cts:stem|cts:similar-query-weight|cts:similar-query-nodes|cts:similar-query|cts:shortest-distance|cts:search|cts:score|cts:reverse-query-weight|cts:reverse-query-nodes|cts:reverse-query|cts:remainder|cts:registered-query-weight|cts:registered-query-options|cts:registered-query-ids|cts:registered-query|cts:register|cts:query|cts:quality|cts:properties-query-query|cts:properties-query|cts:polygon-vertices|cts:polygon|cts:point-longitude|cts:point-latitude|cts:point|cts:or-query-queries|cts:or-query|cts:not-query-weight|cts:not-query-query|cts:not-query|cts:near-query-weight|cts:near-query-queries|cts:near-query-options|cts:near-query-distance|cts:near-query|cts:highlight|cts:geospatial-co-occurrences|cts:frequency|cts:fitness|cts:field-words|cts:field-word-query-weight|cts:field-word-query-text|cts:field-word-query-options|cts:field-word-query-field-name|cts:field-word-query|cts:field-word-match|cts:entity-highlight|cts:element-words|cts:element-word-query-weight|cts:element-word-query-text|cts:element-word-query-options|cts:element-word-query-element-name|cts:element-word-query|cts:element-word-match|cts:element-values|cts:element-value-ranges|cts:element-value-query-weight|cts:element-value-query-text|cts:element-value-query-options|cts:element-value-query-element-name|cts:element-value-query|cts:element-value-match|cts:element-value-geospatial-co-occurrences|cts:element-value-co-occurrences|cts:element-range-query-weight|cts:element-range-query-value|cts:element-range-query-options|cts:element-range-query-operator|cts:element-range-query-element-name|cts:element-range-query|cts:element-query-query|cts:element-query-element-name|cts:element-query|cts:element-pair-geospatial-values|cts:element-pair-geospatial-value-match|cts:element-pair-geospatial-query-weight|cts:element-pair-geospatial-query-region|cts:element-pair-geospatial-query-options|cts:element-pair-geospatial-query-longitude-name|cts:element-pair-geospatial-query-latitude-name|cts:element-pair-geospatial-query-element-name|cts:element-pair-geospatial-query|cts:element-pair-geospatial-boxes|cts:element-geospatial-values|cts:element-geospatial-value-match|cts:element-geospatial-query-weight|cts:element-geospatial-query-region|cts:element-geospatial-query-options|cts:element-geospatial-query-element-name|cts:element-geospatial-query|cts:element-geospatial-boxes|cts:element-child-geospatial-values|cts:element-child-geospatial-value-match|cts:element-child-geospatial-query-weight|cts:element-child-geospatial-query-region|cts:element-child-geospatial-query-options|cts:element-child-geospatial-query-element-name|cts:element-child-geospatial-query-child-name|cts:element-child-geospatial-query|cts:element-child-geospatial-boxes|cts:element-attribute-words|cts:element-attribute-word-query-weight|cts:element-attribute-word-query-text|cts:element-attribute-word-query-options|cts:element-attribute-word-query-element-name|cts:element-attribute-word-query-attribute-name|cts:element-attribute-word-query|cts:element-attribute-word-match|cts:element-attribute-values|cts:element-attribute-value-ranges|cts:element-attribute-value-query-weight|cts:element-attribute-value-query-text|cts:element-attribute-value-query-options|cts:element-attribute-value-query-element-name|cts:element-attribute-value-query-attribute-name|cts:element-attribute-value-query|cts:element-attribute-value-match|cts:element-attribute-value-geospatial-co-occurrences|cts:element-attribute-value-co-occurrences|cts:element-attribute-range-query-weight|cts:element-attribute-range-query-value|cts:element-attribute-range-query-options|cts:element-attribute-range-query-operator|cts:element-attribute-range-query-element-name|cts:element-attribute-range-query-attribute-name|cts:element-attribute-range-query|cts:element-attribute-pair-geospatial-values|cts:element-attribute-pair-geospatial-value-match|cts:element-attribute-pair-geospatial-query-weight|cts:element-attribute-pair-geospatial-query-region|cts:element-attribute-pair-geospatial-query-options|cts:element-attribute-pair-geospatial-query-longitude-name|cts:element-attribute-pair-geospatial-query-latitude-name|cts:element-attribute-pair-geospatial-query-element-name|cts:element-attribute-pair-geospatial-query|cts:element-attribute-pair-geospatial-boxes|cts:document-query-uris|cts:document-query|cts:distance|cts:directory-query-uris|cts:directory-query-depth|cts:directory-query|cts:destination|cts:deregister|cts:contains|cts:confidence|cts:collections|cts:collection-query-uris|cts:collection-query|cts:collection-match|cts:classify|cts:circle-radius|cts:circle-center|cts:circle|cts:box-west|cts:box-south|cts:box-north|cts:box-east|cts:box|cts:bearing|cts:arc-intersection|cts:and-query-queries|cts:and-query-options|cts:and-query|cts:and-not-query-positive-query|cts:and-not-query-negative-query|cts:and-not-query|css:get|css:convert|cpf:success|cpf:failure|cpf:document-set-state|cpf:document-set-processing-status|cpf:document-set-last-updated|cpf:document-set-error|cpf:document-get-state|cpf:document-get-processing-status|cpf:document-get-last-updated|cpf:document-get-error|cpf:check-transition|alert:spawn-matching-actions|alert:rule-user-id-query|alert:rule-set-user-id|alert:rule-set-query|alert:rule-set-options|alert:rule-set-name|alert:rule-set-description|alert:rule-set-action|alert:rule-remove|alert:rule-name-query|alert:rule-insert|alert:rule-id-query|alert:rule-get-user-id|alert:rule-get-query|alert:rule-get-options|alert:rule-get-name|alert:rule-get-id|alert:rule-get-description|alert:rule-get-action|alert:rule-action-query|alert:remove-triggers|alert:make-rule|alert:make-log-action|alert:make-config|alert:make-action|alert:invoke-matching-actions|alert:get-my-rules|alert:get-all-rules|alert:get-actions|alert:find-matching-rules|alert:create-triggers|alert:config-set-uri|alert:config-set-trigger-ids|alert:config-set-options|alert:config-set-name|alert:config-set-description|alert:config-set-cpf-domain-names|alert:config-set-cpf-domain-ids|alert:config-insert|alert:config-get-uri|alert:config-get-trigger-ids|alert:config-get-options|alert:config-get-name|alert:config-get-id|alert:config-get-description|alert:config-get-cpf-domain-names|alert:config-get-cpf-domain-ids|alert:config-get|alert:config-delete|alert:action-set-options|alert:action-set-name|alert:action-set-module-root|alert:action-set-module-db|alert:action-set-module|alert:action-set-description|alert:action-remove|alert:action-insert|alert:action-get-options|alert:action-get-name|alert:action-get-module-root|alert:action-get-module-db|alert:action-get-module|alert:action-get-description|zero-or-one|years-from-duration|year-from-dateTime|year-from-date|upper-case|unordered|true|translate|trace|tokenize|timezone-from-time|timezone-from-dateTime|timezone-from-date|sum|subtract-dateTimes-yielding-yearMonthDuration|subtract-dateTimes-yielding-dayTimeDuration|substring-before|substring-after|substring|subsequence|string-to-codepoints|string-pad|string-length|string-join|string|static-base-uri|starts-with|seconds-from-time|seconds-from-duration|seconds-from-dateTime|round-half-to-even|round|root|reverse|resolve-uri|resolve-QName|replace|remove|QName|prefix-from-QName|position|one-or-more|number|not|normalize-unicode|normalize-space|node-name|node-kind|nilled|namespace-uri-from-QName|namespace-uri-for-prefix|namespace-uri|name|months-from-duration|month-from-dateTime|month-from-date|minutes-from-time|minutes-from-duration|minutes-from-dateTime|min|max|matches|lower-case|local-name-from-QName|local-name|last|lang|iri-to-uri|insert-before|index-of|in-scope-prefixes|implicit-timezone|idref|id|hours-from-time|hours-from-duration|hours-from-dateTime|floor|false|expanded-QName|exists|exactly-one|escape-uri|escape-html-uri|error|ends-with|encode-for-uri|empty|document-uri|doc-available|doc|distinct-values|distinct-nodes|default-collation|deep-equal|days-from-duration|day-from-dateTime|day-from-date|data|current-time|current-dateTime|current-date|count|contains|concat|compare|collection|codepoints-to-string|codepoint-equal|ceiling|boolean|base-uri|avg|adjust-time-to-timezone|adjust-dateTime-to-timezone|adjust-date-to-timezone|abs)\\b", 
  "^[A-Za-z0-9_\\-\\:]+", ["(?:[^<?]+)|(?:<!\\w[^>]*(?:>|$))|(?:<\\!--[\\s\\S]*?(?:-\\->|$))|(?:<\\?(?:[\\s\\S]+?)(?:\\?>|$))|(?:<%(?:[\\s\\S]+?)(?:%>|$))|(?:(?:<[%?]|[%?]>))|(?:<xmp\\b[^>]*>(?:[\\s\\S]+?)<\\/xmp\\b[^>]*>)|(?:<script\\b[^>]*>(?:[\\s\\S]*?)(?:<\\/script\\b[^>]*>))|(?:<style\\b[^>]*>(?:[\\s\\S]*?)(?:<\\/style\\b[^>]*>))|(?:(?:<\\/?[a-z][^<>]*>))|(?:[\x00-\uffff])", "gi"], "^[^<?]+", "^<!\\w[^>]*(?:>|$)", "^<\\!--[\\s\\S]*?(?:-\\->|$)", "^<\\?([\\s\\S]+?)(?:\\?>|$)", "^<%([\\s\\S]+?)(?:%>|$)", 
  "^(?:<[%?]|[%?]>)", ["^<xmp\\b[^>]*>([\\s\\S]+?)<\\/xmp\\b[^>]*>", "i"], ["^<script\\b[^>]*>([\\s\\S]*?)(<\\/script\\b[^>]*>)", "i"], ["^<style\\b[^>]*>([\\s\\S]*?)(<\\/style\\b[^>]*>)", "i"], ["^(<\\/?[a-z][^<>]*>)", "i"], ['(?:#[^\\r\\n]*)|(?:[\\t\\n\\r \\xA0]+)|(?:\\"(?:[^\\"\\\\]|\\\\[\\s\\S])*(?:\\"|$))|(?:(?:ADS|AD|AUG|BZF|BZMF|CAE|CAF|CA|CCS|COM|CS|DAS|DCA|DCOM|DCS|DDOUBL|DIM|DOUBLE|DTCB|DTCF|DV|DXCH|EDRUPT|EXTEND|INCR|INDEX|NDX|INHINT|LXCH|MASK|MSK|MP|MSU|NOOP|OVSK|QXCH|RAND|READ|RELINT|RESUME|RETURN|ROR|RXOR|SQUARE|SU|TCR|TCAA|OVSK|TCF|TC|TS|WAND|WOR|WRITE|XCH|XLQ|XXALQ|ZL|ZQ|ADD|ADZ|SUB|SUZ|MPY|MPR|MPZ|DVP|COM|ABS|CLA|CLZ|LDQ|STO|STQ|ALS|LLS|LRS|TRA|TSQ|TMI|TOV|AXT|TIX|DLY|INP|OUT)\\s)|(?:(?:-?GENADR|=MINUS|2BCADR|VN|BOF|MM|-?2CADR|-?[1-6]DNADR|ADRES|BBCON|[SE]?BANK\\=?|BLOCK|BNKSUM|E?CADR|COUNT\\*?|2?DEC\\*?|-?DNCHAN|-?DNPTR|EQUALS|ERASE|MEMORY|2?OCT|REMADR|SETLOC|SUBRO|ORG|BSS|BES|SYN|EQU|DEFINE|END)\\s)|(?:\\\'(?:-*(?:\\w|\\\\[\\x21-\\x7e])(?:[\\w-]*|\\\\[\\x21-\\x7e])[=!?]?)?)|(?:-*(?:[!-z]|\\\\[!-~])(?:[\\w\\-]*|\\\\[!-~])[!=?]?)|(?:[^\\w\\t\\n\\r \\xA0()\\"\\\\\\\';]+)|(?:[\x00-\uffff])', 
  "g"], "^(?:ADS|AD|AUG|BZF|BZMF|CAE|CAF|CA|CCS|COM|CS|DAS|DCA|DCOM|DCS|DDOUBL|DIM|DOUBLE|DTCB|DTCF|DV|DXCH|EDRUPT|EXTEND|INCR|INDEX|NDX|INHINT|LXCH|MASK|MSK|MP|MSU|NOOP|OVSK|QXCH|RAND|READ|RELINT|RESUME|RETURN|ROR|RXOR|SQUARE|SU|TCR|TCAA|OVSK|TCF|TC|TS|WAND|WOR|WRITE|XCH|XLQ|XXALQ|ZL|ZQ|ADD|ADZ|SUB|SUZ|MPY|MPR|MPZ|DVP|COM|ABS|CLA|CLZ|LDQ|STO|STQ|ALS|LLS|LRS|TRA|TSQ|TMI|TOV|AXT|TIX|DLY|INP|OUT)\\s", "^(?:-?GENADR|=MINUS|2BCADR|VN|BOF|MM|-?2CADR|-?[1-6]DNADR|ADRES|BBCON|[SE]?BANK\\=?|BLOCK|BNKSUM|E?CADR|COUNT\\*?|2?DEC\\*?|-?DNCHAN|-?DNPTR|EQUALS|ERASE|MEMORY|2?OCT|REMADR|SETLOC|SUBRO|ORG|BSS|BES|SYN|EQU|DEFINE|END)\\s", 
  ["^-*(?:[!-z_]|\\\\[\\x21-\\x7e])(?:[\\w-]*|\\\\[\\x21-\\x7e])[=!?]?", "i"], ["^(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+\\-]?\\d+)?", "i"], '^(?:"(?:[^\\\\"\\r\\n]|\\\\.)*(?:"|$))', ['(?:(?:"(?:[^\\\\"\\r\\n]|\\\\.)*(?:"|$)))|(?:\\s+)|(?:REM[^\\r\\n]*)|(?:\\b(?:AND|CLOSE|CLR|CMD|CONT|DATA|DEF ?FN|DIM|END|FOR|GET|GOSUB|GOTO|IF|INPUT|LET|LIST|LOAD|NEW|NEXT|NOT|ON|OPEN|OR|POKE|PRINT|READ|RESTORE|RETURN|RUN|SAVE|STEP|STOP|SYS|THEN|TO|VERIFY|WAIT)\\b)|(?:[A-Za-z][0-9A-Za-z]?(?:\\$|%)?)|(?:(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:[Ee][+\\-]?\\d+)?)|(?:.[^\\s\\w\\.$%"]*)|(?:[\x00-\uffff])', 
  "g"], "^REM[^\\r\\n]*", "^\\b(?:AND|CLOSE|CLR|CMD|CONT|DATA|DEF ?FN|DIM|END|FOR|GET|GOSUB|GOTO|IF|INPUT|LET|LIST|LOAD|NEW|NEXT|NOT|ON|OPEN|OR|POKE|PRINT|READ|RESTORE|RETURN|RUN|SAVE|STEP|STOP|SYS|THEN|TO|VERIFY|WAIT)\\b", ["^[A-Z][A-Z0-9]?(?:\\$|%)?", "i"], '^.[^\\s\\w\\.$%"]*', "^[\\(\\{\\[]+", "^[\\)\\}\\]]+", ['(?:[\\(\\{\\[]+)|(?:[\\)\\}\\]]+)|(?:;[^\\r\\n]*)|(?:[\\t\\n\\r \\xA0]+)|(?:\\"(?:[^\\"\\\\]|\\\\[\\s\\S])*(?:\\"|$))|(?:(?:def|if|do|let|quote|var|fn|loop|recur|throw|try|monitor-enter|monitor-exit|defmacro|defn|defn-|macroexpand|macroexpand-1|for|doseq|dosync|dotimes|and|or|when|not|assert|doto|proxy|defstruct|first|rest|cons|defprotocol|deftype|defrecord|reify|defmulti|defmethod|meta|with-meta|ns|in-ns|create-ns|import|intern|refer|alias|namespace|resolve|ref|deref|refset|new|set!|memfn|to-array|into-array|aset|gen-class|reduce|map|filter|find|nil?|empty?|hash-map|hash-set|vec|vector|seq|flatten|reverse|assoc|dissoc|list|list?|disj|get|union|difference|intersection|extend|extend-type|extend-protocol|prn)\\b)|(?::[0-9a-zA-Z\\-]+)|(?:[\x00-\uffff])', 
  "g"], "^(?:def|if|do|let|quote|var|fn|loop|recur|throw|try|monitor-enter|monitor-exit|defmacro|defn|defn-|macroexpand|macroexpand-1|for|doseq|dosync|dotimes|and|or|when|not|assert|doto|proxy|defstruct|first|rest|cons|defprotocol|deftype|defrecord|reify|defmulti|defmethod|meta|with-meta|ns|in-ns|create-ns|import|intern|refer|alias|namespace|resolve|ref|deref|refset|new|set!|memfn|to-array|into-array|aset|gen-class|reduce|map|filter|find|nil?|empty?|hash-map|hash-set|vec|vector|seq|flatten|reverse|assoc|dissoc|list|list?|disj|get|union|difference|intersection|extend|extend-type|extend-protocol|prn)\\b", 
  "^:[0-9a-zA-Z\\-]+", "^[ \\t\\r\\n\\f]+", ["(?:[ \\t\\r\\n\\f]+)|(?:\\\"(?:[^\\n\\r\\f\\\\\\\"]|\\\\(?:\\r\\n?|\\n|\\f)|\\\\[\\s\\S])*\\\")|(?:\\'(?:[^\\n\\r\\f\\\\\\']|\\\\(?:\\r\\n?|\\n|\\f)|\\\\[\\s\\S])*\\')|(?:url\\((?:[^\\)\\\"\\']+)\\))|(?:(?:url|rgb|\\!important|@import|@page|@media|@charset|inherit)(?=[^\\-\\w]|$))|(?:(?:-?(?:[_a-z]|(?:\\\\[0-9a-f]+ ?))(?:[_a-z0-9\\-]|\\\\(?:\\\\[0-9a-f]+ ?))*)\\s*:)|(?:\\/\\*[^*]*\\*+(?:[^\\/*][^*]*\\*+)*\\/)|(?:(?:\x3c!--|--\x3e))|(?:(?:\\d+|\\d*\\.\\d+)(?:%|[a-z]+)?)|(?:#(?:[0-9a-f]{3}){1,2}\\b)|(?:-?(?:[_a-z]|(?:\\\\[\\da-f]+ ?))(?:[_a-z\\d\\-]|\\\\(?:\\\\[\\da-f]+ ?))*)|(?:[^\\s\\w\\'\\\"]+)|(?:[\x00-\uffff])", 
  "gi"], '^\\"(?:[^\\n\\r\\f\\\\\\"]|\\\\(?:\\r\\n?|\\n|\\f)|\\\\[\\s\\S])*\\"', "^\\'(?:[^\\n\\r\\f\\\\\\']|\\\\(?:\\r\\n?|\\n|\\f)|\\\\[\\s\\S])*\\'", ["^url\\(([^\\)\\\"\\']+)\\)", "i"], ["^(?:url|rgb|\\!important|@import|@page|@media|@charset|inherit)(?=[^\\-\\w]|$)", "i"], ["^(-?(?:[_a-z]|(?:\\\\[0-9a-f]+ ?))(?:[_a-z0-9\\-]|\\\\(?:\\\\[0-9a-f]+ ?))*)\\s*:", "i"], "^\\/\\*[^*]*\\*+(?:[^\\/*][^*]*\\*+)*\\/", "^(?:\x3c!--|--\x3e)", ["^(?:\\d+|\\d*\\.\\d+)(?:%|[a-z]+)?", "i"], ["^#(?:[0-9a-f]{3}){1,2}\\b", 
  "i"], ["^-?(?:[_a-z]|(?:\\\\[\\da-f]+ ?))(?:[_a-z\\d\\-]|\\\\(?:\\\\[\\da-f]+ ?))*", "i"], "^[^\\s\\w\\'\\\"]+", "^\\'(?:[^\\'\\\\\\n\\x0C\\r]|\\\\[^&])+\\'?", "^\\?[^ \\t\\n({]+", ["(?:[\\t\\n\\x0B\\x0C\\r ]+)|(?:\\\"(?:[^\\\"\\\\\\n\\x0C\\r]|\\\\[\\s\\S])*(?:\\\"|$))|(?:[a-z][a-zA-Z0-9_]*)|(?:\\'(?:[^\\'\\\\\\n\\x0C\\r]|\\\\[^&])+\\'?)|(?:\\?[^ \\t\\n({]+)|(?:(?:0[Oo][0-7]+|0[Xx][\\dA-Fa-f]+|\\d+(?:\\.\\d+)?(?:[Ee][+\\-]?\\d+)?))|(?:%[^\\n]*)|(?:(?:module|attributes|do|let|in|letrec|apply|call|primop|case|of|end|when|fun|try|catch|receive|after|char|integer|float,atom,string,var)\\b)|(?:-[a-z_]+)|(?:[A-Z_][a-zA-Z0-9_]*)|(?:[.,;])|(?:[\x00-\uffff])", 
  "g"], "^%[^\\n]*", "^(?:module|attributes|do|let|in|letrec|apply|call|primop|case|of|end|when|fun|try|catch|receive|after|char|integer|float,atom,string,var)\\b", "^-[a-z_]+", "^[A-Z_][a-zA-Z0-9_]*", "^[.,;]", ["^(?:0'.|0b[0-1]+|0o[0-7]+|0x[\\da-f]+|\\d+(?:\\.\\d+)?(?:e[+\\-]?\\d+)?)", "i"], ["(?:\\\"(?:[^\\\"\\\\\\n\\x0C\\r]|\\\\[\\s\\S])*(?:\\\"|$))|(?:[a-z][a-zA-Z0-9_]*)|(?:\\'(?:[^\\'\\\\\\n\\x0C\\r]|\\\\[^&])+\\'?)|(?:(?:0'.|0[Bb][0-1]+|0[Oo][0-7]+|0[Xx][\\dA-Fa-f]+|\\d+(?:\\.\\d+)?(?:[Ee][+\\-]?\\d+)?))|(?:%[^\\r\\n]*)|(?:\\/\\*[\\s\\S]*?\\*\\/)|(?:\\s*:-\\s(?:c(?:a(?:lls|tegory)|oinductive)|p(?:ublic|r(?:ot(?:ocol|ected)|ivate))|e(?:l(?:if|se)|n(?:coding|sure_loaded)|xport)|i(?:f|n(?:clude|itialization|fo))|alias|d(?:ynamic|iscontiguous)|m(?:eta_(?:non_terminal|predicate)|od(?:e|ule)|ultifile)|reexport|s(?:et_(?:logtalk|prolog)_flag|ynchronized)|o(?:bject|p)|use(?:s|_module)))|(?:\\s*:-\\s(?:e(?:lse|nd(?:if|_(?:category|object|protocol)))|built_in|dynamic|synchronized|threaded))|(?:[A-Z_][a-zA-Z0-9_]*)|(?:[.,;{}:^<>=\\\\/+*?#!-])|(?:[\x00-\uffff])", 
  "g"], "^\\/\\*[\\s\\S]*?\\*\\/", "^\\s*:-\\s(c(a(lls|tegory)|oinductive)|p(ublic|r(ot(ocol|ected)|ivate))|e(l(if|se)|n(coding|sure_loaded)|xport)|i(f|n(clude|itialization|fo))|alias|d(ynamic|iscontiguous)|m(eta_(non_terminal|predicate)|od(e|ule)|ultifile)|reexport|s(et_(logtalk|prolog)_flag|ynchronized)|o(bject|p)|use(s|_module))", "^\\s*:-\\s(e(lse|nd(if|_(category|object|protocol)))|built_in|dynamic|synchronized|threaded)", "^[.,;{}:^<>=\\\\/+*?#!-]", "^(?:\\\"(?:[^\\\"\\\\]|\\\\[\\s\\S])*(?:\\\"|$)|\\'(?:[^\\'\\\\]|\\\\[\\s\\S])*(?:\\'|$))", 
  ["(?:[\\t\\n\\r \\xA0]+)|(?:(?:\\\"(?:[^\\\"\\\\]|\\\\[\\s\\S])*(?:\\\"|$)|\\'(?:[^\\'\\\\]|\\\\[\\s\\S])*(?:\\'|$)))|(?:--(?:\\[(=*)\\[[\\s\\S]*?(?:\\]\\1\\]|$)|[^\\r\\n]*))|(?:\\[(=*)\\[[\\s\\S]*?(?:\\]\\2\\]|$))|(?:(?:and|break|do|else|elseif|end|false|for|function|if|in|local|nil|not|or|repeat|return|then|true|until|while)\\b)|(?:[+\\-]?(?:0[Xx][\\dA-Fa-f]+|(?:(?:\\.\\d+|\\d+(?:\\.\\d*)?)(?:[Ee][+\\-]?\\d+)?)))|(?:[A-Z_a-z]\\w*)|(?:[^\\w\\t\\n\\r \\xA0][^\\w\\t\\n\\r \\xA0\\\"\\'\\-\\+=]*)|(?:[\x00-\uffff])", 
  "g"], "^--(?:\\[(=*)\\[[\\s\\S]*?(?:\\]\\1\\]|$)|[^\\r\\n]*)", "^\\[(=*)\\[[\\s\\S]*?(?:\\]\\1\\]|$)", "^(?:and|break|do|else|elseif|end|false|for|function|if|in|local|nil|not|or|repeat|return|then|true|until|while)\\b", ["^[+-]?(?:0x[\\da-f]+|(?:(?:\\.\\d+|\\d+(?:\\.\\d*)?)(?:e[+\\-]?\\d+)?))", "i"], ["^[a-z_]\\w*", "i"], "^[^\\w\\t\\n\\r \\xA0][^\\w\\t\\n\\r \\xA0\\\"\\'\\-\\+=]*", "^(?:\"(?:[^\\\"\\\\]|\\\\.)*\"|'(?:[^\\'\\\\]|\\\\.)*')", ["(?:[\\t\\n\\r \\xA0]+)|(?:(?:\"(?:[^\\\"\\\\]|\\\\.)*\"|'(?:[^\\'\\\\]|\\\\.)*'))|(?:(?:--[^\\r\\n]*|\\/\\*[\\s\\S]*?(?:\\*\\/|$)))|(?:(?:ADD|ALL|ALTER|AND|ANY|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BEGIN|BETWEEN|BREAK|BROWSE|BULK|BY|CASCADE|CASE|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COMMIT|COMPUTE|CONNECT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATABASE|DBCC|DEALLOCATE|DECLARE|DEFAULT|DELETE|DENY|DESC|DISK|DISTINCT|DISTRIBUTED|DOUBLE|DROP|DUMMY|DUMP|ELSE|END|ERRLVL|ESCAPE|EXCEPT|EXEC|EXECUTE|EXISTS|EXIT|FETCH|FILE|FILLFACTOR|FOLLOWING|FOR|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GOTO|GRANT|GROUP|HAVING|HOLDLOCK|IDENTITY|IDENTITYCOL|IDENTITY_INSERT|IF|IN|INDEX|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KILL|LEFT|LIKE|LINENO|LOAD|MATCH|MATCHED|MERGE|NATURAL|NATIONAL|NOCHECK|NONCLUSTERED|NOCYCLE|NOT|NULL|NULLIF|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|OPTION|OR|ORDER|OUTER|OVER|PARTITION|PERCENT|PIVOT|PLAN|PRECEDING|PRECISION|PRIMARY|PRINT|PROC|PROCEDURE|PUBLIC|RAISERROR|READ|READTEXT|RECONFIGURE|REFERENCES|REPLICATION|RESTORE|RESTRICT|RETURN|REVOKE|RIGHT|ROLLBACK|ROWCOUNT|ROWGUIDCOL|ROWS?|RULE|SAVE|SCHEMA|SELECT|SESSION_USER|SET|SETUSER|SHUTDOWN|SOME|START|STATISTICS|SYSTEM_USER|TABLE|TEXTSIZE|THEN|TO|TOP|TRAN|TRANSACTION|TRIGGER|TRUNCATE|TSEQUAL|UNBOUNDED|UNION|UNIQUE|UNPIVOT|UPDATE|UPDATETEXT|USE|USER|USING|VALUES|VARYING|VIEW|WAITFOR|WHEN|WHERE|WHILE|WITH|WITHIN|WRITETEXT|XML)(?=[^\\w-]|$))|(?:[+-]?(?:0x[\\da-f]+|(?:(?:\\.\\d+|\\d+(?:\\.\\d*)?)(?:e[+\\-]?\\d+)?)))|(?:[a-z_][\\w-]*)|(?:[^\\w\\t\\n\\r \\xA0\\\"\\'][^\\w\\t\\n\\r \\xA0+\\-\\\"\\']*)|(?:[\x00-\uffff])", 
  "gi"], "^(?:--[^\\r\\n]*|\\/\\*[\\s\\S]*?(?:\\*\\/|$))", ["^(?:ADD|ALL|ALTER|AND|ANY|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BEGIN|BETWEEN|BREAK|BROWSE|BULK|BY|CASCADE|CASE|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COMMIT|COMPUTE|CONNECT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATABASE|DBCC|DEALLOCATE|DECLARE|DEFAULT|DELETE|DENY|DESC|DISK|DISTINCT|DISTRIBUTED|DOUBLE|DROP|DUMMY|DUMP|ELSE|END|ERRLVL|ESCAPE|EXCEPT|EXEC|EXECUTE|EXISTS|EXIT|FETCH|FILE|FILLFACTOR|FOLLOWING|FOR|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GOTO|GRANT|GROUP|HAVING|HOLDLOCK|IDENTITY|IDENTITYCOL|IDENTITY_INSERT|IF|IN|INDEX|INNER|INSERT|INTERSECT|INTO|IS|JOIN|KEY|KILL|LEFT|LIKE|LINENO|LOAD|MATCH|MATCHED|MERGE|NATURAL|NATIONAL|NOCHECK|NONCLUSTERED|NOCYCLE|NOT|NULL|NULLIF|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPENXML|OPTION|OR|ORDER|OUTER|OVER|PARTITION|PERCENT|PIVOT|PLAN|PRECEDING|PRECISION|PRIMARY|PRINT|PROC|PROCEDURE|PUBLIC|RAISERROR|READ|READTEXT|RECONFIGURE|REFERENCES|REPLICATION|RESTORE|RESTRICT|RETURN|REVOKE|RIGHT|ROLLBACK|ROWCOUNT|ROWGUIDCOL|ROWS?|RULE|SAVE|SCHEMA|SELECT|SESSION_USER|SET|SETUSER|SHUTDOWN|SOME|START|STATISTICS|SYSTEM_USER|TABLE|TEXTSIZE|THEN|TO|TOP|TRAN|TRANSACTION|TRIGGER|TRUNCATE|TSEQUAL|UNBOUNDED|UNION|UNIQUE|UNPIVOT|UPDATE|UPDATETEXT|USE|USER|USING|VALUES|VARYING|VIEW|WAITFOR|WHEN|WHERE|WHILE|WITH|WITHIN|WRITETEXT|XML)(?=[^\\w-]|$)", 
  "i"], ["^[a-z_][\\w-]*", "i"], "^[^\\w\\t\\n\\r \\xA0\\\"\\'][^\\w\\t\\n\\r \\xA0+\\-\\\"\\']*", "^\\{+", "^\\}+", ['(?:\\{+)|(?:\\}+)|(?:#[^\\r\\n]*)|(?:[\\t\\n\\r \\xA0]+)|(?:\\"(?:[^\\"\\\\]|\\\\[\\s\\S])*(?:\\"|$))|(?:(?:after|append|apply|array|break|case|catch|continue|error|eval|exec|exit|expr|for|foreach|if|incr|info|proc|return|set|switch|trace|uplevel|upvar|while)\\b)|(?:[+\\-]?(?:[#0][Xx][0-9A-Fa-f]+|\\d+\\/\\d+|(?:\\.\\d+|\\d+(?:\\.\\d*)?)(?:[D-Ed-e][+\\-]?\\d+)?))|(?:\\\'(?:-*(?:\\w|\\\\[\\x21-\\x7e])(?:[\\w-]*|\\\\[\\x21-\\x7e])[=!?]?)?)|(?:-*(?:[A-Z_a-z]|\\\\[!-~])(?:[\\w\\-]*|\\\\[!-~])[!=?]?)|(?:[^\\w\\t\\n\\r \\xA0()\\"\\\\\\\';]+)|(?:[\x00-\uffff])', 
  "g"], "^(?:after|append|apply|array|break|case|catch|continue|error|eval|exec|exit|expr|for|foreach|if|incr|info|proc|return|set|switch|trace|uplevel|upvar|while)\\b", ["(?:[\\t\\n\\r \\xA0]+)|(?:%[^\\r\\n]*)|(?:\\\\[a-zA-Z@]+)|(?:\\\\.)|(?:[$&])|(?:[+\\-]?(?:\\.\\d+|\\d+(?:\\.\\d*)?)(?:[Cc][Mm]|[Ee][Mm]|[Ee][Xx]|[Ii][Nn]|[Pp][Cc]|[Pp][Tt]|[Bb][Pp]|[Mm][Mm]))|(?:[{}()\\[\\]=]+)|(?:[\x00-\uffff])", "g"], "^\\\\.", "^[$&]", ["[+-]?(?:\\.\\d+|\\d+(?:\\.\\d*)?)(cm|em|ex|in|pc|pt|bp|mm)", "i"], "^[{}()\\[\\]=]+", 
  ['(?:[\\t\\n\\r \\xA0]+)|(?:(?:[BOX]?"(?:[^\\"]|"")*"|\'.\'))|(?:--[^\\r\\n]*)|(?:(?:abs|access|after|alias|all|and|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|mod|nand|new|next|nor|not|null|of|on|open|or|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|rem|report|return|rol|ror|select|severity|shared|signal|sla|sll|sra|srl|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with|xnor|xor)(?=[^\\w-]|$))|(?:(?:bit|bit_vector|character|boolean|integer|real|time|string|severity_level|positive|natural|signed|unsigned|line|text|std_u?logic(?:_vector)?)(?=[^\\w-]|$))|(?:\\\'(?:ACTIVE|ASCENDING|BASE|DELAYED|DRIVING|DRIVING_VALUE|EVENT|HIGH|IMAGE|INSTANCE_NAME|LAST_ACTIVE|LAST_EVENT|LAST_VALUE|LEFT|LEFTOF|LENGTH|LOW|PATH_NAME|POS|PRED|QUIET|RANGE|REVERSE_RANGE|RIGHT|RIGHTOF|SIMPLE_NAME|STABLE|SUCC|TRANSACTION|VAL|VALUE)(?=[^\\w-]|$))|(?:\\d+(?:_\\d+)*(?:#[\\w\\\\.]+#(?:[+\\-]?\\d+(?:_\\d+)*)?|(?:\\.\\d+(?:_\\d+)*)?(?:E[+\\-]?\\d+(?:_\\d+)*)?))|(?:(?:[a-z]\\w*|\\\\[^\\\\]*\\\\))|(?:[^\\w\\t\\n\\r \\xA0\\"\\\'][^\\w\\t\\n\\r \\xA0\\-\\"\\\']*)|(?:[\x00-\uffff])', 
  "gi"], ['^(?:[BOX]?"(?:[^\\"]|"")*"|\'.\')', "i"], "^--[^\\r\\n]*", ["^(?:abs|access|after|alias|all|and|architecture|array|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|constant|disconnect|downto|else|elsif|end|entity|exit|file|for|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|mod|nand|new|next|nor|not|null|of|on|open|or|others|out|package|port|postponed|procedure|process|pure|range|record|register|reject|rem|report|return|rol|ror|select|severity|shared|signal|sla|sll|sra|srl|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with|xnor|xor)(?=[^\\w-]|$)", 
  "i"], ["^(?:bit|bit_vector|character|boolean|integer|real|time|string|severity_level|positive|natural|signed|unsigned|line|text|std_u?logic(?:_vector)?)(?=[^\\w-]|$)", "i"], ["^\\'(?:ACTIVE|ASCENDING|BASE|DELAYED|DRIVING|DRIVING_VALUE|EVENT|HIGH|IMAGE|INSTANCE_NAME|LAST_ACTIVE|LAST_EVENT|LAST_VALUE|LEFT|LEFTOF|LENGTH|LOW|PATH_NAME|POS|PRED|QUIET|RANGE|REVERSE_RANGE|RIGHT|RIGHTOF|SIMPLE_NAME|STABLE|SUCC|TRANSACTION|VAL|VALUE)(?=[^\\w-]|$)", "i"], ["^\\d+(?:_\\d+)*(?:#[\\w\\\\.]+#(?:[+\\-]?\\d+(?:_\\d+)*)?|(?:\\.\\d+(?:_\\d+)*)?(?:E[+\\-]?\\d+(?:_\\d+)*)?)", 
  "i"], ["^(?:[a-z]\\w*|\\\\[^\\\\]*\\\\)", "i"], "^[^\\w\\t\\n\\r \\xA0\\\"\\'][^\\w\\t\\n\\r \\xA0\\-\\\"\\']*", "^[:|>?]+", "^%(?:YAML|TAG)[^#\\r\\n]+", "^[&]\\S+", "^!\\S*", '^"(?:[^\\\\"]|\\\\.)*(?:"|$)', "^'(?:[^']|'')*(?:'|$)", ["(?:[:|>?]+)|(?:%(?:YAML|TAG)[^#\\r\\n]+)|(?:[&]\\S+)|(?:!\\S*)|(?:\"(?:[^\\\\\"]|\\\\.)*(?:\"|$))|(?:'(?:[^']|'')*(?:'|$))|(?:#[^\\r\\n]*)|(?:\\s+)|(?:(?:---|\\.\\.\\.)(?:[\\r\\n]|$))|(?:-)|(?:[\\w-]+:[ \\r\\n])|(?:\\w+)|(?:[\x00-\uffff])", "g"], "^(?:---|\\.\\.\\.)(?:[\\r\\n]|$)", 
  "^-", "^[\\w-]+:[ \\r\\n]", "^\\w+", ["(?:(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$)))|(?:\\s+)|(?:(?:null|true|false)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*)|(?:[\x00-\uffff])", "g"], "^(?:null|true|false)\\b", ["(?:(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$)))|(?:\\s+)|(?:\\/\\/[^\\r\\n]*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|assert|boolean|byte|extends|finally|final|implements|import|instanceof|interface|null|native|package|strictfp|super|synchronized|throws|transient)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*)|(?:[\x00-\uffff])", 
  "g"], "^(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|assert|boolean|byte|extends|finally|final|implements|import|instanceof|interface|null|native|package|strictfp|super|synchronized|throws|transient)\\b", ["(?:[\\t\\n\\r \\xA0]+)|(?:#!(?:.*))|(?:\\b(?:[Ii][Mm][Pp][Oo][Rr][Tt]|[Ll][Ii][Bb][Rr][Aa][Rr][Yy]|[Pp][Aa][Rr][Tt] [Oo][Ff]|[Pp][Aa][Rr][Tt]|[Aa][Ss]|[Ss][Hh][Oo][Ww]|[Hh][Ii][Dd][Ee])\\b)|(?:\\/\\/(?:.*))|(?:\\/\\*[^*]*\\*+(?:[^\\/*][^*]*\\*+)*\\/)|(?:\\b(?:[Cc][Ll][Aa][Ss][Ss]|[Ii][Nn][Tt][Ee][Rr][Ff][Aa][Cc][Ee])\\b)|(?:\\b(?:[Aa][Ss][Ss][Ee][Rr][Tt]|[Aa][Ss][Yy][Nn][Cc]|[Aa][Ww][Aa][Ii][Tt]|[Bb][Rr][Ee][Aa][Kk]|[Cc][Aa][Ss][Ee]|[Cc][Aa][Tt][Cc][Hh]|[Cc][Oo][Nn][Tt][Ii][Nn][Uu][Ee]|[Dd][Ee][Ff][Aa][Uu][Ll][Tt]|[Dd][Oo]|[Ee][Ll][Ss][Ee]|[Ff][Ii][Nn][Aa][Ll][Ll][Yy]|[Ff][Oo][Rr]|[Ii][Ff]|[Ii][Nn]|[Ii][Ss]|[Nn][Ee][Ww]|[Rr][Ee][Tt][Uu][Rr][Nn]|[Ss][Uu][Pp][Ee][Rr]|[Ss][Ww][Ii][Tt][Cc][Hh]|[Ss][Yy][Nn][Cc]|[Tt][Hh][Ii][Ss]|[Tt][Hh][Rr][Oo][Ww]|[Tt][Rr][Yy]|[Ww][Hh][Ii][Ll][Ee])\\b)|(?:\\b(?:[Aa][Bb][Ss][Tt][Rr][Aa][Cc][Tt]|[Cc][Oo][Nn][Ss][Tt]|[Ee][Xx][Tt][Ee][Nn][Dd][Ss]|[Ff][Aa][Cc][Tt][Oo][Rr][Yy]|[Ff][Ii][Nn][Aa][Ll]|[Gg][Ee][Tt]|[Ii][Mm][Pp][Ll][Ee][Mm][Ee][Nn][Tt][Ss]|[Nn][Aa][Tt][Ii][Vv][Ee]|[Oo][Pp][Ee][Rr][Aa][Tt][Oo][Rr]|[Ss][Ee][Tt]|[Ss][Tt][Aa][Tt][Ii][Cc]|[Tt][Yy][Pp][Ee][Dd][Ee][Ff]|[Vv][Aa][Rr])\\b)|(?:\\b(?:[Bb][Oo][Oo][Ll]|[Dd][Oo][Uu][Bb][Ll][Ee]|[Dd][Yy][Nn][Aa][Mm][Ii][Cc]|[Ii][Nn][Tt]|[Nn][Uu][Mm]|[Oo][Bb][Jj][Ee][Cc][Tt]|[Ss][Tt][Rr][Ii][Nn][Gg]|[Vv][Oo][Ii][Dd])\\b)|(?:\\b(?:[Ff][Aa][Ll][Ss][Ee]|[Nn][Uu][Ll][Ll]|[Tt][Rr][Uu][Ee])\\b)|(?:r?[\\']{3}[\\s|\\S]*?[^\\\\][\\']{3})|(?:r?[\\\"]{3}[\\s|\\S]*?[^\\\\][\\\"]{3})|(?:r?\\'(?:\\'|(?:[^\\n\\r\\f])*?[^\\\\]\\'))|(?:r?\\\"(?:\\\"|(?:[^\\n\\r\\f])*?[^\\\\]\\\"))|(?:[A-Z]\\w*)|(?:[$A-Z_a-z][0-9A-Z_a-z]*)|(?:[~!%^&*+=|?:<>/-])|(?:\\b0[Xx][0-9A-Fa-f]+)|(?:\\b\\d+(?:\\.\\d*)?(?:[Ee][+\\-]?\\d+)?)|(?:\\b\\.\\d+(?:[Ee][+\\-]?\\d+)?)|(?:[(){}\\[\\],.;])|(?:[\x00-\uffff])", 
  "g"], "^#!(?:.*)", ["^\\b(?:import|library|part of|part|as|show|hide)\\b", "i"], "^\\/\\/(?:.*)", ["^\\b(?:class|interface)\\b", "i"], ["^\\b(?:assert|async|await|break|case|catch|continue|default|do|else|finally|for|if|in|is|new|return|super|switch|sync|this|throw|try|while)\\b", "i"], ["^\\b(?:abstract|const|extends|factory|final|get|implements|native|operator|set|static|typedef|var)\\b", "i"], ["^\\b(?:bool|double|Dynamic|int|num|Object|String|void)\\b", "i"], ["^\\b(?:false|null|true)\\b", 
  "i"], "^r?[\\']{3}[\\s|\\S]*?[^\\\\][\\']{3}", '^r?[\\"]{3}[\\s|\\S]*?[^\\\\][\\"]{3}', "^r?\\'(\\'|(?:[^\\n\\r\\f])*?[^\\\\]\\')", '^r?\\"(\\"|(?:[^\\n\\r\\f])*?[^\\\\]\\")', ["^[a-z_$][a-z0-9_]*", "i"], "^[~!%^&*+=|?:<>/-]", ["^\\b0x[0-9a-f]+", "i"], ["^\\b\\d+(?:\\.\\d*)?(?:e[+-]?\\d+)?", "i"], ["^\\b\\.\\d+(?:e[+-]?\\d+)?", "i"], "^[(){}\\[\\],.;]", ['(?:[\\t\\n\\r \\xA0]+)|(?:\\/\\/.*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:b"(?:[^\\\\]|\\\\(?:.|x[\\da-fA-F]{2}))*?")|(?:"(?:[^\\\\]|\\\\(?:.|x[\\da-fA-F]{2}|u\\{\\[\\da-fA-F]{1,6}\\}))*?")|(?:b?r(#*)\\"[\\s\\S]*?\\"\\1)|(?:b\'(?:[^\\\\]|\\\\(?:.|x[\\da-fA-F]{2}))\')|(?:\'(?:[^\\\\]|\\\\(?:.|x[\\da-fA-F]{2}|u\\{[\\da-fA-F]{1,6}\\}))\')|(?:\'\\w+?\\b)|(?:(?:match|if|else|as|break|box|continue|extern|fn|for|in|if|impl|dyn|let|loop|pub|return|super|unsafe|where|while|use|mod|trait|struct|enum|type|move|mut|ref|static|const|crate)\\b)|(?:(?:alignof|become|do|offsetof|priv|pure|sizeof|typeof|unsized|yield|async|await|try|abstract|virtual|final|override|macro)\\b)|(?:(?:[iu](?:8|16|32|64|128|size)|char|bool|f32|f64|str|Self)\\b)|(?:(?:Copy|Send|Sized|Sync|Drop|Fn|FnMut|FnOnce|Box|ToOwned|Clone|PartialEq|PartialOrd|Eq|Ord|AsRef|AsMut|Into|From|Default|Iterator|Extend|IntoIterator|DoubleEndedIterator|ExactSizeIterator|Option|Some|None|Result|Ok|Err|SliceConcatExt|String|ToString|Vec)\\b)|(?:(?:self|true|false|null)\\b)|(?:\\d[0-9_]*(?:[iu](?:size|8|16|32|64|128))?)|(?:0x[a-fA-F0-9_]+(?:[iu](?:size|8|16|32|64|128))?)|(?:0o[0-7_]+(?:[iu](?:size|8|16|32|64|128))?)|(?:0b[01_]+(?:[iu](?:size|8|16|32|64|128))?)|(?:\\d[0-9_]*\\.(?![^\\s\\d.]))|(?:\\d[0-9_]*(?:\\.\\d[0-9_]*)(?:[eE][+-]?[0-9_]+)?(?:f32|f64)?)|(?:\\d[0-9_]*(?:\\.\\d[0-9_]*)?(?:[eE][+-]?[0-9_]+)(?:f32|f64)?)|(?:\\d[0-9_]*(?:\\.\\d[0-9_]*)?(?:[eE][+-]?[0-9_]+)?(?:f32|f64))|(?:[A-Z_a-z]\\w*!)|(?:[A-Z_a-z]\\w*)|(?:#!?\\[[\\s\\S]*?\\])|(?:[+\\-/*=^&|!<>%[\\](){}?:.,;])|(?:.)|(?:[\x00-\uffff])', 
  "g"], "^\\/\\/.*", '^b"(?:[^\\\\]|\\\\(?:.|x[\\da-fA-F]{2}))*?"', '^"(?:[^\\\\]|\\\\(?:.|x[\\da-fA-F]{2}|u\\{\\[\\da-fA-F]{1,6}\\}))*?"', '^b?r(#*)\\"[\\s\\S]*?\\"\\1', "^b'([^\\\\]|\\\\(.|x[\\da-fA-F]{2}))'", "^'([^\\\\]|\\\\(.|x[\\da-fA-F]{2}|u\\{[\\da-fA-F]{1,6}\\}))'", "^'\\w+?\\b", "^(?:match|if|else|as|break|box|continue|extern|fn|for|in|if|impl|dyn|let|loop|pub|return|super|unsafe|where|while|use|mod|trait|struct|enum|type|move|mut|ref|static|const|crate)\\b", "^(?:alignof|become|do|offsetof|priv|pure|sizeof|typeof|unsized|yield|async|await|try|abstract|virtual|final|override|macro)\\b", 
  "^(?:[iu](8|16|32|64|128|size)|char|bool|f32|f64|str|Self)\\b", "^(?:Copy|Send|Sized|Sync|Drop|Fn|FnMut|FnOnce|Box|ToOwned|Clone|PartialEq|PartialOrd|Eq|Ord|AsRef|AsMut|Into|From|Default|Iterator|Extend|IntoIterator|DoubleEndedIterator|ExactSizeIterator|Option|Some|None|Result|Ok|Err|SliceConcatExt|String|ToString|Vec)\\b", "^(self|true|false|null)\\b", "^\\d[0-9_]*(?:[iu](?:size|8|16|32|64|128))?", "^0x[a-fA-F0-9_]+(?:[iu](?:size|8|16|32|64|128))?", "^0o[0-7_]+(?:[iu](?:size|8|16|32|64|128))?", 
  "^0b[01_]+(?:[iu](?:size|8|16|32|64|128))?", "^\\d[0-9_]*\\.(?![^\\s\\d.])", "^\\d[0-9_]*(?:\\.\\d[0-9_]*)(?:[eE][+-]?[0-9_]+)?(?:f32|f64)?", "^\\d[0-9_]*(?:\\.\\d[0-9_]*)?(?:[eE][+-]?[0-9_]+)(?:f32|f64)?", "^\\d[0-9_]*(?:\\.\\d[0-9_]*)?(?:[eE][+-]?[0-9_]+)?(?:f32|f64)", ["^[a-z_]\\w*!", "i"], "^#!?\\[[\\s\\S]*?\\]", "^[+\\-/*=^&|!<>%[\\](){}?:.,;]", ".", "^[\\t \\xA0a-gi-z0-9]+", "^[=*~\\^\\[\\]]+", ["(?:[\\t \\xA0a-gi-z0-9]+)|(?:[=*~\\^\\[\\]]+)|(?:(?:^|\\r\\n?|\\n)(?:#[a-z]+)\\b)|(?:(?:[A-Z][a-z][a-z0-9]+[A-Z][a-z][a-zA-Z0-9]+)\\b)|(?:\\{\\{\\{(?:[\\s\\S]+?)\\}\\}\\})|(?:`(?:[^\\r\\n`]+)`)|(?:[Hh][Tt][Tt][Pp][Ss]?:\\/\\/[^\\s#/?]*(?:\\/[^\\s#?]*)?(?:\\?[^\\s#]*)?(?:#\\S*)?)|(?:(?:\\r\\n|[\\s\\S])[^#=*~^A-Zh\\{`\\[\\r\\n]*)|(?:[\x00-\uffff])", 
  "g"], "(?:^^|\\r\\n?|\\n)(#[a-z]+)\\b", "^(?:[A-Z][a-z][a-z0-9]+[A-Z][a-z][a-zA-Z0-9]+)\\b", "^\\{\\{\\{([\\s\\S]+?)\\}\\}\\}", "^`([^\\r\\n`]+)`", ["^https?:\\/\\/[^\\/?#\\s]*(?:\\/[^?#\\s]*)?(?:\\?[^#\\s]*)?(?:#\\S*)?", "i"], "^(?:\\r\\n|[\\s\\S])[^#=*~^A-Zh\\{`\\[\\r\\n]*", ["(?:[\\s\\S]+)|(?:[\x00-\uffff])", "g"], "^[\\s\\S]+", '^(?:"(?:[^"]|\\\\.)*")', ['(?:[\\t\\n\\r \\xA0]+)|(?:(?:"(?:[^"]|\\\\.)*"))|(?:;[^\\r\\n]*)|(?:(?:\\$(?:D|DEVICE|EC|ECODE|ES|ESTACK|ET|ETRAP|H|HOROLOG|I|IO|J|JOB|K|KEY|P|PRINCIPAL|Q|QUIT|ST|STACK|S|STORAGE|SY|SYSTEM|T|TEST|TL|TLEVEL|TR|TRESTART|X|Y|Z[A-Z]*|A|ASCII|C|CHAR|D|DATA|E|EXTRACT|F|FIND|FN|FNUMBER|G|GET|J|JUSTIFY|L|LENGTH|NA|NAME|O|ORDER|P|PIECE|QL|QLENGTH|QS|QSUBSCRIPT|Q|QUERY|R|RANDOM|RE|REVERSE|S|SELECT|ST|STACK|T|TEXT|TR|TRANSLATE|NaN))\\b)|(?:(?:[^\\$]B|BREAK|C|CLOSE|D|DO|E|ELSE|F|FOR|G|GOTO|H|HALT|H|HANG|I|IF|J|JOB|K|KILL|L|LOCK|M|MERGE|N|NEW|O|OPEN|Q|QUIT|R|READ|S|SET|TC|TCOMMIT|TRE|TRESTART|TRO|TROLLBACK|TS|TSTART|U|USE|V|VIEW|W|WRITE|X|XECUTE)\\b)|(?:[+-]?(?:(?:\\.\\d+|\\d+(?:\\.\\d*)?)(?:E[+\\-]?\\d+)?))|(?:[a-z][a-zA-Z0-9]*)|(?:[^\\w\\t\\n\\r\\xA0\\"\\$;%\\^]|_)|(?:[\x00-\uffff])', 
  "gi"], ["^(?:\\$(?:D|DEVICE|EC|ECODE|ES|ESTACK|ET|ETRAP|H|HOROLOG|I|IO|J|JOB|K|KEY|P|PRINCIPAL|Q|QUIT|ST|STACK|S|STORAGE|SY|SYSTEM|T|TEST|TL|TLEVEL|TR|TRESTART|X|Y|Z[A-Z]*|A|ASCII|C|CHAR|D|DATA|E|EXTRACT|F|FIND|FN|FNUMBER|G|GET|J|JUSTIFY|L|LENGTH|NA|NAME|O|ORDER|P|PIECE|QL|QLENGTH|QS|QSUBSCRIPT|Q|QUERY|R|RANDOM|RE|REVERSE|S|SELECT|ST|STACK|T|TEXT|TR|TRANSLATE|NaN))\\b", "i"], ["^(?:[^\\$]B|BREAK|C|CLOSE|D|DO|E|ELSE|F|FOR|G|GOTO|H|HALT|H|HANG|I|IF|J|JOB|K|KILL|L|LOCK|M|MERGE|N|NEW|O|OPEN|Q|QUIT|R|READ|S|SET|TC|TCOMMIT|TRE|TRESTART|TRO|TROLLBACK|TS|TSTART|U|USE|V|VIEW|W|WRITE|X|XECUTE)\\b", 
  "i"], ["^[+-]?(?:(?:\\.\\d+|\\d+(?:\\.\\d*)?)(?:E[+\\-]?\\d+)?)", "i"], ["^[a-z][a-zA-Z0-9]*", "i"], '^[^\\w\\t\\n\\r\\xA0\\"\\$;%\\^]|_', ["(?:(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$)))|(?:\\s+)|(?:\\/\\/[^\\r\\n]*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:(?:bool|(?:double|s?fixed|[su]?int)(?:32|64)|float|string)\\b)|(?:(?:bytes|default|double|enum|extend|extensions|false|group|import|max|message|option|optional|package|repeated|required|returns|rpc|service|syntax|to|true)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*)|(?:[\x00-\uffff])", 
  "g"], "^(bool|(double|s?fixed|[su]?int)(32|64)|float|string)\\b", "^(?:bytes|default|double|enum|extend|extensions|false|group|import|max|message|option|optional|package|repeated|required|returns|rpc|service|syntax|to|true)\\b", '^(?:"(?:(?:""(?:""?(?!")|[^\\\\"]|\\\\.)*"{0,3})|(?:[^"\\r\\n\\\\]|\\\\.)*"?))', "^`(?:[^\\r\\n\\\\`]|\\\\.)*`?", "^[!#%&()*+,\\-:;<=>?@\\[\\\\\\]^{|}~]+", ['(?:[\\t\\n\\r \\xA0]+)|(?:(?:"(?:(?:""(?:""?(?!")|[^\\\\"]|\\\\.)*"{0,3})|(?:[^"\\r\\n\\\\]|\\\\.)*"?)))|(?:`(?:[^\\r\\n\\\\`]|\\\\.)*`?)|(?:[!#%&()*+,\\-:;<=>?@\\[\\\\\\]^{|}~]+)|(?:\'(?:[^\\r\\n\\\\\']|\\\\(?:\'|[^\\r\\n\']+))\')|(?:\'[a-zA-Z_$][\\w$]*(?![\'$\\w]))|(?:(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|object|override|package|private|protected|requires|return|sealed|super|throw|trait|try|type|val|var|while|with|yield)\\b)|(?:(?:true|false|null|this)\\b)|(?:(?:(?:0(?:[0-7]+|[Xx][0-9A-Fa-f]+))[Ll]?|(?:(?:0|[1-9][0-9]*)(?:(?:\\.[0-9]+)?(?:[Ee][+\\-]?[0-9]+)?[Ff]?|[Ll]?))|\\\\.[0-9]+(?:[Ee][+\\-]?[0-9]+)?[Ff]?))|(?:[$_]*[A-Z][_$A-Z0-9]*[a-z][\\w$]*)|(?:[$a-zA-Z_][\\w$]*)|(?:\\/(?:\\/.*|\\*(?:\\/|\\**[^*/])*(?:\\*+\\/?)?))|(?:(?:\\.+|\\/))|(?:[\x00-\uffff])', 
  "g"], "^'(?:[^\\r\\n\\\\']|\\\\(?:'|[^\\r\\n']+))'", "^'[a-zA-Z_$][\\w$]*(?!['$\\w])", "^(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|object|override|package|private|protected|requires|return|sealed|super|throw|trait|try|type|val|var|while|with|yield)\\b", "^(?:true|false|null|this)\\b", ["^(?:(?:0(?:[0-7]+|X[0-9A-F]+))L?|(?:(?:0|[1-9][0-9]*)(?:(?:\\.[0-9]+)?(?:E[+\\-]?[0-9]+)?F?|L?))|\\\\.[0-9]+(?:E[+\\-]?[0-9]+)?F?)", "i"], "^[$_]*[A-Z][_$A-Z0-9]*[a-z][\\w$]*", 
  "^[$a-zA-Z_][\\w$]*", "^\\/(?:\\/.*|\\*(?:\\/|\\**[^*/])*(?:\\*+\\/?)?)", "^(?:\\.+|\\/)", "^[ \\n\\r\\t\\v\\f\\0]+", '^"(?:[^"\\\\]|(?:\\\\.)|(?:\\\\\\((?:[^"\\\\)]|\\\\.)*\\)))*"', ['(?:[ \\n\\r\\t\\v\\f\\0]+)|(?:"(?:[^"\\\\]|(?:\\\\.)|(?:\\\\\\((?:[^"\\\\)]|\\\\.)*\\)))*")|(?:(?:(?:0x[\\da-fA-F][\\da-fA-F_]*\\.[\\da-fA-F][\\da-fA-F_]*[pP]?)|(?:\\d[\\d_]*\\.\\d[\\d_]*[eE]?))[+-]?\\d[\\d_]*)|(?:-?(?:(?:0(?:(?:b[01][01_]*)|(?:o[0-7][0-7_]*)|(?:x[\\da-fA-F][\\da-fA-F_]*)))|(?:\\d[\\d_]*)))|(?:(?:_|Any|true|false|nil)\\b)|(?:\\b(?:__COLUMN__|__FILE__|__FUNCTION__|__LINE__|#available|#colorLiteral|#column|#else|#elseif|#endif|#file|#fileLiteral|#function|#if|#imageLiteral|#line|#selector|#sourceLocation|arch|arm|arm64|associatedtype|associativity|as|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|dynamicType|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|import|indirect|infix|init|inout|internal|i386|if|in|iOS|iOSApplicationExtension|is|lazy|left|let|mutating|none|nonmutating|open|operator|optional|OSX|OSXApplicationExtension|override|postfix|precedence|prefix|private|protocol|Protocol|public|repeat|required|rethrows|return|right|safe|Self|self|set|static|struct|subscript|super|switch|throw|throws|try|Type|typealias|unowned|unsafe|var|weak|watchOS|where|while|willSet|x86_64)\\b)|(?:\\/\\/.*?[\\n\\r])|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:<<=|<=|<<|>>=|>=|>>|===|==|\\.\\.\\.|&&=|\\.\\.<|!==|!=|&=|~=|~|\\(|\\)|\\[|\\]|{|}|@|#|;|\\.|,|:|\\|\\|=|\\?\\?|\\|\\||&&|&\\*|&\\+|&-|&=|\\+=|-=|\\/=|\\*=|\\^=|%=|\\|=|->|`|==|\\+\\+|--|\\/|\\+|!|\\*|%|<|>|&|\\||\\^|\\?|=|-|_)|(?:\\b(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[\x00-\uffff])', 
  "g"], "^(?:(?:0x[\\da-fA-F][\\da-fA-F_]*\\.[\\da-fA-F][\\da-fA-F_]*[pP]?)|(?:\\d[\\d_]*\\.\\d[\\d_]*[eE]?))[+-]?\\d[\\d_]*", "^-?(?:(?:0(?:(?:b[01][01_]*)|(?:o[0-7][0-7_]*)|(?:x[\\da-fA-F][\\da-fA-F_]*)))|(?:\\d[\\d_]*))", "^(?:_|Any|true|false|nil)\\b", "^\\b(?:__COLUMN__|__FILE__|__FUNCTION__|__LINE__|#available|#colorLiteral|#column|#else|#elseif|#endif|#file|#fileLiteral|#function|#if|#imageLiteral|#line|#selector|#sourceLocation|arch|arm|arm64|associatedtype|associativity|as|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic|dynamicType|else|enum|extension|fallthrough|fileprivate|final|for|func|get|guard|import|indirect|infix|init|inout|internal|i386|if|in|iOS|iOSApplicationExtension|is|lazy|left|let|mutating|none|nonmutating|open|operator|optional|OSX|OSXApplicationExtension|override|postfix|precedence|prefix|private|protocol|Protocol|public|repeat|required|rethrows|return|right|safe|Self|self|set|static|struct|subscript|super|switch|throw|throws|try|Type|typealias|unowned|unsafe|var|weak|watchOS|where|while|willSet|x86_64)\\b", 
  "^\\/\\/.*?[\\n\\r]", "^<<=|<=|<<|>>=|>=|>>|===|==|\\.\\.\\.|&&=|\\.\\.<|!==|!=|&=|~=|~|\\(|\\)|\\[|\\]|{|}|@|#|;|\\.|,|:|\\|\\|=|\\?\\?|\\|\\||&&|&\\*|&\\+|&-|&=|\\+=|-=|\\/=|\\*=|\\^=|%=|\\|=|->|`|==|\\+\\+|--|\\/|\\+|!|\\*|%|<|>|&|\\||\\^|\\?|=|-|_", "^\\b(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b)", "^[\\s]+", "^(?:\\\"[^\\\"]*\\\"?|\\'[^\\']*\\'?)", ["(?:[\\s]+)|(?:(?:\\\"[^\\\"]*\\\"?|\\'[^\\']*\\'?))|(?:^<\\/?[a-z](?:[\\w.:-]*\\w)?|\\/?>$)|(?:(?!style[\\s=]|on)[a-z](?:[\\w:-]*\\w)?)|(?:=\\s*(?:[^>\\'\\\"\\s]*(?:[^>\\'\\\"\\s\\/]|\\/(?=\\s))))|(?:[=<>\\/]+)|(?:on\\w+\\s*=\\s*\\\"(?:[^\\\"]+)\\\")|(?:on\\w+\\s*=\\s*\\'(?:[^\\']+)\\')|(?:on\\w+\\s*=\\s*(?:[^\\\"\\'>\\s]+))|(?:style\\s*=\\s*\\\"(?:[^\\\"]+)\\\")|(?:style\\s*=\\s*\\'(?:[^\\']+)\\')|(?:style\\s*=\\s*(?:[^\\\"\\'>\\s]+))|(?:[\x00-\uffff])", 
  "gi"], ["^^<\\/?[a-z](?:[\\w.:-]*\\w)?|\\/?>$", "i"], ["^(?!style[\\s=]|on)[a-z](?:[\\w:-]*\\w)?", "i"], "^=\\s*([^>\\'\\\"\\s]*(?:[^>\\'\\\"\\s\\/]|\\/(?=\\s)))", "^[=<>\\/]+", ['^on\\w+\\s*=\\s*\\"([^\\"]+)\\"', "i"], ["^on\\w+\\s*=\\s*\\'([^\\']+)\\'", "i"], ["^on\\w+\\s*=\\s*([^\\\"\\'>\\s]+)", "i"], ['^style\\s*=\\s*\\"([^\\"]+)\\"', "i"], ["^style\\s*=\\s*\\'([^\\']+)\\'", "i"], ["^style\\s*=\\s*([^\\\"\\'>\\s]+)", "i"], "^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)", ["(?:(?:\\'\\'\\'(?:[^\\'\\\\]|\\\\[\\s\\S]|\\'{1,2}(?=[^\\']))*(?:\\'\\'\\'|$)|\\\"\\\"\\\"(?:[^\\\"\\\\]|\\\\[\\s\\S]|\\\"{1,2}(?=[^\\\"]))*(?:\\\"\\\"\\\"|$)|\\'(?:[^\\\\\\']|\\\\[\\s\\S])*(?:\\'|$)|\\\"(?:[^\\\\\\\"]|\\\\[\\s\\S])*(?:\\\"|$)))|(?:#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*))|(?:\\s+)|(?:<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h(?:h|pp|\\+\\+)?|[a-z]\\w*)>)|(?:\\/\\/[^\\r\\n]*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:(?:^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(?:\\/(?=[^/*\\n\\r])(?:[^/\\x5B\\x5C\\n\\r]|\\x5C[\\S\\s]|\\x5B(?:[^\\x5C\\x5D\\n\\r]|\\x5C[\\S\\s])*(?:\\x5D|$))+\\/))|(?:(?:all|and|by|catch|class|else|extends|false|finally|for|if|in|is|isnt|loop|new|no|not|null|of|off|on|or|return|super|then|throw|true|try|unless|until|when|while|yes)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*(?!s*\\/))|(?:[\x00-\uffff])", 
  "g"], "^(?:all|and|by|catch|class|else|extends|false|finally|for|if|in|is|isnt|loop|new|no|not|null|of|off|on|or|return|super|then|throw|true|try|unless|until|when|while|yes)\\b", ["(?:-?(?:[_a-z]|(?:\\\\[\\da-f]+ ?))(?:[_a-z\\d\\-]|\\\\(?:\\\\[\\da-f]+ ?))*)|(?:[\x00-\uffff])", "gi"], "^[.!%&()*+,\\-;<=>?\\[\\\\\\]^{|}:]+", ['(?:[\\t\\n\\r \\xA0]+)|(?:[.!%&()*+,\\-;<=>?\\[\\\\\\]^{|}:]+)|(?:\\b(?:package|public|protected|private|open|abstract|constructor|final|override|import|for|while|as|typealias|get|set|(?:(?:data|enum|annotation|sealed) )?class|this|super|val|var|fun|is|in|throw|return|break|continue|(?:companion )?object|if|try|else|do|when|init|interface|typeof)\\b)|(?:(?:true|false|null)\\b)|(?:(?:0[xX][0-9a-fA-F_]+L?|0[bB][0-1]+L?|[0-9_.]+(?:[eE]-?[0-9]+)?[fFL]?))|(?:(?:\\b[A-Z]+[a-z][a-zA-Z0-9_$@]*|`.*`))|(?:\\/\\/.*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:\'.\')|(?:"(?:[^"\\\\]|\\\\[\\s\\S])*")|(?:"{3}[\\s\\S]*?[^\\\\]"{3})|(?:@(?:[a-zA-Z0-9_$@]*|`.*`))|(?:[a-zA-Z0-9_]+@)|(?:[\x00-\uffff])', 
  "g"], "^\\b(package|public|protected|private|open|abstract|constructor|final|override|import|for|while|as|typealias|get|set|((data|enum|annotation|sealed) )?class|this|super|val|var|fun|is|in|throw|return|break|continue|(companion )?object|if|try|else|do|when|init|interface|typeof)\\b", "^(?:true|false|null)\\b", "^(0[xX][0-9a-fA-F_]+L?|0[bB][0-1]+L?|[0-9_.]+([eE]-?[0-9]+)?[fFL]?)", "^(\\b[A-Z]+[a-z][a-zA-Z0-9_$@]*|`.*`)", "'.'", '^"([^"\\\\]|\\\\[\\s\\S])*"', '^"{3}[\\s\\S]*?[^\\\\]"{3}', "^@([a-zA-Z0-9_$@]*|`.*`)", 
  "^[a-zA-Z0-9_]+@", "^[ \\t\\r\\n\\v\\f\\xA0]+", "^![^\\r\\n]*", ["(?:[ \\t\\r\\n\\v\\f\\xA0]+)|(?:%\\{[^%]*%+(?:[^\\}%][^%]*%+)*\\})|(?:%[^\\r\\n]*)|(?:![^\\r\\n]*)|(?:\\.\\.\\.\\s*[\\r\\n])|(?:\\?\\?\\? [^\\r\\n]*)|(?:Warning: [^\\r\\n]*)|(?:>>\\s+)|(?:octave:\\d+>\\s+)|(?:(?:(?:[a-zA-Z][a-zA-Z0-9_]*(?:\\.[a-zA-Z][a-zA-Z0-9_]*)*|\\)|\\]|\\}|\\.)'))|(?:(?:[a-zA-Z][a-zA-Z0-9_]*(?:\\.[a-zA-Z][a-zA-Z0-9_]*)*)(?!'))|(?:'(?:[^']|'')*')|(?:[+\\-]?\\.?\\d+(?:\\.\\d*)?(?:[Ee][+\\-]?\\d+)?[ij]?)|(?:(?:\\{|\\}|\\(|\\)|\\[|\\]))|(?:(?:<|>|=|~|@|&|;|,|:|!|\\-|\\+|\\*|\\^|\\.|\\||\\\\|\\/))|(?:[\x00-\uffff])", 
  "g"], "^\\.\\.\\.\\s*[\\r\\n]", "^\\?\\?\\? [^\\r\\n]*", "^Warning: [^\\r\\n]*", "^>>\\s+", "^octave:\\d+>\\s+", "^((?:[a-zA-Z][a-zA-Z0-9_]*(?:\\.[a-zA-Z][a-zA-Z0-9_]*)*|\\)|\\]|\\}|\\.)')", "^([a-zA-Z][a-zA-Z0-9_]*(?:\\.[a-zA-Z][a-zA-Z0-9_]*)*)(?!')", "^'(?:[^']|'')*'", "^[+\\-]?\\.?\\d+(?:\\.\\d*)?(?:[Ee][+\\-]?\\d+)?[ij]?", "^(?:\\{|\\}|\\(|\\)|\\[|\\])", "^(?:<|>|=|~|@|&|;|,|:|!|\\-|\\+|\\*|\\^|\\.|\\||\\\\|\\/)", ["^(?:\\$[a-f0-9]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+\\-]?\\d+)?)", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$))", 
  ["(?:(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)))|(?:\\s+)|(?:\\(\\*[\\s\\S]*?(?:\\*\\)|$)|\\{[\\s\\S]*?(?:\\}|$))|(?:(?:ABSOLUTE|AND|ARRAY|ASM|ASSEMBLER|BEGIN|CASE|CONST|CONSTRUCTOR|DESTRUCTOR|DIV|DO|DOWNTO|ELSE|END|EXTERNAL|FOR|FORWARD|FUNCTION|GOTO|IF|IMPLEMENTATION|IN|INLINE|INTERFACE|INTERRUPT|LABEL|MOD|NOT|OBJECT|OF|OR|PACKED|PROCEDURE|PROGRAM|RECORD|REPEAT|SET|SHL|SHR|THEN|TO|TYPE|UNIT|UNTIL|USES|VAR|VIRTUAL|WHILE|WITH|XOR)\\b)|(?:(?:true|false|self|nil))|(?:[a-z][a-z0-9]*)|(?:(?:\\$[a-f0-9]+|(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:e[+\\-]?\\d+)?))|(?:.[^\\s\\w\\.$@\\'\\/]*)|(?:[\x00-\uffff])", 
  "gi"], "^\\(\\*[\\s\\S]*?(?:\\*\\)|$)|^\\{[\\s\\S]*?(?:\\}|$)", ["^(?:ABSOLUTE|AND|ARRAY|ASM|ASSEMBLER|BEGIN|CASE|CONST|CONSTRUCTOR|DESTRUCTOR|DIV|DO|DOWNTO|ELSE|END|EXTERNAL|FOR|FORWARD|FUNCTION|GOTO|IF|IMPLEMENTATION|IN|INLINE|INTERFACE|INTERRUPT|LABEL|MOD|NOT|OBJECT|OF|OR|PACKED|PROCEDURE|PROGRAM|RECORD|REPEAT|SET|SHL|SHR|THEN|TO|TYPE|UNIT|UNTIL|USES|VAR|VIRTUAL|WHILE|WITH|XOR)\\b", "i"], ["^(?:true|false|self|nil)", "i"], ["^[a-z][a-z0-9]*", "i"], "^.[^\\s\\w\\.$@\\'\\/]*", ["(?:[^\\)\\\"\\']+)|(?:[\x00-\uffff])", 
  "g"], "^[^\\)\\\"\\']+", ["^#[a-z]+", "i"], ["(?:#[a-z]+)|(?:[\x00-\uffff])", "gi"], ["(?:(?:\\'(?:[^\\\\\\']|\\\\[\\s\\S])*(?:\\'|$)|\\\"(?:[^\\\\\\\"]|\\\\[\\s\\S])*(?:\\\"|$)|\\`(?:[^\\\\\\`]|\\\\[\\s\\S])*(?:\\`|$)))|(?:#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\\b|[^\\r\\n]*))|(?:\\s+)|(?:<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h(?:h|pp|\\+\\+)?|[a-z]\\w*)>)|(?:\\/\\/[^\\r\\n]*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:(?:^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(?:\\/(?=[^/*\\n\\r])(?:[^/\\x5B\\x5C\\n\\r]|\\x5C[\\S\\s]|\\x5B(?:[^\\x5C\\x5D\\n\\r]|\\x5C[\\S\\s])*(?:\\x5D|$))+\\/))|(?:(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|alignas|alignof|align_union|asm|axiom|bool|concept|concept_map|const_cast|constexpr|decltype|delegate|dynamic_cast|explicit|export|friend|generic|late_check|mutable|namespace|noexcept|noreturn|nullptr|property|reinterpret_cast|static_assert|static_cast|template|typeid|typename|using|virtual|where|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|add|alias|as|ascending|async|await|base|bool|by|byte|checked|decimal|delegate|descending|dynamic|event|finally|fixed|foreach|from|get|global|group|implicit|in|interface|internal|into|is|join|let|lock|null|object|out|override|orderby|params|partial|readonly|ref|remove|sbyte|sealed|select|set|stackalloc|string|select|uint|ulong|unchecked|unsafe|ushort|value|var|virtual|where|yield|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|assert|boolean|byte|extends|finally|final|implements|import|instanceof|interface|null|native|package|strictfp|super|synchronized|throws|transient|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|async|await|constructor|debugger|enum|eval|export|from|function|get|import|implements|instanceof|interface|let|null|of|set|undefined|var|with|yield|Infinity|NaN|caller|delete|die|do|dump|elsif|eval|exit|foreach|for|goto|if|import|last|local|my|next|no|our|print|package|redo|require|sub|undef|unless|until|use|wantarray|while|BEGIN|END|break|continue|do|else|for|if|return|while|and|as|assert|class|def|del|elif|except|exec|finally|from|global|import|in|is|lambda|nonlocal|not|or|pass|print|raise|try|with|yield|False|True|None|break|continue|do|else|for|if|return|while|alias|and|begin|case|class|def|defined|elsif|end|ensure|false|in|module|next|nil|not|or|redo|rescue|retry|self|super|then|true|undef|unless|until|when|yield|BEGIN|END|break|continue|do|else|for|if|return|while|case|done|elif|esac|eval|fi|function|in|local|set|then|until)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*(?!s*\\/))|(?:[\x00-\uffff])", 
  "g"], "^(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|alignas|alignof|align_union|asm|axiom|bool|concept|concept_map|const_cast|constexpr|decltype|delegate|dynamic_cast|explicit|export|friend|generic|late_check|mutable|namespace|noexcept|noreturn|nullptr|property|reinterpret_cast|static_assert|static_cast|template|typeid|typename|using|virtual|where|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|add|alias|as|ascending|async|await|base|bool|by|byte|checked|decimal|delegate|descending|dynamic|event|finally|fixed|foreach|from|get|global|group|implicit|in|interface|internal|into|is|join|let|lock|null|object|out|override|orderby|params|partial|readonly|ref|remove|sbyte|sealed|select|set|stackalloc|string|select|uint|ulong|unchecked|unsafe|ushort|value|var|virtual|where|yield|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|assert|boolean|byte|extends|finally|final|implements|import|instanceof|interface|null|native|package|strictfp|super|synchronized|throws|transient|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|async|await|constructor|debugger|enum|eval|export|from|function|get|import|implements|instanceof|interface|let|null|of|set|undefined|var|with|yield|Infinity|NaN|caller|delete|die|do|dump|elsif|eval|exit|foreach|for|goto|if|import|last|local|my|next|no|our|print|package|redo|require|sub|undef|unless|until|use|wantarray|while|BEGIN|END|break|continue|do|else|for|if|return|while|and|as|assert|class|def|del|elif|except|exec|finally|from|global|import|in|is|lambda|nonlocal|not|or|pass|print|raise|try|with|yield|False|True|None|break|continue|do|else|for|if|return|while|alias|and|begin|case|class|def|defined|elsif|end|ensure|false|in|module|next|nil|not|or|redo|rescue|retry|self|super|then|true|undef|unless|until|when|yield|BEGIN|END|break|continue|do|else|for|if|return|while|case|done|elif|esac|eval|fi|function|in|local|set|then|until)\\b", 
  ["(?:(?:[a-zA-Z][a-zA-Z0-9_]*(?:\\.[a-zA-Z][a-zA-Z0-9_]*)*))|(?:(?:\\{|\\}|\\(|\\)|\\[|\\]))|(?:(?:<|>|=|~|@|&|;|,|:|!|\\-|\\+|\\*|\\^|\\.|\\||\\\\|\\/))|(?:')|(?:[\x00-\uffff])", "g"], "^([a-zA-Z][a-zA-Z0-9_]*(?:\\.[a-zA-Z][a-zA-Z0-9_]*)*)", "^'", ["(?:\\b(?:break|case|catch|classdef|continue|else|elseif|end|for|function|global|if|otherwise|parfor|persistent|return|spmd|switch|try|while)\\b)|(?:\\b(?:true|false|inf|Inf|nan|NaN|eps|pi|ans|nargin|nargout|varargin|varargout)\\b)|(?:\\b(?:cell|struct|char|double|single|logical|u?int(?:8|16|32|64)|sparse)\\b)|(?:\\b(?:abs|accumarray|acos(?:d|h)?|acot(?:d|h)?|acsc(?:d|h)?|actxcontrol(?:list|select)?|actxGetRunningServer|actxserver|addlistener|addpath|addpref|addtodate|airy|align|alim|all|allchild|alpha|alphamap|amd|ancestor|and|angle|annotation|any|area|arrayfun|asec(?:d|h)?|asin(?:d|h)?|assert|assignin|atan(?:2|d|h)?|audiodevinfo|audioplayer|audiorecorder|aufinfo|auread|autumn|auwrite|avifile|aviinfo|aviread|axes|axis|balance|bar(?:3|3h|h)?|base2dec|beep|BeginInvoke|bench|bessel(?:h|i|j|k|y)|beta|betainc|betaincinv|betaln|bicg|bicgstab|bicgstabl|bin2dec|bitand|bitcmp|bitget|bitmax|bitnot|bitor|bitset|bitshift|bitxor|blanks|blkdiag|bone|box|brighten|brush|bsxfun|builddocsearchdb|builtin|bvp4c|bvp5c|bvpget|bvpinit|bvpset|bvpxtend|calendar|calllib|callSoapService|camdolly|cameratoolbar|camlight|camlookat|camorbit|campan|campos|camproj|camroll|camtarget|camup|camva|camzoom|cart2pol|cart2sph|cast|cat|caxis|cd|cdf2rdf|cdfepoch|cdfinfo|cdflib(?:.(?:close|closeVar|computeEpoch|computeEpoch16|create|createAttr|createVar|delete|deleteAttr|deleteAttrEntry|deleteAttrgEntry|deleteVar|deleteVarRecords|epoch16Breakdown|epochBreakdown|getAttrEntry|getAttrgEntry|getAttrMaxEntry|getAttrMaxgEntry|getAttrName|getAttrNum|getAttrScope|getCacheSize|getChecksum|getCompression|getCompressionCacheSize|getConstantNames|getConstantValue|getCopyright|getFileBackward|getFormat|getLibraryCopyright|getLibraryVersion|getMajority|getName|getNumAttrEntries|getNumAttrgEntries|getNumAttributes|getNumgAttributes|getReadOnlyMode|getStageCacheSize|getValidate|getVarAllocRecords|getVarBlockingFactor|getVarCacheSize|getVarCompression|getVarData|getVarMaxAllocRecNum|getVarMaxWrittenRecNum|getVarName|getVarNum|getVarNumRecsWritten|getVarPadValue|getVarRecordData|getVarReservePercent|getVarsMaxWrittenRecNum|getVarSparseRecords|getVersion|hyperGetVarData|hyperPutVarData|inquire|inquireAttr|inquireAttrEntry|inquireAttrgEntry|inquireVar|open|putAttrEntry|putAttrgEntry|putVarData|putVarRecordData|renameAttr|renameVar|setCacheSize|setChecksum|setCompression|setCompressionCacheSize|setFileBackward|setFormat|setMajority|setReadOnlyMode|setStageCacheSize|setValidate|setVarAllocBlockRecords|setVarBlockingFactor|setVarCacheSize|setVarCompression|setVarInitialRecs|setVarPadValue|SetVarReservePercent|setVarsCacheSize|setVarSparseRecords))?|cdfread|cdfwrite|ceil|cell2mat|cell2struct|celldisp|cellfun|cellplot|cellstr|cgs|checkcode|checkin|checkout|chol|cholinc|cholupdate|circshift|cla|clabel|class|clc|clear|clearvars|clf|clipboard|clock|close|closereq|cmopts|cmpermute|cmunique|colamd|colon|colorbar|colordef|colormap|colormapeditor|colperm|Combine|comet|comet3|commandhistory|commandwindow|compan|compass|complex|computer|cond|condeig|condest|coneplot|conj|containers.Map|contour(?:3|c|f|slice)?|contrast|conv|conv2|convhull|convhulln|convn|cool|copper|copyfile|copyobj|corrcoef|cos(?:d|h)?|cot(?:d|h)?|cov|cplxpair|cputime|createClassFromWsdl|createSoapMessage|cross|csc(?:d|h)?|csvread|csvwrite|ctranspose|cumprod|cumsum|cumtrapz|curl|customverctrl|cylinder|daqread|daspect|datacursormode|datatipinfo|date|datenum|datestr|datetick|datevec|dbclear|dbcont|dbdown|dblquad|dbmex|dbquit|dbstack|dbstatus|dbstep|dbstop|dbtype|dbup|dde23|ddeget|ddesd|ddeset|deal|deblank|dec2base|dec2bin|dec2hex|decic|deconv|del2|delaunay|delaunay3|delaunayn|DelaunayTri|delete|demo|depdir|depfun|det|detrend|deval|diag|dialog|diary|diff|diffuse|dir|disp|display|dither|divergence|dlmread|dlmwrite|dmperm|doc|docsearch|dos|dot|dragrect|drawnow|dsearch|dsearchn|dynamicprops|echo|echodemo|edit|eig|eigs|ellipj|ellipke|ellipsoid|empty|enableNETfromNetworkDrive|enableservice|EndInvoke|enumeration|eomday|eq|erf|erfc|erfcinv|erfcx|erfinv|error|errorbar|errordlg|etime|etree|etreeplot|eval|evalc|evalin|event.(?:EventData|listener|PropertyEvent|proplistener)|exifread|exist|exit|exp|expint|expm|expm1|export2wsdlg|eye|ezcontour|ezcontourf|ezmesh|ezmeshc|ezplot|ezplot3|ezpolar|ezsurf|ezsurfc|factor|factorial|fclose|feather|feature|feof|ferror|feval|fft|fft2|fftn|fftshift|fftw|fgetl|fgets|fieldnames|figure|figurepalette|fileattrib|filebrowser|filemarker|fileparts|fileread|filesep|fill|fill3|filter|filter2|find|findall|findfigs|findobj|findstr|finish|fitsdisp|fitsinfo|fitsread|fitswrite|fix|flag|flipdim|fliplr|flipud|floor|flow|fminbnd|fminsearch|fopen|format|fplot|fprintf|frame2im|fread|freqspace|frewind|fscanf|fseek|ftell|FTP|full|fullfile|func2str|functions|funm|fwrite|fzero|gallery|gamma|gammainc|gammaincinv|gammaln|gca|gcbf|gcbo|gcd|gcf|gco|ge|genpath|genvarname|get|getappdata|getenv|getfield|getframe|getpixelposition|getpref|ginput|gmres|gplot|grabcode|gradient|gray|graymon|grid|griddata(?:3|n)?|griddedInterpolant|gsvd|gt|gtext|guidata|guide|guihandles|gunzip|gzip|h5create|h5disp|h5info|h5read|h5readatt|h5write|h5writeatt|hadamard|handle|hankel|hdf|hdf5|hdf5info|hdf5read|hdf5write|hdfinfo|hdfread|hdftool|help|helpbrowser|helpdesk|helpdlg|helpwin|hess|hex2dec|hex2num|hgexport|hggroup|hgload|hgsave|hgsetget|hgtransform|hidden|hilb|hist|histc|hold|home|horzcat|hostid|hot|hsv|hsv2rgb|hypot|ichol|idivide|ifft|ifft2|ifftn|ifftshift|ilu|im2frame|im2java|imag|image|imagesc|imapprox|imfinfo|imformats|import|importdata|imread|imwrite|ind2rgb|ind2sub|inferiorto|info|inline|inmem|inpolygon|input|inputdlg|inputname|inputParser|inspect|instrcallback|instrfind|instrfindall|int2str|integral(?:2|3)?|interp(?:1|1q|2|3|ft|n)|interpstreamspeed|intersect|intmax|intmin|inv|invhilb|ipermute|isa|isappdata|iscell|iscellstr|ischar|iscolumn|isdir|isempty|isequal|isequaln|isequalwithequalnans|isfield|isfinite|isfloat|isglobal|ishandle|ishghandle|ishold|isinf|isinteger|isjava|iskeyword|isletter|islogical|ismac|ismatrix|ismember|ismethod|isnan|isnumeric|isobject|isocaps|isocolors|isonormals|isosurface|ispc|ispref|isprime|isprop|isreal|isrow|isscalar|issorted|isspace|issparse|isstr|isstrprop|isstruct|isstudent|isunix|isvarname|isvector|javaaddpath|javaArray|javachk|javaclasspath|javacomponent|javaMethod|javaMethodEDT|javaObject|javaObjectEDT|javarmpath|jet|keyboard|kron|lasterr|lasterror|lastwarn|lcm|ldivide|ldl|le|legend|legendre|length|libfunctions|libfunctionsview|libisloaded|libpointer|libstruct|license|light|lightangle|lighting|lin2mu|line|lines|linkaxes|linkdata|linkprop|linsolve|linspace|listdlg|listfonts|load|loadlibrary|loadobj|log|log10|log1p|log2|loglog|logm|logspace|lookfor|lower|ls|lscov|lsqnonneg|lsqr|lt|lu|luinc|magic|makehgtform|mat2cell|mat2str|material|matfile|matlab.io.MatFile|matlab.mixin.(?:Copyable|Heterogeneous(?:.getDefaultScalarElement)?)|matlabrc|matlabroot|max|maxNumCompThreads|mean|median|membrane|memmapfile|memory|menu|mesh|meshc|meshgrid|meshz|meta.(?:class(?:.fromName)?|DynamicProperty|EnumeratedValue|event|MetaData|method|package(?:.(?:fromName|getAllPackages))?|property)|metaclass|methods|methodsview|mex(?:.getCompilerConfigurations)?|MException|mexext|mfilename|min|minres|minus|mislocked|mkdir|mkpp|mldivide|mlint|mlintrpt|mlock|mmfileinfo|mmreader|mod|mode|more|move|movefile|movegui|movie|movie2avi|mpower|mrdivide|msgbox|mtimes|mu2lin|multibandread|multibandwrite|munlock|namelengthmax|nargchk|narginchk|nargoutchk|native2unicode|nccreate|ncdisp|nchoosek|ncinfo|ncread|ncreadatt|ncwrite|ncwriteatt|ncwriteschema|ndgrid|ndims|ne|NET(?:.(?:addAssembly|Assembly|convertArray|createArray|createGeneric|disableAutoRelease|enableAutoRelease|GenericClass|invokeGenericMethod|NetException|setStaticProperty))?|netcdf.(?:abort|close|copyAtt|create|defDim|defGrp|defVar|defVarChunking|defVarDeflate|defVarFill|defVarFletcher32|delAtt|endDef|getAtt|getChunkCache|getConstant|getConstantNames|getVar|inq|inqAtt|inqAttID|inqAttName|inqDim|inqDimID|inqDimIDs|inqFormat|inqGrpName|inqGrpNameFull|inqGrpParent|inqGrps|inqLibVers|inqNcid|inqUnlimDims|inqVar|inqVarChunking|inqVarDeflate|inqVarFill|inqVarFletcher32|inqVarID|inqVarIDs|open|putAtt|putVar|reDef|renameAtt|renameDim|renameVar|setChunkCache|setDefaultFormat|setFill|sync)|newplot|nextpow2|nnz|noanimate|nonzeros|norm|normest|not|notebook|now|nthroot|null|num2cell|num2hex|num2str|numel|nzmax|ode(?:113|15i|15s|23|23s|23t|23tb|45)|odeget|odeset|odextend|onCleanup|ones|open|openfig|opengl|openvar|optimget|optimset|or|ordeig|orderfields|ordqz|ordschur|orient|orth|pack|padecoef|pagesetupdlg|pan|pareto|parseSoapResponse|pascal|patch|path|path2rc|pathsep|pathtool|pause|pbaspect|pcg|pchip|pcode|pcolor|pdepe|pdeval|peaks|perl|perms|permute|pie|pink|pinv|planerot|playshow|plot|plot3|plotbrowser|plotedit|plotmatrix|plottools|plotyy|plus|pol2cart|polar|poly|polyarea|polyder|polyeig|polyfit|polyint|polyval|polyvalm|pow2|power|ppval|prefdir|preferences|primes|print|printdlg|printopt|printpreview|prod|profile|profsave|propedit|propertyeditor|psi|publish|PutCharArray|PutFullMatrix|PutWorkspaceData|pwd|qhull|qmr|qr|qrdelete|qrinsert|qrupdate|quad|quad2d|quadgk|quadl|quadv|questdlg|quit|quiver|quiver3|qz|rand|randi|randn|randperm|RandStream(?:.(?:create|getDefaultStream|getGlobalStream|list|setDefaultStream|setGlobalStream))?|rank|rat|rats|rbbox|rcond|rdivide|readasync|real|reallog|realmax|realmin|realpow|realsqrt|record|rectangle|rectint|recycle|reducepatch|reducevolume|refresh|refreshdata|regexp|regexpi|regexprep|regexptranslate|rehash|rem|Remove|RemoveAll|repmat|reset|reshape|residue|restoredefaultpath|rethrow|rgb2hsv|rgb2ind|rgbplot|ribbon|rmappdata|rmdir|rmfield|rmpath|rmpref|rng|roots|rose|rosser|rot90|rotate|rotate3d|round|rref|rsf2csf|run|save|saveas|saveobj|savepath|scatter|scatter3|schur|sec|secd|sech|selectmoveresize|semilogx|semilogy|sendmail|serial|set|setappdata|setdiff|setenv|setfield|setpixelposition|setpref|setstr|setxor|shading|shg|shiftdim|showplottool|shrinkfaces|sign|sin(?:d|h)?|size|slice|smooth3|snapnow|sort|sortrows|sound|soundsc|spalloc|spaugment|spconvert|spdiags|specular|speye|spfun|sph2cart|sphere|spinmap|spline|spones|spparms|sprand|sprandn|sprandsym|sprank|spring|sprintf|spy|sqrt|sqrtm|squeeze|ss2tf|sscanf|stairs|startup|std|stem|stem3|stopasync|str2double|str2func|str2mat|str2num|strcat|strcmp|strcmpi|stream2|stream3|streamline|streamparticles|streamribbon|streamslice|streamtube|strfind|strjust|strmatch|strncmp|strncmpi|strread|strrep|strtok|strtrim|struct2cell|structfun|strvcat|sub2ind|subplot|subsasgn|subsindex|subspace|subsref|substruct|subvolume|sum|summer|superclasses|superiorto|support|surf|surf2patch|surface|surfc|surfl|surfnorm|svd|svds|swapbytes|symamd|symbfact|symmlq|symrcm|symvar|system|tan(?:d|h)?|tar|tempdir|tempname|tetramesh|texlabel|text|textread|textscan|textwrap|tfqmr|throw|tic|Tiff(?:.(?:getTagNames|getVersion))?|timer|timerfind|timerfindall|times|timeseries|title|toc|todatenum|toeplitz|toolboxdir|trace|transpose|trapz|treelayout|treeplot|tril|trimesh|triplequad|triplot|TriRep|TriScatteredInterp|trisurf|triu|tscollection|tsearch|tsearchn|tstool|type|typecast|uibuttongroup|uicontextmenu|uicontrol|uigetdir|uigetfile|uigetpref|uiimport|uimenu|uiopen|uipanel|uipushtool|uiputfile|uiresume|uisave|uisetcolor|uisetfont|uisetpref|uistack|uitable|uitoggletool|uitoolbar|uiwait|uminus|undocheckout|unicode2native|union|unique|unix|unloadlibrary|unmesh|unmkpp|untar|unwrap|unzip|uplus|upper|urlread|urlwrite|usejava|userpath|validateattributes|validatestring|vander|var|vectorize|ver|verctrl|verLessThan|version|vertcat|VideoReader(?:.isPlatformSupported)?|VideoWriter(?:.getProfiles)?|view|viewmtx|visdiff|volumebounds|voronoi|voronoin|wait|waitbar|waitfor|waitforbuttonpress|warndlg|warning|waterfall|wavfinfo|wavplay|wavread|wavrecord|wavwrite|web|weekday|what|whatsnew|which|whitebg|who|whos|wilkinson|winopen|winqueryreg|winter|wk1finfo|wk1read|wk1write|workspace|xlabel|xlim|xlsfinfo|xlsread|xlswrite|xmlread|xmlwrite|xor|xslt|ylabel|ylim|zeros|zip|zlabel|zlim|zoom)\\b)|(?:\\b(?:addedvarplot|andrewsplot|anova(?:1|2|n)|ansaribradley|aoctool|barttest|bbdesign|beta(?:cdf|fit|inv|like|pdf|rnd|stat)|bino(?:cdf|fit|inv|pdf|rnd|stat)|biplot|bootci|bootstrp|boxplot|candexch|candgen|canoncorr|capability|capaplot|caseread|casewrite|categorical|ccdesign|cdfplot|chi2(?:cdf|gof|inv|pdf|rnd|stat)|cholcov|Classification(?:BaggedEnsemble|Discriminant(?:.(?:fit|make|template))?|Ensemble|KNN(?:.(?:fit|template))?|PartitionedEnsemble|PartitionedModel|Tree(?:.(?:fit|template))?)|classify|classregtree|cluster|clusterdata|cmdscale|combnk|Compact(?:Classification(?:Discriminant|Ensemble|Tree)|Regression(?:Ensemble|Tree)|TreeBagger)|confusionmat|controlchart|controlrules|cophenet|copula(?:cdf|fit|param|pdf|rnd|stat)|cordexch|corr|corrcov|coxphfit|createns|crosstab|crossval|cvpartition|datasample|dataset|daugment|dcovary|dendrogram|dfittool|disttool|dummyvar|dwtest|ecdf|ecdfhist|ev(?:cdf|fit|inv|like|pdf|rnd|stat)|ExhaustiveSearcher|exp(?:cdf|fit|inv|like|pdf|rnd|stat)|factoran|fcdf|ff2n|finv|fitdist|fitensemble|fpdf|fracfact|fracfactgen|friedman|frnd|fstat|fsurfht|fullfact|gagerr|gam(?:cdf|fit|inv|like|pdf|rnd|stat)|GeneralizedLinearModel(?:.fit)?|geo(?:cdf|inv|mean|pdf|rnd|stat)|gev(?:cdf|fit|inv|like|pdf|rnd|stat)|gline|glmfit|glmval|glyphplot|gmdistribution(?:.fit)?|gname|gp(?:cdf|fit|inv|like|pdf|rnd|stat)|gplotmatrix|grp2idx|grpstats|gscatter|haltonset|harmmean|hist3|histfit|hmm(?:decode|estimate|generate|train|viterbi)|hougen|hyge(?:cdf|inv|pdf|rnd|stat)|icdf|inconsistent|interactionplot|invpred|iqr|iwishrnd|jackknife|jbtest|johnsrnd|KDTreeSearcher|kmeans|knnsearch|kruskalwallis|ksdensity|kstest|kstest2|kurtosis|lasso|lassoglm|lassoPlot|leverage|lhsdesign|lhsnorm|lillietest|LinearModel(?:.fit)?|linhyptest|linkage|logn(?:cdf|fit|inv|like|pdf|rnd|stat)|lsline|mad|mahal|maineffectsplot|manova1|manovacluster|mdscale|mhsample|mle|mlecov|mnpdf|mnrfit|mnrnd|mnrval|moment|multcompare|multivarichart|mvn(?:cdf|pdf|rnd)|mvregress|mvregresslike|mvt(?:cdf|pdf|rnd)|NaiveBayes(?:.fit)?|nan(?:cov|max|mean|median|min|std|sum|var)|nbin(?:cdf|fit|inv|pdf|rnd|stat)|ncf(?:cdf|inv|pdf|rnd|stat)|nct(?:cdf|inv|pdf|rnd|stat)|ncx2(?:cdf|inv|pdf|rnd|stat)|NeighborSearcher|nlinfit|nlintool|nlmefit|nlmefitsa|nlparci|nlpredci|nnmf|nominal|NonLinearModel(?:.fit)?|norm(?:cdf|fit|inv|like|pdf|rnd|stat)|normplot|normspec|ordinal|outlierMeasure|parallelcoords|paretotails|partialcorr|pcacov|pcares|pdf|pdist|pdist2|pearsrnd|perfcurve|perms|piecewisedistribution|plsregress|poiss(?:cdf|fit|inv|pdf|rnd|tat)|polyconf|polytool|prctile|princomp|ProbDist(?:Kernel|Parametric|UnivKernel|UnivParam)?|probplot|procrustes|qqplot|qrandset|qrandstream|quantile|randg|random|randsample|randtool|range|rangesearch|ranksum|rayl(?:cdf|fit|inv|pdf|rnd|stat)|rcoplot|refcurve|refline|regress|Regression(?:BaggedEnsemble|Ensemble|PartitionedEnsemble|PartitionedModel|Tree(?:.(?:fit|template))?)|regstats|relieff|ridge|robustdemo|robustfit|rotatefactors|rowexch|rsmdemo|rstool|runstest|sampsizepwr|scatterhist|sequentialfs|signrank|signtest|silhouette|skewness|slicesample|sobolset|squareform|statget|statset|stepwise|stepwisefit|surfht|tabulate|tblread|tblwrite|tcdf|tdfread|tiedrank|tinv|tpdf|TreeBagger|treedisp|treefit|treeprune|treetest|treeval|trimmean|trnd|tstat|ttest|ttest2|unid(?:cdf|inv|pdf|rnd|stat)|unif(?:cdf|inv|it|pdf|rnd|stat)|vartest(?:2|n)?|wbl(?:cdf|fit|inv|like|pdf|rnd|stat)|wblplot|wishrnd|x2fx|xptread|zscore|ztest)\\b)|(?:\\b(?:adapthisteq|analyze75info|analyze75read|applycform|applylut|axes2pix|bestblk|blockproc|bwarea|bwareaopen|bwboundaries|bwconncomp|bwconvhull|bwdist|bwdistgeodesic|bweuler|bwhitmiss|bwlabel|bwlabeln|bwmorph|bwpack|bwperim|bwselect|bwtraceboundary|bwulterode|bwunpack|checkerboard|col2im|colfilt|conndef|convmtx2|corner|cornermetric|corr2|cp2tform|cpcorr|cpselect|cpstruct2pairs|dct2|dctmtx|deconvblind|deconvlucy|deconvreg|deconvwnr|decorrstretch|demosaic|dicom(?:anon|dict|info|lookup|read|uid|write)|edge|edgetaper|entropy|entropyfilt|fan2para|fanbeam|findbounds|fliptform|freqz2|fsamp2|fspecial|ftrans2|fwind1|fwind2|getheight|getimage|getimagemodel|getline|getneighbors|getnhood|getpts|getrangefromclass|getrect|getsequence|gray2ind|graycomatrix|graycoprops|graydist|grayslice|graythresh|hdrread|hdrwrite|histeq|hough|houghlines|houghpeaks|iccfind|iccread|iccroot|iccwrite|idct2|ifanbeam|im2bw|im2col|im2double|im2int16|im2java2d|im2single|im2uint16|im2uint8|imabsdiff|imadd|imadjust|ImageAdapter|imageinfo|imagemodel|imapplymatrix|imattributes|imbothat|imclearborder|imclose|imcolormaptool|imcomplement|imcontour|imcontrast|imcrop|imdilate|imdisplayrange|imdistline|imdivide|imellipse|imerode|imextendedmax|imextendedmin|imfill|imfilter|imfindcircles|imfreehand|imfuse|imgca|imgcf|imgetfile|imhandles|imhist|imhmax|imhmin|imimposemin|imlincomb|imline|immagbox|immovie|immultiply|imnoise|imopen|imoverview|imoverviewpanel|impixel|impixelinfo|impixelinfoval|impixelregion|impixelregionpanel|implay|impoint|impoly|impositionrect|improfile|imputfile|impyramid|imreconstruct|imrect|imregconfig|imregionalmax|imregionalmin|imregister|imresize|imroi|imrotate|imsave|imscrollpanel|imshow|imshowpair|imsubtract|imtool|imtophat|imtransform|imview|ind2gray|ind2rgb|interfileinfo|interfileread|intlut|ippl|iptaddcallback|iptcheckconn|iptcheckhandle|iptcheckinput|iptcheckmap|iptchecknargin|iptcheckstrs|iptdemos|iptgetapi|iptGetPointerBehavior|iptgetpref|ipticondir|iptnum2ordinal|iptPointerManager|iptprefs|iptremovecallback|iptSetPointerBehavior|iptsetpref|iptwindowalign|iradon|isbw|isflat|isgray|isicc|isind|isnitf|isrgb|isrset|lab2double|lab2uint16|lab2uint8|label2rgb|labelmatrix|makecform|makeConstrainToRectFcn|makehdr|makelut|makeresampler|maketform|mat2gray|mean2|medfilt2|montage|nitfinfo|nitfread|nlfilter|normxcorr2|ntsc2rgb|openrset|ordfilt2|otf2psf|padarray|para2fan|phantom|poly2mask|psf2otf|qtdecomp|qtgetblk|qtsetblk|radon|rangefilt|reflect|regionprops|registration.metric.(?:MattesMutualInformation|MeanSquares)|registration.optimizer.(?:OnePlusOneEvolutionary|RegularStepGradientDescent)|rgb2gray|rgb2ntsc|rgb2ycbcr|roicolor|roifill|roifilt2|roipoly|rsetwrite|std2|stdfilt|strel|stretchlim|subimage|tformarray|tformfwd|tforminv|tonemap|translate|truesize|uintlut|viscircles|warp|watershed|whitepoint|wiener2|xyz2double|xyz2uint16|ycbcr2rgb)\\b)|(?:\\b(?:bintprog|color|fgoalattain|fminbnd|fmincon|fminimax|fminsearch|fminunc|fseminf|fsolve|fzero|fzmult|gangstr|ktrlink|linprog|lsqcurvefit|lsqlin|lsqnonlin|lsqnonneg|optimget|optimset|optimtool|quadprog)\\b)|(?:[a-zA-Z][a-zA-Z0-9_]*(?:\\.[a-zA-Z][a-zA-Z0-9_]*)*)|(?:[\x00-\uffff])", 
  "g"], "^\\b(?:break|case|catch|classdef|continue|else|elseif|end|for|function|global|if|otherwise|parfor|persistent|return|spmd|switch|try|while)\\b", "^\\b(?:true|false|inf|Inf|nan|NaN|eps|pi|ans|nargin|nargout|varargin|varargout)\\b", "^\\b(?:cell|struct|char|double|single|logical|u?int(?:8|16|32|64)|sparse)\\b", "^\\b(?:abs|accumarray|acos(?:d|h)?|acot(?:d|h)?|acsc(?:d|h)?|actxcontrol(?:list|select)?|actxGetRunningServer|actxserver|addlistener|addpath|addpref|addtodate|airy|align|alim|all|allchild|alpha|alphamap|amd|ancestor|and|angle|annotation|any|area|arrayfun|asec(?:d|h)?|asin(?:d|h)?|assert|assignin|atan(?:2|d|h)?|audiodevinfo|audioplayer|audiorecorder|aufinfo|auread|autumn|auwrite|avifile|aviinfo|aviread|axes|axis|balance|bar(?:3|3h|h)?|base2dec|beep|BeginInvoke|bench|bessel(?:h|i|j|k|y)|beta|betainc|betaincinv|betaln|bicg|bicgstab|bicgstabl|bin2dec|bitand|bitcmp|bitget|bitmax|bitnot|bitor|bitset|bitshift|bitxor|blanks|blkdiag|bone|box|brighten|brush|bsxfun|builddocsearchdb|builtin|bvp4c|bvp5c|bvpget|bvpinit|bvpset|bvpxtend|calendar|calllib|callSoapService|camdolly|cameratoolbar|camlight|camlookat|camorbit|campan|campos|camproj|camroll|camtarget|camup|camva|camzoom|cart2pol|cart2sph|cast|cat|caxis|cd|cdf2rdf|cdfepoch|cdfinfo|cdflib(?:.(?:close|closeVar|computeEpoch|computeEpoch16|create|createAttr|createVar|delete|deleteAttr|deleteAttrEntry|deleteAttrgEntry|deleteVar|deleteVarRecords|epoch16Breakdown|epochBreakdown|getAttrEntry|getAttrgEntry|getAttrMaxEntry|getAttrMaxgEntry|getAttrName|getAttrNum|getAttrScope|getCacheSize|getChecksum|getCompression|getCompressionCacheSize|getConstantNames|getConstantValue|getCopyright|getFileBackward|getFormat|getLibraryCopyright|getLibraryVersion|getMajority|getName|getNumAttrEntries|getNumAttrgEntries|getNumAttributes|getNumgAttributes|getReadOnlyMode|getStageCacheSize|getValidate|getVarAllocRecords|getVarBlockingFactor|getVarCacheSize|getVarCompression|getVarData|getVarMaxAllocRecNum|getVarMaxWrittenRecNum|getVarName|getVarNum|getVarNumRecsWritten|getVarPadValue|getVarRecordData|getVarReservePercent|getVarsMaxWrittenRecNum|getVarSparseRecords|getVersion|hyperGetVarData|hyperPutVarData|inquire|inquireAttr|inquireAttrEntry|inquireAttrgEntry|inquireVar|open|putAttrEntry|putAttrgEntry|putVarData|putVarRecordData|renameAttr|renameVar|setCacheSize|setChecksum|setCompression|setCompressionCacheSize|setFileBackward|setFormat|setMajority|setReadOnlyMode|setStageCacheSize|setValidate|setVarAllocBlockRecords|setVarBlockingFactor|setVarCacheSize|setVarCompression|setVarInitialRecs|setVarPadValue|SetVarReservePercent|setVarsCacheSize|setVarSparseRecords))?|cdfread|cdfwrite|ceil|cell2mat|cell2struct|celldisp|cellfun|cellplot|cellstr|cgs|checkcode|checkin|checkout|chol|cholinc|cholupdate|circshift|cla|clabel|class|clc|clear|clearvars|clf|clipboard|clock|close|closereq|cmopts|cmpermute|cmunique|colamd|colon|colorbar|colordef|colormap|colormapeditor|colperm|Combine|comet|comet3|commandhistory|commandwindow|compan|compass|complex|computer|cond|condeig|condest|coneplot|conj|containers.Map|contour(?:3|c|f|slice)?|contrast|conv|conv2|convhull|convhulln|convn|cool|copper|copyfile|copyobj|corrcoef|cos(?:d|h)?|cot(?:d|h)?|cov|cplxpair|cputime|createClassFromWsdl|createSoapMessage|cross|csc(?:d|h)?|csvread|csvwrite|ctranspose|cumprod|cumsum|cumtrapz|curl|customverctrl|cylinder|daqread|daspect|datacursormode|datatipinfo|date|datenum|datestr|datetick|datevec|dbclear|dbcont|dbdown|dblquad|dbmex|dbquit|dbstack|dbstatus|dbstep|dbstop|dbtype|dbup|dde23|ddeget|ddesd|ddeset|deal|deblank|dec2base|dec2bin|dec2hex|decic|deconv|del2|delaunay|delaunay3|delaunayn|DelaunayTri|delete|demo|depdir|depfun|det|detrend|deval|diag|dialog|diary|diff|diffuse|dir|disp|display|dither|divergence|dlmread|dlmwrite|dmperm|doc|docsearch|dos|dot|dragrect|drawnow|dsearch|dsearchn|dynamicprops|echo|echodemo|edit|eig|eigs|ellipj|ellipke|ellipsoid|empty|enableNETfromNetworkDrive|enableservice|EndInvoke|enumeration|eomday|eq|erf|erfc|erfcinv|erfcx|erfinv|error|errorbar|errordlg|etime|etree|etreeplot|eval|evalc|evalin|event.(?:EventData|listener|PropertyEvent|proplistener)|exifread|exist|exit|exp|expint|expm|expm1|export2wsdlg|eye|ezcontour|ezcontourf|ezmesh|ezmeshc|ezplot|ezplot3|ezpolar|ezsurf|ezsurfc|factor|factorial|fclose|feather|feature|feof|ferror|feval|fft|fft2|fftn|fftshift|fftw|fgetl|fgets|fieldnames|figure|figurepalette|fileattrib|filebrowser|filemarker|fileparts|fileread|filesep|fill|fill3|filter|filter2|find|findall|findfigs|findobj|findstr|finish|fitsdisp|fitsinfo|fitsread|fitswrite|fix|flag|flipdim|fliplr|flipud|floor|flow|fminbnd|fminsearch|fopen|format|fplot|fprintf|frame2im|fread|freqspace|frewind|fscanf|fseek|ftell|FTP|full|fullfile|func2str|functions|funm|fwrite|fzero|gallery|gamma|gammainc|gammaincinv|gammaln|gca|gcbf|gcbo|gcd|gcf|gco|ge|genpath|genvarname|get|getappdata|getenv|getfield|getframe|getpixelposition|getpref|ginput|gmres|gplot|grabcode|gradient|gray|graymon|grid|griddata(?:3|n)?|griddedInterpolant|gsvd|gt|gtext|guidata|guide|guihandles|gunzip|gzip|h5create|h5disp|h5info|h5read|h5readatt|h5write|h5writeatt|hadamard|handle|hankel|hdf|hdf5|hdf5info|hdf5read|hdf5write|hdfinfo|hdfread|hdftool|help|helpbrowser|helpdesk|helpdlg|helpwin|hess|hex2dec|hex2num|hgexport|hggroup|hgload|hgsave|hgsetget|hgtransform|hidden|hilb|hist|histc|hold|home|horzcat|hostid|hot|hsv|hsv2rgb|hypot|ichol|idivide|ifft|ifft2|ifftn|ifftshift|ilu|im2frame|im2java|imag|image|imagesc|imapprox|imfinfo|imformats|import|importdata|imread|imwrite|ind2rgb|ind2sub|inferiorto|info|inline|inmem|inpolygon|input|inputdlg|inputname|inputParser|inspect|instrcallback|instrfind|instrfindall|int2str|integral(?:2|3)?|interp(?:1|1q|2|3|ft|n)|interpstreamspeed|intersect|intmax|intmin|inv|invhilb|ipermute|isa|isappdata|iscell|iscellstr|ischar|iscolumn|isdir|isempty|isequal|isequaln|isequalwithequalnans|isfield|isfinite|isfloat|isglobal|ishandle|ishghandle|ishold|isinf|isinteger|isjava|iskeyword|isletter|islogical|ismac|ismatrix|ismember|ismethod|isnan|isnumeric|isobject|isocaps|isocolors|isonormals|isosurface|ispc|ispref|isprime|isprop|isreal|isrow|isscalar|issorted|isspace|issparse|isstr|isstrprop|isstruct|isstudent|isunix|isvarname|isvector|javaaddpath|javaArray|javachk|javaclasspath|javacomponent|javaMethod|javaMethodEDT|javaObject|javaObjectEDT|javarmpath|jet|keyboard|kron|lasterr|lasterror|lastwarn|lcm|ldivide|ldl|le|legend|legendre|length|libfunctions|libfunctionsview|libisloaded|libpointer|libstruct|license|light|lightangle|lighting|lin2mu|line|lines|linkaxes|linkdata|linkprop|linsolve|linspace|listdlg|listfonts|load|loadlibrary|loadobj|log|log10|log1p|log2|loglog|logm|logspace|lookfor|lower|ls|lscov|lsqnonneg|lsqr|lt|lu|luinc|magic|makehgtform|mat2cell|mat2str|material|matfile|matlab.io.MatFile|matlab.mixin.(?:Copyable|Heterogeneous(?:.getDefaultScalarElement)?)|matlabrc|matlabroot|max|maxNumCompThreads|mean|median|membrane|memmapfile|memory|menu|mesh|meshc|meshgrid|meshz|meta.(?:class(?:.fromName)?|DynamicProperty|EnumeratedValue|event|MetaData|method|package(?:.(?:fromName|getAllPackages))?|property)|metaclass|methods|methodsview|mex(?:.getCompilerConfigurations)?|MException|mexext|mfilename|min|minres|minus|mislocked|mkdir|mkpp|mldivide|mlint|mlintrpt|mlock|mmfileinfo|mmreader|mod|mode|more|move|movefile|movegui|movie|movie2avi|mpower|mrdivide|msgbox|mtimes|mu2lin|multibandread|multibandwrite|munlock|namelengthmax|nargchk|narginchk|nargoutchk|native2unicode|nccreate|ncdisp|nchoosek|ncinfo|ncread|ncreadatt|ncwrite|ncwriteatt|ncwriteschema|ndgrid|ndims|ne|NET(?:.(?:addAssembly|Assembly|convertArray|createArray|createGeneric|disableAutoRelease|enableAutoRelease|GenericClass|invokeGenericMethod|NetException|setStaticProperty))?|netcdf.(?:abort|close|copyAtt|create|defDim|defGrp|defVar|defVarChunking|defVarDeflate|defVarFill|defVarFletcher32|delAtt|endDef|getAtt|getChunkCache|getConstant|getConstantNames|getVar|inq|inqAtt|inqAttID|inqAttName|inqDim|inqDimID|inqDimIDs|inqFormat|inqGrpName|inqGrpNameFull|inqGrpParent|inqGrps|inqLibVers|inqNcid|inqUnlimDims|inqVar|inqVarChunking|inqVarDeflate|inqVarFill|inqVarFletcher32|inqVarID|inqVarIDs|open|putAtt|putVar|reDef|renameAtt|renameDim|renameVar|setChunkCache|setDefaultFormat|setFill|sync)|newplot|nextpow2|nnz|noanimate|nonzeros|norm|normest|not|notebook|now|nthroot|null|num2cell|num2hex|num2str|numel|nzmax|ode(?:113|15i|15s|23|23s|23t|23tb|45)|odeget|odeset|odextend|onCleanup|ones|open|openfig|opengl|openvar|optimget|optimset|or|ordeig|orderfields|ordqz|ordschur|orient|orth|pack|padecoef|pagesetupdlg|pan|pareto|parseSoapResponse|pascal|patch|path|path2rc|pathsep|pathtool|pause|pbaspect|pcg|pchip|pcode|pcolor|pdepe|pdeval|peaks|perl|perms|permute|pie|pink|pinv|planerot|playshow|plot|plot3|plotbrowser|plotedit|plotmatrix|plottools|plotyy|plus|pol2cart|polar|poly|polyarea|polyder|polyeig|polyfit|polyint|polyval|polyvalm|pow2|power|ppval|prefdir|preferences|primes|print|printdlg|printopt|printpreview|prod|profile|profsave|propedit|propertyeditor|psi|publish|PutCharArray|PutFullMatrix|PutWorkspaceData|pwd|qhull|qmr|qr|qrdelete|qrinsert|qrupdate|quad|quad2d|quadgk|quadl|quadv|questdlg|quit|quiver|quiver3|qz|rand|randi|randn|randperm|RandStream(?:.(?:create|getDefaultStream|getGlobalStream|list|setDefaultStream|setGlobalStream))?|rank|rat|rats|rbbox|rcond|rdivide|readasync|real|reallog|realmax|realmin|realpow|realsqrt|record|rectangle|rectint|recycle|reducepatch|reducevolume|refresh|refreshdata|regexp|regexpi|regexprep|regexptranslate|rehash|rem|Remove|RemoveAll|repmat|reset|reshape|residue|restoredefaultpath|rethrow|rgb2hsv|rgb2ind|rgbplot|ribbon|rmappdata|rmdir|rmfield|rmpath|rmpref|rng|roots|rose|rosser|rot90|rotate|rotate3d|round|rref|rsf2csf|run|save|saveas|saveobj|savepath|scatter|scatter3|schur|sec|secd|sech|selectmoveresize|semilogx|semilogy|sendmail|serial|set|setappdata|setdiff|setenv|setfield|setpixelposition|setpref|setstr|setxor|shading|shg|shiftdim|showplottool|shrinkfaces|sign|sin(?:d|h)?|size|slice|smooth3|snapnow|sort|sortrows|sound|soundsc|spalloc|spaugment|spconvert|spdiags|specular|speye|spfun|sph2cart|sphere|spinmap|spline|spones|spparms|sprand|sprandn|sprandsym|sprank|spring|sprintf|spy|sqrt|sqrtm|squeeze|ss2tf|sscanf|stairs|startup|std|stem|stem3|stopasync|str2double|str2func|str2mat|str2num|strcat|strcmp|strcmpi|stream2|stream3|streamline|streamparticles|streamribbon|streamslice|streamtube|strfind|strjust|strmatch|strncmp|strncmpi|strread|strrep|strtok|strtrim|struct2cell|structfun|strvcat|sub2ind|subplot|subsasgn|subsindex|subspace|subsref|substruct|subvolume|sum|summer|superclasses|superiorto|support|surf|surf2patch|surface|surfc|surfl|surfnorm|svd|svds|swapbytes|symamd|symbfact|symmlq|symrcm|symvar|system|tan(?:d|h)?|tar|tempdir|tempname|tetramesh|texlabel|text|textread|textscan|textwrap|tfqmr|throw|tic|Tiff(?:.(?:getTagNames|getVersion))?|timer|timerfind|timerfindall|times|timeseries|title|toc|todatenum|toeplitz|toolboxdir|trace|transpose|trapz|treelayout|treeplot|tril|trimesh|triplequad|triplot|TriRep|TriScatteredInterp|trisurf|triu|tscollection|tsearch|tsearchn|tstool|type|typecast|uibuttongroup|uicontextmenu|uicontrol|uigetdir|uigetfile|uigetpref|uiimport|uimenu|uiopen|uipanel|uipushtool|uiputfile|uiresume|uisave|uisetcolor|uisetfont|uisetpref|uistack|uitable|uitoggletool|uitoolbar|uiwait|uminus|undocheckout|unicode2native|union|unique|unix|unloadlibrary|unmesh|unmkpp|untar|unwrap|unzip|uplus|upper|urlread|urlwrite|usejava|userpath|validateattributes|validatestring|vander|var|vectorize|ver|verctrl|verLessThan|version|vertcat|VideoReader(?:.isPlatformSupported)?|VideoWriter(?:.getProfiles)?|view|viewmtx|visdiff|volumebounds|voronoi|voronoin|wait|waitbar|waitfor|waitforbuttonpress|warndlg|warning|waterfall|wavfinfo|wavplay|wavread|wavrecord|wavwrite|web|weekday|what|whatsnew|which|whitebg|who|whos|wilkinson|winopen|winqueryreg|winter|wk1finfo|wk1read|wk1write|workspace|xlabel|xlim|xlsfinfo|xlsread|xlswrite|xmlread|xmlwrite|xor|xslt|ylabel|ylim|zeros|zip|zlabel|zlim|zoom)\\b", 
  "^\\b(?:addedvarplot|andrewsplot|anova(?:1|2|n)|ansaribradley|aoctool|barttest|bbdesign|beta(?:cdf|fit|inv|like|pdf|rnd|stat)|bino(?:cdf|fit|inv|pdf|rnd|stat)|biplot|bootci|bootstrp|boxplot|candexch|candgen|canoncorr|capability|capaplot|caseread|casewrite|categorical|ccdesign|cdfplot|chi2(?:cdf|gof|inv|pdf|rnd|stat)|cholcov|Classification(?:BaggedEnsemble|Discriminant(?:.(?:fit|make|template))?|Ensemble|KNN(?:.(?:fit|template))?|PartitionedEnsemble|PartitionedModel|Tree(?:.(?:fit|template))?)|classify|classregtree|cluster|clusterdata|cmdscale|combnk|Compact(?:Classification(?:Discriminant|Ensemble|Tree)|Regression(?:Ensemble|Tree)|TreeBagger)|confusionmat|controlchart|controlrules|cophenet|copula(?:cdf|fit|param|pdf|rnd|stat)|cordexch|corr|corrcov|coxphfit|createns|crosstab|crossval|cvpartition|datasample|dataset|daugment|dcovary|dendrogram|dfittool|disttool|dummyvar|dwtest|ecdf|ecdfhist|ev(?:cdf|fit|inv|like|pdf|rnd|stat)|ExhaustiveSearcher|exp(?:cdf|fit|inv|like|pdf|rnd|stat)|factoran|fcdf|ff2n|finv|fitdist|fitensemble|fpdf|fracfact|fracfactgen|friedman|frnd|fstat|fsurfht|fullfact|gagerr|gam(?:cdf|fit|inv|like|pdf|rnd|stat)|GeneralizedLinearModel(?:.fit)?|geo(?:cdf|inv|mean|pdf|rnd|stat)|gev(?:cdf|fit|inv|like|pdf|rnd|stat)|gline|glmfit|glmval|glyphplot|gmdistribution(?:.fit)?|gname|gp(?:cdf|fit|inv|like|pdf|rnd|stat)|gplotmatrix|grp2idx|grpstats|gscatter|haltonset|harmmean|hist3|histfit|hmm(?:decode|estimate|generate|train|viterbi)|hougen|hyge(?:cdf|inv|pdf|rnd|stat)|icdf|inconsistent|interactionplot|invpred|iqr|iwishrnd|jackknife|jbtest|johnsrnd|KDTreeSearcher|kmeans|knnsearch|kruskalwallis|ksdensity|kstest|kstest2|kurtosis|lasso|lassoglm|lassoPlot|leverage|lhsdesign|lhsnorm|lillietest|LinearModel(?:.fit)?|linhyptest|linkage|logn(?:cdf|fit|inv|like|pdf|rnd|stat)|lsline|mad|mahal|maineffectsplot|manova1|manovacluster|mdscale|mhsample|mle|mlecov|mnpdf|mnrfit|mnrnd|mnrval|moment|multcompare|multivarichart|mvn(?:cdf|pdf|rnd)|mvregress|mvregresslike|mvt(?:cdf|pdf|rnd)|NaiveBayes(?:.fit)?|nan(?:cov|max|mean|median|min|std|sum|var)|nbin(?:cdf|fit|inv|pdf|rnd|stat)|ncf(?:cdf|inv|pdf|rnd|stat)|nct(?:cdf|inv|pdf|rnd|stat)|ncx2(?:cdf|inv|pdf|rnd|stat)|NeighborSearcher|nlinfit|nlintool|nlmefit|nlmefitsa|nlparci|nlpredci|nnmf|nominal|NonLinearModel(?:.fit)?|norm(?:cdf|fit|inv|like|pdf|rnd|stat)|normplot|normspec|ordinal|outlierMeasure|parallelcoords|paretotails|partialcorr|pcacov|pcares|pdf|pdist|pdist2|pearsrnd|perfcurve|perms|piecewisedistribution|plsregress|poiss(?:cdf|fit|inv|pdf|rnd|tat)|polyconf|polytool|prctile|princomp|ProbDist(?:Kernel|Parametric|UnivKernel|UnivParam)?|probplot|procrustes|qqplot|qrandset|qrandstream|quantile|randg|random|randsample|randtool|range|rangesearch|ranksum|rayl(?:cdf|fit|inv|pdf|rnd|stat)|rcoplot|refcurve|refline|regress|Regression(?:BaggedEnsemble|Ensemble|PartitionedEnsemble|PartitionedModel|Tree(?:.(?:fit|template))?)|regstats|relieff|ridge|robustdemo|robustfit|rotatefactors|rowexch|rsmdemo|rstool|runstest|sampsizepwr|scatterhist|sequentialfs|signrank|signtest|silhouette|skewness|slicesample|sobolset|squareform|statget|statset|stepwise|stepwisefit|surfht|tabulate|tblread|tblwrite|tcdf|tdfread|tiedrank|tinv|tpdf|TreeBagger|treedisp|treefit|treeprune|treetest|treeval|trimmean|trnd|tstat|ttest|ttest2|unid(?:cdf|inv|pdf|rnd|stat)|unif(?:cdf|inv|it|pdf|rnd|stat)|vartest(?:2|n)?|wbl(?:cdf|fit|inv|like|pdf|rnd|stat)|wblplot|wishrnd|x2fx|xptread|zscore|ztest)\\b", 
  "^\\b(?:adapthisteq|analyze75info|analyze75read|applycform|applylut|axes2pix|bestblk|blockproc|bwarea|bwareaopen|bwboundaries|bwconncomp|bwconvhull|bwdist|bwdistgeodesic|bweuler|bwhitmiss|bwlabel|bwlabeln|bwmorph|bwpack|bwperim|bwselect|bwtraceboundary|bwulterode|bwunpack|checkerboard|col2im|colfilt|conndef|convmtx2|corner|cornermetric|corr2|cp2tform|cpcorr|cpselect|cpstruct2pairs|dct2|dctmtx|deconvblind|deconvlucy|deconvreg|deconvwnr|decorrstretch|demosaic|dicom(?:anon|dict|info|lookup|read|uid|write)|edge|edgetaper|entropy|entropyfilt|fan2para|fanbeam|findbounds|fliptform|freqz2|fsamp2|fspecial|ftrans2|fwind1|fwind2|getheight|getimage|getimagemodel|getline|getneighbors|getnhood|getpts|getrangefromclass|getrect|getsequence|gray2ind|graycomatrix|graycoprops|graydist|grayslice|graythresh|hdrread|hdrwrite|histeq|hough|houghlines|houghpeaks|iccfind|iccread|iccroot|iccwrite|idct2|ifanbeam|im2bw|im2col|im2double|im2int16|im2java2d|im2single|im2uint16|im2uint8|imabsdiff|imadd|imadjust|ImageAdapter|imageinfo|imagemodel|imapplymatrix|imattributes|imbothat|imclearborder|imclose|imcolormaptool|imcomplement|imcontour|imcontrast|imcrop|imdilate|imdisplayrange|imdistline|imdivide|imellipse|imerode|imextendedmax|imextendedmin|imfill|imfilter|imfindcircles|imfreehand|imfuse|imgca|imgcf|imgetfile|imhandles|imhist|imhmax|imhmin|imimposemin|imlincomb|imline|immagbox|immovie|immultiply|imnoise|imopen|imoverview|imoverviewpanel|impixel|impixelinfo|impixelinfoval|impixelregion|impixelregionpanel|implay|impoint|impoly|impositionrect|improfile|imputfile|impyramid|imreconstruct|imrect|imregconfig|imregionalmax|imregionalmin|imregister|imresize|imroi|imrotate|imsave|imscrollpanel|imshow|imshowpair|imsubtract|imtool|imtophat|imtransform|imview|ind2gray|ind2rgb|interfileinfo|interfileread|intlut|ippl|iptaddcallback|iptcheckconn|iptcheckhandle|iptcheckinput|iptcheckmap|iptchecknargin|iptcheckstrs|iptdemos|iptgetapi|iptGetPointerBehavior|iptgetpref|ipticondir|iptnum2ordinal|iptPointerManager|iptprefs|iptremovecallback|iptSetPointerBehavior|iptsetpref|iptwindowalign|iradon|isbw|isflat|isgray|isicc|isind|isnitf|isrgb|isrset|lab2double|lab2uint16|lab2uint8|label2rgb|labelmatrix|makecform|makeConstrainToRectFcn|makehdr|makelut|makeresampler|maketform|mat2gray|mean2|medfilt2|montage|nitfinfo|nitfread|nlfilter|normxcorr2|ntsc2rgb|openrset|ordfilt2|otf2psf|padarray|para2fan|phantom|poly2mask|psf2otf|qtdecomp|qtgetblk|qtsetblk|radon|rangefilt|reflect|regionprops|registration.metric.(?:MattesMutualInformation|MeanSquares)|registration.optimizer.(?:OnePlusOneEvolutionary|RegularStepGradientDescent)|rgb2gray|rgb2ntsc|rgb2ycbcr|roicolor|roifill|roifilt2|roipoly|rsetwrite|std2|stdfilt|strel|stretchlim|subimage|tformarray|tformfwd|tforminv|tonemap|translate|truesize|uintlut|viscircles|warp|watershed|whitepoint|wiener2|xyz2double|xyz2uint16|ycbcr2rgb)\\b", 
  "^\\b(?:bintprog|color|fgoalattain|fminbnd|fmincon|fminimax|fminsearch|fminunc|fseminf|fsolve|fzero|fzmult|gangstr|ktrlink|linprog|lsqcurvefit|lsqlin|lsqnonlin|lsqnonneg|optimget|optimset|optimtool|quadprog)\\b", "^[a-zA-Z][a-zA-Z0-9_]*(?:\\.[a-zA-Z][a-zA-Z0-9_]*)*"], kc = "lit;kwd;str;pln;pun;com;typ;atn;atv;tag;dec;opn;clo;fun_tbx;codeoutput;var pln;fun pln;syscmd;linecont;err;wrn;transpose;const;fun;ident;src".split(";"), Va = X.now || function() {
    return +new X();
  }, Tb, ja = {useRegExpCompat:!0, initRegExpTotal:0, initRegExpMax:0, initRegExpSource:"", initRegExpCount:0, codeBlocks:[]};
  var hb = Va();
  var Gb, ha, Pb, Qb, ec = 5 > D ? 60 : 5.5 > D ? 0 : 20, Ub, Ib, ac, bc;
  var Ya = [function(a) {
    p.RegExpCompat = Tb = a;
  }, function() {
    Ub = ca("^\\s*<");
    Ib = ca("\\S");
    ac = ca("^\\??prettify\\b");
    bc = ca("\\b(\\w+)=([\\w:.%+-]+)", "g");
  }];
  var mc = function() {
    var a = ha, b = a.U, c = lc(a.J, a.N), e = a.G = c.G;
    a.L = c.L;
    Pa(b, e) || (ha = y, J(Za, y, 0, !0));
  };
  var Hb = function() {
    var a = ha;
    a.W = a.G.match(a.F[1]) || [];
    a.H.push(a.K, 3);
    J(Qa, y, 2);
  };
  var wb = [];
  var Vb = function(a) {
    function b(k) {
      var q = k;
      0 <= k && (q = jc[k]);
      0 <= q[1] && (q[1] = c(q[1]));
      return q;
    }
    function c(k) {
      var q = k;
      return 0 <= k && (q = xb[k], !q.exec) ? (wb.push(k), k) : q;
    }
    var e = ha, h = ib[a];
    Ia(h) && (h = ib[a] = ib[h]);
    var f = h[0];
    if (0 <= f) {
      f = ic[f];
      if (0 <= f["-num"]) {
        var t = f["-num"];
        delete f["-num"];
        for (var g = -1; 9 > g;) {
          f["" + ++g] = t;
        }
      }
      h[0] = f;
    }
    for (var x in f) {
      f[x] = b(f[x]);
    }
    h[1] = c(h[1]);
    f = h[2];
    g = 0;
    for (t = f.length; g < t; ++g) {
      f[g] = b(f[g]);
    }
    wb.length ? J(bb, a, 2) : (e.F ? e.D && (e.D.A[0].F = h) : e.F = h, J(Hb, y, 1));
  };
  var lc = function(a, b) {
    function c(x) {
      var k = x.nodeType;
      if (1 === k) {
        if (!ma(x, "nocode")) {
          for (k = x.firstChild; k; k = k.nextSibling) {
            c(k);
          }
          k = u(x);
          if ("BR" === k || "LI" === k) {
            e[t] = "\n", f[t << 1] = h++, f[t++ << 1 | 1] = x;
          }
        }
      } else if (3 === k || 4 === k) {
        if (k = x.nodeValue) {
          k = b ? k.split("\r\n").join("\n").split("\r").join("\n") : k.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), e[t] = k, f[t << 1] = h, h += k.length, f[t++ << 1 | 1] = x;
        }
      }
    }
    var e = [], h = 0, f = [], t = 0;
    c(a);
    var g = e.join("");
    "\n" === g.charAt(g.length - 1) && (g = g.substr(0, g.length - 1));
    return {G:g, L:f};
  };
  var nc = function(a, b, c) {
    function e(k) {
      var q = k.nodeType;
      if (1 === q && !ma(k, "nocode")) {
        if ("BR" === u(k)) {
          h(k), k.parentNode && N(k);
        } else {
          for (k = k.firstChild; k; k = k.nextSibling) {
            e(k);
          }
        }
      } else if ((3 === q || 4 === q) && c) {
        var v = k.nodeValue, F = v.indexOf("\r\n"), U = 2;
        -1 === F && (F = v.indexOf("\n"), U = 1);
        -1 === F && (F = v.indexOf("\r"));
        -1 !== F && (q = v.substr(0, F), k.nodeValue = q, (v = v.substr(F + U)) && fa(k, v), h(k), q || N(k));
      }
    }
    function h(k) {
      function q(F, U) {
        var xa = U ? F.cloneNode(!1) : F, wa = F.parentNode;
        if (wa) {
          wa = q(wa, 1);
          var Wa = F.nextSibling;
          wa.appendChild(xa);
          for (var Xa = Wa; Xa; Xa = Wa) {
            Wa = Xa.nextSibling, wa.appendChild(Xa);
          }
        }
        return xa;
      }
      for (; !k.nextSibling;) {
        if (k = k.parentNode, !k) {
          return;
        }
      }
      k = q(k.nextSibling, 0);
      for (var v; (v = k.parentNode) && 1 === v.nodeType;) {
        k = v;
      }
      t.push(k);
    }
    for (var f = A.createElement("li"); a.firstChild;) {
      f.appendChild(a.firstChild);
    }
    for (var t = [f], g = 0; g < t.length; ++g) {
      e(t[g]);
    }
    if (b === (b | 0)) {
      if (10 <= b && 7.2 > R) {
        var x = A.createElement("ol");
        x.innerHTML = '<li value="' + b + '">' + f.innerHTML + "</li>";
        t[0] = x.firstChild;
      } else {
        G(f, "value", b);
      }
    }
    x = K(a, "ol", {className:"linenums"});
    a = Math.max(0, b - 1 | 0) || 0;
    g = 0;
    for (b = t.length; g < b; ++g) {
      f = t[g], ba(f, "L" + (g + a) % 10), f.firstChild || Z(f, "\u00a0"), x.appendChild(f);
    }
  };
  var fc = function() {
    var a = ha, b = a.G, c = b.length, e = 0, h = a.L, f = h.length, t = 0, g = a.H, x = g.length, k = 0;
    g[x] = c;
    var q, v;
    for (v = q = 0; v < x;) {
      g[v] !== g[v + 2] ? (g[q++] = g[v++], g[q++] = g[v++]) : v += 2;
    }
    x = q;
    for (v = q = 0; v < x;) {
      var F = g[v], U = g[v + 1];
      for (v += 2; v + 2 <= x && g[v + 1] === U;) {
        v += 2;
      }
      g[q++] = F;
      g[q++] = U;
    }
    g.length = q;
    a = a.J;
    x = "";
    if (a) {
      x = a.style.display;
      v = "display";
      if (8 > R || 5.5 > D) {
        v = Fa(v);
      }
      a.style[v] = "none";
    }
    for (; t < f;) {
      q = h[t + 2] || c;
      F = g[k + 2] || c;
      v = Math.min(q, F);
      U = h[t + 1];
      var xa;
      if (1 !== U.nodeType && (xa = b.substring(e, v))) {
        9 > D && (xa = xa.split("\n").join("\r"));
        var wa = sb(U, "span", {className:kc[g[k + 1]]}, xa);
        N(U);
        e < q && (h[t + 1] = fa(wa, b.substring(v, q)));
      }
      e = v;
      e >= q && (t += 2);
      e >= F && (k += 2);
    }
    if (a) {
      b = "display";
      c = x;
      if (8 > R || 5.5 > D) {
        b = Fa(b);
      }
      a.style[b] = c;
    }
    ha = y;
    J(Za, y, 3, !0);
  };
  var jb = [], kb;
  ja.readyTime = Va() - hb;
  pb.push(function(a) {
    if (a) {
      a = [L(A, "pre"), L(A, "code"), L(A, "xmp")];
      for (var b = 0; b < a.length; ++b) {
        for (var c = 0, e = a[b].length; c < e; ++c) {
          cc(a[b][c]);
        }
      }
      return !0;
    }
  });
  var cc = function(a) {
    jb.push(a);
    kb = jb.length;
    1 === kb && (Rb ? ea(Rb, Za) : Ya ? Ya.push(function() {
      ea(Za);
    }) : ea(Za));
  };
  var Za = function() {
    function a(x, k) {
      return (x.split(k)[1] || "").split(" ")[0];
    }
    if (!ha) {
      kb !== jb.length && Qb && Qb(kb - jb.length, kb);
      var b = jb.shift();
      if (b) {
        hb = Va();
        for (var c = {}, e = c, h = b; h = h.previousSibling;) {
          var f = h.nodeType, t = (7 === f || 8 === f) && h.nodeValue;
          if (t ? !ac.test(t) : 3 !== f || Ib.test(h.nodeValue)) {
            break;
          }
          if (t) {
            e = {};
            t.replace(bc, function(x, k, q) {
              e[k] = q;
            });
            break;
          }
        }
        if (e !== c || ma(b, "prettyprint") && !ma(b, "prettyprinted")) {
          c = !1;
          for (h = b.parentNode; h !== Ba; h = h.parentNode) {
            if (f = u(h), ("PRE" === f || "XMP" === f || "CODE" === f) && ma(h, "prettyprint")) {
              c = !0;
              break;
            }
          }
          if (!c) {
            c = b.className;
            ta(b, "prettyprinted");
            h = e.lang;
            if (!h) {
              h = a(c, "lang-") || a(c, "language-");
              var g;
              !h && (g = cb(b)) && "CODE" === u(g) && (h = a(g.className, "lang-") || a(g.className, "language-"));
            }
            f = u(b);
            "PRE" === f || "XMP" === f ? g = 1 : (g = b.currentStyle, f = A.defaultView, g = (g = g ? g.whiteSpace : f && f.getComputedStyle ? f.getComputedStyle(b, null).getPropertyValue("white-space") : 0) && "pre" === g.substr(0, 3));
            f = e.linenums;
            (f = "true" === f || +f) || (f = a(c, "linenums:") || ma(b, "linenums"), f = f.length ? +f : f);
            f && nc(b, f, g);
            ha = {U:h, J:b, X:f, N:g, K:0, I:0, O:{}, H:[]};
            ja.codeBlocks.push({elm:b, lang:h, readyTime:Va() - hb, decorateTime:0, decorateCount:0, updateDOMTime:0});
            J(mc);
            return;
          }
        }
        J(Za, y, 0, !0);
      } else {
        Pb && Pb(ja);
      }
    }
  };
  p.PR = {RegExpProxy:ca, prettifyElement:cc, registerCompleteHandler:function(a, b) {
    Pb = a;
    Qb = b;
  }};
  var Ob = A.scripts || L(A, "script");
  var ka = Ob[Ob.length - 1].src.split("/");
  --ka.length;
  "js" === ka[ka.length - 1] && --ka.length;
  (ka = ka.join("/")) && (ka += "/");
  oa("[p_assetUrl] " + ka);
  ob || O(Ba, "mob");
  yb(function() {
    var a;
    (a = Ua("logger")) || alert("#logger not found!");
    a ? (oa = bz, va = function(b) {
      K(a, "DIV", {style:{color:"red"}}, b);
    }, p.onerror = function(b, c, e) {
      va(b + ", " + c + ", " + e);
      return !0;
    }) : p.console ? (oa = console.log, va = console.error) : R ? (oa = H, va = opera.postError) : oa = va = H;
    for (; Ra.length;) {
      oa(Ra.shift());
    }
    for (; sa.length;) {
      va(sa.shift());
    }
    Ra = sa = y;
    function bz(b) {
      K(a, "DIV", y, b);
    }
    bz = !1;
  });
  6.1 > db && zb(p, "scroll", Sa);
  Yb(I);
  6.1 > db && zb(p, "scroll", Eb);
  Yb(Na);
  if (Kb) {
    var Rb = function(a) {
      p.RegExpCompat = bz;
      Rb = y;
      Zb(ka + "js/regexpcompat.js");
      function bz(b) {
        for (var c; c = Ya.shift();) {
          c(b);
        }
        Ya = y;
        ea(a);
        $b(ka + "js/regexpcompat.js");
      }
      bz = !1;
    };
  } else {
    p.RegExpCompat = function(a) {
      for (var b; b = Ya.shift();) {
        b(a);
      }
      Ya = y;
      $b(ka + "js/regexpcompat.js");
    }, Zb(ka + "js/regexpcompat.js");
  }
})(ua, this, function() {
}, this.RegExp, Date, document, parseFloat, Function, isFinite, setTimeout, clearTimeout, void 0);

