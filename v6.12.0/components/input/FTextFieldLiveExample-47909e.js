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

// virtual-entry:virtual:packages/vue/src/components/FTextField/examples/FTextFieldLiveExample.vue:FTextFieldLiveExample-47909e.js
import { defineComponent } from "vue";
import {
  FBankAccountNumberTextField,
  FBankgiroTextField,
  FFieldset,
  FCheckboxField,
  FClearingnumberTextField,
  FCurrencyTextField,
  FEmailTextField,
  FIcon,
  FNumericTextField,
  FOrganisationsnummerTextField,
  FPercentTextField,
  FPersonnummerTextField,
  FPhoneTextField,
  FPlusgiroTextField,
  FPostalCodeTextField,
  FSearchTextField,
  FSelectField,
  FTextField,
  FTooltip
} from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";
var exampleComponent = defineComponent({
  name: "FTextFieldLiveExample",
  components: { LiveExample, FSelectField, FFieldset, FCheckboxField },
  data() {
    return {
      type: "f-text-field",
      tooltipVisible: false,
      descriptionVisible: false,
      formatDescriptionVisible: false,
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
        FSelectField,
        FTextField,
        FClearingnumberTextField,
        FBankAccountNumberTextField,
        FBankgiroTextField,
        FEmailTextField,
        FNumericTextField,
        FOrganisationsnummerTextField,
        FPersonnummerTextField,
        FPlusgiroTextField,
        FPostalCodeTextField,
        FPercentTextField,
        FPhoneTextField,
        FCurrencyTextField,
        FTooltip,
        FIcon,
        FSearchTextField
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
      const formatDescription = this.formatDescriptionVisible ? `<span :class="formatDescriptionClass">Formatbeskrivning</span>` : "";
      const template = (
        /* HTML */
        `
                <template #description="{ descriptionClass, formatDescriptionClass }">
                    ${description} ${formatDescription}
                </template>
            `
      );
      return this.descriptionVisible || this.formatDescriptionVisible ? template : "";
    },
    tooltip() {
      const template = (
        /* HTML */
        `
                <template #tooltip>
                    <f-tooltip screen-reader-text="L\xE4s mer h\xE4r" header-tag="h2">
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
          this.formatDescriptionVisible = false;
          this.descriptionVisible = false;
        }
      }
    }
  },
  methods: {}
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template,
    livedata: _ctx.livedata
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.type,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.type = $event)
      }, {
        label: _withCtx(() => _cache[11] || (_cache[11] = [
          _createTextVNode(" Typ ")
        ])),
        default: _withCtx(() => [
          _cache[12] || (_cache[12] = _createElementVNode(
            "option",
            { value: "f-text-field" },
            "Fritext",
            -1
            /* HOISTED */
          )),
          _cache[13] || (_cache[13] = _createElementVNode(
            "option",
            { value: "f-bankgiro-text-field" },
            "Bankgiro",
            -1
            /* HOISTED */
          )),
          _cache[14] || (_cache[14] = _createElementVNode(
            "option",
            { value: "f-clearingnumber-text-field" },
            "Clearingnummer",
            -1
            /* HOISTED */
          )),
          _cache[15] || (_cache[15] = _createElementVNode(
            "option",
            { value: "f-bank-account-number-text-field" },
            "Kontonummer",
            -1
            /* HOISTED */
          )),
          _cache[16] || (_cache[16] = _createElementVNode(
            "option",
            { value: "f-email-text-field" },
            "Mejladress",
            -1
            /* HOISTED */
          )),
          _cache[17] || (_cache[17] = _createElementVNode(
            "option",
            { value: "f-numeric-text-field" },
            "Numeriskt",
            -1
            /* HOISTED */
          )),
          _cache[18] || (_cache[18] = _createElementVNode(
            "option",
            { value: "f-organisationsnummer-text-field" },
            "Organisationsnummer",
            -1
            /* HOISTED */
          )),
          _cache[19] || (_cache[19] = _createElementVNode(
            "option",
            { value: "f-personnummer-text-field" },
            "Personnummer",
            -1
            /* HOISTED */
          )),
          _cache[20] || (_cache[20] = _createElementVNode(
            "option",
            { value: "f-plusgiro-text-field" },
            "Plusgiro",
            -1
            /* HOISTED */
          )),
          _cache[21] || (_cache[21] = _createElementVNode(
            "option",
            { value: "f-postal-code-text-field" },
            "Postnummer",
            -1
            /* HOISTED */
          )),
          _cache[22] || (_cache[22] = _createElementVNode(
            "option",
            { value: "f-percent-text-field" },
            "Procent",
            -1
            /* HOISTED */
          )),
          _cache[23] || (_cache[23] = _createElementVNode(
            "option",
            { value: "f-phone-text-field" },
            "Telefonnummer",
            -1
            /* HOISTED */
          )),
          _cache[24] || (_cache[24] = _createElementVNode(
            "option",
            { value: "f-currency-text-field" },
            "Valuta",
            -1
            /* HOISTED */
          )),
          _cache[25] || (_cache[25] = _createElementVNode(
            "option",
            { value: "f-search-text-field" },
            "S\xF6kf\xE4lt",
            -1
            /* HOISTED */
          ))
        ]),
        _: 1,
        __: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
      }, 8, ["modelValue"]),
      _ctx.isTextfieldOrNumeric ? (_openBlock(), _createBlock(_component_f_select_field, {
        key: 0,
        modelValue: _ctx.maxLength,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.maxLength = $event)
      }, {
        label: _withCtx(() => _cache[26] || (_cache[26] = [
          _createTextVNode(" Max antal tecken ")
        ])),
        default: _withCtx(() => [
          _cache[27] || (_cache[27] = _createElementVNode(
            "option",
            { value: 0 },
            "Ingen gr\xE4ns",
            -1
            /* HOISTED */
          )),
          _cache[28] || (_cache[28] = _createElementVNode(
            "option",
            { value: 20 },
            "Exempel: 20 tecken",
            -1
            /* HOISTED */
          ))
        ]),
        _: 1,
        __: [27, 28]
      }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
      _ctx.isTextfieldOrNumeric ? (_openBlock(), _createBlock(_component_f_checkbox_field, {
        key: 1,
        modelValue: _ctx.isWhitelist,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.isWhitelist = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[29] || (_cache[29] = [
          _createTextVNode(" Begr\xE4nsa till\xE5tna tecken med whitelist-validatorn ")
        ])),
        _: 1,
        __: [29]
      }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
      !_ctx.isClearable ? (_openBlock(), _createBlock(_component_f_checkbox_field, {
        key: 2,
        modelValue: _ctx.isRequired,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.isRequired = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[30] || (_cache[30] = [
          _createTextVNode(" Obligatorisk f\xE4lt ")
        ])),
        _: 1,
        __: [30]
      }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isDisabled,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.isDisabled = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[31] || (_cache[31] = [
          _createTextVNode(" Inaktivt f\xE4lt ")
        ])),
        _: 1,
        __: [31]
      }, 8, ["modelValue"]),
      _ctx.showAppendInner ? (_openBlock(), _createBlock(_component_f_checkbox_field, {
        key: 3,
        modelValue: _ctx.appendInnerVisible,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.appendInnerVisible = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[32] || (_cache[32] = [
          _createTextVNode(" Inneh\xE5ll i inmatningsf\xE4lt ")
        ])),
        _: 1,
        __: [32]
      }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
      _createVNode(_component_f_fieldset, { name: "etikett" }, {
        label: _withCtx(() => _cache[33] || (_cache[33] = [
          _createTextVNode(" Etiketten ")
        ])),
        default: _withCtx(() => [
          _ctx.supportDescription ? (_openBlock(), _createBlock(_component_f_checkbox_field, {
            key: 0,
            modelValue: _ctx.descriptionVisible,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.descriptionVisible = $event),
            value: true
          }, {
            default: _withCtx(() => _cache[34] || (_cache[34] = [
              _createTextVNode(" Hj\xE4lptext ")
            ])),
            _: 1,
            __: [34]
          }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
          _ctx.supportDescription ? (_openBlock(), _createBlock(_component_f_checkbox_field, {
            key: 1,
            modelValue: _ctx.formatDescriptionVisible,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.formatDescriptionVisible = $event),
            value: true
          }, {
            default: _withCtx(() => _cache[35] || (_cache[35] = [
              _createTextVNode(" Formatbeskrivning ")
            ])),
            _: 1,
            __: [35]
          }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
          !_ctx.isEmail ? (_openBlock(), _createBlock(_component_f_checkbox_field, {
            key: 2,
            modelValue: _ctx.tooltipVisible,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.tooltipVisible = $event),
            value: true
          }, {
            default: _withCtx(() => _cache[36] || (_cache[36] = [
              _createTextVNode(" Tooltip ")
            ])),
            _: 1,
            __: [36]
          }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
          _createVNode(_component_f_checkbox_field, {
            modelValue: _ctx.isInline,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => _ctx.isInline = $event),
            value: true
          }, {
            default: _withCtx(() => _cache[37] || (_cache[37] = [
              _createTextVNode(" Inline ")
            ])),
            _: 1,
            __: [37]
          }, 8, ["modelValue"]),
          !_ctx.isTextfieldOrNumeric ? (_openBlock(), _createBlock(_component_f_checkbox_field, {
            key: 3,
            modelValue: _ctx.customLabel,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => _ctx.customLabel = $event),
            value: true
          }, {
            default: _withCtx(() => _cache[38] || (_cache[38] = [
              _createTextVNode(" Annan etikett ")
            ])),
            _: 1,
            __: [38]
          }, 8, ["modelValue"])) : _createCommentVNode("v-if", true)
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
  selector: "#example-47909e"
});
export {
  render
};
