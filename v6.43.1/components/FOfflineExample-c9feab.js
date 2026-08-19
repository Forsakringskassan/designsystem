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

// virtual-entry:virtual:packages/vue/src/components/FOffline/examples/FOfflineExample.vue:FOfflineExample-c9feab.js
import { defineComponent } from "vue";
import { FButton, FOffline } from "@fkui/vue";
import { toDisplayString as _toDisplayString, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, createVNode as _createVNode, resolveDirective as _resolveDirective, openBlock as _openBlock, createElementBlock as _createElementBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = defineComponent({
  name: "FOfflineExample",
  components: { FButton, FOffline },
  data() {
    return {
      isPushed: false,
      offlineMessage: "Det verkar som att du inte har n\xE5gon internetuppkoppling just nu. T\xE4nk p\xE5 att du beh\xF6ver uppkoppling f\xF6r att kunna signera"
    };
  },
  methods: {
    toggle() {
      if (this.isPushed) {
        window.dispatchEvent(new Event("online"));
        this.isPushed = false;
      } else {
        window.dispatchEvent(new Event("offline"));
        this.isPushed = true;
      }
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_offline = _resolveComponent("f-offline");
  const _component_f_button = _resolveComponent("f-button");
  const _directive_test = _resolveDirective("test");
  return _withDirectives((_openBlock(), _createElementBlock("div", null, [
    _createVNode(_component_f_offline, null, {
      default: _withCtx(() => [
        _createTextVNode(
          _toDisplayString(_ctx.offlineMessage),
          1
          /* TEXT */
        )
      ]),
      _: 1
      /* STABLE */
    }),
    _createVNode(_component_f_button, { onClick: _ctx.toggle }, {
      default: _withCtx(() => [..._cache[0] || (_cache[0] = [
        _createTextVNode(
          "Visa/D\xF6lj komponent",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    }, 8, ["onClick"])
  ])), [
    [_directive_test, "offlineExample"]
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-c9feab"
});
export {
  render
};
