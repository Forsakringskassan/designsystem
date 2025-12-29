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

// virtual-entry:virtual:docs/functions/functions/dom-functions/focus.md:focus-6dbd37.js
import { defineComponent } from "vue";
import { focus } from "@fkui/vue";
import { createElementVNode as _createElementVNode, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  mounted() {
    focus(this.$refs.header);
  }
});
var _hoisted_1 = {
  ref: "header",
  tabindex: "-1"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    _Fragment,
    null,
    [
      _createElementVNode(
        "h1",
        _hoisted_1,
        "Important Section",
        512
        /* NEED_PATCH */
      ),
      _cache[0] || (_cache[0] = _createElementVNode(
        "p",
        null,
        "Some interesting content.",
        -1
        /* CACHED */
      ))
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-6dbd37"
});
export {
  render
};
