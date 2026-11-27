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

// virtual-entry:virtual:docs/components/modal/FFormModalExample.vue:FFormModalExample-6bc3f2.js
import { defineComponent as _defineComponent } from "vue";
import { FFormModal, FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FFormModalExample",
  props: {
    value: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FFormModal() {
      return FFormModal;
    }, get FTextField() {
      return FTextField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FFormModal"], { value: $props.value }, {
    header: _withCtx(() => [..._cache[2] || (_cache[2] = [
      _createTextVNode(
        " Awesome Modal ",
        -1
        /* CACHED */
      )
    ])]),
    "input-text-fields": _withCtx(() => [
      _createVNode($setup["FTextField"], {
        modelValue: $props.value.name,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $props.value.name = $event)
      }, {
        default: _withCtx(() => [..._cache[3] || (_cache[3] = [
          _createTextVNode(
            " Namn ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode($setup["FTextField"], {
        modelValue: $props.value.age,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $props.value.age = $event)
      }, {
        default: _withCtx(() => [..._cache[4] || (_cache[4] = [
          _createTextVNode(
            " \xC5lder ",
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
  }, 8, ["value"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-6bc3f2"
});
export {
  render
};
