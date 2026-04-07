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

// virtual-entry:virtual:packages/vue/src/components/FFileItem/examples/FFileItemButtonProgress.vue:FFileItemButtonProgress-275298.js
import { defineComponent } from "vue";
import { FButton, FFileItem, FProgressbar } from "@fkui/vue";
import { vModelText as _vModelText, createElementVNode as _createElementVNode, withDirectives as _withDirectives, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, withCtx as _withCtx, openBlock as _openBlock, createBlock as _createBlock, createCommentVNode as _createCommentVNode, createVNode as _createVNode, createElementBlock as _createElementBlock } from "vue";
var exampleComponent = defineComponent({
  name: "FFileItemButtonProgress",
  components: { FButton, FFileItem, FProgressbar },
  data() {
    return {
      fileName: "bar.pdf",
      mimeType: "application/pdf",
      progress: 30,
      filteredProgress: 30
    };
  }
});
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_button = _resolveComponent("f-button");
  const _component_f_progressbar = _resolveComponent("f-progressbar");
  const _component_f_file_item = _resolveComponent("f-file-item");
  return _openBlock(), _createElementBlock("div", null, [
    _createElementVNode("label", null, [
      _cache[2] || (_cache[2] = _createTextVNode(
        " Progress: ",
        -1
        /* CACHED */
      )),
      _withDirectives(_createElementVNode(
        "input",
        {
          id: "upload-progress",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.progress = $event),
          type: "number",
          style: { "margin-bottom": "20px" },
          onInput: _cache[1] || (_cache[1] = ($event) => _ctx.filteredProgress = _ctx.progress === "" ? 0 : _ctx.progress)
        },
        null,
        544
        /* NEED_HYDRATION, NEED_PATCH */
      ), [
        [
          _vModelText,
          _ctx.progress,
          void 0,
          { number: true }
        ]
      ])
    ]),
    _createVNode(_component_f_file_item, {
      "file-name": _ctx.fileName,
      "mime-type": _ctx.mimeType
    }, {
      row: _withCtx(() => [
        _ctx.filteredProgress < 100 ? (_openBlock(), _createBlock(_component_f_button, {
          key: 0,
          class: "file-item__file-remove file-item__abort",
          "icon-left": "close",
          variant: "tertiary"
        }, {
          default: _withCtx(() => [..._cache[3] || (_cache[3] = [
            _createTextVNode(
              " Avbryt uppladdning ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        })) : _ctx.filteredProgress === 100 ? (_openBlock(), _createBlock(_component_f_button, {
          key: 1,
          class: "file-item__file-remove",
          "icon-left": "trashcan",
          variant: "tertiary"
        }, {
          default: _withCtx(() => [..._cache[4] || (_cache[4] = [
            _createTextVNode(
              " Ta bort ",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        })) : _createCommentVNode("v-if", true)
      ]),
      default: _withCtx(() => [
        _ctx.filteredProgress < 100 ? (_openBlock(), _createBlock(_component_f_progressbar, {
          key: 0,
          "aria-label": "progress",
          value: _ctx.filteredProgress
        }, null, 8, ["value"])) : _createCommentVNode("v-if", true)
      ]),
      _: 1
      /* STABLE */
    }, 8, ["file-name", "mime-type"])
  ]);
}
exampleComponent.render = render;
setup({
  rootComponent: exampleComponent,
  selector: "#example-275298"
});
export {
  render
};
