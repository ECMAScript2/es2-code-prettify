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
ua.conpare = function(B, l) {
  var y = 0, q, Q, x = (B + "").split("."), I = (l + "").split("."), Z = x.length;
  for (q = I.length; "0" === x[Z - 1];) {
    --Z;
  }
  for (; "0" === I[q - 1];) {
    --q;
  }
  for (Q = Z < q ? Z : q; y < Q; ++y) {
    var wa = x[y] - 0, k = I[y] - 0;
    if (wa !== k) {
      return wa > k ? 1 : -1;
    }
  }
  return Z > q ? 1 : Z === q ? 0 : -1;
};
(function(B, l, y, q, Q, x, I, Z) {
  function wa(v, N, K) {
    K = x(v.split(N)[1]);
    return 0 <= K ? K : 0;
  }
  function k(v, N) {
    return 0 <= v.indexOf(N);
  }
  function db(v) {
    return k(v, "Linux armv") || k(v, "Linux aarch") || k(v, "Linux i686") || k(v, "Linux x86_64");
  }
  function C(v, N) {
    for (var K in N) {
      if (K === v) {
        return !0;
      }
    }
  }
  function n(v, N) {
    var K = "", R = -1, fa;
    if (v = v.split(N)[1]) {
      for (; fa = v.charCodeAt(++R);) {
        if (48 <= fa && 57 >= fa || 46 === fa) {
          K += v.charAt(R);
        } else {
          break;
        }
      }
      for (R = K.length; R;) {
        if (46 === K.charCodeAt(--R)) {
          K = K.substr(0, R);
        } else {
          break;
        }
      }
    }
    return K;
  }
  function Fa(v) {
    for (var N = arguments, K = 1, R = N[0], fa; K < N.length; ++K) {
      0 > Ga(R, fa = N[K]) && (R = fa);
    }
    return R;
  }
  function xa(v) {
    return v === v + "" ? v : v === v - 0 ? "" + v : v.min && v.max ? v.min + "~" + v.max : v.min ? v.min + "~" : "~" + v.max;
  }
  var Ga = B.conpare, c = q.userAgent, D = q.appVersion, La = x(D) || 0, E = q.platform, ia = y.documentElement, oa = ia && ia.style, V = y.documentMode, ya = Q.width;
  Q = Q.height;
  var Ha = l.HTMLAudioElement, Xa = l.performance, ja = l.Int8Array, Ia = l.ontouchstart !== Z, ka = n(D, "Version/") || n(c, "Version/"), Ja = l.operamini, ca = !Ja && l.opera, Ma = ca && (ca.version && "function" === typeof ca.version ? ca.version() : Fa(n(c, "Opera "), ka, La)), za = l.opr, L = !ca && (y.all || V);
  V = L && (V ? V : l.XMLHttpRequest ? y.getElementsByTagName ? 7 : 4 : y.compatMode ? 6 : (0).toFixed ? 5.5 : l.attachEvent ? 5 : 4);
  ia = !L && ia.msContentZoomFactor;
  var Na = !ia && (l.chrome || l.chromium), pa = !L && function() {
    for (var v in oa) {
      if (0 === v.indexOf("Moz")) {
        return !0;
      }
    }
  }(), Aa = k(c, "UCWEB"), Ya = Aa && n(c, " U2/"), sb = Aa && n(c, "; wds "), Oa = n(c.split("_").join("."), "; iPh OS "), M = n(c, "; Adr "), la = k(D, "YJApp-ANDROID"), H = k(E, "Android") || pa && k(D, "Android") || la;
  M = n(E, "Android ") || n(D, "Android ") || n(c, "Android ") || M;
  var Ba = k(E, "Linux"), Pa = "MacIntel" === E && q.standalone !== Z, Ca = pa && n(c, "Goanna/"), aa = !Ca && pa && (n(c, "rv:") || n(c.substr(c.indexOf(") Gecko/") - 11), "; ")), eb = n(c, "Firefox/"), z = n(c, "Opera/"), fb = l.FNRBrowser, ma = wa(c, "AppleWebKit/"), na = n(c, "Chrome/"), gb = n(D, "Iron/"), hb = n(c, "OPR/"), tb = n(D, "KHTML/"), Qa = n(c.toLowerCase(), "iris");
  n(c, "FxiOS/");
  n(c, "CriOS/");
  n(c, "EdgiOS/");
  var ib = n(c, "Silk/"), Da = wa(c, "SamsungBrowser/"), qa = !Da && function() {
    for (var v = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    N, K = v.length; N = v[--K];) {
      if (k(c, N)) {
        return 2 > x(ka) ? ka : .9;
      }
    }
    v = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (K = v.length; N = v[--K];) {
      if (k(c, N)) {
        return ka;
      }
    }
  }(), ha = Na && 534.3 >= ma, Ra = db(E), W = Ra && !k(c, E) && db(c);
  Ia = Ia && (ma || pa) && W || !M && la;
  la = !!l.ReactNativeWebView;
  Ra = Ra && function() {
    for (var v in l) {
      if (0 === v.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var X = (W = l.puffinDevice) && W.clientInfo;
  X = (W = X && "iOS" === X.os && X.osVersion) && X.model;
  var Sa = !V && y.registerElement, ra = !V && y.execCommand, da = l.webkitCancelAnimationFrame, ub = Ba && Sa && "11.0.696.34" === na, Ta = l._firefoxTV_playbackStateObserverJava, jb = wa(c, "diordnA ");
  if ("Nitro" === E) {
    var r = 1;
  } else if ("Nintendo DSi" === E) {
    r = 2;
    var p = z;
  } else if ("New Nintendo 3DS" === E || k(c, "iPhone OS 6_0") && 320 === ya && 240 === Q) {
    r = 4, p = n(c, "NintendoBrowser/");
  } else if ("Nintendo 3DS" === E) {
    r = 3, p = n(c, "Version/"), ma = 535;
  } else if ("Nintendo Swicth" === E) {
    r = 7, p = n(D, "NintendoBrowser/");
  } else if (l.wiiu) {
    r = 6;
    p = n(D, "NintendoBrowser/");
    var F = 15, G = n(D, "AppleWebKit/") || (da ? 536 : 534);
    p || (p = da ? 4 : 2, k(D, "Macintosh;") || k(D, "Windows NT") && k(D, "Touch"));
  } else if (ca && ca.wiiremote) {
    r = 5, p = n(c, "Wii; U; ; ");
  } else if (z = n(c, "PlayStation Vita ")) {
    r = 10, p = z;
  } else if (z = n(c, "(PlayStation Portable); ")) {
    r = 8;
    p = z;
    var Ua = 3.3;
  } else if (z = n(c, "PLAYSTATION 3; ") || n(c, "PLAYSTATION 3 ")) {
    r = 11, p = z, 0 > Ga("4.10", z) && (F = 26, G = z);
  } else if (k(c, "Xbox One")) {
    r = 15, p = 1;
  } else if (k(c, "Xbox")) {
    r = 14, p = 1;
  } else if (2 === La && k(c, "Sony/COM2/")) {
    r = 17;
    p = 2;
    Ua = 3.4;
    var Ka = !0;
  } else if (0 === E.indexOf("iP") || Oa || W || Pa) {
    if (W) {
      switch(p = W, X.substr(0, 4)) {
        case "iPho":
          var S = 0;
          n(X, S);
          var O = !0;
          break;
        case "iPad":
          S = 1;
          n(X, S);
          var T = !0;
          break;
        case "iPod":
          S = 2;
          n(X, S);
          var Za = !0;
      }
    } else {
      Oa ? p = Oa : (p = n(D.split("_").join("."), "OS "), C("isSecureContext", l), C("enableWebGL", l), C("sameOrigin", l));
      if (!p || fb) {
        p = l.PointerEvent ? 13 : l.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : q.sendBeacon ? 11.3 : l.WebAssembly ? 11.2 : l.HTMLMeterElement ? 10.3 : l.Proxy ? 10.2 : l.HTMLPictureElement ? 9.3 : I.isNaN ? 9.2 : l.SharedWorker ? Xa && Xa.now ? 8 : 8.4 : ra ? 7.1 : l.webkitURL ? 6.1 : l.Worker ? 5.1 : ja ? 4.3 : Ha ? 4.1 : 3.2;
      }
      var Y = ya === 1.5 * Q || 1.5 * ya === Q;
      0 === E.indexOf("iPhone") ? (S = 0, O = !0) : 0 === E.indexOf("iPad") || Pa ? (S = 1, T = !0) : 0 === E.indexOf("iPod") && (S = 2, Za = !0);
    }
    F = !W && (q.standalone || (T || 12 > p) && C("webkitFullscreenEnabled", y) || 11 <= p && 13 > p && q.mediaDevices) ? 16 : 17;
    r = 24;
    G = p;
  } else if (k(c, "Kobo")) {
    r = 18, F = 21, G = 2.2, H = !0;
  } else if (k(c, "EBRD")) {
    r = 19, F = 21, G = 2.2;
  } else if (z = n(c, "CrOS x86_64 ") || n(c, "CrOS aarch64 ") || n(c, "CrOS i686 ") || n(c, "CrOS armv7l ")) {
    r = 28, p = z;
  } else if (l.onmoztimechange !== Z) {
    r = 29, p = 18.1 > aa ? "1.0.1" : 19 > aa ? 1.1 : 27 > aa ? 1.2 : 29 > aa ? 1.3 : 31 > aa ? 1.4 : 33 > aa ? 2 : 35 > aa ? 2.1 : 38 > aa ? 2.2 : 45 > aa ? 2.5 : 2.6, k(c, "Mobile") ? O = !0 : k(c, "Tablet") ? T = !0 : k(c, "TV");
  } else if (l.palmGetResource) {
    r = 30, p = n(c, "webOS/") || n(c, "WEBOS") || n(c, "hpwOS/"), k(c, "webOS.TV") || k(c, "/SmartTV") || (O = !0);
  } else if (z = n(c, "Tizen ")) {
    r = 31, p = z, F = 24, G = Da, O = !0;
  } else if (z = n(c, "Windows Phone ") || n(D, "Windows Phone OS ") || sb) {
    r = 23, p = z, O = !0;
  } else if (ia && "ARM" === E) {
    r = 23, p = 10, O = !0;
  } else if (L && k(D, "ZuneWP")) {
    r = 23, p = 11 === V ? 8.1 : 10 === V ? 8 : 9 === V ? 7.5 : 7 === V ? 7 : "?", O = !0;
  } else if (k(c, "FOMA;")) {
    r = 16, O = !0;
  } else if (k(c, "SoftBank;")) {
    r = 16, O = !0;
  } else if (k(c, "KFMUWI")) {
    var ea = !0;
    p = 6.3;
    var P = T = !0;
  } else if (k(c, "KFKAWI")) {
    ea = !0, p = 6, P = T = !0;
  } else if (k(c, "KFSUWI") || k(c, "KFAUWI") || k(c, "KFDOWI")) {
    ea = !0, p = 5, P = T = !0;
  } else if (k(c, "KFGIWI")) {
    ea = !0, p = 5, P = T = !0;
  } else if (k(c, "KFARWI") || k(c, "KFSAWA") || k(c, "KFSAWI")) {
    ea = !0, p = 5 <= x(M) ? 5 : 4, P = T = !0;
  } else if (k(c, "KFSOWI") || k(c, "KFTHWA") || k(c, "KFTHWI") || k(c, "KFAPWA") || k(c, "KFAPWI")) {
    ea = !0, p = 3, P = T = !0;
  } else if (k(c, "KFOT") || k(c, "KFTT") || k(c, "KFJWA") || k(c, "KFJWI")) {
    ea = !0, p = 2, P = T = !0;
  } else if (k(c, "Kindle Fire")) {
    ea = !0, p = 1, P = T = !0;
  } else if (z = n(c, "Kindle/")) {
    r = 20, p = z, F = 21, G = 2.2;
  } else if (Ta) {
    ea = !0, p = M || jb, P = !0;
  } else if (k(c, "AmazonWebAppPlatform") || k(c, "; AFT")) {
    ea = !0, p = M, P = !0;
  } else if (k(c, "MeeGo")) {
    r = 32;
  } else if (k(c, "Maemo")) {
    r = 33;
  } else if (0 === c.indexOf("Windows Mobile;") || Qa) {
    r = 22, Ka = !0;
  } else if ("WinCE" === E) {
    r = 21, Ka = !0;
  } else if (0 === E.indexOf("Win")) {
    r = "Win16" === E ? 35 : "Win32" === E ? 36 : "Win64" === E ? 37 : 0, p = n(c, "Windows NT ") || n(c, "Windows ");
  } else if (0 === E.indexOf("Mac")) {
    r = "Mac68K" === E ? 39 : "MacPowerPC" === E || "MacPPC" === E ? 38 : "MacIntel" === E ? 40 : 0;
    if (z = n(c.split("_").join("."), "Mac OS X ")) {
      p = z;
    }
    var kb = !0;
  } else if (k(c, "BlackBerry") || k(c, "BB10")) {
    r = 34, p = ka, O = !0;
  } else if (k(c, "SunOS") || k(c, "Sun Solaris")) {
    r = 42;
  } else if (k(c, "FreeBSD")) {
    r = 43;
  } else if (k(c, "OpenBSD")) {
    r = 44;
  } else if (k(c, "NetBSD")) {
    r = 45;
  } else if (H && pa) {
    k(c, "Android 4.4;") ? Y = {min:2.3} : 4 <= x(M) ? Y = M : Y = {min:2.2}, p = Y;
  } else if (H && ca) {
    M ? Y = M : Y = {min:1.6}, p = Y, k(c, "Tablet") ? T = !0 : O = !0;
  } else if (M) {
    p = M, H = !0;
  } else if (Ba && Ia || la || Ra) {
    var sa = !0;
    Da ? Y = {min:4.4} : Na && !ha || za || hb ? Y = {min:4} : (Y = M = oa.touchAction !== Z ? {min:5} : Sa ? 4.4 : ja ? q.connection ? l.searchBoxJavaBridge_ || Na ? I.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= ma ? 3 : 533 <= ma ? Ha ? 2.3 : 2.2 : 530 <= ma ? 2 : 1.5, qa && (F = 24, G = qa));
    p = Y;
    H = !0;
  } else {
    ub ? (p = {min:5}, sa = H = !0) : Ba && (k(c, "Ubuntu") ? r = 46 : (z = n(c, "Mint/")) ? (r = 47, p = z) : (z = n(c, "Fedora/")) ? (r = 48, p = z) : r = k(c, "Gentoo") ? 49 : 50);
  }
  ea || H && sa && ib ? r = 27 : H && (r = r || 26);
  F || (P = P || H, ca ? (F = P || Ka || O || T ? 9 : 8, G = Ma) : L ? (Y = wa(D, "Trident/") + 4, F = Ka || O || T || Za ? 3 : kb && 5 <= V ? 7 : 2, G = V) : ia ? (F = 23 === r ? 6 : 5, G = n(D, "Edge/")) : Ca ? (F = 13, G = Ca) : pa ? (F = P ? 12 : 11, G = aa || eb) : Da ? (F = 24, G = Da) : (z = Ua || n(c, "NetFront/")) ? (F = 18, G = z) : (z = n(c, "iCab")) ? (F = 19, G = z) : (z = Fa(n(c, "Opera Mini/"), n(c, "Opera Mobi/")) || Ja && ka) ? (F = 10, G = z, r || (k(c, "iPhone") ? S = 0 : k(c, 
  "iPad") ? S = 1 : k(c, "iPod") && (S = 2), S && (r = 24))) : Aa ? (F = 25, G = Ya) : tb ? (F = 14, G = La) : H && ha ? (F = 21, G = M) : Na || za || hb ? (F = P ? 22 : 20, G = na || gb) : H && Sa ? (F = 23, G = 5 > x(M) ? M : na) : H && (ka || sa) ? (F = 21, G = M) : na ? (F = P ? 22 : 20, G = na) : ma && (F = 15, G = ma));
  r && (B[2] = r, p && (B[3] = xa(p)));
  F && (B[0] = F, G && (B[1] = xa(G)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
Array.prototype.pop || (Array.prototype.pop = function() {
  var B = this[this.length - 1];
  --this.length;
  return B;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var B = arguments, l = 0, y = B.length, q = this.length; l < y; ++l) {
    this[q + l] = B[l];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var B = this[0], l = 1, y = this.length; l < y; ++l) {
    this[l - 1] = this[l];
  }
  --this.length;
  return B;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var B = arguments, l = B.length, y = this.length += l - 1, q = y; q >= l; --q) {
    this[q] = this[q - l];
  }
  for (q = 0; q < l; ++q) {
    this[q] = B[q];
  }
  return y;
});
Array.prototype.splice || (Array.prototype.splice = function(B, l) {
  var y = arguments, q = y.length - 2 - l, Q = this.slice(B, B + l), x;
  if (0 < q) {
    var I = this.length - 1;
    for (x = B + l; I >= x; --I) {
      this[I + q] = this[I];
    }
  } else if (0 > q) {
    I = B + l;
    for (x = this.length; I < x; ++I) {
      this[I + q] = this[I];
    }
    this.length += q;
  }
  I = 2;
  for (x = y.length; I < x; ++I) {
    this[I - 2 + B] = y[I];
  }
  return Q;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(B, l) {
  var y = this.length >>> 0;
  if (0 === y) {
    return -1;
  }
  if (l) {
    var q = l || 0;
    q = -Infinity === q ? 0 : (0 > q ? -q : q) | 0;
    if (y <= q) {
      return -1;
    }
  }
  for (q = 0 <= q ? q : 0 < y + q ? y + q : 0; q < y; ++q) {
    if (this[q] === B) {
      return q;
    }
  }
  return -1;
});
(function(B, l, y, q, Q, x, I, Z, wa, k, db, C) {
  function n() {
    zb = za("^\\s*<");
    Ab = za("\\S");
  }
  function Fa(a) {
    K(l, "load", Fa);
    Fa = C;
    Ia(na, a, !0);
    vb = na = C;
  }
  function xa() {
    for (var a, b = 0, e = new Q() - 0; b < W.length;) {
      e < W[0].t ? ++b : (a = W.splice(b, 1)[0], a.f(a.p));
    }
    ra = W.length ? k(xa, X) : 0;
  }
  function Ga() {
    for (var a, b = 0; b < Qa.length; ++b) {
      a = Qa[b], a.f();
    }
  }
  function c(a) {
    if (B[0] === a) {
      return la === la + "" ? I(la) : la;
    }
  }
  function D(a) {
    var b = B[3];
    if (B[2] === a) {
      return b === b + "" ? I(b) : b;
    }
  }
  function La() {
    qa && (qa = clearInterval(qa));
  }
  function E() {
    ra && (ra = db(ra));
  }
  function ia(a, b, e) {
    var d = ["<", a], g = 1, f, u;
    if (b) {
      for (f in b) {
        var m = b[f];
        if (null != m && "" !== m) {
          if ("style" === f) {
            d[++g] = ' style="';
            for (u in m) {
              for (var A = ++g, h, t = [], w = u.split(""), J = w.length; J;) {
                h = w[--J], "A" <= h && "Z" >= h && (h = "-" + h.toLowerCase()), t[J] = h;
              }
              d[A] = t.join("") + ":" + m[u] + ";";
            }
            d[++g] = '"';
          } else {
            "className" === f && (f = "class"), d[++g] = " " + f + '="' + m + '"';
          }
        }
      }
    }
    d[++g] = ">";
    null != e && (da && "font" !== a ? d[++g] = "<FONT>" + e + "</FONT>" : d[++g] = e);
    d[++g] = "</" + a + ">";
    return d.join("");
  }
  function oa(a, b) {
    var e = "*" === b && 6 > H ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), d = [], g = 0, f;
    for (f = e.length; g < f; ++g) {
      d[g] = e[g];
    }
    return d;
  }
  function V(a) {
    return da ? a.parentElement : a.parentNode;
  }
  function ya(a, b, e, d, g, f) {
    if (da) {
      var u = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
      var m = jb(2 > a ? Ta(b) : b);
      m = 2 > a ? m.indexOf(b) + a : m.length;
      b.insertAdjacentHTML(u, ia(e, d, g));
      b = jb(b)[m];
      null != g && ("font" === e ? b.nodeType = 3 : b.children[0].nodeType = 3);
    } else if (Ka) {
      b = x.createElement(ia(e, d));
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
                Za(b, u, e);
            }
          }
        }
      }
      S || null != g && Ha(b, g);
    }
    return b;
  }
  function Ha(a, b) {
    if (da) {
      return ya(2, a, "font", C, b);
    }
    var e = x.createTextNode("" + b);
    a.appendChild(e);
    return e;
  }
  function Xa(a, b) {
    9 > H ? a.className = b : a.setAttribute("class", b);
  }
  function ja(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function Ia(a, b, e) {
    for (var d = 0; d < a.length; ++d) {
      !0 === a[d](b) && (a.splice(d, 1), --d);
    }
    e && (a.length = 0);
  }
  function ka() {
    var a = sa, b;
    for (sa = []; b = a.shift();) {
      Ia(b, a.shift(), a.shift());
    }
  }
  function Ja(a) {
    var b = a || event;
    a = R[b.type];
    var e = -1, d, g;
    H ? (b.preventDefault = function() {
      b.returnValue = !1;
    }, b.stopPropagation = function() {
      b.cancelBubble = !0;
    }) : lb && (b.C = b.stopPropagation, b.stopPropagation = function() {
      g = !0;
    });
    for (; d = a[++e];) {
      d.j === this ? (this.h = d.i, this.h(b), this.h = Oa, this.h = C) : 7.2 > Pa && this === x && d.j === l && (l.h = d.i, l.h(b), delete l.h);
    }
    if (H) {
      return b.preventDefault = b.stopPropagation = C, b.returnValue;
    }
    lb && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (mb = !0), g && !mb && b.C(), b.C = b.stopPropagation = C);
  }
  function ca() {
    var a = 9 === kb.offsetWidth;
    if (P !== a) {
      var b = gb;
      a = P = a;
      v && !sa.length && ha(ka);
      sa.push(b, a, void 0);
    }
  }
  function Ma(a) {
    return a === "" + a;
  }
  function za(a, b) {
    return nb ? new Bb(a, b) : new q(a, b);
  }
  function L(a, b, e, d) {
    if (Cb() - Db < Kb && !d) {
      return a(b);
    }
    ha(Na, {H:a, J:b});
  }
  function Na(a) {
    Db = Cb();
    a.H(a.J);
  }
  function pa(a, b) {
    a && $a[a] || (a = zb.test(b) ? "default-markup" : "default-code");
    var e = !!$a[a];
    e && L(Eb, a, 0, !0);
    return e;
  }
  function Aa() {
    function a(ta, Va, Wa) {
      Va && (b.g = b.g || [], b.g.push({l:b, v:b.v, D:1, s:u, A:ta, o:Va, m:Wa, F:{}, u:0}));
    }
    var b = ba, e = b.m, d = e[0], g = e[2], f = b.A, u = b.s, m = b.K.shift(), A = b.F;
    if (m) {
      var h = A[m], t;
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
        !(t = Ma(h)) || w && Ma(w[1]) || (t = !1, h = 11);
        t || (A[m] = h);
      }
      g = b.u;
      A = m.length;
      b.u += A;
      if (t) {
        t = w[1];
        d = m.indexOf(t);
        var J = t.length, U = d + J;
        w[2] && (U = A - w[2].length, d = U - J);
        a(f + g, m.substr(0, d), e);
        if (J && pa(h, t)) {
          a(f + g + d, t);
          var va = !0;
        }
        a(f + g + U, m.substr(U), e);
        b.g && b.g.length && (ba = b.g.shift());
        va || (ba !== b ? L(wb, C, 2) : L(Aa, C, 2));
      } else {
        u.push(f + g, h), L(Aa, C, 2);
      }
    } else {
      b.l ? (ba = b.l.g.shift()) ? L(wb, C, 2) : (ba = b.l, L(Aa, C, 2)) : L(Lb, C, 2);
    }
  }
  function Ya(a) {
    if (ob.length) {
      var b = ob.shift(), e = pb[b];
      if (e.pop) {
        pb[b] = za(e[0], e[1]);
      } else if (Ma(e)) {
        pb[b] = za(e);
      } else {
        return Ya(a);
      }
      L(Ya, a, 1);
    } else {
      L(Eb, a);
    }
  }
  function sb(a) {
    for (var b, e = a.firstChild; e; e = e.nextSibling) {
      var d = e.nodeType;
      b = 1 === d ? b ? a : e : 3 === d ? Ab.test(e.nodeValue) ? a : b : b;
    }
    return b === a ? C : b;
  }
  var Oa = y, M = x.body, la = B[1], H = c(2) || c(3), Ba = c(7);
  c(5) || c(6);
  var Pa = c(8) || c(9), Ca = c(11) || c(12);
  Ca && B.conpare(la, "1.9.1");
  c(13);
  var aa = c(15), eb = c(16) || c(17);
  c(10) || c(25);
  var z = c(20) || c(22);
  z || c(23) || c(21) || c(24);
  z && I(navigator.userAgent.split("Edg/")[1]);
  I(navigator.appVersion.split("Trident/")[1]);
  D(35) || D(36) || D(37);
  var fb = !H && !Ba && (new Z('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))(), ma = D(1) || D(2) || D(3) || D(4) || D(8) || D(9) || D(10), na = [], gb = [];
  var hb = function(a) {
    Qa.length || (qa = setInterval(Ga, ib));
    Qa.push({f:a, G:++Da});
    return Da;
  };
  var tb = function() {
    qa && (La(), qa = setInterval(Ga, ib));
  };
  var Qa = [], ib = 500, Da = 0, qa;
  if (5 > H || Ba) {
    l._wdb_onlooptimer = Ga, Ga = "_wdb_onlooptimer()";
  }
  var ha = function(a, b, e) {
    W.length || (ra = k(xa, X));
    W.push({f:a, p:b, G:++Sa, t:new Q() - 0 + (X < e ? e : X)});
    return Sa;
  };
  var Ra = function() {
    ra && (E(), ra = k(xa, X));
  };
  var W = [], X = 16, Sa = 0, ra;
  if (5 > H || Ba) {
    l._wdb_ontimer = xa, xa = "_wdb_ontimer()";
  }
  var da = 5 > H;
  var ub = oa(x, "html")[0];
  oa(x, "head");
  var Ta = V;
  var jb = function(a) {
    a = da ? a.children : a.childNodes;
    for (var b = [], e = a.length; e;) {
      b[--e] = a[e];
    }
    return b;
  };
  var r = function(a, b, e, d, g) {
    b = ya(2, a, b, e, d, g);
    da || (a.appendChild(b), S && null != d && Ha(b, d));
    return b;
  };
  var p = function(a, b, e, d, g) {
    b = ya(0, a, b, e, d, g);
    da || (V(a).insertBefore(b, a), S && null != d && Ha(b, d));
    return b;
  };
  var F = Ha;
  var G = function(a, b) {
    var e;
    if (da) {
      return ya(1, a, "font", C, b);
    }
    var d = x.createTextNode("" + b);
    (e = a.nextSibling) ? Ta(a).insertBefore(d, e) : Ta(a).appendChild(d);
    return d;
  };
  var Ua = function(a) {
    da ? a.outerHTML = "" : Ta(a).removeChild(a);
  };
  var Ka = 9 > H, S = Ka;
  var O = function(a) {
    return a.tagName.toUpperCase();
  };
  var T = function(a, b) {
    return a.getAttribute(b) || "";
  };
  var Za = function(a, b, e) {
    a.setAttribute(b, e);
  };
  var Y = Xa;
  var ea = function(a, b) {
    var e;
    if (!ja(a, b)) {
      if (e = a.className) {
        b = " " + b;
      }
      Xa(a, e + b);
    }
  };
  var P, kb, sa = [], v;
  na.push(function() {
    kb = r(M, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
    vb(function() {
      v = !0;
      sa.length && ha(ka);
    });
  });
  var N = function(a, b, e, d) {
    if (Fb) {
      a.addEventListener(b, e, d ? fb ? d : d.capture : !1);
    } else {
      var g = {j:a, i:e};
      d = R[b];
      var f = "on" + b, u, m;
      if (d) {
        for (u = d.length; m = d[--u];) {
          if (m.j === a && m.i === e) {
            return;
          }
        }
        R[b].push(g);
      } else {
        R[b] = d = [g], fa || (b = a[f], "function" === typeof b && b !== Ja && d.unshift({j:a, i:b}));
      }
      fa ? a.attachEvent(f, Ja) : a[f] = Ja;
    }
  };
  var K = function(a, b, e, d) {
    if (Fb) {
      a.removeEventListener(b, e, d ? fb ? d : d.capture : !1);
    } else {
      d = R[b];
      b = "on" + b;
      var g, f, u;
      if (d) {
        for (g = d.length; f = d[--g];) {
          f.j === a && (f.i === e ? d.splice(g, 1) : u = !0);
        }
        u || (fa ? a.detachEvent(b, Ja) : (a[b] = Oa, a[b] = null));
      }
    }
  };
  var R = {}, fa = !1, lb = 525.13 > aa, Fb = !lb && !Ba && l.addEventListener, mb;
  lb && ub.addEventListener("click", function(a) {
    if (mb) {
      return mb = !1, a.preventDefault(), !1;
    }
  });
  var vb = function(a) {
    na.push(a);
  };
  var Gb = function(a) {
    qb && qb.push(a);
  };
  var qb = [];
  if (419.3 >= aa) {
    var rb = function() {
      if (rb) {
        var a = x.readyState;
        "loaded" === a || "complete" === a ? (rb = C, Fa()) : ha(rb);
      }
    };
    ha(rb);
  } else {
    N(l, "load", Fa);
  }
  H || .9 <= Ca && 1.8 > Ca ? N(l, "unload", function(a) {
    Ia(qb, a, !0);
  }) : qb = C;
  vb(function() {
    ca();
    hb(ca);
  });
  var $a = {ts:[0, 3, [3, 4, 5, 6, 7, 8, 9, 0, 10, 11]], js:"ts", xsl:[1, 13, [12, 13, 14, 15, 16, 17, 18, 19, 20, 21]], xml:"xsl", htm:"xsl", css:[2, 25, [23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33]], mxml:"xsl", html:"xsl", json:[0, 37, [34, 7, 8, 9, 0, 10, 35]], xhtml:"xsl", regex:[1, 40, [36]], "in.tag":[3, 44, [39, 40, 41, 42, 43, 44, 45, 46, 47, 48]], "uq.val":[1, 40, [49]], typescript:"ts", javascript:"ts", "default-code":[4, 57, [52, 3, 4, 5, 53, 7, 8, 9, 0, 10, 11]], "default-markup":"xsl"};
  var Mb = [{"'":1, '"':1, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}, {}, {"\f":22, "\n":22, "\r":22, "\t":22, " ":22}, {"\n":37, "\r":37, "\t":37, " ":37, "'":38, '"':38}, {"`":50, '"':50, "'":50, "#":51, "\u00a0":2, "\t":2, "\n":2, "\r":2, " ":2, "-num":0}], Nb = [[4, 0], [1, 1], [0, 2], [2, 4], [2, 5], ["regex", 6], [5, 7], [4, 8], [7, 9], [0, 10], [0, 11], [3, 12], [0, 14], [8, 15], [2, 16], ["", 17], ["", 18], [3, 19], ["", 20], ["js", 21], ["css", 22], ["in.tag", 23], [0, 24], [1, 
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
  Ob = "pln str com pun lit kwd atv typ dec tag atn src".split(" "), Cb = Q.now || function() {
    return +new Q();
  }, nb = !q || .9 > Ca || 8 > Pa || 5.5 > H, Bb, Db, ba, xb, yb, Kb = 5 > H ? 60 : 5.5 > H ? 0 : nb ? 20 : 10, zb, Ab;
  if (nb) {
    var Hb = function() {
      l.RegExpCompat = function(a) {
        l.RegExpCompat = Bb = a;
        n();
        n = Hb = C;
        ha(ab);
      };
      r(M, "script", {src:Ea + "js/regexpcompat.js"});
    };
  } else {
    n(), n = C;
  }
  var Qb = function() {
    var a = ba, b = a.I, e = Pb(a.v, a.D), d = a.o = e.o;
    a.B = e.B;
    pa(b, d) || (ba = C, L(ab, C, 0, !0));
  };
  var wb = function() {
    var a = ba;
    a.K = a.o.match(a.m[1]) || [];
    a.s.push(a.A, 0);
    L(Aa, C, 2);
  };
  var ob = [];
  var Eb = function(a) {
    function b(h) {
      var t = h;
      0 <= h && (t = Nb[h]);
      0 <= t[1] && (t[1] = e(t[1]));
      return t;
    }
    function e(h) {
      var t = h;
      return 0 <= h && (t = pb[h], !t.exec) ? (ob.push(h), h) : t;
    }
    var d = ba, g = $a[a];
    Ma(g) && (g = $a[a] = $a[g]);
    var f = g[0];
    if (0 <= f) {
      f = Mb[f];
      if (0 <= f["-num"]) {
        var u = f["-num"];
        delete f["-num"];
        for (var m = -1; 9 > m;) {
          f["" + ++m] = u;
        }
      }
      g[0] = f;
    }
    for (var A in f) {
      f[A] = b(f[A]);
    }
    g[1] = e(g[1]);
    f = g[2];
    m = 0;
    for (u = f.length; m < u; ++m) {
      f[m] = b(f[m]);
    }
    ob.length ? L(Ya, a, 2) : (d.m ? d.l && (d.l.g[0].m = g) : d.m = g, L(wb, C, 1));
  };
  var Pb = function(a, b) {
    function e(A) {
      var h = A.nodeType;
      if (1 === h) {
        if (!ja(A, "nocode")) {
          for (h = A.firstChild; h; h = h.nextSibling) {
            e(h);
          }
          h = O(A);
          if ("BR" === h || "LI" === h) {
            d[u] = "\n", f[u << 1] = g++, f[u++ << 1 | 1] = A;
          }
        }
      } else if (3 === h || 4 === h) {
        if (h = A.nodeValue) {
          h = b ? h.split("\r\n").join("\n").split("\r").join("\n") : h.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), d[u] = h, f[u << 1] = g, g += h.length, f[u++ << 1 | 1] = A;
        }
      }
    }
    var d = [], g = 0, f = [], u = 0;
    e(a);
    var m = d.join("");
    "\n" === m.charAt(m.length - 1) && (m = m.substr(0, m.length - 1));
    return {o:m, B:f};
  };
  var Rb = function(a, b, e) {
    function d(h) {
      var t = h.nodeType;
      if (1 === t && !ja(h, "nocode")) {
        if ("BR" === O(h)) {
          g(h), h.parentNode && Ua(h);
        } else {
          for (h = h.firstChild; h; h = h.nextSibling) {
            d(h);
          }
        }
      } else if ((3 === t || 4 === t) && e) {
        var w = h.nodeValue, J = w.indexOf("\r\n"), U = 2;
        -1 === J && (J = w.indexOf("\n"), U = 1);
        -1 === J && (J = w.indexOf("\r"));
        -1 !== J && (t = w.substr(0, J), h.nodeValue = t, (w = w.substr(J + U)) && G(h, w), g(h), t || Ua(h));
      }
    }
    function g(h) {
      function t(J, U) {
        var va = U ? J.cloneNode(!1) : J, ta = J.parentNode;
        if (ta) {
          ta = t(ta, 1);
          var Va = J.nextSibling;
          ta.appendChild(va);
          for (var Wa = Va; Wa; Wa = Va) {
            Va = Wa.nextSibling, ta.appendChild(Wa);
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
      if (10 <= b && 7.2 > Pa) {
        var A = x.createElement("ol");
        A.innerHTML = '<li value="' + b + '">' + f.innerHTML + "</li>";
        u[0] = A.firstChild;
      } else {
        Za(f, "value", b);
      }
    }
    A = r(a, "ol", {className:"linenums"});
    a = Math.max(0, b - 1 | 0) || 0;
    m = 0;
    for (b = u.length; m < b; ++m) {
      f = u[m], Y(f, "L" + (m + a) % 10), f.firstChild || F(f, "\u00a0"), A.appendChild(f);
    }
  };
  var Lb = function() {
    var a = ba, b = a.o, e = b.length, d = 0, g = a.B, f = g.length, u = 0, m = a.s, A = m.length, h = 0;
    m[A] = e;
    var t, w;
    for (w = t = 0; w < A;) {
      m[w] !== m[w + 2] ? (m[t++] = m[w++], m[t++] = m[w++]) : w += 2;
    }
    A = t;
    for (w = t = 0; w < A;) {
      var J = m[w], U = m[w + 1];
      for (w += 2; w + 2 <= A && m[w + 1] === U;) {
        w += 2;
      }
      m[t++] = J;
      m[t++] = U;
    }
    m.length = t;
    a = a.v;
    A = "";
    a && (A = a.style.display, a.style.display = "none");
    for (; u < f;) {
      t = g[u + 2] || e;
      J = m[h + 2] || e;
      w = Math.min(t, J);
      U = g[u + 1];
      var va;
      if (1 !== U.nodeType && (va = b.substring(d, w))) {
        9 > H && (va = va.split("\n").join("\r"));
        var ta = p(U, "span", {className:Ob[m[h + 1]]}, va);
        Ua(U);
        d < t && (g[u + 1] = G(ta, b.substring(w, t)));
      }
      d = w;
      d >= t && (u += 2);
      d >= J && (h += 2);
    }
    a && (a.style.display = A);
    ba = C;
    L(ab, C, 3, !0);
  };
  var bb = [], cb;
  gb.push(function(a) {
    if (a) {
      a = [oa(x, "pre"), oa(x, "code"), oa(x, "xmp")];
      for (var b = 0; b < a.length; ++b) {
        for (var e = 0, d = a[b].length; e < d; ++e) {
          Ib(a[b][e]);
        }
      }
      return !0;
    }
  });
  var Ib = function(a) {
    bb.push(a);
    cb = bb.length;
    1 === cb && (nb ? ha(Hb) : ha(ab));
  };
  var ab = function() {
    function a(u, m) {
      return (u.split(m)[1] || "").split(" ")[0];
    }
    if (!ba) {
      cb !== bb.length && yb && yb(cb - bb.length, cb);
      var b = bb.shift();
      if (b) {
        if (ja(b, "prettyprint") && !ja(b, "prettyprinted")) {
          for (var e = !1, d = b.parentNode; d !== M; d = d.parentNode) {
            var g = O(d);
            if (("PRE" === g || "XMP" === g || "CODE" === g) && ja(d, "prettyprint")) {
              e = !0;
              break;
            }
          }
          if (!e) {
            e = b.className;
            ea(b, "prettyprinted");
            d = !1;
            if (!d) {
              d = a(e, "lang-") || a(e, "language-");
              var f;
              !d && (f = sb(b)) && "CODE" === O(f) && (d = a(f.className, "lang-") || a(f.className, "language-"));
            }
            g = O(b);
            "PRE" === g || "XMP" === g ? g = 1 : (g = b.currentStyle, f = x.defaultView, g = (g = g ? g.whiteSpace : f && f.getComputedStyle ? f.getComputedStyle(b, null).getPropertyValue("white-space") : 0) && "pre" === g.substr(0, 3));
            f = !1;
            (f = "true" === f || +f) || (f = a(e, "linenums:") || ja(b, "linenums"), f = f.length ? +f : f);
            f && Rb(b, f, g);
            ba = {I:d, v:b, L:f, D:g, A:0, u:0, F:{}, s:[]};
            L(Qb);
            return;
          }
        }
        L(ab, C, 0, !0);
      } else {
        xb && xb();
      }
    }
  };
  l.PR = {RegExpProxy:za, prettifyElement:Ib, registerCompleteHandler:function(a, b) {
    xb = a;
    yb = b;
  }};
  var Jb = x.scripts || oa(x, "script");
  var Ea = Jb[Jb.length - 1].src.split("/");
  --Ea.length;
  "js" === Ea[Ea.length - 1] && --Ea.length;
  (Ea = Ea.join("/")) && (Ea += "/");
  ma || T(M, "mob");
  6.1 > eb && (void 0)(tb);
  Gb(La);
  6.1 > eb && (void 0)(Ra);
  Gb(E);
})(ua, this, function() {
}, this.RegExp, Date, document, parseFloat, Function, isFinite, setTimeout, clearTimeout, void 0);

