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

// virtual-entry:virtual:packages/vue/src/plugins/test/examples/TestPluginHidden.vue:TestPluginHidden-f50991.js
import { defineComponent } from "vue";
import { FButton, FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createCommentVNode as _createCommentVNode, toDisplayString as _toDisplayString, createVNode as _createVNode, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "TestPluginHidden",
  components: { FButton, FTextField },
  data() {
    return { isVisible: false };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _component_f_button = _resolveComponent("f-button");
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
    _createVNode(_component_f_button, {
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.isVisible = !_ctx.isVisible)
    }, {
      default: _withCtx(() => [
        _createTextVNode(
          _toDisplayString(_ctx.isVisible ? "G\xF6m inmatningsf\xE4lt" : "Visa inmatningsf\xE4lt"),
          1
          /* TEXT */
        )
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-f50991"
});
export {
  render
};
