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

// virtual-entry:virtual:packages/vue/src/plugins/error/examples/ErrorPluginExample.vue:ErrorPluginExample-c109b0.js
import { defineComponent, getCurrentInstance } from "vue";
import { createTextVNode as _createTextVNode, resolveDirective as _resolveDirective, openBlock as _openBlock, createElementBlock as _createElementBlock, withDirectives as _withDirectives } from "vue";
var exampleComponent = defineComponent({
  name: "ErrorPluginExample",
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
      const error = new Error();
      const warnHandler = this.instance?.appContext.config.warnHandler;
      if (warnHandler) {
        warnHandler("It's game over man!", null, error.stack ?? "");
      }
    }
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_test = _resolveDirective("test");
  return _openBlock(), _createElementBlock("div", null, [
    _withDirectives((_openBlock(), _createElementBlock("button", {
      class: "button button--secondary",
      type: "button",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.generateError())
    }, [..._cache[2] || (_cache[2] = [
      _createTextVNode(
        " Fel ",
        -1
        /* CACHED */
      )
    ])])), [
      [_directive_test, "generate-error"]
    ]),
    _withDirectives((_openBlock(), _createElementBlock("button", {
      class: "button button--secondary",
      type: "button",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.generateWarning())
    }, [..._cache[3] || (_cache[3] = [
      _createTextVNode(
        " Varning ",
        -1
        /* CACHED */
      )
    ])])), [
      [_directive_test, "generate-warning"]
    ])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-c109b0"
});
export {
  render
};
