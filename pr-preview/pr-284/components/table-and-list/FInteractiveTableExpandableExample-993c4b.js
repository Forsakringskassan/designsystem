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
  setRunningContext(app);
  app.use(ErrorPlugin, {
    captureWarnings: true,
    logToConsole: true
  });
  app.use(ValidationPlugin);
  app.use(TestPlugin);
  app.use(TranslationPlugin);
  app.mount(selector);
}

// virtual-entry:./packages/vue/src/components/FInteractiveTable/examples/FInteractiveTableExpandableExample.vue
import { FInteractiveTable, FTableColumn } from "@fkui/vue";
import { createTextVNode as _createTextVNode, toDisplayString as _toDisplayString, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = {
  __name: "FInteractiveTableExpandableExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = [
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
    const __returned__ = { rows, get FInteractiveTable() {
      return FInteractiveTable;
    }, get FTableColumn() {
      return FTableColumn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FInteractiveTable"], {
    rows: $setup.rows,
    "expandable-attribute": "myExpandableRow",
    "key-attribute": "id"
  }, {
    caption: _withCtx(() => _cache[0] || (_cache[0] = [
      _createTextVNode(" Expanderbara rader ")
    ])),
    default: _withCtx(({ row }) => [
      _createVNode(
        $setup["FTableColumn"],
        {
          name: "compensation",
          title: "Ers\xE4ttning"
        },
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
          name: "id",
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
          name: "date",
          title: "Datum",
          type: "date"
        },
        {
          default: _withCtx(() => [
            _createTextVNode(
              _toDisplayString(row.date),
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
          name: "amount",
          title: "Summa",
          type: "numeric"
        },
        {
          default: _withCtx(() => [
            _createTextVNode(
              _toDisplayString(row.sum) + " kronor ",
              1
              /* TEXT */
            )
          ]),
          _: 2
          /* DYNAMIC */
        },
        1024
        /* DYNAMIC_SLOTS */
      )
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#FInteractiveTableExpandableExample"
});
export {
  render
};
