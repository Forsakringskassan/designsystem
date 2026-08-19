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

// virtual-entry:virtual:packages/vue/src/plugins/validation/examples/ValidationPluginToggleEnabled.vue:ValidationPluginToggleEnabled-8efe3a.js
import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import { FTextField } from "@fkui/vue";
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "ValidationPluginToggleEnabled",
  components: { FTextField },
  data() {
    return { model: "", toggleEnabled: true };
  },
  mounted() {
    ValidationService.setSubmitted("validator-enabled");
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _directive_test = _resolveDirective("test");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", null, [
    _createElementVNode(
      "p",
      null,
      "Validering aktiverad: " + _toDisplayString(_ctx.toggleEnabled),
      1
      /* TEXT */
    ),
    _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
      id: "validator-enabled",
      modelValue: _ctx.model,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.model = $event)
    }, {
      default: _withCtx(() => [..._cache[2] || (_cache[2] = [
        _createTextVNode(
          " Max tio tecken ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"])), [
      [_directive_test, "validator-enabled"],
      [
        _directive_validation,
        { maxLength: { enabled: _ctx.toggleEnabled, length: 10 } },
        void 0,
        { maxLength: true }
      ]
    ]),
    _createElementVNode("button", {
      class: "button button--primary",
      "data-test": "validator-enabled-button",
      type: "button",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.toggleEnabled = !_ctx.toggleEnabled)
    }, " Aktivera/Inaktivera ")
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-8efe3a"
});
export {
  render
};
