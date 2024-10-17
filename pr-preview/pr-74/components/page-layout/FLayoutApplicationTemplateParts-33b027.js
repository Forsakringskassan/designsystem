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

  // virtual-entry:./docs/components/page-layout/examples/FLayoutApplicationTemplateParts.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FLayoutApplicationTemplateExample",
    components: { FLayoutApplicationTemplate: import_vue4.FLayoutApplicationTemplate }
  });
  var _hoisted_1 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "div",
    { class: "example-header" },
    "[sidhuvud]",
    -1
    /* HOISTED */
  );
  var _hoisted_2 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "div",
    { class: "example-topnav" },
    "[toppnavigering]",
    -1
    /* HOISTED */
  );
  var _hoisted_3 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "div",
    { class: "example-content" },
    "[prim\xE4ryta]",
    -1
    /* HOISTED */
  );
  var _hoisted_4 = /* @__PURE__ */ (0, import_vue5.createElementVNode)(
    "div",
    { class: "example-footer" },
    "[sidfot]",
    -1
    /* HOISTED */
  );
  function render(_ctx, _cache) {
    const _component_f_layout_application_template = (0, import_vue5.resolveComponent)("f-layout-application-template");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_layout_application_template, null, {
      header: (0, import_vue5.withCtx)(() => [
        _hoisted_1
      ]),
      "top-navigation": (0, import_vue5.withCtx)(() => [
        _hoisted_2
      ]),
      footer: (0, import_vue5.withCtx)(() => [
        _hoisted_4
      ]),
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createTextVNode)(),
        (0, import_vue5.createTextVNode)(),
        _hoisted_3,
        (0, import_vue5.createTextVNode)()
      ]),
      _: 1
      /* STABLE */
    });
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FLayoutApplicationTemplateParts"
  });
})();
