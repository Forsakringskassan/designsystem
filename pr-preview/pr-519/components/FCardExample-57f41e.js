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

// virtual-entry:virtual:packages/vue/src/components/FCard/examples/FCardExample.vue:FCardExample-57f41e.js
import { defineComponent } from "vue";
import { FCard, FIcon } from "@fkui/vue";
import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, createVNode as _createVNode, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FCardExample",
  components: { FCard, FIcon }
});
var _hoisted_1 = { class: "button-group" };
var _hoisted_2 = {
  class: "button button-group__item button--tertiary button--medium button--align-text",
  type: "button"
};
var _hoisted_3 = {
  class: "button button-group__item button--tertiary button--medium button--align-text",
  type: "button"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = _resolveComponent("f-icon");
  const _component_f_card = _resolveComponent("f-card");
  return _openBlock(), _createBlock(_component_f_card, null, {
    header: _withCtx(({ headingSlotClass }) => [
      _createElementVNode(
        "h3",
        {
          class: _normalizeClass(headingSlotClass)
        },
        "Arbete",
        2
        /* CLASS */
      )
    ]),
    default: _withCtx(() => _cache[0] || (_cache[0] = [
      _createElementVNode(
        "p",
        null,
        "Arbetsgivare",
        -1
        /* HOISTED */
      ),
      _createElementVNode(
        "p",
        null,
        [
          _createTextVNode(" Gatan 1 "),
          _createElementVNode("br"),
          _createTextVNode(" 123 45 Staden "),
          _createElementVNode("br"),
          _createTextVNode(" Sverige ")
        ],
        -1
        /* HOISTED */
      ),
      _createElementVNode(
        "p",
        null,
        [
          _createElementVNode("label", { class: "label" }, " Telefonnummer "),
          _createElementVNode("span", null, " 0109999999 ")
        ],
        -1
        /* HOISTED */
      )
    ])),
    footer: _withCtx(() => [
      _createElementVNode("div", _hoisted_1, [
        _createElementVNode("button", _hoisted_2, [
          _createVNode(_component_f_icon, { name: "trashcan" }),
          _cache[1] || (_cache[1] = _createElementVNode(
            "span",
            null,
            " Ta bort ",
            -1
            /* HOISTED */
          ))
        ]),
        _createElementVNode("button", _hoisted_3, [
          _createVNode(_component_f_icon, { name: "pen" }),
          _cache[2] || (_cache[2] = _createElementVNode(
            "span",
            null,
            " \xC4ndra ",
            -1
            /* HOISTED */
          ))
        ])
      ])
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-57f41e"
});
export {
  render
};
