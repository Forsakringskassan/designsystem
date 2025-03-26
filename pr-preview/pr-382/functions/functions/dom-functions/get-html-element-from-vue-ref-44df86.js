// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
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
  app.mount(selector);
}

// virtual-entry:./docs/functions/functions/dom-functions/get-html-element-from-vue-ref.md
import { createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = {};
var _hoisted_1 = { ref: "myParagraph" };
function render(_ctx, _cache) {
  return _openBlock(), _createElementBlock("div", null, [
    _createElementVNode(
      "p",
      _hoisted_1,
      "lorem ipsum",
      512
      /* NEED_PATCH */
    )
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#get-html-element-from-vue-ref"
});
export {
  render
};
