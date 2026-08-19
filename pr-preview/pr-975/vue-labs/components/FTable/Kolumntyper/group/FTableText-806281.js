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

// virtual-entry:virtual:docs/components/FTable/Kolumntyper/examples/text/FTableText.vue:FTableText-806281.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";
import { openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableText",
  setup(__props, { expose: __expose }) {
    __expose();
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Kolumnrubrik 1",
        key: "value1"
      },
      {
        type: "text",
        header: "Kolumnrubrik 2",
        key: "value2",
        editable: true
      }
    ]);
    const rows = ref([
      {
        value1: "Text 1",
        value2: "Text 2"
      },
      {
        value1: "Text 3",
        value2: "Text 4"
      },
      {
        value1: "Text 5",
        value2: "Text 6"
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
  selector: "#example-806281"
});
export {
  render
};
