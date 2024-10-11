"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
    get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
  }) : x2)(function(x2) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x2 + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
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

  // node_modules/prettier/plugins/html.js
  var require_html = __commonJS({
    "node_modules/prettier/plugins/html.js"(exports, module) {
      "use strict";
      (function(f) {
        function e() {
          var i = f();
          return i.default || i;
        }
        if (typeof exports == "object" && typeof module == "object") module.exports = e();
        else if (typeof define == "function" && define.amd) define(e);
        else {
          var t = typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : typeof self < "u" ? self : this || {};
          t.prettierPlugins = t.prettierPlugins || {}, t.prettierPlugins.html = e();
        }
      })(function() {
        "use strict";
        var lr2 = Object.defineProperty;
        var ni2 = Object.getOwnPropertyDescriptor;
        var si2 = Object.getOwnPropertyNames;
        var ii2 = Object.prototype.hasOwnProperty;
        var Xr2 = (t) => {
          throw TypeError(t);
        };
        var Jr2 = (t, e) => {
          for (var r in e) lr2(t, r, { get: e[r], enumerable: true });
        }, ai2 = (t, e, r, n) => {
          if (e && typeof e == "object" || typeof e == "function") for (let s of si2(e)) !ii2.call(t, s) && s !== r && lr2(t, s, { get: () => e[s], enumerable: !(n = ni2(e, s)) || n.enumerable });
          return t;
        };
        var oi2 = (t) => ai2(lr2({}, "__esModule", { value: true }), t);
        var Zr2 = (t, e, r) => e.has(t) || Xr2("Cannot " + r);
        var Q2 = (t, e, r) => (Zr2(t, e, "read from private field"), r ? r.call(t) : e.get(t)), en2 = (t, e, r) => e.has(t) ? Xr2("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), tn2 = (t, e, r, n) => (Zr2(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r);
        var Vo2 = {};
        Jr2(Vo2, { languages: () => Ds, options: () => ys, parsers: () => Yr2, printers: () => Ho2 });
        var ui2 = (t, e, r, n) => {
          if (!(t && e == null)) return e.replaceAll ? e.replaceAll(r, n) : r.global ? e.replace(r, n) : e.split(r).join(n);
        }, w = ui2;
        var ke2 = "string", Be2 = "array", Le2 = "cursor", ce2 = "indent", pe2 = "align", Fe2 = "trim", te2 = "group", he2 = "fill", me2 = "if-break", fe2 = "indent-if-break", Ne2 = "line-suffix", Pe2 = "line-suffix-boundary", Y2 = "line", Ie2 = "label", de2 = "break-parent", St2 = /* @__PURE__ */ new Set([Le2, ce2, pe2, Fe2, te2, he2, me2, fe2, Ne2, Pe2, Y2, Ie2, de2]);
        function li2(t) {
          if (typeof t == "string") return ke2;
          if (Array.isArray(t)) return Be2;
          if (!t) return;
          let { type: e } = t;
          if (St2.has(e)) return e;
        }
        var Re2 = li2;
        var ci2 = (t) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(t);
        function pi2(t) {
          let e = t === null ? "null" : typeof t;
          if (e !== "string" && e !== "object") return `Unexpected doc '${e}', 
Expected it to be 'string' or 'object'.`;
          if (Re2(t)) throw new Error("doc is valid.");
          let r = Object.prototype.toString.call(t);
          if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
          let n = ci2([...St2].map((s) => `'${s}'`));
          return `Unexpected doc.type '${t.type}'.
Expected it to be ${n}.`;
        }
        var cr2 = class extends Error {
          name = "InvalidDocError";
          constructor(e) {
            super(pi2(e)), this.doc = e;
          }
        }, _t2 = cr2;
        var rn2 = () => {
        }, re2 = rn2, Et2 = rn2;
        function k(t) {
          return re2(t), { type: ce2, contents: t };
        }
        function nn2(t, e) {
          return re2(e), { type: pe2, contents: e, n: t };
        }
        function _2(t, e = {}) {
          return re2(t), Et2(e.expandedStates, true), { type: te2, id: e.id, contents: t, break: !!e.shouldBreak, expandedStates: e.expandedStates };
        }
        function sn(t) {
          return nn2(Number.NEGATIVE_INFINITY, t);
        }
        function an2(t) {
          return nn2({ type: "root" }, t);
        }
        function At2(t) {
          return Et2(t), { type: he2, parts: t };
        }
        function ge2(t, e = "", r = {}) {
          return re2(t), e !== "" && re2(e), { type: me2, breakContents: t, flatContents: e, groupId: r.groupId };
        }
        function on(t, e) {
          return re2(t), { type: fe2, contents: t, groupId: e.groupId, negate: e.negate };
        }
        var ne2 = { type: de2 };
        var hi2 = { type: Y2, hard: true }, mi = { type: Y2, hard: true, literal: true }, E = { type: Y2 }, v = { type: Y2, soft: true }, S2 = [hi2, ne2], un2 = [mi, ne2];
        function q2(t, e) {
          re2(t), Et2(e);
          let r = [];
          for (let n = 0; n < e.length; n++) n !== 0 && r.push(t), r.push(e[n]);
          return r;
        }
        var fi2 = (t, e, r) => {
          if (!(t && e == null)) return Array.isArray(e) || typeof e == "string" ? e[r < 0 ? e.length + r : r] : e.at(r);
        }, X2 = fi2;
        function Dt2(t, e) {
          if (typeof t == "string") return e(t);
          let r = /* @__PURE__ */ new Map();
          return n(t);
          function n(i) {
            if (r.has(i)) return r.get(i);
            let a = s(i);
            return r.set(i, a), a;
          }
          function s(i) {
            switch (Re2(i)) {
              case Be2:
                return e(i.map(n));
              case he2:
                return e({ ...i, parts: i.parts.map(n) });
              case me2:
                return e({ ...i, breakContents: n(i.breakContents), flatContents: n(i.flatContents) });
              case te2: {
                let { expandedStates: a, contents: o } = i;
                return a ? (a = a.map(n), o = a[0]) : o = n(o), e({ ...i, contents: o, expandedStates: a });
              }
              case pe2:
              case ce2:
              case fe2:
              case Ie2:
              case Ne2:
                return e({ ...i, contents: n(i.contents) });
              case ke2:
              case Le2:
              case Fe2:
              case Pe2:
              case Y2:
              case de2:
                return e(i);
              default:
                throw new _t2(i);
            }
          }
        }
        function di2(t) {
          switch (Re2(t)) {
            case he2:
              if (t.parts.every((e) => e === "")) return "";
              break;
            case te2:
              if (!t.contents && !t.id && !t.break && !t.expandedStates) return "";
              if (t.contents.type === te2 && t.contents.id === t.id && t.contents.break === t.break && t.contents.expandedStates === t.expandedStates) return t.contents;
              break;
            case pe2:
            case ce2:
            case fe2:
            case Ne2:
              if (!t.contents) return "";
              break;
            case me2:
              if (!t.flatContents && !t.breakContents) return "";
              break;
            case Be2: {
              let e = [];
              for (let r of t) {
                if (!r) continue;
                let [n, ...s] = Array.isArray(r) ? r : [r];
                typeof n == "string" && typeof X2(false, e, -1) == "string" ? e[e.length - 1] += n : e.push(n), e.push(...s);
              }
              return e.length === 0 ? "" : e.length === 1 ? e[0] : e;
            }
            case ke2:
            case Le2:
            case Fe2:
            case Pe2:
            case Y2:
            case Ie2:
            case de2:
              break;
            default:
              throw new _t2(t);
          }
          return t;
        }
        function ln2(t) {
          return Dt2(t, (e) => di2(e));
        }
        function B2(t, e = un2) {
          return Dt2(t, (r) => typeof r == "string" ? q2(e, r.split(`
`)) : r);
        }
        var vt2 = "'", cn2 = '"';
        function gi(t, e) {
          let r = e === true || e === vt2 ? vt2 : cn2, n = r === vt2 ? cn2 : vt2, s = 0, i = 0;
          for (let a of t) a === r ? s++ : a === n && i++;
          return s > i ? n : r;
        }
        var pn2 = gi;
        function pr2(t) {
          if (typeof t != "string") throw new TypeError("Expected a string");
          return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
        }
        var H2, hr2 = class {
          constructor(e) {
            en2(this, H2);
            tn2(this, H2, new Set(e));
          }
          getLeadingWhitespaceCount(e) {
            let r = Q2(this, H2), n = 0;
            for (let s = 0; s < e.length && r.has(e.charAt(s)); s++) n++;
            return n;
          }
          getTrailingWhitespaceCount(e) {
            let r = Q2(this, H2), n = 0;
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
            return Q2(this, H2).has(e.charAt(0));
          }
          hasTrailingWhitespace(e) {
            return Q2(this, H2).has(X2(false, e, -1));
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
            let n = `[${pr2([...Q2(this, H2)].join(""))}]+`, s = new RegExp(r ? `(${n})` : n, "u");
            return e.split(s);
          }
          hasWhitespaceCharacter(e) {
            let r = Q2(this, H2);
            return Array.prototype.some.call(e, (n) => r.has(n));
          }
          hasNonWhitespaceCharacter(e) {
            let r = Q2(this, H2);
            return Array.prototype.some.call(e, (n) => !r.has(n));
          }
          isWhitespaceOnly(e) {
            let r = Q2(this, H2);
            return Array.prototype.every.call(e, (n) => r.has(n));
          }
        };
        H2 = /* @__PURE__ */ new WeakMap();
        var hn2 = hr2;
        var Ci = ["	", `
`, "\f", "\r", " "], Si = new hn2(Ci), N2 = Si;
        var mr2 = class extends Error {
          name = "UnexpectedNodeError";
          constructor(e, r, n = "type") {
            super(`Unexpected ${r} node ${n}: ${JSON.stringify(e[n])}.`), this.node = e;
          }
        }, mn2 = mr2;
        function _i(t) {
          return (t == null ? void 0 : t.type) === "front-matter";
        }
        var $e2 = _i;
        var Ei = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan", "keySpan", "tagDefinition", "tokens", "valueTokens", "switchValueSourceSpan", "expSourceSpan", "valueSourceSpan"]), Ai = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
        function fn2(t, e) {
          var r;
          if (t.type === "text" || t.type === "comment" || $e2(t) || t.type === "yaml" || t.type === "toml") return null;
          if (t.type === "attribute" && delete e.value, t.type === "docType" && delete e.value, t.type === "angularControlFlowBlock" && ((r = t.parameters) != null && r.children)) for (let n of e.parameters.children) Ai.has(t.name) ? delete n.expression : n.expression = n.expression.trim();
          t.type === "angularIcuExpression" && (e.switchValue = t.switchValue.trim()), t.type === "angularLetDeclarationInitializer" && delete e.value;
        }
        fn2.ignoredProperties = Ei;
        var dn2 = fn2;
        async function Di2(t, e) {
          if (t.language === "yaml") {
            let r = t.value.trim(), n = r ? await e(r, { parser: "yaml" }) : "";
            return an2([t.startDelimiter, t.explicitLanguage, S2, n, n ? S2 : "", t.endDelimiter]);
          }
        }
        var gn2 = Di2;
        function Ce2(t, e = true) {
          return [k([v, t]), e ? v : ""];
        }
        function j2(t, e) {
          let r = t.type === "NGRoot" ? t.node.type === "NGMicrosyntax" && t.node.body.length === 1 && t.node.body[0].type === "NGMicrosyntaxExpression" ? t.node.body[0].expression : t.node : t.type === "JsExpressionRoot" ? t.node : t;
          return r && (r.type === "ObjectExpression" || r.type === "ArrayExpression" || (e.parser === "__vue_expression" || e.parser === "__vue_ts_expression") && (r.type === "TemplateLiteral" || r.type === "StringLiteral"));
        }
        async function T2(t, e, r, n) {
          r = { __isInHtmlAttribute: true, __embeddedInHtml: true, ...r };
          let s = true;
          n && (r.__onHtmlBindingRoot = (a, o) => {
            s = n(a, o);
          });
          let i = await e(t, r, e);
          return s ? _2(i) : Ce2(i);
        }
        function vi(t, e, r, n) {
          let { node: s } = r, i = n.originalText.slice(s.sourceSpan.start.offset, s.sourceSpan.end.offset);
          return /^\s*$/u.test(i) ? "" : T2(i, t, { parser: "__ng_directive", __isInHtmlAttribute: false }, j2);
        }
        var Cn2 = vi;
        var yi = (t) => String(t).split(/[/\\]/u).pop();
        function Sn2(t, e) {
          if (!e) return;
          let r = yi(e).toLowerCase();
          return t.find(({ filenames: n }) => n == null ? void 0 : n.some((s) => s.toLowerCase() === r)) ?? t.find(({ extensions: n }) => n == null ? void 0 : n.some((s) => r.endsWith(s)));
        }
        function wi(t, e) {
          if (e) return t.find(({ name: r }) => r.toLowerCase() === e) ?? t.find(({ aliases: r }) => r == null ? void 0 : r.includes(e)) ?? t.find(({ extensions: r }) => r == null ? void 0 : r.includes(`.${e}`));
        }
        function bi(t, e) {
          let r = t.plugins.flatMap((s) => s.languages ?? []), n = wi(r, e.language) ?? Sn2(r, e.physicalFile) ?? Sn2(r, e.file) ?? (e.physicalFile, void 0);
          return n == null ? void 0 : n.parsers[0];
        }
        var Oe2 = bi;
        var _n2 = "inline", En2 = { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", style: "none", template: "inline", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", dialog: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", search: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", menu: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", input: "inline-block", button: "inline-block", fieldset: "block", marquee: "inline-block", source: "block", track: "block", details: "block", summary: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, An2 = "normal", Dn2 = { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" };
        function Ti(t) {
          return t.type === "element" && !t.hasExplicitNamespace && !["html", "svg"].includes(t.namespace);
        }
        var Se2 = Ti;
        var xi = (t) => w(false, t, /^[\t\f\r ]*\n/gu, ""), fr2 = (t) => xi(N2.trimEnd(t)), vn2 = (t) => {
          let e = t, r = N2.getLeadingWhitespace(e);
          r && (e = e.slice(r.length));
          let n = N2.getTrailingWhitespace(e);
          return n && (e = e.slice(0, -n.length)), { leadingWhitespace: r, trailingWhitespace: n, text: e };
        };
        function yt(t, e) {
          return !!(t.type === "ieConditionalComment" && t.lastChild && !t.lastChild.isSelfClosing && !t.lastChild.endSourceSpan || t.type === "ieConditionalComment" && !t.complete || _e2(t) && t.children.some((r) => r.type !== "text" && r.type !== "interpolation") || Tt2(t, e) && !U2(t) && t.type !== "interpolation");
        }
        function Ee2(t) {
          return t.type === "attribute" || !t.parent || !t.prev ? false : ki(t.prev);
        }
        function ki(t) {
          return t.type === "comment" && t.value.trim() === "prettier-ignore";
        }
        function $(t) {
          return t.type === "text" || t.type === "comment";
        }
        function U2(t) {
          return t.type === "element" && (t.fullName === "script" || t.fullName === "style" || t.fullName === "svg:style" || t.fullName === "svg:script" || Se2(t) && (t.name === "script" || t.name === "style"));
        }
        function yn2(t) {
          return t.children && !U2(t);
        }
        function wn2(t) {
          return U2(t) || t.type === "interpolation" || dr2(t);
        }
        function dr2(t) {
          return Rn(t).startsWith("pre");
        }
        function bn2(t, e) {
          var s, i;
          let r = n();
          if (r && !t.prev && ((i = (s = t.parent) == null ? void 0 : s.tagDefinition) != null && i.ignoreFirstLf)) return t.type === "interpolation";
          return r;
          function n() {
            return $e2(t) || t.type === "angularControlFlowBlock" ? false : (t.type === "text" || t.type === "interpolation") && t.prev && (t.prev.type === "text" || t.prev.type === "interpolation") ? true : !t.parent || t.parent.cssDisplay === "none" ? false : _e2(t.parent) ? true : !(!t.prev && (t.parent.type === "root" || _e2(t) && t.parent || U2(t.parent) || Je2(t.parent, e) || !Ii(t.parent.cssDisplay)) || t.prev && !Oi(t.prev.cssDisplay));
          }
        }
        function Tn2(t, e) {
          return $e2(t) || t.type === "angularControlFlowBlock" ? false : (t.type === "text" || t.type === "interpolation") && t.next && (t.next.type === "text" || t.next.type === "interpolation") ? true : !t.parent || t.parent.cssDisplay === "none" ? false : _e2(t.parent) ? true : !(!t.next && (t.parent.type === "root" || _e2(t) && t.parent || U2(t.parent) || Je2(t.parent, e) || !Ri(t.parent.cssDisplay)) || t.next && !$i(t.next.cssDisplay));
        }
        function xn2(t) {
          return Mi(t.cssDisplay) && !U2(t);
        }
        function Qe2(t) {
          return $e2(t) || t.next && t.sourceSpan.end && t.sourceSpan.end.line + 1 < t.next.sourceSpan.start.line;
        }
        function kn2(t) {
          return gr2(t) || t.type === "element" && t.children.length > 0 && (["body", "script", "style"].includes(t.name) || t.children.some((e) => Li(e))) || t.firstChild && t.firstChild === t.lastChild && t.firstChild.type !== "text" && Ln(t.firstChild) && (!t.lastChild.isTrailingSpaceSensitive || Fn2(t.lastChild));
        }
        function gr2(t) {
          return t.type === "element" && t.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(t.name) || t.cssDisplay.startsWith("table") && t.cssDisplay !== "table-cell");
        }
        function wt2(t) {
          return Nn2(t) || t.prev && Bi(t.prev) || Bn2(t);
        }
        function Bi(t) {
          return Nn2(t) || t.type === "element" && t.fullName === "br" || Bn2(t);
        }
        function Bn2(t) {
          return Ln(t) && Fn2(t);
        }
        function Ln(t) {
          return t.hasLeadingSpaces && (t.prev ? t.prev.sourceSpan.end.line < t.sourceSpan.start.line : t.parent.type === "root" || t.parent.startSourceSpan.end.line < t.sourceSpan.start.line);
        }
        function Fn2(t) {
          return t.hasTrailingSpaces && (t.next ? t.next.sourceSpan.start.line > t.sourceSpan.end.line : t.parent.type === "root" || t.parent.endSourceSpan && t.parent.endSourceSpan.start.line > t.sourceSpan.end.line);
        }
        function Nn2(t) {
          switch (t.type) {
            case "ieConditionalComment":
            case "comment":
            case "directive":
              return true;
            case "element":
              return ["script", "select"].includes(t.name);
          }
          return false;
        }
        function bt2(t) {
          return t.lastChild ? bt2(t.lastChild) : t;
        }
        function Li(t) {
          var e;
          return (e = t.children) == null ? void 0 : e.some((r) => r.type !== "text");
        }
        function Pn2(t) {
          if (t) switch (t) {
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
              if (t.endsWith("json") || t.endsWith("importmap") || t === "speculationrules") return "json";
          }
        }
        function Fi(t, e) {
          let { name: r, attrMap: n } = t;
          if (r !== "script" || Object.prototype.hasOwnProperty.call(n, "src")) return;
          let { type: s, lang: i } = t.attrMap;
          return !i && !s ? "babel" : Oe2(e, { language: i }) ?? Pn2(s);
        }
        function Ni(t, e) {
          if (!Tt2(t, e)) return;
          let { attrMap: r } = t;
          if (Object.prototype.hasOwnProperty.call(r, "src")) return;
          let { type: n, lang: s } = r;
          return Oe2(e, { language: s }) ?? Pn2(n);
        }
        function Pi(t, e) {
          if (t.name !== "style") return;
          let { lang: r } = t.attrMap;
          return r ? Oe2(e, { language: r }) : "css";
        }
        function Cr2(t, e) {
          return Fi(t, e) ?? Pi(t, e) ?? Ni(t, e);
        }
        function Xe2(t) {
          return t === "block" || t === "list-item" || t.startsWith("table");
        }
        function Ii(t) {
          return !Xe2(t) && t !== "inline-block";
        }
        function Ri(t) {
          return !Xe2(t) && t !== "inline-block";
        }
        function $i(t) {
          return !Xe2(t);
        }
        function Oi(t) {
          return !Xe2(t);
        }
        function Mi(t) {
          return !Xe2(t) && t !== "inline-block";
        }
        function _e2(t) {
          return Rn(t).startsWith("pre");
        }
        function qi(t, e) {
          let r = t;
          for (; r; ) {
            if (e(r)) return true;
            r = r.parent;
          }
          return false;
        }
        function In(t, e) {
          var n;
          if (Ae2(t, e)) return "block";
          if (((n = t.prev) == null ? void 0 : n.type) === "comment") {
            let s = t.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);
            if (s) return s[1];
          }
          let r = false;
          if (t.type === "element" && t.namespace === "svg") if (qi(t, (s) => s.fullName === "svg:foreignObject")) r = true;
          else return t.name === "svg" ? "inline-block" : "block";
          switch (e.htmlWhitespaceSensitivity) {
            case "strict":
              return "inline";
            case "ignore":
              return "block";
            default:
              return t.type === "element" && (!t.namespace || r || Se2(t)) && En2[t.name] || _n2;
          }
        }
        function Rn(t) {
          return t.type === "element" && (!t.namespace || Se2(t)) && Dn2[t.name] || An2;
        }
        function Hi(t) {
          let e = Number.POSITIVE_INFINITY;
          for (let r of t.split(`
`)) {
            if (r.length === 0) continue;
            let n = N2.getLeadingWhitespaceCount(r);
            if (n === 0) return 0;
            r.length !== n && n < e && (e = n);
          }
          return e === Number.POSITIVE_INFINITY ? 0 : e;
        }
        function Sr2(t, e = Hi(t)) {
          return e === 0 ? t : t.split(`
`).map((r) => r.slice(e)).join(`
`);
        }
        function _r2(t) {
          return w(false, w(false, t, "&apos;", "'"), "&quot;", '"');
        }
        function P2(t) {
          return _r2(t.value);
        }
        var Vi = /* @__PURE__ */ new Set(["template", "style", "script"]);
        function Je2(t, e) {
          return Ae2(t, e) && !Vi.has(t.fullName);
        }
        function Ae2(t, e) {
          return e.parser === "vue" && t.type === "element" && t.parent.type === "root" && t.fullName.toLowerCase() !== "html";
        }
        function Tt2(t, e) {
          return Ae2(t, e) && (Je2(t, e) || t.attrMap.lang && t.attrMap.lang !== "html");
        }
        function $n2(t) {
          let e = t.fullName;
          return e.charAt(0) === "#" || e === "slot-scope" || e === "v-slot" || e.startsWith("v-slot:");
        }
        function On2(t, e) {
          let r = t.parent;
          if (!Ae2(r, e)) return false;
          let n = r.fullName, s = t.fullName;
          return n === "script" && s === "setup" || n === "style" && s === "vars";
        }
        function xt2(t, e = t.value) {
          return t.parent.isWhitespaceSensitive ? t.parent.isIndentationSensitive ? B2(e) : B2(Sr2(fr2(e)), S2) : q2(E, N2.split(e));
        }
        function kt2(t, e) {
          return Ae2(t, e) && t.name === "script";
        }
        var Er2 = /\{\{(.+?)\}\}/su;
        async function Mn(t, e) {
          let r = [];
          for (let [n, s] of t.split(Er2).entries()) if (n % 2 === 0) r.push(B2(s));
          else try {
            r.push(_2(["{{", k([E, await T2(s, e, { parser: "__ng_interpolation", __isInHtmlInterpolation: true })]), E, "}}"]));
          } catch {
            r.push("{{", B2(s), "}}");
          }
          return r;
        }
        function Ar2({ parser: t }) {
          return (e, r, n) => T2(P2(n.node), e, { parser: t }, j2);
        }
        var Ui = Ar2({ parser: "__ng_action" }), Wi = Ar2({ parser: "__ng_binding" }), zi = Ar2({ parser: "__ng_directive" });
        function Gi(t, e) {
          if (e.parser !== "angular") return;
          let { node: r } = t, n = r.fullName;
          if (n.startsWith("(") && n.endsWith(")") || n.startsWith("on-")) return Ui;
          if (n.startsWith("[") && n.endsWith("]") || /^bind(?:on)?-/u.test(n) || /^ng-(?:if|show|hide|class|style)$/u.test(n)) return Wi;
          if (n.startsWith("*")) return zi;
          let s = P2(r);
          if (/^i18n(?:-.+)?$/u.test(n)) return () => Ce2(At2(xt2(r, s.trim())), !s.includes("@@"));
          if (Er2.test(s)) return (i) => Mn(s, i);
        }
        var qn2 = Gi;
        function Yi(t, e) {
          let { node: r } = t, n = P2(r);
          if (r.fullName === "class" && !e.parentParser && !n.includes("{{")) return () => n.trim().split(/\s+/u).join(" ");
        }
        var Hn = Yi;
        function Vn2(t) {
          return t === "	" || t === `
` || t === "\f" || t === "\r" || t === " ";
        }
        var ji = /^[ \t\n\r\u000c]+/, Ki = /^[, \t\n\r\u000c]+/, Qi = /^[^ \t\n\r\u000c]+/, Xi = /[,]+$/, Un2 = /^\d+$/, Ji = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
        function Zi(t) {
          let e = t.length, r, n, s, i, a, o = 0, u;
          function p(C) {
            let A, D = C.exec(t.substring(o));
            if (D) return [A] = D, o += A.length, A;
          }
          let l = [];
          for (; ; ) {
            if (p(Ki), o >= e) {
              if (l.length === 0) throw new Error("Must contain one or more image candidate strings.");
              return l;
            }
            u = o, r = p(Qi), n = [], r.slice(-1) === "," ? (r = r.replace(Xi, ""), d()) : f();
          }
          function f() {
            for (p(ji), s = "", i = "in descriptor"; ; ) {
              if (a = t.charAt(o), i === "in descriptor") if (Vn2(a)) s && (n.push(s), s = "", i = "after descriptor");
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
              else if (i === "after descriptor" && !Vn2(a)) if (a === "") {
                d();
                return;
              } else i = "in descriptor", o -= 1;
              o += 1;
            }
          }
          function d() {
            let C = false, A, D, R2, F, c = {}, g, y2, M2, x2, V2;
            for (F = 0; F < n.length; F++) g = n[F], y2 = g[g.length - 1], M2 = g.substring(0, g.length - 1), x2 = parseInt(M2, 10), V2 = parseFloat(M2), Un2.test(M2) && y2 === "w" ? ((A || D) && (C = true), x2 === 0 ? C = true : A = x2) : Ji.test(M2) && y2 === "x" ? ((A || D || R2) && (C = true), V2 < 0 ? C = true : D = V2) : Un2.test(M2) && y2 === "h" ? ((R2 || D) && (C = true), x2 === 0 ? C = true : R2 = x2) : C = true;
            if (!C) c.source = { value: r, startOffset: u }, A && (c.width = { value: A }), D && (c.density = { value: D }), R2 && (c.height = { value: R2 }), l.push(c);
            else throw new Error(`Invalid srcset descriptor found in "${t}" at "${g}".`);
          }
        }
        var Wn = Zi;
        function ea(t) {
          if (t.node.fullName === "srcset" && (t.parent.fullName === "img" || t.parent.fullName === "source")) return () => ra(P2(t.node));
        }
        var zn2 = { width: "w", height: "h", density: "x" }, ta = Object.keys(zn2);
        function ra(t) {
          let e = Wn(t), r = ta.filter((l) => e.some((f) => Object.prototype.hasOwnProperty.call(f, l)));
          if (r.length > 1) throw new Error("Mixed descriptor in srcset is not supported");
          let [n] = r, s = zn2[n], i = e.map((l) => l.source.value), a = Math.max(...i.map((l) => l.length)), o = e.map((l) => l[n] ? String(l[n].value) : ""), u = o.map((l) => {
            let f = l.indexOf(".");
            return f === -1 ? l.length : f;
          }), p = Math.max(...u);
          return Ce2(q2([",", E], i.map((l, f) => {
            let d = [l], C = o[f];
            if (C) {
              let A = a - l.length + 1, D = p - u[f], R2 = " ".repeat(A + D);
              d.push(ge2(R2, " "), C + s);
            }
            return d;
          })));
        }
        var Gn2 = ea;
        function Yn(t, e) {
          let { node: r } = t, n = P2(t.node).trim();
          if (r.fullName === "style" && !e.parentParser && !n.includes("{{")) return async (s) => Ce2(await s(n, { parser: "css", __isHTMLStyleAttribute: true }));
        }
        var Dr2 = /* @__PURE__ */ new WeakMap();
        function na(t, e) {
          let { root: r } = t;
          return Dr2.has(r) || Dr2.set(r, r.children.some((n) => kt2(n, e) && ["ts", "typescript"].includes(n.attrMap.lang))), Dr2.get(r);
        }
        var Me2 = na;
        function jn(t, e, r) {
          let { node: n } = r, s = P2(n);
          return T2(`type T<${s}> = any`, t, { parser: "babel-ts", __isEmbeddedTypescriptGenericParameters: true }, j2);
        }
        function Kn2(t, e, { parseWithTs: r }) {
          return T2(`function _(${t}) {}`, e, { parser: r ? "babel-ts" : "babel", __isVueBindings: true });
        }
        function Qn2(t) {
          let e = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/u, r = /^[$_a-z][\w$]*(?:\.[$_a-z][\w$]*|\['[^']*'\]|\["[^"]*"\]|\[\d+\]|\[[$_a-z][\w$]*\])*$/iu, n = t.trim();
          return e.test(n) || r.test(n);
        }
        async function Xn2(t, e, r, n) {
          let s = P2(r.node), { left: i, operator: a, right: o } = sa(s), u = Me2(r, n);
          return [_2(await T2(`function _(${i}) {}`, t, { parser: u ? "babel-ts" : "babel", __isVueForBindingLeft: true })), " ", a, " ", await T2(o, t, { parser: u ? "__ts_expression" : "__js_expression" })];
        }
        function sa(t) {
          let e = /(.*?)\s+(in|of)\s+(.*)/su, r = /,([^,\]}]*)(?:,([^,\]}]*))?$/u, n = /^\(|\)$/gu, s = t.match(e);
          if (!s) return;
          let i = {};
          if (i.for = s[3].trim(), !i.for) return;
          let a = w(false, s[1].trim(), n, ""), o = a.match(r);
          o ? (i.alias = a.replace(r, ""), i.iterator1 = o[1].trim(), o[2] && (i.iterator2 = o[2].trim())) : i.alias = a;
          let u = [i.alias, i.iterator1, i.iterator2];
          if (!u.some((p, l) => !p && (l === 0 || u.slice(l + 1).some(Boolean)))) return { left: u.filter(Boolean).join(","), operator: s[2], right: i.for };
        }
        function ia(t, e) {
          if (e.parser !== "vue") return;
          let { node: r } = t, n = r.fullName;
          if (n === "v-for") return Xn2;
          if (n === "generic" && kt2(r.parent, e)) return jn;
          let s = P2(r), i = Me2(t, e);
          if ($n2(r) || On2(r, e)) return (a) => Kn2(s, a, { parseWithTs: i });
          if (n.startsWith("@") || n.startsWith("v-on:")) return (a) => aa(s, a, { parseWithTs: i });
          if (n.startsWith(":") || n.startsWith("v-bind:")) return (a) => oa(s, a, { parseWithTs: i });
          if (n.startsWith("v-")) return (a) => Jn2(s, a, { parseWithTs: i });
        }
        function aa(t, e, { parseWithTs: r }) {
          return Qn2(t) ? Jn2(t, e, { parseWithTs: r }) : T2(t, e, { parser: r ? "__vue_ts_event_binding" : "__vue_event_binding" }, j2);
        }
        function oa(t, e, { parseWithTs: r }) {
          return T2(t, e, { parser: r ? "__vue_ts_expression" : "__vue_expression" }, j2);
        }
        function Jn2(t, e, { parseWithTs: r }) {
          return T2(t, e, { parser: r ? "__ts_expression" : "__js_expression" }, j2);
        }
        var Zn2 = ia;
        function ua(t, e) {
          let { node: r } = t;
          if (r.value) {
            if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(e.originalText.slice(r.valueSpan.start.offset, r.valueSpan.end.offset)) || e.parser === "lwc" && r.value.startsWith("{") && r.value.endsWith("}")) return [r.rawName, "=", r.value];
            for (let n of [Gn2, Yn, Hn, Zn2, qn2]) {
              let s = n(t, e);
              if (s) return la(s);
            }
          }
        }
        function la(t) {
          return async (e, r, n, s) => {
            let i = await t(e, r, n, s);
            if (i) return i = Dt2(i, (a) => typeof a == "string" ? w(false, a, '"', "&quot;") : a), [n.node.rawName, '="', _2(i), '"'];
          };
        }
        var es = ua;
        var ts = new Proxy(() => {
        }, { get: () => ts }), vr2 = ts;
        function ca(t) {
          return Array.isArray(t) && t.length > 0;
        }
        var qe2 = ca;
        function se2(t) {
          return t.sourceSpan.start.offset;
        }
        function ie2(t) {
          return t.sourceSpan.end.offset;
        }
        function Ze2(t, e) {
          return [t.isSelfClosing ? "" : pa(t, e), De2(t, e)];
        }
        function pa(t, e) {
          return t.lastChild && we2(t.lastChild) ? "" : [ha(t, e), Bt2(t, e)];
        }
        function De2(t, e) {
          return (t.next ? K2(t.next) : ye(t.parent)) ? "" : [ve2(t, e), W2(t, e)];
        }
        function ha(t, e) {
          return ye(t) ? ve2(t.lastChild, e) : "";
        }
        function W2(t, e) {
          return we2(t) ? Bt2(t.parent, e) : et2(t) ? Lt2(t.next) : "";
        }
        function Bt2(t, e) {
          if (vr2(!t.isSelfClosing), rs(t, e)) return "";
          switch (t.type) {
            case "ieConditionalComment":
              return "<!";
            case "element":
              if (t.hasHtmComponentClosingTag) return "<//";
            default:
              return `</${t.rawName}`;
          }
        }
        function ve2(t, e) {
          if (rs(t, e)) return "";
          switch (t.type) {
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
              if (t.isSelfClosing) return "/>";
            default:
              return ">";
          }
        }
        function rs(t, e) {
          return !t.isSelfClosing && !t.endSourceSpan && (Ee2(t) || yt(t.parent, e));
        }
        function K2(t) {
          return t.prev && t.prev.type !== "docType" && t.type !== "angularControlFlowBlock" && !$(t.prev) && t.isLeadingSpaceSensitive && !t.hasLeadingSpaces;
        }
        function ye(t) {
          var e;
          return ((e = t.lastChild) == null ? void 0 : e.isTrailingSpaceSensitive) && !t.lastChild.hasTrailingSpaces && !$(bt2(t.lastChild)) && !_e2(t);
        }
        function we2(t) {
          return !t.next && !t.hasTrailingSpaces && t.isTrailingSpaceSensitive && $(bt2(t));
        }
        function et2(t) {
          return t.next && !$(t.next) && $(t) && t.isTrailingSpaceSensitive && !t.hasTrailingSpaces;
        }
        function ma(t) {
          let e = t.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);
          return e ? e[1] ? e[1].split(/\s+/u) : true : false;
        }
        function tt2(t) {
          return !t.prev && t.isLeadingSpaceSensitive && !t.hasLeadingSpaces;
        }
        function fa(t, e, r) {
          var f;
          let { node: n } = t;
          if (!qe2(n.attrs)) return n.isSelfClosing ? " " : "";
          let s = ((f = n.prev) == null ? void 0 : f.type) === "comment" && ma(n.prev.value), i = typeof s == "boolean" ? () => s : Array.isArray(s) ? (d) => s.includes(d.rawName) : () => false, a = t.map(({ node: d }) => i(d) ? B2(e.originalText.slice(se2(d), ie2(d))) : r(), "attrs"), o = n.type === "element" && n.fullName === "script" && n.attrs.length === 1 && n.attrs[0].fullName === "src" && n.children.length === 0, p = e.singleAttributePerLine && n.attrs.length > 1 && !Ae2(n, e) ? S2 : E, l = [k([o ? " " : E, q2(p, a)])];
          return n.firstChild && tt2(n.firstChild) || n.isSelfClosing && ye(n.parent) || o ? l.push(n.isSelfClosing ? " " : "") : l.push(e.bracketSameLine ? n.isSelfClosing ? " " : "" : n.isSelfClosing ? E : v), l;
        }
        function da(t) {
          return t.firstChild && tt2(t.firstChild) ? "" : Ft2(t);
        }
        function rt2(t, e, r) {
          let { node: n } = t;
          return [be2(n, e), fa(t, e, r), n.isSelfClosing ? "" : da(n)];
        }
        function be2(t, e) {
          return t.prev && et2(t.prev) ? "" : [z2(t, e), Lt2(t)];
        }
        function z2(t, e) {
          return tt2(t) ? Ft2(t.parent) : K2(t) ? ve2(t.prev, e) : "";
        }
        function Lt2(t) {
          switch (t.type) {
            case "ieConditionalComment":
            case "ieConditionalStartComment":
              return `<!--[if ${t.condition}`;
            case "ieConditionalEndComment":
              return "<!--<!";
            case "interpolation":
              return "{{";
            case "docType":
              return t.value === "html" ? "<!doctype" : "<!DOCTYPE";
            case "angularIcuExpression":
              return "{";
            case "element":
              if (t.condition) return `<!--[if ${t.condition}]><!--><${t.rawName}`;
            default:
              return `<${t.rawName}`;
          }
        }
        function Ft2(t) {
          switch (vr2(!t.isSelfClosing), t.type) {
            case "ieConditionalComment":
              return "]>";
            case "element":
              if (t.condition) return "><!--<![endif]-->";
            default:
              return ">";
          }
        }
        function ga(t, e) {
          if (!t.endSourceSpan) return "";
          let r = t.startSourceSpan.end.offset;
          t.firstChild && tt2(t.firstChild) && (r -= Ft2(t).length);
          let n = t.endSourceSpan.start.offset;
          return t.lastChild && we2(t.lastChild) ? n += Bt2(t, e).length : ye(t) && (n -= ve2(t.lastChild, e).length), e.originalText.slice(r, n);
        }
        var Nt2 = ga;
        var Ca = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
        function Sa(t, e) {
          let { node: r } = t;
          switch (r.type) {
            case "element":
              if (U2(r) || r.type === "interpolation") return;
              if (!r.isSelfClosing && Tt2(r, e)) {
                let n = Cr2(r, e);
                return n ? async (s, i) => {
                  let a = Nt2(r, e), o = /^\s*$/u.test(a), u = "";
                  return o || (u = await s(fr2(a), { parser: n, __embeddedInHtml: true }), o = u === ""), [z2(r, e), _2(rt2(t, e, i)), o ? "" : S2, u, o ? "" : S2, Ze2(r, e), W2(r, e)];
                } : void 0;
              }
              break;
            case "text":
              if (U2(r.parent)) {
                let n = Cr2(r.parent, e);
                if (n) return async (s) => {
                  let i = n === "markdown" ? Sr2(r.value.replace(/^[^\S\n]*\n/u, "")) : r.value, a = { parser: n, __embeddedInHtml: true };
                  if (e.parser === "html" && n === "babel") {
                    let o = "script", { attrMap: u } = r.parent;
                    u && (u.type === "module" || u.type === "text/babel" && u["data-type"] === "module") && (o = "module"), a.__babelSourceType = o;
                  }
                  return [ne2, z2(r, e), await s(i, a), W2(r, e)];
                };
              } else if (r.parent.type === "interpolation") return async (n) => {
                let s = { __isInHtmlInterpolation: true, __embeddedInHtml: true };
                return e.parser === "angular" ? s.parser = "__ng_interpolation" : e.parser === "vue" ? s.parser = Me2(t, e) ? "__vue_ts_expression" : "__vue_expression" : s.parser = "__js_expression", [k([E, await n(r.value, s)]), r.parent.next && K2(r.parent.next) ? " " : E];
              };
              break;
            case "attribute":
              return es(t, e);
            case "front-matter":
              return (n) => gn2(r, n);
            case "angularControlFlowBlockParameters":
              return Ca.has(t.parent.name) ? Cn2 : void 0;
            case "angularLetDeclarationInitializer":
              return (n) => T2(r.value, n, { parser: "__ng_binding", __isInHtmlAttribute: false });
          }
        }
        var ns = Sa;
        var nt2 = null;
        function st2(t) {
          if (nt2 !== null && typeof nt2.property) {
            let e = nt2;
            return nt2 = st2.prototype = null, e;
          }
          return nt2 = st2.prototype = t ?? /* @__PURE__ */ Object.create(null), new st2();
        }
        var _a = 10;
        for (let t = 0; t <= _a; t++) st2();
        function yr2(t) {
          return st2(t);
        }
        function Ea(t, e = "type") {
          yr2(t);
          function r(n) {
            let s = n[e], i = t[s];
            if (!Array.isArray(i)) throw Object.assign(new Error(`Missing visitor keys for '${s}'.`), { node: n });
            return i;
          }
          return r;
        }
        var ss = Ea;
        var Aa = { "front-matter": [], root: ["children"], element: ["attrs", "children"], ieConditionalComment: ["children"], ieConditionalStartComment: [], ieConditionalEndComment: [], interpolation: ["children"], text: ["children"], docType: [], comment: [], attribute: [], cdata: [], angularControlFlowBlock: ["children", "parameters"], angularControlFlowBlockParameters: ["children"], angularControlFlowBlockParameter: [], angularLetDeclaration: ["init"], angularLetDeclarationInitializer: [], angularIcuExpression: ["cases"], angularIcuCase: ["expression"] }, is = Aa;
        var Da = ss(is), as = Da;
        function os(t) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/u.test(t);
        }
        function us(t) {
          return `<!-- @format -->

` + t;
        }
        var ls = /* @__PURE__ */ new Map([["if", /* @__PURE__ */ new Set(["else if", "else"])], ["else if", /* @__PURE__ */ new Set(["else if", "else"])], ["for", /* @__PURE__ */ new Set(["empty"])], ["defer", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["placeholder", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["error", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["loading", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])]]);
        function cs(t) {
          let e = ie2(t);
          return t.type === "element" && !t.endSourceSpan && qe2(t.children) ? Math.max(e, cs(X2(false, t.children, -1))) : e;
        }
        function it2(t, e, r) {
          let n = t.node;
          if (Ee2(n)) {
            let s = cs(n);
            return [z2(n, e), B2(N2.trimEnd(e.originalText.slice(se2(n) + (n.prev && et2(n.prev) ? Lt2(n).length : 0), s - (n.next && K2(n.next) ? ve2(n, e).length : 0)))), W2(n, e)];
          }
          return r();
        }
        function Pt2(t, e) {
          return $(t) && $(e) ? t.isTrailingSpaceSensitive ? t.hasTrailingSpaces ? wt2(e) ? S2 : E : "" : wt2(e) ? S2 : v : et2(t) && (Ee2(e) || e.firstChild || e.isSelfClosing || e.type === "element" && e.attrs.length > 0) || t.type === "element" && t.isSelfClosing && K2(e) ? "" : !e.isLeadingSpaceSensitive || wt2(e) || K2(e) && t.lastChild && we2(t.lastChild) && t.lastChild.lastChild && we2(t.lastChild.lastChild) ? S2 : e.hasLeadingSpaces ? E : v;
        }
        function He2(t, e, r) {
          let { node: n } = t;
          if (gr2(n)) return [ne2, ...t.map((i) => {
            let a = i.node, o = a.prev ? Pt2(a.prev, a) : "";
            return [o ? [o, Qe2(a.prev) ? S2 : ""] : "", it2(i, e, r)];
          }, "children")];
          let s = n.children.map(() => Symbol(""));
          return t.map((i, a) => {
            let o = i.node;
            if ($(o)) {
              if (o.prev && $(o.prev)) {
                let A = Pt2(o.prev, o);
                if (A) return Qe2(o.prev) ? [S2, S2, it2(i, e, r)] : [A, it2(i, e, r)];
              }
              return it2(i, e, r);
            }
            let u = [], p = [], l = [], f = [], d = o.prev ? Pt2(o.prev, o) : "", C = o.next ? Pt2(o, o.next) : "";
            return d && (Qe2(o.prev) ? u.push(S2, S2) : d === S2 ? u.push(S2) : $(o.prev) ? p.push(d) : p.push(ge2("", v, { groupId: s[a - 1] }))), C && (Qe2(o) ? $(o.next) && f.push(S2, S2) : C === S2 ? $(o.next) && f.push(S2) : l.push(C)), [...u, _2([...p, _2([it2(i, e, r), ...l], { id: s[a] })]), ...f];
          }, "children");
        }
        function ps(t, e, r) {
          let { node: n } = t, s = [];
          va(t) && s.push("} "), s.push("@", n.name), n.parameters && s.push(" (", _2(r("parameters")), ")"), s.push(" {");
          let i = hs(n);
          return n.children.length > 0 ? (n.firstChild.hasLeadingSpaces = true, n.lastChild.hasTrailingSpaces = true, s.push(k([S2, He2(t, e, r)])), i && s.push(S2, "}")) : i && s.push("}"), _2(s, { shouldBreak: true });
        }
        function hs(t) {
          var e, r;
          return !(((e = t.next) == null ? void 0 : e.type) === "angularControlFlowBlock" && ((r = ls.get(t.name)) != null && r.has(t.next.name)));
        }
        function va(t) {
          let { previous: e } = t;
          return (e == null ? void 0 : e.type) === "angularControlFlowBlock" && !Ee2(e) && !hs(e);
        }
        function ms(t, e, r) {
          return [k([v, q2([";", E], t.map(r, "children"))]), v];
        }
        function fs(t, e, r) {
          let { node: n } = t;
          return [be2(n, e), _2([n.switchValue.trim(), ", ", n.clause, n.cases.length > 0 ? [",", k([E, q2(E, t.map(r, "cases"))])] : "", v]), De2(n, e)];
        }
        function ds(t, e, r) {
          let { node: n } = t;
          return [n.value, " {", _2([k([v, t.map(({ node: s }) => s.type === "text" && !N2.trim(s.value) ? "" : r(), "expression")]), v]), "}"];
        }
        function gs(t, e, r) {
          let { node: n } = t;
          if (yt(n, e)) return [z2(n, e), _2(rt2(t, e, r)), B2(Nt2(n, e)), ...Ze2(n, e), W2(n, e)];
          let s = n.children.length === 1 && (n.firstChild.type === "interpolation" || n.firstChild.type === "angularIcuExpression") && n.firstChild.isLeadingSpaceSensitive && !n.firstChild.hasLeadingSpaces && n.lastChild.isTrailingSpaceSensitive && !n.lastChild.hasTrailingSpaces, i = Symbol("element-attr-group-id"), a = (l) => _2([_2(rt2(t, e, r), { id: i }), l, Ze2(n, e)]), o = (l) => s ? on(l, { groupId: i }) : (U2(n) || Je2(n, e)) && n.parent.type === "root" && e.parser === "vue" && !e.vueIndentScriptAndStyle ? l : k(l), u = () => s ? ge2(v, "", { groupId: i }) : n.firstChild.hasLeadingSpaces && n.firstChild.isLeadingSpaceSensitive ? E : n.firstChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive ? sn(v) : v, p = () => (n.next ? K2(n.next) : ye(n.parent)) ? n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? " " : "" : s ? ge2(v, "", { groupId: i }) : n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? E : (n.lastChild.type === "comment" || n.lastChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${e.tabWidth * (t.ancestors.length - 1)}}$`, "u").test(n.lastChild.value) ? "" : v;
          return n.children.length === 0 ? a(n.hasDanglingSpaces && n.isDanglingSpaceSensitive ? E : "") : a([kn2(n) ? ne2 : "", o([u(), He2(t, e, r)]), p()]);
        }
        function at2(t) {
          return t >= 9 && t <= 32 || t == 160;
        }
        function It2(t) {
          return 48 <= t && t <= 57;
        }
        function ot2(t) {
          return t >= 97 && t <= 122 || t >= 65 && t <= 90;
        }
        function Cs(t) {
          return t >= 97 && t <= 102 || t >= 65 && t <= 70 || It2(t);
        }
        function Rt2(t) {
          return t === 10 || t === 13;
        }
        function wr2(t) {
          return 48 <= t && t <= 55;
        }
        function $t2(t) {
          return t === 39 || t === 34 || t === 96;
        }
        var ya = /-+([a-z0-9])/g;
        function _s(t) {
          return t.replace(ya, (...e) => e[1].toUpperCase());
        }
        var ae2 = class t {
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
        }, Te2 = class {
          constructor(e, r) {
            this.content = e, this.url = r;
          }
        }, h2 = class {
          constructor(e, r, n = e, s = null) {
            this.start = e, this.end = r, this.fullStart = n, this.details = s;
          }
          toString() {
            return this.start.file.content.substring(this.start.offset, this.end.offset);
          }
        }, Ot2;
        (function(t) {
          t[t.WARNING = 0] = "WARNING", t[t.ERROR = 1] = "ERROR";
        })(Ot2 || (Ot2 = {}));
        var Ue2 = class {
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
        var wa = [Ta, xa, Ba, Fa, Na, Ra, Pa, Ia, $a, La];
        function ba(t, e) {
          for (let r of wa) r(t, e);
          return t;
        }
        function Ta(t) {
          t.walk((e) => {
            if (e.type === "element" && e.tagDefinition.ignoreFirstLf && e.children.length > 0 && e.children[0].type === "text" && e.children[0].value[0] === `
`) {
              let r = e.children[0];
              r.value.length === 1 ? e.removeChild(r) : r.value = r.value.slice(1);
            }
          });
        }
        function xa(t) {
          let e = (r) => {
            var n, s;
            return r.type === "element" && ((n = r.prev) == null ? void 0 : n.type) === "ieConditionalStartComment" && r.prev.sourceSpan.end.offset === r.startSourceSpan.start.offset && ((s = r.firstChild) == null ? void 0 : s.type) === "ieConditionalEndComment" && r.firstChild.sourceSpan.start.offset === r.startSourceSpan.end.offset;
          };
          t.walk((r) => {
            if (r.children) for (let n = 0; n < r.children.length; n++) {
              let s = r.children[n];
              if (!e(s)) continue;
              let i = s.prev, a = s.firstChild;
              r.removeChild(i), n--;
              let o = new h2(i.sourceSpan.start, a.sourceSpan.end), u = new h2(o.start, s.sourceSpan.end);
              s.condition = i.condition, s.sourceSpan = u, s.startSourceSpan = o, s.removeChild(a);
            }
          });
        }
        function ka(t, e, r) {
          t.walk((n) => {
            if (n.children) for (let s = 0; s < n.children.length; s++) {
              let i = n.children[s];
              if (i.type !== "text" && !e(i)) continue;
              i.type !== "text" && (i.type = "text", i.value = r(i));
              let a = i.prev;
              !a || a.type !== "text" || (a.value += i.value, a.sourceSpan = new h2(a.sourceSpan.start, i.sourceSpan.end), n.removeChild(i), s--);
            }
          });
        }
        function Ba(t) {
          return ka(t, (e) => e.type === "cdata", (e) => `<![CDATA[${e.value}]]>`);
        }
        function La(t) {
          let e = (r) => {
            var n, s;
            return r.type === "element" && r.attrs.length === 0 && r.children.length === 1 && r.firstChild.type === "text" && !N2.hasWhitespaceCharacter(r.children[0].value) && !r.firstChild.hasLeadingSpaces && !r.firstChild.hasTrailingSpaces && r.isLeadingSpaceSensitive && !r.hasLeadingSpaces && r.isTrailingSpaceSensitive && !r.hasTrailingSpaces && ((n = r.prev) == null ? void 0 : n.type) === "text" && ((s = r.next) == null ? void 0 : s.type) === "text";
          };
          t.walk((r) => {
            if (r.children) for (let n = 0; n < r.children.length; n++) {
              let s = r.children[n];
              if (!e(s)) continue;
              let i = s.prev, a = s.next;
              i.value += `<${s.rawName}>` + s.firstChild.value + `</${s.rawName}>` + a.value, i.sourceSpan = new h2(i.sourceSpan.start, a.sourceSpan.end), i.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive, i.hasTrailingSpaces = a.hasTrailingSpaces, r.removeChild(s), n--, r.removeChild(a);
            }
          });
        }
        function Fa(t, e) {
          if (e.parser === "html") return;
          let r = /\{\{(.+?)\}\}/su;
          t.walk((n) => {
            if (yn2(n)) for (let s of n.children) {
              if (s.type !== "text") continue;
              let i = s.sourceSpan.start, a = null, o = s.value.split(r);
              for (let u = 0; u < o.length; u++, i = a) {
                let p = o[u];
                if (u % 2 === 0) {
                  a = i.moveBy(p.length), p.length > 0 && n.insertChildBefore(s, { type: "text", value: p, sourceSpan: new h2(i, a) });
                  continue;
                }
                a = i.moveBy(p.length + 4), n.insertChildBefore(s, { type: "interpolation", sourceSpan: new h2(i, a), children: p.length === 0 ? [] : [{ type: "text", value: p, sourceSpan: new h2(i.moveBy(2), a.moveBy(-2)) }] });
              }
              n.removeChild(s);
            }
          });
        }
        function Na(t) {
          t.walk((e) => {
            if (!e.children) return;
            if (e.children.length === 0 || e.children.length === 1 && e.children[0].type === "text" && N2.trim(e.children[0].value).length === 0) {
              e.hasDanglingSpaces = e.children.length > 0, e.children = [];
              return;
            }
            let r = wn2(e), n = dr2(e);
            if (!r) for (let s = 0; s < e.children.length; s++) {
              let i = e.children[s];
              if (i.type !== "text") continue;
              let { leadingWhitespace: a, text: o, trailingWhitespace: u } = vn2(i.value), p = i.prev, l = i.next;
              o ? (i.value = o, i.sourceSpan = new h2(i.sourceSpan.start.moveBy(a.length), i.sourceSpan.end.moveBy(-u.length)), a && (p && (p.hasTrailingSpaces = true), i.hasLeadingSpaces = true), u && (i.hasTrailingSpaces = true, l && (l.hasLeadingSpaces = true))) : (e.removeChild(i), s--, (a || u) && (p && (p.hasTrailingSpaces = true), l && (l.hasLeadingSpaces = true)));
            }
            e.isWhitespaceSensitive = r, e.isIndentationSensitive = n;
          });
        }
        function Pa(t) {
          t.walk((e) => {
            e.isSelfClosing = !e.children || e.type === "element" && (e.tagDefinition.isVoid || e.endSourceSpan && e.startSourceSpan.start === e.endSourceSpan.start && e.startSourceSpan.end === e.endSourceSpan.end);
          });
        }
        function Ia(t, e) {
          t.walk((r) => {
            r.type === "element" && (r.hasHtmComponentClosingTag = r.endSourceSpan && /^<\s*\/\s*\/\s*>$/u.test(e.originalText.slice(r.endSourceSpan.start.offset, r.endSourceSpan.end.offset)));
          });
        }
        function Ra(t, e) {
          t.walk((r) => {
            r.cssDisplay = In(r, e);
          });
        }
        function $a(t, e) {
          t.walk((r) => {
            let { children: n } = r;
            if (n) {
              if (n.length === 0) {
                r.isDanglingSpaceSensitive = xn2(r);
                return;
              }
              for (let s of n) s.isLeadingSpaceSensitive = bn2(s, e), s.isTrailingSpaceSensitive = Tn2(s, e);
              for (let s = 0; s < n.length; s++) {
                let i = n[s];
                i.isLeadingSpaceSensitive = (s === 0 || i.prev.isTrailingSpaceSensitive) && i.isLeadingSpaceSensitive, i.isTrailingSpaceSensitive = (s === n.length - 1 || i.next.isLeadingSpaceSensitive) && i.isTrailingSpaceSensitive;
              }
            }
          });
        }
        var Es = ba;
        function Oa(t, e, r) {
          let { node: n } = t;
          switch (n.type) {
            case "front-matter":
              return B2(n.raw);
            case "root":
              return e.__onHtmlRoot && e.__onHtmlRoot(n), [_2(He2(t, e, r)), S2];
            case "element":
            case "ieConditionalComment":
              return gs(t, e, r);
            case "angularControlFlowBlock":
              return ps(t, e, r);
            case "angularControlFlowBlockParameters":
              return ms(t, e, r);
            case "angularControlFlowBlockParameter":
              return N2.trim(n.expression);
            case "angularLetDeclaration":
              return _2(["@let ", _2([n.id, " =", _2(k([E, r("init")]))]), ";"]);
            case "angularLetDeclarationInitializer":
              return n.value;
            case "angularIcuExpression":
              return fs(t, e, r);
            case "angularIcuCase":
              return ds(t, e, r);
            case "ieConditionalStartComment":
            case "ieConditionalEndComment":
              return [be2(n), De2(n)];
            case "interpolation":
              return [be2(n, e), ...t.map(r, "children"), De2(n, e)];
            case "text": {
              if (n.parent.type === "interpolation") {
                let i = /\n[^\S\n]*$/u, a = i.test(n.value), o = a ? n.value.replace(i, "") : n.value;
                return [B2(o), a ? S2 : ""];
              }
              let s = ln2([z2(n, e), ...xt2(n), W2(n, e)]);
              return Array.isArray(s) ? At2(s) : s;
            }
            case "docType":
              return [_2([be2(n, e), " ", w(false, n.value.replace(/^html\b/iu, "html"), /\s+/gu, " ")]), De2(n, e)];
            case "comment":
              return [z2(n, e), B2(e.originalText.slice(se2(n), ie2(n))), W2(n, e)];
            case "attribute": {
              if (n.value === null) return n.rawName;
              let s = _r2(n.value), i = pn2(s, '"');
              return [n.rawName, "=", i, B2(i === '"' ? w(false, s, '"', "&quot;") : w(false, s, "'", "&apos;")), i];
            }
            case "cdata":
            default:
              throw new mn2(n, "HTML");
          }
        }
        var Ma = { preprocess: Es, print: Oa, insertPragma: us, massageAstNode: dn2, embed: ns, getVisitorKeys: as }, As = Ma;
        var Ds = [{ linguistLanguageId: 146, name: "Angular", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".component.html"], parsers: ["angular"], vscodeLanguageIds: ["html"], filenames: [] }, { linguistLanguageId: 146, name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml", ".mjml"], parsers: ["html"], vscodeLanguageIds: ["html"] }, { linguistLanguageId: 146, name: "Lightning Web Components", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [], parsers: ["lwc"], vscodeLanguageIds: ["html"], filenames: [] }, { linguistLanguageId: 391, name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", parsers: ["vue"], vscodeLanguageIds: ["vue"] }];
        var br2 = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { category: "Common", type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap prose.", choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { category: "Common", type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
        var vs = "HTML", qa = { bracketSameLine: br2.bracketSameLine, htmlWhitespaceSensitivity: { category: vs, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: br2.singleAttributePerLine, vueIndentScriptAndStyle: { category: vs, type: "boolean", default: false, description: "Indent script and style tags in Vue files." } }, ys = qa;
        var Yr2 = {};
        Jr2(Yr2, { angular: () => Oo, html: () => $o2, lwc: () => qo2, vue: () => Mo2 });
        var yp = new RegExp(`(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`, "g");
        var ws;
        (function(t) {
          t[t.Emulated = 0] = "Emulated", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom";
        })(ws || (ws = {}));
        var bs;
        (function(t) {
          t[t.OnPush = 0] = "OnPush", t[t.Default = 1] = "Default";
        })(bs || (bs = {}));
        var Ts;
        (function(t) {
          t[t.None = 0] = "None", t[t.SignalBased = 1] = "SignalBased", t[t.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform";
        })(Ts || (Ts = {}));
        var Tr2 = { name: "custom-elements" }, xr2 = { name: "no-errors-schema" };
        var J2;
        (function(t) {
          t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL";
        })(J2 || (J2 = {}));
        var xs;
        (function(t) {
          t[t.Error = 0] = "Error", t[t.Warning = 1] = "Warning", t[t.Ignore = 2] = "Ignore";
        })(xs || (xs = {}));
        var I2;
        (function(t) {
          t[t.RAW_TEXT = 0] = "RAW_TEXT", t[t.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", t[t.PARSABLE_DATA = 2] = "PARSABLE_DATA";
        })(I2 || (I2 = {}));
        function ut2(t, e = true) {
          if (t[0] != ":") return [null, t];
          let r = t.indexOf(":", 1);
          if (r === -1) {
            if (e) throw new Error(`Unsupported format "${t}" expecting ":namespace:name"`);
            return [null, t];
          }
          return [t.slice(1, r), t.slice(r + 1)];
        }
        function kr2(t) {
          return ut2(t)[1] === "ng-container";
        }
        function Br2(t) {
          return ut2(t)[1] === "ng-content";
        }
        function We2(t) {
          return t === null ? null : ut2(t)[0];
        }
        function ze2(t, e) {
          return t ? `:${t}:${e}` : e;
        }
        var qt2;
        function Lr2() {
          return qt2 || (qt2 = {}, Mt2(J2.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), Mt2(J2.STYLE, ["*|style"]), Mt2(J2.URL, ["*|formAction", "area|href", "area|ping", "audio|src", "a|href", "a|ping", "blockquote|cite", "body|background", "del|cite", "form|action", "img|src", "input|src", "ins|cite", "q|cite", "source|src", "track|src", "video|poster", "video|src"]), Mt2(J2.RESOURCE_URL, ["applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"])), qt2;
        }
        function Mt2(t, e) {
          for (let r of e) qt2[r.toLowerCase()] = t;
        }
        var Ht2 = class {
        };
        var Ha = "boolean", Va = "number", Ua = "string", Wa = "object", za = ["[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored", "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume", ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":svg:graphics^:svg:|", ":svg:animation^:svg:|*begin,*end,*repeat", ":svg:geometry^:svg:|", ":svg:componentTransferFunction^:svg:|", ":svg:gradient^:svg:|", ":svg:textContent^:svg:graphics|", ":svg:textPositioning^:svg:textContent|", "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username", "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username", "audio^media|", "br^[HTMLElement]|clear", "base^[HTMLElement]|href,target", "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink", "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value", "canvas^[HTMLElement]|#height,#width", "content^[HTMLElement]|select", "dl^[HTMLElement]|!compact", "data^[HTMLElement]|value", "datalist^[HTMLElement]|", "details^[HTMLElement]|!open", "dialog^[HTMLElement]|!open,returnValue", "dir^[HTMLElement]|!compact", "div^[HTMLElement]|align", "embed^[HTMLElement]|align,height,name,src,type,width", "fieldset^[HTMLElement]|!disabled,name", "font^[HTMLElement]|color,face,size", "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target", "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src", "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows", "hr^[HTMLElement]|align,color,!noShade,size,width", "head^[HTMLElement]|", "h1,h2,h3,h4,h5,h6^[HTMLElement]|align", "html^[HTMLElement]|version", "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width", "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width", "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width", "li^[HTMLElement]|type,#value", "label^[HTMLElement]|htmlFor", "legend^[HTMLElement]|align", "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type", "map^[HTMLElement]|name", "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width", "menu^[HTMLElement]|!compact", "meta^[HTMLElement]|content,httpEquiv,media,name,scheme", "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value", "ins,del^[HTMLElement]|cite,dateTime", "ol^[HTMLElement]|!compact,!reversed,#start,type", "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width", "optgroup^[HTMLElement]|!disabled,label", "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value", "output^[HTMLElement]|defaultValue,%htmlFor,name,value", "p^[HTMLElement]|align", "param^[HTMLElement]|name,type,value,valueType", "picture^[HTMLElement]|", "pre^[HTMLElement]|#width", "progress^[HTMLElement]|#max,#value", "q,blockquote,cite^[HTMLElement]|", "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type", "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value", "slot^[HTMLElement]|name", "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width", "span^[HTMLElement]|", "style^[HTMLElement]|!disabled,media,type", "caption^[HTMLElement]|align", "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width", "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width", "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width", "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign", "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign", "template^[HTMLElement]|", "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap", "time^[HTMLElement]|dateTime", "title^[HTMLElement]|text", "track^[HTMLElement]|!default,kind,label,src,srclang", "ul^[HTMLElement]|!compact,type", "unknown^[HTMLElement]|", "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width", ":svg:a^:svg:graphics|", ":svg:animate^:svg:animation|", ":svg:animateMotion^:svg:animation|", ":svg:animateTransform^:svg:animation|", ":svg:circle^:svg:geometry|", ":svg:clipPath^:svg:graphics|", ":svg:defs^:svg:graphics|", ":svg:desc^:svg:|", ":svg:discard^:svg:|", ":svg:ellipse^:svg:geometry|", ":svg:feBlend^:svg:|", ":svg:feColorMatrix^:svg:|", ":svg:feComponentTransfer^:svg:|", ":svg:feComposite^:svg:|", ":svg:feConvolveMatrix^:svg:|", ":svg:feDiffuseLighting^:svg:|", ":svg:feDisplacementMap^:svg:|", ":svg:feDistantLight^:svg:|", ":svg:feDropShadow^:svg:|", ":svg:feFlood^:svg:|", ":svg:feFuncA^:svg:componentTransferFunction|", ":svg:feFuncB^:svg:componentTransferFunction|", ":svg:feFuncG^:svg:componentTransferFunction|", ":svg:feFuncR^:svg:componentTransferFunction|", ":svg:feGaussianBlur^:svg:|", ":svg:feImage^:svg:|", ":svg:feMerge^:svg:|", ":svg:feMergeNode^:svg:|", ":svg:feMorphology^:svg:|", ":svg:feOffset^:svg:|", ":svg:fePointLight^:svg:|", ":svg:feSpecularLighting^:svg:|", ":svg:feSpotLight^:svg:|", ":svg:feTile^:svg:|", ":svg:feTurbulence^:svg:|", ":svg:filter^:svg:|", ":svg:foreignObject^:svg:graphics|", ":svg:g^:svg:graphics|", ":svg:image^:svg:graphics|decoding", ":svg:line^:svg:geometry|", ":svg:linearGradient^:svg:gradient|", ":svg:mpath^:svg:|", ":svg:marker^:svg:|", ":svg:mask^:svg:|", ":svg:metadata^:svg:|", ":svg:path^:svg:geometry|", ":svg:pattern^:svg:|", ":svg:polygon^:svg:geometry|", ":svg:polyline^:svg:geometry|", ":svg:radialGradient^:svg:gradient|", ":svg:rect^:svg:geometry|", ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan", ":svg:script^:svg:|type", ":svg:set^:svg:animation|", ":svg:stop^:svg:|", ":svg:style^:svg:|!disabled,media,title,type", ":svg:switch^:svg:graphics|", ":svg:symbol^:svg:|", ":svg:tspan^:svg:textPositioning|", ":svg:text^:svg:textPositioning|", ":svg:textPath^:svg:textContent|", ":svg:title^:svg:|", ":svg:use^:svg:graphics|", ":svg:view^:svg:|#zoomAndPan", "data^[HTMLElement]|value", "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name", "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default", "summary^[HTMLElement]|", "time^[HTMLElement]|dateTime", ":svg:cursor^:svg:|", ":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":math:math^:math:|", ":math:maction^:math:|", ":math:menclose^:math:|", ":math:merror^:math:|", ":math:mfenced^:math:|", ":math:mfrac^:math:|", ":math:mi^:math:|", ":math:mmultiscripts^:math:|", ":math:mn^:math:|", ":math:mo^:math:|", ":math:mover^:math:|", ":math:mpadded^:math:|", ":math:mphantom^:math:|", ":math:mroot^:math:|", ":math:mrow^:math:|", ":math:ms^:math:|", ":math:mspace^:math:|", ":math:msqrt^:math:|", ":math:mstyle^:math:|", ":math:msub^:math:|", ":math:msubsup^:math:|", ":math:msup^:math:|", ":math:mtable^:math:|", ":math:mtd^:math:|", ":math:mtext^:math:|", ":math:mtr^:math:|", ":math:munder^:math:|", ":math:munderover^:math:|", ":math:semantics^:math:|"], ks = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" })), Ga = Array.from(ks).reduce((t, [e, r]) => (t.set(e, r), t), /* @__PURE__ */ new Map()), Vt2 = class extends Ht2 {
          constructor() {
            super(), this._schema = /* @__PURE__ */ new Map(), this._eventSchema = /* @__PURE__ */ new Map(), za.forEach((e) => {
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
                    r.set(l.substring(1), Ha);
                    break;
                  case "#":
                    r.set(l.substring(1), Va);
                    break;
                  case "%":
                    r.set(l.substring(1), Wa);
                    break;
                  default:
                    r.set(l, Ua);
                }
              });
            });
          }
          hasProperty(e, r, n) {
            if (n.some((i) => i.name === xr2.name)) return true;
            if (e.indexOf("-") > -1) {
              if (kr2(e) || Br2(e)) return false;
              if (n.some((i) => i.name === Tr2.name)) return true;
            }
            return (this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).has(r);
          }
          hasElement(e, r) {
            return r.some((n) => n.name === xr2.name) || e.indexOf("-") > -1 && (kr2(e) || Br2(e) || r.some((n) => n.name === Tr2.name)) ? true : this._schema.has(e.toLowerCase());
          }
          securityContext(e, r, n) {
            n && (r = this.getMappedPropName(r)), e = e.toLowerCase(), r = r.toLowerCase();
            let s = Lr2()[e + "|" + r];
            return s || (s = Lr2()["*|" + r], s || J2.NONE);
          }
          getMappedPropName(e) {
            return ks.get(e) ?? e;
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
            return Array.from(r.keys()).map((n) => Ga.get(n) ?? n);
          }
          allKnownEventsOfElement(e) {
            return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
          }
          normalizeAnimationStyleProperty(e) {
            return _s(e);
          }
          normalizeAnimationStyleValue(e, r, n) {
            let s = "", i = n.toString().trim(), a = null;
            if (Ya(e) && n !== 0 && n !== "0") if (typeof n == "number") s = "px";
            else {
              let o = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
              o && o[1].length == 0 && (a = `Please provide a CSS unit value for ${r}:${n}`);
            }
            return { error: a, value: i + s };
          }
        };
        function Ya(t) {
          switch (t) {
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
          constructor({ closedByChildren: e, implicitNamespacePrefix: r, contentType: n = I2.PARSABLE_DATA, closedByParent: s = false, isVoid: i = false, ignoreFirstLf: a = false, preventNamespaceInheritance: o = false, canSelfClose: u = false } = {}) {
            this.closedByChildren = {}, this.closedByParent = false, e && e.length > 0 && e.forEach((p) => this.closedByChildren[p] = true), this.isVoid = i, this.closedByParent = s || i, this.implicitNamespacePrefix = r || null, this.contentType = n, this.ignoreFirstLf = a, this.preventNamespaceInheritance = o, this.canSelfClose = u ?? i;
          }
          isClosedByChild(e) {
            return this.isVoid || e.toLowerCase() in this.closedByChildren;
          }
          getContentType(e) {
            return typeof this.contentType == "object" ? (e === void 0 ? void 0 : this.contentType[e]) ?? this.contentType.default : this.contentType;
          }
        }, Bs, lt2;
        function Ge2(t) {
          return lt2 || (Bs = new m({ canSelfClose: true }), lt2 = Object.assign(/* @__PURE__ */ Object.create(null), { base: new m({ isVoid: true }), meta: new m({ isVoid: true }), area: new m({ isVoid: true }), embed: new m({ isVoid: true }), link: new m({ isVoid: true }), img: new m({ isVoid: true }), input: new m({ isVoid: true }), param: new m({ isVoid: true }), hr: new m({ isVoid: true }), br: new m({ isVoid: true }), source: new m({ isVoid: true }), track: new m({ isVoid: true }), wbr: new m({ isVoid: true }), p: new m({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new m({ closedByChildren: ["tbody", "tfoot"] }), tbody: new m({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new m({ closedByChildren: ["tbody"], closedByParent: true }), tr: new m({ closedByChildren: ["tr"], closedByParent: true }), td: new m({ closedByChildren: ["td", "th"], closedByParent: true }), th: new m({ closedByChildren: ["td", "th"], closedByParent: true }), col: new m({ isVoid: true }), svg: new m({ implicitNamespacePrefix: "svg" }), foreignObject: new m({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: true }), math: new m({ implicitNamespacePrefix: "math" }), li: new m({ closedByChildren: ["li"], closedByParent: true }), dt: new m({ closedByChildren: ["dt", "dd"] }), dd: new m({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new m({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new m({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new m({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new m({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new m({ closedByChildren: ["optgroup"], closedByParent: true }), option: new m({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new m({ ignoreFirstLf: true }), listing: new m({ ignoreFirstLf: true }), style: new m({ contentType: I2.RAW_TEXT }), script: new m({ contentType: I2.RAW_TEXT }), title: new m({ contentType: { default: I2.ESCAPABLE_RAW_TEXT, svg: I2.PARSABLE_DATA } }), textarea: new m({ contentType: I2.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }) }), new Vt2().allKnownElementNames().forEach((e) => {
            !lt2[e] && We2(e) === null && (lt2[e] = new m({ canSelfClose: false }));
          })), lt2[t] ?? Bs;
        }
        var oe2 = class {
          constructor(e, r) {
            this.sourceSpan = e, this.i18n = r;
          }
        }, Ut2 = class extends oe2 {
          constructor(e, r, n, s) {
            super(r, s), this.value = e, this.tokens = n, this.type = "text";
          }
          visit(e, r) {
            return e.visitText(this, r);
          }
        }, Wt2 = class extends oe2 {
          constructor(e, r, n, s) {
            super(r, s), this.value = e, this.tokens = n, this.type = "cdata";
          }
          visit(e, r) {
            return e.visitCdata(this, r);
          }
        }, zt2 = class extends oe2 {
          constructor(e, r, n, s, i, a) {
            super(s, a), this.switchValue = e, this.type = r, this.cases = n, this.switchValueSourceSpan = i;
          }
          visit(e, r) {
            return e.visitExpansion(this, r);
          }
        }, Gt2 = class {
          constructor(e, r, n, s, i) {
            this.value = e, this.expression = r, this.sourceSpan = n, this.valueSourceSpan = s, this.expSourceSpan = i, this.type = "expansionCase";
          }
          visit(e, r) {
            return e.visitExpansionCase(this, r);
          }
        }, Yt2 = class extends oe2 {
          constructor(e, r, n, s, i, a, o) {
            super(n, o), this.name = e, this.value = r, this.keySpan = s, this.valueSpan = i, this.valueTokens = a, this.type = "attribute";
          }
          visit(e, r) {
            return e.visitAttribute(this, r);
          }
          get nameSpan() {
            return this.keySpan;
          }
        }, G2 = class extends oe2 {
          constructor(e, r, n, s, i, a = null, o = null, u) {
            super(s, u), this.name = e, this.attrs = r, this.children = n, this.startSourceSpan = i, this.endSourceSpan = a, this.nameSpan = o, this.type = "element";
          }
          visit(e, r) {
            return e.visitElement(this, r);
          }
        }, jt2 = class {
          constructor(e, r) {
            this.value = e, this.sourceSpan = r, this.type = "comment";
          }
          visit(e, r) {
            return e.visitComment(this, r);
          }
        }, Kt2 = class {
          constructor(e, r) {
            this.value = e, this.sourceSpan = r, this.type = "docType";
          }
          visit(e, r) {
            return e.visitDocType(this, r);
          }
        }, Z2 = class extends oe2 {
          constructor(e, r, n, s, i, a, o = null, u) {
            super(s, u), this.name = e, this.parameters = r, this.children = n, this.nameSpan = i, this.startSourceSpan = a, this.endSourceSpan = o, this.type = "block";
          }
          visit(e, r) {
            return e.visitBlock(this, r);
          }
        }, ct2 = class {
          constructor(e, r) {
            this.expression = e, this.sourceSpan = r, this.type = "blockParameter", this.startSourceSpan = null, this.endSourceSpan = null;
          }
          visit(e, r) {
            return e.visitBlockParameter(this, r);
          }
        }, pt2 = class {
          constructor(e, r, n, s, i) {
            this.name = e, this.value = r, this.sourceSpan = n, this.nameSpan = s, this.valueSpan = i, this.type = "letDeclaration", this.startSourceSpan = null, this.endSourceSpan = null;
          }
          visit(e, r) {
            return e.visitLetDeclaration(this, r);
          }
        };
        function Qt2(t, e, r = null) {
          let n = [], s = t.visit ? (i) => t.visit(i, r) || i.visit(t, r) : (i) => i.visit(t, r);
          return e.forEach((i) => {
            let a = s(i);
            a && n.push(a);
          }), n;
        }
        var ht2 = class {
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
        var Ye2 = { AElig: "\xC6", AMP: "&", amp: "&", Aacute: "\xC1", Abreve: "\u0102", Acirc: "\xC2", Acy: "\u0410", Afr: "\u{1D504}", Agrave: "\xC0", Alpha: "\u0391", Amacr: "\u0100", And: "\u2A53", Aogon: "\u0104", Aopf: "\u{1D538}", ApplyFunction: "\u2061", af: "\u2061", Aring: "\xC5", angst: "\xC5", Ascr: "\u{1D49C}", Assign: "\u2254", colone: "\u2254", coloneq: "\u2254", Atilde: "\xC3", Auml: "\xC4", Backslash: "\u2216", setminus: "\u2216", setmn: "\u2216", smallsetminus: "\u2216", ssetmn: "\u2216", Barv: "\u2AE7", Barwed: "\u2306", doublebarwedge: "\u2306", Bcy: "\u0411", Because: "\u2235", becaus: "\u2235", because: "\u2235", Bernoullis: "\u212C", Bscr: "\u212C", bernou: "\u212C", Beta: "\u0392", Bfr: "\u{1D505}", Bopf: "\u{1D539}", Breve: "\u02D8", breve: "\u02D8", Bumpeq: "\u224E", HumpDownHump: "\u224E", bump: "\u224E", CHcy: "\u0427", COPY: "\xA9", copy: "\xA9", Cacute: "\u0106", Cap: "\u22D2", CapitalDifferentialD: "\u2145", DD: "\u2145", Cayleys: "\u212D", Cfr: "\u212D", Ccaron: "\u010C", Ccedil: "\xC7", Ccirc: "\u0108", Cconint: "\u2230", Cdot: "\u010A", Cedilla: "\xB8", cedil: "\xB8", CenterDot: "\xB7", centerdot: "\xB7", middot: "\xB7", Chi: "\u03A7", CircleDot: "\u2299", odot: "\u2299", CircleMinus: "\u2296", ominus: "\u2296", CirclePlus: "\u2295", oplus: "\u2295", CircleTimes: "\u2297", otimes: "\u2297", ClockwiseContourIntegral: "\u2232", cwconint: "\u2232", CloseCurlyDoubleQuote: "\u201D", rdquo: "\u201D", rdquor: "\u201D", CloseCurlyQuote: "\u2019", rsquo: "\u2019", rsquor: "\u2019", Colon: "\u2237", Proportion: "\u2237", Colone: "\u2A74", Congruent: "\u2261", equiv: "\u2261", Conint: "\u222F", DoubleContourIntegral: "\u222F", ContourIntegral: "\u222E", conint: "\u222E", oint: "\u222E", Copf: "\u2102", complexes: "\u2102", Coproduct: "\u2210", coprod: "\u2210", CounterClockwiseContourIntegral: "\u2233", awconint: "\u2233", Cross: "\u2A2F", Cscr: "\u{1D49E}", Cup: "\u22D3", CupCap: "\u224D", asympeq: "\u224D", DDotrahd: "\u2911", DJcy: "\u0402", DScy: "\u0405", DZcy: "\u040F", Dagger: "\u2021", ddagger: "\u2021", Darr: "\u21A1", Dashv: "\u2AE4", DoubleLeftTee: "\u2AE4", Dcaron: "\u010E", Dcy: "\u0414", Del: "\u2207", nabla: "\u2207", Delta: "\u0394", Dfr: "\u{1D507}", DiacriticalAcute: "\xB4", acute: "\xB4", DiacriticalDot: "\u02D9", dot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", dblac: "\u02DD", DiacriticalGrave: "`", grave: "`", DiacriticalTilde: "\u02DC", tilde: "\u02DC", Diamond: "\u22C4", diam: "\u22C4", diamond: "\u22C4", DifferentialD: "\u2146", dd: "\u2146", Dopf: "\u{1D53B}", Dot: "\xA8", DoubleDot: "\xA8", die: "\xA8", uml: "\xA8", DotDot: "\u20DC", DotEqual: "\u2250", doteq: "\u2250", esdot: "\u2250", DoubleDownArrow: "\u21D3", Downarrow: "\u21D3", dArr: "\u21D3", DoubleLeftArrow: "\u21D0", Leftarrow: "\u21D0", lArr: "\u21D0", DoubleLeftRightArrow: "\u21D4", Leftrightarrow: "\u21D4", hArr: "\u21D4", iff: "\u21D4", DoubleLongLeftArrow: "\u27F8", Longleftarrow: "\u27F8", xlArr: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", Longleftrightarrow: "\u27FA", xhArr: "\u27FA", DoubleLongRightArrow: "\u27F9", Longrightarrow: "\u27F9", xrArr: "\u27F9", DoubleRightArrow: "\u21D2", Implies: "\u21D2", Rightarrow: "\u21D2", rArr: "\u21D2", DoubleRightTee: "\u22A8", vDash: "\u22A8", DoubleUpArrow: "\u21D1", Uparrow: "\u21D1", uArr: "\u21D1", DoubleUpDownArrow: "\u21D5", Updownarrow: "\u21D5", vArr: "\u21D5", DoubleVerticalBar: "\u2225", par: "\u2225", parallel: "\u2225", shortparallel: "\u2225", spar: "\u2225", DownArrow: "\u2193", ShortDownArrow: "\u2193", darr: "\u2193", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", duarr: "\u21F5", DownBreve: "\u0311", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", leftharpoondown: "\u21BD", lhard: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", rhard: "\u21C1", rightharpoondown: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", top: "\u22A4", DownTeeArrow: "\u21A7", mapstodown: "\u21A7", Dscr: "\u{1D49F}", Dstrok: "\u0110", ENG: "\u014A", ETH: "\xD0", Eacute: "\xC9", Ecaron: "\u011A", Ecirc: "\xCA", Ecy: "\u042D", Edot: "\u0116", Efr: "\u{1D508}", Egrave: "\xC8", Element: "\u2208", in: "\u2208", isin: "\u2208", isinv: "\u2208", Emacr: "\u0112", EmptySmallSquare: "\u25FB", EmptyVerySmallSquare: "\u25AB", Eogon: "\u0118", Eopf: "\u{1D53C}", Epsilon: "\u0395", Equal: "\u2A75", EqualTilde: "\u2242", eqsim: "\u2242", esim: "\u2242", Equilibrium: "\u21CC", rightleftharpoons: "\u21CC", rlhar: "\u21CC", Escr: "\u2130", expectation: "\u2130", Esim: "\u2A73", Eta: "\u0397", Euml: "\xCB", Exists: "\u2203", exist: "\u2203", ExponentialE: "\u2147", ee: "\u2147", exponentiale: "\u2147", Fcy: "\u0424", Ffr: "\u{1D509}", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", blacksquare: "\u25AA", squarf: "\u25AA", squf: "\u25AA", Fopf: "\u{1D53D}", ForAll: "\u2200", forall: "\u2200", Fouriertrf: "\u2131", Fscr: "\u2131", GJcy: "\u0403", GT: ">", gt: ">", Gamma: "\u0393", Gammad: "\u03DC", Gbreve: "\u011E", Gcedil: "\u0122", Gcirc: "\u011C", Gcy: "\u0413", Gdot: "\u0120", Gfr: "\u{1D50A}", Gg: "\u22D9", ggg: "\u22D9", Gopf: "\u{1D53E}", GreaterEqual: "\u2265", ge: "\u2265", geq: "\u2265", GreaterEqualLess: "\u22DB", gel: "\u22DB", gtreqless: "\u22DB", GreaterFullEqual: "\u2267", gE: "\u2267", geqq: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", gl: "\u2277", gtrless: "\u2277", GreaterSlantEqual: "\u2A7E", geqslant: "\u2A7E", ges: "\u2A7E", GreaterTilde: "\u2273", gsim: "\u2273", gtrsim: "\u2273", Gscr: "\u{1D4A2}", Gt: "\u226B", NestedGreaterGreater: "\u226B", gg: "\u226B", HARDcy: "\u042A", Hacek: "\u02C7", caron: "\u02C7", Hat: "^", Hcirc: "\u0124", Hfr: "\u210C", Poincareplane: "\u210C", HilbertSpace: "\u210B", Hscr: "\u210B", hamilt: "\u210B", Hopf: "\u210D", quaternions: "\u210D", HorizontalLine: "\u2500", boxh: "\u2500", Hstrok: "\u0126", HumpEqual: "\u224F", bumpe: "\u224F", bumpeq: "\u224F", IEcy: "\u0415", IJlig: "\u0132", IOcy: "\u0401", Iacute: "\xCD", Icirc: "\xCE", Icy: "\u0418", Idot: "\u0130", Ifr: "\u2111", Im: "\u2111", image: "\u2111", imagpart: "\u2111", Igrave: "\xCC", Imacr: "\u012A", ImaginaryI: "\u2148", ii: "\u2148", Int: "\u222C", Integral: "\u222B", int: "\u222B", Intersection: "\u22C2", bigcap: "\u22C2", xcap: "\u22C2", InvisibleComma: "\u2063", ic: "\u2063", InvisibleTimes: "\u2062", it: "\u2062", Iogon: "\u012E", Iopf: "\u{1D540}", Iota: "\u0399", Iscr: "\u2110", imagline: "\u2110", Itilde: "\u0128", Iukcy: "\u0406", Iuml: "\xCF", Jcirc: "\u0134", Jcy: "\u0419", Jfr: "\u{1D50D}", Jopf: "\u{1D541}", Jscr: "\u{1D4A5}", Jsercy: "\u0408", Jukcy: "\u0404", KHcy: "\u0425", KJcy: "\u040C", Kappa: "\u039A", Kcedil: "\u0136", Kcy: "\u041A", Kfr: "\u{1D50E}", Kopf: "\u{1D542}", Kscr: "\u{1D4A6}", LJcy: "\u0409", LT: "<", lt: "<", Lacute: "\u0139", Lambda: "\u039B", Lang: "\u27EA", Laplacetrf: "\u2112", Lscr: "\u2112", lagran: "\u2112", Larr: "\u219E", twoheadleftarrow: "\u219E", Lcaron: "\u013D", Lcedil: "\u013B", Lcy: "\u041B", LeftAngleBracket: "\u27E8", lang: "\u27E8", langle: "\u27E8", LeftArrow: "\u2190", ShortLeftArrow: "\u2190", larr: "\u2190", leftarrow: "\u2190", slarr: "\u2190", LeftArrowBar: "\u21E4", larrb: "\u21E4", LeftArrowRightArrow: "\u21C6", leftrightarrows: "\u21C6", lrarr: "\u21C6", LeftCeiling: "\u2308", lceil: "\u2308", LeftDoubleBracket: "\u27E6", lobrk: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", dharl: "\u21C3", downharpoonleft: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", lfloor: "\u230A", LeftRightArrow: "\u2194", harr: "\u2194", leftrightarrow: "\u2194", LeftRightVector: "\u294E", LeftTee: "\u22A3", dashv: "\u22A3", LeftTeeArrow: "\u21A4", mapstoleft: "\u21A4", LeftTeeVector: "\u295A", LeftTriangle: "\u22B2", vartriangleleft: "\u22B2", vltri: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", ltrie: "\u22B4", trianglelefteq: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", uharl: "\u21BF", upharpoonleft: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", leftharpoonup: "\u21BC", lharu: "\u21BC", LeftVectorBar: "\u2952", LessEqualGreater: "\u22DA", leg: "\u22DA", lesseqgtr: "\u22DA", LessFullEqual: "\u2266", lE: "\u2266", leqq: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", lg: "\u2276", LessLess: "\u2AA1", LessSlantEqual: "\u2A7D", leqslant: "\u2A7D", les: "\u2A7D", LessTilde: "\u2272", lesssim: "\u2272", lsim: "\u2272", Lfr: "\u{1D50F}", Ll: "\u22D8", Lleftarrow: "\u21DA", lAarr: "\u21DA", Lmidot: "\u013F", LongLeftArrow: "\u27F5", longleftarrow: "\u27F5", xlarr: "\u27F5", LongLeftRightArrow: "\u27F7", longleftrightarrow: "\u27F7", xharr: "\u27F7", LongRightArrow: "\u27F6", longrightarrow: "\u27F6", xrarr: "\u27F6", Lopf: "\u{1D543}", LowerLeftArrow: "\u2199", swarr: "\u2199", swarrow: "\u2199", LowerRightArrow: "\u2198", searr: "\u2198", searrow: "\u2198", Lsh: "\u21B0", lsh: "\u21B0", Lstrok: "\u0141", Lt: "\u226A", NestedLessLess: "\u226A", ll: "\u226A", Map: "\u2905", Mcy: "\u041C", MediumSpace: "\u205F", Mellintrf: "\u2133", Mscr: "\u2133", phmmat: "\u2133", Mfr: "\u{1D510}", MinusPlus: "\u2213", mnplus: "\u2213", mp: "\u2213", Mopf: "\u{1D544}", Mu: "\u039C", NJcy: "\u040A", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041D", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", ZeroWidthSpace: "\u200B", NewLine: `
`, Nfr: "\u{1D511}", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nbsp: "\xA0", Nopf: "\u2115", naturals: "\u2115", Not: "\u2AEC", NotCongruent: "\u2262", nequiv: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", npar: "\u2226", nparallel: "\u2226", nshortparallel: "\u2226", nspar: "\u2226", NotElement: "\u2209", notin: "\u2209", notinva: "\u2209", NotEqual: "\u2260", ne: "\u2260", NotEqualTilde: "\u2242\u0338", nesim: "\u2242\u0338", NotExists: "\u2204", nexist: "\u2204", nexists: "\u2204", NotGreater: "\u226F", ngt: "\u226F", ngtr: "\u226F", NotGreaterEqual: "\u2271", nge: "\u2271", ngeq: "\u2271", NotGreaterFullEqual: "\u2267\u0338", ngE: "\u2267\u0338", ngeqq: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", nGtv: "\u226B\u0338", NotGreaterLess: "\u2279", ntgl: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", NotGreaterTilde: "\u2275", ngsim: "\u2275", NotHumpDownHump: "\u224E\u0338", nbump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", nbumpe: "\u224F\u0338", NotLeftTriangle: "\u22EA", nltri: "\u22EA", ntriangleleft: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", nltrie: "\u22EC", ntrianglelefteq: "\u22EC", NotLess: "\u226E", nless: "\u226E", nlt: "\u226E", NotLessEqual: "\u2270", nle: "\u2270", nleq: "\u2270", NotLessGreater: "\u2278", ntlg: "\u2278", NotLessLess: "\u226A\u0338", nLtv: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", NotLessTilde: "\u2274", nlsim: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", NotPrecedes: "\u2280", npr: "\u2280", nprec: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", npre: "\u2AAF\u0338", npreceq: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", nprcue: "\u22E0", NotReverseElement: "\u220C", notni: "\u220C", notniva: "\u220C", NotRightTriangle: "\u22EB", nrtri: "\u22EB", ntriangleright: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", nrtrie: "\u22ED", ntrianglerighteq: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", nsqsube: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", nsqsupe: "\u22E3", NotSubset: "\u2282\u20D2", nsubset: "\u2282\u20D2", vnsub: "\u2282\u20D2", NotSubsetEqual: "\u2288", nsube: "\u2288", nsubseteq: "\u2288", NotSucceeds: "\u2281", nsc: "\u2281", nsucc: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", nsce: "\u2AB0\u0338", nsucceq: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", nsccue: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", nsupset: "\u2283\u20D2", vnsup: "\u2283\u20D2", NotSupersetEqual: "\u2289", nsupe: "\u2289", nsupseteq: "\u2289", NotTilde: "\u2241", nsim: "\u2241", NotTildeEqual: "\u2244", nsime: "\u2244", nsimeq: "\u2244", NotTildeFullEqual: "\u2247", ncong: "\u2247", NotTildeTilde: "\u2249", nap: "\u2249", napprox: "\u2249", NotVerticalBar: "\u2224", nmid: "\u2224", nshortmid: "\u2224", nsmid: "\u2224", Nscr: "\u{1D4A9}", Ntilde: "\xD1", Nu: "\u039D", OElig: "\u0152", Oacute: "\xD3", Ocirc: "\xD4", Ocy: "\u041E", Odblac: "\u0150", Ofr: "\u{1D512}", Ograve: "\xD2", Omacr: "\u014C", Omega: "\u03A9", ohm: "\u03A9", Omicron: "\u039F", Oopf: "\u{1D546}", OpenCurlyDoubleQuote: "\u201C", ldquo: "\u201C", OpenCurlyQuote: "\u2018", lsquo: "\u2018", Or: "\u2A54", Oscr: "\u{1D4AA}", Oslash: "\xD8", Otilde: "\xD5", Otimes: "\u2A37", Ouml: "\xD6", OverBar: "\u203E", oline: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", tbrk: "\u23B4", OverParenthesis: "\u23DC", PartialD: "\u2202", part: "\u2202", Pcy: "\u041F", Pfr: "\u{1D513}", Phi: "\u03A6", Pi: "\u03A0", PlusMinus: "\xB1", plusmn: "\xB1", pm: "\xB1", Popf: "\u2119", primes: "\u2119", Pr: "\u2ABB", Precedes: "\u227A", pr: "\u227A", prec: "\u227A", PrecedesEqual: "\u2AAF", pre: "\u2AAF", preceq: "\u2AAF", PrecedesSlantEqual: "\u227C", prcue: "\u227C", preccurlyeq: "\u227C", PrecedesTilde: "\u227E", precsim: "\u227E", prsim: "\u227E", Prime: "\u2033", Product: "\u220F", prod: "\u220F", Proportional: "\u221D", prop: "\u221D", propto: "\u221D", varpropto: "\u221D", vprop: "\u221D", Pscr: "\u{1D4AB}", Psi: "\u03A8", QUOT: '"', quot: '"', Qfr: "\u{1D514}", Qopf: "\u211A", rationals: "\u211A", Qscr: "\u{1D4AC}", RBarr: "\u2910", drbkarow: "\u2910", REG: "\xAE", circledR: "\xAE", reg: "\xAE", Racute: "\u0154", Rang: "\u27EB", Rarr: "\u21A0", twoheadrightarrow: "\u21A0", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", Re: "\u211C", Rfr: "\u211C", real: "\u211C", realpart: "\u211C", ReverseElement: "\u220B", SuchThat: "\u220B", ni: "\u220B", niv: "\u220B", ReverseEquilibrium: "\u21CB", leftrightharpoons: "\u21CB", lrhar: "\u21CB", ReverseUpEquilibrium: "\u296F", duhar: "\u296F", Rho: "\u03A1", RightAngleBracket: "\u27E9", rang: "\u27E9", rangle: "\u27E9", RightArrow: "\u2192", ShortRightArrow: "\u2192", rarr: "\u2192", rightarrow: "\u2192", srarr: "\u2192", RightArrowBar: "\u21E5", rarrb: "\u21E5", RightArrowLeftArrow: "\u21C4", rightleftarrows: "\u21C4", rlarr: "\u21C4", RightCeiling: "\u2309", rceil: "\u2309", RightDoubleBracket: "\u27E7", robrk: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", dharr: "\u21C2", downharpoonright: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rfloor: "\u230B", RightTee: "\u22A2", vdash: "\u22A2", RightTeeArrow: "\u21A6", map: "\u21A6", mapsto: "\u21A6", RightTeeVector: "\u295B", RightTriangle: "\u22B3", vartriangleright: "\u22B3", vrtri: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", rtrie: "\u22B5", trianglerighteq: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", uharr: "\u21BE", upharpoonright: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", rharu: "\u21C0", rightharpoonup: "\u21C0", RightVectorBar: "\u2953", Ropf: "\u211D", reals: "\u211D", RoundImplies: "\u2970", Rrightarrow: "\u21DB", rAarr: "\u21DB", Rscr: "\u211B", realine: "\u211B", Rsh: "\u21B1", rsh: "\u21B1", RuleDelayed: "\u29F4", SHCHcy: "\u0429", SHcy: "\u0428", SOFTcy: "\u042C", Sacute: "\u015A", Sc: "\u2ABC", Scaron: "\u0160", Scedil: "\u015E", Scirc: "\u015C", Scy: "\u0421", Sfr: "\u{1D516}", ShortUpArrow: "\u2191", UpArrow: "\u2191", uarr: "\u2191", uparrow: "\u2191", Sigma: "\u03A3", SmallCircle: "\u2218", compfn: "\u2218", Sopf: "\u{1D54A}", Sqrt: "\u221A", radic: "\u221A", Square: "\u25A1", squ: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", sqcap: "\u2293", SquareSubset: "\u228F", sqsub: "\u228F", sqsubset: "\u228F", SquareSubsetEqual: "\u2291", sqsube: "\u2291", sqsubseteq: "\u2291", SquareSuperset: "\u2290", sqsup: "\u2290", sqsupset: "\u2290", SquareSupersetEqual: "\u2292", sqsupe: "\u2292", sqsupseteq: "\u2292", SquareUnion: "\u2294", sqcup: "\u2294", Sscr: "\u{1D4AE}", Star: "\u22C6", sstarf: "\u22C6", Sub: "\u22D0", Subset: "\u22D0", SubsetEqual: "\u2286", sube: "\u2286", subseteq: "\u2286", Succeeds: "\u227B", sc: "\u227B", succ: "\u227B", SucceedsEqual: "\u2AB0", sce: "\u2AB0", succeq: "\u2AB0", SucceedsSlantEqual: "\u227D", sccue: "\u227D", succcurlyeq: "\u227D", SucceedsTilde: "\u227F", scsim: "\u227F", succsim: "\u227F", Sum: "\u2211", sum: "\u2211", Sup: "\u22D1", Supset: "\u22D1", Superset: "\u2283", sup: "\u2283", supset: "\u2283", SupersetEqual: "\u2287", supe: "\u2287", supseteq: "\u2287", THORN: "\xDE", TRADE: "\u2122", trade: "\u2122", TSHcy: "\u040B", TScy: "\u0426", Tab: "	", Tau: "\u03A4", Tcaron: "\u0164", Tcedil: "\u0162", Tcy: "\u0422", Tfr: "\u{1D517}", Therefore: "\u2234", there4: "\u2234", therefore: "\u2234", Theta: "\u0398", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", Tilde: "\u223C", sim: "\u223C", thicksim: "\u223C", thksim: "\u223C", TildeEqual: "\u2243", sime: "\u2243", simeq: "\u2243", TildeFullEqual: "\u2245", cong: "\u2245", TildeTilde: "\u2248", ap: "\u2248", approx: "\u2248", asymp: "\u2248", thickapprox: "\u2248", thkap: "\u2248", Topf: "\u{1D54B}", TripleDot: "\u20DB", tdot: "\u20DB", Tscr: "\u{1D4AF}", Tstrok: "\u0166", Uacute: "\xDA", Uarr: "\u219F", Uarrocir: "\u2949", Ubrcy: "\u040E", Ubreve: "\u016C", Ucirc: "\xDB", Ucy: "\u0423", Udblac: "\u0170", Ufr: "\u{1D518}", Ugrave: "\xD9", Umacr: "\u016A", UnderBar: "_", lowbar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", bbrk: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", bigcup: "\u22C3", xcup: "\u22C3", UnionPlus: "\u228E", uplus: "\u228E", Uogon: "\u0172", Uopf: "\u{1D54C}", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", udarr: "\u21C5", UpDownArrow: "\u2195", updownarrow: "\u2195", varr: "\u2195", UpEquilibrium: "\u296E", udhar: "\u296E", UpTee: "\u22A5", bot: "\u22A5", bottom: "\u22A5", perp: "\u22A5", UpTeeArrow: "\u21A5", mapstoup: "\u21A5", UpperLeftArrow: "\u2196", nwarr: "\u2196", nwarrow: "\u2196", UpperRightArrow: "\u2197", nearr: "\u2197", nearrow: "\u2197", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", Uring: "\u016E", Uscr: "\u{1D4B0}", Utilde: "\u0168", Uuml: "\xDC", VDash: "\u22AB", Vbar: "\u2AEB", Vcy: "\u0412", Vdash: "\u22A9", Vdashl: "\u2AE6", Vee: "\u22C1", bigvee: "\u22C1", xvee: "\u22C1", Verbar: "\u2016", Vert: "\u2016", VerticalBar: "\u2223", mid: "\u2223", shortmid: "\u2223", smid: "\u2223", VerticalLine: "|", verbar: "|", vert: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", wr: "\u2240", wreath: "\u2240", VeryThinSpace: "\u200A", hairsp: "\u200A", Vfr: "\u{1D519}", Vopf: "\u{1D54D}", Vscr: "\u{1D4B1}", Vvdash: "\u22AA", Wcirc: "\u0174", Wedge: "\u22C0", bigwedge: "\u22C0", xwedge: "\u22C0", Wfr: "\u{1D51A}", Wopf: "\u{1D54E}", Wscr: "\u{1D4B2}", Xfr: "\u{1D51B}", Xi: "\u039E", Xopf: "\u{1D54F}", Xscr: "\u{1D4B3}", YAcy: "\u042F", YIcy: "\u0407", YUcy: "\u042E", Yacute: "\xDD", Ycirc: "\u0176", Ycy: "\u042B", Yfr: "\u{1D51C}", Yopf: "\u{1D550}", Yscr: "\u{1D4B4}", Yuml: "\u0178", ZHcy: "\u0416", Zacute: "\u0179", Zcaron: "\u017D", Zcy: "\u0417", Zdot: "\u017B", Zeta: "\u0396", Zfr: "\u2128", zeetrf: "\u2128", Zopf: "\u2124", integers: "\u2124", Zscr: "\u{1D4B5}", aacute: "\xE1", abreve: "\u0103", ac: "\u223E", mstpos: "\u223E", acE: "\u223E\u0333", acd: "\u223F", acirc: "\xE2", acy: "\u0430", aelig: "\xE6", afr: "\u{1D51E}", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", alpha: "\u03B1", amacr: "\u0101", amalg: "\u2A3F", and: "\u2227", wedge: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", angle: "\u2220", ange: "\u29A4", angmsd: "\u2221", measuredangle: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angzarr: "\u237C", aogon: "\u0105", aopf: "\u{1D552}", apE: "\u2A70", apacir: "\u2A6F", ape: "\u224A", approxeq: "\u224A", apid: "\u224B", apos: "'", aring: "\xE5", ascr: "\u{1D4B6}", ast: "*", midast: "*", atilde: "\xE3", auml: "\xE4", awint: "\u2A11", bNot: "\u2AED", backcong: "\u224C", bcong: "\u224C", backepsilon: "\u03F6", bepsi: "\u03F6", backprime: "\u2035", bprime: "\u2035", backsim: "\u223D", bsim: "\u223D", backsimeq: "\u22CD", bsime: "\u22CD", barvee: "\u22BD", barwed: "\u2305", barwedge: "\u2305", bbrktbrk: "\u23B6", bcy: "\u0431", bdquo: "\u201E", ldquor: "\u201E", bemptyv: "\u29B0", beta: "\u03B2", beth: "\u2136", between: "\u226C", twixt: "\u226C", bfr: "\u{1D51F}", bigcirc: "\u25EF", xcirc: "\u25EF", bigodot: "\u2A00", xodot: "\u2A00", bigoplus: "\u2A01", xoplus: "\u2A01", bigotimes: "\u2A02", xotime: "\u2A02", bigsqcup: "\u2A06", xsqcup: "\u2A06", bigstar: "\u2605", starf: "\u2605", bigtriangledown: "\u25BD", xdtri: "\u25BD", bigtriangleup: "\u25B3", xutri: "\u25B3", biguplus: "\u2A04", xuplus: "\u2A04", bkarow: "\u290D", rbarr: "\u290D", blacklozenge: "\u29EB", lozf: "\u29EB", blacktriangle: "\u25B4", utrif: "\u25B4", blacktriangledown: "\u25BE", dtrif: "\u25BE", blacktriangleleft: "\u25C2", ltrif: "\u25C2", blacktriangleright: "\u25B8", rtrif: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bnot: "\u2310", bopf: "\u{1D553}", bowtie: "\u22C8", boxDL: "\u2557", boxDR: "\u2554", boxDl: "\u2556", boxDr: "\u2553", boxH: "\u2550", boxHD: "\u2566", boxHU: "\u2569", boxHd: "\u2564", boxHu: "\u2567", boxUL: "\u255D", boxUR: "\u255A", boxUl: "\u255C", boxUr: "\u2559", boxV: "\u2551", boxVH: "\u256C", boxVL: "\u2563", boxVR: "\u2560", boxVh: "\u256B", boxVl: "\u2562", boxVr: "\u255F", boxbox: "\u29C9", boxdL: "\u2555", boxdR: "\u2552", boxdl: "\u2510", boxdr: "\u250C", boxhD: "\u2565", boxhU: "\u2568", boxhd: "\u252C", boxhu: "\u2534", boxminus: "\u229F", minusb: "\u229F", boxplus: "\u229E", plusb: "\u229E", boxtimes: "\u22A0", timesb: "\u22A0", boxuL: "\u255B", boxuR: "\u2558", boxul: "\u2518", boxur: "\u2514", boxv: "\u2502", boxvH: "\u256A", boxvL: "\u2561", boxvR: "\u255E", boxvh: "\u253C", boxvl: "\u2524", boxvr: "\u251C", brvbar: "\xA6", bscr: "\u{1D4B7}", bsemi: "\u204F", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bumpE: "\u2AAE", cacute: "\u0107", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", caps: "\u2229\uFE00", caret: "\u2041", ccaps: "\u2A4D", ccaron: "\u010D", ccedil: "\xE7", ccirc: "\u0109", ccups: "\u2A4C", ccupssm: "\u2A50", cdot: "\u010B", cemptyv: "\u29B2", cent: "\xA2", cfr: "\u{1D520}", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", chi: "\u03C7", cir: "\u25CB", cirE: "\u29C3", circ: "\u02C6", circeq: "\u2257", cire: "\u2257", circlearrowleft: "\u21BA", olarr: "\u21BA", circlearrowright: "\u21BB", orarr: "\u21BB", circledS: "\u24C8", oS: "\u24C8", circledast: "\u229B", oast: "\u229B", circledcirc: "\u229A", ocir: "\u229A", circleddash: "\u229D", odash: "\u229D", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", clubs: "\u2663", clubsuit: "\u2663", colon: ":", comma: ",", commat: "@", comp: "\u2201", complement: "\u2201", congdot: "\u2A6D", copf: "\u{1D554}", copysr: "\u2117", crarr: "\u21B5", cross: "\u2717", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", curlyeqprec: "\u22DE", cuesc: "\u22DF", curlyeqsucc: "\u22DF", cularr: "\u21B6", curvearrowleft: "\u21B6", cularrp: "\u293D", cup: "\u222A", cupbrcap: "\u2A48", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curvearrowright: "\u21B7", curarrm: "\u293C", curlyvee: "\u22CE", cuvee: "\u22CE", curlywedge: "\u22CF", cuwed: "\u22CF", curren: "\xA4", cwint: "\u2231", cylcty: "\u232D", dHar: "\u2965", dagger: "\u2020", daleth: "\u2138", dash: "\u2010", hyphen: "\u2010", dbkarow: "\u290F", rBarr: "\u290F", dcaron: "\u010F", dcy: "\u0434", ddarr: "\u21CA", downdownarrows: "\u21CA", ddotseq: "\u2A77", eDDot: "\u2A77", deg: "\xB0", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", dfr: "\u{1D521}", diamondsuit: "\u2666", diams: "\u2666", digamma: "\u03DD", gammad: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", djcy: "\u0452", dlcorn: "\u231E", llcorner: "\u231E", dlcrop: "\u230D", dollar: "$", dopf: "\u{1D555}", doteqdot: "\u2251", eDot: "\u2251", dotminus: "\u2238", minusd: "\u2238", dotplus: "\u2214", plusdo: "\u2214", dotsquare: "\u22A1", sdotb: "\u22A1", drcorn: "\u231F", lrcorner: "\u231F", drcrop: "\u230C", dscr: "\u{1D4B9}", dscy: "\u0455", dsol: "\u29F6", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", triangledown: "\u25BF", dwangle: "\u29A6", dzcy: "\u045F", dzigrarr: "\u27FF", eacute: "\xE9", easter: "\u2A6E", ecaron: "\u011B", ecir: "\u2256", eqcirc: "\u2256", ecirc: "\xEA", ecolon: "\u2255", eqcolon: "\u2255", ecy: "\u044D", edot: "\u0117", efDot: "\u2252", fallingdotseq: "\u2252", efr: "\u{1D522}", eg: "\u2A9A", egrave: "\xE8", egs: "\u2A96", eqslantgtr: "\u2A96", egsdot: "\u2A98", el: "\u2A99", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", eqslantless: "\u2A95", elsdot: "\u2A97", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", emptyv: "\u2205", varnothing: "\u2205", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", eng: "\u014B", ensp: "\u2002", eogon: "\u0119", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", epsilon: "\u03B5", epsiv: "\u03F5", straightepsilon: "\u03F5", varepsilon: "\u03F5", equals: "=", equest: "\u225F", questeq: "\u225F", equivDD: "\u2A78", eqvparsl: "\u29E5", erDot: "\u2253", risingdotseq: "\u2253", erarr: "\u2971", escr: "\u212F", eta: "\u03B7", eth: "\xF0", euml: "\xEB", euro: "\u20AC", excl: "!", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", ffr: "\u{1D523}", filig: "\uFB01", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", fopf: "\u{1D557}", fork: "\u22D4", pitchfork: "\u22D4", forkv: "\u2AD9", fpartint: "\u2A0D", frac12: "\xBD", half: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", sfrown: "\u2322", fscr: "\u{1D4BB}", gEl: "\u2A8C", gtreqqless: "\u2A8C", gacute: "\u01F5", gamma: "\u03B3", gap: "\u2A86", gtrapprox: "\u2A86", gbreve: "\u011F", gcirc: "\u011D", gcy: "\u0433", gdot: "\u0121", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", gfr: "\u{1D524}", gimel: "\u2137", gjcy: "\u0453", glE: "\u2A92", gla: "\u2AA5", glj: "\u2AA4", gnE: "\u2269", gneqq: "\u2269", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gneq: "\u2A88", gnsim: "\u22E7", gopf: "\u{1D558}", gscr: "\u210A", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtrdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrarr: "\u2978", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", hardcy: "\u044A", harrcir: "\u2948", harrw: "\u21AD", leftrightsquigarrow: "\u21AD", hbar: "\u210F", hslash: "\u210F", planck: "\u210F", plankv: "\u210F", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", mldr: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", hksearow: "\u2925", searhk: "\u2925", hkswarow: "\u2926", swarhk: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", larrhk: "\u21A9", hookrightarrow: "\u21AA", rarrhk: "\u21AA", hopf: "\u{1D559}", horbar: "\u2015", hscr: "\u{1D4BD}", hstrok: "\u0127", hybull: "\u2043", iacute: "\xED", icirc: "\xEE", icy: "\u0438", iecy: "\u0435", iexcl: "\xA1", ifr: "\u{1D526}", igrave: "\xEC", iiiint: "\u2A0C", qint: "\u2A0C", iiint: "\u222D", tint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", ijlig: "\u0133", imacr: "\u012B", imath: "\u0131", inodot: "\u0131", imof: "\u22B7", imped: "\u01B5", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", intcal: "\u22BA", intercal: "\u22BA", intlarhk: "\u2A17", intprod: "\u2A3C", iprod: "\u2A3C", iocy: "\u0451", iogon: "\u012F", iopf: "\u{1D55A}", iota: "\u03B9", iquest: "\xBF", iscr: "\u{1D4BE}", isinE: "\u22F9", isindot: "\u22F5", isins: "\u22F4", isinsv: "\u22F3", itilde: "\u0129", iukcy: "\u0456", iuml: "\xEF", jcirc: "\u0135", jcy: "\u0439", jfr: "\u{1D527}", jmath: "\u0237", jopf: "\u{1D55B}", jscr: "\u{1D4BF}", jsercy: "\u0458", jukcy: "\u0454", kappa: "\u03BA", kappav: "\u03F0", varkappa: "\u03F0", kcedil: "\u0137", kcy: "\u043A", kfr: "\u{1D528}", kgreen: "\u0138", khcy: "\u0445", kjcy: "\u045C", kopf: "\u{1D55C}", kscr: "\u{1D4C0}", lAtail: "\u291B", lBarr: "\u290E", lEg: "\u2A8B", lesseqqgtr: "\u2A8B", lHar: "\u2962", lacute: "\u013A", laemptyv: "\u29B4", lambda: "\u03BB", langd: "\u2991", lap: "\u2A85", lessapprox: "\u2A85", laquo: "\xAB", larrbfs: "\u291F", larrfs: "\u291D", larrlp: "\u21AB", looparrowleft: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", leftarrowtail: "\u21A2", lat: "\u2AAB", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lcub: "{", lbrack: "[", lsqb: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", lcaron: "\u013E", lcedil: "\u013C", lcy: "\u043B", ldca: "\u2936", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", leq: "\u2264", leftleftarrows: "\u21C7", llarr: "\u21C7", leftthreetimes: "\u22CB", lthree: "\u22CB", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessdot: "\u22D6", ltdot: "\u22D6", lfisht: "\u297C", lfr: "\u{1D529}", lgE: "\u2A91", lharul: "\u296A", lhblk: "\u2584", ljcy: "\u0459", llhard: "\u296B", lltri: "\u25FA", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnE: "\u2268", lneqq: "\u2268", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lneq: "\u2A87", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", longmapsto: "\u27FC", xmap: "\u27FC", looparrowright: "\u21AC", rarrlp: "\u21AC", lopar: "\u2985", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", loz: "\u25CA", lozenge: "\u25CA", lpar: "(", lparlt: "\u2993", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", lsime: "\u2A8D", lsimg: "\u2A8F", lsquor: "\u201A", sbquo: "\u201A", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltrPar: "\u2996", ltri: "\u25C3", triangleleft: "\u25C3", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", mDDot: "\u223A", macr: "\xAF", strns: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", marker: "\u25AE", mcomma: "\u2A29", mcy: "\u043C", mdash: "\u2014", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midcir: "\u2AF0", minus: "\u2212", minusdu: "\u2A2A", mlcp: "\u2ADB", models: "\u22A7", mopf: "\u{1D55E}", mscr: "\u{1D4C2}", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nGg: "\u22D9\u0338", nGt: "\u226B\u20D2", nLeftarrow: "\u21CD", nlArr: "\u21CD", nLeftrightarrow: "\u21CE", nhArr: "\u21CE", nLl: "\u22D8\u0338", nLt: "\u226A\u20D2", nRightarrow: "\u21CF", nrArr: "\u21CF", nVDash: "\u22AF", nVdash: "\u22AE", nacute: "\u0144", nang: "\u2220\u20D2", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", natur: "\u266E", natural: "\u266E", ncap: "\u2A43", ncaron: "\u0148", ncedil: "\u0146", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", ncy: "\u043D", ndash: "\u2013", neArr: "\u21D7", nearhk: "\u2924", nedot: "\u2250\u0338", nesear: "\u2928", toea: "\u2928", nfr: "\u{1D52B}", nharr: "\u21AE", nleftrightarrow: "\u21AE", nhpar: "\u2AF2", nis: "\u22FC", nisd: "\u22FA", njcy: "\u045A", nlE: "\u2266\u0338", nleqq: "\u2266\u0338", nlarr: "\u219A", nleftarrow: "\u219A", nldr: "\u2025", nopf: "\u{1D55F}", not: "\xAC", notinE: "\u22F9\u0338", notindot: "\u22F5\u0338", notinvb: "\u22F7", notinvc: "\u22F6", notnivb: "\u22FE", notnivc: "\u22FD", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", nrarr: "\u219B", nrightarrow: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nscr: "\u{1D4C3}", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsubseteqq: "\u2AC5\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupseteqq: "\u2AC6\u0338", ntilde: "\xF1", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvDash: "\u22AD", nvHarr: "\u2904", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwArr: "\u21D6", nwarhk: "\u2923", nwnear: "\u2927", oacute: "\xF3", ocirc: "\xF4", ocy: "\u043E", odblac: "\u0151", odiv: "\u2A38", odsold: "\u29BC", oelig: "\u0153", ofcir: "\u29BF", ofr: "\u{1D52C}", ogon: "\u02DB", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", olcir: "\u29BE", olcross: "\u29BB", olt: "\u29C0", omacr: "\u014D", omega: "\u03C9", omicron: "\u03BF", omid: "\u29B6", oopf: "\u{1D560}", opar: "\u29B7", operp: "\u29B9", or: "\u2228", vee: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", oscr: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oslash: "\xF8", osol: "\u2298", otilde: "\xF5", otimesas: "\u2A36", ouml: "\xF6", ovbar: "\u233D", para: "\xB6", parsim: "\u2AF3", parsl: "\u2AFD", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", pertenk: "\u2031", pfr: "\u{1D52D}", phi: "\u03C6", phiv: "\u03D5", straightphi: "\u03D5", varphi: "\u03D5", phone: "\u260E", pi: "\u03C0", piv: "\u03D6", varpi: "\u03D6", planckh: "\u210E", plus: "+", plusacir: "\u2A23", pluscir: "\u2A22", plusdu: "\u2A25", pluse: "\u2A72", plussim: "\u2A26", plustwo: "\u2A27", pointint: "\u2A15", popf: "\u{1D561}", pound: "\xA3", prE: "\u2AB3", prap: "\u2AB7", precapprox: "\u2AB7", precnapprox: "\u2AB9", prnap: "\u2AB9", precneqq: "\u2AB5", prnE: "\u2AB5", precnsim: "\u22E8", prnsim: "\u22E8", prime: "\u2032", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prurel: "\u22B0", pscr: "\u{1D4C5}", psi: "\u03C8", puncsp: "\u2008", qfr: "\u{1D52E}", qopf: "\u{1D562}", qprime: "\u2057", qscr: "\u{1D4C6}", quatint: "\u2A16", quest: "?", rAtail: "\u291C", rHar: "\u2964", race: "\u223D\u0331", racute: "\u0155", raemptyv: "\u29B3", rangd: "\u2992", range: "\u29A5", raquo: "\xBB", rarrap: "\u2975", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrpl: "\u2945", rarrsim: "\u2974", rarrtl: "\u21A3", rightarrowtail: "\u21A3", rarrw: "\u219D", rightsquigarrow: "\u219D", ratail: "\u291A", ratio: "\u2236", rbbrk: "\u2773", rbrace: "}", rcub: "}", rbrack: "]", rsqb: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdsh: "\u21B3", rect: "\u25AD", rfisht: "\u297D", rfr: "\u{1D52F}", rharul: "\u296C", rho: "\u03C1", rhov: "\u03F1", varrho: "\u03F1", rightrightarrows: "\u21C9", rrarr: "\u21C9", rightthreetimes: "\u22CC", rthree: "\u22CC", ring: "\u02DA", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", ropar: "\u2986", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rsaquo: "\u203A", rscr: "\u{1D4C7}", rtimes: "\u22CA", rtri: "\u25B9", triangleright: "\u25B9", rtriltri: "\u29CE", ruluhar: "\u2968", rx: "\u211E", sacute: "\u015B", scE: "\u2AB4", scap: "\u2AB8", succapprox: "\u2AB8", scaron: "\u0161", scedil: "\u015F", scirc: "\u015D", scnE: "\u2AB6", succneqq: "\u2AB6", scnap: "\u2ABA", succnapprox: "\u2ABA", scnsim: "\u22E9", succnsim: "\u22E9", scpolint: "\u2A13", scy: "\u0441", sdot: "\u22C5", sdote: "\u2A66", seArr: "\u21D8", sect: "\xA7", semi: ";", seswar: "\u2929", tosa: "\u2929", sext: "\u2736", sfr: "\u{1D530}", sharp: "\u266F", shchcy: "\u0449", shcy: "\u0448", shy: "\xAD", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", varsigma: "\u03C2", simdot: "\u2A6A", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", smashp: "\u2A33", smeparsl: "\u29E4", smile: "\u2323", ssmile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", sqcaps: "\u2293\uFE00", sqcups: "\u2294\uFE00", sscr: "\u{1D4C8}", star: "\u2606", sub: "\u2282", subset: "\u2282", subE: "\u2AC5", subseteqq: "\u2AC5", subdot: "\u2ABD", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subsetneqq: "\u2ACB", subne: "\u228A", subsetneq: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supE: "\u2AC6", supseteqq: "\u2AC6", supdot: "\u2ABE", supdsub: "\u2AD8", supedot: "\u2AC4", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supsetneqq: "\u2ACC", supne: "\u228B", supsetneq: "\u228B", supplus: "\u2AC0", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swArr: "\u21D9", swnwar: "\u292A", szlig: "\xDF", target: "\u2316", tau: "\u03C4", tcaron: "\u0165", tcedil: "\u0163", tcy: "\u0442", telrec: "\u2315", tfr: "\u{1D531}", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", vartheta: "\u03D1", thorn: "\xFE", times: "\xD7", timesbar: "\u2A31", timesd: "\u2A30", topbot: "\u2336", topcir: "\u2AF1", topf: "\u{1D565}", topfork: "\u2ADA", tprime: "\u2034", triangle: "\u25B5", utri: "\u25B5", triangleq: "\u225C", trie: "\u225C", tridot: "\u25EC", triminus: "\u2A3A", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", tscr: "\u{1D4C9}", tscy: "\u0446", tshcy: "\u045B", tstrok: "\u0167", uHar: "\u2963", uacute: "\xFA", ubrcy: "\u045E", ubreve: "\u016D", ucirc: "\xFB", ucy: "\u0443", udblac: "\u0171", ufisht: "\u297E", ufr: "\u{1D532}", ugrave: "\xF9", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", umacr: "\u016B", uogon: "\u0173", uopf: "\u{1D566}", upsi: "\u03C5", upsilon: "\u03C5", upuparrows: "\u21C8", uuarr: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", uring: "\u016F", urtri: "\u25F9", uscr: "\u{1D4CA}", utdot: "\u22F0", utilde: "\u0169", uuml: "\xFC", uwangle: "\u29A7", vBar: "\u2AE8", vBarv: "\u2AE9", vangrt: "\u299C", varsubsetneq: "\u228A\uFE00", vsubne: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", vsubnE: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", vsupne: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vsupnE: "\u2ACC\uFE00", vcy: "\u0432", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", vfr: "\u{1D533}", vopf: "\u{1D567}", vscr: "\u{1D4CB}", vzigzag: "\u299A", wcirc: "\u0175", wedbar: "\u2A5F", wedgeq: "\u2259", weierp: "\u2118", wp: "\u2118", wfr: "\u{1D534}", wopf: "\u{1D568}", wscr: "\u{1D4CC}", xfr: "\u{1D535}", xi: "\u03BE", xnis: "\u22FB", xopf: "\u{1D569}", xscr: "\u{1D4CD}", yacute: "\xFD", yacy: "\u044F", ycirc: "\u0177", ycy: "\u044B", yen: "\xA5", yfr: "\u{1D536}", yicy: "\u0457", yopf: "\u{1D56A}", yscr: "\u{1D4CE}", yucy: "\u044E", yuml: "\xFF", zacute: "\u017A", zcaron: "\u017E", zcy: "\u0437", zdot: "\u017C", zeta: "\u03B6", zfr: "\u{1D537}", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" }, Ka = "\uE500";
        Ye2.ngsp = Ka;
        var Qa = [/@/, /^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
        function Ls(t, e) {
          if (e != null && !(Array.isArray(e) && e.length == 2)) throw new Error(`Expected '${t}' to be an array, [start, end].`);
          if (e != null) {
            let r = e[0], n = e[1];
            Qa.forEach((s) => {
              if (s.test(r) || s.test(n)) throw new Error(`['${r}', '${n}'] contains unusable interpolation symbol.`);
            });
          }
        }
        var Fr2 = class t {
          static fromArray(e) {
            return e ? (Ls("interpolation", e), new t(e[0], e[1])) : Nr2;
          }
          constructor(e, r) {
            this.start = e, this.end = r;
          }
        }, Nr2 = new Fr2("{{", "}}");
        var ft2 = class extends Ue2 {
          constructor(e, r, n) {
            super(n, e), this.tokenType = r;
          }
        }, Or2 = class {
          constructor(e, r, n) {
            this.tokens = e, this.errors = r, this.nonNormalizedIcuExpressions = n;
          }
        };
        function Ws(t, e, r, n = {}) {
          let s = new Mr2(new Te2(t, e), r, n);
          return s.tokenize(), new Or2(vo(s.tokens), s.errors, s.nonNormalizedIcuExpressions);
        }
        var go2 = /\r\n?/g;
        function je2(t) {
          return `Unexpected character "${t === 0 ? "EOF" : String.fromCharCode(t)}"`;
        }
        function Rs(t) {
          return `Unknown entity "${t}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
        }
        function Co(t, e) {
          return `Unable to parse entity "${e}" - ${t} character reference entities must end with ";"`;
        }
        var tr2;
        (function(t) {
          t.HEX = "hexadecimal", t.DEC = "decimal";
        })(tr2 || (tr2 = {}));
        var dt2 = class {
          constructor(e) {
            this.error = e;
          }
        }, Mr2 = class {
          constructor(e, r, n) {
            this._getTagContentType = r, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = false, this._fullNameStack = [], this.tokens = [], this.errors = [], this.nonNormalizedIcuExpressions = [], this._tokenizeIcu = n.tokenizeExpansionForms || false, this._interpolationConfig = n.interpolationConfig || Nr2, this._leadingTriviaCodePoints = n.leadingTriviaChars && n.leadingTriviaChars.map((i) => i.codePointAt(0) || 0), this._canSelfClose = n.canSelfClose || false, this._allowHtmComponentClosingTags = n.allowHtmComponentClosingTags || false;
            let s = n.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 };
            this._cursor = n.escapedString ? new qr2(e, s) : new rr2(e, s), this._preserveLineEndings = n.preserveLineEndings || false, this._i18nNormalizeLineEndingsInICUs = n.i18nNormalizeLineEndingsInICUs || false, this._tokenizeBlocks = n.tokenizeBlocks ?? true, this._tokenizeLet = n.tokenizeLet ?? true;
            try {
              this._cursor.init();
            } catch (i) {
              this.handleError(i);
            }
          }
          _processCarriageReturns(e) {
            return this._preserveLineEndings ? e : e.replace(go2, `
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
            return this._attemptCharCodeUntilFn((n) => at2(n) ? !e : Ms(n) ? (e = true, false) : true), this._cursor.getChars(r).trim();
          }
          _consumeBlockStart(e) {
            this._beginToken(25, e);
            let r = this._endToken([this._getBlockName()]);
            if (this._cursor.peek() === 40) if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(b2), this._attemptCharCode(41)) this._attemptCharCodeUntilFn(b2);
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
            for (this._attemptCharCodeUntilFn(qs); this._cursor.peek() !== 41 && this._cursor.peek() !== 0; ) {
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
              this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(qs);
            }
          }
          _consumeLetDeclaration(e) {
            if (this._beginToken(30, e), at2(this._cursor.peek())) this._attemptCharCodeUntilFn(b2);
            else {
              let s = this._endToken([this._cursor.getChars(e)]);
              s.type = 33;
              return;
            }
            let r = this._endToken([this._getLetDeclarationName()]);
            if (this._attemptCharCodeUntilFn(b2), !this._attemptCharCode(61)) {
              r.type = 33;
              return;
            }
            this._attemptCharCodeUntilFn((s) => b2(s) && !Rt2(s)), this._consumeLetDeclarationValue(), this._cursor.peek() === 59 ? (this._beginToken(32), this._endToken([]), this._cursor.advance()) : (r.type = 33, r.sourceSpan = this._cursor.getSpan(e));
          }
          _getLetDeclarationName() {
            let e = this._cursor.clone(), r = false;
            return this._attemptCharCodeUntilFn((n) => ot2(n) || n == 36 || n === 95 || r && It2(n) ? (r = true, false) : true), this._cursor.getChars(e).trim();
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
            if (Ao2(this._cursor.peek()) && this._isInExpansionForm()) return this._consumeExpansionCaseStart(), true;
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
            if (this._currentTokenStart === null) throw new ft2("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(r));
            if (this._currentTokenType === null) throw new ft2("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
            let n = { type: this._currentTokenType, parts: e, sourceSpan: (r ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) };
            return this.tokens.push(n), this._currentTokenStart = null, this._currentTokenType = null, n;
          }
          _createError(e, r) {
            this._isInExpansionForm() && (e += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
            let n = new ft2(e, this._currentTokenType, r);
            return this._currentTokenStart = null, this._currentTokenType = null, new dt2(n);
          }
          handleError(e) {
            if (e instanceof gt2 && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof dt2) this.errors.push(e.error);
            else throw e;
          }
          _attemptCharCode(e) {
            return this._cursor.peek() === e ? (this._cursor.advance(), true) : false;
          }
          _attemptCharCodeCaseInsensitive(e) {
            return Do2(this._cursor.peek(), e) ? (this._cursor.advance(), true) : false;
          }
          _requireCharCode(e) {
            let r = this._cursor.clone();
            if (!this._attemptCharCode(e)) throw this._createError(je2(this._cursor.peek()), this._cursor.getSpan(r));
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
            if (!this._attemptStr(e)) throw this._createError(je2(this._cursor.peek()), this._cursor.getSpan(r));
          }
          _requireStrCaseInsensitive(e) {
            let r = this._cursor.clone();
            if (!this._attemptStrCaseInsensitive(e)) throw this._createError(je2(this._cursor.peek()), this._cursor.getSpan(r));
          }
          _attemptCharCodeUntilFn(e) {
            for (; !e(this._cursor.peek()); ) this._cursor.advance();
          }
          _requireCharCodeUntilFn(e, r) {
            let n = this._cursor.clone();
            if (this._attemptCharCodeUntilFn(e), this._cursor.diff(n) < r) throw this._createError(je2(this._cursor.peek()), this._cursor.getSpan(n));
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
              if (this._attemptCharCodeUntilFn(_o2), this._cursor.peek() != 59) {
                this._cursor.advance();
                let a = n ? tr2.HEX : tr2.DEC;
                throw this._createError(Co(a, this._cursor.getChars(r)), this._cursor.getSpan());
              }
              let i = this._cursor.getChars(s);
              this._cursor.advance();
              try {
                let a = parseInt(i, n ? 16 : 10);
                this._endToken([String.fromCharCode(a), this._cursor.getChars(r)]);
              } catch {
                throw this._createError(Rs(this._cursor.getChars(r)), this._cursor.getSpan());
              }
            } else {
              let n = this._cursor.clone();
              if (this._attemptCharCodeUntilFn(Eo2), this._cursor.peek() != 59) this._beginToken(e, r), this._cursor = n, this._endToken(["&"]);
              else {
                let s = this._cursor.getChars(n);
                this._cursor.advance();
                let i = Ye2[s];
                if (!i) throw this._createError(Rs(s), this._cursor.getSpan(r));
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
            for (; this._cursor.peek() !== 58 && !So(this._cursor.peek()); ) this._cursor.advance();
            let n;
            this._cursor.peek() === 58 ? (r = this._cursor.getChars(e), this._cursor.advance(), n = this._cursor.clone()) : n = e, this._requireCharCodeUntilFn($s, r === "" ? 0 : 1);
            let s = this._cursor.getChars(n);
            return [r, s];
          }
          _consumeTagOpen(e) {
            let r, n, s, i = [];
            try {
              if (!ot2(this._cursor.peek())) throw this._createError(je2(this._cursor.peek()), this._cursor.getSpan(e));
              for (s = this._consumeTagOpenStart(e), n = s.parts[0], r = s.parts[1], this._attemptCharCodeUntilFn(b2); this._cursor.peek() !== 47 && this._cursor.peek() !== 62 && this._cursor.peek() !== 60 && this._cursor.peek() !== 0; ) {
                let [o, u] = this._consumeAttributeName();
                if (this._attemptCharCodeUntilFn(b2), this._attemptCharCode(61)) {
                  this._attemptCharCodeUntilFn(b2);
                  let p = this._consumeAttributeValue();
                  i.push({ prefix: o, name: u, value: p });
                } else i.push({ prefix: o, name: u });
                this._attemptCharCodeUntilFn(b2);
              }
              this._consumeTagOpenEnd();
            } catch (o) {
              if (o instanceof dt2) {
                s ? s.type = 4 : (this._beginToken(5, e), this._endToken(["<"]));
                return;
              }
              throw o;
            }
            if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === 2) return;
            let a = this._getTagContentType(r, n, this._fullNameStack.length > 0, i);
            this._handleFullNameStackForTagOpen(n, r), a === I2.RAW_TEXT ? this._consumeRawTextWithTagClose(n, r, false) : a === I2.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(n, r, true);
          }
          _consumeRawTextWithTagClose(e, r, n) {
            this._consumeRawText(n, () => !this._attemptCharCode(60) || !this._attemptCharCode(47) || (this._attemptCharCodeUntilFn(b2), !this._attemptStrCaseInsensitive(e ? `${e}:${r}` : r)) ? false : (this._attemptCharCodeUntilFn(b2), this._attemptCharCode(62))), this._beginToken(3), this._requireCharCodeUntilFn((s) => s === 62, 3), this._cursor.advance(), this._endToken([e, r]), this._handleFullNameStackForTagClose(e, r);
          }
          _consumeTagOpenStart(e) {
            this._beginToken(0, e);
            let r = this._consumePrefixAndName();
            return this._endToken(r);
          }
          _consumeAttributeName() {
            let e = this._cursor.peek();
            if (e === 39 || e === 34) throw this._createError(je2(e), this._cursor.getSpan());
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
              let r = () => $s(this._cursor.peek());
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
            if (this._beginToken(3, e), this._attemptCharCodeUntilFn(b2), this._allowHtmComponentClosingTags && this._attemptCharCode(47)) this._attemptCharCodeUntilFn(b2), this._requireCharCode(62), this._endToken([]);
            else {
              let [r, n] = this._consumePrefixAndName();
              this._attemptCharCodeUntilFn(b2), this._requireCharCode(62), this._endToken([r, n]), this._handleFullNameStackForTagClose(r, n);
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
            this._requireCharCode(44), this._attemptCharCodeUntilFn(b2), this._beginToken(7);
            let n = this._readUntil(44);
            this._endToken([n]), this._requireCharCode(44), this._attemptCharCodeUntilFn(b2);
          }
          _consumeExpansionCaseStart() {
            this._beginToken(21);
            let e = this._readUntil(123).trim();
            this._endToken([e]), this._attemptCharCodeUntilFn(b2), this._beginToken(22), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(b2), this._expansionCaseStack.push(22);
          }
          _consumeExpansionCaseEnd() {
            this._beginToken(23), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(b2), this._expansionCaseStack.pop();
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
              if (e.advance(), Ms(e.peek())) return true;
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
            let n = ze2(e, r);
            (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === n) && this._fullNameStack.push(n);
          }
          _handleFullNameStackForTagClose(e, r) {
            let n = ze2(e, r);
            this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === n && this._fullNameStack.pop();
          }
        };
        function b2(t) {
          return !at2(t) || t === 0;
        }
        function $s(t) {
          return at2(t) || t === 62 || t === 60 || t === 47 || t === 39 || t === 34 || t === 61 || t === 0;
        }
        function So(t) {
          return (t < 97 || 122 < t) && (t < 65 || 90 < t) && (t < 48 || t > 57);
        }
        function _o2(t) {
          return t === 59 || t === 0 || !Cs(t);
        }
        function Eo2(t) {
          return t === 59 || t === 0 || !ot2(t);
        }
        function Ao2(t) {
          return t !== 125;
        }
        function Do2(t, e) {
          return Os(t) === Os(e);
        }
        function Os(t) {
          return t >= 97 && t <= 122 ? t - 97 + 65 : t;
        }
        function Ms(t) {
          return ot2(t) || It2(t) || t === 95;
        }
        function qs(t) {
          return t !== 59 && b2(t);
        }
        function vo(t) {
          let e = [], r;
          for (let n = 0; n < t.length; n++) {
            let s = t[n];
            r && r.type === 5 && s.type === 5 || r && r.type === 16 && s.type === 16 ? (r.parts[0] += s.parts[0], r.sourceSpan.end = s.sourceSpan.end) : (r = s, e.push(r));
          }
          return e;
        }
        var rr2 = class t {
          constructor(e, r) {
            if (e instanceof t) {
              this.file = e.file, this.input = e.input, this.end = e.end;
              let n = e.state;
              this.state = { peek: n.peek, offset: n.offset, line: n.line, column: n.column };
            } else {
              if (!r) throw new Error("Programming error: the range argument must be provided with a file argument.");
              this.file = e, this.input = e.content, this.end = r.endPos, this.state = { peek: -1, offset: r.startPos, line: r.startLine, column: r.startCol };
            }
          }
          clone() {
            return new t(this);
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
            return new h2(s, i, a);
          }
          getChars(e) {
            return this.input.substring(e.state.offset, this.state.offset);
          }
          charAt(e) {
            return this.input.charCodeAt(e);
          }
          advanceState(e) {
            if (e.offset >= this.end) throw this.state = e, new gt2('Unexpected character "EOF"', this);
            let r = this.charAt(e.offset);
            r === 10 ? (e.line++, e.column = 0) : Rt2(r) || e.column++, e.offset++, this.updatePeek(e);
          }
          updatePeek(e) {
            e.peek = e.offset >= this.end ? 0 : this.charAt(e.offset);
          }
          locationFromCursor(e) {
            return new ae2(e.file, e.state.offset, e.state.line, e.state.column);
          }
        }, qr2 = class t extends rr2 {
          constructor(e, r) {
            e instanceof t ? (super(e), this.internalState = { ...e.internalState }) : (super(e, r), this.internalState = this.state);
          }
          advance() {
            this.state = this.internalState, super.advance(), this.processEscapeSequence();
          }
          init() {
            super.init(), this.processEscapeSequence();
          }
          clone() {
            return new t(this);
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
            } else if (wr2(e())) {
              let r = "", n = 0, s = this.clone();
              for (; wr2(e()) && n < 3; ) s = this.clone(), r += String.fromCodePoint(e()), this.advanceState(this.internalState), n++;
              this.state.peek = parseInt(r, 8), this.internalState = s.internalState;
            } else Rt2(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
          }
          decodeHexDigits(e, r) {
            let n = this.input.slice(e.internalState.offset, e.internalState.offset + r), s = parseInt(n, 16);
            if (isNaN(s)) throw e.state = e.internalState, new gt2("Invalid hexadecimal escape sequence", e);
            return s;
          }
        }, gt2 = class {
          constructor(e, r) {
            this.msg = e, this.cursor = r;
          }
        };
        var L2 = class t extends Ue2 {
          static create(e, r, n) {
            return new t(e, r, n);
          }
          constructor(e, r, n) {
            super(r, n), this.elementName = e;
          }
        }, Ur2 = class {
          constructor(e, r) {
            this.rootNodes = e, this.errors = r;
          }
        }, nr2 = class {
          constructor(e) {
            this.getTagDefinition = e;
          }
          parse(e, r, n, s = false, i) {
            let a = (D) => (R2, ...F) => D(R2.toLowerCase(), ...F), o = s ? this.getTagDefinition : a(this.getTagDefinition), u = (D) => o(D).getContentType(), p = s ? i : a(i), f = Ws(e, r, i ? (D, R2, F, c) => {
              let g = p(D, R2, F, c);
              return g !== void 0 ? g : u(D);
            } : u, n), d = n && n.canSelfClose || false, C = n && n.allowHtmComponentClosingTags || false, A = new Wr2(f.tokens, o, d, C, s);
            return A.build(), new Ur2(A.rootNodes, f.errors.concat(A.errors));
          }
        }, Wr2 = class t {
          constructor(e, r, n, s, i) {
            this.tokens = e, this.getTagDefinition = r, this.canSelfClose = n, this.allowHtmComponentClosingTags = s, this.isTagNameCaseSensitive = i, this._index = -1, this._containerStack = [], this.rootNodes = [], this.errors = [], this._advance();
          }
          build() {
            for (; this._peek.type !== 34; ) this._peek.type === 0 || this._peek.type === 4 ? this._consumeStartTag(this._advance()) : this._peek.type === 3 ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === 12 ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === 10 ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === 5 || this._peek.type === 7 || this._peek.type === 6 ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === 20 ? this._consumeExpansion(this._advance()) : this._peek.type === 25 ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === 27 ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === 29 ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === 30 ? (this._closeVoidElement(), this._consumeLet(this._advance())) : this._peek.type === 18 ? this._consumeDocType(this._advance()) : this._peek.type === 33 ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._advance();
            for (let e of this._containerStack) e instanceof Z2 && this.errors.push(L2.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`));
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
            this._addToParent(new Wt2(n, new h2(e.sourceSpan.start, (s || r).sourceSpan.end), [r]));
          }
          _consumeComment(e) {
            let r = this._advanceIf(7), n = this._advanceIf(11), s = r != null ? r.parts[0].trim() : null, i = n == null ? e.sourceSpan : new h2(e.sourceSpan.start, n.sourceSpan.end, e.sourceSpan.fullStart);
            this._addToParent(new jt2(s, i));
          }
          _consumeDocType(e) {
            let r = this._advanceIf(7), n = this._advanceIf(19), s = r != null ? r.parts[0].trim() : null, i = new h2(e.sourceSpan.start, (n || r || e).sourceSpan.end);
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
            let i = new h2(e.sourceSpan.start, this._peek.sourceSpan.end, e.sourceSpan.fullStart);
            this._addToParent(new zt2(r.parts[0], n.parts[0], s, i, r.sourceSpan)), this._advance();
          }
          _parseExpansionCase() {
            let e = this._advance();
            if (this._peek.type !== 22) return this.errors.push(L2.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
            let r = this._advance(), n = this._collectExpansionExpTokens(r);
            if (!n) return null;
            let s = this._advance();
            n.push({ type: 34, parts: [], sourceSpan: s.sourceSpan });
            let i = new t(n, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
            if (i.build(), i.errors.length > 0) return this.errors = this.errors.concat(i.errors), null;
            let a = new h2(e.sourceSpan.start, s.sourceSpan.end, e.sourceSpan.fullStart), o = new h2(r.sourceSpan.start, s.sourceSpan.end, r.sourceSpan.fullStart);
            return new Gt2(e.parts[0], i.rootNodes, a, e.sourceSpan, o);
          }
          _collectExpansionExpTokens(e) {
            let r = [], n = [22];
            for (; ; ) {
              if ((this._peek.type === 20 || this._peek.type === 22) && n.push(this._peek.type), this._peek.type === 23) if (zs(n, 22)) {
                if (n.pop(), n.length === 0) return r;
              } else return this.errors.push(L2.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
              if (this._peek.type === 24) if (zs(n, 20)) n.pop();
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
            for (; this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9; ) e = this._advance(), r.push(e), e.type === 8 ? s += e.parts.join("").replace(/&([^;]+);/g, Gs) : e.type === 9 ? s += e.parts[0] : s += e.parts.join("");
            if (s.length > 0) {
              let i = e.sourceSpan;
              this._addToParent(new Ut2(s, new h2(n.start, i.end, n.fullStart, n.details), r));
            }
          }
          _closeVoidElement() {
            let e = this._getContainer();
            e instanceof G2 && this.getTagDefinition(e.name).isVoid && this._containerStack.pop();
          }
          _consumeStartTag(e) {
            let [r, n] = e.parts, s = [];
            for (; this._peek.type === 14; ) s.push(this._consumeAttr(this._advance()));
            let i = this._getElementFullName(r, n, this._getClosestParentElement()), a = false;
            if (this._peek.type === 2) {
              this._advance(), a = true;
              let C = this.getTagDefinition(i);
              this.canSelfClose || C.canSelfClose || We2(i) !== null || C.isVoid || this.errors.push(L2.create(i, e.sourceSpan, `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`));
            } else this._peek.type === 1 && (this._advance(), a = false);
            let o = this._peek.sourceSpan.fullStart, u = new h2(e.sourceSpan.start, o, e.sourceSpan.fullStart), p = new h2(e.sourceSpan.start, o, e.sourceSpan.fullStart), l = new h2(e.sourceSpan.start.moveBy(1), e.sourceSpan.end), f = new G2(i, s, [], u, p, void 0, l), d = this._getContainer();
            this._pushContainer(f, d instanceof G2 && this.getTagDefinition(d.name).isClosedByChild(f.name)), a ? this._popContainer(i, G2, u) : e.type === 4 && (this._popContainer(i, G2, null), this.errors.push(L2.create(i, u, `Opening tag "${i}" not terminated.`)));
          }
          _pushContainer(e, r) {
            r && this._containerStack.pop(), this._addToParent(e), this._containerStack.push(e);
          }
          _consumeEndTag(e) {
            let r = this.allowHtmComponentClosingTags && e.parts.length === 0 ? null : this._getElementFullName(e.parts[0], e.parts[1], this._getClosestParentElement());
            if (r && this.getTagDefinition(r).isVoid) this.errors.push(L2.create(r, e.sourceSpan, `Void elements do not have end tags "${e.parts[1]}"`));
            else if (!this._popContainer(r, G2, e.sourceSpan)) {
              let n = `Unexpected closing tag "${r}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
              this.errors.push(L2.create(r, e.sourceSpan, n));
            }
          }
          _popContainer(e, r, n) {
            let s = false;
            for (let i = this._containerStack.length - 1; i >= 0; i--) {
              let a = this._containerStack[i];
              if (We2(a.name) ? a.name === e : (e == null || a.name.toLowerCase() === e.toLowerCase()) && a instanceof r) return a.endSourceSpan = n, a.sourceSpan.end = n !== null ? n.end : a.sourceSpan.end, this._containerStack.splice(i, this._containerStack.length - i), !s;
              (a instanceof Z2 || a instanceof G2 && !this.getTagDefinition(a.name).closedByParent) && (s = true);
            }
            return false;
          }
          _consumeAttr(e) {
            let r = ze2(e.parts[0], e.parts[1]), n = e.sourceSpan.end, s;
            this._peek.type === 15 && (s = this._advance());
            let i = "", a = [], o, u;
            if (this._peek.type === 16) for (o = this._peek.sourceSpan, u = this._peek.sourceSpan.end; this._peek.type === 16 || this._peek.type === 17 || this._peek.type === 9; ) {
              let f = this._advance();
              a.push(f), f.type === 17 ? i += f.parts.join("").replace(/&([^;]+);/g, Gs) : f.type === 9 ? i += f.parts[0] : i += f.parts.join(""), u = n = f.sourceSpan.end;
            }
            this._peek.type === 15 && (u = n = this._advance().sourceSpan.end);
            let l = o && u && new h2((s == null ? void 0 : s.sourceSpan.start) ?? o.start, u, (s == null ? void 0 : s.sourceSpan.fullStart) ?? o.fullStart);
            return new Yt2(r, i, new h2(e.sourceSpan.start, n, e.sourceSpan.fullStart), e.sourceSpan, l, a.length > 0 ? a : void 0, void 0);
          }
          _consumeBlockOpen(e) {
            let r = [];
            for (; this._peek.type === 28; ) {
              let o = this._advance();
              r.push(new ct2(o.parts[0], o.sourceSpan));
            }
            this._peek.type === 26 && this._advance();
            let n = this._peek.sourceSpan.fullStart, s = new h2(e.sourceSpan.start, n, e.sourceSpan.fullStart), i = new h2(e.sourceSpan.start, n, e.sourceSpan.fullStart), a = new Z2(e.parts[0], r, [], s, e.sourceSpan, i);
            this._pushContainer(a, false);
          }
          _consumeBlockClose(e) {
            this._popContainer(null, Z2, e.sourceSpan) || this.errors.push(L2.create(null, e.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'));
          }
          _consumeIncompleteBlock(e) {
            let r = [];
            for (; this._peek.type === 28; ) {
              let o = this._advance();
              r.push(new ct2(o.parts[0], o.sourceSpan));
            }
            let n = this._peek.sourceSpan.fullStart, s = new h2(e.sourceSpan.start, n, e.sourceSpan.fullStart), i = new h2(e.sourceSpan.start, n, e.sourceSpan.fullStart), a = new Z2(e.parts[0], r, [], s, e.sourceSpan, i);
            this._pushContainer(a, false), this._popContainer(null, Z2, null), this.errors.push(L2.create(e.parts[0], s, `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
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
            let i = s.sourceSpan.fullStart, a = new h2(e.sourceSpan.start, i, e.sourceSpan.fullStart), o = e.sourceSpan.toString().lastIndexOf(r), u = e.sourceSpan.start.moveBy(o), p = new h2(u, e.sourceSpan.end), l = new pt2(r, n.parts[0], a, p, n.sourceSpan);
            this._addToParent(l);
          }
          _consumeIncompleteLet(e) {
            let r = e.parts[0] ?? "", n = r ? ` "${r}"` : "";
            if (r.length > 0) {
              let s = e.sourceSpan.toString().lastIndexOf(r), i = e.sourceSpan.start.moveBy(s), a = new h2(i, e.sourceSpan.end), o = new h2(e.sourceSpan.start, e.sourceSpan.start.moveBy(0)), u = new pt2(r, "", e.sourceSpan, a, o);
              this._addToParent(u);
            }
            this.errors.push(L2.create(e.parts[0], e.sourceSpan, `Incomplete @let declaration${n}. @let declarations must be written as \`@let <name> = <value>;\``));
          }
          _getContainer() {
            return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
          }
          _getClosestParentElement() {
            for (let e = this._containerStack.length - 1; e > -1; e--) if (this._containerStack[e] instanceof G2) return this._containerStack[e];
            return null;
          }
          _addToParent(e) {
            let r = this._getContainer();
            r === null ? this.rootNodes.push(e) : r.children.push(e);
          }
          _getElementFullName(e, r, n) {
            if (e === "" && (e = this.getTagDefinition(r).implicitNamespacePrefix || "", e === "" && n != null)) {
              let s = ut2(n.name)[1];
              this.getTagDefinition(s).preventNamespaceInheritance || (e = We2(n.name));
            }
            return ze2(e, r);
          }
        };
        function zs(t, e) {
          return t.length > 0 && t[t.length - 1] === e;
        }
        function Gs(t, e) {
          return Ye2[e] !== void 0 ? Ye2[e] || t : /^#x[a-f0-9]+$/i.test(e) ? String.fromCodePoint(parseInt(e.slice(2), 16)) : /^#\d+$/.test(e) ? String.fromCodePoint(parseInt(e.slice(1), 10)) : t;
        }
        var sr2 = class extends nr2 {
          constructor() {
            super(Ge2);
          }
          parse(e, r, n, s = false, i) {
            return super.parse(e, r, n, s, i);
          }
        };
        var zr2 = null, yo2 = () => (zr2 || (zr2 = new sr2()), zr2);
        function Gr2(t, e = {}) {
          let { canSelfClose: r = false, allowHtmComponentClosingTags: n = false, isTagNameCaseSensitive: s = false, getTagContentType: i, tokenizeAngularBlocks: a = false, tokenizeAngularLetDeclaration: o = false } = e;
          return yo2().parse(t, "angular-html-parser", { tokenizeExpansionForms: a, interpolationConfig: void 0, canSelfClose: r, allowHtmComponentClosingTags: n, tokenizeBlocks: a, tokenizeLet: o }, s, i);
        }
        function wo2(t, e) {
          let r = new SyntaxError(t + " (" + e.loc.start.line + ":" + e.loc.start.column + ")");
          return Object.assign(r, e);
        }
        var Ys = wo2;
        var Ct = 3;
        function bo(t) {
          let e = t.slice(0, Ct);
          if (e !== "---" && e !== "+++") return;
          let r = t.indexOf(`
`, Ct);
          if (r === -1) return;
          let n = t.slice(Ct, r).trim(), s = t.indexOf(`
${e}`, r), i = n;
          if (i || (i = e === "+++" ? "toml" : "yaml"), s === -1 && e === "---" && i === "yaml" && (s = t.indexOf(`
...`, r)), s === -1) return;
          let a = s + 1 + Ct, o = t.charAt(a + 1);
          if (!/\s?/u.test(o)) return;
          let u = t.slice(0, a);
          return { type: "front-matter", language: i, explicitLanguage: n, value: t.slice(r + 1, s), startDelimiter: e, endDelimiter: u.slice(-Ct), raw: u };
        }
        function To(t) {
          let e = bo(t);
          if (!e) return { content: t };
          let { raw: r } = e;
          return { frontMatter: e, content: w(false, r, /[^\n]/gu, " ") + t.slice(r.length) };
        }
        var js = To;
        var ir2 = { attrs: true, children: true, cases: true, expression: true }, Ks = /* @__PURE__ */ new Set(["parent"]), ar2 = class t {
          constructor(e = {}) {
            for (let r of /* @__PURE__ */ new Set([...Ks, ...Object.keys(e)])) this.setProperty(r, e[r]);
          }
          setProperty(e, r) {
            if (this[e] !== r) {
              if (e in ir2 && (r = r.map((n) => this.createChild(n))), !Ks.has(e)) {
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
                let i = xo2(s, (a) => a.map(e));
                r !== s && (r || (r = new t({ parent: this.parent })), r.setProperty(n, i));
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
            let r = e instanceof t ? e.clone() : new t(e);
            return r.setProperty("parent", this), r;
          }
          insertChildBefore(e, r) {
            this.children.splice(this.children.indexOf(e), 0, this.createChild(r));
          }
          removeChild(e) {
            this.children.splice(this.children.indexOf(e), 1);
          }
          replaceChild(e, r) {
            this.children[this.children.indexOf(e)] = this.createChild(r);
          }
          clone() {
            return new t(this);
          }
          get firstChild() {
            var e;
            return (e = this.children) == null ? void 0 : e[0];
          }
          get lastChild() {
            var e;
            return (e = this.children) == null ? void 0 : e[this.children.length - 1];
          }
          get prev() {
            var e, r;
            return (r = (e = this.parent) == null ? void 0 : e.children) == null ? void 0 : r[this.parent.children.indexOf(this) - 1];
          }
          get next() {
            var e, r;
            return (r = (e = this.parent) == null ? void 0 : e.children) == null ? void 0 : r[this.parent.children.indexOf(this) + 1];
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
        function xo2(t, e) {
          let r = t.map(e);
          return r.some((n, s) => n !== t[s]) ? r : t;
        }
        var ko2 = [{ regex: /^(\[if([^\]]*)\]>)(.*?)<!\s*\[endif\]$/su, parse: Bo2 }, { regex: /^\[if([^\]]*)\]><!$/u, parse: Lo2 }, { regex: /^<!\s*\[endif\]$/u, parse: Fo2 }];
        function Qs(t, e) {
          if (t.value) for (let { regex: r, parse: n } of ko2) {
            let s = t.value.match(r);
            if (s) return n(t, e, s);
          }
          return null;
        }
        function Bo2(t, e, r) {
          let [, n, s, i] = r, a = 4 + n.length, o = t.sourceSpan.start.moveBy(a), u = o.moveBy(i.length), [p, l] = (() => {
            try {
              return [true, e(i, o).children];
            } catch {
              return [false, [{ type: "text", value: i, sourceSpan: new h2(o, u) }]];
            }
          })();
          return { type: "ieConditionalComment", complete: p, children: l, condition: w(false, s.trim(), /\s+/gu, " "), sourceSpan: t.sourceSpan, startSourceSpan: new h2(t.sourceSpan.start, o), endSourceSpan: new h2(u, t.sourceSpan.end) };
        }
        function Lo2(t, e, r) {
          let [, n] = r;
          return { type: "ieConditionalStartComment", condition: w(false, n.trim(), /\s+/gu, " "), sourceSpan: t.sourceSpan };
        }
        function Fo2(t) {
          return { type: "ieConditionalEndComment", sourceSpan: t.sourceSpan };
        }
        var or2 = /* @__PURE__ */ new Map([["*", /* @__PURE__ */ new Set(["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inert", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "popover", "slot", "spellcheck", "style", "tabindex", "title", "translate", "writingsuggestions"])], ["a", /* @__PURE__ */ new Set(["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"])], ["applet", /* @__PURE__ */ new Set(["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"])], ["area", /* @__PURE__ */ new Set(["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"])], ["audio", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"])], ["base", /* @__PURE__ */ new Set(["href", "target"])], ["basefont", /* @__PURE__ */ new Set(["color", "face", "size"])], ["blockquote", /* @__PURE__ */ new Set(["cite"])], ["body", /* @__PURE__ */ new Set(["alink", "background", "bgcolor", "link", "text", "vlink"])], ["br", /* @__PURE__ */ new Set(["clear"])], ["button", /* @__PURE__ */ new Set(["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "popovertarget", "popovertargetaction", "type", "value"])], ["canvas", /* @__PURE__ */ new Set(["height", "width"])], ["caption", /* @__PURE__ */ new Set(["align"])], ["col", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["colgroup", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["data", /* @__PURE__ */ new Set(["value"])], ["del", /* @__PURE__ */ new Set(["cite", "datetime"])], ["details", /* @__PURE__ */ new Set(["name", "open"])], ["dialog", /* @__PURE__ */ new Set(["open"])], ["dir", /* @__PURE__ */ new Set(["compact"])], ["div", /* @__PURE__ */ new Set(["align"])], ["dl", /* @__PURE__ */ new Set(["compact"])], ["embed", /* @__PURE__ */ new Set(["height", "src", "type", "width"])], ["fieldset", /* @__PURE__ */ new Set(["disabled", "form", "name"])], ["font", /* @__PURE__ */ new Set(["color", "face", "size"])], ["form", /* @__PURE__ */ new Set(["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"])], ["frame", /* @__PURE__ */ new Set(["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"])], ["frameset", /* @__PURE__ */ new Set(["cols", "rows"])], ["h1", /* @__PURE__ */ new Set(["align"])], ["h2", /* @__PURE__ */ new Set(["align"])], ["h3", /* @__PURE__ */ new Set(["align"])], ["h4", /* @__PURE__ */ new Set(["align"])], ["h5", /* @__PURE__ */ new Set(["align"])], ["h6", /* @__PURE__ */ new Set(["align"])], ["head", /* @__PURE__ */ new Set(["profile"])], ["hr", /* @__PURE__ */ new Set(["align", "noshade", "size", "width"])], ["html", /* @__PURE__ */ new Set(["manifest", "version"])], ["iframe", /* @__PURE__ */ new Set(["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"])], ["img", /* @__PURE__ */ new Set(["align", "alt", "border", "crossorigin", "decoding", "fetchpriority", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"])], ["input", /* @__PURE__ */ new Set(["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "popovertarget", "popovertargetaction", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"])], ["ins", /* @__PURE__ */ new Set(["cite", "datetime"])], ["isindex", /* @__PURE__ */ new Set(["prompt"])], ["label", /* @__PURE__ */ new Set(["for", "form"])], ["legend", /* @__PURE__ */ new Set(["align"])], ["li", /* @__PURE__ */ new Set(["type", "value"])], ["link", /* @__PURE__ */ new Set(["as", "blocking", "charset", "color", "crossorigin", "disabled", "fetchpriority", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"])], ["map", /* @__PURE__ */ new Set(["name"])], ["menu", /* @__PURE__ */ new Set(["compact"])], ["meta", /* @__PURE__ */ new Set(["charset", "content", "http-equiv", "media", "name", "scheme"])], ["meter", /* @__PURE__ */ new Set(["high", "low", "max", "min", "optimum", "value"])], ["object", /* @__PURE__ */ new Set(["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"])], ["ol", /* @__PURE__ */ new Set(["compact", "reversed", "start", "type"])], ["optgroup", /* @__PURE__ */ new Set(["disabled", "label"])], ["option", /* @__PURE__ */ new Set(["disabled", "label", "selected", "value"])], ["output", /* @__PURE__ */ new Set(["for", "form", "name"])], ["p", /* @__PURE__ */ new Set(["align"])], ["param", /* @__PURE__ */ new Set(["name", "type", "value", "valuetype"])], ["pre", /* @__PURE__ */ new Set(["width"])], ["progress", /* @__PURE__ */ new Set(["max", "value"])], ["q", /* @__PURE__ */ new Set(["cite"])], ["script", /* @__PURE__ */ new Set(["async", "blocking", "charset", "crossorigin", "defer", "fetchpriority", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"])], ["select", /* @__PURE__ */ new Set(["autocomplete", "disabled", "form", "multiple", "name", "required", "size"])], ["slot", /* @__PURE__ */ new Set(["name"])], ["source", /* @__PURE__ */ new Set(["height", "media", "sizes", "src", "srcset", "type", "width"])], ["style", /* @__PURE__ */ new Set(["blocking", "media", "type"])], ["table", /* @__PURE__ */ new Set(["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"])], ["tbody", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["td", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["template", /* @__PURE__ */ new Set(["shadowrootclonable", "shadowrootdelegatesfocus", "shadowrootmode"])], ["textarea", /* @__PURE__ */ new Set(["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"])], ["tfoot", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["th", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["thead", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["time", /* @__PURE__ */ new Set(["datetime"])], ["tr", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "valign"])], ["track", /* @__PURE__ */ new Set(["default", "kind", "label", "src", "srclang"])], ["ul", /* @__PURE__ */ new Set(["compact", "type"])], ["video", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"])]]);
        var Xs = /* @__PURE__ */ new Set(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]);
        function No(t) {
          if (t.type === "block") {
            if (t.name = w(false, t.name.toLowerCase(), /\s+/gu, " ").trim(), t.type = "angularControlFlowBlock", !qe2(t.parameters)) {
              delete t.parameters;
              return;
            }
            for (let e of t.parameters) e.type = "angularControlFlowBlockParameter";
            t.parameters = { type: "angularControlFlowBlockParameters", children: t.parameters, sourceSpan: new h2(t.parameters[0].sourceSpan.start, X2(false, t.parameters, -1).sourceSpan.end) };
          }
        }
        function Po2(t) {
          t.type === "letDeclaration" && (t.type = "angularLetDeclaration", t.id = t.name, t.init = { type: "angularLetDeclarationInitializer", sourceSpan: new h2(t.valueSpan.start, t.valueSpan.end), value: t.value }, delete t.name, delete t.value);
        }
        function Io2(t) {
          (t.type === "plural" || t.type === "select") && (t.clause = t.type, t.type = "angularIcuExpression"), t.type === "expansionCase" && (t.type = "angularIcuCase");
        }
        function Zs(t, e, r) {
          let { name: n, canSelfClose: s = true, normalizeTagName: i = false, normalizeAttributeName: a = false, allowHtmComponentClosingTags: o = false, isTagNameCaseSensitive: u = false, shouldParseAsRawText: p } = e, { rootNodes: l, errors: f } = Gr2(t, { canSelfClose: s, allowHtmComponentClosingTags: o, isTagNameCaseSensitive: u, getTagContentType: p ? (...c) => p(...c) ? I2.RAW_TEXT : void 0 : void 0, tokenizeAngularBlocks: n === "angular" ? true : void 0, tokenizeAngularLetDeclaration: n === "angular" ? true : void 0 });
          if (n === "vue") {
            if (l.some((x2) => x2.type === "docType" && x2.value === "html" || x2.type === "element" && x2.name.toLowerCase() === "html")) return Zs(t, ti2, r);
            let g, y2 = () => g ?? (g = Gr2(t, { canSelfClose: s, allowHtmComponentClosingTags: o, isTagNameCaseSensitive: u })), M2 = (x2) => y2().rootNodes.find(({ startSourceSpan: V2 }) => V2 && V2.start.offset === x2.startSourceSpan.start.offset) ?? x2;
            for (let [x2, V2] of l.entries()) {
              let { endSourceSpan: jr2, startSourceSpan: ri2 } = V2;
              if (jr2 === null) f = y2().errors, l[x2] = M2(V2);
              else if (Ro2(V2, r)) {
                let Kr2 = y2().errors.find((Qr2) => Qr2.span.start.offset > ri2.start.offset && Qr2.span.start.offset < jr2.end.offset);
                Kr2 && Js(Kr2), l[x2] = M2(V2);
              }
            }
          }
          f.length > 0 && Js(f[0]);
          let d = (c) => {
            let g = c.name.startsWith(":") ? c.name.slice(1).split(":")[0] : null, y2 = c.nameSpan.toString(), M2 = g !== null && y2.startsWith(`${g}:`), x2 = M2 ? y2.slice(g.length + 1) : y2;
            c.name = x2, c.namespace = g, c.hasExplicitNamespace = M2;
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
          }, A = (c, g) => {
            let y2 = c.toLowerCase();
            return g(y2) ? y2 : c;
          }, D = (c) => {
            if (c.type === "element" && (i && (!c.namespace || c.namespace === c.tagDefinition.implicitNamespacePrefix || Se2(c)) && (c.name = A(c.name, (g) => Xs.has(g))), a)) for (let g of c.attrs) g.namespace || (g.name = A(g.name, (y2) => or2.has(c.name) && (or2.get("*").has(y2) || or2.get(c.name).has(y2))));
          }, R2 = (c) => {
            c.sourceSpan && c.endSourceSpan && (c.sourceSpan = new h2(c.sourceSpan.start, c.endSourceSpan.end));
          }, F = (c) => {
            if (c.type === "element") {
              let g = Ge2(u ? c.name : c.name.toLowerCase());
              !c.namespace || c.namespace === g.implicitNamespacePrefix || Se2(c) ? c.tagDefinition = g : c.tagDefinition = Ge2("");
            }
          };
          return Qt2(new class extends ht2 {
            visitExpansionCase(c, g) {
              n === "angular" && this.visitChildren(g, (y2) => {
                y2(c.expression);
              });
            }
            visit(c) {
              C(c), F(c), D(c), R2(c);
            }
          }(), l), l;
        }
        function Ro2(t, e) {
          var n;
          if (t.type !== "element" || t.name !== "template") return false;
          let r = (n = t.attrs.find((s) => s.name === "lang")) == null ? void 0 : n.value;
          return !r || Oe2(e, { language: r }) === "html";
        }
        function Js(t) {
          let { msg: e, span: { start: r, end: n } } = t;
          throw Ys(e, { loc: { start: { line: r.line + 1, column: r.col + 1 }, end: { line: n.line + 1, column: n.col + 1 } }, cause: t });
        }
        function ei2(t, e, r = {}, n = true) {
          let { frontMatter: s, content: i } = n ? js(t) : { frontMatter: null, content: t }, a = new Te2(t, r.filepath), o = new ae2(a, 0, 0, 0), u = o.moveBy(t.length), p = { type: "root", sourceSpan: new h2(o, u), children: Zs(i, e, r) };
          if (s) {
            let d = new ae2(a, 0, 0, 0), C = d.moveBy(s.raw.length);
            s.sourceSpan = new h2(d, C), p.children.unshift(s);
          }
          let l = new ar2(p), f = (d, C) => {
            let { offset: A } = C, D = w(false, t.slice(0, A), /[^\n\r]/gu, " "), F = ei2(D + d, e, r, false);
            F.sourceSpan = new h2(C, X2(false, F.children, -1).sourceSpan.end);
            let c = F.children[0];
            return c.length === A ? F.children.shift() : (c.sourceSpan = new h2(c.sourceSpan.start.moveBy(A), c.sourceSpan.end), c.value = c.value.slice(A)), F;
          };
          return l.walk((d) => {
            if (d.type === "comment") {
              let C = Qs(d, f);
              C && d.parent.replaceChild(d, C);
            }
            No(d), Po2(d), Io2(d);
          }), l;
        }
        function ur2(t) {
          return { parse: (e, r) => ei2(e, t, r), hasPragma: os, astFormat: "html", locStart: se2, locEnd: ie2 };
        }
        var ti2 = { name: "html", normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true }, $o2 = ur2(ti2), Oo = ur2({ name: "angular" }), Mo2 = ur2({ name: "vue", isTagNameCaseSensitive: true, shouldParseAsRawText(t, e, r, n) {
          return t.toLowerCase() !== "html" && !r && (t !== "template" || n.some(({ name: s, value: i }) => s === "lang" && i !== "html" && i !== "" && i !== void 0));
        } }), qo2 = ur2({ name: "lwc", canSelfClose: false });
        var Ho2 = { html: As };
        return oi2(Vo2);
      });
    }
  });

  // node_modules/@forsakringskassan/docs-live-example/dist/esm/index.js
  var esm_exports = {};
  __export(esm_exports, {
    LiveExample: () => LiveExample_default2,
    createElement: () => createElement
  });
  var import_vue = __require("vue");
  var import_vue2 = __require("vue");
  var import_vue3 = __require("vue");

  // node_modules/prettier/standalone.mjs
  var yu = Object.create;
  var He = Object.defineProperty;
  var Au = Object.getOwnPropertyDescriptor;
  var Bu = Object.getOwnPropertyNames;
  var wu = Object.getPrototypeOf;
  var xu = Object.prototype.hasOwnProperty;
  var sr = (e) => {
    throw TypeError(e);
  };
  var _u = (e, t) => () => (e && (t = e(e = 0)), t);
  var At = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
  var We = (e, t) => {
    for (var r in t) He(e, r, { get: t[r], enumerable: true });
  };
  var ar = (e, t, r, n) => {
    if (t && typeof t == "object" || typeof t == "function") for (let o of Bu(t)) !xu.call(e, o) && o !== r && He(e, o, { get: () => t[o], enumerable: !(n = Au(t, o)) || n.enumerable });
    return e;
  };
  var Me = (e, t, r) => (r = e != null ? yu(wu(e)) : {}, ar(t || !e || !e.__esModule ? He(r, "default", { value: e, enumerable: true }) : r, e));
  var vu = (e) => ar(He({}, "__esModule", { value: true }), e);
  var bu = (e, t, r) => t.has(e) || sr("Cannot " + r);
  var Dr = (e, t, r) => t.has(e) ? sr("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r);
  var pe = (e, t, r) => (bu(e, t, "access private method"), r);
  var it = At((ia, sn) => {
    "use strict";
    var on = new Proxy(String, { get: () => on });
    sn.exports = on;
  });
  var Tn = {};
  We(Tn, { default: () => _o, shouldHighlight: () => xo });
  var xo;
  var _o;
  var kn = _u(() => {
    xo = () => false, _o = String;
  });
  var Pn = At((bD, Xt) => {
    var g = String, Ln = function() {
      return { isColorSupported: false, reset: g, bold: g, dim: g, italic: g, underline: g, inverse: g, hidden: g, strikethrough: g, black: g, red: g, green: g, yellow: g, blue: g, magenta: g, cyan: g, white: g, gray: g, bgBlack: g, bgRed: g, bgGreen: g, bgYellow: g, bgBlue: g, bgMagenta: g, bgCyan: g, bgWhite: g };
    };
    Xt.exports = Ln();
    Xt.exports.createColors = Ln;
  });
  var $n = At((Ct) => {
    "use strict";
    Object.defineProperty(Ct, "__esModule", { value: true });
    Ct.codeFrameColumns = Mn;
    Ct.default = To;
    var In = (kn(), vu(Tn)), Hn = vo(Pn(), true);
    function Wn(e) {
      if (typeof WeakMap != "function") return null;
      var t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
      return (Wn = function(n) {
        return n ? r : t;
      })(e);
    }
    function vo(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || typeof e != "object" && typeof e != "function") return { default: e };
      var r = Wn(t);
      if (r && r.has(e)) return r.get(e);
      var n = { __proto__: null }, o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var u in e) if (u !== "default" && {}.hasOwnProperty.call(e, u)) {
        var i = o ? Object.getOwnPropertyDescriptor(e, u) : null;
        i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u];
      }
      return n.default = e, r && r.set(e, n), n;
    }
    var bo = Hn.default, Rn = (e, t) => (r) => e(t(r)), Zt;
    function Oo(e) {
      if (e) {
        var t;
        return (t = Zt) != null || (Zt = (0, Hn.createColors)(true)), Zt;
      }
      return bo;
    }
    var Yn = false;
    function So(e) {
      return { gutter: e.gray, marker: Rn(e.red, e.bold), message: Rn(e.red, e.bold) };
    }
    var jn = /\r\n|[\n\r\u2028\u2029]/;
    function No(e, t, r) {
      let n = Object.assign({ column: 0, line: -1 }, e.start), o = Object.assign({}, n, e.end), { linesAbove: u = 2, linesBelow: i = 3 } = r || {}, s = n.line, a = n.column, D = o.line, l = o.column, d = Math.max(s - (u + 1), 0), f = Math.min(t.length, D + i);
      s === -1 && (d = 0), D === -1 && (f = t.length);
      let p = D - s, c = {};
      if (p) for (let F = 0; F <= p; F++) {
        let m = F + s;
        if (!a) c[m] = true;
        else if (F === 0) {
          let E = t[m - 1].length;
          c[m] = [a, E - a + 1];
        } else if (F === p) c[m] = [0, l];
        else {
          let E = t[m - F].length;
          c[m] = [0, E];
        }
      }
      else a === l ? a ? c[s] = [a, 0] : c[s] = true : c[s] = [a, l - a];
      return { start: d, end: f, markerLines: c };
    }
    function Mn(e, t, r = {}) {
      let n = (r.highlightCode || r.forceColor) && (0, In.shouldHighlight)(r), o = Oo(r.forceColor), u = So(o), i = (F, m) => n ? F(m) : m, s = e.split(jn), { start: a, end: D, markerLines: l } = No(t, s, r), d = t.start && typeof t.start.column == "number", f = String(D).length, c = (n ? (0, In.default)(e, r) : e).split(jn, D).slice(a, D).map((F, m) => {
        let E = a + 1 + m, w = ` ${` ${E}`.slice(-f)} |`, h2 = l[E], C = !l[E + 1];
        if (h2) {
          let k = "";
          if (Array.isArray(h2)) {
            let v = F.slice(0, Math.max(h2[0] - 1, 0)).replace(/[^\t]/g, " "), $ = h2[1] || 1;
            k = [`
 `, i(u.gutter, w.replace(/\d/g, " ")), " ", v, i(u.marker, "^").repeat($)].join(""), C && r.message && (k += " " + i(u.message, r.message));
          }
          return [i(u.marker, ">"), i(u.gutter, w), F.length > 0 ? ` ${F}` : "", k].join("");
        } else return ` ${i(u.gutter, w)}${F.length > 0 ? ` ${F}` : ""}`;
      }).join(`
`);
      return r.message && !d && (c = `${" ".repeat(f + 1)}${r.message}
${c}`), n ? o.reset(c) : c;
    }
    function To(e, t, r, n = {}) {
      if (!Yn) {
        Yn = true;
        let u = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
        {
          let i = new Error(u);
          i.name = "DeprecationWarning", console.warn(new Error(u));
        }
      }
      return r = Math.max(r, 0), Mn(e, { start: { column: r, line: t } }, n);
    }
  });
  var ir = {};
  We(ir, { __debug: () => di, check: () => fi, doc: () => nr, format: () => gu, formatWithCursor: () => Cu, getSupportInfo: () => pi, util: () => or, version: () => fu });
  var Ou = (e, t, r, n) => {
    if (!(e && t == null)) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
  };
  var ne = Ou;
  function Z() {
  }
  Z.prototype = { diff: function(t, r) {
    var n, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = o.callback;
    typeof o == "function" && (u = o, o = {}), this.options = o;
    var i = this;
    function s(h2) {
      return u ? (setTimeout(function() {
        u(void 0, h2);
      }, 0), true) : h2;
    }
    t = this.castInput(t), r = this.castInput(r), t = this.removeEmpty(this.tokenize(t)), r = this.removeEmpty(this.tokenize(r));
    var a = r.length, D = t.length, l = 1, d = a + D;
    o.maxEditLength && (d = Math.min(d, o.maxEditLength));
    var f = (n = o.timeout) !== null && n !== void 0 ? n : 1 / 0, p = Date.now() + f, c = [{ oldPos: -1, lastComponent: void 0 }], F = this.extractCommon(c[0], r, t, 0);
    if (c[0].oldPos + 1 >= D && F + 1 >= a) return s([{ value: this.join(r), count: r.length }]);
    var m = -1 / 0, E = 1 / 0;
    function A() {
      for (var h2 = Math.max(m, -l); h2 <= Math.min(E, l); h2 += 2) {
        var C = void 0, k = c[h2 - 1], v = c[h2 + 1];
        k && (c[h2 - 1] = void 0);
        var $ = false;
        if (v) {
          var ye = v.oldPos - h2;
          $ = v && 0 <= ye && ye < a;
        }
        var yt = k && k.oldPos + 1 < D;
        if (!$ && !yt) {
          c[h2] = void 0;
          continue;
        }
        if (!yt || $ && k.oldPos + 1 < v.oldPos ? C = i.addToPath(v, true, void 0, 0) : C = i.addToPath(k, void 0, true, 1), F = i.extractCommon(C, r, t, h2), C.oldPos + 1 >= D && F + 1 >= a) return s(Su(i, C.lastComponent, r, t, i.useLongestToken));
        c[h2] = C, C.oldPos + 1 >= D && (E = Math.min(E, h2 - 1)), F + 1 >= a && (m = Math.max(m, h2 + 1));
      }
      l++;
    }
    if (u) (function h2() {
      setTimeout(function() {
        if (l > d || Date.now() > p) return u();
        A() || h2();
      }, 0);
    })();
    else for (; l <= d && Date.now() <= p; ) {
      var w = A();
      if (w) return w;
    }
  }, addToPath: function(t, r, n, o) {
    var u = t.lastComponent;
    return u && u.added === r && u.removed === n ? { oldPos: t.oldPos + o, lastComponent: { count: u.count + 1, added: r, removed: n, previousComponent: u.previousComponent } } : { oldPos: t.oldPos + o, lastComponent: { count: 1, added: r, removed: n, previousComponent: u } };
  }, extractCommon: function(t, r, n, o) {
    for (var u = r.length, i = n.length, s = t.oldPos, a = s - o, D = 0; a + 1 < u && s + 1 < i && this.equals(r[a + 1], n[s + 1]); ) a++, s++, D++;
    return D && (t.lastComponent = { count: D, previousComponent: t.lastComponent }), t.oldPos = s, a;
  }, equals: function(t, r) {
    return this.options.comparator ? this.options.comparator(t, r) : t === r || this.options.ignoreCase && t.toLowerCase() === r.toLowerCase();
  }, removeEmpty: function(t) {
    for (var r = [], n = 0; n < t.length; n++) t[n] && r.push(t[n]);
    return r;
  }, castInput: function(t) {
    return t;
  }, tokenize: function(t) {
    return t.split("");
  }, join: function(t) {
    return t.join("");
  } };
  function Su(e, t, r, n, o) {
    for (var u = [], i; t; ) u.push(t), i = t.previousComponent, delete t.previousComponent, t = i;
    u.reverse();
    for (var s = 0, a = u.length, D = 0, l = 0; s < a; s++) {
      var d = u[s];
      if (d.removed) {
        if (d.value = e.join(n.slice(l, l + d.count)), l += d.count, s && u[s - 1].added) {
          var p = u[s - 1];
          u[s - 1] = u[s], u[s] = p;
        }
      } else {
        if (!d.added && o) {
          var f = r.slice(D, D + d.count);
          f = f.map(function(F, m) {
            var E = n[l + m];
            return E.length > F.length ? E : F;
          }), d.value = e.join(f);
        } else d.value = e.join(r.slice(D, D + d.count));
        D += d.count, d.added || (l += d.count);
      }
    }
    var c = u[a - 1];
    return a > 1 && typeof c.value == "string" && (c.added || c.removed) && e.equals("", c.value) && (u[a - 2].value += c.value, u.pop()), u;
  }
  var hi = new Z();
  var lr = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
  var cr = /\S/;
  var fr = new Z();
  fr.equals = function(e, t) {
    return this.options.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e === t || this.options.ignoreWhitespace && !cr.test(e) && !cr.test(t);
  };
  fr.tokenize = function(e) {
    for (var t = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), r = 0; r < t.length - 1; r++) !t[r + 1] && t[r + 2] && lr.test(t[r]) && lr.test(t[r + 2]) && (t[r] += t[r + 2], t.splice(r + 1, 2), r--);
    return t;
  };
  var pr = new Z();
  pr.tokenize = function(e) {
    this.options.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
    var t = [], r = e.split(/(\n|\r\n)/);
    r[r.length - 1] || r.pop();
    for (var n = 0; n < r.length; n++) {
      var o = r[n];
      n % 2 && !this.options.newlineIsToken ? t[t.length - 1] += o : (this.options.ignoreWhitespace && (o = o.trim()), t.push(o));
    }
    return t;
  };
  var Nu = new Z();
  Nu.tokenize = function(e) {
    return e.split(/(\S.+?[.!?])(?=\s+|$)/);
  };
  var Tu = new Z();
  Tu.tokenize = function(e) {
    return e.split(/([{}:;,]|\s+)/);
  };
  function $e(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $e = function(t) {
      return typeof t;
    } : $e = function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, $e(e);
  }
  var ku = Object.prototype.toString;
  var Ae = new Z();
  Ae.useLongestToken = true;
  Ae.tokenize = pr.tokenize;
  Ae.castInput = function(e) {
    var t = this.options, r = t.undefinedReplacement, n = t.stringifyReplacer, o = n === void 0 ? function(u, i) {
      return typeof i > "u" ? r : i;
    } : n;
    return typeof e == "string" ? e : JSON.stringify(Bt(e, null, null, o), o, "  ");
  };
  Ae.equals = function(e, t) {
    return Z.prototype.equals.call(Ae, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"));
  };
  function Bt(e, t, r, n, o) {
    t = t || [], r = r || [], n && (e = n(o, e));
    var u;
    for (u = 0; u < t.length; u += 1) if (t[u] === e) return r[u];
    var i;
    if (ku.call(e) === "[object Array]") {
      for (t.push(e), i = new Array(e.length), r.push(i), u = 0; u < e.length; u += 1) i[u] = Bt(e[u], t, r, n, o);
      return t.pop(), r.pop(), i;
    }
    if (e && e.toJSON && (e = e.toJSON()), $e(e) === "object" && e !== null) {
      t.push(e), i = {}, r.push(i);
      var s = [], a;
      for (a in e) e.hasOwnProperty(a) && s.push(a);
      for (s.sort(), u = 0; u < s.length; u += 1) a = s[u], i[a] = Bt(e[a], t, r, n, a);
      t.pop(), r.pop();
    } else i = e;
    return i;
  }
  var Ve = new Z();
  Ve.tokenize = function(e) {
    return e.slice();
  };
  Ve.join = Ve.removeEmpty = function(e) {
    return e;
  };
  function dr(e, t, r) {
    return Ve.diff(e, t, r);
  }
  function Fr(e) {
    let t = e.indexOf("\r");
    return t >= 0 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
  }
  function Be(e) {
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
  function wt(e, t) {
    let r;
    switch (t) {
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
        throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
    }
    let n = e.match(r);
    return n ? n.length : 0;
  }
  function mr(e) {
    return ne(false, e, /\r\n?/gu, `
`);
  }
  var U = "string";
  var W = "array";
  var z = "cursor";
  var L = "indent";
  var P = "align";
  var I = "trim";
  var x = "group";
  var S = "fill";
  var _ = "if-break";
  var R = "indent-if-break";
  var Y = "line-suffix";
  var j = "line-suffix-boundary";
  var B = "line";
  var N = "label";
  var b = "break-parent";
  var Ue = /* @__PURE__ */ new Set([z, L, P, I, x, S, _, R, Y, j, B, N, b]);
  function Lu(e) {
    if (typeof e == "string") return U;
    if (Array.isArray(e)) return W;
    if (!e) return;
    let { type: t } = e;
    if (Ue.has(t)) return t;
  }
  var G = Lu;
  var Pu = (e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e);
  function Iu(e) {
    let t = e === null ? "null" : typeof e;
    if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
    if (G(e)) throw new Error("doc is valid.");
    let r = Object.prototype.toString.call(e);
    if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
    let n = Pu([...Ue].map((o) => `'${o}'`));
    return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
  }
  var xt = class extends Error {
    name = "InvalidDocError";
    constructor(t) {
      super(Iu(t)), this.doc = t;
    }
  };
  var Q = xt;
  var Er = {};
  function Ru(e, t, r, n) {
    let o = [e];
    for (; o.length > 0; ) {
      let u = o.pop();
      if (u === Er) {
        r(o.pop());
        continue;
      }
      r && o.push(u, Er);
      let i = G(u);
      if (!i) throw new Q(u);
      if ((t == null ? void 0 : t(u)) !== false) switch (i) {
        case W:
        case S: {
          let s = i === W ? u : u.parts;
          for (let a = s.length, D = a - 1; D >= 0; --D) o.push(s[D]);
          break;
        }
        case _:
          o.push(u.flatContents, u.breakContents);
          break;
        case x:
          if (n && u.expandedStates) for (let s = u.expandedStates.length, a = s - 1; a >= 0; --a) o.push(u.expandedStates[a]);
          else o.push(u.contents);
          break;
        case P:
        case L:
        case R:
        case N:
        case Y:
          o.push(u.contents);
          break;
        case U:
        case z:
        case I:
        case j:
        case B:
        case b:
          break;
        default:
          throw new Q(u);
      }
    }
  }
  var we = Ru;
  var hr = () => {
  };
  var K = hr;
  var ze = hr;
  function De(e) {
    return K(e), { type: L, contents: e };
  }
  function ae(e, t) {
    return K(t), { type: P, contents: t, n: e };
  }
  function _t(e, t = {}) {
    return K(e), ze(t.expandedStates, true), { type: x, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
  }
  function Cr(e) {
    return ae(Number.NEGATIVE_INFINITY, e);
  }
  function gr(e) {
    return ae({ type: "root" }, e);
  }
  function yr(e) {
    return ae(-1, e);
  }
  function Ar(e, t) {
    return _t(e[0], { ...t, expandedStates: e });
  }
  function Ge(e) {
    return ze(e), { type: S, parts: e };
  }
  function Br(e, t = "", r = {}) {
    return K(e), t !== "" && K(t), { type: _, breakContents: e, flatContents: t, groupId: r.groupId };
  }
  function wr(e, t) {
    return K(e), { type: R, contents: e, groupId: t.groupId, negate: t.negate };
  }
  function xe(e) {
    return K(e), { type: Y, contents: e };
  }
  var xr = { type: j };
  var de = { type: b };
  var _r = { type: I };
  var _e = { type: B, hard: true };
  var vt = { type: B, hard: true, literal: true };
  var Ke = { type: B };
  var vr = { type: B, soft: true };
  var q = [_e, de];
  var qe = [vt, de];
  var ve = { type: z };
  function be(e, t) {
    K(e), ze(t);
    let r = [];
    for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
    return r;
  }
  function Je(e, t, r) {
    K(e);
    let n = e;
    if (t > 0) {
      for (let o = 0; o < Math.floor(t / r); ++o) n = De(n);
      n = ae(t % r, n), n = ae(Number.NEGATIVE_INFINITY, n);
    }
    return n;
  }
  function br(e, t) {
    return K(t), e ? { type: N, label: e, contents: t } : t;
  }
  function ee(e) {
    var t;
    if (!e) return "";
    if (Array.isArray(e)) {
      let r = [];
      for (let n of e) if (Array.isArray(n)) r.push(...ee(n));
      else {
        let o = ee(n);
        o !== "" && r.push(o);
      }
      return r;
    }
    return e.type === _ ? { ...e, breakContents: ee(e.breakContents), flatContents: ee(e.flatContents) } : e.type === x ? { ...e, contents: ee(e.contents), expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(ee) } : e.type === S ? { type: "fill", parts: e.parts.map(ee) } : e.contents ? { ...e, contents: ee(e.contents) } : e;
  }
  function Or(e) {
    let t = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ new Set();
    return n(ee(e));
    function n(u, i, s) {
      var a, D;
      if (typeof u == "string") return JSON.stringify(u);
      if (Array.isArray(u)) {
        let l = u.map(n).filter(Boolean);
        return l.length === 1 ? l[0] : `[${l.join(", ")}]`;
      }
      if (u.type === B) {
        let l = ((a = s == null ? void 0 : s[i + 1]) == null ? void 0 : a.type) === b;
        return u.literal ? l ? "literalline" : "literallineWithoutBreakParent" : u.hard ? l ? "hardline" : "hardlineWithoutBreakParent" : u.soft ? "softline" : "line";
      }
      if (u.type === b) return ((D = s == null ? void 0 : s[i - 1]) == null ? void 0 : D.type) === B && s[i - 1].hard ? void 0 : "breakParent";
      if (u.type === I) return "trim";
      if (u.type === L) return "indent(" + n(u.contents) + ")";
      if (u.type === P) return u.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + n(u.contents) + ")" : u.n < 0 ? "dedent(" + n(u.contents) + ")" : u.n.type === "root" ? "markAsRoot(" + n(u.contents) + ")" : "align(" + JSON.stringify(u.n) + ", " + n(u.contents) + ")";
      if (u.type === _) return "ifBreak(" + n(u.breakContents) + (u.flatContents ? ", " + n(u.flatContents) : "") + (u.groupId ? (u.flatContents ? "" : ', ""') + `, { groupId: ${o(u.groupId)} }` : "") + ")";
      if (u.type === R) {
        let l = [];
        u.negate && l.push("negate: true"), u.groupId && l.push(`groupId: ${o(u.groupId)}`);
        let d = l.length > 0 ? `, { ${l.join(", ")} }` : "";
        return `indentIfBreak(${n(u.contents)}${d})`;
      }
      if (u.type === x) {
        let l = [];
        u.break && u.break !== "propagated" && l.push("shouldBreak: true"), u.id && l.push(`id: ${o(u.id)}`);
        let d = l.length > 0 ? `, { ${l.join(", ")} }` : "";
        return u.expandedStates ? `conditionalGroup([${u.expandedStates.map((f) => n(f)).join(",")}]${d})` : `group(${n(u.contents)}${d})`;
      }
      if (u.type === S) return `fill([${u.parts.map((l) => n(l)).join(", ")}])`;
      if (u.type === Y) return "lineSuffix(" + n(u.contents) + ")";
      if (u.type === j) return "lineSuffixBoundary";
      if (u.type === N) return `label(${JSON.stringify(u.label)}, ${n(u.contents)})`;
      throw new Error("Unknown doc type " + u.type);
    }
    function o(u) {
      if (typeof u != "symbol") return JSON.stringify(String(u));
      if (u in t) return t[u];
      let i = u.description || "symbol";
      for (let s = 0; ; s++) {
        let a = i + (s > 0 ? ` #${s}` : "");
        if (!r.has(a)) return r.add(a), t[u] = `Symbol.for(${JSON.stringify(a)})`;
      }
    }
  }
  var Yu = (e, t, r) => {
    if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
  };
  var y = Yu;
  var Sr = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
  function Nr(e) {
    return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
  }
  function Tr(e) {
    return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9800 && e <= 9811 || e === 9855 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12771 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101632 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129672 || e >= 129680 && e <= 129725 || e >= 129727 && e <= 129733 || e >= 129742 && e <= 129755 || e >= 129760 && e <= 129768 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
  }
  var kr = (e) => !(Nr(e) || Tr(e));
  var ju = /[^\x20-\x7F]/u;
  function Hu(e) {
    if (!e) return 0;
    if (!ju.test(e)) return e.length;
    e = e.replace(Sr(), "  ");
    let t = 0;
    for (let r of e) {
      let n = r.codePointAt(0);
      n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (t += kr(n) ? 1 : 2);
    }
    return t;
  }
  var Oe = Hu;
  function Ne(e, t) {
    if (typeof e == "string") return t(e);
    let r = /* @__PURE__ */ new Map();
    return n(e);
    function n(u) {
      if (r.has(u)) return r.get(u);
      let i = o(u);
      return r.set(u, i), i;
    }
    function o(u) {
      switch (G(u)) {
        case W:
          return t(u.map(n));
        case S:
          return t({ ...u, parts: u.parts.map(n) });
        case _:
          return t({ ...u, breakContents: n(u.breakContents), flatContents: n(u.flatContents) });
        case x: {
          let { expandedStates: i, contents: s } = u;
          return i ? (i = i.map(n), s = i[0]) : s = n(s), t({ ...u, contents: s, expandedStates: i });
        }
        case P:
        case L:
        case R:
        case N:
        case Y:
          return t({ ...u, contents: n(u.contents) });
        case U:
        case z:
        case I:
        case j:
        case B:
        case b:
          return t(u);
        default:
          throw new Q(u);
      }
    }
  }
  function Xe(e, t, r) {
    let n = r, o = false;
    function u(i) {
      if (o) return false;
      let s = t(i);
      s !== void 0 && (o = true, n = s);
    }
    return we(e, u), n;
  }
  function Wu(e) {
    if (e.type === x && e.break || e.type === B && e.hard || e.type === b) return true;
  }
  function Ir(e) {
    return Xe(e, Wu, false);
  }
  function Lr(e) {
    if (e.length > 0) {
      let t = y(false, e, -1);
      !t.expandedStates && !t.break && (t.break = "propagated");
    }
    return null;
  }
  function Rr(e) {
    let t = /* @__PURE__ */ new Set(), r = [];
    function n(u) {
      if (u.type === b && Lr(r), u.type === x) {
        if (r.push(u), t.has(u)) return false;
        t.add(u);
      }
    }
    function o(u) {
      u.type === x && r.pop().break && Lr(r);
    }
    we(e, n, o, true);
  }
  function Mu(e) {
    return e.type === B && !e.hard ? e.soft ? "" : " " : e.type === _ ? e.flatContents : e;
  }
  function Yr(e) {
    return Ne(e, Mu);
  }
  function Pr(e) {
    for (e = [...e]; e.length >= 2 && y(false, e, -2).type === B && y(false, e, -1).type === b; ) e.length -= 2;
    if (e.length > 0) {
      let t = Se(y(false, e, -1));
      e[e.length - 1] = t;
    }
    return e;
  }
  function Se(e) {
    switch (G(e)) {
      case L:
      case R:
      case x:
      case Y:
      case N: {
        let t = Se(e.contents);
        return { ...e, contents: t };
      }
      case _:
        return { ...e, breakContents: Se(e.breakContents), flatContents: Se(e.flatContents) };
      case S:
        return { ...e, parts: Pr(e.parts) };
      case W:
        return Pr(e);
      case U:
        return e.replace(/[\n\r]*$/u, "");
      case P:
      case z:
      case I:
      case j:
      case B:
      case b:
        break;
      default:
        throw new Q(e);
    }
    return e;
  }
  function Ze(e) {
    return Se(Vu(e));
  }
  function $u(e) {
    switch (G(e)) {
      case S:
        if (e.parts.every((t) => t === "")) return "";
        break;
      case x:
        if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
        if (e.contents.type === x && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates) return e.contents;
        break;
      case P:
      case L:
      case R:
      case Y:
        if (!e.contents) return "";
        break;
      case _:
        if (!e.flatContents && !e.breakContents) return "";
        break;
      case W: {
        let t = [];
        for (let r of e) {
          if (!r) continue;
          let [n, ...o] = Array.isArray(r) ? r : [r];
          typeof n == "string" && typeof y(false, t, -1) == "string" ? t[t.length - 1] += n : t.push(n), t.push(...o);
        }
        return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
      }
      case U:
      case z:
      case I:
      case j:
      case B:
      case N:
      case b:
        break;
      default:
        throw new Q(e);
    }
    return e;
  }
  function Vu(e) {
    return Ne(e, (t) => $u(t));
  }
  function jr(e, t = qe) {
    return Ne(e, (r) => typeof r == "string" ? be(t, r.split(`
`)) : r);
  }
  function Uu(e) {
    if (e.type === B) return true;
  }
  function Hr(e) {
    return Xe(e, Uu, false);
  }
  function Qe(e, t) {
    return e.type === N ? { ...e, contents: t(e.contents) } : t(e);
  }
  var H = Symbol("MODE_BREAK");
  var J = Symbol("MODE_FLAT");
  var Te = Symbol("cursor");
  function Wr() {
    return { value: "", length: 0, queue: [] };
  }
  function zu(e, t) {
    return bt(e, { type: "indent" }, t);
  }
  function Gu(e, t, r) {
    return t === Number.NEGATIVE_INFINITY ? e.root || Wr() : t < 0 ? bt(e, { type: "dedent" }, r) : t ? t.type === "root" ? { ...e, root: e } : bt(e, { type: typeof t == "string" ? "stringAlign" : "numberAlign", n: t }, r) : e;
  }
  function bt(e, t, r) {
    let n = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t], o = "", u = 0, i = 0, s = 0;
    for (let c of n) switch (c.type) {
      case "indent":
        l(), r.useTabs ? a(1) : D(r.tabWidth);
        break;
      case "stringAlign":
        l(), o += c.n, u += c.n.length;
        break;
      case "numberAlign":
        i += 1, s += c.n;
        break;
      default:
        throw new Error(`Unexpected type '${c.type}'`);
    }
    return f(), { ...e, value: o, length: u, queue: n };
    function a(c) {
      o += "	".repeat(c), u += r.tabWidth * c;
    }
    function D(c) {
      o += " ".repeat(c), u += c;
    }
    function l() {
      r.useTabs ? d() : f();
    }
    function d() {
      i > 0 && a(i), p();
    }
    function f() {
      s > 0 && D(s), p();
    }
    function p() {
      i = 0, s = 0;
    }
  }
  function Ot(e) {
    let t = 0, r = 0, n = e.length;
    e: for (; n--; ) {
      let o = e[n];
      if (o === Te) {
        r++;
        continue;
      }
      for (let u = o.length - 1; u >= 0; u--) {
        let i = o[u];
        if (i === " " || i === "	") t++;
        else {
          e[n] = o.slice(0, u + 1);
          break e;
        }
      }
    }
    if (t > 0 || r > 0) for (e.length = n + 1; r-- > 0; ) e.push(Te);
    return t;
  }
  function et(e, t, r, n, o, u) {
    if (r === Number.POSITIVE_INFINITY) return true;
    let i = t.length, s = [e], a = [];
    for (; r >= 0; ) {
      if (s.length === 0) {
        if (i === 0) return true;
        s.push(t[--i]);
        continue;
      }
      let { mode: D, doc: l } = s.pop(), d = G(l);
      switch (d) {
        case U:
          a.push(l), r -= Oe(l);
          break;
        case W:
        case S: {
          let f = d === W ? l : l.parts;
          for (let p = f.length - 1; p >= 0; p--) s.push({ mode: D, doc: f[p] });
          break;
        }
        case L:
        case P:
        case R:
        case N:
          s.push({ mode: D, doc: l.contents });
          break;
        case I:
          r += Ot(a);
          break;
        case x: {
          if (u && l.break) return false;
          let f = l.break ? H : D, p = l.expandedStates && f === H ? y(false, l.expandedStates, -1) : l.contents;
          s.push({ mode: f, doc: p });
          break;
        }
        case _: {
          let p = (l.groupId ? o[l.groupId] || J : D) === H ? l.breakContents : l.flatContents;
          p && s.push({ mode: D, doc: p });
          break;
        }
        case B:
          if (D === H || l.hard) return true;
          l.soft || (a.push(" "), r--);
          break;
        case Y:
          n = true;
          break;
        case j:
          if (n) return false;
          break;
      }
    }
    return false;
  }
  function Fe(e, t) {
    let r = {}, n = t.printWidth, o = Be(t.endOfLine), u = 0, i = [{ ind: Wr(), mode: H, doc: e }], s = [], a = false, D = [], l = 0;
    for (Rr(e); i.length > 0; ) {
      let { ind: f, mode: p, doc: c } = i.pop();
      switch (G(c)) {
        case U: {
          let F = o !== `
` ? ne(false, c, `
`, o) : c;
          s.push(F), i.length > 0 && (u += Oe(F));
          break;
        }
        case W:
          for (let F = c.length - 1; F >= 0; F--) i.push({ ind: f, mode: p, doc: c[F] });
          break;
        case z:
          if (l >= 2) throw new Error("There are too many 'cursor' in doc.");
          s.push(Te), l++;
          break;
        case L:
          i.push({ ind: zu(f, t), mode: p, doc: c.contents });
          break;
        case P:
          i.push({ ind: Gu(f, c.n, t), mode: p, doc: c.contents });
          break;
        case I:
          u -= Ot(s);
          break;
        case x:
          switch (p) {
            case J:
              if (!a) {
                i.push({ ind: f, mode: c.break ? H : J, doc: c.contents });
                break;
              }
            case H: {
              a = false;
              let F = { ind: f, mode: J, doc: c.contents }, m = n - u, E = D.length > 0;
              if (!c.break && et(F, i, m, E, r)) i.push(F);
              else if (c.expandedStates) {
                let A = y(false, c.expandedStates, -1);
                if (c.break) {
                  i.push({ ind: f, mode: H, doc: A });
                  break;
                } else for (let w = 1; w < c.expandedStates.length + 1; w++) if (w >= c.expandedStates.length) {
                  i.push({ ind: f, mode: H, doc: A });
                  break;
                } else {
                  let h2 = c.expandedStates[w], C = { ind: f, mode: J, doc: h2 };
                  if (et(C, i, m, E, r)) {
                    i.push(C);
                    break;
                  }
                }
              } else i.push({ ind: f, mode: H, doc: c.contents });
              break;
            }
          }
          c.id && (r[c.id] = y(false, i, -1).mode);
          break;
        case S: {
          let F = n - u, { parts: m } = c;
          if (m.length === 0) break;
          let [E, A] = m, w = { ind: f, mode: J, doc: E }, h2 = { ind: f, mode: H, doc: E }, C = et(w, [], F, D.length > 0, r, true);
          if (m.length === 1) {
            C ? i.push(w) : i.push(h2);
            break;
          }
          let k = { ind: f, mode: J, doc: A }, v = { ind: f, mode: H, doc: A };
          if (m.length === 2) {
            C ? i.push(k, w) : i.push(v, h2);
            break;
          }
          m.splice(0, 2);
          let $ = { ind: f, mode: p, doc: Ge(m) }, ye = m[0];
          et({ ind: f, mode: J, doc: [E, A, ye] }, [], F, D.length > 0, r, true) ? i.push($, k, w) : C ? i.push($, v, w) : i.push($, v, h2);
          break;
        }
        case _:
        case R: {
          let F = c.groupId ? r[c.groupId] : p;
          if (F === H) {
            let m = c.type === _ ? c.breakContents : c.negate ? c.contents : De(c.contents);
            m && i.push({ ind: f, mode: p, doc: m });
          }
          if (F === J) {
            let m = c.type === _ ? c.flatContents : c.negate ? De(c.contents) : c.contents;
            m && i.push({ ind: f, mode: p, doc: m });
          }
          break;
        }
        case Y:
          D.push({ ind: f, mode: p, doc: c.contents });
          break;
        case j:
          D.length > 0 && i.push({ ind: f, mode: p, doc: _e });
          break;
        case B:
          switch (p) {
            case J:
              if (c.hard) a = true;
              else {
                c.soft || (s.push(" "), u += 1);
                break;
              }
            case H:
              if (D.length > 0) {
                i.push({ ind: f, mode: p, doc: c }, ...D.reverse()), D.length = 0;
                break;
              }
              c.literal ? f.root ? (s.push(o, f.root.value), u = f.root.length) : (s.push(o), u = 0) : (u -= Ot(s), s.push(o + f.value), u = f.length);
              break;
          }
          break;
        case N:
          i.push({ ind: f, mode: p, doc: c.contents });
          break;
        case b:
          break;
        default:
          throw new Q(c);
      }
      i.length === 0 && D.length > 0 && (i.push(...D.reverse()), D.length = 0);
    }
    let d = s.indexOf(Te);
    if (d !== -1) {
      let f = s.indexOf(Te, d + 1), p = s.slice(0, d).join(""), c = s.slice(d + 1, f).join(""), F = s.slice(f + 1).join("");
      return { formatted: p + c + F, cursorNodeStart: p.length, cursorNodeText: c };
    }
    return { formatted: s.join("") };
  }
  function Ku(e, t, r = 0) {
    let n = 0;
    for (let o = r; o < e.length; ++o) e[o] === "	" ? n = n + t - n % t : n++;
    return n;
  }
  var me = Ku;
  var te;
  var Nt;
  var tt;
  var St = class {
    constructor(t) {
      Dr(this, te);
      this.stack = [t];
    }
    get key() {
      let { stack: t, siblings: r } = this;
      return y(false, t, r === null ? -2 : -4) ?? null;
    }
    get index() {
      return this.siblings === null ? null : y(false, this.stack, -2);
    }
    get node() {
      return y(false, this.stack, -1);
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
      let { stack: t } = this, r = y(false, t, -3);
      return Array.isArray(r) ? r : null;
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
      let { siblings: t, index: r } = this;
      return t !== null && r === t.length - 1;
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
      let { stack: t } = this, { length: r } = t;
      return r > 1 ? y(false, t, -2) : null;
    }
    getValue() {
      return y(false, this.stack, -1);
    }
    getNode(t = 0) {
      let r = pe(this, te, Nt).call(this, t);
      return r === -1 ? null : this.stack[r];
    }
    getParentNode(t = 0) {
      return this.getNode(t + 1);
    }
    call(t, ...r) {
      let { stack: n } = this, { length: o } = n, u = y(false, n, -1);
      for (let i of r) u = u[i], n.push(i, u);
      try {
        return t(this);
      } finally {
        n.length = o;
      }
    }
    callParent(t, r = 0) {
      let n = pe(this, te, Nt).call(this, r + 1), o = this.stack.splice(n + 1);
      try {
        return t(this);
      } finally {
        this.stack.push(...o);
      }
    }
    each(t, ...r) {
      let { stack: n } = this, { length: o } = n, u = y(false, n, -1);
      for (let i of r) u = u[i], n.push(i, u);
      try {
        for (let i = 0; i < u.length; ++i) n.push(i, u[i]), t(this, i, u), n.length -= 2;
      } finally {
        n.length = o;
      }
    }
    map(t, ...r) {
      let n = [];
      return this.each((o, u, i) => {
        n[u] = t(o, u, i);
      }, ...r), n;
    }
    match(...t) {
      let r = this.stack.length - 1, n = null, o = this.stack[r--];
      for (let u of t) {
        if (o === void 0) return false;
        let i = null;
        if (typeof n == "number" && (i = n, n = this.stack[r--], o = this.stack[r--]), u && !u(o, n, i)) return false;
        n = this.stack[r--], o = this.stack[r--];
      }
      return true;
    }
    findAncestor(t) {
      for (let r of pe(this, te, tt).call(this)) if (t(r)) return r;
    }
    hasAncestor(t) {
      for (let r of pe(this, te, tt).call(this)) if (t(r)) return true;
      return false;
    }
  };
  te = /* @__PURE__ */ new WeakSet(), Nt = function(t) {
    let { stack: r } = this;
    for (let n = r.length - 1; n >= 0; n -= 2) if (!Array.isArray(r[n]) && --t < 0) return n;
    return -1;
  }, tt = function* () {
    let { stack: t } = this;
    for (let r = t.length - 3; r >= 0; r -= 2) {
      let n = t[r];
      Array.isArray(n) || (yield n);
    }
  };
  var Mr = St;
  var $r = new Proxy(() => {
  }, { get: () => $r });
  var ke = $r;
  function qu(e) {
    return e !== null && typeof e == "object";
  }
  var Vr = qu;
  function* Tt(e, t) {
    let { getVisitorKeys: r, filter: n = () => true } = t, o = (u) => Vr(u) && n(u);
    for (let u of r(e)) {
      let i = e[u];
      if (Array.isArray(i)) for (let s of i) o(s) && (yield s);
      else o(i) && (yield i);
    }
  }
  function* Ur(e, t) {
    let r = [e];
    for (let n = 0; n < r.length; n++) {
      let o = r[n];
      for (let u of Tt(o, t)) yield u, r.push(u);
    }
  }
  function Ee(e) {
    return (t, r, n) => {
      let o = !!(n != null && n.backwards);
      if (r === false) return false;
      let { length: u } = t, i = r;
      for (; i >= 0 && i < u; ) {
        let s = t.charAt(i);
        if (e instanceof RegExp) {
          if (!e.test(s)) return i;
        } else if (!e.includes(s)) return i;
        o ? i-- : i++;
      }
      return i === -1 || i === u ? i : false;
    };
  }
  var zr = Ee(/\s/u);
  var T = Ee(" 	");
  var rt = Ee(",; 	");
  var nt = Ee(/[^\n\r]/u);
  function Ju(e, t, r) {
    let n = !!(r != null && r.backwards);
    if (t === false) return false;
    let o = e.charAt(t);
    if (n) {
      if (e.charAt(t - 1) === "\r" && o === `
`) return t - 2;
      if (o === `
` || o === "\r" || o === "\u2028" || o === "\u2029") return t - 1;
    } else {
      if (o === "\r" && e.charAt(t + 1) === `
`) return t + 2;
      if (o === `
` || o === "\r" || o === "\u2028" || o === "\u2029") return t + 1;
    }
    return t;
  }
  var M = Ju;
  function Xu(e, t, r = {}) {
    let n = T(e, r.backwards ? t - 1 : t, r), o = M(e, n, r);
    return n !== o;
  }
  var V = Xu;
  function Zu(e) {
    return Array.isArray(e) && e.length > 0;
  }
  var kt = Zu;
  var Gr = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]);
  var Qu = (e) => Object.keys(e).filter((t) => !Gr.has(t));
  function eo(e) {
    return e ? (t) => e(t, Gr) : Qu;
  }
  var X = eo;
  function to(e) {
    let t = e.type || e.kind || "(unknown type)", r = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
    return r.length > 20 && (r = r.slice(0, 19) + "\u2026"), t + (r ? " " + r : "");
  }
  function Lt(e, t) {
    (e.comments ?? (e.comments = [])).push(t), t.printed = false, t.nodeDescription = to(e);
  }
  function ue(e, t) {
    t.leading = true, t.trailing = false, Lt(e, t);
  }
  function re(e, t, r) {
    t.leading = false, t.trailing = false, r && (t.marker = r), Lt(e, t);
  }
  function oe(e, t) {
    t.leading = false, t.trailing = true, Lt(e, t);
  }
  var Pt = /* @__PURE__ */ new WeakMap();
  function ut(e, t) {
    if (Pt.has(e)) return Pt.get(e);
    let { printer: { getCommentChildNodes: r, canAttachComment: n, getVisitorKeys: o }, locStart: u, locEnd: i } = t;
    if (!n) return [];
    let s = ((r == null ? void 0 : r(e, t)) ?? [...Tt(e, { getVisitorKeys: X(o) })]).flatMap((a) => n(a) ? [a] : ut(a, t));
    return s.sort((a, D) => u(a) - u(D) || i(a) - i(D)), Pt.set(e, s), s;
  }
  function qr(e, t, r, n) {
    let { locStart: o, locEnd: u } = r, i = o(t), s = u(t), a = ut(e, r), D, l, d = 0, f = a.length;
    for (; d < f; ) {
      let p = d + f >> 1, c = a[p], F = o(c), m = u(c);
      if (F <= i && s <= m) return qr(c, t, r, c);
      if (m <= i) {
        D = c, d = p + 1;
        continue;
      }
      if (s <= F) {
        l = c, f = p;
        continue;
      }
      throw new Error("Comment location overlaps with node location");
    }
    if ((n == null ? void 0 : n.type) === "TemplateLiteral") {
      let { quasis: p } = n, c = Rt(p, t, r);
      D && Rt(p, D, r) !== c && (D = null), l && Rt(p, l, r) !== c && (l = null);
    }
    return { enclosingNode: n, precedingNode: D, followingNode: l };
  }
  var It = () => false;
  function Jr(e, t) {
    let { comments: r } = e;
    if (delete e.comments, !kt(r) || !t.printer.canAttachComment) return;
    let n = [], { locStart: o, locEnd: u, printer: { experimentalFeatures: { avoidAstMutation: i = false } = {}, handleComments: s = {} }, originalText: a } = t, { ownLine: D = It, endOfLine: l = It, remaining: d = It } = s, f = r.map((p, c) => ({ ...qr(e, p, t), comment: p, text: a, options: t, ast: e, isLastComment: r.length - 1 === c }));
    for (let [p, c] of f.entries()) {
      let { comment: F, precedingNode: m, enclosingNode: E, followingNode: A, text: w, options: h2, ast: C, isLastComment: k } = c;
      if (h2.parser === "json" || h2.parser === "json5" || h2.parser === "jsonc" || h2.parser === "__js_expression" || h2.parser === "__ts_expression" || h2.parser === "__vue_expression" || h2.parser === "__vue_ts_expression") {
        if (o(F) - o(C) <= 0) {
          ue(C, F);
          continue;
        }
        if (u(F) - u(C) >= 0) {
          oe(C, F);
          continue;
        }
      }
      let v;
      if (i ? v = [c] : (F.enclosingNode = E, F.precedingNode = m, F.followingNode = A, v = [F, w, h2, C, k]), ro(w, h2, f, p)) F.placement = "ownLine", D(...v) || (A ? ue(A, F) : m ? oe(m, F) : E ? re(E, F) : re(C, F));
      else if (no(w, h2, f, p)) F.placement = "endOfLine", l(...v) || (m ? oe(m, F) : A ? ue(A, F) : E ? re(E, F) : re(C, F));
      else if (F.placement = "remaining", !d(...v)) if (m && A) {
        let $ = n.length;
        $ > 0 && n[$ - 1].followingNode !== A && Kr(n, h2), n.push(c);
      } else m ? oe(m, F) : A ? ue(A, F) : E ? re(E, F) : re(C, F);
    }
    if (Kr(n, t), !i) for (let p of r) delete p.precedingNode, delete p.enclosingNode, delete p.followingNode;
  }
  var Xr = (e) => !/[\S\n\u2028\u2029]/u.test(e);
  function ro(e, t, r, n) {
    let { comment: o, precedingNode: u } = r[n], { locStart: i, locEnd: s } = t, a = i(o);
    if (u) for (let D = n - 1; D >= 0; D--) {
      let { comment: l, precedingNode: d } = r[D];
      if (d !== u || !Xr(e.slice(s(l), a))) break;
      a = i(l);
    }
    return V(e, a, { backwards: true });
  }
  function no(e, t, r, n) {
    let { comment: o, followingNode: u } = r[n], { locStart: i, locEnd: s } = t, a = s(o);
    if (u) for (let D = n + 1; D < r.length; D++) {
      let { comment: l, followingNode: d } = r[D];
      if (d !== u || !Xr(e.slice(a, i(l)))) break;
      a = s(l);
    }
    return V(e, a);
  }
  function Kr(e, t) {
    var s, a;
    let r = e.length;
    if (r === 0) return;
    let { precedingNode: n, followingNode: o } = e[0], u = t.locStart(o), i;
    for (i = r; i > 0; --i) {
      let { comment: D, precedingNode: l, followingNode: d } = e[i - 1];
      ke.strictEqual(l, n), ke.strictEqual(d, o);
      let f = t.originalText.slice(t.locEnd(D), u);
      if (((a = (s = t.printer).isGap) == null ? void 0 : a.call(s, f, t)) ?? /^[\s(]*$/u.test(f)) u = t.locStart(D);
      else break;
    }
    for (let [D, { comment: l }] of e.entries()) D < i ? oe(n, l) : ue(o, l);
    for (let D of [n, o]) D.comments && D.comments.length > 1 && D.comments.sort((l, d) => t.locStart(l) - t.locStart(d));
    e.length = 0;
  }
  function Rt(e, t, r) {
    let n = r.locStart(t) - 1;
    for (let o = 1; o < e.length; ++o) if (n < r.locStart(e[o])) return o - 1;
    return 0;
  }
  function uo(e, t) {
    let r = t - 1;
    r = T(e, r, { backwards: true }), r = M(e, r, { backwards: true }), r = T(e, r, { backwards: true });
    let n = M(e, r, { backwards: true });
    return r !== n;
  }
  var Le = uo;
  function Zr(e, t) {
    let r = e.node;
    return r.printed = true, t.printer.printComment(e, t);
  }
  function oo(e, t) {
    var l;
    let r = e.node, n = [Zr(e, t)], { printer: o, originalText: u, locStart: i, locEnd: s } = t;
    if ((l = o.isBlockComment) == null ? void 0 : l.call(o, r)) {
      let d = V(u, s(r)) ? V(u, i(r), { backwards: true }) ? q : Ke : " ";
      n.push(d);
    } else n.push(q);
    let D = M(u, T(u, s(r)));
    return D !== false && V(u, D) && n.push(q), n;
  }
  function io(e, t, r) {
    var D;
    let n = e.node, o = Zr(e, t), { printer: u, originalText: i, locStart: s } = t, a = (D = u.isBlockComment) == null ? void 0 : D.call(u, n);
    if (r != null && r.hasLineSuffix && !(r != null && r.isBlock) || V(i, s(n), { backwards: true })) {
      let l = Le(i, s(n));
      return { doc: xe([q, l ? q : "", o]), isBlock: a, hasLineSuffix: true };
    }
    return !a || r != null && r.hasLineSuffix ? { doc: [xe([" ", o]), de], isBlock: a, hasLineSuffix: true } : { doc: [" ", o], isBlock: a, hasLineSuffix: false };
  }
  function so(e, t) {
    let r = e.node;
    if (!r) return {};
    let n = t[Symbol.for("printedComments")];
    if ((r.comments || []).filter((a) => !n.has(a)).length === 0) return { leading: "", trailing: "" };
    let u = [], i = [], s;
    return e.each(() => {
      let a = e.node;
      if (n != null && n.has(a)) return;
      let { leading: D, trailing: l } = a;
      D ? u.push(oo(e, t)) : l && (s = io(e, t, s), i.push(s.doc));
    }, "comments"), { leading: u, trailing: i };
  }
  function Qr(e, t, r) {
    let { leading: n, trailing: o } = so(e, r);
    return !n && !o ? t : Qe(t, (u) => [n, u, o]);
  }
  function en(e) {
    let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: r } = e;
    for (let n of t) {
      if (!n.printed && !r.has(n)) throw new Error('Comment "' + n.value.trim() + '" was not printed. Please report this error!');
      delete n.printed;
    }
  }
  function ao(e) {
    return () => {
    };
  }
  var tn = ao;
  var Pe = class extends Error {
    name = "ConfigError";
  };
  var Ie = class extends Error {
    name = "UndefinedParserError";
  };
  var rn = { cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e) => typeof e == "string" || typeof e == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }] }, plugins: { type: "path", array: true, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e) => typeof e == "string" || typeof e == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: false, description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`, cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
  function ot({ plugins: e = [], showDeprecated: t = false } = {}) {
    let r = e.flatMap((o) => o.languages ?? []), n = [];
    for (let o of lo(Object.assign({}, ...e.map(({ options: u }) => u), rn))) !t && o.deprecated || (Array.isArray(o.choices) && (t || (o.choices = o.choices.filter((u) => !u.deprecated)), o.name === "parser" && (o.choices = [...o.choices, ...Do(o.choices, r, e)])), o.pluginDefaults = Object.fromEntries(e.filter((u) => {
      var i;
      return ((i = u.defaultOptions) == null ? void 0 : i[o.name]) !== void 0;
    }).map((u) => [u.name, u.defaultOptions[o.name]])), n.push(o));
    return { languages: r, options: n };
  }
  function* Do(e, t, r) {
    let n = new Set(e.map((o) => o.value));
    for (let o of t) if (o.parsers) {
      for (let u of o.parsers) if (!n.has(u)) {
        n.add(u);
        let i = r.find((a) => a.parsers && Object.prototype.hasOwnProperty.call(a.parsers, u)), s = o.name;
        i != null && i.name && (s += ` (plugin: ${i.name})`), yield { value: u, description: s };
      }
    }
  }
  function lo(e) {
    let t = [];
    for (let [r, n] of Object.entries(e)) {
      let o = { name: r, ...n };
      Array.isArray(o.default) && (o.default = y(false, o.default, -1).value), t.push(o);
    }
    return t;
  }
  var co = (e) => String(e).split(/[/\\]/u).pop();
  function nn(e, t) {
    if (!t) return;
    let r = co(t).toLowerCase();
    return e.find(({ filenames: n }) => n == null ? void 0 : n.some((o) => o.toLowerCase() === r)) ?? e.find(({ extensions: n }) => n == null ? void 0 : n.some((o) => r.endsWith(o)));
  }
  function fo(e, t) {
    if (t) return e.find(({ name: r }) => r.toLowerCase() === t) ?? e.find(({ aliases: r }) => r == null ? void 0 : r.includes(t)) ?? e.find(({ extensions: r }) => r == null ? void 0 : r.includes(`.${t}`));
  }
  function po(e, t) {
    let r = e.plugins.flatMap((o) => o.languages ?? []), n = fo(r, t.language) ?? nn(r, t.physicalFile) ?? nn(r, t.file) ?? (t.physicalFile, void 0);
    return n == null ? void 0 : n.parsers[0];
  }
  var un = po;
  var ie = { key: (e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e), value(e) {
    if (e === null || typeof e != "object") return JSON.stringify(e);
    if (Array.isArray(e)) return `[${e.map((r) => ie.value(r)).join(", ")}]`;
    let t = Object.keys(e);
    return t.length === 0 ? "{}" : `{ ${t.map((r) => `${ie.key(r)}: ${ie.value(e[r])}`).join(", ")} }`;
  }, pair: ({ key: e, value: t }) => ie.value({ [e]: t }) };
  var Yt = Me(it(), 1);
  var an = (e, t, { descriptor: r }) => {
    let n = [`${Yt.default.yellow(typeof e == "string" ? r.key(e) : r.pair(e))} is deprecated`];
    return t && n.push(`we now treat it as ${Yt.default.blue(typeof t == "string" ? r.key(t) : r.pair(t))}`), n.join("; ") + ".";
  };
  var le = Me(it(), 1);
  var st = Symbol.for("vnopts.VALUE_NOT_EXIST");
  var he = Symbol.for("vnopts.VALUE_UNCHANGED");
  var Dn = " ".repeat(2);
  var cn = (e, t, r) => {
    let { text: n, list: o } = r.normalizeExpectedResult(r.schemas[e].expected(r)), u = [];
    return n && u.push(ln(e, t, n, r.descriptor)), o && u.push([ln(e, t, o.title, r.descriptor)].concat(o.values.map((i) => fn(i, r.loggerPrintWidth))).join(`
