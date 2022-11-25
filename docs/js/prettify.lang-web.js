/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.pop||(Array.prototype.pop=function(){var a=this.length,b=this[a-1];a&&--this.length;return b});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
/** Code Preffity for ES2 [lang-web](github.com/ECMAScript2/es2-code-prettify) */
ua = [];
ua.conpare = function(W, p) {
  var T = 0, I, X, z = (W + "").split("."), ma = (p + "").split("."), ca = z.length;
  for (I = ma.length; "0" === z[ca - 1];) {
    --ca;
  }
  for (; "0" === ma[I - 1];) {
    --I;
  }
  for (X = ca < I ? ca : I; T < X; ++T) {
    var ya = z[T] - 0, k = ma[T] - 0;
    if (ya !== k) {
      return ya > k ? 1 : -1;
    }
  }
  return ca > I ? 1 : ca === I ? 0 : -1;
};
(function(W, p, T, I, X, z, ma, ca) {
  function ya(t, M, D) {
    D = z(t.split(M)[1]);
    return 0 <= D ? D : 0;
  }
  function k(t, M) {
    return 0 <= t.indexOf(M);
  }
  function bb(t) {
    return k(t, "Linux armv") || k(t, "Linux aarch") || k(t, "Linux i686") || k(t, "Linux x86_64");
  }
  function w(t, M) {
    for (var D in M) {
      if (D === t) {
        return !0;
      }
    }
  }
  function m(t, M) {
    var D = "", Y = -1, fa;
    if (t = t.split(M)[1]) {
      for (; fa = t.charCodeAt(++Y);) {
        if (48 <= fa && 57 >= fa || 46 === fa) {
          D += t.charAt(Y);
        } else {
          break;
        }
      }
      for (Y = D.length; Y;) {
        if (46 === D.charCodeAt(--Y)) {
          D = D.substr(0, Y);
        } else {
          break;
        }
      }
    }
    return D;
  }
  function za(t) {
    for (var M = arguments, D = 1, Y = M[0], fa; D < M.length; ++D) {
      0 > G(Y, fa = M[D]) && (Y = fa);
    }
    return Y;
  }
  function Ea(t) {
    return t === t + "" ? t : t === t - 0 ? "" + t : t.min && t.max ? t.min + "~" + t.max : t.min ? t.min + "~" : "~" + t.max;
  }
  var G = W.conpare, c = I.userAgent, H = I.appVersion, La = z(H) || 0, A = I.platform, Z = T.documentElement, Va = Z && Z.style, O = T.documentMode, Aa = X.width;
  X = X.height;
  var Wa = p.HTMLAudioElement, sa = p.performance, Ma = p.Int8Array, Na = p.ontouchstart !== ca, ha = m(H, "Version/") || m(c, "Version/"), Xa = p.operamini, aa = !Xa && p.opera, Fa = aa && (aa.version && "function" === typeof aa.version ? aa.version() : za(m(c, "Opera "), ha, La)), J = p.opr, Ga = !aa && (T.all || O);
  O = Ga && (O ? O : p.XMLHttpRequest ? T.getElementsByTagName ? 7 : 4 : T.compatMode ? 6 : (0).toFixed ? 5.5 : p.attachEvent ? 5 : 4);
  Z = !Ga && Z.msContentZoomFactor;
  var Ha = !Z && (p.chrome || p.chromium), na = !Ga && function() {
    for (var t in Va) {
      if (0 === t.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Ia = k(c, "UCWEB"), tb = Ia && m(c, " U2/"), cb = Ia && m(c, "; wds "), Ja = m(c.split("_").join("."), "; iPh OS "), F = m(c, "; Adr "), K = k(H, "YJApp-ANDROID"), P = k(A, "Android") || na && k(H, "Android") || K;
  F = m(A, "Android ") || m(H, "Android ") || m(c, "Android ") || F;
  var ta = k(A, "Linux"), Ba = "MacIntel" === A && I.standalone !== ca, Oa = na && m(c, "Goanna/"), da = !Oa && na && (m(c, "rv:") || m(c.substr(c.indexOf(") Gecko/") - 11), "; ")), db = m(c, "Firefox/"), x = m(c, "Opera/"), ub = p.FNRBrowser, U = ya(c, "AppleWebKit/"), Ca = m(c, "Chrome/"), vb = m(H, "Iron/"), eb = m(c, "OPR/"), Pa = m(H, "KHTML/"), fb = m(c.toLowerCase(), "iris");
  m(c, "FxiOS/");
  m(c, "CriOS/");
  m(c, "EdgiOS/");
  var gb = m(c, "Silk/"), ia = ya(c, "SamsungBrowser/"), ja = !ia && function() {
    for (var t = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    M, D = t.length; M = t[--D];) {
      if (k(c, M)) {
        return 2 > z(ha) ? ha : .9;
      }
    }
    t = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (D = t.length; M = t[--D];) {
      if (k(c, M)) {
        return ha;
      }
    }
  }(), hb = Ha && 534.3 >= U, oa = bb(A), ba = oa && !k(c, A) && bb(c);
  Na = Na && (U || na) && ba || !F && K;
  K = !!p.ReactNativeWebView;
  oa = oa && function() {
    for (var t in p) {
      if (0 === t.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var ka = (ba = p.puffinDevice) && ba.clientInfo;
  ka = (ba = ka && "iOS" === ka.os && ka.osVersion) && ka.model;
  var pa = !O && T.registerElement, qa = !O && T.execCommand, ib = p.webkitCancelAnimationFrame, wb = ta && pa && "11.0.696.34" === Ca, Qa = p._firefoxTV_playbackStateObserverJava, jb = ya(c, "diordnA ");
  if ("Nitro" === A) {
    var q = 1;
  } else if ("Nintendo DSi" === A) {
    q = 2;
    var n = x;
  } else if ("New Nintendo 3DS" === A || k(c, "iPhone OS 6_0") && 320 === Aa && 240 === X) {
    q = 4, n = m(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === A) {
    q = 3, n = m(c, "Version/"), U = 535;
  } else if ("Nintendo Swicth" === A) {
    q = 7, n = m(H, "NintendoBrowser/");
  } else if (p.wiiu) {
    q = 6;
    n = m(H, "NintendoBrowser/");
    var B = 15, C = m(H, "AppleWebKit/") || (ib ? 536 : 534);
    n || (n = ib ? 4 : 2, k(H, "Macintosh;") || k(H, "Windows NT") && k(H, "Touch"));
  } else if (aa && aa.wiiremote) {
    q = 5, n = m(c, "Wii; U; ; ");
  } else if (x = m(c, "PlayStation Vita ")) {
    q = 10, n = x;
  } else if (x = m(c, "(PlayStation Portable); ")) {
    q = 8;
    n = x;
    var Ra = 3.3;
  } else if (x = m(c, "PLAYSTATION 3; ") || m(c, "PLAYSTATION 3 ")) {
    q = 11, n = x, 0 > G("4.10", x) && (B = 26, C = x);
  } else if (k(c, "Xbox One")) {
    q = 15, n = 1;
  } else if (k(c, "Xbox")) {
    q = 14, n = 1;
  } else if (2 === La && k(c, "Sony/COM2/")) {
    q = 17;
    n = 2;
    Ra = 3.4;
    var Ka = !0;
  } else if (0 === A.indexOf("iP") || Ja || ba || Ba) {
    if (ba) {
      switch(n = ba, ka.substr(0, 4)) {
        case "iPho":
          var Q = 0;
          m(ka, Q);
          var L = !0;
          break;
        case "iPad":
          Q = 1;
          m(ka, Q);
          var R = !0;
          break;
        case "iPod":
          Q = 2;
          m(ka, Q);
          var Ya = !0;
      }
    } else {
      Ja ? n = Ja : (n = m(H.split("_").join("."), "OS "), w("isSecureContext", p), w("enableWebGL", p), w("sameOrigin", p));
      if (!n || ub) {
        n = p.PointerEvent ? 13 : p.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : I.sendBeacon ? 11.3 : p.WebAssembly ? 11.2 : p.HTMLMeterElement ? 10.3 : p.Proxy ? 10.2 : p.HTMLPictureElement ? 9.3 : ma.isNaN ? 9.2 : p.SharedWorker ? sa && sa.now ? 8 : 8.4 : qa ? 7.1 : p.webkitURL ? 6.1 : p.Worker ? 5.1 : Ma ? 4.3 : Wa ? 4.1 : 3.2;
      }
      var V = Aa === 1.5 * X || 1.5 * Aa === X;
      0 === A.indexOf("iPhone") ? (Q = 0, L = !0) : 0 === A.indexOf("iPad") || Ba ? (Q = 1, R = !0) : 0 === A.indexOf("iPod") && (Q = 2, Ya = !0);
    }
    B = !ba && (I.standalone || (R || 12 > n) && w("webkitFullscreenEnabled", T) || 11 <= n && 13 > n && I.mediaDevices) ? 16 : 17;
    q = 24;
    C = n;
  } else if (k(c, "Kobo")) {
    q = 18, B = 21, C = 2.2, P = !0;
  } else if (k(c, "EBRD")) {
    q = 19, B = 21, C = 2.2;
  } else if (x = m(c, "CrOS x86_64 ") || m(c, "CrOS aarch64 ") || m(c, "CrOS i686 ") || m(c, "CrOS armv7l ")) {
    q = 28, n = x;
  } else if (p.onmoztimechange !== ca) {
    q = 29, n = 18.1 > da ? "1.0.1" : 19 > da ? 1.1 : 27 > da ? 1.2 : 29 > da ? 1.3 : 31 > da ? 1.4 : 33 > da ? 2 : 35 > da ? 2.1 : 38 > da ? 2.2 : 45 > da ? 2.5 : 2.6, k(c, "Mobile") ? L = !0 : k(c, "Tablet") ? R = !0 : k(c, "TV");
  } else if (p.palmGetResource) {
    q = 30, n = m(c, "webOS/") || m(c, "WEBOS") || m(c, "hpwOS/"), k(c, "webOS.TV") || k(c, "/SmartTV") || (L = !0);
  } else if (x = m(c, "Tizen ")) {
    q = 31, n = x, B = 24, C = ia, L = !0;
  } else if (x = m(c, "Windows Phone ") || m(H, "Windows Phone OS ") || cb) {
    q = 23, n = x, L = !0;
  } else if (Z && "ARM" === A) {
    q = 23, n = 10, L = !0;
  } else if (Ga && k(H, "ZuneWP")) {
    q = 23, n = 11 === O ? 8.1 : 10 === O ? 8 : 9 === O ? 7.5 : 7 === O ? 7 : "?", L = !0;
  } else if (k(c, "FOMA;")) {
    q = 16, L = !0;
  } else if (k(c, "SoftBank;")) {
    q = 16, L = !0;
  } else if (k(c, "KFMUWI")) {
    var la = !0;
    n = 6.3;
    var N = R = !0;
  } else if (k(c, "KFKAWI")) {
    la = !0, n = 6, N = R = !0;
  } else if (k(c, "KFSUWI") || k(c, "KFAUWI") || k(c, "KFDOWI")) {
    la = !0, n = 5, N = R = !0;
  } else if (k(c, "KFGIWI")) {
    la = !0, n = 5, N = R = !0;
  } else if (k(c, "KFARWI") || k(c, "KFSAWA") || k(c, "KFSAWI")) {
    la = !0, n = 5 <= z(F) ? 5 : 4, N = R = !0;
  } else if (k(c, "KFSOWI") || k(c, "KFTHWA") || k(c, "KFTHWI") || k(c, "KFAPWA") || k(c, "KFAPWI")) {
    la = !0, n = 3, N = R = !0;
  } else if (k(c, "KFOT") || k(c, "KFTT") || k(c, "KFJWA") || k(c, "KFJWI")) {
    la = !0, n = 2, N = R = !0;
  } else if (k(c, "Kindle Fire")) {
    la = !0, n = 1, N = R = !0;
  } else if (x = m(c, "Kindle/")) {
    q = 20, n = x, B = 21, C = 2.2;
  } else if (Qa) {
    la = !0, n = F || jb, N = !0;
  } else if (k(c, "AmazonWebAppPlatform") || k(c, "; AFT")) {
    la = !0, n = F, N = !0;
  } else if (k(c, "MeeGo")) {
    q = 32;
  } else if (k(c, "Maemo")) {
    q = 33;
  } else if (0 === c.indexOf("Windows Mobile;") || fb) {
    q = 22, Ka = !0;
  } else if ("WinCE" === A) {
    q = 21, Ka = !0;
  } else if (0 === A.indexOf("Win")) {
    q = "Win16" === A ? 35 : "Win32" === A ? 36 : "Win64" === A ? 37 : 0, n = m(c, "Windows NT ") || m(c, "Windows ");
  } else if (0 === A.indexOf("Mac")) {
    q = "Mac68K" === A ? 39 : "MacPowerPC" === A || "MacPPC" === A ? 38 : "MacIntel" === A ? 40 : 0;
    if (x = m(c.split("_").join("."), "Mac OS X ")) {
      n = x;
    }
    var kb = !0;
  } else if (k(c, "BlackBerry") || k(c, "BB10")) {
    q = 34, n = ha, L = !0;
  } else if (k(c, "SunOS") || k(c, "Sun Solaris")) {
    q = 42;
  } else if (k(c, "FreeBSD")) {
    q = 43;
  } else if (k(c, "OpenBSD")) {
    q = 44;
  } else if (k(c, "NetBSD")) {
    q = 45;
  } else if (P && na) {
    k(c, "Android 4.4;") ? V = {min:2.3} : 4 <= z(F) ? V = F : V = {min:2.2}, n = V;
  } else if (P && aa) {
    F ? V = F : V = {min:1.6}, n = V, k(c, "Tablet") ? R = !0 : L = !0;
  } else if (F) {
    n = F, P = !0;
  } else if (ta && Na || K || oa) {
    var va = !0;
    ia ? V = {min:4.4} : Ha && !hb || J || eb ? V = {min:4} : (V = F = Va.touchAction !== ca ? {min:5} : pa ? 4.4 : Ma ? I.connection ? p.searchBoxJavaBridge_ || Ha ? ma.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= U ? 3 : 533 <= U ? Wa ? 2.3 : 2.2 : 530 <= U ? 2 : 1.5, ja && (B = 24, C = ja));
    n = V;
    P = !0;
  } else {
    wb ? (n = {min:5}, va = P = !0) : ta && (k(c, "Ubuntu") ? q = 46 : (x = m(c, "Mint/")) ? (q = 47, n = x) : (x = m(c, "Fedora/")) ? (q = 48, n = x) : q = k(c, "Gentoo") ? 49 : 50);
  }
  la || P && va && gb ? q = 27 : P && (q = q || 26);
  B || (N = N || P, aa ? (B = N || Ka || L || R ? 9 : 8, C = Fa) : Ga ? (V = ya(H, "Trident/") + 4, B = Ka || L || R || Ya ? 3 : kb && 5 <= O ? 7 : 2, C = O) : Z ? (B = 23 === q ? 6 : 5, C = m(H, "Edge/")) : Oa ? (B = 13, C = Oa) : na ? (B = N ? 12 : 11, C = da || db) : ia ? (B = 24, C = ia) : (x = Ra || m(c, "NetFront/")) ? (B = 18, C = x) : (x = m(c, "iCab")) ? (B = 19, C = x) : (x = za(m(c, "Opera Mini/"), m(c, "Opera Mobi/")) || Xa && ha) ? (B = 10, C = x, q || (k(c, "iPhone") ? Q = 0 : k(c, 
  "iPad") ? Q = 1 : k(c, "iPod") && (Q = 2), Q && (q = 24))) : Ia ? (B = 25, C = tb) : Pa ? (B = 14, C = La) : P && hb ? (B = 21, C = F) : Ha || J || eb ? (B = N ? 22 : 20, C = Ca || vb) : P && pa ? (B = 23, C = 5 > z(F) ? F : Ca) : P && (ha || va) ? (B = 21, C = F) : Ca ? (B = N ? 22 : 20, C = Ca) : U && (B = 15, C = U));
  q && (W[2] = q, n && (W[3] = Ea(n)));
  B && (W[0] = B, C && (W[1] = Ea(C)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(W, p, T, I, X, z, ma, ca, ya, k, bb, w) {
  function m(a) {
    M(p, "load", m);
    m = w;
    Ma(U, a, !0);
    lb = U = w;
  }
  function za() {
    for (var a, b = 0, e = +new X(); b < oa.length;) {
      e < oa[0].t ? ++b : (a = oa.splice(b, 1)[0], a.f(a.p));
    }
    pa = oa.length ? k(za, ba) : 0;
  }
  function Ea() {
    for (var a, b = 0; b < Pa.length; ++b) {
      a = Pa[b], a.f();
    }
  }
  function G(a) {
    if (W[0] === a) {
      return F === F + "" ? ma(F) : F;
    }
  }
  function c(a) {
    var b = W[3];
    if (W[2] === a) {
      return b === b + "" ? ma(b) : b;
    }
  }
  function H() {
    ia && (ia = clearInterval(ia));
  }
  function La() {
    pa && (pa = bb(pa));
  }
  function A(a, b, e) {
    var d = ["<", a], g = 1, f, u;
    if (b) {
      for (f in b) {
        var l = b[f];
        if (null != l && "" !== l) {
          if ("style" === f) {
            d[++g] = ' style="';
            for (u in l) {
              for (var y = ++g, h, r = [], v = u.split(""), E = v.length; E;) {
                h = v[--E], "A" <= h && "Z" >= h && (h = "-" + h.toLowerCase()), r[E] = h;
              }
              d[y] = r.join("") + ":" + l[u] + ";";
            }
            d[++g] = '"';
          } else {
            "className" === f && (f = "class"), d[++g] = " " + f + '="' + l + '"';
          }
        }
      }
    }
    d[++g] = ">";
    null != e && (qa && "font" !== a ? d[++g] = "<FONT>" + e + "</FONT>" : d[++g] = e);
    d[++g] = "</" + a + ">";
    return d.join("");
  }
  function Z(a, b) {
    var e = "*" === b && 6 > K ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), d = [], g = 0, f;
    for (f = e.length; g < f; ++g) {
      d[g] = e[g];
    }
    return d;
  }
  function Va(a) {
    return qa ? a.parentElement : a.parentNode;
  }
  function O(a, b, e, d, g, f) {
    if (qa) {
      var u = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
      var l = jb(2 > a ? Qa(b) : b);
      l = 2 > a ? l.indexOf(b) + a : l.length;
      b.insertAdjacentHTML(u, A(e, d, g));
      b = jb(b)[l];
      null != g && ("font" === e ? b.nodeType = 3 : b.children[0].nodeType = 3);
    } else if (Ka) {
      b = z.createElement(A(e, d));
    } else {
      b = f ? z.createElementNS("http://www.w3.org/2000/svg", e) : z.createElement(e);
      if (d) {
        for (u in d) {
          if ((e = d[u]) || 0 === e) {
            switch(u) {
              case "class":
              case "className":
                V(b, e);
                break;
              case "style":
                a = b.style;
                for (l in e) {
                  a[l] = e[l];
                }
                break;
              default:
                Ya(b, u, e);
            }
          }
        }
      }
      Q || null != g && Aa(b, g);
    }
    return b;
  }
  function Aa(a, b) {
    if (qa) {
      return O(2, a, "font", w, b);
    }
    var e = z.createTextNode("" + b);
    a.appendChild(e);
    return e;
  }
  function Wa(a, b) {
    9 > K ? a.className = b : a.setAttribute("class", b);
  }
  function sa(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function Ma(a, b, e) {
    for (var d = 0; d < a.length; ++d) {
      !0 === a[d](b) && (a.splice(d, 1), --d);
    }
    e && (a.length = 0);
  }
  function Na() {
    var a = va, b;
    for (va = []; b = a.shift();) {
      Ma(b, a.shift(), a.shift());
    }
  }
  function ha(a) {
    var b = a || event;
    a = D[b.type];
    var e = -1, d, g;
    K ? (b.preventDefault = function() {
      b.returnValue = !1;
    }, b.stopPropagation = function() {
      b.cancelBubble = !0;
    }) : fa && (b.C = b.stopPropagation, b.stopPropagation = function() {
      g = !0;
    });
    for (; d = a[++e];) {
      d.j === this ? (this.h = d.i, this.h(b), this.h = cb, this.h = w) : 7.2 > ta && this === z && d.j === p && (p.h = d.i, p.h(b), delete p.h);
    }
    if (K) {
      return b.preventDefault = b.stopPropagation = w, b.returnValue;
    }
    fa && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (mb = !0), g && !mb && b.C(), b.C = b.stopPropagation = w);
  }
  function Xa() {
    var a = 9 === kb.offsetWidth;
    N !== a && (a = N = a, U || va.length || ja(Na), va.push(Ca, a, void 0));
  }
  function aa(a) {
    return a === "" + a;
  }
  function Fa(a, b) {
    return nb ? new Fb(a, b) : new I(a, b);
  }
  function J(a, b, e, d) {
    if (Gb() - Hb < Qb && !d) {
      return a(b);
    }
    ja(Ga, {H:a, J:b});
  }
  function Ga(a) {
    Hb = Gb();
    a.H(a.J);
  }
  function Ha(a, b) {
    a && Za[a] || (a = Ib.test(b) ? "default-markup" : "default-code");
    var e = !!Za[a];
    e && J(Jb, a, 0, !0);
    return e;
  }
  function na() {
    function a(wa, Sa, Ta) {
      Sa && (b.g = b.g || [], b.g.push({l:b, v:b.v, D:1, s:u, A:wa, o:Sa, m:Ta, F:{}, u:0}));
    }
    var b = ea, e = b.m, d = e[0], g = e[2], f = b.A, u = b.s, l = b.K.shift(), y = b.F;
    if (l) {
      var h = y[l], r;
      if (!(0 <= h)) {
        if (r = d[l.charAt(0)]) {
          var v = l.match(r[1]);
          h = r[0];
        } else {
          for (h = 0, d = -1; r = g[++d];) {
            if (v = l.match(r[1])) {
              h = r[0];
              break;
            }
          }
        }
        !(r = aa(h)) || v && aa(v[1]) || (r = !1, h = 11);
        r || (y[l] = h);
      }
      g = b.u;
      y = l.length;
      b.u += y;
      if (r) {
        r = v[1];
        d = l.indexOf(r);
        var E = r.length, S = d + E;
        v[2] && (S = y - v[2].length, d = S - E);
        a(f + g, l.substr(0, d), e);
        if (E && Ha(h, r)) {
          a(f + g + d, r);
          var xa = !0;
        }
        a(f + g + S, l.substr(S), e);
        b.g && b.g.length && (ea = b.g.shift());
        xa || (ea !== b ? J(xb, w, 2) : J(na, w, 2));
      } else {
        u.push(f + g, h), J(na, w, 2);
      }
    } else {
      b.l ? (ea = b.l.g.shift()) ? J(xb, w, 2) : (ea = b.l, J(na, w, 2)) : J(Rb, w, 2);
    }
  }
  function Ia(a) {
    if (ob.length) {
      var b = ob.shift(), e = pb[b];
      if (e.pop) {
        pb[b] = Fa(e[0], e[1]);
      } else if (aa(e)) {
        pb[b] = Fa(e);
      } else {
        return Ia(a);
      }
      J(Ia, a, 1);
    } else {
      J(Jb, a);
    }
  }
  function tb(a) {
    for (var b, e = a.firstChild; e; e = e.nextSibling) {
      var d = e.nodeType;
      b = 1 === d ? b ? a : e : 3 === d ? Kb.test(e.nodeValue) ? a : b : b;
    }
    return b === a ? w : b;
  }
  var cb = T, Ja = z.body, F = W[1], K = G(2) || G(3), P = G(7);
  G(5) || G(6);
  var ta = G(8) || G(9), Ba = G(11) || G(12);
  Ba && W.conpare(F, "1.9.1");
  G(13);
  var Oa = G(15), da = G(16) || G(17);
  G(10) || G(25);
  var db = G(20) || G(22);
  db || G(23) || G(21) || G(24);
  db && ma(navigator.userAgent.split("Edg/")[1]);
  ma(navigator.appVersion.split("Trident/")[1]);
  c(35) || c(36) || c(37);
  var x = !K && !P && (new ca('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), ub = c(1) || c(2) || c(3) || c(4) || c(8) || c(9) || c(10), U = [], Ca = [];
  var vb = function(a) {
    Pa.length || (ia = setInterval(Ea, fb));
    Pa.push({f:a, G:++gb});
    return gb;
  };
  var eb = function() {
    ia && (H(), ia = setInterval(Ea, fb));
  };
  var Pa = [], fb = 500, gb = 0, ia;
  if (5 > K || P) {
    p._wdb_onlooptimer = Ea, Ea = "_wdb_onlooptimer()";
  }
  var ja = function(a, b, e) {
    oa.length || (pa = k(za, ba));
    oa.push({f:a, p:b, G:++ka, t:+new X() + (ba < e ? e : ba)});
    return ka;
  };
  var hb = function() {
    pa && (La(), pa = k(za, ba));
  };
  var oa = [], ba = 16, ka = 0, pa;
  if (5 > K || P) {
    p._wdb_ontimer = za, za = "_wdb_ontimer()";
  }
  var qa = 5 > K;
  var ib = Z(z, "html")[0];
  var wb = Z(z, "head")[0];
  var Qa = Va;
  var jb = function(a) {
    a = qa ? a.children : a.childNodes;
    for (var b = [], e = a.length; e;) {
      b[--e] = a[e];
    }
    return b;
  };
  var q = function(a, b, e, d, g) {
    b = O(2, a, b, e, d, g);
    qa || (a.appendChild(b), Q && null != d && Aa(b, d));
    return b;
  };
  var n = function(a, b, e, d, g) {
    b = O(0, a, b, e, d, g);
    qa || (Va(a).insertBefore(b, a), Q && null != d && Aa(b, d));
    return b;
  };
  var B = Aa;
  var C = function(a, b) {
    var e;
    if (qa) {
      return O(1, a, "font", w, b);
    }
    var d = z.createTextNode("" + b);
    (e = a.nextSibling) ? Qa(a).insertBefore(d, e) : Qa(a).appendChild(d);
    return d;
  };
  var Ra = function(a) {
    qa ? a.outerHTML = "" : Qa(a).removeChild(a);
  };
  var Ka = 9 > K, Q = Ka;
  var L = function(a) {
    return a.tagName.toUpperCase();
  };
  var R = function(a, b) {
    return a.getAttribute(b) || "";
  };
  var Ya = function(a, b, e) {
    a.setAttribute(b, e);
  };
  var V = Wa;
  var la = function(a, b) {
    var e;
    if (!sa(a, b)) {
      if (e = a.className) {
        b = " " + b;
      }
      Wa(a, e + b);
    }
  };
  var N, kb, va = [];
  U.push(function() {
    kb = q(Ja, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
    lb(function() {
      va.length && ja(Na);
    });
  });
  var t = function(a, b, e, d) {
    if (Lb) {
      a.addEventListener(b, e, d ? x ? d : d.capture : !1);
    } else {
      var g = {j:a, i:e};
      d = D[b];
      var f = "on" + b, u, l;
      if (d) {
        for (u = d.length; l = d[--u];) {
          if (l.j === a && l.i === e) {
            return;
          }
        }
        D[b].push(g);
      } else {
        D[b] = d = [g], Y || (b = a[f], "function" === typeof b && b !== ha && d.unshift({j:a, i:b}));
      }
      Y ? a.attachEvent(f, ha) : a[f] = ha;
    }
  };
  var M = function(a, b, e, d) {
    if (Lb) {
      a.removeEventListener(b, e, d ? x ? d : d.capture : !1);
    } else {
      d = D[b];
      b = "on" + b;
      var g, f, u;
      if (d) {
        for (g = d.length; f = d[--g];) {
          f.j === a && (f.i === e ? d.splice(g, 1) : u = !0);
        }
        u || (Y ? a.detachEvent(b, ha) : (a[b] = cb, a[b] = null));
      }
    }
  };
  var D = {}, Y = !1, fa = 525.13 > Oa, Lb = !fa && !P && p.addEventListener, mb;
  fa && ib.addEventListener("click", function(a) {
    if (mb) {
      return mb = !1, a.preventDefault(), !1;
    }
  });
  var lb = function(a) {
    U.push(a);
  };
  var Mb = function(a) {
    qb && qb.push(a);
  };
  var qb = [];
  if (419.3 >= Oa) {
    var rb = function() {
      if (rb) {
        var a = z.readyState;
        "loaded" === a || "complete" === a ? (rb = w, m()) : ja(rb);
      }
    };
    ja(rb);
  } else {
    t(p, "load", m);
  }
  K || .9 <= Ba && 1.8 > Ba ? t(p, "unload", function(a) {
    Ma(qb, a, !0);
  }) : qb = w;
  lb(function() {
    Xa();
    vb(Xa);
  });
  var Sb = Ba && 0 >= W.conpare(F, "0.9");
  var yb = !(7.2 > ta || Sb);
  var Nb = function(a) {
    zb ? z.write('<script src="' + a + '">\x3c/script>') : U || sb.length ? sb.push(a) : Ab(a);
  };
  var Ob = function() {
    zb || Ab(sb.shift());
  };
  var zb = !yb, Tb = yb && 7.5 > ta;
  if (!zb) {
    var sb = [];
    lb(function() {
      Ab(sb.shift());
    });
    var Ab = function(a) {
      a && (Tb ? Bb[0].src = a : q(wb, "script", {src:a}));
    };
  }
  var nb = !I || .9 > Ba || 8 > ta || 5.5 > K;
  var Za = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
  var Ub = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], Vb = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
  26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], pb = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
  "^\\s+", ["(?:(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$)))|(?:\\s+)|(?:\\/\\/[^\\r\\n]*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:(?:^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(?:\\/(?=[^/*\\n\\r])(?:[^/\\x5B\\x5C\\n\\r]|\\x5C[\\S\\s]|\\x5B(?:[^\\x5C\\x5D\\n\\r]|\\x5C[\\S\\s])*(?:\\x5D|$))+\\/))|(?:(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|async|await|constructor|debugger|enum|eval|export|from|function|get|import|implements|instanceof|interface|let|null|of|set|undefined|var|with|yield|Infinity|NaN)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*(?!s*\\/))|(?:[\x00-\uffff])", 
  "g"], "^\\/\\/[^\\r\\n]*", "^\\/\\*[\\s\\S]*?(?:\\*\\/|$)", "^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(\\/(?=[^/*\\n\\r])(?:[^/\\x5B\\x5C\\n\\r]|\\x5C[\\S\\s]|\\x5B(?:[^\\x5C\\x5D\\n\\r]|\\x5C[\\S\\s])*(?:\\x5D|$))+\\/)", "^(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|async|await|constructor|debugger|enum|eval|export|from|function|get|import|implements|instanceof|interface|let|null|of|set|undefined|var|with|yield|Infinity|NaN)\\b", 
  ["^@[a-z_$][a-z_$@0-9]*", "i"], "^(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b)", ["^[a-z_$][a-z_$@0-9]*", "i"], "^\\\\[\\s\\S]?", "^.[^\\s\\w.$@'\"`/\\\\]*(?!s*\\/)", ["(?:[^<?]+)|(?:<!\\w[^>]*(?:>|$))|(?:<\\!--[\\s\\S]*?(?:-\\->|$))|(?:<\\?(?:[\\s\\S]+?)(?:\\?>|$))|(?:<%(?:[\\s\\S]+?)(?:%>|$))|(?:(?:<[%?]|[%?]>))|(?:<xmp\\b[^>]*>(?:[\\s\\S]+?)<\\/xmp\\b[^>]*>)|(?:<script\\b[^>]*>(?:[\\s\\S]*?)(?:<\\/script\\b[^>]*>))|(?:<style\\b[^>]*>(?:[\\s\\S]*?)(?:<\\/style\\b[^>]*>))|(?:(?:<\\/?[a-z][^<>]*>))|(?:[\x00-\uffff])", 
  "gi"], "^[^<?]+", "^<!\\w[^>]*(?:>|$)", "^<\\!--[\\s\\S]*?(?:-\\->|$)", "^<\\?([\\s\\S]+?)(?:\\?>|$)", "^<%([\\s\\S]+?)(?:%>|$)", "^(?:<[%?]|[%?]>)", ["^<xmp\\b[^>]*>([\\s\\S]+?)<\\/xmp\\b[^>]*>", "i"], ["^<script\\b[^>]*>([\\s\\S]*?)(<\\/script\\b[^>]*>)", "i"], ["^<style\\b[^>]*>([\\s\\S]*?)(<\\/style\\b[^>]*>)", "i"], ["^(<\\/?[a-z][^<>]*>)", "i"], "^[ \\t\\r\\n\\f]+", ["(?:[ \\t\\r\\n\\f]+)|(?:\\\"(?:[^\\n\\r\\f\\\\\\\"]|\\\\(?:\\r\\n?|\\n|\\f)|\\\\[\\s\\S])*\\\")|(?:\\'(?:[^\\n\\r\\f\\\\\\']|\\\\(?:\\r\\n?|\\n|\\f)|\\\\[\\s\\S])*\\')|(?:url\\((?:[^\\)\\\"\\']+)\\))|(?:(?:url|rgb|\\!important|@import|@page|@media|@charset|inherit)(?=[^\\-\\w]|$))|(?:(?:-?(?:[_a-z]|(?:\\\\[0-9a-f]+ ?))(?:[_a-z0-9\\-]|\\\\(?:\\\\[0-9a-f]+ ?))*)\\s*:)|(?:\\/\\*[^*]*\\*+(?:[^\\/*][^*]*\\*+)*\\/)|(?:(?:\x3c!--|--\x3e))|(?:(?:\\d+|\\d*\\.\\d+)(?:%|[a-z]+)?)|(?:#(?:[0-9a-f]{3}){1,2}\\b)|(?:-?(?:[_a-z]|(?:\\\\[\\da-f]+ ?))(?:[_a-z\\d\\-]|\\\\(?:\\\\[\\da-f]+ ?))*)|(?:[^\\s\\w\\'\\\"]+)|(?:[\x00-\uffff])", 
  "gi"], '^\\"(?:[^\\n\\r\\f\\\\\\"]|\\\\(?:\\r\\n?|\\n|\\f)|\\\\[\\s\\S])*\\"', "^\\'(?:[^\\n\\r\\f\\\\\\']|\\\\(?:\\r\\n?|\\n|\\f)|\\\\[\\s\\S])*\\'", ["^url\\(([^\\)\\\"\\']+)\\)", "i"], ["^(?:url|rgb|\\!important|@import|@page|@media|@charset|inherit)(?=[^\\-\\w]|$)", "i"], ["^(-?(?:[_a-z]|(?:\\\\[0-9a-f]+ ?))(?:[_a-z0-9\\-]|\\\\(?:\\\\[0-9a-f]+ ?))*)\\s*:", "i"], "^\\/\\*[^*]*\\*+(?:[^\\/*][^*]*\\*+)*\\/", "^(?:\x3c!--|--\x3e)", ["^(?:\\d+|\\d*\\.\\d+)(?:%|[a-z]+)?", "i"], ["^#(?:[0-9a-f]{3}){1,2}\\b", 
  "i"], ["^-?(?:[_a-z]|(?:\\\\[\\da-f]+ ?))(?:[_a-z\\d\\-]|\\\\(?:\\\\[\\da-f]+ ?))*", "i"], "^[^\\s\\w\\'\\\"]+", ["(?:(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$)))|(?:\\s+)|(?:(?:null|true|false)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*)|(?:[\x00-\uffff])", 
  "g"], "^(?:null|true|false)\\b", "^.[^\\s\\w.$@'\"`/\\\\]*", ["(?:[\\s\\S]+)|(?:[\x00-\uffff])", "g"], "^[\\s\\S]+", "^[\\s]+", "^(?:\\\"[^\\\"]*\\\"?|\\'[^\\']*\\'?)", ["(?:[\\s]+)|(?:(?:\\\"[^\\\"]*\\\"?|\\'[^\\']*\\'?))|(?:^<\\/?[a-z](?:[\\w.:-]*\\w)?|\\/?>$)|(?:(?!style[\\s=]|on)[a-z](?:[\\w:-]*\\w)?)|(?:=\\s*(?:[^>\\'\\\"\\s]*(?:[^>\\'\\\"\\s\\/]|\\/(?=\\s))))|(?:[=<>\\/]+)|(?:on\\w+\\s*=\\s*\\\"(?:[^\\\"]+)\\\")|(?:on\\w+\\s*=\\s*\\'(?:[^\\']+)\\')|(?:on\\w+\\s*=\\s*(?:[^\\\"\\'>\\s]+))|(?:style\\s*=\\s*\\\"(?:[^\\\"]+)\\\")|(?:style\\s*=\\s*\\'(?:[^\\']+)\\')|(?:style\\s*=\\s*(?:[^\\\"\\'>\\s]+))|(?:[\x00-\uffff])", 
  "gi"], ["^^<\\/?[a-z](?:[\\w.:-]*\\w)?|\\/?>$", "i"], ["^(?!style[\\s=]|on)[a-z](?:[\\w:-]*\\w)?", "i"], "^=\\s*([^>\\'\\\"\\s]*(?:[^>\\'\\\"\\s\\/]|\\/(?=\\s)))", "^[=<>\\/]+", ['^on\\w+\\s*=\\s*\\"([^\\"]+)\\"', "i"], ["^on\\w+\\s*=\\s*\\'([^\\']+)\\'", "i"], ["^on\\w+\\s*=\\s*([^\\\"\\'>\\s]+)", "i"], ['^style\\s*=\\s*\\"([^\\"]+)\\"', "i"], ["^style\\s*=\\s*\\'([^\\']+)\\'", "i"], ["^style\\s*=\\s*([^\\\"\\'>\\s]+)", "i"], "^(?:\\'(?:[^\\\\\\']|\\\\[\\s\\S])*(?:\\'|$)|\\\"(?:[^\\\\\\\"]|\\\\[\\s\\S])*(?:\\\"|$)|\\`(?:[^\\\\\\`]|\\\\[\\s\\S])*(?:\\`|$))", 
  "^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\\b|[^\\r\\n]*)", ["(?:(?:\\'(?:[^\\\\\\']|\\\\[\\s\\S])*(?:\\'|$)|\\\"(?:[^\\\\\\\"]|\\\\[\\s\\S])*(?:\\\"|$)|\\`(?:[^\\\\\\`]|\\\\[\\s\\S])*(?:\\`|$)))|(?:#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\\b|[^\\r\\n]*))|(?:\\s+)|(?:<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h(?:h|pp|\\+\\+)?|[a-z]\\w*)>)|(?:\\/\\/[^\\r\\n]*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:(?:^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(?:\\/(?=[^/*\\n\\r])(?:[^/\\x5B\\x5C\\n\\r]|\\x5C[\\S\\s]|\\x5B(?:[^\\x5C\\x5D\\n\\r]|\\x5C[\\S\\s])*(?:\\x5D|$))+\\/))|(?:(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|alignas|alignof|align_union|asm|axiom|bool|concept|concept_map|const_cast|constexpr|decltype|delegate|dynamic_cast|explicit|export|friend|generic|late_check|mutable|namespace|noexcept|noreturn|nullptr|property|reinterpret_cast|static_assert|static_cast|template|typeid|typename|using|virtual|where|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|add|alias|as|ascending|async|await|base|bool|by|byte|checked|decimal|delegate|descending|dynamic|event|finally|fixed|foreach|from|get|global|group|implicit|in|interface|internal|into|is|join|let|lock|null|object|out|override|orderby|params|partial|readonly|ref|remove|sbyte|sealed|select|set|stackalloc|string|select|uint|ulong|unchecked|unsafe|ushort|value|var|virtual|where|yield|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|assert|boolean|byte|extends|finally|final|implements|import|instanceof|interface|null|native|package|strictfp|super|synchronized|throws|transient|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|async|await|constructor|debugger|enum|eval|export|from|function|get|import|implements|instanceof|interface|let|null|of|set|undefined|var|with|yield|Infinity|NaN|caller|delete|die|do|dump|elsif|eval|exit|foreach|for|goto|if|import|last|local|my|next|no|our|print|package|redo|require|sub|undef|unless|until|use|wantarray|while|BEGIN|END|break|continue|do|else|for|if|return|while|and|as|assert|class|def|del|elif|except|exec|finally|from|global|import|in|is|lambda|nonlocal|not|or|pass|print|raise|try|with|yield|False|True|None|break|continue|do|else|for|if|return|while|alias|and|begin|case|class|def|defined|elsif|end|ensure|false|in|module|next|nil|not|or|redo|rescue|retry|self|super|then|true|undef|unless|until|when|yield|BEGIN|END|break|continue|do|else|for|if|return|while|case|done|elif|esac|eval|fi|function|in|local|set|then|until)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*(?!s*\\/))|(?:[\x00-\uffff])", 
  "g"], "^<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h(?:h|pp|\\+\\+)?|[a-z]\\w*)>", "^(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|alignas|alignof|align_union|asm|axiom|bool|concept|concept_map|const_cast|constexpr|decltype|delegate|dynamic_cast|explicit|export|friend|generic|late_check|mutable|namespace|noexcept|noreturn|nullptr|property|reinterpret_cast|static_assert|static_cast|template|typeid|typename|using|virtual|where|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|add|alias|as|ascending|async|await|base|bool|by|byte|checked|decimal|delegate|descending|dynamic|event|finally|fixed|foreach|from|get|global|group|implicit|in|interface|internal|into|is|join|let|lock|null|object|out|override|orderby|params|partial|readonly|ref|remove|sbyte|sealed|select|set|stackalloc|string|select|uint|ulong|unchecked|unsafe|ushort|value|var|virtual|where|yield|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|assert|boolean|byte|extends|finally|final|implements|import|instanceof|interface|null|native|package|strictfp|super|synchronized|throws|transient|break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|abstract|async|await|constructor|debugger|enum|eval|export|from|function|get|import|implements|instanceof|interface|let|null|of|set|undefined|var|with|yield|Infinity|NaN|caller|delete|die|do|dump|elsif|eval|exit|foreach|for|goto|if|import|last|local|my|next|no|our|print|package|redo|require|sub|undef|unless|until|use|wantarray|while|BEGIN|END|break|continue|do|else|for|if|return|while|and|as|assert|class|def|del|elif|except|exec|finally|from|global|import|in|is|lambda|nonlocal|not|or|pass|print|raise|try|with|yield|False|True|None|break|continue|do|else|for|if|return|while|alias|and|begin|case|class|def|defined|elsif|end|ensure|false|in|module|next|nil|not|or|redo|rescue|retry|self|super|then|true|undef|unless|until|when|yield|BEGIN|END|break|continue|do|else|for|if|return|while|case|done|elif|esac|eval|fi|function|in|local|set|then|until)\\b"], 
  Wb = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), Gb = X.now || function() {
    return +new X();
  }, Fb, Hb, ea, Cb, Db, Qb = 5 > K ? 60 : 5.5 > K ? 0 : nb ? 20 : 10, Ib, Kb;
  var Da = [function(a) {
    p.RegExpCompat = Fb = a;
  }, function() {
    Ib = Fa("^\\s*<");
    Kb = Fa("\\S");
  }];
  nb || (Da[1](), Da = w);
  var Yb = function() {
    var a = ea, b = a.I, e = Xb(a.v, a.D), d = a.o = e.o;
    a.B = e.B;
    Ha(b, d) || (ea = w, J(Ua, w, 0, !0));
  };
  var xb = function() {
    var a = ea;
    a.K = a.o.match(a.m[1]) || [];
    a.s.push(a.A, 0);
    J(na, w, 2);
  };
  var ob = [];
  var Jb = function(a) {
    function b(h) {
      var r = h;
      0 <= h && (r = Vb[h]);
      0 <= r[1] && (r[1] = e(r[1]));
      return r;
    }
    function e(h) {
      var r = h;
      return 0 <= h && (r = pb[h], !r.exec) ? (ob.push(h), h) : r;
    }
    var d = ea, g = Za[a];
    aa(g) && (g = Za[a] = Za[g]);
    var f = g[0];
    if (0 <= f) {
      f = Ub[f];
      if (0 <= f["-num"]) {
        var u = f["-num"];
        delete f["-num"];
        for (var l = -1; 9 > l;) {
          f["" + ++l] = u;
        }
      }
      g[0] = f;
    }
    for (var y in f) {
      f[y] = b(f[y]);
    }
    g[1] = e(g[1]);
    f = g[2];
    l = 0;
    for (u = f.length; l < u; ++l) {
      f[l] = b(f[l]);
    }
    ob.length ? J(Ia, a, 2) : (d.m ? d.l && (d.l.g[0].m = g) : d.m = g, J(xb, w, 1));
  };
  var Xb = function(a, b) {
    function e(y) {
      var h = y.nodeType;
      if (1 === h) {
        if (!sa(y, "nocode")) {
          for (h = y.firstChild; h; h = h.nextSibling) {
            e(h);
          }
          h = L(y);
          if ("BR" === h || "LI" === h) {
            d[u] = "\n", f[u << 1] = g++, f[u++ << 1 | 1] = y;
          }
        }
      } else if (3 === h || 4 === h) {
        if (h = y.nodeValue) {
          h = b ? h.split("\r\n").join("\n").split("\r").join("\n") : h.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), d[u] = h, f[u << 1] = g, g += h.length, f[u++ << 1 | 1] = y;
        }
      }
    }
    var d = [], g = 0, f = [], u = 0;
    e(a);
    var l = d.join("");
    "\n" === l.charAt(l.length - 1) && (l = l.substr(0, l.length - 1));
    return {o:l, B:f};
  };
  var Zb = function(a, b, e) {
    function d(h) {
      var r = h.nodeType;
      if (1 === r && !sa(h, "nocode")) {
        if ("BR" === L(h)) {
          g(h), h.parentNode && Ra(h);
        } else {
          for (h = h.firstChild; h; h = h.nextSibling) {
            d(h);
          }
        }
      } else if ((3 === r || 4 === r) && e) {
        var v = h.nodeValue, E = v.indexOf("\r\n"), S = 2;
        -1 === E && (E = v.indexOf("\n"), S = 1);
        -1 === E && (E = v.indexOf("\r"));
        -1 !== E && (r = v.substr(0, E), h.nodeValue = r, (v = v.substr(E + S)) && C(h, v), g(h), r || Ra(h));
      }
    }
    function g(h) {
      function r(E, S) {
        var xa = S ? E.cloneNode(!1) : E, wa = E.parentNode;
        if (wa) {
          wa = r(wa, 1);
          var Sa = E.nextSibling;
          wa.appendChild(xa);
          for (var Ta = Sa; Ta; Ta = Sa) {
            Sa = Ta.nextSibling, wa.appendChild(Ta);
          }
        }
        return xa;
      }
      for (; !h.nextSibling;) {
        if (h = h.parentNode, !h) {
          return;
        }
      }
      h = r(h.nextSibling, 0);
      for (var v; (v = h.parentNode) && 1 === v.nodeType;) {
        h = v;
      }
      u.push(h);
    }
    for (var f = z.createElement("li"); a.firstChild;) {
      f.appendChild(a.firstChild);
    }
    for (var u = [f], l = 0; l < u.length; ++l) {
      d(u[l]);
    }
    if (b === (b | 0)) {
      if (10 <= b && 7.2 > ta) {
        var y = z.createElement("ol");
        y.innerHTML = '<li value="' + b + '">' + f.innerHTML + "</li>";
        u[0] = y.firstChild;
      } else {
        Ya(f, "value", b);
      }
    }
    y = q(a, "ol", {className:"linenums"});
    a = Math.max(0, b - 1 | 0) || 0;
    l = 0;
    for (b = u.length; l < b; ++l) {
      f = u[l], V(f, "L" + (l + a) % 10), f.firstChild || B(f, "\u00a0"), y.appendChild(f);
    }
  };
  var Rb = function() {
    var a = ea, b = a.o, e = b.length, d = 0, g = a.B, f = g.length, u = 0, l = a.s, y = l.length, h = 0;
    l[y] = e;
    var r, v;
    for (v = r = 0; v < y;) {
      l[v] !== l[v + 2] ? (l[r++] = l[v++], l[r++] = l[v++]) : v += 2;
    }
    y = r;
    for (v = r = 0; v < y;) {
      var E = l[v], S = l[v + 1];
      for (v += 2; v + 2 <= y && l[v + 1] === S;) {
        v += 2;
      }
      l[r++] = E;
      l[r++] = S;
    }
    l.length = r;
    a = a.v;
    y = "";
    a && (y = a.style.display, a.style.display = "none");
    for (; u < f;) {
      r = g[u + 2] || e;
      E = l[h + 2] || e;
      v = Math.min(r, E);
      S = g[u + 1];
      var xa;
      if (1 !== S.nodeType && (xa = b.substring(d, v))) {
        9 > K && (xa = xa.split("\n").join("\r"));
        var wa = n(S, "span", {className:Wb[l[h + 1]]}, xa);
        Ra(S);
        d < r && (g[u + 1] = C(wa, b.substring(v, r)));
      }
      d = v;
      d >= r && (u += 2);
      d >= E && (h += 2);
    }
    a && (a.style.display = y);
    ea = w;
    J(Ua, w, 3, !0);
  };
  var $a = [], ab;
  Ca.push(function(a) {
    if (a) {
      a = [Z(z, "pre"), Z(z, "code"), Z(z, "xmp")];
      for (var b = 0; b < a.length; ++b) {
        for (var e = 0, d = a[b].length; e < d; ++e) {
          Pb(a[b][e]);
        }
      }
      return !0;
    }
  });
  var Pb = function(a) {
    $a.push(a);
    ab = $a.length;
    1 === ab && (Eb ? ja(Eb, Ua) : Da ? Da.push(function() {
      ja(Ua);
    }) : ja(Ua));
  };
  var Ua = function() {
    function a(u, l) {
      return (u.split(l)[1] || "").split(" ")[0];
    }
    if (!ea) {
      ab !== $a.length && Db && Db(ab - $a.length, ab);
      var b = $a.shift();
      if (b) {
        if (sa(b, "prettyprint") && !sa(b, "prettyprinted")) {
          for (var e = !1, d = b.parentNode; d !== Ja; d = d.parentNode) {
            var g = L(d);
            if (("PRE" === g || "XMP" === g || "CODE" === g) && sa(d, "prettyprint")) {
              e = !0;
              break;
            }
          }
          if (!e) {
            e = b.className;
            la(b, "prettyprinted");
            d = !1;
            if (!d) {
              d = a(e, "lang-") || a(e, "language-");
              var f;
              !d && (f = tb(b)) && "CODE" === L(f) && (d = a(f.className, "lang-") || a(f.className, "language-"));
            }
            g = L(b);
            "PRE" === g || "XMP" === g ? g = 1 : (g = b.currentStyle, f = z.defaultView, g = (g = g ? g.whiteSpace : f && f.getComputedStyle ? f.getComputedStyle(b, null).getPropertyValue("white-space") : 0) && "pre" === g.substr(0, 3));
            f = !1;
            (f = "true" === f || +f) || (f = a(e, "linenums:") || sa(b, "linenums"), f = f.length ? +f : f);
            f && Zb(b, f, g);
            ea = {I:d, v:b, L:f, D:g, A:0, u:0, F:{}, s:[]};
            J(Yb);
            return;
          }
        }
        J(Ua, w, 0, !0);
      } else {
        Cb && Cb();
      }
    }
  };
  p.PR = {RegExpProxy:Fa, prettifyElement:Pb, registerCompleteHandler:function(a, b) {
    Cb = a;
    Db = b;
  }};
  var Bb = z.scripts || Z(z, "script");
  var ra = Bb[Bb.length - 1].src.split("/");
  --ra.length;
  "js" === ra[ra.length - 1] && --ra.length;
  (ra = ra.join("/")) && (ra += "/");
  ub || R(Ja, "mob");
  6.1 > da && t(p, "scroll", eb);
  Mb(H);
  6.1 > da && t(p, "scroll", hb);
  Mb(La);
  if (nb) {
    if (yb) {
      var Eb = function(a) {
        p.RegExpCompat = function(b) {
          for (var e; e = Da.shift();) {
            e(b);
          }
          Da = w;
          ja(a);
          Ob(ra + "js/regexpcompat.js");
        };
        Eb = w;
        Nb(ra + "js/regexpcompat.js");
      };
    } else {
      p.RegExpCompat = function(a) {
        for (var b; b = Da.shift();) {
          b(a);
        }
        Da = w;
        Ob(ra + "js/regexpcompat.js");
      }, Nb(ra + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, parseFloat, Function, isFinite, setTimeout, clearTimeout, void 0);

