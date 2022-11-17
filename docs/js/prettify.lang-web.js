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
ua.conpare = function(y, k) {
  var z = 0, q, T, x = (y + "").split("."), G = (k + "").split("."), da = x.length;
  for (q = G.length; "0" === x[da - 1];) {
    --da;
  }
  for (; "0" === G[q - 1];) {
    --q;
  }
  for (T = da < q ? da : q; z < T; ++z) {
    var ya = x[z] - 0, l = G[z] - 0;
    if (ya !== l) {
      return ya > l ? 1 : -1;
    }
  }
  return da > q ? 1 : da === q ? 0 : -1;
};
(function(y, k, z, q, T, x, G, da) {
  function ya(u, P, H) {
    H = x(u.split(P)[1]);
    return 0 <= H ? H : 0;
  }
  function l(u, P) {
    return 0 <= u.indexOf(P);
  }
  function bb(u) {
    return l(u, "Linux armv") || l(u, "Linux aarch") || l(u, "Linux i686") || l(u, "Linux x86_64");
  }
  function A(u, P) {
    for (var H in P) {
      if (H === u) {
        return !0;
      }
    }
  }
  function n(u, P) {
    var H = "", Z = -1, ha;
    if (u = u.split(P)[1]) {
      for (; ha = u.charCodeAt(++Z);) {
        if (48 <= ha && 57 >= ha || 46 === ha) {
          H += u.charAt(Z);
        } else {
          break;
        }
      }
      for (Z = H.length; Z;) {
        if (46 === H.charCodeAt(--Z)) {
          H = H.substr(0, Z);
        } else {
          break;
        }
      }
    }
    return H;
  }
  function za(u) {
    for (var P = arguments, H = 1, Z = P[0], ha; H < P.length; ++H) {
      0 > K(Z, ha = P[H]) && (Z = ha);
    }
    return Z;
  }
  function Ea(u) {
    return u === u + "" ? u : u === u - 0 ? "" + u : u.min && u.max ? u.min + "~" + u.max : u.min ? u.min + "~" : "~" + u.max;
  }
  var K = y.conpare, c = q.userAgent, L = q.appVersion, La = x(L) || 0, D = q.platform, aa = z.documentElement, Va = aa && aa.style, R = z.documentMode, Aa = T.width;
  T = T.height;
  var Wa = k.HTMLAudioElement, sa = k.performance, Ma = k.Int8Array, Na = k.ontouchstart !== da, ia = n(L, "Version/") || n(c, "Version/"), Xa = k.operamini, ba = !Xa && k.opera, Fa = ba && (ba.version && "function" === typeof ba.version ? ba.version() : za(n(c, "Opera "), ia, La)), M = k.opr, Ga = !ba && (z.all || R);
  R = Ga && (R ? R : k.XMLHttpRequest ? z.getElementsByTagName ? 7 : 4 : z.compatMode ? 6 : (0).toFixed ? 5.5 : k.attachEvent ? 5 : 4);
  aa = !Ga && aa.msContentZoomFactor;
  var Ha = !aa && (k.chrome || k.chromium), na = !Ga && function() {
    for (var u in Va) {
      if (0 === u.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Ia = l(c, "UCWEB"), ub = Ia && n(c, " U2/"), cb = Ia && n(c, "; wds "), Ja = n(c.split("_").join("."), "; iPh OS "), J = n(c, "; Adr "), N = l(L, "YJApp-ANDROID"), S = l(D, "Android") || na && l(L, "Android") || N;
  J = n(D, "Android ") || n(L, "Android ") || n(c, "Android ") || J;
  var ta = l(D, "Linux"), Ba = "MacIntel" === D && q.standalone !== da, Oa = na && n(c, "Goanna/"), ea = !Oa && na && (n(c, "rv:") || n(c.substr(c.indexOf(") Gecko/") - 11), "; ")), db = n(c, "Firefox/"), B = n(c, "Opera/"), vb = k.FNRBrowser, X = ya(c, "AppleWebKit/"), Ca = n(c, "Chrome/"), wb = n(L, "Iron/"), eb = n(c, "OPR/"), Pa = n(L, "KHTML/"), fb = n(c.toLowerCase(), "iris");
  n(c, "FxiOS/");
  n(c, "CriOS/");
  n(c, "EdgiOS/");
  var gb = n(c, "Silk/"), ja = ya(c, "SamsungBrowser/"), ka = !ja && function() {
    for (var u = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    P, H = u.length; P = u[--H];) {
      if (l(c, P)) {
        return 2 > x(ia) ? ia : .9;
      }
    }
    u = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (H = u.length; P = u[--H];) {
      if (l(c, P)) {
        return ia;
      }
    }
  }(), hb = Ha && 534.3 >= X, oa = bb(D), ca = oa && !l(c, D) && bb(c);
  Na = Na && (X || na) && ca || !J && N;
  N = !!k.ReactNativeWebView;
  oa = oa && function() {
    for (var u in k) {
      if (0 === u.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var la = (ca = k.puffinDevice) && ca.clientInfo;
  la = (ca = la && "iOS" === la.os && la.osVersion) && la.model;
  var pa = !R && z.registerElement, qa = !R && z.execCommand, ib = k.webkitCancelAnimationFrame, xb = ta && pa && "11.0.696.34" === Ca, Qa = k._firefoxTV_playbackStateObserverJava, jb = ya(c, "diordnA ");
  if ("Nitro" === D) {
    var r = 1;
  } else if ("Nintendo DSi" === D) {
    r = 2;
    var p = B;
  } else if ("New Nintendo 3DS" === D || l(c, "iPhone OS 6_0") && 320 === Aa && 240 === T) {
    r = 4, p = n(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === D) {
    r = 3, p = n(c, "Version/"), X = 535;
  } else if ("Nintendo Swicth" === D) {
    r = 7, p = n(L, "NintendoBrowser/");
  } else if (k.wiiu) {
    r = 6;
    p = n(L, "NintendoBrowser/");
    var E = 15, F = n(L, "AppleWebKit/") || (ib ? 536 : 534);
    p || (p = ib ? 4 : 2, l(L, "Macintosh;") || l(L, "Windows NT") && l(L, "Touch"));
  } else if (ba && ba.wiiremote) {
    r = 5, p = n(c, "Wii; U; ; ");
  } else if (B = n(c, "PlayStation Vita ")) {
    r = 10, p = B;
  } else if (B = n(c, "(PlayStation Portable); ")) {
    r = 8;
    p = B;
    var Ra = 3.3;
  } else if (B = n(c, "PLAYSTATION 3; ") || n(c, "PLAYSTATION 3 ")) {
    r = 11, p = B, 0 > K("4.10", B) && (E = 26, F = B);
  } else if (l(c, "Xbox One")) {
    r = 15, p = 1;
  } else if (l(c, "Xbox")) {
    r = 14, p = 1;
  } else if (2 === La && l(c, "Sony/COM2/")) {
    r = 17;
    p = 2;
    Ra = 3.4;
    var Ka = !0;
  } else if (0 === D.indexOf("iP") || Ja || ca || Ba) {
    if (ca) {
      switch(p = ca, la.substr(0, 4)) {
        case "iPho":
          var U = 0;
          n(la, U);
          var O = !0;
          break;
        case "iPad":
          U = 1;
          n(la, U);
          var V = !0;
          break;
        case "iPod":
          U = 2;
          n(la, U);
          var Ya = !0;
      }
    } else {
      Ja ? p = Ja : (p = n(L.split("_").join("."), "OS "), A("isSecureContext", k), A("enableWebGL", k), A("sameOrigin", k));
      if (!p || vb) {
        p = k.PointerEvent ? 13 : k.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : q.sendBeacon ? 11.3 : k.WebAssembly ? 11.2 : k.HTMLMeterElement ? 10.3 : k.Proxy ? 10.2 : k.HTMLPictureElement ? 9.3 : G.isNaN ? 9.2 : k.SharedWorker ? sa && sa.now ? 8 : 8.4 : qa ? 7.1 : k.webkitURL ? 6.1 : k.Worker ? 5.1 : Ma ? 4.3 : Wa ? 4.1 : 3.2;
      }
      var Y = Aa === 1.5 * T || 1.5 * Aa === T;
      0 === D.indexOf("iPhone") ? (U = 0, O = !0) : 0 === D.indexOf("iPad") || Ba ? (U = 1, V = !0) : 0 === D.indexOf("iPod") && (U = 2, Ya = !0);
    }
    E = !ca && (q.standalone || (V || 12 > p) && A("webkitFullscreenEnabled", z) || 11 <= p && 13 > p && q.mediaDevices) ? 16 : 17;
    r = 24;
    F = p;
  } else if (l(c, "Kobo")) {
    r = 18, E = 21, F = 2.2, S = !0;
  } else if (l(c, "EBRD")) {
    r = 19, E = 21, F = 2.2;
  } else if (B = n(c, "CrOS x86_64 ") || n(c, "CrOS aarch64 ") || n(c, "CrOS i686 ") || n(c, "CrOS armv7l ")) {
    r = 28, p = B;
  } else if (k.onmoztimechange !== da) {
    r = 29, p = 18.1 > ea ? "1.0.1" : 19 > ea ? 1.1 : 27 > ea ? 1.2 : 29 > ea ? 1.3 : 31 > ea ? 1.4 : 33 > ea ? 2 : 35 > ea ? 2.1 : 38 > ea ? 2.2 : 45 > ea ? 2.5 : 2.6, l(c, "Mobile") ? O = !0 : l(c, "Tablet") ? V = !0 : l(c, "TV");
  } else if (k.palmGetResource) {
    r = 30, p = n(c, "webOS/") || n(c, "WEBOS") || n(c, "hpwOS/"), l(c, "webOS.TV") || l(c, "/SmartTV") || (O = !0);
  } else if (B = n(c, "Tizen ")) {
    r = 31, p = B, E = 24, F = ja, O = !0;
  } else if (B = n(c, "Windows Phone ") || n(L, "Windows Phone OS ") || cb) {
    r = 23, p = B, O = !0;
  } else if (aa && "ARM" === D) {
    r = 23, p = 10, O = !0;
  } else if (Ga && l(L, "ZuneWP")) {
    r = 23, p = 11 === R ? 8.1 : 10 === R ? 8 : 9 === R ? 7.5 : 7 === R ? 7 : "?", O = !0;
  } else if (l(c, "FOMA;")) {
    r = 16, O = !0;
  } else if (l(c, "SoftBank;")) {
    r = 16, O = !0;
  } else if (l(c, "KFMUWI")) {
    var ma = !0;
    p = 6.3;
    var Q = V = !0;
  } else if (l(c, "KFKAWI")) {
    ma = !0, p = 6, Q = V = !0;
  } else if (l(c, "KFSUWI") || l(c, "KFAUWI") || l(c, "KFDOWI")) {
    ma = !0, p = 5, Q = V = !0;
  } else if (l(c, "KFGIWI")) {
    ma = !0, p = 5, Q = V = !0;
  } else if (l(c, "KFARWI") || l(c, "KFSAWA") || l(c, "KFSAWI")) {
    ma = !0, p = 5 <= x(J) ? 5 : 4, Q = V = !0;
  } else if (l(c, "KFSOWI") || l(c, "KFTHWA") || l(c, "KFTHWI") || l(c, "KFAPWA") || l(c, "KFAPWI")) {
    ma = !0, p = 3, Q = V = !0;
  } else if (l(c, "KFOT") || l(c, "KFTT") || l(c, "KFJWA") || l(c, "KFJWI")) {
    ma = !0, p = 2, Q = V = !0;
  } else if (l(c, "Kindle Fire")) {
    ma = !0, p = 1, Q = V = !0;
  } else if (B = n(c, "Kindle/")) {
    r = 20, p = B, E = 21, F = 2.2;
  } else if (Qa) {
    ma = !0, p = J || jb, Q = !0;
  } else if (l(c, "AmazonWebAppPlatform") || l(c, "; AFT")) {
    ma = !0, p = J, Q = !0;
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
    if (B = n(c.split("_").join("."), "Mac OS X ")) {
      p = B;
    }
    var kb = !0;
  } else if (l(c, "BlackBerry") || l(c, "BB10")) {
    r = 34, p = ia, O = !0;
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
  } else if (S && ba) {
    J ? Y = J : Y = {min:1.6}, p = Y, l(c, "Tablet") ? V = !0 : O = !0;
  } else if (J) {
    p = J, S = !0;
  } else if (ta && Na || N || oa) {
    var va = !0;
    ja ? Y = {min:4.4} : Ha && !hb || M || eb ? Y = {min:4} : (Y = J = Va.touchAction !== da ? {min:5} : pa ? 4.4 : Ma ? q.connection ? k.searchBoxJavaBridge_ || Ha ? G.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= X ? 3 : 533 <= X ? Wa ? 2.3 : 2.2 : 530 <= X ? 2 : 1.5, ka && (E = 24, F = ka));
    p = Y;
    S = !0;
  } else {
    xb ? (p = {min:5}, va = S = !0) : ta && (l(c, "Ubuntu") ? r = 46 : (B = n(c, "Mint/")) ? (r = 47, p = B) : (B = n(c, "Fedora/")) ? (r = 48, p = B) : r = l(c, "Gentoo") ? 49 : 50);
  }
  ma || S && va && gb ? r = 27 : S && (r = r || 26);
  E || (Q = Q || S, ba ? (E = Q || Ka || O || V ? 9 : 8, F = Fa) : Ga ? (Y = ya(L, "Trident/") + 4, E = Ka || O || V || Ya ? 3 : kb && 5 <= R ? 7 : 2, F = R) : aa ? (E = 23 === r ? 6 : 5, F = n(L, "Edge/")) : Oa ? (E = 13, F = Oa) : na ? (E = Q ? 12 : 11, F = ea || db) : ja ? (E = 24, F = ja) : (B = Ra || n(c, "NetFront/")) ? (E = 18, F = B) : (B = n(c, "iCab")) ? (E = 19, F = B) : (B = za(n(c, "Opera Mini/"), n(c, "Opera Mobi/")) || Xa && ia) ? (E = 10, F = B, r || (l(c, "iPhone") ? U = 0 : l(c, 
  "iPad") ? U = 1 : l(c, "iPod") && (U = 2), U && (r = 24))) : Ia ? (E = 25, F = ub) : Pa ? (E = 14, F = La) : S && hb ? (E = 21, F = J) : Ha || M || eb ? (E = Q ? 22 : 20, F = Ca || wb) : S && pa ? (E = 23, F = 5 > x(J) ? J : Ca) : S && (ia || va) ? (E = 21, F = J) : Ca ? (E = Q ? 22 : 20, F = Ca) : X && (E = 15, F = X));
  r && (y[2] = r, p && (y[3] = Ea(p)));
  E && (y[0] = E, F && (y[1] = Ea(F)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var y = this[this.length - 1];
  --this.length;
  return y;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var y = arguments, k = 0, z = y.length, q = this.length; k < z; ++k) {
    this[q + k] = y[k];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var y = this[0], k = 1, z = this.length; k < z; ++k) {
    this[k - 1] = this[k];
  }
  --this.length;
  return y;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var y = arguments, k = y.length, z = this.length += k - 1, q = z; q >= k; --q) {
    this[q] = this[q - k];
  }
  for (q = 0; q < k; ++q) {
    this[q] = y[q];
  }
  return z;
});
Array.prototype.splice || (Array.prototype.splice = function(y, k) {
  var z = arguments, q = z.length - 2 - k, T = this.slice(y, y + k), x;
  if (0 < q) {
    var G = this.length - 1;
    for (x = y + k; G >= x; --G) {
      this[G + q] = this[G];
    }
  } else if (0 > q) {
    G = y + k;
    for (x = this.length; G < x; ++G) {
      this[G + q] = this[G];
    }
    this.length += q;
  }
  G = 2;
  for (x = z.length; G < x; ++G) {
    this[G - 2 + y] = z[G];
  }
  return T;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(y, k) {
  var z = this.length >>> 0;
  if (0 === z) {
    return -1;
  }
  if (k) {
    var q = k || 0;
    q = -Infinity === q ? 0 : (0 > q ? -q : q) | 0;
    if (z <= q) {
      return -1;
    }
  }
  for (q = 0 <= q ? q : 0 < z + q ? z + q : 0; q < z; ++q) {
    if (this[q] === y) {
      return q;
    }
  }
  return -1;
});
(function(y, k, z, q, T, x, G, da, ya, l, bb, A) {
  function n(a) {
    P(k, "load", n);
    n = A;
    Ma(X, a, !0);
    lb = X = A;
  }
  function za() {
    for (var a, b = 0, e = +new T(); b < oa.length;) {
      e < oa[0].t ? ++b : (a = oa.splice(b, 1)[0], a.f(a.p));
    }
    pa = oa.length ? l(za, ca) : 0;
  }
  function Ea() {
    for (var a, b = 0; b < Pa.length; ++b) {
      a = Pa[b], a.f();
    }
  }
  function K(a) {
    if (y[0] === a) {
      return J === J + "" ? G(J) : J;
    }
  }
  function c(a) {
    var b = y[3];
    if (y[2] === a) {
      return b === b + "" ? G(b) : b;
    }
  }
  function L() {
    ja && (ja = clearInterval(ja));
  }
  function La() {
    pa && (pa = bb(pa));
  }
  function D(a, b, e) {
    var d = ["<", a], g = 1, f, v;
    if (b) {
      for (f in b) {
        var m = b[f];
        if (null != m && "" !== m) {
          if ("style" === f) {
            d[++g] = ' style="';
            for (v in m) {
              for (var C = ++g, h, t = [], w = v.split(""), I = w.length; I;) {
                h = w[--I], "A" <= h && "Z" >= h && (h = "-" + h.toLowerCase()), t[I] = h;
              }
              d[C] = t.join("") + ":" + m[v] + ";";
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
  function aa(a, b) {
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
      var v = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
      var m = jb(2 > a ? Qa(b) : b);
      m = 2 > a ? m.indexOf(b) + a : m.length;
      b.insertAdjacentHTML(v, D(e, d, g));
      b = jb(b)[m];
      null != g && ("font" === e ? b.nodeType = 3 : b.children[0].nodeType = 3);
    } else if (Ka) {
      b = x.createElement(D(e, d));
    } else {
      b = f ? x.createElementNS("http://www.w3.org/2000/svg", e) : x.createElement(e);
      if (d) {
        for (v in d) {
          if ((e = d[v]) || 0 === e) {
            switch(v) {
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
                Ya(b, v, e);
            }
          }
        }
      }
      U || null != g && Aa(b, g);
    }
    return b;
  }
  function Aa(a, b) {
    if (qa) {
      return R(2, a, "font", A, b);
    }
    var e = x.createTextNode("" + b);
    a.appendChild(e);
    return e;
  }
  function Wa(a, b) {
    9 > N ? a.className = b : a.setAttribute("class", b);
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
  function ia(a) {
    var b = a || event;
    a = H[b.type];
    var e = -1, d, g;
    N ? (b.preventDefault = function() {
      b.returnValue = !1;
    }, b.stopPropagation = function() {
      b.cancelBubble = !0;
    }) : ha && (b.C = b.stopPropagation, b.stopPropagation = function() {
      g = !0;
    });
    for (; d = a[++e];) {
      d.j === this ? (this.h = d.i, this.h(b), this.h = cb, this.h = A) : 7.2 > ta && this === x && d.j === k && (k.h = d.i, k.h(b), delete k.h);
    }
    if (N) {
      return b.preventDefault = b.stopPropagation = A, b.returnValue;
    }
    ha && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (mb = !0), g && !mb && b.C(), b.C = b.stopPropagation = A);
  }
  function Xa() {
    var a = 9 === kb.offsetWidth;
    if (Q !== a) {
      var b = Ca;
      a = Q = a;
      X || va.length || ka(Na);
      va.push(b, a, void 0);
    }
  }
  function ba(a) {
    return a === "" + a;
  }
  function Fa(a, b) {
    return nb ? new Fb(a, b) : new q(a, b);
  }
  function M(a, b, e, d) {
    if (Gb() - Hb < Qb && !d) {
      return a(b);
    }
    ka(Ga, {H:a, J:b});
  }
  function Ga(a) {
    Hb = Gb();
    a.H(a.J);
  }
  function Ha(a, b) {
    a && Za[a] || (a = Ib.test(b) ? "default-markup" : "default-code");
    var e = !!Za[a];
    e && M(Jb, a, 0, !0);
    return e;
  }
  function na() {
    function a(wa, Sa, Ta) {
      Sa && (b.g = b.g || [], b.g.push({l:b, v:b.v, D:1, s:v, A:wa, o:Sa, m:Ta, F:{}, u:0}));
    }
    var b = fa, e = b.m, d = e[0], g = e[2], f = b.A, v = b.s, m = b.K.shift(), C = b.F;
    if (m) {
      var h = C[m], t;
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
        !(t = ba(h)) || w && ba(w[1]) || (t = !1, h = 11);
        t || (C[m] = h);
      }
      g = b.u;
      C = m.length;
      b.u += C;
      if (t) {
        t = w[1];
        d = m.indexOf(t);
        var I = t.length, W = d + I;
        w[2] && (W = C - w[2].length, d = W - I);
        a(f + g, m.substr(0, d), e);
        if (I && Ha(h, t)) {
          a(f + g + d, t);
          var xa = !0;
        }
        a(f + g + W, m.substr(W), e);
        b.g && b.g.length && (fa = b.g.shift());
        xa || (fa !== b ? M(yb, A, 2) : M(na, A, 2));
      } else {
        v.push(f + g, h), M(na, A, 2);
      }
    } else {
      b.l ? (fa = b.l.g.shift()) ? M(yb, A, 2) : (fa = b.l, M(na, A, 2)) : M(Rb, A, 2);
    }
  }
  function Ia(a) {
    if (ob.length) {
      var b = ob.shift(), e = pb[b];
      if (e.pop) {
        pb[b] = Fa(e[0], e[1]);
      } else if (ba(e)) {
        pb[b] = Fa(e);
      } else {
        return Ia(a);
      }
      M(Ia, a, 1);
    } else {
      M(Jb, a);
    }
  }
  function ub(a) {
    for (var b, e = a.firstChild; e; e = e.nextSibling) {
      var d = e.nodeType;
      b = 1 === d ? b ? a : e : 3 === d ? Kb.test(e.nodeValue) ? a : b : b;
    }
    return b === a ? A : b;
  }
  var cb = z, Ja = x.body, J = y[1], N = K(2) || K(3), S = K(7);
  K(5) || K(6);
  var ta = K(8) || K(9), Ba = K(11) || K(12);
  Ba && y.conpare(J, "1.9.1");
  K(13);
  var Oa = K(15), ea = K(16) || K(17);
  K(10) || K(25);
  var db = K(20) || K(22);
  db || K(23) || K(21) || K(24);
  db && G(navigator.userAgent.split("Edg/")[1]);
  G(navigator.appVersion.split("Trident/")[1]);
  c(35) || c(36) || c(37);
  var B = !N && !S && (new da('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), vb = c(1) || c(2) || c(3) || c(4) || c(8) || c(9) || c(10), X = [], Ca = [];
  var wb = function(a) {
    Pa.length || (ja = setInterval(Ea, fb));
    Pa.push({f:a, G:++gb});
    return gb;
  };
  var eb = function() {
    ja && (L(), ja = setInterval(Ea, fb));
  };
  var Pa = [], fb = 500, gb = 0, ja;
  if (5 > N || S) {
    k._wdb_onlooptimer = Ea, Ea = "_wdb_onlooptimer()";
  }
  var ka = function(a, b, e) {
    oa.length || (pa = l(za, ca));
    oa.push({f:a, p:b, G:++la, t:+new T() + (ca < e ? e : ca)});
    return la;
  };
  var hb = function() {
    pa && (La(), pa = l(za, ca));
  };
  var oa = [], ca = 16, la = 0, pa;
  if (5 > N || S) {
    k._wdb_ontimer = za, za = "_wdb_ontimer()";
  }
  var qa = 5 > N;
  var ib = aa(x, "html")[0];
  var xb = aa(x, "head")[0];
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
    qa || (a.appendChild(b), U && null != d && Aa(b, d));
    return b;
  };
  var p = function(a, b, e, d, g) {
    b = R(0, a, b, e, d, g);
    qa || (Va(a).insertBefore(b, a), U && null != d && Aa(b, d));
    return b;
  };
  var E = Aa;
  var F = function(a, b) {
    var e;
    if (qa) {
      return R(1, a, "font", A, b);
    }
    var d = x.createTextNode("" + b);
    (e = a.nextSibling) ? Qa(a).insertBefore(d, e) : Qa(a).appendChild(d);
    return d;
  };
  var Ra = function(a) {
    qa ? a.outerHTML = "" : Qa(a).removeChild(a);
  };
  var Ka = 9 > N, U = Ka;
  var O = function(a) {
    return a.tagName.toUpperCase();
  };
  var V = function(a, b) {
    return a.getAttribute(b) || "";
  };
  var Ya = function(a, b, e) {
    a.setAttribute(b, e);
  };
  var Y = Wa;
  var ma = function(a, b) {
    var e;
    if (!sa(a, b)) {
      if (e = a.className) {
        b = " " + b;
      }
      Wa(a, e + b);
    }
  };
  var Q, kb, va = [];
  X.push(function() {
    kb = r(Ja, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
    lb(function() {
      va.length && ka(Na);
    });
  });
  var u = function(a, b, e, d) {
    if (Lb) {
      a.addEventListener(b, e, d ? B ? d : d.capture : !1);
    } else {
      var g = {j:a, i:e};
      d = H[b];
      var f = "on" + b, v, m;
      if (d) {
        for (v = d.length; m = d[--v];) {
          if (m.j === a && m.i === e) {
            return;
          }
        }
        H[b].push(g);
      } else {
        H[b] = d = [g], Z || (b = a[f], "function" === typeof b && b !== ia && d.unshift({j:a, i:b}));
      }
      Z ? a.attachEvent(f, ia) : a[f] = ia;
    }
  };
  var P = function(a, b, e, d) {
    if (Lb) {
      a.removeEventListener(b, e, d ? B ? d : d.capture : !1);
    } else {
      d = H[b];
      b = "on" + b;
      var g, f, v;
      if (d) {
        for (g = d.length; f = d[--g];) {
          f.j === a && (f.i === e ? d.splice(g, 1) : v = !0);
        }
        v || (Z ? a.detachEvent(b, ia) : (a[b] = cb, a[b] = null));
      }
    }
  };
  var H = {}, Z = !1, ha = 525.13 > Oa, Lb = !ha && !S && k.addEventListener, mb;
  ha && ib.addEventListener("click", function(a) {
    if (mb) {
      return mb = !1, a.preventDefault(), !1;
    }
  });
  var lb = function(a) {
    X.push(a);
  };
  var Mb = function(a) {
    qb && qb.push(a);
  };
  var qb = [];
  if (419.3 >= Oa) {
    var rb = function() {
      if (rb) {
        var a = x.readyState;
        "loaded" === a || "complete" === a ? (rb = A, n()) : ka(rb);
      }
    };
    ka(rb);
  } else {
    u(k, "load", n);
  }
  N || .9 <= Ba && 1.8 > Ba ? u(k, "unload", function(a) {
    Ma(qb, a, !0);
  }) : qb = A;
  lb(function() {
    Xa();
    wb(Xa);
  });
  var Sb = Ba && 0 >= y.conpare(J, "0.9");
  var sb = !(7.2 > ta || Sb);
  var Nb = function(a) {
    zb ? x.write('<script src="' + a + '">\x3c/script>') : X || tb.length ? tb.push(a) : Ab(a);
  };
  var Ob = function() {
    zb || Ab(tb.shift());
  };
  var zb = !sb, Tb = sb && 7.5 > ta;
  if (!zb) {
    sb = !0;
    var tb = [];
    lb(function() {
      Ab(tb.shift());
    });
    var Ab = function(a) {
      a && (Tb ? Bb[0].src = a : r(xb, "script", {src:a}));
    };
  }
  var nb = !q || .9 > Ba || 8 > ta || 5.5 > N;
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
  Wb = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), Gb = T.now || function() {
    return +new T();
  }, Fb, Hb, fa, Cb, Db, Qb = 5 > N ? 60 : 5.5 > N ? 0 : nb ? 20 : 10, Ib, Kb;
  var Da = [function(a) {
    k.RegExpCompat = Fb = a;
  }, function() {
    Ib = Fa("^\\s*<");
    Kb = Fa("\\S");
  }];
  nb || (Da[1](), Da = A);
  var Yb = function() {
    var a = fa, b = a.I, e = Xb(a.v, a.D), d = a.o = e.o;
    a.B = e.B;
    Ha(b, d) || (fa = A, M(Ua, A, 0, !0));
  };
  var yb = function() {
    var a = fa;
    a.K = a.o.match(a.m[1]) || [];
    a.s.push(a.A, 0);
    M(na, A, 2);
  };
  var ob = [];
  var Jb = function(a) {
    function b(h) {
      var t = h;
      0 <= h && (t = Vb[h]);
      0 <= t[1] && (t[1] = e(t[1]));
      return t;
    }
    function e(h) {
      var t = h;
      return 0 <= h && (t = pb[h], !t.exec) ? (ob.push(h), h) : t;
    }
    var d = fa, g = Za[a];
    ba(g) && (g = Za[a] = Za[g]);
    var f = g[0];
    if (0 <= f) {
      f = Ub[f];
      if (0 <= f["-num"]) {
        var v = f["-num"];
        delete f["-num"];
        for (var m = -1; 9 > m;) {
          f["" + ++m] = v;
        }
      }
      g[0] = f;
    }
    for (var C in f) {
      f[C] = b(f[C]);
    }
    g[1] = e(g[1]);
    f = g[2];
    m = 0;
    for (v = f.length; m < v; ++m) {
      f[m] = b(f[m]);
    }
    ob.length ? M(Ia, a, 2) : (d.m ? d.l && (d.l.g[0].m = g) : d.m = g, M(yb, A, 1));
  };
  var Xb = function(a, b) {
    function e(C) {
      var h = C.nodeType;
      if (1 === h) {
        if (!sa(C, "nocode")) {
          for (h = C.firstChild; h; h = h.nextSibling) {
            e(h);
          }
          h = O(C);
          if ("BR" === h || "LI" === h) {
            d[v] = "\n", f[v << 1] = g++, f[v++ << 1 | 1] = C;
          }
        }
      } else if (3 === h || 4 === h) {
        if (h = C.nodeValue) {
          h = b ? h.split("\r\n").join("\n").split("\r").join("\n") : h.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), d[v] = h, f[v << 1] = g, g += h.length, f[v++ << 1 | 1] = C;
        }
      }
    }
    var d = [], g = 0, f = [], v = 0;
    e(a);
    var m = d.join("");
    "\n" === m.charAt(m.length - 1) && (m = m.substr(0, m.length - 1));
    return {o:m, B:f};
  };
  var Zb = function(a, b, e) {
    function d(h) {
      var t = h.nodeType;
      if (1 === t && !sa(h, "nocode")) {
        if ("BR" === O(h)) {
          g(h), h.parentNode && Ra(h);
        } else {
          for (h = h.firstChild; h; h = h.nextSibling) {
            d(h);
          }
        }
      } else if ((3 === t || 4 === t) && e) {
        var w = h.nodeValue, I = w.indexOf("\r\n"), W = 2;
        -1 === I && (I = w.indexOf("\n"), W = 1);
        -1 === I && (I = w.indexOf("\r"));
        -1 !== I && (t = w.substr(0, I), h.nodeValue = t, (w = w.substr(I + W)) && F(h, w), g(h), t || Ra(h));
      }
    }
    function g(h) {
      function t(I, W) {
        var xa = W ? I.cloneNode(!1) : I, wa = I.parentNode;
        if (wa) {
          wa = t(wa, 1);
          var Sa = I.nextSibling;
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
      h = t(h.nextSibling, 0);
      for (var w; (w = h.parentNode) && 1 === w.nodeType;) {
        h = w;
      }
      v.push(h);
    }
    for (var f = x.createElement("li"); a.firstChild;) {
      f.appendChild(a.firstChild);
    }
    for (var v = [f], m = 0; m < v.length; ++m) {
      d(v[m]);
    }
    if (b === (b | 0)) {
      if (10 <= b && 7.2 > ta) {
        var C = x.createElement("ol");
        C.innerHTML = '<li value="' + b + '">' + f.innerHTML + "</li>";
        v[0] = C.firstChild;
      } else {
        Ya(f, "value", b);
      }
    }
    C = r(a, "ol", {className:"linenums"});
    a = Math.max(0, b - 1 | 0) || 0;
    m = 0;
    for (b = v.length; m < b; ++m) {
      f = v[m], Y(f, "L" + (m + a) % 10), f.firstChild || E(f, "\u00a0"), C.appendChild(f);
    }
  };
  var Rb = function() {
    var a = fa, b = a.o, e = b.length, d = 0, g = a.B, f = g.length, v = 0, m = a.s, C = m.length, h = 0;
    m[C] = e;
    var t, w;
    for (w = t = 0; w < C;) {
      m[w] !== m[w + 2] ? (m[t++] = m[w++], m[t++] = m[w++]) : w += 2;
    }
    C = t;
    for (w = t = 0; w < C;) {
      var I = m[w], W = m[w + 1];
      for (w += 2; w + 2 <= C && m[w + 1] === W;) {
        w += 2;
      }
      m[t++] = I;
      m[t++] = W;
    }
    m.length = t;
    a = a.v;
    C = "";
    a && (C = a.style.display, a.style.display = "none");
    for (; v < f;) {
      t = g[v + 2] || e;
      I = m[h + 2] || e;
      w = Math.min(t, I);
      W = g[v + 1];
      var xa;
      if (1 !== W.nodeType && (xa = b.substring(d, w))) {
        9 > N && (xa = xa.split("\n").join("\r"));
        var wa = p(W, "span", {className:Wb[m[h + 1]]}, xa);
        Ra(W);
        d < t && (g[v + 1] = F(wa, b.substring(w, t)));
      }
      d = w;
      d >= t && (v += 2);
      d >= I && (h += 2);
    }
    a && (a.style.display = C);
    fa = A;
    M(Ua, A, 3, !0);
  };
  var $a = [], ab;
  Ca.push(function(a) {
    if (a) {
      a = [aa(x, "pre"), aa(x, "code"), aa(x, "xmp")];
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
    1 === ab && (Eb ? ka(Eb, Ua) : Da ? Da.push(function() {
      ka(Ua);
    }) : ka(Ua));
  };
  var Ua = function() {
    function a(v, m) {
      return (v.split(m)[1] || "").split(" ")[0];
    }
    if (!fa) {
      ab !== $a.length && Db && Db(ab - $a.length, ab);
      var b = $a.shift();
      if (b) {
        if (sa(b, "prettyprint") && !sa(b, "prettyprinted")) {
          for (var e = !1, d = b.parentNode; d !== Ja; d = d.parentNode) {
            var g = O(d);
            if (("PRE" === g || "XMP" === g || "CODE" === g) && sa(d, "prettyprint")) {
              e = !0;
              break;
            }
          }
          if (!e) {
            e = b.className;
            ma(b, "prettyprinted");
            d = !1;
            if (!d) {
              d = a(e, "lang-") || a(e, "language-");
              var f;
              !d && (f = ub(b)) && "CODE" === O(f) && (d = a(f.className, "lang-") || a(f.className, "language-"));
            }
            g = O(b);
            "PRE" === g || "XMP" === g ? g = 1 : (g = b.currentStyle, f = x.defaultView, g = (g = g ? g.whiteSpace : f && f.getComputedStyle ? f.getComputedStyle(b, null).getPropertyValue("white-space") : 0) && "pre" === g.substr(0, 3));
            f = !1;
            (f = "true" === f || +f) || (f = a(e, "linenums:") || sa(b, "linenums"), f = f.length ? +f : f);
            f && Zb(b, f, g);
            fa = {I:d, v:b, L:f, D:g, A:0, u:0, F:{}, s:[]};
            M(Yb);
            return;
          }
        }
        M(Ua, A, 0, !0);
      } else {
        Cb && Cb();
      }
    }
  };
  k.PR = {RegExpProxy:Fa, prettifyElement:Pb, registerCompleteHandler:function(a, b) {
    Cb = a;
    Db = b;
  }};
  var Bb = x.scripts || aa(x, "script");
  var ra = Bb[Bb.length - 1].src.split("/");
  --ra.length;
  "js" === ra[ra.length - 1] && --ra.length;
  (ra = ra.join("/")) && (ra += "/");
  vb || V(Ja, "mob");
  6.1 > ea && u(k, "scroll", eb);
  Mb(L);
  6.1 > ea && u(k, "scroll", hb);
  Mb(La);
  if (nb) {
    if (sb) {
      var Eb = function(a) {
        k.RegExpCompat = function(b) {
          for (var e; e = Da.shift();) {
            e(b);
          }
          Da = A;
          ka(a);
          Ob(ra + "js/regexpcompat.js");
        };
        Eb = A;
        Nb(ra + "js/regexpcompat.js");
      };
    } else {
      k.RegExpCompat = function(a) {
        for (var b; b = Da.shift();) {
          b(a);
        }
        Da = A;
        Ob(ra + "js/regexpcompat.js");
      }, Nb(ra + "js/regexpcompat.js");
    }
  }
})(ua, this, function() {
}, this.RegExp, Date, document, parseFloat, Function, isFinite, setTimeout, clearTimeout, void 0);

