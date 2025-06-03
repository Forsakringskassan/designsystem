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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetTableExample.vue:FSortFilterDatasetTableExample-d011a2.js
import { defineComponent } from "vue";
import { FSortFilterDataset, FInteractiveTable, FTableColumn } from "@fkui/vue";

// packages/vue/src/components/FSortFilterDataset/examples/fruit-data.ts
var fruits = [
  {
    id: "1",
    name: "\xC4pple",
    origin: "Sverige",
    description: "Rund, ofta r\xF6d eller gr\xF6n frukt med s\xF6t eller syrlig smak."
  },
  {
    id: "2",
    name: "Banan",
    origin: "Colombia",
    description: "L\xE5ng, gul frukt med mjukt och s\xF6tt fruktk\xF6tt."
  },
  {
    id: "3",
    name: "Vattenmelon",
    origin: "Spanien",
    description: "Stor, rund frukt med gr\xF6nt skal och saftigt, r\xF6tt fruktk\xF6tt."
  },
  {
    id: "4",
    name: "Grapefrukt",
    origin: "Turkiet",
    description: "Stor, rund citrusfrukt med tjockt skal och saftig, syrlig smak."
  }
];

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetTableExample.vue:FSortFilterDatasetTableExample-d011a2.js
import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  components: { FSortFilterDataset, FInteractiveTable, FTableColumn },
  data() {
    return {
      sortableAttributes: {
        name: "Namn",
        origin: "Land"
      },
      fruits
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_table_column = _resolveComponent("f-table-column");
  const _component_f_interactive_table = _resolveComponent("f-interactive-table");
  const _component_f_sort_filter_dataset = _resolveComponent("f-sort-filter-dataset");
  return _openBlock(), _createBlock(_component_f_sort_filter_dataset, {
    data: _ctx.fruits,
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
        "Frukter",
        2
        /* CLASS */
      )
    ]),
    default: _withCtx(({ sortFilterResult }) => [
      _createVNode(_component_f_interactive_table, {
        rows: sortFilterResult,
        striped: "",
        "key-attribute": "id"
      }, {
        caption: _withCtx(() => _cache[0] || (_cache[0] = [
          _createElementVNode(
            "span",
            { class: "sr-only" },
            " Frukter ",
            -1
            /* HOISTED */
          )
        ])),
        default: _withCtx(({ row }) => [
          _createVNode(
            _component_f_table_column,
            {
              name: "name",
              title: "Namn",
              type: "text",
              shrink: ""
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
            _component_f_table_column,
            {
              name: "origin",
              title: "Land",
              type: "text",
              shrink: ""
            },
            {
              default: _withCtx(() => [
                _createTextVNode(
                  _toDisplayString(row.origin),
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
              name: "description",
              title: "Beskrivning",
              type: "text",
              expand: ""
            },
            {
              default: _withCtx(() => [
                _createTextVNode(
                  _toDisplayString(row.description),
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
  selector: "#example-d011a2"
});
export {
  render
};
