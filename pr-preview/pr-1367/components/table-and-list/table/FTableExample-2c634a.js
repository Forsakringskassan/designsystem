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

// virtual-entry:virtual:packages/vue/src/components/FTable/docs/FTableExample.vue:FTableExample-2c634a.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FButton, FSortFilterDataset, useDatasetRef, useModal } from "@fkui/vue";
import { FTable, defineTableColumns, removeDatasetRows } from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const lander = [
      "",
      "Colombia",
      "Costa Rica",
      "Dominikanska republiken",
      "Ecuador",
      "Frankrike",
      "Italien",
      "Spanien",
      "Sverige",
      "Sydafrika"
    ];
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Frukt",
        key: "namn"
      },
      {
        type: "select",
        options: lander,
        header: "Land",
        label: () => `Val av land`,
        key: "land"
      },
      {
        type: "text:currency",
        header: "Pris",
        key: "pris"
      },
      {
        type: "text",
        editable: true,
        label: (row) => `Kommentar till ${row.namn}`,
        header: "Kommentar",
        key: "kommentar"
      }
    ]);
    const rows = useDatasetRef(
      [
        {
          namn: "Apelsin",
          land: "",
          kommentar: "",
          sorter: [
            { namn: "Navelina", land: "Spanien", pris: 28.73 },
            { namn: "Navel (Navels)", land: "Spanien", pris: 18 },
            { namn: "Ekologiska Navels", land: "Spanien", pris: 46.63 },
            { namn: "Tarocco (Blodapelsin)", land: "Italien", pris: 35 },
            { namn: "Moro (Blodapelsin)", land: "Italien", pris: 32 },
            { namn: "Valencia (Juiceapelsin)", land: "Sydafrika", pris: 22 }
          ]
        },
        {
          namn: "\xC4pple",
          land: "",
          kommentar: "S\xE4songsvariationer f\xF6rekommer",
          sorter: [
            { namn: "Ingrid Marie", land: "Sverige", pris: 29.9 },
            { namn: "Aroma", land: "Sverige", pris: 32.5 },
            { namn: "Royal Gala", land: "Italien", pris: 24.95 },
            { namn: "Granny Smith", land: "Frankrike", pris: 28 },
            { namn: "Pink Lady", land: "Italien", pris: 42 }
          ]
        },
        {
          namn: "Banan",
          land: "",
          kommentar: "S\xE4ljs oftast per kilo",
          sorter: [
            { namn: "Cavendish", land: "Ecuador", pris: 21.9 },
            { namn: "Ekologiska Bananer", land: "Dominikanska republiken", pris: 28.5 },
            { namn: "Fairtrade Bananer", land: "Colombia", pris: 26 },
            { namn: "Plantain (Kokbanan)", land: "Costa Rica", pris: 35 },
            { namn: "Babybanan", land: "Ecuador", pris: 45 }
          ]
        }
      ],
      "sorter"
    );
    const sortableAttributes = { namn: "Frukt" };
    const valdaRader = ref([]);
    const { confirmModal } = useModal();
    async function onRemoveSelectedRows() {
      if (valdaRader.value.length === 0) {
        return;
      }
      const confirmed = await confirmModal({
        heading: "Ta bort frukt(er)",
        content: "\xC4r du s\xE4ker att du vill ta bort valda frukt(er)?",
        confirm: "Ja, ta bort",
        dismiss: "Nej, beh\xE5ll"
      });
      if (confirmed) {
        removeDatasetRows(rows, valdaRader);
      }
    }
    const __returned__ = { lander, columns, rows, sortableAttributes, valdaRader, confirmModal, onRemoveSelectedRows, get FButton() {
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FSortFilterDataset"], {
    data: $setup.rows,
    "sortable-attributes": $setup.sortableAttributes
  }, {
    header: _withCtx(() => [
      _createVNode($setup["FButton"], {
        "data-id": "remove-selected-button",
        variant: "tertiary",
        "icon-left": "trashcan",
        size: "small",
        onClick: $setup.onRemoveSelectedRows
      }, {
        default: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " Ta bort valda frukter ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      })
    ]),
    default: _withCtx(({ sortFilterResult }) => [
      _createVNode($setup["FTable"], {
        ref: "table",
        "selected-rows": $setup.valdaRader,
        "onUpdate:selectedRows": _cache[0] || (_cache[0] = ($event) => $setup.valdaRader = $event),
        rows: sortFilterResult,
        columns: $setup.columns,
        striped: "",
        selectable: "multi"
      }, {
        caption: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createElementVNode(
            "span",
            { class: "sr-only" },
            "Fruktexempel",
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
  }, 8, ["data"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-2c634a"
});
export {
  render
};
