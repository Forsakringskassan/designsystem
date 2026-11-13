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

// virtual-entry:virtual:packages/vue/src/components/FModal/examples/FModalSizableExample.vue:FModalSizableExample-3b9ec8.js
import { defineComponent as _defineComponent2 } from "vue";
import { ref } from "vue";

// sfc-script:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/examples/ConfigurableModal.vue?type=script
import { defineComponent as _defineComponent } from "vue";
import { FButton, FModal } from "@fkui/vue";
var ConfigurableModal_default = /* @__PURE__ */ _defineComponent({
  __name: "ConfigurableModal",
  props: {
    type: { type: String, required: false, default: "" },
    size: { type: null, required: false, default: "small" }
  },
  emits: ["close"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const emit = __emit;
    const __returned__ = { emit, get FButton() {
      return FButton;
    }, get FModal() {
      return FModal;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/home/runner/work/designsystem/designsystem/packages/vue/src/components/FModal/examples/ConfigurableModal.vue?type=template
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var _hoisted_1 = { class: "button-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock($setup["FModal"], {
    "is-open": "",
    type: $props.type,
    size: $props.size,
    onClose: _cache[1] || (_cache[1] = ($event) => $setup.emit("close"))
  }, {
    header: _withCtx(() => [..._cache[2] || (_cache[2] = [
      _createTextVNode(
        " My awesome modal ",
        -1
        /* CACHED */
      )
    ])]),
    content: _withCtx(() => [..._cache[3] || (_cache[3] = [
      _createTextVNode(
        " My awesome content ",
        -1
        /* CACHED */
      )
    ])]),
    footer: _withCtx(() => [
      _createElementVNode("div", _hoisted_1, [
        _createVNode($setup["FButton"], {
          class: "button-group__item",
          size: "large",
          variant: "primary",
          onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("close"))
        }, {
          default: _withCtx(() => [..._cache[4] || (_cache[4] = [
            _createTextVNode(
              " Close ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _: 1
    /* STABLE */
  }, 8, ["type", "size"]);
}

// packages/vue/src/components/FModal/examples/ConfigurableModal.vue
ConfigurableModal_default.render = render;
ConfigurableModal_default.__file = "packages/vue/src/components/FModal/examples/ConfigurableModal.vue";
var ConfigurableModal_default2 = ConfigurableModal_default;

// virtual-entry:virtual:packages/vue/src/components/FModal/examples/FModalSizableExample.vue:FModalSizableExample-3b9ec8.js
import { FButton as FButton2, FSelectField, useModal } from "@fkui/vue";
import { createTextVNode as _createTextVNode2, createElementVNode as _createElementVNode2, withCtx as _withCtx2, createVNode as _createVNode2, openBlock as _openBlock2, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent2({
  __name: "FModalSizableExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const { openModal } = useModal();
    const modalSize = ref("small");
    async function onClick() {
      await openModal(ConfigurableModal_default2, { props: { size: modalSize.value } });
    }
    const __returned__ = { openModal, modalSize, onClick, get FButton() {
      return FButton2;
    }, get FSelectField() {
      return FSelectField;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_12 = { style: { "width": "200px" } };
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock2(), _createElementBlock("div", _hoisted_12, [
    _createVNode2($setup["FSelectField"], {
      modelValue: $setup.modalSize,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modalSize = $event)
    }, {
      label: _withCtx2(() => [..._cache[1] || (_cache[1] = [
        _createTextVNode2(
          " Storlek ",
          -1
          /* CACHED */
        )
      ])]),
      default: _withCtx2(() => [
        _cache[2] || (_cache[2] = _createElementVNode2(
          "option",
          { value: "small" },
          "Liten",
          -1
          /* CACHED */
        )),
        _cache[3] || (_cache[3] = _createElementVNode2(
          "option",
          { value: "medium" },
          "Medium",
          -1
          /* CACHED */
        )),
        _cache[4] || (_cache[4] = _createElementVNode2(
          "option",
          { value: "large" },
          "Stor",
          -1
          /* CACHED */
        )),
        _cache[5] || (_cache[5] = _createElementVNode2(
          "option",
          { value: "fullwidth" },
          "Fullbredd",
          -1
          /* CACHED */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue"]),
    _createVNode2($setup["FButton"], {
      size: "medium",
      variant: "secondary",
      onClick: $setup.onClick
    }, {
      default: _withCtx2(() => [..._cache[6] || (_cache[6] = [
        _createTextVNode2(
          " Visa ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    })
  ]);
}
exampleComponent.render = render2;
setup({
  rootComponent: exampleComponent,
  selector: "#example-3b9ec8"
});
export {
  render2 as render
};
