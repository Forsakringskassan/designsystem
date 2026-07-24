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

// virtual-entry:virtual:docs/functions/helpers/accessibility.md:accessibility-ed3302.js
import { defineComponent as _defineComponent } from "vue";
import { FButton } from "@fkui/vue";
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "accessibility",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FButton() {
      return FButton;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FButton"], {
    size: "medium",
    variant: "secondary"
  }, {
    default: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createElementVNode(
        "span",
        { class: "sr-only" },
        "G\xE5 vidare till",
        -1
        /* CACHED */
      ),
      _createTextVNode(
        " N\xE4sta ",
        -1
        /* CACHED */
      ),
      _createElementVNode(
        "span",
        { class: "sr-only" },
        "sida",
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
  selector: "#example-ed3302"
});
export {
  render
};
