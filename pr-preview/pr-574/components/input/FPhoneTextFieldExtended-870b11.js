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

// virtual-entry:virtual:packages/vue/src/components/FTextField/examples/FPhoneTextFieldExtended.vue:FPhoneTextFieldExtended-870b11.js
import { defineComponent } from "vue";
import { FPhoneTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = defineComponent({
  name: "FPhoneTextFieldExtended",
  components: { FPhoneTextField },
  data() {
    return { extendedphone: "" };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_phone_text_field = _resolveComponent("f-phone-text-field");
  const _directive_validation = _resolveDirective("validation");
  return _withDirectives((_openBlock(), _createBlock(_component_f_phone_text_field, {
    modelValue: _ctx.extendedphone,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.extendedphone = $event),
    "extended-validation": ""
  }, {
    extendedLabel: _withCtx(() => [..._cache[1] || (_cache[1] = [
      _createTextVNode(
        " Skriv in ditt telefonnummer igen ",
        -1
        /* CACHED */
      )
    ])]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue"])), [
    [
      _directive_validation,
      void 0,
      void 0,
      { required: true }
    ]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-870b11"
});
export {
  render
};
