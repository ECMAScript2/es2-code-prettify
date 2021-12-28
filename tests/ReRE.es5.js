(function(){
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(a) {
  var b = 0;
  return function() {
    return b < a.length ? {done:!1, value:a[b++],} : {done:!0};
  };
};
$jscomp.arrayIterator = function(a) {
  return {next:$jscomp.arrayIteratorImpl(a)};
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, e) {
  if (a == Array.prototype || a == Object.prototype) {
    return a;
  }
  a[b] = e.value;
  return a;
};
$jscomp.getGlobal = function(a) {
  a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global,];
  for (var b = 0; b < a.length; ++b) {
    var e = a[b];
    if (e && e.Math == Math) {
      return e;
    }
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, b) {
  var e = $jscomp.propertyToPolyfillSymbol[b];
  if (null == e) {
    return a[b];
  }
  e = a[e];
  return void 0 !== e ? e : a[b];
};
$jscomp.polyfill = function(a, b, e, f) {
  b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, e, f) : $jscomp.polyfillUnisolated(a, b, e, f));
};
$jscomp.polyfillUnisolated = function(a, b, e, f) {
  e = $jscomp.global;
  a = a.split(".");
  for (f = 0; f < a.length - 1; f++) {
    var g = a[f];
    if (!(g in e)) {
      return;
    }
    e = e[g];
  }
  a = a[a.length - 1];
  f = e[a];
  b = b(f);
  b != f && null != b && $jscomp.defineProperty(e, a, {configurable:!0, writable:!0, value:b});
};
$jscomp.polyfillIsolated = function(a, b, e, f) {
  var g = a.split(".");
  a = 1 === g.length;
  f = g[0];
  f = !a && f in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var m = 0; m < g.length - 1; m++) {
    var h = g[m];
    if (!(h in f)) {
      return;
    }
    f = f[h];
  }
  g = g[g.length - 1];
  e = $jscomp.IS_SYMBOL_NATIVE && "es6" === e ? f[g] : null;
  b = b(e);
  null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, g, {configurable:!0, writable:!0, value:b}) : b !== e && (void 0 === $jscomp.propertyToPolyfillSymbol[g] && (e = 1e9 * Math.random() >>> 0, $jscomp.propertyToPolyfillSymbol[g] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(g) : $jscomp.POLYFILL_PREFIX + e + "$" + g), $jscomp.defineProperty(f, $jscomp.propertyToPolyfillSymbol[g], {configurable:!0, writable:!0, value:b})));
};
$jscomp.initSymbol = function() {
};
$jscomp.polyfill("Symbol", function(a) {
  if (a) {
    return a;
  }
  var b = function(m, h) {
    this.$jscomp$symbol$id_ = m;
    $jscomp.defineProperty(this, "description", {configurable:!0, writable:!0, value:h});
  };
  b.prototype.toString = function() {
    return this.$jscomp$symbol$id_;
  };
  var e = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_", f = 0, g = function(m) {
    if (this instanceof g) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new b(e + (m || "") + "_" + f++, m);
  };
  return g;
}, "es6", "es3");
$jscomp.polyfill("Symbol.iterator", function(a) {
  if (a) {
    return a;
  }
  a = Symbol("Symbol.iterator");
  for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), e = 0; e < b.length; e++) {
    var f = $jscomp.global[b[e]];
    "function" === typeof f && "function" != typeof f.prototype[a] && $jscomp.defineProperty(f.prototype, a, {configurable:!0, writable:!0, value:function() {
      return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
    }});
  }
  return a;
}, "es6", "es3");
$jscomp.iteratorPrototype = function(a) {
  a = {next:a};
  a[Symbol.iterator] = function() {
    return this;
  };
  return a;
};
$jscomp.createTemplateTagFirstArg = function(a) {
  return a.raw = a;
};
$jscomp.createTemplateTagFirstArgWithRaw = function(a, b) {
  a.raw = b;
  return a;
};
$jscomp.makeIterator = function(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  return b ? b.call(a) : $jscomp.arrayIterator(a);
};
$jscomp.arrayFromIterator = function(a) {
  for (var b, e = []; !(b = a.next()).done;) {
    e.push(b.value);
  }
  return e;
};
$jscomp.arrayFromIterable = function(a) {
  return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
};
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
  var b = function() {
  };
  b.prototype = a;
  return new b();
};
$jscomp.getConstructImplementation = function() {
  function a() {
    function e() {
    }
    new e();
    Reflect.construct(e, [], function() {
    });
    return new e() instanceof e;
  }
  if ($jscomp.TRUST_ES6_POLYFILLS && "undefined" != typeof Reflect && Reflect.construct) {
    if (a()) {
      return Reflect.construct;
    }
    var b = Reflect.construct;
    return function(e, f, g) {
      e = b(e, f);
      g && Reflect.setPrototypeOf(e, g.prototype);
      return e;
    };
  }
  return function(e, f, g) {
    void 0 === g && (g = e);
    g = $jscomp.objectCreate(g.prototype || Object.prototype);
    return Function.prototype.apply.call(e, g, f) || g;
  };
};
$jscomp.construct = {valueOf:$jscomp.getConstructImplementation}.valueOf();
$jscomp.underscoreProtoCanBeSet = function() {
  var a = {a:!0}, b = {};
  try {
    return b.__proto__ = a, b.a;
  } catch (e) {
  }
  return !1;
};
$jscomp.setPrototypeOf = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
  a.__proto__ = b;
  if (a.__proto__ !== b) {
    throw new TypeError(a + " is not extensible");
  }
  return a;
} : null;
$jscomp.inherits = function(a, b) {
  a.prototype = $jscomp.objectCreate(b.prototype);
  a.prototype.constructor = a;
  if ($jscomp.setPrototypeOf) {
    var e = $jscomp.setPrototypeOf;
    e(a, b);
  } else {
    for (e in b) {
      if ("prototype" != e) {
        if (Object.defineProperties) {
          var f = Object.getOwnPropertyDescriptor(b, e);
          f && Object.defineProperty(a, e, f);
        } else {
          a[e] = b[e];
        }
      }
    }
  }
  a.superClass_ = b.prototype;
};
$jscomp.getRestArguments = function() {
  for (var a = Number(this), b = [], e = a; e < arguments.length; e++) {
    b[e - a] = arguments[e];
  }
  return b;
};
$jscomp.polyfill("Reflect", function(a) {
  return a ? a : {};
}, "es6", "es3");
$jscomp.polyfill("Reflect.construct", function(a) {
  return $jscomp.construct;
}, "es6", "es3");
$jscomp.polyfill("Reflect.setPrototypeOf", function(a) {
  if (a) {
    return a;
  }
  if ($jscomp.setPrototypeOf) {
    var b = $jscomp.setPrototypeOf;
    return function(e, f) {
      try {
        return b(e, f), !0;
      } catch (g) {
        return !1;
      }
    };
  }
  return null;
}, "es6", "es5");
$jscomp.checkEs6ConformanceViaProxy = function() {
  try {
    var a = {}, b = Object.create(new $jscomp.global.Proxy(a, {get:function(e, f, g) {
      return e == a && "q" == f && g == b;
    }}));
    return !0 === b.q;
  } catch (e) {
    return !1;
  }
};
$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
$jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy();
$jscomp.owns = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
$jscomp.polyfill("WeakMap", function(a) {
  function b() {
    if (!a || !Object.seal) {
      return !1;
    }
    try {
      var k = Object.seal({}), n = Object.seal({}), p = new a([[k, 2], [n, 3]]);
      if (2 != p.get(k) || 3 != p.get(n)) {
        return !1;
      }
      p.delete(k);
      p.set(n, 4);
      return !p.has(k) && 4 == p.get(n);
    } catch (r) {
      return !1;
    }
  }
  function e() {
  }
  function f(k) {
    var n = typeof k;
    return "object" === n && null !== k || "function" === n;
  }
  function g(k) {
    if (!$jscomp.owns(k, h)) {
      var n = new e();
      $jscomp.defineProperty(k, h, {value:n});
    }
  }
  function m(k) {
    if (!$jscomp.ISOLATE_POLYFILLS) {
      var n = Object[k];
      n && (Object[k] = function(p) {
        if (p instanceof e) {
          return p;
        }
        Object.isExtensible(p) && g(p);
        return n(p);
      });
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (a && $jscomp.ES6_CONFORMANCE) {
      return a;
    }
  } else {
    if (b()) {
      return a;
    }
  }
  var h = "$jscomp_hidden_" + Math.random();
  m("freeze");
  m("preventExtensions");
  m("seal");
  var q = 0, l = function(k) {
    this.id_ = (q += Math.random() + 1).toString();
    if (k) {
      k = $jscomp.makeIterator(k);
      for (var n; !(n = k.next()).done;) {
        n = n.value, this.set(n[0], n[1]);
      }
    }
  };
  l.prototype.set = function(k, n) {
    if (!f(k)) {
      throw Error("Invalid WeakMap key");
    }
    g(k);
    if (!$jscomp.owns(k, h)) {
      throw Error("WeakMap key fail: " + k);
    }
    k[h][this.id_] = n;
    return this;
  };
  l.prototype.get = function(k) {
    return f(k) && $jscomp.owns(k, h) ? k[h][this.id_] : void 0;
  };
  l.prototype.has = function(k) {
    return f(k) && $jscomp.owns(k, h) && $jscomp.owns(k[h], this.id_);
  };
  l.prototype.delete = function(k) {
    return f(k) && $jscomp.owns(k, h) && $jscomp.owns(k[h], this.id_) ? delete k[h][this.id_] : !1;
  };
  return l;
}, "es6", "es3");
$jscomp.MapEntry = function() {
};
$jscomp.polyfill("Map", function(a) {
  function b() {
    if ($jscomp.ASSUME_NO_NATIVE_MAP || !a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) {
      return !1;
    }
    try {
      var l = Object.seal({x:4}), k = new a($jscomp.makeIterator([[l, "s"]]));
      if ("s" != k.get(l) || 1 != k.size || k.get({x:4}) || k.set({x:4}, "t") != k || 2 != k.size) {
        return !1;
      }
      var n = k.entries(), p = n.next();
      if (p.done || p.value[0] != l || "s" != p.value[1]) {
        return !1;
      }
      p = n.next();
      return p.done || 4 != p.value[0].x || "t" != p.value[1] || !n.next().done ? !1 : !0;
    } catch (r) {
      return !1;
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (a && $jscomp.ES6_CONFORMANCE) {
      return a;
    }
  } else {
    if (b()) {
      return a;
    }
  }
  var e = new WeakMap(), f = function(l) {
    this.data_ = {};
    this.head_ = h();
    this.size = 0;
    if (l) {
      l = $jscomp.makeIterator(l);
      for (var k; !(k = l.next()).done;) {
        k = k.value, this.set(k[0], k[1]);
      }
    }
  };
  f.prototype.set = function(l, k) {
    l = 0 === l ? 0 : l;
    var n = g(this, l);
    n.list || (n.list = this.data_[n.id] = []);
    n.entry ? n.entry.value = k : (n.entry = {next:this.head_, previous:this.head_.previous, head:this.head_, key:l, value:k,}, n.list.push(n.entry), this.head_.previous.next = n.entry, this.head_.previous = n.entry, this.size++);
    return this;
  };
  f.prototype.delete = function(l) {
    l = g(this, l);
    return l.entry && l.list ? (l.list.splice(l.index, 1), l.list.length || delete this.data_[l.id], l.entry.previous.next = l.entry.next, l.entry.next.previous = l.entry.previous, l.entry.head = null, this.size--, !0) : !1;
  };
  f.prototype.clear = function() {
    this.data_ = {};
    this.head_ = this.head_.previous = h();
    this.size = 0;
  };
  f.prototype.has = function(l) {
    return !!g(this, l).entry;
  };
  f.prototype.get = function(l) {
    return (l = g(this, l).entry) && l.value;
  };
  f.prototype.entries = function() {
    return m(this, function(l) {
      return [l.key, l.value];
    });
  };
  f.prototype.keys = function() {
    return m(this, function(l) {
      return l.key;
    });
  };
  f.prototype.values = function() {
    return m(this, function(l) {
      return l.value;
    });
  };
  f.prototype.forEach = function(l, k) {
    for (var n = this.entries(), p; !(p = n.next()).done;) {
      p = p.value, l.call(k, p[1], p[0], this);
    }
  };
  f.prototype[Symbol.iterator] = f.prototype.entries;
  var g = function(l, k) {
    var n = k && typeof k;
    "object" == n || "function" == n ? e.has(k) ? n = e.get(k) : (n = "" + ++q, e.set(k, n)) : n = "p_" + k;
    var p = l.data_[n];
    if (p && $jscomp.owns(l.data_, n)) {
      for (l = 0; l < p.length; l++) {
        var r = p[l];
        if (k !== k && r.key !== r.key || k === r.key) {
          return {id:n, list:p, index:l, entry:r};
        }
      }
    }
    return {id:n, list:p, index:-1, entry:void 0};
  }, m = function(l, k) {
    var n = l.head_;
    return $jscomp.iteratorPrototype(function() {
      if (n) {
        for (; n.head != l.head_;) {
          n = n.previous;
        }
        for (; n.next != n.head;) {
          return n = n.next, {done:!1, value:k(n)};
        }
        n = null;
      }
      return {done:!0, value:void 0};
    });
  }, h = function() {
    var l = {};
    return l.previous = l.next = l.head = l;
  }, q = 0;
  return f;
}, "es6", "es3");
$jscomp.polyfill("Set", function(a) {
  function b() {
    if ($jscomp.ASSUME_NO_NATIVE_SET || !a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) {
      return !1;
    }
    try {
      var f = Object.seal({x:4}), g = new a($jscomp.makeIterator([f]));
      if (!g.has(f) || 1 != g.size || g.add(f) != g || 1 != g.size || g.add({x:4}) != g || 2 != g.size) {
        return !1;
      }
      var m = g.entries(), h = m.next();
      if (h.done || h.value[0] != f || h.value[1] != f) {
        return !1;
      }
      h = m.next();
      return h.done || h.value[0] == f || 4 != h.value[0].x || h.value[1] != h.value[0] ? !1 : m.next().done;
    } catch (q) {
      return !1;
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (a && $jscomp.ES6_CONFORMANCE) {
      return a;
    }
  } else {
    if (b()) {
      return a;
    }
  }
  var e = function(f) {
    this.map_ = new Map();
    if (f) {
      f = $jscomp.makeIterator(f);
      for (var g; !(g = f.next()).done;) {
        this.add(g.value);
      }
    }
    this.size = this.map_.size;
  };
  e.prototype.add = function(f) {
    f = 0 === f ? 0 : f;
    this.map_.set(f, f);
    this.size = this.map_.size;
    return this;
  };
  e.prototype.delete = function(f) {
    f = this.map_.delete(f);
    this.size = this.map_.size;
    return f;
  };
  e.prototype.clear = function() {
    this.map_.clear();
    this.size = 0;
  };
  e.prototype.has = function(f) {
    return this.map_.has(f);
  };
  e.prototype.entries = function() {
    return this.map_.entries();
  };
  e.prototype.values = function() {
    return this.map_.values();
  };
  e.prototype.keys = e.prototype.values;
  e.prototype[Symbol.iterator] = e.prototype.values;
  e.prototype.forEach = function(f, g) {
    var m = this;
    this.map_.forEach(function(h) {
      return f.call(g, h, h, m);
    });
  };
  return e;
}, "es6", "es3");
$jscomp.checkStringArgs = function(a, b, e) {
  if (null == a) {
    throw new TypeError("The 'this' value for String.prototype." + e + " must not be null or undefined");
  }
  if (b instanceof RegExp) {
    throw new TypeError("First argument to String.prototype." + e + " must not be a regular expression");
  }
  return a + "";
};
$jscomp.polyfill("String.prototype.repeat", function(a) {
  return a ? a : function(b) {
    var e = $jscomp.checkStringArgs(this, null, "repeat");
    if (0 > b || 1342177279 < b) {
      throw new RangeError("Invalid count value");
    }
    b |= 0;
    for (var f = ""; b;) {
      if (b & 1 && (f += e), b >>>= 1) {
        e += e;
      }
    }
    return f;
  };
}, "es6", "es3");
$jscomp.stringPadding = function(a, b) {
  a = void 0 !== a ? String(a) : " ";
  return 0 < b && a ? a.repeat(Math.ceil(b / a.length)).substring(0, b) : "";
};
$jscomp.polyfill("String.prototype.padStart", function(a) {
  return a ? a : function(b, e) {
    var f = $jscomp.checkStringArgs(this, null, "padStart");
    return $jscomp.stringPadding(e, b - f.length) + f;
  };
}, "es8", "es3");
$jscomp.polyfill("String.fromCodePoint", function(a) {
  return a ? a : function(b) {
    for (var e = "", f = 0; f < arguments.length; f++) {
      var g = Number(arguments[f]);
      if (0 > g || 1114111 < g || g !== Math.floor(g)) {
        throw new RangeError("invalid_code_point " + g);
      }
      65535 >= g ? e += String.fromCharCode(g) : (g -= 65536, e += String.fromCharCode(g >>> 10 & 1023 | 55296), e += String.fromCharCode(g & 1023 | 56320));
    }
    return e;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function(a) {
  return a ? a : function(b, e, f) {
    e = null != e ? e : function(q) {
      return q;
    };
    var g = [], m = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
    if ("function" == typeof m) {
      b = m.call(b);
      for (var h = 0; !(m = b.next()).done;) {
        g.push(e.call(f, m.value, h++));
      }
    } else {
      for (m = b.length, h = 0; h < m; h++) {
        g.push(e.call(f, b[h], h));
      }
    }
    return g;
  };
}, "es6", "es3");
$jscomp.polyfill("Object.is", function(a) {
  return a ? a : function(b, e) {
    return b === e ? 0 !== b || 1 / b === 1 / e : b !== b && e !== e;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.includes", function(a) {
  return a ? a : function(b, e) {
    var f = this;
    f instanceof String && (f = String(f));
    var g = f.length;
    e = e || 0;
    for (0 > e && (e = Math.max(e + g, 0)); e < g; e++) {
      var m = f[e];
      if (m === b || Object.is(m, b)) {
        return !0;
      }
    }
    return !1;
  };
}, "es7", "es3");
$jscomp.polyfill("String.prototype.includes", function(a) {
  return a ? a : function(b, e) {
    return -1 !== $jscomp.checkStringArgs(this, b, "includes").indexOf(b, e || 0);
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.codePointAt", function(a) {
  return a ? a : function(b) {
    var e = $jscomp.checkStringArgs(this, null, "codePointAt"), f = e.length;
    b = Number(b) || 0;
    if (0 <= b && b < f) {
      b |= 0;
      var g = e.charCodeAt(b);
      if (55296 > g || 56319 < g || b + 1 === f) {
        return g;
      }
      b = e.charCodeAt(b + 1);
      return 56320 > b || 57343 < b ? g : 1024 * (g - 55296) + b + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function(a) {
  return a ? a : function(b, e) {
    var f = $jscomp.checkStringArgs(this, b, "startsWith");
    b += "";
    var g = f.length, m = b.length;
    e = Math.max(0, Math.min(e | 0, f.length));
    for (var h = 0; h < m && e < g;) {
      if (f[e++] != b[h++]) {
        return !1;
      }
    }
    return h >= m;
  };
}, "es6", "es3");
$jscomp.polyfill("Number.parseInt", function(a) {
  return a || parseInt;
}, "es6", "es3");
$jscomp.polyfill("Number.isNaN", function(a) {
  return a ? a : function(b) {
    return "number" === typeof b && isNaN(b);
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.padEnd", function(a) {
  return a ? a : function(b, e) {
    var f = $jscomp.checkStringArgs(this, null, "padStart");
    return f + $jscomp.stringPadding(e, b - f.length);
  };
}, "es8", "es3");
for (var foldMap = new Map([[65, 97], [66, 98], [67, 99], [68, 100], [69, 101], [70, 102], [71, 103], [72, 104], [73, 105], [74, 106], [75, 107], [76, 108], [77, 109], [78, 110], [79, 111], [80, 112], [81, 113], [82, 114], [83, 115], [84, 116], [85, 117], [86, 118], [87, 119], [88, 120], [89, 121], [90, 122], [181, 956], [192, 224], [193, 225], [194, 226], [195, 227], [196, 228], [197, 229], [198, 230], [199, 231], [200, 232], [201, 233], [202, 234], [203, 235], [204, 236], [205, 237], [206, 238], 
[207, 239], [208, 240], [209, 241], [210, 242], [211, 243], [212, 244], [213, 245], [214, 246], [216, 248], [217, 249], [218, 250], [219, 251], [220, 252], [221, 253], [222, 254], [256, 257], [258, 259], [260, 261], [262, 263], [264, 265], [266, 267], [268, 269], [270, 271], [272, 273], [274, 275], [276, 277], [278, 279], [280, 281], [282, 283], [284, 285], [286, 287], [288, 289], [290, 291], [292, 293], [294, 295], [296, 297], [298, 299], [300, 301], [302, 303], [306, 307], [308, 309], [310, 311], 
[313, 314], [315, 316], [317, 318], [319, 320], [321, 322], [323, 324], [325, 326], [327, 328], [330, 331], [332, 333], [334, 335], [336, 337], [338, 339], [340, 341], [342, 343], [344, 345], [346, 347], [348, 349], [350, 351], [352, 353], [354, 355], [356, 357], [358, 359], [360, 361], [362, 363], [364, 365], [366, 367], [368, 369], [370, 371], [372, 373], [374, 375], [376, 255], [377, 378], [379, 380], [381, 382], [383, 115], [385, 595], [386, 387], [388, 389], [390, 596], [391, 392], [393, 598], 
[394, 599], [395, 396], [398, 477], [399, 601], [400, 603], [401, 402], [403, 608], [404, 611], [406, 617], [407, 616], [408, 409], [412, 623], [413, 626], [415, 629], [416, 417], [418, 419], [420, 421], [422, 640], [423, 424], [425, 643], [428, 429], [430, 648], [431, 432], [433, 650], [434, 651], [435, 436], [437, 438], [439, 658], [440, 441], [444, 445], [452, 454], [453, 454], [455, 457], [456, 457], [458, 460], [459, 460], [461, 462], [463, 464], [465, 466], [467, 468], [469, 470], [471, 472], 
[473, 474], [475, 476], [478, 479], [480, 481], [482, 483], [484, 485], [486, 487], [488, 489], [490, 491], [492, 493], [494, 495], [497, 499], [498, 499], [500, 501], [502, 405], [503, 447], [504, 505], [506, 507], [508, 509], [510, 511], [512, 513], [514, 515], [516, 517], [518, 519], [520, 521], [522, 523], [524, 525], [526, 527], [528, 529], [530, 531], [532, 533], [534, 535], [536, 537], [538, 539], [540, 541], [542, 543], [544, 414], [546, 547], [548, 549], [550, 551], [552, 553], [554, 555], 
[556, 557], [558, 559], [560, 561], [562, 563], [570, 11365], [571, 572], [573, 410], [574, 11366], [577, 578], [579, 384], [580, 649], [581, 652], [582, 583], [584, 585], [586, 587], [588, 589], [590, 591], [837, 953], [880, 881], [882, 883], [886, 887], [895, 1011], [902, 940], [904, 941], [905, 942], [906, 943], [908, 972], [910, 973], [911, 974], [913, 945], [914, 946], [915, 947], [916, 948], [917, 949], [918, 950], [919, 951], [920, 952], [921, 953], [922, 954], [923, 955], [924, 956], [925, 
957], [926, 958], [927, 959], [928, 960], [929, 961], [931, 963], [932, 964], [933, 965], [934, 966], [935, 967], [936, 968], [937, 969], [938, 970], [939, 971], [962, 963], [975, 983], [976, 946], [977, 952], [981, 966], [982, 960], [984, 985], [986, 987], [988, 989], [990, 991], [992, 993], [994, 995], [996, 997], [998, 999], [1E3, 1001], [1002, 1003], [1004, 1005], [1006, 1007], [1008, 954], [1009, 961], [1012, 952], [1013, 949], [1015, 1016], [1017, 1010], [1018, 1019], [1021, 891], [1022, 892], 
[1023, 893], [1024, 1104], [1025, 1105], [1026, 1106], [1027, 1107], [1028, 1108], [1029, 1109], [1030, 1110], [1031, 1111], [1032, 1112], [1033, 1113], [1034, 1114], [1035, 1115], [1036, 1116], [1037, 1117], [1038, 1118], [1039, 1119], [1040, 1072], [1041, 1073], [1042, 1074], [1043, 1075], [1044, 1076], [1045, 1077], [1046, 1078], [1047, 1079], [1048, 1080], [1049, 1081], [1050, 1082], [1051, 1083], [1052, 1084], [1053, 1085], [1054, 1086], [1055, 1087], [1056, 1088], [1057, 1089], [1058, 1090], 
[1059, 1091], [1060, 1092], [1061, 1093], [1062, 1094], [1063, 1095], [1064, 1096], [1065, 1097], [1066, 1098], [1067, 1099], [1068, 1100], [1069, 1101], [1070, 1102], [1071, 1103], [1120, 1121], [1122, 1123], [1124, 1125], [1126, 1127], [1128, 1129], [1130, 1131], [1132, 1133], [1134, 1135], [1136, 1137], [1138, 1139], [1140, 1141], [1142, 1143], [1144, 1145], [1146, 1147], [1148, 1149], [1150, 1151], [1152, 1153], [1162, 1163], [1164, 1165], [1166, 1167], [1168, 1169], [1170, 1171], [1172, 1173], 
[1174, 1175], [1176, 1177], [1178, 1179], [1180, 1181], [1182, 1183], [1184, 1185], [1186, 1187], [1188, 1189], [1190, 1191], [1192, 1193], [1194, 1195], [1196, 1197], [1198, 1199], [1200, 1201], [1202, 1203], [1204, 1205], [1206, 1207], [1208, 1209], [1210, 1211], [1212, 1213], [1214, 1215], [1216, 1231], [1217, 1218], [1219, 1220], [1221, 1222], [1223, 1224], [1225, 1226], [1227, 1228], [1229, 1230], [1232, 1233], [1234, 1235], [1236, 1237], [1238, 1239], [1240, 1241], [1242, 1243], [1244, 1245], 
[1246, 1247], [1248, 1249], [1250, 1251], [1252, 1253], [1254, 1255], [1256, 1257], [1258, 1259], [1260, 1261], [1262, 1263], [1264, 1265], [1266, 1267], [1268, 1269], [1270, 1271], [1272, 1273], [1274, 1275], [1276, 1277], [1278, 1279], [1280, 1281], [1282, 1283], [1284, 1285], [1286, 1287], [1288, 1289], [1290, 1291], [1292, 1293], [1294, 1295], [1296, 1297], [1298, 1299], [1300, 1301], [1302, 1303], [1304, 1305], [1306, 1307], [1308, 1309], [1310, 1311], [1312, 1313], [1314, 1315], [1316, 1317], 
[1318, 1319], [1320, 1321], [1322, 1323], [1324, 1325], [1326, 1327], [1329, 1377], [1330, 1378], [1331, 1379], [1332, 1380], [1333, 1381], [1334, 1382], [1335, 1383], [1336, 1384], [1337, 1385], [1338, 1386], [1339, 1387], [1340, 1388], [1341, 1389], [1342, 1390], [1343, 1391], [1344, 1392], [1345, 1393], [1346, 1394], [1347, 1395], [1348, 1396], [1349, 1397], [1350, 1398], [1351, 1399], [1352, 1400], [1353, 1401], [1354, 1402], [1355, 1403], [1356, 1404], [1357, 1405], [1358, 1406], [1359, 1407], 
[1360, 1408], [1361, 1409], [1362, 1410], [1363, 1411], [1364, 1412], [1365, 1413], [1366, 1414], [4256, 11520], [4257, 11521], [4258, 11522], [4259, 11523], [4260, 11524], [4261, 11525], [4262, 11526], [4263, 11527], [4264, 11528], [4265, 11529], [4266, 11530], [4267, 11531], [4268, 11532], [4269, 11533], [4270, 11534], [4271, 11535], [4272, 11536], [4273, 11537], [4274, 11538], [4275, 11539], [4276, 11540], [4277, 11541], [4278, 11542], [4279, 11543], [4280, 11544], [4281, 11545], [4282, 11546], 
[4283, 11547], [4284, 11548], [4285, 11549], [4286, 11550], [4287, 11551], [4288, 11552], [4289, 11553], [4290, 11554], [4291, 11555], [4292, 11556], [4293, 11557], [4295, 11559], [4301, 11565], [5112, 5104], [5113, 5105], [5114, 5106], [5115, 5107], [5116, 5108], [5117, 5109], [7296, 1074], [7297, 1076], [7298, 1086], [7299, 1089], [7300, 1090], [7301, 1090], [7302, 1098], [7303, 1123], [7304, 42571], [7312, 4304], [7313, 4305], [7314, 4306], [7315, 4307], [7316, 4308], [7317, 4309], [7318, 4310], 
[7319, 4311], [7320, 4312], [7321, 4313], [7322, 4314], [7323, 4315], [7324, 4316], [7325, 4317], [7326, 4318], [7327, 4319], [7328, 4320], [7329, 4321], [7330, 4322], [7331, 4323], [7332, 4324], [7333, 4325], [7334, 4326], [7335, 4327], [7336, 4328], [7337, 4329], [7338, 4330], [7339, 4331], [7340, 4332], [7341, 4333], [7342, 4334], [7343, 4335], [7344, 4336], [7345, 4337], [7346, 4338], [7347, 4339], [7348, 4340], [7349, 4341], [7350, 4342], [7351, 4343], [7352, 4344], [7353, 4345], [7354, 4346], 
[7357, 4349], [7358, 4350], [7359, 4351], [7680, 7681], [7682, 7683], [7684, 7685], [7686, 7687], [7688, 7689], [7690, 7691], [7692, 7693], [7694, 7695], [7696, 7697], [7698, 7699], [7700, 7701], [7702, 7703], [7704, 7705], [7706, 7707], [7708, 7709], [7710, 7711], [7712, 7713], [7714, 7715], [7716, 7717], [7718, 7719], [7720, 7721], [7722, 7723], [7724, 7725], [7726, 7727], [7728, 7729], [7730, 7731], [7732, 7733], [7734, 7735], [7736, 7737], [7738, 7739], [7740, 7741], [7742, 7743], [7744, 7745], 
[7746, 7747], [7748, 7749], [7750, 7751], [7752, 7753], [7754, 7755], [7756, 7757], [7758, 7759], [7760, 7761], [7762, 7763], [7764, 7765], [7766, 7767], [7768, 7769], [7770, 7771], [7772, 7773], [7774, 7775], [7776, 7777], [7778, 7779], [7780, 7781], [7782, 7783], [7784, 7785], [7786, 7787], [7788, 7789], [7790, 7791], [7792, 7793], [7794, 7795], [7796, 7797], [7798, 7799], [7800, 7801], [7802, 7803], [7804, 7805], [7806, 7807], [7808, 7809], [7810, 7811], [7812, 7813], [7814, 7815], [7816, 7817], 
[7818, 7819], [7820, 7821], [7822, 7823], [7824, 7825], [7826, 7827], [7828, 7829], [7835, 7777], [7840, 7841], [7842, 7843], [7844, 7845], [7846, 7847], [7848, 7849], [7850, 7851], [7852, 7853], [7854, 7855], [7856, 7857], [7858, 7859], [7860, 7861], [7862, 7863], [7864, 7865], [7866, 7867], [7868, 7869], [7870, 7871], [7872, 7873], [7874, 7875], [7876, 7877], [7878, 7879], [7880, 7881], [7882, 7883], [7884, 7885], [7886, 7887], [7888, 7889], [7890, 7891], [7892, 7893], [7894, 7895], [7896, 7897], 
[7898, 7899], [7900, 7901], [7902, 7903], [7904, 7905], [7906, 7907], [7908, 7909], [7910, 7911], [7912, 7913], [7914, 7915], [7916, 7917], [7918, 7919], [7920, 7921], [7922, 7923], [7924, 7925], [7926, 7927], [7928, 7929], [7930, 7931], [7932, 7933], [7934, 7935], [7944, 7936], [7945, 7937], [7946, 7938], [7947, 7939], [7948, 7940], [7949, 7941], [7950, 7942], [7951, 7943], [7960, 7952], [7961, 7953], [7962, 7954], [7963, 7955], [7964, 7956], [7965, 7957], [7976, 7968], [7977, 7969], [7978, 7970], 
[7979, 7971], [7980, 7972], [7981, 7973], [7982, 7974], [7983, 7975], [7992, 7984], [7993, 7985], [7994, 7986], [7995, 7987], [7996, 7988], [7997, 7989], [7998, 7990], [7999, 7991], [8008, 8E3], [8009, 8001], [8010, 8002], [8011, 8003], [8012, 8004], [8013, 8005], [8025, 8017], [8027, 8019], [8029, 8021], [8031, 8023], [8040, 8032], [8041, 8033], [8042, 8034], [8043, 8035], [8044, 8036], [8045, 8037], [8046, 8038], [8047, 8039], [8120, 8112], [8121, 8113], [8122, 8048], [8123, 8049], [8126, 953], 
[8136, 8050], [8137, 8051], [8138, 8052], [8139, 8053], [8152, 8144], [8153, 8145], [8154, 8054], [8155, 8055], [8168, 8160], [8169, 8161], [8170, 8058], [8171, 8059], [8172, 8165], [8184, 8056], [8185, 8057], [8186, 8060], [8187, 8061], [8486, 969], [8490, 107], [8491, 229], [8498, 8526], [8544, 8560], [8545, 8561], [8546, 8562], [8547, 8563], [8548, 8564], [8549, 8565], [8550, 8566], [8551, 8567], [8552, 8568], [8553, 8569], [8554, 8570], [8555, 8571], [8556, 8572], [8557, 8573], [8558, 8574], 
[8559, 8575], [8579, 8580], [9398, 9424], [9399, 9425], [9400, 9426], [9401, 9427], [9402, 9428], [9403, 9429], [9404, 9430], [9405, 9431], [9406, 9432], [9407, 9433], [9408, 9434], [9409, 9435], [9410, 9436], [9411, 9437], [9412, 9438], [9413, 9439], [9414, 9440], [9415, 9441], [9416, 9442], [9417, 9443], [9418, 9444], [9419, 9445], [9420, 9446], [9421, 9447], [9422, 9448], [9423, 9449], [11264, 11312], [11265, 11313], [11266, 11314], [11267, 11315], [11268, 11316], [11269, 11317], [11270, 11318], 
[11271, 11319], [11272, 11320], [11273, 11321], [11274, 11322], [11275, 11323], [11276, 11324], [11277, 11325], [11278, 11326], [11279, 11327], [11280, 11328], [11281, 11329], [11282, 11330], [11283, 11331], [11284, 11332], [11285, 11333], [11286, 11334], [11287, 11335], [11288, 11336], [11289, 11337], [11290, 11338], [11291, 11339], [11292, 11340], [11293, 11341], [11294, 11342], [11295, 11343], [11296, 11344], [11297, 11345], [11298, 11346], [11299, 11347], [11300, 11348], [11301, 11349], [11302, 
11350], [11303, 11351], [11304, 11352], [11305, 11353], [11306, 11354], [11307, 11355], [11308, 11356], [11309, 11357], [11310, 11358], [11360, 11361], [11362, 619], [11363, 7549], [11364, 637], [11367, 11368], [11369, 11370], [11371, 11372], [11373, 593], [11374, 625], [11375, 592], [11376, 594], [11378, 11379], [11381, 11382], [11390, 575], [11391, 576], [11392, 11393], [11394, 11395], [11396, 11397], [11398, 11399], [11400, 11401], [11402, 11403], [11404, 11405], [11406, 11407], [11408, 11409], 
[11410, 11411], [11412, 11413], [11414, 11415], [11416, 11417], [11418, 11419], [11420, 11421], [11422, 11423], [11424, 11425], [11426, 11427], [11428, 11429], [11430, 11431], [11432, 11433], [11434, 11435], [11436, 11437], [11438, 11439], [11440, 11441], [11442, 11443], [11444, 11445], [11446, 11447], [11448, 11449], [11450, 11451], [11452, 11453], [11454, 11455], [11456, 11457], [11458, 11459], [11460, 11461], [11462, 11463], [11464, 11465], [11466, 11467], [11468, 11469], [11470, 11471], [11472, 
11473], [11474, 11475], [11476, 11477], [11478, 11479], [11480, 11481], [11482, 11483], [11484, 11485], [11486, 11487], [11488, 11489], [11490, 11491], [11499, 11500], [11501, 11502], [11506, 11507], [42560, 42561], [42562, 42563], [42564, 42565], [42566, 42567], [42568, 42569], [42570, 42571], [42572, 42573], [42574, 42575], [42576, 42577], [42578, 42579], [42580, 42581], [42582, 42583], [42584, 42585], [42586, 42587], [42588, 42589], [42590, 42591], [42592, 42593], [42594, 42595], [42596, 42597], 
[42598, 42599], [42600, 42601], [42602, 42603], [42604, 42605], [42624, 42625], [42626, 42627], [42628, 42629], [42630, 42631], [42632, 42633], [42634, 42635], [42636, 42637], [42638, 42639], [42640, 42641], [42642, 42643], [42644, 42645], [42646, 42647], [42648, 42649], [42650, 42651], [42786, 42787], [42788, 42789], [42790, 42791], [42792, 42793], [42794, 42795], [42796, 42797], [42798, 42799], [42802, 42803], [42804, 42805], [42806, 42807], [42808, 42809], [42810, 42811], [42812, 42813], [42814, 
42815], [42816, 42817], [42818, 42819], [42820, 42821], [42822, 42823], [42824, 42825], [42826, 42827], [42828, 42829], [42830, 42831], [42832, 42833], [42834, 42835], [42836, 42837], [42838, 42839], [42840, 42841], [42842, 42843], [42844, 42845], [42846, 42847], [42848, 42849], [42850, 42851], [42852, 42853], [42854, 42855], [42856, 42857], [42858, 42859], [42860, 42861], [42862, 42863], [42873, 42874], [42875, 42876], [42877, 7545], [42878, 42879], [42880, 42881], [42882, 42883], [42884, 42885], 
[42886, 42887], [42891, 42892], [42893, 613], [42896, 42897], [42898, 42899], [42902, 42903], [42904, 42905], [42906, 42907], [42908, 42909], [42910, 42911], [42912, 42913], [42914, 42915], [42916, 42917], [42918, 42919], [42920, 42921], [42922, 614], [42923, 604], [42924, 609], [42925, 620], [42926, 618], [42928, 670], [42929, 647], [42930, 669], [42931, 43859], [42932, 42933], [42934, 42935], [42936, 42937], [42938, 42939], [42940, 42941], [42942, 42943], [42946, 42947], [42948, 42900], [42949, 
642], [42950, 7566], [43888, 5024], [43889, 5025], [43890, 5026], [43891, 5027], [43892, 5028], [43893, 5029], [43894, 5030], [43895, 5031], [43896, 5032], [43897, 5033], [43898, 5034], [43899, 5035], [43900, 5036], [43901, 5037], [43902, 5038], [43903, 5039], [43904, 5040], [43905, 5041], [43906, 5042], [43907, 5043], [43908, 5044], [43909, 5045], [43910, 5046], [43911, 5047], [43912, 5048], [43913, 5049], [43914, 5050], [43915, 5051], [43916, 5052], [43917, 5053], [43918, 5054], [43919, 5055], 
[43920, 5056], [43921, 5057], [43922, 5058], [43923, 5059], [43924, 5060], [43925, 5061], [43926, 5062], [43927, 5063], [43928, 5064], [43929, 5065], [43930, 5066], [43931, 5067], [43932, 5068], [43933, 5069], [43934, 5070], [43935, 5071], [43936, 5072], [43937, 5073], [43938, 5074], [43939, 5075], [43940, 5076], [43941, 5077], [43942, 5078], [43943, 5079], [43944, 5080], [43945, 5081], [43946, 5082], [43947, 5083], [43948, 5084], [43949, 5085], [43950, 5086], [43951, 5087], [43952, 5088], [43953, 
5089], [43954, 5090], [43955, 5091], [43956, 5092], [43957, 5093], [43958, 5094], [43959, 5095], [43960, 5096], [43961, 5097], [43962, 5098], [43963, 5099], [43964, 5100], [43965, 5101], [43966, 5102], [43967, 5103], [65313, 65345], [65314, 65346], [65315, 65347], [65316, 65348], [65317, 65349], [65318, 65350], [65319, 65351], [65320, 65352], [65321, 65353], [65322, 65354], [65323, 65355], [65324, 65356], [65325, 65357], [65326, 65358], [65327, 65359], [65328, 65360], [65329, 65361], [65330, 65362], 
[65331, 65363], [65332, 65364], [65333, 65365], [65334, 65366], [65335, 65367], [65336, 65368], [65337, 65369], [65338, 65370], [66560, 66600], [66561, 66601], [66562, 66602], [66563, 66603], [66564, 66604], [66565, 66605], [66566, 66606], [66567, 66607], [66568, 66608], [66569, 66609], [66570, 66610], [66571, 66611], [66572, 66612], [66573, 66613], [66574, 66614], [66575, 66615], [66576, 66616], [66577, 66617], [66578, 66618], [66579, 66619], [66580, 66620], [66581, 66621], [66582, 66622], [66583, 
66623], [66584, 66624], [66585, 66625], [66586, 66626], [66587, 66627], [66588, 66628], [66589, 66629], [66590, 66630], [66591, 66631], [66592, 66632], [66593, 66633], [66594, 66634], [66595, 66635], [66596, 66636], [66597, 66637], [66598, 66638], [66599, 66639], [66736, 66776], [66737, 66777], [66738, 66778], [66739, 66779], [66740, 66780], [66741, 66781], [66742, 66782], [66743, 66783], [66744, 66784], [66745, 66785], [66746, 66786], [66747, 66787], [66748, 66788], [66749, 66789], [66750, 66790], 
[66751, 66791], [66752, 66792], [66753, 66793], [66754, 66794], [66755, 66795], [66756, 66796], [66757, 66797], [66758, 66798], [66759, 66799], [66760, 66800], [66761, 66801], [66762, 66802], [66763, 66803], [66764, 66804], [66765, 66805], [66766, 66806], [66767, 66807], [66768, 66808], [66769, 66809], [66770, 66810], [66771, 66811], [68736, 68800], [68737, 68801], [68738, 68802], [68739, 68803], [68740, 68804], [68741, 68805], [68742, 68806], [68743, 68807], [68744, 68808], [68745, 68809], [68746, 
68810], [68747, 68811], [68748, 68812], [68749, 68813], [68750, 68814], [68751, 68815], [68752, 68816], [68753, 68817], [68754, 68818], [68755, 68819], [68756, 68820], [68757, 68821], [68758, 68822], [68759, 68823], [68760, 68824], [68761, 68825], [68762, 68826], [68763, 68827], [68764, 68828], [68765, 68829], [68766, 68830], [68767, 68831], [68768, 68832], [68769, 68833], [68770, 68834], [68771, 68835], [68772, 68836], [68773, 68837], [68774, 68838], [68775, 68839], [68776, 68840], [68777, 68841], 
[68778, 68842], [68779, 68843], [68780, 68844], [68781, 68845], [68782, 68846], [68783, 68847], [68784, 68848], [68785, 68849], [68786, 68850], [71840, 71872], [71841, 71873], [71842, 71874], [71843, 71875], [71844, 71876], [71845, 71877], [71846, 71878], [71847, 71879], [71848, 71880], [71849, 71881], [71850, 71882], [71851, 71883], [71852, 71884], [71853, 71885], [71854, 71886], [71855, 71887], [71856, 71888], [71857, 71889], [71858, 71890], [71859, 71891], [71860, 71892], [71861, 71893], [71862, 
71894], [71863, 71895], [71864, 71896], [71865, 71897], [71866, 71898], [71867, 71899], [71868, 71900], [71869, 71901], [71870, 71902], [71871, 71903], [93760, 93792], [93761, 93793], [93762, 93794], [93763, 93795], [93764, 93796], [93765, 93797], [93766, 93798], [93767, 93799], [93768, 93800], [93769, 93801], [93770, 93802], [93771, 93803], [93772, 93804], [93773, 93805], [93774, 93806], [93775, 93807], [93776, 93808], [93777, 93809], [93778, 93810], [93779, 93811], [93780, 93812], [93781, 93813], 
[93782, 93814], [93783, 93815], [93784, 93816], [93785, 93817], [93786, 93818], [93787, 93819], [93788, 93820], [93789, 93821], [93790, 93822], [93791, 93823], [125184, 125218], [125185, 125219], [125186, 125220], [125187, 125221], [125188, 125222], [125189, 125223], [125190, 125224], [125191, 125225], [125192, 125226], [125193, 125227], [125194, 125228], [125195, 125229], [125196, 125230], [125197, 125231], [125198, 125232], [125199, 125233], [125200, 125234], [125201, 125235], [125202, 125236], 
[125203, 125237], [125204, 125238], [125205, 125239], [125206, 125240], [125207, 125241], [125208, 125242], [125209, 125243], [125210, 125244], [125211, 125245], [125212, 125246], [125213, 125247], [125214, 125248], [125215, 125249], [125216, 125250], [125217, 125251], [7838, 223], [8072, 8064], [8073, 8065], [8074, 8066], [8075, 8067], [8076, 8068], [8077, 8069], [8078, 8070], [8079, 8071], [8088, 8080], [8089, 8081], [8090, 8082], [8091, 8083], [8092, 8084], [8093, 8085], [8094, 8086], [8095, 8087], 
[8104, 8096], [8105, 8097], [8106, 8098], [8107, 8099], [8108, 8100], [8109, 8101], [8110, 8102], [8111, 8103], [8124, 8115], [8140, 8131], [8188, 8179],]), inverseFoldMap$1 = new Map(), $jscomp$iter$0 = $jscomp.makeIterator(foldMap), $jscomp$key$$jscomp$destructuring$var0 = $jscomp$iter$0.next(); !$jscomp$key$$jscomp$destructuring$var0.done; $jscomp$key$$jscomp$destructuring$var0 = $jscomp$iter$0.next()) {
  var $jscomp$destructuring$var0 = $jscomp$key$$jscomp$destructuring$var0.value, $jscomp$destructuring$var1 = $jscomp.makeIterator($jscomp$destructuring$var0), c = $jscomp$destructuring$var1.next().value, d = $jscomp$destructuring$var1.next().value;
  inverseFoldMap$1.has(d) || inverseFoldMap$1.set(d, []);
  inverseFoldMap$1.get(d).push(c);
}
var extraWordCharacters = new Set([383, 8490]), category = new Map();
category.set("Cased_Letter", [65, 91, 97, 123, 181, 182, 192, 215, 216, 247, 248, 443, 444, 448, 452, 660, 661, 688, 880, 884, 886, 888, 891, 894, 895, 896, 902, 903, 904, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1162, 1328, 1329, 1367, 1376, 1417, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4349, 4352, 5024, 5110, 5112, 5118, 7296, 7305, 7312, 7355, 7357, 7360, 7424, 7468, 7531, 7544, 7545, 7579, 7680, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 
8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8473, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8495, 8501, 8505, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8579, 8581, 11264, 11311, 11312, 11359, 11360, 11388, 11390, 11493, 11499, 11503, 11506, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 42560, 42606, 42624, 42652, 42786, 42864, 42865, 42888, 42891, 
42895, 42896, 42944, 42946, 42951, 43002, 43003, 43824, 43867, 43872, 43880, 43888, 43968, 64256, 64263, 64275, 64280, 65313, 65339, 65345, 65371, 66560, 66640, 66736, 66772, 66776, 66812, 68736, 68787, 68800, 68851, 71840, 71904, 93760, 93824, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 
120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 125184, 125252]);
category.set("Close_Punctuation", [41, 42, 93, 94, 125, 126, 3899, 3900, 3901, 3902, 5788, 5789, 8262, 8263, 8318, 8319, 8334, 8335, 8969, 8970, 8971, 8972, 9002, 9003, 10089, 10090, 10091, 10092, 10093, 10094, 10095, 10096, 10097, 10098, 10099, 10100, 10101, 10102, 10182, 10183, 10215, 10216, 10217, 10218, 10219, 10220, 10221, 10222, 10223, 10224, 10628, 10629, 10630, 10631, 10632, 10633, 10634, 10635, 10636, 10637, 10638, 10639, 10640, 10641, 10642, 10643, 10644, 10645, 10646, 10647, 10648, 10649, 
10713, 10714, 10715, 10716, 10749, 10750, 11811, 11812, 11813, 11814, 11815, 11816, 11817, 11818, 12297, 12298, 12299, 12300, 12301, 12302, 12303, 12304, 12305, 12306, 12309, 12310, 12311, 12312, 12313, 12314, 12315, 12316, 12318, 12320, 64830, 64831, 65048, 65049, 65078, 65079, 65080, 65081, 65082, 65083, 65084, 65085, 65086, 65087, 65088, 65089, 65090, 65091, 65092, 65093, 65096, 65097, 65114, 65115, 65116, 65117, 65118, 65119, 65289, 65290, 65341, 65342, 65373, 65374, 65376, 65377, 65379, 65380]);
category.set("Connector_Punctuation", [95, 96, 8255, 8257, 8276, 8277, 65075, 65077, 65101, 65104, 65343, 65344]);
category.set("Control", [0, 32, 127, 160]);
category.set("Currency_Symbol", [36, 37, 162, 166, 1423, 1424, 1547, 1548, 2046, 2048, 2546, 2548, 2555, 2556, 2801, 2802, 3065, 3066, 3647, 3648, 6107, 6108, 8352, 8384, 43064, 43065, 65020, 65021, 65129, 65130, 65284, 65285, 65504, 65506, 65509, 65511, 73693, 73697, 123647, 123648, 126128, 126129]);
category.set("Dash_Punctuation", [45, 46, 1418, 1419, 1470, 1471, 5120, 5121, 6150, 6151, 8208, 8214, 11799, 11800, 11802, 11803, 11834, 11836, 11840, 11841, 12316, 12317, 12336, 12337, 12448, 12449, 65073, 65075, 65112, 65113, 65123, 65124, 65293, 65294]);
category.set("Decimal_Number", [48, 58, 1632, 1642, 1776, 1786, 1984, 1994, 2406, 2416, 2534, 2544, 2662, 2672, 2790, 2800, 2918, 2928, 3046, 3056, 3174, 3184, 3302, 3312, 3430, 3440, 3558, 3568, 3664, 3674, 3792, 3802, 3872, 3882, 4160, 4170, 4240, 4250, 6112, 6122, 6160, 6170, 6470, 6480, 6608, 6618, 6784, 6794, 6800, 6810, 6992, 7002, 7088, 7098, 7232, 7242, 7248, 7258, 42528, 42538, 43216, 43226, 43264, 43274, 43472, 43482, 43504, 43514, 43600, 43610, 44016, 44026, 65296, 65306, 66720, 66730, 
68912, 68922, 69734, 69744, 69872, 69882, 69942, 69952, 70096, 70106, 70384, 70394, 70736, 70746, 70864, 70874, 71248, 71258, 71360, 71370, 71472, 71482, 71904, 71914, 72784, 72794, 73040, 73050, 73120, 73130, 92768, 92778, 93008, 93018, 120782, 120832, 123200, 123210, 123632, 123642, 125264, 125274]);
category.set("Enclosing_Mark", [1160, 1162, 6846, 6847, 8413, 8417, 8418, 8421, 42608, 42611]);
category.set("Final_Punctuation", [187, 188, 8217, 8218, 8221, 8222, 8250, 8251, 11779, 11780, 11781, 11782, 11786, 11787, 11789, 11790, 11805, 11806, 11809, 11810]);
category.set("Format", [173, 174, 1536, 1542, 1564, 1565, 1757, 1758, 1807, 1808, 2274, 2275, 6158, 6159, 8203, 8208, 8234, 8239, 8288, 8293, 8294, 8304, 65279, 65280, 65529, 65532, 69821, 69822, 69837, 69838, 78896, 78905, 113824, 113828, 119155, 119163, 917505, 917506, 917536, 917632]);
category.set("Initial_Punctuation", [171, 172, 8216, 8217, 8219, 8221, 8223, 8224, 8249, 8250, 11778, 11779, 11780, 11781, 11785, 11786, 11788, 11789, 11804, 11805, 11808, 11809]);
category.set("Letter", [65, 91, 97, 123, 170, 171, 181, 182, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 880, 885, 886, 888, 890, 894, 895, 896, 902, 903, 904, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1488, 1515, 1519, 1523, 1568, 1611, 1646, 1648, 1649, 1748, 1749, 1750, 1765, 1767, 1774, 1776, 1786, 1789, 1791, 1792, 1808, 1809, 1810, 1840, 1869, 1958, 1969, 1970, 1994, 2027, 2036, 2038, 2042, 2043, 2048, 
2070, 2074, 2075, 2084, 2085, 2088, 2089, 2112, 2137, 2144, 2155, 2208, 2229, 2230, 2238, 2308, 2362, 2365, 2366, 2384, 2385, 2392, 2402, 2417, 2433, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2493, 2494, 2510, 2511, 2524, 2526, 2527, 2530, 2544, 2546, 2556, 2557, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2649, 2653, 2654, 2655, 2674, 2677, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2749, 2750, 2768, 
2769, 2784, 2786, 2809, 2810, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2877, 2878, 2908, 2910, 2911, 2914, 2929, 2930, 2947, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3024, 3025, 3077, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3134, 3160, 3163, 3168, 3170, 3200, 3201, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3261, 3262, 3294, 3295, 3296, 3298, 3313, 3315, 3333, 3341, 3342, 
3345, 3346, 3387, 3389, 3390, 3406, 3407, 3412, 3415, 3423, 3426, 3450, 3456, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3585, 3633, 3634, 3636, 3648, 3655, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3761, 3762, 3764, 3773, 3774, 3776, 3781, 3782, 3783, 3804, 3808, 3840, 3841, 3904, 3912, 3913, 3949, 3976, 3981, 4096, 4139, 4159, 4160, 4176, 4182, 4186, 4190, 4193, 4194, 4197, 4199, 4206, 4209, 4213, 4226, 4238, 4239, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 
4347, 4348, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5873, 5881, 5888, 5901, 5902, 5906, 5920, 5938, 5952, 5970, 5984, 5997, 5998, 6001, 6016, 6068, 6103, 6104, 6108, 6109, 6176, 6265, 6272, 6277, 6279, 6313, 6314, 6315, 6320, 6390, 6400, 6431, 6480, 6510, 6512, 6517, 6528, 
6572, 6576, 6602, 6656, 6679, 6688, 6741, 6823, 6824, 6917, 6964, 6981, 6988, 7043, 7073, 7086, 7088, 7098, 7142, 7168, 7204, 7245, 7248, 7258, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 7401, 7405, 7406, 7412, 7413, 7415, 7418, 7419, 7424, 7616, 7680, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8305, 8306, 8319, 8320, 8336, 
8349, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8473, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8495, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8579, 8581, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11503, 11506, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11648, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11823, 11824, 12293, 12295, 12337, 12342, 12347, 12349, 12353, 
12439, 12445, 12448, 12449, 12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42528, 42538, 42540, 42560, 42607, 42623, 42654, 42656, 42726, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43010, 43011, 43014, 43015, 43019, 43020, 43043, 43072, 43124, 43138, 43188, 43250, 43256, 43259, 43260, 43261, 43263, 43274, 43302, 43312, 43335, 43360, 43389, 43396, 43443, 43471, 43472, 43488, 
43493, 43494, 43504, 43514, 43519, 43520, 43561, 43584, 43587, 43588, 43596, 43616, 43639, 43642, 43643, 43646, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43715, 43739, 43742, 43744, 43755, 43762, 43765, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44003, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64286, 64287, 64297, 64298, 64311, 64312, 64317, 64318, 
64319, 64320, 64322, 64323, 64325, 64326, 64434, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65020, 65136, 65141, 65142, 65277, 65313, 65339, 65345, 65371, 65382, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 66176, 66205, 66208, 66257, 66304, 66336, 66349, 66369, 66370, 66378, 66384, 66422, 66432, 66462, 66464, 66500, 66504, 66512, 66560, 66718, 66736, 66772, 66776, 66812, 66816, 
66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68097, 68112, 68116, 68117, 68120, 68121, 68150, 68192, 68221, 68224, 68253, 68288, 68296, 68297, 68325, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68736, 68787, 68800, 68851, 68864, 68900, 69376, 69405, 69415, 
69416, 69424, 69446, 69600, 69623, 69635, 69688, 69763, 69808, 69840, 69865, 69891, 69927, 69956, 69957, 69968, 70003, 70006, 70007, 70019, 70067, 70081, 70085, 70106, 70107, 70108, 70109, 70144, 70162, 70163, 70188, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 70320, 70367, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70461, 70462, 70480, 70481, 70493, 70498, 70656, 70709, 70727, 70731, 70751, 70752, 70784, 70832, 70852, 70854, 70855, 
70856, 71040, 71087, 71128, 71132, 71168, 71216, 71236, 71237, 71296, 71339, 71352, 71353, 71424, 71451, 71680, 71724, 71840, 71904, 71935, 71936, 72096, 72104, 72106, 72145, 72161, 72162, 72163, 72164, 72192, 72193, 72203, 72243, 72250, 72251, 72272, 72273, 72284, 72330, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72751, 72768, 72769, 72818, 72848, 72960, 72967, 72968, 72970, 72971, 73009, 73030, 73031, 73056, 73062, 73063, 73065, 73066, 73098, 73112, 73113, 73440, 73459, 73728, 74650, 74880, 
75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92880, 92910, 92928, 92976, 92992, 92996, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94032, 94033, 94099, 94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 
119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 123136, 123181, 123191, 123198, 123214, 123215, 123584, 123628, 124928, 125125, 125184, 125252, 125259, 125260, 126464, 126468, 126469, 126496, 126497, 
126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 
173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102]);
category.set("Letter_Number", [5870, 5873, 8544, 8579, 8581, 8585, 12295, 12296, 12321, 12330, 12344, 12347, 42726, 42736, 65856, 65909, 66369, 66370, 66378, 66379, 66513, 66518, 74752, 74863]);
category.set("Line_Separator", [8232, 8233]);
category.set("Lowercase_Letter", [97, 123, 181, 182, 223, 247, 248, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 
345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 385, 387, 388, 389, 390, 392, 393, 396, 398, 402, 403, 405, 406, 409, 412, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 426, 428, 429, 430, 432, 433, 436, 437, 438, 439, 441, 443, 445, 448, 454, 455, 457, 458, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 480, 481, 
482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 499, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 570, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 660, 661, 688, 881, 882, 883, 884, 
887, 888, 891, 894, 912, 913, 940, 975, 976, 978, 981, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1012, 1013, 1014, 1016, 1017, 1019, 1021, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 
1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 
1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1376, 1417, 4304, 4347, 4349, 4352, 5112, 5118, 7296, 7305, 7424, 7468, 7531, 7544, 
7545, 7579, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 
7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7838, 7839, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 
7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 7958, 
7968, 7976, 7984, 7992, 8000, 8006, 8016, 8024, 8032, 8040, 8048, 8062, 8064, 8072, 8080, 8088, 8096, 8104, 8112, 8117, 8118, 8120, 8126, 8127, 8130, 8133, 8134, 8136, 8144, 8148, 8150, 8152, 8160, 8168, 8178, 8181, 8182, 8184, 8458, 8459, 8462, 8464, 8467, 8468, 8495, 8496, 8500, 8501, 8505, 8506, 8508, 8510, 8518, 8522, 8526, 8527, 8580, 8581, 11312, 11359, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11377, 11378, 11379, 11381, 11382, 11388, 11393, 11394, 11395, 11396, 
11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 
11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11493, 11500, 11501, 11502, 11503, 11507, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 
42597, 42598, 42599, 42600, 42601, 42602, 42603, 42604, 42605, 42606, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42652, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42802, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 
42823, 42824, 42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42864, 42865, 42873, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42888, 42892, 42893, 42894, 42895, 42897, 42898, 42899, 42902, 42903, 42904, 42905, 42906, 42907, 42908, 
42909, 42910, 42911, 42912, 42913, 42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42927, 42928, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42944, 42947, 42948, 43002, 43003, 43824, 43867, 43872, 43880, 43888, 43968, 64256, 64263, 64275, 64280, 65345, 65371, 66600, 66640, 66776, 66812, 68800, 68851, 71872, 71904, 93792, 93824, 119834, 119860, 119886, 119893, 119894, 119912, 119938, 119964, 119990, 119994, 119995, 119996, 119997, 120004, 120005, 120016, 
120042, 120068, 120094, 120120, 120146, 120172, 120198, 120224, 120250, 120276, 120302, 120328, 120354, 120380, 120406, 120432, 120458, 120486, 120514, 120539, 120540, 120546, 120572, 120597, 120598, 120604, 120630, 120655, 120656, 120662, 120688, 120713, 120714, 120720, 120746, 120771, 120772, 120778, 120779, 120780, 125218, 125252]);
category.set("Mark", [768, 880, 1155, 1162, 1425, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1552, 1563, 1611, 1632, 1648, 1649, 1750, 1757, 1759, 1765, 1767, 1769, 1770, 1774, 1809, 1810, 1840, 1867, 1958, 1969, 2027, 2036, 2045, 2046, 2070, 2074, 2075, 2084, 2085, 2088, 2089, 2094, 2137, 2140, 2259, 2274, 2275, 2308, 2362, 2365, 2366, 2384, 2385, 2392, 2402, 2404, 2433, 2436, 2492, 2493, 2494, 2501, 2503, 2505, 2507, 2510, 2519, 2520, 2530, 2532, 2558, 2559, 2561, 2564, 2620, 2621, 2622, 
2627, 2631, 2633, 2635, 2638, 2641, 2642, 2672, 2674, 2677, 2678, 2689, 2692, 2748, 2749, 2750, 2758, 2759, 2762, 2763, 2766, 2786, 2788, 2810, 2816, 2817, 2820, 2876, 2877, 2878, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2914, 2916, 2946, 2947, 3006, 3011, 3014, 3017, 3018, 3022, 3031, 3032, 3072, 3077, 3134, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3170, 3172, 3201, 3204, 3260, 3261, 3262, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3298, 3300, 3328, 3332, 3387, 3389, 3390, 3397, 3398, 3401, 3402, 
3406, 3415, 3416, 3426, 3428, 3458, 3460, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3570, 3572, 3633, 3634, 3636, 3643, 3655, 3663, 3761, 3762, 3764, 3773, 3784, 3790, 3864, 3866, 3893, 3894, 3895, 3896, 3897, 3898, 3902, 3904, 3953, 3973, 3974, 3976, 3981, 3992, 3993, 4029, 4038, 4039, 4139, 4159, 4182, 4186, 4190, 4193, 4194, 4197, 4199, 4206, 4209, 4213, 4226, 4238, 4239, 4240, 4250, 4254, 4957, 4960, 5906, 5909, 5938, 5941, 5970, 5972, 6002, 6004, 6068, 6100, 6109, 6110, 6155, 6158, 6277, 
6279, 6313, 6314, 6432, 6444, 6448, 6460, 6679, 6684, 6741, 6751, 6752, 6781, 6783, 6784, 6832, 6847, 6912, 6917, 6964, 6981, 7019, 7028, 7040, 7043, 7073, 7086, 7142, 7156, 7204, 7224, 7376, 7379, 7380, 7401, 7405, 7406, 7412, 7413, 7415, 7418, 7616, 7674, 7675, 7680, 8400, 8433, 11503, 11506, 11647, 11648, 11744, 11776, 12330, 12336, 12441, 12443, 42607, 42611, 42612, 42622, 42654, 42656, 42736, 42738, 43010, 43011, 43014, 43015, 43019, 43020, 43043, 43048, 43136, 43138, 43188, 43206, 43232, 43250, 
43263, 43264, 43302, 43310, 43335, 43348, 43392, 43396, 43443, 43457, 43493, 43494, 43561, 43575, 43587, 43588, 43596, 43598, 43643, 43646, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43755, 43760, 43765, 43767, 44003, 44011, 44012, 44014, 64286, 64287, 65024, 65040, 65056, 65072, 66045, 66046, 66272, 66273, 66422, 66427, 68097, 68100, 68101, 68103, 68108, 68112, 68152, 68155, 68159, 68160, 68325, 68327, 68900, 68904, 69446, 69457, 69632, 69635, 69688, 69703, 69759, 69763, 
69808, 69819, 69888, 69891, 69927, 69941, 69957, 69959, 70003, 70004, 70016, 70019, 70067, 70081, 70089, 70093, 70188, 70200, 70206, 70207, 70367, 70379, 70400, 70404, 70459, 70461, 70462, 70469, 70471, 70473, 70475, 70478, 70487, 70488, 70498, 70500, 70502, 70509, 70512, 70517, 70709, 70727, 70750, 70751, 70832, 70852, 71087, 71094, 71096, 71105, 71132, 71134, 71216, 71233, 71339, 71352, 71453, 71468, 71724, 71739, 72145, 72152, 72154, 72161, 72164, 72165, 72193, 72203, 72243, 72250, 72251, 72255, 
72263, 72264, 72273, 72284, 72330, 72346, 72751, 72759, 72760, 72768, 72850, 72872, 72873, 72887, 73009, 73015, 73018, 73019, 73020, 73022, 73023, 73030, 73031, 73032, 73098, 73103, 73104, 73106, 73107, 73112, 73459, 73463, 92912, 92917, 92976, 92983, 94031, 94032, 94033, 94088, 94095, 94099, 113821, 113823, 119141, 119146, 119149, 119155, 119163, 119171, 119173, 119180, 119210, 119214, 119362, 119365, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121499, 121504, 121505, 121520, 
122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123184, 123191, 123628, 123632, 125136, 125143, 125252, 125259, 917760, 918000]);
category.set("Math_Symbol", [43, 44, 60, 63, 124, 125, 126, 127, 172, 173, 177, 178, 215, 216, 247, 248, 1014, 1015, 1542, 1545, 8260, 8261, 8274, 8275, 8314, 8317, 8330, 8333, 8472, 8473, 8512, 8517, 8523, 8524, 8592, 8597, 8602, 8604, 8608, 8609, 8611, 8612, 8614, 8615, 8622, 8623, 8654, 8656, 8658, 8659, 8660, 8661, 8692, 8960, 8992, 8994, 9084, 9085, 9115, 9140, 9180, 9186, 9655, 9656, 9665, 9666, 9720, 9728, 9839, 9840, 10176, 10181, 10183, 10214, 10224, 10240, 10496, 10627, 10649, 10712, 10716, 
10748, 10750, 11008, 11056, 11077, 11079, 11085, 64297, 64298, 65122, 65123, 65124, 65127, 65291, 65292, 65308, 65311, 65372, 65373, 65374, 65375, 65506, 65507, 65513, 65517, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 126704, 126706]);
category.set("Modifier_Letter", [688, 706, 710, 722, 736, 741, 748, 749, 750, 751, 884, 885, 890, 891, 1369, 1370, 1600, 1601, 1765, 1767, 2036, 2038, 2042, 2043, 2074, 2075, 2084, 2085, 2088, 2089, 2417, 2418, 3654, 3655, 3782, 3783, 4348, 4349, 6103, 6104, 6211, 6212, 6823, 6824, 7288, 7294, 7468, 7531, 7544, 7545, 7579, 7616, 8305, 8306, 8319, 8320, 8336, 8349, 11388, 11390, 11631, 11632, 11823, 11824, 12293, 12294, 12337, 12342, 12347, 12348, 12445, 12447, 12540, 12543, 40981, 40982, 42232, 42238, 
42508, 42509, 42623, 42624, 42652, 42654, 42775, 42784, 42864, 42865, 42888, 42889, 43000, 43002, 43471, 43472, 43494, 43495, 43632, 43633, 43741, 43742, 43763, 43765, 43868, 43872, 65392, 65393, 65438, 65440, 92992, 92996, 94099, 94112, 94176, 94178, 94179, 94180, 123191, 123198, 125259, 125260]);
category.set("Modifier_Symbol", [94, 95, 96, 97, 168, 169, 175, 176, 180, 181, 184, 185, 706, 710, 722, 736, 741, 748, 749, 750, 751, 768, 885, 886, 900, 902, 8125, 8126, 8127, 8130, 8141, 8144, 8157, 8160, 8173, 8176, 8189, 8191, 12443, 12445, 42752, 42775, 42784, 42786, 42889, 42891, 43867, 43868, 64434, 64450, 65342, 65343, 65344, 65345, 65507, 65508, 127995, 128000]);
category.set("Nonspacing_Mark", [768, 880, 1155, 1160, 1425, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1552, 1563, 1611, 1632, 1648, 1649, 1750, 1757, 1759, 1765, 1767, 1769, 1770, 1774, 1809, 1810, 1840, 1867, 1958, 1969, 2027, 2036, 2045, 2046, 2070, 2074, 2075, 2084, 2085, 2088, 2089, 2094, 2137, 2140, 2259, 2274, 2275, 2307, 2362, 2363, 2364, 2365, 2369, 2377, 2381, 2382, 2385, 2392, 2402, 2404, 2433, 2434, 2492, 2493, 2497, 2501, 2509, 2510, 2530, 2532, 2558, 2559, 2561, 2563, 2620, 
2621, 2625, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2672, 2674, 2677, 2678, 2689, 2691, 2748, 2749, 2753, 2758, 2759, 2761, 2765, 2766, 2786, 2788, 2810, 2816, 2817, 2818, 2876, 2877, 2879, 2880, 2881, 2885, 2893, 2894, 2902, 2903, 2914, 2916, 2946, 2947, 3008, 3009, 3021, 3022, 3072, 3073, 3076, 3077, 3134, 3137, 3142, 3145, 3146, 3150, 3157, 3159, 3170, 3172, 3201, 3202, 3260, 3261, 3263, 3264, 3270, 3271, 3276, 3278, 3298, 3300, 3328, 3330, 3387, 3389, 3393, 3397, 3405, 3406, 3426, 3428, 3530, 
3531, 3538, 3541, 3542, 3543, 3633, 3634, 3636, 3643, 3655, 3663, 3761, 3762, 3764, 3773, 3784, 3790, 3864, 3866, 3893, 3894, 3895, 3896, 3897, 3898, 3953, 3967, 3968, 3973, 3974, 3976, 3981, 3992, 3993, 4029, 4038, 4039, 4141, 4145, 4146, 4152, 4153, 4155, 4157, 4159, 4184, 4186, 4190, 4193, 4209, 4213, 4226, 4227, 4229, 4231, 4237, 4238, 4253, 4254, 4957, 4960, 5906, 5909, 5938, 5941, 5970, 5972, 6002, 6004, 6068, 6070, 6071, 6078, 6086, 6087, 6089, 6100, 6109, 6110, 6155, 6158, 6277, 6279, 6313, 
6314, 6432, 6435, 6439, 6441, 6450, 6451, 6457, 6460, 6679, 6681, 6683, 6684, 6742, 6743, 6744, 6751, 6752, 6753, 6754, 6755, 6757, 6765, 6771, 6781, 6783, 6784, 6832, 6846, 6912, 6916, 6964, 6965, 6966, 6971, 6972, 6973, 6978, 6979, 7019, 7028, 7040, 7042, 7074, 7078, 7080, 7082, 7083, 7086, 7142, 7143, 7144, 7146, 7149, 7150, 7151, 7154, 7212, 7220, 7222, 7224, 7376, 7379, 7380, 7393, 7394, 7401, 7405, 7406, 7412, 7413, 7416, 7418, 7616, 7674, 7675, 7680, 8400, 8413, 8417, 8418, 8421, 8433, 11503, 
11506, 11647, 11648, 11744, 11776, 12330, 12334, 12441, 12443, 42607, 42608, 42612, 42622, 42654, 42656, 42736, 42738, 43010, 43011, 43014, 43015, 43019, 43020, 43045, 43047, 43204, 43206, 43232, 43250, 43263, 43264, 43302, 43310, 43335, 43346, 43392, 43395, 43443, 43444, 43446, 43450, 43452, 43454, 43493, 43494, 43561, 43567, 43569, 43571, 43573, 43575, 43587, 43588, 43596, 43597, 43644, 43645, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43756, 43758, 43766, 43767, 44005, 
44006, 44008, 44009, 44013, 44014, 64286, 64287, 65024, 65040, 65056, 65072, 66045, 66046, 66272, 66273, 66422, 66427, 68097, 68100, 68101, 68103, 68108, 68112, 68152, 68155, 68159, 68160, 68325, 68327, 68900, 68904, 69446, 69457, 69633, 69634, 69688, 69703, 69759, 69762, 69811, 69815, 69817, 69819, 69888, 69891, 69927, 69932, 69933, 69941, 70003, 70004, 70016, 70018, 70070, 70079, 70089, 70093, 70191, 70194, 70196, 70197, 70198, 70200, 70206, 70207, 70367, 70368, 70371, 70379, 70400, 70402, 70459, 
70461, 70464, 70465, 70502, 70509, 70512, 70517, 70712, 70720, 70722, 70725, 70726, 70727, 70750, 70751, 70835, 70841, 70842, 70843, 70847, 70849, 70850, 70852, 71090, 71094, 71100, 71102, 71103, 71105, 71132, 71134, 71219, 71227, 71229, 71230, 71231, 71233, 71339, 71340, 71341, 71342, 71344, 71350, 71351, 71352, 71453, 71456, 71458, 71462, 71463, 71468, 71727, 71736, 71737, 71739, 72148, 72152, 72154, 72156, 72160, 72161, 72193, 72203, 72243, 72249, 72251, 72255, 72263, 72264, 72273, 72279, 72281, 
72284, 72330, 72343, 72344, 72346, 72752, 72759, 72760, 72766, 72767, 72768, 72850, 72872, 72874, 72881, 72882, 72884, 72885, 72887, 73009, 73015, 73018, 73019, 73020, 73022, 73023, 73030, 73031, 73032, 73104, 73106, 73109, 73110, 73111, 73112, 73459, 73461, 92912, 92917, 92976, 92983, 94031, 94032, 94095, 94099, 113821, 113823, 119143, 119146, 119163, 119171, 119173, 119180, 119210, 119214, 119362, 119365, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121499, 121504, 121505, 121520, 
122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123184, 123191, 123628, 123632, 125136, 125143, 125252, 125259, 917760, 918000]);
category.set("Number", [48, 58, 178, 180, 185, 186, 188, 191, 1632, 1642, 1776, 1786, 1984, 1994, 2406, 2416, 2534, 2544, 2548, 2554, 2662, 2672, 2790, 2800, 2918, 2928, 2930, 2936, 3046, 3059, 3174, 3184, 3192, 3199, 3302, 3312, 3416, 3423, 3430, 3449, 3558, 3568, 3664, 3674, 3792, 3802, 3872, 3892, 4160, 4170, 4240, 4250, 4969, 4989, 5870, 5873, 6112, 6122, 6128, 6138, 6160, 6170, 6470, 6480, 6608, 6619, 6784, 6794, 6800, 6810, 6992, 7002, 7088, 7098, 7232, 7242, 7248, 7258, 8304, 8305, 8308, 8314, 
8320, 8330, 8528, 8579, 8581, 8586, 9312, 9372, 9450, 9472, 10102, 10132, 11517, 11518, 12295, 12296, 12321, 12330, 12344, 12347, 12690, 12694, 12832, 12842, 12872, 12880, 12881, 12896, 12928, 12938, 12977, 12992, 42528, 42538, 42726, 42736, 43056, 43062, 43216, 43226, 43264, 43274, 43472, 43482, 43504, 43514, 43600, 43610, 44016, 44026, 65296, 65306, 65799, 65844, 65856, 65913, 65930, 65932, 66273, 66300, 66336, 66340, 66369, 66370, 66378, 66379, 66513, 66518, 66720, 66730, 67672, 67680, 67705, 
67712, 67751, 67760, 67835, 67840, 67862, 67868, 68028, 68030, 68032, 68048, 68050, 68096, 68160, 68169, 68221, 68223, 68253, 68256, 68331, 68336, 68440, 68448, 68472, 68480, 68521, 68528, 68858, 68864, 68912, 68922, 69216, 69247, 69405, 69415, 69457, 69461, 69714, 69744, 69872, 69882, 69942, 69952, 70096, 70106, 70113, 70133, 70384, 70394, 70736, 70746, 70864, 70874, 71248, 71258, 71360, 71370, 71472, 71484, 71904, 71923, 72784, 72813, 73040, 73050, 73120, 73130, 73664, 73685, 74752, 74863, 92768, 
92778, 93008, 93018, 93019, 93026, 93824, 93847, 119520, 119540, 119648, 119673, 120782, 120832, 123200, 123210, 123632, 123642, 125127, 125136, 125264, 125274, 126065, 126124, 126125, 126128, 126129, 126133, 126209, 126254, 126255, 126270, 127232, 127245]);
category.set("Open_Punctuation", [40, 41, 91, 92, 123, 124, 3898, 3899, 3900, 3901, 5787, 5788, 8218, 8219, 8222, 8223, 8261, 8262, 8317, 8318, 8333, 8334, 8968, 8969, 8970, 8971, 9001, 9002, 10088, 10089, 10090, 10091, 10092, 10093, 10094, 10095, 10096, 10097, 10098, 10099, 10100, 10101, 10181, 10182, 10214, 10215, 10216, 10217, 10218, 10219, 10220, 10221, 10222, 10223, 10627, 10628, 10629, 10630, 10631, 10632, 10633, 10634, 10635, 10636, 10637, 10638, 10639, 10640, 10641, 10642, 10643, 10644, 10645, 
10646, 10647, 10648, 10712, 10713, 10714, 10715, 10748, 10749, 11810, 11811, 11812, 11813, 11814, 11815, 11816, 11817, 11842, 11843, 12296, 12297, 12298, 12299, 12300, 12301, 12302, 12303, 12304, 12305, 12308, 12309, 12310, 12311, 12312, 12313, 12314, 12315, 12317, 12318, 64831, 64832, 65047, 65048, 65077, 65078, 65079, 65080, 65081, 65082, 65083, 65084, 65085, 65086, 65087, 65088, 65089, 65090, 65091, 65092, 65095, 65096, 65113, 65114, 65115, 65116, 65117, 65118, 65288, 65289, 65339, 65340, 65371, 
65372, 65375, 65376, 65378, 65379]);
category.set("Other", [0, 32, 127, 160, 173, 174, 888, 890, 896, 900, 907, 908, 909, 910, 930, 931, 1328, 1329, 1367, 1369, 1419, 1421, 1424, 1425, 1480, 1488, 1515, 1519, 1525, 1542, 1564, 1566, 1757, 1758, 1806, 1808, 1867, 1869, 1970, 1984, 2043, 2045, 2094, 2096, 2111, 2112, 2140, 2142, 2143, 2144, 2155, 2208, 2229, 2230, 2238, 2259, 2274, 2275, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 
2534, 2559, 2561, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2649, 2653, 2654, 2655, 2662, 2679, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2802, 2809, 2816, 2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 
2908, 2910, 2911, 2916, 2918, 2936, 2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 3014, 3017, 3018, 3022, 3024, 3025, 3031, 3032, 3046, 3067, 3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3160, 3163, 3168, 3172, 3174, 3184, 3191, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 
3313, 3315, 3328, 3332, 3333, 3341, 3342, 3345, 3346, 3397, 3398, 3401, 3402, 3408, 3412, 3428, 3430, 3456, 3458, 3460, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3573, 3585, 3643, 3647, 3676, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3774, 3776, 3781, 3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808, 3840, 3912, 3913, 3949, 3953, 3992, 3993, 4029, 4030, 4045, 4046, 4059, 4096, 4294, 4295, 4296, 
4301, 4302, 4304, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4989, 4992, 5018, 5024, 5110, 5112, 5118, 5120, 5789, 5792, 5881, 5888, 5901, 5902, 5909, 5920, 5943, 5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 6016, 6110, 6112, 6122, 6128, 6138, 6144, 6158, 6160, 6170, 6176, 6265, 6272, 6315, 6320, 6390, 6400, 6431, 6432, 6444, 6448, 6460, 6464, 6465, 
6468, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6608, 6619, 6622, 6684, 6686, 6751, 6752, 6781, 6783, 6794, 6800, 6810, 6816, 6830, 6832, 6847, 6912, 6988, 6992, 7037, 7040, 7156, 7164, 7224, 7227, 7242, 7245, 7305, 7312, 7355, 7357, 7368, 7376, 7419, 7424, 7674, 7675, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8133, 8134, 8148, 8150, 8156, 8157, 8176, 8178, 8181, 8182, 8191, 8192, 8203, 8208, 8234, 8239, 8288, 8304, 8306, 
8308, 8335, 8336, 8349, 8352, 8384, 8400, 8433, 8448, 8588, 8592, 9255, 9280, 9291, 9312, 11124, 11126, 11158, 11160, 11311, 11312, 11359, 11360, 11508, 11513, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11633, 11647, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11744, 11856, 11904, 11930, 11931, 12020, 12032, 12246, 12272, 12284, 12288, 12352, 12353, 12439, 12441, 12544, 12549, 12592, 12593, 12687, 12688, 12731, 
12736, 12772, 12784, 12831, 12832, 13055, 13056, 19894, 19904, 40944, 40960, 42125, 42128, 42183, 42192, 42540, 42560, 42744, 42752, 42944, 42946, 42951, 42999, 43052, 43056, 43066, 43072, 43128, 43136, 43206, 43214, 43226, 43232, 43348, 43359, 43389, 43392, 43470, 43471, 43482, 43486, 43519, 43520, 43575, 43584, 43598, 43600, 43610, 43612, 43715, 43739, 43767, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43880, 43888, 44014, 44016, 44026, 44032, 55204, 55216, 55239, 
55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64450, 64467, 64832, 64848, 64912, 64914, 64968, 65008, 65022, 65024, 65050, 65056, 65107, 65108, 65127, 65128, 65132, 65136, 65141, 65142, 65277, 65281, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65504, 65511, 65512, 65519, 65532, 65534, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 
65792, 65795, 65799, 65844, 65847, 65935, 65936, 65948, 65952, 65953, 66000, 66046, 66176, 66205, 66208, 66257, 66272, 66300, 66304, 66340, 66349, 66379, 66384, 66427, 66432, 66462, 66463, 66500, 66504, 66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 66927, 66928, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67671, 67743, 67751, 67760, 67808, 67827, 67828, 67830, 67835, 67868, 
67871, 67898, 67903, 67904, 67968, 68024, 68028, 68048, 68050, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 68159, 68169, 68176, 68185, 68192, 68256, 68288, 68327, 68331, 68343, 68352, 68406, 68409, 68438, 68440, 68467, 68472, 68498, 68505, 68509, 68521, 68528, 68608, 68681, 68736, 68787, 68800, 68851, 68858, 68904, 68912, 68922, 69216, 69247, 69376, 69416, 69424, 69466, 69600, 69623, 69632, 69710, 69714, 69744, 69759, 69821, 69822, 69826, 69840, 69865, 69872, 69882, 
69888, 69941, 69942, 69959, 69968, 70007, 70016, 70094, 70096, 70112, 70113, 70133, 70144, 70162, 70163, 70207, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70314, 70320, 70379, 70384, 70394, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70459, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 70488, 70493, 70500, 70502, 70509, 70512, 70517, 70656, 70746, 70747, 70748, 70749, 70752, 70784, 70856, 70864, 70874, 71040, 71094, 
71096, 71134, 71168, 71237, 71248, 71258, 71264, 71277, 71296, 71353, 71360, 71370, 71424, 71451, 71453, 71468, 71472, 71488, 71680, 71740, 71840, 71923, 71935, 71936, 72096, 72104, 72106, 72152, 72154, 72165, 72192, 72264, 72272, 72355, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72774, 72784, 72813, 72816, 72848, 72850, 72872, 72873, 72887, 72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 73050, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 
73107, 73113, 73120, 73130, 73440, 73465, 73664, 73714, 73727, 74650, 74752, 74863, 74864, 74869, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92768, 92778, 92782, 92784, 92880, 92910, 92912, 92918, 92928, 92998, 93008, 93018, 93019, 93026, 93027, 93048, 93053, 93072, 93760, 93851, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 
113808, 113818, 113820, 113824, 118784, 119030, 119040, 119079, 119081, 119155, 119163, 119273, 119296, 119366, 119520, 119540, 119552, 119639, 119648, 119673, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120780, 120782, 121484, 121499, 
121504, 121505, 121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123184, 123198, 123200, 123210, 123214, 123216, 123584, 123642, 123647, 123648, 124928, 125125, 125127, 125143, 125184, 125260, 125264, 125274, 125278, 125280, 126065, 126133, 126209, 126270, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 
126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 126704, 126706, 126976, 127020, 127024, 127124, 127136, 127151, 127153, 127168, 127169, 127184, 127185, 127222, 127232, 127245, 127248, 127341, 127344, 127405, 127462, 
127491, 127504, 127548, 127552, 127561, 127568, 127570, 127584, 127590, 127744, 128726, 128736, 128749, 128752, 128763, 128768, 128884, 128896, 128985, 128992, 129004, 129024, 129036, 129040, 129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129293, 129394, 129395, 129399, 129402, 129443, 129445, 129451, 129454, 129483, 129485, 129620, 129632, 129646, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 
183984, 191457, 194560, 195102, 917760, 918E3, 1114112]);
category.set("Other_Letter", [170, 171, 186, 187, 443, 444, 448, 452, 660, 661, 1488, 1515, 1519, 1523, 1568, 1600, 1601, 1611, 1646, 1648, 1649, 1748, 1749, 1750, 1774, 1776, 1786, 1789, 1791, 1792, 1808, 1809, 1810, 1840, 1869, 1958, 1969, 1970, 1994, 2027, 2048, 2070, 2112, 2137, 2144, 2155, 2208, 2229, 2230, 2238, 2308, 2362, 2365, 2366, 2384, 2385, 2392, 2402, 2418, 2433, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2493, 2494, 2510, 2511, 2524, 2526, 2527, 2530, 2544, 
2546, 2556, 2557, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2649, 2653, 2654, 2655, 2674, 2677, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2749, 2750, 2768, 2769, 2784, 2786, 2809, 2810, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2877, 2878, 2908, 2910, 2911, 2914, 2929, 2930, 2947, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3024, 
3025, 3077, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3134, 3160, 3163, 3168, 3170, 3200, 3201, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3261, 3262, 3294, 3295, 3296, 3298, 3313, 3315, 3333, 3341, 3342, 3345, 3346, 3387, 3389, 3390, 3406, 3407, 3412, 3415, 3423, 3426, 3450, 3456, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3585, 3633, 3634, 3636, 3648, 3654, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3761, 3762, 3764, 3773, 3774, 3776, 
3781, 3804, 3808, 3840, 3841, 3904, 3912, 3913, 3949, 3976, 3981, 4096, 4139, 4159, 4160, 4176, 4182, 4186, 4190, 4193, 4194, 4197, 4199, 4206, 4209, 4213, 4226, 4238, 4239, 4352, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4992, 5008, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5873, 5881, 5888, 5901, 5902, 5906, 5920, 5938, 5952, 5970, 5984, 5997, 5998, 
6001, 6016, 6068, 6108, 6109, 6176, 6211, 6212, 6265, 6272, 6277, 6279, 6313, 6314, 6315, 6320, 6390, 6400, 6431, 6480, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6656, 6679, 6688, 6741, 6917, 6964, 6981, 6988, 7043, 7073, 7086, 7088, 7098, 7142, 7168, 7204, 7245, 7248, 7258, 7288, 7401, 7405, 7406, 7412, 7413, 7415, 7418, 7419, 8501, 8505, 11568, 11624, 11648, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 12294, 12295, 12348, 
12349, 12353, 12439, 12447, 12448, 12449, 12539, 12543, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 40981, 40982, 42125, 42192, 42232, 42240, 42508, 42512, 42528, 42538, 42540, 42606, 42607, 42656, 42726, 42895, 42896, 42999, 43000, 43003, 43010, 43011, 43014, 43015, 43019, 43020, 43043, 43072, 43124, 43138, 43188, 43250, 43256, 43259, 43260, 43261, 43263, 43274, 43302, 43312, 43335, 43360, 43389, 43396, 43443, 43488, 43493, 43495, 43504, 43514, 
43519, 43520, 43561, 43584, 43587, 43588, 43596, 43616, 43632, 43633, 43639, 43642, 43643, 43646, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43715, 43739, 43741, 43744, 43755, 43762, 43763, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43968, 44003, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64285, 64286, 64287, 64297, 64298, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64434, 64467, 64830, 64848, 
64912, 64914, 64968, 65008, 65020, 65136, 65141, 65142, 65277, 65382, 65392, 65393, 65438, 65440, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 66176, 66205, 66208, 66257, 66304, 66336, 66349, 66369, 66370, 66378, 66384, 66422, 66432, 66462, 66464, 66500, 66504, 66512, 66640, 66718, 66816, 66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 
67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68097, 68112, 68116, 68117, 68120, 68121, 68150, 68192, 68221, 68224, 68253, 68288, 68296, 68297, 68325, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68864, 68900, 69376, 69405, 69415, 69416, 69424, 69446, 69600, 69623, 69635, 69688, 69763, 69808, 69840, 69865, 69891, 69927, 69956, 69957, 69968, 70003, 70006, 
70007, 70019, 70067, 70081, 70085, 70106, 70107, 70108, 70109, 70144, 70162, 70163, 70188, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 70320, 70367, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70461, 70462, 70480, 70481, 70493, 70498, 70656, 70709, 70727, 70731, 70751, 70752, 70784, 70832, 70852, 70854, 70855, 70856, 71040, 71087, 71128, 71132, 71168, 71216, 71236, 71237, 71296, 71339, 71352, 71353, 71424, 71451, 71680, 71724, 71935, 
71936, 72096, 72104, 72106, 72145, 72161, 72162, 72163, 72164, 72192, 72193, 72203, 72243, 72250, 72251, 72272, 72273, 72284, 72330, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72751, 72768, 72769, 72818, 72848, 72960, 72967, 72968, 72970, 72971, 73009, 73030, 73031, 73056, 73062, 73063, 73065, 73066, 73098, 73112, 73113, 73440, 73459, 73728, 74650, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92880, 92910, 92928, 92976, 93027, 93048, 93053, 93072, 93952, 94027, 94032, 
94033, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 123136, 123181, 123214, 123215, 123584, 123628, 124928, 125125, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 
126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102]);
category.set("Other_Number", [178, 180, 185, 186, 188, 191, 2548, 2554, 2930, 2936, 3056, 3059, 3192, 3199, 3416, 3423, 3440, 3449, 3882, 3892, 4969, 4989, 6128, 6138, 6618, 6619, 8304, 8305, 8308, 8314, 8320, 8330, 8528, 8544, 8585, 8586, 9312, 9372, 9450, 9472, 10102, 10132, 11517, 11518, 12690, 12694, 12832, 12842, 12872, 12880, 12881, 12896, 12928, 12938, 12977, 12992, 43056, 43062, 65799, 65844, 65909, 65913, 65930, 65932, 66273, 66300, 66336, 66340, 67672, 67680, 67705, 67712, 67751, 67760, 
67835, 67840, 67862, 67868, 68028, 68030, 68032, 68048, 68050, 68096, 68160, 68169, 68221, 68223, 68253, 68256, 68331, 68336, 68440, 68448, 68472, 68480, 68521, 68528, 68858, 68864, 69216, 69247, 69405, 69415, 69457, 69461, 69714, 69734, 70113, 70133, 71482, 71484, 71914, 71923, 72794, 72813, 73664, 73685, 93019, 93026, 93824, 93847, 119520, 119540, 119648, 119673, 125127, 125136, 126065, 126124, 126125, 126128, 126129, 126133, 126209, 126254, 126255, 126270, 127232, 127245]);
category.set("Other_Punctuation", [33, 36, 37, 40, 42, 43, 44, 45, 46, 48, 58, 60, 63, 65, 92, 93, 161, 162, 167, 168, 182, 184, 191, 192, 894, 895, 903, 904, 1370, 1376, 1417, 1418, 1472, 1473, 1475, 1476, 1478, 1479, 1523, 1525, 1545, 1547, 1548, 1550, 1563, 1564, 1566, 1568, 1642, 1646, 1748, 1749, 1792, 1806, 2039, 2042, 2096, 2111, 2142, 2143, 2404, 2406, 2416, 2417, 2557, 2558, 2678, 2679, 2800, 2801, 3191, 3192, 3204, 3205, 3572, 3573, 3663, 3664, 3674, 3676, 3844, 3859, 3860, 3861, 3973, 
3974, 4048, 4053, 4057, 4059, 4170, 4176, 4347, 4348, 4960, 4969, 5742, 5743, 5867, 5870, 5941, 5943, 6100, 6103, 6104, 6107, 6144, 6150, 6151, 6155, 6468, 6470, 6686, 6688, 6816, 6823, 6824, 6830, 7002, 7009, 7164, 7168, 7227, 7232, 7294, 7296, 7360, 7368, 7379, 7380, 8214, 8216, 8224, 8232, 8240, 8249, 8251, 8255, 8257, 8260, 8263, 8274, 8275, 8276, 8277, 8287, 11513, 11517, 11518, 11520, 11632, 11633, 11776, 11778, 11782, 11785, 11787, 11788, 11790, 11799, 11800, 11802, 11803, 11804, 11806, 11808, 
11818, 11823, 11824, 11834, 11836, 11840, 11841, 11842, 11843, 11856, 12289, 12292, 12349, 12350, 12539, 12540, 42238, 42240, 42509, 42512, 42611, 42612, 42622, 42623, 42738, 42744, 43124, 43128, 43214, 43216, 43256, 43259, 43260, 43261, 43310, 43312, 43359, 43360, 43457, 43470, 43486, 43488, 43612, 43616, 43742, 43744, 43760, 43762, 44011, 44012, 65040, 65047, 65049, 65050, 65072, 65073, 65093, 65095, 65097, 65101, 65104, 65107, 65108, 65112, 65119, 65122, 65128, 65129, 65130, 65132, 65281, 65284, 
65285, 65288, 65290, 65291, 65292, 65293, 65294, 65296, 65306, 65308, 65311, 65313, 65340, 65341, 65377, 65378, 65380, 65382, 65792, 65795, 66463, 66464, 66512, 66513, 66927, 66928, 67671, 67672, 67871, 67872, 67903, 67904, 68176, 68185, 68223, 68224, 68336, 68343, 68409, 68416, 68505, 68509, 69461, 69466, 69703, 69710, 69819, 69821, 69822, 69826, 69952, 69956, 70004, 70006, 70085, 70089, 70093, 70094, 70107, 70108, 70109, 70112, 70200, 70206, 70313, 70314, 70731, 70736, 70747, 70748, 70749, 70750, 
70854, 70855, 71105, 71128, 71233, 71236, 71264, 71277, 71484, 71487, 71739, 71740, 72162, 72163, 72255, 72263, 72346, 72349, 72350, 72355, 72769, 72774, 72816, 72818, 73463, 73465, 73727, 73728, 74864, 74869, 92782, 92784, 92917, 92918, 92983, 92988, 92996, 92997, 93847, 93851, 94178, 94179, 113823, 113824, 121479, 121484, 125278, 125280]);
category.set("Other_Symbol", [166, 167, 169, 170, 174, 175, 176, 177, 1154, 1155, 1421, 1423, 1550, 1552, 1758, 1759, 1769, 1770, 1789, 1791, 2038, 2039, 2554, 2555, 2928, 2929, 3059, 3065, 3066, 3067, 3199, 3200, 3407, 3408, 3449, 3450, 3841, 3844, 3859, 3860, 3861, 3864, 3866, 3872, 3892, 3893, 3894, 3895, 3896, 3897, 4030, 4038, 4039, 4045, 4046, 4048, 4053, 4057, 4254, 4256, 5008, 5018, 5741, 5742, 6464, 6465, 6622, 6656, 7009, 7019, 7028, 7037, 8448, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 
8470, 8472, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8495, 8506, 8508, 8522, 8523, 8524, 8526, 8527, 8528, 8586, 8588, 8597, 8602, 8604, 8608, 8609, 8611, 8612, 8614, 8615, 8622, 8623, 8654, 8656, 8658, 8659, 8660, 8661, 8692, 8960, 8968, 8972, 8992, 8994, 9001, 9003, 9084, 9085, 9115, 9140, 9180, 9186, 9255, 9280, 9291, 9372, 9450, 9472, 9655, 9656, 9665, 9666, 9720, 9728, 9839, 9840, 10088, 10132, 10176, 10240, 10496, 11008, 11056, 11077, 11079, 11085, 11124, 11126, 11158, 11160, 11264, 
11493, 11499, 11904, 11930, 11931, 12020, 12032, 12246, 12272, 12284, 12292, 12293, 12306, 12308, 12320, 12321, 12342, 12344, 12350, 12352, 12688, 12690, 12694, 12704, 12736, 12772, 12800, 12831, 12842, 12872, 12880, 12881, 12896, 12928, 12938, 12977, 12992, 13055, 13056, 13312, 19904, 19968, 42128, 42183, 43048, 43052, 43062, 43064, 43065, 43066, 43639, 43642, 65021, 65022, 65508, 65509, 65512, 65513, 65517, 65519, 65532, 65534, 65847, 65856, 65913, 65930, 65932, 65935, 65936, 65948, 65952, 65953, 
66000, 66045, 67703, 67705, 68296, 68297, 71487, 71488, 73685, 73693, 73697, 73714, 92988, 92992, 92997, 92998, 113820, 113821, 118784, 119030, 119040, 119079, 119081, 119141, 119146, 119149, 119171, 119173, 119180, 119210, 119214, 119273, 119296, 119362, 119365, 119366, 119552, 119639, 120832, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121479, 123215, 123216, 126124, 126125, 126254, 126255, 126976, 127020, 127024, 127124, 127136, 127151, 127153, 127168, 127169, 127184, 127185, 
127222, 127248, 127341, 127344, 127405, 127462, 127491, 127504, 127548, 127552, 127561, 127568, 127570, 127584, 127590, 127744, 127995, 128000, 128726, 128736, 128749, 128752, 128763, 128768, 128884, 128896, 128985, 128992, 129004, 129024, 129036, 129040, 129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129293, 129394, 129395, 129399, 129402, 129443, 129445, 129451, 129454, 129483, 129485, 129620, 129632, 129646, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686]);
category.set("Paragraph_Separator", [8233, 8234]);
category.set("Private_Use", [57344, 63744, 983040, 1048574, 1048576, 1114110]);
category.set("Punctuation", [33, 36, 37, 43, 44, 48, 58, 60, 63, 65, 91, 94, 95, 96, 123, 124, 125, 126, 161, 162, 167, 168, 171, 172, 182, 184, 187, 188, 191, 192, 894, 895, 903, 904, 1370, 1376, 1417, 1419, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1523, 1525, 1545, 1547, 1548, 1550, 1563, 1564, 1566, 1568, 1642, 1646, 1748, 1749, 1792, 1806, 2039, 2042, 2096, 2111, 2142, 2143, 2404, 2406, 2416, 2417, 2557, 2558, 2678, 2679, 2800, 2801, 3191, 3192, 3204, 3205, 3572, 3573, 3663, 3664, 3674, 
3676, 3844, 3859, 3860, 3861, 3898, 3902, 3973, 3974, 4048, 4053, 4057, 4059, 4170, 4176, 4347, 4348, 4960, 4969, 5120, 5121, 5742, 5743, 5787, 5789, 5867, 5870, 5941, 5943, 6100, 6103, 6104, 6107, 6144, 6155, 6468, 6470, 6686, 6688, 6816, 6823, 6824, 6830, 7002, 7009, 7164, 7168, 7227, 7232, 7294, 7296, 7360, 7368, 7379, 7380, 8208, 8232, 8240, 8260, 8261, 8274, 8275, 8287, 8317, 8319, 8333, 8335, 8968, 8972, 9001, 9003, 10088, 10102, 10181, 10183, 10214, 10224, 10627, 10649, 10712, 10716, 10748, 
10750, 11513, 11517, 11518, 11520, 11632, 11633, 11776, 11823, 11824, 11856, 12289, 12292, 12296, 12306, 12308, 12320, 12336, 12337, 12349, 12350, 12448, 12449, 12539, 12540, 42238, 42240, 42509, 42512, 42611, 42612, 42622, 42623, 42738, 42744, 43124, 43128, 43214, 43216, 43256, 43259, 43260, 43261, 43310, 43312, 43359, 43360, 43457, 43470, 43486, 43488, 43612, 43616, 43742, 43744, 43760, 43762, 44011, 44012, 64830, 64832, 65040, 65050, 65072, 65107, 65108, 65122, 65123, 65124, 65128, 65129, 65130, 
65132, 65281, 65284, 65285, 65291, 65292, 65296, 65306, 65308, 65311, 65313, 65339, 65342, 65343, 65344, 65371, 65372, 65373, 65374, 65375, 65382, 65792, 65795, 66463, 66464, 66512, 66513, 66927, 66928, 67671, 67672, 67871, 67872, 67903, 67904, 68176, 68185, 68223, 68224, 68336, 68343, 68409, 68416, 68505, 68509, 69461, 69466, 69703, 69710, 69819, 69821, 69822, 69826, 69952, 69956, 70004, 70006, 70085, 70089, 70093, 70094, 70107, 70108, 70109, 70112, 70200, 70206, 70313, 70314, 70731, 70736, 70747, 
70748, 70749, 70750, 70854, 70855, 71105, 71128, 71233, 71236, 71264, 71277, 71484, 71487, 71739, 71740, 72162, 72163, 72255, 72263, 72346, 72349, 72350, 72355, 72769, 72774, 72816, 72818, 73463, 73465, 73727, 73728, 74864, 74869, 92782, 92784, 92917, 92918, 92983, 92988, 92996, 92997, 93847, 93851, 94178, 94179, 113823, 113824, 121479, 121484, 125278, 125280]);
category.set("Separator", [32, 33, 160, 161, 5760, 5761, 8192, 8203, 8232, 8234, 8239, 8240, 8287, 8288, 12288, 12289]);
category.set("Space_Separator", [32, 33, 160, 161, 5760, 5761, 8192, 8203, 8239, 8240, 8287, 8288, 12288, 12289]);
category.set("Spacing_Mark", [2307, 2308, 2363, 2364, 2366, 2369, 2377, 2381, 2382, 2384, 2434, 2436, 2494, 2497, 2503, 2505, 2507, 2509, 2519, 2520, 2563, 2564, 2622, 2625, 2691, 2692, 2750, 2753, 2761, 2762, 2763, 2765, 2818, 2820, 2878, 2879, 2880, 2881, 2887, 2889, 2891, 2893, 2903, 2904, 3006, 3008, 3009, 3011, 3014, 3017, 3018, 3021, 3031, 3032, 3073, 3076, 3137, 3141, 3202, 3204, 3262, 3263, 3264, 3269, 3271, 3273, 3274, 3276, 3285, 3287, 3330, 3332, 3390, 3393, 3398, 3401, 3402, 3405, 3415, 
3416, 3458, 3460, 3535, 3538, 3544, 3552, 3570, 3572, 3902, 3904, 3967, 3968, 4139, 4141, 4145, 4146, 4152, 4153, 4155, 4157, 4182, 4184, 4194, 4197, 4199, 4206, 4227, 4229, 4231, 4237, 4239, 4240, 4250, 4253, 6070, 6071, 6078, 6086, 6087, 6089, 6435, 6439, 6441, 6444, 6448, 6450, 6451, 6457, 6681, 6683, 6741, 6742, 6743, 6744, 6753, 6754, 6755, 6757, 6765, 6771, 6916, 6917, 6965, 6966, 6971, 6972, 6973, 6978, 6979, 6981, 7042, 7043, 7073, 7074, 7078, 7080, 7082, 7083, 7143, 7144, 7146, 7149, 7150, 
7151, 7154, 7156, 7204, 7212, 7220, 7222, 7393, 7394, 7415, 7416, 12334, 12336, 43043, 43045, 43047, 43048, 43136, 43138, 43188, 43204, 43346, 43348, 43395, 43396, 43444, 43446, 43450, 43452, 43454, 43457, 43567, 43569, 43571, 43573, 43597, 43598, 43643, 43644, 43645, 43646, 43755, 43756, 43758, 43760, 43765, 43766, 44003, 44005, 44006, 44008, 44009, 44011, 44012, 44013, 69632, 69633, 69634, 69635, 69762, 69763, 69808, 69811, 69815, 69817, 69932, 69933, 69957, 69959, 70018, 70019, 70067, 70070, 70079, 
70081, 70188, 70191, 70194, 70196, 70197, 70198, 70368, 70371, 70402, 70404, 70462, 70464, 70465, 70469, 70471, 70473, 70475, 70478, 70487, 70488, 70498, 70500, 70709, 70712, 70720, 70722, 70725, 70726, 70832, 70835, 70841, 70842, 70843, 70847, 70849, 70850, 71087, 71090, 71096, 71100, 71102, 71103, 71216, 71219, 71227, 71229, 71230, 71231, 71340, 71341, 71342, 71344, 71350, 71351, 71456, 71458, 71462, 71463, 71724, 71727, 71736, 71737, 72145, 72148, 72156, 72160, 72164, 72165, 72249, 72250, 72279, 
72281, 72343, 72344, 72751, 72752, 72766, 72767, 72873, 72874, 72881, 72882, 72884, 72885, 73098, 73103, 73107, 73109, 73110, 73111, 73461, 73463, 94033, 94088, 119141, 119143, 119149, 119155]);
category.set("Surrogate", [55296, 57344]);
category.set("Symbol", [36, 37, 43, 44, 60, 63, 94, 95, 96, 97, 124, 125, 126, 127, 162, 167, 168, 170, 172, 173, 174, 178, 180, 181, 184, 185, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 768, 885, 886, 900, 902, 1014, 1015, 1154, 1155, 1421, 1424, 1542, 1545, 1547, 1548, 1550, 1552, 1758, 1759, 1769, 1770, 1789, 1791, 2038, 2039, 2046, 2048, 2546, 2548, 2554, 2556, 2801, 2802, 2928, 2929, 3059, 3067, 3199, 3200, 3407, 3408, 3449, 3450, 3647, 3648, 3841, 3844, 3859, 3860, 3861, 
3864, 3866, 3872, 3892, 3893, 3894, 3895, 3896, 3897, 4030, 4038, 4039, 4045, 4046, 4048, 4053, 4057, 4254, 4256, 5008, 5018, 5741, 5742, 6107, 6108, 6464, 6465, 6622, 6656, 7009, 7019, 7028, 7037, 8125, 8126, 8127, 8130, 8141, 8144, 8157, 8160, 8173, 8176, 8189, 8191, 8260, 8261, 8274, 8275, 8314, 8317, 8330, 8333, 8352, 8384, 8448, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8473, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8495, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8528, 8586, 
8588, 8592, 8968, 8972, 9001, 9003, 9255, 9280, 9291, 9372, 9450, 9472, 10088, 10132, 10181, 10183, 10214, 10224, 10627, 10649, 10712, 10716, 10748, 10750, 11124, 11126, 11158, 11160, 11264, 11493, 11499, 11904, 11930, 11931, 12020, 12032, 12246, 12272, 12284, 12292, 12293, 12306, 12308, 12320, 12321, 12342, 12344, 12350, 12352, 12443, 12445, 12688, 12690, 12694, 12704, 12736, 12772, 12800, 12831, 12842, 12872, 12880, 12881, 12896, 12928, 12938, 12977, 12992, 13055, 13056, 13312, 19904, 19968, 42128, 
42183, 42752, 42775, 42784, 42786, 42889, 42891, 43048, 43052, 43062, 43066, 43639, 43642, 43867, 43868, 64297, 64298, 64434, 64450, 65020, 65022, 65122, 65123, 65124, 65127, 65129, 65130, 65284, 65285, 65291, 65292, 65308, 65311, 65342, 65343, 65344, 65345, 65372, 65373, 65374, 65375, 65504, 65511, 65512, 65519, 65532, 65534, 65847, 65856, 65913, 65930, 65932, 65935, 65936, 65948, 65952, 65953, 66000, 66045, 67703, 67705, 68296, 68297, 71487, 71488, 73685, 73714, 92988, 92992, 92997, 92998, 113820, 
113821, 118784, 119030, 119040, 119079, 119081, 119141, 119146, 119149, 119171, 119173, 119180, 119210, 119214, 119273, 119296, 119362, 119365, 119366, 119552, 119639, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120832, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121479, 123215, 123216, 123647, 123648, 126124, 126125, 126128, 126129, 126254, 126255, 126704, 126706, 
126976, 127020, 127024, 127124, 127136, 127151, 127153, 127168, 127169, 127184, 127185, 127222, 127248, 127341, 127344, 127405, 127462, 127491, 127504, 127548, 127552, 127561, 127568, 127570, 127584, 127590, 127744, 128726, 128736, 128749, 128752, 128763, 128768, 128884, 128896, 128985, 128992, 129004, 129024, 129036, 129040, 129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129293, 129394, 129395, 129399, 129402, 129443, 129445, 129451, 129454, 129483, 129485, 129620, 129632, 
129646, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686]);
category.set("Titlecase_Letter", [453, 454, 456, 457, 459, 460, 498, 499, 8072, 8080, 8088, 8096, 8104, 8112, 8124, 8125, 8140, 8141, 8188, 8189]);
category.set("Unassigned", [888, 890, 896, 900, 907, 908, 909, 910, 930, 931, 1328, 1329, 1367, 1369, 1419, 1421, 1424, 1425, 1480, 1488, 1515, 1519, 1525, 1536, 1565, 1566, 1806, 1807, 1867, 1869, 1970, 1984, 2043, 2045, 2094, 2096, 2111, 2112, 2140, 2142, 2143, 2144, 2155, 2208, 2229, 2230, 2238, 2259, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2534, 2559, 2561, 2564, 2565, 2571, 2575, 2577, 
2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2649, 2653, 2654, 2655, 2662, 2679, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2802, 2809, 2816, 2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2908, 2910, 2911, 2916, 2918, 2936, 2946, 2948, 
2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 3014, 3017, 3018, 3022, 3024, 3025, 3031, 3032, 3046, 3067, 3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3160, 3163, 3168, 3172, 3174, 3184, 3191, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 3313, 3315, 3328, 3332, 3333, 3341, 3342, 3345, 
3346, 3397, 3398, 3401, 3402, 3408, 3412, 3428, 3430, 3456, 3458, 3460, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3573, 3585, 3643, 3647, 3676, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3774, 3776, 3781, 3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808, 3840, 3912, 3913, 3949, 3953, 3992, 3993, 4029, 4030, 4045, 4046, 4059, 4096, 4294, 4295, 4296, 4301, 4302, 4304, 4681, 4682, 4686, 4688, 4695, 
4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4989, 4992, 5018, 5024, 5110, 5112, 5118, 5120, 5789, 5792, 5881, 5888, 5901, 5902, 5909, 5920, 5943, 5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 6016, 6110, 6112, 6122, 6128, 6138, 6144, 6159, 6160, 6170, 6176, 6265, 6272, 6315, 6320, 6390, 6400, 6431, 6432, 6444, 6448, 6460, 6464, 6465, 6468, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 
6608, 6619, 6622, 6684, 6686, 6751, 6752, 6781, 6783, 6794, 6800, 6810, 6816, 6830, 6832, 6847, 6912, 6988, 6992, 7037, 7040, 7156, 7164, 7224, 7227, 7242, 7245, 7305, 7312, 7355, 7357, 7368, 7376, 7419, 7424, 7674, 7675, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8133, 8134, 8148, 8150, 8156, 8157, 8176, 8178, 8181, 8182, 8191, 8192, 8293, 8294, 8306, 8308, 8335, 8336, 8349, 8352, 8384, 8400, 8433, 8448, 8588, 8592, 9255, 
9280, 9291, 9312, 11124, 11126, 11158, 11160, 11311, 11312, 11359, 11360, 11508, 11513, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11633, 11647, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11744, 11856, 11904, 11930, 11931, 12020, 12032, 12246, 12272, 12284, 12288, 12352, 12353, 12439, 12441, 12544, 12549, 12592, 12593, 12687, 12688, 12731, 12736, 12772, 12784, 12831, 12832, 13055, 13056, 19894, 19904, 40944, 
40960, 42125, 42128, 42183, 42192, 42540, 42560, 42744, 42752, 42944, 42946, 42951, 42999, 43052, 43056, 43066, 43072, 43128, 43136, 43206, 43214, 43226, 43232, 43348, 43359, 43389, 43392, 43470, 43471, 43482, 43486, 43519, 43520, 43575, 43584, 43598, 43600, 43610, 43612, 43715, 43739, 43767, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43880, 43888, 44014, 44016, 44026, 44032, 55204, 55216, 55239, 55243, 55292, 55296, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 
64285, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64450, 64467, 64832, 64848, 64912, 64914, 64968, 65008, 65022, 65024, 65050, 65056, 65107, 65108, 65127, 65128, 65132, 65136, 65141, 65142, 65277, 65279, 65280, 65281, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65504, 65511, 65512, 65519, 65529, 65534, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65792, 65795, 65799, 65844, 65847, 65935, 65936, 65948, 
65952, 65953, 66000, 66046, 66176, 66205, 66208, 66257, 66272, 66300, 66304, 66340, 66349, 66379, 66384, 66427, 66432, 66462, 66463, 66500, 66504, 66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 66927, 66928, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67671, 67743, 67751, 67760, 67808, 67827, 67828, 67830, 67835, 67868, 67871, 67898, 67903, 67904, 67968, 68024, 68028, 68048, 
68050, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 68159, 68169, 68176, 68185, 68192, 68256, 68288, 68327, 68331, 68343, 68352, 68406, 68409, 68438, 68440, 68467, 68472, 68498, 68505, 68509, 68521, 68528, 68608, 68681, 68736, 68787, 68800, 68851, 68858, 68904, 68912, 68922, 69216, 69247, 69376, 69416, 69424, 69466, 69600, 69623, 69632, 69710, 69714, 69744, 69759, 69826, 69837, 69838, 69840, 69865, 69872, 69882, 69888, 69941, 69942, 69959, 69968, 70007, 70016, 70094, 
70096, 70112, 70113, 70133, 70144, 70162, 70163, 70207, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70314, 70320, 70379, 70384, 70394, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70459, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 70488, 70493, 70500, 70502, 70509, 70512, 70517, 70656, 70746, 70747, 70748, 70749, 70752, 70784, 70856, 70864, 70874, 71040, 71094, 71096, 71134, 71168, 71237, 71248, 71258, 71264, 71277, 
71296, 71353, 71360, 71370, 71424, 71451, 71453, 71468, 71472, 71488, 71680, 71740, 71840, 71923, 71935, 71936, 72096, 72104, 72106, 72152, 72154, 72165, 72192, 72264, 72272, 72355, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72774, 72784, 72813, 72816, 72848, 72850, 72872, 72873, 72887, 72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 73050, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 73107, 73113, 73120, 73130, 73440, 73465, 73664, 73714, 
73727, 74650, 74752, 74863, 74864, 74869, 74880, 75076, 77824, 78895, 78896, 78905, 82944, 83527, 92160, 92729, 92736, 92767, 92768, 92778, 92782, 92784, 92880, 92910, 92912, 92918, 92928, 92998, 93008, 93018, 93019, 93026, 93027, 93048, 93053, 93072, 93760, 93851, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 113820, 113828, 118784, 
119030, 119040, 119079, 119081, 119273, 119296, 119366, 119520, 119540, 119552, 119639, 119648, 119673, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120780, 120782, 121484, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 122905, 
122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123184, 123198, 123200, 123210, 123214, 123216, 123584, 123642, 123647, 123648, 124928, 125125, 125127, 125143, 125184, 125260, 125264, 125274, 125278, 125280, 126065, 126133, 126209, 126270, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 
126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 126704, 126706, 126976, 127020, 127024, 127124, 127136, 127151, 127153, 127168, 127169, 127184, 127185, 127222, 127232, 127245, 127248, 127341, 127344, 127405, 127462, 127491, 127504, 127548, 127552, 127561, 127568, 127570, 
127584, 127590, 127744, 128726, 128736, 128749, 128752, 128763, 128768, 128884, 128896, 128985, 128992, 129004, 129024, 129036, 129040, 129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129293, 129394, 129395, 129399, 129402, 129443, 129445, 129451, 129454, 129483, 129485, 129620, 129632, 129646, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102, 917505, 917506, 917536, 
917632, 917760, 918E3, 983040, 1048574, 1048576, 1114110, 1114112]);
category.set("Uppercase_Letter", [65, 91, 192, 215, 216, 223, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 
346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 385, 387, 388, 389, 390, 392, 393, 396, 398, 402, 403, 405, 406, 409, 412, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 426, 428, 429, 430, 432, 433, 436, 437, 438, 439, 441, 444, 445, 452, 453, 455, 456, 458, 459, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 480, 481, 482, 
483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 498, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 570, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 880, 881, 882, 883, 886, 887, 895, 896, 
902, 903, 904, 907, 908, 909, 910, 912, 913, 930, 931, 940, 975, 976, 978, 981, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1012, 1013, 1015, 1016, 1017, 1019, 1021, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 
1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 
1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1329, 1367, 4256, 4294, 4295, 4296, 4301, 4302, 5024, 5110, 7312, 
7355, 7357, 7360, 7680, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 
7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7838, 7839, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 
7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 
7952, 7960, 7966, 7976, 7984, 7992, 8000, 8008, 8014, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8040, 8048, 8120, 8124, 8136, 8140, 8152, 8156, 8168, 8173, 8184, 8188, 8450, 8451, 8455, 8456, 8459, 8462, 8464, 8467, 8469, 8470, 8473, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8496, 8500, 8510, 8512, 8517, 8518, 8579, 8580, 11264, 11311, 11360, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11377, 11378, 11379, 11381, 11382, 11390, 11393, 11394, 11395, 11396, 
11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 
11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11499, 11500, 11501, 11502, 11506, 11507, 42560, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 42601, 42602, 
42603, 42604, 42605, 42624, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42786, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42802, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 42827, 42828, 
42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42873, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42891, 42892, 42893, 42894, 42896, 42897, 42898, 42899, 42902, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 42914, 42915, 42916, 
42917, 42918, 42919, 42920, 42921, 42922, 42927, 42928, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42946, 42947, 42948, 42951, 65313, 65339, 66560, 66600, 66736, 66772, 68736, 68787, 71840, 71872, 93760, 93792, 119808, 119834, 119860, 119886, 119912, 119938, 119964, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119990, 120016, 120042, 120068, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120120, 120122, 120123, 120127, 
120128, 120133, 120134, 120135, 120138, 120145, 120172, 120198, 120224, 120250, 120276, 120302, 120328, 120354, 120380, 120406, 120432, 120458, 120488, 120513, 120546, 120571, 120604, 120629, 120662, 120687, 120720, 120745, 120778, 120779, 125184, 125218]);
var property = new Map();
property.set("ASCII", [0, 128]);
property.set("ASCII_Hex_Digit", [48, 58, 65, 71, 97, 103]);
property.set("Alphabetic", [65, 91, 97, 123, 170, 171, 181, 182, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 837, 838, 880, 885, 886, 888, 890, 894, 895, 896, 902, 903, 904, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1456, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1488, 1515, 1519, 1523, 1552, 1563, 1568, 1624, 1625, 1632, 1646, 1748, 1749, 1757, 1761, 1769, 1773, 1776, 1786, 1789, 1791, 1792, 1808, 
1856, 1869, 1970, 1994, 2027, 2036, 2038, 2042, 2043, 2048, 2072, 2074, 2093, 2112, 2137, 2144, 2155, 2208, 2229, 2230, 2238, 2260, 2272, 2275, 2282, 2288, 2364, 2365, 2381, 2382, 2385, 2389, 2404, 2417, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2493, 2501, 2503, 2505, 2507, 2509, 2510, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2544, 2546, 2556, 2557, 2561, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2622, 2627, 2631, 
2633, 2635, 2637, 2641, 2642, 2649, 2653, 2654, 2655, 2672, 2678, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2749, 2758, 2759, 2762, 2763, 2765, 2768, 2769, 2784, 2788, 2809, 2813, 2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2877, 2885, 2887, 2889, 2891, 2893, 2902, 2904, 2908, 2910, 2911, 2916, 2929, 2930, 2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 
3002, 3006, 3011, 3014, 3017, 3018, 3021, 3024, 3025, 3031, 3032, 3072, 3076, 3077, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3149, 3157, 3159, 3160, 3163, 3168, 3172, 3200, 3204, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3261, 3269, 3270, 3273, 3274, 3277, 3285, 3287, 3294, 3295, 3296, 3300, 3313, 3315, 3328, 3332, 3333, 3341, 3342, 3345, 3346, 3387, 3389, 3397, 3398, 3401, 3402, 3405, 3406, 3407, 3412, 3416, 3423, 3428, 3450, 3456, 3458, 3460, 3461, 
3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3535, 3541, 3542, 3543, 3544, 3552, 3570, 3572, 3585, 3643, 3648, 3655, 3661, 3662, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3770, 3771, 3774, 3776, 3781, 3782, 3783, 3789, 3790, 3804, 3808, 3840, 3841, 3904, 3912, 3913, 3949, 3953, 3970, 3976, 3992, 3993, 4029, 4096, 4151, 4152, 4153, 4155, 4160, 4176, 4240, 4250, 4254, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4348, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 
4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5870, 5881, 5888, 5901, 5902, 5908, 5920, 5940, 5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 6016, 6068, 6070, 6089, 6103, 6104, 6108, 6109, 6176, 6265, 6272, 6315, 6320, 6390, 6400, 6431, 6432, 6444, 6448, 6457, 6480, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6656, 6684, 6688, 
6751, 6753, 6773, 6823, 6824, 6912, 6964, 6965, 6980, 6981, 6988, 7040, 7082, 7084, 7088, 7098, 7142, 7143, 7154, 7168, 7223, 7245, 7248, 7258, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 7401, 7405, 7406, 7412, 7413, 7415, 7418, 7419, 7424, 7616, 7655, 7669, 7680, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8305, 8306, 8319, 
8320, 8336, 8349, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8473, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8495, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8585, 9398, 9450, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11503, 11506, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11648, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11744, 11776, 11823, 11824, 12293, 12296, 
12321, 12330, 12337, 12342, 12344, 12349, 12353, 12439, 12445, 12448, 12449, 12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42528, 42538, 42540, 42560, 42607, 42612, 42620, 42623, 42736, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43014, 43015, 43048, 43072, 43124, 43136, 43204, 43205, 43206, 43250, 43256, 43259, 43260, 43261, 43264, 43274, 43307, 43312, 43347, 43360, 43389, 
43392, 43443, 43444, 43456, 43471, 43472, 43488, 43504, 43514, 43519, 43520, 43575, 43584, 43598, 43616, 43639, 43642, 43711, 43712, 43713, 43714, 43715, 43739, 43742, 43744, 43760, 43762, 43766, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44011, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64297, 64298, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64434, 
64467, 64830, 64848, 64912, 64914, 64968, 65008, 65020, 65136, 65141, 65142, 65277, 65313, 65339, 65345, 65371, 65382, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65856, 65909, 66176, 66205, 66208, 66257, 66304, 66336, 66349, 66379, 66384, 66427, 66432, 66462, 66464, 66500, 66504, 66512, 66513, 66518, 66560, 66718, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 67072, 67383, 
67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68192, 68221, 68224, 68253, 68288, 68296, 68297, 68325, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68736, 68787, 68800, 68851, 68864, 68904, 69376, 69405, 69415, 69416, 69424, 69446, 
69600, 69623, 69632, 69702, 69762, 69817, 69840, 69865, 69888, 69939, 69956, 69959, 69968, 70003, 70006, 70007, 70016, 70080, 70081, 70085, 70106, 70107, 70108, 70109, 70144, 70162, 70163, 70197, 70199, 70200, 70206, 70207, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 70320, 70377, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70461, 70469, 70471, 70473, 70475, 70477, 70480, 70481, 70487, 70488, 70493, 70500, 70656, 70722, 
70723, 70726, 70727, 70731, 70751, 70752, 70784, 70850, 70852, 70854, 70855, 70856, 71040, 71094, 71096, 71103, 71128, 71134, 71168, 71231, 71232, 71233, 71236, 71237, 71296, 71350, 71352, 71353, 71424, 71451, 71453, 71467, 71680, 71737, 71840, 71904, 71935, 71936, 72096, 72104, 72106, 72152, 72154, 72160, 72161, 72162, 72163, 72165, 72192, 72243, 72245, 72255, 72272, 72344, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72767, 72768, 72769, 72818, 72848, 72850, 72872, 72873, 72887, 
72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73026, 73027, 73028, 73030, 73032, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 73107, 73111, 73112, 73113, 73440, 73463, 73728, 74650, 74752, 74863, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92880, 92910, 92928, 92976, 92992, 92996, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 
110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 113822, 113823, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 
120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123191, 123198, 123214, 123215, 123584, 123628, 124928, 125125, 125184, 125252, 125255, 125256, 125259, 125260, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 
126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 127280, 127306, 127312, 127338, 127344, 127370, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102]);
property.set("Any", [0, 1114112]);
property.set("Assigned", [0, 888, 890, 896, 900, 907, 908, 909, 910, 930, 931, 1328, 1329, 1367, 1369, 1419, 1421, 1424, 1425, 1480, 1488, 1515, 1519, 1525, 1536, 1565, 1566, 1806, 1807, 1867, 1869, 1970, 1984, 2043, 2045, 2094, 2096, 2111, 2112, 2140, 2142, 2143, 2144, 2155, 2208, 2229, 2230, 2238, 2259, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2534, 2559, 2561, 2564, 2565, 2571, 2575, 2577, 
2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2649, 2653, 2654, 2655, 2662, 2679, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2802, 2809, 2816, 2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2908, 2910, 2911, 2916, 2918, 2936, 2946, 2948, 
2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 3014, 3017, 3018, 3022, 3024, 3025, 3031, 3032, 3046, 3067, 3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3160, 3163, 3168, 3172, 3174, 3184, 3191, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 3313, 3315, 3328, 3332, 3333, 3341, 3342, 3345, 
3346, 3397, 3398, 3401, 3402, 3408, 3412, 3428, 3430, 3456, 3458, 3460, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3573, 3585, 3643, 3647, 3676, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3774, 3776, 3781, 3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808, 3840, 3912, 3913, 3949, 3953, 3992, 3993, 4029, 4030, 4045, 4046, 4059, 4096, 4294, 4295, 4296, 4301, 4302, 4304, 4681, 4682, 4686, 4688, 4695, 
4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4989, 4992, 5018, 5024, 5110, 5112, 5118, 5120, 5789, 5792, 5881, 5888, 5901, 5902, 5909, 5920, 5943, 5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 6016, 6110, 6112, 6122, 6128, 6138, 6144, 6159, 6160, 6170, 6176, 6265, 6272, 6315, 6320, 6390, 6400, 6431, 6432, 6444, 6448, 6460, 6464, 6465, 6468, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 
6608, 6619, 6622, 6684, 6686, 6751, 6752, 6781, 6783, 6794, 6800, 6810, 6816, 6830, 6832, 6847, 6912, 6988, 6992, 7037, 7040, 7156, 7164, 7224, 7227, 7242, 7245, 7305, 7312, 7355, 7357, 7368, 7376, 7419, 7424, 7674, 7675, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8133, 8134, 8148, 8150, 8156, 8157, 8176, 8178, 8181, 8182, 8191, 8192, 8293, 8294, 8306, 8308, 8335, 8336, 8349, 8352, 8384, 8400, 8433, 8448, 8588, 8592, 9255, 
9280, 9291, 9312, 11124, 11126, 11158, 11160, 11311, 11312, 11359, 11360, 11508, 11513, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11633, 11647, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11744, 11856, 11904, 11930, 11931, 12020, 12032, 12246, 12272, 12284, 12288, 12352, 12353, 12439, 12441, 12544, 12549, 12592, 12593, 12687, 12688, 12731, 12736, 12772, 12784, 12831, 12832, 13055, 13056, 19894, 19904, 40944, 
40960, 42125, 42128, 42183, 42192, 42540, 42560, 42744, 42752, 42944, 42946, 42951, 42999, 43052, 43056, 43066, 43072, 43128, 43136, 43206, 43214, 43226, 43232, 43348, 43359, 43389, 43392, 43470, 43471, 43482, 43486, 43519, 43520, 43575, 43584, 43598, 43600, 43610, 43612, 43715, 43739, 43767, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43880, 43888, 44014, 44016, 44026, 44032, 55204, 55216, 55239, 55243, 55292, 55296, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 
64285, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64450, 64467, 64832, 64848, 64912, 64914, 64968, 65008, 65022, 65024, 65050, 65056, 65107, 65108, 65127, 65128, 65132, 65136, 65141, 65142, 65277, 65279, 65280, 65281, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65504, 65511, 65512, 65519, 65529, 65534, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65792, 65795, 65799, 65844, 65847, 65935, 65936, 65948, 
65952, 65953, 66000, 66046, 66176, 66205, 66208, 66257, 66272, 66300, 66304, 66340, 66349, 66379, 66384, 66427, 66432, 66462, 66463, 66500, 66504, 66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 66927, 66928, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67671, 67743, 67751, 67760, 67808, 67827, 67828, 67830, 67835, 67868, 67871, 67898, 67903, 67904, 67968, 68024, 68028, 68048, 
68050, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 68159, 68169, 68176, 68185, 68192, 68256, 68288, 68327, 68331, 68343, 68352, 68406, 68409, 68438, 68440, 68467, 68472, 68498, 68505, 68509, 68521, 68528, 68608, 68681, 68736, 68787, 68800, 68851, 68858, 68904, 68912, 68922, 69216, 69247, 69376, 69416, 69424, 69466, 69600, 69623, 69632, 69710, 69714, 69744, 69759, 69826, 69837, 69838, 69840, 69865, 69872, 69882, 69888, 69941, 69942, 69959, 69968, 70007, 70016, 70094, 
70096, 70112, 70113, 70133, 70144, 70162, 70163, 70207, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70314, 70320, 70379, 70384, 70394, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70459, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 70488, 70493, 70500, 70502, 70509, 70512, 70517, 70656, 70746, 70747, 70748, 70749, 70752, 70784, 70856, 70864, 70874, 71040, 71094, 71096, 71134, 71168, 71237, 71248, 71258, 71264, 71277, 
71296, 71353, 71360, 71370, 71424, 71451, 71453, 71468, 71472, 71488, 71680, 71740, 71840, 71923, 71935, 71936, 72096, 72104, 72106, 72152, 72154, 72165, 72192, 72264, 72272, 72355, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72774, 72784, 72813, 72816, 72848, 72850, 72872, 72873, 72887, 72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 73050, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 73107, 73113, 73120, 73130, 73440, 73465, 73664, 73714, 
73727, 74650, 74752, 74863, 74864, 74869, 74880, 75076, 77824, 78895, 78896, 78905, 82944, 83527, 92160, 92729, 92736, 92767, 92768, 92778, 92782, 92784, 92880, 92910, 92912, 92918, 92928, 92998, 93008, 93018, 93019, 93026, 93027, 93048, 93053, 93072, 93760, 93851, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 113820, 113828, 118784, 
119030, 119040, 119079, 119081, 119273, 119296, 119366, 119520, 119540, 119552, 119639, 119648, 119673, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120780, 120782, 121484, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 122905, 
122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123184, 123198, 123200, 123210, 123214, 123216, 123584, 123642, 123647, 123648, 124928, 125125, 125127, 125143, 125184, 125260, 125264, 125274, 125278, 125280, 126065, 126133, 126209, 126270, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 
126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 126704, 126706, 126976, 127020, 127024, 127124, 127136, 127151, 127153, 127168, 127169, 127184, 127185, 127222, 127232, 127245, 127248, 127341, 127344, 127405, 127462, 127491, 127504, 127548, 127552, 127561, 127568, 127570, 
127584, 127590, 127744, 128726, 128736, 128749, 128752, 128763, 128768, 128884, 128896, 128985, 128992, 129004, 129024, 129036, 129040, 129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129293, 129394, 129395, 129399, 129402, 129443, 129445, 129451, 129454, 129483, 129485, 129620, 129632, 129646, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102, 917505, 917506, 917536, 
917632, 917760, 918E3, 983040, 1048574, 1048576, 1114110]);
property.set("Bidi_Control", [1564, 1565, 8206, 8208, 8234, 8239, 8294, 8298]);
property.set("Bidi_Mirrored", [40, 42, 60, 61, 62, 63, 91, 92, 93, 94, 123, 124, 125, 126, 171, 172, 187, 188, 3898, 3902, 5787, 5789, 8249, 8251, 8261, 8263, 8317, 8319, 8333, 8335, 8512, 8513, 8705, 8709, 8712, 8718, 8721, 8722, 8725, 8727, 8730, 8734, 8735, 8739, 8740, 8741, 8742, 8743, 8747, 8756, 8761, 8762, 8763, 8781, 8786, 8790, 8799, 8801, 8802, 8803, 8804, 8812, 8814, 8845, 8847, 8851, 8856, 8857, 8866, 8868, 8870, 8889, 8894, 8896, 8905, 8910, 8912, 8914, 8918, 8942, 8944, 8960, 8968, 
8972, 8992, 8994, 9001, 9003, 10088, 10102, 10176, 10177, 10179, 10183, 10184, 10186, 10187, 10190, 10195, 10199, 10204, 10207, 10210, 10224, 10627, 10649, 10651, 10657, 10658, 10672, 10680, 10681, 10688, 10694, 10697, 10698, 10702, 10707, 10708, 10710, 10712, 10717, 10721, 10722, 10723, 10726, 10728, 10730, 10740, 10746, 10748, 10750, 10762, 10781, 10782, 10786, 10788, 10789, 10790, 10791, 10793, 10794, 10795, 10799, 10804, 10806, 10812, 10815, 10839, 10841, 10852, 10854, 10858, 10862, 10863, 10865, 
10867, 10869, 10873, 10916, 10918, 10926, 10927, 10967, 10972, 10973, 10974, 10975, 10978, 10983, 10988, 10991, 10995, 10996, 10999, 11004, 11005, 11006, 11262, 11263, 11778, 11782, 11785, 11787, 11788, 11790, 11804, 11806, 11808, 11818, 12296, 12306, 12308, 12316, 65113, 65119, 65124, 65126, 65288, 65290, 65308, 65309, 65310, 65311, 65339, 65340, 65341, 65342, 65371, 65372, 65373, 65374, 65375, 65377, 65378, 65380, 120539, 120540, 120597, 120598, 120655, 120656, 120713, 120714, 120771, 120772]);
property.set("Case_Ignorable", [39, 40, 46, 47, 58, 59, 94, 95, 96, 97, 168, 169, 173, 174, 175, 176, 180, 181, 183, 185, 688, 880, 884, 886, 890, 891, 900, 902, 903, 904, 1155, 1162, 1369, 1370, 1425, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1524, 1525, 1536, 1542, 1552, 1563, 1564, 1565, 1600, 1601, 1611, 1632, 1648, 1649, 1750, 1758, 1759, 1769, 1770, 1774, 1807, 1808, 1809, 1810, 1840, 1867, 1958, 1969, 2027, 2038, 2042, 2043, 2045, 2046, 2070, 2094, 2137, 2140, 2259, 2307, 2362, 
2363, 2364, 2365, 2369, 2377, 2381, 2382, 2385, 2392, 2402, 2404, 2417, 2418, 2433, 2434, 2492, 2493, 2497, 2501, 2509, 2510, 2530, 2532, 2558, 2559, 2561, 2563, 2620, 2621, 2625, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2672, 2674, 2677, 2678, 2689, 2691, 2748, 2749, 2753, 2758, 2759, 2761, 2765, 2766, 2786, 2788, 2810, 2816, 2817, 2818, 2876, 2877, 2879, 2880, 2881, 2885, 2893, 2894, 2902, 2903, 2914, 2916, 2946, 2947, 3008, 3009, 3021, 3022, 3072, 3073, 3076, 3077, 3134, 3137, 3142, 3145, 3146, 
3150, 3157, 3159, 3170, 3172, 3201, 3202, 3260, 3261, 3263, 3264, 3270, 3271, 3276, 3278, 3298, 3300, 3328, 3330, 3387, 3389, 3393, 3397, 3405, 3406, 3426, 3428, 3530, 3531, 3538, 3541, 3542, 3543, 3633, 3634, 3636, 3643, 3654, 3663, 3761, 3762, 3764, 3773, 3782, 3783, 3784, 3790, 3864, 3866, 3893, 3894, 3895, 3896, 3897, 3898, 3953, 3967, 3968, 3973, 3974, 3976, 3981, 3992, 3993, 4029, 4038, 4039, 4141, 4145, 4146, 4152, 4153, 4155, 4157, 4159, 4184, 4186, 4190, 4193, 4209, 4213, 4226, 4227, 4229, 
4231, 4237, 4238, 4253, 4254, 4348, 4349, 4957, 4960, 5906, 5909, 5938, 5941, 5970, 5972, 6002, 6004, 6068, 6070, 6071, 6078, 6086, 6087, 6089, 6100, 6103, 6104, 6109, 6110, 6155, 6159, 6211, 6212, 6277, 6279, 6313, 6314, 6432, 6435, 6439, 6441, 6450, 6451, 6457, 6460, 6679, 6681, 6683, 6684, 6742, 6743, 6744, 6751, 6752, 6753, 6754, 6755, 6757, 6765, 6771, 6781, 6783, 6784, 6823, 6824, 6832, 6847, 6912, 6916, 6964, 6965, 6966, 6971, 6972, 6973, 6978, 6979, 7019, 7028, 7040, 7042, 7074, 7078, 7080, 
7082, 7083, 7086, 7142, 7143, 7144, 7146, 7149, 7150, 7151, 7154, 7212, 7220, 7222, 7224, 7288, 7294, 7376, 7379, 7380, 7393, 7394, 7401, 7405, 7406, 7412, 7413, 7416, 7418, 7468, 7531, 7544, 7545, 7579, 7674, 7675, 7680, 8125, 8126, 8127, 8130, 8141, 8144, 8157, 8160, 8173, 8176, 8189, 8191, 8203, 8208, 8216, 8218, 8228, 8229, 8231, 8232, 8234, 8239, 8288, 8293, 8294, 8304, 8305, 8306, 8319, 8320, 8336, 8349, 8400, 8433, 11388, 11390, 11503, 11506, 11631, 11632, 11647, 11648, 11744, 11776, 11823, 
11824, 12293, 12294, 12330, 12334, 12337, 12342, 12347, 12348, 12441, 12447, 12540, 12543, 40981, 40982, 42232, 42238, 42508, 42509, 42607, 42611, 42612, 42622, 42623, 42624, 42652, 42656, 42736, 42738, 42752, 42786, 42864, 42865, 42888, 42891, 43000, 43002, 43010, 43011, 43014, 43015, 43019, 43020, 43045, 43047, 43204, 43206, 43232, 43250, 43263, 43264, 43302, 43310, 43335, 43346, 43392, 43395, 43443, 43444, 43446, 43450, 43452, 43454, 43471, 43472, 43493, 43495, 43561, 43567, 43569, 43571, 43573, 
43575, 43587, 43588, 43596, 43597, 43632, 43633, 43644, 43645, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43741, 43742, 43756, 43758, 43763, 43765, 43766, 43767, 43867, 43872, 44005, 44006, 44008, 44009, 44013, 44014, 64286, 64287, 64434, 64450, 65024, 65040, 65043, 65044, 65056, 65072, 65106, 65107, 65109, 65110, 65279, 65280, 65287, 65288, 65294, 65295, 65306, 65307, 65342, 65343, 65344, 65345, 65392, 65393, 65438, 65440, 65507, 65508, 65529, 65532, 66045, 66046, 66272, 
66273, 66422, 66427, 68097, 68100, 68101, 68103, 68108, 68112, 68152, 68155, 68159, 68160, 68325, 68327, 68900, 68904, 69446, 69457, 69633, 69634, 69688, 69703, 69759, 69762, 69811, 69815, 69817, 69819, 69821, 69822, 69837, 69838, 69888, 69891, 69927, 69932, 69933, 69941, 70003, 70004, 70016, 70018, 70070, 70079, 70089, 70093, 70191, 70194, 70196, 70197, 70198, 70200, 70206, 70207, 70367, 70368, 70371, 70379, 70400, 70402, 70459, 70461, 70464, 70465, 70502, 70509, 70512, 70517, 70712, 70720, 70722, 
70725, 70726, 70727, 70750, 70751, 70835, 70841, 70842, 70843, 70847, 70849, 70850, 70852, 71090, 71094, 71100, 71102, 71103, 71105, 71132, 71134, 71219, 71227, 71229, 71230, 71231, 71233, 71339, 71340, 71341, 71342, 71344, 71350, 71351, 71352, 71453, 71456, 71458, 71462, 71463, 71468, 71727, 71736, 71737, 71739, 72148, 72152, 72154, 72156, 72160, 72161, 72193, 72203, 72243, 72249, 72251, 72255, 72263, 72264, 72273, 72279, 72281, 72284, 72330, 72343, 72344, 72346, 72752, 72759, 72760, 72766, 72767, 
72768, 72850, 72872, 72874, 72881, 72882, 72884, 72885, 72887, 73009, 73015, 73018, 73019, 73020, 73022, 73023, 73030, 73031, 73032, 73104, 73106, 73109, 73110, 73111, 73112, 73459, 73461, 78896, 78905, 92912, 92917, 92976, 92983, 92992, 92996, 94031, 94032, 94095, 94112, 94176, 94178, 94179, 94180, 113821, 113823, 113824, 113828, 119143, 119146, 119155, 119171, 119173, 119180, 119210, 119214, 119362, 119365, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121499, 121504, 121505, 
121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123184, 123198, 123628, 123632, 125136, 125143, 125252, 125260, 127995, 128E3, 917505, 917506, 917536, 917632, 917760, 918E3]);
property.set("Cased", [65, 91, 97, 123, 170, 171, 181, 182, 186, 187, 192, 215, 216, 247, 248, 443, 444, 448, 452, 660, 661, 697, 704, 706, 736, 741, 837, 838, 880, 884, 886, 888, 890, 894, 895, 896, 902, 903, 904, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1162, 1328, 1329, 1367, 1376, 1417, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4349, 4352, 5024, 5110, 5112, 5118, 7296, 7305, 7312, 7355, 7357, 7360, 7424, 7616, 7680, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 
8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8305, 8306, 8319, 8320, 8336, 8349, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8473, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8495, 8501, 8505, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8576, 8579, 8581, 9398, 9450, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11503, 11506, 11508, 11520, 11558, 11559, 11560, 11565, 
11566, 42560, 42606, 42624, 42654, 42786, 42888, 42891, 42895, 42896, 42944, 42946, 42951, 43000, 43003, 43824, 43867, 43868, 43880, 43888, 43968, 64256, 64263, 64275, 64280, 65313, 65339, 65345, 65371, 66560, 66640, 66736, 66772, 66776, 66812, 68736, 68787, 68800, 68851, 71840, 71904, 93760, 93824, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 
120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 125184, 125252, 127280, 127306, 127312, 127338, 127344, 127370]);
property.set("Changes_When_Casefolded", [65, 91, 181, 182, 192, 215, 216, 224, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 
343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 383, 384, 385, 387, 388, 389, 390, 392, 393, 396, 398, 402, 403, 405, 406, 409, 412, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 426, 428, 429, 430, 432, 433, 436, 437, 438, 439, 441, 444, 445, 452, 454, 455, 457, 458, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 
478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 499, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 570, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 837, 838, 880, 
881, 882, 883, 886, 887, 895, 896, 902, 903, 904, 907, 908, 909, 910, 912, 913, 930, 931, 940, 962, 963, 975, 978, 981, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1010, 1012, 1014, 1015, 1016, 1017, 1019, 1021, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 
1152, 1153, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 
1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1329, 1367, 
1415, 1416, 4256, 4294, 4295, 4296, 4301, 4302, 5112, 5118, 7296, 7305, 7312, 7355, 7357, 7360, 7680, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 
7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7834, 7836, 
7838, 7839, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 
7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 7960, 7966, 7976, 7984, 7992, 8000, 8008, 8014, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8040, 8048, 8064, 8112, 8114, 8117, 8119, 8125, 8130, 8133, 8135, 8141, 8152, 8156, 8168, 8173, 8178, 8181, 8183, 8189, 8486, 8487, 8490, 8492, 8498, 8499, 8544, 8560, 8579, 8580, 9398, 9424, 11264, 11311, 11360, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11377, 11378, 11379, 11381, 
11382, 11390, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 
11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11499, 11500, 11501, 11502, 11506, 11507, 42560, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 
42597, 42598, 42599, 42600, 42601, 42602, 42603, 42604, 42605, 42624, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42786, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42802, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 
42823, 42824, 42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42873, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42891, 42892, 42893, 42894, 42896, 42897, 42898, 42899, 42902, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 
42911, 42912, 42913, 42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42927, 42928, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42946, 42947, 42948, 42951, 43888, 43968, 64256, 64263, 64275, 64280, 65313, 65339, 66560, 66600, 66736, 66772, 68736, 68787, 71840, 71872, 93760, 93792, 125184, 125218]);
property.set("Changes_When_Casemapped", [65, 91, 97, 123, 181, 182, 192, 215, 216, 247, 248, 312, 313, 397, 398, 411, 412, 426, 428, 442, 444, 446, 447, 448, 452, 545, 546, 564, 570, 597, 598, 600, 601, 602, 603, 605, 608, 610, 611, 612, 613, 615, 616, 621, 623, 624, 625, 627, 629, 630, 637, 638, 640, 641, 642, 644, 647, 653, 658, 659, 669, 671, 837, 838, 880, 884, 886, 888, 891, 894, 895, 896, 902, 903, 904, 907, 908, 909, 910, 930, 931, 978, 981, 1014, 1015, 1020, 1021, 1154, 1162, 1328, 1329, 
1367, 1377, 1416, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4349, 4352, 5024, 5110, 5112, 5118, 7296, 7305, 7312, 7355, 7357, 7360, 7545, 7546, 7549, 7550, 7566, 7567, 7680, 7836, 7838, 7839, 7840, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8486, 8487, 8490, 8492, 8498, 8499, 8526, 8527, 8544, 8576, 8579, 8581, 9398, 
9450, 11264, 11311, 11312, 11359, 11360, 11377, 11378, 11380, 11381, 11383, 11390, 11492, 11499, 11503, 11506, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 42560, 42606, 42624, 42652, 42786, 42800, 42802, 42864, 42873, 42888, 42891, 42894, 42896, 42901, 42902, 42927, 42928, 42944, 42946, 42951, 43859, 43860, 43888, 43968, 64256, 64263, 64275, 64280, 65313, 65339, 65345, 65371, 66560, 66640, 66736, 66772, 66776, 66812, 68736, 68787, 68800, 68851, 71840, 71904, 93760, 93824, 125184, 125252]);
property.set("Changes_When_Lowercased", [65, 91, 192, 215, 216, 223, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 
345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 385, 387, 388, 389, 390, 392, 393, 396, 398, 402, 403, 405, 406, 409, 412, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 426, 428, 429, 430, 432, 433, 436, 437, 438, 439, 441, 444, 445, 452, 454, 455, 457, 458, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 480, 481, 
482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 499, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 570, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 880, 881, 882, 883, 886, 887, 895, 
896, 902, 903, 904, 907, 908, 909, 910, 912, 913, 930, 931, 940, 975, 976, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1012, 1013, 1015, 1016, 1017, 1019, 1021, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 
1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 
1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1329, 1367, 4256, 4294, 4295, 4296, 4301, 4302, 5024, 5110, 7312, 7355, 
7357, 7360, 7680, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 
7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7838, 7839, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 
7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 
7960, 7966, 7976, 7984, 7992, 8000, 8008, 8014, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8040, 8048, 8072, 8080, 8088, 8096, 8104, 8112, 8120, 8125, 8136, 8141, 8152, 8156, 8168, 8173, 8184, 8189, 8486, 8487, 8490, 8492, 8498, 8499, 8544, 8560, 8579, 8580, 9398, 9424, 11264, 11311, 11360, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11377, 11378, 11379, 11381, 11382, 11390, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 
11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 
11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11499, 11500, 11501, 11502, 11506, 11507, 42560, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 42601, 42602, 42603, 42604, 42605, 42624, 42625, 42626, 42627, 42628, 42629, 42630, 
42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42786, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42802, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 
42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42873, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42891, 42892, 42893, 42894, 42896, 42897, 42898, 42899, 42902, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42927, 42928, 42933, 42934, 
42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42946, 42947, 42948, 42951, 65313, 65339, 66560, 66600, 66736, 66772, 68736, 68787, 71840, 71872, 93760, 93792, 125184, 125218]);
property.set("Changes_When_NFKC_Casefolded", [65, 91, 160, 161, 168, 169, 170, 171, 173, 174, 175, 176, 178, 182, 184, 187, 188, 191, 192, 215, 216, 224, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 309, 310, 311, 313, 314, 315, 316, 317, 318, 319, 322, 323, 324, 325, 326, 327, 328, 329, 331, 
332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 383, 384, 385, 387, 388, 389, 390, 392, 393, 396, 398, 402, 403, 405, 406, 409, 412, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 426, 428, 429, 430, 432, 433, 436, 437, 438, 439, 441, 444, 445, 452, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 
472, 473, 474, 475, 476, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 570, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 
688, 697, 728, 734, 736, 741, 832, 834, 835, 838, 847, 848, 880, 881, 882, 883, 884, 885, 886, 887, 890, 891, 894, 896, 900, 907, 908, 909, 910, 912, 913, 930, 931, 940, 962, 963, 975, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1011, 1012, 1014, 1015, 1016, 1017, 1019, 1021, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 
1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 
1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 
1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1329, 1367, 1415, 1416, 1564, 1565, 1653, 1657, 2392, 2400, 2524, 2526, 2527, 2528, 2611, 2612, 2614, 2615, 2649, 2652, 2654, 2655, 2908, 2910, 3635, 3636, 3763, 3764, 3804, 3806, 3852, 3853, 3907, 3908, 3917, 3918, 3922, 3923, 3927, 3928, 3932, 3933, 3945, 3946, 3955, 3956, 3957, 3962, 3969, 3970, 3987, 3988, 3997, 3998, 4002, 4003, 4007, 4008, 4012, 4013, 4025, 4026, 4256, 4294, 4295, 4296, 4301, 4302, 4348, 4349, 4447, 4449, 5112, 5118, 6068, 
6070, 6155, 6159, 7296, 7305, 7312, 7355, 7357, 7360, 7468, 7471, 7472, 7483, 7484, 7502, 7503, 7531, 7544, 7545, 7579, 7616, 7680, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 
7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 
7827, 7828, 7829, 7834, 7836, 7838, 7839, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 
7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 7960, 7966, 7976, 7984, 7992, 8E3, 8008, 8014, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8040, 8048, 8049, 8050, 8051, 8052, 8053, 8054, 8055, 8056, 8057, 8058, 8059, 8060, 8061, 8062, 8064, 8112, 8114, 8117, 8119, 8133, 8135, 8144, 8147, 8148, 8152, 8156, 8157, 8160, 8163, 8164, 8168, 8176, 8178, 8181, 8183, 8191, 8192, 8208, 8209, 8210, 8215, 8216, 8228, 8231, 8234, 
8240, 8243, 8245, 8246, 8248, 8252, 8253, 8254, 8255, 8263, 8266, 8279, 8280, 8287, 8306, 8308, 8335, 8336, 8349, 8360, 8361, 8448, 8452, 8453, 8456, 8457, 8468, 8469, 8471, 8473, 8478, 8480, 8483, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8495, 8506, 8507, 8513, 8517, 8522, 8528, 8576, 8579, 8580, 8585, 8586, 8748, 8750, 8751, 8753, 9001, 9003, 9312, 9451, 10764, 10765, 10868, 10871, 10972, 10973, 11264, 11311, 11360, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11377, 
11378, 11379, 11381, 11382, 11388, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 
11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11499, 11500, 11501, 11502, 11506, 11507, 11631, 11632, 11935, 11936, 12019, 12020, 12032, 12246, 12288, 12289, 12342, 12343, 12344, 12347, 12443, 12445, 12447, 12448, 12543, 12544, 12593, 12687, 12690, 12704, 12800, 12831, 12832, 12872, 12880, 12927, 12928, 13055, 13056, 13312, 
42560, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 42601, 42602, 42603, 42604, 42605, 42624, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 
42650, 42651, 42652, 42654, 42786, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42802, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 
42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42864, 42865, 42873, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42891, 42892, 42893, 42894, 42896, 42897, 42898, 42899, 42902, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42927, 42928, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42946, 42947, 42948, 42951, 43E3, 43002, 
43868, 43872, 43888, 43968, 63744, 64014, 64016, 64017, 64018, 64019, 64021, 64031, 64032, 64033, 64034, 64035, 64037, 64039, 64042, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64286, 64287, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64434, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65021, 65024, 65050, 65072, 65093, 65095, 65107, 65108, 65127, 65128, 65132, 65136, 65139, 65140, 65141, 65142, 65277, 65279, 65280, 65281, 65471, 65474, 65480, 65482, 65488, 
65490, 65496, 65498, 65501, 65504, 65511, 65512, 65519, 65520, 65529, 66560, 66600, 66736, 66772, 68736, 68787, 71840, 71872, 93760, 93792, 113824, 113828, 119134, 119141, 119155, 119163, 119227, 119233, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 
120488, 120780, 120782, 120832, 125184, 125218, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 
126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 127232, 127243, 127248, 127279, 127280, 127312, 127338, 127341, 127376, 127377, 127488, 127491, 127504, 127548, 127552, 127561, 127568, 127570, 194560, 195102, 917504, 921600]);
property.set("Changes_When_Titlecased", [97, 123, 181, 182, 223, 247, 248, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 
344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 385, 387, 388, 389, 390, 392, 393, 396, 397, 402, 403, 405, 406, 409, 411, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 429, 430, 432, 433, 436, 437, 438, 439, 441, 442, 445, 446, 447, 448, 452, 453, 454, 456, 457, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 
479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 498, 499, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 597, 598, 600, 601, 602, 603, 
605, 608, 610, 611, 612, 613, 615, 616, 621, 623, 624, 625, 627, 629, 630, 637, 638, 640, 641, 642, 644, 647, 653, 658, 659, 669, 671, 837, 838, 881, 882, 883, 884, 887, 888, 891, 894, 912, 913, 940, 975, 976, 978, 981, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1012, 1013, 1014, 1016, 1017, 1019, 1020, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 
1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 
1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 
1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1377, 1416, 5112, 5118, 7296, 7305, 7545, 7546, 7549, 7550, 7566, 7567, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 
7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 
7824, 7825, 7826, 7827, 7828, 7829, 7836, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 
7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 7958, 7968, 7976, 7984, 7992, 8000, 8006, 8016, 8024, 8032, 8040, 8048, 8062, 8064, 8072, 8080, 8088, 8096, 8104, 8112, 8117, 8118, 8120, 8126, 8127, 8130, 8133, 8134, 8136, 8144, 8148, 8150, 8152, 8160, 8168, 8178, 8181, 8182, 8184, 8526, 8527, 8560, 8576, 8580, 8581, 9424, 9450, 11312, 11359, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11379, 11380, 11382, 
11383, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 
11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11492, 11500, 11501, 11502, 11503, 11507, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 
42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 42601, 42602, 42603, 42604, 42605, 42606, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42652, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42800, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 
42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42864, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42888, 42892, 42893, 42897, 42898, 42899, 42901, 42903, 42904, 42905, 42906, 42907, 
42908, 42909, 42910, 42911, 42912, 42913, 42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42944, 42947, 42948, 43859, 43860, 43888, 43968, 64256, 64263, 64275, 64280, 65345, 65371, 66600, 66640, 66776, 66812, 68800, 68851, 71872, 71904, 93792, 93824, 125218, 125252]);
property.set("Changes_When_Uppercased", [97, 123, 181, 182, 223, 247, 248, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 
344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 385, 387, 388, 389, 390, 392, 393, 396, 397, 402, 403, 405, 406, 409, 411, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 429, 430, 432, 433, 436, 437, 438, 439, 441, 442, 445, 446, 447, 448, 453, 455, 456, 458, 459, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 480, 
481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 498, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 597, 598, 600, 601, 602, 603, 605, 608, 
610, 611, 612, 613, 615, 616, 621, 623, 624, 625, 627, 629, 630, 637, 638, 640, 641, 642, 644, 647, 653, 658, 659, 669, 671, 837, 838, 881, 882, 883, 884, 887, 888, 891, 894, 912, 913, 940, 975, 976, 978, 981, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1012, 1013, 1014, 1016, 1017, 1019, 1020, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 
1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 
1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 
1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1377, 1416, 4304, 4347, 4349, 4352, 5112, 5118, 7296, 7305, 7545, 7546, 7549, 7550, 7566, 7567, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 
7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 
7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7836, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 
7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 7958, 7968, 7976, 7984, 7992, 8000, 8006, 8016, 8024, 8032, 8040, 8048, 8062, 8064, 8117, 8118, 8120, 8124, 8125, 8126, 8127, 8130, 8133, 8134, 8136, 8140, 8141, 8144, 8148, 8150, 8152, 8160, 8168, 8178, 8181, 8182, 8184, 8188, 8189, 8526, 8527, 8560, 8576, 8580, 8581, 9424, 9450, 11312, 11359, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11379, 
11380, 11382, 11383, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 
11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11492, 11500, 11501, 11502, 11503, 11507, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 
42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 42601, 42602, 42603, 42604, 42605, 42606, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42652, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42800, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 
42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42864, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42888, 42892, 42893, 42897, 42898, 42899, 42901, 42903, 42904, 42905, 
42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42944, 42947, 42948, 43859, 43860, 43888, 43968, 64256, 64263, 64275, 64280, 65345, 65371, 66600, 66640, 66776, 66812, 68800, 68851, 71872, 71904, 93792, 93824, 125218, 125252]);
property.set("Dash", [45, 46, 1418, 1419, 1470, 1471, 5120, 5121, 6150, 6151, 8208, 8214, 8275, 8276, 8315, 8316, 8331, 8332, 8722, 8723, 11799, 11800, 11802, 11803, 11834, 11836, 11840, 11841, 12316, 12317, 12336, 12337, 12448, 12449, 65073, 65075, 65112, 65113, 65123, 65124, 65293, 65294]);
property.set("Default_Ignorable_Code_Point", [173, 174, 847, 848, 1564, 1565, 4447, 4449, 6068, 6070, 6155, 6159, 8203, 8208, 8234, 8239, 8288, 8304, 12644, 12645, 65024, 65040, 65279, 65280, 65440, 65441, 65520, 65529, 113824, 113828, 119155, 119163, 917504, 921600]);
property.set("Deprecated", [329, 330, 1651, 1652, 3959, 3960, 3961, 3962, 6051, 6053, 8298, 8304, 9001, 9003, 917505, 917506]);
property.set("Diacritic", [94, 95, 96, 97, 168, 169, 175, 176, 180, 181, 183, 185, 688, 847, 848, 856, 861, 867, 884, 886, 890, 891, 900, 902, 1155, 1160, 1369, 1370, 1425, 1442, 1443, 1470, 1471, 1472, 1473, 1475, 1476, 1477, 1611, 1619, 1623, 1625, 1759, 1761, 1765, 1767, 1770, 1773, 1840, 1867, 1958, 1969, 2027, 2038, 2072, 2074, 2275, 2303, 2364, 2365, 2381, 2382, 2385, 2389, 2417, 2418, 2492, 2493, 2509, 2510, 2620, 2621, 2637, 2638, 2748, 2749, 2765, 2766, 2813, 2816, 2876, 2877, 2893, 2894, 
3021, 3022, 3149, 3150, 3260, 3261, 3277, 3278, 3387, 3389, 3405, 3406, 3530, 3531, 3655, 3661, 3662, 3663, 3770, 3771, 3784, 3789, 3864, 3866, 3893, 3894, 3895, 3896, 3897, 3898, 3902, 3904, 3970, 3973, 3974, 3976, 4038, 4039, 4151, 4152, 4153, 4155, 4195, 4197, 4201, 4206, 4231, 4238, 4239, 4240, 4250, 4252, 4957, 4960, 6089, 6100, 6109, 6110, 6457, 6460, 6773, 6781, 6783, 6784, 6832, 6846, 6964, 6965, 6980, 6981, 7019, 7028, 7082, 7084, 7222, 7224, 7288, 7294, 7376, 7401, 7405, 7406, 7412, 7413, 
7415, 7418, 7468, 7531, 7620, 7632, 7669, 7674, 7677, 7680, 8125, 8126, 8127, 8130, 8141, 8144, 8157, 8160, 8173, 8176, 8189, 8191, 11503, 11506, 11823, 11824, 12330, 12336, 12441, 12445, 12540, 12541, 42607, 42608, 42620, 42622, 42623, 42624, 42652, 42654, 42736, 42738, 42752, 42786, 42888, 42891, 43000, 43002, 43204, 43205, 43232, 43250, 43307, 43311, 43347, 43348, 43443, 43444, 43456, 43457, 43493, 43494, 43643, 43646, 43711, 43715, 43766, 43767, 43867, 43872, 44012, 44014, 64286, 64287, 65056, 
65072, 65342, 65343, 65344, 65345, 65392, 65393, 65438, 65440, 65507, 65508, 66272, 66273, 68325, 68327, 68898, 68904, 69446, 69457, 69817, 69819, 69939, 69941, 70003, 70004, 70080, 70081, 70090, 70093, 70197, 70199, 70377, 70379, 70460, 70461, 70477, 70478, 70502, 70509, 70512, 70517, 70722, 70723, 70726, 70727, 70850, 70852, 71103, 71105, 71231, 71232, 71350, 71352, 71467, 71468, 71737, 71739, 72160, 72161, 72244, 72245, 72263, 72264, 72345, 72346, 72767, 72768, 73026, 73027, 73028, 73030, 73111, 
73112, 92912, 92917, 92976, 92983, 94095, 94112, 119143, 119146, 119149, 119155, 119163, 119171, 119173, 119180, 119210, 119214, 123184, 123191, 123628, 123632, 125136, 125143, 125252, 125255, 125256, 125259]);
property.set("Emoji", [35, 36, 42, 43, 48, 58, 169, 170, 174, 175, 8252, 8253, 8265, 8266, 8482, 8483, 8505, 8506, 8596, 8602, 8617, 8619, 8986, 8988, 9000, 9001, 9167, 9168, 9193, 9204, 9208, 9211, 9410, 9411, 9642, 9644, 9654, 9655, 9664, 9665, 9723, 9727, 9728, 9733, 9742, 9743, 9745, 9746, 9748, 9750, 9752, 9753, 9757, 9758, 9760, 9761, 9762, 9764, 9766, 9767, 9770, 9771, 9774, 9776, 9784, 9787, 9792, 9793, 9794, 9795, 9800, 9812, 9823, 9825, 9827, 9828, 9829, 9831, 9832, 9833, 9851, 9852, 9854, 
9856, 9874, 9880, 9881, 9882, 9883, 9885, 9888, 9890, 9898, 9900, 9904, 9906, 9917, 9919, 9924, 9926, 9928, 9929, 9934, 9936, 9937, 9938, 9939, 9941, 9961, 9963, 9968, 9974, 9975, 9979, 9981, 9982, 9986, 9987, 9989, 9990, 9992, 9998, 9999, 10000, 10002, 10003, 10004, 10005, 10006, 10007, 10013, 10014, 10017, 10018, 10024, 10025, 10035, 10037, 10052, 10053, 10055, 10056, 10060, 10061, 10062, 10063, 10067, 10070, 10071, 10072, 10083, 10085, 10133, 10136, 10145, 10146, 10160, 10161, 10175, 10176, 10548, 
10550, 11013, 11016, 11035, 11037, 11088, 11089, 11093, 11094, 12336, 12337, 12349, 12350, 12951, 12952, 12953, 12954, 126980, 126981, 127183, 127184, 127344, 127346, 127358, 127360, 127374, 127375, 127377, 127387, 127462, 127488, 127489, 127491, 127514, 127515, 127535, 127536, 127538, 127547, 127568, 127570, 127744, 127778, 127780, 127892, 127894, 127896, 127897, 127900, 127902, 127985, 127987, 127990, 127991, 128254, 128255, 128318, 128329, 128335, 128336, 128360, 128367, 128369, 128371, 128379, 
128391, 128392, 128394, 128398, 128400, 128401, 128405, 128407, 128420, 128422, 128424, 128425, 128433, 128435, 128444, 128445, 128450, 128453, 128465, 128468, 128476, 128479, 128481, 128482, 128483, 128484, 128488, 128489, 128495, 128496, 128499, 128500, 128506, 128592, 128640, 128710, 128715, 128723, 128725, 128726, 128736, 128742, 128745, 128746, 128747, 128749, 128752, 128753, 128755, 128763, 128992, 129004, 129293, 129339, 129340, 129350, 129351, 129394, 129395, 129399, 129402, 129443, 129445, 
129451, 129454, 129483, 129485, 129536, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686]);
property.set("Emoji_Component", [35, 36, 42, 43, 48, 58, 8205, 8206, 8419, 8420, 65039, 65040, 127462, 127488, 127995, 128000, 129456, 129460, 917536, 917632]);
property.set("Emoji_Modifier", [127995, 128000]);
property.set("Emoji_Modifier_Base", [9757, 9758, 9977, 9978, 9994, 9998, 127877, 127878, 127938, 127941, 127943, 127944, 127946, 127949, 128066, 128068, 128070, 128081, 128102, 128121, 128124, 128125, 128129, 128132, 128133, 128136, 128143, 128144, 128145, 128146, 128170, 128171, 128372, 128374, 128378, 128379, 128400, 128401, 128405, 128407, 128581, 128584, 128587, 128592, 128675, 128676, 128692, 128695, 128704, 128705, 128716, 128717, 129295, 129296, 129304, 129312, 129318, 129319, 129328, 129338, 
129340, 129343, 129461, 129463, 129464, 129466, 129467, 129468, 129485, 129488, 129489, 129502]);
property.set("Emoji_Presentation", [8986, 8988, 9193, 9197, 9200, 9201, 9203, 9204, 9725, 9727, 9748, 9750, 9800, 9812, 9855, 9856, 9875, 9876, 9889, 9890, 9898, 9900, 9917, 9919, 9924, 9926, 9934, 9935, 9940, 9941, 9962, 9963, 9970, 9972, 9973, 9974, 9978, 9979, 9981, 9982, 9989, 9990, 9994, 9996, 10024, 10025, 10060, 10061, 10062, 10063, 10067, 10070, 10071, 10072, 10133, 10136, 10160, 10161, 10175, 10176, 11035, 11037, 11088, 11089, 11093, 11094, 126980, 126981, 127183, 127184, 127374, 127375, 
127377, 127387, 127462, 127488, 127489, 127490, 127514, 127515, 127535, 127536, 127538, 127543, 127544, 127547, 127568, 127570, 127744, 127777, 127789, 127798, 127799, 127869, 127870, 127892, 127904, 127947, 127951, 127956, 127968, 127985, 127988, 127989, 127992, 128063, 128064, 128065, 128066, 128253, 128255, 128318, 128331, 128335, 128336, 128360, 128378, 128379, 128405, 128407, 128420, 128421, 128507, 128592, 128640, 128710, 128716, 128717, 128720, 128723, 128725, 128726, 128747, 128749, 128756, 
128763, 128992, 129004, 129293, 129339, 129340, 129350, 129351, 129394, 129395, 129399, 129402, 129443, 129445, 129451, 129454, 129483, 129485, 129536, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686]);
property.set("Extended_Pictographic", [169, 170, 174, 175, 8252, 8253, 8265, 8266, 8482, 8483, 8505, 8506, 8596, 8602, 8617, 8619, 8986, 8988, 9000, 9001, 9096, 9097, 9167, 9168, 9193, 9204, 9208, 9211, 9410, 9411, 9642, 9644, 9654, 9655, 9664, 9665, 9723, 9727, 9728, 9734, 9735, 9747, 9748, 9862, 9872, 9990, 9992, 10003, 10004, 10005, 10006, 10007, 10013, 10014, 10017, 10018, 10024, 10025, 10035, 10037, 10052, 10053, 10055, 10056, 10060, 10061, 10062, 10063, 10067, 10070, 10071, 10072, 10083, 10088, 
10133, 10136, 10145, 10146, 10160, 10161, 10175, 10176, 10548, 10550, 11013, 11016, 11035, 11037, 11088, 11089, 11093, 11094, 12336, 12337, 12349, 12350, 12951, 12952, 12953, 12954, 126976, 127232, 127245, 127248, 127279, 127280, 127340, 127346, 127358, 127360, 127374, 127375, 127377, 127387, 127405, 127462, 127489, 127504, 127514, 127515, 127535, 127536, 127538, 127547, 127548, 127552, 127561, 127995, 128000, 128318, 128326, 128592, 128640, 128768, 128884, 128896, 128981, 129024, 129036, 129040, 
129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129339, 129340, 129350, 129351, 131070]);
property.set("Extender", [183, 184, 720, 722, 1600, 1601, 2042, 2043, 3654, 3655, 3782, 3783, 6154, 6155, 6211, 6212, 6823, 6824, 7222, 7223, 7291, 7292, 12293, 12294, 12337, 12342, 12445, 12447, 12540, 12543, 40981, 40982, 42508, 42509, 43471, 43472, 43494, 43495, 43632, 43633, 43741, 43742, 43763, 43765, 65392, 65393, 70493, 70494, 71110, 71113, 72344, 72345, 92994, 92996, 94176, 94178, 94179, 94180, 123196, 123198, 125252, 125255]);
property.set("Grapheme_Base", [32, 127, 160, 173, 174, 768, 880, 888, 890, 896, 900, 907, 908, 909, 910, 930, 931, 1155, 1162, 1328, 1329, 1367, 1369, 1419, 1421, 1424, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1488, 1515, 1519, 1525, 1542, 1552, 1563, 1564, 1566, 1611, 1632, 1648, 1649, 1750, 1758, 1759, 1765, 1767, 1769, 1770, 1774, 1806, 1808, 1809, 1810, 1840, 1869, 1958, 1969, 1970, 1984, 2027, 2036, 2043, 2046, 2070, 2074, 2075, 2084, 2085, 2088, 2089, 2096, 2111, 2112, 2137, 2142, 2143, 
2144, 2155, 2208, 2229, 2230, 2238, 2307, 2362, 2363, 2364, 2365, 2369, 2377, 2381, 2382, 2385, 2392, 2402, 2404, 2433, 2434, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2493, 2494, 2495, 2497, 2503, 2505, 2507, 2509, 2510, 2511, 2524, 2526, 2527, 2530, 2534, 2558, 2563, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2622, 2625, 2649, 2653, 2654, 2655, 2662, 2672, 2674, 2677, 2678, 2679, 2691, 2692, 2693, 2702, 2703, 2706, 
2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2749, 2753, 2761, 2762, 2763, 2765, 2768, 2769, 2784, 2786, 2790, 2802, 2809, 2810, 2818, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2877, 2878, 2880, 2881, 2887, 2889, 2891, 2893, 2908, 2910, 2911, 2914, 2918, 2936, 2947, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3007, 3008, 3009, 3011, 3014, 3017, 3018, 3021, 3024, 3025, 3046, 3067, 3073, 3076, 
3077, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3134, 3137, 3141, 3160, 3163, 3168, 3170, 3174, 3184, 3191, 3201, 3202, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3261, 3263, 3264, 3266, 3267, 3269, 3271, 3273, 3274, 3276, 3294, 3295, 3296, 3298, 3302, 3312, 3313, 3315, 3330, 3332, 3333, 3341, 3342, 3345, 3346, 3387, 3389, 3390, 3391, 3393, 3398, 3401, 3402, 3405, 3406, 3408, 3412, 3415, 3416, 3426, 3430, 3456, 3458, 3460, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 
3536, 3538, 3544, 3551, 3558, 3568, 3570, 3573, 3585, 3633, 3634, 3636, 3647, 3655, 3663, 3676, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3761, 3762, 3764, 3773, 3774, 3776, 3781, 3782, 3783, 3792, 3802, 3804, 3808, 3840, 3864, 3866, 3893, 3894, 3895, 3896, 3897, 3898, 3912, 3913, 3949, 3967, 3968, 3973, 3974, 3976, 3981, 4030, 4038, 4039, 4045, 4046, 4059, 4096, 4141, 4145, 4146, 4152, 4153, 4155, 4157, 4159, 4184, 4186, 4190, 4193, 4209, 4213, 4226, 4227, 4229, 4231, 4237, 
4238, 4253, 4254, 4294, 4295, 4296, 4301, 4302, 4304, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4960, 4989, 4992, 5018, 5024, 5110, 5112, 5118, 5120, 5789, 5792, 5881, 5888, 5901, 5902, 5906, 5920, 5938, 5941, 5943, 5952, 5970, 5984, 5997, 5998, 6001, 6016, 6068, 6070, 6071, 6078, 6086, 6087, 6089, 6100, 6109, 6112, 6122, 6128, 6138, 6144, 6155, 6160, 6170, 
6176, 6265, 6272, 6277, 6279, 6313, 6314, 6315, 6320, 6390, 6400, 6431, 6435, 6439, 6441, 6444, 6448, 6450, 6451, 6457, 6464, 6465, 6468, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6608, 6619, 6622, 6679, 6681, 6683, 6686, 6742, 6743, 6744, 6753, 6754, 6755, 6757, 6765, 6771, 6784, 6794, 6800, 6810, 6816, 6830, 6916, 6964, 6971, 6972, 6973, 6978, 6979, 6988, 6992, 7019, 7028, 7037, 7042, 7074, 7078, 7080, 7082, 7083, 7086, 7142, 7143, 7144, 7146, 7149, 7150, 7151, 7154, 7156, 7164, 7212, 7220, 7222, 
7227, 7242, 7245, 7305, 7312, 7355, 7357, 7368, 7379, 7380, 7393, 7394, 7401, 7405, 7406, 7412, 7413, 7416, 7418, 7419, 7424, 7616, 7680, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8133, 8134, 8148, 8150, 8156, 8157, 8176, 8178, 8181, 8182, 8191, 8192, 8203, 8208, 8232, 8239, 8288, 8304, 8306, 8308, 8335, 8336, 8349, 8352, 8384, 8448, 8588, 8592, 9255, 9280, 9291, 9312, 11124, 11126, 11158, 11160, 11311, 11312, 11359, 11360, 
11503, 11506, 11508, 11513, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11633, 11648, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11776, 11856, 11904, 11930, 11931, 12020, 12032, 12246, 12272, 12284, 12288, 12330, 12336, 12352, 12353, 12439, 12443, 12544, 12549, 12592, 12593, 12687, 12688, 12731, 12736, 12772, 12784, 12831, 12832, 13055, 13056, 19894, 19904, 40944, 40960, 42125, 42128, 42183, 42192, 42540, 42560, 
42607, 42611, 42612, 42622, 42654, 42656, 42736, 42738, 42744, 42752, 42944, 42946, 42951, 42999, 43010, 43011, 43014, 43015, 43019, 43020, 43045, 43047, 43052, 43056, 43066, 43072, 43128, 43136, 43204, 43214, 43226, 43250, 43263, 43264, 43302, 43310, 43335, 43346, 43348, 43359, 43389, 43395, 43443, 43444, 43446, 43450, 43452, 43454, 43470, 43471, 43482, 43486, 43493, 43494, 43519, 43520, 43561, 43567, 43569, 43571, 43573, 43584, 43587, 43588, 43596, 43597, 43598, 43600, 43610, 43612, 43644, 43645, 
43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43715, 43739, 43756, 43758, 43766, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43880, 43888, 44005, 44006, 44008, 44009, 44013, 44016, 44026, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64286, 64287, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64450, 64467, 64832, 64848, 64912, 64914, 64968, 65008, 65022, 65040, 
65050, 65072, 65107, 65108, 65127, 65128, 65132, 65136, 65141, 65142, 65277, 65281, 65438, 65440, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65504, 65511, 65512, 65519, 65532, 65534, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65792, 65795, 65799, 65844, 65847, 65935, 65936, 65948, 65952, 65953, 66E3, 66045, 66176, 66205, 66208, 66257, 66273, 66300, 66304, 66340, 66349, 66379, 66384, 66422, 66432, 66462, 66463, 66500, 66504, 
66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 66927, 66928, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67671, 67743, 67751, 67760, 67808, 67827, 67828, 67830, 67835, 67868, 67871, 67898, 67903, 67904, 67968, 68024, 68028, 68048, 68050, 68097, 68112, 68116, 68117, 68120, 68121, 68150, 68160, 68169, 68176, 68185, 68192, 68256, 68288, 68325, 68331, 68343, 68352, 68406, 68409, 
68438, 68440, 68467, 68472, 68498, 68505, 68509, 68521, 68528, 68608, 68681, 68736, 68787, 68800, 68851, 68858, 68900, 68912, 68922, 69216, 69247, 69376, 69416, 69424, 69446, 69457, 69466, 69600, 69623, 69632, 69633, 69634, 69688, 69703, 69710, 69714, 69744, 69762, 69811, 69815, 69817, 69819, 69821, 69822, 69826, 69840, 69865, 69872, 69882, 69891, 69927, 69932, 69933, 69942, 69959, 69968, 70003, 70004, 70007, 70018, 70070, 70079, 70089, 70093, 70094, 70096, 70112, 70113, 70133, 70144, 70162, 70163, 
70191, 70194, 70196, 70197, 70198, 70200, 70206, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70314, 70320, 70367, 70368, 70371, 70384, 70394, 70402, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70461, 70462, 70463, 70464, 70465, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70493, 70500, 70656, 70712, 70720, 70722, 70725, 70726, 70727, 70746, 70747, 70748, 70749, 70750, 70751, 70752, 70784, 70832, 70833, 70835, 70841, 70842, 70843, 
70845, 70846, 70847, 70849, 70850, 70852, 70856, 70864, 70874, 71040, 71087, 71088, 71090, 71096, 71100, 71102, 71103, 71105, 71132, 71168, 71219, 71227, 71229, 71230, 71231, 71233, 71237, 71248, 71258, 71264, 71277, 71296, 71339, 71340, 71341, 71342, 71344, 71350, 71351, 71352, 71353, 71360, 71370, 71424, 71451, 71456, 71458, 71462, 71463, 71472, 71488, 71680, 71727, 71736, 71737, 71739, 71740, 71840, 71923, 71935, 71936, 72096, 72104, 72106, 72148, 72156, 72160, 72161, 72165, 72192, 72193, 72203, 
72243, 72249, 72251, 72255, 72263, 72272, 72273, 72279, 72281, 72284, 72330, 72343, 72344, 72346, 72355, 72384, 72441, 72704, 72713, 72714, 72752, 72766, 72767, 72768, 72774, 72784, 72813, 72816, 72848, 72873, 72874, 72881, 72882, 72884, 72885, 72960, 72967, 72968, 72970, 72971, 73009, 73030, 73031, 73040, 73050, 73056, 73062, 73063, 73065, 73066, 73103, 73107, 73109, 73110, 73111, 73112, 73113, 73120, 73130, 73440, 73459, 73461, 73465, 73664, 73714, 73727, 74650, 74752, 74863, 74864, 74869, 74880, 
75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92768, 92778, 92782, 92784, 92880, 92910, 92917, 92918, 92928, 92976, 92983, 92998, 93008, 93018, 93019, 93026, 93027, 93048, 93053, 93072, 93760, 93851, 93952, 94027, 94032, 94088, 94099, 94112, 94176, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 113820, 113821, 113823, 113824, 118784, 119030, 119040, 119079, 119081, 
119141, 119142, 119143, 119146, 119150, 119171, 119173, 119180, 119210, 119214, 119273, 119296, 119362, 119365, 119366, 119520, 119540, 119552, 119639, 119648, 119673, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120780, 120782, 121344, 
121399, 121403, 121453, 121461, 121462, 121476, 121477, 121484, 123136, 123181, 123191, 123198, 123200, 123210, 123214, 123216, 123584, 123628, 123632, 123642, 123647, 123648, 124928, 125125, 125127, 125136, 125184, 125252, 125259, 125260, 125264, 125274, 125278, 125280, 126065, 126133, 126209, 126270, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 
126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 126704, 126706, 126976, 127020, 127024, 127124, 127136, 127151, 127153, 127168, 127169, 127184, 127185, 127222, 127232, 127245, 127248, 127341, 127344, 127405, 127462, 127491, 
127504, 127548, 127552, 127561, 127568, 127570, 127584, 127590, 127744, 128726, 128736, 128749, 128752, 128763, 128768, 128884, 128896, 128985, 128992, 129004, 129024, 129036, 129040, 129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129293, 129394, 129395, 129399, 129402, 129443, 129445, 129451, 129454, 129483, 129485, 129620, 129632, 129646, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 
191457, 194560, 195102]);
property.set("Grapheme_Extend", [768, 880, 1155, 1162, 1425, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1552, 1563, 1611, 1632, 1648, 1649, 1750, 1757, 1759, 1765, 1767, 1769, 1770, 1774, 1809, 1810, 1840, 1867, 1958, 1969, 2027, 2036, 2045, 2046, 2070, 2074, 2075, 2084, 2085, 2088, 2089, 2094, 2137, 2140, 2259, 2274, 2275, 2307, 2362, 2363, 2364, 2365, 2369, 2377, 2381, 2382, 2385, 2392, 2402, 2404, 2433, 2434, 2492, 2493, 2494, 2495, 2497, 2501, 2509, 2510, 2519, 2520, 2530, 2532, 2558, 
2559, 2561, 2563, 2620, 2621, 2625, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2672, 2674, 2677, 2678, 2689, 2691, 2748, 2749, 2753, 2758, 2759, 2761, 2765, 2766, 2786, 2788, 2810, 2816, 2817, 2818, 2876, 2877, 2878, 2880, 2881, 2885, 2893, 2894, 2902, 2904, 2914, 2916, 2946, 2947, 3006, 3007, 3008, 3009, 3021, 3022, 3031, 3032, 3072, 3073, 3076, 3077, 3134, 3137, 3142, 3145, 3146, 3150, 3157, 3159, 3170, 3172, 3201, 3202, 3260, 3261, 3263, 3264, 3266, 3267, 3270, 3271, 3276, 3278, 3285, 3287, 3298, 
3300, 3328, 3330, 3387, 3389, 3390, 3391, 3393, 3397, 3405, 3406, 3415, 3416, 3426, 3428, 3530, 3531, 3535, 3536, 3538, 3541, 3542, 3543, 3551, 3552, 3633, 3634, 3636, 3643, 3655, 3663, 3761, 3762, 3764, 3773, 3784, 3790, 3864, 3866, 3893, 3894, 3895, 3896, 3897, 3898, 3953, 3967, 3968, 3973, 3974, 3976, 3981, 3992, 3993, 4029, 4038, 4039, 4141, 4145, 4146, 4152, 4153, 4155, 4157, 4159, 4184, 4186, 4190, 4193, 4209, 4213, 4226, 4227, 4229, 4231, 4237, 4238, 4253, 4254, 4957, 4960, 5906, 5909, 5938, 
5941, 5970, 5972, 6002, 6004, 6068, 6070, 6071, 6078, 6086, 6087, 6089, 6100, 6109, 6110, 6155, 6158, 6277, 6279, 6313, 6314, 6432, 6435, 6439, 6441, 6450, 6451, 6457, 6460, 6679, 6681, 6683, 6684, 6742, 6743, 6744, 6751, 6752, 6753, 6754, 6755, 6757, 6765, 6771, 6781, 6783, 6784, 6832, 6847, 6912, 6916, 6964, 6971, 6972, 6973, 6978, 6979, 7019, 7028, 7040, 7042, 7074, 7078, 7080, 7082, 7083, 7086, 7142, 7143, 7144, 7146, 7149, 7150, 7151, 7154, 7212, 7220, 7222, 7224, 7376, 7379, 7380, 7393, 7394, 
7401, 7405, 7406, 7412, 7413, 7416, 7418, 7616, 7674, 7675, 7680, 8204, 8205, 8400, 8433, 11503, 11506, 11647, 11648, 11744, 11776, 12330, 12336, 12441, 12443, 42607, 42611, 42612, 42622, 42654, 42656, 42736, 42738, 43010, 43011, 43014, 43015, 43019, 43020, 43045, 43047, 43204, 43206, 43232, 43250, 43263, 43264, 43302, 43310, 43335, 43346, 43392, 43395, 43443, 43444, 43446, 43450, 43452, 43454, 43493, 43494, 43561, 43567, 43569, 43571, 43573, 43575, 43587, 43588, 43596, 43597, 43644, 43645, 43696, 
43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43756, 43758, 43766, 43767, 44005, 44006, 44008, 44009, 44013, 44014, 64286, 64287, 65024, 65040, 65056, 65072, 65438, 65440, 66045, 66046, 66272, 66273, 66422, 66427, 68097, 68100, 68101, 68103, 68108, 68112, 68152, 68155, 68159, 68160, 68325, 68327, 68900, 68904, 69446, 69457, 69633, 69634, 69688, 69703, 69759, 69762, 69811, 69815, 69817, 69819, 69888, 69891, 69927, 69932, 69933, 69941, 70003, 70004, 70016, 70018, 70070, 70079, 70089, 
70093, 70191, 70194, 70196, 70197, 70198, 70200, 70206, 70207, 70367, 70368, 70371, 70379, 70400, 70402, 70459, 70461, 70462, 70463, 70464, 70465, 70487, 70488, 70502, 70509, 70512, 70517, 70712, 70720, 70722, 70725, 70726, 70727, 70750, 70751, 70832, 70833, 70835, 70841, 70842, 70843, 70845, 70846, 70847, 70849, 70850, 70852, 71087, 71088, 71090, 71094, 71100, 71102, 71103, 71105, 71132, 71134, 71219, 71227, 71229, 71230, 71231, 71233, 71339, 71340, 71341, 71342, 71344, 71350, 71351, 71352, 71453, 
71456, 71458, 71462, 71463, 71468, 71727, 71736, 71737, 71739, 72148, 72152, 72154, 72156, 72160, 72161, 72193, 72203, 72243, 72249, 72251, 72255, 72263, 72264, 72273, 72279, 72281, 72284, 72330, 72343, 72344, 72346, 72752, 72759, 72760, 72766, 72767, 72768, 72850, 72872, 72874, 72881, 72882, 72884, 72885, 72887, 73009, 73015, 73018, 73019, 73020, 73022, 73023, 73030, 73031, 73032, 73104, 73106, 73109, 73110, 73111, 73112, 73459, 73461, 92912, 92917, 92976, 92983, 94031, 94032, 94095, 94099, 113821, 
113823, 119141, 119142, 119143, 119146, 119150, 119155, 119163, 119171, 119173, 119180, 119210, 119214, 119362, 119365, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123184, 123191, 123628, 123632, 125136, 125143, 125252, 125259, 917536, 917632, 917760, 918000]);
property.set("Hex_Digit", [48, 58, 65, 71, 97, 103, 65296, 65306, 65313, 65319, 65345, 65351]);
property.set("IDS_Binary_Operator", [12272, 12274, 12276, 12284]);
property.set("IDS_Trinary_Operator", [12274, 12276]);
property.set("ID_Continue", [48, 58, 65, 91, 95, 96, 97, 123, 170, 171, 181, 182, 183, 184, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 768, 885, 886, 888, 890, 894, 895, 896, 902, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1155, 1160, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1425, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1488, 1515, 1519, 1523, 1552, 1563, 1568, 1642, 1646, 1748, 1749, 1757, 1759, 1769, 1770, 1789, 1791, 1792, 1808, 1867, 
1869, 1970, 1984, 2038, 2042, 2043, 2045, 2046, 2048, 2094, 2112, 2140, 2144, 2155, 2208, 2229, 2230, 2238, 2259, 2274, 2275, 2404, 2406, 2416, 2417, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2534, 2546, 2556, 2557, 2558, 2559, 2561, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2649, 2653, 
2654, 2655, 2662, 2678, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2800, 2809, 2816, 2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2908, 2910, 2911, 2916, 2918, 2928, 2929, 2930, 2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 
3014, 3017, 3018, 3022, 3024, 3025, 3031, 3032, 3046, 3056, 3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3160, 3163, 3168, 3172, 3174, 3184, 3200, 3204, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 3313, 3315, 3328, 3332, 3333, 3341, 3342, 3345, 3346, 3397, 3398, 3401, 3402, 3407, 3412, 3416, 3423, 3428, 3430, 3440, 3450, 3456, 3458, 3460, 3461, 3479, 
3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3572, 3585, 3643, 3648, 3663, 3664, 3674, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3774, 3776, 3781, 3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808, 3840, 3841, 3864, 3866, 3872, 3882, 3893, 3894, 3895, 3896, 3897, 3898, 3902, 3912, 3913, 3949, 3953, 3973, 3974, 3992, 3993, 4029, 4038, 4039, 4096, 4170, 4176, 4254, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 
4348, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4960, 4969, 4978, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5870, 5881, 5888, 5901, 5902, 5909, 5920, 5941, 5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 6016, 6100, 6103, 6104, 6108, 6110, 6112, 6122, 6155, 6158, 6160, 6170, 6176, 6265, 6272, 6315, 6320, 6390, 
6400, 6431, 6432, 6444, 6448, 6460, 6470, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6608, 6619, 6656, 6684, 6688, 6751, 6752, 6781, 6783, 6794, 6800, 6810, 6823, 6824, 6832, 6846, 6912, 6988, 6992, 7002, 7019, 7028, 7040, 7156, 7168, 7224, 7232, 7242, 7245, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 7376, 7379, 7380, 7419, 7424, 7674, 7675, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 
8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8255, 8257, 8276, 8277, 8305, 8306, 8319, 8320, 8336, 8349, 8400, 8413, 8417, 8418, 8421, 8433, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8585, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11647, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 
11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11744, 11776, 12293, 12296, 12321, 12336, 12337, 12342, 12344, 12349, 12353, 12439, 12441, 12448, 12449, 12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42540, 42560, 42608, 42612, 42622, 42623, 42738, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43048, 43072, 43124, 43136, 43206, 43216, 43226, 43232, 43256, 43259, 
43260, 43261, 43310, 43312, 43348, 43360, 43389, 43392, 43457, 43471, 43482, 43488, 43519, 43520, 43575, 43584, 43598, 43600, 43610, 43616, 43639, 43642, 43715, 43739, 43742, 43744, 43760, 43762, 43767, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44011, 44012, 44014, 44016, 44026, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64297, 64298, 64311, 64312, 64317, 64318, 64319, 64320, 
64322, 64323, 64325, 64326, 64434, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65020, 65024, 65040, 65056, 65072, 65075, 65077, 65101, 65104, 65136, 65141, 65142, 65277, 65296, 65306, 65313, 65339, 65343, 65344, 65345, 65371, 65382, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65856, 65909, 66045, 66046, 66176, 66205, 66208, 66257, 66272, 66273, 66304, 66336, 66349, 66379, 66384, 
66427, 66432, 66462, 66464, 66500, 66504, 66512, 66513, 66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 68159, 68160, 68192, 68221, 68224, 
68253, 68288, 68296, 68297, 68327, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68736, 68787, 68800, 68851, 68864, 68904, 68912, 68922, 69376, 69405, 69415, 69416, 69424, 69457, 69600, 69623, 69632, 69703, 69734, 69744, 69759, 69819, 69840, 69865, 69872, 69882, 69888, 69941, 69942, 69952, 69956, 69959, 69968, 70004, 70006, 70007, 70016, 70085, 70089, 70093, 70096, 70107, 70108, 70109, 70144, 70162, 70163, 70200, 70206, 70207, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 
70302, 70303, 70313, 70320, 70379, 70384, 70394, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70459, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 70488, 70493, 70500, 70502, 70509, 70512, 70517, 70656, 70731, 70736, 70746, 70750, 70752, 70784, 70854, 70855, 70856, 70864, 70874, 71040, 71094, 71096, 71105, 71128, 71134, 71168, 71233, 71236, 71237, 71248, 71258, 71296, 71353, 71360, 71370, 71424, 71451, 71453, 71468, 71472, 71482, 71680, 
71739, 71840, 71914, 71935, 71936, 72096, 72104, 72106, 72152, 72154, 72162, 72163, 72165, 72192, 72255, 72263, 72264, 72272, 72346, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72769, 72784, 72794, 72818, 72848, 72850, 72872, 72873, 72887, 72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 73050, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 73107, 73113, 73120, 73130, 73440, 73463, 73728, 74650, 74752, 74863, 74880, 75076, 77824, 
78895, 82944, 83527, 92160, 92729, 92736, 92767, 92768, 92778, 92880, 92910, 92912, 92917, 92928, 92983, 92992, 92996, 93008, 93018, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 113821, 113823, 119141, 119146, 119149, 119155, 119163, 119171, 119173, 119180, 119210, 119214, 119362, 
119365, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 120782, 120832, 
121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123184, 123198, 123200, 123210, 123214, 123215, 123584, 123642, 124928, 125125, 125136, 125143, 125184, 125260, 125264, 125274, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 
126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102, 917760, 918E3]);
property.set("ID_Start", [65, 91, 97, 123, 170, 171, 181, 182, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 880, 885, 886, 888, 890, 894, 895, 896, 902, 903, 904, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1488, 1515, 1519, 1523, 1568, 1611, 1646, 1648, 1649, 1748, 1749, 1750, 1765, 1767, 1774, 1776, 1786, 1789, 1791, 1792, 1808, 1809, 1810, 1840, 1869, 1958, 1969, 1970, 1994, 2027, 2036, 2038, 2042, 2043, 2048, 
2070, 2074, 2075, 2084, 2085, 2088, 2089, 2112, 2137, 2144, 2155, 2208, 2229, 2230, 2238, 2308, 2362, 2365, 2366, 2384, 2385, 2392, 2402, 2417, 2433, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2493, 2494, 2510, 2511, 2524, 2526, 2527, 2530, 2544, 2546, 2556, 2557, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2649, 2653, 2654, 2655, 2674, 2677, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2749, 2750, 2768, 
2769, 2784, 2786, 2809, 2810, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2877, 2878, 2908, 2910, 2911, 2914, 2929, 2930, 2947, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3024, 3025, 3077, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3134, 3160, 3163, 3168, 3170, 3200, 3201, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3261, 3262, 3294, 3295, 3296, 3298, 3313, 3315, 3333, 3341, 3342, 
3345, 3346, 3387, 3389, 3390, 3406, 3407, 3412, 3415, 3423, 3426, 3450, 3456, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3585, 3633, 3634, 3636, 3648, 3655, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3761, 3762, 3764, 3773, 3774, 3776, 3781, 3782, 3783, 3804, 3808, 3840, 3841, 3904, 3912, 3913, 3949, 3976, 3981, 4096, 4139, 4159, 4160, 4176, 4182, 4186, 4190, 4193, 4194, 4197, 4199, 4206, 4209, 4213, 4226, 4238, 4239, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 
4347, 4348, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5870, 5881, 5888, 5901, 5902, 5906, 5920, 5938, 5952, 5970, 5984, 5997, 5998, 6001, 6016, 6068, 6103, 6104, 6108, 6109, 6176, 6265, 6272, 6313, 6314, 6315, 6320, 6390, 6400, 6431, 6480, 6510, 6512, 6517, 6528, 6572, 6576, 
6602, 6656, 6679, 6688, 6741, 6823, 6824, 6917, 6964, 6981, 6988, 7043, 7073, 7086, 7088, 7098, 7142, 7168, 7204, 7245, 7248, 7258, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 7401, 7405, 7406, 7412, 7413, 7415, 7418, 7419, 7424, 7616, 7680, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8305, 8306, 8319, 8320, 8336, 8349, 8450, 
8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8585, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11503, 11506, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11648, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 12293, 12296, 12321, 12330, 12337, 12342, 12344, 12349, 12353, 12439, 12443, 12448, 12449, 
12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42528, 42538, 42540, 42560, 42607, 42623, 42654, 42656, 42736, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43010, 43011, 43014, 43015, 43019, 43020, 43043, 43072, 43124, 43138, 43188, 43250, 43256, 43259, 43260, 43261, 43263, 43274, 43302, 43312, 43335, 43360, 43389, 43396, 43443, 43471, 43472, 43488, 43493, 43494, 43504, 43514, 
43519, 43520, 43561, 43584, 43587, 43588, 43596, 43616, 43639, 43642, 43643, 43646, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43715, 43739, 43742, 43744, 43755, 43762, 43765, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44003, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64286, 64287, 64297, 64298, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 
64325, 64326, 64434, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65020, 65136, 65141, 65142, 65277, 65313, 65339, 65345, 65371, 65382, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65856, 65909, 66176, 66205, 66208, 66257, 66304, 66336, 66349, 66379, 66384, 66422, 66432, 66462, 66464, 66500, 66504, 66512, 66513, 66518, 66560, 66718, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 
66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68097, 68112, 68116, 68117, 68120, 68121, 68150, 68192, 68221, 68224, 68253, 68288, 68296, 68297, 68325, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68736, 68787, 68800, 68851, 68864, 68900, 69376, 69405, 69415, 69416, 69424, 
69446, 69600, 69623, 69635, 69688, 69763, 69808, 69840, 69865, 69891, 69927, 69956, 69957, 69968, 70003, 70006, 70007, 70019, 70067, 70081, 70085, 70106, 70107, 70108, 70109, 70144, 70162, 70163, 70188, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 70320, 70367, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70461, 70462, 70480, 70481, 70493, 70498, 70656, 70709, 70727, 70731, 70751, 70752, 70784, 70832, 70852, 70854, 70855, 70856, 71040, 
71087, 71128, 71132, 71168, 71216, 71236, 71237, 71296, 71339, 71352, 71353, 71424, 71451, 71680, 71724, 71840, 71904, 71935, 71936, 72096, 72104, 72106, 72145, 72161, 72162, 72163, 72164, 72192, 72193, 72203, 72243, 72250, 72251, 72272, 72273, 72284, 72330, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72751, 72768, 72769, 72818, 72848, 72960, 72967, 72968, 72970, 72971, 73009, 73030, 73031, 73056, 73062, 73063, 73065, 73066, 73098, 73112, 73113, 73440, 73459, 73728, 74650, 74752, 74863, 74880, 
75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92880, 92910, 92928, 92976, 92992, 92996, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94032, 94033, 94099, 94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 
119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 123136, 123181, 123191, 123198, 123214, 123215, 123584, 123628, 124928, 125125, 125184, 125252, 125259, 125260, 126464, 126468, 126469, 126496, 126497, 
126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 
173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102]);
property.set("Ideographic", [12294, 12296, 12321, 12330, 12344, 12347, 13312, 19894, 19968, 40944, 63744, 64110, 64112, 64218, 94208, 100344, 100352, 101107, 110960, 111356, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102]);
property.set("Join_Control", [8204, 8206]);
property.set("Logical_Order_Exception", [3648, 3653, 3776, 3781, 6581, 6584, 6586, 6587, 43701, 43703, 43705, 43706, 43707, 43709]);
property.set("Lowercase", [97, 123, 170, 171, 181, 182, 186, 187, 223, 247, 248, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 
342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 385, 387, 388, 389, 390, 392, 393, 396, 398, 402, 403, 405, 406, 409, 412, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 426, 428, 429, 430, 432, 433, 436, 437, 438, 439, 441, 443, 445, 448, 454, 455, 457, 458, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 
479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 499, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 570, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 660, 661, 697, 704, 
706, 736, 741, 837, 838, 881, 882, 883, 884, 887, 888, 890, 894, 912, 913, 940, 975, 976, 978, 981, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1012, 1013, 1014, 1016, 1017, 1019, 1021, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1163, 1164, 1165, 
1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 
1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1376, 1417, 4304, 4347, 4349, 4352, 5112, 
5118, 7296, 7305, 7424, 7616, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 
7760, 7761, 7762, 7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7838, 7839, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 
7852, 7853, 7854, 7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 
7944, 7952, 7958, 7968, 7976, 7984, 7992, 8000, 8006, 8016, 8024, 8032, 8040, 8048, 8062, 8064, 8072, 8080, 8088, 8096, 8104, 8112, 8117, 8118, 8120, 8126, 8127, 8130, 8133, 8134, 8136, 8144, 8148, 8150, 8152, 8160, 8168, 8178, 8181, 8182, 8184, 8305, 8306, 8319, 8320, 8336, 8349, 8458, 8459, 8462, 8464, 8467, 8468, 8495, 8496, 8500, 8501, 8505, 8506, 8508, 8510, 8518, 8522, 8526, 8527, 8560, 8576, 8580, 8581, 9424, 9450, 11312, 11359, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 
11373, 11377, 11378, 11379, 11381, 11382, 11390, 11393, 11394, 11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 
11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11493, 11500, 11501, 11502, 11503, 11507, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 
42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 42601, 42602, 42603, 42604, 42605, 42606, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42654, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42802, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 
42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42873, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42888, 42892, 42893, 42894, 42895, 42897, 
42898, 42899, 42902, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 42914, 42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42927, 42928, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42944, 42947, 42948, 43E3, 43003, 43824, 43867, 43868, 43880, 43888, 43968, 64256, 64263, 64275, 64280, 65345, 65371, 66600, 66640, 66776, 66812, 68800, 68851, 71872, 71904, 93792, 93824, 119834, 119860, 119886, 119893, 119894, 119912, 119938, 119964, 
119990, 119994, 119995, 119996, 119997, 120004, 120005, 120016, 120042, 120068, 120094, 120120, 120146, 120172, 120198, 120224, 120250, 120276, 120302, 120328, 120354, 120380, 120406, 120432, 120458, 120486, 120514, 120539, 120540, 120546, 120572, 120597, 120598, 120604, 120630, 120655, 120656, 120662, 120688, 120713, 120714, 120720, 120746, 120771, 120772, 120778, 120779, 120780, 125218, 125252]);
property.set("Math", [43, 44, 60, 63, 94, 95, 124, 125, 126, 127, 172, 173, 177, 178, 215, 216, 247, 248, 976, 979, 981, 982, 1008, 1010, 1012, 1015, 1542, 1545, 8214, 8215, 8242, 8245, 8256, 8257, 8260, 8261, 8274, 8275, 8289, 8293, 8314, 8319, 8330, 8335, 8400, 8413, 8417, 8418, 8421, 8423, 8427, 8432, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 8485, 8488, 8490, 8492, 8494, 8495, 8498, 8499, 8505, 8508, 8522, 8523, 8524, 8592, 8616, 8617, 8623, 8624, 8626, 8630, 8632, 8636, 
8668, 8669, 8670, 8676, 8678, 8692, 8960, 8968, 8972, 8992, 8994, 9084, 9085, 9115, 9142, 9143, 9144, 9168, 9169, 9180, 9187, 9632, 9634, 9646, 9656, 9660, 9666, 9670, 9672, 9674, 9676, 9679, 9684, 9698, 9699, 9700, 9701, 9703, 9709, 9720, 9728, 9733, 9735, 9792, 9793, 9794, 9795, 9824, 9828, 9837, 9840, 10176, 10240, 10496, 11008, 11056, 11077, 11079, 11085, 64297, 64298, 65121, 65127, 65128, 65129, 65291, 65292, 65308, 65311, 65340, 65341, 65342, 65343, 65372, 65373, 65374, 65375, 65506, 65507, 
65513, 65517, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120780, 120782, 120832, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 
126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 126704, 126706]);
property.set("Noncharacter_Code_Point", [64976, 65008, 65534, 65536, 131070, 131072, 196606, 196608, 262142, 262144, 327678, 327680, 393214, 393216, 458750, 458752, 524286, 524288, 589822, 589824, 655358, 655360, 720894, 720896, 786430, 786432, 851966, 851968, 917502, 917504, 983038, 983040, 1048574, 1048576, 1114110, 1114112]);
property.set("Pattern_Syntax", [33, 48, 58, 65, 91, 95, 96, 97, 123, 127, 161, 168, 169, 170, 171, 173, 174, 175, 176, 178, 182, 183, 187, 188, 191, 192, 215, 216, 247, 248, 8208, 8232, 8240, 8255, 8257, 8276, 8277, 8287, 8592, 9312, 9472, 10102, 10132, 11264, 11776, 11904, 12289, 12292, 12296, 12321, 12336, 12337, 64830, 64832, 65093, 65095]);
property.set("Pattern_White_Space", [9, 14, 32, 33, 133, 134, 8206, 8208, 8232, 8234]);
property.set("Quotation_Mark", [34, 35, 39, 40, 171, 172, 187, 188, 8216, 8224, 8249, 8251, 11842, 11843, 12300, 12304, 12317, 12320, 65089, 65093, 65282, 65283, 65287, 65288, 65378, 65380]);
property.set("Radical", [11904, 11930, 11931, 12020, 12032, 12246]);
property.set("Regional_Indicator", [127462, 127488]);
property.set("Sentence_Terminal", [33, 34, 46, 47, 63, 64, 1417, 1418, 1566, 1568, 1748, 1749, 1792, 1795, 2041, 2042, 2103, 2104, 2105, 2106, 2109, 2111, 2404, 2406, 4170, 4172, 4962, 4963, 4967, 4969, 5742, 5743, 5941, 5943, 6147, 6148, 6153, 6154, 6468, 6470, 6824, 6828, 7002, 7004, 7006, 7008, 7227, 7229, 7294, 7296, 8252, 8254, 8263, 8266, 11822, 11823, 11836, 11837, 12290, 12291, 42239, 42240, 42510, 42512, 42739, 42740, 42743, 42744, 43126, 43128, 43214, 43216, 43311, 43312, 43464, 43466, 
43613, 43616, 43760, 43762, 44011, 44012, 65106, 65107, 65110, 65112, 65281, 65282, 65294, 65295, 65311, 65312, 65377, 65378, 68182, 68184, 69461, 69466, 69703, 69705, 69822, 69826, 69953, 69956, 70085, 70087, 70093, 70094, 70110, 70112, 70200, 70202, 70203, 70205, 70313, 70314, 70731, 70733, 71106, 71108, 71113, 71128, 71233, 71235, 71484, 71487, 72258, 72260, 72347, 72349, 72769, 72771, 73463, 73465, 92782, 92784, 92917, 92918, 92983, 92985, 92996, 92997, 93848, 93849, 113823, 113824, 121480, 121481]);
property.set("Soft_Dotted", [105, 107, 303, 304, 585, 586, 616, 617, 669, 670, 690, 691, 1011, 1012, 1110, 1111, 1112, 1113, 7522, 7523, 7574, 7575, 7588, 7589, 7592, 7593, 7725, 7726, 7883, 7884, 8305, 8306, 8520, 8522, 11388, 11389, 119842, 119844, 119894, 119896, 119946, 119948, 119998, 120000, 120050, 120052, 120102, 120104, 120154, 120156, 120206, 120208, 120258, 120260, 120310, 120312, 120362, 120364, 120414, 120416, 120466, 120468]);
property.set("Terminal_Punctuation", [33, 34, 44, 45, 46, 47, 58, 60, 63, 64, 894, 895, 903, 904, 1417, 1418, 1475, 1476, 1548, 1549, 1563, 1564, 1566, 1568, 1748, 1749, 1792, 1803, 1804, 1805, 2040, 2042, 2096, 2111, 2142, 2143, 2404, 2406, 3674, 3676, 3848, 3849, 3853, 3859, 4170, 4172, 4961, 4969, 5742, 5743, 5867, 5870, 5941, 5943, 6100, 6103, 6106, 6107, 6146, 6150, 6152, 6154, 6468, 6470, 6824, 6828, 7002, 7004, 7005, 7008, 7227, 7232, 7294, 7296, 8252, 8254, 8263, 8266, 11822, 11823, 11836, 
11837, 11841, 11842, 11852, 11853, 11854, 11856, 12289, 12291, 42238, 42240, 42509, 42512, 42739, 42744, 43126, 43128, 43214, 43216, 43311, 43312, 43463, 43466, 43613, 43616, 43743, 43744, 43760, 43762, 44011, 44012, 65104, 65107, 65108, 65112, 65281, 65282, 65292, 65293, 65294, 65295, 65306, 65308, 65311, 65312, 65377, 65378, 65380, 65381, 66463, 66464, 66512, 66513, 67671, 67672, 67871, 67872, 68182, 68184, 68336, 68342, 68410, 68416, 68505, 68509, 69461, 69466, 69703, 69710, 69822, 69826, 69953, 
69956, 70085, 70087, 70093, 70094, 70110, 70112, 70200, 70205, 70313, 70314, 70731, 70734, 70747, 70748, 71106, 71110, 71113, 71128, 71233, 71235, 71484, 71487, 72258, 72260, 72347, 72349, 72353, 72355, 72769, 72772, 72817, 72818, 73463, 73465, 74864, 74869, 92782, 92784, 92917, 92918, 92983, 92986, 92996, 92997, 93847, 93849, 113823, 113824, 121479, 121483]);
property.set("Unified_Ideograph", [13312, 19894, 19968, 40944, 64014, 64016, 64017, 64018, 64019, 64021, 64031, 64032, 64033, 64034, 64035, 64037, 64039, 64042, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457]);
property.set("Uppercase", [65, 91, 192, 215, 216, 223, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 
348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 378, 379, 380, 381, 382, 385, 387, 388, 389, 390, 392, 393, 396, 398, 402, 403, 405, 406, 409, 412, 414, 415, 417, 418, 419, 420, 421, 422, 424, 425, 426, 428, 429, 430, 432, 433, 436, 437, 438, 439, 441, 444, 445, 452, 453, 455, 456, 458, 459, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 478, 479, 480, 481, 482, 483, 484, 
485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 497, 498, 500, 501, 502, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 570, 572, 573, 575, 577, 578, 579, 583, 584, 585, 586, 587, 588, 589, 590, 591, 880, 881, 882, 883, 886, 887, 895, 896, 902, 903, 
904, 907, 908, 909, 910, 912, 913, 930, 931, 940, 975, 976, 978, 981, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1012, 1013, 1015, 1016, 1017, 1019, 1021, 1072, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 
1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 
1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1329, 1367, 4256, 4294, 4295, 4296, 4301, 4302, 5024, 5110, 7312, 7355, 7357, 
7360, 7680, 7681, 7682, 7683, 7684, 7685, 7686, 7687, 7688, 7689, 7690, 7691, 7692, 7693, 7694, 7695, 7696, 7697, 7698, 7699, 7700, 7701, 7702, 7703, 7704, 7705, 7706, 7707, 7708, 7709, 7710, 7711, 7712, 7713, 7714, 7715, 7716, 7717, 7718, 7719, 7720, 7721, 7722, 7723, 7724, 7725, 7726, 7727, 7728, 7729, 7730, 7731, 7732, 7733, 7734, 7735, 7736, 7737, 7738, 7739, 7740, 7741, 7742, 7743, 7744, 7745, 7746, 7747, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7756, 7757, 7758, 7759, 7760, 7761, 7762, 
7763, 7764, 7765, 7766, 7767, 7768, 7769, 7770, 7771, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7780, 7781, 7782, 7783, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7792, 7793, 7794, 7795, 7796, 7797, 7798, 7799, 7800, 7801, 7802, 7803, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7812, 7813, 7814, 7815, 7816, 7817, 7818, 7819, 7820, 7821, 7822, 7823, 7824, 7825, 7826, 7827, 7828, 7829, 7838, 7839, 7840, 7841, 7842, 7843, 7844, 7845, 7846, 7847, 7848, 7849, 7850, 7851, 7852, 7853, 7854, 
7855, 7856, 7857, 7858, 7859, 7860, 7861, 7862, 7863, 7864, 7865, 7866, 7867, 7868, 7869, 7870, 7871, 7872, 7873, 7874, 7875, 7876, 7877, 7878, 7879, 7880, 7881, 7882, 7883, 7884, 7885, 7886, 7887, 7888, 7889, 7890, 7891, 7892, 7893, 7894, 7895, 7896, 7897, 7898, 7899, 7900, 7901, 7902, 7903, 7904, 7905, 7906, 7907, 7908, 7909, 7910, 7911, 7912, 7913, 7914, 7915, 7916, 7917, 7918, 7919, 7920, 7921, 7922, 7923, 7924, 7925, 7926, 7927, 7928, 7929, 7930, 7931, 7932, 7933, 7934, 7935, 7944, 7952, 7960, 
7966, 7976, 7984, 7992, 8000, 8008, 8014, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8040, 8048, 8120, 8124, 8136, 8140, 8152, 8156, 8168, 8173, 8184, 8188, 8450, 8451, 8455, 8456, 8459, 8462, 8464, 8467, 8469, 8470, 8473, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8494, 8496, 8500, 8510, 8512, 8517, 8518, 8544, 8560, 8579, 8580, 9398, 9424, 11264, 11311, 11360, 11361, 11362, 11365, 11367, 11368, 11369, 11370, 11371, 11372, 11373, 11377, 11378, 11379, 11381, 11382, 11390, 11393, 11394, 
11395, 11396, 11397, 11398, 11399, 11400, 11401, 11402, 11403, 11404, 11405, 11406, 11407, 11408, 11409, 11410, 11411, 11412, 11413, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 11438, 11439, 11440, 11441, 11442, 11443, 11444, 11445, 11446, 11447, 11448, 11449, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 
11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 11479, 11480, 11481, 11482, 11483, 11484, 11485, 11486, 11487, 11488, 11489, 11490, 11491, 11499, 11500, 11501, 11502, 11506, 11507, 42560, 42561, 42562, 42563, 42564, 42565, 42566, 42567, 42568, 42569, 42570, 42571, 42572, 42573, 42574, 42575, 42576, 42577, 42578, 42579, 42580, 42581, 42582, 42583, 42584, 42585, 42586, 42587, 42588, 42589, 42590, 42591, 42592, 42593, 42594, 42595, 42596, 42597, 42598, 42599, 42600, 
42601, 42602, 42603, 42604, 42605, 42624, 42625, 42626, 42627, 42628, 42629, 42630, 42631, 42632, 42633, 42634, 42635, 42636, 42637, 42638, 42639, 42640, 42641, 42642, 42643, 42644, 42645, 42646, 42647, 42648, 42649, 42650, 42651, 42786, 42787, 42788, 42789, 42790, 42791, 42792, 42793, 42794, 42795, 42796, 42797, 42798, 42799, 42802, 42803, 42804, 42805, 42806, 42807, 42808, 42809, 42810, 42811, 42812, 42813, 42814, 42815, 42816, 42817, 42818, 42819, 42820, 42821, 42822, 42823, 42824, 42825, 42826, 
42827, 42828, 42829, 42830, 42831, 42832, 42833, 42834, 42835, 42836, 42837, 42838, 42839, 42840, 42841, 42842, 42843, 42844, 42845, 42846, 42847, 42848, 42849, 42850, 42851, 42852, 42853, 42854, 42855, 42856, 42857, 42858, 42859, 42860, 42861, 42862, 42863, 42873, 42874, 42875, 42876, 42877, 42879, 42880, 42881, 42882, 42883, 42884, 42885, 42886, 42887, 42891, 42892, 42893, 42894, 42896, 42897, 42898, 42899, 42902, 42903, 42904, 42905, 42906, 42907, 42908, 42909, 42910, 42911, 42912, 42913, 42914, 
42915, 42916, 42917, 42918, 42919, 42920, 42921, 42922, 42927, 42928, 42933, 42934, 42935, 42936, 42937, 42938, 42939, 42940, 42941, 42942, 42943, 42946, 42947, 42948, 42951, 65313, 65339, 66560, 66600, 66736, 66772, 68736, 68787, 71840, 71872, 93760, 93792, 119808, 119834, 119860, 119886, 119912, 119938, 119964, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119990, 120016, 120042, 120068, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120120, 120122, 120123, 
120127, 120128, 120133, 120134, 120135, 120138, 120145, 120172, 120198, 120224, 120250, 120276, 120302, 120328, 120354, 120380, 120406, 120432, 120458, 120488, 120513, 120546, 120571, 120604, 120629, 120662, 120687, 120720, 120745, 120778, 120779, 125184, 125218, 127280, 127306, 127312, 127338, 127344, 127370]);
property.set("Variation_Selector", [6155, 6158, 65024, 65040, 917760, 918000]);
property.set("White_Space", [9, 14, 32, 33, 133, 134, 160, 161, 5760, 5761, 8192, 8203, 8232, 8234, 8239, 8240, 8287, 8288, 12288, 12289]);
property.set("XID_Continue", [48, 58, 65, 91, 95, 96, 97, 123, 170, 171, 181, 182, 183, 184, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 768, 885, 886, 888, 891, 894, 895, 896, 902, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1155, 1160, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1425, 1470, 1471, 1472, 1473, 1475, 1476, 1478, 1479, 1480, 1488, 1515, 1519, 1523, 1552, 1563, 1568, 1642, 1646, 1748, 1749, 1757, 1759, 1769, 1770, 1789, 1791, 1792, 1808, 1867, 
1869, 1970, 1984, 2038, 2042, 2043, 2045, 2046, 2048, 2094, 2112, 2140, 2144, 2155, 2208, 2229, 2230, 2238, 2259, 2274, 2275, 2404, 2406, 2416, 2417, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2534, 2546, 2556, 2557, 2558, 2559, 2561, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2649, 2653, 
2654, 2655, 2662, 2678, 2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2800, 2809, 2816, 2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2908, 2910, 2911, 2916, 2918, 2928, 2929, 2930, 2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 
3014, 3017, 3018, 3022, 3024, 3025, 3031, 3032, 3046, 3056, 3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3160, 3163, 3168, 3172, 3174, 3184, 3200, 3204, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 3313, 3315, 3328, 3332, 3333, 3341, 3342, 3345, 3346, 3397, 3398, 3401, 3402, 3407, 3412, 3416, 3423, 3428, 3430, 3440, 3450, 3456, 3458, 3460, 3461, 3479, 
3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3572, 3585, 3643, 3648, 3663, 3664, 3674, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3774, 3776, 3781, 3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808, 3840, 3841, 3864, 3866, 3872, 3882, 3893, 3894, 3895, 3896, 3897, 3898, 3902, 3912, 3913, 3949, 3953, 3973, 3974, 3992, 3993, 4029, 4038, 4039, 4096, 4170, 4176, 4254, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 
4348, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4960, 4969, 4978, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5870, 5881, 5888, 5901, 5902, 5909, 5920, 5941, 5952, 5972, 5984, 5997, 5998, 6001, 6002, 6004, 6016, 6100, 6103, 6104, 6108, 6110, 6112, 6122, 6155, 6158, 6160, 6170, 6176, 6265, 6272, 6315, 6320, 6390, 
6400, 6431, 6432, 6444, 6448, 6460, 6470, 6510, 6512, 6517, 6528, 6572, 6576, 6602, 6608, 6619, 6656, 6684, 6688, 6751, 6752, 6781, 6783, 6794, 6800, 6810, 6823, 6824, 6832, 6846, 6912, 6988, 6992, 7002, 7019, 7028, 7040, 7156, 7168, 7224, 7232, 7242, 7245, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 7376, 7379, 7380, 7419, 7424, 7674, 7675, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 
8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8255, 8257, 8276, 8277, 8305, 8306, 8319, 8320, 8336, 8349, 8400, 8413, 8417, 8418, 8421, 8433, 8450, 8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8585, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11647, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 
11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 11744, 11776, 12293, 12296, 12321, 12336, 12337, 12342, 12344, 12349, 12353, 12439, 12441, 12443, 12445, 12448, 12449, 12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42540, 42560, 42608, 42612, 42622, 42623, 42738, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43048, 43072, 43124, 43136, 43206, 43216, 43226, 43232, 
43256, 43259, 43260, 43261, 43310, 43312, 43348, 43360, 43389, 43392, 43457, 43471, 43482, 43488, 43519, 43520, 43575, 43584, 43598, 43600, 43610, 43616, 43639, 43642, 43715, 43739, 43742, 43744, 43760, 43762, 43767, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44011, 44012, 44014, 44016, 44026, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64297, 64298, 64311, 64312, 64317, 64318, 
64319, 64320, 64322, 64323, 64325, 64326, 64434, 64467, 64606, 64612, 64830, 64848, 64912, 64914, 64968, 65008, 65018, 65024, 65040, 65056, 65072, 65075, 65077, 65101, 65104, 65137, 65138, 65139, 65140, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65277, 65296, 65306, 65313, 65339, 65343, 65344, 65345, 65371, 65382, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65856, 
65909, 66045, 66046, 66176, 66205, 66208, 66257, 66272, 66273, 66304, 66336, 66349, 66379, 66384, 66427, 66432, 66462, 66464, 66500, 66504, 66512, 66513, 66518, 66560, 66718, 66720, 66730, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68100, 68101, 
68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 68159, 68160, 68192, 68221, 68224, 68253, 68288, 68296, 68297, 68327, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 68498, 68608, 68681, 68736, 68787, 68800, 68851, 68864, 68904, 68912, 68922, 69376, 69405, 69415, 69416, 69424, 69457, 69600, 69623, 69632, 69703, 69734, 69744, 69759, 69819, 69840, 69865, 69872, 69882, 69888, 69941, 69942, 69952, 69956, 69959, 69968, 70004, 70006, 70007, 70016, 70085, 70089, 70093, 70096, 70107, 70108, 
70109, 70144, 70162, 70163, 70200, 70206, 70207, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 70320, 70379, 70384, 70394, 70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70459, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 70488, 70493, 70500, 70502, 70509, 70512, 70517, 70656, 70731, 70736, 70746, 70750, 70752, 70784, 70854, 70855, 70856, 70864, 70874, 71040, 71094, 71096, 71105, 71128, 71134, 71168, 71233, 71236, 
71237, 71248, 71258, 71296, 71353, 71360, 71370, 71424, 71451, 71453, 71468, 71472, 71482, 71680, 71739, 71840, 71914, 71935, 71936, 72096, 72104, 72106, 72152, 72154, 72162, 72163, 72165, 72192, 72255, 72263, 72264, 72272, 72346, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72759, 72760, 72769, 72784, 72794, 72818, 72848, 72850, 72872, 72873, 72887, 72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 73050, 73056, 73062, 73063, 73065, 73066, 73103, 73104, 
73106, 73107, 73113, 73120, 73130, 73440, 73463, 73728, 74650, 74752, 74863, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92768, 92778, 92880, 92910, 92912, 92917, 92928, 92983, 92992, 92996, 93008, 93018, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94031, 94088, 94095, 94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 
113821, 113823, 119141, 119146, 119149, 119155, 119163, 119171, 119173, 119180, 119210, 119214, 119362, 119365, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 
120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 120782, 120832, 121344, 121399, 121403, 121453, 121461, 121462, 121476, 121477, 121499, 121504, 121505, 121520, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923, 123136, 123181, 123184, 123198, 123200, 123210, 123214, 123215, 123584, 123642, 124928, 125125, 125136, 125143, 125184, 125260, 125264, 125274, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 
126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 
183970, 183984, 191457, 194560, 195102, 917760, 918E3]);
property.set("XID_Start", [65, 91, 97, 123, 170, 171, 181, 182, 186, 187, 192, 215, 216, 247, 248, 706, 710, 722, 736, 741, 748, 749, 750, 751, 880, 885, 886, 888, 891, 894, 895, 896, 902, 903, 904, 907, 908, 909, 910, 930, 931, 1014, 1015, 1154, 1162, 1328, 1329, 1367, 1369, 1370, 1376, 1417, 1488, 1515, 1519, 1523, 1568, 1611, 1646, 1648, 1649, 1748, 1749, 1750, 1765, 1767, 1774, 1776, 1786, 1789, 1791, 1792, 1808, 1809, 1810, 1840, 1869, 1958, 1969, 1970, 1994, 2027, 2036, 2038, 2042, 2043, 2048, 
2070, 2074, 2075, 2084, 2085, 2088, 2089, 2112, 2137, 2144, 2155, 2208, 2229, 2230, 2238, 2308, 2362, 2365, 2366, 2384, 2385, 2392, 2402, 2417, 2433, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2493, 2494, 2510, 2511, 2524, 2526, 2527, 2530, 2544, 2546, 2556, 2557, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2649, 2653, 2654, 2655, 2674, 2677, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2749, 2750, 2768, 
2769, 2784, 2786, 2809, 2810, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2877, 2878, 2908, 2910, 2911, 2914, 2929, 2930, 2947, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3024, 3025, 3077, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3134, 3160, 3163, 3168, 3170, 3200, 3201, 3205, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3261, 3262, 3294, 3295, 3296, 3298, 3313, 3315, 3333, 3341, 3342, 
3345, 3346, 3387, 3389, 3390, 3406, 3407, 3412, 3415, 3423, 3426, 3450, 3456, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3585, 3633, 3634, 3635, 3648, 3655, 3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3761, 3762, 3763, 3773, 3774, 3776, 3781, 3782, 3783, 3804, 3808, 3840, 3841, 3904, 3912, 3913, 3949, 3976, 3981, 4096, 4139, 4159, 4160, 4176, 4182, 4186, 4190, 4193, 4194, 4197, 4199, 4206, 4209, 4213, 4226, 4238, 4239, 4256, 4294, 4295, 4296, 4301, 4302, 4304, 
4347, 4348, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4992, 5008, 5024, 5110, 5112, 5118, 5121, 5741, 5743, 5760, 5761, 5787, 5792, 5867, 5870, 5881, 5888, 5901, 5902, 5906, 5920, 5938, 5952, 5970, 5984, 5997, 5998, 6001, 6016, 6068, 6103, 6104, 6108, 6109, 6176, 6265, 6272, 6313, 6314, 6315, 6320, 6390, 6400, 6431, 6480, 6510, 6512, 6517, 6528, 6572, 6576, 
6602, 6656, 6679, 6688, 6741, 6823, 6824, 6917, 6964, 6981, 6988, 7043, 7073, 7086, 7088, 7098, 7142, 7168, 7204, 7245, 7248, 7258, 7294, 7296, 7305, 7312, 7355, 7357, 7360, 7401, 7405, 7406, 7412, 7413, 7415, 7418, 7419, 7424, 7616, 7680, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8125, 8126, 8127, 8130, 8133, 8134, 8141, 8144, 8148, 8150, 8156, 8160, 8173, 8178, 8181, 8182, 8189, 8305, 8306, 8319, 8320, 8336, 8349, 8450, 
8451, 8455, 8456, 8458, 8468, 8469, 8470, 8472, 8478, 8484, 8485, 8486, 8487, 8488, 8489, 8490, 8506, 8508, 8512, 8517, 8522, 8526, 8527, 8544, 8585, 11264, 11311, 11312, 11359, 11360, 11493, 11499, 11503, 11506, 11508, 11520, 11558, 11559, 11560, 11565, 11566, 11568, 11624, 11631, 11632, 11648, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 12293, 12296, 12321, 12330, 12337, 12342, 12344, 12349, 12353, 12439, 12445, 12448, 12449, 
12539, 12540, 12544, 12549, 12592, 12593, 12687, 12704, 12731, 12784, 12800, 13312, 19894, 19968, 40944, 40960, 42125, 42192, 42238, 42240, 42509, 42512, 42528, 42538, 42540, 42560, 42607, 42623, 42654, 42656, 42736, 42775, 42784, 42786, 42889, 42891, 42944, 42946, 42951, 42999, 43010, 43011, 43014, 43015, 43019, 43020, 43043, 43072, 43124, 43138, 43188, 43250, 43256, 43259, 43260, 43261, 43263, 43274, 43302, 43312, 43335, 43360, 43389, 43396, 43443, 43471, 43472, 43488, 43493, 43494, 43504, 43514, 
43519, 43520, 43561, 43584, 43587, 43588, 43596, 43616, 43639, 43642, 43643, 43646, 43696, 43697, 43698, 43701, 43703, 43705, 43710, 43712, 43713, 43714, 43715, 43739, 43742, 43744, 43755, 43762, 43765, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823, 43824, 43867, 43868, 43880, 43888, 44003, 44032, 55204, 55216, 55239, 55243, 55292, 63744, 64110, 64112, 64218, 64256, 64263, 64275, 64280, 64285, 64286, 64287, 64297, 64298, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 
64325, 64326, 64434, 64467, 64606, 64612, 64830, 64848, 64912, 64914, 64968, 65008, 65018, 65137, 65138, 65139, 65140, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65277, 65313, 65339, 65345, 65371, 65382, 65438, 65440, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501, 65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787, 65856, 65909, 66176, 66205, 66208, 66257, 66304, 66336, 66349, 66379, 66384, 66422, 66432, 66462, 66464, 
66500, 66504, 66512, 66513, 66518, 66560, 66718, 66736, 66772, 66776, 66812, 66816, 66856, 66864, 66916, 67072, 67383, 67392, 67414, 67424, 67432, 67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67670, 67680, 67703, 67712, 67743, 67808, 67827, 67828, 67830, 67840, 67862, 67872, 67898, 67968, 68024, 68030, 68032, 68096, 68097, 68112, 68116, 68117, 68120, 68121, 68150, 68192, 68221, 68224, 68253, 68288, 68296, 68297, 68325, 68352, 68406, 68416, 68438, 68448, 68467, 68480, 
68498, 68608, 68681, 68736, 68787, 68800, 68851, 68864, 68900, 69376, 69405, 69415, 69416, 69424, 69446, 69600, 69623, 69635, 69688, 69763, 69808, 69840, 69865, 69891, 69927, 69956, 69957, 69968, 70003, 70006, 70007, 70019, 70067, 70081, 70085, 70106, 70107, 70108, 70109, 70144, 70162, 70163, 70188, 70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70313, 70320, 70367, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70461, 70462, 70480, 70481, 70493, 
70498, 70656, 70709, 70727, 70731, 70751, 70752, 70784, 70832, 70852, 70854, 70855, 70856, 71040, 71087, 71128, 71132, 71168, 71216, 71236, 71237, 71296, 71339, 71352, 71353, 71424, 71451, 71680, 71724, 71840, 71904, 71935, 71936, 72096, 72104, 72106, 72145, 72161, 72162, 72163, 72164, 72192, 72193, 72203, 72243, 72250, 72251, 72272, 72273, 72284, 72330, 72349, 72350, 72384, 72441, 72704, 72713, 72714, 72751, 72768, 72769, 72818, 72848, 72960, 72967, 72968, 72970, 72971, 73009, 73030, 73031, 73056, 
73062, 73063, 73065, 73066, 73098, 73112, 73113, 73440, 73459, 73728, 74650, 74752, 74863, 74880, 75076, 77824, 78895, 82944, 83527, 92160, 92729, 92736, 92767, 92880, 92910, 92928, 92976, 92992, 92996, 93027, 93048, 93053, 93072, 93760, 93824, 93952, 94027, 94032, 94033, 94099, 94112, 94176, 94178, 94179, 94180, 94208, 100344, 100352, 101107, 110592, 110879, 110928, 110931, 110948, 110952, 110960, 111356, 113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 119808, 119893, 119894, 119965, 
119966, 119968, 119970, 119971, 119973, 119975, 119977, 119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120513, 120514, 120539, 120540, 120571, 120572, 120597, 120598, 120629, 120630, 120655, 120656, 120687, 120688, 120713, 120714, 120745, 120746, 120771, 120772, 120780, 123136, 123181, 123191, 123198, 123214, 123215, 123584, 
123628, 124928, 125125, 125184, 125252, 125259, 125260, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 
126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102]);
var script = new Map(), scriptExtensions = new Map();
script.set("Adlam", [125184, 125260, 125264, 125274, 125278, 125280]);
scriptExtensions.set("Adlam", [1600, 1601]);
script.set("Ahom", [71424, 71451, 71453, 71468, 71472, 71488]);
scriptExtensions.set("Ahom", []);
script.set("Anatolian_Hieroglyphs", [82944, 83527]);
scriptExtensions.set("Anatolian_Hieroglyphs", []);
script.set("Arabic", [1536, 1541, 1542, 1548, 1549, 1563, 1564, 1565, 1566, 1567, 1568, 1600, 1601, 1611, 1622, 1648, 1649, 1757, 1758, 1792, 1872, 1920, 2208, 2229, 2230, 2238, 2259, 2274, 2275, 2304, 64336, 64450, 64467, 64830, 64848, 64912, 64914, 64968, 65008, 65022, 65136, 65141, 65142, 65277, 69216, 69247, 126464, 126468, 126469, 126496, 126497, 126499, 126500, 126501, 126503, 126504, 126505, 126515, 126516, 126520, 126521, 126522, 126523, 126524, 126530, 126531, 126535, 126536, 126537, 126538, 
126539, 126540, 126541, 126544, 126545, 126547, 126548, 126549, 126551, 126552, 126553, 126554, 126555, 126556, 126557, 126558, 126559, 126560, 126561, 126563, 126564, 126565, 126567, 126571, 126572, 126579, 126580, 126584, 126585, 126589, 126590, 126591, 126592, 126602, 126603, 126620, 126625, 126628, 126629, 126634, 126635, 126652, 126704, 126706]);
scriptExtensions.set("Arabic", [1548, 1549, 1563, 1564, 1567, 1568, 1600, 1601, 1611, 1622, 1648, 1649, 66272, 66300]);
script.set("Armenian", [1329, 1367, 1369, 1417, 1418, 1419, 1421, 1424, 64275, 64280]);
scriptExtensions.set("Armenian", [1417, 1418]);
script.set("Avestan", [68352, 68406, 68409, 68416]);
scriptExtensions.set("Avestan", []);
script.set("Balinese", [6912, 6988, 6992, 7037]);
scriptExtensions.set("Balinese", []);
script.set("Bamum", [42656, 42744, 92160, 92729]);
scriptExtensions.set("Bamum", []);
script.set("Bassa_Vah", [92880, 92910, 92912, 92918]);
scriptExtensions.set("Bassa_Vah", []);
script.set("Batak", [7104, 7156, 7164, 7168]);
scriptExtensions.set("Batak", []);
script.set("Bengali", [2432, 2436, 2437, 2445, 2447, 2449, 2451, 2473, 2474, 2481, 2482, 2483, 2486, 2490, 2492, 2501, 2503, 2505, 2507, 2511, 2519, 2520, 2524, 2526, 2527, 2532, 2534, 2559]);
scriptExtensions.set("Bengali", [2385, 2387, 2404, 2406, 7376, 7377, 7378, 7379, 7381, 7383, 7384, 7385, 7393, 7394, 7402, 7403, 7405, 7406, 7410, 7411, 7413, 7416, 43249, 43250]);
script.set("Bhaiksuki", [72704, 72713, 72714, 72759, 72760, 72774, 72784, 72813]);
scriptExtensions.set("Bhaiksuki", []);
script.set("Bopomofo", [746, 748, 12549, 12592, 12704, 12731]);
scriptExtensions.set("Bopomofo", [12289, 12292, 12296, 12306, 12307, 12320, 12330, 12334, 12336, 12337, 12343, 12344, 12539, 12540, 65093, 65095, 65377, 65382]);
script.set("Brahmi", [69632, 69710, 69714, 69744, 69759, 69760]);
scriptExtensions.set("Brahmi", []);
script.set("Braille", [10240, 10496]);
scriptExtensions.set("Braille", []);
script.set("Buginese", [6656, 6684, 6686, 6688]);
scriptExtensions.set("Buginese", [43471, 43472]);
script.set("Buhid", [5952, 5972]);
scriptExtensions.set("Buhid", [5941, 5943]);
script.set("Canadian_Aboriginal", [5120, 5760, 6320, 6390]);
scriptExtensions.set("Canadian_Aboriginal", []);
script.set("Carian", [66208, 66257]);
scriptExtensions.set("Carian", []);
script.set("Caucasian_Albanian", [66864, 66916, 66927, 66928]);
scriptExtensions.set("Caucasian_Albanian", []);
script.set("Chakma", [69888, 69941, 69942, 69959]);
scriptExtensions.set("Chakma", [2534, 2544, 4160, 4170]);
script.set("Cham", [43520, 43575, 43584, 43598, 43600, 43610, 43612, 43616]);
scriptExtensions.set("Cham", []);
script.set("Cherokee", [5024, 5110, 5112, 5118, 43888, 43968]);
scriptExtensions.set("Cherokee", []);
script.set("Common", [0, 65, 91, 97, 123, 170, 171, 186, 187, 192, 215, 216, 247, 248, 697, 736, 741, 746, 748, 768, 884, 885, 894, 895, 901, 902, 903, 904, 1417, 1418, 1541, 1542, 1548, 1549, 1563, 1564, 1567, 1568, 1600, 1601, 1757, 1758, 2274, 2275, 2404, 2406, 3647, 3648, 4053, 4057, 4347, 4348, 5867, 5870, 5941, 5943, 6146, 6148, 6149, 6150, 7379, 7380, 7393, 7394, 7401, 7405, 7406, 7412, 7413, 7416, 7418, 7419, 8192, 8204, 8206, 8293, 8294, 8305, 8308, 8319, 8320, 8335, 8352, 8384, 8448, 8486, 
8487, 8490, 8492, 8498, 8499, 8526, 8527, 8544, 8585, 8588, 8592, 9255, 9280, 9291, 9312, 10240, 10496, 11124, 11126, 11158, 11160, 11264, 11776, 11856, 12272, 12284, 12288, 12293, 12294, 12295, 12296, 12321, 12336, 12344, 12348, 12352, 12443, 12445, 12448, 12449, 12539, 12541, 12688, 12704, 12736, 12772, 12832, 12896, 12927, 13008, 13144, 13312, 19904, 19968, 42752, 42786, 42888, 42891, 43056, 43066, 43310, 43311, 43471, 43472, 43867, 43868, 64830, 64832, 65040, 65050, 65072, 65107, 65108, 65127, 
65128, 65132, 65279, 65280, 65281, 65313, 65339, 65345, 65371, 65382, 65392, 65393, 65438, 65440, 65504, 65511, 65512, 65519, 65529, 65534, 65792, 65795, 65799, 65844, 65847, 65856, 65936, 65948, 66000, 66045, 66273, 66300, 94178, 94180, 113824, 113828, 118784, 119030, 119040, 119079, 119081, 119143, 119146, 119163, 119171, 119173, 119180, 119210, 119214, 119273, 119520, 119540, 119552, 119639, 119648, 119673, 119808, 119893, 119894, 119965, 119966, 119968, 119970, 119971, 119973, 119975, 119977, 
119981, 119982, 119994, 119995, 119996, 119997, 120004, 120005, 120070, 120071, 120075, 120077, 120085, 120086, 120093, 120094, 120122, 120123, 120127, 120128, 120133, 120134, 120135, 120138, 120145, 120146, 120486, 120488, 120780, 120782, 120832, 126065, 126133, 126209, 126270, 126976, 127020, 127024, 127124, 127136, 127151, 127153, 127168, 127169, 127184, 127185, 127222, 127232, 127245, 127248, 127341, 127344, 127405, 127462, 127488, 127489, 127491, 127504, 127548, 127552, 127561, 127568, 127570, 
127584, 127590, 127744, 128726, 128736, 128749, 128752, 128763, 128768, 128884, 128896, 128985, 128992, 129004, 129024, 129036, 129040, 129096, 129104, 129114, 129120, 129160, 129168, 129198, 129280, 129292, 129293, 129394, 129395, 129399, 129402, 129443, 129445, 129451, 129454, 129483, 129485, 129620, 129632, 129646, 129648, 129652, 129656, 129659, 129664, 129667, 129680, 129686, 917505, 917506, 917536, 917632]);
scriptExtensions.set("Common", []);
script.set("Coptic", [994, 1008, 11392, 11508, 11513, 11520]);
scriptExtensions.set("Coptic", [66272, 66300]);
script.set("Cuneiform", [73728, 74650, 74752, 74863, 74864, 74869, 74880, 75076]);
scriptExtensions.set("Cuneiform", []);
script.set("Cypriot", [67584, 67590, 67592, 67593, 67594, 67638, 67639, 67641, 67644, 67645, 67647, 67648]);
scriptExtensions.set("Cypriot", [65792, 65795, 65799, 65844, 65847, 65856]);
script.set("Cyrillic", [1024, 1157, 1159, 1328, 7296, 7305, 7467, 7468, 7544, 7545, 11744, 11776, 42560, 42656, 65070, 65072]);
scriptExtensions.set("Cyrillic", [1157, 1159, 11843, 11844]);
script.set("Deseret", [66560, 66640]);
scriptExtensions.set("Deseret", []);
script.set("Devanagari", [2304, 2385, 2389, 2404, 2406, 2432, 43232, 43264]);
scriptExtensions.set("Devanagari", [2385, 2387, 2404, 2406, 7376, 7415, 7416, 7418, 8432, 8433, 43056, 43066]);
script.set("Dogra", [71680, 71740]);
scriptExtensions.set("Dogra", [2404, 2416, 43056, 43066]);
script.set("Duployan", [113664, 113771, 113776, 113789, 113792, 113801, 113808, 113818, 113820, 113824]);
scriptExtensions.set("Duployan", [113824, 113828]);
script.set("Egyptian_Hieroglyphs", [77824, 78895, 78896, 78905]);
scriptExtensions.set("Egyptian_Hieroglyphs", []);
script.set("Elbasan", [66816, 66856]);
scriptExtensions.set("Elbasan", []);
script.set("Ethiopic", [4608, 4681, 4682, 4686, 4688, 4695, 4696, 4697, 4698, 4702, 4704, 4745, 4746, 4750, 4752, 4785, 4786, 4790, 4792, 4799, 4800, 4801, 4802, 4806, 4808, 4823, 4824, 4881, 4882, 4886, 4888, 4955, 4957, 4989, 4992, 5018, 11648, 11671, 11680, 11687, 11688, 11695, 11696, 11703, 11704, 11711, 11712, 11719, 11720, 11727, 11728, 11735, 11736, 11743, 43777, 43783, 43785, 43791, 43793, 43799, 43808, 43815, 43816, 43823]);
scriptExtensions.set("Ethiopic", []);
script.set("Georgian", [4256, 4294, 4295, 4296, 4301, 4302, 4304, 4347, 4348, 4352, 7312, 7355, 7357, 7360, 11520, 11558, 11559, 11560, 11565, 11566]);
scriptExtensions.set("Georgian", [1417, 1418, 4347, 4348]);
script.set("Glagolitic", [11264, 11311, 11312, 11359, 122880, 122887, 122888, 122905, 122907, 122914, 122915, 122917, 122918, 122923]);
scriptExtensions.set("Glagolitic", [1156, 1157, 1159, 1160, 11843, 11844, 42607, 42608]);
script.set("Gothic", [66352, 66379]);
scriptExtensions.set("Gothic", []);
script.set("Grantha", [70400, 70404, 70405, 70413, 70415, 70417, 70419, 70441, 70442, 70449, 70450, 70452, 70453, 70458, 70460, 70469, 70471, 70473, 70475, 70478, 70480, 70481, 70487, 70488, 70493, 70500, 70502, 70509, 70512, 70517]);
scriptExtensions.set("Grantha", [2385, 2387, 2404, 2406, 3046, 3060, 7376, 7377, 7378, 7380, 7410, 7413, 7416, 7418, 8432, 8433, 70459, 70460, 73680, 73682, 73683, 73684]);
script.set("Greek", [880, 884, 885, 888, 890, 894, 895, 896, 900, 901, 902, 903, 904, 907, 908, 909, 910, 930, 931, 994, 1008, 1024, 7462, 7467, 7517, 7522, 7526, 7531, 7615, 7616, 7936, 7958, 7960, 7966, 7968, 8006, 8008, 8014, 8016, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8062, 8064, 8117, 8118, 8133, 8134, 8148, 8150, 8156, 8157, 8176, 8178, 8181, 8182, 8191, 8486, 8487, 43877, 43878, 65856, 65935, 65952, 65953, 119296, 119366]);
scriptExtensions.set("Greek", [834, 835, 837, 838, 7616, 7618]);
script.set("Gujarati", [2689, 2692, 2693, 2702, 2703, 2706, 2707, 2729, 2730, 2737, 2738, 2740, 2741, 2746, 2748, 2758, 2759, 2762, 2763, 2766, 2768, 2769, 2784, 2788, 2790, 2802, 2809, 2816]);
scriptExtensions.set("Gujarati", [2385, 2387, 2404, 2406, 43056, 43066]);
script.set("Gunjala_Gondi", [73056, 73062, 73063, 73065, 73066, 73103, 73104, 73106, 73107, 73113, 73120, 73130]);
scriptExtensions.set("Gunjala_Gondi", [2404, 2406]);
script.set("Gurmukhi", [2561, 2564, 2565, 2571, 2575, 2577, 2579, 2601, 2602, 2609, 2610, 2612, 2613, 2615, 2616, 2618, 2620, 2621, 2622, 2627, 2631, 2633, 2635, 2638, 2641, 2642, 2649, 2653, 2654, 2655, 2662, 2679]);
scriptExtensions.set("Gurmukhi", [2385, 2387, 2404, 2406, 43056, 43066]);
script.set("Han", [11904, 11930, 11931, 12020, 12032, 12246, 12293, 12294, 12295, 12296, 12321, 12330, 12344, 12348, 13312, 19894, 19968, 40944, 63744, 64110, 64112, 64218, 131072, 173783, 173824, 177973, 177984, 178206, 178208, 183970, 183984, 191457, 194560, 195102]);
scriptExtensions.set("Han", [12289, 12292, 12294, 12295, 12296, 12306, 12307, 12320, 12330, 12334, 12336, 12337, 12343, 12344, 12348, 12352, 12539, 12540, 12688, 12704, 12736, 12772, 12832, 12872, 12928, 12977, 12992, 13004, 13144, 13169, 13179, 13184, 13280, 13311, 65093, 65095, 65377, 65382, 119648, 119666, 127568, 127570]);
script.set("Hangul", [4352, 4608, 12334, 12336, 12593, 12687, 12800, 12831, 12896, 12927, 43360, 43389, 44032, 55204, 55216, 55239, 55243, 55292, 65440, 65471, 65474, 65480, 65482, 65488, 65490, 65496, 65498, 65501]);
scriptExtensions.set("Hangul", [12289, 12292, 12296, 12306, 12307, 12320, 12336, 12337, 12343, 12344, 12539, 12540, 65093, 65095, 65377, 65382]);
script.set("Hanifi_Rohingya", [68864, 68904, 68912, 68922]);
scriptExtensions.set("Hanifi_Rohingya", [1548, 1549, 1563, 1564, 1567, 1568, 1600, 1601, 1748, 1749]);
script.set("Hanunoo", [5920, 5941]);
scriptExtensions.set("Hanunoo", [5941, 5943]);
script.set("Hatran", [67808, 67827, 67828, 67830, 67835, 67840]);
scriptExtensions.set("Hatran", []);
script.set("Hebrew", [1425, 1480, 1488, 1515, 1519, 1525, 64285, 64311, 64312, 64317, 64318, 64319, 64320, 64322, 64323, 64325, 64326, 64336]);
scriptExtensions.set("Hebrew", []);
script.set("Hiragana", [12353, 12439, 12445, 12448, 110593, 110879, 110928, 110931, 127488, 127489]);
scriptExtensions.set("Hiragana", [12289, 12292, 12296, 12306, 12307, 12320, 12336, 12342, 12343, 12344, 12348, 12350, 12441, 12445, 12448, 12449, 12539, 12541, 65093, 65095, 65377, 65382, 65392, 65393, 65438, 65440]);
script.set("Imperial_Aramaic", [67648, 67670, 67671, 67680]);
scriptExtensions.set("Imperial_Aramaic", []);
script.set("Inherited", [768, 880, 1157, 1159, 1611, 1622, 1648, 1649, 2385, 2389, 6832, 6847, 7376, 7379, 7380, 7393, 7394, 7401, 7405, 7406, 7412, 7413, 7416, 7418, 7616, 7674, 7675, 7680, 8204, 8206, 8400, 8433, 12330, 12334, 12441, 12443, 65024, 65040, 65056, 65070, 66045, 66046, 66272, 66273, 70459, 70460, 119143, 119146, 119163, 119171, 119173, 119180, 119210, 119214, 917760, 918000]);
scriptExtensions.set("Inherited", []);
script.set("Inscriptional_Pahlavi", [68448, 68467, 68472, 68480]);
scriptExtensions.set("Inscriptional_Pahlavi", []);
script.set("Inscriptional_Parthian", [68416, 68438, 68440, 68448]);
scriptExtensions.set("Inscriptional_Parthian", []);
script.set("Javanese", [43392, 43470, 43472, 43482, 43486, 43488]);
scriptExtensions.set("Javanese", [43471, 43472]);
script.set("Kaithi", [69760, 69826, 69837, 69838]);
scriptExtensions.set("Kaithi", [2406, 2416, 43056, 43066]);
script.set("Kannada", [3200, 3213, 3214, 3217, 3218, 3241, 3242, 3252, 3253, 3258, 3260, 3269, 3270, 3273, 3274, 3278, 3285, 3287, 3294, 3295, 3296, 3300, 3302, 3312, 3313, 3315]);
scriptExtensions.set("Kannada", [2385, 2387, 2404, 2406, 7376, 7377, 7378, 7379, 7386, 7387, 7410, 7411, 7412, 7413, 43056, 43062]);
script.set("Katakana", [12449, 12539, 12541, 12544, 12784, 12800, 13008, 13055, 13056, 13144, 65382, 65392, 65393, 65438, 110592, 110593, 110948, 110952]);
scriptExtensions.set("Katakana", [12289, 12292, 12296, 12306, 12307, 12320, 12336, 12342, 12343, 12344, 12348, 12350, 12441, 12445, 12448, 12449, 12539, 12541, 65093, 65095, 65377, 65382, 65392, 65393, 65438, 65440]);
script.set("Kayah_Li", [43264, 43310, 43311, 43312]);
scriptExtensions.set("Kayah_Li", [43310, 43311]);
script.set("Kharoshthi", [68096, 68100, 68101, 68103, 68108, 68116, 68117, 68120, 68121, 68150, 68152, 68155, 68159, 68169, 68176, 68185]);
scriptExtensions.set("Kharoshthi", []);
script.set("Khmer", [6016, 6110, 6112, 6122, 6128, 6138, 6624, 6656]);
scriptExtensions.set("Khmer", []);
script.set("Khojki", [70144, 70162, 70163, 70207]);
scriptExtensions.set("Khojki", [2790, 2800, 43056, 43066]);
script.set("Khudawadi", [70320, 70379, 70384, 70394]);
scriptExtensions.set("Khudawadi", [2404, 2406, 43056, 43066]);
script.set("Lao", [3713, 3715, 3716, 3717, 3718, 3723, 3724, 3748, 3749, 3750, 3751, 3774, 3776, 3781, 3782, 3783, 3784, 3790, 3792, 3802, 3804, 3808]);
scriptExtensions.set("Lao", []);
script.set("Latin", [65, 91, 97, 123, 170, 171, 186, 187, 192, 215, 216, 247, 248, 697, 736, 741, 7424, 7462, 7468, 7517, 7522, 7526, 7531, 7544, 7545, 7615, 7680, 7936, 8305, 8306, 8319, 8320, 8336, 8349, 8490, 8492, 8498, 8499, 8526, 8527, 8544, 8585, 11360, 11392, 42786, 42888, 42891, 42944, 42946, 42951, 42999, 43008, 43824, 43867, 43868, 43877, 43878, 43880, 64256, 64263, 65313, 65339, 65345, 65371]);
scriptExtensions.set("Latin", [867, 880, 1157, 1159, 2385, 2387, 4347, 4348, 8239, 8240, 8432, 8433, 43310, 43311]);
script.set("Lepcha", [7168, 7224, 7227, 7242, 7245, 7248]);
scriptExtensions.set("Lepcha", []);
script.set("Limbu", [6400, 6431, 6432, 6444, 6448, 6460, 6464, 6465, 6468, 6480]);
scriptExtensions.set("Limbu", [2405, 2406]);
script.set("Linear_A", [67072, 67383, 67392, 67414, 67424, 67432]);
scriptExtensions.set("Linear_A", [65799, 65844]);
script.set("Linear_B", [65536, 65548, 65549, 65575, 65576, 65595, 65596, 65598, 65599, 65614, 65616, 65630, 65664, 65787]);
scriptExtensions.set("Linear_B", [65792, 65795, 65799, 65844, 65847, 65856]);
script.set("Lisu", [42192, 42240]);
scriptExtensions.set("Lisu", []);
script.set("Lycian", [66176, 66205]);
scriptExtensions.set("Lycian", []);
script.set("Lydian", [67872, 67898, 67903, 67904]);
scriptExtensions.set("Lydian", []);
script.set("Mahajani", [69968, 70007]);
scriptExtensions.set("Mahajani", [2404, 2416, 43056, 43066]);
script.set("Makasar", [73440, 73465]);
scriptExtensions.set("Makasar", []);
script.set("Malayalam", [3328, 3332, 3333, 3341, 3342, 3345, 3346, 3397, 3398, 3401, 3402, 3408, 3412, 3428, 3430, 3456]);
scriptExtensions.set("Malayalam", [2385, 2387, 2404, 2406, 7386, 7387, 43056, 43059]);
script.set("Mandaic", [2112, 2140, 2142, 2143]);
scriptExtensions.set("Mandaic", [1600, 1601]);
script.set("Manichaean", [68288, 68327, 68331, 68343]);
scriptExtensions.set("Manichaean", [1600, 1601]);
script.set("Marchen", [72816, 72848, 72850, 72872, 72873, 72887]);
scriptExtensions.set("Marchen", []);
script.set("Medefaidrin", [93760, 93851]);
scriptExtensions.set("Medefaidrin", []);
script.set("Masaram_Gondi", [72960, 72967, 72968, 72970, 72971, 73015, 73018, 73019, 73020, 73022, 73023, 73032, 73040, 73050]);
scriptExtensions.set("Masaram_Gondi", [2404, 2406]);
script.set("Meetei_Mayek", [43744, 43767, 43968, 44014, 44016, 44026]);
scriptExtensions.set("Meetei_Mayek", []);
script.set("Mende_Kikakui", [124928, 125125, 125127, 125143]);
scriptExtensions.set("Mende_Kikakui", []);
script.set("Meroitic_Cursive", [68000, 68024, 68028, 68048, 68050, 68096]);
scriptExtensions.set("Meroitic_Cursive", []);
script.set("Meroitic_Hieroglyphs", [67968, 68000]);
scriptExtensions.set("Meroitic_Hieroglyphs", []);
script.set("Miao", [93952, 94027, 94031, 94088, 94095, 94112]);
scriptExtensions.set("Miao", []);
script.set("Modi", [71168, 71237, 71248, 71258]);
scriptExtensions.set("Modi", [43056, 43066]);
script.set("Mongolian", [6144, 6146, 6148, 6149, 6150, 6159, 6160, 6170, 6176, 6265, 6272, 6315, 71264, 71277]);
scriptExtensions.set("Mongolian", [6146, 6148, 6149, 6150, 8239, 8240]);
script.set("Mro", [92736, 92767, 92768, 92778, 92782, 92784]);
scriptExtensions.set("Mro", []);
script.set("Multani", [70272, 70279, 70280, 70281, 70282, 70286, 70287, 70302, 70303, 70314]);
scriptExtensions.set("Multani", [2662, 2672]);
script.set("Myanmar", [4096, 4256, 43488, 43519, 43616, 43648]);
scriptExtensions.set("Myanmar", [43310, 43311]);
script.set("Nabataean", [67712, 67743, 67751, 67760]);
scriptExtensions.set("Nabataean", []);
script.set("New_Tai_Lue", [6528, 6572, 6576, 6602, 6608, 6619, 6622, 6624]);
scriptExtensions.set("New_Tai_Lue", []);
script.set("Newa", [70656, 70746, 70747, 70748, 70749, 70752]);
scriptExtensions.set("Newa", []);
script.set("Nko", [1984, 2043, 2045, 2048]);
scriptExtensions.set("Nko", []);
script.set("Nushu", [94177, 94178, 110960, 111356]);
scriptExtensions.set("Nushu", []);
script.set("Ogham", [5760, 5789]);
scriptExtensions.set("Ogham", []);
script.set("Ol_Chiki", [7248, 7296]);
scriptExtensions.set("Ol_Chiki", []);
script.set("Old_Hungarian", [68736, 68787, 68800, 68851, 68858, 68864]);
scriptExtensions.set("Old_Hungarian", []);
script.set("Old_Italic", [66304, 66340, 66349, 66352]);
scriptExtensions.set("Old_Italic", []);
script.set("Old_North_Arabian", [68224, 68256]);
scriptExtensions.set("Old_North_Arabian", []);
script.set("Old_Permic", [66384, 66427]);
scriptExtensions.set("Old_Permic", [1155, 1156]);
script.set("Old_Persian", [66464, 66500, 66504, 66518]);
scriptExtensions.set("Old_Persian", []);
script.set("Old_Sogdian", [69376, 69416]);
scriptExtensions.set("Old_Sogdian", []);
script.set("Old_South_Arabian", [68192, 68224]);
scriptExtensions.set("Old_South_Arabian", []);
script.set("Old_Turkic", [68608, 68681]);
scriptExtensions.set("Old_Turkic", []);
script.set("Oriya", [2817, 2820, 2821, 2829, 2831, 2833, 2835, 2857, 2858, 2865, 2866, 2868, 2869, 2874, 2876, 2885, 2887, 2889, 2891, 2894, 2902, 2904, 2908, 2910, 2911, 2916, 2918, 2936]);
scriptExtensions.set("Oriya", [2385, 2387, 2404, 2406, 7386, 7387, 7410, 7411]);
script.set("Osage", [66736, 66772, 66776, 66812]);
scriptExtensions.set("Osage", []);
script.set("Osmanya", [66688, 66718, 66720, 66730]);
scriptExtensions.set("Osmanya", []);
script.set("Pahawh_Hmong", [92928, 92998, 93008, 93018, 93019, 93026, 93027, 93048, 93053, 93072]);
scriptExtensions.set("Pahawh_Hmong", []);
script.set("Palmyrene", [67680, 67712]);
scriptExtensions.set("Palmyrene", []);
script.set("Pau_Cin_Hau", [72384, 72441]);
scriptExtensions.set("Pau_Cin_Hau", []);
script.set("Phags_Pa", [43072, 43128]);
scriptExtensions.set("Phags_Pa", [6146, 6148, 6149, 6150]);
script.set("Phoenician", [67840, 67868, 67871, 67872]);
scriptExtensions.set("Phoenician", []);
script.set("Psalter_Pahlavi", [68480, 68498, 68505, 68509, 68521, 68528]);
scriptExtensions.set("Psalter_Pahlavi", [1600, 1601]);
script.set("Rejang", [43312, 43348, 43359, 43360]);
scriptExtensions.set("Rejang", []);
script.set("Runic", [5792, 5867, 5870, 5881]);
scriptExtensions.set("Runic", []);
script.set("Samaritan", [2048, 2094, 2096, 2111]);
scriptExtensions.set("Samaritan", []);
script.set("Saurashtra", [43136, 43206, 43214, 43226]);
scriptExtensions.set("Saurashtra", []);
script.set("Sharada", [70016, 70094, 70096, 70112]);
scriptExtensions.set("Sharada", [2385, 2386, 7383, 7384, 7385, 7386, 7388, 7390, 7392, 7393]);
script.set("Shavian", [66640, 66688]);
scriptExtensions.set("Shavian", []);
script.set("Siddham", [71040, 71094, 71096, 71134]);
scriptExtensions.set("Siddham", []);
script.set("SignWriting", [120832, 121484, 121499, 121504, 121505, 121520]);
scriptExtensions.set("SignWriting", []);
script.set("Sinhala", [3458, 3460, 3461, 3479, 3482, 3506, 3507, 3516, 3517, 3518, 3520, 3527, 3530, 3531, 3535, 3541, 3542, 3543, 3544, 3552, 3558, 3568, 3570, 3573, 70113, 70133]);
scriptExtensions.set("Sinhala", [2404, 2406]);
script.set("Sogdian", [69424, 69466]);
scriptExtensions.set("Sogdian", [1600, 1601]);
script.set("Sora_Sompeng", [69840, 69865, 69872, 69882]);
scriptExtensions.set("Sora_Sompeng", []);
script.set("Soyombo", [72272, 72355]);
scriptExtensions.set("Soyombo", []);
script.set("Sundanese", [7040, 7104, 7360, 7368]);
scriptExtensions.set("Sundanese", []);
script.set("Syloti_Nagri", [43008, 43052]);
scriptExtensions.set("Syloti_Nagri", [2404, 2406, 2534, 2544]);
script.set("Syriac", [1792, 1806, 1807, 1867, 1869, 1872, 2144, 2155]);
scriptExtensions.set("Syriac", [1548, 1549, 1563, 1565, 1567, 1568, 1600, 1601, 1611, 1622, 1648, 1649]);
script.set("Tagalog", [5888, 5901, 5902, 5909]);
scriptExtensions.set("Tagalog", [5941, 5943]);
script.set("Tagbanwa", [5984, 5997, 5998, 6001, 6002, 6004]);
scriptExtensions.set("Tagbanwa", [5941, 5943]);
script.set("Tai_Le", [6480, 6510, 6512, 6517]);
scriptExtensions.set("Tai_Le", [4160, 4170]);
script.set("Tai_Tham", [6688, 6751, 6752, 6781, 6783, 6794, 6800, 6810, 6816, 6830]);
scriptExtensions.set("Tai_Tham", []);
script.set("Tai_Viet", [43648, 43715, 43739, 43744]);
scriptExtensions.set("Tai_Viet", []);
script.set("Takri", [71296, 71353, 71360, 71370]);
scriptExtensions.set("Takri", [2404, 2406, 43056, 43066]);
script.set("Tamil", [2946, 2948, 2949, 2955, 2958, 2961, 2962, 2966, 2969, 2971, 2972, 2973, 2974, 2976, 2979, 2981, 2984, 2987, 2990, 3002, 3006, 3011, 3014, 3017, 3018, 3022, 3024, 3025, 3031, 3032, 3046, 3067, 73664, 73714, 73727, 73728]);
scriptExtensions.set("Tamil", [2385, 2387, 2404, 2406, 7386, 7387, 43251, 43252, 70401, 70402, 70403, 70404, 70459, 70461]);
script.set("Tangut", [94176, 94177, 94208, 100344, 100352, 101107]);
scriptExtensions.set("Tangut", []);
script.set("Telugu", [3072, 3085, 3086, 3089, 3090, 3113, 3114, 3130, 3133, 3141, 3142, 3145, 3146, 3150, 3157, 3159, 3160, 3163, 3168, 3172, 3174, 3184, 3191, 3200]);
scriptExtensions.set("Telugu", [2385, 2387, 2404, 2406, 7386, 7387, 7410, 7411]);
script.set("Thaana", [1920, 1970]);
scriptExtensions.set("Thaana", [1548, 1549, 1563, 1565, 1567, 1568, 1632, 1642, 65010, 65011, 65021, 65022]);
script.set("Thai", [3585, 3643, 3648, 3676]);
scriptExtensions.set("Thai", []);
script.set("Tibetan", [3840, 3912, 3913, 3949, 3953, 3992, 3993, 4029, 4030, 4045, 4046, 4053, 4057, 4059]);
scriptExtensions.set("Tibetan", []);
script.set("Tifinagh", [11568, 11624, 11631, 11633, 11647, 11648]);
scriptExtensions.set("Tifinagh", []);
script.set("Tirhuta", [70784, 70856, 70864, 70874]);
scriptExtensions.set("Tirhuta", [2385, 2387, 2404, 2406, 7410, 7411, 43056, 43066]);
script.set("Ugaritic", [66432, 66462, 66463, 66464]);
scriptExtensions.set("Ugaritic", []);
script.set("Vai", [42240, 42540]);
scriptExtensions.set("Vai", []);
script.set("Warang_Citi", [71840, 71923, 71935, 71936]);
scriptExtensions.set("Warang_Citi", []);
script.set("Yi", [40960, 42125, 42128, 42183]);
scriptExtensions.set("Yi", [12289, 12291, 12296, 12306, 12308, 12316, 12539, 12540, 65377, 65382]);
script.set("Zanabazar_Square", [72192, 72264]);
scriptExtensions.set("Zanabazar_Square", []);
var inverseFoldMap = new Map([[924, [181, 956]], [452, [453, 454]], [455, [456, 457]], [458, [459, 460]], [497, [498, 499]], [921, [837, 953, 8126]], [914, [946, 976]], [917, [949, 1013]], [920, [952, 977]], [922, [954, 1008]], [928, [960, 982]], [929, [961, 1009]], [931, [962, 963]], [934, [966, 981]], [1042, [1074, 7296]], [1044, [1076, 7297]], [1054, [1086, 7298]], [1057, [1089, 7299]], [1058, [1090, 7300, 7301]], [1066, [1098, 7302]], [1122, [1123, 7303]], [42570, [7304, 42571]], [7776, [7777, 
7835]],]);
var escapeCodePointAsRegExpSpurceChar = function(a, b) {
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
  if (void 0 === b ? 0 : b) {
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
  return 31 >= a || 127 <= a && 255 >= a ? "\\x" + a.toString(16).padStart(2, "0") : 128 >= a ? String.fromCodePoint(a) : 65535 >= a ? "\\u" + a.toString(16).padStart(4, "0") : "\\u{" + a.toString(16) + "}";
};
var MAX_CODE_POINT = 1114112, CharSet = function(a) {
  this.data = a = void 0 === a ? [] : a;
};
CharSet.prototype.add = function(a, b) {
  b = void 0 === b ? a + 1 : b;
  var e = this.searchBegin(a), f = this.searchEnd(b);
  f = this.data.splice(2 * e, 2 * (f - e + 1));
  0 < f.length && (a = Math.min(a, f[0]), b = Math.max(b, f[f.length - 1]));
  this.data.splice(2 * e, 0, a, b);
};
CharSet.prototype.addCharSet = function(a) {
  for (var b = 0; b < a.data.length; b += 2) {
    this.add(a.data[b], a.data[b + 1]);
  }
};
CharSet.prototype.invert = function() {
  if (0 === this.data.length) {
    return this.data.push(0, MAX_CODE_POINT), this;
  }
  if (0 === this.data[0] && this.data[this.data.length - 1] === MAX_CODE_POINT) {
    return this.data.shift(), this.data.pop(), this;
  }
  this.data.unshift(0);
  this.data.push(MAX_CODE_POINT);
  return this;
};
CharSet.prototype.clone = function() {
  return new CharSet(Array.from(this.data));
};
CharSet.prototype.has = function(a) {
  var b = this.searchEnd(a);
  if (0 > b || this.data.length <= 2 * b) {
    return !1;
  }
  var e = this.data[2 * b + 1];
  return this.data[2 * b] <= a && a < e;
};
CharSet.prototype.toRegExpPattern = function(a) {
  var b = "[";
  if (void 0 === a ? 0 : a) {
    b += "^";
  }
  for (a = 0; a < this.data.length; a += 2) {
    var e = this.data[a], f = this.data[a + 1];
    b += escapeCodePointAsRegExpSpurceChar(e, !0);
    e !== f - 1 && (b += "-" + escapeCodePointAsRegExpSpurceChar(f - 1, !0));
  }
  return b + "]";
};
CharSet.prototype.toString = function() {
  return "CharSet" + this.toRegExpPattern();
};
CharSet.prototype[Symbol.for("nodejs.util.inspect.custom")] = function(a, b) {
  a = b.stylize("CharSet", "special") + " ";
  return a += b.stylize(this.toRegExpPattern(), "regexp");
};
CharSet.prototype.searchBegin = function(a) {
  for (var b = -1, e = this.data.length / 2; 1 < e - b;) {
    var f = b + Math.floor((e - b) / 2);
    a <= this.data[2 * f + 1] ? e = f : b = f;
  }
  return e;
};
CharSet.prototype.searchEnd = function(a) {
  for (var b = -1, e = this.data.length / 2; 1 < e - b;) {
    var f = b + Math.floor((e - b) / 2);
    this.data[2 * f] <= a ? b = f : e = f;
  }
  return b;
};
var digit = new CharSet();
digit.add(48, 58);
var invertDigit = digit.clone().invert(), word = new CharSet();
word.add(48, 58);
word.add(65, 91);
word.add(97, 123);
word.add(95, 96);
for (var invertWord = word.clone().invert(), unicodeWord = word.clone(), $jscomp$iter$1 = $jscomp.makeIterator(extraWordCharacters), $jscomp$key$c = $jscomp$iter$1.next(); !$jscomp$key$c.done; $jscomp$key$c = $jscomp$iter$1.next()) {
  var c$12 = $jscomp$key$c.value;
  unicodeWord.add(c$12, c$12 + 1);
}
var invertUnicodeWord = unicodeWord.clone().invert(), space = new CharSet(category.get("Space_Separator"));
space.add(9, 14);
space.add(160, 161);
space.add(65279, 65280);
var invertSpace = space.clone().invert();
var unicodePropertyAliasesEcmascript = new Map([["scx", "Script_Extensions"], ["sc", "Script"], ["gc", "General_Category"], ["AHex", "ASCII_Hex_Digit"], ["Alpha", "Alphabetic"], ["Bidi_C", "Bidi_Control"], ["Bidi_M", "Bidi_Mirrored"], ["Cased", "Cased"], ["CI", "Case_Ignorable"], ["CWCF", "Changes_When_Casefolded"], ["CWCM", "Changes_When_Casemapped"], ["CWKCF", "Changes_When_NFKC_Casefolded"], ["CWL", "Changes_When_Lowercased"], ["CWT", "Changes_When_Titlecased"], ["CWU", "Changes_When_Uppercased"], 
["Dash", "Dash"], ["Dep", "Deprecated"], ["DI", "Default_Ignorable_Code_Point"], ["Dia", "Diacritic"], ["Ext", "Extender"], ["Gr_Base", "Grapheme_Base"], ["Gr_Ext", "Grapheme_Extend"], ["Hex", "Hex_Digit"], ["IDC", "ID_Continue"], ["Ideo", "Ideographic"], ["IDS", "ID_Start"], ["IDSB", "IDS_Binary_Operator"], ["IDST", "IDS_Trinary_Operator"], ["Join_C", "Join_Control"], ["LOE", "Logical_Order_Exception"], ["Lower", "Lowercase"], ["Math", "Math"], ["NChar", "Noncharacter_Code_Point"], ["Pat_Syn", "Pattern_Syntax"], 
["Pat_WS", "Pattern_White_Space"], ["QMark", "Quotation_Mark"], ["Radical", "Radical"], ["RI", "Regional_Indicator"], ["SD", "Soft_Dotted"], ["STerm", "Sentence_Terminal"], ["Term", "Terminal_Punctuation"], ["UIdeo", "Unified_Ideograph"], ["Upper", "Uppercase"], ["VS", "Variation_Selector"], ["WSpace", "White_Space"], ["space", "White_Space"], ["XIDC", "XID_Continue"], ["XIDS", "XID_Start"]]), unicodePropertyValueAliasesEcmascript = new Map([["General_Category", new Map([["C", "Other"], ["Cc", "Control"], 
["cntrl", "Control"], ["Cf", "Format"], ["Cn", "Unassigned"], ["Co", "Private_Use"], ["Cs", "Surrogate"], ["L", "Letter"], ["LC", "Cased_Letter"], ["Ll", "Lowercase_Letter"], ["Lm", "Modifier_Letter"], ["Lo", "Other_Letter"], ["Lt", "Titlecase_Letter"], ["Lu", "Uppercase_Letter"], ["M", "Mark"], ["Combining_Mark", "Mark"], ["Mc", "Spacing_Mark"], ["Me", "Enclosing_Mark"], ["Mn", "Nonspacing_Mark"], ["N", "Number"], ["Nd", "Decimal_Number"], ["digit", "Decimal_Number"], ["Nl", "Letter_Number"], ["No", 
"Other_Number"], ["P", "Punctuation"], ["punct", "Punctuation"], ["Pc", "Connector_Punctuation"], ["Pd", "Dash_Punctuation"], ["Pe", "Close_Punctuation"], ["Pf", "Final_Punctuation"], ["Pi", "Initial_Punctuation"], ["Po", "Other_Punctuation"], ["Ps", "Open_Punctuation"], ["S", "Symbol"], ["Sc", "Currency_Symbol"], ["Sk", "Modifier_Symbol"], ["Sm", "Math_Symbol"], ["So", "Other_Symbol"], ["Z", "Separator"], ["Zl", "Line_Separator"], ["Zp", "Paragraph_Separator"], ["Zs", "Space_Separator"]])], ["Script", 
new Map([["Adlm", "Adlam"], ["Aghb", "Caucasian_Albanian"], ["Ahom", "Ahom"], ["Arab", "Arabic"], ["Armi", "Imperial_Aramaic"], ["Armn", "Armenian"], ["Avst", "Avestan"], ["Bali", "Balinese"], ["Bamu", "Bamum"], ["Bass", "Bassa_Vah"], ["Batk", "Batak"], ["Beng", "Bengali"], ["Bhks", "Bhaiksuki"], ["Bopo", "Bopomofo"], ["Brah", "Brahmi"], ["Brai", "Braille"], ["Bugi", "Buginese"], ["Buhd", "Buhid"], ["Cakm", "Chakma"], ["Cans", "Canadian_Aboriginal"], ["Cari", "Carian"], ["Cham", "Cham"], ["Cher", 
"Cherokee"], ["Copt", "Coptic"], ["Qaac", "Coptic"], ["Cprt", "Cypriot"], ["Cyrl", "Cyrillic"], ["Deva", "Devanagari"], ["Dogr", "Dogra"], ["Dsrt", "Deseret"], ["Dupl", "Duployan"], ["Egyp", "Egyptian_Hieroglyphs"], ["Elba", "Elbasan"], ["Elym", "Elymaic"], ["Ethi", "Ethiopic"], ["Geor", "Georgian"], ["Glag", "Glagolitic"], ["Gong", "Gunjala_Gondi"], ["Gonm", "Masaram_Gondi"], ["Goth", "Gothic"], ["Gran", "Grantha"], ["Grek", "Greek"], ["Gujr", "Gujarati"], ["Guru", "Gurmukhi"], ["Hang", "Hangul"], 
["Hani", "Han"], ["Hano", "Hanunoo"], ["Hatr", "Hatran"], ["Hebr", "Hebrew"], ["Hira", "Hiragana"], ["Hluw", "Anatolian_Hieroglyphs"], ["Hmng", "Pahawh_Hmong"], ["Hmnp", "Nyiakeng_Puachue_Hmong"], ["Hrkt", "Katakana_Or_Hiragana"], ["Hung", "Old_Hungarian"], ["Ital", "Old_Italic"], ["Java", "Javanese"], ["Kali", "Kayah_Li"], ["Kana", "Katakana"], ["Khar", "Kharoshthi"], ["Khmr", "Khmer"], ["Khoj", "Khojki"], ["Knda", "Kannada"], ["Kthi", "Kaithi"], ["Lana", "Tai_Tham"], ["Laoo", "Lao"], ["Latn", "Latin"], 
["Lepc", "Lepcha"], ["Limb", "Limbu"], ["Lina", "Linear_A"], ["Linb", "Linear_B"], ["Lisu", "Lisu"], ["Lyci", "Lycian"], ["Lydi", "Lydian"], ["Mahj", "Mahajani"], ["Maka", "Makasar"], ["Mand", "Mandaic"], ["Mani", "Manichaean"], ["Marc", "Marchen"], ["Medf", "Medefaidrin"], ["Mend", "Mende_Kikakui"], ["Merc", "Meroitic_Cursive"], ["Mero", "Meroitic_Hieroglyphs"], ["Mlym", "Malayalam"], ["Modi", "Modi"], ["Mong", "Mongolian"], ["Mroo", "Mro"], ["Mtei", "Meetei_Mayek"], ["Mult", "Multani"], ["Mymr", 
"Myanmar"], ["Nand", "Nandinagari"], ["Narb", "Old_North_Arabian"], ["Nbat", "Nabataean"], ["Newa", "Newa"], ["Nkoo", "Nko"], ["Nshu", "Nushu"], ["Ogam", "Ogham"], ["Olck", "Ol_Chiki"], ["Orkh", "Old_Turkic"], ["Orya", "Oriya"], ["Osge", "Osage"], ["Osma", "Osmanya"], ["Palm", "Palmyrene"], ["Pauc", "Pau_Cin_Hau"], ["Perm", "Old_Permic"], ["Phag", "Phags_Pa"], ["Phli", "Inscriptional_Pahlavi"], ["Phlp", "Psalter_Pahlavi"], ["Phnx", "Phoenician"], ["Plrd", "Miao"], ["Prti", "Inscriptional_Parthian"], 
["Rjng", "Rejang"], ["Rohg", "Hanifi_Rohingya"], ["Runr", "Runic"], ["Samr", "Samaritan"], ["Sarb", "Old_South_Arabian"], ["Saur", "Saurashtra"], ["Sgnw", "SignWriting"], ["Shaw", "Shavian"], ["Shrd", "Sharada"], ["Sidd", "Siddham"], ["Sind", "Khudawadi"], ["Sinh", "Sinhala"], ["Sogd", "Sogdian"], ["Sogo", "Old_Sogdian"], ["Sora", "Sora_Sompeng"], ["Soyo", "Soyombo"], ["Sund", "Sundanese"], ["Sylo", "Syloti_Nagri"], ["Syrc", "Syriac"], ["Tagb", "Tagbanwa"], ["Takr", "Takri"], ["Tale", "Tai_Le"], 
["Talu", "New_Tai_Lue"], ["Taml", "Tamil"], ["Tang", "Tangut"], ["Tavt", "Tai_Viet"], ["Telu", "Telugu"], ["Tfng", "Tifinagh"], ["Tglg", "Tagalog"], ["Thaa", "Thaana"], ["Thai", "Thai"], ["Tibt", "Tibetan"], ["Tirh", "Tirhuta"], ["Ugar", "Ugaritic"], ["Vaii", "Vai"], ["Wara", "Warang_Citi"], ["Wcho", "Wancho"], ["Xpeo", "Old_Persian"], ["Xsux", "Cuneiform"], ["Yiii", "Yi"], ["Zanb", "Zanabazar_Square"], ["Zinh", "Inherited"], ["Qaai", "Inherited"], ["Zyyy", "Common"], ["Zzzz", "Unknown"]])], ["Script_Extensions", 
new Map([["Adlm", "Adlam"], ["Aghb", "Caucasian_Albanian"], ["Ahom", "Ahom"], ["Arab", "Arabic"], ["Armi", "Imperial_Aramaic"], ["Armn", "Armenian"], ["Avst", "Avestan"], ["Bali", "Balinese"], ["Bamu", "Bamum"], ["Bass", "Bassa_Vah"], ["Batk", "Batak"], ["Beng", "Bengali"], ["Bhks", "Bhaiksuki"], ["Bopo", "Bopomofo"], ["Brah", "Brahmi"], ["Brai", "Braille"], ["Bugi", "Buginese"], ["Buhd", "Buhid"], ["Cakm", "Chakma"], ["Cans", "Canadian_Aboriginal"], ["Cari", "Carian"], ["Cham", "Cham"], ["Cher", 
"Cherokee"], ["Copt", "Coptic"], ["Qaac", "Coptic"], ["Cprt", "Cypriot"], ["Cyrl", "Cyrillic"], ["Deva", "Devanagari"], ["Dogr", "Dogra"], ["Dsrt", "Deseret"], ["Dupl", "Duployan"], ["Egyp", "Egyptian_Hieroglyphs"], ["Elba", "Elbasan"], ["Elym", "Elymaic"], ["Ethi", "Ethiopic"], ["Geor", "Georgian"], ["Glag", "Glagolitic"], ["Gong", "Gunjala_Gondi"], ["Gonm", "Masaram_Gondi"], ["Goth", "Gothic"], ["Gran", "Grantha"], ["Grek", "Greek"], ["Gujr", "Gujarati"], ["Guru", "Gurmukhi"], ["Hang", "Hangul"], 
["Hani", "Han"], ["Hano", "Hanunoo"], ["Hatr", "Hatran"], ["Hebr", "Hebrew"], ["Hira", "Hiragana"], ["Hluw", "Anatolian_Hieroglyphs"], ["Hmng", "Pahawh_Hmong"], ["Hmnp", "Nyiakeng_Puachue_Hmong"], ["Hrkt", "Katakana_Or_Hiragana"], ["Hung", "Old_Hungarian"], ["Ital", "Old_Italic"], ["Java", "Javanese"], ["Kali", "Kayah_Li"], ["Kana", "Katakana"], ["Khar", "Kharoshthi"], ["Khmr", "Khmer"], ["Khoj", "Khojki"], ["Knda", "Kannada"], ["Kthi", "Kaithi"], ["Lana", "Tai_Tham"], ["Laoo", "Lao"], ["Latn", "Latin"], 
["Lepc", "Lepcha"], ["Limb", "Limbu"], ["Lina", "Linear_A"], ["Linb", "Linear_B"], ["Lisu", "Lisu"], ["Lyci", "Lycian"], ["Lydi", "Lydian"], ["Mahj", "Mahajani"], ["Maka", "Makasar"], ["Mand", "Mandaic"], ["Mani", "Manichaean"], ["Marc", "Marchen"], ["Medf", "Medefaidrin"], ["Mend", "Mende_Kikakui"], ["Merc", "Meroitic_Cursive"], ["Mero", "Meroitic_Hieroglyphs"], ["Mlym", "Malayalam"], ["Modi", "Modi"], ["Mong", "Mongolian"], ["Mroo", "Mro"], ["Mtei", "Meetei_Mayek"], ["Mult", "Multani"], ["Mymr", 
"Myanmar"], ["Nand", "Nandinagari"], ["Narb", "Old_North_Arabian"], ["Nbat", "Nabataean"], ["Newa", "Newa"], ["Nkoo", "Nko"], ["Nshu", "Nushu"], ["Ogam", "Ogham"], ["Olck", "Ol_Chiki"], ["Orkh", "Old_Turkic"], ["Orya", "Oriya"], ["Osge", "Osage"], ["Osma", "Osmanya"], ["Palm", "Palmyrene"], ["Pauc", "Pau_Cin_Hau"], ["Perm", "Old_Permic"], ["Phag", "Phags_Pa"], ["Phli", "Inscriptional_Pahlavi"], ["Phlp", "Psalter_Pahlavi"], ["Phnx", "Phoenician"], ["Plrd", "Miao"], ["Prti", "Inscriptional_Parthian"], 
["Rjng", "Rejang"], ["Rohg", "Hanifi_Rohingya"], ["Runr", "Runic"], ["Samr", "Samaritan"], ["Sarb", "Old_South_Arabian"], ["Saur", "Saurashtra"], ["Sgnw", "SignWriting"], ["Shaw", "Shavian"], ["Shrd", "Sharada"], ["Sidd", "Siddham"], ["Sind", "Khudawadi"], ["Sinh", "Sinhala"], ["Sogd", "Sogdian"], ["Sogo", "Old_Sogdian"], ["Sora", "Sora_Sompeng"], ["Soyo", "Soyombo"], ["Sund", "Sundanese"], ["Sylo", "Syloti_Nagri"], ["Syrc", "Syriac"], ["Tagb", "Tagbanwa"], ["Takr", "Takri"], ["Tale", "Tai_Le"], 
["Talu", "New_Tai_Lue"], ["Taml", "Tamil"], ["Tang", "Tangut"], ["Tavt", "Tai_Viet"], ["Telu", "Telugu"], ["Tfng", "Tifinagh"], ["Tglg", "Tagalog"], ["Thaa", "Thaana"], ["Thai", "Thai"], ["Tibt", "Tibetan"], ["Tirh", "Tirhuta"], ["Ugar", "Ugaritic"], ["Vaii", "Vai"], ["Wara", "Warang_Citi"], ["Wcho", "Wancho"], ["Xpeo", "Old_Persian"], ["Xsux", "Cuneiform"], ["Yiii", "Yi"], ["Zanb", "Zanabazar_Square"], ["Zinh", "Inherited"], ["Qaai", "Inherited"], ["Zyyy", "Common"], ["Zzzz", "Unknown"]])]]);
function _optionalChain$1(a) {
  for (var b = void 0, e = a[0], f = 1; f < a.length;) {
    var g = a[f], m = a[f + 1];
    f += 2;
    if (("optionalAccess" === g || "optionalCall" === g) && null == e) {
      return;
    }
    if ("access" === g || "optionalAccess" === g) {
      b = e, e = m(e);
    } else {
      if ("call" === g || "optionalCall" === g) {
        e = m(function() {
          var h = $jscomp.getRestArguments.apply(0, arguments);
          return e.call.apply(e, [b].concat($jscomp.arrayFromIterable(h)));
        }), b = void 0;
      }
    }
  }
  return e;
}
var CACHE = new Map(), loadCategory = function(a) {
  a = _optionalChain$1([unicodePropertyValueAliasesEcmascript, "access", function(f) {
    return f.get;
  }, "call", function(f) {
    return f("General_Category");
  }, "optionalAccess", function(f) {
    return f.get;
  }, "call", function(f) {
    return f(a);
  }]) || a;
  var b = "General_Category." + a, e = CACHE.get(b);
  if (e) {
    return e;
  }
  e = category.get(a);
  if (!e) {
    return null;
  }
  e = new CharSet(e);
  CACHE.set(b, e);
  return e;
}, loadScript = function(a) {
  a = _optionalChain$1([unicodePropertyValueAliasesEcmascript, "access", function(f) {
    return f.get;
  }, "call", function(f) {
    return f("Script");
  }, "optionalAccess", function(f) {
    return f.get;
  }, "call", function(f) {
    return f(a);
  }]) || a;
  var b = "Script." + a, e = CACHE.get(b);
  if (e) {
    return e;
  }
  e = script.get(a);
  if (!e) {
    return null;
  }
  e = new CharSet(e);
  CACHE.set(b, e);
  return e;
}, loadScriptExtensions = function(a) {
  a = _optionalChain$1([unicodePropertyValueAliasesEcmascript, "access", function(g) {
    return g.get;
  }, "call", function(g) {
    return g("Script_Extensions");
  }, "optionalAccess", function(g) {
    return g.get;
  }, "call", function(g) {
    return g(a);
  }]) || a;
  var b = "Script_Extensions." + a, e = CACHE.get(b);
  if (e) {
    return e;
  }
  e = loadScript(a);
  if (!e) {
    return null;
  }
  var f = scriptExtensions.get(a);
  if (!f) {
    throw Error("BUG: Script_Extensions must contain each value of Script");
  }
  f = new CharSet(f);
  e = e.clone();
  e.addCharSet(f);
  CACHE.set(b, e);
  return e;
}, loadProperty = function(a) {
  a = unicodePropertyAliasesEcmascript.get(a) || a;
  var b = CACHE.get(a);
  if (b) {
    return b;
  }
  b = property.get(a);
  if (!b) {
    return null;
  }
  b = new CharSet(b);
  CACHE.set(a, b);
  return b;
}, loadPropertyValue = function(a, b) {
  a = unicodePropertyAliasesEcmascript.get(a) || a;
  switch(a) {
    case "General_Category":
      return loadCategory(b);
    case "Script":
      return loadScript(b);
    case "Script_Extensions":
      return loadScriptExtensions(b);
    default:
      return null;
  }
};
var RegExpSyntaxError = function(a) {
  a = SyntaxError.call(this, "invalid regular expression: " + a);
  this.message = a.message;
  "stack" in a && (this.stack = a.stack);
};
$jscomp.inherits(RegExpSyntaxError, SyntaxError);
function _nullishCoalesce$5(a, b) {
  return null != a ? a : b();
}
var escapeRaw = function(a) {
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
}, classItemToString = function(a) {
  switch(a.type) {
    case "Char":
      return escapeRaw(a.raw);
    case "EscapeClass":
      switch(a.kind) {
        case "digit":
          return a.invert ? "\\D" : "\\d";
        case "word":
          return a.invert ? "\\W" : "\\w";
        case "space":
          return a.invert ? "\\S" : "\\s";
        case "unicode_property":
          return "\\" + (a.invert ? "P" : "p") + "{" + a.property + "}";
        case "unicode_property_value":
          return "\\" + (a.invert ? "P" : "p") + "{" + a.property + "=" + a.value + "}";
      }case "ClassRange":
      return escapeRaw(a.children[0].raw) + "-" + escapeRaw(a.children[1].raw);
  }
}, nodeToString = function(a) {
  switch(a.type) {
    case "Sequence":
      return a.children.map(nodeToString).join("");
    case "Disjunction":
      return a.children.map(nodeToString).join("|");
    case "Capture":
      return "(" + nodeToString(a.child) + ")";
    case "NamedCapture":
      return "(?<" + a.raw + ">" + nodeToString(a.child) + ")";
    case "Group":
      return "(?:" + nodeToString(a.child) + ")";
    case "Many":
      return nodeToString(a.child) + "*" + (a.nonGreedy ? "?" : "");
    case "Some":
      return nodeToString(a.child) + "+" + (a.nonGreedy ? "?" : "");
    case "Optional":
      return nodeToString(a.child) + "?" + (a.nonGreedy ? "?" : "");
    case "Repeat":
      var b = nodeToString(a.child);
      b += "{" + a.min;
      Infinity === a.max ? b += "," : _nullishCoalesce$5(a.max, function() {
        return a.min;
      }) != a.min && (b += "," + a.max);
      return b += "}" + (a.nonGreedy ? "?" : "");
    case "WordBoundary":
      return a.invert ? "\\B" : "\\b";
    case "LineBegin":
      return "^";
    case "LineEnd":
      return "$";
    case "LookAhead":
      return "(?" + (a.negative ? "!" : "=") + nodeToString(a.child) + ")";
    case "LookBehind":
      return "(?<" + (a.negative ? "!" : "=") + nodeToString(a.child) + ")";
    case "Char":
      return b = escapeRaw(a.raw), "/" === b ? "\\/" : b;
    case "EscapeClass":
      return classItemToString(a);
    case "Class":
      return "[" + (a.invert ? "^" : "") + a.children.map(classItemToString).join("") + "]";
    case "Dot":
      return ".";
    case "BackRef":
      return "\\" + a.index;
    case "NamedBackRef":
      return "\\k<" + a.raw + ">";
  }
}, flagSetToString = function(a) {
  var b = "";
  a.global && (b += "g");
  a.ignoreCase && (b += "i");
  a.multiline && (b += "m");
  a.dotAll && (b += "s");
  a.unicode && (b += "u");
  a.sticky && (b += "y");
  return b;
}, patternToString = function(a) {
  var b = "/", e = nodeToString(a.child);
  return b = b + ("" === e ? "(?:)" : e) + "/" + flagSetToString(a.flagSet);
};
function _nullishCoalesce$1(a, b) {
  return null != a ? a : b();
}
var isAssertion = function(a) {
  switch(a.type) {
    case "WordBoundary":
    case "LineBegin":
    case "LineEnd":
    case "LookAhead":
    case "LookBehind":
      return !0;
  }
  return !1;
}, isSequenceDelimiter = function(a) {
  return "|" === a || ")" === a || "" === a;
}, isDigit = function(a) {
  return "0" <= a && "9" >= a;
}, isHexDigit = function(a) {
  return isDigit(a) || "a" <= a && "f" >= a || "A" <= a && "F" >= a;
}, isSyntax = function(a) {
  return "" !== a && "^$\\.*+?()[]{}|".includes(a);
}, isControl = function(a) {
  return "a" <= a && "z" >= a || "A" <= a && "Z" >= a;
}, isUnicodeProperty = function(a) {
  return isControl(a) || "_" === a;
}, isUnicodePropertyValue = function(a) {
  return isUnicodeProperty(a) || isDigit(a);
}, idStart = new CharSet(property.get("ID_Start")), isIDStart = function(a) {
  return "$" === a || "_" === a || idStart.has(_nullishCoalesce$1(a.codePointAt(0), function() {
    return -1;
  }));
}, idContinue = new CharSet(property.get("ID_Continue")), isIDPart = function(a) {
  return "$" === a || "\u200c" === a || "\u200d" === a || idContinue.has(_nullishCoalesce$1(a.codePointAt(0), function() {
    return -1;
  }));
}, Parser = function(a, b, e) {
  b = void 0 === b ? "" : b;
  e = void 0 === e ? !0 : e;
  Parser.prototype.__init.call(this);
  Parser.prototype.__init2.call(this);
  Parser.prototype.__init3.call(this);
  Parser.prototype.__init4.call(this);
  this.source = a;
  this.flags = b;
  this.additional = e;
};
Parser.prototype.__init = function() {
  this.captureParens = 0;
};
Parser.prototype.__init2 = function() {
  this.names = new Map();
};
Parser.prototype.__init3 = function() {
  this.pos = 0;
};
Parser.prototype.__init4 = function() {
  this.captureParensIndex = 0;
};
Parser.prototype.parse = function() {
  this.flagSet = this.preprocessFlags();
  this.preprocessCaptures();
  this.pos = 0;
  var a = this.parseDisjunction();
  if ("" !== this.current()) {
    throw new RegExpSyntaxError("too many ')'");
  }
  return {type:"Pattern", flagSet:this.flagSet, captureParens:this.captureParens, names:this.names, child:a, range:[0, this.pos],};
};
Parser.prototype.preprocessFlags = function() {
  for (var a = {global:!1, ignoreCase:!1, multiline:!1, unicode:!1, dotAll:!1, sticky:!1,}, b = $jscomp.makeIterator(this.flags), e = b.next(); !e.done; e = b.next()) {
    switch(e.value) {
      case "g":
        if (a.global) {
          throw new RegExpSyntaxError("duplicated 'g' flag");
        }
        a.global = !0;
        break;
      case "i":
        if (a.ignoreCase) {
          throw new RegExpSyntaxError("duplicated 'i' flag");
        }
        a.ignoreCase = !0;
        break;
      case "m":
        if (a.multiline) {
          throw new RegExpSyntaxError("duplicated 'm' flag");
        }
        a.multiline = !0;
        break;
      case "s":
        if (a.dotAll) {
          throw new RegExpSyntaxError("duplicated 's' flag");
        }
        a.dotAll = !0;
        break;
      case "u":
        if (a.unicode) {
          throw new RegExpSyntaxError("duplicated 'u' flag");
        }
        a.unicode = !0;
        break;
      case "y":
        if (a.sticky) {
          throw new RegExpSyntaxError("duplicated 's' flag");
        }
        a.sticky = !0;
        break;
      default:
        throw new RegExpSyntaxError("unknown flag");
    }
  }
  return a;
};
Parser.prototype.preprocessCaptures = function() {
  for (; this.pos < this.source.length;) {
    var a = this.current();
    switch(a) {
      case "(":
        this.source.startsWith("(?<", this.pos) ? (this.pos += 3, a = this.current(), "=" !== a && "!" !== a && (this.captureParens++, a = this.parseCaptureName(), this.names.set(a, this.captureParens))) : (this.source.startsWith("(?", this.pos) || this.captureParens++, this.pos++);
        break;
      case "\\":
        this.pos++;
        this.pos += this.current().length;
        break;
      case "[":
        this.skipCharClass();
        break;
      default:
        this.pos += a.length;
    }
  }
};
Parser.prototype.skipCharClass = function() {
  for (this.pos += 1; this.pos < this.source.length;) {
    var a = this.current();
    switch(a) {
      case "]":
        this.pos += 1;
        return;
      case "\\":
        this.pos++;
        this.pos += this.current().length;
        break;
      default:
        this.pos += a.length;
    }
  }
};
Parser.prototype.parseDisjunction = function() {
  for (var a = this.pos, b = [this.parseSequence()]; "|" === this.current();) {
    this.pos += 1, b.push(this.parseSequence());
  }
  return 1 === b.length ? b[0] : {type:"Disjunction", children:b, range:[a, this.pos]};
};
Parser.prototype.parseSequence = function() {
  for (var a = this.pos, b = []; !isSequenceDelimiter(this.current());) {
    b.push(this.parseQuantifier());
  }
  return 1 === b.length ? b[0] : {type:"Sequence", children:b, range:[a, this.pos]};
};
Parser.prototype.parseQuantifier = function() {
  var a = this.pos, b = this.parseAtom();
  if (isAssertion(b) && (!this.additional || this.unicode || "LookAhead" !== b.type)) {
    return b;
  }
  switch(this.current()) {
    case "*":
      return this.parseSimpleQuantifier("Many", a, b);
    case "+":
      return this.parseSimpleQuantifier("Some", a, b);
    case "?":
      return this.parseSimpleQuantifier("Optional", a, b);
    case "{":
      return this.parseRepeat(a, b);
  }
  return b;
};
Parser.prototype.parseSimpleQuantifier = function(a, b, e) {
  this.pos += 1;
  var f = !1;
  "?" === this.current() && (this.pos += 1, f = !0);
  return {type:a, nonGreedy:f, child:e, range:[b, this.pos]};
};
Parser.prototype.parseRepeat = function(a, b) {
  var e = this.pos, f = this.tryParseRepeatQuantifier();
  if (null === f) {
    if (this.additional && !this.unicode) {
      return this.pos = e, b;
    }
    throw new RegExpSyntaxError("incomplete quantifier");
  }
  var g = f.min;
  e = f.max;
  if (g > _nullishCoalesce$1(e, function() {
    return g;
  })) {
    throw new RegExpSyntaxError("numbers out of order in quantifier");
  }
  f = !1;
  "?" === this.current() && (this.pos += 1, f = !0);
  return {type:"Repeat", min:g, max:e, nonGreedy:f, child:b, range:[a, this.pos]};
};
Parser.prototype.tryParseRepeatQuantifier = function() {
  var a = this.pos;
  this.pos += 1;
  var b = this.parseDigits();
  if (0 > b) {
    return this.pos = a, null;
  }
  var e = null;
  if ("," === this.current()) {
    if (this.pos += 1, "}" === this.current()) {
      e = Infinity;
    } else {
      if (e = this.parseDigits(), 0 > e) {
        return this.pos = a, null;
      }
    }
  }
  if ("}" !== this.current()) {
    return this.pos = a, null;
  }
  this.pos += 1;
  return {min:b, max:e};
};
Parser.prototype.parseAtom = function() {
  var a = this.pos, b = this.current();
  switch(b) {
    case ".":
      return this.pos++, {type:"Dot", range:[a, this.pos]};
    case "^":
      return this.pos++, {type:"LineBegin", range:[a, this.pos]};
    case "$":
      return this.pos++, {type:"LineEnd", range:[a, this.pos]};
    case "[":
      return this.parseClass();
    case "\\":
      return this.parseEscape();
    case "(":
      return this.parseParen();
    case "*":
    case "+":
    case "?":
      throw new RegExpSyntaxError("nothing to repeat");
    case "{":
      if (this.additional && !this.unicode) {
        if (null !== this.tryParseRepeatQuantifier()) {
          throw new RegExpSyntaxError("nothing to repeat");
        }
        break;
      }
      throw new RegExpSyntaxError("lone quantifier brackets");
    case "}":
      if (this.additional && !this.unicode) {
        break;
      }
      throw new RegExpSyntaxError("lone quantifier brackets");
    case "]":
      if (this.additional && !this.unicode) {
        break;
      }
      throw new RegExpSyntaxError("lone character class brackets");
    case ")":
    case "|":
    case "":
      throw Error("BUG: invalid character");
  }
  this.pos += b.length;
  var e = b.codePointAt(0);
  if (void 0 === e) {
    throw Error("BUG: invalid character");
  }
  return {type:"Char", value:e, raw:b, range:[a, this.pos]};
};
Parser.prototype.parseClass = function() {
  var a = this.pos;
  this.pos++;
  var b = !1;
  "^" === this.current() && (this.pos++, b = !0);
  for (var e = []; "]" !== this.current();) {
    e.push(this.parseClassItem());
  }
  this.pos++;
  return {type:"Class", invert:b, children:e, range:[a, this.pos]};
};
Parser.prototype.parseClassItem = function() {
  var a = this.pos, b = this.parseClassAtom();
  if ("-" !== this.current() || this.source.startsWith("-]", this.pos)) {
    return b;
  }
  if ("EscapeClass" === b.type) {
    if (this.additional && !this.unicode) {
      return b;
    }
    throw new RegExpSyntaxError("invalid character class");
  }
  var e = this.pos;
  this.pos++;
  var f = this.parseClassAtom();
  if ("EscapeClass" === f.type) {
    if (this.additional && !this.unicode) {
      return this.pos = e, b;
    }
    throw new RegExpSyntaxError("invalid character class");
  }
  if (b.value > f.value) {
    throw new RegExpSyntaxError("range out of order in character class");
  }
  return {type:"ClassRange", children:[b, f], range:[a, this.pos]};
};
Parser.prototype.parseClassAtom = function() {
  var a = this.pos, b = this.current();
  if ("" === b) {
    throw new RegExpSyntaxError("unterminated character class");
  }
  if ("\\" !== b) {
    this.pos += b.length;
    var e = b.codePointAt(0);
    if (void 0 === e) {
      throw Error("BUG: invalid character");
    }
    return {type:"Char", value:e, raw:b, range:[a, this.pos]};
  }
  if (this.source.startsWith("\\-", this.pos)) {
    return this.pos += 2, {type:"Char", value:45, raw:"\\-", range:[a, this.pos]};
  }
  if (this.source.startsWith("\\b", this.pos)) {
    return this.pos += 2, {type:"Char", value:8, raw:"\\b", range:[a, this.pos]};
  }
  a = this.tryParseEscapeClass();
  if (null !== a) {
    return a;
  }
  a = this.tryParseEscape();
  if (null !== a) {
    return a;
  }
  throw new RegExpSyntaxError("invalid escape");
};
Parser.prototype.parseEscape = function() {
  var a = this.tryParseWordBoundary();
  if (null !== a) {
    return a;
  }
  a = this.tryParseBackRef();
  if (null !== a) {
    return a;
  }
  a = this.tryParseEscapeClass();
  if (null !== a) {
    return a;
  }
  a = this.tryParseEscape();
  if (null !== a) {
    return a;
  }
  throw new RegExpSyntaxError("invalid escape");
};
Parser.prototype.tryParseWordBoundary = function() {
  var a = this.pos;
  return this.source.startsWith("\\b", this.pos) ? (this.pos += 2, {type:"WordBoundary", invert:!1, range:[a, this.pos]}) : this.source.startsWith("\\B", this.pos) ? (this.pos += 2, {type:"WordBoundary", invert:!0, range:[a, this.pos]}) : null;
};
Parser.prototype.tryParseBackRef = function() {
  var a = this.pos;
  this.pos++;
  if (0 < this.names.size && "k" === this.current()) {
    this.pos++;
    if ("<" !== this.current()) {
      throw new RegExpSyntaxError("invalid named back reference");
    }
    var b = ++this.pos;
    return {type:"NamedBackRef", name:this.parseCaptureName(), raw:this.source.slice(b, this.pos - 1), range:[a, this.pos],};
  }
  if ("0" !== this.current() && (b = this.parseDigits(), 1 <= b)) {
    if (this.additional && !this.unicode) {
      if (b <= this.captureParens) {
        return {type:"BackRef", index:b, range:[a, this.pos]};
      }
    } else {
      return {type:"BackRef", index:b, range:[a, this.pos]};
    }
  }
  this.pos = a;
  return null;
};
Parser.prototype.tryParseEscape = function() {
  var a = this.pos, b = this.tryParseUnicodeEscape();
  if ("" !== b) {
    b = b.codePointAt(0);
    if (void 0 === b) {
      throw Error("BUG: invalid character");
    }
    return {type:"Char", value:b, raw:this.source.slice(a, this.pos), range:[a, this.pos],};
  }
  this.pos++;
  switch(this.current()) {
    case "t":
      return this.pos++, {type:"Char", value:9, raw:"\\t", range:[a, this.pos]};
    case "n":
      return this.pos++, {type:"Char", value:10, raw:"\\n", range:[a, this.pos]};
    case "v":
      return this.pos++, {type:"Char", value:11, raw:"\\v", range:[a, this.pos]};
    case "f":
      return this.pos++, {type:"Char", value:12, raw:"\\f", range:[a, this.pos]};
    case "r":
      return this.pos++, {type:"Char", value:13, raw:"\\r", range:[a, this.pos]};
    case "c":
      this.pos++;
      b = this.current();
      if (isControl(b)) {
        this.pos++, b = b.charCodeAt(0) % 32;
      } else {
        if (this.additional && !this.unicode) {
          this.pos--;
          break;
        }
        throw new RegExpSyntaxError("invalid control escape");
      }
      return {type:"Char", value:b, raw:this.source.slice(a, this.pos), range:[a, this.pos],};
    case "x":
      this.pos++;
      b = this.tryParseHexDigitsN(2);
      if (0 > b) {
        this.pos--;
        break;
      }
      return {type:"Char", value:b, raw:this.source.slice(a, this.pos), range:[a, this.pos],};
    case "0":
      this.pos++;
      if (isDigit(this.current())) {
        this.pos--;
        break;
      }
      return {type:"Char", value:0, raw:"\\0", range:[a, this.pos]};
    case "":
      throw new RegExpSyntaxError("\\ at end of pattern");
  }
  if (this.additional && !this.unicode) {
    b = this.pos;
    var e = this.current();
    "0" <= e && "3" >= e ? (this.pos++, e = this.current(), "0" <= e && "7" >= e && (this.pos++, e = this.current(), "0" <= e && "7" >= e && this.pos++)) : "4" <= e && "7" >= e && (this.pos++, e = this.current(), "0" <= e && "7" >= e && this.pos++);
    if (b !== this.pos) {
      return {type:"Char", value:Number.parseInt(this.source.slice(b, this.pos), 8), raw:this.source.slice(a, this.pos), range:[a, this.pos],};
    }
  }
  b = this.current();
  e = b.codePointAt(0);
  if (void 0 === e) {
    throw Error("BUG: invalid character");
  }
  if (this.unicode) {
    if (isSyntax(b) || "/" === b) {
      return this.pos += b.length, {type:"Char", value:e, raw:"\\" + b, range:[a, this.pos]};
    }
  } else {
    if (this.additional) {
      if ("c" === b) {
        return {type:"Char", value:92, raw:"\\", range:[a, this.pos]};
      }
      if (0 === this.names.size || "k" !== b) {
        return this.pos += b.length, {type:"Char", value:e, raw:"\\" + b, range:[a, this.pos]};
      }
    } else {
      if (!idContinue.has(e)) {
        return this.pos += b.length, {type:"Char", value:e, raw:"\\" + b, range:[a, this.pos]};
      }
    }
  }
  this.pos = a;
  return null;
};
Parser.prototype.tryParseUnicodeEscape = function(a) {
  a = void 0 === a ? !0 : a;
  var b = this.pos;
  this.pos++;
  if ("u" !== this.current()) {
    return this.pos = b, "";
  }
  this.pos++;
  if (this.unicode && "{" === this.current()) {
    if (!a) {
      return this.pos = b, "";
    }
    this.pos++;
    a = this.parseHexDigits();
    if (0 > a || 1114112 <= a || "}" !== this.current()) {
      throw new RegExpSyntaxError("invalid Unicode escape");
    }
    this.pos++;
    return String.fromCodePoint(a);
  }
  var e = this.tryParseHexDigitsN(4);
  if (0 > e) {
    if (this.additional && !this.unicode) {
      return this.pos = b, "";
    }
    throw new RegExpSyntaxError("invalid Unicode escape");
  }
  b = String.fromCharCode(e);
  if (!this.unicode) {
    return b;
  }
  if (a && "\ud800" <= b && "\udbff" >= b && "\\" === this.current()) {
    a = this.pos;
    e = this.tryParseUnicodeEscape(!1);
    if ("\udc00" <= e && "\udfff" >= e) {
      return b + e;
    }
    this.pos = a;
  }
  return b;
};
Parser.prototype.tryParseEscapeClass = function() {
  var a = this.pos;
  this.pos++;
  var b = this.current();
  switch(b) {
    case "d":
    case "D":
      return this.pos++, {type:"EscapeClass", kind:"digit", invert:"D" === b, range:[a, this.pos]};
    case "w":
    case "W":
      return this.pos++, {type:"EscapeClass", kind:"word", invert:"W" === b, range:[a, this.pos]};
    case "s":
    case "S":
      return this.pos++, {type:"EscapeClass", kind:"space", invert:"S" === b, range:[a, this.pos]};
    case "p":
    case "P":
      if (this.unicode) {
        b = "P" === b;
        this.pos++;
        if ("{" !== this.current()) {
          throw new RegExpSyntaxError("invalid Unicode property escape");
        }
        this.pos++;
        var e = this.parseUnicodePropertyName();
        if ("" === e) {
          throw new RegExpSyntaxError("invalid Unicode property name");
        }
        if ("}" === this.current()) {
          return this.pos++, {type:"EscapeClass", kind:"unicode_property", property:e, invert:b, range:[a, this.pos],};
        }
        if ("=" !== this.current()) {
          throw new RegExpSyntaxError("invalid Unicode property escape");
        }
        this.pos++;
        var f = this.parseUnicodePropertyValue();
        if ("" === f) {
          throw new RegExpSyntaxError("invalid Unicode property value");
        }
        if ("}" !== this.current()) {
          throw new RegExpSyntaxError("invalid Unicode property escape");
        }
        this.pos++;
        return {type:"EscapeClass", kind:"unicode_property_value", property:e, value:f, invert:b, range:[a, this.pos],};
      }
  }
  this.pos = a;
  return null;
};
Parser.prototype.parseUnicodePropertyName = function() {
  for (var a = "";;) {
    var b = this.current();
    if (!isUnicodeProperty(b)) {
      break;
    }
    a += b;
    this.pos += b.length;
  }
  return a;
};
Parser.prototype.parseUnicodePropertyValue = function() {
  for (var a = "";;) {
    var b = this.current();
    if (!isUnicodePropertyValue(b)) {
      break;
    }
    a += b;
    this.pos += b.length;
  }
  return a;
};
Parser.prototype.parseParen = function() {
  var a = this.pos;
  if (!this.source.startsWith("(?", this.pos)) {
    this.pos++;
    var b = this.parseDisjunction(), e = ++this.captureParensIndex;
    if (")" !== this.current()) {
      throw new RegExpSyntaxError("unterminated capture");
    }
    this.pos++;
    return {type:"Capture", index:e, child:b, range:[a, this.pos]};
  }
  if (this.source.startsWith("(?:", this.pos)) {
    this.pos += 3;
    b = this.parseDisjunction();
    if (")" !== this.current()) {
      throw new RegExpSyntaxError("unterminated group");
    }
    this.pos++;
    return {type:"Group", child:b, range:[a, this.pos]};
  }
  if (this.source.startsWith("(?=", this.pos)) {
    this.pos += 3;
    b = this.parseDisjunction();
    if (")" !== this.current()) {
      throw new RegExpSyntaxError("unterminated look-ahead");
    }
    this.pos++;
    return {type:"LookAhead", negative:!1, child:b, range:[a, this.pos]};
  }
  if (this.source.startsWith("(?!", this.pos)) {
    this.pos += 3;
    b = this.parseDisjunction();
    if (")" !== this.current()) {
      throw new RegExpSyntaxError("unterminated look-ahead");
    }
    this.pos++;
    return {type:"LookAhead", negative:!0, child:b, range:[a, this.pos]};
  }
  if (this.source.startsWith("(?<=", this.pos)) {
    this.pos += 4;
    b = this.parseDisjunction();
    if (")" !== this.current()) {
      throw new RegExpSyntaxError("unterminated look-behind");
    }
    this.pos++;
    return {type:"LookBehind", negative:!1, child:b, range:[a, this.pos]};
  }
  if (this.source.startsWith("(?<!", this.pos)) {
    this.pos += 4;
    b = this.parseDisjunction();
    if (")" !== this.current()) {
      throw new RegExpSyntaxError("unterminated look-behind");
    }
    this.pos++;
    return {type:"LookBehind", negative:!0, child:b, range:[a, this.pos]};
  }
  if (this.source.startsWith("(?<", this.pos)) {
    e = ++this.captureParensIndex;
    var f = this.pos += 3;
    b = this.parseCaptureName();
    f = this.source.slice(f, this.pos - 1);
    if (this.names.get(b) !== e) {
      throw Error("BUG: invalid named capture");
    }
    e = this.parseDisjunction();
    if (")" !== this.current()) {
      throw new RegExpSyntaxError("unterminated named capture");
    }
    this.pos++;
    return {type:"NamedCapture", name:b, raw:f, child:e, range:[a, this.pos]};
  }
  throw new RegExpSyntaxError("invalid group");
};
Parser.prototype.parseCaptureName = function() {
  var a = "", b = this.parseCaptureNameChar();
  if (!isIDStart(b)) {
    throw new RegExpSyntaxError("invalid capture group name");
  }
  for (a += b;;) {
    b = this.pos;
    var e = this.parseCaptureNameChar();
    if (!isIDPart(e)) {
      this.pos = b;
      break;
    }
    a += e;
  }
  if (">" !== this.current()) {
    throw new RegExpSyntaxError("invalid capture group name");
  }
  this.pos += 1;
  return a;
};
Parser.prototype.parseCaptureNameChar = function() {
  var a = this.current();
  if ("\\" === a) {
    return this.tryParseUnicodeEscape();
  }
  this.pos += a.length;
  return a;
};
Parser.prototype.parseDigits = function() {
  for (var a = ""; isDigit(this.current());) {
    a += this.current(), this.pos++;
  }
  return "" === a ? -1 : Number.parseInt(a, 10);
};
Parser.prototype.parseHexDigits = function() {
  for (var a = "";;) {
    var b = this.current();
    if (!isHexDigit(b)) {
      break;
    }
    a += b;
    this.pos += b.length;
  }
  return "" === a ? -1 : Number.parseInt(a, 16);
};
Parser.prototype.tryParseHexDigitsN = function(a) {
  for (var b = this.pos, e = ""; 0 < a--;) {
    var f = this.current();
    if (!isHexDigit(f)) {
      return this.pos = b, -1;
    }
    e += f;
    this.pos += f.length;
  }
  return Number.parseInt(e, 16);
};
Parser.prototype.current = function() {
  if (this.unicode) {
    var a = this.source.codePointAt(this.pos);
    return void 0 === a ? "" : String.fromCodePoint(a);
  }
  a = this.source.charCodeAt(this.pos);
  return Number.isNaN(a) ? "" : String.fromCharCode(a);
};
$jscomp.global.Object.defineProperties(Parser.prototype, {unicode:{configurable:!0, enumerable:!0, get:function() {
  return this.flagSet.unicode;
}}});
function _nullishCoalesce$4(a, b) {
  return null != a ? a : b();
}
var Match = function(a, b, e) {
  this.input = a;
  this.caps = b;
  this.names = e;
};
Match.prototype.get = function(a) {
  var b = $jscomp.makeIterator(this.resolve(a));
  a = b.next().value;
  b = b.next().value;
  if (!(0 > a || 0 > b)) {
    return this.input.slice(a, b);
  }
};
Match.prototype.begin = function(a) {
  a = this.resolve(a)[0];
  return 0 > a ? void 0 : a;
};
Match.prototype.end = function(a) {
  a = this.resolve(a)[1];
  return 0 > a ? void 0 : a;
};
Match.prototype.resolve = function(a) {
  "string" === typeof a && (a = _nullishCoalesce$4(this.names.get(a), function() {
    return -1;
  }));
  return [_nullishCoalesce$4(this.caps[2 * a], function() {
    return -1;
  }), _nullishCoalesce$4(this.caps[2 * a + 1], function() {
    return -1;
  })];
};
Match.prototype.toArray = function() {
  var a = [];
  a.index = this.index;
  a.input = this.input;
  a.length = this.length;
  for (var b = 0; b < this.length; b++) {
    a[b] = this.get(b);
  }
  if (0 < this.names.size) {
    b = Object.create(null);
    for (var e = $jscomp.makeIterator(this.names), f = e.next(); !f.done; f = e.next()) {
      var g = $jscomp.makeIterator(f.value);
      f = g.next().value;
      g = g.next().value;
      b[f] = a[g];
    }
    a.groups = b;
  } else {
    a.groups = void 0;
  }
  return a;
};
Match.prototype.toString = function() {
  return "Match[" + this.toArray().map(function(a) {
    return void 0 === a ? "undefined" : JSON.stringify(a);
  }).join(", ") + "]";
};
Match.prototype[Symbol.for("nodejs.util.inspect.custom")] = function(a, b) {
  a = b.stylize("Match", "special") + " [\n";
  for (var e = new Map(Array.from(this.names).map(function(l) {
    l = $jscomp.makeIterator(l);
    var k = l.next().value;
    return [l.next().value, k];
  })), f = {$jscomp$loop$prop$i$79:0}; f.$jscomp$loop$prop$i$79 < this.length; f = {$jscomp$loop$prop$i$79:f.$jscomp$loop$prop$i$79}, f.$jscomp$loop$prop$i$79++) {
    var g = b.stylize(JSON.stringify(_nullishCoalesce$4(e.get(f.$jscomp$loop$prop$i$79), function(l) {
      return function() {
        return l.$jscomp$loop$prop$i$79;
      };
    }(f))), e.has(f.$jscomp$loop$prop$i$79) ? "string" : "number"), m = this.get(f.$jscomp$loop$prop$i$79);
    if (void 0 === m) {
      a += "  " + g + " => " + b.stylize("undefined", "undefined") + ",\n";
    } else {
      var h = b.stylize(this.caps[2 * f.$jscomp$loop$prop$i$79].toString(), "number"), q = b.stylize(this.caps[2 * f.$jscomp$loop$prop$i$79 + 1].toString(), "number");
      m = b.stylize(JSON.stringify(m), "string");
      a += "  " + g + " [" + h + ":" + q + "] => " + m + ",\n";
    }
  }
  return a + "]";
};
$jscomp.global.Object.defineProperties(Match.prototype, {index:{configurable:!0, enumerable:!0, get:function() {
  return this.caps[0];
}}, lastIndex:{configurable:!0, enumerable:!0, get:function() {
  return this.caps[1];
}}, length:{configurable:!0, enumerable:!0, get:function() {
  return this.caps.length / 2;
}}});
var codesToString = function(a) {
  return a.map(function(b, e) {
    var f = "#" + e.toString().padStart(3, "0") + ": " + b.op.padEnd(13, " ");
    switch(b.op) {
      case "cap_begin":
      case "cap_end":
        f += "" + b.index;
        break;
      case "cap_reset":
        f += b.from + " " + b.to;
        break;
      case "char":
        f += "'" + escapeCodePointAsRegExpSpurceChar(b.value) + "'";
        break;
      case "class":
      case "class_not":
        f += "" + b.set.toRegExpPattern("class_not" === b.op);
        break;
      case "fork_cont":
      case "fork_next":
        f += "#" + (e + 1 + b.next).toString().padStart(3, "0");
        break;
      case "jump":
      case "loop":
        f += "#" + (e + 1 + b.cont).toString().padStart(3, "0");
        break;
      case "push":
        f += "" + b.value;
        break;
      case "ref":
      case "ref_back":
        f += "" + b.index;
    }
    return f;
  }).join("\n");
};
function _nullishCoalesce$3(a, b) {
  return null != a ? a : b();
}
var index = function(a, b, e) {
  if (e) {
    return _nullishCoalesce$3(a.codePointAt(b), function() {
      return -1;
    });
  }
  a = a.charCodeAt(b);
  return Number.isNaN(a) ? -1 : a;
}, prevIndex = function(a, b, e) {
  var f = index(a, b - 1, e);
  return e ? 56320 <= f && 57343 >= f && (a = index(a, b - 2, e), 65536 <= a && 1114111 >= a) ? a : f : f;
}, size = function(a) {
  return 65536 <= a ? 2 : 1;
}, isLineTerminator = function(a) {
  return 10 === a || 13 === a || 8232 === a || 8233 === a;
}, calculateMaxStackSize = function(a) {
  var b = 0, e = 0;
  a = $jscomp.makeIterator(a);
  for (var f = a.next(); !f.done; f = a.next()) {
    switch(f.value.op) {
      case "push":
      case "push_pos":
      case "push_proc":
        b++;
        break;
      case "empty_check":
      case "pop":
      case "restore_pos":
      case "rewind_proc":
        b--;
    }
    e = Math.max(b, e);
  }
  return e;
};
var Proc = function(a, b, e, f, g) {
  this.pos = a;
  this.pc = b;
  this.stack = e;
  this.stackSize = f;
  this.caps = g;
};
Proc.prototype.clone = function() {
  return new Proc(this.pos, this.pc, Array.from(this.stack), this.stackSize, Array.from(this.caps));
};
var Program = function(a, b) {
  this.pattern = a;
  this.codes = b;
  this.maxStackSize = calculateMaxStackSize(b);
};
Program.prototype.toString = function() {
  var a = "", b = codesToString(this.codes).split("\n").join("\n    ");
  a = a + "Program {\n  pattern: " + (patternToString(this.pattern) + ",\n");
  return a + "  codes:\n    " + (b + "\n}");
};
Program.prototype[Symbol.for("nodejs.util.inspect.custom")] = function(a, b) {
  a = "";
  var e = b.stylize(patternToString(this.pattern), "regexp"), f = codesToString(this.codes).split("\n").map(function(g) {
    return b.stylize(g, "string");
  }).join("\n    ");
  a += b.stylize("Program", "special") + " {\n";
  a = a + ("  pattern: " + e + ",\n  codes:\n    ") + (f + "\n");
  return a += "}";
};
Program.prototype.exec = function(a, b) {
  for (b = void 0 === b ? 0 : b; b <= a.length;) {
    var e = [];
    for (e.push(this.createProc(b)); 0 < e.length;) {
      var f = e[e.length - 1], g = this.codes[f.pc], m = !1;
      f.pc++;
      switch(g.op) {
        case "any":
          g = index(a, f.pos, this.unicode);
          0 <= g && (this.dotAll || !isLineTerminator(g)) ? f.pos += size(g) : m = !0;
          break;
        case "back":
          g = prevIndex(a, f.pos, this.unicode);
          0 <= g ? f.pos -= size(g) : m = !0;
          break;
        case "cap_begin":
          f.caps[2 * g.index] = f.pos;
          break;
        case "cap_end":
          f.caps[2 * g.index + 1] = f.pos;
          break;
        case "cap_reset":
          for (var h = g.from; h < g.to; h++) {
            f.caps[2 * h] = f.caps[2 * h + 1] = -1;
          }
          break;
        case "char":
          h = index(a, f.pos, this.unicode);
          0 > h && (m = !0);
          (this.ignoreCase ? canonicalize(h, this.unicode) : h) === g.value ? f.pos += size(h) : m = !0;
          break;
        case "class":
        case "class_not":
          h = index(a, f.pos, this.unicode);
          if (0 > h) {
            m = !0;
            break;
          }
          var q = this.ignoreCase ? canonicalize(h, this.unicode) : h, l = g.set.has(q), k = "class" === g.op;
          if (this.ignoreCase) {
            q = $jscomp.makeIterator(uncanonicalize(q, this.unicode));
            for (var n = q.next(); !n.done; n = q.next()) {
              n = n.value, l = l || g.set.has(n);
            }
          }
          l === k ? f.pos += size(h) : m = !0;
          break;
        case "dec":
          f.stack[f.stackSize - 1]--;
          break;
        case "empty_check":
          f.stack[--f.stackSize] === f.pos && (m = !0);
          break;
        case "fail":
          m = !0;
          break;
        case "fork_cont":
        case "fork_next":
          h = f.clone();
          e.push(h);
          "fork_cont" === g.op ? f.pc += g.next : h.pc += g.next;
          break;
        case "jump":
          f.pc += g.cont;
          break;
        case "line_begin":
          g = prevIndex(a, f.pos, this.unicode);
          0 === f.pos || this.multiline && isLineTerminator(g) || (m = !0);
          break;
        case "line_end":
          g = index(a, f.pos, this.unicode);
          f.pos === a.length || this.multiline && isLineTerminator(g) || (m = !0);
          break;
        case "loop":
          0 < f.stack[f.stackSize - 1] && (f.pc += g.cont);
          break;
        case "match":
          return new Match(a, f.caps, this.names);
        case "pop":
          f.stackSize--;
          break;
        case "push":
          f.stack[f.stackSize++] = g.value;
          break;
        case "push_pos":
          f.stack[f.stackSize++] = f.pos;
          break;
        case "push_proc":
          f.stack[f.stackSize++] = e.length;
          break;
        case "ref":
          h = f.caps[2 * g.index];
          g = f.caps[2 * g.index + 1];
          g = 0 > h || 0 > g ? "" : a.slice(h, g);
          for (h = 0; h < g.length;) {
            l = index(a, f.pos, this.unicode);
            k = index(g, h, this.unicode);
            q = this.ignoreCase ? canonicalize(l, this.unicode) : l;
            n = this.ignoreCase ? canonicalize(k, this.unicode) : k;
            if (q !== n) {
              m = !0;
              break;
            }
            f.pos += size(l);
            h += size(k);
          }
          break;
        case "ref_back":
          h = f.caps[2 * g.index];
          g = f.caps[2 * g.index + 1];
          g = 0 > h || 0 > g ? "" : a.slice(h, g);
          for (h = g.length; 0 < h;) {
            l = prevIndex(a, f.pos, this.unicode);
            k = prevIndex(g, h, this.unicode);
            q = this.ignoreCase ? canonicalize(l, this.unicode) : l;
            n = this.ignoreCase ? canonicalize(k, this.unicode) : k;
            if (q !== n) {
              m = !0;
              break;
            }
            f.pos -= size(l);
            h -= size(k);
          }
          break;
        case "restore_pos":
          f.pos = f.stack[--f.stackSize];
          break;
        case "rewind_proc":
          e.length = f.stack[--f.stackSize];
          e[e.length - 1] = f;
          break;
        case "word_boundary":
        case "word_boundary_not":
          h = prevIndex(a, f.pos, this.unicode), f = index(a, f.pos, this.unicode), l = this.unicode && this.ignoreCase ? unicodeWord : word, l.has(h) !== l.has(f) !== ("word_boundary" === g.op) && (m = !0);
      }
      m && e.pop();
    }
    if (this.sticky) {
      break;
    }
    b += size(index(a, b, this.unicode));
  }
  return null;
};
Program.prototype.createProc = function(a) {
  for (var b = [], e = 2 * (this.captureParens + 1), f = 0; f < e; f++) {
    b.push(-1);
  }
  e = [];
  for (f = 0; f < this.maxStackSize; f++) {
    e.push(0);
  }
  return new Proc(a, 0, e, 0, b);
};
$jscomp.global.Object.defineProperties(Program.prototype, {ignoreCase:{configurable:!0, enumerable:!0, get:function() {
  return this.pattern.flagSet.ignoreCase;
}}, multiline:{configurable:!0, enumerable:!0, get:function() {
  return this.pattern.flagSet.multiline;
}}, dotAll:{configurable:!0, enumerable:!0, get:function() {
  return this.pattern.flagSet.dotAll;
}}, unicode:{configurable:!0, enumerable:!0, get:function() {
  return this.pattern.flagSet.unicode;
}}, sticky:{configurable:!0, enumerable:!0, get:function() {
  return this.pattern.flagSet.sticky;
}}, captureParens:{configurable:!0, enumerable:!0, get:function() {
  return this.pattern.captureParens;
}}, names:{configurable:!0, enumerable:!0, get:function() {
  return this.pattern.names;
}}});
function _nullishCoalesce$2(a, b) {
  return null != a ? a : b();
}
var Compiler = function(a) {
  Compiler.prototype.__init.call(this);
  Compiler.prototype.__init2.call(this);
  Compiler.prototype.__init3.call(this);
  this.pattern = a;
};
Compiler.prototype.__init = function() {
  this.advance = !1;
};
Compiler.prototype.__init2 = function() {
  this.captureParensIndex = 1;
};
Compiler.prototype.__init3 = function() {
  this.direction = "forward";
};
Compiler.prototype.compile = function() {
  var a = this.compileNode(this.pattern.child);
  a = [{op:"cap_begin", index:0}].concat($jscomp.arrayFromIterable(a), [{op:"cap_end", index:0}, {op:"match"}]);
  return new Program(this.pattern, a);
};
Compiler.prototype.compileNode = function(a) {
  switch(a.type) {
    case "Disjunction":
      return this.compileDisjunction(a);
    case "Sequence":
      return this.compileSequence(a);
    case "Capture":
      return this.compileCapture(a);
    case "NamedCapture":
      return this.compileNamedCapture(a);
    case "Group":
      return this.compileGroup(a);
    case "Many":
      return this.compileMany(a);
    case "Some":
      return this.compileSome(a);
    case "Optional":
      return this.compileOptional(a);
    case "Repeat":
      return this.compileRepeat(a);
    case "WordBoundary":
      return this.compileWordBoundary(a);
    case "LineBegin":
      return this.compileLineBegin(a);
    case "LineEnd":
      return this.compileLineEnd(a);
    case "LookAhead":
      return this.compileLookAhead(a);
    case "LookBehind":
      return this.compileLookBehind(a);
    case "Char":
      return this.compileChar(a);
    case "EscapeClass":
      return this.compileEscapeClass(a);
    case "Class":
      return this.compileClass(a);
    case "Dot":
      return this.compileDot(a);
    case "BackRef":
      return this.compileBackRef(a);
    case "NamedBackRef":
      return this.compileNamedBackRef(a);
  }
};
Compiler.prototype.compileDisjunction = function(a) {
  if (0 === a.children.length) {
    throw Error("BUG: invalid pattern");
  }
  var b = [], e = !0;
  a = $jscomp.makeIterator(a.children);
  for (var f = a.next(); !f.done; f = a.next()) {
    b.push(this.compileNode(f.value)), e = e && this.advance;
  }
  this.advance = e;
  return b.reduceRight(function(g, m) {
    return [{op:"fork_cont", next:m.length + 1}].concat($jscomp.arrayFromIterable(m), [{op:"jump", cont:g.length}], $jscomp.arrayFromIterable(g));
  });
};
Compiler.prototype.compileSequence = function(a) {
  var b = Array.from(a.children);
  "backward" === this.direction && b.reverse();
  a = [];
  var e = !1;
  b = $jscomp.makeIterator(b);
  for (var f = b.next(); !f.done; f = b.next()) {
    f = this.compileNode(f.value), a.push.apply(a, $jscomp.arrayFromIterable(f)), e = e || this.advance;
  }
  this.advance = e;
  return a;
};
Compiler.prototype.compileGroup = function(a) {
  return this.compileNode(a.child);
};
Compiler.prototype.compileCapture = function(a) {
  var b = this.compileNode(a.child);
  if (a.index !== this.captureParensIndex++) {
    throw Error("BUG: invalid pattern");
  }
  return [{op:"backward" === this.direction ? "cap_end" : "cap_begin", index:a.index}].concat($jscomp.arrayFromIterable(b), [{op:"backward" === this.direction ? "cap_begin" : "cap_end", index:a.index}]);
};
Compiler.prototype.compileNamedCapture = function(a) {
  var b = this.compileNode(a.child);
  a = this.names.get(a.name);
  if (void 0 === a || a !== this.captureParensIndex++) {
    throw Error("BUG: invalid pattern");
  }
  return [{op:"cap_begin", index:a}].concat($jscomp.arrayFromIterable(b), [{op:"cap_end", index:a}]);
};
Compiler.prototype.compileMany = function(a) {
  var b = this.captureParensIndex, e = this.insertEmptyCheck(this.compileNode(a.child));
  b = this.insertCapReset(b, e);
  this.advance = !1;
  return [{op:a.nonGreedy ? "fork_next" : "fork_cont", next:b.length + 1}].concat($jscomp.arrayFromIterable(b), [{op:"jump", cont:-1 - b.length - 1}]);
};
Compiler.prototype.compileSome = function(a) {
  var b = this.captureParensIndex, e = this.compileNode(a.child);
  b = this.insertCapReset(b, this.insertEmptyCheck(e));
  return [].concat($jscomp.arrayFromIterable(e), [{op:a.nonGreedy ? "fork_next" : "fork_cont", next:b.length + 1}], $jscomp.arrayFromIterable(b), [{op:"jump", cont:-1 - b.length - 1}]);
};
Compiler.prototype.compileOptional = function(a) {
  var b = this.compileNode(a.child);
  this.advance = !1;
  return [{op:a.nonGreedy ? "fork_next" : "fork_cont", next:b.length}].concat($jscomp.arrayFromIterable(b));
};
Compiler.prototype.compileRepeat = function(a) {
  var b = this.captureParensIndex, e = this.compileNode(a.child), f = [];
  if (1 === a.min) {
    f.push.apply(f, $jscomp.arrayFromIterable(e));
  } else {
    if (1 < a.min) {
      var g = this.insertCapReset(b, e);
      f.push.apply(f, [{op:"push", value:a.min}].concat($jscomp.arrayFromIterable(g), [{op:"dec"}, {op:"loop", cont:-1 - g.length - 1}, {op:"pop"}]));
    } else {
      this.advance = !1;
    }
  }
  g = _nullishCoalesce$2(a.max, function() {
    return a.min;
  });
  Infinity === g ? (e = this.insertCapReset(b, this.insertEmptyCheck(e)), f.push.apply(f, [{op:a.nonGreedy ? "fork_next" : "fork_cont", next:e.length + 1}].concat($jscomp.arrayFromIterable(e), [{op:"jump", cont:-1 - e.length - 1}]))) : g > a.min && (g -= a.min, b = this.insertCapReset(b, this.insertEmptyCheck(e)), 1 === g ? f.push.apply(f, [{op:a.nonGreedy ? "fork_next" : "fork_cont", next:b.length}].concat($jscomp.arrayFromIterable(b))) : f.push.apply(f, [{op:"push", value:g + 1}, {op:a.nonGreedy ? 
  "fork_next" : "fork_cont", next:e.length + 4}].concat($jscomp.arrayFromIterable(b), [{op:"dec"}, {op:"loop", cont:-1 - e.length - 2}, {op:"fail"}, {op:"pop"}])));
  return f;
};
Compiler.prototype.insertEmptyCheck = function(a) {
  return this.advance ? a : [{op:"push_pos"}].concat($jscomp.arrayFromIterable(a), [{op:"empty_check"}]);
};
Compiler.prototype.insertCapReset = function(a, b) {
  return a === this.captureParensIndex ? b : [{op:"cap_reset", from:a, to:this.captureParensIndex}].concat($jscomp.arrayFromIterable(b));
};
Compiler.prototype.compileWordBoundary = function(a) {
  this.advance = !1;
  return [{op:a.invert ? "word_boundary_not" : "word_boundary"}];
};
Compiler.prototype.compileLineBegin = function(a) {
  this.advance = !1;
  return [{op:"line_begin"}];
};
Compiler.prototype.compileLineEnd = function(a) {
  this.advance = !1;
  return [{op:"line_end"}];
};
Compiler.prototype.compileLookAhead = function(a) {
  var b = this.direction;
  this.direction = "forward";
  a = this.compileLookAround(a);
  this.direction = b;
  return a;
};
Compiler.prototype.compileLookBehind = function(a) {
  var b = this.direction;
  this.direction = "backward";
  a = this.compileLookAround(a);
  this.direction = b;
  return a;
};
Compiler.prototype.compileLookAround = function(a) {
  var b = this.compileNode(a.child);
  this.advance = !1;
  return a.negative ? [{op:"push_pos"}, {op:"push_proc"}, {op:"fork_cont", next:b.length + 2}].concat($jscomp.arrayFromIterable(b), [{op:"rewind_proc"}, {op:"fail"}, {op:"pop"}, {op:"restore_pos"}]) : [{op:"push_pos"}, {op:"push_proc"}].concat($jscomp.arrayFromIterable(b), [{op:"rewind_proc"}, {op:"restore_pos"}]);
};
Compiler.prototype.compileChar = function(a) {
  a = a.value;
  this.ignoreCase && (a = canonicalize(a, this.unicode));
  this.advance = !0;
  return this.insertBack([{op:"char", value:a}]);
};
Compiler.prototype.compileEscapeClass = function(a) {
  a = this.escapeClassToSet(a);
  this.advance = !0;
  return this.insertBack([{op:"class", set:a}]);
};
Compiler.prototype.compileClass = function(a) {
  for (var b = new CharSet(), e = $jscomp.makeIterator(a.children), f = e.next(); !f.done; f = e.next()) {
    switch(f = f.value, f.type) {
      case "Char":
        b.add(f.value, f.value + 1);
        break;
      case "EscapeClass":
        b.addCharSet(this.escapeClassToSet(f));
        break;
      case "ClassRange":
        b.add(f.children[0].value, f.children[1].value + 1);
    }
  }
  this.advance = !0;
  return this.insertBack([{op:a.invert ? "class_not" : "class", set:b}]);
};
Compiler.prototype.escapeClassToSet = function(a) {
  switch(a.kind) {
    case "digit":
      return a.invert ? invertDigit : digit;
    case "word":
      return this.unicode && this.ignoreCase ? a.invert ? invertUnicodeWord : unicodeWord : a.invert ? invertWord : word;
    case "space":
      return a.invert ? invertSpace : space;
    case "unicode_property":
      var b = _nullishCoalesce$2(loadPropertyValue("General_Category", a.property), function() {
        return loadProperty(a.property);
      });
      if (null === b) {
        throw new RegExpSyntaxError("invalid Unicode property");
      }
      return a.invert ? b.clone().invert() : b;
    case "unicode_property_value":
      b = loadPropertyValue(a.property, a.value);
      if (null === b) {
        throw new RegExpSyntaxError("invalid Unicode property value");
      }
      return a.invert ? b.clone().invert() : b;
  }
};
Compiler.prototype.compileDot = function(a) {
  this.advance = !0;
  return this.insertBack([{op:"any"}]);
};
Compiler.prototype.insertBack = function(a) {
  return "forward" === this.direction ? a : [{op:"back"}].concat($jscomp.arrayFromIterable(a), [{op:"back"}]);
};
Compiler.prototype.compileBackRef = function(a) {
  if (1 > a.index || this.captureParens < a.index) {
    throw Error("invalid back reference");
  }
  this.advance = !1;
  return [{op:"backward" === this.direction ? "ref_back" : "ref", index:a.index}];
};
Compiler.prototype.compileNamedBackRef = function(a) {
  a = this.names.get(a.name);
  if (void 0 === a || 1 > a || this.captureParens < a) {
    throw Error("invalid named back reference");
  }
  this.advance = !1;
  return [{op:"backward" === this.direction ? "ref_back" : "ref", index:a}];
};
$jscomp.global.Object.defineProperties(Compiler.prototype, {ignoreCase:{configurable:!0, enumerable:!0, get:function() {
  return this.pattern.flagSet.ignoreCase;
}}, unicode:{configurable:!0, enumerable:!0, get:function() {
  return this.pattern.flagSet.unicode;
}}, captureParens:{configurable:!0, enumerable:!0, get:function() {
  return this.pattern.captureParens;
}}, names:{configurable:!0, enumerable:!0, get:function() {
  return this.pattern.names;
}}});
function _nullishCoalesce$6(a, b) {
  return null != a ? a : b();
}
var canonicalize = function(a, b) {
  if (b) {
    return foldMap.get(a) || a;
  }
  b = String.fromCharCode(a).toUpperCase();
  if (2 <= b.length) {
    return a;
  }
  b = b.charCodeAt(0);
  return 128 <= a && 128 > b ? a : b;
}, uncanonicalize = function(a, b) {
  if (b) {
    return _nullishCoalesce$6(inverseFoldMap$1.get(a), function() {
      return [];
    });
  }
  b = inverseFoldMap.get(a);
  return void 0 !== b ? b : [String.fromCharCode(a).toLowerCase().charCodeAt(0)];
};
function _nullishCoalesce(a, b) {
  return null != a ? a : b();
}
function _optionalChain(a) {
  for (var b = void 0, e = a[0], f = 1; f < a.length;) {
    var g = a[f], m = a[f + 1];
    f += 2;
    if (("optionalAccess" === g || "optionalCall" === g) && null == e) {
      return;
    }
    if ("access" === g || "optionalAccess" === g) {
      b = e, e = m(e);
    } else {
      if ("call" === g || "optionalCall" === g) {
        e = m(function() {
          var h = $jscomp.getRestArguments.apply(0, arguments);
          return e.call.apply(e, [b].concat($jscomp.arrayFromIterable(h)));
        }), b = void 0;
      }
    }
  }
  return e;
}
var isRegExp = function(a) {
  return a && "object" === typeof a ? !!a[Symbol.match] : !1;
}, advance = function(a, b, e) {
  return !e || b + 1 >= a.length ? b + 1 : 65536 <= _nullishCoalesce(a.codePointAt(b), function() {
    return 0;
  }) ? b + 2 : b + 1;
}, RegExpCompat = function() {
  for (var a = function q(m, h) {
    if (!this || this.constructor !== q) {
      return isRegExp(m) && void 0 === h && m.constructor === q ? m : new a(m, h);
    }
    if (m instanceof RegExp || m instanceof q) {
      void 0 === h && (h = m.flags), m = m.source;
    }
    m = String(m);
    this.pattern = (new Parser(m, h, !0)).parse();
    this.program = (new Compiler(this.pattern)).compile();
    return this;
  }, b = {}, e = $jscomp.makeIterator("$1 $2 $3 $4 $5 $6 $7 $8 $9 lastMatch".split(" ")), f = e.next(); !f.done; b = {$jscomp$loop$prop$name$81:b.$jscomp$loop$prop$name$81}, f = e.next()) {
    b.$jscomp$loop$prop$name$81 = f.value, Object.defineProperty(a, b.$jscomp$loop$prop$name$81, {get:function(m) {
      return function() {
        throw Error("RegExpCompat does not support old RegExp." + m.$jscomp$loop$prop$name$81 + " method");
      };
    }(b),});
  }
  a[Symbol.species] = a;
  Object.defineProperty(a.prototype, "source", {get:function() {
    var g = nodeToString(this.pattern.child);
    return "" === g ? "(?:)" : g;
  },});
  Object.defineProperty(a.prototype, "flags", {get:function() {
    return flagSetToString(this.pattern.flagSet);
  },});
  b = {};
  e = $jscomp.makeIterator("global ignoreCase multiline dotAll unicode sticky".split(" "));
  for (f = e.next(); !f.done; b = {$jscomp$loop$prop$flag$83:b.$jscomp$loop$prop$flag$83}, f = e.next()) {
    b.$jscomp$loop$prop$flag$83 = f.value, Object.defineProperty(a.prototype, b.$jscomp$loop$prop$flag$83, {get:function(g) {
      return function() {
        return this.pattern.flagSet[g.$jscomp$loop$prop$flag$83];
      };
    }(b),});
  }
  a.prototype.compile = function() {
    return this;
  };
  a.prototype.toString = function() {
    return patternToString(this.pattern);
  };
  a.prototype.exec = function(g) {
    var m = this.global || this.sticky, h = 0;
    m && (h = this.lastIndex);
    g = this.program.exec(g, h);
    m && (this.lastIndex = _nullishCoalesce(_optionalChain([g, "optionalAccess", function(q) {
      return q.lastIndex;
    }]), function() {
      return 0;
    }));
    return _nullishCoalesce(_optionalChain([g, "optionalAccess", function(q) {
      return q.toArray;
    }, "call", function(q) {
      return q();
    }]), function() {
      return null;
    });
  };
  a.prototype.test = function(g) {
    return !!this.exec(g);
  };
  a.prototype[Symbol.match] = function(g) {
    if (this.global) {
      this.lastIndex = 0;
      for (var m = [];;) {
        var h = this.exec(g);
        if (h) {
          m.push(h[0]), "" === h[0] && (this.lastIndex = advance(g, this.lastIndex, this.unicode));
        } else {
          break;
        }
      }
      return 0 === m.length ? null : m;
    }
    return this.exec(g);
  };
  a.prototype[Symbol.replace] = function(g, m) {
    var h = [];
    this.global && (this.lastIndex = 0);
    for (;;) {
      var q = this.exec(g);
      if (!q) {
        break;
      }
      h.push(q);
      if (!this.global) {
        break;
      }
      "" === q[0] && (this.lastIndex = advance(g, this.lastIndex, this.unicode));
    }
    q = 0;
    var l = "";
    h = $jscomp.makeIterator(h);
    for (var k = h.next(); !k.done; k = h.next()) {
      if (k = k.value, l += g.slice(q, k.index), q = k.index + k[0].length, "function" === typeof m) {
        var n = [k[0]].concat($jscomp.arrayFromIterable(k.slice(1)), [k.index, g]);
        k.groups && n.push(k.groups);
        l += String(m.apply(null, $jscomp.arrayFromIterable(n)));
      } else {
        for (var p = 0;;) {
          n = m.indexOf("$", p);
          l += m.slice(p, -1 === n ? g.length : n);
          if (-1 === n) {
            break;
          }
          p = m[n + 1];
          switch(p) {
            case "$":
              p = n + 2;
              l += "$";
              break;
            case "&":
              p = n + 2;
              l += k[0];
              break;
            case "`":
              p = n + 2;
              l += g.slice(0, k.index);
              break;
            case "'":
              p = n + 2;
              l += g.slice(q);
              break;
            case "<":
              p = m.indexOf(">", n + 2);
              if (0 === this.pattern.names.size || -1 === p) {
                p = n + 2;
                l += "$<";
                break;
              }
              n = m.slice(n + 2, p);
              l += _nullishCoalesce(k.groups && k.groups[n], function() {
                return "";
              });
              p += 1;
              break;
            default:
              if ("0" <= p && "9" >= p) {
                var r = m[n + 2];
                p = "0" <= r && "9" >= r ? p + r : p;
                r = Number.parseInt(p, 10);
                if (0 < r && r < k.length) {
                  l += _nullishCoalesce(k[r], function() {
                    return "";
                  });
                  p = n + 1 + p.length;
                  break;
                }
                r = Math.floor(r / 10);
                if (0 < r && r < k.length) {
                  l += _nullishCoalesce(k[r], function() {
                    return "";
                  });
                  p = n + p.length;
                  break;
                }
              }
              l += "$";
              p = n + 1;
          }
        }
      }
    }
    return l += g.slice(q);
  };
  a.prototype[Symbol.search] = function(g) {
    var m = this.lastIndex;
    this.lastIndex = 0;
    g = this.exec(g);
    this.lastIndex = m;
    return _nullishCoalesce(g && g.index, function() {
      return -1;
    });
  };
  a.prototype[Symbol.split] = function(g, m) {
    var h = this.sticky ? this.flags : this.flags + "y", q = this.constructor;
    q = new (_nullishCoalesce(q && q[Symbol.species], function() {
      return a;
    }))(this.source, h);
    m = _nullishCoalesce(m, function() {
      return Math.pow(2, 32) - 1;
    }) >>> 0;
    h = [];
    if (0 === m) {
      return h;
    }
    if (0 === g.length) {
      return null === q.exec(g) && h.push(g), h;
    }
    for (var l = 0, k = l; k < g.length;) {
      q.lastIndex = k;
      var n = q.exec(g);
      if (null === n) {
        k = advance(g, k, this.unicode);
      } else {
        var p = Math.min(q.lastIndex, g.length);
        if (p === l) {
          k = advance(g, k, this.unicode);
        } else {
          l = g.slice(l, k);
          h.push(l);
          if (m === h.length) {
            return h;
          }
          l = p;
          for (p = 1; p < n.length; p++) {
            if (h.push(n[p]), m === h.length) {
              return h;
            }
          }
          k = l;
        }
      }
    }
    g = g.slice(l);
    h.push(g);
    return h;
  };
  return a;
}();
window.RegExpCompat = RegExpCompat;

})()
