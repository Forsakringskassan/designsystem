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

// virtual-entry:virtual:packages/vue/src/components/FStaticField/examples/FStaticFieldInput.vue:FStaticFieldInput-8fe736.js
import { defineComponent } from "vue";
import { FStaticField, FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createVNode as _createVNode, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FStaticFieldTextField",
  components: { FStaticField, FTextField },
  data() {
    return { name: "" };
  }
});
var _hoisted_1 = { "data-test": "output-field" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_static_field = _resolveComponent("f-static-field");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
      id: "normal",
      modelValue: _ctx.name,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.name = $event)
    }, {
      default: _withCtx(() => _cache[1] || (_cache[1] = [
        _createTextVNode(" Namn ")
      ])),
      _: 1,
      __: [1]
    }, 8, ["modelValue"])), [
      [
        _directive_validation,
        { maxLength: { length: 100 } },
        void 0,
        { maxLength: true }
      ]
    ]),
    _createVNode(_component_f_static_field, null, {
      label: _withCtx(() => _cache[2] || (_cache[2] = [
        _createTextVNode(" Beskrivning ")
      ])),
      default: _withCtx(() => [
        _cache[3] || (_cache[3] = _createTextVNode(" En liten statisk beskrivning. "))
      ]),
      _: 1,
      __: [3]
    })
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-8fe736"
});
export {
  render
};
