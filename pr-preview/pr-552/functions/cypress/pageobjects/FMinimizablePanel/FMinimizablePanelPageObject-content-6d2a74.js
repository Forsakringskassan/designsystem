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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FMinimizablePanel/FMinimizablePanelPageObject-content.vue:FMinimizablePanelPageObject-content-6d2a74.js
import { defineComponent as _defineComponent } from "vue";
import { FPageLayout, FMinimizablePanel } from "@fkui/vue";
import { createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FMinimizablePanelPageObject-content",
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
var _hoisted_1 = ["slot"];
var _hoisted_2 = ["slot"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FPageLayout"], { layout: "three-column" }, {
    default: _withCtx((layoutScope) => [
      _createVNode($setup["FMinimizablePanel"], {
        slot: layoutScope.left
      }, {
        default: _withCtx((panelScope) => [
          _createElementVNode("div", {
            slot: panelScope.content
          }, "Lorem ipsum", 8, _hoisted_1)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["slot"]),
      _createElementVNode("div", {
        slot: layoutScope.content
      }, "Inneh\xE5ll", 8, _hoisted_2)
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-6d2a74"
});
export {
  render
};
