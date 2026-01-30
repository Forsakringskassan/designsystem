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

// virtual-entry:virtual:packages/vue/src/plugins/format/examples/FormatPluginBankgiro.vue:FormatPluginBankgiro-48aee9.js
import { defineComponent as _defineComponent } from "vue";
import { resolveDirective as _resolveDirective, withDirectives as _withDirectives, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var bankgiro = "1234566";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FormatPluginBankgiro",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { bankgiro };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_format = _resolveDirective("format");
  return _withDirectives((_openBlock(), _createElementBlock(
    "p",
    null,
    null,
    512
    /* NEED_PATCH */
  )), [
    [_directive_format, $setup.bankgiro, "bankgiro"]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-48aee9"
});
export {
  render
};
