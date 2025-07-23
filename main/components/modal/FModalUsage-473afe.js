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

// virtual-entry:virtual:packages/vue/src/components/FModal/examples/FModalUsage.vue:FModalUsage-473afe.js
import { defineComponent as _defineComponent2 } from "vue";
import { useModal } from "@fkui/vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/examples/MyAwesomeModal.vue?type=script
import { defineComponent as _defineComponent } from "vue";
import { FModal } from "@fkui/vue";
var MyAwesomeModal_default = /* @__PURE__ */ _defineComponent({
  __name: "MyAwesomeModal",
  emits: ["close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const __returned__ = { emit, get FModal() {
      return FModal;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/examples/MyAwesomeModal.vue?type=template
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var _hoisted_1 = { class: "button-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FModal"], {
    "is-open": "",
    onClose: _cache[1] || (_cache[1] = ($event) => $setup.emit("close"))
  }, {
    header: _withCtx(() => _cache[2] || (_cache[2] = [
      _createTextVNode(" My awesome modal ")
    ])),
    content: _withCtx(() => _cache[3] || (_cache[3] = [
      _createTextVNode(" My awesome content ")
    ])),
    footer: _withCtx(() => [
      _createElementVNode("div", _hoisted_1, [
        _createElementVNode("button", {
          type: "button",
          class: "button button--primary button-group__item button--large",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("close"))
        }, " Close ")
      ])
    ]),
    _: 1
    /* STABLE */
  });
}

// packages/vue/src/components/FModal/examples/MyAwesomeModal.vue
MyAwesomeModal_default.render = render;
MyAwesomeModal_default.__file = "packages/vue/src/components/FModal/examples/MyAwesomeModal.vue";
var MyAwesomeModal_default2 = MyAwesomeModal_default;

// virtual-entry:virtual:packages/vue/src/components/FModal/examples/FModalUsage.vue:FModalUsage-473afe.js
import { createElementVNode as _createElementVNode2, openBlock as _openBlock2, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent2({
  __name: "FModalUsage",
  setup(__props, { expose: __expose }) {
    __expose();
    const { openModal } = useModal();
    async function onClick() {
      await openModal(MyAwesomeModal_default2);
    }
    const __returned__ = { openModal, onClick };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock2(), _createElementBlock("div", null, [
    _createElementVNode2("button", {
      type: "button",
      class: "button button--secondary",
      onClick: $setup.onClick
    }, "Open")
  ]);
}
exampleComponent.render = render2;
setup({
  rootComponent: exampleComponent,
  selector: "#example-473afe"
});
export {
  render2 as render
};
