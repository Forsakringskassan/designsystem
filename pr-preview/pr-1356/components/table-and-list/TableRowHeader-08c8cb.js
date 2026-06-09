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

// virtual-entry:virtual:docs/components/table-and-list/examples/TableRowHeader.vue:TableRowHeader-08c8cb.js
import { defineComponent as _defineComponent } from "vue";
import { FDataTable, FTableColumn } from "@fkui/vue";
import { createElementVNode as _createElementVNode, resolveDirective as _resolveDirective, createVNode as _createVNode, withDirectives as _withDirectives, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "TableRowHeader",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = [
      { a: "Row 1", b: "Text 1B", c: "Text 1C" },
      { a: "Row 2", b: "Text 2B", c: "Text 2C" },
      { a: "Row 3", b: "Text 3B", c: "Text 3C" }
    ];
    const __returned__ = { rows, get FDataTable() {
      return FDataTable;
    }, get FTableColumn() {
      return FTableColumn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_format = _resolveDirective("format");
  return _openBlock(), _createBlock($setup["FDataTable"], { rows: $setup.rows }, {
    caption: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createElementVNode(
        "span",
        { class: "sr-only" },
        "Tabell",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(({ row }) => [
      _withDirectives(_createVNode(
        $setup["FTableColumn"],
        {
          title: "Kolumn A",
          type: "text",
          "row-header": ""
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_format, row.a, "text"]
      ]),
      _withDirectives(_createVNode(
        $setup["FTableColumn"],
        {
          title: "Kolumn B",
          type: "text"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_format, row.b, "text"]
      ]),
      _withDirectives(_createVNode(
        $setup["FTableColumn"],
        {
          title: "Kolumn C",
          type: "text"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_format, row.c, "text"]
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-08c8cb"
});
export {
  render
};
