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

// virtual-entry:virtual:docs/functions/functions/use-resize.md:use-resize-f115e2.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { useResize } from "@fkui/vue";
import { openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "use-resize",
  setup(__props, { expose: __expose }) {
    __expose();
    const isOpen = ref(false);
    useResize({
      visible: isOpen
    });
    const __returned__ = { isOpen };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.isOpen ? (_openBlock(), _createElementBlock("div", _hoisted_1, "[content]")) : _createCommentVNode("v-if", true);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-f115e2"
});
export {
  render
};
