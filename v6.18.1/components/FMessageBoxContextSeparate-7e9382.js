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

// virtual-entry:virtual:packages/vue/src/components/FMessageBox/examples/FMessageBoxContextSeparate.vue:FMessageBoxContextSeparate-7e9382.js
import { defineComponent } from "vue";
import { FMessageBox } from "@fkui/vue";
import { createElementVNode as _createElementVNode, normalizeClass as _normalizeClass, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FMessageBoxContextSeparate",
  components: { FMessageBox }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_message_box = _resolveComponent("f-message-box");
  return _openBlock(), _createBlock(_component_f_message_box, {
    type: "info",
    "provide-screen-reader-context": false
  }, {
    default: _withCtx(({ headingSlotClass }) => [
      _createElementVNode(
        "h2",
        {
          class: _normalizeClass(headingSlotClass)
        },
        [..._cache[0] || (_cache[0] = [
          _createElementVNode(
            "span",
            { class: "sr-only" },
            " Sk\xE4rml\xE4sarinformation som fullst\xE4ndigt ers\xE4tter rubriken och som inneh\xE5ller tydlig kontext ",
            -1
            /* CACHED */
          ),
          _createElementVNode(
            "span",
            { class: "aria-hidden" },
            " En rubrik som inte f\xF6rklarar sin kontext ",
            -1
            /* CACHED */
          )
        ])],
        2
        /* CLASS */
      ),
      _cache[1] || (_cache[1] = _createElementVNode(
        "p",
        null,
        "Komponenten kommer vid fokus inte l\xE4ngre att l\xE4sa texten Informationsmeddelande.",
        -1
        /* CACHED */
      ))
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-7e9382"
});
export {
  render
};
