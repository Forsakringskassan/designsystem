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

// virtual-entry:virtual:packages/vue/src/plugins/format/examples/FormatPluginText.vue:FormatPluginText-b4de17.js
import { resolveDirective as _resolveDirective, createElementVNode as _createElementVNode, withDirectives as _withDirectives, createTextVNode as _createTextVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var myText = "24 december";
var exampleComponent = {
  __name: "FormatPluginText",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { myText };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
var _hoisted_1 = { class: "red" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_format = _resolveDirective("format");
  return _openBlock(), _createElementBlock("span", null, [
    _cache[0] || (_cache[0] = _createTextVNode(
      "Julafton intr\xE4ffar den ",
      -1
      /* CACHED */
    )),
    _withDirectives(_createElementVNode(
      "span",
      _hoisted_1,
      null,
      512
      /* NEED_PATCH */
    ), [
      [_directive_format, $setup.myText, "text"]
    ]),
    _cache[1] || (_cache[1] = _createTextVNode(
      " varje \xE5r.",
      -1
      /* CACHED */
    ))
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-b4de17"
});
export {
  render
};
