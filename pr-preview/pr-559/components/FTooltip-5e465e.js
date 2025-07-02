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

// virtual-entry:virtual:docs/components/FTooltip.md:FTooltip-5e465e.js
import { useTemplateRef } from "vue";
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = {
  __name: "FTooltip",
  setup(__props, { expose: __expose }) {
    __expose();
    const heading = useTemplateRef("heading");
    const __returned__ = { heading, useTemplateRef };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
var _hoisted_1 = { ref: "heading" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_tooltip = _resolveComponent("f-tooltip", true);
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createElementVNode(
        "div",
        _hoisted_1,
        _cache[0] || (_cache[0] = [
          _createElementVNode(
            "h2",
            null,
            "En rubrik",
            -1
            /* CACHED */
          )
        ]),
        512
        /* NEED_PATCH */
      ),
      _createVNode(_component_f_tooltip, {
        "attach-to": "heading",
        "screen-reader-text": "Sk\xE4rml\xE4sartext"
      }, {
        body: _withCtx(() => _cache[1] || (_cache[1] = [
          _createTextVNode(" Lorem ipsum dolor sit amet. ")
        ])),
        _: 1
        /* STABLE */
      })
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-5e465e"
});
export {
  render
};
