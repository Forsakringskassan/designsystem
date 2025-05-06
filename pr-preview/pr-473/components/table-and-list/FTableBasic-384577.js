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

// virtual-entry:virtual:packages/vue/src/components/FInteractiveTable/draft/FTableBasic.vue:FTableBasic-384577.js
import { defineComponent as _defineComponent } from "vue";
import { FDataTable, FTableColumn } from "@fkui/vue";
import { createElementVNode as _createElementVNode, resolveDirective as _resolveDirective, createVNode as _createVNode, withDirectives as _withDirectives, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FTableBasic",
  setup(__props, { expose: __expose }) {
    __expose();
    const rows = [
      { name: "Kalle Anka", value: 42 },
      { name: "Kajsa Anka", value: 511 },
      { name: "Joakim von Anka", value: 4711 }
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
    caption: _withCtx(() => _cache[0] || (_cache[0] = [
      _createElementVNode(
        "span",
        { class: "sr-only" },
        "Tabell",
        -1
        /* HOISTED */
      )
    ])),
    default: _withCtx(({ row }) => [
      _withDirectives(_createVNode(
        $setup["FTableColumn"],
        {
          title: "Namn",
          type: "text"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_format, row.name, "text"]
      ]),
      _withDirectives(_createVNode(
        $setup["FTableColumn"],
        {
          title: "V\xE4rde",
          type: "numeric",
          shrink: ""
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_format, row.value, "number"]
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-384577"
});
export {
  render
};
