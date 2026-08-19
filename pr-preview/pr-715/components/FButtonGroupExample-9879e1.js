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

// virtual-entry:virtual:packages/vue/src/components/FButton/examples/FButtonGroupExample.vue:FButtonGroupExample-9879e1.js
import { defineComponent as _defineComponent } from "vue";
import { FButton } from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FButtonGroupExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FButton() {
      return FButton;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "button-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["FButton"], {
      class: "button-group__item",
      "icon-left": "success"
    }, {
      default: _withCtx(() => [..._cache[0] || (_cache[0] = [
        _createTextVNode(
          " Knapp 1 i grupp ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    }),
    _createVNode($setup["FButton"], {
      class: "button-group__item",
      variant: "secondary",
      "icon-left": "error"
    }, {
      default: _withCtx(() => [..._cache[1] || (_cache[1] = [
        _createTextVNode(
          " Knapp 2 i grupp ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    })
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-9879e1"
});
export {
  render
};
