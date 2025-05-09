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

// virtual-entry:virtual:packages/vue/src/components/FResizePane/examples/CustomPanelExample.vue:CustomPanelExample-8608f6.js
import { defineComponent as _defineComponent } from "vue";
import { computed, defineComponent, h as h2, ref } from "vue";
import { FPageLayout, FResizePane, FCheckboxField, useResize } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "CustomPanelExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const enabled = ref(true);
    const visible = ref(true);
    const CustomPanel = defineComponent({
      setup(_props, { slots }) {
        useResize({
          enabled,
          visible
        });
        return () => h2("div", slots.default?.());
      }
    });
    const components = { FPageLayout, FResizePane, CustomPanel };
    const template = computed(() => {
      return (
        /* HTML */
        `
        <div class="layout-container">
            <f-page-layout layout="left-panel">
                <template #default="{ left, content }">
                    <f-resize-pane :slot="left" min="200px" max="50%" initial="25%">
                        <custom-panel>
                            <div class="content">
                                <p>Panel</p>
                            </div>
                        </custom-panel>
                    </f-resize-pane>
                    <div :slot="content" class="content">
                        <p>Huvudyta</p>
                        <p>Drag i handtaget f\xF6r att \xE4ndra storlek.</p>
                    </div>
                </template>
            </f-page-layout>
        </div>
    `
      );
    });
    const __returned__ = { enabled, visible, CustomPanel, components, template, get FCheckboxField() {
      return FCheckboxField;
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
      _createVNode($setup["FCheckboxField"], {
        modelValue: $setup.enabled,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.enabled = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[2] || (_cache[2] = [
          _createTextVNode("Aktiv")
        ])),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode($setup["FCheckboxField"], {
        modelValue: $setup.visible,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.visible = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[3] || (_cache[3] = [
          _createTextVNode("Synlig")
        ])),
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
  selector: "#example-8608f6"
});
export {
  render
};
