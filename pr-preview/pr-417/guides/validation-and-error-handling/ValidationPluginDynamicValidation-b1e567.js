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

// virtual-entry:virtual:packages/vue/src/plugins/validation/examples/ValidationPluginDynamicValidation.vue:ValidationPluginDynamicValidation-b1e567.js
import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import { FValidationForm, FTextField } from "@fkui/vue";
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
ValidationService.registerValidator({
  name: "notShorter",
  validation(value, element, config) {
    return value.length >= config.minLength;
  }
});
var exampleComponent = defineComponent({
  name: "ValidationPluginDynamicValidation",
  components: {
    FValidationForm,
    FTextField
  },
  data() {
    return {
      name: "",
      minLength: "8"
    };
  }
});
var _hoisted_1 = { class: "row" };
var _hoisted_2 = {
  id: "min-name",
  class: "col col--md-6"
};
var _hoisted_3 = {
  id: "min-minLength",
  class: "col col--md-6"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_validation_form = _resolveComponent("f-validation-form");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock(_component_f_validation_form, { "use-error-list": false }, {
    "error-message": _withCtx(() => _cache[2] || (_cache[2] = [
      _createTextVNode(" Alla fr\xE5gor \xE4r inte korrekt ifyllda. Titta i: ")
    ])),
    default: _withCtx(() => [
      _cache[5] || (_cache[5] = _createElementVNode(
        "p",
        null,
        "Namn f\xE5r inte vara kortare \xE4n minsta l\xE4ngd.",
        -1
        /* HOISTED */
      )),
      _createElementVNode("div", _hoisted_1, [
        _createElementVNode("div", _hoisted_2, [
          _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
            modelValue: _ctx.name,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.name = $event)
          }, {
            default: _withCtx(() => _cache[3] || (_cache[3] = [
              _createTextVNode(" Namn ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])), [
            [
              _directive_validation,
              {
                notShorter: {
                  minLength: _ctx.minLength,
                  errorMessage: "Namn f\xE5r inte vara kortare \xE4n minimum l\xE4ngd"
                },
                maxLength: { length: 100 }
              },
              void 0,
              {
                required: true,
                maxLength: true,
                notShorter: true
              }
            ]
          ])
        ]),
        _createElementVNode("div", _hoisted_3, [
          _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
            modelValue: _ctx.minLength,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.minLength = $event)
          }, {
            default: _withCtx(() => _cache[4] || (_cache[4] = [
              _createTextVNode(" Minimuml\xE4ngd ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])), [
            [
              _directive_validation,
              { maxLength: { length: 100 } },
              void 0,
              {
                required: true,
                maxLength: true
              }
            ]
          ])
        ])
      ]),
      _cache[6] || (_cache[6] = _createElementVNode(
        "button",
        {
          class: "button",
          type: "submit"
        },
        "Signera",
        -1
        /* HOISTED */
      ))
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-b1e567"
});
export {
  render
};
