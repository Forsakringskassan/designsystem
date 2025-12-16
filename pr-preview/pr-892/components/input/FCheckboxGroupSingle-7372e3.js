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

// virtual-entry:virtual:packages/vue/src/components/FCheckboxField/examples/FCheckboxGroupSingle.vue:FCheckboxGroupSingle-7372e3.js
import { defineComponent } from "vue";
import { FCheckboxField, FFieldset } from "@fkui/vue";
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, resolveDirective as _resolveDirective, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = defineComponent({
  name: "FCheckboxGroupSingle",
  components: { FFieldset, FCheckboxField },
  data() {
    return {
      sign: []
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _directive_validation = _resolveDirective("validation");
  return _withDirectives((_openBlock(), _createBlock(_component_f_fieldset, { name: "underskrift" }, {
    label: _withCtx(() => [..._cache[1] || (_cache[1] = [
      _createElementVNode(
        "h2",
        null,
        "Underskrift",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.sign,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.sign = $event),
        value: "Ja"
      }, {
        default: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createTextVNode(
            " Jag \xE4r en ensam kryssruta s\xE5 min screenreadertext kommer att vara anpassad f\xF6r det. ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  })), [
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
  selector: "#example-7372e3"
});
export {
  render
};
