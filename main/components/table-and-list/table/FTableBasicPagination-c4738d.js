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

// virtual-entry:virtual:packages/vue/src/components/FTable/docs/FTableBasicPagination.vue:FTableBasicPagination-c4738d.js
import { defineComponent as _defineComponent } from "vue";
import { FPaginateDataset, FPaginator, FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableBasicPagination",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = useDatasetRef([
      {
        namn: "Apelsin",
        land: "Spanien",
        pris: "30"
      },
      {
        namn: "Banan",
        land: "Ecuador",
        pris: "15"
      },
      {
        namn: "\xC4pple",
        land: "Sverige",
        pris: "22"
      },
      {
        namn: "P\xE4ron",
        land: "Nederl\xE4nderna",
        pris: "35"
      },
      {
        namn: "Citron",
        land: "Spanien",
        pris: "40"
      },
      {
        namn: "Lime",
        land: "Mexiko",
        pris: "70"
      },
      {
        namn: "Vindruvor",
        land: "Italien",
        pris: "60"
      },
      {
        namn: "Kiwi",
        land: "Grekland",
        pris: "50"
      },
      {
        namn: "Mango",
        land: "Peru",
        pris: "80"
      },
      {
        namn: "Ananas",
        land: "Costa Rica",
        pris: "45"
      },
      {
        namn: "Melon",
        land: "Spanien",
        pris: "35"
      },
      {
        namn: "Jordgubbar",
        land: "Sverige",
        pris: "130"
      },
      {
        namn: "Bl\xE5b\xE4r",
        land: "Polen",
        pris: "190"
      },
      {
        namn: "Hallon",
        land: "Portugal",
        pris: "250"
      },
      {
        namn: "K\xF6rsb\xE4r",
        land: "Turkiet",
        pris: "150"
      },
      {
        namn: "Plommon",
        land: "Spanien",
        pris: "65"
      }
    ]);
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Frukt",
        key: "namn"
      },
      {
        type: "text",
        header: "Land",
        key: "land"
      },
      {
        type: "text:currency",
        header: "Pris per kilo",
        key: "pris",
        value(row) {
          return String(row.pris);
        }
      }
    ]);
    const __returned__ = { rows, columns, get FPaginateDataset() {
      return FPaginateDataset;
    }, get FPaginator() {
      return FPaginator;
    }, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FPaginateDataset"], {
    items: $setup.rows,
    "items-per-page": 3
  }, {
    default: _withCtx(({ items: currentPageItems }) => [
      _createVNode($setup["FTable"], {
        rows: currentPageItems,
        columns: $setup.columns
      }, {
        caption: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            "Tabell med paginering",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["rows", "columns"]),
      _createVNode($setup["FPaginator"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["items"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-c4738d"
});
export {
  render
};
