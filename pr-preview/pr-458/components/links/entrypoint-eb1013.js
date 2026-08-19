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

// virtual-entry:virtual:docs/components/links/entrypoint.md:entrypoint-eb1013.js
import { FIcon } from "@fkui/vue";
import { createElementVNode as _createElementVNode, createVNode as _createVNode, createTextVNode as _createTextVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = {
  __name: "entrypoint",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FIcon() {
      return FIcon;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
var _hoisted_1 = {
  class: "entrypoint",
  href: "javascript:"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("a", _hoisted_1, [
    _cache[0] || (_cache[0] = _createTextVNode(" Ans\xF6k om hundbidrag ")),
    _cache[1] || (_cache[1] = _createElementVNode(
      "span",
      { class: "sr-only" },
      " Till tj\xE4nsten ans\xF6k om hundbidrag ",
      -1
      /* HOISTED */
    )),
    _createVNode($setup["FIcon"], {
      name: "arrow-right",
      class: "entrypoint__icon"
    })
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-eb1013"
});
export {
  render
};
