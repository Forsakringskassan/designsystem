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

// virtual-entry:virtual:packages/vue/src/components/FExpandablePanel/examples/FExpandablePanelExample.vue:FExpandablePanelExample-b77f44.js
import { defineComponent } from "vue";
import { FExpandablePanel } from "@fkui/vue";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
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
    title: _withCtx(() => _cache[0] || (_cache[0] = [
      _createTextVNode(" Titel ")
    ])),
    default: _withCtx(() => _cache[1] || (_cache[1] = [
      _createTextVNode(" Inneh\xE5ll "),
      _createElementVNode(
        "p",
        null,
        [
          _createElementVNode("a", {
            class: "anchor",
            href: "",
            target: "_blank"
          }, " L\xE4nk till annan sida ")
        ],
        -1
        /* HOISTED */
      )
    ])),
    _: 1
    /* STABLE */
  }, 8, ["expanded", "onToggle"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-b77f44"
});
export {
  render
};
