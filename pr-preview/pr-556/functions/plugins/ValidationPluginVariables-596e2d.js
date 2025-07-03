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

// virtual-entry:virtual:packages/vue/src/plugins/validation/examples/ValidationPluginVariables.vue:ValidationPluginVariables-596e2d.js
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = defineComponent({
  name: "ValidationPluginVariables",
  components: { FTextField },
  data() {
    return {
      anotherDataVariable: 5,
      myDataVariable: 80
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _directive_validation = _resolveDirective("validation");
  return _withDirectives((_openBlock(), _createBlock(_component_f_text_field, null, {
    default: _withCtx(() => _cache[0] || (_cache[0] = [
      _createTextVNode(" Namn p\xE5 barn ")
    ])),
    _: 1,
    __: [0]
  })), [
    [
      _directive_validation,
      {
        maxLength: { length: _ctx.myDataVariable },
        minLength: { length: _ctx.anotherDataVariable }
      },
      void 0,
      {
        required: true,
        maxLength: true,
        minLength: true
      }
    ]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-596e2d"
});
export {
  render
};
