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

  // virtual-entry:./docs/components/links/entrypoint.md
  var import_vue3 = __require("@fkui/vue");
  var import_vue4 = __require("vue");
  var exampleComponent = {
    __name: "entrypoint",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { get FIcon() {
        return import_vue3.FIcon;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  };
  var _hoisted_1 = {
    class: "entrypoint",
    href: "javascript:"
  };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("a", _hoisted_1, [
      _cache[0] || (_cache[0] = (0, import_vue4.createTextVNode)(" Ans\xF6k om hundbidrag ")),
      _cache[1] || (_cache[1] = (0, import_vue4.createElementVNode)(
        "span",
        { class: "sr-only" },
        " Till tj\xE4nsten ans\xF6k om hundbidrag ",
        -1
        /* HOISTED */
      )),
      (0, import_vue4.createVNode)($setup["FIcon"], {
        name: "arrow-right",
        class: "entrypoint__icon"
      })
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#entrypoint"
  });
})();
