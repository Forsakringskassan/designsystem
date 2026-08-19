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

// virtual-entry:virtual:docs/components/table-and-list/examples/FInteractiveTableSelectable.vue:FInteractiveTableSelectable-fbe7ea.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FInteractiveTable, FTableColumn } from "@fkui/vue";
import { createElementVNode as _createElementVNode, resolveDirective as _resolveDirective, createVNode as _createVNode, withDirectives as _withDirectives, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, withCtx as _withCtx, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FInteractiveTableSelectable",
  setup(__props, { expose: __expose }) {
    __expose();
    const selectedRows = ref([]);
    const rows = [
      { name: "Kalle Anka", value: 42 },
      { name: "Kajsa Anka", value: 511 },
      { name: "Joakim von Anka", value: 4711 }
    ];
    const __returned__ = { selectedRows, rows, get FInteractiveTable() {
      return FInteractiveTable;
    }, get FTableColumn() {
      return FTableColumn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_format = _resolveDirective("format");
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createVNode($setup["FInteractiveTable"], {
        modelValue: $setup.selectedRows,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedRows = $event),
        rows: $setup.rows,
        selectable: ""
      }, {
        caption: _withCtx(() => _cache[1] || (_cache[1] = [
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
        "checkbox-description": _withCtx(({ row }) => [
          _createTextVNode(
            ' V\xE4lj "' + _toDisplayString(row.name) + '" ',
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue"]),
      _cache[2] || (_cache[2] = _createElementVNode(
        "p",
        null,
        "Valda rader:",
        -1
        /* HOISTED */
      )),
      _createElementVNode(
        "pre",
        null,
        _toDisplayString(JSON.stringify($setup.selectedRows, null, 2)),
        1
        /* TEXT */
      )
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-fbe7ea"
});
export {
  render
};
