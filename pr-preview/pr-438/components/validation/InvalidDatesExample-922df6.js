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

// virtual-entry:virtual:docs/components/validation/examples/InvalidDatesExample.vue:InvalidDatesExample-922df6.js
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = defineComponent({
  name: "InvalidDatesExample",
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
      _createTextVNode(" Fyll i ett datum som inte \xE4r 1 januari, 5 maj eller 20 juni 2022 ")
    ])),
    _: 1
    /* STABLE */
  }, 8, ["modelValue"])), [
    [
      _directive_validation,
      {
        invalidDates: { dates: ["2022-01-01", "2022-05-05", "2022-06-20"] }
      },
      void 0,
      {
        date: true,
        invalidDates: true
      }
    ]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-922df6"
});
export {
  render
};
