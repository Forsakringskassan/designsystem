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
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_layout_application_template = (0, import_vue5.resolveComponent)("f-layout-application-template");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_layout_application_template, null, {
      header: (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
        (0, import_vue5.createElementVNode)(
          "div",
          { class: "example-header" },
          "[sidhuvud]",
          -1
          /* HOISTED */
        )
      ])),
      "top-navigation": (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
        (0, import_vue5.createElementVNode)(
          "div",
          { class: "example-topnav" },
          "[toppnavigering]",
          -1
          /* HOISTED */
        )
      ])),
      footer: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
        (0, import_vue5.createElementVNode)(
          "div",
          { class: "example-footer" },
          "[sidfot]",
          -1
          /* HOISTED */
        )
      ])),
      default: (0, import_vue5.withCtx)(() => [
        _cache[3] || (_cache[3] = (0, import_vue5.createElementVNode)(
          "div",
          { class: "example-content" },
          "[prim\xE4ryta]",
          -1
          /* HOISTED */
        ))
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
