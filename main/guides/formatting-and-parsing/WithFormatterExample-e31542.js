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

// virtual-entry:virtual:docs/guides/validation/examples/WithFormatterExample.vue:WithFormatterExample-e31542.js
import { defineComponent } from "vue";
import { FOutputField, FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createVNode as _createVNode, createElementBlock as _createElementBlock } from "vue";
function myFormatter(value) {
  return value.toLowerCase();
}
var exampleComponent = defineComponent({
  name: "WithFormatterExample",
  components: { FTextField, FOutputField },
  data() {
    return {
      modelValue: "",
      myFormatter
    };
  }
});
var _hoisted_1 = { class: "row" };
var _hoisted_2 = { class: "col col--md-9" };
var _hoisted_3 = { class: "col col--md-3" };
var _hoisted_4 = { class: "docs-pre" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_output_field = _resolveComponent("f-output-field");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
        id: "with-formatter",
        modelValue: _ctx.modelValue,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.modelValue = $event),
        formatter: _ctx.myFormatter
      }, {
        default: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " Inmatningsf\xE4lt ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "formatter"])), [
        [
          _directive_validation,
          { maxLength: { length: 100 } },
          void 0,
          { maxLength: true }
        ]
      ])
    ]),
    _createElementVNode("div", _hoisted_3, [
      _createVNode(_component_f_output_field, { for: "with-formatter" }, {
        label: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createTextVNode(
            " modelValue ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createElementVNode(
            "span",
            _hoisted_4,
            _toDisplayString(JSON.stringify(_ctx.modelValue)),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      })
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-e31542"
});
export {
  render
};
