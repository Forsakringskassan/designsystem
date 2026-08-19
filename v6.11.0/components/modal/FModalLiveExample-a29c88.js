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

// virtual-entry:virtual:packages/vue/src/components/FModal/examples/FModalLiveExample.vue:FModalLiveExample-a29c88.js
import { defineComponent } from "vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { FCheckboxField, FModal, FSelectField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FModalLiveExample",
  components: {
    LiveExample,
    FSelectField,
    FCheckboxField
  },
  data() {
    return {
      modalType: "",
      modalSize: "small",
      modalFullscreen: false
    };
  },
  computed: {
    components() {
      return { FModal };
    },
    livedata() {
      return {
        isOpen: false
      };
    },
    type() {
      return this.modalType ? `type="${this.modalType}"` : "";
    },
    size() {
      return `size="${this.modalSize}"`;
    },
    fullscreen() {
      return this.modalFullscreen ? "fullscreen" : "";
    },
    button() {
      return (
        /* HTML */
        `
                <button type="button" class="button button--secondary" @click="isOpen = !isOpen">
                    \xD6ppna modal
                </button>
            `
      );
    },
    footer() {
      return (
        /* HTML */
        `
                <template #footer>
                    <div class="button-group">
                        <button
                            type="button"
                            class="button button--primary button-group__item button--large"
                            @click="isOpen = false"
                        >
                            St\xE4ng
                        </button>
                    </div>
                </template>
            `
      );
    },
    template() {
      return (
        /* HTML */
        `
                ${this.button}
                <!-- Example using modal with deprecated template method. This is not recommended. -->
                <f-modal
                    :is-open="isOpen"
                    ${this.type}
                    ${this.size}
                    ${this.fullscreen}
                    @close="isOpen = false"
                >
                    <template #header> Rubrik </template>
                    <template #content> Inneh\xE5ll </template>
                    ${this.footer}
                </f-modal>
            `
      );
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.modalType,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.modalType = $event)
      }, {
        label: _withCtx(() => _cache[3] || (_cache[3] = [
          _createTextVNode(" Typ ")
        ])),
        default: _withCtx(() => [
          _cache[4] || (_cache[4] = _createElementVNode(
            "option",
            { value: "" },
            "Standard",
            -1
            /* HOISTED */
          )),
          _cache[5] || (_cache[5] = _createElementVNode(
            "option",
            { value: "information" },
            "Informationsmodal",
            -1
            /* HOISTED */
          )),
          _cache[6] || (_cache[6] = _createElementVNode(
            "option",
            { value: "warning" },
            "Varningsmodal",
            -1
            /* HOISTED */
          )),
          _cache[7] || (_cache[7] = _createElementVNode(
            "option",
            { value: "error" },
            "Felmodal",
            -1
            /* HOISTED */
          ))
        ]),
        _: 1,
        __: [4, 5, 6, 7]
      }, 8, ["modelValue"]),
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.modalSize,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.modalSize = $event)
      }, {
        label: _withCtx(() => _cache[8] || (_cache[8] = [
          _createTextVNode(" Storlek ")
        ])),
        default: _withCtx(() => [
          _cache[9] || (_cache[9] = _createElementVNode(
            "option",
            { value: "small" },
            "Liten",
            -1
            /* HOISTED */
          )),
          _cache[10] || (_cache[10] = _createElementVNode(
            "option",
            { value: "medium" },
            "Medium",
            -1
            /* HOISTED */
          )),
          _cache[11] || (_cache[11] = _createElementVNode(
            "option",
            { value: "large" },
            "Stor",
            -1
            /* HOISTED */
          )),
          _cache[12] || (_cache[12] = _createElementVNode(
            "option",
            { value: "fullwidth" },
            "Fullbredd",
            -1
            /* HOISTED */
          ))
        ]),
        _: 1,
        __: [9, 10, 11, 12]
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.modalFullscreen,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.modalFullscreen = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[13] || (_cache[13] = [
          _createTextVNode(" Fullsk\xE4rm i mobill\xE4ge ")
        ])),
        _: 1,
        __: [13]
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template", "livedata"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-a29c88"
});
export {
  render
};
