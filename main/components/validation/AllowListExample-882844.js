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

// virtual-entry:virtual:docs/components/validation/examples/AllowListExample.vue:AllowListExample-882844.js
import { defineComponent as _defineComponent } from "vue";
import { FTextField } from "@fkui/vue";
import { ref } from "vue";
import { createTextVNode as _createTextVNode, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "AllowListExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const model = ref("");
    const __returned__ = { model, get FTextField() {
      return FTextField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_validation = _resolveDirective("validation");
  return _withDirectives((_openBlock(), _createBlock($setup["FTextField"], {
    modelValue: $setup.model,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.model = $event)
  }, {
    default: _withCtx(() => _cache[1] || (_cache[1] = [
      _createTextVNode(" Fyll i en text (alternativ i lista: foo, bar, baz)")
    ])),
    _: 1,
    __: [1]
  }, 8, ["modelValue"])), [
    [
      _directive_validation,
      { allowList: { list: ["foo", "bar", "baz"] } },
      void 0,
      { allowList: true }
    ]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-882844"
});
export {
  render
};
