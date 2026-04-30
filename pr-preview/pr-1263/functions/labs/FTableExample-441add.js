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

// virtual-entry:virtual:packages/vue/src/components/FTable/examples/FTableExample.vue:FTableExample-441add.js
import { defineComponent as _defineComponent } from "vue";
import { h as h2, ref, useTemplateRef } from "vue";
import { assertRef, formatNumber } from "@fkui/logic";
import { FButton, FSortFilterDataset, useDatasetRef } from "@fkui/vue";
import {
  FTable,
  defineTableColumns,
  getTableSortableAttributes,
  removeDatasetRows
} from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const tableRef = useTemplateRef("table");
    const selectFieldOptions = ["Hund", "Katt", "Hamster", "Papegoja", "Spindel", "Guldfisk"];
    let idCounter = 1;
    const oformateradTextKolumnSynlig = ref(true);
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Oformaterad text",
        value(row) {
          return String(row.antal);
        },
        enabled: oformateradTextKolumnSynlig
      },
      {
        type: "checkbox",
        header: "Kryssruta",
        key: "aktiv",
        size: "shrink",
        label: (row) => `V\xE4lj rad ${row.id}`
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
        size: "shrink",
        text(row) {
          return `Ta bort ${row.id}`;
        },
        onClick: (row) => {
          onRemoveRow(row);
        }
      },
      {
        header: "L\xE4nk",
        type: "anchor",
        href: "#",
        text() {
          return "L\xE4nktext";
        }
      },
      {
        header: "Dropplista",
        type: "select",
        key: "animal",
        label: (row) => `Djur f\xF6r rad ${row.id}`,
        options: selectFieldOptions
      },
      {
        header: "Render function",
        render(row) {
          return h2("td", { id: `foo-${row.id}`, class: "bar" }, ["\u{1F47B}"]);
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
    const rows = useDatasetRef(
      [
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
      ],
      "expandableRows"
    );
    const sortableAttributes = getTableSortableAttributes(columns);
    const mySelectedRows = ref([rows.value[0]]);
    const nextId = ref(4);
    function onAddRow() {
      const id = nextId.value;
      nextId.value += 1;
      rows.value.push({
        id: `ny-rad-${idCounter++}`,
        animal: "Katt",
        level: "F\xF6r\xE4ldrapenning",
        start: "2022-04-11",
        end: "2022-04-20",
        antal: String(1e4 + id),
        aktiv: false
      });
    }
    function onRemoveRow(row) {
      assertRef(tableRef);
      tableRef.value.withTabstopBehaviour("row-removal", () => {
        removeDatasetRows(rows, row);
      });
    }
    function onRemoveSelectedRows() {
      removeDatasetRows(rows, mySelectedRows);
    }
    const __returned__ = { tableRef, selectFieldOptions, get idCounter() {
      return idCounter;
    }, set idCounter(v) {
      idCounter = v;
    }, oformateradTextKolumnSynlig, columns, rows, sortableAttributes, mySelectedRows, nextId, onAddRow, onRemoveRow, onRemoveSelectedRows, get FButton() {
      return FButton;
    }, get FSortFilterDataset() {
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
      _createVNode($setup["FButton"], {
        variant: "secondary",
        onClick: $setup.onRemoveSelectedRows
      }, {
        default: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createTextVNode(
            " Ta bort markerade rader ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
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
            selectable: "multi",
            "expandable-attribute": "expandableRows"
          }, {
            caption: _withCtx(() => [..._cache[3] || (_cache[3] = [
              _createTextVNode(
                "Tabell",
                -1
                /* CACHED */
              )
            ])]),
            footer: _withCtx(() => [..._cache[4] || (_cache[4] = [
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
      _createVNode($setup["FButton"], {
        variant: "secondary",
        onClick: $setup.onAddRow
      }, {
        default: _withCtx(() => [..._cache[5] || (_cache[5] = [
          _createTextVNode(
            "L\xE4gg till rad",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _createVNode($setup["FButton"], {
        variant: "secondary",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.oformateradTextKolumnSynlig = !$setup.oformateradTextKolumnSynlig)
      }, {
        default: _withCtx(() => [..._cache[6] || (_cache[6] = [
          _createTextVNode(
            ' D\xF6lj/visa "Oformatterad text" ',
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
  selector: "#example-441add"
});
export {
  render
};
