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

// virtual-entry:virtual:packages/vue/src/plugins/validation/examples/ValidationPluginToggleDisable.vue:ValidationPluginToggleDisable-a984b5.js
import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import { FTextField, FFieldset, FRadioField, getElementFromVueRef } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createVNode as _createVNode, createElementVNode as _createElementVNode, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "ValidationPluginToggleDisable",
  components: {
    FTextField,
    FFieldset,
    FRadioField
  },
  data() {
    return {
      name: "Ett f\xF6r l\xE5ngt namn",
      isDisabled: false
    };
  },
  methods: {
    async onToggleDisable() {
      await this.$nextTick();
      if (this.isDisabled) {
        const wrapper = getElementFromVueRef(this.$refs.inputField);
        const input = wrapper.querySelector("input");
        ValidationService.validateElement(input);
      }
    }
  }
});
var _hoisted_1 = { class: "row" };
var _hoisted_2 = { class: "col col--md-6" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _directive_test = _resolveDirective("test");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_fieldset, {
      id: "is-disabled",
      name: "color",
      onChange: _ctx.onToggleDisable
    }, {
      label: _withCtx(() => _cache[3] || (_cache[3] = [
        _createTextVNode(" Ska inmatningsf\xE4ltet vara inaktivt? ")
      ])),
      default: _withCtx(() => [
        _withDirectives((_openBlock(), _createBlock(_component_f_radio_field, {
          id: "disabled-no",
          modelValue: _ctx.isDisabled,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.isDisabled = $event),
          value: false
        }, {
          default: _withCtx(() => _cache[4] || (_cache[4] = [
            _createTextVNode(" Nej ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])), [
          [_directive_test, "disabled-no"]
        ]),
        _withDirectives((_openBlock(), _createBlock(_component_f_radio_field, {
          id: "disabled-yes",
          modelValue: _ctx.isDisabled,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.isDisabled = $event),
          value: true
        }, {
          default: _withCtx(() => _cache[5] || (_cache[5] = [
            _createTextVNode(" Ja ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])), [
          [_directive_test, "disabled-yes"]
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["onChange"]),
    _createElementVNode("div", _hoisted_1, [
      _createElementVNode("div", _hoisted_2, [
        _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
          id: "dynamic-disable",
          ref: "inputField",
          modelValue: _ctx.name,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.name = $event),
          disabled: _ctx.isDisabled
        }, {
          default: _withCtx(() => _cache[6] || (_cache[6] = [
            _createTextVNode(" Namn ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled"])), [
          [_directive_test, "dynamic-disable"],
          [
            _directive_validation,
            { maxLength: { length: 10 } },
            void 0,
            { maxLength: true }
          ]
        ])
      ])
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-a984b5"
});
export {
  render
};
