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

// virtual-entry:virtual:docs/components/table-and-list/examples/FCrudDatasetAdditionalButtons.vue:FCrudDatasetAdditionalButtons-e51959.js
import { defineComponent as _defineComponent } from "vue";
import { FCrudDataset } from "@fkui/vue";
import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FCrudDatasetAdditionalButtons",
  setup(__props, { expose: __expose }) {
    __expose();
    function onClick() {
      alert("My button clicked");
    }
    const __returned__ = { onClick, get FCrudDataset() {
      return FCrudDataset;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FCrudDataset"], null, {
    default: _withCtx(() => _cache[0] || (_cache[0] = [])),
    add: _withCtx(() => _cache[1] || (_cache[1] = [])),
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
  selector: "#example-e51959"
});
export {
  render
};
