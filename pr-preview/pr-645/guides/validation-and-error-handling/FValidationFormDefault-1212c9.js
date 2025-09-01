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

// virtual-entry:virtual:packages/vue/src/components/FValidationForm/examples/FValidationFormDefault.vue:FValidationFormDefault-1212c9.js
import { defineComponent } from "vue";
import {
  FCheckboxField,
  FEmailTextField,
  FFieldset,
  FRadioField,
  FPhoneTextField,
  FValidationForm
} from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, createVNode as _createVNode, withDirectives as _withDirectives, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, createElementVNode as _createElementVNode } from "vue";
var exampleComponent = defineComponent({
  name: "FValidationFormDefault",
  components: {
    FCheckboxField,
    FEmailTextField,
    FFieldset,
    FRadioField,
    FPhoneTextField,
    FValidationForm
  },
  data() {
    return {
      phone: "",
      phoneAlt: "",
      email: "",
      info: "",
      tips: false,
      news: false
    };
  },
  methods: {
    onSubmit() {
      alert("Spara");
    },
    onCancel() {
      alert("Avbryt");
    }
  }
});
var _hoisted_1 = { class: "button-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_phone_text_field = _resolveComponent("f-phone-text-field");
  const _component_f_email_text_field = _resolveComponent("f-email-text-field");
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_validation_form = _resolveComponent("f-validation-form");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock(_component_f_validation_form, { onSubmit: _ctx.onSubmit }, {
    "error-message": _withCtx(() => [..._cache[8] || (_cache[8] = [
      _createTextVNode(
        " Oj, du har gl\xF6mt fylla i n\xE5got. G\xE5 till: ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [
      _withDirectives(_createVNode(_component_f_phone_text_field, {
        modelValue: _ctx.phone,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.phone = $event)
      }, null, 8, ["modelValue"]), [
        [
          _directive_validation,
          void 0,
          void 0,
          { required: true }
        ]
      ]),
      _createVNode(_component_f_phone_text_field, {
        modelValue: _ctx.phoneAlt,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.phoneAlt = $event)
      }, {
        default: _withCtx(() => [..._cache[9] || (_cache[9] = [
          _createTextVNode(
            " Alternativt telefonnummer (frivilligt) ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _withDirectives(_createVNode(_component_f_email_text_field, {
        modelValue: _ctx.email,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.email = $event)
      }, null, 8, ["modelValue"]), [
        [
          _directive_validation,
          void 0,
          void 0,
          { required: true }
        ]
      ]),
      _withDirectives((_openBlock(), _createBlock(_component_f_fieldset, { name: "info" }, {
        label: _withCtx(() => [..._cache[10] || (_cache[10] = [
          _createTextVNode(
            " Hur vill du f\xE5 information fr\xE5n oss? ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.info,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.info = $event),
            value: "mejl"
          }, {
            default: _withCtx(() => [..._cache[11] || (_cache[11] = [
              _createTextVNode(
                " Mejl ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.info,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.info = $event),
            value: "sms"
          }, {
            default: _withCtx(() => [..._cache[12] || (_cache[12] = [
              _createTextVNode(
                " Sms ",
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
      })), [
        [
          _directive_validation,
          void 0,
          void 0,
          { required: true }
        ]
      ]),
      _withDirectives((_openBlock(), _createBlock(_component_f_fieldset, { name: "type" }, {
        label: _withCtx(() => [..._cache[13] || (_cache[13] = [
          _createTextVNode(
            " Vilken information vill du ha? ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.news,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.news = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[14] || (_cache[14] = [
              _createTextVNode(
                " Nyheter ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.tips,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.tips = $event),
            value: true
          }, {
            default: _withCtx(() => [..._cache[15] || (_cache[15] = [
              _createTextVNode(
                " Tips ",
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
      })), [
        [
          _directive_validation,
          void 0,
          void 0,
          { required: true }
        ]
      ]),
      _createElementVNode("div", _hoisted_1, [
        _cache[16] || (_cache[16] = _createElementVNode(
          "button",
          {
            type: "submit",
            class: "button button-group__item button--primary button--large"
          },
          " Spara ",
          -1
          /* CACHED */
        )),
        _createElementVNode("button", {
          type: "button",
          class: "button button-group__item button--secondary button--large",
          onClick: _cache[7] || (_cache[7] = (...args) => _ctx.onCancel && _ctx.onCancel(...args))
        }, " Avbryt ")
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["onSubmit"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-1212c9"
});
export {
  render
};
