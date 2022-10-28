/** Code Preffity for ES2 [lang-web](github.com/ECMAScript2/es2-code-prettify) */
Function.prototype.apply || (Function.prototype.apply = function(_x, _y) {
  var f = this, x = _x || {}, y = _y || [], j = y.length, i = 0, r;
  x.__apply = f;
  if (!x.__apply) {
    x.constructor.prototype.__apply = f;
  }
  switch(j) {
    case 0:
      r = x.__apply();
      break;
    case 1:
      r = x.__apply(y[0]);
      break;
    case 2:
      r = x.__apply(y[0], y[1]);
      break;
    case 3:
      r = x.__apply(y[0], y[1], y[2]);
      break;
    case 4:
      r = x.__apply(y[0], y[1], y[2], y[3]);
      break;
    case 5:
      r = x.__apply(y[0], y[1], y[2], y[3], y[4]);
      break;
    case 6:
      r = x.__apply(y[0], y[1], y[2], y[3], y[4], y[5]);
      break;
    case 7:
      r = x.__apply(y[0], y[1], y[2], y[3], y[4], y[5], y[6]);
      break;
    case 8:
      r = x.__apply(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7]);
      break;
    case 9:
      r = x.__apply(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8]);
      break;
    default:
      r = [];
      for (; i < j; ++i) {
        r[i] = "y[" + i + "]";
      }
      r = eval("x.__apply(" + r.join(",") + ")");
      break;
  }
  if (x.constructor && x.constructor.prototype.__apply) {
    delete x.constructor.prototype.__apply;
  } else if (x.__apply) {
    delete x.__apply;
  }
  return r;
});
ua = [];
ua.conpare = function(C, k) {
  var y = 0, q, T, x = (C + "").split("."), G = (k + "").split("."), ca = x.length;
  for (q = G.length; "0" === x[ca - 1];) {
    --ca;
  }
  for (; "0" === G[q - 1];) {
    --q;
  }
  for (T = ca < q ? ca : q; y < T; ++y) {
    var ya = x[y] - 0, l = G[y] - 0;
    if (ya !== l) {
      return ya > l ? 1 : -1;
    }
  }
  return ca > q ? 1 : ca === q ? 0 : -1;
};
(function(C, k, y, q, T, x, G, ca) {
  function ya(v, L, K) {
    K = x(v.split(L)[1]);
    return 0 <= K ? K : 0;
  }
  function l(v, L) {
    return 0 <= v.indexOf(L);
  }
  function bb(v) {
    return l(v, "Linux armv") || l(v, "Linux aarch") || l(v, "Linux i686") || l(v, "Linux x86_64");
  }
  function z(v, L) {
    for (var K in L) {
      if (K === v) {
        return !0;
      }
    }
  }
  function n(v, L) {
    var K = "", U = -1, ma;
    if (v = v.split(L)[1]) {
      for (; ma = v.charCodeAt(++U);) {
        if (48 <= ma && 57 >= ma || 46 === ma) {
          K += v.charAt(U);
        } else {
          break;
        }
      }
      for (U = K.length; U;) {
        if (46 === K.charCodeAt(--U)) {
          K = K.substr(0, U);
        } else {
          break;
        }
      }
    }
    return K;
  }
  function za(v) {
    for (var L = arguments, K = 1, U = L[0], ma; K < L.length; ++K) {
      0 > I(U, ma = L[K]) && (U = ma);
    }
    return U;
  }
  function Ea(v) {
    return v === v + "" ? v : v === v - 0 ? "" + v : v.min && v.max ? v.min + "~" + v.max : v.min ? v.min + "~" : "~" + v.max;
  }
  var I = C.conpare, c = q.userAgent, M = q.appVersion, La = x(M) || 0, D = q.platform, Z = y.documentElement, Va = Z && Z.style, R = y.documentMode, Aa = T.width;
  T = T.height;
  var Wa = k.HTMLAudioElement, ra = k.performance, Ma = k.Int8Array, Na = k.ontouchstart !== ca, ha = n(M, "Version/") || n(c, "Version/"), Xa = k.operamini, aa = !Xa && k.opera, Fa = aa && (aa.version && "function" === typeof aa.version ? aa.version() : za(n(c, "Opera "), ha, La)), O = k.opr, Ga = !aa && (y.all || R);
  R = Ga && (R ? R : k.XMLHttpRequest ? y.getElementsByTagName ? 7 : 4 : y.compatMode ? 6 : (0).toFixed ? 5.5 : k.attachEvent ? 5 : 4);
  Z = !Ga && Z.msContentZoomFactor;
  var Ha = !Z && (k.chrome || k.chromium), na = !Ga && function() {
    for (var v in Va) {
      if (0 === v.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Ia = l(c, "UCWEB"), sb = Ia && n(c, " U2/"), cb = Ia && n(c, "; wds "), Ja = n(c.split("_").join("."), "; iPh OS "), J = n(c, "; Adr "), N = l(M, "YJApp-ANDROID"), S = l(D, "Android") || na && l(M, "Android") || N;
  J = n(D, "Android ") || n(M, "Android ") || n(c, "Android ") || J;
  var Ba = l(D, "Linux"), Ca = "MacIntel" === D && q.standalone !== ca, Oa = na && n(c, "Goanna/"), da = !Oa && na && (n(c, "rv:") || n(c.substr(c.indexOf(") Gecko/") - 11), "; ")), db = n(c, "Firefox/"), A = n(c, "Opera/"), tb = k.FNRBrowser, ea = ya(c, "AppleWebKit/"), Da = n(c, "Chrome/"), ub = n(M, "Iron/"), eb = n(c, "OPR/"), Pa = n(M, "KHTML/"), fb = n(c.toLowerCase(), "iris");
  n(c, "FxiOS/");
  n(c, "CriOS/");
  n(c, "EdgiOS/");
  var gb = n(c, "Silk/"), ia = ya(c, "SamsungBrowser/"), ja = !ia && function() {
    for (var v = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    L, K = v.length; L = v[--K];) {
      if (l(c, L)) {
        return 2 > x(ha) ? ha : .9;
      }
    }
    v = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (K = v.length; L = v[--K];) {
      if (l(c, L)) {
        return ha;
      }
    }
  }(), hb = Ha && 534.3 >= ea, oa = bb(D), ba = oa && !l(c, D) && bb(c);
  Na = Na && (ea || na) && ba || !J && N;
  N = !!k.ReactNativeWebView;
  oa = oa && function() {
    for (var v in k) {
      if (0 === v.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var ka = (ba = k.puffinDevice) && ba.clientInfo;
  ka = (ba = ka && "iOS" === ka.os && ka.osVersion) && ka.model;
  var pa = !R && y.registerElement, qa = !R && y.execCommand, ib = k.webkitCancelAnimationFrame, vb = Ba && pa && "11.0.696.34" === Da, Qa = k._firefoxTV_playbackStateObserverJava, jb = ya(c, "diordnA ");
  if ("Nitro" === D) {
    var r = 1;
  } else if ("Nintendo DSi" === D) {
    r = 2;
    var p = A;
  } else if ("New Nintendo 3DS" === D || l(c, "iPhone OS 6_0") && 320 === Aa && 240 === T) {
    r = 4, p = n(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === D) {
    r = 3, p = n(c, "Version/"), ea = 535;
  } else if ("Nintendo Swicth" === D) {
    r = 7, p = n(M, "NintendoBrowser/");
  } else if (k.wiiu) {
    r = 6;
    p = n(M, "NintendoBrowser/");
    var E = 15, F = n(M, "AppleWebKit/") || (ib ? 536 : 534);
    p || (p = ib ? 4 : 2, l(M, "Macintosh;") || l(M, "Windows NT") && l(M, "Touch"));
  } else if (aa && aa.wiiremote) {
    r = 5, p = n(c, "Wii; U; ; ");
  } else if (A = n(c, "PlayStation Vita ")) {
    r = 10, p = A;
  } else if (A = n(c, "(PlayStation Portable); ")) {
    r = 8;
    p = A;
    var Ra = 3.3;
  } else if (A = n(c, "PLAYSTATION 3; ") || n(c, "PLAYSTATION 3 ")) {
    r = 11, p = A, 0 > I("4.10", A) && (E = 26, F = A);
  } else if (l(c, "Xbox One")) {
    r = 15, p = 1;
  } else if (l(c, "Xbox")) {
    r = 14, p = 1;
  } else if (2 === La && l(c, "Sony/COM2/")) {
    r = 17;
    p = 2;
    Ra = 3.4;
    var Ka = !0;
  } else if (0 === D.indexOf("iP") || Ja || ba || Ca) {
    if (ba) {
      switch(p = ba, ka.substr(0, 4)) {
        case "iPho":
          var V = 0;
          n(ka, V);
          var P = !0;
          break;
        case "iPad":
          V = 1;
          n(ka, V);
          var W = !0;
          break;
        case "iPod":
          V = 2;
          n(ka, V);
          var Ya = !0;
      }
    } else {
      Ja ? p = Ja : (p = n(M.split("_").join("."), "OS "), z("isSecureContext", k), z("enableWebGL", k), z("sameOrigin", k));
      if (!p || tb) {
        p = k.PointerEvent ? 13 : k.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : q.sendBeacon ? 11.3 : k.WebAssembly ? 11.2 : k.HTMLMeterElement ? 10.3 : k.Proxy ? 10.2 : k.HTMLPictureElement ? 9.3 : G.isNaN ? 9.2 : k.SharedWorker ? ra && ra.now ? 8 : 8.4 : qa ? 7.1 : k.webkitURL ? 6.1 : k.Worker ? 5.1 : Ma ? 4.3 : Wa ? 4.1 : 3.2;
      }
      var Y = Aa === 1.5 * T || 1.5 * Aa === T;
      0 === D.indexOf("iPhone") ? (V = 0, P = !0) : 0 === D.indexOf("iPad") || Ca ? (V = 1, W = !0) : 0 === D.indexOf("iPod") && (V = 2, Ya = !0);
    }
    E = !ba && (q.standalone || (W || 12 > p) && z("webkitFullscreenEnabled", y) || 11 <= p && 13 > p && q.mediaDevices) ? 16 : 17;
    r = 24;
    F = p;
  } else if (l(c, "Kobo")) {
    r = 18, E = 21, F = 2.2, S = !0;
  } else if (l(c, "EBRD")) {
    r = 19, E = 21, F = 2.2;
  } else if (A = n(c, "CrOS x86_64 ") || n(c, "CrOS aarch64 ") || n(c, "CrOS i686 ") || n(c, "CrOS armv7l ")) {
    r = 28, p = A;
  } else if (k.onmoztimechange !== ca) {
    r = 29, p = 18.1 > da ? "1.0.1" : 19 > da ? 1.1 : 27 > da ? 1.2 : 29 > da ? 1.3 : 31 > da ? 1.4 : 33 > da ? 2 : 35 > da ? 2.1 : 38 > da ? 2.2 : 45 > da ? 2.5 : 2.6, l(c, "Mobile") ? P = !0 : l(c, "Tablet") ? W = !0 : l(c, "TV");
  } else if (k.palmGetResource) {
    r = 30, p = n(c, "webOS/") || n(c, "WEBOS") || n(c, "hpwOS/"), l(c, "webOS.TV") || l(c, "/SmartTV") || (P = !0);
  } else if (A = n(c, "Tizen ")) {
    r = 31, p = A, E = 24, F = ia, P = !0;
  } else if (A = n(c, "Windows Phone ") || n(M, "Windows Phone OS ") || cb) {
    r = 23, p = A, P = !0;
  } else if (Z && "ARM" === D) {
    r = 23, p = 10, P = !0;
  } else if (Ga && l(M, "ZuneWP")) {
    r = 23, p = 11 === R ? 8.1 : 10 === R ? 8 : 9 === R ? 7.5 : 7 === R ? 7 : "?", P = !0;
  } else if (l(c, "FOMA;")) {
    r = 16, P = !0;
  } else if (l(c, "SoftBank;")) {
    r = 16, P = !0;
  } else if (l(c, "KFMUWI")) {
    var la = !0;
    p = 6.3;
    var Q = W = !0;
  } else if (l(c, "KFKAWI")) {
    la = !0, p = 6, Q = W = !0;
  } else if (l(c, "KFSUWI") || l(c, "KFAUWI") || l(c, "KFDOWI")) {
    la = !0, p = 5, Q = W = !0;
  } else if (l(c, "KFGIWI")) {
    la = !0, p = 5, Q = W = !0;
  } else if (l(c, "KFARWI") || l(c, "KFSAWA") || l(c, "KFSAWI")) {
    la = !0, p = 5 <= x(J) ? 5 : 4, Q = W = !0;
  } else if (l(c, "KFSOWI") || l(c, "KFTHWA") || l(c, "KFTHWI") || l(c, "KFAPWA") || l(c, "KFAPWI")) {
    la = !0, p = 3, Q = W = !0;
  } else if (l(c, "KFOT") || l(c, "KFTT") || l(c, "KFJWA") || l(c, "KFJWI")) {
    la = !0, p = 2, Q = W = !0;
  } else if (l(c, "Kindle Fire")) {
    la = !0, p = 1, Q = W = !0;
  } else if (A = n(c, "Kindle/")) {
    r = 20, p = A, E = 21, F = 2.2;
  } else if (Qa) {
    la = !0, p = J || jb, Q = !0;
  } else if (l(c, "AmazonWebAppPlatform") || l(c, "; AFT")) {
    la = !0, p = J, Q = !0;
  } else if (l(c, "MeeGo")) {
    r = 32;
  } else if (l(c, "Maemo")) {
    r = 33;
  } else if (0 === c.indexOf("Windows Mobile;") || fb) {
    r = 22, Ka = !0;
  } else if ("WinCE" === D) {
    r = 21, Ka = !0;
  } else if (0 === D.indexOf("Win")) {
    r = "Win16" === D ? 35 : "Win32" === D ? 36 : "Win64" === D ? 37 : 0, p = n(c, "Windows NT ") || n(c, "Windows ");
  } else if (0 === D.indexOf("Mac")) {
    r = "Mac68K" === D ? 39 : "MacPowerPC" === D || "MacPPC" === D ? 38 : "MacIntel" === D ? 40 : 0;
    if (A = n(c.split("_").join("."), "Mac OS X ")) {
      p = A;
    }
    var kb = !0;
  } else if (l(c, "BlackBerry") || l(c, "BB10")) {
    r = 34, p = ha, P = !0;
  } else if (l(c, "SunOS") || l(c, "Sun Solaris")) {
    r = 42;
  } else if (l(c, "FreeBSD")) {
    r = 43;
  } else if (l(c, "OpenBSD")) {
    r = 44;
  } else if (l(c, "NetBSD")) {
    r = 45;
  } else if (S && na) {
    l(c, "Android 4.4;") ? Y = {min:2.3} : 4 <= x(J) ? Y = J : Y = {min:2.2}, p = Y;
  } else if (S && aa) {
    J ? Y = J : Y = {min:1.6}, p = Y, l(c, "Tablet") ? W = !0 : P = !0;
  } else if (J) {
    p = J, S = !0;
  } else if (Ba && Na || N || oa) {
    var sa = !0;
    ia ? Y = {min:4.4} : Ha && !hb || O || eb ? Y = {min:4} : (Y = J = Va.touchAction !== ca ? {min:5} : pa ? 4.4 : Ma ? q.connection ? k.searchBoxJavaBridge_ || Ha ? G.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= ea ? 3 : 533 <= ea ? Wa ? 2.3 : 2.2 : 530 <= ea ? 2 : 1.5, ja && (E = 24, F = ja));
    p = Y;
    S = !0;
  } else {
    vb ? (p = {min:5}, sa = S = !0) : Ba && (l(c, "Ubuntu") ? r = 46 : (A = n(c, "Mint/")) ? (r = 47, p = A) : (A = n(c, "Fedora/")) ? (r = 48, p = A) : r = l(c, "Gentoo") ? 49 : 50);
  }
  la || S && sa && gb ? r = 27 : S && (r = r || 26);
  E || (Q = Q || S, aa ? (E = Q || Ka || P || W ? 9 : 8, F = Fa) : Ga ? (Y = ya(M, "Trident/") + 4, E = Ka || P || W || Ya ? 3 : kb && 5 <= R ? 7 : 2, F = R) : Z ? (E = 23 === r ? 6 : 5, F = n(M, "Edge/")) : Oa ? (E = 13, F = Oa) : na ? (E = Q ? 12 : 11, F = da || db) : ia ? (E = 24, F = ia) : (A = Ra || n(c, "NetFront/")) ? (E = 18, F = A) : (A = n(c, "iCab")) ? (E = 19, F = A) : (A = za(n(c, "Opera Mini/"), n(c, "Opera Mobi/")) || Xa && ha) ? (E = 10, F = A, r || (l(c, "iPhone") ? V = 0 : l(c, 
  "iPad") ? V = 1 : l(c, "iPod") && (V = 2), V && (r = 24))) : Ia ? (E = 25, F = sb) : Pa ? (E = 14, F = La) : S && hb ? (E = 21, F = J) : Ha || O || eb ? (E = Q ? 22 : 20, F = Da || ub) : S && pa ? (E = 23, F = 5 > x(J) ? J : Da) : S && (ha || sa) ? (E = 21, F = J) : Da ? (E = Q ? 22 : 20, F = Da) : ea && (E = 15, F = ea));
  r && (C[2] = r, p && (C[3] = Ea(p)));
  E && (C[0] = E, F && (C[1] = Ea(F)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var C = this[this.length - 1];
  --this.length;
  return C;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var C = arguments, k = 0, y = C.length, q = this.length; k < y; ++k) {
    this[q + k] = C[k];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var C = this[0], k = 1, y = this.length; k < y; ++k) {
    this[k - 1] = this[k];
  }
  --this.length;
  return C;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var C = arguments, k = C.length, y = this.length += k - 1, q = y; q >= k; --q) {
    this[q] = this[q - k];
  }
  for (q = 0; q < k; ++q) {
    this[q] = C[q];
  }
  return y;
});
Array.prototype.splice || (Array.prototype.splice = function(C, k) {
  var y = arguments, q = y.length - 2 - k, T = this.slice(C, C + k), x;
  if (0 < q) {
    var G = this.length - 1;
    for (x = C + k; G >= x; --G) {
      this[G + q] = this[G];
    }
  } else if (0 > q) {
    G = C + k;
    for (x = this.length; G < x; ++G) {
      this[G + q] = this[G];
    }
    this.length += q;
  }
  G = 2;
  for (x = y.length; G < x; ++G) {
    this[G - 2 + C] = y[G];
  }
  return T;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(C, k) {
  var y = this.length >>> 0;
  if (0 === y) {
    return -1;
  }
  if (k) {
    var q = k || 0;
    q = -Infinity === q ? 0 : (0 > q ? -q : q) | 0;
    if (y <= q) {
      return -1;
    }
  }
  for (q = 0 <= q ? q : 0 < y + q ? y + q : 0; q < y; ++q) {
    if (this[q] === C) {
      return q;
    }
  }
  return -1;
});
(function(C, k, y, q, T, x, G, ca, ya, l, bb, z) {
  function n(a) {
    K(k, "load", n);
    n = z;
    Ma(ea, a, !0);
    wb = ea = z;
  }
  function za() {
    for (var a, b = 0, e = new T() - 0; b < oa.length;) {
      e < oa[0].t ? ++b : (a = oa.splice(b, 1)[0], a.f(a.p));
    }
    pa = oa.length ? l(za, ba) : 0;
  }
  function Ea() {
    for (var a, b = 0; b < Pa.length; ++b) {
      a = Pa[b], a.f();
    }
  }
  function I(a) {
    if (C[0] === a) {
      return J === J + "" ? G(J) : J;
    }
  }
  function c(a) {
    var b = C[3];
    if (C[2] === a) {
      return b === b + "" ? G(b) : b;
    }
  }
  function M() {
    ia && (ia = clearInterval(ia));
  }
  function La() {
    pa && (pa = bb(pa));
  }
  function D(a, b, e) {
    var d = ["<", a], g = 1, f, u;
    if (b) {
      for (f in b) {
        var m = b[f];
        if (null != m && "" !== m) {
          if ("style" === f) {
            d[++g] = ' style="';
            for (u in m) {
              for (var B = ++g, h, t = [], w = u.split(""), H = w.length; H;) {
                h = w[--H], "A" <= h && "Z" >= h && (h = "-" + h.toLowerCase()), t[H] = h;
              }
              d[B] = t.join("") + ":" + m[u] + ";";
            }
            d[++g] = '"';
          } else {
            "className" === f && (f = "class"), d[++g] = " " + f + '="' + m + '"';
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
    var e = "*" === b && 6 > N ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), d = [], g = 0, f;
    for (f = e.length; g < f; ++g) {
      d[g] = e[g];
    }
    return d;
  }
  function Va(a) {
    return qa ? a.parentElement : a.parentNode;
  }
  function R(a, b, e, d, g, f) {
    if (qa) {
      var u = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
      var m = jb(2 > a ? Qa(b) : b);
      m = 2 > a ? m.indexOf(b) + a : m.length;
      b.insertAdjacentHTML(u, D(e, d, g));
      b = jb(b)[m];
      null != g && ("font" === e ? b.nodeType = 3 : b.children[0].nodeType = 3);
    } else if (Ka) {
      b = x.createElement(D(e, d));
    } else {
      b = f ? x.createElementNS("http://www.w3.org/2000/svg", e) : x.createElement(e);
      if (d) {
        for (u in d) {
          if ((e = d[u]) || 0 === e) {
            switch(u) {
              case "class":
              case "className":
                Y(b, e);
                break;
              case "style":
                a = b.style;
                for (m in e) {
                  a[m] = e[m];
                }
                break;
              default:
                Ya(b, u, e);
            }
          }
        }
      }
      V || null != g && Aa(b, g);
    }
    return b;
  }
  function Aa(a, b) {
    if (qa) {
      return R(2, a, "font", z, b);
    }
    var e = x.createTextNode("" + b);
    a.appendChild(e);
    return e;
  }
  function Wa(a, b) {
    9 > N ? a.className = b : a.setAttribute("class", b);
  }
  function ra(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function Ma(a, b, e) {
    for (var d = 0; d < a.length; ++d) {
      !0 === a[d](b) && (a.splice(d, 1), --d);
    }
    e && (a.length = 0);
  }
  function Na() {
    var a = sa, b;
    for (sa = []; b = a.shift();) {
      Ma(b, a.shift(), a.shift());
    }
  }
  function ha(a) {
    var b = a || event;
    a = U[b.type];
    var e = -1, d, g;
    N ? (b.preventDefault = function() {
      b.returnValue = !1;
    }, b.stopPropagation = function() {
      b.cancelBubble = !0;
    }) : lb && (b.C = b.stopPropagation, b.stopPropagation = function() {
      g = !0;
    });
    for (; d = a[++e];) {
      d.j === this ? (this.h = d.i, this.h(b), this.h = cb, this.h = z) : 7.2 > Ba && this === x && d.j === k && (k.h = d.i, k.h(b), delete k.h);
    }
    if (N) {
      return b.preventDefault = b.stopPropagation = z, b.returnValue;
    }
    lb && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (mb = !0), g && !mb && b.C(), b.C = b.stopPropagation = z);
  }
  function Xa() {
    var a = 9 === kb.offsetWidth;
    if (Q !== a) {
      var b = Da;
      a = Q = a;
      v && !sa.length && ja(Na);
      sa.push(b, a, void 0);
    }
  }
  function aa(a) {
    return a === "" + a;
  }
  function Fa(a, b) {
    return nb ? new Bb(a, b) : new q(a, b);
  }
  function O(a, b, e, d) {
    if (Cb() - Db < Lb && !d) {
      return a(b);
    }
    ja(Ga, {H:a, J:b});
  }
  function Ga(a) {
    Db = Cb();
    a.H(a.J);
  }
  function Ha(a, b) {
    a && Za[a] || (a = Eb.test(b) ? "default-markup" : "default-code");
    var e = !!Za[a];
    e && O(Fb, a, 0, !0);
    return e;
  }
  function na() {
    function a(ta, Sa, Ta) {
      Sa && (b.g = b.g || [], b.g.push({l:b, v:b.v, D:1, s:u, A:ta, o:Sa, m:Ta, F:{}, u:0}));
    }
    var b = fa, e = b.m, d = e[0], g = e[2], f = b.A, u = b.s, m = b.K.shift(), B = b.F;
    if (m) {
      var h = B[m], t;
      if (!(0 <= h)) {
        if (t = d[m.charAt(0)]) {
          var w = m.match(t[1]);
          h = t[0];
        } else {
          for (h = 0, d = -1; t = g[++d];) {
            if (w = m.match(t[1])) {
              h = t[0];
              break;
            }
          }
        }
        !(t = aa(h)) || w && aa(w[1]) || (t = !1, h = 11);
        t || (B[m] = h);
      }
      g = b.u;
      B = m.length;
      b.u += B;
      if (t) {
        t = w[1];
        d = m.indexOf(t);
        var H = t.length, X = d + H;
        w[2] && (X = B - w[2].length, d = X - H);
        a(f + g, m.substr(0, d), e);
        if (H && Ha(h, t)) {
          a(f + g + d, t);
          var va = !0;
        }
        a(f + g + X, m.substr(X), e);
        b.g && b.g.length && (fa = b.g.shift());
        va || (fa !== b ? O(xb, z, 2) : O(na, z, 2));
      } else {
        u.push(f + g, h), O(na, z, 2);
      }
    } else {
      b.l ? (fa = b.l.g.shift()) ? O(xb, z, 2) : (fa = b.l, O(na, z, 2)) : O(Mb, z, 2);
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
      O(Ia, a, 1);
    } else {
      O(Fb, a);
    }
  }
  function sb(a) {
    for (var b, e = a.firstChild; e; e = e.nextSibling) {
      var d = e.nodeType;
      b = 1 === d ? b ? a : e : 3 === d ? Gb.test(e.nodeValue) ? a : b : b;
    }
    return b === a ? z : b;
  }
  var cb = y, Ja = x.body, J = C[1], N = I(2) || I(3), S = I(7);
  I(5) || I(6);
  var Ba = I(8) || I(9), Ca = I(11) || I(12);
  Ca && C.conpare(J, "1.9.1");
  I(13);
  var Oa = I(15), da = I(16) || I(17);
  I(10) || I(25);
  var db = I(20) || I(22);
  db || I(23) || I(21) || I(24);
  db && G(navigator.userAgent.split("Edg/")[1]);
  G(navigator.appVersion.split("Trident/")[1]);
  c(35) || c(36) || c(37);
  var A = !N && !S && (new ca('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), tb = c(1) || c(2) || c(3) || c(4) || c(8) || c(9) || c(10), ea = [], Da = [];
  var ub = function(a) {
    Pa.length || (ia = setInterval(Ea, fb));
    Pa.push({f:a, G:++gb});
    return gb;
  };
  var eb = function() {
    ia && (M(), ia = setInterval(Ea, fb));
  };
  var Pa = [], fb = 500, gb = 0, ia;
  if (5 > N || S) {
    k._wdb_onlooptimer = Ea, Ea = "_wdb_onlooptimer()";
  }
  var ja = function(a, b, e) {
    oa.length || (pa = l(za, ba));
    oa.push({f:a, p:b, G:++ka, t:new T() - 0 + (ba < e ? e : ba)});
    return ka;
  };
  var hb = function() {
    pa && (La(), pa = l(za, ba));
  };
  var oa = [], ba = 16, ka = 0, pa;
  if (5 > N || S) {
    k._wdb_ontimer = za, za = "_wdb_ontimer()";
  }
  var qa = 5 > N;
  var ib = Z(x, "html")[0];
  var vb = Z(x, "head")[0];
  var Qa = Va;
  var jb = function(a) {
    a = qa ? a.children : a.childNodes;
    for (var b = [], e = a.length; e;) {
      b[--e] = a[e];
    }
    return b;
  };
  var r = function(a, b, e, d, g) {
    b = R(2, a, b, e, d, g);
    qa || (a.appendChild(b), V && null != d && Aa(b, d));
    return b;
  };
  var p = function(a, b, e, d, g) {
    b = R(0, a, b, e, d, g);
    qa || (Va(a).insertBefore(b, a), V && null != d && Aa(b, d));
    return b;
  };
  var E = Aa;
  var F = function(a, b) {
    var e;
    if (qa) {
      return R(1, a, "font", z, b);
    }
    var d = x.createTextNode("" + b);
    (e = a.nextSibling) ? Qa(a).insertBefore(d, e) : Qa(a).appendChild(d);
    return d;
  };
  var Ra = function(a) {
    qa ? a.outerHTML = "" : Qa(a).removeChild(a);
  };
  var Ka = 9 > N, V = Ka;
  var P = function(a) {
    return a.tagName.toUpperCase();
  };
  var W = function(a, b) {
    return a.getAttribute(b) || "";
  };
  var Ya = function(a, b, e) {
    a.setAttribute(b, e);
  };
  var Y = Wa;
  var la = function(a, b) {
    var e;
    if (!ra(a, b)) {
      if (e = a.className) {
        b = " " + b;
      }
      Wa(a, e + b);
    }
  };
  var Q, kb, sa = [], v;
  ea.push(function() {
    kb = r(Ja, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
    wb(function() {
      v = !0;
      sa.length && ja(Na);
    });
  });
  var L = function(a, b, e, d) {
    if (Hb) {
      a.addEventListener(b, e, d ? A ? d : d.capture : !1);
    } else {
      var g = {j:a, i:e};
      d = U[b];
      var f = "on" + b, u, m;
      if (d) {
        for (u = d.length; m = d[--u];) {
          if (m.j === a && m.i === e) {
            return;
          }
        }
        U[b].push(g);
      } else {
        U[b] = d = [g], ma || (b = a[f], "function" === typeof b && b !== ha && d.unshift({j:a, i:b}));
      }
      ma ? a.attachEvent(f, ha) : a[f] = ha;
    }
  };
  var K = function(a, b, e, d) {
    if (Hb) {
      a.removeEventListener(b, e, d ? A ? d : d.capture : !1);
    } else {
      d = U[b];
      b = "on" + b;
      var g, f, u;
      if (d) {
        for (g = d.length; f = d[--g];) {
          f.j === a && (f.i === e ? d.splice(g, 1) : u = !0);
        }
        u || (ma ? a.detachEvent(b, ha) : (a[b] = cb, a[b] = null));
      }
    }
  };
  var U = {}, ma = !1, lb = 525.13 > Oa, Hb = !lb && !S && k.addEventListener, mb;
  lb && ib.addEventListener("click", function(a) {
    if (mb) {
      return mb = !1, a.preventDefault(), !1;
    }
  });
  var wb = function(a) {
    ea.push(a);
  };
  var Ib = function(a) {
    qb && qb.push(a);
  };
  var qb = [];
  if (419.3 >= Oa) {
    var rb = function() {
      if (rb) {
        var a = x.readyState;
        "loaded" === a || "complete" === a ? (rb = z, n()) : ja(rb);
      }
    };
    ja(rb);
  } else {
    L(k, "load", n);
  }
  N || .9 <= Ca && 1.8 > Ca ? L(k, "unload", function(a) {
    Ma(qb, a, !0);
  }) : qb = z;
  wb(function() {
    Xa();
    ub(Xa);
  });
  var nb = !q || .9 > Ca || 8 > Ba || 5.5 > N, Nb = .9 <= Ca || 7.5 <= Ba || N;
  var Za = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
  var Ob = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], Pb = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
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
  Qb = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), Cb = T.now || function() {
    return +new T();
  }, Bb, Db, fa, yb, zb, Lb = 5 > N ? 60 : 5.5 > N ? 0 : nb ? 20 : 10, Eb, Gb;
  var wa = [function() {
    Eb = Fa("^\\s*<");
    Gb = Fa("\\S");
  }];
  nb ? wa.unshift(function(a) {
    k.RegExpCompat = Bb = a;
  }) : (wa[0](), wa = z);
  var Sb = function() {
    var a = fa, b = a.I, e = Rb(a.v, a.D), d = a.o = e.o;
    a.B = e.B;
    Ha(b, d) || (fa = z, O(Ua, z, 0, !0));
  };
  var xb = function() {
    var a = fa;
    a.K = a.o.match(a.m[1]) || [];
    a.s.push(a.A, 0);
    O(na, z, 2);
  };
  var ob = [];
  var Fb = function(a) {
    function b(h) {
      var t = h;
      0 <= h && (t = Pb[h]);
      0 <= t[1] && (t[1] = e(t[1]));
      return t;
    }
    function e(h) {
      var t = h;
      return 0 <= h && (t = pb[h], !t.exec) ? (ob.push(h), h) : t;
    }
    var d = fa, g = Za[a];
    aa(g) && (g = Za[a] = Za[g]);
    var f = g[0];
    if (0 <= f) {
      f = Ob[f];
      if (0 <= f["-num"]) {
        var u = f["-num"];
        delete f["-num"];
        for (var m = -1; 9 > m;) {
          f["" + ++m] = u;
        }
      }
      g[0] = f;
    }
    for (var B in f) {
      f[B] = b(f[B]);
    }
    g[1] = e(g[1]);
    f = g[2];
    m = 0;
    for (u = f.length; m < u; ++m) {
      f[m] = b(f[m]);
    }
    ob.length ? O(Ia, a, 2) : (d.m ? d.l && (d.l.g[0].m = g) : d.m = g, O(xb, z, 1));
  };
  var Rb = function(a, b) {
    function e(B) {
      var h = B.nodeType;
      if (1 === h) {
        if (!ra(B, "nocode")) {
          for (h = B.firstChild; h; h = h.nextSibling) {
            e(h);
          }
          h = P(B);
          if ("BR" === h || "LI" === h) {
            d[u] = "\n", f[u << 1] = g++, f[u++ << 1 | 1] = B;
          }
        }
      } else if (3 === h || 4 === h) {
        if (h = B.nodeValue) {
          h = b ? h.split("\r\n").join("\n").split("\r").join("\n") : h.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), d[u] = h, f[u << 1] = g, g += h.length, f[u++ << 1 | 1] = B;
        }
      }
    }
    var d = [], g = 0, f = [], u = 0;
    e(a);
    var m = d.join("");
    "\n" === m.charAt(m.length - 1) && (m = m.substr(0, m.length - 1));
    return {o:m, B:f};
  };
  var Tb = function(a, b, e) {
    function d(h) {
      var t = h.nodeType;
      if (1 === t && !ra(h, "nocode")) {
        if ("BR" === P(h)) {
          g(h), h.parentNode && Ra(h);
        } else {
          for (h = h.firstChild; h; h = h.nextSibling) {
            d(h);
          }
        }
      } else if ((3 === t || 4 === t) && e) {
        var w = h.nodeValue, H = w.indexOf("\r\n"), X = 2;
        -1 === H && (H = w.indexOf("\n"), X = 1);
        -1 === H && (H = w.indexOf("\r"));
        -1 !== H && (t = w.substr(0, H), h.nodeValue = t, (w = w.substr(H + X)) && F(h, w), g(h), t || Ra(h));
      }
    }
    function g(h) {
      function t(H, X) {
        var va = X ? H.cloneNode(!1) : H, ta = H.parentNode;
        if (ta) {
          ta = t(ta, 1);
          var Sa = H.nextSibling;
          ta.appendChild(va);
          for (var Ta = Sa; Ta; Ta = Sa) {
            Sa = Ta.nextSibling, ta.appendChild(Ta);
          }
        }
        return va;
      }
      for (; !h.nextSibling;) {
        if (h = h.parentNode, !h) {
          return;
        }
      }
      h = t(h.nextSibling, 0);
      for (var w; (w = h.parentNode) && 1 === w.nodeType;) {
        h = w;
      }
      u.push(h);
    }
    for (var f = x.createElement("li"); a.firstChild;) {
      f.appendChild(a.firstChild);
    }
    for (var u = [f], m = 0; m < u.length; ++m) {
      d(u[m]);
    }
    if (b === (b | 0)) {
      if (10 <= b && 7.2 > Ba) {
        var B = x.createElement("ol");
        B.innerHTML = '<li value="' + b + '">' + f.innerHTML + "</li>";
        u[0] = B.firstChild;
      } else {
        Ya(f, "value", b);
      }
    }
    B = r(a, "ol", {className:"linenums"});
    a = Math.max(0, b - 1 | 0) || 0;
    m = 0;
    for (b = u.length; m < b; ++m) {
      f = u[m], Y(f, "L" + (m + a) % 10), f.firstChild || E(f, "\u00a0"), B.appendChild(f);
    }
  };
  var Mb = function() {
    var a = fa, b = a.o, e = b.length, d = 0, g = a.B, f = g.length, u = 0, m = a.s, B = m.length, h = 0;
    m[B] = e;
    var t, w;
    for (w = t = 0; w < B;) {
      m[w] !== m[w + 2] ? (m[t++] = m[w++], m[t++] = m[w++]) : w += 2;
    }
    B = t;
    for (w = t = 0; w < B;) {
      var H = m[w], X = m[w + 1];
      for (w += 2; w + 2 <= B && m[w + 1] === X;) {
        w += 2;
      }
      m[t++] = H;
      m[t++] = X;
    }
    m.length = t;
    a = a.v;
    B = "";
    a && (B = a.style.display, a.style.display = "none");
    for (; u < f;) {
      t = g[u + 2] || e;
      H = m[h + 2] || e;
      w = Math.min(t, H);
      X = g[u + 1];
      var va;
      if (1 !== X.nodeType && (va = b.substring(d, w))) {
        9 > N && (va = va.split("\n").join("\r"));
        var ta = p(X, "span", {className:Qb[m[h + 1]]}, va);
        Ra(X);
        d < t && (g[u + 1] = F(ta, b.substring(w, t)));
      }
      d = w;
      d >= t && (u += 2);
      d >= H && (h += 2);
    }
    a && (a.style.display = B);
    fa = z;
    O(Ua, z, 3, !0);
  };
  var $a = [], ab;
  Da.push(function(a) {
    if (a) {
      a = [Z(x, "pre"), Z(x, "code"), Z(x, "xmp")];
      for (var b = 0; b < a.length; ++b) {
        for (var e = 0, d = a[b].length; e < d; ++e) {
          Jb(a[b][e]);
        }
      }
      return !0;
    }
  });
  var Jb = function(a) {
    $a.push(a);
    ab = $a.length;
    1 === ab && (Ab ? ja(Ab, Ua) : wa ? wa.push(function() {
      ja(Ua);
    }) : ja(Ua));
  };
  var Ua = function() {
    function a(u, m) {
      return (u.split(m)[1] || "").split(" ")[0];
    }
    if (!fa) {
      ab !== $a.length && zb && zb(ab - $a.length, ab);
      var b = $a.shift();
      if (b) {
        if (ra(b, "prettyprint") && !ra(b, "prettyprinted")) {
          for (var e = !1, d = b.parentNode; d !== Ja; d = d.parentNode) {
            var g = P(d);
            if (("PRE" === g || "XMP" === g || "CODE" === g) && ra(d, "prettyprint")) {
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
              !d && (f = sb(b)) && "CODE" === P(f) && (d = a(f.className, "lang-") || a(f.className, "language-"));
            }
            g = P(b);
            "PRE" === g || "XMP" === g ? g = 1 : (g = b.currentStyle, f = x.defaultView, g = (g = g ? g.whiteSpace : f && f.getComputedStyle ? f.getComputedStyle(b, null).getPropertyValue("white-space") : 0) && "pre" === g.substr(0, 3));
            f = !1;
            (f = "true" === f || +f) || (f = a(e, "linenums:") || ra(b, "linenums"), f = f.length ? +f : f);
            f && Tb(b, f, g);
            fa = {I:d, v:b, L:f, D:g, A:0, u:0, F:{}, s:[]};
            O(Sb);
            return;
          }
        }
        O(Ua, z, 0, !0);
      } else {
        yb && yb();
      }
    }
  };
  k.PR = {RegExpProxy:Fa, prettifyElement:Jb, registerCompleteHandler:function(a, b) {
    yb = a;
    zb = b;
  }};
  var Kb = x.scripts || Z(x, "script");
  var xa = Kb[Kb.length - 1].src.split("/");
  --xa.length;
  "js" === xa[xa.length - 1] && --xa.length;
  (xa = xa.join("/")) && (xa += "/");
  tb || W(Ja, "mob");
  6.1 > da && L(k, "scroll", eb);
  Ib(M);
  6.1 > da && L(k, "scroll", hb);
  Ib(La);
  if (nb) {
    if (Nb) {
      var Ab = function(a) {
        k.RegExpCompat = function(b) {
          for (var e; e = wa.shift();) {
            e(b);
          }
          wa = z;
          ja(a);
        };
        Ab = z;
        r(vb, "script", {src:xa + "js/regexpcompat.js"});
      };
    } else {
      k.RegExpCompat = function(a) {
        for (var b; b = wa.shift();) {
          b(a);
        }
        wa = z;
      }, x.write('<script src="' + xa + 'js/regexpcompat.js">\x3c/script>');
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, parseFloat, Function, isFinite, setTimeout, clearTimeout, void 0);

