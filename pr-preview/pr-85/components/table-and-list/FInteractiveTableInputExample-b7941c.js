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

  // virtual-entry:./packages/vue/src/components/FInteractiveTable/examples/FInteractiveTableInputExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FInteractiveTableInputExample",
    components: {
      FInteractiveTable: import_vue4.FInteractiveTable,
      FTableColumn: import_vue4.FTableColumn,
      FDatepickerField: import_vue4.FDatepickerField,
      FNumericTextField: import_vue4.FNumericTextField
    },
    data() {
      return {
        betalningar: [
          {
            id: "1",
            date: "2024-05-25",
            belopp: "",
            beskrivning: "F\xF6rsta utbetalning"
          },
          {
            id: "2",
            date: "2024-06-25",
            belopp: "",
            beskrivning: "Andra utbetalning"
          },
          {
            id: "3",
            date: "2024-07-24",
            belopp: "",
            beskrivning: "Tredje utbetalning"
          }
        ]
      };
    }
  });
  var _hoisted_1 = { class: "row" };
  var _hoisted_2 = { class: "col col--lg-10" };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_table_column = (0, import_vue5.resolveComponent)("f-table-column");
    const _component_f_datepicker_field = (0, import_vue5.resolveComponent)("f-datepicker-field");
    const _component_f_numeric_text_field = (0, import_vue5.resolveComponent)("f-numeric-text-field");
    const _component_f_interactive_table = (0, import_vue5.resolveComponent)("f-interactive-table");
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", _hoisted_1, [
      (0, import_vue5.createElementVNode)("div", _hoisted_2, [
        (0, import_vue5.createVNode)(_component_f_interactive_table, {
          rows: _ctx.betalningar,
          "key-attribute": "id"
        }, {
          caption: (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
            (0, import_vue5.createTextVNode)(" Justera betalningar ")
          ])),
          default: (0, import_vue5.withCtx)(({ row }) => [
            (0, import_vue5.createVNode)(
              _component_f_table_column,
              {
                name: "beskrivning",
                title: "Beskrivning",
                type: "text",
                shrink: ""
              },
              {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)(
                    (0, import_vue5.toDisplayString)(row.beskrivning),
                    1
                    /* TEXT */
                  )
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
                name: "date",
                title: "Utbetalningsdatum",
                type: "text",
                shrink: ""
              },
              {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.withDirectives)((0, import_vue5.createVNode)(_component_f_datepicker_field, {
                    modelValue: row.date,
                    "onUpdate:modelValue": ($event) => row.date = $event
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
                name: "belopp",
                title: "Utbetalat belopp",
                type: "text",
                shrink: ""
              },
              {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.withDirectives)((0, import_vue5.createVNode)(_component_f_numeric_text_field, {
                    modelValue: row.belopp,
                    "onUpdate:modelValue": ($event) => row.belopp = $event
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
        }, 8, ["rows"])
      ])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FInteractiveTableInputExample"
  });
})();
