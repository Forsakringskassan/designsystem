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

// virtual-entry:virtual:packages/vue/src/components/FStaticField/examples/FStaticFieldFormatted.vue:FStaticFieldFormatted-d5e0c4.js
import { defineComponent as _defineComponent } from "vue";
import { FStaticField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveDirective as _resolveDirective, createElementVNode as _createElementVNode, withDirectives as _withDirectives, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var date = "20200101";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FStaticFieldFormatted",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { date, get FStaticField() {
      return FStaticField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_format = _resolveDirective("format");
  return _openBlock(), _createBlock($setup["FStaticField"], null, {
    label: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createTextVNode(
        " Formaterat datum ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [
      _withDirectives(_createElementVNode(
        "span",
        null,
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_format, $setup.date, "date-full"]
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-d5e0c4"
});
export {
  render
};
