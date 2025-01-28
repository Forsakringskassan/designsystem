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

  // virtual-entry:./packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetCustomExample.vue
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

  // virtual-entry:./packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetCustomExample.vue
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    components: { FSortFilterDataset: import_vue4.FSortFilterDataset },
    data() {
      return {
        sortableAttributes: {
          name: "Namn",
          origin: "Land"
        },
        fruits: fruits.map((it) => {
          const { description, ...rest } = it;
          return rest;
        })
      };
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_sort_filter_dataset = (0, import_vue5.resolveComponent)("f-sort-filter-dataset");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_sort_filter_dataset, {
      data: _ctx.fruits,
      "sortable-attributes": _ctx.sortableAttributes
    }, {
      default: (0, import_vue5.withCtx)(({ sortFilterResult }) => [
        ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
          import_vue5.Fragment,
          null,
          (0, import_vue5.renderList)(sortFilterResult, (item) => {
            return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
              "pre",
              {
                key: item.id
              },
              (0, import_vue5.toDisplayString)(item),
              1
              /* TEXT */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["data", "sortable-attributes"]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FSortFilterDatasetCustomExample"
  });
})();
