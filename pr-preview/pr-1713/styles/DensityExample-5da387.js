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

// virtual-entry:virtual:docs/styles/examples/DensityExample.vue:DensityExample-5da387.js
import { defineComponent } from "vue";
import { FTable, defineTableColumns, useDatasetRef } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var rows = useDatasetRef([
  { id: "1", date: "2022-02-01", amount: "2 300" },
  { id: "2", date: "2024-04-20", amount: "5 250" },
  { id: "3", date: "2024-05-01", amount: "2 100" }
]);
var columns = defineTableColumns([
  { type: "text:date", header: "Datum", key: "date" },
  { type: "text:number", header: "Belopp", key: "amount" }
]);
var exampleComponent = defineComponent({
  components: { FTable },
  setup() {
    return { rows, columns };
  },
  data() {
    return {};
  }
});
var _hoisted_1 = { class: "row" };
var _hoisted_2 = { class: "col col--md-6 density-default" };
var _hoisted_3 = { class: "col col--md-6 density-dense" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_table = _resolveComponent("f-table");
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_f_table, {
        rows: _ctx.rows,
        columns: _ctx.columns
      }, {
        caption: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            " Tabell med standard densitet ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["rows", "columns"])
    ]),
    _createElementVNode("div", _hoisted_3, [
      _createVNode(_component_f_table, {
        rows: _ctx.rows,
        columns: _ctx.columns
      }, {
        caption: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " Tabell med kompakt densitet ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }, 8, ["rows", "columns"])
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-5da387"
});
export {
  render
};
