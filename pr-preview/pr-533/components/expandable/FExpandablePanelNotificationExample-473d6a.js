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

// virtual-entry:virtual:packages/vue/src/components/FExpandablePanel/examples/FExpandablePanelNotificationExample.vue:FExpandablePanelNotificationExample-473d6a.js
import { defineComponent } from "vue";
import { FExpandablePanel } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FExpandablePanelExample",
  components: { FExpandablePanel },
  data() {
    return {
      expanded1: false,
      expanded2: false
    };
  },
  methods: {
    onToggle1() {
      this.expanded1 = !this.expanded1;
    },
    onToggle2() {
      this.expanded2 = !this.expanded2;
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_expandable_panel = _resolveComponent("f-expandable-panel");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_expandable_panel, {
      expanded: _ctx.expanded1,
      notifications: 1,
      onToggle: _ctx.onToggle1
    }, {
      title: _withCtx(() => [..._cache[0] || (_cache[0] = [
        _createTextVNode(
          " Titel med en notifiering ",
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
      _: 1
      /* STABLE */
    }, 8, ["expanded", "onToggle"]),
    _createVNode(_component_f_expandable_panel, {
      expanded: _ctx.expanded2,
      notifications: 2,
      onToggle: _ctx.onToggle2
    }, {
      title: _withCtx(() => [..._cache[2] || (_cache[2] = [
        _createTextVNode(
          " Titel med tv\xE5 notifieringar ",
          -1
          /* CACHED */
        )
      ])]),
      default: _withCtx(() => [..._cache[3] || (_cache[3] = [
        _createTextVNode(
          " Inneh\xE5ll ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    }, 8, ["expanded", "onToggle"])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-473d6a"
});
export {
  render
};
