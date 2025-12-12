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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FDetailsPanelPageObject/FDetailsPanelPageObject-footer.vue:FDetailsPanelPageObject-footer-b994e3.js
import { defineComponent as _defineComponent } from "vue";
import { onMounted } from "vue";
import { FDetailsPanel, FPageLayout, useDetailsPanel } from "@fkui/vue";
import { createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FDetailsPanelPageObject-footer",
  setup(__props, { expose: __expose }) {
    __expose();
    onMounted(() => {
      useDetailsPanel("awesome-panel").open("foo");
    });
    const __returned__ = { get FDetailsPanel() {
      return FDetailsPanel;
    }, get FPageLayout() {
      return FPageLayout;
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
        default: _withCtx(({ footer }) => [
          _createElementVNode("div", { slot: footer }, "Lorem ipsum", 8, _hoisted_1)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["slot"]),
      _createElementVNode("div", { slot: content }, "Inneh\xE5ll", 8, _hoisted_2)
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-b994e3"
});
export {
  render
};
