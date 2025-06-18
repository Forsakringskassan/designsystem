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

// virtual-entry:virtual:packages/vue/src/components/FFileItem/examples/FFileItemButtonProgress.vue:FFileItemButtonProgress-8ecc2c.js
import { defineComponent } from "vue";
import { FFileItem, FIcon, FProgressbar } from "@fkui/vue";
import { vModelText as _vModelText, createElementVNode as _createElementVNode, withDirectives as _withDirectives, createTextVNode as _createTextVNode, resolveComponent as _resolveComponent, createVNode as _createVNode, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, createBlock as _createBlock, withCtx as _withCtx } from "vue";
var exampleComponent = defineComponent({
  name: "FFileItemButtonProgress",
  components: { FFileItem, FIcon, FProgressbar },
  data() {
    return {
      fileName: "bar.pdf",
      mimeType: "application/pdf",
      progress: 30,
      filteredProgress: 30
    };
  }
});
var _hoisted_1 = {
  key: 0,
  type: "button",
  class: "button button--tertiary button--medium file-item__file-remove file-item__abort"
};
var _hoisted_2 = {
  key: 1,
  type: "button",
  class: "button button--tertiary button--medium file-item__file-remove"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_f_icon = _resolveComponent("f-icon");
  const _component_f_progressbar = _resolveComponent("f-progressbar");
  const _component_f_file_item = _resolveComponent("f-file-item");
  return _openBlock(), _createElementBlock("div", null, [
    _createElementVNode("label", null, [
      _cache[2] || (_cache[2] = _createTextVNode(" Progress: ")),
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
        _ctx.progress < 100 ? (_openBlock(), _createElementBlock("button", _hoisted_1, [
          _createVNode(_component_f_icon, {
            name: "close",
            class: "button__icon"
          }),
          _cache[3] || (_cache[3] = _createElementVNode(
            "span",
            null,
            " Avbryt uppladdning ",
            -1
            /* HOISTED */
          ))
        ])) : _ctx.progress === 100 ? (_openBlock(), _createElementBlock("button", _hoisted_2, [
          _createVNode(_component_f_icon, {
            name: "trashcan",
            class: "button__icon"
          }),
          _cache[4] || (_cache[4] = _createTextVNode(" Ta bort "))
        ])) : _createCommentVNode("v-if", true)
      ]),
      default: _withCtx(() => [
        _ctx.progress < 100 ? (_openBlock(), _createBlock(_component_f_progressbar, {
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
  selector: "#example-8ecc2c"
});
export {
  render
};
