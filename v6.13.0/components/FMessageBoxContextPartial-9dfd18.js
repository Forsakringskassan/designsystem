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

// virtual-entry:virtual:packages/vue/src/components/FMessageBox/examples/FMessageBoxContextPartial.vue:FMessageBoxContextPartial-9dfd18.js
import { defineComponent } from "vue";
import { FMessageBox } from "@fkui/vue";
import { createElementVNode as _createElementVNode, createTextVNode as _createTextVNode, normalizeClass as _normalizeClass, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FMessageBoxContextPartial",
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
        _cache[0] || (_cache[0] = [
          _createElementVNode(
            "span",
            { class: "sr-only" },
            " Sk\xE4rml\xE4sarinformation kombinerad med befintlig titel ",
            -1
            /* CACHED */
          ),
          _createTextVNode(" En rubrik som kombineras med en sk\xE4rml\xE4sartext f\xF6r att tydligt f\xF6rklara sin kontext n\xE4r den f\xE5r fokus ")
        ]),
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
  selector: "#example-9dfd18"
});
export {
  render
};
