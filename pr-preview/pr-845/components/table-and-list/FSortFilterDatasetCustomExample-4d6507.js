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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetCustomExample.vue:FSortFilterDatasetCustomExample-4d6507.js
import { defineComponent } from "vue";
import { FSortFilterDataset } from "@fkui/vue";

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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetCustomExample.vue:FSortFilterDatasetCustomExample-4d6507.js
import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, toDisplayString as _toDisplayString, resolveComponent as _resolveComponent, withCtx as _withCtx, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  components: { FSortFilterDataset },
  data() {
    return {
      sortableAttributes: {
        name: "Namn",
        origin: "Land"
      },
      fruits: fruits.map((it) => {
        const { description, ...rest } = it;
        return rest;
      })
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_sort_filter_dataset = _resolveComponent("f-sort-filter-dataset");
  return _openBlock(), _createBlock(_component_f_sort_filter_dataset, {
    data: _ctx.fruits,
    "sortable-attributes": _ctx.sortableAttributes
  }, {
    default: _withCtx(({ sortFilterResult }) => [
      (_openBlock(true), _createElementBlock(
        _Fragment,
        null,
        _renderList(sortFilterResult, (item) => {
          return _openBlock(), _createElementBlock(
            "pre",
            {
              key: item.id
            },
            _toDisplayString(item),
            1
            /* TEXT */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))
    ]),
    _: 1
    /* STABLE */
  }, 8, ["data", "sortable-attributes"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-4d6507"
});
export {
  render
};
