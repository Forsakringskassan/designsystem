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

// virtual-entry:virtual:packages/vue/src/components/FPageHeader/examples/FPageHeaderDefault.vue:FPageHeaderDefault-bc728d.js
import { defineComponent } from "vue";
import { FPageHeader, FLogo } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FPageHeaderDefault",
  components: { FPageHeader, FLogo }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_logo = _resolveComponent("f-logo");
  const _component_f_page_header = _resolveComponent("f-page-header");
  return _openBlock(), _createBlock(_component_f_page_header, null, {
    logo: _withCtx(() => [
      _createVNode(_component_f_logo, { size: "small" }, {
        default: _withCtx(() => [..._cache[0] || (_cache[0] = [
          _createTextVNode(
            "Example logo text",
            -1
            /* CACHED */
          )
        ])]),
        _: 1
        /* STABLE */
      })
    ]),
    right: _withCtx(() => [..._cache[1] || (_cache[1] = [
      _createTextVNode(
        " Namn Namnsson ",
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
  selector: "#example-bc728d"
});
export {
  render
};
