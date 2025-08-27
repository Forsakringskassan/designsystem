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

// virtual-entry:virtual:packages/vue/src/plugins/test/examples/TestPluginHidden.vue:TestPluginHidden-7482f8.js
import { defineComponent } from "vue";
import { FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "TestPluginHidden",
  components: { FTextField },
  data() {
    return { isVisible: false };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", null, [
    _ctx.isVisible ? _withDirectives((_openBlock(), _createBlock(_component_f_text_field, {
      key: 0,
      id: "child-name"
    }, {
      default: _withCtx(() => [..._cache[1] || (_cache[1] = [
        _createTextVNode(
          " Barnets namn ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    })), [
      [
        _directive_validation,
        { maxLength: { length: 100 } },
        void 0,
        { maxLength: true }
      ]
    ]) : _createCommentVNode("v-if", true),
    _createElementVNode(
      "button",
      {
        type: "button",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.isVisible = !_ctx.isVisible)
      },
      _toDisplayString(_ctx.isVisible ? "G\xF6m inmatningsf\xE4lt" : "Visa inmatningsf\xE4lt"),
      1
      /* TEXT */
    )
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-7482f8"
});
export {
  render
};
