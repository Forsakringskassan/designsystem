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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FListPageObject.vue:FListPageObject-82deb2.js
import { defineComponent as _defineComponent } from "vue";
import { FList } from "@fkui/vue";
import { toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FListPageObject",
  setup(__props, { expose: __expose }) {
    __expose();
    const items = [
      { id: 1, frukt: "Banan" },
      { id: 2, frukt: "\xC4pple" },
      { id: 3, frukt: "Apelsin" }
    ];
    const __returned__ = { items, get FList() {
      return FList;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FList"], { items: $setup.items }, {
    default: _withCtx(({ item }) => [
      _createTextVNode(
        _toDisplayString(item.frukt),
        1
        /* TEXT */
      )
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-82deb2"
});
export {
  render
};
