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

// virtual-entry:virtual:packages/vue/src/plugins/format/examples/FormatPluginPnr.vue:FormatPluginPnr-5ff5eb.js
import { resolveDirective as _resolveDirective, withDirectives as _withDirectives, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var pnr = "189001019802";
var exampleComponent = {
  __name: "FormatPluginPnr",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { pnr };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_format = _resolveDirective("format");
  return _withDirectives((_openBlock(), _createElementBlock(
    "p",
    null,
    null,
    512
    /* NEED_PATCH */
  )), [
    [_directive_format, $setup.pnr, "pnr"]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-5ff5eb"
});
export {
  render
};
