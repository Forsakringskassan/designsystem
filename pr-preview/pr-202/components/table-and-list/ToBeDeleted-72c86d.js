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

  // virtual-entry:./packages/vue/src/components/FInteractiveTable/examples/ToBeDeleted.vue
  var import_vue3 = __require("@fkui/vue");
  var import_vue4 = __require("vue");
  var exampleComponent = {
    __name: "ToBeDeleted",
    setup(__props, { expose: __expose }) {
      __expose();
      const rows = [
        {
          id: "1",
          number: "11",
          text: "rad 1",
          expandable: [
            { id: "1A", number: "111", text: "rad 1A" },
            { id: "1B", number: "1111", text: "rad 1B" },
            { id: "1C", number: "11111", text: "rad 1C" }
          ]
        },
        {
          id: "2",
          text: "rad 2",
          number: "22",
          expandable: [
            { id: "2A", number: "222", text: "rad 2A" },
            { id: "2B", number: "2222", text: "rad 2B" }
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
      "expandable-attribute": "expandable",
      "key-attribute": "id"
    }, {
      caption: (0, import_vue4.withCtx)(() => _cache[0] || (_cache[0] = [
        (0, import_vue4.createTextVNode)(" En tabell ")
      ])),
      default: (0, import_vue4.withCtx)(({ row }) => [
        (0, import_vue4.createVNode)(
          $setup["FTableColumn"],
          {
            name: "name1",
            title: "Id"
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
            name: "name2",
            title: "Number",
            type: "numeric",
            shrink: ""
          },
          {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createTextVNode)(
                (0, import_vue4.toDisplayString)(row.number),
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
            name: "name3",
            title: "Text"
          },
          {
            default: (0, import_vue4.withCtx)(() => [
              (0, import_vue4.createTextVNode)(
                ' Lorem "' + (0, import_vue4.toDisplayString)(row.text) + '" ipsum ',
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
    selector: "#ToBeDeleted"
  });
})();
