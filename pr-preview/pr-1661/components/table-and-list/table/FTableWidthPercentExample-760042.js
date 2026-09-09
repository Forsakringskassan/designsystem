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

// virtual-entry:virtual:packages/vue/src/components/FTable/docs/FTableWidthPercentExample.vue:FTableWidthPercentExample-760042.js
import { defineComponent as _defineComponent } from "vue";
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";
import { openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableWidthPercentExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const data = [
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
      }
    ];
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Frukt",
        key: "namn",
        width: "30%"
      },
      {
        type: "text",
        header: "Land",
        key: "land",
        width: "50%"
      },
      {
        type: "text:currency",
        header: "Pris per kilo",
        key: "pris",
        width: "20%"
      }
    ]);
    const rows = useDatasetRef(data);
    const __returned__ = { data, columns, rows, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FTable"], {
    rows: $setup.rows,
    columns: $setup.columns
  }, null, 8, ["rows", "columns"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-760042"
});
export {
  render
};
