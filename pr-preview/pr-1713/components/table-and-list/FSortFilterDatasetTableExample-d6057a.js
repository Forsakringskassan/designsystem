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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetTableExample.vue:FSortFilterDatasetTableExample-d6057a.js
import { defineComponent as _defineComponent } from "vue";

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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetTableExample.vue:FSortFilterDatasetTableExample-d6057a.js
import { FSortFilterDataset, FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";
import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FSortFilterDatasetTableExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = useDatasetRef([...fruits]);
    const columns = defineTableColumns([
      { type: "text", header: "Namn", key: "name", size: "shrink" },
      { type: "text", header: "Land", key: "origin", size: "shrink" },
      { type: "text", header: "Beskrivning", key: "description" }
    ]);
    const sortableAttributes = { name: "Namn", origin: "Land" };
    const __returned__ = { rows, columns, sortableAttributes, get FSortFilterDataset() {
      return FSortFilterDataset;
    }, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FSortFilterDataset"], {
    data: $setup.rows,
    "default-sort-attribute": "name",
    "default-sort-ascending": true,
    "sortable-attributes": $setup.sortableAttributes
  }, {
    header: _withCtx(({ slotClass }) => [
      _createElementVNode(
        "h3",
        {
          class: _normalizeClass(slotClass)
        },
        "Frukter",
        2
        /* CLASS */
      )
    ]),
    default: _withCtx(({ sortFilterResult }) => [
      _createVNode($setup["FTable"], {
        rows: sortFilterResult,
        columns: $setup.columns,
        striped: ""
      }, {
        caption: _withCtx(() => [..._cache[0] || (_cache[0] = [
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
      }, 8, ["rows", "columns"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["data"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-d6057a"
});
export {
  render
};
