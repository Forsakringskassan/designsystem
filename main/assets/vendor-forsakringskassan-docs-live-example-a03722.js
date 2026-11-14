// node_modules/@forsakringskassan/docs-live-example/dist/esm/index.js
import { defineComponent as defineComponent2 } from "vue";
import { defineComponent as _defineComponent } from "vue";
import { computed, nextTick, onMounted, ref, useTemplateRef, watch } from "vue";

// node_modules/prettier/plugins/html.mjs
var Ir = Object.defineProperty;
var Or = (e) => {
  throw TypeError(e);
};
var os = (e, t, r) => t in e ? Ir(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r;
var Rr = (e, t) => {
  for (var r in t) Ir(e, r, { get: t[r], enumerable: true });
};
var Ut = (e, t, r) => os(e, typeof t != "symbol" ? t + "" : t, r);
var ls = (e, t, r) => t.has(e) || Or("Cannot " + r);
var Fe = (e, t, r) => (ls(e, t, "read from private field"), r ? r.call(e) : t.get(e));
var Mr = (e, t, r) => t.has(e) ? Or("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r);
var as = {};
Rr(as, { languages: () => Yi, options: () => Xi, parsers: () => Dr, printers: () => il });
var Ee = (e, t) => (r, n, ...i) => r | 1 && n == null ? void 0 : (t.call(n) ?? n[e]).apply(n, i);
var cs = String.prototype.replaceAll ?? function(e, t) {
  return e.global ? this.replace(e, t) : this.split(e).join(t);
};
var us = Ee("replaceAll", function() {
  if (typeof this == "string") return cs;
});
var w = us;
function ps(e) {
  return this[e < 0 ? this.length + e : e];
}
var hs = Ee("at", function() {
  if (Array.isArray(this) || typeof this == "string") return ps;
});
var M = hs;
var ms = () => {
};
var He = ms;
var Ve = "string";
var Ue = "array";
var lt = "cursor";
var be = "indent";
var we = "align";
var ct = "trim";
var ke = "group";
var Te = "fill";
var ye = "if-break";
var xe = "indent-if-break";
var ut = "line-suffix";
var pt = "line-suffix-boundary";
var $ = "line";
var ht = "label";
var Ae = "break-parent";
var mt = /* @__PURE__ */ new Set([lt, be, we, ct, ke, Te, ye, xe, ut, pt, $, ht, Ae]);
function Le(e, t, r) {
  if (!e.has(t)) {
    let n = r(t);
    e.set(t, n);
  }
  return e.get(t);
}
function fs(e) {
  if (typeof e == "string") return Ve;
  if (Array.isArray(e)) return Ue;
  if (!e) return;
  let { type: t } = e;
  if (mt.has(t)) return t;
}
var ft = fs;
var ds = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function gs(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (ft(e)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = ds([...mt].map((i) => `'${i}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var Wt = class extends Error {
  name = "InvalidDocError";
  constructor(t) {
    super(gs(t)), this.doc = t;
  }
};
var Br = Wt;
function Gt(e, t) {
  if (typeof e == "string") return t(e);
  let r = /* @__PURE__ */ new Map();
  return n(e);
  function n(s) {
    return Le(r, s, i);
  }
  function i(s) {
    switch (ft(s)) {
      case Ue:
        return t(s.map(n));
      case Te:
        return t({ ...s, parts: s.parts.map(n) });
      case ye:
        return t({ ...s, breakContents: n(s.breakContents), flatContents: n(s.flatContents) });
      case ke: {
        let { expandedStates: a, contents: o } = s;
        return a ? (a = a.map(n), o = a[0]) : o = n(o), t({ ...s, contents: o, expandedStates: a });
      }
      case we:
      case be:
      case xe:
      case ht:
      case ut:
        return t({ ...s, contents: n(s.contents) });
      case Ve:
      case lt:
      case ct:
      case pt:
      case $:
      case Ae:
        return t(s);
      default:
        throw new Br(s);
    }
  }
}
function A(e, t = qr) {
  return Gt(e, (r) => typeof r == "string" ? P(t, r.split(`
`)) : r);
}
var I = He;
var dt = He;
var Fr = He;
var Hr = He;
function N(e) {
  return I(e), { type: be, contents: e };
}
function _s(e, t) {
  return Hr(e), I(t), { type: we, contents: t, n: e };
}
function Vr(e) {
  return _s(Number.NEGATIVE_INFINITY, e);
}
var B = { type: Ae };
function gt(e) {
  return Fr(e), { type: Te, parts: e };
}
function C(e, t = {}) {
  return I(e), dt(t.expandedStates, true), { type: ke, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function j(e, t = "", r = {}) {
  return I(e), t !== "" && I(t), { type: ye, breakContents: e, flatContents: t, groupId: r.groupId };
}
function Ur(e, t) {
  return I(e), { type: xe, contents: e, groupId: t.groupId, negate: t.negate };
}
function P(e, t) {
  I(e), dt(t);
  let r = [];
  for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
  return r;
}
var _ = { type: $ };
var T = { type: $, soft: true };
var Ss = { type: $, hard: true };
var E = [Ss, B];
var vs = { type: $, hard: true, literal: true };
var qr = [vs, B];
function zt(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var $t = class {
  #e;
  constructor(t) {
    this.#e = new Set(t);
  }
  getLeadingWhitespaceCount(t) {
    let r = this.#e, n = 0;
    for (let i = 0; i < t.length && r.has(t.charAt(i)); i++) n++;
    return n;
  }
  getTrailingWhitespaceCount(t) {
    let r = this.#e, n = 0;
    for (let i = t.length - 1; i >= 0 && r.has(t.charAt(i)); i--) n++;
    return n;
  }
  getLeadingWhitespace(t) {
    let r = this.getLeadingWhitespaceCount(t);
    return t.slice(0, r);
  }
  getTrailingWhitespace(t) {
    let r = this.getTrailingWhitespaceCount(t);
    return t.slice(t.length - r);
  }
  hasLeadingWhitespace(t) {
    return this.#e.has(t.charAt(0));
  }
  hasTrailingWhitespace(t) {
    return this.#e.has(M(0, t, -1));
  }
  trimStart(t) {
    let r = this.getLeadingWhitespaceCount(t);
    return t.slice(r);
  }
  trimEnd(t) {
    let r = this.getTrailingWhitespaceCount(t);
    return t.slice(0, t.length - r);
  }
  trim(t) {
    return this.trimEnd(this.trimStart(t));
  }
  split(t, r = false) {
    let n = `[${zt([...this.#e].join(""))}]+`, i = new RegExp(r ? `(${n})` : n);
    return t.split(i);
  }
  hasWhitespaceCharacter(t) {
    let r = this.#e;
    return Array.prototype.some.call(t, (n) => r.has(n));
  }
  hasNonWhitespaceCharacter(t) {
    let r = this.#e;
    return Array.prototype.some.call(t, (n) => !r.has(n));
  }
  isWhitespaceOnly(t) {
    let r = this.#e;
    return Array.prototype.every.call(t, (n) => r.has(n));
  }
  #t(t) {
    let r = Number.POSITIVE_INFINITY;
    for (let n of t.split(`
`)) {
      if (n.length === 0) continue;
      let i = this.getLeadingWhitespaceCount(n);
      if (i === 0) return 0;
      n.length !== i && i < r && (r = i);
    }
    return r === Number.POSITIVE_INFINITY ? 0 : r;
  }
  dedentString(t) {
    let r = this.#t(t);
    return r === 0 ? t : t.split(`
`).map((n) => n.slice(r)).join(`
`);
  }
};
var Wr = $t;
var Cs = ["	", `
`, "\f", "\r", " "];
var Es = new Wr(Cs);
var y = Es;
var jt = class extends Error {
  name = "UnexpectedNodeError";
  constructor(t, r, n = "type") {
    super(`Unexpected ${r} node ${n}: ${JSON.stringify(t[n])}.`), this.node = t;
  }
};
var Gr = jt;
function Y(e, t = true) {
  return [N([T, e]), t ? T : ""];
}
function V(e, t) {
  let r = e.type === "NGRoot" ? e.node.type === "NGMicrosyntax" && e.node.body.length === 1 && e.node.body[0].type === "NGMicrosyntaxExpression" ? e.node.body[0].expression : e.node : e.type === "JsExpressionRoot" ? e.node : e;
  return r && (r.type === "ObjectExpression" || r.type === "ArrayExpression" || (t.parser === "__vue_expression" || t.parser === "__vue_ts_expression" || t.parser === "__ng_binding" || t.parser === "__ng_directive") && (r.type === "TemplateLiteral" || r.type === "StringLiteral"));
}
async function x(e, t, r, n) {
  r = { __isInHtmlAttribute: true, __embeddedInHtml: true, ...r };
  let i = true;
  n && (r.__onHtmlBindingRoot = (a, o) => {
    i = n(a, o);
  });
  let s = await t(e, r, t);
  return i ? C(s) : Y(s);
}
function bs(e, t, r, n) {
  let { node: i } = r, s = n.originalText.slice(i.sourceSpan.start.offset, i.sourceSpan.end.offset);
  return /^\s*$/.test(s) ? "" : x(s, e, { parser: "__ng_directive", __isInHtmlAttribute: false }, V);
}
var zr = bs;
var ws = Object.hasOwn ?? Function.prototype.call.bind(Object.prototype.hasOwnProperty);
var O = ws;
var ks = Array.prototype.toReversed ?? function() {
  return [...this].reverse();
};
var Ts = Ee("toReversed", function() {
  if (Array.isArray(this)) return ks;
});
var $r = Ts;
function ys() {
  let e = globalThis, t = e.process?.platform;
  if (typeof t == "string") return t.startsWith("win");
  let r = e.Deno?.build?.os;
  return typeof r == "string" ? r === "windows" : e.navigator?.platform?.startsWith("Win") ?? false;
}
var xs = ys();
function jr(e) {
  if (e = e instanceof URL ? e : new URL(e), e.protocol !== "file:") throw new TypeError(`URL must be a file URL: received "${e.protocol}"`);
  return e;
}
function As(e) {
  return e = jr(e), decodeURIComponent(e.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function Ls(e) {
  e = jr(e);
  let t = decodeURIComponent(e.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  return e.hostname !== "" && (t = `\\\\${e.hostname}${t}`), t;
}
function Yt(e) {
  return xs ? Ls(e) : As(e);
}
var Yr = (e) => String(e).split(/[/\\]/).pop();
var Kr = (e) => String(e).startsWith("file:");
function Ns(e) {
  return Array.isArray(e) && e.length > 0;
}
var J = Ns;
function Xr(e, t) {
  if (!t) return;
  let r = Yr(t).toLowerCase();
  return e.find(({ filenames: n }) => n?.some((i) => i.toLowerCase() === r)) ?? e.find(({ extensions: n }) => n?.some((i) => r.endsWith(i)));
}
function Ps(e, t) {
  if (t) return e.find(({ name: r }) => r.toLowerCase() === t) ?? e.find(({ aliases: r }) => r?.includes(t)) ?? e.find(({ extensions: r }) => r?.includes(`.${t}`));
}
var Ds = void 0;
function Qr(e, t) {
  if (t) {
    if (Kr(t)) try {
      t = Yt(t);
    } catch {
      return;
    }
    if (typeof t == "string") return e.find(({ isSupported: r }) => r?.({ filepath: t }));
  }
}
function Is(e, t) {
  let r = $r(0, e.plugins).flatMap((i) => i.languages ?? []);
  return (Ps(r, t.language) ?? Xr(r, t.physicalFile) ?? Xr(r, t.file) ?? Qr(r, t.physicalFile) ?? Qr(r, t.file) ?? Ds?.(r, t.physicalFile))?.parsers[0];
}
var _t = Is;
var St = /* @__PURE__ */ Symbol.for("PRETTIER_IS_FRONT_MATTER");
function Os(e) {
  return !!e?.[St];
}
var ae = Os;
function Rs(e) {
  return w(0, e, /[^\n]/g, " ");
}
var vt = Rs;
var We = 3;
function Ms(e) {
  let t = e.slice(0, We);
  if (t !== "---" && t !== "+++") return;
  let r = e.indexOf(`
`, We);
  if (r === -1) return;
  let n = e.slice(We, r).trim(), i = e.indexOf(`
${t}`, r), s = n;
  if (s || (s = t === "+++" ? "toml" : "yaml"), i === -1 && t === "---" && s === "yaml" && (i = e.indexOf(`
...`, r)), i === -1) return;
  let a = i + 1 + We, o = e.charAt(a + 1);
  if (!/\s?/.test(o)) return;
  let l = e.slice(0, a), c;
  return { language: s, explicitLanguage: n || null, value: e.slice(r + 1, i), startDelimiter: t, endDelimiter: l.slice(-We), raw: l, start: { line: 1, column: 0, index: 0 }, end: { index: l.length, get line() {
    return c ?? (c = l.split(`
`)), c.length;
  }, get column() {
    return c ?? (c = l.split(`
`)), M(0, c, -1).length;
  } }, [St]: true };
}
function Bs(e) {
  let t = Ms(e);
  return t ? { frontMatter: t, get content() {
    let { raw: r } = t;
    return vt(r) + e.slice(r.length);
  } } : { content: e };
}
var Kt = Bs;
var Jr = "inline";
var Xt = { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", style: "none", template: "inline", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", dialog: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", search: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", menu: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", input: "inline-block", button: "inline-block", fieldset: "block", details: "block", summary: "block", marquee: "inline-block", option: "block", optgroup: "block", select: "inline-block", source: "block", track: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block" };
var Zr = "normal";
var Qt = { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" };
function qs(e) {
  return e.kind === "element" && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace);
}
var oe = qs;
var Fs = (e) => e?.kind === "element" && O(e.attrMap, "ngNonBindable");
var Hs = /* @__PURE__ */ new WeakMap();
var en = (e) => !!e && Le(Hs, e, (t) => Fs(t) || en(t.parent));
var tn = (e, t) => t.parser === "angular" && en(e);
var Vs = (e) => w(0, e, /^[\t\f\r ]*\n/g, "");
var Ct = (e) => Vs(y.trimEnd(e));
var rn = (e) => {
  let t = e, r = y.getLeadingWhitespace(t);
  r && (t = t.slice(r.length));
  let n = y.getTrailingWhitespace(t);
  return n && (t = t.slice(0, -n.length)), { leadingWhitespace: r, trailingWhitespace: n, text: t };
};
function Et(e, t) {
  return !!(e.kind === "ieConditionalComment" && e.lastChild && !e.lastChild.isSelfClosing && !e.lastChild.endSourceSpan || e.kind === "ieConditionalComment" && !e.complete || K(e) && e.children.some((r) => r.kind !== "text" && r.kind !== "interpolation") || kt(e, t) && !q(e, t) && e.kind !== "interpolation");
}
function le(e) {
  return e.kind === "attribute" || !e.parent || !e.prev ? false : Us(e.prev);
}
function Us(e) {
  return e.kind === "comment" && e.value.trim() === "prettier-ignore";
}
function D(e) {
  return e.kind === "text" || e.kind === "comment" || e.kind === "cdata";
}
function q(e, t) {
  return e.kind === "element" && (e.fullName === "script" || e.fullName === "style" || e.fullName === "svg:style" || e.fullName === "svg:script" || e.fullName === "mj-style" && t.parser === "mjml" || oe(e) && (e.name === "script" || e.name === "style"));
}
function nn(e, t) {
  return !(!e.children || q(e, t) || tn(e, t));
}
function sn(e, t) {
  return q(e, t) || e.kind === "interpolation" || Jt(e);
}
function Jt(e) {
  return gn(e).startsWith("pre");
}
function an(e, t) {
  let r = n();
  if (r && !e.prev && e.parent?.tagDefinition?.ignoreFirstLf) return e.kind === "interpolation";
  return r;
  function n() {
    return ae(e) || e.kind === "angularControlFlowBlock" ? false : (e.kind === "text" || e.kind === "interpolation") && e.prev && (e.prev.kind === "text" || e.prev.kind === "interpolation") ? true : !e.parent || e.parent.cssDisplay === "none" ? false : K(e.parent) ? true : !(!e.prev && (e.parent.kind === "root" || K(e) && e.parent || q(e.parent, t) || $e(e.parent, t) || !Ys(e.parent.cssDisplay)) || e.prev && !Qs(e.prev.cssDisplay));
  }
}
function on(e, t) {
  return ae(e) || e.kind === "angularControlFlowBlock" ? false : (e.kind === "text" || e.kind === "interpolation") && e.next && (e.next.kind === "text" || e.next.kind === "interpolation") ? true : !e.parent || e.parent.cssDisplay === "none" ? false : K(e.parent) ? true : !(!e.next && (e.parent.kind === "root" || K(e) && e.parent || q(e.parent, t) || $e(e.parent, t) || !Ks(e.parent.cssDisplay)) || e.next && !Xs(e.next.cssDisplay));
}
function ln(e, t) {
  return Js(e.cssDisplay) && !q(e, t);
}
function Ge(e) {
  return ae(e) || e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line;
}
function cn(e) {
  return Zt(e) || e.kind === "element" && e.children.length > 0 && (["body", "script", "style"].includes(e.name) || e.children.some((t) => Gs(t))) || e.firstChild && e.firstChild === e.lastChild && e.firstChild.kind !== "text" && pn(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || hn(e.lastChild));
}
function Zt(e) {
  return e.kind === "element" && e.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(e.name) || e.cssDisplay.startsWith("table") && e.cssDisplay !== "table-cell");
}
function bt(e) {
  return mn(e) || e.prev && Ws(e.prev) || un(e);
}
function Ws(e) {
  return mn(e) || e.kind === "element" && e.fullName === "br" || un(e);
}
function un(e) {
  return pn(e) && hn(e);
}
function pn(e) {
  return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : e.parent.kind === "root" || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
}
function hn(e) {
  return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : e.parent.kind === "root" || e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line);
}
function mn(e) {
  switch (e.kind) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return true;
    case "element":
      return ["script", "select"].includes(e.name);
  }
  return false;
}
function wt(e) {
  return e.lastChild ? wt(e.lastChild) : e;
}
function Gs(e) {
  return e.children?.some((t) => t.kind !== "text");
}
function fn(e) {
  if (e) switch (e) {
    case "module":
    case "text/javascript":
    case "text/babel":
    case "text/jsx":
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
      if (e.endsWith("json") || e.endsWith("importmap") || e === "speculationrules") return "json";
  }
}
function zs(e, t) {
  let { name: r, attrMap: n } = e;
  if (r !== "script" || O(n, "src")) return;
  let { type: i, lang: s } = e.attrMap;
  return !s && !i ? "babel" : _t(t, { language: s }) ?? fn(i);
}
function $s(e, t) {
  if (!kt(e, t)) return;
  let { attrMap: r } = e;
  if (O(r, "src")) return;
  let { type: n, lang: i } = r;
  return _t(t, { language: i }) ?? fn(n);
}
function js(e, t) {
  if (e.name === "style") {
    let { lang: r } = e.attrMap;
    return r ? _t(t, { language: r }) : "css";
  }
  if (e.name === "mj-style" && t.parser === "mjml") return "css";
}
function er(e, t) {
  return zs(e, t) ?? js(e, t) ?? $s(e, t);
}
function ze(e) {
  return e === "block" || e === "list-item" || e.startsWith("table");
}
function Ys(e) {
  return !ze(e) && e !== "inline-block";
}
function Ks(e) {
  return !ze(e) && e !== "inline-block";
}
function Xs(e) {
  return !ze(e);
}
function Qs(e) {
  return !ze(e);
}
function Js(e) {
  return !ze(e) && e !== "inline-block";
}
function K(e) {
  return gn(e).startsWith("pre");
}
function Zs(e, t) {
  let r = e;
  for (; r; ) {
    if (t(r)) return true;
    r = r.parent;
  }
  return false;
}
function dn(e, t) {
  if (ce(e, t)) return "block";
  if (e.prev?.kind === "comment") {
    let n = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
    if (n) return n[1];
  }
  let r = false;
  if (e.kind === "element" && e.namespace === "svg") if (Zs(e, (n) => n.fullName === "svg:foreignObject")) r = true;
  else return e.name === "svg" ? "inline-block" : "block";
  switch (t.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";
    case "ignore":
      return "block";
    default:
      if (e.kind === "element" && (!e.namespace || r || oe(e)) && O(Xt, e.name)) return Xt[e.name];
  }
  return Jr;
}
function gn(e) {
  return e.kind === "element" && (!e.namespace || oe(e)) && O(Qt, e.name) ? Qt[e.name] : Zr;
}
function tr(e) {
  return w(0, w(0, e, "&apos;", "'"), "&quot;", '"');
}
function k(e) {
  return tr(e.value);
}
var ea = /* @__PURE__ */ new Set(["template", "style", "script"]);
function $e(e, t) {
  return ce(e, t) && !ea.has(e.fullName);
}
function ce(e, t) {
  return t.parser === "vue" && e.kind === "element" && e.parent.kind === "root" && e.fullName.toLowerCase() !== "html";
}
function kt(e, t) {
  return ce(e, t) && ($e(e, t) || e.attrMap.lang && e.attrMap.lang !== "html");
}
function _n(e) {
  let t = e.fullName;
  return t.charAt(0) === "#" || t === "slot-scope" || t === "v-slot" || t.startsWith("v-slot:");
}
function Sn(e, t) {
  let r = e.parent;
  if (!ce(r, t)) return false;
  let n = r.fullName, i = e.fullName;
  return n === "script" && i === "setup" || n === "style" && i === "vars";
}
function Tt(e, t) {
  return ce(e, t) && e.name === "script";
}
function ta(e) {
  let { valueSpan: t, value: r } = e;
  return t.end.offset - t.start.offset === r.length + 2;
}
function yt(e, t) {
  if (ta(e)) return false;
  let { value: r } = e;
  return /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(r) || t.parser === "lwc" && r.startsWith("{") && r.endsWith("}");
}
var vn = /\{\{(.+?)\}\}/s;
var Cn = ({ node: { value: e } }) => vn.test(e);
async function En(e, t, r) {
  let n = k(r.node), i = [];
  for (let [s, a] of n.split(vn).entries()) if (s % 2 === 0) i.push(A(a));
  else try {
    i.push(C(["{{", N([_, await x(a, e, { parser: "__ng_interpolation", __isInHtmlInterpolation: true })]), _, "}}"]));
  } catch {
    i.push("{{", A(a), "}}");
  }
  return i;
}
var rr = (e) => (t, r, n) => x(k(n.node), t, { parser: e }, V);
var ra = [{ test(e) {
  let t = e.node.fullName;
  return t.startsWith("(") && t.endsWith(")") || t.startsWith("on-");
}, print: rr("__ng_action") }, { test(e) {
  let t = e.node.fullName;
  return t.startsWith("[") && t.endsWith("]") || /^bind(?:on)?-/.test(t) || /^ng-(?:if|show|hide|class|style|model-options)$/.test(t);
}, print: rr("__ng_binding") }, { test: (e) => e.node.fullName.startsWith("*"), print: rr("__ng_directive") }, { test: (e) => /^i18n(?:-.+)?$/.test(e.node.fullName), print: na }, { test: Cn, print: En }].map(({ test: e, print: t }) => ({ test: (r, n) => n.parser === "angular" && e(r), print: t }));
function na(e, t, { node: r }) {
  let n = k(r), i = gt(P(_, y.split(n.trim())));
  return Y(i, !n.includes("@@"));
}
var bn = ra;
var wn = ({ node: e }, t) => !t.parentParser && e.fullName === "class" && !e.value.includes("{{");
var kn = (e, t, r) => w(0, k(r.node).trim(), /\s+/g, " ");
var nr = ["onabort", "onafterprint", "onauxclick", "onbeforeinput", "onbeforematch", "onbeforeprint", "onbeforetoggle", "onbeforeunload", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncommand", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "onhashchange", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onlanguagechange", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmessage", "onmessageerror", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onoffline", "ononline", "onpagehide", "onpagereveal", "onpageshow", "onpageswap", "onpaste", "onpause", "onplay", "onplaying", "onpopstate", "onprogress", "onratechange", "onrejectionhandled", "onreset", "onresize", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onstorage", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onunhandledrejection", "onunload", "onvolumechange", "onwaiting", "onwheel"];
var sa = new Set(nr);
var Tn = ({ node: e }, t) => sa.has(e.fullName) && !t.parentParser && !e.value.includes("{{");
var yn = (e, t, r) => x(k(r.node), e, { parser: "babel", __isHtmlInlineEventHandler: true }, () => false);
function aa(e) {
  let t = [];
  for (let r of e.split(";")) {
    if (r = y.trim(r), !r) continue;
    let [n, ...i] = y.split(r);
    t.push({ name: n, value: i });
  }
  return t;
}
var xn = aa;
var An = ({ node: e }, t) => e.fullName === "allow" && !t.parentParser && e.parent.fullName === "iframe" && !e.value.includes("{{");
function Ln(e, t, r) {
  let { node: n } = r, i = xn(k(n));
  return i.length === 0 ? [""] : Y(i.map(({ name: s, value: a }, o) => [[s, ...a].join(" "), o === i.length - 1 ? j(";") : [";", _]]));
}
function Nn(e) {
  return e === "	" || e === `
` || e === "\f" || e === "\r" || e === " ";
}
var oa = /^[ \t\n\r\u000c]+/;
var la = /^[, \t\n\r\u000c]+/;
var ca = /^[^ \t\n\r\u000c]+/;
var ua = /[,]+$/;
var Pn = /^\d+$/;
var pa = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
function ha(e) {
  let t = e.length, r, n, i, s, a, o = 0, l;
  function c(h3) {
    let f, g = h3.exec(e.substring(o));
    if (g) return [f] = g, o += f.length, f;
  }
  let u = [];
  for (; ; ) {
    if (c(la), o >= t) {
      if (u.length === 0) throw new Error("Must contain one or more image candidate strings.");
      return u;
    }
    l = o, r = c(ca), n = [], r.slice(-1) === "," ? (r = r.replace(ua, ""), S2()) : d();
  }
  function d() {
    for (c(oa), i = "", s = "in descriptor"; ; ) {
      if (a = e.charAt(o), s === "in descriptor") if (Nn(a)) i && (n.push(i), i = "", s = "after descriptor");
      else if (a === ",") {
        o += 1, i && n.push(i), S2();
        return;
      } else if (a === "(") i += a, s = "in parens";
      else if (a === "") {
        i && n.push(i), S2();
        return;
      } else i += a;
      else if (s === "in parens") if (a === ")") i += a, s = "in descriptor";
      else if (a === "") {
        n.push(i), S2();
        return;
      } else i += a;
      else if (s === "after descriptor" && !Nn(a)) if (a === "") {
        S2();
        return;
      } else s = "in descriptor", o -= 1;
      o += 1;
    }
  }
  function S2() {
    let h3 = false, f, g, v2, z2, se2 = {}, Q2, ot2, Ce2, qe2, Vt2;
    for (z2 = 0; z2 < n.length; z2++) Q2 = n[z2], ot2 = Q2[Q2.length - 1], Ce2 = Q2.substring(0, Q2.length - 1), qe2 = parseInt(Ce2, 10), Vt2 = parseFloat(Ce2), Pn.test(Ce2) && ot2 === "w" ? ((f || g) && (h3 = true), qe2 === 0 ? h3 = true : f = qe2) : pa.test(Ce2) && ot2 === "x" ? ((f || g || v2) && (h3 = true), Vt2 < 0 ? h3 = true : g = Vt2) : Pn.test(Ce2) && ot2 === "h" ? ((v2 || g) && (h3 = true), qe2 === 0 ? h3 = true : v2 = qe2) : h3 = true;
    if (!h3) se2.source = { value: r, startOffset: l }, f && (se2.width = { value: f }), g && (se2.density = { value: g }), v2 && (se2.height = { value: v2 }), u.push(se2);
    else throw new Error(`Invalid srcset descriptor found in "${e}" at "${Q2}".`);
  }
}
var Dn = ha;
var In = (e) => e.node.fullName === "srcset" && (e.parent.fullName === "img" || e.parent.fullName === "source");
var On = { width: "w", height: "h", density: "x" };
var ma = Object.keys(On);
function Rn(e, t, r) {
  let n = k(r.node), i = Dn(n), s = ma.filter((h3) => i.some((f) => O(f, h3)));
  if (s.length > 1) throw new Error("Mixed descriptor in srcset is not supported");
  let [a] = s, o = On[a], l = i.map((h3) => h3.source.value), c = Math.max(...l.map((h3) => h3.length)), u = i.map((h3) => h3[a] ? String(h3[a].value) : ""), d = u.map((h3) => {
    let f = h3.indexOf(".");
    return f === -1 ? h3.length : f;
  }), S2 = Math.max(...d);
  return Y(P([",", _], l.map((h3, f) => {
    let g = [h3], v2 = u[f];
    if (v2) {
      let z2 = c - h3.length + 1, se2 = S2 - d[f], Q2 = " ".repeat(z2 + se2);
      g.push(j(Q2, " "), v2 + o);
    }
    return g;
  })));
}
var Mn = ({ node: e }, t) => e.fullName === "style" && !t.parentParser && !e.value.includes("{{");
var Bn = async (e, t, r) => Y(await e(k(r.node), { parser: "css", __isHTMLStyleAttribute: true }));
var fa = /* @__PURE__ */ new WeakMap();
function da(e, t) {
  return Le(fa, e.root, (r) => r.children.some((n) => Tt(n, t) && ["ts", "typescript"].includes(n.attrMap.lang)));
}
var U = da;
function qn(e, t, r) {
  let n = k(r.node);
  return x(`type T<${n}> = any`, e, { parser: "babel-ts", __isEmbeddedTypescriptGenericParameters: true }, V);
}
function Fn(e, t, r, n) {
  let i = k(r.node), s = U(r, n) ? "babel-ts" : "babel";
  return x(`function _(${i}) {}`, e, { parser: s, __isVueBindings: true });
}
async function Hn(e, t, r, n) {
  let i = k(r.node), { left: s, operator: a, right: o } = ga(i), l = U(r, n);
  return [C(await x(`function _(${s}) {}`, e, { parser: l ? "babel-ts" : "babel", __isVueForBindingLeft: true })), " ", a, " ", await x(o, e, { parser: l ? "__ts_expression" : "__js_expression" })];
}
function ga(e) {
  let t = /(.*?)\s+(in|of)\s+(.*)/s, r = e.match(t);
  if (!r) return;
  let n = { for: r[3].trim() };
  if (!n.for) return;
  let i = /,([^,\]}]*)(?:,([^,\]}]*))?$/, s = /^\(|\)$/g, a = w(0, r[1].trim(), s, ""), o = a.match(i);
  o ? (n.alias = a.replace(i, ""), n.iterator1 = o[1].trim(), o[2] && (n.iterator2 = o[2].trim())) : n.alias = a;
  let l = [n.alias, n.iterator1, n.iterator2];
  if (!l.some((c, u) => !c && (u === 0 || l.slice(u + 1).some(Boolean)))) return { left: l.filter(Boolean).join(","), operator: r[2], right: n.for };
}
var _a = [{ test: (e) => e.node.fullName === "v-for", print: Hn }, { test: (e, t) => e.node.fullName === "generic" && Tt(e.parent, t), print: qn }, { test: ({ node: e }, t) => _n(e) || Sn(e, t), print: Fn }, { test(e) {
  let t = e.node.fullName;
  return t.startsWith("@") || t.startsWith("v-on:");
}, print: Sa }, { test(e) {
  let t = e.node.fullName;
  return t.startsWith(":") || t.startsWith(".") || t.startsWith("v-bind:");
}, print: va }, { test: (e) => e.node.fullName.startsWith("v-"), print: Vn }].map(({ test: e, print: t }) => ({ test: (r, n) => n.parser === "vue" && e(r, n), print: t }));
async function Sa(e, t, r, n) {
  try {
    return await Vn(e, t, r, n);
  } catch (a) {
    if (a.cause?.code !== "BABEL_PARSER_SYNTAX_ERROR") throw a;
  }
  let i = k(r.node), s = U(r, n) ? "__vue_ts_event_binding" : "__vue_event_binding";
  return x(i, e, { parser: s }, V);
}
function va(e, t, r, n) {
  let i = k(r.node), s = U(r, n) ? "__vue_ts_expression" : "__vue_expression";
  return x(i, e, { parser: s }, V);
}
function Vn(e, t, r, n) {
  let i = k(r.node), s = U(r, n) ? "__ts_expression" : "__js_expression";
  return x(i, e, { parser: s }, V);
}
var Un = _a;
var Ca = [{ test: In, print: Rn }, { test: Mn, print: Bn }, { test: Tn, print: yn }, { test: wn, print: kn }, { test: An, print: Ln }, ...Un, ...bn].map(({ test: e, print: t }) => ({ test: e, print: ba(t) }));
function Ea(e, t) {
  let { node: r } = e, { value: n } = r;
  if (n) return yt(r, t) ? [r.rawName, "=", n] : Ca.find(({ test: i }) => i(e, t))?.print;
}
function ba(e) {
  return async (t, r, n, i) => {
    let s = await e(t, r, n, i);
    if (s) return s = Gt(s, (a) => typeof a == "string" ? w(0, a, '"', "&quot;") : a), [n.node.rawName, '="', C(s), '"'];
  };
}
var Wn = Ea;
var W = (e) => e.sourceSpan.start.offset;
var Z = (e) => e.sourceSpan.end.offset;
function je(e, t) {
  return [e.isSelfClosing ? "" : wa(e, t), ue(e, t)];
}
function wa(e, t) {
  return e.lastChild && X(e.lastChild) ? "" : [ka(e, t), xt(e, t)];
}
function ue(e, t) {
  return (e.next ? R(e.next) : he(e.parent)) ? "" : [pe(e, t), F(e, t)];
}
function ka(e, t) {
  return he(e) ? pe(e.lastChild, t) : "";
}
function F(e, t) {
  return X(e) ? xt(e.parent, t) : Ye(e) ? At(e.next, t) : "";
}
function xt(e, t) {
  if (zn(e, t)) return "";
  switch (e.kind) {
    case "ieConditionalComment":
      return "<!";
    case "element":
      if (e.hasHtmComponentClosingTag) return "<//";
    default:
      return `</${e.rawName}`;
  }
}
function pe(e, t) {
  if (zn(e, t)) return "";
  switch (e.kind) {
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
      if (e.isSelfClosing) return "/>";
    default:
      return ">";
  }
}
function zn(e, t) {
  return !e.isSelfClosing && !e.endSourceSpan && (le(e) || Et(e.parent, t));
}
function R(e) {
  return e.prev && e.prev.kind !== "docType" && e.kind !== "angularControlFlowBlock" && !D(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
}
function he(e) {
  return e.lastChild?.isTrailingSpaceSensitive && !e.lastChild.hasTrailingSpaces && !D(wt(e.lastChild)) && !K(e);
}
function X(e) {
  return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && D(wt(e));
}
function Ye(e) {
  return e.next && !D(e.next) && D(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
}
function Ta(e) {
  let t = e.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
  return t ? t[1] ? t[1].split(/\s+/) : true : false;
}
function Ke(e) {
  return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
}
function ya(e, t, r) {
  let { node: n } = e, { attrs: i = [], startTagComments: s = [] } = n;
  if (i.length === 0 && s.length === 0) return n.isSelfClosing ? " " : "";
  let a = n.prev?.kind === "comment" && Ta(n.prev.value), o = typeof a == "boolean" ? () => a : Array.isArray(a) ? (g) => a.includes(g.rawName) : () => false, l = ["attrs", "startTagComments"].filter((g) => J(n[g])), c = l.flatMap((g) => e.map(({ node: v2 }) => ({ loc: W(v2), printed: v2.kind === "attribute" && o(v2) ? A(t.originalText.slice(W(v2), Z(v2))) : r() }), g));
  l.length > 1 && c.sort((g, v2) => g.loc - v2.loc);
  let u = n.kind === "element" && n.fullName === "script" && i.length === 1 && i[0].fullName === "src" && n.children.length === 0 && s.length === 0, d = s.some((g) => g.type === "single"), h3 = d || t.singleAttributePerLine && i.length > 1 && !ce(n, t) ? E : _, f = [N([u ? " " : d ? E : _, P(h3, c.map(({ printed: g }) => g))])];
  return n.firstChild && Ke(n.firstChild) || n.isSelfClosing && he(n.parent) || u ? f.push(n.isSelfClosing ? " " : "") : f.push(t.bracketSameLine ? n.isSelfClosing ? " " : "" : n.isSelfClosing ? _ : T), f;
}
function xa(e) {
  return e.firstChild && Ke(e.firstChild) ? "" : Lt(e);
}
function Xe(e, t, r) {
  let { node: n } = e;
  return [me(n, t), ya(e, t, r), n.isSelfClosing ? "" : xa(n)];
}
function me(e, t) {
  return e.prev && Ye(e.prev) ? "" : [H(e, t), At(e, t)];
}
function H(e, t) {
  return Ke(e) ? Lt(e.parent) : R(e) ? pe(e.prev, t) : "";
}
var Gn = "<!doctype";
function At(e, t) {
  switch (e.kind) {
    case "ieConditionalComment":
    case "ieConditionalStartComment":
      return `<!--[if ${e.condition}`;
    case "ieConditionalEndComment":
      return "<!--<!";
    case "interpolation":
      return "{{";
    case "docType": {
      if (e.value === "html") {
        let { filepath: i } = t;
        if (i && /\.html?$/.test(i)) return Gn;
      }
      let r = W(e);
      return t.originalText.slice(r, r + Gn.length);
    }
    case "angularIcuExpression":
      return "{";
    case "element":
      if (e.condition) return `<!--[if ${e.condition}]><!--><${e.rawName}`;
    default:
      return `<${e.rawName}`;
  }
}
function Lt(e) {
  switch (e.kind) {
    case "ieConditionalComment":
      return "]>";
    case "element":
      if (e.condition) return "><!--<![endif]-->";
    default:
      return ">";
  }
}
function Aa(e, t) {
  if (!e.endSourceSpan) return "";
  let r = e.startSourceSpan.end.offset;
  e.firstChild && Ke(e.firstChild) && (r -= Lt(e).length);
  let n = e.endSourceSpan.start.offset;
  return e.lastChild && X(e.lastChild) ? n += xt(e, t).length : he(e) && (n -= pe(e.lastChild, t).length), t.originalText.slice(r, n);
}
var Nt = Aa;
var La = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function Na(e, t) {
  let { node: r } = e;
  switch (r.kind) {
    case "element":
      if (q(r, t) || r.kind === "interpolation") return;
      if (!r.isSelfClosing && kt(r, t)) {
        let n = er(r, t);
        return n ? async (i, s) => {
          let a = Nt(r, t), o = /^\s*$/.test(a), l = "";
          return o || (l = await i(Ct(a), { parser: n, __embeddedInHtml: true }), o = l === ""), [H(r, t), C(Xe(e, t, s)), o ? "" : E, l, o ? "" : E, je(r, t), F(r, t)];
        } : void 0;
      }
      break;
    case "text":
      if (q(r.parent, t)) {
        let n = er(r.parent, t);
        if (n) return async (i) => {
          let s = n === "markdown" ? y.dedentString(r.value.replace(/^[^\S\n]*\n/, "")) : r.value, a = { parser: n, __embeddedInHtml: true };
          if (t.parser === "html" && n === "babel") {
            let o = "script", { attrMap: l } = r.parent;
            l && (l.type === "module" || (l.type === "text/babel" || l.type === "text/jsx") && l["data-type"] === "module") && (o = "module"), a.__babelSourceType = o;
          }
          return [B, H(r, t), await i(s, a), F(r, t)];
        };
      } else if (r.parent.kind === "interpolation") return async (n) => {
        let i = { __isInHtmlInterpolation: true, __embeddedInHtml: true };
        return t.parser === "angular" ? i.parser = "__ng_interpolation" : t.parser === "vue" ? i.parser = U(e, t) ? "__vue_ts_expression" : "__vue_expression" : i.parser = "__js_expression", [N([_, await n(r.value, i)]), r.parent.next && R(r.parent.next) ? " " : _];
      };
      break;
    case "attribute":
      return Wn(e, t);
    case "angularControlFlowBlockParameters":
      return La.has(e.parent.name) ? zr : void 0;
    case "angularLetDeclarationInitializer":
      return (n) => x(r.value, n, { parser: "__ng_binding", __isInHtmlAttribute: false });
  }
}
var $n = Na;
var Qe = null;
function Je(e) {
  if (Qe !== null && typeof Qe.property) {
    let t = Qe;
    return Qe = Je.prototype = null, t;
  }
  return Qe = Je.prototype = e ?? /* @__PURE__ */ Object.create(null), new Je();
}
var Pa = 10;
for (let e = 0; e <= Pa; e++) Je();
function ir(e) {
  return Je(e);
}
function Da(e, t = "type") {
  ir(e);
  function r(n) {
    let i = n[t], s = e[i];
    if (!Array.isArray(s)) throw Object.assign(new Error(`Missing visitor keys for '${i}'.`), { node: n });
    return s;
  }
  return r;
}
var jn = Da;
var Ze = [["children"]];
var Yn = { root: Ze[0], element: ["attrs", "startTagComments", "children"], ieConditionalComment: Ze[0], ieConditionalStartComment: [], ieConditionalEndComment: [], interpolation: Ze[0], text: Ze[0], docType: [], comment: [], attribute: [], startTagComment: [], cdata: [], angularControlFlowBlock: ["children", "parameters"], angularControlFlowBlockParameters: Ze[0], angularControlFlowBlockParameter: [], angularLetDeclaration: ["init"], angularLetDeclarationInitializer: [], angularIcuExpression: ["cases"], angularIcuCase: ["expression"] };
var Ia = jn(Yn, "kind");
var Kn = Ia;
var Oa = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan", "keySpan", "tagDefinition", "tokens", "valueTokens", "switchValueSourceSpan", "expSourceSpan", "valueSourceSpan"]);
var Ra = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function sr(e, t, r) {
  if (e.kind === "text" || e.kind === "comment") return null;
  if (e.kind === "yaml" && delete t.value, e.kind === "attribute") {
    let { fullName: n, value: i } = e;
    n === "style" || n === "class" || n === "srcset" && (r.fullName === "img" || r.fullName === "source") || n === "allow" && r.fullName === "iframe" || n.startsWith("on") || n.startsWith("@") || n.startsWith(":") || n.startsWith(".") || n.startsWith("#") || n.startsWith("v-") || n === "vars" && r.fullName === "style" || (n === "setup" || n === "generic") && r.fullName === "script" || n === "slot-scope" || n.startsWith("(") || n.startsWith("[") || n.startsWith("*") || n.startsWith("bind") || n.startsWith("i18n") || n.startsWith("on-") || n.startsWith("ng-") || i?.includes("{{") ? delete t.value : i && (t.value = w(0, i, /'|&quot;|&apos;/g, '"'));
  }
  if (e.kind === "docType" && (t.value = w(0, e.value.toLowerCase(), /\s+/g, " ")), e.kind === "angularControlFlowBlock" && e.parameters?.children) for (let n of t.parameters.children) Ra.has(e.name) ? delete n.expression : n.expression = n.expression.trim();
  e.kind === "angularIcuExpression" && (t.switchValue = e.switchValue.trim()), e.kind === "angularLetDeclarationInitializer" && delete t.value, e.kind === "element" && e.isVoid && !e.isSelfClosing && (t.isSelfClosing = true);
}
sr.ignoredProperties = Oa;
var Xn = "format";
var Qn = /^\s*<!--\s*@(?:noformat|noprettier)\s*-->/;
var Jn = /^\s*<!--\s*@(?:format|prettier)\s*-->/;
var Zn = (e) => Jn.test(e);
var ei = (e) => Qn.test(e);
var ti = (e) => `<!-- @${Xn} -->

${e}`;
var ri = /* @__PURE__ */ new Map([["if", /* @__PURE__ */ new Set(["else if", "else"])], ["else if", /* @__PURE__ */ new Set(["else if", "else"])], ["for", /* @__PURE__ */ new Set(["empty"])], ["defer", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["placeholder", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["error", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["loading", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["boundary", /* @__PURE__ */ new Set(["error"])]]);
function ni(e) {
  let t = Z(e);
  return e.kind === "element" && !e.endSourceSpan && J(e.children) ? Math.max(t, ni(M(0, e.children, -1))) : t;
}
function et(e, t, r) {
  let n = e.node;
  if (le(n)) {
    let i = ni(n);
    return [H(n, t), A(y.trimEnd(t.originalText.slice(W(n) + (n.prev && Ye(n.prev) ? At(n).length : 0), i - (n.next && R(n.next) ? pe(n, t).length : 0)))), F(n, t)];
  }
  return r();
}
function Pt(e, t) {
  return D(e) && D(t) ? e.isTrailingSpaceSensitive ? e.hasTrailingSpaces ? bt(t) ? E : _ : "" : bt(t) ? E : T : R(t) && e.kind === "element" && e.children.length === 1 && e.firstChild.kind === "interpolation" && e.hasLeadingSpaces || Ye(e) && (le(t) || t.firstChild || t.isSelfClosing || t.kind === "element" && t.attrs.length > 0) || e.kind === "element" && e.isSelfClosing && R(t) ? "" : t.kind === "comment" && t.isLeadingSpaceSensitive && !t.hasLeadingSpaces ? T : !t.isLeadingSpaceSensitive || bt(t) || R(t) && e.lastChild && X(e.lastChild) && e.lastChild.lastChild && X(e.lastChild.lastChild) ? E : t.hasLeadingSpaces ? _ : T;
}
function Ne(e, t, r) {
  let { node: n } = e;
  if (Zt(n)) return [B, ...e.map(() => {
    let s = e.node, a = s.prev ? Pt(s.prev, s) : "";
    return [a ? [a, Ge(s.prev) ? E : ""] : "", et(e, t, r)];
  }, "children")];
  let i = n.children.map(() => /* @__PURE__ */ Symbol(""));
  return e.map(({ node: s, index: a }) => {
    if (D(s)) {
      if (s.prev && D(s.prev)) {
        let h3 = Pt(s.prev, s);
        if (h3) return Ge(s.prev) ? [E, E, et(e, t, r)] : [h3, et(e, t, r)];
      }
      return et(e, t, r);
    }
    let o = [], l = [], c = [], u = [], d = s.prev ? Pt(s.prev, s) : "", S2 = s.next ? Pt(s, s.next) : "";
    return d && (Ge(s.prev) ? o.push(E, E) : d === E ? o.push(E) : D(s.prev) ? l.push(d) : l.push(j("", T, { groupId: i[a - 1] }))), S2 && (Ge(s) ? D(s.next) && u.push(E, E) : S2 === E ? D(s.next) && u.push(E) : c.push(S2)), [...o, C([...l, C([et(e, t, r), ...c], { id: i[a] })]), ...u];
  }, "children");
}
function ii(e, t, r) {
  let { node: n } = e, i = [];
  Fa(e) && i.push("} "), i.push("@", n.name);
  let s = Ba(n);
  if (n.parameters && (s || i.push(" "), i.push("(", C(r("parameters")), ")")), s) return i.push(";"), i;
  if (!qa(n)) {
    i.push(" {");
    let a = si(n);
    n.children.length > 0 ? (n.firstChild.hasLeadingSpaces = true, n.lastChild.hasTrailingSpaces = true, i.push(N([E, Ne(e, t, r)])), a && i.push(E, "}")) : a && i.push("}");
  }
  return C(i, { shouldBreak: true });
}
function si(e) {
  return !(e.next?.kind === "angularControlFlowBlock" && ri.get(e.name)?.has(e.next.name));
}
var Ma = (e) => e?.kind === "angularControlFlowBlock" && (e.name === "case" || e.name === "default");
var Ba = (e) => e?.kind === "angularControlFlowBlock" && e.name === "default never";
function qa(e) {
  return Ma(e) && e.endSourceSpan && e.endSourceSpan.start.offset === e.endSourceSpan.end.offset;
}
function Fa(e) {
  let { previous: t } = e;
  return t?.kind === "angularControlFlowBlock" && !le(t) && !si(t);
}
function ai(e, t, r) {
  return [N([T, P([";", _], e.map(r, "children"))]), T];
}
function oi(e, t, r) {
  let { node: n } = e;
  return [me(n, t), C([n.switchValue.trim(), ", ", n.type, n.cases.length > 0 ? [",", N([_, P(_, e.map(r, "cases"))])] : "", T]), ue(n, t)];
}
function li(e, t, r) {
  let { node: n } = e;
  return [n.value, " {", C([N([T, e.map(({ node: i, isLast: s }) => {
    let a = [r()];
    return i.kind === "text" && (i.hasLeadingSpaces && a.unshift(_), i.hasTrailingSpaces && !s && a.push(_)), a;
  }, "expression")]), T]), "}"];
}
var ci = Object.freeze({ character: "'", codePoint: 39 });
var ui = Object.freeze({ character: '"', codePoint: 34 });
var Ha = Object.freeze({ preferred: ci, alternate: ui });
var Va = Object.freeze({ preferred: ui, alternate: ci });
function pi(e, t) {
  let { preferred: r, alternate: n } = t === true || t === "'" ? Ha : Va, { length: i } = e, s = 0, a = 0;
  for (let o = 0; o < i; o++) {
    let l = e.charCodeAt(o);
    l === r.codePoint ? s++ : l === n.codePoint && a++;
  }
  return (s > a ? n : r).character;
}
function Ua(e, t) {
  let { node: r } = e, { value: n } = r;
  if (yt(r, t)) return n;
  n = tr(n);
  let i = pi(n, '"');
  return n = i === '"' ? w(0, n, '"', "&quot;") : w(0, n, "'", "&apos;"), [i, A(n), i];
}
function hi(e, t) {
  let { node: r } = e, n = [r.rawName];
  return r.value !== null && n.push("=", Ua(e, t)), n;
}
function mi(e, t, r) {
  let { node: n } = e;
  if (Et(n, t)) return [C(Xe(e, t, r)), A(Nt(n, t)), ...je(n, t)];
  let i = n.children.length === 1 && (n.firstChild.kind === "interpolation" || n.firstChild.kind === "angularIcuExpression") && n.firstChild.isLeadingSpaceSensitive && !n.firstChild.hasLeadingSpaces && n.lastChild.isTrailingSpaceSensitive && !n.lastChild.hasTrailingSpaces, s = /* @__PURE__ */ Symbol("element-attr-group-id"), a = (u) => C([C(Xe(e, t, r), { id: s }), u, je(n, t)]);
  if (n.children.length === 0) return a(n.hasDanglingSpaces && n.isDanglingSpaceSensitive ? _ : "");
  let o = (u) => i ? Ur(u, { groupId: s }) : (q(n, t) || $e(n, t)) && n.parent.kind === "root" && t.parser === "vue" && !t.vueIndentScriptAndStyle ? u : N(u), l = () => i ? j(T, "", { groupId: s }) : n.firstChild.hasLeadingSpaces && n.firstChild.isLeadingSpaceSensitive ? _ : n.firstChild.kind === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive ? Vr(T) : T, c = () => (n.next ? R(n.next) : he(n.parent)) ? n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? " " : "" : K(n) && X(n.lastChild) ? "" : i ? j(T, "", { groupId: s }) : n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? _ : (n.lastChild.kind === "comment" || n.lastChild.kind === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${t.tabWidth * (e.ancestors.length - 1)}}$`).test(n.lastChild.value) ? "" : T;
  return a([cn(n) ? B : "", o([l(), Ne(e, t, r)]), c()]);
}
function fi(e) {
  let { node: { value: t, type: r } } = e;
  return r === "single" ? `//${t.trimEnd()}` : ["/*", A(t), "*/"];
}
function Wa(e) {
  let { value: t } = e;
  return e.parent.isWhitespaceSensitive ? e.parent.isIndentationSensitive ? A(t) : A(y.dedentString(Ct(t)), E) : P(_, y.split(t));
}
function di(e, t) {
  let { node: r } = e;
  if (r.parent.kind === "interpolation") {
    let { value: a } = r, o = /\n[^\S\n]*$/, l = o.test(a);
    l && (a = a.replace(o, ""));
    let c = [A(a)];
    return l && (r.parent.next && R(r.parent.next) ? c.push(B) : c.push(E)), c;
  }
  let n = Wa(r), i = H(r, t), s = F(r, t);
  return i && (n[0] = [i, n[0]]), s && n.push([n.pop(), s]), gt(n);
}
var ar = (function(e) {
  return e[e.RAW_TEXT = 0] = "RAW_TEXT", e[e.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", e[e.PARSABLE_DATA = 2] = "PARSABLE_DATA", e;
})({});
function ee(e, t = true) {
  if (e[0] != ":") return [null, e];
  let r = e.indexOf(":", 1);
  if (r === -1) {
    if (t) throw new Error(`Unsupported format "${e}" expecting ":namespace:name"`);
    return [null, e];
  }
  return [e.slice(1, r), e.slice(r + 1)];
}
function or(e) {
  return ee(e)[1] === "ng-container";
}
function lr(e) {
  return ee(e)[1] === "ng-content";
}
function Pe(e) {
  return e === null ? null : ee(e)[0];
}
function fe(e, t) {
  return e ? `:${e}:${t}` : t;
}
var tt;
var Ga = "math";
var cr = () => /* @__PURE__ */ Object.create(null);
function za() {
  return tt || (tt = cr(), te(1, void 0, [["iframe", ["srcdoc"]], ["*", ["innerHTML", "outerHTML"]]]), te(2, void 0, [["*", ["style"]]]), te(4, void 0, [["*", ["formAction"]], ["area", ["href"]], ["a", ["href", "xlink:href"]], ["form", ["action"]], ["img", ["src"]], ["video", ["src"]]]), te(4, Ga, [["*", ["href", "xlink:href"]]]), te(5, void 0, [["base", ["href"]], ["embed", ["src"]], ["frame", ["src"]], ["iframe", ["src"]], ["link", ["href"]], ["object", ["codebase", "data"]]]), te(4, "svg", [["a", ["href", "xlink:href"]]]), te(6, "svg", [["animate", ["attributeName", "values", "to", "from"]], ["set", ["to", "attributeName"]], ["animateMotion", ["attributeName"]], ["animateTransform", ["attributeName"]]]), te(6, void 0, [["unknown", ["attributeName", "values", "to", "from", "sandbox", "allow", "allowFullscreen", "referrerPolicy", "csp", "fetchPriority", "credentialless"]], ["iframe", ["sandbox", "allow", "allowFullscreen", "referrerPolicy", "csp", "fetchPriority", "credentialless"]]]), tt);
}
function te(e, t, r) {
  let n = t ?? "";
  for (let [s, a] of r) {
    let o = s.toLowerCase();
    for (let l of a) {
      var i;
      let c = l.toLowerCase(), u = (i = tt)[c] ?? (i[c] = cr()), d = u[n] ?? (u[n] = cr());
      d[o] = e;
    }
  }
}
function gi(e, t, r) {
  let n = za()[t.toLowerCase()];
  if (!n) return 0;
  let i = e.toLowerCase(), s;
  if (r) {
    let a = n[r];
    a && (s = a[i] ?? a["*"]);
  }
  if (s === void 0) {
    let a = n[""];
    a && (s = a[i] ?? a["*"]);
  }
  if (s === void 0 && (!r || r === "")) {
    let a = n.svg;
    a && (s = a[i]);
  }
  return s ?? 0;
}
var ur = { name: "custom-elements" };
var pr = { name: "no-errors-schema" };
var $a = /-+([a-z0-9])/g;
function _i(e) {
  return e.replace($a, (...t) => t[1].toUpperCase());
}
var Si = class {
};
var ja = "boolean";
var Ya = "number";
var Ka = "string";
var Xa = "object";
function Dt(e) {
  let t = e.toLowerCase(), [r, n] = ee(t, false);
  return r === "svg" || r === "math" ? `:${r}:${n}` : n;
}
var Qa = ["[Element]|textContent,%ariaActiveDescendantElement,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColIndexText,%ariaColSpan,%ariaControlsElements,%ariaCurrent,%ariaDescribedByElements,%ariaDescription,%ariaDetailsElements,%ariaDisabled,%ariaErrorMessageElements,%ariaExpanded,%ariaFlowToElements,%ariaHasPopup,%ariaHidden,%ariaInvalid,%ariaKeyShortcuts,%ariaLabel,%ariaLabelledByElements,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaOwnsElements,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowIndexText,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored", "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,search,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume", ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":svg:graphics^:svg:|", ":svg:animation^:svg:|*begin,*end,*repeat", ":svg:geometry^:svg:|", ":svg:componentTransferFunction^:svg:|", ":svg:gradient^:svg:|", ":svg:textContent^:svg:graphics|", ":svg:textPositioning^:svg:textContent|", "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username", "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username", "audio^media|", "br^[HTMLElement]|clear", "base^[HTMLElement]|href,target", "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink", "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value", "canvas^[HTMLElement]|#height,#width", "content^[HTMLElement]|select", "dl^[HTMLElement]|!compact", "data^[HTMLElement]|value", "datalist^[HTMLElement]|", "details^[HTMLElement]|!open", "dialog^[HTMLElement]|!open,returnValue", "dir^[HTMLElement]|!compact", "div^[HTMLElement]|align", "embed^[HTMLElement]|align,height,name,src,type,width", "fieldset^[HTMLElement]|!disabled,name", "font^[HTMLElement]|color,face,size", "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target", "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src", "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows", "geolocation^[HTMLElement]|accuracymode,!autolocate,*location,*promptaction,*promptdismiss,*validationstatuschange,!watch", "hr^[HTMLElement]|align,color,!noShade,size,width", "head^[HTMLElement]|", "h1,h2,h3,h4,h5,h6^[HTMLElement]|align", "html^[HTMLElement]|version", "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,!credentialless,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width", "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width", "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width", "li^[HTMLElement]|type,#value", "label^[HTMLElement]|htmlFor", "legend^[HTMLElement]|align", "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type", "map^[HTMLElement]|name", "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width", "menu^[HTMLElement]|!compact", "meta^[HTMLElement]|content,httpEquiv,media,name,scheme", "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value", "ins,del^[HTMLElement]|cite,dateTime", "ol^[HTMLElement]|!compact,!reversed,#start,type", "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width", "optgroup^[HTMLElement]|!disabled,label", "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value", "output^[HTMLElement]|defaultValue,%htmlFor,name,value", "p^[HTMLElement]|align", "param^[HTMLElement]|name,type,value,valueType", "picture^[HTMLElement]|", "pre^[HTMLElement]|#width", "progress^[HTMLElement]|#max,#value", "q,blockquote,cite^[HTMLElement]|", "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type", "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value", "selectedcontent^[HTMLElement]|", "slot^[HTMLElement]|name", "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width", "span^[HTMLElement]|", "style^[HTMLElement]|!disabled,media,type", "search^[HTMLELement]|", "caption^[HTMLElement]|align", "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width", "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width", "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width", "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign", "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign", "template^[HTMLElement]|", "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap", "time^[HTMLElement]|dateTime", "title^[HTMLElement]|text", "track^[HTMLElement]|!default,kind,label,src,srclang", "ul^[HTMLElement]|!compact,type", "unknown^[HTMLElement]|", "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width", ":svg:a^:svg:graphics|", ":svg:animate^:svg:animation|", ":svg:animateMotion^:svg:animation|", ":svg:animateTransform^:svg:animation|", ":svg:circle^:svg:geometry|", ":svg:clipPath^:svg:graphics|", ":svg:defs^:svg:graphics|", ":svg:desc^:svg:|", ":svg:discard^:svg:|", ":svg:ellipse^:svg:geometry|", ":svg:feBlend^:svg:|", ":svg:feColorMatrix^:svg:|", ":svg:feComponentTransfer^:svg:|", ":svg:feComposite^:svg:|", ":svg:feConvolveMatrix^:svg:|", ":svg:feDiffuseLighting^:svg:|", ":svg:feDisplacementMap^:svg:|", ":svg:feDistantLight^:svg:|", ":svg:feDropShadow^:svg:|", ":svg:feFlood^:svg:|", ":svg:feFuncA^:svg:componentTransferFunction|", ":svg:feFuncB^:svg:componentTransferFunction|", ":svg:feFuncG^:svg:componentTransferFunction|", ":svg:feFuncR^:svg:componentTransferFunction|", ":svg:feGaussianBlur^:svg:|", ":svg:feImage^:svg:|", ":svg:feMerge^:svg:|", ":svg:feMergeNode^:svg:|", ":svg:feMorphology^:svg:|", ":svg:feOffset^:svg:|", ":svg:fePointLight^:svg:|", ":svg:feSpecularLighting^:svg:|", ":svg:feSpotLight^:svg:|", ":svg:feTile^:svg:|", ":svg:feTurbulence^:svg:|", ":svg:filter^:svg:|", ":svg:foreignObject^:svg:graphics|", ":svg:g^:svg:graphics|", ":svg:image^:svg:graphics|decoding", ":svg:line^:svg:geometry|", ":svg:linearGradient^:svg:gradient|", ":svg:mpath^:svg:|", ":svg:marker^:svg:|", ":svg:mask^:svg:|", ":svg:metadata^:svg:|", ":svg:path^:svg:geometry|", ":svg:pattern^:svg:|", ":svg:polygon^:svg:geometry|", ":svg:polyline^:svg:geometry|", ":svg:radialGradient^:svg:gradient|", ":svg:rect^:svg:geometry|", ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan", ":svg:script^:svg:|type", ":svg:set^:svg:animation|", ":svg:stop^:svg:|", ":svg:style^:svg:|!disabled,media,title,type", ":svg:switch^:svg:graphics|", ":svg:symbol^:svg:|", ":svg:tspan^:svg:textPositioning|", ":svg:text^:svg:textPositioning|", ":svg:textPath^:svg:textContent|", ":svg:title^:svg:|", ":svg:use^:svg:graphics|", ":svg:view^:svg:|#zoomAndPan", "data^[HTMLElement]|value", "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name", "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default", "summary^[HTMLElement]|", "time^[HTMLElement]|dateTime", ":svg:cursor^:svg:|", ":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":math:math^:math:|", ":math:maction^:math:|", ":math:menclose^:math:|", ":math:merror^:math:|", ":math:mfenced^:math:|", ":math:mfrac^:math:|", ":math:mi^:math:|", ":math:mmultiscripts^:math:|", ":math:mn^:math:|", ":math:mo^:math:|", ":math:mover^:math:|", ":math:mpadded^:math:|", ":math:mphantom^:math:|", ":math:mroot^:math:|", ":math:mrow^:math:|", ":math:ms^:math:|", ":math:mspace^:math:|", ":math:msqrt^:math:|", ":math:mstyle^:math:|", ":math:msub^:math:|", ":math:msubsup^:math:|", ":math:msup^:math:|", ":math:mtable^:math:|", ":math:mtd^:math:|", ":math:mtext^:math:|", ":math:mtr^:math:|", ":math:munder^:math:|", ":math:munderover^:math:|", ":math:semantics^:math:|"];
var vi = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex", "aria-activedescendant": "ariaActiveDescendantElement", "aria-atomic": "ariaAtomic", "aria-autocomplete": "ariaAutoComplete", "aria-busy": "ariaBusy", "aria-checked": "ariaChecked", "aria-colcount": "ariaColCount", "aria-colindex": "ariaColIndex", "aria-colindextext": "ariaColIndexText", "aria-colspan": "ariaColSpan", "aria-controls": "ariaControlsElements", "aria-current": "ariaCurrent", "aria-describedby": "ariaDescribedByElements", "aria-description": "ariaDescription", "aria-details": "ariaDetailsElements", "aria-disabled": "ariaDisabled", "aria-errormessage": "ariaErrorMessageElements", "aria-expanded": "ariaExpanded", "aria-flowto": "ariaFlowToElements", "aria-haspopup": "ariaHasPopup", "aria-hidden": "ariaHidden", "aria-invalid": "ariaInvalid", "aria-keyshortcuts": "ariaKeyShortcuts", "aria-label": "ariaLabel", "aria-labelledby": "ariaLabelledByElements", "aria-level": "ariaLevel", "aria-live": "ariaLive", "aria-modal": "ariaModal", "aria-multiline": "ariaMultiLine", "aria-multiselectable": "ariaMultiSelectable", "aria-orientation": "ariaOrientation", "aria-owns": "ariaOwnsElements", "aria-placeholder": "ariaPlaceholder", "aria-posinset": "ariaPosInSet", "aria-pressed": "ariaPressed", "aria-readonly": "ariaReadOnly", "aria-required": "ariaRequired", "aria-roledescription": "ariaRoleDescription", "aria-rowcount": "ariaRowCount", "aria-rowindex": "ariaRowIndex", "aria-rowindextext": "ariaRowIndexText", "aria-rowspan": "ariaRowSpan", "aria-selected": "ariaSelected", "aria-setsize": "ariaSetSize", "aria-sort": "ariaSort", "aria-valuemax": "ariaValueMax", "aria-valuemin": "ariaValueMin", "aria-valuenow": "ariaValueNow", "aria-valuetext": "ariaValueText" }));
var Ja = Array.from(vi).reduce((e, [t, r]) => (e.set(t, r), e), /* @__PURE__ */ new Map());
var Ci = class extends Si {
  _schema = /* @__PURE__ */ new Map();
  _eventSchema = /* @__PURE__ */ new Map();
  constructor() {
    super(), Qa.forEach((e) => {
      let t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), [n, i] = e.split("|"), s = i.split(","), [a, o] = n.split("^");
      a.split(",").forEach((c) => {
        this._schema.set(c.toLowerCase(), t), this._eventSchema.set(c.toLowerCase(), r);
      });
      let l = o && this._schema.get(o.toLowerCase());
      if (l) {
        for (let [c, u] of l) t.set(c, u);
        for (let c of this._eventSchema.get(o.toLowerCase())) r.add(c);
      }
      s.forEach((c) => {
        if (c.length > 0) switch (c[0]) {
          case "*":
            r.add(c.substring(1));
            break;
          case "!":
            t.set(c.substring(1), ja);
            break;
          case "#":
            t.set(c.substring(1), Ya);
            break;
          case "%":
            t.set(c.substring(1), Xa);
            break;
          default:
            t.set(c, Ka);
        }
      });
    });
  }
  hasProperty(e, t, r) {
    if (r.some((i) => i.name === pr.name)) return true;
    let n = Dt(e);
    if (n.includes("-")) {
      if (or(n) || lr(n)) return false;
      if (r.some((i) => i.name === ur.name)) return true;
    }
    return (this._schema.get(n) || this._schema.get("unknown")).has(t);
  }
  hasElement(e, t) {
    if (t.some((n) => n.name === pr.name)) return true;
    let r = Dt(e);
    return r.includes("-") && (or(r) || lr(r) || t.some((n) => n.name === ur.name)) ? true : this._schema.has(r);
  }
  securityContext(e, t, r) {
    r && (t = this.getMappedPropName(t));
    let [n, i] = ee(e, false);
    return gi(i, t, n);
  }
  getMappedPropName(e) {
    return vi.get(e) ?? e;
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
    let t = Dt(e), r = this._schema.get(t) || this._schema.get("unknown");
    return Array.from(r.keys()).map((n) => Ja.get(n) ?? n);
  }
  allKnownEventsOfElement(e) {
    let t = Dt(e);
    return Array.from(this._eventSchema.get(t) ?? []);
  }
  normalizeAnimationStyleProperty(e) {
    return _i(e);
  }
  normalizeAnimationStyleValue(e, t, r) {
    let n = "", i = r.toString().trim(), s = null;
    if (Za(e) && r !== 0 && r !== "0") if (typeof r == "number") n = "px";
    else {
      let a = r.match(/^[+-]?[\d\.]+([a-z]*)$/);
      a && a[1].length == 0 && (s = `Please provide a CSS unit value for ${t}:${r}`);
    }
    return { error: s, value: i + n };
  }
};
function Za(e) {
  switch (e) {
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
  closedByChildren = {};
  contentType;
  closedByParent = false;
  implicitNamespacePrefix;
  isVoid;
  ignoreFirstLf;
  canSelfClose;
  preventNamespaceInheritance;
  constructor({ closedByChildren: e, implicitNamespacePrefix: t, contentType: r = 2, closedByParent: n = false, isVoid: i = false, ignoreFirstLf: s = false, preventNamespaceInheritance: a = false, canSelfClose: o = false } = {}) {
    e && e.length > 0 && e.forEach((l) => this.closedByChildren[l] = true), this.isVoid = i, this.closedByParent = n || i, this.implicitNamespacePrefix = t || null, this.contentType = r, this.ignoreFirstLf = s, this.preventNamespaceInheritance = a, this.canSelfClose = o ?? i;
  }
  isClosedByChild(e) {
    return this.isVoid || e.toLowerCase() in this.closedByChildren;
  }
  getContentType(e) {
    return typeof this.contentType == "object" ? (e === void 0 ? void 0 : this.contentType[e]) ?? this.contentType.default : this.contentType;
  }
};
var Ei;
var rt;
function De(e) {
  return rt || (Ei = new m({ canSelfClose: true }), rt = Object.assign(/* @__PURE__ */ Object.create(null), { base: new m({ isVoid: true }), meta: new m({ isVoid: true }), area: new m({ isVoid: true }), embed: new m({ isVoid: true }), link: new m({ isVoid: true }), img: new m({ isVoid: true }), input: new m({ isVoid: true }), param: new m({ isVoid: true }), hr: new m({ isVoid: true }), br: new m({ isVoid: true }), source: new m({ isVoid: true }), track: new m({ isVoid: true }), wbr: new m({ isVoid: true }), p: new m({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new m({ closedByChildren: ["tbody", "tfoot"] }), tbody: new m({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new m({ closedByChildren: ["tbody"], closedByParent: true }), tr: new m({ closedByChildren: ["tr"], closedByParent: true }), td: new m({ closedByChildren: ["td", "th"], closedByParent: true }), th: new m({ closedByChildren: ["td", "th"], closedByParent: true }), col: new m({ isVoid: true }), svg: new m({ implicitNamespacePrefix: "svg" }), foreignObject: new m({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: true }), math: new m({ implicitNamespacePrefix: "math" }), li: new m({ closedByChildren: ["li"], closedByParent: true }), dt: new m({ closedByChildren: ["dt", "dd"] }), dd: new m({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new m({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new m({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new m({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new m({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new m({ closedByChildren: ["optgroup"], closedByParent: true }), option: new m({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new m({ ignoreFirstLf: true }), listing: new m({ ignoreFirstLf: true }), style: new m({ contentType: 0 }), script: new m({ contentType: 0 }), title: new m({ contentType: { default: 1, svg: 2 } }), textarea: new m({ contentType: 1, ignoreFirstLf: true }) }), new Ci().allKnownElementNames().forEach((t) => {
    !rt[t] && Pe(t) === null && (rt[t] = new m({ canSelfClose: false }));
  })), rt[e] ?? Ei;
}
var Ie = class bi {
  file;
  offset;
  line;
  col;
  constructor(t, r, n, i) {
    this.file = t, this.offset = r, this.line = n, this.col = i;
  }
  toString() {
    return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
  }
  moveBy(t) {
    let r = this.file.content, n = r.length, i = this.offset, s = this.line, a = this.col;
    for (; i > 0 && t < 0; ) if (i--, t++, r.charCodeAt(i) == 10) {
      s--;
      let o = r.substring(0, i - 1).lastIndexOf(`
`);
      a = o > 0 ? i - o : i;
    } else a--;
    for (; i < n && t > 0; ) {
      let o = r.charCodeAt(i);
      i++, t--, o == 10 ? (s++, a = 0) : a++;
    }
    return new bi(this.file, i, s, a);
  }
  getContext(t, r) {
    let n = this.file.content, i = this.offset;
    if (i != null) {
      i > n.length - 1 && (i = n.length - 1);
      let s = i, a = 0, o = 0;
      for (; a < t && i > 0 && (i--, a++, !(n[i] == `
` && ++o == r)); ) ;
      for (a = 0, o = 0; a < t && s < n.length - 1 && (s++, a++, !(n[s] == `
` && ++o == r)); ) ;
      return { before: n.substring(i, this.offset), after: n.substring(this.offset, s + 1) };
    }
    return null;
  }
};
var nt = class {
  content;
  url;
  constructor(e, t) {
    this.content = e, this.url = t;
  }
};
var p = class {
  start;
  end;
  fullStart;
  details;
  constructor(e, t, r = e, n = null) {
    this.start = e, this.end = t, this.fullStart = r, this.details = n;
  }
  toString() {
    return this.start.file.content.substring(this.start.offset, this.end.offset);
  }
};
var eo = (function(e) {
  return e[e.WARNING = 0] = "WARNING", e[e.ERROR = 1] = "ERROR", e;
})({});
var re = class extends Error {
  span;
  msg;
  level;
  relatedError;
  constructor(e, t, r = 1, n) {
    super(t), this.span = e, this.msg = t, this.level = r, this.relatedError = n, Object.setPrototypeOf(this, new.target.prototype);
  }
  contextualMessage() {
    let e = this.span.start.getContext(100, 3);
    return e ? `${this.msg} ("${e.before}[${eo[this.level]} ->]${e.after}")` : this.msg;
  }
  toString() {
    let e = this.span.details ? `, ${this.span.details}` : "";
    return `${this.contextualMessage()}: ${this.span.start}${e}`;
  }
};
var de = class {
  sourceSpan;
  i18n;
  constructor(e, t) {
    this.sourceSpan = e, this.i18n = t;
  }
};
var wi = class extends de {
  value;
  tokens;
  constructor(e, t, r, n) {
    super(t, n), this.value = e, this.tokens = r;
  }
  visit(e, t) {
    return e.visitText(this, t);
  }
  kind = "text";
};
var ki = class extends de {
  value;
  tokens;
  constructor(e, t, r, n) {
    super(t, n), this.value = e, this.tokens = r;
  }
  visit(e, t) {
    return e.visitCdata(this, t);
  }
  kind = "cdata";
};
var Ti = class extends de {
  switchValue;
  type;
  cases;
  switchValueSourceSpan;
  constructor(e, t, r, n, i, s) {
    super(n, s), this.switchValue = e, this.type = t, this.cases = r, this.switchValueSourceSpan = i;
  }
  visit(e, t) {
    return e.visitExpansion(this, t);
  }
  kind = "expansion";
};
var yi = class {
  value;
  expression;
  sourceSpan;
  valueSourceSpan;
  expSourceSpan;
  constructor(e, t, r, n, i) {
    this.value = e, this.expression = t, this.sourceSpan = r, this.valueSourceSpan = n, this.expSourceSpan = i;
  }
  visit(e, t) {
    return e.visitExpansionCase(this, t);
  }
  kind = "expansionCase";
};
var xi = class extends de {
  name;
  value;
  keySpan;
  valueSpan;
  valueTokens;
  constructor(e, t, r, n, i, s, a) {
    super(r, a), this.name = e, this.value = t, this.keySpan = n, this.valueSpan = i, this.valueTokens = s;
  }
  visit(e, t) {
    return e.visitAttribute(this, t);
  }
  kind = "attribute";
  get nameSpan() {
    return this.keySpan;
  }
};
var Ai = class {
  value;
  type;
  sourceSpan;
  constructor(e, t, r) {
    this.value = e, this.type = t, this.sourceSpan = r;
  }
  visit(e, t) {
    return e.visitStartTagComment ? e.visitStartTagComment(this, t) : void 0;
  }
  kind = "startTagComment";
};
var ne = class extends de {
  name;
  attrs;
  directives;
  children;
  isSelfClosing;
  startSourceSpan;
  endSourceSpan;
  nameSpan;
  isVoid;
  comments;
  constructor(e, t, r, n, i, s, a, o = null, l = null, c, u, d = []) {
    super(s, u), this.name = e, this.attrs = t, this.directives = r, this.children = n, this.isSelfClosing = i, this.startSourceSpan = a, this.endSourceSpan = o, this.nameSpan = l, this.isVoid = c, this.comments = d;
  }
  visit(e, t) {
    return e.visitElement(this, t);
  }
  kind = "element";
};
var Li = class {
  value;
  sourceSpan;
  constructor(e, t) {
    this.value = e, this.sourceSpan = t;
  }
  visit(e, t) {
    return e.visitComment(this, t);
  }
  kind = "comment";
};
var Ni = class {
  value;
  sourceSpan;
  constructor(e, t) {
    this.value = e, this.sourceSpan = t;
  }
  visit(e, t) {
    return e.visitDocType(this, t);
  }
  kind = "docType";
};
var ge = class extends de {
  name;
  parameters;
  children;
  nameSpan;
  startSourceSpan;
  endSourceSpan;
  constructor(e, t, r, n, i, s, a = null, o) {
    super(n, o), this.name = e, this.parameters = t, this.children = r, this.nameSpan = i, this.startSourceSpan = s, this.endSourceSpan = a;
  }
  visit(e, t) {
    return e.visitBlock(this, t);
  }
  kind = "block";
};
var G = class extends de {
  componentName;
  tagName;
  fullName;
  attrs;
  directives;
  children;
  isSelfClosing;
  startSourceSpan;
  endSourceSpan;
  comments;
  constructor(e, t, r, n, i, s, a, o, l, c = null, u, d = []) {
    super(o, u), this.componentName = e, this.tagName = t, this.fullName = r, this.attrs = n, this.directives = i, this.children = s, this.isSelfClosing = a, this.startSourceSpan = l, this.endSourceSpan = c, this.comments = d;
  }
  visit(e, t) {
    return e.visitComponent(this, t);
  }
  kind = "component";
};
var Pi = class {
  name;
  attrs;
  sourceSpan;
  startSourceSpan;
  endSourceSpan;
  constructor(e, t, r, n, i = null) {
    this.name = e, this.attrs = t, this.sourceSpan = r, this.startSourceSpan = n, this.endSourceSpan = i;
  }
  visit(e, t) {
    return e.visitDirective(this, t);
  }
  kind = "directive";
};
var hr = class {
  expression;
  sourceSpan;
  constructor(e, t) {
    this.expression = e, this.sourceSpan = t;
  }
  visit(e, t) {
    return e.visitBlockParameter(this, t);
  }
  kind = "blockParameter";
  startSourceSpan = null;
  endSourceSpan = null;
};
var mr = class {
  name;
  value;
  sourceSpan;
  nameSpan;
  valueSpan;
  constructor(e, t, r, n, i) {
    this.name = e, this.value = t, this.sourceSpan = r, this.nameSpan = n, this.valueSpan = i;
  }
  visit(e, t) {
    return e.visitLetDeclaration(this, t);
  }
  kind = "letDeclaration";
  startSourceSpan = null;
  endSourceSpan = null;
};
function It(e, t, r = null) {
  let n = [], i = e.visit ? (s) => e.visit(s, r) || s.visit(e, r) : (s) => s.visit(e, r);
  return t.forEach((s) => {
    let a = i(s);
    a && n.push(a);
  }), n;
}
var fr = class {
  constructor() {
  }
  visitElement(e, t) {
    this.visitChildren(t, (r) => {
      r(e.attrs), r(e.directives), r(e.comments), r(e.children);
    });
  }
  visitAttribute(e, t) {
  }
  visitStartTagComment(e, t) {
  }
  visitText(e, t) {
  }
  visitCdata(e, t) {
  }
  visitComment(e, t) {
  }
  visitDocType(e, t) {
  }
  visitExpansion(e, t) {
    return this.visitChildren(t, (r) => {
      r(e.cases);
    });
  }
  visitExpansionCase(e, t) {
  }
  visitBlock(e, t) {
    this.visitChildren(t, (r) => {
      r(e.parameters), r(e.children);
    });
  }
  visitBlockParameter(e, t) {
  }
  visitLetDeclaration(e, t) {
  }
  visitComponent(e, t) {
    this.visitChildren(t, (r) => {
      r(e.attrs), r(e.comments), r(e.children);
    });
  }
  visitDirective(e, t) {
    this.visitChildren(t, (r) => {
      r(e.attrs);
    });
  }
  visitChildren(e, t) {
    let r = [], n = this;
    function i(s) {
      s && r.push(It(n, s, e));
    }
    return t(i), Array.prototype.concat.apply([], r);
  }
};
var dr = (function(e) {
  return e[e.TAG_OPEN_START = 0] = "TAG_OPEN_START", e[e.TAG_OPEN_END = 1] = "TAG_OPEN_END", e[e.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", e[e.TAG_CLOSE = 3] = "TAG_CLOSE", e[e.INCOMPLETE_TAG_OPEN = 4] = "INCOMPLETE_TAG_OPEN", e[e.TEXT = 5] = "TEXT", e[e.ESCAPABLE_RAW_TEXT = 6] = "ESCAPABLE_RAW_TEXT", e[e.RAW_TEXT = 7] = "RAW_TEXT", e[e.INTERPOLATION = 8] = "INTERPOLATION", e[e.ENCODED_ENTITY = 9] = "ENCODED_ENTITY", e[e.COMMENT_START = 10] = "COMMENT_START", e[e.COMMENT_END = 11] = "COMMENT_END", e[e.IN_ELEMENT_COMMENT = 12] = "IN_ELEMENT_COMMENT", e[e.CDATA_START = 13] = "CDATA_START", e[e.CDATA_END = 14] = "CDATA_END", e[e.ATTR_NAME = 15] = "ATTR_NAME", e[e.ATTR_QUOTE = 16] = "ATTR_QUOTE", e[e.ATTR_VALUE_TEXT = 17] = "ATTR_VALUE_TEXT", e[e.ATTR_VALUE_INTERPOLATION = 18] = "ATTR_VALUE_INTERPOLATION", e[e.DOC_TYPE_START = 19] = "DOC_TYPE_START", e[e.DOC_TYPE_END = 20] = "DOC_TYPE_END", e[e.EXPANSION_FORM_START = 21] = "EXPANSION_FORM_START", e[e.EXPANSION_CASE_VALUE = 22] = "EXPANSION_CASE_VALUE", e[e.EXPANSION_CASE_EXP_START = 23] = "EXPANSION_CASE_EXP_START", e[e.EXPANSION_CASE_EXP_END = 24] = "EXPANSION_CASE_EXP_END", e[e.EXPANSION_FORM_END = 25] = "EXPANSION_FORM_END", e[e.BLOCK_OPEN_START = 26] = "BLOCK_OPEN_START", e[e.BLOCK_OPEN_END = 27] = "BLOCK_OPEN_END", e[e.BLOCK_CLOSE = 28] = "BLOCK_CLOSE", e[e.BLOCK_PARAMETER = 29] = "BLOCK_PARAMETER", e[e.INCOMPLETE_BLOCK_OPEN = 30] = "INCOMPLETE_BLOCK_OPEN", e[e.LET_START = 31] = "LET_START", e[e.LET_VALUE = 32] = "LET_VALUE", e[e.LET_END = 33] = "LET_END", e[e.INCOMPLETE_LET = 34] = "INCOMPLETE_LET", e[e.COMPONENT_OPEN_START = 35] = "COMPONENT_OPEN_START", e[e.COMPONENT_OPEN_END = 36] = "COMPONENT_OPEN_END", e[e.COMPONENT_OPEN_END_VOID = 37] = "COMPONENT_OPEN_END_VOID", e[e.COMPONENT_CLOSE = 38] = "COMPONENT_CLOSE", e[e.INCOMPLETE_COMPONENT_OPEN = 39] = "INCOMPLETE_COMPONENT_OPEN", e[e.DIRECTIVE_NAME = 40] = "DIRECTIVE_NAME", e[e.DIRECTIVE_OPEN = 41] = "DIRECTIVE_OPEN", e[e.DIRECTIVE_CLOSE = 42] = "DIRECTIVE_CLOSE", e[e.PROCESSING_INSTRUCTION = 43] = "PROCESSING_INSTRUCTION", e[e.EOF = 44] = "EOF", e;
})({});
function it(e) {
  return e >= 9 && e <= 32 || e == 160;
}
function Oe(e) {
  return 48 <= e && e <= 57;
}
function Re(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Di(e) {
  return e >= 97 && e <= 102 || e >= 65 && e <= 70 || Oe(e);
}
function Me(e) {
  return e === 10 || e === 13;
}
function gr(e) {
  return 48 <= e && e <= 55;
}
function Ot(e) {
  return e === 39 || e === 34 || e === 96;
}
var _e = { AElig: "\xC6", AMP: "&", amp: "&", Aacute: "\xC1", Abreve: "\u0102", Acirc: "\xC2", Acy: "\u0410", Afr: "\u{1D504}", Agrave: "\xC0", Alpha: "\u0391", Amacr: "\u0100", And: "\u2A53", Aogon: "\u0104", Aopf: "\u{1D538}", ApplyFunction: "\u2061", af: "\u2061", Aring: "\xC5", angst: "\xC5", Ascr: "\u{1D49C}", Assign: "\u2254", colone: "\u2254", coloneq: "\u2254", Atilde: "\xC3", Auml: "\xC4", Backslash: "\u2216", setminus: "\u2216", setmn: "\u2216", smallsetminus: "\u2216", ssetmn: "\u2216", Barv: "\u2AE7", Barwed: "\u2306", doublebarwedge: "\u2306", Bcy: "\u0411", Because: "\u2235", becaus: "\u2235", because: "\u2235", Bernoullis: "\u212C", Bscr: "\u212C", bernou: "\u212C", Beta: "\u0392", Bfr: "\u{1D505}", Bopf: "\u{1D539}", Breve: "\u02D8", breve: "\u02D8", Bumpeq: "\u224E", HumpDownHump: "\u224E", bump: "\u224E", CHcy: "\u0427", COPY: "\xA9", copy: "\xA9", Cacute: "\u0106", Cap: "\u22D2", CapitalDifferentialD: "\u2145", DD: "\u2145", Cayleys: "\u212D", Cfr: "\u212D", Ccaron: "\u010C", Ccedil: "\xC7", Ccirc: "\u0108", Cconint: "\u2230", Cdot: "\u010A", Cedilla: "\xB8", cedil: "\xB8", CenterDot: "\xB7", centerdot: "\xB7", middot: "\xB7", Chi: "\u03A7", CircleDot: "\u2299", odot: "\u2299", CircleMinus: "\u2296", ominus: "\u2296", CirclePlus: "\u2295", oplus: "\u2295", CircleTimes: "\u2297", otimes: "\u2297", ClockwiseContourIntegral: "\u2232", cwconint: "\u2232", CloseCurlyDoubleQuote: "\u201D", rdquo: "\u201D", rdquor: "\u201D", CloseCurlyQuote: "\u2019", rsquo: "\u2019", rsquor: "\u2019", Colon: "\u2237", Proportion: "\u2237", Colone: "\u2A74", Congruent: "\u2261", equiv: "\u2261", Conint: "\u222F", DoubleContourIntegral: "\u222F", ContourIntegral: "\u222E", conint: "\u222E", oint: "\u222E", Copf: "\u2102", complexes: "\u2102", Coproduct: "\u2210", coprod: "\u2210", CounterClockwiseContourIntegral: "\u2233", awconint: "\u2233", Cross: "\u2A2F", Cscr: "\u{1D49E}", Cup: "\u22D3", CupCap: "\u224D", asympeq: "\u224D", DDotrahd: "\u2911", DJcy: "\u0402", DScy: "\u0405", DZcy: "\u040F", Dagger: "\u2021", ddagger: "\u2021", Darr: "\u21A1", Dashv: "\u2AE4", DoubleLeftTee: "\u2AE4", Dcaron: "\u010E", Dcy: "\u0414", Del: "\u2207", nabla: "\u2207", Delta: "\u0394", Dfr: "\u{1D507}", DiacriticalAcute: "\xB4", acute: "\xB4", DiacriticalDot: "\u02D9", dot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", dblac: "\u02DD", DiacriticalGrave: "`", grave: "`", DiacriticalTilde: "\u02DC", tilde: "\u02DC", Diamond: "\u22C4", diam: "\u22C4", diamond: "\u22C4", DifferentialD: "\u2146", dd: "\u2146", Dopf: "\u{1D53B}", Dot: "\xA8", DoubleDot: "\xA8", die: "\xA8", uml: "\xA8", DotDot: "\u20DC", DotEqual: "\u2250", doteq: "\u2250", esdot: "\u2250", DoubleDownArrow: "\u21D3", Downarrow: "\u21D3", dArr: "\u21D3", DoubleLeftArrow: "\u21D0", Leftarrow: "\u21D0", lArr: "\u21D0", DoubleLeftRightArrow: "\u21D4", Leftrightarrow: "\u21D4", hArr: "\u21D4", iff: "\u21D4", DoubleLongLeftArrow: "\u27F8", Longleftarrow: "\u27F8", xlArr: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", Longleftrightarrow: "\u27FA", xhArr: "\u27FA", DoubleLongRightArrow: "\u27F9", Longrightarrow: "\u27F9", xrArr: "\u27F9", DoubleRightArrow: "\u21D2", Implies: "\u21D2", Rightarrow: "\u21D2", rArr: "\u21D2", DoubleRightTee: "\u22A8", vDash: "\u22A8", DoubleUpArrow: "\u21D1", Uparrow: "\u21D1", uArr: "\u21D1", DoubleUpDownArrow: "\u21D5", Updownarrow: "\u21D5", vArr: "\u21D5", DoubleVerticalBar: "\u2225", par: "\u2225", parallel: "\u2225", shortparallel: "\u2225", spar: "\u2225", DownArrow: "\u2193", ShortDownArrow: "\u2193", darr: "\u2193", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", duarr: "\u21F5", DownBreve: "\u0311", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", leftharpoondown: "\u21BD", lhard: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", rhard: "\u21C1", rightharpoondown: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", top: "\u22A4", DownTeeArrow: "\u21A7", mapstodown: "\u21A7", Dscr: "\u{1D49F}", Dstrok: "\u0110", ENG: "\u014A", ETH: "\xD0", Eacute: "\xC9", Ecaron: "\u011A", Ecirc: "\xCA", Ecy: "\u042D", Edot: "\u0116", Efr: "\u{1D508}", Egrave: "\xC8", Element: "\u2208", in: "\u2208", isin: "\u2208", isinv: "\u2208", Emacr: "\u0112", EmptySmallSquare: "\u25FB", EmptyVerySmallSquare: "\u25AB", Eogon: "\u0118", Eopf: "\u{1D53C}", Epsilon: "\u0395", Equal: "\u2A75", EqualTilde: "\u2242", eqsim: "\u2242", esim: "\u2242", Equilibrium: "\u21CC", rightleftharpoons: "\u21CC", rlhar: "\u21CC", Escr: "\u2130", expectation: "\u2130", Esim: "\u2A73", Eta: "\u0397", Euml: "\xCB", Exists: "\u2203", exist: "\u2203", ExponentialE: "\u2147", ee: "\u2147", exponentiale: "\u2147", Fcy: "\u0424", Ffr: "\u{1D509}", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", blacksquare: "\u25AA", squarf: "\u25AA", squf: "\u25AA", Fopf: "\u{1D53D}", ForAll: "\u2200", forall: "\u2200", Fouriertrf: "\u2131", Fscr: "\u2131", GJcy: "\u0403", GT: ">", gt: ">", Gamma: "\u0393", Gammad: "\u03DC", Gbreve: "\u011E", Gcedil: "\u0122", Gcirc: "\u011C", Gcy: "\u0413", Gdot: "\u0120", Gfr: "\u{1D50A}", Gg: "\u22D9", ggg: "\u22D9", Gopf: "\u{1D53E}", GreaterEqual: "\u2265", ge: "\u2265", geq: "\u2265", GreaterEqualLess: "\u22DB", gel: "\u22DB", gtreqless: "\u22DB", GreaterFullEqual: "\u2267", gE: "\u2267", geqq: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", gl: "\u2277", gtrless: "\u2277", GreaterSlantEqual: "\u2A7E", geqslant: "\u2A7E", ges: "\u2A7E", GreaterTilde: "\u2273", gsim: "\u2273", gtrsim: "\u2273", Gscr: "\u{1D4A2}", Gt: "\u226B", NestedGreaterGreater: "\u226B", gg: "\u226B", HARDcy: "\u042A", Hacek: "\u02C7", caron: "\u02C7", Hat: "^", Hcirc: "\u0124", Hfr: "\u210C", Poincareplane: "\u210C", HilbertSpace: "\u210B", Hscr: "\u210B", hamilt: "\u210B", Hopf: "\u210D", quaternions: "\u210D", HorizontalLine: "\u2500", boxh: "\u2500", Hstrok: "\u0126", HumpEqual: "\u224F", bumpe: "\u224F", bumpeq: "\u224F", IEcy: "\u0415", IJlig: "\u0132", IOcy: "\u0401", Iacute: "\xCD", Icirc: "\xCE", Icy: "\u0418", Idot: "\u0130", Ifr: "\u2111", Im: "\u2111", image: "\u2111", imagpart: "\u2111", Igrave: "\xCC", Imacr: "\u012A", ImaginaryI: "\u2148", ii: "\u2148", Int: "\u222C", Integral: "\u222B", int: "\u222B", Intersection: "\u22C2", bigcap: "\u22C2", xcap: "\u22C2", InvisibleComma: "\u2063", ic: "\u2063", InvisibleTimes: "\u2062", it: "\u2062", Iogon: "\u012E", Iopf: "\u{1D540}", Iota: "\u0399", Iscr: "\u2110", imagline: "\u2110", Itilde: "\u0128", Iukcy: "\u0406", Iuml: "\xCF", Jcirc: "\u0134", Jcy: "\u0419", Jfr: "\u{1D50D}", Jopf: "\u{1D541}", Jscr: "\u{1D4A5}", Jsercy: "\u0408", Jukcy: "\u0404", KHcy: "\u0425", KJcy: "\u040C", Kappa: "\u039A", Kcedil: "\u0136", Kcy: "\u041A", Kfr: "\u{1D50E}", Kopf: "\u{1D542}", Kscr: "\u{1D4A6}", LJcy: "\u0409", LT: "<", lt: "<", Lacute: "\u0139", Lambda: "\u039B", Lang: "\u27EA", Laplacetrf: "\u2112", Lscr: "\u2112", lagran: "\u2112", Larr: "\u219E", twoheadleftarrow: "\u219E", Lcaron: "\u013D", Lcedil: "\u013B", Lcy: "\u041B", LeftAngleBracket: "\u27E8", lang: "\u27E8", langle: "\u27E8", LeftArrow: "\u2190", ShortLeftArrow: "\u2190", larr: "\u2190", leftarrow: "\u2190", slarr: "\u2190", LeftArrowBar: "\u21E4", larrb: "\u21E4", LeftArrowRightArrow: "\u21C6", leftrightarrows: "\u21C6", lrarr: "\u21C6", LeftCeiling: "\u2308", lceil: "\u2308", LeftDoubleBracket: "\u27E6", lobrk: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", dharl: "\u21C3", downharpoonleft: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", lfloor: "\u230A", LeftRightArrow: "\u2194", harr: "\u2194", leftrightarrow: "\u2194", LeftRightVector: "\u294E", LeftTee: "\u22A3", dashv: "\u22A3", LeftTeeArrow: "\u21A4", mapstoleft: "\u21A4", LeftTeeVector: "\u295A", LeftTriangle: "\u22B2", vartriangleleft: "\u22B2", vltri: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", ltrie: "\u22B4", trianglelefteq: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", uharl: "\u21BF", upharpoonleft: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", leftharpoonup: "\u21BC", lharu: "\u21BC", LeftVectorBar: "\u2952", LessEqualGreater: "\u22DA", leg: "\u22DA", lesseqgtr: "\u22DA", LessFullEqual: "\u2266", lE: "\u2266", leqq: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", lg: "\u2276", LessLess: "\u2AA1", LessSlantEqual: "\u2A7D", leqslant: "\u2A7D", les: "\u2A7D", LessTilde: "\u2272", lesssim: "\u2272", lsim: "\u2272", Lfr: "\u{1D50F}", Ll: "\u22D8", Lleftarrow: "\u21DA", lAarr: "\u21DA", Lmidot: "\u013F", LongLeftArrow: "\u27F5", longleftarrow: "\u27F5", xlarr: "\u27F5", LongLeftRightArrow: "\u27F7", longleftrightarrow: "\u27F7", xharr: "\u27F7", LongRightArrow: "\u27F6", longrightarrow: "\u27F6", xrarr: "\u27F6", Lopf: "\u{1D543}", LowerLeftArrow: "\u2199", swarr: "\u2199", swarrow: "\u2199", LowerRightArrow: "\u2198", searr: "\u2198", searrow: "\u2198", Lsh: "\u21B0", lsh: "\u21B0", Lstrok: "\u0141", Lt: "\u226A", NestedLessLess: "\u226A", ll: "\u226A", Map: "\u2905", Mcy: "\u041C", MediumSpace: "\u205F", Mellintrf: "\u2133", Mscr: "\u2133", phmmat: "\u2133", Mfr: "\u{1D510}", MinusPlus: "\u2213", mnplus: "\u2213", mp: "\u2213", Mopf: "\u{1D544}", Mu: "\u039C", NJcy: "\u040A", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041D", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", ZeroWidthSpace: "\u200B", NewLine: `
`, Nfr: "\u{1D511}", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nbsp: "\xA0", Nopf: "\u2115", naturals: "\u2115", Not: "\u2AEC", NotCongruent: "\u2262", nequiv: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", npar: "\u2226", nparallel: "\u2226", nshortparallel: "\u2226", nspar: "\u2226", NotElement: "\u2209", notin: "\u2209", notinva: "\u2209", NotEqual: "\u2260", ne: "\u2260", NotEqualTilde: "\u2242\u0338", nesim: "\u2242\u0338", NotExists: "\u2204", nexist: "\u2204", nexists: "\u2204", NotGreater: "\u226F", ngt: "\u226F", ngtr: "\u226F", NotGreaterEqual: "\u2271", nge: "\u2271", ngeq: "\u2271", NotGreaterFullEqual: "\u2267\u0338", ngE: "\u2267\u0338", ngeqq: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", nGtv: "\u226B\u0338", NotGreaterLess: "\u2279", ntgl: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", NotGreaterTilde: "\u2275", ngsim: "\u2275", NotHumpDownHump: "\u224E\u0338", nbump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", nbumpe: "\u224F\u0338", NotLeftTriangle: "\u22EA", nltri: "\u22EA", ntriangleleft: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", nltrie: "\u22EC", ntrianglelefteq: "\u22EC", NotLess: "\u226E", nless: "\u226E", nlt: "\u226E", NotLessEqual: "\u2270", nle: "\u2270", nleq: "\u2270", NotLessGreater: "\u2278", ntlg: "\u2278", NotLessLess: "\u226A\u0338", nLtv: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", NotLessTilde: "\u2274", nlsim: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", NotPrecedes: "\u2280", npr: "\u2280", nprec: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", npre: "\u2AAF\u0338", npreceq: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", nprcue: "\u22E0", NotReverseElement: "\u220C", notni: "\u220C", notniva: "\u220C", NotRightTriangle: "\u22EB", nrtri: "\u22EB", ntriangleright: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", nrtrie: "\u22ED", ntrianglerighteq: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", nsqsube: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", nsqsupe: "\u22E3", NotSubset: "\u2282\u20D2", nsubset: "\u2282\u20D2", vnsub: "\u2282\u20D2", NotSubsetEqual: "\u2288", nsube: "\u2288", nsubseteq: "\u2288", NotSucceeds: "\u2281", nsc: "\u2281", nsucc: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", nsce: "\u2AB0\u0338", nsucceq: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", nsccue: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", nsupset: "\u2283\u20D2", vnsup: "\u2283\u20D2", NotSupersetEqual: "\u2289", nsupe: "\u2289", nsupseteq: "\u2289", NotTilde: "\u2241", nsim: "\u2241", NotTildeEqual: "\u2244", nsime: "\u2244", nsimeq: "\u2244", NotTildeFullEqual: "\u2247", ncong: "\u2247", NotTildeTilde: "\u2249", nap: "\u2249", napprox: "\u2249", NotVerticalBar: "\u2224", nmid: "\u2224", nshortmid: "\u2224", nsmid: "\u2224", Nscr: "\u{1D4A9}", Ntilde: "\xD1", Nu: "\u039D", OElig: "\u0152", Oacute: "\xD3", Ocirc: "\xD4", Ocy: "\u041E", Odblac: "\u0150", Ofr: "\u{1D512}", Ograve: "\xD2", Omacr: "\u014C", Omega: "\u03A9", ohm: "\u03A9", Omicron: "\u039F", Oopf: "\u{1D546}", OpenCurlyDoubleQuote: "\u201C", ldquo: "\u201C", OpenCurlyQuote: "\u2018", lsquo: "\u2018", Or: "\u2A54", Oscr: "\u{1D4AA}", Oslash: "\xD8", Otilde: "\xD5", Otimes: "\u2A37", Ouml: "\xD6", OverBar: "\u203E", oline: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", tbrk: "\u23B4", OverParenthesis: "\u23DC", PartialD: "\u2202", part: "\u2202", Pcy: "\u041F", Pfr: "\u{1D513}", Phi: "\u03A6", Pi: "\u03A0", PlusMinus: "\xB1", plusmn: "\xB1", pm: "\xB1", Popf: "\u2119", primes: "\u2119", Pr: "\u2ABB", Precedes: "\u227A", pr: "\u227A", prec: "\u227A", PrecedesEqual: "\u2AAF", pre: "\u2AAF", preceq: "\u2AAF", PrecedesSlantEqual: "\u227C", prcue: "\u227C", preccurlyeq: "\u227C", PrecedesTilde: "\u227E", precsim: "\u227E", prsim: "\u227E", Prime: "\u2033", Product: "\u220F", prod: "\u220F", Proportional: "\u221D", prop: "\u221D", propto: "\u221D", varpropto: "\u221D", vprop: "\u221D", Pscr: "\u{1D4AB}", Psi: "\u03A8", QUOT: '"', quot: '"', Qfr: "\u{1D514}", Qopf: "\u211A", rationals: "\u211A", Qscr: "\u{1D4AC}", RBarr: "\u2910", drbkarow: "\u2910", REG: "\xAE", circledR: "\xAE", reg: "\xAE", Racute: "\u0154", Rang: "\u27EB", Rarr: "\u21A0", twoheadrightarrow: "\u21A0", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", Re: "\u211C", Rfr: "\u211C", real: "\u211C", realpart: "\u211C", ReverseElement: "\u220B", SuchThat: "\u220B", ni: "\u220B", niv: "\u220B", ReverseEquilibrium: "\u21CB", leftrightharpoons: "\u21CB", lrhar: "\u21CB", ReverseUpEquilibrium: "\u296F", duhar: "\u296F", Rho: "\u03A1", RightAngleBracket: "\u27E9", rang: "\u27E9", rangle: "\u27E9", RightArrow: "\u2192", ShortRightArrow: "\u2192", rarr: "\u2192", rightarrow: "\u2192", srarr: "\u2192", RightArrowBar: "\u21E5", rarrb: "\u21E5", RightArrowLeftArrow: "\u21C4", rightleftarrows: "\u21C4", rlarr: "\u21C4", RightCeiling: "\u2309", rceil: "\u2309", RightDoubleBracket: "\u27E7", robrk: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", dharr: "\u21C2", downharpoonright: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rfloor: "\u230B", RightTee: "\u22A2", vdash: "\u22A2", RightTeeArrow: "\u21A6", map: "\u21A6", mapsto: "\u21A6", RightTeeVector: "\u295B", RightTriangle: "\u22B3", vartriangleright: "\u22B3", vrtri: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", rtrie: "\u22B5", trianglerighteq: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", uharr: "\u21BE", upharpoonright: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", rharu: "\u21C0", rightharpoonup: "\u21C0", RightVectorBar: "\u2953", Ropf: "\u211D", reals: "\u211D", RoundImplies: "\u2970", Rrightarrow: "\u21DB", rAarr: "\u21DB", Rscr: "\u211B", realine: "\u211B", Rsh: "\u21B1", rsh: "\u21B1", RuleDelayed: "\u29F4", SHCHcy: "\u0429", SHcy: "\u0428", SOFTcy: "\u042C", Sacute: "\u015A", Sc: "\u2ABC", Scaron: "\u0160", Scedil: "\u015E", Scirc: "\u015C", Scy: "\u0421", Sfr: "\u{1D516}", ShortUpArrow: "\u2191", UpArrow: "\u2191", uarr: "\u2191", uparrow: "\u2191", Sigma: "\u03A3", SmallCircle: "\u2218", compfn: "\u2218", Sopf: "\u{1D54A}", Sqrt: "\u221A", radic: "\u221A", Square: "\u25A1", squ: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", sqcap: "\u2293", SquareSubset: "\u228F", sqsub: "\u228F", sqsubset: "\u228F", SquareSubsetEqual: "\u2291", sqsube: "\u2291", sqsubseteq: "\u2291", SquareSuperset: "\u2290", sqsup: "\u2290", sqsupset: "\u2290", SquareSupersetEqual: "\u2292", sqsupe: "\u2292", sqsupseteq: "\u2292", SquareUnion: "\u2294", sqcup: "\u2294", Sscr: "\u{1D4AE}", Star: "\u22C6", sstarf: "\u22C6", Sub: "\u22D0", Subset: "\u22D0", SubsetEqual: "\u2286", sube: "\u2286", subseteq: "\u2286", Succeeds: "\u227B", sc: "\u227B", succ: "\u227B", SucceedsEqual: "\u2AB0", sce: "\u2AB0", succeq: "\u2AB0", SucceedsSlantEqual: "\u227D", sccue: "\u227D", succcurlyeq: "\u227D", SucceedsTilde: "\u227F", scsim: "\u227F", succsim: "\u227F", Sum: "\u2211", sum: "\u2211", Sup: "\u22D1", Supset: "\u22D1", Superset: "\u2283", sup: "\u2283", supset: "\u2283", SupersetEqual: "\u2287", supe: "\u2287", supseteq: "\u2287", THORN: "\xDE", TRADE: "\u2122", trade: "\u2122", TSHcy: "\u040B", TScy: "\u0426", Tab: "	", Tau: "\u03A4", Tcaron: "\u0164", Tcedil: "\u0162", Tcy: "\u0422", Tfr: "\u{1D517}", Therefore: "\u2234", there4: "\u2234", therefore: "\u2234", Theta: "\u0398", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", Tilde: "\u223C", sim: "\u223C", thicksim: "\u223C", thksim: "\u223C", TildeEqual: "\u2243", sime: "\u2243", simeq: "\u2243", TildeFullEqual: "\u2245", cong: "\u2245", TildeTilde: "\u2248", ap: "\u2248", approx: "\u2248", asymp: "\u2248", thickapprox: "\u2248", thkap: "\u2248", Topf: "\u{1D54B}", TripleDot: "\u20DB", tdot: "\u20DB", Tscr: "\u{1D4AF}", Tstrok: "\u0166", Uacute: "\xDA", Uarr: "\u219F", Uarrocir: "\u2949", Ubrcy: "\u040E", Ubreve: "\u016C", Ucirc: "\xDB", Ucy: "\u0423", Udblac: "\u0170", Ufr: "\u{1D518}", Ugrave: "\xD9", Umacr: "\u016A", UnderBar: "_", lowbar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", bbrk: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", bigcup: "\u22C3", xcup: "\u22C3", UnionPlus: "\u228E", uplus: "\u228E", Uogon: "\u0172", Uopf: "\u{1D54C}", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", udarr: "\u21C5", UpDownArrow: "\u2195", updownarrow: "\u2195", varr: "\u2195", UpEquilibrium: "\u296E", udhar: "\u296E", UpTee: "\u22A5", bot: "\u22A5", bottom: "\u22A5", perp: "\u22A5", UpTeeArrow: "\u21A5", mapstoup: "\u21A5", UpperLeftArrow: "\u2196", nwarr: "\u2196", nwarrow: "\u2196", UpperRightArrow: "\u2197", nearr: "\u2197", nearrow: "\u2197", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", Uring: "\u016E", Uscr: "\u{1D4B0}", Utilde: "\u0168", Uuml: "\xDC", VDash: "\u22AB", Vbar: "\u2AEB", Vcy: "\u0412", Vdash: "\u22A9", Vdashl: "\u2AE6", Vee: "\u22C1", bigvee: "\u22C1", xvee: "\u22C1", Verbar: "\u2016", Vert: "\u2016", VerticalBar: "\u2223", mid: "\u2223", shortmid: "\u2223", smid: "\u2223", VerticalLine: "|", verbar: "|", vert: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", wr: "\u2240", wreath: "\u2240", VeryThinSpace: "\u200A", hairsp: "\u200A", Vfr: "\u{1D519}", Vopf: "\u{1D54D}", Vscr: "\u{1D4B1}", Vvdash: "\u22AA", Wcirc: "\u0174", Wedge: "\u22C0", bigwedge: "\u22C0", xwedge: "\u22C0", Wfr: "\u{1D51A}", Wopf: "\u{1D54E}", Wscr: "\u{1D4B2}", Xfr: "\u{1D51B}", Xi: "\u039E", Xopf: "\u{1D54F}", Xscr: "\u{1D4B3}", YAcy: "\u042F", YIcy: "\u0407", YUcy: "\u042E", Yacute: "\xDD", Ycirc: "\u0176", Ycy: "\u042B", Yfr: "\u{1D51C}", Yopf: "\u{1D550}", Yscr: "\u{1D4B4}", Yuml: "\u0178", ZHcy: "\u0416", Zacute: "\u0179", Zcaron: "\u017D", Zcy: "\u0417", Zdot: "\u017B", Zeta: "\u0396", Zfr: "\u2128", zeetrf: "\u2128", Zopf: "\u2124", integers: "\u2124", Zscr: "\u{1D4B5}", aacute: "\xE1", abreve: "\u0103", ac: "\u223E", mstpos: "\u223E", acE: "\u223E\u0333", acd: "\u223F", acirc: "\xE2", acy: "\u0430", aelig: "\xE6", afr: "\u{1D51E}", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", alpha: "\u03B1", amacr: "\u0101", amalg: "\u2A3F", and: "\u2227", wedge: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", angle: "\u2220", ange: "\u29A4", angmsd: "\u2221", measuredangle: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angzarr: "\u237C", aogon: "\u0105", aopf: "\u{1D552}", apE: "\u2A70", apacir: "\u2A6F", ape: "\u224A", approxeq: "\u224A", apid: "\u224B", apos: "'", aring: "\xE5", ascr: "\u{1D4B6}", ast: "*", midast: "*", atilde: "\xE3", auml: "\xE4", awint: "\u2A11", bNot: "\u2AED", backcong: "\u224C", bcong: "\u224C", backepsilon: "\u03F6", bepsi: "\u03F6", backprime: "\u2035", bprime: "\u2035", backsim: "\u223D", bsim: "\u223D", backsimeq: "\u22CD", bsime: "\u22CD", barvee: "\u22BD", barwed: "\u2305", barwedge: "\u2305", bbrktbrk: "\u23B6", bcy: "\u0431", bdquo: "\u201E", ldquor: "\u201E", bemptyv: "\u29B0", beta: "\u03B2", beth: "\u2136", between: "\u226C", twixt: "\u226C", bfr: "\u{1D51F}", bigcirc: "\u25EF", xcirc: "\u25EF", bigodot: "\u2A00", xodot: "\u2A00", bigoplus: "\u2A01", xoplus: "\u2A01", bigotimes: "\u2A02", xotime: "\u2A02", bigsqcup: "\u2A06", xsqcup: "\u2A06", bigstar: "\u2605", starf: "\u2605", bigtriangledown: "\u25BD", xdtri: "\u25BD", bigtriangleup: "\u25B3", xutri: "\u25B3", biguplus: "\u2A04", xuplus: "\u2A04", bkarow: "\u290D", rbarr: "\u290D", blacklozenge: "\u29EB", lozf: "\u29EB", blacktriangle: "\u25B4", utrif: "\u25B4", blacktriangledown: "\u25BE", dtrif: "\u25BE", blacktriangleleft: "\u25C2", ltrif: "\u25C2", blacktriangleright: "\u25B8", rtrif: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bnot: "\u2310", bopf: "\u{1D553}", bowtie: "\u22C8", boxDL: "\u2557", boxDR: "\u2554", boxDl: "\u2556", boxDr: "\u2553", boxH: "\u2550", boxHD: "\u2566", boxHU: "\u2569", boxHd: "\u2564", boxHu: "\u2567", boxUL: "\u255D", boxUR: "\u255A", boxUl: "\u255C", boxUr: "\u2559", boxV: "\u2551", boxVH: "\u256C", boxVL: "\u2563", boxVR: "\u2560", boxVh: "\u256B", boxVl: "\u2562", boxVr: "\u255F", boxbox: "\u29C9", boxdL: "\u2555", boxdR: "\u2552", boxdl: "\u2510", boxdr: "\u250C", boxhD: "\u2565", boxhU: "\u2568", boxhd: "\u252C", boxhu: "\u2534", boxminus: "\u229F", minusb: "\u229F", boxplus: "\u229E", plusb: "\u229E", boxtimes: "\u22A0", timesb: "\u22A0", boxuL: "\u255B", boxuR: "\u2558", boxul: "\u2518", boxur: "\u2514", boxv: "\u2502", boxvH: "\u256A", boxvL: "\u2561", boxvR: "\u255E", boxvh: "\u253C", boxvl: "\u2524", boxvr: "\u251C", brvbar: "\xA6", bscr: "\u{1D4B7}", bsemi: "\u204F", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bumpE: "\u2AAE", cacute: "\u0107", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", caps: "\u2229\uFE00", caret: "\u2041", ccaps: "\u2A4D", ccaron: "\u010D", ccedil: "\xE7", ccirc: "\u0109", ccups: "\u2A4C", ccupssm: "\u2A50", cdot: "\u010B", cemptyv: "\u29B2", cent: "\xA2", cfr: "\u{1D520}", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", chi: "\u03C7", cir: "\u25CB", cirE: "\u29C3", circ: "\u02C6", circeq: "\u2257", cire: "\u2257", circlearrowleft: "\u21BA", olarr: "\u21BA", circlearrowright: "\u21BB", orarr: "\u21BB", circledS: "\u24C8", oS: "\u24C8", circledast: "\u229B", oast: "\u229B", circledcirc: "\u229A", ocir: "\u229A", circleddash: "\u229D", odash: "\u229D", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", clubs: "\u2663", clubsuit: "\u2663", colon: ":", comma: ",", commat: "@", comp: "\u2201", complement: "\u2201", congdot: "\u2A6D", copf: "\u{1D554}", copysr: "\u2117", crarr: "\u21B5", cross: "\u2717", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", curlyeqprec: "\u22DE", cuesc: "\u22DF", curlyeqsucc: "\u22DF", cularr: "\u21B6", curvearrowleft: "\u21B6", cularrp: "\u293D", cup: "\u222A", cupbrcap: "\u2A48", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curvearrowright: "\u21B7", curarrm: "\u293C", curlyvee: "\u22CE", cuvee: "\u22CE", curlywedge: "\u22CF", cuwed: "\u22CF", curren: "\xA4", cwint: "\u2231", cylcty: "\u232D", dHar: "\u2965", dagger: "\u2020", daleth: "\u2138", dash: "\u2010", hyphen: "\u2010", dbkarow: "\u290F", rBarr: "\u290F", dcaron: "\u010F", dcy: "\u0434", ddarr: "\u21CA", downdownarrows: "\u21CA", ddotseq: "\u2A77", eDDot: "\u2A77", deg: "\xB0", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", dfr: "\u{1D521}", diamondsuit: "\u2666", diams: "\u2666", digamma: "\u03DD", gammad: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", djcy: "\u0452", dlcorn: "\u231E", llcorner: "\u231E", dlcrop: "\u230D", dollar: "$", dopf: "\u{1D555}", doteqdot: "\u2251", eDot: "\u2251", dotminus: "\u2238", minusd: "\u2238", dotplus: "\u2214", plusdo: "\u2214", dotsquare: "\u22A1", sdotb: "\u22A1", drcorn: "\u231F", lrcorner: "\u231F", drcrop: "\u230C", dscr: "\u{1D4B9}", dscy: "\u0455", dsol: "\u29F6", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", triangledown: "\u25BF", dwangle: "\u29A6", dzcy: "\u045F", dzigrarr: "\u27FF", eacute: "\xE9", easter: "\u2A6E", ecaron: "\u011B", ecir: "\u2256", eqcirc: "\u2256", ecirc: "\xEA", ecolon: "\u2255", eqcolon: "\u2255", ecy: "\u044D", edot: "\u0117", efDot: "\u2252", fallingdotseq: "\u2252", efr: "\u{1D522}", eg: "\u2A9A", egrave: "\xE8", egs: "\u2A96", eqslantgtr: "\u2A96", egsdot: "\u2A98", el: "\u2A99", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", eqslantless: "\u2A95", elsdot: "\u2A97", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", emptyv: "\u2205", varnothing: "\u2205", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", eng: "\u014B", ensp: "\u2002", eogon: "\u0119", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", epsilon: "\u03B5", epsiv: "\u03F5", straightepsilon: "\u03F5", varepsilon: "\u03F5", equals: "=", equest: "\u225F", questeq: "\u225F", equivDD: "\u2A78", eqvparsl: "\u29E5", erDot: "\u2253", risingdotseq: "\u2253", erarr: "\u2971", escr: "\u212F", eta: "\u03B7", eth: "\xF0", euml: "\xEB", euro: "\u20AC", excl: "!", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", ffr: "\u{1D523}", filig: "\uFB01", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", fopf: "\u{1D557}", fork: "\u22D4", pitchfork: "\u22D4", forkv: "\u2AD9", fpartint: "\u2A0D", frac12: "\xBD", half: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", sfrown: "\u2322", fscr: "\u{1D4BB}", gEl: "\u2A8C", gtreqqless: "\u2A8C", gacute: "\u01F5", gamma: "\u03B3", gap: "\u2A86", gtrapprox: "\u2A86", gbreve: "\u011F", gcirc: "\u011D", gcy: "\u0433", gdot: "\u0121", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", gfr: "\u{1D524}", gimel: "\u2137", gjcy: "\u0453", glE: "\u2A92", gla: "\u2AA5", glj: "\u2AA4", gnE: "\u2269", gneqq: "\u2269", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gneq: "\u2A88", gnsim: "\u22E7", gopf: "\u{1D558}", gscr: "\u210A", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtrdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrarr: "\u2978", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", hardcy: "\u044A", harrcir: "\u2948", harrw: "\u21AD", leftrightsquigarrow: "\u21AD", hbar: "\u210F", hslash: "\u210F", planck: "\u210F", plankv: "\u210F", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", mldr: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", hksearow: "\u2925", searhk: "\u2925", hkswarow: "\u2926", swarhk: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", larrhk: "\u21A9", hookrightarrow: "\u21AA", rarrhk: "\u21AA", hopf: "\u{1D559}", horbar: "\u2015", hscr: "\u{1D4BD}", hstrok: "\u0127", hybull: "\u2043", iacute: "\xED", icirc: "\xEE", icy: "\u0438", iecy: "\u0435", iexcl: "\xA1", ifr: "\u{1D526}", igrave: "\xEC", iiiint: "\u2A0C", qint: "\u2A0C", iiint: "\u222D", tint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", ijlig: "\u0133", imacr: "\u012B", imath: "\u0131", inodot: "\u0131", imof: "\u22B7", imped: "\u01B5", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", intcal: "\u22BA", intercal: "\u22BA", intlarhk: "\u2A17", intprod: "\u2A3C", iprod: "\u2A3C", iocy: "\u0451", iogon: "\u012F", iopf: "\u{1D55A}", iota: "\u03B9", iquest: "\xBF", iscr: "\u{1D4BE}", isinE: "\u22F9", isindot: "\u22F5", isins: "\u22F4", isinsv: "\u22F3", itilde: "\u0129", iukcy: "\u0456", iuml: "\xEF", jcirc: "\u0135", jcy: "\u0439", jfr: "\u{1D527}", jmath: "\u0237", jopf: "\u{1D55B}", jscr: "\u{1D4BF}", jsercy: "\u0458", jukcy: "\u0454", kappa: "\u03BA", kappav: "\u03F0", varkappa: "\u03F0", kcedil: "\u0137", kcy: "\u043A", kfr: "\u{1D528}", kgreen: "\u0138", khcy: "\u0445", kjcy: "\u045C", kopf: "\u{1D55C}", kscr: "\u{1D4C0}", lAtail: "\u291B", lBarr: "\u290E", lEg: "\u2A8B", lesseqqgtr: "\u2A8B", lHar: "\u2962", lacute: "\u013A", laemptyv: "\u29B4", lambda: "\u03BB", langd: "\u2991", lap: "\u2A85", lessapprox: "\u2A85", laquo: "\xAB", larrbfs: "\u291F", larrfs: "\u291D", larrlp: "\u21AB", looparrowleft: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", leftarrowtail: "\u21A2", lat: "\u2AAB", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lcub: "{", lbrack: "[", lsqb: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", lcaron: "\u013E", lcedil: "\u013C", lcy: "\u043B", ldca: "\u2936", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", leq: "\u2264", leftleftarrows: "\u21C7", llarr: "\u21C7", leftthreetimes: "\u22CB", lthree: "\u22CB", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessdot: "\u22D6", ltdot: "\u22D6", lfisht: "\u297C", lfr: "\u{1D529}", lgE: "\u2A91", lharul: "\u296A", lhblk: "\u2584", ljcy: "\u0459", llhard: "\u296B", lltri: "\u25FA", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnE: "\u2268", lneqq: "\u2268", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lneq: "\u2A87", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", longmapsto: "\u27FC", xmap: "\u27FC", looparrowright: "\u21AC", rarrlp: "\u21AC", lopar: "\u2985", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", loz: "\u25CA", lozenge: "\u25CA", lpar: "(", lparlt: "\u2993", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", lsime: "\u2A8D", lsimg: "\u2A8F", lsquor: "\u201A", sbquo: "\u201A", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltrPar: "\u2996", ltri: "\u25C3", triangleleft: "\u25C3", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", mDDot: "\u223A", macr: "\xAF", strns: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", marker: "\u25AE", mcomma: "\u2A29", mcy: "\u043C", mdash: "\u2014", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midcir: "\u2AF0", minus: "\u2212", minusdu: "\u2A2A", mlcp: "\u2ADB", models: "\u22A7", mopf: "\u{1D55E}", mscr: "\u{1D4C2}", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nGg: "\u22D9\u0338", nGt: "\u226B\u20D2", nLeftarrow: "\u21CD", nlArr: "\u21CD", nLeftrightarrow: "\u21CE", nhArr: "\u21CE", nLl: "\u22D8\u0338", nLt: "\u226A\u20D2", nRightarrow: "\u21CF", nrArr: "\u21CF", nVDash: "\u22AF", nVdash: "\u22AE", nacute: "\u0144", nang: "\u2220\u20D2", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", natur: "\u266E", natural: "\u266E", ncap: "\u2A43", ncaron: "\u0148", ncedil: "\u0146", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", ncy: "\u043D", ndash: "\u2013", neArr: "\u21D7", nearhk: "\u2924", nedot: "\u2250\u0338", nesear: "\u2928", toea: "\u2928", nfr: "\u{1D52B}", nharr: "\u21AE", nleftrightarrow: "\u21AE", nhpar: "\u2AF2", nis: "\u22FC", nisd: "\u22FA", njcy: "\u045A", nlE: "\u2266\u0338", nleqq: "\u2266\u0338", nlarr: "\u219A", nleftarrow: "\u219A", nldr: "\u2025", nopf: "\u{1D55F}", not: "\xAC", notinE: "\u22F9\u0338", notindot: "\u22F5\u0338", notinvb: "\u22F7", notinvc: "\u22F6", notnivb: "\u22FE", notnivc: "\u22FD", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", nrarr: "\u219B", nrightarrow: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nscr: "\u{1D4C3}", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsubseteqq: "\u2AC5\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupseteqq: "\u2AC6\u0338", ntilde: "\xF1", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvDash: "\u22AD", nvHarr: "\u2904", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwArr: "\u21D6", nwarhk: "\u2923", nwnear: "\u2927", oacute: "\xF3", ocirc: "\xF4", ocy: "\u043E", odblac: "\u0151", odiv: "\u2A38", odsold: "\u29BC", oelig: "\u0153", ofcir: "\u29BF", ofr: "\u{1D52C}", ogon: "\u02DB", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", olcir: "\u29BE", olcross: "\u29BB", olt: "\u29C0", omacr: "\u014D", omega: "\u03C9", omicron: "\u03BF", omid: "\u29B6", oopf: "\u{1D560}", opar: "\u29B7", operp: "\u29B9", or: "\u2228", vee: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", oscr: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oslash: "\xF8", osol: "\u2298", otilde: "\xF5", otimesas: "\u2A36", ouml: "\xF6", ovbar: "\u233D", para: "\xB6", parsim: "\u2AF3", parsl: "\u2AFD", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", pertenk: "\u2031", pfr: "\u{1D52D}", phi: "\u03C6", phiv: "\u03D5", straightphi: "\u03D5", varphi: "\u03D5", phone: "\u260E", pi: "\u03C0", piv: "\u03D6", varpi: "\u03D6", planckh: "\u210E", plus: "+", plusacir: "\u2A23", pluscir: "\u2A22", plusdu: "\u2A25", pluse: "\u2A72", plussim: "\u2A26", plustwo: "\u2A27", pointint: "\u2A15", popf: "\u{1D561}", pound: "\xA3", prE: "\u2AB3", prap: "\u2AB7", precapprox: "\u2AB7", precnapprox: "\u2AB9", prnap: "\u2AB9", precneqq: "\u2AB5", prnE: "\u2AB5", precnsim: "\u22E8", prnsim: "\u22E8", prime: "\u2032", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prurel: "\u22B0", pscr: "\u{1D4C5}", psi: "\u03C8", puncsp: "\u2008", qfr: "\u{1D52E}", qopf: "\u{1D562}", qprime: "\u2057", qscr: "\u{1D4C6}", quatint: "\u2A16", quest: "?", rAtail: "\u291C", rHar: "\u2964", race: "\u223D\u0331", racute: "\u0155", raemptyv: "\u29B3", rangd: "\u2992", range: "\u29A5", raquo: "\xBB", rarrap: "\u2975", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrpl: "\u2945", rarrsim: "\u2974", rarrtl: "\u21A3", rightarrowtail: "\u21A3", rarrw: "\u219D", rightsquigarrow: "\u219D", ratail: "\u291A", ratio: "\u2236", rbbrk: "\u2773", rbrace: "}", rcub: "}", rbrack: "]", rsqb: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdsh: "\u21B3", rect: "\u25AD", rfisht: "\u297D", rfr: "\u{1D52F}", rharul: "\u296C", rho: "\u03C1", rhov: "\u03F1", varrho: "\u03F1", rightrightarrows: "\u21C9", rrarr: "\u21C9", rightthreetimes: "\u22CC", rthree: "\u22CC", ring: "\u02DA", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", ropar: "\u2986", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rsaquo: "\u203A", rscr: "\u{1D4C7}", rtimes: "\u22CA", rtri: "\u25B9", triangleright: "\u25B9", rtriltri: "\u29CE", ruluhar: "\u2968", rx: "\u211E", sacute: "\u015B", scE: "\u2AB4", scap: "\u2AB8", succapprox: "\u2AB8", scaron: "\u0161", scedil: "\u015F", scirc: "\u015D", scnE: "\u2AB6", succneqq: "\u2AB6", scnap: "\u2ABA", succnapprox: "\u2ABA", scnsim: "\u22E9", succnsim: "\u22E9", scpolint: "\u2A13", scy: "\u0441", sdot: "\u22C5", sdote: "\u2A66", seArr: "\u21D8", sect: "\xA7", semi: ";", seswar: "\u2929", tosa: "\u2929", sext: "\u2736", sfr: "\u{1D530}", sharp: "\u266F", shchcy: "\u0449", shcy: "\u0448", shy: "\xAD", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", varsigma: "\u03C2", simdot: "\u2A6A", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", smashp: "\u2A33", smeparsl: "\u29E4", smile: "\u2323", ssmile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", sqcaps: "\u2293\uFE00", sqcups: "\u2294\uFE00", sscr: "\u{1D4C8}", star: "\u2606", sub: "\u2282", subset: "\u2282", subE: "\u2AC5", subseteqq: "\u2AC5", subdot: "\u2ABD", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subsetneqq: "\u2ACB", subne: "\u228A", subsetneq: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supE: "\u2AC6", supseteqq: "\u2AC6", supdot: "\u2ABE", supdsub: "\u2AD8", supedot: "\u2AC4", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supsetneqq: "\u2ACC", supne: "\u228B", supsetneq: "\u228B", supplus: "\u2AC0", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swArr: "\u21D9", swnwar: "\u292A", szlig: "\xDF", target: "\u2316", tau: "\u03C4", tcaron: "\u0165", tcedil: "\u0163", tcy: "\u0442", telrec: "\u2315", tfr: "\u{1D531}", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", vartheta: "\u03D1", thorn: "\xFE", times: "\xD7", timesbar: "\u2A31", timesd: "\u2A30", topbot: "\u2336", topcir: "\u2AF1", topf: "\u{1D565}", topfork: "\u2ADA", tprime: "\u2034", triangle: "\u25B5", utri: "\u25B5", triangleq: "\u225C", trie: "\u225C", tridot: "\u25EC", triminus: "\u2A3A", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", tscr: "\u{1D4C9}", tscy: "\u0446", tshcy: "\u045B", tstrok: "\u0167", uHar: "\u2963", uacute: "\xFA", ubrcy: "\u045E", ubreve: "\u016D", ucirc: "\xFB", ucy: "\u0443", udblac: "\u0171", ufisht: "\u297E", ufr: "\u{1D532}", ugrave: "\xF9", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", umacr: "\u016B", uogon: "\u0173", uopf: "\u{1D566}", upsi: "\u03C5", upsilon: "\u03C5", upuparrows: "\u21C8", uuarr: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", uring: "\u016F", urtri: "\u25F9", uscr: "\u{1D4CA}", utdot: "\u22F0", utilde: "\u0169", uuml: "\xFC", uwangle: "\u29A7", vBar: "\u2AE8", vBarv: "\u2AE9", vangrt: "\u299C", varsubsetneq: "\u228A\uFE00", vsubne: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", vsubnE: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", vsupne: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vsupnE: "\u2ACC\uFE00", vcy: "\u0432", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", vfr: "\u{1D533}", vopf: "\u{1D567}", vscr: "\u{1D4CB}", vzigzag: "\u299A", wcirc: "\u0175", wedbar: "\u2A5F", wedgeq: "\u2259", weierp: "\u2118", wp: "\u2118", wfr: "\u{1D534}", wopf: "\u{1D568}", wscr: "\u{1D4CC}", xfr: "\u{1D535}", xi: "\u03BE", xnis: "\u22FB", xopf: "\u{1D569}", xscr: "\u{1D4CD}", yacute: "\xFD", yacy: "\u044F", ycirc: "\u0177", ycy: "\u044B", yen: "\xA5", yfr: "\u{1D536}", yicy: "\u0457", yopf: "\u{1D56A}", yscr: "\u{1D4CE}", yucy: "\u044E", yuml: "\xFF", zacute: "\u017A", zcaron: "\u017E", zcy: "\u0437", zdot: "\u017C", zeta: "\u03B6", zfr: "\u{1D537}", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
_e.ngsp = "\uE500";
var to = class {
  tokens;
  errors;
  nonNormalizedIcuExpressions;
  constructor(e, t, r) {
    this.tokens = e, this.errors = t, this.nonNormalizedIcuExpressions = r;
  }
};
function qi(e, t, r, n = {}) {
  let i = new oo(new nt(e, t), r, n);
  return i.tokenize(), new to(fo(i.tokens), i.errors, i.nonNormalizedIcuExpressions);
}
var ro = /\r\n?/g;
function Se(e) {
  return `Unexpected character "${e === 0 ? "EOF" : String.fromCharCode(e)}"`;
}
function Ii(e) {
  return `Unknown entity "${e}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function no(e, t) {
  return `Unable to parse entity "${t}" - ${e} character reference entities must end with ";"`;
}
var io = ["@if", "@else", "@for", "@switch", "@case", "@default", "@empty", "@defer", "@placeholder", "@loading", "@boundary", "@error", "@content"];
var st = { start: "{{", end: "}}" };
var so = /^default[^\S\r\n]+never/;
var ao = /^else[^\S\r\n]+if/;
var oo = class {
  _getTagContentType;
  _cursor;
  _tokenizeIcu;
  _leadingTriviaCodePoints;
  _canSelfClose;
  _allowHtmComponentClosingTags;
  _allowStartTagComments;
  _currentTokenStart = null;
  _currentTokenType = null;
  _expansionCaseStack = [];
  _openDirectiveCount = 0;
  _inInterpolation = false;
  _preserveLineEndings;
  _i18nNormalizeLineEndingsInICUs;
  _fullNameStack = [];
  _tokenizeBlocks;
  _tokenizeLet;
  _selectorlessEnabled;
  tokens = [];
  errors = [];
  nonNormalizedIcuExpressions = [];
  constructor(e, t, r) {
    this._getTagContentType = t, this._tokenizeIcu = r.tokenizeExpansionForms || false, this._leadingTriviaCodePoints = r.leadingTriviaChars && r.leadingTriviaChars.map((i) => i.codePointAt(0) || 0), this._canSelfClose = r.canSelfClose || false, this._allowHtmComponentClosingTags = r.allowHtmComponentClosingTags || false, this._allowStartTagComments = r.allowStartTagComments ?? true;
    let n = r.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 };
    this._cursor = r.escapedString ? new go(e, n) : new Fi(e, n), this._preserveLineEndings = r.preserveLineEndings || false, this._i18nNormalizeLineEndingsInICUs = r.i18nNormalizeLineEndingsInICUs || false, this._tokenizeBlocks = r.tokenizeBlocks ?? true, this._tokenizeLet = r.tokenizeLet ?? true, this._selectorlessEnabled = r.selectorlessEnabled ?? false;
    try {
      this._cursor.init();
    } catch (i) {
      this.handleError(i);
    }
  }
  _processCarriageReturns(e) {
    return this._preserveLineEndings ? e : e.replace(ro, `
`);
  }
  tokenize() {
    for (; this._cursor.peek() !== 0; ) {
      let e = this._cursor.clone();
      try {
        if (this._attemptCharCode(60)) if (this._attemptCharCode(33)) this._attemptStr("[CDATA[") ? this._consumeCdata(e) : this._attemptStr("--") ? this._consumeComment(e) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(e) : this._consumeBogusComment(e);
        else if (this._attemptCharCode(47)) this._consumeTagClose(e);
        else {
          let t = this._cursor.clone();
          this._attemptCharCode(63) ? (this._cursor = t, this._consumeBogusComment(e)) : this._consumeTagOpen(e);
        }
        else this._tokenizeLet && this._cursor.peek() === 64 && !this._inInterpolation && this._isLetStart() ? this._consumeLetDeclaration(e) : this._tokenizeBlocks && this._isBlockStart() ? this._consumeBlockStart(e) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(125) ? this._consumeBlockEnd(e) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(5, 8, () => this._isTextEnd(), () => this._isTagStart());
      } catch (t) {
        this.handleError(t);
      }
    }
    this._beginToken(44), this._endToken([]);
  }
  _getBlockName() {
    let e = false, t = this._cursor.clone();
    this._attemptCharCodeUntilFn((n) => it(n) ? !e : mo(n) ? (e = true, false) : true);
    let r = this._cursor.getChars(t).trim();
    return ao.test(r) ? r = "else if" : so.test(r) && (r = "default never"), r;
  }
  _consumeBlockStart(e) {
    this._requireCharCode(64), this._beginToken(26, e);
    let t = this._endToken([this._getBlockName()]);
    if (this._cursor.peek() === 40) if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(b), this._attemptCharCode(41)) this._attemptCharCodeUntilFn(b);
    else {
      t.type = 30;
      return;
    }
    if (t.parts[0] === "default never" && this._attemptCharCode(59)) {
      this._beginToken(27), this._endToken([]), this._beginToken(28), this._endToken([]);
      return;
    }
    this._attemptCharCode(123) ? (this._beginToken(27), this._endToken([])) : this._isBlockStart() && (t.parts[0] === "case" || t.parts[0] === "default") ? (this._beginToken(27), this._endToken([]), this._beginToken(28), this._endToken([])) : t.type = 30;
  }
  _consumeBlockEnd(e) {
    this._beginToken(28, e), this._endToken([]);
  }
  _consumeBlockParameters() {
    for (this._attemptCharCodeUntilFn(Ri); this._cursor.peek() !== 41 && this._cursor.peek() !== 0; ) {
      this._beginToken(29);
      let e = this._cursor.clone(), t = null, r = 0;
      for (; this._cursor.peek() !== 59 && this._cursor.peek() !== 0 || t !== null; ) {
        let n = this._cursor.peek();
        if (n === 92) this._cursor.advance();
        else if (n === t) t = null;
        else if (t === null && Ot(n)) t = n;
        else if (n === 40 && t === null) r++;
        else if (n === 41 && t === null) {
          if (r === 0) break;
          r > 0 && r--;
        }
        this._cursor.advance();
      }
      this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(Ri);
    }
  }
  _consumeLetDeclaration(e) {
    if (this._requireStr("@let"), this._beginToken(31, e), it(this._cursor.peek())) this._attemptCharCodeUntilFn(b);
    else {
      let r = this._endToken([this._cursor.getChars(e)]);
      r.type = 34;
      return;
    }
    let t = this._endToken([this._getLetDeclarationName()]);
    if (this._attemptCharCodeUntilFn(b), !this._attemptCharCode(61)) {
      t.type = 34;
      return;
    }
    this._attemptCharCodeUntilFn((r) => b(r) && !Me(r)), this._consumeLetDeclarationValue(), this._cursor.peek() === 59 ? (this._beginToken(33), this._cursor.advance(), this._endToken([])) : (t.type = 34, t.sourceSpan = this._cursor.getSpan(e));
  }
  _getLetDeclarationName() {
    let e = this._cursor.clone(), t = false;
    return this._attemptCharCodeUntilFn((r) => Re(r) || r === 36 || r === 95 || t && Oe(r) ? (t = true, false) : true), this._cursor.getChars(e).trim();
  }
  _consumeLetDeclarationValue() {
    let e = this._cursor.clone();
    this._beginToken(32, e), this._attemptUntilIgnoreQuotes((t) => t === 59), this._endToken([this._cursor.getChars(e)]);
  }
  _tokenizeExpansionForm() {
    if (this.isExpansionFormStart()) return this._consumeExpansionFormStart(), true;
    if (po(this._cursor.peek()) && this._isInExpansionForm()) return this._consumeExpansionCaseStart(), true;
    if (this._cursor.peek() === 125) {
      if (this._isInExpansionCase()) return this._consumeExpansionCaseEnd(), true;
      if (this._isInExpansionForm()) return this._consumeExpansionFormEnd(), true;
    }
    return false;
  }
  _beginToken(e, t = this._cursor.clone()) {
    this._currentTokenStart = t, this._currentTokenType = e;
  }
  _endToken(e, t) {
    if (this._currentTokenStart === null) throw new re(this._cursor.getSpan(t), "Programming error - attempted to end a token when there was no start to the token");
    if (this._currentTokenType === null) throw new re(this._cursor.getSpan(this._currentTokenStart), "Programming error - attempted to end a token which has no token type");
    let r = { type: this._currentTokenType, parts: e, sourceSpan: (t ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) };
    return this.tokens.push(r), this._currentTokenStart = null, this._currentTokenType = null, r;
  }
  _createError(e, t) {
    this._isInExpansionForm() && (e += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
    let r = new re(t, e);
    return this._currentTokenStart = null, this._currentTokenType = null, r;
  }
  handleError(e) {
    if (e instanceof vr && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof re) this.errors.push(e);
    else throw e;
  }
  _attemptCharCode(e) {
    return this._cursor.peek() === e ? (this._cursor.advance(), true) : false;
  }
  _attemptCharCodeCaseInsensitive(e) {
    return ho(this._cursor.peek(), e) ? (this._cursor.advance(), true) : false;
  }
  _requireCharCode(e) {
    let t = this._cursor.clone();
    if (!this._attemptCharCode(e)) throw this._createError(Se(this._cursor.peek()), this._cursor.getSpan(t));
  }
  _attemptStr(e) {
    let t = e.length;
    if (this._cursor.charsLeft() < t) return false;
    let r = this._cursor.clone();
    for (let n = 0; n < t; n++) if (!this._attemptCharCode(e.charCodeAt(n))) return this._cursor = r, false;
    return true;
  }
  _attemptStrCaseInsensitive(e) {
    for (let t = 0; t < e.length; t++) if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t))) return false;
    return true;
  }
  _requireStr(e) {
    let t = this._cursor.clone();
    if (!this._attemptStr(e)) throw this._createError(Se(this._cursor.peek()), this._cursor.getSpan(t));
  }
  _requireStrCaseInsensitive(e) {
    let t = this._cursor.clone();
    if (!this._attemptStrCaseInsensitive(e)) throw this._createError(Se(this._cursor.peek()), this._cursor.getSpan(t));
  }
  _attemptCharCodeUntilFn(e) {
    for (; !e(this._cursor.peek()); ) this._cursor.advance();
  }
  _requireCharCodeUntilFn(e, t) {
    let r = this._cursor.clone();
    if (this._attemptCharCodeUntilFn(e), this._cursor.diff(r) < t) throw this._createError(Se(this._cursor.peek()), this._cursor.getSpan(r));
  }
  _attemptUntilChar(e) {
    for (; this._cursor.peek() !== e; ) this._cursor.advance();
  }
  _attemptUntilIgnoreQuotes(e) {
    for (; this._cursor.peek() !== 0; ) {
      let t = this._cursor.peek();
      if (e(t)) break;
      Ot(t) && (this._cursor.advance(), this._attemptCharCodeUntilFn((r) => r === 92 ? (this._cursor.advance(), false) : r === t)), this._cursor.advance();
    }
  }
  _readChar() {
    let e = String.fromCodePoint(this._cursor.peek());
    return this._cursor.advance(), e;
  }
  _peekStr(e) {
    let t = e.length;
    if (this._cursor.charsLeft() < t) return false;
    let r = this._cursor.clone();
    for (let n = 0; n < t; n++) {
      if (r.peek() !== e.charCodeAt(n)) return false;
      r.advance();
    }
    return true;
  }
  _isBlockStart() {
    return this._cursor.peek() === 64 && io.some((e) => this._peekStr(e));
  }
  _isLetStart() {
    return this._cursor.peek() === 64 && this._peekStr("@let");
  }
  _consumeEntity(e) {
    this._beginToken(9);
    let t = this._cursor.clone();
    if (this._cursor.advance(), this._attemptCharCode(35)) {
      let r = this._attemptCharCode(120) || this._attemptCharCode(88), n = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(co), this._cursor.peek() != 59) {
        this._cursor.advance();
        let s = r ? "hexadecimal" : "decimal";
        throw this._createError(no(s, this._cursor.getChars(t)), this._cursor.getSpan());
      }
      let i = this._cursor.getChars(n);
      this._cursor.advance();
      try {
        let s = parseInt(i, r ? 16 : 10);
        this._endToken([String.fromCodePoint(s), this._cursor.getChars(t)]);
      } catch {
        throw this._createError(Ii(this._cursor.getChars(t)), this._cursor.getSpan());
      }
    } else {
      let r = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(uo), this._cursor.peek() != 59) this._beginToken(e, t), this._cursor = r, this._endToken(["&"]);
      else {
        let n = this._cursor.getChars(r);
        this._cursor.advance();
        let i = O(_e, n) && _e[n];
        if (!i) throw this._createError(Ii(n), this._cursor.getSpan(t));
        this._endToken([i, `&${n};`]);
      }
    }
  }
  _consumeRawText(e, t) {
    this._beginToken(e ? 6 : 7);
    let r = [];
    for (; ; ) {
      let n = this._cursor.clone(), i = t();
      if (this._cursor = n, i) break;
      e && this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(r.join(""))]), r.length = 0, this._consumeEntity(6), this._beginToken(6)) : r.push(this._readChar());
    }
    this._endToken([this._processCarriageReturns(r.join(""))]);
  }
  _consumeComment(e) {
    this._beginToken(10, e), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(11), this._requireStr("-->"), this._endToken([]);
  }
  _consumeBogusComment(e) {
    this._beginToken(10, e), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(11), this._cursor.advance(), this._endToken([]);
  }
  _consumeCdata(e) {
    this._beginToken(13, e), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(14), this._requireStr("]]>"), this._endToken([]);
  }
  _consumeDocType(e) {
    this._beginToken(19, e), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(20), this._cursor.advance(), this._endToken([]);
  }
  _consumeProcessingInstruction(e) {
    this._beginToken(43, e);
    let t = this._cursor.clone();
    this._attemptUntilIgnoreQuotes((i) => i === 63 || i === 62);
    let r = this._cursor.peek(), n = this._cursor.getChars(t);
    this._cursor.advance(), r === 63 && this._requireCharCode(62), this._endToken([n]);
  }
  _consumePrefixAndName(e) {
    let t = this._cursor.clone(), r = "";
    for (; this._cursor.peek() !== 58 && !lo(this._cursor.peek()); ) this._cursor.advance();
    let n;
    this._cursor.peek() === 58 ? (r = this._cursor.getChars(t), this._cursor.advance(), n = this._cursor.clone()) : n = t, this._requireCharCodeUntilFn(e, r === "" ? 0 : 1);
    let i = this._cursor.getChars(n);
    return [r, i];
  }
  _consumeSingleLineComment(e) {
    let t = this._cursor.clone();
    this._attemptCharCodeUntilFn((i) => Me(i) || i === 0);
    let r = this._cursor.clone(), n = r.getChars(t);
    this._beginToken(12, e), this._endToken([n, "single"], r), this._attemptCharCodeUntilFn(b);
  }
  _consumeMultiLineComment(e) {
    let t = this._cursor.clone();
    this._attemptCharCodeUntilFn((s) => {
      if (s === 0) return true;
      if (s === 42) {
        let a = this._cursor.clone();
        return a.advance(), a.peek() === 47;
      }
      return false;
    });
    let r = this._cursor.clone(), n = r.getChars(t), i = r;
    this._attemptStr("*/") && (i = this._cursor.clone(), this._attemptCharCodeUntilFn(b)), this._beginToken(12, e), this._endToken([n, "multi"], i);
  }
  _consumeTagOpen(e) {
    let t, r, n, i, s = [];
    try {
      if (this._selectorlessEnabled && Rt(this._cursor.peek())) i = this._consumeComponentOpenStart(e), [n, r, t] = i.parts, r && (n += `:${r}`), t && (n += `:${t}`), this._attemptCharCodeUntilFn(b);
      else {
        if (!Re(this._cursor.peek())) throw this._createError(Se(this._cursor.peek()), this._cursor.getSpan(e));
        i = this._consumeTagOpenStart(e), r = i.parts[0], t = n = i.parts[1], this._attemptCharCodeUntilFn(b);
      }
      for (; ; ) {
        if (this._allowStartTagComments) {
          let o = this._cursor.clone();
          if (this._attemptStr("//")) {
            this._consumeSingleLineComment(o);
            continue;
          }
          if (this._attemptStr("/*")) {
            this._consumeMultiLineComment(o);
            continue;
          }
        }
        if (Bi(this._cursor.peek())) break;
        if (this._selectorlessEnabled && this._cursor.peek() === 64) {
          let o = this._cursor.clone(), l = o.clone();
          l.advance(), Rt(l.peek()) && this._consumeDirective(o, l);
        } else {
          let o = this._consumeAttribute();
          s.push(o);
        }
      }
      i.type === 35 ? this._consumeComponentOpenEnd() : this._consumeTagOpenEnd();
    } catch (o) {
      if (o instanceof re) {
        i ? i.type = i.type === 35 ? 39 : 4 : (this._beginToken(5, e), this._endToken(["<"]));
        return;
      }
      throw o;
    }
    if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === 2) return;
    let a = this._getTagContentType(t, r, this._fullNameStack.length > 0, s);
    this._handleFullNameStackForTagOpen(r, t), a === 0 ? this._consumeRawTextWithTagClose(r, i, n, false) : a === 1 && this._consumeRawTextWithTagClose(r, i, n, true);
  }
  _consumeRawTextWithTagClose(e, t, r, n) {
    this._consumeRawText(n, () => !this._attemptCharCode(60) || !this._attemptCharCode(47) || (this._attemptCharCodeUntilFn(b), !this._attemptStrCaseInsensitive(e && t.type !== 35 ? `${e}:${r}` : r)) ? false : (this._attemptCharCodeUntilFn(b), this._attemptCharCode(62))), this._beginToken(t.type === 35 ? 38 : 3), this._requireCharCodeUntilFn((i) => i === 62, 3), this._cursor.advance(), this._endToken(t.parts), this._handleFullNameStackForTagClose(e, r);
  }
  _consumeTagOpenStart(e) {
    this._beginToken(0, e);
    let t = this._consumePrefixAndName(ve);
    return this._endToken(t);
  }
  _consumeComponentOpenStart(e) {
    this._beginToken(35, e);
    let t = this._consumeComponentName();
    return this._endToken(t);
  }
  _consumeComponentName() {
    let e = this._cursor.clone();
    for (; Mi(this._cursor.peek()); ) this._cursor.advance();
    let t = this._cursor.getChars(e), r = "", n = "";
    return this._cursor.peek() === 58 && (this._cursor.advance(), [r, n] = this._consumePrefixAndName(ve)), [t, r, n];
  }
  _consumeAttribute() {
    let [e, t] = this._consumeAttributeName(), r;
    return this._attemptCharCodeUntilFn(b), this._attemptCharCode(61) && (this._attemptCharCodeUntilFn(b), r = this._consumeAttributeValue()), this._attemptCharCodeUntilFn(b), { prefix: e, name: t, value: r };
  }
  _consumeAttributeName() {
    let e = this._cursor.peek();
    if (e === 39 || e === 34) throw this._createError(Se(e), this._cursor.getSpan());
    this._beginToken(15);
    let t;
    if (this._openDirectiveCount > 0) {
      let n = 0;
      t = (i) => {
        if (this._openDirectiveCount > 0) {
          if (i === 40) n++;
          else if (i === 41) {
            if (n === 0) return true;
            n--;
          }
        }
        return ve(i);
      };
    } else if (e === 91) {
      let n = 0;
      t = (i) => (i === 91 ? n++ : i === 93 && n--, n <= 0 ? ve(i) : Me(i));
    } else t = ve;
    let r = this._consumePrefixAndName(t);
    return this._endToken(r), r;
  }
  _consumeAttributeValue() {
    let e;
    if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
      let t = this._cursor.peek();
      this._consumeQuote(t);
      let r = () => this._cursor.peek() === t;
      e = this._consumeWithInterpolation(17, 18, r, r), this._consumeQuote(t);
    } else {
      let t = () => ve(this._cursor.peek());
      e = this._consumeWithInterpolation(17, 18, t, t);
    }
    return e;
  }
  _consumeQuote(e) {
    this._beginToken(16), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]);
  }
  _consumeTagOpenEnd() {
    let e = this._attemptCharCode(47) ? 2 : 1;
    this._beginToken(e), this._requireCharCode(62), this._endToken([]);
  }
  _consumeComponentOpenEnd() {
    let e = this._attemptCharCode(47) ? 37 : 36;
    this._beginToken(e), this._requireCharCode(62), this._endToken([]);
  }
  _consumeTagClose(e) {
    if (this._selectorlessEnabled) {
      let t = e.clone();
      for (; t.peek() !== 62 && !Rt(t.peek()); ) t.advance();
      if (Rt(t.peek())) {
        this._beginToken(38, e);
        let r = this._consumeComponentName();
        this._attemptCharCodeUntilFn(b), this._requireCharCode(62), this._endToken(r);
        return;
      }
    }
    if (this._beginToken(3, e), this._attemptCharCodeUntilFn(b), this._allowHtmComponentClosingTags && this._attemptCharCode(47)) this._attemptCharCodeUntilFn(b), this._requireCharCode(62), this._endToken([]);
    else {
      let [t, r] = this._consumePrefixAndName(ve);
      this._attemptCharCodeUntilFn(b), this._requireCharCode(62), this._endToken([t, r]), this._handleFullNameStackForTagClose(t, r);
    }
  }
  _consumeExpansionFormStart() {
    this._beginToken(21), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(21), this._beginToken(7);
    let e = this._readUntil(44), t = this._processCarriageReturns(e);
    if (this._i18nNormalizeLineEndingsInICUs) this._endToken([t]);
    else {
      let n = this._endToken([e]);
      t !== e && this.nonNormalizedIcuExpressions.push(n);
    }
    this._requireCharCode(44), this._attemptCharCodeUntilFn(b), this._beginToken(7);
    let r = this._readUntil(44);
    this._endToken([r]), this._requireCharCode(44), this._attemptCharCodeUntilFn(b);
  }
  _consumeExpansionCaseStart() {
    this._beginToken(22);
    let e = this._readUntil(123).trim();
    this._endToken([e]), this._attemptCharCodeUntilFn(b), this._beginToken(23), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(b), this._expansionCaseStack.push(23);
  }
  _consumeExpansionCaseEnd() {
    this._beginToken(24), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(b), this._expansionCaseStack.pop();
  }
  _consumeExpansionFormEnd() {
    this._beginToken(25), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
  }
  _consumeWithInterpolation(e, t, r, n) {
    this._beginToken(e);
    let i = [];
    for (; !r(); ) {
      let a = this._cursor.clone();
      this._attemptStr(st.start) ? (this._endToken([this._processCarriageReturns(i.join(""))], a), i.length = 0, this._consumeInterpolation(t, a, n), this._beginToken(e)) : this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(i.join(""))]), i.length = 0, this._consumeEntity(e), this._beginToken(e)) : i.push(this._readChar());
    }
    this._inInterpolation = false;
    let s = this._processCarriageReturns(i.join(""));
    return this._endToken([s]), s;
  }
  _consumeInterpolation(e, t, r) {
    let n = [];
    this._beginToken(e, t), n.push(st.start);
    let i = this._cursor.clone(), s = null, a = false;
    for (; this._cursor.peek() !== 0 && (r === null || !r()); ) {
      let o = this._cursor.clone();
      if (this._isTagStart()) {
        this._cursor = o, n.push(this._getProcessedChars(i, o)), this._endToken(n);
        return;
      }
      if (s === null) if (this._attemptStr(st.end)) {
        n.push(this._getProcessedChars(i, o)), n.push(st.end), this._endToken(n);
        return;
      } else this._attemptStr("//") && (a = true);
      let l = this._cursor.peek();
      this._cursor.advance(), l === 92 ? this._cursor.advance() : l === s ? s = null : !a && s === null && Ot(l) && (s = l);
    }
    n.push(this._getProcessedChars(i, this._cursor)), this._endToken(n);
  }
  _consumeDirective(e, t) {
    for (this._requireCharCode(64), this._cursor.advance(); Mi(this._cursor.peek()); ) this._cursor.advance();
    this._beginToken(40, e);
    let r = this._cursor.getChars(t);
    if (this._endToken([r]), this._attemptCharCodeUntilFn(b), this._cursor.peek() === 40) {
      for (this._openDirectiveCount++, this._beginToken(41), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(b); !Bi(this._cursor.peek()) && this._cursor.peek() !== 41; ) this._consumeAttribute();
      if (this._attemptCharCodeUntilFn(b), this._openDirectiveCount--, this._cursor.peek() !== 41) {
        if (this._cursor.peek() === 62 || this._cursor.peek() === 47) return;
        throw this._createError(Se(this._cursor.peek()), this._cursor.getSpan(e));
      }
      this._beginToken(42), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(b);
    }
  }
  _getProcessedChars(e, t) {
    return this._processCarriageReturns(t.getChars(e));
  }
  _isTextEnd() {
    return !!(this._isTagStart() || this._cursor.peek() === 0 || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === 125 && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._isLetStart() || this._cursor.peek() === 125));
  }
  _isTagStart() {
    if (this._cursor.peek() === 60) {
      let e = this._cursor.clone();
      e.advance();
      let t = e.peek();
      if (97 <= t && t <= 122 || 65 <= t && t <= 90 || t === 47 || t === 33 || t === 63) return true;
    }
    return false;
  }
  _readUntil(e) {
    let t = this._cursor.clone();
    return this._attemptUntilChar(e), this._cursor.getChars(t);
  }
  _isInExpansion() {
    return this._isInExpansionCase() || this._isInExpansionForm();
  }
  _isInExpansionCase() {
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 23;
  }
  _isInExpansionForm() {
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 21;
  }
  isExpansionFormStart() {
    if (this._cursor.peek() !== 123) return false;
    let e = this._cursor.clone(), t = this._attemptStr(st.start);
    return this._cursor = e, !t;
  }
  _handleFullNameStackForTagOpen(e, t) {
    let r = fe(e, t);
    (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === r) && this._fullNameStack.push(r);
  }
  _handleFullNameStackForTagClose(e, t) {
    let r = fe(e, t);
    this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === r && this._fullNameStack.pop();
  }
};
function b(e) {
  return !it(e) || e === 0;
}
function ve(e) {
  return it(e) || e === 62 || e === 60 || e === 47 || e === 39 || e === 34 || e === 61 || e === 0;
}
function lo(e) {
  return (e < 97 || 122 < e) && (e < 65 || 90 < e) && (e < 48 || e > 57);
}
function co(e) {
  return e === 59 || e === 0 || !Di(e);
}
function uo(e) {
  return e === 59 || e === 0 || !(Re(e) || Oe(e));
}
function po(e) {
  return e !== 125;
}
function ho(e, t) {
  return Oi(e) === Oi(t);
}
function Oi(e) {
  return e >= 97 && e <= 122 ? e - 97 + 65 : e;
}
function mo(e) {
  return Re(e) || Oe(e) || e === 95;
}
function Ri(e) {
  return e !== 59 && b(e);
}
function Rt(e) {
  return e === 95 || e >= 65 && e <= 90;
}
function Mi(e) {
  return Re(e) || Oe(e) || e === 95;
}
function Bi(e) {
  return e === 47 || e === 62 || e === 60 || e === 0;
}
function fo(e) {
  let t = [], r;
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    r && r.type === 5 && i.type === 5 || r && r.type === 17 && i.type === 17 ? (r.parts[0] += i.parts[0], r.sourceSpan.end = i.sourceSpan.end) : (r = i, t.push(r));
  }
  return t;
}
var Fi = class _r {
  state;
  file;
  input;
  end;
  constructor(t, r) {
    if (t instanceof _r) {
      this.file = t.file, this.input = t.input, this.end = t.end;
      let n = t.state;
      this.state = { peek: n.peek, offset: n.offset, line: n.line, column: n.column };
    } else {
      if (!r) throw new Error("Programming error: the range argument must be provided with a file argument.");
      this.file = t, this.input = t.content, this.end = r.endPos, this.state = { peek: -1, offset: r.startPos, line: r.startLine, column: r.startCol };
    }
  }
  clone() {
    return new _r(this);
  }
  peek() {
    return this.state.peek;
  }
  charsLeft() {
    return this.end - this.state.offset;
  }
  diff(t) {
    return this.state.offset - t.state.offset;
  }
  advance() {
    this.advanceState(this.state);
  }
  init() {
    this.updatePeek(this.state);
  }
  getSpan(t, r) {
    t = t || this;
    let n = t;
    if (r) for (; this.diff(t) > 0 && r.indexOf(t.peek()) !== -1; ) n === t && (t = t.clone()), t.advance();
    let i = this.locationFromCursor(t), s = this.locationFromCursor(this), a = n !== t ? this.locationFromCursor(n) : i;
    return new p(i, s, a);
  }
  getChars(t) {
    return this.input.substring(t.state.offset, this.state.offset);
  }
  charAt(t) {
    return this.input.charCodeAt(t);
  }
  advanceState(t) {
    if (t.offset >= this.end) throw this.state = t, new vr('Unexpected character "EOF"', this);
    let r = this.charAt(t.offset);
    r === 10 ? (t.line++, t.column = 0) : Me(r) || t.column++, t.offset++, this.updatePeek(t);
  }
  updatePeek(t) {
    t.peek = t.offset >= this.end ? 0 : this.charAt(t.offset);
  }
  locationFromCursor(t) {
    return new Ie(t.file, t.state.offset, t.state.line, t.state.column);
  }
};
var go = class Sr extends Fi {
  internalState;
  constructor(t, r) {
    t instanceof Sr ? (super(t), this.internalState = { ...t.internalState }) : (super(t, r), this.internalState = this.state);
  }
  advance() {
    this.state = this.internalState, super.advance(), this.processEscapeSequence();
  }
  init() {
    super.init(), this.processEscapeSequence();
  }
  clone() {
    return new Sr(this);
  }
  getChars(t) {
    let r = t.clone(), n = "";
    for (; r.internalState.offset < this.internalState.offset; ) n += String.fromCodePoint(r.peek()), r.advance();
    return n;
  }
  processEscapeSequence() {
    let t = () => this.internalState.peek;
    if (t() === 92) if (this.internalState = { ...this.state }, this.advanceState(this.internalState), t() === 110) this.state.peek = 10;
    else if (t() === 114) this.state.peek = 13;
    else if (t() === 118) this.state.peek = 11;
    else if (t() === 116) this.state.peek = 9;
    else if (t() === 98) this.state.peek = 8;
    else if (t() === 102) this.state.peek = 12;
    else if (t() === 117) if (this.advanceState(this.internalState), t() === 123) {
      this.advanceState(this.internalState);
      let r = this.clone(), n = 0;
      for (; t() !== 125; ) this.advanceState(this.internalState), n++;
      this.state.peek = this.decodeHexDigits(r, n);
    } else {
      let r = this.clone();
      this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 4);
    }
    else if (t() === 120) {
      this.advanceState(this.internalState);
      let r = this.clone();
      this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r, 2);
    } else if (gr(t())) {
      let r = "", n = 0, i = this.clone();
      for (; gr(t()) && n < 3; ) i = this.clone(), r += String.fromCodePoint(t()), this.advanceState(this.internalState), n++;
      this.state.peek = parseInt(r, 8), this.internalState = i.internalState;
    } else Me(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
  }
  decodeHexDigits(t, r) {
    let n = this.input.slice(t.internalState.offset, t.internalState.offset + r), i = parseInt(n, 16);
    if (isNaN(i)) throw t.state = t.internalState, new vr("Invalid hexadecimal escape sequence", t);
    return i;
  }
};
var vr = class extends Error {
  msg;
  cursor;
  constructor(e, t) {
    super(e), this.msg = e, this.cursor = t, Object.setPrototypeOf(this, new.target.prototype);
  }
};
var L = class Ui extends re {
  elementName;
  static create(t, r, n) {
    return new Ui(t, r, n);
  }
  constructor(t, r, n) {
    super(r, n), this.elementName = t;
  }
};
var _o = class {
  rootNodes;
  errors;
  constructor(e, t) {
    this.rootNodes = e, this.errors = t;
  }
};
var Wi = class {
  getTagDefinition;
  constructor(e) {
    this.getTagDefinition = e;
  }
  parse(e, t, r, n = false, i) {
    let s = (h3) => (f, ...g) => h3(f.toLowerCase(), ...g), a = n ? this.getTagDefinition : s(this.getTagDefinition), o = (h3) => a(h3).getContentType(), l = n ? i : s(i), c = qi(e, t, i ? (h3, f, g, v2) => {
      let z2 = l(h3, f, g, v2);
      return z2 !== void 0 ? z2 : o(h3);
    } : o, r), u = r && r.canSelfClose || false, d = r && r.allowHtmComponentClosingTags || false, S2 = new So(c.tokens, a, u, d, n);
    return S2.build(), new _o(S2.rootNodes, [...c.errors, ...S2.errors]);
  }
};
var So = class Gi {
  tokens;
  tagDefinitionResolver;
  canSelfClose;
  allowHtmComponentClosingTags;
  isTagNameCaseSensitive;
  _index = -1;
  _peek;
  _containerStack = [];
  rootNodes = [];
  errors = [];
  constructor(t, r, n, i, s) {
    this.tokens = t, this.tagDefinitionResolver = r, this.canSelfClose = n, this.allowHtmComponentClosingTags = i, this.isTagNameCaseSensitive = s, this._advance();
  }
  build() {
    for (; this._peek.type !== 44; ) this._peek.type === 0 || this._peek.type === 4 ? this._consumeElementStartTag(this._advance()) : this._peek.type === 3 ? (this._closeVoidElement(), this._consumeElementEndTag(this._advance())) : this._peek.type === 13 ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === 10 ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === 5 || this._peek.type === 7 || this._peek.type === 6 ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === 21 ? this._consumeExpansion(this._advance()) : this._peek.type === 26 ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === 28 ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === 30 ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === 31 ? (this._closeVoidElement(), this._consumeLet(this._advance())) : this._peek.type === 19 ? this._consumeDocType(this._advance()) : this._peek.type === 34 ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._peek.type === 35 || this._peek.type === 39 ? this._consumeComponentStartTag(this._advance()) : this._peek.type === 38 ? this._consumeComponentEndTag(this._advance()) : this._advance();
    for (let t of this._containerStack) t instanceof ge && this.errors.push(L.create(t.name, t.sourceSpan, `Unclosed block "${t.name}"`));
  }
  _advance() {
    let t = this._peek;
    return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], t;
  }
  _advanceIf(t) {
    return this._peek.type === t ? this._advance() : null;
  }
  _consumeCdata(t) {
    let r = this._advance(), n = this._getText(r), i = this._advanceIf(14);
    this._addToParent(new ki(n, new p(t.sourceSpan.start, (i || r).sourceSpan.end), [r]));
  }
  _consumeComment(t) {
    let r = this._advanceIf(7), n = this._advanceIf(11), i = r != null ? r.parts[0].trim() : null, s = n == null ? t.sourceSpan : new p(t.sourceSpan.start, n.sourceSpan.end, t.sourceSpan.fullStart);
    this._addToParent(new Li(i, s));
  }
  _consumeDocType(t) {
    let r = this._advanceIf(7), n = this._advanceIf(20), i = r != null ? r.parts[0].trim() : null, s = new p(t.sourceSpan.start, (n || r || t).sourceSpan.end);
    this._addToParent(new Ni(i, s));
  }
  _consumeExpansion(t) {
    let r = this._advance(), n = this._advance(), i = [];
    for (; this._peek.type === 22; ) {
      let a = this._parseExpansionCase();
      if (!a) return;
      i.push(a);
    }
    if (this._peek.type !== 25) {
      this.errors.push(L.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
      return;
    }
    let s = new p(t.sourceSpan.start, this._peek.sourceSpan.end, t.sourceSpan.fullStart);
    this._addToParent(new Ti(r.parts[0], n.parts[0], i, s, r.sourceSpan)), this._advance();
  }
  _parseExpansionCase() {
    let t = this._advance();
    if (this._peek.type !== 23) return this.errors.push(L.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
    let r = this._advance(), n = this._collectExpansionExpTokens(r);
    if (!n) return null;
    let i = this._advance();
    n.push({ type: 44, parts: [], sourceSpan: i.sourceSpan });
    let s = new Gi(n, this.tagDefinitionResolver, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
    if (s.build(), s.errors.length > 0) return this.errors = this.errors.concat(s.errors), null;
    let a = new p(t.sourceSpan.start, i.sourceSpan.end, t.sourceSpan.fullStart), o = new p(r.sourceSpan.start, i.sourceSpan.end, r.sourceSpan.fullStart);
    return new yi(t.parts[0], s.rootNodes, a, t.sourceSpan, o);
  }
  _collectExpansionExpTokens(t) {
    let r = [], n = [23];
    for (; ; ) {
      if ((this._peek.type === 21 || this._peek.type === 23) && n.push(this._peek.type), this._peek.type === 24) if (Hi(n, 23)) {
        if (n.pop(), n.length === 0) return r;
      } else return this.errors.push(L.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === 25) if (Hi(n, 21)) n.pop();
      else return this.errors.push(L.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === 44) return this.errors.push(L.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      r.push(this._advance());
    }
  }
  _getText(t) {
    let r = t.parts[0];
    if (r.length > 0 && r[0] == `
`) {
      var n;
      let i = this._getClosestElementLikeParent();
      i != null && i.children.length == 0 && (!((n = this._getTagDefinition(i)) === null || n === void 0) && n.ignoreFirstLf) && (r = r.substring(1));
    }
    return r;
  }
  _consumeText(t) {
    let r = [t], n = t.sourceSpan, i = t.parts[0];
    if (i.length > 0 && i[0] === `
`) {
      var s;
      let a = this._getContainer();
      a != null && a.children.length === 0 && (!((s = this._getTagDefinition(a)) === null || s === void 0) && s.ignoreFirstLf) && (i = i.substring(1), r[0] = { type: t.type, sourceSpan: t.sourceSpan, parts: [i] });
    }
    for (; this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9; ) t = this._advance(), r.push(t), t.type === 8 ? i += t.parts.join("").replace(/&([^;]+);/g, Vi) : t.type === 9 ? i += t.parts[0] : i += t.parts.join("");
    if (i.length > 0) {
      let a = t.sourceSpan;
      this._addToParent(new wi(i, new p(n.start, a.end, n.fullStart, n.details), r));
    }
  }
  _closeVoidElement() {
    var t;
    let r = this._getContainer();
    r !== null && (!((t = this._getTagDefinition(r)) === null || t === void 0) && t.isVoid) && this._containerStack.pop();
  }
  _consumeElementStartTag(t) {
    var r;
    let n = [], i = [], s = [];
    this._consumeAttributesAndDirectives(n, i, s);
    let a = this._getElementFullName(t, this._getClosestElementLikeParent()), o = this._getTagDefinition(a), l = false;
    if (this._peek.type === 2) {
      this._advance(), l = true;
      let v2 = this._getTagDefinition(a);
      this.canSelfClose || v2?.canSelfClose || Pe(a) !== null || v2?.isVoid || this.errors.push(L.create(a, t.sourceSpan, `Only void, custom and foreign elements can be self closed "${t.parts[1]}"`));
    } else this._peek.type === 1 && (this._advance(), l = false);
    let c = this._peek.sourceSpan.fullStart, u = new p(t.sourceSpan.start, c, t.sourceSpan.fullStart), d = new p(t.sourceSpan.start, c, t.sourceSpan.fullStart), S2 = new p(t.sourceSpan.start.moveBy(1), t.sourceSpan.end), h3 = new ne(a, n, i, [], l, u, d, void 0, S2, o?.isVoid ?? false, void 0, s), f = this._getContainer(), g = f !== null && !!(!((r = this._getTagDefinition(f)) === null || r === void 0) && r.isClosedByChild(h3.name));
    this._pushContainer(h3, g), l ? this._popContainer(a, ne, u) : t.type === 4 && (this._popContainer(a, ne, null), this.errors.push(L.create(a, u, `Opening tag "${a}" not terminated.`)));
  }
  _consumeComponentStartTag(t) {
    var r;
    let n = t.parts[0], i = [], s = [], a = [];
    this._consumeAttributesAndDirectives(i, s, a);
    let o = this._getClosestElementLikeParent(), l = this._getComponentTagName(t, o), c = this._getComponentFullName(t, o), u = this._peek.type === 37;
    this._advance();
    let d = this._peek.sourceSpan.fullStart, S2 = new p(t.sourceSpan.start, d, t.sourceSpan.fullStart), h3 = new p(t.sourceSpan.start, d, t.sourceSpan.fullStart), f = new G(n, l, c, i, s, [], u, S2, h3, void 0, void 0, a), g = this._getContainer(), v2 = g !== null && f.tagName !== null && !!(!((r = this._getTagDefinition(g)) === null || r === void 0) && r.isClosedByChild(f.tagName));
    this._pushContainer(f, v2), u ? this._popContainer(c, G, S2) : t.type === 39 && (this._popContainer(c, G, null), this.errors.push(L.create(c, S2, `Opening tag "${c}" not terminated.`)));
  }
  _consumeAttributesAndDirectives(t, r, n) {
    for (; this._peek.type === 15 || this._peek.type === 40 || this._peek.type === 12; ) if (this._peek.type === 40) r.push(this._consumeDirective(this._peek));
    else if (this._peek.type === 15) t.push(this._consumeAttr(this._advance()));
    else {
      let i = this._advance();
      n.push(new Ai(i.parts[0], i.parts[1], i.sourceSpan));
    }
  }
  _consumeComponentEndTag(t) {
    let r = this._getComponentFullName(t, this._getClosestElementLikeParent());
    if (!this._popContainer(r, G, t.sourceSpan)) {
      let n = this._containerStack[this._containerStack.length - 1], i;
      n instanceof G && n.componentName === t.parts[0] ? i = `, did you mean "${n.fullName}"?` : i = ". It may happen when the tag has already been closed by another tag.";
      let s = `Unexpected closing tag "${r}"${i}`;
      this.errors.push(L.create(r, t.sourceSpan, s));
    }
  }
  _getTagDefinition(t) {
    return typeof t == "string" ? this.tagDefinitionResolver(t) : t instanceof ne ? this.tagDefinitionResolver(t.name) : t instanceof G && t.tagName !== null ? this.tagDefinitionResolver(t.tagName) : null;
  }
  _pushContainer(t, r) {
    r && this._containerStack.pop(), this._addToParent(t), this._containerStack.push(t);
  }
  _consumeElementEndTag(t) {
    var r;
    let n = this.allowHtmComponentClosingTags && t.parts.length === 0 ? null : this._getElementFullName(t, this._getClosestElementLikeParent());
    if (n && (!((r = this._getTagDefinition(n)) === null || r === void 0) && r.isVoid)) this.errors.push(L.create(n, t.sourceSpan, `Void elements do not have end tags "${t.parts[1]}"`));
    else if (!this._popContainer(n, ne, t.sourceSpan)) {
      let i = `Unexpected closing tag "${n}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
      this.errors.push(L.create(n, t.sourceSpan, i));
    }
  }
  _popContainer(t, r, n) {
    let i = false;
    for (let a = this._containerStack.length - 1; a >= 0; a--) {
      var s;
      let o = this._containerStack[a], l = o instanceof G ? o.fullName : o.name;
      if (Pe(l) ? l === t : (l === t || t === null) && o instanceof r) return o.endSourceSpan = n, o.sourceSpan.end = n !== null ? n.end : o.sourceSpan.end, this._containerStack.splice(a, this._containerStack.length - a), !i;
      (o instanceof ge || !(!((s = this._getTagDefinition(o)) === null || s === void 0) && s.closedByParent)) && (i = true);
    }
    return false;
  }
  _consumeAttr(t) {
    let r = fe(t.parts[0], t.parts[1]), n = t.sourceSpan.end, i;
    this._peek.type === 16 && (i = this._advance());
    let s = "", a = [], o, l;
    if (this._peek.type === 17) for (o = this._peek.sourceSpan, l = this._peek.sourceSpan.end; this._peek.type === 17 || this._peek.type === 18 || this._peek.type === 9; ) {
      let u = this._advance();
      a.push(u), u.type === 18 ? s += u.parts.join("").replace(/&([^;]+);/g, Vi) : u.type === 9 ? s += u.parts[0] : s += u.parts.join(""), l = n = u.sourceSpan.end;
    }
    this._peek.type === 16 && (l = n = this._advance().sourceSpan.end);
    let c = o && l && new p(i?.sourceSpan.start ?? o.start, l, i?.sourceSpan.fullStart ?? o.fullStart);
    return new xi(r, s, new p(t.sourceSpan.start, n, t.sourceSpan.fullStart), t.sourceSpan, c, a.length > 0 ? a : void 0, void 0);
  }
  _consumeDirective(t) {
    let r = [], n = t.sourceSpan.end, i = null;
    if (this._advance(), this._peek.type === 41) {
      for (n = this._peek.sourceSpan.end, this._advance(); this._peek.type === 15; ) r.push(this._consumeAttr(this._advance()));
      this._peek.type === 42 ? (i = this._peek.sourceSpan, this._advance()) : this.errors.push(L.create(null, t.sourceSpan, "Unterminated directive definition"));
    }
    let s = new p(t.sourceSpan.start, n, t.sourceSpan.fullStart), a = new p(s.start, i === null ? t.sourceSpan.end : i.end, s.fullStart);
    return new Pi(t.parts[0], r, a, s, i);
  }
  _consumeBlockOpen(t) {
    let r = [];
    for (; this._peek.type === 29; ) {
      let o = this._advance();
      r.push(new hr(o.parts[0], o.sourceSpan));
    }
    this._peek.type === 27 && this._advance();
    let n = this._peek.sourceSpan.fullStart, i = new p(t.sourceSpan.start, n, t.sourceSpan.fullStart), s = new p(t.sourceSpan.start, n, t.sourceSpan.fullStart), a = new ge(t.parts[0], r, [], i, t.sourceSpan, s);
    this._pushContainer(a, false);
  }
  _consumeBlockClose(t) {
    let r = this._containerStack.length, n = this._containerStack[r - 1];
    if (!this._popContainer(null, ge, t.sourceSpan)) {
      if (this._containerStack.length < r) {
        let i = n instanceof G ? n.fullName : n.name;
        this.errors.push(L.create(null, t.sourceSpan, `Unexpected closing block. The block may have been closed earlier. Did you forget to close the <${i}> element? If you meant to write the \`}\` character, you should use the "&#125;" HTML entity instead.`));
        return;
      }
      this.errors.push(L.create(null, t.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the `}` character, you should use the "&#125;" HTML entity instead.'));
    }
  }
  _consumeIncompleteBlock(t) {
    let r = [];
    for (; this._peek.type === 29; ) {
      let o = this._advance();
      r.push(new hr(o.parts[0], o.sourceSpan));
    }
    let n = this._peek.sourceSpan.fullStart, i = new p(t.sourceSpan.start, n, t.sourceSpan.fullStart), s = new p(t.sourceSpan.start, n, t.sourceSpan.fullStart), a = new ge(t.parts[0], r, [], i, t.sourceSpan, s);
    this._pushContainer(a, false), this._popContainer(null, ge, null), this.errors.push(L.create(t.parts[0], i, `Incomplete block "${t.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
  }
  _consumeLet(t) {
    let r = t.parts[0], n, i;
    if (this._peek.type !== 32) {
      this.errors.push(L.create(t.parts[0], t.sourceSpan, `Invalid @let declaration "${r}". Declaration must have a value.`));
      return;
    } else n = this._advance();
    if (this._peek.type !== 33) {
      this.errors.push(L.create(t.parts[0], t.sourceSpan, `Unterminated @let declaration "${r}". Declaration must be terminated with a semicolon.`));
      return;
    } else i = this._advance();
    let s = i.sourceSpan.end, a = new p(t.sourceSpan.start, s, t.sourceSpan.fullStart), o = t.sourceSpan.toString().lastIndexOf(r), l = t.sourceSpan.start.moveBy(o), c = new p(l, t.sourceSpan.end), u = new mr(r, n.parts[0], a, c, n.sourceSpan);
    this._addToParent(u);
  }
  _consumeIncompleteLet(t) {
    let r = t.parts[0] ?? "", n = r ? ` "${r}"` : "";
    if (r.length > 0) {
      let i = t.sourceSpan.toString().lastIndexOf(r), s = t.sourceSpan.start.moveBy(i), a = new p(s, t.sourceSpan.end), o = new p(t.sourceSpan.start, t.sourceSpan.start.moveBy(0)), l = new mr(r, "", t.sourceSpan, a, o);
      this._addToParent(l);
    }
    this.errors.push(L.create(t.parts[0], t.sourceSpan, `Incomplete @let declaration${n}. @let declarations must be written as \`@let <name> = <value>;\``));
  }
  _getContainer() {
    return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
  }
  _getClosestElementLikeParent() {
    for (let t = this._containerStack.length - 1; t > -1; t--) {
      let r = this._containerStack[t];
      if (r instanceof ne || r instanceof G) return r;
    }
    return null;
  }
  _addToParent(t) {
    let r = this._getContainer();
    r === null ? this.rootNodes.push(t) : r.children.push(t);
  }
  _getElementFullName(t, r) {
    let n = this._getPrefix(t, r);
    return fe(n, t.parts[1]);
  }
  _getComponentFullName(t, r) {
    let n = t.parts[0], i = this._getComponentTagName(t, r);
    return i === null ? n : i.startsWith(":") ? n + i : `${n}:${i}`;
  }
  _getComponentTagName(t, r) {
    let n = this._getPrefix(t, r), i = t.parts[2];
    return !n && !i ? null : !n && i ? i : fe(n, i || "ng-component");
  }
  _getPrefix(t, r) {
    var n;
    let i, s;
    if (t.type === 35 || t.type === 39 || t.type === 38 ? (i = t.parts[1], s = t.parts[2]) : (i = t.parts[0], s = t.parts[1]), i = i || ((n = this._getTagDefinition(s)) === null || n === void 0 ? void 0 : n.implicitNamespacePrefix) || "", !i && r) {
      let a = r instanceof ne ? r.name : r.tagName;
      if (a !== null) {
        let o = ee(a)[1], l = this._getTagDefinition(o);
        l !== null && !l.preventNamespaceInheritance && (i = Pe(a));
      }
    }
    return i;
  }
};
function Hi(e, t) {
  return e.length > 0 && e[e.length - 1] === t;
}
function Vi(e, t) {
  return _e[t] !== void 0 ? _e[t] || e : /^#x[a-f0-9]+$/i.test(t) ? String.fromCodePoint(parseInt(t.slice(2), 16)) : /^#\d+$/.test(t) ? String.fromCodePoint(parseInt(t.slice(1), 10)) : e;
}
var zi = class extends Wi {
  constructor() {
    super(De);
  }
  parse(e, t, r, n = false, i) {
    return super.parse(e, t, r, n, i);
  }
};
var Cr;
function Mt(e, t = {}) {
  let { canSelfClose: r = false, allowHtmComponentClosingTags: n = false, allowStartTagComments: i = false, isTagNameCaseSensitive: s = false, getTagContentType: a, tokenizeAngularBlocks: o = false, tokenizeAngularLetDeclaration: l = false, enableAngularSelectorlessSyntax: c = false } = t;
  return Cr ?? (Cr = new zi()), Cr.parse(e, "angular-html-parser", { tokenizeExpansionForms: o, canSelfClose: r, allowHtmComponentClosingTags: n, allowStartTagComments: i, tokenizeBlocks: o, tokenizeLet: l, selectorlessEnabled: c }, s, a);
}
var vo = [wo, Eo, bo, ko, yo, Ao, Po, Lo, No, Do, To];
function Co(e, t) {
  for (let r of vo) r(e, t);
  return e;
}
function Eo(e) {
  e.walk((t) => {
    if (t.kind === "element" && t.tagDefinition.ignoreFirstLf && t.children.length > 0 && t.children[0].kind === "text" && t.children[0].value[0] === `
`) {
      let r = t.children[0];
      r.value.length === 1 ? t.removeChild(r) : (r.value = r.value.slice(1), r.sourceSpan = new p(r.sourceSpan.start.moveBy(1), r.sourceSpan.end));
    }
  });
}
function bo(e) {
  let t = (r) => r.kind === "element" && r.prev?.kind === "ieConditionalStartComment" && r.prev.sourceSpan.end.offset === r.startSourceSpan.start.offset && r.firstChild?.kind === "ieConditionalEndComment" && r.firstChild.sourceSpan.start.offset === r.startSourceSpan.end.offset;
  e.walk((r) => {
    if (r.children) for (let n = 0; n < r.children.length; n++) {
      let i = r.children[n];
      if (!t(i)) continue;
      let s = i.prev, a = i.firstChild;
      r.removeChild(s), n--;
      let o = new p(s.sourceSpan.start, a.sourceSpan.end), l = new p(o.start, i.sourceSpan.end);
      i.condition = s.condition, i.sourceSpan = l, i.startSourceSpan = o, i.removeChild(a);
    }
  });
}
function wo(e, t) {
  t.parser !== "angular" || !t.originalText.includes("ngNonBindable") || e.walk((r) => {
    r.kind === "element" && O(r.attrMap, "ngNonBindable") && br(r, t);
  });
}
function br(e, t) {
  let { children: r } = e;
  if (r) for (let n = 0; n < r.length; n++) {
    let i = r[n];
    if (i.kind === "angularControlFlowBlock") {
      br(i, t);
      let s = [], { start: a } = i.sourceSpan;
      for (let o of i.children) {
        if (a.offset < o.sourceSpan.start.offset) {
          let l = new p(a, o.sourceSpan.start);
          s.push(Er(l, t));
        }
        s.push(o), a = o.sourceSpan.end;
      }
      if (a.offset < i.sourceSpan.end.offset) {
        let o = new p(a, i.sourceSpan.end);
        s.push(Er(o, t));
      }
      for (let o of s) e.insertChildBefore(i, o);
      e.removeChild(i), n += s.length - 1;
      continue;
    }
    if (i.kind === "angularLetDeclaration") {
      e.replaceChild(i, Er(i.sourceSpan, t));
      continue;
    }
    br(i, t);
  }
}
function Er(e, t) {
  return { kind: "text", value: t.originalText.slice(e.start.offset, e.end.offset), sourceSpan: e };
}
function ko(e) {
  e.walk((t) => {
    if (t.children) for (let r = 0; r < t.children.length; r++) {
      let n = t.children[r], i = n.prev;
      n.kind !== "text" || i?.kind !== "text" || (i.value += n.value, i.sourceSpan = new p(i.sourceSpan.start, n.sourceSpan.end), t.removeChild(n), r--);
    }
  });
}
function To(e) {
  let t = (r) => r.kind === "element" && r.attrs.length === 0 && !J(r.startTagComments) && r.children.length === 1 && r.firstChild.kind === "text" && !y.hasWhitespaceCharacter(r.children[0].value) && !r.firstChild.hasLeadingSpaces && !r.firstChild.hasTrailingSpaces && r.isLeadingSpaceSensitive && !r.hasLeadingSpaces && r.isTrailingSpaceSensitive && !r.hasTrailingSpaces && r.prev?.kind === "text" && r.next?.kind === "text";
  e.walk((r) => {
    if (r.children) for (let n = 0; n < r.children.length; n++) {
      let i = r.children[n];
      if (!t(i)) continue;
      let s = i.prev, a = i.next;
      s.value += `<${i.rawName}>` + i.firstChild.value + `</${i.rawName}>` + a.value, s.sourceSpan = new p(s.sourceSpan.start, a.sourceSpan.end), s.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive, s.hasTrailingSpaces = a.hasTrailingSpaces, r.removeChild(i), n--, r.removeChild(a);
    }
  });
}
function yo(e, t) {
  t.parser !== "html" && e.walk((r) => {
    if (nn(r, t)) for (let n of r.children) {
      if (n.kind !== "text") continue;
      let i = n.sourceSpan.start, s, a = xo(n);
      for (let o = 0; o < a.length; o++, i = s) {
        let l = a[o];
        if (o % 2 === 0) {
          s = i.moveBy(l.length), l.length > 0 && r.insertChildBefore(n, { kind: "text", value: l, sourceSpan: new p(i, s) });
          continue;
        }
        s = i.moveBy(l.length + 4), r.insertChildBefore(n, { kind: "interpolation", sourceSpan: new p(i, s), children: l.length === 0 ? [] : [{ kind: "text", value: l, sourceSpan: new p(i.moveBy(2), s.moveBy(-2)) }] });
      }
      r.removeChild(n);
    }
  });
}
function xo(e) {
  let t = e.tokens?.filter((s) => s.type === dr.INTERPOLATION && s.parts.length === 3);
  if (!t?.some((s) => s.parts[1].includes("}}"))) return e.value.split(/\{\{(.+?)\}\}/s);
  let r = [], { content: n } = e.sourceSpan.start.file, i = e.sourceSpan.start.offset;
  for (let { parts: s, sourceSpan: a } of t) r.push(n.slice(i, a.start.offset), n.slice(a.start.offset + s[0].length, a.end.offset - s[2].length)), i = a.end.offset;
  return r.push(n.slice(i, e.sourceSpan.end.offset)), r;
}
function Ao(e, t) {
  e.walk((r) => {
    let n = r.$children;
    if (!n) return;
    if (n.length === 0 || n.length === 1 && n[0].kind === "text" && y.trim(n[0].value).length === 0) {
      r.hasDanglingSpaces = n.length > 0, r.$children = [];
      return;
    }
    let i = sn(r, t), s = Jt(r);
    if (!i) for (let a = 0; a < n.length; a++) {
      let o = n[a];
      if (o.kind !== "text") continue;
      let { leadingWhitespace: l, text: c, trailingWhitespace: u } = rn(o.value), d = o.prev, S2 = o.next;
      c ? (o.value = c, o.sourceSpan = new p(o.sourceSpan.start.moveBy(l.length), o.sourceSpan.end.moveBy(-u.length)), l && (d && (d.hasTrailingSpaces = true), o.hasLeadingSpaces = true), u && (o.hasTrailingSpaces = true, S2 && (S2.hasLeadingSpaces = true))) : (r.removeChild(o), a--, (l || u) && (d && (d.hasTrailingSpaces = true), S2 && (S2.hasLeadingSpaces = true)));
    }
    r.isWhitespaceSensitive = i, r.isIndentationSensitive = s;
  });
}
function Lo(e) {
  e.walk((t) => {
    t.isSelfClosing = !t.children || t.kind === "element" && (t.tagDefinition.isVoid || t.endSourceSpan && t.startSourceSpan.start === t.endSourceSpan.start && t.startSourceSpan.end === t.endSourceSpan.end);
  });
}
function No(e, t) {
  e.walk((r) => {
    r.kind === "element" && (r.hasHtmComponentClosingTag = r.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(t.originalText.slice(r.endSourceSpan.start.offset, r.endSourceSpan.end.offset)));
  });
}
function Po(e, t) {
  e.walk((r) => {
    r.cssDisplay = dn(r, t);
  });
}
function Do(e, t) {
  e.walk((r) => {
    let { children: n } = r;
    if (n) {
      if (n.length === 0) {
        r.isDanglingSpaceSensitive = ln(r, t);
        return;
      }
      for (let i of n) i.isLeadingSpaceSensitive = an(i, t), i.isTrailingSpaceSensitive = on(i, t);
      for (let i = 0; i < n.length; i++) {
        let s = n[i];
        s.isLeadingSpaceSensitive = (i === 0 || s.prev.isTrailingSpaceSensitive) && s.isLeadingSpaceSensitive, s.isTrailingSpaceSensitive = (i === n.length - 1 || s.next.isLeadingSpaceSensitive) && s.isTrailingSpaceSensitive;
      }
    }
  });
}
var $i = Co;
function Io(e, t, r) {
  let { node: n } = e;
  switch (n.kind) {
    case "root":
      return t.__onHtmlRoot && t.__onHtmlRoot(n), [C(Ne(e, t, r)), E];
    case "element":
    case "ieConditionalComment":
      return mi(e, t, r);
    case "angularControlFlowBlock":
      return ii(e, t, r);
    case "angularControlFlowBlockParameters":
      return ai(e, t, r);
    case "angularControlFlowBlockParameter":
      return y.trim(n.expression);
    case "angularLetDeclaration":
      return C(["@let ", C([n.id, " =", C(N([_, r("init")]))]), ";"]);
    case "angularLetDeclarationInitializer":
      return n.value;
    case "angularIcuExpression":
      return oi(e, t, r);
    case "angularIcuCase":
      return li(e, t, r);
    case "ieConditionalStartComment":
    case "ieConditionalEndComment":
      return [me(n), ue(n)];
    case "interpolation":
      return [me(n, t), ...e.map(r, "children"), ue(n, t)];
    case "text":
      return di(e, t);
    case "docType":
      return [C([me(n, t), " ", w(0, n.value.replace(/^html\b/i, "html"), /\s+/g, " ")]), ue(n, t)];
    case "comment":
      return [H(n, t), A(t.originalText.slice(W(n), Z(n))), F(n, t)];
    case "cdata":
      return [H(n, t), "<![CDATA[", A(n.value), "]]>", F(n, t)];
    case "attribute":
      return hi(e, t);
    case "startTagComment":
      return fi(e);
    default:
      throw new Gr(n, "HTML");
  }
}
var Oo = { features: { experimental_frontMatterSupport: { massageAstNode: true, embed: true, print: true } }, preprocess: $i, print: Io, insertPragma: ti, massageAstNode: sr, embed: $n, getVisitorKeys: Kn };
var ji = Oo;
var Yi = [{ name: "Angular", type: "markup", aceMode: "html", extensions: [".component.html"], tmScope: "text.html.basic", aliases: ["xhtml"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["angular"], vscodeLanguageIds: ["html"], filenames: [], linguistLanguageId: 146 }, { name: "HTML", type: "markup", aceMode: "html", extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"], tmScope: "text.html.basic", aliases: ["xhtml"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["html"], vscodeLanguageIds: ["html"], linguistLanguageId: 146 }, { name: "Lightning Web Components", type: "markup", aceMode: "html", extensions: [], tmScope: "text.html.basic", aliases: ["LWC", "lwc"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["lwc"], vscodeLanguageIds: ["html"], filenames: [], linguistLanguageId: 146 }, { name: "MJML", type: "markup", aceMode: "html", extensions: [".mjml"], tmScope: "text.mjml.basic", aliases: ["MJML", "mjml"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["mjml"], filenames: [], vscodeLanguageIds: ["mjml"], linguistLanguageId: 146 }, { name: "Vue", type: "markup", aceMode: "vue", extensions: [".vue"], tmScope: "text.html.vue", codemirrorMode: "vue", codemirrorMimeType: "text/x-vue", parsers: ["vue"], vscodeLanguageIds: ["vue"], linguistLanguageId: 391 }];
var wr = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, objectWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap object literals.", choices: [{ value: "preserve", description: "Keep as multi-line, if there is a newline between the opening brace and first property." }, { value: "collapse", description: "Fit to a single line when possible." }] }, singleQuote: { category: "Common", type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap prose.", choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { category: "Common", type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
var Ki = "HTML";
var Ro = { bracketSameLine: wr.bracketSameLine, htmlWhitespaceSensitivity: { category: Ki, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: wr.singleAttributePerLine, vueIndentScriptAndStyle: { category: Ki, type: "boolean", default: false, description: "Indent script and style tags in Vue files." } };
var Xi = Ro;
var Dr = {};
Rr(Dr, { angular: () => tl, html: () => Jo, lwc: () => nl, mjml: () => el, vue: () => rl });
function Mo(e, t) {
  let r = new SyntaxError(e + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
  return Object.assign(r, t);
}
var Qi = Mo;
var Bo = { canSelfClose: true, normalizeTagName: false, normalizeAttributeName: false, allowHtmComponentClosingTags: false, allowStartTagComments: false, isTagNameCaseSensitive: false, shouldParseFrontMatter: true };
function Bt(e) {
  return { ...Bo, ...e };
}
function kr(e) {
  let { canSelfClose: t, allowHtmComponentClosingTags: r, allowStartTagComments: n, isTagNameCaseSensitive: i, shouldParseAsRawText: s, tokenizeAngularBlocks: a, tokenizeAngularLetDeclaration: o } = e;
  return { canSelfClose: t, allowHtmComponentClosingTags: r, allowStartTagComments: n, isTagNameCaseSensitive: i, getTagContentType: s ? (...l) => s(...l) ? ar.RAW_TEXT : void 0 : void 0, tokenizeAngularBlocks: a, tokenizeAngularLetDeclaration: o };
}
var Ji = /* @__PURE__ */ new Map([["a", /* @__PURE__ */ new Set(["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"])], ["applet", /* @__PURE__ */ new Set(["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"])], ["area", /* @__PURE__ */ new Set(["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"])], ["audio", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "loading", "loop", "muted", "preload", "src"])], ["base", /* @__PURE__ */ new Set(["href", "target"])], ["basefont", /* @__PURE__ */ new Set(["color", "face", "size"])], ["blockquote", /* @__PURE__ */ new Set(["cite"])], ["body", /* @__PURE__ */ new Set(["alink", "background", "bgcolor", "bottommargin", "leftmargin", "link", "rightmargin", "text", "topmargin", "vlink"])], ["br", /* @__PURE__ */ new Set(["clear"])], ["button", /* @__PURE__ */ new Set(["command", "commandfor", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "popovertarget", "popovertargetaction", "type", "value"])], ["canvas", /* @__PURE__ */ new Set(["height", "width"])], ["caption", /* @__PURE__ */ new Set(["align"])], ["col", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "span", "valign", "width"])], ["colgroup", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "span", "valign", "width"])], ["data", /* @__PURE__ */ new Set(["value"])], ["del", /* @__PURE__ */ new Set(["cite", "datetime"])], ["details", /* @__PURE__ */ new Set(["name", "open"])], ["dialog", /* @__PURE__ */ new Set(["closedby", "open"])], ["dir", /* @__PURE__ */ new Set(["compact"])], ["div", /* @__PURE__ */ new Set(["align"])], ["dl", /* @__PURE__ */ new Set(["compact"])], ["embed", /* @__PURE__ */ new Set(["height", "src", "type", "width"])], ["fieldset", /* @__PURE__ */ new Set(["disabled", "form", "name"])], ["font", /* @__PURE__ */ new Set(["color", "face", "size"])], ["form", /* @__PURE__ */ new Set(["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "rel", "target"])], ["frame", /* @__PURE__ */ new Set(["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"])], ["frameset", /* @__PURE__ */ new Set(["cols", "rows"])], ["h1", /* @__PURE__ */ new Set(["align"])], ["h2", /* @__PURE__ */ new Set(["align"])], ["h3", /* @__PURE__ */ new Set(["align"])], ["h4", /* @__PURE__ */ new Set(["align"])], ["h5", /* @__PURE__ */ new Set(["align"])], ["h6", /* @__PURE__ */ new Set(["align"])], ["head", /* @__PURE__ */ new Set(["profile"])], ["hr", /* @__PURE__ */ new Set(["align", "color", "noshade", "size", "width"])], ["html", /* @__PURE__ */ new Set(["manifest", "version", "xmlns"])], ["iframe", /* @__PURE__ */ new Set(["align", "allow", "allowfullscreen", "allowpaymentrequest", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"])], ["img", /* @__PURE__ */ new Set(["align", "alt", "border", "controls", "crossorigin", "decoding", "elementtiming", "fetchpriority", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"])], ["input", /* @__PURE__ */ new Set(["accept", "align", "alpha", "alt", "autocomplete", "checked", "colorspace", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "popovertarget", "popovertargetaction", "readonly", "required", "size", "src", "step", "type", "value", "width"])], ["ins", /* @__PURE__ */ new Set(["cite", "datetime"])], ["isindex", /* @__PURE__ */ new Set(["action", "prompt"])], ["label", /* @__PURE__ */ new Set(["for", "form"])], ["legend", /* @__PURE__ */ new Set(["align"])], ["li", /* @__PURE__ */ new Set(["type", "value"])], ["link", /* @__PURE__ */ new Set(["as", "blocking", "charset", "color", "crossorigin", "disabled", "fetchpriority", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"])], ["map", /* @__PURE__ */ new Set(["name"])], ["menu", /* @__PURE__ */ new Set(["compact"])], ["meta", /* @__PURE__ */ new Set(["charset", "content", "http-equiv", "media", "name", "scheme"])], ["meter", /* @__PURE__ */ new Set(["high", "low", "max", "min", "optimum", "value"])], ["object", /* @__PURE__ */ new Set(["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"])], ["ol", /* @__PURE__ */ new Set(["compact", "reversed", "start", "type"])], ["optgroup", /* @__PURE__ */ new Set(["disabled", "label"])], ["option", /* @__PURE__ */ new Set(["disabled", "label", "selected", "value"])], ["output", /* @__PURE__ */ new Set(["for", "form", "name"])], ["p", /* @__PURE__ */ new Set(["align"])], ["param", /* @__PURE__ */ new Set(["name", "type", "value", "valuetype"])], ["pre", /* @__PURE__ */ new Set(["width", "wrap"])], ["progress", /* @__PURE__ */ new Set(["max", "value"])], ["q", /* @__PURE__ */ new Set(["cite"])], ["script", /* @__PURE__ */ new Set(["async", "blocking", "charset", "crossorigin", "defer", "fetchpriority", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"])], ["select", /* @__PURE__ */ new Set(["autocomplete", "disabled", "form", "multiple", "name", "required", "size"])], ["slot", /* @__PURE__ */ new Set(["name"])], ["source", /* @__PURE__ */ new Set(["height", "media", "sizes", "src", "srcset", "type", "width"])], ["style", /* @__PURE__ */ new Set(["blocking", "media", "type"])], ["table", /* @__PURE__ */ new Set(["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"])], ["tbody", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "valign"])], ["td", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["template", /* @__PURE__ */ new Set(["for", "shadowrootclonable", "shadowrootcustomelementregistry", "shadowrootdelegatesfocus", "shadowrootmode", "shadowrootserializable", "shadowrootslotassignment"])], ["textarea", /* @__PURE__ */ new Set(["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"])], ["tfoot", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "valign"])], ["th", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["thead", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "valign"])], ["time", /* @__PURE__ */ new Set(["datetime"])], ["tr", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "valign"])], ["track", /* @__PURE__ */ new Set(["default", "kind", "label", "src", "srclang"])], ["ul", /* @__PURE__ */ new Set(["compact", "type"])], ["video", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "height", "loading", "loop", "muted", "playsinline", "poster", "preload", "src", "width"])]]);
var Zi = /* @__PURE__ */ new Set(["accesskey", "autocapitalize", "autocorrect", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "exportparts", "headingoffset", "headingreset", "hidden", "id", "inert", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "part", "popover", "slot", "spellcheck", "style", "tabindex", "title", "translate", "writingsuggestions"]);
var Tr = /* @__PURE__ */ new Set(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fencedframe", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "geolocation", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "search", "section", "select", "selectedcontent", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]);
var qt = { attrs: true, children: true, cases: true, expression: true };
var es = /* @__PURE__ */ new Set(["parent"]);
var ie;
var yr;
var xr;
var Be = class Be2 {
  constructor(t = {}) {
    Mr(this, ie);
    Ut(this, "kind");
    Ut(this, "parent");
    for (let r of /* @__PURE__ */ new Set([...es, ...Object.keys(t)])) this.setProperty(r, t[r]);
    if (ae(t)) for (let r of Object.getOwnPropertySymbols(t)) this.setProperty(r, t[r]);
  }
  setProperty(t, r) {
    if (this[t] !== r) {
      if (t in qt && (r = r.map((n) => this.createChild(n))), !es.has(t)) {
        this[t] = r;
        return;
      }
      Object.defineProperty(this, t, { value: r, enumerable: false, configurable: true });
    }
  }
  map(t) {
    let r;
    for (let n in qt) {
      let i = this[n];
      if (i) {
        let s = qo(i, (a) => a.map(t));
        r !== i && (r ?? (r = new Be2({ parent: this.parent })), r.setProperty(n, s));
      }
    }
    if (r) for (let n in this) n in qt || (r[n] = this[n]);
    return t(r || this);
  }
  walk(t) {
    for (let r in qt) {
      let n = this[r];
      if (n) for (let i = 0; i < n.length; i++) n[i].walk(t);
    }
    t(this);
  }
  createChild(t) {
    let r = t instanceof Be2 ? t.clone() : new Be2(t);
    return r.setProperty("parent", this), r;
  }
  insertChildBefore(t, r) {
    let n = this.$children;
    n.splice(n.indexOf(t), 0, this.createChild(r));
  }
  removeChild(t) {
    let r = this.$children;
    r.splice(r.indexOf(t), 1);
  }
  replaceChild(t, r) {
    let n = this.$children;
    n[n.indexOf(t)] = this.createChild(r);
  }
  clone() {
    return new Be2(this);
  }
  get $children() {
    return this[Fe(this, ie, yr)];
  }
  set $children(t) {
    this[Fe(this, ie, yr)] = t;
  }
  get firstChild() {
    return this.$children?.[0];
  }
  get lastChild() {
    return M(1, this.$children, -1);
  }
  get prev() {
    let t = Fe(this, ie, xr);
    return t[t.indexOf(this) - 1];
  }
  get next() {
    let t = Fe(this, ie, xr);
    return t[t.indexOf(this) + 1];
  }
  get rawName() {
    return this.hasExplicitNamespace ? this.fullName : this.name;
  }
  get fullName() {
    return this.namespace ? this.namespace + ":" + this.name : this.name;
  }
  get attrMap() {
    return Object.fromEntries(this.attrs.map((t) => [t.fullName, t.value]));
  }
};
ie = /* @__PURE__ */ new WeakSet(), yr = function() {
  return this.kind === "angularIcuCase" ? "expression" : this.kind === "angularIcuExpression" ? "cases" : "children";
}, xr = function() {
  return this.parent?.$children ?? [];
};
var Ft = Be;
function qo(e, t) {
  let r = e.map(t);
  return r.some((n, i) => n !== e[i]) ? r : e;
}
var Fo = [{ regex: /^(?<openingTagSuffix>\[if(?<condition>[^\]]*)\]>)(?<data>.*?)<!\s*\[endif\]$/s, parse: Ho }, { regex: /^\[if(?<condition>[^\]]*)\]><!$/, parse: Vo }, { regex: /^<!\s*\[endif\]$/, parse: Uo }];
function ts(e, t) {
  if (e.value) for (let { regex: r, parse: n } of Fo) {
    let i = e.value.match(r);
    if (i) return n(e, i, t);
  }
  return null;
}
function Ho(e, t, r) {
  let { openingTagSuffix: n, condition: i, data: s } = t.groups, a = 4 + n.length, o = e.sourceSpan.start.moveBy(a), l = o.moveBy(s.length), [c, u] = (() => {
    try {
      return [true, r(s, o).children];
    } catch {
      return [false, [{ kind: "text", value: s, sourceSpan: new p(o, l) }]];
    }
  })();
  return { kind: "ieConditionalComment", complete: c, children: u, condition: w(0, i.trim(), /\s+/g, " "), sourceSpan: e.sourceSpan, startSourceSpan: new p(e.sourceSpan.start, o), endSourceSpan: new p(l, e.sourceSpan.end) };
}
function Vo(e, t) {
  let { condition: r } = t.groups;
  return { kind: "ieConditionalStartComment", condition: w(0, r.trim(), /\s+/g, " "), sourceSpan: e.sourceSpan };
}
function Uo(e) {
  return { kind: "ieConditionalEndComment", sourceSpan: e.sourceSpan };
}
var Ar = class extends fr {
  visitExpansionCase(t, r) {
    r.parseOptions.name === "angular" && this.visitChildren(r, (n) => {
      n(t.expression);
    });
  }
  visit(t, { parseOptions: r }) {
    $o(t), jo(t, r), Ko(t, r), Yo(t);
  }
};
function is(e, t, r, n) {
  let i = r.name === "angular";
  It(new Ar(), e.children, { parseOptions: r }), t && e.children.unshift(t);
  let s = new Ft(e);
  return s.walk((a) => {
    if (a.kind === "comment") {
      let o = ts(a, n);
      o && a.parent.replaceChild(a, o);
    } else i && a.kind === "element" && a.comments && (a.startTagComments = a.comments, delete a.comments);
    i && (Wo(a), Go(a), zo(a));
  }), s;
}
function Wo(e) {
  if (e.kind === "block") {
    if (e.name = w(0, e.name.toLowerCase(), /\s+/g, " ").trim(), e.kind = "angularControlFlowBlock", !J(e.parameters)) {
      delete e.parameters;
      return;
    }
    for (let t of e.parameters) t.kind = "angularControlFlowBlockParameter";
    e.parameters = { kind: "angularControlFlowBlockParameters", children: e.parameters, sourceSpan: new p(e.parameters[0].sourceSpan.start, M(0, e.parameters, -1).sourceSpan.end) };
  }
}
function Go(e) {
  e.kind === "letDeclaration" && (e.kind = "angularLetDeclaration", e.id = e.name, e.init = { kind: "angularLetDeclarationInitializer", sourceSpan: new p(e.valueSpan.start, e.valueSpan.end), value: e.value }, delete e.name, delete e.value);
}
function zo(e) {
  e.kind === "expansion" && (e.kind = "angularIcuExpression"), e.kind === "expansionCase" && (e.kind = "angularIcuCase");
}
function rs(e, t) {
  let r = e.toLowerCase();
  return t(r) ? r : e;
}
function ns(e) {
  let t = e.name.startsWith(":") ? e.name.slice(1).split(":", 1)[0] : null, r = e.nameSpan.toString(), n = t !== null && r.startsWith(`${t}:`), i = n ? r.slice(t.length + 1) : r;
  e.name = i, e.namespace = t, e.hasExplicitNamespace = n;
}
function $o(e) {
  switch (e.kind) {
    case "element":
      ns(e);
      for (let t of e.attrs) ns(t), t.valueSpan ? (t.value = t.valueSpan.toString(), /["']/.test(t.value[0]) && (t.value = t.value.slice(1, -1))) : t.value = null;
      break;
    case "comment":
      e.value = e.sourceSpan.toString().slice(4, -3);
      break;
    case "text":
      e.value = e.sourceSpan.toString();
      break;
  }
}
function jo(e, t) {
  if (e.kind === "element") {
    let r = De(t.isTagNameCaseSensitive ? e.name : e.name.toLowerCase());
    !e.namespace || e.namespace === r.implicitNamespacePrefix || oe(e) ? e.tagDefinition = r : e.tagDefinition = De("");
  }
}
function Yo(e) {
  e.sourceSpan && e.endSourceSpan && (e.sourceSpan = new p(e.sourceSpan.start, e.endSourceSpan.end));
}
function Ko(e, t) {
  if (e.kind === "element" && (t.normalizeTagName && (!e.namespace || e.namespace === e.tagDefinition.implicitNamespacePrefix || oe(e)) && (e.name = rs(e.name, (r) => Tr.has(r))), t.normalizeAttributeName)) for (let r of e.attrs) r.namespace || (r.name = rs(r.name, (n) => Tr.has(e.name) && (Zi.has(n) || Ji.get(e.name)?.has(n))));
}
function Nr(e, t) {
  let { rootNodes: r, errors: n } = Mt(e, kr(t));
  return n.length > 0 && Lr(n[0]), { parseOptions: t, rootNodes: r };
}
function ss(e, t) {
  let r = kr(t), { rootNodes: n, errors: i } = Mt(e, r);
  if (n.some((c) => c.kind === "docType" && c.value === "html" || c.kind === "element" && c.name.toLowerCase() === "html")) return Nr(e, Ht);
  let a, o = () => a ?? (a = Mt(e, { ...r, getTagContentType: void 0 })), l = (c) => {
    let { offset: u } = c.startSourceSpan.start;
    return o().rootNodes.find((d) => d.kind === "element" && d.startSourceSpan.start.offset === u) ?? c;
  };
  for (let [c, u] of n.entries()) if (u.kind === "element") {
    if (u.isVoid) i = o().errors, n[c] = l(u);
    else if (Xo(u)) {
      let { endSourceSpan: d, startSourceSpan: S2 } = u, h3 = o().errors.find((f) => f.span.start.offset > S2.start.offset && f.span.start.offset < d.end.offset);
      h3 && Lr(h3), n[c] = l(u);
    }
  }
  return i.length > 0 && Lr(i[0]), { parseOptions: t, rootNodes: n };
}
function Xo(e) {
  if (e.kind !== "element" || e.name !== "template") return false;
  let t = e.attrs.find((r) => r.name === "lang")?.value;
  return !t || t === "html";
}
function Lr(e) {
  let { msg: t, span: { start: r, end: n } } = e;
  throw Qi(t, { loc: { start: { line: r.line + 1, column: r.col + 1 }, end: { line: n.line + 1, column: n.col + 1 } }, cause: e });
}
function Qo(e, t, r, n, i, s) {
  let { offset: a } = n, o = vt(t.slice(0, a)) + r, l = Pr(o, e, { ...i, shouldParseFrontMatter: false }, s);
  l.sourceSpan = new p(n, M(0, l.children, -1).sourceSpan.end);
  let c = l.children[0];
  return c.length === a ? l.children.shift() : (c.sourceSpan = new p(c.sourceSpan.start.moveBy(a), c.sourceSpan.end), c.value = c.value.slice(a)), l;
}
function Pr(e, t, r, n = {}) {
  let { frontMatter: i, content: s } = r.shouldParseFrontMatter ? Kt(e) : { content: e }, a = new nt(e, n.filepath), o = new Ie(a, 0, 0, 0), l = o.moveBy(e.length), { parseOptions: c, rootNodes: u } = t(s, r), d = { kind: "root", sourceSpan: new p(o, l), children: u }, S2;
  if (i) {
    let [f, g] = [i.start, i.end].map((v2) => new Ie(a, v2.index, v2.line - 1, v2.column));
    S2 = { ...i, kind: "frontMatter", sourceSpan: new p(f, g) };
  }
  return is(d, S2, c, (f, g) => Qo(t, e, f, g, c, n));
}
var Ht = Bt({ name: "html", normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true });
function at(e) {
  let t = Bt(e), r = t.name === "vue" ? ss : Nr;
  return { parse: (n, i) => Pr(n, r, t, i), hasPragma: Zn, hasIgnorePragma: ei, astFormat: "html", locStart: W, locEnd: Z };
}
var Jo = at(Ht);
var Zo = /* @__PURE__ */ new Set(["mj-style", "mj-raw"]);
var el = at({ ...Ht, name: "mjml", shouldParseAsRawText: (e) => Zo.has(e) });
var tl = at({ name: "angular", tokenizeAngularBlocks: true, tokenizeAngularLetDeclaration: true, allowStartTagComments: true });
var rl = at({ name: "vue", isTagNameCaseSensitive: true, shouldParseAsRawText(e, t, r, n) {
  return e.toLowerCase() !== "html" && !r && (e !== "template" || n.some(({ name: i, value: s }) => i === "lang" && s !== "html" && s !== "" && s !== void 0));
} });
var nl = at({ name: "lwc", canSelfClose: false });
var il = { html: ji };

// node_modules/prettier/standalone.mjs
var Mu = Object.defineProperty;
var xt2 = (t, e) => {
  for (var r in e) Mu(t, r, { get: e[r], enumerable: true });
};
var Iu = {};
xt2(Iu, { __debug: () => Ji2, check: () => Ki2, doc: () => lr2, format: () => ku, formatWithCursor: () => bu, getSupportInfo: () => Hi2, util: () => pr2, version: () => Au });
var Q = (t, e) => (r, n, ...o) => r | 1 && n == null ? void 0 : (e.call(n) ?? n[t]).apply(n, o);
var Yu = String.prototype.replaceAll ?? function(t, e) {
  return t.global ? this.replace(t, e) : this.split(t).join(e);
};
var ju = Q("replaceAll", function() {
  if (typeof this == "string") return Yu;
});
var ue2 = ju;
var we2 = class {
  diff(e, r, n = {}) {
    let o;
    typeof n == "function" ? (o = n, n = {}) : "callback" in n && (o = n.callback);
    let u = this.castInput(e, n), i = this.castInput(r, n), a = this.removeEmpty(this.tokenize(u, n)), s = this.removeEmpty(this.tokenize(i, n));
    return this.diffWithOptionsObj(a, s, n, o);
  }
  diffWithOptionsObj(e, r, n, o) {
    var u;
    let i = (C2) => {
      if (C2 = this.postProcess(C2, n), o) {
        setTimeout(function() {
          o(C2);
        }, 0);
        return;
      } else return C2;
    }, a = r.length, s = e.length, D2 = 1, c = a + s;
    n.maxEditLength != null && (c = Math.min(c, n.maxEditLength));
    let p2 = (u = n.timeout) !== null && u !== void 0 ? u : 1 / 0, f = Date.now() + p2, m2 = [{ oldPos: -1, lastComponent: void 0 }], l = this.extractCommon(m2[0], r, e, 0, n);
    if (m2[0].oldPos + 1 >= s && l + 1 >= a) return i(this.buildValues(m2[0].lastComponent, r, e));
    let F2 = -1 / 0, d = 1 / 0, E2 = () => {
      for (let C2 = Math.max(F2, -D2); C2 <= Math.min(d, D2); C2 += 2) {
        let g, _2 = m2[C2 - 1], P2 = m2[C2 + 1];
        _2 && (m2[C2 - 1] = void 0);
        let x2 = false;
        if (P2) {
          let q2 = P2.oldPos - C2;
          x2 = P2 && 0 <= q2 && q2 < a;
        }
        let N2 = _2 && _2.oldPos + 1 < s;
        if (!x2 && !N2) {
          m2[C2] = void 0;
          continue;
        }
        if (!N2 || x2 && _2.oldPos < P2.oldPos ? g = this.addToPath(P2, true, false, 0, n) : g = this.addToPath(_2, false, true, 1, n), l = this.extractCommon(g, r, e, C2, n), g.oldPos + 1 >= s && l + 1 >= a) return i(this.buildValues(g.lastComponent, r, e)) || true;
        m2[C2] = g, g.oldPos + 1 >= s && (d = Math.min(d, C2 - 1)), l + 1 >= a && (F2 = Math.max(F2, C2 + 1));
      }
      D2++;
    };
    if (o) (function C2() {
      setTimeout(function() {
        if (D2 > c || Date.now() > f) return o(void 0);
        E2() || C2();
      }, 0);
    })();
    else for (; D2 <= c && Date.now() <= f; ) {
      let C2 = E2();
      if (C2) return C2;
    }
  }
  addToPath(e, r, n, o, u) {
    let i = e.lastComponent;
    return i && !u.oneChangePerToken && i.added === r && i.removed === n ? { oldPos: e.oldPos + o, lastComponent: { count: i.count + 1, added: r, removed: n, previousComponent: i.previousComponent } } : { oldPos: e.oldPos + o, lastComponent: { count: 1, added: r, removed: n, previousComponent: i } };
  }
  extractCommon(e, r, n, o, u) {
    let i = r.length, a = n.length, s = e.oldPos, D2 = s - o, c = 0;
    for (; D2 + 1 < i && s + 1 < a && this.equals(n[s + 1], r[D2 + 1], u); ) D2++, s++, c++, u.oneChangePerToken && (e.lastComponent = { count: 1, previousComponent: e.lastComponent, added: false, removed: false });
    return c && !u.oneChangePerToken && (e.lastComponent = { count: c, previousComponent: e.lastComponent, added: false, removed: false }), e.oldPos = s, D2;
  }
  equals(e, r, n) {
    return n.comparator ? n.comparator(e, r) : e === r || !!n.ignoreCase && e.toLowerCase() === r.toLowerCase();
  }
  removeEmpty(e) {
    let r = [];
    for (let n = 0; n < e.length; n++) e[n] && r.push(e[n]);
    return r;
  }
  castInput(e, r) {
    return e;
  }
  tokenize(e, r) {
    return Array.from(e);
  }
  join(e) {
    return e.join("");
  }
  postProcess(e, r) {
    return e;
  }
  get useLongestToken() {
    return false;
  }
  buildValues(e, r, n) {
    let o = [], u;
    for (; e; ) o.push(e), u = e.previousComponent, delete e.previousComponent, e = u;
    o.reverse();
    let i = o.length, a = 0, s = 0, D2 = 0;
    for (; a < i; a++) {
      let c = o[a];
      if (c.removed) c.value = this.join(n.slice(D2, D2 + c.count)), D2 += c.count;
      else {
        if (!c.added && this.useLongestToken) {
          let p2 = r.slice(s, s + c.count);
          p2 = p2.map(function(f, m2) {
            let l = n[D2 + m2];
            return l.length > f.length ? l : f;
          }), c.value = this.join(p2);
        } else c.value = this.join(r.slice(s, s + c.count));
        s += c.count, c.added || (D2 += c.count);
      }
    }
    return o;
  }
};
var Tt2 = class extends we2 {
  tokenize(e) {
    return e.slice();
  }
  join(e) {
    return e;
  }
  removeEmpty(e) {
    return e;
  }
};
var dr2 = new Tt2();
function Nt2(t, e, r) {
  return dr2.diff(t, e, r);
}
var Uu = () => {
};
var I2 = Uu;
var Er2 = "cr";
var Cr2 = "crlf";
var Vu = "lf";
var Wu = Vu;
var Bt2 = "\r";
var hr2 = `\r
`;
var ze2 = `
`;
var $u = ze2;
function gr2(t) {
  let e = t.indexOf(Bt2);
  return e !== -1 ? t.charAt(e + 1) === ze2 ? Cr2 : Er2 : Wu;
}
function Se2(t) {
  return t === Er2 ? Bt2 : t === Cr2 ? hr2 : $u;
}
var zu = /* @__PURE__ */ new Map([[ze2, /\n/g], [Bt2, /\r/g], [hr2, /\r\n/g]]);
function wt2(t, e) {
  let r = zu.get(e);
  return t.match(r)?.length ?? 0;
}
var Gu = /\r\n?/g;
function yr2(t) {
  return ue2(0, t, Gu, ze2);
}
var oe2 = /* @__PURE__ */ Symbol.for("comments");
function Ku(t) {
  return this[t < 0 ? this.length + t : t];
}
var Hu = Q("at", function() {
  if (Array.isArray(this) || typeof this == "string") return Ku;
});
var A2 = Hu;
var K2 = "string";
var V2 = "array";
var W2 = "cursor";
var R2 = "indent";
var L2 = "align";
var v = "trim";
var T2 = "group";
var b2 = "fill";
var B2 = "if-break";
var M2 = "indent-if-break";
var Y2 = "line-suffix";
var j2 = "line-suffix-boundary";
var y2 = "line";
var k2 = "label";
var w2 = "break-parent";
var Ge2 = /* @__PURE__ */ new Set([W2, R2, L2, v, T2, b2, B2, M2, Y2, j2, y2, k2, w2]);
function _r2(t) {
  let e = t.length;
  for (; e > 0 && (t[e - 1] === "\r" || t[e - 1] === `
`); ) e--;
  return e < t.length ? t.slice(0, e) : t;
}
function Ee2(t, e, r) {
  if (!t.has(e)) {
    let n = r(e);
    t.set(e, n);
  }
  return t.get(e);
}
function Ju(t) {
  if (typeof t == "string") return K2;
  if (Array.isArray(t)) return V2;
  if (!t) return;
  let { type: e } = t;
  if (Ge2.has(e)) return e;
}
var X2 = Ju;
var qu = (t) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(t);
function Xu(t) {
  let e = t === null ? "null" : typeof t;
  if (e !== "string" && e !== "object") return `Unexpected doc '${e}', 
Expected it to be 'string' or 'object'.`;
  if (X2(t)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(t);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = qu([...Ge2].map((o) => `'${o}'`));
  return `Unexpected doc.type '${t.type}'.
Expected it to be ${n}.`;
}
var St2 = class extends Error {
  name = "InvalidDocError";
  constructor(e) {
    super(Xu(e)), this.doc = e;
  }
};
var ee2 = St2;
var Ar2 = {};
function Qu(t, e, r, n) {
  let o = [t];
  for (; o.length > 0; ) {
    let u = o.pop();
    if (u === Ar2) {
      r(o.pop());
      continue;
    }
    r && o.push(u, Ar2);
    let i = X2(u);
    if (!i) throw new ee2(u);
    if (e?.(u) !== false) switch (i) {
      case V2:
      case b2: {
        let a = i === V2 ? u : u.parts;
        for (let s = a.length, D2 = s - 1; D2 >= 0; --D2) o.push(a[D2]);
        break;
      }
      case B2:
        o.push(u.flatContents, u.breakContents);
        break;
      case T2:
        if (n && u.expandedStates) for (let a = u.expandedStates.length, s = a - 1; s >= 0; --s) o.push(u.expandedStates[s]);
        else o.push(u.contents);
        break;
      case L2:
      case R2:
      case M2:
      case k2:
      case Y2:
        o.push(u.contents);
        break;
      case K2:
      case W2:
      case v:
      case j2:
      case y2:
      case w2:
        break;
      default:
        throw new ee2(u);
    }
  }
}
var Oe2 = Qu;
function be2(t, e) {
  if (typeof t == "string") return e(t);
  let r = /* @__PURE__ */ new Map();
  return n(t);
  function n(u) {
    return Ee2(r, u, o);
  }
  function o(u) {
    switch (X2(u)) {
      case V2:
        return e(u.map(n));
      case b2:
        return e({ ...u, parts: u.parts.map(n) });
      case B2:
        return e({ ...u, breakContents: n(u.breakContents), flatContents: n(u.flatContents) });
      case T2: {
        let { expandedStates: i, contents: a } = u;
        return i ? (i = i.map(n), a = i[0]) : a = n(a), e({ ...u, contents: a, expandedStates: i });
      }
      case L2:
      case R2:
      case M2:
      case k2:
      case Y2:
        return e({ ...u, contents: n(u.contents) });
      case K2:
      case W2:
      case v:
      case j2:
      case y2:
      case w2:
        return e(u);
      default:
        throw new ee2(u);
    }
  }
}
function Ke2(t, e, r) {
  let n = r, o = false;
  function u(i) {
    if (o) return false;
    let a = e(i);
    a !== void 0 && (o = true, n = a);
  }
  return Oe2(t, u), n;
}
function Zu(t) {
  if (t.type === T2 && t.break || t.type === y2 && t.hard || t.type === w2) return true;
}
function Nr2(t) {
  return Ke2(t, Zu, false);
}
function xr2(t) {
  if (t.length > 0) {
    let e = A2(0, t, -1);
    !e.expandedStates && !e.break && (e.break = "propagated");
  }
  return null;
}
function Br2(t) {
  let e = /* @__PURE__ */ new Set(), r = [];
  function n(u) {
    if (u.type === w2 && xr2(r), u.type === T2) {
      if (r.push(u), e.has(u)) return false;
      e.add(u);
    }
  }
  function o(u) {
    u.type === T2 && r.pop().break && xr2(r);
  }
  Oe2(t, n, o, true);
}
function eo2(t) {
  return t.type === y2 && !t.hard ? t.soft ? "" : " " : t.type === B2 ? t.flatContents : t;
}
function wr2(t) {
  return be2(t, eo2);
}
function Tr2(t) {
  for (t = [...t]; t.length >= 2 && A2(0, t, -2).type === y2 && A2(0, t, -1).type === w2; ) t.length -= 2;
  if (t.length > 0) {
    let e = Pe2(A2(0, t, -1));
    t[t.length - 1] = e;
  }
  return t;
}
function Pe2(t) {
  switch (X2(t)) {
    case R2:
    case M2:
    case T2:
    case Y2:
    case k2: {
      let e = Pe2(t.contents);
      return { ...t, contents: e };
    }
    case B2:
      return { ...t, breakContents: Pe2(t.breakContents), flatContents: Pe2(t.flatContents) };
    case b2:
      return { ...t, parts: Tr2(t.parts) };
    case V2:
      return Tr2(t);
    case K2:
      return _r2(t);
    case L2:
    case W2:
    case v:
    case j2:
    case y2:
    case w2:
      break;
    default:
      throw new ee2(t);
  }
  return t;
}
function He2(t) {
  return Pe2(ro2(t));
}
function to2(t) {
  switch (X2(t)) {
    case b2: {
      let { parts: e } = t;
      if (e.every((r) => r === "")) return "";
      if (e.length === 1) return e[0];
      break;
    }
    case T2:
      if (!t.contents && !t.id && !t.break && !t.expandedStates) return "";
      if (t.contents.type === T2 && t.contents.id === t.id && t.contents.break === t.break && t.contents.expandedStates === t.expandedStates) return t.contents;
      break;
    case L2:
    case R2:
    case M2:
    case Y2:
      if (!t.contents) return "";
      break;
    case B2:
      if (!t.flatContents && !t.breakContents) return "";
      break;
    case V2: {
      let e = [];
      for (let r of t) {
        if (!r) continue;
        let [n, ...o] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof A2(0, e, -1) == "string" ? e[e.length - 1] += n : e.push(n), e.push(...o);
      }
      return e.length === 0 ? "" : e.length === 1 ? e[0] : e;
    }
    case K2:
    case W2:
    case v:
    case j2:
    case y2:
    case k2:
    case w2:
      break;
    default:
      throw new ee2(t);
  }
  return t;
}
function ro2(t) {
  return be2(t, (e) => to2(e));
}
function Sr2(t, e = qe) {
  return be2(t, (r) => typeof r == "string" ? Je2(e, r.split(`
`)) : r);
}
function no2(t) {
  if (t.type === y2) return true;
}
function Or2(t) {
  return Ke2(t, no2, false);
}
function Ce(t, e) {
  return t.type === k2 ? { ...t, contents: e(t.contents) } : e(t);
}
var S = I2;
var Xe2 = I2;
var Pr2 = I2;
var br2 = I2;
function ie2(t) {
  return S(t), { type: R2, contents: t };
}
function De2(t, e) {
  return br2(t), S(e), { type: L2, contents: e, n: t };
}
function kr2(t) {
  return De2(Number.NEGATIVE_INFINITY, t);
}
function Qe2(t) {
  return De2({ type: "root" }, t);
}
function Ir2(t) {
  return De2(-1, t);
}
function Ze2(t, e, r) {
  S(t);
  let n = t;
  if (e > 0) {
    for (let o = 0; o < Math.floor(e / r); ++o) n = ie2(n);
    n = De2(e % r, n), n = De2(Number.NEGATIVE_INFINITY, n);
  }
  return n;
}
var ce2 = { type: w2 };
var te2 = { type: W2 };
function Rr2(t) {
  return Pr2(t), { type: b2, parts: t };
}
function Ot2(t, e = {}) {
  return S(t), Xe2(e.expandedStates, true), { type: T2, id: e.id, contents: t, break: !!e.shouldBreak, expandedStates: e.expandedStates };
}
function Lr2(t, e) {
  return Ot2(t[0], { ...e, expandedStates: t });
}
function vr2(t, e = "", r = {}) {
  return S(t), e !== "" && S(e), { type: B2, breakContents: t, flatContents: e, groupId: r.groupId };
}
function Mr2(t, e) {
  return S(t), { type: M2, contents: t, groupId: e.groupId, negate: e.negate };
}
function Je2(t, e) {
  S(t), Xe2(e);
  let r = [];
  for (let n = 0; n < e.length; n++) n !== 0 && r.push(t), r.push(e[n]);
  return r;
}
function Yr2(t, e) {
  return S(e), t ? { type: k2, label: t, contents: e } : e;
}
var et2 = { type: y2 };
var jr2 = { type: y2, soft: true };
var ke2 = { type: y2, hard: true };
var $2 = [ke2, ce2];
var Pt2 = { type: y2, hard: true, literal: true };
var qe = [Pt2, ce2];
function Ie2(t) {
  return S(t), { type: Y2, contents: t };
}
var Ur2 = { type: j2 };
var Vr2 = { type: v };
function re2(t) {
  if (!t) return "";
  if (Array.isArray(t)) {
    let e = [];
    for (let r of t) if (Array.isArray(r)) e.push(...re2(r));
    else {
      let n = re2(r);
      n !== "" && e.push(n);
    }
    return e;
  }
  return t.type === B2 ? { ...t, breakContents: re2(t.breakContents), flatContents: re2(t.flatContents) } : t.type === T2 ? { ...t, contents: re2(t.contents), expandedStates: t.expandedStates?.map(re2) } : t.type === b2 ? { type: "fill", parts: t.parts.map(re2) } : t.contents ? { ...t, contents: re2(t.contents) } : t;
}
function Wr2(t) {
  let e = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ new Set();
  return n(re2(t));
  function n(u, i, a) {
    if (typeof u == "string") return JSON.stringify(u);
    if (Array.isArray(u)) {
      let s = u.map(n).filter(Boolean);
      return s.length === 1 ? s[0] : `[${s.join(", ")}]`;
    }
    if (u.type === y2) {
      let s = a?.[i + 1]?.type === w2;
      return u.literal ? s ? "literalline" : "literallineWithoutBreakParent" : u.hard ? s ? "hardline" : "hardlineWithoutBreakParent" : u.soft ? "softline" : "line";
    }
    if (u.type === w2) return a?.[i - 1]?.type === y2 && a[i - 1].hard ? void 0 : "breakParent";
    if (u.type === v) return "trim";
    if (u.type === R2) return "indent(" + n(u.contents) + ")";
    if (u.type === L2) return u.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + n(u.contents) + ")" : u.n < 0 ? "dedent(" + n(u.contents) + ")" : u.n.type === "root" ? "markAsRoot(" + n(u.contents) + ")" : "align(" + JSON.stringify(u.n) + ", " + n(u.contents) + ")";
    if (u.type === B2) return "ifBreak(" + n(u.breakContents) + (u.flatContents ? ", " + n(u.flatContents) : "") + (u.groupId ? (u.flatContents ? "" : ', ""') + `, { groupId: ${o(u.groupId)} }` : "") + ")";
    if (u.type === M2) {
      let s = [];
      u.negate && s.push("negate: true"), u.groupId && s.push(`groupId: ${o(u.groupId)}`);
      let D2 = s.length > 0 ? `, { ${s.join(", ")} }` : "";
      return `indentIfBreak(${n(u.contents)}${D2})`;
    }
    if (u.type === T2) {
      let s = [];
      u.break && u.break !== "propagated" && s.push("shouldBreak: true"), u.id && s.push(`id: ${o(u.id)}`);
      let D2 = s.length > 0 ? `, { ${s.join(", ")} }` : "";
      return u.expandedStates ? `conditionalGroup([${u.expandedStates.map((c) => n(c)).join(",")}]${D2})` : `group(${n(u.contents)}${D2})`;
    }
    if (u.type === b2) return `fill([${u.parts.map((s) => n(s)).join(", ")}])`;
    if (u.type === Y2) return "lineSuffix(" + n(u.contents) + ")";
    if (u.type === j2) return "lineSuffixBoundary";
    if (u.type === k2) return `label(${JSON.stringify(u.label)}, ${n(u.contents)})`;
    if (u.type === W2) return "cursor";
    throw new Error("Unknown doc type " + u.type);
  }
  function o(u) {
    if (typeof u != "symbol") return JSON.stringify(String(u));
    if (u in e) return e[u];
    let i = u.description || "symbol";
    for (let a = 0; ; a++) {
      let s = i + (a > 0 ? ` #${a}` : "");
      if (!r.has(s)) return r.add(s), e[u] = `Symbol.for(${JSON.stringify(s)})`;
    }
  }
}
var $r2 = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED9\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEFA](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDEC2\uDEC6\uDEC8\uDECC-\uDEDD\uDEDF-\uDEEB\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
var zr2 = 12288;
var Gr2 = 65510;
var Kr2 = [12288, 12288, 65281, 65376, 65504, 65510];
var Hr2 = 4352;
var Jr2 = 262141;
var bt2 = [4352, 4447, 8986, 8987, 9001, 9002, 9193, 9196, 9200, 9200, 9203, 9203, 9725, 9726, 9748, 9749, 9776, 9783, 9800, 9811, 9855, 9855, 9866, 9871, 9875, 9875, 9889, 9889, 9898, 9899, 9917, 9918, 9924, 9925, 9934, 9934, 9940, 9940, 9962, 9962, 9970, 9971, 9973, 9973, 9978, 9978, 9981, 9981, 9989, 9989, 9994, 9995, 10024, 10024, 10060, 10060, 10062, 10062, 10067, 10069, 10071, 10071, 10133, 10135, 10160, 10160, 10175, 10175, 11035, 11036, 11088, 11088, 11093, 11093, 11904, 11929, 11931, 12019, 12032, 12245, 12272, 12287, 12289, 12350, 12353, 12438, 12441, 12543, 12549, 12591, 12593, 12686, 12688, 12773, 12783, 12830, 12832, 12871, 12880, 42124, 42128, 42182, 43360, 43388, 44032, 55203, 63744, 64255, 65040, 65049, 65072, 65106, 65108, 65126, 65128, 65131, 94176, 94180, 94192, 94198, 94208, 101594, 101631, 101664, 101760, 101874, 101888, 102801, 102816, 102866, 110576, 110579, 110581, 110587, 110589, 110590, 110592, 110888, 110898, 110898, 110928, 110930, 110933, 110933, 110948, 110952, 110960, 111355, 119552, 119638, 119648, 119670, 126980, 126980, 127183, 127183, 127374, 127374, 127377, 127386, 127406, 127406, 127488, 127490, 127504, 127547, 127552, 127560, 127568, 127569, 127584, 127589, 127744, 127776, 127789, 127797, 127799, 127868, 127870, 127891, 127904, 127946, 127951, 127955, 127968, 127984, 127988, 127988, 127992, 128062, 128064, 128064, 128066, 128252, 128255, 128317, 128331, 128334, 128336, 128359, 128378, 128378, 128405, 128406, 128420, 128420, 128507, 128591, 128640, 128709, 128716, 128716, 128720, 128722, 128725, 128729, 128732, 128735, 128747, 128748, 128756, 128764, 128986, 128986, 128992, 129003, 129008, 129008, 129292, 129338, 129340, 129349, 129351, 129535, 129648, 129660, 129664, 129734, 129736, 129736, 129740, 129757, 129759, 129771, 129775, 129786, 131072, 196605, 196608, 262141];
var kt2 = (t, e) => {
  let r = 0, n = Math.floor(t.length / 2) - 1;
  for (; r <= n; ) {
    let o = Math.floor((r + n) / 2), u = o * 2;
    if (e < t[u]) n = o - 1;
    else if (e > t[u + 1]) r = o + 1;
    else return true;
  }
  return false;
};
var qr2 = 19968;
var [uo2, oo2] = io2(bt2);
function io2(t) {
  let e = t[0], r = t[1];
  for (let n = 0; n < t.length; n += 2) {
    let o = t[n], u = t[n + 1];
    if (qr2 >= o && qr2 <= u) return [o, u];
    u - o > r - e && (e = o, r = u);
  }
  return [e, r];
}
var tt2 = (t) => t < zr2 || t > Gr2 ? false : kt2(Kr2, t);
var It2 = (t) => t >= uo2 && t <= oo2 ? true : t < Hr2 || t > Jr2 ? false : kt2(bt2, t);
var so2 = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u2764\u27A1\u2934\u2935\u2B05-\u2B07]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF3\uDFF5\uDFF7]|\uD83D[\uDC3F\uDC41\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])$/;
var Xr2 = (t) => so2.test(t);
var ao2 = /[^\x20-\x7F]/;
var Do2 = /[\p{Nonspacing_Mark}\p{Enclosing_Mark}]/u;
function co2(t) {
  if (!t) return 0;
  if (!ao2.test(t)) return t.length;
  let e = 0;
  t = t.replace($r2(), (r) => (e += Xr2(r) ? 1 : 2, ""));
  for (let r of t) {
    let n = r.codePointAt(0);
    n <= 31 || n >= 127 && n <= 159 || Do2.test(r) || (e += tt2(n) || It2(n) ? 2 : 1);
  }
  return e;
}
var Re2 = co2;
var lo2 = { type: 0 };
var fo2 = { type: 1 };
var Rt2 = { value: "", length: 0, queue: [], get root() {
  return Rt2;
} };
function Qr2(t, e, r) {
  let n = e.type === 1 ? t.queue.slice(0, -1) : [...t.queue, e], o = "", u = 0, i = 0, a = 0;
  for (let l of n) switch (l.type) {
    case 0:
      c(), r.useTabs ? s(1) : D2(r.tabWidth);
      break;
    case 3: {
      let { string: F2 } = l;
      c(), o += F2, u += F2.length;
      break;
    }
    case 2: {
      let { width: F2 } = l;
      i += 1, a += F2;
      break;
    }
    default:
      throw new Error(`Unexpected indent comment '${l.type}'.`);
  }
  return f(), { ...t, value: o, length: u, queue: n };
  function s(l) {
    o += "	".repeat(l), u += r.tabWidth * l;
  }
  function D2(l) {
    o += " ".repeat(l), u += l;
  }
  function c() {
    r.useTabs ? p2() : f();
  }
  function p2() {
    i > 0 && s(i), m2();
  }
  function f() {
    a > 0 && D2(a), m2();
  }
  function m2() {
    i = 0, a = 0;
  }
}
function Zr2(t, e, r) {
  if (!e) return t;
  if (e.type === "root") return { ...t, root: t };
  if (e === Number.NEGATIVE_INFINITY) return t.root;
  let n;
  return typeof e == "number" ? e < 0 ? n = fo2 : n = { type: 2, width: e } : n = { type: 3, string: e }, Qr2(t, n, r);
}
function en2(t, e) {
  return Qr2(t, lo2, e);
}
function po2(t) {
  let e = 0;
  for (let r = t.length - 1; r >= 0; r--) {
    let n = t[r];
    if (n === " " || n === "	") e++;
    else break;
  }
  return e;
}
function rt2(t) {
  let e = po2(t);
  return { text: e === 0 ? t : t.slice(0, t.length - e), count: e };
}
var Lt2 = class {
  #t = [];
  #e = "";
  #n = 0;
  #u = [];
  #r = [];
  #o() {
    let e = this.#e;
    e !== "" && (this.#t.push(e), this.#n += e.length, this.#e = "");
    for (let r of this.#r) this.#u.push(Math.min(r, this.#n));
    this.#r.length = 0;
  }
  markPosition() {
    if (this.#u.length + this.#r.length >= 2) throw new Error("There are too many 'cursor' in doc.");
    this.#r.push(this.#n + this.#e.length);
  }
  write(e) {
    this.#e += e;
  }
  trim() {
    let { text: e, count: r } = rt2(this.#e);
    return this.#e = e, this.#o(), r;
  }
  finish() {
    return this.#o(), { text: this.#t.join(""), positions: this.#u };
  }
};
var tn2 = Lt2;
var H2 = /* @__PURE__ */ Symbol("MODE_BREAK");
var Z2 = /* @__PURE__ */ Symbol("MODE_FLAT");
var vt2 = /* @__PURE__ */ Symbol("DOC_FILL_PRINTED_LENGTH");
function nt2(t, e, r, n, o, u) {
  if (r === Number.POSITIVE_INFINITY) return true;
  let i = e.length, a = false, s = [t], D2 = "";
  for (; r >= 0; ) {
    if (s.length === 0) {
      if (i === 0) return true;
      s.push(e[--i]);
      continue;
    }
    let { mode: c, doc: p2 } = s.pop(), f = X2(p2);
    switch (f) {
      case K2:
        p2 && (a && (D2 += " ", r -= 1, a = false), D2 += p2, r -= Re2(p2));
        break;
      case V2:
      case b2: {
        let m2 = f === V2 ? p2 : p2.parts, l = p2[vt2] ?? 0;
        for (let F2 = m2.length - 1; F2 >= l; F2--) s.push({ mode: c, doc: m2[F2] });
        break;
      }
      case R2:
      case L2:
      case M2:
      case k2:
        s.push({ mode: c, doc: p2.contents });
        break;
      case v: {
        let { text: m2, count: l } = rt2(D2);
        D2 = m2, r += l;
        break;
      }
      case T2: {
        if (u && p2.break) return false;
        let m2 = p2.break ? H2 : c, l = p2.expandedStates && m2 === H2 ? A2(0, p2.expandedStates, -1) : p2.contents;
        s.push({ mode: m2, doc: l });
        break;
      }
      case B2: {
        let l = (p2.groupId ? o[p2.groupId] || Z2 : c) === H2 ? p2.breakContents : p2.flatContents;
        l && s.push({ mode: c, doc: l });
        break;
      }
      case y2:
        if (c === H2 || p2.hard) return true;
        p2.soft || (a = true);
        break;
      case Y2:
        n = true;
        break;
      case j2:
        if (n) return false;
        break;
    }
  }
  return false;
}
function he2(t, e) {
  let r = /* @__PURE__ */ Object.create(null), n = e.printWidth, o = Se2(e.endOfLine), u = 0, i = [{ indent: Rt2, mode: H2, doc: t }], a = false, s = [], D2 = new tn2();
  for (Br2(t); i.length > 0; ) {
    let { indent: l, mode: F2, doc: d } = i.pop();
    switch (X2(d)) {
      case K2: {
        let E2 = o !== `
` ? ue2(0, d, `
`, o) : d;
        E2 && (D2.write(E2), i.length > 0 && (u += Re2(E2)));
        break;
      }
      case V2:
        for (let E2 = d.length - 1; E2 >= 0; E2--) i.push({ indent: l, mode: F2, doc: d[E2] });
        break;
      case W2:
        D2.markPosition();
        break;
      case R2:
        i.push({ indent: en2(l, e), mode: F2, doc: d.contents });
        break;
      case L2:
        i.push({ indent: Zr2(l, d.n, e), mode: F2, doc: d.contents });
        break;
      case v:
        u -= D2.trim();
        break;
      case T2: {
        let E2 = (function() {
          if (F2 === Z2 && !a) return { indent: l, mode: d.break ? H2 : Z2, doc: d.contents };
          a = false;
          let g = n - u, _2 = s.length > 0, P2 = { indent: l, mode: Z2, doc: d.contents };
          if (!d.break && nt2(P2, i, g, _2, r)) return P2;
          if (!d.expandedStates) return { indent: l, mode: H2, doc: d.contents };
          if (!d.break) for (let x2 = 1; x2 < d.expandedStates.length - 1; x2++) {
            let N2 = { indent: l, mode: Z2, doc: d.expandedStates[x2] };
            if (nt2(N2, i, g, _2, r)) return N2;
          }
          return { indent: l, mode: H2, doc: A2(0, d.expandedStates, -1) };
        })();
        i.push(E2), d.id && (r[d.id] = E2.mode);
        break;
      }
      case b2: {
        let E2 = n - u, C2 = d[vt2] ?? 0, { parts: g } = d, _2 = g.length - C2;
        if (_2 === 0) break;
        let P2 = g[C2 + 0], x2 = g[C2 + 1], N2 = { indent: l, mode: Z2, doc: P2 }, q2 = { indent: l, mode: H2, doc: P2 }, $e2 = nt2(N2, [], E2, s.length > 0, r, true);
        if (_2 === 1) {
          $e2 ? i.push(N2) : i.push(q2);
          break;
        }
        let mr2 = { indent: l, mode: Z2, doc: x2 }, At2 = { indent: l, mode: H2, doc: x2 };
        if (_2 === 2) {
          $e2 ? i.push(mr2, N2) : i.push(At2, q2);
          break;
        }
        let Ru = g[C2 + 2], Lu = { indent: l, mode: F2, doc: { ...d, [vt2]: C2 + 2 } }, vu = nt2({ indent: l, mode: Z2, doc: [P2, x2, Ru] }, [], E2, s.length > 0, r, true);
        i.push(Lu), vu ? i.push(mr2, N2) : $e2 ? i.push(At2, N2) : i.push(At2, q2);
        break;
      }
      case B2:
      case M2: {
        let E2 = d.groupId ? r[d.groupId] : F2;
        if (E2 === H2) {
          let C2 = d.type === B2 ? d.breakContents : d.negate ? d.contents : ie2(d.contents);
          C2 && i.push({ indent: l, mode: F2, doc: C2 });
        }
        if (E2 === Z2) {
          let C2 = d.type === B2 ? d.flatContents : d.negate ? ie2(d.contents) : d.contents;
          C2 && i.push({ indent: l, mode: F2, doc: C2 });
        }
        break;
      }
      case Y2:
        s.push({ indent: l, mode: F2, doc: d.contents });
        break;
      case j2:
        s.length > 0 && i.push({ indent: l, mode: F2, doc: ke2 });
        break;
      case y2:
        switch (F2) {
          case Z2:
            if (!d.hard) {
              d.soft || (D2.write(" "), u += 1);
              break;
            }
            a = true;
          case H2:
            if (s.length > 0) {
              i.push({ indent: l, mode: F2, doc: d }, ...s.reverse()), s.length = 0;
              break;
            }
            d.literal ? (D2.write(o), u = 0, l.root && (l.root.value && D2.write(l.root.value), u = l.root.length)) : (D2.trim(), D2.write(o + l.value), u = l.length);
            break;
        }
        break;
      case k2:
        i.push({ indent: l, mode: F2, doc: d.contents });
        break;
      case w2:
        break;
      default:
        throw new ee2(d);
    }
    i.length === 0 && s.length > 0 && (i.push(...s.reverse()), s.length = 0);
  }
  let { text: c, positions: p2 } = D2.finish();
  if (p2.length !== 2) return { formatted: c };
  let [f, m2] = p2;
  return { formatted: c, cursorNodeStart: f, cursorNodeText: c.slice(f, m2) };
}
var rn2 = (t) => t.charAt(0) === "\uFEFF";
var nn2 = (t) => "\uFEFF" + t;
function mo2(t, e, r = 0) {
  let n = 0;
  for (let o = r; o < t.length; ++o) t[o] === "	" ? n = n + e - n % e : n++;
  return n;
}
var ge2 = mo2;
var Mt2 = class {
  constructor(e) {
    this.stack = [e];
  }
  get key() {
    let { stack: e, siblings: r } = this;
    return A2(0, e, r === null ? -2 : -4) ?? null;
  }
  get index() {
    return this.siblings === null ? null : A2(0, this.stack, -2);
  }
  get node() {
    return A2(0, this.stack, -1);
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
    let { stack: e } = this, r = A2(0, e, -3);
    return Array.isArray(r) ? r : null;
  }
  get next() {
    let { siblings: e } = this;
    return e === null ? null : e[this.index + 1];
  }
  get previous() {
    let { siblings: e } = this;
    return e === null ? null : e[this.index - 1];
  }
  get isFirst() {
    return this.index === 0;
  }
  get isLast() {
    let { siblings: e, index: r } = this;
    return e !== null && r === e.length - 1;
  }
  get isRoot() {
    return this.stack.length === 1;
  }
  get root() {
    return this.stack[0];
  }
  get ancestors() {
    return [...this.#e()];
  }
  getName() {
    let { stack: e } = this, { length: r } = e;
    return r > 1 ? A2(0, e, -2) : null;
  }
  getValue() {
    return A2(0, this.stack, -1);
  }
  getNode(e = 0) {
    let r = this.#t(e);
    return r === -1 ? null : this.stack[r];
  }
  getParentNode(e = 0) {
    return this.getNode(e + 1);
  }
  #t(e) {
    let { stack: r } = this;
    for (let n = r.length - 1; n >= 0; n -= 2) if (!Array.isArray(r[n]) && --e < 0) return n;
    return -1;
  }
  call(e, ...r) {
    let { stack: n } = this, { length: o } = n, u = A2(0, n, -1);
    for (let i of r) u = u?.[i], n.push(i, u);
    try {
      return e(this);
    } finally {
      n.length = o;
    }
  }
  callParent(e, r = 0) {
    let n = this.#t(r + 1), o = this.stack.splice(n + 1);
    try {
      return e(this);
    } finally {
      this.stack.push(...o);
    }
  }
  each(e, ...r) {
    let { stack: n } = this, { length: o } = n, u = A2(0, n, -1);
    for (let i of r) u = u[i], n.push(i, u);
    try {
      for (let i = 0; i < u.length; ++i) n.push(i, u[i]), e(this, i, u), n.length -= 2;
    } finally {
      n.length = o;
    }
  }
  map(e, ...r) {
    let n = [];
    return this.each((o, u, i) => {
      n[u] = e(o, u, i);
    }, ...r), n;
  }
  match(...e) {
    let r = this.stack.length - 1, n = null, o = this.stack[r--];
    for (let u of e) {
      if (o === void 0) return false;
      let i = null;
      if (typeof n == "number" && (i = n, n = this.stack[r--], o = this.stack[r--]), u && !u(o, n, i)) return false;
      n = this.stack[r--], o = this.stack[r--];
    }
    return true;
  }
  findAncestor(e) {
    for (let r of this.#e()) if (e(r)) return r;
  }
  hasAncestor(e) {
    for (let r of this.#e()) if (e(r)) return true;
    return false;
  }
  *#e() {
    let { stack: e } = this;
    for (let r = e.length - 3; r >= 0; r -= 2) {
      let n = e[r];
      Array.isArray(n) || (yield n);
    }
  }
};
var un2 = Mt2;
function Fo2(t) {
  return Array.isArray(t) && t.length > 0;
}
var ut2 = Fo2;
function Eo2(t) {
  return t !== null && typeof t == "object";
}
var ye2 = Eo2;
function _e2(t) {
  return (e, r, n) => {
    if (r === false) return false;
    let o = !!n?.backwards, { length: u } = e, i = r;
    for (; i >= 0 && i < u; ) {
      let a = e.charAt(i);
      if (t instanceof RegExp) {
        if (!t.test(a)) return i;
      } else if (!t.includes(a)) return i;
      o ? i-- : i++;
    }
    return i === -1 || i === u ? i : false;
  };
}
var on2 = _e2(/\s/);
var U2 = _e2(" 	");
var ot = _e2(",; 	");
var it2 = _e2(/[^\n\r]/);
var sn2 = (t) => t === `
` || t === "\r" || t === "\u2028" || t === "\u2029";
function Co2(t, e, r) {
  if (e === false) return false;
  let n = !!r?.backwards, o = t.charAt(e);
  if (n) {
    if (t.charAt(e - 1) === "\r" && o === `
`) return e - 2;
    if (sn2(o)) return e - 1;
  } else {
    if (o === "\r" && t.charAt(e + 1) === `
`) return e + 2;
    if (sn2(o)) return e + 1;
  }
  return e;
}
var z = Co2;
function ho2(t, e, r = {}) {
  let n = U2(t, r.backwards ? e - 1 : e, r), o = z(t, n, r);
  return n !== o;
}
var J2 = ho2;
function* Ae2(t, e) {
  let { getVisitorKeys: r, filter: n = () => true } = e, o = (u) => ye2(u) && n(u);
  for (let u of r(t)) {
    let i = t[u];
    if (Array.isArray(i)) for (let a of i) o(a) && (yield a);
    else o(i) && (yield i);
  }
}
function* an2(t, e) {
  let r = [t];
  for (let n = 0; n < r.length; n++) {
    let o = r[n];
    for (let u of Ae2(o, e)) yield u, r.push(u);
  }
}
function Dn2(t, e) {
  return Ae2(t, e).next().done;
}
function go2(t, e, r) {
  let { filter: n } = r;
  if (!n) return [];
  let o, u = (r.getChildren?.(t, r) ?? [...Ae2(t, { getVisitorKeys: r.getVisitorKeys })]).flatMap((s) => (o ?? (o = [t, ...e]), n(s, o) ? [s] : cn2(s, o, r))), { locStart: i, locEnd: a } = r;
  return u.sort((s, D2) => i(s) - i(D2) || a(s) - a(D2)), u;
}
function cn2(t, e, r) {
  return Ee2(r.cache, t, (n) => go2(n, e, r));
}
var st2 = cn2;
function yo2(t) {
  let e = t.type || t.kind || "(unknown type)", r = String(t.name || t.id && (typeof t.id == "object" ? t.id.name : t.id) || t.key && (typeof t.key == "object" ? t.key.name : t.key) || t.value && (typeof t.value == "object" ? "" : String(t.value)) || t.operator || "");
  return r.length > 20 && (r = r.slice(0, 19) + "\u2026"), e + (r ? " " + r : "");
}
function Yt2(t, e) {
  return (t.comments ?? (t.comments = [])).push(e), e.printed = false, e.nodeDescription = yo2(t), true;
}
function le2(t, e) {
  return e.leading = true, e.trailing = false, Yt2(t, e);
}
function ne2(t, e, r) {
  return e.leading = false, e.trailing = false, r && (e.marker = r), Yt2(t, e);
}
function fe2(t, e) {
  return e.leading = false, e.trailing = true, Yt2(t, e);
}
var Vt = /* @__PURE__ */ new WeakMap();
function fn2(t, e, r, n, o = []) {
  let { locStart: u, locEnd: i } = r, a = u(e), s = i(e), D2 = st2(t, o, { cache: Vt, locStart: u, locEnd: i, getVisitorKeys: r.getVisitorKeys, filter: r.printer.canAttachComment, getChildren: r.printer.getCommentChildNodes }), c, p2, f = 0, m2 = D2.length;
  for (; f < m2; ) {
    let l = f + m2 >> 1, F2 = D2[l], d = u(F2), E2 = i(F2);
    if (d <= a && s <= E2) return fn2(F2, e, r, F2, [F2, ...o]);
    if (E2 <= a) {
      c = F2, f = l + 1;
      continue;
    }
    if (s <= d) {
      p2 = F2, m2 = l;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if (n?.type === "TemplateLiteral") {
    let { quasis: l } = n, F2 = Ut2(l, e, r);
    c && Ut2(l, c, r) !== F2 && (c = null), p2 && Ut2(l, p2, r) !== F2 && (p2 = null);
  }
  return { enclosingNode: n, precedingNode: c, followingNode: p2, ancestors: o };
}
var jt2 = () => false;
function pn2(t, e) {
  let { comments: r } = t;
  if (delete t.comments, !ut2(r) || !e.printer.canAttachComment) return;
  let n = [], { printer: { features: { experimental_avoidAstMutation: o }, handleComments: u = {} }, originalText: i } = e, { ownLine: a = jt2, endOfLine: s = jt2, remaining: D2 = jt2 } = u, c = r.map((f, m2) => ({ ...fn2(t, f, e), comment: f, text: i, options: e, ast: t, isLastComment: r.length - 1 === m2, placement: void 0 })), p2 = !o;
  for (let [f, m2] of c.entries()) {
    let { comment: l, precedingNode: F2, enclosingNode: d, followingNode: E2, text: C2, options: g, ast: _2, isLastComment: P2 } = m2, x2 = _o2(C2, g, c, f) ? "ownLine" : Ao2(C2, g, c, f) ? "endOfLine" : "remaining", N2;
    if (o ? (m2.placement = x2, N2 = [m2]) : N2 = [l, C2, g, _2, P2], p2 && (l.enclosingNode = d, l.precedingNode = F2, l.followingNode = E2), l.placement = x2, x2 === "ownLine") a(...N2) || (E2 ? le2(E2, l) : F2 ? fe2(F2, l) : d ? ne2(d, l) : ne2(_2, l));
    else if (x2 === "endOfLine") s(...N2) || (F2 ? fe2(F2, l) : E2 ? le2(E2, l) : d ? ne2(d, l) : ne2(_2, l));
    else if (!D2(...N2)) if (F2 && E2) {
      let q2 = n.length;
      q2 > 0 && n[q2 - 1].followingNode !== E2 && ln2(n, g), n.push(m2);
    } else F2 ? fe2(F2, l) : E2 ? le2(E2, l) : d ? ne2(d, l) : ne2(_2, l);
  }
  if (ln2(n, e), p2) for (let f of r) delete f.precedingNode, delete f.enclosingNode, delete f.followingNode;
}
var mn2 = (t) => !/[\S\n\u2028\u2029]/.test(t);
function _o2(t, e, r, n) {
  let { comment: o, precedingNode: u } = r[n], { locStart: i, locEnd: a } = e, s = i(o);
  if (u) for (let D2 = n - 1; D2 >= 0; D2--) {
    let { comment: c, precedingNode: p2 } = r[D2];
    if (p2 !== u || !mn2(t.slice(a(c), s))) break;
    s = i(c);
  }
  return J2(t, s, { backwards: true });
}
function Ao2(t, e, r, n) {
  let { comment: o, followingNode: u } = r[n], { locStart: i, locEnd: a } = e, s = a(o);
  if (u) for (let D2 = n + 1; D2 < r.length; D2++) {
    let { comment: c, followingNode: p2 } = r[D2];
    if (p2 !== u || !mn2(t.slice(s, i(c)))) break;
    s = a(c);
  }
  return J2(t, s);
}
function ln2(t, e) {
  let r = t.length;
  if (r === 0) return;
  let { precedingNode: n, followingNode: o } = t[0], u = e.locStart(o), i;
  for (i = r; i > 0; --i) {
    let { comment: a, precedingNode: s, followingNode: D2 } = t[i - 1];
    I2(s, n), I2(D2, o);
    let c = e.originalText.slice(e.locEnd(a), u);
    if (e.printer.isGap?.(c, e) ?? /^[\s(]*$/.test(c)) u = e.locStart(a);
    else break;
  }
  for (let [a, { comment: s }] of t.entries()) a < i ? fe2(n, s) : le2(o, s);
  for (let a of [n, o]) a.comments && a.comments.length > 1 && a.comments.sort((s, D2) => e.locStart(s) - e.locStart(D2));
  t.length = 0;
}
function Ut2(t, e, r) {
  let n = r.locStart(e) - 1;
  for (let o = 1; o < t.length; ++o) if (n < r.locStart(t[o])) return o - 1;
  return 0;
}
function xo2(t, e) {
  let r = e - 1;
  r = U2(t, r, { backwards: true }), r = z(t, r, { backwards: true }), r = U2(t, r, { backwards: true });
  let n = z(t, r, { backwards: true });
  return r !== n;
}
var Le2 = xo2;
var dn2 = () => true;
function Fn2(t, e) {
  let r = t.node;
  return r.printed = true, e.printer.printComment(t, e);
}
function To2(t, e) {
  let r = t.node, n = [Fn2(t, e)], { printer: o, originalText: u, locStart: i, locEnd: a } = e;
  if (o.isBlockComment?.(r)) {
    let c = " ";
    J2(u, a(r)) && (J2(u, i(r), { backwards: true }) ? c = $2 : c = et2), n.push(c);
  } else n.push($2);
  let D2 = z(u, U2(u, a(r)));
  return D2 !== false && J2(u, D2) && n.push($2), n;
}
function No2(t, e, r) {
  let n = t.node, o = Fn2(t, e), { printer: u, originalText: i, locStart: a } = e, s = u.isBlockComment?.(n);
  if (r?.hasLineSuffix && !r?.isBlock || J2(i, a(n), { backwards: true })) {
    let D2 = Le2(i, a(n));
    return { doc: Ie2([$2, D2 ? $2 : "", o]), isBlock: s, hasLineSuffix: true };
  }
  return !s || r?.hasLineSuffix ? { doc: [Ie2([" ", o]), ce2], isBlock: s, hasLineSuffix: true } : { doc: [" ", o], isBlock: s, hasLineSuffix: false };
}
function Bo2(t, e, r) {
  let n = e[/* @__PURE__ */ Symbol.for("printedComments")], o = r?.filter ?? dn2, u = new Set(t.node?.comments?.filter((i) => !n?.has(i) && i.leading && o(i)));
  return u.size === 0 ? "" : t.map(({ node: i }) => u.has(i) ? To2(t, e) : "", "comments").filter(Boolean);
}
function wo2(t, e, r) {
  let n = t.node?.comments, o = new Set(n?.filter((c) => c.trailing)), u = e[/* @__PURE__ */ Symbol.for("printedComments")], i = r?.filter ?? dn2, a = new Set(n?.filter((c) => o.has(c) && !u?.has(c) && i(c)));
  if (a.size === 0) return "";
  let s = [], D2;
  return t.each(({ node: c }) => {
    o.has(c) && (D2 = No2(t, e, D2), a.has(c) && s.push(D2.doc));
  }, "comments"), s;
}
function En2(t, e, r, n) {
  let o = Bo2(t, r, n), u = wo2(t, r, n);
  return o || u ? Ce(e, (i) => [o, i, u]) : e;
}
function Cn2(t) {
  let { [oe2]: e, [/* @__PURE__ */ Symbol.for("printedComments")]: r } = t;
  for (let n of e) {
    if (!n.printed && !r.has(n)) throw new Error('Comment "' + n.value.trim() + '" was not printed. Please report this error!');
    delete n.printed;
  }
}
var hn2 = () => I2;
var ve2 = class extends Error {
  name = "ConfigError";
};
var Me2 = class extends Error {
  name = "UndefinedParserError";
};
var So2 = Object.hasOwn ?? Function.prototype.call.bind(Object.prototype.hasOwnProperty);
var pe2 = So2;
var gn2 = { checkIgnorePragma: { category: "Special", type: "boolean", default: false, description: "Check whether the file's first docblock comment contains '@noprettier' or '@noformat' to determine if it should be formatted.", cliCategory: "Other" }, cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (t) => typeof t == "string" || typeof t == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }, { value: "mjml", description: "MJML" }] }, plugins: { type: "path", array: true, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (t) => typeof t == "string" || typeof t == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: false, description: "Require either '@prettier' or '@format' to be present in the file's first docblock comment in order for it to be formatted.", cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
function at2({ plugins: t = [], showDeprecated: e = false } = {}) {
  let r = t.flatMap((o) => o.languages ?? []), n = [];
  for (let o of Po2(Object.assign({}, ...t.map(({ options: u }) => u), gn2))) !e && o.deprecated || (Array.isArray(o.choices) && (e || (o.choices = o.choices.filter((u) => !u.deprecated)), o.name === "parser" && (o.choices = [...o.choices, ...Oo2(o.choices, r, t)])), o.pluginDefaults = Object.fromEntries(t.filter((u) => u.defaultOptions?.[o.name] !== void 0).map((u) => [u.name, u.defaultOptions[o.name]])), n.push(o));
  return { languages: r, options: n };
}
function* Oo2(t, e, r) {
  let n = new Set(t.map((o) => o.value));
  for (let o of e) if (o.parsers) {
    for (let u of o.parsers) if (!n.has(u)) {
      n.add(u);
      let i = r.find((s) => s.parsers && pe2(s.parsers, u)), a = o.name;
      i?.name && (a += ` (plugin: ${i.name})`), yield { value: u, description: a };
    }
  }
}
function Po2(t) {
  let e = [];
  for (let [r, n] of Object.entries(t)) {
    let o = { name: r, ...n };
    Array.isArray(o.default) && (o.default = A2(0, o.default, -1).value), e.push(o);
  }
  return e;
}
var bo2 = Array.prototype.toReversed ?? function() {
  return [...this].reverse();
};
var ko2 = Q("toReversed", function() {
  if (Array.isArray(this)) return bo2;
});
var yn2 = ko2;
function Io2() {
  let t = globalThis, e = t.process?.platform;
  if (typeof e == "string") return e.startsWith("win");
  let r = t.Deno?.build?.os;
  return typeof r == "string" ? r === "windows" : t.navigator?.platform?.startsWith("Win") ?? false;
}
var Ro2 = Io2();
function _n2(t) {
  if (t = t instanceof URL ? t : new URL(t), t.protocol !== "file:") throw new TypeError(`URL must be a file URL: received "${t.protocol}"`);
  return t;
}
function Lo2(t) {
  return t = _n2(t), decodeURIComponent(t.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function vo2(t) {
  t = _n2(t);
  let e = decodeURIComponent(t.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  return t.hostname !== "" && (e = `\\\\${t.hostname}${e}`), e;
}
function Wt2(t) {
  return Ro2 ? vo2(t) : Lo2(t);
}
var An2 = (t) => String(t).split(/[/\\]/).pop();
var xn2 = (t) => String(t).startsWith("file:");
function Tn2(t, e) {
  if (!e) return;
  let r = An2(e).toLowerCase();
  return t.find(({ filenames: n }) => n?.some((o) => o.toLowerCase() === r)) ?? t.find(({ extensions: n }) => n?.some((o) => r.endsWith(o)));
}
function Mo2(t, e) {
  if (e) return t.find(({ name: r }) => r.toLowerCase() === e) ?? t.find(({ aliases: r }) => r?.includes(e)) ?? t.find(({ extensions: r }) => r?.includes(`.${e}`));
}
var Yo2 = void 0;
function Nn2(t, e) {
  if (e) {
    if (xn2(e)) try {
      e = Wt2(e);
    } catch {
      return;
    }
    if (typeof e == "string") return t.find(({ isSupported: r }) => r?.({ filepath: e }));
  }
}
function jo2(t, e) {
  let r = yn2(0, t.plugins).flatMap((o) => o.languages ?? []);
  return (Mo2(r, e.language) ?? Tn2(r, e.physicalFile) ?? Tn2(r, e.file) ?? Nn2(r, e.physicalFile) ?? Nn2(r, e.file) ?? Yo2?.(r, e.physicalFile))?.parsers[0];
}
var Dt2 = jo2;
var se = { key: (t) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(t) ? t : JSON.stringify(t), value(t) {
  if (t === null || typeof t != "object") return JSON.stringify(t);
  if (Array.isArray(t)) return `[${t.map((r) => se.value(r)).join(", ")}]`;
  let e = Object.keys(t);
  return e.length === 0 ? "{}" : `{ ${e.map((r) => `${se.key(r)}: ${se.value(t[r])}`).join(", ")} }`;
}, pair: ({ key: t, value: e }) => se.value({ [t]: e }) };
var Bn2 = new Proxy(String, { get: () => Bn2 });
var G2 = Bn2;
var wn2 = (t, e, { descriptor: r }) => {
  let n = [`${G2.yellow(typeof t == "string" ? r.key(t) : r.pair(t))} is deprecated`];
  return e && n.push(`we now treat it as ${G2.blue(typeof e == "string" ? r.key(e) : r.pair(e))}`), n.join("; ") + ".";
};
var ct2 = /* @__PURE__ */ Symbol.for("vnopts.VALUE_NOT_EXIST");
var xe2 = /* @__PURE__ */ Symbol.for("vnopts.VALUE_UNCHANGED");
var Sn2 = " ".repeat(2);
var Pn2 = (t, e, r) => {
  let { text: n, list: o } = r.normalizeExpectedResult(r.schemas[t].expected(r)), u = [];
  return n && u.push(On2(t, e, n, r.descriptor)), o && u.push([On2(t, e, o.title, r.descriptor)].concat(o.values.map((i) => bn2(i, r.loggerPrintWidth))).join(`
`)), kn2(u, r.loggerPrintWidth);
};
function On2(t, e, r, n) {
  return [`Invalid ${G2.red(n.key(t))} value.`, `Expected ${G2.blue(r)},`, `but received ${e === ct2 ? G2.gray("nothing") : G2.red(n.value(e))}.`].join(" ");
}
function bn2({ text: t, list: e }, r) {
  let n = [];
  return t && n.push(`- ${G2.blue(t)}`), e && n.push([`- ${G2.blue(e.title)}:`].concat(e.values.map((o) => bn2(o, r - Sn2.length).replace(/^|\n/g, `$&${Sn2}`))).join(`
`)), kn2(n, r);
}
function kn2(t, e) {
  if (t.length === 1) return t[0];
  let [r, n] = t, [o, u] = t.map((i) => i.split(`
`, 1)[0].length);
  return o > e && o > u ? n : r;
}
var Te2 = [];
var $t2 = [];
function lt2(t, e, r) {
  if (t === e) return 0;
  let n = r?.maxDistance, o = t;
  t.length > e.length && (t = e, e = o);
  let u = t.length, i = e.length;
  for (; u > 0 && t.charCodeAt(~-u) === e.charCodeAt(~-i); ) u--, i--;
  let a = 0;
  for (; a < u && t.charCodeAt(a) === e.charCodeAt(a); ) a++;
  if (u -= a, i -= a, n !== void 0 && i - u > n) return n;
  if (u === 0) return n !== void 0 && i > n ? n : i;
  let s, D2, c, p2, f = 0, m2 = 0;
  for (; f < u; ) $t2[f] = t.charCodeAt(a + f), Te2[f] = ++f;
  for (; m2 < i; ) {
    for (s = e.charCodeAt(a + m2), c = m2++, D2 = m2, f = 0; f < u; f++) p2 = s === $t2[f] ? c : c + 1, c = Te2[f], D2 = Te2[f] = c > D2 ? p2 > D2 ? D2 + 1 : p2 : p2 > c ? c + 1 : p2;
    if (n !== void 0) {
      let l = D2;
      for (f = 0; f < u; f++) Te2[f] < l && (l = Te2[f]);
      if (l > n) return n;
    }
  }
  return Te2.length = u, $t2.length = u, n !== void 0 && D2 > n ? n : D2;
}
function In2(t, e, r) {
  if (!Array.isArray(e) || e.length === 0) return;
  let n = r?.maxDistance, o = t.length;
  for (let s of e) if (s === t) return s;
  if (n === 0) return;
  let u, i = Number.POSITIVE_INFINITY, a = /* @__PURE__ */ new Set();
  for (let s of e) {
    if (a.has(s)) continue;
    a.add(s);
    let D2 = Math.abs(s.length - o);
    if (D2 >= i || n !== void 0 && D2 > n) continue;
    let c = Number.isFinite(i) ? n === void 0 ? i : Math.min(i, n) : n, p2 = c === void 0 ? lt2(t, s) : lt2(t, s, { maxDistance: c });
    if (n !== void 0 && p2 > n) continue;
    let f = p2;
    if (c !== void 0 && p2 === c && c === n && (f = lt2(t, s)), f < i && (i = f, u = s, i === 0)) break;
  }
  if (!(n !== void 0 && i > n)) return u;
}
var ft2 = (t, e, { descriptor: r, logger: n, schemas: o }) => {
  let u = [`Ignored unknown option ${G2.yellow(r.pair({ key: t, value: e }))}.`], i = In2(t, Object.keys(o), { maxDistance: 3 });
  i && u.push(`Did you mean ${G2.blue(r.key(i))}?`), n.warn(u.join(" "));
};
var Uo2 = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
function Vo2(t, e) {
  let r = new t(e), n = Object.create(r);
  for (let o of Uo2) o in e && (n[o] = Wo2(e[o], r, O2.prototype[o].length));
  return n;
}
var O2 = class {
  static create(e) {
    return Vo2(this, e);
  }
  constructor(e) {
    this.name = e.name;
  }
  default(e) {
  }
  expected(e) {
    return "nothing";
  }
  validate(e, r) {
    return false;
  }
  deprecated(e, r) {
    return false;
  }
  forward(e, r) {
  }
  redirect(e, r) {
  }
  overlap(e, r, n) {
    return e;
  }
  preprocess(e, r) {
    return e;
  }
  postprocess(e, r) {
    return xe2;
  }
};
function Wo2(t, e, r) {
  return typeof t == "function" ? (...n) => t(...n.slice(0, r - 1), e, ...n.slice(r - 1)) : () => t;
}
var pt2 = class extends O2 {
  constructor(e) {
    super(e), this._sourceName = e.sourceName;
  }
  expected(e) {
    return e.schemas[this._sourceName].expected(e);
  }
  validate(e, r) {
    return r.schemas[this._sourceName].validate(e, r);
  }
  redirect(e, r) {
    return this._sourceName;
  }
};
var mt2 = class extends O2 {
  expected() {
    return "anything";
  }
  validate() {
    return true;
  }
};
var dt2 = class extends O2 {
  constructor({ valueSchema: e, name: r = e.name, ...n }) {
    super({ ...n, name: r }), this._valueSchema = e;
  }
  expected(e) {
    let { text: r, list: n } = e.normalizeExpectedResult(this._valueSchema.expected(e));
    return { text: r && `an array of ${r}`, list: n && { title: "an array of the following values", values: [{ list: n }] } };
  }
  validate(e, r) {
    if (!Array.isArray(e)) return false;
    let n = [];
    for (let o of e) {
      let u = r.normalizeValidateResult(this._valueSchema.validate(o, r), o);
      u !== true && n.push(u.value);
    }
    return n.length === 0 ? true : { value: n };
  }
  deprecated(e, r) {
    let n = [];
    for (let o of e) {
      let u = r.normalizeDeprecatedResult(this._valueSchema.deprecated(o, r), o);
      u !== false && n.push(...u.map(({ value: i }) => ({ value: [i] })));
    }
    return n;
  }
  forward(e, r) {
    let n = [];
    for (let o of e) {
      let u = r.normalizeForwardResult(this._valueSchema.forward(o, r), o);
      n.push(...u.map(Rn2));
    }
    return n;
  }
  redirect(e, r) {
    let n = [], o = [];
    for (let u of e) {
      let i = r.normalizeRedirectResult(this._valueSchema.redirect(u, r), u);
      "remain" in i && n.push(i.remain), o.push(...i.redirect.map(Rn2));
    }
    return n.length === 0 ? { redirect: o } : { redirect: o, remain: n };
  }
  overlap(e, r) {
    return e.concat(r);
  }
};
function Rn2({ from: t, to: e }) {
  return { from: [t], to: e };
}
var Ft2 = class extends O2 {
  expected() {
    return "true or false";
  }
  validate(e) {
    return typeof e == "boolean";
  }
};
function vn2(t, e) {
  let r = /* @__PURE__ */ Object.create(null);
  for (let n of t) {
    let o = n[e];
    if (r[o]) throw new Error(`Duplicate ${e} ${JSON.stringify(o)}`);
    r[o] = n;
  }
  return r;
}
function Mn2(t, e) {
  let r = /* @__PURE__ */ new Map();
  for (let n of t) {
    let o = n[e];
    if (r.has(o)) throw new Error(`Duplicate ${e} ${JSON.stringify(o)}`);
    r.set(o, n);
  }
  return r;
}
function Yn2() {
  let t = /* @__PURE__ */ Object.create(null);
  return (e) => {
    let r = JSON.stringify(e);
    return t[r] ? true : (t[r] = true, false);
  };
}
function jn2(t, e) {
  let r = [], n = [];
  for (let o of t) e(o) ? r.push(o) : n.push(o);
  return [r, n];
}
function Un2(t) {
  return t === Math.floor(t);
}
function Vn2(t, e) {
  if (t === e) return 0;
  let r = typeof t, n = typeof e, o = ["undefined", "object", "boolean", "number", "string"];
  return r !== n ? o.indexOf(r) - o.indexOf(n) : r !== "string" ? Number(t) - Number(e) : t.localeCompare(e);
}
function Wn2(t) {
  return (...e) => {
    let r = t(...e);
    return typeof r == "string" ? new Error(r) : r;
  };
}
function zt2(t) {
  return t === void 0 ? {} : t;
}
function Gt2(t) {
  if (typeof t == "string") return { text: t };
  let { text: e, list: r } = t;
  return $o2((e || r) !== void 0, "Unexpected `expected` result, there should be at least one field."), r ? { text: e, list: { title: r.title, values: r.values.map(Gt2) } } : { text: e };
}
function Kt2(t, e) {
  return t === true ? true : t === false ? { value: e } : t;
}
function Ht2(t, e, r = false) {
  return t === false ? false : t === true ? r ? true : [{ value: e }] : "value" in t ? [t] : t.length === 0 ? false : t;
}
function Ln2(t, e) {
  return typeof t == "string" || "key" in t ? { from: e, to: t } : "from" in t ? { from: t.from, to: t.to } : { from: e, to: t.to };
}
function Et2(t, e) {
  return t === void 0 ? [] : Array.isArray(t) ? t.map((r) => Ln2(r, e)) : [Ln2(t, e)];
}
function Jt2(t, e) {
  let r = Et2(typeof t == "object" && "redirect" in t ? t.redirect : t, e);
  return r.length === 0 ? { remain: e, redirect: r } : typeof t == "object" && "remain" in t ? { remain: t.remain, redirect: r } : { redirect: r };
}
function $o2(t, e) {
  if (!t) throw new Error(e);
}
var Ct2 = class extends O2 {
  constructor(e) {
    super(e), this._choices = Mn2(e.choices.map((r) => r && typeof r == "object" ? r : { value: r }), "value");
  }
  expected({ descriptor: e }) {
    let r = Array.from(this._choices.keys()).map((i) => this._choices.get(i)).filter(({ hidden: i }) => !i).map((i) => i.value).sort(Vn2).map(e.value), n = r.slice(0, -2), o = r.slice(-2);
    return { text: n.concat(o.join(" or ")).join(", "), list: { title: "one of the following values", values: r } };
  }
  validate(e) {
    return this._choices.has(e);
  }
  deprecated(e) {
    let r = this._choices.get(e);
    return r && r.deprecated ? { value: e } : false;
  }
  forward(e) {
    let r = this._choices.get(e);
    return r ? r.forward : void 0;
  }
  redirect(e) {
    let r = this._choices.get(e);
    return r ? r.redirect : void 0;
  }
};
var ht2 = class extends O2 {
  expected() {
    return "a number";
  }
  validate(e, r) {
    return typeof e == "number";
  }
};
var gt2 = class extends ht2 {
  expected() {
    return "an integer";
  }
  validate(e, r) {
    return r.normalizeValidateResult(super.validate(e, r), e) === true && Un2(e);
  }
};
var Ye2 = class extends O2 {
  expected() {
    return "a string";
  }
  validate(e) {
    return typeof e == "string";
  }
};
var $n2 = se;
var zn2 = ft2;
var Gn2 = Pn2;
var Kn2 = wn2;
var yt2 = class {
  constructor(e, r) {
    let { logger: n = console, loggerPrintWidth: o = 80, descriptor: u = $n2, unknown: i = zn2, invalid: a = Gn2, deprecated: s = Kn2, missing: D2 = () => false, required: c = () => false, preprocess: p2 = (m2) => m2, postprocess: f = () => xe2 } = r || {};
    this._utils = { descriptor: u, logger: n || { warn: () => {
    } }, loggerPrintWidth: o, schemas: vn2(e, "name"), normalizeDefaultResult: zt2, normalizeExpectedResult: Gt2, normalizeDeprecatedResult: Ht2, normalizeForwardResult: Et2, normalizeRedirectResult: Jt2, normalizeValidateResult: Kt2 }, this._unknownHandler = i, this._invalidHandler = Wn2(a), this._deprecatedHandler = s, this._identifyMissing = (m2, l) => !(m2 in l) || D2(m2, l), this._identifyRequired = c, this._preprocess = p2, this._postprocess = f, this.cleanHistory();
  }
  cleanHistory() {
    this._hasDeprecationWarned = Yn2();
  }
  normalize(e) {
    let r = {}, o = [this._preprocess(e, this._utils)], u = () => {
      for (; o.length !== 0; ) {
        let i = o.shift(), a = this._applyNormalization(i, r);
        o.push(...a);
      }
    };
    u();
    for (let i of Object.keys(this._utils.schemas)) {
      let a = this._utils.schemas[i];
      if (!(i in r)) {
        let s = zt2(a.default(this._utils));
        "value" in s && o.push({ [i]: s.value });
      }
    }
    u();
    for (let i of Object.keys(this._utils.schemas)) {
      if (!(i in r)) continue;
      let a = this._utils.schemas[i], s = r[i], D2 = a.postprocess(s, this._utils);
      D2 !== xe2 && (this._applyValidation(D2, i, a), r[i] = D2);
    }
    return this._applyPostprocess(r), this._applyRequiredCheck(r), r;
  }
  _applyNormalization(e, r) {
    let n = [], { knownKeys: o, unknownKeys: u } = this._partitionOptionKeys(e);
    for (let i of o) {
      let a = this._utils.schemas[i], s = a.preprocess(e[i], this._utils);
      this._applyValidation(s, i, a);
      let D2 = ({ from: m2, to: l }) => {
        n.push(typeof l == "string" ? { [l]: m2 } : { [l.key]: l.value });
      }, c = ({ value: m2, redirectTo: l }) => {
        let F2 = Ht2(a.deprecated(m2, this._utils), s, true);
        if (F2 !== false) if (F2 === true) this._hasDeprecationWarned(i) || this._utils.logger.warn(this._deprecatedHandler(i, l, this._utils));
        else for (let { value: d } of F2) {
          let E2 = { key: i, value: d };
          if (!this._hasDeprecationWarned(E2)) {
            let C2 = typeof l == "string" ? { key: l, value: d } : l;
            this._utils.logger.warn(this._deprecatedHandler(E2, C2, this._utils));
          }
        }
      };
      Et2(a.forward(s, this._utils), s).forEach(D2);
      let f = Jt2(a.redirect(s, this._utils), s);
      if (f.redirect.forEach(D2), "remain" in f) {
        let m2 = f.remain;
        r[i] = i in r ? a.overlap(r[i], m2, this._utils) : m2, c({ value: m2 });
      }
      for (let { from: m2, to: l } of f.redirect) c({ value: m2, redirectTo: l });
    }
    for (let i of u) {
      let a = e[i];
      this._applyUnknownHandler(i, a, r, (s, D2) => {
        n.push({ [s]: D2 });
      });
    }
    return n;
  }
  _applyRequiredCheck(e) {
    for (let r of Object.keys(this._utils.schemas)) if (this._identifyMissing(r, e) && this._identifyRequired(r)) throw this._invalidHandler(r, ct2, this._utils);
  }
  _partitionOptionKeys(e) {
    let [r, n] = jn2(Object.keys(e).filter((o) => !this._identifyMissing(o, e)), (o) => o in this._utils.schemas);
    return { knownKeys: r, unknownKeys: n };
  }
  _applyValidation(e, r, n) {
    let o = Kt2(n.validate(e, this._utils), e);
    if (o !== true) throw this._invalidHandler(r, o.value, this._utils);
  }
  _applyUnknownHandler(e, r, n, o) {
    let u = this._unknownHandler(e, r, this._utils);
    if (u) for (let i of Object.keys(u)) {
      if (this._identifyMissing(i, u)) continue;
      let a = u[i];
      i in this._utils.schemas ? o(i, a) : n[i] = a;
    }
  }
  _applyPostprocess(e) {
    let r = this._postprocess(e, this._utils);
    if (r !== xe2) {
      if (r.delete) for (let n of r.delete) delete e[n];
      if (r.override) {
        let { knownKeys: n, unknownKeys: o } = this._partitionOptionKeys(r.override);
        for (let u of n) {
          let i = r.override[u];
          this._applyValidation(i, u, this._utils.schemas[u]), e[u] = i;
        }
        for (let u of o) {
          let i = r.override[u];
          this._applyUnknownHandler(u, i, e, (a, s) => {
            let D2 = this._utils.schemas[a];
            this._applyValidation(s, a, D2), e[a] = s;
          });
        }
      }
    }
  }
};
var qt2;
function zo2(t, e, { logger: r = false, isCLI: n = false, passThrough: o = false, FlagSchema: u, descriptor: i } = {}) {
  if (n) {
    if (!u) throw new Error("'FlagSchema' option is required.");
    if (!i) throw new Error("'descriptor' option is required.");
  } else i = se;
  let a = o ? Array.isArray(o) ? (f, m2) => o.includes(f) ? { [f]: m2 } : void 0 : (f, m2) => ({ [f]: m2 }) : (f, m2, l) => {
    let { _: F2, ...d } = l.schemas;
    return ft2(f, m2, { ...l, schemas: d });
  }, s = Go2(e, { isCLI: n, FlagSchema: u }), D2 = new yt2(s, { logger: r, unknown: a, descriptor: i }), c = r !== false;
  c && qt2 && (D2._hasDeprecationWarned = qt2);
  let p2 = D2.normalize(t);
  return c && (qt2 = D2._hasDeprecationWarned), p2;
}
function Go2(t, { isCLI: e, FlagSchema: r }) {
  let n = [];
  e && n.push(mt2.create({ name: "_" }));
  for (let o of t) n.push(Ko2(o, { isCLI: e, optionInfos: t, FlagSchema: r })), o.alias && e && n.push(pt2.create({ name: o.alias, sourceName: o.name }));
  return n;
}
function Ko2(t, { isCLI: e, optionInfos: r, FlagSchema: n }) {
  let { name: o } = t, u = { name: o }, i, a = {};
  switch (t.type) {
    case "int":
      i = gt2, e && (u.preprocess = Number);
      break;
    case "string":
      i = Ye2;
      break;
    case "choice":
      i = Ct2, u.choices = t.choices.map((s) => s?.redirect ? { ...s, redirect: { to: { key: t.name, value: s.redirect } } } : s);
      break;
    case "boolean":
      i = Ft2;
      break;
    case "flag":
      i = n, u.flags = r.flatMap((s) => [s.alias, s.description && s.name, s.oppositeDescription && `no-${s.name}`].filter(Boolean));
      break;
    case "path":
      i = Ye2;
      break;
    default:
      throw new Error(`Unexpected type ${t.type}`);
  }
  if (t.exception ? u.validate = (s, D2, c) => t.exception(s) || D2.validate(s, c) : u.validate = (s, D2, c) => s === void 0 || D2.validate(s, c), t.redirect && (a.redirect = (s) => s ? { to: typeof t.redirect == "string" ? t.redirect : { key: t.redirect.option, value: t.redirect.value } } : void 0), t.deprecated && (a.deprecated = true), e && !t.array) {
    let s = u.preprocess || ((D2) => D2);
    u.preprocess = (D2, c, p2) => c.preprocess(s(Array.isArray(D2) ? A2(0, D2, -1) : D2), p2);
  }
  return t.array ? dt2.create({ ...e ? { preprocess: (s) => Array.isArray(s) ? s : [s] } : {}, ...a, valueSchema: i.create(u) }) : i.create({ ...u, ...a });
}
var Hn2 = zo2;
var Ho2 = Array.prototype.findLast ?? function(t) {
  for (let e = this.length - 1; e >= 0; e--) {
    let r = this[e];
    if (t(r, e, this)) return r;
  }
};
var Jo2 = Q("findLast", function() {
  if (Array.isArray(this)) return Ho2;
});
var Xt2 = Jo2;
var Jn2 = /* @__PURE__ */ Symbol.for("PRETTIER_IS_FRONT_MATTER");
var Qt2 = [];
function qo2(t) {
  return !!t?.[Jn2];
}
var me2 = qo2;
var qn2 = /* @__PURE__ */ new Set(["yaml", "toml"]);
var je2 = ({ node: t }) => me2(t) && qn2.has(t.language);
async function Zt2(t, e, r, n) {
  let { node: o } = r, { language: u } = o;
  if (!qn2.has(u)) return;
  let i = o.value.trim(), a;
  if (i) {
    let s = u === "yaml" ? u : Dt2(n, { language: u });
    if (!s) return;
    a = i ? await t(i, { parser: s }) : "";
  } else a = i;
  return Qe2([o.startDelimiter, o.explicitLanguage ?? "", $2, a, a ? $2 : "", o.endDelimiter]);
}
function Xo2(t, e) {
  return je2({ node: t }) && (delete e.end, delete e.raw, delete e.value), e;
}
var er2 = Xo2;
function Qo2({ node: t }) {
  return t.raw;
}
var tr2 = Qo2;
var Xn2 = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]);
var Zo2 = (t) => Object.keys(t).filter((e) => !Xn2.has(e));
function ei2(t, e) {
  let r = t ? (n) => t(n, Xn2) : Zo2;
  return e ? new Proxy(r, { apply: (n, o, u) => me2(u[0]) ? Qt2 : Reflect.apply(n, o, u) }) : r;
}
var rr2 = ei2;
function nr2(t, e) {
  if (!e) throw new Error("parserName is required.");
  let r = Xt2(0, t, (o) => o.parsers && pe2(o.parsers, e));
  if (r) return r;
  let n = `Couldn't resolve parser "${e}".`;
  throw n += " Plugins must be explicitly added to the standalone bundle.", new ve2(n);
}
function Qn2(t, e) {
  if (!e) throw new Error("astFormat is required.");
  let r = Xt2(0, t, (o) => o.printers && pe2(o.printers, e));
  if (r) return r;
  let n = `Couldn't find plugin for AST format "${e}".`;
  throw n += " Plugins must be explicitly added to the standalone bundle.", new ve2(n);
}
function Ue2({ plugins: t, parser: e }) {
  let r = nr2(t, e);
  return ur2(r, e);
}
function ur2(t, e) {
  let r = t.parsers[e];
  return typeof r == "function" ? r() : r;
}
async function Zn2(t, e) {
  let r = t.printers[e], n = typeof r == "function" ? await r() : r;
  return ni2(n);
}
function ti2(t) {
  let { features: e, getVisitorKeys: r, embed: n, massageAstNode: o, print: u, ...i } = t;
  e = si2(e);
  let a = e.experimental_frontMatterSupport;
  r = rr2(r, a.massageAstNode || a.embed || a.print);
  let s = o;
  o && a.massageAstNode && (s = new Proxy(o, { apply(f, m2, l) {
    return er2(...l), Reflect.apply(f, m2, l);
  } }));
  let D2 = n;
  if (n) {
    let f;
    D2 = new Proxy(n, { get(m2, l, F2) {
      return l === "getVisitorKeys" ? (f ?? (f = n.getVisitorKeys ? rr2(n.getVisitorKeys, a.massageAstNode || a.embed) : r), f) : Reflect.get(m2, l, F2);
    }, apply: (m2, l, F2) => a.embed && je2(...F2) ? Zt2 : Reflect.apply(m2, l, F2) });
  }
  let c = u;
  return a.print && (c = new Proxy(u, { apply(f, m2, l) {
    let [F2] = l;
    return me2(F2.node) ? tr2(F2) : Reflect.apply(f, m2, l);
  } })), { features: e, getVisitorKeys: r, embed: D2, massageAstNode: s, print: c, ...i };
}
var ri2 = /* @__PURE__ */ new WeakMap();
function ni2(t) {
  return Ee2(ri2, t, ti2);
}
var ui2 = ["clean", "embed", "print"];
var oi2 = Object.fromEntries(ui2.map((t) => [t, false]));
function ii2(t) {
  return { ...oi2, ...t };
}
function si2(t) {
  return { experimental_avoidAstMutation: false, ...t, experimental_frontMatterSupport: ii2(t?.experimental_frontMatterSupport) };
}
var eu = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null, getVisitorKeys: null };
async function ai2(t, e = {}) {
  let r = { ...t };
  if (!r.parser) {
    if (!r.filepath) throw new Me2("No parser and no file path given, couldn't infer a parser.");
    if (r.parser = Dt2(r, { physicalFile: r.filepath }), !r.parser) throw new Me2(`No parser could be inferred for file "${r.filepath}".`);
  }
  let n = at2({ plugins: t.plugins, showDeprecated: true }).options, o = { ...eu, ...Object.fromEntries(n.filter((p2) => p2.default !== void 0).map((p2) => [p2.name, p2.default])) }, u = nr2(r.plugins, r.parser), i = await ur2(u, r.parser);
  r.astFormat = i.astFormat, r.locEnd = i.locEnd, r.locStart = i.locStart;
  let a = u.printers?.[i.astFormat] ? u : Qn2(r.plugins, i.astFormat), s = await Zn2(a, i.astFormat);
  r.printer = s, r.getVisitorKeys = s.getVisitorKeys;
  let D2 = a.defaultOptions ? Object.fromEntries(Object.entries(a.defaultOptions).filter(([, p2]) => p2 !== void 0)) : {}, c = { ...o, ...D2 };
  for (let [p2, f] of Object.entries(c)) r[p2] ?? (r[p2] = f);
  return r.parser === "json" && (r.trailingComma = "none"), Hn2(r, n, { passThrough: Object.keys(eu), ...e });
}
var ae2 = ai2;
var tu = /\r\n|[\n\r\u2028\u2029]/;
function Di2(t, e, r, n) {
  let o = { column: null, line: -1, ...t.start }, u = { ...o, ...t.end }, { linesAbove: i = 2, linesBelow: a = 3 } = r || {}, s = o.line - n, D2 = o.column, c = u.line - n, p2 = u.column, f = Math.max(s - (i + 1), 0), m2 = Math.min(e.length, c + a);
  s === -1 && (f = 0), c === -1 && (m2 = e.length);
  let l = c - s, F2 = {};
  if (l) for (let d = 0; d <= l; d++) {
    let E2 = d + s;
    if (D2 == null) F2[E2] = true;
    else if (d === 0) {
      let C2 = e[E2 - 1].length;
      F2[E2] = [D2, C2 - D2];
    } else if (d === l) F2[E2] = [0, p2];
    else {
      let C2 = e[E2 - 1].length;
      F2[E2] = [0, C2];
    }
  }
  else if (D2 === p2) D2 != null ? F2[s] = [D2, 0] : F2[s] = true;
  else {
    let d = D2 ?? 0, E2 = p2 ?? d;
    F2[s] = [d, E2 - d];
  }
  return { start: f, end: m2, markerLines: F2 };
}
function ru(t, e, r = {}, n) {
  let { defs: o, highlight: u } = n || { defs: { gutter: String, marker: String, message: String, reset: String }, highlight: String }, i = (r.startLine || 1) - 1, a = t.split(tu), { start: s, end: D2, markerLines: c } = Di2(e, a, r, i), p2 = e.start && typeof e.start.column == "number", f = String(D2 + i).length, l = u(t).split(tu, D2).slice(s, D2).map((F2, d) => {
    let E2 = s + 1 + d, g = ` ${` ${E2 + i}`.slice(-f)} |`, _2 = c[E2], P2 = !c[E2 + 1];
    if (_2) {
      let x2 = "";
      if (Array.isArray(_2)) {
        let N2 = F2.slice(0, _2[0]).replace(/[^\t]/g, " "), q2 = _2[1] || 1;
        x2 = [`
 `, o.gutter(g.replace(/\d/g, " ")), " ", N2, o.marker("^").repeat(q2)].join(""), P2 && r.message && (x2 += " " + o.message(r.message));
      }
      return [o.marker(">"), o.gutter(g), F2.length > 0 ? ` ${F2}` : "", x2].join("");
    } else return ` ${o.gutter(g)}${F2.length > 0 ? ` ${F2}` : ""}`;
  }).join(`
`);
  return r.message && !p2 && (l = `${" ".repeat(f + 1)}${r.message}
${l}`), o.reset(l);
}
function nu(t, e, r = {}) {
  return ru(t, e, r);
}
async function ci2(t, e) {
  let r = await Ue2(e), n = r.preprocess ? await r.preprocess(t, e) : t;
  e.originalText = n;
  let o;
  try {
    o = await r.parse(n, e, e);
  } catch (u) {
    li2(u, t);
  }
  return { text: n, ast: o };
}
function li2(t, e) {
  let { loc: r } = t;
  if (r) {
    let { start: n, end: o } = r;
    n && (n = { line: n.line, column: n.column - 1 }), o && (o = { line: o.line, column: o.column - 1 });
    let u = nu(e, { start: n, end: o }, { highlightCode: true });
    t.message += `
` + u, t.codeFrame = u;
  }
  throw t;
}
var de2 = ci2;
async function uu(t, e, r, n, o) {
  if (r.embeddedLanguageFormatting !== "auto") return;
  let { printer: u } = r, { embed: i } = u;
  if (!i) return;
  if (i.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/plugins#optional-embed");
  let { hasPrettierIgnore: a } = u, { getVisitorKeys: s } = i, D2 = [];
  f();
  let c = t.stack;
  for (let { print: m2, node: l, pathStack: F2 } of D2) try {
    t.stack = F2;
    let d = await m2(p2, e, t, r);
    d && o.set(l, d);
  } catch (d) {
    if (globalThis.PRETTIER_DEBUG) throw d;
  }
  t.stack = c;
  function p2(m2, l) {
    return fi2(m2, l, r, n);
  }
  function f() {
    let { node: m2 } = t;
    if (m2 === null || typeof m2 != "object" || a?.(t)) return;
    for (let F2 of s(m2)) Array.isArray(m2[F2]) ? t.each(f, F2) : t.call(f, F2);
    let l = i(t, r);
    if (l) {
      if (typeof l == "function") {
        D2.push({ print: l, node: m2, pathStack: [...t.stack] });
        return;
      }
      o.set(m2, l);
    }
  }
}
async function fi2(t, e, r, n) {
  let o = await ae2({ ...r, ...e, parentParser: r.parser, originalText: t, cursorOffset: void 0, rangeStart: void 0, rangeEnd: void 0 }, { passThrough: true }), { ast: u } = await de2(t, o), i = await n(u, o);
  return He2(i);
}
function pi2(t, e, r, n) {
  let { originalText: o, [oe2]: u, locStart: i, locEnd: a, [/* @__PURE__ */ Symbol.for("printedComments")]: s } = e, { node: D2 } = t, c = i(D2), p2 = a(D2);
  for (let m2 of u) i(m2) >= c && a(m2) <= p2 && s.add(m2);
  let { printPrettierIgnored: f } = e.printer;
  return f ? f(t, e, r, n) : o.slice(c, p2);
}
var ou = pi2;
async function Ve2(t, e) {
  ({ ast: t } = await or2(t, e));
  let r = /* @__PURE__ */ new Map(), n = new un2(t), o = hn2(e), u = /* @__PURE__ */ new Map();
  await uu(n, a, e, Ve2, u);
  let i = await iu(n, e, a, void 0, u);
  if (Cn2(e), e.cursorOffset >= 0) {
    if (e.nodeAfterCursor && !e.nodeBeforeCursor) return [te2, i];
    if (e.nodeBeforeCursor && !e.nodeAfterCursor) return [i, te2];
  }
  return i;
  function a(D2, c) {
    return D2 === void 0 || D2 === n ? s(c) : Array.isArray(D2) ? n.call(() => s(c), ...D2) : n.call(() => s(c), D2);
  }
  function s(D2) {
    o(n);
    let c = n.node;
    if (c == null) return "";
    let p2 = ye2(c) && D2 === void 0;
    if (p2 && r.has(c)) return r.get(c);
    let f = iu(n, e, a, D2, u);
    return p2 && r.set(c, f), f;
  }
}
function iu(t, e, r, n, o) {
  let { node: u } = t, { printer: i } = e, a;
  switch (i.hasPrettierIgnore?.(t) ? a = ou(t, e, r, n) : o.has(u) ? a = o.get(u) : a = i.print(t, e, r, n), u) {
    case e.cursorNode:
      a = Ce(a, (s) => [te2, s, te2]);
      break;
    case e.nodeBeforeCursor:
      a = Ce(a, (s) => [s, te2]);
      break;
    case e.nodeAfterCursor:
      a = Ce(a, (s) => [te2, s]);
      break;
  }
  return i.printComment && ut2(u.comments) && !i.willPrintOwnComments?.(t, e) && (a = En2(t, a, e)), a;
}
async function or2(t, e) {
  let r = t.comments ?? [];
  e[oe2] = r, e[/* @__PURE__ */ Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), pn2(t, e);
  let { printer: { preprocess: n } } = e;
  return t = n ? await n(t, e) : t, { ast: t, comments: r };
}
function mi2(t, e) {
  let { cursorOffset: r, locStart: n, locEnd: o, getVisitorKeys: u } = e, i = (m2) => n(m2) <= r && o(m2) >= r, a = t, s = [t];
  for (let m2 of an2(t, { getVisitorKeys: u, filter: i })) s.push(m2), a = m2;
  if (Dn2(a, { getVisitorKeys: u })) return { cursorNode: a };
  let D2, c, p2 = -1, f = Number.POSITIVE_INFINITY;
  for (; s.length > 0 && (D2 === void 0 || c === void 0); ) {
    a = s.pop();
    let m2 = D2 !== void 0, l = c !== void 0;
    for (let F2 of Ae2(a, { getVisitorKeys: u })) {
      if (!m2) {
        let d = o(F2);
        d <= r && d > p2 && (D2 = F2, p2 = d);
      }
      if (!l) {
        let d = n(F2);
        d >= r && d < f && (c = F2, f = d);
      }
    }
  }
  return { nodeBeforeCursor: D2, nodeAfterCursor: c };
}
var ir2 = mi2;
function di2(t, e) {
  let { printer: r } = e, n = r.massageAstNode;
  if (!n) return t;
  let { getVisitorKeys: o } = r, { ignoredProperties: u } = n;
  return i(t);
  function i(a, s) {
    if (!ye2(a)) return a;
    if (Array.isArray(a)) return a.map((f) => i(f, s)).filter(Boolean);
    let D2 = {}, c = new Set(o(a));
    for (let f in a) !pe2(a, f) || u?.has(f) || (c.has(f) ? D2[f] = i(a[f], a) : D2[f] = a[f]);
    let p2 = n(a, D2, s);
    if (p2 !== null) return p2 ?? D2;
  }
}
var su = di2;
var Fi2 = Array.prototype.findLastIndex ?? function(t) {
  for (let e = this.length - 1; e >= 0; e--) {
    let r = this[e];
    if (t(r, e, this)) return e;
  }
  return -1;
};
var Ei2 = Q("findLastIndex", function() {
  if (Array.isArray(this)) return Fi2;
});
var au = Ei2;
function h(t) {
  let e = new Set(t);
  return (r) => e.has(r?.type);
}
var hf = h(["TSAsExpression", "TSSatisfiesExpression", "AsExpression", "AsConstExpression", "SatisfiesExpression"]);
var gf = h(["SatisfiesExpression", "TSSatisfiesExpression"]);
var yf = h(["TSUnionType", "UnionTypeAnnotation"]);
var _f = h(["TSIntersectionType", "IntersectionTypeAnnotation"]);
var Af = h(["TupleTypeAnnotation", "TSTupleType"]);
var xf = h(["TSConditionalType", "ConditionalTypeAnnotation"]);
var Tf = h(["TSTemplateLiteralType", "TemplateLiteralTypeAnnotation"]);
var Nf = h(["TSImportType", "ImportType"]);
var Bf = h(["TSExternalModuleReference", "ExternalModuleReference"]);
var wf = h(["TSTypeAliasDeclaration", "TypeAlias"]);
var Sf = h(["ReturnStatement", "ThrowStatement"]);
var Of = h(["ReturnStatement", "ThrowStatement", "YieldExpression", "UnaryExpression"]);
var Pf = h(["ExportDefaultDeclaration", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration", "DeclareExportAllDeclaration"]);
var Du = h(["TSExportAssignment", "ExportAssignment"]);
var bf = h(["AbstractMethodDefinition", "TSAbstractMethodDefinition"]);
var kf = h(["AbstractPropertyDefinition", "TSAbstractPropertyDefinition"]);
var If = h(["TSParameterProperty", "ParameterProperty"]);
var Rf = h(["TSNonNullExpression", "NonNullExpression"]);
var Lf = h(["ArrayExpression"]);
var vf = h(["ObjectExpression"]);
var Mf = h(["Literal", "BooleanLiteral", "BigIntLiteral", "DirectiveLiteral", "NullLiteral", "NumericLiteral", "RegExpLiteral", "StringLiteral"]);
var Yf = h(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"]);
var jf = h(["FunctionExpression", "ArrowFunctionExpression"]);
var Uf = h(["JSXElement", "JSXFragment"]);
var Vf = h(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
var Wf = h(["CallExpression", "OptionalCallExpression"]);
var $f = h(["MemberExpression", "OptionalMemberExpression"]);
var zf = h(["CallExpression", "OptionalCallExpression", "NewExpression"]);
var Gf = h(["CallExpression", "OptionalCallExpression", "NewExpression", "ImportExpression"]);
var Kf = h(["ChainExpression", "TSNonNullExpression", "NonNullExpression"]);
var Hf = h(["TSArrayType", "ArrayTypeAnnotation"]);
var Jf = h(["TSTypeParameterInstantiation", "TypeParameterInstantiation"]);
var qf = h(["TSTypeAnnotation", "TypeAnnotation"]);
var Xf = h(["TSModuleDeclaration", "DeclareModule", "DeclareNamespace"]);
var Qf = h(["TSConstructorType", "ConstructorTypeAnnotation"]);
var Zf = h(["ClassDeclaration", "ClassExpression"]);
var ep = h(["ImportNamespaceSpecifier", "ExportNamespaceSpecifier"]);
var tp = h(["TSEnumDeclaration", "EnumDeclaration", "DeclareEnum"]);
var rp = h(["TSEnumBody", "EnumBody"]);
function Ci2(t, e) {
  return e = new Set(e), t.find((r) => lu.has(r.type) && e.has(r));
}
function cu(t) {
  let e = au(0, t, (r) => r.type !== "Program" && r.type !== "File");
  return e === -1 ? t : t.slice(0, e + 1);
}
function hi2(t, e, r) {
  let { locStart: n, locEnd: o } = r, [u, ...i] = t, [a, ...s] = e;
  if (u === a) return [u, a];
  let D2 = n(u);
  for (let p2 of cu(s)) if (n(p2) >= D2) a = p2;
  else break;
  let c = o(a);
  for (let p2 of cu(i)) {
    if (o(p2) <= c) ar2(r, p2) && (u = p2);
    else break;
    if (u === a) break;
  }
  return [u, a];
}
function sr2(t, e, r, n, o = [], u, i) {
  let { locStart: a, locEnd: s } = i, D2 = a(t), c = s(t);
  if (e > c || e < D2 || u === "rangeEnd" && e === D2 || u === "rangeStart" && e === c) return;
  let p2 = [t, ...o], f = st2(t, p2, { cache: Vt, locStart: a, locEnd: s, getVisitorKeys: r.getVisitorKeys, filter: r.printer.canAttachComment, getChildren: r.printer.getCommentChildNodes });
  for (let m2 of f) {
    let l = sr2(m2, e, r, n, p2, u, i);
    if (l) return l;
  }
  if (n(t, o[0])) return p2;
}
function gi2(t, e) {
  return e?.type === "ForStatement" && e.init === t || (e?.type === "ForInStatement" || e?.type === "ForOfStatement") && e.left === t;
}
function yi2(t, e) {
  let { type: r } = t;
  return e?.type !== "DeclareExportDeclaration" && r !== "TypeParameterDeclaration" && r !== "TSTypeParameterDeclaration" && !(r === "VariableDeclaration" && gi2(t, e)) && (r === "Directive" || r === "TypeAlias" || Du(t) || r.startsWith("Declare") || r.startsWith("TSDeclare") || r.endsWith("Statement") || r.endsWith("Declaration"));
}
var lu = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]);
var _i2 = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
function ar2(t, e, r) {
  if (!e) return false;
  switch (t.parser) {
    case "flow":
    case "hermes":
    case "babel":
    case "babel-flow":
    case "babel-ts":
    case "typescript":
    case "acorn":
    case "espree":
    case "meriyah":
    case "oxc":
    case "oxc-ts":
    case "yuku":
    case "yuku-ts":
    case "__babel_estree":
      return yi2(e, r);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return lu.has(e.type);
    case "graphql":
      return _i2.has(e.kind);
    case "vue":
      return e.tag !== "root";
  }
  return false;
}
function fu(t, e, r) {
  let { rangeStart: n, rangeEnd: o } = e;
  I2(o > n);
  let u = t.slice(n, o).search(/\S/), i = u === -1;
  if (!i) for (n += u; o > n && !/\S/.test(t[o - 1]); --o) ;
  let a = e.printer.features?.experimental_locForRangeFormat ?? e, s = sr2(r, n, e, (l, F2) => ar2(e, l, F2), [], "rangeStart", a);
  if (!s) return;
  let D2 = i ? s : sr2(r, o, e, (l) => ar2(e, l), [], "rangeEnd", a);
  if (!D2) return;
  let c, p2;
  if (r.type === "JsonRoot") {
    let l = Ci2(s, D2);
    c = l, p2 = l;
  } else [c, p2] = hi2(s, D2, e);
  let { locStart: f, locEnd: m2 } = a;
  return [Math.min(f(c), f(p2)), Math.max(m2(c), m2(p2))];
}
var pu = /* @__PURE__ */ Symbol("cursor");
async function Fu(t, e, r = 0) {
  if (!t || t.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: n, text: o } = await de2(t, e);
  e.cursorOffset >= 0 && (e = { ...e, ...ir2(n, e) });
  let u = await Ve2(n, e, r);
  r > 0 && (u = Ze2([$2, u], r, e.tabWidth));
  let i = he2(u, e);
  if (r > 0) {
    let s = i.formatted.trim();
    i.cursorNodeStart !== void 0 && (i.cursorNodeStart -= i.formatted.indexOf(s), i.cursorNodeStart < 0 && (i.cursorNodeStart = 0, i.cursorNodeText = i.cursorNodeText.trimStart()), i.cursorNodeStart + i.cursorNodeText.length > s.length && (i.cursorNodeText = i.cursorNodeText.trimEnd())), i.formatted = s + Se2(e.endOfLine);
  }
  let a = e[oe2];
  if (e.cursorOffset >= 0) {
    let s, D2, c, p2;
    if ((e.cursorNode || e.nodeBeforeCursor || e.nodeAfterCursor) && i.cursorNodeText) if (c = i.cursorNodeStart, p2 = i.cursorNodeText, e.cursorNode) s = e.locStart(e.cursorNode), D2 = o.slice(s, e.locEnd(e.cursorNode));
    else {
      if (!e.nodeBeforeCursor && !e.nodeAfterCursor) throw new Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");
      s = e.nodeBeforeCursor ? e.locEnd(e.nodeBeforeCursor) : 0;
      let E2 = e.nodeAfterCursor ? e.locStart(e.nodeAfterCursor) : o.length;
      D2 = o.slice(s, E2);
    }
    else s = 0, D2 = o, c = 0, p2 = i.formatted;
    let f = e.cursorOffset - s;
    if (D2 === p2) return { formatted: i.formatted, cursorOffset: c + f, comments: a };
    let m2 = D2.split("");
    m2.splice(f, 0, pu);
    let l = p2.split(""), F2 = Nt2(m2, l), d = c;
    for (let E2 of F2) if (E2.removed) {
      if (E2.value.includes(pu)) break;
    } else d += E2.count;
    return { formatted: i.formatted, cursorOffset: d, comments: a };
  }
  return { formatted: i.formatted, cursorOffset: -1, comments: a };
}
async function Ai2(t, e) {
  let { ast: r, text: n } = await de2(t, e), [o, u] = fu(n, e, r) ?? [0, 0], i = n.slice(o, u), a = Math.min(o, n.lastIndexOf(`
`, o) + 1), s = n.slice(a, o).match(/^\s*/)[0], D2 = ge2(s, e.tabWidth), c = await Fu(i, { ...e, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: e.cursorOffset > o && e.cursorOffset <= u ? e.cursorOffset - o : -1, endOfLine: "lf" }, D2), p2 = c.formatted.trimEnd(), { cursorOffset: f } = e;
  f > u ? f += p2.length - i.length : c.cursorOffset >= 0 && (f = c.cursorOffset + o);
  let m2 = n.slice(0, o) + p2 + n.slice(u);
  if (e.endOfLine !== "lf") {
    let l = Se2(e.endOfLine);
    f >= 0 && l === `\r
` && (f += wt2(m2.slice(0, f), `
`)), m2 = ue2(0, m2, `
`, l);
  }
  return { formatted: m2, cursorOffset: f, comments: c.comments };
}
function Dr2(t, e, r) {
  return typeof e != "number" || Number.isNaN(e) || e < 0 || e > t.length ? r : e;
}
function mu(t, e) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: o } = e;
  return r = Dr2(t, r, -1), n = Dr2(t, n, 0), o = Dr2(t, o, t.length), { ...e, cursorOffset: r, rangeStart: n, rangeEnd: o };
}
function Eu(t, e) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: o, endOfLine: u } = mu(t, e), i = rn2(t);
  if (i && (t = t.slice(1), r--, n--, o--), u === "auto" && (u = gr2(t)), t.includes("\r")) {
    let a = (s) => wt2(t.slice(0, Math.max(s, 0)), `\r
`);
    r -= a(r), n -= a(n), o -= a(o), t = yr2(t);
  }
  return { hasBom: i, text: t, options: mu(t, { ...e, cursorOffset: r, rangeStart: n, rangeEnd: o, endOfLine: u }) };
}
async function du(t, e) {
  let r = await Ue2(e);
  return !r.hasPragma || r.hasPragma(t);
}
async function xi2(t, e) {
  return (await Ue2(e)).hasIgnorePragma?.(t);
}
async function cr2(t, e) {
  let { hasBom: r, text: n, options: o } = Eu(t, await ae2(e));
  if (o.rangeStart >= o.rangeEnd && n !== "" || o.requirePragma && !await du(n, o) || o.checkIgnorePragma && await xi2(n, o)) return { formatted: t, cursorOffset: e.cursorOffset, comments: [] };
  let u;
  return o.rangeStart > 0 || o.rangeEnd < n.length ? u = await Ai2(n, o) : (!o.requirePragma && o.insertPragma && o.printer.insertPragma && !await du(n, o) && (n = o.printer.insertPragma(n)), u = await Fu(n, o)), r && (u.formatted = nn2(u.formatted), u.cursorOffset >= 0 && u.cursorOffset++), u;
}
async function Cu(t, e, r) {
  let { text: n, options: o } = Eu(t, await ae2(e)), u = await de2(n, o);
  return r && (r.preprocessForPrint && (u.ast = await or2(u.ast, o)), r.massage && (u.ast = su(u.ast, o))), u;
}
async function hu(t, e) {
  e = await ae2(e);
  let r = await Ve2(t, e);
  return he2(r, e);
}
async function gu(t, e) {
  let r = Wr2(t), { formatted: n } = await cr2(r, { ...e, parser: "__js_expression" });
  return n;
}
async function yu(t, e) {
  e = await ae2(e);
  let { ast: r } = await de2(t, e);
  return e.cursorOffset >= 0 && (e = { ...e, ...ir2(r, e) }), Ve2(r, e);
}
async function _u(t, e) {
  return he2(t, await ae2(e));
}
var lr2 = {};
xt2(lr2, { builders: () => Ni2, printer: () => Bi2, utils: () => wi2 });
var Ni2 = { join: Je2, line: et2, softline: jr2, hardline: $2, literalline: qe, group: Ot2, conditionalGroup: Lr2, fill: Rr2, lineSuffix: Ie2, lineSuffixBoundary: Ur2, cursor: te2, breakParent: ce2, ifBreak: vr2, trim: Vr2, indent: ie2, indentIfBreak: Mr2, align: De2, addAlignmentToDoc: Ze2, markAsRoot: Qe2, dedentToRoot: kr2, dedent: Ir2, hardlineWithoutBreakParent: ke2, literallineWithoutBreakParent: Pt2, label: Yr2, concat: (t) => t };
var Bi2 = { printDocToString: he2 };
var wi2 = { willBreak: Nr2, traverseDoc: Oe2, findInDoc: Ke2, mapDoc: be2, removeLines: wr2, stripTrailingHardline: He2, replaceEndOfLine: Sr2, canBreak: Or2 };
var Au = "3.10.0";
var pr2 = {};
xt2(pr2, { addDanglingComment: () => ne2, addLeadingComment: () => le2, addTrailingComment: () => fe2, getAlignmentSize: () => ge2, getIndentSize: () => xu, getMaxContinuousCount: () => Tu, getNextNonSpaceNonCommentCharacter: () => Nu, getNextNonSpaceNonCommentCharacterIndex: () => Ui2, getPreferredQuote: () => Su, getStringWidth: () => Re2, hasNewline: () => J2, hasNewlineInRange: () => Ou, hasSpaces: () => Pu, isNextLineEmpty: () => Gi2, isNextLineEmptyAfterIndex: () => _t2, isPreviousLineEmpty: () => Wi2, makeString: () => zi2, skip: () => _e2, skipEverythingButNewLine: () => it2, skipInlineComment: () => Ne2, skipNewline: () => z, skipSpaces: () => U2, skipToLineEnd: () => ot, skipTrailingComment: () => Be3, skipWhitespace: () => on2 });
function Si2(t, e) {
  if (e === false) return false;
  if (t.charAt(e) === "/" && t.charAt(e + 1) === "*") {
    for (let r = e + 2; r < t.length; ++r) if (t.charAt(r) === "*" && t.charAt(r + 1) === "/") return r + 2;
  }
  return e;
}
var Ne2 = Si2;
function Oi2(t, e) {
  return e === false ? false : t.charAt(e) === "/" && t.charAt(e + 1) === "/" ? it2(t, e) : e;
}
var Be3 = Oi2;
function Pi2(t, e) {
  let r = null, n = e;
  for (; n !== r; ) r = n, n = U2(t, n), n = Ne2(t, n), n = Be3(t, n), n = z(t, n);
  return n;
}
var We2 = Pi2;
function bi2(t, e) {
  let r = null, n = e;
  for (; n !== r; ) r = n, n = ot(t, n), n = Ne2(t, n), n = U2(t, n);
  return n = Be3(t, n), n = z(t, n), n !== false && J2(t, n);
}
var _t2 = bi2;
function ki2(t, e) {
  let r = t.lastIndexOf(`
`);
  return r === -1 ? 0 : ge2(t.slice(r + 1).match(/^[\t ]*/)[0], e);
}
var xu = ki2;
function fr2(t) {
  if (typeof t != "string") throw new TypeError("Expected a string");
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Ii2(t, e) {
  let r = t.matchAll(new RegExp(`(?:${fr2(e)})+`, "g"));
  return r.reduce || (r = [...r]), r.reduce((n, [o]) => Math.max(n, o.length), 0) / e.length;
}
var Tu = Ii2;
function Ri2(t, e) {
  let r = We2(t, e);
  return r === false ? "" : t.charAt(r);
}
var Nu = Ri2;
var Bu = Object.freeze({ character: "'", codePoint: 39 });
var wu = Object.freeze({ character: '"', codePoint: 34 });
var Li2 = Object.freeze({ preferred: Bu, alternate: wu });
var vi2 = Object.freeze({ preferred: wu, alternate: Bu });
function Su(t, e) {
  let { preferred: r, alternate: n } = e === true || e === "'" ? Li2 : vi2, { length: o } = t, u = 0, i = 0;
  for (let a = 0; a < o; a++) {
    let s = t.charCodeAt(a);
    s === r.codePoint ? u++ : s === n.codePoint && i++;
  }
  return (u > i ? n : r).character;
}
function Mi2(t, e, r) {
  for (let n = e; n < r; ++n) if (t.charAt(n) === `
`) return true;
  return false;
}
var Ou = Mi2;
function Yi2(t, e, r = {}) {
  return U2(t, r.backwards ? e - 1 : e, r) !== e;
}
var Pu = Yi2;
function ji2(t, e, r) {
  return We2(t, r(e));
}
function Ui2(t, e) {
  return arguments.length === 2 || typeof e == "number" ? We2(t, e) : ji2(...arguments);
}
function Vi2(t, e, r) {
  return Le2(t, r(e));
}
function Wi2(t, e) {
  return arguments.length === 2 || typeof e == "number" ? Le2(t, e) : Vi2(...arguments);
}
function $i2(t, e, r) {
  return _t2(t, r(e));
}
function zi2(t, e, r) {
  let n = e === '"' ? "'" : '"', u = ue2(0, t, /\\(.)|(["'])/gs, (i, a, s) => a === n ? a : s === e ? "\\" + s : s || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(a) ? a : "\\" + a));
  return e + u + e;
}
function Gi2(t, e) {
  return arguments.length === 2 || typeof e == "number" ? _t2(t, e) : $i2(...arguments);
}
function Fe2(t, e = 1) {
  return async (...r) => {
    let n = r[e] ?? {}, o = n.plugins ?? [];
    return r[e] = { ...n, plugins: Array.isArray(o) ? o : Object.values(o) }, await t(...r);
  };
}
var bu = Fe2(cr2);
async function ku(t, e) {
  let { formatted: r } = await bu(t, { ...e, cursorOffset: -1 });
  return r;
}
async function Ki2(t, e) {
  return await ku(t, e) === t;
}
var Hi2 = Fe2(at2, 0);
var Ji2 = { parse: Fe2(Cu), formatAST: Fe2(hu), formatDoc: Fe2(gu), printToDoc: Fe2(yu), printDocToString: Fe2(_u) };

// node_modules/@forsakringskassan/docs-live-example/dist/esm/index.js
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, createCommentVNode as _createCommentVNode, vModelRadio as _vModelRadio, withDirectives as _withDirectives, openBlock as _openBlock, createElementBlock as _createElementBlock, Fragment as _Fragment } from "vue";
import { compile, defineComponent, h as h2 } from "vue";
import { resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock2, createElementBlock as _createElementBlock2, createCommentVNode as _createCommentVNode2, createElementVNode as _createElementVNode2, Fragment as _Fragment2, renderSlot as _renderSlot, normalizeClass as _normalizeClass } from "vue";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __copyProps = (to3, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to3, key) && key !== except)
        __defProp(to3, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to3;
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
        if (node.children.every((el2) => typeof el2 === "string")) {
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
    function source(re3) {
      if (!re3) return null;
      if (typeof re3 === "string") return re3;
      return re3.source;
    }
    function lookahead(re3) {
      return concat("(?=", re3, ")");
    }
    function anyNumberOfTimes(re3) {
      return concat("(?:", re3, ")*");
    }
    function optional(re3) {
      return concat("(?:", re3, ")?");
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
    function countMatchGroups(re3) {
      return new RegExp(re3.toString() + "|").exec("").length - 1;
    }
    function startsWith(re3, lexeme) {
      const match = re3 && re3.exec(lexeme);
      return match && match.index === 0;
    }
    var BACKREF_RE = new RegExp(either(
      /\[(?:[^\\\]]|\\.)*\]/,
      // a character class, inside which ( and \ lose their meaning
      /\(\?<(?![=!])[^>]+>/,
      // a named capture group `(?<name>` (not a lookbehind `(?<=` / `(?<!`)
      /\(\?'[^']+'/,
      // a named capture group `(?'name'`
      /\(\??/,
      // an opening parenthesis, capturing or non-capturing / lookahead
      /\\([1-9][0-9]*)/,
      // a backreference like `\1`
      /\\./
      // any other escape sequence
    ));
    function _rewriteBackreferences(regexps, { joinWith }) {
      let numCaptures = 0;
      return regexps.map((regex) => {
        numCaptures += 1;
        const offset = numCaptures;
        let re3 = source(regex);
        let out = "";
        while (re3.length > 0) {
          const match = BACKREF_RE.exec(re3);
          if (!match) {
            out += re3;
            break;
          }
          out += re3.substring(0, match.index);
          re3 = re3.substring(match.index + match[0].length);
          if (match[0][0] === "\\" && match[1]) {
            out += "\\" + String(Number(match[1]) + offset);
          } else {
            out += match[0];
            if (match[0] === "(" || /^\(\?[<']/.test(match[0])) {
              numCaptures++;
            }
          }
        }
        return out;
      }).map((re3) => `(${re3})`).join(joinWith);
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
        addRule(re3, opts) {
          opts.position = this.position++;
          this.matchIndexes[this.matchAt] = opts;
          this.regexes.push([opts, re3]);
          this.matchAt += countMatchGroups(re3) + 1;
        }
        compile() {
          if (this.regexes.length === 0) {
            this.exec = () => null;
          }
          const terminators = this.regexes.map((el2) => el2[1]);
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
          const i = match.findIndex((el2, i2) => i2 > 0 && el2 !== void 0);
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
          this.rules.slice(index).forEach(([re3, opts]) => matcher.addRule(re3, opts));
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
        addRule(re3, opts) {
          this.rules.push([re3, opts]);
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
    var version = "11.12.0";
    var HTMLInjectionError = class extends Error {
      constructor(reason, html) {
        super(reason);
        this.name = "HTMLInjectionError";
        this.html = html;
      }
    };
    var escape = escapeHTML;
    var inherit = inherit$1;
    var NO_MATCH = /* @__PURE__ */ Symbol("nomatch");
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
            if (match.index === codeToHighlight.length) ;
            else {
              modeBuffer += "\n";
            }
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
        const sorted = results.sort((a, b3) => {
          if (a.relevance !== b3.relevance) return b3.relevance - a.relevance;
          if (a.language && b3.language) {
            if (getLanguage(a.language).supersetOf === b3.language) {
              return 1;
            } else if (getLanguage(b3.language).supersetOf === a.language) {
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
      function deprecateHighlightBlock(el2) {
        deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
        deprecated("10.7.0", "Please use highlightElement now.");
        return highlightElement(el2);
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
    const startHeight = `${String(element.offsetHeight)}px`;
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
    animation.addEventListener("cancel", () => {
      element.classList.remove(ClassNames.COLLAPSING);
      isClosing = false;
    });
  }
  function open() {
    let currentHeight = 0;
    if (animation) {
      currentHeight = element.getBoundingClientRect().height;
    }
    element.setAttribute("aria-expanded", "true");
    window.requestAnimationFrame(() => {
      expand(currentHeight);
    });
  }
  function expand(currentHeight) {
    isExpanding = true;
    if (animation) {
      animation.cancel();
      element.style.height = "";
    }
    const startHeight = `${String(currentHeight)}px`;
    const endHeight = `${String(element.offsetHeight)}px`;
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
    animation.addEventListener("cancel", () => {
      element.classList.remove(ClassNames.EXPANDING);
      isExpanding = false;
    });
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
  const b3 = 1597334677;
  const c = 2246822507;
  const d = 3266489909;
  const e = 4294967296;
  const f = 2097151;
  const seed = 0;
  let h1 = 3735928559 ^ seed;
  let h22 = 1103547991 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.codePointAt(i);
    h1 = Math.imul(h1 ^ ch, a);
    h22 = Math.imul(h22 ^ ch, b3);
    i += ch > 65535 ? 2 : 1;
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
          subLanguage: "css"
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
          subLanguage: "javascript"
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
  plugins: [as],
  singleQuote: false,
  arrowParens: "always",
  tabWidth: 4,
  printWidth: 80
};
async function highlight(code) {
  const formatted = await ku(code, prettierConfig);
  const { value } = core_default.highlight(formatted, { language: "html" });
  return `<code class="hljs lang-html" tabindex="0">${value}</code>`;
}
function stripComments(html) {
  const commentPattern = /<!--.*?-->/g;
  return html.replaceAll(commentPattern, "");
}
async function getSourceCode(options) {
  const { language, template, element } = options;
  if (language === "original") {
    return await highlight(template);
  }
  const html = element.innerHTML;
  const uncommented = stripComments(html);
  return await highlight(uncommented);
}
function toKebabCase(input) {
  return input.replaceAll(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($3, ofs) => (ofs ? "-" : "") + $3.toLowerCase()
  );
}
var LiveExampleSourcecode_default = /* @__PURE__ */ _defineComponent({
  __name: "LiveExampleSourcecode",
  props: {
    element: { type: null, required: true },
    template: { type: String, required: true },
    templateLanguage: { type: String, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    let idPrefix = generateId(props.template);
    const sourcecode = ref("");
    const expandable = useTemplateRef("expandableRef");
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
          class: "code-preview__button",
          "aria-controls": $setup.id("code-expand"),
          "aria-expanded": $setup.animation.isOpen ? "true" : "false",
          onClick: $setup.onToggleCode
        }, [
          _cache[2] || (_cache[2] = _createElementVNode(
            "i",
            { class: "docs-icon icon--code" },
            null,
            -1
            /* CACHED */
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
        ref: "expandableRef",
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
              /* CACHED */
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
    },
    forceSingleColumn: {
      type: Boolean,
      required: false
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
    containerClasses() {
      const classes = ["live-example__container"];
      if (this.forceSingleColumn) {
        classes.push("live-example__container--single-column");
      }
      return classes;
    },
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
var _hoisted_14 = {
  ref: "example",
  class: "live-example__example user-background"
};
var _hoisted_22 = { key: 0 };
var _hoisted_32 = ["innerHTML"];
var _hoisted_42 = { key: 2 };
var _hoisted_52 = { class: "live-example__controls" };
var _hoisted_62 = {
  key: 0,
  class: "live-example__code"
};
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_live_vue_code = _resolveComponent("live-vue-code");
  const _component_live_example_sourcecode = _resolveComponent("live-example-sourcecode");
  return _openBlock2(), _createElementBlock2(
    "div",
    {
      class: _normalizeClass(_ctx.containerClasses)
    },
    [
      _createElementVNode2(
        "div",
        _hoisted_14,
        [
          _ctx.templateLanguage === "vue" ? (_openBlock2(), _createElementBlock2("div", _hoisted_22, [
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
              _createElementVNode2("div", { innerHTML: _ctx.template }, null, 8, _hoisted_32)
            ],
            2112
            /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
          )) : (_openBlock2(), _createElementBlock2("div", _hoisted_42, [..._cache[0] || (_cache[0] = [
            _createElementVNode2(
              "pre",
              null,
              "Unknown language, cannot render example",
              -1
              /* CACHED */
            )
          ])]))
        ],
        512
        /* NEED_PATCH */
      ),
      _createElementVNode2("div", _hoisted_52, [
        _renderSlot(_ctx.$slots, "default")
      ]),
      _ctx.exampleElement ? (_openBlock2(), _createElementBlock2("div", _hoisted_62, [
        _createVNode(_component_live_example_sourcecode, {
          element: _ctx.exampleElement,
          template: _ctx.template,
          "template-language": _ctx.templateLanguage
        }, null, 8, ["element", "template", "template-language"])
      ])) : _createCommentVNode2("v-if", true)
    ],
    2
    /* CLASS */
  );
}
LiveExample_default.render = render2;
LiveExample_default.__file = "src/LiveExample.vue";
var LiveExample_default2 = LiveExample_default;
var voidElements = /* @__PURE__ */ new Set([
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
]);
function unpackArgs(args) {
  if (args.length === 0) {
    return { attributes: {}, children: [] };
  }
  if (args.length === 1) {
    const [arg02] = args;
    if (typeof arg02 === "string") {
      return { attributes: {}, children: [arg02] };
    }
    if (Array.isArray(arg02)) {
      return { attributes: {}, children: arg02 };
    }
    return { attributes: arg02, children: [] };
  }
  const [arg0, arg1] = args;
  return { attributes: arg0, children: Array.isArray(arg1) ? arg1 : [arg1] };
}
function serializeChildren(children) {
  if (children.length > 0) {
    return ` ${children.join(" ")} `;
  }
  return "";
}
function serializeAttribute(key, value, prefix = "") {
  if (Array.isArray(value)) {
    const tokens = value.map((it3) => it3 ? String(it3) : null).filter(Boolean);
    if (tokens.length > 0) {
      return `${prefix}${key}="${tokens.join(" ")}"`;
    }
    return [];
  }
  if (value === null || value === void 0) {
    return [];
  }
  if (typeof value === "string" || typeof value === "number") {
    return `${prefix}${key}="${String(value)}"`;
  }
  if (typeof value === "boolean") {
    return value ? `${prefix}${key}` : [];
  }
  return Object.entries(value).flatMap(([nestedKey, value2]) => {
    return serializeAttribute(nestedKey, value2, `${prefix}${key}-`);
  }).filter(Boolean);
}
function serializeAttributes(attrs) {
  const entries = Object.entries(attrs);
  const kv = entries.map(
    ([key, value]) => serializeAttribute(toKebabCase(key), value)
  );
  const flat = kv.flat();
  if (flat.length > 0) {
    return ` ${kv.flat().join(" ")}`;
  }
  return "";
}
function createElement(tagName, ...args) {
  const { attributes, children } = unpackArgs(args);
  const attrs = serializeAttributes(attributes);
  if (voidElements.has(tagName)) {
    return `<${tagName}${attrs}>`;
  }
  const content = serializeChildren(children);
  return `<${tagName}${attrs}>${content}</${tagName}>`;
}
export {
  LiveExample_default2 as LiveExample,
  createElement
};
