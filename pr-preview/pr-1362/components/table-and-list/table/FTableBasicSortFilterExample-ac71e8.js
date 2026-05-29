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

// virtual-entry:virtual:packages/vue/src/components/FTable/docs/FTableBasicSortFilterExample.vue:FTableBasicSortFilterExample-ac71e8.js
import { defineComponent as _defineComponent } from "vue";
import { FSortFilterDataset, useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue";
import { createVNode as _createVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableBasicSortFilterExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Frukt",
        key: "frukt"
      }
    ]);
    const rows = useDatasetRef([
      { frukt: "Druva" },
      { frukt: "Banan" },
      { frukt: "Granatapple" },
      { frukt: "Citron" },
      { frukt: "Apelsin" },
      { frukt: "Fikon" }
    ]);
    const sortableAttributes = { frukt: "Text" };
    const __returned__ = { columns, rows, sortableAttributes, get FSortFilterDataset() {
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
        columns: $setup.columns
      }, null, 8, ["rows", "columns"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["data"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-ac71e8"
});
export {
  render
};
