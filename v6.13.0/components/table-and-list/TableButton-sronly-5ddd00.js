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

// virtual-entry:virtual:docs/components/table-and-list/examples/TableButton-sronly.vue:TableButton-sronly-5ddd00.js
import { defineComponent as _defineComponent } from "vue";
import { FInteractiveTable, FTableButton, FTableColumn } from "@fkui/vue";

// docs/components/table-and-list/examples/table-data.ts
var table_data_default = [
  { id: 1, foo: "Text 1A", bar: "Text 1B", baz: "Text 1C" },
  { id: 2, foo: "Text 2A", bar: "Text 2B", baz: "Text 2C" },
  { id: 3, foo: "Text 3A", bar: "Text 3B", baz: "Text 3C" }
];

// virtual-entry:virtual:docs/components/table-and-list/examples/TableButton-sronly.vue:TableButton-sronly-5ddd00.js
import { createTextVNode as _createTextVNode, toDisplayString as _toDisplayString, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "TableButton-sronly",
  setup(__props, { expose: __expose }) {
    __expose();
    function modifyRow(_item) {
    }
    const __returned__ = { modifyRow, get FInteractiveTable() {
      return FInteractiveTable;
    }, get FTableButton() {
      return FTableButton;
    }, get FTableColumn() {
      return FTableColumn;
    }, get rows() {
      return table_data_default;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "sr-only" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FInteractiveTable"], { rows: $setup.rows }, {
    caption: _withCtx(() => _cache[0] || (_cache[0] = [
      _createTextVNode(" Tabell exempel ")
    ])),
    default: _withCtx(({ row }) => [
      _createVNode(
        $setup["FTableColumn"],
        {
          title: "Kolumn A",
          type: "text"
        },
        {
          default: _withCtx(() => [
            _createTextVNode(
              _toDisplayString(row.foo),
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
          title: "Kolumn B",
          type: "text"
        },
        {
          default: _withCtx(() => [
            _createTextVNode(
              _toDisplayString(row.bar),
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
          title: "Kolumn C",
          type: "text"
        },
        {
          default: _withCtx(() => [
            _createTextVNode(
              _toDisplayString(row.baz),
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
          title: "\xC5tg\xE4rder",
          type: "action",
          shrink: ""
        },
        {
          default: _withCtx(() => [
            _createVNode($setup["FTableButton"], {
              icon: "pen",
              label: "",
              onClick: ($event) => $setup.modifyRow(row)
            }, {
              default: _withCtx(() => [
                _cache[1] || (_cache[1] = _createTextVNode(" Redigera ")),
                _createElementVNode(
                  "span",
                  _hoisted_1,
                  "rad " + _toDisplayString(row.id),
                  1
                  /* TEXT */
                )
              ]),
              _: 2,
              __: [1]
            }, 1032, ["onClick"])
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
  }, 8, ["rows"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-5ddd00"
});
export {
  render
};
