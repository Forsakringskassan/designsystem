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

  // virtual-entry:./packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetTableExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");

  // packages/vue/src/components/FSortFilterDataset/examples/fruit-data.ts
  var fruits = [
    {
      id: "1",
      name: "\xC4pple",
      origin: "Sverige",
      description: "Rund, ofta r\xF6d eller gr\xF6n frukt med s\xF6t eller syrlig smak."
    },
    {
      id: "2",
      name: "Banan",
      origin: "Colombia",
      description: "L\xE5ng, gul frukt med mjukt och s\xF6tt fruktk\xF6tt."
    },
    {
      id: "3",
      name: "Vattenmelon",
      origin: "Spanien",
      description: "Stor, rund frukt med gr\xF6nt skal och saftigt, r\xF6tt fruktk\xF6tt."
    },
    {
      id: "4",
      name: "Grapefrukt",
      origin: "Turkiet",
      description: "Stor, rund citrusfrukt med tjockt skal och saftig, syrlig smak."
    }
  ];

  // virtual-entry:./packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetTableExample.vue
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    components: { FSortFilterDataset: import_vue4.FSortFilterDataset, FInteractiveTable: import_vue4.FInteractiveTable, FTableColumn: import_vue4.FTableColumn },
    data() {
      return {
        sortableAttributes: {
          name: "Namn",
          origin: "Land"
        },
        fruits
      };
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_table_column = (0, import_vue5.resolveComponent)("f-table-column");
    const _component_f_interactive_table = (0, import_vue5.resolveComponent)("f-interactive-table");
    const _component_f_sort_filter_dataset = (0, import_vue5.resolveComponent)("f-sort-filter-dataset");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_sort_filter_dataset, {
      data: _ctx.fruits,
      "default-sort-attribute": "name",
      "default-sort-ascending": true,
      "sortable-attributes": _ctx.sortableAttributes
    }, {
      header: (0, import_vue5.withCtx)(({ slotClass }) => [
        (0, import_vue5.createElementVNode)(
          "h3",
          {
            class: (0, import_vue5.normalizeClass)(slotClass)
          },
          "Frukter",
          2
          /* CLASS */
        )
      ]),
      default: (0, import_vue5.withCtx)(({ sortFilterResult }) => [
        (0, import_vue5.createVNode)(_component_f_interactive_table, {
          rows: sortFilterResult,
          striped: "",
          "key-attribute": "id"
        }, {
          caption: (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
            (0, import_vue5.createElementVNode)(
              "span",
              { class: "sr-only" },
              " Frukter ",
              -1
              /* HOISTED */
            )
          ])),
          default: (0, import_vue5.withCtx)(({ row }) => [
            (0, import_vue5.createVNode)(
              _component_f_table_column,
              {
                name: "name",
                title: "Namn",
                type: "text",
                shrink: ""
              },
              {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)(
                    (0, import_vue5.toDisplayString)(row.name),
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
                name: "origin",
                title: "Land",
                type: "text",
                shrink: ""
              },
              {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)(
                    (0, import_vue5.toDisplayString)(row.origin),
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
                name: "description",
                title: "Beskrivning",
                type: "text",
                expand: ""
              },
              {
                default: (0, import_vue5.withCtx)(() => [
                  (0, import_vue5.createTextVNode)(
                    (0, import_vue5.toDisplayString)(row.description),
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
          _: 2
          /* DYNAMIC */
        }, 1032, ["rows"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["data", "sortable-attributes"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FSortFilterDatasetTableExample"
  });
})();
