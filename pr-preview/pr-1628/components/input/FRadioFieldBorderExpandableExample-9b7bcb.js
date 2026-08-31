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

// virtual-entry:virtual:packages/vue/src/components/FRadioField/examples/FRadioFieldBorderExpandableExample.vue:FRadioFieldBorderExpandableExample-9b7bcb.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FFieldset, FRadioField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FRadioFieldBorderExpandableExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const paymentPlan = ref();
    const __returned__ = { paymentPlan, get FFieldset() {
      return FFieldset;
    }, get FRadioField() {
      return FRadioField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FFieldset"], {
    name: "payment-plan",
    border: "",
    "show-details": "when-selected"
  }, {
    label: _withCtx(() => [..._cache[3] || (_cache[3] = [
      _createTextVNode(
        " V\xE4lj en avbetalningsplan ",
        -1
        /* CACHED */
      )
    ])]),
    description: _withCtx(({ descriptionClass }) => [
      _createElementVNode(
        "span",
        {
          class: _normalizeClass(descriptionClass)
        },
        " Alla belopp \xE4r inklusive r\xE4nta. ",
        2
        /* CLASS */
      )
    ]),
    default: _withCtx(() => [
      _createVNode($setup["FRadioField"], {
        modelValue: $setup.paymentPlan,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.paymentPlan = $event),
        value: "525-12"
      }, {
        details: _withCtx(() => [..._cache[4] || (_cache[4] = [
          _createTextVNode(
            " Du kommer att betala tillbaka 6 300 kronor. ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[5] || (_cache[5] = _createTextVNode(
            " 525 kronor per m\xE5nad i 12 m\xE5nader ",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode($setup["FRadioField"], {
        modelValue: $setup.paymentPlan,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.paymentPlan = $event),
        value: "570-11"
      }, {
        details: _withCtx(() => [..._cache[6] || (_cache[6] = [
          _createTextVNode(
            " Du kommer att betala tillbaka 6 270 kronor. ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[7] || (_cache[7] = _createTextVNode(
            " 570 kronor per m\xE5nad i 11 m\xE5nader ",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode($setup["FRadioField"], {
        modelValue: $setup.paymentPlan,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.paymentPlan = $event),
        value: "625-10"
      }, {
        details: _withCtx(() => [..._cache[8] || (_cache[8] = [
          _createTextVNode(
            " Du kommer att betala tillbaka 6 250 kronor. ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[9] || (_cache[9] = _createTextVNode(
            " 625 kronor per m\xE5nad i 10 m\xE5nader ",
            -1
            /* CACHED */
          ))
        ]),
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
  selector: "#example-9b7bcb"
});
export {
  render
};
