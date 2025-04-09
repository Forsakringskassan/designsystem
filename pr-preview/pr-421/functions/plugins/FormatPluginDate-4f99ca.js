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

// virtual-entry:virtual:packages/vue/src/plugins/format/examples/FormatPluginDate.vue:FormatPluginDate-4f99ca.js
import { resolveDirective as _resolveDirective, createElementVNode as _createElementVNode, withDirectives as _withDirectives, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var myDate = "20250408";
var exampleComponent = {
  __name: "FormatPluginDate",
  setup(__props, { expose: __expose }) {
    __expose();
    const dateRange = {
      from: "20250101",
      to: "20251231"
    };
    const __returned__ = { myDate, dateRange };
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
        [_directive_format, $setup.myDate, "date"]
      ]),
      _withDirectives(_createElementVNode(
        "p",
        null,
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_format, $setup.myDate, "date-long"]
      ]),
      _withDirectives(_createElementVNode(
        "p",
        null,
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_format, $setup.myDate, "date-full"]
      ]),
      _withDirectives(_createElementVNode(
        "p",
        null,
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_format, $setup.dateRange, "date-range"]
      ])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-4f99ca"
});
export {
  render
};
