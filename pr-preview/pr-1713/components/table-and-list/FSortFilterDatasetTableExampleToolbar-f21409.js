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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetTableExampleToolbar.vue:FSortFilterDatasetTableExampleToolbar-f21409.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";

// packages/vue/src/components/FCrudDataset/examples/fruit-data.ts
var fruits = [
  {
    id: "1",
    name: "\xC4pple",
    origin: "Sverige",
    description: "Rund, ofta r\xF6d eller gr\xF6n frukt med s\xF6t eller syrlig smak.",
    variant: [
      {
        id: "1a",
        name: "Discovery",
        origin: "Sverige",
        description: "R\xF6tt och gulgr\xF6nt \xE4pple. Krispig och smakrik."
      },
      {
        id: "1b",
        name: "Ingrid Marie",
        origin: "Sverige",
        description: "M\xF6rkr\xF6tt \xE4pple. Saftig och s\xF6tsyrlig."
      }
    ]
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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetTableExampleToolbar.vue:FSortFilterDatasetTableExampleToolbar-f21409.js
import { FButton, FSortFilterDataset, FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";
import { createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FSortFilterDatasetTableExampleToolbar",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = useDatasetRef([...fruits]);
    const selectedRows = ref([]);
    const columns = defineTableColumns([
      { type: "text", header: "Namn", key: "name", size: "shrink" },
      { type: "text", header: "Land", key: "origin", size: "shrink" },
      { type: "text", header: "Beskrivning", key: "description" }
    ]);
    const sortableAttributes = { name: "Namn", origin: "Land" };
    const __returned__ = { rows, selectedRows, columns, sortableAttributes, get FButton() {
      return FButton;
    }, get FSortFilterDataset() {
      return FSortFilterDataset;
    }, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "button-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _cache[4] || (_cache[4] = _createElementVNode(
        "h3",
        null,
        "Frukter",
        -1
        /* CACHED */
      )),
      _createVNode($setup["FSortFilterDataset"], {
        data: $setup.rows,
        "default-sort-attribute": "name",
        "default-sort-ascending": true,
        "sortable-attributes": $setup.sortableAttributes
      }, {
        header: _withCtx(() => [
          _createElementVNode("div", _hoisted_1, [
            _createVNode($setup["FButton"], {
              class: "button-group__item",
              "icon-left": "trashcan",
              size: "small",
              variant: "tertiary"
            }, {
              default: _withCtx(() => [..._cache[1] || (_cache[1] = [
                _createElementVNode(
                  "span",
                  null,
                  " Ta bort ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            }),
            _createVNode($setup["FButton"], {
              class: "button-group__item",
              "icon-left": "paper-clip",
              size: "small",
              variant: "tertiary"
            }, {
              default: _withCtx(() => [..._cache[2] || (_cache[2] = [
                _createElementVNode(
                  "span",
                  null,
                  " Bifoga ",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        default: _withCtx(({ sortFilterResult }) => [
          _createVNode($setup["FTable"], {
            "selected-rows": $setup.selectedRows,
            "onUpdate:selectedRows": _cache[0] || (_cache[0] = ($event) => $setup.selectedRows = $event),
            rows: sortFilterResult,
            columns: $setup.columns,
            striped: "",
            selectable: "multi"
          }, {
            caption: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createElementVNode(
                "span",
                { class: "sr-only" },
                " Frukter ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["selected-rows", "rows", "columns"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["data"])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-f21409"
});
export {
  render
};
