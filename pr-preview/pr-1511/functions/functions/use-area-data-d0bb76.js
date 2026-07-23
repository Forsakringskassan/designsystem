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

// virtual-entry:virtual:docs/functions/functions/use-area-data.md:use-area-data-d0bb76.js
import { defineComponent as _defineComponent } from "vue";
import { computed, useTemplateRef } from "vue";
import { useAreaData } from "@fkui/vue";
import { openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = /* @__PURE__ */ _defineComponent({
  __name: "use-area-data",
  setup(__props, { expose: __expose }) {
    __expose();
    const element = useTemplateRef("my-root-element");
    const { attachPanel } = useAreaData(element);
    const attachClass = computed(() => {
      switch (attachPanel.value) {
        case "left":
          return "attach-left";
        case "right":
          return "attach-right";
      }
      return void 0;
    });
    const __returned__ = { element, attachPanel, attachClass };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
var _hoisted_1 = { ref: "my-root-element" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createElementBlock(
    "div",
    _hoisted_1,
    null,
    512
    /* NEED_PATCH */
  );
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-d0bb76"
});
export {
  render
};
