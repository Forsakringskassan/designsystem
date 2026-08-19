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

  // virtual-entry:./docs/styles/examples/DensityExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    components: { FDataTable: import_vue4.FDataTable, FTableColumn: import_vue4.FTableColumn },
    data() {
      return {
        selectedItems: [],
        items: [
          { id: "1", date: "2022-02-01", amount: "2 300" },
          { id: "2", date: "2024-04-20", amount: "5 250" },
          { id: "3", date: "2024-05-01", amount: "2 100" }
        ]
      };
    }
  });
  var _hoisted_1 = { class: "row" };
  var _hoisted_2 = { class: "col col--md-6 density-default" };
  var _hoisted_3 = { class: "col col--md-6 density-dense" };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_table_column = (0, import_vue5.resolveComponent)("f-table-column");
    const _component_f_data_table = (0, import_vue5.resolveComponent)("f-data-table");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", _hoisted_1, [
      (0, import_vue5.createElementVNode)("div", _hoisted_2, [
        (0, import_vue5.createVNode)(_component_f_data_table, {
          rows: _ctx.items,
          "key-attribute": "id"
        }, {
          caption: (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
            (0, import_vue5.createTextVNode)(" Tabell med standard densitet ")
          ])),
          default: (0, import_vue5.withCtx)(({ row }) => [
            (0, import_vue5.createVNode)(
              _component_f_table_column,
              {
                name: "date",
                title: "Datum",
                type: "text"
              },
              {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)(
                    (0, import_vue5.toDisplayString)(row.date),
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
                name: "amount",
                title: "Belopp",
                type: "numeric"
              },
              {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)(
                    (0, import_vue5.toDisplayString)(row.amount),
                    1
                    /* TEXT */
                  )
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
      ]),
      (0, import_vue5.createElementVNode)("div", _hoisted_3, [
        (0, import_vue5.createVNode)(_component_f_data_table, {
          rows: _ctx.items,
          "key-attribute": "id"
        }, {
          caption: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
            (0, import_vue5.createTextVNode)(" Tabell med kompakt densitet ")
          ])),
          default: (0, import_vue5.withCtx)(({ row }) => [
            (0, import_vue5.createVNode)(
              _component_f_table_column,
              {
                name: "date",
                title: "Datum",
                type: "text"
              },
              {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)(
                    (0, import_vue5.toDisplayString)(row.date),
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
                name: "amount",
                title: "Belopp",
                type: "numeric"
              },
              {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)(
                    (0, import_vue5.toDisplayString)(row.amount),
                    1
                    /* TEXT */
                  )
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
    selector: "#DensityExample"
  });
})();
