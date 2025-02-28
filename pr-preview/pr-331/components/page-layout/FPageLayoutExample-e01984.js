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

  // virtual-entry:./packages/vue/src/components/FPageLayout/examples/FPageLayoutExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = /* @__PURE__ */ (0, import_vue3.defineComponent)({
    __name: "FPageLayoutExample",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { get FPageLayout() {
        return import_vue4.FPageLayout;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)($setup["FPageLayout"], { layout: "three-column" }, {
      header: (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
        (0, import_vue5.createElementVNode)(
          "header",
          { class: "my-header" },
          "[header]",
          -1
          /* HOISTED */
        )
      ])),
      left: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
        (0, import_vue5.createElementVNode)(
          "div",
          { class: "my-left-panel" },
          "[left]",
          -1
          /* HOISTED */
        )
      ])),
      right: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
        (0, import_vue5.createElementVNode)(
          "div",
          { class: "my-right-panel" },
          "[right]",
          -1
          /* HOISTED */
        )
      ])),
      content: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
        (0, import_vue5.createElementVNode)(
          "main",
          { class: "my-content" },
          "[main]",
          -1
          /* HOISTED */
        )
      ])),
      footer: (0, import_vue5.withCtx)(() => _cache[4] || (_cache[4] = [
        (0, import_vue5.createElementVNode)(
          "footer",
          { class: "my-footer" },
          "[footer]",
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    });
  }
  exampleComponent.render = render;
  exampleComponent.__scopeId = "data-v-e01984";
  setup({
    rootComponent: exampleComponent,
    selector: "#FPageLayoutExample"
  });
})();
