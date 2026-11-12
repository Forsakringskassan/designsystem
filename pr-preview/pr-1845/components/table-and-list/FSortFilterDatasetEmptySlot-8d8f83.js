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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetEmptySlot.vue:FSortFilterDatasetEmptySlot-8d8f83.js
import { defineComponent as _defineComponent } from "vue";
import { shallowRef } from "vue";

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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetEmptySlot.vue:FSortFilterDatasetEmptySlot-8d8f83.js
import { FSelectField, FSortFilterDataset, FTable, defineTableColumns } from "@fkui/vue";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, normalizeClass as _normalizeClass, toDisplayString as _toDisplayString, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FSortFilterDatasetEmptySlot",
  setup(__props, { expose: __expose }) {
    __expose();
    const emptyList = [];
    const populatedList = fruits;
    const columns = defineTableColumns([
      { type: "text", header: "Namn", key: "name", size: "shrink" },
      { type: "text", header: "Land", key: "origin", size: "shrink" },
      { type: "text", header: "Beskrivning", key: "description" }
    ]);
    const sortableAttributes = {
      name: "Namn",
      origin: "Land"
    };
    const fruits2 = shallowRef(populatedList);
    const __returned__ = { emptyList, populatedList, columns, sortableAttributes, fruits: fruits2, get FSelectField() {
      return FSelectField;
    }, get FSortFilterDataset() {
      return FSortFilterDataset;
    }, get FTable() {
      return FTable;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = ["value"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode($setup["FSelectField"], {
      id: "data-source",
      modelValue: $setup.fruits,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.fruits = $event)
    }, {
      label: _withCtx(() => [..._cache[1] || (_cache[1] = [
        _createTextVNode(
          " V\xE4lj datak\xE4lla ",
          -1
          /* CACHED */
        )
      ])]),
      default: _withCtx(() => [
        _createElementVNode("option", { value: $setup.emptyList }, "Inl\xE4st data utan rader"),
        _createElementVNode("option", { value: $setup.populatedList }, "Inl\xE4st data med rader", 8, _hoisted_1)
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"]),
    _createVNode($setup["FSortFilterDataset"], {
      data: $setup.fruits,
      "sortable-attributes": $setup.sortableAttributes
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
          "Visar " + _toDisplayString(sortFilterResult.length) + " av " + _toDisplayString($setup.fruits.length) + " frukter.",
          1
          /* TEXT */
        ),
        _createVNode($setup["FTable"], {
          rows: sortFilterResult,
          columns: $setup.columns,
          striped: ""
        }, {
          caption: _withCtx(() => [..._cache[2] || (_cache[2] = [
            _createElementVNode(
              "span",
              { class: "sr-only" },
              " Frukter ",
              -1
              /* CACHED */
            )
          ])]),
          empty: _withCtx(() => [
            $setup.fruits.length === 0 ? (_openBlock(), _createElementBlock(
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
          _: 1
          /* STABLE */
        }, 8, ["rows", "columns"])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["data"])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-8d8f83"
});
export {
  render
};
