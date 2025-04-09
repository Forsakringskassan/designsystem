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

// virtual-entry:virtual:packages/vue/src/plugins/format/examples/FormatPluginBankgiro.vue:FormatPluginBankgiro-2c6baa.js
import { resolveDirective as _resolveDirective, createElementVNode as _createElementVNode, withDirectives as _withDirectives, createTextVNode as _createTextVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, Fragment as _Fragment } from "vue";
var bankgiro = "1234566";
var exampleComponent = {
  __name: "FormatPluginBankgiro",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { bankgiro };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_format = _resolveDirective("format");
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _withDirectives(_createElementVNode(
        "p",
        null,
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_format, $setup.bankgiro, "bankgiro"]
      ]),
      _withDirectives((_openBlock(), _createElementBlock("p", null, _cache[0] || (_cache[0] = [
        _createTextVNode("1234566")
      ]))), [
        [_directive_format, void 0, "bankgiro"]
      ])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-2c6baa"
});
export {
  render
};
