// Google Code Prettify for ES2, (https://githug.com/itozyun/regexp-free-code-prettify)
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
  } else {
    if (x.__apply) {
      delete x.__apply;
    }
  }
  return r;
});
ua = [];
ua.conpare = function(E, r) {
  var B = 0, t, aa, S = (E + "").split("."), K = (r + "").split("."), ca = S.length;
  for (t = K.length; "0" === S[ca - 1];) {
    --ca;
  }
  for (; "0" === K[t - 1];) {
    --t;
  }
  for (aa = ca < t ? ca : t; B < aa; ++B) {
    var Aa = S[B] - 0, k = K[B] - 0;
    if (Aa !== k) {
      return Aa > k ? 1 : -1;
    }
  }
  return ca > t ? 1 : ca === t ? 0 : -1;
};
(function(E, r, B, t, aa, S, K, ca) {
  function Aa(x, O, A) {
    A = S(x.split(O)[1]);
    return 0 <= A ? A : 0;
  }
  function k(x, O) {
    return 0 <= x.indexOf(O);
  }
  function L(x) {
    return k(x, "Linux armv") || k(x, "Linux aarch") || k(x, "Linux i686") || k(x, "Linux x86_64");
  }
  function da(x, O) {
    for (var A in O) {
      if (A === x) {
        return !0;
      }
    }
  }
  function v(x, O) {
    var A = "", V = -1, va;
    if (x = x.split(O)[1]) {
      for (; va = x.charCodeAt(++V);) {
        if (48 <= va && 57 >= va || 46 === va) {
          A += x.charAt(V);
        } else {
          break;
        }
      }
      for (V = A.length; V;) {
        if (46 === A.charCodeAt(--V)) {
          A = A.substr(0, V);
        } else {
          break;
        }
      }
    }
    return A;
  }
  function lb(x) {
    for (var O = arguments, A = 1, V = O[0], va; A < O.length; ++A) {
      0 > Ba(V, va = O[A]) && (V = va);
    }
    return V;
  }
  function mb(x) {
    return x === x + "" ? x : x === x - 0 ? "" + x : x.min && x.max ? x.min + "~" + x.max : x.min ? x.min + "~" : "~" + x.max;
  }
  var Ba = E.conpare, l = t.userAgent, T = t.appVersion, Ga = S(T) || 0, F = t.platform, ya = B.documentElement, Za = ya && ya.style, ea = B.documentMode, Ha = aa.width;
  aa = aa.height;
  var nb = r.HTMLAudioElement, $a = r.performance, pa = r.Int8Array, Ca = r.ontouchstart !== ca, M = v(T, "Version/") || v(l, "Version/"), Ia = r.operamini, la = !Ia && r.opera, xc = la && (la.version && "function" === typeof la.version ? la.version() : lb(v(l, "Opera "), M, Ga)), Kb = r.opr, Oa = !la && (B.all || ea);
  ea = Oa && (ea ? ea : r.XMLHttpRequest ? B.getElementsByTagName ? 7 : 4 : B.compatMode ? 6 : (0).toFixed ? 5.5 : r.attachEvent ? 5 : 4);
  ya = !Oa && ya.msContentZoomFactor;
  var ab = !ya && r.chrome, Ja = !Oa && function() {
    for (var x in Za) {
      if (0 === x.indexOf("Moz")) {
        return !0;
      }
    }
  }(), ob = k(l, "UCWEB"), yc = ob && v(l, " U2/"), zc = ob && v(l, "; wds "), pb = v(l.split("_").join("."), "; iPh OS "), R = v(l, "; Adr "), Pa = k(T, "YJApp-ANDROID"), Y = k(F, "Android") || Ja && k(T, "Android") || Pa;
  R = v(F, "Android ") || v(T, "Android ") || v(l, "Android ") || R;
  var bb = k(F, "Linux"), Lb = "MacIntel" === F && t.standalone !== ca, qb = Ja && v(l, "Goanna/"), fa = !qb && Ja && (v(l, "rv:") || v(l.substr(l.indexOf(") Gecko/") - 11), "; ")), Mb = v(l, "Firefox/"), C = v(l, "Opera/"), Ac = r.FNRBrowser, W = Aa(l, "AppleWebKit/"), Ka = v(l, "Chrome/"), Nb = v(l, "OPR/"), rb = v(T, "KHTML/"), Ob = v(l.toLowerCase(), "iris");
  v(l, "FxiOS/");
  v(l, "CriOS/");
  v(l, "EdgiOS/");
  var Bc = v(l, "Silk/"), Qa = Aa(l, "SamsungBrowser/"), sb = !Qa && function() {
    for (var x = "GT-I9300 GT-I9305 SHV-E210 SGH-T999L SGH-I747 SGH-N064 SC-06D SGH-N035 SC-03E SCH-J021 SCL21 SCH-R530 SCH-I535 SCH-S960L SCH-S968C GT-I9308 SCH-I939 SHV-E210S GT-I8160 GT-I8260 GT-I8262 SM-G350 SM-G352 SM-G386F SM-G386T1GT-N7000 GT-N7005 SHV-E160 SC-05D SGH-N054 SGH-I717 SGH-T879 GT-I9220 GT-I9228 SCH-I889 GT-N7100 GT-N7105 SCH-I605 SCH-R950 SGH-I317 SGH-T889 SPH-L900 SCH-N719 GT-N7102 GT-N7108 SGH-N025 SC-02E SHV-E250 GT-N5100 GT-N5110 GT-N5120 GT-N8000 GT-N8005 GT-N8010 GT-N8013 GT-N8020 GT-I9100 GT-I9108 GT-I9210 SGH-I777 SGH-I757M SGH-I727 SGH-I927 SGH-T989 SHW-M250 SPH-D710 ISW11SC SC-02C SCH-R760 SCH-I929 GT-I9105 GT-I8190 GT-I8200 SM-G730A GT-P3100 GT-P3110 GT-P3113 SCH-I705 GT-P5100 GT-P5110 GT-P5113 SCH-I915 SM-G3508 SM-G3509 GT-S7580 GT-S7582 GT-S6310 GT-S6312 GT-S6313T".split(" "), 
    O, A = x.length; O = x[--A];) {
      if (k(l, O)) {
        return 2 > S(M) ? M : .9;
      }
    }
    x = "SC-02F SGH-N075 GT-S7270 GT-S7272 GT-S7275R GT-I9150 GT-I9152 GT-I9200 GT-I9205 GT-I9500 GT-I9506 SC-04E SGH-N045 GT-I9190 GT-I9192 GT-I9295 GT-I9197 GT-I9198 SGH-I257M SCH-I435 GT-I8666 GT-I8552 GT-I8558 SHV-E500S/L GT-18552B SM-N900 N9000 N9002 SC-01F SCL22 SM-G7100 SM-G7102 SM-G7105 SM-N750 SM-P600 SM-P601 SM-P605 GT-I9301I GT-I9300RWI SGH-T399 SM-P900 SM-P901 SM-P90 SM-P905 GT-I9295 SGH-I537 SHV-E330S GT-I9507V GT-I9505 GT-I9515 SGH-I337 SM-T230 SM-T231 SM-T235 SM-T237 403SC SM-T330NU SM-T331NU SM-T337V SM-T530 SM-T531 SM-T535 M-T320 SM-T321 SM-T325 SM-T520 SM-T525 SM-T900 SM-T905 SM-T700 SM-T705 SM-T707V SM-T800 SM-T805 SM-T807 SM-A300 SM-A5000 SM-A5009 SM-A500F SM-A500F1 SM-A500FQ SM-A500FU SM-A500G SM-A500H SM-A500HQ SM-A500K SM-G850 SM-C115 SM-C111 SM-G750F SM-G7508 SM-G7508Q SM-G750H GT-I9301I SM-900 SC-04F SCL23 SM-G906S SM-G906K SM-G906L SM-G870A SM-N915 SC-02G SM-800".split(" ");
    for (A = x.length; O = x[--A];) {
      if (k(l, O)) {
        return M;
      }
    }
  }(), Pb = ab && 534.3 >= W, Ra = L(F), qa = Ra && !k(l, F) && L(l);
  Ca = Ca && (W || Ja) && qa || !R && Pa;
  Pa = !!r.ReactNativeWebView;
  Ra = Ra && function() {
    for (var x in r) {
      if (0 === x.indexOf("SlexAPI_")) {
        return !0;
      }
    }
  }();
  var ra = (qa = r.puffinDevice) && qa.clientInfo;
  ra = (qa = ra && "iOS" === ra.os && ra.osVersion) && ra.model;
  var tb = !ea && B.registerElement, ub = !ea && B.execCommand, Qb = bb && tb && "11.0.696.34" === Ka, vb = r._firefoxTV_playbackStateObserverJava, Rb = Aa(l, "diordnA ");
  if ("Nitro" === F) {
    var n = 1;
  } else {
    if ("Nintendo DSi" === F) {
      n = 2;
      var w = C;
    } else {
      if ("New Nintendo 3DS" === F || k(l, "iPhone OS 6_0") && 320 === Ha && 240 === aa) {
        n = 4, w = v(l, "NintendoBrowser/");
      } else {
        if ("Nintendo 3DS" === F) {
          n = 3, w = v(l, "Version/"), W = 535;
        } else {
          if ("Nintendo Swicth" === F) {
            n = 7, w = v(T, "NintendoBrowser/");
          } else {
            if ("Nintendo WiiU" === F) {
              n = 6, w = v(T, "NintendoBrowser/"), W = v(T, "AppleWebKit/");
            } else {
              if ("Nintendo Wii" === F) {
                n = 5, w = v(l, "Wii; U; ; ");
              } else {
                if (C = v(l, "PlayStation Vita ")) {
                  n = 10, w = C;
                } else {
                  if (C = v(l, "(PlayStation Portable); ")) {
                    n = 8;
                    w = C;
                    var ia = 3.3;
                  } else {
                    if (C = v(l, "PLAYSTATION 3; ") || v(l, "PLAYSTATION 3 ")) {
                      if (n = 11, w = C, 0 > Ba("4.10", C)) {
                        var H = 26, G = C;
                      }
                    } else {
                      if (k(l, "Xbox One")) {
                        n = 15, w = 1;
                      } else {
                        if (k(l, "Xbox")) {
                          n = 14, w = 1;
                        } else {
                          if (2 === Ga && k(l, "Sony/COM2/")) {
                            n = 17;
                            w = 2;
                            ia = 3.4;
                            var za = !0;
                          } else {
                            if (0 === F.indexOf("iP") || pb || qa || Lb) {
                              if (qa) {
                                switch(w = qa, ra.substr(0, 4)) {
                                  case "iPho":
                                    var ha = 0;
                                    v(ra, ha);
                                    var ba = !0;
                                    break;
                                  case "iPad":
                                    ha = 1;
                                    v(ra, ha);
                                    var U = !0;
                                    break;
                                  case "iPod":
                                    ha = 2;
                                    v(ra, ha);
                                    var P = !0;
                                }
                              } else {
                                pb ? w = pb : (w = v(T.split("_").join("."), "OS "), da("isSecureContext", r), da("enableWebGL", r), da("sameOrigin", r));
                                if (!w || Ac) {
                                  w = r.PointerEvent ? 13 : r.HTMLDataListElement ? 12.2 : Array.prototype.flat ? 12 : t.sendBeacon ? 11.3 : r.WebAssembly ? 11.2 : r.HTMLMeterElement ? 10.3 : r.Proxy ? 10.2 : r.HTMLPictureElement ? 9.3 : K.isNaN ? 9.2 : r.SharedWorker ? $a && $a.now ? 8 : 8.4 : ub ? 7.1 : r.webkitURL ? 6.1 : r.Worker ? 5.1 : pa ? 4.3 : nb ? 4.1 : 3.2;
                                }
                                var D = Ha === 1.5 * aa || 1.5 * Ha === aa;
                                0 === F.indexOf("iPhone") ? (ha = 0, ba = !0) : 0 === F.indexOf("iPad") || Lb ? (ha = 1, U = !0) : 0 === F.indexOf("iPod") && (ha = 2, P = !0);
                              }
                              H = !qa && (t.standalone || (U || 12 > w) && da("webkitFullscreenEnabled", B) || 11 <= w && 13 > w && t.mediaDevices) ? 16 : 17;
                              n = 24;
                              G = w;
                            } else {
                              if (k(l, "Kobo")) {
                                n = 18, H = 21, G = 2.2, Y = !0;
                              } else {
                                if (k(l, "EBRD")) {
                                  n = 19, H = 21, G = 2.2;
                                } else {
                                  if (C = v(l, "CrOS x86_64 ") || v(l, "CrOS aarch64 ") || v(l, "CrOS i686 ") || v(l, "CrOS armv7l ")) {
                                    n = 28, w = C;
                                  } else {
                                    if (r.onmoztimechange !== ca) {
                                      n = 29, w = 18.1 > fa ? "1.0.1" : 19 > fa ? 1.1 : 27 > fa ? 1.2 : 29 > fa ? 1.3 : 31 > fa ? 1.4 : 33 > fa ? 2 : 35 > fa ? 2.1 : 38 > fa ? 2.2 : 45 > fa ? 2.5 : 2.6, k(l, "Mobile") ? ba = !0 : k(l, "Tablet") ? U = !0 : k(l, "TV");
                                    } else {
                                      if (r.palmGetResource) {
                                        n = 30, w = v(l, "webOS/") || v(l, "WEBOS") || v(l, "hpwOS/"), k(l, "webOS.TV") || k(l, "/SmartTV") || (ba = !0);
                                      } else {
                                        if (C = v(l, "Tizen ")) {
                                          n = 31, w = C, H = 24, G = Qa, ba = !0;
                                        } else {
                                          if (C = v(l, "Windows Phone ") || v(T, "Windows Phone OS ") || zc) {
                                            n = 23, w = C, ba = !0;
                                          } else {
                                            if (ya && "ARM" === F) {
                                              n = 23, w = 10, ba = !0;
                                            } else {
                                              if (Oa && k(T, "ZuneWP")) {
                                                n = 23, w = 11 === ea ? 8.1 : 10 === ea ? 8 : 9 === ea ? 7.5 : 7 === ea ? 7 : "?", ba = !0;
                                              } else {
                                                if (k(l, "FOMA;")) {
                                                  n = 16, ba = !0;
                                                } else {
                                                  if (k(l, "SoftBank;")) {
                                                    n = 16, ba = !0;
                                                  } else {
                                                    if (k(l, "KFMUWI")) {
                                                      var Q = !0;
                                                      w = 6.3;
                                                      var I = U = !0;
                                                    } else {
                                                      if (k(l, "KFKAWI")) {
                                                        Q = !0, w = 6, I = U = !0;
                                                      } else {
                                                        if (k(l, "KFSUWI") || k(l, "KFAUWI") || k(l, "KFDOWI")) {
                                                          Q = !0, w = 5, I = U = !0;
                                                        } else {
                                                          if (k(l, "KFGIWI")) {
                                                            Q = !0, w = 5, I = U = !0;
                                                          } else {
                                                            if (k(l, "KFARWI") || k(l, "KFSAWA") || k(l, "KFSAWI")) {
                                                              Q = !0, w = 5 <= S(R) ? 5 : 4, I = U = !0;
                                                            } else {
                                                              if (k(l, "KFSOWI") || k(l, "KFTHWA") || k(l, "KFTHWI") || k(l, "KFAPWA") || k(l, "KFAPWI")) {
                                                                Q = !0, w = 3, I = U = !0;
                                                              } else {
                                                                if (k(l, "KFOT") || k(l, "KFTT") || k(l, "KFJWA") || k(l, "KFJWI")) {
                                                                  Q = !0, w = 2, I = U = !0;
                                                                } else {
                                                                  if (k(l, "Kindle Fire")) {
                                                                    Q = !0, w = 1, I = U = !0;
                                                                  } else {
                                                                    if (C = v(l, "Kindle/")) {
                                                                      n = 20, w = C, H = 21, G = 2.2;
                                                                    } else {
                                                                      if (vb) {
                                                                        Q = !0, w = R || Rb, I = !0;
                                                                      } else {
                                                                        if (k(l, "AmazonWebAppPlatform") || k(l, "; AFT")) {
                                                                          Q = !0, w = R, I = !0;
                                                                        } else {
                                                                          if (k(l, "MeeGo")) {
                                                                            n = 32;
                                                                          } else {
                                                                            if (k(l, "Maemo")) {
                                                                              n = 33;
                                                                            } else {
                                                                              if (0 === l.indexOf("Windows Mobile;") || Ob) {
                                                                                n = 22, za = !0;
                                                                              } else {
                                                                                if ("WinCE" === F) {
                                                                                  n = 21, za = !0;
                                                                                } else {
                                                                                  if (0 === F.indexOf("Win")) {
                                                                                    n = "Win16" === F ? 35 : "Win32" === F ? 36 : "Win64" === F ? 37 : 0, w = v(l, "Windows NT ") || v(l, "Windows ");
                                                                                  } else {
                                                                                    if (0 === F.indexOf("Mac")) {
                                                                                      n = "Mac68K" === F ? 39 : "MacPowerPC" === F || "MacPPC" === F ? 38 : "MacIntel" === F ? 40 : 0;
                                                                                      if (C = v(l.split("_").join("."), "Mac OS X ")) {
                                                                                        w = C;
                                                                                      }
                                                                                      var wb = !0;
                                                                                    } else {
                                                                                      if (k(l, "BlackBerry") || k(l, "BB10")) {
                                                                                        n = 34, w = M, ba = !0;
                                                                                      } else {
                                                                                        if (k(l, "SunOS") || k(l, "Sun Solaris")) {
                                                                                          n = 42;
                                                                                        } else {
                                                                                          if (k(l, "FreeBSD")) {
                                                                                            n = 43;
                                                                                          } else {
                                                                                            if (k(l, "OpenBSD")) {
                                                                                              n = 44;
                                                                                            } else {
                                                                                              if (k(l, "NetBSD")) {
                                                                                                n = 45;
                                                                                              } else {
                                                                                                if (Y && Ja) {
                                                                                                  k(l, "Android 4.4;") ? D = {min:2.3} : 4 <= S(R) ? D = R : D = {min:2.2}, w = D;
                                                                                                } else {
                                                                                                  if (Y && la) {
                                                                                                    R ? D = R : D = {min:1.6}, w = D, k(l, "Tablet") ? U = !0 : ba = !0;
                                                                                                  } else {
                                                                                                    if (R) {
                                                                                                      w = R, Y = !0;
                                                                                                    } else {
                                                                                                      if (bb && Ca || Pa || Ra) {
                                                                                                        var Sa = !0;
                                                                                                        Qa ? D = {min:4.4} : ab && !Pb || Kb || Nb ? D = {min:4} : (D = R = Za.touchAction !== ca ? {min:5} : tb ? 4.4 : pa ? t.connection ? r.searchBoxJavaBridge_ || ab ? K.isNaN ? 4.1 : 4 : 4.2 : 4.4 : 534 <= W ? 3 : 533 <= W ? nb ? 2.3 : 2.2 : 530 <= W ? 2 : 1.5, sb && (H = 24, G = sb));
                                                                                                        w = D;
                                                                                                        Y = !0;
                                                                                                      } else {
                                                                                                        Qb ? (w = {min:5}, Sa = Y = !0) : bb && (k(l, "Ubuntu") ? n = 46 : (C = v(l, "Mint/")) ? (n = 47, w = C) : (C = v(l, "Fedora/")) ? (n = 48, w = C) : n = k(l, "Gentoo") ? 49 : 50);
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  Q || Y && Sa && Bc ? n = 27 : Y && (n = n || 26);
  H || (I = I || Y, la ? (H = I || za || ba || U ? 9 : 8, G = xc) : Oa ? (D = Aa(T, "Trident/") + 4, H = za || ba || U || P ? 3 : wb && 5 <= ea ? 7 : 2, G = ea) : ya ? (H = 23 === n ? 6 : 5, G = v(T, "Edge/")) : qb ? (H = 13, G = qb) : Ja ? (H = I ? 12 : 11, G = fa || Mb) : Qa ? (H = 24, G = Qa) : (C = ia || v(l, "NetFront/")) ? (H = 18, G = C) : (C = v(l, "iCab")) ? (H = 19, G = C) : (C = lb(v(l, "Opera Mini/"), v(l, "Opera Mobi/")) || Ia && M) ? (H = 10, G = C, n || (k(l, "iPhone") ? ha = 0 : k(l, 
  "iPad") ? ha = 1 : k(l, "iPod") && (ha = 2), ha && (n = 24))) : ob ? (H = 25, G = yc) : rb ? (H = 14, G = Ga) : Y && Pb ? (H = 21, G = R) : ab || Kb || Nb ? (H = I ? 22 : 20, G = Ka) : Y && tb ? (H = 23, G = 5 > S(R) ? R : Ka) : Y && (M || Sa) ? (H = 21, G = R) : Ka ? (H = I ? 22 : 20, G = Ka) : W && (H = 15, G = W));
  n && (E[2] = n, w && (E[3] = mb(w)));
  H && (E[0] = H, G && (E[1] = mb(G)));
})(ua, window, document, navigator, screen, parseFloat, Number, void 0);
var DEFINE_WHAT_BROWSER_AM_I__MINIFY = !0, DEFINE_WHAT_BROWSER_AM_I__BRAND_ENABLED = !0, DEFINE_WHAT_BROWSER_AM_I__PCSITE_REQUESTED_ENABLED = !0, DEFINE_WHAT_BROWSER_AM_I__IOS_DEVICE_ENABLED = !0, DEFINE_WHAT_BROWSER_AM_I__DEVICE_TYPE_ENABLED = !0, WHAT_BROWSER_AM_I__INDEX_ENGINE = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 0 : "ENGINE", WHAT_BROWSER_AM_I__INDEX_ENGINE_VERSION = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 1 : "ENGINE_VERSION", WHAT_BROWSER_AM_I__INDEX_PLATFORM = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 
2 : "PLATFORM", WHAT_BROWSER_AM_I__INDEX_PLATFORM_VERSION = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 3 : "PLATFORM_VERSION", WHAT_BROWSER_AM_I__INDEX_BRAND = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 4 : "BRAND", WHAT_BROWSER_AM_I__INDEX_BRAND_VERSION = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 5 : "BRAND_VERSION", WHAT_BROWSER_AM_I__INDEX_DEVICE = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 6 : "DEVICE", WHAT_BROWSER_AM_I__INDEX_DEVICE_VERSION = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 7 : "DEVICE_VERSION", WHAT_BROWSER_AM_I__INDEX_DEVICE_TYPE = 
DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 8 : "DEVICE_TYPE", WHAT_BROWSER_AM_I__INDEX_PCSITE_REQUESTED = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 9 : "PCSITE_REQUESTED", WHAT_BROWSER_AM_I__PLATFORM_unknown = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 0 : "", WHAT_BROWSER_AM_I__PLATFORM_NDS = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 1 : "NDS", WHAT_BROWSER_AM_I__PLATFORM_NDSi = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 2 : "NDSi", WHAT_BROWSER_AM_I__PLATFORM_N3DS = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 3 : "N3DS", WHAT_BROWSER_AM_I__PLATFORM_New3DS = 
DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 4 : "New3DS", WHAT_BROWSER_AM_I__PLATFORM_Wii = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 5 : "Wii", WHAT_BROWSER_AM_I__PLATFORM_WiiU = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 6 : "WiiU", WHAT_BROWSER_AM_I__PLATFORM_Switch = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 7 : "Switch", WHAT_BROWSER_AM_I__PLATFORM_PSP = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 8 : "PSP", WHAT_BROWSER_AM_I__PLATFORM_PSPGo = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 9 : "PSPGo", WHAT_BROWSER_AM_I__PLATFORM_PSVita = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 
10 : "PSVita", WHAT_BROWSER_AM_I__PLATFORM_PS3 = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 11 : "PS3", WHAT_BROWSER_AM_I__PLATFORM_PS4 = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 12 : "PS4", WHAT_BROWSER_AM_I__PLATFORM_PS5 = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 13 : "PS5", WHAT_BROWSER_AM_I__PLATFORM_Xbox360 = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 14 : "Xbox360", WHAT_BROWSER_AM_I__PLATFORM_XboxOne = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 15 : "XboxOne", WHAT_BROWSER_AM_I__PLATFORM_FeaturePhone = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 
16 : "FeaturePhone", WHAT_BROWSER_AM_I__PLATFORM_Mylo = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 17 : "Mylo", WHAT_BROWSER_AM_I__PLATFORM_Kobo = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 18 : "Kobo", WHAT_BROWSER_AM_I__PLATFORM_SonyReader = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 19 : "SonyReader", WHAT_BROWSER_AM_I__PLATFORM_Kindle = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 20 : "Kindle", WHAT_BROWSER_AM_I__PLATFORM_WinCE = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 21 : "WindowsCE", WHAT_BROWSER_AM_I__PLATFORM_WindowsMobile = 
DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 22 : "WindowsMobile", WHAT_BROWSER_AM_I__PLATFORM_WindowsPhone = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 23 : "WindowsPhone", WHAT_BROWSER_AM_I__PLATFORM_iOS = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 24 : "iOS", WHAT_BROWSER_AM_I__PLATFORM_iPadOS = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 25 : "iPadOS", WHAT_BROWSER_AM_I__PLATFORM_Android = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 26 : "Android", WHAT_BROWSER_AM_I__PLATFORM_FireOS = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 27 : "FireOS", WHAT_BROWSER_AM_I__PLATFORM_ChromeOS = 
DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 28 : "ChromeOS", WHAT_BROWSER_AM_I__PLATFORM_FirefoxOS = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 29 : "FirefoxOS", WHAT_BROWSER_AM_I__PLATFORM_WebOS = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 30 : "WebOS", WHAT_BROWSER_AM_I__PLATFORM_Tizen = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 31 : "Tizen", WHAT_BROWSER_AM_I__PLATFORM_MeeGo = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 32 : "MeeGo", WHAT_BROWSER_AM_I__PLATFORM_Maemo = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 33 : "Maemo", WHAT_BROWSER_AM_I__PLATFORM_BlackBerry = 
DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 34 : "BlackBerry", WHAT_BROWSER_AM_I__PLATFORM_Win16 = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 35 : "Win16", WHAT_BROWSER_AM_I__PLATFORM_Win32 = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 36 : "Win32", WHAT_BROWSER_AM_I__PLATFORM_Win64 = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 37 : "Win64", WHAT_BROWSER_AM_I__PLATFORM_MacPPC = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 38 : "MacPPC", WHAT_BROWSER_AM_I__PLATFORM_Mac68K = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 39 : "Mac68K", WHAT_BROWSER_AM_I__PLATFORM_MacIntel = 
DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 40 : "MacIntel", WHAT_BROWSER_AM_I__PLATFORM_MacM1 = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 41 : "MacM1", WHAT_BROWSER_AM_I__PLATFORM_SunOS = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 42 : "SunOS", WHAT_BROWSER_AM_I__PLATFORM_FreeBSD = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 43 : "FreeBSD", WHAT_BROWSER_AM_I__PLATFORM_OpenBSD = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 44 : "OpenBSD", WHAT_BROWSER_AM_I__PLATFORM_NetBSD = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 45 : "NetBSD", WHAT_BROWSER_AM_I__PLATFORM_Ubuntu = 
DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 46 : "Ubuntu", WHAT_BROWSER_AM_I__PLATFORM_Mint = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 47 : "Mint", WHAT_BROWSER_AM_I__PLATFORM_Fedora = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 48 : "Fedora", WHAT_BROWSER_AM_I__PLATFORM_Gentoo = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 49 : "Gento", WHAT_BROWSER_AM_I__PLATFORM_Linux = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 50 : "Linux", WHAT_BROWSER_AM_I__ENGINE_unknown = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 0 : "unknown", WHAT_BROWSER_AM_I__ENGINE_Netscape = 
DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 1 : "Netscape", WHAT_BROWSER_AM_I__ENGINE_Trident = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 2 : "Trident", WHAT_BROWSER_AM_I__ENGINE_TridentMobile = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 3 : "TridentMobile", WHAT_BROWSER_AM_I__ENGINE_TridentPocket = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 4 : "TridentPocket", WHAT_BROWSER_AM_I__ENGINE_EdgeHTML = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 5 : "EdgeHTML", WHAT_BROWSER_AM_I__ENGINE_EdgeMobile = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 6 : "EdgeMobile", 
WHAT_BROWSER_AM_I__ENGINE_Tasman = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 7 : "Tasman", WHAT_BROWSER_AM_I__ENGINE_Presto = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 8 : "Presto", WHAT_BROWSER_AM_I__ENGINE_PrestoMobile = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 9 : "PrestoMobile", WHAT_BROWSER_AM_I__ENGINE_OperaMini = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 10 : "OperaMini", WHAT_BROWSER_AM_I__ENGINE_Gecko = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 11 : "Gecko", WHAT_BROWSER_AM_I__ENGINE_Fennec = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 
12 : "Fennec", WHAT_BROWSER_AM_I__ENGINE_Goanna = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 13 : "Goanna", WHAT_BROWSER_AM_I__ENGINE_KHTML = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 14 : "KHTML", WHAT_BROWSER_AM_I__ENGINE_WebKit = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 15 : "WebKit", WHAT_BROWSER_AM_I__ENGINE_SafariMobile = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 16 : "SafariMobile", WHAT_BROWSER_AM_I__ENGINE_iOSWebView = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 17 : "iOSWebView", WHAT_BROWSER_AM_I__ENGINE_NetFront = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 
18 : "NetFront", WHAT_BROWSER_AM_I__ENGINE_iCab = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 19 : "iCab", WHAT_BROWSER_AM_I__ENGINE_Chromium = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 20 : "Chromium", WHAT_BROWSER_AM_I__ENGINE_AOSP = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 21 : "AOSP", WHAT_BROWSER_AM_I__ENGINE_ChromiumMobile = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 22 : "ChromiumMobile", WHAT_BROWSER_AM_I__ENGINE_ChromeWebView = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 23 : "ChromeWebView", WHAT_BROWSER_AM_I__ENGINE_Samsung = 
DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 24 : "Samsung", WHAT_BROWSER_AM_I__ENGINE_UCWEB = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 25 : "UCWEB", WHAT_BROWSER_AM_I__ENGINE_Sony = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 26 : "Sony", WHAT_BROWSER_AM_I__BRAND_unknown = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 0 : "unknown", WHAT_BROWSER_AM_I__BRAND_NetFrontNX = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 1 : "NetFrontNX", WHAT_BROWSER_AM_I__BRAND_Safari = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 2 : "Safari", WHAT_BROWSER_AM_I__BRAND_ModernIE = 
DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 4 : "ModernIE", WHAT_BROWSER_AM_I__BRAND_MacIE = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 5 : "MacIE", WHAT_BROWSER_AM_I__BRAND_Opera = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 6 : "Opera", WHAT_BROWSER_AM_I__BRAND_Edge = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 7 : "Edge", WHAT_BROWSER_AM_I__BRAND_Coast = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 8 : "Coast", WHAT_BROWSER_AM_I__BRAND_OperaTouch = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 9 : "OperaTouch", WHAT_BROWSER_AM_I__BRAND_OperaGX = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 
10 : "OperaGX", WHAT_BROWSER_AM_I__BRAND_Yahoo = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 12 : "Yahoo", WHAT_BROWSER_AM_I__BRAND_UC = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 13 : "UC", WHAT_BROWSER_AM_I__BRAND_Silk = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 14 : "SilK", WHAT_BROWSER_AM_I__BRAND_Vivaldi = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 15 : "Vivaldi", WHAT_BROWSER_AM_I__BRAND_QQ = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 16 : "QQ", WHAT_BROWSER_AM_I__BRAND_Yandex = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 17 : "Yandex", WHAT_BROWSER_AM_I__BRAND_coccoc = 
DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 18 : "coccoc", WHAT_BROWSER_AM_I__BRAND_Camino = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 19 : "Camino", WHAT_BROWSER_AM_I__BRAND_Sogou = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 20 : "Sogou", WHAT_BROWSER_AM_I__BRAND_Focus = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 21 : "Focus", WHAT_BROWSER_AM_I__BRAND_AOL = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 22 : "AOL", WHAT_BROWSER_AM_I__BRAND_IceDragon = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 23 : "IceDragon", WHAT_BROWSER_AM_I__BRAND_Iceweasel = 
DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 24 : "Iceweasel", WHAT_BROWSER_AM_I__BRAND_ITenFourFox = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 25 : "ITenFourFox", WHAT_BROWSER_AM_I__BRAND_Waterfox = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 26 : "Waterfox", WHAT_BROWSER_AM_I__BRAND_GNUzilla = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 27 : "GNUzilla", WHAT_BROWSER_AM_I__BRAND_SeaMonkey = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 28 : "SeaMonkey", WHAT_BROWSER_AM_I__BRAND_PaleMoon = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 29 : "PaleMoon", 
WHAT_BROWSER_AM_I__BRAND_Basilisk = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 30 : "Basilisk", WHAT_BROWSER_AM_I__BRAND_Maxthon = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 31 : "Maxthon", WHAT_BROWSER_AM_I__BRAND_Avant = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 32 : "Avant", WHAT_BROWSER_AM_I__BRAND_Lunascape = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 33 : "Lunascape", WHAT_BROWSER_AM_I__BRAND_Konqueror = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 34 : "Konqueror", WHAT_BROWSER_AM_I__BRAND_Midori = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 
35 : "Midori", WHAT_BROWSER_AM_I__BRAND_OmniWeb = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 36 : "OmniWeb", WHAT_BROWSER_AM_I__BRAND_Roccat = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 37 : "Roccat", WHAT_BROWSER_AM_I__BRAND_Epiphany = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 38 : "Epiphany", WHAT_BROWSER_AM_I__BRAND_WebPositive = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 39 : "WebPositive", WHAT_BROWSER_AM_I__BRAND_Iron = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 40 : "Iron", WHAT_BROWSER_AM_I__BRAND_ComodoDragon = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 
41 : "ComodoDragon", WHAT_BROWSER_AM_I__BRAND_Brave = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 42 : "Brave", WHAT_BROWSER_AM_I__BRAND_Rockmelt = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 43 : "Rockmelt", WHAT_BROWSER_AM_I__BRAND_Sleipnir = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 44 : "Sleipnir", WHAT_BROWSER_AM_I__BRAND_Puffin = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 45 : "Puffin", WHAT_BROWSER_AM_I__BRAND_Dooble = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 46 : "Dooble", WHAT_BROWSER_AM_I__BRAND_Flock = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 
47 : "Flock", WHAT_BROWSER_AM_I__BRAND_Galeon = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 48 : "Galeon", WHAT_BROWSER_AM_I__BRAND_Falkon = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 49 : "Falkon", WHAT_BROWSER_AM_I__BRAND_Iceape = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 50 : "Iceape", WHAT_BROWSER_AM_I__BRAND_KMeleon = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 51 : "KMeleon", WHAT_BROWSER_AM_I__BRAND_NetscapeNavigator = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 52 : "NetscapeNavigator", WHAT_BROWSER_AM_I__BRAND_Iris = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 
53 : "Iris", WHAT_BROWSER_AM_I__BRAND_LINE = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 54 : "LINE", WHAT_BROWSER_AM_I__BRAND_Facebook = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 55 : "Facebook", WHAT_BROWSER_AM_I__BRAND_QtWebEngine = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 56 : "QtWebEngine", WHAT_BROWSER_AM_I__BRAND_QtWebKit = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 57 : "QtWebKit", WHAT_BROWSER_AM_I__BRAND_DuckDuckGo = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 58 : "DuckDuckGo", WHAT_BROWSER_AM_I__BRAND_Firefox = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 
59 : "Firefox", WHAT_BROWSER_AM_I__BRAND_Chrome = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 60 : "Chrome", WHAT_BROWSER_AM_I__BRAND_IE = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 61 : "IE", WHAT_BROWSER_AM_I__BRAND_SamsungInternet = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 62 : "SamsungInternet", WHAT_BROWSER_AM_I__BRAND_Dolphin = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 63 : "Dolphin", WHAT_BROWSER_AM_I__BRAND_OperaTurbo = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 63 : "OperaTurbo", WHAT_BROWSER_AM_I__BRAND_AndroidBrowser = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 
64 : "AndroidBrowser", WHAT_BROWSER_AM_I__DEVICE_TYPE_UNKNOWN = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 0 : "UNKNOWN", WHAT_BROWSER_AM_I__DEVICE_TYPE_PC = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 1 : "PC", WHAT_BROWSER_AM_I__DEVICE_TYPE_PHONE = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 2 : "PHONE", WHAT_BROWSER_AM_I__DEVICE_TYPE_TABLET = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 3 : "TABLET", WHAT_BROWSER_AM_I__DEVICE_TYPE_EBOOK_READER = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 4 : "EBOOK_READER", WHAT_BROWSER_AM_I__DEVICE_TYPE_MEDIA_PLAYER = 
DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 5 : "MEDIA_PLAYER", WHAT_BROWSER_AM_I__DEVICE_TYPE_TV = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 6 : "TV", WHAT_BROWSER_AM_I__DEVICE_TYPE_GAME = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 7 : "GAME", WHAT_BROWSER_AM_I__DEVICE_TYPE_PDA = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 8 : "PDA", WHAT_BROWSER_AM_I__DEVICE_iPhone = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 0 : "iPhone", WHAT_BROWSER_AM_I__DEVICE_iPad = DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 1 : "iPad", WHAT_BROWSER_AM_I__DEVICE_iPod = 
DEFINE_WHAT_BROWSER_AM_I__MINIFY ? 2 : "iPod", DEFINE_WEB_DOC_BASE__DEBUG = 1, DEFINE_WEB_DOC_BASE__LOGGER_ELEMENT_ID = "logger", DEFINE_WEB_DOC_BASE__WEBFONT_DEBUG_MODE = 0, DEFINE_WEB_DOC_BASE__CSS_GENERATED_CONTENT_TEST_ID = "jsCanUseContent", DEFINE_WEB_DOC_BASE__MAIN_COLUMN_ID = "jsMain", DEFINE_WEB_DOC_BASE__SIDE_COLUMN_ID = "jsSide", DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_JS_DIR = "js", DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_CSS_DIR = "css", DEFINE_WEB_DOC_BASE__DESKTOP_PAGE_CSS_DIR = "pc", DEFINE_WEB_DOC_BASE__MOBILE_PAGE_CSS_DIR = 
"mb", DEFINE_WEB_DOC_BASE__FORCED_COLORS_CSS_DIR = "hc", DEFINE_WEB_DOC_BASE__CLASSNAME_BLOCKQUOT_LINK = "js-bqLink", DEFINE_WEB_DOC_BASE__CLASSNAME_BLOCKQUOT_CITE = "js-bqCite", DEFINE_WEB_DOC_BASE__AMAZON_ID = "", DEFINE_WEB_DOC_BASE__BLOG_2_SLIDE_START_ID = "blog2slide-start", DEFINE_WEB_DOC_BASE__BLOG_2_SLIDE_ROOT_ID = "blog2slide-root", DEFINE_WEB_DOC_BASE__BLOG_2_SLIDE_CURRENT_ID = "blog2slide-current", DEFINE_WEB_DOC_BASE__USE_CSS_LOADER_OF_INLINE_JS = !0, DEFINE_WEB_DOC_BASE__CLASSNAME_IMG_LOADED = 
"img-loaded", DEFINE_WEB_DOC_BASE__CLASSNAME_ABODY_ROOT = "aBodyRoot", DEFINE_WEB_DOC_BASE__CLASSNAME_PICA_THMBNAIL_TARGET = "jsPica", DEFINE_WEB_DOC_BASE__CLASSNAME_PICA_THMBNAIL_LARGE = "jsPicaLarge", DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ = "caption", DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ_TARGET = "jsCap", DEFINE_WEB_DOC_BASE__CLASSNAME_CAPTIONED_OBJ_LARGE = "jsCapLarge", DEFINE_WEB_DOC_BASE__SIDEBARFIXER_WRAPPER_ID = "jsSidebarFixer", DEFINE_WEB_DOC_BASE__SIDEBARFIXER_1ST_WHEEL_ELM_ID = 
"jsSidebarFixer1", DEFINE_WEB_DOC_BASE__SIDEBARFIXER_2ND_WHEEL_ELM_ID = "jsSidebarFixer2", Debug = {};
DEFINE_WEB_DOC_BASE__DEBUG || (Debug.log = function() {
});
Array.prototype.pop || (Array.prototype.pop = function() {
  var E = this[this.length - 1];
  --this.length;
  return E;
});
Array.prototype.push || (Array.prototype.push = function() {
  for (var E = arguments, r = 0, B = E.length, t = this.length; r < B; ++r) {
    this[t + r] = E[r];
  }
  return this.length;
});
Array.prototype.shift || (Array.prototype.shift = function() {
  for (var E = this[0], r = 1, B = this.length; r < B; ++r) {
    this[r - 1] = this[r];
  }
  --this.length;
  return E;
});
Array.prototype.unshift || (Array.prototype.unshift = function() {
  for (var E = arguments, r = E.length, B = this.length += r - 1, t = B; t >= r; --t) {
    this[t] = this[t - r];
  }
  for (t = 0; t < r; ++t) {
    this[t] = E[t];
  }
  return B;
});
Array.prototype.splice || (Array.prototype.splice = function(E, r) {
  var B = arguments, t = B.length - 2 - r, aa = this.slice(E, E + r), S;
  if (0 < t) {
    var K = this.length - 1;
    for (S = E + r; K >= S; --K) {
      this[K + t] = this[K];
    }
  } else {
    if (0 > t) {
      K = E + r;
      for (S = this.length; K < S; ++K) {
        this[K + t] = this[K];
      }
      this.length += t;
    }
  }
  K = 2;
  for (S = B.length; K < S; ++K) {
    this[K - 2 + E] = B[K];
  }
  return aa;
});
Array.prototype.indexOf || (Array.prototype.indexOf = function(E, r) {
  var B = this.length >>> 0;
  if (0 === B) {
    return -1;
  }
  if (r) {
    var t = r || 0;
    t = -Infinity === t ? 0 : (0 > t ? -t : t) | 0;
    if (B <= t) {
      return -1;
    }
  }
  for (t = 0 <= t ? t : 0 < B + t ? B + t : 0; t < B; ++t) {
    if (this[t] === E) {
      return t;
    }
  }
  return -1;
});
var DEFINE_REGEXP_COMPAT__DEBUG = !1, DEFINE_REGEXP_COMPAT__MINIFY = !0, DEFINE_REGEXP_COMPAT__NODEJS = !1, DEFINE_REGEXP_COMPAT__ES2015 = !0, DEFINE_REGEXP_COMPAT__ES2018 = !1, DEFINE_REGEXP_COMPAT__EXPORT_BY_RETURN = !1, DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT = -1, DEFINE_CODE_PRETTIFY__EXPORT_PR_OBJECT = !0, DEFINE_CODE_PRETTIFY__DEBUG = !0, DEFINE_CODE_PRETTIFY__USE_CONTINUATION = 1, DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT = !0, DEFINE_CODE_PRETTIFY__NUMBER_LINE_SUPPORT = !0, DEFINE_CODE_PRETTIFY__USE_STATIC_LEXER = 
!0, DEFINE_CODE_PRETTIFY__NUMERIC_STYLE_PATTERN_OBJECT_KEY = "-num", PR;
if (DEFINE_CODE_PRETTIFY__EXPORT_PR_OBJECT || DEFINE_CODE_PRETTIFY__DEBUG) {
  PR = {};
}
(function(E, r, B, t, aa, S, K, ca, Aa, k) {
  function L(a) {
    if (E[WHAT_BROWSER_AM_I__INDEX_ENGINE] === a) {
      return xb === xb + "" ? aa(xb) : xb;
    }
  }
  function da(a) {
    var b = E[WHAT_BROWSER_AM_I__INDEX_PLATFORM_VERSION];
    if (E[WHAT_BROWSER_AM_I__INDEX_PLATFORM] === a) {
      return b === b + "" ? aa(b) : b;
    }
  }
  function v() {
    cb && (cb = clearInterval(cb));
  }
  function lb() {
    Ta && (Ta = Aa(Ta));
  }
  function mb(a, b, c) {
    var d = ["<", a], e = 1, f, g;
    if (b) {
      for (f in b) {
        var h = b[f];
        if (null != h && "" !== h) {
          if ("style" === f) {
            d[++e] = ' style="';
            for (g in h) {
              for (var q = ++e, m, p = [], u = g.split(""), z = u.length; z;) {
                m = u[--z], "A" <= m && "Z" >= m && (m = "-" + m.toLowerCase()), p[z] = m;
              }
              m = p.join("");
              d[q] = m + ":" + h[g] + ";";
            }
            d[++e] = '"';
          } else {
            "className" === f && (f = "class"), d[++e] = " " + f + '="' + h + '"';
          }
        }
      }
    }
    d[++e] = ">";
    null != c && (Da && "font" !== a ? d[++e] = "<FONT>" + c + "</FONT>" : d[++e] = c);
    d[++e] = "</" + a + ">";
    return d.join("");
  }
  function Ba(a, b) {
    var c = "*" === b && 6 > ma ? "*" !== b ? a.all.tags(b.toUpperCase()) : a.all : a.getElementsByTagName(b), d = [], e = 0, f;
    for (f = c.length; e < f; ++e) {
      d[e] = c[e];
    }
    return d;
  }
  function l(a) {
    return Da ? a.parentElement : a.parentNode;
  }
  function T(a, b, c, d, e, f) {
    if (Da) {
      var g = 0 === a ? "beforebegin" : 1 === a ? "afterend" : "beforeend";
      var h = rd(2 > a ? yb(b) : b);
      h = 2 > a ? h.indexOf(b) + a : h.length;
      b.insertAdjacentHTML(g, mb(c, d, e));
      return rd(b)[h];
    }
    b = sd ? t.createElement(mb(c, d)) : f ? t.createElementNS("http://www.w3.org/2000/svg", c) : t.createElement(c);
    if (d && !sd) {
      for (g in d) {
        if ((c = d[g]) || 0 === c) {
          switch(g) {
            case "class":
            case "className":
              td(b, c);
              break;
            case "style":
              a = b.style;
              for (h in c) {
                a[h] = c[h];
              }
              break;
            default:
              ud(b, g, c);
          }
        }
      }
    }
    Cc || null != e && Ga(b, e);
    return b;
  }
  function Ga(a, b) {
    if (Da) {
      return T(2, a, "font", k, b);
    }
    var c = t.createTextNode("" + b);
    a.appendChild(c);
    return c;
  }
  function F(a, b) {
    9 > ma ? a.className = b : a.setAttribute("class", b);
  }
  function ya(a, b) {
    return -1 !== (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function Za(a, b, c) {
    for (var d = 0; d < a.length; ++d) {
      !0 === a[d](b) && (a.splice(d, 1), --d);
    }
    c && (a.length = 0);
  }
  function ea() {
    var a = zb, b;
    for (zb = []; b = a.shift();) {
      Za(b, a.shift(), a.shift());
    }
  }
  function Ha(a) {
    var b = a || event;
    a = Ab[b.type];
    var c = -1, d, e;
    ma ? (b.preventDefault = function() {
      b.returnValue = !1;
    }, b.stopPropagation = function() {
      b.cancelBubble = !0;
    }) : Sb && (b._stopPropagation = b.stopPropagation, b.stopPropagation = function() {
      e = !0;
    });
    for (; d = a[++c];) {
      d.eventTarget === this ? (this.__handleEvent__ = d.callback, this.__handleEvent__(b), this.__handleEvent__ = Tb, this.__handleEvent__ = k) : 7.2 > Ub && this === t && d.eventTarget === r && (r.__handleEvent__ = d.callback, r.__handleEvent__(b), delete r.__handleEvent__);
    }
    if (ma) {
      return b.preventDefault = b.stopPropagation = k, b.returnValue;
    }
    Sb && (b.defaultPrevented && "click" === b.type && "A" === b.target.tagName && (Vb = !0), e && !Vb && b._stopPropagation(), b._stopPropagation = b.stopPropagation = k);
  }
  function nb() {
    var a = 9 === vd.offsetWidth;
    if (Dc !== a) {
      var b = wd;
      a = Dc = a;
      xd && !zb.length && Ua(ea);
      zb.push(b, a, void 0);
      Debug.log("p_cssAvailability:" + Dc);
    }
  }
  function $a(a) {
    if (DEFINE_REGEXP_COMPAT__DEBUG && (!K(a) || 0 > a || 1114111 < a || Wb(a) != a)) {
      throw RangeError("Invalid code point: " + a);
    }
    if (65535 >= a) {
      a = Va(a);
    } else {
      a -= 65536;
      var b = a % 1024 + 56320;
      a = Va((a >> 10) + 55296) + Va(b);
    }
    return a;
  }
  function pa(a, b) {
    var c = a.length;
    if (0 > b || b >= c) {
      return k;
    }
    var d = a.charCodeAt(b);
    return 55296 <= d && 56319 >= d && c > b + 1 && (c = a.charCodeAt(b + 1), 56320 <= c && 57343 >= c) ? 1024 * (d - 55296) + c - 56320 + 65536 : d;
  }
  function Ca(a, b) {
    return b <= a.length ? a : ("0000" + a).substr(4 - b + a.length);
  }
  function M(a, b, c) {
    return a.substr(c, b.length) === b;
  }
  function Ia(a) {
    for (var b = a.length, c = []; b;) {
      c[--b] = a[b];
    }
    return c;
  }
  function la(a, b) {
    for (var c = a.length, d = []; c;) {
      d[--c] = b(a[c], c);
    }
    return d;
  }
  function xc(a, b) {
    for (var c = (a.length >>> 0) - 1, d = a[c--]; 0 <= c; --c) {
      d = b(d, a[c]);
    }
    return d;
  }
  function Kb(a, b) {
    var c = b || a + 1;
    var d = a;
    for (var e = -1, f = this.length / 2; 1 < f - e;) {
      var g = e + Wb((f - e) / 2);
      d <= this[2 * g + 1] ? f = g : e = g;
    }
    d = f;
    e = R(this, c);
    e = this.splice(2 * d, 2 * (e - d + 1));
    0 < e.length && (a = Math.min(a, e[0]), c = Math.max(c, e[e.length - 1]));
    this.splice(2 * d, 0, a, c);
  }
  function Oa(a) {
    for (var b, c, d = -1, e = a.length - 1; d < e;) {
      b = a[++d], c = a[++d], this.add(b, c);
    }
  }
  function ab() {
    if (0 === this.length) {
      return this.push(0, 1114112), this;
    }
    if (0 === this[0] && 1114112 === this[this.length - 1]) {
      return this.shift(), this.pop(), this;
    }
    this.unshift(0);
    this.push(1114112);
    return this;
  }
  function Ja() {
    return sa(Ia(this));
  }
  function ob(a) {
    var b = R(this, a);
    if (0 > b || this.length <= 2 * b) {
      return !1;
    }
    var c = this[2 * b + 1];
    return this[2 * b] <= a && a < c;
  }
  function yc(a) {
    a = a ? "[^" : "[";
    for (var b = -1, c = this.length - 1; b < c;) {
      var d = this[++b], e = this[++b];
      a += Ec(d, !0);
      d !== e - 1 && (a += "-" + Ec(e - 1, !0));
    }
    return a + "]";
  }
  function zc() {
    return "CharSet" + this.toRegExpPattern();
  }
  function pb(a, b) {
    return b.stylize("CharSet", "special") + " " + b.stylize(this.toRegExpPattern(), "regexp");
  }
  function R(a, b) {
    for (var c = -1, d = a.length / 2; 1 < d - c;) {
      var e = c + Wb((d - c) / 2);
      a[2 * e] <= b ? c = e : d = e;
    }
    return c;
  }
  function Pa(a) {
    var b = fe[a] || a;
    a = "Script." + b;
    var c = Ea[a];
    if (c) {
      return c;
    }
    if (b = ge[b]) {
      return b = sa(b), Ea[a] = b;
    }
  }
  function Y(a) {
    switch(a) {
      case "\n":
        return "\\n";
      case "\r":
        return "\\r";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
    }
    return a;
  }
  function bb(a) {
    switch(a.type) {
      case N:
        return Y(a.raw);
      case Fc:
        return Y(a.children[0].raw) + "-" + Y(a.children[1].raw);
      case wa:
        switch(a.kind) {
          case Gc:
            return a.invert ? "\\D" : "\\d";
          case Hc:
            return a.invert ? "\\W" : "\\w";
          case Ic:
            return a.invert ? "\\S" : "\\s";
          case Jc:
            if (DEFINE_REGEXP_COMPAT__ES2018) {
              return "\\" + (a.invert ? "P" : "p") + a.property;
            }
          case Kc:
            if (DEFINE_REGEXP_COMPAT__ES2018) {
              return "\\" + (a.invert ? "P" : "p") + a.property + "=" + a.value;
            }
        }
    }
  }
  function Lb(a) {
    if (DEFINE_REGEXP_COMPAT__MINIFY) {
      return db <= a.type && a.type <= (DEFINE_REGEXP_COMPAT__ES2018 ? eb : Wa);
    }
    switch(a.type) {
      case db:
      case Xb:
      case Yb:
      case Wa:
        return !0;
      case eb:
        if (DEFINE_REGEXP_COMPAT__ES2018) {
          return !0;
        }
    }
    return !1;
  }
  function qb(a) {
    return "|" === a || ")" === a || "" === a;
  }
  function fa(a) {
    return "0" <= a && "9" >= a;
  }
  function Mb(a) {
    return fa(a) || "a" <= a && "f" >= a || "A" <= a && "F" >= a;
  }
  function C(a) {
    return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a;
  }
  function Ac(a) {
    return C(a) || fa(a);
  }
  function W(a) {
    for (var b = a.pos, c = [Ka(a)]; "|" === n(a);) {
      ++a.pos, c.push(Ka(a));
    }
    return 1 === c.length ? c[0] : {type:Lc, children:c, range:[b, a.pos]};
  }
  function Ka(a) {
    for (var b = a.pos, c = []; !qb(n(a));) {
      c.push(Nb(a));
    }
    return 1 === c.length ? c[0] : {type:Mc, children:c, range:[b, a.pos]};
  }
  function Nb(a) {
    var b = a.pos, c = Bc(a);
    if (Lb(c) && (!a.additional || DEFINE_REGEXP_COMPAT__ES2018 && a.unicode || c.type !== Wa)) {
      return c;
    }
    switch(n(a)) {
      case "*":
        return rb(a, Nc, b, c);
      case "+":
        return rb(a, Oc, b, c);
      case "?":
        return rb(a, Pc, b, c);
      case "{":
        a: {
          var d = a.pos, e = Ob(a);
          if (!e) {
            if (a.additional && (!DEFINE_REGEXP_COMPAT__ES2018 || !a.unicode)) {
              a.pos = d;
              a = c;
              break a;
            }
            if (DEFINE_REGEXP_COMPAT__DEBUG) {
              throw new y("incomplete quantifier");
            }
          }
          d = e.min;
          e = e.max;
          if (d > (null !== e ? e : d) && DEFINE_REGEXP_COMPAT__DEBUG) {
            throw new y("numbers out of order in quantifier");
          }
          var f = !1;
          "?" === n(a) && (++a.pos, f = !0);
          a = {type:Qc, min:d, max:e, nonGreedy:f, child:c, range:[b, a.pos]};
        }
        return a;
    }
    return c;
  }
  function rb(a, b, c, d) {
    ++a.pos;
    var e = !1;
    "?" === n(a) && (++a.pos, e = !0);
    return {type:b, nonGreedy:e, child:d, range:[c, a.pos]};
  }
  function Ob(a) {
    var b = a.pos;
    ++a.pos;
    var c = vb(a);
    if (0 > c) {
      a.pos = b;
    } else {
      var d = null;
      if ("," === n(a)) {
        if (++a.pos, "}" === n(a)) {
          d = Infinity;
        } else {
          if (d = vb(a), 0 > d) {
            a.pos = b;
            return;
          }
        }
      }
      if ("}" !== n(a)) {
        a.pos = b;
      } else {
        return ++a.pos, {min:c, max:d};
      }
    }
  }
  function Bc(a) {
    var b = a.pos, c = n(a);
    switch(c) {
      case ".":
        return ++a.pos, {type:Rc, range:[b, a.pos]};
      case "^":
        return ++a.pos, {type:Xb, range:[b, a.pos]};
      case "$":
        return ++a.pos, {type:Yb, range:[b, a.pos]};
      case "[":
        b = a.pos;
        ++a.pos;
        c = !1;
        "^" === n(a) && (++a.pos, c = !0);
        for (var d = []; "]" !== n(a);) {
          d.push(Qa(a));
        }
        ++a.pos;
        return {type:Sc, invert:c, children:d, range:[b, a.pos]};
      case "\\":
        return Pb(a);
      case "(":
        return tb(a);
      case "*":
      case "+":
      case "?":
        if (DEFINE_REGEXP_COMPAT__DEBUG) {
          throw new y("nothing to repeat");
        }
      case "{":
        if (a.additional && (!DEFINE_REGEXP_COMPAT__ES2018 || !a.unicode)) {
          if (DEFINE_REGEXP_COMPAT__DEBUG && Ob(a)) {
            throw new y("nothing to repeat");
          }
          break;
        }
        if (DEFINE_REGEXP_COMPAT__DEBUG) {
          throw new y("lone quantifier brackets");
        }
      case "}":
        if (a.additional && (!DEFINE_REGEXP_COMPAT__ES2018 || !a.unicode)) {
          break;
        }
        if (DEFINE_REGEXP_COMPAT__DEBUG) {
          throw new y("lone quantifier brackets");
        }
      case "]":
        if (a.additional && (!DEFINE_REGEXP_COMPAT__ES2018 || !a.unicode)) {
          break;
        }
        if (DEFINE_REGEXP_COMPAT__DEBUG) {
          throw new y("lone character class brackets");
        }
      case ")":
      case "|":
      case "":
        if (DEFINE_REGEXP_COMPAT__DEBUG) {
          throw Error("BUG: invalid character");
        }
    }
    a.pos += c.length;
    d = pa(c, 0);
    if (d === k && DEFINE_REGEXP_COMPAT__DEBUG) {
      throw Error("BUG: invalid character");
    }
    return {type:N, value:d, raw:c, range:[b, a.pos]};
  }
  function Qa(a) {
    var b = a.pos, c = sb(a);
    if ("-" !== n(a) || M(a.source, "-]", a.pos)) {
      return c;
    }
    if (c.type === wa) {
      if (a.additional && (!DEFINE_REGEXP_COMPAT__ES2018 || !a.unicode)) {
        return c;
      }
      if (DEFINE_REGEXP_COMPAT__DEBUG) {
        throw new y("invalid character class");
      }
    }
    var d = a.pos;
    ++a.pos;
    var e = sb(a);
    if (e.type === wa) {
      if (a.additional && (!DEFINE_REGEXP_COMPAT__ES2018 || !a.unicode)) {
        return a.pos = d, c;
      }
      if (DEFINE_REGEXP_COMPAT__DEBUG) {
        throw new y("invalid character class");
      }
    }
    if (c.value > e.value && DEFINE_REGEXP_COMPAT__DEBUG) {
      throw new y("range out of order in character class");
    }
    return {type:Fc, children:[c, e], range:[b, a.pos]};
  }
  function sb(a) {
    var b = a.pos, c = n(a);
    if ("" === c && DEFINE_REGEXP_COMPAT__DEBUG) {
      throw new y("unterminated character class");
    }
    if ("\\" !== c) {
      a.pos += c.length;
      var d = pa(c, 0);
      if (d === k && DEFINE_REGEXP_COMPAT__DEBUG) {
        throw Error("BUG: invalid character");
      }
      return {type:N, value:d, raw:c, range:[b, a.pos]};
    }
    if (M(a.source, "\\-", a.pos)) {
      return a.pos += 2, {type:N, value:45, raw:"\\-", range:[b, a.pos]};
    }
    if (M(a.source, "\\b", a.pos)) {
      return a.pos += 2, {type:N, value:8, raw:"\\b", range:[b, a.pos]};
    }
    if (b = ra(a)) {
      return b;
    }
    if (a = Ra(a)) {
      return a;
    }
    if (DEFINE_REGEXP_COMPAT__DEBUG) {
      throw new y("invalid escape");
    }
  }
  function Pb(a) {
    var b = a.pos;
    M(a.source, "\\b", a.pos) ? (a.pos += 2, b = {type:db, invert:!1, range:[b, a.pos]}) : M(a.source, "\\B", a.pos) ? (a.pos += 2, b = {type:db, invert:!0, range:[b, a.pos]}) : b = void 0;
    if (b) {
      return b;
    }
    a: if (b = a.pos, ++a.pos, DEFINE_REGEXP_COMPAT__ES2018 && 0 < a.names._size && "k" === n(a)) {
      ++a.pos;
      if (DEFINE_REGEXP_COMPAT__DEBUG && "<" !== n(a)) {
        throw new y("invalid named back reference");
      }
      var c = ++a.pos, d = ub(a);
      b = {type:Tc, name:d, raw:a.source.slice(c, a.pos - 1), range:[b, a.pos]};
    } else {
      if ("0" !== n(a) && (c = vb(a), 1 <= c)) {
        if (!a.additional || DEFINE_REGEXP_COMPAT__ES2018 && a.unicode) {
          b = {type:Zb, index:c, range:[b, a.pos]};
          break a;
        } else {
          if (c <= a.captureParens) {
            b = {type:Zb, index:c, range:[b, a.pos]};
            break a;
          }
        }
      }
      a.pos = b;
      b = void 0;
    }
    if (b) {
      return b;
    }
    if (b = ra(a)) {
      return b;
    }
    if (a = Ra(a)) {
      return a;
    }
    if (DEFINE_REGEXP_COMPAT__DEBUG) {
      throw new y("invalid escape");
    }
  }
  function Ra(a) {
    var b = a.pos;
    var c = qa(a, !0);
    if ("" !== c) {
      c = pa(c, 0);
      if (c === k && DEFINE_REGEXP_COMPAT__DEBUG) {
        throw Error("BUG: invalid character");
      }
      return {type:N, value:c, raw:a.source.slice(b, a.pos), range:[b, a.pos]};
    }
    ++a.pos;
    switch(n(a)) {
      case "t":
        return ++a.pos, {type:N, value:9, raw:"\\t", range:[b, a.pos]};
      case "n":
        return ++a.pos, {type:N, value:10, raw:"\\n", range:[b, a.pos]};
      case "v":
        return ++a.pos, {type:N, value:11, raw:"\\v", range:[b, a.pos]};
      case "f":
        return ++a.pos, {type:N, value:12, raw:"\\f", range:[b, a.pos]};
      case "r":
        return ++a.pos, {type:N, value:13, raw:"\\r", range:[b, a.pos]};
      case "c":
        ++a.pos;
        var d = n(a);
        c = 0;
        if ("a" <= d && "z" >= d || "A" <= d && "Z" >= d) {
          ++a.pos, c = d.charCodeAt(0) % 32;
        } else {
          if (a.additional && (!DEFINE_REGEXP_COMPAT__ES2018 || !a.unicode)) {
            --a.pos;
            break;
          }
          if (DEFINE_REGEXP_COMPAT__DEBUG) {
            throw new y("invalid control escape");
          }
        }
        return {type:N, value:c, raw:a.source.slice(b, a.pos), range:[b, a.pos]};
      case "x":
        ++a.pos;
        c = Rb(a, 2);
        if (0 > c) {
          --a.pos;
          break;
        }
        return {type:N, value:c, raw:a.source.slice(b, a.pos), range:[b, a.pos]};
      case "0":
        ++a.pos;
        if (fa(n(a))) {
          --a.pos;
          break;
        }
        return {type:N, value:0, raw:"\\0", range:[b, a.pos]};
      case "":
        if (DEFINE_REGEXP_COMPAT__DEBUG) {
          throw new y("\\ at end of pattern");
        }
    }
    if (a.additional && (!DEFINE_REGEXP_COMPAT__ES2018 || !a.unicode) && (c = a.pos, d = n(a), "0" <= d && "3" >= d ? (++a.pos, d = n(a), "0" <= d && "7" >= d && (++a.pos, d = n(a), "0" <= d && "7" >= d && ++a.pos)) : "4" <= d && "7" >= d && (++a.pos, d = n(a), "0" <= d && "7" >= d && ++a.pos), c !== a.pos)) {
      return c = parseInt(a.source.slice(c, a.pos), 8), {type:N, value:c, raw:a.source.slice(b, a.pos), range:[b, a.pos]};
    }
    d = n(a);
    c = pa(d, 0);
    if (c === k && DEFINE_REGEXP_COMPAT__DEBUG) {
      throw Error("BUG: invalid character");
    }
    if (DEFINE_REGEXP_COMPAT__ES2018 && a.unicode) {
      if ("" !== d && -1 !== "^$\\.*+?()[]{}|".indexOf(d) || "/" === d) {
        return a.pos += d.length, {type:N, value:c, raw:"\\" + d, range:[b, a.pos]};
      }
    } else {
      if (a.additional) {
        if ("c" === d) {
          return {type:N, value:92, raw:"\\", range:[b, a.pos]};
        }
        if (DEFINE_REGEXP_COMPAT__ES2018 && 0 === a.names._size || "k" !== d) {
          return a.pos += d.length, {type:N, value:c, raw:"\\" + d, range:[b, a.pos]};
        }
      } else {
        if (!yd.has(c)) {
          return a.pos += d.length, {type:N, value:c, raw:"\\" + d, range:[b, a.pos]};
        }
      }
    }
    a.pos = b;
  }
  function qa(a, b) {
    var c = a.pos, d;
    ++a.pos;
    if ("u" !== n(a)) {
      return a.pos = c, "";
    }
    ++a.pos;
    if (DEFINE_REGEXP_COMPAT__ES2018 && a.unicode && "{" === n(a)) {
      if (!b) {
        return a.pos = c, "";
      }
      ++a.pos;
      for (c = ""; Mb(d = n(a));) {
        c += d, a.pos += d.length;
      }
      d = "" === c ? -1 : parseInt(c, 16);
      if (DEFINE_REGEXP_COMPAT__DEBUG && (0 > d || 1114112 <= d || "}" !== n(a))) {
        throw new y("invalid Unicode escape");
      }
      ++a.pos;
      return $a(d);
    }
    d = Rb(a, 4);
    if (0 > d) {
      if (a.additional && (!DEFINE_REGEXP_COMPAT__ES2018 || !a.unicode)) {
        return a.pos = c, "";
      }
      if (DEFINE_REGEXP_COMPAT__DEBUG) {
        throw new y("invalid Unicode escape");
      }
    }
    c = Va(d);
    if (!DEFINE_REGEXP_COMPAT__ES2018 || !a.unicode) {
      return c;
    }
    if (b && "\ud800" <= c && "\udbff" >= c && "\\" === n(a)) {
      d = a.pos;
      var e = qa(a, !1);
      if ("\udc00" <= e && "\udfff" >= e) {
        return c + e;
      }
      a.pos = d;
    }
    return c;
  }
  function ra(a) {
    var b = a.pos;
    ++a.pos;
    var c = n(a);
    switch(c) {
      case "d":
      case "D":
        return ++a.pos, {type:wa, kind:Gc, invert:"D" === c, range:[b, a.pos]};
      case "w":
      case "W":
        return ++a.pos, {type:wa, kind:Hc, invert:"W" === c, range:[b, a.pos]};
      case "s":
      case "S":
        return ++a.pos, {type:wa, kind:Ic, invert:"S" === c, range:[b, a.pos]};
      case "p":
      case "P":
        if (DEFINE_REGEXP_COMPAT__ES2018 && a.unicode) {
          c = "P" === c;
          ++a.pos;
          if (DEFINE_REGEXP_COMPAT__DEBUG && "{" !== n(a)) {
            throw new y("invalid Unicode property escape");
          }
          ++a.pos;
          var d = "";
          for (var e; C(e = n(a));) {
            d += e, a.pos += e.length;
          }
          if ("" === d && DEFINE_REGEXP_COMPAT__DEBUG) {
            throw new y("invalid Unicode property name");
          }
          if ("}" === n(a)) {
            return ++a.pos, {type:wa, kind:Jc, property:d, invert:c, range:[b, a.pos]};
          }
          if (DEFINE_REGEXP_COMPAT__DEBUG && "=" !== n(a)) {
            throw new y("invalid Unicode property escape");
          }
          ++a.pos;
          e = "";
          for (var f; Ac(f = n(a));) {
            e += f, a.pos += f.length;
          }
          if (DEFINE_REGEXP_COMPAT__DEBUG && "" === e) {
            throw new y("invalid Unicode property value");
          }
          if (DEFINE_REGEXP_COMPAT__DEBUG && "}" !== n(a)) {
            throw new y("invalid Unicode property escape");
          }
          ++a.pos;
          return {type:wa, kind:Kc, property:d, value:e, invert:c, range:[b, a.pos]};
        }
    }
    a.pos = b;
  }
  function tb(a) {
    var b = a.pos;
    if (!M(a.source, "(?", a.pos)) {
      ++a.pos;
      var c = ++a.captureParensIndex;
      var d = W(a);
      if (DEFINE_REGEXP_COMPAT__DEBUG && ")" !== n(a)) {
        throw new y("unterminated capture");
      }
      ++a.pos;
      return {type:Uc, index:c, child:d, range:[b, a.pos]};
    }
    if (M(a.source, "(?:", a.pos)) {
      a.pos += 3;
      d = W(a);
      if (DEFINE_REGEXP_COMPAT__DEBUG && ")" !== n(a)) {
        throw new y("unterminated group");
      }
      ++a.pos;
      return {type:Vc, child:d, range:[b, a.pos]};
    }
    if (M(a.source, "(?=", a.pos)) {
      a.pos += 3;
      d = W(a);
      if (DEFINE_REGEXP_COMPAT__DEBUG && ")" !== n(a)) {
        throw new y("unterminated look-ahead");
      }
      ++a.pos;
      return {type:Wa, negative:!1, child:d, range:[b, a.pos]};
    }
    if (M(a.source, "(?!", a.pos)) {
      a.pos += 3;
      d = W(a);
      if (DEFINE_REGEXP_COMPAT__DEBUG && ")" !== n(a)) {
        throw new y("unterminated look-ahead");
      }
      ++a.pos;
      return {type:Wa, negative:!0, child:d, range:[b, a.pos]};
    }
    if (DEFINE_REGEXP_COMPAT__ES2018) {
      if (M(a.source, "(?<=", a.pos)) {
        a.pos += 4;
        d = W(a);
        if (DEFINE_REGEXP_COMPAT__DEBUG && ")" !== n(a)) {
          throw new y("unterminated look-behind");
        }
        ++a.pos;
        return {type:eb, negative:!1, child:d, range:[b, a.pos]};
      }
      if (M(a.source, "(?<!", a.pos)) {
        a.pos += 4;
        d = W(a);
        if (DEFINE_REGEXP_COMPAT__DEBUG && ")" !== n(a)) {
          throw new y("unterminated look-behind");
        }
        ++a.pos;
        return {type:eb, negative:!0, child:d, range:[b, a.pos]};
      }
      if (M(a.source, "(?<", a.pos)) {
        c = ++a.captureParensIndex;
        a.pos += 3;
        d = a.pos;
        var e = ub(a), f = a.source.slice(d, a.pos - 1);
        if (DEFINE_REGEXP_COMPAT__DEBUG && a.names[e] !== c) {
          throw Error("BUG: invalid named capture");
        }
        d = W(a);
        if (DEFINE_REGEXP_COMPAT__DEBUG && ")" !== n(a)) {
          throw new y("unterminated named capture");
        }
        ++a.pos;
        return {type:Wc, name:e, raw:f, child:d, range:[b, a.pos]};
      }
    }
    if (DEFINE_REGEXP_COMPAT__DEBUG) {
      throw new y("invalid group");
    }
  }
  function ub(a) {
    var b = "", c = Qb(a);
    if (DEFINE_REGEXP_COMPAT__DEBUG) {
      var d;
      if ("$" !== c && "_" !== c && !zd.has((d = pa(c, 0)) !== k ? d : -1)) {
        throw new y("invalid capture group name");
      }
    }
    for (b += c;;) {
      c = a.pos;
      d = Qb(a);
      var e = void 0;
      if ("$" !== d && "\u200c" !== d && "\u200d" !== d && !yd.has((e = pa(d, 0)) !== k ? e : -1)) {
        a.pos = c;
        break;
      }
      b += d;
    }
    if (DEFINE_REGEXP_COMPAT__DEBUG && ">" !== n(a)) {
      throw new y("invalid capture group name");
    }
    ++a.pos;
    return b;
  }
  function Qb(a) {
    var b = n(a);
    if ("\\" === b) {
      return qa(a, !0);
    }
    a.pos += b.length;
    return b;
  }
  function vb(a) {
    for (var b = "", c; fa(c = n(a));) {
      b += c, ++a.pos;
    }
    return "" === b ? -1 : parseInt(b, 10);
  }
  function Rb(a, b) {
    for (var c = a.pos, d = ""; 0 < b--;) {
      var e = n(a);
      if (!Mb(e)) {
        return a.pos = c, -1;
      }
      d += e;
      a.pos += e.length;
    }
    return parseInt(d, 16);
  }
  function n(a) {
    if (DEFINE_REGEXP_COMPAT__ES2018 && a.unicode) {
      return a = pa(a.source, a.pos), a === k ? "" : $a(a);
    }
    a = a.source.charCodeAt(a.pos);
    return a !== a ? "" : Va(a);
  }
  function w(a, b) {
    DEFINE_REGEXP_COMPAT__ES2018 && b === b + "" && (b = a._names[b], b = b !== k ? b : -1);
    var c = a._caps[2 * b], d = a._caps[2 * b + 1];
    return [c !== k ? c : -1, d !== k ? d : -1];
  }
  function ia(a, b) {
    switch(b.type) {
      case Lc:
        return H(a, b);
      case Mc:
        var c = Ia(b.children);
        if (a.direction === fb) {
          for (var d = 1, e, f = c.length; d < f; ++d) {
            e = c.pop(), c.unshift(e);
          }
        }
        f = [];
        var g = !1;
        for (d = -1; e = c[++d];) {
          e = ia(a, e), P(f, e), g = g || a.advance;
        }
        a.advance = g;
        return f;
      case Uc:
        c = a.captureParensIndex++;
        d = ia(a, b.child);
        if (b.index !== c && DEFINE_REGEXP_COMPAT__DEBUG) {
          throw Error("BUG: invalid pattern");
        }
        return P([], {op:a.direction === fb ? gb : hb, index:c}, d, {op:a.direction === fb ? hb : gb, index:c});
      case Vc:
        return ia(a, b.child);
      case Nc:
        return c = a.captureParensIndex, d = G(a, ia(a, b.child)), c = za(a, c, d), a.advance = !1, P([], {op:b.nonGreedy ? La : xa, next:c.length + 1}, c, {op:ib, cont:-1 - c.length - 1});
      case Oc:
        return d = a.captureParensIndex, c = ia(a, b.child), d = za(a, d, G(a, c)), P([], c, {op:b.nonGreedy ? La : xa, next:d.length + 1}, d, {op:ib, cont:-1 - d.length - 1});
      case Pc:
        return c = ia(a, b.child), a.advance = !1, P([], {op:b.nonGreedy ? La : xa, next:c.length}, c);
      case Qc:
        return c = a.captureParensIndex, f = b.min, d = ia(a, b.child), e = [], 1 === f ? P(e, d) : 1 < f ? (g = za(a, c, d), P(e, {op:Bb, value:f}, g, {op:Xc}, {op:$b, cont:-1 - g.length - 1}, {op:Cb})) : a.advance = !1, g = null != b.max ? b.max : f, Infinity === g ? (g = za(a, c, G(a, d)), P(e, {op:b.nonGreedy ? La : xa, next:g.length + 1}, g, {op:ib, cont:-1 - g.length - 1})) : g > f && (f = g - f, g = za(a, c, G(a, d)), 1 === f ? P(e, {op:b.nonGreedy ? La : xa, next:g.length}, g) : P(e, {op:Bb, 
        value:f + 1}, {op:b.nonGreedy ? La : xa, next:g.length + 4}, g, {op:Xc}, {op:$b, cont:-1 - g.length - 2}, {op:Yc}, {op:Cb})), e;
      case db:
        return a.advance = !1, [{op:b.invert ? Ad : Zc}];
      case Xb:
        return a.advance = !1, [{op:Bd}];
      case Yb:
        return a.advance = !1, [{op:Cd}];
      case Wa:
        return c = a.direction, a.direction = $c, d = ha(a, b), a.direction = c, d;
      case N:
        return c = b.value, a.ignoreCase && (c = DEFINE_REGEXP_COMPAT__ES2018 ? ja(c, a.unicode) : ja(c)), a.advance = !0, U(a, [{op:ad, value:c}]);
      case wa:
        return c = ba(a, b), a.advance = !0, U(a, [{op:Db, set:c}]);
      case Sc:
        c = sa([]);
        d = b.children;
        for (f = -1; e = d[++f];) {
          switch(e.type) {
            case N:
              c.add(e.value, e.value + 1);
              break;
            case wa:
              c.addCharSet(ba(a, e));
              break;
            case Fc:
              c.add(e.children[0].value, e.children[1].value + 1);
          }
        }
        a.advance = !0;
        return U(a, [{op:b.invert ? ac : Db, set:c}]);
      case Rc:
        return a.advance = !0, U(a, [{op:Dd}]);
      case Zb:
        if ((1 > b.index || a.captureParens < b.index) && DEFINE_REGEXP_COMPAT__DEBUG) {
          throw Error("invalid back reference");
        }
        a.advance = !1;
        return [{op:a.direction === fb ? bc : cc, index:b.index}];
      case Tc:
        if (DEFINE_REGEXP_COMPAT__ES2018) {
          c = a.names[b.name];
          if ((c === k || 1 > c || a.captureParens < c) && DEFINE_REGEXP_COMPAT__DEBUG) {
            throw Error("invalid named back reference");
          }
          a.advance = !1;
          return [{op:a.direction === fb ? bc : cc, index:c}];
        }
      case Wc:
        if (DEFINE_REGEXP_COMPAT__ES2018) {
          c = a.captureParensIndex++;
          d = ia(a, b.child);
          e = a.names[b.name];
          if ((e === k || e !== c) && DEFINE_REGEXP_COMPAT__DEBUG) {
            throw Error("BUG: invalid pattern");
          }
          return P([], {op:hb, index:e}, d, {op:gb, index:e});
        }
      case eb:
        if (DEFINE_REGEXP_COMPAT__ES2018) {
          return c = a.direction, a.direction = fb, d = ha(a, b), a.direction = c, d;
        }
    }
  }
  function H(a, b) {
    var c = b.children, d = c.length;
    if (0 === d && DEFINE_REGEXP_COMPAT__DEBUG) {
      throw Error("BUG: invalid pattern");
    }
    for (var e = [], f = !0, g = 0; g < d; ++g) {
      e.push(ia(a, c[g])), f = f && a.advance;
    }
    a.advance = f;
    return xc(e, function(h, q) {
      return P([], {op:xa, next:q.length + 1}, q, {op:ib, cont:h.length}, h);
    });
  }
  function G(a, b) {
    return a.advance ? b : P([], {op:Eb}, b, {op:bd});
  }
  function za(a, b, c) {
    return b === a.captureParensIndex ? c : P([], {op:cd, from:b, to:a.captureParensIndex}, c);
  }
  function ha(a, b) {
    var c = ia(a, b.child);
    a.advance = !1;
    return b.negative ? P([], {op:Eb}, {op:dc}, {op:xa, next:c.length + 2}, c, {op:ec}, {op:Yc}, {op:Cb}, {op:fc}) : P([], {op:Eb}, {op:dc}, c, {op:ec}, {op:fc});
  }
  function ba(a, b) {
    switch(b.kind) {
      case Gc:
        return b.invert ? he : Ed;
      case Hc:
        var c = b;
        return DEFINE_REGEXP_COMPAT__ES2018 && a.unicode && a.ignoreCase ? c.invert ? ie : dd : c.invert ? je : ed;
      case Ic:
        return b.invert ? ke : Fd;
      case Jc:
        if (DEFINE_REGEXP_COMPAT__ES2018) {
          c = b;
          var d = Gd(c.property) || le(c.property);
          if (!d && DEFINE_REGEXP_COMPAT__DEBUG) {
            throw new y("invalid Unicode property");
          }
          return c.invert ? d.clone().invert() : d;
        }
      case Kc:
        if (DEFINE_REGEXP_COMPAT__ES2018) {
          c = b;
          d = me(c.property, c.value);
          if (!d && DEFINE_REGEXP_COMPAT__DEBUG) {
            throw new y("invalid Unicode property value");
          }
          return c.invert ? d.clone().invert() : d;
        }
    }
  }
  function U(a, b) {
    return a.direction === $c ? b : P([], {op:fd}, b, {op:fd});
  }
  function P(a, b) {
    for (var c = arguments, d = c.length, e = 1, f = a.length - 1, g; e < d; ++e) {
      if ((g = c[e]) && g.pop) {
        for (var h = 0, q = g.length; h < q; ++h) {
          a[++f] = g[h];
        }
      } else {
        a[++f] = g;
      }
    }
    return a;
  }
  function D(a, b, c) {
    if (DEFINE_REGEXP_COMPAT__ES2018 && c) {
      return a = pa(a, b), a !== k ? a : -1;
    }
    a = a.charCodeAt(b);
    return a !== a ? -1 : a;
  }
  function Q(a, b, c) {
    var d = DEFINE_REGEXP_COMPAT__ES2018 ? D(a, b - 1, c) : D(a, b - 1);
    return DEFINE_REGEXP_COMPAT__ES2018 && c ? 56320 <= d && 57343 >= d && (a = D(a, b - 2, c), 65536 <= a && 1114111 >= a) ? a : d : d;
  }
  function I(a) {
    return 65536 <= a ? 2 : 1;
  }
  function wb(a) {
    return 10 === a || 13 === a || 8232 === a || 8233 === a;
  }
  function Sa(a, b, c, d, e) {
    this.pos = a;
    this.pc = b;
    this.stack = c;
    this.stackSize = d;
    this.caps = e;
  }
  function x(a, b, c) {
    if (!DEFINE_REGEXP_COMPAT__ES2018 || !c || b + 1 >= a.length) {
      return b + 1;
    }
    a = pa(a, b);
    a = a !== k ? a : 0;
    return 65536 <= a ? b + 2 : b + 1;
  }
  function O(a) {
    return a === "" + a;
  }
  function A(a, b, c) {
    if (DEFINE_CODE_PRETTIFY__DEBUG) {
      var d = Z.codeBlocks[Z.codeBlocks.length - 1];
      switch(c) {
        case 1:
          Z.initRegExpCount++;
          Z.initRegExpTime += new Date() - Z._startTime;
          break;
        case 2:
          d.decorateTime += new Date() - Z._startTime;
          break;
        case 3:
          d.updateDOMTime += new Date() - Z._startTime;
      }
      Fb ? Ua(function() {
        0 <= c && (Z._startTime = +new Date());
        a(b);
      }) : requestAnimationFrame(function() {
        0 <= c && (Z._startTime = +new Date());
        a(b);
      });
    } else {
      Ua(a, b);
    }
  }
  function V(a, b) {
    return Fb ? new X(a, b) : new RegExp(a, b);
  }
  function va(a, b) {
    return Fb ? a.match(b) : b.match(a);
  }
  function ne(a, b, c) {
    return Fb ? a.replace(b, c) : b.replace(a, c);
  }
  function oe() {
    var a = na, b = a.langExtension, c = pe(a.sourceNode, a.pre), d = a.sourceCode = c.sourceCode;
    a.spans = c.spans;
    Hd(b, d) || (na = k, A(gc));
  }
  function Hd(a, b) {
    a && Xa[a] || (a = qe.test(b) ? "default-markup" : "default-code");
    var c = !!Xa[a];
    c && (na.langExtension = a, A(Id, a));
    return c;
  }
  function gd() {
    var a = na;
    a.tokens = va(a.simpleLexer[1], a.sourceCode) || [];
    a.decorations.push(a.basePos, "pln");
    A(hd, k, 2);
  }
  function hd() {
    function a(z, ka, Fa) {
      ka && (b.childJobs = b.childJobs || [], b.childJobs.push({parentJob:b, sourceNode:b.sourceNode, pre:1, decorations:g, basePos:z, sourceCode:ka, simpleLexer:Fa, styleCache:{}, pos:0}));
    }
    var b = na, c = b.simpleLexer, d = c[0], e = c[2], f = b.basePos, g = b.decorations, h = b.tokens.shift(), q = b.styleCache;
    if (h) {
      var m = q[h], p;
      if (!O(m)) {
        if (p = d[h.charAt(0)]) {
          var u = va(p[1], h);
          m = p[0];
        } else {
          for (m = "pln", d = -1; p = e[++d];) {
            if (u = va(p[1], h)) {
              m = p[0];
              break;
            }
          }
        }
        !(p = 5 <= m.length && "lang-" === m.substr(0, 5)) || u && O(u[1]) || (p = !1, m = "src");
        p || (q[h] = m);
      }
      e = b.pos;
      b.pos += h.length;
      p ? (q = u[1], p = h.indexOf(q), d = p + q.length, u[2] && (d = h.length - u[2].length, p = d - q.length), m = m.substr(5), a(f + e, h.substr(0, p), c), Hd(m, q) ? a(f + e + p, q) : A(gd, k, 2), a(f + e + d, h.substr(d), c)) : (g.push(f + e, m), A(hd, k, 2));
    } else {
      b.parentJob ? (na = b.parentJob.childJobs.shift()) ? A(gd, k, 2) : (na = b.parentJob, delete na.childJobs, A(hd, k, 2)) : A(re, b, 2);
    }
  }
  function Id(a) {
    function b(m) {
      var p = m;
      0 <= m && (p = se[m]);
      0 <= p[1] && (p[1] = c(p[1]));
      return p;
    }
    function c(m) {
      var p = m;
      return 0 <= m && (p = hc[m], !p.exec) ? (ic.push(m), m) : p;
    }
    var d = na, e = Xa[a];
    O(e) && (e = Xa[a] = Xa[e]);
    var f = e[0];
    if (0 <= f) {
      f = te[f];
      if (0 <= f[DEFINE_CODE_PRETTIFY__NUMERIC_STYLE_PATTERN_OBJECT_KEY]) {
        var g = f[DEFINE_CODE_PRETTIFY__NUMERIC_STYLE_PATTERN_OBJECT_KEY];
        delete f[DEFINE_CODE_PRETTIFY__NUMERIC_STYLE_PATTERN_OBJECT_KEY];
        for (var h = -1; 9 > h;) {
          f["" + ++h] = g;
        }
      }
      e[0] = f;
    }
    for (var q in f) {
      f[q] = b(f[q]);
    }
    e[1] = c(e[1]);
    f = e[2];
    h = 0;
    for (g = f.length; h < g; ++h) {
      f[h] = b(f[h]);
    }
    ic.length ? A(id, a, 1) : (d.childJobs ? (d.childJobs[0].simpleLexer ? d.childJobs[1].simpleLexer = e : d.childJobs[0].simpleLexer = e, na = d.childJobs.shift()) : d.simpleLexer = e, A(gd, k, 1));
  }
  function id(a) {
    if (ic.length) {
      var b = ic.shift(), c = hc[b];
      if (c.pop) {
        hc[b] = V(c[0], c[1]);
      } else {
        if (O(c)) {
          hc[b] = V(c);
        } else {
          return id(a);
        }
      }
      A(id, a, 1);
    } else {
      Id(a);
    }
  }
  function pe(a, b) {
    function c(q) {
      var m = q.nodeType;
      if (1 === m) {
        if (!jb(q, "nocode")) {
          for (m = q.firstChild; m; m = m.nextSibling) {
            c(m);
          }
          m = Gb(q);
          if ("BR" === m || "LI" === m) {
            d[g] = "\n", f[g << 1] = e++, f[g++ << 1 | 1] = q;
          }
        }
      } else {
        if (3 === m || 4 === m) {
          if (m = q.nodeValue) {
            m = b ? m.split("\r\n").join("\n").split("\r").join("\n") : m.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), d[g] = m, f[g << 1] = e, e += m.length, f[g++ << 1 | 1] = q;
          }
        }
      }
    }
    var d = [], e = 0, f = [], g = 0;
    c(a);
    var h = d.join("");
    "\n" === h.charAt(h.length - 1) && (h = h.substr(0, h.length - 1));
    return {sourceCode:h, spans:f};
  }
  function ue(a, b, c) {
    function d(m) {
      var p = m.nodeType;
      if (1 === p && !jb(m, "nocode")) {
        if ("BR" === Gb(m)) {
          e(m), m.parentNode && jd(m);
        } else {
          for (m = m.firstChild; m; m = m.nextSibling) {
            d(m);
          }
        }
      } else {
        if ((3 === p || 4 === p) && c) {
          var u = m.nodeValue, z = u.indexOf("\r\n"), ka = 2;
          -1 === z && (z = u.indexOf("\n"), ka = 1);
          -1 === z && (z = u.indexOf("\r"));
          -1 !== z && (p = u.substr(0, z), m.nodeValue = p, (u = u.substr(z + ka)) && Jd(m, u), e(m), p || jd(m));
        }
      }
    }
    function e(m) {
      function p(z, ka) {
        var Fa = ka ? z.cloneNode(!1) : z, Ya = z.parentNode;
        if (Ya) {
          Ya = p(Ya, 1);
          var kd = z.nextSibling;
          Ya.appendChild(Fa);
          for (var jc = kd; jc; jc = kd) {
            kd = jc.nextSibling, Ya.appendChild(jc);
          }
        }
        return Fa;
      }
      for (; !m.nextSibling;) {
        if (m = m.parentNode, !m) {
          return;
        }
      }
      m = p(m.nextSibling, 0);
      for (var u; (u = m.parentNode) && 1 === u.nodeType;) {
        m = u;
      }
      g.push(m);
    }
    for (var f = t.createElement("li"); a.firstChild;) {
      f.appendChild(a.firstChild);
    }
    for (var g = [f], h = 0; h < g.length; ++h) {
      d(g[h]);
    }
    if (b === (b | 0)) {
      if (10 <= b && 7.2 > Ub) {
        var q = t.createElement("ol");
        q.innerHTML = '<li value="' + b + '">' + f.innerHTML + "</li>";
        g[0] = q.firstChild;
      } else {
        ud(f, "value", b);
      }
    }
    q = kc(a, "ol", {className:"linenums"});
    a = Math.max(0, b - 1 | 0) || 0;
    h = 0;
    for (b = g.length; h < b; ++h) {
      f = g[h], td(f, "L" + (h + a) % 10), f.firstChild || ve(f, "\u00a0"), q.appendChild(f);
    }
  }
  function re(a) {
    var b = a.sourceCode, c = b.length, d = 0, e = a.spans, f = e.length, g = 0, h = a.decorations, q = h.length, m = 0;
    h[q] = c;
    var p, u;
    for (u = p = 0; u < q;) {
      h[u] !== h[u + 2] ? (h[p++] = h[u++], h[p++] = h[u++]) : u += 2;
    }
    q = p;
    for (u = p = 0; u < q;) {
      var z = h[u], ka = h[u + 1];
      for (u += 2; u + 2 <= q && h[u + 1] === ka;) {
        u += 2;
      }
      h[p++] = z;
      h[p++] = ka;
    }
    h.length = p;
    a = a.sourceNode;
    q = "";
    a && (q = a.style.display, Kd(a, "display", "none"));
    for (; g < f;) {
      p = e[g + 2] || c;
      z = h[m + 2] || c;
      u = Math.min(p, z);
      ka = e[g + 1];
      var Fa;
      if (1 !== ka.nodeType && (Fa = b.substring(d, u))) {
        9 > ma && (Fa = Fa.split("\n").join("\r"));
        var Ya = we(ka, "span", {className:h[m + 1]}, Fa);
        jd(ka);
        d < p && (e[g + 1] = Jd(Ya, b.substring(u, p)));
      }
      d = u;
      d >= p && (g += 2);
      d >= z && (m += 2);
    }
    a && Kd(a, "display", q);
    na = k;
    A(gc, k, 3);
  }
  function xe(a) {
    for (var b = k, c = a.firstChild; c; c = c.nextSibling) {
      var d = c.nodeType;
      b = 1 === d ? b ? a : c : 3 === d ? Ld.test(c.nodeValue) ? a : b : b;
    }
    return b === a ? k : b;
  }
  function gc() {
    function a(m, p) {
      return (m.split(p)[1] || "").split(" ")[0];
    }
    if (!na) {
      var b = Md.shift();
      if (b) {
        DEFINE_CODE_PRETTIFY__DEBUG && (Z._startTime = +new Date());
        var c = {};
        if (DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT) {
          for (var d = c, e = b; e = e.previousSibling;) {
            var f = e.nodeType, g = (7 === f || 8 === f) && e.nodeValue;
            if (g ? !ye.test(g) : 3 !== f || Ld.test(e.nodeValue)) {
              break;
            }
            if (g) {
              d = {};
              ne(ze, g, function(m, p, u) {
                d[p] = u;
              });
              break;
            }
          }
        }
        if (DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT && d !== c || jb(b, "prettyprint") && !jb(b, "prettyprinted")) {
          c = !1;
          for (e = b.parentNode; e !== ld; e = e.parentNode) {
            if (f = Gb(e), ("PRE" === f || "XMP" === f || "CODE" === f) && jb(e, "prettyprint")) {
              c = !0;
              break;
            }
          }
          if (!c) {
            c = b.className;
            Ae(b, "prettyprinted");
            e = DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT ? d.lang : !1;
            if (!e) {
              e = a(c, "lang-") || a(c, "language-");
              var h;
              !e && (h = xe(b)) && "CODE" === Gb(h) && (e = a(h.className, "lang-") || a(h.className, "language-"));
            }
            f = Gb(b);
            "PRE" === f || "XMP" === f ? h = 1 : (h = b.currentStyle, f = t.defaultView, h = (h = h ? h.whiteSpace : f && f.getComputedStyle ? f.getComputedStyle(b, null).getPropertyValue("white-space") : 0) && "pre" === h.substr(0, 3));
            if (DEFINE_CODE_PRETTIFY__NUMBER_LINE_SUPPORT) {
              var q = DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT ? d.linenums : !1;
              (q = "true" === q || +q) || (q = a(c, "linenums:") || jb(b, "linenums"), q = q.length ? +q : q);
              q && ue(b, q, h);
            }
            na = {langExtension:e, sourceNode:b, numberLines:q, pre:h, basePos:0, decorations:[], styleCache:{}, pos:0};
            DEFINE_CODE_PRETTIFY__DEBUG && Z.codeBlocks.push({elm:b, lang:e, readyTime:new Date() - Z._startTime, decorateTime:0, updateDOMTime:0});
            A(oe);
            return;
          }
        }
        A(gc);
      } else {
        (DEFINE_CODE_PRETTIFY__EXPORT_PR_OBJECT || DEFINE_CODE_PRETTIFY__DEBUG) && md && md(Z);
      }
    }
  }
  var Tb = B, ld = t.body, xb = E[WHAT_BROWSER_AM_I__INDEX_ENGINE_VERSION], ma = L(WHAT_BROWSER_AM_I__ENGINE_Trident) || L(WHAT_BROWSER_AM_I__ENGINE_TridentMobile), lc = L(WHAT_BROWSER_AM_I__ENGINE_Tasman);
  L(WHAT_BROWSER_AM_I__ENGINE_EdgeHTML) || L(WHAT_BROWSER_AM_I__ENGINE_EdgeMobile);
  var Ub = L(WHAT_BROWSER_AM_I__ENGINE_Presto) || L(WHAT_BROWSER_AM_I__ENGINE_PrestoMobile), nd = L(WHAT_BROWSER_AM_I__ENGINE_Gecko) || L(WHAT_BROWSER_AM_I__ENGINE_Fennec);
  nd && E.conpare(xb, "1.9.1");
  L(WHAT_BROWSER_AM_I__ENGINE_Goanna);
  var Nd = L(WHAT_BROWSER_AM_I__ENGINE_WebKit), Od = L(WHAT_BROWSER_AM_I__ENGINE_SafariMobile) || L(WHAT_BROWSER_AM_I__ENGINE_iOSWebView);
  L(WHAT_BROWSER_AM_I__ENGINE_OperaMini) || L(WHAT_BROWSER_AM_I__ENGINE_UCWEB);
  var Pd = L(WHAT_BROWSER_AM_I__ENGINE_Chromium) || L(WHAT_BROWSER_AM_I__ENGINE_ChromiumMobile);
  Pd || L(WHAT_BROWSER_AM_I__ENGINE_ChromeWebView) || L(WHAT_BROWSER_AM_I__ENGINE_AOSP) || L(WHAT_BROWSER_AM_I__ENGINE_Samsung);
  Pd && aa(navigator.userAgent.split("Edg/")[1]);
  aa(navigator.appVersion.split("Trident/")[1]);
  da(WHAT_BROWSER_AM_I__PLATFORM_Win16) || da(WHAT_BROWSER_AM_I__PLATFORM_Win32) || da(WHAT_BROWSER_AM_I__PLATFORM_Win64);
  var Qd = !ma && !lc && (new S('try{var r,o=Object.defineProperty({},"passive",{get:function(){r=!0}});addEventListener("t",o,o);removeEventListener("t",o,o);return r}catch(e){}'))();
  location.href.indexOf("https");
  var Be = da(WHAT_BROWSER_AM_I__PLATFORM_NDS) || da(WHAT_BROWSER_AM_I__PLATFORM_NDSi) || da(WHAT_BROWSER_AM_I__PLATFORM_N3DS) || da(WHAT_BROWSER_AM_I__PLATFORM_New3DS) || da(WHAT_BROWSER_AM_I__PLATFORM_PSP) || da(WHAT_BROWSER_AM_I__PLATFORM_PSPGo) || da(WHAT_BROWSER_AM_I__PLATFORM_PSVita), Hb = [], wd = [], mc = [], nc = [];
  DEFINE_WEB_DOC_BASE__DEBUG && (Debug.log = function(a) {
    mc.push(a);
  }, Debug.error = function(a) {
    nc.push(a);
  });
  var Ce = function(a) {
    oc.length || (cb = setInterval(pc, Rd));
    oc.push({f:a, _uid:++Sd});
    return Sd;
  };
  var De = function() {
    cb && (v(), cb = setInterval(pc, Rd));
  };
  var oc = [], Rd = 500, Sd = 0, cb, pc = function() {
    for (var a, b = 0; b < oc.length; ++b) {
      a = oc[b], a.f();
    }
  };
  if (5 > ma || lc) {
    r._wdb_onlooptimer = pc, pc = "_wdb_onlooptimer()";
  }
  var Ua = function(a, b, c) {
    kb.length || (Ta = ca(Ib, Jb));
    kb.push({f:a, p:b, _uid:++Td, t:new Date() - 0 + (Jb < c ? c : Jb)});
    return Td;
  };
  var Ee = function() {
    Ta && (lb(), Ta = ca(Ib, Jb));
  };
  var kb = [], Jb = 16, Td = 0, Ta, Ib = function() {
    for (var a, b = 0, c = new Date() - 0; b < kb.length;) {
      c < kb[0].t ? ++b : (a = kb.splice(b, 1)[0], a.f(a.p));
    }
    Ta = kb.length ? ca(Ib, Jb) : 0;
  };
  if (5 > ma || lc) {
    r._wdb_ontimer = Ib, Ib = "_wdb_ontimer()";
  }
  var Da = 5 > ma;
  var Fe = Ba(t, "html")[0];
  Ba(t, "head");
  var Ge = function(a) {
    return r[a] || t[a] || t.getElementById(a);
  };
  var yb = l;
  var rd = function(a) {
    a = Da ? a.children : a.childNodes;
    for (var b = [], c = a.length; c;) {
      b[--c] = a[c];
    }
    return b;
  };
  var kc = function(a, b, c, d, e) {
    b = T(2, a, b, c, d, e);
    Da || (a.appendChild(b), Cc && null != d && Ga(b, d));
    return b;
  };
  var we = function(a, b, c, d, e) {
    b = T(0, a, b, c, d, e);
    Da || (l(a).insertBefore(b, a), Cc && null != d && Ga(b, d));
    return b;
  };
  var ve = Ga;
  var Jd = function(a, b) {
    var c;
    if (Da) {
      return T(1, a, "font", k, b);
    }
    var d = t.createTextNode("" + b);
    (c = a.nextSibling) ? yb(a).insertBefore(d, c) : yb(a).appendChild(d);
    return d;
  };
  var jd = function(a) {
    DEFINE_WEB_DOC_BASE__DEBUG && !yb(a) ? Debug.log("[DOM] p_DOM_remove(), No parentNode!") : Da ? a.outerHTML = "" : yb(a).removeChild(a);
  };
  var sd = 9 > ma, Cc = 9 > ma;
  var Gb = function(a) {
    return a.tagName.toUpperCase();
  };
  var He = function(a, b) {
    return a.getAttribute(b) || "";
  };
  var ud = function(a, b, c) {
    a.setAttribute(b, c);
  };
  var td = F;
  var jb = ya;
  var Ae = function(a, b) {
    var c;
    if (!ya(a, b)) {
      if (c = a.className) {
        b = " " + b;
      }
      F(a, c + b);
    }
  };
  var Kd = function(a, b, c) {
    a.style[b] = c;
  };
  var Dc, vd, zb = [], xd;
  Hb.push(function() {
    vd = kc(ld, "div", {"aria-hidden":"true", style:{position:"absolute", top:0, left:0, width:"9px", height:"9px", visibility:"hidden"}});
    qc(function() {
      xd = !0;
      zb.length && Ua(ea);
    });
  });
  var Vd = function(a, b, c, d) {
    if (Ud) {
      a.addEventListener(b, c, d ? Qd ? d : d.capture : !1);
    } else {
      var e = {eventTarget:a, callback:c};
      d = Ab[b];
      var f = "on" + b, g, h;
      if (d) {
        for (g = d.length; h = d[--g];) {
          if (h.eventTarget === a && h.callback === c) {
            return;
          }
        }
        Ab[b].push(e);
      } else {
        Ab[b] = d = [e], od || (b = a[f], "function" === typeof b && b !== Ha && d.unshift({eventTarget:a, callback:b}));
      }
      od ? a.attachEvent(f, Ha) : a[f] = Ha;
    }
  };
  var Ie = function(a, b, c, d) {
    if (Ud) {
      a.removeEventListener(b, c, d ? Qd ? d : d.capture : !1);
    } else {
      d = Ab[b];
      b = "on" + b;
      var e, f, g;
      if (d) {
        for (e = d.length; f = d[--e];) {
          f.eventTarget === a && (f.callback === c ? d.splice(e, 1) : g = !0);
        }
        g || (od ? a.detachEvent(b, Ha) : (a[b] = Tb, a[b] = null));
      }
    }
  };
  var Ab = {}, od = !1, Sb = 525.13 > Nd, Ud = !Sb && !lc && r.addEventListener, Vb;
  Sb && Fe.addEventListener("click", function(a) {
    if (Vb) {
      return Vb = !1, a.preventDefault(), !1;
    }
  });
  var qc = function(a) {
    DEFINE_WEB_DOC_BASE__DEBUG && !Hb ? alert("Load event has already been dispatched!") : Hb.push(a);
  };
  var Wd = function(a) {
    rc && rc.push(a);
  };
  var sc = function(a) {
    Ie(r, "load", sc);
    sc = k;
    Za(Hb, a, !0);
    Hb = k;
    DEFINE_WEB_DOC_BASE__DEBUG || (qc = k);
  }, rc = [];
  if (419.3 >= Nd) {
    var tc = function() {
      if (tc) {
        var a = t.readyState;
        "loaded" === a || "complete" === a ? (tc = k, sc()) : Ua(tc);
      }
    };
    Ua(tc);
  } else {
    Vd(r, "load", sc);
  }
  ma || 1.8 > nd ? Vd(r, "unload", function(a) {
    Za(rc, a, !0);
  }) : rc = k;
  qc(function() {
    nb();
    Ce(nb);
  });
  var Dd = DEFINE_REGEXP_COMPAT__MINIFY ? 0 : "any", fd = DEFINE_REGEXP_COMPAT__MINIFY ? 1 : "back", hb = DEFINE_REGEXP_COMPAT__MINIFY ? 2 : "cap_begin", gb = DEFINE_REGEXP_COMPAT__MINIFY ? 3 : "cap_end", cd = DEFINE_REGEXP_COMPAT__MINIFY ? 4 : "cap_reset", ad = DEFINE_REGEXP_COMPAT__MINIFY ? 5 : "char", Db = DEFINE_REGEXP_COMPAT__MINIFY ? 6 : "class", ac = DEFINE_REGEXP_COMPAT__MINIFY ? 7 : "class_not", Xc = DEFINE_REGEXP_COMPAT__MINIFY ? 8 : "dec", bd = DEFINE_REGEXP_COMPAT__MINIFY ? 9 : "empty_check", 
  Yc = DEFINE_REGEXP_COMPAT__MINIFY ? 10 : "fail", xa = DEFINE_REGEXP_COMPAT__MINIFY ? 11 : "fork_cont", La = DEFINE_REGEXP_COMPAT__MINIFY ? 12 : "fork_next", ib = DEFINE_REGEXP_COMPAT__MINIFY ? 13 : "jump", Bd = DEFINE_REGEXP_COMPAT__MINIFY ? 14 : "line_begin", Cd = DEFINE_REGEXP_COMPAT__MINIFY ? 15 : "line_end", $b = DEFINE_REGEXP_COMPAT__MINIFY ? 16 : "loop", Xd = DEFINE_REGEXP_COMPAT__MINIFY ? 17 : "match", Cb = DEFINE_REGEXP_COMPAT__MINIFY ? 18 : "pop", Bb = DEFINE_REGEXP_COMPAT__MINIFY ? 19 : 
  "push", Eb = DEFINE_REGEXP_COMPAT__MINIFY ? 20 : "push_pos", dc = DEFINE_REGEXP_COMPAT__MINIFY ? 21 : "push_proc", cc = DEFINE_REGEXP_COMPAT__MINIFY ? 22 : "ref", bc = DEFINE_REGEXP_COMPAT__MINIFY ? 23 : "ref_back", fc = DEFINE_REGEXP_COMPAT__MINIFY ? 24 : "restore_pos", ec = DEFINE_REGEXP_COMPAT__MINIFY ? 25 : "rewind_proc", Zc = DEFINE_REGEXP_COMPAT__MINIFY ? 26 : "word_boundary", Ad = DEFINE_REGEXP_COMPAT__MINIFY ? 27 : "word_boundary_not", Yd = DEFINE_REGEXP_COMPAT__MINIFY ? 0 : "Pattern", 
  Lc = DEFINE_REGEXP_COMPAT__MINIFY ? 1 : "Disjunction", Mc = DEFINE_REGEXP_COMPAT__MINIFY ? 2 : "Sequence", Uc = DEFINE_REGEXP_COMPAT__MINIFY ? 3 : "Capture", Wc = DEFINE_REGEXP_COMPAT__MINIFY ? 4 : "NamedCapture", Vc = DEFINE_REGEXP_COMPAT__MINIFY ? 5 : "Group", Nc = DEFINE_REGEXP_COMPAT__MINIFY ? 6 : "Many", Oc = DEFINE_REGEXP_COMPAT__MINIFY ? 7 : "Some", Pc = DEFINE_REGEXP_COMPAT__MINIFY ? 8 : "Optional", Qc = DEFINE_REGEXP_COMPAT__MINIFY ? 9 : "Repeat", db = DEFINE_REGEXP_COMPAT__MINIFY ? 10 : 
  "WordBoundary", Xb = DEFINE_REGEXP_COMPAT__MINIFY ? 11 : "LineBegin", Yb = DEFINE_REGEXP_COMPAT__MINIFY ? 12 : "LineEnd", Wa = DEFINE_REGEXP_COMPAT__MINIFY ? 13 : "LookAhead", eb = DEFINE_REGEXP_COMPAT__MINIFY ? 14 : "LookBehind", N = DEFINE_REGEXP_COMPAT__MINIFY ? 15 : "Char", wa = DEFINE_REGEXP_COMPAT__MINIFY ? 16 : "EscapeClass", Sc = DEFINE_REGEXP_COMPAT__MINIFY ? 17 : "Class", Fc = DEFINE_REGEXP_COMPAT__MINIFY ? 18 : "ClassRange", Rc = DEFINE_REGEXP_COMPAT__MINIFY ? 19 : "Dot", Zb = DEFINE_REGEXP_COMPAT__MINIFY ? 
  20 : "BackRef", Tc = DEFINE_REGEXP_COMPAT__MINIFY ? 21 : "NamedBackRef", Gc = DEFINE_REGEXP_COMPAT__MINIFY ? 1 : "digit", Hc = DEFINE_REGEXP_COMPAT__MINIFY ? 2 : "word", Ic = DEFINE_REGEXP_COMPAT__MINIFY ? 3 : "space", Jc = DEFINE_REGEXP_COMPAT__MINIFY ? 4 : "unicode_property", Kc = DEFINE_REGEXP_COMPAT__MINIFY ? 5 : "unicode_property_value", Va = String.fromCharCode, Wb = Math.floor, Zd = [], uc = [], J = [], y;
  DEFINE_REGEXP_COMPAT__ES2018 && function(a) {
    for (var b = -1, c, d; c = a[++b];) {
      d = a[++b], Zd[c] = d, uc[d] || (uc[d] = []), uc[d].push(c);
    }
  }([65, 97, 66, 98, 67, 99, 68, 100, 69, 101, 70, 102, 71, 103, 72, 104, 73, 105, 74, 106, 75, 107, 76, 108, 77, 109, 78, 110, 79, 111, 80, 112, 81, 113, 82, 114, 83, 115, 84, 116, 85, 117, 86, 118, 87, 119, 88, 120, 89, 121, 90, 122, 181, 956, 192, 224, 193, 225, 194, 226, 195, 227, 196, 228, 197, 229, 198, 230, 199, 231, 200, 232, 201, 233, 202, 234, 203, 235, 204, 236, 205, 237, 206, 238, 207, 239, 208, 240, 209, 241, 210, 242, 211, 243, 212, 244, 213, 245, 214, 246, 216, 248, 217, 249, 218, 
  250, 219, 251, 220, 252, 221, 253, 222, 254, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 306, 307, 308, 309, 310, 311, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 
  351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 255, 377, 378, 379, 380, 381, 382, 383, 115, 385, 595, 386, 387, 388, 389, 390, 596, 391, 392, 393, 598, 394, 599, 395, 396, 398, 477, 399, 601, 400, 603, 401, 402, 403, 608, 404, 611, 406, 617, 407, 616, 408, 409, 412, 623, 413, 626, 415, 629, 416, 417, 418, 419, 420, 421, 422, 640, 423, 424, 425, 643, 428, 429, 430, 648, 431, 432, 433, 650, 434, 651, 435, 436, 437, 
  438, 439, 658, 440, 441, 444, 445, 452, 454, 453, 454, 455, 457, 456, 457, 458, 460, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 499, 498, 499, 500, 501, 502, 405, 503, 447, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 
  541, 542, 543, 544, 414, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 570, 11365, 571, 572, 573, 410, 574, 11366, 577, 578, 579, 384, 580, 649, 581, 652, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 837, 953, 880, 881, 882, 883, 886, 887, 895, 1011, 902, 940, 904, 941, 905, 942, 906, 943, 908, 972, 910, 973, 911, 974, 913, 945, 914, 946, 915, 947, 916, 948, 917, 949, 918, 950, 919, 951, 920, 952, 921, 953, 922, 954, 923, 955, 924, 956, 925, 957, 
  926, 958, 927, 959, 928, 960, 929, 961, 931, 963, 932, 964, 933, 965, 934, 966, 935, 967, 936, 968, 937, 969, 938, 970, 939, 971, 962, 963, 975, 983, 976, 946, 977, 952, 981, 966, 982, 960, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 954, 1009, 961, 1012, 952, 1013, 949, 1015, 1016, 1017, 1010, 1018, 1019, 1021, 891, 1022, 892, 1023, 893, 1024, 1104, 1025, 1105, 1026, 1106, 1027, 1107, 1028, 1108, 1029, 1109, 
  1030, 1110, 1031, 1111, 1032, 1112, 1033, 1113, 1034, 1114, 1035, 1115, 1036, 1116, 1037, 1117, 1038, 1118, 1039, 1119, 1040, 1072, 1041, 1073, 1042, 1074, 1043, 1075, 1044, 1076, 1045, 1077, 1046, 1078, 1047, 1079, 1048, 1080, 1049, 1081, 1050, 1082, 1051, 1083, 1052, 1084, 1053, 1085, 1054, 1086, 1055, 1087, 1056, 1088, 1057, 1089, 1058, 1090, 1059, 1091, 1060, 1092, 1061, 1093, 1062, 1094, 1063, 1095, 1064, 1096, 1065, 1097, 1066, 1098, 1067, 1099, 1068, 1100, 1069, 1101, 1070, 1102, 1071, 1103, 
  1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 
  1212, 1213, 1214, 1215, 1216, 1231, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 
  1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1329, 1377, 1330, 1378, 1331, 1379, 1332, 1380, 1333, 1381, 1334, 1382, 1335, 1383, 1336, 1384, 1337, 1385, 1338, 1386, 1339, 1387, 1340, 1388, 1341, 1389, 1342, 1390, 1343, 1391, 1344, 1392, 1345, 1393, 1346, 1394, 1347, 1395, 1348, 1396, 1349, 1397, 1350, 1398, 1351, 1399, 1352, 1400, 1353, 1401, 1354, 1402, 
  1355, 1403, 1356, 1404, 1357, 1405, 1358, 1406, 1359, 1407, 1360, 1408, 1361, 1409, 1362, 1410, 1363, 1411, 1364, 1412, 1365, 1413, 1366, 1414, 4256, 11520, 4257, 11521, 4258, 11522, 4259, 11523, 4260, 11524, 4261, 11525, 4262, 11526, 4263, 11527, 4264, 11528, 4265, 11529, 4266, 11530, 4267, 11531, 4268, 11532, 4269, 11533, 4270, 11534, 4271, 11535, 4272, 11536, 4273, 11537, 4274, 11538, 4275, 11539, 4276, 11540, 4277, 11541, 4278, 11542, 4279, 11543, 4280, 11544, 4281, 11545, 4282, 11546, 4283, 
  11547, 4284, 11548, 4285, 11549, 4286, 11550, 4287, 11551, 4288, 11552, 4289, 11553, 4290, 11554, 4291, 11555, 4292, 11556, 4293, 11557, 4295, 11559, 4301, 11565, 5112, 5104, 5113, 5105, 5114, 5106, 5115, 5107, 5116, 5108, 5117, 5109, 7296, 1074, 7297, 1076, 7298, 1086, 7299, 1089, 7300, 1090, 7301, 1090, 7302, 1098, 7303, 1123, 7304, 42571, 7312, 4304, 7313, 4305, 7314, 4306, 7315, 4307, 7316, 4308, 7317, 4309, 7318, 4310, 7319, 4311, 7320, 4312, 7321, 4313, 7322, 4314, 7323, 4315, 7324, 4316, 
  7325, 4317, 7326, 4318, 7327, 4319, 7328, 4320, 7329, 4321, 7330, 4322, 7331, 4323, 7332, 4324, 7333, 4325, 7334, 4326, 7335, 4327, 7336, 4328, 7337, 4329, 7338, 4330, 7339, 4331, 7340, 4332, 7341, 4333, 7342, 4334, 7343, 4335, 7344, 4336, 7345, 4337, 7346, 4338, 7347, 4339, 7348, 4340, 7349, 4341, 7350, 4342, 7351, 4343, 7352, 4344, 7353, 4345, 7354, 4346, 7357, 4349, 7358, 4350, 7359, 4351, 7680, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 
  7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 
  7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7835, 7777, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 
  7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7936, 7945, 7937, 7946, 7938, 7947, 7939, 7948, 7940, 7949, 7941, 7950, 7942, 7951, 7943, 7960, 7952, 7961, 7953, 7962, 7954, 
  7963, 7955, 7964, 7956, 7965, 7957, 7976, 7968, 7977, 7969, 7978, 7970, 7979, 7971, 7980, 7972, 7981, 7973, 7982, 7974, 7983, 7975, 7992, 7984, 7993, 7985, 7994, 7986, 7995, 7987, 7996, 7988, 7997, 7989, 7998, 7990, 7999, 7991, 8008, 8E3, 8009, 8001, 8010, 8002, 8011, 8003, 8012, 8004, 8013, 8005, 8025, 8017, 8027, 8019, 8029, 8021, 8031, 8023, 8040, 8032, 8041, 8033, 8042, 8034, 8043, 8035, 8044, 8036, 8045, 8037, 8046, 8038, 8047, 8039, 8120, 8112, 8121, 8113, 8122, 8048, 8123, 8049, 8126, 953, 
  8136, 8050, 8137, 8051, 8138, 8052, 8139, 8053, 8152, 8144, 8153, 8145, 8154, 8054, 8155, 8055, 8168, 8160, 8169, 8161, 8170, 8058, 8171, 8059, 8172, 8165, 8184, 8056, 8185, 8057, 8186, 8060, 8187, 8061, 8486, 969, 8490, 107, 8491, 229, 8498, 8526, 8544, 8560, 8545, 8561, 8546, 8562, 8547, 8563, 8548, 8564, 8549, 8565, 8550, 8566, 8551, 8567, 8552, 8568, 8553, 8569, 8554, 8570, 8555, 8571, 8556, 8572, 8557, 8573, 8558, 8574, 8559, 8575, 8579, 8580, 9398, 9424, 9399, 9425, 9400, 9426, 9401, 9427, 
  9402, 9428, 9403, 9429, 9404, 9430, 9405, 9431, 9406, 9432, 9407, 9433, 9408, 9434, 9409, 9435, 9410, 9436, 9411, 9437, 9412, 9438, 9413, 9439, 9414, 9440, 9415, 9441, 9416, 9442, 9417, 9443, 9418, 9444, 9419, 9445, 9420, 9446, 9421, 9447, 9422, 9448, 9423, 9449, 11264, 11312, 11265, 11313, 11266, 11314, 11267, 11315, 11268, 11316, 11269, 11317, 11270, 11318, 11271, 11319, 11272, 11320, 11273, 11321, 11274, 11322, 11275, 11323, 11276, 11324, 11277, 11325, 11278, 11326, 11279, 11327, 11280, 11328, 
  11281, 11329, 11282, 11330, 11283, 11331, 11284, 11332, 11285, 11333, 11286, 11334, 11287, 11335, 11288, 11336, 11289, 11337, 11290, 11338, 11291, 11339, 11292, 11340, 11293, 11341, 11294, 11342, 11295, 11343, 11296, 11344, 11297, 11345, 11298, 11346, 11299, 11347, 11300, 11348, 11301, 11349, 11302, 11350, 11303, 11351, 11304, 11352, 11305, 11353, 11306, 11354, 11307, 11355, 11308, 11356, 11309, 11357, 11310, 11358, 11360, 11361, 11362, 619, 11363, 7549, 11364, 637, 11367, 11368, 11369, 11370, 
  11371, 11372, 11373, 593, 11374, 625, 11375, 592, 11376, 594, 11378, 11379, 11381, 11382, 11390, 575, 11391, 576, 11392, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 
  11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11499, 11500, 11501, 11502, 11506, 11507, 42560, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 
  42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 42601, 42602, 42603, 42604, 42605, 42624, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42786, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42802, 42803, 42804, 42805, 42806, 
  42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42873, 42874, 42875, 42876, 42877, 7545, 42878, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 
  42887, 42891, 42892, 42893, 613, 42896, 42897, 42898, 42899, 42902, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 614, 42923, 604, 42924, 609, 42925, 620, 42926, 618, 42928, 670, 42929, 647, 42930, 669, 42931, 43859, 42932, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42946, 42947, 42948, 42900, 42949, 642, 42950, 7566, 43888, 5024, 43889, 5025, 43890, 5026, 43891, 5027, 
  43892, 5028, 43893, 5029, 43894, 5030, 43895, 5031, 43896, 5032, 43897, 5033, 43898, 5034, 43899, 5035, 43900, 5036, 43901, 5037, 43902, 5038, 43903, 5039, 43904, 5040, 43905, 5041, 43906, 5042, 43907, 5043, 43908, 5044, 43909, 5045, 43910, 5046, 43911, 5047, 43912, 5048, 43913, 5049, 43914, 5050, 43915, 5051, 43916, 5052, 43917, 5053, 43918, 5054, 43919, 5055, 43920, 5056, 43921, 5057, 43922, 5058, 43923, 5059, 43924, 5060, 43925, 5061, 43926, 5062, 43927, 5063, 43928, 5064, 43929, 5065, 43930, 
  5066, 43931, 5067, 43932, 5068, 43933, 5069, 43934, 5070, 43935, 5071, 43936, 5072, 43937, 5073, 43938, 5074, 43939, 5075, 43940, 5076, 43941, 5077, 43942, 5078, 43943, 5079, 43944, 5080, 43945, 5081, 43946, 5082, 43947, 5083, 43948, 5084, 43949, 5085, 43950, 5086, 43951, 5087, 43952, 5088, 43953, 5089, 43954, 5090, 43955, 5091, 43956, 5092, 43957, 5093, 43958, 5094, 43959, 5095, 43960, 5096, 43961, 5097, 43962, 5098, 43963, 5099, 43964, 5100, 43965, 5101, 43966, 5102, 43967, 5103, 65313, 65345, 
  65314, 65346, 65315, 65347, 65316, 65348, 65317, 65349, 65318, 65350, 65319, 65351, 65320, 65352, 65321, 65353, 65322, 65354, 65323, 65355, 65324, 65356, 65325, 65357, 65326, 65358, 65327, 65359, 65328, 65360, 65329, 65361, 65330, 65362, 65331, 65363, 65332, 65364, 65333, 65365, 65334, 65366, 65335, 65367, 65336, 65368, 65337, 65369, 65338, 65370, 66560, 66600, 66561, 66601, 66562, 66602, 66563, 66603, 66564, 66604, 66565, 66605, 66566, 66606, 66567, 66607, 66568, 66608, 66569, 66609, 66570, 66610, 
  66571, 66611, 66572, 66612, 66573, 66613, 66574, 66614, 66575, 66615, 66576, 66616, 66577, 66617, 66578, 66618, 66579, 66619, 66580, 66620, 66581, 66621, 66582, 66622, 66583, 66623, 66584, 66624, 66585, 66625, 66586, 66626, 66587, 66627, 66588, 66628, 66589, 66629, 66590, 66630, 66591, 66631, 66592, 66632, 66593, 66633, 66594, 66634, 66595, 66635, 66596, 66636, 66597, 66637, 66598, 66638, 66599, 66639, 66736, 66776, 66737, 66777, 66738, 66778, 66739, 66779, 66740, 66780, 66741, 66781, 66742, 66782, 
  66743, 66783, 66744, 66784, 66745, 66785, 66746, 66786, 66747, 66787, 66748, 66788, 66749, 66789, 66750, 66790, 66751, 66791, 66752, 66792, 66753, 66793, 66754, 66794, 66755, 66795, 66756, 66796, 66757, 66797, 66758, 66798, 66759, 66799, 66760, 66800, 66761, 66801, 66762, 66802, 66763, 66803, 66764, 66804, 66765, 66805, 66766, 66806, 66767, 66807, 66768, 66808, 66769, 66809, 66770, 66810, 66771, 66811, 68736, 68800, 68737, 68801, 68738, 68802, 68739, 68803, 68740, 68804, 68741, 68805, 68742, 68806, 
  68743, 68807, 68744, 68808, 68745, 68809, 68746, 68810, 68747, 68811, 68748, 68812, 68749, 68813, 68750, 68814, 68751, 68815, 68752, 68816, 68753, 68817, 68754, 68818, 68755, 68819, 68756, 68820, 68757, 68821, 68758, 68822, 68759, 68823, 68760, 68824, 68761, 68825, 68762, 68826, 68763, 68827, 68764, 68828, 68765, 68829, 68766, 68830, 68767, 68831, 68768, 68832, 68769, 68833, 68770, 68834, 68771, 68835, 68772, 68836, 68773, 68837, 68774, 68838, 68775, 68839, 68776, 68840, 68777, 68841, 68778, 68842, 
  68779, 68843, 68780, 68844, 68781, 68845, 68782, 68846, 68783, 68847, 68784, 68848, 68785, 68849, 68786, 68850, 71840, 71872, 71841, 71873, 71842, 71874, 71843, 71875, 71844, 71876, 71845, 71877, 71846, 71878, 71847, 71879, 71848, 71880, 71849, 71881, 71850, 71882, 71851, 71883, 71852, 71884, 71853, 71885, 71854, 71886, 71855, 71887, 71856, 71888, 71857, 71889, 71858, 71890, 71859, 71891, 71860, 71892, 71861, 71893, 71862, 71894, 71863, 71895, 71864, 71896, 71865, 71897, 71866, 71898, 71867, 71899, 
  71868, 71900, 71869, 71901, 71870, 71902, 71871, 71903, 93760, 93792, 93761, 93793, 93762, 93794, 93763, 93795, 93764, 93796, 93765, 93797, 93766, 93798, 93767, 93799, 93768, 93800, 93769, 93801, 93770, 93802, 93771, 93803, 93772, 93804, 93773, 93805, 93774, 93806, 93775, 93807, 93776, 93808, 93777, 93809, 93778, 93810, 93779, 93811, 93780, 93812, 93781, 93813, 93782, 93814, 93783, 93815, 93784, 93816, 93785, 93817, 93786, 93818, 93787, 93819, 93788, 93820, 93789, 93821, 93790, 93822, 93791, 93823, 
  125184, 125218, 125185, 125219, 125186, 125220, 125187, 125221, 125188, 125222, 125189, 125223, 125190, 125224, 125191, 125225, 125192, 125226, 125193, 125227, 125194, 125228, 125195, 125229, 125196, 125230, 125197, 125231, 125198, 125232, 125199, 125233, 125200, 125234, 125201, 125235, 125202, 125236, 125203, 125237, 125204, 125238, 125205, 125239, 125206, 125240, 125207, 125241, 125208, 125242, 125209, 125243, 125210, 125244, 125211, 125245, 125212, 125246, 125213, 125247, 125214, 125248, 125215, 
  125249, 125216, 125250, 125217, 125251, 7838, 223, 8072, 8064, 8073, 8065, 8074, 8066, 8075, 8067, 8076, 8068, 8077, 8069, 8078, 8070, 8079, 8071, 8088, 8080, 8089, 8081, 8090, 8082, 8091, 8083, 8092, 8084, 8093, 8085, 8094, 8086, 8095, 8087, 8104, 8096, 8105, 8097, 8106, 8098, 8107, 8099, 8108, 8100, 8109, 8101, 8110, 8102, 8111, 8103, 8124, 8115, 8140, 8131, 8188, 8179]);
  J[924] = [181, 956];
  J[452] = [453, 454];
  J[455] = [456, 457];
  J[458] = [459, 460];
  J[497] = [498, 499];
  J[921] = [837, 953, 8126];
  J[914] = [946, 976];
  J[917] = [949, 1013];
  J[920] = [952, 977];
  J[922] = [954, 1008];
  J[928] = [960, 982];
  J[929] = [961, 1009];
  J[931] = [962, 963];
  J[934] = [966, 981];
  J[1042] = [1074, 7296];
  J[1044] = [1076, 7297];
  J[1054] = [1086, 7298];
  J[1057] = [1089, 7299];
  J[1058] = [1090, 7300, 7301];
  J[1066] = [1098, 7302];
  J[1122] = [1123, 7303];
  J[42570] = [7304, 42571];
  J[7776] = [7777, 7835];
  var Je = {Cased_Letter:[65, 91, 97, 123, 181, 182, 192, 215, 216, 247, 248, 443, 444, 448, 452, 660, 661, 688, 880, 884, 886, 888, 891, 894, 895, 896, 902, 903, 904, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1162, 1328, 1329, 1367, 1376, 1417, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4349, 4352, 5024, 5110, 5112, 5118, 7296, 7305, 7312, 7355, 7357, 7360, 7424, 7468, 7531, 7544, 7545, 7579, 7680, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 
  8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8473, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8495, 8501, 8505, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8579, 8581, 11264, 11311, 11312, 11359, 11360, 11388, 11390, 11493, 11499, 11503, 11506, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 42560, 42606, 42624, 42652, 42786, 42864, 42865, 42888, 42891, 
  42895, 42896, 42944, 42946, 42951, 43002, 43003, 43824, 43867, 43872, 43880, 43888, 43968, 64256, 64263, 64275, 64280, 65313, 65339, 65345, 65371, 66560, 66640, 66736, 66772, 66776, 66812, 68736, 68787, 68800, 68851, 71840, 71904, 93760, 93824, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 
  120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 125184, 125252], Close_Punctuation:[41, 42, 93, 94, 125, 126, 3899, 3900, 3901, 3902, 5788, 5789, 8262, 8263, 8318, 8319, 8334, 8335, 8969, 8970, 8971, 8972, 9002, 9003, 10089, 10090, 10091, 10092, 10093, 10094, 10095, 10096, 10097, 10098, 10099, 10100, 10101, 10102, 10182, 
  10183, 10215, 10216, 10217, 10218, 10219, 10220, 10221, 10222, 10223, 10224, 10628, 10629, 10630, 10631, 10632, 10633, 10634, 10635, 10636, 10637, 10638, 10639, 10640, 10641, 10642, 10643, 10644, 10645, 10646, 10647, 10648, 10649, 10713, 10714, 10715, 10716, 10749, 10750, 11811, 11812, 11813, 11814, 11815, 11816, 11817, 11818, 12297, 12298, 12299, 12300, 12301, 12302, 12303, 12304, 12305, 12306, 12309, 12310, 12311, 12312, 12313, 12314, 12315, 12316, 12318, 12320, 64830, 64831, 65048, 65049, 65078, 
  65079, 65080, 65081, 65082, 65083, 65084, 65085, 65086, 65087, 65088, 65089, 65090, 65091, 65092, 65093, 65096, 65097, 65114, 65115, 65116, 65117, 65118, 65119, 65289, 65290, 65341, 65342, 65373, 65374, 65376, 65377, 65379, 65380], Connector_Punctuation:[95, 96, 8255, 8257, 8276, 8277, 65075, 65077, 65101, 65104, 65343, 65344], Control:[0, 32, 127, 160], Currency_Symbol:[36, 37, 162, 166, 1423, 1424, 1547, 1548, 2046, 2048, 2546, 2548, 2555, 2556, 2801, 2802, 3065, 3066, 3647, 3648, 6107, 6108, 
  8352, 8384, 43064, 43065, 65020, 65021, 65129, 65130, 65284, 65285, 65504, 65506, 65509, 65511, 73693, 73697, 123647, 123648, 126128, 126129], Dash_Punctuation:[45, 46, 1418, 1419, 1470, 1471, 5120, 5121, 6150, 6151, 8208, 8214, 11799, 11800, 11802, 11803, 11834, 11836, 11840, 11841, 12316, 12317, 12336, 12337, 12448, 12449, 65073, 65075, 65112, 65113, 65123, 65124, 65293, 65294], Decimal_Number:[48, 58, 1632, 1642, 1776, 1786, 1984, 1994, 2406, 2416, 2534, 2544, 2662, 2672, 2790, 2800, 2918, 2928, 
  3046, 3056, 3174, 3184, 3302, 3312, 3430, 3440, 3558, 3568, 3664, 3674, 3792, 3802, 3872, 3882, 4160, 4170, 4240, 4250, 6112, 6122, 6160, 6170, 6470, 6480, 6608, 6618, 6784, 6794, 6800, 6810, 6992, 7002, 7088, 7098, 7232, 7242, 7248, 7258, 42528, 42538, 43216, 43226, 43264, 43274, 43472, 43482, 43504, 43514, 43600, 43610, 44016, 44026, 65296, 65306, 66720, 66730, 68912, 68922, 69734, 69744, 69872, 69882, 69942, 69952, 70096, 70106, 70384, 70394, 70736, 70746, 70864, 70874, 71248, 71258, 71360, 
  71370, 71472, 71482, 71904, 71914, 72784, 72794, 73040, 73050, 73120, 73130, 92768, 92778, 93008, 93018, 120782, 120832, 123200, 123210, 123632, 123642, 125264, 125274], Enclosing_Mark:[1160, 1162, 6846, 6847, 8413, 8417, 8418, 8421, 42608, 42611], Final_Punctuation:[187, 188, 8217, 8218, 8221, 8222, 8250, 8251, 11779, 11780, 11781, 11782, 11786, 11787, 11789, 11790, 11805, 11806, 11809, 11810], Format:[173, 174, 1536, 1542, 1564, 1565, 1757, 1758, 1807, 1808, 2274, 2275, 6158, 6159, 8203, 8208, 
  8234, 8239, 8288, 8293, 8294, 8304, 65279, 65280, 65529, 65532, 69821, 69822, 69837, 69838, 78896, 78905, 113824, 113828, 119155, 119163, 917505, 917506, 917536, 917632], Initial_Punctuation:[171, 172, 8216, 8217, 8219, 8221, 8223, 8224, 8249, 8250, 11778, 11779, 11780, 11781, 11785, 11786, 11788, 11789, 11804, 11805, 11808, 11809], Letter:[65, 91, 97, 123, 170, 171, 181, 182, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 880, 885, 886, 888, 890, 894, 895, 896, 
  902, 903, 904, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1488, 1515, 1519, 1523, 1568, 1611, 1646, 1648, 1649, 1748, 1749, 1750, 1765, 1767, 1774, 1776, 1786, 1789, 1791, 1792, 1808, 1809, 1810, 1840, 1869, 1958, 1969, 1970, 1994, 2027, 2036, 2038, 2042, 2043, 2048, 2070, 2074, 2075, 2084, 2085, 2088, 2089, 2112, 2137, 2144, 2155, 2208, 2229, 2230, 2238, 2308, 2362, 2365, 2366, 2384, 2385, 2392, 2402, 2417, 2433, 2437, 2445, 2447, 2449, 2451, 
  2473, 2474, 2481, 2482, 2483, 2486, 2490, 2493, 2494, 2510, 2511, 2524, 2526, 2527, 2530, 2544, 2546, 2556, 2557, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2649, 2653, 2654, 2655, 2674, 2677, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2749, 2750, 2768, 2769, 2784, 2786, 2809, 2810, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2877, 2878, 2908, 2910, 2911, 2914, 2929, 2930, 2947, 2948, 2949, 2955, 2958, 
  2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3024, 3025, 3077, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3134, 3160, 3163, 3168, 3170, 3200, 3201, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3261, 3262, 3294, 3295, 3296, 3298, 3313, 3315, 3333, 3341, 3342, 3345, 3346, 3387, 3389, 3390, 3406, 3407, 3412, 3415, 3423, 3426, 3450, 3456, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3585, 3633, 3634, 3636, 3648, 3655, 3713, 
  3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3761, 3762, 3764, 3773, 3774, 3776, 3781, 3782, 3783, 3804, 3808, 3840, 3841, 3904, 3912, 3913, 3949, 3976, 3981, 4096, 4139, 4159, 4160, 4176, 4182, 4186, 4190, 4193, 4194, 4197, 4199, 4206, 4209, 4213, 4226, 4238, 4239, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4348, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 
  4886, 4888, 4955, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5873, 5881, 5888, 5901, 5902, 5906, 5920, 5938, 5952, 5970, 5984, 5997, 5998, 6001, 6016, 6068, 6103, 6104, 6108, 6109, 6176, 6265, 6272, 6277, 6279, 6313, 6314, 6315, 6320, 6390, 6400, 6431, 6480, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6656, 6679, 6688, 6741, 6823, 6824, 6917, 6964, 6981, 6988, 7043, 7073, 7086, 7088, 7098, 7142, 7168, 7204, 7245, 7248, 7258, 7294, 7296, 7305, 7312, 7355, 7357, 
  7360, 7401, 7405, 7406, 7412, 7413, 7415, 7418, 7419, 7424, 7616, 7680, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8305, 8306, 8319, 8320, 8336, 8349, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8473, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8495, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8579, 8581, 11264, 
  11311, 11312, 11359, 11360, 11493, 11499, 11503, 11506, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11648, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11823, 11824, 12293, 12295, 12337, 12342, 12347, 12349, 12353, 12439, 12445, 12448, 12449, 12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 
  42528, 42538, 42540, 42560, 42607, 42623, 42654, 42656, 42726, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43010, 43011, 43014, 43015, 43019, 43020, 43043, 43072, 43124, 43138, 43188, 43250, 43256, 43259, 43260, 43261, 43263, 43274, 43302, 43312, 43335, 43360, 43389, 43396, 43443, 43471, 43472, 43488, 43493, 43494, 43504, 43514, 43519, 43520, 43561, 43584, 43587, 43588, 43596, 43616, 43639, 43642, 43643, 43646, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 
  43715, 43739, 43742, 43744, 43755, 43762, 43765, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44003, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64286, 64287, 64297, 64298, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64434, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65020, 65136, 65141, 65142, 65277, 65313, 65339, 65345, 65371, 65382, 65471, 65474, 
  65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 66176, 66205, 66208, 66257, 66304, 66336, 66349, 66369, 66370, 66378, 66384, 66422, 66432, 66462, 66464, 66500, 66504, 66512, 66560, 66718, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 
  67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68097, 68112, 68116, 68117, 68120, 68121, 68150, 68192, 68221, 68224, 68253, 68288, 68296, 68297, 68325, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68736, 68787, 68800, 68851, 68864, 68900, 69376, 69405, 69415, 69416, 69424, 69446, 69600, 69623, 69635, 69688, 69763, 69808, 69840, 69865, 69891, 69927, 69956, 69957, 69968, 70003, 70006, 70007, 70019, 70067, 70081, 70085, 70106, 70107, 70108, 
  70109, 70144, 70162, 70163, 70188, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 70320, 70367, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70461, 70462, 70480, 70481, 70493, 70498, 70656, 70709, 70727, 70731, 70751, 70752, 70784, 70832, 70852, 70854, 70855, 70856, 71040, 71087, 71128, 71132, 71168, 71216, 71236, 71237, 71296, 71339, 71352, 71353, 71424, 71451, 71680, 71724, 71840, 71904, 71935, 71936, 72096, 72104, 72106, 72145, 72161, 
  72162, 72163, 72164, 72192, 72193, 72203, 72243, 72250, 72251, 72272, 72273, 72284, 72330, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72751, 72768, 72769, 72818, 72848, 72960, 72967, 72968, 72970, 72971, 73009, 73030, 73031, 73056, 73062, 73063, 73065, 73066, 73098, 73112, 73113, 73440, 73459, 73728, 74650, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92880, 92910, 92928, 92976, 92992, 92996, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94032, 94033, 94099, 
  94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 
  120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 123136, 123181, 123191, 123198, 123214, 123215, 123584, 123628, 124928, 125125, 125184, 125252, 125259, 125260, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 
  126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102], Letter_Number:[5870, 5873, 8544, 8579, 8581, 8585, 12295, 12296, 12321, 12330, 12344, 12347, 42726, 
  42736, 65856, 65909, 66369, 66370, 66378, 66379, 66513, 66518, 74752, 74863], Line_Separator:[8232, 8233], Lowercase_Letter:[97, 123, 181, 182, 223, 247, 248, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 
  325, 326, 327, 328, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 385, 387, 388, 389, 390, 392, 393, 396, 398, 402, 403, 405, 406, 409, 412, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 426, 428, 429, 430, 432, 433, 436, 437, 438, 439, 441, 443, 445, 448, 454, 455, 457, 458, 460, 
  461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 499, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 570, 572, 
  573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 660, 661, 688, 881, 882, 883, 884, 887, 888, 891, 894, 912, 913, 940, 975, 976, 978, 981, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1012, 1013, 1014, 1016, 1017, 1019, 1021, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 
  1148, 1149, 1150, 1151, 1152, 1153, 1154, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 
  1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 
  1326, 1327, 1328, 1376, 1417, 4304, 4347, 4349, 4352, 5112, 5118, 7296, 7305, 7424, 7468, 7531, 7544, 7545, 7579, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 
  7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 
  7838, 7839, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 
  7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 7958, 7968, 7976, 7984, 7992, 8E3, 8006, 8016, 8024, 8032, 8040, 8048, 8062, 8064, 8072, 8080, 8088, 8096, 8104, 8112, 8117, 8118, 8120, 8126, 8127, 8130, 8133, 8134, 8136, 8144, 8148, 8150, 8152, 8160, 8168, 8178, 8181, 8182, 8184, 8458, 8459, 8462, 8464, 8467, 8468, 8495, 8496, 8500, 8501, 8505, 8506, 8508, 8510, 8518, 8522, 8526, 8527, 8580, 8581, 11312, 11359, 11361, 11362, 11365, 11367, 11368, 11369, 
  11370, 11371, 11372, 11373, 11377, 11378, 11379, 11381, 11382, 11388, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 
  11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11493, 11500, 11501, 11502, 11503, 11507, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 
  42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 42601, 42602, 42603, 42604, 42605, 42606, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42652, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42802, 42803, 42804, 42805, 42806, 42807, 42808, 
  42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42864, 42865, 42873, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42888, 
  42892, 42893, 42894, 42895, 42897, 42898, 42899, 42902, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42927, 42928, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42944, 42947, 42948, 43002, 43003, 43824, 43867, 43872, 43880, 43888, 43968, 64256, 64263, 64275, 64280, 65345, 65371, 66600, 66640, 66776, 66812, 68800, 68851, 71872, 71904, 93792, 93824, 119834, 119860, 119886, 
  119893, 119894, 119912, 119938, 119964, 119990, 119994, 119995, 119996, 119997, 120004, 120005, 120016, 120042, 120068, 120094, 120120, 120146, 120172, 120198, 120224, 120250, 120276, 120302, 120328, 120354, 120380, 120406, 120432, 120458, 120486, 120514, 120539, 120540, 120546, 120572, 120597, 120598, 120604, 120630, 120655, 120656, 120662, 120688, 120713, 120714, 120720, 120746, 120771, 120772, 120778, 120779, 120780, 125218, 125252], Mark:[768, 880, 1155, 1162, 1425, 1470, 1471, 1472, 1473, 
  1475, 1476, 1478, 1479, 1480, 1552, 1563, 1611, 1632, 1648, 1649, 1750, 1757, 1759, 1765, 1767, 1769, 1770, 1774, 1809, 1810, 1840, 1867, 1958, 1969, 2027, 2036, 2045, 2046, 2070, 2074, 2075, 2084, 2085, 2088, 2089, 2094, 2137, 2140, 2259, 2274, 2275, 2308, 2362, 2365, 2366, 2384, 2385, 2392, 2402, 2404, 2433, 2436, 2492, 2493, 2494, 2501, 2503, 2505, 2507, 2510, 2519, 2520, 2530, 2532, 2558, 2559, 2561, 2564, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2672, 2674, 2677, 2678, 2689, 
  2692, 2748, 2749, 2750, 2758, 2759, 2762, 2763, 2766, 2786, 2788, 2810, 2816, 2817, 2820, 2876, 2877, 2878, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2914, 2916, 2946, 2947, 3006, 3011, 3014, 3017, 3018, 3022, 3031, 3032, 3072, 3077, 3134, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3170, 3172, 3201, 3204, 3260, 3261, 3262, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3298, 3300, 3328, 3332, 3387, 3389, 3390, 3397, 3398, 3401, 3402, 3406, 3415, 3416, 3426, 3428, 3458, 3460, 3530, 3531, 3535, 3541, 3542, 
  3543, 3544, 3552, 3570, 3572, 3633, 3634, 3636, 3643, 3655, 3663, 3761, 3762, 3764, 3773, 3784, 3790, 3864, 3866, 3893, 3894, 3895, 3896, 3897, 3898, 3902, 3904, 3953, 3973, 3974, 3976, 3981, 3992, 3993, 4029, 4038, 4039, 4139, 4159, 4182, 4186, 4190, 4193, 4194, 4197, 4199, 4206, 4209, 4213, 4226, 4238, 4239, 4240, 4250, 4254, 4957, 4960, 5906, 5909, 5938, 5941, 5970, 5972, 6002, 6004, 6068, 6100, 6109, 6110, 6155, 6158, 6277, 6279, 6313, 6314, 6432, 6444, 6448, 6460, 6679, 6684, 6741, 6751, 6752, 
  6781, 6783, 6784, 6832, 6847, 6912, 6917, 6964, 6981, 7019, 7028, 7040, 7043, 7073, 7086, 7142, 7156, 7204, 7224, 7376, 7379, 7380, 7401, 7405, 7406, 7412, 7413, 7415, 7418, 7616, 7674, 7675, 7680, 8400, 8433, 11503, 11506, 11647, 11648, 11744, 11776, 12330, 12336, 12441, 12443, 42607, 42611, 42612, 42622, 42654, 42656, 42736, 42738, 43010, 43011, 43014, 43015, 43019, 43020, 43043, 43048, 43136, 43138, 43188, 43206, 43232, 43250, 43263, 43264, 43302, 43310, 43335, 43348, 43392, 43396, 43443, 43457, 
  43493, 43494, 43561, 43575, 43587, 43588, 43596, 43598, 43643, 43646, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43755, 43760, 43765, 43767, 44003, 44011, 44012, 44014, 64286, 64287, 65024, 65040, 65056, 65072, 66045, 66046, 66272, 66273, 66422, 66427, 68097, 68100, 68101, 68103, 68108, 68112, 68152, 68155, 68159, 68160, 68325, 68327, 68900, 68904, 69446, 69457, 69632, 69635, 69688, 69703, 69759, 69763, 69808, 69819, 69888, 69891, 69927, 69941, 69957, 69959, 70003, 70004, 
  70016, 70019, 70067, 70081, 70089, 70093, 70188, 70200, 70206, 70207, 70367, 70379, 70400, 70404, 70459, 70461, 70462, 70469, 70471, 70473, 70475, 70478, 70487, 70488, 70498, 70500, 70502, 70509, 70512, 70517, 70709, 70727, 70750, 70751, 70832, 70852, 71087, 71094, 71096, 71105, 71132, 71134, 71216, 71233, 71339, 71352, 71453, 71468, 71724, 71739, 72145, 72152, 72154, 72161, 72164, 72165, 72193, 72203, 72243, 72250, 72251, 72255, 72263, 72264, 72273, 72284, 72330, 72346, 72751, 72759, 72760, 72768, 
  72850, 72872, 72873, 72887, 73009, 73015, 73018, 73019, 73020, 73022, 73023, 73030, 73031, 73032, 73098, 73103, 73104, 73106, 73107, 73112, 73459, 73463, 92912, 92917, 92976, 92983, 94031, 94032, 94033, 94088, 94095, 94099, 113821, 113823, 119141, 119146, 119149, 119155, 119163, 119171, 119173, 119180, 119210, 119214, 119362, 119365, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 
  122923, 123184, 123191, 123628, 123632, 125136, 125143, 125252, 125259, 917760, 918E3], Math_Symbol:[43, 44, 60, 63, 124, 125, 126, 127, 172, 173, 177, 178, 215, 216, 247, 248, 1014, 1015, 1542, 1545, 8260, 8261, 8274, 8275, 8314, 8317, 8330, 8333, 8472, 8473, 8512, 8517, 8523, 8524, 8592, 8597, 8602, 8604, 8608, 8609, 8611, 8612, 8614, 8615, 8622, 8623, 8654, 8656, 8658, 8659, 8660, 8661, 8692, 8960, 8992, 8994, 9084, 9085, 9115, 9140, 9180, 9186, 9655, 9656, 9665, 9666, 9720, 9728, 9839, 9840, 
  10176, 10181, 10183, 10214, 10224, 10240, 10496, 10627, 10649, 10712, 10716, 10748, 10750, 11008, 11056, 11077, 11079, 11085, 64297, 64298, 65122, 65123, 65124, 65127, 65291, 65292, 65308, 65311, 65372, 65373, 65374, 65375, 65506, 65507, 65513, 65517, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 126704, 126706], Modifier_Letter:[688, 706, 710, 722, 736, 741, 748, 749, 750, 751, 884, 
  885, 890, 891, 1369, 1370, 1600, 1601, 1765, 1767, 2036, 2038, 2042, 2043, 2074, 2075, 2084, 2085, 2088, 2089, 2417, 2418, 3654, 3655, 3782, 3783, 4348, 4349, 6103, 6104, 6211, 6212, 6823, 6824, 7288, 7294, 7468, 7531, 7544, 7545, 7579, 7616, 8305, 8306, 8319, 8320, 8336, 8349, 11388, 11390, 11631, 11632, 11823, 11824, 12293, 12294, 12337, 12342, 12347, 12348, 12445, 12447, 12540, 12543, 40981, 40982, 42232, 42238, 42508, 42509, 42623, 42624, 42652, 42654, 42775, 42784, 42864, 42865, 42888, 42889, 
  43E3, 43002, 43471, 43472, 43494, 43495, 43632, 43633, 43741, 43742, 43763, 43765, 43868, 43872, 65392, 65393, 65438, 65440, 92992, 92996, 94099, 94112, 94176, 94178, 94179, 94180, 123191, 123198, 125259, 125260], Modifier_Symbol:[94, 95, 96, 97, 168, 169, 175, 176, 180, 181, 184, 185, 706, 710, 722, 736, 741, 748, 749, 750, 751, 768, 885, 886, 900, 902, 8125, 8126, 8127, 8130, 8141, 8144, 8157, 8160, 8173, 8176, 8189, 8191, 12443, 12445, 42752, 42775, 42784, 42786, 42889, 42891, 43867, 43868, 
  64434, 64450, 65342, 65343, 65344, 65345, 65507, 65508, 127995, 128E3], Nonspacing_Mark:[768, 880, 1155, 1160, 1425, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1552, 1563, 1611, 1632, 1648, 1649, 1750, 1757, 1759, 1765, 1767, 1769, 1770, 1774, 1809, 1810, 1840, 1867, 1958, 1969, 2027, 2036, 2045, 2046, 2070, 2074, 2075, 2084, 2085, 2088, 2089, 2094, 2137, 2140, 2259, 2274, 2275, 2307, 2362, 2363, 2364, 2365, 2369, 2377, 2381, 2382, 2385, 2392, 2402, 2404, 2433, 2434, 2492, 2493, 2497, 
  2501, 2509, 2510, 2530, 2532, 2558, 2559, 2561, 2563, 2620, 2621, 2625, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2672, 2674, 2677, 2678, 2689, 2691, 2748, 2749, 2753, 2758, 2759, 2761, 2765, 2766, 2786, 2788, 2810, 2816, 2817, 2818, 2876, 2877, 2879, 2880, 2881, 2885, 2893, 2894, 2902, 2903, 2914, 2916, 2946, 2947, 3008, 3009, 3021, 3022, 3072, 3073, 3076, 3077, 3134, 3137, 3142, 3145, 3146, 3150, 3157, 3159, 3170, 3172, 3201, 3202, 3260, 3261, 3263, 3264, 3270, 3271, 3276, 3278, 3298, 3300, 3328, 
  3330, 3387, 3389, 3393, 3397, 3405, 3406, 3426, 3428, 3530, 3531, 3538, 3541, 3542, 3543, 3633, 3634, 3636, 3643, 3655, 3663, 3761, 3762, 3764, 3773, 3784, 3790, 3864, 3866, 3893, 3894, 3895, 3896, 3897, 3898, 3953, 3967, 3968, 3973, 3974, 3976, 3981, 3992, 3993, 4029, 4038, 4039, 4141, 4145, 4146, 4152, 4153, 4155, 4157, 4159, 4184, 4186, 4190, 4193, 4209, 4213, 4226, 4227, 4229, 4231, 4237, 4238, 4253, 4254, 4957, 4960, 5906, 5909, 5938, 5941, 5970, 5972, 6002, 6004, 6068, 6070, 6071, 6078, 6086, 
  6087, 6089, 6100, 6109, 6110, 6155, 6158, 6277, 6279, 6313, 6314, 6432, 6435, 6439, 6441, 6450, 6451, 6457, 6460, 6679, 6681, 6683, 6684, 6742, 6743, 6744, 6751, 6752, 6753, 6754, 6755, 6757, 6765, 6771, 6781, 6783, 6784, 6832, 6846, 6912, 6916, 6964, 6965, 6966, 6971, 6972, 6973, 6978, 6979, 7019, 7028, 7040, 7042, 7074, 7078, 7080, 7082, 7083, 7086, 7142, 7143, 7144, 7146, 7149, 7150, 7151, 7154, 7212, 7220, 7222, 7224, 7376, 7379, 7380, 7393, 7394, 7401, 7405, 7406, 7412, 7413, 7416, 7418, 7616, 
  7674, 7675, 7680, 8400, 8413, 8417, 8418, 8421, 8433, 11503, 11506, 11647, 11648, 11744, 11776, 12330, 12334, 12441, 12443, 42607, 42608, 42612, 42622, 42654, 42656, 42736, 42738, 43010, 43011, 43014, 43015, 43019, 43020, 43045, 43047, 43204, 43206, 43232, 43250, 43263, 43264, 43302, 43310, 43335, 43346, 43392, 43395, 43443, 43444, 43446, 43450, 43452, 43454, 43493, 43494, 43561, 43567, 43569, 43571, 43573, 43575, 43587, 43588, 43596, 43597, 43644, 43645, 43696, 43697, 43698, 43701, 43703, 43705, 
  43710, 43712, 43713, 43714, 43756, 43758, 43766, 43767, 44005, 44006, 44008, 44009, 44013, 44014, 64286, 64287, 65024, 65040, 65056, 65072, 66045, 66046, 66272, 66273, 66422, 66427, 68097, 68100, 68101, 68103, 68108, 68112, 68152, 68155, 68159, 68160, 68325, 68327, 68900, 68904, 69446, 69457, 69633, 69634, 69688, 69703, 69759, 69762, 69811, 69815, 69817, 69819, 69888, 69891, 69927, 69932, 69933, 69941, 70003, 70004, 70016, 70018, 70070, 70079, 70089, 70093, 70191, 70194, 70196, 70197, 70198, 70200, 
  70206, 70207, 70367, 70368, 70371, 70379, 70400, 70402, 70459, 70461, 70464, 70465, 70502, 70509, 70512, 70517, 70712, 70720, 70722, 70725, 70726, 70727, 70750, 70751, 70835, 70841, 70842, 70843, 70847, 70849, 70850, 70852, 71090, 71094, 71100, 71102, 71103, 71105, 71132, 71134, 71219, 71227, 71229, 71230, 71231, 71233, 71339, 71340, 71341, 71342, 71344, 71350, 71351, 71352, 71453, 71456, 71458, 71462, 71463, 71468, 71727, 71736, 71737, 71739, 72148, 72152, 72154, 72156, 72160, 72161, 72193, 72203, 
  72243, 72249, 72251, 72255, 72263, 72264, 72273, 72279, 72281, 72284, 72330, 72343, 72344, 72346, 72752, 72759, 72760, 72766, 72767, 72768, 72850, 72872, 72874, 72881, 72882, 72884, 72885, 72887, 73009, 73015, 73018, 73019, 73020, 73022, 73023, 73030, 73031, 73032, 73104, 73106, 73109, 73110, 73111, 73112, 73459, 73461, 92912, 92917, 92976, 92983, 94031, 94032, 94095, 94099, 113821, 113823, 119143, 119146, 119163, 119171, 119173, 119180, 119210, 119214, 119362, 119365, 121344, 121399, 121403, 121453, 
  121461, 121462, 121476, 121477, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123184, 123191, 123628, 123632, 125136, 125143, 125252, 125259, 917760, 918E3], Number:[48, 58, 178, 180, 185, 186, 188, 191, 1632, 1642, 1776, 1786, 1984, 1994, 2406, 2416, 2534, 2544, 2548, 2554, 2662, 2672, 2790, 2800, 2918, 2928, 2930, 2936, 3046, 3059, 3174, 3184, 3192, 3199, 3302, 3312, 3416, 3423, 3430, 3449, 3558, 3568, 3664, 3674, 3792, 3802, 3872, 
  3892, 4160, 4170, 4240, 4250, 4969, 4989, 5870, 5873, 6112, 6122, 6128, 6138, 6160, 6170, 6470, 6480, 6608, 6619, 6784, 6794, 6800, 6810, 6992, 7002, 7088, 7098, 7232, 7242, 7248, 7258, 8304, 8305, 8308, 8314, 8320, 8330, 8528, 8579, 8581, 8586, 9312, 9372, 9450, 9472, 10102, 10132, 11517, 11518, 12295, 12296, 12321, 12330, 12344, 12347, 12690, 12694, 12832, 12842, 12872, 12880, 12881, 12896, 12928, 12938, 12977, 12992, 42528, 42538, 42726, 42736, 43056, 43062, 43216, 43226, 43264, 43274, 43472, 
  43482, 43504, 43514, 43600, 43610, 44016, 44026, 65296, 65306, 65799, 65844, 65856, 65913, 65930, 65932, 66273, 66300, 66336, 66340, 66369, 66370, 66378, 66379, 66513, 66518, 66720, 66730, 67672, 67680, 67705, 67712, 67751, 67760, 67835, 67840, 67862, 67868, 68028, 68030, 68032, 68048, 68050, 68096, 68160, 68169, 68221, 68223, 68253, 68256, 68331, 68336, 68440, 68448, 68472, 68480, 68521, 68528, 68858, 68864, 68912, 68922, 69216, 69247, 69405, 69415, 69457, 69461, 69714, 69744, 69872, 69882, 69942, 
  69952, 70096, 70106, 70113, 70133, 70384, 70394, 70736, 70746, 70864, 70874, 71248, 71258, 71360, 71370, 71472, 71484, 71904, 71923, 72784, 72813, 73040, 73050, 73120, 73130, 73664, 73685, 74752, 74863, 92768, 92778, 93008, 93018, 93019, 93026, 93824, 93847, 119520, 119540, 119648, 119673, 120782, 120832, 123200, 123210, 123632, 123642, 125127, 125136, 125264, 125274, 126065, 126124, 126125, 126128, 126129, 126133, 126209, 126254, 126255, 126270, 127232, 127245], Open_Punctuation:[40, 41, 91, 92, 
  123, 124, 3898, 3899, 3900, 3901, 5787, 5788, 8218, 8219, 8222, 8223, 8261, 8262, 8317, 8318, 8333, 8334, 8968, 8969, 8970, 8971, 9001, 9002, 10088, 10089, 10090, 10091, 10092, 10093, 10094, 10095, 10096, 10097, 10098, 10099, 10100, 10101, 10181, 10182, 10214, 10215, 10216, 10217, 10218, 10219, 10220, 10221, 10222, 10223, 10627, 10628, 10629, 10630, 10631, 10632, 10633, 10634, 10635, 10636, 10637, 10638, 10639, 10640, 10641, 10642, 10643, 10644, 10645, 10646, 10647, 10648, 10712, 10713, 10714, 
  10715, 10748, 10749, 11810, 11811, 11812, 11813, 11814, 11815, 11816, 11817, 11842, 11843, 12296, 12297, 12298, 12299, 12300, 12301, 12302, 12303, 12304, 12305, 12308, 12309, 12310, 12311, 12312, 12313, 12314, 12315, 12317, 12318, 64831, 64832, 65047, 65048, 65077, 65078, 65079, 65080, 65081, 65082, 65083, 65084, 65085, 65086, 65087, 65088, 65089, 65090, 65091, 65092, 65095, 65096, 65113, 65114, 65115, 65116, 65117, 65118, 65288, 65289, 65339, 65340, 65371, 65372, 65375, 65376, 65378, 65379], Other:[0, 
  32, 127, 160, 173, 174, 888, 890, 896, 900, 907, 908, 909, 910, 930, 931, 1328, 1329, 1367, 1369, 1419, 1421, 1424, 1425, 1480, 1488, 1515, 1519, 1525, 1542, 1564, 1566, 1757, 1758, 1806, 1808, 1867, 1869, 1970, 1984, 2043, 2045, 2094, 2096, 2111, 2112, 2140, 2142, 2143, 2144, 2155, 2208, 2229, 2230, 2238, 2259, 2274, 2275, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2534, 2559, 2561, 2564, 
  2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2649, 2653, 2654, 2655, 2662, 2679, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2802, 2809, 2816, 2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2908, 2910, 2911, 2916, 
  2918, 2936, 2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 3014, 3017, 3018, 3022, 3024, 3025, 3031, 3032, 3046, 3067, 3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3160, 3163, 3168, 3172, 3174, 3184, 3191, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 3313, 3315, 3328, 3332, 
  3333, 3341, 3342, 3345, 3346, 3397, 3398, 3401, 3402, 3408, 3412, 3428, 3430, 3456, 3458, 3460, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3573, 3585, 3643, 3647, 3676, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3774, 3776, 3781, 3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808, 3840, 3912, 3913, 3949, 3953, 3992, 3993, 4029, 4030, 4045, 4046, 4059, 4096, 4294, 4295, 4296, 4301, 4302, 4304, 4681, 
  4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4989, 4992, 5018, 5024, 5110, 5112, 5118, 5120, 5789, 5792, 5881, 5888, 5901, 5902, 5909, 5920, 5943, 5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 6016, 6110, 6112, 6122, 6128, 6138, 6144, 6158, 6160, 6170, 6176, 6265, 6272, 6315, 6320, 6390, 6400, 6431, 6432, 6444, 6448, 6460, 6464, 6465, 6468, 6510, 6512, 6517, 
  6528, 6572, 6576, 6602, 6608, 6619, 6622, 6684, 6686, 6751, 6752, 6781, 6783, 6794, 6800, 6810, 6816, 6830, 6832, 6847, 6912, 6988, 6992, 7037, 7040, 7156, 7164, 7224, 7227, 7242, 7245, 7305, 7312, 7355, 7357, 7368, 7376, 7419, 7424, 7674, 7675, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8133, 8134, 8148, 8150, 8156, 8157, 8176, 8178, 8181, 8182, 8191, 8192, 8203, 8208, 8234, 8239, 8288, 8304, 8306, 8308, 8335, 8336, 8349, 
  8352, 8384, 8400, 8433, 8448, 8588, 8592, 9255, 9280, 9291, 9312, 11124, 11126, 11158, 11160, 11311, 11312, 11359, 11360, 11508, 11513, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11633, 11647, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11744, 11856, 11904, 11930, 11931, 12020, 12032, 12246, 12272, 12284, 12288, 12352, 12353, 12439, 12441, 12544, 12549, 12592, 12593, 12687, 12688, 12731, 12736, 12772, 12784, 
  12831, 12832, 13055, 13056, 19894, 19904, 40944, 40960, 42125, 42128, 42183, 42192, 42540, 42560, 42744, 42752, 42944, 42946, 42951, 42999, 43052, 43056, 43066, 43072, 43128, 43136, 43206, 43214, 43226, 43232, 43348, 43359, 43389, 43392, 43470, 43471, 43482, 43486, 43519, 43520, 43575, 43584, 43598, 43600, 43610, 43612, 43715, 43739, 43767, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43880, 43888, 44014, 44016, 44026, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 
  64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64450, 64467, 64832, 64848, 64912, 64914, 64968, 65008, 65022, 65024, 65050, 65056, 65107, 65108, 65127, 65128, 65132, 65136, 65141, 65142, 65277, 65281, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65504, 65511, 65512, 65519, 65532, 65534, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65792, 65795, 65799, 
  65844, 65847, 65935, 65936, 65948, 65952, 65953, 66E3, 66046, 66176, 66205, 66208, 66257, 66272, 66300, 66304, 66340, 66349, 66379, 66384, 66427, 66432, 66462, 66463, 66500, 66504, 66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 66927, 66928, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67671, 67743, 67751, 67760, 67808, 67827, 67828, 67830, 67835, 67868, 67871, 67898, 67903, 
  67904, 67968, 68024, 68028, 68048, 68050, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 68159, 68169, 68176, 68185, 68192, 68256, 68288, 68327, 68331, 68343, 68352, 68406, 68409, 68438, 68440, 68467, 68472, 68498, 68505, 68509, 68521, 68528, 68608, 68681, 68736, 68787, 68800, 68851, 68858, 68904, 68912, 68922, 69216, 69247, 69376, 69416, 69424, 69466, 69600, 69623, 69632, 69710, 69714, 69744, 69759, 69821, 69822, 69826, 69840, 69865, 69872, 69882, 69888, 69941, 69942, 
  69959, 69968, 70007, 70016, 70094, 70096, 70112, 70113, 70133, 70144, 70162, 70163, 70207, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70314, 70320, 70379, 70384, 70394, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70459, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 70488, 70493, 70500, 70502, 70509, 70512, 70517, 70656, 70746, 70747, 70748, 70749, 70752, 70784, 70856, 70864, 70874, 71040, 71094, 71096, 71134, 71168, 
  71237, 71248, 71258, 71264, 71277, 71296, 71353, 71360, 71370, 71424, 71451, 71453, 71468, 71472, 71488, 71680, 71740, 71840, 71923, 71935, 71936, 72096, 72104, 72106, 72152, 72154, 72165, 72192, 72264, 72272, 72355, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72774, 72784, 72813, 72816, 72848, 72850, 72872, 72873, 72887, 72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 73050, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 73107, 73113, 73120, 
  73130, 73440, 73465, 73664, 73714, 73727, 74650, 74752, 74863, 74864, 74869, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92768, 92778, 92782, 92784, 92880, 92910, 92912, 92918, 92928, 92998, 93008, 93018, 93019, 93026, 93027, 93048, 93053, 93072, 93760, 93851, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 
  113820, 113824, 118784, 119030, 119040, 119079, 119081, 119155, 119163, 119273, 119296, 119366, 119520, 119540, 119552, 119639, 119648, 119673, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120780, 120782, 121484, 121499, 121504, 121505, 
  121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123184, 123198, 123200, 123210, 123214, 123216, 123584, 123642, 123647, 123648, 124928, 125125, 125127, 125143, 125184, 125260, 125264, 125274, 125278, 125280, 126065, 126133, 126209, 126270, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 
  126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 126704, 126706, 126976, 127020, 127024, 127124, 127136, 127151, 127153, 127168, 127169, 127184, 127185, 127222, 127232, 127245, 127248, 127341, 127344, 127405, 127462, 127491, 127504, 
  127548, 127552, 127561, 127568, 127570, 127584, 127590, 127744, 128726, 128736, 128749, 128752, 128763, 128768, 128884, 128896, 128985, 128992, 129004, 129024, 129036, 129040, 129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129293, 129394, 129395, 129399, 129402, 129443, 129445, 129451, 129454, 129483, 129485, 129620, 129632, 129646, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 
  194560, 195102, 917760, 918E3, 1114112], Other_Letter:[170, 171, 186, 187, 443, 444, 448, 452, 660, 661, 1488, 1515, 1519, 1523, 1568, 1600, 1601, 1611, 1646, 1648, 1649, 1748, 1749, 1750, 1774, 1776, 1786, 1789, 1791, 1792, 1808, 1809, 1810, 1840, 1869, 1958, 1969, 1970, 1994, 2027, 2048, 2070, 2112, 2137, 2144, 2155, 2208, 2229, 2230, 2238, 2308, 2362, 2365, 2366, 2384, 2385, 2392, 2402, 2418, 2433, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2493, 2494, 2510, 2511, 
  2524, 2526, 2527, 2530, 2544, 2546, 2556, 2557, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2649, 2653, 2654, 2655, 2674, 2677, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2749, 2750, 2768, 2769, 2784, 2786, 2809, 2810, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2877, 2878, 2908, 2910, 2911, 2914, 2929, 2930, 2947, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 
  2984, 2987, 2990, 3002, 3024, 3025, 3077, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3134, 3160, 3163, 3168, 3170, 3200, 3201, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3261, 3262, 3294, 3295, 3296, 3298, 3313, 3315, 3333, 3341, 3342, 3345, 3346, 3387, 3389, 3390, 3406, 3407, 3412, 3415, 3423, 3426, 3450, 3456, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3585, 3633, 3634, 3636, 3648, 3654, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3761, 
  3762, 3764, 3773, 3774, 3776, 3781, 3804, 3808, 3840, 3841, 3904, 3912, 3913, 3949, 3976, 3981, 4096, 4139, 4159, 4160, 4176, 4182, 4186, 4190, 4193, 4194, 4197, 4199, 4206, 4209, 4213, 4226, 4238, 4239, 4352, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4992, 5008, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5873, 5881, 5888, 5901, 5902, 5906, 5920, 5938, 
  5952, 5970, 5984, 5997, 5998, 6001, 6016, 6068, 6108, 6109, 6176, 6211, 6212, 6265, 6272, 6277, 6279, 6313, 6314, 6315, 6320, 6390, 6400, 6431, 6480, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6656, 6679, 6688, 6741, 6917, 6964, 6981, 6988, 7043, 7073, 7086, 7088, 7098, 7142, 7168, 7204, 7245, 7248, 7258, 7288, 7401, 7405, 7406, 7412, 7413, 7415, 7418, 7419, 8501, 8505, 11568, 11624, 11648, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 
  11743, 12294, 12295, 12348, 12349, 12353, 12439, 12447, 12448, 12449, 12539, 12543, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 40981, 40982, 42125, 42192, 42232, 42240, 42508, 42512, 42528, 42538, 42540, 42606, 42607, 42656, 42726, 42895, 42896, 42999, 43E3, 43003, 43010, 43011, 43014, 43015, 43019, 43020, 43043, 43072, 43124, 43138, 43188, 43250, 43256, 43259, 43260, 43261, 43263, 43274, 43302, 43312, 43335, 43360, 43389, 43396, 43443, 43488, 
  43493, 43495, 43504, 43514, 43519, 43520, 43561, 43584, 43587, 43588, 43596, 43616, 43632, 43633, 43639, 43642, 43643, 43646, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43715, 43739, 43741, 43744, 43755, 43762, 43763, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43968, 44003, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64285, 64286, 64287, 64297, 64298, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 
  64434, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65020, 65136, 65141, 65142, 65277, 65382, 65392, 65393, 65438, 65440, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 66176, 66205, 66208, 66257, 66304, 66336, 66349, 66369, 66370, 66378, 66384, 66422, 66432, 66462, 66464, 66500, 66504, 66512, 66640, 66718, 66816, 66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 
  67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68097, 68112, 68116, 68117, 68120, 68121, 68150, 68192, 68221, 68224, 68253, 68288, 68296, 68297, 68325, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68864, 68900, 69376, 69405, 69415, 69416, 69424, 69446, 69600, 69623, 69635, 69688, 69763, 69808, 69840, 69865, 69891, 69927, 69956, 
  69957, 69968, 70003, 70006, 70007, 70019, 70067, 70081, 70085, 70106, 70107, 70108, 70109, 70144, 70162, 70163, 70188, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 70320, 70367, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70461, 70462, 70480, 70481, 70493, 70498, 70656, 70709, 70727, 70731, 70751, 70752, 70784, 70832, 70852, 70854, 70855, 70856, 71040, 71087, 71128, 71132, 71168, 71216, 71236, 71237, 71296, 71339, 71352, 71353, 71424, 
  71451, 71680, 71724, 71935, 71936, 72096, 72104, 72106, 72145, 72161, 72162, 72163, 72164, 72192, 72193, 72203, 72243, 72250, 72251, 72272, 72273, 72284, 72330, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72751, 72768, 72769, 72818, 72848, 72960, 72967, 72968, 72970, 72971, 73009, 73030, 73031, 73056, 73062, 73063, 73065, 73066, 73098, 73112, 73113, 73440, 73459, 73728, 74650, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92880, 92910, 92928, 92976, 93027, 93048, 93053, 
  93072, 93952, 94027, 94032, 94033, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 123136, 123181, 123214, 123215, 123584, 123628, 124928, 125125, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 
  126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102], Other_Number:[178, 180, 185, 186, 188, 191, 2548, 2554, 2930, 2936, 3056, 3059, 3192, 3199, 3416, 3423, 3440, 3449, 3882, 
  3892, 4969, 4989, 6128, 6138, 6618, 6619, 8304, 8305, 8308, 8314, 8320, 8330, 8528, 8544, 8585, 8586, 9312, 9372, 9450, 9472, 10102, 10132, 11517, 11518, 12690, 12694, 12832, 12842, 12872, 12880, 12881, 12896, 12928, 12938, 12977, 12992, 43056, 43062, 65799, 65844, 65909, 65913, 65930, 65932, 66273, 66300, 66336, 66340, 67672, 67680, 67705, 67712, 67751, 67760, 67835, 67840, 67862, 67868, 68028, 68030, 68032, 68048, 68050, 68096, 68160, 68169, 68221, 68223, 68253, 68256, 68331, 68336, 68440, 68448, 
  68472, 68480, 68521, 68528, 68858, 68864, 69216, 69247, 69405, 69415, 69457, 69461, 69714, 69734, 70113, 70133, 71482, 71484, 71914, 71923, 72794, 72813, 73664, 73685, 93019, 93026, 93824, 93847, 119520, 119540, 119648, 119673, 125127, 125136, 126065, 126124, 126125, 126128, 126129, 126133, 126209, 126254, 126255, 126270, 127232, 127245], Other_Punctuation:[33, 36, 37, 40, 42, 43, 44, 45, 46, 48, 58, 60, 63, 65, 92, 93, 161, 162, 167, 168, 182, 184, 191, 192, 894, 895, 903, 904, 1370, 1376, 1417, 
  1418, 1472, 1473, 1475, 1476, 1478, 1479, 1523, 1525, 1545, 1547, 1548, 1550, 1563, 1564, 1566, 1568, 1642, 1646, 1748, 1749, 1792, 1806, 2039, 2042, 2096, 2111, 2142, 2143, 2404, 2406, 2416, 2417, 2557, 2558, 2678, 2679, 2800, 2801, 3191, 3192, 3204, 3205, 3572, 3573, 3663, 3664, 3674, 3676, 3844, 3859, 3860, 3861, 3973, 3974, 4048, 4053, 4057, 4059, 4170, 4176, 4347, 4348, 4960, 4969, 5742, 5743, 5867, 5870, 5941, 5943, 6100, 6103, 6104, 6107, 6144, 6150, 6151, 6155, 6468, 6470, 6686, 6688, 6816, 
  6823, 6824, 6830, 7002, 7009, 7164, 7168, 7227, 7232, 7294, 7296, 7360, 7368, 7379, 7380, 8214, 8216, 8224, 8232, 8240, 8249, 8251, 8255, 8257, 8260, 8263, 8274, 8275, 8276, 8277, 8287, 11513, 11517, 11518, 11520, 11632, 11633, 11776, 11778, 11782, 11785, 11787, 11788, 11790, 11799, 11800, 11802, 11803, 11804, 11806, 11808, 11818, 11823, 11824, 11834, 11836, 11840, 11841, 11842, 11843, 11856, 12289, 12292, 12349, 12350, 12539, 12540, 42238, 42240, 42509, 42512, 42611, 42612, 42622, 42623, 42738, 
  42744, 43124, 43128, 43214, 43216, 43256, 43259, 43260, 43261, 43310, 43312, 43359, 43360, 43457, 43470, 43486, 43488, 43612, 43616, 43742, 43744, 43760, 43762, 44011, 44012, 65040, 65047, 65049, 65050, 65072, 65073, 65093, 65095, 65097, 65101, 65104, 65107, 65108, 65112, 65119, 65122, 65128, 65129, 65130, 65132, 65281, 65284, 65285, 65288, 65290, 65291, 65292, 65293, 65294, 65296, 65306, 65308, 65311, 65313, 65340, 65341, 65377, 65378, 65380, 65382, 65792, 65795, 66463, 66464, 66512, 66513, 66927, 
  66928, 67671, 67672, 67871, 67872, 67903, 67904, 68176, 68185, 68223, 68224, 68336, 68343, 68409, 68416, 68505, 68509, 69461, 69466, 69703, 69710, 69819, 69821, 69822, 69826, 69952, 69956, 70004, 70006, 70085, 70089, 70093, 70094, 70107, 70108, 70109, 70112, 70200, 70206, 70313, 70314, 70731, 70736, 70747, 70748, 70749, 70750, 70854, 70855, 71105, 71128, 71233, 71236, 71264, 71277, 71484, 71487, 71739, 71740, 72162, 72163, 72255, 72263, 72346, 72349, 72350, 72355, 72769, 72774, 72816, 72818, 73463, 
  73465, 73727, 73728, 74864, 74869, 92782, 92784, 92917, 92918, 92983, 92988, 92996, 92997, 93847, 93851, 94178, 94179, 113823, 113824, 121479, 121484, 125278, 125280], Other_Symbol:[166, 167, 169, 170, 174, 175, 176, 177, 1154, 1155, 1421, 1423, 1550, 1552, 1758, 1759, 1769, 1770, 1789, 1791, 2038, 2039, 2554, 2555, 2928, 2929, 3059, 3065, 3066, 3067, 3199, 3200, 3407, 3408, 3449, 3450, 3841, 3844, 3859, 3860, 3861, 3864, 3866, 3872, 3892, 3893, 3894, 3895, 3896, 3897, 4030, 4038, 4039, 4045, 4046, 
  4048, 4053, 4057, 4254, 4256, 5008, 5018, 5741, 5742, 6464, 6465, 6622, 6656, 7009, 7019, 7028, 7037, 8448, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8495, 8506, 8508, 8522, 8523, 8524, 8526, 8527, 8528, 8586, 8588, 8597, 8602, 8604, 8608, 8609, 8611, 8612, 8614, 8615, 8622, 8623, 8654, 8656, 8658, 8659, 8660, 8661, 8692, 8960, 8968, 8972, 8992, 8994, 9001, 9003, 9084, 9085, 9115, 9140, 9180, 9186, 9255, 9280, 9291, 9372, 9450, 9472, 
  9655, 9656, 9665, 9666, 9720, 9728, 9839, 9840, 10088, 10132, 10176, 10240, 10496, 11008, 11056, 11077, 11079, 11085, 11124, 11126, 11158, 11160, 11264, 11493, 11499, 11904, 11930, 11931, 12020, 12032, 12246, 12272, 12284, 12292, 12293, 12306, 12308, 12320, 12321, 12342, 12344, 12350, 12352, 12688, 12690, 12694, 12704, 12736, 12772, 12800, 12831, 12842, 12872, 12880, 12881, 12896, 12928, 12938, 12977, 12992, 13055, 13056, 13312, 19904, 19968, 42128, 42183, 43048, 43052, 43062, 43064, 43065, 43066, 
  43639, 43642, 65021, 65022, 65508, 65509, 65512, 65513, 65517, 65519, 65532, 65534, 65847, 65856, 65913, 65930, 65932, 65935, 65936, 65948, 65952, 65953, 66E3, 66045, 67703, 67705, 68296, 68297, 71487, 71488, 73685, 73693, 73697, 73714, 92988, 92992, 92997, 92998, 113820, 113821, 118784, 119030, 119040, 119079, 119081, 119141, 119146, 119149, 119171, 119173, 119180, 119210, 119214, 119273, 119296, 119362, 119365, 119366, 119552, 119639, 120832, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 
  121477, 121479, 123215, 123216, 126124, 126125, 126254, 126255, 126976, 127020, 127024, 127124, 127136, 127151, 127153, 127168, 127169, 127184, 127185, 127222, 127248, 127341, 127344, 127405, 127462, 127491, 127504, 127548, 127552, 127561, 127568, 127570, 127584, 127590, 127744, 127995, 128E3, 128726, 128736, 128749, 128752, 128763, 128768, 128884, 128896, 128985, 128992, 129004, 129024, 129036, 129040, 129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129293, 129394, 129395, 
  129399, 129402, 129443, 129445, 129451, 129454, 129483, 129485, 129620, 129632, 129646, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686], Paragraph_Separator:[8233, 8234], Private_Use:[57344, 63744, 983040, 1048574, 1048576, 1114110], Punctuation:[33, 36, 37, 43, 44, 48, 58, 60, 63, 65, 91, 94, 95, 96, 123, 124, 125, 126, 161, 162, 167, 168, 171, 172, 182, 184, 187, 188, 191, 192, 894, 895, 903, 904, 1370, 1376, 1417, 1419, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1523, 1525, 
  1545, 1547, 1548, 1550, 1563, 1564, 1566, 1568, 1642, 1646, 1748, 1749, 1792, 1806, 2039, 2042, 2096, 2111, 2142, 2143, 2404, 2406, 2416, 2417, 2557, 2558, 2678, 2679, 2800, 2801, 3191, 3192, 3204, 3205, 3572, 3573, 3663, 3664, 3674, 3676, 3844, 3859, 3860, 3861, 3898, 3902, 3973, 3974, 4048, 4053, 4057, 4059, 4170, 4176, 4347, 4348, 4960, 4969, 5120, 5121, 5742, 5743, 5787, 5789, 5867, 5870, 5941, 5943, 6100, 6103, 6104, 6107, 6144, 6155, 6468, 6470, 6686, 6688, 6816, 6823, 6824, 6830, 7002, 7009, 
  7164, 7168, 7227, 7232, 7294, 7296, 7360, 7368, 7379, 7380, 8208, 8232, 8240, 8260, 8261, 8274, 8275, 8287, 8317, 8319, 8333, 8335, 8968, 8972, 9001, 9003, 10088, 10102, 10181, 10183, 10214, 10224, 10627, 10649, 10712, 10716, 10748, 10750, 11513, 11517, 11518, 11520, 11632, 11633, 11776, 11823, 11824, 11856, 12289, 12292, 12296, 12306, 12308, 12320, 12336, 12337, 12349, 12350, 12448, 12449, 12539, 12540, 42238, 42240, 42509, 42512, 42611, 42612, 42622, 42623, 42738, 42744, 43124, 43128, 43214, 
  43216, 43256, 43259, 43260, 43261, 43310, 43312, 43359, 43360, 43457, 43470, 43486, 43488, 43612, 43616, 43742, 43744, 43760, 43762, 44011, 44012, 64830, 64832, 65040, 65050, 65072, 65107, 65108, 65122, 65123, 65124, 65128, 65129, 65130, 65132, 65281, 65284, 65285, 65291, 65292, 65296, 65306, 65308, 65311, 65313, 65339, 65342, 65343, 65344, 65371, 65372, 65373, 65374, 65375, 65382, 65792, 65795, 66463, 66464, 66512, 66513, 66927, 66928, 67671, 67672, 67871, 67872, 67903, 67904, 68176, 68185, 68223, 
  68224, 68336, 68343, 68409, 68416, 68505, 68509, 69461, 69466, 69703, 69710, 69819, 69821, 69822, 69826, 69952, 69956, 70004, 70006, 70085, 70089, 70093, 70094, 70107, 70108, 70109, 70112, 70200, 70206, 70313, 70314, 70731, 70736, 70747, 70748, 70749, 70750, 70854, 70855, 71105, 71128, 71233, 71236, 71264, 71277, 71484, 71487, 71739, 71740, 72162, 72163, 72255, 72263, 72346, 72349, 72350, 72355, 72769, 72774, 72816, 72818, 73463, 73465, 73727, 73728, 74864, 74869, 92782, 92784, 92917, 92918, 92983, 
  92988, 92996, 92997, 93847, 93851, 94178, 94179, 113823, 113824, 121479, 121484, 125278, 125280], Separator:[32, 33, 160, 161, 5760, 5761, 8192, 8203, 8232, 8234, 8239, 8240, 8287, 8288, 12288, 12289], Space_Separator:[32, 33, 160, 161, 5760, 5761, 8192, 8203, 8239, 8240, 8287, 8288, 12288, 12289], Spacing_Mark:[2307, 2308, 2363, 2364, 2366, 2369, 2377, 2381, 2382, 2384, 2434, 2436, 2494, 2497, 2503, 2505, 2507, 2509, 2519, 2520, 2563, 2564, 2622, 2625, 2691, 2692, 2750, 2753, 2761, 2762, 2763, 
  2765, 2818, 2820, 2878, 2879, 2880, 2881, 2887, 2889, 2891, 2893, 2903, 2904, 3006, 3008, 3009, 3011, 3014, 3017, 3018, 3021, 3031, 3032, 3073, 3076, 3137, 3141, 3202, 3204, 3262, 3263, 3264, 3269, 3271, 3273, 3274, 3276, 3285, 3287, 3330, 3332, 3390, 3393, 3398, 3401, 3402, 3405, 3415, 3416, 3458, 3460, 3535, 3538, 3544, 3552, 3570, 3572, 3902, 3904, 3967, 3968, 4139, 4141, 4145, 4146, 4152, 4153, 4155, 4157, 4182, 4184, 4194, 4197, 4199, 4206, 4227, 4229, 4231, 4237, 4239, 4240, 4250, 4253, 6070, 
  6071, 6078, 6086, 6087, 6089, 6435, 6439, 6441, 6444, 6448, 6450, 6451, 6457, 6681, 6683, 6741, 6742, 6743, 6744, 6753, 6754, 6755, 6757, 6765, 6771, 6916, 6917, 6965, 6966, 6971, 6972, 6973, 6978, 6979, 6981, 7042, 7043, 7073, 7074, 7078, 7080, 7082, 7083, 7143, 7144, 7146, 7149, 7150, 7151, 7154, 7156, 7204, 7212, 7220, 7222, 7393, 7394, 7415, 7416, 12334, 12336, 43043, 43045, 43047, 43048, 43136, 43138, 43188, 43204, 43346, 43348, 43395, 43396, 43444, 43446, 43450, 43452, 43454, 43457, 43567, 
  43569, 43571, 43573, 43597, 43598, 43643, 43644, 43645, 43646, 43755, 43756, 43758, 43760, 43765, 43766, 44003, 44005, 44006, 44008, 44009, 44011, 44012, 44013, 69632, 69633, 69634, 69635, 69762, 69763, 69808, 69811, 69815, 69817, 69932, 69933, 69957, 69959, 70018, 70019, 70067, 70070, 70079, 70081, 70188, 70191, 70194, 70196, 70197, 70198, 70368, 70371, 70402, 70404, 70462, 70464, 70465, 70469, 70471, 70473, 70475, 70478, 70487, 70488, 70498, 70500, 70709, 70712, 70720, 70722, 70725, 70726, 70832, 
  70835, 70841, 70842, 70843, 70847, 70849, 70850, 71087, 71090, 71096, 71100, 71102, 71103, 71216, 71219, 71227, 71229, 71230, 71231, 71340, 71341, 71342, 71344, 71350, 71351, 71456, 71458, 71462, 71463, 71724, 71727, 71736, 71737, 72145, 72148, 72156, 72160, 72164, 72165, 72249, 72250, 72279, 72281, 72343, 72344, 72751, 72752, 72766, 72767, 72873, 72874, 72881, 72882, 72884, 72885, 73098, 73103, 73107, 73109, 73110, 73111, 73461, 73463, 94033, 94088, 119141, 119143, 119149, 119155], Surrogate:[55296, 
  57344], Symbol:[36, 37, 43, 44, 60, 63, 94, 95, 96, 97, 124, 125, 126, 127, 162, 167, 168, 170, 172, 173, 174, 178, 180, 181, 184, 185, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 768, 885, 886, 900, 902, 1014, 1015, 1154, 1155, 1421, 1424, 1542, 1545, 1547, 1548, 1550, 1552, 1758, 1759, 1769, 1770, 1789, 1791, 2038, 2039, 2046, 2048, 2546, 2548, 2554, 2556, 2801, 2802, 2928, 2929, 3059, 3067, 3199, 3200, 3407, 3408, 3449, 3450, 3647, 3648, 3841, 3844, 3859, 3860, 3861, 3864, 
  3866, 3872, 3892, 3893, 3894, 3895, 3896, 3897, 4030, 4038, 4039, 4045, 4046, 4048, 4053, 4057, 4254, 4256, 5008, 5018, 5741, 5742, 6107, 6108, 6464, 6465, 6622, 6656, 7009, 7019, 7028, 7037, 8125, 8126, 8127, 8130, 8141, 8144, 8157, 8160, 8173, 8176, 8189, 8191, 8260, 8261, 8274, 8275, 8314, 8317, 8330, 8333, 8352, 8384, 8448, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8473, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8495, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8528, 8586, 8588, 
  8592, 8968, 8972, 9001, 9003, 9255, 9280, 9291, 9372, 9450, 9472, 10088, 10132, 10181, 10183, 10214, 10224, 10627, 10649, 10712, 10716, 10748, 10750, 11124, 11126, 11158, 11160, 11264, 11493, 11499, 11904, 11930, 11931, 12020, 12032, 12246, 12272, 12284, 12292, 12293, 12306, 12308, 12320, 12321, 12342, 12344, 12350, 12352, 12443, 12445, 12688, 12690, 12694, 12704, 12736, 12772, 12800, 12831, 12842, 12872, 12880, 12881, 12896, 12928, 12938, 12977, 12992, 13055, 13056, 13312, 19904, 19968, 42128, 
  42183, 42752, 42775, 42784, 42786, 42889, 42891, 43048, 43052, 43062, 43066, 43639, 43642, 43867, 43868, 64297, 64298, 64434, 64450, 65020, 65022, 65122, 65123, 65124, 65127, 65129, 65130, 65284, 65285, 65291, 65292, 65308, 65311, 65342, 65343, 65344, 65345, 65372, 65373, 65374, 65375, 65504, 65511, 65512, 65519, 65532, 65534, 65847, 65856, 65913, 65930, 65932, 65935, 65936, 65948, 65952, 65953, 66E3, 66045, 67703, 67705, 68296, 68297, 71487, 71488, 73685, 73714, 92988, 92992, 92997, 92998, 113820, 
  113821, 118784, 119030, 119040, 119079, 119081, 119141, 119146, 119149, 119171, 119173, 119180, 119210, 119214, 119273, 119296, 119362, 119365, 119366, 119552, 119639, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120832, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121479, 123215, 123216, 123647, 123648, 126124, 126125, 126128, 126129, 126254, 126255, 126704, 126706, 
  126976, 127020, 127024, 127124, 127136, 127151, 127153, 127168, 127169, 127184, 127185, 127222, 127248, 127341, 127344, 127405, 127462, 127491, 127504, 127548, 127552, 127561, 127568, 127570, 127584, 127590, 127744, 128726, 128736, 128749, 128752, 128763, 128768, 128884, 128896, 128985, 128992, 129004, 129024, 129036, 129040, 129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129293, 129394, 129395, 129399, 129402, 129443, 129445, 129451, 129454, 129483, 129485, 129620, 129632, 
  129646, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686], Titlecase_Letter:[453, 454, 456, 457, 459, 460, 498, 499, 8072, 8080, 8088, 8096, 8104, 8112, 8124, 8125, 8140, 8141, 8188, 8189], Unassigned:[888, 890, 896, 900, 907, 908, 909, 910, 930, 931, 1328, 1329, 1367, 1369, 1419, 1421, 1424, 1425, 1480, 1488, 1515, 1519, 1525, 1536, 1565, 1566, 1806, 1807, 1867, 1869, 1970, 1984, 2043, 2045, 2094, 2096, 2111, 2112, 2140, 2142, 2143, 2144, 2155, 2208, 2229, 2230, 2238, 2259, 2436, 
  2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2534, 2559, 2561, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2649, 2653, 2654, 2655, 2662, 2679, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2802, 
  2809, 2816, 2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2908, 2910, 2911, 2916, 2918, 2936, 2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 3014, 3017, 3018, 3022, 3024, 3025, 3031, 3032, 3046, 3067, 3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3160, 3163, 3168, 3172, 3174, 3184, 
  3191, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 3313, 3315, 3328, 3332, 3333, 3341, 3342, 3345, 3346, 3397, 3398, 3401, 3402, 3408, 3412, 3428, 3430, 3456, 3458, 3460, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3573, 3585, 3643, 3647, 3676, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3774, 3776, 3781, 
  3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808, 3840, 3912, 3913, 3949, 3953, 3992, 3993, 4029, 4030, 4045, 4046, 4059, 4096, 4294, 4295, 4296, 4301, 4302, 4304, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4989, 4992, 5018, 5024, 5110, 5112, 5118, 5120, 5789, 5792, 5881, 5888, 5901, 5902, 5909, 5920, 5943, 5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 
  6016, 6110, 6112, 6122, 6128, 6138, 6144, 6159, 6160, 6170, 6176, 6265, 6272, 6315, 6320, 6390, 6400, 6431, 6432, 6444, 6448, 6460, 6464, 6465, 6468, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6608, 6619, 6622, 6684, 6686, 6751, 6752, 6781, 6783, 6794, 6800, 6810, 6816, 6830, 6832, 6847, 6912, 6988, 6992, 7037, 7040, 7156, 7164, 7224, 7227, 7242, 7245, 7305, 7312, 7355, 7357, 7368, 7376, 7419, 7424, 7674, 7675, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 
  8031, 8062, 8064, 8117, 8118, 8133, 8134, 8148, 8150, 8156, 8157, 8176, 8178, 8181, 8182, 8191, 8192, 8293, 8294, 8306, 8308, 8335, 8336, 8349, 8352, 8384, 8400, 8433, 8448, 8588, 8592, 9255, 9280, 9291, 9312, 11124, 11126, 11158, 11160, 11311, 11312, 11359, 11360, 11508, 11513, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11633, 11647, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11744, 11856, 11904, 11930, 11931, 
  12020, 12032, 12246, 12272, 12284, 12288, 12352, 12353, 12439, 12441, 12544, 12549, 12592, 12593, 12687, 12688, 12731, 12736, 12772, 12784, 12831, 12832, 13055, 13056, 19894, 19904, 40944, 40960, 42125, 42128, 42183, 42192, 42540, 42560, 42744, 42752, 42944, 42946, 42951, 42999, 43052, 43056, 43066, 43072, 43128, 43136, 43206, 43214, 43226, 43232, 43348, 43359, 43389, 43392, 43470, 43471, 43482, 43486, 43519, 43520, 43575, 43584, 43598, 43600, 43610, 43612, 43715, 43739, 43767, 43777, 43783, 43785, 
  43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43880, 43888, 44014, 44016, 44026, 44032, 55204, 55216, 55239, 55243, 55292, 55296, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64450, 64467, 64832, 64848, 64912, 64914, 64968, 65008, 65022, 65024, 65050, 65056, 65107, 65108, 65127, 65128, 65132, 65136, 65141, 65142, 65277, 65279, 65280, 65281, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65504, 
  65511, 65512, 65519, 65529, 65534, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65792, 65795, 65799, 65844, 65847, 65935, 65936, 65948, 65952, 65953, 66E3, 66046, 66176, 66205, 66208, 66257, 66272, 66300, 66304, 66340, 66349, 66379, 66384, 66427, 66432, 66462, 66463, 66500, 66504, 66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 66927, 66928, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 
  67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67671, 67743, 67751, 67760, 67808, 67827, 67828, 67830, 67835, 67868, 67871, 67898, 67903, 67904, 67968, 68024, 68028, 68048, 68050, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 68159, 68169, 68176, 68185, 68192, 68256, 68288, 68327, 68331, 68343, 68352, 68406, 68409, 68438, 68440, 68467, 68472, 68498, 68505, 68509, 68521, 68528, 68608, 68681, 68736, 68787, 68800, 68851, 68858, 68904, 68912, 68922, 69216, 
  69247, 69376, 69416, 69424, 69466, 69600, 69623, 69632, 69710, 69714, 69744, 69759, 69826, 69837, 69838, 69840, 69865, 69872, 69882, 69888, 69941, 69942, 69959, 69968, 70007, 70016, 70094, 70096, 70112, 70113, 70133, 70144, 70162, 70163, 70207, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70314, 70320, 70379, 70384, 70394, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70459, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 
  70488, 70493, 70500, 70502, 70509, 70512, 70517, 70656, 70746, 70747, 70748, 70749, 70752, 70784, 70856, 70864, 70874, 71040, 71094, 71096, 71134, 71168, 71237, 71248, 71258, 71264, 71277, 71296, 71353, 71360, 71370, 71424, 71451, 71453, 71468, 71472, 71488, 71680, 71740, 71840, 71923, 71935, 71936, 72096, 72104, 72106, 72152, 72154, 72165, 72192, 72264, 72272, 72355, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72774, 72784, 72813, 72816, 72848, 72850, 72872, 72873, 72887, 72960, 72967, 72968, 
  72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 73050, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 73107, 73113, 73120, 73130, 73440, 73465, 73664, 73714, 73727, 74650, 74752, 74863, 74864, 74869, 74880, 75076, 77824, 78895, 78896, 78905, 82944, 83527, 92160, 92729, 92736, 92767, 92768, 92778, 92782, 92784, 92880, 92910, 92912, 92918, 92928, 92998, 93008, 93018, 93019, 93026, 93027, 93048, 93053, 93072, 93760, 93851, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 
  94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 113820, 113828, 118784, 119030, 119040, 119079, 119081, 119273, 119296, 119366, 119520, 119540, 119552, 119639, 119648, 119673, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 
  120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120780, 120782, 121484, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123184, 123198, 123200, 123210, 123214, 123216, 123584, 123642, 123647, 123648, 124928, 125125, 125127, 125143, 125184, 125260, 125264, 125274, 125278, 125280, 126065, 126133, 126209, 126270, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 
  126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 126704, 126706, 126976, 127020, 
  127024, 127124, 127136, 127151, 127153, 127168, 127169, 127184, 127185, 127222, 127232, 127245, 127248, 127341, 127344, 127405, 127462, 127491, 127504, 127548, 127552, 127561, 127568, 127570, 127584, 127590, 127744, 128726, 128736, 128749, 128752, 128763, 128768, 128884, 128896, 128985, 128992, 129004, 129024, 129036, 129040, 129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129293, 129394, 129395, 129399, 129402, 129443, 129445, 129451, 129454, 129483, 129485, 129620, 129632, 
  129646, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102, 917505, 917506, 917536, 917632, 917760, 918E3, 983040, 1048574, 1048576, 1114110, 1114112], Uppercase_Letter:[65, 91, 192, 215, 216, 223, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 
  295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 385, 387, 388, 389, 390, 392, 393, 396, 398, 402, 403, 405, 406, 409, 412, 
  414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 426, 428, 429, 430, 432, 433, 436, 437, 438, 439, 441, 444, 445, 452, 453, 455, 456, 458, 459, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 498, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 
  537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 570, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 880, 881, 882, 883, 886, 887, 895, 896, 902, 903, 904, 907, 908, 909, 910, 912, 913, 930, 931, 940, 975, 976, 978, 981, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1012, 1013, 1015, 1016, 1017, 1019, 1021, 
  1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 
  1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 
  1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1329, 1367, 4256, 4294, 4295, 4296, 4301, 4302, 5024, 5110, 7312, 7355, 7357, 7360, 7680, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 
  7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 
  7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7838, 7839, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 
  7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 7960, 7966, 7976, 7984, 7992, 8E3, 8008, 8014, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8040, 8048, 8120, 8124, 8136, 8140, 8152, 8156, 8168, 8173, 8184, 8188, 8450, 8451, 8455, 8456, 8459, 8462, 8464, 8467, 8469, 8470, 8473, 8478, 8484, 
  8485, 8486, 8487, 8488, 8489, 8490, 8494, 8496, 8500, 8510, 8512, 8517, 8518, 8579, 8580, 11264, 11311, 11360, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11377, 11378, 11379, 11381, 11382, 11390, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 
  11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11499, 11500, 11501, 11502, 11506, 11507, 42560, 42561, 42562, 42563, 42564, 42565, 42566, 
  42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 42601, 42602, 42603, 42604, 42605, 42624, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42786, 42787, 42788, 42789, 42790, 
  42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42802, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42873, 
  42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42891, 42892, 42893, 42894, 42896, 42897, 42898, 42899, 42902, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42927, 42928, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42946, 42947, 42948, 42951, 65313, 65339, 66560, 66600, 66736, 66772, 68736, 68787, 71840, 71872, 93760, 93792, 119808, 
  119834, 119860, 119886, 119912, 119938, 119964, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119990, 120016, 120042, 120068, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120120, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120172, 120198, 120224, 120250, 120276, 120302, 120328, 120354, 120380, 120406, 120432, 120458, 120488, 120513, 120546, 120571, 120604, 120629, 120662, 120687, 120720, 120745, 120778, 120779, 125184, 125218]};
  var pd = {ASCII:[0, 128], ASCII_Hex_Digit:[48, 58, 65, 71, 97, 103], Alphabetic:[65, 91, 97, 123, 170, 171, 181, 182, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 837, 838, 880, 885, 886, 888, 890, 894, 895, 896, 902, 903, 904, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1456, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1488, 1515, 1519, 1523, 1552, 1563, 1568, 1624, 1625, 1632, 1646, 1748, 1749, 1757, 
  1761, 1769, 1773, 1776, 1786, 1789, 1791, 1792, 1808, 1856, 1869, 1970, 1994, 2027, 2036, 2038, 2042, 2043, 2048, 2072, 2074, 2093, 2112, 2137, 2144, 2155, 2208, 2229, 2230, 2238, 2260, 2272, 2275, 2282, 2288, 2364, 2365, 2381, 2382, 2385, 2389, 2404, 2417, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2493, 2501, 2503, 2505, 2507, 2509, 2510, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2544, 2546, 2556, 2557, 2561, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 
  2610, 2612, 2613, 2615, 2616, 2618, 2622, 2627, 2631, 2633, 2635, 2637, 2641, 2642, 2649, 2653, 2654, 2655, 2672, 2678, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2749, 2758, 2759, 2762, 2763, 2765, 2768, 2769, 2784, 2788, 2809, 2813, 2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2877, 2885, 2887, 2889, 2891, 2893, 2902, 2904, 2908, 2910, 2911, 2916, 2929, 2930, 2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 
  2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 3014, 3017, 3018, 3021, 3024, 3025, 3031, 3032, 3072, 3076, 3077, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3149, 3157, 3159, 3160, 3163, 3168, 3172, 3200, 3204, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3261, 3269, 3270, 3273, 3274, 3277, 3285, 3287, 3294, 3295, 3296, 3300, 3313, 3315, 3328, 3332, 3333, 3341, 3342, 3345, 3346, 3387, 3389, 3397, 3398, 3401, 3402, 3405, 3406, 3407, 
  3412, 3416, 3423, 3428, 3450, 3456, 3458, 3460, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3535, 3541, 3542, 3543, 3544, 3552, 3570, 3572, 3585, 3643, 3648, 3655, 3661, 3662, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3770, 3771, 3774, 3776, 3781, 3782, 3783, 3789, 3790, 3804, 3808, 3840, 3841, 3904, 3912, 3913, 3949, 3953, 3970, 3976, 3992, 3993, 4029, 4096, 4151, 4152, 4153, 4155, 4160, 4176, 4240, 4250, 4254, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 
  4348, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5870, 5881, 5888, 5901, 5902, 5908, 5920, 5940, 5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 6016, 6068, 6070, 6089, 6103, 6104, 6108, 6109, 6176, 6265, 6272, 6315, 6320, 6390, 6400, 6431, 6432, 6444, 6448, 6457, 6480, 6510, 
  6512, 6517, 6528, 6572, 6576, 6602, 6656, 6684, 6688, 6751, 6753, 6773, 6823, 6824, 6912, 6964, 6965, 6980, 6981, 6988, 7040, 7082, 7084, 7088, 7098, 7142, 7143, 7154, 7168, 7223, 7245, 7248, 7258, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 7401, 7405, 7406, 7412, 7413, 7415, 7418, 7419, 7424, 7616, 7655, 7669, 7680, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 
  8160, 8173, 8178, 8181, 8182, 8189, 8305, 8306, 8319, 8320, 8336, 8349, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8473, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8495, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8585, 9398, 9450, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11503, 11506, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11648, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 
  11736, 11743, 11744, 11776, 11823, 11824, 12293, 12296, 12321, 12330, 12337, 12342, 12344, 12349, 12353, 12439, 12445, 12448, 12449, 12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42528, 42538, 42540, 42560, 42607, 42612, 42620, 42623, 42736, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43014, 43015, 43048, 43072, 43124, 43136, 43204, 43205, 43206, 43250, 43256, 43259, 43260, 
  43261, 43264, 43274, 43307, 43312, 43347, 43360, 43389, 43392, 43443, 43444, 43456, 43471, 43472, 43488, 43504, 43514, 43519, 43520, 43575, 43584, 43598, 43616, 43639, 43642, 43711, 43712, 43713, 43714, 43715, 43739, 43742, 43744, 43760, 43762, 43766, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44011, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64297, 64298, 64311, 64312, 64317, 
  64318, 64319, 64320, 64322, 64323, 64325, 64326, 64434, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65020, 65136, 65141, 65142, 65277, 65313, 65339, 65345, 65371, 65382, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65856, 65909, 66176, 66205, 66208, 66257, 66304, 66336, 66349, 66379, 66384, 66427, 66432, 66462, 66464, 66500, 66504, 66512, 66513, 66518, 66560, 66718, 66736, 66772, 
  66776, 66812, 66816, 66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68192, 68221, 68224, 68253, 68288, 68296, 68297, 68325, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68736, 68787, 68800, 68851, 
  68864, 68904, 69376, 69405, 69415, 69416, 69424, 69446, 69600, 69623, 69632, 69702, 69762, 69817, 69840, 69865, 69888, 69939, 69956, 69959, 69968, 70003, 70006, 70007, 70016, 70080, 70081, 70085, 70106, 70107, 70108, 70109, 70144, 70162, 70163, 70197, 70199, 70200, 70206, 70207, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 70320, 70377, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70461, 70469, 70471, 70473, 70475, 70477, 
  70480, 70481, 70487, 70488, 70493, 70500, 70656, 70722, 70723, 70726, 70727, 70731, 70751, 70752, 70784, 70850, 70852, 70854, 70855, 70856, 71040, 71094, 71096, 71103, 71128, 71134, 71168, 71231, 71232, 71233, 71236, 71237, 71296, 71350, 71352, 71353, 71424, 71451, 71453, 71467, 71680, 71737, 71840, 71904, 71935, 71936, 72096, 72104, 72106, 72152, 72154, 72160, 72161, 72162, 72163, 72165, 72192, 72243, 72245, 72255, 72272, 72344, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72767, 
  72768, 72769, 72818, 72848, 72850, 72872, 72873, 72887, 72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73026, 73027, 73028, 73030, 73032, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 73107, 73111, 73112, 73113, 73440, 73463, 73728, 74650, 74752, 74863, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92880, 92910, 92928, 92976, 92992, 92996, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 94178, 
  94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 113822, 113823, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 
  120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123191, 123198, 123214, 123215, 123584, 123628, 124928, 125125, 125184, 125252, 125255, 125256, 125259, 125260, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 
  126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 127280, 127306, 127312, 127338, 127344, 127370, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 
  183970, 183984, 191457, 194560, 195102], Any:[0, 1114112], Assigned:[0, 888, 890, 896, 900, 907, 908, 909, 910, 930, 931, 1328, 1329, 1367, 1369, 1419, 1421, 1424, 1425, 1480, 1488, 1515, 1519, 1525, 1536, 1565, 1566, 1806, 1807, 1867, 1869, 1970, 1984, 2043, 2045, 2094, 2096, 2111, 2112, 2140, 2142, 2143, 2144, 2155, 2208, 2229, 2230, 2238, 2259, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 
  2534, 2559, 2561, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2649, 2653, 2654, 2655, 2662, 2679, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2802, 2809, 2816, 2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 
  2908, 2910, 2911, 2916, 2918, 2936, 2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 3014, 3017, 3018, 3022, 3024, 3025, 3031, 3032, 3046, 3067, 3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3160, 3163, 3168, 3172, 3174, 3184, 3191, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 
  3313, 3315, 3328, 3332, 3333, 3341, 3342, 3345, 3346, 3397, 3398, 3401, 3402, 3408, 3412, 3428, 3430, 3456, 3458, 3460, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3573, 3585, 3643, 3647, 3676, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3774, 3776, 3781, 3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808, 3840, 3912, 3913, 3949, 3953, 3992, 3993, 4029, 4030, 4045, 4046, 4059, 4096, 4294, 4295, 4296, 
  4301, 4302, 4304, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4989, 4992, 5018, 5024, 5110, 5112, 5118, 5120, 5789, 5792, 5881, 5888, 5901, 5902, 5909, 5920, 5943, 5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 6016, 6110, 6112, 6122, 6128, 6138, 6144, 6159, 6160, 6170, 6176, 6265, 6272, 6315, 6320, 6390, 6400, 6431, 6432, 6444, 6448, 6460, 6464, 6465, 
  6468, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6608, 6619, 6622, 6684, 6686, 6751, 6752, 6781, 6783, 6794, 6800, 6810, 6816, 6830, 6832, 6847, 6912, 6988, 6992, 7037, 7040, 7156, 7164, 7224, 7227, 7242, 7245, 7305, 7312, 7355, 7357, 7368, 7376, 7419, 7424, 7674, 7675, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8133, 8134, 8148, 8150, 8156, 8157, 8176, 8178, 8181, 8182, 8191, 8192, 8293, 8294, 8306, 8308, 8335, 8336, 8349, 
  8352, 8384, 8400, 8433, 8448, 8588, 8592, 9255, 9280, 9291, 9312, 11124, 11126, 11158, 11160, 11311, 11312, 11359, 11360, 11508, 11513, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11633, 11647, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11744, 11856, 11904, 11930, 11931, 12020, 12032, 12246, 12272, 12284, 12288, 12352, 12353, 12439, 12441, 12544, 12549, 12592, 12593, 12687, 12688, 12731, 12736, 12772, 12784, 
  12831, 12832, 13055, 13056, 19894, 19904, 40944, 40960, 42125, 42128, 42183, 42192, 42540, 42560, 42744, 42752, 42944, 42946, 42951, 42999, 43052, 43056, 43066, 43072, 43128, 43136, 43206, 43214, 43226, 43232, 43348, 43359, 43389, 43392, 43470, 43471, 43482, 43486, 43519, 43520, 43575, 43584, 43598, 43600, 43610, 43612, 43715, 43739, 43767, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43880, 43888, 44014, 44016, 44026, 44032, 55204, 55216, 55239, 55243, 55292, 55296, 
  64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64450, 64467, 64832, 64848, 64912, 64914, 64968, 65008, 65022, 65024, 65050, 65056, 65107, 65108, 65127, 65128, 65132, 65136, 65141, 65142, 65277, 65279, 65280, 65281, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65504, 65511, 65512, 65519, 65529, 65534, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65792, 
  65795, 65799, 65844, 65847, 65935, 65936, 65948, 65952, 65953, 66E3, 66046, 66176, 66205, 66208, 66257, 66272, 66300, 66304, 66340, 66349, 66379, 66384, 66427, 66432, 66462, 66463, 66500, 66504, 66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 66927, 66928, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67671, 67743, 67751, 67760, 67808, 67827, 67828, 67830, 67835, 67868, 67871, 
  67898, 67903, 67904, 67968, 68024, 68028, 68048, 68050, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 68159, 68169, 68176, 68185, 68192, 68256, 68288, 68327, 68331, 68343, 68352, 68406, 68409, 68438, 68440, 68467, 68472, 68498, 68505, 68509, 68521, 68528, 68608, 68681, 68736, 68787, 68800, 68851, 68858, 68904, 68912, 68922, 69216, 69247, 69376, 69416, 69424, 69466, 69600, 69623, 69632, 69710, 69714, 69744, 69759, 69826, 69837, 69838, 69840, 69865, 69872, 69882, 69888, 
  69941, 69942, 69959, 69968, 70007, 70016, 70094, 70096, 70112, 70113, 70133, 70144, 70162, 70163, 70207, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70314, 70320, 70379, 70384, 70394, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70459, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 70488, 70493, 70500, 70502, 70509, 70512, 70517, 70656, 70746, 70747, 70748, 70749, 70752, 70784, 70856, 70864, 70874, 71040, 71094, 71096, 
  71134, 71168, 71237, 71248, 71258, 71264, 71277, 71296, 71353, 71360, 71370, 71424, 71451, 71453, 71468, 71472, 71488, 71680, 71740, 71840, 71923, 71935, 71936, 72096, 72104, 72106, 72152, 72154, 72165, 72192, 72264, 72272, 72355, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72774, 72784, 72813, 72816, 72848, 72850, 72872, 72873, 72887, 72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 73050, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 73107, 
  73113, 73120, 73130, 73440, 73465, 73664, 73714, 73727, 74650, 74752, 74863, 74864, 74869, 74880, 75076, 77824, 78895, 78896, 78905, 82944, 83527, 92160, 92729, 92736, 92767, 92768, 92778, 92782, 92784, 92880, 92910, 92912, 92918, 92928, 92998, 93008, 93018, 93019, 93026, 93027, 93048, 93053, 93072, 93760, 93851, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 
  113801, 113808, 113818, 113820, 113828, 118784, 119030, 119040, 119079, 119081, 119273, 119296, 119366, 119520, 119540, 119552, 119639, 119648, 119673, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120780, 120782, 121484, 121499, 121504, 
  121505, 121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123184, 123198, 123200, 123210, 123214, 123216, 123584, 123642, 123647, 123648, 124928, 125125, 125127, 125143, 125184, 125260, 125264, 125274, 125278, 125280, 126065, 126133, 126209, 126270, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 
  126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 126704, 126706, 126976, 127020, 127024, 127124, 127136, 127151, 127153, 127168, 127169, 127184, 127185, 127222, 127232, 127245, 127248, 127341, 127344, 127405, 127462, 127491, 
  127504, 127548, 127552, 127561, 127568, 127570, 127584, 127590, 127744, 128726, 128736, 128749, 128752, 128763, 128768, 128884, 128896, 128985, 128992, 129004, 129024, 129036, 129040, 129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129293, 129394, 129395, 129399, 129402, 129443, 129445, 129451, 129454, 129483, 129485, 129620, 129632, 129646, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 
  191457, 194560, 195102, 917505, 917506, 917536, 917632, 917760, 918E3, 983040, 1048574, 1048576, 1114110], Bidi_Control:[1564, 1565, 8206, 8208, 8234, 8239, 8294, 8298], Bidi_Mirrored:[40, 42, 60, 61, 62, 63, 91, 92, 93, 94, 123, 124, 125, 126, 171, 172, 187, 188, 3898, 3902, 5787, 5789, 8249, 8251, 8261, 8263, 8317, 8319, 8333, 8335, 8512, 8513, 8705, 8709, 8712, 8718, 8721, 8722, 8725, 8727, 8730, 8734, 8735, 8739, 8740, 8741, 8742, 8743, 8747, 8756, 8761, 8762, 8763, 8781, 8786, 8790, 8799, 
  8801, 8802, 8803, 8804, 8812, 8814, 8845, 8847, 8851, 8856, 8857, 8866, 8868, 8870, 8889, 8894, 8896, 8905, 8910, 8912, 8914, 8918, 8942, 8944, 8960, 8968, 8972, 8992, 8994, 9001, 9003, 10088, 10102, 10176, 10177, 10179, 10183, 10184, 10186, 10187, 10190, 10195, 10199, 10204, 10207, 10210, 10224, 10627, 10649, 10651, 10657, 10658, 10672, 10680, 10681, 10688, 10694, 10697, 10698, 10702, 10707, 10708, 10710, 10712, 10717, 10721, 10722, 10723, 10726, 10728, 10730, 10740, 10746, 10748, 10750, 10762, 
  10781, 10782, 10786, 10788, 10789, 10790, 10791, 10793, 10794, 10795, 10799, 10804, 10806, 10812, 10815, 10839, 10841, 10852, 10854, 10858, 10862, 10863, 10865, 10867, 10869, 10873, 10916, 10918, 10926, 10927, 10967, 10972, 10973, 10974, 10975, 10978, 10983, 10988, 10991, 10995, 10996, 10999, 11004, 11005, 11006, 11262, 11263, 11778, 11782, 11785, 11787, 11788, 11790, 11804, 11806, 11808, 11818, 12296, 12306, 12308, 12316, 65113, 65119, 65124, 65126, 65288, 65290, 65308, 65309, 65310, 65311, 65339, 
  65340, 65341, 65342, 65371, 65372, 65373, 65374, 65375, 65377, 65378, 65380, 120539, 120540, 120597, 120598, 120655, 120656, 120713, 120714, 120771, 120772], Case_Ignorable:[39, 40, 46, 47, 58, 59, 94, 95, 96, 97, 168, 169, 173, 174, 175, 176, 180, 181, 183, 185, 688, 880, 884, 886, 890, 891, 900, 902, 903, 904, 1155, 1162, 1369, 1370, 1425, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1524, 1525, 1536, 1542, 1552, 1563, 1564, 1565, 1600, 1601, 1611, 1632, 1648, 1649, 1750, 1758, 1759, 
  1769, 1770, 1774, 1807, 1808, 1809, 1810, 1840, 1867, 1958, 1969, 2027, 2038, 2042, 2043, 2045, 2046, 2070, 2094, 2137, 2140, 2259, 2307, 2362, 2363, 2364, 2365, 2369, 2377, 2381, 2382, 2385, 2392, 2402, 2404, 2417, 2418, 2433, 2434, 2492, 2493, 2497, 2501, 2509, 2510, 2530, 2532, 2558, 2559, 2561, 2563, 2620, 2621, 2625, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2672, 2674, 2677, 2678, 2689, 2691, 2748, 2749, 2753, 2758, 2759, 2761, 2765, 2766, 2786, 2788, 2810, 2816, 2817, 2818, 2876, 2877, 2879, 
  2880, 2881, 2885, 2893, 2894, 2902, 2903, 2914, 2916, 2946, 2947, 3008, 3009, 3021, 3022, 3072, 3073, 3076, 3077, 3134, 3137, 3142, 3145, 3146, 3150, 3157, 3159, 3170, 3172, 3201, 3202, 3260, 3261, 3263, 3264, 3270, 3271, 3276, 3278, 3298, 3300, 3328, 3330, 3387, 3389, 3393, 3397, 3405, 3406, 3426, 3428, 3530, 3531, 3538, 3541, 3542, 3543, 3633, 3634, 3636, 3643, 3654, 3663, 3761, 3762, 3764, 3773, 3782, 3783, 3784, 3790, 3864, 3866, 3893, 3894, 3895, 3896, 3897, 3898, 3953, 3967, 3968, 3973, 3974, 
  3976, 3981, 3992, 3993, 4029, 4038, 4039, 4141, 4145, 4146, 4152, 4153, 4155, 4157, 4159, 4184, 4186, 4190, 4193, 4209, 4213, 4226, 4227, 4229, 4231, 4237, 4238, 4253, 4254, 4348, 4349, 4957, 4960, 5906, 5909, 5938, 5941, 5970, 5972, 6002, 6004, 6068, 6070, 6071, 6078, 6086, 6087, 6089, 6100, 6103, 6104, 6109, 6110, 6155, 6159, 6211, 6212, 6277, 6279, 6313, 6314, 6432, 6435, 6439, 6441, 6450, 6451, 6457, 6460, 6679, 6681, 6683, 6684, 6742, 6743, 6744, 6751, 6752, 6753, 6754, 6755, 6757, 6765, 6771, 
  6781, 6783, 6784, 6823, 6824, 6832, 6847, 6912, 6916, 6964, 6965, 6966, 6971, 6972, 6973, 6978, 6979, 7019, 7028, 7040, 7042, 7074, 7078, 7080, 7082, 7083, 7086, 7142, 7143, 7144, 7146, 7149, 7150, 7151, 7154, 7212, 7220, 7222, 7224, 7288, 7294, 7376, 7379, 7380, 7393, 7394, 7401, 7405, 7406, 7412, 7413, 7416, 7418, 7468, 7531, 7544, 7545, 7579, 7674, 7675, 7680, 8125, 8126, 8127, 8130, 8141, 8144, 8157, 8160, 8173, 8176, 8189, 8191, 8203, 8208, 8216, 8218, 8228, 8229, 8231, 8232, 8234, 8239, 8288, 
  8293, 8294, 8304, 8305, 8306, 8319, 8320, 8336, 8349, 8400, 8433, 11388, 11390, 11503, 11506, 11631, 11632, 11647, 11648, 11744, 11776, 11823, 11824, 12293, 12294, 12330, 12334, 12337, 12342, 12347, 12348, 12441, 12447, 12540, 12543, 40981, 40982, 42232, 42238, 42508, 42509, 42607, 42611, 42612, 42622, 42623, 42624, 42652, 42656, 42736, 42738, 42752, 42786, 42864, 42865, 42888, 42891, 43E3, 43002, 43010, 43011, 43014, 43015, 43019, 43020, 43045, 43047, 43204, 43206, 43232, 43250, 43263, 43264, 
  43302, 43310, 43335, 43346, 43392, 43395, 43443, 43444, 43446, 43450, 43452, 43454, 43471, 43472, 43493, 43495, 43561, 43567, 43569, 43571, 43573, 43575, 43587, 43588, 43596, 43597, 43632, 43633, 43644, 43645, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43741, 43742, 43756, 43758, 43763, 43765, 43766, 43767, 43867, 43872, 44005, 44006, 44008, 44009, 44013, 44014, 64286, 64287, 64434, 64450, 65024, 65040, 65043, 65044, 65056, 65072, 65106, 65107, 65109, 65110, 65279, 65280, 
  65287, 65288, 65294, 65295, 65306, 65307, 65342, 65343, 65344, 65345, 65392, 65393, 65438, 65440, 65507, 65508, 65529, 65532, 66045, 66046, 66272, 66273, 66422, 66427, 68097, 68100, 68101, 68103, 68108, 68112, 68152, 68155, 68159, 68160, 68325, 68327, 68900, 68904, 69446, 69457, 69633, 69634, 69688, 69703, 69759, 69762, 69811, 69815, 69817, 69819, 69821, 69822, 69837, 69838, 69888, 69891, 69927, 69932, 69933, 69941, 70003, 70004, 70016, 70018, 70070, 70079, 70089, 70093, 70191, 70194, 70196, 70197, 
  70198, 70200, 70206, 70207, 70367, 70368, 70371, 70379, 70400, 70402, 70459, 70461, 70464, 70465, 70502, 70509, 70512, 70517, 70712, 70720, 70722, 70725, 70726, 70727, 70750, 70751, 70835, 70841, 70842, 70843, 70847, 70849, 70850, 70852, 71090, 71094, 71100, 71102, 71103, 71105, 71132, 71134, 71219, 71227, 71229, 71230, 71231, 71233, 71339, 71340, 71341, 71342, 71344, 71350, 71351, 71352, 71453, 71456, 71458, 71462, 71463, 71468, 71727, 71736, 71737, 71739, 72148, 72152, 72154, 72156, 72160, 72161, 
  72193, 72203, 72243, 72249, 72251, 72255, 72263, 72264, 72273, 72279, 72281, 72284, 72330, 72343, 72344, 72346, 72752, 72759, 72760, 72766, 72767, 72768, 72850, 72872, 72874, 72881, 72882, 72884, 72885, 72887, 73009, 73015, 73018, 73019, 73020, 73022, 73023, 73030, 73031, 73032, 73104, 73106, 73109, 73110, 73111, 73112, 73459, 73461, 78896, 78905, 92912, 92917, 92976, 92983, 92992, 92996, 94031, 94032, 94095, 94112, 94176, 94178, 94179, 94180, 113821, 113823, 113824, 113828, 119143, 119146, 119155, 
  119171, 119173, 119180, 119210, 119214, 119362, 119365, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123184, 123198, 123628, 123632, 125136, 125143, 125252, 125260, 127995, 128E3, 917505, 917506, 917536, 917632, 917760, 918E3], Cased:[65, 91, 97, 123, 170, 171, 181, 182, 186, 187, 192, 215, 216, 247, 248, 443, 444, 448, 452, 660, 661, 697, 704, 706, 736, 741, 837, 838, 
  880, 884, 886, 888, 890, 894, 895, 896, 902, 903, 904, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1162, 1328, 1329, 1367, 1376, 1417, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4349, 4352, 5024, 5110, 5112, 5118, 7296, 7305, 7312, 7355, 7357, 7360, 7424, 7616, 7680, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 
  8305, 8306, 8319, 8320, 8336, 8349, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8473, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8495, 8501, 8505, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8576, 8579, 8581, 9398, 9450, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11503, 11506, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 42560, 42606, 42624, 42654, 42786, 42888, 42891, 42895, 42896, 42944, 42946, 42951, 43E3, 43003, 43824, 43867, 43868, 43880, 43888, 43968, 64256, 64263, 
  64275, 64280, 65313, 65339, 65345, 65371, 66560, 66640, 66736, 66772, 66776, 66812, 68736, 68787, 68800, 68851, 71840, 71904, 93760, 93824, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 
  120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 125184, 125252, 127280, 127306, 127312, 127338, 127344, 127370], Changes_When_Casefolded:[65, 91, 181, 182, 192, 215, 216, 224, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 
  307, 308, 309, 310, 311, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 383, 384, 385, 387, 388, 389, 390, 392, 393, 396, 398, 402, 403, 405, 406, 409, 412, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 
  426, 428, 429, 430, 432, 433, 436, 437, 438, 439, 441, 444, 445, 452, 454, 455, 457, 458, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 499, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 
  547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 570, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 837, 838, 880, 881, 882, 883, 886, 887, 895, 896, 902, 903, 904, 907, 908, 909, 910, 912, 913, 930, 931, 940, 962, 963, 975, 978, 981, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1010, 1012, 1014, 1015, 1016, 1017, 1019, 1021, 1072, 1120, 1121, 
  1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 
  1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 
  1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1329, 1367, 1415, 1416, 4256, 4294, 4295, 4296, 4301, 4302, 5112, 5118, 7296, 7305, 7312, 7355, 7357, 7360, 7680, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 
  7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 
  7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7834, 7836, 7838, 7839, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 
  7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 7960, 7966, 7976, 7984, 7992, 8E3, 8008, 8014, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8040, 8048, 8064, 8112, 8114, 8117, 8119, 8125, 8130, 8133, 8135, 8141, 8152, 8156, 8168, 8173, 8178, 8181, 8183, 8189, 8486, 8487, 
  8490, 8492, 8498, 8499, 8544, 8560, 8579, 8580, 9398, 9424, 11264, 11311, 11360, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11377, 11378, 11379, 11381, 11382, 11390, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 
  11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11499, 11500, 11501, 11502, 11506, 11507, 42560, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 
  42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 42601, 42602, 42603, 42604, 42605, 42624, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42786, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 
  42795, 42796, 42797, 42798, 42799, 42802, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42873, 42874, 42875, 42876, 42877, 
  42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42891, 42892, 42893, 42894, 42896, 42897, 42898, 42899, 42902, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42927, 42928, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42946, 42947, 42948, 42951, 43888, 43968, 64256, 64263, 64275, 64280, 65313, 65339, 66560, 66600, 66736, 66772, 68736, 68787, 71840, 71872, 93760, 
  93792, 125184, 125218], Changes_When_Casemapped:[65, 91, 97, 123, 181, 182, 192, 215, 216, 247, 248, 312, 313, 397, 398, 411, 412, 426, 428, 442, 444, 446, 447, 448, 452, 545, 546, 564, 570, 597, 598, 600, 601, 602, 603, 605, 608, 610, 611, 612, 613, 615, 616, 621, 623, 624, 625, 627, 629, 630, 637, 638, 640, 641, 642, 644, 647, 653, 658, 659, 669, 671, 837, 838, 880, 884, 886, 888, 891, 894, 895, 896, 902, 903, 904, 907, 908, 909, 910, 930, 931, 978, 981, 1014, 1015, 1020, 1021, 1154, 1162, 1328, 
  1329, 1367, 1377, 1416, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4349, 4352, 5024, 5110, 5112, 5118, 7296, 7305, 7312, 7355, 7357, 7360, 7545, 7546, 7549, 7550, 7566, 7567, 7680, 7836, 7838, 7839, 7840, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8486, 8487, 8490, 8492, 8498, 8499, 8526, 8527, 8544, 8576, 8579, 8581, 
  9398, 9450, 11264, 11311, 11312, 11359, 11360, 11377, 11378, 11380, 11381, 11383, 11390, 11492, 11499, 11503, 11506, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 42560, 42606, 42624, 42652, 42786, 42800, 42802, 42864, 42873, 42888, 42891, 42894, 42896, 42901, 42902, 42927, 42928, 42944, 42946, 42951, 43859, 43860, 43888, 43968, 64256, 64263, 64275, 64280, 65313, 65339, 65345, 65371, 66560, 66640, 66736, 66772, 66776, 66812, 68736, 68787, 68800, 68851, 71840, 71904, 93760, 93824, 125184, 125252], 
  Changes_When_Lowercased:[65, 91, 192, 215, 216, 223, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 
  348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 385, 387, 388, 389, 390, 392, 393, 396, 398, 402, 403, 405, 406, 409, 412, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 426, 428, 429, 430, 432, 433, 436, 437, 438, 439, 441, 444, 445, 452, 454, 455, 457, 458, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 480, 481, 482, 483, 
  484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 499, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 570, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 880, 881, 882, 883, 886, 887, 895, 896, 
  902, 903, 904, 907, 908, 909, 910, 912, 913, 930, 931, 940, 975, 976, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1012, 1013, 1015, 1016, 1017, 1019, 1021, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 
  1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 
  1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1329, 1367, 4256, 4294, 4295, 4296, 4301, 4302, 5024, 5110, 7312, 7355, 7357, 
  7360, 7680, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 
  7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7838, 7839, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 
  7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 7960, 
  7966, 7976, 7984, 7992, 8E3, 8008, 8014, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8040, 8048, 8072, 8080, 8088, 8096, 8104, 8112, 8120, 8125, 8136, 8141, 8152, 8156, 8168, 8173, 8184, 8189, 8486, 8487, 8490, 8492, 8498, 8499, 8544, 8560, 8579, 8580, 9398, 9424, 11264, 11311, 11360, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11377, 11378, 11379, 11381, 11382, 11390, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 
  11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 
  11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11499, 11500, 11501, 11502, 11506, 11507, 42560, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 42601, 42602, 42603, 42604, 42605, 42624, 42625, 42626, 42627, 42628, 42629, 42630, 
  42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42786, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42802, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 
  42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42873, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42891, 42892, 42893, 42894, 42896, 42897, 42898, 42899, 42902, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42927, 42928, 42933, 42934, 
  42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42946, 42947, 42948, 42951, 65313, 65339, 66560, 66600, 66736, 66772, 68736, 68787, 71840, 71872, 93760, 93792, 125184, 125218], Changes_When_NFKC_Casefolded:[65, 91, 160, 161, 168, 169, 170, 171, 173, 174, 175, 176, 178, 182, 184, 187, 188, 191, 192, 215, 216, 224, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 
  290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 309, 310, 311, 313, 314, 315, 316, 317, 318, 319, 322, 323, 324, 325, 326, 327, 328, 329, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 383, 384, 385, 387, 388, 389, 390, 392, 393, 396, 398, 402, 403, 405, 
  406, 409, 412, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 426, 428, 429, 430, 432, 433, 436, 437, 438, 439, 441, 444, 445, 452, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 
  542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 570, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 688, 697, 728, 734, 736, 741, 832, 834, 835, 838, 847, 848, 880, 881, 882, 883, 884, 885, 886, 887, 890, 891, 894, 896, 900, 907, 908, 909, 910, 912, 913, 930, 931, 940, 962, 963, 975, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 
  1007, 1008, 1011, 1012, 1014, 1015, 1016, 1017, 1019, 1021, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 
  1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 
  1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1329, 1367, 1415, 1416, 1564, 1565, 1653, 1657, 2392, 2400, 2524, 2526, 2527, 2528, 2611, 2612, 2614, 2615, 2649, 2652, 2654, 2655, 2908, 2910, 3635, 3636, 3763, 3764, 3804, 3806, 3852, 3853, 3907, 3908, 3917, 3918, 3922, 3923, 3927, 3928, 3932, 3933, 3945, 
  3946, 3955, 3956, 3957, 3962, 3969, 3970, 3987, 3988, 3997, 3998, 4002, 4003, 4007, 4008, 4012, 4013, 4025, 4026, 4256, 4294, 4295, 4296, 4301, 4302, 4348, 4349, 4447, 4449, 5112, 5118, 6068, 6070, 6155, 6159, 7296, 7305, 7312, 7355, 7357, 7360, 7468, 7471, 7472, 7483, 7484, 7502, 7503, 7531, 7544, 7545, 7579, 7616, 7680, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 
  7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 
  7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7834, 7836, 7838, 7839, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 
  7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 7960, 7966, 7976, 7984, 7992, 8E3, 8008, 8014, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8040, 8048, 8049, 8050, 8051, 8052, 8053, 8054, 8055, 8056, 8057, 8058, 8059, 8060, 8061, 
  8062, 8064, 8112, 8114, 8117, 8119, 8133, 8135, 8144, 8147, 8148, 8152, 8156, 8157, 8160, 8163, 8164, 8168, 8176, 8178, 8181, 8183, 8191, 8192, 8208, 8209, 8210, 8215, 8216, 8228, 8231, 8234, 8240, 8243, 8245, 8246, 8248, 8252, 8253, 8254, 8255, 8263, 8266, 8279, 8280, 8287, 8306, 8308, 8335, 8336, 8349, 8360, 8361, 8448, 8452, 8453, 8456, 8457, 8468, 8469, 8471, 8473, 8478, 8480, 8483, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8495, 8506, 8507, 8513, 8517, 8522, 8528, 8576, 8579, 8580, 8585, 
  8586, 8748, 8750, 8751, 8753, 9001, 9003, 9312, 9451, 10764, 10765, 10868, 10871, 10972, 10973, 11264, 11311, 11360, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11377, 11378, 11379, 11381, 11382, 11388, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 
  11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11499, 11500, 11501, 11502, 11506, 11507, 11631, 11632, 11935, 11936, 12019, 12020, 
  12032, 12246, 12288, 12289, 12342, 12343, 12344, 12347, 12443, 12445, 12447, 12448, 12543, 12544, 12593, 12687, 12690, 12704, 12800, 12831, 12832, 12872, 12880, 12927, 12928, 13055, 13056, 13312, 42560, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 42601, 42602, 42603, 
  42604, 42605, 42624, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42652, 42654, 42786, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42802, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 42827, 
  42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42864, 42865, 42873, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42891, 42892, 42893, 42894, 42896, 42897, 42898, 42899, 42902, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 
  42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42927, 42928, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42946, 42947, 42948, 42951, 43E3, 43002, 43868, 43872, 43888, 43968, 63744, 64014, 64016, 64017, 64018, 64019, 64021, 64031, 64032, 64033, 64034, 64035, 64037, 64039, 64042, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64286, 64287, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64434, 64467, 64830, 64848, 64912, 
  64914, 64968, 65008, 65021, 65024, 65050, 65072, 65093, 65095, 65107, 65108, 65127, 65128, 65132, 65136, 65139, 65140, 65141, 65142, 65277, 65279, 65280, 65281, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65504, 65511, 65512, 65519, 65520, 65529, 66560, 66600, 66736, 66772, 68736, 68787, 71840, 71872, 93760, 93792, 113824, 113828, 119134, 119141, 119155, 119163, 119227, 119233, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 
  119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120780, 120782, 120832, 125184, 125218, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 
  126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 127232, 127243, 127248, 127279, 127280, 127312, 127338, 127341, 127376, 127377, 127488, 127491, 127504, 127548, 127552, 127561, 127568, 127570, 194560, 195102, 917504, 921600], Changes_When_Titlecased:[97, 123, 181, 182, 223, 247, 
  248, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 
  357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 385, 387, 388, 389, 390, 392, 393, 396, 397, 402, 403, 405, 406, 409, 411, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 429, 430, 432, 433, 436, 437, 438, 439, 441, 442, 445, 446, 447, 448, 452, 453, 454, 456, 457, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 
  491, 492, 493, 494, 495, 498, 499, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 597, 598, 600, 601, 602, 603, 605, 608, 610, 611, 612, 613, 615, 616, 621, 623, 624, 
  625, 627, 629, 630, 637, 638, 640, 641, 642, 644, 647, 653, 658, 659, 669, 671, 837, 838, 881, 882, 883, 884, 887, 888, 891, 894, 912, 913, 940, 975, 976, 978, 981, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1012, 1013, 1014, 1016, 1017, 1019, 1020, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 
  1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 
  1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 
  1325, 1326, 1327, 1328, 1377, 1416, 5112, 5118, 7296, 7305, 7545, 7546, 7549, 7550, 7566, 7567, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 
  7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7836, 7841, 7842, 
  7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 
  7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 7958, 7968, 7976, 7984, 7992, 8E3, 8006, 8016, 8024, 8032, 8040, 8048, 8062, 8064, 8072, 8080, 8088, 8096, 8104, 8112, 8117, 8118, 8120, 8126, 8127, 8130, 8133, 8134, 8136, 8144, 8148, 8150, 8152, 8160, 8168, 8178, 8181, 8182, 8184, 8526, 8527, 8560, 8576, 8580, 8581, 9424, 9450, 11312, 11359, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11379, 11380, 11382, 11383, 11393, 11394, 11395, 11396, 11397, 11398, 
  11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 
  11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11492, 11500, 11501, 11502, 11503, 11507, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 
  42599, 42600, 42601, 42602, 42603, 42604, 42605, 42606, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42652, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42800, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 
  42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42864, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42888, 42892, 42893, 42897, 42898, 42899, 42901, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 42914, 
  42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42944, 42947, 42948, 43859, 43860, 43888, 43968, 64256, 64263, 64275, 64280, 65345, 65371, 66600, 66640, 66776, 66812, 68800, 68851, 71872, 71904, 93792, 93824, 125218, 125252], Changes_When_Uppercased:[97, 123, 181, 182, 223, 247, 248, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 
  282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 385, 387, 
  388, 389, 390, 392, 393, 396, 397, 402, 403, 405, 406, 409, 411, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 429, 430, 432, 433, 436, 437, 438, 439, 441, 442, 445, 446, 447, 448, 453, 455, 456, 458, 459, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 498, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 
  524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 597, 598, 600, 601, 602, 603, 605, 608, 610, 611, 612, 613, 615, 616, 621, 623, 624, 625, 627, 629, 630, 637, 638, 640, 641, 642, 644, 647, 653, 658, 659, 669, 671, 837, 838, 881, 882, 883, 884, 887, 888, 891, 894, 912, 913, 940, 
  975, 976, 978, 981, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1012, 1013, 1014, 1016, 1017, 1019, 1020, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 
  1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 
  1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1377, 1416, 4304, 4347, 4349, 4352, 5112, 5118, 7296, 7305, 7545, 7546, 7549, 7550, 7566, 7567, 7681, 7682, 7683, 7684, 
  7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 
  7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7836, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 
  7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 7958, 7968, 7976, 7984, 7992, 8E3, 8006, 8016, 8024, 
  8032, 8040, 8048, 8062, 8064, 8117, 8118, 8120, 8124, 8125, 8126, 8127, 8130, 8133, 8134, 8136, 8140, 8141, 8144, 8148, 8150, 8152, 8160, 8168, 8178, 8181, 8182, 8184, 8188, 8189, 8526, 8527, 8560, 8576, 8580, 8581, 9424, 9450, 11312, 11359, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11379, 11380, 11382, 11383, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 
  11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 
  11488, 11489, 11490, 11491, 11492, 11500, 11501, 11502, 11503, 11507, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 42601, 42602, 42603, 42604, 42605, 42606, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 
  42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42652, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42800, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 
  42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42864, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42888, 42892, 42893, 42897, 42898, 42899, 42901, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 
  42942, 42943, 42944, 42947, 42948, 43859, 43860, 43888, 43968, 64256, 64263, 64275, 64280, 65345, 65371, 66600, 66640, 66776, 66812, 68800, 68851, 71872, 71904, 93792, 93824, 125218, 125252], Dash:[45, 46, 1418, 1419, 1470, 1471, 5120, 5121, 6150, 6151, 8208, 8214, 8275, 8276, 8315, 8316, 8331, 8332, 8722, 8723, 11799, 11800, 11802, 11803, 11834, 11836, 11840, 11841, 12316, 12317, 12336, 12337, 12448, 12449, 65073, 65075, 65112, 65113, 65123, 65124, 65293, 65294], Default_Ignorable_Code_Point:[173, 
  174, 847, 848, 1564, 1565, 4447, 4449, 6068, 6070, 6155, 6159, 8203, 8208, 8234, 8239, 8288, 8304, 12644, 12645, 65024, 65040, 65279, 65280, 65440, 65441, 65520, 65529, 113824, 113828, 119155, 119163, 917504, 921600], Deprecated:[329, 330, 1651, 1652, 3959, 3960, 3961, 3962, 6051, 6053, 8298, 8304, 9001, 9003, 917505, 917506], Diacritic:[94, 95, 96, 97, 168, 169, 175, 176, 180, 181, 183, 185, 688, 847, 848, 856, 861, 867, 884, 886, 890, 891, 900, 902, 1155, 1160, 1369, 1370, 1425, 1442, 1443, 1470, 
  1471, 1472, 1473, 1475, 1476, 1477, 1611, 1619, 1623, 1625, 1759, 1761, 1765, 1767, 1770, 1773, 1840, 1867, 1958, 1969, 2027, 2038, 2072, 2074, 2275, 2303, 2364, 2365, 2381, 2382, 2385, 2389, 2417, 2418, 2492, 2493, 2509, 2510, 2620, 2621, 2637, 2638, 2748, 2749, 2765, 2766, 2813, 2816, 2876, 2877, 2893, 2894, 3021, 3022, 3149, 3150, 3260, 3261, 3277, 3278, 3387, 3389, 3405, 3406, 3530, 3531, 3655, 3661, 3662, 3663, 3770, 3771, 3784, 3789, 3864, 3866, 3893, 3894, 3895, 3896, 3897, 3898, 3902, 3904, 
  3970, 3973, 3974, 3976, 4038, 4039, 4151, 4152, 4153, 4155, 4195, 4197, 4201, 4206, 4231, 4238, 4239, 4240, 4250, 4252, 4957, 4960, 6089, 6100, 6109, 6110, 6457, 6460, 6773, 6781, 6783, 6784, 6832, 6846, 6964, 6965, 6980, 6981, 7019, 7028, 7082, 7084, 7222, 7224, 7288, 7294, 7376, 7401, 7405, 7406, 7412, 7413, 7415, 7418, 7468, 7531, 7620, 7632, 7669, 7674, 7677, 7680, 8125, 8126, 8127, 8130, 8141, 8144, 8157, 8160, 8173, 8176, 8189, 8191, 11503, 11506, 11823, 11824, 12330, 12336, 12441, 12445, 
  12540, 12541, 42607, 42608, 42620, 42622, 42623, 42624, 42652, 42654, 42736, 42738, 42752, 42786, 42888, 42891, 43E3, 43002, 43204, 43205, 43232, 43250, 43307, 43311, 43347, 43348, 43443, 43444, 43456, 43457, 43493, 43494, 43643, 43646, 43711, 43715, 43766, 43767, 43867, 43872, 44012, 44014, 64286, 64287, 65056, 65072, 65342, 65343, 65344, 65345, 65392, 65393, 65438, 65440, 65507, 65508, 66272, 66273, 68325, 68327, 68898, 68904, 69446, 69457, 69817, 69819, 69939, 69941, 70003, 70004, 70080, 70081, 
  70090, 70093, 70197, 70199, 70377, 70379, 70460, 70461, 70477, 70478, 70502, 70509, 70512, 70517, 70722, 70723, 70726, 70727, 70850, 70852, 71103, 71105, 71231, 71232, 71350, 71352, 71467, 71468, 71737, 71739, 72160, 72161, 72244, 72245, 72263, 72264, 72345, 72346, 72767, 72768, 73026, 73027, 73028, 73030, 73111, 73112, 92912, 92917, 92976, 92983, 94095, 94112, 119143, 119146, 119149, 119155, 119163, 119171, 119173, 119180, 119210, 119214, 123184, 123191, 123628, 123632, 125136, 125143, 125252, 
  125255, 125256, 125259], Emoji:[35, 36, 42, 43, 48, 58, 169, 170, 174, 175, 8252, 8253, 8265, 8266, 8482, 8483, 8505, 8506, 8596, 8602, 8617, 8619, 8986, 8988, 9E3, 9001, 9167, 9168, 9193, 9204, 9208, 9211, 9410, 9411, 9642, 9644, 9654, 9655, 9664, 9665, 9723, 9727, 9728, 9733, 9742, 9743, 9745, 9746, 9748, 9750, 9752, 9753, 9757, 9758, 9760, 9761, 9762, 9764, 9766, 9767, 9770, 9771, 9774, 9776, 9784, 9787, 9792, 9793, 9794, 9795, 9800, 9812, 9823, 9825, 9827, 9828, 9829, 9831, 9832, 9833, 9851, 
  9852, 9854, 9856, 9874, 9880, 9881, 9882, 9883, 9885, 9888, 9890, 9898, 9900, 9904, 9906, 9917, 9919, 9924, 9926, 9928, 9929, 9934, 9936, 9937, 9938, 9939, 9941, 9961, 9963, 9968, 9974, 9975, 9979, 9981, 9982, 9986, 9987, 9989, 9990, 9992, 9998, 9999, 1E4, 10002, 10003, 10004, 10005, 10006, 10007, 10013, 10014, 10017, 10018, 10024, 10025, 10035, 10037, 10052, 10053, 10055, 10056, 10060, 10061, 10062, 10063, 10067, 10070, 10071, 10072, 10083, 10085, 10133, 10136, 10145, 10146, 10160, 10161, 10175, 
  10176, 10548, 10550, 11013, 11016, 11035, 11037, 11088, 11089, 11093, 11094, 12336, 12337, 12349, 12350, 12951, 12952, 12953, 12954, 126980, 126981, 127183, 127184, 127344, 127346, 127358, 127360, 127374, 127375, 127377, 127387, 127462, 127488, 127489, 127491, 127514, 127515, 127535, 127536, 127538, 127547, 127568, 127570, 127744, 127778, 127780, 127892, 127894, 127896, 127897, 127900, 127902, 127985, 127987, 127990, 127991, 128254, 128255, 128318, 128329, 128335, 128336, 128360, 128367, 128369, 
  128371, 128379, 128391, 128392, 128394, 128398, 128400, 128401, 128405, 128407, 128420, 128422, 128424, 128425, 128433, 128435, 128444, 128445, 128450, 128453, 128465, 128468, 128476, 128479, 128481, 128482, 128483, 128484, 128488, 128489, 128495, 128496, 128499, 128500, 128506, 128592, 128640, 128710, 128715, 128723, 128725, 128726, 128736, 128742, 128745, 128746, 128747, 128749, 128752, 128753, 128755, 128763, 128992, 129004, 129293, 129339, 129340, 129350, 129351, 129394, 129395, 129399, 129402, 
  129443, 129445, 129451, 129454, 129483, 129485, 129536, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686], Emoji_Component:[35, 36, 42, 43, 48, 58, 8205, 8206, 8419, 8420, 65039, 65040, 127462, 127488, 127995, 128E3, 129456, 129460, 917536, 917632], Emoji_Modifier:[127995, 128E3], Emoji_Modifier_Base:[9757, 9758, 9977, 9978, 9994, 9998, 127877, 127878, 127938, 127941, 127943, 127944, 127946, 127949, 128066, 128068, 128070, 128081, 128102, 128121, 128124, 128125, 128129, 128132, 128133, 
  128136, 128143, 128144, 128145, 128146, 128170, 128171, 128372, 128374, 128378, 128379, 128400, 128401, 128405, 128407, 128581, 128584, 128587, 128592, 128675, 128676, 128692, 128695, 128704, 128705, 128716, 128717, 129295, 129296, 129304, 129312, 129318, 129319, 129328, 129338, 129340, 129343, 129461, 129463, 129464, 129466, 129467, 129468, 129485, 129488, 129489, 129502], Emoji_Presentation:[8986, 8988, 9193, 9197, 9200, 9201, 9203, 9204, 9725, 9727, 9748, 9750, 9800, 9812, 9855, 9856, 9875, 
  9876, 9889, 9890, 9898, 9900, 9917, 9919, 9924, 9926, 9934, 9935, 9940, 9941, 9962, 9963, 9970, 9972, 9973, 9974, 9978, 9979, 9981, 9982, 9989, 9990, 9994, 9996, 10024, 10025, 10060, 10061, 10062, 10063, 10067, 10070, 10071, 10072, 10133, 10136, 10160, 10161, 10175, 10176, 11035, 11037, 11088, 11089, 11093, 11094, 126980, 126981, 127183, 127184, 127374, 127375, 127377, 127387, 127462, 127488, 127489, 127490, 127514, 127515, 127535, 127536, 127538, 127543, 127544, 127547, 127568, 127570, 127744, 
  127777, 127789, 127798, 127799, 127869, 127870, 127892, 127904, 127947, 127951, 127956, 127968, 127985, 127988, 127989, 127992, 128063, 128064, 128065, 128066, 128253, 128255, 128318, 128331, 128335, 128336, 128360, 128378, 128379, 128405, 128407, 128420, 128421, 128507, 128592, 128640, 128710, 128716, 128717, 128720, 128723, 128725, 128726, 128747, 128749, 128756, 128763, 128992, 129004, 129293, 129339, 129340, 129350, 129351, 129394, 129395, 129399, 129402, 129443, 129445, 129451, 129454, 129483, 
  129485, 129536, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686], Extended_Pictographic:[169, 170, 174, 175, 8252, 8253, 8265, 8266, 8482, 8483, 8505, 8506, 8596, 8602, 8617, 8619, 8986, 8988, 9E3, 9001, 9096, 9097, 9167, 9168, 9193, 9204, 9208, 9211, 9410, 9411, 9642, 9644, 9654, 9655, 9664, 9665, 9723, 9727, 9728, 9734, 9735, 9747, 9748, 9862, 9872, 9990, 9992, 10003, 10004, 10005, 10006, 10007, 10013, 10014, 10017, 10018, 10024, 10025, 10035, 10037, 10052, 10053, 10055, 10056, 
  10060, 10061, 10062, 10063, 10067, 10070, 10071, 10072, 10083, 10088, 10133, 10136, 10145, 10146, 10160, 10161, 10175, 10176, 10548, 10550, 11013, 11016, 11035, 11037, 11088, 11089, 11093, 11094, 12336, 12337, 12349, 12350, 12951, 12952, 12953, 12954, 126976, 127232, 127245, 127248, 127279, 127280, 127340, 127346, 127358, 127360, 127374, 127375, 127377, 127387, 127405, 127462, 127489, 127504, 127514, 127515, 127535, 127536, 127538, 127547, 127548, 127552, 127561, 127995, 128E3, 128318, 128326, 
  128592, 128640, 128768, 128884, 128896, 128981, 129024, 129036, 129040, 129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129339, 129340, 129350, 129351, 131070], Extender:[183, 184, 720, 722, 1600, 1601, 2042, 2043, 3654, 3655, 3782, 3783, 6154, 6155, 6211, 6212, 6823, 6824, 7222, 7223, 7291, 7292, 12293, 12294, 12337, 12342, 12445, 12447, 12540, 12543, 40981, 40982, 42508, 42509, 43471, 43472, 43494, 43495, 43632, 43633, 43741, 43742, 43763, 43765, 65392, 65393, 70493, 70494, 
  71110, 71113, 72344, 72345, 92994, 92996, 94176, 94178, 94179, 94180, 123196, 123198, 125252, 125255], Grapheme_Base:[32, 127, 160, 173, 174, 768, 880, 888, 890, 896, 900, 907, 908, 909, 910, 930, 931, 1155, 1162, 1328, 1329, 1367, 1369, 1419, 1421, 1424, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1488, 1515, 1519, 1525, 1542, 1552, 1563, 1564, 1566, 1611, 1632, 1648, 1649, 1750, 1758, 1759, 1765, 1767, 1769, 1770, 1774, 1806, 1808, 1809, 1810, 1840, 1869, 1958, 1969, 1970, 1984, 2027, 2036, 
  2043, 2046, 2070, 2074, 2075, 2084, 2085, 2088, 2089, 2096, 2111, 2112, 2137, 2142, 2143, 2144, 2155, 2208, 2229, 2230, 2238, 2307, 2362, 2363, 2364, 2365, 2369, 2377, 2381, 2382, 2385, 2392, 2402, 2404, 2433, 2434, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2493, 2494, 2495, 2497, 2503, 2505, 2507, 2509, 2510, 2511, 2524, 2526, 2527, 2530, 2534, 2558, 2563, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2622, 2625, 2649, 
  2653, 2654, 2655, 2662, 2672, 2674, 2677, 2678, 2679, 2691, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2749, 2753, 2761, 2762, 2763, 2765, 2768, 2769, 2784, 2786, 2790, 2802, 2809, 2810, 2818, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2877, 2878, 2880, 2881, 2887, 2889, 2891, 2893, 2908, 2910, 2911, 2914, 2918, 2936, 2947, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 
  3002, 3007, 3008, 3009, 3011, 3014, 3017, 3018, 3021, 3024, 3025, 3046, 3067, 3073, 3076, 3077, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3134, 3137, 3141, 3160, 3163, 3168, 3170, 3174, 3184, 3191, 3201, 3202, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3261, 3263, 3264, 3266, 3267, 3269, 3271, 3273, 3274, 3276, 3294, 3295, 3296, 3298, 3302, 3312, 3313, 3315, 3330, 3332, 3333, 3341, 3342, 3345, 3346, 3387, 3389, 3390, 3391, 3393, 3398, 3401, 3402, 3405, 3406, 3408, 3412, 3415, 3416, 
  3426, 3430, 3456, 3458, 3460, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3536, 3538, 3544, 3551, 3558, 3568, 3570, 3573, 3585, 3633, 3634, 3636, 3647, 3655, 3663, 3676, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3761, 3762, 3764, 3773, 3774, 3776, 3781, 3782, 3783, 3792, 3802, 3804, 3808, 3840, 3864, 3866, 3893, 3894, 3895, 3896, 3897, 3898, 3912, 3913, 3949, 3967, 3968, 3973, 3974, 3976, 3981, 4030, 4038, 4039, 4045, 4046, 4059, 4096, 4141, 4145, 4146, 4152, 
  4153, 4155, 4157, 4159, 4184, 4186, 4190, 4193, 4209, 4213, 4226, 4227, 4229, 4231, 4237, 4238, 4253, 4254, 4294, 4295, 4296, 4301, 4302, 4304, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4960, 4989, 4992, 5018, 5024, 5110, 5112, 5118, 5120, 5789, 5792, 5881, 5888, 5901, 5902, 5906, 5920, 5938, 5941, 5943, 5952, 5970, 5984, 5997, 5998, 6001, 6016, 6068, 6070, 
  6071, 6078, 6086, 6087, 6089, 6100, 6109, 6112, 6122, 6128, 6138, 6144, 6155, 6160, 6170, 6176, 6265, 6272, 6277, 6279, 6313, 6314, 6315, 6320, 6390, 6400, 6431, 6435, 6439, 6441, 6444, 6448, 6450, 6451, 6457, 6464, 6465, 6468, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6608, 6619, 6622, 6679, 6681, 6683, 6686, 6742, 6743, 6744, 6753, 6754, 6755, 6757, 6765, 6771, 6784, 6794, 6800, 6810, 6816, 6830, 6916, 6964, 6971, 6972, 6973, 6978, 6979, 6988, 6992, 7019, 7028, 7037, 7042, 7074, 7078, 7080, 7082, 
  7083, 7086, 7142, 7143, 7144, 7146, 7149, 7150, 7151, 7154, 7156, 7164, 7212, 7220, 7222, 7227, 7242, 7245, 7305, 7312, 7355, 7357, 7368, 7379, 7380, 7393, 7394, 7401, 7405, 7406, 7412, 7413, 7416, 7418, 7419, 7424, 7616, 7680, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8133, 8134, 8148, 8150, 8156, 8157, 8176, 8178, 8181, 8182, 8191, 8192, 8203, 8208, 8232, 8239, 8288, 8304, 8306, 8308, 8335, 8336, 8349, 8352, 8384, 8448, 
  8588, 8592, 9255, 9280, 9291, 9312, 11124, 11126, 11158, 11160, 11311, 11312, 11359, 11360, 11503, 11506, 11508, 11513, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11633, 11648, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11776, 11856, 11904, 11930, 11931, 12020, 12032, 12246, 12272, 12284, 12288, 12330, 12336, 12352, 12353, 12439, 12443, 12544, 12549, 12592, 12593, 12687, 12688, 12731, 12736, 12772, 12784, 12831, 
  12832, 13055, 13056, 19894, 19904, 40944, 40960, 42125, 42128, 42183, 42192, 42540, 42560, 42607, 42611, 42612, 42622, 42654, 42656, 42736, 42738, 42744, 42752, 42944, 42946, 42951, 42999, 43010, 43011, 43014, 43015, 43019, 43020, 43045, 43047, 43052, 43056, 43066, 43072, 43128, 43136, 43204, 43214, 43226, 43250, 43263, 43264, 43302, 43310, 43335, 43346, 43348, 43359, 43389, 43395, 43443, 43444, 43446, 43450, 43452, 43454, 43470, 43471, 43482, 43486, 43493, 43494, 43519, 43520, 43561, 43567, 43569, 
  43571, 43573, 43584, 43587, 43588, 43596, 43597, 43598, 43600, 43610, 43612, 43644, 43645, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43715, 43739, 43756, 43758, 43766, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43880, 43888, 44005, 44006, 44008, 44009, 44013, 44016, 44026, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64286, 64287, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 
  64323, 64325, 64326, 64450, 64467, 64832, 64848, 64912, 64914, 64968, 65008, 65022, 65040, 65050, 65072, 65107, 65108, 65127, 65128, 65132, 65136, 65141, 65142, 65277, 65281, 65438, 65440, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65504, 65511, 65512, 65519, 65532, 65534, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65792, 65795, 65799, 65844, 65847, 65935, 65936, 65948, 65952, 65953, 66E3, 66045, 66176, 66205, 66208, 66257, 
  66273, 66300, 66304, 66340, 66349, 66379, 66384, 66422, 66432, 66462, 66463, 66500, 66504, 66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 66927, 66928, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67671, 67743, 67751, 67760, 67808, 67827, 67828, 67830, 67835, 67868, 67871, 67898, 67903, 67904, 67968, 68024, 68028, 68048, 68050, 68097, 68112, 68116, 68117, 68120, 68121, 68150, 
  68160, 68169, 68176, 68185, 68192, 68256, 68288, 68325, 68331, 68343, 68352, 68406, 68409, 68438, 68440, 68467, 68472, 68498, 68505, 68509, 68521, 68528, 68608, 68681, 68736, 68787, 68800, 68851, 68858, 68900, 68912, 68922, 69216, 69247, 69376, 69416, 69424, 69446, 69457, 69466, 69600, 69623, 69632, 69633, 69634, 69688, 69703, 69710, 69714, 69744, 69762, 69811, 69815, 69817, 69819, 69821, 69822, 69826, 69840, 69865, 69872, 69882, 69891, 69927, 69932, 69933, 69942, 69959, 69968, 70003, 70004, 70007, 
  70018, 70070, 70079, 70089, 70093, 70094, 70096, 70112, 70113, 70133, 70144, 70162, 70163, 70191, 70194, 70196, 70197, 70198, 70200, 70206, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70314, 70320, 70367, 70368, 70371, 70384, 70394, 70402, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70461, 70462, 70463, 70464, 70465, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70493, 70500, 70656, 70712, 70720, 70722, 70725, 70726, 70727, 70746, 
  70747, 70748, 70749, 70750, 70751, 70752, 70784, 70832, 70833, 70835, 70841, 70842, 70843, 70845, 70846, 70847, 70849, 70850, 70852, 70856, 70864, 70874, 71040, 71087, 71088, 71090, 71096, 71100, 71102, 71103, 71105, 71132, 71168, 71219, 71227, 71229, 71230, 71231, 71233, 71237, 71248, 71258, 71264, 71277, 71296, 71339, 71340, 71341, 71342, 71344, 71350, 71351, 71352, 71353, 71360, 71370, 71424, 71451, 71456, 71458, 71462, 71463, 71472, 71488, 71680, 71727, 71736, 71737, 71739, 71740, 71840, 71923, 
  71935, 71936, 72096, 72104, 72106, 72148, 72156, 72160, 72161, 72165, 72192, 72193, 72203, 72243, 72249, 72251, 72255, 72263, 72272, 72273, 72279, 72281, 72284, 72330, 72343, 72344, 72346, 72355, 72384, 72441, 72704, 72713, 72714, 72752, 72766, 72767, 72768, 72774, 72784, 72813, 72816, 72848, 72873, 72874, 72881, 72882, 72884, 72885, 72960, 72967, 72968, 72970, 72971, 73009, 73030, 73031, 73040, 73050, 73056, 73062, 73063, 73065, 73066, 73103, 73107, 73109, 73110, 73111, 73112, 73113, 73120, 73130, 
  73440, 73459, 73461, 73465, 73664, 73714, 73727, 74650, 74752, 74863, 74864, 74869, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92768, 92778, 92782, 92784, 92880, 92910, 92917, 92918, 92928, 92976, 92983, 92998, 93008, 93018, 93019, 93026, 93027, 93048, 93053, 93072, 93760, 93851, 93952, 94027, 94032, 94088, 94099, 94112, 94176, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 
  113801, 113808, 113818, 113820, 113821, 113823, 113824, 118784, 119030, 119040, 119079, 119081, 119141, 119142, 119143, 119146, 119150, 119171, 119173, 119180, 119210, 119214, 119273, 119296, 119362, 119365, 119366, 119520, 119540, 119552, 119639, 119648, 119673, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 
  120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120780, 120782, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121484, 123136, 123181, 123191, 123198, 123200, 123210, 123214, 123216, 123584, 123628, 123632, 123642, 123647, 123648, 124928, 125125, 125127, 125136, 125184, 125252, 125259, 125260, 125264, 125274, 125278, 125280, 126065, 126133, 126209, 126270, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 
  126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 126704, 126706, 126976, 127020, 127024, 127124, 127136, 127151, 127153, 127168, 
  127169, 127184, 127185, 127222, 127232, 127245, 127248, 127341, 127344, 127405, 127462, 127491, 127504, 127548, 127552, 127561, 127568, 127570, 127584, 127590, 127744, 128726, 128736, 128749, 128752, 128763, 128768, 128884, 128896, 128985, 128992, 129004, 129024, 129036, 129040, 129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129293, 129394, 129395, 129399, 129402, 129443, 129445, 129451, 129454, 129483, 129485, 129620, 129632, 129646, 129648, 129652, 129656, 129659, 129664, 
  129667, 129680, 129686, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102], Grapheme_Extend:[768, 880, 1155, 1162, 1425, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1552, 1563, 1611, 1632, 1648, 1649, 1750, 1757, 1759, 1765, 1767, 1769, 1770, 1774, 1809, 1810, 1840, 1867, 1958, 1969, 2027, 2036, 2045, 2046, 2070, 2074, 2075, 2084, 2085, 2088, 2089, 2094, 2137, 2140, 2259, 2274, 2275, 2307, 2362, 2363, 2364, 2365, 2369, 2377, 2381, 2382, 2385, 
  2392, 2402, 2404, 2433, 2434, 2492, 2493, 2494, 2495, 2497, 2501, 2509, 2510, 2519, 2520, 2530, 2532, 2558, 2559, 2561, 2563, 2620, 2621, 2625, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2672, 2674, 2677, 2678, 2689, 2691, 2748, 2749, 2753, 2758, 2759, 2761, 2765, 2766, 2786, 2788, 2810, 2816, 2817, 2818, 2876, 2877, 2878, 2880, 2881, 2885, 2893, 2894, 2902, 2904, 2914, 2916, 2946, 2947, 3006, 3007, 3008, 3009, 3021, 3022, 3031, 3032, 3072, 3073, 3076, 3077, 3134, 3137, 3142, 3145, 3146, 3150, 3157, 
  3159, 3170, 3172, 3201, 3202, 3260, 3261, 3263, 3264, 3266, 3267, 3270, 3271, 3276, 3278, 3285, 3287, 3298, 3300, 3328, 3330, 3387, 3389, 3390, 3391, 3393, 3397, 3405, 3406, 3415, 3416, 3426, 3428, 3530, 3531, 3535, 3536, 3538, 3541, 3542, 3543, 3551, 3552, 3633, 3634, 3636, 3643, 3655, 3663, 3761, 3762, 3764, 3773, 3784, 3790, 3864, 3866, 3893, 3894, 3895, 3896, 3897, 3898, 3953, 3967, 3968, 3973, 3974, 3976, 3981, 3992, 3993, 4029, 4038, 4039, 4141, 4145, 4146, 4152, 4153, 4155, 4157, 4159, 4184, 
  4186, 4190, 4193, 4209, 4213, 4226, 4227, 4229, 4231, 4237, 4238, 4253, 4254, 4957, 4960, 5906, 5909, 5938, 5941, 5970, 5972, 6002, 6004, 6068, 6070, 6071, 6078, 6086, 6087, 6089, 6100, 6109, 6110, 6155, 6158, 6277, 6279, 6313, 6314, 6432, 6435, 6439, 6441, 6450, 6451, 6457, 6460, 6679, 6681, 6683, 6684, 6742, 6743, 6744, 6751, 6752, 6753, 6754, 6755, 6757, 6765, 6771, 6781, 6783, 6784, 6832, 6847, 6912, 6916, 6964, 6971, 6972, 6973, 6978, 6979, 7019, 7028, 7040, 7042, 7074, 7078, 7080, 7082, 7083, 
  7086, 7142, 7143, 7144, 7146, 7149, 7150, 7151, 7154, 7212, 7220, 7222, 7224, 7376, 7379, 7380, 7393, 7394, 7401, 7405, 7406, 7412, 7413, 7416, 7418, 7616, 7674, 7675, 7680, 8204, 8205, 8400, 8433, 11503, 11506, 11647, 11648, 11744, 11776, 12330, 12336, 12441, 12443, 42607, 42611, 42612, 42622, 42654, 42656, 42736, 42738, 43010, 43011, 43014, 43015, 43019, 43020, 43045, 43047, 43204, 43206, 43232, 43250, 43263, 43264, 43302, 43310, 43335, 43346, 43392, 43395, 43443, 43444, 43446, 43450, 43452, 
  43454, 43493, 43494, 43561, 43567, 43569, 43571, 43573, 43575, 43587, 43588, 43596, 43597, 43644, 43645, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43756, 43758, 43766, 43767, 44005, 44006, 44008, 44009, 44013, 44014, 64286, 64287, 65024, 65040, 65056, 65072, 65438, 65440, 66045, 66046, 66272, 66273, 66422, 66427, 68097, 68100, 68101, 68103, 68108, 68112, 68152, 68155, 68159, 68160, 68325, 68327, 68900, 68904, 69446, 69457, 69633, 69634, 69688, 69703, 69759, 69762, 69811, 
  69815, 69817, 69819, 69888, 69891, 69927, 69932, 69933, 69941, 70003, 70004, 70016, 70018, 70070, 70079, 70089, 70093, 70191, 70194, 70196, 70197, 70198, 70200, 70206, 70207, 70367, 70368, 70371, 70379, 70400, 70402, 70459, 70461, 70462, 70463, 70464, 70465, 70487, 70488, 70502, 70509, 70512, 70517, 70712, 70720, 70722, 70725, 70726, 70727, 70750, 70751, 70832, 70833, 70835, 70841, 70842, 70843, 70845, 70846, 70847, 70849, 70850, 70852, 71087, 71088, 71090, 71094, 71100, 71102, 71103, 71105, 71132, 
  71134, 71219, 71227, 71229, 71230, 71231, 71233, 71339, 71340, 71341, 71342, 71344, 71350, 71351, 71352, 71453, 71456, 71458, 71462, 71463, 71468, 71727, 71736, 71737, 71739, 72148, 72152, 72154, 72156, 72160, 72161, 72193, 72203, 72243, 72249, 72251, 72255, 72263, 72264, 72273, 72279, 72281, 72284, 72330, 72343, 72344, 72346, 72752, 72759, 72760, 72766, 72767, 72768, 72850, 72872, 72874, 72881, 72882, 72884, 72885, 72887, 73009, 73015, 73018, 73019, 73020, 73022, 73023, 73030, 73031, 73032, 73104, 
  73106, 73109, 73110, 73111, 73112, 73459, 73461, 92912, 92917, 92976, 92983, 94031, 94032, 94095, 94099, 113821, 113823, 119141, 119142, 119143, 119146, 119150, 119155, 119163, 119171, 119173, 119180, 119210, 119214, 119362, 119365, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123184, 123191, 123628, 123632, 125136, 125143, 125252, 125259, 917536, 917632, 917760, 918E3], 
  Hex_Digit:[48, 58, 65, 71, 97, 103, 65296, 65306, 65313, 65319, 65345, 65351], IDS_Binary_Operator:[12272, 12274, 12276, 12284], IDS_Trinary_Operator:[12274, 12276], ID_Continue:[48, 58, 65, 91, 95, 96, 97, 123, 170, 171, 181, 182, 183, 184, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 768, 885, 886, 888, 890, 894, 895, 896, 902, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1155, 1160, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1425, 1470, 1471, 1472, 
  1473, 1475, 1476, 1478, 1479, 1480, 1488, 1515, 1519, 1523, 1552, 1563, 1568, 1642, 1646, 1748, 1749, 1757, 1759, 1769, 1770, 1789, 1791, 1792, 1808, 1867, 1869, 1970, 1984, 2038, 2042, 2043, 2045, 2046, 2048, 2094, 2112, 2140, 2144, 2155, 2208, 2229, 2230, 2238, 2259, 2274, 2275, 2404, 2406, 2416, 2417, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2534, 2546, 2556, 2557, 2558, 2559, 2561, 2564, 
  2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2649, 2653, 2654, 2655, 2662, 2678, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2800, 2809, 2816, 2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2908, 2910, 2911, 2916, 
  2918, 2928, 2929, 2930, 2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 3014, 3017, 3018, 3022, 3024, 3025, 3031, 3032, 3046, 3056, 3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3160, 3163, 3168, 3172, 3174, 3184, 3200, 3204, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 
  3313, 3315, 3328, 3332, 3333, 3341, 3342, 3345, 3346, 3397, 3398, 3401, 3402, 3407, 3412, 3416, 3423, 3428, 3430, 3440, 3450, 3456, 3458, 3460, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3572, 3585, 3643, 3648, 3663, 3664, 3674, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3774, 3776, 3781, 3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808, 3840, 3841, 3864, 3866, 3872, 3882, 3893, 3894, 3895, 3896, 
  3897, 3898, 3902, 3912, 3913, 3949, 3953, 3973, 3974, 3992, 3993, 4029, 4038, 4039, 4096, 4170, 4176, 4254, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4348, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4960, 4969, 4978, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5870, 5881, 5888, 5901, 5902, 5909, 5920, 5941, 
  5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 6016, 6100, 6103, 6104, 6108, 6110, 6112, 6122, 6155, 6158, 6160, 6170, 6176, 6265, 6272, 6315, 6320, 6390, 6400, 6431, 6432, 6444, 6448, 6460, 6470, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6608, 6619, 6656, 6684, 6688, 6751, 6752, 6781, 6783, 6794, 6800, 6810, 6823, 6824, 6832, 6846, 6912, 6988, 6992, 7002, 7019, 7028, 7040, 7156, 7168, 7224, 7232, 7242, 7245, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 7376, 7379, 7380, 7419, 7424, 7674, 7675, 7958, 
  7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8255, 8257, 8276, 8277, 8305, 8306, 8319, 8320, 8336, 8349, 8400, 8413, 8417, 8418, 8421, 8433, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8585, 11264, 11311, 11312, 11359, 11360, 
  11493, 11499, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11647, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11744, 11776, 12293, 12296, 12321, 12336, 12337, 12342, 12344, 12349, 12353, 12439, 12441, 12448, 12449, 12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42540, 42560, 42608, 42612, 
  42622, 42623, 42738, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43048, 43072, 43124, 43136, 43206, 43216, 43226, 43232, 43256, 43259, 43260, 43261, 43310, 43312, 43348, 43360, 43389, 43392, 43457, 43471, 43482, 43488, 43519, 43520, 43575, 43584, 43598, 43600, 43610, 43616, 43639, 43642, 43715, 43739, 43742, 43744, 43760, 43762, 43767, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44011, 44012, 44014, 44016, 44026, 44032, 
  55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64297, 64298, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64434, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65020, 65024, 65040, 65056, 65072, 65075, 65077, 65101, 65104, 65136, 65141, 65142, 65277, 65296, 65306, 65313, 65339, 65343, 65344, 65345, 65371, 65382, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 
  65598, 65599, 65614, 65616, 65630, 65664, 65787, 65856, 65909, 66045, 66046, 66176, 66205, 66208, 66257, 66272, 66273, 66304, 66336, 66349, 66379, 66384, 66427, 66432, 66462, 66464, 66500, 66504, 66512, 66513, 66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 
  67898, 67968, 68024, 68030, 68032, 68096, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 68159, 68160, 68192, 68221, 68224, 68253, 68288, 68296, 68297, 68327, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68736, 68787, 68800, 68851, 68864, 68904, 68912, 68922, 69376, 69405, 69415, 69416, 69424, 69457, 69600, 69623, 69632, 69703, 69734, 69744, 69759, 69819, 69840, 69865, 69872, 69882, 69888, 69941, 69942, 69952, 69956, 69959, 69968, 70004, 70006, 
  70007, 70016, 70085, 70089, 70093, 70096, 70107, 70108, 70109, 70144, 70162, 70163, 70200, 70206, 70207, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 70320, 70379, 70384, 70394, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70459, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 70488, 70493, 70500, 70502, 70509, 70512, 70517, 70656, 70731, 70736, 70746, 70750, 70752, 70784, 70854, 70855, 70856, 70864, 70874, 71040, 
  71094, 71096, 71105, 71128, 71134, 71168, 71233, 71236, 71237, 71248, 71258, 71296, 71353, 71360, 71370, 71424, 71451, 71453, 71468, 71472, 71482, 71680, 71739, 71840, 71914, 71935, 71936, 72096, 72104, 72106, 72152, 72154, 72162, 72163, 72165, 72192, 72255, 72263, 72264, 72272, 72346, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72769, 72784, 72794, 72818, 72848, 72850, 72872, 72873, 72887, 72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 
  73050, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 73107, 73113, 73120, 73130, 73440, 73463, 73728, 74650, 74752, 74863, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92768, 92778, 92880, 92910, 92912, 92917, 92928, 92983, 92992, 92996, 93008, 93018, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 
  113771, 113776, 113789, 113792, 113801, 113808, 113818, 113821, 113823, 119141, 119146, 119149, 119155, 119163, 119171, 119173, 119180, 119210, 119214, 119362, 119365, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 
  120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 120782, 120832, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123184, 123198, 123200, 123210, 123214, 123215, 123584, 123642, 124928, 125125, 125136, 125143, 125184, 125260, 125264, 125274, 126464, 126468, 126469, 
  126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 
  131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102, 917760, 918E3], ID_Start:[65, 91, 97, 123, 170, 171, 181, 182, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 880, 885, 886, 888, 890, 894, 895, 896, 902, 903, 904, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1488, 1515, 1519, 1523, 1568, 1611, 1646, 1648, 1649, 1748, 1749, 1750, 1765, 1767, 1774, 1776, 1786, 1789, 1791, 
  1792, 1808, 1809, 1810, 1840, 1869, 1958, 1969, 1970, 1994, 2027, 2036, 2038, 2042, 2043, 2048, 2070, 2074, 2075, 2084, 2085, 2088, 2089, 2112, 2137, 2144, 2155, 2208, 2229, 2230, 2238, 2308, 2362, 2365, 2366, 2384, 2385, 2392, 2402, 2417, 2433, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2493, 2494, 2510, 2511, 2524, 2526, 2527, 2530, 2544, 2546, 2556, 2557, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2649, 2653, 2654, 2655, 2674, 
  2677, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2749, 2750, 2768, 2769, 2784, 2786, 2809, 2810, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2877, 2878, 2908, 2910, 2911, 2914, 2929, 2930, 2947, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3024, 3025, 3077, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3134, 3160, 3163, 3168, 3170, 3200, 3201, 3205, 3213, 3214, 3217, 3218, 
  3241, 3242, 3252, 3253, 3258, 3261, 3262, 3294, 3295, 3296, 3298, 3313, 3315, 3333, 3341, 3342, 3345, 3346, 3387, 3389, 3390, 3406, 3407, 3412, 3415, 3423, 3426, 3450, 3456, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3585, 3633, 3634, 3636, 3648, 3655, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3761, 3762, 3764, 3773, 3774, 3776, 3781, 3782, 3783, 3804, 3808, 3840, 3841, 3904, 3912, 3913, 3949, 3976, 3981, 4096, 4139, 4159, 4160, 4176, 4182, 4186, 4190, 4193, 
  4194, 4197, 4199, 4206, 4209, 4213, 4226, 4238, 4239, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4348, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5870, 5881, 5888, 5901, 5902, 5906, 5920, 5938, 5952, 5970, 5984, 5997, 5998, 6001, 6016, 6068, 6103, 6104, 6108, 6109, 6176, 
  6265, 6272, 6313, 6314, 6315, 6320, 6390, 6400, 6431, 6480, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6656, 6679, 6688, 6741, 6823, 6824, 6917, 6964, 6981, 6988, 7043, 7073, 7086, 7088, 7098, 7142, 7168, 7204, 7245, 7248, 7258, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 7401, 7405, 7406, 7412, 7413, 7415, 7418, 7419, 7424, 7616, 7680, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 
  8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8305, 8306, 8319, 8320, 8336, 8349, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8585, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11503, 11506, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11648, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 
  11743, 12293, 12296, 12321, 12330, 12337, 12342, 12344, 12349, 12353, 12439, 12443, 12448, 12449, 12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42528, 42538, 42540, 42560, 42607, 42623, 42654, 42656, 42736, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43010, 43011, 43014, 43015, 43019, 43020, 43043, 43072, 43124, 43138, 43188, 43250, 43256, 43259, 43260, 43261, 43263, 43274, 
  43302, 43312, 43335, 43360, 43389, 43396, 43443, 43471, 43472, 43488, 43493, 43494, 43504, 43514, 43519, 43520, 43561, 43584, 43587, 43588, 43596, 43616, 43639, 43642, 43643, 43646, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43715, 43739, 43742, 43744, 43755, 43762, 43765, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44003, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 
  64280, 64285, 64286, 64287, 64297, 64298, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64434, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65020, 65136, 65141, 65142, 65277, 65313, 65339, 65345, 65371, 65382, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65856, 65909, 66176, 66205, 66208, 66257, 66304, 66336, 66349, 66379, 66384, 66422, 66432, 66462, 66464, 
  66500, 66504, 66512, 66513, 66518, 66560, 66718, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68097, 68112, 68116, 68117, 68120, 68121, 68150, 68192, 68221, 68224, 68253, 68288, 68296, 68297, 68325, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 
  68498, 68608, 68681, 68736, 68787, 68800, 68851, 68864, 68900, 69376, 69405, 69415, 69416, 69424, 69446, 69600, 69623, 69635, 69688, 69763, 69808, 69840, 69865, 69891, 69927, 69956, 69957, 69968, 70003, 70006, 70007, 70019, 70067, 70081, 70085, 70106, 70107, 70108, 70109, 70144, 70162, 70163, 70188, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 70320, 70367, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70461, 70462, 70480, 70481, 70493, 
  70498, 70656, 70709, 70727, 70731, 70751, 70752, 70784, 70832, 70852, 70854, 70855, 70856, 71040, 71087, 71128, 71132, 71168, 71216, 71236, 71237, 71296, 71339, 71352, 71353, 71424, 71451, 71680, 71724, 71840, 71904, 71935, 71936, 72096, 72104, 72106, 72145, 72161, 72162, 72163, 72164, 72192, 72193, 72203, 72243, 72250, 72251, 72272, 72273, 72284, 72330, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72751, 72768, 72769, 72818, 72848, 72960, 72967, 72968, 72970, 72971, 73009, 73030, 73031, 73056, 
  73062, 73063, 73065, 73066, 73098, 73112, 73113, 73440, 73459, 73728, 74650, 74752, 74863, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92880, 92910, 92928, 92976, 92992, 92996, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94032, 94033, 94099, 94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 119808, 119893, 119894, 119965, 
  119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 123136, 123181, 123191, 123198, 123214, 123215, 123584, 
  123628, 124928, 125125, 125184, 125252, 125259, 125260, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 
  126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102], Ideographic:[12294, 12296, 12321, 12330, 12344, 12347, 13312, 19894, 19968, 40944, 63744, 64110, 64112, 64218, 94208, 100344, 100352, 101107, 110960, 111356, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102], Join_Control:[8204, 8206], Logical_Order_Exception:[3648, 3653, 3776, 
  3781, 6581, 6584, 6586, 6587, 43701, 43703, 43705, 43706, 43707, 43709], Lowercase:[97, 123, 170, 171, 181, 182, 186, 187, 223, 247, 248, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 330, 
  331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 385, 387, 388, 389, 390, 392, 393, 396, 398, 402, 403, 405, 406, 409, 412, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 426, 428, 429, 430, 432, 433, 436, 437, 438, 439, 441, 443, 445, 448, 454, 455, 457, 458, 460, 461, 462, 463, 464, 465, 
  466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 499, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 570, 572, 573, 575, 577, 578, 579, 
  583, 584, 585, 586, 587, 588, 589, 590, 591, 660, 661, 697, 704, 706, 736, 741, 837, 838, 881, 882, 883, 884, 887, 888, 890, 894, 912, 913, 940, 975, 976, 978, 981, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1012, 1013, 1014, 1016, 1017, 1019, 1021, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 
  1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 
  1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 
  1325, 1326, 1327, 1328, 1376, 1417, 4304, 4347, 4349, 4352, 5112, 5118, 7296, 7305, 7424, 7616, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 
  7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7838, 7839, 7840, 
  7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 
  7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 7958, 7968, 7976, 7984, 7992, 8E3, 8006, 8016, 8024, 8032, 8040, 8048, 8062, 8064, 8072, 8080, 8088, 8096, 8104, 8112, 8117, 8118, 8120, 8126, 8127, 8130, 8133, 8134, 8136, 8144, 8148, 8150, 8152, 8160, 8168, 8178, 8181, 8182, 8184, 8305, 8306, 8319, 8320, 8336, 8349, 8458, 8459, 8462, 8464, 8467, 8468, 8495, 8496, 8500, 8501, 8505, 8506, 8508, 8510, 8518, 8522, 8526, 8527, 8560, 8576, 8580, 8581, 9424, 9450, 11312, 11359, 
  11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11377, 11378, 11379, 11381, 11382, 11390, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 
  11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11493, 11500, 11501, 11502, 11503, 11507, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 
  42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 42601, 42602, 42603, 42604, 42605, 42606, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42654, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42802, 
  42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42873, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 
  42885, 42886, 42887, 42888, 42892, 42893, 42894, 42895, 42897, 42898, 42899, 42902, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42927, 42928, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42944, 42947, 42948, 43E3, 43003, 43824, 43867, 43868, 43880, 43888, 43968, 64256, 64263, 64275, 64280, 65345, 65371, 66600, 66640, 66776, 66812, 68800, 68851, 71872, 71904, 93792, 93824, 
  119834, 119860, 119886, 119893, 119894, 119912, 119938, 119964, 119990, 119994, 119995, 119996, 119997, 120004, 120005, 120016, 120042, 120068, 120094, 120120, 120146, 120172, 120198, 120224, 120250, 120276, 120302, 120328, 120354, 120380, 120406, 120432, 120458, 120486, 120514, 120539, 120540, 120546, 120572, 120597, 120598, 120604, 120630, 120655, 120656, 120662, 120688, 120713, 120714, 120720, 120746, 120771, 120772, 120778, 120779, 120780, 125218, 125252], Math:[43, 44, 60, 63, 94, 95, 124, 
  125, 126, 127, 172, 173, 177, 178, 215, 216, 247, 248, 976, 979, 981, 982, 1008, 1010, 1012, 1015, 1542, 1545, 8214, 8215, 8242, 8245, 8256, 8257, 8260, 8261, 8274, 8275, 8289, 8293, 8314, 8319, 8330, 8335, 8400, 8413, 8417, 8418, 8421, 8423, 8427, 8432, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 8485, 8488, 8490, 8492, 8494, 8495, 8498, 8499, 8505, 8508, 8522, 8523, 8524, 8592, 8616, 8617, 8623, 8624, 8626, 8630, 8632, 8636, 8668, 8669, 8670, 8676, 8678, 8692, 8960, 8968, 
  8972, 8992, 8994, 9084, 9085, 9115, 9142, 9143, 9144, 9168, 9169, 9180, 9187, 9632, 9634, 9646, 9656, 9660, 9666, 9670, 9672, 9674, 9676, 9679, 9684, 9698, 9699, 9700, 9701, 9703, 9709, 9720, 9728, 9733, 9735, 9792, 9793, 9794, 9795, 9824, 9828, 9837, 9840, 10176, 10240, 10496, 11008, 11056, 11077, 11079, 11085, 64297, 64298, 65121, 65127, 65128, 65129, 65291, 65292, 65308, 65311, 65340, 65341, 65342, 65343, 65372, 65373, 65374, 65375, 65506, 65507, 65513, 65517, 119808, 119893, 119894, 119965, 
  119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120780, 120782, 120832, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 
  126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 126704, 126706], Noncharacter_Code_Point:[64976, 65008, 65534, 65536, 131070, 131072, 196606, 196608, 262142, 262144, 327678, 327680, 393214, 393216, 458750, 458752, 524286, 
  524288, 589822, 589824, 655358, 655360, 720894, 720896, 786430, 786432, 851966, 851968, 917502, 917504, 983038, 983040, 1048574, 1048576, 1114110, 1114112], Pattern_Syntax:[33, 48, 58, 65, 91, 95, 96, 97, 123, 127, 161, 168, 169, 170, 171, 173, 174, 175, 176, 178, 182, 183, 187, 188, 191, 192, 215, 216, 247, 248, 8208, 8232, 8240, 8255, 8257, 8276, 8277, 8287, 8592, 9312, 9472, 10102, 10132, 11264, 11776, 11904, 12289, 12292, 12296, 12321, 12336, 12337, 64830, 64832, 65093, 65095], Pattern_White_Space:[9, 
  14, 32, 33, 133, 134, 8206, 8208, 8232, 8234], Quotation_Mark:[34, 35, 39, 40, 171, 172, 187, 188, 8216, 8224, 8249, 8251, 11842, 11843, 12300, 12304, 12317, 12320, 65089, 65093, 65282, 65283, 65287, 65288, 65378, 65380], Radical:[11904, 11930, 11931, 12020, 12032, 12246], Regional_Indicator:[127462, 127488], Sentence_Terminal:[33, 34, 46, 47, 63, 64, 1417, 1418, 1566, 1568, 1748, 1749, 1792, 1795, 2041, 2042, 2103, 2104, 2105, 2106, 2109, 2111, 2404, 2406, 4170, 4172, 4962, 4963, 4967, 4969, 5742, 
  5743, 5941, 5943, 6147, 6148, 6153, 6154, 6468, 6470, 6824, 6828, 7002, 7004, 7006, 7008, 7227, 7229, 7294, 7296, 8252, 8254, 8263, 8266, 11822, 11823, 11836, 11837, 12290, 12291, 42239, 42240, 42510, 42512, 42739, 42740, 42743, 42744, 43126, 43128, 43214, 43216, 43311, 43312, 43464, 43466, 43613, 43616, 43760, 43762, 44011, 44012, 65106, 65107, 65110, 65112, 65281, 65282, 65294, 65295, 65311, 65312, 65377, 65378, 68182, 68184, 69461, 69466, 69703, 69705, 69822, 69826, 69953, 69956, 70085, 70087, 
  70093, 70094, 70110, 70112, 70200, 70202, 70203, 70205, 70313, 70314, 70731, 70733, 71106, 71108, 71113, 71128, 71233, 71235, 71484, 71487, 72258, 72260, 72347, 72349, 72769, 72771, 73463, 73465, 92782, 92784, 92917, 92918, 92983, 92985, 92996, 92997, 93848, 93849, 113823, 113824, 121480, 121481], Soft_Dotted:[105, 107, 303, 304, 585, 586, 616, 617, 669, 670, 690, 691, 1011, 1012, 1110, 1111, 1112, 1113, 7522, 7523, 7574, 7575, 7588, 7589, 7592, 7593, 7725, 7726, 7883, 7884, 8305, 8306, 8520, 8522, 
  11388, 11389, 119842, 119844, 119894, 119896, 119946, 119948, 119998, 12E4, 120050, 120052, 120102, 120104, 120154, 120156, 120206, 120208, 120258, 120260, 120310, 120312, 120362, 120364, 120414, 120416, 120466, 120468], Terminal_Punctuation:[33, 34, 44, 45, 46, 47, 58, 60, 63, 64, 894, 895, 903, 904, 1417, 1418, 1475, 1476, 1548, 1549, 1563, 1564, 1566, 1568, 1748, 1749, 1792, 1803, 1804, 1805, 2040, 2042, 2096, 2111, 2142, 2143, 2404, 2406, 3674, 3676, 3848, 3849, 3853, 3859, 4170, 4172, 4961, 
  4969, 5742, 5743, 5867, 5870, 5941, 5943, 6100, 6103, 6106, 6107, 6146, 6150, 6152, 6154, 6468, 6470, 6824, 6828, 7002, 7004, 7005, 7008, 7227, 7232, 7294, 7296, 8252, 8254, 8263, 8266, 11822, 11823, 11836, 11837, 11841, 11842, 11852, 11853, 11854, 11856, 12289, 12291, 42238, 42240, 42509, 42512, 42739, 42744, 43126, 43128, 43214, 43216, 43311, 43312, 43463, 43466, 43613, 43616, 43743, 43744, 43760, 43762, 44011, 44012, 65104, 65107, 65108, 65112, 65281, 65282, 65292, 65293, 65294, 65295, 65306, 
  65308, 65311, 65312, 65377, 65378, 65380, 65381, 66463, 66464, 66512, 66513, 67671, 67672, 67871, 67872, 68182, 68184, 68336, 68342, 68410, 68416, 68505, 68509, 69461, 69466, 69703, 69710, 69822, 69826, 69953, 69956, 70085, 70087, 70093, 70094, 70110, 70112, 70200, 70205, 70313, 70314, 70731, 70734, 70747, 70748, 71106, 71110, 71113, 71128, 71233, 71235, 71484, 71487, 72258, 72260, 72347, 72349, 72353, 72355, 72769, 72772, 72817, 72818, 73463, 73465, 74864, 74869, 92782, 92784, 92917, 92918, 92983, 
  92986, 92996, 92997, 93847, 93849, 113823, 113824, 121479, 121483], Unified_Ideograph:[13312, 19894, 19968, 40944, 64014, 64016, 64017, 64018, 64019, 64021, 64031, 64032, 64033, 64034, 64035, 64037, 64039, 64042, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457], Uppercase:[65, 91, 192, 215, 216, 223, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 
  290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 385, 387, 388, 389, 390, 392, 393, 396, 398, 402, 
  403, 405, 406, 409, 412, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 426, 428, 429, 430, 432, 433, 436, 437, 438, 439, 441, 444, 445, 452, 453, 455, 456, 458, 459, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 498, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 
  532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 570, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 880, 881, 882, 883, 886, 887, 895, 896, 902, 903, 904, 907, 908, 909, 910, 912, 913, 930, 931, 940, 975, 976, 978, 981, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1E3, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1012, 1013, 
  1015, 1016, 1017, 1019, 1021, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 
  1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 
  1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1329, 1367, 4256, 4294, 4295, 4296, 4301, 4302, 5024, 5110, 7312, 7355, 7357, 7360, 7680, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 
  7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 
  7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7838, 7839, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 
  7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 7960, 7966, 7976, 7984, 7992, 8E3, 8008, 8014, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8040, 8048, 8120, 8124, 8136, 8140, 8152, 8156, 8168, 8173, 8184, 8188, 8450, 8451, 8455, 8456, 8459, 8462, 8464, 8467, 
  8469, 8470, 8473, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8496, 8500, 8510, 8512, 8517, 8518, 8544, 8560, 8579, 8580, 9398, 9424, 11264, 11311, 11360, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11377, 11378, 11379, 11381, 11382, 11390, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 
  11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11499, 11500, 11501, 11502, 11506, 
  11507, 42560, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 42601, 42602, 42603, 42604, 42605, 42624, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 
  42649, 42650, 42651, 42786, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42802, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 
  42857, 42858, 42859, 42860, 42861, 42862, 42863, 42873, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42891, 42892, 42893, 42894, 42896, 42897, 42898, 42899, 42902, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42927, 42928, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42946, 42947, 42948, 42951, 65313, 65339, 66560, 66600, 66736, 
  66772, 68736, 68787, 71840, 71872, 93760, 93792, 119808, 119834, 119860, 119886, 119912, 119938, 119964, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119990, 120016, 120042, 120068, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120120, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120172, 120198, 120224, 120250, 120276, 120302, 120328, 120354, 120380, 120406, 120432, 120458, 120488, 120513, 120546, 120571, 120604, 120629, 120662, 
  120687, 120720, 120745, 120778, 120779, 125184, 125218, 127280, 127306, 127312, 127338, 127344, 127370], Variation_Selector:[6155, 6158, 65024, 65040, 917760, 918E3], White_Space:[9, 14, 32, 33, 133, 134, 160, 161, 5760, 5761, 8192, 8203, 8232, 8234, 8239, 8240, 8287, 8288, 12288, 12289], XID_Continue:[48, 58, 65, 91, 95, 96, 97, 123, 170, 171, 181, 182, 183, 184, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 768, 885, 886, 888, 891, 894, 895, 896, 902, 907, 908, 
  909, 910, 930, 931, 1014, 1015, 1154, 1155, 1160, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1425, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1488, 1515, 1519, 1523, 1552, 1563, 1568, 1642, 1646, 1748, 1749, 1757, 1759, 1769, 1770, 1789, 1791, 1792, 1808, 1867, 1869, 1970, 1984, 2038, 2042, 2043, 2045, 2046, 2048, 2094, 2112, 2140, 2144, 2155, 2208, 2229, 2230, 2238, 2259, 2274, 2275, 2404, 2406, 2416, 2417, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 
  2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2534, 2546, 2556, 2557, 2558, 2559, 2561, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2649, 2653, 2654, 2655, 2662, 2678, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2800, 2809, 2816, 2817, 2820, 2821, 2829, 2831, 
  2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2908, 2910, 2911, 2916, 2918, 2928, 2929, 2930, 2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 3014, 3017, 3018, 3022, 3024, 3025, 3031, 3032, 3046, 3056, 3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3160, 3163, 3168, 3172, 3174, 3184, 3200, 3204, 3205, 3213, 3214, 
  3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 3313, 3315, 3328, 3332, 3333, 3341, 3342, 3345, 3346, 3397, 3398, 3401, 3402, 3407, 3412, 3416, 3423, 3428, 3430, 3440, 3450, 3456, 3458, 3460, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3572, 3585, 3643, 3648, 3663, 3664, 3674, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 
  3774, 3776, 3781, 3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808, 3840, 3841, 3864, 3866, 3872, 3882, 3893, 3894, 3895, 3896, 3897, 3898, 3902, 3912, 3913, 3949, 3953, 3973, 3974, 3992, 3993, 4029, 4038, 4039, 4096, 4170, 4176, 4254, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4348, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4960, 4969, 4978, 4992, 
  5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5870, 5881, 5888, 5901, 5902, 5909, 5920, 5941, 5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 6016, 6100, 6103, 6104, 6108, 6110, 6112, 6122, 6155, 6158, 6160, 6170, 6176, 6265, 6272, 6315, 6320, 6390, 6400, 6431, 6432, 6444, 6448, 6460, 6470, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6608, 6619, 6656, 6684, 6688, 6751, 6752, 6781, 6783, 6794, 6800, 6810, 6823, 6824, 6832, 6846, 6912, 6988, 6992, 7002, 7019, 7028, 7040, 
  7156, 7168, 7224, 7232, 7242, 7245, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 7376, 7379, 7380, 7419, 7424, 7674, 7675, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8255, 8257, 8276, 8277, 8305, 8306, 8319, 8320, 8336, 8349, 8400, 8413, 8417, 8418, 8421, 8433, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 
  8485, 8486, 8487, 8488, 8489, 8490, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8585, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11647, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11744, 11776, 12293, 12296, 12321, 12336, 12337, 12342, 12344, 12349, 12353, 12439, 12441, 12443, 12445, 12448, 12449, 12539, 12540, 12544, 12549, 12592, 12593, 
  12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42540, 42560, 42608, 42612, 42622, 42623, 42738, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43048, 43072, 43124, 43136, 43206, 43216, 43226, 43232, 43256, 43259, 43260, 43261, 43310, 43312, 43348, 43360, 43389, 43392, 43457, 43471, 43482, 43488, 43519, 43520, 43575, 43584, 43598, 43600, 43610, 43616, 43639, 43642, 43715, 43739, 43742, 43744, 43760, 43762, 43767, 43777, 
  43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44011, 44012, 44014, 44016, 44026, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64297, 64298, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64434, 64467, 64606, 64612, 64830, 64848, 64912, 64914, 64968, 65008, 65018, 65024, 65040, 65056, 65072, 65075, 65077, 65101, 65104, 65137, 65138, 65139, 65140, 65143, 65144, 65145, 
  65146, 65147, 65148, 65149, 65150, 65151, 65277, 65296, 65306, 65313, 65339, 65343, 65344, 65345, 65371, 65382, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65856, 65909, 66045, 66046, 66176, 66205, 66208, 66257, 66272, 66273, 66304, 66336, 66349, 66379, 66384, 66427, 66432, 66462, 66464, 66500, 66504, 66512, 66513, 66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 
  66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 68159, 68160, 68192, 68221, 68224, 68253, 68288, 68296, 68297, 68327, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68736, 68787, 68800, 
  68851, 68864, 68904, 68912, 68922, 69376, 69405, 69415, 69416, 69424, 69457, 69600, 69623, 69632, 69703, 69734, 69744, 69759, 69819, 69840, 69865, 69872, 69882, 69888, 69941, 69942, 69952, 69956, 69959, 69968, 70004, 70006, 70007, 70016, 70085, 70089, 70093, 70096, 70107, 70108, 70109, 70144, 70162, 70163, 70200, 70206, 70207, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 70320, 70379, 70384, 70394, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 
  70452, 70453, 70458, 70459, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 70488, 70493, 70500, 70502, 70509, 70512, 70517, 70656, 70731, 70736, 70746, 70750, 70752, 70784, 70854, 70855, 70856, 70864, 70874, 71040, 71094, 71096, 71105, 71128, 71134, 71168, 71233, 71236, 71237, 71248, 71258, 71296, 71353, 71360, 71370, 71424, 71451, 71453, 71468, 71472, 71482, 71680, 71739, 71840, 71914, 71935, 71936, 72096, 72104, 72106, 72152, 72154, 72162, 72163, 72165, 72192, 72255, 72263, 72264, 72272, 
  72346, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72769, 72784, 72794, 72818, 72848, 72850, 72872, 72873, 72887, 72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 73050, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 73107, 73113, 73120, 73130, 73440, 73463, 73728, 74650, 74752, 74863, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92768, 92778, 92880, 92910, 92912, 92917, 92928, 92983, 92992, 92996, 93008, 
  93018, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 113821, 113823, 119141, 119146, 119149, 119155, 119163, 119171, 119173, 119180, 119210, 119214, 119362, 119365, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 
  119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 120782, 120832, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 
  122905, 122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123184, 123198, 123200, 123210, 123214, 123215, 123584, 123642, 124928, 125125, 125136, 125143, 125184, 125260, 125264, 125274, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 
  126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102, 917760, 918E3], XID_Start:[65, 91, 97, 123, 170, 171, 181, 182, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 880, 885, 886, 888, 891, 894, 895, 
  896, 902, 903, 904, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1488, 1515, 1519, 1523, 1568, 1611, 1646, 1648, 1649, 1748, 1749, 1750, 1765, 1767, 1774, 1776, 1786, 1789, 1791, 1792, 1808, 1809, 1810, 1840, 1869, 1958, 1969, 1970, 1994, 2027, 2036, 2038, 2042, 2043, 2048, 2070, 2074, 2075, 2084, 2085, 2088, 2089, 2112, 2137, 2144, 2155, 2208, 2229, 2230, 2238, 2308, 2362, 2365, 2366, 2384, 2385, 2392, 2402, 2417, 2433, 2437, 2445, 2447, 2449, 
  2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2493, 2494, 2510, 2511, 2524, 2526, 2527, 2530, 2544, 2546, 2556, 2557, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2649, 2653, 2654, 2655, 2674, 2677, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2749, 2750, 2768, 2769, 2784, 2786, 2809, 2810, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2877, 2878, 2908, 2910, 2911, 2914, 2929, 2930, 2947, 2948, 2949, 2955, 
  2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3024, 3025, 3077, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3134, 3160, 3163, 3168, 3170, 3200, 3201, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3261, 3262, 3294, 3295, 3296, 3298, 3313, 3315, 3333, 3341, 3342, 3345, 3346, 3387, 3389, 3390, 3406, 3407, 3412, 3415, 3423, 3426, 3450, 3456, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3585, 3633, 3634, 3635, 3648, 3655, 
  3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3761, 3762, 3763, 3773, 3774, 3776, 3781, 3782, 3783, 3804, 3808, 3840, 3841, 3904, 3912, 3913, 3949, 3976, 3981, 4096, 4139, 4159, 4160, 4176, 4182, 4186, 4190, 4193, 4194, 4197, 4199, 4206, 4209, 4213, 4226, 4238, 4239, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4348, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 
  4882, 4886, 4888, 4955, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5870, 5881, 5888, 5901, 5902, 5906, 5920, 5938, 5952, 5970, 5984, 5997, 5998, 6001, 6016, 6068, 6103, 6104, 6108, 6109, 6176, 6265, 6272, 6313, 6314, 6315, 6320, 6390, 6400, 6431, 6480, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6656, 6679, 6688, 6741, 6823, 6824, 6917, 6964, 6981, 6988, 7043, 7073, 7086, 7088, 7098, 7142, 7168, 7204, 7245, 7248, 7258, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 
  7401, 7405, 7406, 7412, 7413, 7415, 7418, 7419, 7424, 7616, 7680, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8305, 8306, 8319, 8320, 8336, 8349, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8585, 11264, 11311, 11312, 
  11359, 11360, 11493, 11499, 11503, 11506, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11648, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 12293, 12296, 12321, 12330, 12337, 12342, 12344, 12349, 12353, 12439, 12445, 12448, 12449, 12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42528, 42538, 
  42540, 42560, 42607, 42623, 42654, 42656, 42736, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43010, 43011, 43014, 43015, 43019, 43020, 43043, 43072, 43124, 43138, 43188, 43250, 43256, 43259, 43260, 43261, 43263, 43274, 43302, 43312, 43335, 43360, 43389, 43396, 43443, 43471, 43472, 43488, 43493, 43494, 43504, 43514, 43519, 43520, 43561, 43584, 43587, 43588, 43596, 43616, 43639, 43642, 43643, 43646, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43715, 43739, 
  43742, 43744, 43755, 43762, 43765, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44003, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64286, 64287, 64297, 64298, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64434, 64467, 64606, 64612, 64830, 64848, 64912, 64914, 64968, 65008, 65018, 65137, 65138, 65139, 65140, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 
  65150, 65151, 65277, 65313, 65339, 65345, 65371, 65382, 65438, 65440, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65856, 65909, 66176, 66205, 66208, 66257, 66304, 66336, 66349, 66379, 66384, 66422, 66432, 66462, 66464, 66500, 66504, 66512, 66513, 66518, 66560, 66718, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 
  67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68097, 68112, 68116, 68117, 68120, 68121, 68150, 68192, 68221, 68224, 68253, 68288, 68296, 68297, 68325, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68736, 68787, 68800, 68851, 68864, 68900, 69376, 69405, 69415, 69416, 69424, 69446, 69600, 69623, 69635, 69688, 69763, 69808, 69840, 69865, 69891, 
  69927, 69956, 69957, 69968, 70003, 70006, 70007, 70019, 70067, 70081, 70085, 70106, 70107, 70108, 70109, 70144, 70162, 70163, 70188, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 70320, 70367, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70461, 70462, 70480, 70481, 70493, 70498, 70656, 70709, 70727, 70731, 70751, 70752, 70784, 70832, 70852, 70854, 70855, 70856, 71040, 71087, 71128, 71132, 71168, 71216, 71236, 71237, 71296, 71339, 71352, 
  71353, 71424, 71451, 71680, 71724, 71840, 71904, 71935, 71936, 72096, 72104, 72106, 72145, 72161, 72162, 72163, 72164, 72192, 72193, 72203, 72243, 72250, 72251, 72272, 72273, 72284, 72330, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72751, 72768, 72769, 72818, 72848, 72960, 72967, 72968, 72970, 72971, 73009, 73030, 73031, 73056, 73062, 73063, 73065, 73066, 73098, 73112, 73113, 73440, 73459, 73728, 74650, 74752, 74863, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92880, 
  92910, 92928, 92976, 92992, 92996, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94032, 94033, 94099, 94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 
  120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 123136, 123181, 123191, 123198, 123214, 123215, 123584, 123628, 124928, 125125, 125184, 125252, 125259, 125260, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 
  126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 
  195102]};
  var Ke = {scx:"Script_Extensions", sc:"Script", gc:"General_Category", AHex:"ASCII_Hex_Digit", Alpha:"Alphabetic", Bidi_C:"Bidi_Control", Bidi_M:"Bidi_Mirrored", Cased:"Cased", CI:"Case_Ignorable", CWCF:"Changes_When_Casefolded", CWCM:"Changes_When_Casemapped", CWKCF:"Changes_When_NFKC_Casefolded", CWL:"Changes_When_Lowercased", CWT:"Changes_When_Titlecased", CWU:"Changes_When_Uppercased", Dash:"Dash", Dep:"Deprecated", DI:"Default_Ignorable_Code_Point", Dia:"Diacritic", Ext:"Extender", Gr_Base:"Grapheme_Base", 
  Gr_Ext:"Grapheme_Extend", Hex:"Hex_Digit", IDC:"ID_Continue", Ideo:"Ideographic", IDS:"ID_Start", IDSB:"IDS_Binary_Operator", IDST:"IDS_Trinary_Operator", Join_C:"Join_Control", LOE:"Logical_Order_Exception", Lower:"Lowercase", Math:"Math", NChar:"Noncharacter_Code_Point", Pat_Syn:"Pattern_Syntax", Pat_WS:"Pattern_White_Space", QMark:"Quotation_Mark", Radical:"Radical", RI:"Regional_Indicator", SD:"Soft_Dotted", STerm:"Sentence_Terminal", Term:"Terminal_Punctuation", UIdeo:"Unified_Ideograph", 
  Upper:"Uppercase", VS:"Variation_Selector", WSpace:"White_Space", space:"White_Space", XIDC:"XID_Continue", XIDS:"XID_Start"};
  var Le = {C:"Other", Cc:"Control", cntrl:"Control", Cf:"Format", Cn:"Unassigned", Co:"Private_Use", Cs:"Surrogate", L:"Letter", LC:"Cased_Letter", Ll:"Lowercase_Letter", Lm:"Modifier_Letter", Lo:"Other_Letter", Lt:"Titlecase_Letter", Lu:"Uppercase_Letter", M:"Mark", Combining_Mark:"Mark", Mc:"Spacing_Mark", Me:"Enclosing_Mark", Mn:"Nonspacing_Mark", N:"Number", Nd:"Decimal_Number", digit:"Decimal_Number", Nl:"Letter_Number", No:"Other_Number", P:"Punctuation", punct:"Punctuation", Pc:"Connector_Punctuation", 
  Pd:"Dash_Punctuation", Pe:"Close_Punctuation", Pf:"Final_Punctuation", Pi:"Initial_Punctuation", Po:"Other_Punctuation", Ps:"Open_Punctuation", S:"Symbol", Sc:"Currency_Symbol", Sk:"Modifier_Symbol", Sm:"Math_Symbol", So:"Other_Symbol", Z:"Separator", Zl:"Line_Separator", Zp:"Paragraph_Separator", Zs:"Space_Separator"};
  var fe = {Adlm:"Adlam", Aghb:"Caucasian_Albanian", Ahom:"Ahom", Arab:"Arabic", Armi:"Imperial_Aramaic", Armn:"Armenian", Avst:"Avestan", Bali:"Balinese", Bamu:"Bamum", Bass:"Bassa_Vah", Batk:"Batak", Beng:"Bengali", Bhks:"Bhaiksuki", Bopo:"Bopomofo", Brah:"Brahmi", Brai:"Braille", Bugi:"Buginese", Buhd:"Buhid", Cakm:"Chakma", Cans:"Canadian_Aboriginal", Cari:"Carian", Cham:"Cham", Cher:"Cherokee", Copt:"Coptic", Qaac:"Coptic", Cprt:"Cypriot", Cyrl:"Cyrillic", Deva:"Devanagari", Dogr:"Dogra", Dsrt:"Deseret", 
  Dupl:"Duployan", Egyp:"Egyptian_Hieroglyphs", Elba:"Elbasan", Elym:"Elymaic", Ethi:"Ethiopic", Geor:"Georgian", Glag:"Glagolitic", Gong:"Gunjala_Gondi", Gonm:"Masaram_Gondi", Goth:"Gothic", Gran:"Grantha", Grek:"Greek", Gujr:"Gujarati", Guru:"Gurmukhi", Hang:"Hangul", Hani:"Han", Hano:"Hanunoo", Hatr:"Hatran", Hebr:"Hebrew", Hira:"Hiragana", Hluw:"Anatolian_Hieroglyphs", Hmng:"Pahawh_Hmong", Hmnp:"Nyiakeng_Puachue_Hmong", Hrkt:"Katakana_Or_Hiragana", Hung:"Old_Hungarian", Ital:"Old_Italic", Java:"Javanese", 
  Kali:"Kayah_Li", Kana:"Katakana", Khar:"Kharoshthi", Khmr:"Khmer", Khoj:"Khojki", Knda:"Kannada", Kthi:"Kaithi", Lana:"Tai_Tham", Laoo:"Lao", Latn:"Latin", Lepc:"Lepcha", Limb:"Limbu", Lina:"Linear_A", Linb:"Linear_B", Lisu:"Lisu", Lyci:"Lycian", Lydi:"Lydian", Mahj:"Mahajani", Maka:"Makasar", Mand:"Mandaic", Mani:"Manichaean", Marc:"Marchen", Medf:"Medefaidrin", Mend:"Mende_Kikakui", Merc:"Meroitic_Cursive", Mero:"Meroitic_Hieroglyphs", Mlym:"Malayalam", Modi:"Modi", Mong:"Mongolian", Mroo:"Mro", 
  Mtei:"Meetei_Mayek", Mult:"Multani", Mymr:"Myanmar", Nand:"Nandinagari", Narb:"Old_North_Arabian", Nbat:"Nabataean", Newa:"Newa", Nkoo:"Nko", Nshu:"Nushu", Ogam:"Ogham", Olck:"Ol_Chiki", Orkh:"Old_Turkic", Orya:"Oriya", Osge:"Osage", Osma:"Osmanya", Palm:"Palmyrene", Pauc:"Pau_Cin_Hau", Perm:"Old_Permic", Phag:"Phags_Pa", Phli:"Inscriptional_Pahlavi", Phlp:"Psalter_Pahlavi", Phnx:"Phoenician", Plrd:"Miao", Prti:"Inscriptional_Parthian", Rjng:"Rejang", Rohg:"Hanifi_Rohingya", Runr:"Runic", Samr:"Samaritan", 
  Sarb:"Old_South_Arabian", Saur:"Saurashtra", Sgnw:"SignWriting", Shaw:"Shavian", Shrd:"Sharada", Sidd:"Siddham", Sind:"Khudawadi", Sinh:"Sinhala", Sogd:"Sogdian", Sogo:"Old_Sogdian", Sora:"Sora_Sompeng", Soyo:"Soyombo", Sund:"Sundanese", Sylo:"Syloti_Nagri", Syrc:"Syriac", Tagb:"Tagbanwa", Takr:"Takri", Tale:"Tai_Le", Talu:"New_Tai_Lue", Taml:"Tamil", Tang:"Tangut", Tavt:"Tai_Viet", Telu:"Telugu", Tfng:"Tifinagh", Tglg:"Tagalog", Thaa:"Thaana", Thai:"Thai", Tibt:"Tibetan", Tirh:"Tirhuta", Ugar:"Ugaritic", 
  Vaii:"Vai", Wara:"Warang_Citi", Wcho:"Wancho", Xpeo:"Old_Persian", Xsux:"Cuneiform", Yiii:"Yi", Zanb:"Zanabazar_Square", Zinh:"Inherited", Qaai:"Inherited", Zyyy:"Common", Zzzz:"Unknown"};
  var Me = {Adlm:"Adlam", Aghb:"Caucasian_Albanian", Ahom:"Ahom", Arab:"Arabic", Armi:"Imperial_Aramaic", Armn:"Armenian", Avst:"Avestan", Bali:"Balinese", Bamu:"Bamum", Bass:"Bassa_Vah", Batk:"Batak", Beng:"Bengali", Bhks:"Bhaiksuki", Bopo:"Bopomofo", Brah:"Brahmi", Brai:"Braille", Bugi:"Buginese", Buhd:"Buhid", Cakm:"Chakma", Cans:"Canadian_Aboriginal", Cari:"Carian", Cham:"Cham", Cher:"Cherokee", Copt:"Coptic", Qaac:"Coptic", Cprt:"Cypriot", Cyrl:"Cyrillic", Deva:"Devanagari", Dogr:"Dogra", Dsrt:"Deseret", 
  Dupl:"Duployan", Egyp:"Egyptian_Hieroglyphs", Elba:"Elbasan", Elym:"Elymaic", Ethi:"Ethiopic", Geor:"Georgian", Glag:"Glagolitic", Gong:"Gunjala_Gondi", Gonm:"Masaram_Gondi", Goth:"Gothic", Gran:"Grantha", Grek:"Greek", Gujr:"Gujarati", Guru:"Gurmukhi", Hang:"Hangul", Hani:"Han", Hano:"Hanunoo", Hatr:"Hatran", Hebr:"Hebrew", Hira:"Hiragana", Hluw:"Anatolian_Hieroglyphs", Hmng:"Pahawh_Hmong", Hmnp:"Nyiakeng_Puachue_Hmong", Hrkt:"Katakana_Or_Hiragana", Hung:"Old_Hungarian", Ital:"Old_Italic", Java:"Javanese", 
  Kali:"Kayah_Li", Kana:"Katakana", Khar:"Kharoshthi", Khmr:"Khmer", Khoj:"Khojki", Knda:"Kannada", Kthi:"Kaithi", Lana:"Tai_Tham", Laoo:"Lao", Latn:"Latin", Lepc:"Lepcha", Limb:"Limbu", Lina:"Linear_A", Linb:"Linear_B", Lisu:"Lisu", Lyci:"Lycian", Lydi:"Lydian", Mahj:"Mahajani", Maka:"Makasar", Mand:"Mandaic", Mani:"Manichaean", Marc:"Marchen", Medf:"Medefaidrin", Mend:"Mende_Kikakui", Merc:"Meroitic_Cursive", Mero:"Meroitic_Hieroglyphs", Mlym:"Malayalam", Modi:"Modi", Mong:"Mongolian", Mroo:"Mro", 
  Mtei:"Meetei_Mayek", Mult:"Multani", Mymr:"Myanmar", Nand:"Nandinagari", Narb:"Old_North_Arabian", Nbat:"Nabataean", Newa:"Newa", Nkoo:"Nko", Nshu:"Nushu", Ogam:"Ogham", Olck:"Ol_Chiki", Orkh:"Old_Turkic", Orya:"Oriya", Osge:"Osage", Osma:"Osmanya", Palm:"Palmyrene", Pauc:"Pau_Cin_Hau", Perm:"Old_Permic", Phag:"Phags_Pa", Phli:"Inscriptional_Pahlavi", Phlp:"Psalter_Pahlavi", Phnx:"Phoenician", Plrd:"Miao", Prti:"Inscriptional_Parthian", Rjng:"Rejang", Rohg:"Hanifi_Rohingya", Runr:"Runic", Samr:"Samaritan", 
  Sarb:"Old_South_Arabian", Saur:"Saurashtra", Sgnw:"SignWriting", Shaw:"Shavian", Shrd:"Sharada", Sidd:"Siddham", Sind:"Khudawadi", Sinh:"Sinhala", Sogd:"Sogdian", Sogo:"Old_Sogdian", Sora:"Sora_Sompeng", Soyo:"Soyombo", Sund:"Sundanese", Sylo:"Syloti_Nagri", Syrc:"Syriac", Tagb:"Tagbanwa", Takr:"Takri", Tale:"Tai_Le", Talu:"New_Tai_Lue", Taml:"Tamil", Tang:"Tangut", Tavt:"Tai_Viet", Telu:"Telugu", Tfng:"Tifinagh", Tglg:"Tagalog", Thaa:"Thaana", Thai:"Thai", Tibt:"Tibetan", Tirh:"Tirhuta", Ugar:"Ugaritic", 
  Vaii:"Vai", Wara:"Warang_Citi", Wcho:"Wancho", Xpeo:"Old_Persian", Xsux:"Cuneiform", Yiii:"Yi", Zanb:"Zanabazar_Square", Zinh:"Inherited", Qaai:"Inherited", Zyyy:"Common", Zzzz:"Unknown"};
  var ge = {Adlam:[125184, 125260, 125264, 125274, 125278, 125280], Ahom:[71424, 71451, 71453, 71468, 71472, 71488], Anatolian_Hieroglyphs:[82944, 83527], Arabic:[1536, 1541, 1542, 1548, 1549, 1563, 1564, 1565, 1566, 1567, 1568, 1600, 1601, 1611, 1622, 1648, 1649, 1757, 1758, 1792, 1872, 1920, 2208, 2229, 2230, 2238, 2259, 2274, 2275, 2304, 64336, 64450, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65022, 65136, 65141, 65142, 65277, 69216, 69247, 126464, 126468, 126469, 126496, 126497, 126499, 
  126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 126704, 126706], Armenian:[1329, 
  1367, 1369, 1417, 1418, 1419, 1421, 1424, 64275, 64280], Avestan:[68352, 68406, 68409, 68416], Balinese:[6912, 6988, 6992, 7037], Bamum:[42656, 42744, 92160, 92729], Bassa_Vah:[92880, 92910, 92912, 92918], Batak:[7104, 7156, 7164, 7168], Bengali:[2432, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2534, 2559], Bhaiksuki:[72704, 72713, 72714, 72759, 72760, 72774, 72784, 72813], Bopomofo:[746, 
  748, 12549, 12592, 12704, 12731], Brahmi:[69632, 69710, 69714, 69744, 69759, 69760], Braille:[10240, 10496], Buginese:[6656, 6684, 6686, 6688], Buhid:[5952, 5972], Canadian_Aboriginal:[5120, 5760, 6320, 6390], Carian:[66208, 66257], Caucasian_Albanian:[66864, 66916, 66927, 66928], Chakma:[69888, 69941, 69942, 69959], Cham:[43520, 43575, 43584, 43598, 43600, 43610, 43612, 43616], Cherokee:[5024, 5110, 5112, 5118, 43888, 43968], Common:[0, 65, 91, 97, 123, 170, 171, 186, 187, 192, 215, 216, 247, 
  248, 697, 736, 741, 746, 748, 768, 884, 885, 894, 895, 901, 902, 903, 904, 1417, 1418, 1541, 1542, 1548, 1549, 1563, 1564, 1567, 1568, 1600, 1601, 1757, 1758, 2274, 2275, 2404, 2406, 3647, 3648, 4053, 4057, 4347, 4348, 5867, 5870, 5941, 5943, 6146, 6148, 6149, 6150, 7379, 7380, 7393, 7394, 7401, 7405, 7406, 7412, 7413, 7416, 7418, 7419, 8192, 8204, 8206, 8293, 8294, 8305, 8308, 8319, 8320, 8335, 8352, 8384, 8448, 8486, 8487, 8490, 8492, 8498, 8499, 8526, 8527, 8544, 8585, 8588, 8592, 9255, 9280, 
  9291, 9312, 10240, 10496, 11124, 11126, 11158, 11160, 11264, 11776, 11856, 12272, 12284, 12288, 12293, 12294, 12295, 12296, 12321, 12336, 12344, 12348, 12352, 12443, 12445, 12448, 12449, 12539, 12541, 12688, 12704, 12736, 12772, 12832, 12896, 12927, 13008, 13144, 13312, 19904, 19968, 42752, 42786, 42888, 42891, 43056, 43066, 43310, 43311, 43471, 43472, 43867, 43868, 64830, 64832, 65040, 65050, 65072, 65107, 65108, 65127, 65128, 65132, 65279, 65280, 65281, 65313, 65339, 65345, 65371, 65382, 65392, 
  65393, 65438, 65440, 65504, 65511, 65512, 65519, 65529, 65534, 65792, 65795, 65799, 65844, 65847, 65856, 65936, 65948, 66E3, 66045, 66273, 66300, 94178, 94180, 113824, 113828, 118784, 119030, 119040, 119079, 119081, 119143, 119146, 119163, 119171, 119173, 119180, 119210, 119214, 119273, 119520, 119540, 119552, 119639, 119648, 119673, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 
  120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120780, 120782, 120832, 126065, 126133, 126209, 126270, 126976, 127020, 127024, 127124, 127136, 127151, 127153, 127168, 127169, 127184, 127185, 127222, 127232, 127245, 127248, 127341, 127344, 127405, 127462, 127488, 127489, 127491, 127504, 127548, 127552, 127561, 127568, 127570, 127584, 127590, 127744, 128726, 128736, 128749, 128752, 128763, 128768, 128884, 
  128896, 128985, 128992, 129004, 129024, 129036, 129040, 129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129293, 129394, 129395, 129399, 129402, 129443, 129445, 129451, 129454, 129483, 129485, 129620, 129632, 129646, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686, 917505, 917506, 917536, 917632], Coptic:[994, 1008, 11392, 11508, 11513, 11520], Cuneiform:[73728, 74650, 74752, 74863, 74864, 74869, 74880, 75076], Cypriot:[67584, 67590, 67592, 67593, 67594, 67638, 
  67639, 67641, 67644, 67645, 67647, 67648], Cyrillic:[1024, 1157, 1159, 1328, 7296, 7305, 7467, 7468, 7544, 7545, 11744, 11776, 42560, 42656, 65070, 65072], Deseret:[66560, 66640], Devanagari:[2304, 2385, 2389, 2404, 2406, 2432, 43232, 43264], Dogra:[71680, 71740], Duployan:[113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 113820, 113824], Egyptian_Hieroglyphs:[77824, 78895, 78896, 78905], Elbasan:[66816, 66856], Ethiopic:[4608, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 
  4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4989, 4992, 5018, 11648, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823], Georgian:[4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4348, 4352, 7312, 7355, 7357, 7360, 11520, 11558, 11559, 11560, 11565, 11566], Glagolitic:[11264, 
  11311, 11312, 11359, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923], Gothic:[66352, 66379], Grantha:[70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70460, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 70488, 70493, 70500, 70502, 70509, 70512, 70517], Greek:[880, 884, 885, 888, 890, 894, 895, 896, 900, 901, 902, 903, 904, 907, 908, 909, 910, 930, 931, 994, 1008, 1024, 7462, 7467, 7517, 7522, 7526, 7531, 
  7615, 7616, 7936, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8133, 8134, 8148, 8150, 8156, 8157, 8176, 8178, 8181, 8182, 8191, 8486, 8487, 43877, 43878, 65856, 65935, 65952, 65953, 119296, 119366], Gujarati:[2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2802, 2809, 2816], Gunjala_Gondi:[73056, 73062, 73063, 73065, 73066, 
  73103, 73104, 73106, 73107, 73113, 73120, 73130], Gurmukhi:[2561, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2649, 2653, 2654, 2655, 2662, 2679], Han:[11904, 11930, 11931, 12020, 12032, 12246, 12293, 12294, 12295, 12296, 12321, 12330, 12344, 12348, 13312, 19894, 19968, 40944, 63744, 64110, 64112, 64218, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 
  195102], Hangul:[4352, 4608, 12334, 12336, 12593, 12687, 12800, 12831, 12896, 12927, 43360, 43389, 44032, 55204, 55216, 55239, 55243, 55292, 65440, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501], Hanifi_Rohingya:[68864, 68904, 68912, 68922], Hanunoo:[5920, 5941], Hatran:[67808, 67827, 67828, 67830, 67835, 67840], Hebrew:[1425, 1480, 1488, 1515, 1519, 1525, 64285, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64336], Hiragana:[12353, 12439, 12445, 12448, 110593, 
  110879, 110928, 110931, 127488, 127489], Imperial_Aramaic:[67648, 67670, 67671, 67680], Inherited:[768, 880, 1157, 1159, 1611, 1622, 1648, 1649, 2385, 2389, 6832, 6847, 7376, 7379, 7380, 7393, 7394, 7401, 7405, 7406, 7412, 7413, 7416, 7418, 7616, 7674, 7675, 7680, 8204, 8206, 8400, 8433, 12330, 12334, 12441, 12443, 65024, 65040, 65056, 65070, 66045, 66046, 66272, 66273, 70459, 70460, 119143, 119146, 119163, 119171, 119173, 119180, 119210, 119214, 917760, 918E3], Inscriptional_Pahlavi:[68448, 68467, 
  68472, 68480], Inscriptional_Parthian:[68416, 68438, 68440, 68448], Javanese:[43392, 43470, 43472, 43482, 43486, 43488], Kaithi:[69760, 69826, 69837, 69838], Kannada:[3200, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 3313, 3315], Katakana:[12449, 12539, 12541, 12544, 12784, 12800, 13008, 13055, 13056, 13144, 65382, 65392, 65393, 65438, 110592, 110593, 110948, 110952], Kayah_Li:[43264, 43310, 43311, 43312], 
  Kharoshthi:[68096, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 68159, 68169, 68176, 68185], Khmer:[6016, 6110, 6112, 6122, 6128, 6138, 6624, 6656], Khojki:[70144, 70162, 70163, 70207], Khudawadi:[70320, 70379, 70384, 70394], Lao:[3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3774, 3776, 3781, 3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808], Latin:[65, 91, 97, 123, 170, 171, 186, 187, 192, 215, 216, 247, 248, 697, 736, 741, 7424, 7462, 7468, 7517, 
  7522, 7526, 7531, 7544, 7545, 7615, 7680, 7936, 8305, 8306, 8319, 8320, 8336, 8349, 8490, 8492, 8498, 8499, 8526, 8527, 8544, 8585, 11360, 11392, 42786, 42888, 42891, 42944, 42946, 42951, 42999, 43008, 43824, 43867, 43868, 43877, 43878, 43880, 64256, 64263, 65313, 65339, 65345, 65371], Lepcha:[7168, 7224, 7227, 7242, 7245, 7248], Limbu:[6400, 6431, 6432, 6444, 6448, 6460, 6464, 6465, 6468, 6480], Linear_A:[67072, 67383, 67392, 67414, 67424, 67432], Linear_B:[65536, 65548, 65549, 65575, 65576, 65595, 
  65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787], Lisu:[42192, 42240], Lycian:[66176, 66205], Lydian:[67872, 67898, 67903, 67904], Mahajani:[69968, 70007], Makasar:[73440, 73465], Malayalam:[3328, 3332, 3333, 3341, 3342, 3345, 3346, 3397, 3398, 3401, 3402, 3408, 3412, 3428, 3430, 3456], Mandaic:[2112, 2140, 2142, 2143], Manichaean:[68288, 68327, 68331, 68343], Marchen:[72816, 72848, 72850, 72872, 72873, 72887], Medefaidrin:[93760, 93851], Masaram_Gondi:[72960, 72967, 72968, 72970, 72971, 
  73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 73050], Meetei_Mayek:[43744, 43767, 43968, 44014, 44016, 44026], Mende_Kikakui:[124928, 125125, 125127, 125143], Meroitic_Cursive:[68E3, 68024, 68028, 68048, 68050, 68096], Meroitic_Hieroglyphs:[67968, 68E3], Miao:[93952, 94027, 94031, 94088, 94095, 94112], Modi:[71168, 71237, 71248, 71258], Mongolian:[6144, 6146, 6148, 6149, 6150, 6159, 6160, 6170, 6176, 6265, 6272, 6315, 71264, 71277], Mro:[92736, 92767, 92768, 92778, 92782, 92784], Multani:[70272, 
  70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70314], Myanmar:[4096, 4256, 43488, 43519, 43616, 43648], Nabataean:[67712, 67743, 67751, 67760], New_Tai_Lue:[6528, 6572, 6576, 6602, 6608, 6619, 6622, 6624], Newa:[70656, 70746, 70747, 70748, 70749, 70752], Nko:[1984, 2043, 2045, 2048], Nushu:[94177, 94178, 110960, 111356], Ogham:[5760, 5789], Ol_Chiki:[7248, 7296], Old_Hungarian:[68736, 68787, 68800, 68851, 68858, 68864], Old_Italic:[66304, 66340, 66349, 66352], Old_North_Arabian:[68224, 
  68256], Old_Permic:[66384, 66427], Old_Persian:[66464, 66500, 66504, 66518], Old_Sogdian:[69376, 69416], Old_South_Arabian:[68192, 68224], Old_Turkic:[68608, 68681], Oriya:[2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2908, 2910, 2911, 2916, 2918, 2936], Osage:[66736, 66772, 66776, 66812], Osmanya:[66688, 66718, 66720, 66730], Pahawh_Hmong:[92928, 92998, 93008, 93018, 93019, 93026, 93027, 93048, 93053, 93072], 
  Palmyrene:[67680, 67712], Pau_Cin_Hau:[72384, 72441], Phags_Pa:[43072, 43128], Phoenician:[67840, 67868, 67871, 67872], Psalter_Pahlavi:[68480, 68498, 68505, 68509, 68521, 68528], Rejang:[43312, 43348, 43359, 43360], Runic:[5792, 5867, 5870, 5881], Samaritan:[2048, 2094, 2096, 2111], Saurashtra:[43136, 43206, 43214, 43226], Sharada:[70016, 70094, 70096, 70112], Shavian:[66640, 66688], Siddham:[71040, 71094, 71096, 71134], SignWriting:[120832, 121484, 121499, 121504, 121505, 121520], Sinhala:[3458, 
  3460, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3573, 70113, 70133], Sogdian:[69424, 69466], Sora_Sompeng:[69840, 69865, 69872, 69882], Soyombo:[72272, 72355], Sundanese:[7040, 7104, 7360, 7368], Syloti_Nagri:[43008, 43052], Syriac:[1792, 1806, 1807, 1867, 1869, 1872, 2144, 2155], Tagalog:[5888, 5901, 5902, 5909], Tagbanwa:[5984, 5997, 5998, 6001, 6002, 6004], Tai_Le:[6480, 6510, 6512, 6517], Tai_Tham:[6688, 6751, 
  6752, 6781, 6783, 6794, 6800, 6810, 6816, 6830], Tai_Viet:[43648, 43715, 43739, 43744], Takri:[71296, 71353, 71360, 71370], Tamil:[2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 3014, 3017, 3018, 3022, 3024, 3025, 3031, 3032, 3046, 3067, 73664, 73714, 73727, 73728], Tangut:[94176, 94177, 94208, 100344, 100352, 101107], Telugu:[3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 
  3159, 3160, 3163, 3168, 3172, 3174, 3184, 3191, 3200], Thaana:[1920, 1970], Thai:[3585, 3643, 3648, 3676], Tibetan:[3840, 3912, 3913, 3949, 3953, 3992, 3993, 4029, 4030, 4045, 4046, 4053, 4057, 4059], Tifinagh:[11568, 11624, 11631, 11633, 11647, 11648], Tirhuta:[70784, 70856, 70864, 70874], Ugaritic:[66432, 66462, 66463, 66464], Vai:[42240, 42540], Warang_Citi:[71840, 71923, 71935, 71936], Yi:[40960, 42125, 42128, 42183], Zanabazar_Square:[72192, 72264]};
  var Ne = {Adlam:[1600, 1601], Arabic:[1548, 1549, 1563, 1564, 1567, 1568, 1600, 1601, 1611, 1622, 1648, 1649, 66272, 66300], Armenian:[1417, 1418], Bengali:[2385, 2387, 2404, 2406, 7376, 7377, 7378, 7379, 7381, 7383, 7384, 7385, 7393, 7394, 7402, 7403, 7405, 7406, 7410, 7411, 7413, 7416, 43249, 43250], Bopomofo:[12289, 12292, 12296, 12306, 12307, 12320, 12330, 12334, 12336, 12337, 12343, 12344, 12539, 12540, 65093, 65095, 65377, 65382], Buginese:[43471, 43472], Buhid:[5941, 5943], Chakma:[2534, 
  2544, 4160, 4170], Coptic:[66272, 66300], Cypriot:[65792, 65795, 65799, 65844, 65847, 65856], Cyrillic:[1157, 1159, 11843, 11844], Devanagari:[2385, 2387, 2404, 2406, 7376, 7415, 7416, 7418, 8432, 8433, 43056, 43066], Dogra:[2404, 2416, 43056, 43066], Duployan:[113824, 113828], Georgian:[1417, 1418, 4347, 4348], Glagolitic:[1156, 1157, 1159, 1160, 11843, 11844, 42607, 42608], Grantha:[2385, 2387, 2404, 2406, 3046, 3060, 7376, 7377, 7378, 7380, 7410, 7413, 7416, 7418, 8432, 8433, 70459, 70460, 73680, 
  73682, 73683, 73684], Greek:[834, 835, 837, 838, 7616, 7618], Gujarati:[2385, 2387, 2404, 2406, 43056, 43066], Gunjala_Gondi:[2404, 2406], Gurmukhi:[2385, 2387, 2404, 2406, 43056, 43066], Han:[12289, 12292, 12294, 12295, 12296, 12306, 12307, 12320, 12330, 12334, 12336, 12337, 12343, 12344, 12348, 12352, 12539, 12540, 12688, 12704, 12736, 12772, 12832, 12872, 12928, 12977, 12992, 13004, 13144, 13169, 13179, 13184, 13280, 13311, 65093, 65095, 65377, 65382, 119648, 119666, 127568, 127570], Hangul:[12289, 
  12292, 12296, 12306, 12307, 12320, 12336, 12337, 12343, 12344, 12539, 12540, 65093, 65095, 65377, 65382], Hanifi_Rohingya:[1548, 1549, 1563, 1564, 1567, 1568, 1600, 1601, 1748, 1749], Hanunoo:[5941, 5943], Hiragana:[12289, 12292, 12296, 12306, 12307, 12320, 12336, 12342, 12343, 12344, 12348, 12350, 12441, 12445, 12448, 12449, 12539, 12541, 65093, 65095, 65377, 65382, 65392, 65393, 65438, 65440], Javanese:[43471, 43472], Kaithi:[2406, 2416, 43056, 43066], Kannada:[2385, 2387, 2404, 2406, 7376, 7377, 
  7378, 7379, 7386, 7387, 7410, 7411, 7412, 7413, 43056, 43062], Katakana:[12289, 12292, 12296, 12306, 12307, 12320, 12336, 12342, 12343, 12344, 12348, 12350, 12441, 12445, 12448, 12449, 12539, 12541, 65093, 65095, 65377, 65382, 65392, 65393, 65438, 65440], Kayah_Li:[43310, 43311], Khojki:[2790, 2800, 43056, 43066], Khudawadi:[2404, 2406, 43056, 43066], Latin:[867, 880, 1157, 1159, 2385, 2387, 4347, 4348, 8239, 8240, 8432, 8433, 43310, 43311], Limbu:[2405, 2406], Linear_A:[65799, 65844], Linear_B:[65792, 
  65795, 65799, 65844, 65847, 65856], Mahajani:[2404, 2416, 43056, 43066], Malayalam:[2385, 2387, 2404, 2406, 7386, 7387, 43056, 43059], Mandaic:[1600, 1601], Manichaean:[1600, 1601], Masaram_Gondi:[2404, 2406], Modi:[43056, 43066], Mongolian:[6146, 6148, 6149, 6150, 8239, 8240], Multani:[2662, 2672], Myanmar:[43310, 43311], Old_Permic:[1155, 1156], Oriya:[2385, 2387, 2404, 2406, 7386, 7387, 7410, 7411], Phags_Pa:[6146, 6148, 6149, 6150], Psalter_Pahlavi:[1600, 1601], Sharada:[2385, 2386, 7383, 7384, 
  7385, 7386, 7388, 7390, 7392, 7393], Sinhala:[2404, 2406], Sogdian:[1600, 1601], Syloti_Nagri:[2404, 2406, 2534, 2544], Syriac:[1548, 1549, 1563, 1565, 1567, 1568, 1600, 1601, 1611, 1622, 1648, 1649], Tagalog:[5941, 5943], Tagbanwa:[5941, 5943], Tai_Le:[4160, 4170], Takri:[2404, 2406, 43056, 43066], Tamil:[2385, 2387, 2404, 2406, 7386, 7387, 43251, 43252, 70401, 70402, 70403, 70404, 70459, 70461], Telugu:[2385, 2387, 2404, 2406, 7386, 7387, 7410, 7411], Thaana:[1548, 1549, 1563, 1565, 1567, 1568, 
  1632, 1642, 65010, 65011, 65021, 65022], Tirhuta:[2385, 2387, 2404, 2406, 7410, 7411, 43056, 43066], Yi:[12289, 12291, 12296, 12306, 12308, 12316, 12539, 12540, 65377, 65382]};
  var Ec = function(a, b) {
    switch(a) {
      case 9:
        return "\\t";
      case 10:
        return "\\n";
      case 11:
        return "\\v";
      case 12:
        return "\\f";
      case 13:
        return "\\r";
      case 92:
        return "\\\\";
      case 94:
        return "\\^";
      case 93:
        return "\\]";
    }
    if (b) {
      if (8 === a) {
        return "\\b";
      }
      if (45 === a) {
        return "\\-";
      }
    } else {
      switch(a) {
        case 36:
          return "\\$";
        case 40:
          return "\\(";
        case 41:
          return "\\)";
        case 42:
          return "\\*";
        case 43:
          return "\\+";
        case 46:
          return "\\.";
        case 47:
          return "\\/";
        case 63:
          return "\\?";
        case 91:
          return "\\[";
        case 123:
          return "\\{";
        case 124:
          return "\\|";
        case 125:
          return "\\}";
      }
    }
    return 31 >= a || 127 <= a && 255 >= a ? "\\x" + Ca(a.toString(16), 2) : 128 >= a ? $a(a) : 65535 >= a ? "\\u" + Ca(a.toString(16), 4) : "\\u{" + a.toString(16) + "}";
  };
  var sa = function(a) {
    a.add = Kb;
    a.addCharSet = Oa;
    a.invert = ab;
    a.clone = Ja;
    a.has = ob;
    DEFINE_REGEXP_COMPAT__DEBUG && (a.toRegExpPattern = yc, a.toString = zc, DEFINE_REGEXP_COMPAT__NODEJS && (a[Symbol["for"]("nodejs.util.inspect.custom")] = pb));
    return a;
  };
  var Ed = sa([48, 58]);
  var he = Ed.clone().invert();
  var ed = sa([48, 58, 65, 91, 95, 96, 97, 123]);
  var je = ed.clone().invert();
  if (DEFINE_REGEXP_COMPAT__ES2018) {
    var dd = sa([48, 58, 65, 91, 95, 96, 97, 123, 383, 384, 8490, 8491]);
    var ie = dd.clone().invert();
  }
  var Fd = sa([9, 14, 32, 33, 160, 161, 5760, 5761, 8192, 8203, 8239, 8240, 8287, 8288, 12288, 12289, 65279, 65280]);
  var ke = Fd.clone().invert();
  var Ea = {};
  var Gd = function(a) {
    var b = Le[a] || a;
    a = "General_Category." + b;
    var c = Ea[a];
    if (c) {
      return c;
    }
    if (b = Je[b]) {
      return b = sa(b), Ea[a] = b;
    }
  };
  var le = function(a) {
    a = Ke[a] || a;
    var b = Ea[a];
    if (b) {
      return b;
    }
    if (b = pd[a]) {
      return b = sa(b), Ea[a] = b;
    }
  };
  var me = function(a, b) {
    switch(a) {
      case "gc":
      case "General_Category":
        return Gd(b);
      case "sc":
      case "Script":
        return Pa(b);
      case "scx":
      case "Script_Extensions":
        var c = Me[b] || b;
        var d = "Script_Extensions." + c;
        var e = Ea[d];
        e ? d = e : (e = Pa(c)) ? (c = Ne[c]) ? (c = sa(c), e = e.clone(), e.addCharSet(c), d = Ea[d] = e) : d = Ea[d] = e.clone() : d = void 0;
        return d;
    }
  };
  var zd;
  var oa = function(a) {
    switch(a.type) {
      case Lc:
        return la(a.children, oa).join("|");
      case Mc:
        return la(a.children, oa).join("");
      case Uc:
        return "(" + oa(a.child) + ")";
      case Vc:
        return "(?:" + oa(a.child) + ")";
      case Nc:
        return oa(a.child) + "*" + (a.nonGreedy ? "?" : "");
      case Oc:
        return oa(a.child) + "+" + (a.nonGreedy ? "?" : "");
      case Pc:
        return oa(a.child) + "?" + (a.nonGreedy ? "?" : "");
      case Qc:
        var b = oa(a.child);
        b += "{" + a.min;
        Infinity === a.max ? b += "," : (null !== a.max ? a.max : a.min) != a.min && (b += "," + a.max);
        return b += "}" + (a.nonGreedy ? "?" : "");
      case db:
        return a.invert ? "\\B" : "\\b";
      case Xb:
        return "^";
      case Yb:
        return "$";
      case Wa:
        return "(?" + (a.negative ? "!" : "=") + oa(a.child) + ")";
      case N:
        return a = Y(a.raw), "/" === a ? "\\/" : a;
      case wa:
        return bb(a);
      case Sc:
        return "[" + (a.invert ? "^" : "") + la(a.children, bb).join("") + "]";
      case Rc:
        return ".";
      case Zb:
        return "\\" + a.index;
      case Tc:
        if (DEFINE_REGEXP_COMPAT__ES2018) {
          return "\\k<" + a.raw + ">";
        }
      case Wc:
        if (DEFINE_REGEXP_COMPAT__ES2018) {
          return "(?<" + a.raw + ">" + oa(a.child) + ")";
        }
      case eb:
        if (DEFINE_REGEXP_COMPAT__ES2018) {
          return "(?<" + (a.negative ? "!" : "=") + oa(a.child) + ")";
        }
    }
  };
  var $d = function(a) {
    var b = "";
    a.global && (b += "g");
    a.ignoreCase && (b += "i");
    a.multiline && (b += "m");
    a.sticky && (b += "y");
    a.dotAll && DEFINE_REGEXP_COMPAT__ES2018 && (b += "s");
    a.unicode && DEFINE_REGEXP_COMPAT__ES2018 && (b += "u");
    return b;
  };
  var ae = function(a) {
    var b = "/", c = oa(a.child);
    return b = b + ("" === c ? "(?:)" : c) + "/" + $d(a.flagSet);
  };
  DEFINE_REGEXP_COMPAT__DEBUG && (zd = sa(DEFINE_REGEXP_COMPAT__ES2018 ? pd.ID_Start : [65, 91, 97, 123, 170, 171, 181, 182, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 880, 885, 886, 888, 890, 894, 895, 896, 902, 903, 904, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1488, 1515, 1519, 1523, 1568, 1611, 1646, 1648, 1649, 1748, 1749, 1750, 1765, 1767, 1774, 1776, 1786, 1789, 1791, 1792, 1808, 1809, 1810, 1840, 1869, 
  1958, 1969, 1970, 1994, 2027, 2036, 2038, 2042, 2043, 2048, 2070, 2074, 2075, 2084, 2085, 2088, 2089, 2112, 2137, 2144, 2155, 2208, 2229, 2230, 2238, 2308, 2362, 2365, 2366, 2384, 2385, 2392, 2402, 2417, 2433, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2493, 2494, 2510, 2511, 2524, 2526, 2527, 2530, 2544, 2546, 2556, 2557, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2649, 2653, 2654, 2655, 2674, 2677, 2693, 2702, 2703, 2706, 2707, 
  2729, 2730, 2737, 2738, 2740, 2741, 2746, 2749, 2750, 2768, 2769, 2784, 2786, 2809, 2810, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2877, 2878, 2908, 2910, 2911, 2914, 2929, 2930, 2947, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3024, 3025, 3077, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3134, 3160, 3163, 3168, 3170, 3200, 3201, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3261, 
  3262, 3294, 3295, 3296, 3298, 3313, 3315, 3333, 3341, 3342, 3345, 3346, 3387, 3389, 3390, 3406, 3407, 3412, 3415, 3423, 3426, 3450, 3456, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3585, 3633, 3634, 3636, 3648, 3655, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3761, 3762, 3764, 3773, 3774, 3776, 3781, 3782, 3783, 3804, 3808, 3840, 3841, 3904, 3912, 3913, 3949, 3976, 3981, 4096, 4139, 4159, 4160, 4176, 4182, 4186, 4190, 4193, 4194, 4197, 4199, 4206, 4209, 4213, 
  4226, 4238, 4239, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4348, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5870, 5881, 5888, 5901, 5902, 5906, 5920, 5938, 5952, 5970, 5984, 5997, 5998, 6001, 6016, 6068, 6103, 6104, 6108, 6109, 6176, 6265, 6272, 6313, 6314, 6315, 6320, 
  6390, 6400, 6431, 6480, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6656, 6679, 6688, 6741, 6823, 6824, 6917, 6964, 6981, 6988, 7043, 7073, 7086, 7088, 7098, 7142, 7168, 7204, 7245, 7248, 7258, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 7401, 7405, 7406, 7412, 7413, 7415, 7418, 7419, 7424, 7616, 7680, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 
  8181, 8182, 8189, 8305, 8306, 8319, 8320, 8336, 8349, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8585, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11503, 11506, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11648, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 12293, 12296, 12321, 12330, 
  12337, 12342, 12344, 12349, 12353, 12439, 12443, 12448, 12449, 12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42528, 42538, 42540, 42560, 42607, 42623, 42654, 42656, 42736, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43010, 43011, 43014, 43015, 43019, 43020, 43043, 43072, 43124, 43138, 43188, 43250, 43256, 43259, 43260, 43261, 43263, 43274, 43302, 43312, 43335, 43360, 43389, 
  43396, 43443, 43471, 43472, 43488, 43493, 43494, 43504, 43514, 43519, 43520, 43561, 43584, 43587, 43588, 43596, 43616, 43639, 43642, 43643, 43646, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43715, 43739, 43742, 43744, 43755, 43762, 43765, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44003, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64286, 64287, 64297, 
  64298, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64434, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65020, 65136, 65141, 65142, 65277, 65313, 65339, 65345, 65371, 65382, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65856, 65909, 66176, 66205, 66208, 66257, 66304, 66336, 66349, 66379, 66384, 66422, 66432, 66462, 66464, 66500, 66504, 66512, 66513, 66518, 
  66560, 66718, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68097, 68112, 68116, 68117, 68120, 68121, 68150, 68192, 68221, 68224, 68253, 68288, 68296, 68297, 68325, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68736, 68787, 
  68800, 68851, 68864, 68900, 69376, 69405, 69415, 69416, 69424, 69446, 69600, 69623, 69635, 69688, 69763, 69808, 69840, 69865, 69891, 69927, 69956, 69957, 69968, 70003, 70006, 70007, 70019, 70067, 70081, 70085, 70106, 70107, 70108, 70109, 70144, 70162, 70163, 70188, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 70320, 70367, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70461, 70462, 70480, 70481, 70493, 70498, 70656, 70709, 70727, 70731, 
  70751, 70752, 70784, 70832, 70852, 70854, 70855, 70856, 71040, 71087, 71128, 71132, 71168, 71216, 71236, 71237, 71296, 71339, 71352, 71353, 71424, 71451, 71680, 71724, 71840, 71904, 71935, 71936, 72096, 72104, 72106, 72145, 72161, 72162, 72163, 72164, 72192, 72193, 72203, 72243, 72250, 72251, 72272, 72273, 72284, 72330, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72751, 72768, 72769, 72818, 72848, 72960, 72967, 72968, 72970, 72971, 73009, 73030, 73031, 73056, 73062, 73063, 73065, 73066, 73098, 
  73112, 73113, 73440, 73459, 73728, 74650, 74752, 74863, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92880, 92910, 92928, 92976, 92992, 92996, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94032, 94033, 94099, 94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 
  119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 123136, 123181, 123191, 123198, 123214, 123215, 123584, 123628, 124928, 125125, 125184, 
  125252, 125259, 125260, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 
  126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102]));
  var yd = sa(DEFINE_REGEXP_COMPAT__ES2018 ? pd.ID_Continue : [48, 58, 65, 91, 95, 96, 97, 123, 170, 171, 181, 182, 183, 184, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 768, 885, 886, 888, 890, 894, 895, 896, 902, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1155, 1160, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1425, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1488, 1515, 1519, 1523, 1552, 1563, 1568, 1642, 1646, 1748, 1749, 1757, 1759, 1769, 
  1770, 1789, 1791, 1792, 1808, 1867, 1869, 1970, 1984, 2038, 2042, 2043, 2045, 2046, 2048, 2094, 2112, 2140, 2144, 2155, 2208, 2229, 2230, 2238, 2259, 2274, 2275, 2404, 2406, 2416, 2417, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2534, 2546, 2556, 2557, 2558, 2559, 2561, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 
  2635, 2638, 2641, 2642, 2649, 2653, 2654, 2655, 2662, 2678, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2800, 2809, 2816, 2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2908, 2910, 2911, 2916, 2918, 2928, 2929, 2930, 2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 
  2984, 2987, 2990, 3002, 3006, 3011, 3014, 3017, 3018, 3022, 3024, 3025, 3031, 3032, 3046, 3056, 3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3160, 3163, 3168, 3172, 3174, 3184, 3200, 3204, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 3313, 3315, 3328, 3332, 3333, 3341, 3342, 3345, 3346, 3397, 3398, 3401, 3402, 3407, 3412, 3416, 3423, 3428, 3430, 3440, 
  3450, 3456, 3458, 3460, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3572, 3585, 3643, 3648, 3663, 3664, 3674, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3774, 3776, 3781, 3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808, 3840, 3841, 3864, 3866, 3872, 3882, 3893, 3894, 3895, 3896, 3897, 3898, 3902, 3912, 3913, 3949, 3953, 3973, 3974, 3992, 3993, 4029, 4038, 4039, 4096, 4170, 4176, 4254, 4256, 4294, 
  4295, 4296, 4301, 4302, 4304, 4347, 4348, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4960, 4969, 4978, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5870, 5881, 5888, 5901, 5902, 5909, 5920, 5941, 5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 6016, 6100, 6103, 6104, 6108, 6110, 6112, 6122, 6155, 6158, 6160, 6170, 
  6176, 6265, 6272, 6315, 6320, 6390, 6400, 6431, 6432, 6444, 6448, 6460, 6470, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6608, 6619, 6656, 6684, 6688, 6751, 6752, 6781, 6783, 6794, 6800, 6810, 6823, 6824, 6832, 6846, 6912, 6988, 6992, 7002, 7019, 7028, 7040, 7156, 7168, 7224, 7232, 7242, 7245, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 7376, 7379, 7380, 7419, 7424, 7674, 7675, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 
  8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8255, 8257, 8276, 8277, 8305, 8306, 8319, 8320, 8336, 8349, 8400, 8413, 8417, 8418, 8421, 8433, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8585, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11647, 11671, 11680, 11687, 
  11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11744, 11776, 12293, 12296, 12321, 12336, 12337, 12342, 12344, 12349, 12353, 12439, 12441, 12448, 12449, 12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42540, 42560, 42608, 42612, 42622, 42623, 42738, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43048, 43072, 43124, 43136, 43206, 
  43216, 43226, 43232, 43256, 43259, 43260, 43261, 43310, 43312, 43348, 43360, 43389, 43392, 43457, 43471, 43482, 43488, 43519, 43520, 43575, 43584, 43598, 43600, 43610, 43616, 43639, 43642, 43715, 43739, 43742, 43744, 43760, 43762, 43767, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44011, 44012, 44014, 44016, 44026, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64297, 64298, 64311, 
  64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64434, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65020, 65024, 65040, 65056, 65072, 65075, 65077, 65101, 65104, 65136, 65141, 65142, 65277, 65296, 65306, 65313, 65339, 65343, 65344, 65345, 65371, 65382, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65856, 65909, 66045, 66046, 66176, 66205, 66208, 66257, 66272, 66273, 
  66304, 66336, 66349, 66379, 66384, 66427, 66432, 66462, 66464, 66500, 66504, 66512, 66513, 66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 
  68159, 68160, 68192, 68221, 68224, 68253, 68288, 68296, 68297, 68327, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68736, 68787, 68800, 68851, 68864, 68904, 68912, 68922, 69376, 69405, 69415, 69416, 69424, 69457, 69600, 69623, 69632, 69703, 69734, 69744, 69759, 69819, 69840, 69865, 69872, 69882, 69888, 69941, 69942, 69952, 69956, 69959, 69968, 70004, 70006, 70007, 70016, 70085, 70089, 70093, 70096, 70107, 70108, 70109, 70144, 70162, 70163, 70200, 70206, 70207, 70272, 70279, 
  70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 70320, 70379, 70384, 70394, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70459, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 70488, 70493, 70500, 70502, 70509, 70512, 70517, 70656, 70731, 70736, 70746, 70750, 70752, 70784, 70854, 70855, 70856, 70864, 70874, 71040, 71094, 71096, 71105, 71128, 71134, 71168, 71233, 71236, 71237, 71248, 71258, 71296, 71353, 71360, 71370, 71424, 71451, 
  71453, 71468, 71472, 71482, 71680, 71739, 71840, 71914, 71935, 71936, 72096, 72104, 72106, 72152, 72154, 72162, 72163, 72165, 72192, 72255, 72263, 72264, 72272, 72346, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72769, 72784, 72794, 72818, 72848, 72850, 72872, 72873, 72887, 72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 73050, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 73107, 73113, 73120, 73130, 73440, 73463, 73728, 74650, 
  74752, 74863, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92768, 92778, 92880, 92910, 92912, 92917, 92928, 92983, 92992, 92996, 93008, 93018, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 113821, 113823, 119141, 119146, 119149, 119155, 119163, 119171, 
  119173, 119180, 119210, 119214, 119362, 119365, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 
  120771, 120772, 120780, 120782, 120832, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123184, 123198, 123200, 123210, 123214, 123215, 123584, 123642, 124928, 125125, 125136, 125143, 125184, 125260, 125264, 125274, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 
  126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102, 917760, 918E3]);
  var be = function(a, b, c) {
    this.captureParens = 0;
    DEFINE_REGEXP_COMPAT__ES2018 && (this.names = {_size:0});
    this.captureParensIndex = this.pos = 0;
    this.source = a;
    this.flags = b || "";
    this.additional = !1 !== c;
  };
  be.prototype.parse = function() {
    var a = this.flags;
    var b = DEFINE_REGEXP_COMPAT__ES2018 ? {global:!1, ignoreCase:!1, multiline:!1, unicode:!1, dotAll:!1, sticky:!1} : {global:!1, ignoreCase:!1, multiline:!1, sticky:!1};
    for (var c = a.length; c;) {
      switch(a.charAt(--c)) {
        case "g":
          if (b.global && DEFINE_REGEXP_COMPAT__DEBUG) {
            throw new y("duplicated 'g' flag");
          }
          b.global = !0;
          break;
        case "i":
          if (b.ignoreCase && DEFINE_REGEXP_COMPAT__DEBUG) {
            throw new y("duplicated 'i' flag");
          }
          b.ignoreCase = !0;
          break;
        case "m":
          if (b.multiline && DEFINE_REGEXP_COMPAT__DEBUG) {
            throw new y("duplicated 'm' flag");
          }
          b.multiline = !0;
          break;
        case "y":
          if (b.sticky && DEFINE_REGEXP_COMPAT__DEBUG) {
            throw new y("duplicated 'y' flag");
          }
          b.sticky = !0;
          break;
        case "s":
          if (DEFINE_REGEXP_COMPAT__ES2018) {
            if (b.dotAll && DEFINE_REGEXP_COMPAT__DEBUG) {
              throw new y("duplicated 's' flag");
            }
            b.dotAll = !0;
          }
          break;
        case "u":
          if (DEFINE_REGEXP_COMPAT__ES2018) {
            if (b.unicode && DEFINE_REGEXP_COMPAT__DEBUG) {
              throw new y("duplicated 'u' flag");
            }
            b.unicode = !0;
          }
          break;
        default:
          if (DEFINE_REGEXP_COMPAT__DEBUG) {
            throw new y("unknown flag");
          }
      }
    }
    this.flagSet = b;
    DEFINE_REGEXP_COMPAT__ES2018 && (this.unicode = this.flagSet.unicode);
    for (a = this.source.length; this.pos < a;) {
      switch(b = n(this), b) {
        case "(":
          DEFINE_REGEXP_COMPAT__ES2018 && M(this.source, "(?<", this.pos) ? (this.pos += 3, b = n(this), "=" !== b && "!" !== b && (++this.captureParens, b = ub(this), this.names[b] || ++this.names._size, this.names[b] = this.captureParens)) : (M(this.source, "(?", this.pos) || ++this.captureParens, ++this.pos);
          break;
        case "\\":
          ++this.pos;
          this.pos += n(this).length;
          break;
        case "[":
          a: for (++this.pos; this.pos < this.source.length;) {
            switch(b = n(this), b) {
              case "]":
                ++this.pos;
                break a;
              case "\\":
                ++this.pos;
                this.pos += n(this).length;
                break;
              default:
                this.pos += b.length;
            }
          }
          break;
        default:
          this.pos += b.length;
      }
    }
    this.pos = 0;
    a = W(this);
    if (DEFINE_REGEXP_COMPAT__DEBUG && "" !== n(this)) {
      throw new y("too many ')'");
    }
    return DEFINE_REGEXP_COMPAT__ES2018 ? {type:Yd, flagSet:this.flagSet, captureParens:this.captureParens, names:this.names, child:a, range:[0, this.pos]} : {type:Yd, flagSet:this.flagSet, captureParens:this.captureParens, child:a, range:[0, this.pos]};
  };
  DEFINE_REGEXP_COMPAT__DEBUG && (y = function(a) {
    SyntaxError.call(this, "invalid regular expression: " + a);
  });
  var qd;
  var Ma = function(a, b, c) {
    this.input = a;
    this._caps = b;
    DEFINE_REGEXP_COMPAT__ES2018 && (this._names = c);
    this.index = b[0];
    this.lastIndex = b[1];
    this.length = b.length / 2;
  };
  Ma.prototype.get = function(a) {
    var b = w(this, a);
    a = b[0];
    b = b[1];
    return 0 > a || 0 > b ? k : this.input.slice(a, b);
  };
  DEFINE_REGEXP_COMPAT__DEBUG && (Ma.prototype.begin = function(a) {
    a = w(this, a)[0];
    return 0 > a ? k : a;
  }, Ma.prototype.end = function(a) {
    a = w(this, a)[1];
    return 0 > a ? k : a;
  });
  Ma.prototype.toArray = function() {
    var a = this.length, b = [];
    b.index = this.index;
    b.input = this.input;
    for (var c = 0; c < a; ++c) {
      b[c] = this.get(c);
    }
    if (DEFINE_REGEXP_COMPAT__ES2018 && 0 < this._names._size) {
      a = {};
      c = this._names;
      for (var d in c) {
        a[d] = b[c[d]];
      }
      b.groups = a;
    }
    return b;
  };
  DEFINE_REGEXP_COMPAT__DEBUG && (Ma.prototype.toString = function() {
    var a = this.toArray();
    return "Match[" + la(a, function(b) {
      return b === k ? "undefined" : JSON.stringify(b);
    }).join(", ") + "]";
  }, DEFINE_REGEXP_COMPAT__NODEJS && (Ma.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function(a, b) {
    for (var c = b.stylize("Match", "special") + " [\n", d = new Map(Array.from(DEFINE_REGEXP_COMPAT__ES2018 ? this._names : {}).map(function(m) {
      return [m[1], m[0]];
    })), e = 0, f; e < this.length; e++) {
      f = d.get(e);
      f = b.stylize(JSON.stringify(null != f ? f : e), d.has(e) ? "string" : "number");
      var g = this.get(e);
      if (g === k) {
        c += "  " + f + " => " + b.stylize("undefined", "undefined") + ",\n";
      } else {
        var h = b.stylize(this._caps[2 * e].toString(), "number"), q = b.stylize(this._caps[2 * e + 1].toString(), "number");
        g = b.stylize(JSON.stringify(g), "string");
        c += "  " + f + " [" + h + ":" + q + "] => " + g + ",\n";
      }
    }
    return c + "]";
  }));
  DEFINE_REGEXP_COMPAT__DEBUG && (qd = function(a) {
    return la(a, function(b, c) {
      var d = Ca(c + "", 3) + ": ";
      var e = b.op;
      e = 13 <= e.length ? e : (e + "             ").substr(0, 13);
      d += e;
      switch(b.op) {
        case hb:
        case gb:
          d += b.index;
          break;
        case cd:
          d += b.from + " " + b.to;
          break;
        case ad:
          d += "'" + Ec(b.value) + "'";
          break;
        case Db:
        case ac:
          d += b.set.toRegExpPattern(b.op === ac);
          break;
        case xa:
        case La:
          d += Ca(c + 1 + b.next + "", 3);
          break;
        case ib:
        case $b:
          d += Ca(c + 1 + b.cont + "", 3);
          break;
        case Bb:
          d += b.value;
          break;
        case cc:
        case bc:
          d += b.index;
      }
      return d;
    }).join("\n");
  });
  var ja = function(a, b) {
    if (DEFINE_REGEXP_COMPAT__ES2018 && b) {
      return Zd[a] || a;
    }
    var c = Va(a).toUpperCase();
    if (2 <= c.length) {
      return a;
    }
    c = c.charCodeAt(0);
    return 128 <= a && 128 > c ? a : c;
  };
  var ce = function(a, b) {
    if (DEFINE_REGEXP_COMPAT__ES2018 && b) {
      return uc[a] || [];
    }
    var c = J[a];
    return c ? c : [Va(a).toLowerCase().charCodeAt(0)];
  };
  var $c = DEFINE_REGEXP_COMPAT__MINIFY ? 1 : "forward", fb = DEFINE_REGEXP_COMPAT__MINIFY ? 2 : "backward";
  var de = function(a) {
    this.advance = !1;
    this.captureParensIndex = 1;
    this.direction = $c;
    this.pattern = a;
    this.ignoreCase = a.flagSet.ignoreCase;
    this.captureParens = a.captureParens;
    DEFINE_REGEXP_COMPAT__ES2018 && (this.names = a.names, this.unicode = a.flagSet.unicode);
  };
  de.prototype.compile = function() {
    var a = ia(this, this.pattern.child);
    a = P([], {op:hb, index:0}, a, {op:gb, index:0}, {op:Xd});
    return new vc(this.pattern, a);
  };
  Sa.prototype.clone = function() {
    return new Sa(this.pos, this.pc, Ia(this.stack), this.stackSize, Ia(this.caps));
  };
  var vc = function(a, b) {
    DEFINE_REGEXP_COMPAT__DEBUG && (this.pattern = a);
    this.codes = b;
    for (var c = -1, d, e = 0, f = 0; d = b[++c];) {
      switch(d.op) {
        case Bb:
        case Eb:
        case dc:
          ++e;
          break;
        case bd:
        case Cb:
        case fc:
        case ec:
          --e;
      }
      f = Math.max(e, f);
    }
    this.maxStackSize = f;
    this.ignoreCase = a.flagSet.ignoreCase;
    this.multiline = a.flagSet.multiline;
    DEFINE_REGEXP_COMPAT__ES2018 && (this.dotAll = a.flagSet.dotAll, this.unicode = a.flagSet.unicode, this.names = a.names);
    this.sticky = a.flagSet.sticky;
    this.captureParens = a.captureParens;
  };
  DEFINE_REGEXP_COMPAT__DEBUG && (vc.prototype.toString = function() {
    var a = qd(this.codes).split("\n").join("\n    ");
    return "Program {\n  pattern: " + ae(this.pattern) + ",\n  codes:\n    " + a + "\n}";
  }, DEFINE_REGEXP_COMPAT__NODEJS && (vc.prototype[Symbol["for"]("nodejs.util.inspect.custom")] = function(a, b) {
    var c = b.stylize(ae(this.pattern), "regexp"), d = qd(this.codes).split("\n").map(function(e) {
      return b.stylize(e, "string");
    }).join("\n    ");
    return b.stylize("Program", "special") + " {\n  pattern: " + c + ",\n  codes:\n    " + d + "\n}";
  }));
  vc.prototype.exec = function(a, b) {
    for (; b <= a.length;) {
      for (var c = b, d = this.maxStackSize, e = [], f = 2 * (this.captureParens + 1), g = 0; g < f; ++g) {
        e.push(-1);
      }
      f = [];
      for (g = 0; g < d; ++g) {
        f.push(0);
      }
      for (c = [new Sa(c, 0, f, 0, e)]; 0 < c.length;) {
        e = c[c.length - 1];
        g = this.codes[e.pc];
        d = !1;
        ++e.pc;
        var h;
        switch(g.op) {
          case Dd:
            f = DEFINE_REGEXP_COMPAT__ES2018 ? D(a, e.pos, this.unicode) : D(a, e.pos);
            0 <= f && (DEFINE_REGEXP_COMPAT__ES2018 && this.dotAll || !wb(f)) ? e.pos += I(f) : d = !0;
            break;
          case fd:
            f = DEFINE_REGEXP_COMPAT__ES2018 ? Q(a, e.pos, this.unicode) : Q(a, e.pos);
            0 <= f ? e.pos -= I(f) : d = !0;
            break;
          case hb:
            e.caps[2 * g.index] = e.pos;
            break;
          case gb:
            e.caps[2 * g.index + 1] = e.pos;
            break;
          case cd:
            for (var q = g.from; q < g.to; ++q) {
              e.caps[2 * q] = e.caps[2 * q + 1] = -1;
            }
            break;
          case ad:
            f = DEFINE_REGEXP_COMPAT__ES2018 ? D(a, e.pos, this.unicode) : D(a, e.pos);
            0 > f && (d = !0);
            var m = this.ignoreCase ? DEFINE_REGEXP_COMPAT__ES2018 ? ja(f, this.unicode) : ja(f) : f;
            m === g.value ? e.pos += I(f) : d = !0;
            break;
          case Db:
          case ac:
            f = DEFINE_REGEXP_COMPAT__ES2018 ? D(a, e.pos, this.unicode) : D(a, e.pos);
            if (0 > f) {
              d = !0;
              break;
            }
            m = this.ignoreCase ? DEFINE_REGEXP_COMPAT__ES2018 ? ja(f, this.unicode) : ja(f) : f;
            q = g.set.has(m);
            var p = g.op === Db;
            if (this.ignoreCase) {
              m = DEFINE_REGEXP_COMPAT__ES2018 ? ce(m, this.unicode) : ce(m);
              var u = m.length;
              for (h = 0; h < u; ++h) {
                q = q || g.set.has(m[h]);
              }
            }
            q === p ? e.pos += I(f) : d = !0;
            break;
          case Xc:
            --e.stack[e.stackSize - 1];
            break;
          case bd:
            e.stack[--e.stackSize] === e.pos && (d = !0);
            break;
          case Yc:
            d = !0;
            break;
          case xa:
          case La:
            f = e.clone();
            c.push(f);
            g.op === xa ? e.pc += g.next : f.pc += g.next;
            break;
          case ib:
            e.pc += g.cont;
            break;
          case Bd:
            f = DEFINE_REGEXP_COMPAT__ES2018 ? Q(a, e.pos, this.unicode) : Q(a, e.pos);
            0 === e.pos || this.multiline && wb(f) || (d = !0);
            break;
          case Cd:
            f = DEFINE_REGEXP_COMPAT__ES2018 ? D(a, e.pos, this.unicode) : D(a, e.pos);
            e.pos === a.length || this.multiline && wb(f) || (d = !0);
            break;
          case $b:
            0 < e.stack[e.stackSize - 1] && (e.pc += g.cont);
            break;
          case Xd:
            return DEFINE_REGEXP_COMPAT__ES2018 ? new Ma(a, e.caps, this.names) : new Ma(a, e.caps);
          case Cb:
            --e.stackSize;
            break;
          case Bb:
            e.stack[e.stackSize++] = g.value;
            break;
          case Eb:
            e.stack[e.stackSize++] = e.pos;
            break;
          case dc:
            e.stack[e.stackSize++] = c.length;
            break;
          case cc:
            f = e.caps[2 * g.index];
            g = e.caps[2 * g.index + 1];
            p = 0 > f || 0 > g ? "" : a.slice(f, g);
            for (q = 0; q < p.length;) {
              f = DEFINE_REGEXP_COMPAT__ES2018 ? D(a, e.pos, this.unicode) : D(a, e.pos);
              h = DEFINE_REGEXP_COMPAT__ES2018 ? D(p, q, this.unicode) : D(p, q);
              m = this.ignoreCase ? DEFINE_REGEXP_COMPAT__ES2018 ? ja(f, this.unicode) : ja(f) : f;
              g = this.ignoreCase ? DEFINE_REGEXP_COMPAT__ES2018 ? ja(h, this.unicode) : ja(h) : h;
              if (m !== g) {
                d = !0;
                break;
              }
              e.pos += I(f);
              q += I(h);
            }
            break;
          case bc:
            f = e.caps[2 * g.index];
            g = e.caps[2 * g.index + 1];
            p = 0 > f || 0 > g ? "" : a.slice(f, g);
            for (q = p.length; 0 < q;) {
              f = DEFINE_REGEXP_COMPAT__ES2018 ? Q(a, e.pos, this.unicode) : Q(a, e.pos);
              h = DEFINE_REGEXP_COMPAT__ES2018 ? Q(p, q, this.unicode) : Q(p, q);
              m = this.ignoreCase ? DEFINE_REGEXP_COMPAT__ES2018 ? ja(f, this.unicode) : ja(f) : f;
              g = this.ignoreCase ? DEFINE_REGEXP_COMPAT__ES2018 ? ja(h, this.unicode) : ja(h) : h;
              if (m !== g) {
                d = !0;
                break;
              }
              e.pos -= I(f);
              q -= I(h);
            }
            break;
          case fc:
            e.pos = e.stack[--e.stackSize];
            break;
          case ec:
            c.length = e.stack[--e.stackSize];
            c[c.length - 1] = e;
            break;
          case Zc:
          case Ad:
            f = DEFINE_REGEXP_COMPAT__ES2018 ? Q(a, e.pos, this.unicode) : Q(a, e.pos), h = DEFINE_REGEXP_COMPAT__ES2018 ? D(a, e.pos, this.unicode) : D(a, e.pos), e = DEFINE_REGEXP_COMPAT__ES2018 && this.unicode && this.ignoreCase ? dd : ed, q = e.has(f) !== e.has(h), p = g.op === Zc, q !== p && (d = !0);
        }
        d && c.pop();
      }
      if (this.sticky) {
        break;
      }
      b += I(DEFINE_REGEXP_COMPAT__ES2018 ? D(a, b, this.unicode) : D(a, b));
    }
    return null;
  };
  var X = function(a, b) {
    if (DEFINE_REGEXP_COMPAT__DEBUG && (!this || this.constructor !== X)) {
      var c = a && "object" === typeof a ? a.exec === X.prototype.exec : !1;
      return c && b === k && a.constructor === X ? a : new X(a, b);
    }
    c = (new be(a, b, !0)).parse();
    DEFINE_REGEXP_COMPAT__DEBUG && (this.pattern = c);
    this.program = (new de(c)).compile();
    var d = oa(c.child);
    this.source = "" === d ? "(?:)" : d;
    this.flags = $d(c.flagSet);
    this.global = c.flagSet.global;
    this.ignoreCase = c.flagSet.ignoreCase;
    this.multiline = c.flagSet.multiline;
    this.sticky = c.flagSet.sticky;
    DEFINE_REGEXP_COMPAT__ES2018 && (this.dotAll = c.flagSet.dotAll, this.unicode = c.flagSet.unicode);
    DEFINE_REGEXP_COMPAT__DEBUG && (this.regExp = new RegExp(a, b));
  };
  if (DEFINE_REGEXP_COMPAT__DEBUG) {
    X.__defineGetter__ && "$1 $2 $3 $4 $5 $6 $7 $8 $9 lastMatch".split(" ").forEach(function(a) {
      X.__defineGetter__(a, function() {
        throw Error("RegExpCompat does not support old RegExp." + a + " method");
      });
    });
    X.prototype.compile = function() {
    };
    var ta = this.console;
  }
  X.prototype.toString = function() {
    return "/" + this.source + "/" + this.flags;
  };
  var wc = 10;
  X.prototype.exec = function(a) {
    var b = this.global || this.sticky, c = 0;
    b && (c = this.lastIndex);
    c = this.program.exec(a, c);
    b && (this.lastIndex = c ? c.lastIndex : 0);
    if (!DEFINE_REGEXP_COMPAT__DEBUG || !ta || !this.regExp || 0 > wc) {
      return c ? c.toArray() : null;
    }
    b = this.regExp.exec(a);
    if (!c && !b) {
      return null;
    }
    if (!c && b) {
      return ta.log('[0]Invalid Result! RegExpCompat("' + this.source + '", "' + this.flags + '").exec("' + a + '")'), ta.dir(c), ta.dir(b), --wc, null;
    }
    c = c.toArray();
    if (b.length !== c.length || b.input !== c.input || b.index !== c.index || !!b.groups !== !!c.groups) {
      ta.log('[1]Invalid Result! RegExpCompat("' + this.source + '", "' + this.flags + '").exec("' + a + '")'), ta.dir(c), ta.dir(b), --wc;
    } else {
      for (var d = 0, e = b.length; d < e; ++d) {
        if (b[d] !== c[d] && ("" !== b[d] || c[d] !== k)) {
          ta.log('[2]Invalid Result! RegExpCompat("' + this.source + '", "' + this.flags + '").exec("' + a + '")');
          ta.dir(c);
          ta.dir(b);
          --wc;
          break;
        }
      }
    }
    return c;
  };
  X.prototype.test = function(a) {
    return !!this.exec(a);
  };
  X.prototype.match = function(a) {
    if (this.global) {
      this.lastIndex = 0;
      for (var b = [], c; c = this.exec(a);) {
        b.push(c[0]), "" === c[0] && (this.lastIndex = DEFINE_REGEXP_COMPAT__ES2018 ? x(a, this.lastIndex, this.unicode) : x(a, this.lastIndex));
      }
      return 0 === b.length ? null : b;
    }
    return this.exec(a);
  };
  X.prototype.replace = function(a, b) {
    var c = "function" === typeof b, d = [];
    this.global && (this.lastIndex = 0);
    for (var e; e = this.exec(a);) {
      d.push(e);
      if (!this.global) {
        break;
      }
      "" === e[0] && (this.lastIndex = DEFINE_REGEXP_COMPAT__ES2018 ? x(a, this.lastIndex, this.unicode) : x(a, this.lastIndex));
    }
    for (var f = 0, g = [], h = -1, q = d.length, m = 0; m < q; ++m) {
      if (e = d[m], g[++h] = a.slice(f, e.index), f = e.index + e[0].length, c) {
        var p = Ia(e);
        p.push(e.index, a);
        DEFINE_REGEXP_COMPAT__ES2018 && e.groups && p.push(e.groups);
        g[++h] = "" + b.apply(null, p);
      } else {
        for (var u = 0;;) {
          p = b.indexOf("$", u);
          if (-1 === p) {
            g[++h] = b;
            break;
          }
          g[++h] = b.slice(u, p);
          var z = b.charAt(p + 1);
          switch(z) {
            case "$":
              u = p + 2;
              g[++h] = "$";
              break;
            case "&":
              u = p + 2;
              g[++h] = e[0];
              break;
            case "`":
              u = p + 2;
              g[++h] = a.slice(0, e.index);
              break;
            case "'":
              u = p + 2;
              g[++h] = a.slice(f);
              break;
            case "<":
              DEFINE_REGEXP_COMPAT__ES2018 && (z = b.indexOf(">", p + 2), 0 === this.program.names._size || -1 === z ? (u = p + 2, g[++h] = "$<") : (p = b.slice(p + 2, z), g[++h] = e.groups && e.groups[p] || "", u = z + 1));
              break;
            default:
              if ("0" <= z && "9" >= z) {
                u = b.charAt(p + 2);
                z = "0" <= u && "9" >= u ? z + u : z;
                u = z - 0;
                if (0 < u && u < e.length) {
                  g[++h] = e[u] || "";
                  u = p + 1 + z.length;
                  break;
                }
                u = Wb(u / 10);
                if (0 < u && u < e.length) {
                  g[++h] = e[u] || "";
                  u = p + z.length;
                  break;
                }
              }
              g[++h] = "$";
              u = p + 1;
          }
        }
      }
    }
    g[++h] = a.slice(f);
    return g.join("");
  };
  X.prototype.search = function(a) {
    var b = this.lastIndex;
    this.lastIndex = 0;
    a = this.exec(a);
    this.lastIndex = b;
    return a ? a.index : -1;
  };
  X.prototype.split = function(a, b) {
    var c = new X(this.source, this.sticky ? this.flags : this.flags + "y");
    b = (b !== k ? b : 4294967295) >>> 0;
    var d = [], e;
    if (0 === b) {
      return d;
    }
    if ("" === a) {
      return (e = c.exec(a)) || d.push(a), d;
    }
    for (var f = a.length, g = 0, h = g; h < f;) {
      if (c.lastIndex = h, e = c.exec(a)) {
        var q = Math.min(c.lastIndex, f);
        if (q === g) {
          h = DEFINE_REGEXP_COMPAT__ES2018 ? x(a, h, this.unicode) : x(a, h);
        } else {
          g = a.slice(g, h);
          d.push(g);
          if (b === d.length) {
            return d;
          }
          g = q;
          q = 1;
          for (h = e.length; q < h; ++q) {
            if (d.push(e[q]), b === d.length) {
              return d;
            }
          }
          h = g;
        }
      } else {
        h = DEFINE_REGEXP_COMPAT__ES2018 ? x(a, h, this.unicode) : x(a, h);
      }
    }
    g = a.slice(g);
    d.push(g);
    return d;
  };
  DEFINE_REGEXP_COMPAT__NODEJS && this.module && (this.module.exports = X);
  if (DEFINE_REGEXP_COMPAT__EXPORT_BY_RETURN) {
    return X;
  }
  var Xa;
  DEFINE_CODE_PRETTIFY__USE_STATIC_LEXER || (Xa = {});
  var na, Fb = 1 === DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT || !r.RegExp || -1 === DEFINE_CODE_PRETTIFY__USE_REGEXPCOMPAT && (.9 > nd || 8 > Ub || 5.5 > ma), md, Z = {useRegExpCompat:Fb, initRegExpTime:0, initRegExpCount:0, codeBlocks:[]};
  DEFINE_CODE_PRETTIFY__DEBUG && (Z.initTime = +new Date());
  var qe = V("^\\s*<"), ic = [], Ld = V("\\S");
  if (DEFINE_CODE_PRETTIFY__COMMENT_ATTR_SUPPORT) {
    var ye = V("^\\??prettify\\b"), ze = V("\\b(\\w+)=([\\w:.%+-]+)", "g");
  }
  var Md = [];
  DEFINE_CODE_PRETTIFY__DEBUG && (Z.initTime = new Date() - Z.initTime);
  wd.push(function(a) {
    if (a) {
      a = [Ba(t, "pre"), Ba(t, "code"), Ba(t, "xmp")];
      for (var b = 0; b < a.length; ++b) {
        for (var c = 0, d = a[b].length; c < d; ++c) {
          Md.push(a[b][c]);
        }
      }
      Ua(gc);
      return !0;
    }
  });
  if (DEFINE_CODE_PRETTIFY__EXPORT_PR_OBJECT || DEFINE_CODE_PRETTIFY__DEBUG) {
    r.PR = PR, PR.registerCompleteHandler = function(a) {
      md = a;
    };
  }
  Xa = {m:[0, 4, [4, 5, 6, 7, 8, 9, 10, 11, 0, 12, 13]], c:"m", n:[1, 17, [16, 17, 18, 5, 6, 19, 20, 9, 21, 22, 0, 23]], S:[2, 29, [27, 28, 29, 30, 31, 32, 33, 34]], R:"S", s:"S", r:"S", cc:"m", cs:[0, 38, [16, 4, 5, 6, 7, 35, 9, 10, 11, 0, 12, 13]], sh:[3, 42, [38, 9, 10, 11, 0, 12, 13]], py:[4, 45, [40, 9, 10, 11, 0, 12, 13]], cv:"py", pm:[3, 47, [41, 42, 9, 10, 11, 0, 12, 43]], pl:"pm", rb:[3, 51, [44, 45, 9, 10, 11, 0, 12, 43]], ts:[5, 54, [5, 6, 44, 46, 9, 10, 11, 0, 12, 43]], js:"ts", ex:[6, 
  60, [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65]], go:[7, 77, [67, 68]], hs:[8, 84, [73, 74, 75, 76]], ls:[9, 94, [82, 83, 84, 85, 86, 87, 88, 89, 90, 91]], ss:[10, 108, [95, 96, 97, 98, 99]], el:"ss", cl:"ss", ll:[11, 115, [101, 102, 103, 104, 105]], ml:[12, 123, [108, 109, 110, 111, 112]], fs:"ml", rd:[13, 130, [114, 115, 116, 117, 118]], Rd:"rd", vb:[14, 139, [122, 123, 124, 125, 126, 127]], xq:[15, 148, [130, 131, 132, 133, 134, 129, 135, 136, 137, 138, 24]], xsl:[16, 158, [139, 
  140, 141, 142, 143, 144, 145, 146, 147, 148]], xml:"xsl", htm:"xsl", cyc:"m", cxx:"m", cpp:"m", csh:"sh", bsh:"sh", aea:[17, 169, [149, 150, 97, 151, 99]], agc:"aea", cbm:[18, 175, [154, 155, 156, 152, 157]], clj:[19, 182, [160, 161]], css:[20, 186, [163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173]], erl:[21, 200, [176, 177, 178, 179, 180]], exs:"ex", rkt:"ss", scm:"ss", lsp:"ss", lgt:[22, 207, [113, 182, 183, 184, 179, 185]], lua:[23, 213, [187, 188, 189, 190, 191, 192]], sql:[24, 221, [194, 
  195, 190, 196, 197]], tcl:[25, 228, [200, 96, 97, 98, 99]], tex:[13, 230, [115, 201, 202, 203, 204]], vbs:"vb", vhd:[26, 235, [205, 206, 207, 208, 209, 210, 211, 212]], yml:[27, 250, [219, 220, 221, 222]], mxml:"xsl", html:"xsl", json:[5, 255, [223, 9, 10, 11, 0, 12, 13]], java:[5, 257, [5, 6, 224, 9, 10, 11, 0, 12, 13]], bash:"sh", perl:"pm", ruby:"rb", dart:[26, 259, [225, 226, 227, 168, 228, 229, 230, 231, 232, 233, 234, 235, 236, 60, 237, 238, 239, 240, 241, 242]], lisp:"ss", llvm:"ll", rust:[16, 
  278, [24, 243, 6, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 191, 264, 265, 266]], vhdl:"vhd", wiki:[28, 305, [269, 270, 271, 272, 273, 274]], yaml:"yml", xhtml:"xsl", regex:[16, 312, [275]], basic:"cbm", lasso:"ls", mumps:[29, 315, [94, 277, 278, 279, 280, 281]], proto:[5, 321, [5, 6, 282, 283, 9, 10, 11, 0, 12, 13]], Splus:"S", scala:[30, 327, [287, 288, 289, 290, 291, 292, 293, 294, 295]], swift:[31, 339, [298, 299, 300, 301, 302, 6, 303, 
  304]], latex:"tex", "in.tag":[32, 349, [307, 308, 309, 310, 311, 312, 313, 314, 315, 316]], "uq.val":[16, 312, [317]], python:"py", coffee:[33, 361, [4, 5, 6, 44, 319, 9, 10, 11, 0, 12, 43]], apollo:"aea", "css-kw":[16, 363, [320]], erlang:"erl", kotlin:[34, 365, [322, 323, 324, 325, 243, 6, 326, 327, 328, 329, 330]], matlab:[35, 377, [333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343]], pascal:[36, 391, [346, 347, 348, 349, 344, 350]], xquery:"xq", "css-str":[16, 397, [351]], logtalk:"lgt", 
  nemerle:"n", "wiki.meta":[37, 400, []], typescript:"ts", javascript:"ts", lassoscript:"ls", "default-code":[38, 401, [4, 5, 6, 44, 353, 9, 10, 11, 0, 12, 43]], "default-markup":"xsl", "matlab-operators":[16, 403, [354, 342, 343, 355]], "matlab-identifiers":[16, 406, [356, 357, 358, 359, 360, 361, 362, 363]]};
  var te = [{"'":1, '"':1, "#":2, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {'"':14, "#":15, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':25, "'":26}, {"`":36, '"':36, "'":36, "#":37, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {'"':39, "'":39, "#":37, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {"'":1, '"':1, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, 
  "#":27, "'":48, "@":49, "}":50, "|":50, "{":50, "^":50, "]":50, "\\":50, "[":50, "?":50, ">":50, "=":50, "<":50, ";":50, "-":50, ",":50, "+":50, "*":50, ")":50, "(":50, "&":50, "%":50, "!":50, "-num":47}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "'":66, '"':66}, {" ":70, "\r":70, "\f":70, "\x0B":70, "\n":70, "\t":70, '"':71, "'":72, "-num":69}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "'":78, '"':79, "`":80, $:81, "#":81, "-num":77}, {"(":92, ")":93, ";":94, "\u00a0":24, " ":24, 
  "\r":24, "\n":24, "\t":24, '"':25}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':100, ";":94}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "#":106, "'":107, '"':107}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "%":113}, {"\u2029":119, "\u2028":119, "\u00a0":119, " ":119, "\r":119, "\n":119, "\t":119, "\u201d":120, "\u201c":120, '"':120, "\u2019":121, "\u2018":121, "'":121}, {$:128, "'":129, '"':129}, {}, {"#":37, "\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':25}, {'"':153, 
  "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":152}, {"{":158, "[":158, "(":158, "}":159, "]":159, ")":159, ";":94, "\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':25}, {"\f":162, "\n":162, "\r":162, "\t":162, " ":162}, {" ":70, "\r":70, "\f":70, "\x0B":70, "\n":70, "\t":70, '"':71, "'":174, "?":175, "-num":69}, {'"':71, "'":174, "%":113, "-num":181}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "'":186, '"':186}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "'":193, '"':193}, {"{":198, 
  "}":199, "#":37, "\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':25}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24}, {"?":213, ">":213, "|":213, ":":213, "%":214, "&":215, "!":216, '"':217, "'":218, "#":37, "\n":3, "\r":3, "\t":3, " ":3}, {z:267, y:267, x:267, w:267, v:267, u:267, t:267, s:267, r:267, q:267, p:267, o:267, n:267, m:267, l:267, k:267, j:267, i:267, g:267, f:267, e:267, d:267, c:267, b:267, a:267, "\u00a0":267, " ":267, "\t":267, "]":268, "[":268, "^":268, "~":268, "*":268, 
  "=":268, "-num":267}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':276, ";":94}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':284, "`":285, "~":286, "}":286, "|":286, "{":286, "^":286, "]":286, "\\":286, "[":286, "@":286, "?":286, ">":286, "=":286, "<":286, ";":286, ":":286, "-":286, ",":286, "+":286, "*":286, ")":286, "(":286, "&":286, "%":286, "#":286, "!":286}, {"\x00":296, "\f":296, "\x0B":296, "\t":296, "\r":296, "\n":296, " ":296, '"':297}, {"\n":305, "\r":305, "\t":305, " ":305, 
  "'":306, '"':306}, {'"':39, "'":39, "#":318, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, ":":321, "}":321, "|":321, "{":321, "^":321, "]":321, "\\":321, "[":321, "?":321, ">":321, "=":321, "<":321, ";":321, "-":321, ",":321, "+":321, "*":321, ")":321, "(":321, "&":321, "%":321, "!":321, ".":321}, {"\u00a0":331, "\f":331, "\x0B":331, "\n":331, "\r":331, "\t":331, " ":331, "%":113, "!":332}, {"'":345, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, 
  "-num":344}, {"#":352}, {"`":36, '"':36, "'":36, "#":2, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}];
  var se = [["lit", 0], ["str", 1], ["com", 2], ["pln", 3], ["str", 5], ["com", 6], ["com", 7], ["typ", 8], ["kwd", 9], ["lit", 10], ["typ", 11], ["pln", 12], ["pln", 13], ["pun", 14], ["str", 15], ["com", 16], ["str", 18], ["str", 19], ["str", 20], ["kwd", 21], ["typ", 22], ["typ", 23], ["pln", 24], ["pun", 25], ["pln", 26], ["str", 27], ["str", 28], ["com", 30], ["kwd", 31], ["lit", 32], ["lit", 33], ["lit", 34], ["pun", 35], ["pln", 36], ["str", 37], ["kwd", 39], ["str", 40], ["com", 41], ["kwd", 
  43], ["str", 44], ["kwd", 46], ["lang-regex", 48], ["kwd", 49], ["pun", 50], ["lang-regex", 52], ["kwd", 53], ["kwd", 55], ["lit", 56], ["lit", 57], ["atn", 58], ["pun", 59], ["atn", 61], ["pun", 62], ["lit", 63], ["atn", 64], ["kwd", 65], ["lit", 66], ["lit", 67], ["str", 68], ["str", 69], ["typ", 70], ["com", 71], ["pln", 72], ["atv", 73], ["atv", 74], ["pun", 75], ["pln", 76], ["com", 78], ["pln", 79], ["lit", 80], ["pln", 81], ["str", 82], ["str", 83], ["com", 85], ["kwd", 86], ["pln", 87], 
  ["pun", 88], ["lit", 89], ["str", 90], ["str", 91], ["str", 92], ["atn", 93], ["tag", 95], ["com", 96], ["atn", 97], ["lit", 98], ["atv", 99], ["lit", 100], ["typ", 101], ["kwd", 102], ["pln", 103], ["pun", 104], ["opn", 105], ["clo", 106], ["com", 107], ["kwd", 109], ["lit", 110], ["lit", 111], ["pln", 112], ["pun", 113], ["str", 114], ["pln", 116], ["kwd", 117], ["lit", 118], ["lit", 119], ["pun", 120], ["com", 121], ["str", 122], ["com", 124], ["kwd", 125], ["lit", 126], ["pln", 127], ["pun", 
  128], ["com", 129], ["lit", 131], ["kwd", 132], ["kwd", 133], ["pln", 134], ["pun", 135], ["pln", 136], ["str", 137], ["com", 138], ["kwd", 140], ["com", 141], ["lit", 142], ["pln", 143], ["pun", 144], ["pun", 145], ["var pln", 146], ["str", 147], ["pln", 149], ["lit", 150], ["tag", 151], ["com", 152], ["pln", 153], ["kwd", 154], ["typ", 155], ["fun pln", 156], ["pln", 157], ["pln", 159], ["dec", 160], ["com", 161], ["lang-", 162], ["lang-", 163], ["pun", 164], ["lang-", 165], ["lang-js", 166], 
  ["lang-css", 167], ["lang-in.tag", 168], ["kwd", 170], ["typ", 171], ["pln", 172], ["lit", 173], ["str", 174], ["com", 176], ["kwd", 177], ["pln", 178], ["pun", 179], ["opn", 180], ["clo", 181], ["kwd", 183], ["typ", 184], ["pln", 185], ["str", 187], ["str", 188], ["lang-css-str", 189], ["kwd", 190], ["lang-css-kw", 191], ["com", 192], ["com", 193], ["lit", 194], ["lit", 195], ["pln", 196], ["pun", 197], ["lit", 198], ["lit", 199], ["com", 201], ["kwd", 202], ["kwd", 203], ["typ", 204], ["pun", 
  205], ["lit", 206], ["com", 208], ["kwd", 209], ["kwd", 210], ["pun", 211], ["str", 212], ["com", 214], ["str", 215], ["kwd", 216], ["lit", 217], ["pln", 218], ["pun", 219], ["str", 220], ["com", 222], ["kwd", 223], ["pln", 224], ["pun", 225], ["opn", 226], ["clo", 227], ["kwd", 229], ["kwd", 231], ["typ", 232], ["lit", 233], ["pun", 234], ["str", 236], ["com", 237], ["kwd", 238], ["typ", 239], ["typ", 240], ["lit", 241], ["pln", 242], ["pun", 243], ["pun", 244], ["dec", 245], ["typ", 246], ["typ", 
  247], ["str", 248], ["str", 249], ["dec", 251], ["pun", 252], ["kwd", 253], ["pln", 254], ["kwd", 256], ["kwd", 258], ["com", 260], ["kwd", 261], ["com", 262], ["kwd", 263], ["kwd", 264], ["kwd", 265], ["typ", 266], ["kwd", 267], ["str", 268], ["str", 269], ["str", 270], ["str", 271], ["pln", 272], ["pun", 273], ["lit", 274], ["lit", 275], ["lit", 276], ["pun", 277], ["com", 279], ["str", 280], ["str", 281], ["str", 282], ["str", 283], ["str", 284], ["tag", 285], ["kwd", 286], ["kwd", 287], ["typ", 
  288], ["typ", 289], ["lit", 290], ["lit", 291], ["lit", 292], ["lit", 293], ["lit", 294], ["lit", 295], ["lit", 296], ["lit", 297], ["lit", 298], ["atn", 299], ["atv", 300], ["pun", 301], ["pln", 302], ["pln", 303], ["pun", 304], ["lang-wiki.meta", 306], ["lit", 307], ["lang-", 308], ["lang-", 309], ["str", 310], ["pln", 311], ["str", 313], ["str", 314], ["dec", 316], ["kwd", 317], ["lit", 318], ["pln", 319], ["pun", 320], ["typ", 322], ["kwd", 323], ["str", 324], ["lit", 325], ["pun", 326], ["str", 
  328], ["lit", 329], ["kwd", 330], ["lit", 331], ["lit", 332], ["typ", 333], ["pln", 334], ["com", 335], ["pun", 336], ["pln", 337], ["str", 338], ["lit", 340], ["lit", 341], ["lit", 342], ["kwd", 343], ["com", 344], ["pun", 345], ["typ", 346], ["pln", 347], ["atv", 348], ["tag", 350], ["atn", 351], ["lang-uq.val", 352], ["pun", 353], ["lang-js", 354], ["lang-js", 355], ["lang-js", 356], ["lang-css", 357], ["lang-css", 358], ["lang-css", 359], ["atv", 313], ["com", 360], ["kwd", 362], ["kwd", 196], 
  ["pun", 364], ["kwd", 366], ["lit", 367], ["lit", 368], ["typ", 369], ["str", 370], ["str", 371], ["str", 372], ["lit", 373], ["lit", 374], ["pln", 375], ["syscmd", 376], ["linecont", 378], ["err", 379], ["wrn", 380], ["codeoutput", 381], ["codeoutput", 382], ["lang-matlab-operators", 383], ["lang-matlab-identifiers", 384], ["str", 385], ["lit", 386], ["tag", 387], ["pun", 388], ["lit", 389], ["str", 390], ["com", 392], ["kwd", 393], ["lit", 394], ["pln", 395], ["pun", 396], ["str", 398], ["kwd", 
  399], ["kwd", 402], ["lang-matlab-identifiers", 404], ["transpose", 405], ["kwd", 407], ["const", 408], ["typ", 409], ["fun", 410], ["fun_tbx", 411], ["fun_tbx", 412], ["fun_tbx", 413], ["ident", 414]];
  var hc = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", "^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\\b|[^\\r\\n]*)", "^\\s+", ["(?:(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$)))|(?:#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\\b|[^\\r\\n]*))|(?:\\s+)|(?:<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h(?:h|pp|\\+\\+)?|[a-z]\\w*)>)|(?:\\/\\/[^\\r\\n]*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:(?:DIR|FILE|array|vector|(?:de|priority_)?queue|(?:forward_)?list|stack|(?:const_)?(?:reverse_)?iterator|(?:unordered_)?(?:multi)?(?:set|map)|bitset|u?(?:int|float)\\d*)\\b)|(?:(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|alignas|alignof|align_union|asm|axiom|bool|concept|concept_map|const_cast|constexpr|decltype|delegate|dynamic_cast|explicit|export|friend|generic|late_check|mutable|namespace|noexcept|noreturn|nullptr|property|reinterpret_cast|static_assert|static_cast|template|typeid|typename|using|virtual|where)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*)|(?:[\x00-\uffff])", 
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
  "^\\b(?:bintprog|color|fgoalattain|fminbnd|fmincon|fminimax|fminsearch|fminunc|fseminf|fsolve|fzero|fzmult|gangstr|ktrlink|linprog|lsqcurvefit|lsqlin|lsqnonlin|lsqnonneg|optimget|optimset|optimtool|quadprog)\\b", "^[a-zA-Z][a-zA-Z0-9_]*(?:\\.[a-zA-Z][a-zA-Z0-9_]*)*"];
  var ee = t.scripts || Ba(t, "script");
  var Na = ee[ee.length - 1].src.split("/");
  --Na.length;
  DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_JS_DIR && Na[Na.length - 1] === DEFINE_WEB_DOC_BASE__ASSET_DIR_TO_JS_DIR && --Na.length;
  (Na = Na.join("/")) && (Na += "/");
  Debug.log("[p_assetUrl] " + Na);
  DEFINE_WEB_DOC_BASE__MOBILE_PAGE_CSS_DIR && DEFINE_WEB_DOC_BASE__DESKTOP_PAGE_CSS_DIR && (Be || He(ld, "mob"));
  DEFINE_WEB_DOC_BASE__DEBUG && qc(function() {
    var a;
    DEFINE_WEB_DOC_BASE__LOGGER_ELEMENT_ID ? (a = Ge(DEFINE_WEB_DOC_BASE__LOGGER_ELEMENT_ID)) || alert("#" + DEFINE_WEB_DOC_BASE__LOGGER_ELEMENT_ID + " not found!") : alert("No DEFINE_WEB_DOC_BASE__LOGGER_ELEMENT_ID !");
    a ? (Debug.log = function(b) {
      kc(a, "P", k, b);
    }, Debug.error = function(b) {
      kc(a, "P", {style:{color:"red"}}, b);
    }, r.onerror = function(b, c, d) {
      Debug.error(b + ", " + c + ", " + d);
      return !0;
    }) : r.console ? (Debug.log = ta.log, Debug.error = ta.error) : Ub ? (Debug.log = Tb, Debug.error = opera.postError) : Debug.log = Debug.error = Tb;
    for (; mc.length;) {
      Debug.log(mc.shift());
    }
    for (; nc.length;) {
      Debug.log(nc.shift());
    }
    mc = nc = k;
  });
  6.1 > Od && (void 0)(De);
  Wd(v);
  6.1 > Od && (void 0)(Ee);
  Wd(lb);
  r.RegExpCompat = V;
})(ua, this, function() {
}, document, parseFloat, Function, isFinite, setTimeout, clearTimeout, void 0);

