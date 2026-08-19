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

// virtual-entry:virtual:packages/vue/src/components/FCheckboxField/examples/FCheckboxGroupValues.vue:FCheckboxGroupValues-9fe2a1.js
import { defineComponent } from "vue";
import { FFieldset, FCheckboxField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FCheckboxGroupValues",
  components: { FFieldset, FCheckboxField },
  data() {
    return {
      brochures: []
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  return _openBlock(), _createBlock(_component_f_fieldset, { name: "checkbox-complex-values" }, {
    label: _withCtx(() => [..._cache[2] || (_cache[2] = [
      _createTextVNode(
        " Broschyrer ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [
      _createVNode(_component_f_checkbox_field, {
        id: "broschyrer-bor-eller-arbetar-utomlands",
        modelValue: _ctx.brochures,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.brochures = $event),
        value: ["Om du bor eller arbetar utomlands"]
      }, {
        default: _withCtx(() => [..._cache[3] || (_cache[3] = [
          _createTextVNode(
            " Om du bor eller arbetar utomlands ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        id: "broschyrer-offentlighet-sekretess",
        modelValue: _ctx.brochures,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.brochures = $event),
        value: { offentlighet: false, sekretess: true }
      }, {
        default: _withCtx(() => [..._cache[4] || (_cache[4] = [
          _createTextVNode(
            " Offentlighet och sekretess ",
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
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-9fe2a1"
});
export {
  render
};
