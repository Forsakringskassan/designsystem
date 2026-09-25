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

// virtual-entry:virtual:packages/vue/src/components/FRadioField/examples/FRadioFieldDetailsAlwaysExample.vue:FRadioFieldDetailsAlwaysExample-775c38.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FFieldset, FRadioField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FRadioFieldDetailsAlwaysExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const careReason = ref();
    const __returned__ = { careReason, get FFieldset() {
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
    name: "care-reason",
    "show-details": "always"
  }, {
    label: _withCtx(() => [..._cache[4] || (_cache[4] = [
      _createTextVNode(
        " Hur var barnet sjukt eller skadat? ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [
      _createVNode($setup["FRadioField"], {
        modelValue: $setup.careReason,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.careReason = $event),
        value: "temporary"
      }, {
        details: _withCtx(() => [..._cache[5] || (_cache[5] = [
          _createTextVNode(
            " som f\xF6rkylning eller bruten arm ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[6] || (_cache[6] = _createTextVNode(
            " Tillf\xE4llig sjukdom eller skada ",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode($setup["FRadioField"], {
        modelValue: $setup.careReason,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.careReason = $event),
        value: "mental-health"
      }, {
        details: _withCtx(() => [..._cache[7] || (_cache[7] = [
          _createTextVNode(
            " som stark oro, \xE5ngest eller panikattack ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[8] || (_cache[8] = _createTextVNode(
            " Psykisk oh\xE4lsa ",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode($setup["FRadioField"], {
        modelValue: $setup.careReason,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.careReason = $event),
        value: "temporary-disability-deterioration"
      }, {
        details: _withCtx(() => [..._cache[9] || (_cache[9] = [
          _createTextVNode(
            " som ADHD eller autism ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[10] || (_cache[10] = _createTextVNode(
            " Tillf\xE4llig f\xF6rs\xE4mring i funktionsneds\xE4ttning ",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode($setup["FRadioField"], {
        modelValue: $setup.careReason,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.careReason = $event),
        value: "other"
      }, {
        default: _withCtx(() => [..._cache[11] || (_cache[11] = [
          _createTextVNode(
            " Annan sjukdom eller skada ",
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
  selector: "#example-775c38"
});
export {
  render
};
