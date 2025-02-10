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

  // virtual-entry:./packages/vue/src/components/FContextMenu/examples/FContextMenuExampleTextOnly.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleItems = [
    { label: "Skriv ut", key: "MENU_1" },
    { label: "P\xE5minnelse", key: "MENU_2" },
    { label: "\xC4ndra", key: "MENU_3" },
    { separator: true },
    { label: "Ta bort", key: "MENU_4" },
    { label: "Utan ikon", key: "MENU_5" },
    { separator: true },
    { label: "Sista menyval med l\xE4ngsta bredd som \xF6verstiger 260px", key: "MENU_6" }
  ];
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FContextMenuExampleTextOnly",
    components: { FContextMenu: import_vue4.FContextMenu },
    data() {
      return {
        items: exampleItems,
        selected: "",
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
      },
      onSelect(value) {
        this.selected = value;
      }
    }
  });
  var _hoisted_1 = { "data-testid": "fcontextmenu-exempel2" };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_context_menu = (0, import_vue5.resolveComponent)("f-context-menu");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", _hoisted_1, [
      (0, import_vue5.createElementVNode)(
        "button",
        {
          ref: "popupAnchor",
          "data-test": "open-example-contextmenu-button",
          type: "button",
          class: "button button--primary",
          "aria-haspopup": "menu",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
        },
        " \xD6ppna ",
        512
        /* NEED_PATCH */
      ),
      (0, import_vue5.createElementVNode)(
        "pre",
        null,
        "Selected: " + (0, import_vue5.toDisplayString)(_ctx.selected),
        1
        /* TEXT */
      ),
      (0, import_vue5.createVNode)(_component_f_context_menu, {
        "is-open": _ctx.isOpen,
        items: _ctx.items,
        anchor: _ctx.getAnchor(),
        onClose: _ctx.onClose,
        onSelect: _ctx.onSelect
      }, null, 8, ["is-open", "items", "anchor", "onClose", "onSelect"])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FContextMenuExampleTextOnly"
  });
})();
