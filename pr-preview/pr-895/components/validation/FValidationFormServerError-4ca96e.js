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

// virtual-entry:virtual:packages/vue/src/components/FValidationForm/examples/FValidationFormServerError.vue:FValidationFormServerError-4ca96e.js
import { defineComponent } from "vue";
import { ValidationService } from "@fkui/logic";
import {
  FTextField,
  FValidationForm,
  FValidationFormAction,
  getElementFromVueRef
} from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createElementVNode as _createElementVNode } from "vue";
var exampleComponent = defineComponent({
  name: "FValidationFormServerError",
  components: { FTextField, FValidationForm },
  data() {
    return {
      field1: "",
      field2: ""
    };
  },
  methods: {
    onSubmit() {
      alert("Spara");
    },
    onCancel() {
      alert("Avbryt");
    },
    async runServerValidation() {
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      const field1 = getElementFromVueRef(this.$refs.field1);
      ValidationService.setError(field1, "Serverfel");
      return FValidationFormAction.CANCEL;
    }
  }
});
var _hoisted_1 = { class: "button-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_validation_form = _resolveComponent("f-validation-form");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock(_component_f_validation_form, {
    "before-submit": _ctx.runServerValidation,
    onSubmit: _ctx.onSubmit
  }, {
    "error-message": _withCtx(() => [..._cache[3] || (_cache[3] = [
      _createTextVNode(
        " Oj, du har gl\xF6mt fylla i n\xE5got. G\xE5 till: ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [
      _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
        ref: "field1",
        modelValue: _ctx.field1,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.field1 = $event)
      }, {
        default: _withCtx(() => [..._cache[4] || (_cache[4] = [
          _createTextVNode(
            " Ett inmatningsf\xE4lt ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])), [
        [
          _directive_validation,
          { maxLength: { length: 32 } },
          void 0,
          {
            required: true,
            maxLength: true
          }
        ]
      ]),
      _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
        modelValue: _ctx.field2,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.field2 = $event)
      }, {
        default: _withCtx(() => [..._cache[5] || (_cache[5] = [
          _createTextVNode(
            " Ett annat inmatningsf\xE4lt ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"])), [
        [
          _directive_validation,
          { maxLength: { length: 32 } },
          void 0,
          {
            required: true,
            maxLength: true
          }
        ]
      ]),
      _createElementVNode("div", _hoisted_1, [
        _cache[6] || (_cache[6] = _createElementVNode(
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
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onCancel && _ctx.onCancel(...args))
        }, " Avbryt ")
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["before-submit", "onSubmit"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-4ca96e"
});
export {
  render
};
