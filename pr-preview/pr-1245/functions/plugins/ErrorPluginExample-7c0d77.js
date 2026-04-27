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

// virtual-entry:virtual:packages/vue/src/plugins/error/examples/ErrorPluginExample.vue:ErrorPluginExample-7c0d77.js
import { defineComponent, getCurrentInstance } from "vue";
import { FButton } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, resolveDirective as _resolveDirective, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, withDirectives as _withDirectives, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "ErrorPluginExample",
  components: { FButton },
  data() {
    return {
      instance: getCurrentInstance()
    };
  },
  methods: {
    generateError() {
      throw new Error("It's game over man!");
    },
    generateWarning() {
      const error = new Error("stacktrace");
      const warnHandler = this.instance?.appContext.config.warnHandler;
      if (warnHandler) {
        warnHandler("It's game over man!", null, error.stack ?? "");
      }
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_button = _resolveComponent("f-button");
  const _directive_test = _resolveDirective("test");
  return _openBlock(), _createElementBlock("div", null, [
    _withDirectives((_openBlock(), _createBlock(_component_f_button, {
      variant: "secondary",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.generateError())
    }, {
      default: _withCtx(() => [..._cache[2] || (_cache[2] = [
        _createTextVNode(
          " Fel ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    })), [
      [_directive_test, "generate-error"]
    ]),
    _withDirectives((_openBlock(), _createBlock(_component_f_button, {
      variant: "secondary",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.generateWarning())
    }, {
      default: _withCtx(() => [..._cache[3] || (_cache[3] = [
        _createTextVNode(
          " Varning ",
          -1
          /* CACHED */
        )
      ])]),
      _: 1
      /* STABLE */
    })), [
      [_directive_test, "generate-warning"]
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-7c0d77"
});
export {
  render
};
