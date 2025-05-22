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

// virtual-entry:virtual:packages/vue/src/design-component-tests/Button/examples/ButtonLiveExample.vue:ButtonLiveExample-937421.js
import { defineComponent } from "vue";
import { FCheckboxField, FFieldset, FRadioField, FIcon, FSelectField } from "@fkui/vue";
import { LiveExample } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";
var exampleComponent = defineComponent({
  name: "ButtonLiveExample",
  components: { LiveExample, FCheckboxField, FFieldset, FRadioField, FSelectField },
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
      return { FIcon };
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_f_checkbox_field = _resolveComponent("f-checkbox-field");
  const _component_f_radio_field = _resolveComponent("f-radio-field");
  const _component_f_fieldset = _resolveComponent("f-fieldset");
  const _component_live_example = _resolveComponent("live-example");
  return _openBlock(), _createBlock(_component_live_example, {
    components: _ctx.components,
    template: _ctx.template
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.buttonType,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.buttonType = $event)
      }, {
        label: _withCtx(() => _cache[8] || (_cache[8] = [
          _createTextVNode(" Typ ")
        ])),
        default: _withCtx(() => [
          _cache[9] || (_cache[9] = _createElementVNode(
            "option",
            { value: "primary" },
            "Prim\xE4r",
            -1
            /* HOISTED */
          )),
          _cache[10] || (_cache[10] = _createElementVNode(
            "option",
            { value: "secondary" },
            "Sekund\xE4r",
            -1
            /* HOISTED */
          )),
          _cache[11] || (_cache[11] = _createElementVNode(
            "option",
            { value: "tertiary" },
            "Terti\xE4r",
            -1
            /* HOISTED */
          ))
        ]),
        _: 1,
        __: [9, 10, 11]
      }, 8, ["modelValue"]),
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.buttonSize,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.buttonSize = $event)
      }, {
        label: _withCtx(() => _cache[12] || (_cache[12] = [
          _createTextVNode(" Storlek ")
        ])),
        default: _withCtx(() => [
          _cache[13] || (_cache[13] = _createElementVNode(
            "option",
            { value: "small" },
            "Small",
            -1
            /* HOISTED */
          )),
          _cache[14] || (_cache[14] = _createElementVNode(
            "option",
            { value: "medium" },
            "Medium (standard)",
            -1
            /* HOISTED */
          )),
          _cache[15] || (_cache[15] = _createElementVNode(
            "option",
            { value: "large" },
            "Large",
            -1
            /* HOISTED */
          ))
        ]),
        _: 1,
        __: [13, 14, 15]
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.hasIcon,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.hasIcon = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[16] || (_cache[16] = [
          _createTextVNode(" Visa ikon ")
        ])),
        _: 1,
        __: [16]
      }, 8, ["modelValue"]),
      _ctx.hasIcon ? (_openBlock(), _createBlock(_component_f_fieldset, {
        key: 0,
        name: "radio-place-icon",
        horizontal: ""
      }, {
        label: _withCtx(() => _cache[17] || (_cache[17] = [
          _createTextVNode(" Placering av ikon ")
        ])),
        default: _withCtx(() => [
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.iconPlacement,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.iconPlacement = $event),
            value: "left"
          }, {
            default: _withCtx(() => _cache[18] || (_cache[18] = [
              _createTextVNode(" V\xE4nster ")
            ])),
            _: 1,
            __: [18]
          }, 8, ["modelValue"]),
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.iconPlacement,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.iconPlacement = $event),
            value: "right"
          }, {
            default: _withCtx(() => _cache[19] || (_cache[19] = [
              _createTextVNode(" H\xF6ger ")
            ])),
            _: 1,
            __: [19]
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      })) : _createCommentVNode("v-if", true),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isFullwidth,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.isFullwidth = $event),
        value: true,
        disabled: _ctx.disabledFullwidth
      }, {
        default: _withCtx(() => _cache[20] || (_cache[20] = [
          _createTextVNode(" Fullbredd i mobil ")
        ])),
        _: 1,
        __: [20]
      }, 8, ["modelValue", "disabled"]),
      _ctx.isTertiary ? (_openBlock(), _createBlock(_component_f_select_field, {
        key: 1,
        modelValue: _ctx.tertiaryColor,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.tertiaryColor = $event)
      }, {
        label: _withCtx(() => _cache[21] || (_cache[21] = [
          _createTextVNode(" F\xE4rg ")
        ])),
        default: _withCtx(() => [
          _cache[22] || (_cache[22] = _createElementVNode(
            "option",
            { value: "standard" },
            "Standard",
            -1
            /* HOISTED */
          )),
          _cache[23] || (_cache[23] = _createElementVNode(
            "option",
            { value: "black" },
            "Svart",
            -1
            /* HOISTED */
          )),
          _cache[24] || (_cache[24] = _createElementVNode(
            "option",
            { value: "inverted" },
            "Inverterad",
            -1
            /* HOISTED */
          ))
        ]),
        _: 1,
        __: [22, 23, 24]
      }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isDisabled,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.isDisabled = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[25] || (_cache[25] = [
          _createTextVNode(" Inaktiv ")
        ])),
        _: 1,
        __: [25]
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-937421"
});
export {
  render
};
