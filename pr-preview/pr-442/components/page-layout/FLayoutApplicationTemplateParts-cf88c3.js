// docs/src/setup.ts
import { createApp, h } from "vue";
import {
  ErrorPlugin,
  FErrorHandlingApp,
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
  app.mount(selector);
}

// virtual-entry:virtual:docs/components/page-layout/examples/FLayoutApplicationTemplateParts.vue:FLayoutApplicationTemplateParts-cf88c3.js
import { defineComponent } from "vue";
import { FLayoutApplicationTemplate } from "@fkui/vue";
import { createElementVNode as _createElementVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FLayoutApplicationTemplateExample",
  components: { FLayoutApplicationTemplate }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_layout_application_template = _resolveComponent("f-layout-application-template");
  return _openBlock(), _createBlock(_component_f_layout_application_template, null, {
    header: _withCtx(() => _cache[0] || (_cache[0] = [
      _createElementVNode(
        "div",
        { class: "example-header" },
        "[sidhuvud]",
        -1
        /* HOISTED */
      )
    ])),
    "top-navigation": _withCtx(() => _cache[1] || (_cache[1] = [
      _createElementVNode(
        "div",
        { class: "example-topnav" },
        "[toppnavigering]",
        -1
        /* HOISTED */
      )
    ])),
    footer: _withCtx(() => _cache[2] || (_cache[2] = [
      _createElementVNode(
        "div",
        { class: "example-footer" },
        "[sidfot]",
        -1
        /* HOISTED */
      )
    ])),
    default: _withCtx(() => [
      _cache[3] || (_cache[3] = _createElementVNode(
        "div",
        { class: "example-content" },
        "[prim\xE4ryta]",
        -1
        /* HOISTED */
      ))
    ]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-cf88c3"
});
export {
  render
};
