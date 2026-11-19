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

// virtual-entry:virtual:packages/vue/src/internal-components/ICloseButton/examples/ICloseButtonExample.vue:ICloseButtonExample-173665.js
import { defineComponent as _defineComponent } from "vue";
import { ref, useTemplateRef } from "vue";
import { FButton, ICloseButton, IPopup, findHTMLElementFromVueRef } from "@fkui/vue";
import { createTextVNode as _createTextVNode, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "ICloseButtonExample",
  setup(__props, { expose: __expose }) {
    __expose();
    const isOpen = ref(false);
    const popupAnchor = useTemplateRef("popupAnchor");
    const __returned__ = { isOpen, popupAnchor, get FButton() {
      return FButton;
    }, get ICloseButton() {
      return ICloseButton;
    }, get IPopup() {
      return IPopup;
    }, get findHTMLElementFromVueRef() {
      return findHTMLElementFromVueRef;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { class: "popup-content" };
var _hoisted_2 = { class: "popup-actions" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode($setup["FButton"], {
      ref: "popupAnchor",
      variant: "secondary",
      size: "small",
      "aria-expanded": $setup.isOpen,
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.isOpen = true)
    }, {
      default: _withCtx(() => [..._cache[3] || (_cache[3] = [
        _createTextVNode(
          " \xD6ppna popup ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    }, 8, ["aria-expanded"]),
    _createVNode($setup["IPopup"], {
      "is-open": $setup.isOpen,
      anchor: $setup.findHTMLElementFromVueRef($setup.popupAnchor),
      onClose: _cache[2] || (_cache[2] = ($event) => $setup.isOpen = false)
    }, {
      default: _withCtx(() => [
        _createElementVNode("div", _hoisted_1, [
          _cache[5] || (_cache[5] = _createElementVNode(
            "p",
            null,
            "Inneh\xE5ll i popupen.",
            -1
            /* CACHED */
          )),
          _createElementVNode("div", _hoisted_2, [
            _createVNode($setup["ICloseButton"], {
              "aria-label": "St\xE4ng popupen",
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.isOpen = false)
            }, {
              default: _withCtx(() => [..._cache[4] || (_cache[4] = [
                _createTextVNode(
                  "St\xE4ng",
                  -1
                  /* CACHED */
                )
              ])]),
              _: 1
              /* STABLE */
            })
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["is-open", "anchor"])
  ]);
}
exampleComponent.render = render;
exampleComponent.__scopeId = "data-v-173665";
setup({
  rootComponent: exampleComponent,
  selector: "#example-173665"
});
export {
  render
};
