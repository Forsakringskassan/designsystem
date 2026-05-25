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

// virtual-entry:virtual:docs/components/table-and-list/table/create-delete-rows-code.md:create-delete-rows-code-6beca7.js
import { defineComponent as _defineComponent } from "vue";
import { useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import {
  FTable,
  defineTableColumns,
  removeDatasetRows,
  useDatasetRef
} from "@fkui/vue";
import { openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "create-delete-rows-code",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = useDatasetRef([
      {
        namn: "Apelsin"
      }
    ]);
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Frukt",
        key: "namn"
      },
      {
        type: "button",
        header: "\xC5tg\xE4rd",
        icon: "trashcan",
        text() {
          return "Ta bort";
        },
        onClick: onRemoveRow
      }
    ]);
    const tableRef = useTemplateRef("table");
    function onRemoveRow(row) {
      assertRef(tableRef);
      tableRef.value.withTabstopBehaviour("row-removal", () => {
        removeDatasetRows(rows, row);
      });
    }
    const __returned__ = { rows, columns, tableRef, onRemoveRow, get FTable() {
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
    columns: $setup.columns
  }, null, 8, ["rows", "columns"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-6beca7"
});
export {
  render
};
