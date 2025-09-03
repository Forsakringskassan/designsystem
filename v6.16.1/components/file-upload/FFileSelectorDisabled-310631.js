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

// virtual-entry:virtual:packages/vue/src/components/FFileSelector/examples/FFileSelectorDisabled.vue:FFileSelectorDisabled-310631.js
import { defineComponent } from "vue";
import { FFileSelector } from "@fkui/vue";
import { createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FFileSelectorDisabled",
  components: { FFileSelector }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_file_selector = _resolveComponent("f-file-selector");
  return _openBlock(), _createBlock(_component_f_file_selector, {
    id: "dis",
    accept: "image/jpeg, image/tiff",
    disabled: ""
  }, {
    default: _withCtx(() => [..._cache[0] || (_cache[0] = [
      _createTextVNode(
        " L\xE4gg till fil ",
        -1
        /* CACHED */
      )
    ])]),
    _: 1
    /* STABLE */
  });
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-310631"
});
export {
  render
};
