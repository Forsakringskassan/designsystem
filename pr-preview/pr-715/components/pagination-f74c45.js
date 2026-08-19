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

// virtual-entry:virtual:docs/components/pagination.md:pagination-f74c45.js
import { defineComponent } from "vue";
import { FPaginateDataset, FPaginator } from "@fkui/vue";
import { resolveComponent as _resolveComponent, createVNode as _createVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  components: {
    FPaginateDataset,
    FPaginator
  },
  data() {
    return {
      rows: Array.from({ length: 100 })
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_paginator = _resolveComponent("f-paginator");
  const _component_f_paginate_dataset = _resolveComponent("f-paginate-dataset");
  return _openBlock(), _createBlock(_component_f_paginate_dataset, {
    items: _ctx.rows,
    itemsPerPage: 1
  }, {
    default: _withCtx(({ items: currentPageItems }) => [
      _createVNode(_component_f_paginator)
    ]),
    _: 1
    /* STABLE */
  }, 8, ["items"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-f74c45"
});
export {
  render
};
