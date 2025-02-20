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

  // virtual-entry:./packages/vue/src/internal-components/IPopupError/examples/IPopupErrorExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "TestApp",
    components: {
      FInteractiveTable: import_vue4.FInteractiveTable,
      FTableColumn: import_vue4.FTableColumn,
      FValidationForm: import_vue4.FValidationForm,
      FEmailTextField: import_vue4.FEmailTextField,
      FPostalCodeTextField: import_vue4.FPostalCodeTextField
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
    const _component_f_email_text_field = (0, import_vue5.resolveComponent)("f-email-text-field");
    const _component_f_table_column = (0, import_vue5.resolveComponent)("f-table-column");
    const _component_f_postal_code_text_field = (0, import_vue5.resolveComponent)("f-postal-code-text-field");
    const _component_f_interactive_table = (0, import_vue5.resolveComponent)("f-interactive-table");
    const _component_f_validation_form = (0, import_vue5.resolveComponent)("f-validation-form");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_validation_form, { "use-error-list": false }, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createVNode)(_component_f_interactive_table, {
          rows: _ctx.insatser,
          hover: "",
          "key-attribute": "id"
        }, {
          caption: (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
            (0, import_vue5.createTextVNode)(" PopupError example ")
          ])),
          default: (0, import_vue5.withCtx)(({ row }) => [
            (0, import_vue5.createVNode)(
              _component_f_table_column,
              {
                name: "epost",
                title: "Epost",
                type: "text",
                shrink: ""
              },
              {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.withDirectives)((0, import_vue5.createVNode)(_component_f_email_text_field, {
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
            (0, import_vue5.createVNode)(
              _component_f_table_column,
              {
                name: "postnr",
                title: "Postnummer",
                type: "text",
                shrink: ""
              },
              {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.withDirectives)((0, import_vue5.createVNode)(_component_f_postal_code_text_field, {
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
        _cache[1] || (_cache[1] = (0, import_vue5.createElementVNode)(
          "button",
          {
            class: "button button--primary",
            type: "submit"
          },
          "Submit",
          -1
          /* HOISTED */
        ))
      ]),
      _: 1
      /* STABLE */
    });
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#IPopupErrorExample"
  });
})();
