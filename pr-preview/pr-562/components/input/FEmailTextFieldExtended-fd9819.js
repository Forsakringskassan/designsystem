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

// virtual-entry:virtual:packages/vue/src/components/FTextField/examples/FEmailTextFieldExtended.vue:FEmailTextFieldExtended-fd9819.js
import { defineComponent } from "vue";
import { FEmailTextField } from "@fkui/vue";
import { resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withDirectives as _withDirectives, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FEmailTextFieldExtended",
  components: { FEmailTextField },
  data() {
    return { extendedEmail: "" };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_email_text_field = _resolveComponent("f-email-text-field");
  const _directive_validation = _resolveDirective("validation");
  return _withDirectives((_openBlock(), _createBlock(_component_f_email_text_field, {
    modelValue: _ctx.extendedEmail,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.extendedEmail = $event),
    inputmode: "email",
    "max-length": 80,
    "extended-validation": ""
  }, null, 8, ["modelValue"])), [
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
  selector: "#example-fd9819"
});
export {
  render
};
