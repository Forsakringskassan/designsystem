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

// virtual-entry:virtual:docs/functions/cypress/pageobjects/FBadgePageObject/FBadgePageObject-status.vue:FBadgePageObject-status-6a7081.js
import { defineComponent as _defineComponent } from "vue";
import { FBadge } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FBadgePageObject-status",
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
  return _withDirectives((_openBlock(), _createBlock($setup["FBadge"], { status: "warning" }, {
    default: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createTextVNode(
        " MyBadge ",
        -1
        /* CACHED */
      )
    ])]),
    _: 1
    /* STABLE */
  })), [
    [_directive_test, "my-badge-warning"]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-6a7081"
});
export {
  render
};
