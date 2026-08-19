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
    app.use(import_vue2.ErrorPlugin);
    app.use(import_vue2.ValidationPlugin);
    app.use(import_vue2.TestPlugin);
    app.use(import_vue2.TranslationPlugin);
    app.mount(selector);
    app.config.warnHandler = (msg, vm, trace) => {
      console.warn(`Warning:`, msg, trace);
      throw new Error(msg);
    };
  }

  // virtual-entry:./packages/vue/src/internal-components/IPopupMenu/examples/IPopupMenuExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleItems = [
    { label: "Det", key: "MENU_1", href: "/qwe" },
    { label: "var", key: "MENU_2" },
    { label: "en", key: "MENU_3" },
    { label: "finliten", key: "MENU_4" },
    { label: "meny", key: "MENU_5" },
    { label: "som \xE4r", key: "MENU_6" },
    { label: "r\xE4tt l\xE5ng", key: "MENU_7" },
    { label: "och inneh\xE5llet", key: "MENU_8" },
    { label: "kommer", key: "MENU_9" },
    { label: "wrappas", key: "MENU_10" },
    { label: "Med href", key: "MENU_HREF", href: "/" },
    { label: "Testar target", key: "MENU_EXTERN", href: "http://www.google.com", target: "_blank" }
  ];
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "IPopupMenuExample",
    components: { IPopupMenu: import_vue4.IPopupMenu },
    data() {
      return {
        items: exampleItems,
        model: "",
        isOpen: false
      };
    },
    methods: {
      getAnchor() {
        return this.$refs.popupAnchor;
      },
      onClose() {
        this.isOpen = false;
      },
      onClick() {
        this.isOpen = !this.isOpen;
      }
    }
  });
  function render(_ctx, _cache) {
    const _component_i_popup_menu = (0, import_vue5.resolveComponent)("i-popup-menu");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createElementVNode)(
        "button",
        {
          ref: "popupAnchor",
          type: "button",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
        },
        "\xD6ppna",
        512
        /* NEED_PATCH */
      ),
      (0, import_vue5.createTextVNode)(),
      (0, import_vue5.createElementVNode)(
        "pre",
        null,
        "Highlight: " + (0, import_vue5.toDisplayString)(_ctx.model),
        1
        /* TEXT */
      ),
      (0, import_vue5.createTextVNode)(),
      (0, import_vue5.createVNode)(_component_i_popup_menu, {
        modelValue: _ctx.model,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.model = $event),
        "is-open": _ctx.isOpen,
        items: _ctx.items,
        anchor: _ctx.getAnchor(),
        "enable-keyboard-navigation": true,
        onClose: _ctx.onClose
      }, null, 8, ["modelValue", "is-open", "items", "anchor", "onClose"])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#IPopupMenuExample"
  });
})();
