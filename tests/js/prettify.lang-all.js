/** Code Preffity for ES2 [lang-all, Debug build](https://githug.com/itozyun/regexp-free-code-prettify) */
function xa(ia, S) {
  setTimeout(function() {
    ia(S);
  }, 16);
}
(function(ia, S, sb, tb, ub, vb, wb, u) {
  function T(a, b) {
    var c = a.length;
    if (0 > b || b >= c) {
      return u;
    }
    var e = a.charCodeAt(b);
    return 55296 <= e && 56319 >= e && c > b + 1 && (c = a.charCodeAt(b + 1), 56320 <= c && 57343 >= c) ? 1024 * (e - 55296) + c - 56320 + 65536 : e;
  }
  function B(a, b, c) {
    return a.substr(c, b.length) === b;
  }
  function N(a) {
    for (var b = a.length, c = []; b;) {
      c[--b] = a[b];
    }
    return c;
  }
  function ja(a, b) {
    for (var c = a.length, e = []; c;) {
      e[--c] = b(a[c], c);
    }
    return e;
  }
  function Oa(a, b) {
    for (var c = (a.length >>> 0) - 1, e = a[c--]; 0 <= c; --c) {
      e = b(e, a[c]);
    }
    return e;
  }
  function Pa(a, b) {
    var c = b || a + 1;
    var e = a;
    for (var d = -1, f = this.length / 2; 1 < f - d;) {
      var g = d + ka((f - d) / 2);
      e <= this[2 * g + 1] ? f = g : d = g;
    }
    e = f;
    d = ya(this, c);
    d = this.splice(2 * e, 2 * (d - e + 1));
    0 < d.length && (a = Math.min(a, d[0]), c = Math.max(c, d[d.length - 1]));
    this.splice(2 * e, 0, a, c);
  }
  function Qa(a) {
    for (var b, c, e = -1, d = a.length - 1; e < d;) {
      b = a[++e], c = a[++e], this.add(b, c);
    }
  }
  function Ra() {
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
  function Sa() {
    return L(N(this));
  }
  function Ta(a) {
    var b = ya(this, a);
    if (0 > b || this.length <= 2 * b) {
      return !1;
    }
    var c = this[2 * b + 1];
    return this[2 * b] <= a && a < c;
  }
  function ya(a, b) {
    for (var c = -1, e = a.length / 2; 1 < e - c;) {
      var d = c + ka((e - c) / 2);
      a[2 * d] <= b ? c = d : e = d;
    }
    return c;
  }
  function U(a) {
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
  function za(a) {
    switch(a.type) {
      case 15:
        return U(a.raw);
      case 18:
        return U(a.children[0].raw) + "-" + U(a.children[1].raw);
      case 16:
        switch(a.kind) {
          case 1:
            return a.G ? "\\D" : "\\d";
          case 2:
            return a.G ? "\\W" : "\\w";
          case 3:
            return a.G ? "\\S" : "\\s";
        }
    }
  }
  function Ua(a) {
    return "|" === a || ")" === a || "" === a;
  }
  function la(a) {
    return "0" <= a && "9" >= a;
  }
  function O(a) {
    for (var b = a.h, c = [Aa(a)]; "|" === p(a);) {
      ++a.h, c.push(Aa(a));
    }
    return 1 === c.length ? c[0] : {type:1, children:c, B:[b, a.h]};
  }
  function Aa(a) {
    for (var b = a.h, c = []; !Ua(p(a));) {
      c.push(Va(a));
    }
    return 1 === c.length ? c[0] : {type:2, children:c, B:[b, a.h]};
  }
  function Va(a) {
    var b = a.h, c = Wa(a);
    if (10 <= c.type && 13 >= c.type && (!a.D || 13 !== c.type)) {
      return c;
    }
    switch(p(a)) {
      case "*":
        return ma(a, 6, b, c);
      case "+":
        return ma(a, 7, b, c);
      case "?":
        return ma(a, 8, b, c);
      case "{":
        var e = a.h;
        b: {
          var d = a.h;
          ++a.h;
          var f = na(a);
          if (0 > f) {
            a.h = d;
          } else {
            var g = null;
            if ("," === p(a)) {
              if (++a.h, "}" === p(a)) {
                g = Infinity;
              } else {
                if (g = na(a), 0 > g) {
                  a.h = d;
                  d = void 0;
                  break b;
                }
              }
            }
            if ("}" !== p(a)) {
              a.h = d;
            } else {
              ++a.h;
              d = {min:f, max:g};
              break b;
            }
          }
          d = void 0;
        }
        !d && a.D ? (a.h = e, a = c) : (e = d.min, d = d.max, f = !1, "?" === p(a) && (++a.h, f = !0), a = {type:9, min:e, max:d, I:f, F:c, B:[b, a.h]});
        return a;
    }
    return c;
  }
  function ma(a, b, c, e) {
    ++a.h;
    var d = !1;
    "?" === p(a) && (++a.h, d = !0);
    return {type:b, I:d, F:e, B:[c, a.h]};
  }
  function Wa(a) {
    var b = a.h, c = p(a);
    switch(c) {
      case ".":
        return ++a.h, {type:19, B:[b, a.h]};
      case "^":
        return ++a.h, {type:11, B:[b, a.h]};
      case "$":
        return ++a.h, {type:12, B:[b, a.h]};
      case "[":
        b = a.h;
        ++a.h;
        c = !1;
        "^" === p(a) && (++a.h, c = !0);
        for (var e = []; "]" !== p(a);) {
          e.push(Xa(a));
        }
        ++a.h;
        return {type:17, G:c, children:e, B:[b, a.h]};
      case "\\":
        return Ya(a);
      case "(":
        return Za(a);
    }
    a.h += c.length;
    return {type:15, value:T(c, 0), raw:c, B:[b, a.h]};
  }
  function Xa(a) {
    var b = a.h, c = Ba(a);
    if ("-" !== p(a) || B(a.source, "-]", a.h)) {
      return c;
    }
    if (16 === c.type && a.D) {
      return c;
    }
    var e = a.h;
    ++a.h;
    var d = Ba(a);
    return 16 === d.type && a.D ? (a.h = e, c) : {type:18, children:[c, d], B:[b, a.h]};
  }
  function Ba(a) {
    var b = a.h, c = p(a);
    if ("\\" !== c) {
      return a.h += c.length, {type:15, value:T(c, 0), raw:c, B:[b, a.h]};
    }
    if (B(a.source, "\\-", a.h)) {
      return a.h += 2, {type:15, value:45, raw:"\\-", B:[b, a.h]};
    }
    if (B(a.source, "\\b", a.h)) {
      return a.h += 2, {type:15, value:8, raw:"\\b", B:[b, a.h]};
    }
    if (b = Ca(a)) {
      return b;
    }
    if (a = Da(a)) {
      return a;
    }
  }
  function Ya(a) {
    var b = a.h;
    B(a.source, "\\b", a.h) ? (a.h += 2, b = {type:10, G:!1, B:[b, a.h]}) : B(a.source, "\\B", a.h) ? (a.h += 2, b = {type:10, G:!0, B:[b, a.h]}) : b = void 0;
    if (b) {
      return b;
    }
    a: {
      b = a.h;
      ++a.h;
      if ("0" !== p(a)) {
        var c = na(a);
        if (1 <= c) {
          if (a.D) {
            if (c <= a.U) {
              b = {type:20, index:c, B:[b, a.h]};
              break a;
            }
          } else {
            b = {type:20, index:c, B:[b, a.h]};
            break a;
          }
        }
      }
      a.h = b;
      b = void 0;
    }
    if (b) {
      return b;
    }
    if (b = Ca(a)) {
      return b;
    }
    if (a = Da(a)) {
      return a;
    }
  }
  function Da(a) {
    var b = a.h;
    var c = a.h;
    ++a.h;
    if ("u" !== p(a)) {
      a.h = c, c = "";
    } else {
      ++a.h;
      var e = Ea(a, 4);
      0 > e && a.D ? (a.h = c, c = "") : c = V(e);
    }
    if ("" !== c) {
      return c = T(c, 0), {type:15, value:c, raw:a.source.slice(b, a.h), B:[b, a.h]};
    }
    ++a.h;
    switch(p(a)) {
      case "t":
        return ++a.h, {type:15, value:9, raw:"\\t", B:[b, a.h]};
      case "n":
        return ++a.h, {type:15, value:10, raw:"\\n", B:[b, a.h]};
      case "v":
        return ++a.h, {type:15, value:11, raw:"\\v", B:[b, a.h]};
      case "f":
        return ++a.h, {type:15, value:12, raw:"\\f", B:[b, a.h]};
      case "r":
        return ++a.h, {type:15, value:13, raw:"\\r", B:[b, a.h]};
      case "c":
        ++a.h;
        e = p(a);
        c = 0;
        if ("a" <= e && "z" >= e || "A" <= e && "Z" >= e) {
          ++a.h, c = e.charCodeAt(0) % 32;
        } else {
          if (a.D) {
            --a.h;
            break;
          }
        }
        return {type:15, value:c, raw:a.source.slice(b, a.h), B:[b, a.h]};
      case "x":
        ++a.h;
        c = Ea(a, 2);
        if (0 > c) {
          --a.h;
          break;
        }
        return {type:15, value:c, raw:a.source.slice(b, a.h), B:[b, a.h]};
      case "0":
        if (++a.h, la(p(a))) {
          --a.h;
        } else {
          return {type:15, value:0, raw:"\\0", B:[b, a.h]};
        }
    }
    if (a.D && (c = a.h, e = p(a), "0" <= e && "3" >= e ? (++a.h, e = p(a), "0" <= e && "7" >= e && (++a.h, e = p(a), "0" <= e && "7" >= e && ++a.h)) : "4" <= e && "7" >= e && (++a.h, e = p(a), "0" <= e && "7" >= e && ++a.h), c !== a.h)) {
      return c = parseInt(a.source.slice(c, a.h), 8), {type:15, value:c, raw:a.source.slice(b, a.h), B:[b, a.h]};
    }
    e = p(a);
    c = T(e, 0);
    if (a.D) {
      if ("c" === e) {
        return {type:15, value:92, raw:"\\", B:[b, a.h]};
      }
      if ("k" !== e) {
        return a.h += e.length, {type:15, value:c, raw:"\\" + e, B:[b, a.h]};
      }
    } else {
      if (!$a.has(c)) {
        return a.h += e.length, {type:15, value:c, raw:"\\" + e, B:[b, a.h]};
      }
    }
    a.h = b;
  }
  function Ca(a) {
    var b = a.h;
    ++a.h;
    var c = p(a);
    switch(c) {
      case "d":
      case "D":
        return ++a.h, {type:16, kind:1, G:"D" === c, B:[b, a.h]};
      case "w":
      case "W":
        return ++a.h, {type:16, kind:2, G:"W" === c, B:[b, a.h]};
      case "s":
      case "S":
        return ++a.h, {type:16, kind:3, G:"S" === c, B:[b, a.h]};
    }
    a.h = b;
  }
  function Za(a) {
    var b = a.h;
    if (!B(a.source, "(?", a.h)) {
      ++a.h;
      var c = ++a.K;
      var e = O(a);
      ++a.h;
      return {type:3, index:c, F:e, B:[b, a.h]};
    }
    if (B(a.source, "(?:", a.h)) {
      return a.h += 3, e = O(a), ++a.h, {type:5, F:e, B:[b, a.h]};
    }
    if (B(a.source, "(?=", a.h)) {
      return a.h += 3, e = O(a), ++a.h, {type:13, ea:!1, F:e, B:[b, a.h]};
    }
    if (B(a.source, "(?!", a.h)) {
      return a.h += 3, e = O(a), ++a.h, {type:13, ea:!0, F:e, B:[b, a.h]};
    }
  }
  function na(a) {
    for (var b = "", c; la(c = p(a));) {
      b += c, ++a.h;
    }
    return "" === b ? -1 : parseInt(b, 10);
  }
  function Ea(a, b) {
    for (var c = a.h, e = ""; 0 < b--;) {
      var d = p(a), f = d;
      if (!(la(f) || "a" <= f && "f" >= f || "A" <= f && "F" >= f)) {
        return a.h = c, -1;
      }
      e += d;
      a.h += d.length;
    }
    return parseInt(e, 16);
  }
  function p(a) {
    a = a.source.charCodeAt(a.h);
    return a !== a ? "" : V(a);
  }
  function C(a, b) {
    switch(b.type) {
      case 1:
        return ab(a, b);
      case 2:
        var c = N(b.children);
        if (2 === a.direction) {
          for (var e = 1, d, f = c.length; e < f; ++e) {
            d = c.pop(), c.unshift(d);
          }
        }
        f = [];
        var g = !1;
        for (e = -1; d = c[++e];) {
          d = C(a, d), w(f, d), g = g || a.D;
        }
        a.D = g;
        return f;
      case 3:
        return c = a.K++, e = C(a, b.F), w([], {A:2 === a.direction ? 3 : 2, index:c}, e, {A:2 === a.direction ? 2 : 3, index:c});
      case 5:
        return C(a, b.F);
      case 6:
        return c = a.K, e = W(a, C(a, b.F)), c = P(a, c, e), a.D = !1, w([], {A:b.I ? 12 : 11, next:c.length + 1}, c, {A:13, V:-1 - c.length - 1});
      case 7:
        return e = a.K, c = C(a, b.F), e = P(a, e, W(a, c)), w([], c, {A:b.I ? 12 : 11, next:e.length + 1}, e, {A:13, V:-1 - e.length - 1});
      case 8:
        return c = C(a, b.F), a.D = !1, w([], {A:b.I ? 12 : 11, next:c.length}, c);
      case 9:
        return c = a.K, f = b.min, e = C(a, b.F), d = [], 1 === f ? w(d, e) : 1 < f ? (g = P(a, c, e), w(d, {A:19, value:f}, g, {A:8}, {A:16, V:-1 - g.length - 1}, {A:18})) : a.D = !1, g = null != b.max ? b.max : f, Infinity === g ? (g = P(a, c, W(a, e)), w(d, {A:b.I ? 12 : 11, next:g.length + 1}, g, {A:13, V:-1 - g.length - 1})) : g > f && (f = g - f, g = P(a, c, W(a, e)), 1 === f ? w(d, {A:b.I ? 12 : 11, next:g.length}, g) : w(d, {A:19, value:f + 1}, {A:b.I ? 12 : 11, next:g.length + 4}, g, {A:8}, 
        {A:16, V:-1 - g.length - 2}, {A:10}, {A:18})), d;
      case 10:
        return a.D = !1, [{A:b.G ? 27 : 26}];
      case 11:
        return a.D = !1, [{A:14}];
      case 12:
        return a.D = !1, [{A:15}];
      case 13:
        return c = a.direction, a.direction = 1, e = C(a, b.F), a.D = !1, e = b.ea ? w([], {A:20}, {A:21}, {A:11, next:e.length + 2}, e, {A:25}, {A:10}, {A:18}, {A:24}) : w([], {A:20}, {A:21}, e, {A:25}, {A:24}), a.direction = c, e;
      case 15:
        return c = b.value, a.ignoreCase && (c = K(c)), a.D = !0, X(a, [{A:5, value:c}]);
      case 16:
        return c = Fa(a, b), a.D = !0, X(a, [{A:6, set:c}]);
      case 17:
        c = L([]);
        e = b.children;
        for (f = -1; d = e[++f];) {
          switch(d.type) {
            case 15:
              c.add(d.value, d.value + 1);
              break;
            case 16:
              c.ja(Fa(a, d));
              break;
            case 18:
              c.add(d.children[0].value, d.children[1].value + 1);
          }
        }
        a.D = !0;
        return X(a, [{A:b.G ? 7 : 6, set:c}]);
      case 19:
        return a.D = !0, X(a, [{A:0}]);
      case 20:
        return a.D = !1, [{A:2 === a.direction ? 23 : 22, index:b.index}];
    }
  }
  function ab(a, b) {
    for (var c = b.children, e = c.length, d = [], f = !0, g = 0; g < e; ++g) {
      d.push(C(a, c[g])), f = f && a.D;
    }
    a.D = f;
    return Oa(d, function(h, l) {
      return w([], {A:11, next:l.length + 1}, l, {A:13, V:h.length}, h);
    });
  }
  function W(a, b) {
    return a.D ? b : w([], {A:20}, b, {A:9});
  }
  function P(a, b, c) {
    return b === a.K ? c : w([], {A:4, from:b, pa:a.K}, c);
  }
  function Fa(a, b) {
    switch(b.kind) {
      case 1:
        return b.G ? bb : Ga;
      case 2:
        return b.G ? cb : oa;
      case 3:
        return b.G ? db : Ha;
    }
  }
  function X(a, b) {
    return 1 === a.direction ? b : w([], {A:1}, b, {A:1});
  }
  function w(a, b) {
    for (var c = arguments, e = c.length, d = 1, f = a.length - 1, g; d < e; ++d) {
      if ((g = c[d]) && g.pop) {
        for (var h = 0, l = g.length; h < l; ++h) {
          a[++f] = g[h];
        }
      } else {
        a[++f] = g;
      }
    }
    return a;
  }
  function z(a, b) {
    var c = a.charCodeAt(b);
    return c !== c ? -1 : c;
  }
  function G(a) {
    return 65536 <= a ? 2 : 1;
  }
  function pa(a) {
    return 10 === a || 13 === a || 8232 === a || 8233 === a;
  }
  function qa(a, b, c, e, d) {
    this.h = a;
    this.J = b;
    this.stack = c;
    this.T = e;
    this.O = d;
  }
  function eb(a, b, c) {
    return a.replace(b, c);
  }
  function Y(a) {
    return a === "" + a;
  }
  function x(a, b, c, e) {
    var d = J.codeBlocks[J.codeBlocks.length - 1], f = M();
    c = c || 0;
    switch(Z) {
      case 1:
        J.initRegExpCount++;
        break;
      case 2:
        d.decorateCount++;
    }
    if (Z !== c) {
      switch(Z) {
        case 1:
          J.initRegExpTime += f - H;
          break;
        case 2:
          d.decorateTime += f - H;
          break;
        case 3:
          d.updateDOMTime += f - H;
      }
      Z = c;
      H = f;
    }
    if (20 > f - H && !e) {
      return a(b);
    }
    xa(fb, {la:a, oa:b});
  }
  function fb(a) {
    H = M();
    a.la(a.oa);
  }
  function gb() {
    var a = A, b = a.ma, c = hb(a.ca, a.ha), e = a.aa = c.aa;
    a.fa = c.fa;
    Ia(b, e) || (A = u, x(aa, u, 0, !0));
  }
  function Ia(a, b) {
    a && Q[a] || (a = ib.test(b) ? "default-markup" : "default-code");
    var c = !!Q[a];
    c && x(Ja, a, 0, !0);
    return c;
  }
  function ra() {
    var a = A;
    a.qa = a.Y[1].match(a.aa) || [];
    a.ba.push(a.da, "pln");
    x(ba, u, 2);
  }
  function ba() {
    function a(I, D, E) {
      D && (b.W = b.W || [], b.W.push({X:b, ca:b.ca, ha:1, ba:g, da:I, aa:D, Y:E, ia:{}, h:0}));
    }
    var b = A, c = b.Y, e = c[0], d = c[2], f = b.da, g = b.ba, h = b.qa.shift(), l = b.ia;
    if (h) {
      var m = l[h], n;
      if (!Y(m)) {
        if (n = e[h.charAt(0)]) {
          var k = n[1].match(h);
          m = n[0];
        } else {
          for (m = "pln", e = -1; n = d[++e];) {
            if (k = n[1].match(h)) {
              m = n[0];
              break;
            }
          }
        }
        !(n = 5 <= m.length && "lang-" === m.substr(0, 5)) || k && Y(k[1]) || (n = !1, m = "src");
        n || (l[h] = m);
      }
      d = b.h;
      l = h.length;
      b.h += l;
      if (n) {
        n = k[1];
        e = h.indexOf(n);
        var q = n.length, r = e + q;
        k[2] && (r = l - k[2].length, e = r - q);
        m = m.substr(5);
        a(f + d, h.substr(0, e), c);
        if (q && Ia(m, n)) {
          a(f + d + e, n);
          var v = !0;
        }
        a(f + d + r, h.substr(r), c);
        b.W && (A = b.W.shift());
        v || (A !== b ? x(ra, u, 2) : x(ba, u, 2));
      } else {
        g.push(f + d, m), x(ba, u, 2);
      }
    } else {
      b.X ? (A = b.X.W.shift()) ? x(ra, u, 2) : (A = b.X, x(ba, u, 2)) : x(jb, u, 2);
    }
  }
  function Ja(a) {
    function b(m) {
      var n = m;
      0 <= m && (n = kb[m]);
      0 <= n[1] && (n[1] = c(n[1]));
      return n;
    }
    function c(m) {
      var n = m;
      return 0 <= m && (n = ca[m], !n.exec) ? (da.push(m), m) : n;
    }
    var e = A, d = Q[a];
    Y(d) && (d = Q[a] = Q[d]);
    var f = d[0];
    if (0 <= f) {
      f = lb[f];
      if (0 <= f["-num"]) {
        var g = f["-num"];
        delete f["-num"];
        for (var h = -1; 9 > h;) {
          f["" + ++h] = g;
        }
      }
      d[0] = f;
    }
    for (var l in f) {
      f[l] = b(f[l]);
    }
    d[1] = c(d[1]);
    f = d[2];
    h = 0;
    for (g = f.length; h < g; ++h) {
      f[h] = b(f[h]);
    }
    da.length ? x(sa, a, 1) : (e.Y ? e.X && (e.X.W[0].Y = d) : e.Y = d, x(ra, u, 1));
  }
  function sa(a) {
    if (da.length) {
      var b = da.shift(), c = ca[b];
      if (c.pop) {
        ca[b] = new y(c[0], c[1]);
      } else {
        if (Y(c)) {
          ca[b] = new y(c, void 0);
        } else {
          return sa(a);
        }
      }
      x(sa, a, 1);
    } else {
      Ja(a);
    }
  }
  function hb(a, b) {
    function c(l) {
      var m = l.nodeType;
      if (1 === m) {
        if (!(0 <= (" " + l.className + " ").indexOf(" nocode "))) {
          for (m = l.firstChild; m; m = m.nextSibling) {
            c(m);
          }
          m = l.nodeName.toLowerCase();
          if ("br" === m || "li" === m) {
            e[g] = "\n", f[g << 1] = d++, f[g++ << 1 | 1] = l;
          }
        }
      } else {
        if (3 === m || 4 === m) {
          m = l.nodeValue, m.length && (m = b ? m.split("\r\n").join("\n").split("\r").join("\n") : m.split("\t").join(" ").split("\r").join(" ").split("\n").join(" "), e[g] = m, f[g << 1] = d, d += m.length, f[g++ << 1 | 1] = l);
        }
      }
    }
    var e = [], d = 0, f = [], g = 0;
    c(a);
    var h = e.join("");
    "\n" === h.charAt(h.length - 1) && (h = h.substr(0, h.length - 1));
    return {aa:h, fa:f};
  }
  function mb(a, b, c) {
    function e(k) {
      var q = k.nodeType;
      if (1 === q && -1 === (" " + k.className + " ").indexOf(" nocode ")) {
        if ("br" === k.nodeName.toLowerCase()) {
          d(k), k.parentNode && k.parentNode.removeChild(k);
        } else {
          for (k = k.firstChild; k; k = k.nextSibling) {
            e(k);
          }
        }
      } else {
        if ((3 === q || 4 === q) && c) {
          var r = k.nodeValue, v = r.indexOf("\r\n"), I = 2;
          -1 === v && (v = r.indexOf("\n"), I = 1);
          -1 === v && (v = r.indexOf("\r"));
          -1 !== v && (q = r.substr(0, v), k.nodeValue = q, (r = r.substr(v + I)) && k.parentNode.insertBefore(f.createTextNode(r), k.nextSibling), d(k), q || k.parentNode.removeChild(k));
        }
      }
    }
    function d(k) {
      function q(v, I) {
        var D = I ? v.cloneNode(!1) : v, E = v.parentNode;
        if (E) {
          E = q(E, 1);
          var ta = v.nextSibling;
          E.appendChild(D);
          for (var ea = ta; ea; ea = ta) {
            ta = ea.nextSibling, E.appendChild(ea);
          }
        }
        return D;
      }
      for (; !k.nextSibling;) {
        if (k = k.parentNode, !k) {
          return;
        }
      }
      k = q(k.nextSibling, 0);
      for (var r; (r = k.parentNode) && 1 === r.nodeType;) {
        k = r;
      }
      h.push(k);
    }
    for (var f = a.ownerDocument, g = f.createElement("li"); a.firstChild;) {
      g.appendChild(a.firstChild);
    }
    for (var h = [g], l = 0; l < h.length; ++l) {
      e(h[l]);
    }
    b === (b | 0) && h[0].setAttribute("value", b);
    var m = f.createElement("ol");
    m.className = "linenums";
    b = Math.max(0, b - 1 | 0) || 0;
    l = 0;
    for (var n = h.length; l < n; ++l) {
      g = h[l], g.className = "L" + (l + b) % 10, g.firstChild || g.appendChild(f.createTextNode("\u00a0")), m.appendChild(g);
    }
    a.appendChild(m);
  }
  function jb() {
    var a = A, b = a.aa, c = b.length, e = 0, d = a.fa, f = d.length, g = 0, h = a.ba, l = h.length, m = 0;
    h[l] = c;
    var n, k;
    for (k = n = 0; k < l;) {
      h[k] !== h[k + 2] ? (h[n++] = h[k++], h[n++] = h[k++]) : k += 2;
    }
    l = n;
    for (k = n = 0; k < l;) {
      var q = h[k], r = h[k + 1];
      for (k += 2; k + 2 <= l && h[k + 1] === r;) {
        k += 2;
      }
      h[n++] = q;
      h[n++] = r;
    }
    h.length = n;
    a = a.ca;
    l = "";
    a && (l = a.style.display, a.style.display = "none");
    for (; g < f;) {
      n = d[g + 2] || c;
      q = h[m + 2] || c;
      k = Math.min(n, q);
      r = d[g + 1];
      var v;
      if (1 !== r.nodeType && (v = b.substring(e, k))) {
        fa && (v = v.split("\n").join("\r"));
        r.nodeValue = v;
        var I = r.ownerDocument, D = I.createElement("span");
        D.className = h[m + 1];
        var E = r.parentNode;
        E.replaceChild(D, r);
        D.appendChild(r);
        e < n && (d[g + 1] = r = I.createTextNode(b.substring(k, n)), E.insertBefore(r, D.nextSibling));
      }
      e = k;
      e >= n && (g += 2);
      e >= q && (m += 2);
    }
    a && (a.style.display = l);
    A = u;
    x(aa, u, 3, !0);
  }
  function nb(a) {
    for (var b = u, c = a.firstChild; c; c = c.nextSibling) {
      var e = c.nodeType;
      b = 1 === e ? b ? a : c : 3 === e ? Ka.test(c.nodeValue) ? a : b : b;
    }
    return b === a ? u : b;
  }
  function aa() {
    function a(l, m) {
      return (l.split(m)[1] || "").split(" ")[0];
    }
    if (!A) {
      ha !== R.length && ua && ua(ha - R.length, ha);
      var b = R.shift();
      if (b) {
        H = M();
        for (var c = {}, e = c, d = b; d = d.previousSibling;) {
          var f = d.nodeType, g = (7 === f || 8 === f) && d.nodeValue;
          if (g ? !ob.test(g) : 3 !== f || Ka.test(d.nodeValue)) {
            break;
          }
          if (g) {
            e = {};
            eb(pb, g, function(l, m, n) {
              e[m] = n;
            });
            break;
          }
        }
        d = b.className;
        if (e !== c || 0 <= (" " + d + " ").indexOf(" prettyprint ") && -1 === (" " + d + " ").indexOf(" prettyprinted ")) {
          c = !1;
          for (f = b.parentNode; f; f = f.parentNode) {
            if ((g = f.tagName) && ("pre" === g.toLowerCase() || "xmp" === g.toLowerCase() || "code" === g.toLowerCase()) && f.className && 0 <= (" " + f.className + " ").indexOf(" prettyprint ")) {
              c = !0;
              break;
            }
          }
          if (!c) {
            b.className += " prettyprinted";
            c = e.lang;
            if (!c) {
              c = a(d, "lang-") || a(d, "language-");
              var h;
              !c && (h = nb(b)) && "code" === h.tagName.toLowerCase() && (c = a(h.className, "lang-") || a(h.className, "language-"));
            }
            "pre" === b.tagName.toLowerCase() || "xmp" === b.tagName.toLowerCase() ? h = 1 : (h = b.currentStyle, f = S.defaultView, h = (h = h ? h.whiteSpace : f && f.getComputedStyle ? f.getComputedStyle(b, null).getPropertyValue("white-space") : 0) && "pre" === h.substr(0, 3));
            f = e.linenums;
            (f = "true" === f || +f) || (f = a(d, "linenums:") || !!(" " + d + " ").match(" linenums "), f = f.length ? +f : f);
            f && mb(b, f, h);
            A = {ma:c, ca:b, ra:f, ha:h, da:0, h:0, ia:{}, ba:[]};
            J.codeBlocks.push({elm:b, lang:c, readyTime:M() - H, decorateTime:0, decorateCount:0, updateDOMTime:0});
            x(gb);
          }
        }
        x(aa, u, 0, !0);
      } else {
        va && va(J);
      }
    }
  }
  var V = String.fromCharCode, ka = Math.floor, t = [];
  t[924] = [181, 956];
  t[452] = [453, 454];
  t[455] = [456, 457];
  t[458] = [459, 460];
  t[497] = [498, 499];
  t[921] = [837, 953, 8126];
  t[914] = [946, 976];
  t[917] = [949, 1013];
  t[920] = [952, 977];
  t[922] = [954, 1008];
  t[928] = [960, 982];
  t[929] = [961, 1009];
  t[931] = [962, 963];
  t[934] = [966, 981];
  t[1042] = [1074, 7296];
  t[1044] = [1076, 7297];
  t[1054] = [1086, 7298];
  t[1057] = [1089, 7299];
  t[1058] = [1090, 7300, 7301];
  t[1066] = [1098, 7302];
  t[1122] = [1123, 7303];
  t[42570] = [7304, 42571];
  t[7776] = [7777, 7835];
  var L = function(a) {
    a.add = Pa;
    a.ja = Qa;
    a.G = Ra;
    a.clone = Sa;
    a.has = Ta;
    return a;
  };
  var Ga = L([48, 58]);
  var bb = Ga.clone().G();
  var oa = L([48, 58, 65, 91, 95, 96, 97, 123]);
  var cb = oa.clone().G();
  var Ha = L([9, 14, 32, 33, 160, 161, 5760, 5761, 8192, 8203, 8239, 8240, 8287, 8288, 12288, 12289, 65279, 65280]);
  var db = Ha.clone().G();
  var F = function(a) {
    switch(a.type) {
      case 1:
        return ja(a.children, F).join("|");
      case 2:
        return ja(a.children, F).join("");
      case 3:
        return "(" + F(a.F) + ")";
      case 5:
        return "(?:" + F(a.F) + ")";
      case 6:
        return F(a.F) + "*" + (a.I ? "?" : "");
      case 7:
        return F(a.F) + "+" + (a.I ? "?" : "");
      case 8:
        return F(a.F) + "?" + (a.I ? "?" : "");
      case 9:
        var b = F(a.F);
        b += "{" + a.min;
        Infinity === a.max ? b += "," : (null !== a.max ? a.max : a.min) != a.min && (b += "," + a.max);
        return b += "}" + (a.I ? "?" : "");
      case 10:
        return a.G ? "\\B" : "\\b";
      case 11:
        return "^";
      case 12:
        return "$";
      case 13:
        return "(?" + (a.ea ? "!" : "=") + F(a.F) + ")";
      case 15:
        return a = U(a.raw), "/" === a ? "\\/" : a;
      case 16:
        return za(a);
      case 17:
        return "[" + (a.G ? "^" : "") + ja(a.children, za).join("") + "]";
      case 19:
        return ".";
      case 20:
        return "\\" + a.index;
    }
  };
  var qb = function(a) {
    var b = "";
    a.global && (b += "g");
    a.ignoreCase && (b += "i");
    a.multiline && (b += "m");
    a.sticky && (b += "y");
    return b;
  };
  var $a = L([48, 58, 65, 91, 95, 96, 97, 123, 170, 171, 181, 182, 183, 184, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 768, 885, 886, 888, 890, 894, 895, 896, 902, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1155, 1160, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1425, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1488, 1515, 1519, 1523, 1552, 1563, 1568, 1642, 1646, 1748, 1749, 1757, 1759, 1769, 1770, 1789, 1791, 1792, 1808, 1867, 1869, 1970, 
  1984, 2038, 2042, 2043, 2045, 2046, 2048, 2094, 2112, 2140, 2144, 2155, 2208, 2229, 2230, 2238, 2259, 2274, 2275, 2404, 2406, 2416, 2417, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2534, 2546, 2556, 2557, 2558, 2559, 2561, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2649, 2653, 2654, 2655, 
  2662, 2678, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2800, 2809, 2816, 2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2908, 2910, 2911, 2916, 2918, 2928, 2929, 2930, 2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 3014, 3017, 
  3018, 3022, 3024, 3025, 3031, 3032, 3046, 3056, 3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3160, 3163, 3168, 3172, 3174, 3184, 3200, 3204, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 3313, 3315, 3328, 3332, 3333, 3341, 3342, 3345, 3346, 3397, 3398, 3401, 3402, 3407, 3412, 3416, 3423, 3428, 3430, 3440, 3450, 3456, 3458, 3460, 3461, 3479, 3482, 3506, 
  3507, 3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3572, 3585, 3643, 3648, 3663, 3664, 3674, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3774, 3776, 3781, 3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808, 3840, 3841, 3864, 3866, 3872, 3882, 3893, 3894, 3895, 3896, 3897, 3898, 3902, 3912, 3913, 3949, 3953, 3973, 3974, 3992, 3993, 4029, 4038, 4039, 4096, 4170, 4176, 4254, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4348, 4681, 
  4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4960, 4969, 4978, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5870, 5881, 5888, 5901, 5902, 5909, 5920, 5941, 5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 6016, 6100, 6103, 6104, 6108, 6110, 6112, 6122, 6155, 6158, 6160, 6170, 6176, 6265, 6272, 6315, 6320, 6390, 6400, 6431, 
  6432, 6444, 6448, 6460, 6470, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6608, 6619, 6656, 6684, 6688, 6751, 6752, 6781, 6783, 6794, 6800, 6810, 6823, 6824, 6832, 6846, 6912, 6988, 6992, 7002, 7019, 7028, 7040, 7156, 7168, 7224, 7232, 7242, 7245, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 7376, 7379, 7380, 7419, 7424, 7674, 7675, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 
  8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8255, 8257, 8276, 8277, 8305, 8306, 8319, 8320, 8336, 8349, 8400, 8413, 8417, 8418, 8421, 8433, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8585, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11647, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 
  11719, 11720, 11727, 11728, 11735, 11736, 11743, 11744, 11776, 12293, 12296, 12321, 12336, 12337, 12342, 12344, 12349, 12353, 12439, 12441, 12448, 12449, 12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42540, 42560, 42608, 42612, 42622, 42623, 42738, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43048, 43072, 43124, 43136, 43206, 43216, 43226, 43232, 43256, 43259, 43260, 43261, 
  43310, 43312, 43348, 43360, 43389, 43392, 43457, 43471, 43482, 43488, 43519, 43520, 43575, 43584, 43598, 43600, 43610, 43616, 43639, 43642, 43715, 43739, 43742, 43744, 43760, 43762, 43767, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44011, 44012, 44014, 44016, 44026, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64297, 64298, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 
  64325, 64326, 64434, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65020, 65024, 65040, 65056, 65072, 65075, 65077, 65101, 65104, 65136, 65141, 65142, 65277, 65296, 65306, 65313, 65339, 65343, 65344, 65345, 65371, 65382, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65856, 65909, 66045, 66046, 66176, 66205, 66208, 66257, 66272, 66273, 66304, 66336, 66349, 66379, 66384, 66427, 66432, 
  66462, 66464, 66500, 66504, 66512, 66513, 66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 68159, 68160, 68192, 68221, 68224, 68253, 68288, 
  68296, 68297, 68327, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68736, 68787, 68800, 68851, 68864, 68904, 68912, 68922, 69376, 69405, 69415, 69416, 69424, 69457, 69600, 69623, 69632, 69703, 69734, 69744, 69759, 69819, 69840, 69865, 69872, 69882, 69888, 69941, 69942, 69952, 69956, 69959, 69968, 70004, 70006, 70007, 70016, 70085, 70089, 70093, 70096, 70107, 70108, 70109, 70144, 70162, 70163, 70200, 70206, 70207, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 
  70313, 70320, 70379, 70384, 70394, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70459, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 70488, 70493, 70500, 70502, 70509, 70512, 70517, 70656, 70731, 70736, 70746, 70750, 70752, 70784, 70854, 70855, 70856, 70864, 70874, 71040, 71094, 71096, 71105, 71128, 71134, 71168, 71233, 71236, 71237, 71248, 71258, 71296, 71353, 71360, 71370, 71424, 71451, 71453, 71468, 71472, 71482, 71680, 71739, 71840, 
  71914, 71935, 71936, 72096, 72104, 72106, 72152, 72154, 72162, 72163, 72165, 72192, 72255, 72263, 72264, 72272, 72346, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72769, 72784, 72794, 72818, 72848, 72850, 72872, 72873, 72887, 72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 73050, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 73107, 73113, 73120, 73130, 73440, 73463, 73728, 74650, 74752, 74863, 74880, 75076, 77824, 78895, 82944, 
  83527, 92160, 92729, 92736, 92767, 92768, 92778, 92880, 92910, 92912, 92917, 92928, 92983, 92992, 92996, 93008, 93018, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 113821, 113823, 119141, 119146, 119149, 119155, 119163, 119171, 119173, 119180, 119210, 119214, 119362, 119365, 
  119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 120782, 120832, 121344, 
  121399, 121403, 121453, 121461, 121462, 121476, 121477, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123184, 123198, 123200, 123210, 123214, 123215, 123584, 123642, 124928, 125125, 125136, 125143, 125184, 125260, 125264, 125274, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 
  126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102, 917760, 918E3]);
  var La = function(a, b, c) {
    this.K = this.h = this.U = 0;
    this.source = a;
    this.flags = b || "";
    this.D = !1 !== c;
  };
  La.prototype.parse = function() {
    var a = this.flags;
    var b = {global:!1, ignoreCase:!1, multiline:!1, sticky:!1};
    for (var c = a.length; c;) {
      switch(a.charAt(--c)) {
        case "g":
          b.global = !0;
          break;
        case "i":
          b.ignoreCase = !0;
          break;
        case "m":
          b.multiline = !0;
          break;
        case "y":
          b.sticky = !0;
      }
    }
    this.H = b;
    for (a = this.source.length; this.h < a;) {
      switch(b = p(this), b) {
        case "(":
          B(this.source, "(?", this.h) || ++this.U;
          ++this.h;
          break;
        case "\\":
          ++this.h;
          this.h += p(this).length;
          break;
        case "[":
          a: {
            for (++this.h; this.h < this.source.length;) {
              switch(b = p(this), b) {
                case "]":
                  ++this.h;
                  break a;
                case "\\":
                  ++this.h;
                  this.h += p(this).length;
                  break;
                default:
                  this.h += b.length;
              }
            }
          }
          break;
        default:
          this.h += b.length;
      }
    }
    this.h = 0;
    a = O(this);
    return {type:0, H:this.H, U:this.U, F:a, B:[0, this.h]};
  };
  var wa = function(a, b) {
    this.input = a;
    this.ga = b;
    this.index = b[0];
    this.D = b[1];
    this.length = b.length / 2;
  };
  wa.prototype.get = function(a) {
    var b = this.ga[2 * a];
    a = this.ga[2 * a + 1];
    a = [b !== u ? b : -1, a !== u ? a : -1];
    b = a[0];
    a = a[1];
    return 0 > b || 0 > a ? u : this.input.slice(b, a);
  };
  wa.prototype.K = function() {
    var a = this.length, b = [];
    b.index = this.index;
    b.input = this.input;
    for (var c = 0; c < a; ++c) {
      b[c] = this.get(c);
    }
    return b;
  };
  var K = function(a) {
    var b = V(a).toUpperCase();
    if (2 <= b.length) {
      return a;
    }
    b = b.charCodeAt(0);
    return 128 <= a && 128 > b ? a : b;
  };
  var rb = function(a) {
    var b = t[a];
    return b ? b : [V(a).toLowerCase().charCodeAt(0)];
  };
  var Ma = function(a) {
    this.D = !1;
    this.direction = this.K = 1;
    this.pattern = a;
    this.ignoreCase = a.H.ignoreCase;
    this.U = a.U;
  };
  Ma.prototype.compile = function() {
    var a = C(this, this.pattern.F);
    a = w([], {A:2, index:0}, a, {A:3, index:0}, {A:17});
    return new Na(this.pattern, a);
  };
  qa.prototype.clone = function() {
    return new qa(this.h, this.J, N(this.stack), this.T, N(this.O));
  };
  var Na = function(a, b) {
    this.ka = b;
    for (var c = -1, e, d = 0, f = 0; e = b[++c];) {
      switch(e.A) {
        case 19:
        case 20:
        case 21:
          ++d;
          break;
        case 9:
        case 18:
        case 24:
        case 25:
          --d;
      }
      f = Math.max(d, f);
    }
    this.na = f;
    this.ignoreCase = a.H.ignoreCase;
    this.multiline = a.H.multiline;
    this.sticky = a.H.sticky;
    this.U = a.U;
  };
  Na.prototype.exec = function(a, b) {
    for (; b <= a.length;) {
      for (var c = b, e = this.na, d = [], f = 2 * (this.U + 1), g = 0; g < f; ++g) {
        d.push(-1);
      }
      f = [];
      for (g = 0; g < e; ++g) {
        f.push(0);
      }
      for (c = [new qa(c, 0, f, 0, d)]; 0 < c.length;) {
        d = c[c.length - 1];
        g = this.ka[d.J];
        e = !1;
        ++d.J;
        var h;
        switch(g.A) {
          case 0:
            f = z(a, d.h);
            0 <= f && !pa(f) ? d.h += G(f) : e = !0;
            break;
          case 1:
            f = z(a, d.h - 1);
            0 <= f ? d.h -= G(f) : e = !0;
            break;
          case 2:
            d.O[2 * g.index] = d.h;
            break;
          case 3:
            d.O[2 * g.index + 1] = d.h;
            break;
          case 4:
            for (var l = g.from; l < g.pa; ++l) {
              d.O[2 * l] = d.O[2 * l + 1] = -1;
            }
            break;
          case 5:
            f = z(a, d.h);
            0 > f && (e = !0);
            var m = this.ignoreCase ? K(f) : f;
            m === g.value ? d.h += G(f) : e = !0;
            break;
          case 6:
          case 7:
            f = z(a, d.h);
            if (0 > f) {
              e = !0;
              break;
            }
            m = this.ignoreCase ? K(f) : f;
            l = g.set.has(m);
            var n = 6 === g.A;
            if (this.ignoreCase) {
              m = rb(m);
              var k = m.length;
              for (h = 0; h < k; ++h) {
                l = l || g.set.has(m[h]);
              }
            }
            l === n ? d.h += G(f) : e = !0;
            break;
          case 8:
            --d.stack[d.T - 1];
            break;
          case 9:
            d.stack[--d.T] === d.h && (e = !0);
            break;
          case 10:
            e = !0;
            break;
          case 11:
          case 12:
            f = d.clone();
            c.push(f);
            11 === g.A ? d.J += g.next : f.J += g.next;
            break;
          case 13:
            d.J += g.V;
            break;
          case 14:
            f = z(a, d.h - 1);
            0 === d.h || this.multiline && pa(f) || (e = !0);
            break;
          case 15:
            f = z(a, d.h);
            d.h === a.length || this.multiline && pa(f) || (e = !0);
            break;
          case 16:
            0 < d.stack[d.T - 1] && (d.J += g.V);
            break;
          case 17:
            return new wa(a, d.O);
          case 18:
            --d.T;
            break;
          case 19:
            d.stack[d.T++] = g.value;
            break;
          case 20:
            d.stack[d.T++] = d.h;
            break;
          case 21:
            d.stack[d.T++] = c.length;
            break;
          case 22:
            f = d.O[2 * g.index];
            g = d.O[2 * g.index + 1];
            n = 0 > f || 0 > g ? "" : a.slice(f, g);
            for (l = 0; l < n.length;) {
              f = z(a, d.h);
              h = z(n, l);
              m = this.ignoreCase ? K(f) : f;
              g = this.ignoreCase ? K(h) : h;
              if (m !== g) {
                e = !0;
                break;
              }
              d.h += G(f);
              l += G(h);
            }
            break;
          case 23:
            f = d.O[2 * g.index];
            g = d.O[2 * g.index + 1];
            n = 0 > f || 0 > g ? "" : a.slice(f, g);
            for (l = n.length; 0 < l;) {
              f = z(a, d.h - 1);
              h = z(n, l - 1);
              m = this.ignoreCase ? K(f) : f;
              g = this.ignoreCase ? K(h) : h;
              if (m !== g) {
                e = !0;
                break;
              }
              d.h -= G(f);
              l -= G(h);
            }
            break;
          case 24:
            d.h = d.stack[--d.T];
            break;
          case 25:
            c.length = d.stack[--d.T];
            c[c.length - 1] = d;
            break;
          case 26:
          case 27:
            f = z(a, d.h - 1), h = z(a, d.h), d = oa, l = d.has(f) !== d.has(h), n = 26 === g.A, l !== n && (e = !0);
        }
        e && c.pop();
      }
      if (this.sticky) {
        break;
      }
      b += G(z(a, b));
    }
    return null;
  };
  var y = function(a, b) {
    var c = (new La(a, b, !0)).parse();
    this.D = (new Ma(c)).compile();
    var e = F(c.F);
    this.source = "" === e ? "(?:)" : e;
    this.flags = qb(c.H);
    this.global = c.H.global;
    this.ignoreCase = c.H.ignoreCase;
    this.multiline = c.H.multiline;
    this.sticky = c.H.sticky;
  };
  y.prototype.toString = function() {
    return "/" + this.source + "/" + this.flags;
  };
  y.prototype.exec = function(a) {
    var b = this.global || this.sticky, c = 0;
    b && (c = this.lastIndex);
    a = this.D.exec(a, c);
    b && (this.lastIndex = a ? a.D : 0);
    return a ? a.K() : null;
  };
  y.prototype.test = function(a) {
    return !!this.exec(a);
  };
  y.prototype.match = function(a) {
    if (this.global) {
      this.lastIndex = 0;
      var b = [];
      for (var c; c = this.exec(a);) {
        b.push(c[0]), "" === c[0] && (this.lastIndex += 1);
      }
      b = 0 === b.length ? null : b;
    } else {
      b = this.exec(a);
    }
    return b;
  };
  y.prototype.replace = function(a, b) {
    var c = "function" === typeof b, e = [];
    this.global && (this.lastIndex = 0);
    for (var d; d = this.exec(a);) {
      e.push(d);
      if (!this.global) {
        break;
      }
      "" === d[0] && (this.lastIndex += 1);
    }
    for (var f = 0, g = [], h = -1, l = e.length, m = 0; m < l; ++m) {
      if (d = e[m], g[++h] = a.slice(f, d.index), f = d.index + d[0].length, c) {
        var n = N(d);
        n.push(d.index, a);
        g[++h] = "" + b.apply(null, n);
      } else {
        for (var k = 0;;) {
          n = b.indexOf("$", k);
          if (-1 === n) {
            g[++h] = b;
            break;
          }
          g[++h] = b.slice(k, n);
          var q = b.charAt(n + 1);
          switch(q) {
            case "$":
              k = n + 2;
              g[++h] = "$";
              break;
            case "&":
              k = n + 2;
              g[++h] = d[0];
              break;
            case "`":
              k = n + 2;
              g[++h] = a.slice(0, d.index);
              break;
            case "'":
              k = n + 2;
              g[++h] = a.slice(f);
              break;
            case "<":
              break;
            default:
              if ("0" <= q && "9" >= q) {
                k = b.charAt(n + 2);
                q = "0" <= k && "9" >= k ? q + k : q;
                k = q - 0;
                if (0 < k && k < d.length) {
                  g[++h] = d[k] || "";
                  k = n + 1 + q.length;
                  break;
                }
                k = ka(k / 10);
                if (0 < k && k < d.length) {
                  g[++h] = d[k] || "";
                  k = n + q.length;
                  break;
                }
              }
              g[++h] = "$";
              k = n + 1;
          }
        }
      }
    }
    g[++h] = a.slice(f);
    return g = g.join("");
  };
  y.prototype.search = function(a) {
    var b = this.lastIndex;
    this.lastIndex = 0;
    a = this.exec(a);
    this.lastIndex = b;
    return a ? a.index : -1;
  };
  y.prototype.split = function(a, b) {
    var c = new y(this.source, this.sticky ? this.flags : this.flags + "y");
    b = (b !== u ? b : 4294967295) >>> 0;
    var e = [], d;
    if (0 === b) {
      return e;
    }
    if ("" === a) {
      (d = c.exec(a)) || e.push(a);
    } else {
      for (var f = a.length, g = 0, h = g; h < f;) {
        if (c.lastIndex = h, d = c.exec(a)) {
          var l = Math.min(c.lastIndex, f);
          if (l === g) {
            h += 1;
          } else {
            g = a.slice(g, h);
            e.push(g);
            if (b === e.length) {
              return e;
            }
            g = l;
            l = 1;
            for (h = d.length; l < h; ++l) {
              if (e.push(d[l]), b === e.length) {
                return e;
              }
            }
            h = g;
          }
        } else {
          h += 1;
        }
      }
      g = a.slice(g);
      e.push(g);
    }
    return e;
  };
  var M = Date.now ? Date.now : function() {
    return +new Date();
  }, J = {useRegExpCompat:!0, initRegExpTime:0, initRegExpCount:0, codeBlocks:[]};
  var H = M();
  var A, va, ua, Z = 0, ib = new y("^\\s*<", void 0), da = [], fa = (new y("\\bMSIE\\s(\\d+)", void 0)).exec(navigator.userAgent);
  fa = fa && 8 >= +fa[1];
  var Ka = new y("\\S", void 0), ob = new y("^\\??prettify\\b", void 0), pb = new y("\\b(\\w+)=([\\w:.%+-]+)", "g"), R = [], ha;
  J.readyTime = M() - H;
  ia.PR = {prettyPrint:function() {
    var a = S.body;
    a = [a.getElementsByTagName("pre"), a.getElementsByTagName("code"), a.getElementsByTagName("xmp")];
    for (var b = 0; b < a.length; ++b) {
      for (var c = 0, e = a[b].length; c < e; ++c) {
        R.push(a[b][c]);
      }
    }
    ha = R.length;
    xa(aa);
  }, registerCompleteHandler:function(a, b) {
    va = a;
    ua = b;
  }};
  var Q = {m:[0, 4, [4, 5, 6, 7, 8, 9, 10, 11, 0, 12, 13]], c:"m", n:[1, 17, [16, 17, 18, 5, 6, 19, 20, 9, 21, 22, 0, 23]], S:[2, 29, [27, 28, 29, 30, 31, 32, 33, 34]], R:"S", s:"S", r:"S", cc:"m", cs:[0, 38, [16, 4, 5, 6, 7, 35, 9, 10, 11, 0, 12, 13]], sh:[3, 42, [38, 9, 10, 11, 0, 12, 13]], py:[4, 45, [40, 9, 10, 11, 0, 12, 13]], cv:"py", pm:[3, 47, [41, 42, 9, 10, 11, 0, 12, 43]], pl:"pm", rb:[3, 51, [44, 45, 9, 10, 11, 0, 12, 43]], ts:[5, 54, [5, 6, 44, 46, 9, 10, 11, 0, 12, 43]], js:"ts", ex:[6, 
  60, [51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65]], go:[7, 77, [67, 68]], hs:[8, 84, [73, 74, 75, 76]], ls:[9, 94, [82, 83, 84, 85, 86, 87, 88, 89, 90, 91]], ss:[10, 108, [95, 96, 97, 98, 99]], el:"ss", cl:"ss", ll:[11, 115, [101, 102, 103, 104, 105]], ml:[12, 123, [108, 109, 110, 111, 112]], fs:"ml", rd:[13, 130, [114, 115, 116, 117, 118]], Rd:"rd", vb:[14, 139, [122, 123, 124, 125, 126, 127]], xq:[15, 148, [130, 131, 132, 133, 134, 129, 135, 136, 137, 138, 24]], xsl:[16, 158, [139, 
  140, 141, 142, 143, 144, 145, 146, 147, 148]], xml:"xsl", htm:"xsl", cyc:"m", cxx:"m", cpp:"m", csh:"sh", bsh:"sh", aea:[17, 169, [149, 150, 97, 151, 99]], agc:"aea", cbm:[18, 175, [154, 155, 156, 152, 157]], clj:[19, 182, [160, 161]], css:[20, 186, [163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173]], erl:[21, 200, [176, 177, 178, 179, 180]], exs:"ex", rkt:"ss", scm:"ss", lsp:"ss", lgt:[22, 207, [113, 182, 183, 184, 179, 185]], lua:[23, 213, [187, 188, 189, 190, 191, 192]], sql:[24, 221, [194, 
  195, 190, 196, 197]], tcl:[25, 228, [200, 96, 97, 98, 99]], tex:[13, 230, [115, 201, 202, 203, 204]], vbs:"vb", vhd:[26, 235, [205, 206, 207, 208, 209, 210, 211, 212]], yml:[27, 250, [219, 220, 221, 222]], mxml:"xsl", html:"xsl", json:[5, 255, [223, 9, 10, 11, 0, 12, 13]], java:[5, 257, [5, 6, 224, 9, 10, 11, 0, 12, 13]], bash:"sh", perl:"pm", ruby:"rb", dart:[26, 259, [225, 226, 227, 168, 228, 229, 230, 231, 232, 233, 234, 235, 236, 60, 237, 238, 239, 240, 241, 242]], lisp:"ss", llvm:"ll", rust:[16, 
  278, [24, 243, 6, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 191, 264, 265, 266]], vhdl:"vhd", wiki:[28, 305, [269, 270, 271, 272, 273, 274]], yaml:"yml", xhtml:"xsl", regex:[16, 312, [275]], basic:"cbm", lasso:"ls", mumps:[29, 315, [94, 277, 278, 279, 280, 281]], proto:[5, 321, [5, 6, 282, 283, 9, 10, 11, 0, 12, 13]], Splus:"S", scala:[30, 327, [287, 288, 289, 290, 291, 292, 293, 294, 295]], swift:[31, 339, [298, 299, 300, 301, 302, 6, 303, 
  304]], latex:"tex", "in.tag":[32, 349, [307, 308, 309, 310, 311, 312, 313, 314, 315, 316]], "uq.val":[16, 312, [317]], python:"py", coffee:[33, 361, [4, 5, 6, 44, 319, 9, 10, 11, 0, 12, 43]], apollo:"aea", "css-kw":[16, 363, [320]], erlang:"erl", kotlin:[34, 365, [322, 323, 324, 325, 243, 6, 326, 327, 328, 329, 330]], matlab:[35, 377, [333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343]], pascal:[36, 391, [346, 347, 348, 349, 344, 350]], xquery:"xq", "css-str":[16, 397, [351]], logtalk:"lgt", 
  nemerle:"n", "wiki.meta":[37, 400, []], typescript:"ts", javascript:"ts", lassoscript:"ls", "default-code":[38, 401, [4, 5, 6, 44, 353, 9, 10, 11, 0, 12, 43]], "default-markup":"xsl", "matlab-operators":[16, 403, [354, 342, 343, 355]], "matlab-identifiers":[16, 406, [356, 357, 358, 359, 360, 361, 362, 363]]};
  var lb = [{"'":1, '"':1, "#":2, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {'"':14, "#":15, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':25, "'":26}, {"`":36, '"':36, "'":36, "#":37, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {'"':39, "'":39, "#":37, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {"'":1, '"':1, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, 
  "#":27, "'":48, "@":49, "}":50, "|":50, "{":50, "^":50, "]":50, "\\":50, "[":50, "?":50, ">":50, "=":50, "<":50, ";":50, "-":50, ",":50, "+":50, "*":50, ")":50, "(":50, "&":50, "%":50, "!":50, "-num":47}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "'":66, '"':66}, {" ":70, "\r":70, "\f":70, "\x0B":70, "\n":70, "\t":70, '"':71, "'":72, "-num":69}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "'":78, '"':79, "`":80, $:81, "#":81, "-num":77}, {"(":92, ")":93, ";":94, "\u00a0":24, " ":24, 
  "\r":24, "\n":24, "\t":24, '"':25}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':100, ";":94}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "#":106, "'":107, '"':107}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "%":113}, {"\u2029":119, "\u2028":119, "\u00a0":119, " ":119, "\r":119, "\n":119, "\t":119, "\u201d":120, "\u201c":120, '"':120, "\u2019":121, "\u2018":121, "'":121}, {$:128, "'":129, '"':129}, {}, {"#":37, "\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':25}, {'"':153, 
  "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":152}, {"{":158, "[":158, "(":158, "}":159, "]":159, ")":159, ";":94, "\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':25}, {"\f":162, "\n":162, "\r":162, "\t":162, " ":162}, {" ":70, "\r":70, "\f":70, "\x0B":70, "\n":70, "\t":70, '"':71, "'":174, "?":175, "-num":69}, {'"':71, "'":174, "%":113, "-num":181}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "'":186, '"':186}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, "'":193, '"':193}, {"{":198, 
  "}":199, "#":37, "\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':25}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24}, {"?":213, ">":213, "|":213, ":":213, "%":214, "&":215, "!":216, '"':217, "'":218, "#":37, "\n":3, "\r":3, "\t":3, " ":3}, {z:267, y:267, x:267, w:267, v:267, u:267, t:267, s:267, r:267, q:267, p:267, o:267, n:267, m:267, l:267, k:267, j:267, i:267, g:267, f:267, e:267, d:267, c:267, b:267, a:267, "\u00a0":267, " ":267, "\t":267, "]":268, "[":268, "^":268, "~":268, "*":268, 
  "=":268, "-num":267}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':276, ";":94}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, '"':284, "`":285, "~":286, "}":286, "|":286, "{":286, "^":286, "]":286, "\\":286, "[":286, "@":286, "?":286, ">":286, "=":286, "<":286, ";":286, ":":286, "-":286, ",":286, "+":286, "*":286, ")":286, "(":286, "&":286, "%":286, "#":286, "!":286}, {"\x00":296, "\f":296, "\x0B":296, "\t":296, "\r":296, "\n":296, " ":296, '"':297}, {"\n":305, "\r":305, "\t":305, " ":305, 
  "'":306, '"':306}, {'"':39, "'":39, "#":318, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}, {"\u00a0":24, " ":24, "\r":24, "\n":24, "\t":24, ":":321, "}":321, "|":321, "{":321, "^":321, "]":321, "\\":321, "[":321, "?":321, ">":321, "=":321, "<":321, ";":321, "-":321, ",":321, "+":321, "*":321, ")":321, "(":321, "&":321, "%":321, "!":321, ".":321}, {"\u00a0":331, "\f":331, "\x0B":331, "\n":331, "\r":331, "\t":331, " ":331, "%":113, "!":332}, {"'":345, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, 
  "-num":344}, {"#":352}, {"`":36, '"':36, "'":36, "#":2, "\u00a0":3, "\t":3, "\n":3, "\r":3, " ":3, "-num":0}];
  var kb = [["lit", 0], ["str", 1], ["com", 2], ["pln", 3], ["str", 5], ["com", 6], ["com", 7], ["typ", 8], ["kwd", 9], ["lit", 10], ["typ", 11], ["pln", 12], ["pln", 13], ["pun", 14], ["str", 15], ["com", 16], ["str", 18], ["str", 19], ["str", 20], ["kwd", 21], ["typ", 22], ["typ", 23], ["pln", 24], ["pun", 25], ["pln", 26], ["str", 27], ["str", 28], ["com", 30], ["kwd", 31], ["lit", 32], ["lit", 33], ["lit", 34], ["pun", 35], ["pln", 36], ["str", 37], ["kwd", 39], ["str", 40], ["com", 41], ["kwd", 
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
  var ca = [["^(?:0x[a-f0-9]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:e[+\\-]?\\d+)?)[a-z]*", "i"], "^(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$))", "^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\\b|[^\\r\\n]*)", "^\\s+", ["(?:(?:\\'(?:[^\\\\\\'\\r\\n]|\\\\.)*(?:\\'|$)|\\\"(?:[^\\\\\\\"\\r\\n]|\\\\.)*(?:\\\"|$)))|(?:#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\\b|[^\\r\\n]*))|(?:\\s+)|(?:<(?:(?:(?:\\.\\.\\/)*|\\/?)(?:[\\w-]+(?:\\/[\\w-]+)+)?[\\w-]+\\.h(?:h|pp|\\+\\+)?|[a-z]\\w*)>)|(?:\\/\\/[^\\r\\n]*)|(?:\\/\\*[\\s\\S]*?(?:\\*\\/|$))|(?:(?:DIR|FILE|array|vector|(?:de|priority_)?queue|(?:forward_)?list|stack|(?:const_)?(?:reverse_)?iterator|(?:unordered_)?(?:multi)?(?:set|map)|bitset|u?(?:int|float)\\d*)\\b)|(?:(?:break|continue|do|else|for|if|return|while|auto|case|char|const|default|double|enum|extern|float|goto|inline|int|long|register|restrict|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|catch|class|delete|false|import|new|operator|private|protected|public|this|throw|true|try|typeof|alignas|alignof|align_union|asm|axiom|bool|concept|concept_map|const_cast|constexpr|decltype|delegate|dynamic_cast|explicit|export|friend|generic|late_check|mutable|namespace|noexcept|noreturn|nullptr|property|reinterpret_cast|static_assert|static_cast|template|typeid|typename|using|virtual|where)\\b)|(?:@[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:[@_]?[A-Z]+[a-z][A-Za-z_$@0-9]*|\\w+_t\\b))|(?:[$A-Z_a-z][$0-9@-Z_a-z]*)|(?:(?:0[Xx][0-9A-Fa-f]+|(?:\\d(?:_\\d+)*\\d*(?:\\.\\d*)?|\\.\\d\\+)(?:[Ee][+\\-]?\\d+)?)[A-Za-z]*)|(?:\\\\[\\s\\S]?)|(?:.[^\\s\\w.$@'\"`/\\\\]*)|(?:[\x00-\uffff])", 
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
})(this, document, parseFloat, Function, isFinite, setTimeout, clearTimeout, void 0);

