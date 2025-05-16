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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetFilterExample.vue:FSortFilterDatasetFilterExample-a95ddc.js
import { defineComponent as _defineComponent } from "vue";
import { FInteractiveTable, FSortFilterDataset, FTableColumn } from "@fkui/vue";

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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetFilterExample.vue:FSortFilterDatasetFilterExample-a95ddc.js
import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FSortFilterDatasetFilterExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FInteractiveTable() {
      return FInteractiveTable;
    }, get FSortFilterDataset() {
      return FSortFilterDataset;
    }, get FTableColumn() {
      return FTableColumn;
    }, get fruits() {
      return fruits;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FSortFilterDataset"], {
    data: $setup.fruits,
    "filter-attributes": ["origin"],
    "sortable-attributes": { name: "Namn" }
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
      _createVNode($setup["FInteractiveTable"], {
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
            $setup["FTableColumn"],
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
            $setup["FTableColumn"],
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
            $setup["FTableColumn"],
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
  }, 8, ["data"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-a95ddc"
});
export {
  render
};
