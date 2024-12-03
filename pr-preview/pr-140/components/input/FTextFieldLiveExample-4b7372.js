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

  // virtual-entry:./packages/vue/src/components/FTextField/examples/FTextFieldLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FTextFieldLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FSelectField: import_vue4.FSelectField, FFieldset: import_vue4.FFieldset, FCheckboxField: import_vue4.FCheckboxField },
    data() {
      return {
        type: "f-text-field",
        tooltipVisible: false,
        descriptionVisible: false,
        discreteDescriptionVisible: false,
        customLabel: false,
        isInline: false,
        maxLength: 0,
        isRequired: false,
        isWhitelist: false,
        isDisabled: false,
        appendInnerVisible: false
      };
    },
    computed: {
      isTextfieldOrNumeric() {
        return this.type === `f-text-field` || this.type === `f-numeric-text-field`;
      },
      isEmail() {
        return this.type === `f-email-text-field`;
      },
      isClearable() {
        return this.type === `f-search-text-field`;
      },
      isPhoneNumber() {
        return this.type === `f-phone-text-field`;
      },
      livedata() {
        return { model: "" };
      },
      showAppendInner() {
        return !this.isEmail && !this.isClearable && !this.isPhoneNumber;
      },
      supportDescription() {
        return !this.isEmail;
      },
      components() {
        return {
          FSelectField: import_vue4.FSelectField,
          FTextField: import_vue4.FTextField,
          FClearingnumberTextField: import_vue4.FClearingnumberTextField,
          FBankAccountNumberTextField: import_vue4.FBankAccountNumberTextField,
          FEmailTextField: import_vue4.FEmailTextField,
          FNumericTextField: import_vue4.FNumericTextField,
          FOrganisationsnummerTextField: import_vue4.FOrganisationsnummerTextField,
          FPersonnummerTextField: import_vue4.FPersonnummerTextField,
          FPlusgiroTextField: import_vue4.FPlusgiroTextField,
          FPostalCodeTextField: import_vue4.FPostalCodeTextField,
          FPercentTextField: import_vue4.FPercentTextField,
          FPhoneTextField: import_vue4.FPhoneTextField,
          FCurrencyTextField: import_vue4.FCurrencyTextField,
          FTooltip: import_vue4.FTooltip,
          FIcon: import_vue4.FIcon,
          FSearchTextField: import_vue4.FSearchTextField
        };
      },
      validation() {
        let validators = "";
        const settings = [];
        if (this.isRequired) {
          validators += ".required";
        }
        if (this.isWhitelist) {
          validators += ".whitelist";
        }
        if (this.maxLength > 0) {
          validators += ".maxLength";
          settings.push(` maxLength: { length: ${this.maxLength} }`);
        }
        if (settings.length > 0) {
          return validators ? `v-validation${validators}="{${settings.join(", ")}}"` : "";
        } else {
          return validators ? `v-validation${validators}` : "";
        }
      },
      description() {
        const description = this.descriptionVisible ? `<span :class="descriptionClass">Hj\xE4lptext</span>` : "";
        const discreteDescription = this.discreteDescriptionVisible ? `<span :class="discreteDescriptionClass">Formatbeskrivning</span>` : "";
        const template = (
          /* HTML */
          `
                <template #description="{ descriptionClass, discreteDescriptionClass }">
                    ${description} ${discreteDescription}
                </template>
            `
        );
        return this.descriptionVisible || this.discreteDescriptionVisible ? template : "";
      },
      tooltip() {
        const template = (
          /* HTML */
          `
                <template #tooltip>
                    <f-tooltip screen-reader-text="L\xE4s mer h\xE4r">
                        <template #header> Header </template>
                        <template #body> Body </template>
                    </f-tooltip>
                </template>
            `
        );
        return this.tooltipVisible ? template : "";
      },
      appendInner() {
        const template = (
          /* HTML */
          `
                <template #append-inner>
                    <span><f-icon name="cross" library="f"></f-icon></span>
                </template>
            `
        );
        return this.appendInnerVisible ? template : "";
      },
      label() {
        const template = (
          /* HTML */
          ` <template #default> Etikett </template> `
        );
        return this.customLabel || this.isTextfieldOrNumeric ? template : "";
      },
      inline() {
        return this.isInline ? "inline" : "";
      },
      disabled() {
        return this.isDisabled ? "disabled" : "";
      },
      template() {
        return (
          /* HTML */
          `
            <${this.type} v-model="model" ${this.validation} ${this.inline} ${this.disabled}>
            ${this.label}
            ${this.tooltip} ${this.description}
            ${this.appendInner}
            </${this.type}>
            `
        );
      }
    },
    watch: {
      type: {
        immediate: false,
        handler() {
          this.isRequired = false;
          if (!this.isTextfieldOrNumeric) {
            this.maxLength = 0;
            this.isWhitelist = false;
            this.customLabel = false;
          }
          if (this.isEmail) {
            this.tooltipVisible = false;
            this.discreteDescriptionVisible = false;
            this.descriptionVisible = false;
          }
        }
      }
    },
    methods: {}
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_select_field = (0, import_vue5.resolveComponent)("f-select-field");
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template,
      livedata: _ctx.livedata
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_select_field, {
          modelValue: _ctx.type,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.type = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[11] || (_cache[11] = [
            (0, import_vue5.createTextVNode)(" Typ ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            _cache[12] || (_cache[12] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "f-text-field" },
              "Fritext",
              -1
              /* HOISTED */
            )),
            _cache[13] || (_cache[13] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "f-clearingnumber-text-field" },
              "Clearingnummer",
              -1
              /* HOISTED */
            )),
            _cache[14] || (_cache[14] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "f-bank-account-number-text-field" },
              "Kontonummer",
              -1
              /* HOISTED */
            )),
            _cache[15] || (_cache[15] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "f-email-text-field" },
              "Mejladress",
              -1
              /* HOISTED */
            )),
            _cache[16] || (_cache[16] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "f-numeric-text-field" },
              "Numeriskt",
              -1
              /* HOISTED */
            )),
            _cache[17] || (_cache[17] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "f-organisationsnummer-text-field" },
              "Organisationsnummer",
              -1
              /* HOISTED */
            )),
            _cache[18] || (_cache[18] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "f-personnummer-text-field" },
              "Personnummer",
              -1
              /* HOISTED */
            )),
            _cache[19] || (_cache[19] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "f-plusgiro-text-field" },
              "Plusgiro",
              -1
              /* HOISTED */
            )),
            _cache[20] || (_cache[20] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "f-postal-code-text-field" },
              "Postnummer",
              -1
              /* HOISTED */
            )),
            _cache[21] || (_cache[21] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "f-percent-text-field" },
              "Procent",
              -1
              /* HOISTED */
            )),
            _cache[22] || (_cache[22] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "f-phone-text-field" },
              "Telefonnummer",
              -1
              /* HOISTED */
            )),
            _cache[23] || (_cache[23] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "f-currency-text-field" },
              "Valuta",
              -1
              /* HOISTED */
            )),
            _cache[24] || (_cache[24] = (0, import_vue5.createElementVNode)(
              "option",
              { value: "f-search-text-field" },
              "S\xF6kf\xE4lt",
              -1
              /* HOISTED */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _ctx.isTextfieldOrNumeric ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_select_field, {
          key: 0,
          modelValue: _ctx.maxLength,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.maxLength = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => _cache[25] || (_cache[25] = [
            (0, import_vue5.createTextVNode)(" Max antal tecken ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            _cache[26] || (_cache[26] = (0, import_vue5.createElementVNode)(
              "option",
              { value: 0 },
              "Ingen gr\xE4ns",
              -1
              /* HOISTED */
            )),
            _cache[27] || (_cache[27] = (0, import_vue5.createElementVNode)(
              "option",
              { value: 20 },
              "Exempel: 20 tecken",
              -1
              /* HOISTED */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])) : (0, import_vue5.createCommentVNode)("v-if", true),
        _ctx.isTextfieldOrNumeric ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_checkbox_field, {
          key: 1,
          modelValue: _ctx.isWhitelist,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.isWhitelist = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[28] || (_cache[28] = [
            (0, import_vue5.createTextVNode)(" Begr\xE4nsa till\xE5tna tecken med whitelist-validatorn ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])) : (0, import_vue5.createCommentVNode)("v-if", true),
        !_ctx.isClearable ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_checkbox_field, {
          key: 2,
          modelValue: _ctx.isRequired,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.isRequired = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[29] || (_cache[29] = [
            (0, import_vue5.createTextVNode)(" Obligatorisk f\xE4lt ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])) : (0, import_vue5.createCommentVNode)("v-if", true),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isDisabled,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.isDisabled = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[30] || (_cache[30] = [
            (0, import_vue5.createTextVNode)(" Inaktivt f\xE4lt ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        _ctx.showAppendInner ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_checkbox_field, {
          key: 3,
          modelValue: _ctx.appendInnerVisible,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.appendInnerVisible = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => _cache[31] || (_cache[31] = [
            (0, import_vue5.createTextVNode)(" Inneh\xE5ll i inmatningsf\xE4lt ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])) : (0, import_vue5.createCommentVNode)("v-if", true),
        (0, import_vue5.createVNode)(_component_f_fieldset, { name: "etikett" }, {
          label: (0, import_vue5.withCtx)(() => _cache[32] || (_cache[32] = [
            (0, import_vue5.createTextVNode)(" Etiketten ")
          ])),
          default: (0, import_vue5.withCtx)(() => [
            _ctx.supportDescription ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_checkbox_field, {
              key: 0,
              modelValue: _ctx.descriptionVisible,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.descriptionVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[33] || (_cache[33] = [
                (0, import_vue5.createTextVNode)(" Hj\xE4lptext ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])) : (0, import_vue5.createCommentVNode)("v-if", true),
            _ctx.supportDescription ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_checkbox_field, {
              key: 1,
              modelValue: _ctx.discreteDescriptionVisible,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.discreteDescriptionVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[34] || (_cache[34] = [
                (0, import_vue5.createTextVNode)(" Formatbeskrivning ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])) : (0, import_vue5.createCommentVNode)("v-if", true),
            !_ctx.isEmail ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_checkbox_field, {
              key: 2,
              modelValue: _ctx.tooltipVisible,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.tooltipVisible = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[35] || (_cache[35] = [
                (0, import_vue5.createTextVNode)(" Tooltip ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])) : (0, import_vue5.createCommentVNode)("v-if", true),
            (0, import_vue5.createVNode)(_component_f_checkbox_field, {
              modelValue: _ctx.isInline,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.isInline = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[36] || (_cache[36] = [
                (0, import_vue5.createTextVNode)(" Inline ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            !_ctx.isTextfieldOrNumeric ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_checkbox_field, {
              key: 3,
              modelValue: _ctx.customLabel,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.customLabel = $event),
              value: true
            }, {
              default: (0, import_vue5.withCtx)(() => _cache[37] || (_cache[37] = [
                (0, import_vue5.createTextVNode)(" Annan etikett ")
              ])),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])) : (0, import_vue5.createCommentVNode)("v-if", true)
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }, 8, ["components", "template", "livedata"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FTextFieldLiveExample"
  });
})();
