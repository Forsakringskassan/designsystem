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

// virtual-entry:virtual:packages/vue/src/components/FButton/examples/FButtonListExample.vue:FButtonListExample-7a9d44.js
import { defineComponent as _defineComponent } from "vue";
import { FButton } from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FButtonListExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FButton() {
      return FButton;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "button-list no-marker" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("ul", _hoisted_1, [
    _createElementVNode("li", null, [
      _createVNode($setup["FButton"], {
        size: "medium",
        variant: "tertiary",
        "icon-left": "success"
      }, {
        default: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            " Knapp 1 i lista ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      })
    ]),
    _createElementVNode("li", null, [
      _createVNode($setup["FButton"], {
        size: "medium",
        variant: "tertiary",
        "icon-left": "cross"
      }, {
        default: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " Knapp 2 i lista ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      })
    ]),
    _createElementVNode("li", null, [
      _createVNode($setup["FButton"], {
        size: "medium",
        variant: "tertiary",
        "icon-left": "pen"
      }, {
        default: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createTextVNode(
            " Knapp 3 i lista ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      })
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-7a9d44"
});
export {
  render
};
