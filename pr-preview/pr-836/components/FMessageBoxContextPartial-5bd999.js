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

  // virtual-entry:./packages/vue/src/components/FMessageBox/examples/FMessageBoxContextPartial.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = (0, import_vue3.defineComponent)({
    name: "FMessageBoxContextPartial",
    components: { FMessageBox: import_vue4.FMessageBox }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_f_message_box = (0, import_vue5.resolveComponent)("f-message-box");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(_component_f_message_box, {
      type: "info",
      "provide-screen-reader-context": false
    }, {
      default: (0, import_vue5.withCtx)(({ headingSlotClass }) => [
        (0, import_vue5.createElementVNode)(
          "h2",
          {
            class: (0, import_vue5.normalizeClass)(headingSlotClass)
          },
          _cache[0] || (_cache[0] = [
            (0, import_vue5.createElementVNode)(
              "span",
              { class: "sr-only" },
              " Sk\xE4rml\xE4sarinformation kombinerad med befintlig titel ",
              -1
              /* HOISTED */
            ),
            (0, import_vue5.createTextVNode)(" En rubrik som kombineras med en sk\xE4rml\xE4sartext f\xF6r att tydligt f\xF6rklara sin kontext n\xE4r den f\xE5r fokus ")
          ]),
          2
          /* CLASS */
        ),
        _cache[1] || (_cache[1] = (0, import_vue5.createElementVNode)(
          "p",
          null,
          "Komponenten kommer vid fokus inte l\xE4ngre att l\xE4sa texten Informationsmeddelande.",
          -1
          /* HOISTED */
        ))
      ]),
      _: 1
      /* STABLE */
    });
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FMessageBoxContextPartial"
  });
})();
