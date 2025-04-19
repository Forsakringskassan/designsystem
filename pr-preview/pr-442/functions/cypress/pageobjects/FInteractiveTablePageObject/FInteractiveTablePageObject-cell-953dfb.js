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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FInteractiveTablePageObject/FInteractiveTablePageObject-cell.vue:FInteractiveTablePageObject-cell-953dfb.js
import { defineComponent as _defineComponent } from "vue";
import { FInteractiveTable, FTableColumn } from "@fkui/vue";
import { toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FInteractiveTablePageObject-cell",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = [
      { id: "1", a: "A1", b: "B1", c: "C1" },
      { id: "2", a: "A2", b: "B2", c: "C2" },
      { id: "3", a: "A3", b: "B3", c: "C3" }
    ];
    const __returned__ = { rows, get FInteractiveTable() {
      return FInteractiveTable;
    }, get FTableColumn() {
      return FTableColumn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FInteractiveTable"], {
    "key-attribute": "id",
    rows: $setup.rows
  }, {
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
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-953dfb"
});
export {
  render
};
