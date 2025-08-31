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

// virtual-entry:virtual:packages/vue/src/plugins/validation/examples/ValidationPluginErrorMessage.vue:ValidationPluginErrorMessage-e7d9cc.js
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = defineComponent({
  name: "ValidationPluginErrorMessage",
  components: { FTextField },
  data() {
    return { model: "" };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _directive_validation = _resolveDirective("validation");
  return _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
    id: "specifikt-felmeddelande",
    modelValue: _ctx.model,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.model = $event),
    maxlength: 100
  }, {
    default: _withCtx(() => [..._cache[1] || (_cache[1] = [
      _createTextVNode(
        " Ett f\xE4lt med specifict felmeddelande ",
        -1
        /* CACHED */
      )
    ])]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue"])), [
    [
      _directive_validation,
      {
        required: { errorMessage: "Ett specifikt required felmeddelande" }
      },
      void 0,
      {
        required: true,
        maxLength: true
      }
    ]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-e7d9cc"
});
export {
  render
};
