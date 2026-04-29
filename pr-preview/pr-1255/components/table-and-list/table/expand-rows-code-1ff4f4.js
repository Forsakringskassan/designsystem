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

// virtual-entry:virtual:docs/components/table-and-list/table/expand-rows-code.md:expand-rows-code-1ff4f4.js
import { defineComponent as _defineComponent } from "vue";
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "expand-rows-code",
  setup(__props, { expose: __expose }) {
    __expose();
    const data = [
      {
        namn: "Apelsin",
        land: "Spanien"
      },
      {
        namn: "Banan",
        land: "Columbia"
      },
      {
        namn: "\xC4pple",
        land: "",
        nested: [
          {
            namn: "Aroma",
            land: "Sverige"
          },
          {
            namn: "Ingrid Marie",
            land: "Sverige"
          },
          {
            namn: "Pink Lady",
            land: "Italien"
          }
        ]
      }
    ];
    const rows = useDatasetRef(data, "nested");
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Namn",
        key: "namn"
      },
      {
        type: "text",
        header: "Land",
        key: "land"
      }
    ]);
    const __returned__ = { data, rows, columns, get FTable() {
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
  }, {
    expandable: _withCtx(({ row }) => [
      _createElementVNode(
        "pre",
        null,
        _toDisplayString(row),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["rows", "columns"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-1ff4f4"
});
export {
  render
};
