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

// virtual-entry:virtual:packages/vue/src/components/FFileSelector/examples/FFileSelectorLiveExample.vue:FFileSelectorLiveExample-7940a2.js
import { defineComponent as _defineComponent } from "vue";
import { computed, ref } from "vue";
import { FCheckboxField, FFileSelector, FSelectField } from "@fkui/vue";
import { LiveExample, createElement } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FFileSelectorLiveExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const buttonSize = ref();
    const isDisabled = ref(false);
    const components = { FFileSelector };
    const template = computed(
      () => createElement(
        "f-file-selector",
        {
          accept: "application/pdf, image/jpeg, image/tiff, image/png",
          size: buttonSize.value,
          disabled: isDisabled.value
        },
        "L\xE4gg till fil"
      )
    );
    const __returned__ = { buttonSize, isDisabled, components, template, get FCheckboxField() {
      return FCheckboxField;
    }, get FSelectField() {
      return FSelectField;
    }, get LiveExample() {
      return LiveExample;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["LiveExample"], {
    components: $setup.components,
    template: $setup.template
  }, {
    default: _withCtx(() => [
      _createVNode($setup["FSelectField"], {
        modelValue: $setup.buttonSize,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.buttonSize = $event)
      }, {
        label: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createTextVNode(
            " Storlek ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[3] || (_cache[3] = _createElementVNode(
            "option",
            { value: "small" },
            "Liten",
            -1
            /* CACHED */
          )),
          _cache[4] || (_cache[4] = _createElementVNode(
            "option",
            { value: void 0 },
            "Medium (standard)",
            -1
            /* CACHED */
          )),
          _cache[5] || (_cache[5] = _createElementVNode(
            "option",
            { value: "large" },
            "Stor",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode($setup["FCheckboxField"], {
        modelValue: $setup.isDisabled,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.isDisabled = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[6] || (_cache[6] = [
          _createTextVNode(
            " Inaktiverad ",
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
  }, 8, ["template"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-7940a2"
});
export {
  render
};
