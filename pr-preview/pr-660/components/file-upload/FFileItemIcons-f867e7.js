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

// virtual-entry:virtual:packages/vue/src/components/FFileItem/examples/FFileItemIcons.vue:FFileItemIcons-f867e7.js
import { defineComponent } from "vue";
import { FFileItem } from "@fkui/vue";
import { renderList as _renderList, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock, resolveComponent as _resolveComponent, createBlock as _createBlock } from "vue";
var files = [
  { fileName: "my-image.png", fileType: "image/png" },
  { fileName: "my-document.pdf", fileType: "application/pdf" },
  { fileName: "my-document.doc", fileType: "application/msword" },
  { fileName: "my-file.txt", fileType: "text/plain" }
];
var exampleComponent = defineComponent({
  name: "FFileItemIcons",
  components: {
    FFileItem
  },
  data() {
    return { files };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_file_item = _resolveComponent("f-file-item");
  return _openBlock(), _createElementBlock("div", null, [
    (_openBlock(true), _createElementBlock(
      _Fragment,
      null,
      _renderList(_ctx.files, (item) => {
        return _openBlock(), _createBlock(_component_f_file_item, {
          key: item.fileName,
          "file-name": item.fileName,
          "mime-type": item.fileType
        }, null, 8, ["file-name", "mime-type"]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-f867e7"
});
export {
  render
};
