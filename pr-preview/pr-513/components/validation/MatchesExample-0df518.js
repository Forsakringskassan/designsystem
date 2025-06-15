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

// virtual-entry:virtual:docs/components/validation/examples/MatchesExample.vue:MatchesExample-0df518.js
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, resolveDirective as _resolveDirective, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  components: { FTextField },
  data() {
    return {
      reference: "v\xE4rde",
      model: ""
    };
  }
});
var _hoisted_1 = { class: "row" };
var _hoisted_2 = { class: "col col--md-6" };
var _hoisted_3 = {
  id: "input-wrapper",
  class: "col col--md-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_f_text_field, {
        id: "reference",
        modelValue: _ctx.reference,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.reference = $event)
      }, {
        default: _withCtx(() => _cache[2] || (_cache[2] = [
          _createTextVNode(" Referens ")
        ])),
        _: 1,
        __: [2]
      }, 8, ["modelValue"])
    ]),
    _createElementVNode("div", _hoisted_3, [
      _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
        id: "other",
        modelValue: _ctx.model,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.model = $event)
      }, {
        default: _withCtx(() => _cache[3] || (_cache[3] = [
          _createTextVNode(" Inmatningsf\xE4lt ")
        ])),
        _: 1,
        __: [3]
      }, 8, ["modelValue"])), [
        [
          _directive_validation,
          { matches: { id: "reference" } },
          void 0,
          { matches: true }
        ]
      ])
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-0df518"
});
export {
  render
};
