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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FFileItemPageObject/FFileItemPageObject-typeOfFile.vue:FFileItemPageObject-typeOfFile-400e48.js
import { defineComponent as _defineComponent } from "vue";
import { FFileItem } from "@fkui/vue";
import { resolveDirective as _resolveDirective, createVNode as _createVNode, withDirectives as _withDirectives, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FFileItemPageObject-typeOfFile",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FFileItem() {
      return FFileItem;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_test = _resolveDirective("test");
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _withDirectives(_createVNode(
        $setup["FFileItem"],
        {
          "file-name": "myFile.doc",
          "mime-type": "application/msword"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_test, "file-item-doc"]
      ]),
      _withDirectives(_createVNode(
        $setup["FFileItem"],
        {
          "file-name": "myFile.pdf",
          "mime-type": "application/pdf"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_test, "file-item-pdf"]
      ]),
      _withDirectives(_createVNode(
        $setup["FFileItem"],
        {
          "file-name": "myFile.png",
          "mime-type": "image/png"
        },
        null,
        512
        /* NEED_PATCH */
      ), [
        [_directive_test, "file-item-img"]
      ])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-400e48"
});
export {
  render
};
