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

// virtual-entry:virtual:packages/vue/src/components/FMessageBox/examples/FMessageBoxContext.vue:FMessageBoxContext-c1111e.js
import { defineComponent } from "vue";
import { FMessageBox } from "@fkui/vue";
import { normalizeClass as _normalizeClass, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FMessageBoxContext",
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
        " En rubrik som frist\xE5ende tydligt f\xF6rklarar sin kontext n\xE4r den f\xE5r fokus ",
        2
        /* CLASS */
      ),
      _cache[0] || (_cache[0] = _createElementVNode(
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
  selector: "#example-c1111e"
});
export {
  render
};
