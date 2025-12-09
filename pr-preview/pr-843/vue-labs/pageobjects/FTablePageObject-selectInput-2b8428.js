// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
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
  app.use(ErrorPlugin);
  app.use(ValidationPlugin);
  app.use(TestPlugin);
  app.use(TranslationPlugin);
  app.mount(selector);
  setRunningContext(app);
}

// virtual-entry:virtual:docs/pageobjects/examples/FTablePageObject/FTablePageObject-selectInput.vue:FTablePageObject-selectInput-2b8428.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";
import { resolveDirective as _resolveDirective, withDirectives as _withDirectives, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTablePageObject-selectInput",
  setup(__props, { expose: __expose }) {
    __expose();
    const columns = defineTableColumns([
      {
        type: "text",
        header: "ID",
        value(row) {
          return row.id;
        }
      },
      {
        type: "text",
        header: "Namn",
        value(row) {
          return row.name;
        }
      }
    ]);
    const rows = ref([
      {
        id: "1",
        name: "Foo"
      },
      {
        id: "2",
        name: "Bar"
      },
      {
        id: "3",
        name: "Baz"
      }
    ]);
    const selectedRows = ref([]);
    const __returned__ = { columns, rows, selectedRows, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_test = _resolveDirective("test");
  return _withDirectives((_openBlock(), _createBlock($setup["FTable"], {
    "selected-rows": $setup.selectedRows,
    "onUpdate:selectedRows": _cache[0] || (_cache[0] = ($event) => $setup.selectedRows = $event),
    columns: $setup.columns,
    rows: $setup.rows,
    selectable: "multi",
    "key-attribute": "id"
  }, null, 8, ["selected-rows", "columns", "rows"])), [
    [_directive_test, "table"]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-2b8428"
});
export {
  render
};
