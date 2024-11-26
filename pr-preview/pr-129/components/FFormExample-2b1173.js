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

  // virtual-entry:./packages/vue/src/components/FForm/examples/FFormExample.vue
  var import_vue6 = __require("vue");
  var import_vue7 = __require("@fkui/vue");

  // sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FForm/examples/ExampleKostnad.vue?type=script
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var ExampleKostnad_default = (0, import_vue3.defineComponent)({
    name: "ExampleKostnad",
    components: {
      FFormStep: import_vue4.FFormStep,
      FFormStepButton: import_vue4.FFormStepButton,
      FNumericTextField: import_vue4.FNumericTextField,
      FTextField: import_vue4.FTextField,
      FTextareaField: import_vue4.FTextareaField
    },
    props: {
      kostnad: {
        type: Object,
        required: true
      },
      formStepId: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        formData: { kostnad: "", belopp: "", beskrivning: "" },
        exampleOptions: {
          errorMessageTitleForm: "Innan du g\xE5r vidare...",
          errorMessageForm: "Du har n\xE5gra fel, gl\xF6m inte att titta i f\xF6ljande steg:",
          errorMessageFormStep: "",
          displayError: true,
          numberOfSteps: 2,
          dataMissing: "Information saknas."
        }
      };
    },
    created() {
      this.formData = this.kostnad;
    }
  });

  // sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FForm/examples/ExampleKostnad.vue?type=template
  var import_vue5 = __require("vue");
  var _hoisted_1 = {
    key: 0,
    class: "sr-only"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_text_field = (0, import_vue5.resolveComponent)("f-text-field");
    const _component_f_numeric_text_field = (0, import_vue5.resolveComponent)("f-numeric-text-field");
    const _component_f_textarea_field = (0, import_vue5.resolveComponent)("f-textarea-field");
    const _component_f_form_step_button = (0, import_vue5.resolveComponent)("f-form-step-button");
    const _component_f_form_step = (0, import_vue5.resolveComponent)("f-form-step");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createVNode)(_component_f_form_step, {
        id: `formstep-${_ctx.formStepId}`
      }, (0, import_vue5.createSlots)({
        header: (0, import_vue5.withCtx)((header) => [
          (0, import_vue5.createElementVNode)(
            "h2",
            {
              class: (0, import_vue5.normalizeClass)(header.slotClass)
            },
            (0, import_vue5.toDisplayString)(_ctx.formStepId + 2) + ". Kostnad",
            3
            /* TEXT, CLASS */
          ),
          header.isValid ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("span", _hoisted_1, " Steget \xE4r korrekt ifyllt. ")) : (0, import_vue5.createCommentVNode)("v-if", true)
        ]),
        default: (0, import_vue5.withCtx)((scope) => [
          (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_text_field, {
            modelValue: _ctx.formData.kostnad,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.formData.kostnad = $event)
          }, {
            default: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
              (0, import_vue5.createTextVNode)(" Kostnad ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])), [
            [
              _directive_validation,
              {
                maxLength: { length: 100 }
              },
              void 0,
              {
                required: true,
                maxLength: true
              }
            ]
          ]),
          (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_numeric_text_field, {
            modelValue: _ctx.formData.belopp,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.formData.belopp = $event)
          }, {
            default: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
              (0, import_vue5.createTextVNode)(" Belopp ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])), [
            [
              _directive_validation,
              void 0,
              void 0,
              { required: true }
            ]
          ]),
          (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_textarea_field, {
            modelValue: _ctx.formData.beskrivning,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.formData.beskrivning = $event)
          }, {
            default: (0, import_vue5.withCtx)(() => _cache[5] || (_cache[5] = [
              (0, import_vue5.createTextVNode)(" Hur har du r\xE4knat ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])), [
            [
              _directive_validation,
              void 0,
              void 0,
              { whitelist: true }
            ]
          ]),
          (0, import_vue5.createVNode)(_component_f_form_step_button, {
            "is-open": (
              // @ts-ignore
              scope.isOpen
            ),
            "is-any-field-touched": (
              // @ts-ignore
              scope.isAnyFieldTouched
            ),
            onClick: ($event) => (
              // @ts-ignore
              scope.toggleIsOpen()
            )
          }, null, 8, ["is-open", "is-any-field-touched", "onClick"])
        ]),
        _: 2
        /* DYNAMIC */
      }, [
        _ctx.exampleOptions.errorMessageFormStep ? {
          name: "error-message",
          fn: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createElementVNode)(
              "p",
              null,
              (0, import_vue5.toDisplayString)(_ctx.exampleOptions.errorMessageFormStep),
              1
              /* TEXT */
            )
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["id"])
    ]);
  }

  // packages/vue/src/components/FForm/examples/ExampleKostnad.vue
  ExampleKostnad_default.render = render;
  ExampleKostnad_default.__file = "packages/vue/src/components/FForm/examples/ExampleKostnad.vue";
  var ExampleKostnad_default2 = ExampleKostnad_default;

  // virtual-entry:./packages/vue/src/components/FForm/examples/FFormExample.vue
  var import_vue8 = __require("vue");
  var EXAMPLE_OPTIONS_KEY = "FKUI_VUE_FORM_OPTIONS_EXAMPLE";
  var FORM_DATA_KEY = "FKUI_VUE_FORM_DATA_EXAMPLE";
  var exampleComponent = (0, import_vue6.defineComponent)({
    name: "FFormExample",
    components: {
      FCheckboxField: import_vue7.FCheckboxField,
      FForm: import_vue7.FForm,
      FFormStep: import_vue7.FFormStep,
      FFormStepButton: import_vue7.FFormStepButton,
      FFieldset: import_vue7.FFieldset,
      FIcon: import_vue7.FIcon,
      FRadioField: import_vue7.FRadioField,
      FSelectField: import_vue7.FSelectField,
      FStaticField: import_vue7.FStaticField,
      FTextareaField: import_vue7.FTextareaField,
      FTextField: import_vue7.FTextField,
      FEmailTextField: import_vue7.FEmailTextField,
      FOrganisationsnummerTextField: import_vue7.FOrganisationsnummerTextField,
      FPhoneTextField: import_vue7.FPhoneTextField,
      ExampleKostnad: ExampleKostnad_default2,
      FTooltip: import_vue7.FTooltip
    },
    data() {
      return {
        costs: [],
        exampleOptions: {
          errorMessageTitleForm: "Innan du g\xE5r vidare...",
          errorMessageForm: "Du har n\xE5gra fel, gl\xF6m inte att titta i f\xF6ljande steg:",
          errorMessageFormStep: "",
          displayError: true,
          errorScroll: "center",
          numberOfSteps: 2,
          dataMissing: "Information saknas."
        },
        renderData: {
          fruits: [
            { value: "BANAN", text: "Banan \u{1F34C}" },
            { value: "\xC4PPLE", text: "\xC4pple \u{1F34F}" },
            { value: "MANDARIN", text: "Mandarin \u{1F34A}" },
            { value: "ANANAS", text: "Ananas \u{1F34D}" },
            { value: "VATTENMELON", text: "Vattenmelon \u{1F349}" },
            { value: "ANDRA_FRUKTER", text: "Andra frukter" }
          ],
          sweets: [
            { value: "CHOKLAD", text: "Choklad \u{1F36B}" },
            { value: "MUNK", text: "Munk \u{1F369}" },
            { value: "MJUKGLASS", text: "Mjukglass \u{1F366}" },
            { value: "KAKA", text: "Kaka \u{1F36A}" },
            { value: "L\xD6SGODIS", text: "L\xF6sgodis \u{1F36C}" },
            { value: "ANDRA_S\xD6TSAKER", text: "Andra s\xF6tsaker" }
          ]
        },
        formData: {
          firstName: "",
          lastName: "",
          email: "",
          orgnummer: "",
          phone: "",
          age: "",
          martialStatus: "",
          martialStatusOther: "",
          fruitsPerWeek: "",
          sweetsPerWeek: "",
          consumedFruits: [],
          consumedSweets: [],
          consumptionDescription: "",
          hasSigned: false
        }
      };
    },
    computed: {
      containerTitle() {
        return `${this.costs.length + 2}. Konsumtion`;
      },
      martialStatusText() {
        const martialStatuses = {
          SINGEL: "Singel",
          SAMBO: "Sambo",
          GIFT: "Gift",
          ANNAT: `Annat, ${this.formData.martialStatusOther}`,
          VILL_INTE_SVARA: "Vill inte svara"
        };
        return martialStatuses[this.formData.martialStatus];
      },
      fruitsPerWeekText() {
        const suffix = this.formData.fruitsPerWeek === 1 ? "g\xE5ng" : "g\xE5nger";
        return this.formData.fruitsPerWeek ? `${this.formData.fruitsPerWeek} ${suffix}` : void 0;
      },
      sweetsPerWeekText() {
        const suffix = this.formData.sweetsPerWeek === 1 ? "g\xE5ng" : "g\xE5nger";
        return this.formData.sweetsPerWeek ? `${this.formData.sweetsPerWeek} ${suffix}` : void 0;
      },
      consumedFruitsText() {
        return this.formData.consumedFruits.length > 0 ? this.renderData.fruits.filter((fruit) => this.formData.consumedFruits.includes(fruit.value)).map((fruit) => fruit.text).join(", ") : void 0;
      },
      consumedSweetsText() {
        return this.formData.consumedSweets.length > 0 ? this.renderData.sweets.filter((sweet) => this.formData.consumedSweets.includes(sweet.value)).map((sweet) => sweet.text).join(", ") : void 0;
      }
    },
    watch: {
      exampleOptions: {
        deep: true,
        handler() {
          localStorage.setItem(EXAMPLE_OPTIONS_KEY, JSON.stringify(this.exampleOptions));
        }
      },
      formData: {
        deep: true,
        handler() {
          localStorage.setItem(FORM_DATA_KEY, JSON.stringify(this.formData));
        }
      }
    },
    created() {
      const exampleOptions = localStorage.getItem(EXAMPLE_OPTIONS_KEY);
      if (exampleOptions) {
        Object.assign(this.exampleOptions, JSON.parse(exampleOptions));
      }
      const formData = localStorage.getItem(FORM_DATA_KEY);
      if (formData) {
        Object.assign(this.formData, JSON.parse(formData));
      }
    },
    methods: {
      laggTillContainer() {
        this.costs.push({
          kostnad: "",
          belopp: void 0,
          beskrivning: ""
        });
      },
      onChangeResetMartialStatusOther() {
        if (this.formData.martialStatus !== "ANNAT") {
          this.formData.martialStatusOther = "";
        }
      },
      onSubmit() {
        alert("Du skickade in formul\xE4ret. Vars\xE5god och ta en \u{1F36A}!");
      },
      onClickClearFormData() {
        this.formData = {
          firstName: "",
          lastName: "",
          age: "",
          martialStatus: "",
          martialStatusOther: "",
          fruitsPerWeek: "",
          sweetsPerWeek: "",
          consumedFruits: [],
          consumedSweets: [],
          consumptionDescription: "",
          hasSigned: false
        };
        window.location.reload();
      }
    }
  });
  var _hoisted_12 = { class: "row" };
  var _hoisted_2 = { class: "col col--md-6" };
  var _hoisted_3 = { class: "col col--md-6" };
  var _hoisted_4 = { class: "row" };
  var _hoisted_5 = { class: "col col--md-6" };
  var _hoisted_6 = { class: "col col--md-6" };
  var _hoisted_7 = { id: "form-error-message" };
  var _hoisted_8 = {
    key: 0,
    class: "sr-only"
  };
  var _hoisted_9 = ["value"];
  var _hoisted_10 = { class: "row" };
  var _hoisted_11 = { class: "col col--md-6" };
  var _hoisted_122 = { class: "row" };
  var _hoisted_13 = { class: "col col--md-6" };
  var _hoisted_14 = { class: "row" };
  var _hoisted_15 = { class: "col col--md-6" };
  var _hoisted_16 = { class: "row" };
  var _hoisted_17 = { class: "col col--md-6" };
  var _hoisted_18 = { class: "row" };
  var _hoisted_19 = { class: "col col--md-6" };
  var _hoisted_20 = { class: "row" };
  var _hoisted_21 = { class: "col col--md-6" };
  var _hoisted_22 = {
    key: 0,
    class: "sr-only"
  };
  var _hoisted_23 = { class: "row" };
  var _hoisted_24 = { class: "col col--md-6" };
  var _hoisted_25 = ["value"];
  var _hoisted_26 = { class: "row" };
  var _hoisted_27 = { class: "col col--md-6" };
  var _hoisted_28 = ["value"];
  var _hoisted_29 = { class: "button-group" };
  function render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_text_field = (0, import_vue8.resolveComponent)("f-text-field");
    const _component_f_checkbox_field = (0, import_vue8.resolveComponent)("f-checkbox-field");
    const _component_f_fieldset = (0, import_vue8.resolveComponent)("f-fieldset");
    const _component_f_radio_field = (0, import_vue8.resolveComponent)("f-radio-field");
    const _component_f_email_text_field = (0, import_vue8.resolveComponent)("f-email-text-field");
    const _component_f_organisationsnummer_text_field = (0, import_vue8.resolveComponent)("f-organisationsnummer-text-field");
    const _component_f_phone_text_field = (0, import_vue8.resolveComponent)("f-phone-text-field");
    const _component_f_select_field = (0, import_vue8.resolveComponent)("f-select-field");
    const _component_f_tooltip = (0, import_vue8.resolveComponent)("f-tooltip");
    const _component_f_static_field = (0, import_vue8.resolveComponent)("f-static-field");
    const _component_f_form_step_button = (0, import_vue8.resolveComponent)("f-form-step-button");
    const _component_f_form_step = (0, import_vue8.resolveComponent)("f-form-step");
    const _component_example_kostnad = (0, import_vue8.resolveComponent)("example-kostnad");
    const _component_f_icon = (0, import_vue8.resolveComponent)("f-icon");
    const _component_f_textarea_field = (0, import_vue8.resolveComponent)("f-textarea-field");
    const _component_f_form = (0, import_vue8.resolveComponent)("f-form");
    const _directive_validation = (0, import_vue8.resolveDirective)("validation");
    return (0, import_vue8.openBlock)(), (0, import_vue8.createElementBlock)("div", null, [
      _cache[78] || (_cache[78] = (0, import_vue8.createElementVNode)(
        "h2",
        null,
        "Exempel-alternativ",
        -1
        /* HOISTED */
      )),
      _cache[79] || (_cache[79] = (0, import_vue8.createElementVNode)(
        "p",
        null,
        "Gl\xF6m inte att ladda om sidan om du \xE4ndrar alternativen.",
        -1
        /* HOISTED */
      )),
      _cache[80] || (_cache[80] = (0, import_vue8.createElementVNode)(
        "h3",
        null,
        "Formul\xE4r-texter:",
        -1
        /* HOISTED */
      )),
      (0, import_vue8.createElementVNode)("div", _hoisted_12, [
        (0, import_vue8.createElementVNode)("div", _hoisted_2, [
          (0, import_vue8.withDirectives)(((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_text_field, {
            modelValue: _ctx.exampleOptions.errorMessageTitleForm,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.exampleOptions.errorMessageTitleForm = $event)
          }, {
            default: (0, import_vue8.withCtx)(() => _cache[29] || (_cache[29] = [
              (0, import_vue8.createTextVNode)(" Titel f\xF6r samlingsfel i Formul\xE4r: ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])), [
            [
              _directive_validation,
              { maxLength: { length: 100 } },
              void 0,
              { maxLength: true }
            ]
          ])
        ]),
        (0, import_vue8.createElementVNode)("div", _hoisted_3, [
          (0, import_vue8.withDirectives)(((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_text_field, {
            modelValue: _ctx.exampleOptions.errorMessageForm,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.exampleOptions.errorMessageForm = $event)
          }, {
            default: (0, import_vue8.withCtx)(() => _cache[30] || (_cache[30] = [
              (0, import_vue8.createTextVNode)(" Ledtext f\xF6r samlingsfel i Formul\xE4r: ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])), [
            [
              _directive_validation,
              { maxLength: { length: 100 } },
              void 0,
              { maxLength: true }
            ]
          ])
        ])
      ]),
      (0, import_vue8.createElementVNode)("div", _hoisted_4, [
        (0, import_vue8.createElementVNode)("div", _hoisted_5, [
          (0, import_vue8.withDirectives)(((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_text_field, {
            modelValue: _ctx.exampleOptions.errorMessageFormStep,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.exampleOptions.errorMessageFormStep = $event)
          }, {
            default: (0, import_vue8.withCtx)(() => _cache[31] || (_cache[31] = [
              (0, import_vue8.createTextVNode)(" Ledtext f\xF6r fellista i Formul\xE4rsteg: ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])), [
            [
              _directive_validation,
              { maxLength: { length: 100 } },
              void 0,
              { maxLength: true }
            ]
          ])
        ]),
        (0, import_vue8.createElementVNode)("div", _hoisted_6, [
          (0, import_vue8.withDirectives)(((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_text_field, {
            modelValue: _ctx.exampleOptions.dataMissing,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.exampleOptions.dataMissing = $event)
          }, {
            default: (0, import_vue8.withCtx)(() => _cache[32] || (_cache[32] = [
              (0, import_vue8.createTextVNode)(" Text f\xF6r n\xE4r uppgifter/data saknas: ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])), [
            [
              _directive_validation,
              { maxLength: { length: 100 } },
              void 0,
              { maxLength: true }
            ]
          ])
        ])
      ]),
      _cache[81] || (_cache[81] = (0, import_vue8.createElementVNode)(
        "h3",
        null,
        "Formul\xE4r-alternativ:",
        -1
        /* HOISTED */
      )),
      (0, import_vue8.createVNode)(_component_f_fieldset, { name: "form-options-checkbox-group" }, {
        label: (0, import_vue8.withCtx)(() => _cache[33] || (_cache[33] = [
          (0, import_vue8.createTextVNode)(" Felmeddelandevisning ")
        ])),
        default: (0, import_vue8.withCtx)(() => [
          (0, import_vue8.createVNode)(_component_f_checkbox_field, {
            modelValue: _ctx.exampleOptions.displayError,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.exampleOptions.displayError = $event),
            value: true
          }, {
            default: (0, import_vue8.withCtx)(() => _cache[34] || (_cache[34] = [
              (0, import_vue8.createTextVNode)(" Visa samlingsfel ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      (0, import_vue8.createVNode)(_component_f_fieldset, {
        name: "form-error-scroll-radio-group",
        horizontal: ""
      }, {
        label: (0, import_vue8.withCtx)(() => _cache[35] || (_cache[35] = [
          (0, import_vue8.createTextVNode)(" Fokusscroll vid valideringsfel: ")
        ])),
        default: (0, import_vue8.withCtx)(() => [
          (0, import_vue8.createVNode)(_component_f_radio_field, {
            modelValue: _ctx.exampleOptions.errorScroll,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.exampleOptions.errorScroll = $event),
            value: "center"
          }, {
            default: (0, import_vue8.withCtx)(() => _cache[36] || (_cache[36] = [
              (0, import_vue8.createTextVNode)(" Center ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          (0, import_vue8.createVNode)(_component_f_radio_field, {
            modelValue: _ctx.exampleOptions.errorScroll,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.exampleOptions.errorScroll = $event),
            value: "top"
          }, {
            default: (0, import_vue8.withCtx)(() => _cache[37] || (_cache[37] = [
              (0, import_vue8.createTextVNode)(" Top ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      (0, import_vue8.createVNode)(_component_f_fieldset, {
        name: "form-number-of-steps-radio-group",
        horizontal: ""
      }, {
        label: (0, import_vue8.withCtx)(() => _cache[38] || (_cache[38] = [
          (0, import_vue8.createTextVNode)(" Antal steg i exempel: ")
        ])),
        default: (0, import_vue8.withCtx)(() => [
          (0, import_vue8.createVNode)(_component_f_radio_field, {
            modelValue: _ctx.exampleOptions.numberOfSteps,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.exampleOptions.numberOfSteps = $event),
            value: 1
          }, {
            default: (0, import_vue8.withCtx)(() => _cache[39] || (_cache[39] = [
              (0, import_vue8.createTextVNode)(" 1 ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          (0, import_vue8.createVNode)(_component_f_radio_field, {
            modelValue: _ctx.exampleOptions.numberOfSteps,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.exampleOptions.numberOfSteps = $event),
            value: 2
          }, {
            default: (0, import_vue8.withCtx)(() => _cache[40] || (_cache[40] = [
              (0, import_vue8.createTextVNode)(" 2 ")
            ])),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      _cache[82] || (_cache[82] = (0, import_vue8.createElementVNode)(
        "hr",
        null,
        null,
        -1
        /* HOISTED */
      )),
      _cache[83] || (_cache[83] = (0, import_vue8.createElementVNode)(
        "h2",
        null,
        "\u{1F370} Frukt och s\xF6tsaksbidraget",
        -1
        /* HOISTED */
      )),
      (0, import_vue8.createVNode)(_component_f_form, {
        id: "fruits-and-sweets-form",
        "display-error": _ctx.exampleOptions.displayError,
        "error-scroll": _ctx.exampleOptions.errorScroll,
        onSubmit: _ctx.onSubmit
      }, {
        "error-message": (0, import_vue8.withCtx)(({ slotClass }) => [
          (0, import_vue8.createElementVNode)(
            "h2",
            {
              class: (0, import_vue8.normalizeClass)(slotClass)
            },
            (0, import_vue8.toDisplayString)(_ctx.exampleOptions.errorMessageTitleForm),
            3
            /* TEXT, CLASS */
          ),
          (0, import_vue8.createElementVNode)(
            "p",
            _hoisted_7,
            (0, import_vue8.toDisplayString)(_ctx.exampleOptions.errorMessageForm),
            1
            /* TEXT */
          )
        ]),
        default: (0, import_vue8.withCtx)(() => [
          _ctx.exampleOptions.numberOfSteps > 0 ? ((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(
            _component_f_form_step,
            {
              key: 0,
              id: "information-form-step"
            },
            (0, import_vue8.createSlots)({
              header: (0, import_vue8.withCtx)(({ slotClass, isValid }) => [
                (0, import_vue8.createElementVNode)(
                  "h2",
                  {
                    class: (0, import_vue8.normalizeClass)(slotClass)
                  },
                  "1. Uppgifter",
                  2
                  /* CLASS */
                ),
                isValid ? ((0, import_vue8.openBlock)(), (0, import_vue8.createElementBlock)("span", _hoisted_8, " Steget \xE4r korrekt ifyllt. ")) : (0, import_vue8.createCommentVNode)("v-if", true)
              ]),
              default: (0, import_vue8.withCtx)(({ toggleIsOpen, isOpen, isAnyFieldTouched }) => [
                _cache[62] || (_cache[62] = (0, import_vue8.createElementVNode)(
                  "p",
                  null,
                  " H\xE4r fyller du i dina uppgifter som kommer anv\xE4ndas som hj\xE4lp inf\xF6r det slutgiltiga beslutet. Uppgifterna h\xE4r \xE4r generella och anv\xE4nds f\xF6r att f\xE5 en uppfattning av dig som s\xF6kande. ",
                  -1
                  /* HOISTED */
                )),
                (0, import_vue8.withDirectives)((0, import_vue8.createElementVNode)(
                  "div",
                  null,
                  [
                    (0, import_vue8.withDirectives)(((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_text_field, {
                      modelValue: _ctx.formData.firstName,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.formData.firstName = $event)
                    }, {
                      default: (0, import_vue8.withCtx)(() => _cache[41] || (_cache[41] = [
                        (0, import_vue8.createTextVNode)(" F\xF6rnamn ")
                      ])),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])), [
                      [
                        _directive_validation,
                        {
                          minLength: { length: 1 },
                          maxLength: { length: 40 }
                        },
                        void 0,
                        {
                          required: true,
                          minLength: true,
                          maxLength: true
                        }
                      ]
                    ]),
                    (0, import_vue8.withDirectives)(((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_text_field, {
                      modelValue: _ctx.formData.lastName,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.formData.lastName = $event)
                    }, {
                      default: (0, import_vue8.withCtx)(() => _cache[42] || (_cache[42] = [
                        (0, import_vue8.createTextVNode)(" Efternamn ")
                      ])),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])), [
                      [
                        _directive_validation,
                        {
                          minLength: { length: 1 },
                          maxLength: { length: 100 }
                        },
                        void 0,
                        {
                          required: true,
                          minLength: true,
                          maxLength: true
                        }
                      ]
                    ]),
                    (0, import_vue8.withDirectives)((0, import_vue8.createVNode)(_component_f_email_text_field, {
                      modelValue: _ctx.formData.email,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => _ctx.formData.email = $event)
                    }, null, 8, ["modelValue"]), [
                      [
                        _directive_validation,
                        void 0,
                        void 0,
                        { required: true }
                      ]
                    ]),
                    (0, import_vue8.withDirectives)((0, import_vue8.createVNode)(_component_f_organisationsnummer_text_field, {
                      modelValue: _ctx.formData.orgnummer,
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => _ctx.formData.orgnummer = $event)
                    }, null, 8, ["modelValue"]), [
                      [
                        _directive_validation,
                        void 0,
                        void 0,
                        { required: true }
                      ]
                    ]),
                    (0, import_vue8.withDirectives)((0, import_vue8.createVNode)(_component_f_phone_text_field, {
                      modelValue: _ctx.formData.phone,
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => _ctx.formData.phone = $event)
                    }, null, 8, ["modelValue"]), [
                      [
                        _directive_validation,
                        void 0,
                        void 0,
                        { required: true }
                      ]
                    ]),
                    (0, import_vue8.withDirectives)(((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_select_field, {
                      modelValue: _ctx.formData.age,
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => _ctx.formData.age = $event)
                    }, {
                      label: (0, import_vue8.withCtx)(() => _cache[43] || (_cache[43] = [
                        (0, import_vue8.createTextVNode)(" \xC5lder ")
                      ])),
                      default: (0, import_vue8.withCtx)(() => [
                        _cache[44] || (_cache[44] = (0, import_vue8.createElementVNode)(
                          "option",
                          {
                            disabled: "",
                            hidden: "",
                            value: ""
                          },
                          "V\xE4lj \xE5lder...",
                          -1
                          /* HOISTED */
                        )),
                        ((0, import_vue8.openBlock)(), (0, import_vue8.createElementBlock)(
                          import_vue8.Fragment,
                          null,
                          (0, import_vue8.renderList)(200, (age) => {
                            return (0, import_vue8.createElementVNode)("option", {
                              key: age,
                              value: age
                            }, (0, import_vue8.toDisplayString)(age), 9, _hoisted_9);
                          }),
                          64
                          /* STABLE_FRAGMENT */
                        ))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])), [
                      [
                        _directive_validation,
                        void 0,
                        void 0,
                        { required: true }
                      ]
                    ]),
                    (0, import_vue8.withDirectives)(((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_fieldset, { name: "martial-status-radio-group" }, {
                      label: (0, import_vue8.withCtx)(() => _cache[45] || (_cache[45] = [
                        (0, import_vue8.createTextVNode)(" Civiltillst\xE5nd ")
                      ])),
                      tooltip: (0, import_vue8.withCtx)(() => [
                        (0, import_vue8.createVNode)(_component_f_tooltip, { "screen-reader-text": "L\xE4s mer om civiltillst\xE5nd" }, {
                          header: (0, import_vue8.withCtx)(() => _cache[46] || (_cache[46] = [
                            (0, import_vue8.createTextVNode)(" Civiltillst\xE5nd ")
                          ])),
                          body: (0, import_vue8.withCtx)(() => _cache[47] || (_cache[47] = [
                            (0, import_vue8.createTextVNode)(" Avser vilket registrerat civiltillst\xE5nd som finns i Skatteverkets uppgifter. ")
                          ])),
                          _: 1
                          /* STABLE */
                        })
                      ]),
                      default: (0, import_vue8.withCtx)(({ indentClass }) => [
                        (0, import_vue8.createVNode)(_component_f_radio_field, {
                          modelValue: _ctx.formData.martialStatus,
                          "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => _ctx.formData.martialStatus = $event),
                          value: "SINGEL"
                        }, {
                          default: (0, import_vue8.withCtx)(() => _cache[48] || (_cache[48] = [
                            (0, import_vue8.createTextVNode)(" Singel ")
                          ])),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue"]),
                        (0, import_vue8.createVNode)(_component_f_radio_field, {
                          modelValue: _ctx.formData.martialStatus,
                          "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => _ctx.formData.martialStatus = $event),
                          value: "SAMBO"
                        }, {
                          default: (0, import_vue8.withCtx)(() => _cache[49] || (_cache[49] = [
                            (0, import_vue8.createTextVNode)(" Sambo ")
                          ])),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue"]),
                        (0, import_vue8.createVNode)(_component_f_radio_field, {
                          modelValue: _ctx.formData.martialStatus,
                          "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => _ctx.formData.martialStatus = $event),
                          value: "GIFT"
                        }, {
                          default: (0, import_vue8.withCtx)(() => _cache[50] || (_cache[50] = [
                            (0, import_vue8.createTextVNode)(" Gift ")
                          ])),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue"]),
                        (0, import_vue8.createVNode)(_component_f_radio_field, {
                          modelValue: _ctx.formData.martialStatus,
                          "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => _ctx.formData.martialStatus = $event),
                          value: "ANNAT"
                        }, {
                          default: (0, import_vue8.withCtx)(() => _cache[51] || (_cache[51] = [
                            (0, import_vue8.createTextVNode)(" Annat ")
                          ])),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue"]),
                        _ctx.formData.martialStatus === "ANNAT" ? ((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_fieldset, {
                          key: 0,
                          class: (0, import_vue8.normalizeClass)(indentClass),
                          name: "martial-status-other-radio-group",
                          onChange: _ctx.onChangeResetMartialStatusOther
                        }, {
                          label: (0, import_vue8.withCtx)(() => _cache[52] || (_cache[52] = [])),
                          default: (0, import_vue8.withCtx)(() => [
                            (0, import_vue8.withDirectives)(((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_text_field, {
                              modelValue: _ctx.formData.martialStatusOther,
                              "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => _ctx.formData.martialStatusOther = $event)
                            }, {
                              description: (0, import_vue8.withCtx)(({ descriptionClass }) => [
                                (0, import_vue8.createElementVNode)(
                                  "span",
                                  {
                                    class: (0, import_vue8.normalizeClass)(descriptionClass)
                                  },
                                  ' Fyll i vad "Annat" betyder f\xF6r dig. ',
                                  2
                                  /* CLASS */
                                )
                              ]),
                              default: (0, import_vue8.withCtx)(() => [
                                _cache[53] || (_cache[53] = (0, import_vue8.createTextVNode)(" Annat "))
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["modelValue"])), [
                              [
                                _directive_validation,
                                {
                                  minLength: { length: 1 },
                                  maxLength: { length: 100 },
                                  required: {
                                    enabled: _ctx.formData.martialStatus === "ANNAT"
                                  }
                                },
                                void 0,
                                {
                                  required: true,
                                  minLength: true,
                                  maxLength: true
                                }
                              ]
                            ])
                          ]),
                          _: 2
                          /* DYNAMIC */
                        }, 1032, ["class", "onChange"])) : (0, import_vue8.createCommentVNode)("v-if", true),
                        (0, import_vue8.createVNode)(_component_f_radio_field, {
                          modelValue: _ctx.formData.martialStatus,
                          "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => _ctx.formData.martialStatus = $event),
                          value: "VILL_INTE_SVARA"
                        }, {
                          default: (0, import_vue8.withCtx)(() => _cache[54] || (_cache[54] = [
                            (0, import_vue8.createTextVNode)(" Vill inte svara ")
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
                    ])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [import_vue8.vShow, isOpen]
                ]),
                (0, import_vue8.withDirectives)((0, import_vue8.createElementVNode)(
                  "div",
                  null,
                  [
                    (0, import_vue8.createElementVNode)("div", _hoisted_10, [
                      (0, import_vue8.createElementVNode)("div", _hoisted_11, [
                        (0, import_vue8.createVNode)(_component_f_static_field, null, {
                          label: (0, import_vue8.withCtx)(() => _cache[55] || (_cache[55] = [
                            (0, import_vue8.createTextVNode)(" F\xF6rnamn ")
                          ])),
                          default: (0, import_vue8.withCtx)(() => [
                            (0, import_vue8.createTextVNode)(
                              " " + (0, import_vue8.toDisplayString)(_ctx.formData.firstName || _ctx.exampleOptions.dataMissing),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ])
                    ]),
                    (0, import_vue8.createElementVNode)("div", _hoisted_122, [
                      (0, import_vue8.createElementVNode)("div", _hoisted_13, [
                        (0, import_vue8.createVNode)(_component_f_static_field, null, {
                          label: (0, import_vue8.withCtx)(() => _cache[56] || (_cache[56] = [
                            (0, import_vue8.createTextVNode)(" Efternamn ")
                          ])),
                          default: (0, import_vue8.withCtx)(() => [
                            (0, import_vue8.createTextVNode)(
                              " " + (0, import_vue8.toDisplayString)(_ctx.formData.lastName || _ctx.exampleOptions.dataMissing),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ])
                    ]),
                    (0, import_vue8.createElementVNode)("div", _hoisted_14, [
                      (0, import_vue8.createElementVNode)("div", _hoisted_15, [
                        (0, import_vue8.createVNode)(_component_f_static_field, null, {
                          label: (0, import_vue8.withCtx)(() => _cache[57] || (_cache[57] = [
                            (0, import_vue8.createTextVNode)(" Mejladress ")
                          ])),
                          default: (0, import_vue8.withCtx)(() => [
                            (0, import_vue8.createTextVNode)(
                              " " + (0, import_vue8.toDisplayString)(_ctx.formData.email || _ctx.exampleOptions.dataMissing),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ])
                    ]),
                    (0, import_vue8.createElementVNode)("div", _hoisted_16, [
                      (0, import_vue8.createElementVNode)("div", _hoisted_17, [
                        (0, import_vue8.createVNode)(_component_f_static_field, null, {
                          label: (0, import_vue8.withCtx)(() => _cache[58] || (_cache[58] = [
                            (0, import_vue8.createTextVNode)(" Organisationsnummer ")
                          ])),
                          default: (0, import_vue8.withCtx)(() => [
                            (0, import_vue8.createTextVNode)(
                              " " + (0, import_vue8.toDisplayString)(_ctx.formData.orgnummer || _ctx.exampleOptions.dataMissing),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ])
                    ]),
                    (0, import_vue8.createElementVNode)("div", _hoisted_18, [
                      (0, import_vue8.createElementVNode)("div", _hoisted_19, [
                        (0, import_vue8.createVNode)(_component_f_static_field, null, {
                          label: (0, import_vue8.withCtx)(() => _cache[59] || (_cache[59] = [
                            (0, import_vue8.createTextVNode)(" Telefonnummer ")
                          ])),
                          default: (0, import_vue8.withCtx)(() => [
                            (0, import_vue8.createTextVNode)(
                              " " + (0, import_vue8.toDisplayString)(_ctx.formData.phone || _ctx.exampleOptions.dataMissing),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ])
                    ]),
                    (0, import_vue8.createElementVNode)("div", _hoisted_20, [
                      (0, import_vue8.createElementVNode)("div", _hoisted_21, [
                        (0, import_vue8.createVNode)(_component_f_static_field, null, {
                          label: (0, import_vue8.withCtx)(() => _cache[60] || (_cache[60] = [
                            (0, import_vue8.createTextVNode)(" \xC5lder ")
                          ])),
                          default: (0, import_vue8.withCtx)(() => [
                            (0, import_vue8.createTextVNode)(
                              " " + (0, import_vue8.toDisplayString)(_ctx.formData.age || _ctx.exampleOptions.dataMissing),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        })
                      ])
                    ]),
                    (0, import_vue8.createVNode)(_component_f_static_field, null, {
                      label: (0, import_vue8.withCtx)(() => _cache[61] || (_cache[61] = [
                        (0, import_vue8.createTextVNode)(" Civiltillst\xE5nd ")
                      ])),
                      default: (0, import_vue8.withCtx)(() => [
                        (0, import_vue8.createTextVNode)(
                          " " + (0, import_vue8.toDisplayString)(_ctx.martialStatusText || _ctx.exampleOptions.dataMissing),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [import_vue8.vShow, !isOpen]
                ]),
                (0, import_vue8.createVNode)(_component_f_form_step_button, {
                  "is-open": isOpen,
                  "is-any-field-touched": isAnyFieldTouched,
                  onClick: toggleIsOpen
                }, null, 8, ["is-open", "is-any-field-touched", "onClick"])
              ]),
              _: 2
              /* DYNAMIC */
            }, [
              _ctx.exampleOptions.errorMessageFormStep ? {
                name: "error-message",
                fn: (0, import_vue8.withCtx)(() => [
                  (0, import_vue8.createElementVNode)(
                    "p",
                    null,
                    (0, import_vue8.toDisplayString)(_ctx.exampleOptions.errorMessageFormStep),
                    1
                    /* TEXT */
                  )
                ]),
                key: "0"
              } : void 0
            ]),
            1024
            /* DYNAMIC_SLOTS */
          )) : (0, import_vue8.createCommentVNode)("v-if", true),
          ((0, import_vue8.openBlock)(true), (0, import_vue8.createElementBlock)(
            import_vue8.Fragment,
            null,
            (0, import_vue8.renderList)(_ctx.costs, (cost, index) => {
              return (0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_example_kostnad, {
                key: index,
                "form-step-id": index,
                kostnad: cost
              }, null, 8, ["form-step-id", "kostnad"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          (0, import_vue8.createElementVNode)("button", {
            type: "button",
            class: "button button-group__item button--discrete",
            onClick: _cache[21] || (_cache[21] = (...args) => _ctx.laggTillContainer && _ctx.laggTillContainer(...args))
          }, [
            (0, import_vue8.createVNode)(_component_f_icon, {
              name: "plus",
              class: "button__icon"
            }),
            _cache[63] || (_cache[63] = (0, import_vue8.createTextVNode)(" L\xE4gg till container "))
          ]),
          _ctx.exampleOptions.numberOfSteps > 1 ? ((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(
            _component_f_form_step,
            {
              key: 1,
              id: "consumption-form-step",
              "has-arrow": false,
              "is-last-step": ""
            },
            (0, import_vue8.createSlots)({
              header: (0, import_vue8.withCtx)(({ slotClass, isValid }) => [
                (0, import_vue8.createElementVNode)(
                  "h2",
                  {
                    class: (0, import_vue8.normalizeClass)(slotClass)
                  },
                  (0, import_vue8.toDisplayString)(_ctx.containerTitle),
                  3
                  /* TEXT, CLASS */
                ),
                isValid ? ((0, import_vue8.openBlock)(), (0, import_vue8.createElementBlock)("span", _hoisted_22, " Steget \xE4r korrekt ifyllt. ")) : (0, import_vue8.createCommentVNode)("v-if", true)
              ]),
              default: (0, import_vue8.withCtx)(({ toggleIsOpen, isOpen, isAnyFieldTouched }) => [
                _cache[74] || (_cache[74] = (0, import_vue8.createElementVNode)(
                  "p",
                  null,
                  ' H\xE4r fyller du i och g\xF6r val om vad f\xF6r frukter och s\xF6tsaker du brukar konsumera. Med "brukar" s\xE5 syftar vi p\xE5 vad du konsumerar under vardagar och helger n\xE4r du som vanligt jobbar, studerar eller g\xF6r n\xE5gon annan syssels\xE4ttning p\xE5 mer \xE4n 50 procent. Exkludera vad du konsumerar under ledighet. ',
                  -1
                  /* HOISTED */
                )),
                (0, import_vue8.withDirectives)((0, import_vue8.createElementVNode)(
                  "div",
                  null,
                  [
                    (0, import_vue8.createElementVNode)("div", _hoisted_23, [
                      (0, import_vue8.createElementVNode)("div", _hoisted_24, [
                        (0, import_vue8.withDirectives)(((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_select_field, {
                          modelValue: _ctx.formData.fruitsPerWeek,
                          "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => _ctx.formData.fruitsPerWeek = $event)
                        }, {
                          label: (0, import_vue8.withCtx)(() => _cache[64] || (_cache[64] = [
                            (0, import_vue8.createTextVNode)(" Frukt ")
                          ])),
                          description: (0, import_vue8.withCtx)(({ descriptionClass }) => [
                            (0, import_vue8.createElementVNode)(
                              "span",
                              {
                                class: (0, import_vue8.normalizeClass)(descriptionClass)
                              },
                              " Fyll i antal g\xE5nger du konsumerar frukt under en vecka. ",
                              2
                              /* CLASS */
                            )
                          ]),
                          default: (0, import_vue8.withCtx)(() => [
                            ((0, import_vue8.openBlock)(), (0, import_vue8.createElementBlock)(
                              import_vue8.Fragment,
                              null,
                              (0, import_vue8.renderList)(100, (number) => {
                                return (0, import_vue8.createElementVNode)("option", {
                                  key: number,
                                  value: number
                                }, (0, import_vue8.toDisplayString)(number) + " " + (0, import_vue8.toDisplayString)(number === 1 ? "g\xE5ng" : "g\xE5nger"), 9, _hoisted_25);
                              }),
                              64
                              /* STABLE_FRAGMENT */
                            ))
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue"])), [
                          [
                            _directive_validation,
                            void 0,
                            void 0,
                            { required: true }
                          ]
                        ])
                      ])
                    ]),
                    (0, import_vue8.createElementVNode)("div", _hoisted_26, [
                      (0, import_vue8.createElementVNode)("div", _hoisted_27, [
                        (0, import_vue8.withDirectives)(((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_select_field, {
                          modelValue: _ctx.formData.sweetsPerWeek,
                          "onUpdate:modelValue": _cache[23] || (_cache[23] = ($event) => _ctx.formData.sweetsPerWeek = $event)
                        }, {
                          label: (0, import_vue8.withCtx)(() => _cache[65] || (_cache[65] = [
                            (0, import_vue8.createTextVNode)(" S\xF6tsaker ")
                          ])),
                          description: (0, import_vue8.withCtx)(({ descriptionClass }) => [
                            (0, import_vue8.createElementVNode)(
                              "span",
                              {
                                class: (0, import_vue8.normalizeClass)(descriptionClass)
                              },
                              " Fyll i antal g\xE5nger du konsumerar s\xF6tsaker under en vecka. ",
                              2
                              /* CLASS */
                            )
                          ]),
                          default: (0, import_vue8.withCtx)(() => [
                            ((0, import_vue8.openBlock)(), (0, import_vue8.createElementBlock)(
                              import_vue8.Fragment,
                              null,
                              (0, import_vue8.renderList)(100, (number) => {
                                return (0, import_vue8.createElementVNode)("option", {
                                  key: number,
                                  value: number
                                }, (0, import_vue8.toDisplayString)(number) + " " + (0, import_vue8.toDisplayString)(number === 1 ? "g\xE5ng" : "g\xE5nger"), 9, _hoisted_28);
                              }),
                              64
                              /* STABLE_FRAGMENT */
                            ))
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["modelValue"])), [
                          [
                            _directive_validation,
                            void 0,
                            void 0,
                            { required: true }
                          ]
                        ])
                      ])
                    ]),
                    (0, import_vue8.withDirectives)(((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_fieldset, { name: "consumed-fruits-radio-group" }, {
                      label: (0, import_vue8.withCtx)(() => _cache[66] || (_cache[66] = [
                        (0, import_vue8.createTextVNode)(" Vilka frukter brukar du konsumera? ")
                      ])),
                      default: (0, import_vue8.withCtx)(() => [
                        ((0, import_vue8.openBlock)(true), (0, import_vue8.createElementBlock)(
                          import_vue8.Fragment,
                          null,
                          (0, import_vue8.renderList)(_ctx.renderData.fruits, (fruit) => {
                            return (0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_checkbox_field, {
                              key: fruit.value,
                              modelValue: _ctx.formData.consumedFruits,
                              "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => _ctx.formData.consumedFruits = $event),
                              value: fruit.value
                            }, {
                              default: (0, import_vue8.withCtx)(() => [
                                (0, import_vue8.createTextVNode)(
                                  (0, import_vue8.toDisplayString)(fruit.text),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["modelValue", "value"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
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
                    (0, import_vue8.withDirectives)(((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_fieldset, { name: "consumed-sweets-radio-group" }, {
                      label: (0, import_vue8.withCtx)(() => _cache[67] || (_cache[67] = [
                        (0, import_vue8.createTextVNode)(" Vilka s\xF6tsaker brukar du konsumera? ")
                      ])),
                      default: (0, import_vue8.withCtx)(() => [
                        ((0, import_vue8.openBlock)(true), (0, import_vue8.createElementBlock)(
                          import_vue8.Fragment,
                          null,
                          (0, import_vue8.renderList)(_ctx.renderData.sweets, (sweet) => {
                            return (0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_checkbox_field, {
                              key: sweet.value,
                              modelValue: _ctx.formData.consumedSweets,
                              "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => _ctx.formData.consumedSweets = $event),
                              value: sweet.value
                            }, {
                              default: (0, import_vue8.withCtx)(() => [
                                (0, import_vue8.createTextVNode)(
                                  (0, import_vue8.toDisplayString)(sweet.text),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["modelValue", "value"]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
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
                    (0, import_vue8.createVNode)(_component_f_textarea_field, {
                      modelValue: _ctx.formData.consumptionDescription,
                      "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => _ctx.formData.consumptionDescription = $event),
                      maxlength: 400,
                      "soft-limit": 150
                    }, {
                      description: (0, import_vue8.withCtx)(({ descriptionClass, discreteDescriptionClass }) => [
                        (0, import_vue8.createElementVNode)(
                          "span",
                          {
                            class: (0, import_vue8.normalizeClass)(descriptionClass)
                          },
                          " Fyll i hur du uppfattar din konsumption av frukter och s\xF6tsaker. Det kan till exempel vara hur den f\xF6rgyller din vardag eller hur det st\xE4ller till med problem, f\xF6rhoppningsvis det f\xF6rstn\xE4mnda. ",
                          2
                          /* CLASS */
                        ),
                        (0, import_vue8.createElementVNode)(
                          "span",
                          {
                            class: (0, import_vue8.normalizeClass)(discreteDescriptionClass)
                          },
                          "(Max 400 tecken)",
                          2
                          /* CLASS */
                        )
                      ]),
                      default: (0, import_vue8.withCtx)(() => [
                        _cache[68] || (_cache[68] = (0, import_vue8.createTextVNode)(" Beskrivning av konsumption (frivilligt) "))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [import_vue8.vShow, isOpen]
                ]),
                (0, import_vue8.withDirectives)((0, import_vue8.createElementVNode)(
                  "div",
                  null,
                  [
                    (0, import_vue8.createVNode)(_component_f_static_field, null, {
                      label: (0, import_vue8.withCtx)(() => _cache[69] || (_cache[69] = [
                        (0, import_vue8.createTextVNode)(" Frukt konsumption ")
                      ])),
                      default: (0, import_vue8.withCtx)(() => [
                        (0, import_vue8.createTextVNode)(
                          " " + (0, import_vue8.toDisplayString)(_ctx.fruitsPerWeekText || _ctx.exampleOptions.dataMissing),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    (0, import_vue8.createVNode)(_component_f_static_field, null, {
                      label: (0, import_vue8.withCtx)(() => _cache[70] || (_cache[70] = [
                        (0, import_vue8.createTextVNode)(" S\xF6tsak konsumption ")
                      ])),
                      default: (0, import_vue8.withCtx)(() => [
                        (0, import_vue8.createTextVNode)(
                          " " + (0, import_vue8.toDisplayString)(_ctx.sweetsPerWeekText || _ctx.exampleOptions.dataMissing),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    (0, import_vue8.createVNode)(_component_f_static_field, null, {
                      label: (0, import_vue8.withCtx)(() => _cache[71] || (_cache[71] = [
                        (0, import_vue8.createTextVNode)(" Vilka frukter brukar du konsumera? ")
                      ])),
                      default: (0, import_vue8.withCtx)(() => [
                        (0, import_vue8.createTextVNode)(
                          " " + (0, import_vue8.toDisplayString)(_ctx.consumedFruitsText || _ctx.exampleOptions.dataMissing),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    (0, import_vue8.createVNode)(_component_f_static_field, null, {
                      label: (0, import_vue8.withCtx)(() => _cache[72] || (_cache[72] = [
                        (0, import_vue8.createTextVNode)(" Vilka s\xF6tsaker brukar du konsumera? ")
                      ])),
                      default: (0, import_vue8.withCtx)(() => [
                        (0, import_vue8.createTextVNode)(
                          " " + (0, import_vue8.toDisplayString)(_ctx.consumedSweetsText || _ctx.exampleOptions.dataMissing),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    }),
                    (0, import_vue8.createVNode)(_component_f_static_field, null, {
                      label: (0, import_vue8.withCtx)(() => _cache[73] || (_cache[73] = [
                        (0, import_vue8.createTextVNode)(" Beskrivning av komsuption ")
                      ])),
                      default: (0, import_vue8.withCtx)(() => [
                        (0, import_vue8.createTextVNode)(
                          " " + (0, import_vue8.toDisplayString)(_ctx.formData.consumptionDescription || _ctx.exampleOptions.dataMissing),
                          1
                          /* TEXT */
                        )
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ],
                  512
                  /* NEED_PATCH */
                ), [
                  [import_vue8.vShow, !isOpen]
                ]),
                (0, import_vue8.createVNode)(_component_f_form_step_button, {
                  "is-open": isOpen,
                  "is-any-field-touched": isAnyFieldTouched,
                  "additional-screenreader-text": "steg f\xF6r konsumption",
                  onClick: toggleIsOpen
                }, null, 8, ["is-open", "is-any-field-touched", "onClick"])
              ]),
              _: 2
              /* DYNAMIC */
            }, [
              _ctx.exampleOptions.errorMessageFormStep ? {
                name: "error-message",
                fn: (0, import_vue8.withCtx)(() => [
                  (0, import_vue8.createElementVNode)(
                    "p",
                    null,
                    (0, import_vue8.toDisplayString)(_ctx.exampleOptions.errorMessageFormStep),
                    1
                    /* TEXT */
                  )
                ]),
                key: "0"
              } : void 0
            ]),
            1024
            /* DYNAMIC_SLOTS */
          )) : (0, import_vue8.createCommentVNode)("v-if", true),
          (0, import_vue8.withDirectives)(((0, import_vue8.openBlock)(), (0, import_vue8.createBlock)(_component_f_fieldset, { name: "signing-checkbox-group" }, {
            label: (0, import_vue8.withCtx)(() => _cache[75] || (_cache[75] = [
              (0, import_vue8.createElementVNode)(
                "h3",
                null,
                "Underskrift",
                -1
                /* HOISTED */
              )
            ])),
            default: (0, import_vue8.withCtx)(() => [
              (0, import_vue8.createVNode)(_component_f_checkbox_field, {
                modelValue: _ctx.formData.hasSigned,
                "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => _ctx.formData.hasSigned = $event),
                value: true
              }, {
                default: (0, import_vue8.withCtx)(() => _cache[76] || (_cache[76] = [
                  (0, import_vue8.createTextVNode)(" Jag bekr\xE4ftar p\xE5 heder och samvete att alla uppgifter jag l\xE4mnat st\xE4mmer och \xE4r korrekt ifyllda. ")
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
          (0, import_vue8.createElementVNode)("div", _hoisted_29, [
            _cache[77] || (_cache[77] = (0, import_vue8.createElementVNode)(
              "button",
              {
                class: "button-group__item button button--primary",
                type: "submit"
              },
              " Signera ",
              -1
              /* HOISTED */
            )),
            (0, import_vue8.createElementVNode)("button", {
              class: "button-group__item button button--secondary",
              type: "button",
              onClick: _cache[28] || (_cache[28] = (...args) => _ctx.onClickClearFormData && _ctx.onClickClearFormData(...args))
            }, " Rensa formul\xE4rdata ")
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["display-error", "error-scroll", "onSubmit"])
    ]);
  }
  exampleComponent.render = render2;
  setup({
    rootComponent: exampleComponent,
    selector: "#FFormExample"
  });
})();
