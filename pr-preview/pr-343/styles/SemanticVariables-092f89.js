var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
  TestPlugin,
  TranslationPlugin,
  ValidationPlugin,
  setRunningContext
} from "@fkui/vue";
function setup(options) {
  const { rootComponent, selector } = options;
  const app = createApp({
    render() {
      return h(FErrorHandlingApp, { defaultComponent: rootComponent });
    }
  });
  setRunningContext(app);
  app.use(ErrorPlugin, {
    captureWarnings: true,
    logToConsole: true
  });
  app.use(ValidationPlugin);
  app.use(TestPlugin);
  app.use(TranslationPlugin);
  app.mount(selector);
}

// virtual-entry:./docs/styles/examples/SemanticVariables.vue
import { defineComponent as _defineComponent } from "vue";

// node_modules/@adobe/css-tools/dist/index.mjs
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, "__esModule", { value: true, configurable: true });
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, { get: v, set: s, enumerable: true, configurable: true });
}
var $009ddb00d3ec72b8$exports = {};
$parcel$defineInteropFlag($009ddb00d3ec72b8$exports);
$parcel$export($009ddb00d3ec72b8$exports, "default", () => $009ddb00d3ec72b8$export$2e2bcd8739ae039);
var $009ddb00d3ec72b8$export$2e2bcd8739ae039 = class extends Error {
  constructor(filename, msg, lineno, column, css) {
    super(filename + ":" + lineno + ":" + column + ": " + msg);
    this.reason = msg;
    this.filename = filename;
    this.line = lineno;
    this.column = column;
    this.source = css;
  }
};
var $0865a9fb4cc365fe$exports = {};
$parcel$defineInteropFlag($0865a9fb4cc365fe$exports);
$parcel$export($0865a9fb4cc365fe$exports, "default", () => $0865a9fb4cc365fe$export$2e2bcd8739ae039);
var $0865a9fb4cc365fe$export$2e2bcd8739ae039 = class {
  constructor(start, end, source) {
    this.start = start;
    this.end = end;
    this.source = source;
  }
};
var $b2e137848b48cf4f$exports = {};
$parcel$export($b2e137848b48cf4f$exports, "CssTypes", () => $b2e137848b48cf4f$export$9be5dd6e61d5d73a);
var $b2e137848b48cf4f$export$9be5dd6e61d5d73a;
(function(CssTypes) {
  CssTypes["stylesheet"] = "stylesheet";
  CssTypes["rule"] = "rule";
  CssTypes["declaration"] = "declaration";
  CssTypes["comment"] = "comment";
  CssTypes["container"] = "container";
  CssTypes["charset"] = "charset";
  CssTypes["document"] = "document";
  CssTypes["customMedia"] = "custom-media";
  CssTypes["fontFace"] = "font-face";
  CssTypes["host"] = "host";
  CssTypes["import"] = "import";
  CssTypes["keyframes"] = "keyframes";
  CssTypes["keyframe"] = "keyframe";
  CssTypes["layer"] = "layer";
  CssTypes["media"] = "media";
  CssTypes["namespace"] = "namespace";
  CssTypes["page"] = "page";
  CssTypes["supports"] = "supports";
})($b2e137848b48cf4f$export$9be5dd6e61d5d73a || ($b2e137848b48cf4f$export$9be5dd6e61d5d73a = {}));
var $d708735ed1303b43$var$commentre = /\/\*[^]*?(?:\*\/|$)/g;
var $d708735ed1303b43$export$98e6a39c04603d36 = (css, options) => {
  options = options || {};
  let lineno = 1;
  let column = 1;
  function updatePosition(str) {
    const lines = str.match(/\n/g);
    if (lines) lineno += lines.length;
    const i = str.lastIndexOf("\n");
    column = ~i ? str.length - i : column + str.length;
  }
  function position() {
    const start = {
      line: lineno,
      column
    };
    return function(node) {
      node.position = new (0, $0865a9fb4cc365fe$export$2e2bcd8739ae039)(start, {
        line: lineno,
        column
      }, options?.source || "");
      whitespace();
      return node;
    };
  }
  const errorsList = [];
  function error(msg) {
    const err = new (0, $009ddb00d3ec72b8$export$2e2bcd8739ae039)(options?.source || "", msg, lineno, column, css);
    if (options?.silent) errorsList.push(err);
    else throw err;
  }
  function stylesheet() {
    const rulesList = rules();
    const result = {
      type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).stylesheet,
      stylesheet: {
        source: options?.source,
        rules: rulesList,
        parsingErrors: errorsList
      }
    };
    return result;
  }
  function open() {
    return match(/^{\s*/);
  }
  function close() {
    return match(/^}/);
  }
  function rules() {
    let node;
    const rules2 = [];
    whitespace();
    comments(rules2);
    while (css.length && css.charAt(0) !== "}" && (node = atrule() || rule())) if (node) {
      rules2.push(node);
      comments(rules2);
    }
    return rules2;
  }
  function match(re) {
    const m = re.exec(css);
    if (!m) return;
    const str = m[0];
    updatePosition(str);
    css = css.slice(str.length);
    return m;
  }
  function whitespace() {
    match(/^\s*/);
  }
  function comments(rules2) {
    let c;
    rules2 = rules2 || [];
    while (c = comment()) if (c) rules2.push(c);
    return rules2;
  }
  function comment() {
    const pos = position();
    if ("/" !== css.charAt(0) || "*" !== css.charAt(1)) return;
    const m = match(/^\/\*[^]*?\*\//);
    if (!m) return error("End of comment missing");
    return pos({
      type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).comment,
      comment: m[0].slice(2, -2)
    });
  }
  function findClosingParenthese(str, start, depth) {
    let ptr = start + 1;
    let found = false;
    let closeParentheses = str.indexOf(")", ptr);
    while (!found && closeParentheses !== -1) {
      const nextParentheses = str.indexOf("(", ptr);
      if (nextParentheses !== -1 && nextParentheses < closeParentheses) {
        const nextSearch = findClosingParenthese(str, nextParentheses + 1, depth + 1);
        ptr = nextSearch + 1;
        closeParentheses = str.indexOf(")", ptr);
      } else found = true;
    }
    if (found && closeParentheses !== -1) return closeParentheses;
    else return -1;
  }
  function selector() {
    const m = match(/^([^{]+)/);
    if (!m) return;
    let res = $d708735ed1303b43$var$trim(m[0]).replace($d708735ed1303b43$var$commentre, "");
    if (res.indexOf(",") === -1) return [
      res
    ];
    let ptr = 0;
    let startParentheses = res.indexOf("(", ptr);
    while (startParentheses !== -1) {
      const closeParentheses = findClosingParenthese(res, startParentheses, 0);
      if (closeParentheses === -1) break;
      ptr = closeParentheses + 1;
      res = res.substring(0, startParentheses) + res.substring(startParentheses, closeParentheses).replace(/,/g, "\u200C") + res.substring(closeParentheses);
      startParentheses = res.indexOf("(", ptr);
    }
    res = res.replace(/("|')(?:\\\1|.)*?\1/g, (m2) => m2.replace(/,/g, "\u200C"));
    return res.split(",").map((s) => {
      return $d708735ed1303b43$var$trim(s.replace(/\u200C/g, ","));
    });
  }
  function declaration() {
    const pos = position();
    const propMatch = match(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
    if (!propMatch) return;
    const propValue = $d708735ed1303b43$var$trim(propMatch[0]);
    if (!match(/^:\s*/)) return error("property missing ':'");
    const val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/);
    const ret = pos({
      type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).declaration,
      property: propValue.replace($d708735ed1303b43$var$commentre, ""),
      value: val ? $d708735ed1303b43$var$trim(val[0]).replace($d708735ed1303b43$var$commentre, "") : ""
    });
    match(/^[;\s]*/);
    return ret;
  }
  function declarations() {
    const decls = [];
    if (!open()) return error("missing '{'");
    comments(decls);
    let decl;
    while (decl = declaration()) if (decl) {
      decls.push(decl);
      comments(decls);
    }
    if (!close()) return error("missing '}'");
    return decls;
  }
  function keyframe() {
    let m;
    const vals = [];
    const pos = position();
    while (m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)) {
      vals.push(m[1]);
      match(/^,\s*/);
    }
    if (!vals.length) return;
    return pos({
      type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).keyframe,
      values: vals,
      declarations: declarations() || []
    });
  }
  function atkeyframes() {
    const pos = position();
    const m1 = match(/^@([-\w]+)?keyframes\s*/);
    if (!m1) return;
    const vendor = m1[1];
    const m2 = match(/^([-\w]+)\s*/);
    if (!m2) return error("@keyframes missing name");
    const name = m2[1];
    if (!open()) return error("@keyframes missing '{'");
    let frame;
    let frames = comments();
    while (frame = keyframe()) {
      frames.push(frame);
      frames = frames.concat(comments());
    }
    if (!close()) return error("@keyframes missing '}'");
    return pos({
      type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).keyframes,
      name,
      vendor,
      keyframes: frames
    });
  }
  function atsupports() {
    const pos = position();
    const m = match(/^@supports *([^{]+)/);
    if (!m) return;
    const supports = $d708735ed1303b43$var$trim(m[1]);
    if (!open()) return error("@supports missing '{'");
    const style = comments().concat(rules());
    if (!close()) return error("@supports missing '}'");
    return pos({
      type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).supports,
      supports,
      rules: style
    });
  }
  function athost() {
    const pos = position();
    const m = match(/^@host\s*/);
    if (!m) return;
    if (!open()) return error("@host missing '{'");
    const style = comments().concat(rules());
    if (!close()) return error("@host missing '}'");
    return pos({
      type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).host,
      rules: style
    });
  }
  function atcontainer() {
    const pos = position();
    const m = match(/^@container *([^{]+)/);
    if (!m) return;
    const container = $d708735ed1303b43$var$trim(m[1]);
    if (!open()) return error("@container missing '{'");
    const style = comments().concat(rules());
    if (!close()) return error("@container missing '}'");
    return pos({
      type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).container,
      container,
      rules: style
    });
  }
  function atlayer() {
    const pos = position();
    const m = match(/^@layer *([^{;@]+)/);
    if (!m) return;
    const layer = $d708735ed1303b43$var$trim(m[1]);
    if (!open()) {
      match(/^[;\s]*/);
      return pos({
        type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).layer,
        layer
      });
    }
    const style = comments().concat(rules());
    if (!close()) return error("@layer missing '}'");
    return pos({
      type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).layer,
      layer,
      rules: style
    });
  }
  function atmedia() {
    const pos = position();
    const m = match(/^@media *([^{]+)/);
    if (!m) return;
    const media = $d708735ed1303b43$var$trim(m[1]);
    if (!open()) return error("@media missing '{'");
    const style = comments().concat(rules());
    if (!close()) return error("@media missing '}'");
    return pos({
      type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).media,
      media,
      rules: style
    });
  }
  function atcustommedia() {
    const pos = position();
    const m = match(/^@custom-media\s+(--\S+)\s*([^{;\s][^{;]*);/);
    if (!m) return;
    return pos({
      type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).customMedia,
      name: $d708735ed1303b43$var$trim(m[1]),
      media: $d708735ed1303b43$var$trim(m[2])
    });
  }
  function atpage() {
    const pos = position();
    const m = match(/^@page */);
    if (!m) return;
    const sel = selector() || [];
    if (!open()) return error("@page missing '{'");
    let decls = comments();
    let decl;
    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }
    if (!close()) return error("@page missing '}'");
    return pos({
      type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).page,
      selectors: sel,
      declarations: decls
    });
  }
  function atdocument() {
    const pos = position();
    const m = match(/^@([-\w]+)?document *([^{]+)/);
    if (!m) return;
    const vendor = $d708735ed1303b43$var$trim(m[1]);
    const doc = $d708735ed1303b43$var$trim(m[2]);
    if (!open()) return error("@document missing '{'");
    const style = comments().concat(rules());
    if (!close()) return error("@document missing '}'");
    return pos({
      type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).document,
      document: doc,
      vendor,
      rules: style
    });
  }
  function atfontface() {
    const pos = position();
    const m = match(/^@font-face\s*/);
    if (!m) return;
    if (!open()) return error("@font-face missing '{'");
    let decls = comments();
    let decl;
    while (decl = declaration()) {
      decls.push(decl);
      decls = decls.concat(comments());
    }
    if (!close()) return error("@font-face missing '}'");
    return pos({
      type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).fontFace,
      declarations: decls
    });
  }
  const atimport = _compileAtrule("import");
  const atcharset = _compileAtrule("charset");
  const atnamespace = _compileAtrule("namespace");
  function _compileAtrule(name) {
    const re = new RegExp("^@" + name + `\\s*((?::?[^;'"]|"(?:\\\\"|[^"])*?"|'(?:\\\\'|[^'])*?')+)(?:;|$)`);
    return function() {
      const pos = position();
      const m = match(re);
      if (!m) return;
      const ret = {
        type: name
      };
      ret[name] = m[1].trim();
      return pos(ret);
    };
  }
  function atrule() {
    if (css[0] !== "@") return;
    return atkeyframes() || atmedia() || atcustommedia() || atsupports() || atimport() || atcharset() || atnamespace() || atdocument() || atpage() || athost() || atfontface() || atcontainer() || atlayer();
  }
  function rule() {
    const pos = position();
    const sel = selector();
    if (!sel) return error("selector missing");
    comments();
    return pos({
      type: (0, $b2e137848b48cf4f$export$9be5dd6e61d5d73a).rule,
      selectors: sel,
      declarations: declarations() || []
    });
  }
  return $d708735ed1303b43$var$addParent(stylesheet());
};
function $d708735ed1303b43$var$trim(str) {
  return str ? str.trim() : "";
}
function $d708735ed1303b43$var$addParent(obj, parent) {
  const isNode = obj && typeof obj.type === "string";
  const childParent = isNode ? obj : parent;
  for (const k in obj) {
    const value = obj[k];
    if (Array.isArray(value)) value.forEach((v) => {
      $d708735ed1303b43$var$addParent(v, childParent);
    });
    else if (value && typeof value === "object") $d708735ed1303b43$var$addParent(value, childParent);
  }
  if (isNode) Object.defineProperty(obj, "parent", {
    configurable: true,
    writable: true,
    enumerable: false,
    value: parent || null
  });
  return obj;
}
var $d708735ed1303b43$export$2e2bcd8739ae039 = $d708735ed1303b43$export$98e6a39c04603d36;
var $149c1bd638913645$export$98e6a39c04603d36 = (0, $d708735ed1303b43$export$2e2bcd8739ae039);

