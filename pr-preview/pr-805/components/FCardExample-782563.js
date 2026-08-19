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

// virtual-entry:virtual:packages/vue/src/components/FCard/examples/FCardExample.vue:FCardExample-782563.js
import { defineComponent } from "vue";
import { FButton, FCard } from "@fkui/vue";
import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FCardExample",
  components: { FCard, FButton }
});
var _hoisted_1 = { class: "button-group" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_button = _resolveComponent("f-button");
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
    default: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createElementVNode(
        "p",
        null,
        "Arbetsgivare",
        -1
        /* CACHED */
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
        /* CACHED */
      ),
      _createElementVNode(
        "p",
        null,
        [
          _createElementVNode("label", { class: "label" }, " Telefonnummer "),
          _createElementVNode("span", null, " 0109999999 ")
        ],
        -1
        /* CACHED */
      )
    ])]),
    footer: _withCtx(() => [
      _createElementVNode("div", _hoisted_1, [
        _createVNode(_component_f_button, {
          variant: "tertiary",
          "align-text": "",
          class: "button-group__item",
          "icon-left": "trashcan"
        }, {
          default: _withCtx(() => [..._cache[1] || (_cache[1] = [
            _createTextVNode(
              " Ta bort ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }),
        _createVNode(_component_f_button, {
          variant: "tertiary",
          "align-text": "",
          class: "button-group__item",
          "icon-left": "pen"
        }, {
          default: _withCtx(() => [..._cache[2] || (_cache[2] = [
            _createTextVNode(
              " \xC4ndra ",
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
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-782563"
});
export {
  render
};
