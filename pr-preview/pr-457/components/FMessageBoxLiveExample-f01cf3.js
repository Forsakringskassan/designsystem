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

// virtual-entry:virtual:packages/vue/src/components/FMessageBox/examples/FMessageBoxLiveExample.vue:FMessageBoxLiveExample-f01cf3.js
import { defineComponent } from "vue";
import { FCheckboxField, FFieldset, FMessageBox, FRadioField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "MessageBoxLiveExample",
  components: { FCheckboxField, FFieldset, FRadioField, LiveExample },
  data() {
    return {
      messageType: "info",
      shortLayout: false
    };
  },
  computed: {
    components() {
      return { FMessageBox };
    },
    template() {
      if (this.shortLayout) {
        return (
          /* HTML */
          `
                    <f-message-box type="${this.messageType}" layout="short">
                        Kort meddelande
                    </f-message-box>
                `
        );
      } else {
        return (
          /* HTML */
          `
                    <f-message-box type="${this.messageType}">
                        <template #default="{ headingSlotClass }">
                            <h3 :class="headingSlotClass">Rubrik</h3>
                            <p>Br\xF6dtext</p>
                        </template>
                    </f-message-box>
                `
        );
      }
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_fieldset, { name: "radio-message-type" }, {
        label: _withCtx(() => _cache[5] || (_cache[5] = [
          _createTextVNode(" Typ ")
        ])),
        default: _withCtx(() => [
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.messageType,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.messageType = $event),
            value: "info"
          }, {
            default: _withCtx(() => _cache[6] || (_cache[6] = [
              _createTextVNode(" Information ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.messageType,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.messageType = $event),
            value: "warning"
          }, {
            default: _withCtx(() => _cache[7] || (_cache[7] = [
              _createTextVNode(" Varning ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.messageType,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.messageType = $event),
            value: "error"
          }, {
            default: _withCtx(() => _cache[8] || (_cache[8] = [
              _createTextVNode(" Fel ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.messageType,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.messageType = $event),
            value: "success"
          }, {
            default: _withCtx(() => _cache[9] || (_cache[9] = [
              _createTextVNode(" Positiv \xE5terkoppling ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.shortLayout,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.shortLayout = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[10] || (_cache[10] = [
          _createTextVNode(" Kort meddelande ")
        ])),
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
  selector: "#example-f01cf3"
});
export {
  render
};
