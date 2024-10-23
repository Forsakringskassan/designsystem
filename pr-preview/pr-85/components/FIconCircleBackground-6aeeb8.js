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

  // virtual-entry:./packages/vue/src/components/FIcon/examples/FIconCircleBackground.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FIconCircleBackground",
    components: { FIcon: import_vue4.FIcon }
  });
  var _hoisted_1 = { class: "icon-stack icon-stack--circle" };
  var _hoisted_2 = { class: "icon-stack icon-stack--circle" };
  var _hoisted_3 = { class: "icon-stack icon-stack--circle-bottom" };
  var _hoisted_4 = { class: "icon-stack icon-stack--circle-bottom" };
  function render(_ctx, _cache) {
    const _component_f_icon = (0, import_vue5.resolveComponent)("f-icon");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createElementVNode)("div", null, [
        (0, import_vue5.createElementVNode)("div", _hoisted_1, [
          (0, import_vue5.createVNode)(_component_f_icon, { name: "circle" }),
          _cache[0] || (_cache[0] = (0, import_vue5.createTextVNode)()),
          (0, import_vue5.createVNode)(_component_f_icon, { name: "success" })
        ]),
        _cache[2] || (_cache[2] = (0, import_vue5.createTextVNode)()),
        (0, import_vue5.createElementVNode)("div", _hoisted_2, [
          (0, import_vue5.createVNode)(_component_f_icon, { name: "circle" }),
          _cache[1] || (_cache[1] = (0, import_vue5.createTextVNode)()),
          (0, import_vue5.createVNode)(_component_f_icon, { name: "bell" })
        ])
      ]),
      _cache[6] || (_cache[6] = (0, import_vue5.createTextVNode)()),
      (0, import_vue5.createElementVNode)("div", null, [
        (0, import_vue5.createElementVNode)("div", _hoisted_3, [
          (0, import_vue5.createVNode)(_component_f_icon, { name: "circle" }),
          _cache[3] || (_cache[3] = (0, import_vue5.createTextVNode)()),
          (0, import_vue5.createVNode)(_component_f_icon, { name: "success" })
        ]),
        _cache[5] || (_cache[5] = (0, import_vue5.createTextVNode)()),
        (0, import_vue5.createElementVNode)("div", _hoisted_4, [
          (0, import_vue5.createVNode)(_component_f_icon, { name: "circle" }),
          _cache[4] || (_cache[4] = (0, import_vue5.createTextVNode)()),
          (0, import_vue5.createVNode)(_component_f_icon, { name: "bell" })
        ])
      ])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FIconCircleBackground"
  });
})();
