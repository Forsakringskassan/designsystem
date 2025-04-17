// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
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
  app.mount(selector);
}

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FDetailsPanelPageObject/FDetailsPanelPageObject-el.vue:FDetailsPanelPageObject-el-8fa099.js
import { defineComponent as _defineComponent } from "vue";
import { FDetailsPanel, useDetailsPanel } from "@fkui/vue";
import { createVNode as _createVNode, createElementVNode as _createElementVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FDetailsPanelPageObject-el",
  setup(__props, { expose: __expose }) {
    __expose();
    function openPanel() {
      useDetailsPanel("awesome-panel").open("foo");
    }
    const __returned__ = { openPanel, get FDetailsPanel() {
      return FDetailsPanel;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createVNode($setup["FDetailsPanel"], { name: "awesome-panel" }),
      _createElementVNode("button", {
        type: "button",
        onClick: $setup.openPanel
      }, "\xD6ppna panel")
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-8fa099"
});
export {
  render
};
