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

// virtual-entry:virtual:packages/vue/src/components/FDetailsPanel/examples/FDetailsPanelExample.vue:FDetailsPanelExample-9203dd.js
import { defineComponent as _defineComponent } from "vue";
import { FPageLayout, FDetailsPanel, useDetailsPanel, FResizePane } from "@fkui/vue";
import { createElementVNode as _createElementVNode, toDisplayString as _toDisplayString, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var name = "awesome-panel";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FDetailsPanelExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const panel = useDetailsPanel(name);
    const ExamplePanel = FDetailsPanel;
    function openPanel() {
      panel.open({
        name: "Kalle Anka"
      });
    }
    const __returned__ = { name, panel, ExamplePanel, openPanel, get FPageLayout() {
      return FPageLayout;
    }, get FResizePane() {
      return FResizePane;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "layout-container" };
var _hoisted_2 = ["slot"];
var _hoisted_3 = ["slot"];
var _hoisted_4 = ["slot"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["FPageLayout"], { layout: "three-column" }, {
      default: _withCtx((layoutScope) => [
        _createVNode($setup["FResizePane"], {
          slot: layoutScope.right,
          min: "200px",
          max: "50%"
        }, {
          default: _withCtx(() => [
            _createVNode($setup["ExamplePanel"], { name: $setup.name }, {
              default: _withCtx((panelScope) => [
                _createElementVNode("h2", {
                  slot: panelScope.header
                }, "Detaljpanel", 8, _hoisted_2),
                _createElementVNode("p", {
                  slot: panelScope.content
                }, _toDisplayString(panelScope.item.name), 9, _hoisted_3)
              ]),
              _: 1
              /* STABLE */
            })
          ]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["slot"]),
        _createElementVNode("button", {
          slot: layoutScope.content,
          type: "button",
          class: "button button--primary",
          onClick: $setup.openPanel
        }, " \xD6ppna ", 8, _hoisted_4)
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
exampleComponent.render = render;
exampleComponent.__scopeId = "data-v-9203dd";
setup({
  rootComponent: exampleComponent,
  selector: "#example-9203dd"
});
export {
  render
};
