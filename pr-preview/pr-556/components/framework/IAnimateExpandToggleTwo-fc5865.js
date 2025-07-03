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

// virtual-entry:virtual:packages/vue/src/internal-components/IAnimateExpand/examples/IAnimateExpandToggleTwo.vue:IAnimateExpandToggleTwo-fc5865.js
import { defineComponent } from "vue";
import { IAnimateExpand } from "@fkui/vue";
import { createElementVNode as _createElementVNode, vModelCheckbox as _vModelCheckbox, withDirectives as _withDirectives, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  namne: "IAnimateExpandToggleTwo",
  components: { IAnimateExpand },
  data() {
    return {
      toggle: false,
      opacity: false
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_i_animate_expand = _resolveComponent("i-animate-expand");
  return _openBlock(), _createElementBlock("div", null, [
    _createElementVNode("button", {
      type: "button",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.toggle = !_ctx.toggle)
    }, "Toggle"),
    _createElementVNode("label", null, [
      _withDirectives(_createElementVNode(
        "input",
        {
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.opacity = $event),
          type: "checkbox"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_vModelCheckbox, _ctx.opacity]
      ]),
      _cache[2] || (_cache[2] = _createTextVNode(" Toning"))
    ]),
    _createVNode(_component_i_animate_expand, {
      opacity: _ctx.opacity,
      expanded: _ctx.toggle
    }, {
      default: _withCtx(() => _cache[3] || (_cache[3] = [
        _createElementVNode(
          "div",
          { style: { "background-color": "yellow", "height": "200px", "position": "relative" } },
          null,
          -1
          /* CACHED */
        )
      ])),
      _: 1,
      __: [3]
    }, 8, ["opacity", "expanded"]),
    _createVNode(_component_i_animate_expand, {
      opacity: _ctx.opacity,
      expanded: !_ctx.toggle
    }, {
      default: _withCtx(() => _cache[4] || (_cache[4] = [
        _createElementVNode(
          "div",
          { style: { "background-color": "hotpink", "height": "300px", "position": "relative" } },
          null,
          -1
          /* CACHED */
        )
      ])),
      _: 1,
      __: [4]
    }, 8, ["opacity", "expanded"])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-fc5865"
});
export {
  render
};
