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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FBadgePageObject/FBadgePageObject-is-inverted.vue:FBadgePageObject-is-inverted-1de39c.js
import { defineComponent as _defineComponent } from "vue";
import { FBadge } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createElementVNode as _createElementVNode, Fragment as _Fragment, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FBadgePageObject-is-inverted",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FBadge() {
      return FBadge;
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
      _createElementVNode("div", null, [
        _withDirectives((_openBlock(), _createBlock($setup["FBadge"], {
          status: "info",
          inverted: false
        }, {
          default: _withCtx(() => [..._cache[0] || (_cache[0] = [
            _createTextVNode(
              " My Not Inverted Badge ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        })), [
          [_directive_test, "my-badge-not-inverted"]
        ])
      ]),
      _createElementVNode("div", null, [
        _withDirectives((_openBlock(), _createBlock($setup["FBadge"], {
          status: "info",
          inverted: true
        }, {
          default: _withCtx(() => [..._cache[1] || (_cache[1] = [
            _createTextVNode(
              " My Inverted Badge ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        })), [
          [_directive_test, "my-badge-inverted"]
        ])
      ])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-1de39c"
});
export {
  render
};
