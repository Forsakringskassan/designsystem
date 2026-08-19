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

// virtual-entry:virtual:docs/components/page-layout/FPageLayoutPredefined.vue:FPageLayoutPredefined-0869ac.js
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
var _hoisted_4 = { class: "item" };
var _hoisted_5 = { class: "layout-container" };
var _hoisted_6 = { class: "item" };
var _hoisted_7 = { class: "layout-container" };
var _hoisted_8 = { class: "item" };
var _hoisted_9 = { class: "layout-container" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _cache[3] || (_cache[3] = _createElementVNode(
        "h3",
        null,
        [
          _createElementVNode("code", null, "simple")
        ],
        -1
        /* HOISTED */
      )),
      _createElementVNode("div", _hoisted_3, [
        _createVNode($setup["FPageLayout"], { layout: "simple" }, {
          header: _withCtx(() => _cache[0] || (_cache[0] = [
            _createElementVNode(
              "header",
              { class: "area header" },
              "[header]",
              -1
              /* HOISTED */
            )
          ])),
          content: _withCtx(() => _cache[1] || (_cache[1] = [
            _createElementVNode(
              "main",
              { class: "area content" },
              "[content]",
              -1
              /* HOISTED */
            )
          ])),
          footer: _withCtx(() => _cache[2] || (_cache[2] = [
            _createElementVNode(
              "footer",
              { class: "area footer" },
              "[footer]",
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _createElementVNode("div", _hoisted_4, [
      _cache[8] || (_cache[8] = _createElementVNode(
        "h3",
        null,
        [
          _createElementVNode("code", null, "left-panel")
        ],
        -1
        /* HOISTED */
      )),
      _createElementVNode("div", _hoisted_5, [
        _createVNode($setup["FPageLayout"], { layout: "left-panel" }, {
          header: _withCtx(() => _cache[4] || (_cache[4] = [
            _createElementVNode(
              "header",
              { class: "area header" },
              "[header]",
              -1
              /* HOISTED */
            )
          ])),
          left: _withCtx(() => _cache[5] || (_cache[5] = [
            _createElementVNode(
              "div",
              { class: "area left-panel" },
              "[left]",
              -1
              /* HOISTED */
            )
          ])),
          content: _withCtx(() => _cache[6] || (_cache[6] = [
            _createElementVNode(
              "main",
              { class: "area content" },
              "[content]",
              -1
              /* HOISTED */
            )
          ])),
          footer: _withCtx(() => _cache[7] || (_cache[7] = [
            _createElementVNode(
              "footer",
              { class: "area footer" },
              "[footer]",
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _createElementVNode("div", _hoisted_6, [
      _cache[13] || (_cache[13] = _createElementVNode(
        "h3",
        null,
        [
          _createElementVNode("code", null, "right-panel")
        ],
        -1
        /* HOISTED */
      )),
      _createElementVNode("div", _hoisted_7, [
        _createVNode($setup["FPageLayout"], { layout: "right-panel" }, {
          header: _withCtx(() => _cache[9] || (_cache[9] = [
            _createElementVNode(
              "header",
              { class: "area header" },
              "[header]",
              -1
              /* HOISTED */
            )
          ])),
          right: _withCtx(() => _cache[10] || (_cache[10] = [
            _createElementVNode(
              "div",
              { class: "area right-panel" },
              "[right]",
              -1
              /* HOISTED */
            )
          ])),
          content: _withCtx(() => _cache[11] || (_cache[11] = [
            _createElementVNode(
              "main",
              { class: "area content" },
              "[content]",
              -1
              /* HOISTED */
            )
          ])),
          footer: _withCtx(() => _cache[12] || (_cache[12] = [
            _createElementVNode(
              "footer",
              { class: "area footer" },
              "[footer]",
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _createElementVNode("div", _hoisted_8, [
      _cache[19] || (_cache[19] = _createElementVNode(
        "h3",
        null,
        [
          _createElementVNode("code", null, "three-column")
        ],
        -1
        /* HOISTED */
      )),
      _createElementVNode("div", _hoisted_9, [
        _createVNode($setup["FPageLayout"], { layout: "three-column" }, {
          header: _withCtx(() => _cache[14] || (_cache[14] = [
            _createElementVNode(
              "header",
              { class: "area header" },
              "[header]",
              -1
              /* HOISTED */
            )
          ])),
          left: _withCtx(() => _cache[15] || (_cache[15] = [
            _createElementVNode(
              "div",
              { class: "area left-panel" },
              "[left]",
              -1
              /* HOISTED */
            )
          ])),
          right: _withCtx(() => _cache[16] || (_cache[16] = [
            _createElementVNode(
              "div",
              { class: "area right-panel" },
              "[right]",
              -1
              /* HOISTED */
            )
          ])),
          content: _withCtx(() => _cache[17] || (_cache[17] = [
            _createElementVNode(
              "main",
              { class: "area content" },
              "[content]",
              -1
              /* HOISTED */
            )
          ])),
          footer: _withCtx(() => _cache[18] || (_cache[18] = [
            _createElementVNode(
              "footer",
              { class: "area footer" },
              "[footer]",
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        })
      ])
    ])
  ]);
}
exampleComponent.render = render;
exampleComponent.__scopeId = "data-v-0869ac";
setup({
  rootComponent: exampleComponent,
  selector: "#example-0869ac"
});
export {
  render
};
