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

  // virtual-entry:./packages/vue/src/components/FModal/examples/FConfirmModalCustomButtons.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FConfirmModalExample",
    data() {
      return {
        action: void 0,
        isOpen: false,
        threeButtons: [
          {
            label: "Ja, ta bort",
            type: "primary",
            screenreader: "telefonnumret",
            event: "confirm"
          },
          { label: "Nej, uppdatera telefonnumret", event: "update" },
          { label: "Nej, ta inte bort", screenreader: "telefonnumret", event: "dismiss" }
        ]
      };
    },
    methods: {
      async onClick() {
        this.action = await (0, import_vue4.openModal)(this, import_vue4.FConfirmModal, {
          props: {
            heading: "Ta bort telefonnummer",
            content: "Vill du ta bort ditt telefonnummer?",
            buttons: this.threeButtons,
            size: "large"
          }
        });
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
      }, "Tre knappar"),
      (0, import_vue5.createElementVNode)(
        "pre",
        null,
        " Modalen st\xE4ngdes med resultatet: " + (0, import_vue5.toDisplayString)(_ctx.action) + " ",
        1
        /* TEXT */
      )
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FConfirmModalCustomButtons"
  });
})();
