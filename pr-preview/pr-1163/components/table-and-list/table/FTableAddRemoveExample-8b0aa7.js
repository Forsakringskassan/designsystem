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

// virtual-entry:virtual:packages/vue/src/components/FTable/docs/FTableAddRemoveExample.vue:FTableAddRemoveExample-8b0aa7.js
import { defineComponent as _defineComponent } from "vue";
import { ref, useTemplateRef } from "vue";
import { assertRef } from "@fkui/logic";
import {
  FButton,
  FTable,
  defineTableColumns,
  removeDatasetRows,
  useDatasetRef,
  useModal
} from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableAddRemoveExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const tableRef = useTemplateRef("table");
    const { confirmModal } = useModal();
    const rows = useDatasetRef([
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
        land: "Sverige"
      },
      {
        namn: "P\xE4ron",
        land: "Italien"
      }
    ]);
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
        type: "button",
        header: "\xC5tg\xE4rd",
        icon: "trashcan",
        text() {
          return "Ta bort";
        },
        onClick: onRemoveRow
      }
    ]);
    const nextFruit = ref(5);
    function onAddRow() {
      rows.value.push({
        namn: `Frukt ${nextFruit.value++}`,
        land: "Ok\xE4nt"
      });
    }
    async function onRemoveRow(row) {
      assertRef(tableRef);
      const confirmed = await confirmModal({
        heading: "Ta bort frukt",
        content: `\xC4r du s\xE4ker att du vill ta bort ${row.namn}?`,
        confirm: "Ja, ta bort",
        dismiss: "Nej, beh\xE5ll"
      });
      if (confirmed) {
        tableRef.value.withTabstopBehaviour("row-removal", () => {
          removeDatasetRows(rows, row);
        });
      }
    }
    const __returned__ = { tableRef, confirmModal, rows, columns, nextFruit, onAddRow, onRemoveRow, get FButton() {
      return FButton;
    }, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createVNode($setup["FTable"], {
        ref: "table",
        rows: $setup.rows,
        columns: $setup.columns
      }, {
        caption: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            "L\xE4gg till och ta bort rad i tabell",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["rows", "columns"]),
      _createVNode($setup["FButton"], {
        variant: "secondary",
        "data-test": "add-row-button",
        onClick: $setup.onAddRow
      }, {
        default: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " L\xE4gg till rad ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      })
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-8b0aa7"
});
export {
  render
};
