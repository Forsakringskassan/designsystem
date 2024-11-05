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

  // virtual-entry:./packages/vue/src/plugins/validation/examples/ValidationPluginRevalidate.vue
  var import_vue3 = __require("vue");
  var import_logic = __require("@fkui/logic");
  var import_vue4 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "ValidationPluginRevalidate",
    methods: {
      validateAllFieldsOnPage() {
        const selector = "input, textarea, select";
        const elements = Array.from(document.querySelectorAll(selector));
        for (const element of elements.filter((element2) => element2.id)) {
          import_logic.ValidationService.setSubmitted(element);
        }
        import_logic.ValidationService.validateAllElements("rsg-root");
      }
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("button", {
      class: "button button--primary",
      type: "button",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.validateAllFieldsOnPage())
    }, " Validera alla f\xE4lt p\xE5 sidan ");
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#ValidationPluginRevalidate"
  });
})();
