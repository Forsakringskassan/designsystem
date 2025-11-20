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

// virtual-entry:virtual:packages/vue/src/components/FIcon/examples/FIconRotate.vue:FIconRotate-398dbf.js
import { defineComponent } from "vue";
import { FIcon } from "@fkui/vue";
import { resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FIconRotate",
  components: { FIcon }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = _resolveComponent("f-icon");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_icon, {
      name: "pic",
      rotate: "90"
    }),
    _createVNode(_component_f_icon, {
      name: "pic",
      rotate: "180"
    }),
    _createVNode(_component_f_icon, {
      name: "pic",
      rotate: "270"
    })
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-398dbf"
});
export {
  render
};
