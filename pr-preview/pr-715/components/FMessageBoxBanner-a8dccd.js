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

// virtual-entry:virtual:packages/vue/src/components/FMessageBox/examples/FMessageBoxBanner.vue:FMessageBoxBanner-a8dccd.js
import { defineComponent } from "vue";
import { FMessageBox } from "@fkui/vue";
import { createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FMessageBoxBanner",
  components: { FMessageBox }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_message_box = _resolveComponent("f-message-box");
  return _openBlock(), _createBlock(_component_f_message_box, {
    type: "error",
    banner: ""
  }, {
    default: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createElementVNode(
        "p",
        null,
        " Det verkar som att du inte har n\xE5gon internetuppkoppling just nu. T\xE4nk p\xE5 att du beh\xF6ver uppkoppling f\xF6r att kunna signera ",
        -1
        /* CACHED */
      )
    ])]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-a8dccd"
});
export {
  render
};