`)), pn(u, r.loggerPrintWidth);
  };
  function ln(e, t, r, n) {
    return [`Invalid ${le.default.red(n.key(e))} value.`, `Expected ${le.default.blue(r)},`, `but received ${t === st ? le.default.gray("nothing") : le.default.red(n.value(t))}.`].join(" ");
  }
  function fn({ text: e, list: t }, r) {
    let n = [];
    return e && n.push(`- ${le.default.blue(e)}`), t && n.push([`- ${le.default.blue(t.title)}:`].concat(t.values.map((o) => fn(o, r - Dn.length).replace(/^|\n/g, `$&${Dn}`))).join(`
`)), pn(n, r);
  }
  function pn(e, t) {
    if (e.length === 1) return e[0];
    let [r, n] = e, [o, u] = e.map((i) => i.split(`
`, 1)[0].length);
    return o > t && o > u ? n : r;
  }
  var Wt = Me(it(), 1);
  var jt = [];
  var dn = [];
  function Ht(e, t) {
    if (e === t) return 0;
    let r = e;
    e.length > t.length && (e = t, t = r);
    let n = e.length, o = t.length;
    for (; n > 0 && e.charCodeAt(~-n) === t.charCodeAt(~-o); ) n--, o--;
    let u = 0;
    for (; u < n && e.charCodeAt(u) === t.charCodeAt(u); ) u++;
    if (n -= u, o -= u, n === 0) return o;
    let i, s, a, D, l = 0, d = 0;
    for (; l < n; ) dn[l] = e.charCodeAt(u + l), jt[l] = ++l;
    for (; d < o; ) for (i = t.charCodeAt(u + d), a = d++, s = d, l = 0; l < n; l++) D = i === dn[l] ? a : a + 1, a = jt[l], s = jt[l] = a > s ? D > s ? s + 1 : D : D > a ? a + 1 : D;
    return s;
  }
  var at = (e, t, { descriptor: r, logger: n, schemas: o }) => {
    let u = [`Ignored unknown option ${Wt.default.yellow(r.pair({ key: e, value: t }))}.`], i = Object.keys(o).sort().find((s) => Ht(e, s) < 3);
    i && u.push(`Did you mean ${Wt.default.blue(r.key(i))}?`), n.warn(u.join(" "));
  };
  var Fo = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
  function mo(e, t) {
    let r = new e(t), n = Object.create(r);
    for (let o of Fo) o in t && (n[o] = Eo(t[o], r, O.prototype[o].length));
    return n;
  }
  var O = class {
    static create(t) {
      return mo(this, t);
    }
    constructor(t) {
      this.name = t.name;
    }
    default(t) {
    }
    expected(t) {
      return "nothing";
    }
    validate(t, r) {
      return false;
    }
    deprecated(t, r) {
      return false;
    }
    forward(t, r) {
    }
    redirect(t, r) {
    }
    overlap(t, r, n) {
      return t;
    }
    preprocess(t, r) {
      return t;
    }
    postprocess(t, r) {
      return he;
    }
  };
  function Eo(e, t, r) {
    return typeof e == "function" ? (...n) => e(...n.slice(0, r - 1), t, ...n.slice(r - 1)) : () => e;
  }
  var Dt = class extends O {
    constructor(t) {
      super(t), this._sourceName = t.sourceName;
    }
    expected(t) {
      return t.schemas[this._sourceName].expected(t);
    }
    validate(t, r) {
      return r.schemas[this._sourceName].validate(t, r);
    }
    redirect(t, r) {
      return this._sourceName;
    }
  };
  var lt = class extends O {
    expected() {
      return "anything";
    }
    validate() {
      return true;
    }
  };
  var ct = class extends O {
    constructor({ valueSchema: t, name: r = t.name, ...n }) {
      super({ ...n, name: r }), this._valueSchema = t;
    }
    expected(t) {
      let { text: r, list: n } = t.normalizeExpectedResult(this._valueSchema.expected(t));
      return { text: r && `an array of ${r}`, list: n && { title: "an array of the following values", values: [{ list: n }] } };
    }
    validate(t, r) {
      if (!Array.isArray(t)) return false;
      let n = [];
      for (let o of t) {
        let u = r.normalizeValidateResult(this._valueSchema.validate(o, r), o);
        u !== true && n.push(u.value);
      }
      return n.length === 0 ? true : { value: n };
    }
    deprecated(t, r) {
      let n = [];
      for (let o of t) {
        let u = r.normalizeDeprecatedResult(this._valueSchema.deprecated(o, r), o);
        u !== false && n.push(...u.map(({ value: i }) => ({ value: [i] })));
      }
      return n;
    }
    forward(t, r) {
      let n = [];
      for (let o of t) {
        let u = r.normalizeForwardResult(this._valueSchema.forward(o, r), o);
        n.push(...u.map(Fn));
      }
      return n;
    }
    redirect(t, r) {
      let n = [], o = [];
      for (let u of t) {
        let i = r.normalizeRedirectResult(this._valueSchema.redirect(u, r), u);
        "remain" in i && n.push(i.remain), o.push(...i.redirect.map(Fn));
      }
      return n.length === 0 ? { redirect: o } : { redirect: o, remain: n };
    }
    overlap(t, r) {
      return t.concat(r);
    }
  };
  function Fn({ from: e, to: t }) {
    return { from: [e], to: t };
  }
  var ft = class extends O {
    expected() {
      return "true or false";
    }
    validate(t) {
      return typeof t == "boolean";
    }
  };
  function En(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    for (let n of e) {
      let o = n[t];
      if (r[o]) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
      r[o] = n;
    }
    return r;
  }
  function hn(e, t) {
    let r = /* @__PURE__ */ new Map();
    for (let n of e) {
      let o = n[t];
      if (r.has(o)) throw new Error(`Duplicate ${t} ${JSON.stringify(o)}`);
      r.set(o, n);
    }
    return r;
  }
  function Cn() {
    let e = /* @__PURE__ */ Object.create(null);
    return (t) => {
      let r = JSON.stringify(t);
      return e[r] ? true : (e[r] = true, false);
    };
  }
  function gn(e, t) {
    let r = [], n = [];
    for (let o of e) t(o) ? r.push(o) : n.push(o);
    return [r, n];
  }
  function yn(e) {
    return e === Math.floor(e);
  }
  function An(e, t) {
    if (e === t) return 0;
    let r = typeof e, n = typeof t, o = ["undefined", "object", "boolean", "number", "string"];
    return r !== n ? o.indexOf(r) - o.indexOf(n) : r !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
  }
  function Bn(e) {
    return (...t) => {
      let r = e(...t);
      return typeof r == "string" ? new Error(r) : r;
    };
  }
  function Mt(e) {
    return e === void 0 ? {} : e;
  }
  function $t(e) {
    if (typeof e == "string") return { text: e };
    let { text: t, list: r } = e;
    return ho((t || r) !== void 0, "Unexpected `expected` result, there should be at least one field."), r ? { text: t, list: { title: r.title, values: r.values.map($t) } } : { text: t };
  }
  function Vt(e, t) {
    return e === true ? true : e === false ? { value: t } : e;
  }
  function Ut(e, t, r = false) {
    return e === false ? false : e === true ? r ? true : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? false : e;
  }
  function mn(e, t) {
    return typeof e == "string" || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
  }
  function pt(e, t) {
    return e === void 0 ? [] : Array.isArray(e) ? e.map((r) => mn(r, t)) : [mn(e, t)];
  }
  function zt(e, t) {
    let r = pt(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
    return r.length === 0 ? { remain: t, redirect: r } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: r } : { redirect: r };
  }
  function ho(e, t) {
    if (!e) throw new Error(t);
  }
  var dt = class extends O {
    constructor(t) {
      super(t), this._choices = hn(t.choices.map((r) => r && typeof r == "object" ? r : { value: r }), "value");
    }
    expected({ descriptor: t }) {
      let r = Array.from(this._choices.keys()).map((i) => this._choices.get(i)).filter(({ hidden: i }) => !i).map((i) => i.value).sort(An).map(t.value), n = r.slice(0, -2), o = r.slice(-2);
      return { text: n.concat(o.join(" or ")).join(", "), list: { title: "one of the following values", values: r } };
    }
    validate(t) {
      return this._choices.has(t);
    }
    deprecated(t) {
      let r = this._choices.get(t);
      return r && r.deprecated ? { value: t } : false;
    }
    forward(t) {
      let r = this._choices.get(t);
      return r ? r.forward : void 0;
    }
    redirect(t) {
      let r = this._choices.get(t);
      return r ? r.redirect : void 0;
    }
  };
  var Ft = class extends O {
    expected() {
      return "a number";
    }
    validate(t, r) {
      return typeof t == "number";
    }
  };
  var mt = class extends Ft {
    expected() {
      return "an integer";
    }
    validate(t, r) {
      return r.normalizeValidateResult(super.validate(t, r), t) === true && yn(t);
    }
  };
  var Re = class extends O {
    expected() {
      return "a string";
    }
    validate(t) {
      return typeof t == "string";
    }
  };
  var wn = ie;
  var xn = at;
  var _n = cn;
  var vn = an;
  var Et = class {
    constructor(t, r) {
      let { logger: n = console, loggerPrintWidth: o = 80, descriptor: u = wn, unknown: i = xn, invalid: s = _n, deprecated: a = vn, missing: D = () => false, required: l = () => false, preprocess: d = (p) => p, postprocess: f = () => he } = r || {};
      this._utils = { descriptor: u, logger: n || { warn: () => {
      } }, loggerPrintWidth: o, schemas: En(t, "name"), normalizeDefaultResult: Mt, normalizeExpectedResult: $t, normalizeDeprecatedResult: Ut, normalizeForwardResult: pt, normalizeRedirectResult: zt, normalizeValidateResult: Vt }, this._unknownHandler = i, this._invalidHandler = Bn(s), this._deprecatedHandler = a, this._identifyMissing = (p, c) => !(p in c) || D(p, c), this._identifyRequired = l, this._preprocess = d, this._postprocess = f, this.cleanHistory();
    }
    cleanHistory() {
      this._hasDeprecationWarned = Cn();
    }
    normalize(t) {
      let r = {}, o = [this._preprocess(t, this._utils)], u = () => {
        for (; o.length !== 0; ) {
          let i = o.shift(), s = this._applyNormalization(i, r);
          o.push(...s);
        }
      };
      u();
      for (let i of Object.keys(this._utils.schemas)) {
        let s = this._utils.schemas[i];
        if (!(i in r)) {
          let a = Mt(s.default(this._utils));
          "value" in a && o.push({ [i]: a.value });
        }
      }
      u();
      for (let i of Object.keys(this._utils.schemas)) {
        if (!(i in r)) continue;
        let s = this._utils.schemas[i], a = r[i], D = s.postprocess(a, this._utils);
        D !== he && (this._applyValidation(D, i, s), r[i] = D);
      }
      return this._applyPostprocess(r), this._applyRequiredCheck(r), r;
    }
    _applyNormalization(t, r) {
      let n = [], { knownKeys: o, unknownKeys: u } = this._partitionOptionKeys(t);
      for (let i of o) {
        let s = this._utils.schemas[i], a = s.preprocess(t[i], this._utils);
        this._applyValidation(a, i, s);
        let D = ({ from: p, to: c }) => {
          n.push(typeof c == "string" ? { [c]: p } : { [c.key]: c.value });
        }, l = ({ value: p, redirectTo: c }) => {
          let F = Ut(s.deprecated(p, this._utils), a, true);
          if (F !== false) if (F === true) this._hasDeprecationWarned(i) || this._utils.logger.warn(this._deprecatedHandler(i, c, this._utils));
          else for (let { value: m } of F) {
            let E = { key: i, value: m };
            if (!this._hasDeprecationWarned(E)) {
              let A = typeof c == "string" ? { key: c, value: m } : c;
              this._utils.logger.warn(this._deprecatedHandler(E, A, this._utils));
            }
          }
        };
        pt(s.forward(a, this._utils), a).forEach(D);
        let f = zt(s.redirect(a, this._utils), a);
        if (f.redirect.forEach(D), "remain" in f) {
          let p = f.remain;
          r[i] = i in r ? s.overlap(r[i], p, this._utils) : p, l({ value: p });
        }
        for (let { from: p, to: c } of f.redirect) l({ value: p, redirectTo: c });
      }
      for (let i of u) {
        let s = t[i];
        this._applyUnknownHandler(i, s, r, (a, D) => {
          n.push({ [a]: D });
        });
      }
      return n;
    }
    _applyRequiredCheck(t) {
      for (let r of Object.keys(this._utils.schemas)) if (this._identifyMissing(r, t) && this._identifyRequired(r)) throw this._invalidHandler(r, st, this._utils);
    }
    _partitionOptionKeys(t) {
      let [r, n] = gn(Object.keys(t).filter((o) => !this._identifyMissing(o, t)), (o) => o in this._utils.schemas);
      return { knownKeys: r, unknownKeys: n };
    }
    _applyValidation(t, r, n) {
      let o = Vt(n.validate(t, this._utils), t);
      if (o !== true) throw this._invalidHandler(r, o.value, this._utils);
    }
    _applyUnknownHandler(t, r, n, o) {
      let u = this._unknownHandler(t, r, this._utils);
      if (u) for (let i of Object.keys(u)) {
        if (this._identifyMissing(i, u)) continue;
        let s = u[i];
        i in this._utils.schemas ? o(i, s) : n[i] = s;
      }
    }
    _applyPostprocess(t) {
      let r = this._postprocess(t, this._utils);
      if (r !== he) {
        if (r.delete) for (let n of r.delete) delete t[n];
        if (r.override) {
          let { knownKeys: n, unknownKeys: o } = this._partitionOptionKeys(r.override);
          for (let u of n) {
            let i = r.override[u];
            this._applyValidation(i, u, this._utils.schemas[u]), t[u] = i;
          }
          for (let u of o) {
            let i = r.override[u];
            this._applyUnknownHandler(u, i, t, (s, a) => {
              let D = this._utils.schemas[s];
              this._applyValidation(a, s, D), t[s] = a;
            });
          }
        }
      }
    }
  };
  var Gt;
  function go(e, t, { logger: r = false, isCLI: n = false, passThrough: o = false, FlagSchema: u, descriptor: i } = {}) {
    if (n) {
      if (!u) throw new Error("'FlagSchema' option is required.");
      if (!i) throw new Error("'descriptor' option is required.");
    } else i = ie;
    let s = o ? Array.isArray(o) ? (f, p) => o.includes(f) ? { [f]: p } : void 0 : (f, p) => ({ [f]: p }) : (f, p, c) => {
      let { _: F, ...m } = c.schemas;
      return at(f, p, { ...c, schemas: m });
    }, a = yo(t, { isCLI: n, FlagSchema: u }), D = new Et(a, { logger: r, unknown: s, descriptor: i }), l = r !== false;
    l && Gt && (D._hasDeprecationWarned = Gt);
    let d = D.normalize(e);
    return l && (Gt = D._hasDeprecationWarned), d;
  }
  function yo(e, { isCLI: t, FlagSchema: r }) {
    let n = [];
    t && n.push(lt.create({ name: "_" }));
    for (let o of e) n.push(Ao(o, { isCLI: t, optionInfos: e, FlagSchema: r })), o.alias && t && n.push(Dt.create({ name: o.alias, sourceName: o.name }));
    return n;
  }
  function Ao(e, { isCLI: t, optionInfos: r, FlagSchema: n }) {
    let { name: o } = e, u = { name: o }, i, s = {};
    switch (e.type) {
      case "int":
        i = mt, t && (u.preprocess = Number);
        break;
      case "string":
        i = Re;
        break;
      case "choice":
        i = dt, u.choices = e.choices.map((a) => a != null && a.redirect ? { ...a, redirect: { to: { key: e.name, value: a.redirect } } } : a);
        break;
      case "boolean":
        i = ft;
        break;
      case "flag":
        i = n, u.flags = r.flatMap((a) => [a.alias, a.description && a.name, a.oppositeDescription && `no-${a.name}`].filter(Boolean));
        break;
      case "path":
        i = Re;
        break;
      default:
        throw new Error(`Unexpected type ${e.type}`);
    }
    if (e.exception ? u.validate = (a, D, l) => e.exception(a) || D.validate(a, l) : u.validate = (a, D, l) => a === void 0 || D.validate(a, l), e.redirect && (s.redirect = (a) => a ? { to: typeof e.redirect == "string" ? e.redirect : { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (s.deprecated = true), t && !e.array) {
      let a = u.preprocess || ((D) => D);
      u.preprocess = (D, l, d) => l.preprocess(a(Array.isArray(D) ? y(false, D, -1) : D), d);
    }
    return e.array ? ct.create({ ...t ? { preprocess: (a) => Array.isArray(a) ? a : [a] } : {}, ...s, valueSchema: i.create(u) }) : i.create({ ...u, ...s });
  }
  var bn = go;
  var Bo = (e, t, r) => {
    if (!(e && t == null)) {
      if (t.findLast) return t.findLast(r);
      for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (r(o, n, t)) return o;
      }
    }
  };
  var Kt = Bo;
  function qt(e, t) {
    if (!t) throw new Error("parserName is required.");
    let r = Kt(false, e, (o) => o.parsers && Object.prototype.hasOwnProperty.call(o.parsers, t));
    if (r) return r;
    let n = `Couldn't resolve parser "${t}".`;
    throw n += " Plugins must be explicitly added to the standalone bundle.", new Pe(n);
  }
  function On(e, t) {
    if (!t) throw new Error("astFormat is required.");
    let r = Kt(false, e, (o) => o.printers && Object.prototype.hasOwnProperty.call(o.printers, t));
    if (r) return r;
    let n = `Couldn't find plugin for AST format "${t}".`;
    throw n += " Plugins must be explicitly added to the standalone bundle.", new Pe(n);
  }
  function ht({ plugins: e, parser: t }) {
    let r = qt(e, t);
    return Jt(r, t);
  }
  function Jt(e, t) {
    let r = e.parsers[t];
    return typeof r == "function" ? r() : r;
  }
  function Sn(e, t) {
    let r = e.printers[t];
    return typeof r == "function" ? r() : r;
  }
  var Nn = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
  async function wo(e, t = {}) {
    var d;
    let r = { ...e };
    if (!r.parser) if (r.filepath) {
      if (r.parser = un(r, { physicalFile: r.filepath }), !r.parser) throw new Ie(`No parser could be inferred for file "${r.filepath}".`);
    } else throw new Ie("No parser and no file path given, couldn't infer a parser.");
    let n = ot({ plugins: e.plugins, showDeprecated: true }).options, o = { ...Nn, ...Object.fromEntries(n.filter((f) => f.default !== void 0).map((f) => [f.name, f.default])) }, u = qt(r.plugins, r.parser), i = await Jt(u, r.parser);
    r.astFormat = i.astFormat, r.locEnd = i.locEnd, r.locStart = i.locStart;
    let s = (d = u.printers) != null && d[i.astFormat] ? u : On(r.plugins, i.astFormat), a = await Sn(s, i.astFormat);
    r.printer = a;
    let D = s.defaultOptions ? Object.fromEntries(Object.entries(s.defaultOptions).filter(([, f]) => f !== void 0)) : {}, l = { ...o, ...D };
    for (let [f, p] of Object.entries(l)) (r[f] === null || r[f] === void 0) && (r[f] = p);
    return r.parser === "json" && (r.trailingComma = "none"), bn(r, n, { passThrough: Object.keys(Nn), ...t });
  }
  var se = wo;
  var Vn = Me($n(), 1);
  async function ko(e, t) {
    let r = await ht(t), n = r.preprocess ? r.preprocess(e, t) : e;
    t.originalText = n;
    let o;
    try {
      o = await r.parse(n, t, t);
    } catch (u) {
      Lo(u, e);
    }
    return { text: n, ast: o };
  }
  function Lo(e, t) {
    let { loc: r } = e;
    if (r) {
      let n = (0, Vn.codeFrameColumns)(t, r, { highlightCode: true });
      throw e.message += `
` + n, e.codeFrame = n, e;
    }
    throw e;
  }
  var ce = ko;
  async function Un(e, t, r, n, o) {
    let { embeddedLanguageFormatting: u, printer: { embed: i, hasPrettierIgnore: s = () => false, getVisitorKeys: a } } = r;
    if (!i || u !== "auto") return;
    if (i.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");
    let D = X(i.getVisitorKeys ?? a), l = [];
    p();
    let d = e.stack;
    for (let { print: c, node: F, pathStack: m } of l) try {
      e.stack = m;
      let E = await c(f, t, e, r);
      E && o.set(F, E);
    } catch (E) {
      if (globalThis.PRETTIER_DEBUG) throw E;
    }
    e.stack = d;
    function f(c, F) {
      return Po(c, F, r, n);
    }
    function p() {
      let { node: c } = e;
      if (c === null || typeof c != "object" || s(e)) return;
      for (let m of D(c)) Array.isArray(c[m]) ? e.each(p, m) : e.call(p, m);
      let F = i(e, r);
      if (F) {
        if (typeof F == "function") {
          l.push({ print: F, node: c, pathStack: [...e.stack] });
          return;
        }
        o.set(c, F);
      }
    }
  }
  async function Po(e, t, r, n) {
    let o = await se({ ...r, ...t, parentParser: r.parser, originalText: e }, { passThrough: true }), { ast: u } = await ce(e, o), i = await n(u, o);
    return Ze(i);
  }
  function Io(e, t) {
    let { originalText: r, [Symbol.for("comments")]: n, locStart: o, locEnd: u, [Symbol.for("printedComments")]: i } = t, { node: s } = e, a = o(s), D = u(s);
    for (let l of n) o(l) >= a && u(l) <= D && i.add(l);
    return r.slice(a, D);
  }
  var zn = Io;
  async function Ye(e, t) {
    ({ ast: e } = await Qt(e, t));
    let r = /* @__PURE__ */ new Map(), n = new Mr(e), o = tn(t), u = /* @__PURE__ */ new Map();
    await Un(n, s, t, Ye, u);
    let i = await Gn(n, t, s, void 0, u);
    return en(t), i;
    function s(D, l) {
      return D === void 0 || D === n ? a(l) : Array.isArray(D) ? n.call(() => a(l), ...D) : n.call(() => a(l), D);
    }
    function a(D) {
      o(n);
      let l = n.node;
      if (l == null) return "";
      let d = l && typeof l == "object" && D === void 0;
      if (d && r.has(l)) return r.get(l);
      let f = Gn(n, t, s, D, u);
      return d && r.set(l, f), f;
    }
  }
  function Gn(e, t, r, n, o) {
    var a;
    let { node: u } = e, { printer: i } = t, s;
    return (a = i.hasPrettierIgnore) != null && a.call(i, e) ? s = zn(e, t) : o.has(u) ? s = o.get(u) : s = i.print(e, t, r, n), u === t.cursorNode && (s = Qe(s, (D) => [ve, D, ve])), i.printComment && (!i.willPrintOwnComments || !i.willPrintOwnComments(e, t)) && (s = Qr(e, s, t)), s;
  }
  async function Qt(e, t) {
    let r = e.comments ?? [];
    t[Symbol.for("comments")] = r, t[Symbol.for("tokens")] = e.tokens ?? [], t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), Jr(e, t);
    let { printer: { preprocess: n } } = t;
    return e = n ? await n(e, t) : e, { ast: e, comments: r };
  }
  function Ro(e, t) {
    let { cursorOffset: r, locStart: n, locEnd: o } = t, u = X(t.printer.getVisitorKeys), i = (a) => n(a) <= r && o(a) >= r, s = e;
    for (let a of Ur(e, { getVisitorKeys: u, filter: i })) s = a;
    return s;
  }
  var Kn = Ro;
  function Yo(e, t) {
    let { printer: { massageAstNode: r, getVisitorKeys: n } } = t;
    if (!r) return e;
    let o = X(n), u = r.ignoredProperties ?? /* @__PURE__ */ new Set();
    return i(e);
    function i(s, a) {
      if (!(s !== null && typeof s == "object")) return s;
      if (Array.isArray(s)) return s.map((f) => i(f, a)).filter(Boolean);
      let D = {}, l = new Set(o(s));
      for (let f in s) !Object.prototype.hasOwnProperty.call(s, f) || u.has(f) || (l.has(f) ? D[f] = i(s[f], s) : D[f] = s[f]);
      let d = r(s, D, a);
      if (d !== null) return d ?? D;
    }
  }
  var qn = Yo;
  var jo = (e, t, r) => {
    if (!(e && t == null)) {
      if (t.findLastIndex) return t.findLastIndex(r);
      for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (r(o, n, t)) return n;
      }
      return -1;
    }
  };
  var Jn = jo;
  var Ho = ({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify";
  function Wo(e, t) {
    let r = [e.node, ...e.parentNodes], n = /* @__PURE__ */ new Set([t.node, ...t.parentNodes]);
    return r.find((o) => Qn.has(o.type) && n.has(o));
  }
  function Xn(e) {
    let t = Jn(false, e, (r) => r.type !== "Program" && r.type !== "File");
    return t === -1 ? e : e.slice(0, t + 1);
  }
  function Mo(e, t, { locStart: r, locEnd: n }) {
    let o = e.node, u = t.node;
    if (o === u) return { startNode: o, endNode: u };
    let i = r(e.node);
    for (let a of Xn(t.parentNodes)) if (r(a) >= i) u = a;
    else break;
    let s = n(t.node);
    for (let a of Xn(e.parentNodes)) {
      if (n(a) <= s) o = a;
      else break;
      if (o === u) break;
    }
    return { startNode: o, endNode: u };
  }
  function er(e, t, r, n, o = [], u) {
    let { locStart: i, locEnd: s } = r, a = i(e), D = s(e);
    if (!(t > D || t < a || u === "rangeEnd" && t === a || u === "rangeStart" && t === D)) {
      for (let l of ut(e, r)) {
        let d = er(l, t, r, n, [e, ...o], u);
        if (d) return d;
      }
      if (!n || n(e, o[0])) return { node: e, parentNodes: o };
    }
  }
  function $o(e, t) {
    return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
  }
  var Qn = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]);
  var Vo = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
  function Zn(e, t, r) {
    if (!t) return false;
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
        return $o(t.type, r == null ? void 0 : r.type);
      case "json":
      case "json5":
      case "jsonc":
      case "json-stringify":
        return Qn.has(t.type);
      case "graphql":
        return Vo.has(t.kind);
      case "vue":
        return t.tag !== "root";
    }
    return false;
  }
  function eu(e, t, r) {
    let { rangeStart: n, rangeEnd: o, locStart: u, locEnd: i } = t;
    ke.ok(o > n);
    let s = e.slice(n, o).search(/\S/u), a = s === -1;
    if (!a) for (n += s; o > n && !/\S/u.test(e[o - 1]); --o) ;
    let D = er(r, n, t, (p, c) => Zn(t, p, c), [], "rangeStart"), l = a ? D : er(r, o, t, (p) => Zn(t, p), [], "rangeEnd");
    if (!D || !l) return { rangeStart: 0, rangeEnd: 0 };
    let d, f;
    if (Ho(t)) {
      let p = Wo(D, l);
      d = p, f = p;
    } else ({ startNode: d, endNode: f } = Mo(D, l, t));
    return { rangeStart: Math.min(u(d), u(f)), rangeEnd: Math.max(i(d), i(f)) };
  }
  var uu = "\uFEFF";
  var tu = Symbol("cursor");
  async function ou(e, t, r = 0) {
    if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
    let { ast: n, text: o } = await ce(e, t);
    t.cursorOffset >= 0 && (t.cursorNode = Kn(n, t));
    let u = await Ye(n, t, r);
    r > 0 && (u = Je([q, u], r, t.tabWidth));
    let i = Fe(u, t);
    if (r > 0) {
      let a = i.formatted.trim();
      i.cursorNodeStart !== void 0 && (i.cursorNodeStart -= i.formatted.indexOf(a)), i.formatted = a + Be(t.endOfLine);
    }
    let s = t[Symbol.for("comments")];
    if (t.cursorOffset >= 0) {
      let a, D, l, d, f;
      if (t.cursorNode && i.cursorNodeText ? (a = t.locStart(t.cursorNode), D = o.slice(a, t.locEnd(t.cursorNode)), l = t.cursorOffset - a, d = i.cursorNodeStart, f = i.cursorNodeText) : (a = 0, D = o, l = t.cursorOffset, d = 0, f = i.formatted), D === f) return { formatted: i.formatted, cursorOffset: d + l, comments: s };
      let p = D.split("");
      p.splice(l, 0, tu);
      let c = f.split(""), F = dr(p, c), m = d;
      for (let E of F) if (E.removed) {
        if (E.value.includes(tu)) break;
      } else m += E.count;
      return { formatted: i.formatted, cursorOffset: m, comments: s };
    }
    return { formatted: i.formatted, cursorOffset: -1, comments: s };
  }
  async function Uo(e, t) {
    let { ast: r, text: n } = await ce(e, t), { rangeStart: o, rangeEnd: u } = eu(n, t, r), i = n.slice(o, u), s = Math.min(o, n.lastIndexOf(`
`, o) + 1), a = n.slice(s, o).match(/^\s*/u)[0], D = me(a, t.tabWidth), l = await ou(i, { ...t, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t.cursorOffset > o && t.cursorOffset <= u ? t.cursorOffset - o : -1, endOfLine: "lf" }, D), d = l.formatted.trimEnd(), { cursorOffset: f } = t;
    f > u ? f += d.length - i.length : l.cursorOffset >= 0 && (f = l.cursorOffset + o);
    let p = n.slice(0, o) + d + n.slice(u);
    if (t.endOfLine !== "lf") {
      let c = Be(t.endOfLine);
      f >= 0 && c === `\r
` && (f += wt(p.slice(0, f), `
`)), p = ne(false, p, `
`, c);
    }
    return { formatted: p, cursorOffset: f, comments: l.comments };
  }
  function tr(e, t, r) {
    return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? r : t;
  }
  function ru(e, t) {
    let { cursorOffset: r, rangeStart: n, rangeEnd: o } = t;
    return r = tr(e, r, -1), n = tr(e, n, 0), o = tr(e, o, e.length), { ...t, cursorOffset: r, rangeStart: n, rangeEnd: o };
  }
  function iu(e, t) {
    let { cursorOffset: r, rangeStart: n, rangeEnd: o, endOfLine: u } = ru(e, t), i = e.charAt(0) === uu;
    if (i && (e = e.slice(1), r--, n--, o--), u === "auto" && (u = Fr(e)), e.includes("\r")) {
      let s = (a) => wt(e.slice(0, Math.max(a, 0)), `\r
`);
      r -= s(r), n -= s(n), o -= s(o), e = mr(e);
    }
    return { hasBOM: i, text: e, options: ru(e, { ...t, cursorOffset: r, rangeStart: n, rangeEnd: o, endOfLine: u }) };
  }
  async function nu(e, t) {
    let r = await ht(t);
    return !r.hasPragma || r.hasPragma(e);
  }
  async function rr(e, t) {
    let { hasBOM: r, text: n, options: o } = iu(e, await se(t));
    if (o.rangeStart >= o.rangeEnd && n !== "" || o.requirePragma && !await nu(n, o)) return { formatted: e, cursorOffset: t.cursorOffset, comments: [] };
    let u;
    return o.rangeStart > 0 || o.rangeEnd < n.length ? u = await Uo(n, o) : (!o.requirePragma && o.insertPragma && o.printer.insertPragma && !await nu(n, o) && (n = o.printer.insertPragma(n)), u = await ou(n, o)), r && (u.formatted = uu + u.formatted, u.cursorOffset >= 0 && u.cursorOffset++), u;
  }
  async function su(e, t, r) {
    let { text: n, options: o } = iu(e, await se(t)), u = await ce(n, o);
    return r && (r.preprocessForPrint && (u.ast = await Qt(u.ast, o)), r.massage && (u.ast = qn(u.ast, o))), u;
  }
  async function au(e, t) {
    t = await se(t);
    let r = await Ye(e, t);
    return Fe(r, t);
  }
  async function Du(e, t) {
    let r = Or(e), { formatted: n } = await rr(r, { ...t, parser: "__js_expression" });
    return n;
  }
  async function lu(e, t) {
    t = await se(t);
    let { ast: r } = await ce(e, t);
    return Ye(r, t);
  }
  async function cu(e, t) {
    return Fe(e, await se(t));
  }
  var nr = {};
  We(nr, { builders: () => Go, printer: () => Ko, utils: () => qo });
  var Go = { join: be, line: Ke, softline: vr, hardline: q, literalline: qe, group: _t, conditionalGroup: Ar, fill: Ge, lineSuffix: xe, lineSuffixBoundary: xr, cursor: ve, breakParent: de, ifBreak: Br, trim: _r, indent: De, indentIfBreak: wr, align: ae, addAlignmentToDoc: Je, markAsRoot: gr, dedentToRoot: Cr, dedent: yr, hardlineWithoutBreakParent: _e, literallineWithoutBreakParent: vt, label: br, concat: (e) => e };
  var Ko = { printDocToString: Fe };
  var qo = { willBreak: Ir, traverseDoc: we, findInDoc: Xe, mapDoc: Ne, removeLines: Yr, stripTrailingHardline: Ze, replaceEndOfLine: jr, canBreak: Hr };
  var fu = "3.3.3";
  var or = {};
  We(or, { addDanglingComment: () => re, addLeadingComment: () => ue, addTrailingComment: () => oe, getAlignmentSize: () => me, getIndentSize: () => pu, getMaxContinuousCount: () => du, getNextNonSpaceNonCommentCharacter: () => Fu, getNextNonSpaceNonCommentCharacterIndex: () => si, getStringWidth: () => Oe, hasNewline: () => V, hasNewlineInRange: () => mu, hasSpaces: () => Eu, isNextLineEmpty: () => ci, isNextLineEmptyAfterIndex: () => gt, isPreviousLineEmpty: () => Di, makeString: () => hu, skip: () => Ee, skipEverythingButNewLine: () => nt, skipInlineComment: () => Ce, skipNewline: () => M, skipSpaces: () => T, skipToLineEnd: () => rt, skipTrailingComment: () => ge, skipWhitespace: () => zr });
  function Jo(e, t) {
    if (t === false) return false;
    if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
      for (let r = t + 2; r < e.length; ++r) if (e.charAt(r) === "*" && e.charAt(r + 1) === "/") return r + 2;
    }
    return t;
  }
  var Ce = Jo;
  function Xo(e, t) {
    return t === false ? false : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? nt(e, t) : t;
  }
  var ge = Xo;
  function Zo(e, t) {
    let r = null, n = t;
    for (; n !== r; ) r = n, n = T(e, n), n = Ce(e, n), n = ge(e, n), n = M(e, n);
    return n;
  }
  var je = Zo;
  function Qo(e, t) {
    let r = null, n = t;
    for (; n !== r; ) r = n, n = rt(e, n), n = Ce(e, n), n = T(e, n);
    return n = ge(e, n), n = M(e, n), n !== false && V(e, n);
  }
  var gt = Qo;
  function ei(e, t) {
    let r = e.lastIndexOf(`
`);
    return r === -1 ? 0 : me(e.slice(r + 1).match(/^[\t ]*/u)[0], t);
  }
  var pu = ei;
  function ur(e) {
    if (typeof e != "string") throw new TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
  function ti(e, t) {
    let r = e.match(new RegExp(`(${ur(t)})+`, "gu"));
    return r === null ? 0 : r.reduce((n, o) => Math.max(n, o.length / t.length), 0);
  }
  var du = ti;
  function ri(e, t) {
    let r = je(e, t);
    return r === false ? "" : e.charAt(r);
  }
  var Fu = ri;
  function ni(e, t, r) {
    for (let n = t; n < r; ++n) if (e.charAt(n) === `
`) return true;
    return false;
  }
  var mu = ni;
  function ui(e, t, r = {}) {
    return T(e, r.backwards ? t - 1 : t, r) !== t;
  }
  var Eu = ui;
  function oi(e, t, r) {
    let n = t === '"' ? "'" : '"', u = ne(false, e, /\\(.)|(["'])/gsu, (i, s, a) => s === n ? s : a === t ? "\\" + a : a || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s) ? s : "\\" + s));
    return t + u + t;
  }
  var hu = oi;
  function ii(e, t, r) {
    return je(e, r(t));
  }
  function si(e, t) {
    return arguments.length === 2 || typeof t == "number" ? je(e, t) : ii(...arguments);
  }
  function ai(e, t, r) {
    return Le(e, r(t));
  }
  function Di(e, t) {
    return arguments.length === 2 || typeof t == "number" ? Le(e, t) : ai(...arguments);
  }
  function li(e, t, r) {
    return gt(e, r(t));
  }
  function ci(e, t) {
    return arguments.length === 2 || typeof t == "number" ? gt(e, t) : li(...arguments);
  }
  function fe(e, t = 1) {
    return async (...r) => {
      let n = r[t] ?? {}, o = n.plugins ?? [];
      return r[t] = { ...n, plugins: Array.isArray(o) ? o : Object.values(o) }, e(...r);
    };
  }
  var Cu = fe(rr);
  async function gu(e, t) {
    let { formatted: r } = await Cu(e, { ...t, cursorOffset: -1 });
    return r;
  }
  async function fi(e, t) {
    return await gu(e, t) === e;
  }
  var pi = fe(ot, 0);
  var di = { parse: fe(su), formatAST: fe(au), formatDoc: fe(Du), printToDoc: fe(lu), printDocToString: fe(cu) };
  var fc = ir;

  // node_modules/@forsakringskassan/docs-live-example/dist/esm/index.js
  var import_parser_html = __toESM(require_html(), 1);
  var import_vue4 = __require("vue");
  var import_vue5 = __require("vue");
  var import_vue6 = __require("vue");
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __commonJS2 = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps2 = (to2, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to2, key) && key !== except)
          __defProp2(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
    }
    return to2;
  };
  var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var require_core = __commonJS2({
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
        function langRe(value, global2) {
          return new RegExp(
            source(value),
            "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global2 ? "g" : "")
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
      var version = "11.10.0";
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
          if (document.readyState === "loading") {
            wantsHighlight = true;
            return;
          }
          const blocks = document.querySelectorAll(options.cssSelector);
          blocks.forEach(highlightElement);
        }
        function boot() {
          if (wantsHighlight) highlightAll();
        }
        if (typeof window !== "undefined" && window.addEventListener) {
          window.addEventListener("DOMContentLoaded", boot, false);
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
    let h2 = 1103547991 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, a);
      h2 = Math.imul(h2 ^ ch, b2);
    }
    h1 = Math.imul(h1 ^ h1 >>> 16, c) ^ Math.imul(h2 ^ h2 >>> 13, d);
    h2 = Math.imul(h2 ^ h2 >>> 16, c) ^ Math.imul(h1 ^ h1 >>> 13, d);
    return e * (f & h2) + (h1 >>> 0);
  }
  function generateId(template) {
    const hash = cyrb53(template);
    return `le-${hash.toString(16)}`;
  }
  var import_core = __toESM2(require_core(), 1);
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
    plugins: [import_parser_html.default],
    singleQuote: false,
    arrowParens: "always",
    tabWidth: 4,
    printWidth: 80
  };
  async function highlight(code) {
    const formatted = await fc.format(code, prettierConfig);
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
  var LiveExampleSourcecode_default = /* @__PURE__ */ (0, import_vue2.defineComponent)({
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
      const sourcecode = (0, import_vue3.ref)("");
      const expandable = (0, import_vue3.ref)(null);
      const animation = (0, import_vue3.ref)({
        isOpen: false,
        toggle() {
        }
      });
      const selectedLanguage = (0, import_vue3.ref)(toSelectedLanguage(props.templateLanguage));
      const codeToggleText = (0, import_vue3.computed)(() => {
        return animation.value.isOpen ? "D\xF6lj kod" : "Visa kod";
      });
      (0, import_vue3.onMounted)(() => {
        if (expandable.value) {
          animation.value = expandAnimation(expandable.value);
        } else {
          throw new Error("Missing HTML element");
        }
        updateSourcecode();
      });
      (0, import_vue3.watch)(() => props.template, onUpdateTemplate);
      (0, import_vue3.watch)(() => props.templateLanguage, updateSelectedLanguage, { once: true });
      async function updateSourcecode() {
        await (0, import_vue3.nextTick)();
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
      }, set idPrefix(v) {
        idPrefix = v;
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
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
      import_vue4.Fragment,
      null,
      [
        (0, import_vue4.createElementVNode)("div", _hoisted_1, [
          (0, import_vue4.createElementVNode)("button", {
            type: "button",
            class: "button button--discrete",
            "aria-controls": $setup.id("code-expand"),
            "aria-expanded": $setup.animation.isOpen ? "true" : "false",
            onClick: $setup.onToggleCode
          }, [
            _cache[2] || (_cache[2] = (0, import_vue4.createElementVNode)(
              "i",
              { class: "icon icon--code" },
              null,
              -1
              /* HOISTED */
            )),
            (0, import_vue4.createTextVNode)(
              " " + (0, import_vue4.toDisplayString)($setup.codeToggleText),
              1
              /* TEXT */
            )
          ], 8, _hoisted_2)
        ]),
        (0, import_vue4.createElementVNode)("div", {
          id: $setup.id("code-expand"),
          ref: "expandable",
          class: "collapsed"
        }, [
          (0, import_vue4.createCommentVNode)(" [html-validate-disable-next wcag/h32 -- this form is not meant to be submitted] "),
          (0, import_vue4.createElementVNode)("form", _hoisted_4, [
            $setup.sourcecode ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("fieldset", _hoisted_5, [
              _cache[3] || (_cache[3] = (0, import_vue4.createElementVNode)(
                "legend",
                { class: "label fieldset__label" },
                "Kodspr\xE5k",
                -1
                /* HOISTED */
              )),
              (0, import_vue4.createElementVNode)("div", _hoisted_6, [
                $props.templateLanguage === "vue" ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("div", _hoisted_7, [
                  (0, import_vue4.withDirectives)((0, import_vue4.createElementVNode)("input", {
                    id: $setup.id("lang-original"),
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedLanguage = $event),
                    type: "radio",
                    class: "radio-button__input",
                    name: "selected-language",
                    value: "original",
                    onChange: $setup.updateSourcecode
                  }, null, 40, _hoisted_8), [
                    [import_vue4.vModelRadio, $setup.selectedLanguage]
                  ]),
                  (0, import_vue4.createElementVNode)("label", {
                    for: $setup.id("lang-original"),
                    class: "radio-button__label"
                  }, " Vue ", 8, _hoisted_9)
                ])) : (0, import_vue4.createCommentVNode)("v-if", true),
                (0, import_vue4.createElementVNode)("div", _hoisted_10, [
                  (0, import_vue4.withDirectives)((0, import_vue4.createElementVNode)("input", {
                    id: $setup.id("lang-rendered"),
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.selectedLanguage = $event),
                    type: "radio",
                    class: "radio-button__input",
                    name: "selected-language",
                    value: "rendered",
                    onChange: $setup.updateSourcecode
                  }, null, 40, _hoisted_11), [
                    [import_vue4.vModelRadio, $setup.selectedLanguage]
                  ]),
                  (0, import_vue4.createElementVNode)("label", {
                    for: $setup.id("lang-rendered"),
                    class: "radio-button__label"
                  }, " HTML ", 8, _hoisted_12)
                ])
              ])
            ])) : (0, import_vue4.createCommentVNode)("v-if", true)
          ]),
          (0, import_vue4.createCommentVNode)(" eslint-disable-next-line vue/no-v-html -- expected to show highlighted markup "),
          (0, import_vue4.createElementVNode)("pre", { innerHTML: $setup.sourcecode }, null, 8, _hoisted_13)
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
  var live_vue_code_default = (0, import_vue5.defineComponent)({
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
      const renderFunction = (0, import_vue5.compile)(this.template);
      if (!renderFunction) {
        const message = "Failed to compile Vue render function!";
        return (0, import_vue5.h)("div", { style: "color: red" }, message);
      }
      return (0, import_vue5.h)(
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
  var LiveExample_default = (0, import_vue.defineComponent)({
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
    const _component_live_vue_code = (0, import_vue6.resolveComponent)("live-vue-code");
    const _component_live_example_sourcecode = (0, import_vue6.resolveComponent)("live-example-sourcecode");
    return (0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("div", _hoisted_14, [
      (0, import_vue6.createElementVNode)(
        "div",
        _hoisted_22,
        [
          _ctx.templateLanguage === "vue" ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("div", _hoisted_32, [
            (0, import_vue6.createVNode)(_component_live_vue_code, {
              components: _ctx.components,
              template: _ctx.template,
              livedata: _ctx.livedata,
              livemethods: _ctx.livemethods
            }, null, 8, ["components", "template", "livedata", "livemethods"])
          ])) : _ctx.templateLanguage === "html" ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)(
            import_vue6.Fragment,
            { key: 1 },
            [
              (0, import_vue6.createCommentVNode)(" eslint-disable-next-line vue/no-v-html -- expected to show rendered html "),
              (0, import_vue6.createElementVNode)("div", { innerHTML: _ctx.template }, null, 8, _hoisted_42)
            ],
            2112
            /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
          )) : ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("div", _hoisted_52, _cache[0] || (_cache[0] = [
            (0, import_vue6.createElementVNode)(
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
      (0, import_vue6.createElementVNode)("div", _hoisted_62, [
        (0, import_vue6.renderSlot)(_ctx.$slots, "default")
      ]),
      _ctx.exampleElement ? ((0, import_vue6.openBlock)(), (0, import_vue6.createElementBlock)("div", _hoisted_72, [
        (0, import_vue6.createVNode)(_component_live_example_sourcecode, {
          element: _ctx.exampleElement,
          template: _ctx.template,
          "template-language": _ctx.templateLanguage
        }, null, 8, ["element", "template", "template-language"])
      ])) : (0, import_vue6.createCommentVNode)("v-if", true)
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
      const tokens = value.map((it2) => it2 ? String(it2) : null).filter(Boolean);
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

  // temp/vendor-forsakringskassan-docs-live-example.in.js
  window.require = window.require || function customRequire(name) {
    if (typeof window.__modules__ === "undefined") {
      window.__modules__ = {};
    }
    const mod = window.__modules__[name];
    if (!mod) {
      throw new Error(`Cannot find module "${name}"`);
    }
    return mod;
  };
  window.__modules__ = window.__modules__ || {};
  window.__modules__["@forsakringskassan/docs-live-example"] = esm_exports;
})();
