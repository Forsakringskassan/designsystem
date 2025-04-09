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

// virtual-entry:virtual:packages/vue/src/plugins/format/examples/FormatPluginText.vue:FormatPluginText-8b250a.js
import { resolveDirective as _resolveDirective, createElementVNode as _createElementVNode, withDirectives as _withDirectives, createTextVNode as _createTextVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, Fragment as _Fragment } from "vue";
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_format = _resolveDirective("format");
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createElementVNode("span", null, [
        _cache[0] || (_cache[0] = _createTextVNode("Julafton intr\xE4ffar den ")),
        _withDirectives(_createElementVNode(
          "span",
          null,
          null,
          512
          /* NEED_PATCH */
        ), [
          [_directive_format, $setup.myText, "text"]
        ]),
        _cache[1] || (_cache[1] = _createTextVNode(" varje \xE5r."))
      ]),
      _cache[5] || (_cache[5] = _createElementVNode(
        "br",
        null,
        null,
        -1
        /* HOISTED */
      )),
      _createElementVNode("span", null, [
        _cache[3] || (_cache[3] = _createTextVNode("Julafton intr\xE4ffar den ")),
        _withDirectives((_openBlock(), _createElementBlock("strong", null, _cache[2] || (_cache[2] = [
          _createElementVNode(
            "span",
            { class: "red" },
            "24 december",
            -1
            /* HOISTED */
          )
        ]))), [
          [_directive_format, void 0, "text"]
        ]),
        _cache[4] || (_cache[4] = _createTextVNode(" varje \xE5r. "))
      ])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-8b250a"
});
export {
  render
};
