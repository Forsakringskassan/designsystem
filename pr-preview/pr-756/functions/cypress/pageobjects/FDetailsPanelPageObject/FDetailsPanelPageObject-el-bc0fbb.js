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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FDetailsPanelPageObject/FDetailsPanelPageObject-el.vue:FDetailsPanelPageObject-el-bc0fbb.js
import { defineComponent as _defineComponent } from "vue";
import { FDetailsPanel, FPageLayout, useDetailsPanel } from "@fkui/vue";
import { createVNode as _createVNode, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FDetailsPanelPageObject-el",
  setup(__props, { expose: __expose }) {
    __expose();
    const panel = useDetailsPanel("awesome-panel");
    const __returned__ = { panel, get FDetailsPanel() {
      return FDetailsPanel;
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
      _createVNode($setup["FDetailsPanel"], {
        slot: left,
        name: "awesome-panel"
      }, null, 8, ["slot"]),
      _createElementVNode("div", { slot: content }, [
        _cache[1] || (_cache[1] = _createTextVNode(
          " Inneh\xE5ll ",
          -1
          /* CACHED */
        )),
        _createElementVNode("button", {
          type: "button",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.panel.open("foo"))
        }, "\xD6ppna")
      ], 8, _hoisted_1)
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-bc0fbb"
});
export {
  render
};
