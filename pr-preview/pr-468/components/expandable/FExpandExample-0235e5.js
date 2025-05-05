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

// virtual-entry:virtual:packages/vue/src/components/FExpand/examples/FExpandExample.vue:FExpandExample-0235e5.js
import { defineComponent } from "vue";
import { FExpand } from "@fkui/vue";
import { openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode } from "vue";
var exampleComponent = defineComponent({
  name: "FExpandExample",
  components: { FExpand },
  data() {
    return {
      expanded: false
    };
  }
});
var _hoisted_1 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_expand = _resolveComponent("f-expand");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_expand, null, {
      default: _withCtx(() => [
        _ctx.expanded ? (_openBlock(), _createElementBlock("div", _hoisted_1, "Expanded content")) : _createCommentVNode("v-if", true)
      ]),
      _: 1
      /* STABLE */
    }),
    _createElementVNode(
      "button",
      {
        type: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.expanded = !_ctx.expanded)
      },
      _toDisplayString(_ctx.expanded ? `Close` : `Open`),
      1
      /* TEXT */
    )
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-0235e5"
});
export {
  render
};
