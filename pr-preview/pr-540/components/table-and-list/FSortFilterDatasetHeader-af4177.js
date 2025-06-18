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

// virtual-entry:virtual:packages/vue/src/components/FSortFilterDataset/examples/FSortFilterDatasetHeader.vue:FSortFilterDatasetHeader-af4177.js
import { defineComponent } from "vue";
import { FSortFilterDataset } from "@fkui/vue";
import { createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  components: { FSortFilterDataset }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_sort_filter_dataset = _resolveComponent("f-sort-filter-dataset");
  return _openBlock(), _createBlock(_component_f_sort_filter_dataset, {
    data: [],
    "sortable-attributes": { givenname: "F\xF6rnamn", surname: "Efternamn" }
  }, {
    header: _withCtx(() => _cache[0] || (_cache[0] = [
      _createElementVNode(
        "h1",
        null,
        "Stor rubrik",
        -1
        /* HOISTED */
      )
    ])),
    default: _withCtx(() => _cache[1] || (_cache[1] = [])),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-af4177"
});
export {
  render
};
