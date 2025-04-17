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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FDetailsPanelPageObject/FDetailsPanelPageObject.vue:FDetailsPanelPageObject-573b1f.js
import { defineComponent as _defineComponent } from "vue";
import { FPageLayout, FDetailsPanel, useDetailsPanel } from "@fkui/vue";
import { createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, createTextVNode as _createTextVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FDetailsPanelPageObject",
  setup(__props, { expose: __expose }) {
    __expose();
    const panel = useDetailsPanel("awesome-panel");
    function openPanel() {
      panel.open("foo");
    }
    const __returned__ = { panel, openPanel, get FPageLayout() {
      return FPageLayout;
    }, get FDetailsPanel() {
      return FDetailsPanel;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = ["slot"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FPageLayout"], { layout: "three-column" }, {
    left: _withCtx(() => [
      _createVNode($setup["FDetailsPanel"], { name: "awesome-panel" }, {
        default: _withCtx(({ content }) => [
          _createElementVNode("div", { slot: content }, null, 8, _hoisted_1)
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    content: _withCtx(() => [
      _cache[0] || (_cache[0] = _createTextVNode(" Inneh\xE5ll ")),
      _createElementVNode("button", {
        type: "button",
        onClick: $setup.openPanel
      }, "\xD6ppna panel")
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-573b1f"
});
export {
  render
};
