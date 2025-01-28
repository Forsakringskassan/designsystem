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

  // virtual-entry:./packages/vue/src/components/FModal/examples/FConfirmModalExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FConfirmModalExample",
    components: { FConfirmModal: import_vue4.FConfirmModal },
    inheritAttrs: true,
    data() {
      return {
        action: "",
        result: "",
        isOpen: false,
        buttons: [
          { label: "Ja, g\xF6r detta", event: "confirm", type: "primary" },
          { label: "Nej, g\xF6r inte detta", event: "dismiss", type: "secondary" }
        ]
      };
    },
    methods: {
      onClick() {
        this.isOpen = true;
        this.result = "";
      },
      confirm() {
        this.result = "bekr\xE4ftade";
        this.isOpen = false;
      },
      dismiss() {
        this.result = "avb\xF6jde";
        this.isOpen = false;
      },
      close(reason) {
        this.action = reason;
        this.isOpen = false;
      }
    }
  });
  var _hoisted_1 = { class: "f-confirm-modal" };
  var _hoisted_2 = { key: 0 };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_confirm_modal = (0, import_vue5.resolveComponent)("f-confirm-modal");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", _hoisted_1, [
      (0, import_vue5.createElementVNode)("button", {
        type: "button",
        class: "button button--secondary",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
      }, "\xD6ppna Modal"),
      _ctx.result ? ((0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
        "pre",
        _hoisted_2,
        " Resultat: " + (0, import_vue5.toDisplayString)(_ctx.result) + " ",
        1
        /* TEXT */
      )) : (0, import_vue5.createCommentVNode)("v-if", true),
      (0, import_vue5.createElementVNode)("div", null, [
        (0, import_vue5.createVNode)(_component_f_confirm_modal, {
          "is-open": _ctx.isOpen,
          buttons: _ctx.buttons,
          onConfirm: _ctx.confirm,
          onDismiss: _ctx.dismiss,
          onClose: _ctx.close
        }, {
          heading: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
            (0, import_vue5.createTextVNode)(" Tr\xE4utensilierna ")
          ])),
          content: (0, import_vue5.withCtx)(() => _cache[2] || (_cache[2] = [
            (0, import_vue5.createTextVNode)(" Tr\xE4utensilierna i ett tryckeri \xE4ro ingalunda en oviktig faktor, f\xF6r trevnadens, ordningens och ekonomiens uppr\xE4tth\xE5llande, och dock \xE4r det icke s\xE4llan som sorgliga erfarenheter g\xF6ras p\xE5 grund af det of\xF6rst\xE5nd med hvilket kaster, formbr\xE4den och regaler tillverkas och f\xF6rs\xE4ljas Kaster som \xE4ro d\xE5ligt hopkomna och af otillr\xE4ckligt. ")
          ])),
          _: 1
          /* STABLE */
        }, 8, ["is-open", "buttons", "onConfirm", "onDismiss", "onClose"])
      ])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FConfirmModalExample"
  });
})();
