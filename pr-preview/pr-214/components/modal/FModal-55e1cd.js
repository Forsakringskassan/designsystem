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

  // virtual-entry:./docs/components/modal/FModal.md
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = /* @__PURE__ */ (0, import_vue3.defineComponent)({
    __name: "FModal",
    setup(__props, { expose: __expose }) {
      __expose();
      const { openModal } = (0, import_vue4.useModal)();
      async function onClick() {
        await openModal(ModalExample);
      }
      const __returned__ = { openModal, onClick };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createElementVNode)("button", {
        type: "button",
        class: "button button--secondary",
        onClick: $setup.onClick
      }, " Open ")
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FModal"
  });
})();
