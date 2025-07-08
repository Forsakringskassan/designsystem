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

// virtual-entry:virtual:packages/vue/src/design-component-tests/Button/examples/ButtonLiveExample2.vue:ButtonLiveExample2-84a6df.js
import { defineComponent } from "vue";
import { FCheckboxField, FFieldset, FRadioField, FIcon, FSelectField, FButton } from "@fkui/vue";
import { LiveExample, createElement } from "@forsakringskassan/docs-live-example";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode } from "vue";
var exampleComponent = defineComponent({
  name: "ButtonLiveExample",
  components: { LiveExample, FCheckboxField, FFieldset, FRadioField, FSelectField },
  data() {
    return {
      type: "primary",
      size: "medium",
      disabled: false,
      tertiaryColor: "standard",
      hasIcon: false,
      iconPlacement: "Left",
      mobileFullWidth: false,
      disabledFullwidth: void 0,
      isAsync: true
    };
  },
  computed: {
    components() {
      return { FIcon, FButton };
    },
    isTertiary() {
      return this.type === `tertiary`;
    },
    buttonText() {
      const text = "Knapptext";
      if (this.hasIcon) {
        const icon = (
          /* HTML */
          `<f-icon name="success" class="button__icon"></f-icon>`
        );
        return `${text} <template #icon${this.iconPlacement}>${icon}</template>`;
      } else {
        return text;
      }
    },
    template() {
      const { type, size, disabled, tertiaryColor, isAsync, mobileFullWidth } = this;
      return createElement(
        "f-button",
        {
          type: type !== "primary" ? type : void 0,
          size: size !== "medium" ? size : void 0,
          tertiaryColor: tertiaryColor !== "standard" ? tertiaryColor : void 0,
          disabled,
          mobileFullWidth,
          "@click": isAsync ? "asyncFunction" : void 0
        },
        this.buttonText
      );
    }
  },
  watch: {
    size: {
      immediate: true,
      async handler() {
        if (this.size === "large") {
          this.mobileFullWidth = true;
          this.disabledFullwidth = true;
        } else {
          this.mobileFullWidth = false;
          this.disabledFullwidth = false;
        }
      }
    }
  },
  methods: {
    mylivemethods() {
      return {
        async asyncFunction() {
          console.log("Hej");
          await new Promise((resolve) => setTimeout(resolve, 5e3));
        }
      };
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
    template: _ctx.template,
    livemethods: { ..._ctx.mylivemethods() }
  }, {
    default: _withCtx(() => [
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.type,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.type = $event)
      }, {
        label: _withCtx(() => _cache[9] || (_cache[9] = [
          _createTextVNode(" Typ ")
        ])),
        default: _withCtx(() => [
          _cache[10] || (_cache[10] = _createElementVNode(
            "option",
            { value: "primary" },
            "Prim\xE4r",
            -1
            /* HOISTED */
          )),
          _cache[11] || (_cache[11] = _createElementVNode(
            "option",
            { value: "secondary" },
            "Sekund\xE4r",
            -1
            /* HOISTED */
          )),
          _cache[12] || (_cache[12] = _createElementVNode(
            "option",
            { value: "tertiary" },
            "Terti\xE4r",
            -1
            /* HOISTED */
          ))
        ]),
        _: 1,
        __: [10, 11, 12]
      }, 8, ["modelValue"]),
      _createVNode(_component_f_select_field, {
        modelValue: _ctx.size,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.size = $event)
      }, {
        label: _withCtx(() => _cache[13] || (_cache[13] = [
          _createTextVNode(" Storlek ")
        ])),
        default: _withCtx(() => [
          _cache[14] || (_cache[14] = _createElementVNode(
            "option",
            { value: "small" },
            "Small",
            -1
            /* HOISTED */
          )),
          _cache[15] || (_cache[15] = _createElementVNode(
            "option",
            { value: "medium" },
            "Medium (standard)",
            -1
            /* HOISTED */
          )),
          _cache[16] || (_cache[16] = _createElementVNode(
            "option",
            { value: "large" },
            "Large",
            -1
            /* HOISTED */
          ))
        ]),
        _: 1,
        __: [14, 15, 16]
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.hasIcon,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.hasIcon = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[17] || (_cache[17] = [
          _createTextVNode(" Visa ikon ")
        ])),
        _: 1,
        __: [17]
      }, 8, ["modelValue"]),
      _ctx.hasIcon ? (_openBlock(), _createBlock(_component_f_fieldset, {
        key: 0,
        name: "radio-place-icon",
        horizontal: ""
      }, {
        label: _withCtx(() => _cache[18] || (_cache[18] = [
          _createTextVNode(" Placering av ikon ")
        ])),
        default: _withCtx(() => [
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.iconPlacement,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => _ctx.iconPlacement = $event),
            value: "Left"
          }, {
            default: _withCtx(() => _cache[19] || (_cache[19] = [
              _createTextVNode(" V\xE4nster ")
            ])),
            _: 1,
            __: [19]
          }, 8, ["modelValue"]),
          _createVNode(_component_f_radio_field, {
            modelValue: _ctx.iconPlacement,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => _ctx.iconPlacement = $event),
            value: "Right"
          }, {
            default: _withCtx(() => _cache[20] || (_cache[20] = [
              _createTextVNode(" H\xF6ger ")
            ])),
            _: 1,
            __: [20]
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
        default: _withCtx(() => _cache[21] || (_cache[21] = [
          _createTextVNode(" Fullbredd i mobil ")
        ])),
        _: 1,
        __: [21]
      }, 8, ["modelValue", "disabled"]),
      _ctx.isTertiary ? (_openBlock(), _createBlock(_component_f_select_field, {
        key: 1,
        modelValue: _ctx.tertiaryColor,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => _ctx.tertiaryColor = $event)
      }, {
        label: _withCtx(() => _cache[22] || (_cache[22] = [
          _createTextVNode(" F\xE4rg ")
        ])),
        default: _withCtx(() => [
          _cache[23] || (_cache[23] = _createElementVNode(
            "option",
            { value: "standard" },
            "Standard",
            -1
            /* HOISTED */
          )),
          _cache[24] || (_cache[24] = _createElementVNode(
            "option",
            { value: "black" },
            "Svart",
            -1
            /* HOISTED */
          )),
          _cache[25] || (_cache[25] = _createElementVNode(
            "option",
            { value: "inverted" },
            "Inverterad",
            -1
            /* HOISTED */
          ))
        ]),
        _: 1,
        __: [23, 24, 25]
      }, 8, ["modelValue"])) : _createCommentVNode("v-if", true),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.disabled,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => _ctx.disabled = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[26] || (_cache[26] = [
          _createTextVNode(" Inaktiv ")
        ])),
        _: 1,
        __: [26]
      }, 8, ["modelValue"]),
      _createVNode(_component_f_checkbox_field, {
        modelValue: _ctx.isAsync,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => _ctx.isAsync = $event),
        value: true
      }, {
        default: _withCtx(() => _cache[27] || (_cache[27] = [
          _createTextVNode(" Asynkron \xE5tg\xE4rd ")
        ])),
        _: 1,
        __: [27]
      }, 8, ["modelValue"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["components", "template", "livemethods"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-84a6df"
});
export {
  render
};
