// node_modules/@forsakringskassan/docs-live-example/dist/esm/index.js
import { defineComponent as defineComponent2 } from "vue";
import { defineComponent as _defineComponent } from "vue";
import { ref, computed, onMounted, watch, nextTick } from "vue";

// node_modules/prettier/standalone.mjs
var Au = Object.create;
var At = Object.defineProperty;
var vu = Object.getOwnPropertyDescriptor;
var Bu = Object.getOwnPropertyNames;
var wu = Object.getPrototypeOf;
var _u = Object.prototype.hasOwnProperty;
var dr = (e) => {
  throw TypeError(e);
};
var pr = (e, t7) => () => (t7 || e((t7 = { exports: {} }).exports, t7), t7.exports);
var vt = (e, t7) => {
  for (var r in t7) At(e, r, { get: t7[r], enumerable: true });
};
var xu = (e, t7, r, n) => {
  if (t7 && typeof t7 == "object" || typeof t7 == "function") for (let u of Bu(t7)) !_u.call(e, u) && u !== r && At(e, u, { get: () => t7[u], enumerable: !(n = vu(t7, u)) || n.enumerable });
  return e;
};
var Me = (e, t7, r) => (r = e != null ? Au(wu(e)) : {}, xu(t7 || !e || !e.__esModule ? At(r, "default", { value: e, enumerable: true }) : r, e));
var bu = (e, t7, r) => t7.has(e) || dr("Cannot " + r);
var Fr = (e, t7, r) => t7.has(e) ? dr("Cannot add the same private member more than once") : t7 instanceof WeakSet ? t7.add(e) : t7.set(e, r);
var pe = (e, t7, r) => (bu(e, t7, "access private method"), r);
var ot = pr((Da2, mn2) => {
  "use strict";
  var Fn2 = new Proxy(String, { get: () => Fn2 });
  mn2.exports = Fn2;
});
var $n = pr((ur2) => {
  "use strict";
  Object.defineProperty(ur2, "__esModule", { value: true });
  function wi2() {
    return new Proxy({}, { get: () => (e) => e });
  }
  var Wn2 = /\r\n|[\n\r\u2028\u2029]/;
  function _i2(e, t7, r) {
    let n = Object.assign({ column: 0, line: -1 }, e.start), u = Object.assign({}, n, e.end), { linesAbove: i = 2, linesBelow: o = 3 } = r || {}, s = n.line, a = n.column, D = u.line, l = u.column, p = Math.max(s - (i + 1), 0), f = Math.min(t7.length, D + o);
    s === -1 && (p = 0), D === -1 && (f = t7.length);
    let d = D - s, c = {};
    if (d) for (let F = 0; F <= d; F++) {
      let m2 = F + s;
      if (!a) c[m2] = true;
      else if (F === 0) {
        let h3 = t7[m2 - 1].length;
        c[m2] = [a, h3 - a + 1];
      } else if (F === d) c[m2] = [0, l];
      else {
        let h3 = t7[m2 - F].length;
        c[m2] = [0, h3];
      }
    }
    else a === l ? a ? c[s] = [a, 0] : c[s] = true : c[s] = [a, l - a];
    return { start: p, end: f, markerLines: c };
  }
  function xi2(e, t7, r = {}) {
    let u = wi2(false), i = e.split(Wn2), { start: o, end: s, markerLines: a } = _i2(t7, i, r), D = t7.start && typeof t7.start.column == "number", l = String(s).length, f = e.split(Wn2, s).slice(o, s).map((d, c) => {
      let F = o + 1 + c, h3 = ` ${` ${F}`.slice(-l)} |`, C = a[F], v2 = !a[F + 1];
      if (C) {
        let E2 = "";
        if (Array.isArray(C)) {
          let g = d.slice(0, Math.max(C[0] - 1, 0)).replace(/[^\t]/g, " "), j2 = C[1] || 1;
          E2 = [`
 `, u.gutter(h3.replace(/\d/g, " ")), " ", g, u.marker("^").repeat(j2)].join(""), v2 && r.message && (E2 += " " + u.message(r.message));
        }
        return [u.marker(">"), u.gutter(h3), d.length > 0 ? ` ${d}` : "", E2].join("");
      } else return ` ${u.gutter(h3)}${d.length > 0 ? ` ${d}` : ""}`;
    }).join(`
`);
    return r.message && !D && (f = `${" ".repeat(l + 1)}${r.message}
${f}`), f;
  }
  ur2.codeFrameColumns = xi2;
});
var fr = {};
vt(fr, { __debug: () => lo, check: () => ao, doc: () => Dr, format: () => yu, formatWithCursor: () => gu, getSupportInfo: () => Do, util: () => cr, version: () => cu });
var Nu = (e, t7, r, n) => {
  if (!(e && t7 == null)) return t7.replaceAll ? t7.replaceAll(r, n) : r.global ? t7.replace(r, n) : t7.split(r).join(n);
};
var ne = Nu;
function U() {
}
U.prototype = { diff: function(t7, r) {
  var n, u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = u.callback;
  typeof u == "function" && (i = u, u = {});
  var o = this;
  function s(E2) {
    return E2 = o.postProcess(E2, u), i ? (setTimeout(function() {
      i(E2);
    }, 0), true) : E2;
  }
  t7 = this.castInput(t7, u), r = this.castInput(r, u), t7 = this.removeEmpty(this.tokenize(t7, u)), r = this.removeEmpty(this.tokenize(r, u));
  var a = r.length, D = t7.length, l = 1, p = a + D;
  u.maxEditLength != null && (p = Math.min(p, u.maxEditLength));
  var f = (n = u.timeout) !== null && n !== void 0 ? n : 1 / 0, d = Date.now() + f, c = [{ oldPos: -1, lastComponent: void 0 }], F = this.extractCommon(c[0], r, t7, 0, u);
  if (c[0].oldPos + 1 >= D && F + 1 >= a) return s(mr(o, c[0].lastComponent, r, t7, o.useLongestToken));
  var m2 = -1 / 0, h3 = 1 / 0;
  function C() {
    for (var E2 = Math.max(m2, -l); E2 <= Math.min(h3, l); E2 += 2) {
      var g = void 0, j2 = c[E2 - 1], b2 = c[E2 + 1];
      j2 && (c[E2 - 1] = void 0);
      var X2 = false;
      if (b2) {
        var ae2 = b2.oldPos - E2;
        X2 = b2 && 0 <= ae2 && ae2 < a;
      }
      var $e = j2 && j2.oldPos + 1 < D;
      if (!X2 && !$e) {
        c[E2] = void 0;
        continue;
      }
      if (!$e || X2 && j2.oldPos < b2.oldPos ? g = o.addToPath(b2, true, false, 0, u) : g = o.addToPath(j2, false, true, 1, u), F = o.extractCommon(g, r, t7, E2, u), g.oldPos + 1 >= D && F + 1 >= a) return s(mr(o, g.lastComponent, r, t7, o.useLongestToken));
      c[E2] = g, g.oldPos + 1 >= D && (h3 = Math.min(h3, E2 - 1)), F + 1 >= a && (m2 = Math.max(m2, E2 + 1));
    }
    l++;
  }
  if (i) (function E2() {
    setTimeout(function() {
      if (l > p || Date.now() > d) return i();
      C() || E2();
    }, 0);
  })();
  else for (; l <= p && Date.now() <= d; ) {
    var v2 = C();
    if (v2) return v2;
  }
}, addToPath: function(t7, r, n, u, i) {
  var o = t7.lastComponent;
  return o && !i.oneChangePerToken && o.added === r && o.removed === n ? { oldPos: t7.oldPos + u, lastComponent: { count: o.count + 1, added: r, removed: n, previousComponent: o.previousComponent } } : { oldPos: t7.oldPos + u, lastComponent: { count: 1, added: r, removed: n, previousComponent: o } };
}, extractCommon: function(t7, r, n, u, i) {
  for (var o = r.length, s = n.length, a = t7.oldPos, D = a - u, l = 0; D + 1 < o && a + 1 < s && this.equals(n[a + 1], r[D + 1], i); ) D++, a++, l++, i.oneChangePerToken && (t7.lastComponent = { count: 1, previousComponent: t7.lastComponent, added: false, removed: false });
  return l && !i.oneChangePerToken && (t7.lastComponent = { count: l, previousComponent: t7.lastComponent, added: false, removed: false }), t7.oldPos = a, D;
}, equals: function(t7, r, n) {
  return n.comparator ? n.comparator(t7, r) : t7 === r || n.ignoreCase && t7.toLowerCase() === r.toLowerCase();
}, removeEmpty: function(t7) {
  for (var r = [], n = 0; n < t7.length; n++) t7[n] && r.push(t7[n]);
  return r;
}, castInput: function(t7) {
  return t7;
}, tokenize: function(t7) {
  return Array.from(t7);
}, join: function(t7) {
  return t7.join("");
}, postProcess: function(t7) {
  return t7;
} };
function mr(e, t7, r, n, u) {
  for (var i = [], o; t7; ) i.push(t7), o = t7.previousComponent, delete t7.previousComponent, t7 = o;
  i.reverse();
  for (var s = 0, a = i.length, D = 0, l = 0; s < a; s++) {
    var p = i[s];
    if (p.removed) p.value = e.join(n.slice(l, l + p.count)), l += p.count;
    else {
      if (!p.added && u) {
        var f = r.slice(D, D + p.count);
        f = f.map(function(d, c) {
          var F = n[l + c];
          return F.length > d.length ? F : d;
        }), p.value = e.join(f);
      } else p.value = e.join(r.slice(D, D + p.count));
      D += p.count, p.added || (l += p.count);
    }
  }
  return i;
}
var mo = new U();
function hr(e, t7) {
  var r;
  for (r = 0; r < e.length && r < t7.length; r++) if (e[r] != t7[r]) return e.slice(0, r);
  return e.slice(0, r);
}
function Er(e, t7) {
  var r;
  if (!e || !t7 || e[e.length - 1] != t7[t7.length - 1]) return "";
  for (r = 0; r < e.length && r < t7.length; r++) if (e[e.length - (r + 1)] != t7[t7.length - (r + 1)]) return e.slice(-r);
  return e.slice(-r);
}
function Bt(e, t7, r) {
  if (e.slice(0, t7.length) != t7) throw Error("string ".concat(JSON.stringify(e), " doesn't start with prefix ").concat(JSON.stringify(t7), "; this is a bug"));
  return r + e.slice(t7.length);
}
function wt(e, t7, r) {
  if (!t7) return e + r;
  if (e.slice(-t7.length) != t7) throw Error("string ".concat(JSON.stringify(e), " doesn't end with suffix ").concat(JSON.stringify(t7), "; this is a bug"));
  return e.slice(0, -t7.length) + r;
}
function _e(e, t7) {
  return Bt(e, t7, "");
}
function Ve(e, t7) {
  return wt(e, t7, "");
}
function Cr(e, t7) {
  return t7.slice(0, Ou(e, t7));
}
function Ou(e, t7) {
  var r = 0;
  e.length > t7.length && (r = e.length - t7.length);
  var n = t7.length;
  e.length < t7.length && (n = e.length);
  var u = Array(n), i = 0;
  u[0] = 0;
  for (var o = 1; o < n; o++) {
    for (t7[o] == t7[i] ? u[o] = u[i] : u[o] = i; i > 0 && t7[o] != t7[i]; ) i = u[i];
    t7[o] == t7[i] && i++;
  }
  i = 0;
  for (var s = r; s < e.length; s++) {
    for (; i > 0 && e[s] != t7[i]; ) i = u[i];
    e[s] == t7[i] && i++;
  }
  return i;
}
var Ue = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}";
var Su = new RegExp("[".concat(Ue, "]+|\\s+|[^").concat(Ue, "]"), "ug");
var Ge = new U();
Ge.equals = function(e, t7, r) {
  return r.ignoreCase && (e = e.toLowerCase(), t7 = t7.toLowerCase()), e.trim() === t7.trim();
};
Ge.tokenize = function(e) {
  var t7 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r;
  if (t7.intlSegmenter) {
    if (t7.intlSegmenter.resolvedOptions().granularity != "word") throw new Error('The segmenter passed must have a granularity of "word"');
    r = Array.from(t7.intlSegmenter.segment(e), function(i) {
      return i.segment;
    });
  } else r = e.match(Su) || [];
  var n = [], u = null;
  return r.forEach(function(i) {
    /\s/.test(i) ? u == null ? n.push(i) : n.push(n.pop() + i) : /\s/.test(u) ? n[n.length - 1] == u ? n.push(n.pop() + i) : n.push(u + i) : n.push(i), u = i;
  }), n;
};
Ge.join = function(e) {
  return e.map(function(t7, r) {
    return r == 0 ? t7 : t7.replace(/^\s+/, "");
  }).join("");
};
Ge.postProcess = function(e, t7) {
  if (!e || t7.oneChangePerToken) return e;
  var r = null, n = null, u = null;
  return e.forEach(function(i) {
    i.added ? n = i : i.removed ? u = i : ((n || u) && gr(r, u, n, i), r = i, n = null, u = null);
  }), (n || u) && gr(r, u, n, null), e;
};
function gr(e, t7, r, n) {
  if (t7 && r) {
    var u = t7.value.match(/^\s*/)[0], i = t7.value.match(/\s*$/)[0], o = r.value.match(/^\s*/)[0], s = r.value.match(/\s*$/)[0];
    if (e) {
      var a = hr(u, o);
      e.value = wt(e.value, o, a), t7.value = _e(t7.value, a), r.value = _e(r.value, a);
    }
    if (n) {
      var D = Er(i, s);
      n.value = Bt(n.value, s, D), t7.value = Ve(t7.value, D), r.value = Ve(r.value, D);
    }
  } else if (r) e && (r.value = r.value.replace(/^\s*/, "")), n && (n.value = n.value.replace(/^\s*/, ""));
  else if (e && n) {
    var l = n.value.match(/^\s*/)[0], p = t7.value.match(/^\s*/)[0], f = t7.value.match(/\s*$/)[0], d = hr(l, p);
    t7.value = _e(t7.value, d);
    var c = Er(_e(l, d), f);
    t7.value = Ve(t7.value, c), n.value = Bt(n.value, l, c), e.value = wt(e.value, l, l.slice(0, l.length - c.length));
  } else if (n) {
    var F = n.value.match(/^\s*/)[0], m2 = t7.value.match(/\s*$/)[0], h3 = Cr(m2, F);
    t7.value = Ve(t7.value, h3);
  } else if (e) {
    var C = e.value.match(/\s*$/)[0], v2 = t7.value.match(/^\s*/)[0], E2 = Cr(C, v2);
    t7.value = _e(t7.value, E2);
  }
}
var Tu = new U();
Tu.tokenize = function(e) {
  var t7 = new RegExp("(\\r?\\n)|[".concat(Ue, "]+|[^\\S\\n\\r]+|[^").concat(Ue, "]"), "ug");
  return e.match(t7) || [];
};
var bt = new U();
bt.tokenize = function(e, t7) {
  t7.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
  var r = [], n = e.split(/(\n|\r\n)/);
  n[n.length - 1] || n.pop();
  for (var u = 0; u < n.length; u++) {
    var i = n[u];
    u % 2 && !t7.newlineIsToken ? r[r.length - 1] += i : r.push(i);
  }
  return r;
};
bt.equals = function(e, t7, r) {
  return r.ignoreWhitespace ? ((!r.newlineIsToken || !e.includes(`
`)) && (e = e.trim()), (!r.newlineIsToken || !t7.includes(`
`)) && (t7 = t7.trim())) : r.ignoreNewlineAtEof && !r.newlineIsToken && (e.endsWith(`
`) && (e = e.slice(0, -1)), t7.endsWith(`
`) && (t7 = t7.slice(0, -1))), U.prototype.equals.call(this, e, t7, r);
};
var ku = new U();
ku.tokenize = function(e) {
  return e.split(/(\S.+?[.!?])(?=\s+|$)/);
};
var Lu = new U();
Lu.tokenize = function(e) {
  return e.split(/([{}:;,]|\s+)/);
};
function _t(e) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t7) {
    return typeof t7;
  } : function(t7) {
    return t7 && typeof Symbol == "function" && t7.constructor === Symbol && t7 !== Symbol.prototype ? "symbol" : typeof t7;
  }, _t(e);
}
var xe = new U();
xe.useLongestToken = true;
xe.tokenize = bt.tokenize;
xe.castInput = function(e, t7) {
  var r = t7.undefinedReplacement, n = t7.stringifyReplacer, u = n === void 0 ? function(i, o) {
    return typeof o > "u" ? r : o;
  } : n;
  return typeof e == "string" ? e : JSON.stringify(xt(e, null, null, u), u, "  ");
};
xe.equals = function(e, t7, r) {
  return U.prototype.equals.call(xe, e.replace(/,([\r\n])/g, "$1"), t7.replace(/,([\r\n])/g, "$1"), r);
};
function xt(e, t7, r, n, u) {
  t7 = t7 || [], r = r || [], n && (e = n(u, e));
  var i;
  for (i = 0; i < t7.length; i += 1) if (t7[i] === e) return r[i];
  var o;
  if (Object.prototype.toString.call(e) === "[object Array]") {
    for (t7.push(e), o = new Array(e.length), r.push(o), i = 0; i < e.length; i += 1) o[i] = xt(e[i], t7, r, n, u);
    return t7.pop(), r.pop(), o;
  }
  if (e && e.toJSON && (e = e.toJSON()), _t(e) === "object" && e !== null) {
    t7.push(e), o = {}, r.push(o);
    var s = [], a;
    for (a in e) Object.prototype.hasOwnProperty.call(e, a) && s.push(a);
    for (s.sort(), i = 0; i < s.length; i += 1) a = s[i], o[a] = xt(e[a], t7, r, n, a);
    t7.pop(), r.pop();
  } else o = e;
  return o;
}
var ze = new U();
ze.tokenize = function(e) {
  return e.slice();
};
ze.join = ze.removeEmpty = function(e) {
  return e;
};
function yr(e, t7, r) {
  return ze.diff(e, t7, r);
}
function Ar(e) {
  let t7 = e.indexOf("\r");
  return t7 !== -1 ? e.charAt(t7 + 1) === `
` ? "crlf" : "cr" : "lf";
}
function be(e) {
  switch (e) {
    case "cr":
      return "\r";
    case "crlf":
      return `\r
`;
    default:
      return `
`;
  }
}
function Nt(e, t7) {
  let r;
  switch (t7) {
    case `
`:
      r = /\n/gu;
      break;
    case "\r":
      r = /\r/gu;
      break;
    case `\r
`:
      r = /\r\n/gu;
      break;
    default:
      throw new Error(`Unexpected "eol" ${JSON.stringify(t7)}.`);
  }
  let n = e.match(r);
  return n ? n.length : 0;
}
function vr(e) {
  return ne(false, e, /\r\n?/gu, `
`);
}
var $ = "string";
var H = "array";
var z = "cursor";
var T = "indent";
var k = "align";
var L = "trim";
var B = "group";
var N = "fill";
var w = "if-break";
var P = "indent-if-break";
var I = "line-suffix";
var R = "line-suffix-boundary";
var y = "line";
var O = "label";
var _ = "break-parent";
var Ke = /* @__PURE__ */ new Set([z, T, k, L, B, N, w, P, I, R, y, O, _]);
var Pu = (e, t7, r) => {
  if (!(e && t7 == null)) return Array.isArray(t7) || typeof t7 == "string" ? t7[r < 0 ? t7.length + r : r] : t7.at(r);
};
var A = Pu;
function Iu(e) {
  if (typeof e == "string") return $;
  if (Array.isArray(e)) return H;
  if (!e) return;
  let { type: t7 } = e;
  if (Ke.has(t7)) return t7;
}
var M = Iu;
var Ru = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function Yu(e) {
  let t7 = e === null ? "null" : typeof e;
  if (t7 !== "string" && t7 !== "object") return `Unexpected doc '${t7}', 
Expected it to be 'string' or 'object'.`;
  if (M(e)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = Ru([...Ke].map((u) => `'${u}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var Ot = class extends Error {
  name = "InvalidDocError";
  constructor(t7) {
    super(Yu(t7)), this.doc = t7;
  }
};
var Q = Ot;
var Br = {};
function ju(e, t7, r, n) {
  let u = [e];
  for (; u.length > 0; ) {
    let i = u.pop();
    if (i === Br) {
      r(u.pop());
      continue;
    }
    r && u.push(i, Br);
    let o = M(i);
    if (!o) throw new Q(i);
    if ((t7 == null ? void 0 : t7(i)) !== false) switch (o) {
      case H:
      case N: {
        let s = o === H ? i : i.parts;
        for (let a = s.length, D = a - 1; D >= 0; --D) u.push(s[D]);
        break;
      }
      case w:
        u.push(i.flatContents, i.breakContents);
        break;
      case B:
        if (n && i.expandedStates) for (let s = i.expandedStates.length, a = s - 1; a >= 0; --a) u.push(i.expandedStates[a]);
        else u.push(i.contents);
        break;
      case k:
      case T:
      case P:
      case O:
      case I:
        u.push(i.contents);
        break;
      case $:
      case z:
      case L:
      case R:
      case y:
      case _:
        break;
      default:
        throw new Q(i);
    }
  }
}
var Fe = ju;
function Oe(e, t7) {
  if (typeof e == "string") return t7(e);
  let r = /* @__PURE__ */ new Map();
  return n(e);
  function n(i) {
    if (r.has(i)) return r.get(i);
    let o = u(i);
    return r.set(i, o), o;
  }
  function u(i) {
    switch (M(i)) {
      case H:
        return t7(i.map(n));
      case N:
        return t7({ ...i, parts: i.parts.map(n) });
      case w:
        return t7({ ...i, breakContents: n(i.breakContents), flatContents: n(i.flatContents) });
      case B: {
        let { expandedStates: o, contents: s } = i;
        return o ? (o = o.map(n), s = o[0]) : s = n(s), t7({ ...i, contents: s, expandedStates: o });
      }
      case k:
      case T:
      case P:
      case O:
      case I:
        return t7({ ...i, contents: n(i.contents) });
      case $:
      case z:
      case L:
      case R:
      case y:
      case _:
        return t7(i);
      default:
        throw new Q(i);
    }
  }
}
function Je(e, t7, r) {
  let n = r, u = false;
  function i(o) {
    if (u) return false;
    let s = t7(o);
    s !== void 0 && (u = true, n = s);
  }
  return Fe(e, i), n;
}
function Hu(e) {
  if (e.type === B && e.break || e.type === y && e.hard || e.type === _) return true;
}
function xr(e) {
  return Je(e, Hu, false);
}
function wr(e) {
  if (e.length > 0) {
    let t7 = A(false, e, -1);
    !t7.expandedStates && !t7.break && (t7.break = "propagated");
  }
  return null;
}
function br(e) {
  let t7 = /* @__PURE__ */ new Set(), r = [];
  function n(i) {
    if (i.type === _ && wr(r), i.type === B) {
      if (r.push(i), t7.has(i)) return false;
      t7.add(i);
    }
  }
  function u(i) {
    i.type === B && r.pop().break && wr(r);
  }
  Fe(e, n, u, true);
}
function Wu(e) {
  return e.type === y && !e.hard ? e.soft ? "" : " " : e.type === w ? e.flatContents : e;
}
function Nr(e) {
  return Oe(e, Wu);
}
function _r(e) {
  for (e = [...e]; e.length >= 2 && A(false, e, -2).type === y && A(false, e, -1).type === _; ) e.length -= 2;
  if (e.length > 0) {
    let t7 = Ne(A(false, e, -1));
    e[e.length - 1] = t7;
  }
  return e;
}
function Ne(e) {
  switch (M(e)) {
    case T:
    case P:
    case B:
    case I:
    case O: {
      let t7 = Ne(e.contents);
      return { ...e, contents: t7 };
    }
    case w:
      return { ...e, breakContents: Ne(e.breakContents), flatContents: Ne(e.flatContents) };
    case N:
      return { ...e, parts: _r(e.parts) };
    case H:
      return _r(e);
    case $:
      return e.replace(/[\n\r]*$/u, "");
    case k:
    case z:
    case L:
    case R:
    case y:
    case _:
      break;
    default:
      throw new Q(e);
  }
  return e;
}
function qe(e) {
  return Ne(Mu(e));
}
function $u(e) {
  switch (M(e)) {
    case N:
      if (e.parts.every((t7) => t7 === "")) return "";
      break;
    case B:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
      if (e.contents.type === B && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
      break;
    case k:
    case T:
    case P:
    case I:
      if (!e.contents) return "";
      break;
    case w:
      if (!e.flatContents && !e.breakContents) return "";
      break;
    case H: {
      let t7 = [];
      for (let r of e) {
        if (!r) continue;
        let [n, ...u] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof A(false, t7, -1) == "string" ? t7[t7.length - 1] += n : t7.push(n), t7.push(...u);
      }
      return t7.length === 0 ? "" : t7.length === 1 ? t7[0] : t7;
    }
    case $:
    case z:
    case L:
    case R:
    case y:
    case O:
    case _:
      break;
    default:
      throw new Q(e);
  }
  return e;
}
function Mu(e) {
  return Oe(e, (t7) => $u(t7));
}
function Or(e, t7 = Xe) {
  return Oe(e, (r) => typeof r == "string" ? Se(t7, r.split(`
`)) : r);
}
function Vu(e) {
  if (e.type === y) return true;
}
function Sr(e) {
  return Je(e, Vu, false);
}
function me(e, t7) {
  return e.type === O ? { ...e, contents: t7(e.contents) } : t7(e);
}
var St = () => {
};
var G = St;
var Tt = St;
var Tr = St;
function le(e) {
  return G(e), { type: T, contents: e };
}
function De(e, t7) {
  return G(t7), { type: k, contents: t7, n: e };
}
function kt(e, t7 = {}) {
  return G(e), Tt(t7.expandedStates, true), { type: B, id: t7.id, contents: e, break: !!t7.shouldBreak, expandedStates: t7.expandedStates };
}
function kr(e) {
  return De(Number.NEGATIVE_INFINITY, e);
}
function Lr(e) {
  return De({ type: "root" }, e);
}
function Pr(e) {
  return De(-1, e);
}
function Ir(e, t7) {
  return kt(e[0], { ...t7, expandedStates: e });
}
function Rr(e) {
  return Tr(e), { type: N, parts: e };
}
function Yr(e, t7 = "", r = {}) {
  return G(e), t7 !== "" && G(t7), { type: w, breakContents: e, flatContents: t7, groupId: r.groupId };
}
function jr(e, t7) {
  return G(e), { type: P, contents: e, groupId: t7.groupId, negate: t7.negate };
}
function Te(e) {
  return G(e), { type: I, contents: e };
}
var Hr = { type: R };
var he = { type: _ };
var Wr = { type: L };
var ke = { type: y, hard: true };
var Lt = { type: y, hard: true, literal: true };
var Qe = { type: y };
var $r = { type: y, soft: true };
var K = [ke, he];
var Xe = [Lt, he];
var Z = { type: z };
function Se(e, t7) {
  G(e), Tt(t7);
  let r = [];
  for (let n = 0; n < t7.length; n++) n !== 0 && r.push(e), r.push(t7[n]);
  return r;
}
function Ze(e, t7, r) {
  G(e);
  let n = e;
  if (t7 > 0) {
    for (let u = 0; u < Math.floor(t7 / r); ++u) n = le(n);
    n = De(t7 % r, n), n = De(Number.NEGATIVE_INFINITY, n);
  }
  return n;
}
function Mr(e, t7) {
  return G(t7), e ? { type: O, label: e, contents: t7 } : t7;
}
function ee(e) {
  var t7;
  if (!e) return "";
  if (Array.isArray(e)) {
    let r = [];
    for (let n of e) if (Array.isArray(n)) r.push(...ee(n));
    else {
      let u = ee(n);
      u !== "" && r.push(u);
    }
    return r;
  }
  return e.type === w ? { ...e, breakContents: ee(e.breakContents), flatContents: ee(e.flatContents) } : e.type === B ? { ...e, contents: ee(e.contents), expandedStates: (t7 = e.expandedStates) == null ? void 0 : t7.map(ee) } : e.type === N ? { type: "fill", parts: e.parts.map(ee) } : e.contents ? { ...e, contents: ee(e.contents) } : e;
}
function Vr(e) {
  let t7 = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ new Set();
  return n(ee(e));
  function n(i, o, s) {
    var a, D;
    if (typeof i == "string") return JSON.stringify(i);
    if (Array.isArray(i)) {
      let l = i.map(n).filter(Boolean);
      return l.length === 1 ? l[0] : `[${l.join(", ")}]`;
    }
    if (i.type === y) {
      let l = ((a = s == null ? void 0 : s[o + 1]) == null ? void 0 : a.type) === _;
      return i.literal ? l ? "literalline" : "literallineWithoutBreakParent" : i.hard ? l ? "hardline" : "hardlineWithoutBreakParent" : i.soft ? "softline" : "line";
    }
    if (i.type === _) return ((D = s == null ? void 0 : s[o - 1]) == null ? void 0 : D.type) === y && s[o - 1].hard ? void 0 : "breakParent";
    if (i.type === L) return "trim";
    if (i.type === T) return "indent(" + n(i.contents) + ")";
    if (i.type === k) return i.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + n(i.contents) + ")" : i.n < 0 ? "dedent(" + n(i.contents) + ")" : i.n.type === "root" ? "markAsRoot(" + n(i.contents) + ")" : "align(" + JSON.stringify(i.n) + ", " + n(i.contents) + ")";
    if (i.type === w) return "ifBreak(" + n(i.breakContents) + (i.flatContents ? ", " + n(i.flatContents) : "") + (i.groupId ? (i.flatContents ? "" : ', ""') + `, { groupId: ${u(i.groupId)} }` : "") + ")";
    if (i.type === P) {
      let l = [];
      i.negate && l.push("negate: true"), i.groupId && l.push(`groupId: ${u(i.groupId)}`);
      let p = l.length > 0 ? `, { ${l.join(", ")} }` : "";
      return `indentIfBreak(${n(i.contents)}${p})`;
    }
    if (i.type === B) {
      let l = [];
      i.break && i.break !== "propagated" && l.push("shouldBreak: true"), i.id && l.push(`id: ${u(i.id)}`);
      let p = l.length > 0 ? `, { ${l.join(", ")} }` : "";
      return i.expandedStates ? `conditionalGroup([${i.expandedStates.map((f) => n(f)).join(",")}]${p})` : `group(${n(i.contents)}${p})`;
    }
    if (i.type === N) return `fill([${i.parts.map((l) => n(l)).join(", ")}])`;
    if (i.type === I) return "lineSuffix(" + n(i.contents) + ")";
    if (i.type === R) return "lineSuffixBoundary";
    if (i.type === O) return `label(${JSON.stringify(i.label)}, ${n(i.contents)})`;
    throw new Error("Unknown doc type " + i.type);
  }
  function u(i) {
    if (typeof i != "symbol") return JSON.stringify(String(i));
    if (i in t7) return t7[i];
    let o = i.description || "symbol";
    for (let s = 0; ; s++) {
      let a = o + (s > 0 ? ` #${s}` : "");
      if (!r.has(a)) return r.add(a), t7[i] = `Symbol.for(${JSON.stringify(a)})`;
    }
  }
}
var Ur = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function zr(e) {
  return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function Gr(e) {
  return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || e === 9855 || e >= 9866 && e <= 9871 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101631 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129673 || e >= 129679 && e <= 129734 || e >= 129742 && e <= 129756 || e >= 129759 && e <= 129769 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var Kr = (e) => !(zr(e) || Gr(e));
var Uu = /[^\x20-\x7F]/u;
function zu(e) {
  if (!e) return 0;
  if (!Uu.test(e)) return e.length;
  e = e.replace(Ur(), "  ");
  let t7 = 0;
  for (let r of e) {
    let n = r.codePointAt(0);
    n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (t7 += Kr(n) ? 1 : 2);
  }
  return t7;
}
var Le = zu;
var Y = Symbol("MODE_BREAK");
var J = Symbol("MODE_FLAT");
var Ee = Symbol("cursor");
var Pt = Symbol("DOC_FILL_PRINTED_LENGTH");
function Jr() {
  return { value: "", length: 0, queue: [] };
}
function Gu(e, t7) {
  return It(e, { type: "indent" }, t7);
}
function Ku(e, t7, r) {
  return t7 === Number.NEGATIVE_INFINITY ? e.root || Jr() : t7 < 0 ? It(e, { type: "dedent" }, r) : t7 ? t7.type === "root" ? { ...e, root: e } : It(e, { type: typeof t7 == "string" ? "stringAlign" : "numberAlign", n: t7 }, r) : e;
}
function It(e, t7, r) {
  let n = t7.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t7], u = "", i = 0, o = 0, s = 0;
  for (let c of n) switch (c.type) {
    case "indent":
      l(), r.useTabs ? a(1) : D(r.tabWidth);
      break;
    case "stringAlign":
      l(), u += c.n, i += c.n.length;
      break;
    case "numberAlign":
      o += 1, s += c.n;
      break;
    default:
      throw new Error(`Unexpected type '${c.type}'`);
  }
  return f(), { ...e, value: u, length: i, queue: n };
  function a(c) {
    u += "	".repeat(c), i += r.tabWidth * c;
  }
  function D(c) {
    u += " ".repeat(c), i += c;
  }
  function l() {
    r.useTabs ? p() : f();
  }
  function p() {
    o > 0 && a(o), d();
  }
  function f() {
    s > 0 && D(s), d();
  }
  function d() {
    o = 0, s = 0;
  }
}
function Rt(e) {
  let t7 = 0, r = 0, n = e.length;
  e: for (; n--; ) {
    let u = e[n];
    if (u === Ee) {
      r++;
      continue;
    }
    for (let i = u.length - 1; i >= 0; i--) {
      let o = u[i];
      if (o === " " || o === "	") t7++;
      else {
        e[n] = u.slice(0, i + 1);
        break e;
      }
    }
  }
  if (t7 > 0 || r > 0) for (e.length = n + 1; r-- > 0; ) e.push(Ee);
  return t7;
}
function et(e, t7, r, n, u, i) {
  if (r === Number.POSITIVE_INFINITY) return true;
  let o = t7.length, s = [e], a = [];
  for (; r >= 0; ) {
    if (s.length === 0) {
      if (o === 0) return true;
      s.push(t7[--o]);
      continue;
    }
    let { mode: D, doc: l } = s.pop(), p = M(l);
    switch (p) {
      case $:
        a.push(l), r -= Le(l);
        break;
      case H:
      case N: {
        let f = p === H ? l : l.parts, d = l[Pt] ?? 0;
        for (let c = f.length - 1; c >= d; c--) s.push({ mode: D, doc: f[c] });
        break;
      }
      case T:
      case k:
      case P:
      case O:
        s.push({ mode: D, doc: l.contents });
        break;
      case L:
        r += Rt(a);
        break;
      case B: {
        if (i && l.break) return false;
        let f = l.break ? Y : D, d = l.expandedStates && f === Y ? A(false, l.expandedStates, -1) : l.contents;
        s.push({ mode: f, doc: d });
        break;
      }
      case w: {
        let d = (l.groupId ? u[l.groupId] || J : D) === Y ? l.breakContents : l.flatContents;
        d && s.push({ mode: D, doc: d });
        break;
      }
      case y:
        if (D === Y || l.hard) return true;
        l.soft || (a.push(" "), r--);
        break;
      case I:
        n = true;
        break;
      case R:
        if (n) return false;
        break;
    }
  }
  return false;
}
function Ce(e, t7) {
  let r = {}, n = t7.printWidth, u = be(t7.endOfLine), i = 0, o = [{ ind: Jr(), mode: Y, doc: e }], s = [], a = false, D = [], l = 0;
  for (br(e); o.length > 0; ) {
    let { ind: f, mode: d, doc: c } = o.pop();
    switch (M(c)) {
      case $: {
        let F = u !== `
` ? ne(false, c, `
`, u) : c;
        s.push(F), o.length > 0 && (i += Le(F));
        break;
      }
      case H:
        for (let F = c.length - 1; F >= 0; F--) o.push({ ind: f, mode: d, doc: c[F] });
        break;
      case z:
        if (l >= 2) throw new Error("There are too many 'cursor' in doc.");
        s.push(Ee), l++;
        break;
      case T:
        o.push({ ind: Gu(f, t7), mode: d, doc: c.contents });
        break;
      case k:
        o.push({ ind: Ku(f, c.n, t7), mode: d, doc: c.contents });
        break;
      case L:
        i -= Rt(s);
        break;
      case B:
        switch (d) {
          case J:
            if (!a) {
              o.push({ ind: f, mode: c.break ? Y : J, doc: c.contents });
              break;
            }
          case Y: {
            a = false;
            let F = { ind: f, mode: J, doc: c.contents }, m2 = n - i, h3 = D.length > 0;
            if (!c.break && et(F, o, m2, h3, r)) o.push(F);
            else if (c.expandedStates) {
              let C = A(false, c.expandedStates, -1);
              if (c.break) {
                o.push({ ind: f, mode: Y, doc: C });
                break;
              } else for (let v2 = 1; v2 < c.expandedStates.length + 1; v2++) if (v2 >= c.expandedStates.length) {
                o.push({ ind: f, mode: Y, doc: C });
                break;
              } else {
                let E2 = c.expandedStates[v2], g = { ind: f, mode: J, doc: E2 };
                if (et(g, o, m2, h3, r)) {
                  o.push(g);
                  break;
                }
              }
            } else o.push({ ind: f, mode: Y, doc: c.contents });
            break;
          }
        }
        c.id && (r[c.id] = A(false, o, -1).mode);
        break;
      case N: {
        let F = n - i, m2 = c[Pt] ?? 0, { parts: h3 } = c, C = h3.length - m2;
        if (C === 0) break;
        let v2 = h3[m2 + 0], E2 = h3[m2 + 1], g = { ind: f, mode: J, doc: v2 }, j2 = { ind: f, mode: Y, doc: v2 }, b2 = et(g, [], F, D.length > 0, r, true);
        if (C === 1) {
          b2 ? o.push(g) : o.push(j2);
          break;
        }
        let X2 = { ind: f, mode: J, doc: E2 }, ae2 = { ind: f, mode: Y, doc: E2 };
        if (C === 2) {
          b2 ? o.push(X2, g) : o.push(ae2, j2);
          break;
        }
        let $e = h3[m2 + 2], yt2 = { ind: f, mode: d, doc: { ...c, [Pt]: m2 + 2 } };
        et({ ind: f, mode: J, doc: [v2, E2, $e] }, [], F, D.length > 0, r, true) ? o.push(yt2, X2, g) : b2 ? o.push(yt2, ae2, g) : o.push(yt2, ae2, j2);
        break;
      }
      case w:
      case P: {
        let F = c.groupId ? r[c.groupId] : d;
        if (F === Y) {
          let m2 = c.type === w ? c.breakContents : c.negate ? c.contents : le(c.contents);
          m2 && o.push({ ind: f, mode: d, doc: m2 });
        }
        if (F === J) {
          let m2 = c.type === w ? c.flatContents : c.negate ? le(c.contents) : c.contents;
          m2 && o.push({ ind: f, mode: d, doc: m2 });
        }
        break;
      }
      case I:
        D.push({ ind: f, mode: d, doc: c.contents });
        break;
      case R:
        D.length > 0 && o.push({ ind: f, mode: d, doc: ke });
        break;
      case y:
        switch (d) {
          case J:
            if (c.hard) a = true;
            else {
              c.soft || (s.push(" "), i += 1);
              break;
            }
          case Y:
            if (D.length > 0) {
              o.push({ ind: f, mode: d, doc: c }, ...D.reverse()), D.length = 0;
              break;
            }
            c.literal ? f.root ? (s.push(u, f.root.value), i = f.root.length) : (s.push(u), i = 0) : (i -= Rt(s), s.push(u + f.value), i = f.length);
            break;
        }
        break;
      case O:
        o.push({ ind: f, mode: d, doc: c.contents });
        break;
      case _:
        break;
      default:
        throw new Q(c);
    }
    o.length === 0 && D.length > 0 && (o.push(...D.reverse()), D.length = 0);
  }
  let p = s.indexOf(Ee);
  if (p !== -1) {
    let f = s.indexOf(Ee, p + 1);
    if (f === -1) return { formatted: s.filter((m2) => m2 !== Ee).join("") };
    let d = s.slice(0, p).join(""), c = s.slice(p + 1, f).join(""), F = s.slice(f + 1).join("");
    return { formatted: d + c + F, cursorNodeStart: d.length, cursorNodeText: c };
  }
  return { formatted: s.join("") };
}
function Ju(e, t7, r = 0) {
  let n = 0;
  for (let u = r; u < e.length; ++u) e[u] === "	" ? n = n + t7 - n % t7 : n++;
  return n;
}
var ge = Ju;
var te;
var jt;
var tt;
var Yt = class {
  constructor(t7) {
    Fr(this, te);
    this.stack = [t7];
  }
  get key() {
    let { stack: t7, siblings: r } = this;
    return A(false, t7, r === null ? -2 : -4) ?? null;
  }
  get index() {
    return this.siblings === null ? null : A(false, this.stack, -2);
  }
  get node() {
    return A(false, this.stack, -1);
  }
  get parent() {
    return this.getNode(1);
  }
  get grandparent() {
    return this.getNode(2);
  }
  get isInArray() {
    return this.siblings !== null;
  }
  get siblings() {
    let { stack: t7 } = this, r = A(false, t7, -3);
    return Array.isArray(r) ? r : null;
  }
  get next() {
    let { siblings: t7 } = this;
    return t7 === null ? null : t7[this.index + 1];
  }
  get previous() {
    let { siblings: t7 } = this;
    return t7 === null ? null : t7[this.index - 1];
  }
  get isFirst() {
    return this.index === 0;
  }
  get isLast() {
    let { siblings: t7, index: r } = this;
    return t7 !== null && r === t7.length - 1;
  }
  get isRoot() {
    return this.stack.length === 1;
  }
  get root() {
    return this.stack[0];
  }
  get ancestors() {
    return [...pe(this, te, tt).call(this)];
  }
  getName() {
    let { stack: t7 } = this, { length: r } = t7;
    return r > 1 ? A(false, t7, -2) : null;
  }
  getValue() {
    return A(false, this.stack, -1);
  }
  getNode(t7 = 0) {
    let r = pe(this, te, jt).call(this, t7);
    return r === -1 ? null : this.stack[r];
  }
  getParentNode(t7 = 0) {
    return this.getNode(t7 + 1);
  }
  call(t7, ...r) {
    let { stack: n } = this, { length: u } = n, i = A(false, n, -1);
    for (let o of r) i = i[o], n.push(o, i);
    try {
      return t7(this);
    } finally {
      n.length = u;
    }
  }
  callParent(t7, r = 0) {
    let n = pe(this, te, jt).call(this, r + 1), u = this.stack.splice(n + 1);
    try {
      return t7(this);
    } finally {
      this.stack.push(...u);
    }
  }
  each(t7, ...r) {
    let { stack: n } = this, { length: u } = n, i = A(false, n, -1);
    for (let o of r) i = i[o], n.push(o, i);
    try {
      for (let o = 0; o < i.length; ++o) n.push(o, i[o]), t7(this, o, i), n.length -= 2;
    } finally {
      n.length = u;
    }
  }
  map(t7, ...r) {
    let n = [];
    return this.each((u, i, o) => {
      n[i] = t7(u, i, o);
    }, ...r), n;
  }
  match(...t7) {
    let r = this.stack.length - 1, n = null, u = this.stack[r--];
    for (let i of t7) {
      if (u === void 0) return false;
      let o = null;
      if (typeof n == "number" && (o = n, n = this.stack[r--], u = this.stack[r--]), i && !i(u, n, o)) return false;
      n = this.stack[r--], u = this.stack[r--];
    }
    return true;
  }
  findAncestor(t7) {
    for (let r of pe(this, te, tt).call(this)) if (t7(r)) return r;
  }
  hasAncestor(t7) {
    for (let r of pe(this, te, tt).call(this)) if (t7(r)) return true;
    return false;
  }
};
te = /* @__PURE__ */ new WeakSet(), jt = function(t7) {
  let { stack: r } = this;
  for (let n = r.length - 1; n >= 0; n -= 2) if (!Array.isArray(r[n]) && --t7 < 0) return n;
  return -1;
}, tt = function* () {
  let { stack: t7 } = this;
  for (let r = t7.length - 3; r >= 0; r -= 2) {
    let n = t7[r];
    Array.isArray(n) || (yield n);
  }
};
var qr = Yt;
var Xr = new Proxy(() => {
}, { get: () => Xr });
var Pe = Xr;
function qu(e) {
  return e !== null && typeof e == "object";
}
var Qr = qu;
function* ye(e, t7) {
  let { getVisitorKeys: r, filter: n = () => true } = t7, u = (i) => Qr(i) && n(i);
  for (let i of r(e)) {
    let o = e[i];
    if (Array.isArray(o)) for (let s of o) u(s) && (yield s);
    else u(o) && (yield o);
  }
}
function* Zr(e, t7) {
  let r = [e];
  for (let n = 0; n < r.length; n++) {
    let u = r[n];
    for (let i of ye(u, t7)) yield i, r.push(i);
  }
}
function en(e, t7) {
  return ye(e, t7).next().done;
}
function Ae(e) {
  return (t7, r, n) => {
    let u = !!(n != null && n.backwards);
    if (r === false) return false;
    let { length: i } = t7, o = r;
    for (; o >= 0 && o < i; ) {
      let s = t7.charAt(o);
      if (e instanceof RegExp) {
        if (!e.test(s)) return o;
      } else if (!e.includes(s)) return o;
      u ? o-- : o++;
    }
    return o === -1 || o === i ? o : false;
  };
}
var tn = Ae(/\s/u);
var S = Ae(" 	");
var rt = Ae(",; 	");
var nt = Ae(/[^\n\r]/u);
function Xu(e, t7, r) {
  let n = !!(r != null && r.backwards);
  if (t7 === false) return false;
  let u = e.charAt(t7);
  if (n) {
    if (e.charAt(t7 - 1) === "\r" && u === `
`) return t7 - 2;
    if (u === `
` || u === "\r" || u === "\u2028" || u === "\u2029") return t7 - 1;
  } else {
    if (u === "\r" && e.charAt(t7 + 1) === `
`) return t7 + 2;
    if (u === `
` || u === "\r" || u === "\u2028" || u === "\u2029") return t7 + 1;
  }
  return t7;
}
var W = Xu;
function Qu(e, t7, r = {}) {
  let n = S(e, r.backwards ? t7 - 1 : t7, r), u = W(e, n, r);
  return n !== u;
}
var V = Qu;
function Zu(e) {
  return Array.isArray(e) && e.length > 0;
}
var Ht = Zu;
var rn = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]);
var ei = (e) => Object.keys(e).filter((t7) => !rn.has(t7));
function ti(e) {
  return e ? (t7) => e(t7, rn) : ei;
}
var q = ti;
function ri(e) {
  let t7 = e.type || e.kind || "(unknown type)", r = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
  return r.length > 20 && (r = r.slice(0, 19) + "\u2026"), t7 + (r ? " " + r : "");
}
function Wt(e, t7) {
  (e.comments ?? (e.comments = [])).push(t7), t7.printed = false, t7.nodeDescription = ri(e);
}
function ue(e, t7) {
  t7.leading = true, t7.trailing = false, Wt(e, t7);
}
function re(e, t7, r) {
  t7.leading = false, t7.trailing = false, r && (t7.marker = r), Wt(e, t7);
}
function ie(e, t7) {
  t7.leading = false, t7.trailing = true, Wt(e, t7);
}
var $t = /* @__PURE__ */ new WeakMap();
function ut(e, t7) {
  if ($t.has(e)) return $t.get(e);
  let { printer: { getCommentChildNodes: r, canAttachComment: n, getVisitorKeys: u }, locStart: i, locEnd: o } = t7;
  if (!n) return [];
  let s = ((r == null ? void 0 : r(e, t7)) ?? [...ye(e, { getVisitorKeys: q(u) })]).flatMap((a) => n(a) ? [a] : ut(a, t7));
  return s.sort((a, D) => i(a) - i(D) || o(a) - o(D)), $t.set(e, s), s;
}
function un(e, t7, r, n) {
  let { locStart: u, locEnd: i } = r, o = u(t7), s = i(t7), a = ut(e, r), D, l, p = 0, f = a.length;
  for (; p < f; ) {
    let d = p + f >> 1, c = a[d], F = u(c), m2 = i(c);
    if (F <= o && s <= m2) return un(c, t7, r, c);
    if (m2 <= o) {
      D = c, p = d + 1;
      continue;
    }
    if (s <= F) {
      l = c, f = d;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if ((n == null ? void 0 : n.type) === "TemplateLiteral") {
    let { quasis: d } = n, c = Vt(d, t7, r);
    D && Vt(d, D, r) !== c && (D = null), l && Vt(d, l, r) !== c && (l = null);
  }
  return { enclosingNode: n, precedingNode: D, followingNode: l };
}
var Mt = () => false;
function on(e, t7) {
  let { comments: r } = e;
  if (delete e.comments, !Ht(r) || !t7.printer.canAttachComment) return;
  let n = [], { locStart: u, locEnd: i, printer: { experimentalFeatures: { avoidAstMutation: o = false } = {}, handleComments: s = {} }, originalText: a } = t7, { ownLine: D = Mt, endOfLine: l = Mt, remaining: p = Mt } = s, f = r.map((d, c) => ({ ...un(e, d, t7), comment: d, text: a, options: t7, ast: e, isLastComment: r.length - 1 === c }));
  for (let [d, c] of f.entries()) {
    let { comment: F, precedingNode: m2, enclosingNode: h3, followingNode: C, text: v2, options: E2, ast: g, isLastComment: j2 } = c;
    if (E2.parser === "json" || E2.parser === "json5" || E2.parser === "jsonc" || E2.parser === "__js_expression" || E2.parser === "__ts_expression" || E2.parser === "__vue_expression" || E2.parser === "__vue_ts_expression") {
      if (u(F) - u(g) <= 0) {
        ue(g, F);
        continue;
      }
      if (i(F) - i(g) >= 0) {
        ie(g, F);
        continue;
      }
    }
    let b2;
    if (o ? b2 = [c] : (F.enclosingNode = h3, F.precedingNode = m2, F.followingNode = C, b2 = [F, v2, E2, g, j2]), ni(v2, E2, f, d)) F.placement = "ownLine", D(...b2) || (C ? ue(C, F) : m2 ? ie(m2, F) : h3 ? re(h3, F) : re(g, F));
    else if (ui(v2, E2, f, d)) F.placement = "endOfLine", l(...b2) || (m2 ? ie(m2, F) : C ? ue(C, F) : h3 ? re(h3, F) : re(g, F));
    else if (F.placement = "remaining", !p(...b2)) if (m2 && C) {
      let X2 = n.length;
      X2 > 0 && n[X2 - 1].followingNode !== C && nn(n, E2), n.push(c);
    } else m2 ? ie(m2, F) : C ? ue(C, F) : h3 ? re(h3, F) : re(g, F);
  }
  if (nn(n, t7), !o) for (let d of r) delete d.precedingNode, delete d.enclosingNode, delete d.followingNode;
}
var sn = (e) => !/[\S\n\u2028\u2029]/u.test(e);
function ni(e, t7, r, n) {
  let { comment: u, precedingNode: i } = r[n], { locStart: o, locEnd: s } = t7, a = o(u);
  if (i) for (let D = n - 1; D >= 0; D--) {
    let { comment: l, precedingNode: p } = r[D];
    if (p !== i || !sn(e.slice(s(l), a))) break;
    a = o(l);
  }
  return V(e, a, { backwards: true });
}
function ui(e, t7, r, n) {
  let { comment: u, followingNode: i } = r[n], { locStart: o, locEnd: s } = t7, a = s(u);
  if (i) for (let D = n + 1; D < r.length; D++) {
    let { comment: l, followingNode: p } = r[D];
    if (p !== i || !sn(e.slice(a, o(l)))) break;
    a = s(l);
  }
  return V(e, a);
}
function nn(e, t7) {
  var s, a;
  let r = e.length;
  if (r === 0) return;
  let { precedingNode: n, followingNode: u } = e[0], i = t7.locStart(u), o;
  for (o = r; o > 0; --o) {
    let { comment: D, precedingNode: l, followingNode: p } = e[o - 1];
    Pe.strictEqual(l, n), Pe.strictEqual(p, u);
    let f = t7.originalText.slice(t7.locEnd(D), i);
    if (((a = (s = t7.printer).isGap) == null ? void 0 : a.call(s, f, t7)) ?? /^[\s(]*$/u.test(f)) i = t7.locStart(D);
    else break;
  }
  for (let [D, { comment: l }] of e.entries()) D < o ? ie(n, l) : ue(u, l);
  for (let D of [n, u]) D.comments && D.comments.length > 1 && D.comments.sort((l, p) => t7.locStart(l) - t7.locStart(p));
  e.length = 0;
}
function Vt(e, t7, r) {
  let n = r.locStart(t7) - 1;
  for (let u = 1; u < e.length; ++u) if (n < r.locStart(e[u])) return u - 1;
  return 0;
}
function ii(e, t7) {
  let r = t7 - 1;
  r = S(e, r, { backwards: true }), r = W(e, r, { backwards: true }), r = S(e, r, { backwards: true });
  let n = W(e, r, { backwards: true });
  return r !== n;
}
var Ie = ii;
function an(e, t7) {
  let r = e.node;
  return r.printed = true, t7.printer.printComment(e, t7);
}
function oi(e, t7) {
  var l;
  let r = e.node, n = [an(e, t7)], { printer: u, originalText: i, locStart: o, locEnd: s } = t7;
  if ((l = u.isBlockComment) == null ? void 0 : l.call(u, r)) {
    let p = V(i, s(r)) ? V(i, o(r), { backwards: true }) ? K : Qe : " ";
    n.push(p);
  } else n.push(K);
  let D = W(i, S(i, s(r)));
  return D !== false && V(i, D) && n.push(K), n;
}
function si(e, t7, r) {
  var D;
  let n = e.node, u = an(e, t7), { printer: i, originalText: o, locStart: s } = t7, a = (D = i.isBlockComment) == null ? void 0 : D.call(i, n);
  if (r != null && r.hasLineSuffix && !(r != null && r.isBlock) || V(o, s(n), { backwards: true })) {
    let l = Ie(o, s(n));
    return { doc: Te([K, l ? K : "", u]), isBlock: a, hasLineSuffix: true };
  }
  return !a || r != null && r.hasLineSuffix ? { doc: [Te([" ", u]), he], isBlock: a, hasLineSuffix: true } : { doc: [" ", u], isBlock: a, hasLineSuffix: false };
}
function ai(e, t7) {
  let r = e.node;
  if (!r) return {};
  let n = t7[Symbol.for("printedComments")];
  if ((r.comments || []).filter((a) => !n.has(a)).length === 0) return { leading: "", trailing: "" };
  let i = [], o = [], s;
  return e.each(() => {
    let a = e.node;
    if (n != null && n.has(a)) return;
    let { leading: D, trailing: l } = a;
    D ? i.push(oi(e, t7)) : l && (s = si(e, t7, s), o.push(s.doc));
  }, "comments"), { leading: i, trailing: o };
}
function Dn(e, t7, r) {
  let { leading: n, trailing: u } = ai(e, r);
  return !n && !u ? t7 : me(t7, (i) => [n, i, u]);
}
function ln(e) {
  let { [Symbol.for("comments")]: t7, [Symbol.for("printedComments")]: r } = e;
  for (let n of t7) {
    if (!n.printed && !r.has(n)) throw new Error('Comment "' + n.value.trim() + '" was not printed. Please report this error!');
    delete n.printed;
  }
}
function Di(e) {
  return () => {
  };
}
var cn = Di;
var Re = class extends Error {
  name = "ConfigError";
};
var Ye = class extends Error {
  name = "UndefinedParserError";
};
var fn = { cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e) => typeof e == "string" || typeof e == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }] }, plugins: { type: "path", array: true, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e) => typeof e == "string" || typeof e == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: false, description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`, cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
function it({ plugins: e = [], showDeprecated: t7 = false } = {}) {
  let r = e.flatMap((u) => u.languages ?? []), n = [];
  for (let u of ci(Object.assign({}, ...e.map(({ options: i }) => i), fn))) !t7 && u.deprecated || (Array.isArray(u.choices) && (t7 || (u.choices = u.choices.filter((i) => !i.deprecated)), u.name === "parser" && (u.choices = [...u.choices, ...li(u.choices, r, e)])), u.pluginDefaults = Object.fromEntries(e.filter((i) => {
    var o;
    return ((o = i.defaultOptions) == null ? void 0 : o[u.name]) !== void 0;
  }).map((i) => [i.name, i.defaultOptions[u.name]])), n.push(u));
  return { languages: r, options: n };
}
function* li(e, t7, r) {
  let n = new Set(e.map((u) => u.value));
  for (let u of t7) if (u.parsers) {
    for (let i of u.parsers) if (!n.has(i)) {
      n.add(i);
      let o = r.find((a) => a.parsers && Object.prototype.hasOwnProperty.call(a.parsers, i)), s = u.name;
      o != null && o.name && (s += ` (plugin: ${o.name})`), yield { value: i, description: s };
    }
  }
}
function ci(e) {
  let t7 = [];
  for (let [r, n] of Object.entries(e)) {
    let u = { name: r, ...n };
    Array.isArray(u.default) && (u.default = A(false, u.default, -1).value), t7.push(u);
  }
  return t7;
}
var fi = (e) => String(e).split(/[/\\]/u).pop();
function dn(e, t7) {
  if (!t7) return;
  let r = fi(t7).toLowerCase();
  return e.find(({ filenames: n }) => n == null ? void 0 : n.some((u) => u.toLowerCase() === r)) ?? e.find(({ extensions: n }) => n == null ? void 0 : n.some((u) => r.endsWith(u)));
}
function di(e, t7) {
  if (t7) return e.find(({ name: r }) => r.toLowerCase() === t7) ?? e.find(({ aliases: r }) => r == null ? void 0 : r.includes(t7)) ?? e.find(({ extensions: r }) => r == null ? void 0 : r.includes(`.${t7}`));
}
function pi(e, t7) {
  let r = e.plugins.flatMap((u) => u.languages ?? []), n = di(r, t7.language) ?? dn(r, t7.physicalFile) ?? dn(r, t7.file) ?? (t7.physicalFile, void 0);
  return n == null ? void 0 : n.parsers[0];
}
var pn = pi;
var oe = { key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e), value(e) {
  if (e === null || typeof e != "object") return JSON.stringify(e);
  if (Array.isArray(e)) return `[${e.map((r) => oe.value(r)).join(", ")}]`;
  let t7 = Object.keys(e);
  return t7.length === 0 ? "{}" : `{ ${t7.map((r) => `${oe.key(r)}: ${oe.value(e[r])}`).join(", ")} }`;
}, pair: ({ key: e, value: t7 }) => oe.value({ [e]: t7 }) };
var Ut = Me(ot(), 1);
var hn = (e, t7, { descriptor: r }) => {
  let n = [`${Ut.default.yellow(typeof e == "string" ? r.key(e) : r.pair(e))} is deprecated`];
  return t7 && n.push(`we now treat it as ${Ut.default.blue(typeof t7 == "string" ? r.key(t7) : r.pair(t7))}`), n.join("; ") + ".";
};
var ce = Me(ot(), 1);
var st = Symbol.for("vnopts.VALUE_NOT_EXIST");
var ve = Symbol.for("vnopts.VALUE_UNCHANGED");
var En = " ".repeat(2);
var gn = (e, t7, r) => {
  let { text: n, list: u } = r.normalizeExpectedResult(r.schemas[e].expected(r)), i = [];
  return n && i.push(Cn(e, t7, n, r.descriptor)), u && i.push([Cn(e, t7, u.title, r.descriptor)].concat(u.values.map((o) => yn(o, r.loggerPrintWidth))).join(`
`)), An(i, r.loggerPrintWidth);
};
function Cn(e, t7, r, n) {
  return [`Invalid ${ce.default.red(n.key(e))} value.`, `Expected ${ce.default.blue(r)},`, `but received ${t7 === st ? ce.default.gray("nothing") : ce.default.red(n.value(t7))}.`].join(" ");
}
function yn({ text: e, list: t7 }, r) {
  let n = [];
  return e && n.push(`- ${ce.default.blue(e)}`), t7 && n.push([`- ${ce.default.blue(t7.title)}:`].concat(t7.values.map((u) => yn(u, r - En.length).replace(/^|\n/g, `$&${En}`))).join(`
`)), An(n, r);
}
function An(e, t7) {
  if (e.length === 1) return e[0];
  let [r, n] = e, [u, i] = e.map((o) => o.split(`
`, 1)[0].length);
  return u > t7 && u > i ? n : r;
}
var Kt = Me(ot(), 1);
var zt = [];
var vn = [];
function Gt(e, t7) {
  if (e === t7) return 0;
  let r = e;
  e.length > t7.length && (e = t7, t7 = r);
  let n = e.length, u = t7.length;
  for (; n > 0 && e.charCodeAt(~-n) === t7.charCodeAt(~-u); ) n--, u--;
  let i = 0;
  for (; i < n && e.charCodeAt(i) === t7.charCodeAt(i); ) i++;
  if (n -= i, u -= i, n === 0) return u;
  let o, s, a, D, l = 0, p = 0;
  for (; l < n; ) vn[l] = e.charCodeAt(i + l), zt[l] = ++l;
  for (; p < u; ) for (o = t7.charCodeAt(i + p), a = p++, s = p, l = 0; l < n; l++) D = o === vn[l] ? a : a + 1, a = zt[l], s = zt[l] = a > s ? D > s ? s + 1 : D : D > a ? a + 1 : D;
  return s;
}
var at = (e, t7, { descriptor: r, logger: n, schemas: u }) => {
  let i = [`Ignored unknown option ${Kt.default.yellow(r.pair({ key: e, value: t7 }))}.`], o = Object.keys(u).sort().find((s) => Gt(e, s) < 3);
  o && i.push(`Did you mean ${Kt.default.blue(r.key(o))}?`), n.warn(i.join(" "));
};
var Fi = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
function mi(e, t7) {
  let r = new e(t7), n = Object.create(r);
  for (let u of Fi) u in t7 && (n[u] = hi(t7[u], r, x.prototype[u].length));
  return n;
}
var x = class {
  static create(t7) {
    return mi(this, t7);
  }
  constructor(t7) {
    this.name = t7.name;
  }
  default(t7) {
  }
  expected(t7) {
    return "nothing";
  }
  validate(t7, r) {
    return false;
  }
  deprecated(t7, r) {
    return false;
  }
  forward(t7, r) {
  }
  redirect(t7, r) {
  }
  overlap(t7, r, n) {
    return t7;
  }
  preprocess(t7, r) {
    return t7;
  }
  postprocess(t7, r) {
    return ve;
  }
};
function hi(e, t7, r) {
  return typeof e == "function" ? (...n) => e(...n.slice(0, r - 1), t7, ...n.slice(r - 1)) : () => e;
}
var Dt = class extends x {
  constructor(t7) {
    super(t7), this._sourceName = t7.sourceName;
  }
  expected(t7) {
    return t7.schemas[this._sourceName].expected(t7);
  }
  validate(t7, r) {
    return r.schemas[this._sourceName].validate(t7, r);
  }
  redirect(t7, r) {
    return this._sourceName;
  }
};
var lt = class extends x {
  expected() {
    return "anything";
  }
  validate() {
    return true;
  }
};
var ct = class extends x {
  constructor({ valueSchema: t7, name: r = t7.name, ...n }) {
    super({ ...n, name: r }), this._valueSchema = t7;
  }
  expected(t7) {
    let { text: r, list: n } = t7.normalizeExpectedResult(this._valueSchema.expected(t7));
    return { text: r && `an array of ${r}`, list: n && { title: "an array of the following values", values: [{ list: n }] } };
  }
  validate(t7, r) {
    if (!Array.isArray(t7)) return false;
    let n = [];
    for (let u of t7) {
      let i = r.normalizeValidateResult(this._valueSchema.validate(u, r), u);
      i !== true && n.push(i.value);
    }
    return n.length === 0 ? true : { value: n };
  }
  deprecated(t7, r) {
    let n = [];
    for (let u of t7) {
      let i = r.normalizeDeprecatedResult(this._valueSchema.deprecated(u, r), u);
      i !== false && n.push(...i.map(({ value: o }) => ({ value: [o] })));
    }
    return n;
  }
  forward(t7, r) {
    let n = [];
    for (let u of t7) {
      let i = r.normalizeForwardResult(this._valueSchema.forward(u, r), u);
      n.push(...i.map(Bn));
    }
    return n;
  }
  redirect(t7, r) {
    let n = [], u = [];
    for (let i of t7) {
      let o = r.normalizeRedirectResult(this._valueSchema.redirect(i, r), i);
      "remain" in o && n.push(o.remain), u.push(...o.redirect.map(Bn));
    }
    return n.length === 0 ? { redirect: u } : { redirect: u, remain: n };
  }
  overlap(t7, r) {
    return t7.concat(r);
  }
};
function Bn({ from: e, to: t7 }) {
  return { from: [e], to: t7 };
}
var ft = class extends x {
  expected() {
    return "true or false";
  }
  validate(t7) {
    return typeof t7 == "boolean";
  }
};
function _n(e, t7) {
  let r = /* @__PURE__ */ Object.create(null);
  for (let n of e) {
    let u = n[t7];
    if (r[u]) throw new Error(`Duplicate ${t7} ${JSON.stringify(u)}`);
    r[u] = n;
  }
  return r;
}
function xn(e, t7) {
  let r = /* @__PURE__ */ new Map();
  for (let n of e) {
    let u = n[t7];
    if (r.has(u)) throw new Error(`Duplicate ${t7} ${JSON.stringify(u)}`);
    r.set(u, n);
  }
  return r;
}
function bn() {
  let e = /* @__PURE__ */ Object.create(null);
  return (t7) => {
    let r = JSON.stringify(t7);
    return e[r] ? true : (e[r] = true, false);
  };
}
function Nn(e, t7) {
  let r = [], n = [];
  for (let u of e) t7(u) ? r.push(u) : n.push(u);
  return [r, n];
}
function On(e) {
  return e === Math.floor(e);
}
function Sn(e, t7) {
  if (e === t7) return 0;
  let r = typeof e, n = typeof t7, u = ["undefined", "object", "boolean", "number", "string"];
  return r !== n ? u.indexOf(r) - u.indexOf(n) : r !== "string" ? Number(e) - Number(t7) : e.localeCompare(t7);
}
function Tn(e) {
  return (...t7) => {
    let r = e(...t7);
    return typeof r == "string" ? new Error(r) : r;
  };
}
function Jt(e) {
  return e === void 0 ? {} : e;
}
function qt(e) {
  if (typeof e == "string") return { text: e };
  let { text: t7, list: r } = e;
  return Ei((t7 || r) !== void 0, "Unexpected `expected` result, there should be at least one field."), r ? { text: t7, list: { title: r.title, values: r.values.map(qt) } } : { text: t7 };
}
function Xt(e, t7) {
  return e === true ? true : e === false ? { value: t7 } : e;
}
function Qt(e, t7, r = false) {
  return e === false ? false : e === true ? r ? true : [{ value: t7 }] : "value" in e ? [e] : e.length === 0 ? false : e;
}
function wn(e, t7) {
  return typeof e == "string" || "key" in e ? { from: t7, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t7, to: e.to };
}
function dt(e, t7) {
  return e === void 0 ? [] : Array.isArray(e) ? e.map((r) => wn(r, t7)) : [wn(e, t7)];
}
function Zt(e, t7) {
  let r = dt(typeof e == "object" && "redirect" in e ? e.redirect : e, t7);
  return r.length === 0 ? { remain: t7, redirect: r } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: r } : { redirect: r };
}
function Ei(e, t7) {
  if (!e) throw new Error(t7);
}
var pt = class extends x {
  constructor(t7) {
    super(t7), this._choices = xn(t7.choices.map((r) => r && typeof r == "object" ? r : { value: r }), "value");
  }
  expected({ descriptor: t7 }) {
    let r = Array.from(this._choices.keys()).map((o) => this._choices.get(o)).filter(({ hidden: o }) => !o).map((o) => o.value).sort(Sn).map(t7.value), n = r.slice(0, -2), u = r.slice(-2);
    return { text: n.concat(u.join(" or ")).join(", "), list: { title: "one of the following values", values: r } };
  }
  validate(t7) {
    return this._choices.has(t7);
  }
  deprecated(t7) {
    let r = this._choices.get(t7);
    return r && r.deprecated ? { value: t7 } : false;
  }
  forward(t7) {
    let r = this._choices.get(t7);
    return r ? r.forward : void 0;
  }
  redirect(t7) {
    let r = this._choices.get(t7);
    return r ? r.redirect : void 0;
  }
};
var Ft = class extends x {
  expected() {
    return "a number";
  }
  validate(t7, r) {
    return typeof t7 == "number";
  }
};
var mt = class extends Ft {
  expected() {
    return "an integer";
  }
  validate(t7, r) {
    return r.normalizeValidateResult(super.validate(t7, r), t7) === true && On(t7);
  }
};
var je = class extends x {
  expected() {
    return "a string";
  }
  validate(t7) {
    return typeof t7 == "string";
  }
};
var kn = oe;
var Ln = at;
var Pn = gn;
var In = hn;
var ht = class {
  constructor(t7, r) {
    let { logger: n = console, loggerPrintWidth: u = 80, descriptor: i = kn, unknown: o = Ln, invalid: s = Pn, deprecated: a = In, missing: D = () => false, required: l = () => false, preprocess: p = (d) => d, postprocess: f = () => ve } = r || {};
    this._utils = { descriptor: i, logger: n || { warn: () => {
    } }, loggerPrintWidth: u, schemas: _n(t7, "name"), normalizeDefaultResult: Jt, normalizeExpectedResult: qt, normalizeDeprecatedResult: Qt, normalizeForwardResult: dt, normalizeRedirectResult: Zt, normalizeValidateResult: Xt }, this._unknownHandler = o, this._invalidHandler = Tn(s), this._deprecatedHandler = a, this._identifyMissing = (d, c) => !(d in c) || D(d, c), this._identifyRequired = l, this._preprocess = p, this._postprocess = f, this.cleanHistory();
  }
  cleanHistory() {
    this._hasDeprecationWarned = bn();
  }
  normalize(t7) {
    let r = {}, u = [this._preprocess(t7, this._utils)], i = () => {
      for (; u.length !== 0; ) {
        let o = u.shift(), s = this._applyNormalization(o, r);
        u.push(...s);
      }
    };
    i();
    for (let o of Object.keys(this._utils.schemas)) {
      let s = this._utils.schemas[o];
      if (!(o in r)) {
        let a = Jt(s.default(this._utils));
        "value" in a && u.push({ [o]: a.value });
      }
    }
    i();
    for (let o of Object.keys(this._utils.schemas)) {
      if (!(o in r)) continue;
      let s = this._utils.schemas[o], a = r[o], D = s.postprocess(a, this._utils);
      D !== ve && (this._applyValidation(D, o, s), r[o] = D);
    }
    return this._applyPostprocess(r), this._applyRequiredCheck(r), r;
  }
  _applyNormalization(t7, r) {
    let n = [], { knownKeys: u, unknownKeys: i } = this._partitionOptionKeys(t7);
    for (let o of u) {
      let s = this._utils.schemas[o], a = s.preprocess(t7[o], this._utils);
      this._applyValidation(a, o, s);
      let D = ({ from: d, to: c }) => {
        n.push(typeof c == "string" ? { [c]: d } : { [c.key]: c.value });
      }, l = ({ value: d, redirectTo: c }) => {
        let F = Qt(s.deprecated(d, this._utils), a, true);
        if (F !== false) if (F === true) this._hasDeprecationWarned(o) || this._utils.logger.warn(this._deprecatedHandler(o, c, this._utils));
        else for (let { value: m2 } of F) {
          let h3 = { key: o, value: m2 };
          if (!this._hasDeprecationWarned(h3)) {
            let C = typeof c == "string" ? { key: c, value: m2 } : c;
            this._utils.logger.warn(this._deprecatedHandler(h3, C, this._utils));
          }
        }
      };
      dt(s.forward(a, this._utils), a).forEach(D);
      let f = Zt(s.redirect(a, this._utils), a);
      if (f.redirect.forEach(D), "remain" in f) {
        let d = f.remain;
        r[o] = o in r ? s.overlap(r[o], d, this._utils) : d, l({ value: d });
      }
      for (let { from: d, to: c } of f.redirect) l({ value: d, redirectTo: c });
    }
    for (let o of i) {
      let s = t7[o];
      this._applyUnknownHandler(o, s, r, (a, D) => {
        n.push({ [a]: D });
      });
    }
    return n;
  }
  _applyRequiredCheck(t7) {
    for (let r of Object.keys(this._utils.schemas)) if (this._identifyMissing(r, t7) && this._identifyRequired(r)) throw this._invalidHandler(r, st, this._utils);
  }
  _partitionOptionKeys(t7) {
    let [r, n] = Nn(Object.keys(t7).filter((u) => !this._identifyMissing(u, t7)), (u) => u in this._utils.schemas);
    return { knownKeys: r, unknownKeys: n };
  }
  _applyValidation(t7, r, n) {
    let u = Xt(n.validate(t7, this._utils), t7);
    if (u !== true) throw this._invalidHandler(r, u.value, this._utils);
  }
  _applyUnknownHandler(t7, r, n, u) {
    let i = this._unknownHandler(t7, r, this._utils);
    if (i) for (let o of Object.keys(i)) {
      if (this._identifyMissing(o, i)) continue;
      let s = i[o];
      o in this._utils.schemas ? u(o, s) : n[o] = s;
    }
  }
  _applyPostprocess(t7) {
    let r = this._postprocess(t7, this._utils);
    if (r !== ve) {
      if (r.delete) for (let n of r.delete) delete t7[n];
      if (r.override) {
        let { knownKeys: n, unknownKeys: u } = this._partitionOptionKeys(r.override);
        for (let i of n) {
          let o = r.override[i];
          this._applyValidation(o, i, this._utils.schemas[i]), t7[i] = o;
        }
        for (let i of u) {
          let o = r.override[i];
          this._applyUnknownHandler(i, o, t7, (s, a) => {
            let D = this._utils.schemas[s];
            this._applyValidation(a, s, D), t7[s] = a;
          });
        }
      }
    }
  }
};
var er;
function gi(e, t7, { logger: r = false, isCLI: n = false, passThrough: u = false, FlagSchema: i, descriptor: o } = {}) {
  if (n) {
    if (!i) throw new Error("'FlagSchema' option is required.");
    if (!o) throw new Error("'descriptor' option is required.");
  } else o = oe;
  let s = u ? Array.isArray(u) ? (f, d) => u.includes(f) ? { [f]: d } : void 0 : (f, d) => ({ [f]: d }) : (f, d, c) => {
    let { _: F, ...m2 } = c.schemas;
    return at(f, d, { ...c, schemas: m2 });
  }, a = yi(t7, { isCLI: n, FlagSchema: i }), D = new ht(a, { logger: r, unknown: s, descriptor: o }), l = r !== false;
  l && er && (D._hasDeprecationWarned = er);
  let p = D.normalize(e);
  return l && (er = D._hasDeprecationWarned), p;
}
function yi(e, { isCLI: t7, FlagSchema: r }) {
  let n = [];
  t7 && n.push(lt.create({ name: "_" }));
  for (let u of e) n.push(Ai(u, { isCLI: t7, optionInfos: e, FlagSchema: r })), u.alias && t7 && n.push(Dt.create({ name: u.alias, sourceName: u.name }));
  return n;
}
function Ai(e, { isCLI: t7, optionInfos: r, FlagSchema: n }) {
  let { name: u } = e, i = { name: u }, o, s = {};
  switch (e.type) {
    case "int":
      o = mt, t7 && (i.preprocess = Number);
      break;
    case "string":
      o = je;
      break;
    case "choice":
      o = pt, i.choices = e.choices.map((a) => a != null && a.redirect ? { ...a, redirect: { to: { key: e.name, value: a.redirect } } } : a);
      break;
    case "boolean":
      o = ft;
      break;
    case "flag":
      o = n, i.flags = r.flatMap((a) => [a.alias, a.description && a.name, a.oppositeDescription && `no-${a.name}`].filter(Boolean));
      break;
    case "path":
      o = je;
      break;
    default:
      throw new Error(`Unexpected type ${e.type}`);
  }
  if (e.exception ? i.validate = (a, D, l) => e.exception(a) || D.validate(a, l) : i.validate = (a, D, l) => a === void 0 || D.validate(a, l), e.redirect && (s.redirect = (a) => a ? { to: typeof e.redirect == "string" ? e.redirect : { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (s.deprecated = true), t7 && !e.array) {
    let a = i.preprocess || ((D) => D);
    i.preprocess = (D, l, p) => l.preprocess(a(Array.isArray(D) ? A(false, D, -1) : D), p);
  }
  return e.array ? ct.create({ ...t7 ? { preprocess: (a) => Array.isArray(a) ? a : [a] } : {}, ...s, valueSchema: o.create(i) }) : o.create({ ...i, ...s });
}
var Rn = gi;
var vi = (e, t7, r) => {
  if (!(e && t7 == null)) {
    if (t7.findLast) return t7.findLast(r);
    for (let n = t7.length - 1; n >= 0; n--) {
      let u = t7[n];
      if (r(u, n, t7)) return u;
    }
  }
};
var tr = vi;
function rr(e, t7) {
  if (!t7) throw new Error("parserName is required.");
  let r = tr(false, e, (u) => u.parsers && Object.prototype.hasOwnProperty.call(u.parsers, t7));
  if (r) return r;
  let n = `Couldn't resolve parser "${t7}".`;
  throw n += " Plugins must be explicitly added to the standalone bundle.", new Re(n);
}
function Yn(e, t7) {
  if (!t7) throw new Error("astFormat is required.");
  let r = tr(false, e, (u) => u.printers && Object.prototype.hasOwnProperty.call(u.printers, t7));
  if (r) return r;
  let n = `Couldn't find plugin for AST format "${t7}".`;
  throw n += " Plugins must be explicitly added to the standalone bundle.", new Re(n);
}
function Et({ plugins: e, parser: t7 }) {
  let r = rr(e, t7);
  return nr(r, t7);
}
function nr(e, t7) {
  let r = e.parsers[t7];
  return typeof r == "function" ? r() : r;
}
function jn(e, t7) {
  let r = e.printers[t7];
  return typeof r == "function" ? r() : r;
}
var Hn = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
async function Bi(e, t7 = {}) {
  var p;
  let r = { ...e };
  if (!r.parser) if (r.filepath) {
    if (r.parser = pn(r, { physicalFile: r.filepath }), !r.parser) throw new Ye(`No parser could be inferred for file "${r.filepath}".`);
  } else throw new Ye("No parser and no file path given, couldn't infer a parser.");
  let n = it({ plugins: e.plugins, showDeprecated: true }).options, u = { ...Hn, ...Object.fromEntries(n.filter((f) => f.default !== void 0).map((f) => [f.name, f.default])) }, i = rr(r.plugins, r.parser), o = await nr(i, r.parser);
  r.astFormat = o.astFormat, r.locEnd = o.locEnd, r.locStart = o.locStart;
  let s = (p = i.printers) != null && p[o.astFormat] ? i : Yn(r.plugins, o.astFormat), a = await jn(s, o.astFormat);
  r.printer = a;
  let D = s.defaultOptions ? Object.fromEntries(Object.entries(s.defaultOptions).filter(([, f]) => f !== void 0)) : {}, l = { ...u, ...D };
  for (let [f, d] of Object.entries(l)) (r[f] === null || r[f] === void 0) && (r[f] = d);
  return r.parser === "json" && (r.trailingComma = "none"), Rn(r, n, { passThrough: Object.keys(Hn), ...t7 });
}
var se = Bi;
var Mn = Me($n(), 1);
async function bi(e, t7) {
  let r = await Et(t7), n = r.preprocess ? r.preprocess(e, t7) : e;
  t7.originalText = n;
  let u;
  try {
    u = await r.parse(n, t7, t7);
  } catch (i) {
    Ni(i, e);
  }
  return { text: n, ast: u };
}
function Ni(e, t7) {
  let { loc: r } = e;
  if (r) {
    let n = (0, Mn.codeFrameColumns)(t7, r, { highlightCode: true });
    throw e.message += `
` + n, e.codeFrame = n, e;
  }
  throw e;
}
var fe = bi;
async function Vn(e, t7, r, n, u) {
  let { embeddedLanguageFormatting: i, printer: { embed: o, hasPrettierIgnore: s = () => false, getVisitorKeys: a } } = r;
  if (!o || i !== "auto") return;
  if (o.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/plugins#optional-embed");
  let D = q(o.getVisitorKeys ?? a), l = [];
  d();
  let p = e.stack;
  for (let { print: c, node: F, pathStack: m2 } of l) try {
    e.stack = m2;
    let h3 = await c(f, t7, e, r);
    h3 && u.set(F, h3);
  } catch (h3) {
    if (globalThis.PRETTIER_DEBUG) throw h3;
  }
  e.stack = p;
  function f(c, F) {
    return Oi(c, F, r, n);
  }
  function d() {
    let { node: c } = e;
    if (c === null || typeof c != "object" || s(e)) return;
    for (let m2 of D(c)) Array.isArray(c[m2]) ? e.each(d, m2) : e.call(d, m2);
    let F = o(e, r);
    if (F) {
      if (typeof F == "function") {
        l.push({ print: F, node: c, pathStack: [...e.stack] });
        return;
      }
      u.set(c, F);
    }
  }
}
async function Oi(e, t7, r, n) {
  let u = await se({ ...r, ...t7, parentParser: r.parser, originalText: e }, { passThrough: true }), { ast: i } = await fe(e, u), o = await n(i, u);
  return qe(o);
}
function Si(e, t7) {
  let { originalText: r, [Symbol.for("comments")]: n, locStart: u, locEnd: i, [Symbol.for("printedComments")]: o } = t7, { node: s } = e, a = u(s), D = i(s);
  for (let l of n) u(l) >= a && i(l) <= D && o.add(l);
  return r.slice(a, D);
}
var Un = Si;
async function He(e, t7) {
  ({ ast: e } = await ir(e, t7));
  let r = /* @__PURE__ */ new Map(), n = new qr(e), u = cn(t7), i = /* @__PURE__ */ new Map();
  await Vn(n, s, t7, He, i);
  let o = await zn(n, t7, s, void 0, i);
  if (ln(t7), t7.nodeAfterCursor && !t7.nodeBeforeCursor) return [Z, o];
  if (t7.nodeBeforeCursor && !t7.nodeAfterCursor) return [o, Z];
  return o;
  function s(D, l) {
    return D === void 0 || D === n ? a(l) : Array.isArray(D) ? n.call(() => a(l), ...D) : n.call(() => a(l), D);
  }
  function a(D) {
    u(n);
    let l = n.node;
    if (l == null) return "";
    let p = l && typeof l == "object" && D === void 0;
    if (p && r.has(l)) return r.get(l);
    let f = zn(n, t7, s, D, i);
    return p && r.set(l, f), f;
  }
}
function zn(e, t7, r, n, u) {
  var a;
  let { node: i } = e, { printer: o } = t7, s;
  switch ((a = o.hasPrettierIgnore) != null && a.call(o, e) ? s = Un(e, t7) : u.has(i) ? s = u.get(i) : s = o.print(e, t7, r, n), i) {
    case t7.cursorNode:
      s = me(s, (D) => [Z, D, Z]);
      break;
    case t7.nodeBeforeCursor:
      s = me(s, (D) => [D, Z]);
      break;
    case t7.nodeAfterCursor:
      s = me(s, (D) => [Z, D]);
      break;
  }
  return o.printComment && (!o.willPrintOwnComments || !o.willPrintOwnComments(e, t7)) && (s = Dn(e, s, t7)), s;
}
async function ir(e, t7) {
  let r = e.comments ?? [];
  t7[Symbol.for("comments")] = r, t7[Symbol.for("tokens")] = e.tokens ?? [], t7[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), on(e, t7);
  let { printer: { preprocess: n } } = t7;
  return e = n ? await n(e, t7) : e, { ast: e, comments: r };
}
function Ti(e, t7) {
  let { cursorOffset: r, locStart: n, locEnd: u } = t7, i = q(t7.printer.getVisitorKeys), o = (d) => n(d) <= r && u(d) >= r, s = e, a = [e];
  for (let d of Zr(e, { getVisitorKeys: i, filter: o })) a.push(d), s = d;
  if (en(s, { getVisitorKeys: i })) return { cursorNode: s };
  let D, l, p = -1, f = Number.POSITIVE_INFINITY;
  for (; a.length > 0 && (D === void 0 || l === void 0); ) {
    s = a.pop();
    let d = D !== void 0, c = l !== void 0;
    for (let F of ye(s, { getVisitorKeys: i })) {
      if (!d) {
        let m2 = u(F);
        m2 <= r && m2 > p && (D = F, p = m2);
      }
      if (!c) {
        let m2 = n(F);
        m2 >= r && m2 < f && (l = F, f = m2);
      }
    }
  }
  return { nodeBeforeCursor: D, nodeAfterCursor: l };
}
var Gn = Ti;
function ki(e, t7) {
  let { printer: { massageAstNode: r, getVisitorKeys: n } } = t7;
  if (!r) return e;
  let u = q(n), i = r.ignoredProperties ?? /* @__PURE__ */ new Set();
  return o(e);
  function o(s, a) {
    if (!(s !== null && typeof s == "object")) return s;
    if (Array.isArray(s)) return s.map((f) => o(f, a)).filter(Boolean);
    let D = {}, l = new Set(u(s));
    for (let f in s) !Object.prototype.hasOwnProperty.call(s, f) || i.has(f) || (l.has(f) ? D[f] = o(s[f], s) : D[f] = s[f]);
    let p = r(s, D, a);
    if (p !== null) return p ?? D;
  }
}
var Kn = ki;
var Li = (e, t7, r) => {
  if (!(e && t7 == null)) {
    if (t7.findLastIndex) return t7.findLastIndex(r);
    for (let n = t7.length - 1; n >= 0; n--) {
      let u = t7[n];
      if (r(u, n, t7)) return n;
    }
    return -1;
  }
};
var Jn = Li;
var Pi = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify";
function Ii(e, t7) {
  let r = [e.node, ...e.parentNodes], n = /* @__PURE__ */ new Set([t7.node, ...t7.parentNodes]);
  return r.find((u) => Qn.has(u.type) && n.has(u));
}
function qn(e) {
  let t7 = Jn(false, e, (r) => r.type !== "Program" && r.type !== "File");
  return t7 === -1 ? e : e.slice(0, t7 + 1);
}
function Ri(e, t7, { locStart: r, locEnd: n }) {
  let u = e.node, i = t7.node;
  if (u === i) return { startNode: u, endNode: i };
  let o = r(e.node);
  for (let a of qn(t7.parentNodes)) if (r(a) >= o) i = a;
  else break;
  let s = n(t7.node);
  for (let a of qn(e.parentNodes)) {
    if (n(a) <= s) u = a;
    else break;
    if (u === i) break;
  }
  return { startNode: u, endNode: i };
}
function or(e, t7, r, n, u = [], i) {
  let { locStart: o, locEnd: s } = r, a = o(e), D = s(e);
  if (!(t7 > D || t7 < a || i === "rangeEnd" && t7 === a || i === "rangeStart" && t7 === D)) {
    for (let l of ut(e, r)) {
      let p = or(l, t7, r, n, [e, ...u], i);
      if (p) return p;
    }
    if (!n || n(e, u[0])) return { node: e, parentNodes: u };
  }
}
function Yi(e, t7) {
  return t7 !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
}
var Qn = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]);
var ji = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
function Xn(e, t7, r) {
  if (!t7) return false;
  switch (e.parser) {
    case "flow":
    case "babel":
    case "babel-flow":
    case "babel-ts":
    case "typescript":
    case "acorn":
    case "espree":
    case "meriyah":
    case "__babel_estree":
      return Yi(t7.type, r == null ? void 0 : r.type);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return Qn.has(t7.type);
    case "graphql":
      return ji.has(t7.kind);
    case "vue":
      return t7.tag !== "root";
  }
  return false;
}
function Zn(e, t7, r) {
  let { rangeStart: n, rangeEnd: u, locStart: i, locEnd: o } = t7;
  Pe.ok(u > n);
  let s = e.slice(n, u).search(/\S/u), a = s === -1;
  if (!a) for (n += s; u > n && !/\S/u.test(e[u - 1]); --u) ;
  let D = or(r, n, t7, (d, c) => Xn(t7, d, c), [], "rangeStart"), l = a ? D : or(r, u, t7, (d) => Xn(t7, d), [], "rangeEnd");
  if (!D || !l) return { rangeStart: 0, rangeEnd: 0 };
  let p, f;
  if (Pi(t7)) {
    let d = Ii(D, l);
    p = d, f = d;
  } else ({ startNode: p, endNode: f } = Ri(D, l, t7));
  return { rangeStart: Math.min(i(p), i(f)), rangeEnd: Math.max(o(p), o(f)) };
}
var nu = "\uFEFF";
var eu = Symbol("cursor");
async function uu(e, t7, r = 0) {
  if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: n, text: u } = await fe(e, t7);
  t7.cursorOffset >= 0 && (t7 = { ...t7, ...Gn(n, t7) });
  let i = await He(n, t7, r);
  r > 0 && (i = Ze([K, i], r, t7.tabWidth));
  let o = Ce(i, t7);
  if (r > 0) {
    let a = o.formatted.trim();
    o.cursorNodeStart !== void 0 && (o.cursorNodeStart -= o.formatted.indexOf(a), o.cursorNodeStart < 0 && (o.cursorNodeStart = 0, o.cursorNodeText = o.cursorNodeText.trimStart()), o.cursorNodeStart + o.cursorNodeText.length > a.length && (o.cursorNodeText = o.cursorNodeText.trimEnd())), o.formatted = a + be(t7.endOfLine);
  }
  let s = t7[Symbol.for("comments")];
  if (t7.cursorOffset >= 0) {
    let a, D, l, p;
    if ((t7.cursorNode || t7.nodeBeforeCursor || t7.nodeAfterCursor) && o.cursorNodeText) if (l = o.cursorNodeStart, p = o.cursorNodeText, t7.cursorNode) a = t7.locStart(t7.cursorNode), D = u.slice(a, t7.locEnd(t7.cursorNode));
    else {
      if (!t7.nodeBeforeCursor && !t7.nodeAfterCursor) throw new Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");
      a = t7.nodeBeforeCursor ? t7.locEnd(t7.nodeBeforeCursor) : 0;
      let h3 = t7.nodeAfterCursor ? t7.locStart(t7.nodeAfterCursor) : u.length;
      D = u.slice(a, h3);
    }
    else a = 0, D = u, l = 0, p = o.formatted;
    let f = t7.cursorOffset - a;
    if (D === p) return { formatted: o.formatted, cursorOffset: l + f, comments: s };
    let d = D.split("");
    d.splice(f, 0, eu);
    let c = p.split(""), F = yr(d, c), m2 = l;
    for (let h3 of F) if (h3.removed) {
      if (h3.value.includes(eu)) break;
    } else m2 += h3.count;
    return { formatted: o.formatted, cursorOffset: m2, comments: s };
  }
  return { formatted: o.formatted, cursorOffset: -1, comments: s };
}
async function Hi(e, t7) {
  let { ast: r, text: n } = await fe(e, t7), { rangeStart: u, rangeEnd: i } = Zn(n, t7, r), o = n.slice(u, i), s = Math.min(u, n.lastIndexOf(`
`, u) + 1), a = n.slice(s, u).match(/^\s*/u)[0], D = ge(a, t7.tabWidth), l = await uu(o, { ...t7, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t7.cursorOffset > u && t7.cursorOffset <= i ? t7.cursorOffset - u : -1, endOfLine: "lf" }, D), p = l.formatted.trimEnd(), { cursorOffset: f } = t7;
  f > i ? f += p.length - o.length : l.cursorOffset >= 0 && (f = l.cursorOffset + u);
  let d = n.slice(0, u) + p + n.slice(i);
  if (t7.endOfLine !== "lf") {
    let c = be(t7.endOfLine);
    f >= 0 && c === `\r
` && (f += Nt(d.slice(0, f), `
`)), d = ne(false, d, `
`, c);
  }
  return { formatted: d, cursorOffset: f, comments: l.comments };
}
function sr(e, t7, r) {
  return typeof t7 != "number" || Number.isNaN(t7) || t7 < 0 || t7 > e.length ? r : t7;
}
function tu(e, t7) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: u } = t7;
  return r = sr(e, r, -1), n = sr(e, n, 0), u = sr(e, u, e.length), { ...t7, cursorOffset: r, rangeStart: n, rangeEnd: u };
}
function iu(e, t7) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: u, endOfLine: i } = tu(e, t7), o = e.charAt(0) === nu;
  if (o && (e = e.slice(1), r--, n--, u--), i === "auto" && (i = Ar(e)), e.includes("\r")) {
    let s = (a) => Nt(e.slice(0, Math.max(a, 0)), `\r
`);
    r -= s(r), n -= s(n), u -= s(u), e = vr(e);
  }
  return { hasBOM: o, text: e, options: tu(e, { ...t7, cursorOffset: r, rangeStart: n, rangeEnd: u, endOfLine: i }) };
}
async function ru(e, t7) {
  let r = await Et(t7);
  return !r.hasPragma || r.hasPragma(e);
}
async function ar(e, t7) {
  let { hasBOM: r, text: n, options: u } = iu(e, await se(t7));
  if (u.rangeStart >= u.rangeEnd && n !== "" || u.requirePragma && !await ru(n, u)) return { formatted: e, cursorOffset: t7.cursorOffset, comments: [] };
  let i;
  return u.rangeStart > 0 || u.rangeEnd < n.length ? i = await Hi(n, u) : (!u.requirePragma && u.insertPragma && u.printer.insertPragma && !await ru(n, u) && (n = u.printer.insertPragma(n)), i = await uu(n, u)), r && (i.formatted = nu + i.formatted, i.cursorOffset >= 0 && i.cursorOffset++), i;
}
async function ou(e, t7, r) {
  let { text: n, options: u } = iu(e, await se(t7)), i = await fe(n, u);
  return r && (r.preprocessForPrint && (i.ast = await ir(i.ast, u)), r.massage && (i.ast = Kn(i.ast, u))), i;
}
async function su(e, t7) {
  t7 = await se(t7);
  let r = await He(e, t7);
  return Ce(r, t7);
}
async function au(e, t7) {
  let r = Vr(e), { formatted: n } = await ar(r, { ...t7, parser: "__js_expression" });
  return n;
}
async function Du(e, t7) {
  t7 = await se(t7);
  let { ast: r } = await fe(e, t7);
  return He(r, t7);
}
async function lu(e, t7) {
  return Ce(e, await se(t7));
}
var Dr = {};
vt(Dr, { builders: () => $i, printer: () => Mi, utils: () => Vi });
var $i = { join: Se, line: Qe, softline: $r, hardline: K, literalline: Xe, group: kt, conditionalGroup: Ir, fill: Rr, lineSuffix: Te, lineSuffixBoundary: Hr, cursor: Z, breakParent: he, ifBreak: Yr, trim: Wr, indent: le, indentIfBreak: jr, align: De, addAlignmentToDoc: Ze, markAsRoot: Lr, dedentToRoot: kr, dedent: Pr, hardlineWithoutBreakParent: ke, literallineWithoutBreakParent: Lt, label: Mr, concat: (e) => e };
var Mi = { printDocToString: Ce };
var Vi = { willBreak: xr, traverseDoc: Fe, findInDoc: Je, mapDoc: Oe, removeLines: Nr, stripTrailingHardline: qe, replaceEndOfLine: Or, canBreak: Sr };
var cu = "3.5.3";
var cr = {};
vt(cr, { addDanglingComment: () => re, addLeadingComment: () => ue, addTrailingComment: () => ie, getAlignmentSize: () => ge, getIndentSize: () => fu, getMaxContinuousCount: () => du, getNextNonSpaceNonCommentCharacter: () => pu, getNextNonSpaceNonCommentCharacterIndex: () => no, getPreferredQuote: () => mu, getStringWidth: () => Le, hasNewline: () => V, hasNewlineInRange: () => hu, hasSpaces: () => Eu, isNextLineEmpty: () => so, isNextLineEmptyAfterIndex: () => Ct, isPreviousLineEmpty: () => io, makeString: () => Cu, skip: () => Ae, skipEverythingButNewLine: () => nt, skipInlineComment: () => Be, skipNewline: () => W, skipSpaces: () => S, skipToLineEnd: () => rt, skipTrailingComment: () => we, skipWhitespace: () => tn });
function Ui(e, t7) {
  if (t7 === false) return false;
  if (e.charAt(t7) === "/" && e.charAt(t7 + 1) === "*") {
    for (let r = t7 + 2; r < e.length; ++r) if (e.charAt(r) === "*" && e.charAt(r + 1) === "/") return r + 2;
  }
  return t7;
}
var Be = Ui;
function zi(e, t7) {
  return t7 === false ? false : e.charAt(t7) === "/" && e.charAt(t7 + 1) === "/" ? nt(e, t7) : t7;
}
var we = zi;
function Gi(e, t7) {
  let r = null, n = t7;
  for (; n !== r; ) r = n, n = S(e, n), n = Be(e, n), n = we(e, n), n = W(e, n);
  return n;
}
var We = Gi;
function Ki(e, t7) {
  let r = null, n = t7;
  for (; n !== r; ) r = n, n = rt(e, n), n = Be(e, n), n = S(e, n);
  return n = we(e, n), n = W(e, n), n !== false && V(e, n);
}
var Ct = Ki;
function Ji(e, t7) {
  let r = e.lastIndexOf(`
`);
  return r === -1 ? 0 : ge(e.slice(r + 1).match(/^[\t ]*/u)[0], t7);
}
var fu = Ji;
function lr(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function qi(e, t7) {
  let r = e.match(new RegExp(`(${lr(t7)})+`, "gu"));
  return r === null ? 0 : r.reduce((n, u) => Math.max(n, u.length / t7.length), 0);
}
var du = qi;
function Xi(e, t7) {
  let r = We(e, t7);
  return r === false ? "" : e.charAt(r);
}
var pu = Xi;
var gt = "'";
var Fu = '"';
function Qi(e, t7) {
  let r = t7 === true || t7 === gt ? gt : Fu, n = r === gt ? Fu : gt, u = 0, i = 0;
  for (let o of e) o === r ? u++ : o === n && i++;
  return u > i ? n : r;
}
var mu = Qi;
function Zi(e, t7, r) {
  for (let n = t7; n < r; ++n) if (e.charAt(n) === `
`) return true;
  return false;
}
var hu = Zi;
function eo(e, t7, r = {}) {
  return S(e, r.backwards ? t7 - 1 : t7, r) !== t7;
}
var Eu = eo;
function to(e, t7, r) {
  let n = t7 === '"' ? "'" : '"', i = ne(false, e, /\\(.)|(["'])/gsu, (o, s, a) => s === n ? s : a === t7 ? "\\" + a : a || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s) ? s : "\\" + s));
  return t7 + i + t7;
}
var Cu = to;
function ro(e, t7, r) {
  return We(e, r(t7));
}
function no(e, t7) {
  return arguments.length === 2 || typeof t7 == "number" ? We(e, t7) : ro(...arguments);
}
function uo(e, t7, r) {
  return Ie(e, r(t7));
}
function io(e, t7) {
  return arguments.length === 2 || typeof t7 == "number" ? Ie(e, t7) : uo(...arguments);
}
function oo(e, t7, r) {
  return Ct(e, r(t7));
}
function so(e, t7) {
  return arguments.length === 2 || typeof t7 == "number" ? Ct(e, t7) : oo(...arguments);
}
function de(e, t7 = 1) {
  return async (...r) => {
    let n = r[t7] ?? {}, u = n.plugins ?? [];
    return r[t7] = { ...n, plugins: Array.isArray(u) ? u : Object.values(u) }, e(...r);
  };
}
var gu = de(ar);
async function yu(e, t7) {
  let { formatted: r } = await gu(e, { ...t7, cursorOffset: -1 });
  return r;
}
async function ao(e, t7) {
  return await yu(e, t7) === e;
}
var Do = de(it, 0);
var lo = { parse: de(ou), formatAST: de(su), formatDoc: de(au), printToDoc: de(Du), printDocToString: de(lu) };

// node_modules/prettier/plugins/html.mjs
var sn2 = Object.defineProperty;
var an2 = (t7) => {
  throw TypeError(t7);
};
var li2 = (t7, e, r) => e in t7 ? sn2(t7, e, { enumerable: true, configurable: true, writable: true, value: r }) : t7[e] = r;
var on2 = (t7, e) => {
  for (var r in e) sn2(t7, r, { get: e[r], enumerable: true });
};
var lr2 = (t7, e, r) => li2(t7, typeof e != "symbol" ? e + "" : e, r);
var un2 = (t7, e, r) => e.has(t7) || an2("Cannot " + r);
var R2 = (t7, e, r) => (un2(t7, e, "read from private field"), r ? r.call(t7) : e.get(t7));
var Et2 = (t7, e, r) => e.has(t7) ? an2("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t7) : e.set(t7, r);
var ln2 = (t7, e, r, n) => (un2(t7, e, "write to private field"), n ? n.call(t7, r) : e.set(t7, r), r);
var en2 = {};
on2(en2, { languages: () => xs, options: () => Bs, parsers: () => Zr2, printers: () => Uo });
var ci2 = (t7, e, r, n) => {
  if (!(t7 && e == null)) return e.replaceAll ? e.replaceAll(r, n) : r.global ? e.replace(r, n) : e.split(r).join(n);
};
var w2 = ci2;
var ye2 = "string";
var Ge2 = "array";
var Ye2 = "cursor";
var we2 = "indent";
var be2 = "align";
var je2 = "trim";
var Te2 = "group";
var xe2 = "fill";
var ce2 = "if-break";
var ke2 = "indent-if-break";
var Ke2 = "line-suffix";
var Qe2 = "line-suffix-boundary";
var j = "line";
var Xe2 = "label";
var Be2 = "break-parent";
var At2 = /* @__PURE__ */ new Set([Ye2, we2, be2, je2, Te2, xe2, ce2, ke2, Ke2, Qe2, j, Xe2, Be2]);
var pi2 = (t7, e, r) => {
  if (!(t7 && e == null)) return Array.isArray(e) || typeof e == "string" ? e[r < 0 ? e.length + r : r] : e.at(r);
};
var K2 = pi2;
function hi2(t7) {
  if (typeof t7 == "string") return ye2;
  if (Array.isArray(t7)) return Ge2;
  if (!t7) return;
  let { type: e } = t7;
  if (At2.has(e)) return e;
}
var Le2 = hi2;
var fi2 = (t7) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(t7);
function mi2(t7) {
  let e = t7 === null ? "null" : typeof t7;
  if (e !== "string" && e !== "object") return `Unexpected doc '${e}', 
Expected it to be 'string' or 'object'.`;
  if (Le2(t7)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(t7);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = fi2([...At2].map((s) => `'${s}'`));
  return `Unexpected doc.type '${t7.type}'.
Expected it to be ${n}.`;
}
var cr2 = class extends Error {
  name = "InvalidDocError";
  constructor(e) {
    super(mi2(e)), this.doc = e;
  }
};
var pr2 = cr2;
function hr2(t7, e) {
  if (typeof t7 == "string") return e(t7);
  let r = /* @__PURE__ */ new Map();
  return n(t7);
  function n(i) {
    if (r.has(i)) return r.get(i);
    let a = s(i);
    return r.set(i, a), a;
  }
  function s(i) {
    switch (Le2(i)) {
      case Ge2:
        return e(i.map(n));
      case xe2:
        return e({ ...i, parts: i.parts.map(n) });
      case ce2:
        return e({ ...i, breakContents: n(i.breakContents), flatContents: n(i.flatContents) });
      case Te2: {
        let { expandedStates: a, contents: o } = i;
        return a ? (a = a.map(n), o = a[0]) : o = n(o), e({ ...i, contents: o, expandedStates: a });
      }
      case be2:
      case we2:
      case ke2:
      case Xe2:
      case Ke2:
        return e({ ...i, contents: n(i.contents) });
      case ye2:
      case Ye2:
      case je2:
      case Qe2:
      case j:
      case Be2:
        return e(i);
      default:
        throw new pr2(i);
    }
  }
}
function B2(t7, e = cn2) {
  return hr2(t7, (r) => typeof r == "string" ? H2(e, r.split(`
`)) : r);
}
var fr2 = () => {
};
var ne2 = fr2;
var mr2 = fr2;
var pn2 = fr2;
function k2(t7) {
  return ne2(t7), { type: we2, contents: t7 };
}
function hn2(t7, e) {
  return ne2(e), { type: be2, contents: e, n: t7 };
}
function E(t7, e = {}) {
  return ne2(t7), mr2(e.expandedStates, true), { type: Te2, id: e.id, contents: t7, break: !!e.shouldBreak, expandedStates: e.expandedStates };
}
function fn2(t7) {
  return hn2(Number.NEGATIVE_INFINITY, t7);
}
function mn(t7) {
  return hn2({ type: "root" }, t7);
}
function Dt2(t7) {
  return pn2(t7), { type: xe2, parts: t7 };
}
function pe2(t7, e = "", r = {}) {
  return ne2(t7), e !== "" && ne2(e), { type: ce2, breakContents: t7, flatContents: e, groupId: r.groupId };
}
function dn2(t7, e) {
  return ne2(t7), { type: ke2, contents: t7, groupId: e.groupId, negate: e.negate };
}
var se2 = { type: Be2 };
var gi2 = { type: j, hard: true };
var Ci = { type: j, hard: true, literal: true };
var _2 = { type: j };
var v = { type: j, soft: true };
var S2 = [gi2, se2];
var cn2 = [Ci, se2];
function H2(t7, e) {
  ne2(t7), mr2(e);
  let r = [];
  for (let n = 0; n < e.length; n++) n !== 0 && r.push(t7), r.push(e[n]);
  return r;
}
var vt2 = "'";
var gn2 = '"';
function Si2(t7, e) {
  let r = e === true || e === vt2 ? vt2 : gn2, n = r === vt2 ? gn2 : vt2, s = 0, i = 0;
  for (let a of t7) a === r ? s++ : a === n && i++;
  return s > i ? n : r;
}
var Cn2 = Si2;
function dr2(t7) {
  if (typeof t7 != "string") throw new TypeError("Expected a string");
  return t7.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var V2;
var gr2 = class {
  constructor(e) {
    Et2(this, V2);
    ln2(this, V2, new Set(e));
  }
  getLeadingWhitespaceCount(e) {
    let r = R2(this, V2), n = 0;
    for (let s = 0; s < e.length && r.has(e.charAt(s)); s++) n++;
    return n;
  }
  getTrailingWhitespaceCount(e) {
    let r = R2(this, V2), n = 0;
    for (let s = e.length - 1; s >= 0 && r.has(e.charAt(s)); s--) n++;
    return n;
  }
  getLeadingWhitespace(e) {
    let r = this.getLeadingWhitespaceCount(e);
    return e.slice(0, r);
  }
  getTrailingWhitespace(e) {
    let r = this.getTrailingWhitespaceCount(e);
    return e.slice(e.length - r);
  }
  hasLeadingWhitespace(e) {
    return R2(this, V2).has(e.charAt(0));
  }
  hasTrailingWhitespace(e) {
    return R2(this, V2).has(K2(false, e, -1));
  }
  trimStart(e) {
    let r = this.getLeadingWhitespaceCount(e);
    return e.slice(r);
  }
  trimEnd(e) {
    let r = this.getTrailingWhitespaceCount(e);
    return e.slice(0, e.length - r);
  }
  trim(e) {
    return this.trimEnd(this.trimStart(e));
  }
  split(e, r = false) {
    let n = `[${dr2([...R2(this, V2)].join(""))}]+`, s = new RegExp(r ? `(${n})` : n, "u");
    return e.split(s);
  }
  hasWhitespaceCharacter(e) {
    let r = R2(this, V2);
    return Array.prototype.some.call(e, (n) => r.has(n));
  }
  hasNonWhitespaceCharacter(e) {
    let r = R2(this, V2);
    return Array.prototype.some.call(e, (n) => !r.has(n));
  }
  isWhitespaceOnly(e) {
    let r = R2(this, V2);
    return Array.prototype.every.call(e, (n) => r.has(n));
  }
};
V2 = /* @__PURE__ */ new WeakMap();
var Sn2 = gr2;
var _i = ["	", `
`, "\f", "\r", " "];
var Ei2 = new Sn2(_i);
var O2 = Ei2;
var Cr2 = class extends Error {
  name = "UnexpectedNodeError";
  constructor(e, r, n = "type") {
    super(`Unexpected ${r} node ${n}: ${JSON.stringify(e[n])}.`), this.node = e;
  }
};
var _n2 = Cr2;
function Ai2(t7) {
  return (t7 == null ? void 0 : t7.type) === "front-matter";
}
var Fe2 = Ai2;
var Di2 = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan", "keySpan", "tagDefinition", "tokens", "valueTokens", "switchValueSourceSpan", "expSourceSpan", "valueSourceSpan"]);
var vi2 = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function En2(t7, e) {
  var r;
  if (t7.type === "text" || t7.type === "comment" || Fe2(t7) || t7.type === "yaml" || t7.type === "toml") return null;
  if (t7.type === "attribute" && delete e.value, t7.type === "docType" && delete e.value, t7.type === "angularControlFlowBlock" && ((r = t7.parameters) != null && r.children)) for (let n of e.parameters.children) vi2.has(t7.name) ? delete n.expression : n.expression = n.expression.trim();
  t7.type === "angularIcuExpression" && (e.switchValue = t7.switchValue.trim()), t7.type === "angularLetDeclarationInitializer" && delete e.value;
}
En2.ignoredProperties = Di2;
var An2 = En2;
async function yi2(t7, e) {
  if (t7.language === "yaml") {
    let r = t7.value.trim(), n = r ? await e(r, { parser: "yaml" }) : "";
    return mn([t7.startDelimiter, t7.explicitLanguage, S2, n, n ? S2 : "", t7.endDelimiter]);
  }
}
var Dn2 = yi2;
function he2(t7, e = true) {
  return [k2([v, t7]), e ? v : ""];
}
function Q2(t7, e) {
  let r = t7.type === "NGRoot" ? t7.node.type === "NGMicrosyntax" && t7.node.body.length === 1 && t7.node.body[0].type === "NGMicrosyntaxExpression" ? t7.node.body[0].expression : t7.node : t7.type === "JsExpressionRoot" ? t7.node : t7;
  return r && (r.type === "ObjectExpression" || r.type === "ArrayExpression" || (e.parser === "__vue_expression" || e.parser === "__vue_ts_expression") && (r.type === "TemplateLiteral" || r.type === "StringLiteral"));
}
async function T2(t7, e, r, n) {
  r = { __isInHtmlAttribute: true, __embeddedInHtml: true, ...r };
  let s = true;
  n && (r.__onHtmlBindingRoot = (a, o) => {
    s = n(a, o);
  });
  let i = await e(t7, r, e);
  return s ? E(i) : he2(i);
}
function wi(t7, e, r, n) {
  let { node: s } = r, i = n.originalText.slice(s.sourceSpan.start.offset, s.sourceSpan.end.offset);
  return /^\s*$/u.test(i) ? "" : T2(i, t7, { parser: "__ng_directive", __isInHtmlAttribute: false }, Q2);
}
var vn2 = wi;
var bi2 = (t7) => String(t7).split(/[/\\]/u).pop();
function yn2(t7, e) {
  if (!e) return;
  let r = bi2(e).toLowerCase();
  return t7.find(({ filenames: n }) => n == null ? void 0 : n.some((s) => s.toLowerCase() === r)) ?? t7.find(({ extensions: n }) => n == null ? void 0 : n.some((s) => r.endsWith(s)));
}
function Ti2(t7, e) {
  if (e) return t7.find(({ name: r }) => r.toLowerCase() === e) ?? t7.find(({ aliases: r }) => r == null ? void 0 : r.includes(e)) ?? t7.find(({ extensions: r }) => r == null ? void 0 : r.includes(`.${e}`));
}
function xi(t7, e) {
  let r = t7.plugins.flatMap((s) => s.languages ?? []), n = Ti2(r, e.language) ?? yn2(r, e.physicalFile) ?? yn2(r, e.file) ?? (e.physicalFile, void 0);
  return n == null ? void 0 : n.parsers[0];
}
var Ne2 = xi;
var wn2 = "inline";
var bn2 = { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", style: "none", template: "inline", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", dialog: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", search: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", menu: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", input: "inline-block", button: "inline-block", fieldset: "block", details: "block", summary: "block", marquee: "inline-block", source: "block", track: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" };
var Tn2 = "normal";
var xn2 = { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" };
function ki2(t7) {
  return t7.type === "element" && !t7.hasExplicitNamespace && !["html", "svg"].includes(t7.namespace);
}
var fe2 = ki2;
var Bi2 = (t7) => w2(false, t7, /^[\t\f\r ]*\n/gu, "");
var Sr2 = (t7) => Bi2(O2.trimEnd(t7));
var kn2 = (t7) => {
  let e = t7, r = O2.getLeadingWhitespace(e);
  r && (e = e.slice(r.length));
  let n = O2.getTrailingWhitespace(e);
  return n && (e = e.slice(0, -n.length)), { leadingWhitespace: r, trailingWhitespace: n, text: e };
};
function yt(t7, e) {
  return !!(t7.type === "ieConditionalComment" && t7.lastChild && !t7.lastChild.isSelfClosing && !t7.lastChild.endSourceSpan || t7.type === "ieConditionalComment" && !t7.complete || me2(t7) && t7.children.some((r) => r.type !== "text" && r.type !== "interpolation") || Tt2(t7, e) && !W2(t7) && t7.type !== "interpolation");
}
function de2(t7) {
  return t7.type === "attribute" || !t7.parent || !t7.prev ? false : Li2(t7.prev);
}
function Li2(t7) {
  return t7.type === "comment" && t7.value.trim() === "prettier-ignore";
}
function $2(t7) {
  return t7.type === "text" || t7.type === "comment";
}
function W2(t7) {
  return t7.type === "element" && (t7.fullName === "script" || t7.fullName === "style" || t7.fullName === "svg:style" || t7.fullName === "svg:script" || fe2(t7) && (t7.name === "script" || t7.name === "style"));
}
function Bn2(t7) {
  return t7.children && !W2(t7);
}
function Ln2(t7) {
  return W2(t7) || t7.type === "interpolation" || _r2(t7);
}
function _r2(t7) {
  return Vn2(t7).startsWith("pre");
}
function Fn(t7, e) {
  var s, i;
  let r = n();
  if (r && !t7.prev && ((i = (s = t7.parent) == null ? void 0 : s.tagDefinition) != null && i.ignoreFirstLf)) return t7.type === "interpolation";
  return r;
  function n() {
    return Fe2(t7) || t7.type === "angularControlFlowBlock" ? false : (t7.type === "text" || t7.type === "interpolation") && t7.prev && (t7.prev.type === "text" || t7.prev.type === "interpolation") ? true : !t7.parent || t7.parent.cssDisplay === "none" ? false : me2(t7.parent) ? true : !(!t7.prev && (t7.parent.type === "root" || me2(t7) && t7.parent || W2(t7.parent) || et2(t7.parent, e) || !$i2(t7.parent.cssDisplay)) || t7.prev && !qi2(t7.prev.cssDisplay));
  }
}
function Nn2(t7, e) {
  return Fe2(t7) || t7.type === "angularControlFlowBlock" ? false : (t7.type === "text" || t7.type === "interpolation") && t7.next && (t7.next.type === "text" || t7.next.type === "interpolation") ? true : !t7.parent || t7.parent.cssDisplay === "none" ? false : me2(t7.parent) ? true : !(!t7.next && (t7.parent.type === "root" || me2(t7) && t7.parent || W2(t7.parent) || et2(t7.parent, e) || !Oi2(t7.parent.cssDisplay)) || t7.next && !Mi2(t7.next.cssDisplay));
}
function Pn2(t7) {
  return Hi2(t7.cssDisplay) && !W2(t7);
}
function Je2(t7) {
  return Fe2(t7) || t7.next && t7.sourceSpan.end && t7.sourceSpan.end.line + 1 < t7.next.sourceSpan.start.line;
}
function In2(t7) {
  return Er2(t7) || t7.type === "element" && t7.children.length > 0 && (["body", "script", "style"].includes(t7.name) || t7.children.some((e) => Ni2(e))) || t7.firstChild && t7.firstChild === t7.lastChild && t7.firstChild.type !== "text" && $n2(t7.firstChild) && (!t7.lastChild.isTrailingSpaceSensitive || On2(t7.lastChild));
}
function Er2(t7) {
  return t7.type === "element" && t7.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(t7.name) || t7.cssDisplay.startsWith("table") && t7.cssDisplay !== "table-cell");
}
function wt2(t7) {
  return Mn2(t7) || t7.prev && Fi2(t7.prev) || Rn2(t7);
}
function Fi2(t7) {
  return Mn2(t7) || t7.type === "element" && t7.fullName === "br" || Rn2(t7);
}
function Rn2(t7) {
  return $n2(t7) && On2(t7);
}
function $n2(t7) {
  return t7.hasLeadingSpaces && (t7.prev ? t7.prev.sourceSpan.end.line < t7.sourceSpan.start.line : t7.parent.type === "root" || t7.parent.startSourceSpan.end.line < t7.sourceSpan.start.line);
}
function On2(t7) {
  return t7.hasTrailingSpaces && (t7.next ? t7.next.sourceSpan.start.line > t7.sourceSpan.end.line : t7.parent.type === "root" || t7.parent.endSourceSpan && t7.parent.endSourceSpan.start.line > t7.sourceSpan.end.line);
}
function Mn2(t7) {
  switch (t7.type) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return true;
    case "element":
      return ["script", "select"].includes(t7.name);
  }
  return false;
}
function bt2(t7) {
  return t7.lastChild ? bt2(t7.lastChild) : t7;
}
function Ni2(t7) {
  var e;
  return (e = t7.children) == null ? void 0 : e.some((r) => r.type !== "text");
}
function qn2(t7) {
  if (t7) switch (t7) {
    case "module":
    case "text/javascript":
    case "text/babel":
    case "application/javascript":
      return "babel";
    case "application/x-typescript":
      return "typescript";
    case "text/markdown":
      return "markdown";
    case "text/html":
      return "html";
    case "text/x-handlebars-template":
      return "glimmer";
    default:
      if (t7.endsWith("json") || t7.endsWith("importmap") || t7 === "speculationrules") return "json";
  }
}
function Pi2(t7, e) {
  let { name: r, attrMap: n } = t7;
  if (r !== "script" || Object.prototype.hasOwnProperty.call(n, "src")) return;
  let { type: s, lang: i } = t7.attrMap;
  return !i && !s ? "babel" : Ne2(e, { language: i }) ?? qn2(s);
}
function Ii2(t7, e) {
  if (!Tt2(t7, e)) return;
  let { attrMap: r } = t7;
  if (Object.prototype.hasOwnProperty.call(r, "src")) return;
  let { type: n, lang: s } = r;
  return Ne2(e, { language: s }) ?? qn2(n);
}
function Ri2(t7, e) {
  if (t7.name !== "style") return;
  let { lang: r } = t7.attrMap;
  return r ? Ne2(e, { language: r }) : "css";
}
function Ar2(t7, e) {
  return Pi2(t7, e) ?? Ri2(t7, e) ?? Ii2(t7, e);
}
function Ze2(t7) {
  return t7 === "block" || t7 === "list-item" || t7.startsWith("table");
}
function $i2(t7) {
  return !Ze2(t7) && t7 !== "inline-block";
}
function Oi2(t7) {
  return !Ze2(t7) && t7 !== "inline-block";
}
function Mi2(t7) {
  return !Ze2(t7);
}
function qi2(t7) {
  return !Ze2(t7);
}
function Hi2(t7) {
  return !Ze2(t7) && t7 !== "inline-block";
}
function me2(t7) {
  return Vn2(t7).startsWith("pre");
}
function Vi2(t7, e) {
  let r = t7;
  for (; r; ) {
    if (e(r)) return true;
    r = r.parent;
  }
  return false;
}
function Hn2(t7, e) {
  var n;
  if (ge2(t7, e)) return "block";
  if (((n = t7.prev) == null ? void 0 : n.type) === "comment") {
    let s = t7.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);
    if (s) return s[1];
  }
  let r = false;
  if (t7.type === "element" && t7.namespace === "svg") if (Vi2(t7, (s) => s.fullName === "svg:foreignObject")) r = true;
  else return t7.name === "svg" ? "inline-block" : "block";
  switch (e.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";
    case "ignore":
      return "block";
    default:
      return t7.type === "element" && (!t7.namespace || r || fe2(t7)) && bn2[t7.name] || wn2;
  }
}
function Vn2(t7) {
  return t7.type === "element" && (!t7.namespace || fe2(t7)) && xn2[t7.name] || Tn2;
}
function Ui2(t7) {
  let e = Number.POSITIVE_INFINITY;
  for (let r of t7.split(`
`)) {
    if (r.length === 0) continue;
    let n = O2.getLeadingWhitespaceCount(r);
    if (n === 0) return 0;
    r.length !== n && n < e && (e = n);
  }
  return e === Number.POSITIVE_INFINITY ? 0 : e;
}
function Dr2(t7, e = Ui2(t7)) {
  return e === 0 ? t7 : t7.split(`
`).map((r) => r.slice(e)).join(`
`);
}
function vr2(t7) {
  return w2(false, w2(false, t7, "&apos;", "'"), "&quot;", '"');
}
function N2(t7) {
  return vr2(t7.value);
}
var Wi = /* @__PURE__ */ new Set(["template", "style", "script"]);
function et2(t7, e) {
  return ge2(t7, e) && !Wi.has(t7.fullName);
}
function ge2(t7, e) {
  return e.parser === "vue" && t7.type === "element" && t7.parent.type === "root" && t7.fullName.toLowerCase() !== "html";
}
function Tt2(t7, e) {
  return ge2(t7, e) && (et2(t7, e) || t7.attrMap.lang && t7.attrMap.lang !== "html");
}
function Un2(t7) {
  let e = t7.fullName;
  return e.charAt(0) === "#" || e === "slot-scope" || e === "v-slot" || e.startsWith("v-slot:");
}
function Wn(t7, e) {
  let r = t7.parent;
  if (!ge2(r, e)) return false;
  let n = r.fullName, s = t7.fullName;
  return n === "script" && s === "setup" || n === "style" && s === "vars";
}
function xt2(t7, e = t7.value) {
  return t7.parent.isWhitespaceSensitive ? t7.parent.isIndentationSensitive ? B2(e) : B2(Dr2(Sr2(e)), S2) : H2(_2, O2.split(e));
}
function kt2(t7, e) {
  return ge2(t7, e) && t7.name === "script";
}
var yr2 = /\{\{(.+?)\}\}/su;
async function zn2(t7, e) {
  let r = [];
  for (let [n, s] of t7.split(yr2).entries()) if (n % 2 === 0) r.push(B2(s));
  else try {
    r.push(E(["{{", k2([_2, await T2(s, e, { parser: "__ng_interpolation", __isInHtmlInterpolation: true })]), _2, "}}"]));
  } catch {
    r.push("{{", B2(s), "}}");
  }
  return r;
}
function wr2({ parser: t7 }) {
  return (e, r, n) => T2(N2(n.node), e, { parser: t7 }, Q2);
}
var zi2 = wr2({ parser: "__ng_action" });
var Gi2 = wr2({ parser: "__ng_binding" });
var Yi2 = wr2({ parser: "__ng_directive" });
function ji2(t7, e) {
  if (e.parser !== "angular") return;
  let { node: r } = t7, n = r.fullName;
  if (n.startsWith("(") && n.endsWith(")") || n.startsWith("on-")) return zi2;
  if (n.startsWith("[") && n.endsWith("]") || /^bind(?:on)?-/u.test(n) || /^ng-(?:if|show|hide|class|style)$/u.test(n)) return Gi2;
  if (n.startsWith("*")) return Yi2;
  let s = N2(r);
  if (/^i18n(?:-.+)?$/u.test(n)) return () => he2(Dt2(xt2(r, s.trim())), !s.includes("@@"));
  if (yr2.test(s)) return (i) => zn2(s, i);
}
var Gn2 = ji2;
function Ki2(t7, e) {
  let { node: r } = t7, n = N2(r);
  if (r.fullName === "class" && !e.parentParser && !n.includes("{{")) return () => n.trim().split(/\s+/u).join(" ");
}
var Yn2 = Ki2;
function jn2(t7) {
  return t7 === "	" || t7 === `
` || t7 === "\f" || t7 === "\r" || t7 === " ";
}
var Qi2 = /^[ \t\n\r\u000c]+/;
var Xi2 = /^[, \t\n\r\u000c]+/;
var Ji2 = /^[^ \t\n\r\u000c]+/;
var Zi2 = /[,]+$/;
var Kn2 = /^\d+$/;
var ea = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
function ta(t7) {
  let e = t7.length, r, n, s, i, a, o = 0, u;
  function p(C) {
    let A2, D = C.exec(t7.substring(o));
    if (D) return [A2] = D, o += A2.length, A2;
  }
  let l = [];
  for (; ; ) {
    if (p(Xi2), o >= e) {
      if (l.length === 0) throw new Error("Must contain one or more image candidate strings.");
      return l;
    }
    u = o, r = p(Ji2), n = [], r.slice(-1) === "," ? (r = r.replace(Zi2, ""), d()) : f();
  }
  function f() {
    for (p(Qi2), s = "", i = "in descriptor"; ; ) {
      if (a = t7.charAt(o), i === "in descriptor") if (jn2(a)) s && (n.push(s), s = "", i = "after descriptor");
      else if (a === ",") {
        o += 1, s && n.push(s), d();
        return;
      } else if (a === "(") s += a, i = "in parens";
      else if (a === "") {
        s && n.push(s), d();
        return;
      } else s += a;
      else if (i === "in parens") if (a === ")") s += a, i = "in descriptor";
      else if (a === "") {
        n.push(s), d();
        return;
      } else s += a;
      else if (i === "after descriptor" && !jn2(a)) if (a === "") {
        d();
        return;
      } else i = "in descriptor", o -= 1;
      o += 1;
    }
  }
  function d() {
    let C = false, A2, D, I2, F, c = {}, g, y2, q2, x2, U2;
    for (F = 0; F < n.length; F++) g = n[F], y2 = g[g.length - 1], q2 = g.substring(0, g.length - 1), x2 = parseInt(q2, 10), U2 = parseFloat(q2), Kn2.test(q2) && y2 === "w" ? ((A2 || D) && (C = true), x2 === 0 ? C = true : A2 = x2) : ea.test(q2) && y2 === "x" ? ((A2 || D || I2) && (C = true), U2 < 0 ? C = true : D = U2) : Kn2.test(q2) && y2 === "h" ? ((I2 || D) && (C = true), x2 === 0 ? C = true : I2 = x2) : C = true;
    if (!C) c.source = { value: r, startOffset: u }, A2 && (c.width = { value: A2 }), D && (c.density = { value: D }), I2 && (c.height = { value: I2 }), l.push(c);
    else throw new Error(`Invalid srcset descriptor found in "${t7}" at "${g}".`);
  }
}
var Qn2 = ta;
function ra(t7) {
  if (t7.node.fullName === "srcset" && (t7.parent.fullName === "img" || t7.parent.fullName === "source")) return () => sa(N2(t7.node));
}
var Xn2 = { width: "w", height: "h", density: "x" };
var na = Object.keys(Xn2);
function sa(t7) {
  let e = Qn2(t7), r = na.filter((l) => e.some((f) => Object.prototype.hasOwnProperty.call(f, l)));
  if (r.length > 1) throw new Error("Mixed descriptor in srcset is not supported");
  let [n] = r, s = Xn2[n], i = e.map((l) => l.source.value), a = Math.max(...i.map((l) => l.length)), o = e.map((l) => l[n] ? String(l[n].value) : ""), u = o.map((l) => {
    let f = l.indexOf(".");
    return f === -1 ? l.length : f;
  }), p = Math.max(...u);
  return he2(H2([",", _2], i.map((l, f) => {
    let d = [l], C = o[f];
    if (C) {
      let A2 = a - l.length + 1, D = p - u[f], I2 = " ".repeat(A2 + D);
      d.push(pe2(I2, " "), C + s);
    }
    return d;
  })));
}
var Jn2 = ra;
function Zn2(t7, e) {
  let { node: r } = t7, n = N2(t7.node).trim();
  if (r.fullName === "style" && !e.parentParser && !n.includes("{{")) return async (s) => he2(await s(n, { parser: "css", __isHTMLStyleAttribute: true }));
}
var br2 = /* @__PURE__ */ new WeakMap();
function ia(t7, e) {
  let { root: r } = t7;
  return br2.has(r) || br2.set(r, r.children.some((n) => kt2(n, e) && ["ts", "typescript"].includes(n.attrMap.lang))), br2.get(r);
}
var Pe2 = ia;
function es(t7, e, r) {
  let { node: n } = r, s = N2(n);
  return T2(`type T<${s}> = any`, t7, { parser: "babel-ts", __isEmbeddedTypescriptGenericParameters: true }, Q2);
}
function ts(t7, e, { parseWithTs: r }) {
  return T2(`function _(${t7}) {}`, e, { parser: r ? "babel-ts" : "babel", __isVueBindings: true });
}
async function rs(t7, e, r, n) {
  let s = N2(r.node), { left: i, operator: a, right: o } = aa(s), u = Pe2(r, n);
  return [E(await T2(`function _(${i}) {}`, t7, { parser: u ? "babel-ts" : "babel", __isVueForBindingLeft: true })), " ", a, " ", await T2(o, t7, { parser: u ? "__ts_expression" : "__js_expression" })];
}
function aa(t7) {
  let e = /(.*?)\s+(in|of)\s+(.*)/su, r = /,([^,\]}]*)(?:,([^,\]}]*))?$/u, n = /^\(|\)$/gu, s = t7.match(e);
  if (!s) return;
  let i = {};
  if (i.for = s[3].trim(), !i.for) return;
  let a = w2(false, s[1].trim(), n, ""), o = a.match(r);
  o ? (i.alias = a.replace(r, ""), i.iterator1 = o[1].trim(), o[2] && (i.iterator2 = o[2].trim())) : i.alias = a;
  let u = [i.alias, i.iterator1, i.iterator2];
  if (!u.some((p, l) => !p && (l === 0 || u.slice(l + 1).some(Boolean)))) return { left: u.filter(Boolean).join(","), operator: s[2], right: i.for };
}
function oa(t7, e) {
  if (e.parser !== "vue") return;
  let { node: r } = t7, n = r.fullName;
  if (n === "v-for") return rs;
  if (n === "generic" && kt2(r.parent, e)) return es;
  let s = N2(r), i = Pe2(t7, e);
  if (Un2(r) || Wn(r, e)) return (a) => ts(s, a, { parseWithTs: i });
  if (n.startsWith("@") || n.startsWith("v-on:")) return (a) => ua(s, a, { parseWithTs: i });
  if (n.startsWith(":") || n.startsWith(".") || n.startsWith("v-bind:")) return (a) => la(s, a, { parseWithTs: i });
  if (n.startsWith("v-")) return (a) => ns(s, a, { parseWithTs: i });
}
async function ua(t7, e, { parseWithTs: r }) {
  var n;
  try {
    return await ns(t7, e, { parseWithTs: r });
  } catch (s) {
    if (((n = s.cause) == null ? void 0 : n.code) !== "BABEL_PARSER_SYNTAX_ERROR") throw s;
  }
  return T2(t7, e, { parser: r ? "__vue_ts_event_binding" : "__vue_event_binding" }, Q2);
}
function la(t7, e, { parseWithTs: r }) {
  return T2(t7, e, { parser: r ? "__vue_ts_expression" : "__vue_expression" }, Q2);
}
function ns(t7, e, { parseWithTs: r }) {
  return T2(t7, e, { parser: r ? "__ts_expression" : "__js_expression" }, Q2);
}
var ss = oa;
function ca(t7, e) {
  let { node: r } = t7;
  if (r.value) {
    if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(e.originalText.slice(r.valueSpan.start.offset, r.valueSpan.end.offset)) || e.parser === "lwc" && r.value.startsWith("{") && r.value.endsWith("}")) return [r.rawName, "=", r.value];
    for (let n of [Jn2, Zn2, Yn2, ss, Gn2]) {
      let s = n(t7, e);
      if (s) return pa(s);
    }
  }
}
function pa(t7) {
  return async (e, r, n, s) => {
    let i = await t7(e, r, n, s);
    if (i) return i = hr2(i, (a) => typeof a == "string" ? w2(false, a, '"', "&quot;") : a), [n.node.rawName, '="', E(i), '"'];
  };
}
var is = ca;
var as = new Proxy(() => {
}, { get: () => as });
var Tr2 = as;
function ha(t7) {
  return Array.isArray(t7) && t7.length > 0;
}
var Ie2 = ha;
function J2(t7) {
  return t7.sourceSpan.start.offset;
}
function Z2(t7) {
  return t7.sourceSpan.end.offset;
}
function tt2(t7, e) {
  return [t7.isSelfClosing ? "" : fa(t7, e), Ce2(t7, e)];
}
function fa(t7, e) {
  return t7.lastChild && Ee2(t7.lastChild) ? "" : [ma(t7, e), Bt2(t7, e)];
}
function Ce2(t7, e) {
  return (t7.next ? X(t7.next) : _e2(t7.parent)) ? "" : [Se2(t7, e), z2(t7, e)];
}
function ma(t7, e) {
  return _e2(t7) ? Se2(t7.lastChild, e) : "";
}
function z2(t7, e) {
  return Ee2(t7) ? Bt2(t7.parent, e) : rt2(t7) ? Lt2(t7.next, e) : "";
}
function Bt2(t7, e) {
  if (Tr2.ok(!t7.isSelfClosing), us(t7, e)) return "";
  switch (t7.type) {
    case "ieConditionalComment":
      return "<!";
    case "element":
      if (t7.hasHtmComponentClosingTag) return "<//";
    default:
      return `</${t7.rawName}`;
  }
}
function Se2(t7, e) {
  if (us(t7, e)) return "";
  switch (t7.type) {
    case "ieConditionalComment":
    case "ieConditionalEndComment":
      return "[endif]-->";
    case "ieConditionalStartComment":
      return "]><!-->";
    case "interpolation":
      return "}}";
    case "angularIcuExpression":
      return "}";
    case "element":
      if (t7.isSelfClosing) return "/>";
    default:
      return ">";
  }
}
function us(t7, e) {
  return !t7.isSelfClosing && !t7.endSourceSpan && (de2(t7) || yt(t7.parent, e));
}
function X(t7) {
  return t7.prev && t7.prev.type !== "docType" && t7.type !== "angularControlFlowBlock" && !$2(t7.prev) && t7.isLeadingSpaceSensitive && !t7.hasLeadingSpaces;
}
function _e2(t7) {
  var e;
  return ((e = t7.lastChild) == null ? void 0 : e.isTrailingSpaceSensitive) && !t7.lastChild.hasTrailingSpaces && !$2(bt2(t7.lastChild)) && !me2(t7);
}
function Ee2(t7) {
  return !t7.next && !t7.hasTrailingSpaces && t7.isTrailingSpaceSensitive && $2(bt2(t7));
}
function rt2(t7) {
  return t7.next && !$2(t7.next) && $2(t7) && t7.isTrailingSpaceSensitive && !t7.hasTrailingSpaces;
}
function da(t7) {
  let e = t7.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);
  return e ? e[1] ? e[1].split(/\s+/u) : true : false;
}
function nt2(t7) {
  return !t7.prev && t7.isLeadingSpaceSensitive && !t7.hasLeadingSpaces;
}
function ga(t7, e, r) {
  var f;
  let { node: n } = t7;
  if (!Ie2(n.attrs)) return n.isSelfClosing ? " " : "";
  let s = ((f = n.prev) == null ? void 0 : f.type) === "comment" && da(n.prev.value), i = typeof s == "boolean" ? () => s : Array.isArray(s) ? (d) => s.includes(d.rawName) : () => false, a = t7.map(({ node: d }) => i(d) ? B2(e.originalText.slice(J2(d), Z2(d))) : r(), "attrs"), o = n.type === "element" && n.fullName === "script" && n.attrs.length === 1 && n.attrs[0].fullName === "src" && n.children.length === 0, p = e.singleAttributePerLine && n.attrs.length > 1 && !ge2(n, e) ? S2 : _2, l = [k2([o ? " " : _2, H2(p, a)])];
  return n.firstChild && nt2(n.firstChild) || n.isSelfClosing && _e2(n.parent) || o ? l.push(n.isSelfClosing ? " " : "") : l.push(e.bracketSameLine ? n.isSelfClosing ? " " : "" : n.isSelfClosing ? _2 : v), l;
}
function Ca(t7) {
  return t7.firstChild && nt2(t7.firstChild) ? "" : Ft2(t7);
}
function st2(t7, e, r) {
  let { node: n } = t7;
  return [Ae2(n, e), ga(t7, e, r), n.isSelfClosing ? "" : Ca(n)];
}
function Ae2(t7, e) {
  return t7.prev && rt2(t7.prev) ? "" : [G2(t7, e), Lt2(t7, e)];
}
function G2(t7, e) {
  return nt2(t7) ? Ft2(t7.parent) : X(t7) ? Se2(t7.prev, e) : "";
}
var os = "<!doctype";
function Lt2(t7, e) {
  switch (t7.type) {
    case "ieConditionalComment":
    case "ieConditionalStartComment":
      return `<!--[if ${t7.condition}`;
    case "ieConditionalEndComment":
      return "<!--<!";
    case "interpolation":
      return "{{";
    case "docType": {
      if (t7.value === "html") {
        let n = e.filepath ?? "";
        if (/\.html?$/u.test(n)) return os;
      }
      return e.originalText.slice(J2(t7), Z2(t7)).slice(0, os.length);
    }
    case "angularIcuExpression":
      return "{";
    case "element":
      if (t7.condition) return `<!--[if ${t7.condition}]><!--><${t7.rawName}`;
    default:
      return `<${t7.rawName}`;
  }
}
function Ft2(t7) {
  switch (Tr2.ok(!t7.isSelfClosing), t7.type) {
    case "ieConditionalComment":
      return "]>";
    case "element":
      if (t7.condition) return "><!--<![endif]-->";
    default:
      return ">";
  }
}
function Sa(t7, e) {
  if (!t7.endSourceSpan) return "";
  let r = t7.startSourceSpan.end.offset;
  t7.firstChild && nt2(t7.firstChild) && (r -= Ft2(t7).length);
  let n = t7.endSourceSpan.start.offset;
  return t7.lastChild && Ee2(t7.lastChild) ? n += Bt2(t7, e).length : _e2(t7) && (n -= Se2(t7.lastChild, e).length), e.originalText.slice(r, n);
}
var Nt2 = Sa;
var _a = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function Ea(t7, e) {
  let { node: r } = t7;
  switch (r.type) {
    case "element":
      if (W2(r) || r.type === "interpolation") return;
      if (!r.isSelfClosing && Tt2(r, e)) {
        let n = Ar2(r, e);
        return n ? async (s, i) => {
          let a = Nt2(r, e), o = /^\s*$/u.test(a), u = "";
          return o || (u = await s(Sr2(a), { parser: n, __embeddedInHtml: true }), o = u === ""), [G2(r, e), E(st2(t7, e, i)), o ? "" : S2, u, o ? "" : S2, tt2(r, e), z2(r, e)];
        } : void 0;
      }
      break;
    case "text":
      if (W2(r.parent)) {
        let n = Ar2(r.parent, e);
        if (n) return async (s) => {
          let i = n === "markdown" ? Dr2(r.value.replace(/^[^\S\n]*\n/u, "")) : r.value, a = { parser: n, __embeddedInHtml: true };
          if (e.parser === "html" && n === "babel") {
            let o = "script", { attrMap: u } = r.parent;
            u && (u.type === "module" || u.type === "text/babel" && u["data-type"] === "module") && (o = "module"), a.__babelSourceType = o;
          }
          return [se2, G2(r, e), await s(i, a), z2(r, e)];
        };
      } else if (r.parent.type === "interpolation") return async (n) => {
        let s = { __isInHtmlInterpolation: true, __embeddedInHtml: true };
        return e.parser === "angular" ? s.parser = "__ng_interpolation" : e.parser === "vue" ? s.parser = Pe2(t7, e) ? "__vue_ts_expression" : "__vue_expression" : s.parser = "__js_expression", [k2([_2, await n(r.value, s)]), r.parent.next && X(r.parent.next) ? " " : _2];
      };
      break;
    case "attribute":
      return is(t7, e);
    case "front-matter":
      return (n) => Dn2(r, n);
    case "angularControlFlowBlockParameters":
      return _a.has(t7.parent.name) ? vn2 : void 0;
    case "angularLetDeclarationInitializer":
      return (n) => T2(r.value, n, { parser: "__ng_binding", __isInHtmlAttribute: false });
  }
}
var ls = Ea;
var it2 = null;
function at2(t7) {
  if (it2 !== null && typeof it2.property) {
    let e = it2;
    return it2 = at2.prototype = null, e;
  }
  return it2 = at2.prototype = t7 ?? /* @__PURE__ */ Object.create(null), new at2();
}
var Aa = 10;
for (let t7 = 0; t7 <= Aa; t7++) at2();
function xr2(t7) {
  return at2(t7);
}
function Da(t7, e = "type") {
  xr2(t7);
  function r(n) {
    let s = n[e], i = t7[s];
    if (!Array.isArray(i)) throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), { node: n });
    return i;
  }
  return r;
}
var cs = Da;
var va = { "front-matter": [], root: ["children"], element: ["attrs", "children"], ieConditionalComment: ["children"], ieConditionalStartComment: [], ieConditionalEndComment: [], interpolation: ["children"], text: ["children"], docType: [], comment: [], attribute: [], cdata: [], angularControlFlowBlock: ["children", "parameters"], angularControlFlowBlockParameters: ["children"], angularControlFlowBlockParameter: [], angularLetDeclaration: ["init"], angularLetDeclarationInitializer: [], angularIcuExpression: ["cases"], angularIcuCase: ["expression"] };
var ps = va;
var ya = cs(ps);
var hs = ya;
function fs(t7) {
  return /^\s*<!--\s*@(?:format|prettier)\s*-->/u.test(t7);
}
function ms(t7) {
  return `<!-- @format -->

` + t7;
}
var ds = /* @__PURE__ */ new Map([["if", /* @__PURE__ */ new Set(["else if", "else"])], ["else if", /* @__PURE__ */ new Set(["else if", "else"])], ["for", /* @__PURE__ */ new Set(["empty"])], ["defer", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["placeholder", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["error", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["loading", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])]]);
function gs(t7) {
  let e = Z2(t7);
  return t7.type === "element" && !t7.endSourceSpan && Ie2(t7.children) ? Math.max(e, gs(K2(false, t7.children, -1))) : e;
}
function ot2(t7, e, r) {
  let n = t7.node;
  if (de2(n)) {
    let s = gs(n);
    return [G2(n, e), B2(O2.trimEnd(e.originalText.slice(J2(n) + (n.prev && rt2(n.prev) ? Lt2(n).length : 0), s - (n.next && X(n.next) ? Se2(n, e).length : 0)))), z2(n, e)];
  }
  return r();
}
function Pt2(t7, e) {
  return $2(t7) && $2(e) ? t7.isTrailingSpaceSensitive ? t7.hasTrailingSpaces ? wt2(e) ? S2 : _2 : "" : wt2(e) ? S2 : v : rt2(t7) && (de2(e) || e.firstChild || e.isSelfClosing || e.type === "element" && e.attrs.length > 0) || t7.type === "element" && t7.isSelfClosing && X(e) ? "" : !e.isLeadingSpaceSensitive || wt2(e) || X(e) && t7.lastChild && Ee2(t7.lastChild) && t7.lastChild.lastChild && Ee2(t7.lastChild.lastChild) ? S2 : e.hasLeadingSpaces ? _2 : v;
}
function Re2(t7, e, r) {
  let { node: n } = t7;
  if (Er2(n)) return [se2, ...t7.map((i) => {
    let a = i.node, o = a.prev ? Pt2(a.prev, a) : "";
    return [o ? [o, Je2(a.prev) ? S2 : ""] : "", ot2(i, e, r)];
  }, "children")];
  let s = n.children.map(() => Symbol(""));
  return t7.map((i, a) => {
    let o = i.node;
    if ($2(o)) {
      if (o.prev && $2(o.prev)) {
        let A2 = Pt2(o.prev, o);
        if (A2) return Je2(o.prev) ? [S2, S2, ot2(i, e, r)] : [A2, ot2(i, e, r)];
      }
      return ot2(i, e, r);
    }
    let u = [], p = [], l = [], f = [], d = o.prev ? Pt2(o.prev, o) : "", C = o.next ? Pt2(o, o.next) : "";
    return d && (Je2(o.prev) ? u.push(S2, S2) : d === S2 ? u.push(S2) : $2(o.prev) ? p.push(d) : p.push(pe2("", v, { groupId: s[a - 1] }))), C && (Je2(o) ? $2(o.next) && f.push(S2, S2) : C === S2 ? $2(o.next) && f.push(S2) : l.push(C)), [...u, E([...p, E([ot2(i, e, r), ...l], { id: s[a] })]), ...f];
  }, "children");
}
function Cs(t7, e, r) {
  let { node: n } = t7, s = [];
  wa(t7) && s.push("} "), s.push("@", n.name), n.parameters && s.push(" (", E(r("parameters")), ")"), s.push(" {");
  let i = Ss(n);
  return n.children.length > 0 ? (n.firstChild.hasLeadingSpaces = true, n.lastChild.hasTrailingSpaces = true, s.push(k2([S2, Re2(t7, e, r)])), i && s.push(S2, "}")) : i && s.push("}"), E(s, { shouldBreak: true });
}
function Ss(t7) {
  var e, r;
  return !(((e = t7.next) == null ? void 0 : e.type) === "angularControlFlowBlock" && ((r = ds.get(t7.name)) != null && r.has(t7.next.name)));
}
function wa(t7) {
  let { previous: e } = t7;
  return (e == null ? void 0 : e.type) === "angularControlFlowBlock" && !de2(e) && !Ss(e);
}
function _s(t7, e, r) {
  return [k2([v, H2([";", _2], t7.map(r, "children"))]), v];
}
function Es(t7, e, r) {
  let { node: n } = t7;
  return [Ae2(n, e), E([n.switchValue.trim(), ", ", n.clause, n.cases.length > 0 ? [",", k2([_2, H2(_2, t7.map(r, "cases"))])] : "", v]), Ce2(n, e)];
}
function As(t7, e, r) {
  let { node: n } = t7;
  return [n.value, " {", E([k2([v, t7.map(({ node: s, isLast: i }) => {
    let a = [r()];
    return s.type === "text" && (s.hasLeadingSpaces && a.unshift(_2), s.hasTrailingSpaces && !i && a.push(_2)), a;
  }, "expression")]), v]), "}"];
}
function Ds(t7, e, r) {
  let { node: n } = t7;
  if (yt(n, e)) return [G2(n, e), E(st2(t7, e, r)), B2(Nt2(n, e)), ...tt2(n, e), z2(n, e)];
  let s = n.children.length === 1 && (n.firstChild.type === "interpolation" || n.firstChild.type === "angularIcuExpression") && n.firstChild.isLeadingSpaceSensitive && !n.firstChild.hasLeadingSpaces && n.lastChild.isTrailingSpaceSensitive && !n.lastChild.hasTrailingSpaces, i = Symbol("element-attr-group-id"), a = (l) => E([E(st2(t7, e, r), { id: i }), l, tt2(n, e)]), o = (l) => s ? dn2(l, { groupId: i }) : (W2(n) || et2(n, e)) && n.parent.type === "root" && e.parser === "vue" && !e.vueIndentScriptAndStyle ? l : k2(l), u = () => s ? pe2(v, "", { groupId: i }) : n.firstChild.hasLeadingSpaces && n.firstChild.isLeadingSpaceSensitive ? _2 : n.firstChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive ? fn2(v) : v, p = () => (n.next ? X(n.next) : _e2(n.parent)) ? n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? " " : "" : s ? pe2(v, "", { groupId: i }) : n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? _2 : (n.lastChild.type === "comment" || n.lastChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${e.tabWidth * (t7.ancestors.length - 1)}}$`, "u").test(n.lastChild.value) ? "" : v;
  return n.children.length === 0 ? a(n.hasDanglingSpaces && n.isDanglingSpaceSensitive ? _2 : "") : a([In2(n) ? se2 : "", o([u(), Re2(t7, e, r)]), p()]);
}
function ut2(t7) {
  return t7 >= 9 && t7 <= 32 || t7 == 160;
}
function It2(t7) {
  return 48 <= t7 && t7 <= 57;
}
function lt2(t7) {
  return t7 >= 97 && t7 <= 122 || t7 >= 65 && t7 <= 90;
}
function vs(t7) {
  return t7 >= 97 && t7 <= 102 || t7 >= 65 && t7 <= 70 || It2(t7);
}
function Rt2(t7) {
  return t7 === 10 || t7 === 13;
}
function kr2(t7) {
  return 48 <= t7 && t7 <= 55;
}
function $t2(t7) {
  return t7 === 39 || t7 === 34 || t7 === 96;
}
var ba = /-+([a-z0-9])/g;
function ws(t7) {
  return t7.replace(ba, (...e) => e[1].toUpperCase());
}
var ie2 = class t {
  constructor(e, r, n, s) {
    this.file = e, this.offset = r, this.line = n, this.col = s;
  }
  toString() {
    return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
  }
  moveBy(e) {
    let r = this.file.content, n = r.length, s = this.offset, i = this.line, a = this.col;
    for (; s > 0 && e < 0; ) if (s--, e++, r.charCodeAt(s) == 10) {
      i--;
      let u = r.substring(0, s - 1).lastIndexOf(String.fromCharCode(10));
      a = u > 0 ? s - u : s;
    } else a--;
    for (; s < n && e > 0; ) {
      let o = r.charCodeAt(s);
      s++, e--, o == 10 ? (i++, a = 0) : a++;
    }
    return new t(this.file, s, i, a);
  }
  getContext(e, r) {
    let n = this.file.content, s = this.offset;
    if (s != null) {
      s > n.length - 1 && (s = n.length - 1);
      let i = s, a = 0, o = 0;
      for (; a < e && s > 0 && (s--, a++, !(n[s] == `
` && ++o == r)); ) ;
      for (a = 0, o = 0; a < e && i < n.length - 1 && (i++, a++, !(n[i] == `
` && ++o == r)); ) ;
      return { before: n.substring(s, this.offset), after: n.substring(this.offset, i + 1) };
    }
    return null;
  }
};
var De2 = class {
  constructor(e, r) {
    this.content = e, this.url = r;
  }
};
var h = class {
  constructor(e, r, n = e, s = null) {
    this.start = e, this.end = r, this.fullStart = n, this.details = s;
  }
  toString() {
    return this.start.file.content.substring(this.start.offset, this.end.offset);
  }
};
var Ot2;
(function(t7) {
  t7[t7.WARNING = 0] = "WARNING", t7[t7.ERROR = 1] = "ERROR";
})(Ot2 || (Ot2 = {}));
var Oe2 = class {
  constructor(e, r, n = Ot2.ERROR) {
    this.span = e, this.msg = r, this.level = n;
  }
  contextualMessage() {
    let e = this.span.start.getContext(100, 3);
    return e ? `${this.msg} ("${e.before}[${Ot2[this.level]} ->]${e.after}")` : this.msg;
  }
  toString() {
    let e = this.span.details ? `, ${this.span.details}` : "";
    return `${this.contextualMessage()}: ${this.span.start}${e}`;
  }
};
var Ta = [ka, Ba, Fa, Pa, Ia, Oa, Ra, $a, Ma, Na];
function xa(t7, e) {
  for (let r of Ta) r(t7, e);
  return t7;
}
function ka(t7) {
  t7.walk((e) => {
    if (e.type === "element" && e.tagDefinition.ignoreFirstLf && e.children.length > 0 && e.children[0].type === "text" && e.children[0].value[0] === `
`) {
      let r = e.children[0];
      r.value.length === 1 ? e.removeChild(r) : r.value = r.value.slice(1);
    }
  });
}
function Ba(t7) {
  let e = (r) => {
    var n, s;
    return r.type === "element" && ((n = r.prev) == null ? void 0 : n.type) === "ieConditionalStartComment" && r.prev.sourceSpan.end.offset === r.startSourceSpan.start.offset && ((s = r.firstChild) == null ? void 0 : s.type) === "ieConditionalEndComment" && r.firstChild.sourceSpan.start.offset === r.startSourceSpan.end.offset;
  };
  t7.walk((r) => {
    if (r.children) for (let n = 0; n < r.children.length; n++) {
      let s = r.children[n];
      if (!e(s)) continue;
      let i = s.prev, a = s.firstChild;
      r.removeChild(i), n--;
      let o = new h(i.sourceSpan.start, a.sourceSpan.end), u = new h(o.start, s.sourceSpan.end);
      s.condition = i.condition, s.sourceSpan = u, s.startSourceSpan = o, s.removeChild(a);
    }
  });
}
function La(t7, e, r) {
  t7.walk((n) => {
    if (n.children) for (let s = 0; s < n.children.length; s++) {
      let i = n.children[s];
      if (i.type !== "text" && !e(i)) continue;
      i.type !== "text" && (i.type = "text", i.value = r(i));
      let a = i.prev;
      !a || a.type !== "text" || (a.value += i.value, a.sourceSpan = new h(a.sourceSpan.start, i.sourceSpan.end), n.removeChild(i), s--);
    }
  });
}
function Fa(t7) {
  return La(t7, (e) => e.type === "cdata", (e) => `<![CDATA[${e.value}]]>`);
}
function Na(t7) {
  let e = (r) => {
    var n, s;
    return r.type === "element" && r.attrs.length === 0 && r.children.length === 1 && r.firstChild.type === "text" && !O2.hasWhitespaceCharacter(r.children[0].value) && !r.firstChild.hasLeadingSpaces && !r.firstChild.hasTrailingSpaces && r.isLeadingSpaceSensitive && !r.hasLeadingSpaces && r.isTrailingSpaceSensitive && !r.hasTrailingSpaces && ((n = r.prev) == null ? void 0 : n.type) === "text" && ((s = r.next) == null ? void 0 : s.type) === "text";
  };
  t7.walk((r) => {
    if (r.children) for (let n = 0; n < r.children.length; n++) {
      let s = r.children[n];
      if (!e(s)) continue;
      let i = s.prev, a = s.next;
      i.value += `<${s.rawName}>` + s.firstChild.value + `</${s.rawName}>` + a.value, i.sourceSpan = new h(i.sourceSpan.start, a.sourceSpan.end), i.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive, i.hasTrailingSpaces = a.hasTrailingSpaces, r.removeChild(s), n--, r.removeChild(a);
    }
  });
}
function Pa(t7, e) {
  if (e.parser === "html") return;
  let r = /\{\{(.+?)\}\}/su;
  t7.walk((n) => {
    if (Bn2(n)) for (let s of n.children) {
      if (s.type !== "text") continue;
      let i = s.sourceSpan.start, a = null, o = s.value.split(r);
      for (let u = 0; u < o.length; u++, i = a) {
        let p = o[u];
        if (u % 2 === 0) {
          a = i.moveBy(p.length), p.length > 0 && n.insertChildBefore(s, { type: "text", value: p, sourceSpan: new h(i, a) });
          continue;
        }
        a = i.moveBy(p.length + 4), n.insertChildBefore(s, { type: "interpolation", sourceSpan: new h(i, a), children: p.length === 0 ? [] : [{ type: "text", value: p, sourceSpan: new h(i.moveBy(2), a.moveBy(-2)) }] });
      }
      n.removeChild(s);
    }
  });
}
function Ia(t7) {
  t7.walk((e) => {
    let r = e.$children;
    if (!r) return;
    if (r.length === 0 || r.length === 1 && r[0].type === "text" && O2.trim(r[0].value).length === 0) {
      e.hasDanglingSpaces = r.length > 0, e.$children = [];
      return;
    }
    let n = Ln2(e), s = _r2(e);
    if (!n) for (let i = 0; i < r.length; i++) {
      let a = r[i];
      if (a.type !== "text") continue;
      let { leadingWhitespace: o, text: u, trailingWhitespace: p } = kn2(a.value), l = a.prev, f = a.next;
      u ? (a.value = u, a.sourceSpan = new h(a.sourceSpan.start.moveBy(o.length), a.sourceSpan.end.moveBy(-p.length)), o && (l && (l.hasTrailingSpaces = true), a.hasLeadingSpaces = true), p && (a.hasTrailingSpaces = true, f && (f.hasLeadingSpaces = true))) : (e.removeChild(a), i--, (o || p) && (l && (l.hasTrailingSpaces = true), f && (f.hasLeadingSpaces = true)));
    }
    e.isWhitespaceSensitive = n, e.isIndentationSensitive = s;
  });
}
function Ra(t7) {
  t7.walk((e) => {
    e.isSelfClosing = !e.children || e.type === "element" && (e.tagDefinition.isVoid || e.endSourceSpan && e.startSourceSpan.start === e.endSourceSpan.start && e.startSourceSpan.end === e.endSourceSpan.end);
  });
}
function $a(t7, e) {
  t7.walk((r) => {
    r.type === "element" && (r.hasHtmComponentClosingTag = r.endSourceSpan && /^<\s*\/\s*\/\s*>$/u.test(e.originalText.slice(r.endSourceSpan.start.offset, r.endSourceSpan.end.offset)));
  });
}
function Oa(t7, e) {
  t7.walk((r) => {
    r.cssDisplay = Hn2(r, e);
  });
}
function Ma(t7, e) {
  t7.walk((r) => {
    let { children: n } = r;
    if (n) {
      if (n.length === 0) {
        r.isDanglingSpaceSensitive = Pn2(r);
        return;
      }
      for (let s of n) s.isLeadingSpaceSensitive = Fn(s, e), s.isTrailingSpaceSensitive = Nn2(s, e);
      for (let s = 0; s < n.length; s++) {
        let i = n[s];
        i.isLeadingSpaceSensitive = (s === 0 || i.prev.isTrailingSpaceSensitive) && i.isLeadingSpaceSensitive, i.isTrailingSpaceSensitive = (s === n.length - 1 || i.next.isLeadingSpaceSensitive) && i.isTrailingSpaceSensitive;
      }
    }
  });
}
var bs = xa;
function qa(t7, e, r) {
  let { node: n } = t7;
  switch (n.type) {
    case "front-matter":
      return B2(n.raw);
    case "root":
      return e.__onHtmlRoot && e.__onHtmlRoot(n), [E(Re2(t7, e, r)), S2];
    case "element":
    case "ieConditionalComment":
      return Ds(t7, e, r);
    case "angularControlFlowBlock":
      return Cs(t7, e, r);
    case "angularControlFlowBlockParameters":
      return _s(t7, e, r);
    case "angularControlFlowBlockParameter":
      return O2.trim(n.expression);
    case "angularLetDeclaration":
      return E(["@let ", E([n.id, " =", E(k2([_2, r("init")]))]), ";"]);
    case "angularLetDeclarationInitializer":
      return n.value;
    case "angularIcuExpression":
      return Es(t7, e, r);
    case "angularIcuCase":
      return As(t7, e, r);
    case "ieConditionalStartComment":
    case "ieConditionalEndComment":
      return [Ae2(n), Ce2(n)];
    case "interpolation":
      return [Ae2(n, e), ...t7.map(r, "children"), Ce2(n, e)];
    case "text": {
      if (n.parent.type === "interpolation") {
        let o = /\n[^\S\n]*$/u, u = o.test(n.value), p = u ? n.value.replace(o, "") : n.value;
        return [B2(p), u ? S2 : ""];
      }
      let s = G2(n, e), i = xt2(n), a = z2(n, e);
      return i[0] = [s, i[0]], i.push([i.pop(), a]), Dt2(i);
    }
    case "docType":
      return [E([Ae2(n, e), " ", w2(false, n.value.replace(/^html\b/iu, "html"), /\s+/gu, " ")]), Ce2(n, e)];
    case "comment":
      return [G2(n, e), B2(e.originalText.slice(J2(n), Z2(n))), z2(n, e)];
    case "attribute": {
      if (n.value === null) return n.rawName;
      let s = vr2(n.value), i = Cn2(s, '"');
      return [n.rawName, "=", i, B2(i === '"' ? w2(false, s, '"', "&quot;") : w2(false, s, "'", "&apos;")), i];
    }
    case "cdata":
    default:
      throw new _n2(n, "HTML");
  }
}
var Ha = { preprocess: bs, print: qa, insertPragma: ms, massageAstNode: An2, embed: ls, getVisitorKeys: hs };
var Ts = Ha;
var xs = [{ linguistLanguageId: 146, name: "Angular", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".component.html"], parsers: ["angular"], vscodeLanguageIds: ["html"], filenames: [] }, { linguistLanguageId: 146, name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml", ".mjml"], parsers: ["html"], vscodeLanguageIds: ["html"] }, { linguistLanguageId: 146, name: "Lightning Web Components", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [], parsers: ["lwc"], vscodeLanguageIds: ["html"], filenames: [] }, { linguistLanguageId: 391, name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", parsers: ["vue"], vscodeLanguageIds: ["vue"] }];
var Br2 = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, objectWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap object literals.", choices: [{ value: "preserve", description: "Keep as multi-line, if there is a newline between the opening brace and first property." }, { value: "collapse", description: "Fit to a single line when possible." }] }, singleQuote: { category: "Common", type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap prose.", choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { category: "Common", type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
var ks = "HTML";
var Va = { bracketSameLine: Br2.bracketSameLine, htmlWhitespaceSensitivity: { category: ks, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: Br2.singleAttributePerLine, vueIndentScriptAndStyle: { category: ks, type: "boolean", default: false, description: "Indent script and style tags in Vue files." } };
var Bs = Va;
var Zr2 = {};
on2(Zr2, { angular: () => qo, html: () => Mo, lwc: () => Vo, vue: () => Ho });
var xp = new RegExp(`(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`, "g");
var Ls;
(function(t7) {
  t7[t7.Emulated = 0] = "Emulated", t7[t7.None = 2] = "None", t7[t7.ShadowDom = 3] = "ShadowDom";
})(Ls || (Ls = {}));
var Fs;
(function(t7) {
  t7[t7.OnPush = 0] = "OnPush", t7[t7.Default = 1] = "Default";
})(Fs || (Fs = {}));
var Ns;
(function(t7) {
  t7[t7.None = 0] = "None", t7[t7.SignalBased = 1] = "SignalBased", t7[t7.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform";
})(Ns || (Ns = {}));
var Lr2 = { name: "custom-elements" };
var Fr2 = { name: "no-errors-schema" };
var ee2;
(function(t7) {
  t7[t7.NONE = 0] = "NONE", t7[t7.HTML = 1] = "HTML", t7[t7.STYLE = 2] = "STYLE", t7[t7.SCRIPT = 3] = "SCRIPT", t7[t7.URL = 4] = "URL", t7[t7.RESOURCE_URL = 5] = "RESOURCE_URL";
})(ee2 || (ee2 = {}));
var Ps;
(function(t7) {
  t7[t7.Error = 0] = "Error", t7[t7.Warning = 1] = "Warning", t7[t7.Ignore = 2] = "Ignore";
})(Ps || (Ps = {}));
var P2;
(function(t7) {
  t7[t7.RAW_TEXT = 0] = "RAW_TEXT", t7[t7.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", t7[t7.PARSABLE_DATA = 2] = "PARSABLE_DATA";
})(P2 || (P2 = {}));
function ct2(t7, e = true) {
  if (t7[0] != ":") return [null, t7];
  let r = t7.indexOf(":", 1);
  if (r === -1) {
    if (e) throw new Error(`Unsupported format "${t7}" expecting ":namespace:name"`);
    return [null, t7];
  }
  return [t7.slice(1, r), t7.slice(r + 1)];
}
function Nr2(t7) {
  return ct2(t7)[1] === "ng-container";
}
function Pr2(t7) {
  return ct2(t7)[1] === "ng-content";
}
function Me2(t7) {
  return t7 === null ? null : ct2(t7)[0];
}
function qe2(t7, e) {
  return t7 ? `:${t7}:${e}` : e;
}
var qt2;
function Ir2() {
  return qt2 || (qt2 = {}, Mt2(ee2.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), Mt2(ee2.STYLE, ["*|style"]), Mt2(ee2.URL, ["*|formAction", "area|href", "area|ping", "audio|src", "a|href", "a|ping", "blockquote|cite", "body|background", "del|cite", "form|action", "img|src", "input|src", "ins|cite", "q|cite", "source|src", "track|src", "video|poster", "video|src"]), Mt2(ee2.RESOURCE_URL, ["applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"])), qt2;
}
function Mt2(t7, e) {
  for (let r of e) qt2[r.toLowerCase()] = t7;
}
var Ht2 = class {
};
var Ua = "boolean";
var Wa = "number";
var za = "string";
var Ga = "object";
var Ya = ["[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored", "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume", ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":svg:graphics^:svg:|", ":svg:animation^:svg:|*begin,*end,*repeat", ":svg:geometry^:svg:|", ":svg:componentTransferFunction^:svg:|", ":svg:gradient^:svg:|", ":svg:textContent^:svg:graphics|", ":svg:textPositioning^:svg:textContent|", "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username", "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username", "audio^media|", "br^[HTMLElement]|clear", "base^[HTMLElement]|href,target", "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink", "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value", "canvas^[HTMLElement]|#height,#width", "content^[HTMLElement]|select", "dl^[HTMLElement]|!compact", "data^[HTMLElement]|value", "datalist^[HTMLElement]|", "details^[HTMLElement]|!open", "dialog^[HTMLElement]|!open,returnValue", "dir^[HTMLElement]|!compact", "div^[HTMLElement]|align", "embed^[HTMLElement]|align,height,name,src,type,width", "fieldset^[HTMLElement]|!disabled,name", "font^[HTMLElement]|color,face,size", "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target", "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src", "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows", "hr^[HTMLElement]|align,color,!noShade,size,width", "head^[HTMLElement]|", "h1,h2,h3,h4,h5,h6^[HTMLElement]|align", "html^[HTMLElement]|version", "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width", "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width", "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width", "li^[HTMLElement]|type,#value", "label^[HTMLElement]|htmlFor", "legend^[HTMLElement]|align", "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type", "map^[HTMLElement]|name", "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width", "menu^[HTMLElement]|!compact", "meta^[HTMLElement]|content,httpEquiv,media,name,scheme", "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value", "ins,del^[HTMLElement]|cite,dateTime", "ol^[HTMLElement]|!compact,!reversed,#start,type", "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width", "optgroup^[HTMLElement]|!disabled,label", "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value", "output^[HTMLElement]|defaultValue,%htmlFor,name,value", "p^[HTMLElement]|align", "param^[HTMLElement]|name,type,value,valueType", "picture^[HTMLElement]|", "pre^[HTMLElement]|#width", "progress^[HTMLElement]|#max,#value", "q,blockquote,cite^[HTMLElement]|", "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type", "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value", "slot^[HTMLElement]|name", "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width", "span^[HTMLElement]|", "style^[HTMLElement]|!disabled,media,type", "caption^[HTMLElement]|align", "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width", "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width", "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width", "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign", "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign", "template^[HTMLElement]|", "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap", "time^[HTMLElement]|dateTime", "title^[HTMLElement]|text", "track^[HTMLElement]|!default,kind,label,src,srclang", "ul^[HTMLElement]|!compact,type", "unknown^[HTMLElement]|", "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width", ":svg:a^:svg:graphics|", ":svg:animate^:svg:animation|", ":svg:animateMotion^:svg:animation|", ":svg:animateTransform^:svg:animation|", ":svg:circle^:svg:geometry|", ":svg:clipPath^:svg:graphics|", ":svg:defs^:svg:graphics|", ":svg:desc^:svg:|", ":svg:discard^:svg:|", ":svg:ellipse^:svg:geometry|", ":svg:feBlend^:svg:|", ":svg:feColorMatrix^:svg:|", ":svg:feComponentTransfer^:svg:|", ":svg:feComposite^:svg:|", ":svg:feConvolveMatrix^:svg:|", ":svg:feDiffuseLighting^:svg:|", ":svg:feDisplacementMap^:svg:|", ":svg:feDistantLight^:svg:|", ":svg:feDropShadow^:svg:|", ":svg:feFlood^:svg:|", ":svg:feFuncA^:svg:componentTransferFunction|", ":svg:feFuncB^:svg:componentTransferFunction|", ":svg:feFuncG^:svg:componentTransferFunction|", ":svg:feFuncR^:svg:componentTransferFunction|", ":svg:feGaussianBlur^:svg:|", ":svg:feImage^:svg:|", ":svg:feMerge^:svg:|", ":svg:feMergeNode^:svg:|", ":svg:feMorphology^:svg:|", ":svg:feOffset^:svg:|", ":svg:fePointLight^:svg:|", ":svg:feSpecularLighting^:svg:|", ":svg:feSpotLight^:svg:|", ":svg:feTile^:svg:|", ":svg:feTurbulence^:svg:|", ":svg:filter^:svg:|", ":svg:foreignObject^:svg:graphics|", ":svg:g^:svg:graphics|", ":svg:image^:svg:graphics|decoding", ":svg:line^:svg:geometry|", ":svg:linearGradient^:svg:gradient|", ":svg:mpath^:svg:|", ":svg:marker^:svg:|", ":svg:mask^:svg:|", ":svg:metadata^:svg:|", ":svg:path^:svg:geometry|", ":svg:pattern^:svg:|", ":svg:polygon^:svg:geometry|", ":svg:polyline^:svg:geometry|", ":svg:radialGradient^:svg:gradient|", ":svg:rect^:svg:geometry|", ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan", ":svg:script^:svg:|type", ":svg:set^:svg:animation|", ":svg:stop^:svg:|", ":svg:style^:svg:|!disabled,media,title,type", ":svg:switch^:svg:graphics|", ":svg:symbol^:svg:|", ":svg:tspan^:svg:textPositioning|", ":svg:text^:svg:textPositioning|", ":svg:textPath^:svg:textContent|", ":svg:title^:svg:|", ":svg:use^:svg:graphics|", ":svg:view^:svg:|#zoomAndPan", "data^[HTMLElement]|value", "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name", "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default", "summary^[HTMLElement]|", "time^[HTMLElement]|dateTime", ":svg:cursor^:svg:|", ":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":math:math^:math:|", ":math:maction^:math:|", ":math:menclose^:math:|", ":math:merror^:math:|", ":math:mfenced^:math:|", ":math:mfrac^:math:|", ":math:mi^:math:|", ":math:mmultiscripts^:math:|", ":math:mn^:math:|", ":math:mo^:math:|", ":math:mover^:math:|", ":math:mpadded^:math:|", ":math:mphantom^:math:|", ":math:mroot^:math:|", ":math:mrow^:math:|", ":math:ms^:math:|", ":math:mspace^:math:|", ":math:msqrt^:math:|", ":math:mstyle^:math:|", ":math:msub^:math:|", ":math:msubsup^:math:|", ":math:msup^:math:|", ":math:mtable^:math:|", ":math:mtd^:math:|", ":math:mtext^:math:|", ":math:mtr^:math:|", ":math:munder^:math:|", ":math:munderover^:math:|", ":math:semantics^:math:|"];
var Is = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" }));
var ja = Array.from(Is).reduce((t7, [e, r]) => (t7.set(e, r), t7), /* @__PURE__ */ new Map());
var Vt2 = class extends Ht2 {
  constructor() {
    super(), this._schema = /* @__PURE__ */ new Map(), this._eventSchema = /* @__PURE__ */ new Map(), Ya.forEach((e) => {
      let r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), [s, i] = e.split("|"), a = i.split(","), [o, u] = s.split("^");
      o.split(",").forEach((l) => {
        this._schema.set(l.toLowerCase(), r), this._eventSchema.set(l.toLowerCase(), n);
      });
      let p = u && this._schema.get(u.toLowerCase());
      if (p) {
        for (let [l, f] of p) r.set(l, f);
        for (let l of this._eventSchema.get(u.toLowerCase())) n.add(l);
      }
      a.forEach((l) => {
        if (l.length > 0) switch (l[0]) {
          case "*":
            n.add(l.substring(1));
            break;
          case "!":
            r.set(l.substring(1), Ua);
            break;
          case "#":
            r.set(l.substring(1), Wa);
            break;
          case "%":
            r.set(l.substring(1), Ga);
            break;
          default:
            r.set(l, za);
        }
      });
    });
  }
  hasProperty(e, r, n) {
    if (n.some((i) => i.name === Fr2.name)) return true;
    if (e.indexOf("-") > -1) {
      if (Nr2(e) || Pr2(e)) return false;
      if (n.some((i) => i.name === Lr2.name)) return true;
    }
    return (this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).has(r);
  }
  hasElement(e, r) {
    return r.some((n) => n.name === Fr2.name) || e.indexOf("-") > -1 && (Nr2(e) || Pr2(e) || r.some((n) => n.name === Lr2.name)) ? true : this._schema.has(e.toLowerCase());
  }
  securityContext(e, r, n) {
    n && (r = this.getMappedPropName(r)), e = e.toLowerCase(), r = r.toLowerCase();
    let s = Ir2()[e + "|" + r];
    return s || (s = Ir2()["*|" + r], s || ee2.NONE);
  }
  getMappedPropName(e) {
    return Is.get(e) ?? e;
  }
  getDefaultComponentElementName() {
    return "ng-component";
  }
  validateProperty(e) {
    return e.toLowerCase().startsWith("on") ? { error: true, msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.` } : { error: false };
  }
  validateAttribute(e) {
    return e.toLowerCase().startsWith("on") ? { error: true, msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...` } : { error: false };
  }
  allKnownElementNames() {
    return Array.from(this._schema.keys());
  }
  allKnownAttributesOfElement(e) {
    let r = this._schema.get(e.toLowerCase()) || this._schema.get("unknown");
    return Array.from(r.keys()).map((n) => ja.get(n) ?? n);
  }
  allKnownEventsOfElement(e) {
    return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
  }
  normalizeAnimationStyleProperty(e) {
    return ws(e);
  }
  normalizeAnimationStyleValue(e, r, n) {
    let s = "", i = n.toString().trim(), a = null;
    if (Ka(e) && n !== 0 && n !== "0") if (typeof n == "number") s = "px";
    else {
      let o = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
      o && o[1].length == 0 && (a = `Please provide a CSS unit value for ${r}:${n}`);
    }
    return { error: a, value: i + s };
  }
};
function Ka(t7) {
  switch (t7) {
    case "width":
    case "height":
    case "minWidth":
    case "minHeight":
    case "maxWidth":
    case "maxHeight":
    case "left":
    case "top":
    case "bottom":
    case "right":
    case "fontSize":
    case "outlineWidth":
    case "outlineOffset":
    case "paddingTop":
    case "paddingLeft":
    case "paddingBottom":
    case "paddingRight":
    case "marginTop":
    case "marginLeft":
    case "marginBottom":
    case "marginRight":
    case "borderRadius":
    case "borderWidth":
    case "borderTopWidth":
    case "borderLeftWidth":
    case "borderRightWidth":
    case "borderBottomWidth":
    case "textIndent":
      return true;
    default:
      return false;
  }
}
var m = class {
  constructor({ closedByChildren: e, implicitNamespacePrefix: r, contentType: n = P2.PARSABLE_DATA, closedByParent: s = false, isVoid: i = false, ignoreFirstLf: a = false, preventNamespaceInheritance: o = false, canSelfClose: u = false } = {}) {
    this.closedByChildren = {}, this.closedByParent = false, e && e.length > 0 && e.forEach((p) => this.closedByChildren[p] = true), this.isVoid = i, this.closedByParent = s || i, this.implicitNamespacePrefix = r || null, this.contentType = n, this.ignoreFirstLf = a, this.preventNamespaceInheritance = o, this.canSelfClose = u ?? i;
  }
  isClosedByChild(e) {
    return this.isVoid || e.toLowerCase() in this.closedByChildren;
  }
  getContentType(e) {
    return typeof this.contentType == "object" ? (e === void 0 ? void 0 : this.contentType[e]) ?? this.contentType.default : this.contentType;
  }
};
var Rs;
var pt2;
function He2(t7) {
  return pt2 || (Rs = new m({ canSelfClose: true }), pt2 = Object.assign(/* @__PURE__ */ Object.create(null), { base: new m({ isVoid: true }), meta: new m({ isVoid: true }), area: new m({ isVoid: true }), embed: new m({ isVoid: true }), link: new m({ isVoid: true }), img: new m({ isVoid: true }), input: new m({ isVoid: true }), param: new m({ isVoid: true }), hr: new m({ isVoid: true }), br: new m({ isVoid: true }), source: new m({ isVoid: true }), track: new m({ isVoid: true }), wbr: new m({ isVoid: true }), p: new m({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new m({ closedByChildren: ["tbody", "tfoot"] }), tbody: new m({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new m({ closedByChildren: ["tbody"], closedByParent: true }), tr: new m({ closedByChildren: ["tr"], closedByParent: true }), td: new m({ closedByChildren: ["td", "th"], closedByParent: true }), th: new m({ closedByChildren: ["td", "th"], closedByParent: true }), col: new m({ isVoid: true }), svg: new m({ implicitNamespacePrefix: "svg" }), foreignObject: new m({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: true }), math: new m({ implicitNamespacePrefix: "math" }), li: new m({ closedByChildren: ["li"], closedByParent: true }), dt: new m({ closedByChildren: ["dt", "dd"] }), dd: new m({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new m({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new m({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new m({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new m({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new m({ closedByChildren: ["optgroup"], closedByParent: true }), option: new m({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new m({ ignoreFirstLf: true }), listing: new m({ ignoreFirstLf: true }), style: new m({ contentType: P2.RAW_TEXT }), script: new m({ contentType: P2.RAW_TEXT }), title: new m({ contentType: { default: P2.ESCAPABLE_RAW_TEXT, svg: P2.PARSABLE_DATA } }), textarea: new m({ contentType: P2.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }) }), new Vt2().allKnownElementNames().forEach((e) => {
    !pt2[e] && Me2(e) === null && (pt2[e] = new m({ canSelfClose: false }));
  })), pt2[t7] ?? Rs;
}
var ae = class {
  constructor(e, r) {
    this.sourceSpan = e, this.i18n = r;
  }
};
var Ut2 = class extends ae {
  constructor(e, r, n, s) {
    super(r, s), this.value = e, this.tokens = n, this.type = "text";
  }
  visit(e, r) {
    return e.visitText(this, r);
  }
};
var Wt2 = class extends ae {
  constructor(e, r, n, s) {
    super(r, s), this.value = e, this.tokens = n, this.type = "cdata";
  }
  visit(e, r) {
    return e.visitCdata(this, r);
  }
};
var zt2 = class extends ae {
  constructor(e, r, n, s, i, a) {
    super(s, a), this.switchValue = e, this.type = r, this.cases = n, this.switchValueSourceSpan = i;
  }
  visit(e, r) {
    return e.visitExpansion(this, r);
  }
};
var Gt2 = class {
  constructor(e, r, n, s, i) {
    this.value = e, this.expression = r, this.sourceSpan = n, this.valueSourceSpan = s, this.expSourceSpan = i, this.type = "expansionCase";
  }
  visit(e, r) {
    return e.visitExpansionCase(this, r);
  }
};
var Yt2 = class extends ae {
  constructor(e, r, n, s, i, a, o) {
    super(n, o), this.name = e, this.value = r, this.keySpan = s, this.valueSpan = i, this.valueTokens = a, this.type = "attribute";
  }
  visit(e, r) {
    return e.visitAttribute(this, r);
  }
  get nameSpan() {
    return this.keySpan;
  }
};
var Y2 = class extends ae {
  constructor(e, r, n, s, i, a = null, o = null, u) {
    super(s, u), this.name = e, this.attrs = r, this.children = n, this.startSourceSpan = i, this.endSourceSpan = a, this.nameSpan = o, this.type = "element";
  }
  visit(e, r) {
    return e.visitElement(this, r);
  }
};
var jt2 = class {
  constructor(e, r) {
    this.value = e, this.sourceSpan = r, this.type = "comment";
  }
  visit(e, r) {
    return e.visitComment(this, r);
  }
};
var Kt2 = class {
  constructor(e, r) {
    this.value = e, this.sourceSpan = r, this.type = "docType";
  }
  visit(e, r) {
    return e.visitDocType(this, r);
  }
};
var te2 = class extends ae {
  constructor(e, r, n, s, i, a, o = null, u) {
    super(s, u), this.name = e, this.parameters = r, this.children = n, this.nameSpan = i, this.startSourceSpan = a, this.endSourceSpan = o, this.type = "block";
  }
  visit(e, r) {
    return e.visitBlock(this, r);
  }
};
var ht2 = class {
  constructor(e, r) {
    this.expression = e, this.sourceSpan = r, this.type = "blockParameter", this.startSourceSpan = null, this.endSourceSpan = null;
  }
  visit(e, r) {
    return e.visitBlockParameter(this, r);
  }
};
var ft2 = class {
  constructor(e, r, n, s, i) {
    this.name = e, this.value = r, this.sourceSpan = n, this.nameSpan = s, this.valueSpan = i, this.type = "letDeclaration", this.startSourceSpan = null, this.endSourceSpan = null;
  }
  visit(e, r) {
    return e.visitLetDeclaration(this, r);
  }
};
function Qt2(t7, e, r = null) {
  let n = [], s = t7.visit ? (i) => t7.visit(i, r) || i.visit(t7, r) : (i) => i.visit(t7, r);
  return e.forEach((i) => {
    let a = s(i);
    a && n.push(a);
  }), n;
}
var mt2 = class {
  constructor() {
  }
  visitElement(e, r) {
    this.visitChildren(r, (n) => {
      n(e.attrs), n(e.children);
    });
  }
  visitAttribute(e, r) {
  }
  visitText(e, r) {
  }
  visitCdata(e, r) {
  }
  visitComment(e, r) {
  }
  visitDocType(e, r) {
  }
  visitExpansion(e, r) {
    return this.visitChildren(r, (n) => {
      n(e.cases);
    });
  }
  visitExpansionCase(e, r) {
  }
  visitBlock(e, r) {
    this.visitChildren(r, (n) => {
      n(e.parameters), n(e.children);
    });
  }
  visitBlockParameter(e, r) {
  }
  visitLetDeclaration(e, r) {
  }
  visitChildren(e, r) {
    let n = [], s = this;
    function i(a) {
      a && n.push(Qt2(s, a, e));
    }
    return r(i), Array.prototype.concat.apply([], n);
  }
};
var Ve2 = { AElig: "\xC6", AMP: "&", amp: "&", Aacute: "\xC1", Abreve: "\u0102", Acirc: "\xC2", Acy: "\u0410", Afr: "\u{1D504}", Agrave: "\xC0", Alpha: "\u0391", Amacr: "\u0100", And: "\u2A53", Aogon: "\u0104", Aopf: "\u{1D538}", ApplyFunction: "\u2061", af: "\u2061", Aring: "\xC5", angst: "\xC5", Ascr: "\u{1D49C}", Assign: "\u2254", colone: "\u2254", coloneq: "\u2254", Atilde: "\xC3", Auml: "\xC4", Backslash: "\u2216", setminus: "\u2216", setmn: "\u2216", smallsetminus: "\u2216", ssetmn: "\u2216", Barv: "\u2AE7", Barwed: "\u2306", doublebarwedge: "\u2306", Bcy: "\u0411", Because: "\u2235", becaus: "\u2235", because: "\u2235", Bernoullis: "\u212C", Bscr: "\u212C", bernou: "\u212C", Beta: "\u0392", Bfr: "\u{1D505}", Bopf: "\u{1D539}", Breve: "\u02D8", breve: "\u02D8", Bumpeq: "\u224E", HumpDownHump: "\u224E", bump: "\u224E", CHcy: "\u0427", COPY: "\xA9", copy: "\xA9", Cacute: "\u0106", Cap: "\u22D2", CapitalDifferentialD: "\u2145", DD: "\u2145", Cayleys: "\u212D", Cfr: "\u212D", Ccaron: "\u010C", Ccedil: "\xC7", Ccirc: "\u0108", Cconint: "\u2230", Cdot: "\u010A", Cedilla: "\xB8", cedil: "\xB8", CenterDot: "\xB7", centerdot: "\xB7", middot: "\xB7", Chi: "\u03A7", CircleDot: "\u2299", odot: "\u2299", CircleMinus: "\u2296", ominus: "\u2296", CirclePlus: "\u2295", oplus: "\u2295", CircleTimes: "\u2297", otimes: "\u2297", ClockwiseContourIntegral: "\u2232", cwconint: "\u2232", CloseCurlyDoubleQuote: "\u201D", rdquo: "\u201D", rdquor: "\u201D", CloseCurlyQuote: "\u2019", rsquo: "\u2019", rsquor: "\u2019", Colon: "\u2237", Proportion: "\u2237", Colone: "\u2A74", Congruent: "\u2261", equiv: "\u2261", Conint: "\u222F", DoubleContourIntegral: "\u222F", ContourIntegral: "\u222E", conint: "\u222E", oint: "\u222E", Copf: "\u2102", complexes: "\u2102", Coproduct: "\u2210", coprod: "\u2210", CounterClockwiseContourIntegral: "\u2233", awconint: "\u2233", Cross: "\u2A2F", Cscr: "\u{1D49E}", Cup: "\u22D3", CupCap: "\u224D", asympeq: "\u224D", DDotrahd: "\u2911", DJcy: "\u0402", DScy: "\u0405", DZcy: "\u040F", Dagger: "\u2021", ddagger: "\u2021", Darr: "\u21A1", Dashv: "\u2AE4", DoubleLeftTee: "\u2AE4", Dcaron: "\u010E", Dcy: "\u0414", Del: "\u2207", nabla: "\u2207", Delta: "\u0394", Dfr: "\u{1D507}", DiacriticalAcute: "\xB4", acute: "\xB4", DiacriticalDot: "\u02D9", dot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", dblac: "\u02DD", DiacriticalGrave: "`", grave: "`", DiacriticalTilde: "\u02DC", tilde: "\u02DC", Diamond: "\u22C4", diam: "\u22C4", diamond: "\u22C4", DifferentialD: "\u2146", dd: "\u2146", Dopf: "\u{1D53B}", Dot: "\xA8", DoubleDot: "\xA8", die: "\xA8", uml: "\xA8", DotDot: "\u20DC", DotEqual: "\u2250", doteq: "\u2250", esdot: "\u2250", DoubleDownArrow: "\u21D3", Downarrow: "\u21D3", dArr: "\u21D3", DoubleLeftArrow: "\u21D0", Leftarrow: "\u21D0", lArr: "\u21D0", DoubleLeftRightArrow: "\u21D4", Leftrightarrow: "\u21D4", hArr: "\u21D4", iff: "\u21D4", DoubleLongLeftArrow: "\u27F8", Longleftarrow: "\u27F8", xlArr: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", Longleftrightarrow: "\u27FA", xhArr: "\u27FA", DoubleLongRightArrow: "\u27F9", Longrightarrow: "\u27F9", xrArr: "\u27F9", DoubleRightArrow: "\u21D2", Implies: "\u21D2", Rightarrow: "\u21D2", rArr: "\u21D2", DoubleRightTee: "\u22A8", vDash: "\u22A8", DoubleUpArrow: "\u21D1", Uparrow: "\u21D1", uArr: "\u21D1", DoubleUpDownArrow: "\u21D5", Updownarrow: "\u21D5", vArr: "\u21D5", DoubleVerticalBar: "\u2225", par: "\u2225", parallel: "\u2225", shortparallel: "\u2225", spar: "\u2225", DownArrow: "\u2193", ShortDownArrow: "\u2193", darr: "\u2193", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", duarr: "\u21F5", DownBreve: "\u0311", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", leftharpoondown: "\u21BD", lhard: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", rhard: "\u21C1", rightharpoondown: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", top: "\u22A4", DownTeeArrow: "\u21A7", mapstodown: "\u21A7", Dscr: "\u{1D49F}", Dstrok: "\u0110", ENG: "\u014A", ETH: "\xD0", Eacute: "\xC9", Ecaron: "\u011A", Ecirc: "\xCA", Ecy: "\u042D", Edot: "\u0116", Efr: "\u{1D508}", Egrave: "\xC8", Element: "\u2208", in: "\u2208", isin: "\u2208", isinv: "\u2208", Emacr: "\u0112", EmptySmallSquare: "\u25FB", EmptyVerySmallSquare: "\u25AB", Eogon: "\u0118", Eopf: "\u{1D53C}", Epsilon: "\u0395", Equal: "\u2A75", EqualTilde: "\u2242", eqsim: "\u2242", esim: "\u2242", Equilibrium: "\u21CC", rightleftharpoons: "\u21CC", rlhar: "\u21CC", Escr: "\u2130", expectation: "\u2130", Esim: "\u2A73", Eta: "\u0397", Euml: "\xCB", Exists: "\u2203", exist: "\u2203", ExponentialE: "\u2147", ee: "\u2147", exponentiale: "\u2147", Fcy: "\u0424", Ffr: "\u{1D509}", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", blacksquare: "\u25AA", squarf: "\u25AA", squf: "\u25AA", Fopf: "\u{1D53D}", ForAll: "\u2200", forall: "\u2200", Fouriertrf: "\u2131", Fscr: "\u2131", GJcy: "\u0403", GT: ">", gt: ">", Gamma: "\u0393", Gammad: "\u03DC", Gbreve: "\u011E", Gcedil: "\u0122", Gcirc: "\u011C", Gcy: "\u0413", Gdot: "\u0120", Gfr: "\u{1D50A}", Gg: "\u22D9", ggg: "\u22D9", Gopf: "\u{1D53E}", GreaterEqual: "\u2265", ge: "\u2265", geq: "\u2265", GreaterEqualLess: "\u22DB", gel: "\u22DB", gtreqless: "\u22DB", GreaterFullEqual: "\u2267", gE: "\u2267", geqq: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", gl: "\u2277", gtrless: "\u2277", GreaterSlantEqual: "\u2A7E", geqslant: "\u2A7E", ges: "\u2A7E", GreaterTilde: "\u2273", gsim: "\u2273", gtrsim: "\u2273", Gscr: "\u{1D4A2}", Gt: "\u226B", NestedGreaterGreater: "\u226B", gg: "\u226B", HARDcy: "\u042A", Hacek: "\u02C7", caron: "\u02C7", Hat: "^", Hcirc: "\u0124", Hfr: "\u210C", Poincareplane: "\u210C", HilbertSpace: "\u210B", Hscr: "\u210B", hamilt: "\u210B", Hopf: "\u210D", quaternions: "\u210D", HorizontalLine: "\u2500", boxh: "\u2500", Hstrok: "\u0126", HumpEqual: "\u224F", bumpe: "\u224F", bumpeq: "\u224F", IEcy: "\u0415", IJlig: "\u0132", IOcy: "\u0401", Iacute: "\xCD", Icirc: "\xCE", Icy: "\u0418", Idot: "\u0130", Ifr: "\u2111", Im: "\u2111", image: "\u2111", imagpart: "\u2111", Igrave: "\xCC", Imacr: "\u012A", ImaginaryI: "\u2148", ii: "\u2148", Int: "\u222C", Integral: "\u222B", int: "\u222B", Intersection: "\u22C2", bigcap: "\u22C2", xcap: "\u22C2", InvisibleComma: "\u2063", ic: "\u2063", InvisibleTimes: "\u2062", it: "\u2062", Iogon: "\u012E", Iopf: "\u{1D540}", Iota: "\u0399", Iscr: "\u2110", imagline: "\u2110", Itilde: "\u0128", Iukcy: "\u0406", Iuml: "\xCF", Jcirc: "\u0134", Jcy: "\u0419", Jfr: "\u{1D50D}", Jopf: "\u{1D541}", Jscr: "\u{1D4A5}", Jsercy: "\u0408", Jukcy: "\u0404", KHcy: "\u0425", KJcy: "\u040C", Kappa: "\u039A", Kcedil: "\u0136", Kcy: "\u041A", Kfr: "\u{1D50E}", Kopf: "\u{1D542}", Kscr: "\u{1D4A6}", LJcy: "\u0409", LT: "<", lt: "<", Lacute: "\u0139", Lambda: "\u039B", Lang: "\u27EA", Laplacetrf: "\u2112", Lscr: "\u2112", lagran: "\u2112", Larr: "\u219E", twoheadleftarrow: "\u219E", Lcaron: "\u013D", Lcedil: "\u013B", Lcy: "\u041B", LeftAngleBracket: "\u27E8", lang: "\u27E8", langle: "\u27E8", LeftArrow: "\u2190", ShortLeftArrow: "\u2190", larr: "\u2190", leftarrow: "\u2190", slarr: "\u2190", LeftArrowBar: "\u21E4", larrb: "\u21E4", LeftArrowRightArrow: "\u21C6", leftrightarrows: "\u21C6", lrarr: "\u21C6", LeftCeiling: "\u2308", lceil: "\u2308", LeftDoubleBracket: "\u27E6", lobrk: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", dharl: "\u21C3", downharpoonleft: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", lfloor: "\u230A", LeftRightArrow: "\u2194", harr: "\u2194", leftrightarrow: "\u2194", LeftRightVector: "\u294E", LeftTee: "\u22A3", dashv: "\u22A3", LeftTeeArrow: "\u21A4", mapstoleft: "\u21A4", LeftTeeVector: "\u295A", LeftTriangle: "\u22B2", vartriangleleft: "\u22B2", vltri: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", ltrie: "\u22B4", trianglelefteq: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", uharl: "\u21BF", upharpoonleft: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", leftharpoonup: "\u21BC", lharu: "\u21BC", LeftVectorBar: "\u2952", LessEqualGreater: "\u22DA", leg: "\u22DA", lesseqgtr: "\u22DA", LessFullEqual: "\u2266", lE: "\u2266", leqq: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", lg: "\u2276", LessLess: "\u2AA1", LessSlantEqual: "\u2A7D", leqslant: "\u2A7D", les: "\u2A7D", LessTilde: "\u2272", lesssim: "\u2272", lsim: "\u2272", Lfr: "\u{1D50F}", Ll: "\u22D8", Lleftarrow: "\u21DA", lAarr: "\u21DA", Lmidot: "\u013F", LongLeftArrow: "\u27F5", longleftarrow: "\u27F5", xlarr: "\u27F5", LongLeftRightArrow: "\u27F7", longleftrightarrow: "\u27F7", xharr: "\u27F7", LongRightArrow: "\u27F6", longrightarrow: "\u27F6", xrarr: "\u27F6", Lopf: "\u{1D543}", LowerLeftArrow: "\u2199", swarr: "\u2199", swarrow: "\u2199", LowerRightArrow: "\u2198", searr: "\u2198", searrow: "\u2198", Lsh: "\u21B0", lsh: "\u21B0", Lstrok: "\u0141", Lt: "\u226A", NestedLessLess: "\u226A", ll: "\u226A", Map: "\u2905", Mcy: "\u041C", MediumSpace: "\u205F", Mellintrf: "\u2133", Mscr: "\u2133", phmmat: "\u2133", Mfr: "\u{1D510}", MinusPlus: "\u2213", mnplus: "\u2213", mp: "\u2213", Mopf: "\u{1D544}", Mu: "\u039C", NJcy: "\u040A", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041D", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", ZeroWidthSpace: "\u200B", NewLine: `
`, Nfr: "\u{1D511}", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nbsp: "\xA0", Nopf: "\u2115", naturals: "\u2115", Not: "\u2AEC", NotCongruent: "\u2262", nequiv: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", npar: "\u2226", nparallel: "\u2226", nshortparallel: "\u2226", nspar: "\u2226", NotElement: "\u2209", notin: "\u2209", notinva: "\u2209", NotEqual: "\u2260", ne: "\u2260", NotEqualTilde: "\u2242\u0338", nesim: "\u2242\u0338", NotExists: "\u2204", nexist: "\u2204", nexists: "\u2204", NotGreater: "\u226F", ngt: "\u226F", ngtr: "\u226F", NotGreaterEqual: "\u2271", nge: "\u2271", ngeq: "\u2271", NotGreaterFullEqual: "\u2267\u0338", ngE: "\u2267\u0338", ngeqq: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", nGtv: "\u226B\u0338", NotGreaterLess: "\u2279", ntgl: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", NotGreaterTilde: "\u2275", ngsim: "\u2275", NotHumpDownHump: "\u224E\u0338", nbump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", nbumpe: "\u224F\u0338", NotLeftTriangle: "\u22EA", nltri: "\u22EA", ntriangleleft: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", nltrie: "\u22EC", ntrianglelefteq: "\u22EC", NotLess: "\u226E", nless: "\u226E", nlt: "\u226E", NotLessEqual: "\u2270", nle: "\u2270", nleq: "\u2270", NotLessGreater: "\u2278", ntlg: "\u2278", NotLessLess: "\u226A\u0338", nLtv: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", NotLessTilde: "\u2274", nlsim: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", NotPrecedes: "\u2280", npr: "\u2280", nprec: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", npre: "\u2AAF\u0338", npreceq: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", nprcue: "\u22E0", NotReverseElement: "\u220C", notni: "\u220C", notniva: "\u220C", NotRightTriangle: "\u22EB", nrtri: "\u22EB", ntriangleright: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", nrtrie: "\u22ED", ntrianglerighteq: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", nsqsube: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", nsqsupe: "\u22E3", NotSubset: "\u2282\u20D2", nsubset: "\u2282\u20D2", vnsub: "\u2282\u20D2", NotSubsetEqual: "\u2288", nsube: "\u2288", nsubseteq: "\u2288", NotSucceeds: "\u2281", nsc: "\u2281", nsucc: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", nsce: "\u2AB0\u0338", nsucceq: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", nsccue: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", nsupset: "\u2283\u20D2", vnsup: "\u2283\u20D2", NotSupersetEqual: "\u2289", nsupe: "\u2289", nsupseteq: "\u2289", NotTilde: "\u2241", nsim: "\u2241", NotTildeEqual: "\u2244", nsime: "\u2244", nsimeq: "\u2244", NotTildeFullEqual: "\u2247", ncong: "\u2247", NotTildeTilde: "\u2249", nap: "\u2249", napprox: "\u2249", NotVerticalBar: "\u2224", nmid: "\u2224", nshortmid: "\u2224", nsmid: "\u2224", Nscr: "\u{1D4A9}", Ntilde: "\xD1", Nu: "\u039D", OElig: "\u0152", Oacute: "\xD3", Ocirc: "\xD4", Ocy: "\u041E", Odblac: "\u0150", Ofr: "\u{1D512}", Ograve: "\xD2", Omacr: "\u014C", Omega: "\u03A9", ohm: "\u03A9", Omicron: "\u039F", Oopf: "\u{1D546}", OpenCurlyDoubleQuote: "\u201C", ldquo: "\u201C", OpenCurlyQuote: "\u2018", lsquo: "\u2018", Or: "\u2A54", Oscr: "\u{1D4AA}", Oslash: "\xD8", Otilde: "\xD5", Otimes: "\u2A37", Ouml: "\xD6", OverBar: "\u203E", oline: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", tbrk: "\u23B4", OverParenthesis: "\u23DC", PartialD: "\u2202", part: "\u2202", Pcy: "\u041F", Pfr: "\u{1D513}", Phi: "\u03A6", Pi: "\u03A0", PlusMinus: "\xB1", plusmn: "\xB1", pm: "\xB1", Popf: "\u2119", primes: "\u2119", Pr: "\u2ABB", Precedes: "\u227A", pr: "\u227A", prec: "\u227A", PrecedesEqual: "\u2AAF", pre: "\u2AAF", preceq: "\u2AAF", PrecedesSlantEqual: "\u227C", prcue: "\u227C", preccurlyeq: "\u227C", PrecedesTilde: "\u227E", precsim: "\u227E", prsim: "\u227E", Prime: "\u2033", Product: "\u220F", prod: "\u220F", Proportional: "\u221D", prop: "\u221D", propto: "\u221D", varpropto: "\u221D", vprop: "\u221D", Pscr: "\u{1D4AB}", Psi: "\u03A8", QUOT: '"', quot: '"', Qfr: "\u{1D514}", Qopf: "\u211A", rationals: "\u211A", Qscr: "\u{1D4AC}", RBarr: "\u2910", drbkarow: "\u2910", REG: "\xAE", circledR: "\xAE", reg: "\xAE", Racute: "\u0154", Rang: "\u27EB", Rarr: "\u21A0", twoheadrightarrow: "\u21A0", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", Re: "\u211C", Rfr: "\u211C", real: "\u211C", realpart: "\u211C", ReverseElement: "\u220B", SuchThat: "\u220B", ni: "\u220B", niv: "\u220B", ReverseEquilibrium: "\u21CB", leftrightharpoons: "\u21CB", lrhar: "\u21CB", ReverseUpEquilibrium: "\u296F", duhar: "\u296F", Rho: "\u03A1", RightAngleBracket: "\u27E9", rang: "\u27E9", rangle: "\u27E9", RightArrow: "\u2192", ShortRightArrow: "\u2192", rarr: "\u2192", rightarrow: "\u2192", srarr: "\u2192", RightArrowBar: "\u21E5", rarrb: "\u21E5", RightArrowLeftArrow: "\u21C4", rightleftarrows: "\u21C4", rlarr: "\u21C4", RightCeiling: "\u2309", rceil: "\u2309", RightDoubleBracket: "\u27E7", robrk: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", dharr: "\u21C2", downharpoonright: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rfloor: "\u230B", RightTee: "\u22A2", vdash: "\u22A2", RightTeeArrow: "\u21A6", map: "\u21A6", mapsto: "\u21A6", RightTeeVector: "\u295B", RightTriangle: "\u22B3", vartriangleright: "\u22B3", vrtri: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", rtrie: "\u22B5", trianglerighteq: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", uharr: "\u21BE", upharpoonright: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", rharu: "\u21C0", rightharpoonup: "\u21C0", RightVectorBar: "\u2953", Ropf: "\u211D", reals: "\u211D", RoundImplies: "\u2970", Rrightarrow: "\u21DB", rAarr: "\u21DB", Rscr: "\u211B", realine: "\u211B", Rsh: "\u21B1", rsh: "\u21B1", RuleDelayed: "\u29F4", SHCHcy: "\u0429", SHcy: "\u0428", SOFTcy: "\u042C", Sacute: "\u015A", Sc: "\u2ABC", Scaron: "\u0160", Scedil: "\u015E", Scirc: "\u015C", Scy: "\u0421", Sfr: "\u{1D516}", ShortUpArrow: "\u2191", UpArrow: "\u2191", uarr: "\u2191", uparrow: "\u2191", Sigma: "\u03A3", SmallCircle: "\u2218", compfn: "\u2218", Sopf: "\u{1D54A}", Sqrt: "\u221A", radic: "\u221A", Square: "\u25A1", squ: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", sqcap: "\u2293", SquareSubset: "\u228F", sqsub: "\u228F", sqsubset: "\u228F", SquareSubsetEqual: "\u2291", sqsube: "\u2291", sqsubseteq: "\u2291", SquareSuperset: "\u2290", sqsup: "\u2290", sqsupset: "\u2290", SquareSupersetEqual: "\u2292", sqsupe: "\u2292", sqsupseteq: "\u2292", SquareUnion: "\u2294", sqcup: "\u2294", Sscr: "\u{1D4AE}", Star: "\u22C6", sstarf: "\u22C6", Sub: "\u22D0", Subset: "\u22D0", SubsetEqual: "\u2286", sube: "\u2286", subseteq: "\u2286", Succeeds: "\u227B", sc: "\u227B", succ: "\u227B", SucceedsEqual: "\u2AB0", sce: "\u2AB0", succeq: "\u2AB0", SucceedsSlantEqual: "\u227D", sccue: "\u227D", succcurlyeq: "\u227D", SucceedsTilde: "\u227F", scsim: "\u227F", succsim: "\u227F", Sum: "\u2211", sum: "\u2211", Sup: "\u22D1", Supset: "\u22D1", Superset: "\u2283", sup: "\u2283", supset: "\u2283", SupersetEqual: "\u2287", supe: "\u2287", supseteq: "\u2287", THORN: "\xDE", TRADE: "\u2122", trade: "\u2122", TSHcy: "\u040B", TScy: "\u0426", Tab: "	", Tau: "\u03A4", Tcaron: "\u0164", Tcedil: "\u0162", Tcy: "\u0422", Tfr: "\u{1D517}", Therefore: "\u2234", there4: "\u2234", therefore: "\u2234", Theta: "\u0398", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", Tilde: "\u223C", sim: "\u223C", thicksim: "\u223C", thksim: "\u223C", TildeEqual: "\u2243", sime: "\u2243", simeq: "\u2243", TildeFullEqual: "\u2245", cong: "\u2245", TildeTilde: "\u2248", ap: "\u2248", approx: "\u2248", asymp: "\u2248", thickapprox: "\u2248", thkap: "\u2248", Topf: "\u{1D54B}", TripleDot: "\u20DB", tdot: "\u20DB", Tscr: "\u{1D4AF}", Tstrok: "\u0166", Uacute: "\xDA", Uarr: "\u219F", Uarrocir: "\u2949", Ubrcy: "\u040E", Ubreve: "\u016C", Ucirc: "\xDB", Ucy: "\u0423", Udblac: "\u0170", Ufr: "\u{1D518}", Ugrave: "\xD9", Umacr: "\u016A", UnderBar: "_", lowbar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", bbrk: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", bigcup: "\u22C3", xcup: "\u22C3", UnionPlus: "\u228E", uplus: "\u228E", Uogon: "\u0172", Uopf: "\u{1D54C}", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", udarr: "\u21C5", UpDownArrow: "\u2195", updownarrow: "\u2195", varr: "\u2195", UpEquilibrium: "\u296E", udhar: "\u296E", UpTee: "\u22A5", bot: "\u22A5", bottom: "\u22A5", perp: "\u22A5", UpTeeArrow: "\u21A5", mapstoup: "\u21A5", UpperLeftArrow: "\u2196", nwarr: "\u2196", nwarrow: "\u2196", UpperRightArrow: "\u2197", nearr: "\u2197", nearrow: "\u2197", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", Uring: "\u016E", Uscr: "\u{1D4B0}", Utilde: "\u0168", Uuml: "\xDC", VDash: "\u22AB", Vbar: "\u2AEB", Vcy: "\u0412", Vdash: "\u22A9", Vdashl: "\u2AE6", Vee: "\u22C1", bigvee: "\u22C1", xvee: "\u22C1", Verbar: "\u2016", Vert: "\u2016", VerticalBar: "\u2223", mid: "\u2223", shortmid: "\u2223", smid: "\u2223", VerticalLine: "|", verbar: "|", vert: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", wr: "\u2240", wreath: "\u2240", VeryThinSpace: "\u200A", hairsp: "\u200A", Vfr: "\u{1D519}", Vopf: "\u{1D54D}", Vscr: "\u{1D4B1}", Vvdash: "\u22AA", Wcirc: "\u0174", Wedge: "\u22C0", bigwedge: "\u22C0", xwedge: "\u22C0", Wfr: "\u{1D51A}", Wopf: "\u{1D54E}", Wscr: "\u{1D4B2}", Xfr: "\u{1D51B}", Xi: "\u039E", Xopf: "\u{1D54F}", Xscr: "\u{1D4B3}", YAcy: "\u042F", YIcy: "\u0407", YUcy: "\u042E", Yacute: "\xDD", Ycirc: "\u0176", Ycy: "\u042B", Yfr: "\u{1D51C}", Yopf: "\u{1D550}", Yscr: "\u{1D4B4}", Yuml: "\u0178", ZHcy: "\u0416", Zacute: "\u0179", Zcaron: "\u017D", Zcy: "\u0417", Zdot: "\u017B", Zeta: "\u0396", Zfr: "\u2128", zeetrf: "\u2128", Zopf: "\u2124", integers: "\u2124", Zscr: "\u{1D4B5}", aacute: "\xE1", abreve: "\u0103", ac: "\u223E", mstpos: "\u223E", acE: "\u223E\u0333", acd: "\u223F", acirc: "\xE2", acy: "\u0430", aelig: "\xE6", afr: "\u{1D51E}", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", alpha: "\u03B1", amacr: "\u0101", amalg: "\u2A3F", and: "\u2227", wedge: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", angle: "\u2220", ange: "\u29A4", angmsd: "\u2221", measuredangle: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angzarr: "\u237C", aogon: "\u0105", aopf: "\u{1D552}", apE: "\u2A70", apacir: "\u2A6F", ape: "\u224A", approxeq: "\u224A", apid: "\u224B", apos: "'", aring: "\xE5", ascr: "\u{1D4B6}", ast: "*", midast: "*", atilde: "\xE3", auml: "\xE4", awint: "\u2A11", bNot: "\u2AED", backcong: "\u224C", bcong: "\u224C", backepsilon: "\u03F6", bepsi: "\u03F6", backprime: "\u2035", bprime: "\u2035", backsim: "\u223D", bsim: "\u223D", backsimeq: "\u22CD", bsime: "\u22CD", barvee: "\u22BD", barwed: "\u2305", barwedge: "\u2305", bbrktbrk: "\u23B6", bcy: "\u0431", bdquo: "\u201E", ldquor: "\u201E", bemptyv: "\u29B0", beta: "\u03B2", beth: "\u2136", between: "\u226C", twixt: "\u226C", bfr: "\u{1D51F}", bigcirc: "\u25EF", xcirc: "\u25EF", bigodot: "\u2A00", xodot: "\u2A00", bigoplus: "\u2A01", xoplus: "\u2A01", bigotimes: "\u2A02", xotime: "\u2A02", bigsqcup: "\u2A06", xsqcup: "\u2A06", bigstar: "\u2605", starf: "\u2605", bigtriangledown: "\u25BD", xdtri: "\u25BD", bigtriangleup: "\u25B3", xutri: "\u25B3", biguplus: "\u2A04", xuplus: "\u2A04", bkarow: "\u290D", rbarr: "\u290D", blacklozenge: "\u29EB", lozf: "\u29EB", blacktriangle: "\u25B4", utrif: "\u25B4", blacktriangledown: "\u25BE", dtrif: "\u25BE", blacktriangleleft: "\u25C2", ltrif: "\u25C2", blacktriangleright: "\u25B8", rtrif: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bnot: "\u2310", bopf: "\u{1D553}", bowtie: "\u22C8", boxDL: "\u2557", boxDR: "\u2554", boxDl: "\u2556", boxDr: "\u2553", boxH: "\u2550", boxHD: "\u2566", boxHU: "\u2569", boxHd: "\u2564", boxHu: "\u2567", boxUL: "\u255D", boxUR: "\u255A", boxUl: "\u255C", boxUr: "\u2559", boxV: "\u2551", boxVH: "\u256C", boxVL: "\u2563", boxVR: "\u2560", boxVh: "\u256B", boxVl: "\u2562", boxVr: "\u255F", boxbox: "\u29C9", boxdL: "\u2555", boxdR: "\u2552", boxdl: "\u2510", boxdr: "\u250C", boxhD: "\u2565", boxhU: "\u2568", boxhd: "\u252C", boxhu: "\u2534", boxminus: "\u229F", minusb: "\u229F", boxplus: "\u229E", plusb: "\u229E", boxtimes: "\u22A0", timesb: "\u22A0", boxuL: "\u255B", boxuR: "\u2558", boxul: "\u2518", boxur: "\u2514", boxv: "\u2502", boxvH: "\u256A", boxvL: "\u2561", boxvR: "\u255E", boxvh: "\u253C", boxvl: "\u2524", boxvr: "\u251C", brvbar: "\xA6", bscr: "\u{1D4B7}", bsemi: "\u204F", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bumpE: "\u2AAE", cacute: "\u0107", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", caps: "\u2229\uFE00", caret: "\u2041", ccaps: "\u2A4D", ccaron: "\u010D", ccedil: "\xE7", ccirc: "\u0109", ccups: "\u2A4C", ccupssm: "\u2A50", cdot: "\u010B", cemptyv: "\u29B2", cent: "\xA2", cfr: "\u{1D520}", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", chi: "\u03C7", cir: "\u25CB", cirE: "\u29C3", circ: "\u02C6", circeq: "\u2257", cire: "\u2257", circlearrowleft: "\u21BA", olarr: "\u21BA", circlearrowright: "\u21BB", orarr: "\u21BB", circledS: "\u24C8", oS: "\u24C8", circledast: "\u229B", oast: "\u229B", circledcirc: "\u229A", ocir: "\u229A", circleddash: "\u229D", odash: "\u229D", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", clubs: "\u2663", clubsuit: "\u2663", colon: ":", comma: ",", commat: "@", comp: "\u2201", complement: "\u2201", congdot: "\u2A6D", copf: "\u{1D554}", copysr: "\u2117", crarr: "\u21B5", cross: "\u2717", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", curlyeqprec: "\u22DE", cuesc: "\u22DF", curlyeqsucc: "\u22DF", cularr: "\u21B6", curvearrowleft: "\u21B6", cularrp: "\u293D", cup: "\u222A", cupbrcap: "\u2A48", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curvearrowright: "\u21B7", curarrm: "\u293C", curlyvee: "\u22CE", cuvee: "\u22CE", curlywedge: "\u22CF", cuwed: "\u22CF", curren: "\xA4", cwint: "\u2231", cylcty: "\u232D", dHar: "\u2965", dagger: "\u2020", daleth: "\u2138", dash: "\u2010", hyphen: "\u2010", dbkarow: "\u290F", rBarr: "\u290F", dcaron: "\u010F", dcy: "\u0434", ddarr: "\u21CA", downdownarrows: "\u21CA", ddotseq: "\u2A77", eDDot: "\u2A77", deg: "\xB0", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", dfr: "\u{1D521}", diamondsuit: "\u2666", diams: "\u2666", digamma: "\u03DD", gammad: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", djcy: "\u0452", dlcorn: "\u231E", llcorner: "\u231E", dlcrop: "\u230D", dollar: "$", dopf: "\u{1D555}", doteqdot: "\u2251", eDot: "\u2251", dotminus: "\u2238", minusd: "\u2238", dotplus: "\u2214", plusdo: "\u2214", dotsquare: "\u22A1", sdotb: "\u22A1", drcorn: "\u231F", lrcorner: "\u231F", drcrop: "\u230C", dscr: "\u{1D4B9}", dscy: "\u0455", dsol: "\u29F6", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", triangledown: "\u25BF", dwangle: "\u29A6", dzcy: "\u045F", dzigrarr: "\u27FF", eacute: "\xE9", easter: "\u2A6E", ecaron: "\u011B", ecir: "\u2256", eqcirc: "\u2256", ecirc: "\xEA", ecolon: "\u2255", eqcolon: "\u2255", ecy: "\u044D", edot: "\u0117", efDot: "\u2252", fallingdotseq: "\u2252", efr: "\u{1D522}", eg: "\u2A9A", egrave: "\xE8", egs: "\u2A96", eqslantgtr: "\u2A96", egsdot: "\u2A98", el: "\u2A99", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", eqslantless: "\u2A95", elsdot: "\u2A97", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", emptyv: "\u2205", varnothing: "\u2205", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", eng: "\u014B", ensp: "\u2002", eogon: "\u0119", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", epsilon: "\u03B5", epsiv: "\u03F5", straightepsilon: "\u03F5", varepsilon: "\u03F5", equals: "=", equest: "\u225F", questeq: "\u225F", equivDD: "\u2A78", eqvparsl: "\u29E5", erDot: "\u2253", risingdotseq: "\u2253", erarr: "\u2971", escr: "\u212F", eta: "\u03B7", eth: "\xF0", euml: "\xEB", euro: "\u20AC", excl: "!", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", ffr: "\u{1D523}", filig: "\uFB01", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", fopf: "\u{1D557}", fork: "\u22D4", pitchfork: "\u22D4", forkv: "\u2AD9", fpartint: "\u2A0D", frac12: "\xBD", half: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", sfrown: "\u2322", fscr: "\u{1D4BB}", gEl: "\u2A8C", gtreqqless: "\u2A8C", gacute: "\u01F5", gamma: "\u03B3", gap: "\u2A86", gtrapprox: "\u2A86", gbreve: "\u011F", gcirc: "\u011D", gcy: "\u0433", gdot: "\u0121", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", gfr: "\u{1D524}", gimel: "\u2137", gjcy: "\u0453", glE: "\u2A92", gla: "\u2AA5", glj: "\u2AA4", gnE: "\u2269", gneqq: "\u2269", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gneq: "\u2A88", gnsim: "\u22E7", gopf: "\u{1D558}", gscr: "\u210A", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtrdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrarr: "\u2978", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", hardcy: "\u044A", harrcir: "\u2948", harrw: "\u21AD", leftrightsquigarrow: "\u21AD", hbar: "\u210F", hslash: "\u210F", planck: "\u210F", plankv: "\u210F", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", mldr: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", hksearow: "\u2925", searhk: "\u2925", hkswarow: "\u2926", swarhk: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", larrhk: "\u21A9", hookrightarrow: "\u21AA", rarrhk: "\u21AA", hopf: "\u{1D559}", horbar: "\u2015", hscr: "\u{1D4BD}", hstrok: "\u0127", hybull: "\u2043", iacute: "\xED", icirc: "\xEE", icy: "\u0438", iecy: "\u0435", iexcl: "\xA1", ifr: "\u{1D526}", igrave: "\xEC", iiiint: "\u2A0C", qint: "\u2A0C", iiint: "\u222D", tint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", ijlig: "\u0133", imacr: "\u012B", imath: "\u0131", inodot: "\u0131", imof: "\u22B7", imped: "\u01B5", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", intcal: "\u22BA", intercal: "\u22BA", intlarhk: "\u2A17", intprod: "\u2A3C", iprod: "\u2A3C", iocy: "\u0451", iogon: "\u012F", iopf: "\u{1D55A}", iota: "\u03B9", iquest: "\xBF", iscr: "\u{1D4BE}", isinE: "\u22F9", isindot: "\u22F5", isins: "\u22F4", isinsv: "\u22F3", itilde: "\u0129", iukcy: "\u0456", iuml: "\xEF", jcirc: "\u0135", jcy: "\u0439", jfr: "\u{1D527}", jmath: "\u0237", jopf: "\u{1D55B}", jscr: "\u{1D4BF}", jsercy: "\u0458", jukcy: "\u0454", kappa: "\u03BA", kappav: "\u03F0", varkappa: "\u03F0", kcedil: "\u0137", kcy: "\u043A", kfr: "\u{1D528}", kgreen: "\u0138", khcy: "\u0445", kjcy: "\u045C", kopf: "\u{1D55C}", kscr: "\u{1D4C0}", lAtail: "\u291B", lBarr: "\u290E", lEg: "\u2A8B", lesseqqgtr: "\u2A8B", lHar: "\u2962", lacute: "\u013A", laemptyv: "\u29B4", lambda: "\u03BB", langd: "\u2991", lap: "\u2A85", lessapprox: "\u2A85", laquo: "\xAB", larrbfs: "\u291F", larrfs: "\u291D", larrlp: "\u21AB", looparrowleft: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", leftarrowtail: "\u21A2", lat: "\u2AAB", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lcub: "{", lbrack: "[", lsqb: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", lcaron: "\u013E", lcedil: "\u013C", lcy: "\u043B", ldca: "\u2936", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", leq: "\u2264", leftleftarrows: "\u21C7", llarr: "\u21C7", leftthreetimes: "\u22CB", lthree: "\u22CB", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessdot: "\u22D6", ltdot: "\u22D6", lfisht: "\u297C", lfr: "\u{1D529}", lgE: "\u2A91", lharul: "\u296A", lhblk: "\u2584", ljcy: "\u0459", llhard: "\u296B", lltri: "\u25FA", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnE: "\u2268", lneqq: "\u2268", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lneq: "\u2A87", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", longmapsto: "\u27FC", xmap: "\u27FC", looparrowright: "\u21AC", rarrlp: "\u21AC", lopar: "\u2985", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", loz: "\u25CA", lozenge: "\u25CA", lpar: "(", lparlt: "\u2993", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", lsime: "\u2A8D", lsimg: "\u2A8F", lsquor: "\u201A", sbquo: "\u201A", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltrPar: "\u2996", ltri: "\u25C3", triangleleft: "\u25C3", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", mDDot: "\u223A", macr: "\xAF", strns: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", marker: "\u25AE", mcomma: "\u2A29", mcy: "\u043C", mdash: "\u2014", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midcir: "\u2AF0", minus: "\u2212", minusdu: "\u2A2A", mlcp: "\u2ADB", models: "\u22A7", mopf: "\u{1D55E}", mscr: "\u{1D4C2}", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nGg: "\u22D9\u0338", nGt: "\u226B\u20D2", nLeftarrow: "\u21CD", nlArr: "\u21CD", nLeftrightarrow: "\u21CE", nhArr: "\u21CE", nLl: "\u22D8\u0338", nLt: "\u226A\u20D2", nRightarrow: "\u21CF", nrArr: "\u21CF", nVDash: "\u22AF", nVdash: "\u22AE", nacute: "\u0144", nang: "\u2220\u20D2", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", natur: "\u266E", natural: "\u266E", ncap: "\u2A43", ncaron: "\u0148", ncedil: "\u0146", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", ncy: "\u043D", ndash: "\u2013", neArr: "\u21D7", nearhk: "\u2924", nedot: "\u2250\u0338", nesear: "\u2928", toea: "\u2928", nfr: "\u{1D52B}", nharr: "\u21AE", nleftrightarrow: "\u21AE", nhpar: "\u2AF2", nis: "\u22FC", nisd: "\u22FA", njcy: "\u045A", nlE: "\u2266\u0338", nleqq: "\u2266\u0338", nlarr: "\u219A", nleftarrow: "\u219A", nldr: "\u2025", nopf: "\u{1D55F}", not: "\xAC", notinE: "\u22F9\u0338", notindot: "\u22F5\u0338", notinvb: "\u22F7", notinvc: "\u22F6", notnivb: "\u22FE", notnivc: "\u22FD", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", nrarr: "\u219B", nrightarrow: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nscr: "\u{1D4C3}", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsubseteqq: "\u2AC5\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupseteqq: "\u2AC6\u0338", ntilde: "\xF1", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvDash: "\u22AD", nvHarr: "\u2904", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwArr: "\u21D6", nwarhk: "\u2923", nwnear: "\u2927", oacute: "\xF3", ocirc: "\xF4", ocy: "\u043E", odblac: "\u0151", odiv: "\u2A38", odsold: "\u29BC", oelig: "\u0153", ofcir: "\u29BF", ofr: "\u{1D52C}", ogon: "\u02DB", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", olcir: "\u29BE", olcross: "\u29BB", olt: "\u29C0", omacr: "\u014D", omega: "\u03C9", omicron: "\u03BF", omid: "\u29B6", oopf: "\u{1D560}", opar: "\u29B7", operp: "\u29B9", or: "\u2228", vee: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", oscr: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oslash: "\xF8", osol: "\u2298", otilde: "\xF5", otimesas: "\u2A36", ouml: "\xF6", ovbar: "\u233D", para: "\xB6", parsim: "\u2AF3", parsl: "\u2AFD", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", pertenk: "\u2031", pfr: "\u{1D52D}", phi: "\u03C6", phiv: "\u03D5", straightphi: "\u03D5", varphi: "\u03D5", phone: "\u260E", pi: "\u03C0", piv: "\u03D6", varpi: "\u03D6", planckh: "\u210E", plus: "+", plusacir: "\u2A23", pluscir: "\u2A22", plusdu: "\u2A25", pluse: "\u2A72", plussim: "\u2A26", plustwo: "\u2A27", pointint: "\u2A15", popf: "\u{1D561}", pound: "\xA3", prE: "\u2AB3", prap: "\u2AB7", precapprox: "\u2AB7", precnapprox: "\u2AB9", prnap: "\u2AB9", precneqq: "\u2AB5", prnE: "\u2AB5", precnsim: "\u22E8", prnsim: "\u22E8", prime: "\u2032", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prurel: "\u22B0", pscr: "\u{1D4C5}", psi: "\u03C8", puncsp: "\u2008", qfr: "\u{1D52E}", qopf: "\u{1D562}", qprime: "\u2057", qscr: "\u{1D4C6}", quatint: "\u2A16", quest: "?", rAtail: "\u291C", rHar: "\u2964", race: "\u223D\u0331", racute: "\u0155", raemptyv: "\u29B3", rangd: "\u2992", range: "\u29A5", raquo: "\xBB", rarrap: "\u2975", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrpl: "\u2945", rarrsim: "\u2974", rarrtl: "\u21A3", rightarrowtail: "\u21A3", rarrw: "\u219D", rightsquigarrow: "\u219D", ratail: "\u291A", ratio: "\u2236", rbbrk: "\u2773", rbrace: "}", rcub: "}", rbrack: "]", rsqb: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdsh: "\u21B3", rect: "\u25AD", rfisht: "\u297D", rfr: "\u{1D52F}", rharul: "\u296C", rho: "\u03C1", rhov: "\u03F1", varrho: "\u03F1", rightrightarrows: "\u21C9", rrarr: "\u21C9", rightthreetimes: "\u22CC", rthree: "\u22CC", ring: "\u02DA", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", ropar: "\u2986", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rsaquo: "\u203A", rscr: "\u{1D4C7}", rtimes: "\u22CA", rtri: "\u25B9", triangleright: "\u25B9", rtriltri: "\u29CE", ruluhar: "\u2968", rx: "\u211E", sacute: "\u015B", scE: "\u2AB4", scap: "\u2AB8", succapprox: "\u2AB8", scaron: "\u0161", scedil: "\u015F", scirc: "\u015D", scnE: "\u2AB6", succneqq: "\u2AB6", scnap: "\u2ABA", succnapprox: "\u2ABA", scnsim: "\u22E9", succnsim: "\u22E9", scpolint: "\u2A13", scy: "\u0441", sdot: "\u22C5", sdote: "\u2A66", seArr: "\u21D8", sect: "\xA7", semi: ";", seswar: "\u2929", tosa: "\u2929", sext: "\u2736", sfr: "\u{1D530}", sharp: "\u266F", shchcy: "\u0449", shcy: "\u0448", shy: "\xAD", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", varsigma: "\u03C2", simdot: "\u2A6A", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", smashp: "\u2A33", smeparsl: "\u29E4", smile: "\u2323", ssmile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", sqcaps: "\u2293\uFE00", sqcups: "\u2294\uFE00", sscr: "\u{1D4C8}", star: "\u2606", sub: "\u2282", subset: "\u2282", subE: "\u2AC5", subseteqq: "\u2AC5", subdot: "\u2ABD", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subsetneqq: "\u2ACB", subne: "\u228A", subsetneq: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supE: "\u2AC6", supseteqq: "\u2AC6", supdot: "\u2ABE", supdsub: "\u2AD8", supedot: "\u2AC4", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supsetneqq: "\u2ACC", supne: "\u228B", supsetneq: "\u228B", supplus: "\u2AC0", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swArr: "\u21D9", swnwar: "\u292A", szlig: "\xDF", target: "\u2316", tau: "\u03C4", tcaron: "\u0165", tcedil: "\u0163", tcy: "\u0442", telrec: "\u2315", tfr: "\u{1D531}", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", vartheta: "\u03D1", thorn: "\xFE", times: "\xD7", timesbar: "\u2A31", timesd: "\u2A30", topbot: "\u2336", topcir: "\u2AF1", topf: "\u{1D565}", topfork: "\u2ADA", tprime: "\u2034", triangle: "\u25B5", utri: "\u25B5", triangleq: "\u225C", trie: "\u225C", tridot: "\u25EC", triminus: "\u2A3A", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", tscr: "\u{1D4C9}", tscy: "\u0446", tshcy: "\u045B", tstrok: "\u0167", uHar: "\u2963", uacute: "\xFA", ubrcy: "\u045E", ubreve: "\u016D", ucirc: "\xFB", ucy: "\u0443", udblac: "\u0171", ufisht: "\u297E", ufr: "\u{1D532}", ugrave: "\xF9", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", umacr: "\u016B", uogon: "\u0173", uopf: "\u{1D566}", upsi: "\u03C5", upsilon: "\u03C5", upuparrows: "\u21C8", uuarr: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", uring: "\u016F", urtri: "\u25F9", uscr: "\u{1D4CA}", utdot: "\u22F0", utilde: "\u0169", uuml: "\xFC", uwangle: "\u29A7", vBar: "\u2AE8", vBarv: "\u2AE9", vangrt: "\u299C", varsubsetneq: "\u228A\uFE00", vsubne: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", vsubnE: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", vsupne: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vsupnE: "\u2ACC\uFE00", vcy: "\u0432", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", vfr: "\u{1D533}", vopf: "\u{1D567}", vscr: "\u{1D4CB}", vzigzag: "\u299A", wcirc: "\u0175", wedbar: "\u2A5F", wedgeq: "\u2259", weierp: "\u2118", wp: "\u2118", wfr: "\u{1D534}", wopf: "\u{1D568}", wscr: "\u{1D4CC}", xfr: "\u{1D535}", xi: "\u03BE", xnis: "\u22FB", xopf: "\u{1D569}", xscr: "\u{1D4CD}", yacute: "\xFD", yacy: "\u044F", ycirc: "\u0177", ycy: "\u044B", yen: "\xA5", yfr: "\u{1D536}", yicy: "\u0457", yopf: "\u{1D56A}", yscr: "\u{1D4CE}", yucy: "\u044E", yuml: "\xFF", zacute: "\u017A", zcaron: "\u017E", zcy: "\u0437", zdot: "\u017C", zeta: "\u03B6", zfr: "\u{1D537}", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
var Xa = "\uE500";
Ve2.ngsp = Xa;
var Ja = [/@/, /^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
function $s(t7, e) {
  if (e != null && !(Array.isArray(e) && e.length == 2)) throw new Error(`Expected '${t7}' to be an array, [start, end].`);
  if (e != null) {
    let r = e[0], n = e[1];
    Ja.forEach((s) => {
      if (s.test(r) || s.test(n)) throw new Error(`['${r}', '${n}'] contains unusable interpolation symbol.`);
    });
  }
}
var Rr2 = class t2 {
  static fromArray(e) {
    return e ? ($s("interpolation", e), new t2(e[0], e[1])) : $r2;
  }
  constructor(e, r) {
    this.start = e, this.end = r;
  }
};
var $r2 = new Rr2("{{", "}}");
var gt2 = class extends Oe2 {
  constructor(e, r, n) {
    super(n, e), this.tokenType = r;
  }
};
var Vr2 = class {
  constructor(e, r, n) {
    this.tokens = e, this.errors = r, this.nonNormalizedIcuExpressions = n;
  }
};
function Qs(t7, e, r, n = {}) {
  let s = new Ur2(new De2(t7, e), r, n);
  return s.tokenize(), new Vr2(wo(s.tokens), s.errors, s.nonNormalizedIcuExpressions);
}
var So = /\r\n?/g;
function Ue2(t7) {
  return `Unexpected character "${t7 === 0 ? "EOF" : String.fromCharCode(t7)}"`;
}
function Vs(t7) {
  return `Unknown entity "${t7}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function _o(t7, e) {
  return `Unable to parse entity "${e}" - ${t7} character reference entities must end with ";"`;
}
var tr2;
(function(t7) {
  t7.HEX = "hexadecimal", t7.DEC = "decimal";
})(tr2 || (tr2 = {}));
var Ct2 = class {
  constructor(e) {
    this.error = e;
  }
};
var Ur2 = class {
  constructor(e, r, n) {
    this._getTagContentType = r, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = false, this._fullNameStack = [], this.tokens = [], this.errors = [], this.nonNormalizedIcuExpressions = [], this._tokenizeIcu = n.tokenizeExpansionForms || false, this._interpolationConfig = n.interpolationConfig || $r2, this._leadingTriviaCodePoints = n.leadingTriviaChars && n.leadingTriviaChars.map((i) => i.codePointAt(0) || 0), this._canSelfClose = n.canSelfClose || false, this._allowHtmComponentClosingTags = n.allowHtmComponentClosingTags || false;
    let s = n.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 };
    this._cursor = n.escapedString ? new Wr2(e, s) : new rr2(e, s), this._preserveLineEndings = n.preserveLineEndings || false, this._i18nNormalizeLineEndingsInICUs = n.i18nNormalizeLineEndingsInICUs || false, this._tokenizeBlocks = n.tokenizeBlocks ?? true, this._tokenizeLet = n.tokenizeLet ?? true;
    try {
      this._cursor.init();
    } catch (i) {
      this.handleError(i);
    }
  }
  _processCarriageReturns(e) {
    return this._preserveLineEndings ? e : e.replace(So, `
`);
  }
  tokenize() {
    for (; this._cursor.peek() !== 0; ) {
      let e = this._cursor.clone();
      try {
        if (this._attemptCharCode(60)) if (this._attemptCharCode(33)) this._attemptStr("[CDATA[") ? this._consumeCdata(e) : this._attemptStr("--") ? this._consumeComment(e) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(e) : this._consumeBogusComment(e);
        else if (this._attemptCharCode(47)) this._consumeTagClose(e);
        else {
          let r = this._cursor.clone();
          this._attemptCharCode(63) ? (this._cursor = r, this._consumeBogusComment(e)) : this._consumeTagOpen(e);
        }
        else this._tokenizeLet && this._cursor.peek() === 64 && !this._inInterpolation && this._attemptStr("@let") ? this._consumeLetDeclaration(e) : this._tokenizeBlocks && this._attemptCharCode(64) ? this._consumeBlockStart(e) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(125) ? this._consumeBlockEnd(e) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(5, 8, () => this._isTextEnd(), () => this._isTagStart());
      } catch (r) {
        this.handleError(r);
      }
    }
    this._beginToken(34), this._endToken([]);
  }
  _getBlockName() {
    let e = false, r = this._cursor.clone();
    return this._attemptCharCodeUntilFn((n) => ut2(n) ? !e : zs(n) ? (e = true, false) : true), this._cursor.getChars(r).trim();
  }
  _consumeBlockStart(e) {
    this._beginToken(25, e);
    let r = this._endToken([this._getBlockName()]);
    if (this._cursor.peek() === 40) if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(b), this._attemptCharCode(41)) this._attemptCharCodeUntilFn(b);
    else {
      r.type = 29;
      return;
    }
    this._attemptCharCode(123) ? (this._beginToken(26), this._endToken([])) : r.type = 29;
  }
  _consumeBlockEnd(e) {
    this._beginToken(27, e), this._endToken([]);
  }
  _consumeBlockParameters() {
    for (this._attemptCharCodeUntilFn(Gs); this._cursor.peek() !== 41 && this._cursor.peek() !== 0; ) {
      this._beginToken(28);
      let e = this._cursor.clone(), r = null, n = 0;
      for (; this._cursor.peek() !== 59 && this._cursor.peek() !== 0 || r !== null; ) {
        let s = this._cursor.peek();
        if (s === 92) this._cursor.advance();
        else if (s === r) r = null;
        else if (r === null && $t2(s)) r = s;
        else if (s === 40 && r === null) n++;
        else if (s === 41 && r === null) {
          if (n === 0) break;
          n > 0 && n--;
        }
        this._cursor.advance();
      }
      this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(Gs);
    }
  }
  _consumeLetDeclaration(e) {
    if (this._beginToken(30, e), ut2(this._cursor.peek())) this._attemptCharCodeUntilFn(b);
    else {
      let s = this._endToken([this._cursor.getChars(e)]);
      s.type = 33;
      return;
    }
    let r = this._endToken([this._getLetDeclarationName()]);
    if (this._attemptCharCodeUntilFn(b), !this._attemptCharCode(61)) {
      r.type = 33;
      return;
    }
    this._attemptCharCodeUntilFn((s) => b(s) && !Rt2(s)), this._consumeLetDeclarationValue(), this._cursor.peek() === 59 ? (this._beginToken(32), this._endToken([]), this._cursor.advance()) : (r.type = 33, r.sourceSpan = this._cursor.getSpan(e));
  }
  _getLetDeclarationName() {
    let e = this._cursor.clone(), r = false;
    return this._attemptCharCodeUntilFn((n) => lt2(n) || n === 36 || n === 95 || r && It2(n) ? (r = true, false) : true), this._cursor.getChars(e).trim();
  }
  _consumeLetDeclarationValue() {
    let e = this._cursor.clone();
    for (this._beginToken(31, e); this._cursor.peek() !== 0; ) {
      let r = this._cursor.peek();
      if (r === 59) break;
      $t2(r) && (this._cursor.advance(), this._attemptCharCodeUntilFn((n) => n === 92 ? (this._cursor.advance(), false) : n === r)), this._cursor.advance();
    }
    this._endToken([this._cursor.getChars(e)]);
  }
  _tokenizeExpansionForm() {
    if (this.isExpansionFormStart()) return this._consumeExpansionFormStart(), true;
    if (vo(this._cursor.peek()) && this._isInExpansionForm()) return this._consumeExpansionCaseStart(), true;
    if (this._cursor.peek() === 125) {
      if (this._isInExpansionCase()) return this._consumeExpansionCaseEnd(), true;
      if (this._isInExpansionForm()) return this._consumeExpansionFormEnd(), true;
    }
    return false;
  }
  _beginToken(e, r = this._cursor.clone()) {
    this._currentTokenStart = r, this._currentTokenType = e;
  }
  _endToken(e, r) {
    if (this._currentTokenStart === null) throw new gt2("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(r));
    if (this._currentTokenType === null) throw new gt2("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
    let n = { type: this._currentTokenType, parts: e, sourceSpan: (r ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) };
    return this.tokens.push(n), this._currentTokenStart = null, this._currentTokenType = null, n;
  }
  _createError(e, r) {
    this._isInExpansionForm() && (e += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
    let n = new gt2(e, this._currentTokenType, r);
    return this._currentTokenStart = null, this._currentTokenType = null, new Ct2(n);
  }
  handleError(e) {
    if (e instanceof St2 && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof Ct2) this.errors.push(e.error);
    else throw e;
  }
  _attemptCharCode(e) {
    return this._cursor.peek() === e ? (this._cursor.advance(), true) : false;
  }
  _attemptCharCodeCaseInsensitive(e) {
    return yo(this._cursor.peek(), e) ? (this._cursor.advance(), true) : false;
  }
  _requireCharCode(e) {
    let r = this._cursor.clone();
    if (!this._attemptCharCode(e)) throw this._createError(Ue2(this._cursor.peek()), this._cursor.getSpan(r));
  }
  _attemptStr(e) {
    let r = e.length;
    if (this._cursor.charsLeft() < r) return false;
    let n = this._cursor.clone();
    for (let s = 0; s < r; s++) if (!this._attemptCharCode(e.charCodeAt(s))) return this._cursor = n, false;
    return true;
  }
  _attemptStrCaseInsensitive(e) {
    for (let r = 0; r < e.length; r++) if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(r))) return false;
    return true;
  }
  _requireStr(e) {
    let r = this._cursor.clone();
    if (!this._attemptStr(e)) throw this._createError(Ue2(this._cursor.peek()), this._cursor.getSpan(r));
  }
  _requireStrCaseInsensitive(e) {
    let r = this._cursor.clone();
    if (!this._attemptStrCaseInsensitive(e)) throw this._createError(Ue2(this._cursor.peek()), this._cursor.getSpan(r));
  }
  _attemptCharCodeUntilFn(e) {
    for (; !e(this._cursor.peek()); ) this._cursor.advance();
  }
  _requireCharCodeUntilFn(e, r) {
    let n = this._cursor.clone();
    if (this._attemptCharCodeUntilFn(e), this._cursor.diff(n) < r) throw this._createError(Ue2(this._cursor.peek()), this._cursor.getSpan(n));
  }
  _attemptUntilChar(e) {
    for (; this._cursor.peek() !== e; ) this._cursor.advance();
  }
  _readChar() {
    let e = String.fromCodePoint(this._cursor.peek());
    return this._cursor.advance(), e;
  }
  _consumeEntity(e) {
    this._beginToken(9);
    let r = this._cursor.clone();
    if (this._cursor.advance(), this._attemptCharCode(35)) {
      let n = this._attemptCharCode(120) || this._attemptCharCode(88), s = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(Ao), this._cursor.peek() != 59) {
        this._cursor.advance();
        let a = n ? tr2.HEX : tr2.DEC;
        throw this._createError(_o(a, this._cursor.getChars(r)), this._cursor.getSpan());
      }
      let i = this._cursor.getChars(s);
      this._cursor.advance();
      try {
        let a = parseInt(i, n ? 16 : 10);
        this._endToken([String.fromCharCode(a), this._cursor.getChars(r)]);
      } catch {
        throw this._createError(Vs(this._cursor.getChars(r)), this._cursor.getSpan());
      }
    } else {
      let n = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(Do2), this._cursor.peek() != 59) this._beginToken(e, r), this._cursor = n, this._endToken(["&"]);
      else {
        let s = this._cursor.getChars(n);
        this._cursor.advance();
        let i = Ve2[s];
        if (!i) throw this._createError(Vs(s), this._cursor.getSpan(r));
        this._endToken([i, `&${s};`]);
      }
    }
  }
  _consumeRawText(e, r) {
    this._beginToken(e ? 6 : 7);
    let n = [];
    for (; ; ) {
      let s = this._cursor.clone(), i = r();
      if (this._cursor = s, i) break;
      e && this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(n.join(""))]), n.length = 0, this._consumeEntity(6), this._beginToken(6)) : n.push(this._readChar());
    }
    this._endToken([this._processCarriageReturns(n.join(""))]);
  }
  _consumeComment(e) {
    this._beginToken(10, e), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(11), this._requireStr("-->"), this._endToken([]);
  }
  _consumeBogusComment(e) {
    this._beginToken(10, e), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(11), this._cursor.advance(), this._endToken([]);
  }
  _consumeCdata(e) {
    this._beginToken(12, e), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(13), this._requireStr("]]>"), this._endToken([]);
  }
  _consumeDocType(e) {
    this._beginToken(18, e), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(19), this._cursor.advance(), this._endToken([]);
  }
  _consumePrefixAndName() {
    let e = this._cursor.clone(), r = "";
    for (; this._cursor.peek() !== 58 && !Eo(this._cursor.peek()); ) this._cursor.advance();
    let n;
    this._cursor.peek() === 58 ? (r = this._cursor.getChars(e), this._cursor.advance(), n = this._cursor.clone()) : n = e, this._requireCharCodeUntilFn(Us, r === "" ? 0 : 1);
    let s = this._cursor.getChars(n);
    return [r, s];
  }
  _consumeTagOpen(e) {
    let r, n, s, i = [];
    try {
      if (!lt2(this._cursor.peek())) throw this._createError(Ue2(this._cursor.peek()), this._cursor.getSpan(e));
      for (s = this._consumeTagOpenStart(e), n = s.parts[0], r = s.parts[1], this._attemptCharCodeUntilFn(b); this._cursor.peek() !== 47 && this._cursor.peek() !== 62 && this._cursor.peek() !== 60 && this._cursor.peek() !== 0; ) {
        let [o, u] = this._consumeAttributeName();
        if (this._attemptCharCodeUntilFn(b), this._attemptCharCode(61)) {
          this._attemptCharCodeUntilFn(b);
          let p = this._consumeAttributeValue();
          i.push({ prefix: o, name: u, value: p });
        } else i.push({ prefix: o, name: u });
        this._attemptCharCodeUntilFn(b);
      }
      this._consumeTagOpenEnd();
    } catch (o) {
      if (o instanceof Ct2) {
        s ? s.type = 4 : (this._beginToken(5, e), this._endToken(["<"]));
        return;
      }
      throw o;
    }
    if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === 2) return;
    let a = this._getTagContentType(r, n, this._fullNameStack.length > 0, i);
    this._handleFullNameStackForTagOpen(n, r), a === P2.RAW_TEXT ? this._consumeRawTextWithTagClose(n, r, false) : a === P2.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(n, r, true);
  }
  _consumeRawTextWithTagClose(e, r, n) {
    this._consumeRawText(n, () => !this._attemptCharCode(60) || !this._attemptCharCode(47) || (this._attemptCharCodeUntilFn(b), !this._attemptStrCaseInsensitive(e ? `${e}:${r}` : r)) ? false : (this._attemptCharCodeUntilFn(b), this._attemptCharCode(62))), this._beginToken(3), this._requireCharCodeUntilFn((s) => s === 62, 3), this._cursor.advance(), this._endToken([e, r]), this._handleFullNameStackForTagClose(e, r);
  }
  _consumeTagOpenStart(e) {
    this._beginToken(0, e);
    let r = this._consumePrefixAndName();
    return this._endToken(r);
  }
  _consumeAttributeName() {
    let e = this._cursor.peek();
    if (e === 39 || e === 34) throw this._createError(Ue2(e), this._cursor.getSpan());
    this._beginToken(14);
    let r = this._consumePrefixAndName();
    return this._endToken(r), r;
  }
  _consumeAttributeValue() {
    let e;
    if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
      let r = this._cursor.peek();
      this._consumeQuote(r);
      let n = () => this._cursor.peek() === r;
      e = this._consumeWithInterpolation(16, 17, n, n), this._consumeQuote(r);
    } else {
      let r = () => Us(this._cursor.peek());
      e = this._consumeWithInterpolation(16, 17, r, r);
    }
    return e;
  }
  _consumeQuote(e) {
    this._beginToken(15), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]);
  }
  _consumeTagOpenEnd() {
    let e = this._attemptCharCode(47) ? 2 : 1;
    this._beginToken(e), this._requireCharCode(62), this._endToken([]);
  }
  _consumeTagClose(e) {
    if (this._beginToken(3, e), this._attemptCharCodeUntilFn(b), this._allowHtmComponentClosingTags && this._attemptCharCode(47)) this._attemptCharCodeUntilFn(b), this._requireCharCode(62), this._endToken([]);
    else {
      let [r, n] = this._consumePrefixAndName();
      this._attemptCharCodeUntilFn(b), this._requireCharCode(62), this._endToken([r, n]), this._handleFullNameStackForTagClose(r, n);
    }
  }
  _consumeExpansionFormStart() {
    this._beginToken(20), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(20), this._beginToken(7);
    let e = this._readUntil(44), r = this._processCarriageReturns(e);
    if (this._i18nNormalizeLineEndingsInICUs) this._endToken([r]);
    else {
      let s = this._endToken([e]);
      r !== e && this.nonNormalizedIcuExpressions.push(s);
    }
    this._requireCharCode(44), this._attemptCharCodeUntilFn(b), this._beginToken(7);
    let n = this._readUntil(44);
    this._endToken([n]), this._requireCharCode(44), this._attemptCharCodeUntilFn(b);
  }
  _consumeExpansionCaseStart() {
    this._beginToken(21);
    let e = this._readUntil(123).trim();
    this._endToken([e]), this._attemptCharCodeUntilFn(b), this._beginToken(22), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(b), this._expansionCaseStack.push(22);
  }
  _consumeExpansionCaseEnd() {
    this._beginToken(23), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(b), this._expansionCaseStack.pop();
  }
  _consumeExpansionFormEnd() {
    this._beginToken(24), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
  }
  _consumeWithInterpolation(e, r, n, s) {
    this._beginToken(e);
    let i = [];
    for (; !n(); ) {
      let o = this._cursor.clone();
      this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (this._endToken([this._processCarriageReturns(i.join(""))], o), i.length = 0, this._consumeInterpolation(r, o, s), this._beginToken(e)) : this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(i.join(""))]), i.length = 0, this._consumeEntity(e), this._beginToken(e)) : i.push(this._readChar());
    }
    this._inInterpolation = false;
    let a = this._processCarriageReturns(i.join(""));
    return this._endToken([a]), a;
  }
  _consumeInterpolation(e, r, n) {
    let s = [];
    this._beginToken(e, r), s.push(this._interpolationConfig.start);
    let i = this._cursor.clone(), a = null, o = false;
    for (; this._cursor.peek() !== 0 && (n === null || !n()); ) {
      let u = this._cursor.clone();
      if (this._isTagStart()) {
        this._cursor = u, s.push(this._getProcessedChars(i, u)), this._endToken(s);
        return;
      }
      if (a === null) if (this._attemptStr(this._interpolationConfig.end)) {
        s.push(this._getProcessedChars(i, u)), s.push(this._interpolationConfig.end), this._endToken(s);
        return;
      } else this._attemptStr("//") && (o = true);
      let p = this._cursor.peek();
      this._cursor.advance(), p === 92 ? this._cursor.advance() : p === a ? a = null : !o && a === null && $t2(p) && (a = p);
    }
    s.push(this._getProcessedChars(i, this._cursor)), this._endToken(s);
  }
  _getProcessedChars(e, r) {
    return this._processCarriageReturns(r.getChars(e));
  }
  _isTextEnd() {
    return !!(this._isTagStart() || this._cursor.peek() === 0 || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === 125 && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._cursor.peek() === 64 || this._cursor.peek() === 125));
  }
  _isTagStart() {
    if (this._cursor.peek() === 60) {
      let e = this._cursor.clone();
      e.advance();
      let r = e.peek();
      if (97 <= r && r <= 122 || 65 <= r && r <= 90 || r === 47 || r === 33) return true;
    }
    return false;
  }
  _isBlockStart() {
    if (this._tokenizeBlocks && this._cursor.peek() === 64) {
      let e = this._cursor.clone();
      if (e.advance(), zs(e.peek())) return true;
    }
    return false;
  }
  _readUntil(e) {
    let r = this._cursor.clone();
    return this._attemptUntilChar(e), this._cursor.getChars(r);
  }
  _isInExpansion() {
    return this._isInExpansionCase() || this._isInExpansionForm();
  }
  _isInExpansionCase() {
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 22;
  }
  _isInExpansionForm() {
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 20;
  }
  isExpansionFormStart() {
    if (this._cursor.peek() !== 123) return false;
    if (this._interpolationConfig) {
      let e = this._cursor.clone(), r = this._attemptStr(this._interpolationConfig.start);
      return this._cursor = e, !r;
    }
    return true;
  }
  _handleFullNameStackForTagOpen(e, r) {
    let n = qe2(e, r);
    (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === n) && this._fullNameStack.push(n);
  }
  _handleFullNameStackForTagClose(e, r) {
    let n = qe2(e, r);
    this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === n && this._fullNameStack.pop();
  }
};
function b(t7) {
  return !ut2(t7) || t7 === 0;
}
function Us(t7) {
  return ut2(t7) || t7 === 62 || t7 === 60 || t7 === 47 || t7 === 39 || t7 === 34 || t7 === 61 || t7 === 0;
}
function Eo(t7) {
  return (t7 < 97 || 122 < t7) && (t7 < 65 || 90 < t7) && (t7 < 48 || t7 > 57);
}
function Ao(t7) {
  return t7 === 59 || t7 === 0 || !vs(t7);
}
function Do2(t7) {
  return t7 === 59 || t7 === 0 || !lt2(t7);
}
function vo(t7) {
  return t7 !== 125;
}
function yo(t7, e) {
  return Ws(t7) === Ws(e);
}
function Ws(t7) {
  return t7 >= 97 && t7 <= 122 ? t7 - 97 + 65 : t7;
}
function zs(t7) {
  return lt2(t7) || It2(t7) || t7 === 95;
}
function Gs(t7) {
  return t7 !== 59 && b(t7);
}
function wo(t7) {
  let e = [], r;
  for (let n = 0; n < t7.length; n++) {
    let s = t7[n];
    r && r.type === 5 && s.type === 5 || r && r.type === 16 && s.type === 16 ? (r.parts[0] += s.parts[0], r.sourceSpan.end = s.sourceSpan.end) : (r = s, e.push(r));
  }
  return e;
}
var rr2 = class t3 {
  constructor(e, r) {
    if (e instanceof t3) {
      this.file = e.file, this.input = e.input, this.end = e.end;
      let n = e.state;
      this.state = { peek: n.peek, offset: n.offset, line: n.line, column: n.column };
    } else {
      if (!r) throw new Error("Programming error: the range argument must be provided with a file argument.");
      this.file = e, this.input = e.content, this.end = r.endPos, this.state = { peek: -1, offset: r.startPos, line: r.startLine, column: r.startCol };
    }
  }
  clone() {
    return new t3(this);
  }
  peek() {
    return this.state.peek;
  }
  charsLeft() {
    return this.end - this.state.offset;
  }
  diff(e) {
    return this.state.offset - e.state.offset;
  }
  advance() {
    this.advanceState(this.state);
  }
  init() {
    this.updatePeek(this.state);
  }
  getSpan(e, r) {
    e = e || this;
    let n = e;
    if (r) for (; this.diff(e) > 0 && r.indexOf(e.peek()) !== -1; ) n === e && (e = e.clone()), e.advance();
    let s = this.locationFromCursor(e), i = this.locationFromCursor(this), a = n !== e ? this.locationFromCursor(n) : s;
    return new h(s, i, a);
  }
  getChars(e) {
    return this.input.substring(e.state.offset, this.state.offset);
  }
  charAt(e) {
    return this.input.charCodeAt(e);
  }
  advanceState(e) {
    if (e.offset >= this.end) throw this.state = e, new St2('Unexpected character "EOF"', this);
    let r = this.charAt(e.offset);
    r === 10 ? (e.line++, e.column = 0) : Rt2(r) || e.column++, e.offset++, this.updatePeek(e);
  }
  updatePeek(e) {
    e.peek = e.offset >= this.end ? 0 : this.charAt(e.offset);
  }
  locationFromCursor(e) {
    return new ie2(e.file, e.state.offset, e.state.line, e.state.column);
  }
};
var Wr2 = class t4 extends rr2 {
  constructor(e, r) {
    e instanceof t4 ? (super(e), this.internalState = { ...e.internalState }) : (super(e, r), this.internalState = this.state);
  }
  advance() {
    this.state = this.internalState, super.advance(), this.processEscapeSequence();
  }
  init() {
    super.init(), this.processEscapeSequence();
  }
  clone() {
    return new t4(this);
  }
  getChars(e) {
    let r = e.clone(), n = "";
    for (; r.internalState.offset < this.internalState.offset; ) n += String.fromCodePoint(r.peek()), r.advance();
    return n;
  }
  processEscapeSequence() {
    let e = () => this.internalState.peek;
    if (e() === 92) if (this.internalState = { ...this.state }, this.advanceState(this.internalState), e() === 110) this.state.peek = 10;
    else if (e() === 114) this.state.peek = 13;
    else if (e() === 118) this.state.peek = 11;
    else if (e() === 116) this.state.peek = 9;
    else if (e() === 98) this.state.peek = 8;
    else if (e() === 102) this.state.peek = 12;
    else if (e() === 117) if (this.advanceState(this.internalState), e() === 123) {
      this.advanceState(this.internalState);
      let r = this.clone(), n = 0;
      for (; e() !== 125; ) this.advanceState(this.internalState), n++;
      this.state.peek = this.decodeHexDigits(r, n);
    } else {
      let r = this.clone();
      this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 4);
    }
    else if (e() === 120) {
      this.advanceState(this.internalState);
      let r = this.clone();
      this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 2);
    } else if (kr2(e())) {
      let r = "", n = 0, s = this.clone();
      for (; kr2(e()) && n < 3; ) s = this.clone(), r += String.fromCodePoint(e()), this.advanceState(this.internalState), n++;
      this.state.peek = parseInt(r, 8), this.internalState = s.internalState;
    } else Rt2(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
  }
  decodeHexDigits(e, r) {
    let n = this.input.slice(e.internalState.offset, e.internalState.offset + r), s = parseInt(n, 16);
    if (isNaN(s)) throw e.state = e.internalState, new St2("Invalid hexadecimal escape sequence", e);
    return s;
  }
};
var St2 = class {
  constructor(e, r) {
    this.msg = e, this.cursor = r;
  }
};
var L2 = class t5 extends Oe2 {
  static create(e, r, n) {
    return new t5(e, r, n);
  }
  constructor(e, r, n) {
    super(r, n), this.elementName = e;
  }
};
var Yr2 = class {
  constructor(e, r) {
    this.rootNodes = e, this.errors = r;
  }
};
var nr2 = class {
  constructor(e) {
    this.getTagDefinition = e;
  }
  parse(e, r, n, s = false, i) {
    let a = (D) => (I2, ...F) => D(I2.toLowerCase(), ...F), o = s ? this.getTagDefinition : a(this.getTagDefinition), u = (D) => o(D).getContentType(), p = s ? i : a(i), f = Qs(e, r, i ? (D, I2, F, c) => {
      let g = p(D, I2, F, c);
      return g !== void 0 ? g : u(D);
    } : u, n), d = n && n.canSelfClose || false, C = n && n.allowHtmComponentClosingTags || false, A2 = new jr2(f.tokens, o, d, C, s);
    return A2.build(), new Yr2(A2.rootNodes, f.errors.concat(A2.errors));
  }
};
var jr2 = class t6 {
  constructor(e, r, n, s, i) {
    this.tokens = e, this.getTagDefinition = r, this.canSelfClose = n, this.allowHtmComponentClosingTags = s, this.isTagNameCaseSensitive = i, this._index = -1, this._containerStack = [], this.rootNodes = [], this.errors = [], this._advance();
  }
  build() {
    for (; this._peek.type !== 34; ) this._peek.type === 0 || this._peek.type === 4 ? this._consumeStartTag(this._advance()) : this._peek.type === 3 ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === 12 ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === 10 ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === 5 || this._peek.type === 7 || this._peek.type === 6 ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === 20 ? this._consumeExpansion(this._advance()) : this._peek.type === 25 ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === 27 ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === 29 ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === 30 ? (this._closeVoidElement(), this._consumeLet(this._advance())) : this._peek.type === 18 ? this._consumeDocType(this._advance()) : this._peek.type === 33 ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._advance();
    for (let e of this._containerStack) e instanceof te2 && this.errors.push(L2.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`));
  }
  _advance() {
    let e = this._peek;
    return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], e;
  }
  _advanceIf(e) {
    return this._peek.type === e ? this._advance() : null;
  }
  _consumeCdata(e) {
    let r = this._advance(), n = this._getText(r), s = this._advanceIf(13);
    this._addToParent(new Wt2(n, new h(e.sourceSpan.start, (s || r).sourceSpan.end), [r]));
  }
  _consumeComment(e) {
    let r = this._advanceIf(7), n = this._advanceIf(11), s = r != null ? r.parts[0].trim() : null, i = n == null ? e.sourceSpan : new h(e.sourceSpan.start, n.sourceSpan.end, e.sourceSpan.fullStart);
    this._addToParent(new jt2(s, i));
  }
  _consumeDocType(e) {
    let r = this._advanceIf(7), n = this._advanceIf(19), s = r != null ? r.parts[0].trim() : null, i = new h(e.sourceSpan.start, (n || r || e).sourceSpan.end);
    this._addToParent(new Kt2(s, i));
  }
  _consumeExpansion(e) {
    let r = this._advance(), n = this._advance(), s = [];
    for (; this._peek.type === 21; ) {
      let a = this._parseExpansionCase();
      if (!a) return;
      s.push(a);
    }
    if (this._peek.type !== 24) {
      this.errors.push(L2.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
      return;
    }
    let i = new h(e.sourceSpan.start, this._peek.sourceSpan.end, e.sourceSpan.fullStart);
    this._addToParent(new zt2(r.parts[0], n.parts[0], s, i, r.sourceSpan)), this._advance();
  }
  _parseExpansionCase() {
    let e = this._advance();
    if (this._peek.type !== 22) return this.errors.push(L2.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
    let r = this._advance(), n = this._collectExpansionExpTokens(r);
    if (!n) return null;
    let s = this._advance();
    n.push({ type: 34, parts: [], sourceSpan: s.sourceSpan });
    let i = new t6(n, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
    if (i.build(), i.errors.length > 0) return this.errors = this.errors.concat(i.errors), null;
    let a = new h(e.sourceSpan.start, s.sourceSpan.end, e.sourceSpan.fullStart), o = new h(r.sourceSpan.start, s.sourceSpan.end, r.sourceSpan.fullStart);
    return new Gt2(e.parts[0], i.rootNodes, a, e.sourceSpan, o);
  }
  _collectExpansionExpTokens(e) {
    let r = [], n = [22];
    for (; ; ) {
      if ((this._peek.type === 20 || this._peek.type === 22) && n.push(this._peek.type), this._peek.type === 23) if (Xs(n, 22)) {
        if (n.pop(), n.length === 0) return r;
      } else return this.errors.push(L2.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === 24) if (Xs(n, 20)) n.pop();
      else return this.errors.push(L2.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === 34) return this.errors.push(L2.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      r.push(this._advance());
    }
  }
  _getText(e) {
    let r = e.parts[0];
    if (r.length > 0 && r[0] == `
`) {
      let n = this._getClosestParentElement();
      n != null && n.children.length == 0 && this.getTagDefinition(n.name).ignoreFirstLf && (r = r.substring(1));
    }
    return r;
  }
  _consumeText(e) {
    let r = [e], n = e.sourceSpan, s = e.parts[0];
    if (s.length > 0 && s[0] === `
`) {
      let i = this._getContainer();
      i != null && i.children.length === 0 && this.getTagDefinition(i.name).ignoreFirstLf && (s = s.substring(1), r[0] = { type: e.type, sourceSpan: e.sourceSpan, parts: [s] });
    }
    for (; this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9; ) e = this._advance(), r.push(e), e.type === 8 ? s += e.parts.join("").replace(/&([^;]+);/g, Js) : e.type === 9 ? s += e.parts[0] : s += e.parts.join("");
    if (s.length > 0) {
      let i = e.sourceSpan;
      this._addToParent(new Ut2(s, new h(n.start, i.end, n.fullStart, n.details), r));
    }
  }
  _closeVoidElement() {
    let e = this._getContainer();
    e instanceof Y2 && this.getTagDefinition(e.name).isVoid && this._containerStack.pop();
  }
  _consumeStartTag(e) {
    let [r, n] = e.parts, s = [];
    for (; this._peek.type === 14; ) s.push(this._consumeAttr(this._advance()));
    let i = this._getElementFullName(r, n, this._getClosestParentElement()), a = false;
    if (this._peek.type === 2) {
      this._advance(), a = true;
      let C = this.getTagDefinition(i);
      this.canSelfClose || C.canSelfClose || Me2(i) !== null || C.isVoid || this.errors.push(L2.create(i, e.sourceSpan, `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`));
    } else this._peek.type === 1 && (this._advance(), a = false);
    let o = this._peek.sourceSpan.fullStart, u = new h(e.sourceSpan.start, o, e.sourceSpan.fullStart), p = new h(e.sourceSpan.start, o, e.sourceSpan.fullStart), l = new h(e.sourceSpan.start.moveBy(1), e.sourceSpan.end), f = new Y2(i, s, [], u, p, void 0, l), d = this._getContainer();
    this._pushContainer(f, d instanceof Y2 && this.getTagDefinition(d.name).isClosedByChild(f.name)), a ? this._popContainer(i, Y2, u) : e.type === 4 && (this._popContainer(i, Y2, null), this.errors.push(L2.create(i, u, `Opening tag "${i}" not terminated.`)));
  }
  _pushContainer(e, r) {
    r && this._containerStack.pop(), this._addToParent(e), this._containerStack.push(e);
  }
  _consumeEndTag(e) {
    let r = this.allowHtmComponentClosingTags && e.parts.length === 0 ? null : this._getElementFullName(e.parts[0], e.parts[1], this._getClosestParentElement());
    if (r && this.getTagDefinition(r).isVoid) this.errors.push(L2.create(r, e.sourceSpan, `Void elements do not have end tags "${e.parts[1]}"`));
    else if (!this._popContainer(r, Y2, e.sourceSpan)) {
      let n = `Unexpected closing tag "${r}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
      this.errors.push(L2.create(r, e.sourceSpan, n));
    }
  }
  _popContainer(e, r, n) {
    let s = false;
    for (let i = this._containerStack.length - 1; i >= 0; i--) {
      let a = this._containerStack[i];
      if (Me2(a.name) ? a.name === e : (e == null || a.name.toLowerCase() === e.toLowerCase()) && a instanceof r) return a.endSourceSpan = n, a.sourceSpan.end = n !== null ? n.end : a.sourceSpan.end, this._containerStack.splice(i, this._containerStack.length - i), !s;
      (a instanceof te2 || a instanceof Y2 && !this.getTagDefinition(a.name).closedByParent) && (s = true);
    }
    return false;
  }
  _consumeAttr(e) {
    let r = qe2(e.parts[0], e.parts[1]), n = e.sourceSpan.end, s;
    this._peek.type === 15 && (s = this._advance());
    let i = "", a = [], o, u;
    if (this._peek.type === 16) for (o = this._peek.sourceSpan, u = this._peek.sourceSpan.end; this._peek.type === 16 || this._peek.type === 17 || this._peek.type === 9; ) {
      let f = this._advance();
      a.push(f), f.type === 17 ? i += f.parts.join("").replace(/&([^;]+);/g, Js) : f.type === 9 ? i += f.parts[0] : i += f.parts.join(""), u = n = f.sourceSpan.end;
    }
    this._peek.type === 15 && (u = n = this._advance().sourceSpan.end);
    let l = o && u && new h((s == null ? void 0 : s.sourceSpan.start) ?? o.start, u, (s == null ? void 0 : s.sourceSpan.fullStart) ?? o.fullStart);
    return new Yt2(r, i, new h(e.sourceSpan.start, n, e.sourceSpan.fullStart), e.sourceSpan, l, a.length > 0 ? a : void 0, void 0);
  }
  _consumeBlockOpen(e) {
    let r = [];
    for (; this._peek.type === 28; ) {
      let o = this._advance();
      r.push(new ht2(o.parts[0], o.sourceSpan));
    }
    this._peek.type === 26 && this._advance();
    let n = this._peek.sourceSpan.fullStart, s = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart), i = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart), a = new te2(e.parts[0], r, [], s, e.sourceSpan, i);
    this._pushContainer(a, false);
  }
  _consumeBlockClose(e) {
    this._popContainer(null, te2, e.sourceSpan) || this.errors.push(L2.create(null, e.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'));
  }
  _consumeIncompleteBlock(e) {
    let r = [];
    for (; this._peek.type === 28; ) {
      let o = this._advance();
      r.push(new ht2(o.parts[0], o.sourceSpan));
    }
    let n = this._peek.sourceSpan.fullStart, s = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart), i = new h(e.sourceSpan.start, n, e.sourceSpan.fullStart), a = new te2(e.parts[0], r, [], s, e.sourceSpan, i);
    this._pushContainer(a, false), this._popContainer(null, te2, null), this.errors.push(L2.create(e.parts[0], s, `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
  }
  _consumeLet(e) {
    let r = e.parts[0], n, s;
    if (this._peek.type !== 31) {
      this.errors.push(L2.create(e.parts[0], e.sourceSpan, `Invalid @let declaration "${r}". Declaration must have a value.`));
      return;
    } else n = this._advance();
    if (this._peek.type !== 32) {
      this.errors.push(L2.create(e.parts[0], e.sourceSpan, `Unterminated @let declaration "${r}". Declaration must be terminated with a semicolon.`));
      return;
    } else s = this._advance();
    let i = s.sourceSpan.fullStart, a = new h(e.sourceSpan.start, i, e.sourceSpan.fullStart), o = e.sourceSpan.toString().lastIndexOf(r), u = e.sourceSpan.start.moveBy(o), p = new h(u, e.sourceSpan.end), l = new ft2(r, n.parts[0], a, p, n.sourceSpan);
    this._addToParent(l);
  }
  _consumeIncompleteLet(e) {
    let r = e.parts[0] ?? "", n = r ? ` "${r}"` : "";
    if (r.length > 0) {
      let s = e.sourceSpan.toString().lastIndexOf(r), i = e.sourceSpan.start.moveBy(s), a = new h(i, e.sourceSpan.end), o = new h(e.sourceSpan.start, e.sourceSpan.start.moveBy(0)), u = new ft2(r, "", e.sourceSpan, a, o);
      this._addToParent(u);
    }
    this.errors.push(L2.create(e.parts[0], e.sourceSpan, `Incomplete @let declaration${n}. @let declarations must be written as \`@let <name> = <value>;\``));
  }
  _getContainer() {
    return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
  }
  _getClosestParentElement() {
    for (let e = this._containerStack.length - 1; e > -1; e--) if (this._containerStack[e] instanceof Y2) return this._containerStack[e];
    return null;
  }
  _addToParent(e) {
    let r = this._getContainer();
    r === null ? this.rootNodes.push(e) : r.children.push(e);
  }
  _getElementFullName(e, r, n) {
    if (e === "" && (e = this.getTagDefinition(r).implicitNamespacePrefix || "", e === "" && n != null)) {
      let s = ct2(n.name)[1];
      this.getTagDefinition(s).preventNamespaceInheritance || (e = Me2(n.name));
    }
    return qe2(e, r);
  }
};
function Xs(t7, e) {
  return t7.length > 0 && t7[t7.length - 1] === e;
}
function Js(t7, e) {
  return Ve2[e] !== void 0 ? Ve2[e] || t7 : /^#x[a-f0-9]+$/i.test(e) ? String.fromCodePoint(parseInt(e.slice(2), 16)) : /^#\d+$/.test(e) ? String.fromCodePoint(parseInt(e.slice(1), 10)) : t7;
}
var sr2 = class extends nr2 {
  constructor() {
    super(He2);
  }
  parse(e, r, n, s = false, i) {
    return super.parse(e, r, n, s, i);
  }
};
var Kr2 = null;
var bo = () => (Kr2 || (Kr2 = new sr2()), Kr2);
function Qr2(t7, e = {}) {
  let { canSelfClose: r = false, allowHtmComponentClosingTags: n = false, isTagNameCaseSensitive: s = false, getTagContentType: i, tokenizeAngularBlocks: a = false, tokenizeAngularLetDeclaration: o = false } = e;
  return bo().parse(t7, "angular-html-parser", { tokenizeExpansionForms: a, interpolationConfig: void 0, canSelfClose: r, allowHtmComponentClosingTags: n, tokenizeBlocks: a, tokenizeLet: o }, s, i);
}
function To(t7, e) {
  let r = new SyntaxError(t7 + " (" + e.loc.start.line + ":" + e.loc.start.column + ")");
  return Object.assign(r, e);
}
var Zs = To;
var _t2 = 3;
function xo(t7) {
  let e = t7.slice(0, _t2);
  if (e !== "---" && e !== "+++") return;
  let r = t7.indexOf(`
`, _t2);
  if (r === -1) return;
  let n = t7.slice(_t2, r).trim(), s = t7.indexOf(`
${e}`, r), i = n;
  if (i || (i = e === "+++" ? "toml" : "yaml"), s === -1 && e === "---" && i === "yaml" && (s = t7.indexOf(`
...`, r)), s === -1) return;
  let a = s + 1 + _t2, o = t7.charAt(a + 1);
  if (!/\s?/u.test(o)) return;
  let u = t7.slice(0, a);
  return { type: "front-matter", language: i, explicitLanguage: n, value: t7.slice(r + 1, s), startDelimiter: e, endDelimiter: u.slice(-_t2), raw: u };
}
function ko(t7) {
  let e = xo(t7);
  if (!e) return { content: t7 };
  let { raw: r } = e;
  return { frontMatter: e, content: w2(false, r, /[^\n]/gu, " ") + t7.slice(r.length) };
}
var ei2 = ko;
var ir2 = { attrs: true, children: true, cases: true, expression: true };
var ti2 = /* @__PURE__ */ new Set(["parent"]);
var le2;
var Xr2;
var Jr2;
var ze2 = class ze3 {
  constructor(e = {}) {
    Et2(this, le2);
    lr2(this, "type");
    lr2(this, "parent");
    for (let r of /* @__PURE__ */ new Set([...ti2, ...Object.keys(e)])) this.setProperty(r, e[r]);
  }
  setProperty(e, r) {
    if (this[e] !== r) {
      if (e in ir2 && (r = r.map((n) => this.createChild(n))), !ti2.has(e)) {
        this[e] = r;
        return;
      }
      Object.defineProperty(this, e, { value: r, enumerable: false, configurable: true });
    }
  }
  map(e) {
    let r;
    for (let n in ir2) {
      let s = this[n];
      if (s) {
        let i = Bo(s, (a) => a.map(e));
        r !== s && (r || (r = new ze3({ parent: this.parent })), r.setProperty(n, i));
      }
    }
    if (r) for (let n in this) n in ir2 || (r[n] = this[n]);
    return e(r || this);
  }
  walk(e) {
    for (let r in ir2) {
      let n = this[r];
      if (n) for (let s = 0; s < n.length; s++) n[s].walk(e);
    }
    e(this);
  }
  createChild(e) {
    let r = e instanceof ze3 ? e.clone() : new ze3(e);
    return r.setProperty("parent", this), r;
  }
  insertChildBefore(e, r) {
    let n = this.$children;
    n.splice(n.indexOf(e), 0, this.createChild(r));
  }
  removeChild(e) {
    let r = this.$children;
    r.splice(r.indexOf(e), 1);
  }
  replaceChild(e, r) {
    let n = this.$children;
    n[n.indexOf(e)] = this.createChild(r);
  }
  clone() {
    return new ze3(this);
  }
  get $children() {
    return this[R2(this, le2, Xr2)];
  }
  set $children(e) {
    this[R2(this, le2, Xr2)] = e;
  }
  get firstChild() {
    var e;
    return (e = this.$children) == null ? void 0 : e[0];
  }
  get lastChild() {
    return K2(true, this.$children, -1);
  }
  get prev() {
    let e = R2(this, le2, Jr2);
    return e[e.indexOf(this) - 1];
  }
  get next() {
    let e = R2(this, le2, Jr2);
    return e[e.indexOf(this) + 1];
  }
  get rawName() {
    return this.hasExplicitNamespace ? this.fullName : this.name;
  }
  get fullName() {
    return this.namespace ? this.namespace + ":" + this.name : this.name;
  }
  get attrMap() {
    return Object.fromEntries(this.attrs.map((e) => [e.fullName, e.value]));
  }
};
le2 = /* @__PURE__ */ new WeakSet(), Xr2 = function() {
  return this.type === "angularIcuCase" ? "expression" : this.type === "angularIcuExpression" ? "cases" : "children";
}, Jr2 = function() {
  var e;
  return ((e = this.parent) == null ? void 0 : e.$children) ?? [];
};
var ar2 = ze2;
function Bo(t7, e) {
  let r = t7.map(e);
  return r.some((n, s) => n !== t7[s]) ? r : t7;
}
var Lo = [{ regex: /^(\[if([^\]]*)\]>)(.*?)<!\s*\[endif\]$/su, parse: Fo }, { regex: /^\[if([^\]]*)\]><!$/u, parse: No }, { regex: /^<!\s*\[endif\]$/u, parse: Po }];
function ri2(t7, e) {
  if (t7.value) for (let { regex: r, parse: n } of Lo) {
    let s = t7.value.match(r);
    if (s) return n(t7, e, s);
  }
  return null;
}
function Fo(t7, e, r) {
  let [, n, s, i] = r, a = 4 + n.length, o = t7.sourceSpan.start.moveBy(a), u = o.moveBy(i.length), [p, l] = (() => {
    try {
      return [true, e(i, o).children];
    } catch {
      return [false, [{ type: "text", value: i, sourceSpan: new h(o, u) }]];
    }
  })();
  return { type: "ieConditionalComment", complete: p, children: l, condition: w2(false, s.trim(), /\s+/gu, " "), sourceSpan: t7.sourceSpan, startSourceSpan: new h(t7.sourceSpan.start, o), endSourceSpan: new h(u, t7.sourceSpan.end) };
}
function No(t7, e, r) {
  let [, n] = r;
  return { type: "ieConditionalStartComment", condition: w2(false, n.trim(), /\s+/gu, " "), sourceSpan: t7.sourceSpan };
}
function Po(t7) {
  return { type: "ieConditionalEndComment", sourceSpan: t7.sourceSpan };
}
var or2 = /* @__PURE__ */ new Map([["*", /* @__PURE__ */ new Set(["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inert", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "popover", "slot", "spellcheck", "style", "tabindex", "title", "translate", "writingsuggestions"])], ["a", /* @__PURE__ */ new Set(["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"])], ["applet", /* @__PURE__ */ new Set(["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"])], ["area", /* @__PURE__ */ new Set(["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"])], ["audio", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"])], ["base", /* @__PURE__ */ new Set(["href", "target"])], ["basefont", /* @__PURE__ */ new Set(["color", "face", "size"])], ["blockquote", /* @__PURE__ */ new Set(["cite"])], ["body", /* @__PURE__ */ new Set(["alink", "background", "bgcolor", "link", "text", "vlink"])], ["br", /* @__PURE__ */ new Set(["clear"])], ["button", /* @__PURE__ */ new Set(["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "popovertarget", "popovertargetaction", "type", "value"])], ["canvas", /* @__PURE__ */ new Set(["height", "width"])], ["caption", /* @__PURE__ */ new Set(["align"])], ["col", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["colgroup", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["data", /* @__PURE__ */ new Set(["value"])], ["del", /* @__PURE__ */ new Set(["cite", "datetime"])], ["details", /* @__PURE__ */ new Set(["name", "open"])], ["dialog", /* @__PURE__ */ new Set(["open"])], ["dir", /* @__PURE__ */ new Set(["compact"])], ["div", /* @__PURE__ */ new Set(["align"])], ["dl", /* @__PURE__ */ new Set(["compact"])], ["embed", /* @__PURE__ */ new Set(["height", "src", "type", "width"])], ["fieldset", /* @__PURE__ */ new Set(["disabled", "form", "name"])], ["font", /* @__PURE__ */ new Set(["color", "face", "size"])], ["form", /* @__PURE__ */ new Set(["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"])], ["frame", /* @__PURE__ */ new Set(["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"])], ["frameset", /* @__PURE__ */ new Set(["cols", "rows"])], ["h1", /* @__PURE__ */ new Set(["align"])], ["h2", /* @__PURE__ */ new Set(["align"])], ["h3", /* @__PURE__ */ new Set(["align"])], ["h4", /* @__PURE__ */ new Set(["align"])], ["h5", /* @__PURE__ */ new Set(["align"])], ["h6", /* @__PURE__ */ new Set(["align"])], ["head", /* @__PURE__ */ new Set(["profile"])], ["hr", /* @__PURE__ */ new Set(["align", "noshade", "size", "width"])], ["html", /* @__PURE__ */ new Set(["manifest", "version"])], ["iframe", /* @__PURE__ */ new Set(["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"])], ["img", /* @__PURE__ */ new Set(["align", "alt", "border", "crossorigin", "decoding", "fetchpriority", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"])], ["input", /* @__PURE__ */ new Set(["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "popovertarget", "popovertargetaction", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"])], ["ins", /* @__PURE__ */ new Set(["cite", "datetime"])], ["isindex", /* @__PURE__ */ new Set(["prompt"])], ["label", /* @__PURE__ */ new Set(["for", "form"])], ["legend", /* @__PURE__ */ new Set(["align"])], ["li", /* @__PURE__ */ new Set(["type", "value"])], ["link", /* @__PURE__ */ new Set(["as", "blocking", "charset", "color", "crossorigin", "disabled", "fetchpriority", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"])], ["map", /* @__PURE__ */ new Set(["name"])], ["menu", /* @__PURE__ */ new Set(["compact"])], ["meta", /* @__PURE__ */ new Set(["charset", "content", "http-equiv", "media", "name", "scheme"])], ["meter", /* @__PURE__ */ new Set(["high", "low", "max", "min", "optimum", "value"])], ["object", /* @__PURE__ */ new Set(["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"])], ["ol", /* @__PURE__ */ new Set(["compact", "reversed", "start", "type"])], ["optgroup", /* @__PURE__ */ new Set(["disabled", "label"])], ["option", /* @__PURE__ */ new Set(["disabled", "label", "selected", "value"])], ["output", /* @__PURE__ */ new Set(["for", "form", "name"])], ["p", /* @__PURE__ */ new Set(["align"])], ["param", /* @__PURE__ */ new Set(["name", "type", "value", "valuetype"])], ["pre", /* @__PURE__ */ new Set(["width"])], ["progress", /* @__PURE__ */ new Set(["max", "value"])], ["q", /* @__PURE__ */ new Set(["cite"])], ["script", /* @__PURE__ */ new Set(["async", "blocking", "charset", "crossorigin", "defer", "fetchpriority", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"])], ["select", /* @__PURE__ */ new Set(["autocomplete", "disabled", "form", "multiple", "name", "required", "size"])], ["slot", /* @__PURE__ */ new Set(["name"])], ["source", /* @__PURE__ */ new Set(["height", "media", "sizes", "src", "srcset", "type", "width"])], ["style", /* @__PURE__ */ new Set(["blocking", "media", "type"])], ["table", /* @__PURE__ */ new Set(["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"])], ["tbody", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["td", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["template", /* @__PURE__ */ new Set(["shadowrootclonable", "shadowrootdelegatesfocus", "shadowrootmode"])], ["textarea", /* @__PURE__ */ new Set(["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"])], ["tfoot", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["th", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["thead", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["time", /* @__PURE__ */ new Set(["datetime"])], ["tr", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "valign"])], ["track", /* @__PURE__ */ new Set(["default", "kind", "label", "src", "srclang"])], ["ul", /* @__PURE__ */ new Set(["compact", "type"])], ["video", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"])]]);
var ni2 = /* @__PURE__ */ new Set(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]);
function Io(t7) {
  if (t7.type === "block") {
    if (t7.name = w2(false, t7.name.toLowerCase(), /\s+/gu, " ").trim(), t7.type = "angularControlFlowBlock", !Ie2(t7.parameters)) {
      delete t7.parameters;
      return;
    }
    for (let e of t7.parameters) e.type = "angularControlFlowBlockParameter";
    t7.parameters = { type: "angularControlFlowBlockParameters", children: t7.parameters, sourceSpan: new h(t7.parameters[0].sourceSpan.start, K2(false, t7.parameters, -1).sourceSpan.end) };
  }
}
function Ro(t7) {
  t7.type === "letDeclaration" && (t7.type = "angularLetDeclaration", t7.id = t7.name, t7.init = { type: "angularLetDeclarationInitializer", sourceSpan: new h(t7.valueSpan.start, t7.valueSpan.end), value: t7.value }, delete t7.name, delete t7.value);
}
function $o(t7) {
  (t7.type === "plural" || t7.type === "select") && (t7.clause = t7.type, t7.type = "angularIcuExpression"), t7.type === "expansionCase" && (t7.type = "angularIcuCase");
}
function ii2(t7, e, r) {
  let { name: n, canSelfClose: s = true, normalizeTagName: i = false, normalizeAttributeName: a = false, allowHtmComponentClosingTags: o = false, isTagNameCaseSensitive: u = false, shouldParseAsRawText: p } = e, { rootNodes: l, errors: f } = Qr2(t7, { canSelfClose: s, allowHtmComponentClosingTags: o, isTagNameCaseSensitive: u, getTagContentType: p ? (...c) => p(...c) ? P2.RAW_TEXT : void 0 : void 0, tokenizeAngularBlocks: n === "angular" ? true : void 0, tokenizeAngularLetDeclaration: n === "angular" ? true : void 0 });
  if (n === "vue") {
    if (l.some((x2) => x2.type === "docType" && x2.value === "html" || x2.type === "element" && x2.name.toLowerCase() === "html")) return ii2(t7, oi2, r);
    let g, y2 = () => g ?? (g = Qr2(t7, { canSelfClose: s, allowHtmComponentClosingTags: o, isTagNameCaseSensitive: u })), q2 = (x2) => y2().rootNodes.find(({ startSourceSpan: U2 }) => U2 && U2.start.offset === x2.startSourceSpan.start.offset) ?? x2;
    for (let [x2, U2] of l.entries()) {
      let { endSourceSpan: tn2, startSourceSpan: ui2 } = U2;
      if (tn2 === null) f = y2().errors, l[x2] = q2(U2);
      else if (Oo(U2, r)) {
        let rn2 = y2().errors.find((nn2) => nn2.span.start.offset > ui2.start.offset && nn2.span.start.offset < tn2.end.offset);
        rn2 && si2(rn2), l[x2] = q2(U2);
      }
    }
  }
  f.length > 0 && si2(f[0]);
  let d = (c) => {
    let g = c.name.startsWith(":") ? c.name.slice(1).split(":")[0] : null, y2 = c.nameSpan.toString(), q2 = g !== null && y2.startsWith(`${g}:`), x2 = q2 ? y2.slice(g.length + 1) : y2;
    c.name = x2, c.namespace = g, c.hasExplicitNamespace = q2;
  }, C = (c) => {
    switch (c.type) {
      case "element":
        d(c);
        for (let g of c.attrs) d(g), g.valueSpan ? (g.value = g.valueSpan.toString(), /["']/u.test(g.value[0]) && (g.value = g.value.slice(1, -1))) : g.value = null;
        break;
      case "comment":
        c.value = c.sourceSpan.toString().slice(4, -3);
        break;
      case "text":
        c.value = c.sourceSpan.toString();
        break;
    }
  }, A2 = (c, g) => {
    let y2 = c.toLowerCase();
    return g(y2) ? y2 : c;
  }, D = (c) => {
    if (c.type === "element" && (i && (!c.namespace || c.namespace === c.tagDefinition.implicitNamespacePrefix || fe2(c)) && (c.name = A2(c.name, (g) => ni2.has(g))), a)) for (let g of c.attrs) g.namespace || (g.name = A2(g.name, (y2) => or2.has(c.name) && (or2.get("*").has(y2) || or2.get(c.name).has(y2))));
  }, I2 = (c) => {
    c.sourceSpan && c.endSourceSpan && (c.sourceSpan = new h(c.sourceSpan.start, c.endSourceSpan.end));
  }, F = (c) => {
    if (c.type === "element") {
      let g = He2(u ? c.name : c.name.toLowerCase());
      !c.namespace || c.namespace === g.implicitNamespacePrefix || fe2(c) ? c.tagDefinition = g : c.tagDefinition = He2("");
    }
  };
  return Qt2(new class extends mt2 {
    visitExpansionCase(c, g) {
      n === "angular" && this.visitChildren(g, (y2) => {
        y2(c.expression);
      });
    }
    visit(c) {
      C(c), F(c), D(c), I2(c);
    }
  }(), l), l;
}
function Oo(t7, e) {
  var n;
  if (t7.type !== "element" || t7.name !== "template") return false;
  let r = (n = t7.attrs.find((s) => s.name === "lang")) == null ? void 0 : n.value;
  return !r || Ne2(e, { language: r }) === "html";
}
function si2(t7) {
  let { msg: e, span: { start: r, end: n } } = t7;
  throw Zs(e, { loc: { start: { line: r.line + 1, column: r.col + 1 }, end: { line: n.line + 1, column: n.col + 1 } }, cause: t7 });
}
function ai2(t7, e, r = {}, n = true) {
  let { frontMatter: s, content: i } = n ? ei2(t7) : { frontMatter: null, content: t7 }, a = new De2(t7, r.filepath), o = new ie2(a, 0, 0, 0), u = o.moveBy(t7.length), p = { type: "root", sourceSpan: new h(o, u), children: ii2(i, e, r) };
  if (s) {
    let d = new ie2(a, 0, 0, 0), C = d.moveBy(s.raw.length);
    s.sourceSpan = new h(d, C), p.children.unshift(s);
  }
  let l = new ar2(p), f = (d, C) => {
    let { offset: A2 } = C, D = w2(false, t7.slice(0, A2), /[^\n\r]/gu, " "), F = ai2(D + d, e, r, false);
    F.sourceSpan = new h(C, K2(false, F.children, -1).sourceSpan.end);
    let c = F.children[0];
    return c.length === A2 ? F.children.shift() : (c.sourceSpan = new h(c.sourceSpan.start.moveBy(A2), c.sourceSpan.end), c.value = c.value.slice(A2)), F;
  };
  return l.walk((d) => {
    if (d.type === "comment") {
      let C = ri2(d, f);
      C && d.parent.replaceChild(d, C);
    }
    Io(d), Ro(d), $o(d);
  }), l;
}
function ur(t7) {
  return { parse: (e, r) => ai2(e, t7, r), hasPragma: fs, astFormat: "html", locStart: J2, locEnd: Z2 };
}
var oi2 = { name: "html", normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true };
var Mo = ur(oi2);
var qo = ur({ name: "angular" });
var Ho = ur({ name: "vue", isTagNameCaseSensitive: true, shouldParseAsRawText(t7, e, r, n) {
  return t7.toLowerCase() !== "html" && !r && (t7 !== "template" || n.some(({ name: s, value: i }) => s === "lang" && i !== "html" && i !== "" && i !== void 0));
} });
var Vo = ur({ name: "lwc", canSelfClose: false });
var Uo = { html: Ts };
var Gh = en2;

// node_modules/@forsakringskassan/docs-live-example/dist/esm/index.js
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, createCommentVNode as _createCommentVNode, vModelRadio as _vModelRadio, withDirectives as _withDirectives, openBlock as _openBlock, createElementBlock as _createElementBlock, Fragment as _Fragment } from "vue";
import { defineComponent, compile, h as h2 } from "vue";
import { resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock2, createElementBlock as _createElementBlock2, createCommentVNode as _createCommentVNode2, createElementVNode as _createElementVNode2, Fragment as _Fragment2, renderSlot as _renderSlot } from "vue";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_core = __commonJS({
  "node_modules/highlight.js/lib/core.js"(exports, module) {
    function deepFreeze(obj) {
      if (obj instanceof Map) {
        obj.clear = obj.delete = obj.set = function() {
          throw new Error("map is read-only");
        };
      } else if (obj instanceof Set) {
        obj.add = obj.clear = obj.delete = function() {
          throw new Error("set is read-only");
        };
      }
      Object.freeze(obj);
      Object.getOwnPropertyNames(obj).forEach((name) => {
        const prop = obj[name];
        const type = typeof prop;
        if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
          deepFreeze(prop);
        }
      });
      return obj;
    }
    var Response = class {
      /**
       * @param {CompiledMode} mode
       */
      constructor(mode) {
        if (mode.data === void 0) mode.data = {};
        this.data = mode.data;
        this.isMatchIgnored = false;
      }
      ignoreMatch() {
        this.isMatchIgnored = true;
      }
    };
    function escapeHTML(value) {
      return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
    }
    function inherit$1(original, ...objects) {
      const result = /* @__PURE__ */ Object.create(null);
      for (const key in original) {
        result[key] = original[key];
      }
      objects.forEach(function(obj) {
        for (const key in obj) {
          result[key] = obj[key];
        }
      });
      return (
        /** @type {T} */
        result
      );
    }
    var SPAN_CLOSE = "</span>";
    var emitsWrappingTags = (node) => {
      return !!node.scope;
    };
    var scopeToCSSClass = (name, { prefix }) => {
      if (name.startsWith("language:")) {
        return name.replace("language:", "language-");
      }
      if (name.includes(".")) {
        const pieces = name.split(".");
        return [
          `${prefix}${pieces.shift()}`,
          ...pieces.map((x2, i) => `${x2}${"_".repeat(i + 1)}`)
        ].join(" ");
      }
      return `${prefix}${name}`;
    };
    var HTMLRenderer = class {
      /**
       * Creates a new HTMLRenderer
       *
       * @param {Tree} parseTree - the parse tree (must support `walk` API)
       * @param {{classPrefix: string}} options
       */
      constructor(parseTree, options) {
        this.buffer = "";
        this.classPrefix = options.classPrefix;
        parseTree.walk(this);
      }
      /**
       * Adds texts to the output stream
       *
       * @param {string} text */
      addText(text) {
        this.buffer += escapeHTML(text);
      }
      /**
       * Adds a node open to the output stream (if needed)
       *
       * @param {Node} node */
      openNode(node) {
        if (!emitsWrappingTags(node)) return;
        const className = scopeToCSSClass(
          node.scope,
          { prefix: this.classPrefix }
        );
        this.span(className);
      }
      /**
       * Adds a node close to the output stream (if needed)
       *
       * @param {Node} node */
      closeNode(node) {
        if (!emitsWrappingTags(node)) return;
        this.buffer += SPAN_CLOSE;
      }
      /**
       * returns the accumulated buffer
      */
      value() {
        return this.buffer;
      }
      // helpers
      /**
       * Builds a span element
       *
       * @param {string} className */
      span(className) {
        this.buffer += `<span class="${className}">`;
      }
    };
    var newNode = (opts = {}) => {
      const result = { children: [] };
      Object.assign(result, opts);
      return result;
    };
    var TokenTree = class _TokenTree {
      constructor() {
        this.rootNode = newNode();
        this.stack = [this.rootNode];
      }
      get top() {
        return this.stack[this.stack.length - 1];
      }
      get root() {
        return this.rootNode;
      }
      /** @param {Node} node */
      add(node) {
        this.top.children.push(node);
      }
      /** @param {string} scope */
      openNode(scope) {
        const node = newNode({ scope });
        this.add(node);
        this.stack.push(node);
      }
      closeNode() {
        if (this.stack.length > 1) {
          return this.stack.pop();
        }
        return void 0;
      }
      closeAllNodes() {
        while (this.closeNode()) ;
      }
      toJSON() {
        return JSON.stringify(this.rootNode, null, 4);
      }
      /**
       * @typedef { import("./html_renderer").Renderer } Renderer
       * @param {Renderer} builder
       */
      walk(builder) {
        return this.constructor._walk(builder, this.rootNode);
      }
      /**
       * @param {Renderer} builder
       * @param {Node} node
       */
      static _walk(builder, node) {
        if (typeof node === "string") {
          builder.addText(node);
        } else if (node.children) {
          builder.openNode(node);
          node.children.forEach((child) => this._walk(builder, child));
          builder.closeNode(node);
        }
        return builder;
      }
      /**
       * @param {Node} node
       */
      static _collapse(node) {
        if (typeof node === "string") return;
        if (!node.children) return;
        if (node.children.every((el) => typeof el === "string")) {
          node.children = [node.children.join("")];
        } else {
          node.children.forEach((child) => {
            _TokenTree._collapse(child);
          });
        }
      }
    };
    var TokenTreeEmitter = class extends TokenTree {
      /**
       * @param {*} options
       */
      constructor(options) {
        super();
        this.options = options;
      }
      /**
       * @param {string} text
       */
      addText(text) {
        if (text === "") {
          return;
        }
        this.add(text);
      }
      /** @param {string} scope */
      startScope(scope) {
        this.openNode(scope);
      }
      endScope() {
        this.closeNode();
      }
      /**
       * @param {Emitter & {root: DataNode}} emitter
       * @param {string} name
       */
      __addSublanguage(emitter, name) {
        const node = emitter.root;
        if (name) node.scope = `language:${name}`;
        this.add(node);
      }
      toHTML() {
        const renderer = new HTMLRenderer(this, this.options);
        return renderer.value();
      }
      finalize() {
        this.closeAllNodes();
        return true;
      }
    };
    function source(re2) {
      if (!re2) return null;
      if (typeof re2 === "string") return re2;
      return re2.source;
    }
    function lookahead(re2) {
      return concat("(?=", re2, ")");
    }
    function anyNumberOfTimes(re2) {
      return concat("(?:", re2, ")*");
    }
    function optional(re2) {
      return concat("(?:", re2, ")?");
    }
    function concat(...args) {
      const joined = args.map((x2) => source(x2)).join("");
      return joined;
    }
    function stripOptionsFromArgs(args) {
      const opts = args[args.length - 1];
      if (typeof opts === "object" && opts.constructor === Object) {
        args.splice(args.length - 1, 1);
        return opts;
      } else {
        return {};
      }
    }
    function either(...args) {
      const opts = stripOptionsFromArgs(args);
      const joined = "(" + (opts.capture ? "" : "?:") + args.map((x2) => source(x2)).join("|") + ")";
      return joined;
    }
    function countMatchGroups(re2) {
      return new RegExp(re2.toString() + "|").exec("").length - 1;
    }
    function startsWith(re2, lexeme) {
      const match = re2 && re2.exec(lexeme);
      return match && match.index === 0;
    }
    var BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
    function _rewriteBackreferences(regexps, { joinWith }) {
      let numCaptures = 0;
      return regexps.map((regex) => {
        numCaptures += 1;
        const offset = numCaptures;
        let re2 = source(regex);
        let out = "";
        while (re2.length > 0) {
          const match = BACKREF_RE.exec(re2);
          if (!match) {
            out += re2;
            break;
          }
          out += re2.substring(0, match.index);
          re2 = re2.substring(match.index + match[0].length);
          if (match[0][0] === "\\" && match[1]) {
            out += "\\" + String(Number(match[1]) + offset);
          } else {
            out += match[0];
            if (match[0] === "(") {
              numCaptures++;
            }
          }
        }
        return out;
      }).map((re2) => `(${re2})`).join(joinWith);
    }
    var MATCH_NOTHING_RE = /\b\B/;
    var IDENT_RE = "[a-zA-Z]\\w*";
    var UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
    var NUMBER_RE = "\\b\\d+(\\.\\d+)?";
    var C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
    var BINARY_NUMBER_RE = "\\b(0b[01]+)";
    var RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
    var SHEBANG = (opts = {}) => {
      const beginShebang = /^#![ ]*\//;
      if (opts.binary) {
        opts.begin = concat(
          beginShebang,
          /.*\b/,
          opts.binary,
          /\b.*/
        );
      }
      return inherit$1({
        scope: "meta",
        begin: beginShebang,
        end: /$/,
        relevance: 0,
        /** @type {ModeCallback} */
        "on:begin": (m2, resp) => {
          if (m2.index !== 0) resp.ignoreMatch();
        }
      }, opts);
    };
    var BACKSLASH_ESCAPE = {
      begin: "\\\\[\\s\\S]",
      relevance: 0
    };
    var APOS_STRING_MODE = {
      scope: "string",
      begin: "'",
      end: "'",
      illegal: "\\n",
      contains: [BACKSLASH_ESCAPE]
    };
    var QUOTE_STRING_MODE = {
      scope: "string",
      begin: '"',
      end: '"',
      illegal: "\\n",
      contains: [BACKSLASH_ESCAPE]
    };
    var PHRASAL_WORDS_MODE = {
      begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
    };
    var COMMENT = function(begin, end, modeOptions = {}) {
      const mode = inherit$1(
        {
          scope: "comment",
          begin,
          end,
          contains: []
        },
        modeOptions
      );
      mode.contains.push({
        scope: "doctag",
        // hack to avoid the space from being included. the space is necessary to
        // match here to prevent the plain text rule below from gobbling up doctags
        begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
        end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
        excludeBegin: true,
        relevance: 0
      });
      const ENGLISH_WORD = either(
        // list of common 1 and 2 letter words in English
        "I",
        "a",
        "is",
        "so",
        "us",
        "to",
        "at",
        "if",
        "in",
        "it",
        "on",
        // note: this is not an exhaustive list of contractions, just popular ones
        /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
        // contractions - can't we'd they're let's, etc
        /[A-Za-z]+[-][a-z]+/,
        // `no-way`, etc.
        /[A-Za-z][a-z]{2,}/
        // allow capitalized words at beginning of sentences
      );
      mode.contains.push(
        {
          // TODO: how to include ", (, ) without breaking grammars that use these for
          // comment delimiters?
          // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
          // ---
          // this tries to find sequences of 3 english words in a row (without any
          // "programming" type syntax) this gives us a strong signal that we've
          // TRULY found a comment - vs perhaps scanning with the wrong language.
          // It's possible to find something that LOOKS like the start of the
          // comment - but then if there is no readable text - good chance it is a
          // false match and not a comment.
          //
          // for a visual example please see:
          // https://github.com/highlightjs/highlight.js/issues/2827
          begin: concat(
            /[ ]+/,
            // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
            "(",
            ENGLISH_WORD,
            /[.]?[:]?([.][ ]|[ ])/,
            "){3}"
          )
          // look for 3 words in a row
        }
      );
      return mode;
    };
    var C_LINE_COMMENT_MODE = COMMENT("//", "$");
    var C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
    var HASH_COMMENT_MODE = COMMENT("#", "$");
    var NUMBER_MODE = {
      scope: "number",
      begin: NUMBER_RE,
      relevance: 0
    };
    var C_NUMBER_MODE = {
      scope: "number",
      begin: C_NUMBER_RE,
      relevance: 0
    };
    var BINARY_NUMBER_MODE = {
      scope: "number",
      begin: BINARY_NUMBER_RE,
      relevance: 0
    };
    var REGEXP_MODE = {
      scope: "regexp",
      begin: /\/(?=[^/\n]*\/)/,
      end: /\/[gimuy]*/,
      contains: [
        BACKSLASH_ESCAPE,
        {
          begin: /\[/,
          end: /\]/,
          relevance: 0,
          contains: [BACKSLASH_ESCAPE]
        }
      ]
    };
    var TITLE_MODE = {
      scope: "title",
      begin: IDENT_RE,
      relevance: 0
    };
    var UNDERSCORE_TITLE_MODE = {
      scope: "title",
      begin: UNDERSCORE_IDENT_RE,
      relevance: 0
    };
    var METHOD_GUARD = {
      // excludes method names from keyword processing
      begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
      relevance: 0
    };
    var END_SAME_AS_BEGIN = function(mode) {
      return Object.assign(
        mode,
        {
          /** @type {ModeCallback} */
          "on:begin": (m2, resp) => {
            resp.data._beginMatch = m2[1];
          },
          /** @type {ModeCallback} */
          "on:end": (m2, resp) => {
            if (resp.data._beginMatch !== m2[1]) resp.ignoreMatch();
          }
        }
      );
    };
    var MODES = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      APOS_STRING_MODE,
      BACKSLASH_ESCAPE,
      BINARY_NUMBER_MODE,
      BINARY_NUMBER_RE,
      COMMENT,
      C_BLOCK_COMMENT_MODE,
      C_LINE_COMMENT_MODE,
      C_NUMBER_MODE,
      C_NUMBER_RE,
      END_SAME_AS_BEGIN,
      HASH_COMMENT_MODE,
      IDENT_RE,
      MATCH_NOTHING_RE,
      METHOD_GUARD,
      NUMBER_MODE,
      NUMBER_RE,
      PHRASAL_WORDS_MODE,
      QUOTE_STRING_MODE,
      REGEXP_MODE,
      RE_STARTERS_RE,
      SHEBANG,
      TITLE_MODE,
      UNDERSCORE_IDENT_RE,
      UNDERSCORE_TITLE_MODE
    });
    function skipIfHasPrecedingDot(match, response) {
      const before = match.input[match.index - 1];
      if (before === ".") {
        response.ignoreMatch();
      }
    }
    function scopeClassName(mode, _parent) {
      if (mode.className !== void 0) {
        mode.scope = mode.className;
        delete mode.className;
      }
    }
    function beginKeywords(mode, parent) {
      if (!parent) return;
      if (!mode.beginKeywords) return;
      mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
      mode.__beforeBegin = skipIfHasPrecedingDot;
      mode.keywords = mode.keywords || mode.beginKeywords;
      delete mode.beginKeywords;
      if (mode.relevance === void 0) mode.relevance = 0;
    }
    function compileIllegal(mode, _parent) {
      if (!Array.isArray(mode.illegal)) return;
      mode.illegal = either(...mode.illegal);
    }
    function compileMatch(mode, _parent) {
      if (!mode.match) return;
      if (mode.begin || mode.end) throw new Error("begin & end are not supported with match");
      mode.begin = mode.match;
      delete mode.match;
    }
    function compileRelevance(mode, _parent) {
      if (mode.relevance === void 0) mode.relevance = 1;
    }
    var beforeMatchExt = (mode, parent) => {
      if (!mode.beforeMatch) return;
      if (mode.starts) throw new Error("beforeMatch cannot be used with starts");
      const originalMode = Object.assign({}, mode);
      Object.keys(mode).forEach((key) => {
        delete mode[key];
      });
      mode.keywords = originalMode.keywords;
      mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
      mode.starts = {
        relevance: 0,
        contains: [
          Object.assign(originalMode, { endsParent: true })
        ]
      };
      mode.relevance = 0;
      delete originalMode.beforeMatch;
    };
    var COMMON_KEYWORDS = [
      "of",
      "and",
      "for",
      "in",
      "not",
      "or",
      "if",
      "then",
      "parent",
      // common variable name
      "list",
      // common variable name
      "value"
      // common variable name
    ];
    var DEFAULT_KEYWORD_SCOPE = "keyword";
    function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
      const compiledKeywords = /* @__PURE__ */ Object.create(null);
      if (typeof rawKeywords === "string") {
        compileList(scopeName, rawKeywords.split(" "));
      } else if (Array.isArray(rawKeywords)) {
        compileList(scopeName, rawKeywords);
      } else {
        Object.keys(rawKeywords).forEach(function(scopeName2) {
          Object.assign(
            compiledKeywords,
            compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
          );
        });
      }
      return compiledKeywords;
      function compileList(scopeName2, keywordList) {
        if (caseInsensitive) {
          keywordList = keywordList.map((x2) => x2.toLowerCase());
        }
        keywordList.forEach(function(keyword) {
          const pair = keyword.split("|");
          compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
        });
      }
    }
    function scoreForKeyword(keyword, providedScore) {
      if (providedScore) {
        return Number(providedScore);
      }
      return commonKeyword(keyword) ? 0 : 1;
    }
    function commonKeyword(keyword) {
      return COMMON_KEYWORDS.includes(keyword.toLowerCase());
    }
    var seenDeprecations = {};
    var error = (message) => {
      console.error(message);
    };
    var warn = (message, ...args) => {
      console.log(`WARN: ${message}`, ...args);
    };
    var deprecated = (version2, message) => {
      if (seenDeprecations[`${version2}/${message}`]) return;
      console.log(`Deprecated as of ${version2}. ${message}`);
      seenDeprecations[`${version2}/${message}`] = true;
    };
    var MultiClassError = new Error();
    function remapScopeNames(mode, regexes, { key }) {
      let offset = 0;
      const scopeNames = mode[key];
      const emit = {};
      const positions = {};
      for (let i = 1; i <= regexes.length; i++) {
        positions[i + offset] = scopeNames[i];
        emit[i + offset] = true;
        offset += countMatchGroups(regexes[i - 1]);
      }
      mode[key] = positions;
      mode[key]._emit = emit;
      mode[key]._multi = true;
    }
    function beginMultiClass(mode) {
      if (!Array.isArray(mode.begin)) return;
      if (mode.skip || mode.excludeBegin || mode.returnBegin) {
        error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
        throw MultiClassError;
      }
      if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
        error("beginScope must be object");
        throw MultiClassError;
      }
      remapScopeNames(mode, mode.begin, { key: "beginScope" });
      mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
    }
    function endMultiClass(mode) {
      if (!Array.isArray(mode.end)) return;
      if (mode.skip || mode.excludeEnd || mode.returnEnd) {
        error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
        throw MultiClassError;
      }
      if (typeof mode.endScope !== "object" || mode.endScope === null) {
        error("endScope must be object");
        throw MultiClassError;
      }
      remapScopeNames(mode, mode.end, { key: "endScope" });
      mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
    }
    function scopeSugar(mode) {
      if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
        mode.beginScope = mode.scope;
        delete mode.scope;
      }
    }
    function MultiClass(mode) {
      scopeSugar(mode);
      if (typeof mode.beginScope === "string") {
        mode.beginScope = { _wrap: mode.beginScope };
      }
      if (typeof mode.endScope === "string") {
        mode.endScope = { _wrap: mode.endScope };
      }
      beginMultiClass(mode);
      endMultiClass(mode);
    }
    function compileLanguage(language) {
      function langRe(value, global) {
        return new RegExp(
          source(value),
          "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : "")
        );
      }
      class MultiRegex {
        constructor() {
          this.matchIndexes = {};
          this.regexes = [];
          this.matchAt = 1;
          this.position = 0;
        }
        // @ts-ignore
        addRule(re2, opts) {
          opts.position = this.position++;
          this.matchIndexes[this.matchAt] = opts;
          this.regexes.push([opts, re2]);
          this.matchAt += countMatchGroups(re2) + 1;
        }
        compile() {
          if (this.regexes.length === 0) {
            this.exec = () => null;
          }
          const terminators = this.regexes.map((el) => el[1]);
          this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
          this.lastIndex = 0;
        }
        /** @param {string} s */
        exec(s) {
          this.matcherRe.lastIndex = this.lastIndex;
          const match = this.matcherRe.exec(s);
          if (!match) {
            return null;
          }
          const i = match.findIndex((el, i2) => i2 > 0 && el !== void 0);
          const matchData = this.matchIndexes[i];
          match.splice(0, i);
          return Object.assign(match, matchData);
        }
      }
      class ResumableMultiRegex {
        constructor() {
          this.rules = [];
          this.multiRegexes = [];
          this.count = 0;
          this.lastIndex = 0;
          this.regexIndex = 0;
        }
        // @ts-ignore
        getMatcher(index) {
          if (this.multiRegexes[index]) return this.multiRegexes[index];
          const matcher = new MultiRegex();
          this.rules.slice(index).forEach(([re2, opts]) => matcher.addRule(re2, opts));
          matcher.compile();
          this.multiRegexes[index] = matcher;
          return matcher;
        }
        resumingScanAtSamePosition() {
          return this.regexIndex !== 0;
        }
        considerAll() {
          this.regexIndex = 0;
        }
        // @ts-ignore
        addRule(re2, opts) {
          this.rules.push([re2, opts]);
          if (opts.type === "begin") this.count++;
        }
        /** @param {string} s */
        exec(s) {
          const m2 = this.getMatcher(this.regexIndex);
          m2.lastIndex = this.lastIndex;
          let result = m2.exec(s);
          if (this.resumingScanAtSamePosition()) {
            if (result && result.index === this.lastIndex) ;
            else {
              const m22 = this.getMatcher(0);
              m22.lastIndex = this.lastIndex + 1;
              result = m22.exec(s);
            }
          }
          if (result) {
            this.regexIndex += result.position + 1;
            if (this.regexIndex === this.count) {
              this.considerAll();
            }
          }
          return result;
        }
      }
      function buildModeRegex(mode) {
        const mm = new ResumableMultiRegex();
        mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
        if (mode.terminatorEnd) {
          mm.addRule(mode.terminatorEnd, { type: "end" });
        }
        if (mode.illegal) {
          mm.addRule(mode.illegal, { type: "illegal" });
        }
        return mm;
      }
      function compileMode(mode, parent) {
        const cmode = (
          /** @type CompiledMode */
          mode
        );
        if (mode.isCompiled) return cmode;
        [
          scopeClassName,
          // do this early so compiler extensions generally don't have to worry about
          // the distinction between match/begin
          compileMatch,
          MultiClass,
          beforeMatchExt
        ].forEach((ext) => ext(mode, parent));
        language.compilerExtensions.forEach((ext) => ext(mode, parent));
        mode.__beforeBegin = null;
        [
          beginKeywords,
          // do this later so compiler extensions that come earlier have access to the
          // raw array if they wanted to perhaps manipulate it, etc.
          compileIllegal,
          // default to 1 relevance if not specified
          compileRelevance
        ].forEach((ext) => ext(mode, parent));
        mode.isCompiled = true;
        let keywordPattern = null;
        if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
          mode.keywords = Object.assign({}, mode.keywords);
          keywordPattern = mode.keywords.$pattern;
          delete mode.keywords.$pattern;
        }
        keywordPattern = keywordPattern || /\w+/;
        if (mode.keywords) {
          mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
        }
        cmode.keywordPatternRe = langRe(keywordPattern, true);
        if (parent) {
          if (!mode.begin) mode.begin = /\B|\b/;
          cmode.beginRe = langRe(cmode.begin);
          if (!mode.end && !mode.endsWithParent) mode.end = /\B|\b/;
          if (mode.end) cmode.endRe = langRe(cmode.end);
          cmode.terminatorEnd = source(cmode.end) || "";
          if (mode.endsWithParent && parent.terminatorEnd) {
            cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
          }
        }
        if (mode.illegal) cmode.illegalRe = langRe(
          /** @type {RegExp | string} */
          mode.illegal
        );
        if (!mode.contains) mode.contains = [];
        mode.contains = [].concat(...mode.contains.map(function(c) {
          return expandOrCloneMode(c === "self" ? mode : c);
        }));
        mode.contains.forEach(function(c) {
          compileMode(
            /** @type Mode */
            c,
            cmode
          );
        });
        if (mode.starts) {
          compileMode(mode.starts, parent);
        }
        cmode.matcher = buildModeRegex(cmode);
        return cmode;
      }
      if (!language.compilerExtensions) language.compilerExtensions = [];
      if (language.contains && language.contains.includes("self")) {
        throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
      }
      language.classNameAliases = inherit$1(language.classNameAliases || {});
      return compileMode(
        /** @type Mode */
        language
      );
    }
    function dependencyOnParent(mode) {
      if (!mode) return false;
      return mode.endsWithParent || dependencyOnParent(mode.starts);
    }
    function expandOrCloneMode(mode) {
      if (mode.variants && !mode.cachedVariants) {
        mode.cachedVariants = mode.variants.map(function(variant) {
          return inherit$1(mode, { variants: null }, variant);
        });
      }
      if (mode.cachedVariants) {
        return mode.cachedVariants;
      }
      if (dependencyOnParent(mode)) {
        return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
      }
      if (Object.isFrozen(mode)) {
        return inherit$1(mode);
      }
      return mode;
    }
    var version = "11.11.1";
    var HTMLInjectionError = class extends Error {
      constructor(reason, html) {
        super(reason);
        this.name = "HTMLInjectionError";
        this.html = html;
      }
    };
    var escape = escapeHTML;
    var inherit = inherit$1;
    var NO_MATCH = Symbol("nomatch");
    var MAX_KEYWORD_HITS = 7;
    var HLJS = function(hljs) {
      const languages = /* @__PURE__ */ Object.create(null);
      const aliases = /* @__PURE__ */ Object.create(null);
      const plugins = [];
      let SAFE_MODE = true;
      const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
      const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
      let options = {
        ignoreUnescapedHTML: false,
        throwUnescapedHTML: false,
        noHighlightRe: /^(no-?highlight)$/i,
        languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
        classPrefix: "hljs-",
        cssSelector: "pre code",
        languages: null,
        // beta configuration options, subject to change, welcome to discuss
        // https://github.com/highlightjs/highlight.js/issues/1086
        __emitter: TokenTreeEmitter
      };
      function shouldNotHighlight(languageName) {
        return options.noHighlightRe.test(languageName);
      }
      function blockLanguage(block) {
        let classes = block.className + " ";
        classes += block.parentNode ? block.parentNode.className : "";
        const match = options.languageDetectRe.exec(classes);
        if (match) {
          const language = getLanguage(match[1]);
          if (!language) {
            warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
            warn("Falling back to no-highlight mode for this block.", block);
          }
          return language ? match[1] : "no-highlight";
        }
        return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
      }
      function highlight3(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
        let code = "";
        let languageName = "";
        if (typeof optionsOrCode === "object") {
          code = codeOrLanguageName;
          ignoreIllegals = optionsOrCode.ignoreIllegals;
          languageName = optionsOrCode.language;
        } else {
          deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
          deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
          languageName = codeOrLanguageName;
          code = optionsOrCode;
        }
        if (ignoreIllegals === void 0) {
          ignoreIllegals = true;
        }
        const context = {
          code,
          language: languageName
        };
        fire("before:highlight", context);
        const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
        result.code = context.code;
        fire("after:highlight", result);
        return result;
      }
      function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
        const keywordHits = /* @__PURE__ */ Object.create(null);
        function keywordData(mode, matchText) {
          return mode.keywords[matchText];
        }
        function processKeywords() {
          if (!top.keywords) {
            emitter.addText(modeBuffer);
            return;
          }
          let lastIndex = 0;
          top.keywordPatternRe.lastIndex = 0;
          let match = top.keywordPatternRe.exec(modeBuffer);
          let buf = "";
          while (match) {
            buf += modeBuffer.substring(lastIndex, match.index);
            const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
            const data = keywordData(top, word);
            if (data) {
              const [kind, keywordRelevance] = data;
              emitter.addText(buf);
              buf = "";
              keywordHits[word] = (keywordHits[word] || 0) + 1;
              if (keywordHits[word] <= MAX_KEYWORD_HITS) relevance += keywordRelevance;
              if (kind.startsWith("_")) {
                buf += match[0];
              } else {
                const cssClass = language.classNameAliases[kind] || kind;
                emitKeyword(match[0], cssClass);
              }
            } else {
              buf += match[0];
            }
            lastIndex = top.keywordPatternRe.lastIndex;
            match = top.keywordPatternRe.exec(modeBuffer);
          }
          buf += modeBuffer.substring(lastIndex);
          emitter.addText(buf);
        }
        function processSubLanguage() {
          if (modeBuffer === "") return;
          let result2 = null;
          if (typeof top.subLanguage === "string") {
            if (!languages[top.subLanguage]) {
              emitter.addText(modeBuffer);
              return;
            }
            result2 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
            continuations[top.subLanguage] = /** @type {CompiledMode} */
            result2._top;
          } else {
            result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
          }
          if (top.relevance > 0) {
            relevance += result2.relevance;
          }
          emitter.__addSublanguage(result2._emitter, result2.language);
        }
        function processBuffer() {
          if (top.subLanguage != null) {
            processSubLanguage();
          } else {
            processKeywords();
          }
          modeBuffer = "";
        }
        function emitKeyword(keyword, scope) {
          if (keyword === "") return;
          emitter.startScope(scope);
          emitter.addText(keyword);
          emitter.endScope();
        }
        function emitMultiClass(scope, match) {
          let i = 1;
          const max = match.length - 1;
          while (i <= max) {
            if (!scope._emit[i]) {
              i++;
              continue;
            }
            const klass = language.classNameAliases[scope[i]] || scope[i];
            const text = match[i];
            if (klass) {
              emitKeyword(text, klass);
            } else {
              modeBuffer = text;
              processKeywords();
              modeBuffer = "";
            }
            i++;
          }
        }
        function startNewMode(mode, match) {
          if (mode.scope && typeof mode.scope === "string") {
            emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
          }
          if (mode.beginScope) {
            if (mode.beginScope._wrap) {
              emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
              modeBuffer = "";
            } else if (mode.beginScope._multi) {
              emitMultiClass(mode.beginScope, match);
              modeBuffer = "";
            }
          }
          top = Object.create(mode, { parent: { value: top } });
          return top;
        }
        function endOfMode(mode, match, matchPlusRemainder) {
          let matched = startsWith(mode.endRe, matchPlusRemainder);
          if (matched) {
            if (mode["on:end"]) {
              const resp = new Response(mode);
              mode["on:end"](match, resp);
              if (resp.isMatchIgnored) matched = false;
            }
            if (matched) {
              while (mode.endsParent && mode.parent) {
                mode = mode.parent;
              }
              return mode;
            }
          }
          if (mode.endsWithParent) {
            return endOfMode(mode.parent, match, matchPlusRemainder);
          }
        }
        function doIgnore(lexeme) {
          if (top.matcher.regexIndex === 0) {
            modeBuffer += lexeme[0];
            return 1;
          } else {
            resumeScanAtSamePosition = true;
            return 0;
          }
        }
        function doBeginMatch(match) {
          const lexeme = match[0];
          const newMode = match.rule;
          const resp = new Response(newMode);
          const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
          for (const cb of beforeCallbacks) {
            if (!cb) continue;
            cb(match, resp);
            if (resp.isMatchIgnored) return doIgnore(lexeme);
          }
          if (newMode.skip) {
            modeBuffer += lexeme;
          } else {
            if (newMode.excludeBegin) {
              modeBuffer += lexeme;
            }
            processBuffer();
            if (!newMode.returnBegin && !newMode.excludeBegin) {
              modeBuffer = lexeme;
            }
          }
          startNewMode(newMode, match);
          return newMode.returnBegin ? 0 : lexeme.length;
        }
        function doEndMatch(match) {
          const lexeme = match[0];
          const matchPlusRemainder = codeToHighlight.substring(match.index);
          const endMode = endOfMode(top, match, matchPlusRemainder);
          if (!endMode) {
            return NO_MATCH;
          }
          const origin = top;
          if (top.endScope && top.endScope._wrap) {
            processBuffer();
            emitKeyword(lexeme, top.endScope._wrap);
          } else if (top.endScope && top.endScope._multi) {
            processBuffer();
            emitMultiClass(top.endScope, match);
          } else if (origin.skip) {
            modeBuffer += lexeme;
          } else {
            if (!(origin.returnEnd || origin.excludeEnd)) {
              modeBuffer += lexeme;
            }
            processBuffer();
            if (origin.excludeEnd) {
              modeBuffer = lexeme;
            }
          }
          do {
            if (top.scope) {
              emitter.closeNode();
            }
            if (!top.skip && !top.subLanguage) {
              relevance += top.relevance;
            }
            top = top.parent;
          } while (top !== endMode.parent);
          if (endMode.starts) {
            startNewMode(endMode.starts, match);
          }
          return origin.returnEnd ? 0 : lexeme.length;
        }
        function processContinuations() {
          const list = [];
          for (let current = top; current !== language; current = current.parent) {
            if (current.scope) {
              list.unshift(current.scope);
            }
          }
          list.forEach((item) => emitter.openNode(item));
        }
        let lastMatch = {};
        function processLexeme(textBeforeMatch, match) {
          const lexeme = match && match[0];
          modeBuffer += textBeforeMatch;
          if (lexeme == null) {
            processBuffer();
            return 0;
          }
          if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
            modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
            if (!SAFE_MODE) {
              const err = new Error(`0 width match regex (${languageName})`);
              err.languageName = languageName;
              err.badRule = lastMatch.rule;
              throw err;
            }
            return 1;
          }
          lastMatch = match;
          if (match.type === "begin") {
            return doBeginMatch(match);
          } else if (match.type === "illegal" && !ignoreIllegals) {
            const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
            err.mode = top;
            throw err;
          } else if (match.type === "end") {
            const processed = doEndMatch(match);
            if (processed !== NO_MATCH) {
              return processed;
            }
          }
          if (match.type === "illegal" && lexeme === "") {
            modeBuffer += "\n";
            return 1;
          }
          if (iterations > 1e5 && iterations > match.index * 3) {
            const err = new Error("potential infinite loop, way more iterations than matches");
            throw err;
          }
          modeBuffer += lexeme;
          return lexeme.length;
        }
        const language = getLanguage(languageName);
        if (!language) {
          error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
          throw new Error('Unknown language: "' + languageName + '"');
        }
        const md = compileLanguage(language);
        let result = "";
        let top = continuation || md;
        const continuations = {};
        const emitter = new options.__emitter(options);
        processContinuations();
        let modeBuffer = "";
        let relevance = 0;
        let index = 0;
        let iterations = 0;
        let resumeScanAtSamePosition = false;
        try {
          if (!language.__emitTokens) {
            top.matcher.considerAll();
            for (; ; ) {
              iterations++;
              if (resumeScanAtSamePosition) {
                resumeScanAtSamePosition = false;
              } else {
                top.matcher.considerAll();
              }
              top.matcher.lastIndex = index;
              const match = top.matcher.exec(codeToHighlight);
              if (!match) break;
              const beforeMatch = codeToHighlight.substring(index, match.index);
              const processedCount = processLexeme(beforeMatch, match);
              index = match.index + processedCount;
            }
            processLexeme(codeToHighlight.substring(index));
          } else {
            language.__emitTokens(codeToHighlight, emitter);
          }
          emitter.finalize();
          result = emitter.toHTML();
          return {
            language: languageName,
            value: result,
            relevance,
            illegal: false,
            _emitter: emitter,
            _top: top
          };
        } catch (err) {
          if (err.message && err.message.includes("Illegal")) {
            return {
              language: languageName,
              value: escape(codeToHighlight),
              illegal: true,
              relevance: 0,
              _illegalBy: {
                message: err.message,
                index,
                context: codeToHighlight.slice(index - 100, index + 100),
                mode: err.mode,
                resultSoFar: result
              },
              _emitter: emitter
            };
          } else if (SAFE_MODE) {
            return {
              language: languageName,
              value: escape(codeToHighlight),
              illegal: false,
              relevance: 0,
              errorRaised: err,
              _emitter: emitter,
              _top: top
            };
          } else {
            throw err;
          }
        }
      }
      function justTextHighlightResult(code) {
        const result = {
          value: escape(code),
          illegal: false,
          relevance: 0,
          _top: PLAINTEXT_LANGUAGE,
          _emitter: new options.__emitter(options)
        };
        result._emitter.addText(code);
        return result;
      }
      function highlightAuto(code, languageSubset) {
        languageSubset = languageSubset || options.languages || Object.keys(languages);
        const plaintext = justTextHighlightResult(code);
        const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
          (name) => _highlight(name, code, false)
        );
        results.unshift(plaintext);
        const sorted = results.sort((a, b2) => {
          if (a.relevance !== b2.relevance) return b2.relevance - a.relevance;
          if (a.language && b2.language) {
            if (getLanguage(a.language).supersetOf === b2.language) {
              return 1;
            } else if (getLanguage(b2.language).supersetOf === a.language) {
              return -1;
            }
          }
          return 0;
        });
        const [best, secondBest] = sorted;
        const result = best;
        result.secondBest = secondBest;
        return result;
      }
      function updateClassName(element, currentLang, resultLang) {
        const language = currentLang && aliases[currentLang] || resultLang;
        element.classList.add("hljs");
        element.classList.add(`language-${language}`);
      }
      function highlightElement(element) {
        let node = null;
        const language = blockLanguage(element);
        if (shouldNotHighlight(language)) return;
        fire(
          "before:highlightElement",
          { el: element, language }
        );
        if (element.dataset.highlighted) {
          console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
          return;
        }
        if (element.children.length > 0) {
          if (!options.ignoreUnescapedHTML) {
            console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
            console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
            console.warn("The element with unescaped HTML:");
            console.warn(element);
          }
          if (options.throwUnescapedHTML) {
            const err = new HTMLInjectionError(
              "One of your code blocks includes unescaped HTML.",
              element.innerHTML
            );
            throw err;
          }
        }
        node = element;
        const text = node.textContent;
        const result = language ? highlight3(text, { language, ignoreIllegals: true }) : highlightAuto(text);
        element.innerHTML = result.value;
        element.dataset.highlighted = "yes";
        updateClassName(element, language, result.language);
        element.result = {
          language: result.language,
          // TODO: remove with version 11.0
          re: result.relevance,
          relevance: result.relevance
        };
        if (result.secondBest) {
          element.secondBest = {
            language: result.secondBest.language,
            relevance: result.secondBest.relevance
          };
        }
        fire("after:highlightElement", { el: element, result, text });
      }
      function configure(userOptions) {
        options = inherit(options, userOptions);
      }
      const initHighlighting = () => {
        highlightAll();
        deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
      };
      function initHighlightingOnLoad() {
        highlightAll();
        deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
      }
      let wantsHighlight = false;
      function highlightAll() {
        function boot() {
          highlightAll();
        }
        if (document.readyState === "loading") {
          if (!wantsHighlight) {
            window.addEventListener("DOMContentLoaded", boot, false);
          }
          wantsHighlight = true;
          return;
        }
        const blocks = document.querySelectorAll(options.cssSelector);
        blocks.forEach(highlightElement);
      }
      function registerLanguage(languageName, languageDefinition) {
        let lang = null;
        try {
          lang = languageDefinition(hljs);
        } catch (error$1) {
          error("Language definition for '{}' could not be registered.".replace("{}", languageName));
          if (!SAFE_MODE) {
            throw error$1;
          } else {
            error(error$1);
          }
          lang = PLAINTEXT_LANGUAGE;
        }
        if (!lang.name) lang.name = languageName;
        languages[languageName] = lang;
        lang.rawDefinition = languageDefinition.bind(null, hljs);
        if (lang.aliases) {
          registerAliases(lang.aliases, { languageName });
        }
      }
      function unregisterLanguage(languageName) {
        delete languages[languageName];
        for (const alias of Object.keys(aliases)) {
          if (aliases[alias] === languageName) {
            delete aliases[alias];
          }
        }
      }
      function listLanguages() {
        return Object.keys(languages);
      }
      function getLanguage(name) {
        name = (name || "").toLowerCase();
        return languages[name] || languages[aliases[name]];
      }
      function registerAliases(aliasList, { languageName }) {
        if (typeof aliasList === "string") {
          aliasList = [aliasList];
        }
        aliasList.forEach((alias) => {
          aliases[alias.toLowerCase()] = languageName;
        });
      }
      function autoDetection(name) {
        const lang = getLanguage(name);
        return lang && !lang.disableAutodetect;
      }
      function upgradePluginAPI(plugin) {
        if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
          plugin["before:highlightElement"] = (data) => {
            plugin["before:highlightBlock"](
              Object.assign({ block: data.el }, data)
            );
          };
        }
        if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
          plugin["after:highlightElement"] = (data) => {
            plugin["after:highlightBlock"](
              Object.assign({ block: data.el }, data)
            );
          };
        }
      }
      function addPlugin(plugin) {
        upgradePluginAPI(plugin);
        plugins.push(plugin);
      }
      function removePlugin(plugin) {
        const index = plugins.indexOf(plugin);
        if (index !== -1) {
          plugins.splice(index, 1);
        }
      }
      function fire(event, args) {
        const cb = event;
        plugins.forEach(function(plugin) {
          if (plugin[cb]) {
            plugin[cb](args);
          }
        });
      }
      function deprecateHighlightBlock(el) {
        deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
        deprecated("10.7.0", "Please use highlightElement now.");
        return highlightElement(el);
      }
      Object.assign(hljs, {
        highlight: highlight3,
        highlightAuto,
        highlightAll,
        highlightElement,
        // TODO: Remove with v12 API
        highlightBlock: deprecateHighlightBlock,
        configure,
        initHighlighting,
        initHighlightingOnLoad,
        registerLanguage,
        unregisterLanguage,
        listLanguages,
        getLanguage,
        registerAliases,
        autoDetection,
        inherit,
        addPlugin,
        removePlugin
      });
      hljs.debugMode = function() {
        SAFE_MODE = false;
      };
      hljs.safeMode = function() {
        SAFE_MODE = true;
      };
      hljs.versionString = version;
      hljs.regex = {
        concat,
        lookahead,
        either,
        optional,
        anyNumberOfTimes
      };
      for (const key in MODES) {
        if (typeof MODES[key] === "object") {
          deepFreeze(MODES[key]);
        }
      }
      Object.assign(hljs, MODES);
      return hljs;
    };
    var highlight2 = HLJS({});
    highlight2.newInstance = () => HLJS({});
    module.exports = highlight2;
    highlight2.HighlightJS = highlight2;
    highlight2.default = highlight2;
  }
});
var DURATION = 400;
var ClassNames = {
  EXPANDING: "expanding",
  COLLAPSING: "collapsing"
};
var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion)");
var useAnimation = !prefersReducedMotion.matches;
prefersReducedMotion.addEventListener("change", (event) => {
  useAnimation = !event.matches;
});
function expandAnimation(element) {
  let animation = null;
  let isOpen = false;
  let isClosing = false;
  let isExpanding = false;
  return {
    get isOpen() {
      return isOpen;
    },
    toggle() {
      if (useAnimation) {
        element.style.overflow = "hidden";
        if (isExpanding || isOpen) {
          isOpen = false;
          shrink();
        } else if (isClosing || !isOpen) {
          isOpen = true;
          open();
        }
        return;
      }
      if (isOpen) {
        isOpen = false;
        element.setAttribute("aria-expanded", "false");
      } else {
        isOpen = true;
        element.setAttribute("aria-expanded", "true");
      }
    }
  };
  function shrink() {
    isClosing = true;
    const startHeight = `${element.offsetHeight}px`;
    const endHeight = `0px`;
    element.classList.add(ClassNames.COLLAPSING);
    if (animation) {
      animation.cancel();
    }
    animation = element.animate(
      {
        height: [startHeight, endHeight]
      },
      {
        duration: DURATION,
        easing: "ease-in-out"
      }
    );
    animation.onfinish = () => {
      onAnimationFinish(false);
    };
    animation.oncancel = () => {
      element.classList.remove(ClassNames.COLLAPSING);
      isClosing = false;
    };
  }
  function open() {
    let currentHeight = 0;
    if (animation) {
      currentHeight = element.getBoundingClientRect().height;
    }
    element.setAttribute("aria-expanded", "true");
    window.requestAnimationFrame(() => expand(currentHeight));
  }
  function expand(currentHeight) {
    isExpanding = true;
    if (animation) {
      animation.cancel();
      element.style.height = "";
    }
    const startHeight = `${currentHeight}px`;
    const endHeight = `${element.offsetHeight}px`;
    element.classList.add(ClassNames.EXPANDING);
    animation = element.animate(
      {
        height: [startHeight, endHeight]
      },
      {
        duration: DURATION,
        easing: "ease-in-out"
      }
    );
    animation.onfinish = () => {
      onAnimationFinish(true);
    };
    animation.oncancel = () => {
      element.classList.remove(ClassNames.EXPANDING);
      isExpanding = false;
    };
  }
  function onAnimationFinish(open2) {
    element.setAttribute("aria-expanded", open2 ? "true" : "false");
    animation = null;
    isClosing = false;
    isExpanding = false;
    element.classList.remove(ClassNames.EXPANDING);
    element.classList.remove(ClassNames.COLLAPSING);
    element.style.height = "";
    element.style.overflow = "";
  }
}
function cyrb53(str) {
  const a = 2654435761;
  const b2 = 1597334677;
  const c = 2246822507;
  const d = 3266489909;
  const e = 4294967296;
  const f = 2097151;
  const seed = 0;
  let h1 = 3735928559 ^ seed;
  let h22 = 1103547991 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, a);
    h22 = Math.imul(h22 ^ ch, b2);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, c) ^ Math.imul(h22 ^ h22 >>> 13, d);
  h22 = Math.imul(h22 ^ h22 >>> 16, c) ^ Math.imul(h1 ^ h1 >>> 13, d);
  return e * (f & h22) + (h1 >>> 0);
}
function generateId(template) {
  const hash = cyrb53(template);
  return `le-${hash.toString(16)}`;
}
var import_core = __toESM(require_core(), 1);
var core_default = import_core.default;
function xml(hljs) {
  const regex = hljs.regex;
  const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
  const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
  const XML_ENTITIES = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  };
  const XML_META_KEYWORDS = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  };
  const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
    begin: /\(/,
    end: /\)/
  });
  const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: "string" });
  const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" });
  const TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: true,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [XML_ENTITIES]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [XML_ENTITIES]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: true,
    unicodeRegex: true,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          XML_META_KEYWORDS,
          QUOTE_META_STRING_MODE,
          APOS_META_STRING_MODE,
          XML_META_PAR_KEYWORDS,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  XML_META_KEYWORDS,
                  XML_META_PAR_KEYWORDS,
                  QUOTE_META_STRING_MODE,
                  APOS_META_STRING_MODE
                ]
              }
            ]
          }
        ]
      },
      hljs.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      XML_ENTITIES,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              QUOTE_META_STRING_MODE
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/script>/,
          returnEnd: true,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: regex.concat(
          /</,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            // <tag/>
            // <tag>
            // <tag ...
            regex.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0,
            starts: TAG_INTERNALS
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: regex.concat(
          /<\//,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: true
          }
        ]
      }
    ]
  };
}
core_default.registerLanguage("html", xml);
var prettierConfig = {
  parser: "html",
  plugins: [Gh],
  singleQuote: false,
  arrowParens: "always",
  tabWidth: 4,
  printWidth: 80
};
async function highlight(code) {
  const formatted = await yu(code, prettierConfig);
  const { value } = core_default.highlight(formatted, { language: "html" });
  return `<code class="hljs lang-html" tabindex="0">${value}</code>`;
}
function stripComments(html) {
  const commentPattern = /<!--.*?-->/g;
  return html.replace(commentPattern, "");
}
async function getSourceCode(options) {
  const { language, template, element } = options;
  if (language === "original") {
    return await highlight(template);
  } else {
    const html = element.innerHTML;
    const uncommented = stripComments(html);
    return await highlight(uncommented);
  }
}
var LiveExampleSourcecode_default = /* @__PURE__ */ _defineComponent({
  __name: "LiveExampleSourcecode",
  props: {
    element: {
      type: HTMLElement,
      required: true
    },
    template: {
      type: String,
      required: true
    },
    templateLanguage: {
      type: String,
      required: true
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    let idPrefix = generateId(props.template);
    const sourcecode = ref("");
    const expandable = ref(null);
    const animation = ref({
      isOpen: false,
      toggle() {
      }
    });
    const selectedLanguage = ref(toSelectedLanguage(props.templateLanguage));
    const codeToggleText = computed(() => {
      return animation.value.isOpen ? "D\xF6lj kod" : "Visa kod";
    });
    onMounted(() => {
      if (expandable.value) {
        animation.value = expandAnimation(expandable.value);
      } else {
        throw new Error("Missing HTML element");
      }
      updateSourcecode();
    });
    watch(() => props.template, onUpdateTemplate);
    watch(() => props.templateLanguage, updateSelectedLanguage, { once: true });
    async function updateSourcecode() {
      await nextTick();
      sourcecode.value = await getSourceCode({
        language: selectedLanguage.value,
        template: props.template ?? "",
        element: unwrapElement(props.element)
      });
    }
    function unwrapElement(element) {
      const firstElementChild = element.firstElementChild;
      return firstElementChild ?? element;
    }
    function updateSelectedLanguage(value) {
      selectedLanguage.value = toSelectedLanguage(value);
    }
    function id(suffix) {
      return `${idPrefix}--${suffix}`;
    }
    function toSelectedLanguage(value) {
      return value === "html" ? "rendered" : "original";
    }
    function onUpdateTemplate(template) {
      idPrefix = generateId(template);
      updateSourcecode();
    }
    function onToggleCode() {
      animation.value.toggle();
    }
    const __returned__ = { props, get idPrefix() {
      return idPrefix;
    }, set idPrefix(v2) {
      idPrefix = v2;
    }, sourcecode, expandable, animation, selectedLanguage, codeToggleText, updateSourcecode, unwrapElement, updateSelectedLanguage, id, toSelectedLanguage, onUpdateTemplate, onToggleCode };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "live-example__code-toggle" };
var _hoisted_2 = ["aria-controls", "aria-expanded"];
var _hoisted_3 = ["id"];
var _hoisted_4 = {
  class: "live-example__code-languages",
  onsubmit: "event.preventDefault()"
};
var _hoisted_5 = {
  key: 0,
  class: "fieldset radio-button-group radio-button-group--horizontal"
};
var _hoisted_6 = { class: "fieldset__content radio-button-group__content" };
var _hoisted_7 = {
  key: 0,
  class: "radio-button"
};
var _hoisted_8 = ["id"];
var _hoisted_9 = ["for"];
var _hoisted_10 = { class: "radio-button" };
var _hoisted_11 = ["id"];
var _hoisted_12 = ["for"];
var _hoisted_13 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createElementVNode("div", _hoisted_1, [
        _createElementVNode("button", {
          type: "button",
          class: "button button--discrete",
          "aria-controls": $setup.id("code-expand"),
          "aria-expanded": $setup.animation.isOpen ? "true" : "false",
          onClick: $setup.onToggleCode
        }, [
          _cache[2] || (_cache[2] = _createElementVNode(
            "i",
            { class: "icon icon--code" },
            null,
            -1
            /* HOISTED */
          )),
          _createTextVNode(
            " " + _toDisplayString($setup.codeToggleText),
            1
            /* TEXT */
          )
        ], 8, _hoisted_2)
      ]),
      _createElementVNode("div", {
        id: $setup.id("code-expand"),
        ref: "expandable",
        class: "collapsed"
      }, [
        _createCommentVNode(" [html-validate-disable-next wcag/h32 -- this form is not meant to be submitted] "),
        _createElementVNode("form", _hoisted_4, [
          $setup.sourcecode ? (_openBlock(), _createElementBlock("fieldset", _hoisted_5, [
            _cache[3] || (_cache[3] = _createElementVNode(
              "legend",
              { class: "label fieldset__label" },
              "Kodspr\xE5k",
              -1
              /* HOISTED */
            )),
            _createElementVNode("div", _hoisted_6, [
              $props.templateLanguage === "vue" ? (_openBlock(), _createElementBlock("div", _hoisted_7, [
                _withDirectives(_createElementVNode("input", {
                  id: $setup.id("lang-original"),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedLanguage = $event),
                  type: "radio",
                  class: "radio-button__input",
                  name: "selected-language",
                  value: "original",
                  onChange: $setup.updateSourcecode
                }, null, 40, _hoisted_8), [
                  [_vModelRadio, $setup.selectedLanguage]
                ]),
                _createElementVNode("label", {
                  for: $setup.id("lang-original"),
                  class: "radio-button__label"
                }, " Vue ", 8, _hoisted_9)
              ])) : _createCommentVNode("v-if", true),
              _createElementVNode("div", _hoisted_10, [
                _withDirectives(_createElementVNode("input", {
                  id: $setup.id("lang-rendered"),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.selectedLanguage = $event),
                  type: "radio",
                  class: "radio-button__input",
                  name: "selected-language",
                  value: "rendered",
                  onChange: $setup.updateSourcecode
                }, null, 40, _hoisted_11), [
                  [_vModelRadio, $setup.selectedLanguage]
                ]),
                _createElementVNode("label", {
                  for: $setup.id("lang-rendered"),
                  class: "radio-button__label"
                }, " HTML ", 8, _hoisted_12)
              ])
            ])
          ])) : _createCommentVNode("v-if", true)
        ]),
        _createCommentVNode(" eslint-disable-next-line vue/no-v-html -- expected to show highlighted markup "),
        _createElementVNode("pre", { innerHTML: $setup.sourcecode }, null, 8, _hoisted_13)
      ], 8, _hoisted_3)
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
LiveExampleSourcecode_default.render = render;
LiveExampleSourcecode_default.__file = "src/LiveExampleSourcecode.vue";
LiveExampleSourcecode_default.__scopeId = "data-v-7a98eb26";
var LiveExampleSourcecode_default2 = LiveExampleSourcecode_default;
var live_vue_code_default = defineComponent({
  name: "LiveVueCode",
  props: {
    template: {
      type: String,
      required: true
    },
    components: {
      type: Object,
      required: true
    },
    livedata: {
      type: Object,
      required: true
    },
    livemethods: {
      type: Object,
      required: true
    }
  },
  render() {
    const renderFunction = compile(this.template);
    if (!renderFunction) {
      const message = "Failed to compile Vue render function!";
      return h2("div", { style: "color: red" }, message);
    }
    return h2(
      {
        name: "LiveComponent",
        data() {
          return { ...this.livedata };
        },
        props: {
          livedata: {
            type: Object,
            required: true
          },
          livemethods: {
            type: Object,
            required: true
          }
        },
        methods: { ...this.livemethods },
        components: this.components,
        render: renderFunction
      },
      { livedata: this.livedata, livemethods: this.livemethods }
    );
  }
});
var LiveExample_default = defineComponent2({
  name: "LiveExample",
  components: { LiveExampleSourcecode: LiveExampleSourcecode_default2, LiveVueCode: live_vue_code_default },
  props: {
    /**
     * Explicitly render example in given language.
     *
     * Must be one of:
     *
     * - `"vue"` - Interpret `template` as a Vue SFC.
     * - `"html"` - Interpret `template` as vanilla HTML.
     *
     * Default is `"auto"` but you should not explicitly set this value
     * yourself. When set to `"auto"` the contents of `template` prop will
     * be autodetected based on some heurestics (subject to change at any
     * time).
     */
    language: {
      type: String,
      required: false,
      default: "auto",
      validator(value) {
        return ["vue", "html", "auto"].includes(value);
      }
    },
    template: {
      type: String,
      required: true
    },
    components: {
      type: Object,
      required: false,
      default: () => {
        return {};
      }
    },
    livedata: {
      type: Object,
      required: false,
      default: () => {
        return {};
      }
    },
    livemethods: {
      type: Object,
      required: false,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      /** Language declared by parent element via `data-language`, if any */
      parentLanguage: "",
      exampleElement: void 0
    };
  },
  computed: {
    templateLanguage() {
      if (this.language !== "auto") {
        return this.language;
      }
      if (this.parentLanguage) {
        return this.parentLanguage;
      }
      const hasChildComponents = Object.keys(this.components).length > 0;
      return hasChildComponents ? "vue" : "html";
    }
  },
  mounted() {
    const parent = this.$el.closest("[data-language]");
    if (parent) {
      this.parentLanguage = parent.dataset.language ?? "";
    }
    this.exampleElement = this.$refs.example;
  }
});
var _hoisted_14 = { class: "live-example__container" };
var _hoisted_22 = {
  ref: "example",
  class: "live-example__example"
};
var _hoisted_32 = { key: 0 };
var _hoisted_42 = ["innerHTML"];
var _hoisted_52 = { key: 2 };
var _hoisted_62 = { class: "live-example__controls" };
var _hoisted_72 = {
  key: 0,
  class: "live-example__code"
};
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_live_vue_code = _resolveComponent("live-vue-code");
  const _component_live_example_sourcecode = _resolveComponent("live-example-sourcecode");
  return _openBlock2(), _createElementBlock2("div", _hoisted_14, [
    _createElementVNode2(
      "div",
      _hoisted_22,
      [
        _ctx.templateLanguage === "vue" ? (_openBlock2(), _createElementBlock2("div", _hoisted_32, [
          _createVNode(_component_live_vue_code, {
            components: _ctx.components,
            template: _ctx.template,
            livedata: _ctx.livedata,
            livemethods: _ctx.livemethods
          }, null, 8, ["components", "template", "livedata", "livemethods"])
        ])) : _ctx.templateLanguage === "html" ? (_openBlock2(), _createElementBlock2(
          _Fragment2,
          { key: 1 },
          [
            _createCommentVNode2(" eslint-disable-next-line vue/no-v-html -- expected to show rendered html "),
            _createElementVNode2("div", { innerHTML: _ctx.template }, null, 8, _hoisted_42)
          ],
          2112
          /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
        )) : (_openBlock2(), _createElementBlock2("div", _hoisted_52, _cache[0] || (_cache[0] = [
          _createElementVNode2(
            "pre",
            null,
            "Unknown language, cannot render example",
            -1
            /* HOISTED */
          )
        ])))
      ],
      512
      /* NEED_PATCH */
    ),
    _createElementVNode2("div", _hoisted_62, [
      _renderSlot(_ctx.$slots, "default")
    ]),
    _ctx.exampleElement ? (_openBlock2(), _createElementBlock2("div", _hoisted_72, [
      _createVNode(_component_live_example_sourcecode, {
        element: _ctx.exampleElement,
        template: _ctx.template,
        "template-language": _ctx.templateLanguage
      }, null, 8, ["element", "template", "template-language"])
    ])) : _createCommentVNode2("v-if", true)
  ]);
}
LiveExample_default.render = render2;
LiveExample_default.__file = "src/LiveExample.vue";
var LiveExample_default2 = LiveExample_default;
var voidElements = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
function unpackArgs(args) {
  if (args.length === 0) {
    return { attributes: {}, children: [] };
  }
  if (args.length === 1) {
    const [arg02] = args;
    if (typeof arg02 === "string") {
      return { attributes: {}, children: [arg02] };
    } else if (Array.isArray(arg02)) {
      return { attributes: {}, children: arg02 };
    } else {
      return { attributes: arg02, children: [] };
    }
  }
  const [arg0, arg1] = args;
  return { attributes: arg0, children: Array.isArray(arg1) ? arg1 : [arg1] };
}
function serializeChildren(children) {
  if (children.length > 0) {
    return ` ${children.join(" ")} `;
  } else {
    return "";
  }
}
function serializeAttribute(key, value, prefix = "") {
  if (Array.isArray(value)) {
    const tokens = value.map((it3) => it3 ? String(it3) : null).filter(Boolean);
    if (tokens.length > 0) {
      return `${prefix}${key}="${tokens.join(" ")}"`;
    } else {
      return [];
    }
  }
  if (value === null || value === void 0) {
    return [];
  }
  if (typeof value === "string" || typeof value === "number") {
    return `${prefix}${key}="${value}"`;
  }
  if (typeof value === "boolean") {
    return value ? `${prefix}${key}` : [];
  }
  return Object.entries(value).map(([nestedKey, value2]) => {
    return serializeAttribute(nestedKey, value2, `${prefix}${key}-`);
  }).flat().filter(Boolean);
}
function serializeAttributes(attrs) {
  const entries = Object.entries(attrs);
  const kv = entries.map(([key, value]) => serializeAttribute(key, value));
  const flat = kv.flat();
  if (flat.length > 0) {
    return ` ${kv.flat().join(" ")}`;
  } else {
    return "";
  }
}
function createElement(tagName, ...args) {
  const { attributes, children } = unpackArgs(args);
  const attrs = serializeAttributes(attributes);
  if (voidElements.includes(tagName)) {
    return `<${tagName}${attrs}>`;
  } else {
    const content = serializeChildren(children);
    return `<${tagName}${attrs}>${content}</${tagName}>`;
  }
}
export {
  LiveExample_default2 as LiveExample,
  createElement
};
