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

// virtual-entry:virtual:packages/vue/src/components/FFieldset/examples/FFieldsetRadioButtons.vue:FFieldsetRadioButtons-7a50f4.js
import { defineComponent } from "vue";
import { FFieldset, FRadioField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FFieldsetRadioButtons",
  components: { FFieldset, FRadioField },
  data() {
    return {
      sjukpenning: void 0
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  return _openBlock(), _createBlock(_component_f_fieldset, { name: "group-name-radio" }, {
    label: _withCtx(() => _cache[2] || (_cache[2] = [
      _createTextVNode(" Ans\xF6ker du om sjukpenning? ")
    ])),
    default: _withCtx(() => [
      _createVNode(_component_f_radio_field, {
        id: "ja",
        modelValue: _ctx.sjukpenning,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.sjukpenning = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[3] || (_cache[3] = [
          _createTextVNode(" Ja ")
        ])),
        _: 1,
        __: [3]
      }, 8, ["modelValue"]),
      _createVNode(_component_f_radio_field, {
        id: "nej",
        modelValue: _ctx.sjukpenning,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.sjukpenning = $event),
        value: false
      }, {
        default: _withCtx(() => _cache[4] || (_cache[4] = [
          _createTextVNode(" Nej ")
        ])),
        _: 1,
        __: [4]
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-7a50f4"
});
export {
  render
};
