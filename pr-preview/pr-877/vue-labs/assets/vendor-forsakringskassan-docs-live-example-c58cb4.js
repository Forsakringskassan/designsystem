// ../../node_modules/@forsakringskassan/docs-live-example/dist/esm/index.js
import { defineComponent as defineComponent2 } from "vue";
import { defineComponent as _defineComponent } from "vue";
import { computed, nextTick, onMounted, ref, useTemplateRef, watch } from "vue";

// ../../node_modules/prettier/plugins/html.mjs
var Jr = Object.defineProperty;
var Zr = (e) => {
  throw TypeError(e);
};
var ks = (e, t, r) => t in e ? Jr(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r;
var en = (e, t) => {
  for (var r in t) Jr(e, r, { get: t[r], enumerable: true });
};
var ir = (e, t, r) => ks(e, typeof t != "symbol" ? t + "" : t, r);
var As = (e, t, r) => t.has(e) || Zr("Cannot " + r);
var $e = (e, t, r) => (As(e, t, "read from private field"), r ? r.call(e) : t.get(e));
var tn = (e, t, r) => t.has(e) ? Zr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r);
var ws = {};
en(ws, { languages: () => ms, options: () => ds, parsers: () => Qr, printers: () => xl });
var Ae = (e, t) => (r, n, ...i) => r | 1 && n == null ? void 0 : (t.call(n) ?? n[e]).apply(n, i);
var ys = String.prototype.replaceAll ?? function(e, t) {
  return e.global ? this.replace(e, t) : this.split(e).join(t);
};
var xs = Ae("replaceAll", function() {
  if (typeof this == "string") return ys;
});
var w = xs;
function Ns(e) {
  return this[e < 0 ? this.length + e : e];
}
var Ls = Ae("at", function() {
  if (Array.isArray(this) || typeof this == "string") return Ns;
});
var F = Ls;
var Ps = () => {
};
var ze = Ps;
var Ye = "string";
var je = "array";
var _t = "cursor";
var ye = "indent";
var xe = "align";
var St = "trim";
var Ne = "group";
var Le = "fill";
var Pe = "if-break";
var Oe = "indent-if-break";
var Et = "line-suffix";
var Ct = "line-suffix-boundary";
var Y = "line";
var vt = "label";
var De = "break-parent";
var Tt = /* @__PURE__ */ new Set([_t, ye, xe, St, Ne, Le, Pe, Oe, Et, Ct, Y, vt, De]);
function Os(e) {
  if (typeof e == "string") return Ye;
  if (Array.isArray(e)) return je;
  if (!e) return;
  let { type: t } = e;
  if (Tt.has(t)) return t;
}
var bt = Os;
var Ds = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function Rs(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (bt(e)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = Ds([...Tt].map((i) => `'${i}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
var sr = class extends Error {
  name = "InvalidDocError";
  constructor(t) {
    super(Rs(t)), this.doc = t;
  }
};
var rn = sr;
function ar(e, t) {
  if (typeof e == "string") return t(e);
  let r = /* @__PURE__ */ new Map();
  return n(e);
  function n(s) {
    if (r.has(s)) return r.get(s);
    let a = i(s);
    return r.set(s, a), a;
  }
  function i(s) {
    switch (bt(s)) {
      case je:
        return t(s.map(n));
      case Le:
        return t({ ...s, parts: s.parts.map(n) });
      case Pe:
        return t({ ...s, breakContents: n(s.breakContents), flatContents: n(s.flatContents) });
      case Ne: {
        let { expandedStates: a, contents: o } = s;
        return a ? (a = a.map(n), o = a[0]) : o = n(o), t({ ...s, contents: o, expandedStates: a });
      }
      case xe:
      case ye:
      case Oe:
      case vt:
      case Et:
        return t({ ...s, contents: n(s.contents) });
      case Ye:
      case _t:
      case St:
      case Ct:
      case Y:
      case De:
        return t(s);
      default:
        throw new rn(s);
    }
  }
}
function L(e, t = nn) {
  return ar(e, (r) => typeof r == "string" ? q(t, r.split(`
`)) : r);
}
var D = ze;
var wt = ze;
var sn = ze;
var an = ze;
function y(e) {
  return D(e), { type: ye, contents: e };
}
function Is(e, t) {
  return an(e), D(t), { type: xe, contents: t, n: e };
}
function on(e) {
  return Is(Number.NEGATIVE_INFINITY, e);
}
var j = { type: De };
function kt(e) {
  return sn(e), { type: Le, parts: e };
}
function C(e, t = {}) {
  return D(e), wt(t.expandedStates, true), { type: Ne, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function X(e, t = "", r = {}) {
  return D(e), t !== "" && D(t), { type: Pe, breakContents: e, flatContents: t, groupId: r.groupId };
}
function ln(e, t) {
  return D(e), { type: Oe, contents: e, groupId: t.groupId, negate: t.negate };
}
function q(e, t) {
  D(e), wt(t);
  let r = [];
  for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
  return r;
}
var _ = { type: Y };
var k = { type: Y, soft: true };
var Ms = { type: Y, hard: true };
var v = [Ms, j];
var Bs = { type: Y, hard: true, literal: true };
var nn = [Bs, j];
var cn = Object.freeze({ character: "'", codePoint: 39 });
var un = Object.freeze({ character: '"', codePoint: 34 });
var Fs = Object.freeze({ preferred: cn, alternate: un });
var qs = Object.freeze({ preferred: un, alternate: cn });
function Hs(e, t) {
  let { preferred: r, alternate: n } = t === true || t === "'" ? Fs : qs, { length: i } = e, s = 0, a = 0;
  for (let o = 0; o < i; o++) {
    let c = e.charCodeAt(o);
    c === r.codePoint ? s++ : c === n.codePoint && a++;
  }
  return (s > a ? n : r).character;
}
var pn = Hs;
function or(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
var lr = class {
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
    return this.#e.has(F(0, t, -1));
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
    let n = `[${or([...this.#e].join(""))}]+`, i = new RegExp(r ? `(${n})` : n, "u");
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
var hn = lr;
var Vs = ["	", `
`, "\f", "\r", " "];
var Us = new hn(Vs);
var x = Us;
var cr = class extends Error {
  name = "UnexpectedNodeError";
  constructor(t, r, n = "type") {
    super(`Unexpected ${r} node ${n}: ${JSON.stringify(t[n])}.`), this.node = t;
  }
};
var mn = cr;
var Ws = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan", "keySpan", "tagDefinition", "tokens", "valueTokens", "switchValueSourceSpan", "expSourceSpan", "valueSourceSpan"]);
var Gs = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function fn(e, t, r) {
  if (e.kind === "text" || e.kind === "comment") return null;
  if (e.kind === "yaml" && delete t.value, e.kind === "attribute") {
    let { fullName: n, value: i } = e;
    n === "style" || n === "class" || n === "srcset" && (r.fullName === "img" || r.fullName === "source") || n === "allow" && r.fullName === "iframe" || n.startsWith("on") || n.startsWith("@") || n.startsWith(":") || n.startsWith(".") || n.startsWith("#") || n.startsWith("v-") || n === "vars" && r.fullName === "style" || (n === "setup" || n === "generic") && r.fullName === "script" || n === "slot-scope" || n.startsWith("(") || n.startsWith("[") || n.startsWith("*") || n.startsWith("bind") || n.startsWith("i18n") || n.startsWith("on-") || n.startsWith("ng-") || i?.includes("{{") ? delete t.value : i && (t.value = w(0, i, /'|&quot;|&apos;/gu, '"'));
  }
  if (e.kind === "docType" && (t.value = w(0, e.value.toLowerCase(), /\s+/gu, " ")), e.kind === "angularControlFlowBlock" && e.parameters?.children) for (let n of t.parameters.children) Gs.has(e.name) ? delete n.expression : n.expression = n.expression.trim();
  e.kind === "angularIcuExpression" && (t.switchValue = e.switchValue.trim()), e.kind === "angularLetDeclarationInitializer" && delete t.value, e.kind === "element" && e.isVoid && !e.isSelfClosing && (t.isSelfClosing = true);
}
fn.ignoredProperties = Ws;
var dn = fn;
function K(e, t = true) {
  return [y([k, e]), t ? k : ""];
}
function W(e, t) {
  let r = e.type === "NGRoot" ? e.node.type === "NGMicrosyntax" && e.node.body.length === 1 && e.node.body[0].type === "NGMicrosyntaxExpression" ? e.node.body[0].expression : e.node : e.type === "JsExpressionRoot" ? e.node : e;
  return r && (r.type === "ObjectExpression" || r.type === "ArrayExpression" || (t.parser === "__vue_expression" || t.parser === "__vue_ts_expression") && (r.type === "TemplateLiteral" || r.type === "StringLiteral"));
}
async function A(e, t, r, n) {
  r = { __isInHtmlAttribute: true, __embeddedInHtml: true, ...r };
  let i = true;
  n && (r.__onHtmlBindingRoot = (a, o) => {
    i = n(a, o);
  });
  let s = await t(e, r, t);
  return i ? C(s) : K(s);
}
function $s(e, t, r, n) {
  let { node: i } = r, s = n.originalText.slice(i.sourceSpan.start.offset, i.sourceSpan.end.offset);
  return /^\s*$/u.test(s) ? "" : A(s, e, { parser: "__ng_directive", __isInHtmlAttribute: false }, W);
}
var gn = $s;
var zs = Array.prototype.toReversed ?? function() {
  return [...this].reverse();
};
var Ys = Ae("toReversed", function() {
  if (Array.isArray(this)) return zs;
});
var _n = Ys;
function js() {
  let e = globalThis, t = e.Deno?.build?.os;
  return typeof t == "string" ? t === "windows" : e.navigator?.platform?.startsWith("Win") ?? e.process?.platform?.startsWith("win") ?? false;
}
var Xs = js();
function Sn(e) {
  if (e = e instanceof URL ? e : new URL(e), e.protocol !== "file:") throw new TypeError(`URL must be a file URL: received "${e.protocol}"`);
  return e;
}
function Ks(e) {
  return e = Sn(e), decodeURIComponent(e.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function Qs(e) {
  e = Sn(e);
  let t = decodeURIComponent(e.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  return e.hostname !== "" && (t = `\\\\${e.hostname}${t}`), t;
}
function ur(e) {
  return Xs ? Qs(e) : Ks(e);
}
var En = (e) => String(e).split(/[/\\]/u).pop();
var Cn = (e) => String(e).startsWith("file:");
function Js(e) {
  return Array.isArray(e) && e.length > 0;
}
var Re = Js;
function vn(e, t) {
  if (!t) return;
  let r = En(t).toLowerCase();
  return e.find(({ filenames: n }) => n?.some((i) => i.toLowerCase() === r)) ?? e.find(({ extensions: n }) => n?.some((i) => r.endsWith(i)));
}
function Zs(e, t) {
  if (t) return e.find(({ name: r }) => r.toLowerCase() === t) ?? e.find(({ aliases: r }) => r?.includes(t)) ?? e.find(({ extensions: r }) => r?.includes(`.${t}`));
}
var ea = void 0;
function Tn(e, t) {
  if (t) {
    if (Cn(t)) try {
      t = ur(t);
    } catch {
      return;
    }
    if (typeof t == "string") return e.find(({ isSupported: r }) => r?.({ filepath: t }));
  }
}
function ta(e, t) {
  let r = _n(0, e.plugins).flatMap((i) => i.languages ?? []);
  return (Zs(r, t.language) ?? vn(r, t.physicalFile) ?? vn(r, t.file) ?? Tn(r, t.physicalFile) ?? Tn(r, t.file) ?? ea?.(r, t.physicalFile))?.parsers[0];
}
var At = ta;
var yt = /* @__PURE__ */ Symbol.for("PRETTIER_IS_FRONT_MATTER");
function ra(e) {
  return !!e?.[yt];
}
var le = ra;
var Xe = 3;
function na(e) {
  let t = e.slice(0, Xe);
  if (t !== "---" && t !== "+++") return;
  let r = e.indexOf(`
`, Xe);
  if (r === -1) return;
  let n = e.slice(Xe, r).trim(), i = e.indexOf(`
${t}`, r), s = n;
  if (s || (s = t === "+++" ? "toml" : "yaml"), i === -1 && t === "---" && s === "yaml" && (i = e.indexOf(`
...`, r)), i === -1) return;
  let a = i + 1 + Xe, o = e.charAt(a + 1);
  if (!/\s?/u.test(o)) return;
  let c = e.slice(0, a), u;
  return { language: s, explicitLanguage: n || null, value: e.slice(r + 1, i), startDelimiter: t, endDelimiter: c.slice(-Xe), raw: c, start: { line: 1, column: 0, index: 0 }, end: { index: c.length, get line() {
    return u ?? (u = c.split(`
`)), u.length;
  }, get column() {
    return u ?? (u = c.split(`
`)), F(0, u, -1).length;
  } }, [yt]: true };
}
function ia(e) {
  let t = na(e);
  return t ? { frontMatter: t, get content() {
    let { raw: r } = t;
    return w(0, r, /[^\n]/gu, " ") + e.slice(r.length);
  } } : { content: e };
}
var pr = ia;
var bn = "inline";
var hr = { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", style: "none", template: "inline", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", dialog: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", search: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", menu: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", input: "inline-block", button: "inline-block", fieldset: "block", details: "block", summary: "block", marquee: "inline-block", select: "inline-block", source: "block", track: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", option: "block", optgroup: "block" };
var wn = "normal";
var mr = { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" };
function sa(e) {
  return e.kind === "element" && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace);
}
var ce = sa;
var aa = (e) => w(0, e, /^[\t\f\r ]*\n/gu, "");
var fr = (e) => aa(x.trimEnd(e));
var kn = (e) => {
  let t = e, r = x.getLeadingWhitespace(t);
  r && (t = t.slice(r.length));
  let n = x.getTrailingWhitespace(t);
  return n && (t = t.slice(0, -n.length)), { leadingWhitespace: r, trailingWhitespace: n, text: t };
};
function xt(e, t) {
  return !!(e.kind === "ieConditionalComment" && e.lastChild && !e.lastChild.isSelfClosing && !e.lastChild.endSourceSpan || e.kind === "ieConditionalComment" && !e.complete || ue(e) && e.children.some((r) => r.kind !== "text" && r.kind !== "interpolation") || Pt(e, t) && !H(e, t) && e.kind !== "interpolation");
}
function pe(e) {
  return e.kind === "attribute" || !e.parent || !e.prev ? false : oa(e.prev);
}
function oa(e) {
  return e.kind === "comment" && e.value.trim() === "prettier-ignore";
}
function O(e) {
  return e.kind === "text" || e.kind === "comment";
}
function H(e, t) {
  return e.kind === "element" && (e.fullName === "script" || e.fullName === "style" || e.fullName === "svg:style" || e.fullName === "svg:script" || e.fullName === "mj-style" && t.parser === "mjml" || ce(e) && (e.name === "script" || e.name === "style"));
}
function An(e, t) {
  return e.children && !H(e, t);
}
function yn(e, t) {
  return H(e, t) || e.kind === "interpolation" || dr(e);
}
function dr(e) {
  return Fn(e).startsWith("pre");
}
function xn(e, t) {
  let r = n();
  if (r && !e.prev && e.parent?.tagDefinition?.ignoreFirstLf) return e.kind === "interpolation";
  return r;
  function n() {
    return le(e) || e.kind === "angularControlFlowBlock" ? false : (e.kind === "text" || e.kind === "interpolation") && e.prev && (e.prev.kind === "text" || e.prev.kind === "interpolation") ? true : !e.parent || e.parent.cssDisplay === "none" ? false : ue(e.parent) ? true : !(!e.prev && (e.parent.kind === "root" || ue(e) && e.parent || H(e.parent, t) || Je(e.parent, t) || !ma(e.parent.cssDisplay)) || e.prev && !ga(e.prev.cssDisplay));
  }
}
function Nn(e, t) {
  return le(e) || e.kind === "angularControlFlowBlock" ? false : (e.kind === "text" || e.kind === "interpolation") && e.next && (e.next.kind === "text" || e.next.kind === "interpolation") ? true : !e.parent || e.parent.cssDisplay === "none" ? false : ue(e.parent) ? true : !(!e.next && (e.parent.kind === "root" || ue(e) && e.parent || H(e.parent, t) || Je(e.parent, t) || !fa(e.parent.cssDisplay)) || e.next && !da(e.next.cssDisplay));
}
function Ln(e, t) {
  return _a(e.cssDisplay) && !H(e, t);
}
function Ke(e) {
  return le(e) || e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line;
}
function Pn(e) {
  return gr(e) || e.kind === "element" && e.children.length > 0 && (["body", "script", "style"].includes(e.name) || e.children.some((t) => ca(t))) || e.firstChild && e.firstChild === e.lastChild && e.firstChild.kind !== "text" && Dn(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || Rn(e.lastChild));
}
function gr(e) {
  return e.kind === "element" && e.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(e.name) || e.cssDisplay.startsWith("table") && e.cssDisplay !== "table-cell");
}
function Nt(e) {
  return In(e) || e.prev && la(e.prev) || On(e);
}
function la(e) {
  return In(e) || e.kind === "element" && e.fullName === "br" || On(e);
}
function On(e) {
  return Dn(e) && Rn(e);
}
function Dn(e) {
  return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : e.parent.kind === "root" || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
}
function Rn(e) {
  return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : e.parent.kind === "root" || e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line);
}
function In(e) {
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
function Lt(e) {
  return e.lastChild ? Lt(e.lastChild) : e;
}
function ca(e) {
  return e.children?.some((t) => t.kind !== "text");
}
function Mn(e) {
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
function ua(e, t) {
  let { name: r, attrMap: n } = e;
  if (r !== "script" || Object.prototype.hasOwnProperty.call(n, "src")) return;
  let { type: i, lang: s } = e.attrMap;
  return !s && !i ? "babel" : At(t, { language: s }) ?? Mn(i);
}
function pa(e, t) {
  if (!Pt(e, t)) return;
  let { attrMap: r } = e;
  if (Object.prototype.hasOwnProperty.call(r, "src")) return;
  let { type: n, lang: i } = r;
  return At(t, { language: i }) ?? Mn(n);
}
function ha(e, t) {
  if (e.name === "style") {
    let { lang: r } = e.attrMap;
    return r ? At(t, { language: r }) : "css";
  }
  if (e.name === "mj-style" && t.parser === "mjml") return "css";
}
function _r(e, t) {
  return ua(e, t) ?? ha(e, t) ?? pa(e, t);
}
function Qe(e) {
  return e === "block" || e === "list-item" || e.startsWith("table");
}
function ma(e) {
  return !Qe(e) && e !== "inline-block";
}
function fa(e) {
  return !Qe(e) && e !== "inline-block";
}
function da(e) {
  return !Qe(e);
}
function ga(e) {
  return !Qe(e);
}
function _a(e) {
  return !Qe(e) && e !== "inline-block";
}
function ue(e) {
  return Fn(e).startsWith("pre");
}
function Sa(e, t) {
  let r = e;
  for (; r; ) {
    if (t(r)) return true;
    r = r.parent;
  }
  return false;
}
function Bn(e, t) {
  if (he(e, t)) return "block";
  if (e.prev?.kind === "comment") {
    let n = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);
    if (n) return n[1];
  }
  let r = false;
  if (e.kind === "element" && e.namespace === "svg") if (Sa(e, (n) => n.fullName === "svg:foreignObject")) r = true;
  else return e.name === "svg" ? "inline-block" : "block";
  switch (t.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";
    case "ignore":
      return "block";
    default:
      if (e.kind === "element" && (!e.namespace || r || ce(e)) && Object.prototype.hasOwnProperty.call(hr, e.name)) return hr[e.name];
  }
  return bn;
}
function Fn(e) {
  return e.kind === "element" && (!e.namespace || ce(e)) && Object.prototype.hasOwnProperty.call(mr, e.name) ? mr[e.name] : wn;
}
function Sr(e) {
  return w(0, w(0, e, "&apos;", "'"), "&quot;", '"');
}
function b(e) {
  return Sr(e.value);
}
var Ea = /* @__PURE__ */ new Set(["template", "style", "script"]);
function Je(e, t) {
  return he(e, t) && !Ea.has(e.fullName);
}
function he(e, t) {
  return t.parser === "vue" && e.kind === "element" && e.parent.kind === "root" && e.fullName.toLowerCase() !== "html";
}
function Pt(e, t) {
  return he(e, t) && (Je(e, t) || e.attrMap.lang && e.attrMap.lang !== "html");
}
function qn(e) {
  let t = e.fullName;
  return t.charAt(0) === "#" || t === "slot-scope" || t === "v-slot" || t.startsWith("v-slot:");
}
function Hn(e, t) {
  let r = e.parent;
  if (!he(r, t)) return false;
  let n = r.fullName, i = e.fullName;
  return n === "script" && i === "setup" || n === "style" && i === "vars";
}
function Ot(e, t = e.value) {
  return e.parent.isWhitespaceSensitive ? e.parent.isIndentationSensitive ? L(t) : L(x.dedentString(fr(t)), v) : q(_, x.split(t));
}
function Dt(e, t) {
  return he(e, t) && e.name === "script";
}
function Ca(e) {
  let { valueSpan: t, value: r } = e;
  return t.end.offset - t.start.offset === r.length + 2;
}
function Rt(e, t) {
  if (Ca(e)) return false;
  let { value: r } = e;
  return /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(r) || t.parser === "lwc" && r.startsWith("{") && r.endsWith("}");
}
var Vn = /\{\{(.+?)\}\}/su;
var Un = ({ node: { value: e } }) => Vn.test(e);
async function Wn(e, t, r) {
  let n = b(r.node), i = [];
  for (let [s, a] of n.split(Vn).entries()) if (s % 2 === 0) i.push(L(a));
  else try {
    i.push(C(["{{", y([_, await A(a, e, { parser: "__ng_interpolation", __isInHtmlInterpolation: true })]), _, "}}"]));
  } catch {
    i.push("{{", L(a), "}}");
  }
  return i;
}
var Er = (e) => (t, r, n) => A(b(n.node), t, { parser: e }, W);
var va = [{ test(e) {
  let t = e.node.fullName;
  return t.startsWith("(") && t.endsWith(")") || t.startsWith("on-");
}, print: Er("__ng_action") }, { test(e) {
  let t = e.node.fullName;
  return t.startsWith("[") && t.endsWith("]") || /^bind(?:on)?-/u.test(t) || /^ng-(?:if|show|hide|class|style)$/u.test(t);
}, print: Er("__ng_binding") }, { test: (e) => e.node.fullName.startsWith("*"), print: Er("__ng_directive") }, { test: (e) => /^i18n(?:-.+)?$/u.test(e.node.fullName), print: Ta }, { test: Un, print: Wn }].map(({ test: e, print: t }) => ({ test: (r, n) => n.parser === "angular" && e(r), print: t }));
function Ta(e, t, { node: r }) {
  let n = b(r);
  return K(kt(Ot(r, n.trim())), !n.includes("@@"));
}
var Gn = va;
var $n = ({ node: e }, t) => !t.parentParser && e.fullName === "class" && !e.value.includes("{{");
var zn = (e, t, r) => b(r.node).trim().split(/\s+/u).join(" ");
var Cr = ["onabort", "onafterprint", "onauxclick", "onbeforeinput", "onbeforematch", "onbeforeprint", "onbeforetoggle", "onbeforeunload", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncommand", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncopy", "oncuechange", "oncut", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "onhashchange", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onlanguagechange", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmessage", "onmessageerror", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onoffline", "ononline", "onpagehide", "onpagereveal", "onpageshow", "onpageswap", "onpaste", "onpause", "onplay", "onplaying", "onpopstate", "onprogress", "onratechange", "onrejectionhandled", "onreset", "onresize", "onscroll", "onscrollend", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onstorage", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onunhandledrejection", "onunload", "onvolumechange", "onwaiting", "onwheel"];
var wa = new Set(Cr);
var Yn = ({ node: e }, t) => wa.has(e.fullName) && !t.parentParser && !e.value.includes("{{");
var jn = (e, t, r) => A(b(r.node), e, { parser: "babel", __isHtmlInlineEventHandler: true }, () => false);
function ka(e) {
  let t = [];
  for (let r of e.split(";")) {
    if (r = x.trim(r), !r) continue;
    let [n, ...i] = x.split(r);
    t.push({ name: n, value: i });
  }
  return t;
}
var Xn = ka;
var Kn = ({ node: e }, t) => e.fullName === "allow" && !t.parentParser && e.parent.fullName === "iframe" && !e.value.includes("{{");
function Qn(e, t, r) {
  let { node: n } = r, i = Xn(b(n));
  return i.length === 0 ? [""] : K(i.map(({ name: s, value: a }, o) => [[s, ...a].join(" "), o === i.length - 1 ? X(";") : [";", _]]));
}
function Jn(e) {
  return e === "	" || e === `
` || e === "\f" || e === "\r" || e === " ";
}
var Aa = /^[ \t\n\r\u000c]+/;
var ya = /^[, \t\n\r\u000c]+/;
var xa = /^[^ \t\n\r\u000c]+/;
var Na = /[,]+$/;
var Zn = /^\d+$/;
var La = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
function Pa(e) {
  let t = e.length, r, n, i, s, a, o = 0, c;
  function u(m) {
    let g, E = m.exec(e.substring(o));
    if (E) return [g] = E, o += g.length, g;
  }
  let p = [];
  for (; ; ) {
    if (u(ya), o >= t) {
      if (p.length === 0) throw new Error("Must contain one or more image candidate strings.");
      return p;
    }
    c = o, r = u(xa), n = [], r.slice(-1) === "," ? (r = r.replace(Na, ""), S2()) : d();
  }
  function d() {
    for (u(Aa), i = "", s = "in descriptor"; ; ) {
      if (a = e.charAt(o), s === "in descriptor") if (Jn(a)) i && (n.push(i), i = "", s = "after descriptor");
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
      else if (s === "after descriptor" && !Jn(a)) if (a === "") {
        S2();
        return;
      } else s = "in descriptor", o -= 1;
      o += 1;
    }
  }
  function S2() {
    let m = false, g, E, P2, z2, oe2 = {}, ee2, gt2, ke2, Ge2, nr2;
    for (z2 = 0; z2 < n.length; z2++) ee2 = n[z2], gt2 = ee2[ee2.length - 1], ke2 = ee2.substring(0, ee2.length - 1), Ge2 = parseInt(ke2, 10), nr2 = parseFloat(ke2), Zn.test(ke2) && gt2 === "w" ? ((g || E) && (m = true), Ge2 === 0 ? m = true : g = Ge2) : La.test(ke2) && gt2 === "x" ? ((g || E || P2) && (m = true), nr2 < 0 ? m = true : E = nr2) : Zn.test(ke2) && gt2 === "h" ? ((P2 || E) && (m = true), Ge2 === 0 ? m = true : P2 = Ge2) : m = true;
    if (!m) oe2.source = { value: r, startOffset: c }, g && (oe2.width = { value: g }), E && (oe2.density = { value: E }), P2 && (oe2.height = { value: P2 }), p.push(oe2);
    else throw new Error(`Invalid srcset descriptor found in "${e}" at "${ee2}".`);
  }
}
var ei = Pa;
var ti = (e) => e.node.fullName === "srcset" && (e.parent.fullName === "img" || e.parent.fullName === "source");
var ri = { width: "w", height: "h", density: "x" };
var Oa = Object.keys(ri);
function ni(e, t, r) {
  let n = b(r.node), i = ei(n), s = Oa.filter((m) => i.some((g) => Object.prototype.hasOwnProperty.call(g, m)));
  if (s.length > 1) throw new Error("Mixed descriptor in srcset is not supported");
  let [a] = s, o = ri[a], c = i.map((m) => m.source.value), u = Math.max(...c.map((m) => m.length)), p = i.map((m) => m[a] ? String(m[a].value) : ""), d = p.map((m) => {
    let g = m.indexOf(".");
    return g === -1 ? m.length : g;
  }), S2 = Math.max(...d);
  return K(q([",", _], c.map((m, g) => {
    let E = [m], P2 = p[g];
    if (P2) {
      let z2 = u - m.length + 1, oe2 = S2 - d[g], ee2 = " ".repeat(z2 + oe2);
      E.push(X(ee2, " "), P2 + o);
    }
    return E;
  })));
}
var ii = ({ node: e }, t) => e.fullName === "style" && !t.parentParser && !e.value.includes("{{");
var si = async (e, t, r) => K(await e(b(r.node), { parser: "css", __isHTMLStyleAttribute: true }));
var vr = /* @__PURE__ */ new WeakMap();
function Da(e, t) {
  let { root: r } = e;
  return vr.has(r) || vr.set(r, r.children.some((n) => Dt(n, t) && ["ts", "typescript"].includes(n.attrMap.lang))), vr.get(r);
}
var G = Da;
function ai(e, t, r) {
  let n = b(r.node);
  return A(`type T<${n}> = any`, e, { parser: "babel-ts", __isEmbeddedTypescriptGenericParameters: true }, W);
}
function oi(e, t, r, n) {
  let i = b(r.node), s = G(r, n) ? "babel-ts" : "babel";
  return A(`function _(${i}) {}`, e, { parser: s, __isVueBindings: true });
}
async function li(e, t, r, n) {
  let i = b(r.node), { left: s, operator: a, right: o } = Ra(i), c = G(r, n);
  return [C(await A(`function _(${s}) {}`, e, { parser: c ? "babel-ts" : "babel", __isVueForBindingLeft: true })), " ", a, " ", await A(o, e, { parser: c ? "__ts_expression" : "__js_expression" })];
}
function Ra(e) {
  let t = /(.*?)\s+(in|of)\s+(.*)/su, r = /,([^,\]}]*)(?:,([^,\]}]*))?$/u, n = /^\(|\)$/gu, i = e.match(t);
  if (!i) return;
  let s = { for: i[3].trim() };
  if (!s.for) return;
  let a = w(0, i[1].trim(), n, ""), o = a.match(r);
  o ? (s.alias = a.replace(r, ""), s.iterator1 = o[1].trim(), o[2] && (s.iterator2 = o[2].trim())) : s.alias = a;
  let c = [s.alias, s.iterator1, s.iterator2];
  if (!c.some((u, p) => !u && (p === 0 || c.slice(p + 1).some(Boolean)))) return { left: c.filter(Boolean).join(","), operator: i[2], right: s.for };
}
var Ia = [{ test: (e) => e.node.fullName === "v-for", print: li }, { test: (e, t) => e.node.fullName === "generic" && Dt(e.parent, t), print: ai }, { test: ({ node: e }, t) => qn(e) || Hn(e, t), print: oi }, { test(e) {
  let t = e.node.fullName;
  return t.startsWith("@") || t.startsWith("v-on:");
}, print: Ma }, { test(e) {
  let t = e.node.fullName;
  return t.startsWith(":") || t.startsWith(".") || t.startsWith("v-bind:");
}, print: Ba }, { test: (e) => e.node.fullName.startsWith("v-"), print: ci }].map(({ test: e, print: t }) => ({ test: (r, n) => n.parser === "vue" && e(r, n), print: t }));
async function Ma(e, t, r, n) {
  try {
    return await ci(e, t, r, n);
  } catch (a) {
    if (a.cause?.code !== "BABEL_PARSER_SYNTAX_ERROR") throw a;
  }
  let i = b(r.node), s = G(r, n) ? "__vue_ts_event_binding" : "__vue_event_binding";
  return A(i, e, { parser: s }, W);
}
function Ba(e, t, r, n) {
  let i = b(r.node), s = G(r, n) ? "__vue_ts_expression" : "__vue_expression";
  return A(i, e, { parser: s }, W);
}
function ci(e, t, r, n) {
  let i = b(r.node), s = G(r, n) ? "__ts_expression" : "__js_expression";
  return A(i, e, { parser: s }, W);
}
var ui = Ia;
var Fa = [{ test: ti, print: ni }, { test: ii, print: si }, { test: Yn, print: jn }, { test: $n, print: zn }, { test: Kn, print: Qn }, ...ui, ...Gn].map(({ test: e, print: t }) => ({ test: e, print: Ha(t) }));
function qa(e, t) {
  let { node: r } = e, { value: n } = r;
  if (n) return Rt(r, t) ? [r.rawName, "=", n] : Fa.find(({ test: i }) => i(e, t))?.print;
}
function Ha(e) {
  return async (t, r, n, i) => {
    let s = await e(t, r, n, i);
    if (s) return s = ar(s, (a) => typeof a == "string" ? w(0, a, '"', "&quot;") : a), [n.node.rawName, '="', C(s), '"'];
  };
}
var pi = qa;
var Q = (e) => e.sourceSpan.start.offset;
var te = (e) => e.sourceSpan.end.offset;
function Ze(e, t) {
  return [e.isSelfClosing ? "" : Va(e, t), me(e, t)];
}
function Va(e, t) {
  return e.lastChild && ge(e.lastChild) ? "" : [Ua(e, t), It(e, t)];
}
function me(e, t) {
  return (e.next ? $(e.next) : de(e.parent)) ? "" : [fe(e, t), V(e, t)];
}
function Ua(e, t) {
  return de(e) ? fe(e.lastChild, t) : "";
}
function V(e, t) {
  return ge(e) ? It(e.parent, t) : et(e) ? Mt(e.next, t) : "";
}
function It(e, t) {
  if (mi(e, t)) return "";
  switch (e.kind) {
    case "ieConditionalComment":
      return "<!";
    case "element":
      if (e.hasHtmComponentClosingTag) return "<//";
    default:
      return `</${e.rawName}`;
  }
}
function fe(e, t) {
  if (mi(e, t)) return "";
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
function mi(e, t) {
  return !e.isSelfClosing && !e.endSourceSpan && (pe(e) || xt(e.parent, t));
}
function $(e) {
  return e.prev && e.prev.kind !== "docType" && e.kind !== "angularControlFlowBlock" && !O(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
}
function de(e) {
  return e.lastChild?.isTrailingSpaceSensitive && !e.lastChild.hasTrailingSpaces && !O(Lt(e.lastChild)) && !ue(e);
}
function ge(e) {
  return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && O(Lt(e));
}
function et(e) {
  return e.next && !O(e.next) && O(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
}
function Wa(e) {
  let t = e.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);
  return t ? t[1] ? t[1].split(/\s+/u) : true : false;
}
function tt(e) {
  return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
}
function Ga(e, t, r) {
  let { node: n } = e;
  if (!Re(n.attrs)) return n.isSelfClosing ? " " : "";
  let i = n.prev?.kind === "comment" && Wa(n.prev.value), s = typeof i == "boolean" ? () => i : Array.isArray(i) ? (d) => i.includes(d.rawName) : () => false, a = e.map(({ node: d }) => s(d) ? L(t.originalText.slice(Q(d), te(d))) : r(), "attrs"), o = n.kind === "element" && n.fullName === "script" && n.attrs.length === 1 && n.attrs[0].fullName === "src" && n.children.length === 0, u = t.singleAttributePerLine && n.attrs.length > 1 && !he(n, t) ? v : _, p = [y([o ? " " : _, q(u, a)])];
  return n.firstChild && tt(n.firstChild) || n.isSelfClosing && de(n.parent) || o ? p.push(n.isSelfClosing ? " " : "") : p.push(t.bracketSameLine ? n.isSelfClosing ? " " : "" : n.isSelfClosing ? _ : k), p;
}
function $a(e) {
  return e.firstChild && tt(e.firstChild) ? "" : Bt(e);
}
function rt(e, t, r) {
  let { node: n } = e;
  return [_e(n, t), Ga(e, t, r), n.isSelfClosing ? "" : $a(n)];
}
function _e(e, t) {
  return e.prev && et(e.prev) ? "" : [U(e, t), Mt(e, t)];
}
function U(e, t) {
  return tt(e) ? Bt(e.parent) : $(e) ? fe(e.prev, t) : "";
}
var hi = "<!doctype";
function Mt(e, t) {
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
        let { filepath: n } = t;
        if (n && /\.html?$/u.test(n)) return hi;
      }
      let r = Q(e);
      return t.originalText.slice(r, r + hi.length);
    }
    case "angularIcuExpression":
      return "{";
    case "element":
      if (e.condition) return `<!--[if ${e.condition}]><!--><${e.rawName}`;
    default:
      return `<${e.rawName}`;
  }
}
function Bt(e) {
  switch (e.kind) {
    case "ieConditionalComment":
      return "]>";
    case "element":
      if (e.condition) return "><!--<![endif]-->";
    default:
      return ">";
  }
}
function za(e, t) {
  if (!e.endSourceSpan) return "";
  let r = e.startSourceSpan.end.offset;
  e.firstChild && tt(e.firstChild) && (r -= Bt(e).length);
  let n = e.endSourceSpan.start.offset;
  return e.lastChild && ge(e.lastChild) ? n += It(e, t).length : de(e) && (n -= fe(e.lastChild, t).length), t.originalText.slice(r, n);
}
var Ft = za;
var Ya = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
function ja(e, t) {
  let { node: r } = e;
  switch (r.kind) {
    case "element":
      if (H(r, t) || r.kind === "interpolation") return;
      if (!r.isSelfClosing && Pt(r, t)) {
        let n = _r(r, t);
        return n ? async (i, s) => {
          let a = Ft(r, t), o = /^\s*$/u.test(a), c = "";
          return o || (c = await i(fr(a), { parser: n, __embeddedInHtml: true }), o = c === ""), [U(r, t), C(rt(e, t, s)), o ? "" : v, c, o ? "" : v, Ze(r, t), V(r, t)];
        } : void 0;
      }
      break;
    case "text":
      if (H(r.parent, t)) {
        let n = _r(r.parent, t);
        if (n) return async (i) => {
          let s = n === "markdown" ? x.dedentString(r.value.replace(/^[^\S\n]*\n/u, "")) : r.value, a = { parser: n, __embeddedInHtml: true };
          if (t.parser === "html" && n === "babel") {
            let o = "script", { attrMap: c } = r.parent;
            c && (c.type === "module" || (c.type === "text/babel" || c.type === "text/jsx") && c["data-type"] === "module") && (o = "module"), a.__babelSourceType = o;
          }
          return [j, U(r, t), await i(s, a), V(r, t)];
        };
      } else if (r.parent.kind === "interpolation") return async (n) => {
        let i = { __isInHtmlInterpolation: true, __embeddedInHtml: true };
        return t.parser === "angular" ? i.parser = "__ng_interpolation" : t.parser === "vue" ? i.parser = G(e, t) ? "__vue_ts_expression" : "__vue_expression" : i.parser = "__js_expression", [y([_, await n(r.value, i)]), r.parent.next && $(r.parent.next) ? " " : _];
      };
      break;
    case "attribute":
      return pi(e, t);
    case "angularControlFlowBlockParameters":
      return Ya.has(e.parent.name) ? gn : void 0;
    case "angularLetDeclarationInitializer":
      return (n) => A(r.value, n, { parser: "__ng_binding", __isInHtmlAttribute: false });
  }
}
var fi = ja;
var nt = null;
function it(e) {
  if (nt !== null && typeof nt.property) {
    let t = nt;
    return nt = it.prototype = null, t;
  }
  return nt = it.prototype = e ?? /* @__PURE__ */ Object.create(null), new it();
}
var Xa = 10;
for (let e = 0; e <= Xa; e++) it();
function Tr(e) {
  return it(e);
}
function Ka(e, t = "type") {
  Tr(e);
  function r(n) {
    let i = n[t], s = e[i];
    if (!Array.isArray(s)) throw Object.assign(new Error(`Missing visitor keys for '${i}'.`), { node: n });
    return s;
  }
  return r;
}
var di = Ka;
var R = [["children"], []];
var gi = { root: R[0], element: ["attrs", "children"], ieConditionalComment: R[0], ieConditionalStartComment: R[1], ieConditionalEndComment: R[1], interpolation: R[0], text: R[0], docType: R[1], comment: R[1], attribute: R[1], cdata: R[1], angularControlFlowBlock: ["children", "parameters"], angularControlFlowBlockParameters: R[0], angularControlFlowBlockParameter: R[1], angularLetDeclaration: ["init"], angularLetDeclarationInitializer: R[1], angularIcuExpression: ["cases"], angularIcuCase: ["expression"] };
var Qa = di(gi, "kind");
var _i = Qa;
var Si = "format";
var Ei = /^\s*<!--\s*@(?:noformat|noprettier)\s*-->/u;
var Ci = /^\s*<!--\s*@(?:format|prettier)\s*-->/u;
var vi = (e) => Ci.test(e);
var Ti = (e) => Ei.test(e);
var bi = (e) => `<!-- @${Si} -->

${e}`;
var wi = /* @__PURE__ */ new Map([["if", /* @__PURE__ */ new Set(["else if", "else"])], ["else if", /* @__PURE__ */ new Set(["else if", "else"])], ["for", /* @__PURE__ */ new Set(["empty"])], ["defer", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["placeholder", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["error", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["loading", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])]]);
function ki(e) {
  let t = te(e);
  return e.kind === "element" && !e.endSourceSpan && Re(e.children) ? Math.max(t, ki(F(0, e.children, -1))) : t;
}
function st(e, t, r) {
  let n = e.node;
  if (pe(n)) {
    let i = ki(n);
    return [U(n, t), L(x.trimEnd(t.originalText.slice(Q(n) + (n.prev && et(n.prev) ? Mt(n).length : 0), i - (n.next && $(n.next) ? fe(n, t).length : 0)))), V(n, t)];
  }
  return r();
}
function qt(e, t) {
  return O(e) && O(t) ? e.isTrailingSpaceSensitive ? e.hasTrailingSpaces ? Nt(t) ? v : _ : "" : Nt(t) ? v : k : et(e) && (pe(t) || t.firstChild || t.isSelfClosing || t.kind === "element" && t.attrs.length > 0) || e.kind === "element" && e.isSelfClosing && $(t) ? "" : !t.isLeadingSpaceSensitive || Nt(t) || $(t) && e.lastChild && ge(e.lastChild) && e.lastChild.lastChild && ge(e.lastChild.lastChild) ? v : t.hasLeadingSpaces ? _ : k;
}
function Ie(e, t, r) {
  let { node: n } = e;
  if (gr(n)) return [j, ...e.map(() => {
    let s = e.node, a = s.prev ? qt(s.prev, s) : "";
    return [a ? [a, Ke(s.prev) ? v : ""] : "", st(e, t, r)];
  }, "children")];
  let i = n.children.map(() => /* @__PURE__ */ Symbol(""));
  return e.map(({ node: s, index: a }) => {
    if (O(s)) {
      if (s.prev && O(s.prev)) {
        let m = qt(s.prev, s);
        if (m) return Ke(s.prev) ? [v, v, st(e, t, r)] : [m, st(e, t, r)];
      }
      return st(e, t, r);
    }
    let o = [], c = [], u = [], p = [], d = s.prev ? qt(s.prev, s) : "", S2 = s.next ? qt(s, s.next) : "";
    return d && (Ke(s.prev) ? o.push(v, v) : d === v ? o.push(v) : O(s.prev) ? c.push(d) : c.push(X("", k, { groupId: i[a - 1] }))), S2 && (Ke(s) ? O(s.next) && p.push(v, v) : S2 === v ? O(s.next) && p.push(v) : u.push(S2)), [...o, C([...c, C([st(e, t, r), ...u], { id: i[a] })]), ...p];
  }, "children");
}
function Ai(e, t, r) {
  let { node: n } = e, i = [];
  Ja(e) && i.push("} "), i.push("@", n.name), n.parameters && i.push(" (", C(r("parameters")), ")"), i.push(" {");
  let s = yi(n);
  return n.children.length > 0 ? (n.firstChild.hasLeadingSpaces = true, n.lastChild.hasTrailingSpaces = true, i.push(y([v, Ie(e, t, r)])), s && i.push(v, "}")) : s && i.push("}"), C(i, { shouldBreak: true });
}
function yi(e) {
  return !(e.next?.kind === "angularControlFlowBlock" && wi.get(e.name)?.has(e.next.name));
}
function Ja(e) {
  let { previous: t } = e;
  return t?.kind === "angularControlFlowBlock" && !pe(t) && !yi(t);
}
function xi(e, t, r) {
  return [y([k, q([";", _], e.map(r, "children"))]), k];
}
function Ni(e, t, r) {
  let { node: n } = e;
  return [_e(n, t), C([n.switchValue.trim(), ", ", n.type, n.cases.length > 0 ? [",", y([_, q(_, e.map(r, "cases"))])] : "", k]), me(n, t)];
}
function Li(e, t, r) {
  let { node: n } = e;
  return [n.value, " {", C([y([k, e.map(({ node: i, isLast: s }) => {
    let a = [r()];
    return i.kind === "text" && (i.hasLeadingSpaces && a.unshift(_), i.hasTrailingSpaces && !s && a.push(_)), a;
  }, "expression")]), k]), "}"];
}
function Pi(e, t, r) {
  let { node: n } = e;
  if (xt(n, t)) return [U(n, t), C(rt(e, t, r)), L(Ft(n, t)), ...Ze(n, t), V(n, t)];
  let i = n.children.length === 1 && (n.firstChild.kind === "interpolation" || n.firstChild.kind === "angularIcuExpression") && n.firstChild.isLeadingSpaceSensitive && !n.firstChild.hasLeadingSpaces && n.lastChild.isTrailingSpaceSensitive && !n.lastChild.hasTrailingSpaces, s = /* @__PURE__ */ Symbol("element-attr-group-id"), a = (p) => C([C(rt(e, t, r), { id: s }), p, Ze(n, t)]), o = (p) => i ? ln(p, { groupId: s }) : (H(n, t) || Je(n, t)) && n.parent.kind === "root" && t.parser === "vue" && !t.vueIndentScriptAndStyle ? p : y(p), c = () => i ? X(k, "", { groupId: s }) : n.firstChild.hasLeadingSpaces && n.firstChild.isLeadingSpaceSensitive ? _ : n.firstChild.kind === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive ? on(k) : k, u = () => (n.next ? $(n.next) : de(n.parent)) ? n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? " " : "" : i ? X(k, "", { groupId: s }) : n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? _ : (n.lastChild.kind === "comment" || n.lastChild.kind === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${t.tabWidth * (e.ancestors.length - 1)}}$`, "u").test(n.lastChild.value) ? "" : k;
  return n.children.length === 0 ? a(n.hasDanglingSpaces && n.isDanglingSpaceSensitive ? _ : "") : a([Pn(n) ? j : "", o([c(), Ie(e, t, r)]), u()]);
}
var I = (function(e) {
  return e[e.RAW_TEXT = 0] = "RAW_TEXT", e[e.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", e[e.PARSABLE_DATA = 2] = "PARSABLE_DATA", e;
})({});
function at(e, t = true) {
  if (e[0] != ":") return [null, e];
  let r = e.indexOf(":", 1);
  if (r === -1) {
    if (t) throw new Error(`Unsupported format "${e}" expecting ":namespace:name"`);
    return [null, e];
  }
  return [e.slice(1, r), e.slice(r + 1)];
}
function br(e) {
  return at(e)[1] === "ng-container";
}
function wr(e) {
  return at(e)[1] === "ng-content";
}
function Me(e) {
  return e === null ? null : at(e)[0];
}
function Se(e, t) {
  return e ? `:${e}:${t}` : t;
}
var kr = { name: "custom-elements" };
var Ar = { name: "no-errors-schema" };
var Ee = (function(e) {
  return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e;
})({});
var Za = /-+([a-z0-9])/g;
function Oi(e) {
  return e.replace(Za, (...t) => t[1].toUpperCase());
}
var Vt;
function yr() {
  return Vt || (Vt = {}, Ht(Ee.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), Ht(Ee.STYLE, ["*|style"]), Ht(Ee.URL, ["*|formAction", "area|href", "area|ping", "audio|src", "a|href", "a|ping", "blockquote|cite", "body|background", "del|cite", "form|action", "img|src", "input|src", "ins|cite", "q|cite", "source|src", "track|src", "video|poster", "video|src"]), Ht(Ee.RESOURCE_URL, ["applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"])), Vt;
}
function Ht(e, t) {
  for (let r of t) Vt[r.toLowerCase()] = e;
}
var Di = class {
};
var eo = "boolean";
var to = "number";
var ro = "string";
var no = "object";
var io = ["[Element]|textContent,%ariaActiveDescendantElement,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColIndexText,%ariaColSpan,%ariaControlsElements,%ariaCurrent,%ariaDescribedByElements,%ariaDescription,%ariaDetailsElements,%ariaDisabled,%ariaErrorMessageElements,%ariaExpanded,%ariaFlowToElements,%ariaHasPopup,%ariaHidden,%ariaInvalid,%ariaKeyShortcuts,%ariaLabel,%ariaLabelledByElements,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaOwnsElements,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowIndexText,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored", "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,search,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume", ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":svg:graphics^:svg:|", ":svg:animation^:svg:|*begin,*end,*repeat", ":svg:geometry^:svg:|", ":svg:componentTransferFunction^:svg:|", ":svg:gradient^:svg:|", ":svg:textContent^:svg:graphics|", ":svg:textPositioning^:svg:textContent|", "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username", "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username", "audio^media|", "br^[HTMLElement]|clear", "base^[HTMLElement]|href,target", "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink", "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value", "canvas^[HTMLElement]|#height,#width", "content^[HTMLElement]|select", "dl^[HTMLElement]|!compact", "data^[HTMLElement]|value", "datalist^[HTMLElement]|", "details^[HTMLElement]|!open", "dialog^[HTMLElement]|!open,returnValue", "dir^[HTMLElement]|!compact", "div^[HTMLElement]|align", "embed^[HTMLElement]|align,height,name,src,type,width", "fieldset^[HTMLElement]|!disabled,name", "font^[HTMLElement]|color,face,size", "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target", "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src", "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows", "hr^[HTMLElement]|align,color,!noShade,size,width", "head^[HTMLElement]|", "h1,h2,h3,h4,h5,h6^[HTMLElement]|align", "html^[HTMLElement]|version", "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width", "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width", "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width", "li^[HTMLElement]|type,#value", "label^[HTMLElement]|htmlFor", "legend^[HTMLElement]|align", "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type", "map^[HTMLElement]|name", "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width", "menu^[HTMLElement]|!compact", "meta^[HTMLElement]|content,httpEquiv,media,name,scheme", "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value", "ins,del^[HTMLElement]|cite,dateTime", "ol^[HTMLElement]|!compact,!reversed,#start,type", "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width", "optgroup^[HTMLElement]|!disabled,label", "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value", "output^[HTMLElement]|defaultValue,%htmlFor,name,value", "p^[HTMLElement]|align", "param^[HTMLElement]|name,type,value,valueType", "picture^[HTMLElement]|", "pre^[HTMLElement]|#width", "progress^[HTMLElement]|#max,#value", "q,blockquote,cite^[HTMLElement]|", "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type", "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value", "selectedcontent^[HTMLElement]|", "slot^[HTMLElement]|name", "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width", "span^[HTMLElement]|", "style^[HTMLElement]|!disabled,media,type", "search^[HTMLELement]|", "caption^[HTMLElement]|align", "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width", "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width", "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width", "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign", "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign", "template^[HTMLElement]|", "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap", "time^[HTMLElement]|dateTime", "title^[HTMLElement]|text", "track^[HTMLElement]|!default,kind,label,src,srclang", "ul^[HTMLElement]|!compact,type", "unknown^[HTMLElement]|", "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width", ":svg:a^:svg:graphics|", ":svg:animate^:svg:animation|", ":svg:animateMotion^:svg:animation|", ":svg:animateTransform^:svg:animation|", ":svg:circle^:svg:geometry|", ":svg:clipPath^:svg:graphics|", ":svg:defs^:svg:graphics|", ":svg:desc^:svg:|", ":svg:discard^:svg:|", ":svg:ellipse^:svg:geometry|", ":svg:feBlend^:svg:|", ":svg:feColorMatrix^:svg:|", ":svg:feComponentTransfer^:svg:|", ":svg:feComposite^:svg:|", ":svg:feConvolveMatrix^:svg:|", ":svg:feDiffuseLighting^:svg:|", ":svg:feDisplacementMap^:svg:|", ":svg:feDistantLight^:svg:|", ":svg:feDropShadow^:svg:|", ":svg:feFlood^:svg:|", ":svg:feFuncA^:svg:componentTransferFunction|", ":svg:feFuncB^:svg:componentTransferFunction|", ":svg:feFuncG^:svg:componentTransferFunction|", ":svg:feFuncR^:svg:componentTransferFunction|", ":svg:feGaussianBlur^:svg:|", ":svg:feImage^:svg:|", ":svg:feMerge^:svg:|", ":svg:feMergeNode^:svg:|", ":svg:feMorphology^:svg:|", ":svg:feOffset^:svg:|", ":svg:fePointLight^:svg:|", ":svg:feSpecularLighting^:svg:|", ":svg:feSpotLight^:svg:|", ":svg:feTile^:svg:|", ":svg:feTurbulence^:svg:|", ":svg:filter^:svg:|", ":svg:foreignObject^:svg:graphics|", ":svg:g^:svg:graphics|", ":svg:image^:svg:graphics|decoding", ":svg:line^:svg:geometry|", ":svg:linearGradient^:svg:gradient|", ":svg:mpath^:svg:|", ":svg:marker^:svg:|", ":svg:mask^:svg:|", ":svg:metadata^:svg:|", ":svg:path^:svg:geometry|", ":svg:pattern^:svg:|", ":svg:polygon^:svg:geometry|", ":svg:polyline^:svg:geometry|", ":svg:radialGradient^:svg:gradient|", ":svg:rect^:svg:geometry|", ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan", ":svg:script^:svg:|type", ":svg:set^:svg:animation|", ":svg:stop^:svg:|", ":svg:style^:svg:|!disabled,media,title,type", ":svg:switch^:svg:graphics|", ":svg:symbol^:svg:|", ":svg:tspan^:svg:textPositioning|", ":svg:text^:svg:textPositioning|", ":svg:textPath^:svg:textContent|", ":svg:title^:svg:|", ":svg:use^:svg:graphics|", ":svg:view^:svg:|#zoomAndPan", "data^[HTMLElement]|value", "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name", "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default", "summary^[HTMLElement]|", "time^[HTMLElement]|dateTime", ":svg:cursor^:svg:|", ":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":math:math^:math:|", ":math:maction^:math:|", ":math:menclose^:math:|", ":math:merror^:math:|", ":math:mfenced^:math:|", ":math:mfrac^:math:|", ":math:mi^:math:|", ":math:mmultiscripts^:math:|", ":math:mn^:math:|", ":math:mo^:math:|", ":math:mover^:math:|", ":math:mpadded^:math:|", ":math:mphantom^:math:|", ":math:mroot^:math:|", ":math:mrow^:math:|", ":math:ms^:math:|", ":math:mspace^:math:|", ":math:msqrt^:math:|", ":math:mstyle^:math:|", ":math:msub^:math:|", ":math:msubsup^:math:|", ":math:msup^:math:|", ":math:mtable^:math:|", ":math:mtd^:math:|", ":math:mtext^:math:|", ":math:mtr^:math:|", ":math:munder^:math:|", ":math:munderover^:math:|", ":math:semantics^:math:|"];
var Ri = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex", "aria-activedescendant": "ariaActiveDescendantElement", "aria-atomic": "ariaAtomic", "aria-autocomplete": "ariaAutoComplete", "aria-busy": "ariaBusy", "aria-checked": "ariaChecked", "aria-colcount": "ariaColCount", "aria-colindex": "ariaColIndex", "aria-colindextext": "ariaColIndexText", "aria-colspan": "ariaColSpan", "aria-controls": "ariaControlsElements", "aria-current": "ariaCurrent", "aria-describedby": "ariaDescribedByElements", "aria-description": "ariaDescription", "aria-details": "ariaDetailsElements", "aria-disabled": "ariaDisabled", "aria-errormessage": "ariaErrorMessageElements", "aria-expanded": "ariaExpanded", "aria-flowto": "ariaFlowToElements", "aria-haspopup": "ariaHasPopup", "aria-hidden": "ariaHidden", "aria-invalid": "ariaInvalid", "aria-keyshortcuts": "ariaKeyShortcuts", "aria-label": "ariaLabel", "aria-labelledby": "ariaLabelledByElements", "aria-level": "ariaLevel", "aria-live": "ariaLive", "aria-modal": "ariaModal", "aria-multiline": "ariaMultiLine", "aria-multiselectable": "ariaMultiSelectable", "aria-orientation": "ariaOrientation", "aria-owns": "ariaOwnsElements", "aria-placeholder": "ariaPlaceholder", "aria-posinset": "ariaPosInSet", "aria-pressed": "ariaPressed", "aria-readonly": "ariaReadOnly", "aria-required": "ariaRequired", "aria-roledescription": "ariaRoleDescription", "aria-rowcount": "ariaRowCount", "aria-rowindex": "ariaRowIndex", "aria-rowindextext": "ariaRowIndexText", "aria-rowspan": "ariaRowSpan", "aria-selected": "ariaSelected", "aria-setsize": "ariaSetSize", "aria-sort": "ariaSort", "aria-valuemax": "ariaValueMax", "aria-valuemin": "ariaValueMin", "aria-valuenow": "ariaValueNow", "aria-valuetext": "ariaValueText" }));
var so = Array.from(Ri).reduce((e, [t, r]) => (e.set(t, r), e), /* @__PURE__ */ new Map());
var Ii = class extends Di {
  constructor() {
    super(), this._schema = /* @__PURE__ */ new Map(), this._eventSchema = /* @__PURE__ */ new Map(), io.forEach((e) => {
      let t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), [n, i] = e.split("|"), s = i.split(","), [a, o] = n.split("^");
      a.split(",").forEach((u) => {
        this._schema.set(u.toLowerCase(), t), this._eventSchema.set(u.toLowerCase(), r);
      });
      let c = o && this._schema.get(o.toLowerCase());
      if (c) {
        for (let [u, p] of c) t.set(u, p);
        for (let u of this._eventSchema.get(o.toLowerCase())) r.add(u);
      }
      s.forEach((u) => {
        if (u.length > 0) switch (u[0]) {
          case "*":
            r.add(u.substring(1));
            break;
          case "!":
            t.set(u.substring(1), eo);
            break;
          case "#":
            t.set(u.substring(1), to);
            break;
          case "%":
            t.set(u.substring(1), no);
            break;
          default:
            t.set(u, ro);
        }
      });
    });
  }
  hasProperty(e, t, r) {
    if (r.some((n) => n.name === Ar.name)) return true;
    if (e.indexOf("-") > -1) {
      if (br(e) || wr(e)) return false;
      if (r.some((n) => n.name === kr.name)) return true;
    }
    return (this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).has(t);
  }
  hasElement(e, t) {
    return t.some((r) => r.name === Ar.name) || e.indexOf("-") > -1 && (br(e) || wr(e) || t.some((r) => r.name === kr.name)) ? true : this._schema.has(e.toLowerCase());
  }
  securityContext(e, t, r) {
    r && (t = this.getMappedPropName(t)), e = e.toLowerCase(), t = t.toLowerCase();
    let n = yr()[e + "|" + t];
    return n || (n = yr()["*|" + t], n || Ee.NONE);
  }
  getMappedPropName(e) {
    return Ri.get(e) ?? e;
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
    let t = this._schema.get(e.toLowerCase()) || this._schema.get("unknown");
    return Array.from(t.keys()).map((r) => so.get(r) ?? r);
  }
  allKnownEventsOfElement(e) {
    return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
  }
  normalizeAnimationStyleProperty(e) {
    return Oi(e);
  }
  normalizeAnimationStyleValue(e, t, r) {
    let n = "", i = r.toString().trim(), s = null;
    if (ao(e) && r !== 0 && r !== "0") if (typeof r == "number") n = "px";
    else {
      let a = r.match(/^[+-]?[\d\.]+([a-z]*)$/);
      a && a[1].length == 0 && (s = `Please provide a CSS unit value for ${t}:${r}`);
    }
    return { error: s, value: i + n };
  }
};
function ao(e) {
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
var f = class {
  constructor({ closedByChildren: e, implicitNamespacePrefix: t, contentType: r = I.PARSABLE_DATA, closedByParent: n = false, isVoid: i = false, ignoreFirstLf: s = false, preventNamespaceInheritance: a = false, canSelfClose: o = false } = {}) {
    this.closedByChildren = {}, this.closedByParent = false, e && e.length > 0 && e.forEach((c) => this.closedByChildren[c] = true), this.isVoid = i, this.closedByParent = n || i, this.implicitNamespacePrefix = t || null, this.contentType = r, this.ignoreFirstLf = s, this.preventNamespaceInheritance = a, this.canSelfClose = o ?? i;
  }
  isClosedByChild(e) {
    return this.isVoid || e.toLowerCase() in this.closedByChildren;
  }
  getContentType(e) {
    return typeof this.contentType == "object" ? (e === void 0 ? void 0 : this.contentType[e]) ?? this.contentType.default : this.contentType;
  }
};
var Mi;
var ot;
function Be(e) {
  return ot || (Mi = new f({ canSelfClose: true }), ot = Object.assign(/* @__PURE__ */ Object.create(null), { base: new f({ isVoid: true }), meta: new f({ isVoid: true }), area: new f({ isVoid: true }), embed: new f({ isVoid: true }), link: new f({ isVoid: true }), img: new f({ isVoid: true }), input: new f({ isVoid: true }), param: new f({ isVoid: true }), hr: new f({ isVoid: true }), br: new f({ isVoid: true }), source: new f({ isVoid: true }), track: new f({ isVoid: true }), wbr: new f({ isVoid: true }), p: new f({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new f({ closedByChildren: ["tbody", "tfoot"] }), tbody: new f({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new f({ closedByChildren: ["tbody"], closedByParent: true }), tr: new f({ closedByChildren: ["tr"], closedByParent: true }), td: new f({ closedByChildren: ["td", "th"], closedByParent: true }), th: new f({ closedByChildren: ["td", "th"], closedByParent: true }), col: new f({ isVoid: true }), svg: new f({ implicitNamespacePrefix: "svg" }), foreignObject: new f({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: true }), math: new f({ implicitNamespacePrefix: "math" }), li: new f({ closedByChildren: ["li"], closedByParent: true }), dt: new f({ closedByChildren: ["dt", "dd"] }), dd: new f({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new f({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new f({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new f({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new f({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new f({ closedByChildren: ["optgroup"], closedByParent: true }), option: new f({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new f({ ignoreFirstLf: true }), listing: new f({ ignoreFirstLf: true }), style: new f({ contentType: I.RAW_TEXT }), script: new f({ contentType: I.RAW_TEXT }), title: new f({ contentType: { default: I.ESCAPABLE_RAW_TEXT, svg: I.PARSABLE_DATA } }), textarea: new f({ contentType: I.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }) }), new Ii().allKnownElementNames().forEach((t) => {
    !ot[t] && Me(t) === null && (ot[t] = new f({ canSelfClose: false }));
  })), ot[e] ?? Mi;
}
function lt(e) {
  return e >= 9 && e <= 32 || e == 160;
}
function ct(e) {
  return 48 <= e && e <= 57;
}
function Fe(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Bi(e) {
  return e >= 97 && e <= 102 || e >= 65 && e <= 70 || ct(e);
}
function ut(e) {
  return e === 10 || e === 13;
}
function xr(e) {
  return 48 <= e && e <= 55;
}
function Ut(e) {
  return e === 39 || e === 34 || e === 96;
}
var qe = class qi {
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
      let o = r.substring(0, i - 1).lastIndexOf(String.fromCharCode(10));
      a = o > 0 ? i - o : i;
    } else a--;
    for (; i < n && t > 0; ) {
      let o = r.charCodeAt(i);
      i++, t--, o == 10 ? (s++, a = 0) : a++;
    }
    return new qi(this.file, i, s, a);
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
var ht = class {
  constructor(e, t) {
    this.content = e, this.url = t;
  }
};
var h = class {
  constructor(e, t, r = e, n = null) {
    this.start = e, this.end = t, this.fullStart = r, this.details = n;
  }
  toString() {
    return this.start.file.content.substring(this.start.offset, this.end.offset);
  }
};
var Fi = (function(e) {
  return e[e.WARNING = 0] = "WARNING", e[e.ERROR = 1] = "ERROR", e;
})({});
var re = class extends Error {
  constructor(e, t, r = Fi.ERROR, n) {
    super(t), this.span = e, this.msg = t, this.level = r, this.relatedError = n, Object.setPrototypeOf(this, new.target.prototype);
  }
  contextualMessage() {
    let e = this.span.start.getContext(100, 3);
    return e ? `${this.msg} ("${e.before}[${Fi[this.level]} ->]${e.after}")` : this.msg;
  }
  toString() {
    let e = this.span.details ? `, ${this.span.details}` : "";
    return `${this.contextualMessage()}: ${this.span.start}${e}`;
  }
};
var Ce = class {
  constructor(e, t) {
    this.sourceSpan = e, this.i18n = t;
  }
};
var Hi = class extends Ce {
  constructor(e, t, r, n) {
    super(t, n), this.value = e, this.tokens = r, this.kind = "text";
  }
  visit(e, t) {
    return e.visitText(this, t);
  }
};
var Vi = class extends Ce {
  constructor(e, t, r, n) {
    super(t, n), this.value = e, this.tokens = r, this.kind = "cdata";
  }
  visit(e, t) {
    return e.visitCdata(this, t);
  }
};
var Ui = class extends Ce {
  constructor(e, t, r, n, i, s) {
    super(n, s), this.switchValue = e, this.type = t, this.cases = r, this.switchValueSourceSpan = i, this.kind = "expansion";
  }
  visit(e, t) {
    return e.visitExpansion(this, t);
  }
};
var Wi = class {
  constructor(e, t, r, n, i) {
    this.value = e, this.expression = t, this.sourceSpan = r, this.valueSourceSpan = n, this.expSourceSpan = i, this.kind = "expansionCase";
  }
  visit(e, t) {
    return e.visitExpansionCase(this, t);
  }
};
var Gi = class extends Ce {
  constructor(e, t, r, n, i, s, a) {
    super(r, a), this.name = e, this.value = t, this.keySpan = n, this.valueSpan = i, this.valueTokens = s, this.kind = "attribute";
  }
  visit(e, t) {
    return e.visitAttribute(this, t);
  }
  get nameSpan() {
    return this.keySpan;
  }
};
var ne = class extends Ce {
  constructor(e, t, r, n, i, s, a, o = null, c = null, u, p) {
    super(s, p), this.name = e, this.attrs = t, this.directives = r, this.children = n, this.isSelfClosing = i, this.startSourceSpan = a, this.endSourceSpan = o, this.nameSpan = c, this.isVoid = u, this.kind = "element";
  }
  visit(e, t) {
    return e.visitElement(this, t);
  }
};
var $i = class {
  constructor(e, t) {
    this.value = e, this.sourceSpan = t, this.kind = "comment";
  }
  visit(e, t) {
    return e.visitComment(this, t);
  }
};
var zi = class {
  constructor(e, t) {
    this.value = e, this.sourceSpan = t, this.kind = "docType";
  }
  visit(e, t) {
    return e.visitDocType(this, t);
  }
};
var ve = class extends Ce {
  constructor(e, t, r, n, i, s, a = null, o) {
    super(n, o), this.name = e, this.parameters = t, this.children = r, this.nameSpan = i, this.startSourceSpan = s, this.endSourceSpan = a, this.kind = "block";
  }
  visit(e, t) {
    return e.visitBlock(this, t);
  }
};
var J = class extends Ce {
  constructor(e, t, r, n, i, s, a, o, c, u = null, p) {
    super(o, p), this.componentName = e, this.tagName = t, this.fullName = r, this.attrs = n, this.directives = i, this.children = s, this.isSelfClosing = a, this.startSourceSpan = c, this.endSourceSpan = u, this.kind = "component";
  }
  visit(e, t) {
    return e.visitComponent(this, t);
  }
};
var Yi = class {
  constructor(e, t, r, n, i = null) {
    this.name = e, this.attrs = t, this.sourceSpan = r, this.startSourceSpan = n, this.endSourceSpan = i, this.kind = "directive";
  }
  visit(e, t) {
    return e.visitDirective(this, t);
  }
};
var Nr = class {
  constructor(e, t) {
    this.expression = e, this.sourceSpan = t, this.kind = "blockParameter", this.startSourceSpan = null, this.endSourceSpan = null;
  }
  visit(e, t) {
    return e.visitBlockParameter(this, t);
  }
};
var Lr = class {
  constructor(e, t, r, n, i) {
    this.name = e, this.value = t, this.sourceSpan = r, this.nameSpan = n, this.valueSpan = i, this.kind = "letDeclaration", this.startSourceSpan = null, this.endSourceSpan = null;
  }
  visit(e, t) {
    return e.visitLetDeclaration(this, t);
  }
};
function Wt(e, t, r = null) {
  let n = [], i = e.visit ? (s) => e.visit(s, r) || s.visit(e, r) : (s) => s.visit(e, r);
  return t.forEach((s) => {
    let a = i(s);
    a && n.push(a);
  }), n;
}
var Pr = class {
  constructor() {
  }
  visitElement(e, t) {
    this.visitChildren(t, (r) => {
      r(e.attrs), r(e.directives), r(e.children);
    });
  }
  visitAttribute(e, t) {
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
      r(e.attrs), r(e.children);
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
      s && r.push(Wt(n, s, e));
    }
    return t(i), Array.prototype.concat.apply([], r);
  }
};
var Te = { AElig: "\xC6", AMP: "&", amp: "&", Aacute: "\xC1", Abreve: "\u0102", Acirc: "\xC2", Acy: "\u0410", Afr: "\u{1D504}", Agrave: "\xC0", Alpha: "\u0391", Amacr: "\u0100", And: "\u2A53", Aogon: "\u0104", Aopf: "\u{1D538}", ApplyFunction: "\u2061", af: "\u2061", Aring: "\xC5", angst: "\xC5", Ascr: "\u{1D49C}", Assign: "\u2254", colone: "\u2254", coloneq: "\u2254", Atilde: "\xC3", Auml: "\xC4", Backslash: "\u2216", setminus: "\u2216", setmn: "\u2216", smallsetminus: "\u2216", ssetmn: "\u2216", Barv: "\u2AE7", Barwed: "\u2306", doublebarwedge: "\u2306", Bcy: "\u0411", Because: "\u2235", becaus: "\u2235", because: "\u2235", Bernoullis: "\u212C", Bscr: "\u212C", bernou: "\u212C", Beta: "\u0392", Bfr: "\u{1D505}", Bopf: "\u{1D539}", Breve: "\u02D8", breve: "\u02D8", Bumpeq: "\u224E", HumpDownHump: "\u224E", bump: "\u224E", CHcy: "\u0427", COPY: "\xA9", copy: "\xA9", Cacute: "\u0106", Cap: "\u22D2", CapitalDifferentialD: "\u2145", DD: "\u2145", Cayleys: "\u212D", Cfr: "\u212D", Ccaron: "\u010C", Ccedil: "\xC7", Ccirc: "\u0108", Cconint: "\u2230", Cdot: "\u010A", Cedilla: "\xB8", cedil: "\xB8", CenterDot: "\xB7", centerdot: "\xB7", middot: "\xB7", Chi: "\u03A7", CircleDot: "\u2299", odot: "\u2299", CircleMinus: "\u2296", ominus: "\u2296", CirclePlus: "\u2295", oplus: "\u2295", CircleTimes: "\u2297", otimes: "\u2297", ClockwiseContourIntegral: "\u2232", cwconint: "\u2232", CloseCurlyDoubleQuote: "\u201D", rdquo: "\u201D", rdquor: "\u201D", CloseCurlyQuote: "\u2019", rsquo: "\u2019", rsquor: "\u2019", Colon: "\u2237", Proportion: "\u2237", Colone: "\u2A74", Congruent: "\u2261", equiv: "\u2261", Conint: "\u222F", DoubleContourIntegral: "\u222F", ContourIntegral: "\u222E", conint: "\u222E", oint: "\u222E", Copf: "\u2102", complexes: "\u2102", Coproduct: "\u2210", coprod: "\u2210", CounterClockwiseContourIntegral: "\u2233", awconint: "\u2233", Cross: "\u2A2F", Cscr: "\u{1D49E}", Cup: "\u22D3", CupCap: "\u224D", asympeq: "\u224D", DDotrahd: "\u2911", DJcy: "\u0402", DScy: "\u0405", DZcy: "\u040F", Dagger: "\u2021", ddagger: "\u2021", Darr: "\u21A1", Dashv: "\u2AE4", DoubleLeftTee: "\u2AE4", Dcaron: "\u010E", Dcy: "\u0414", Del: "\u2207", nabla: "\u2207", Delta: "\u0394", Dfr: "\u{1D507}", DiacriticalAcute: "\xB4", acute: "\xB4", DiacriticalDot: "\u02D9", dot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", dblac: "\u02DD", DiacriticalGrave: "`", grave: "`", DiacriticalTilde: "\u02DC", tilde: "\u02DC", Diamond: "\u22C4", diam: "\u22C4", diamond: "\u22C4", DifferentialD: "\u2146", dd: "\u2146", Dopf: "\u{1D53B}", Dot: "\xA8", DoubleDot: "\xA8", die: "\xA8", uml: "\xA8", DotDot: "\u20DC", DotEqual: "\u2250", doteq: "\u2250", esdot: "\u2250", DoubleDownArrow: "\u21D3", Downarrow: "\u21D3", dArr: "\u21D3", DoubleLeftArrow: "\u21D0", Leftarrow: "\u21D0", lArr: "\u21D0", DoubleLeftRightArrow: "\u21D4", Leftrightarrow: "\u21D4", hArr: "\u21D4", iff: "\u21D4", DoubleLongLeftArrow: "\u27F8", Longleftarrow: "\u27F8", xlArr: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", Longleftrightarrow: "\u27FA", xhArr: "\u27FA", DoubleLongRightArrow: "\u27F9", Longrightarrow: "\u27F9", xrArr: "\u27F9", DoubleRightArrow: "\u21D2", Implies: "\u21D2", Rightarrow: "\u21D2", rArr: "\u21D2", DoubleRightTee: "\u22A8", vDash: "\u22A8", DoubleUpArrow: "\u21D1", Uparrow: "\u21D1", uArr: "\u21D1", DoubleUpDownArrow: "\u21D5", Updownarrow: "\u21D5", vArr: "\u21D5", DoubleVerticalBar: "\u2225", par: "\u2225", parallel: "\u2225", shortparallel: "\u2225", spar: "\u2225", DownArrow: "\u2193", ShortDownArrow: "\u2193", darr: "\u2193", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", duarr: "\u21F5", DownBreve: "\u0311", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", leftharpoondown: "\u21BD", lhard: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", rhard: "\u21C1", rightharpoondown: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", top: "\u22A4", DownTeeArrow: "\u21A7", mapstodown: "\u21A7", Dscr: "\u{1D49F}", Dstrok: "\u0110", ENG: "\u014A", ETH: "\xD0", Eacute: "\xC9", Ecaron: "\u011A", Ecirc: "\xCA", Ecy: "\u042D", Edot: "\u0116", Efr: "\u{1D508}", Egrave: "\xC8", Element: "\u2208", in: "\u2208", isin: "\u2208", isinv: "\u2208", Emacr: "\u0112", EmptySmallSquare: "\u25FB", EmptyVerySmallSquare: "\u25AB", Eogon: "\u0118", Eopf: "\u{1D53C}", Epsilon: "\u0395", Equal: "\u2A75", EqualTilde: "\u2242", eqsim: "\u2242", esim: "\u2242", Equilibrium: "\u21CC", rightleftharpoons: "\u21CC", rlhar: "\u21CC", Escr: "\u2130", expectation: "\u2130", Esim: "\u2A73", Eta: "\u0397", Euml: "\xCB", Exists: "\u2203", exist: "\u2203", ExponentialE: "\u2147", ee: "\u2147", exponentiale: "\u2147", Fcy: "\u0424", Ffr: "\u{1D509}", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", blacksquare: "\u25AA", squarf: "\u25AA", squf: "\u25AA", Fopf: "\u{1D53D}", ForAll: "\u2200", forall: "\u2200", Fouriertrf: "\u2131", Fscr: "\u2131", GJcy: "\u0403", GT: ">", gt: ">", Gamma: "\u0393", Gammad: "\u03DC", Gbreve: "\u011E", Gcedil: "\u0122", Gcirc: "\u011C", Gcy: "\u0413", Gdot: "\u0120", Gfr: "\u{1D50A}", Gg: "\u22D9", ggg: "\u22D9", Gopf: "\u{1D53E}", GreaterEqual: "\u2265", ge: "\u2265", geq: "\u2265", GreaterEqualLess: "\u22DB", gel: "\u22DB", gtreqless: "\u22DB", GreaterFullEqual: "\u2267", gE: "\u2267", geqq: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", gl: "\u2277", gtrless: "\u2277", GreaterSlantEqual: "\u2A7E", geqslant: "\u2A7E", ges: "\u2A7E", GreaterTilde: "\u2273", gsim: "\u2273", gtrsim: "\u2273", Gscr: "\u{1D4A2}", Gt: "\u226B", NestedGreaterGreater: "\u226B", gg: "\u226B", HARDcy: "\u042A", Hacek: "\u02C7", caron: "\u02C7", Hat: "^", Hcirc: "\u0124", Hfr: "\u210C", Poincareplane: "\u210C", HilbertSpace: "\u210B", Hscr: "\u210B", hamilt: "\u210B", Hopf: "\u210D", quaternions: "\u210D", HorizontalLine: "\u2500", boxh: "\u2500", Hstrok: "\u0126", HumpEqual: "\u224F", bumpe: "\u224F", bumpeq: "\u224F", IEcy: "\u0415", IJlig: "\u0132", IOcy: "\u0401", Iacute: "\xCD", Icirc: "\xCE", Icy: "\u0418", Idot: "\u0130", Ifr: "\u2111", Im: "\u2111", image: "\u2111", imagpart: "\u2111", Igrave: "\xCC", Imacr: "\u012A", ImaginaryI: "\u2148", ii: "\u2148", Int: "\u222C", Integral: "\u222B", int: "\u222B", Intersection: "\u22C2", bigcap: "\u22C2", xcap: "\u22C2", InvisibleComma: "\u2063", ic: "\u2063", InvisibleTimes: "\u2062", it: "\u2062", Iogon: "\u012E", Iopf: "\u{1D540}", Iota: "\u0399", Iscr: "\u2110", imagline: "\u2110", Itilde: "\u0128", Iukcy: "\u0406", Iuml: "\xCF", Jcirc: "\u0134", Jcy: "\u0419", Jfr: "\u{1D50D}", Jopf: "\u{1D541}", Jscr: "\u{1D4A5}", Jsercy: "\u0408", Jukcy: "\u0404", KHcy: "\u0425", KJcy: "\u040C", Kappa: "\u039A", Kcedil: "\u0136", Kcy: "\u041A", Kfr: "\u{1D50E}", Kopf: "\u{1D542}", Kscr: "\u{1D4A6}", LJcy: "\u0409", LT: "<", lt: "<", Lacute: "\u0139", Lambda: "\u039B", Lang: "\u27EA", Laplacetrf: "\u2112", Lscr: "\u2112", lagran: "\u2112", Larr: "\u219E", twoheadleftarrow: "\u219E", Lcaron: "\u013D", Lcedil: "\u013B", Lcy: "\u041B", LeftAngleBracket: "\u27E8", lang: "\u27E8", langle: "\u27E8", LeftArrow: "\u2190", ShortLeftArrow: "\u2190", larr: "\u2190", leftarrow: "\u2190", slarr: "\u2190", LeftArrowBar: "\u21E4", larrb: "\u21E4", LeftArrowRightArrow: "\u21C6", leftrightarrows: "\u21C6", lrarr: "\u21C6", LeftCeiling: "\u2308", lceil: "\u2308", LeftDoubleBracket: "\u27E6", lobrk: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", dharl: "\u21C3", downharpoonleft: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", lfloor: "\u230A", LeftRightArrow: "\u2194", harr: "\u2194", leftrightarrow: "\u2194", LeftRightVector: "\u294E", LeftTee: "\u22A3", dashv: "\u22A3", LeftTeeArrow: "\u21A4", mapstoleft: "\u21A4", LeftTeeVector: "\u295A", LeftTriangle: "\u22B2", vartriangleleft: "\u22B2", vltri: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", ltrie: "\u22B4", trianglelefteq: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", uharl: "\u21BF", upharpoonleft: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", leftharpoonup: "\u21BC", lharu: "\u21BC", LeftVectorBar: "\u2952", LessEqualGreater: "\u22DA", leg: "\u22DA", lesseqgtr: "\u22DA", LessFullEqual: "\u2266", lE: "\u2266", leqq: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", lg: "\u2276", LessLess: "\u2AA1", LessSlantEqual: "\u2A7D", leqslant: "\u2A7D", les: "\u2A7D", LessTilde: "\u2272", lesssim: "\u2272", lsim: "\u2272", Lfr: "\u{1D50F}", Ll: "\u22D8", Lleftarrow: "\u21DA", lAarr: "\u21DA", Lmidot: "\u013F", LongLeftArrow: "\u27F5", longleftarrow: "\u27F5", xlarr: "\u27F5", LongLeftRightArrow: "\u27F7", longleftrightarrow: "\u27F7", xharr: "\u27F7", LongRightArrow: "\u27F6", longrightarrow: "\u27F6", xrarr: "\u27F6", Lopf: "\u{1D543}", LowerLeftArrow: "\u2199", swarr: "\u2199", swarrow: "\u2199", LowerRightArrow: "\u2198", searr: "\u2198", searrow: "\u2198", Lsh: "\u21B0", lsh: "\u21B0", Lstrok: "\u0141", Lt: "\u226A", NestedLessLess: "\u226A", ll: "\u226A", Map: "\u2905", Mcy: "\u041C", MediumSpace: "\u205F", Mellintrf: "\u2133", Mscr: "\u2133", phmmat: "\u2133", Mfr: "\u{1D510}", MinusPlus: "\u2213", mnplus: "\u2213", mp: "\u2213", Mopf: "\u{1D544}", Mu: "\u039C", NJcy: "\u040A", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041D", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", ZeroWidthSpace: "\u200B", NewLine: `
`, Nfr: "\u{1D511}", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nbsp: "\xA0", Nopf: "\u2115", naturals: "\u2115", Not: "\u2AEC", NotCongruent: "\u2262", nequiv: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", npar: "\u2226", nparallel: "\u2226", nshortparallel: "\u2226", nspar: "\u2226", NotElement: "\u2209", notin: "\u2209", notinva: "\u2209", NotEqual: "\u2260", ne: "\u2260", NotEqualTilde: "\u2242\u0338", nesim: "\u2242\u0338", NotExists: "\u2204", nexist: "\u2204", nexists: "\u2204", NotGreater: "\u226F", ngt: "\u226F", ngtr: "\u226F", NotGreaterEqual: "\u2271", nge: "\u2271", ngeq: "\u2271", NotGreaterFullEqual: "\u2267\u0338", ngE: "\u2267\u0338", ngeqq: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", nGtv: "\u226B\u0338", NotGreaterLess: "\u2279", ntgl: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", NotGreaterTilde: "\u2275", ngsim: "\u2275", NotHumpDownHump: "\u224E\u0338", nbump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", nbumpe: "\u224F\u0338", NotLeftTriangle: "\u22EA", nltri: "\u22EA", ntriangleleft: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", nltrie: "\u22EC", ntrianglelefteq: "\u22EC", NotLess: "\u226E", nless: "\u226E", nlt: "\u226E", NotLessEqual: "\u2270", nle: "\u2270", nleq: "\u2270", NotLessGreater: "\u2278", ntlg: "\u2278", NotLessLess: "\u226A\u0338", nLtv: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", NotLessTilde: "\u2274", nlsim: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", NotPrecedes: "\u2280", npr: "\u2280", nprec: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", npre: "\u2AAF\u0338", npreceq: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", nprcue: "\u22E0", NotReverseElement: "\u220C", notni: "\u220C", notniva: "\u220C", NotRightTriangle: "\u22EB", nrtri: "\u22EB", ntriangleright: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", nrtrie: "\u22ED", ntrianglerighteq: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", nsqsube: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", nsqsupe: "\u22E3", NotSubset: "\u2282\u20D2", nsubset: "\u2282\u20D2", vnsub: "\u2282\u20D2", NotSubsetEqual: "\u2288", nsube: "\u2288", nsubseteq: "\u2288", NotSucceeds: "\u2281", nsc: "\u2281", nsucc: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", nsce: "\u2AB0\u0338", nsucceq: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", nsccue: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", nsupset: "\u2283\u20D2", vnsup: "\u2283\u20D2", NotSupersetEqual: "\u2289", nsupe: "\u2289", nsupseteq: "\u2289", NotTilde: "\u2241", nsim: "\u2241", NotTildeEqual: "\u2244", nsime: "\u2244", nsimeq: "\u2244", NotTildeFullEqual: "\u2247", ncong: "\u2247", NotTildeTilde: "\u2249", nap: "\u2249", napprox: "\u2249", NotVerticalBar: "\u2224", nmid: "\u2224", nshortmid: "\u2224", nsmid: "\u2224", Nscr: "\u{1D4A9}", Ntilde: "\xD1", Nu: "\u039D", OElig: "\u0152", Oacute: "\xD3", Ocirc: "\xD4", Ocy: "\u041E", Odblac: "\u0150", Ofr: "\u{1D512}", Ograve: "\xD2", Omacr: "\u014C", Omega: "\u03A9", ohm: "\u03A9", Omicron: "\u039F", Oopf: "\u{1D546}", OpenCurlyDoubleQuote: "\u201C", ldquo: "\u201C", OpenCurlyQuote: "\u2018", lsquo: "\u2018", Or: "\u2A54", Oscr: "\u{1D4AA}", Oslash: "\xD8", Otilde: "\xD5", Otimes: "\u2A37", Ouml: "\xD6", OverBar: "\u203E", oline: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", tbrk: "\u23B4", OverParenthesis: "\u23DC", PartialD: "\u2202", part: "\u2202", Pcy: "\u041F", Pfr: "\u{1D513}", Phi: "\u03A6", Pi: "\u03A0", PlusMinus: "\xB1", plusmn: "\xB1", pm: "\xB1", Popf: "\u2119", primes: "\u2119", Pr: "\u2ABB", Precedes: "\u227A", pr: "\u227A", prec: "\u227A", PrecedesEqual: "\u2AAF", pre: "\u2AAF", preceq: "\u2AAF", PrecedesSlantEqual: "\u227C", prcue: "\u227C", preccurlyeq: "\u227C", PrecedesTilde: "\u227E", precsim: "\u227E", prsim: "\u227E", Prime: "\u2033", Product: "\u220F", prod: "\u220F", Proportional: "\u221D", prop: "\u221D", propto: "\u221D", varpropto: "\u221D", vprop: "\u221D", Pscr: "\u{1D4AB}", Psi: "\u03A8", QUOT: '"', quot: '"', Qfr: "\u{1D514}", Qopf: "\u211A", rationals: "\u211A", Qscr: "\u{1D4AC}", RBarr: "\u2910", drbkarow: "\u2910", REG: "\xAE", circledR: "\xAE", reg: "\xAE", Racute: "\u0154", Rang: "\u27EB", Rarr: "\u21A0", twoheadrightarrow: "\u21A0", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", Re: "\u211C", Rfr: "\u211C", real: "\u211C", realpart: "\u211C", ReverseElement: "\u220B", SuchThat: "\u220B", ni: "\u220B", niv: "\u220B", ReverseEquilibrium: "\u21CB", leftrightharpoons: "\u21CB", lrhar: "\u21CB", ReverseUpEquilibrium: "\u296F", duhar: "\u296F", Rho: "\u03A1", RightAngleBracket: "\u27E9", rang: "\u27E9", rangle: "\u27E9", RightArrow: "\u2192", ShortRightArrow: "\u2192", rarr: "\u2192", rightarrow: "\u2192", srarr: "\u2192", RightArrowBar: "\u21E5", rarrb: "\u21E5", RightArrowLeftArrow: "\u21C4", rightleftarrows: "\u21C4", rlarr: "\u21C4", RightCeiling: "\u2309", rceil: "\u2309", RightDoubleBracket: "\u27E7", robrk: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", dharr: "\u21C2", downharpoonright: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rfloor: "\u230B", RightTee: "\u22A2", vdash: "\u22A2", RightTeeArrow: "\u21A6", map: "\u21A6", mapsto: "\u21A6", RightTeeVector: "\u295B", RightTriangle: "\u22B3", vartriangleright: "\u22B3", vrtri: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", rtrie: "\u22B5", trianglerighteq: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", uharr: "\u21BE", upharpoonright: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", rharu: "\u21C0", rightharpoonup: "\u21C0", RightVectorBar: "\u2953", Ropf: "\u211D", reals: "\u211D", RoundImplies: "\u2970", Rrightarrow: "\u21DB", rAarr: "\u21DB", Rscr: "\u211B", realine: "\u211B", Rsh: "\u21B1", rsh: "\u21B1", RuleDelayed: "\u29F4", SHCHcy: "\u0429", SHcy: "\u0428", SOFTcy: "\u042C", Sacute: "\u015A", Sc: "\u2ABC", Scaron: "\u0160", Scedil: "\u015E", Scirc: "\u015C", Scy: "\u0421", Sfr: "\u{1D516}", ShortUpArrow: "\u2191", UpArrow: "\u2191", uarr: "\u2191", uparrow: "\u2191", Sigma: "\u03A3", SmallCircle: "\u2218", compfn: "\u2218", Sopf: "\u{1D54A}", Sqrt: "\u221A", radic: "\u221A", Square: "\u25A1", squ: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", sqcap: "\u2293", SquareSubset: "\u228F", sqsub: "\u228F", sqsubset: "\u228F", SquareSubsetEqual: "\u2291", sqsube: "\u2291", sqsubseteq: "\u2291", SquareSuperset: "\u2290", sqsup: "\u2290", sqsupset: "\u2290", SquareSupersetEqual: "\u2292", sqsupe: "\u2292", sqsupseteq: "\u2292", SquareUnion: "\u2294", sqcup: "\u2294", Sscr: "\u{1D4AE}", Star: "\u22C6", sstarf: "\u22C6", Sub: "\u22D0", Subset: "\u22D0", SubsetEqual: "\u2286", sube: "\u2286", subseteq: "\u2286", Succeeds: "\u227B", sc: "\u227B", succ: "\u227B", SucceedsEqual: "\u2AB0", sce: "\u2AB0", succeq: "\u2AB0", SucceedsSlantEqual: "\u227D", sccue: "\u227D", succcurlyeq: "\u227D", SucceedsTilde: "\u227F", scsim: "\u227F", succsim: "\u227F", Sum: "\u2211", sum: "\u2211", Sup: "\u22D1", Supset: "\u22D1", Superset: "\u2283", sup: "\u2283", supset: "\u2283", SupersetEqual: "\u2287", supe: "\u2287", supseteq: "\u2287", THORN: "\xDE", TRADE: "\u2122", trade: "\u2122", TSHcy: "\u040B", TScy: "\u0426", Tab: "	", Tau: "\u03A4", Tcaron: "\u0164", Tcedil: "\u0162", Tcy: "\u0422", Tfr: "\u{1D517}", Therefore: "\u2234", there4: "\u2234", therefore: "\u2234", Theta: "\u0398", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", Tilde: "\u223C", sim: "\u223C", thicksim: "\u223C", thksim: "\u223C", TildeEqual: "\u2243", sime: "\u2243", simeq: "\u2243", TildeFullEqual: "\u2245", cong: "\u2245", TildeTilde: "\u2248", ap: "\u2248", approx: "\u2248", asymp: "\u2248", thickapprox: "\u2248", thkap: "\u2248", Topf: "\u{1D54B}", TripleDot: "\u20DB", tdot: "\u20DB", Tscr: "\u{1D4AF}", Tstrok: "\u0166", Uacute: "\xDA", Uarr: "\u219F", Uarrocir: "\u2949", Ubrcy: "\u040E", Ubreve: "\u016C", Ucirc: "\xDB", Ucy: "\u0423", Udblac: "\u0170", Ufr: "\u{1D518}", Ugrave: "\xD9", Umacr: "\u016A", UnderBar: "_", lowbar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", bbrk: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", bigcup: "\u22C3", xcup: "\u22C3", UnionPlus: "\u228E", uplus: "\u228E", Uogon: "\u0172", Uopf: "\u{1D54C}", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", udarr: "\u21C5", UpDownArrow: "\u2195", updownarrow: "\u2195", varr: "\u2195", UpEquilibrium: "\u296E", udhar: "\u296E", UpTee: "\u22A5", bot: "\u22A5", bottom: "\u22A5", perp: "\u22A5", UpTeeArrow: "\u21A5", mapstoup: "\u21A5", UpperLeftArrow: "\u2196", nwarr: "\u2196", nwarrow: "\u2196", UpperRightArrow: "\u2197", nearr: "\u2197", nearrow: "\u2197", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", Uring: "\u016E", Uscr: "\u{1D4B0}", Utilde: "\u0168", Uuml: "\xDC", VDash: "\u22AB", Vbar: "\u2AEB", Vcy: "\u0412", Vdash: "\u22A9", Vdashl: "\u2AE6", Vee: "\u22C1", bigvee: "\u22C1", xvee: "\u22C1", Verbar: "\u2016", Vert: "\u2016", VerticalBar: "\u2223", mid: "\u2223", shortmid: "\u2223", smid: "\u2223", VerticalLine: "|", verbar: "|", vert: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", wr: "\u2240", wreath: "\u2240", VeryThinSpace: "\u200A", hairsp: "\u200A", Vfr: "\u{1D519}", Vopf: "\u{1D54D}", Vscr: "\u{1D4B1}", Vvdash: "\u22AA", Wcirc: "\u0174", Wedge: "\u22C0", bigwedge: "\u22C0", xwedge: "\u22C0", Wfr: "\u{1D51A}", Wopf: "\u{1D54E}", Wscr: "\u{1D4B2}", Xfr: "\u{1D51B}", Xi: "\u039E", Xopf: "\u{1D54F}", Xscr: "\u{1D4B3}", YAcy: "\u042F", YIcy: "\u0407", YUcy: "\u042E", Yacute: "\xDD", Ycirc: "\u0176", Ycy: "\u042B", Yfr: "\u{1D51C}", Yopf: "\u{1D550}", Yscr: "\u{1D4B4}", Yuml: "\u0178", ZHcy: "\u0416", Zacute: "\u0179", Zcaron: "\u017D", Zcy: "\u0417", Zdot: "\u017B", Zeta: "\u0396", Zfr: "\u2128", zeetrf: "\u2128", Zopf: "\u2124", integers: "\u2124", Zscr: "\u{1D4B5}", aacute: "\xE1", abreve: "\u0103", ac: "\u223E", mstpos: "\u223E", acE: "\u223E\u0333", acd: "\u223F", acirc: "\xE2", acy: "\u0430", aelig: "\xE6", afr: "\u{1D51E}", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", alpha: "\u03B1", amacr: "\u0101", amalg: "\u2A3F", and: "\u2227", wedge: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", angle: "\u2220", ange: "\u29A4", angmsd: "\u2221", measuredangle: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angzarr: "\u237C", aogon: "\u0105", aopf: "\u{1D552}", apE: "\u2A70", apacir: "\u2A6F", ape: "\u224A", approxeq: "\u224A", apid: "\u224B", apos: "'", aring: "\xE5", ascr: "\u{1D4B6}", ast: "*", midast: "*", atilde: "\xE3", auml: "\xE4", awint: "\u2A11", bNot: "\u2AED", backcong: "\u224C", bcong: "\u224C", backepsilon: "\u03F6", bepsi: "\u03F6", backprime: "\u2035", bprime: "\u2035", backsim: "\u223D", bsim: "\u223D", backsimeq: "\u22CD", bsime: "\u22CD", barvee: "\u22BD", barwed: "\u2305", barwedge: "\u2305", bbrktbrk: "\u23B6", bcy: "\u0431", bdquo: "\u201E", ldquor: "\u201E", bemptyv: "\u29B0", beta: "\u03B2", beth: "\u2136", between: "\u226C", twixt: "\u226C", bfr: "\u{1D51F}", bigcirc: "\u25EF", xcirc: "\u25EF", bigodot: "\u2A00", xodot: "\u2A00", bigoplus: "\u2A01", xoplus: "\u2A01", bigotimes: "\u2A02", xotime: "\u2A02", bigsqcup: "\u2A06", xsqcup: "\u2A06", bigstar: "\u2605", starf: "\u2605", bigtriangledown: "\u25BD", xdtri: "\u25BD", bigtriangleup: "\u25B3", xutri: "\u25B3", biguplus: "\u2A04", xuplus: "\u2A04", bkarow: "\u290D", rbarr: "\u290D", blacklozenge: "\u29EB", lozf: "\u29EB", blacktriangle: "\u25B4", utrif: "\u25B4", blacktriangledown: "\u25BE", dtrif: "\u25BE", blacktriangleleft: "\u25C2", ltrif: "\u25C2", blacktriangleright: "\u25B8", rtrif: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bnot: "\u2310", bopf: "\u{1D553}", bowtie: "\u22C8", boxDL: "\u2557", boxDR: "\u2554", boxDl: "\u2556", boxDr: "\u2553", boxH: "\u2550", boxHD: "\u2566", boxHU: "\u2569", boxHd: "\u2564", boxHu: "\u2567", boxUL: "\u255D", boxUR: "\u255A", boxUl: "\u255C", boxUr: "\u2559", boxV: "\u2551", boxVH: "\u256C", boxVL: "\u2563", boxVR: "\u2560", boxVh: "\u256B", boxVl: "\u2562", boxVr: "\u255F", boxbox: "\u29C9", boxdL: "\u2555", boxdR: "\u2552", boxdl: "\u2510", boxdr: "\u250C", boxhD: "\u2565", boxhU: "\u2568", boxhd: "\u252C", boxhu: "\u2534", boxminus: "\u229F", minusb: "\u229F", boxplus: "\u229E", plusb: "\u229E", boxtimes: "\u22A0", timesb: "\u22A0", boxuL: "\u255B", boxuR: "\u2558", boxul: "\u2518", boxur: "\u2514", boxv: "\u2502", boxvH: "\u256A", boxvL: "\u2561", boxvR: "\u255E", boxvh: "\u253C", boxvl: "\u2524", boxvr: "\u251C", brvbar: "\xA6", bscr: "\u{1D4B7}", bsemi: "\u204F", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bumpE: "\u2AAE", cacute: "\u0107", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", caps: "\u2229\uFE00", caret: "\u2041", ccaps: "\u2A4D", ccaron: "\u010D", ccedil: "\xE7", ccirc: "\u0109", ccups: "\u2A4C", ccupssm: "\u2A50", cdot: "\u010B", cemptyv: "\u29B2", cent: "\xA2", cfr: "\u{1D520}", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", chi: "\u03C7", cir: "\u25CB", cirE: "\u29C3", circ: "\u02C6", circeq: "\u2257", cire: "\u2257", circlearrowleft: "\u21BA", olarr: "\u21BA", circlearrowright: "\u21BB", orarr: "\u21BB", circledS: "\u24C8", oS: "\u24C8", circledast: "\u229B", oast: "\u229B", circledcirc: "\u229A", ocir: "\u229A", circleddash: "\u229D", odash: "\u229D", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", clubs: "\u2663", clubsuit: "\u2663", colon: ":", comma: ",", commat: "@", comp: "\u2201", complement: "\u2201", congdot: "\u2A6D", copf: "\u{1D554}", copysr: "\u2117", crarr: "\u21B5", cross: "\u2717", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", curlyeqprec: "\u22DE", cuesc: "\u22DF", curlyeqsucc: "\u22DF", cularr: "\u21B6", curvearrowleft: "\u21B6", cularrp: "\u293D", cup: "\u222A", cupbrcap: "\u2A48", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curvearrowright: "\u21B7", curarrm: "\u293C", curlyvee: "\u22CE", cuvee: "\u22CE", curlywedge: "\u22CF", cuwed: "\u22CF", curren: "\xA4", cwint: "\u2231", cylcty: "\u232D", dHar: "\u2965", dagger: "\u2020", daleth: "\u2138", dash: "\u2010", hyphen: "\u2010", dbkarow: "\u290F", rBarr: "\u290F", dcaron: "\u010F", dcy: "\u0434", ddarr: "\u21CA", downdownarrows: "\u21CA", ddotseq: "\u2A77", eDDot: "\u2A77", deg: "\xB0", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", dfr: "\u{1D521}", diamondsuit: "\u2666", diams: "\u2666", digamma: "\u03DD", gammad: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", djcy: "\u0452", dlcorn: "\u231E", llcorner: "\u231E", dlcrop: "\u230D", dollar: "$", dopf: "\u{1D555}", doteqdot: "\u2251", eDot: "\u2251", dotminus: "\u2238", minusd: "\u2238", dotplus: "\u2214", plusdo: "\u2214", dotsquare: "\u22A1", sdotb: "\u22A1", drcorn: "\u231F", lrcorner: "\u231F", drcrop: "\u230C", dscr: "\u{1D4B9}", dscy: "\u0455", dsol: "\u29F6", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", triangledown: "\u25BF", dwangle: "\u29A6", dzcy: "\u045F", dzigrarr: "\u27FF", eacute: "\xE9", easter: "\u2A6E", ecaron: "\u011B", ecir: "\u2256", eqcirc: "\u2256", ecirc: "\xEA", ecolon: "\u2255", eqcolon: "\u2255", ecy: "\u044D", edot: "\u0117", efDot: "\u2252", fallingdotseq: "\u2252", efr: "\u{1D522}", eg: "\u2A9A", egrave: "\xE8", egs: "\u2A96", eqslantgtr: "\u2A96", egsdot: "\u2A98", el: "\u2A99", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", eqslantless: "\u2A95", elsdot: "\u2A97", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", emptyv: "\u2205", varnothing: "\u2205", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", eng: "\u014B", ensp: "\u2002", eogon: "\u0119", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", epsilon: "\u03B5", epsiv: "\u03F5", straightepsilon: "\u03F5", varepsilon: "\u03F5", equals: "=", equest: "\u225F", questeq: "\u225F", equivDD: "\u2A78", eqvparsl: "\u29E5", erDot: "\u2253", risingdotseq: "\u2253", erarr: "\u2971", escr: "\u212F", eta: "\u03B7", eth: "\xF0", euml: "\xEB", euro: "\u20AC", excl: "!", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", ffr: "\u{1D523}", filig: "\uFB01", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", fopf: "\u{1D557}", fork: "\u22D4", pitchfork: "\u22D4", forkv: "\u2AD9", fpartint: "\u2A0D", frac12: "\xBD", half: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", sfrown: "\u2322", fscr: "\u{1D4BB}", gEl: "\u2A8C", gtreqqless: "\u2A8C", gacute: "\u01F5", gamma: "\u03B3", gap: "\u2A86", gtrapprox: "\u2A86", gbreve: "\u011F", gcirc: "\u011D", gcy: "\u0433", gdot: "\u0121", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", gfr: "\u{1D524}", gimel: "\u2137", gjcy: "\u0453", glE: "\u2A92", gla: "\u2AA5", glj: "\u2AA4", gnE: "\u2269", gneqq: "\u2269", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gneq: "\u2A88", gnsim: "\u22E7", gopf: "\u{1D558}", gscr: "\u210A", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtrdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrarr: "\u2978", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", hardcy: "\u044A", harrcir: "\u2948", harrw: "\u21AD", leftrightsquigarrow: "\u21AD", hbar: "\u210F", hslash: "\u210F", planck: "\u210F", plankv: "\u210F", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", mldr: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", hksearow: "\u2925", searhk: "\u2925", hkswarow: "\u2926", swarhk: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", larrhk: "\u21A9", hookrightarrow: "\u21AA", rarrhk: "\u21AA", hopf: "\u{1D559}", horbar: "\u2015", hscr: "\u{1D4BD}", hstrok: "\u0127", hybull: "\u2043", iacute: "\xED", icirc: "\xEE", icy: "\u0438", iecy: "\u0435", iexcl: "\xA1", ifr: "\u{1D526}", igrave: "\xEC", iiiint: "\u2A0C", qint: "\u2A0C", iiint: "\u222D", tint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", ijlig: "\u0133", imacr: "\u012B", imath: "\u0131", inodot: "\u0131", imof: "\u22B7", imped: "\u01B5", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", intcal: "\u22BA", intercal: "\u22BA", intlarhk: "\u2A17", intprod: "\u2A3C", iprod: "\u2A3C", iocy: "\u0451", iogon: "\u012F", iopf: "\u{1D55A}", iota: "\u03B9", iquest: "\xBF", iscr: "\u{1D4BE}", isinE: "\u22F9", isindot: "\u22F5", isins: "\u22F4", isinsv: "\u22F3", itilde: "\u0129", iukcy: "\u0456", iuml: "\xEF", jcirc: "\u0135", jcy: "\u0439", jfr: "\u{1D527}", jmath: "\u0237", jopf: "\u{1D55B}", jscr: "\u{1D4BF}", jsercy: "\u0458", jukcy: "\u0454", kappa: "\u03BA", kappav: "\u03F0", varkappa: "\u03F0", kcedil: "\u0137", kcy: "\u043A", kfr: "\u{1D528}", kgreen: "\u0138", khcy: "\u0445", kjcy: "\u045C", kopf: "\u{1D55C}", kscr: "\u{1D4C0}", lAtail: "\u291B", lBarr: "\u290E", lEg: "\u2A8B", lesseqqgtr: "\u2A8B", lHar: "\u2962", lacute: "\u013A", laemptyv: "\u29B4", lambda: "\u03BB", langd: "\u2991", lap: "\u2A85", lessapprox: "\u2A85", laquo: "\xAB", larrbfs: "\u291F", larrfs: "\u291D", larrlp: "\u21AB", looparrowleft: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", leftarrowtail: "\u21A2", lat: "\u2AAB", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lcub: "{", lbrack: "[", lsqb: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", lcaron: "\u013E", lcedil: "\u013C", lcy: "\u043B", ldca: "\u2936", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", leq: "\u2264", leftleftarrows: "\u21C7", llarr: "\u21C7", leftthreetimes: "\u22CB", lthree: "\u22CB", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessdot: "\u22D6", ltdot: "\u22D6", lfisht: "\u297C", lfr: "\u{1D529}", lgE: "\u2A91", lharul: "\u296A", lhblk: "\u2584", ljcy: "\u0459", llhard: "\u296B", lltri: "\u25FA", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnE: "\u2268", lneqq: "\u2268", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lneq: "\u2A87", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", longmapsto: "\u27FC", xmap: "\u27FC", looparrowright: "\u21AC", rarrlp: "\u21AC", lopar: "\u2985", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", loz: "\u25CA", lozenge: "\u25CA", lpar: "(", lparlt: "\u2993", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", lsime: "\u2A8D", lsimg: "\u2A8F", lsquor: "\u201A", sbquo: "\u201A", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltrPar: "\u2996", ltri: "\u25C3", triangleleft: "\u25C3", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", mDDot: "\u223A", macr: "\xAF", strns: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", marker: "\u25AE", mcomma: "\u2A29", mcy: "\u043C", mdash: "\u2014", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midcir: "\u2AF0", minus: "\u2212", minusdu: "\u2A2A", mlcp: "\u2ADB", models: "\u22A7", mopf: "\u{1D55E}", mscr: "\u{1D4C2}", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nGg: "\u22D9\u0338", nGt: "\u226B\u20D2", nLeftarrow: "\u21CD", nlArr: "\u21CD", nLeftrightarrow: "\u21CE", nhArr: "\u21CE", nLl: "\u22D8\u0338", nLt: "\u226A\u20D2", nRightarrow: "\u21CF", nrArr: "\u21CF", nVDash: "\u22AF", nVdash: "\u22AE", nacute: "\u0144", nang: "\u2220\u20D2", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", natur: "\u266E", natural: "\u266E", ncap: "\u2A43", ncaron: "\u0148", ncedil: "\u0146", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", ncy: "\u043D", ndash: "\u2013", neArr: "\u21D7", nearhk: "\u2924", nedot: "\u2250\u0338", nesear: "\u2928", toea: "\u2928", nfr: "\u{1D52B}", nharr: "\u21AE", nleftrightarrow: "\u21AE", nhpar: "\u2AF2", nis: "\u22FC", nisd: "\u22FA", njcy: "\u045A", nlE: "\u2266\u0338", nleqq: "\u2266\u0338", nlarr: "\u219A", nleftarrow: "\u219A", nldr: "\u2025", nopf: "\u{1D55F}", not: "\xAC", notinE: "\u22F9\u0338", notindot: "\u22F5\u0338", notinvb: "\u22F7", notinvc: "\u22F6", notnivb: "\u22FE", notnivc: "\u22FD", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", nrarr: "\u219B", nrightarrow: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nscr: "\u{1D4C3}", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsubseteqq: "\u2AC5\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupseteqq: "\u2AC6\u0338", ntilde: "\xF1", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvDash: "\u22AD", nvHarr: "\u2904", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwArr: "\u21D6", nwarhk: "\u2923", nwnear: "\u2927", oacute: "\xF3", ocirc: "\xF4", ocy: "\u043E", odblac: "\u0151", odiv: "\u2A38", odsold: "\u29BC", oelig: "\u0153", ofcir: "\u29BF", ofr: "\u{1D52C}", ogon: "\u02DB", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", olcir: "\u29BE", olcross: "\u29BB", olt: "\u29C0", omacr: "\u014D", omega: "\u03C9", omicron: "\u03BF", omid: "\u29B6", oopf: "\u{1D560}", opar: "\u29B7", operp: "\u29B9", or: "\u2228", vee: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", oscr: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oslash: "\xF8", osol: "\u2298", otilde: "\xF5", otimesas: "\u2A36", ouml: "\xF6", ovbar: "\u233D", para: "\xB6", parsim: "\u2AF3", parsl: "\u2AFD", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", pertenk: "\u2031", pfr: "\u{1D52D}", phi: "\u03C6", phiv: "\u03D5", straightphi: "\u03D5", varphi: "\u03D5", phone: "\u260E", pi: "\u03C0", piv: "\u03D6", varpi: "\u03D6", planckh: "\u210E", plus: "+", plusacir: "\u2A23", pluscir: "\u2A22", plusdu: "\u2A25", pluse: "\u2A72", plussim: "\u2A26", plustwo: "\u2A27", pointint: "\u2A15", popf: "\u{1D561}", pound: "\xA3", prE: "\u2AB3", prap: "\u2AB7", precapprox: "\u2AB7", precnapprox: "\u2AB9", prnap: "\u2AB9", precneqq: "\u2AB5", prnE: "\u2AB5", precnsim: "\u22E8", prnsim: "\u22E8", prime: "\u2032", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prurel: "\u22B0", pscr: "\u{1D4C5}", psi: "\u03C8", puncsp: "\u2008", qfr: "\u{1D52E}", qopf: "\u{1D562}", qprime: "\u2057", qscr: "\u{1D4C6}", quatint: "\u2A16", quest: "?", rAtail: "\u291C", rHar: "\u2964", race: "\u223D\u0331", racute: "\u0155", raemptyv: "\u29B3", rangd: "\u2992", range: "\u29A5", raquo: "\xBB", rarrap: "\u2975", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrpl: "\u2945", rarrsim: "\u2974", rarrtl: "\u21A3", rightarrowtail: "\u21A3", rarrw: "\u219D", rightsquigarrow: "\u219D", ratail: "\u291A", ratio: "\u2236", rbbrk: "\u2773", rbrace: "}", rcub: "}", rbrack: "]", rsqb: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdsh: "\u21B3", rect: "\u25AD", rfisht: "\u297D", rfr: "\u{1D52F}", rharul: "\u296C", rho: "\u03C1", rhov: "\u03F1", varrho: "\u03F1", rightrightarrows: "\u21C9", rrarr: "\u21C9", rightthreetimes: "\u22CC", rthree: "\u22CC", ring: "\u02DA", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", ropar: "\u2986", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rsaquo: "\u203A", rscr: "\u{1D4C7}", rtimes: "\u22CA", rtri: "\u25B9", triangleright: "\u25B9", rtriltri: "\u29CE", ruluhar: "\u2968", rx: "\u211E", sacute: "\u015B", scE: "\u2AB4", scap: "\u2AB8", succapprox: "\u2AB8", scaron: "\u0161", scedil: "\u015F", scirc: "\u015D", scnE: "\u2AB6", succneqq: "\u2AB6", scnap: "\u2ABA", succnapprox: "\u2ABA", scnsim: "\u22E9", succnsim: "\u22E9", scpolint: "\u2A13", scy: "\u0441", sdot: "\u22C5", sdote: "\u2A66", seArr: "\u21D8", sect: "\xA7", semi: ";", seswar: "\u2929", tosa: "\u2929", sext: "\u2736", sfr: "\u{1D530}", sharp: "\u266F", shchcy: "\u0449", shcy: "\u0448", shy: "\xAD", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", varsigma: "\u03C2", simdot: "\u2A6A", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", smashp: "\u2A33", smeparsl: "\u29E4", smile: "\u2323", ssmile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", sqcaps: "\u2293\uFE00", sqcups: "\u2294\uFE00", sscr: "\u{1D4C8}", star: "\u2606", sub: "\u2282", subset: "\u2282", subE: "\u2AC5", subseteqq: "\u2AC5", subdot: "\u2ABD", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subsetneqq: "\u2ACB", subne: "\u228A", subsetneq: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supE: "\u2AC6", supseteqq: "\u2AC6", supdot: "\u2ABE", supdsub: "\u2AD8", supedot: "\u2AC4", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supsetneqq: "\u2ACC", supne: "\u228B", supsetneq: "\u228B", supplus: "\u2AC0", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swArr: "\u21D9", swnwar: "\u292A", szlig: "\xDF", target: "\u2316", tau: "\u03C4", tcaron: "\u0165", tcedil: "\u0163", tcy: "\u0442", telrec: "\u2315", tfr: "\u{1D531}", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", vartheta: "\u03D1", thorn: "\xFE", times: "\xD7", timesbar: "\u2A31", timesd: "\u2A30", topbot: "\u2336", topcir: "\u2AF1", topf: "\u{1D565}", topfork: "\u2ADA", tprime: "\u2034", triangle: "\u25B5", utri: "\u25B5", triangleq: "\u225C", trie: "\u225C", tridot: "\u25EC", triminus: "\u2A3A", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", tscr: "\u{1D4C9}", tscy: "\u0446", tshcy: "\u045B", tstrok: "\u0167", uHar: "\u2963", uacute: "\xFA", ubrcy: "\u045E", ubreve: "\u016D", ucirc: "\xFB", ucy: "\u0443", udblac: "\u0171", ufisht: "\u297E", ufr: "\u{1D532}", ugrave: "\xF9", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", umacr: "\u016B", uogon: "\u0173", uopf: "\u{1D566}", upsi: "\u03C5", upsilon: "\u03C5", upuparrows: "\u21C8", uuarr: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", uring: "\u016F", urtri: "\u25F9", uscr: "\u{1D4CA}", utdot: "\u22F0", utilde: "\u0169", uuml: "\xFC", uwangle: "\u29A7", vBar: "\u2AE8", vBarv: "\u2AE9", vangrt: "\u299C", varsubsetneq: "\u228A\uFE00", vsubne: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", vsubnE: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", vsupne: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vsupnE: "\u2ACC\uFE00", vcy: "\u0432", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", vfr: "\u{1D533}", vopf: "\u{1D567}", vscr: "\u{1D4CB}", vzigzag: "\u299A", wcirc: "\u0175", wedbar: "\u2A5F", wedgeq: "\u2259", weierp: "\u2118", wp: "\u2118", wfr: "\u{1D534}", wopf: "\u{1D568}", wscr: "\u{1D4CC}", xfr: "\u{1D535}", xi: "\u03BE", xnis: "\u22FB", xopf: "\u{1D569}", xscr: "\u{1D4CD}", yacute: "\xFD", yacy: "\u044F", ycirc: "\u0177", ycy: "\u044B", yen: "\xA5", yfr: "\u{1D536}", yicy: "\u0457", yopf: "\u{1D56A}", yscr: "\u{1D4CE}", yucy: "\u044E", yuml: "\xFF", zacute: "\u017A", zcaron: "\u017E", zcy: "\u0437", zdot: "\u017C", zeta: "\u03B6", zfr: "\u{1D537}", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
var oo = "\uE500";
Te.ngsp = oo;
var l = (function(e) {
  return e[e.TAG_OPEN_START = 0] = "TAG_OPEN_START", e[e.TAG_OPEN_END = 1] = "TAG_OPEN_END", e[e.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", e[e.TAG_CLOSE = 3] = "TAG_CLOSE", e[e.INCOMPLETE_TAG_OPEN = 4] = "INCOMPLETE_TAG_OPEN", e[e.TEXT = 5] = "TEXT", e[e.ESCAPABLE_RAW_TEXT = 6] = "ESCAPABLE_RAW_TEXT", e[e.RAW_TEXT = 7] = "RAW_TEXT", e[e.INTERPOLATION = 8] = "INTERPOLATION", e[e.ENCODED_ENTITY = 9] = "ENCODED_ENTITY", e[e.COMMENT_START = 10] = "COMMENT_START", e[e.COMMENT_END = 11] = "COMMENT_END", e[e.CDATA_START = 12] = "CDATA_START", e[e.CDATA_END = 13] = "CDATA_END", e[e.ATTR_NAME = 14] = "ATTR_NAME", e[e.ATTR_QUOTE = 15] = "ATTR_QUOTE", e[e.ATTR_VALUE_TEXT = 16] = "ATTR_VALUE_TEXT", e[e.ATTR_VALUE_INTERPOLATION = 17] = "ATTR_VALUE_INTERPOLATION", e[e.DOC_TYPE_START = 18] = "DOC_TYPE_START", e[e.DOC_TYPE_END = 19] = "DOC_TYPE_END", e[e.EXPANSION_FORM_START = 20] = "EXPANSION_FORM_START", e[e.EXPANSION_CASE_VALUE = 21] = "EXPANSION_CASE_VALUE", e[e.EXPANSION_CASE_EXP_START = 22] = "EXPANSION_CASE_EXP_START", e[e.EXPANSION_CASE_EXP_END = 23] = "EXPANSION_CASE_EXP_END", e[e.EXPANSION_FORM_END = 24] = "EXPANSION_FORM_END", e[e.BLOCK_OPEN_START = 25] = "BLOCK_OPEN_START", e[e.BLOCK_OPEN_END = 26] = "BLOCK_OPEN_END", e[e.BLOCK_CLOSE = 27] = "BLOCK_CLOSE", e[e.BLOCK_PARAMETER = 28] = "BLOCK_PARAMETER", e[e.INCOMPLETE_BLOCK_OPEN = 29] = "INCOMPLETE_BLOCK_OPEN", e[e.LET_START = 30] = "LET_START", e[e.LET_VALUE = 31] = "LET_VALUE", e[e.LET_END = 32] = "LET_END", e[e.INCOMPLETE_LET = 33] = "INCOMPLETE_LET", e[e.COMPONENT_OPEN_START = 34] = "COMPONENT_OPEN_START", e[e.COMPONENT_OPEN_END = 35] = "COMPONENT_OPEN_END", e[e.COMPONENT_OPEN_END_VOID = 36] = "COMPONENT_OPEN_END_VOID", e[e.COMPONENT_CLOSE = 37] = "COMPONENT_CLOSE", e[e.INCOMPLETE_COMPONENT_OPEN = 38] = "INCOMPLETE_COMPONENT_OPEN", e[e.DIRECTIVE_NAME = 39] = "DIRECTIVE_NAME", e[e.DIRECTIVE_OPEN = 40] = "DIRECTIVE_OPEN", e[e.DIRECTIVE_CLOSE = 41] = "DIRECTIVE_CLOSE", e[e.EOF = 42] = "EOF", e;
})({});
var xo = class {
  constructor(e, t, r) {
    this.tokens = e, this.errors = t, this.nonNormalizedIcuExpressions = r;
  }
};
function ns(e, t, r, n = {}) {
  let i = new Oo(new ht(e, t), r, n);
  return i.tokenize(), new xo(qo(i.tokens), i.errors, i.nonNormalizedIcuExpressions);
}
var No = /\r\n?/g;
function be(e) {
  return `Unexpected character "${e === 0 ? "EOF" : String.fromCharCode(e)}"`;
}
function Qi(e) {
  return `Unknown entity "${e}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function Lo(e, t) {
  return `Unable to parse entity "${t}" - ${e} character reference entities must end with ";"`;
}
var Mr = (function(e) {
  return e.HEX = "hexadecimal", e.DEC = "decimal", e;
})(Mr || {});
var Po = ["@if", "@else", "@for", "@switch", "@case", "@default", "@empty", "@defer", "@placeholder", "@loading", "@error"];
var mt = { start: "{{", end: "}}" };
var Oo = class {
  constructor(e, t, r) {
    this._getTagContentType = t, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._openDirectiveCount = 0, this._inInterpolation = false, this._fullNameStack = [], this.tokens = [], this.errors = [], this.nonNormalizedIcuExpressions = [], this._tokenizeIcu = r.tokenizeExpansionForms || false, this._leadingTriviaCodePoints = r.leadingTriviaChars && r.leadingTriviaChars.map((i) => i.codePointAt(0) || 0), this._canSelfClose = r.canSelfClose || false, this._allowHtmComponentClosingTags = r.allowHtmComponentClosingTags || false;
    let n = r.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 };
    this._cursor = r.escapedString ? new Ho(e, n) : new is(e, n), this._preserveLineEndings = r.preserveLineEndings || false, this._i18nNormalizeLineEndingsInICUs = r.i18nNormalizeLineEndingsInICUs || false, this._tokenizeBlocks = r.tokenizeBlocks ?? true, this._tokenizeLet = r.tokenizeLet ?? true, this._selectorlessEnabled = r.selectorlessEnabled ?? false;
    try {
      this._cursor.init();
    } catch (i) {
      this.handleError(i);
    }
  }
  _processCarriageReturns(e) {
    return this._preserveLineEndings ? e : e.replace(No, `
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
        else this._tokenizeLet && this._cursor.peek() === 64 && !this._inInterpolation && this._isLetStart() ? this._consumeLetDeclaration(e) : this._tokenizeBlocks && this._isBlockStart() ? this._consumeBlockStart(e) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(125) ? this._consumeBlockEnd(e) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(l.TEXT, l.INTERPOLATION, () => this._isTextEnd(), () => this._isTagStart());
      } catch (t) {
        this.handleError(t);
      }
    }
    this._beginToken(l.EOF), this._endToken([]);
  }
  _getBlockName() {
    let e = false, t = this._cursor.clone();
    return this._attemptCharCodeUntilFn((r) => lt(r) ? !e : Fo(r) ? (e = true, false) : true), this._cursor.getChars(t).trim();
  }
  _consumeBlockStart(e) {
    this._requireCharCode(64), this._beginToken(l.BLOCK_OPEN_START, e);
    let t = this._endToken([this._getBlockName()]);
    if (this._cursor.peek() === 40) if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(T), this._attemptCharCode(41)) this._attemptCharCodeUntilFn(T);
    else {
      t.type = l.INCOMPLETE_BLOCK_OPEN;
      return;
    }
    this._attemptCharCode(123) ? (this._beginToken(l.BLOCK_OPEN_END), this._endToken([])) : t.type = l.INCOMPLETE_BLOCK_OPEN;
  }
  _consumeBlockEnd(e) {
    this._beginToken(l.BLOCK_CLOSE, e), this._endToken([]);
  }
  _consumeBlockParameters() {
    for (this._attemptCharCodeUntilFn(Zi); this._cursor.peek() !== 41 && this._cursor.peek() !== 0; ) {
      this._beginToken(l.BLOCK_PARAMETER);
      let e = this._cursor.clone(), t = null, r = 0;
      for (; this._cursor.peek() !== 59 && this._cursor.peek() !== 0 || t !== null; ) {
        let n = this._cursor.peek();
        if (n === 92) this._cursor.advance();
        else if (n === t) t = null;
        else if (t === null && Ut(n)) t = n;
        else if (n === 40 && t === null) r++;
        else if (n === 41 && t === null) {
          if (r === 0) break;
          r > 0 && r--;
        }
        this._cursor.advance();
      }
      this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(Zi);
    }
  }
  _consumeLetDeclaration(e) {
    if (this._requireStr("@let"), this._beginToken(l.LET_START, e), lt(this._cursor.peek())) this._attemptCharCodeUntilFn(T);
    else {
      let r = this._endToken([this._cursor.getChars(e)]);
      r.type = l.INCOMPLETE_LET;
      return;
    }
    let t = this._endToken([this._getLetDeclarationName()]);
    if (this._attemptCharCodeUntilFn(T), !this._attemptCharCode(61)) {
      t.type = l.INCOMPLETE_LET;
      return;
    }
    this._attemptCharCodeUntilFn((r) => T(r) && !ut(r)), this._consumeLetDeclarationValue(), this._cursor.peek() === 59 ? (this._beginToken(l.LET_END), this._endToken([]), this._cursor.advance()) : (t.type = l.INCOMPLETE_LET, t.sourceSpan = this._cursor.getSpan(e));
  }
  _getLetDeclarationName() {
    let e = this._cursor.clone(), t = false;
    return this._attemptCharCodeUntilFn((r) => Fe(r) || r === 36 || r === 95 || t && ct(r) ? (t = true, false) : true), this._cursor.getChars(e).trim();
  }
  _consumeLetDeclarationValue() {
    let e = this._cursor.clone();
    for (this._beginToken(l.LET_VALUE, e); this._cursor.peek() !== 0; ) {
      let t = this._cursor.peek();
      if (t === 59) break;
      Ut(t) && (this._cursor.advance(), this._attemptCharCodeUntilFn((r) => r === 92 ? (this._cursor.advance(), false) : r === t)), this._cursor.advance();
    }
    this._endToken([this._cursor.getChars(e)]);
  }
  _tokenizeExpansionForm() {
    if (this.isExpansionFormStart()) return this._consumeExpansionFormStart(), true;
    if (Mo(this._cursor.peek()) && this._isInExpansionForm()) return this._consumeExpansionCaseStart(), true;
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
    if (e instanceof Vr && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof re) this.errors.push(e);
    else throw e;
  }
  _attemptCharCode(e) {
    return this._cursor.peek() === e ? (this._cursor.advance(), true) : false;
  }
  _attemptCharCodeCaseInsensitive(e) {
    return Bo(this._cursor.peek(), e) ? (this._cursor.advance(), true) : false;
  }
  _requireCharCode(e) {
    let t = this._cursor.clone();
    if (!this._attemptCharCode(e)) throw this._createError(be(this._cursor.peek()), this._cursor.getSpan(t));
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
    if (!this._attemptStr(e)) throw this._createError(be(this._cursor.peek()), this._cursor.getSpan(t));
  }
  _requireStrCaseInsensitive(e) {
    let t = this._cursor.clone();
    if (!this._attemptStrCaseInsensitive(e)) throw this._createError(be(this._cursor.peek()), this._cursor.getSpan(t));
  }
  _attemptCharCodeUntilFn(e) {
    for (; !e(this._cursor.peek()); ) this._cursor.advance();
  }
  _requireCharCodeUntilFn(e, t) {
    let r = this._cursor.clone();
    if (this._attemptCharCodeUntilFn(e), this._cursor.diff(r) < t) throw this._createError(be(this._cursor.peek()), this._cursor.getSpan(r));
  }
  _attemptUntilChar(e) {
    for (; this._cursor.peek() !== e; ) this._cursor.advance();
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
    return this._cursor.peek() === 64 && Po.some((e) => this._peekStr(e));
  }
  _isLetStart() {
    return this._cursor.peek() === 64 && this._peekStr("@let");
  }
  _consumeEntity(e) {
    this._beginToken(l.ENCODED_ENTITY);
    let t = this._cursor.clone();
    if (this._cursor.advance(), this._attemptCharCode(35)) {
      let r = this._attemptCharCode(120) || this._attemptCharCode(88), n = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(Ro), this._cursor.peek() != 59) {
        this._cursor.advance();
        let s = r ? Mr.HEX : Mr.DEC;
        throw this._createError(Lo(s, this._cursor.getChars(t)), this._cursor.getSpan());
      }
      let i = this._cursor.getChars(n);
      this._cursor.advance();
      try {
        let s = parseInt(i, r ? 16 : 10);
        this._endToken([String.fromCodePoint(s), this._cursor.getChars(t)]);
      } catch {
        throw this._createError(Qi(this._cursor.getChars(t)), this._cursor.getSpan());
      }
    } else {
      let r = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(Io), this._cursor.peek() != 59) this._beginToken(e, t), this._cursor = r, this._endToken(["&"]);
      else {
        let n = this._cursor.getChars(r);
        this._cursor.advance();
        let i = Te.hasOwnProperty(n) && Te[n];
        if (!i) throw this._createError(Qi(n), this._cursor.getSpan(t));
        this._endToken([i, `&${n};`]);
      }
    }
  }
  _consumeRawText(e, t) {
    this._beginToken(e ? l.ESCAPABLE_RAW_TEXT : l.RAW_TEXT);
    let r = [];
    for (; ; ) {
      let n = this._cursor.clone(), i = t();
      if (this._cursor = n, i) break;
      e && this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(r.join(""))]), r.length = 0, this._consumeEntity(l.ESCAPABLE_RAW_TEXT), this._beginToken(l.ESCAPABLE_RAW_TEXT)) : r.push(this._readChar());
    }
    this._endToken([this._processCarriageReturns(r.join(""))]);
  }
  _consumeComment(e) {
    this._beginToken(l.COMMENT_START, e), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(l.COMMENT_END), this._requireStr("-->"), this._endToken([]);
  }
  _consumeBogusComment(e) {
    this._beginToken(l.COMMENT_START, e), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(l.COMMENT_END), this._cursor.advance(), this._endToken([]);
  }
  _consumeCdata(e) {
    this._beginToken(l.CDATA_START, e), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(l.CDATA_END), this._requireStr("]]>"), this._endToken([]);
  }
  _consumeDocType(e) {
    this._beginToken(l.DOC_TYPE_START, e), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(l.DOC_TYPE_END), this._cursor.advance(), this._endToken([]);
  }
  _consumePrefixAndName(e) {
    let t = this._cursor.clone(), r = "";
    for (; this._cursor.peek() !== 58 && !Do(this._cursor.peek()); ) this._cursor.advance();
    let n;
    this._cursor.peek() === 58 ? (r = this._cursor.getChars(t), this._cursor.advance(), n = this._cursor.clone()) : n = t, this._requireCharCodeUntilFn(e, r === "" ? 0 : 1);
    let i = this._cursor.getChars(n);
    return [r, i];
  }
  _consumeTagOpen(e) {
    let t, r, n, i, s = [];
    try {
      if (this._selectorlessEnabled && zt(this._cursor.peek())) i = this._consumeComponentOpenStart(e), [n, r, t] = i.parts, r && (n += `:${r}`), t && (n += `:${t}`), this._attemptCharCodeUntilFn(T);
      else {
        if (!Fe(this._cursor.peek())) throw this._createError(be(this._cursor.peek()), this._cursor.getSpan(e));
        i = this._consumeTagOpenStart(e), r = i.parts[0], t = n = i.parts[1], this._attemptCharCodeUntilFn(T);
      }
      for (; !ts(this._cursor.peek()); ) if (this._selectorlessEnabled && this._cursor.peek() === 64) {
        let o = this._cursor.clone(), c = o.clone();
        c.advance(), zt(c.peek()) && this._consumeDirective(o, c);
      } else {
        let o = this._consumeAttribute();
        s.push(o);
      }
      i.type === l.COMPONENT_OPEN_START ? this._consumeComponentOpenEnd() : this._consumeTagOpenEnd();
    } catch (o) {
      if (o instanceof re) {
        i ? i.type = i.type === l.COMPONENT_OPEN_START ? l.INCOMPLETE_COMPONENT_OPEN : l.INCOMPLETE_TAG_OPEN : (this._beginToken(l.TEXT, e), this._endToken(["<"]));
        return;
      }
      throw o;
    }
    if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === l.TAG_OPEN_END_VOID) return;
    let a = this._getTagContentType(t, r, this._fullNameStack.length > 0, s);
    this._handleFullNameStackForTagOpen(r, t), a === I.RAW_TEXT ? this._consumeRawTextWithTagClose(r, i, n, false) : a === I.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(r, i, n, true);
  }
  _consumeRawTextWithTagClose(e, t, r, n) {
    this._consumeRawText(n, () => !this._attemptCharCode(60) || !this._attemptCharCode(47) || (this._attemptCharCodeUntilFn(T), !this._attemptStrCaseInsensitive(e && t.type !== l.COMPONENT_OPEN_START ? `${e}:${r}` : r)) ? false : (this._attemptCharCodeUntilFn(T), this._attemptCharCode(62))), this._beginToken(t.type === l.COMPONENT_OPEN_START ? l.COMPONENT_CLOSE : l.TAG_CLOSE), this._requireCharCodeUntilFn((i) => i === 62, 3), this._cursor.advance(), this._endToken(t.parts), this._handleFullNameStackForTagClose(e, r);
  }
  _consumeTagOpenStart(e) {
    this._beginToken(l.TAG_OPEN_START, e);
    let t = this._consumePrefixAndName(we);
    return this._endToken(t);
  }
  _consumeComponentOpenStart(e) {
    this._beginToken(l.COMPONENT_OPEN_START, e);
    let t = this._consumeComponentName();
    return this._endToken(t);
  }
  _consumeComponentName() {
    let e = this._cursor.clone();
    for (; es(this._cursor.peek()); ) this._cursor.advance();
    let t = this._cursor.getChars(e), r = "", n = "";
    return this._cursor.peek() === 58 && (this._cursor.advance(), [r, n] = this._consumePrefixAndName(we)), [t, r, n];
  }
  _consumeAttribute() {
    let [e, t] = this._consumeAttributeName(), r;
    return this._attemptCharCodeUntilFn(T), this._attemptCharCode(61) && (this._attemptCharCodeUntilFn(T), r = this._consumeAttributeValue()), this._attemptCharCodeUntilFn(T), { prefix: e, name: t, value: r };
  }
  _consumeAttributeName() {
    let e = this._cursor.peek();
    if (e === 39 || e === 34) throw this._createError(be(e), this._cursor.getSpan());
    this._beginToken(l.ATTR_NAME);
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
        return we(i);
      };
    } else if (e === 91) {
      let n = 0;
      t = (i) => (i === 91 ? n++ : i === 93 && n--, n <= 0 ? we(i) : ut(i));
    } else t = we;
    let r = this._consumePrefixAndName(t);
    return this._endToken(r), r;
  }
  _consumeAttributeValue() {
    let e;
    if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
      let t = this._cursor.peek();
      this._consumeQuote(t);
      let r = () => this._cursor.peek() === t;
      e = this._consumeWithInterpolation(l.ATTR_VALUE_TEXT, l.ATTR_VALUE_INTERPOLATION, r, r), this._consumeQuote(t);
    } else {
      let t = () => we(this._cursor.peek());
      e = this._consumeWithInterpolation(l.ATTR_VALUE_TEXT, l.ATTR_VALUE_INTERPOLATION, t, t);
    }
    return e;
  }
  _consumeQuote(e) {
    this._beginToken(l.ATTR_QUOTE), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]);
  }
  _consumeTagOpenEnd() {
    let e = this._attemptCharCode(47) ? l.TAG_OPEN_END_VOID : l.TAG_OPEN_END;
    this._beginToken(e), this._requireCharCode(62), this._endToken([]);
  }
  _consumeComponentOpenEnd() {
    let e = this._attemptCharCode(47) ? l.COMPONENT_OPEN_END_VOID : l.COMPONENT_OPEN_END;
    this._beginToken(e), this._requireCharCode(62), this._endToken([]);
  }
  _consumeTagClose(e) {
    if (this._selectorlessEnabled) {
      let t = e.clone();
      for (; t.peek() !== 62 && !zt(t.peek()); ) t.advance();
      if (zt(t.peek())) {
        this._beginToken(l.COMPONENT_CLOSE, e);
        let r = this._consumeComponentName();
        this._attemptCharCodeUntilFn(T), this._requireCharCode(62), this._endToken(r);
        return;
      }
    }
    if (this._beginToken(l.TAG_CLOSE, e), this._attemptCharCodeUntilFn(T), this._allowHtmComponentClosingTags && this._attemptCharCode(47)) this._attemptCharCodeUntilFn(T), this._requireCharCode(62), this._endToken([]);
    else {
      let [t, r] = this._consumePrefixAndName(we);
      this._attemptCharCodeUntilFn(T), this._requireCharCode(62), this._endToken([t, r]), this._handleFullNameStackForTagClose(t, r);
    }
  }
  _consumeExpansionFormStart() {
    this._beginToken(l.EXPANSION_FORM_START), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(l.EXPANSION_FORM_START), this._beginToken(l.RAW_TEXT);
    let e = this._readUntil(44), t = this._processCarriageReturns(e);
    if (this._i18nNormalizeLineEndingsInICUs) this._endToken([t]);
    else {
      let n = this._endToken([e]);
      t !== e && this.nonNormalizedIcuExpressions.push(n);
    }
    this._requireCharCode(44), this._attemptCharCodeUntilFn(T), this._beginToken(l.RAW_TEXT);
    let r = this._readUntil(44);
    this._endToken([r]), this._requireCharCode(44), this._attemptCharCodeUntilFn(T);
  }
  _consumeExpansionCaseStart() {
    this._beginToken(l.EXPANSION_CASE_VALUE);
    let e = this._readUntil(123).trim();
    this._endToken([e]), this._attemptCharCodeUntilFn(T), this._beginToken(l.EXPANSION_CASE_EXP_START), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(T), this._expansionCaseStack.push(l.EXPANSION_CASE_EXP_START);
  }
  _consumeExpansionCaseEnd() {
    this._beginToken(l.EXPANSION_CASE_EXP_END), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(T), this._expansionCaseStack.pop();
  }
  _consumeExpansionFormEnd() {
    this._beginToken(l.EXPANSION_FORM_END), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
  }
  _consumeWithInterpolation(e, t, r, n) {
    this._beginToken(e);
    let i = [];
    for (; !r(); ) {
      let a = this._cursor.clone();
      this._attemptStr(mt.start) ? (this._endToken([this._processCarriageReturns(i.join(""))], a), i.length = 0, this._consumeInterpolation(t, a, n), this._beginToken(e)) : this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(i.join(""))]), i.length = 0, this._consumeEntity(e), this._beginToken(e)) : i.push(this._readChar());
    }
    this._inInterpolation = false;
    let s = this._processCarriageReturns(i.join(""));
    return this._endToken([s]), s;
  }
  _consumeInterpolation(e, t, r) {
    let n = [];
    this._beginToken(e, t), n.push(mt.start);
    let i = this._cursor.clone(), s = null, a = false;
    for (; this._cursor.peek() !== 0 && (r === null || !r()); ) {
      let o = this._cursor.clone();
      if (this._isTagStart()) {
        this._cursor = o, n.push(this._getProcessedChars(i, o)), this._endToken(n);
        return;
      }
      if (s === null) if (this._attemptStr(mt.end)) {
        n.push(this._getProcessedChars(i, o)), n.push(mt.end), this._endToken(n);
        return;
      } else this._attemptStr("//") && (a = true);
      let c = this._cursor.peek();
      this._cursor.advance(), c === 92 ? this._cursor.advance() : c === s ? s = null : !a && s === null && Ut(c) && (s = c);
    }
    n.push(this._getProcessedChars(i, this._cursor)), this._endToken(n);
  }
  _consumeDirective(e, t) {
    for (this._requireCharCode(64), this._cursor.advance(); es(this._cursor.peek()); ) this._cursor.advance();
    this._beginToken(l.DIRECTIVE_NAME, e);
    let r = this._cursor.getChars(t);
    if (this._endToken([r]), this._attemptCharCodeUntilFn(T), this._cursor.peek() === 40) {
      for (this._openDirectiveCount++, this._beginToken(l.DIRECTIVE_OPEN), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(T); !ts(this._cursor.peek()) && this._cursor.peek() !== 41; ) this._consumeAttribute();
      if (this._attemptCharCodeUntilFn(T), this._openDirectiveCount--, this._cursor.peek() !== 41) {
        if (this._cursor.peek() === 62 || this._cursor.peek() === 47) return;
        throw this._createError(be(this._cursor.peek()), this._cursor.getSpan(e));
      }
      this._beginToken(l.DIRECTIVE_CLOSE), this._cursor.advance(), this._endToken([]), this._attemptCharCodeUntilFn(T);
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
      if (97 <= t && t <= 122 || 65 <= t && t <= 90 || t === 47 || t === 33) return true;
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
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === l.EXPANSION_CASE_EXP_START;
  }
  _isInExpansionForm() {
    return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === l.EXPANSION_FORM_START;
  }
  isExpansionFormStart() {
    if (this._cursor.peek() !== 123) return false;
    let e = this._cursor.clone(), t = this._attemptStr(mt.start);
    return this._cursor = e, !t;
  }
  _handleFullNameStackForTagOpen(e, t) {
    let r = Se(e, t);
    (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === r) && this._fullNameStack.push(r);
  }
  _handleFullNameStackForTagClose(e, t) {
    let r = Se(e, t);
    this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === r && this._fullNameStack.pop();
  }
};
function T(e) {
  return !lt(e) || e === 0;
}
function we(e) {
  return lt(e) || e === 62 || e === 60 || e === 47 || e === 39 || e === 34 || e === 61 || e === 0;
}
function Do(e) {
  return (e < 97 || 122 < e) && (e < 65 || 90 < e) && (e < 48 || e > 57);
}
function Ro(e) {
  return e === 59 || e === 0 || !Bi(e);
}
function Io(e) {
  return e === 59 || e === 0 || !Fe(e);
}
function Mo(e) {
  return e !== 125;
}
function Bo(e, t) {
  return Ji(e) === Ji(t);
}
function Ji(e) {
  return e >= 97 && e <= 122 ? e - 97 + 65 : e;
}
function Fo(e) {
  return Fe(e) || ct(e) || e === 95;
}
function Zi(e) {
  return e !== 59 && T(e);
}
function zt(e) {
  return e === 95 || e >= 65 && e <= 90;
}
function es(e) {
  return Fe(e) || ct(e) || e === 95;
}
function ts(e) {
  return e === 47 || e === 62 || e === 60 || e === 0;
}
function qo(e) {
  let t = [], r;
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    r && r.type === l.TEXT && i.type === l.TEXT || r && r.type === l.ATTR_VALUE_TEXT && i.type === l.ATTR_VALUE_TEXT ? (r.parts[0] += i.parts[0], r.sourceSpan.end = i.sourceSpan.end) : (r = i, t.push(r));
  }
  return t;
}
var is = class Br {
  constructor(t, r) {
    if (t instanceof Br) {
      this.file = t.file, this.input = t.input, this.end = t.end;
      let n = t.state;
      this.state = { peek: n.peek, offset: n.offset, line: n.line, column: n.column };
    } else {
      if (!r) throw new Error("Programming error: the range argument must be provided with a file argument.");
      this.file = t, this.input = t.content, this.end = r.endPos, this.state = { peek: -1, offset: r.startPos, line: r.startLine, column: r.startCol };
    }
  }
  clone() {
    return new Br(this);
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
    let i = this.locationFromCursor(t);
    return new h(i, this.locationFromCursor(this), n !== t ? this.locationFromCursor(n) : i);
  }
  getChars(t) {
    return this.input.substring(t.state.offset, this.state.offset);
  }
  charAt(t) {
    return this.input.charCodeAt(t);
  }
  advanceState(t) {
    if (t.offset >= this.end) throw this.state = t, new Vr('Unexpected character "EOF"', this);
    let r = this.charAt(t.offset);
    r === 10 ? (t.line++, t.column = 0) : ut(r) || t.column++, t.offset++, this.updatePeek(t);
  }
  updatePeek(t) {
    t.peek = t.offset >= this.end ? 0 : this.charAt(t.offset);
  }
  locationFromCursor(t) {
    return new qe(t.file, t.state.offset, t.state.line, t.state.column);
  }
};
var Ho = class Fr extends is {
  constructor(t, r) {
    t instanceof Fr ? (super(t), this.internalState = { ...t.internalState }) : (super(t, r), this.internalState = this.state);
  }
  advance() {
    this.state = this.internalState, super.advance(), this.processEscapeSequence();
  }
  init() {
    super.init(), this.processEscapeSequence();
  }
  clone() {
    return new Fr(this);
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
    } else if (xr(t())) {
      let r = "", n = 0, i = this.clone();
      for (; xr(t()) && n < 3; ) i = this.clone(), r += String.fromCodePoint(t()), this.advanceState(this.internalState), n++;
      this.state.peek = parseInt(r, 8), this.internalState = i.internalState;
    } else ut(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
  }
  decodeHexDigits(t, r) {
    let n = this.input.slice(t.internalState.offset, t.internalState.offset + r), i = parseInt(n, 16);
    if (isNaN(i)) throw t.state = t.internalState, new Vr("Invalid hexadecimal escape sequence", t);
    return i;
  }
};
var Vr = class extends Error {
  constructor(e, t) {
    super(e), this.msg = e, this.cursor = t, Object.setPrototypeOf(this, new.target.prototype);
  }
};
var N = class os extends re {
  static create(t, r, n) {
    return new os(t, r, n);
  }
  constructor(t, r, n) {
    super(r, n), this.elementName = t;
  }
};
var Vo = class {
  constructor(e, t) {
    this.rootNodes = e, this.errors = t;
  }
};
var ls = class {
  constructor(e) {
    this.getTagDefinition = e;
  }
  parse(e, t, r, n = false, i) {
    let s = (m) => (g, ...E) => m(g.toLowerCase(), ...E), a = n ? this.getTagDefinition : s(this.getTagDefinition), o = (m) => a(m).getContentType(), c = n ? i : s(i), u = ns(e, t, i ? (m, g, E, P2) => {
      let z2 = c(m, g, E, P2);
      return z2 !== void 0 ? z2 : o(m);
    } : o, r), p = r && r.canSelfClose || false, d = r && r.allowHtmComponentClosingTags || false, S2 = new Uo(u.tokens, a, p, d, n);
    return S2.build(), new Vo(S2.rootNodes, [...u.errors, ...S2.errors]);
  }
};
var Uo = class cs {
  constructor(t, r, n, i, s) {
    this.tokens = t, this.tagDefinitionResolver = r, this.canSelfClose = n, this.allowHtmComponentClosingTags = i, this.isTagNameCaseSensitive = s, this._index = -1, this._containerStack = [], this.rootNodes = [], this.errors = [], this._advance();
  }
  build() {
    for (; this._peek.type !== l.EOF; ) this._peek.type === l.TAG_OPEN_START || this._peek.type === l.INCOMPLETE_TAG_OPEN ? this._consumeElementStartTag(this._advance()) : this._peek.type === l.TAG_CLOSE ? (this._closeVoidElement(), this._consumeElementEndTag(this._advance())) : this._peek.type === l.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === l.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === l.TEXT || this._peek.type === l.RAW_TEXT || this._peek.type === l.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === l.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === l.BLOCK_OPEN_START ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === l.BLOCK_CLOSE ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === l.INCOMPLETE_BLOCK_OPEN ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === l.LET_START ? (this._closeVoidElement(), this._consumeLet(this._advance())) : this._peek.type === l.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._peek.type === l.INCOMPLETE_LET ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._peek.type === l.COMPONENT_OPEN_START || this._peek.type === l.INCOMPLETE_COMPONENT_OPEN ? this._consumeComponentStartTag(this._advance()) : this._peek.type === l.COMPONENT_CLOSE ? this._consumeComponentEndTag(this._advance()) : this._advance();
    for (let t of this._containerStack) t instanceof ve && this.errors.push(N.create(t.name, t.sourceSpan, `Unclosed block "${t.name}"`));
  }
  _advance() {
    let t = this._peek;
    return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], t;
  }
  _advanceIf(t) {
    return this._peek.type === t ? this._advance() : null;
  }
  _consumeCdata(t) {
    let r = this._advance(), n = this._getText(r), i = this._advanceIf(l.CDATA_END);
    this._addToParent(new Vi(n, new h(t.sourceSpan.start, (i || r).sourceSpan.end), [r]));
  }
  _consumeComment(t) {
    let r = this._advanceIf(l.RAW_TEXT), n = this._advanceIf(l.COMMENT_END), i = r != null ? r.parts[0].trim() : null, s = n == null ? t.sourceSpan : new h(t.sourceSpan.start, n.sourceSpan.end, t.sourceSpan.fullStart);
    this._addToParent(new $i(i, s));
  }
  _consumeDocType(t) {
    let r = this._advanceIf(l.RAW_TEXT), n = this._advanceIf(l.DOC_TYPE_END), i = r != null ? r.parts[0].trim() : null, s = new h(t.sourceSpan.start, (n || r || t).sourceSpan.end);
    this._addToParent(new zi(i, s));
  }
  _consumeExpansion(t) {
    let r = this._advance(), n = this._advance(), i = [];
    for (; this._peek.type === l.EXPANSION_CASE_VALUE; ) {
      let a = this._parseExpansionCase();
      if (!a) return;
      i.push(a);
    }
    if (this._peek.type !== l.EXPANSION_FORM_END) {
      this.errors.push(N.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
      return;
    }
    let s = new h(t.sourceSpan.start, this._peek.sourceSpan.end, t.sourceSpan.fullStart);
    this._addToParent(new Ui(r.parts[0], n.parts[0], i, s, r.sourceSpan)), this._advance();
  }
  _parseExpansionCase() {
    let t = this._advance();
    if (this._peek.type !== l.EXPANSION_CASE_EXP_START) return this.errors.push(N.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
    let r = this._advance(), n = this._collectExpansionExpTokens(r);
    if (!n) return null;
    let i = this._advance();
    n.push({ type: l.EOF, parts: [], sourceSpan: i.sourceSpan });
    let s = new cs(n, this.tagDefinitionResolver, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
    if (s.build(), s.errors.length > 0) return this.errors = this.errors.concat(s.errors), null;
    let a = new h(t.sourceSpan.start, i.sourceSpan.end, t.sourceSpan.fullStart), o = new h(r.sourceSpan.start, i.sourceSpan.end, r.sourceSpan.fullStart);
    return new Wi(t.parts[0], s.rootNodes, a, t.sourceSpan, o);
  }
  _collectExpansionExpTokens(t) {
    let r = [], n = [l.EXPANSION_CASE_EXP_START];
    for (; ; ) {
      if ((this._peek.type === l.EXPANSION_FORM_START || this._peek.type === l.EXPANSION_CASE_EXP_START) && n.push(this._peek.type), this._peek.type === l.EXPANSION_CASE_EXP_END) if (ss(n, l.EXPANSION_CASE_EXP_START)) {
        if (n.pop(), n.length === 0) return r;
      } else return this.errors.push(N.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === l.EXPANSION_FORM_END) if (ss(n, l.EXPANSION_FORM_START)) n.pop();
      else return this.errors.push(N.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      if (this._peek.type === l.EOF) return this.errors.push(N.create(null, t.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
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
    for (; this._peek.type === l.INTERPOLATION || this._peek.type === l.TEXT || this._peek.type === l.ENCODED_ENTITY; ) t = this._advance(), r.push(t), t.type === l.INTERPOLATION ? i += t.parts.join("").replace(/&([^;]+);/g, as) : t.type === l.ENCODED_ENTITY ? i += t.parts[0] : i += t.parts.join("");
    if (i.length > 0) {
      let a = t.sourceSpan;
      this._addToParent(new Hi(i, new h(n.start, a.end, n.fullStart, n.details), r));
    }
  }
  _closeVoidElement() {
    var t;
    let r = this._getContainer();
    r !== null && (!((t = this._getTagDefinition(r)) === null || t === void 0) && t.isVoid) && this._containerStack.pop();
  }
  _consumeElementStartTag(t) {
    var r;
    let n = [], i = [];
    this._consumeAttributesAndDirectives(n, i);
    let s = this._getElementFullName(t, this._getClosestElementLikeParent()), a = this._getTagDefinition(s), o = false;
    if (this._peek.type === l.TAG_OPEN_END_VOID) {
      this._advance(), o = true;
      let E = this._getTagDefinition(s);
      this.canSelfClose || E?.canSelfClose || Me(s) !== null || E?.isVoid || this.errors.push(N.create(s, t.sourceSpan, `Only void, custom and foreign elements can be self closed "${t.parts[1]}"`));
    } else this._peek.type === l.TAG_OPEN_END && (this._advance(), o = false);
    let c = this._peek.sourceSpan.fullStart, u = new h(t.sourceSpan.start, c, t.sourceSpan.fullStart), p = new h(t.sourceSpan.start, c, t.sourceSpan.fullStart), d = new h(t.sourceSpan.start.moveBy(1), t.sourceSpan.end), S2 = new ne(s, n, i, [], o, u, p, void 0, d, a?.isVoid ?? false), m = this._getContainer(), g = m !== null && !!(!((r = this._getTagDefinition(m)) === null || r === void 0) && r.isClosedByChild(S2.name));
    this._pushContainer(S2, g), o ? this._popContainer(s, ne, u) : t.type === l.INCOMPLETE_TAG_OPEN && (this._popContainer(s, ne, null), this.errors.push(N.create(s, u, `Opening tag "${s}" not terminated.`)));
  }
  _consumeComponentStartTag(t) {
    var r;
    let n = t.parts[0], i = [], s = [];
    this._consumeAttributesAndDirectives(i, s);
    let a = this._getClosestElementLikeParent(), o = this._getComponentTagName(t, a), c = this._getComponentFullName(t, a), u = this._peek.type === l.COMPONENT_OPEN_END_VOID;
    this._advance();
    let p = this._peek.sourceSpan.fullStart, d = new h(t.sourceSpan.start, p, t.sourceSpan.fullStart), S2 = new h(t.sourceSpan.start, p, t.sourceSpan.fullStart), m = new J(n, o, c, i, s, [], u, d, S2, void 0), g = this._getContainer(), E = g !== null && m.tagName !== null && !!(!((r = this._getTagDefinition(g)) === null || r === void 0) && r.isClosedByChild(m.tagName));
    this._pushContainer(m, E), u ? this._popContainer(c, J, d) : t.type === l.INCOMPLETE_COMPONENT_OPEN && (this._popContainer(c, J, null), this.errors.push(N.create(c, d, `Opening tag "${c}" not terminated.`)));
  }
  _consumeAttributesAndDirectives(t, r) {
    for (; this._peek.type === l.ATTR_NAME || this._peek.type === l.DIRECTIVE_NAME; ) this._peek.type === l.DIRECTIVE_NAME ? r.push(this._consumeDirective(this._peek)) : t.push(this._consumeAttr(this._advance()));
  }
  _consumeComponentEndTag(t) {
    let r = this._getComponentFullName(t, this._getClosestElementLikeParent());
    if (!this._popContainer(r, J, t.sourceSpan)) {
      let n = this._containerStack[this._containerStack.length - 1], i;
      n instanceof J && n.componentName === t.parts[0] ? i = `, did you mean "${n.fullName}"?` : i = ". It may happen when the tag has already been closed by another tag.";
      let s = `Unexpected closing tag "${r}"${i}`;
      this.errors.push(N.create(r, t.sourceSpan, s));
    }
  }
  _getTagDefinition(t) {
    return typeof t == "string" ? this.tagDefinitionResolver(t) : t instanceof ne ? this.tagDefinitionResolver(t.name) : t instanceof J && t.tagName !== null ? this.tagDefinitionResolver(t.tagName) : null;
  }
  _pushContainer(t, r) {
    r && this._containerStack.pop(), this._addToParent(t), this._containerStack.push(t);
  }
  _consumeElementEndTag(t) {
    var r;
    let n = this.allowHtmComponentClosingTags && t.parts.length === 0 ? null : this._getElementFullName(t, this._getClosestElementLikeParent());
    if (n && (!((r = this._getTagDefinition(n)) === null || r === void 0) && r.isVoid)) this.errors.push(N.create(n, t.sourceSpan, `Void elements do not have end tags "${t.parts[1]}"`));
    else if (!this._popContainer(n, ne, t.sourceSpan)) {
      let i = `Unexpected closing tag "${n}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
      this.errors.push(N.create(n, t.sourceSpan, i));
    }
  }
  _popContainer(t, r, n) {
    let i = false;
    for (let a = this._containerStack.length - 1; a >= 0; a--) {
      var s;
      let o = this._containerStack[a], c = o instanceof J ? o.fullName : o.name;
      if (Me(c) ? c === t : (c === t || t === null) && o instanceof r) return o.endSourceSpan = n, o.sourceSpan.end = n !== null ? n.end : o.sourceSpan.end, this._containerStack.splice(a, this._containerStack.length - a), !i;
      (o instanceof ve || !(!((s = this._getTagDefinition(o)) === null || s === void 0) && s.closedByParent)) && (i = true);
    }
    return false;
  }
  _consumeAttr(t) {
    let r = Se(t.parts[0], t.parts[1]), n = t.sourceSpan.end, i;
    this._peek.type === l.ATTR_QUOTE && (i = this._advance());
    let s = "", a = [], o, c;
    if (this._peek.type === l.ATTR_VALUE_TEXT) for (o = this._peek.sourceSpan, c = this._peek.sourceSpan.end; this._peek.type === l.ATTR_VALUE_TEXT || this._peek.type === l.ATTR_VALUE_INTERPOLATION || this._peek.type === l.ENCODED_ENTITY; ) {
      let p = this._advance();
      a.push(p), p.type === l.ATTR_VALUE_INTERPOLATION ? s += p.parts.join("").replace(/&([^;]+);/g, as) : p.type === l.ENCODED_ENTITY ? s += p.parts[0] : s += p.parts.join(""), c = n = p.sourceSpan.end;
    }
    this._peek.type === l.ATTR_QUOTE && (c = n = this._advance().sourceSpan.end);
    let u = o && c && new h(i?.sourceSpan.start ?? o.start, c, i?.sourceSpan.fullStart ?? o.fullStart);
    return new Gi(r, s, new h(t.sourceSpan.start, n, t.sourceSpan.fullStart), t.sourceSpan, u, a.length > 0 ? a : void 0, void 0);
  }
  _consumeDirective(t) {
    let r = [], n = t.sourceSpan.end, i = null;
    if (this._advance(), this._peek.type === l.DIRECTIVE_OPEN) {
      for (n = this._peek.sourceSpan.end, this._advance(); this._peek.type === l.ATTR_NAME; ) r.push(this._consumeAttr(this._advance()));
      this._peek.type === l.DIRECTIVE_CLOSE ? (i = this._peek.sourceSpan, this._advance()) : this.errors.push(N.create(null, t.sourceSpan, "Unterminated directive definition"));
    }
    let s = new h(t.sourceSpan.start, n, t.sourceSpan.fullStart), a = new h(s.start, i === null ? t.sourceSpan.end : i.end, s.fullStart);
    return new Yi(t.parts[0], r, a, s, i);
  }
  _consumeBlockOpen(t) {
    let r = [];
    for (; this._peek.type === l.BLOCK_PARAMETER; ) {
      let o = this._advance();
      r.push(new Nr(o.parts[0], o.sourceSpan));
    }
    this._peek.type === l.BLOCK_OPEN_END && this._advance();
    let n = this._peek.sourceSpan.fullStart, i = new h(t.sourceSpan.start, n, t.sourceSpan.fullStart), s = new h(t.sourceSpan.start, n, t.sourceSpan.fullStart), a = new ve(t.parts[0], r, [], i, t.sourceSpan, s);
    this._pushContainer(a, false);
  }
  _consumeBlockClose(t) {
    this._popContainer(null, ve, t.sourceSpan) || this.errors.push(N.create(null, t.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'));
  }
  _consumeIncompleteBlock(t) {
    let r = [];
    for (; this._peek.type === l.BLOCK_PARAMETER; ) {
      let o = this._advance();
      r.push(new Nr(o.parts[0], o.sourceSpan));
    }
    let n = this._peek.sourceSpan.fullStart, i = new h(t.sourceSpan.start, n, t.sourceSpan.fullStart), s = new h(t.sourceSpan.start, n, t.sourceSpan.fullStart), a = new ve(t.parts[0], r, [], i, t.sourceSpan, s);
    this._pushContainer(a, false), this._popContainer(null, ve, null), this.errors.push(N.create(t.parts[0], i, `Incomplete block "${t.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
  }
  _consumeLet(t) {
    let r = t.parts[0], n, i;
    if (this._peek.type !== l.LET_VALUE) {
      this.errors.push(N.create(t.parts[0], t.sourceSpan, `Invalid @let declaration "${r}". Declaration must have a value.`));
      return;
    } else n = this._advance();
    if (this._peek.type !== l.LET_END) {
      this.errors.push(N.create(t.parts[0], t.sourceSpan, `Unterminated @let declaration "${r}". Declaration must be terminated with a semicolon.`));
      return;
    } else i = this._advance();
    let s = i.sourceSpan.fullStart, a = new h(t.sourceSpan.start, s, t.sourceSpan.fullStart), o = t.sourceSpan.toString().lastIndexOf(r), c = new h(t.sourceSpan.start.moveBy(o), t.sourceSpan.end), u = new Lr(r, n.parts[0], a, c, n.sourceSpan);
    this._addToParent(u);
  }
  _consumeIncompleteLet(t) {
    let r = t.parts[0] ?? "", n = r ? ` "${r}"` : "";
    if (r.length > 0) {
      let i = t.sourceSpan.toString().lastIndexOf(r), s = new h(t.sourceSpan.start.moveBy(i), t.sourceSpan.end), a = new h(t.sourceSpan.start, t.sourceSpan.start.moveBy(0)), o = new Lr(r, "", t.sourceSpan, s, a);
      this._addToParent(o);
    }
    this.errors.push(N.create(t.parts[0], t.sourceSpan, `Incomplete @let declaration${n}. @let declarations must be written as \`@let <name> = <value>;\``));
  }
  _getContainer() {
    return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
  }
  _getClosestElementLikeParent() {
    for (let t = this._containerStack.length - 1; t > -1; t--) {
      let r = this._containerStack[t];
      if (r instanceof ne || r instanceof J) return r;
    }
    return null;
  }
  _addToParent(t) {
    let r = this._getContainer();
    r === null ? this.rootNodes.push(t) : r.children.push(t);
  }
  _getElementFullName(t, r) {
    return Se(this._getPrefix(t, r), t.parts[1]);
  }
  _getComponentFullName(t, r) {
    let n = t.parts[0], i = this._getComponentTagName(t, r);
    return i === null ? n : i.startsWith(":") ? n + i : `${n}:${i}`;
  }
  _getComponentTagName(t, r) {
    let n = this._getPrefix(t, r), i = t.parts[2];
    return !n && !i ? null : !n && i ? i : Se(n, i || "ng-component");
  }
  _getPrefix(t, r) {
    var n;
    let i, s;
    if (t.type === l.COMPONENT_OPEN_START || t.type === l.INCOMPLETE_COMPONENT_OPEN || t.type === l.COMPONENT_CLOSE ? (i = t.parts[1], s = t.parts[2]) : (i = t.parts[0], s = t.parts[1]), i = i || ((n = this._getTagDefinition(s)) === null || n === void 0 ? void 0 : n.implicitNamespacePrefix) || "", !i && r) {
      let a = r instanceof ne ? r.name : r.tagName;
      if (a !== null) {
        let o = at(a)[1], c = this._getTagDefinition(o);
        c !== null && !c.preventNamespaceInheritance && (i = Me(a));
      }
    }
    return i;
  }
};
function ss(e, t) {
  return e.length > 0 && e[e.length - 1] === t;
}
function as(e, t) {
  return Te[t] !== void 0 ? Te[t] || e : /^#x[a-f0-9]+$/i.test(t) ? String.fromCodePoint(parseInt(t.slice(2), 16)) : /^#\d+$/.test(t) ? String.fromCodePoint(parseInt(t.slice(1), 10)) : e;
}
var us = class extends ls {
  constructor() {
    super(Be);
  }
  parse(e, t, r, n = false, i) {
    return super.parse(e, t, r, n, i);
  }
};
var Ur = null;
var Wo = () => (Ur || (Ur = new us()), Ur);
function Qt(e, t = {}) {
  let { canSelfClose: r = false, allowHtmComponentClosingTags: n = false, isTagNameCaseSensitive: i = false, getTagContentType: s, tokenizeAngularBlocks: a = false, tokenizeAngularLetDeclaration: o = false, enableAngularSelectorlessSyntax: c = false } = t;
  return Wo().parse(e, "angular-html-parser", { tokenizeExpansionForms: a, canSelfClose: r, allowHtmComponentClosingTags: n, tokenizeBlocks: a, tokenizeLet: o, selectorlessEnabled: c }, i, s);
}
var Go = [zo, Yo, Xo, Qo, Jo, tl, Zo, el, rl, Ko];
function $o(e, t) {
  for (let r of Go) r(e, t);
  return e;
}
function zo(e) {
  e.walk((t) => {
    if (t.kind === "element" && t.tagDefinition.ignoreFirstLf && t.children.length > 0 && t.children[0].kind === "text" && t.children[0].value[0] === `
`) {
      let r = t.children[0];
      r.value.length === 1 ? t.removeChild(r) : r.value = r.value.slice(1);
    }
  });
}
function Yo(e) {
  let t = (r) => r.kind === "element" && r.prev?.kind === "ieConditionalStartComment" && r.prev.sourceSpan.end.offset === r.startSourceSpan.start.offset && r.firstChild?.kind === "ieConditionalEndComment" && r.firstChild.sourceSpan.start.offset === r.startSourceSpan.end.offset;
  e.walk((r) => {
    if (r.children) for (let n = 0; n < r.children.length; n++) {
      let i = r.children[n];
      if (!t(i)) continue;
      let s = i.prev, a = i.firstChild;
      r.removeChild(s), n--;
      let o = new h(s.sourceSpan.start, a.sourceSpan.end), c = new h(o.start, i.sourceSpan.end);
      i.condition = s.condition, i.sourceSpan = c, i.startSourceSpan = o, i.removeChild(a);
    }
  });
}
function jo(e, t, r) {
  e.walk((n) => {
    if (n.children) for (let i = 0; i < n.children.length; i++) {
      let s = n.children[i];
      if (s.kind !== "text" && !t(s)) continue;
      s.kind !== "text" && (s.kind = "text", s.value = r(s));
      let a = s.prev;
      !a || a.kind !== "text" || (a.value += s.value, a.sourceSpan = new h(a.sourceSpan.start, s.sourceSpan.end), n.removeChild(s), i--);
    }
  });
}
function Xo(e) {
  return jo(e, (t) => t.kind === "cdata", (t) => `<![CDATA[${t.value}]]>`);
}
function Ko(e) {
  let t = (r) => r.kind === "element" && r.attrs.length === 0 && r.children.length === 1 && r.firstChild.kind === "text" && !x.hasWhitespaceCharacter(r.children[0].value) && !r.firstChild.hasLeadingSpaces && !r.firstChild.hasTrailingSpaces && r.isLeadingSpaceSensitive && !r.hasLeadingSpaces && r.isTrailingSpaceSensitive && !r.hasTrailingSpaces && r.prev?.kind === "text" && r.next?.kind === "text";
  e.walk((r) => {
    if (r.children) for (let n = 0; n < r.children.length; n++) {
      let i = r.children[n];
      if (!t(i)) continue;
      let s = i.prev, a = i.next;
      s.value += `<${i.rawName}>` + i.firstChild.value + `</${i.rawName}>` + a.value, s.sourceSpan = new h(s.sourceSpan.start, a.sourceSpan.end), s.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive, s.hasTrailingSpaces = a.hasTrailingSpaces, r.removeChild(i), n--, r.removeChild(a);
    }
  });
}
function Qo(e, t) {
  if (t.parser === "html") return;
  let r = /\{\{(.+?)\}\}/su;
  e.walk((n) => {
    if (An(n, t)) for (let i of n.children) {
      if (i.kind !== "text") continue;
      let s = i.sourceSpan.start, a = null, o = i.value.split(r);
      for (let c = 0; c < o.length; c++, s = a) {
        let u = o[c];
        if (c % 2 === 0) {
          a = s.moveBy(u.length), u.length > 0 && n.insertChildBefore(i, { kind: "text", value: u, sourceSpan: new h(s, a) });
          continue;
        }
        a = s.moveBy(u.length + 4), n.insertChildBefore(i, { kind: "interpolation", sourceSpan: new h(s, a), children: u.length === 0 ? [] : [{ kind: "text", value: u, sourceSpan: new h(s.moveBy(2), a.moveBy(-2)) }] });
      }
      n.removeChild(i);
    }
  });
}
function Jo(e, t) {
  e.walk((r) => {
    let n = r.$children;
    if (!n) return;
    if (n.length === 0 || n.length === 1 && n[0].kind === "text" && x.trim(n[0].value).length === 0) {
      r.hasDanglingSpaces = n.length > 0, r.$children = [];
      return;
    }
    let i = yn(r, t), s = dr(r);
    if (!i) for (let a = 0; a < n.length; a++) {
      let o = n[a];
      if (o.kind !== "text") continue;
      let { leadingWhitespace: c, text: u, trailingWhitespace: p } = kn(o.value), d = o.prev, S2 = o.next;
      u ? (o.value = u, o.sourceSpan = new h(o.sourceSpan.start.moveBy(c.length), o.sourceSpan.end.moveBy(-p.length)), c && (d && (d.hasTrailingSpaces = true), o.hasLeadingSpaces = true), p && (o.hasTrailingSpaces = true, S2 && (S2.hasLeadingSpaces = true))) : (r.removeChild(o), a--, (c || p) && (d && (d.hasTrailingSpaces = true), S2 && (S2.hasLeadingSpaces = true)));
    }
    r.isWhitespaceSensitive = i, r.isIndentationSensitive = s;
  });
}
function Zo(e) {
  e.walk((t) => {
    t.isSelfClosing = !t.children || t.kind === "element" && (t.tagDefinition.isVoid || t.endSourceSpan && t.startSourceSpan.start === t.endSourceSpan.start && t.startSourceSpan.end === t.endSourceSpan.end);
  });
}
function el(e, t) {
  e.walk((r) => {
    r.kind === "element" && (r.hasHtmComponentClosingTag = r.endSourceSpan && /^<\s*\/\s*\/\s*>$/u.test(t.originalText.slice(r.endSourceSpan.start.offset, r.endSourceSpan.end.offset)));
  });
}
function tl(e, t) {
  e.walk((r) => {
    r.cssDisplay = Bn(r, t);
  });
}
function rl(e, t) {
  e.walk((r) => {
    let { children: n } = r;
    if (n) {
      if (n.length === 0) {
        r.isDanglingSpaceSensitive = Ln(r, t);
        return;
      }
      for (let i of n) i.isLeadingSpaceSensitive = xn(i, t), i.isTrailingSpaceSensitive = Nn(i, t);
      for (let i = 0; i < n.length; i++) {
        let s = n[i];
        s.isLeadingSpaceSensitive = (i === 0 || s.prev.isTrailingSpaceSensitive) && s.isLeadingSpaceSensitive, s.isTrailingSpaceSensitive = (i === n.length - 1 || s.next.isLeadingSpaceSensitive) && s.isTrailingSpaceSensitive;
      }
    }
  });
}
var ps = $o;
function nl(e, t, r) {
  let { node: n } = e;
  switch (n.kind) {
    case "root":
      return t.__onHtmlRoot && t.__onHtmlRoot(n), [C(Ie(e, t, r)), v];
    case "element":
    case "ieConditionalComment":
      return Pi(e, t, r);
    case "angularControlFlowBlock":
      return Ai(e, t, r);
    case "angularControlFlowBlockParameters":
      return xi(e, t, r);
    case "angularControlFlowBlockParameter":
      return x.trim(n.expression);
    case "angularLetDeclaration":
      return C(["@let ", C([n.id, " =", C(y([_, r("init")]))]), ";"]);
    case "angularLetDeclarationInitializer":
      return n.value;
    case "angularIcuExpression":
      return Ni(e, t, r);
    case "angularIcuCase":
      return Li(e, t, r);
    case "ieConditionalStartComment":
    case "ieConditionalEndComment":
      return [_e(n), me(n)];
    case "interpolation":
      return [_e(n, t), ...e.map(r, "children"), me(n, t)];
    case "text": {
      if (n.parent.kind === "interpolation") {
        let o = /\n[^\S\n]*$/u, c = o.test(n.value), u = c ? n.value.replace(o, "") : n.value;
        return [L(u), c ? v : ""];
      }
      let i = U(n, t), s = Ot(n), a = V(n, t);
      return s[0] = [i, s[0]], s.push([s.pop(), a]), kt(s);
    }
    case "docType":
      return [C([_e(n, t), " ", w(0, n.value.replace(/^html\b/iu, "html"), /\s+/gu, " ")]), me(n, t)];
    case "comment":
      return [U(n, t), L(t.originalText.slice(Q(n), te(n))), V(n, t)];
    case "attribute": {
      if (n.value === null) return n.rawName;
      let i = Sr(n.value), s = Rt(n, t) ? "" : pn(i, '"');
      return [n.rawName, "=", s, L(s === '"' ? w(0, i, '"', "&quot;") : w(0, i, "'", "&apos;")), s];
    }
    case "frontMatter":
    case "cdata":
    default:
      throw new mn(n, "HTML");
  }
}
var il = { features: { experimental_frontMatterSupport: { massageAstNode: true, embed: true, print: true } }, preprocess: ps, print: nl, insertPragma: bi, massageAstNode: dn, embed: fi, getVisitorKeys: _i };
var hs = il;
var ms = [{ name: "Angular", type: "markup", aceMode: "html", extensions: [".component.html"], tmScope: "text.html.basic", aliases: ["xhtml"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["angular"], vscodeLanguageIds: ["html"], filenames: [], linguistLanguageId: 146 }, { name: "HTML", type: "markup", aceMode: "html", extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"], tmScope: "text.html.basic", aliases: ["xhtml"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["html"], vscodeLanguageIds: ["html"], linguistLanguageId: 146 }, { name: "Lightning Web Components", type: "markup", aceMode: "html", extensions: [], tmScope: "text.html.basic", aliases: ["xhtml"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["lwc"], vscodeLanguageIds: ["html"], filenames: [], linguistLanguageId: 146 }, { name: "MJML", type: "markup", aceMode: "html", extensions: [".mjml"], tmScope: "text.mjml.basic", aliases: ["MJML", "mjml"], codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", parsers: ["mjml"], filenames: [], vscodeLanguageIds: ["mjml"], linguistLanguageId: 146 }, { name: "Vue", type: "markup", aceMode: "vue", extensions: [".vue"], tmScope: "source.vue", codemirrorMode: "vue", codemirrorMimeType: "text/x-vue", parsers: ["vue"], vscodeLanguageIds: ["vue"], linguistLanguageId: 391 }];
var Wr = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, objectWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap object literals.", choices: [{ value: "preserve", description: "Keep as multi-line, if there is a newline between the opening brace and first property." }, { value: "collapse", description: "Fit to a single line when possible." }] }, singleQuote: { category: "Common", type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap prose.", choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { category: "Common", type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
var fs = "HTML";
var sl = { bracketSameLine: Wr.bracketSameLine, htmlWhitespaceSensitivity: { category: fs, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: Wr.singleAttributePerLine, vueIndentScriptAndStyle: { category: fs, type: "boolean", default: false, description: "Indent script and style tags in Vue files." } };
var ds = sl;
var Qr = {};
en(Qr, { angular: () => kl, html: () => Tl, lwc: () => yl, mjml: () => wl, vue: () => Al });
function al(e, t) {
  let r = new SyntaxError(e + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
  return Object.assign(r, t);
}
var gs = al;
var ol = { canSelfClose: true, normalizeTagName: false, normalizeAttributeName: false, allowHtmComponentClosingTags: false, isTagNameCaseSensitive: false, shouldParseFrontMatter: true };
function Jt(e) {
  return { ...ol, ...e };
}
function Gr(e) {
  let { canSelfClose: t, allowHtmComponentClosingTags: r, isTagNameCaseSensitive: n, shouldParseAsRawText: i, tokenizeAngularBlocks: s, tokenizeAngularLetDeclaration: a } = e;
  return { canSelfClose: t, allowHtmComponentClosingTags: r, isTagNameCaseSensitive: n, getTagContentType: i ? (...o) => i(...o) ? I.RAW_TEXT : void 0 : void 0, tokenizeAngularBlocks: s, tokenizeAngularLetDeclaration: a };
}
var Zt = /* @__PURE__ */ new Map([["*", /* @__PURE__ */ new Set(["accesskey", "autocapitalize", "autocorrect", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "exportparts", "hidden", "id", "inert", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "part", "popover", "slot", "spellcheck", "style", "tabindex", "title", "translate", "writingsuggestions"])], ["a", /* @__PURE__ */ new Set(["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"])], ["applet", /* @__PURE__ */ new Set(["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"])], ["area", /* @__PURE__ */ new Set(["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"])], ["audio", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"])], ["base", /* @__PURE__ */ new Set(["href", "target"])], ["basefont", /* @__PURE__ */ new Set(["color", "face", "size"])], ["blockquote", /* @__PURE__ */ new Set(["cite"])], ["body", /* @__PURE__ */ new Set(["alink", "background", "bgcolor", "link", "text", "vlink"])], ["br", /* @__PURE__ */ new Set(["clear"])], ["button", /* @__PURE__ */ new Set(["command", "commandfor", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "popovertarget", "popovertargetaction", "type", "value"])], ["canvas", /* @__PURE__ */ new Set(["height", "width"])], ["caption", /* @__PURE__ */ new Set(["align"])], ["col", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["colgroup", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["data", /* @__PURE__ */ new Set(["value"])], ["del", /* @__PURE__ */ new Set(["cite", "datetime"])], ["details", /* @__PURE__ */ new Set(["name", "open"])], ["dialog", /* @__PURE__ */ new Set(["closedby", "open"])], ["dir", /* @__PURE__ */ new Set(["compact"])], ["div", /* @__PURE__ */ new Set(["align"])], ["dl", /* @__PURE__ */ new Set(["compact"])], ["embed", /* @__PURE__ */ new Set(["height", "src", "type", "width"])], ["fieldset", /* @__PURE__ */ new Set(["disabled", "form", "name"])], ["font", /* @__PURE__ */ new Set(["color", "face", "size"])], ["form", /* @__PURE__ */ new Set(["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"])], ["frame", /* @__PURE__ */ new Set(["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"])], ["frameset", /* @__PURE__ */ new Set(["cols", "rows"])], ["h1", /* @__PURE__ */ new Set(["align"])], ["h2", /* @__PURE__ */ new Set(["align"])], ["h3", /* @__PURE__ */ new Set(["align"])], ["h4", /* @__PURE__ */ new Set(["align"])], ["h5", /* @__PURE__ */ new Set(["align"])], ["h6", /* @__PURE__ */ new Set(["align"])], ["head", /* @__PURE__ */ new Set(["profile"])], ["hr", /* @__PURE__ */ new Set(["align", "noshade", "size", "width"])], ["html", /* @__PURE__ */ new Set(["manifest", "version"])], ["iframe", /* @__PURE__ */ new Set(["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"])], ["img", /* @__PURE__ */ new Set(["align", "alt", "border", "crossorigin", "decoding", "fetchpriority", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"])], ["input", /* @__PURE__ */ new Set(["accept", "align", "alpha", "alt", "autocomplete", "checked", "colorspace", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "popovertarget", "popovertargetaction", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"])], ["ins", /* @__PURE__ */ new Set(["cite", "datetime"])], ["isindex", /* @__PURE__ */ new Set(["prompt"])], ["label", /* @__PURE__ */ new Set(["for", "form"])], ["legend", /* @__PURE__ */ new Set(["align"])], ["li", /* @__PURE__ */ new Set(["type", "value"])], ["link", /* @__PURE__ */ new Set(["as", "blocking", "charset", "color", "crossorigin", "disabled", "fetchpriority", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"])], ["map", /* @__PURE__ */ new Set(["name"])], ["menu", /* @__PURE__ */ new Set(["compact"])], ["meta", /* @__PURE__ */ new Set(["charset", "content", "http-equiv", "media", "name", "scheme"])], ["meter", /* @__PURE__ */ new Set(["high", "low", "max", "min", "optimum", "value"])], ["object", /* @__PURE__ */ new Set(["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"])], ["ol", /* @__PURE__ */ new Set(["compact", "reversed", "start", "type"])], ["optgroup", /* @__PURE__ */ new Set(["disabled", "label"])], ["option", /* @__PURE__ */ new Set(["disabled", "label", "selected", "value"])], ["output", /* @__PURE__ */ new Set(["for", "form", "name"])], ["p", /* @__PURE__ */ new Set(["align"])], ["param", /* @__PURE__ */ new Set(["name", "type", "value", "valuetype"])], ["pre", /* @__PURE__ */ new Set(["width"])], ["progress", /* @__PURE__ */ new Set(["max", "value"])], ["q", /* @__PURE__ */ new Set(["cite"])], ["script", /* @__PURE__ */ new Set(["async", "blocking", "charset", "crossorigin", "defer", "fetchpriority", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"])], ["select", /* @__PURE__ */ new Set(["autocomplete", "disabled", "form", "multiple", "name", "required", "size"])], ["slot", /* @__PURE__ */ new Set(["name"])], ["source", /* @__PURE__ */ new Set(["height", "media", "sizes", "src", "srcset", "type", "width"])], ["style", /* @__PURE__ */ new Set(["blocking", "media", "type"])], ["table", /* @__PURE__ */ new Set(["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"])], ["tbody", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["td", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["template", /* @__PURE__ */ new Set(["shadowrootclonable", "shadowrootcustomelementregistry", "shadowrootdelegatesfocus", "shadowrootmode", "shadowrootserializable"])], ["textarea", /* @__PURE__ */ new Set(["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"])], ["tfoot", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["th", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["thead", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["time", /* @__PURE__ */ new Set(["datetime"])], ["tr", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "valign"])], ["track", /* @__PURE__ */ new Set(["default", "kind", "label", "src", "srclang"])], ["ul", /* @__PURE__ */ new Set(["compact", "type"])], ["video", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"])]]);
var _s = /* @__PURE__ */ new Set(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fencedframe", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "search", "section", "select", "selectedcontent", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]);
var er = { attrs: true, children: true, cases: true, expression: true };
var Ss = /* @__PURE__ */ new Set(["parent"]);
var ae;
var $r;
var zr;
var We = class We2 {
  constructor(t = {}) {
    tn(this, ae);
    ir(this, "kind");
    ir(this, "parent");
    for (let r of /* @__PURE__ */ new Set([...Ss, ...Object.keys(t)])) this.setProperty(r, t[r]);
    if (le(t)) for (let r of Object.getOwnPropertySymbols(t)) this.setProperty(r, t[r]);
  }
  setProperty(t, r) {
    if (this[t] !== r) {
      if (t in er && (r = r.map((n) => this.createChild(n))), !Ss.has(t)) {
        this[t] = r;
        return;
      }
      Object.defineProperty(this, t, { value: r, enumerable: false, configurable: true });
    }
  }
  map(t) {
    let r;
    for (let n in er) {
      let i = this[n];
      if (i) {
        let s = ll(i, (a) => a.map(t));
        r !== i && (r || (r = new We2({ parent: this.parent })), r.setProperty(n, s));
      }
    }
    if (r) for (let n in this) n in er || (r[n] = this[n]);
    return t(r || this);
  }
  walk(t) {
    for (let r in er) {
      let n = this[r];
      if (n) for (let i = 0; i < n.length; i++) n[i].walk(t);
    }
    t(this);
  }
  createChild(t) {
    let r = t instanceof We2 ? t.clone() : new We2(t);
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
    return new We2(this);
  }
  get $children() {
    return this[$e(this, ae, $r)];
  }
  set $children(t) {
    this[$e(this, ae, $r)] = t;
  }
  get firstChild() {
    return this.$children?.[0];
  }
  get lastChild() {
    return F(1, this.$children, -1);
  }
  get prev() {
    let t = $e(this, ae, zr);
    return t[t.indexOf(this) - 1];
  }
  get next() {
    let t = $e(this, ae, zr);
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
ae = /* @__PURE__ */ new WeakSet(), $r = function() {
  return this.kind === "angularIcuCase" ? "expression" : this.kind === "angularIcuExpression" ? "cases" : "children";
}, zr = function() {
  return this.parent?.$children ?? [];
};
var tr = We;
function ll(e, t) {
  let r = e.map(t);
  return r.some((n, i) => n !== e[i]) ? r : e;
}
var cl = [{ regex: /^(?<openingTagSuffix>\[if(?<condition>[^\]]*)\]>)(?<data>.*?)<!\s*\[endif\]$/su, parse: ul }, { regex: /^\[if(?<condition>[^\]]*)\]><!$/u, parse: pl }, { regex: /^<!\s*\[endif\]$/u, parse: hl }];
function Es(e, t) {
  if (e.value) for (let { regex: r, parse: n } of cl) {
    let i = e.value.match(r);
    if (i) return n(e, i, t);
  }
  return null;
}
function ul(e, t, r) {
  let { openingTagSuffix: n, condition: i, data: s } = t.groups, a = 4 + n.length, o = e.sourceSpan.start.moveBy(a), c = o.moveBy(s.length), [u, p] = (() => {
    try {
      return [true, r(s, o).children];
    } catch {
      return [false, [{ kind: "text", value: s, sourceSpan: new h(o, c) }]];
    }
  })();
  return { kind: "ieConditionalComment", complete: u, children: p, condition: w(0, i.trim(), /\s+/gu, " "), sourceSpan: e.sourceSpan, startSourceSpan: new h(e.sourceSpan.start, o), endSourceSpan: new h(c, e.sourceSpan.end) };
}
function pl(e, t) {
  let { condition: r } = t.groups;
  return { kind: "ieConditionalStartComment", condition: w(0, r.trim(), /\s+/gu, " "), sourceSpan: e.sourceSpan };
}
function hl(e) {
  return { kind: "ieConditionalEndComment", sourceSpan: e.sourceSpan };
}
var Yr = class extends Pr {
  visitExpansionCase(t, r) {
    r.parseOptions.name === "angular" && this.visitChildren(r, (n) => {
      n(t.expression);
    });
  }
  visit(t, { parseOptions: r }) {
    gl(t), _l(t, r), El(t, r), Sl(t);
  }
};
function Ts(e, t, r, n) {
  Wt(new Yr(), e.children, { parseOptions: r }), t && e.children.unshift(t);
  let i = new tr(e);
  return i.walk((s) => {
    if (s.kind === "comment") {
      let a = Es(s, n);
      a && s.parent.replaceChild(s, a);
    }
    ml(s), fl(s), dl(s);
  }), i;
}
function ml(e) {
  if (e.kind === "block") {
    if (e.name = w(0, e.name.toLowerCase(), /\s+/gu, " ").trim(), e.kind = "angularControlFlowBlock", !Re(e.parameters)) {
      delete e.parameters;
      return;
    }
    for (let t of e.parameters) t.kind = "angularControlFlowBlockParameter";
    e.parameters = { kind: "angularControlFlowBlockParameters", children: e.parameters, sourceSpan: new h(e.parameters[0].sourceSpan.start, F(0, e.parameters, -1).sourceSpan.end) };
  }
}
function fl(e) {
  e.kind === "letDeclaration" && (e.kind = "angularLetDeclaration", e.id = e.name, e.init = { kind: "angularLetDeclarationInitializer", sourceSpan: new h(e.valueSpan.start, e.valueSpan.end), value: e.value }, delete e.name, delete e.value);
}
function dl(e) {
  e.kind === "expansion" && (e.kind = "angularIcuExpression"), e.kind === "expansionCase" && (e.kind = "angularIcuCase");
}
function Cs(e, t) {
  let r = e.toLowerCase();
  return t(r) ? r : e;
}
function vs(e) {
  let t = e.name.startsWith(":") ? e.name.slice(1).split(":")[0] : null, r = e.nameSpan.toString(), n = t !== null && r.startsWith(`${t}:`), i = n ? r.slice(t.length + 1) : r;
  e.name = i, e.namespace = t, e.hasExplicitNamespace = n;
}
function gl(e) {
  switch (e.kind) {
    case "element":
      vs(e);
      for (let t of e.attrs) vs(t), t.valueSpan ? (t.value = t.valueSpan.toString(), /["']/u.test(t.value[0]) && (t.value = t.value.slice(1, -1))) : t.value = null;
      break;
    case "comment":
      e.value = e.sourceSpan.toString().slice(4, -3);
      break;
    case "text":
      e.value = e.sourceSpan.toString();
      break;
  }
}
function _l(e, t) {
  if (e.kind === "element") {
    let r = Be(t.isTagNameCaseSensitive ? e.name : e.name.toLowerCase());
    !e.namespace || e.namespace === r.implicitNamespacePrefix || ce(e) ? e.tagDefinition = r : e.tagDefinition = Be("");
  }
}
function Sl(e) {
  e.sourceSpan && e.endSourceSpan && (e.sourceSpan = new h(e.sourceSpan.start, e.endSourceSpan.end));
}
function El(e, t) {
  if (e.kind === "element" && (t.normalizeTagName && (!e.namespace || e.namespace === e.tagDefinition.implicitNamespacePrefix || ce(e)) && (e.name = Cs(e.name, (r) => _s.has(r))), t.normalizeAttributeName)) for (let r of e.attrs) r.namespace || (r.name = Cs(r.name, (n) => Zt.has(e.name) && (Zt.get("*").has(n) || Zt.get(e.name).has(n))));
}
function Xr(e, t) {
  let { rootNodes: r, errors: n } = Qt(e, Gr(t));
  return n.length > 0 && jr(n[0]), { parseOptions: t, rootNodes: r };
}
function bs(e, t) {
  let r = Gr(t), { rootNodes: n, errors: i } = Qt(e, r);
  if (n.some((u) => u.kind === "docType" && u.value === "html" || u.kind === "element" && u.name.toLowerCase() === "html")) return Xr(e, rr);
  let a, o = () => a ?? (a = Qt(e, { ...r, getTagContentType: void 0 })), c = (u) => {
    let { offset: p } = u.startSourceSpan.start;
    return o().rootNodes.find((d) => d.kind === "element" && d.startSourceSpan.start.offset === p) ?? u;
  };
  for (let [u, p] of n.entries()) if (p.kind === "element") {
    if (p.isVoid) i = o().errors, n[u] = c(p);
    else if (Cl(p)) {
      let { endSourceSpan: d, startSourceSpan: S2 } = p, m = o().errors.find((g) => g.span.start.offset > S2.start.offset && g.span.start.offset < d.end.offset);
      m && jr(m), n[u] = c(p);
    }
  }
  return i.length > 0 && jr(i[0]), { parseOptions: t, rootNodes: n };
}
function Cl(e) {
  if (e.kind !== "element" || e.name !== "template") return false;
  let t = e.attrs.find((r) => r.name === "lang")?.value;
  return !t || t === "html";
}
function jr(e) {
  let { msg: t, span: { start: r, end: n } } = e;
  throw gs(t, { loc: { start: { line: r.line + 1, column: r.col + 1 }, end: { line: n.line + 1, column: n.col + 1 } }, cause: e });
}
function vl(e, t, r, n, i, s) {
  let { offset: a } = n, o = w(0, t.slice(0, a), /[^\n]/gu, " ") + r, c = Kr(o, e, { ...i, shouldParseFrontMatter: false }, s);
  c.sourceSpan = new h(n, F(0, c.children, -1).sourceSpan.end);
  let u = c.children[0];
  return u.length === a ? c.children.shift() : (u.sourceSpan = new h(u.sourceSpan.start.moveBy(a), u.sourceSpan.end), u.value = u.value.slice(a)), c;
}
function Kr(e, t, r, n = {}) {
  let { frontMatter: i, content: s } = r.shouldParseFrontMatter ? pr(e) : { content: e }, a = new ht(e, n.filepath), o = new qe(a, 0, 0, 0), c = o.moveBy(e.length), { parseOptions: u, rootNodes: p } = t(s, r), d = { kind: "root", sourceSpan: new h(o, c), children: p }, S2;
  if (i) {
    let [g, E] = [i.start, i.end].map((P2) => new qe(a, P2.index, P2.line - 1, P2.column));
    S2 = { ...i, kind: "frontMatter", sourceSpan: new h(g, E) };
  }
  return Ts(d, S2, u, (g, E) => vl(t, e, g, E, u, n));
}
var rr = Jt({ name: "html", normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true });
function dt(e) {
  let t = Jt(e), r = t.name === "vue" ? bs : Xr;
  return { parse: (n, i) => Kr(n, r, t, i), hasPragma: vi, hasIgnorePragma: Ti, astFormat: "html", locStart: Q, locEnd: te };
}
var Tl = dt(rr);
var bl = /* @__PURE__ */ new Set(["mj-style", "mj-raw"]);
var wl = dt({ ...rr, name: "mjml", shouldParseAsRawText: (e) => bl.has(e) });
var kl = dt({ name: "angular", tokenizeAngularBlocks: true, tokenizeAngularLetDeclaration: true });
var Al = dt({ name: "vue", isTagNameCaseSensitive: true, shouldParseAsRawText(e, t, r, n) {
  return e.toLowerCase() !== "html" && !r && (e !== "template" || n.some(({ name: i, value: s }) => i === "lang" && s !== "html" && s !== "" && s !== void 0));
} });
var yl = dt({ name: "lwc", canSelfClose: false });
var xl = { html: hs };

// ../../node_modules/prettier/standalone.mjs
var Zn2 = Object.create;
var Mt2 = Object.defineProperty;
var eo2 = Object.getOwnPropertyDescriptor;
var to2 = Object.getOwnPropertyNames;
var uo = Object.getPrototypeOf;
var ro2 = Object.prototype.hasOwnProperty;
var no2 = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Yt = (e, t) => {
  for (var u in t) Mt2(e, u, { get: t[u], enumerable: true });
};
var oo2 = (e, t, u, r) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of to2(t)) !ro2.call(e, o) && o !== u && Mt2(e, o, { get: () => t[o], enumerable: !(r = eo2(t, o)) || r.enumerable });
  return e;
};
var ao2 = (e, t, u) => (u = e != null ? Zn2(uo(e)) : {}, oo2(t || !e || !e.__esModule ? Mt2(u, "default", { value: e, enumerable: true }) : u, e));
var dn2 = no2((of, ln2) => {
  var yt2, bt2, At2, _t2, xt2, $e2, bu, Ke2, Bt2, cn2, Tt2, Ve, Nt2, St2, wt2, pe2, fn2, Ot2, Pt2, Aa2;
  Nt2 = /\/(?![*\/])(?:\[(?:[^\]\\\n\r\u2028\u2029]+|\\.)*\]|[^\/\\\n\r\u2028\u2029]+|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/yu;
  Ve = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
  yt2 = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]+|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/yu;
  wt2 = /(['"])(?:[^'"\\\n\r]+|(?!\1)['"]|\\(?:\r\n|[^]))*(\1)?/y;
  Tt2 = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
  pe2 = /[`}](?:[^`\\$]+|\\[^]|\$(?!\{))*(`|\$\{)?/y;
  Pt2 = /[\t\v\f\ufeff\p{Zs}]+/yu;
  Ke2 = /\r?\n|[\r\u2028\u2029]/y;
  Bt2 = /\/\*(?:[^*]+|\*(?!\/))*(\*\/)?/y;
  St2 = /\/\/.*/y;
  At2 = /[<>.:={}]|\/(?![\/*])/y;
  bt2 = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/yu;
  _t2 = /(['"])(?:[^'"]+|(?!\1)['"])*(\1)?/y;
  xt2 = /[^<>{}]+/y;
  Ot2 = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
  fn2 = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
  $e2 = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
  bu = /^(?:return|throw|yield)$/;
  cn2 = RegExp(Ke2.source);
  ln2.exports = Aa2 = function* (e, { jsx: t = false } = {}) {
    var u, r, o, n, a, s, i, D2, f2, l2, d, c, p, F2;
    for ({ length: s } = e, n = 0, a = "", F2 = [{ tag: "JS" }], u = [], d = 0, c = false; n < s; ) {
      switch (D2 = F2[F2.length - 1], D2.tag) {
        case "JS":
        case "JSNonExpressionParen":
        case "InterpolationInTemplate":
        case "InterpolationInJSX":
          if (e[n] === "/" && (Ot2.test(a) || $e2.test(a)) && (Nt2.lastIndex = n, i = Nt2.exec(e))) {
            n = Nt2.lastIndex, a = i[0], c = true, yield { type: "RegularExpressionLiteral", value: i[0], closed: i[1] !== void 0 && i[1] !== "\\" };
            continue;
          }
          if (Ve.lastIndex = n, i = Ve.exec(e)) {
            switch (p = i[0], f2 = Ve.lastIndex, l2 = p, p) {
              case "(":
                a === "?NonExpressionParenKeyword" && F2.push({ tag: "JSNonExpressionParen", nesting: d }), d++, c = false;
                break;
              case ")":
                d--, c = true, D2.tag === "JSNonExpressionParen" && d === D2.nesting && (F2.pop(), l2 = "?NonExpressionParenEnd", c = false);
                break;
              case "{":
                Ve.lastIndex = 0, o = !fn2.test(a) && (Ot2.test(a) || $e2.test(a)), u.push(o), c = false;
                break;
              case "}":
                switch (D2.tag) {
                  case "InterpolationInTemplate":
                    if (u.length === D2.nesting) {
                      pe2.lastIndex = n, i = pe2.exec(e), n = pe2.lastIndex, a = i[0], i[1] === "${" ? (a = "?InterpolationInTemplate", c = false, yield { type: "TemplateMiddle", value: i[0] }) : (F2.pop(), c = true, yield { type: "TemplateTail", value: i[0], closed: i[1] === "`" });
                      continue;
                    }
                    break;
                  case "InterpolationInJSX":
                    if (u.length === D2.nesting) {
                      F2.pop(), n += 1, a = "}", yield { type: "JSXPunctuator", value: "}" };
                      continue;
                    }
                }
                c = u.pop(), l2 = c ? "?ExpressionBraceEnd" : "}";
                break;
              case "]":
                c = true;
                break;
              case "++":
              case "--":
                l2 = c ? "?PostfixIncDec" : "?UnaryIncDec";
                break;
              case "<":
                if (t && (Ot2.test(a) || $e2.test(a))) {
                  F2.push({ tag: "JSXTag" }), n += 1, a = "<", yield { type: "JSXPunctuator", value: p };
                  continue;
                }
                c = false;
                break;
              default:
                c = false;
            }
            n = f2, a = l2, yield { type: "Punctuator", value: p };
            continue;
          }
          if (yt2.lastIndex = n, i = yt2.exec(e)) {
            switch (n = yt2.lastIndex, l2 = i[0], i[0]) {
              case "for":
              case "if":
              case "while":
              case "with":
                a !== "." && a !== "?." && (l2 = "?NonExpressionParenKeyword");
            }
            a = l2, c = !$e2.test(i[0]), yield { type: i[1] === "#" ? "PrivateIdentifier" : "IdentifierName", value: i[0] };
            continue;
          }
          if (wt2.lastIndex = n, i = wt2.exec(e)) {
            n = wt2.lastIndex, a = i[0], c = true, yield { type: "StringLiteral", value: i[0], closed: i[2] !== void 0 };
            continue;
          }
          if (Tt2.lastIndex = n, i = Tt2.exec(e)) {
            n = Tt2.lastIndex, a = i[0], c = true, yield { type: "NumericLiteral", value: i[0] };
            continue;
          }
          if (pe2.lastIndex = n, i = pe2.exec(e)) {
            n = pe2.lastIndex, a = i[0], i[1] === "${" ? (a = "?InterpolationInTemplate", F2.push({ tag: "InterpolationInTemplate", nesting: u.length }), c = false, yield { type: "TemplateHead", value: i[0] }) : (c = true, yield { type: "NoSubstitutionTemplate", value: i[0], closed: i[1] === "`" });
            continue;
          }
          break;
        case "JSXTag":
        case "JSXTagEnd":
          if (At2.lastIndex = n, i = At2.exec(e)) {
            switch (n = At2.lastIndex, l2 = i[0], i[0]) {
              case "<":
                F2.push({ tag: "JSXTag" });
                break;
              case ">":
                F2.pop(), a === "/" || D2.tag === "JSXTagEnd" ? (l2 = "?JSX", c = true) : F2.push({ tag: "JSXChildren" });
                break;
              case "{":
                F2.push({ tag: "InterpolationInJSX", nesting: u.length }), l2 = "?InterpolationInJSX", c = false;
                break;
              case "/":
                a === "<" && (F2.pop(), F2[F2.length - 1].tag === "JSXChildren" && F2.pop(), F2.push({ tag: "JSXTagEnd" }));
            }
            a = l2, yield { type: "JSXPunctuator", value: i[0] };
            continue;
          }
          if (bt2.lastIndex = n, i = bt2.exec(e)) {
            n = bt2.lastIndex, a = i[0], yield { type: "JSXIdentifier", value: i[0] };
            continue;
          }
          if (_t2.lastIndex = n, i = _t2.exec(e)) {
            n = _t2.lastIndex, a = i[0], yield { type: "JSXString", value: i[0], closed: i[2] !== void 0 };
            continue;
          }
          break;
        case "JSXChildren":
          if (xt2.lastIndex = n, i = xt2.exec(e)) {
            n = xt2.lastIndex, a = i[0], yield { type: "JSXText", value: i[0] };
            continue;
          }
          switch (e[n]) {
            case "<":
              F2.push({ tag: "JSXTag" }), n++, a = "<", yield { type: "JSXPunctuator", value: "<" };
              continue;
            case "{":
              F2.push({ tag: "InterpolationInJSX", nesting: u.length }), n++, a = "?InterpolationInJSX", c = false, yield { type: "JSXPunctuator", value: "{" };
              continue;
          }
      }
      if (Pt2.lastIndex = n, i = Pt2.exec(e)) {
        n = Pt2.lastIndex, yield { type: "WhiteSpace", value: i[0] };
        continue;
      }
      if (Ke2.lastIndex = n, i = Ke2.exec(e)) {
        n = Ke2.lastIndex, c = false, bu.test(a) && (a = "?NoLineTerminatorHere"), yield { type: "LineTerminatorSequence", value: i[0] };
        continue;
      }
      if (Bt2.lastIndex = n, i = Bt2.exec(e)) {
        n = Bt2.lastIndex, cn2.test(i[0]) && (c = false, bu.test(a) && (a = "?NoLineTerminatorHere")), yield { type: "MultiLineComment", value: i[0], closed: i[1] !== void 0 };
        continue;
      }
      if (St2.lastIndex = n, i = St2.exec(e)) {
        n = St2.lastIndex, c = false, yield { type: "SingleLineComment", value: i[0] };
        continue;
      }
      r = String.fromCodePoint(e.codePointAt(n)), n += r.length, a = r, c = false, yield { type: D2.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid", value: r };
    }
  };
});
var Hn2 = {};
Yt(Hn2, { __debug: () => li2, check: () => ci2, doc: () => wu, format: () => Jn2, formatWithCursor: () => zn2, getSupportInfo: () => fi2, util: () => Pu, version: () => Mn2 });
var X2 = (e, t) => (u, r, ...o) => u | 1 && r == null ? void 0 : (t.call(r) ?? r[e]).apply(r, o);
var io2 = String.prototype.replaceAll ?? function(e, t) {
  return e.global ? this.replace(e, t) : this.split(e).join(t);
};
var so2 = X2("replaceAll", function() {
  if (typeof this == "string") return io2;
});
var oe = so2;
var Ne2 = class {
  diff(t, u, r = {}) {
    let o;
    typeof r == "function" ? (o = r, r = {}) : "callback" in r && (o = r.callback);
    let n = this.castInput(t, r), a = this.castInput(u, r), s = this.removeEmpty(this.tokenize(n, r)), i = this.removeEmpty(this.tokenize(a, r));
    return this.diffWithOptionsObj(s, i, r, o);
  }
  diffWithOptionsObj(t, u, r, o) {
    var n;
    let a = (m) => {
      if (m = this.postProcess(m, r), o) {
        setTimeout(function() {
          o(m);
        }, 0);
        return;
      } else return m;
    }, s = u.length, i = t.length, D2 = 1, f2 = s + i;
    r.maxEditLength != null && (f2 = Math.min(f2, r.maxEditLength));
    let l2 = (n = r.timeout) !== null && n !== void 0 ? n : 1 / 0, d = Date.now() + l2, c = [{ oldPos: -1, lastComponent: void 0 }], p = this.extractCommon(c[0], u, t, 0, r);
    if (c[0].oldPos + 1 >= i && p + 1 >= s) return a(this.buildValues(c[0].lastComponent, u, t));
    let F2 = -1 / 0, C2 = 1 / 0, y2 = () => {
      for (let m = Math.max(F2, -D2); m <= Math.min(C2, D2); m += 2) {
        let h3, E = c[m - 1], g = c[m + 1];
        E && (c[m - 1] = void 0);
        let A2 = false;
        if (g) {
          let Q2 = g.oldPos - m;
          A2 = g && 0 <= Q2 && Q2 < s;
        }
        let J2 = E && E.oldPos + 1 < i;
        if (!A2 && !J2) {
          c[m] = void 0;
          continue;
        }
        if (!J2 || A2 && E.oldPos < g.oldPos ? h3 = this.addToPath(g, true, false, 0, r) : h3 = this.addToPath(E, false, true, 1, r), p = this.extractCommon(h3, u, t, m, r), h3.oldPos + 1 >= i && p + 1 >= s) return a(this.buildValues(h3.lastComponent, u, t)) || true;
        c[m] = h3, h3.oldPos + 1 >= i && (C2 = Math.min(C2, m - 1)), p + 1 >= s && (F2 = Math.max(F2, m + 1));
      }
      D2++;
    };
    if (o) (function m() {
      setTimeout(function() {
        if (D2 > f2 || Date.now() > d) return o(void 0);
        y2() || m();
      }, 0);
    })();
    else for (; D2 <= f2 && Date.now() <= d; ) {
      let m = y2();
      if (m) return m;
    }
  }
  addToPath(t, u, r, o, n) {
    let a = t.lastComponent;
    return a && !n.oneChangePerToken && a.added === u && a.removed === r ? { oldPos: t.oldPos + o, lastComponent: { count: a.count + 1, added: u, removed: r, previousComponent: a.previousComponent } } : { oldPos: t.oldPos + o, lastComponent: { count: 1, added: u, removed: r, previousComponent: a } };
  }
  extractCommon(t, u, r, o, n) {
    let a = u.length, s = r.length, i = t.oldPos, D2 = i - o, f2 = 0;
    for (; D2 + 1 < a && i + 1 < s && this.equals(r[i + 1], u[D2 + 1], n); ) D2++, i++, f2++, n.oneChangePerToken && (t.lastComponent = { count: 1, previousComponent: t.lastComponent, added: false, removed: false });
    return f2 && !n.oneChangePerToken && (t.lastComponent = { count: f2, previousComponent: t.lastComponent, added: false, removed: false }), t.oldPos = i, D2;
  }
  equals(t, u, r) {
    return r.comparator ? r.comparator(t, u) : t === u || !!r.ignoreCase && t.toLowerCase() === u.toLowerCase();
  }
  removeEmpty(t) {
    let u = [];
    for (let r = 0; r < t.length; r++) t[r] && u.push(t[r]);
    return u;
  }
  castInput(t, u) {
    return t;
  }
  tokenize(t, u) {
    return Array.from(t);
  }
  join(t) {
    return t.join("");
  }
  postProcess(t, u) {
    return t;
  }
  get useLongestToken() {
    return false;
  }
  buildValues(t, u, r) {
    let o = [], n;
    for (; t; ) o.push(t), n = t.previousComponent, delete t.previousComponent, t = n;
    o.reverse();
    let a = o.length, s = 0, i = 0, D2 = 0;
    for (; s < a; s++) {
      let f2 = o[s];
      if (f2.removed) f2.value = this.join(r.slice(D2, D2 + f2.count)), D2 += f2.count;
      else {
        if (!f2.added && this.useLongestToken) {
          let l2 = u.slice(i, i + f2.count);
          l2 = l2.map(function(d, c) {
            let p = r[D2 + c];
            return p.length > d.length ? p : d;
          }), f2.value = this.join(l2);
        } else f2.value = this.join(u.slice(i, i + f2.count));
        i += f2.count, f2.added || (D2 += f2.count);
      }
    }
    return o;
  }
};
var jt = class extends Ne2 {
  tokenize(t) {
    return t.slice();
  }
  join(t) {
    return t;
  }
  removeEmpty(t) {
    return t;
  }
};
var ku = new jt();
function Ut2(e, t, u) {
  return ku.diff(e, t, u);
}
var Do2 = () => {
};
var P = Do2;
var Ru = "cr";
var Lu = "crlf";
var co = "lf";
var fo = co;
var Wt2 = "\r";
var Mu = `\r
`;
var Je2 = `
`;
var lo = Je2;
function Yu(e) {
  let t = e.indexOf(Wt2);
  return t !== -1 ? e.charAt(t + 1) === Je2 ? Lu : Ru : fo;
}
function Se2(e) {
  return e === Ru ? Wt2 : e === Lu ? Mu : lo;
}
var po = /* @__PURE__ */ new Map([[Je2, /\n/gu], [Wt2, /\r/gu], [Mu, /\r\n/gu]]);
function $t(e, t) {
  let u = po.get(t);
  return e.match(u)?.length ?? 0;
}
var Fo2 = /\r\n?/gu;
function ju(e) {
  return oe(0, e, Fo2, Je2);
}
function mo(e) {
  return this[e < 0 ? this.length + e : e];
}
var Eo = X2("at", function() {
  if (Array.isArray(this) || typeof this == "string") return mo;
});
var b2 = Eo;
var G2 = "string";
var j2 = "array";
var U2 = "cursor";
var I2 = "indent";
var k2 = "align";
var v2 = "trim";
var x2 = "group";
var w2 = "fill";
var B = "if-break";
var R2 = "indent-if-break";
var L2 = "line-suffix";
var M = "line-suffix-boundary";
var _2 = "line";
var O2 = "label";
var T2 = "break-parent";
var He = /* @__PURE__ */ new Set([U2, I2, k2, v2, x2, w2, B, R2, L2, M, _2, O2, T2]);
function Uu(e) {
  let t = e.length;
  for (; t > 0 && (e[t - 1] === "\r" || e[t - 1] === `
`); ) t--;
  return t < e.length ? e.slice(0, t) : e;
}
function Co(e) {
  if (typeof e == "string") return G2;
  if (Array.isArray(e)) return j2;
  if (!e) return;
  let { type: t } = e;
  if (He.has(t)) return t;
}
var H2 = Co;
var ho = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
function go(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (H2(e)) throw new Error("doc is valid.");
  let u = Object.prototype.toString.call(e);
  if (u !== "[object Object]") return `Unexpected doc '${u}'.`;
  let r = ho([...He].map((o) => `'${o}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
}
var Vt2 = class extends Error {
  name = "InvalidDocError";
  constructor(t) {
    super(go(t)), this.doc = t;
  }
};
var Z = Vt2;
var Wu = {};
function yo(e, t, u, r) {
  let o = [e];
  for (; o.length > 0; ) {
    let n = o.pop();
    if (n === Wu) {
      u(o.pop());
      continue;
    }
    u && o.push(n, Wu);
    let a = H2(n);
    if (!a) throw new Z(n);
    if (t?.(n) !== false) switch (a) {
      case j2:
      case w2: {
        let s = a === j2 ? n : n.parts;
        for (let i = s.length, D2 = i - 1; D2 >= 0; --D2) o.push(s[D2]);
        break;
      }
      case B:
        o.push(n.flatContents, n.breakContents);
        break;
      case x2:
        if (r && n.expandedStates) for (let s = n.expandedStates.length, i = s - 1; i >= 0; --i) o.push(n.expandedStates[i]);
        else o.push(n.contents);
        break;
      case k2:
      case I2:
      case R2:
      case O2:
      case L2:
        o.push(n.contents);
        break;
      case G2:
      case U2:
      case v2:
      case M:
      case _2:
      case T2:
        break;
      default:
        throw new Z(n);
    }
  }
}
var we2 = yo;
function Pe2(e, t) {
  if (typeof e == "string") return t(e);
  let u = /* @__PURE__ */ new Map();
  return r(e);
  function r(n) {
    if (u.has(n)) return u.get(n);
    let a = o(n);
    return u.set(n, a), a;
  }
  function o(n) {
    switch (H2(n)) {
      case j2:
        return t(n.map(r));
      case w2:
        return t({ ...n, parts: n.parts.map(r) });
      case B:
        return t({ ...n, breakContents: r(n.breakContents), flatContents: r(n.flatContents) });
      case x2: {
        let { expandedStates: a, contents: s } = n;
        return a ? (a = a.map(r), s = a[0]) : s = r(s), t({ ...n, contents: s, expandedStates: a });
      }
      case k2:
      case I2:
      case R2:
      case O2:
      case L2:
        return t({ ...n, contents: r(n.contents) });
      case G2:
      case U2:
      case v2:
      case M:
      case _2:
      case T2:
        return t(n);
      default:
        throw new Z(n);
    }
  }
}
function Xe2(e, t, u) {
  let r = u, o = false;
  function n(a) {
    if (o) return false;
    let s = t(a);
    s !== void 0 && (o = true, r = s);
  }
  return we2(e, n), r;
}
function bo(e) {
  if (e.type === x2 && e.break || e.type === _2 && e.hard || e.type === T2) return true;
}
function Ku(e) {
  return Xe2(e, bo, false);
}
function $u(e) {
  if (e.length > 0) {
    let t = b2(0, e, -1);
    !t.expandedStates && !t.break && (t.break = "propagated");
  }
  return null;
}
function Gu(e) {
  let t = /* @__PURE__ */ new Set(), u = [];
  function r(n) {
    if (n.type === T2 && $u(u), n.type === x2) {
      if (u.push(n), t.has(n)) return false;
      t.add(n);
    }
  }
  function o(n) {
    n.type === x2 && u.pop().break && $u(u);
  }
  we2(e, r, o, true);
}
function Ao(e) {
  return e.type === _2 && !e.hard ? e.soft ? "" : " " : e.type === B ? e.flatContents : e;
}
function zu(e) {
  return Pe2(e, Ao);
}
function Vu(e) {
  for (e = [...e]; e.length >= 2 && b2(0, e, -2).type === _2 && b2(0, e, -1).type === T2; ) e.length -= 2;
  if (e.length > 0) {
    let t = Oe2(b2(0, e, -1));
    e[e.length - 1] = t;
  }
  return e;
}
function Oe2(e) {
  switch (H2(e)) {
    case I2:
    case R2:
    case x2:
    case L2:
    case O2: {
      let t = Oe2(e.contents);
      return { ...e, contents: t };
    }
    case B:
      return { ...e, breakContents: Oe2(e.breakContents), flatContents: Oe2(e.flatContents) };
    case w2:
      return { ...e, parts: Vu(e.parts) };
    case j2:
      return Vu(e);
    case G2:
      return Uu(e);
    case k2:
    case U2:
    case v2:
    case M:
    case _2:
    case T2:
      break;
    default:
      throw new Z(e);
  }
  return e;
}
function qe2(e) {
  return Oe2(xo2(e));
}
function _o(e) {
  switch (H2(e)) {
    case w2:
      if (e.parts.every((t) => t === "")) return "";
      break;
    case x2:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
      if (e.contents.type === x2 && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
      break;
    case k2:
    case I2:
    case R2:
    case L2:
      if (!e.contents) return "";
      break;
    case B:
      if (!e.flatContents && !e.breakContents) return "";
      break;
    case j2: {
      let t = [];
      for (let u of e) {
        if (!u) continue;
        let [r, ...o] = Array.isArray(u) ? u : [u];
        typeof r == "string" && typeof b2(0, t, -1) == "string" ? t[t.length - 1] += r : t.push(r), t.push(...o);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case G2:
    case U2:
    case v2:
    case M:
    case _2:
    case O2:
    case T2:
      break;
    default:
      throw new Z(e);
  }
  return e;
}
function xo2(e) {
  return Pe2(e, (t) => _o(t));
}
function Ju(e, t = Qe2) {
  return Pe2(e, (u) => typeof u == "string" ? Ie2(t, u.split(`
`)) : u);
}
function Bo2(e) {
  if (e.type === _2) return true;
}
function Hu(e) {
  return Xe2(e, Bo2, false);
}
function Ee2(e, t) {
  return e.type === O2 ? { ...e, contents: t(e.contents) } : t(e);
}
var N2 = P;
var Ze2 = P;
var Xu = P;
var qu = P;
function ae2(e) {
  return N2(e), { type: I2, contents: e };
}
function De2(e, t) {
  return qu(e), N2(t), { type: k2, contents: t, n: e };
}
function Qu(e) {
  return De2(Number.NEGATIVE_INFINITY, e);
}
function et2(e) {
  return De2({ type: "root" }, e);
}
function Zu(e) {
  return De2(-1, e);
}
function tt2(e, t, u) {
  N2(e);
  let r = e;
  if (t > 0) {
    for (let o = 0; o < Math.floor(t / u); ++o) r = ae2(r);
    r = De2(t % u, r), r = De2(Number.NEGATIVE_INFINITY, r);
  }
  return r;
}
var ce2 = { type: T2 };
var ee = { type: U2 };
function er2(e) {
  return Xu(e), { type: w2, parts: e };
}
function Kt(e, t = {}) {
  return N2(e), Ze2(t.expandedStates, true), { type: x2, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function tr2(e, t) {
  return Kt(e[0], { ...t, expandedStates: e });
}
function ur2(e, t = "", u = {}) {
  return N2(e), t !== "" && N2(t), { type: B, breakContents: e, flatContents: t, groupId: u.groupId };
}
function rr2(e, t) {
  return N2(e), { type: R2, contents: e, groupId: t.groupId, negate: t.negate };
}
function Ie2(e, t) {
  N2(e), Ze2(t);
  let u = [];
  for (let r = 0; r < t.length; r++) r !== 0 && u.push(e), u.push(t[r]);
  return u;
}
function nr(e, t) {
  return N2(t), e ? { type: O2, label: e, contents: t } : t;
}
var ut2 = { type: _2 };
var or2 = { type: _2, soft: true };
var ke = { type: _2, hard: true };
var V2 = [ke, ce2];
var Gt = { type: _2, hard: true, literal: true };
var Qe2 = [Gt, ce2];
function ve2(e) {
  return N2(e), { type: L2, contents: e };
}
var ar2 = { type: M };
var ir2 = { type: v2 };
function te2(e) {
  if (!e) return "";
  if (Array.isArray(e)) {
    let t = [];
    for (let u of e) if (Array.isArray(u)) t.push(...te2(u));
    else {
      let r = te2(u);
      r !== "" && t.push(r);
    }
    return t;
  }
  return e.type === B ? { ...e, breakContents: te2(e.breakContents), flatContents: te2(e.flatContents) } : e.type === x2 ? { ...e, contents: te2(e.contents), expandedStates: e.expandedStates?.map(te2) } : e.type === w2 ? { type: "fill", parts: e.parts.map(te2) } : e.contents ? { ...e, contents: te2(e.contents) } : e;
}
function sr2(e) {
  let t = /* @__PURE__ */ Object.create(null), u = /* @__PURE__ */ new Set();
  return r(te2(e));
  function r(n, a, s) {
    if (typeof n == "string") return JSON.stringify(n);
    if (Array.isArray(n)) {
      let i = n.map(r).filter(Boolean);
      return i.length === 1 ? i[0] : `[${i.join(", ")}]`;
    }
    if (n.type === _2) {
      let i = s?.[a + 1]?.type === T2;
      return n.literal ? i ? "literalline" : "literallineWithoutBreakParent" : n.hard ? i ? "hardline" : "hardlineWithoutBreakParent" : n.soft ? "softline" : "line";
    }
    if (n.type === T2) return s?.[a - 1]?.type === _2 && s[a - 1].hard ? void 0 : "breakParent";
    if (n.type === v2) return "trim";
    if (n.type === I2) return "indent(" + r(n.contents) + ")";
    if (n.type === k2) return n.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + r(n.contents) + ")" : n.n < 0 ? "dedent(" + r(n.contents) + ")" : n.n.type === "root" ? "markAsRoot(" + r(n.contents) + ")" : "align(" + JSON.stringify(n.n) + ", " + r(n.contents) + ")";
    if (n.type === B) return "ifBreak(" + r(n.breakContents) + (n.flatContents ? ", " + r(n.flatContents) : "") + (n.groupId ? (n.flatContents ? "" : ', ""') + `, { groupId: ${o(n.groupId)} }` : "") + ")";
    if (n.type === R2) {
      let i = [];
      n.negate && i.push("negate: true"), n.groupId && i.push(`groupId: ${o(n.groupId)}`);
      let D2 = i.length > 0 ? `, { ${i.join(", ")} }` : "";
      return `indentIfBreak(${r(n.contents)}${D2})`;
    }
    if (n.type === x2) {
      let i = [];
      n.break && n.break !== "propagated" && i.push("shouldBreak: true"), n.id && i.push(`id: ${o(n.id)}`);
      let D2 = i.length > 0 ? `, { ${i.join(", ")} }` : "";
      return n.expandedStates ? `conditionalGroup([${n.expandedStates.map((f2) => r(f2)).join(",")}]${D2})` : `group(${r(n.contents)}${D2})`;
    }
    if (n.type === w2) return `fill([${n.parts.map((i) => r(i)).join(", ")}])`;
    if (n.type === L2) return "lineSuffix(" + r(n.contents) + ")";
    if (n.type === M) return "lineSuffixBoundary";
    if (n.type === O2) return `label(${JSON.stringify(n.label)}, ${r(n.contents)})`;
    if (n.type === U2) return "cursor";
    throw new Error("Unknown doc type " + n.type);
  }
  function o(n) {
    if (typeof n != "symbol") return JSON.stringify(String(n));
    if (n in t) return t[n];
    let a = n.description || "symbol";
    for (let s = 0; ; s++) {
      let i = a + (s > 0 ? ` #${s}` : "");
      if (!u.has(i)) return u.add(i), t[n] = `Symbol.for(${JSON.stringify(i)})`;
    }
  }
}
var Dr = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED8\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE8A\uDE8E-\uDEC2\uDEC6\uDEC8\uDECD-\uDEDC\uDEDF-\uDEEA\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
function zt2(e) {
  return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function Jt2(e) {
  return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9776 && e <= 9783 || e >= 9800 && e <= 9811 || e === 9855 || e >= 9866 && e <= 9871 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12773 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e >= 94192 && e <= 94198 || e >= 94208 && e <= 101589 || e >= 101631 && e <= 101662 || e >= 101760 && e <= 101874 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e >= 119552 && e <= 119638 || e >= 119648 && e <= 119670 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128728 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129674 || e >= 129678 && e <= 129734 || e === 129736 || e >= 129741 && e <= 129756 || e >= 129759 && e <= 129770 || e >= 129775 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
var cr2 = "\xA9\xAE\u203C\u2049\u2122\u2139\u2194\u2195\u2196\u2197\u2198\u2199\u21A9\u21AA\u2328\u23CF\u23F1\u23F2\u23F8\u23F9\u23FA\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600\u2601\u2602\u2603\u2604\u260E\u2611\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694\u2695\u2696\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F1\u26F7\u26F8\u26F9\u2702\u2708\u2709\u270C\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u2764\u27A1\u2934\u2935\u2B05\u2B06\u2B07";
var To = /[^\x20-\x7F]/u;
var No2 = new Set(cr2);
function So(e) {
  if (!e) return 0;
  if (!To.test(e)) return e.length;
  e = e.replace(Dr(), (u) => No2.has(u) ? " " : "  ");
  let t = 0;
  for (let u of e) {
    let r = u.codePointAt(0);
    r <= 31 || r >= 127 && r <= 159 || r >= 768 && r <= 879 || r >= 65024 && r <= 65039 || (t += zt2(r) || Jt2(r) ? 2 : 1);
  }
  return t;
}
var Re2 = So;
var wo = { type: 0 };
var Oo2 = { type: 1 };
var Ht2 = { value: "", length: 0, queue: [], get root() {
  return Ht2;
} };
function fr2(e, t, u) {
  let r = t.type === 1 ? e.queue.slice(0, -1) : [...e.queue, t], o = "", n = 0, a = 0, s = 0;
  for (let p of r) switch (p.type) {
    case 0:
      f2(), u.useTabs ? i(1) : D2(u.tabWidth);
      break;
    case 3: {
      let { string: F2 } = p;
      f2(), o += F2, n += F2.length;
      break;
    }
    case 2: {
      let { width: F2 } = p;
      a += 1, s += F2;
      break;
    }
    default:
      throw new Error(`Unexpected indent comment '${p.type}'.`);
  }
  return d(), { ...e, value: o, length: n, queue: r };
  function i(p) {
    o += "	".repeat(p), n += u.tabWidth * p;
  }
  function D2(p) {
    o += " ".repeat(p), n += p;
  }
  function f2() {
    u.useTabs ? l2() : d();
  }
  function l2() {
    a > 0 && i(a), c();
  }
  function d() {
    s > 0 && D2(s), c();
  }
  function c() {
    a = 0, s = 0;
  }
}
function lr2(e, t, u) {
  if (!t) return e;
  if (t.type === "root") return { ...e, root: e };
  if (t === Number.NEGATIVE_INFINITY) return e.root;
  let r;
  return typeof t == "number" ? t < 0 ? r = Oo2 : r = { type: 2, width: t } : r = { type: 3, string: t }, fr2(e, r, u);
}
function dr2(e, t) {
  return fr2(e, wo, t);
}
function Po2(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    let r = e[u];
    if (r === " " || r === "	") t++;
    else break;
  }
  return t;
}
function Xt(e) {
  let t = Po2(e);
  return { text: t === 0 ? e : e.slice(0, e.length - t), count: t };
}
var W2 = /* @__PURE__ */ Symbol("MODE_BREAK");
var q2 = /* @__PURE__ */ Symbol("MODE_FLAT");
var qt2 = /* @__PURE__ */ Symbol("DOC_FILL_PRINTED_LENGTH");
function rt2(e, t, u, r, o, n) {
  if (u === Number.POSITIVE_INFINITY) return true;
  let a = t.length, s = false, i = [e], D2 = "";
  for (; u >= 0; ) {
    if (i.length === 0) {
      if (a === 0) return true;
      i.push(t[--a]);
      continue;
    }
    let { mode: f2, doc: l2 } = i.pop(), d = H2(l2);
    switch (d) {
      case G2:
        l2 && (s && (D2 += " ", u -= 1, s = false), D2 += l2, u -= Re2(l2));
        break;
      case j2:
      case w2: {
        let c = d === j2 ? l2 : l2.parts, p = l2[qt2] ?? 0;
        for (let F2 = c.length - 1; F2 >= p; F2--) i.push({ mode: f2, doc: c[F2] });
        break;
      }
      case I2:
      case k2:
      case R2:
      case O2:
        i.push({ mode: f2, doc: l2.contents });
        break;
      case v2: {
        let { text: c, count: p } = Xt(D2);
        D2 = c, u += p;
        break;
      }
      case x2: {
        if (n && l2.break) return false;
        let c = l2.break ? W2 : f2, p = l2.expandedStates && c === W2 ? b2(0, l2.expandedStates, -1) : l2.contents;
        i.push({ mode: c, doc: p });
        break;
      }
      case B: {
        let p = (l2.groupId ? o[l2.groupId] || q2 : f2) === W2 ? l2.breakContents : l2.flatContents;
        p && i.push({ mode: f2, doc: p });
        break;
      }
      case _2:
        if (f2 === W2 || l2.hard) return true;
        l2.soft || (s = true);
        break;
      case L2:
        r = true;
        break;
      case M:
        if (r) return false;
        break;
    }
  }
  return false;
}
function Ce2(e, t) {
  let u = /* @__PURE__ */ Object.create(null), r = t.printWidth, o = Se2(t.endOfLine), n = 0, a = [{ indent: Ht2, mode: W2, doc: e }], s = "", i = false, D2 = [], f2 = [], l2 = [], d = [], c = 0;
  for (Gu(e); a.length > 0; ) {
    let { indent: m, mode: h3, doc: E } = a.pop();
    switch (H2(E)) {
      case G2: {
        let g = o !== `
` ? oe(0, E, `
`, o) : E;
        g && (s += g, a.length > 0 && (n += Re2(g)));
        break;
      }
      case j2:
        for (let g = E.length - 1; g >= 0; g--) a.push({ indent: m, mode: h3, doc: E[g] });
        break;
      case U2:
        if (f2.length >= 2) throw new Error("There are too many 'cursor' in doc.");
        f2.push(c + s.length);
        break;
      case I2:
        a.push({ indent: dr2(m, t), mode: h3, doc: E.contents });
        break;
      case k2:
        a.push({ indent: lr2(m, E.n, t), mode: h3, doc: E.contents });
        break;
      case v2:
        y2();
        break;
      case x2:
        switch (h3) {
          case q2:
            if (!i) {
              a.push({ indent: m, mode: E.break ? W2 : q2, doc: E.contents });
              break;
            }
          case W2: {
            i = false;
            let g = { indent: m, mode: q2, doc: E.contents }, A2 = r - n, J2 = D2.length > 0;
            if (!E.break && rt2(g, a, A2, J2, u)) a.push(g);
            else if (E.expandedStates) {
              let Q2 = b2(0, E.expandedStates, -1);
              if (E.break) {
                a.push({ indent: m, mode: W2, doc: Q2 });
                break;
              } else for (let re2 = 1; re2 < E.expandedStates.length + 1; re2++) if (re2 >= E.expandedStates.length) {
                a.push({ indent: m, mode: W2, doc: Q2 });
                break;
              } else {
                let Te2 = E.expandedStates[re2], ne2 = { indent: m, mode: q2, doc: Te2 };
                if (rt2(ne2, a, A2, J2, u)) {
                  a.push(ne2);
                  break;
                }
              }
            } else a.push({ indent: m, mode: W2, doc: E.contents });
            break;
          }
        }
        E.id && (u[E.id] = b2(0, a, -1).mode);
        break;
      case w2: {
        let g = r - n, A2 = E[qt2] ?? 0, { parts: J2 } = E, Q2 = J2.length - A2;
        if (Q2 === 0) break;
        let re2 = J2[A2 + 0], Te2 = J2[A2 + 1], ne2 = { indent: m, mode: q2, doc: re2 }, vt2 = { indent: m, mode: W2, doc: re2 }, Rt2 = rt2(ne2, [], g, D2.length > 0, u, true);
        if (Q2 === 1) {
          Rt2 ? a.push(ne2) : a.push(vt2);
          break;
        }
        let Iu = { indent: m, mode: q2, doc: Te2 }, Lt2 = { indent: m, mode: W2, doc: Te2 };
        if (Q2 === 2) {
          Rt2 ? a.push(Iu, ne2) : a.push(Lt2, vt2);
          break;
        }
        let Xn2 = J2[A2 + 2], qn2 = { indent: m, mode: h3, doc: { ...E, [qt2]: A2 + 2 } }, Qn2 = rt2({ indent: m, mode: q2, doc: [re2, Te2, Xn2] }, [], g, D2.length > 0, u, true);
        a.push(qn2), Qn2 ? a.push(Iu, ne2) : Rt2 ? a.push(Lt2, ne2) : a.push(Lt2, vt2);
        break;
      }
      case B:
      case R2: {
        let g = E.groupId ? u[E.groupId] : h3;
        if (g === W2) {
          let A2 = E.type === B ? E.breakContents : E.negate ? E.contents : ae2(E.contents);
          A2 && a.push({ indent: m, mode: h3, doc: A2 });
        }
        if (g === q2) {
          let A2 = E.type === B ? E.flatContents : E.negate ? ae2(E.contents) : E.contents;
          A2 && a.push({ indent: m, mode: h3, doc: A2 });
        }
        break;
      }
      case L2:
        D2.push({ indent: m, mode: h3, doc: E.contents });
        break;
      case M:
        D2.length > 0 && a.push({ indent: m, mode: h3, doc: ke });
        break;
      case _2:
        switch (h3) {
          case q2:
            if (E.hard) i = true;
            else {
              E.soft || (s += " ", n += 1);
              break;
            }
          case W2:
            if (D2.length > 0) {
              a.push({ indent: m, mode: h3, doc: E }, ...D2.reverse()), D2.length = 0;
              break;
            }
            E.literal ? (s += o, n = 0, m.root && (m.root.value && (s += m.root.value), n = m.root.length)) : (y2(), s += o + m.value, n = m.length);
            break;
        }
        break;
      case O2:
        a.push({ indent: m, mode: h3, doc: E.contents });
        break;
      case T2:
        break;
      default:
        throw new Z(E);
    }
    a.length === 0 && D2.length > 0 && (a.push(...D2.reverse()), D2.length = 0);
  }
  let p = l2.join("") + s, F2 = [...d, ...f2];
  if (F2.length !== 2) return { formatted: p };
  let C2 = F2[0];
  return { formatted: p, cursorNodeStart: C2, cursorNodeText: p.slice(C2, b2(0, F2, -1)) };
  function y2() {
    let { text: m, count: h3 } = Xt(s);
    m && (l2.push(m), c += m.length), s = "", n -= h3, f2.length > 0 && (d.push(...f2.map((E) => Math.min(E, c))), f2.length = 0);
  }
}
function Io2(e, t, u = 0) {
  let r = 0;
  for (let o = u; o < e.length; ++o) e[o] === "	" ? r = r + t - r % t : r++;
  return r;
}
var he2 = Io2;
var Qt2 = class {
  constructor(t) {
    this.stack = [t];
  }
  get key() {
    let { stack: t, siblings: u } = this;
    return b2(0, t, u === null ? -2 : -4) ?? null;
  }
  get index() {
    return this.siblings === null ? null : b2(0, this.stack, -2);
  }
  get node() {
    return b2(0, this.stack, -1);
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
    let { stack: t } = this, u = b2(0, t, -3);
    return Array.isArray(u) ? u : null;
  }
  get next() {
    let { siblings: t } = this;
    return t === null ? null : t[this.index + 1];
  }
  get previous() {
    let { siblings: t } = this;
    return t === null ? null : t[this.index - 1];
  }
  get isFirst() {
    return this.index === 0;
  }
  get isLast() {
    let { siblings: t, index: u } = this;
    return t !== null && u === t.length - 1;
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
    let { stack: t } = this, { length: u } = t;
    return u > 1 ? b2(0, t, -2) : null;
  }
  getValue() {
    return b2(0, this.stack, -1);
  }
  getNode(t = 0) {
    let u = this.#t(t);
    return u === -1 ? null : this.stack[u];
  }
  getParentNode(t = 0) {
    return this.getNode(t + 1);
  }
  #t(t) {
    let { stack: u } = this;
    for (let r = u.length - 1; r >= 0; r -= 2) if (!Array.isArray(u[r]) && --t < 0) return r;
    return -1;
  }
  call(t, ...u) {
    let { stack: r } = this, { length: o } = r, n = b2(0, r, -1);
    for (let a of u) n = n?.[a], r.push(a, n);
    try {
      return t(this);
    } finally {
      r.length = o;
    }
  }
  callParent(t, u = 0) {
    let r = this.#t(u + 1), o = this.stack.splice(r + 1);
    try {
      return t(this);
    } finally {
      this.stack.push(...o);
    }
  }
  each(t, ...u) {
    let { stack: r } = this, { length: o } = r, n = b2(0, r, -1);
    for (let a of u) n = n[a], r.push(a, n);
    try {
      for (let a = 0; a < n.length; ++a) r.push(a, n[a]), t(this, a, n), r.length -= 2;
    } finally {
      r.length = o;
    }
  }
  map(t, ...u) {
    let r = [];
    return this.each((o, n, a) => {
      r[n] = t(o, n, a);
    }, ...u), r;
  }
  match(...t) {
    let u = this.stack.length - 1, r = null, o = this.stack[u--];
    for (let n of t) {
      if (o === void 0) return false;
      let a = null;
      if (typeof r == "number" && (a = r, r = this.stack[u--], o = this.stack[u--]), n && !n(o, r, a)) return false;
      r = this.stack[u--], o = this.stack[u--];
    }
    return true;
  }
  findAncestor(t) {
    for (let u of this.#e()) if (t(u)) return u;
  }
  hasAncestor(t) {
    for (let u of this.#e()) if (t(u)) return true;
    return false;
  }
  *#e() {
    let { stack: t } = this;
    for (let u = t.length - 3; u >= 0; u -= 2) {
      let r = t[u];
      Array.isArray(r) || (yield r);
    }
  }
};
var pr2 = Qt2;
function ko(e) {
  return e !== null && typeof e == "object";
}
var ge2 = ko;
function ye2(e) {
  return (t, u, r) => {
    let o = !!r?.backwards;
    if (u === false) return false;
    let { length: n } = t, a = u;
    for (; a >= 0 && a < n; ) {
      let s = t.charAt(a);
      if (e instanceof RegExp) {
        if (!e.test(s)) return a;
      } else if (!e.includes(s)) return a;
      o ? a-- : a++;
    }
    return a === -1 || a === n ? a : false;
  };
}
var Fr2 = ye2(/\s/u);
var Y2 = ye2(" 	");
var nt2 = ye2(",; 	");
var ot2 = ye2(/[^\n\r]/u);
var mr2 = (e) => e === `
` || e === "\r" || e === "\u2028" || e === "\u2029";
function vo(e, t, u) {
  let r = !!u?.backwards;
  if (t === false) return false;
  let o = e.charAt(t);
  if (r) {
    if (e.charAt(t - 1) === "\r" && o === `
`) return t - 2;
    if (mr2(o)) return t - 1;
  } else {
    if (o === "\r" && e.charAt(t + 1) === `
`) return t + 2;
    if (mr2(o)) return t + 1;
  }
  return t;
}
var K2 = vo;
function Ro2(e, t, u = {}) {
  let r = Y2(e, u.backwards ? t - 1 : t, u), o = K2(e, r, u);
  return r !== o;
}
var z = Ro2;
function Lo2(e) {
  return Array.isArray(e) && e.length > 0;
}
var Er2 = Lo2;
function* be2(e, t) {
  let { getVisitorKeys: u, filter: r = () => true } = t, o = (n) => ge2(n) && r(n);
  for (let n of u(e)) {
    let a = e[n];
    if (Array.isArray(a)) for (let s of a) o(s) && (yield s);
    else o(a) && (yield a);
  }
}
function* Cr2(e, t) {
  let u = [e];
  for (let r = 0; r < u.length; r++) {
    let o = u[r];
    for (let n of be2(o, t)) yield n, u.push(n);
  }
}
function hr2(e, t) {
  return be2(e, t).next().done;
}
function gr2(e, t, u) {
  let { cache: r } = u;
  if (r.has(e)) return r.get(e);
  let { filter: o } = u;
  if (!o) return [];
  let n, a = (u.getChildren?.(e, u) ?? [...be2(e, { getVisitorKeys: u.getVisitorKeys })]).flatMap((D2) => (n ?? (n = [e, ...t]), o(D2, n) ? [D2] : gr2(D2, n, u))), { locStart: s, locEnd: i } = u;
  return a.sort((D2, f2) => s(D2) - s(f2) || i(D2) - i(f2)), r.set(e, a), a;
}
var at2 = gr2;
function Mo2(e) {
  let t = e.type || e.kind || "(unknown type)", u = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
  return u.length > 20 && (u = u.slice(0, 19) + "\u2026"), t + (u ? " " + u : "");
}
function Zt2(e, t) {
  (e.comments ?? (e.comments = [])).push(t), t.printed = false, t.nodeDescription = Mo2(e);
}
function fe2(e, t) {
  t.leading = true, t.trailing = false, Zt2(e, t);
}
function ue2(e, t, u) {
  t.leading = false, t.trailing = false, u && (t.marker = u), Zt2(e, t);
}
function le2(e, t) {
  t.leading = false, t.trailing = true, Zt2(e, t);
}
var uu = /* @__PURE__ */ new WeakMap();
function br2(e, t, u, r, o = []) {
  let { locStart: n, locEnd: a } = u, s = n(t), i = a(t), D2 = at2(e, o, { cache: uu, locStart: n, locEnd: a, getVisitorKeys: u.getVisitorKeys, filter: u.printer.canAttachComment, getChildren: u.printer.getCommentChildNodes }), f2, l2, d = 0, c = D2.length;
  for (; d < c; ) {
    let p = d + c >> 1, F2 = D2[p], C2 = n(F2), y2 = a(F2);
    if (C2 <= s && i <= y2) return br2(F2, t, u, F2, [F2, ...o]);
    if (y2 <= s) {
      f2 = F2, d = p + 1;
      continue;
    }
    if (i <= C2) {
      l2 = F2, c = p;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if (r?.type === "TemplateLiteral") {
    let { quasis: p } = r, F2 = tu(p, t, u);
    f2 && tu(p, f2, u) !== F2 && (f2 = null), l2 && tu(p, l2, u) !== F2 && (l2 = null);
  }
  return { enclosingNode: r, precedingNode: f2, followingNode: l2 };
}
var eu = () => false;
function Ar2(e, t) {
  let { comments: u } = e;
  if (delete e.comments, !Er2(u) || !t.printer.canAttachComment) return;
  let r = [], { printer: { features: { experimental_avoidAstMutation: o }, handleComments: n = {} }, originalText: a } = t, { ownLine: s = eu, endOfLine: i = eu, remaining: D2 = eu } = n, f2 = u.map((l2, d) => ({ ...br2(e, l2, t), comment: l2, text: a, options: t, ast: e, isLastComment: u.length - 1 === d }));
  for (let [l2, d] of f2.entries()) {
    let { comment: c, precedingNode: p, enclosingNode: F2, followingNode: C2, text: y2, options: m, ast: h3, isLastComment: E } = d, g;
    if (o ? g = [d] : (c.enclosingNode = F2, c.precedingNode = p, c.followingNode = C2, g = [c, y2, m, h3, E]), Yo2(y2, m, f2, l2)) c.placement = "ownLine", s(...g) || (C2 ? fe2(C2, c) : p ? le2(p, c) : F2 ? ue2(F2, c) : ue2(h3, c));
    else if (jo2(y2, m, f2, l2)) c.placement = "endOfLine", i(...g) || (p ? le2(p, c) : C2 ? fe2(C2, c) : F2 ? ue2(F2, c) : ue2(h3, c));
    else if (c.placement = "remaining", !D2(...g)) if (p && C2) {
      let A2 = r.length;
      A2 > 0 && r[A2 - 1].followingNode !== C2 && yr2(r, m), r.push(d);
    } else p ? le2(p, c) : C2 ? fe2(C2, c) : F2 ? ue2(F2, c) : ue2(h3, c);
  }
  if (yr2(r, t), !o) for (let l2 of u) delete l2.precedingNode, delete l2.enclosingNode, delete l2.followingNode;
}
var _r2 = (e) => !/[\S\n\u2028\u2029]/u.test(e);
function Yo2(e, t, u, r) {
  let { comment: o, precedingNode: n } = u[r], { locStart: a, locEnd: s } = t, i = a(o);
  if (n) for (let D2 = r - 1; D2 >= 0; D2--) {
    let { comment: f2, precedingNode: l2 } = u[D2];
    if (l2 !== n || !_r2(e.slice(s(f2), i))) break;
    i = a(f2);
  }
  return z(e, i, { backwards: true });
}
function jo2(e, t, u, r) {
  let { comment: o, followingNode: n } = u[r], { locStart: a, locEnd: s } = t, i = s(o);
  if (n) for (let D2 = r + 1; D2 < u.length; D2++) {
    let { comment: f2, followingNode: l2 } = u[D2];
    if (l2 !== n || !_r2(e.slice(i, a(f2)))) break;
    i = s(f2);
  }
  return z(e, i);
}
function yr2(e, t) {
  let u = e.length;
  if (u === 0) return;
  let { precedingNode: r, followingNode: o } = e[0], n = t.locStart(o), a;
  for (a = u; a > 0; --a) {
    let { comment: s, precedingNode: i, followingNode: D2 } = e[a - 1];
    P(i, r), P(D2, o);
    let f2 = t.originalText.slice(t.locEnd(s), n);
    if (t.printer.isGap?.(f2, t) ?? /^[\s(]*$/u.test(f2)) n = t.locStart(s);
    else break;
  }
  for (let [s, { comment: i }] of e.entries()) s < a ? le2(r, i) : fe2(o, i);
  for (let s of [r, o]) s.comments && s.comments.length > 1 && s.comments.sort((i, D2) => t.locStart(i) - t.locStart(D2));
  e.length = 0;
}
function tu(e, t, u) {
  let r = u.locStart(t) - 1;
  for (let o = 1; o < e.length; ++o) if (r < u.locStart(e[o])) return o - 1;
  return 0;
}
function Uo2(e, t) {
  let u = t - 1;
  u = Y2(e, u, { backwards: true }), u = K2(e, u, { backwards: true }), u = Y2(e, u, { backwards: true });
  let r = K2(e, u, { backwards: true });
  return u !== r;
}
var Le2 = Uo2;
function xr2(e, t) {
  let u = e.node;
  return u.printed = true, t.printer.printComment(e, t);
}
function Wo2(e, t) {
  let u = e.node, r = [xr2(e, t)], { printer: o, originalText: n, locStart: a, locEnd: s } = t;
  if (o.isBlockComment?.(u)) {
    let f2 = z(n, s(u)) ? z(n, a(u), { backwards: true }) ? V2 : ut2 : " ";
    r.push(f2);
  } else r.push(V2);
  let D2 = K2(n, Y2(n, s(u)));
  return D2 !== false && z(n, D2) && r.push(V2), r;
}
function $o2(e, t, u) {
  let r = e.node, o = xr2(e, t), { printer: n, originalText: a, locStart: s } = t, i = n.isBlockComment?.(r);
  if (u?.hasLineSuffix && !u?.isBlock || z(a, s(r), { backwards: true })) {
    let D2 = Le2(a, s(r));
    return { doc: ve2([V2, D2 ? V2 : "", o]), isBlock: i, hasLineSuffix: true };
  }
  return !i || u?.hasLineSuffix ? { doc: [ve2([" ", o]), ce2], isBlock: i, hasLineSuffix: true } : { doc: [" ", o], isBlock: i, hasLineSuffix: false };
}
function Vo2(e, t) {
  let u = e.node;
  if (!u) return {};
  let r = t[/* @__PURE__ */ Symbol.for("printedComments")];
  if ((u.comments || []).filter((i) => !r.has(i)).length === 0) return { leading: "", trailing: "" };
  let n = [], a = [], s;
  return e.each(() => {
    let i = e.node;
    if (r?.has(i)) return;
    let { leading: D2, trailing: f2 } = i;
    D2 ? n.push(Wo2(e, t)) : f2 && (s = $o2(e, t, s), a.push(s.doc));
  }, "comments"), { leading: n, trailing: a };
}
function Br2(e, t, u) {
  let { leading: r, trailing: o } = Vo2(e, u);
  return !r && !o ? t : Ee2(t, (n) => [r, n, o]);
}
function Tr2(e) {
  let { [/* @__PURE__ */ Symbol.for("comments")]: t, [/* @__PURE__ */ Symbol.for("printedComments")]: u } = e;
  for (let r of t) {
    if (!r.printed && !u.has(r)) throw new Error('Comment "' + r.value.trim() + '" was not printed. Please report this error!');
    delete r.printed;
  }
}
var Nr2 = () => P;
var Me2 = class extends Error {
  name = "ConfigError";
};
var Ye2 = class extends Error {
  name = "UndefinedParserError";
};
var Sr2 = { checkIgnorePragma: { category: "Special", type: "boolean", default: false, description: "Check whether the file's first docblock comment contains '@noprettier' or '@noformat' to determine if it should be formatted.", cliCategory: "Other" }, cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e) => typeof e == "string" || typeof e == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }, { value: "mjml", description: "MJML" }] }, plugins: { type: "path", array: true, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e) => typeof e == "string" || typeof e == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: false, description: "Require either '@prettier' or '@format' to be present in the file's first docblock comment in order for it to be formatted.", cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
function it2({ plugins: e = [], showDeprecated: t = false } = {}) {
  let u = e.flatMap((o) => o.languages ?? []), r = [];
  for (let o of Go2(Object.assign({}, ...e.map(({ options: n }) => n), Sr2))) !t && o.deprecated || (Array.isArray(o.choices) && (t || (o.choices = o.choices.filter((n) => !n.deprecated)), o.name === "parser" && (o.choices = [...o.choices, ...Ko2(o.choices, u, e)])), o.pluginDefaults = Object.fromEntries(e.filter((n) => n.defaultOptions?.[o.name] !== void 0).map((n) => [n.name, n.defaultOptions[o.name]])), r.push(o));
  return { languages: u, options: r };
}
function* Ko2(e, t, u) {
  let r = new Set(e.map((o) => o.value));
  for (let o of t) if (o.parsers) {
    for (let n of o.parsers) if (!r.has(n)) {
      r.add(n);
      let a = u.find((i) => i.parsers && Object.prototype.hasOwnProperty.call(i.parsers, n)), s = o.name;
      a?.name && (s += ` (plugin: ${a.name})`), yield { value: n, description: s };
    }
  }
}
function Go2(e) {
  let t = [];
  for (let [u, r] of Object.entries(e)) {
    let o = { name: u, ...r };
    Array.isArray(o.default) && (o.default = b2(0, o.default, -1).value), t.push(o);
  }
  return t;
}
var zo2 = Array.prototype.toReversed ?? function() {
  return [...this].reverse();
};
var Jo2 = X2("toReversed", function() {
  if (Array.isArray(this)) return zo2;
});
var wr2 = Jo2;
function Ho2() {
  let e = globalThis, t = e.Deno?.build?.os;
  return typeof t == "string" ? t === "windows" : e.navigator?.platform?.startsWith("Win") ?? e.process?.platform?.startsWith("win") ?? false;
}
var Xo2 = Ho2();
function Or(e) {
  if (e = e instanceof URL ? e : new URL(e), e.protocol !== "file:") throw new TypeError(`URL must be a file URL: received "${e.protocol}"`);
  return e;
}
function qo2(e) {
  return e = Or(e), decodeURIComponent(e.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25"));
}
function Qo2(e) {
  e = Or(e);
  let t = decodeURIComponent(e.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  return e.hostname !== "" && (t = `\\\\${e.hostname}${t}`), t;
}
function ru(e) {
  return Xo2 ? Qo2(e) : qo2(e);
}
var Pr2 = (e) => String(e).split(/[/\\]/u).pop();
var Ir = (e) => String(e).startsWith("file:");
function kr2(e, t) {
  if (!t) return;
  let u = Pr2(t).toLowerCase();
  return e.find(({ filenames: r }) => r?.some((o) => o.toLowerCase() === u)) ?? e.find(({ extensions: r }) => r?.some((o) => u.endsWith(o)));
}
function Zo2(e, t) {
  if (t) return e.find(({ name: u }) => u.toLowerCase() === t) ?? e.find(({ aliases: u }) => u?.includes(t)) ?? e.find(({ extensions: u }) => u?.includes(`.${t}`));
}
var ea2 = void 0;
function vr2(e, t) {
  if (t) {
    if (Ir(t)) try {
      t = ru(t);
    } catch {
      return;
    }
    if (typeof t == "string") return e.find(({ isSupported: u }) => u?.({ filepath: t }));
  }
}
function ta2(e, t) {
  let u = wr2(0, e.plugins).flatMap((o) => o.languages ?? []);
  return (Zo2(u, t.language) ?? kr2(u, t.physicalFile) ?? kr2(u, t.file) ?? vr2(u, t.physicalFile) ?? vr2(u, t.file) ?? ea2?.(u, t.physicalFile))?.parsers[0];
}
var st2 = ta2;
var ie = { key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e), value(e) {
  if (e === null || typeof e != "object") return JSON.stringify(e);
  if (Array.isArray(e)) return `[${e.map((u) => ie.value(u)).join(", ")}]`;
  let t = Object.keys(e);
  return t.length === 0 ? "{}" : `{ ${t.map((u) => `${ie.key(u)}: ${ie.value(e[u])}`).join(", ")} }`;
}, pair: ({ key: e, value: t }) => ie.value({ [e]: t }) };
var nu = new Proxy(String, { get: () => nu });
var $2 = nu;
var ou = () => nu;
var Rr = (e, t, { descriptor: u }) => {
  let r = [`${$2.yellow(typeof e == "string" ? u.key(e) : u.pair(e))} is deprecated`];
  return t && r.push(`we now treat it as ${$2.blue(typeof t == "string" ? u.key(t) : u.pair(t))}`), r.join("; ") + ".";
};
var Dt2 = /* @__PURE__ */ Symbol.for("vnopts.VALUE_NOT_EXIST");
var Ae2 = /* @__PURE__ */ Symbol.for("vnopts.VALUE_UNCHANGED");
var Lr2 = " ".repeat(2);
var Yr2 = (e, t, u) => {
  let { text: r, list: o } = u.normalizeExpectedResult(u.schemas[e].expected(u)), n = [];
  return r && n.push(Mr2(e, t, r, u.descriptor)), o && n.push([Mr2(e, t, o.title, u.descriptor)].concat(o.values.map((a) => jr2(a, u.loggerPrintWidth))).join(`
`)), Ur2(n, u.loggerPrintWidth);
};
function Mr2(e, t, u, r) {
  return [`Invalid ${$2.red(r.key(e))} value.`, `Expected ${$2.blue(u)},`, `but received ${t === Dt2 ? $2.gray("nothing") : $2.red(r.value(t))}.`].join(" ");
}
function jr2({ text: e, list: t }, u) {
  let r = [];
  return e && r.push(`- ${$2.blue(e)}`), t && r.push([`- ${$2.blue(t.title)}:`].concat(t.values.map((o) => jr2(o, u - Lr2.length).replace(/^|\n/g, `$&${Lr2}`))).join(`
`)), Ur2(r, u);
}
function Ur2(e, t) {
  if (e.length === 1) return e[0];
  let [u, r] = e, [o, n] = e.map((a) => a.split(`
`, 1)[0].length);
  return o > t && o > n ? r : u;
}
var _e2 = [];
var au = [];
function ct2(e, t, u) {
  if (e === t) return 0;
  let r = u?.maxDistance, o = e;
  e.length > t.length && (e = t, t = o);
  let n = e.length, a = t.length;
  for (; n > 0 && e.charCodeAt(~-n) === t.charCodeAt(~-a); ) n--, a--;
  let s = 0;
  for (; s < n && e.charCodeAt(s) === t.charCodeAt(s); ) s++;
  if (n -= s, a -= s, r !== void 0 && a - n > r) return r;
  if (n === 0) return r !== void 0 && a > r ? r : a;
  let i, D2, f2, l2, d = 0, c = 0;
  for (; d < n; ) au[d] = e.charCodeAt(s + d), _e2[d] = ++d;
  for (; c < a; ) {
    for (i = t.charCodeAt(s + c), f2 = c++, D2 = c, d = 0; d < n; d++) l2 = i === au[d] ? f2 : f2 + 1, f2 = _e2[d], D2 = _e2[d] = f2 > D2 ? l2 > D2 ? D2 + 1 : l2 : l2 > f2 ? f2 + 1 : l2;
    if (r !== void 0) {
      let p = D2;
      for (d = 0; d < n; d++) _e2[d] < p && (p = _e2[d]);
      if (p > r) return r;
    }
  }
  return _e2.length = n, au.length = n, r !== void 0 && D2 > r ? r : D2;
}
function Wr2(e, t, u) {
  if (!Array.isArray(t) || t.length === 0) return;
  let r = u?.maxDistance, o = e.length;
  for (let i of t) if (i === e) return i;
  if (r === 0) return;
  let n, a = Number.POSITIVE_INFINITY, s = /* @__PURE__ */ new Set();
  for (let i of t) {
    if (s.has(i)) continue;
    s.add(i);
    let D2 = Math.abs(i.length - o);
    if (D2 >= a || r !== void 0 && D2 > r) continue;
    let f2 = Number.isFinite(a) ? r === void 0 ? a : Math.min(a, r) : r, l2 = f2 === void 0 ? ct2(e, i) : ct2(e, i, { maxDistance: f2 });
    if (r !== void 0 && l2 > r) continue;
    let d = l2;
    if (f2 !== void 0 && l2 === f2 && f2 === r && (d = ct2(e, i)), d < a && (a = d, n = i, a === 0)) break;
  }
  if (!(r !== void 0 && a > r)) return n;
}
var ft = (e, t, { descriptor: u, logger: r, schemas: o }) => {
  let n = [`Ignored unknown option ${$2.yellow(u.pair({ key: e, value: t }))}.`], a = Wr2(e, Object.keys(o), { maxDistance: 3 });
  a && n.push(`Did you mean ${$2.blue(u.key(a))}?`), r.warn(n.join(" "));
};
var ua2 = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
function ra2(e, t) {
  let u = new e(t), r = Object.create(u);
  for (let o of ua2) o in t && (r[o] = na2(t[o], u, S.prototype[o].length));
  return r;
}
var S = class {
  static create(t) {
    return ra2(this, t);
  }
  constructor(t) {
    this.name = t.name;
  }
  default(t) {
  }
  expected(t) {
    return "nothing";
  }
  validate(t, u) {
    return false;
  }
  deprecated(t, u) {
    return false;
  }
  forward(t, u) {
  }
  redirect(t, u) {
  }
  overlap(t, u, r) {
    return t;
  }
  preprocess(t, u) {
    return t;
  }
  postprocess(t, u) {
    return Ae2;
  }
};
function na2(e, t, u) {
  return typeof e == "function" ? (...r) => e(...r.slice(0, u - 1), t, ...r.slice(u - 1)) : () => e;
}
var lt2 = class extends S {
  constructor(t) {
    super(t), this._sourceName = t.sourceName;
  }
  expected(t) {
    return t.schemas[this._sourceName].expected(t);
  }
  validate(t, u) {
    return u.schemas[this._sourceName].validate(t, u);
  }
  redirect(t, u) {
    return this._sourceName;
  }
};
var dt2 = class extends S {
  expected() {
    return "anything";
  }
  validate() {
    return true;
  }
};
var pt = class extends S {
  constructor({ valueSchema: t, name: u = t.name, ...r }) {
    super({ ...r, name: u }), this._valueSchema = t;
  }
  expected(t) {
    let { text: u, list: r } = t.normalizeExpectedResult(this._valueSchema.expected(t));
    return { text: u && `an array of ${u}`, list: r && { title: "an array of the following values", values: [{ list: r }] } };
  }
  validate(t, u) {
    if (!Array.isArray(t)) return false;
    let r = [];
    for (let o of t) {
      let n = u.normalizeValidateResult(this._valueSchema.validate(o, u), o);
      n !== true && r.push(n.value);
    }
    return r.length === 0 ? true : { value: r };
  }
  deprecated(t, u) {
    let r = [];
    for (let o of t) {
      let n = u.normalizeDeprecatedResult(this._valueSchema.deprecated(o, u), o);
      n !== false && r.push(...n.map(({ value: a }) => ({ value: [a] })));
    }
    return r;
  }
  forward(t, u) {
    let r = [];
    for (let o of t) {
      let n = u.normalizeForwardResult(this._valueSchema.forward(o, u), o);
      r.push(...n.map($r2));
    }
    return r;
  }
  redirect(t, u) {
    let r = [], o = [];
    for (let n of t) {
      let a = u.normalizeRedirectResult(this._valueSchema.redirect(n, u), n);
      "remain" in a && r.push(a.remain), o.push(...a.redirect.map($r2));
    }
    return r.length === 0 ? { redirect: o } : { redirect: o, remain: r };
  }
  overlap(t, u) {
    return t.concat(u);
  }
};
function $r2({ from: e, to: t }) {
  return { from: [e], to: t };
}
var Ft2 = class extends S {
  expected() {
    return "true or false";
  }
  validate(t) {
    return typeof t == "boolean";
  }
};
function Kr2(e, t) {
  let u = /* @__PURE__ */ Object.create(null);
  for (let r of e) {
    let o = r[t];
    if (u[o]) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
    u[o] = r;
  }
  return u;
}
function Gr2(e, t) {
  let u = /* @__PURE__ */ new Map();
  for (let r of e) {
    let o = r[t];
    if (u.has(o)) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
    u.set(o, r);
  }
  return u;
}
function zr2() {
  let e = /* @__PURE__ */ Object.create(null);
  return (t) => {
    let u = JSON.stringify(t);
    return e[u] ? true : (e[u] = true, false);
  };
}
function Jr2(e, t) {
  let u = [], r = [];
  for (let o of e) t(o) ? u.push(o) : r.push(o);
  return [u, r];
}
function Hr(e) {
  return e === Math.floor(e);
}
function Xr2(e, t) {
  if (e === t) return 0;
  let u = typeof e, r = typeof t, o = ["undefined", "object", "boolean", "number", "string"];
  return u !== r ? o.indexOf(u) - o.indexOf(r) : u !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
}
function qr(e) {
  return (...t) => {
    let u = e(...t);
    return typeof u == "string" ? new Error(u) : u;
  };
}
function iu(e) {
  return e === void 0 ? {} : e;
}
function su(e) {
  if (typeof e == "string") return { text: e };
  let { text: t, list: u } = e;
  return oa2((t || u) !== void 0, "Unexpected `expected` result, there should be at least one field."), u ? { text: t, list: { title: u.title, values: u.values.map(su) } } : { text: t };
}
function Du(e, t) {
  return e === true ? true : e === false ? { value: t } : e;
}
function cu(e, t, u = false) {
  return e === false ? false : e === true ? u ? true : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? false : e;
}
function Vr2(e, t) {
  return typeof e == "string" || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
}
function mt2(e, t) {
  return e === void 0 ? [] : Array.isArray(e) ? e.map((u) => Vr2(u, t)) : [Vr2(e, t)];
}
function fu(e, t) {
  let u = mt2(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
  return u.length === 0 ? { remain: t, redirect: u } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: u } : { redirect: u };
}
function oa2(e, t) {
  if (!e) throw new Error(t);
}
var Et2 = class extends S {
  constructor(t) {
    super(t), this._choices = Gr2(t.choices.map((u) => u && typeof u == "object" ? u : { value: u }), "value");
  }
  expected({ descriptor: t }) {
    let u = Array.from(this._choices.keys()).map((a) => this._choices.get(a)).filter(({ hidden: a }) => !a).map((a) => a.value).sort(Xr2).map(t.value), r = u.slice(0, -2), o = u.slice(-2);
    return { text: r.concat(o.join(" or ")).join(", "), list: { title: "one of the following values", values: u } };
  }
  validate(t) {
    return this._choices.has(t);
  }
  deprecated(t) {
    let u = this._choices.get(t);
    return u && u.deprecated ? { value: t } : false;
  }
  forward(t) {
    let u = this._choices.get(t);
    return u ? u.forward : void 0;
  }
  redirect(t) {
    let u = this._choices.get(t);
    return u ? u.redirect : void 0;
  }
};
var Ct2 = class extends S {
  expected() {
    return "a number";
  }
  validate(t, u) {
    return typeof t == "number";
  }
};
var ht2 = class extends Ct2 {
  expected() {
    return "an integer";
  }
  validate(t, u) {
    return u.normalizeValidateResult(super.validate(t, u), t) === true && Hr(t);
  }
};
var je2 = class extends S {
  expected() {
    return "a string";
  }
  validate(t) {
    return typeof t == "string";
  }
};
var Qr2 = ie;
var Zr2 = ft;
var en2 = Yr2;
var tn2 = Rr;
var gt = class {
  constructor(t, u) {
    let { logger: r = console, loggerPrintWidth: o = 80, descriptor: n = Qr2, unknown: a = Zr2, invalid: s = en2, deprecated: i = tn2, missing: D2 = () => false, required: f2 = () => false, preprocess: l2 = (c) => c, postprocess: d = () => Ae2 } = u || {};
    this._utils = { descriptor: n, logger: r || { warn: () => {
    } }, loggerPrintWidth: o, schemas: Kr2(t, "name"), normalizeDefaultResult: iu, normalizeExpectedResult: su, normalizeDeprecatedResult: cu, normalizeForwardResult: mt2, normalizeRedirectResult: fu, normalizeValidateResult: Du }, this._unknownHandler = a, this._invalidHandler = qr(s), this._deprecatedHandler = i, this._identifyMissing = (c, p) => !(c in p) || D2(c, p), this._identifyRequired = f2, this._preprocess = l2, this._postprocess = d, this.cleanHistory();
  }
  cleanHistory() {
    this._hasDeprecationWarned = zr2();
  }
  normalize(t) {
    let u = {}, o = [this._preprocess(t, this._utils)], n = () => {
      for (; o.length !== 0; ) {
        let a = o.shift(), s = this._applyNormalization(a, u);
        o.push(...s);
      }
    };
    n();
    for (let a of Object.keys(this._utils.schemas)) {
      let s = this._utils.schemas[a];
      if (!(a in u)) {
        let i = iu(s.default(this._utils));
        "value" in i && o.push({ [a]: i.value });
      }
    }
    n();
    for (let a of Object.keys(this._utils.schemas)) {
      if (!(a in u)) continue;
      let s = this._utils.schemas[a], i = u[a], D2 = s.postprocess(i, this._utils);
      D2 !== Ae2 && (this._applyValidation(D2, a, s), u[a] = D2);
    }
    return this._applyPostprocess(u), this._applyRequiredCheck(u), u;
  }
  _applyNormalization(t, u) {
    let r = [], { knownKeys: o, unknownKeys: n } = this._partitionOptionKeys(t);
    for (let a of o) {
      let s = this._utils.schemas[a], i = s.preprocess(t[a], this._utils);
      this._applyValidation(i, a, s);
      let D2 = ({ from: c, to: p }) => {
        r.push(typeof p == "string" ? { [p]: c } : { [p.key]: p.value });
      }, f2 = ({ value: c, redirectTo: p }) => {
        let F2 = cu(s.deprecated(c, this._utils), i, true);
        if (F2 !== false) if (F2 === true) this._hasDeprecationWarned(a) || this._utils.logger.warn(this._deprecatedHandler(a, p, this._utils));
        else for (let { value: C2 } of F2) {
          let y2 = { key: a, value: C2 };
          if (!this._hasDeprecationWarned(y2)) {
            let m = typeof p == "string" ? { key: p, value: C2 } : p;
            this._utils.logger.warn(this._deprecatedHandler(y2, m, this._utils));
          }
        }
      };
      mt2(s.forward(i, this._utils), i).forEach(D2);
      let d = fu(s.redirect(i, this._utils), i);
      if (d.redirect.forEach(D2), "remain" in d) {
        let c = d.remain;
        u[a] = a in u ? s.overlap(u[a], c, this._utils) : c, f2({ value: c });
      }
      for (let { from: c, to: p } of d.redirect) f2({ value: c, redirectTo: p });
    }
    for (let a of n) {
      let s = t[a];
      this._applyUnknownHandler(a, s, u, (i, D2) => {
        r.push({ [i]: D2 });
      });
    }
    return r;
  }
  _applyRequiredCheck(t) {
    for (let u of Object.keys(this._utils.schemas)) if (this._identifyMissing(u, t) && this._identifyRequired(u)) throw this._invalidHandler(u, Dt2, this._utils);
  }
  _partitionOptionKeys(t) {
    let [u, r] = Jr2(Object.keys(t).filter((o) => !this._identifyMissing(o, t)), (o) => o in this._utils.schemas);
    return { knownKeys: u, unknownKeys: r };
  }
  _applyValidation(t, u, r) {
    let o = Du(r.validate(t, this._utils), t);
    if (o !== true) throw this._invalidHandler(u, o.value, this._utils);
  }
  _applyUnknownHandler(t, u, r, o) {
    let n = this._unknownHandler(t, u, this._utils);
    if (n) for (let a of Object.keys(n)) {
      if (this._identifyMissing(a, n)) continue;
      let s = n[a];
      a in this._utils.schemas ? o(a, s) : r[a] = s;
    }
  }
  _applyPostprocess(t) {
    let u = this._postprocess(t, this._utils);
    if (u !== Ae2) {
      if (u.delete) for (let r of u.delete) delete t[r];
      if (u.override) {
        let { knownKeys: r, unknownKeys: o } = this._partitionOptionKeys(u.override);
        for (let n of r) {
          let a = u.override[n];
          this._applyValidation(a, n, this._utils.schemas[n]), t[n] = a;
        }
        for (let n of o) {
          let a = u.override[n];
          this._applyUnknownHandler(n, a, t, (s, i) => {
            let D2 = this._utils.schemas[s];
            this._applyValidation(i, s, D2), t[s] = i;
          });
        }
      }
    }
  }
};
var lu;
function ia2(e, t, { logger: u = false, isCLI: r = false, passThrough: o = false, FlagSchema: n, descriptor: a } = {}) {
  if (r) {
    if (!n) throw new Error("'FlagSchema' option is required.");
    if (!a) throw new Error("'descriptor' option is required.");
  } else a = ie;
  let s = o ? Array.isArray(o) ? (d, c) => o.includes(d) ? { [d]: c } : void 0 : (d, c) => ({ [d]: c }) : (d, c, p) => {
    let { _: F2, ...C2 } = p.schemas;
    return ft(d, c, { ...p, schemas: C2 });
  }, i = sa2(t, { isCLI: r, FlagSchema: n }), D2 = new gt(i, { logger: u, unknown: s, descriptor: a }), f2 = u !== false;
  f2 && lu && (D2._hasDeprecationWarned = lu);
  let l2 = D2.normalize(e);
  return f2 && (lu = D2._hasDeprecationWarned), l2;
}
function sa2(e, { isCLI: t, FlagSchema: u }) {
  let r = [];
  t && r.push(dt2.create({ name: "_" }));
  for (let o of e) r.push(Da2(o, { isCLI: t, optionInfos: e, FlagSchema: u })), o.alias && t && r.push(lt2.create({ name: o.alias, sourceName: o.name }));
  return r;
}
function Da2(e, { isCLI: t, optionInfos: u, FlagSchema: r }) {
  let { name: o } = e, n = { name: o }, a, s = {};
  switch (e.type) {
    case "int":
      a = ht2, t && (n.preprocess = Number);
      break;
    case "string":
      a = je2;
      break;
    case "choice":
      a = Et2, n.choices = e.choices.map((i) => i?.redirect ? { ...i, redirect: { to: { key: e.name, value: i.redirect } } } : i);
      break;
    case "boolean":
      a = Ft2;
      break;
    case "flag":
      a = r, n.flags = u.flatMap((i) => [i.alias, i.description && i.name, i.oppositeDescription && `no-${i.name}`].filter(Boolean));
      break;
    case "path":
      a = je2;
      break;
    default:
      throw new Error(`Unexpected type ${e.type}`);
  }
  if (e.exception ? n.validate = (i, D2, f2) => e.exception(i) || D2.validate(i, f2) : n.validate = (i, D2, f2) => i === void 0 || D2.validate(i, f2), e.redirect && (s.redirect = (i) => i ? { to: typeof e.redirect == "string" ? e.redirect : { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (s.deprecated = true), t && !e.array) {
    let i = n.preprocess || ((D2) => D2);
    n.preprocess = (D2, f2, l2) => f2.preprocess(i(Array.isArray(D2) ? b2(0, D2, -1) : D2), l2);
  }
  return e.array ? pt.create({ ...t ? { preprocess: (i) => Array.isArray(i) ? i : [i] } : {}, ...s, valueSchema: a.create(n) }) : a.create({ ...n, ...s });
}
var un2 = ia2;
var ca2 = Array.prototype.findLast ?? function(e) {
  for (let t = this.length - 1; t >= 0; t--) {
    let u = this[t];
    if (e(u, t, this)) return u;
  }
};
var fa2 = X2("findLast", function() {
  if (Array.isArray(this)) return ca2;
});
var du = fa2;
var rn2 = /* @__PURE__ */ Symbol.for("PRETTIER_IS_FRONT_MATTER");
var pu = [];
function la2(e) {
  return !!e?.[rn2];
}
var de2 = la2;
var nn2 = /* @__PURE__ */ new Set(["yaml", "toml"]);
var Ue = ({ node: e }) => de2(e) && nn2.has(e.language);
async function Fu(e, t, u, r) {
  let { node: o } = u, { language: n } = o;
  if (!nn2.has(n)) return;
  let a = o.value.trim(), s;
  if (a) {
    let i = n === "yaml" ? n : st2(r, { language: n });
    if (!i) return;
    s = a ? await e(a, { parser: i }) : "";
  } else s = a;
  return et2([o.startDelimiter, o.explicitLanguage ?? "", V2, s, s ? V2 : "", o.endDelimiter]);
}
function da2(e, t) {
  return Ue({ node: e }) && (delete t.end, delete t.raw, delete t.value), t;
}
var mu = da2;
function pa2({ node: e }) {
  return e.raw;
}
var Eu = pa2;
var on2 = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]);
var Fa2 = (e) => Object.keys(e).filter((t) => !on2.has(t));
function ma2(e, t) {
  let u = e ? (r) => e(r, on2) : Fa2;
  return t ? new Proxy(u, { apply: (r, o, n) => de2(n[0]) ? pu : Reflect.apply(r, o, n) }) : u;
}
var Cu = ma2;
function gu(e, t) {
  if (!t) throw new Error("parserName is required.");
  let u = du(0, e, (o) => o.parsers && Object.prototype.hasOwnProperty.call(o.parsers, t));
  if (u) return u;
  let r = `Couldn't resolve parser "${t}".`;
  throw r += " Plugins must be explicitly added to the standalone bundle.", new Me2(r);
}
function an2(e, t) {
  if (!t) throw new Error("astFormat is required.");
  let u = du(0, e, (o) => o.printers && Object.prototype.hasOwnProperty.call(o.printers, t));
  if (u) return u;
  let r = `Couldn't find plugin for AST format "${t}".`;
  throw r += " Plugins must be explicitly added to the standalone bundle.", new Me2(r);
}
function We3({ plugins: e, parser: t }) {
  let u = gu(e, t);
  return yu(u, t);
}
function yu(e, t) {
  let u = e.parsers[t];
  return typeof u == "function" ? u() : u;
}
async function sn2(e, t) {
  let u = e.printers[t], r = typeof u == "function" ? await u() : u;
  return Ea2(r);
}
var hu = /* @__PURE__ */ new WeakMap();
function Ea2(e) {
  if (hu.has(e)) return hu.get(e);
  let { features: t, getVisitorKeys: u, embed: r, massageAstNode: o, print: n, ...a } = e;
  t = ya2(t);
  let s = t.experimental_frontMatterSupport;
  u = Cu(u, s.massageAstNode || s.embed || s.print);
  let i = o;
  o && s.massageAstNode && (i = new Proxy(o, { apply(d, c, p) {
    return mu(...p), Reflect.apply(d, c, p);
  } }));
  let D2 = r;
  if (r) {
    let d;
    D2 = new Proxy(r, { get(c, p, F2) {
      return p === "getVisitorKeys" ? (d ?? (d = r.getVisitorKeys ? Cu(r.getVisitorKeys, s.massageAstNode || s.embed) : u), d) : Reflect.get(c, p, F2);
    }, apply: (c, p, F2) => s.embed && Ue(...F2) ? Fu : Reflect.apply(c, p, F2) });
  }
  let f2 = n;
  s.print && (f2 = new Proxy(n, { apply(d, c, p) {
    let [F2] = p;
    return de2(F2.node) ? Eu(F2) : Reflect.apply(d, c, p);
  } }));
  let l2 = { features: t, getVisitorKeys: u, embed: D2, massageAstNode: i, print: f2, ...a };
  return hu.set(e, l2), l2;
}
var Ca2 = ["clean", "embed", "print"];
var ha2 = Object.fromEntries(Ca2.map((e) => [e, false]));
function ga2(e) {
  return { ...ha2, ...e };
}
function ya2(e) {
  return { experimental_avoidAstMutation: false, ...e, experimental_frontMatterSupport: ga2(e?.experimental_frontMatterSupport) };
}
var Dn2 = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null, getVisitorKeys: null };
async function ba(e, t = {}) {
  let u = { ...e };
  if (!u.parser) if (u.filepath) {
    if (u.parser = st2(u, { physicalFile: u.filepath }), !u.parser) throw new Ye2(`No parser could be inferred for file "${u.filepath}".`);
  } else throw new Ye2("No parser and no file path given, couldn't infer a parser.");
  let r = it2({ plugins: e.plugins, showDeprecated: true }).options, o = { ...Dn2, ...Object.fromEntries(r.filter((l2) => l2.default !== void 0).map((l2) => [l2.name, l2.default])) }, n = gu(u.plugins, u.parser), a = await yu(n, u.parser);
  u.astFormat = a.astFormat, u.locEnd = a.locEnd, u.locStart = a.locStart;
  let s = n.printers?.[a.astFormat] ? n : an2(u.plugins, a.astFormat), i = await sn2(s, a.astFormat);
  u.printer = i, u.getVisitorKeys = i.getVisitorKeys;
  let D2 = s.defaultOptions ? Object.fromEntries(Object.entries(s.defaultOptions).filter(([, l2]) => l2 !== void 0)) : {}, f2 = { ...o, ...D2 };
  for (let [l2, d] of Object.entries(f2)) (u[l2] === null || u[l2] === void 0) && (u[l2] = d);
  return u.parser === "json" && (u.trailingComma = "none"), un2(u, r, { passThrough: Object.keys(Dn2), ...t });
}
var se = ba;
var pf = ao2(dn2(), 1);
var Au = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
var pn2 = "\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
var af = new RegExp("[" + Au + "]");
var sf = new RegExp("[" + Au + pn2 + "]");
Au = pn2 = null;
var _u = { keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"], strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"], strictBind: ["eval", "arguments"] };
var Df = new Set(_u.keyword);
var cf = new Set(_u.strict);
var ff = new Set(_u.strictBind);
var It2 = (e, t) => (u) => e(t(u));
function mn2(e) {
  return { keyword: e.cyan, capitalized: e.yellow, jsxIdentifier: e.yellow, punctuator: e.yellow, number: e.magenta, string: e.green, regex: e.magenta, comment: e.gray, invalid: It2(It2(e.white, e.bgRed), e.bold), gutter: e.gray, marker: It2(e.red, e.bold), message: It2(e.red, e.bold), reset: e.reset };
}
var hf = mn2(ou(true));
var gf = mn2(ou(false));
function _a2() {
  return new Proxy({}, { get: () => (e) => e });
}
var Fn2 = /\r\n|[\n\r\u2028\u2029]/;
function xa2(e, t, u) {
  let r = Object.assign({ column: 0, line: -1 }, e.start), o = Object.assign({}, r, e.end), { linesAbove: n = 2, linesBelow: a = 3 } = u || {}, s = r.line, i = r.column, D2 = o.line, f2 = o.column, l2 = Math.max(s - (n + 1), 0), d = Math.min(t.length, D2 + a);
  s === -1 && (l2 = 0), D2 === -1 && (d = t.length);
  let c = D2 - s, p = {};
  if (c) for (let F2 = 0; F2 <= c; F2++) {
    let C2 = F2 + s;
    if (!i) p[C2] = true;
    else if (F2 === 0) {
      let y2 = t[C2 - 1].length;
      p[C2] = [i, y2 - i + 1];
    } else if (F2 === c) p[C2] = [0, f2];
    else {
      let y2 = t[C2 - F2].length;
      p[C2] = [0, y2];
    }
  }
  else i === f2 ? i ? p[s] = [i, 0] : p[s] = true : p[s] = [i, f2 - i];
  return { start: l2, end: d, markerLines: p };
}
function En2(e, t, u = {}) {
  let o = _a2(false), n = e.split(Fn2), { start: a, end: s, markerLines: i } = xa2(t, n, u), D2 = t.start && typeof t.start.column == "number", f2 = String(s).length, d = e.split(Fn2, s).slice(a, s).map((c, p) => {
    let F2 = a + 1 + p, y2 = ` ${` ${F2}`.slice(-f2)} |`, m = i[F2], h3 = !i[F2 + 1];
    if (m) {
      let E = "";
      if (Array.isArray(m)) {
        let g = c.slice(0, Math.max(m[0] - 1, 0)).replace(/[^\t]/g, " "), A2 = m[1] || 1;
        E = [`
 `, o.gutter(y2.replace(/\d/g, " ")), " ", g, o.marker("^").repeat(A2)].join(""), h3 && u.message && (E += " " + o.message(u.message));
      }
      return [o.marker(">"), o.gutter(y2), c.length > 0 ? ` ${c}` : "", E].join("");
    } else return ` ${o.gutter(y2)}${c.length > 0 ? ` ${c}` : ""}`;
  }).join(`
`);
  return u.message && !D2 && (d = `${" ".repeat(f2 + 1)}${u.message}
${d}`), d;
}
async function Ba2(e, t) {
  let u = await We3(t), r = u.preprocess ? await u.preprocess(e, t) : e;
  t.originalText = r;
  let o;
  try {
    o = await u.parse(r, t, t);
  } catch (n) {
    Ta2(n, e);
  }
  return { text: r, ast: o };
}
function Ta2(e, t) {
  let { loc: u } = e;
  if (u) {
    let r = En2(t, u, { highlightCode: true });
    throw e.message += `
` + r, e.codeFrame = r, e;
  }
  throw e;
}
var Fe2 = Ba2;
async function Cn2(e, t, u, r, o) {
  if (u.embeddedLanguageFormatting !== "auto") return;
  let { printer: n } = u, { embed: a } = n;
  if (!a) return;
  if (a.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/plugins#optional-embed");
  let { hasPrettierIgnore: s } = n, { getVisitorKeys: i } = a, D2 = [];
  d();
  let f2 = e.stack;
  for (let { print: c, node: p, pathStack: F2 } of D2) try {
    e.stack = F2;
    let C2 = await c(l2, t, e, u);
    C2 && o.set(p, C2);
  } catch (C2) {
    if (globalThis.PRETTIER_DEBUG) throw C2;
  }
  e.stack = f2;
  function l2(c, p) {
    return Na2(c, p, u, r);
  }
  function d() {
    let { node: c } = e;
    if (c === null || typeof c != "object" || s?.(e)) return;
    for (let F2 of i(c)) Array.isArray(c[F2]) ? e.each(d, F2) : e.call(d, F2);
    let p = a(e, u);
    if (p) {
      if (typeof p == "function") {
        D2.push({ print: p, node: c, pathStack: [...e.stack] });
        return;
      }
      o.set(c, p);
    }
  }
}
async function Na2(e, t, u, r) {
  let o = await se({ ...u, ...t, parentParser: u.parser, originalText: e, cursorOffset: void 0, rangeStart: void 0, rangeEnd: void 0 }, { passThrough: true }), { ast: n } = await Fe2(e, o), a = await r(n, o);
  return qe2(a);
}
function Sa2(e, t, u, r) {
  let { originalText: o, [/* @__PURE__ */ Symbol.for("comments")]: n, locStart: a, locEnd: s, [/* @__PURE__ */ Symbol.for("printedComments")]: i } = t, { node: D2 } = e, f2 = a(D2), l2 = s(D2);
  for (let c of n) a(c) >= f2 && s(c) <= l2 && i.add(c);
  let { printPrettierIgnored: d } = t.printer;
  return d ? d(e, t, u, r) : o.slice(f2, l2);
}
var hn2 = Sa2;
async function Ge(e, t) {
  ({ ast: e } = await xu(e, t));
  let u = /* @__PURE__ */ new Map(), r = new pr2(e), o = Nr2(t), n = /* @__PURE__ */ new Map();
  await Cn2(r, s, t, Ge, n);
  let a = await gn2(r, t, s, void 0, n);
  if (Tr2(t), t.cursorOffset >= 0) {
    if (t.nodeAfterCursor && !t.nodeBeforeCursor) return [ee, a];
    if (t.nodeBeforeCursor && !t.nodeAfterCursor) return [a, ee];
  }
  return a;
  function s(D2, f2) {
    return D2 === void 0 || D2 === r ? i(f2) : Array.isArray(D2) ? r.call(() => i(f2), ...D2) : r.call(() => i(f2), D2);
  }
  function i(D2) {
    o(r);
    let f2 = r.node;
    if (f2 == null) return "";
    let l2 = ge2(f2) && D2 === void 0;
    if (l2 && u.has(f2)) return u.get(f2);
    let d = gn2(r, t, s, D2, n);
    return l2 && u.set(f2, d), d;
  }
}
function gn2(e, t, u, r, o) {
  let { node: n } = e, { printer: a } = t, s;
  switch (a.hasPrettierIgnore?.(e) ? s = hn2(e, t, u, r) : o.has(n) ? s = o.get(n) : s = a.print(e, t, u, r), n) {
    case t.cursorNode:
      s = Ee2(s, (i) => [ee, i, ee]);
      break;
    case t.nodeBeforeCursor:
      s = Ee2(s, (i) => [i, ee]);
      break;
    case t.nodeAfterCursor:
      s = Ee2(s, (i) => [ee, i]);
      break;
  }
  return a.printComment && !a.willPrintOwnComments?.(e, t) && (s = Br2(e, s, t)), s;
}
async function xu(e, t) {
  let u = e.comments ?? [];
  t[/* @__PURE__ */ Symbol.for("comments")] = u, t[/* @__PURE__ */ Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), Ar2(e, t);
  let { printer: { preprocess: r } } = t;
  return e = r ? await r(e, t) : e, { ast: e, comments: u };
}
function wa2(e, t) {
  let { cursorOffset: u, locStart: r, locEnd: o, getVisitorKeys: n } = t, a = (c) => r(c) <= u && o(c) >= u, s = e, i = [e];
  for (let c of Cr2(e, { getVisitorKeys: n, filter: a })) i.push(c), s = c;
  if (hr2(s, { getVisitorKeys: n })) return { cursorNode: s };
  let D2, f2, l2 = -1, d = Number.POSITIVE_INFINITY;
  for (; i.length > 0 && (D2 === void 0 || f2 === void 0); ) {
    s = i.pop();
    let c = D2 !== void 0, p = f2 !== void 0;
    for (let F2 of be2(s, { getVisitorKeys: n })) {
      if (!c) {
        let C2 = o(F2);
        C2 <= u && C2 > l2 && (D2 = F2, l2 = C2);
      }
      if (!p) {
        let C2 = r(F2);
        C2 >= u && C2 < d && (f2 = F2, d = C2);
      }
    }
  }
  return { nodeBeforeCursor: D2, nodeAfterCursor: f2 };
}
var Bu = wa2;
function Oa2(e, t) {
  let { printer: u } = t, r = u.massageAstNode;
  if (!r) return e;
  let { getVisitorKeys: o } = u, { ignoredProperties: n } = r;
  return a(e);
  function a(s, i) {
    if (!ge2(s)) return s;
    if (Array.isArray(s)) return s.map((d) => a(d, i)).filter(Boolean);
    let D2 = {}, f2 = new Set(o(s));
    for (let d in s) !Object.prototype.hasOwnProperty.call(s, d) || n?.has(d) || (f2.has(d) ? D2[d] = a(s[d], s) : D2[d] = s[d]);
    let l2 = r(s, D2, i);
    if (l2 !== null) return l2 ?? D2;
  }
}
var yn2 = Oa2;
var Pa2 = Array.prototype.findLastIndex ?? function(e) {
  for (let t = this.length - 1; t >= 0; t--) {
    let u = this[t];
    if (e(u, t, this)) return t;
  }
  return -1;
};
var Ia2 = X2("findLastIndex", function() {
  if (Array.isArray(this)) return Pa2;
});
var bn2 = Ia2;
var ka2 = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify";
function va2(e, t) {
  return t = new Set(t), e.find((u) => xn2.has(u.type) && t.has(u));
}
function An2(e) {
  let t = bn2(0, e, (u) => u.type !== "Program" && u.type !== "File");
  return t === -1 ? e : e.slice(0, t + 1);
}
function Ra2(e, t, { locStart: u, locEnd: r }) {
  let [o, ...n] = e, [a, ...s] = t;
  if (o === a) return [o, a];
  let i = u(o);
  for (let f2 of An2(s)) if (u(f2) >= i) a = f2;
  else break;
  let D2 = r(a);
  for (let f2 of An2(n)) {
    if (r(f2) <= D2) o = f2;
    else break;
    if (o === a) break;
  }
  return [o, a];
}
function Tu(e, t, u, r, o = [], n) {
  let { locStart: a, locEnd: s } = u, i = a(e), D2 = s(e);
  if (t > D2 || t < i || n === "rangeEnd" && t === i || n === "rangeStart" && t === D2) return;
  let f2 = [e, ...o], l2 = at2(e, f2, { cache: uu, locStart: a, locEnd: s, getVisitorKeys: u.getVisitorKeys, filter: u.printer.canAttachComment, getChildren: u.printer.getCommentChildNodes });
  for (let d of l2) {
    let c = Tu(d, t, u, r, f2, n);
    if (c) return c;
  }
  if (r(e, o[0])) return f2;
}
function La2(e, t) {
  return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
}
var xn2 = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]);
var Ma2 = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
function _n2(e, t, u) {
  if (!t) return false;
  switch (e.parser) {
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
    case "__babel_estree":
      return La2(t.type, u?.type);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return xn2.has(t.type);
    case "graphql":
      return Ma2.has(t.kind);
    case "vue":
      return t.tag !== "root";
  }
  return false;
}
function Bn2(e, t, u) {
  let { rangeStart: r, rangeEnd: o, locStart: n, locEnd: a } = t;
  P(o > r);
  let s = e.slice(r, o).search(/\S/u), i = s === -1;
  if (!i) for (r += s; o > r && !/\S/u.test(e[o - 1]); --o) ;
  let D2 = Tu(u, r, t, (c, p) => _n2(t, c, p), [], "rangeStart");
  if (!D2) return;
  let f2 = i ? D2 : Tu(u, o, t, (c) => _n2(t, c), [], "rangeEnd");
  if (!f2) return;
  let l2, d;
  if (ka2(t)) {
    let c = va2(D2, f2);
    l2 = c, d = c;
  } else [l2, d] = Ra2(D2, f2, t);
  return [Math.min(n(l2), n(d)), Math.max(a(l2), a(d))];
}
var wn2 = "\uFEFF";
var Tn2 = /* @__PURE__ */ Symbol("cursor");
async function On2(e, t, u = 0) {
  if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: r, text: o } = await Fe2(e, t);
  t.cursorOffset >= 0 && (t = { ...t, ...Bu(r, t) });
  let n = await Ge(r, t, u);
  u > 0 && (n = tt2([V2, n], u, t.tabWidth));
  let a = Ce2(n, t);
  if (u > 0) {
    let i = a.formatted.trim();
    a.cursorNodeStart !== void 0 && (a.cursorNodeStart -= a.formatted.indexOf(i), a.cursorNodeStart < 0 && (a.cursorNodeStart = 0, a.cursorNodeText = a.cursorNodeText.trimStart()), a.cursorNodeStart + a.cursorNodeText.length > i.length && (a.cursorNodeText = a.cursorNodeText.trimEnd())), a.formatted = i + Se2(t.endOfLine);
  }
  let s = t[/* @__PURE__ */ Symbol.for("comments")];
  if (t.cursorOffset >= 0) {
    let i, D2, f2, l2;
    if ((t.cursorNode || t.nodeBeforeCursor || t.nodeAfterCursor) && a.cursorNodeText) if (f2 = a.cursorNodeStart, l2 = a.cursorNodeText, t.cursorNode) i = t.locStart(t.cursorNode), D2 = o.slice(i, t.locEnd(t.cursorNode));
    else {
      if (!t.nodeBeforeCursor && !t.nodeAfterCursor) throw new Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");
      i = t.nodeBeforeCursor ? t.locEnd(t.nodeBeforeCursor) : 0;
      let y2 = t.nodeAfterCursor ? t.locStart(t.nodeAfterCursor) : o.length;
      D2 = o.slice(i, y2);
    }
    else i = 0, D2 = o, f2 = 0, l2 = a.formatted;
    let d = t.cursorOffset - i;
    if (D2 === l2) return { formatted: a.formatted, cursorOffset: f2 + d, comments: s };
    let c = D2.split("");
    c.splice(d, 0, Tn2);
    let p = l2.split(""), F2 = Ut2(c, p), C2 = f2;
    for (let y2 of F2) if (y2.removed) {
      if (y2.value.includes(Tn2)) break;
    } else C2 += y2.count;
    return { formatted: a.formatted, cursorOffset: C2, comments: s };
  }
  return { formatted: a.formatted, cursorOffset: -1, comments: s };
}
async function Ya2(e, t) {
  let { ast: u, text: r } = await Fe2(e, t), [o, n] = Bn2(r, t, u) ?? [0, 0], a = r.slice(o, n), s = Math.min(o, r.lastIndexOf(`
`, o) + 1), i = r.slice(s, o).match(/^\s*/u)[0], D2 = he2(i, t.tabWidth), f2 = await On2(a, { ...t, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t.cursorOffset > o && t.cursorOffset <= n ? t.cursorOffset - o : -1, endOfLine: "lf" }, D2), l2 = f2.formatted.trimEnd(), { cursorOffset: d } = t;
  d > n ? d += l2.length - a.length : f2.cursorOffset >= 0 && (d = f2.cursorOffset + o);
  let c = r.slice(0, o) + l2 + r.slice(n);
  if (t.endOfLine !== "lf") {
    let p = Se2(t.endOfLine);
    d >= 0 && p === `\r
` && (d += $t(c.slice(0, d), `
`)), c = oe(0, c, `
`, p);
  }
  return { formatted: c, cursorOffset: d, comments: f2.comments };
}
function Nu(e, t, u) {
  return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? u : t;
}
function Nn2(e, t) {
  let { cursorOffset: u, rangeStart: r, rangeEnd: o } = t;
  return u = Nu(e, u, -1), r = Nu(e, r, 0), o = Nu(e, o, e.length), { ...t, cursorOffset: u, rangeStart: r, rangeEnd: o };
}
function Pn2(e, t) {
  let { cursorOffset: u, rangeStart: r, rangeEnd: o, endOfLine: n } = Nn2(e, t), a = e.charAt(0) === wn2;
  if (a && (e = e.slice(1), u--, r--, o--), n === "auto" && (n = Yu(e)), e.includes("\r")) {
    let s = (i) => $t(e.slice(0, Math.max(i, 0)), `\r
`);
    u -= s(u), r -= s(r), o -= s(o), e = ju(e);
  }
  return { hasBOM: a, text: e, options: Nn2(e, { ...t, cursorOffset: u, rangeStart: r, rangeEnd: o, endOfLine: n }) };
}
async function Sn2(e, t) {
  let u = await We3(t);
  return !u.hasPragma || u.hasPragma(e);
}
async function ja2(e, t) {
  return (await We3(t)).hasIgnorePragma?.(e);
}
async function Su(e, t) {
  let { hasBOM: u, text: r, options: o } = Pn2(e, await se(t));
  if (o.rangeStart >= o.rangeEnd && r !== "" || o.requirePragma && !await Sn2(r, o) || o.checkIgnorePragma && await ja2(r, o)) return { formatted: e, cursorOffset: t.cursorOffset, comments: [] };
  let n;
  return o.rangeStart > 0 || o.rangeEnd < r.length ? n = await Ya2(r, o) : (!o.requirePragma && o.insertPragma && o.printer.insertPragma && !await Sn2(r, o) && (r = o.printer.insertPragma(r)), n = await On2(r, o)), u && (n.formatted = wn2 + n.formatted, n.cursorOffset >= 0 && n.cursorOffset++), n;
}
async function In2(e, t, u) {
  let { text: r, options: o } = Pn2(e, await se(t)), n = await Fe2(r, o);
  return u && (u.preprocessForPrint && (n.ast = await xu(n.ast, o)), u.massage && (n.ast = yn2(n.ast, o))), n;
}
async function kn2(e, t) {
  t = await se(t);
  let u = await Ge(e, t);
  return Ce2(u, t);
}
async function vn2(e, t) {
  let u = sr2(e), { formatted: r } = await Su(u, { ...t, parser: "__js_expression" });
  return r;
}
async function Rn2(e, t) {
  t = await se(t);
  let { ast: u } = await Fe2(e, t);
  return t.cursorOffset >= 0 && (t = { ...t, ...Bu(u, t) }), Ge(u, t);
}
async function Ln2(e, t) {
  return Ce2(e, await se(t));
}
var wu = {};
Yt(wu, { builders: () => Wa2, printer: () => $a2, utils: () => Va2 });
var Wa2 = { join: Ie2, line: ut2, softline: or2, hardline: V2, literalline: Qe2, group: Kt, conditionalGroup: tr2, fill: er2, lineSuffix: ve2, lineSuffixBoundary: ar2, cursor: ee, breakParent: ce2, ifBreak: ur2, trim: ir2, indent: ae2, indentIfBreak: rr2, align: De2, addAlignmentToDoc: tt2, markAsRoot: et2, dedentToRoot: Qu, dedent: Zu, hardlineWithoutBreakParent: ke, literallineWithoutBreakParent: Gt, label: nr, concat: (e) => e };
var $a2 = { printDocToString: Ce2 };
var Va2 = { willBreak: Ku, traverseDoc: we2, findInDoc: Xe2, mapDoc: Pe2, removeLines: zu, stripTrailingHardline: qe2, replaceEndOfLine: Ju, canBreak: Hu };
var Mn2 = "3.7.4";
var Pu = {};
Yt(Pu, { addDanglingComment: () => ue2, addLeadingComment: () => fe2, addTrailingComment: () => le2, getAlignmentSize: () => he2, getIndentSize: () => Yn2, getMaxContinuousCount: () => jn2, getNextNonSpaceNonCommentCharacter: () => Un2, getNextNonSpaceNonCommentCharacterIndex: () => ni2, getPreferredQuote: () => Vn2, getStringWidth: () => Re2, hasNewline: () => z, hasNewlineInRange: () => Kn2, hasSpaces: () => Gn2, isNextLineEmpty: () => Di2, isNextLineEmptyAfterIndex: () => kt2, isPreviousLineEmpty: () => ai2, makeString: () => si2, skip: () => ye2, skipEverythingButNewLine: () => ot2, skipInlineComment: () => xe2, skipNewline: () => K2, skipSpaces: () => Y2, skipToLineEnd: () => nt2, skipTrailingComment: () => Be2, skipWhitespace: () => Fr2 });
function Ka2(e, t) {
  if (t === false) return false;
  if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
    for (let u = t + 2; u < e.length; ++u) if (e.charAt(u) === "*" && e.charAt(u + 1) === "/") return u + 2;
  }
  return t;
}
var xe2 = Ka2;
function Ga2(e, t) {
  return t === false ? false : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? ot2(e, t) : t;
}
var Be2 = Ga2;
function za2(e, t) {
  let u = null, r = t;
  for (; r !== u; ) u = r, r = Y2(e, r), r = xe2(e, r), r = Be2(e, r), r = K2(e, r);
  return r;
}
var ze2 = za2;
function Ja2(e, t) {
  let u = null, r = t;
  for (; r !== u; ) u = r, r = nt2(e, r), r = xe2(e, r), r = Y2(e, r);
  return r = Be2(e, r), r = K2(e, r), r !== false && z(e, r);
}
var kt2 = Ja2;
function Ha2(e, t) {
  let u = e.lastIndexOf(`
`);
  return u === -1 ? 0 : he2(e.slice(u + 1).match(/^[\t ]*/u)[0], t);
}
var Yn2 = Ha2;
function Ou(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Xa2(e, t) {
  let u = e.matchAll(new RegExp(`(?:${Ou(t)})+`, "gu"));
  return u.reduce || (u = [...u]), u.reduce((r, [o]) => Math.max(r, o.length), 0) / t.length;
}
var jn2 = Xa2;
function qa2(e, t) {
  let u = ze2(e, t);
  return u === false ? "" : e.charAt(u);
}
var Un2 = qa2;
var Wn2 = Object.freeze({ character: "'", codePoint: 39 });
var $n2 = Object.freeze({ character: '"', codePoint: 34 });
var Qa2 = Object.freeze({ preferred: Wn2, alternate: $n2 });
var Za2 = Object.freeze({ preferred: $n2, alternate: Wn2 });
function ei2(e, t) {
  let { preferred: u, alternate: r } = t === true || t === "'" ? Qa2 : Za2, { length: o } = e, n = 0, a = 0;
  for (let s = 0; s < o; s++) {
    let i = e.charCodeAt(s);
    i === u.codePoint ? n++ : i === r.codePoint && a++;
  }
  return (n > a ? r : u).character;
}
var Vn2 = ei2;
function ti2(e, t, u) {
  for (let r = t; r < u; ++r) if (e.charAt(r) === `
`) return true;
  return false;
}
var Kn2 = ti2;
function ui2(e, t, u = {}) {
  return Y2(e, u.backwards ? t - 1 : t, u) !== t;
}
var Gn2 = ui2;
function ri2(e, t, u) {
  return ze2(e, u(t));
}
function ni2(e, t) {
  return arguments.length === 2 || typeof t == "number" ? ze2(e, t) : ri2(...arguments);
}
function oi2(e, t, u) {
  return Le2(e, u(t));
}
function ai2(e, t) {
  return arguments.length === 2 || typeof t == "number" ? Le2(e, t) : oi2(...arguments);
}
function ii2(e, t, u) {
  return kt2(e, u(t));
}
function si2(e, t, u) {
  let r = t === '"' ? "'" : '"', n = oe(0, e, /\\(.)|(["'])/gsu, (a, s, i) => s === r ? s : i === t ? "\\" + i : i || (u && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s) ? s : "\\" + s));
  return t + n + t;
}
function Di2(e, t) {
  return arguments.length === 2 || typeof t == "number" ? kt2(e, t) : ii2(...arguments);
}
function me2(e, t = 1) {
  return async (...u) => {
    let r = u[t] ?? {}, o = r.plugins ?? [];
    return u[t] = { ...r, plugins: Array.isArray(o) ? o : Object.values(o) }, e(...u);
  };
}
var zn2 = me2(Su);
async function Jn2(e, t) {
  let { formatted: u } = await zn2(e, { ...t, cursorOffset: -1 });
  return u;
}
async function ci2(e, t) {
  return await Jn2(e, t) === e;
}
var fi2 = me2(it2, 0);
var li2 = { parse: me2(In2), formatAST: me2(kn2), formatDoc: me2(vn2), printToDoc: me2(Rn2), printDocToString: me2(Ln2) };

// ../../node_modules/@forsakringskassan/docs-live-example/dist/esm/index.js
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, createCommentVNode as _createCommentVNode, vModelRadio as _vModelRadio, withDirectives as _withDirectives, openBlock as _openBlock, createElementBlock as _createElementBlock, Fragment as _Fragment } from "vue";
import { compile, defineComponent, h as h2 } from "vue";
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
          ...pieces.map((x3, i) => `${x3}${"_".repeat(i + 1)}`)
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
      const joined = args.map((x3) => source(x3)).join("");
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
      const joined = "(" + (opts.capture ? "" : "?:") + args.map((x3) => source(x3)).join("|") + ")";
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
        "on:begin": (m, resp) => {
          if (m.index !== 0) resp.ignoreMatch();
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
          "on:begin": (m, resp) => {
            resp.data._beginMatch = m[1];
          },
          /** @type {ModeCallback} */
          "on:end": (m, resp) => {
            if (resp.data._beginMatch !== m[1]) resp.ignoreMatch();
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
          keywordList = keywordList.map((x3) => x3.toLowerCase());
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
          const m = this.getMatcher(this.regexIndex);
          m.lastIndex = this.lastIndex;
          let result = m.exec(s);
          if (this.resumingScanAtSamePosition()) {
            if (result && result.index === this.lastIndex) ;
            else {
              const m2 = this.getMatcher(0);
              m2.lastIndex = this.lastIndex + 1;
              result = m2.exec(s);
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
  const b3 = 1597334677;
  const c = 2246822507;
  const d = 3266489909;
  const e = 4294967296;
  const f2 = 2097151;
  const seed = 0;
  let h1 = 3735928559 ^ seed;
  let h22 = 1103547991 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, a);
    h22 = Math.imul(h22 ^ ch, b3);
  }
  h1 = Math.imul(h1 ^ h1 >>> 16, c) ^ Math.imul(h22 ^ h22 >>> 13, d);
  h22 = Math.imul(h22 ^ h22 >>> 16, c) ^ Math.imul(h1 ^ h1 >>> 13, d);
  return e * (f2 & h22) + (h1 >>> 0);
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
  plugins: [ws],
  singleQuote: false,
  arrowParens: "always",
  tabWidth: 4,
  printWidth: 80
};
async function highlight(code) {
  const formatted = await Jn2(code, prettierConfig);
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
function toKebabCase(input) {
  return input.replace(
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
    }, set idPrefix(v3) {
      idPrefix = v3;
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
  class: "live-example__example user-background"
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
        )) : (_openBlock2(), _createElementBlock2("div", _hoisted_52, [..._cache[0] || (_cache[0] = [
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
    return `${prefix}${key}="${String(value)}"`;
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
  const kv = entries.map(
    ([key, value]) => serializeAttribute(toKebabCase(key), value)
  );
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
