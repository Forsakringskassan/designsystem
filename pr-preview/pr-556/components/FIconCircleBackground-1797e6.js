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

// virtual-entry:virtual:packages/vue/src/components/FIcon/examples/FIconCircleBackground.vue:FIconCircleBackground-1797e6.js
import { defineComponent } from "vue";
import { FIcon } from "@fkui/vue";
import { resolveComponent as _resolveComponent, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FIconCircleBackground",
  components: { FIcon }
});
var _hoisted_1 = { class: "icon-stack icon-stack--circle" };
var _hoisted_2 = { class: "icon-stack icon-stack--circle" };
var _hoisted_3 = { class: "icon-stack icon-stack--circle-bottom" };
var _hoisted_4 = { class: "icon-stack icon-stack--circle-bottom" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = _resolveComponent("f-icon");
  return _openBlock(), _createElementBlock("div", null, [
    _createElementVNode("div", null, [
      _createElementVNode("div", _hoisted_1, [
        _createVNode(_component_f_icon, { name: "circle" }),
        _createVNode(_component_f_icon, { name: "success" })
      ]),
      _createElementVNode("div", _hoisted_2, [
        _createVNode(_component_f_icon, { name: "circle" }),
        _createVNode(_component_f_icon, { name: "bell" })
      ])
    ]),
    _createElementVNode("div", null, [
      _createElementVNode("div", _hoisted_3, [
        _createVNode(_component_f_icon, { name: "circle" }),
        _createVNode(_component_f_icon, { name: "success" })
      ]),
      _createElementVNode("div", _hoisted_4, [
        _createVNode(_component_f_icon, { name: "circle" }),
        _createVNode(_component_f_icon, { name: "bell" })
      ])
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-1797e6"
});
export {
  render
};
