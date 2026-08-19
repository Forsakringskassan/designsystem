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

// virtual-entry:virtual:packages/vue/src/components/FLogo/examples/FLogoLiveExample.vue:FLogoLiveExample-71f77d.js
import { defineComponent as _defineComponent } from "vue";
import { computed, ref } from "vue";
import { FLogo, FSelectField } from "@fkui/vue";
import { LiveExample, createElement } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FLogoLiveExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const logoSize = ref("responsive");
    const components = computed(() => {
      return {
        FLogo
      };
    });
    const template = computed(() => {
      const size = logoSize.value !== "responsive" ? logoSize.value : void 0;
      return createElement("f-logo", { size }, "awesome logo");
    });
    const __returned__ = { logoSize, components, template, get FSelectField() {
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
        modelValue: $setup.logoSize,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.logoSize = $event)
      }, {
        label: _withCtx(() => _cache[1] || (_cache[1] = [
          _createTextVNode(" Storlek ")
        ])),
        default: _withCtx(() => [
          _cache[2] || (_cache[2] = _createElementVNode(
            "option",
            { value: "responsive" },
            "Responsiv",
            -1
            /* CACHED */
          )),
          _cache[3] || (_cache[3] = _createElementVNode(
            "option",
            { value: "small" },
            "Liten",
            -1
            /* CACHED */
          )),
          _cache[4] || (_cache[4] = _createElementVNode(
            "option",
            { value: "large" },
            "Stor",
            -1
            /* CACHED */
          ))
        ]),
        _: 1,
        __: [2, 3, 4]
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-71f77d"
});
export {
  render
};