// packages/theme-default/dist/fkui-css-variables.css
var fkui_css_variables_exports = {};
__export(fkui_css_variables_exports, {
  default: () => fkui_css_variables_default
});
var fkui_css_variables_default = {};

// virtual-entry:./docs/styles/examples/SemanticVariables.vue
import { FDataTable, FTableColumn } from "@fkui/vue";
import { createTextVNode as _createTextVNode, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, normalizeStyle as _normalizeStyle, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "SemanticVariables",
  setup(__props, { expose: __expose }) {
    __expose();
    console.log(fkui_css_variables_exports);
    const { stylesheet } = $149c1bd638913645$export$98e6a39c04603d36(fkui_css_variables_exports);
    const root = stylesheet.rules.find((it) => {
      return it.type === "rule" && it.selectors.includes(":root");
    });
    console.log(root);
    const rows = Array.from(getTokens(root));
    console.log(rows);
    function* getTokens(rule) {
      if (!rule) {
        return;
      }
      let last = null;
      for (const decl of rule.declarations) {
        if (decl.type === "declaration" && decl.property.startsWith("--fkds-")) {
          last = {
            name: decl.property,
            value: decl.value,
            comment: null
          };
          yield last;
        } else if (decl.type === "comment" && last !== null) {
          last.comment = decl.comment.trim();
        }
      }
    }
    const __returned__ = { stylesheet, root, rows, getTokens, get FDataTable() {
      return FDataTable;
    }, get FTableColumn() {
      return FTableColumn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FDataTable"], {
    rows: $setup.rows,
    "key-attribute": "name",
    "aria-labelledby": "variabler",
    striped: ""
  }, {
    caption: _withCtx(() => _cache[0] || (_cache[0] = [
      _createTextVNode("Tillg\xE4ngliga semantiska f\xE4rger")
    ])),
    default: _withCtx(({ row }) => [
      _createVNode(
        $setup["FTableColumn"],
        {
          name: "name",
          title: "Namn",
          shrink: ""
        },
        {
          default: _withCtx(() => [
            _createElementVNode(
              "code",
              null,
              _toDisplayString(row.name),
              1
              /* TEXT */
            )
          ]),
          _: 2
          /* DYNAMIC */
        },
        1024
        /* DYNAMIC_SLOTS */
      ),
      _createVNode(
        $setup["FTableColumn"],
        {
          name: "value",
          title: "F\xE4rg",
          shrink: ""
        },
        {
          default: _withCtx(() => [
            _createElementVNode(
              "code",
              null,
              _toDisplayString(row.value),
              1
              /* TEXT */
            ),
            _createElementVNode(
              "span",
              {
                class: "color",
                style: _normalizeStyle(`--value: ${row.value}`)
              },
              null,
              4
              /* STYLE */
            )
          ]),
          _: 2
          /* DYNAMIC */
        },
        1024
        /* DYNAMIC_SLOTS */
      ),
      _createVNode(
        $setup["FTableColumn"],
        {
          name: "comment",
          title: "Beskrivning",
          expand: ""
        },
        {
          default: _withCtx(() => [
            _createTextVNode(
              _toDisplayString(row.comment),
              1
              /* TEXT */
            )
          ]),
          _: 2
          /* DYNAMIC */
        },
        1024
        /* DYNAMIC_SLOTS */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["rows"]);
}
exampleComponent.render = render;
exampleComponent.__scopeId = "data-v-092f89";
setup({
  rootComponent: exampleComponent,
  selector: "#SemanticVariables"
});
export {
  render
};
