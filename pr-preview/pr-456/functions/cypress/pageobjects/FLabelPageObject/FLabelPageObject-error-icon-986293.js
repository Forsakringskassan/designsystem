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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FLabelPageObject/FLabelPageObject-error-icon.vue:FLabelPageObject-error-icon-986293.js
import { defineComponent as _defineComponent } from "vue";
import { FTextField, FValidationForm } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createElementVNode as _createElementVNode } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FLabelPageObject-error-icon",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FTextField() {
      return FTextField;
    }, get FValidationForm() {
      return FValidationForm;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_validation = _resolveDirective("validation");
  const _directive_test = _resolveDirective("test");
  return _openBlock(), _createBlock($setup["FValidationForm"], null, {
    default: _withCtx(() => [
      _withDirectives((_openBlock(), _createBlock($setup["FTextField"], null, {
        default: _withCtx(() => _cache[0] || (_cache[0] = [
          _createTextVNode(" Etikett ")
        ])),
        _: 1
        /* STABLE */
      })), [
        [
          _directive_validation,
          void 0,
          void 0,
          { required: true }
        ],
        [_directive_test, "awesome-label"]
      ]),
      _cache[1] || (_cache[1] = _createElementVNode(
        "button",
        {
          type: "submit",
          class: "button button--primary"
        },
        "Skicka in",
        -1
        /* HOISTED */
      ))
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-986293"
});
export {
  render
};
