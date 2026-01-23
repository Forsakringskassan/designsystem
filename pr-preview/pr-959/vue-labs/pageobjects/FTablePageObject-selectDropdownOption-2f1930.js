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

// virtual-entry:virtual:docs/pageobjects/examples/FTablePageObject/FTablePageObject-selectDropdownOption.vue:FTablePageObject-selectDropdownOption-2f1930.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";
import { resolveDirective as _resolveDirective, withDirectives as _withDirectives, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTablePageObject-selectDropdownOption",
  setup(__props, { expose: __expose }) {
    __expose();
    const selectFieldOptions = ["Foo", "Bar", "Baz"];
    const columns = defineTableColumns([
      {
        type: "text",
        header: "ID",
        value(row) {
          return row.id;
        }
      },
      {
        type: "select",
        header: "Alternativ",
        key: "option",
        options: selectFieldOptions,
        editable: true,
        label: (row) => `Alternativ f\xF6r rad ${row.id}`
      }
    ]);
    const rows = ref([
      {
        id: "1",
        option: "Foo"
      },
      {
        id: "2",
        option: "Bar"
      },
      {
        id: "3",
        option: "Baz"
      }
    ]);
    const __returned__ = { selectFieldOptions, columns, rows, get FTable() {
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
    rows: $setup.rows,
    "key-attribute": "id"
  }, null, 8, ["columns", "rows"])), [
    [_directive_test, "table"]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-2f1930"
});
export {
  render
};
