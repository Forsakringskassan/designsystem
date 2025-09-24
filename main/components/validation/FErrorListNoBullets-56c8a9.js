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

// virtual-entry:virtual:packages/vue/src/components/FErrorList/examples/FErrorListNoBullets.vue:FErrorListNoBullets-56c8a9.js
import { defineComponent } from "vue";
import { FErrorList, FTextField } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, resolveDirective as _resolveDirective, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FErrorListNoBullets",
  components: { FErrorList, FTextField },
  data() {
    return {
      items: [
        { id: "fornamn-utan-bullets", title: "F\xF6rnamn" },
        { id: "efternamn-utan-bullets", title: "Efternamn" }
      ]
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_error_list = _resolveComponent("f-error-list");
  const _component_f_text_field = _resolveComponent("f-text-field");
  const _directive_validation = _resolveDirective("validation");
  return _openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_error_list, { items: _ctx.items }, {
      title: _withCtx(() => [..._cache[0] || (_cache[0] = [
        _createTextVNode(
          " Kolla p\xE5 felen nedan ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    }, 8, ["items"]),
    _withDirectives((_openBlock(), _createBlock(_component_f_text_field, { id: "fornamn-utan-bullets" }, {
      default: _withCtx(() => [..._cache[1] || (_cache[1] = [
        _createTextVNode(
          " F\xF6rnamn ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    })), [
      [
        _directive_validation,
        void 0,
        void 0,
        { maxLength: true }
      ]
    ]),
    _withDirectives((_openBlock(), _createBlock(_component_f_text_field, { id: "efternamn-utan-bullets" }, {
      default: _withCtx(() => [..._cache[2] || (_cache[2] = [
        _createTextVNode(
          " Efternamn ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    })), [
      [
        _directive_validation,
        void 0,
        void 0,
        { maxLength: true }
      ]
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-56c8a9"
});
export {
  render
};
