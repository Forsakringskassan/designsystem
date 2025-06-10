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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetEmptySlot.vue:FSortFilterDatasetEmptySlot-169020.js
import { defineComponent } from "vue";
import { FSelectField, FSortFilterDataset, FDataTable, FTableColumn } from "@fkui/vue";

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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetEmptySlot.vue:FSortFilterDatasetEmptySlot-169020.js
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, normalizeClass as _normalizeClass, toDisplayString as _toDisplayString, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var emptyList = [];
var populatedList = fruits;
var exampleComponent = defineComponent({
  components: { FSelectField, FSortFilterDataset, FDataTable, FTableColumn },
  data() {
    return {
      sortableAttributes: {
        name: "Namn",
        origin: "Land"
      },
      fruits: populatedList,
      emptyList,
      populatedList
    };
  }
});
var _hoisted_1 = ["value"];
var _hoisted_2 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_select_field = _resolveComponent("f-select-field");
  const _component_f_table_column = _resolveComponent("f-table-column");
  const _component_f_data_table = _resolveComponent("f-data-table");
  const _component_f_sort_filter_dataset = _resolveComponent("f-sort-filter-dataset");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_select_field, {
      id: "data-source",
      modelValue: _ctx.fruits,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.fruits = $event)
    }, {
      label: _withCtx(() => _cache[1] || (_cache[1] = [
        _createTextVNode(" V\xE4lj datak\xE4lla ")
      ])),
      default: _withCtx(() => [
        _createElementVNode("option", { value: _ctx.emptyList }, "Inl\xE4st data utan rader", 8, _hoisted_1),
        _createElementVNode("option", { value: _ctx.populatedList }, "Inl\xE4st data med rader", 8, _hoisted_2)
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"]),
    _createVNode(_component_f_sort_filter_dataset, {
      data: _ctx.fruits,
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
        _createElementVNode(
          "p",
          null,
          "Visar " + _toDisplayString(sortFilterResult.length) + " av " + _toDisplayString(_ctx.fruits.length) + " frukter.",
          1
          /* TEXT */
        ),
        _createVNode(_component_f_data_table, {
          rows: sortFilterResult,
          striped: "",
          "key-attribute": "id"
        }, {
          caption: _withCtx(() => _cache[2] || (_cache[2] = [
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
          empty: _withCtx(() => [
            _ctx.fruits.length === 0 ? (_openBlock(), _createElementBlock(
              _Fragment,
              { key: 0 },
              [
                _createTextVNode(" Det finns inga frukter att visa. ")
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (_openBlock(), _createElementBlock(
              _Fragment,
              { key: 1 },
              [
                _createTextVNode(" S\xF6kningen gav inga tr\xE4ffar. ")
              ],
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["rows"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["data", "sortable-attributes"])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-169020"
});
export {
  render
};
