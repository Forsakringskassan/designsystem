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

// virtual-entry:virtual:docs/components/table-and-list/examples/FCrudDatasetAdditionalButtons.vue:FCrudDatasetAdditionalButtons-04c0a6.js
import { defineComponent as _defineComponent } from "vue";
import { FCrudDataset } from "@fkui/vue";
import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FCrudDatasetAdditionalButtons",
  setup(__props, { expose: __expose }) {
    __expose();
    function onCreate() {
      alert("Add clicked");
    }
    function onClick() {
      alert("My button clicked");
    }
    const __returned__ = { onCreate, onClick, get FCrudDataset() {
      return FCrudDataset;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FCrudDataset"], { "on-create": $setup.onCreate }, {
    buttons: _withCtx(({ buttonClasses }) => [
      _createElementVNode(
        "button",
        {
          type: "button",
          class: _normalizeClass(buttonClasses),
          onClick: $setup.onClick
        },
        "My button",
        2
        /* CLASS */
      )
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-04c0a6"
});
export {
  render
};
