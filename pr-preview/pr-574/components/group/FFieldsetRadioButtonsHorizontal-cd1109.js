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

// virtual-entry:virtual:packages/vue/src/components/FFieldset/examples/FFieldsetRadioButtonsHorizontal.vue:FFieldsetRadioButtonsHorizontal-cd1109.js
import { defineComponent } from "vue";
import { FFieldset, FRadioField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FFieldsetRadioButtons",
  components: { FFieldset, FRadioField },
  data() {
    return {
      model: void 0
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  return _openBlock(), _createBlock(_component_f_fieldset, {
    name: "group-name-radio-horizontal",
    horizontal: ""
  }, {
    label: _withCtx(() => [..._cache[2] || (_cache[2] = [
      _createTextVNode(
        " Ligger radioknapparna horisontellt? ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [
      _createVNode(_component_f_radio_field, {
        id: "horisontellt-ja",
        modelValue: _ctx.model,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.model = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[3] || (_cache[3] = [
          _createTextVNode(
            " Ja ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_radio_field, {
        id: "horisontellt-nej",
        modelValue: _ctx.model,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.model = $event),
        value: false
      }, {
        default: _withCtx(() => [..._cache[4] || (_cache[4] = [
          _createTextVNode(
            " Nej ",
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
  selector: "#example-cd1109"
});
export {
  render
};
