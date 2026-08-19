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

  // virtual-entry:./packages/vue/src/components/FInteractiveTable/examples/FInteractiveTableExpandableExample.vue
  var import_vue3 = __require("@fkui/vue");
  var import_vue4 = __require("vue");
  var exampleComponent = {
    __name: "FInteractiveTableExpandableExample",
    setup(__props, { expose: __expose }) {
      __expose();
      const rows = [
        {
          id: "1",
          name: "Utbetalning",
          date: "2023-09-27",
          sum: 1200,
          myExpandableRow: [
            {
              id: "1a",
              name: "Barnbidrag",
              date: "2023-09-25",
              sum: 200
            },
            {
              id: "1b",
              name: "\xD6vrig ers\xE4ttning",
              date: "2023-09-27",
              sum: 1e3
            }
          ]
        },
        {
          id: "2",
          name: "Utbetalning",
          date: "2023-12-25",
          sum: 1e3,
          myExpandableRow: [
            {
              id: "2a",
              name: "Barnbidrag",
              date: "2023-12-25",
              sum: 1e3
            }
          ]
        }
      ];
      const __returned__ = { rows, get FInteractiveTable() {
        return import_vue3.FInteractiveTable;
      }, get FTableColumn() {
        return import_vue3.FTableColumn;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createBlock)($setup["FInteractiveTable"], {
      rows: $setup.rows,
      "expandable-attribute": "myExpandableRow",
      "key-attribute": "id"
    }, {
      caption: (0, import_vue4.withCtx)(() => _cache[0] || (_cache[0] = [
        (0, import_vue4.createTextVNode)(" Expanderbara rader ")
      ])),
      default: (0, import_vue4.withCtx)(({ row }) => [
        (0, import_vue4.createVNode)(
          $setup["FTableColumn"],
          {
            name: "compensation",
            title: "Ers\xE4ttning"
          },
          {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createTextVNode)(
                (0, import_vue4.toDisplayString)(row.name),
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
        (0, import_vue4.createVNode)(
          $setup["FTableColumn"],
          {
            name: "id",
            title: "Id",
            shrink: ""
          },
          {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createTextVNode)(
                (0, import_vue4.toDisplayString)(row.id),
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
        (0, import_vue4.createVNode)(
          $setup["FTableColumn"],
          {
            name: "date",
            title: "Datum",
            type: "date"
          },
          {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createTextVNode)(
                (0, import_vue4.toDisplayString)(row.date),
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
        (0, import_vue4.createVNode)(
          $setup["FTableColumn"],
          {
            name: "amount",
            title: "Summa",
            type: "numeric"
          },
          {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createTextVNode)(
                (0, import_vue4.toDisplayString)(row.sum) + " kronor ",
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
    });
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FInteractiveTableExpandableExample"
  });
})();
