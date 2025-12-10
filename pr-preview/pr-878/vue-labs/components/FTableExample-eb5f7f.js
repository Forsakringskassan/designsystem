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

// virtual-entry:virtual:src/components/FTable/examples/FTableExample.vue:FTableExample-eb5f7f.js
import { defineComponent as _defineComponent } from "vue";
import { h as h2, ref, useTemplateRef } from "vue";
import { assertRef, formatNumber } from "@fkui/logic";
import { FSortFilterDataset } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const tableRef = useTemplateRef("table");
    const selectFieldOptions = ["Hund", "Katt", "Hamster", "Papegoja", "Spindel", "Guldfisk"];
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Oformaterad text",
        value(row) {
          return String(row.antal);
        }
      },
      {
        type: "checkbox",
        header: "Kryssruta",
        key: "aktiv",
        label: (row) => `V\xE4lj rad ${row.id}`,
        editable: true
      },
      {
        type: "text",
        header: "Formatterad text",
        label: (row) => `Text f\xF6r rad ${row.id}`,
        value(row) {
          return formatNumber(row.antal) ?? "";
        },
        editable: true
      },
      {
        type: "text",
        header: "Redigerbar text",
        editable: true,
        key: "level",
        label: (row) => `Text f\xF6r rad ${row.id}`,
        value(row) {
          return row.level;
        },
        update(row, newValue) {
          row.level = newValue;
        },
        validation: {
          required: {},
          maxLength: { length: 5 }
        }
      },
      {
        type: "button",
        header: "Knapp",
        icon: "trashcan",
        value(row) {
          return `Ta bort ${row.id}`;
        },
        onClick: onRemoveRow
      },
      {
        header: "L\xE4nk",
        type: "anchor",
        href: "#",
        value() {
          return "L\xE4nktext";
        }
      },
      {
        header: "Dropplista",
        type: "select",
        key: "animal",
        label: (row) => `Djur f\xF6r rad ${row.id}`,
        options: selectFieldOptions,
        editable: true
      },
      {
        header: "Render function",
        render() {
          return h2("td", { id: "foo", class: "bar" }, ["\u{1F47B}"]);
        }
      }
      // {
      //     header: "Custom component",
      //     type: "render",
      //     render() {
      //         return XTableChip;
      //     },
      // },
    ]);
    const rows = ref([
      {
        id: "1",
        animal: "Katt",
        level: "F\xF6r\xE4ldrapenning",
        start: "2022-04-11",
        end: "2022-04-20",
        antal: "10000",
        aktiv: false,
        expandableRows: [
          {
            id: "1a",
            level: "Sjukpenningsniv\xE5",
            start: "2022-04-18",
            end: "2022-04-20",
            antal: "30000"
          },
          {
            id: "1b",
            level: "L\xE4gstaniv\xE5",
            start: "2022-04-16",
            end: "2022-04-17",
            antal: "20000"
          },
          {
            id: "1c",
            level: "Sjukpenningsniv\xE5",
            start: "2022-04-11",
            end: "2022-04-15",
            antal: "50000"
          }
        ],
        expandableContent: [
          {
            id: "1a",
            content: "Anledning: Tar hand om barnet"
          }
        ]
      },
      {
        id: "2",
        animal: "Spindel",
        level: "Tillf\xE4llig f\xF6r\xE4ldrapenning",
        start: "2022-05-02",
        end: "2022-05-04",
        antal: "30000",
        aktiv: false,
        expandableRows: [
          {
            id: "2a",
            level: "Heldag",
            start: "2022-05-02",
            end: "2022-05-04",
            antal: "30000"
          }
        ],
        expandableContent: [
          {
            id: "2a",
            content: "Anledning: Tar hand om barnet"
          }
        ]
      },
      {
        id: "3",
        animal: "Hamster",
        level: "F\xF6r\xE4ldrapenning",
        start: "2022-05-16",
        end: "2022-05-27",
        antal: "11000",
        aktiv: true,
        expandableRows: [
          {
            id: "3a",
            level: "Sjukpenningsniv\xE5",
            start: "2022-05-23",
            end: "2022-05-27",
            antal: "40000"
          },
          {
            id: "3b",
            level: "L\xE4gstaniv\xE5",
            start: "2022-05-21",
            end: "2022-05-22",
            antal: "20000"
          },
          {
            id: "3c",
            level: "Sjukpenningsniv\xE5",
            start: "2022-05-16",
            end: "2022-05-20",
            antal: "50000"
          }
        ],
        expandableContent: [
          {
            id: "3a",
            content: "Anledning: Tar hand om barnet"
          }
        ]
      }
    ]);
    function hasKey(column) {
      return Boolean("key" in column && column.key);
    }
    const sortableAttributes = Object.fromEntries(
      columns.filter(hasKey).map((it) => [it.key, it.header])
    );
    const mySelectedRows = ref([rows.value[0]]);
    function onAddRow() {
      rows.value.push({
        id: String(rows.value.length + 1),
        animal: "Katt",
        level: "F\xF6r\xE4ldrapenning",
        start: "2022-04-11",
        end: "2022-04-20",
        antal: "10000",
        aktiv: false
      });
    }
    function onRemoveRow(row) {
      assertRef(tableRef);
      tableRef.value.withTabstopBehaviour("row-removal", () => {
        rows.value.splice(rows.value.indexOf(row), 1);
      });
    }
    function onRemoveSelectedRows() {
      rows.value = rows.value.filter((row) => !mySelectedRows.value.includes(row));
    }
    const __returned__ = { tableRef, selectFieldOptions, columns, rows, hasKey, sortableAttributes, mySelectedRows, onAddRow, onRemoveRow, onRemoveSelectedRows, get FSortFilterDataset() {
      return FSortFilterDataset;
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
      _createElementVNode("button", {
        type: "button",
        class: "button button--secondary",
        onClick: $setup.onRemoveSelectedRows
      }, " Ta bort markerade rader "),
      _createVNode($setup["FSortFilterDataset"], {
        data: $setup.rows,
        "sortable-attributes": $setup.sortableAttributes
      }, {
        default: _withCtx(({ sortFilterResult }) => [
          _createVNode($setup["FTable"], {
            ref: "table",
            "selected-rows": $setup.mySelectedRows,
            "onUpdate:selectedRows": _cache[0] || (_cache[0] = ($event) => $setup.mySelectedRows = $event),
            rows: sortFilterResult,
            columns: $setup.columns,
            "key-attribute": "id",
            striped: "",
            selectable: "multi"
          }, {
            footer: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                "Footer",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["selected-rows", "rows", "columns"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["data", "sortable-attributes"]),
      _createElementVNode("button", {
        type: "button",
        class: "button button--secondary",
        onClick: $setup.onAddRow
      }, "L\xE4gg till rad")
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-eb5f7f"
});
export {
  render
};
