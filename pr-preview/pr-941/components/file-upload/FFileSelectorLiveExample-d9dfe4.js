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

// virtual-entry:virtual:packages/vue/src/components/FFileSelector/examples/FFileSelectorLiveExample.vue:FFileSelectorLiveExample-d9dfe4.js
import { defineComponent } from "vue";
import { FCheckboxField, FFileSelector, FSelectField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FFileSelectorLiveExample",
  components: { FCheckboxField, FSelectField, LiveExample },
  data() {
    return {
      buttonSize: void 0,
      isDisabled: false
    };
  },
  computed: {
    components() {
      return { FFileSelector };
    },
    disabled() {
      const template = (
        /* HTML */
        ` disabled`
      );
      return this.isDisabled ? template : "";
    },
    size() {
      return this.buttonSize ? `size="${this.buttonSize}"` : "";
    },
    template() {
      return (
        /* HTML */
        `
                <f-file-selector
                    accept="application/pdf, image/jpeg, image/tiff, image/png"
                    ${this.disabled}
                    ${this.size}
                >
                    L\xE4gg till fil
                </f-file-selector>
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
    template: _ctx.template
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.buttonSize,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.buttonSize = $event)
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
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isDisabled,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isDisabled = $event),
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
  }, 8, ["components", "template"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-d9dfe4"
});
export {
  render
};
