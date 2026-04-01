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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetListExample.vue:FSortFilterDatasetListExample-8eb9a9.js
import { defineComponent } from "vue";
import { FList, FSortFilterDataset } from "@fkui/vue";

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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetListExample.vue:FSortFilterDatasetListExample-8eb9a9.js
import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  components: { FSortFilterDataset, FList },
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
  const _component_f_list = _resolveComponent("f-list");
  const _component_f_sort_filter_dataset = _resolveComponent("f-sort-filter-dataset");
  return _openBlock(), _createBlock(_component_f_sort_filter_dataset, {
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
      _createVNode(_component_f_list, {
        "key-attribute": "id",
        items: sortFilterResult
      }, {
        default: _withCtx(({ item }) => [
          _createElementVNode(
            "h3",
            null,
            _toDisplayString(item.name),
            1
            /* TEXT */
          ),
          _createElementVNode("p", null, [
            _cache[0] || (_cache[0] = _createTextVNode(
              " Land: ",
              -1
              /* CACHED */
            )),
            _createElementVNode(
              "em",
              null,
              _toDisplayString(item.origin),
              1
              /* TEXT */
            ),
            _cache[1] || (_cache[1] = _createElementVNode(
              "br",
              null,
              null,
              -1
              /* CACHED */
            )),
            _cache[2] || (_cache[2] = _createTextVNode(
              " Beskrivning: ",
              -1
              /* CACHED */
            )),
            _createElementVNode(
              "em",
              null,
              _toDisplayString(item.description),
              1
              /* TEXT */
            ),
            _cache[3] || (_cache[3] = _createElementVNode(
              "br",
              null,
              null,
              -1
              /* CACHED */
            ))
          ])
        ]),
        screenreader: _withCtx(({ item }) => [
          _createTextVNode(
            _toDisplayString(item.name),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["items"])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["data", "sortable-attributes"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-8eb9a9"
});
export {
  render
};
