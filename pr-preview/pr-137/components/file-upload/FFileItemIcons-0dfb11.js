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

  // virtual-entry:./packages/vue/src/components/FFileItem/examples/FFileItemIcons.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var files = [
    { fileName: "my-image.png", fileType: "image/png" },
    { fileName: "my-document.pdf", fileType: "application/pdf" },
    { fileName: "my-document.doc", fileType: "application/msword" },
    { fileName: "my-file.txt", fileType: "text/plain" }
  ];
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FFileItemIcons",
    components: {
      FFileItem: import_vue4.FFileItem
    },
    data() {
      return { files };
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_file_item = (0, import_vue5.resolveComponent)("f-file-item");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      ((0, import_vue5.openBlock)(true), (0, import_vue5.createElementBlock)(
        import_vue5.Fragment,
        null,
        (0, import_vue5.renderList)(_ctx.files, (item) => {
          return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_file_item, {
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
    selector: "#FFileItemIcons"
  });
})();
