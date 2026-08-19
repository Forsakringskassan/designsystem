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

// virtual-entry:virtual:packages/vue/src/components/FMinimizablePanel/examples/FMinimizablePanelExample.vue:FMinimizablePanelExample-20e6fa.js
import { defineComponent as _defineComponent } from "vue";
import { FPageLayout, FResizePane, FMinimizablePanel } from "@fkui/vue";
import { createElementVNode as _createElementVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, withCtx as _withCtx, createVNode as _createVNode, createBlock as _createBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FMinimizablePanelExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get FPageLayout() {
      return FPageLayout;
    }, get FResizePane() {
      return FResizePane;
    }, get FMinimizablePanel() {
      return FMinimizablePanel;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = ["slot"];
var _hoisted_2 = ["slot"];
var _hoisted_3 = ["slot"];
var _hoisted_4 = ["slot"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FPageLayout"], { layout: "three-column" }, {
    default: _withCtx((layoutScope) => [
      _createVNode($setup["FResizePane"], {
        slot: layoutScope.left,
        min: "150px",
        max: "40%",
        initial: "600px"
      }, {
        default: _withCtx(() => [
          _createVNode($setup["FMinimizablePanel"], null, {
            default: _withCtx((panelScope) => [
              panelScope.isOpen ? (_openBlock(), _createElementBlock(
                _Fragment,
                { key: 0 },
                [
                  _createElementVNode("h1", {
                    slot: panelScope.header
                  }, "Rubrik", 8, _hoisted_1),
                  _createElementVNode("p", {
                    slot: panelScope.content
                  }, "Inneh\xE5ll", 8, _hoisted_2),
                  _createElementVNode("div", {
                    slot: panelScope.footer
                  }, "Fot", 8, _hoisted_3)
                ],
                64
                /* STABLE_FRAGMENT */
              )) : _createCommentVNode("v-if", true)
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 2
        /* DYNAMIC */
      }, 1032, ["slot"]),
      _createElementVNode("div", {
        slot: layoutScope.content
      }, "[Applikationsyta]", 8, _hoisted_4)
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-20e6fa"
});
export {
  render
};
