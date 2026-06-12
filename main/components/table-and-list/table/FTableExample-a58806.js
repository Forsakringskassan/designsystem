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

// virtual-entry:virtual:packages/vue/src/components/FTable/docs/FTableExample.vue:FTableExample-a58806.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";
import { toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const data = [
      {
        namn: "Apelsin",
        land: "Spanien",
        pris: "30",
        nested: [
          {
            namn: "Apelsiner importeras fr\xE4mst fr\xE5n Medelhavsomr\xE5det",
            land: "",
            pris: ""
          }
        ]
      },
      {
        namn: "Banan",
        land: "Ecuador",
        pris: "15",
        nested: [
          {
            namn: "Bananer importeras fr\xE4mst fr\xE5n tropiska l\xE4nder i Latinamerika, Afrika och Asien",
            land: "",
            pris: ""
          }
        ]
      },
      {
        namn: "\xC4pple",
        land: "Sverige",
        pris: "22",
        nested: [
          {
            namn: "\xC4pplen odlas i stor skala i tempererade klimat, bland annat i Sverige, Polen och Kina",
            land: "",
            pris: ""
          }
        ]
      }
    ];
    const selectedRows = ref([]);
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
        key: "pris"
      }
    ]);
    const rows = useDatasetRef(data, "nested");
    const __returned__ = { data, selectedRows, columns, rows, get FTable() {
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
    selectable: "multi"
  }, {
    expandable: _withCtx(({ row }) => [
      _createTextVNode(
        _toDisplayString(row.namn),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["selected-rows", "rows", "columns"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-a58806"
});
export {
  render
};
