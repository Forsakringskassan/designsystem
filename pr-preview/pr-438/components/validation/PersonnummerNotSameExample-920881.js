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

// virtual-entry:virtual:docs/components/validation/examples/PersonnummerNotSameExample.vue:PersonnummerNotSameExample-920881.js
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createElementVNode as _createElementVNode, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "PersonnummerNotSameExample",
  components: { FTextField },
  data() {
    return {
      reference: "",
      model: ""
    };
  }
});
var _hoisted_1 = { class: "row" };
var _hoisted_2 = { class: "col col--md-6" };
var _hoisted_3 = { class: "col col--md-6" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
        id: "personnummer-not-same-reference",
        modelValue: _ctx.reference,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.reference = $event)
      }, {
        default: _withCtx(() => _cache[2] || (_cache[2] = [
          _createTextVNode(" Fyll i ett personnummer (referens) ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])), [
        [
          _directive_validation,
          void 0,
          void 0,
          { personnummerFormat: true }
        ]
      ])
    ]),
    _createElementVNode("div", _hoisted_3, [
      _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
        id: "personnummer-not-same-input",
        modelValue: _ctx.model,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.model = $event)
      }, {
        default: _withCtx(() => _cache[3] || (_cache[3] = [
          _createTextVNode(" Fyll i ett personnummer ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])), [
        [
          _directive_validation,
          {
            personnummerNotSame: { otherField: _ctx.reference }
          },
          void 0,
          {
            personnummerFormat: true,
            personnummerNotSame: true
          }
        ]
      ])
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-920881"
});
export {
  render
};
