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

// virtual-entry:virtual:src/components/FTable/examples/FTableInputFieldsExample.vue:FTableInputFieldsExample-5aa059.js
import { defineComponent as _defineComponent } from "vue";
import { computed, ref } from "vue";
import { ValidationService } from "@fkui/logic";
import { FTable, defineTableColumns } from "@fkui/vue-labs";
import { createElementVNode as _createElementVNode, createVNode as _createVNode, toDisplayString as _toDisplayString, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableInputFieldsExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const columns = defineTableColumns([
      {
        type: "text",
        header: "Text",
        key: "text",
        editable: true
      },
      {
        type: "text:personnummer",
        header: "Pnr",
        key: "pnr",
        editable: true
      },
      {
        type: "text:bankAccountNumber",
        header: "Kontonr",
        key: "bankAccountNumber",
        editable: true
      },
      {
        type: "text:bankgiro",
        header: "Bankgiro",
        key: "bankgiro",
        editable: true
      },
      {
        type: "text:clearingNumber",
        header: "Clearingnr",
        key: "clearingNumber",
        editable: true
      },
      {
        type: "text:currency",
        header: "Valuta",
        key: "currency",
        editable: true
      },
      {
        type: "text:number",
        decimals: 3,
        header: "Nummer, tre decimaler",
        key: "number",
        editable: true
      },
      {
        type: "text:percent",
        decimals: 2,
        header: "% tv\xE5 decimaler",
        key: "percent",
        editable: true
      },
      {
        type: "text:email",
        header: "Epost",
        key: "epost",
        editable: true
      },
      {
        type: "text:organisationsnummer",
        header: "Orgnr",
        key: "orgnr",
        editable: true
      },
      {
        type: "text:phoneNumber",
        header: "Tele",
        key: "tele",
        editable: true
      },
      {
        type: "text:postalCode",
        header: "Postnr",
        key: "postnr",
        editable: true
      },
      {
        type: "text:plusgiro",
        header: "Plusgiro",
        key: "plusgiro",
        editable: true
      }
    ]);
    const rows = ref([
      {
        id: "1",
        text: "aaa",
        pnr: "19120211-9150",
        bankAccountNumber: "12345678",
        bankgiro: "9999996",
        clearingNumber: "5678",
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
    const __returned__ = { columns, rows, sum, validataAll, get FTable() {
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
      _createElementVNode("button", {
        type: "button",
        class: "button button--secondary",
        onClick: $setup.validataAll
      }, " Interagerbart element f\xF6re "),
      _createElementVNode("div", _hoisted_1, [
        _createVNode($setup["FTable"], {
          rows: $setup.rows,
          columns: $setup.columns.slice(0, 5),
          "key-attribute": "id",
          striped: ""
        }, null, 8, ["rows", "columns"]),
        _createVNode($setup["FTable"], {
          rows: $setup.rows,
          columns: $setup.columns.slice(5, 10),
          "key-attribute": "id",
          striped: ""
        }, null, 8, ["rows", "columns"]),
        _createVNode($setup["FTable"], {
          rows: $setup.rows,
          columns: $setup.columns.slice(10),
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
      _createElementVNode("button", {
        type: "button",
        class: "button button--secondary",
        onClick: $setup.validataAll
      }, " Interagerbart element efter ")
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-5aa059"
});
export {
  render
};
