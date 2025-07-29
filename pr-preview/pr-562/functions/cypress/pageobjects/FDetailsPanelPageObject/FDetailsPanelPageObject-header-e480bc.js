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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FDetailsPanelPageObject/FDetailsPanelPageObject-header.vue:FDetailsPanelPageObject-header-e480bc.js
import { defineComponent as _defineComponent } from "vue";
import { onMounted } from "vue";
import { FPageLayout, FDetailsPanel, useDetailsPanel } from "@fkui/vue";
import { createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FDetailsPanelPageObject-header",
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
var _hoisted_1 = ["slot"];
var _hoisted_2 = ["slot"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FPageLayout"], { layout: "three-column" }, {
    default: _withCtx(({ left, content }) => [
      _createVNode($setup["FDetailsPanel"], {
        slot: left,
        name: "awesome-panel"
      }, {
        default: _withCtx(({ header }) => [
          _createElementVNode("h2", { slot: header }, "Lorem ipsum", 8, _hoisted_1)
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["slot"]),
      _createElementVNode("div", { slot: content }, "Inneh\xE5ll", 8, _hoisted_2)
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-e480bc"
});
export {
  render
};
