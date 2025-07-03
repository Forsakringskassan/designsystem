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

// virtual-entry:virtual:docs/styles/examples/DensityExample.vue:DensityExample-dbe606.js
import { defineComponent } from "vue";
import { FDataTable, FTableColumn } from "@fkui/vue";
import { createTextVNode as _createTextVNode, toDisplayString as _toDisplayString, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  components: { FDataTable, FTableColumn },
  data() {
    return {
      selectedItems: [],
      items: [
        { id: "1", date: "2022-02-01", amount: "2 300" },
        { id: "2", date: "2024-04-20", amount: "5 250" },
        { id: "3", date: "2024-05-01", amount: "2 100" }
      ]
    };
  }
});
var _hoisted_1 = { class: "row" };
var _hoisted_2 = { class: "col col--md-6 density-default" };
var _hoisted_3 = { class: "col col--md-6 density-dense" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_table_column = _resolveComponent("f-table-column");
  const _component_f_data_table = _resolveComponent("f-data-table");
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_f_data_table, {
        rows: _ctx.items,
        "key-attribute": "id"
      }, {
        caption: _withCtx(() => _cache[0] || (_cache[0] = [
          _createTextVNode(" Tabell med standard densitet ")
        ])),
        default: _withCtx(({ row }) => [
          _createVNode(
            _component_f_table_column,
            {
              title: "Datum",
              type: "text"
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
            _component_f_table_column,
            {
              title: "Belopp",
              type: "numeric"
            },
            {
              default: _withCtx(() => [
                _createTextVNode(
                  _toDisplayString(row.amount),
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
      }, 8, ["rows"])
    ]),
    _createElementVNode("div", _hoisted_3, [
      _createVNode(_component_f_data_table, {
        rows: _ctx.items,
        "key-attribute": "id"
      }, {
        caption: _withCtx(() => _cache[1] || (_cache[1] = [
          _createTextVNode(" Tabell med kompakt densitet ")
        ])),
        default: _withCtx(({ row }) => [
          _createVNode(
            _component_f_table_column,
            {
              title: "Datum",
              type: "text"
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
            _component_f_table_column,
            {
              title: "Belopp",
              type: "numeric"
            },
            {
              default: _withCtx(() => [
                _createTextVNode(
                  _toDisplayString(row.amount),
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
      }, 8, ["rows"])
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-dbe606"
});
export {
  render
};
