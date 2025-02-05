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

  // virtual-entry:./docs/functions/cypress/pageobjects/FBadgePageObject/FBadgePageObject-is-inverted.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = /* @__PURE__ */ (0, import_vue3.defineComponent)({
    __name: "FBadgePageObject-is-inverted",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { get FBadge() {
        return import_vue4.FBadge;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _directive_test = (0, import_vue5.resolveDirective)("test");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createElementBlock)(
      import_vue5.Fragment,
      null,
      [
        (0, import_vue5.createElementVNode)("div", null, [
          (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)($setup["FBadge"], {
            status: "info",
            inverted: false
          }, {
            default: (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
              (0, import_vue5.createTextVNode)(" My Not Inverted Badge ")
            ])),
            _: 1
            /* STABLE */
          })), [
            [_directive_test, "my-badge-not-inverted"]
          ])
        ]),
        (0, import_vue5.createElementVNode)("div", null, [
          (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)($setup["FBadge"], {
            status: "info",
            inverted: true
          }, {
            default: (0, import_vue5.withCtx)(() => _cache[1] || (_cache[1] = [
              (0, import_vue5.createTextVNode)(" My Inverted Badge ")
            ])),
            _: 1
            /* STABLE */
          })), [
            [_directive_test, "my-badge-inverted"]
          ])
        ])
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }
  exampleComponent.render = render;
  setup({
    rootComponent: exampleComponent,
    selector: "#FBadgePageObject-is-inverted"
  });
})();
