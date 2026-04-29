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

// virtual-entry:virtual:packages/vue/src/components/FTable/examples/FTableInputFieldsExample.vue:FTableInputFieldsExample-4eecd0.js
import { defineComponent as _defineComponent } from "vue";
import { computed } from "vue";
import { ValidationService } from "@fkui/logic";
import { FButton, useDatasetRef } from "@fkui/vue";
import { FTable, defineTableColumns } from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableInputFieldsExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const columns1 = defineTableColumns([
      {
        type: "text",
        header: "Text",
        key: "text",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:personnummer",
        header: "Pnr",
        key: "pnr",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:bankAccountNumber",
        header: "Kontonr",
        key: "bankAccountNumber",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:bankgiro",
        header: "Bankgiro",
        key: "bankgiro",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:clearingNumber",
        header: "Clearingnr",
        key: "clearingNumber",
        editable: true,
        label() {
          return "Label";
        }
      }
    ]);
    const columns2 = defineTableColumns([
      {
        type: "text:currency",
        header: "Valuta",
        key: "currency",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:date",
        header: "Datum",
        key: "date",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:number",
        decimals: 3,
        header: "Nummer, tre decimaler",
        key: "number",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:percent",
        decimals: 2,
        header: "% tv\xE5 decimaler",
        key: "percent",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:email",
        header: "Epost",
        key: "epost",
        editable: true,
        label() {
          return "Label";
        }
      }
    ]);
    const columns3 = defineTableColumns([
      {
        type: "text:organisationsnummer",
        header: "Orgnr",
        key: "orgnr",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:phoneNumber",
        header: "Tele",
        key: "tele",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:postalCode",
        header: "Postnr",
        key: "postnr",
        editable: true,
        label() {
          return "Label";
        }
      },
      {
        type: "text:plusgiro",
        header: "Plusgiro",
        key: "plusgiro",
        editable: true,
        label() {
          return "Label";
        }
      }
    ]);
    const rows = useDatasetRef([
      {
        id: "1",
        text: "aaa",
        pnr: "19120211-9150",
        bankAccountNumber: "12345678",
        bankgiro: "9999996",
        clearingNumber: "5678",
        date: "2023-06-15",
        currency: 3453455,
        number: 5.4,
        percent: 9.987,
        epost: "a.b@example.net",
        orgnr: "9999999999",
        tele: "12345678901234567",
        postnr: "37324",
        plusgiro: "11111119"
      },
      {
        id: "2",
        text: "bbb",
        pnr: "201812312385",
        bankAccountNumber: "0012345678",
        bankgiro: "999-9996",
        clearingNumber: "56781",
        currency: 24233,
        date: "2024-01-20",
        number: 5.5,
        percent: 19.987,
        epost: "a.b@example.net",
        orgnr: "9999999999",
        tele: "12345678901234567",
        postnr: "39359",
        plusgiro: "11111119"
      },
      {
        id: "3",
        text: "ccc",
        pnr: "197006121144",
        bankAccountNumber: "123456",
        bankgiro: "999-9996",
        clearingNumber: "5678-1",
        currency: 234623546,
        date: "2022-11-05",
        number: 5.55,
        percent: 3.1,
        epost: "a.b@example.net",
        orgnr: "9999999999",
        tele: "12345678901234567",
        postnr: "37332",
        plusgiro: "111112"
      }
    ]);
    const sum = computed(() => {
      return rows.value.reduce((sum2, row) => {
        if (typeof row.number === "number") {
          return sum2 + row.number;
        } else {
          return sum2;
        }
      }, 0);
    });
    function validataAll() {
      ValidationService.validateAllElements("all");
    }
    const __returned__ = { columns1, columns2, columns3, rows, sum, validataAll, get FButton() {
      return FButton;
    }, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { id: "all" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createVNode($setup["FButton"], {
        variant: "secondary",
        onClick: $setup.validataAll
      }, {
        default: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            " Interagerbart element f\xF6re ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _createElementVNode("div", _hoisted_1, [
        _createVNode($setup["FTable"], {
          rows: $setup.rows,
          columns: $setup.columns1,
          "key-attribute": "id",
          striped: ""
        }, null, 8, ["rows", "columns"]),
        _createVNode($setup["FTable"], {
          rows: $setup.rows,
          columns: $setup.columns2,
          "key-attribute": "id",
          striped: ""
        }, null, 8, ["rows", "columns"]),
        _createVNode($setup["FTable"], {
          rows: $setup.rows,
          columns: $setup.columns3,
          "key-attribute": "id",
          striped: ""
        }, null, 8, ["rows", "columns"])
      ]),
      _createElementVNode(
        "pre",
        null,
        "Summa: " + _toDisplayString({ sum: $setup.sum }),
        1
        /* TEXT */
      ),
      _createElementVNode(
        "h3",
        null,
        "Rows (" + _toDisplayString($setup.rows.length) + " items):",
        1
        /* TEXT */
      ),
      _createElementVNode(
        "pre",
        null,
        _toDisplayString($setup.rows),
        1
        /* TEXT */
      ),
      _createVNode($setup["FButton"], {
        variant: "secondary",
        onClick: $setup.validataAll
      }, {
        default: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " Interagerbart element efter ",
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
  selector: "#example-4eecd0"
});
export {
  render
};
