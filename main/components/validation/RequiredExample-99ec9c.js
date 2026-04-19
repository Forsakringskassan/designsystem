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

// virtual-entry:virtual:docs/components/validation/examples/RequiredExample.vue:RequiredExample-99ec9c.js
import { defineComponent } from "vue";
import { FButton, FTextField, FValidationForm } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createVNode as _createVNode, createElementVNode as _createElementVNode } from "vue";
var exampleComponent = defineComponent({
  name: "RequiredExample",
  components: { FButton, FTextField, FValidationForm },
  data() {
    return { model: "" };
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
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_button = _resolveComponent("f-button");
  const _component_f_validation_form = _resolveComponent("f-validation-form");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock(_component_f_validation_form, {
    "use-error-list": false,
    onSubmit: _ctx.onSubmit
  }, {
    default: _withCtx(() => [
      _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
        modelValue: _ctx.model,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.model = $event)
      }, {
        default: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " Fyll i minst ett tecken ",
            -1
            /* CACHED */
          )
        ])]),
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
      _createElementVNode("div", _hoisted_1, [
        _createVNode(_component_f_button, {
          id: "submit",
          class: "button-group__item",
          size: "large",
          type: "submit"
        }, {
          default: _withCtx(() => [..._cache[2] || (_cache[2] = [
            _createTextVNode(
              " Spara ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_f_button, {
          class: "button-group__item",
          size: "large",
          variant: "secondary",
          onClick: _ctx.onCancel
        }, {
          default: _withCtx(() => [..._cache[3] || (_cache[3] = [
            _createTextVNode(
              " Avbryt ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["onSubmit"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-99ec9c"
});
export {
  render
};
