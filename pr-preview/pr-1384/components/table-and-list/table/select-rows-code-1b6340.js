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

// virtual-entry:virtual:docs/components/table-and-list/table/select-rows-code.md:select-rows-code-1b6340.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue";
import { openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "select-rows-code",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = useDatasetRef([
      { id: "1", fruit: "Apelsin" },
      { id: "2", fruit: "Banan" },
      { id: "3", fruit: "P\xE4ron" }
    ]);
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Frukt",
        key: "fruit"
      }
    ]);
    const selectedRows = ref([]);
    const __returned__ = { rows, columns, selectedRows, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FTable"], {
    "selected-rows": $setup.selectedRows,
    "onUpdate:selectedRows": _cache[0] || (_cache[0] = ($event) => $setup.selectedRows = $event),
    rows: $setup.rows,
    columns: $setup.columns,
    "key-attribute": "id",
    selectable: "multi"
  }, null, 8, ["selected-rows", "rows", "columns"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-1b6340"
});
export {
  render
};
