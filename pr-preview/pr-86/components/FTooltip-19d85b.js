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

  // virtual-entry:./docs/components/FTooltip.md
  var import_vue3 = __require("vue");
  var exampleComponent = {};
  var _hoisted_1 = { ref: "heading" };
  function render(_ctx, _cache) {
    const _component_f_tooltip = (0, import_vue3.resolveComponent)("f-tooltip", true);
    return (0, import_vue3.openBlock)(), (0, import_vue3.createElementBlock)(
      import_vue3.Fragment,
      null,
      [
        (0, import_vue3.createElementVNode)(
          "div",
          _hoisted_1,
          _cache[0] || (_cache[0] = [
            (0, import_vue3.createElementVNode)(
              "h2",
              null,
              "En rubrik",
              -1
              /* HOISTED */
            )
          ]),
          512
          /* NEED_PATCH */
        ),
        _cache[2] || (_cache[2] = (0, import_vue3.createTextVNode)()),
        (0, import_vue3.createVNode)(_component_f_tooltip, {
          "attach-to": "heading",
          "screen-reader-text": "Sk\xE4rml\xE4sartext"
        }, {
          body: (0, import_vue3.withCtx)(() => _cache[1] || (_cache[1] = [
            (0, import_vue3.createTextVNode)(" Lorem ipsum dolor sit amet. ")
          ])),
          _: 1
          /* STABLE */
        })
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FTooltip"
  });
})();
