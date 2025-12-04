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

// virtual-entry:virtual:src/components/FTable/examples/FTableRowHeaderExample.vue:FTableRowHeaderExample-d2ccb5.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { formatNumber } from "@fkui/logic";
import { FSortFilterDataset } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue-labs";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableRowHeaderExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const selectFieldOptions = ["Hund", "Katt", "Hamster", "Papegoja", "Spindel", "Guldfisk"];
    const columns = defineTableColumns([
      {
        type: "rowheader",
        header: "Radrubrik",
        key: "rubrik"
      },
      {
        type: "text",
        header: "Oformaterad text",
        value(row) {
          return row.antal;
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
        description: "Belopp",
        label: (row) => `Text f\xF6r rad ${row.id}`,
        value(row) {
          return formatNumber(row.antal) ?? "";
        },
        editable: true
      },
      {
        type: "text",
        header: "Redigerbar text",
        description: "F\xF6rm\xE5n",
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
      }
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
        rubrik: "Rubrik 1",
        expandableRows: [
          {
            id: "1a",
            level: "Sjukpenningsniv\xE5",
            start: "2022-04-18",
            end: "2022-04-20",
            antal: "30000",
            rubrik: "Rubrik 1,1"
          },
          {
            id: "1b",
            level: "L\xE4gstaniv\xE5",
            start: "2022-04-16",
            end: "2022-04-17",
            antal: "20000",
            rubrik: "Rubrik 1,2"
          },
          {
            id: "1c",
            level: "Sjukpenningsniv\xE5",
            start: "2022-04-11",
            end: "2022-04-15",
            antal: "50000",
            rubrik: "Rubrik 1,3"
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
        rubrik: "Rubrik 2",
        expandableRows: [
          {
            id: "2a",
            level: "Heldag",
            start: "2022-05-02",
            end: "2022-05-04",
            antal: "30000",
            rubrik: "Rubrik 2,1"
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
        rubrik: "Rubrik 3",
        expandableRows: [
          {
            id: "3a",
            level: "Sjukpenningsniv\xE5",
            start: "2022-05-23",
            end: "2022-05-27",
            antal: "40000",
            rubrik: "Rubrik 3,1"
          },
          {
            id: "3b",
            level: "L\xE4gstaniv\xE5",
            start: "2022-05-21",
            end: "2022-05-22",
            antal: "20000",
            rubrik: "Rubrik 3,2"
          },
          {
            id: "3c",
            level: "Sjukpenningsniv\xE5",
            start: "2022-05-16",
            end: "2022-05-20",
            antal: "50000",
            rubrik: "Rubrik 3,3"
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
    const sortableAttributes = Object.fromEntries(
      columns.filter((it) => "key" in it && it.key).map((it) => [it.key, it.header])
    );
    const mySelectedRows = ref([rows.value[0]]);
    function onButtonClick(id) {
      alert(`Du klickade p\xE5 rad med id ${id}`);
    }
    const __returned__ = { selectFieldOptions, columns, rows, sortableAttributes, mySelectedRows, onButtonClick, get FSortFilterDataset() {
      return FSortFilterDataset;
    }, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FSortFilterDataset"], {
    data: $setup.rows,
    "sortable-attributes": $setup.sortableAttributes
  }, {
    default: _withCtx(({ sortFilterResult }) => [
      _createVNode($setup["FTable"], {
        "selected-rows": $setup.mySelectedRows,
        "onUpdate:selectedRows": _cache[0] || (_cache[0] = ($event) => $setup.mySelectedRows = $event),
        rows: sortFilterResult,
        columns: $setup.columns,
        "key-attribute": "id",
        striped: "",
        selectable: "multi",
        "expandable-attribute": "expandableRows"
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
  }, 8, ["data", "sortable-attributes"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-d2ccb5"
});
export {
  render
};
