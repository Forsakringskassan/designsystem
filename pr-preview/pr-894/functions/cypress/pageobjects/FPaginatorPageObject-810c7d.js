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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FPaginatorPageObject/FPaginatorPageObject.vue:FPaginatorPageObject-810c7d.js
import { defineComponent as _defineComponent } from "vue";
import { FInteractiveTable, FPaginateDataset, FPaginator, FTableColumn } from "@fkui/vue";
import { createTextVNode as _createTextVNode, toDisplayString as _toDisplayString, withCtx as _withCtx, createVNode as _createVNode, resolveDirective as _resolveDirective, withDirectives as _withDirectives, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FPaginatorPageObject",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = [
      { id: "1", a: "A1", b: "B1", c: "C1" },
      { id: "2", a: "A2", b: "B2", c: "C2" },
      { id: "3", a: "A3", b: "B3", c: "C3" },
      { id: "4", a: "A4", b: "B4", c: "C4" },
      { id: "5", a: "A5", b: "B5", c: "C5" },
      { id: "6", a: "A6", b: "B6", c: "C6" },
      { id: "7", a: "A7", b: "B7", c: "C7" },
      { id: "8", a: "A8", b: "B8", c: "C8" },
      { id: "9", a: "A9", b: "B9", c: "C9" },
      { id: "10", a: "A10", b: "B10", c: "C10" },
      { id: "11", a: "A11", b: "B11", c: "C11" },
      { id: "12", a: "A12", b: "B12", c: "C12" },
      { id: "13", a: "A13", b: "B13", c: "C13" },
      { id: "14", a: "A14", b: "B14", c: "C14" },
      { id: "15", a: "A15", b: "B15", c: "C15" },
      { id: "16", a: "A16", b: "B16", c: "C16" },
      { id: "17", a: "A17", b: "B17", c: "C17" },
      { id: "18", a: "A18", b: "B18", c: "C18" },
      { id: "19", a: "A19", b: "B19", c: "C19" },
      { id: "20", a: "A20", b: "B20", c: "C20" }
    ];
    const __returned__ = { rows, get FInteractiveTable() {
      return FInteractiveTable;
    }, get FPaginateDataset() {
      return FPaginateDataset;
    }, get FPaginator() {
      return FPaginator;
    }, get FTableColumn() {
      return FTableColumn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_test = _resolveDirective("test");
  return _openBlock(), _createBlock($setup["FPaginateDataset"], {
    items: $setup.rows,
    "items-per-page": 1
  }, {
    default: _withCtx(({ items: currentPageItems, currentPage, numberOfPages }) => [
      _createVNode($setup["FInteractiveTable"], { rows: currentPageItems }, {
        caption: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            " Tabell ",
            -1
            /* CACHED */
          )
        ])]),
        default: _withCtx(({ row }) => [
          _createVNode(
            $setup["FTableColumn"],
            { title: "A" },
            {
              default: _withCtx(() => [
                _createTextVNode(
                  _toDisplayString(row.a),
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
            { title: "B" },
            {
              default: _withCtx(() => [
                _createTextVNode(
                  _toDisplayString(row.b),
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
            { title: "C" },
            {
              default: _withCtx(() => [
                _createTextVNode(
                  _toDisplayString(row.c),
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
      }, 8, ["rows"]),
      _withDirectives(_createVNode($setup["FPaginator"], {
        "current-page": currentPage,
        "number-of-pages": numberOfPages
      }, null, 8, ["current-page", "number-of-pages"]), [
        [_directive_test, "myPaginator"]
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-810c7d"
});
export {
  render
};
