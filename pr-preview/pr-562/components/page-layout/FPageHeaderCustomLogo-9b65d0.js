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

// virtual-entry:virtual:packages/vue/src/components/FPageHeader/examples/FPageHeaderCustomLogo.vue:FPageHeaderCustomLogo-9b65d0.js
import { defineComponent } from "vue";
import { FPageHeader } from "@fkui/vue";
import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FPageHeaderCustomLogo",
  components: { FPageHeader }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_page_header = _resolveComponent("f-page-header");
  return _openBlock(), _createBlock(_component_f_page_header, null, {
    right: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createTextVNode(
        " Namn Namnsson ",
        -1
        /* CACHED */
      )
    ])]),
    logo: _withCtx(() => [..._cache[1] || (_cache[1] = [
      _createElementVNode(
        "span",
        {
          class: "my-own-logos",
          "aria-label": "Annan logotyp",
          role: "img"
        },
        null,
        -1
        /* CACHED */
      )
    ])]),
    default: _withCtx(() => [
      _cache[2] || (_cache[2] = _createTextVNode(
        " Exempelapplikation ",
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
  selector: "#example-9b65d0"
});
export {
  render
};
