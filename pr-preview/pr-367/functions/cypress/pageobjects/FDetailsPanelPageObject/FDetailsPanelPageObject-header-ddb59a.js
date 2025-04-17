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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FDetailsPanelPageObject/FDetailsPanelPageObject-header.vue:FDetailsPanelPageObject-header-ddb59a.js
import { defineComponent as _defineComponent } from "vue";
import { FDetailsPanel, useDetailsPanel } from "@fkui/vue";
import { createElementVNode as _createElementVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FDetailsPanelPageObject-header",
  setup(__props, { expose: __expose }) {
    __expose();
    useDetailsPanel("awesome-panel").open("foo");
    const __returned__ = { get FDetailsPanel() {
      return FDetailsPanel;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = ["slot"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FDetailsPanel"], { name: "awesome-panel" }, {
    default: _withCtx(({ header }) => [
      _createElementVNode("h2", { slot: header }, "Lorem ipsum", 8, _hoisted_1)
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-ddb59a"
});
export {
  render
};
