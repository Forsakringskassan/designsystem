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

// virtual-entry:virtual:packages/vue/src/internal-components/IPopupError/examples/IPopupErrorExample.vue:IPopupErrorExample-d9ad05.js
import { defineComponent } from "vue";
import {
  FInteractiveTable,
  FTableColumn,
  FValidationForm,
  FEmailTextField,
  FPostalCodeTextField
} from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, createVNode as _createVNode, withDirectives as _withDirectives, withCtx as _withCtx, createElementVNode as _createElementVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "TestApp",
  components: {
    FInteractiveTable,
    FTableColumn,
    FValidationForm,
    FEmailTextField,
    FPostalCodeTextField
  },
  data() {
    return {
      insatser: [
        {
          id: "1",
          email: "",
          postnr: ""
        },
        {
          id: "2",
          email: "",
          postnr: ""
        },
        {
          id: "3",
          email: "",
          postnr: ""
        }
      ]
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_email_text_field = _resolveComponent("f-email-text-field");
  const _component_f_table_column = _resolveComponent("f-table-column");
  const _component_f_postal_code_text_field = _resolveComponent("f-postal-code-text-field");
  const _component_f_interactive_table = _resolveComponent("f-interactive-table");
  const _component_f_validation_form = _resolveComponent("f-validation-form");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createBlock(_component_f_validation_form, { "use-error-list": false }, {
    default: _withCtx(() => [
      _createVNode(_component_f_interactive_table, {
        rows: _ctx.insatser,
        hover: "",
        "key-attribute": "id"
      }, {
        caption: _withCtx(() => _cache[0] || (_cache[0] = [
          _createTextVNode(" PopupError example ")
        ])),
        default: _withCtx(({ row }) => [
          _createVNode(
            _component_f_table_column,
            {
              title: "Epost",
              type: "text",
              shrink: ""
            },
            {
              default: _withCtx(() => [
                _withDirectives(_createVNode(_component_f_email_text_field, {
                  modelValue: row.email,
                  "onUpdate:modelValue": ($event) => row.email = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                  [
                    _directive_validation,
                    void 0,
                    void 0,
                    { required: true }
                  ]
                ])
              ]),
              _: 2
              /* DYNAMIC */
            },
            1024
            /* DYNAMIC_SLOTS */
          ),
          _createVNode(
            _component_f_table_column,
            {
              title: "Postnummer",
              type: "text",
              shrink: ""
            },
            {
              default: _withCtx(() => [
                _withDirectives(_createVNode(_component_f_postal_code_text_field, {
                  modelValue: row.postnr,
                  "onUpdate:modelValue": ($event) => row.postnr = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                  [
                    _directive_validation,
                    void 0,
                    void 0,
                    { required: true }
                  ]
                ])
              ]),
              _: 2
              /* DYNAMIC */
            },
            1024
            /* DYNAMIC_SLOTS */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["rows"]),
      _cache[1] || (_cache[1] = _createElementVNode(
        "button",
        {
          class: "button button--primary",
          type: "submit"
        },
        "Submit",
        -1
        /* CACHED */
      ))
    ]),
    _: 1,
    __: [1]
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-d9ad05"
});
export {
  render
};
