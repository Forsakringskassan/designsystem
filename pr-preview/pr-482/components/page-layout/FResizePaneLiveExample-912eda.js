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

// virtual-entry:virtual:packages/vue/src/components/FResizePane/examples/FResizePaneLiveExample.vue:FResizePaneLiveExample-912eda.js
import { defineComponent as _defineComponent } from "vue";
import { computed, defineComponent, ref } from "vue";
import {
  FCheckboxField,
  FFieldset,
  FPageLayout,
  FSelectField,
  FRadioField,
  FResizePane,
  useResize
} from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FResizePaneLiveExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const CustomPanel = defineComponent({
      setup() {
        const { size } = useResize({
          enabled,
          visible,
          overlay,
          offset
        });
        return { size };
      },
      template: (
        /* HTML */
        `
        <div class="content">
            <slot v-bind="{ size }"></slot>
        </div>
    `
      )
    });
    const attachment = ref("left");
    const enabled = ref(true);
    const visible = ref(true);
    const overlay = ref(false);
    const offset = ref(200);
    const min = ref("200px");
    const max = ref("50%");
    const components = { FPageLayout, FResizePane, CustomPanel };
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
    const livedata = {
      min,
      max
    };
    const template = computed(() => {
      return (
        /* HTML */
        `
        <div class="layout-container">
            <f-page-layout layout="${layout.value}">
                <template #default="{ ${slot.value}, content }">
                    <f-resize-pane :slot="${slot.value}" :min :max initial="25%">
                        <custom-panel>
                            <template #default="{ size }">
                                <p>Panel</p>
                                <p>Size: {{ size }}px</p>
                            </template>
                        </custom-panel>
                    </f-resize-pane>

                    <div :slot="content" class="content">
                        <p>Huvudyta</p>
                        <p>Drag i handtaget f\xF6r att \xE4ndra storlek.</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tellus
                            sodales, vestibulum felis a, eleifend nunc. Mauris hendrerit lorem a
                            nulla elementum tempor. Etiam vestibulum risus ut velit pharetra, vitae
                            tincidunt lorem mattis.
                        </p>
                    </div>
                </template>
            </f-page-layout>
        </div>
    `
      );
    });
    const __returned__ = { CustomPanel, attachment, enabled, visible, overlay, offset, min, max, components, layout, slot, livedata, template, get FCheckboxField() {
      return FCheckboxField;
    }, get FFieldset() {
      return FFieldset;
    }, get FSelectField() {
      return FSelectField;
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
    livedata: $setup.livedata,
    template: $setup.template
  }, {
    default: _withCtx(() => [
      _createVNode($setup["FFieldset"], { name: "attachment" }, {
        label: _withCtx(() => [..._cache[8] || (_cache[8] = [
          _createTextVNode(
            " F\xE4st till ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode($setup["FRadioField"], {
            modelValue: $setup.attachment,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.attachment = $event),
            value: "left"
          }, {
            default: _withCtx(() => [..._cache[9] || (_cache[9] = [
              _createTextVNode(
                "V\xE4nster",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode($setup["FRadioField"], {
            modelValue: $setup.attachment,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.attachment = $event),
            value: "right"
          }, {
            default: _withCtx(() => [..._cache[10] || (_cache[10] = [
              _createTextVNode(
                "H\xF6ger",
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
      }),
      _createVNode($setup["FFieldset"], { name: "attachment" }, {
        label: _withCtx(() => [..._cache[11] || (_cache[11] = [
          _createTextVNode(
            " Egenskaper ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode($setup["FCheckboxField"], {
            modelValue: $setup.enabled,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.enabled = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[12] || (_cache[12] = [
              _createTextVNode(
                "Enabled",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode($setup["FCheckboxField"], {
            modelValue: $setup.visible,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.visible = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[13] || (_cache[13] = [
              _createTextVNode(
                "Visible",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode($setup["FCheckboxField"], {
            modelValue: $setup.overlay,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.overlay = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[14] || (_cache[14] = [
              _createTextVNode(
                "Overlay",
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
      }),
      _createVNode($setup["FSelectField"], {
        modelValue: $setup.min,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.min = $event)
      }, {
        label: _withCtx(() => [..._cache[15] || (_cache[15] = [
          _createTextVNode(
            " Minsta storlek ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [..._cache[16] || (_cache[16] = [
          _createElementVNode(
            "option",
            { value: void 0 },
            "(ingen begr\xE4nsning)",
            -1
            /* CACHED */
          ),
          _createElementVNode(
            "option",
            { value: "200px" },
            "200px",
            -1
            /* CACHED */
          ),
          _createElementVNode(
            "option",
            { value: "10%" },
            "10%",
            -1
            /* CACHED */
          ),
          _createElementVNode(
            "option",
            { value: "200px 10%" },
            "200px 10%",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode($setup["FSelectField"], {
        modelValue: $setup.max,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => $setup.max = $event)
      }, {
        label: _withCtx(() => [..._cache[17] || (_cache[17] = [
          _createTextVNode(
            " St\xF6rsta storlek ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [..._cache[18] || (_cache[18] = [
          _createElementVNode(
            "option",
            { value: void 0 },
            "(ingen begr\xE4nsning)",
            -1
            /* CACHED */
          ),
          _createElementVNode(
            "option",
            { value: "400px" },
            "400px",
            -1
            /* CACHED */
          ),
          _createElementVNode(
            "option",
            { value: "50%" },
            "50%",
            -1
            /* CACHED */
          ),
          _createElementVNode(
            "option",
            { value: "400px 50%" },
            "400px 50%",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode($setup["FSelectField"], {
        modelValue: $setup.offset,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $setup.offset = $event),
        disabled: !$setup.overlay
      }, {
        label: _withCtx(() => [..._cache[19] || (_cache[19] = [
          _createTextVNode(
            " Offset ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [..._cache[20] || (_cache[20] = [
          _createElementVNode(
            "option",
            { value: 0 },
            "Ingen offset",
            -1
            /* CACHED */
          ),
          _createElementVNode(
            "option",
            { value: 200 },
            "200px offset",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["template"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-912eda"
});
export {
  render
};
