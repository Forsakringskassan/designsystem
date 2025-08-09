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

// virtual-entry:virtual:packages/vue/src/components/FDetailsPanel/examples/FDetailsPanelSlots.vue:FDetailsPanelSlots-018a1f.js
import { defineComponent as _defineComponent } from "vue";
import { onMounted } from "vue";
import { FPageLayout, FDetailsPanel, useDetailsPanel } from "@fkui/vue";
import { createElementVNode as _createElementVNode, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var name = "details-panel-slots";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "FDetailsPanelSlots",
  setup(__props, { expose: __expose }) {
    __expose();
    const panel = useDetailsPanel(name);
    onMounted(() => {
      panel.open("foo");
    });
    const __returned__ = { name, panel, get FPageLayout() {
      return FPageLayout;
    }, get FDetailsPanel() {
      return FDetailsPanel;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "layout-container" };
var _hoisted_2 = ["slot"];
var _hoisted_3 = ["slot"];
var _hoisted_4 = ["slot"];
var _hoisted_5 = ["slot"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["FPageLayout"], { layout: "three-column" }, {
      default: _withCtx((layoutScope) => [
        _createVNode($setup["FDetailsPanel"], {
          slot: layoutScope.right,
          name: $setup.name,
          class: "panel"
        }, {
          default: _withCtx((panelScope) => [
            _createElementVNode("h2", {
              slot: panelScope.header
            }, "[header]", 8, _hoisted_2),
            _createElementVNode("div", {
              slot: panelScope.content
            }, "[content]", 8, _hoisted_3),
            _createElementVNode("div", {
              slot: panelScope.footer
            }, "[footer]", 8, _hoisted_4)
          ]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["slot"]),
        _createElementVNode("p", {
          slot: layoutScope.content
        }, "Inneh\xE5llsyta", 8, _hoisted_5)
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
exampleComponent.render = render;
exampleComponent.__scopeId = "data-v-018a1f";
setup({
  rootComponent: exampleComponent,
  selector: "#example-018a1f"
});
export {
  render
};
