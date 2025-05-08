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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FLabelPageObject/FLabelPageObject-format-description.vue:FLabelPageObject-format-description-bb684c.js
import { defineComponent as _defineComponent } from "vue";
import { FLabel } from "@fkui/vue";
import { createTextVNode as _createTextVNode, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FLabelPageObject-format-description",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FLabel() {
      return FLabel;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_test = _resolveDirective("test");
  return _withDirectives((_openBlock(), _createBlock($setup["FLabel"], null, {
    default: _withCtx(() => _cache[0] || (_cache[0] = [
      _createTextVNode(" Etikett ")
    ])),
    description: _withCtx(({ formatDescriptionClass }) => [
      _createElementVNode(
        "span",
        {
          class: _normalizeClass(formatDescriptionClass)
        },
        " Formatbeskrivning ",
        2
        /* CLASS */
      )
    ]),
    _: 1
    /* STABLE */
  })), [
    [_directive_test, "awesome-label"]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-bb684c"
});
export {
  render
};
