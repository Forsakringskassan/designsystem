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

// virtual-entry:virtual:packages/vue/src/components/FPageLayout/examples/FPageLayoutExample.vue:FPageLayoutExample-93c66f.js
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
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FPageLayout"], { layout: "three-column" }, {
    header: _withCtx(() => _cache[0] || (_cache[0] = [
      _createElementVNode(
        "header",
        { class: "my-header" },
        "[header]",
        -1
        /* HOISTED */
      )
    ])),
    left: _withCtx(() => _cache[1] || (_cache[1] = [
      _createElementVNode(
        "div",
        { class: "my-left-panel" },
        "[left]",
        -1
        /* HOISTED */
      )
    ])),
    right: _withCtx(() => _cache[2] || (_cache[2] = [
      _createElementVNode(
        "div",
        { class: "my-right-panel" },
        "[right]",
        -1
        /* HOISTED */
      )
    ])),
    content: _withCtx(() => _cache[3] || (_cache[3] = [
      _createElementVNode(
        "main",
        { class: "my-content" },
        "[main]",
        -1
        /* HOISTED */
      )
    ])),
    footer: _withCtx(() => _cache[4] || (_cache[4] = [
      _createElementVNode(
        "footer",
        { class: "my-footer" },
        "[footer]",
        -1
        /* HOISTED */
      )
    ])),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
exampleComponent.__scopeId = "data-v-93c66f";
setup({
  rootComponent: exampleComponent,
  selector: "#example-93c66f"
});
export {
  render
};
