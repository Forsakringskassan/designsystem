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

// virtual-entry:virtual:packages/vue/src/components/FTable/docs/FTableActionButtonLinkExample.vue:FTableActionButtonLinkExample-fcb45a.js
import { defineComponent as _defineComponent } from "vue";
import { removeDatasetRows, useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue";
import { openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableActionButtonLinkExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Frukt",
        key: "frukt"
      },
      {
        type: "text",
        header: "Land",
        key: "land"
      },
      {
        type: "text:currency",
        header: "Pris per kilo",
        key: "pris"
      },
      {
        type: "anchor",
        header: "L\xE4nk",
        text() {
          return "Mer information";
        },
        href: "#"
      },
      {
        type: "button",
        header: "",
        icon: "trashcan",
        text() {
          return "Ta bort";
        },
        onClick: onRemoveRow
      },
      {
        header: "",
        type: "menu",
        text(row) {
          return `\xC5tg\xE4rder f\xF6r "${row.frukt}"`;
        },
        actions: [
          {
            label: "Visa",
            icon: "search",
            onClick(row) {
              window.alert(`Visa detaljer f\xF6r "${row.frukt}"`);
            }
          },
          {
            label: "Redigera",
            icon: "pen",
            onClick(row) {
              window.alert(`Redigera "${row.frukt}"`);
            }
          }
        ]
      }
    ]);
    const rows = useDatasetRef([
      { frukt: "Apelsin", land: "Spanien", pris: "30" },
      { frukt: "Banan", land: "Ecuador", pris: "15" },
      { frukt: "\xC4pple", land: "Sverige", pris: "22" }
    ]);
    function onRemoveRow(row) {
      removeDatasetRows(rows, row);
    }
    const __returned__ = { columns, rows, onRemoveRow, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FTable"], {
    ref: "table",
    rows: $setup.rows,
    columns: $setup.columns,
    striped: ""
  }, null, 8, ["rows", "columns"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-fcb45a"
});
export {
  render
};
