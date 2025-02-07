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

  // virtual-entry:./docs/functions/cypress/pageobjects/FLabelPageObject/FLabelPageObject-format-description.vue
  var import_vue3 = __require("vue");
  var exampleComponent = {};
  function render(_ctx, _cache) {
    const _component_f_label = (0, import_vue3.resolveComponent)("f-label");
    const _directive_test = (0, import_vue3.resolveDirective)("test");
    return (0, import_vue3.withDirectives)(((0, import_vue3.openBlock)(), (0, import_vue3.createBlock)(_component_f_label, null, {
      default: (0, import_vue3.withCtx)(() => _cache[0] || (_cache[0] = [
        (0, import_vue3.createTextVNode)(" Etikett ")
      ])),
      description: (0, import_vue3.withCtx)(({ formatDescriptionClass }) => [
        (0, import_vue3.createElementVNode)(
          "span",
          {
            class: (0, import_vue3.normalizeClass)(formatDescriptionClass)
          },
          " Formatbeskrivning ",
          2
          /* CLASS */
        )
      ]),
      _: 1
      /* STABLE */
    })), [
      [_directive_test, "awesome-label"]
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FLabelPageObject-format-description"
  });
})();
