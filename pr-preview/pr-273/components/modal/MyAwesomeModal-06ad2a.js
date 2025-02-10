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

  // virtual-entry:./packages/vue/src/components/FModal/examples/MyAwesomeModal.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = /* @__PURE__ */ (0, import_vue3.defineComponent)({
    __name: "MyAwesomeModal",
    emits: ["close"],
    setup(__props, { expose: __expose, emit: __emit }) {
      __expose();
      const emit = __emit;
      const __returned__ = { emit, get FModal() {
        return import_vue4.FModal;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  var _hoisted_1 = { class: "button-group" };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)($setup["FModal"], {
      "is-open": "",
      onClose: _cache[1] || (_cache[1] = ($event) => $setup.emit("close"))
    }, {
      header: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
        (0, import_vue5.createTextVNode)(" My awesome modal ")
      ])),
      content: (0, import_vue5.withCtx)(() => _cache[3] || (_cache[3] = [
        (0, import_vue5.createTextVNode)(" My awesome content ")
      ])),
      footer: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.createElementVNode)("div", _hoisted_1, [
          (0, import_vue5.createElementVNode)("button", {
            type: "button",
            class: "button button--primary button-group__item button--large",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("close"))
          }, " Close ")
        ])
      ]),
      _: 1
      /* STABLE */
    });
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#MyAwesomeModal"
  });
})();
