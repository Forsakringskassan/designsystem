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

// virtual-entry:virtual:packages/vue/src/components/FFieldset/examples/FFieldsetCheckbox.vue:FFieldsetCheckbox-5b0285.js
import { defineComponent } from "vue";
import { FFieldset, FCheckboxField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FFieldsetChecbox",
  components: {
    FFieldset,
    FCheckboxField
  },
  data() {
    return {
      dagar: []
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  return _openBlock(), _createBlock(_component_f_fieldset, { name: "group-name-checkbox" }, {
    label: _withCtx(() => [..._cache[5] || (_cache[5] = [
      _createTextVNode(
        " Vilka dagar i veckan vill du bli kontaktad? ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [
      _createVNode(_component_f_checkbox_field, {
        id: "dagar-mandag",
        modelValue: _ctx.dagar,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.dagar = $event),
        value: "mandag"
      }, {
        default: _withCtx(() => [..._cache[6] || (_cache[6] = [
          _createTextVNode(
            " M\xE5ndag ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        id: "dagar-tisdag",
        modelValue: _ctx.dagar,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.dagar = $event),
        value: "tisdag"
      }, {
        default: _withCtx(() => [..._cache[7] || (_cache[7] = [
          _createTextVNode(
            " Tisdag ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        id: "dagar-onsdag",
        modelValue: _ctx.dagar,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.dagar = $event),
        value: "onsdag"
      }, {
        default: _withCtx(() => [..._cache[8] || (_cache[8] = [
          _createTextVNode(
            " Onsdag ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        id: "dagar-torsdag",
        modelValue: _ctx.dagar,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.dagar = $event),
        value: "torsdag"
      }, {
        default: _withCtx(() => [..._cache[9] || (_cache[9] = [
          _createTextVNode(
            " Torsdag ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        id: "dagar-fredag",
        modelValue: _ctx.dagar,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.dagar = $event),
        value: "fredag"
      }, {
        default: _withCtx(() => [..._cache[10] || (_cache[10] = [
          _createTextVNode(
            " Fredag ",
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
  selector: "#example-5b0285"
});
export {
  render
};
