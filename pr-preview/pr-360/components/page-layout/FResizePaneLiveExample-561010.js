// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
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
  app.mount(selector);
}

// virtual-entry:./packages/vue/src/components/FResizePane/examples/FResizePaneLiveExample.vue
import { defineComponent as _defineComponent } from "vue";
import { computed, ref } from "vue";
import { FPageLayout, FResizePane, FFieldset, FRadioField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FResizePaneLiveExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const attachment = ref("left");
    const components = { FPageLayout, FResizePane };
    const layout = computed(() => {
      const mapping = {
        left: "left-panel",
        right: "right-panel"
      };
      return mapping[attachment.value];
    });
    const slot = computed(() => {
      const mapping = {
        left: "left",
        right: "right"
      };
      return mapping[attachment.value];
    });
    const template = computed(() => {
      return (
        /* HTML */
        `
        <div class="layout-container">
            <f-page-layout layout="${layout.value}">
                <template #${slot.value}>
                    <f-resize-pane min="200px" max="50%" initial="25%">
                        <div class="content">
                            <p>Panel</p>
                        </div>
                    </f-resize-pane>
                </template>
                <template #content>
                    <div class="content">
                        <p>Huvudyta</p>
                        <p>Drag i handtaget f\xF6r att \xE4ndra storlek.</p>
                    </div>
                </template>
            </f-page-layout>
        </div>
    `
      );
    });
    const __returned__ = { attachment, components, layout, slot, template, get FFieldset() {
      return FFieldset;
    }, get FRadioField() {
      return FRadioField;
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
      _createVNode($setup["FFieldset"], { name: "attachment" }, {
        label: _withCtx(() => _cache[2] || (_cache[2] = [
          _createTextVNode(" F\xE4st till ")
        ])),
        default: _withCtx(() => [
          _createVNode($setup["FRadioField"], {
            modelValue: $setup.attachment,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.attachment = $event),
            value: "left"
          }, {
            default: _withCtx(() => _cache[3] || (_cache[3] = [
              _createTextVNode("V\xE4nster")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode($setup["FRadioField"], {
            modelValue: $setup.attachment,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.attachment = $event),
            value: "right"
          }, {
            default: _withCtx(() => _cache[4] || (_cache[4] = [
              _createTextVNode("H\xF6ger")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  }, 8, ["template"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#FResizePaneLiveExample"
});
export {
  render
};
