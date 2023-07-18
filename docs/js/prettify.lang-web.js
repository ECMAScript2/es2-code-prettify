/*@cc_on Array.prototype.splice||(Array.prototype.splice=function(c,e){var f=arguments,d=f.length-2-e,g=this.slice(c,c+e),b;if(0<d){var a=this.length-1;for(b=c+e;a>=b;--a)this[a+d]=this[a]}else if(0>d){a=c+e;for(b=this.length;a<b;++a)this[a+d]=this[a];this.length+=d}a=2;for(b=f.length;a<b;++a)this[a-2+c]=f[a];return g});
Array.prototype.shift||(Array.prototype.shift=function(){var b=this.length;if(b){for(var c=this[0],a=1;a<b;++a)this[a-1]=this[a];--this.length;return c}});
Array.prototype.push||(Array.prototype.push=function(){for(var b=arguments,a=0,c=b.length,d=this.length;a<c;++a)this[d+a]=b[a];return this.length});
Array.prototype.pop||(Array.prototype.pop=function(){var a=this.length,b=this[a-1];a&&--this.length;return b});
Array.prototype.unshift||(Array.prototype.unshift=function(){for(var c=arguments,b=c.length,d=this.length+=b-1,a=d;a>=b;--a)this[a]=this[a-b];for(a=0;a<b;++a)this[a]=c[a];return d}); @*/
Array.prototype.indexOf||(Array.prototype.indexOf=function(c,a){var b=this.length>>>0;if(0===b||a&&(a=a||0,a=a===-1/0?0:(0>a?-a:a)|0,b<=a))return-1;for(a=0<=a?a:0<b+a?b+a:0;a<b;++a)if(this[a]===c)return a;return-1});
/** Code Preffity for ES2 [lang-web](github.com/ECMAScript2/es2-code-prettify) */
ua = [];
ua.conpare = function(X, q) {
  var U = 0, L, Y, A = (X + "").split("."), ia = (q + "").split("."), ca = A.length;
  for (L = ia.length; "0" === A[ca - 1];) {
    --ca;
  }
  for (; "0" === ia[L - 1];) {
    --L;
  }
  for (Y = ca < L ? ca : L; U < Y; ++U) {
    var va = A[U] - 0, k = ia[U] - 0;
    if (va !== k) {
      return va > k ? 1 : -1;
    }
  }
  return ca > L ? 1 : ca === L ? 0 : -1;
};
(function(X, q, U, L, Y, A, ia, ca) {
  function va(v, O, G) {
    G = A(v.split(O)[1]);
    return 0 <= G ? G : 0;
  }
  function k(v, O) {
    return 0 <= v.indexOf(O);
  }
  function fb(v) {
    return k(v, "Linux armv") || k(v, "Linux aarch") || k(v, "Linux i686") || k(v, "Linux x86_64");
  }
  function x(v, O) {
    for (var G in O) {
      if (G === v) {
        return !0;
      }
    }
  }
  function m(v, O) {
    var G = "", da = -1, ea;
    if (v = v.split(O)[1]) {
      for (; ea = v.charCodeAt(++da);) {
        if (48 <= ea && 57 >= ea || 46 === ea) {
          G += v.charAt(da);
        } else {
          break;
        }
      }
      for (da = G.length; da;) {
        if (46 === G.charCodeAt(--da)) {
          G = G.substr(0, da);
        } else {
          break;
        }
      }
    }
    return G;
  }
  function wa(v) {
    for (var O = arguments, G = 1, da = O[0], ea; G < O.length; ++G) {
      0 > E(da, ea = O[G]) && (da = ea);
    }
    return da;
  }
  function Ca(v) {
    return v === v + "" ? v : v === v - 0 ? "" + v : v.min && v.max ? v.min + "~" + v.max : v.min ? v.min + "~" : "~" + v.max;
  }
  var E = X.conpare, c = L.userAgent, H = L.appVersion, Oa = A(H) || 0, B = L.platform, oa = U.documentElement, Da = oa && oa.style, M = U.documentMode, Pa = Y.width;
  Y = Y.height;
  var Ea = q.HTMLAudioElement, Fa = q.performance, Wa = q.Int8Array, ja = q.ontouchstart !== ca, ka = m(H, "Version/") || m(c, "Version/"), Xa = q.operamini, Z = !Xa && q.opera, gb = Z && (Z.version && "function" === typeof Z.version ? Z.version() : wa(m(c, "Opera "), ka, Oa)), Ga = q.opr, la = !Z && (U.all || M);
  M = la && (M ? M : q.XMLHttpRequest ? U.getElementsByTagName ? 7 : 4 : U.compatMode ? 6 : (0).toFixed ? 5.5 : q.attachEvent ? 5 : 4);
  oa = !la && oa.msContentZoomFactor;
  var I = !oa && (q.chrome || q.chromium), xa = !la && function() {
    for (var v in Da) {
      if (0 === v.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Qa = k(c, "UCWEB"), Ra = Qa && m(c, " U2/"), Ya = Qa && m(c, "; wds "), Za = m(c.split("_").join("."), "; iPh OS "), J = m(c, "; Adr "), ya = k(H, "YJApp-ANDROID"), N = k(B, "Android") || xa && k(H, "Android") || ya;
  J = m(B, "Android ") || m(H, "Android ") || m(c, "Android ") || J;
  var D = k(B, "Linux"), Ha = "MacIntel" === B && L.standalone !== ca, P = xa && m(c, "Goanna/"), Q = !P && xa && (m(c, "rv:") || m(c.substr(c.indexOf(") Gecko/") - 11), "; ")), wb = m(c, "Firefox/"), w = m(c, "Opera/"), $a = q.FNRBrowser, pa = va(c, "AppleWebKit/"), Ia = m(c, "Chrome/"), xb = m(H, "Iron/"), hb = m(c, "OPR/"), za = m(H, "KHTML/"), ib = m(c.toLowerCase(), "iris");
  m(c, "FxiOS/");
  m(c, "CriOS/");
  m(c, "EdgiOS/");
  var jb = m(c, "Silk/"), Ja = va(c, "SamsungBrowser/"), kb = !Ja && function() {
    for (var v = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    O, G = v.length; O = v[--G];) {
      if (k(c, O)) {
        return 2 > A(ka) ? ka : .9;
      }
    }
    v = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (G = v.length; O = v[--G];) {
      if (k(c, O)) {
        return ka;
      }
    }
  }(), Ka = I && 534.3 >= pa, La = fb(B), ma = La && !k(c, B) && fb(c);
  ja = ja && (pa || xa) && ma || !J && ya;
  ya = !!q.ReactNativeWebView;
  La = La && function() {
    for (var v in q) {
      if (0 === v.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var S = (ma = q.puffinDevice) && ma.clientInfo;
  S = (ma = S && "iOS" === S.os && S.osVersion) && S.model;
  var fa = !M && U.registerElement, yb = !M && U.execCommand, qa = q.webkitCancelAnimationFrame, Ma = D && fa && "11.0.696.34" === Ia, lb = q._firefoxTV_playbackStateObserverJava, ra = va(c, "diordnA ");
  if ("Nitro" === B) {
    var n = 1;
  } else if ("Nintendo DSi" === B) {
    n = 2;
    var p = w;
  } else if ("New Nintendo 3DS" === B || k(c, "iPhone OS 6_0") && 320 === Pa && 240 === Y) {
    n = 4, p = m(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === B) {
    n = 3, p = m(c, "Version/"), pa = 535;
  } else if ("Nintendo Swicth" === B) {
    n = 7, p = m(H, "NintendoBrowser/");
  } else if (q.wiiu) {
    n = 6;
    p = m(H, "NintendoBrowser/");
    var C = 15, z = m(H, "AppleWebKit/") || (qa ? 536 : 534);
    p || (p = qa ? 4 : 2, k(H, "Macintosh;") || k(H, "Windows NT") && k(H, "Touch"));
  } else if (Z && Z.wiiremote) {
    n = 5, p = m(c, "Wii; U; ; ");
  } else if (w = m(c, "PlayStation Vita ")) {
    n = 10, p = w;
  } else if (w = m(c, "(PlayStation Portable); ")) {
    n = 8;
    p = w;
    var ab = 3.3;
  } else if (w = m(c, "PLAYSTATION 3; ") || m(c, "PLAYSTATION 3 ")) {
    n = 11, p = w, 0 > E("4.10", w) && (C = 26, z = w);
  } else if (k(c, "Xbox One")) {
    n = 15, p = 1;
  } else if (k(c, "Xbox")) {
    n = 14, p = 1;
  } else if (2 === Oa && k(c, "Sony/COM2/")) {
    n = 17;
    p = 2;
    ab = 3.4;
    var Aa = !0;
  } else if (0 === B.indexOf("iP") || Za || ma || Ha) {
    if (ma) {
      switch(p = ma, S.substr(0, 4)) {
        case "iPho":
          var aa = 0;
          m(S, aa);
          var V = !0;
          break;
        case "iPad":
          aa = 1;
          m(S, aa);
          var R = !0;
          break;
        case "iPod":
          aa = 2;
          m(S, aa);
          var Sa = !0;
      }
    } else {
      Za ? p = Za : (p = m(H.split("_").join("."), "OS "), x("isSecureContext", q), x("enableWebGL", q), x("sameOrigin", q));
      if (!p || $a) {
        p = q.PointerEvent ? 13 : q.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : L.sendBeacon ? 11.3 : q.WebAssembly ? 11.2 : q.HTMLMeterElement ? 10.3 : q.Proxy ? 10.2 : q.HTMLPictureElement ? 9.3 : ia.isNaN ? 9.2 : q.SharedWorker ? Fa && Fa.now ? 8 : 8.4 : yb ? 7.1 : q.webkitURL ? 6.1 : q.Worker ? 5.1 : Wa ? 4.3 : Ea ? 4.1 : 3.2;
      }
      var W = Pa === 1.5 * Y || 1.5 * Pa === Y;
      0 === B.indexOf("iPhone") ? (aa = 0, V = !0) : 0 === B.indexOf("iPad") || Ha ? (aa = 1, R = !0) : 0 === B.indexOf("iPod") && (aa = 2, Sa = !0);
    }
    C = !ma && (L.standalone || (R || 12 > p) && x("webkitFullscreenEnabled", U) || 11 <= p && 13 > p && L.mediaDevices) ? 16 : 17;
    n = 24;
    z = p;
  } else if (k(c, "Kobo")) {
    n = 18, C = 21, z = 2.2, N = !0;
  } else if (k(c, "EBRD")) {
    n = 19, C = 21, z = 2.2;
  } else if (w = m(c, "CrOS x86_64 ") || m(c, "CrOS aarch64 ") || m(c, "CrOS i686 ") || m(c, "CrOS armv7l ")) {
    n = 28, p = w;
  } else if (q.onmoztimechange !== ca) {
    n = 29, p = 18.1 > Q ? "1.0.1" : 19 > Q ? 1.1 : 27 > Q ? 1.2 : 29 > Q ? 1.3 : 31 > Q ? 1.4 : 33 > Q ? 2 : 35 > Q ? 2.1 : 38 > Q ? 2.2 : 45 > Q ? 2.5 : 2.6, k(c, "Mobile") ? V = !0 : k(c, "Tablet") ? R = !0 : k(c, "TV");
  } else if (q.palmGetResource) {
    n = 30, p = m(c, "webOS/") || m(c, "WEBOS") || m(c, "hpwOS/"), k(c, "webOS.TV") || k(c, "/SmartTV") || (V = !0);
  } else if (w = m(c, "Tizen ")) {
    n = 31, p = w, C = 24, z = Ja, V = !0;
  } else if (w = m(c, "Windows Phone ") || m(H, "Windows Phone OS ") || Ya) {
    n = 23, p = w, V = !0;
  } else if (oa && "ARM" === B) {
    n = 23, p = 10, V = !0;
  } else if (la && k(H, "ZuneWP")) {
    n = 23, p = 11 === M ? 8.1 : 10 === M ? 8 : 9 === M ? 7.5 : 7 === M ? 7 : "?", V = !0;
  } else if (k(c, "FOMA;")) {
    n = 16, V = !0;
  } else if (k(c, "SoftBank;")) {
    n = 16, V = !0;
  } else if (k(c, "KFMUWI")) {
    var ba = !0;
    p = 6.3;
    var K = R = !0;
  } else if (k(c, "KFKAWI")) {
    ba = !0, p = 6, K = R = !0;
  } else if (k(c, "KFSUWI") || k(c, "KFAUWI") || k(c, "KFDOWI")) {
    ba = !0, p = 5, K = R = !0;
  } else if (k(c, "KFGIWI")) {
    ba = !0, p = 5, K = R = !0;
  } else if (k(c, "KFARWI") || k(c, "KFSAWA") || k(c, "KFSAWI")) {
    ba = !0, p = 5 <= A(J) ? 5 : 4, K = R = !0;
  } else if (k(c, "KFSOWI") || k(c, "KFTHWA") || k(c, "KFTHWI") || k(c, "KFAPWA") || k(c, "KFAPWI")) {
    ba = !0, p = 3, K = R = !0;
  } else if (k(c, "KFOT") || k(c, "KFTT") || k(c, "KFJWA") || k(c, "KFJWI")) {
    ba = !0, p = 2, K = R = !0;
  } else if (k(c, "Kindle Fire")) {
    ba = !0, p = 1, K = R = !0;
  } else if (w = m(c, "Kindle/")) {
    n = 20, p = w, C = 21, z = 2.2;
  } else if (lb) {
    ba = !0, p = J || ra, K = !0;
  } else if (k(c, "AmazonWebAppPlatform") || k(c, "; AFT")) {
    ba = !0, p = J, K = !0;
  } else if (k(c, "MeeGo")) {
    n = 32;
  } else if (k(c, "Maemo")) {
    n = 33;
  } else if (0 === c.indexOf("Windows Mobile;") || ib) {
    n = 22, Aa = !0;
  } else if ("WinCE" === B) {
    n = 21, Aa = !0;
  } else if (0 === B.indexOf("Win")) {
    n = "Win16" === B ? 35 : "Win32" === B ? 36 : "Win64" === B ? 37 : 0, p = m(c, "Windows NT ") || m(c, "Windows ");
  } else if (0 === B.indexOf("Mac")) {
    n = "Mac68K" === B ? 39 : "MacPowerPC" === B || "MacPPC" === B ? 38 : "MacIntel" === B ? 40 : 0;
    if (w = m(c.split("_").join("."), "Mac OS X ")) {
      p = w;
    }
    var zb = !0;
  } else if (k(c, "BlackBerry") || k(c, "BB10")) {
    n = 34, p = ka, V = !0;
  } else if (k(c, "SunOS") || k(c, "Sun Solaris")) {
    n = 42;
  } else if (k(c, "FreeBSD")) {
    n = 43;
  } else if (k(c, "OpenBSD")) {
    n = 44;
  } else if (k(c, "NetBSD")) {
    n = 45;
  } else if (N && xa) {
    k(c, "Android 4.4;") ? W = {min:2.3} : 4 <= A(J) ? W = J : W = {min:2.2}, p = W;
  } else if (N && Z) {
    J ? W = J : W = {min:1.6}, p = W, k(c, "Tablet") ? R = !0 : V = !0;
  } else if (J) {
    p = J, N = !0;
  } else if (D && ja || ya || La) {
    var Na = !0;
    Ja ? W = {min:4.4} : I && !Ka || Ga || hb ? W = {min:4} : (W = J = Da.touchAction !== ca ? {min:5} : fa ? 4.4 : Wa ? L.connection ? q.searchBoxJavaBridge_ || I ? ia.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= pa ? 3 : 533 <= pa ? Ea ? 2.3 : 2.2 : 530 <= pa ? 2 : 1.5, kb && (C = 24, z = kb));
    p = W;
    N = !0;
  } else {
    Ma ? (p = {min:5}, Na = N = !0) : D && (k(c, "Ubuntu") ? n = 46 : (w = m(c, "Mint/")) ? (n = 47, p = w) : (w = m(c, "Fedora/")) ? (n = 48, p = w) : n = k(c, "Gentoo") ? 49 : 50);
  }
  ba || N && Na && jb ? n = 27 : N && (n = n || 26);
  C || (K = K || N, Z ? (C = K || Aa || V || R ? 9 : 8, z = gb) : la ? (W = va(H, "Trident/") + 4, C = Aa || V || R || Sa ? 3 : zb && 5 <= M ? 7 : 2, z = M) : oa ? (C = 23 === n ? 6 : 5, z = m(H, "Edge/")) : P ? (C = 13, z = P) : xa ? (C = K ? 12 : 11, z = Q || wb) : Ja ? (C = 24, z = Ja) : (w = ab || m(c, "NetFront/")) ? (C = 18, z = w) : (w = m(c, "iCab")) ? (C = 19, z = w) : (w = wa(m(c, "Opera Mini/"), m(c, "Opera Mobi/")) || Xa && ka) ? (C = 10, z = w, n || (k(c, "iPhone") ? aa = 0 : k(c, "iPad") ? 
  aa = 1 : k(c, "iPod") && (aa = 2), aa && (n = 24))) : Qa ? (C = 25, z = Ra) : za ? (C = 14, z = Oa) : N && Ka ? (C = 21, z = J) : I || Ga || hb ? (C = K ? 22 : 20, z = Ia || xb) : N && fa ? (C = 23, z = 5 > A(J) ? J : Ia) : N && (ka || Na) ? (C = 21, z = J) : Ia ? (C = K ? 22 : 20, z = Ia) : pa && (C = 15, z = pa));
  n && (X[2] = n, p && (X[3] = Ca(p)));
  C && (X[0] = C, z && (X[1] = Ca(z)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
(function(X, q, U, L, Y, A, ia, ca, va, k, fb, x) {
  function m(a) {
    Vb(q, "load", m);
    m = x;
    ka(za, a, !0);
    mb = za = x;
  }
  function wa() {
    for (var a, b = 0, d = jb(); b < qa.length;) {
      d < qa[0].t ? ++b : (a = qa.splice(b, 1)[0], a.f(a.p));
    }
    ra = qa.length ? k(wa, Ma) : 0;
  }
  function Ca() {
    for (var a, b = 0; b < Ka.length; ++b) {
      a = Ka[b], a.f();
    }
  }
  function E(a) {
    if (X[0] === a) {
      return N === N + "" ? ia(N) : N;
    }
  }
  function c(a) {
    var b = X[3];
    if (X[2] === a) {
      return b === b + "" ? ia(b) : b;
    }
  }
  function H() {
    S && (S = clearInterval(S));
  }
  function Oa() {
    ra && (ra = fb(ra));
  }
  function B(a, b, d) {
    var e = ["<", a], g = 1, f, u;
    if (b) {
      for (f in b) {
        var l = b[f];
        if (null != l && "" !== l) {
          if ("style" === f) {
            e[++g] = ' style="';
            for (u in l) {
              for (var y = ++g, h, r = [], t = u.split(""), F = t.length; F;) {
                h = t[--F], "A" <= h && "Z" >= h && (h = "-" + h.toLowerCase()), r[F] = h;
              }
              e[y] = r.join("") + ":" + l[u] + ";";
            }
            e[++g] = '"';
          } else {
            "className" === f && (f = "class"), e[++g] = " " + f + '="' + l + '"';
          }
        }
      }
    }
    e[++g] = ">";
    null != d && (n && "font" !== a ? e[++g] = "<font>" + oa(d) + "</font>" : e[++g] = oa(d));
    e[++g] = "</" + a + ">";
    return e.join("");
  }
  function oa(a) {
    return a.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
  }
  function Da(a) {
    var b = a.split("-"), d = b.length;
    if (2 > d) {
      return a;
    }
    for (; 1 < d;) {
      a = b[--d], b[d] = a.charAt(0).toUpperCase() + a.substr(1);
    }
    return b.join("");
  }
  function M(a, b) {
    var d = "*" === b;
    d = n ? d ? a.all : a.all.tags(b.toUpperCase()) : 6 > D && d ? a.all : a.getElementsByTagName(b);
    for (var e = [], g = 0, f = d.length; g < f; ++g) {
      e[g] = d[g];
    }
    return e;
  }
  function Pa(a) {
    return n ? a.parentElement : a.parentNode;
  }
  function Ea(a, b, d, e, g, f) {
    if (n) {
      var u = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
      var l = ab(2 > a ? z(b) : b);
      l = 2 > a ? l.indexOf(b) + a : l.length;
      b.insertAdjacentHTML(u, B(d, e, g));
      b = ab(b)[l];
      null != g && ("font" === d ? b.nodeType = 3 : b.children[0].nodeType = 3);
    } else if (W) {
      b = A.createElement(B(d, e));
    } else {
      b = f ? A.createElementNS("http://www.w3.org/2000/svg", d) : A.createElement(d);
      if (e) {
        for (u in e) {
          if ((a = e[u]) || 0 === a) {
            switch(u) {
              case "class":
              case "className":
                v(b, a);
                break;
              case "style":
                f = b.style;
                for (l in a) {
                  f[l] = a[l];
                }
                break;
              default:
                Na(b, u, a);
            }
          }
        }
        !P || "a" !== d && "A" !== d || !e.href || e["tag-index"] || e.tagIndex || Na(b, "tagIndex", "-0");
      }
      ba || null != g && Fa(b, g);
    }
    return b;
  }
  function Fa(a, b) {
    if (n) {
      return Ea(2, a, "font", x, b);
    }
    var d = A.createTextNode("" + b);
    a.appendChild(d);
    return d;
  }
  function Wa(a, b) {
    9 > D ? a.className = b : a.setAttribute("class", b);
  }
  function ja(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function ka(a, b, d) {
    for (var e = 0; e < a.length; ++e) {
      !0 === a[e](b) && (a.splice(e, 1), --e);
    }
    d && (a.length = 0);
  }
  function Xa() {
    var a = ea, b;
    for (ea = []; b = a.shift();) {
      ka(b, a.shift(), a.shift());
    }
  }
  function Z(a) {
    var b = a || event;
    a = bb[b.type];
    var d = -1, e, g;
    5 > D ? b = {type:event.type, target:event.srcElement, preventDefault:bz, stopPropagation:function() {
      event.cancelBubble = !0;
    }} : D ? (b.target = b.srcElement, b.preventDefault = function() {
      b.returnValue = !1;
    }, b.stopPropagation = function() {
      b.cancelBubble = !0;
    }) : nb && (b.C = b.stopPropagation, b.stopPropagation = function() {
      g = !0;
    });
    for (; e = a[++d];) {
      e.j === this ? (this.g = e.i, D && (b.currentTarget = this), this.g(b), D ? (this.g = J, this.g = x) : delete this.g) : 7.2 > P && this === A && e.j === q && (q.g = e.i, q.g(b), delete q.g);
    }
    if (D) {
      return b.preventDefault = b.stopPropagation = J, b.preventDefault = b.stopPropagation = x, b.returnValue;
    }
    nb && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (ob = !0), g && !ob && b.C(), b.C = b.stopPropagation = x);
    function bz() {
      event.returnValue = !1;
    }
    bz = !1;
  }
  function gb() {
    var a = 9 === da.offsetWidth;
    G !== a && (a = G = a, za || ea.length || fa(Xa), ea.push(ib, a, void 0));
  }
  function Ga(a) {
    return a === "" + a;
  }
  function la(a, b) {
    return pb ? new Jb(a, b) : new L(a, b);
  }
  function I(a, b, d, e) {
    if (Kb() - Lb < Wb && !e) {
      return a(b);
    }
    fa(xa, {H:a, J:b});
  }
  function xa(a) {
    Lb = Kb();
    a.H(a.J);
  }
  function Qa(a, b) {
    a && cb[a] || (a = Mb.test(b) ? "default-markup" : "default-code");
    var d = !!cb[a];
    d && I(Nb, a, 0, !0);
    return d;
  }
  function Ra() {
    function a(sa, Ta, Ua) {
      Ta && (b.h = b.h || [], b.h.push({l:b, v:b.v, D:1, s:u, A:sa, o:Ta, m:Ua, F:{}, u:0}));
    }
    var b = ha, d = b.m, e = d[0], g = d[2], f = b.A, u = b.s, l = b.K.shift(), y = b.F;
    if (l) {
      var h = y[l], r;
      if (!(0 <= h)) {
        if (r = e[l.charAt(0)]) {
          var t = l.match(r[1]);
          h = r[0];
        } else {
          for (h = 0, e = -1; r = g[++e];) {
            if (t = l.match(r[1])) {
              h = r[0];
              break;
            }
          }
        }
        !(r = Ga(h)) || t && Ga(t[1]) || (r = !1, h = 11);
        r || (y[l] = h);
      }
      g = b.u;
      y = l.length;
      b.u += y;
      if (r) {
        r = t[1];
        e = l.indexOf(r);
        var F = r.length, T = e + F;
        t[2] && (T = y - t[2].length, e = T - F);
        a(f + g, l.substr(0, e), d);
        if (F && Qa(h, r)) {
          a(f + g + e, r);
          var ta = !0;
        }
        a(f + g + T, l.substr(T), d);
        b.h && b.h.length && (ha = b.h.shift());
        ta || (ha !== b ? I(Ab, x, 2) : I(Ra, x, 2));
      } else {
        u.push(f + g, h), I(Ra, x, 2);
      }
    } else {
      b.l ? (ha = b.l.h.shift()) ? I(Ab, x, 2) : (ha = b.l, I(Ra, x, 2)) : I(Xb, x, 2);
    }
  }
  function Ya(a) {
    if (qb.length) {
      var b = qb.shift(), d = rb[b];
      if (d.pop) {
        rb[b] = la(d[0], d[1]);
      } else if (Ga(d)) {
        rb[b] = la(d);
      } else {
        return Ya(a);
      }
      I(Ya, a, 1);
    } else {
      I(Nb, a);
    }
  }
  function Za(a) {
    for (var b, d = a.firstChild; d; d = d.nextSibling) {
      var e = d.nodeType;
      b = 1 === e ? b ? a : d : 3 === e ? Ob.test(d.nodeValue) ? a : b : b;
    }
    return b === a ? x : b;
  }
  var J = U, ya = A.body, N = X[1], D = E(2) || E(3), Ha = E(7);
  E(5) || E(6);
  var P = E(8) || E(9), Q = E(11) || E(12), wb = Q && 0 <= X.conpare(N, "1.9.1");
  E(13);
  var w = E(15), $a = E(16) || E(17);
  E(10) || E(25);
  var pa = E(20) || E(22);
  E(23);
  var Ia = E(21);
  E(24);
  pa && ia(navigator.userAgent.split("Edg/")[1]);
  ia(navigator.appVersion.split("Trident/")[1]);
  c(35) || c(36) || c(37);
  var xb = .9 > Q, hb = c(1) || c(2) || c(3) || c(4) || c(8) || c(9) || c(10), za = [], ib = [];
  525 > w || 3.2 > $a || 2.2 > Ia || 10 > P || Q && !wb || E(25) || 10 > E(3) || c(32) || c(30) || c(3);
  var jb = Y.now || function() {
    return +new Y();
  };
  var Ja = function(a) {
    Ka.length || (S = setInterval(Ca, La));
    Ka.push({f:a, G:++ma});
    return ma;
  };
  var kb = function() {
    S && (H(), S = setInterval(Ca, La));
  };
  var Ka = [], La = 500, ma = 0, S;
  if (5 > D || Ha) {
    q._wdb_onlooptimer = Ca, Ca = "_wdb_onlooptimer()";
  }
  var fa = function(a, b, d) {
    qa.length || (ra = k(wa, Ma));
    qa.push({f:a, p:b, G:++lb, t:jb() + (Ma < d ? d : Ma)});
    return lb;
  };
  var yb = function() {
    ra && (Oa(), ra = k(wa, Ma));
  };
  var qa = [], Ma = 16, lb = 0, ra;
  if (5 > D || Ha) {
    q._wdb_ontimer = wa, wa = "_wdb_ontimer()";
  }
  var n = 5 > D;
  var p = M(A, "html")[0];
  var C = M(A, "head")[0];
  var z = Pa;
  var ab = function(a) {
    a = n ? a.children : a.childNodes;
    for (var b = [], d = a.length; d;) {
      b[--d] = a[d];
    }
    return b;
  };
  var Aa = function(a, b, d, e, g) {
    b = Ea(2, a, b, d, e, g);
    n || (a.appendChild(b), ba && null != e && Fa(b, e));
    return b;
  };
  var aa = function(a, b, d, e, g) {
    b = Ea(0, a, b, d, e, g);
    n || (Pa(a).insertBefore(b, a), ba && null != e && Fa(b, e));
    return b;
  };
  var V = Fa;
  var R = function(a, b) {
    var d;
    if (n) {
      return Ea(1, a, "font", x, b);
    }
    var e = A.createTextNode("" + b);
    (d = a.nextSibling) ? z(a).insertBefore(e, d) : z(a).appendChild(e);
    return e;
  };
  var Sa = function(a) {
    n ? a.outerHTML = "" : (5.5 > D && (a.style.filter = ""), z(a).removeChild(a));
  };
  var W = 9 > D, ba = W;
  var K = function(a) {
    return a.tagName.toUpperCase();
  };
  var zb = function(a, b) {
    if (8 > P || 5.5 > D) {
      b = Da(b);
    }
    var d = a.getAttribute(b);
    return P && "tabIndex" === b ? "-0" === d ? "" : "" === d ? "-1" : d : d || "";
  };
  var Na = function(a, b, d) {
    if (P && "tab-index" === b) {
      "-1" === d ? a.removeAttribute("tabIndex") : a.setAttribute("tabIndex", d);
    } else {
      if (8 > P || 5.5 > D) {
        b = Da(b);
      }
      a.setAttribute(b, d);
    }
  };
  var v = Wa;
  var O = function(a, b) {
    var d;
    if (!ja(a, b)) {
      if (d = a.className) {
        d += " ";
      }
      Wa(a, d + b);
    }
  };
  var G, da, ea = [];
  za.push(function() {
    da = Aa(ya, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
    mb(function() {
      ea.length && fa(Xa);
    });
  });
  var sb = function(a, b, d, e) {
    if (Pb) {
      a.addEventListener(b, d, e ? Qb ? e : e.capture || !0 === e : !1);
    } else {
      var g = {j:a, i:d};
      e = bb[b];
      var f = "on" + b, u, l;
      if (e) {
        for (u = e.length; l = e[--u];) {
          if (l.j === a && l.i === d) {
            return;
          }
        }
        bb[b].push(g);
      } else {
        bb[b] = e = [g], Bb || (b = a[f], "function" === typeof b && b !== Z && e.unshift({j:a, i:b}));
      }
      Bb ? a.attachEvent(f, Z) : a[f] = Z;
    }
  };
  var Vb = function(a, b, d, e) {
    if (Pb) {
      a.removeEventListener(b, d, e ? Qb ? e : e.capture || !0 === e : !1);
    } else {
      e = bb[b];
      b = "on" + b;
      var g, f, u;
      if (e) {
        for (g = e.length; f = e[--g];) {
          f.j === a && (f.i === d ? e.splice(g, 1) : u = !0);
        }
        u || (Bb ? a.detachEvent(b, Z) : D ? (a[b] = J, a[b] = null) : delete a[b]);
      }
    }
  };
  var Qb = !D && !Ha && (new ca('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), bb = {}, Bb = !1, nb = 525.13 > w, Pb = !nb && !Ha && q.addEventListener, ob;
  nb && p.addEventListener("click", function(a) {
    if (ob) {
      return ob = !1, a.preventDefault(), !1;
    }
  });
  var mb = function(a) {
    za.push(a);
  };
  var Rb = function(a) {
    tb && tb.push(a);
  };
  var tb = [];
  if (419.3 >= w) {
    var ub = function() {
      if (ub) {
        var a = A.readyState;
        "loaded" === a || "complete" === a ? (ub = x, m()) : fa(ub);
      }
    };
    fa(ub);
  } else {
    sb(q, "load", m);
  }
  D || !xb && 1.8 > Q ? sb(q, "unload", function(a) {
    ka(tb, a, !0);
  }) : tb = x;
  mb(function() {
    gb();
    Ja(gb);
  });
  var Yb = Q && 0 >= X.conpare(N, "0.9");
  var Cb = !(7.2 > P || Yb);
  var Sb = function(a) {
    Db ? A.write('<script src="' + a + '">\x3c/script>') : za || vb.length ? vb.push(a) : Eb(a);
  };
  var Tb = function() {
    Db || Eb(vb.shift());
  };
  var Db = !Cb, Zb = Cb && 7.5 > P;
  if (!Db) {
    var vb = [];
    mb(function() {
      Eb(vb.shift());
    });
    var Eb = function(a) {
      a && (Zb ? Fb[0].src = a : Aa(C, "script", {src:a}));
    };
  }
  var pb = !L || .9 > Q || 8 > P || 5.5 > D;
  var cb = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
  var $b = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], ac = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
  26], [1, 27], ["css-str", 28], [5, 29], ["css-kw", 30], [2, 31], [2, 32], [4, 33], [4, 34], [0, 35], [3, 36], [5, 38], [3, 39], [1, 41], [0, 42], [6, 43], [9, 45], [10, 46], ["uq.val", 47], [3, 48], ["js", 49], ["js", 50], ["js", 51], ["css", 52], ["css", 53], ["css", 54], [6, 41], [1, 55], [2, 56], [1, 58], [5, 59]], rb = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", 
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
  bc = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), Kb = Y.now || function() {
    return +new Y();
  }, Jb, Lb, ha, Gb, Hb, Wb = 5 > D ? 60 : 5.5 > D ? 0 : pb ? 20 : 10, Mb, Ob;
  var Ba = [function(a) {
    q.RegExpCompat = Jb = a;
  }, function() {
    Mb = la("^\\s*<");
    Ob = la("\\S");
  }];
  pb || (Ba[1](), Ba = x);
  var dc = function() {
    var a = ha, b = a.I, d = cc(a.v, a.D), e = a.o = d.o;
    a.B = d.B;
    Qa(b, e) || (ha = x, I(Va, x, 0, !0));
  };
  var Ab = function() {
    var a = ha;
    a.K = a.o.match(a.m[1]) || [];
    a.s.push(a.A, 0);
    I(Ra, x, 2);
  };
  var qb = [];
  var Nb = function(a) {
    function b(h) {
      var r = h;
      0 <= h && (r = ac[h]);
      0 <= r[1] && (r[1] = d(r[1]));
      return r;
    }
    function d(h) {
      var r = h;
      return 0 <= h && (r = rb[h], !r.exec) ? (qb.push(h), h) : r;
    }
    var e = ha, g = cb[a];
    Ga(g) && (g = cb[a] = cb[g]);
    var f = g[0];
    if (0 <= f) {
      f = $b[f];
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
    g[1] = d(g[1]);
    f = g[2];
    l = 0;
    for (u = f.length; l < u; ++l) {
      f[l] = b(f[l]);
    }
    qb.length ? I(Ya, a, 2) : (e.m ? e.l && (e.l.h[0].m = g) : e.m = g, I(Ab, x, 1));
  };
  var cc = function(a, b) {
    function d(y) {
      var h = y.nodeType;
      if (1 === h) {
        if (!ja(y, "nocode")) {
          for (h = y.firstChild; h; h = h.nextSibling) {
            d(h);
          }
          h = K(y);
          if ("BR" === h || "LI" === h) {
            e[u] = "\n", f[u << 1] = g++, f[u++ << 1 | 1] = y;
          }
        }
      } else if (3 === h || 4 === h) {
        if (h = y.nodeValue) {
          h = b ? h.split("\r\n").join("\n").split("\r").join("\n") : h.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), e[u] = h, f[u << 1] = g, g += h.length, f[u++ << 1 | 1] = y;
        }
      }
    }
    var e = [], g = 0, f = [], u = 0;
    d(a);
    var l = e.join("");
    "\n" === l.charAt(l.length - 1) && (l = l.substr(0, l.length - 1));
    return {o:l, B:f};
  };
  var ec = function(a, b, d) {
    function e(h) {
      var r = h.nodeType;
      if (1 === r && !ja(h, "nocode")) {
        if ("BR" === K(h)) {
          g(h), h.parentNode && Sa(h);
        } else {
          for (h = h.firstChild; h; h = h.nextSibling) {
            e(h);
          }
        }
      } else if ((3 === r || 4 === r) && d) {
        var t = h.nodeValue, F = t.indexOf("\r\n"), T = 2;
        -1 === F && (F = t.indexOf("\n"), T = 1);
        -1 === F && (F = t.indexOf("\r"));
        -1 !== F && (r = t.substr(0, F), h.nodeValue = r, (t = t.substr(F + T)) && R(h, t), g(h), r || Sa(h));
      }
    }
    function g(h) {
      function r(F, T) {
        var ta = T ? F.cloneNode(!1) : F, sa = F.parentNode;
        if (sa) {
          sa = r(sa, 1);
          var Ta = F.nextSibling;
          sa.appendChild(ta);
          for (var Ua = Ta; Ua; Ua = Ta) {
            Ta = Ua.nextSibling, sa.appendChild(Ua);
          }
        }
        return ta;
      }
      for (; !h.nextSibling;) {
        if (h = h.parentNode, !h) {
          return;
        }
      }
      h = r(h.nextSibling, 0);
      for (var t; (t = h.parentNode) && 1 === t.nodeType;) {
        h = t;
      }
      u.push(h);
    }
    for (var f = A.createElement("li"); a.firstChild;) {
      f.appendChild(a.firstChild);
    }
    for (var u = [f], l = 0; l < u.length; ++l) {
      e(u[l]);
    }
    if (b === (b | 0)) {
      if (10 <= b && 7.2 > P) {
        var y = A.createElement("ol");
        y.innerHTML = '<li value="' + b + '">' + f.innerHTML + "</li>";
        u[0] = y.firstChild;
      } else {
        Na(f, "value", b);
      }
    }
    y = Aa(a, "ol", {className:"linenums"});
    a = Math.max(0, b - 1 | 0) || 0;
    l = 0;
    for (b = u.length; l < b; ++l) {
      f = u[l], v(f, "L" + (l + a) % 10), f.firstChild || V(f, "\u00a0"), y.appendChild(f);
    }
  };
  var Xb = function() {
    var a = ha, b = a.o, d = b.length, e = 0, g = a.B, f = g.length, u = 0, l = a.s, y = l.length, h = 0;
    l[y] = d;
    var r, t;
    for (t = r = 0; t < y;) {
      l[t] !== l[t + 2] ? (l[r++] = l[t++], l[r++] = l[t++]) : t += 2;
    }
    y = r;
    for (t = r = 0; t < y;) {
      var F = l[t], T = l[t + 1];
      for (t += 2; t + 2 <= y && l[t + 1] === T;) {
        t += 2;
      }
      l[r++] = F;
      l[r++] = T;
    }
    l.length = r;
    a = a.v;
    y = "";
    if (a) {
      y = a.style.display;
      t = "display";
      if (8 > P || 5.5 > D) {
        t = Da(t);
      }
      a.style[t] = "none";
    }
    for (; u < f;) {
      r = g[u + 2] || d;
      F = l[h + 2] || d;
      t = Math.min(r, F);
      T = g[u + 1];
      var ta;
      if (1 !== T.nodeType && (ta = b.substring(e, t))) {
        9 > D && (ta = ta.split("\n").join("\r"));
        var sa = aa(T, "span", {className:bc[l[h + 1]]}, ta);
        Sa(T);
        e < r && (g[u + 1] = R(sa, b.substring(t, r)));
      }
      e = t;
      e >= r && (u += 2);
      e >= F && (h += 2);
    }
    if (a) {
      b = "display";
      d = y;
      if (8 > P || 5.5 > D) {
        b = Da(b);
      }
      a.style[b] = d;
    }
    ha = x;
    I(Va, x, 3, !0);
  };
  var db = [], eb;
  ib.push(function(a) {
    if (a) {
      a = [M(A, "pre"), M(A, "code"), M(A, "xmp")];
      for (var b = 0; b < a.length; ++b) {
        for (var d = 0, e = a[b].length; d < e; ++d) {
          Ub(a[b][d]);
        }
      }
      return !0;
    }
  });
  var Ub = function(a) {
    db.push(a);
    eb = db.length;
    1 === eb && (Ib ? fa(Ib, Va) : Ba ? Ba.push(function() {
      fa(Va);
    }) : fa(Va));
  };
  var Va = function() {
    function a(u, l) {
      return (u.split(l)[1] || "").split(" ")[0];
    }
    if (!ha) {
      eb !== db.length && Hb && Hb(eb - db.length, eb);
      var b = db.shift();
      if (b) {
        if (ja(b, "prettyprint") && !ja(b, "prettyprinted")) {
          for (var d = !1, e = b.parentNode; e !== ya; e = e.parentNode) {
            var g = K(e);
            if (("PRE" === g || "XMP" === g || "CODE" === g) && ja(e, "prettyprint")) {
              d = !0;
              break;
            }
          }
          if (!d) {
            d = b.className;
            O(b, "prettyprinted");
            e = !1;
            if (!e) {
              e = a(d, "lang-") || a(d, "language-");
              var f;
              !e && (f = Za(b)) && "CODE" === K(f) && (e = a(f.className, "lang-") || a(f.className, "language-"));
            }
            g = K(b);
            "PRE" === g || "XMP" === g ? g = 1 : (g = b.currentStyle, f = A.defaultView, g = (g = g ? g.whiteSpace : f && f.getComputedStyle ? f.getComputedStyle(b, null).getPropertyValue("white-space") : 0) && "pre" === g.substr(0, 3));
            f = !1;
            (f = "true" === f || +f) || (f = a(d, "linenums:") || ja(b, "linenums"), f = f.length ? +f : f);
            f && ec(b, f, g);
            ha = {I:e, v:b, L:f, D:g, A:0, u:0, F:{}, s:[]};
            I(dc);
            return;
          }
        }
        I(Va, x, 0, !0);
      } else {
        Gb && Gb();
      }
    }
  };
  q.PR = {RegExpProxy:la, prettifyElement:Ub, registerCompleteHandler:function(a, b) {
    Gb = a;
    Hb = b;
  }};
  var Fb = A.scripts || M(A, "script");
  var na = Fb[Fb.length - 1].src.split("/");
  --na.length;
  "js" === na[na.length - 1] && --na.length;
  (na = na.join("/")) && (na += "/");
  hb || zb(ya, "mob");
  6.1 > $a && sb(q, "scroll", kb);
  Rb(H);
  6.1 > $a && sb(q, "scroll", yb);
  Rb(Oa);
  if (pb) {
    if (Cb) {
      var Ib = function(a) {
        q.RegExpCompat = bz;
        Ib = x;
        Sb(na + "js/regexpcompat.js");
        function bz(b) {
          for (var d; d = Ba.shift();) {
            d(b);
          }
          Ba = x;
          fa(a);
          Tb(na + "js/regexpcompat.js");
        }
        bz = !1;
      };
    } else {
      q.RegExpCompat = function(a) {
        for (var b; b = Ba.shift();) {
          b(a);
        }
        Ba = x;
        Tb(na + "js/regexpcompat.js");
      }, Sb(na + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, parseFloat, Function, isFinite, setTimeout, clearTimeout, void 0);

