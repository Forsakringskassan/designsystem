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

// virtual-entry:virtual:packages/vue/src/internal-components/IPopup/examples/IPopupExample.vue:IPopupExample-915b2b.js
import { defineComponent } from "vue";
import { FButton, IPopup } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, createElementVNode as _createElementVNode, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "IPopupExample",
  components: { FButton, IPopup },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    onClickOpen() {
      this.isOpen = true;
    },
    onClickClose() {
      this.isOpen = false;
    },
    onClose() {
      this.isOpen = false;
    }
  }
});
var _hoisted_1 = { class: "my-awesome-popup" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_button = _resolveComponent("f-button");
  const _component_i_popup = _resolveComponent("i-popup");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_button, {
      ref: "popupAnchor",
      variant: "secondary",
      onClick: _ctx.onClickOpen
    }, {
      default: _withCtx(() => [..._cache[0] || (_cache[0] = [
        _createTextVNode(
          " \xD6ppna popup ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    }, 8, ["onClick"]),
    _createVNode(_component_i_popup, {
      "is-open": _ctx.isOpen,
      anchor: _ctx.$refs.popupAnchor,
      onClose: _ctx.onClose
    }, {
      default: _withCtx(() => [
        _createElementVNode("div", _hoisted_1, [
          _cache[2] || (_cache[2] = _createElementVNode(
            "p",
            null,
            " Tr\xE4utensilierna i ett tryckeri \xE4ro ingalunda en oviktig faktor, f\xF6r trevnadens, ordningens och ekonomiens uppr\xE4tth\xE5llande, och dock \xE4r det icke s\xE4llan som sorgliga erfarenheter g\xF6ras p\xE5 grund af det of\xF6rst\xE5nd med hvilket kaster, formbr\xE4den och regaler tillverkas och f\xF6rs\xE4ljas Kaster som \xE4ro d\xE5ligt hopkomna och af otillr\xE4ckligt. ",
            -1
            /* CACHED */
          )),
          _createVNode(_component_f_button, {
            variant: "tertiary",
            onClick: _ctx.onClickClose
          }, {
            default: _withCtx(() => [..._cache[1] || (_cache[1] = [
              _createTextVNode(
                " St\xE4ng popup ",
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 8, ["onClick"])
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["is-open", "anchor", "onClose"])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-915b2b"
});
export {
  render
};
