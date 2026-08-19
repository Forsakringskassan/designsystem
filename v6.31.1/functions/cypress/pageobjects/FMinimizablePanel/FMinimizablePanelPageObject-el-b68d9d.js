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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FMinimizablePanel/FMinimizablePanelPageObject-el.vue:FMinimizablePanelPageObject-el-b68d9d.js
import { defineComponent as _defineComponent } from "vue";
import { FMinimizablePanel, FPageLayout } from "@fkui/vue";
import { createVNode as _createVNode, createElementVNode as _createElementVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FMinimizablePanelPageObject-el",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FMinimizablePanel() {
      return FMinimizablePanel;
    }, get FPageLayout() {
      return FPageLayout;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = ["slot"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FPageLayout"], { layout: "three-column" }, {
    default: _withCtx(({ left, content }) => [
      _createVNode($setup["FMinimizablePanel"], { slot: left }, null, 8, ["slot"]),
      _createElementVNode("div", { slot: content }, "Inneh\xE5ll", 8, _hoisted_1)
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-b68d9d"
});
export {
  render
};
