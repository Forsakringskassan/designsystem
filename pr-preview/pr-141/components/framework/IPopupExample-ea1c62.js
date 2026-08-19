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

  // virtual-entry:./packages/vue/src/internal-components/IPopup/examples/IPopupExample.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "IPopupExample",
    components: { IPopup: import_vue4.IPopup },
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      onClickOpen() {
        this.isOpen = true;
      },
      onClickClose() {
        this.isOpen = false;
      },
      onClose() {
        this.isOpen = false;
      }
    }
  });
  var _hoisted_1 = { class: "my-awesome-popup" };
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_i_popup = (0, import_vue5.resolveComponent)("i-popup");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)("div", null, [
      (0, import_vue5.createElementVNode)(
        "button",
        {
          ref: "popupAnchor",
          type: "button",
          class: "button button--secondary",
          onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClickOpen && _ctx.onClickOpen(...args))
        },
        " \xD6ppna popup ",
        512
        /* NEED_PATCH */
      ),
      (0, import_vue5.createVNode)(_component_i_popup, {
        "is-open": _ctx.isOpen,
        anchor: _ctx.$refs.popupAnchor,
        onClose: _ctx.onClose
      }, {
        default: (0, import_vue5.withCtx)(() => [
          (0, import_vue5.createElementVNode)("div", _hoisted_1, [
            _cache[2] || (_cache[2] = (0, import_vue5.createElementVNode)(
              "p",
              null,
              " Tr\xE4utensilierna i ett tryckeri \xE4ro ingalunda en oviktig faktor, f\xF6r trevnadens, ordningens och ekonomiens uppr\xE4tth\xE5llande, och dock \xE4r det icke s\xE4llan som sorgliga erfarenheter g\xF6ras p\xE5 grund af det of\xF6rst\xE5nd med hvilket kaster, formbr\xE4den och regaler tillverkas och f\xF6rs\xE4ljas Kaster som \xE4ro d\xE5ligt hopkomna och af otillr\xE4ckligt. ",
              -1
              /* HOISTED */
            )),
            (0, import_vue5.createElementVNode)("button", {
              type: "button",
              class: "button button--tertiary",
              onClick: _cache[1] || (_cache[1] = (...args) => _ctx.onClickClose && _ctx.onClickClose(...args))
            }, " St\xE4ng popup ")
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["is-open", "anchor", "onClose"])
    ]);
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#IPopupExample"
  });
})();
