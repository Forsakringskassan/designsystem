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

// virtual-entry:virtual:packages/vue/src/components/FValidationGroup/examples/FValidationGroupExample.vue:FValidationGroupExample-c8b7f8.js
import { defineComponent } from "vue";
import { FValidationGroup, FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createVNode as _createVNode, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FValidationGroupExample",
  components: { FValidationGroup, FTextField },
  data() {
    return { favoritGrupp: {} };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_validation_group = _resolveComponent("f-validation-group");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_validation_group, {
      key: "favoritGrupp",
      modelValue: _ctx.favoritGrupp,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.favoritGrupp = $event)
    }, {
      default: _withCtx(() => [
        _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
          id: "frukt",
          maxlength: "100"
        }, {
          default: _withCtx(() => _cache[1] || (_cache[1] = [
            _createTextVNode(" Favoritfrukt ")
          ])),
          _: 1,
          __: [1]
        })), [
          [
            _directive_validation,
            void 0,
            void 0,
            { required: true }
          ]
        ]),
        _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
          id: "godis",
          maxlength: "100"
        }, {
          default: _withCtx(() => _cache[2] || (_cache[2] = [
            _createTextVNode(" Favoritgodis ")
          ])),
          _: 1,
          __: [2]
        })), [
          [
            _directive_validation,
            void 0,
            void 0,
            { required: true }
          ]
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"]),
    _cache[3] || (_cache[3] = _createElementVNode(
      "pre",
      null,
      "v-model",
      -1
      /* HOISTED */
    )),
    _createElementVNode(
      "pre",
      null,
      _toDisplayString(_ctx.favoritGrupp),
      1
      /* TEXT */
    )
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-c8b7f8"
});
export {
  render
};
