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

// virtual-entry:virtual:packages/vue/src/components/FButton/examples/FButtonLiveExample.vue:FButtonLiveExample-235135.js
import { defineComponent } from "vue";
import { FCheckboxField, FFieldset, FRadioField, FIcon, FSelectField, FButton } from "@fkui/vue";
import { LiveExample, createElement } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";
var exampleComponent = defineComponent({
  name: "ButtonLiveExample",
  components: { LiveExample, FCheckboxField, FFieldset, FRadioField, FSelectField },
  data() {
    return {
      variant: void 0,
      size: void 0,
      disabled: false,
      tertiaryStyle: void 0,
      hasIcon: false,
      iconPlacement: "Left",
      mobileFullWidth: false,
      disabledFullwidth: void 0
    };
  },
  computed: {
    components() {
      return { FIcon, FButton };
    },
    isTertiary() {
      return this.variant === `tertiary`;
    },
    iconPropName() {
      return `icon${this.iconPlacement}`;
    },
    template() {
      const { variant, size, disabled, tertiaryStyle, mobileFullWidth } = this;
      return createElement(
        "f-button",
        {
          variant,
          size,
          tertiaryStyle,
          disabled,
          mobileFullWidth,
          [this.iconPropName]: this.hasIcon ? "success" : void 0
        },
        "Knapptext"
      );
    }
  },
  watch: {
    size: {
      immediate: true,
      handler() {
        if (this.size === "large") {
          this.mobileFullWidth = true;
          this.disabledFullwidth = true;
        } else {
          this.mobileFullWidth = false;
          this.disabledFullwidth = false;
        }
      }
    },
    variant: {
      immediate: true,
      handler() {
        if (this.variant !== "tertiary") {
          this.tertiaryStyle = void 0;
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
        modelValue: _ctx.variant,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.variant = $event)
      }, {
        label: _withCtx(() => [..._cache[8] || (_cache[8] = [
          _createTextVNode(
            " Typ ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[9] || (_cache[9] = _createElementVNode(
            "option",
            { value: void 0 },
            "Prim\xE4r",
            -1
            /* CACHED */
          )),
          _cache[10] || (_cache[10] = _createElementVNode(
            "option",
            { value: "secondary" },
            "Sekund\xE4r",
            -1
            /* CACHED */
          )),
          _cache[11] || (_cache[11] = _createElementVNode(
            "option",
            { value: "tertiary" },
            "Terti\xE4r",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.size,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.size = $event)
      }, {
        label: _withCtx(() => [..._cache[12] || (_cache[12] = [
          _createTextVNode(
            " Storlek ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[13] || (_cache[13] = _createElementVNode(
            "option",
            { value: "small" },
            "Small",
            -1
            /* CACHED */
          )),
          _cache[14] || (_cache[14] = _createElementVNode(
            "option",
            { value: void 0 },
            "Medium (standard)",
            -1
            /* CACHED */
          )),
          _cache[15] || (_cache[15] = _createElementVNode(
            "option",
            { value: "large" },
            "Large",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.hasIcon,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.hasIcon = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[16] || (_cache[16] = [
          _createTextVNode(
            " Visa ikon ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _ctx.hasIcon ? (_openBlock(), _createBlock(_component_f_fieldset, {
        key: 0,
        name: "radio-place-icon",
        horizontal: ""
      }, {
        label: _withCtx(() => [..._cache[17] || (_cache[17] = [
          _createTextVNode(
            " Placering av ikon ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.iconPlacement,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.iconPlacement = $event),
            value: "Left"
          }, {
            default: _withCtx(() => [..._cache[18] || (_cache[18] = [
              _createTextVNode(
                " V\xE4nster ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"]),
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.iconPlacement,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.iconPlacement = $event),
            value: "Right"
          }, {
            default: _withCtx(() => [..._cache[19] || (_cache[19] = [
              _createTextVNode(
                " H\xF6ger ",
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
      })) : _createCommentVNode("v-if", true),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.mobileFullWidth,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => _ctx.mobileFullWidth = $event),
        value: true,
        disabled: _ctx.disabledFullwidth
      }, {
        default: _withCtx(() => [..._cache[20] || (_cache[20] = [
          _createTextVNode(
            " Fullbredd i mobil ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "disabled"]),
      _ctx.isTertiary ? (_openBlock(), _createBlock(_component_f_select_field, {
        key: 1,
        modelValue: _ctx.tertiaryStyle,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.tertiaryStyle = $event)
      }, {
        label: _withCtx(() => [..._cache[21] || (_cache[21] = [
          _createTextVNode(
            " F\xE4rg ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[22] || (_cache[22] = _createElementVNode(
            "option",
            { value: void 0 },
            "Standard",
            -1
            /* CACHED */
          )),
          _cache[23] || (_cache[23] = _createElementVNode(
            "option",
            { value: "black" },
            "Svart",
            -1
            /* CACHED */
          )),
          _cache[24] || (_cache[24] = _createElementVNode(
            "option",
            { value: "inverted" },
            "Inverterad",
            -1
            /* CACHED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.disabled,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.disabled = $event),
        value: true
      }, {
        default: _withCtx(() => [..._cache[25] || (_cache[25] = [
          _createTextVNode(
            " Inaktiv ",
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
  }, 8, ["components", "template"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-235135"
});
export {
  render
};
