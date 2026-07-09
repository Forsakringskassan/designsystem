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

// virtual-entry:virtual:packages/vue/src/components/FTable/docs/FTableInlineEdit.vue:FTableInlineEdit-6eedb2.js
import { defineComponent as _defineComponent } from "vue";
import { FSortFilterDataset, useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue";
import { createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableInlineEdit",
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
        label: () => "Land",
        key: "land"
      },
      {
        type: "text:currency",
        header: "Pris per kilo",
        key: "pris",
        editable: true
      }
    ]);
    const rows = useDatasetRef([
      {
        namn: "Apelsin",
        land: "Spanien",
        pris: 30
      },
      {
        namn: "Banan",
        land: "Equador",
        pris: 15
      },
      {
        namn: "\xC4pple",
        land: "Sverige",
        pris: 22
      }
    ]);
    const sortableAttributes = { namn: "Frukt" };
    const __returned__ = { lander, columns, rows, sortableAttributes, get FSortFilterDataset() {
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
    default: _withCtx(({ sortFilterResult }) => [
      _createVNode($setup["FTable"], {
        ref: "table",
        rows: sortFilterResult,
        columns: $setup.columns,
        striped: ""
      }, {
        caption: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createElementVNode(
            "span",
            { class: "sr-only" },
            "Redigera inneh\xE5ll-exempel",
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
  selector: "#example-6eedb2"
});
export {
  render
};
