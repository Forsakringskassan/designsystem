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

  // virtual-entry:./packages/vue/src/components/FModal/examples/FConfirmModalApiExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FConfirmModalExample",
    data() {
      return {
        frukt: {
          namn: "Mango"
        }
      };
    },
    methods: {
      confirmRemove(frukt) {
        return (0, import_vue4.confirmModal)(this, {
          heading: "Ta bort frukt",
          content: `\xC4r du s\xE4ker att du vill ta bort "${frukt.namn}"?`,
          confirm: "Ja, ta bort",
          dismiss: "Nej, beh\xE5ll"
        });
      },
      async onClick() {
        if (await this.confirmRemove(this.frukt)) {
          alert("Bekr\xE4ftade");
        }
      }
    }
  });
  var _hoisted_1 = { class: "f-confirm-modal" };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", _hoisted_1, [
      (0, import_vue5.createElementVNode)("button", {
        type: "button",
        class: "button button--secondary",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, "Ta bort")
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FConfirmModalApiExample"
  });
})();
