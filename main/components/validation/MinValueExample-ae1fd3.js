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

// virtual-entry:virtual:docs/components/validation/examples/MinValueExample.vue:MinValueExample-ae1fd3.js
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = defineComponent({
  name: "MinValueExample",
  components: { FTextField },
  data() {
    return { model: "" };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _directive_validation = _resolveDirective("validation");
  return _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
    modelValue: _ctx.model,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.model = $event)
  }, {
    default: _withCtx(() => _cache[1] || (_cache[1] = [
      _createTextVNode(" Fyll i ett tal som \xE4r l\xE4gst 10 ")
    ])),
    _: 1
    /* STABLE */
  }, 8, ["modelValue"])), [
    [
      _directive_validation,
      { minValue: { minValue: 10 } },
      void 0,
      { minValue: true }
    ]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-ae1fd3"
});
export {
  render
};
