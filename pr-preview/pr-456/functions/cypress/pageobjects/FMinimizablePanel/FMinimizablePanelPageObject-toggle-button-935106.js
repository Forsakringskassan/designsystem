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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FMinimizablePanel/FMinimizablePanelPageObject-toggle-button.vue:FMinimizablePanelPageObject-toggle-button-935106.js
import { defineComponent as _defineComponent } from "vue";
import { FPageLayout, FMinimizablePanel } from "@fkui/vue";
import { createVNode as _createVNode, createTextVNode as _createTextVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FMinimizablePanelPageObject-toggle-button",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FPageLayout() {
      return FPageLayout;
    }, get FMinimizablePanel() {
      return FMinimizablePanel;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FPageLayout"], { layout: "three-column" }, {
    left: _withCtx(() => [
      _createVNode($setup["FMinimizablePanel"])
    ]),
    content: _withCtx(() => _cache[0] || (_cache[0] = [
      _createTextVNode(" Inneh\xE5ll ")
    ])),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-935106"
});
export {
  render
};
