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

// virtual-entry:virtual:docs/components/table-and-list/table/code.md:code-26676a.js
import { defineComponent as _defineComponent } from "vue";
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";
import { openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "code",
  setup(__props, { expose: __expose }) {
    __expose();
    const columns = defineTableColumns([
      {
        header: "Namn",
        key: "namn",
        size: "shrink"
      },
      {
        header: "Land",
        key: "land",
        size: "grow"
      }
    ]);
    const rows = useDatasetRef([
      {
        namn: "Apelsin",
        land: "Spanien"
      },
      {
        namn: "Banan",
        land: "Colombia"
      },
      {
        namn: "\xC4pple",
        land: "Sverige"
      }
    ]);
    const __returned__ = { columns, rows, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FTable"], {
    columns: $setup.columns,
    rows: $setup.rows
  }, null, 8, ["columns", "rows"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-26676a"
});
export {
  render
};
