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

// virtual-entry:virtual:packages/vue/src/components/FFileItem/examples/FFileItemDefault.vue:FFileItemDefault-15c8fa.js
import { defineComponent } from "vue";
import { FFileItem } from "@fkui/vue";
import { resolveComponent as _resolveComponent, openBlock as _openBlock, createBlock as _createBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FFileItemDefault",
  components: { FFileItem },
  data() {
    return { fileName: "bar.jpg", fileType: "image/jpeg" };
  },
  methods: {}
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_file_item = _resolveComponent("f-file-item");
  return _openBlock(), _createBlock(_component_f_file_item, {
    "file-name": _ctx.fileName,
    "mime-type": _ctx.fileType
  }, null, 8, ["file-name", "mime-type"]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-15c8fa"
});
export {
  render
};
