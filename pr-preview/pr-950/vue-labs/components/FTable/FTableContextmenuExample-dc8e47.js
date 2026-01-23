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

// virtual-entry:virtual:src/components/FTable/examples/FTableContextmenuExample.vue:FTableContextmenuExample-dc8e47.js
import { defineComponent as _defineComponent } from "vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";
import { openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableContextmenuExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const columns = defineTableColumns([
      {
        type: "text",
        header: "ID",
        key: "id"
      },
      {
        type: "text",
        header: "Text 1",
        key: "text1"
      },
      {
        type: "text",
        header: "Text 2",
        key: "text2"
      },
      {
        type: "text",
        header: "Text 3",
        key: "text3"
      },
      {
        header: "\xC5tg\xE4rd",
        type: "menu",
        text(row) {
          return `Visa \xE5tg\xE4rder f\xF6r rad "${row.id}"`;
        },
        actions: [
          {
            label: "Visa",
            icon: "search",
            onClick(row) {
              window.alert(`Visa detaljer f\xF6r rad "${row.id}"`);
            }
          },
          {
            label: "Redigera",
            icon: "pen",
            onClick(row) {
              window.alert(`Redigera rad "${row.id}"`);
            }
          },
          {
            label: "Ta bort",
            icon: "trashcan",
            onClick(row) {
              window.alert(`Ta bort rad "${row.id}"`);
            }
          }
        ]
      }
    ]);
    const rows = [
      {
        id: "1",
        text1: "Text 1",
        text2: "Text 2",
        text3: "Text 3"
      },
      {
        id: "2",
        text1: "Text 4",
        text2: "Text 5",
        text3: "Text 6"
      },
      {
        id: "3",
        text1: "Text 7",
        text2: "Text 8",
        text3: "Text 9"
      }
    ];
    const __returned__ = { columns, rows, get FTable() {
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
  }, null, 8, ["columns"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-dc8e47"
});
export {
  render
};
