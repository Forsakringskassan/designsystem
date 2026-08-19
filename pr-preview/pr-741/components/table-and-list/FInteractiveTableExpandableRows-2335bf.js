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

// virtual-entry:virtual:packages/vue/src/components/FInteractiveTable/examples/FInteractiveTableExpandableRows.vue:FInteractiveTableExpandableRows-2335bf.js
import { defineComponent as _defineComponent } from "vue";
import { FInteractiveTable, FTableColumn } from "@fkui/vue";

// packages/vue/src/components/FInteractiveTable/examples/expandable-rows-data.ts
var rows = [
  {
    id: "1",
    name: "Utbetalning",
    date: "2023-09-27",
    sum: 1200,
    myExpandableRow: [
      {
        id: "1a",
        name: "Barnbidrag",
        date: "2023-09-25",
        sum: 200
      },
      {
        id: "1b",
        name: "\xD6vrig ers\xE4ttning",
        date: "2023-09-27",
        sum: 1e3
      }
    ]
  },
  {
    id: "2",
    name: "Utbetalning",
    date: "2023-12-25",
    sum: 1e3,
    myExpandableRow: [
      {
        id: "2a",
        name: "Barnbidrag",
        date: "2023-12-25",
        sum: 1e3
      }
    ]
  }
];
var expandable_rows_data_default = rows;

// virtual-entry:virtual:packages/vue/src/components/FInteractiveTable/examples/FInteractiveTableExpandableRows.vue:FInteractiveTableExpandableRows-2335bf.js
import { createTextVNode as _createTextVNode, toDisplayString as _toDisplayString, withCtx as _withCtx, createVNode as _createVNode, resolveDirective as _resolveDirective, createElementVNode as _createElementVNode, withDirectives as _withDirectives, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FInteractiveTableExpandableRows",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FInteractiveTable() {
      return FInteractiveTable;
    }, get FTableColumn() {
      return FTableColumn;
    }, get rows() {
      return expandable_rows_data_default;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_format = _resolveDirective("format");
  return _openBlock(), _createBlock($setup["FInteractiveTable"], {
    rows: $setup.rows,
    "key-attribute": "id",
    "expandable-attribute": "myExpandableRow"
  }, {
    caption: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createTextVNode(
        " Expanderbara rader ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(({ row }) => [
      _createVNode(
        $setup["FTableColumn"],
        { title: "Ers\xE4ttning" },
        {
          default: _withCtx(() => [
            _createTextVNode(
              _toDisplayString(row.name),
              1
              /* TEXT */
            )
          ]),
          _: 2
          /* DYNAMIC */
        },
        1024
        /* DYNAMIC_SLOTS */
      ),
      _createVNode(
        $setup["FTableColumn"],
        {
          title: "Id",
          shrink: ""
        },
        {
          default: _withCtx(() => [
            _createTextVNode(
              _toDisplayString(row.id),
              1
              /* TEXT */
            )
          ]),
          _: 2
          /* DYNAMIC */
        },
        1024
        /* DYNAMIC_SLOTS */
      ),
      _createVNode(
        $setup["FTableColumn"],
        {
          title: "Datum",
          type: "date"
        },
        {
          default: _withCtx(() => [
            _withDirectives(_createElementVNode(
              "span",
              null,
              null,
              512
              /* NEED_PATCH */
            ), [
              [_directive_format, row.date, "date"]
            ])
          ]),
          _: 2
          /* DYNAMIC */
        },
        1024
        /* DYNAMIC_SLOTS */
      ),
      _createVNode(
        $setup["FTableColumn"],
        {
          title: "Summa",
          type: "numeric"
        },
        {
          default: _withCtx(() => [
            _withDirectives(_createElementVNode(
              "span",
              null,
              null,
              512
              /* NEED_PATCH */
            ), [
              [_directive_format, row.sum, "number"]
            ]),
            _cache[1] || (_cache[1] = _createTextVNode(
              " kronor ",
              -1
              /* CACHED */
            ))
          ]),
          _: 2
          /* DYNAMIC */
        },
        1024
        /* DYNAMIC_SLOTS */
      )
    ]),
    expandable: _withCtx(({ expandableRow }) => [
      _createTextVNode(
        ' Anpassat inneh\xE5ll f\xF6r expanderad rad "' + _toDisplayString(expandableRow.name) + '". ',
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  }, 8, ["rows"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-2335bf"
});
export {
  render
};
