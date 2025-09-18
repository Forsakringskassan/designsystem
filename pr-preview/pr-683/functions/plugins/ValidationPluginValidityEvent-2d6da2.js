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

// virtual-entry:virtual:packages/vue/src/plugins/validation/examples/ValidationPluginValidityEvent.vue:ValidationPluginValidityEvent-2d6da2.js
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "ValidationPluginValidityEvent",
  components: { FTextField },
  data() {
    return { validityEvent: "", nameModel: "" };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", null, [
    _cache[3] || (_cache[3] = _createElementVNode(
      "strong",
      null,
      "ValidityEvent",
      -1
      /* CACHED */
    )),
    _createElementVNode(
      "pre",
      null,
      _toDisplayString(_ctx.validityEvent),
      1
      /* TEXT */
    ),
    _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
      id: "name-of-child",
      modelValue: _ctx.nameModel,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.nameModel = $event),
      onValidity: _cache[1] || (_cache[1] = ($event) => _ctx.validityEvent = $event.detail)
    }, {
      default: _withCtx(() => [..._cache[2] || (_cache[2] = [
        _createTextVNode(
          " Name of child ",
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
          maxLength: { length: 10 },
          minLength: { length: 2 }
        },
        void 0,
        {
          required: true,
          maxLength: true,
          minLength: true
        }
      ]
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-2d6da2"
});
export {
  render
};
