"use strict";
(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // docs/src/setup.ts
  var import_vue = __require("vue");
  var import_vue2 = __require("@fkui/vue");
  function setup(options) {
    const { rootComponent, selector } = options;
    const app = (0, import_vue.createApp)({
      render() {
        return (0, import_vue.h)(import_vue2.FErrorHandlingApp, { defaultComponent: rootComponent });
      }
    });
    (0, import_vue2.setRunningContext)(app);
    app.use(import_vue2.ErrorPlugin, {
      captureWarnings: true,
      logToConsole: true
    });
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
  }

  // virtual-entry:./packages/vue/src/components/FValidationForm/examples/FValidationFormDefault.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FValidationFormDefault",
    components: {
      FCheckboxField: import_vue4.FCheckboxField,
      FEmailTextField: import_vue4.FEmailTextField,
      FFieldset: import_vue4.FFieldset,
      FRadioField: import_vue4.FRadioField,
      FPhoneTextField: import_vue4.FPhoneTextField,
      FValidationForm: import_vue4.FValidationForm
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
    const _component_f_phone_text_field = (0, import_vue5.resolveComponent)("f-phone-text-field");
    const _component_f_email_text_field = (0, import_vue5.resolveComponent)("f-email-text-field");
    const _component_f_radio_field = (0, import_vue5.resolveComponent)("f-radio-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_f_validation_form = (0, import_vue5.resolveComponent)("f-validation-form");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_validation_form, { onSubmit: _ctx.onSubmit }, {
      "error-message": (0, import_vue5.withCtx)(() => _cache[8] || (_cache[8] = [
        (0, import_vue5.createTextVNode)(" Oj, du har gl\xF6mt fylla i n\xE5got. G\xE5 till: ")
      ])),
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.withDirectives)((0, import_vue5.createVNode)(_component_f_phone_text_field, {
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
        (0, import_vue5.createVNode)(_component_f_phone_text_field, {
          modelValue: _ctx.phoneAlt,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.phoneAlt = $event)
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[9] || (_cache[9] = [
            (0, import_vue5.createTextVNode)(" Alternativt telefonnummer (frivilligt) ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.withDirectives)((0, import_vue5.createVNode)(_component_f_email_text_field, {
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
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, { name: "info" }, {
          label: (0, import_vue5.withCtx)(() => _cache[10] || (_cache[10] = [
            (0, import_vue5.createTextVNode)(" Hur vill du f\xE5 information fr\xE5n oss? ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.info,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.info = $event),
              value: "mejl"
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[11] || (_cache[11] = [
                (0, import_vue5.createTextVNode)(" Mejl ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.info,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.info = $event),
              value: "sms"
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[12] || (_cache[12] = [
                (0, import_vue5.createTextVNode)(" Sms ")
              ])),
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
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, { name: "type" }, {
          label: (0, import_vue5.withCtx)(() => _cache[13] || (_cache[13] = [
            (0, import_vue5.createTextVNode)(" Vilken information vill du ha? ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.news,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.news = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[14] || (_cache[14] = [
                (0, import_vue5.createTextVNode)(" Nyheter ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.tips,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.tips = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[15] || (_cache[15] = [
                (0, import_vue5.createTextVNode)(" Tips ")
              ])),
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
        (0, import_vue5.createElementVNode)("div", _hoisted_1, [
          _cache[16] || (_cache[16] = (0, import_vue5.createElementVNode)(
            "button",
            {
              type: "submit",
              class: "button button-group__item button--primary button--large"
            },
            " Spara ",
            -1
            /* HOISTED */
          )),
          (0, import_vue5.createElementVNode)("button", {
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
    selector: "#FValidationFormDefault"
  });
})();
