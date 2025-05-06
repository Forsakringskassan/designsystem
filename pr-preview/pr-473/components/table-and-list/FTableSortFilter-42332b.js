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

// virtual-entry:virtual:packages/vue/src/components/FInteractiveTable/draft/FTableSortFilter.vue:FTableSortFilter-42332b.js
import { defineComponent } from "vue";
import { FSortFilterDataset, FInteractiveTable, FTableColumn } from "@fkui/vue";
import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, createVNode as _createVNode, withDirectives as _withDirectives, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var ankor = [
  { name: "Kalle Anka", value: 42 },
  { name: "Kajsa Anka", value: 511 },
  { name: "Joakim von Anka", value: 4711 }
];
var exampleComponent = defineComponent({
  components: { FSortFilterDataset, FInteractiveTable, FTableColumn },
  data() {
    return {
      sortableAttributes: {
        name: "Namn",
        value: "V\xE4rde"
      },
      ankor
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_table_column = _resolveComponent("f-table-column");
  const _component_f_interactive_table = _resolveComponent("f-interactive-table");
  const _component_f_sort_filter_dataset = _resolveComponent("f-sort-filter-dataset");
  const _directive_format = _resolveDirective("format");
  return _openBlock(), _createBlock(_component_f_sort_filter_dataset, {
    data: _ctx.ankor,
    "default-sort-attribute": "name",
    "default-sort-ascending": true,
    "sortable-attributes": _ctx.sortableAttributes
  }, {
    header: _withCtx(({ slotClass }) => [
      _createElementVNode(
        "h3",
        {
          class: _normalizeClass(slotClass)
        },
        "Sortera och filtrera",
        2
        /* CLASS */
      )
    ]),
    default: _withCtx(({ sortFilterResult }) => [
      _createVNode(_component_f_interactive_table, { rows: sortFilterResult }, {
        caption: _withCtx(() => _cache[0] || (_cache[0] = [
          _createElementVNode(
            "span",
            { class: "sr-only" },
            " Tabell ",
            -1
            /* HOISTED */
          )
        ])),
        default: _withCtx(({ row }) => [
          _withDirectives(_createVNode(
            _component_f_table_column,
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
            _component_f_table_column,
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
        _: 2
        /* DYNAMIC */
      }, 1032, ["rows"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["data", "sortable-attributes"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-42332b"
});
export {
  render
};
