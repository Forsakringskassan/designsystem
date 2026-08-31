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

// virtual-entry:virtual:packages/vue/src/components/FRadioField/examples/FRadioFieldDetailsAlwaysExample.vue:FRadioFieldDetailsAlwaysExample-4d5d3e.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FFieldset, FRadioField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FRadioFieldDetailsAlwaysExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const illness = ref();
    const __returned__ = { illness, get FFieldset() {
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
    name: "illness",
    "show-details": "always"
  }, {
    label: _withCtx(() => [..._cache[2] || (_cache[2] = [
      _createTextVNode(
        " Vad hade barnet? ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [
      _createVNode($setup["FRadioField"], {
        modelValue: $setup.illness,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.illness = $event),
        value: "temporary"
      }, {
        details: _withCtx(() => [..._cache[3] || (_cache[3] = [
          _createTextVNode(
            " som f\xF6rkylning eller brutet ben ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[4] || (_cache[4] = _createTextVNode(
            " Tillf\xE4llig sjukdom ",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode($setup["FRadioField"], {
        modelValue: $setup.illness,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.illness = $event),
        value: "long-term"
      }, {
        details: _withCtx(() => [..._cache[5] || (_cache[5] = [
          _createTextVNode(
            " som diabetes eller astma ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[6] || (_cache[6] = _createTextVNode(
            " L\xE5ngvarig sjukdom ",
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
  selector: "#example-4d5d3e"
});
export {
  render
};
