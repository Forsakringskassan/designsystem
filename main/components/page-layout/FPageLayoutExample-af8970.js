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

// virtual-entry:virtual:packages/vue/src/components/FPageLayout/examples/FPageLayoutExample.vue:FPageLayoutExample-af8970.js
import { defineComponent as _defineComponent } from "vue";
import { FPageLayout } from "@fkui/vue";
import { createElementVNode as _createElementVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FPageLayoutExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FPageLayout() {
      return FPageLayout;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = ["slot"];
var _hoisted_2 = ["slot"];
var _hoisted_3 = ["slot"];
var _hoisted_4 = ["slot"];
var _hoisted_5 = ["slot"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FPageLayout"], { layout: "three-column" }, {
    default: _withCtx(({ header, left, right, content, footer }) => [
      _createElementVNode("header", {
        slot: header,
        class: "my-header"
      }, "[header]", 8, _hoisted_1),
      _createElementVNode("div", {
        slot: left,
        class: "my-left-panel"
      }, "[left]", 8, _hoisted_2),
      _createElementVNode("div", {
        slot: right,
        class: "my-right-panel"
      }, "[right]", 8, _hoisted_3),
      _createElementVNode("main", {
        slot: content,
        class: "my-content"
      }, "[main]", 8, _hoisted_4),
      _createElementVNode("footer", {
        slot: footer,
        class: "my-footer"
      }, "[footer]", 8, _hoisted_5)
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
exampleComponent.__scopeId = "data-v-af8970";
setup({
  rootComponent: exampleComponent,
  selector: "#example-af8970"
});
export {
  render
};
