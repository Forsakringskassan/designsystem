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

  // virtual-entry:./docs/functions/cypress/pageobjects/FLabelPageObject/FLabelPageObject-error-message.vue
  var import_vue3 = __require("vue");
  var import_vue4 = __require("@fkui/vue");
  var import_vue5 = __require("vue");
  var exampleComponent = /* @__PURE__ */ (0, import_vue3.defineComponent)({
    __name: "FLabelPageObject-error-message",
    setup(__props, { expose: __expose }) {
      __expose();
      const __returned__ = { get FTextField() {
        return import_vue4.FTextField;
      }, get FValidationForm() {
        return import_vue4.FValidationForm;
      } };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _directive_validation = (0, import_vue5.resolveDirective)("validation");
    const _directive_test = (0, import_vue5.resolveDirective)("test");
    return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)($setup["FValidationForm"], null, {
      default: (0, import_vue5.withCtx)(() => [
        (0, import_vue5.withDirectives)(((0, import_vue5.openBlock)(), (0, import_vue5.createBlock)($setup["FTextField"], null, {
          default: (0, import_vue5.withCtx)(() => _cache[0] || (_cache[0] = [
            (0, import_vue5.createTextVNode)(" Etikett ")
          ])),
          _: 1
          /* STABLE */
        })), [
          [
            _directive_validation,
            void 0,
            void 0,
            { required: true }
          ],
          [_directive_test, "awesome-label"]
        ]),
        _cache[1] || (_cache[1] = (0, import_vue5.createElementVNode)(
          "button",
          {
            type: "submit",
            class: "button button--primary"
          },
          "Skicka in",
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
    selector: "#FLabelPageObject-error-message"
  });
})();
