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

// virtual-entry:virtual:packages/vue/src/components/FFieldset/examples/FFieldsetDefault.vue:FFieldsetDefault-d7e70f.js
import { defineComponent } from "vue";
import { FFieldset, FRadioField, FTooltip } from "@fkui/vue";
import { createTextVNode as _createTextVNode, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FFieldsetDefault",
  components: { FFieldset, FRadioField, FTooltip },
  data() {
    return {
      deltid: void 0
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_tooltip = _resolveComponent("f-tooltip");
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  return _openBlock(), _createBlock(_component_f_fieldset, { name: "group-name-default" }, {
    label: _withCtx(() => _cache[2] || (_cache[2] = [
      _createTextVNode(" Arbetar du deltid? ")
    ])),
    description: _withCtx(({ descriptionClass }) => [
      _createElementVNode(
        "span",
        {
          class: _normalizeClass(descriptionClass)
        },
        " Vi beh\xF6ver veta om du jobbar 100% eller ej ",
        2
        /* CLASS */
      )
    ]),
    tooltip: _withCtx(() => [
      _createVNode(_component_f_tooltip, {
        "screen-reader-text": "L\xE4s mer om Bor det barn som har fyllt 18 \xE5r i bostaden?",
        "header-tag": "h2"
      }, {
        header: _withCtx(() => _cache[3] || (_cache[3] = [
          _createTextVNode(" Lite allm\xE4n information ")
        ])),
        body: _withCtx(() => _cache[4] || (_cache[4] = [
          _createTextVNode(" H\xE4r kan man skriva lite extra information om man nu \xF6nskar det! ")
        ])),
        _: 1
        /* STABLE */
      })
    ]),
    default: _withCtx(() => [
      _createVNode(_component_f_radio_field, {
        id: "deltid-ja",
        modelValue: _ctx.deltid,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.deltid = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[5] || (_cache[5] = [
          _createTextVNode(" Ja ")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_radio_field, {
        id: "deltid-nej",
        modelValue: _ctx.deltid,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.deltid = $event),
        value: false
      }, {
        default: _withCtx(() => _cache[6] || (_cache[6] = [
          _createTextVNode(" Nej ")
        ])),
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
  selector: "#example-d7e70f"
});
export {
  render
};
