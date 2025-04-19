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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FDetailsPanelPageObject/FDetailsPanelPageObject.vue:FDetailsPanelPageObject-431038.js
import { defineComponent as _defineComponent } from "vue";
import { onMounted } from "vue";
import { FPageLayout, FDetailsPanel, useDetailsPanel } from "@fkui/vue";
import { createVNode as _createVNode, createTextVNode as _createTextVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FDetailsPanelPageObject",
  setup(__props, { expose: __expose }) {
    __expose();
    onMounted(() => {
      useDetailsPanel("awesome-panel").open("foo");
    });
    const __returned__ = { get FPageLayout() {
      return FPageLayout;
    }, get FDetailsPanel() {
      return FDetailsPanel;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FPageLayout"], { layout: "three-column" }, {
    left: _withCtx(() => [
      _createVNode($setup["FDetailsPanel"], { name: "awesome-panel" })
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
  selector: "#example-431038"
});
export {
  render
};
