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

// virtual-entry:virtual:packages/vue/src/components/FTable/docs/FTableCrudEdit.vue:FTableCrudEdit-a41df5.js
import { defineComponent as _defineComponent } from "vue";
import {
  FCrudDataset,
  FCurrencyTextField,
  FSelectField,
  FTable,
  defineTableColumns,
  useDatasetRef
} from "@fkui/vue";
import { createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, createTextVNode as _createTextVNode, renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableCrudEdit",
  setup(__props, { expose: __expose }) {
    __expose();
    const lander = [
      "",
      "Colombia",
      "Costa Rica",
      "Dominikanska republiken",
      "Ecuador",
      "Frankrike",
      "Italien",
      "Spanien",
      "Sverige",
      "Sydafrika"
    ];
    function getColumns(updateItem, deleteItem) {
      return defineTableColumns([
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
          type: "text:currency",
          header: "Pris per kilo",
          key: "pris"
        },
        {
          type: "menu",
          header: "\xC5tg\xE4rder",
          text(row) {
            return `Visa \xE5tg\xE4rder f\xF6r ${row.namn}`;
          },
          actions: [
            {
              label: "\xC4ndra",
              icon: "pen",
              onClick: updateItem
            },
            {
              label: "Ta bort",
              icon: "trashcan",
              onClick: deleteItem
            }
          ]
        }
      ]);
    }
    const rows = useDatasetRef([
      {
        namn: "Apelsin",
        land: "Spanien",
        pris: 30
      },
      {
        namn: "Banan",
        land: "Equador",
        pris: 15
      },
      {
        namn: "\xC4pple",
        land: "Sverige",
        pris: 22
      }
    ]);
    const __returned__ = { lander, getColumns, rows, get FCrudDataset() {
      return FCrudDataset;
    }, get FCurrencyTextField() {
      return FCurrencyTextField;
    }, get FSelectField() {
      return FSelectField;
    }, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FCrudDataset"], {
    modelValue: $setup.rows,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.rows = $event)
  }, {
    default: _withCtx(({ updateItem, deleteItem }) => [
      _createVNode($setup["FTable"], {
        ref: "table",
        rows: $setup.rows,
        columns: $setup.getColumns(updateItem, deleteItem),
        striped: ""
      }, {
        caption: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createElementVNode(
            "span",
            { class: "sr-only" },
            "Redigera inneh\xE5ll-exempel",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["rows", "columns"])
    ]),
    modify: _withCtx(({ item }) => [
      _createVNode($setup["FSelectField"], {
        modelValue: item.land,
        "onUpdate:modelValue": ($event) => item.land = $event
      }, {
        label: _withCtx(() => [..._cache[2] || (_cache[2] = [
          _createTextVNode(
            "Land",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(() => [
          _cache[3] || (_cache[3] = _createElementVNode(
            "option",
            {
              disabled: "",
              hidden: "",
              value: ""
            },
            "V\xE4lj..",
            -1
            /* CACHED */
          )),
          (_openBlock(), _createElementBlock(
            _Fragment,
            null,
            _renderList($setup.lander, (land) => {
              return _createElementVNode(
                "option",
                { key: land },
                _toDisplayString(land),
                1
                /* TEXT */
              );
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onUpdate:modelValue"]),
      _createVNode($setup["FCurrencyTextField"], {
        modelValue: item.pris,
        "onUpdate:modelValue": ($event) => item.pris = $event
      }, {
        default: _withCtx(() => [..._cache[4] || (_cache[4] = [
          _createTextVNode(
            " Pris ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "onUpdate:modelValue"])
    ]),
    delete: _withCtx(({ item }) => [
      _createTextVNode(
        ' Vill du verkligen ta bort "' + _toDisplayString(item.namn) + '"? ',
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["modelValue"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-a41df5"
});
export {
  render
};
