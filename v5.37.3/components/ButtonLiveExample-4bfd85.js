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

  // virtual-entry:./packages/vue/src/design-component-tests/Button/examples/ButtonLiveExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_docs_live_example = __require("@forsakringskassan/docs-live-example");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "ButtonLiveExample",
    components: { LiveExample: import_docs_live_example.LiveExample, FCheckboxField: import_vue4.FCheckboxField, FFieldset: import_vue4.FFieldset, FRadioField: import_vue4.FRadioField, FSelectField: import_vue4.FSelectField },
    data() {
      return {
        buttonType: "primary",
        buttonSize: "medium",
        hasIcon: false,
        isFullwidth: false,
        disabledFullwidth: false,
        iconPlacement: "left",
        isDisabled: false,
        tertiaryColor: "standard"
      };
    },
    computed: {
      components() {
        return { FIcon: import_vue4.FIcon };
      },
      isTertiary() {
        return this.buttonType === `tertiary`;
      },
      buttonText() {
        const text = "Knapptext";
        if (this.hasIcon) {
          const icon = (
            /* HTML */
            `<f-icon name="success" class="button__icon"></f-icon>`
          );
          if (this.iconPlacement === "right") {
            return `<span>${text}</span> ${icon}`;
          } else {
            return `${icon} ${text}`;
          }
        } else {
          return text;
        }
      },
      color() {
        if (this.isTertiary && (this.tertiaryColor === "black" || this.tertiaryColor === "inverted")) {
          return `button--tertiary--${this.tertiaryColor}`;
        } else {
          return "";
        }
      },
      underline() {
        if (this.isTertiary && !this.hasIcon) {
          return `button--tertiary--underline`;
        } else {
          return "";
        }
      },
      disabled() {
        return this.isDisabled ? "disabled" : "";
      },
      fullwidth() {
        if (this.isFullwidth && this.buttonSize !== "large") {
          return `button--full-width`;
        } else {
          return "";
        }
      },
      template() {
        return (
          /* HTML */
          `
                <button
                    class="button button--${this.buttonType} button--${this.buttonSize} ${this.fullwidth} ${this.color} ${this.underline}"
                    type="button"
                    ${this.disabled}
                >
                    ${this.buttonText}
                </button>
            `
        );
      }
    },
    watch: {
      buttonSize: {
        immediate: true,
        async handler() {
          if (this.buttonSize === "large") {
            this.isFullwidth = true;
            this.disabledFullwidth = true;
          } else {
            this.isFullwidth = false;
            this.disabledFullwidth = false;
          }
        }
      }
    }
  });
  var _hoisted_1 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "primary" },
    "Prim\xE4r",
    -1
    /* HOISTED */
  );
  var _hoisted_2 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "secondary" },
    "Sekund\xE4r",
    -1
    /* HOISTED */
  );
  var _hoisted_3 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "tertiary" },
    "Terti\xE4r",
    -1
    /* HOISTED */
  );
  var _hoisted_4 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "small" },
    "Small",
    -1
    /* HOISTED */
  );
  var _hoisted_5 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "medium" },
    "Medium (standard)",
    -1
    /* HOISTED */
  );
  var _hoisted_6 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "large" },
    "Large",
    -1
    /* HOISTED */
  );
  var _hoisted_7 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "standard" },
    "Standard",
    -1
    /* HOISTED */
  );
  var _hoisted_8 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "black" },
    "Svart",
    -1
    /* HOISTED */
  );
  var _hoisted_9 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "option",
    { value: "inverted" },
    "Inverterad",
    -1
    /* HOISTED */
  );
  function render(_ctx, _cache) {
    const _component_f_select_field = (0, import_vue5.resolveComponent)("f-select-field");
    const _component_f_checkbox_field = (0, import_vue5.resolveComponent)("f-checkbox-field");
    const _component_f_radio_field = (0, import_vue5.resolveComponent)("f-radio-field");
    const _component_f_fieldset = (0, import_vue5.resolveComponent)("f-fieldset");
    const _component_live_example = (0, import_vue5.resolveComponent)("live-example");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_live_example, {
      components: _ctx.components,
      template: _ctx.template
    }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_select_field, {
          modelValue: _ctx.buttonType,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.buttonType = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Typ ")
          ]),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(),
            _hoisted_1,
            (0, import_vue5.createTextVNode)(),
            _hoisted_2,
            (0, import_vue5.createTextVNode)(),
            _hoisted_3
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createVNode)(_component_f_select_field, {
          modelValue: _ctx.buttonSize,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.buttonSize = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Storlek ")
          ]),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(),
            _hoisted_4,
            (0, import_vue5.createTextVNode)(),
            _hoisted_5,
            (0, import_vue5.createTextVNode)(),
            _hoisted_6
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.hasIcon,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.hasIcon = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Visa ikon ")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        (0, import_vue5.createTextVNode)(),
        _ctx.hasIcon ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_fieldset, {
          key: 0,
          name: "radio-place-icon",
          horizontal: ""
        }, {
          label: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Placering av ikon ")
          ]),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(),
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.iconPlacement,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.iconPlacement = $event),
              value: "left"
            }, {
              default: (0, import_vue5.withCtx)(() => [
                (0, import_vue5.createTextVNode)(" V\xE4nster ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"]),
            (0, import_vue5.createTextVNode)(),
            (0, import_vue5.createVNode)(_component_f_radio_field, {
              modelValue: _ctx.iconPlacement,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.iconPlacement = $event),
              value: "right"
            }, {
              default: (0, import_vue5.withCtx)(() => [
                (0, import_vue5.createTextVNode)(" H\xF6ger ")
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue"])
          ]),
          _: 1
          /* STABLE */
        })) : (0, import_vue5.createCommentVNode)("v-if", true),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isFullwidth,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.isFullwidth = $event),
          value: true,
          disabled: _ctx.disabledFullwidth
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)("\n            Fullbredd i mobil\n        ")
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "disabled"]),
        (0, import_vue5.createTextVNode)(),
        _ctx.isTertiary ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_select_field, {
          key: 1,
          modelValue: _ctx.tertiaryColor,
          "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.tertiaryColor = $event)
        }, {
          label: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" F\xE4rg ")
          ]),
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(),
            _hoisted_7,
            (0, import_vue5.createTextVNode)(),
            _hoisted_8,
            (0, import_vue5.createTextVNode)(),
            _hoisted_9
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"])) : (0, import_vue5.createCommentVNode)("v-if", true),
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createVNode)(_component_f_checkbox_field, {
          modelValue: _ctx.isDisabled,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.isDisabled = $event),
          value: true
        }, {
          default: (0, import_vue5.withCtx)(() => [
            (0, import_vue5.createTextVNode)(" Inaktiv ")
          ]),
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
    selector: "#ButtonLiveExample"
  });
})();
