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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FExpandableParagraphPageObject/FExpandableParagraphPageObject.vue:FExpandableParagraphPageObject-cf1681.js
import { defineComponent as _defineComponent } from "vue";
import { FExpandableParagraph } from "@fkui/vue";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FExpandableParagraphPageObject",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FExpandableParagraph() {
      return FExpandableParagraph;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FExpandableParagraph"], { expanded: true }, {
    title: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createTextVNode(
        " Titel ",
        -1
        /* CACHED */
      )
    ])]),
    related: _withCtx(() => [..._cache[1] || (_cache[1] = [
      _createTextVNode(
        " 2026-01-01 ",
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [..._cache[2] || (_cache[2] = [
      _createElementVNode(
        "span",
        null,
        "Inneh\xE5ll",
        -1
        /* CACHED */
      )
    ])]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-cf1681"
});
export {
  render
};
