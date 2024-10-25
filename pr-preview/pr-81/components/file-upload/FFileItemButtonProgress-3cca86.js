"use strict";
(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // docs/src/setup.ts
  var import_vue = __require("vue");
  var import_vue2 = __require("@fkui/vue");
  function setup(options) {
    const { rootComponent, selector } = options;
    const app = (0, import_vue.createApp)({
      render() {
        return (0, import_vue.h)(import_vue2.FErrorHandlingApp, { defaultComponent: rootComponent });
      }
    });
    (0, import_vue2.setRunningContext)(app);
    app.use(import_vue2.ErrorPlugin, {
      captureWarnings: true,
      logToConsole: true
    });
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
  }

  // virtual-entry:./packages/vue/src/components/FFileItem/examples/FFileItemButtonProgress.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FFileItemButtonProgress",
    components: { FFileItem: import_vue4.FFileItem, FIcon: import_vue4.FIcon, FProgressbar: import_vue4.FProgressbar },
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
    const _component_f_icon = (0, import_vue5.resolveComponent)("f-icon");
    const _component_f_progressbar = (0, import_vue5.resolveComponent)("f-progressbar");
    const _component_f_file_item = (0, import_vue5.resolveComponent)("f-file-item");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createElementVNode)("label", null, [
        _cache[2] || (_cache[2] = (0, import_vue5.createTextVNode)(" Progress: ")),
        (0, import_vue5.withDirectives)((0, import_vue5.createElementVNode)(
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
            import_vue5.vModelText,
            _ctx.progress,
            void 0,
            { number: true }
          ]
        ])
      ]),
      (0, import_vue5.createVNode)(_component_f_file_item, {
        "file-name": _ctx.fileName,
        "mime-type": _ctx.mimeType
      }, {
        row: (0, import_vue5.withCtx)(() => [
          _ctx.progress < 100 ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("button", _hoisted_1, [
            (0, import_vue5.createVNode)(_component_f_icon, {
              name: "close",
              class: "button__icon"
            }),
            _cache[3] || (_cache[3] = (0, import_vue5.createElementVNode)(
              "span",
              null,
              " Avbryt uppladdning ",
              -1
              /* HOISTED */
            ))
          ])) : _ctx.progress === 100 ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("button", _hoisted_2, [
            (0, import_vue5.createVNode)(_component_f_icon, {
              name: "trashcan",
              class: "button__icon"
            }),
            _cache[4] || (_cache[4] = (0, import_vue5.createTextVNode)(" Ta bort "))
          ])) : (0, import_vue5.createCommentVNode)("v-if", true)
        ]),
        default: (0, import_vue5.withCtx)(() => [
          _ctx.progress < 100 ? ((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_progressbar, {
            key: 0,
            "aria-label": "progress",
            value: _ctx.filteredProgress
          }, null, 8, ["value"])) : (0, import_vue5.createCommentVNode)("v-if", true)
        ]),
        _: 1
        /* STABLE */
      }, 8, ["file-name", "mime-type"])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FFileItemButtonProgress"
  });
})();
