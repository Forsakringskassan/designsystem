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

// virtual-entry:virtual:packages/vue-labs/src/components/XRelativeTime/examples/XRelativeTimeLiveExample.vue:XRelativeTimeLiveExample-2f3d06.js
import { defineComponent as _defineComponent } from "vue";
import { computed, ref } from "vue";
import { FSelectField } from "@fkui/vue";
import { LiveExample, createElement } from "@forsakringskassan/docs-live-example";
import { XRelativeTime } from "@fkui/vue-labs";
import { createTextVNode as _createTextVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, withCtx as _withCtx, createVNode as _createVNode, createBlock as _createBlock } from "vue";
var sekunder = 1e3;
var minuter = 6e4;
var timmar = 36e5;
var dagar = 864e5;
var m\u00E5nader = 2592e6;
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "XRelativeTimeLiveExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const now = Date.now();
    const time = {
      Sekunder: now - 9 * sekunder,
      Minuter: now - 42 * minuter,
      Timmar: now - 5 * timmar,
      Dagar: now - 12 * dagar,
      M\u00E5nader: now - 2 * m\u00E5nader
    };
    const entries = Object.entries(time);
    const timestamp = ref(entries[0][1]);
    const components = {
      XRelativeTime
    };
    const template = computed(() => {
      return createElement("x-relative-time", {
        ":timestamp": timestamp.value,
        ":reference": now
      });
    });
    const __returned__ = { sekunder, minuter, timmar, dagar, m\u00E5nader, now, time, entries, timestamp, components, template, get FSelectField() {
      return FSelectField;
    }, get LiveExample() {
      return LiveExample;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["LiveExample"], {
    components: $setup.components,
    template: $setup.template
  }, {
    default: _withCtx(() => [
      _createVNode($setup["FSelectField"], {
        modelValue: $setup.timestamp,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.timestamp = $event)
      }, {
        label: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " Tid ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          (_openBlock(true), _createElementBlock(
            _Fragment,
            null,
            _renderList($setup.entries, ([label, value]) => {
              return _openBlock(), _createElementBlock("option", {
                key: label,
                value
              }, _toDisplayString(label), 9, _hoisted_1);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["template"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-2f3d06"
});
export {
  render
};
