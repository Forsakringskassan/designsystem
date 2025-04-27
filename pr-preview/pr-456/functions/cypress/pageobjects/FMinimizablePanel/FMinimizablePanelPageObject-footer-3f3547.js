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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FMinimizablePanel/FMinimizablePanelPageObject-footer.vue:FMinimizablePanelPageObject-footer-3f3547.js
import { defineComponent as _defineComponent } from "vue";
import { FPageLayout, FMinimizablePanel } from "@fkui/vue";
import { createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, createTextVNode as _createTextVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FMinimizablePanelPageObject-footer",
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FPageLayout"], { layout: "three-column" }, {
    left: _withCtx(() => [
      _createVNode($setup["FMinimizablePanel"], null, {
        default: _withCtx(({ footer }) => [
          _createElementVNode("div", { slot: footer }, "Lorem ipsum", 8, _hoisted_1)
        ]),
        _: 1
        /* STABLE */
      })
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
  selector: "#example-3f3547"
});
export {
  render
};
