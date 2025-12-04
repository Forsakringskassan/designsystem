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

// virtual-entry:virtual:src/components/FTable/examples/FTableExpandableRows.vue:FTableExpandableRows-631789.js
import { defineComponent as _defineComponent } from "vue";
import { h as h2, ref } from "vue";
import { formatNumber } from "@fkui/logic";
import { FTable, defineTableColumns } from "@fkui/vue-labs";
import { createElementVNode as _createElementVNode, createVNode as _createVNode, toDisplayString as _toDisplayString, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableExpandableRows",
  setup(__props, { expose: __expose }) {
    __expose();
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
        onClick(row) {
          onButtonClick(row.id);
        }
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
        ]
      },
      {
        id: "2",
        animal: "Spindel",
        level: "Tillf\xE4llig f\xF6r\xE4ldrapenning",
        start: "2022-05-02",
        end: "2022-05-04",
        antal: "30000",
        expandableRows: [
          {
            id: "2a",
            level: "Heldag",
            start: "2022-05-02",
            end: "2022-05-04",
            antal: "30000"
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
        ]
      }
    ]);
    function onButtonClick(id) {
      alert(`Du klickade p\xE5 rad med id ${id}`);
    }
    const __returned__ = { selectFieldOptions, columns, rows, onButtonClick, get FTable() {
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
      _cache[0] || (_cache[0] = _createElementVNode(
        "button",
        {
          type: "button",
          class: "button button--secondary"
        },
        "Interagerbart element f\xF6re",
        -1
        /* CACHED */
      )),
      _createVNode($setup["FTable"], {
        rows: $setup.rows,
        columns: $setup.columns,
        "key-attribute": "id",
        striped: "",
        "expandable-attribute": "expandableRows"
      }, null, 8, ["rows", "columns"]),
      _createElementVNode(
        "pre",
        null,
        _toDisplayString($setup.rows),
        1
        /* TEXT */
      ),
      _cache[1] || (_cache[1] = _createElementVNode(
        "button",
        {
          type: "button",
          class: "button button--secondary"
        },
        "Interagerbart element efter",
        -1
        /* CACHED */
      ))
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-631789"
});
export {
  render
};
