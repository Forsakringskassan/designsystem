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

// virtual-entry:virtual:packages/vue/src/components/FExpandablePanel/examples/FExpandablePanelRelatedExample.vue:FExpandablePanelRelatedExample-5c9bfe.js
import { defineComponent } from "vue";
import { FExpandablePanel } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FExpandablePanelExample",
  components: { FExpandablePanel },
  data() {
    return {
      expanded: false,
      type: Boolean
    };
  },
  methods: {
    onToggle() {
      this.expanded = !this.expanded;
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_expandable_panel = _resolveComponent("f-expandable-panel");
  return _openBlock(), _createBlock(_component_f_expandable_panel, {
    expanded: _ctx.expanded,
    onToggle: _ctx.onToggle
  }, {
    title: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createTextVNode(
        " Titel ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [..._cache[1] || (_cache[1] = [
      _createTextVNode(
        " Inneh\xE5ll ",
        -1
        /* CACHED */
      )
    ])]),
    outside: _withCtx(() => [..._cache[2] || (_cache[2] = [
      _createTextVNode(
        " Relaterat inneh\xE5ll som visas n\xE4r panelen \xE4r expanderad men utanf\xF6r body ",
        -1
        /* CACHED */
      )
    ])]),
    _: 1
    /* STABLE */
  }, 8, ["expanded", "onToggle"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-5c9bfe"
});
export {
  render
};
