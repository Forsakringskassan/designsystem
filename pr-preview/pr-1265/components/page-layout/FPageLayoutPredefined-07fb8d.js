// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
  FormatPlugin,
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
  app.use(FormatPlugin);
  app.mount(selector);
}

// virtual-entry:virtual:docs/components/page-layout/FPageLayoutPredefined.vue:FPageLayoutPredefined-07fb8d.js
import { defineComponent as _defineComponent } from "vue";
import { FPageLayout } from "@fkui/vue";
import { createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FPageLayoutPredefined",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FPageLayout() {
      return FPageLayout;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "wrapper" };
var _hoisted_2 = { class: "item" };
var _hoisted_3 = { class: "layout-container" };
var _hoisted_4 = ["slot"];
var _hoisted_5 = ["slot"];
var _hoisted_6 = ["slot"];
var _hoisted_7 = { class: "item" };
var _hoisted_8 = { class: "layout-container" };
var _hoisted_9 = ["slot"];
var _hoisted_10 = ["slot"];
var _hoisted_11 = ["slot"];
var _hoisted_12 = ["slot"];
var _hoisted_13 = { class: "item" };
var _hoisted_14 = { class: "layout-container" };
var _hoisted_15 = ["slot"];
var _hoisted_16 = ["slot"];
var _hoisted_17 = ["slot"];
var _hoisted_18 = ["slot"];
var _hoisted_19 = { class: "item" };
var _hoisted_20 = { class: "layout-container" };
var _hoisted_21 = ["slot"];
var _hoisted_22 = ["slot"];
var _hoisted_23 = ["slot"];
var _hoisted_24 = ["slot"];
var _hoisted_25 = ["slot"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _cache[0] || (_cache[0] = _createElementVNode(
        "h3",
        null,
        [
          _createElementVNode("code", null, "simple")
        ],
        -1
        /* CACHED */
      )),
      _createElementVNode("div", _hoisted_3, [
        _createVNode($setup["FPageLayout"], { layout: "simple" }, {
          default: _withCtx(({ header, content, footer }) => [
            _createElementVNode("header", {
              slot: header,
              class: "area header"
            }, "[header]", 8, _hoisted_4),
            _createElementVNode("main", {
              slot: content,
              class: "area content"
            }, "[content]", 8, _hoisted_5),
            _createElementVNode("footer", {
              slot: footer,
              class: "area footer"
            }, "[footer]", 8, _hoisted_6)
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _createElementVNode("div", _hoisted_7, [
      _cache[1] || (_cache[1] = _createElementVNode(
        "h3",
        null,
        [
          _createElementVNode("code", null, "left-panel")
        ],
        -1
        /* CACHED */
      )),
      _createElementVNode("div", _hoisted_8, [
        _createVNode($setup["FPageLayout"], { layout: "left-panel" }, {
          default: _withCtx(({ header, left, content, footer }) => [
            _createElementVNode("header", {
              slot: header,
              class: "area header"
            }, "[header]", 8, _hoisted_9),
            _createElementVNode("div", {
              slot: left,
              class: "area left-panel"
            }, "[left]", 8, _hoisted_10),
            _createElementVNode("main", {
              slot: content,
              class: "area content"
            }, "[content]", 8, _hoisted_11),
            _createElementVNode("footer", {
              slot: footer,
              class: "area footer"
            }, "[footer]", 8, _hoisted_12)
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _createElementVNode("div", _hoisted_13, [
      _cache[2] || (_cache[2] = _createElementVNode(
        "h3",
        null,
        [
          _createElementVNode("code", null, "right-panel")
        ],
        -1
        /* CACHED */
      )),
      _createElementVNode("div", _hoisted_14, [
        _createVNode($setup["FPageLayout"], { layout: "right-panel" }, {
          default: _withCtx(({ header, right, content, footer }) => [
            _createElementVNode("header", {
              slot: header,
              class: "area header"
            }, "[header]", 8, _hoisted_15),
            _createElementVNode("div", {
              slot: right,
              class: "area left-panel"
            }, "[right]", 8, _hoisted_16),
            _createElementVNode("main", {
              slot: content,
              class: "area content"
            }, "[content]", 8, _hoisted_17),
            _createElementVNode("footer", {
              slot: footer,
              class: "area footer"
            }, "[footer]", 8, _hoisted_18)
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _createElementVNode("div", _hoisted_19, [
      _cache[3] || (_cache[3] = _createElementVNode(
        "h3",
        null,
        [
          _createElementVNode("code", null, "three-column")
        ],
        -1
        /* CACHED */
      )),
      _createElementVNode("div", _hoisted_20, [
        _createVNode($setup["FPageLayout"], { layout: "three-column" }, {
          default: _withCtx(({ header, left, right, content, footer }) => [
            _createElementVNode("header", {
              slot: header,
              class: "area header"
            }, "[header]", 8, _hoisted_21),
            _createElementVNode("div", {
              slot: left,
              class: "area left-panel"
            }, "[left]", 8, _hoisted_22),
            _createElementVNode("div", {
              slot: right,
              class: "area left-panel"
            }, "[right]", 8, _hoisted_23),
            _createElementVNode("main", {
              slot: content,
              class: "area content"
            }, "[content]", 8, _hoisted_24),
            _createElementVNode("footer", {
              slot: footer,
              class: "area footer"
            }, "[footer]", 8, _hoisted_25)
          ]),
          _: 1
          /* STABLE */
        })
      ])
    ])
  ]);
}
exampleComponent.render = render;
exampleComponent.__scopeId = "data-v-07fb8d";
setup({
  rootComponent: exampleComponent,
  selector: "#example-07fb8d"
});
export {
  render
};
