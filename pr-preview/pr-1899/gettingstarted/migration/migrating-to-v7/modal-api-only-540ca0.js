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

// virtual-entry:virtual:docs/gettingstarted/migration/migrating-to-v7/modal-api-only.md:modal-api-only-540ca0.js
import { defineComponent as _defineComponent } from "vue";
import { ref } from "vue";
import { FButton, FModal } from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "modal-api-only",
  setup(__props, { expose: __expose }) {
    __expose();
    const isOpen = ref(false);
    function onClick() {
      isOpen.value = true;
    }
    function onClose() {
      isOpen.value = false;
    }
    const __returned__ = { isOpen, onClick, onClose, get FButton() {
      return FButton;
    }, get FModal() {
      return FModal;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "button-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createVNode($setup["FButton"], {
        size: "medium",
        variant: "secondary",
        onClick: $setup.onClick
      }, {
        default: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            " \xD6ppna modal ",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      }),
      _createVNode($setup["FModal"], {
        "is-open": $setup.isOpen,
        onClose: $setup.onClose
      }, {
        header: _withCtx(() => [..._cache[1] || (_cache[1] = [
          _createTextVNode(
            " My awesome modal ",
            -1
            /* CACHED */
          )
        ])]),
        content: _withCtx(() => [..._cache[2] || (_cache[2] = [
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
              onClick: $setup.onClose
            }, {
              default: _withCtx(() => [..._cache[3] || (_cache[3] = [
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
      }, 8, ["is-open"])
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-540ca0"
});
export {
  render
};
