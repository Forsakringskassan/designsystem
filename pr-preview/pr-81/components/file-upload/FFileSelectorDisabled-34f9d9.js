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

  // virtual-entry:./packages/vue/src/components/FFileSelector/examples/FFileSelectorDisabled.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FFileSelectorDisabled",
    components: { FFileSelector: import_vue4.FFileSelector }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_file_selector = (0, import_vue5.resolveComponent)("f-file-selector");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_file_selector, {
      id: "dis",
      accept: "image/jpeg, image/tiff",
      disabled: ""
    }, {
      default: (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
        (0, import_vue5.createTextVNode)(" L\xE4gg till fil ")
      ])),
      _: 1
      /* STABLE */
    });
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FFileSelectorDisabled"
  });
})();
