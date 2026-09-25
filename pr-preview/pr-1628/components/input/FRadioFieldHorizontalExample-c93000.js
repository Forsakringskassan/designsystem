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

// virtual-entry:virtual:packages/vue/src/components/FRadioField/examples/FRadioFieldHorizontalExample.vue:FRadioFieldHorizontalExample-c93000.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FFieldset, FRadioField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FRadioFieldHorizontalExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const modelValue = ref();
    const __returned__ = { modelValue, get FFieldset() {
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
    name: "arbete-annat-land",
    horizontal: ""
  }, {
    label: _withCtx(() => [..._cache[2] || (_cache[2] = [
      _createTextVNode(
        " Har du arbetat utomlands under de senaste 12 m\xE5naderna? ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [
      _createVNode($setup["FRadioField"], {
        modelValue: $setup.modelValue,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event),
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
      _createVNode($setup["FRadioField"], {
        modelValue: $setup.modelValue,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.modelValue = $event),
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
  selector: "#example-c93000"
});
export {
  render
};
