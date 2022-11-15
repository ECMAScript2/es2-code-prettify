(function(ka, V, r, la, L, C) {
  function M(a) {
    return 2147483647 >= a ? a | 0 : la.floor(a);
  }
  function F(a, b) {
    var c = a.length;
    if (0 > b || b >= c) {
      return C;
    }
    var d = a.charCodeAt(b);
    return 55296 <= d && 56319 >= d && c > b + 1 && (c = a.charCodeAt(b + 1), 56320 <= c && 57343 >= c) ? 1024 * (d - 55296) + c - 56320 + 65536 : d;
  }
  function u(a, b, c) {
    return a.substr(c, b.length) === b;
  }
  function N(a, b) {
    for (var c = a.length, d = []; c;) {
      d[--c] = b(a[c], c);
    }
    return d;
  }
  function ma(a, b) {
    for (var c = (a.length >>> 0) - 1, d = a[c--]; 0 <= c; --c) {
      d = b(d, a[c]);
    }
    return d;
  }
  function na(a, b) {
    var c = this.data, d = b || a + 1;
    var e = a;
    for (var f = -1, g = c.length / 2; 1 < g - f;) {
      var h = f + M((g - f) / 2);
      e <= c[2 * h + 1] ? g = h : f = h;
    }
    e = g;
    f = W(c, d);
    f = c.splice(2 * e, 2 * (f - e + 1));
    0 < f.length && (g = f[0], a = a < g ? a : g, f = f[f.length - 1], d = d < f ? f : d);
    c.splice(2 * e, 0, a, d);
  }
  function oa(a) {
    a = a.data;
    for (var b, c, d = -1, e = a.length - 1; d < e;) {
      b = a[++d], c = a[++d], this.add(b, c);
    }
  }
  function pa() {
    var a = this.data;
    if (0 === a.length) {
      return a.push(0, 1114112), this;
    }
    if (0 === a[0] && 1114112 === a[a.length - 1]) {
      return a.shift(), a.pop(), this;
    }
    a.unshift(0);
    a.push(1114112);
    return this;
  }
  function qa() {
    return A(this.data.concat());
  }
  function ra(a) {
    var b = this.data, c = W(b, a);
    if (0 > c || b.length <= 2 * c) {
      return !1;
    }
    var d = b[2 * c + 1];
    return b[2 * c] <= a && a < d;
  }
  function W(a, b) {
    for (var c = -1, d = a.length / 2; 1 < d - c;) {
      var e = c + M((d - c) / 2);
      a[2 * e] <= b ? c = e : d = e;
    }
    return c;
  }
  function G(a) {
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
  function X(a) {
    switch(a.type) {
      case 15:
        return G(a.raw);
      case 18:
        return G(a.children[0].raw) + "-" + G(a.children[1].raw);
      case 16:
        switch(a.kind) {
          case 1:
            return a.m ? "\\D" : "\\d";
          case 2:
            return a.m ? "\\W" : "\\w";
          case 3:
            return a.m ? "\\S" : "\\s";
        }
    }
  }
  function sa(a) {
    return "|" === a || ")" === a || "" === a;
  }
  function O(a) {
    return "0" <= a && "9" >= a;
  }
  function D(a) {
    for (var b = a.g, c = [Y(a)]; "|" === m(a);) {
      ++a.g, c.push(Y(a));
    }
    return 1 === c.length ? c[0] : {type:1, children:c, i:[b, a.g]};
  }
  function Y(a) {
    for (var b = a.g, c = []; !sa(m(a));) {
      c.push(ta(a));
    }
    return 1 === c.length ? c[0] : {type:2, children:c, i:[b, a.g]};
  }
  function ta(a) {
    var b = a.g, c = ua(a);
    if (10 <= c.type && 13 >= c.type && (!a.j || 13 !== c.type)) {
      return c;
    }
    switch(m(a)) {
      case "*":
        return P(a, 6, b, c);
      case "+":
        return P(a, 7, b, c);
      case "?":
        return P(a, 8, b, c);
      case "{":
        var d = a.g;
        do {
          var e = a.g;
          ++a.g;
          var f = Q(a);
          if (0 > f) {
            a.g = e;
          } else {
            var g = null;
            if ("," === m(a)) {
              if (++a.g, "}" === m(a)) {
                g = L;
              } else {
                if (g = Q(a), 0 > g) {
                  a.g = e;
                  e = void 0;
                  break;
                }
              }
            }
            if ("}" !== m(a)) {
              a.g = e;
            } else {
              ++a.g;
              e = {min:f, max:g};
              break;
            }
          }
          e = void 0;
        } while (!1);
        !e && a.j ? (a.g = d, a = c) : (d = e.min, e = e.max, f = !1, "?" === m(a) && (++a.g, f = !0), a = {type:9, min:d, max:e, s:f, l:c, i:[b, a.g]});
        return a;
    }
    return c;
  }
  function P(a, b, c, d) {
    ++a.g;
    var e = !1;
    "?" === m(a) && (++a.g, e = !0);
    return {type:b, s:e, l:d, i:[c, a.g]};
  }
  function ua(a) {
    var b = a.g, c = m(a);
    switch(c) {
      case ".":
        return ++a.g, {type:19, i:[b, a.g]};
      case "^":
        return ++a.g, {type:11, i:[b, a.g]};
      case "$":
        return ++a.g, {type:12, i:[b, a.g]};
      case "[":
        b = a.g;
        ++a.g;
        c = !1;
        "^" === m(a) && (++a.g, c = !0);
        for (var d = []; "]" !== m(a);) {
          d.push(va(a));
        }
        ++a.g;
        return {type:17, m:c, children:d, i:[b, a.g]};
      case "\\":
        return wa(a);
      case "(":
        return xa(a);
    }
    a.g += c.length;
    return {type:15, value:F(c, 0), raw:c, i:[b, a.g]};
  }
  function va(a) {
    var b = a.g, c = Z(a);
    if ("-" !== m(a) || u(a.source, "-]", a.g)) {
      return c;
    }
    if (16 === c.type && a.j) {
      return c;
    }
    var d = a.g;
    ++a.g;
    var e = Z(a);
    return 16 === e.type && a.j ? (a.g = d, c) : {type:18, children:[c, e], i:[b, a.g]};
  }
  function Z(a) {
    var b = a.g, c = m(a);
    if ("\\" !== c) {
      return a.g += c.length, {type:15, value:F(c, 0), raw:c, i:[b, a.g]};
    }
    if (u(a.source, "\\-", a.g)) {
      return a.g += 2, {type:15, value:45, raw:"\\-", i:[b, a.g]};
    }
    if (u(a.source, "\\b", a.g)) {
      return a.g += 2, {type:15, value:8, raw:"\\b", i:[b, a.g]};
    }
    if (b = aa(a)) {
      return b;
    }
    if (a = ba(a)) {
      return a;
    }
  }
  function wa(a) {
    var b = a.g;
    u(a.source, "\\b", a.g) ? (a.g += 2, b = {type:10, m:!1, i:[b, a.g]}) : u(a.source, "\\B", a.g) ? (a.g += 2, b = {type:10, m:!0, i:[b, a.g]}) : b = void 0;
    if (b) {
      return b;
    }
    do {
      b = a.g;
      ++a.g;
      if ("0" !== m(a)) {
        var c = Q(a);
        if (1 <= c && (!a.j || c <= a.B)) {
          b = {type:20, index:c, i:[b, a.g]};
          break;
        }
      }
      a.g = b;
      b = void 0;
    } while (!1);
    if (b) {
      return b;
    }
    if (b = aa(a)) {
      return b;
    }
    if (a = ba(a)) {
      return a;
    }
  }
  function ba(a) {
    var b = a.g;
    var c = a.g;
    ++a.g;
    if ("u" !== m(a)) {
      a.g = c, c = "";
    } else {
      ++a.g;
      var d = ca(a, 4);
      0 > d && a.j ? (a.g = c, c = "") : c = H(d);
    }
    if ("" !== c) {
      return c = F(c, 0), {type:15, value:c, raw:a.source.slice(b, a.g), i:[b, a.g]};
    }
    ++a.g;
    switch(m(a)) {
      case "t":
        return ++a.g, {type:15, value:9, raw:"\\t", i:[b, a.g]};
      case "n":
        return ++a.g, {type:15, value:10, raw:"\\n", i:[b, a.g]};
      case "v":
        return ++a.g, {type:15, value:11, raw:"\\v", i:[b, a.g]};
      case "f":
        return ++a.g, {type:15, value:12, raw:"\\f", i:[b, a.g]};
      case "r":
        return ++a.g, {type:15, value:13, raw:"\\r", i:[b, a.g]};
      case "c":
        ++a.g;
        d = m(a);
        c = 0;
        if ("a" <= d && "z" >= d || "A" <= d && "Z" >= d) {
          ++a.g, c = d.charCodeAt(0) % 32;
        } else {
          if (a.j) {
            --a.g;
            break;
          }
        }
        return {type:15, value:c, raw:a.source.slice(b, a.g), i:[b, a.g]};
      case "x":
        ++a.g;
        c = ca(a, 2);
        if (0 > c) {
          --a.g;
          break;
        }
        return {type:15, value:c, raw:a.source.slice(b, a.g), i:[b, a.g]};
      case "0":
        if (++a.g, O(m(a))) {
          --a.g;
        } else {
          return {type:15, value:0, raw:"\\0", i:[b, a.g]};
        }
    }
    if (a.j && (c = a.g, d = m(a), "0" <= d && "3" >= d ? (++a.g, d = m(a), "0" <= d && "7" >= d && (++a.g, d = m(a), "0" <= d && "7" >= d && ++a.g)) : "4" <= d && "7" >= d && (++a.g, d = m(a), "0" <= d && "7" >= d && ++a.g), c !== a.g)) {
      return c = parseInt(a.source.slice(c, a.g), 8), {type:15, value:c, raw:a.source.slice(b, a.g), i:[b, a.g]};
    }
    d = m(a);
    c = F(d, 0);
    if (a.j) {
      if ("c" === d) {
        return {type:15, value:92, raw:"\\", i:[b, a.g]};
      }
      if ("k" !== d) {
        return a.g += d.length, {type:15, value:c, raw:"\\" + d, i:[b, a.g]};
      }
    } else {
      if (!ya.has(c)) {
        return a.g += d.length, {type:15, value:c, raw:"\\" + d, i:[b, a.g]};
      }
    }
    a.g = b;
  }
  function aa(a) {
    var b = a.g;
    ++a.g;
    var c = m(a);
    switch(c) {
      case "d":
      case "D":
        return ++a.g, {type:16, kind:1, m:"D" === c, i:[b, a.g]};
      case "w":
      case "W":
        return ++a.g, {type:16, kind:2, m:"W" === c, i:[b, a.g]};
      case "s":
      case "S":
        return ++a.g, {type:16, kind:3, m:"S" === c, i:[b, a.g]};
    }
    a.g = b;
  }
  function xa(a) {
    var b = a.g;
    if (!u(a.source, "(?", a.g)) {
      ++a.g;
      var c = ++a.D;
      var d = D(a);
      ++a.g;
      return {type:3, index:c, l:d, i:[b, a.g]};
    }
    if (u(a.source, "(?:", a.g)) {
      return a.g += 3, d = D(a), ++a.g, {type:5, l:d, i:[b, a.g]};
    }
    if (u(a.source, "(?=", a.g)) {
      return a.g += 3, d = D(a), ++a.g, {type:13, G:!1, l:d, i:[b, a.g]};
    }
    if (u(a.source, "(?!", a.g)) {
      return a.g += 3, d = D(a), ++a.g, {type:13, G:!0, l:d, i:[b, a.g]};
    }
  }
  function Q(a) {
    for (var b = "", c; O(c = m(a));) {
      b += c, ++a.g;
    }
    return "" === b ? -1 : +b;
  }
  function ca(a, b) {
    for (var c = a.g, d = ""; 0 < b--;) {
      var e = m(a), f = e;
      if (!(O(f) || "a" <= f && "f" >= f || "A" <= f && "F" >= f)) {
        return a.g = c, -1;
      }
      d += e;
      a.g += e.length;
    }
    return parseInt(d, 16);
  }
  function m(a) {
    a = a.source.charCodeAt(a.g);
    return a !== a ? "" : H(a);
  }
  function v(a, b) {
    switch(b.type) {
      case 1:
        return za(a, b);
      case 2:
        var c = b.children.concat();
        2 === a.direction && c.reverse();
        for (var d = [], e = -1, f, g, h, k = -1, l = !1; f = c[++e];) {
          f = v(a, f);
          if (g = f.length) {
            for (h = 0; h < g; ++h) {
              d[++k] = f[h];
            }
          } else {
            d[++k] = f;
          }
          l = l || a.j;
        }
        a.j = l;
        return d;
      case 3:
        return c = a.D++, d = v(a, b.l), [{h:2 === a.direction ? 3 : 2, index:c}].concat(d, {h:2 === a.direction ? 2 : 3, index:c});
      case 5:
        return v(a, b.l);
      case 6:
        return c = a.D, d = I(a, v(a, b.l)), c = E(a, c, d), a.j = !1, [{h:b.s ? 12 : 11, next:c.length + 1}].concat(c, {h:13, F:-1 - c.length - 1});
      case 7:
        return d = a.D, c = v(a, b.l), d = E(a, d, I(a, c)), c.concat({h:b.s ? 12 : 11, next:d.length + 1}, d, {h:13, F:-1 - d.length - 1});
      case 8:
        return c = v(a, b.l), a.j = !1, [{h:b.s ? 12 : 11, next:c.length}].concat(c);
      case 9:
        return c = a.D, k = b.min, d = v(a, b.l), 1 === k ? e = d : 1 < k ? (l = E(a, c, d), e = [{h:19, value:k}].concat(l, {h:8}, {h:16, F:-1 - l.length - 1}, {h:18})) : (e = [], a.j = !1), l = null != b.max ? b.max : k, l === L ? (l = E(a, c, I(a, d)), e = e.concat({h:b.s ? 12 : 11, next:l.length + 1}, l, {h:13, F:-1 - l.length - 1})) : l > k && (k = l - k, l = E(a, c, I(a, d)), e = 1 === k ? e.concat({h:b.s ? 12 : 11, next:l.length}, l) : e.concat({h:19, value:k + 1}, {h:b.s ? 12 : 11, next:l.length + 
        4}, l, {h:8}, {h:16, F:-1 - l.length - 2}, {h:10}, {h:18})), e;
      case 10:
        return a.j = !1, [{h:b.m ? 27 : 26}];
      case 11:
        return a.j = !1, [{h:14}];
      case 12:
        return a.j = !1, [{h:15}];
      case 13:
        return c = a.direction, a.direction = 1, d = v(a, b.l), a.j = !1, d = b.G ? [{h:20}, {h:21}, {h:11, next:d.length + 2}].concat(d, {h:25}, {h:10}, {h:18}, {h:24}) : [{h:20}, {h:21}].concat(d, {h:25}, {h:24}), a.direction = c, d;
      case 15:
        return c = b.value, a.ignoreCase && (c = z(c)), a.j = !0, J(a, [{h:5, value:c}]);
      case 16:
        return c = da(a, b), a.j = !0, J(a, [{h:6, set:c}]);
      case 17:
        c = A([]);
        d = b.children;
        for (k = -1; e = d[++k];) {
          switch(e.type) {
            case 15:
              c.add(e.value, e.value + 1);
              break;
            case 16:
              c.O(da(a, e));
              break;
            case 18:
              c.add(e.children[0].value, e.children[1].value + 1);
          }
        }
        a.j = !0;
        return J(a, [{h:b.m ? 7 : 6, set:c}]);
      case 19:
        return a.j = !0, J(a, [{h:0}]);
      case 20:
        return a.j = !1, [{h:2 === a.direction ? 23 : 22, index:b.index}];
    }
  }
  function za(a, b) {
    for (var c = b.children, d = c.length, e = [], f = !0, g = 0; g < d; ++g) {
      e.push(v(a, c[g])), f = f && a.j;
    }
    a.j = f;
    return ma(e, function(h, k) {
      return [{h:11, next:k.length + 1}].concat(k, {h:13, F:h.length}, h);
    });
  }
  function I(a, b) {
    return a.j ? b : [{h:20}].concat(b, {h:9});
  }
  function E(a, b, c) {
    return b === a.D ? c : [{h:4, from:b, V:a.D}].concat(c);
  }
  function da(a, b) {
    switch(b.kind) {
      case 1:
        return b.m ? Aa : ea;
      case 2:
        return b.m ? Ba : R;
      case 3:
        return b.m ? Ca : fa;
    }
  }
  function J(a, b) {
    return 1 === a.direction ? b : [{h:1}].concat(b, {h:1});
  }
  function t(a, b) {
    var c = a.charCodeAt(b);
    return c !== c ? -1 : c;
  }
  function x(a) {
    return 65536 <= a ? 2 : 1;
  }
  function S(a) {
    return 10 === a || 13 === a || 8232 === a || 8233 === a;
  }
  function T(a, b, c, d, e) {
    this.g = a;
    this.u = b;
    this.stack = c;
    this.A = d;
    this.v = e;
  }
  function K(a) {
    return a ? V && a.exec === V.prototype.exec ? !0 : a.exec === B.prototype.exec : !1;
  }
  function B(a, b) {
    var c = (new ha(a, b, !0)).parse();
    this.U = (new ia(c)).compile();
    var d = w(c.l);
    this.source = "" === d ? "(?:)" : d;
    this.flags = Da(c.o);
    this.global = c.o.global;
    this.ignoreCase = c.o.ignoreCase;
    this.multiline = c.o.multiline;
    this.sticky = c.o.sticky;
    this.lastIndex = 0;
  }
  function Ea(a, b, c) {
    a = new B(a.source, a.sticky ? a.flags : a.flags + "y");
    c = (c !== C ? c : 4294967295) >>> 0;
    var d = [], e;
    if (0 === c) {
      return d;
    }
    if ("" === b) {
      (e = a.exec(b)) || d.push(b);
    } else {
      for (var f = b.length, g = 0, h = g, k; h < f;) {
        if (a.lastIndex = h, e = a.exec(b)) {
          if (k = a.lastIndex, k = k < f ? k : f, k === g) {
            h += 1;
          } else {
            d.push(b.slice(g, h));
            if (c === d.length) {
              return d;
            }
            g = k;
            h = 1;
            for (k = e.length; h < k; ++h) {
              if (d.push(e[h]), c === d.length) {
                return d;
              }
            }
            h = g;
          }
        } else {
          h += 1;
        }
      }
      d.push(b.slice(g));
    }
    return d;
  }
  var H = r.fromCharCode, p = [];
  p[924] = [181, 956];
  p[452] = [453, 454];
  p[455] = [456, 457];
  p[458] = [459, 460];
  p[497] = [498, 499];
  p[921] = [837, 953, 8126];
  p[914] = [946, 976];
  p[917] = [949, 1013];
  p[920] = [952, 977];
  p[922] = [954, 1008];
  p[928] = [960, 982];
  p[929] = [961, 1009];
  p[931] = [962, 963];
  p[934] = [966, 981];
  p[1042] = [1074, 7296];
  p[1044] = [1076, 7297];
  p[1054] = [1086, 7298];
  p[1057] = [1089, 7299];
  p[1058] = [1090, 7300, 7301];
  p[1066] = [1098, 7302];
  p[1122] = [1123, 7303];
  p[42570] = [7304, 42571];
  p[7776] = [7777, 7835];
  var A = function(a) {
    return {data:a, add:na, O:oa, m:pa, clone:qa, has:ra};
  };
  var ea = A([48, 58]);
  var Aa = ea.clone().m();
  var R = A([48, 58, 65, 91, 95, 96, 97, 123]);
  var Ba = R.clone().m();
  var fa = A([9, 14, 32, 33, 160, 161, 5760, 5761, 8192, 8203, 8239, 8240, 8287, 8288, 12288, 12289, 65279, 65280]);
  var Ca = fa.clone().m();
  var w = function(a) {
    switch(a.type) {
      case 1:
        return N(a.children, w).join("|");
      case 2:
        return N(a.children, w).join("");
      case 3:
        return "(" + w(a.l) + ")";
      case 5:
        return "(?:" + w(a.l) + ")";
      case 6:
        return w(a.l) + "*" + (a.s ? "?" : "");
      case 7:
        return w(a.l) + "+" + (a.s ? "?" : "");
      case 8:
        return w(a.l) + "?" + (a.s ? "?" : "");
      case 9:
        var b = w(a.l);
        b += "{" + a.min;
        a.max === L ? b += "," : (null !== a.max ? a.max : a.min) != a.min && (b += "," + a.max);
        return b += "}" + (a.s ? "?" : "");
      case 10:
        return a.m ? "\\B" : "\\b";
      case 11:
        return "^";
      case 12:
        return "$";
      case 13:
        return "(?" + (a.G ? "!" : "=") + w(a.l) + ")";
      case 15:
        return a = G(a.raw), "/" === a ? "\\/" : a;
      case 16:
        return X(a);
      case 17:
        return "[" + (a.m ? "^" : "") + N(a.children, X).join("") + "]";
      case 19:
        return ".";
      case 20:
        return "\\" + a.index;
    }
  };
  var Da = function(a) {
    var b = "";
    a.global && (b += "g");
    a.ignoreCase && (b += "i");
    a.multiline && (b += "m");
    a.sticky && (b += "y");
    return b;
  };
  var ya = A([48, 58, 65, 91, 95, 96, 97, 123, 170, 171, 181, 182, 183, 184, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 768, 885, 886, 888, 890, 894, 895, 896, 902, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1155, 1160, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1425, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1488, 1515, 1519, 1523, 1552, 1563, 1568, 1642, 1646, 1748, 1749, 1757, 1759, 1769, 1770, 1789, 1791, 1792, 1808, 1867, 1869, 1970, 
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
  var ha = function(a, b, c) {
    this.D = this.g = this.B = 0;
    this.source = a;
    this.flags = b || "";
    this.j = !1 !== c;
  };
  ha.prototype.parse = function() {
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
    this.o = b;
    for (a = this.source.length; this.g < a;) {
      switch(b = m(this), b) {
        case "(":
          u(this.source, "(?", this.g) || ++this.B;
          ++this.g;
          break;
        case "\\":
          ++this.g;
          this.g += m(this).length;
          break;
        case "[":
          (function(a) {
            for (++a.g; a.g < a.source.length;) {
              switch(b = m(a), b) {
                case "]":
                  ++a.g;
                  return;
                case "\\":
                  ++a.g;
                  a.g += m(a).length;
                  break;
                default:
                  a.g += b.length;
              }
            }
          })(this);
          break;
        default:
          this.g += b.length;
      }
    }
    this.g = 0;
    a = D(this);
    return {type:0, o:this.o, B:this.B, l:a, i:[0, this.g]};
  };
  var U = function(a, b) {
    this.input = a;
    this.H = b;
    this.index = b[0];
    this.lastIndex = b[1];
    this.length = b.length / 2;
  };
  U.prototype.get = function(a) {
    var b = this.H[2 * a];
    a = this.H[2 * a + 1];
    a = [b !== C ? b : -1, a !== C ? a : -1];
    b = a[0];
    a = a[1];
    return 0 > b || 0 > a ? C : this.input.slice(b, a);
  };
  U.prototype.j = function() {
    var a = this.length, b = [];
    b.index = this.index;
    b.input = this.input;
    for (var c = 0; c < a; ++c) {
      b[c] = this.get(c);
    }
    return b;
  };
  var z = function(a) {
    var b = H(a).toUpperCase();
    if (2 <= b.length) {
      return a;
    }
    b = b.charCodeAt(0);
    return 128 <= a && 128 > b ? a : b;
  };
  var Fa = function(a) {
    var b = p[a];
    return b ? b : [H(a).toLowerCase().charCodeAt(0)];
  };
  var ia = function(a) {
    this.j = !1;
    this.direction = this.D = 1;
    this.pattern = a;
    this.ignoreCase = a.o.ignoreCase;
    this.B = a.B;
  };
  ia.prototype.compile = function() {
    var a = v(this, this.pattern.l);
    return new ja(this.pattern, [{h:2, index:0}].concat(a, {h:3, index:0}, {h:17}));
  };
  T.prototype.clone = function() {
    return new T(this.g, this.u, this.stack.concat(), this.A, this.v.concat());
  };
  var ja = function(a, b) {
    this.R = b;
    for (var c = -1, d, e = 0, f = 0; d = b[++c];) {
      switch(d.h) {
        case 19:
        case 20:
        case 21:
          ++e;
          break;
        case 9:
        case 18:
        case 24:
        case 25:
          --e;
      }
      f = e < f ? f : e;
    }
    this.T = f;
    this.ignoreCase = a.o.ignoreCase;
    this.multiline = a.o.multiline;
    this.sticky = a.o.sticky;
    this.B = a.B;
  };
  ja.prototype.exec = function(a, b) {
    for (; b <= a.length;) {
      for (var c = b, d = this.T, e = [], f = 2 * (this.B + 1), g = 0; g < f; ++g) {
        e.push(-1);
      }
      f = [];
      for (g = 0; g < d; ++g) {
        f.push(0);
      }
      for (c = [new T(c, 0, f, 0, e)]; 0 < c.length;) {
        e = c[c.length - 1];
        g = this.R[e.u];
        d = !1;
        ++e.u;
        var h;
        switch(g.h) {
          case 0:
            f = t(a, e.g);
            0 <= f && !S(f) ? e.g += x(f) : d = !0;
            break;
          case 1:
            f = t(a, e.g - 1);
            0 <= f ? e.g -= x(f) : d = !0;
            break;
          case 2:
            e.v[2 * g.index] = e.g;
            break;
          case 3:
            e.v[2 * g.index + 1] = e.g;
            break;
          case 4:
            for (var k = g.from; k < g.V; ++k) {
              e.v[2 * k] = e.v[2 * k + 1] = -1;
            }
            break;
          case 5:
            f = t(a, e.g);
            0 > f && (d = !0);
            var l = this.ignoreCase ? z(f) : f;
            l === g.value ? e.g += x(f) : d = !0;
            break;
          case 6:
          case 7:
            f = t(a, e.g);
            if (0 > f) {
              d = !0;
              break;
            }
            l = this.ignoreCase ? z(f) : f;
            k = g.set.has(l);
            var q = 6 === g.h;
            if (this.ignoreCase) {
              l = Fa(l);
              var n = l.length;
              for (h = 0; h < n; ++h) {
                k = k || g.set.has(l[h]);
              }
            }
            k === q ? e.g += x(f) : d = !0;
            break;
          case 8:
            --e.stack[e.A - 1];
            break;
          case 9:
            e.stack[--e.A] === e.g && (d = !0);
            break;
          case 10:
            d = !0;
            break;
          case 11:
          case 12:
            f = e.clone();
            c.push(f);
            11 === g.h ? e.u += g.next : f.u += g.next;
            break;
          case 13:
            e.u += g.F;
            break;
          case 14:
            f = t(a, e.g - 1);
            0 === e.g || this.multiline && S(f) || (d = !0);
            break;
          case 15:
            f = t(a, e.g);
            e.g === a.length || this.multiline && S(f) || (d = !0);
            break;
          case 16:
            0 < e.stack[e.A - 1] && (e.u += g.F);
            break;
          case 17:
            return new U(a, e.v);
          case 18:
            --e.A;
            break;
          case 19:
            e.stack[e.A++] = g.value;
            break;
          case 20:
            e.stack[e.A++] = e.g;
            break;
          case 21:
            e.stack[e.A++] = c.length;
            break;
          case 22:
            f = e.v[2 * g.index];
            g = e.v[2 * g.index + 1];
            q = 0 > f || 0 > g ? "" : a.slice(f, g);
            for (k = 0; k < q.length;) {
              f = t(a, e.g);
              h = t(q, k);
              l = this.ignoreCase ? z(f) : f;
              g = this.ignoreCase ? z(h) : h;
              if (l !== g) {
                d = !0;
                break;
              }
              e.g += x(f);
              k += x(h);
            }
            break;
          case 23:
            f = e.v[2 * g.index];
            g = e.v[2 * g.index + 1];
            q = 0 > f || 0 > g ? "" : a.slice(f, g);
            for (k = q.length; 0 < k;) {
              f = t(a, e.g - 1);
              h = t(q, k - 1);
              l = this.ignoreCase ? z(f) : f;
              g = this.ignoreCase ? z(h) : h;
              if (l !== g) {
                d = !0;
                break;
              }
              e.g -= x(f);
              k -= x(h);
            }
            break;
          case 24:
            e.g = e.stack[--e.A];
            break;
          case 25:
            c.length = e.stack[--e.A];
            c[c.length - 1] = e;
            break;
          case 26:
          case 27:
            f = t(a, e.g - 1), h = t(a, e.g), e = R, k = e.has(f) !== e.has(h), q = 26 === g.h, k !== q && (d = !0);
        }
        d && c.pop();
      }
      if (this.sticky) {
        break;
      }
      b += x(t(a, b));
    }
    return null;
  };
  B.prototype.toString = function() {
    return "/" + this.source + "/" + this.flags;
  };
  B.prototype.exec = function(a) {
    var b = this.global || this.sticky, c = 0;
    b && (c = this.lastIndex);
    a = this.U.exec(a, c);
    b && (this.lastIndex = a ? a.lastIndex : 0);
    return a ? a.j() : null;
  };
  B.prototype.test = function(a) {
    return !!this.exec(a);
  };
  r.prototype.I = r.prototype.match;
  r.prototype.match = function(a) {
    if (K(a)) {
      if (a.global) {
        a.lastIndex = 0;
        var b = [];
        for (var c; c = a.exec(this);) {
          b.push(c[0]), "" === c[0] && (a.lastIndex += 1);
        }
        b = 0 === b.length ? null : b;
      } else {
        b = a.exec(this);
      }
      a = b;
    } else {
      a = this.I(a);
    }
    return a;
  };
  r.prototype.J = r.prototype.replace;
  r.prototype.replace = function(a, b) {
    if (K(a)) {
      var c = "function" === typeof b;
      var d = [], e = a.global;
      e && (a.lastIndex = 0);
      for (var f; f = a.exec(this);) {
        d.push(f);
        if (!e) {
          break;
        }
        "" === f[0] && (a.lastIndex = a.lastIndex + 1);
      }
      e = 0;
      for (var g = [], h = -1, k = d.length, l = 0; l < k; ++l) {
        if (f = d[l], g[++h] = this.slice(e, f.index), e = f.index + f[0].length, c) {
          var q = f.concat();
          q.push(f.index, this);
          g[++h] = "" + b.apply(null, q);
        } else {
          for (var n = 0;;) {
            q = b.indexOf("$", n);
            if (-1 === q) {
              g[++h] = b.slice(n);
              break;
            }
            g[++h] = b.slice(n, q);
            var y = b.charAt(q + 1);
            switch(y) {
              case "$":
                n = q + 2;
                g[++h] = "$";
                break;
              case "&":
                n = q + 2;
                g[++h] = f[0];
                break;
              case "`":
                n = q + 2;
                g[++h] = this.slice(0, f.index);
                break;
              case "'":
                n = q + 2;
                g[++h] = this.slice(e);
                break;
              case "<":
                break;
              default:
                if ("0" <= y && "9" >= y) {
                  n = b.charAt(q + 2);
                  y = "0" <= n && "9" >= n ? y + n : y;
                  n = +y;
                  if (0 < n && n < f.length) {
                    g[++h] = f[n] || "";
                    n = q + 1 + y.length;
                    break;
                  }
                  n = M(n / 10);
                  if (0 < n && n < f.length) {
                    g[++h] = f[n] || "";
                    n = q + y.length;
                    break;
                  }
                }
                g[++h] = "$";
                n = q + 1;
            }
          }
        }
      }
      g[++h] = this.slice(e);
      c = g = g.join("");
    } else {
      c = this.J(a, b);
    }
    return c;
  };
  r.prototype.K = r.prototype.search;
  r.prototype.search = function(a) {
    if (K(a)) {
      var b = a.lastIndex;
      a.lastIndex = 0;
      var c = a.exec(this);
      a.lastIndex = b;
      a = c ? c.index : -1;
    } else {
      a = this.K(a);
    }
    return a;
  };
  r.prototype.j = r.prototype.split;
  r.prototype.split = function(a, b) {
    return K(a) ? Ea(a, this, b) : this.j(a, b);
  };
  ka.RegExpCompat(B);
})(this, this.RegExp, String, Math, 1 / 0, void 0);

