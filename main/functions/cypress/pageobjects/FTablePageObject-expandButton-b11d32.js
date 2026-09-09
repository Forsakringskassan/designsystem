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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FTablePageObject/FTablePageObject-expandButton.vue:FTablePageObject-expandButton-b11d32.js
import { defineComponent as _defineComponent } from "vue";
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";
import { resolveDirective as _resolveDirective, withDirectives as _withDirectives, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTablePageObject-expandButton",
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
    const rows = useDatasetRef(
      [
        {
          id: "1",
          name: "Foo",
          nested: [
            {
              id: "1-a",
              name: "Expanded 1-1"
            },
            {
              id: "1-b",
              name: "Expanded 1-2"
            }
          ]
        },
        {
          id: "2",
          name: "Bar",
          nested: [
            {
              id: "2-a",
              name: "Expanded 2-1"
            },
            {
              id: "2-b",
              name: "Expanded 2-2"
            }
          ]
        },
        {
          id: "3",
          name: "Baz",
          nested: [
            {
              id: "3-a",
              name: "Expanded 3-1"
            },
            {
              id: "3-b",
              name: "Expanded -32"
            }
          ]
        }
      ],
      "nested"
    );
    const __returned__ = { columns, rows, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_test = _resolveDirective("test");
  return _withDirectives((_openBlock(), _createBlock($setup["FTable"], {
    columns: $setup.columns,
    rows: $setup.rows
  }, null, 8, ["columns", "rows"])), [
    [_directive_test, "table"]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-b11d32"
});
export {
  render
};
